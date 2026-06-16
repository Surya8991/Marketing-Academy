import { getCompleted } from "@/lib/progress";
import { getBookmarks, type BookmarkEntry } from "@/lib/bookmarks";
import { flatLessons, CATEGORIES } from "@/lib/curriculum";
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
    check: (_, completed) =>
      CATEGORIES.some((c) =>
        c.lessons.every((l) => completed.has(`${c.slug}/${l.slug}`))
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
    get description() { return `Complete all ${flatLessons().length} lessons`; },
    emoji: "🎓",
    check: (_, completed) => completed.size >= flatLessons().length,
  },
];

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
