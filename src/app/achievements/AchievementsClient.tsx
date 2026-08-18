"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getEngagement, getCurrentLevel, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { ACHIEVEMENTS } from "@/lib/achievements";
import type { EngagementState } from "@/lib/engagement";
import PageMasthead from "@/components/PageMasthead";

// Groups badges for display only — ACHIEVEMENTS itself stays a flat array
// (achievements.ts owns unlock logic, this is presentation grouping only,
// Stage 11 Session 85). Any new badge id not listed here just falls into
// "Milestones" via the default, so a forgotten update here never hides one.
const BADGE_GROUPS: { label: string; ids: string[] }[] = [
  { label: "Getting Started", ids: ["first-lesson", "first-quiz", "bookworm"] },
  { label: "Streaks", ids: ["streak-3", "streak-7"] },
  { label: "Practice Projects", ids: ["first-project", "ten-projects"] },
  { label: "Milestones", ids: ["ten-lessons", "fifty-lessons", "category-clear", "xp-500", "all-lessons"] },
];

export default function AchievementsClient() {
  const [state, setState] = useState<EngagementState | null>(null);

  useEffect(() => {
    setState(getEngagement());
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ state: EngagementState }>;
      setState(ce.detail.state);
    };
    window.addEventListener(ENGAGEMENT_EVENT, handler);
    return () => window.removeEventListener(ENGAGEMENT_EVENT, handler);
  }, []);

  if (!state) return null;

  const { xp, streak, longestStreak, achievements } = state;
  const { level, title, nextAt, prevAt } = getCurrentLevel(xp);
  // Intra-tier progress: how far through the current level's XP range
  const xpPct = nextAt !== Infinity
    ? Math.min(100, Math.round(((xp - prevAt) / (nextAt - prevAt)) * 100))
    : 100;

  const grouped = BADGE_GROUPS.map((g) => ({
    label: g.label,
    badges: g.ids
      .map((id) => ACHIEVEMENTS.find((a) => a.id === id))
      .filter((a): a is (typeof ACHIEVEMENTS)[number] => Boolean(a)),
  }));
  // Any badge not in a named group (future additions) still renders, at the end.
  const groupedIds = new Set(BADGE_GROUPS.flatMap((g) => g.ids));
  const leftover = ACHIEVEMENTS.filter((a) => !groupedIds.has(a.id));
  if (leftover.length > 0) grouped.push({ label: "More", badges: leftover });

  const stats = [
    { code: "01", value: `${xp} XP`, label: "Total XP" },
    { code: "02", value: `Lv ${level}`, label: title },
    { code: "03", value: `${streak}d`, label: "Current streak" },
    { code: "04", value: `${achievements.length} / ${ACHIEVEMENTS.length}`, label: "Badges unlocked" },
  ];

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Progress"
        right={`${achievements.length} / ${ACHIEVEMENTS.length} badges`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">
          Streak, XP, and badges
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">
          Achievements
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-8 font-ui-sans leading-relaxed">
          Every lesson, quiz, and project you finish earns XP. Longest streak so
          far: <span className="text-[var(--foreground)] font-medium">{longestStreak} day{longestStreak !== 1 ? "s" : ""}</span>.
        </p>

        {/* Stats — specimen-row pattern, consistent with /skill-map and /tools */}
        <div className="border border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--border)] max-w-2xl mb-8">
          {stats.map((s) => (
            <div key={s.label} className="p-4 font-ui-sans">
              <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{s.code}</p>
              <p className="font-display font-semibold text-2xl text-[var(--foreground)]">{s.value}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* XP Progress bar */}
        {nextAt !== Infinity && (
          <div className="max-w-2xl font-ui-sans">
            <div className="flex justify-between mb-2">
              <span className="text-[0.8rem] text-[var(--muted-foreground)]">
                Progress to Level {level + 1}
              </span>
              <span className="text-[0.8rem] font-semibold text-[var(--foreground)]">
                {xp} / {nextAt} XP
              </span>
            </div>
            <div className="h-2 rounded-full bg-[var(--muted)] overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-300"
                style={{ width: `${xpPct}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-ui-sans">
        {/* Empty-state nudge for first-time visitors */}
        {xp === 0 && achievements.length === 0 && (
          <div className="p-6 rounded-xl bg-[var(--muted)] border border-[var(--border)] mb-10 text-center">
            <p className="text-2xl mb-2">🚀</p>
            <p className="font-semibold text-[var(--foreground)] mb-1">Your journey starts here</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Complete lessons and pass quizzes to earn XP and unlock badges.{" "}
              <Link href="/learn" className="text-[var(--accent)] underline">
                Start your first lesson →
              </Link>
            </p>
          </div>
        )}

        {grouped.map((g) => (
          <section key={g.label} className="mb-10 last:mb-0">
            <h2 className="font-display font-semibold text-xl text-[var(--foreground)] mb-4">
              {g.label}
            </h2>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
              {g.badges.map((a) => {
                const earned = achievements.includes(a.id);
                return (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 p-4 rounded-xl border transition-opacity"
                    style={{
                      background: earned ? "rgba(99,102,241,0.08)" : "var(--muted)",
                      borderColor: earned ? "rgba(99,102,241,0.3)" : "var(--border)",
                      opacity: earned ? 1 : 0.6,
                    }}
                  >
                    <span
                      className="text-[1.75rem] leading-none"
                      style={{ filter: earned ? "none" : "grayscale(100%)" }}
                    >
                      {a.emoji}
                    </span>
                    <div>
                      <div className="text-[0.85rem] font-bold text-[var(--foreground)] mb-0.5">
                        {a.label}
                      </div>
                      <div className="text-[0.75rem] text-[var(--muted-foreground)]">
                        {a.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
        >
          Keep learning →
        </Link>
      </div>
    </>
  );
}
