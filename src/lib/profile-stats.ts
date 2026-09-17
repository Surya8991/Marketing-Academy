/**
 * Single aggregator for "what does this learner's progress look like",
 * consolidates stat derivations that were previously hand-duplicated across
 * AchievementsClient, SkillMapClient, PortfolioClient, and the certificate
 * page (Rule 18: shared derivation logic belongs in src/lib/, not per-component).
 *
 * Deliberately does NOT import src/lib/quizzes.ts (2.4 MB, Rule 41) or
 * src/lib/projects-index.ts (436 KB) as runtime values:
 *  - Quiz-pass state is read directly from localStorage via the prefixes in
 *    the dependency-free src/lib/quiz-keys.ts (mirrors progress-snapshot.ts's
 *    own reasoning for doing the same).
 *  - Practice-project minutes need each project's `timeMinutes`, which only
 *    lives in projects-index.ts's ProjectCardData. Rather than import that
 *    module's ~436 KB PROJECTS_INDEX array here (and therefore into every
 *    consumer of this file), getProfileStats() takes an OPTIONAL slim project
 *    list as a parameter, only callers that already pay that cost (e.g. the
 *    /profile page, which mirrors /portfolio's existing precedent of passing
 *    PROJECTS_INDEX from a server component) need to supply it. Callers that
 *    don't (e.g. a Nav badge) still get projectsDone, just projectMinutes: 0.
 */
import { CATEGORIES, canonicalLessonId, uniqueLessonCount } from "@/lib/curriculum";
import { getCompleted } from "@/lib/progress";
import { getBookmarks } from "@/lib/bookmarks";
import { getEngagement, getCurrentLevel, type XPAction } from "@/lib/engagement";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { getProjectProgress } from "@/lib/projects-progress";
import { getReviewQueue, getDueCount } from "@/lib/spaced-review";
import { QUIZ_PASS_KEY_PREFIX, TRACK_QUIZ_PASS_PREFIX } from "@/lib/quiz-keys";
import { NOTE_KEY_PREFIX } from "@/lib/notes";
import { TRACKS } from "@/lib/tracks";
import type { ProjectCardData } from "@/lib/projects-index";

export type CategoryStat = {
  slug: string;
  title: string;
  emoji: string;
  totalLessons: number;
  completedLessons: number;
  pct: number;
};

export type CertificateEarned = {
  trackSlug: string;
  trackTitle: string;
  emoji: string;
};

export type ActivityEntry = {
  action: XPAction;
  id: string;
  xp: number;
  ts: number;
};

export type ProfileStats = {
  lessonsDone: number;
  totalLessons: number;
  overallPct: number;
  perCategory: CategoryStat[];
  quizzesPassed: number;
  projectsDone: number;
  /** 0 unless a slim project list (with timeMinutes) was passed to getProfileStats(). */
  projectMinutes: number;
  bookmarks: number;
  notesCount: number;
  reviewDue: number;
  reviewLapses: number;
  xp: number;
  level: number;
  levelTitle: string;
  nextAt: number;
  prevAt: number;
  streak: number;
  longestStreak: number;
  badgesUnlocked: number;
  badgesTotal: number;
  certificatesEarned: CertificateEarned[];
  xpByDay: Record<string, number>;
  /** Most recent first, capped to 15. Empty array on SSR/error. */
  recentActivity: ActivityEntry[];
};

function countKeysWithPrefix(prefix: string): number {
  try {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) count++;
    }
    return count;
  } catch {
    return 0;
  }
}

// Mirrors quizzes.ts's getTrackQuizPassed() exactly, without importing that
// 2.4 MB module, see file header.
function isTrackQuizPassed(trackSlug: string): boolean {
  try {
    return localStorage.getItem(`${TRACK_QUIZ_PASS_PREFIX}${trackSlug}`) === "1";
  } catch {
    return false;
  }
}

export function getProfileStats(projectsIndex?: Pick<ProjectCardData, "id" | "timeMinutes">[]): ProfileStats {
  const completed = getCompleted();
  const state = getEngagement();
  const bookmarks = getBookmarks();
  const projectProgress = getProjectProgress();
  const { level, title: levelTitle, nextAt, prevAt } = getCurrentLevel(state.xp);

  const totalLessons = uniqueLessonCount();
  const lessonsDone = completed.size;
  const overallPct = totalLessons > 0 ? Math.round((lessonsDone / totalLessons) * 100) : 0;

  const perCategory: CategoryStat[] = CATEGORIES.map((c) => {
    const total = c.lessons.length;
    const done = c.lessons.filter((l) => completed.has(canonicalLessonId(c.slug, l))).length;
    return {
      slug: c.slug,
      title: c.title,
      emoji: c.emoji,
      totalLessons: total,
      completedLessons: done,
      pct: total > 0 ? Math.round((done / total) * 100) : 0,
    };
  });

  const quizzesPassed = countKeysWithPrefix(QUIZ_PASS_KEY_PREFIX);
  const notesCount = countKeysWithPrefix(NOTE_KEY_PREFIX);

  const projectsDone = projectProgress.completedProjectIds.length;
  const projectMinutes = projectsIndex
    ? projectsIndex
        .filter((p) => projectProgress.completedProjectIds.includes(p.id))
        .reduce((sum, p) => sum + p.timeMinutes, 0)
    : 0;

  const reviewQueue = getReviewQueue();
  const reviewDue = getDueCount();
  const reviewLapses = reviewQueue.reduce((sum, r) => sum + r.lapses, 0);

  // Matches certificates/[slug]/page.tsx's own `${l.category}/${l.slug}` id
  // construction (not canonicalLessonId) so this list never disagrees with
  // what that page itself would show as eligible.
  const certificatesEarned: CertificateEarned[] = TRACKS.filter((t) => {
    const total = t.lessons.length;
    if (total === 0) return false;
    const done = t.lessons.filter((l) => completed.has(`${l.category}/${l.slug}`)).length;
    const pct = Math.round((done / total) * 100);
    return pct === 100 && isTrackQuizPassed(t.slug);
  }).map((t) => ({ trackSlug: t.slug, trackTitle: t.title, emoji: t.emoji }));

  const recentActivity: ActivityEntry[] = [...state.xpLog].slice(-15).reverse();

  return {
    lessonsDone,
    totalLessons,
    overallPct,
    perCategory,
    quizzesPassed,
    projectsDone,
    projectMinutes,
    bookmarks: bookmarks.length,
    notesCount,
    reviewDue,
    reviewLapses,
    xp: state.xp,
    level,
    levelTitle,
    nextAt,
    prevAt,
    streak: state.streak,
    longestStreak: state.longestStreak,
    badgesUnlocked: state.achievements.length,
    badgesTotal: ACHIEVEMENTS.length,
    certificatesEarned,
    xpByDay: state.xpByDay,
    recentActivity,
  };
}
