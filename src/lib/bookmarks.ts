/**
 * Bookmark storage, lessons the user has saved for later.
 *
 * Storage: localStorage key "ma_bookmarks", JSON array of BookmarkEntry.
 * Two components read/write bookmarks: BookmarkButton.tsx and BookmarksList.tsx.
 * Both import from here to guarantee they use the same key and serialization format.
 * (Rule 18: shared localStorage logic lives in src/lib/, never duplicated in components.)
 */
import { STORAGE_WRITE_FAILED, PROGRESS_CHANGED_EVENT } from "@/lib/events";

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

/** Replaces the entire bookmark list. Deduplicates by category+slug before
 *  writing (Stage 2.5: prevents Bookworm achievement farming via multi-tab).
 *  Dispatches STORAGE_WRITE_FAILED on error (Stage 2.4). */
export function saveBookmarks(entries: BookmarkEntry[]): void {
  // Stage 2.5: dedup — keep the first occurrence of each category/slug pair
  const seen = new Set<string>();
  entries = entries.filter((e) => {
    const key = `${e.category}/${e.slug}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(entries));
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: BOOKMARK_KEY } }));
  }
}
