/**
 * XP / streak / level system for Marketing Academy.
 *
 * All state lives in localStorage under ENGAGEMENT_KEY ("ma_engagement").
 * Components must NEVER read localStorage directly, always use getEngagement().
 *
 * Typical call sequence from any component that awards XP:
 *   import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
 *   import { checkAchievements } from "@/lib/achievements";
 *
 *   const newState = addXP("complete", lessonId);
 *   const unlocked = checkAchievements(newState);   // ← must be outside addXP (needs cross-cutting state)
 *   window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
 *
 * XP values: complete=30, quiz=20, bookmark=5.
 * Deduplication:
 *   - "complete" is deduped PERMANENTLY per id (PROJECTS_PLAN.md Stage 1.7,
 *     decided): a lesson is only completed for the first time once. Without
 *     this, markIncomplete() (progress.ts) never reverses XP, and the old
 *     24h rolling dedupe meant complete → un-complete → wait a day →
 *     re-complete farmed +30 XP indefinitely.
 *   - "quiz" and "bookmark" keep the 24h rolling dedupe (unchanged).
 */

import { preserveCorruptValue } from "@/lib/storage-utils";
import { STORAGE_WRITE_FAILED } from "@/lib/events";

export const ENGAGEMENT_KEY = "ma_engagement";
const KEY = ENGAGEMENT_KEY;

export type XPAction = "complete" | "quiz" | "bookmark" | "project" | "bigProject";

export const XP_VALUES: Record<XPAction, number> = {
  complete: 30,
  quiz: 20,
  bookmark: 5,
  project: 40,
  bigProject: 100,
};

export type EngagementState = {
  xp: number;
  streak: number;
  longestStreak: number;
  lastActiveDay: string; // "YYYY-MM-DD" local time
  xpByDay: Record<string, number>;
  achievements: string[]; // achievement IDs already unlocked
  xpLog: { action: XPAction; id: string; xp: number; ts: number }[];
  /**
   * Lesson ids that have ever earned "complete" XP, uncapped (unlike xpLog,
   * which is pruned to 200 entries for storage size). This is what makes the
   * "complete" dedupe in addXP() genuinely permanent: xpLog rotating out an
   * old entry must never allow the same lesson to re-earn +30 XP.
   */
  completedXpIds: string[];
};

/** Returns a local "YYYY-MM-DD" string, avoids UTC/local timezone mismatch for streak tracking */
function localDate(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function today(): string {
  return localDate();
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return localDate(d);
}

/** Reads the current engagement state from localStorage. Safe to call in any context (returns default on SSR). */
export function getEngagement(): EngagementState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    // Spread over defaultState so new fields added in future releases don't break old saved data
    const parsed = { ...defaultState(), ...(JSON.parse(raw) as Partial<EngagementState>) };
    // Stage 2.3: coerce null / wrong-type fields back to defaults so downstream
    // code (e.g. completedXpIds.includes()) never throws on a corrupted shape.
    const d = defaultState();
    if (!Array.isArray(parsed.xpLog)) parsed.xpLog = d.xpLog;
    if (!Array.isArray(parsed.achievements)) parsed.achievements = d.achievements;
    if (!Array.isArray(parsed.completedXpIds)) parsed.completedXpIds = d.completedXpIds;
    if (typeof parsed.xp !== "number" || Number.isNaN(parsed.xp)) parsed.xp = d.xp;
    if (typeof parsed.streak !== "number") parsed.streak = d.streak;
    if (typeof parsed.longestStreak !== "number") parsed.longestStreak = d.longestStreak;
    if (typeof parsed.xpByDay !== "object" || parsed.xpByDay === null) parsed.xpByDay = d.xpByDay;

    // Stage 2.6: decay streak on read. If lastActiveDay is not today or
    // yesterday, the streak is dead — reset to 0 so the 🔥 badge doesn't
    // show "7-day streak" months after the user stopped visiting.
    if (parsed.lastActiveDay && parsed.lastActiveDay !== today() && parsed.lastActiveDay !== yesterday()) {
      parsed.streak = 0;
    }

    return parsed;
  } catch {
    // Stage 2.2: preserve the unparseable value before defaults overwrite it
    try {
      const corrupt = localStorage.getItem(KEY);
      if (corrupt) preserveCorruptValue(KEY, corrupt);
    } catch { /* storage read itself failed — nothing to preserve */ }
    return defaultState();
  }
}

function defaultState(): EngagementState {
  return {
    xp: 0,
    streak: 0,
    longestStreak: 0,
    lastActiveDay: "",
    xpByDay: {},
    achievements: [],
    xpLog: [],
    completedXpIds: [],
  };
}

