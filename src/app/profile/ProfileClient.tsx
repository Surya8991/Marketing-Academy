"use client";

/**
 * /profile — the personal learning dashboard hub (IMPROVEMENT_PLAN #25).
 * Aggregates-and-links: every stat here is computed once via
 * getProfileStats() (Rule 18), every section links out to the existing
 * dedicated page (/achievements, /skill-map, /portfolio, /certificates,
 * /bookmarks, /review) rather than re-implementing it. Works for guests
 * and signed-in users alike — nothing here requires an account.
 */
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { ArrowUpRight } from "lucide-react";
import PageMasthead from "@/components/PageMasthead";
import StatsRow, { type StatTileData } from "@/components/StatsRow";
import ActivityHeatmap from "@/components/ActivityHeatmap";
import AutosaveIndicator from "@/components/AutosaveIndicator";
import { getProfileStats, type ProfileStats } from "@/lib/profile-stats";
import { getProfile, type Profile } from "@/lib/profile";
import { getCertName } from "@/lib/cert-name";
import { PROGRESS_CHANGED_EVENT, ENGAGEMENT_EVENT } from "@/lib/events";
import type { ProjectCardData } from "@/lib/projects-index";

const EXPERIENCE_LABELS: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

function formatMinutes(total: number): string {
  return total >= 60 ? `${Math.round(total / 60)}h` : `${total}m`;
}

function activityLabel(action: string): string {
  switch (action) {
    case "complete":
      return "Completed a lesson";
    case "quiz":
      return "Passed a quiz";
    case "bookmark":
      return "Bookmarked a lesson";
    case "project":
      return "Finished a project";
    case "bigProject":
      return "Finished a capstone project";
    default:
      return "Activity";
  }
}

