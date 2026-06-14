export type BookmarkEntry = {
  category: string;
  slug: string;
  title: string;
};

export const BOOKMARK_KEY = "ma_bookmarks";

export function getBookmarks(): BookmarkEntry[] {
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as BookmarkEntry[];
  } catch {
    return [];
  }
}

export function saveBookmarks(entries: BookmarkEntry[]): void {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(entries));
}
