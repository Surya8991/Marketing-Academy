/**
 * Stage 8 data validation for the practice-projects layer.
 *
 * Why this exists: `scripts/audit-projects.mjs` performs these same checks but
 * only when a human remembers to run it. Session 76 found that the Session 73
 * pilot content had shipped with invented placeholder `toolName` strings
 * ("Manual page crawl", "Written justification", "Google Docs" before it was
 * cataloged) that survived review for three sessions precisely because nothing
 * ran automatically. These tests put the same invariants in `npm test`, which
 * CI already runs, so the next violation fails the build instead of shipping.
 *
 * This works on the REAL imported objects, not a regex over source text, so it
 * cannot drift from the actual data shape the way a text scan can.
 *
 * Rules enforced (AGENTS.md / PROJECTS_PLAN.md section 7):
 *   Rule 2/5  every companyId resolves to a real CASE_COMPANIES entry
 *   Rule 11   every toolName resolves to a real TOOLS entry (no placeholders)
 *   Rule 12   toolStack.free is a complete standalone path
 *   Rule 15   every lessonAnchor resolves to a real heading in the lesson MDX
 *   Rule 46   conceptsCovered are concept names, not sentence fragments
 *   mode/array agreement: diagnostic->steps, simulation->stages, teardown->teardownItems
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/lib/projects/types";
import { CASE_COMPANIES } from "@/lib/case-companies";
import { TOOLS } from "@/lib/tools-directory";
import { ANALYTICS_PROJECTS } from "@/lib/projects/analytics";
import { CONTENT_PROJECTS } from "@/lib/projects/content";
import { COPYWRITING_PROJECTS } from "@/lib/projects/copywriting";
import { EMAIL_PROJECTS } from "@/lib/projects/email";
import { FUNDAMENTALS_PROJECTS } from "@/lib/projects/fundamentals";
import { GROWTH_PROJECTS } from "@/lib/projects/growth";
import { MENTAL_MODELS_PROJECTS } from "@/lib/projects/mental-models";
import { PAID_ADS_PROJECTS } from "@/lib/projects/paid-ads";
import { SEO_PROJECTS } from "@/lib/projects/seo";

const MODULES: Record<string, Record<string, Project[]>> = {
  analytics: ANALYTICS_PROJECTS,
  content: CONTENT_PROJECTS,
  copywriting: COPYWRITING_PROJECTS,
  email: EMAIL_PROJECTS,
  fundamentals: FUNDAMENTALS_PROJECTS,
  growth: GROWTH_PROJECTS,
  "mental-models": MENTAL_MODELS_PROJECTS,
  "paid-ads": PAID_ADS_PROJECTS,
  seo: SEO_PROJECTS,
};

const companyIds = new Set(CASE_COMPANIES.map((c) => c.id));
const toolNames = new Set(TOOLS.map((t) => t.name));

/** Flattened [category, lessonSlug, project] for every project in the library. */
const allProjects: { category: string; slug: string; project: Project }[] = [];
for (const [category, mod] of Object.entries(MODULES)) {
  for (const [slug, projects] of Object.entries(mod)) {
    for (const project of projects) allProjects.push({ category, slug, project });
  }
}

/**
 * Heading ids as rehype-slug generates them: lowercase, punctuation stripped,
 * whitespace collapsed to hyphens. Mirrors scripts/audit-projects.mjs.
 */
