/**
 * Achievement definitions and unlock checker.
 *
 * ACHIEVEMENTS is a declarative array of badges. Each badge has a `check` predicate
 * that receives the current EngagementState, the completion Set, and the bookmarks array.
 *
 * Why checkAchievements() lives here and NOT inside addXP():
 *   addXP() only owns XP/streak state. Achievements like "complete all lessons" or
 *   "bookmark 5 lessons" need cross-cutting data (completions, bookmarks) that addXP()
 *   doesn't read. Keeping them separate avoids circular imports and side effects inside
 *   the XP write path.
 *
 * Call pattern (every XP-earning action):
 *   const newState = addXP("complete", id);
 *   const unlocked = checkAchievements(newState);
 *   window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
 */

import { getCompleted } from "@/lib/progress";
import { getBookmarks, type BookmarkEntry } from "@/lib/bookmarks";
import { CATEGORIES, canonicalLessonId, uniqueLessonCount } from "@/lib/curriculum";
import type { EngagementState } from "@/lib/engagement";
import { saveEngagement } from "@/lib/engagement";

export type Achievement = {
  id: string;
  label: string;
  description: string;
  emoji: string;
  check: (state: EngagementState, completed: Set<string>, bookmarks: BookmarkEntry[]) => boolean;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-lesson",
    label: "First Step",
    description: "Complete your first lesson",
    emoji: "🎯",
    check: (_, completed) => completed.size >= 1,
  },
  {
    id: "first-quiz",
    label: "Quiz Crusher",
    description: "Pass your first quiz with a perfect score",
    emoji: "🧠",
    // xpLog entries with action="quiz" only appear after a perfect quiz pass
    check: (s) => s.xpLog.some((e) => e.action === "quiz"),
  },
  {
    id: "bookworm",
    label: "Bookworm",
    description: "Bookmark 5 lessons",
    emoji: "📚",
    check: (_, __, bookmarks) => bookmarks.length >= 5,
  },
  {
    id: "streak-3",
    label: "On a Roll",
    description: "Maintain a 3-day learning streak",
    emoji: "🔥",
    check: (s) => s.streak >= 3,
  },
  {
    id: "streak-7",
    label: "Weekly Warrior",
    description: "Maintain a 7-day learning streak",
    emoji: "⚡",
    check: (s) => s.streak >= 7,
  },
  {
    id: "ten-lessons",
    label: "Ten Down",
    description: "Complete 10 lessons",
    emoji: "✅",
    check: (_, completed) => completed.size >= 10,
  },
  {
    id: "category-clear",
    label: "Category Clear",
    description: "Complete all lessons in any one category",
    emoji: "🏆",
    // Checks each category independently, pass as soon as ANY category is 100%.
    // Resolves canonicalLessonId (Stage 2.1) so cross-listed lessons (13 in
    // fundamentals, sourced from mental-models) check the key that's actually
    // written, instead of an id nothing ever completes.
    check: (_, completed) =>
      CATEGORIES.some((c) =>
        c.lessons.every((l) => completed.has(canonicalLessonId(c.slug, l)))
      ),
  },
  {
    id: "fifty-lessons",
    label: "Halfway There",
    description: "Complete 50 lessons",
    emoji: "🚀",
    check: (_, completed) => completed.size >= 50,
  },
  {
    id: "xp-500",
    label: "XP Milestone",
    description: "Earn 500 XP",
    emoji: "💎",
    check: (s) => s.xp >= 500,
  },
  {
    id: "all-lessons",
    label: "Marketing Polymath",
    // getter so description stays accurate if curriculum.ts lesson count changes.
    // uniqueLessonCount() (642), NOT flatLessons().length (655): the latter
    // double-counts the 13 cross-listed lessons, which made this achievement
    // mathematically unreachable by exactly 13 (Stage 2.1).
    get description() { return `Complete all ${uniqueLessonCount()} lessons`; },
    emoji: "🎓",
    check: (_, completed) => completed.size >= uniqueLessonCount(),
  },
];

/**
 * Checks all ACHIEVEMENTS against the current state. Persists newly unlocked IDs
 * into state.achievements and saves to localStorage. Returns the newly unlocked IDs
 * so callers can dispatch ENGAGEMENT_EVENT with the toast list.
 *
 * Does NOT dispatch the event itself, caller controls when/whether to do that.
 */
export function checkAchievements(state: EngagementState): string[] {
  const completed = getCompleted();
  const bookmarks = getBookmarks();
  const newlyUnlocked: string[] = [];
  for (const a of ACHIEVEMENTS) {
    if (!state.achievements.includes(a.id) && a.check(state, completed, bookmarks)) {
      newlyUnlocked.push(a.id);
    }
  }
  if (newlyUnlocked.length > 0) {
    state.achievements = [...state.achievements, ...newlyUnlocked];
    saveEngagement(state);
  }
  return newlyUnlocked;
}
