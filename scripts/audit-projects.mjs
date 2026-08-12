#!/usr/bin/env node
/**
 * audit-projects.mjs
 *
 * AGENTS.md Rule 56 follow-up: generalizes the one-off structural audit
 * Session 76 wrote just for src/lib/projects/seo.ts into a reusable script
 * for any category, run right after merge-projects-batch.mjs and before
 * `npm run build`. Checks the things a `tsc` pass cannot catch, because
 * they're runtime-shape/content rules, not type errors:
 *
 *   - lessonAnchor resolves to a REAL heading in that lesson's MDX
 *   - companyId resolves to a real src/lib/case-companies.ts entry
 *   - toolName resolves to a real src/lib/tools-directory.ts entry
 *     (Session 76's actual finding: 4 projects used invented placeholder
 *     strings instead of a real cataloged tool, see AGENTS.md Rule 55)
 *   - mode "diagnostic" has steps[], mode "teardown" has teardownItems[]
 *   - every diagnostic step has all 5 runbook parts (AGENTS.md/Rule 13)
 *   - no lesson repeats an archetype within its own project pair
 *
 * Usage:
 *   node --import tsx scripts/audit-projects.mjs <category> [--lessons=slug1,slug2,...]
 *
 * Without --lessons, audits every lesson currently in that category's file.
 * With --lessons, scopes to just the given slugs (use this right after a
 * merge to check only the lessons you just added, not the whole file).
 *
 * Example:
 *   node --import tsx scripts/audit-projects.mjs seo --lessons=search-intent,image-seo-visual-search
 *
 * Full playbook (this script is step 1.4): PROJECTS_AUTHORING_GUIDE.md.
 * Prior step: scripts/merge-projects-batch.mjs. Next step: the standard
 * tsc/lint/test/build verify (guide section 1.5).
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const category = args.find((a) => !a.startsWith("--"));
const lessonsArg = args.find((a) => a.startsWith("--lessons="))?.split("=")[1];
const scopeLessons = lessonsArg ? lessonsArg.split(",") : null;

if (!category) {
  console.error("Usage: node --import tsx scripts/audit-projects.mjs <category> [--lessons=slug1,slug2,...]");
  process.exit(1);
}

const projectsFile = path.join(ROOT, `src/lib/projects/${category}.ts`);
if (!existsSync(projectsFile)) {
  console.error(`${projectsFile} doesn't exist.`);
  process.exit(1);
}

const projectsSrc = readFileSync(projectsFile, "utf8");
const toolsSrc = readFileSync(path.join(ROOT, "src/lib/tools-directory.ts"), "utf8");
const companiesSrc = readFileSync(path.join(ROOT, "src/lib/case-companies.ts"), "utf8");

const toolNames = new Set([...toolsSrc.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]));
const companyIds = new Set([...companiesSrc.matchAll(/id: "([^"]+)",/g)].map((m) => m[1]));

// Discover all lesson keys in the file, then scope down if --lessons given.
const allKeys = [...projectsSrc.matchAll(/^  "([a-z0-9-]+)":\s*\[/gm)].map((m) => m[1]);
const targetSlugs = scopeLessons ? allKeys.filter((k) => scopeLessons.includes(k)) : allKeys;

if (scopeLessons) {
  const missing = scopeLessons.filter((s) => !allKeys.includes(s));
  if (missing.length) console.warn(`Warning: --lessons named slugs not found in ${category}.ts: ${missing.join(", ")}`);
}

function headingIdsFor(slug) {
  const mdxPath = path.join(ROOT, `src/content/${category}/${slug}.mdx`);
  if (!existsSync(mdxPath)) return null;
  const mdx = readFileSync(mdxPath, "utf8");
  const headings = [...mdx.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => m[1].trim());
  return new Set(
    headings.map((h) =>
      h.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-")
    )
  );
}

const issues = [];
let projectCount = 0;

for (const slug of targetSlugs) {
  const re = new RegExp(`  "${slug}": \\[([\\s\\S]*?)\\n  \\],\\n`);
  const m = projectsSrc.match(re);
  if (!m) {
    issues.push(`${slug}: could not isolate its array body (regex mismatch, check file formatting)`);
    continue;
  }
  const body = m[1];
  const headingIds = headingIdsFor(slug);
  if (headingIds === null) issues.push(`${slug}: no MDX file found at src/content/${category}/${slug}.mdx`);

  const projectStarts = [...body.matchAll(/\n    \{\n      id: "([^"]+)"/g)];
  projectCount += projectStarts.length;

  const archetypesInLesson = [];

  for (let i = 0; i < projectStarts.length; i++) {
    const id = projectStarts[i][1];
    const start = projectStarts[i].index;
    const end = i + 1 < projectStarts.length ? projectStarts[i + 1].index : body.length;
    const proj = body.slice(start, end);

    const companyMatch = proj.match(/companyId: "([^"]+)"/);
    if (!companyMatch) issues.push(`${id}: missing companyId`);
    else if (!companyIds.has(companyMatch[1])) issues.push(`${id}: companyId "${companyMatch[1]}" NOT in case-companies.ts`);

    const archetypeMatch = proj.match(/archetype: "([^"]+)"/);
    if (archetypeMatch) archetypesInLesson.push(archetypeMatch[1]);

    for (const tm of proj.matchAll(/toolName: "([^"]+)"/g)) {
      if (!toolNames.has(tm[1])) issues.push(`${id}: toolName "${tm[1]}" NOT in tools-directory.ts`);
    }

    if (headingIds) {
      for (const am of proj.matchAll(/lessonAnchor: "([^"]+)"/g)) {
        const anchor = am[1].replace(/^#/, "");
        if (!headingIds.has(anchor)) issues.push(`${id}: lessonAnchor "${anchor}" NOT a real heading in ${slug}.mdx`);
      }
    }

    const toolStackMatch = proj.match(/toolStack: \{([\s\S]*?)\n      \},/);
    if (toolStackMatch) {
      const freeMatch = toolStackMatch[1].match(/free: \[([\s\S]*?)\],\n\s*paid:/);
      if (freeMatch && freeMatch[1].trim().length < 10) issues.push(`${id}: toolStack.free looks empty`);
    } else {
      issues.push(`${id}: no toolStack found`);
    }

    const modeMatch = proj.match(/mode: "([^"]+)"/);
    if (modeMatch) {
      const mode = modeMatch[1];
      if (mode === "diagnostic" && !proj.includes("steps: [")) issues.push(`${id}: mode diagnostic but no steps[]`);
      if (mode === "teardown" && !proj.includes("teardownItems: [")) issues.push(`${id}: mode teardown but no teardownItems[]`);
    } else {
      issues.push(`${id}: missing mode field`);
    }

    if (proj.includes("steps: [")) {
      const requiredFields = ["concept:", "lessonAnchor:", "theoryRecap:", "question:", "toolName:", "where:", "procedure:", "outputSample:", "healthy:", "unhealthy:", "interpret:", "soWhat:", "owner:"];
      const stepBlocks = proj.split(/\n\s+\{\n\s+stepId:/).slice(1);
      for (const sb of stepBlocks) {
        for (const f of requiredFields) {
          if (!sb.includes(f)) issues.push(`${id}: a step is missing field "${f}"`);
        }
      }
    }
  }

  if (archetypesInLesson.length === 2 && archetypesInLesson[0] === archetypesInLesson[1]) {
    issues.push(`${slug}: both projects use archetype "${archetypesInLesson[0]}" — Rule 4 (section 7) forbids reusing an archetype within one lesson's own pair`);
  }
}

console.log(`Audited ${projectCount} project(s) across ${targetSlugs.length} lesson(s) in ${category}.ts.\n`);
if (issues.length === 0) {
  console.log("NO STRUCTURAL ISSUES FOUND.");
} else {
  console.log(`${issues.length} ISSUE(S):`);
  issues.forEach((i) => console.log(" - " + i));
  process.exitCode = 1;
}
