/**
 * Single source of truth for all CustomEvent names and shared localStorage keys.
 *
 * Rule: event constants MUST live here, never in component files.
 * Centralising prevents key-name drift across components — a mismatch means
 * the listener never fires and progress silently vanishes.
 *
 * Adding a new event:
 *   1. Export the constant here.
 *   2. Import it in every producer AND consumer (never hardcode the string).
 *   3. If a lib file (quizzes.ts, engagement.ts) needs to re-export it for
 *      backward compat, use `export { FOO } from "@/lib/events"`.
 */

/** Opens / closes the Cmd+K command palette overlay */
export const COMMAND_PALETTE_EVENT = "ma_cmd_palette";

/**
 * Fired after every XP-earning action (lesson complete, quiz pass, bookmark).
 * Payload: `{ state: EngagementState, unlocked: string[] }`
 * Consumers: StreakBadge, AchievementToast, AchievementsClient
 */
export const ENGAGEMENT_EVENT = "ma_xp_update";

/**
 * Fired by TrackLessonList when a lesson checkbox is toggled.
 * Payload: `{ id: string, done: boolean }`
 * Allows multiple MarkComplete instances on the same page to stay in sync
 * without polling localStorage.
 */
export const LESSON_TOGGLE_EVENT = "lesson-toggle";

/**
 * Fired by Quiz.tsx when the user answers all questions correctly (100%).
 * Payload: `{ id: "category/slug" }`
 * MarkComplete listens to this to unlock itself without a page reload.
 */
export const QUIZ_PASSED_EVENT = "quiz-passed";

/** localStorage key: set to "1" after the first-visit onboarding modal is dismissed */
export const ONBOARDED_KEY = "ma_onboarded";

/** localStorage key: persists the user's chosen color theme ("light" | "dark" | "system") */
export const THEME_KEY = "theme";
