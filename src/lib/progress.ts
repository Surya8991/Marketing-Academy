/**
 * Lesson completion tracking, which lessons the user has marked complete.
 *
 * Storage: localStorage key "ma-completed" (note the hyphen, not underscore ,
 * this predates the ma_ prefix convention; do NOT rename it or all users lose progress).
 * Format: JSON array of "category/slug" strings e.g. ["seo/keyword-research", "growth/ab-testing"]
 *
 * IMPORTANT: Always call markComplete() BEFORE addXP() so that
 * checkAchievements() sees the updated completion count when it fires.
 */

import { preserveCorruptValue } from "@/lib/storage-utils";
import { STORAGE_WRITE_FAILED, PROGRESS_CHANGED_EVENT } from "@/lib/events";

export const COMPLETED_KEY = "ma-completed";
const KEY = COMPLETED_KEY;

/** Canonical lesson ID used as the storage value and XP dedup key */
export function lessonId(category: string, slug: string): string {
  return `${category}/${slug}`;
}

/** Returns the set of all completed lesson IDs. Returns empty set on SSR or storage error. */
export function getCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    // Stage 2.2: preserve the unparseable value before defaults overwrite it
    try {
      const corrupt = localStorage.getItem(KEY);
      if (corrupt) preserveCorruptValue(KEY, corrupt);
    } catch { /* storage read itself failed — nothing to preserve */ }
    return new Set();
  }
}

/**
 * Idempotent, safe to call multiple times for the same id.
 * Silently swallows storage errors (private/full), matching getCompleted().
 *
 * AGENTS.md Rule 36 / PROJECTS_PLAN.md Stage 1.8: every call site MUST check
 * getQuizPassed(category, slug) from @/lib/quizzes first (or, for the track
 * quiz's bulk path, the per-question score computed in TrackQuizPageClient).
 * There are exactly three call sites today: MarkComplete.tsx, TrackLessonList.tsx,
 * TrackQuizPageClient.tsx. A fourth ungated call site reopens the completion-
 * integrity hole documented in PROJECTS_PLAN.md section 0.1: a learner could
 * mark lessons complete, collect XP, and print a certificate without ever
 * passing a quiz.
 */
export function markComplete(id: string): void {
  if (typeof window === "undefined") return;
  const completed = getCompleted();
  completed.add(id);
  try {
    localStorage.setItem(KEY, JSON.stringify([...completed]));
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: KEY } }));
  }
}

/** Removes a lesson from the completed set. Does not affect XP (XP is never taken away).
 *  Silently swallows storage errors (private/full), matching getCompleted(). */
export function markIncomplete(id: string): void {
  if (typeof window === "undefined") return;
  const completed = getCompleted();
  completed.delete(id);
  try {
    localStorage.setItem(KEY, JSON.stringify([...completed]));
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: KEY } }));
  }
}
