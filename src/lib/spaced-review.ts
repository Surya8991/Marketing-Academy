/**
 * Spaced-repetition review queue for missed quiz questions.
 *
 * Design constraint (mirrors AGENTS.md Rule 41): QUIZZES in src/lib/quizzes.ts
 * is a ~2.4 MB file that must never be imported into a client component in
 * bulk. A cross-lesson review page can't re-fetch a missed question from
 * QUIZZES by id at review time without violating that rule, so instead the
 * FULL question content (text, options, correct index, explanation) is
 * captured once into localStorage at the moment a question is missed. The
 * queue only ever holds questions the learner has actually gotten wrong, so
 * this stays small (a handful of entries, not thousands) even for a learner
 * who's missed questions across many lessons.
 *
 * Storage: localStorage key "ma_review_queue" (REVIEW_QUEUE_KEY), a JSON
 * array of ReviewItem, one per missed question, keyed by a stable id of
 * `${category}/${slug}#${origIndex}` (origIndex = the question's position in
 * its lesson's QUIZZES array, BEFORE Quiz.tsx's per-mount shuffle, so the id
 * stays stable across shuffles and across separate quiz attempts).
 *
 * Scheduling: a simple Leitner-style ladder, not full SM-2 (no ease factor).
 * A correct review advances one rung (longer interval); a missed review
 * resets to rung 0 (due again tomorrow) and increments `lapses`. A question
 * reviewed correctly enough times (past the last rung, with at least 2 reps)
 * is considered graduated and removed from the queue entirely, it's earned
 * its way out rather than being tracked forever.
 */

import { preserveCorruptValue } from "@/lib/storage-utils";
import { REVIEW_QUEUE_KEY, PROGRESS_CHANGED_EVENT } from "@/lib/events";

const KEY = REVIEW_QUEUE_KEY;

export type ReviewItem = {
  id: string; // `${category}/${slug}#${origIndex}`
  category: string;
  slug: string;
  lessonTitle: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  reps: number; // rung on the ladder, index into INTERVALS_DAYS
  lapses: number; // number of times this question has been missed, ever
  dueAt: number; // epoch ms, review is due when Date.now() >= dueAt
};

/** Days until next review at each rung. Capped at the last rung. */
const INTERVALS_DAYS = [1, 3, 7, 14, 30];

/** Rungs cleared (with no lapse since) before a question graduates out of the queue. */
const GRADUATE_AFTER_REPS = INTERVALS_DAYS.length;

const DAY_MS = 24 * 60 * 60 * 1000;

function defaultState(): ReviewItem[] {
  return [];
}

/** Returns the full review queue. Returns [] on SSR or storage error. */
export function getReviewQueue(): ReviewItem[] {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as ReviewItem[]) : defaultState();
  } catch {
    try {
      const corrupt = localStorage.getItem(KEY);
      if (corrupt) preserveCorruptValue(KEY, corrupt);
    } catch { /* storage read itself failed — nothing to preserve */ }
    return defaultState();
  }
}

function saveReviewQueue(items: ReviewItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    // storage full or unavailable, silently drop like the rest of the storage modules
  }
}

/** Builds the stable id a missed/hit question is tracked under. */
export function reviewItemId(category: string, slug: string, origIndex: number): string {
  return `${category}/${slug}#${origIndex}`;
}

/**
 * Records a missed question: inserts it (or resets it) to rung 0, due
 * tomorrow, and increments lapses. Called from Quiz.tsx with the full
 * question content at the moment the learner gets it wrong.
 */
export function recordMiss(item: {
  id: string;
  category: string;
  slug: string;
  lessonTitle: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}): void {
  const queue = getReviewQueue();
  const existing = queue.find((r) => r.id === item.id);
  const lapses = (existing?.lapses ?? 0) + 1;
  const next: ReviewItem = {
    ...item,
    reps: 0,
    lapses,
    dueAt: Date.now() + INTERVALS_DAYS[0] * DAY_MS,
  };
  saveReviewQueue([...queue.filter((r) => r.id !== item.id), next]);
}

/**
 * Records a correct review of a question already in the queue. Advances it
 * one rung and pushes its due date out; graduates (removes) it entirely once
 * it's cleared every rung without lapsing. No-op if the question was never
 * missed (never entered the queue in the first place), correct-on-first-try
 * questions are never tracked at all.
 */
export function recordHit(id: string): void {
  const queue = getReviewQueue();
  const existing = queue.find((r) => r.id === id);
  if (!existing) return;

  const reps = existing.reps + 1;
  if (reps >= GRADUATE_AFTER_REPS) {
    saveReviewQueue(queue.filter((r) => r.id !== id));
    return;
  }
  const updated: ReviewItem = {
    ...existing,
    reps,
    dueAt: Date.now() + INTERVALS_DAYS[Math.min(reps, INTERVALS_DAYS.length - 1)] * DAY_MS,
  };
  saveReviewQueue(queue.map((r) => (r.id === id ? updated : r)));
}

/** All items currently due (dueAt in the past), soonest-due first. */
export function getDueReviews(limit?: number): ReviewItem[] {
  const now = Date.now();
  const due = getReviewQueue()
    .filter((r) => r.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt);
  return typeof limit === "number" ? due.slice(0, limit) : due;
}

/** Count of items currently due, cheap check for a nav/homepage badge. */
export function getDueCount(): number {
  const now = Date.now();
  return getReviewQueue().filter((r) => r.dueAt <= now).length;
}
