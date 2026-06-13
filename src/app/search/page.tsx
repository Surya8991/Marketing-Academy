"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { CATEGORIES, flatLessons, type FlatLesson } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import { Search } from "lucide-react";

const ALL_LESSONS: FlatLesson[] = flatLessons();

const fuse = new Fuse(ALL_LESSONS, {
  keys: [
    { name: "title", weight: 3 },
    { name: "summary", weight: 2 },
    { name: "categoryTitle", weight: 1 },
    { name: "level", weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
});

const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

type ChipProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function Chip({ active, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1 text-sm font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0",
        active
          ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
          : "border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLevel, setActiveLevel] = useState<string>("all");

  const searchResults = useMemo<FlatLesson[]>(() => {
    const q = query.trim();
    if (!q) return ALL_LESSONS.slice(0, 20);
    return fuse.search(q).map((r) => r.item);
  }, [query]);

  const filteredResults = useMemo<FlatLesson[]>(() => {
    return searchResults.filter((lesson) => {
      const categoryMatch =
        activeCategory === "all" || lesson.categorySlug === activeCategory;
      const levelMatch =
        activeLevel === "all" || lesson.level === activeLevel;
      return categoryMatch && levelMatch;
    });
  }, [searchResults, activeCategory, activeLevel]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Search Lessons</h1>
      <p className="text-[var(--muted-foreground)] mb-8">
        Search across all {ALL_LESSONS.length} marketing lessons.
      </p>

      {/* Search input */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a topic, concept, or tool…"
          autoFocus
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
        />
      </div>

      {/* Category filter chips */}
      <div className="overflow-x-auto flex gap-2 pb-2 mb-3 -mx-1 px-1">
        <Chip active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
          All
        </Chip>
        {CATEGORIES.map((cat) => (
          <Chip
            key={cat.slug}
            active={activeCategory === cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
          >
            {cat.emoji} {cat.title}
          </Chip>
        ))}
      </div>

      {/* Level filter chips */}
      <div className="overflow-x-auto flex gap-2 pb-2 mb-6 -mx-1 px-1">
        <Chip active={activeLevel === "all"} onClick={() => setActiveLevel("all")}>
          All Levels
        </Chip>
        {LEVELS.map((level) => (
          <Chip
            key={level}
            active={activeLevel === level}
            onClick={() => setActiveLevel(level)}
          >
            {level}
          </Chip>
        ))}
      </div>

      {/* Result count */}
      <p className="text-xs text-[var(--muted-foreground)] mb-4">
        {query.trim()
          ? `${filteredResults.length} result${filteredResults.length !== 1 ? "s" : ""} for "${query.trim()}"`
          : `${filteredResults.length} result${filteredResults.length !== 1 ? "s" : ""}`}
      </p>

      {/* Results */}
      {filteredResults.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[var(--muted-foreground)] text-lg">No lessons found for that search.</p>
          <p className="text-[var(--muted-foreground)] text-sm mt-2">Try a different term — e.g. "funnel", "email", "TikTok"</p>
        </div>
      ) : (
        <ul className="divide-y divide-[var(--border)]">
          {filteredResults.map((lesson) => (
            <li key={`${lesson.categorySlug}/${lesson.slug}`}>
              <Link
                href={`/learn/${lesson.categorySlug}/${lesson.slug}`}
                className="flex items-start justify-between gap-4 py-4 group"
              >
                <div className="min-w-0">
                  <p className="text-[var(--foreground)] font-medium group-hover:text-[var(--accent)] transition-colors truncate">
                    {lesson.title}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5 line-clamp-1">
                    {lesson.summary}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">
                    {lesson.categoryTitle}
                  </p>
                </div>
                <LevelBadge level={lesson.level} className="shrink-0 mt-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