export default function ProfileClient({
  authConfigured,
  projectsIndex,
}: {
  authConfigured: boolean;
  projectsIndex: Pick<ProjectCardData, "id" | "timeMinutes">[];
}) {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [certName, setCertNameState] = useState("");

  const refresh = useCallback(() => {
    setStats(getProfileStats(projectsIndex));
    setProfile(getProfile());
    setCertNameState(getCertName());
  }, [projectsIndex]);

  useEffect(() => {
    refresh();
    setMounted(true);
    window.addEventListener(PROGRESS_CHANGED_EVENT, refresh);
    window.addEventListener(ENGAGEMENT_EVENT, refresh);
    return () => {
      window.removeEventListener(PROGRESS_CHANGED_EVENT, refresh);
      window.removeEventListener(ENGAGEMENT_EVENT, refresh);
    };
  }, [refresh]);

  if (!mounted || !stats || !profile) return null;

  const signedIn = status === "authenticated" && Boolean(session?.user);
  const displayName = certName || session?.user?.name || "Learner";
  const xpPct =
    stats.nextAt !== Infinity
      ? Math.min(100, Math.round(((stats.xp - stats.prevAt) / (stats.nextAt - stats.prevAt)) * 100))
      : 100;

  const analyticsStats: StatTileData[] = [
    { code: "01", value: `${stats.lessonsDone} / ${stats.totalLessons}`, label: "Lessons done" },
    { code: "02", value: `${stats.overallPct}%`, label: "Overall progress" },
    { code: "03", value: String(stats.quizzesPassed), label: "Quizzes passed" },
    { code: "04", value: String(stats.projectsDone), label: "Projects done" },
    { code: "05", value: `${stats.streak}d`, label: "Current streak" },
    { code: "06", value: `${stats.longestStreak}d`, label: "Longest streak" },
    { code: "07", value: `${stats.xp} XP`, label: "Total XP" },
    { code: "08", value: `${stats.badgesUnlocked} / ${stats.badgesTotal}`, label: "Badges unlocked" },
  ];

  const topCategories = [...stats.perCategory].sort((a, b) => b.pct - a.pct).slice(0, 5);
  const personaLine = [profile.role, profile.experienceLevel && EXPERIENCE_LABELS[profile.experienceLevel]]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <PageMasthead left="Marketing Academy · Profile" right={signedIn ? "Signed in" : "Guest"} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        {/* Identity header */}
        <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--card)] flex items-center justify-center flex-shrink-0">
              {session?.user?.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- external Google avatar, unoptimized by design (Rule 72)
                <img src={session.user.image} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="font-display text-2xl text-[var(--muted-foreground)]">
                  {displayName.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h1 className="font-display font-semibold text-2xl sm:text-3xl">{displayName}</h1>
              <p className="text-sm text-[var(--muted-foreground)] font-ui-sans mt-0.5">
                {personaLine || "No role set yet"}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] font-ui-sans mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1">🔥 {stats.streak}-day streak</span>
                <span>
                  Lv{stats.level} · {stats.levelTitle}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link
              href="/settings"
              className="text-xs font-medium border border-[var(--border)] rounded-full px-3.5 py-1.5 hover:border-[var(--accent)] transition-colors font-ui-sans"
            >
              Edit profile
            </Link>
            <AutosaveIndicator />
          </div>
        </div>

        {stats.nextAt !== Infinity && (
          <div className="max-w-md font-ui-sans mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-[0.8rem] text-[var(--muted-foreground)]">Progress to Level {stats.level + 1}</span>
              <span className="text-[0.8rem] font-semibold text-[var(--foreground)]">
                {stats.xp} / {stats.nextAt} XP
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
              <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${xpPct}%` }} />
            </div>
          </div>
        )}

        <StatsRow stats={analyticsStats} columns={4} className="mb-10" />

        <section className="mb-10">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)] mb-3">
            Activity, last 18 weeks
          </p>
          <ActivityHeatmap xpByDay={stats.xpByDay} />
        </section>

        {stats.recentActivity.length > 0 && (
          <section className="mb-10">
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)] mb-3">
              Recent activity
            </p>
            <ul className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)] font-ui-sans text-sm">
              {stats.recentActivity.map((a, i) => (
                <li key={`${a.id}-${a.ts}-${i}`} className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-[var(--foreground)]">{activityLabel(a.action)}</span>
                  <span className="text-[var(--muted-foreground)] text-xs whitespace-nowrap">+{a.xp} XP</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">
              Top disciplines
            </p>
            <Link href="/skill-map" className="text-xs text-[var(--accent)] flex items-center gap-1 font-ui-sans">
              View skill map <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {topCategories.map((c) => (
              <div key={c.slug} className="font-ui-sans">
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    {c.emoji} {c.title}
                  </span>
                  <span className="text-[var(--muted-foreground)]">
                    {c.completedLessons}/{c.totalLessons}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">Badges</p>
            <Link href="/achievements" className="text-xs text-[var(--accent)] flex items-center gap-1 font-ui-sans">
              View all <ArrowUpRight size={12} />
            </Link>
          </div>
          <p className="text-sm font-ui-sans text-[var(--muted-foreground)]">
            {stats.badgesUnlocked} of {stats.badgesTotal} unlocked
          </p>
        </section>

        <section className="mb-10 grid sm:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">
                Certificates
              </p>
              <Link href="/certificates" className="text-xs text-[var(--accent)] flex items-center gap-1 font-ui-sans">
                View all <ArrowUpRight size={12} />
              </Link>
            </div>
            {stats.certificatesEarned.length > 0 ? (
              <ul className="text-sm font-ui-sans space-y-1">
                {stats.certificatesEarned.map((c) => (
                  <li key={c.trackSlug}>
                    {c.emoji} {c.trackTitle}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm font-ui-sans text-[var(--muted-foreground)]">None earned yet</p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">
                Portfolio
              </p>
              <Link href="/portfolio" className="text-xs text-[var(--accent)] flex items-center gap-1 font-ui-sans">
                View all <ArrowUpRight size={12} />
              </Link>
            </div>
            <p className="text-sm font-ui-sans text-[var(--muted-foreground)]">
              {stats.projectsDone} project{stats.projectsDone !== 1 ? "s" : ""} completed
              {stats.projectMinutes > 0 && ` · ${formatMinutes(stats.projectMinutes)}`}
            </p>
          </div>
        </section>

        <section className="mb-10 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)] mb-2">
              Bookmarks
            </p>
            <Link href="/bookmarks" className="text-sm font-ui-sans text-[var(--accent)] flex items-center gap-1">
              {stats.bookmarks} saved <ArrowUpRight size={12} />
            </Link>
          </div>
          <div>
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)] mb-2">
              Review due
            </p>
            <Link href="/review" className="text-sm font-ui-sans text-[var(--accent)] flex items-center gap-1">
              {stats.reviewDue} due now <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>

        {!signedIn && authConfigured && (
          <div className="border border-[var(--border)] rounded-xl p-5 font-ui-sans">
            <p className="font-semibold mb-1">Sign in to save your progress across devices</p>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">
              Your progress is already saved on this device. Signing in backs it up and syncs it anywhere you log in.
            </p>
            <Link
              href="/login"
              className="inline-block text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-full px-4 py-2"
            >
              Sign in
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
