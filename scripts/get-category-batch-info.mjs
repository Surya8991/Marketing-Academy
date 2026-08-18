#!/usr/bin/env node
/**
 * get-category-batch-info.mjs
 *
 * PROJECTS_PLAN.md Stage 9.3 (the "remaining 402 non-track lessons") sibling
 * to get-track-batch-info.mjs. That script reads tracks.ts and only covers
 * lessons that belong to one of the 24 tracks. Stage 9.3's lessons are, by
 * definition, lessons NOT reachable via any track's own batch runs, so this
 * script instead reads curriculum.ts directly for one whole CATEGORY and
 * lists every lesson in it that still has zero projects, regardless of
 * track membership.
 *
 * Usage:
 *   node --import tsx scripts/get-category-batch-info.mjs <category-slug> [--batch-size=2]
 *
 * Example:
 *   node --import tsx scripts/get-category-batch-info.mjs events-experiential
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CURRICULUM_FILE = path.join(ROOT, "src/lib/curriculum.ts");
const ASSIGNMENT_FILE = path.join(ROOT, "src/lib/projects-assignment.ts");

const args = process.argv.slice(2);
const categorySlug = args.find((a) => !a.startsWith("--"));
const batchSize = Number(args.find((a) => a.startsWith("--batch-size="))?.split("=")[1] ?? 2);

if (!categorySlug) {
  console.error("Usage: node --import tsx scripts/get-category-batch-info.mjs <category-slug> [--batch-size=2]");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Find the category and its lesson list in curriculum.ts.
// ---------------------------------------------------------------------------
const curriculumSrc = readFileSync(CURRICULUM_FILE, "utf8");
const catRe = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"[\s\S]*?lessons:\s*\[([\s\S]*?)\n    \],\s*\n  \},/g;
let category = null;
let m;
while ((m = catRe.exec(curriculumSrc))) {
  if (m[1] === categorySlug) {
    category = { slug: m[1], title: m[2], lessonsBlock: m[3] };
    break;
  }
}
if (!category) {
  console.error(`Category "${categorySlug}" not found in curriculum.ts. Check the slug.`);
  process.exit(1);
}

const lessonRe = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*level:\s*"([^"]+)"/g;
const lessons = [];
let lm;
while ((lm = lessonRe.exec(category.lessonsBlock))) {
  lessons.push({ category: categorySlug, slug: lm[1], title: lm[2], level: lm[3] });
}

// ---------------------------------------------------------------------------
// 2. Cross-reference projects-assignment.ts for tier data (may not have an
//    entry if this category was added after the last compute-project-
//    assignment.mjs run — fall back to a mini/mini default in that case).
// ---------------------------------------------------------------------------
let PROJECT_ASSIGNMENT = {};
if (existsSync(ASSIGNMENT_FILE)) {
  const assignmentUrl = pathToFileURL(ASSIGNMENT_FILE).href;
  ({ PROJECT_ASSIGNMENT } = await import(assignmentUrl));
}

// ---------------------------------------------------------------------------
// 3. Cross-reference the existing src/lib/projects/{category}.ts file to
//    find which lessons already have projects.
// ---------------------------------------------------------------------------
const projFile = path.join(ROOT, `src/lib/projects/${categorySlug}.ts`);
let alreadyDone = new Set();
if (existsSync(projFile)) {
  const src = readFileSync(projFile, "utf8");
  const keys = [...src.matchAll(/^\s{2}"([a-z0-9-]+)":\s*\[/gm)].map((x) => x[1]);
  alreadyDone = new Set(keys);
}

// ---------------------------------------------------------------------------
// 4. Build the remaining-lesson list with tier data, split into batches.
// ---------------------------------------------------------------------------
const remaining = [];
const done = [];
for (const l of lessons) {
  const key = `${l.category}/${l.slug}`;
  const assignment = PROJECT_ASSIGNMENT[key];
  const entry = {
    ...l,
    mdxPath: `src/content/${l.category}/${l.slug}.mdx`,
    cappedTierPair: assignment?.cappedTierPair ?? ["mini", "mini"],
    override: assignment ? null : "No projects-assignment.ts entry, defaulted to [mini, mini]",
  };
  if (alreadyDone.has(l.slug)) done.push(entry);
  else remaining.push(entry);
}

console.log(`\n=== ${category.title} (${category.slug}) ===`);
console.log(`Total lessons in category: ${lessons.length}`);
console.log(`Already have projects: ${done.length} (${done.map((d) => d.slug).join(", ") || "none"})`);
console.log(`Remaining: ${remaining.length}\n`);

if (remaining.length === 0) {
  console.log("Nothing to do, every lesson in this category already has projects.");
  process.exit(0);
}

const batches = [];
for (let i = 0; i < remaining.length; i += batchSize) batches.push(remaining.slice(i, i + batchSize));

batches.forEach((batch, i) => {
  const label = String.fromCharCode(65 + i);
  console.log(`--- Batch ${label} (${batch.length} lessons, category ${categorySlug}) ---`);
  batch.forEach((l) => {
    console.log(`  ${l.slug}`);
    console.log(`    category: ${l.category}   level: ${l.level}   tier pair: [${l.cappedTierPair.join(", ")}]`);
    console.log(`    mdx: ${l.mdxPath}`);
    if (l.override) console.log(`    note: ${l.override}`);
  });
  console.log("");
});

console.log(`${batches.length} batch(es) of up to ${batchSize} lessons each.`);
console.log(`Paste each batch's lesson list into that batch's agent prompt (PROJECTS_AUTHORING_GUIDE.md section 2).`);
console.log(`Then: node --import tsx scripts/merge-projects-batch.mjs ${categorySlug} <its scratch files...>`);
