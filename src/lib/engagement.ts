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
  lastActiveDay: string; // "YYYY-MM-DD"
  xpByDay: Record<string, number>;
  achievements: string[];
  xpLog: { action: XPAction; id: string; xp: number; ts: number }[];
};

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

export function getEngagement(): EngagementState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
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

export function saveEngagement(state: EngagementState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage unavailable
  }
}

export function addXP(action: XPAction, id: string): EngagementState {
  const state = getEngagement();
  const amount = XP_VALUES[action];
  const t = today();

  // Deduplicate: same action + same id can only earn XP once per day
  const alreadyEarned = state.xpLog.some(
    (e) => e.action === action && e.id === id && e.ts > Date.now() - 86_400_000
  );
  if (alreadyEarned) return state;

  // Update streak
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

  // Award XP
  state.xp += amount;
  state.xpByDay[t] = (state.xpByDay[t] ?? 0) + amount;
  state.xpLog = [
    { action, id, xp: amount, ts: Date.now() },
    ...state.xpLog.slice(0, 199),
  ];

  saveEngagement(state);
  return state;
}

export function getCurrentLevel(xp: number): { level: number; title: string; nextAt: number } {
  const levels = [
    { level: 1, title: "Marketing Newcomer", nextAt: 100 },
    { level: 2, title: "Curious Learner", nextAt: 250 },
    { level: 3, title: "Emerging Marketer", nextAt: 500 },
    { level: 4, title: "Skilled Practitioner", nextAt: 1000 },
    { level: 5, title: "Senior Marketer", nextAt: 2000 },
    { level: 6, title: "Marketing Expert", nextAt: 4000 },
    { level: 7, title: "Certified Polymath", nextAt: Infinity },
  ];
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= (levels[i - 1]?.nextAt ?? 0)) return levels[i];
  }
  return levels[0];
}

export { ENGAGEMENT_EVENT } from "@/lib/events";
