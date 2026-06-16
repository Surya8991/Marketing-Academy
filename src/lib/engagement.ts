/**
 * XP / streak / level system for Marketing Academy.
 *
 * All state lives in localStorage under ENGAGEMENT_KEY ("ma_engagement").
 * Components must NEVER read localStorage directly — always use getEngagement().
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
 * Deduplication: same (action, id) pair earns XP at most once per 24 hours.
 */

export const ENGAGEMENT_KEY = "ma_engagement";
const KEY = ENGAGEMENT_KEY;

export type XPAction = "complete" | "quiz" | "bookmark";

export const XP_VALUES: Record<XPAction, number> = {
  complete: 30,
  quiz: 20,
  bookmark: 5,
};

export type EngagementState = {
  xp: number;
  streak: number;
  longestStreak: number;
  lastActiveDay: string; // "YYYY-MM-DD" local time
  xpByDay: Record<string, number>;
  achievements: string[]; // achievement IDs already unlocked
  xpLog: { action: XPAction; id: string; xp: number; ts: number }[];
};

/** Returns a local "YYYY-MM-DD" string — avoids UTC/local timezone mismatch for streak tracking */
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
    return { ...defaultState(), ...(JSON.parse(raw) as Partial<EngagementState>) };
  } catch {
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
  };
}

/** Persists engagement state to localStorage. Silently swallows storage errors (private/full). */
export function saveEngagement(state: EngagementState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage unavailable (private mode, quota exceeded)
  }
}

/**
 * Module-level write lock.
 *
 * Problem: two XP-earning calls in the same synchronous tick (e.g. markAll()
 * loops over 20 lessons) both call getEngagement() before either write lands,
 * so they read the same stale base state and only the last write survives.
 *
 * Fix: the first call sets _writing=true and caches its in-progress state in
 * _pendingState. Subsequent calls in the same tick read _pendingState instead
 * of re-reading localStorage, so XP accumulates correctly.
 */
let _writing = false;
let _pendingState: EngagementState | null = null;

/**
 * Awards XP for an action, updates streak, and saves to localStorage.
 * Returns the new state. Caller is responsible for dispatching ENGAGEMENT_EVENT
 * and calling checkAchievements() — those are NOT done here because they need
 * cross-cutting data (completions, bookmarks) that addXP doesn't own.
 */
export function addXP(action: XPAction, id: string): EngagementState {
  // If a write is already in progress, continue accumulating on that state
  const state = (_writing && _pendingState) ? _pendingState : getEngagement();
  _writing = true;
  _pendingState = state;
  const amount = XP_VALUES[action];
  const t = today();

  // 24-hour deduplication: same (action, id) pair can only earn XP once per day
  const alreadyEarned = state.xpLog.some(
    (e) => e.action === action && e.id === id && e.ts > Date.now() - 86_400_000
  );
  if (alreadyEarned) return state;

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
  // Keep only the last 200 log entries to cap storage growth
  state.xpLog = [
    { action, id, xp: amount, ts: Date.now() },
    ...state.xpLog.slice(0, 199),
  ];

  saveEngagement(state);
  _writing = false;
  _pendingState = null;
  return state;
}

/**
 * 7-level progression ladder.
 * nextAt: XP required to ENTER the NEXT level (Infinity = already at max).
 * prevAt: XP at which the CURRENT level started — used for intra-tier progress bar math:
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
 * Always guard `if (nextAt !== Infinity)` before rendering an XP progress bar —
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
