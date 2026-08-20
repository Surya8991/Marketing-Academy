/**
 * The three quiz-related localStorage key PREFIXES, split out of
 * src/lib/quizzes.ts so that consumers which need only the key names don't
 * have to import that ~2.4 MB data module.
 *
 * Why this matters: src/lib/progress-snapshot.ts needs these prefixes and is
 * now in the root-layout client graph (via SyncProvider → sync-client). The
 * bundler tree-shakes the QUIZZES data out today, but that's a property of
 * quizzes.ts having no top-level side effects — one future side effect there
 * and 2.4 MB ships on every route (AGENTS.md Rule 41). Keeping the constants
 * in their own dependency-free module removes the hazard entirely.
 *
 * quizzes.ts re-exports all three for backward compatibility (AGENTS.md
 * Rule 18's "single source of truth" applies to the definition, not to who
 * may re-export it).
 */

/** Prefix for in-progress quiz state keys: ma_quiz_{path} */
export const QUIZ_STORAGE_PREFIX = "ma_quiz_";

/** Prefix for quiz pass flag keys: ma_quiz_pass_{category}_{slug} */
export const QUIZ_PASS_KEY_PREFIX = "ma_quiz_pass_";

/** Prefix for track-level synthesis-quiz pass flags: ma_track_quiz_pass_{track} */
export const TRACK_QUIZ_PASS_PREFIX = "ma_track_quiz_pass_";
