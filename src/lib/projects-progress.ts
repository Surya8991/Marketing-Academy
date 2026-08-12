/**
 * Project completion tracking, which projects and project-steps the user has
 * marked complete.
 *
 * Storage: localStorage key "ma_projects_progress" (see PROJECTS_PROGRESS_KEY
 * in @/lib/events).
 * Format: { completedProjectIds: string[], completedStepIds: string[] }
 *
 * Step-level tracking exists alongside project-level tracking because
 * diagnostic-mode projects (PROJECTS_PLAN.md 2.3a) are made of several
 * ProjectStep entries (each with its own `stepId`, see src/lib/projects/types.ts)
 * and are commonly finished across multiple sittings, a learner should be able
 * to leave a 6-step diagnostic half-done and pick it back up later without
 * losing which steps were already worked through.
 *
 * This module mirrors src/lib/progress.ts (lesson completion) and
 * src/lib/engagement.ts (XP/streak) in structure and error-handling rigor,
 * per AGENTS.md Rule 18 (shared storage logic lives in src/lib, never
 * duplicated per-component) and Rule 42 (every localStorage access wrapped in
 * try/catch, with the corrupt raw value preserved before defaults overwrite it).
 *
 * Projects have no streak/decay concept (unlike engagement.ts), so nothing
 * here is time-based, this is a pure completion set on each axis.
 */

import { preserveCorruptValue } from "@/lib/storage-utils";
import { STORAGE_WRITE_FAILED, PROJECTS_PROGRESS_KEY } from "@/lib/events";

export { PROJECTS_PROGRESS_KEY };
const KEY = PROJECTS_PROGRESS_KEY;

export type ProjectProgress = {
  completedProjectIds: string[];
  completedStepIds: string[];
};

function defaultState(): ProjectProgress {
  return { completedProjectIds: [], completedStepIds: [] };
}

/**
 * Returns the current project + step completion state. Returns defaults on
 * SSR or on any storage/parse error (Stage 2.3-style: corrupted or
 * wrong-type fields are coerced back to defaults so downstream .includes()
 * calls never throw on a bad shape).
 */
export function getProjectProgress(): ProjectProgress {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    // Spread over defaultState so new fields added in future releases don't break old saved data
    const parsed = { ...defaultState(), ...(JSON.parse(raw) as Partial<ProjectProgress>) };
    const d = defaultState();
    if (!Array.isArray(parsed.completedProjectIds)) parsed.completedProjectIds = d.completedProjectIds;
    if (!Array.isArray(parsed.completedStepIds)) parsed.completedStepIds = d.completedStepIds;
    return parsed;
  } catch {
    // Stage 2.2: preserve the unparseable value before defaults overwrite it
    try {
      const corrupt = localStorage.getItem(KEY);
      if (corrupt) preserveCorruptValue(KEY, corrupt);
    } catch { /* storage read itself failed — nothing to preserve */ }
    return defaultState();
  }
}

/** Persists project progress to localStorage. Dispatches STORAGE_WRITE_FAILED on error, matching engagement.ts's saveEngagement(). */
function saveProjectProgress(state: ProjectProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: KEY } }));
  }
}

/**
 * Marks a project complete. Idempotent, safe to call multiple times for the
 * same id. Silently swallows storage errors (private/full), matching the
 * lesson-completion function in progress.ts.
 *
 * Does NOT award XP itself, callers award XP separately via
 * addXP("project" | "bigProject", projectId) from @/lib/engagement, the same
 * separation of concerns progress.ts and engagement.ts use for lessons. This
 * function is unrelated to lesson completion and is NOT subject to AGENTS.md
 * Rule 36 (that rule gates the lesson-completion function, not this one);
 * project completion has no quiz-pass gate by design, projects are practice
 * exercises, not the lesson-completion/certificate path.
 */
export function markProjectComplete(projectId: string): void {
  if (typeof window === "undefined") return;
  const state = getProjectProgress();
  if (!state.completedProjectIds.includes(projectId)) {
    state.completedProjectIds = [...state.completedProjectIds, projectId];
  }
  saveProjectProgress(state);
}

/** Removes a project from the completed set. Does not affect XP (XP is never taken away, matches progress.ts's markIncomplete()). */
export function markProjectIncomplete(projectId: string): void {
  if (typeof window === "undefined") return;
  const state = getProjectProgress();
  state.completedProjectIds = state.completedProjectIds.filter((id) => id !== projectId);
  saveProjectProgress(state);
}

/**
 * Marks a single ProjectStep (by its `stepId`) complete. Idempotent.
 * Used by diagnostic-mode projects so progress through a multi-step project
 * survives leaving and coming back later.
 */
export function markStepComplete(stepId: string): void {
  if (typeof window === "undefined") return;
  const state = getProjectProgress();
  if (!state.completedStepIds.includes(stepId)) {
    state.completedStepIds = [...state.completedStepIds, stepId];
  }
  saveProjectProgress(state);
}

/** Removes a step from the completed set. */
export function markStepIncomplete(stepId: string): void {
  if (typeof window === "undefined") return;
  const state = getProjectProgress();
  state.completedStepIds = state.completedStepIds.filter((id) => id !== stepId);
  saveProjectProgress(state);
}

/** Convenience read: is this project marked complete? Returns false on SSR. */
export function isProjectComplete(projectId: string): boolean {
  return getProjectProgress().completedProjectIds.includes(projectId);
}

/** Convenience read: is this step marked complete? Returns false on SSR. */
export function isStepComplete(stepId: string): boolean {
  return getProjectProgress().completedStepIds.includes(stepId);
}

// Re-export so callers can import PROJECT_TOGGLE_EVENT from either this file or events.ts
export { PROJECT_TOGGLE_EVENT } from "@/lib/events";
