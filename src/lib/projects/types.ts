/**
 * Type system for the Marketing Academy projects layer (PROJECTS_PLAN.md Stage 8).
 *
 * This file has NO runtime code, types only. Project content lives in
 * per-category modules (see AGENTS.md Rule 37, projects ship as dynamically
 * imported per-category modules, never one giant file like quizzes.ts).
 * `src/lib/projects-index.ts` is generated from those modules and is never
 * hand-edited.
 *
 * ---------------------------------------------------------------------------
 * Six modes, plus an honest "no-project" verdict (PROJECTS_PLAN.md 2.4, 9.5-9.6)
 * ---------------------------------------------------------------------------
 * The original design had three modes:
 *   - "diagnostic"  walk a real tool/report, read the numbers, decide what they mean.
 *   - "simulation"  branching decisions over time, budget and outcomes react.
 *   - "build"       produce a real artifact (a deliverable you could put in a portfolio).
 *
 * A full survey of the existing lesson library found many lessons that resist
 * all three without distortion, so three more modes were added:
 *   - "teardown"    given a specimen (real-redacted or synthetic), find the defects.
 *   - "drill"       fast, repeatable practice reps on a narrow skill.
 *   - "calibration" compare your judgment against a known-good answer key.
 *
 * "no-project" is a deliberate, explicit verdict, not a missing value. Some
 * lessons (a pure mindset reframe, a definition-only concept) do not have an
 * honest hands-on practice shape. Forcing one of the other six modes onto
 * such a lesson certifies a skill that was never actually exercised, which is
 * worse than shipping the lesson with no project at all (see Rule 37).
 *
 * ---------------------------------------------------------------------------
 * IMPORTANT: `Archetype` and `ProjectMode` are TWO DIFFERENT AXES
 * ---------------------------------------------------------------------------
 * `Archetype` answers "what shape of thing is this project?", e.g. is the
 * learner tearing down an existing asset, rebuilding one from scratch,
 * auditing a live account, forecasting an outcome, or reverse-engineering a
 * competitor's approach. It describes the project's premise and format.
 *
 * `ProjectMode` answers "how is this project practiced and graded?", e.g. is
 * success measured by correctly diagnosing a problem, navigating a branching
 * simulation, producing a gradeable artifact, or matching an answer key.
 *
 * Both axes happen to include a "teardown"-flavored idea, the `"teardown"`
 * archetype (the project's premise is literally "here is a broken thing") and
 * the `"teardown"` mode (the project is graded by spotting defects against an
 * answer key). These are NOT the same field and must not be conflated: a
 * project can have archetype `"teardown"` with mode `"drill"` (repeated timed
 * teardown reps) just as easily as archetype `"teardown"` with mode
 * `"teardown"` (a single scored teardown). Always set both fields explicitly,
 * never infer one from the other.
 */

import type { PricingTier } from "@/lib/tools-directory";

/** Geographic scope of a case company, drives which learners it's surfaced to first. */
export type Region = "india" | "global";

/** Rough size bucket of a case company's exit, used for filtering/sorting, not a literal value. */
export type ExitScale = "mega" | "large" | "mid" | "small";

/**
 * A real, cited company used as the backdrop for one or more projects.
 * Every exit MUST be confirmed and cited (see AGENTS.md Rule 37, barred
 * companies list: Glossier, Away, CRED, Zerodha, Zoho, none of them exited).
 */
export type CaseCompany = {
  id: string;
  name: string;
  website: string;
  industry: string;
  sector: string;
  region: Region;
  hq: string;
  founded: number;
  sizeAtExit: string;
  revenueAtExit: string;
  bestKnownFor: string;
  disciplines: string[];
  exit: {
    type: "acquisition" | "ipo" | "direct-listing" | "spac" | "merger";
    scale: ExitScale;
    date: string;
    valueLabel: string;
    acquirer?: string;
    source: string;
  };
  keyNumbers: string[];
};

/** How big a commitment the project is, mini/core/big roughly track time investment. */
export type ProjectTier = "mini" | "core" | "big";

/** The shape/premise of the project. See file header, this is NOT the same axis as ProjectMode. */
export type Archetype =
  | "teardown"
  | "rebuild"
  | "audit"
  | "head-to-head"
  | "forecast"
  | "simulation"
  | "reverse-engineer"
  | "build-the-asset"
  | "ai-critique";

/** How the project is practiced/graded. See file header, this is NOT the same axis as Archetype. */
export type ProjectMode =
  | "diagnostic"
  | "simulation"
  | "build"
  | "teardown"
  | "drill"
  | "calibration"
  | "no-project";

/** Rough time-to-fix bucket used inside a diagnostic step's "so what" guidance. */
export type Effort = "5 min" | "30 min" | "half day" | "dev ticket";

/**
 * One step of a "diagnostic" (or "audit"/"teardown"-mode) project: read a real
 * number in a real tool, decide what it means, decide what to do about it.
 */
export type ProjectStep = {
  concept: string;
  lessonAnchor: string;
  theoryRecap: string;
  question: string;
  toolName: string;
  where: string;
  procedure: string[];
  outputSample: string;
  healthy: string;
  unhealthy: string;
  interpret: string;
  soWhat: { symptom: string; action: string; effort: Effort }[];
  owner: "you" | "developer" | "either";
  stepId: string;
};