/** Persists engagement state to localStorage. Dispatches STORAGE_WRITE_FAILED on error (Stage 2.4). */
export function saveEngagement(state: EngagementState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: KEY } }));
  }
}

/**
 * Awards XP for an action, updates streak, and saves to localStorage.
 * Returns the new state. Caller is responsible for dispatching ENGAGEMENT_EVENT
 * and calling checkAchievements(), those are NOT done here because they need
 * cross-cutting data (completions, bookmarks) that addXP doesn't own.
 *
 * Stage 2.8: removed the _writing/_pendingState "write lock" — it was dead
 * code because `finally` cleared it before `addXP()` returned, so the next
 * synchronous call always re-read localStorage anyway. The documented
 * `markAll()` protection actually comes from saveEngagement() being
 * synchronous (localStorage.setItem lands before the next getEngagement reads).
 * Multi-tab coordination would need `storage` events, a separate concern.
 */
export function addXP(action: XPAction, id: string): EngagementState {
  const state = getEngagement();

  try {
    const amount = XP_VALUES[action];
    const t = today();

    if (action === "complete") {
      // Permanent per-lesson dedupe (PROJECTS_PLAN.md Stage 1.7, decided):
      // a lesson only earns "complete" XP the first time it's ever completed,
      // full stop. Checked against completedXpIds (uncapped), NOT xpLog
      // (capped at 200, so a 24h or "ever in the log" check would eventually
      // let old lessons re-earn XP once their entry rotates out).
      if (state.completedXpIds.includes(id)) return state;
      state.completedXpIds = [...state.completedXpIds, id];
    } else {
      // "quiz" and "bookmark" keep the original 24-hour rolling dedupe.
      const alreadyEarned = state.xpLog.some(
        (e) => e.action === action && e.id === id && e.ts > Date.now() - 86_400_000
      );
      if (alreadyEarned) return state;
    }

    // Streak: increment if last activity was yesterday; reset to 1 if there was a gap
    if (state.lastActiveDay !== t) {
      if (state.lastActiveDay === yesterday()) {
        state.streak += 1;
      } else {
        state.streak = 1;
      }
      state.lastActiveDay = t;
      if (state.streak > state.longestStreak) {
        state.longestStreak = state.streak;
      }
    }

    state.xp += amount;
    state.xpByDay[t] = (state.xpByDay[t] ?? 0) + amount;
    // Keep only the last 200 log entries to cap storage growth. Safe to prune
    // for "complete" now because completedXpIds (above), not this log, is
    // the source of truth for permanent dedupe.
    state.xpLog = [
      { action, id, xp: amount, ts: Date.now() },
      ...state.xpLog.slice(0, 199),
    ];

    saveEngagement(state);
    return state;
  } catch {
    // Stage 2.3: never let a shape error in addXP crash the calling component.
    // Return current state as-is so callers still get a valid EngagementState.
    return state;
  }
}

/**
 * 7-level progression ladder.
 * nextAt: XP required to ENTER the NEXT level (Infinity = already at max).
 * prevAt: XP at which the CURRENT level started, used for intra-tier progress bar math:
 *   pct = (xp - prevAt) / (nextAt - prevAt) * 100
 */
const LEVELS = [
  { level: 1, title: "Marketing Newcomer",    nextAt: 100 },
  { level: 2, title: "Curious Learner",       nextAt: 250 },
  { level: 3, title: "Emerging Marketer",     nextAt: 500 },
  { level: 4, title: "Skilled Practitioner",  nextAt: 1000 },
  { level: 5, title: "Senior Marketer",       nextAt: 2000 },
  { level: 6, title: "Marketing Expert",      nextAt: 4000 },
  { level: 7, title: "Certified Polymath",    nextAt: Infinity },
] as const;

/**
 * Returns the user's current level info including prevAt (start of this tier).
 * Always guard `if (nextAt !== Infinity)` before rendering an XP progress bar ,
 * dividing by (Infinity - prevAt) would produce 0% at max level.
 */
export function getCurrentLevel(xp: number): { level: number; title: string; nextAt: number; prevAt: number } {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    const threshold = LEVELS[i - 1]?.nextAt ?? 0;
    if (xp >= threshold) {
      return { ...LEVELS[i], prevAt: threshold };
    }
  }
  return { ...LEVELS[0], prevAt: 0 };
}

// Re-export so callers can import ENGAGEMENT_EVENT from either this file or events.ts
export { ENGAGEMENT_EVENT } from "@/lib/events";
