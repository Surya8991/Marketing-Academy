import { PROGRESS_CHANGED_EVENT } from "@/lib/events";

export type RecentLesson = {
  categorySlug: string;
  slug: string;
  title: string;
  categoryTitle: string;
};

export const RECENT_KEY = "ma_recent";
const KEY = RECENT_KEY;
const MAX = 6;

export function getRecentLessons(): RecentLesson[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as RecentLesson[]) : [];
  } catch {
    return [];
  }
}

export function trackLesson(entry: RecentLesson): void {
  try {
    const current = getRecentLessons().filter(
      (l) => !(l.categorySlug === entry.categorySlug && l.slug === entry.slug)
    );
    localStorage.setItem(KEY, JSON.stringify([entry, ...current].slice(0, MAX)));
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
    }
  } catch {
    // localStorage unavailable - silently ignore
  }
}
