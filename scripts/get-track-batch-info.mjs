#!/usr/bin/env node
/**
 * get-track-batch-info.mjs
 *
 * PROJECTS_PLAN.md Stage 8.3a follow-up (AGENTS.md Rule 56): replaces the
 * manual `grep`/`node -e` digging that Session 76 did by hand to figure out
 * which lessons in a track still need projects, and what tier they're
 * mechanically assigned. Run this FIRST for any new track, then feed its
 * output straight into subagent prompts.
 *
 * What it does:
 *   1. Reads tracks.ts, finds the named track, lists its lesson refs.
 *   2. Cross-references src/lib/projects-assignment.ts for level/band/
 *      cappedTierPair (Stage 8.2b's already-computed data, never re-derive
 *      it by hand).
 *   3. Cross-references src/lib/projects/{category}.ts (one file per
 *      category referenced) to detect which lessons ALREADY have projects,
 *      so they're excluded automatically instead of by manual memory.
 *   4. Splits the remaining lessons into batches (default size 2, per Rule
 *      56's finding that 4-lessons-per-agent caused context-compounding
 *      cost blowup) and prints ready-to-paste per-batch tables.
 *
 * Usage:
 *   node --import tsx scripts/get-track-batch-info.mjs <track-slug> [--category-only=seo] [--batch-size=2]
 *
 * Example (this is exactly what Stage 8.3a's next session needs):
 *   node --import tsx scripts/get-track-batch-info.mjs on-page-seo-mastery --category-only=seo
 *   node --import tsx scripts/get-track-batch-info.mjs off-page-seo-mastery --category-only=seo
 *   node --import tsx scripts/get-track-batch-info.mjs ai-search-optimization --category-only=seo
 *
 * Full playbook (this script is step 1.1): PROJECTS_AUTHORING_GUIDE.md.
 * Next steps after this one: paste each batch into an agent prompt (guide
 * section 2), then scripts/merge-projects-batch.mjs, then
 * scripts/audit-projects.mjs.
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TRACKS_FILE = path.join(ROOT, "src/lib/tracks.ts");
const ASSIGNMENT_FILE = path.join(ROOT, "src/lib/projects-assignment.ts");

const args = process.argv.slice(2);
const trackSlug = args.find((a) => !a.startsWith("--"));
const categoryOnly = args.find((a) => a.startsWith("--category-only="))?.split("=")[1] ?? null;
const batchSize = Number(args.find((a) => a.startsWith("--batch-size="))?.split("=")[1] ?? 2);

if (!trackSlug) {
  console.error("Usage: node --import tsx scripts/get-track-batch-info.mjs <track-slug> [--category-only=seo] [--batch-size=2]");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Find the track and its lesson list.
// ---------------------------------------------------------------------------
const tracksSrc = readFileSync(TRACKS_FILE, "utf8");
const trackRe = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"[\s\S]*?lessons:\s*\[([\s\S]*?)\n    \],\s*\n  \},/g;
let track = null;
let m;
while ((m = trackRe.exec(tracksSrc))) {
  if (m[1] === trackSlug) {
    track = { slug: m[1], title: m[2], lessonsBlock: m[3] };
    break;
  }
}
if (!track) {
  console.error(`Track "${trackSlug}" not found in tracks.ts. Check the slug.`);
  process.exit(1);
}

const lessonRe = /\{ category: "([^"]+)", slug: "([^"]+)", title: "([^"]+)"/g;
let lessons = [];
let lm;
while ((lm = lessonRe.exec(track.lessonsBlock))) {
  lessons.push({ category: lm[1], slug: lm[2], title: lm[3] });
}
if (categoryOnly) lessons = lessons.filter((l) => l.category === categoryOnly);

// ---------------------------------------------------------------------------
// 2. Cross-reference projects-assignment.ts for tier data.
// ---------------------------------------------------------------------------
const assignmentUrl = pathToFileURL(ASSIGNMENT_FILE).href;
const { PROJECT_ASSIGNMENT } = await import(assignmentUrl);

// ---------------------------------------------------------------------------
// 3. Cross-reference existing src/lib/projects/{category}.ts files to find
//    which lessons already have projects.
// ---------------------------------------------------------------------------
const alreadyDoneByCategory = {};
for (const cat of new Set(lessons.map((l) => l.category))) {
  const file = path.join(ROOT, `src/lib/projects/${cat}.ts`);
  if (!existsSync(file)) {
    alreadyDoneByCategory[cat] = new Set();
    continue;
  }
  const src = readFileSync(file, "utf8");
  const keys = [...src.matchAll(/^\s{2}"([a-z0-9-]+)":\s*\[/gm)].map((x) => x[1]);
  alreadyDoneByCategory[cat] = new Set(keys);
}

// ---------------------------------------------------------------------------
// 4. Build the remaining-lesson list with tier data, split into batches.
// ---------------------------------------------------------------------------
const remaining = [];
const done = [];
for (const l of lessons) {
  const key = `${l.category}/${l.slug}`;
  const assignment = PROJECT_ASSIGNMENT[key];
  const alreadyDone = alreadyDoneByCategory[l.category]?.has(l.slug) ?? false;
  const entry = {
    ...l,
    mdxPath: `src/content/${l.category}/${l.slug}.mdx`,
    level: assignment?.level ?? "UNKNOWN",
    cappedTierPair: assignment?.cappedTierPair ?? ["mini", "mini"],
    override: assignment?.override ?? null,
  };
  if (alreadyDone) done.push(entry);
  else remaining.push(entry);
}

console.log(`\n=== ${track.title} (${track.slug}) ===`);
console.log(`Total lessons in track${categoryOnly ? ` (${categoryOnly}-category only)` : ""}: ${lessons.length}`);
console.log(`Already have projects: ${done.length} (${done.map((d) => d.slug).join(", ") || "none"})`);
console.log(`Remaining: ${remaining.length}\n`);

if (remaining.length === 0) {
  console.log("Nothing to do, every lesson in scope already has projects.");
  process.exit(0);
}

const batches = [];
for (let i = 0; i < remaining.length; i += batchSize) batches.push(remaining.slice(i, i + batchSize));

batches.forEach((batch, i) => {
  const label = String.fromCharCode(65 + i); // A, B, C, ...
  console.log(`--- Batch ${label} (${batch.length} lessons) ---`);
  batch.forEach((l) => {
    console.log(`  ${l.slug}`);
    console.log(`    category: ${l.category}   level: ${l.level}   tier pair: [${l.cappedTierPair.join(", ")}]`);
    console.log(`    mdx: ${l.mdxPath}`);
    if (l.override) console.log(`    note: ${l.override}`);
  });
  console.log("");
});

console.log(`${batches.length} batch(es) of up to ${batchSize} lessons each. Paste each batch's lesson list directly into that batch's agent prompt.`);
