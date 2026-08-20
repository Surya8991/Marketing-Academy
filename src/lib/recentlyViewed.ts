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
    // Deliberately does NOT dispatch PROGRESS_CHANGED_EVENT. This fires on
    // EVERY lesson page view, so it would trigger a debounced full-snapshot
    // POST to /api/sync per navigation and blow through
    // rateLimit("sync:post", 20, 60_000) during ordinary browsing. RECENT_KEY
    // is part of the snapshot, so it still rides along whenever any real
    // progress write (completion, quiz pass, bookmark, note) pushes — and
    // "recently viewed" is not time-critical enough to need its own trigger.
  } catch {
    // localStorage unavailable - silently ignore
  }
}
