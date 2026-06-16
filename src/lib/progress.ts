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
    return new Set();
  }
}

/** Idempotent, safe to call multiple times for the same id. */
export function markComplete(id: string): void {
  const completed = getCompleted();
  completed.add(id);
  localStorage.setItem(KEY, JSON.stringify([...completed]));
}

/** Removes a lesson from the completed set. Does not affect XP (XP is never taken away). */
export function markIncomplete(id: string): void {
  const completed = getCompleted();
  completed.delete(id);
  localStorage.setItem(KEY, JSON.stringify([...completed]));
}