/** How a decision option in a simulation stage is judged after the fact. */
export type Verdict = "optimal" | "acceptable" | "costly";

/** One stage of a "simulation"-mode project: a situation, a decision, branching outcomes. */
export type SimulationStage = {
  stageId: string;
  label: string;
  elapsed: string;
  concept: string;
  lessonAnchor: string;
  situation: string;
  dashboard: string;
  spendToDate: string;
  budgetRemaining: string;
  decision: {
    prompt: string;
    options: {
      id: string;
      label: string;
      verdict: Verdict;
      outcome: string;
      why: string;
      lessonRef: string;
      nextStageId: string;
    }[];
  };
  liveVariant?: string;
};

/** Optional real-money/real-time extension of a simulation, run the actual campaign instead of a scripted one. */
export type LiveTrack = {
  minSpend: string;
  minDurationDays: number;
  setupSteps: string[];
  checkInSchedule: string;
};

/** One specimen + answer key for a "teardown"-mode project (spot the defects). */
export type TeardownItem = {
  itemId: string;
  specimen: string;
  specimenSource: "real-redacted" | "synthetic-realistic";
  prompt: string;
  answerKey: {
    defect: string;
    severity: "critical" | "moderate" | "cosmetic";
    whyItMatters: string;
    lessonRef: string;
    owner: "you" | "developer" | "either";
  }[];
  distractors: string[];
  partialCredit: true;
};

/**
 * A single tool referenced by a project. `PricingTier` is imported from
 * tools-directory.ts, not redeclared here (AGENTS.md Rule 18, single source
 * of truth, tools-directory.ts already owns this type).
 */
export type ToolRef = {
  toolName: string;
  role: string;
  why: string;
  required: boolean;
  fallback?: string;
  lastVerified: string;
  inlineUrl?: string;
  inlinePricing?: PricingTier;
};

/** Every project must have a complete free-tool path; paid tools are upgrades only (AGENTS.md Rule 37). */
export type ToolStack = {
  free: ToolRef[];
  paid: ToolRef[];
  paidUpgradeNote?: string;
};

/**
 * A single practice project attached to a lesson. `mode` drives which of
 * `steps` / `stages` / `teardownItems` is populated (diagnostic → steps,
 * simulation → stages [+ optional liveTrack], teardown → teardownItems,
 * build/drill/calibration may use steps or a bespoke shape per project).
 */
export type Project = {
  id: string;
  tier: ProjectTier;
  archetype: Archetype;
  title: string;
  timeEstimate: string;
  timeMinutes: number;
  objective: string;
  companyId: string;
  scenario: string;
  brief: string;
  mode: ProjectMode;
  conceptsCovered: string[];
  steps?: ProjectStep[];
  stages?: SimulationStage[];
  liveTrack?: LiveTrack;
  teardownItems?: TeardownItem[];
  toolStack: ToolStack;
  datasetUrl?: string;
  deliverable: string;
  sampleOutput: string;
  successCriteria: string[];
  portfolioReady: boolean;
  stretch?: string;

  // --- "Learn vs Do" content architecture (added 2026-08-13, all optional so
  // the existing library keeps rendering unchanged until each project is
  // migrated; see ProjectCard.tsx for how each is rendered/omitted). ---

  /** Short skill tags shown in the header, e.g. ["Core Web Vitals", "Technical SEO"]. */
  skills?: string[];
  /** What the learner should already know/have before starting; renders as a "Before You Start" checklist. */
  prerequisites?: string[];
  /** First-mention term + plain-English definition, shown in "Before You Start". */
  terminology?: { term: string; definition: string }[];
  /** The single question the whole project is answering, shown prominently under Objective. */
  keyQuestion?: string;
  /** What to actively look for while working through the steps/evidence (the "how to think about it" list). */
  whatToLookFor?: { label: string; detail: string }[];
  /** A multiple-choice checkpoint: given the evidence gathered, which action is correct and why. */
  decision?: {
    prompt: string;
    options: { id: string; label: string; correct: boolean }[];
    explanation: string;
  };
  /** The polished, stakeholder-ready recommendation paragraph (Priority + finding + action, in professional register). */
  professionalRecommendation?: { priority: "High" | "Medium" | "Low"; text: string };
  /** Mistakes learners commonly make on this exact project, each with why it's wrong. */
  commonMistakes?: { mistake: string; explanation: string }[];
  /** 2-3 sentence closing synthesis, what the exercise was really teaching. */
  keyTakeaway?: string;
};

/**
 * A "big" project that sits at the end of a track and synthesizes multiple
 * lessons instead of a single one (PROJECTS_PLAN.md 2.8). Extends `Project`
 * with track placement and a list of the concepts it pulls together.
 */
export type TrackBigProject = Project & {
  trackSlug: string;
  afterLessonIndex: number;
  synthesizes: string[];
};

// XPAction in src/lib/engagement.ts must be extended with 'project' | 'bigProject'
// (30/40/100 XP values) as a separate follow-up edit to that file, not here.
