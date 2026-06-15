"use client";

import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { getBookmarks, saveBookmarks } from "@/lib/bookmarks";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";

export default function BookmarkButton({
  category,
  slug,
  title,
}: {
  category: string;
  slug: string;
  title: string;
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = getBookmarks();
    setBookmarked(existing.some((b) => b.category === category && b.slug === slug));
  }, [category, slug]);

  if (!mounted) return null;

  const toggle = () => {
    const existing = getBookmarks();
    if (bookmarked) {
      const updated = existing.filter(
        (b) => !(b.category === category && b.slug === slug)
      );
      saveBookmarks(updated);
      setBookmarked(false);
    } else {
      saveBookmarks([...existing, { category, slug, title }]);
      setBookmarked(true);
      const newState = addXP("bookmark", `${category}/${slug}`);
      const unlocked = checkAchievements(newState);
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
    }
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
        bookmarked
          ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90"
          : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      }`}
    >
      {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
