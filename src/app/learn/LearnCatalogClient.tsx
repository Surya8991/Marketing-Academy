"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export type CatalogCategory = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  group: string;
  totalCount: number;
  preview: { slug: string; title: string; level: string }[];
};

export default function LearnCatalogClient({
  categories,
  groups,
}: {
  categories: CatalogCategory[];
  groups: string[];
}) {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories.filter((c) => {
      const matchGroup = activeGroup === "All" || c.group === activeGroup;
      if (!matchGroup) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.preview.some((l) => l.title.toLowerCase().includes(q))
      );
    });
  }, [categories, activeGroup, query]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y border-[var(--border)] mb-8">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter topics by discipline">
          {["All", ...groups].map((g) => {
            const active = activeGroup === g;
            return (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveGroup(g)}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-foreground)]"
                    : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--accent)]"
                }`}
              >
                {g === "All" ? `All ${categories.length}` : g}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-64">
          <Search
            size={15}
            strokeWidth={1.5}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] pointer-events-none"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter topics"
            aria-label="Filter topics"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      {/* 2-Column Matrix */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
          <p className="text-sm font-medium text-[var(--foreground)] mb-1">No matching topics</p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Try clearing your search or switching back to all {categories.length} topics.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((cat) => (
            <div
              key={cat.slug}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-data text-xs text-[var(--accent)] tabular-nums">
                    {cat.code}
                  </span>
                  <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums">
                    {cat.totalCount} lessons
                  </span>
                </div>
                <Link href={`/learn/${cat.slug}`} className="group inline-block">
                  <h2 className="font-display font-medium text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {cat.title}
                  </h2>
                </Link>
                <p className="text-sm text-[var(--muted-foreground)] font-ui-sans mt-1 leading-relaxed">
                  {cat.tagline}
                </p>
              </div>

              <div className="border-t border-[var(--border)] pt-3 space-y-2">
                {cat.preview.map((lesson, i) => (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${cat.slug}/${lesson.slug}`}
                    className="group flex items-center justify-between gap-3 py-1 text-sm hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="min-w-0 truncate font-ui-sans">
                      <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums mr-2.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {lesson.title}
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors"
                    />
                  </Link>
                ))}
                <Link
                  href={`/learn/${cat.slug}`}
                  className="inline-flex items-center gap-1 pt-2 text-xs font-medium text-[var(--accent)] hover:underline font-ui-sans"
                >
                  <span>View all {cat.totalCount} lessons</span>
                  <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
