/**
 * Single source of truth for "what counts as a user's progress data" —
 * shared by /settings export/import/reset AND the account-sync feature
 * (src/lib/sync-client.ts). Extracted from SettingsClient.tsx (AGENTS.md
 * Rule 18: shared storage logic lives in src/lib/, never duplicated
 * per-component) so the two features can't drift into two different
 * definitions of "the user's data."
 */
import { BOOKMARK_KEY } from "@/lib/bookmarks";
import { COMPLETED_KEY } from "@/lib/progress";
import { ENGAGEMENT_KEY } from "@/lib/engagement";
import { ONBOARDED_KEY, GATE_NOTICE_KEY, PROJECTS_PROGRESS_KEY, REVIEW_QUEUE_KEY } from "@/lib/events";
// From @/lib/quiz-keys, NOT @/lib/quizzes: this module is in the root-layout
// client graph via SyncProvider, and quizzes.ts is ~2.4 MB of quiz data
// (AGENTS.md Rule 41). quiz-keys.ts is dependency-free string constants.
import { QUIZ_PASS_KEY_PREFIX, TRACK_QUIZ_PASS_PREFIX, QUIZ_STORAGE_PREFIX } from "@/lib/quiz-keys";
import { NOTE_KEY_PREFIX } from "@/lib/notes";
import { RECENT_KEY } from "@/lib/recentlyViewed";

/** Fixed-name keys that get exported/imported/reset/synced verbatim. */
export const EXPORT_KEYS = [
  COMPLETED_KEY,
  BOOKMARK_KEY,
  ENGAGEMENT_KEY,
  ONBOARDED_KEY,
  RECENT_KEY,
  GATE_NOTICE_KEY,
  PROJECTS_PROGRESS_KEY,
  REVIEW_QUEUE_KEY,
] as const;

/** Prefixed keys that are swept during export/import/reset/sync. */
export const ALLOWED_KEY_PREFIXES = [
  QUIZ_PASS_KEY_PREFIX,
  TRACK_QUIZ_PASS_PREFIX,
  QUIZ_STORAGE_PREFIX,
  NOTE_KEY_PREFIX,
] as const;

export function collectAllKeys(): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const key of EXPORT_KEYS) {
    const raw = localStorage.getItem(key);
    data[key] = raw ? JSON.parse(raw) : null;
  }
  // Snapshot all keys first to avoid length-changes mid-iteration.
  const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter(Boolean) as string[];
  for (const key of allKeys) {
    if (ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p))) {
      data[key] = localStorage.getItem(key);
    }
  }
  return data;
}

export function isAllowedKey(key: string): boolean {
  if ((EXPORT_KEYS as readonly string[]).includes(key)) return true;
  return ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p));
}

export function restoreAllKeys(data: Record<string, unknown>): void {
  for (const [key, value] of Object.entries(data)) {
    if (!isAllowedKey(key)) continue;
    if (value === null || value === undefined) continue;
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
