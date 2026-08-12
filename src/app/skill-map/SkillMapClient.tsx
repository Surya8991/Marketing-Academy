"use client";

import Link from "next/link";
import { useMemo, useEffect, useState } from "react";
import { CATEGORIES, canonicalLessonId } from "@/lib/curriculum";
import { getCompleted } from "@/lib/progress";

type CategoryWithProgress = {
  slug: string;
  title: string;
  emoji: string;
  totalLessons: number;
  completedLessons: number;
  pct: number;
  originalIndex: number;
};

export default function SkillMapClient() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCompleted(getCompleted());
    setMounted(true);
  }, []);

  const sorted = useMemo<CategoryWithProgress[]>(() => {
    const rows = CATEGORIES.map((cat, idx) => {
      const total = cat.lessons.length;
      // Stage 2.1: resolve canonicalLessonId so cross-listed lessons (13 in
      // fundamentals, sourced from mental-models) check the key that's
      // actually written, instead of an id nothing ever completes.
      const done = cat.lessons.filter((l) =>
        completed.has(canonicalLessonId(cat.slug, l))
      ).length;
      return {
        slug: cat.slug,
        title: cat.title,
        emoji: cat.emoji,
        totalLessons: total,
        completedLessons: done,
        pct: total > 0 ? (done / total) * 100 : 0,
        originalIndex: idx,
      };
    });

    rows.sort((a, b) => {
      if (b.pct !== a.pct) return b.pct - a.pct;
      return a.originalIndex - b.originalIndex;
    });

    return rows;
  }, [completed]);

  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "2.5rem 1.25rem 4rem",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          Skill Map
        </h1>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--muted-foreground)",
            fontSize: "1rem",
          }}
        >
          Track your progress across all {CATEGORIES.length} disciplines.
        </p>
      </div>

      {/* Empty-state nudge for first-time visitors */}
      {mounted && completed.size === 0 && (
        <div
          style={{
            padding: "1.25rem 1.5rem",
            borderRadius: "0.75rem",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.5rem", margin: "0 0 0.5rem" }}>🗺️</p>
          <p style={{ fontWeight: 600, color: "var(--foreground)", margin: "0 0 0.25rem" }}>
            All {CATEGORIES.length} disciplines at 0% — pick one to start!
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", margin: 0 }}>
            Progress bars fill as you complete lessons.{" "}
            <Link href="/learn" style={{ color: "var(--accent)", textDecoration: "underline" }}>
              Browse all lessons →
            </Link>
          </p>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {sorted.map((cat) => {
          const pctRounded = Math.round(cat.pct);
          return (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  cursor: "pointer",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                  height: "100%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--accent)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                    {cat.emoji}
                  </span>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--foreground)",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.title}
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: "6px",
                    background: "var(--muted)",
                    borderRadius: "999px",
                    overflow: "hidden",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: mounted ? `${pctRounded}%` : "0%",
                      background:
                        pctRounded === 100
                          ? "rgba(22, 163, 74, 0.85)"
                          : "var(--accent)",
                      borderRadius: "999px",
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {cat.completedLessons} / {cat.totalLessons} lessons
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color:
                        pctRounded === 100
                          ? "rgba(22, 163, 74, 0.9)"
                          : "var(--accent-foreground)",
                    }}
                  >
                    {pctRounded}%
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
