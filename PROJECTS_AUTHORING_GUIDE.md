# Practice-Projects Authoring Guide — reusable process for Stage 8.3/8.4 batches

> Companion to `PROJECTS_PLAN.md` (the spec) and `AGENTS.md` Rules 45-56 (the rules). This file is the **operational playbook** — copy/fill/run, not prose to re-derive each session. Built in Session 76 after the Technical SEO Mastery track batch; the goal is that authoring the next track costs less setup and fewer tokens for the same quality bar, per Rule 56.
>
> **Which track next?** `PROJECTS_PLAN.md` section "Stage 8.3a" has the owner-set priority order across all 24 tracks — work through it top to bottom, don't pick a track ad hoc.

---

## 0. The scripts and tests this playbook uses

| Script | Purpose |
|---|---|
| `scripts/get-track-batch-info.mjs` | Finds which lessons in a track still need projects + their mechanically-assigned tier pair. Replaces manually grepping `tracks.ts`/`projects-assignment.ts`. **Groups batches per category** so a batch never spans two, since each merge run targets one category file. |
| `scripts/merge-projects-batch.mjs` | Merges subagents' scratch output into `src/lib/projects/{category}.ts` safely (refuses duplicate keys, verifies key count, backs up outside the project tree). |
| `scripts/audit-projects.mjs` | Fast per-category structural check during authoring. Run scoped to the new batch (`--lessons=`), and unscoped occasionally (this is how the Session 73 pilot's placeholder-`toolName` violations were finally caught, three sessions after they shipped). |
| `scripts/build-projects-index.mjs` | Regenerates the slim `/projects` hub index. Run after every merge. |
| `scripts/compute-project-assignment.mjs` | One-time/rare: recomputes tier assignment for all 642 lessons. Only needed if `curriculum.ts` or `tracks.ts` changes. |

**`tests/projects-data.test.ts` is the real gate.** It runs in `npm test` (and therefore CI) and enforces the same invariants on the actual imported objects rather than a text scan: every `companyId`/`toolName`/`lessonAnchor` resolves, mode agrees with which array is populated, every step carries all five runbook parts, `toolStack.free` is non-empty, project ids are unique, no archetype reuse within a lesson, and simulation options route to a real stage or the `"end"` sentinel. The audit script is the fast feedback loop; this is the thing that actually blocks a bad merge.

---

## 1. Step-by-step process for a new track

### 1.1 Get the batch list
```bash
node --import tsx scripts/get-track-batch-info.mjs <track-slug> --batch-size=2
```
Run WITHOUT `--category-only` first to see every category the track touches (most "mastery" tracks, slugs 9-24 in PROJECTS_PLAN.md's priority table, are single-category; mixed tracks like `ai-search-optimization` or `b2b-marketer` are not). Then run once per category, e.g. `--category-only=seo`, `--category-only=ai-marketing`, so each run's output maps to one `src/lib/projects/{category}.ts` file — batching/merging happens per category, not per track.

This prints every remaining lesson with its MDX path and tier pair, pre-split into batches of 2 (Rule 56: 2 lessons/agent, not 4 — smaller batches cut context-compounding cost more than they add in repeated setup). Copy each batch's block straight into that batch's agent prompt (section 2 below).

### 1.2 Launch agents
One `general-purpose` agent per batch, run in parallel (multiple `Agent` tool calls in one message). Use the template in section 2 — it inlines the condensed reference pack (section 3) directly, so agents do **not** need to read `types.ts`/`case-companies.ts`/`tools-directory.ts` in full.

Each agent writes its output to a scratch `.ts` file (e.g. in the session scratchpad directory) and directly edits its own lessons' MDX files for the `InAction` inserts — never the shared category file (avoids write conflicts between parallel agents).

### 1.3 Merge
```bash
node --import tsx scripts/merge-projects-batch.mjs <category> <scratchA.ts> <scratchB.ts> <scratchC.ts> ...
```

### 1.4 Audit
```bash
node --import tsx scripts/audit-projects.mjs <category> --lessons=<comma-separated new slugs>
```
Fix anything it finds (usually a placeholder `toolName` — add the real tool to `tools-directory.ts` once, per Rule 55, don't invent another placeholder).

### 1.5 Verify
```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
node --import tsx scripts/build-projects-index.mjs
```
`npm test` is the one that matters here — `tests/projects-data.test.ts` will fail the build on any unresolved `companyId`/`toolName`/`lessonAnchor` or malformed project shape, with the offending project id in the message. `tsc` will NOT catch these: they're all valid strings as far as the type system is concerned.

### 1.6 Live-check + docs + push
- Live-check one lesson page in the browser preview (confirm `InAction` renders + the project-count badge is right).
- Update `PROJECTS_PLAN.md`'s Stage 8 table, `PROJECT_LOG.md` session entry, `README.md` counts if changed, `AGENTS.md` if a new gotcha surfaced (Rule 23).
- Branch, commit, push. Don't push to `main` directly.

---

## 2. Agent prompt template

Fill in the `{{...}}` placeholders from section 1.1's output and launch. This is the full prompt — nothing else needs to be added, and agents should **not** be told to read `types.ts`/`case-companies.ts`/`tools-directory.ts` in full; the condensed pack below (section 3) is inlined here on purpose.

```
You are authoring content for the "Marketing Academy" Next.js site at D:\Coding\marketing-academy,
a hands-on practice-projects layer for lessons (PROJECTS_PLAN.md Stage 8, AGENTS.md Rules 37-56).
This is real production content. Follow every rule below exactly.

## Your assigned lessons (category: {{category}})
{{for each lesson}}
- {{slug}} — tier pair: [{{tier0}}, {{tier1}}] — MDX: {{mdxPath}}
{{/for}}

## Reference pack (read this, do NOT open types.ts/case-companies.ts/tools-directory.ts in full)
{{paste section 3.1 Project type shape}}
{{paste section 3.2 ONE worked example}}
{{paste section 3.3 relevant company shortlist, ~8-10 entries with id/name/industry/region only}}
{{paste section 3.4 relevant tool shortlist, ~10-15 entries with just name}}

## Task, per lesson
1. Read the lesson's actual MDX file. Note its exact `##`/`###` heading text — headings get
   auto-slugified ids via rehype-slug (lowercase, spaces to hyphens, punctuation stripped).
2. Author EXACTLY 2 projects, tier[0] and tier[1] as assigned above.
   - Company: from the shortlist above or case-companies.ts if you need a different real one —
     never invent a company or use one without a confirmed exit.
   - Archetype: the 2 projects must use DIFFERENT archetypes (teardown/rebuild/audit/head-to-head/
     forecast/simulation/reverse-engineer/build-the-asset/ai-critique). Never repeat within a lesson.
   - Mode, DERIVE it, don't default everything to diagnostic:
       * can a beginner check this free today on something they own? -> diagnostic (steps[])
       * is it a supplied specimen with defects to find? -> teardown (teardownItems[])
       * can it NOT be practised live for free (costs money, needs an audience/access you
         lack, takes months)? -> simulation (stages[], see reference pack 3.2b)
       * does it produce a real portfolio artifact? -> build (steps[])
       * narrow repeatable reps -> drill; judgment vs. a known-good key -> calibration (steps[])
       * genuinely no honest hands-on shape (pure mindset reframe, definition-only)?
         -> "no-project", an explicit valid verdict. Do NOT force a mode onto such a lesson.
     Populate the array that matches the mode. Wrong array = the project renders empty.
   - Diagnostic/build/drill/calibration steps need ALL of: concept, lessonAnchor (a REAL heading id,
     verify it), theoryRecap, question, toolName (from the shortlist or tools-directory.ts — NEVER
     invent a placeholder string like "Manual X"/"Written justification", if nothing fits say so in
     your final report instead of inventing), where, procedure[], outputSample (rendered TEXT/TABLE,
     never an image), healthy, unhealthy, interpret, soWhat[] ({symptom, action, effort}), owner, stepId.
   - Teardown items need: itemId, specimen, specimenSource, prompt, answerKey[] ({defect, severity,
     whyItMatters, lessonRef, owner}), distractors[], partialCredit: true.
   - Simulation stages: see reference pack 3.2b. Must be completable with zero spend and no account;
     every "costly" option needs a lessonRef naming the passage it contradicts; a poor choice routes
     to a genuinely worse stage (check the economics actually get worse), never a bare "incorrect".
   - toolStack.free must be a complete path alone. datasetUrl only if the mode needs supplied data
     (check public/project-data/ for a real fit, never invent one).
   - conceptsCovered must be derived from your steps'/stages'/items' own `concept` values — real
     concept NAMES, never sentence fragments (Rule 46).
   - sampleOutput must reference a DIFFERENT company than the project's own companyId, and contains
     only the sample itself, never meta-commentary or instructions about what it should contain.
3. Author 2 "concept scenario" InAction inserts per lesson, into the same MDX file, directly below
   the heading each one illustrates:

   <InAction
     concept="Exact Concept Name"
     companyName="Real Company Name"
     companyId="roster-id-if-applicable"
     where="..." why="..." what="..." benefit="quantified outcome" timeframe="..." date="..."
     source="https://real-url-that-actually-supports-the-claim"
   />

   The outcome MUST be real and verified via WebSearch/WebFetch before writing — never invent
   numbers. If nothing solid turns up after 2 searches + 1 fetch, move to a different concept in
   the same lesson rather than search exhaustively. `source` is required. Company does not need to
   be on the roster for a scenario (only Project.companyId needs that). InAction needs no import,
   it's a registered global MDX component.

## Output
- Projects: write to {{scratchFilePath}} as:
  import type { Project } from "@/lib/projects/types";
  export const BATCH_{{X}}: Record<string, Project[]> = { "{{slug}}": [ ... ], ... };
- MDX: apply directly via Edit to each lesson's real MDX file.
- Do NOT run tsc yourself — that's checked once at merge time across the whole file.

## Final report
Per lesson: 2 project titles + companyId + archetype + mode, and 2 InAction concepts + companies +
which heading each was inserted after. Dense, not narrative — read by a merge step, not a human.
```

---

## 3. Condensed reference pack

### 3.1 Project type shape (trimmed from `src/lib/projects/types.ts`)

```ts
type ProjectTier = "mini" | "core" | "big";
type Archetype = "teardown" | "rebuild" | "audit" | "head-to-head" | "forecast"
  | "simulation" | "reverse-engineer" | "build-the-asset" | "ai-critique";
type ProjectMode = "diagnostic" | "simulation" | "build" | "teardown" | "drill" | "calibration" | "no-project";
type Effort = "5 min" | "30 min" | "half day" | "dev ticket";

type ProjectStep = {
  concept: string; lessonAnchor: string; theoryRecap: string; question: string;
  toolName: string; where: string; procedure: string[]; outputSample: string;
  healthy: string; unhealthy: string; interpret: string;
  soWhat: { symptom: string; action: string; effort: Effort }[];
  owner: "you" | "developer" | "either"; stepId: string;
};

type TeardownItem = {
  itemId: string; specimen: string; specimenSource: "real-redacted" | "synthetic-realistic";
  prompt: string;
  answerKey: { defect: string; severity: "critical" | "moderate" | "cosmetic";
    whyItMatters: string; lessonRef: string; owner: "you" | "developer" | "either" }[];
  distractors: string[]; partialCredit: true;
};

// simulation mode uses `stages`, NOT `steps`. Required for lessons that can't be
// practised live (paid-ads above all: real practice costs $500-$1,500). See 3.2b.
type Verdict = "optimal" | "acceptable" | "costly";
type SimulationStage = {
  stageId: string; label: string; elapsed: string; concept: string;
  lessonAnchor: string; situation: string; dashboard: string;
  spendToDate: string; budgetRemaining: string;
  decision: {
    prompt: string;
    options: { id: string; label: string; verdict: Verdict; outcome: string;
      why: string; lessonRef: string; nextStageId: string }[];
  };
  liveVariant?: string;
};
type LiveTrack = { minSpend: string; minDurationDays: number;
  setupSteps: string[]; checkInSchedule: string };

type ToolRef = { toolName: string; role: string; why: string; required: boolean;
  fallback?: string; lastVerified: string; inlineUrl?: string; inlinePricing?: PricingTier };
type ToolStack = { free: ToolRef[]; paid: ToolRef[]; paidUpgradeNote?: string };

type Project = {
  id: string; tier: ProjectTier; archetype: Archetype; title: string;
  timeEstimate: string; timeMinutes: number; objective: string; companyId: string;
  scenario: string; brief: string; mode: ProjectMode; conceptsCovered: string[];
  steps?: ProjectStep[];            // diagnostic / build / drill / calibration
  stages?: SimulationStage[];       // simulation ONLY
  liveTrack?: LiveTrack;            // optional, simulation only, never required to finish
  teardownItems?: TeardownItem[];   // teardown ONLY
  toolStack: ToolStack; datasetUrl?: string; deliverable: string; sampleOutput: string;
  successCriteria: string[]; portfolioReady: boolean; stretch?: string;
};
```

**Which array to populate, by mode** — getting this wrong means the project renders empty:

| mode | populate | notes |
|---|---|---|
| `diagnostic` | `steps[]` | the default; a free check on something the learner owns |
| `teardown` | `teardownItems[]` | supplied specimen + fixed answer key |
| `simulation` | `stages[]` (+ optional `liveTrack`) | branching decisions over time; **never** `steps[]` |
| `build` / `drill` / `calibration` | `steps[]` | or a bespoke shape per project |
| `no-project` | none | a valid, explicit verdict — see below |

**`no-project` is a legitimate answer.** If a lesson is a pure mindset reframe or definition-only concept with no honest hands-on shape, mark it `no-project` rather than forcing one of the other modes. Forcing a mode certifies a skill that was never exercised, which is worse than shipping no project (PROJECTS_PLAN.md 11.6, AGENTS.md Rule 37). Two shipped examples: `what-is-marketing`, `opportunity-cost-thinking`.

### 3.2 ONE worked example (trimmed to 1 step from the real `keyword-research` project)

```ts
{
  id: "keyword-research-export-audit",
  tier: "core",
  archetype: "audit",
  title: "The Prioritization Call: Auditing a Real Keyword Export",
  timeEstimate: "40 minutes",
  timeMinutes: 40,
  objective: "Given a real 40-keyword export with volume, difficulty, CPC, intent, and current rank, apply the lesson's evaluation framework to decide which keywords deserve new content, which are a fast fix on a page you already rank for, and which are a high-volume trap for a site without page-one authority yet.",
  companyId: "freshworks",
  scenario: "You're the marketing analyst at Freshworks, the Chennai-founded, Nasdaq-listed B2B SaaS company (FRSH), validating a prospective add-on. You've pulled a 40-keyword export with current rank, and you have one quarter's content budget to allocate.",
  brief: "Sort by intent, score realistic targets, weigh commercial value beyond raw volume, and find the fastest win sitting in a page you already rank for.",
  mode: "diagnostic",
  conceptsCovered: ["Filtering by search intent before filtering by anything else"],
  steps: [
    {
      stepId: "step-1-intent-filter",
      concept: "Filtering by search intent before filtering by anything else",
      lessonAnchor: "stage-3-filter-by-intent",
      theoryRecap: "The lesson's Stage 3 splits every keyword into informational, navigational, commercial, or transactional intent, citing SparkToro's 2024 data that 52.65% of searches are informational.",
      question: "Sorted by intent, this export has 24 commercial rows, 13 informational, 2 transactional, 1 navigational. Which bucket gets a dedicated landing page this quarter?",
      toolName: "Google Sheets",
      where: "Import keyword-export.csv, freeze the header row, filter the `intent` column.",
      procedure: [
        "Import keyword-export.csv and freeze row 1",
        "Filter the intent column, isolate the 2 transactional rows first",
        "Isolate the 24 commercial rows as landing-page candidates",
        "Leave informational/navigational rows for blog content, not sales pages",
      ],
      outputSample: "TRANSACTIONAL (2 rows)\n  project management software free trial   590 vol   KD 31   rank 5\nCOMMERCIAL (24 rows, sample)\n  project management software   40,500 vol   KD 78   rank 14\n  ...19 more rows",
      healthy: "The 24 commercial rows go into a landing-page backlog; nobody drafts a sales page for an informational query.",
      unhealthy: "Building a product landing page around an informational query because the volume number looked decent.",
      interpret: "Intent is a hard filter, not a scoring dimension. Sort by intent first, everything else only applies inside the commercial/transactional bucket.",
      soWhat: [{ symptom: "The content backlog mixes landing pages and blog posts", action: "Split the backlog by intent before anyone estimates effort", effort: "5 min" }],
      owner: "you",
    },
    // ... more steps, one per concept the lesson covers, same shape
  ],
  toolStack: {
    free: [{ toolName: "Google Sheets", role: "Sort and filter the export", why: "Free, no account friction", required: true, lastVerified: "2026-08" }],
    paid: [],
  },
  deliverable: "A prioritized content backlog split by intent, with the fastest existing-page win flagged first.",
  // sampleOutput shows a DIFFERENT company than companyId above (freshworks -> nykaa),
  // and contains ONLY the sample itself, no meta-commentary about what it should contain.
  sampleOutput:
    "Nykaa, Q3 content backlog (excerpt)\n\n" +
    "FUND NOW, commercial intent, realistic KD\n" +
    "  1. best kajal for sensitive eyes    1,300 vol   KD 17   rank —    new landing page\n" +
    "  2. matte lipstick long lasting        880 vol   KD 22   rank —    new landing page\n\n" +
    "FASTEST WIN, already ranking, one page edit\n" +
    "  3. liquid eyeliner waterproof       2,400 vol   KD 29   rank 6    refresh existing page\n\n" +
    "DO NOT FUND, informational or out of reach this quarter\n" +
    "  makeup tutorial for beginners     40,500 vol   KD 74   rank —    blog, not a sales page",
  successCriteria: ["Correctly buckets all 40 rows by intent", "Identifies the fastest existing-page win"],
  portfolioReady: true,
}
```

### 3.2b Simulation-mode example (trimmed to 1 stage from the real `paid-ads-101` project)

Only needed when a batch has a lesson that can't be practised live for free. Paste this **in addition to** 3.2 for those batches, not instead of it.

```ts
{
  id: "paid-ads-101-learning-phase-sim",
  tier: "core",
  archetype: "simulation",
  mode: "simulation",                       // stages[], NOT steps[]
  conceptsCovered: ["the 7-14 day learning phase", "CTR vs. conversion-rate diagnosis"],
  stages: [
    {
      stageId: "day3-early-check",
      label: "Day 3, first look",
      elapsed: "Day 3 of 14",
      concept: "Recognizing when a sample is too small to act on",
      lessonAnchor: "the-budget-question",
      situation: "You launched \"Search - Remote PM Software\" three days ago and open the dashboard for the first time. Nothing has been touched since launch.",
      dashboard:
        "Search campaign · Core Terms ad group · Day 3 of 14\n\n" +
        "  Impressions          5,710\n" +
        "  Clicks                 405      CTR 7.1%     (industry avg 6.66%)\n" +
        "  Conversions               1      CVR 0.25%    (industry avg 7.52%)\n" +
        "  Cost per conv       £105.30",
      spendToDate: "£105.30 of £600",
      budgetRemaining: "£494.70",
      decision: {
        prompt: "One conversion in three days on a campaign meant to validate real demand. What do you do?",
        options: [
          {
            id: "wait",
            label: "Note the numbers, close the dashboard, come back in 3-5 days",
            verdict: "optimal",
            outcome: "You let the learning phase run undisturbed. One conversion in three days is a coin flip, not a trend, and the learning phase runs on a 7-14 day clock, not a click count.",
            why: "The algorithm is still calibrating. Any edit now restarts the clock you've already paid three days into.",
            lessonRef: "The Budget Question: 100-200 clicks to know if a keyword or ad group is working",
            nextStageId: "day9-diagnosis",
          },
          // ...3-4 options per stage. EVERY "costly" option needs a lessonRef naming
          // the passage it contradicts — if a wrong answer isn't traceable to something
          // the lesson taught, either the option is unfair or the lesson has a gap.
        ],
      },
    },
    // ...more stages; a "costly" choice routes to a materially WORSE stage, it never
    // just prints "incorrect". The consequence is the teaching.
  ],
}
```

Three hard rules specific to simulations (PROJECTS_PLAN.md section 7, rules 17-19):
- **Completable with zero spend and no account.** `liveTrack` is strictly optional and must never be required to finish or earn XP.
- **Every `costly` option carries a `lessonRef`** naming the passage it contradicts.
- **They branch, they don't grade.** A poor decision routes to a genuinely worse stage with internally-consistent economics. Session 73 shipped a simulation whose "costly" branch accidentally had *better* cost-per-conversion than the optimal one — check your terminals actually get worse.

### 3.3 Company shortlist (fill per batch)

Pick ~8-10 real entries from `src/lib/case-companies.ts` that plausibly fit the batch's lessons (industry match matters more than exact prior usage). Format: `id | name | industry | region`. Check current usage first — `grep -oP 'companyId: "\K[^"]+' src/lib/projects/{category}.ts | sort | uniq -c | sort -rn` — and avoid any company already at 2+ uses in that file.

### 3.4 Tool shortlist (fill per batch)

Pick ~10-15 real tool names from `src/lib/tools-directory.ts` relevant to the batch's topics: `grep -n 'name: "' src/lib/tools-directory.ts | grep -i "<keyword>"`. Always include `Google Sheets` (the established generic fallback for manual/spreadsheet steps) in the shortlist.

---

## 4. What Session 76 measured, and what to expect

Old process (Session 76, Technical SEO Mastery, 4 lessons/agent, full-file reads): **~67-70k tokens/lesson**, ~90-103 tool calls/agent, ~24 min/agent.

This leaner process should cost meaningfully less per lesson at the same quality bar (Rule 56's estimate: 30-45% fewer tokens), from 2 changes: the condensed pack above removes ~4,300 lines of duplicated file reads per agent, and 2-lesson batches (vs 4) cut how much accumulated context each tool call re-pays for. **Not yet measured against real content** — the next batch run is the first real test. Record the actual token/lesson number here after running it, so this becomes a real trend line instead of a one-time estimate.