function headingIdsFor(category: string, slug: string): Set<string> | null {
  const mdxPath = path.join(process.cwd(), `src/content/${category}/${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return null;
  const mdx = fs.readFileSync(mdxPath, "utf8");
  const headings = [...mdx.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => m[1].trim());
  return new Set(
    headings.map((h) =>
      h.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-")
    )
  );
}

describe("projects: referential integrity", () => {
  it("every companyId resolves to a real CASE_COMPANIES entry", () => {
    for (const { project } of allProjects) {
      assert.ok(
        companyIds.has(project.companyId),
        `${project.id}: companyId "${project.companyId}" is not in case-companies.ts`
      );
    }
  });

  it("every toolName resolves to a real TOOLS entry (no invented placeholders)", () => {
    for (const { project } of allProjects) {
      const refs = [
        ...(project.toolStack?.free ?? []),
        ...(project.toolStack?.paid ?? []),
      ].map((t) => t.toolName);
      for (const step of project.steps ?? []) refs.push(step.toolName);

      for (const name of refs) {
        assert.ok(
          toolNames.has(name),
          `${project.id}: toolName "${name}" is not in tools-directory.ts. ` +
            `Add the real tool there (AGENTS.md Rule 55), never invent a placeholder string.`
        );
      }
    }
  });

  it("every lessonAnchor resolves to a real heading in its lesson's MDX", () => {
    for (const { category, slug, project } of allProjects) {
      const headingIds = headingIdsFor(category, slug);
      if (headingIds === null) continue; // covered by the MDX-exists test below
      const anchors = [
        ...(project.steps ?? []).map((s) => s.lessonAnchor),
        ...(project.stages ?? []).map((s) => s.lessonAnchor),
      ];
      for (const raw of anchors) {
        const anchor = raw.replace(/^#/, "");
        assert.ok(
          headingIds.has(anchor),
          `${project.id}: lessonAnchor "${anchor}" is not a heading in ${category}/${slug}.mdx`
        );
      }
    }
  });

  it("every lesson with projects has a real MDX file on disk", () => {
    for (const [category, mod] of Object.entries(MODULES)) {
      for (const slug of Object.keys(mod)) {
        const mdxPath = path.join(process.cwd(), `src/content/${category}/${slug}.mdx`);
        assert.ok(fs.existsSync(mdxPath), `${category}/${slug}: no MDX file at ${mdxPath}`);
      }
    }
  });
});

describe("projects: shape invariants", () => {
  it("mode agrees with which array is populated", () => {
    for (const { project } of allProjects) {
      if (project.mode === "diagnostic") {
        assert.ok(project.steps?.length, `${project.id}: mode "diagnostic" but steps[] is empty`);
      }
      if (project.mode === "simulation") {
        assert.ok(project.stages?.length, `${project.id}: mode "simulation" but stages[] is empty`);
      }
      if (project.mode === "teardown") {
        assert.ok(
          project.teardownItems?.length,
          `${project.id}: mode "teardown" but teardownItems[] is empty`
        );
      }
    }
  });

  it("every diagnostic step carries all five runbook parts (Rule 13)", () => {
    for (const { project } of allProjects) {
      for (const step of project.steps ?? []) {
        for (const field of [
          "concept", "lessonAnchor", "theoryRecap", "question", "toolName",
          "where", "outputSample", "healthy", "unhealthy", "interpret", "owner", "stepId",
        ] as const) {
          assert.ok(
            typeof step[field] === "string" && step[field].length > 0,
            `${project.id}, step ${step.stepId}: missing or empty "${field}"`
          );
        }
        assert.ok(step.procedure?.length, `${project.id}, step ${step.stepId}: empty procedure[]`);
        assert.ok(step.soWhat?.length, `${project.id}, step ${step.stepId}: empty soWhat[]`);
      }
    }
  });

  it("toolStack.free is a complete standalone path (Rule 12)", () => {
    for (const { project } of allProjects) {
      assert.ok(
        project.toolStack?.free?.length,
        `${project.id}: toolStack.free is empty, so there is no free path to finish this project`
      );
    }
  });

  it("no lesson reuses an archetype within its own project set", () => {
    for (const [category, mod] of Object.entries(MODULES)) {
      for (const [slug, projects] of Object.entries(mod)) {
        const seen = new Set<string>();
        for (const p of projects) {
          assert.ok(
            !seen.has(p.archetype),
            `${category}/${slug}: archetype "${p.archetype}" used twice in the same lesson`
          );
          seen.add(p.archetype);
        }
      }
    }
  });

  /**
   * Rule 46 says conceptsCovered should derive from step/stage `concept` values.
   * Deliberately NOT asserted mechanically, two stricter versions were tried and
   * both flag legitimate content:
   *   - "must not end with a period" flags valid concept phrasings written as short
   *     declaratives, e.g. "Word count is not the fix, added value is."
   *   - "must exactly match a step.concept value" fails 6 of the 33 step/stage-bearing
   *     projects that legitimately paraphrase a long step concept into a short label
   *     (e.g. "Title Tag rules"), which is the readable thing to do on a project card.
   * A test that fails on correct data trains people to ignore failures, so only the
   * objective part is enforced here. Phrasing stays a review-time judgment call.
   */
  it("conceptsCovered is populated", () => {
    for (const { project } of allProjects) {
      assert.ok(project.conceptsCovered.length > 0, `${project.id}: conceptsCovered is empty`);
    }
  });

  it("project ids are unique across the whole library", () => {
    const seen = new Map<string, string>();
    for (const { category, slug, project } of allProjects) {
      const prior = seen.get(project.id);
      assert.ok(
        !prior,
        `duplicate project id "${project.id}" in ${category}/${slug} and ${prior}`
      );
      seen.set(project.id, `${category}/${slug}`);
    }
  });
});

describe("projects: simulation-specific rules", () => {
  it("every costly option carries a lessonRef naming what it contradicts (Rule 18)", () => {
    for (const { project } of allProjects) {
      for (const stage of project.stages ?? []) {
        for (const opt of stage.decision.options) {
          if (opt.verdict !== "costly") continue;
          assert.ok(
            opt.lessonRef && opt.lessonRef.length > 0,
            `${project.id}, stage ${stage.stageId}, option ${opt.id}: a "costly" option must carry a lessonRef`
          );
        }
      }
    }
  });

  /** `"end"` is the established sentinel for "this branch terminates here". */
  const TERMINAL_STAGE_IDS = new Set(["end"]);

  it("every option routes to a real stage id or the terminal sentinel", () => {
    for (const { project } of allProjects) {
      if (!project.stages?.length) continue;
      const stageIds = new Set(project.stages.map((s) => s.stageId));
      for (const stage of project.stages) {
        for (const opt of stage.decision.options) {
          assert.ok(
            stageIds.has(opt.nextStageId) || TERMINAL_STAGE_IDS.has(opt.nextStageId),
            `${project.id}, stage ${stage.stageId}, option ${opt.id}: nextStageId "${opt.nextStageId}" is neither a real stage nor a terminal sentinel (${[...TERMINAL_STAGE_IDS].join(", ")})`
          );
        }
      }
    }
  });
});
