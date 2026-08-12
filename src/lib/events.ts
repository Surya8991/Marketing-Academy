/**
 * Single source of truth for all CustomEvent names and shared localStorage keys.
 *
 * Rule: event constants MUST live here, never in component files.
 * Centralising prevents key-name drift across components, a mismatch means
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

/**
 * Fired when a project or project-step completion state is toggled.
 * Payload: `{ id: string, done: boolean, kind: "project" | "step" }`
 * Mirrors LESSON_TOGGLE_EVENT above, lets multiple project UI instances on
 * the same page stay in sync without polling localStorage.
 */
export const PROJECT_TOGGLE_EVENT = "project-toggle";

/** localStorage key: set to "1" after the first-visit onboarding modal is dismissed */
export const ONBOARDED_KEY = "ma_onboarded";

/** localStorage key: persists the user's chosen color theme ("light" | "dark" | "system") */
export const THEME_KEY = "theme";

/**
 * localStorage key: set to "1" after a returning learner (one with existing
 * completions) has dismissed the PROJECTS_PLAN.md 16.3 grandfather notice
 * explaining that track-page checkboxes now require a passed quiz. Shown by
 * TrackLessonList.tsx, once.
 */
export const GATE_NOTICE_KEY = "ma_seen_gate_notice";

/**
 * localStorage key: project + project-step completion state, see
 * src/lib/projects-progress.ts. Format: `{ completedProjectIds: string[],
 * completedStepIds: string[] }`.
 */
export const PROJECTS_PROGRESS_KEY = "ma_projects_progress";

/**
 * Fired when a localStorage write fails (quota exceeded, private mode, etc.).
 * Payload: `{ key: string }` — the storage key that failed.
 * Stage 2.4: lets a single UI component surface a warning instead of
 * silently dropping data while the user sees confetti.
 */
export const STORAGE_WRITE_FAILED = "ma_storage_write_failed";
