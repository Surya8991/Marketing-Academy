"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bookmark, X } from "lucide-react";
import { CATEGORIES } from "@/lib/curriculum";

type BookmarkEntry = {
  category: string;
  slug: string;
  title: string;
};

const STORAGE_KEY = "ma_bookmarks";

function getBookmarks(): BookmarkEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as BookmarkEntry[];
  } catch {
    return [];
  }
}

function saveBookmarks(entries: BookmarkEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function getCategoryTitle(slug: string): string {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return cat ? `${cat.emoji} ${cat.title}` : slug;
}

export default function BookmarksList() {
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setBookmarks(getBookmarks());
  }, []);

  const remove = (category: string, slug: string) => {
    const updated = bookmarks.filter(
      (b) => !(b.category === category && b.slug === slug)
    );
    saveBookmarks(updated);
    setBookmarks(updated);
  };

  if (!mounted) return null;

  // Group by category, preserving order of first appearance
  const grouped: { categorySlug: string; entries: BookmarkEntry[] }[] = [];
  const seen = new Set<string>();
  for (const b of bookmarks) {
    if (!seen.has(b.category)) {
      seen.add(b.category);
      grouped.push({ categorySlug: b.category, entries: [] });
    }
    grouped.find((g) => g.categorySlug === b.category)!.entries.push(b);
  }

  if (bookmarks.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          padding: "64px 24px",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          background: "var(--card)",
          textAlign: "center",
        }}
      >
        <Bookmark size={40} style={{ color: "var(--muted-foreground)" }} />
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          No bookmarks yet
        </p>
        <p style={{ color: "var(--muted-foreground)", maxWidth: "320px" }}>
          Hit the Bookmark button on any lesson to save it here for quick access.
        </p>
        <Link
          href="/learn"
          style={{
            marginTop: "8px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "var(--accent)",
            color: "var(--accent-foreground)",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Browse lessons
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {grouped.map(({ categorySlug, entries }) => (
        <section key={categorySlug}>
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              marginBottom: "12px",
            }}
          >
            {getCategoryTitle(categorySlug)}
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {entries.map((b) => (
              <li
                key={`${b.category}/${b.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "12px 16px",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  background: "var(--card)",
                }}
              >
                <Link
                  href={`/learn/${b.category}/${b.slug}`}
                  style={{
                    color: "var(--foreground)",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    flex: 1,
                  }}
                >
                  {b.title}
                </Link>
                <button
                  onClick={() => remove(b.category, b.slug)}
                  title="Remove bookmark"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    border: "none",
                    background: "transparent",
                    color: "var(--muted-foreground)",
                    cursor: "pointer",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
