"use client";

import Link from "next/link";
import { useMemo, useEffect, useState } from "react";
import { CATEGORIES, canonicalLessonId, uniqueLessonCount } from "@/lib/curriculum";
import { getCompleted } from "@/lib/progress";
import { TOPIC_GROUPS } from "@/lib/topic-groups";
import PageMasthead from "@/components/PageMasthead";

type CategoryWithProgress = {
  slug: string;
  title: string;
  emoji: string;
  totalLessons: number;
  completedLessons: number;
  pct: number;
};

export default function SkillMapClient() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCompleted(getCompleted());
    setMounted(true);
  }, []);

  const bySlug = useMemo<Map<string, CategoryWithProgress>>(() => {
    const map = new Map<string, CategoryWithProgress>();
    for (const cat of CATEGORIES) {
      const total = cat.lessons.length;
      // Stage 2.1: resolve canonicalLessonId so cross-listed lessons (13 in
      // fundamentals, sourced from mental-models) check the key that's
      // actually written, instead of an id nothing ever completes.
      const done = cat.lessons.filter((l) =>
        completed.has(canonicalLessonId(cat.slug, l))
      ).length;
      map.set(cat.slug, {
        slug: cat.slug,
        title: cat.title,
        emoji: cat.emoji,
        totalLessons: total,
        completedLessons: done,
        pct: total > 0 ? (done / total) * 100 : 0,
      });
    }
    return map;
  }, [completed]);

  // Groups follow the same discipline taxonomy as Nav.tsx's Topics dropdown
  // (Stage 11, Session 85) — cards within a group sort by progress so the
  // reader sees what's closest to done first, without losing the "this is
  // Strategy, this is Channels" structure a flat sorted list threw away.
  const groups = useMemo(() => {
    return TOPIC_GROUPS.map((g) => ({
      label: g.label,
      cats: g.slugs
        .map((s) => bySlug.get(s))
        .filter((c): c is CategoryWithProgress => Boolean(c))
        .sort((a, b) => b.pct - a.pct),
    })).filter((g) => g.cats.length > 0);
  }, [bySlug]);

  const totalLessons = uniqueLessonCount();
  const totalDone = completed.size;
  const overallPct = totalLessons > 0 ? Math.round((totalDone / totalLessons) * 100) : 0;
  const categoriesComplete = Array.from(bySlug.values()).filter((c) => c.pct === 100).length;

  const stats = [
    { code: "01", value: `${overallPct}%`, label: "Overall complete" },
    { code: "02", value: `${totalDone} / ${totalLessons}`, label: "Lessons done" },
    { code: "03", value: String(categoriesComplete), label: "Categories cleared" },
    { code: "04", value: String(CATEGORIES.length), label: "Total disciplines" },
  ];

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Progress"
        right={`${CATEGORIES.length} disciplines`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">
          Where you stand
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">
          Skill Map
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-8 font-ui-sans leading-relaxed">
          Your progress across every discipline, grouped the same way the nav
          groups them, so you can see the shape of what you know.
        </p>

        {/* Stats — specimen-row pattern, consistent with /tools and /projects */}
        <div className="border border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--border)] max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="p-4 font-ui-sans">
              <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{s.code}</p>
              <p className="font-display font-semibold text-2xl text-[var(--foreground)]">
                {mounted ? s.value : "—"}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-ui-sans">
        {/* Empty-state nudge for first-time visitors */}
        {mounted && completed.size === 0 && (
          <div className="p-6 rounded-xl bg-[var(--muted)] border border-[var(--border)] mb-10 text-center">
            <p className="text-2xl mb-2">🗺️</p>
            <p className="font-semibold text-[var(--foreground)] mb-1">
              All {CATEGORIES.length} disciplines at 0% — pick one to start!
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Progress bars fill as you complete lessons.{" "}
              <Link href="/learn" className="text-[var(--accent)] underline">
                Browse all lessons →
              </Link>
            </p>
          </div>
        )}

        {groups.map((group) => (
          <section key={group.label} className="mb-12 last:mb-0">
            <h2 className="font-display font-semibold text-xl text-[var(--foreground)] mb-4">
              {group.label}
            </h2>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {group.cats.map((cat) => {
                const pctRounded = Math.round(cat.pct);
                return (
                  <Link
                    key={cat.slug}
                    href={`/learn/${cat.slug}`}
                    className="group block h-full box-border p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)]"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-2xl leading-none">{cat.emoji}</span>
                      <span className="font-semibold text-[0.9375rem] text-[var(--foreground)] leading-tight">
                        {cat.title}
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-[var(--muted)] overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-[width] duration-300"
                        style={{
                          width: mounted ? `${pctRounded}%` : "0%",
                          background: pctRounded === 100 ? "rgba(22, 163, 74, 0.85)" : "var(--accent)",
                        }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[0.8125rem] text-[var(--muted-foreground)]">
                        {cat.completedLessons} / {cat.totalLessons} lessons
                      </span>
                      <span
                        className="text-[0.8125rem] font-semibold"
                        style={{ color: pctRounded === 100 ? "rgba(22, 163, 74, 0.9)" : "var(--accent-foreground)" }}
                      >
                        {pctRounded}%
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
