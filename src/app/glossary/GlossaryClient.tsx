"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from "@/lib/glossary";
import { Search } from "lucide-react";

export default function GlossaryClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return GLOSSARY_TERMS.filter((t) => {
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof GLOSSARY_TERMS> = {};
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const activeLetters = new Set(grouped.map(([l]) => l));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Marketing Glossary</h1>
        <p className="text-[var(--muted-foreground)] text-lg max-w-2xl">
          Plain-English definitions for 150+ essential marketing terms - from CTR and ROAS to brand
          salience, copywriting frameworks, and social media strategy.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
        />
        <input
          type="search"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", ...GLOSSARY_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]"
                : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* A-Z jump nav */}
      <div className="flex flex-wrap gap-1 mb-8">
        {alphabet.map((letter) => {
          const active = activeLetters.has(letter);
          return (
            <a
              key={letter}
              href={active ? `#letter-${letter}` : undefined}
              aria-disabled={!active}
              className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold transition-colors ${
                active
                  ? "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                  : "text-[var(--muted-foreground)] cursor-default opacity-30"
              }`}
            >
              {letter}
            </a>
          );
        })}
      </div>

      {/* Results count */}
      {(query || activeCategory !== "All") && (
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          {filtered.length} term{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Grouped terms */}
      {grouped.length === 0 ? (
        <div className="text-center py-16 text-[var(--muted-foreground)]">
          No terms match your search.
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map(([letter, terms]) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">{letter}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {terms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="block rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[var(--accent)] transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm group-hover:text-[var(--accent)] transition-colors">
                        {term.term}
                      </span>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                        {term.category}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] line-clamp-2">
                      {term.definition}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
