export type RecentLesson = {
  categorySlug: string;
  slug: string;
  title: string;
  categoryTitle: string;
};

const KEY = "ma_recent";
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
  } catch {
    // localStorage unavailable - silently ignore
  }
}
