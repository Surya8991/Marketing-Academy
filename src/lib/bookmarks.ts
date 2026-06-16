/**
 * Bookmark storage — lessons the user has saved for later.
 *
 * Storage: localStorage key "ma_bookmarks", JSON array of BookmarkEntry.
 * Two components read/write bookmarks: BookmarkButton.tsx and BookmarksList.tsx.
 * Both import from here to guarantee they use the same key and serialization format.
 * (Rule 18: shared localStorage logic lives in src/lib/, never duplicated in components.)
 */

export type BookmarkEntry = {
  category: string;
  slug: string;
  title: string;
};

export const BOOKMARK_KEY = "ma_bookmarks";

/** Returns all bookmarked lessons. Returns empty array on SSR or storage error. */
export function getBookmarks(): BookmarkEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as BookmarkEntry[];
  } catch {
    return [];
  }
}

/** Replaces the entire bookmark list. Caller is responsible for deduplication. */
export function saveBookmarks(entries: BookmarkEntry[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(entries));
}
