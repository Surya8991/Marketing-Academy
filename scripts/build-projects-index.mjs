#!/usr/bin/env node
/**
 * build-projects-index.mjs
 *
 * Regenerates src/lib/projects-index.ts, the SLIM CARD PROJECTION the
 * /projects hub client bundle reads (see that file's header comment and
 * AGENTS.md Rule 41). This script is what SHOULD be run any time a
 * src/lib/projects/*.ts category module is added or edited; the checked-in
 * projects-index.ts must never be hand-edited once this script is the
 * source of truth for it.
 *
 * ---------------------------------------------------------------------
 * HOW THIS IS MEANT TO WORK, END STATE
 * ---------------------------------------------------------------------
 * 1. Glob every src/lib/projects/*.ts file EXCEPT types.ts (that file has
 *    no runtime exports, only the type system every other module imports).
 * 2. For each file, dynamically `import()` it. Node cannot import .ts files
 *    natively, this script must be run with a TypeScript loader registered,
 *    exactly like this project's tests do it (see package.json's
 *    "test": "node --import tsx --test tests/*.test.ts"):
 *
 *      node --import tsx scripts/build-projects-index.mjs
 *
 *    `tsx` is already a devDependency (package.json), no new dependency is
 *    needed. `--import tsx` registers a loader hook so `import()` can
 *    resolve `.ts` extensions and strip types on the fly, in both CJS and
 *    ESM projects. This package.json has no `"type": "module"`, but *.mjs
 *    files are always treated as ESM by Node regardless of that field, so
 *    top-level `import`/dynamic `import()` both work here unmodified.
 *
 * 3. Each category module is expected to export exactly one
 *    `Record<string, Project[]>` (lesson slug -> that lesson's projects),
 *    named by convention `<CATEGORY_SLUG_AS_UPPER_SNAKE_CASE>_PROJECTS`,
 *    e.g. `src/lib/projects/paid-ads.ts` exports `PAID_ADS_PROJECTS`.
 *    This script tries that exact name first, and falls back to scanning
 *    every named export for the first plain object whose values are all
 *    arrays (see `findProjectsExport` below), so a category module that
 *    doesn't follow the naming convention still gets picked up rather than
 *    silently producing zero cards.
 *
 * 4. For every Project in every lesson's array, extract the slim
 *    `ProjectCardData` fields (id, tier, archetype, mode, title,
 *    timeMinutes, companyId, conceptsCovered) plus the category/lessonSlug
 *    from the module/key it came from. `lessonTitle` is looked up from
 *    `src/lib/curriculum.ts` (safe to import here, this is a Node build
 *    script, not a client bundle, Rule 41 only governs what ships to the
 *    browser).
 *
 * 5. Write the result as src/lib/projects-index.ts, a plain data file with
 *    the same header comment this script produces below, so a reader who
 *    opens the generated file without reading this script still sees the
 *    "generated, don't hand-edit" warning.
 *
 * ---------------------------------------------------------------------
 * CURRENT STATE, Phase 1
 * ---------------------------------------------------------------------
 * Only one category module exists right now, src/lib/projects/paid-ads.ts,
 * with one Project in it. Steps 1-5 above are fully implemented and this
 * script actually runs end-to-end against that one module as a working
 * proof; nothing here is a stub. It has NOT been run against a large,
 * multi-category `src/lib/projects/*.ts` glob yet, because that glob does
 * not exist yet. When more category modules land, re-run this script and
 * spot-check the diff before committing it, the naming-convention fallback
 * in step 3 is a heuristic, not a guarantee.
 */

import { readdir } from "node:fs/promises";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = path.resolve(__dirname, "../src/lib/projects");
const OUTPUT_FILE = path.resolve(__dirname, "../src/lib/projects-index.ts");
const CURRICULUM_FILE = path.resolve(__dirname, "../src/lib/curriculum.ts");

/** "paid-ads" -> "PAID_ADS_PROJECTS" */
function expectedExportName(categorySlug) {
  return `${categorySlug.toUpperCase().replace(/-/g, "_")}_PROJECTS`;
}

/**
 * Falls back to scanning every named export of a module for the first one
 * that looks like `Record<string, Project[]>`: a plain object whose own
 * values are all arrays. Used when a module doesn't follow the
 * `<SLUG>_PROJECTS` naming convention, so a category module never silently
 * contributes zero cards just because of a naming mismatch.
 */
function findProjectsExport(moduleExports, preferredName) {
  if (moduleExports[preferredName]) return moduleExports[preferredName];

  for (const [exportName, value] of Object.entries(moduleExports)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.values(value).every((v) => Array.isArray(v))
    ) {
      console.warn(
        `  (no "${preferredName}" export found, using "${exportName}" instead, ` +
          `matched by shape)`
      );
      return value;
    }
  }
  return null;
}

/**
 * curriculum.ts exports CATEGORIES: { slug, lessons: { slug, title }[] }[].
 * Built as a lazy lookup map, category -> lessonSlug -> title, so every
 * card gets a real lessonTitle instead of falling back to the slug.
 */
async function loadLessonTitleMap() {
  const mod = await import(pathToFileURL(CURRICULUM_FILE).href);
  const categories = mod.CATEGORIES ?? [];
  const map = new Map();
  for (const cat of categories) {
    for (const lesson of cat.lessons ?? []) {
      map.set(`${cat.slug}/${lesson.slug}`, lesson.title);
    }
  }
  return map;
}

async function main() {
  const files = (await readdir(PROJECTS_DIR)).filter(
    (f) => f.endsWith(".ts") && f !== "types.ts"
  );

  if (files.length === 0) {
    console.error(`No category modules found in ${PROJECTS_DIR} (besides types.ts). Nothing to do.`);
    process.exit(1);
  }

  const lessonTitles = await loadLessonTitleMap();
  const cards = [];

  for (const file of files) {
    const categorySlug = file.replace(/\.ts$/, "");
    const fullPath = path.join(PROJECTS_DIR, file);
    console.log(`Reading ${file}...`);

    const mod = await import(pathToFileURL(fullPath).href);
    const projectsBySlug = findProjectsExport(mod, expectedExportName(categorySlug));

    if (!projectsBySlug) {
      console.warn(`  Skipped: no Record<string, Project[]> export found in ${file}.`);
      continue;
    }

    for (const [lessonSlug, projects] of Object.entries(projectsBySlug)) {
      const lessonTitle = lessonTitles.get(`${categorySlug}/${lessonSlug}`) ?? lessonSlug;

      for (const project of projects) {
        cards.push({
          id: project.id,
          category: categorySlug,
          lessonSlug,
          lessonTitle,
          tier: project.tier,
          archetype: project.archetype,
          mode: project.mode,
          title: project.title,
          timeMinutes: project.timeMinutes,
          companyId: project.companyId,
          conceptsCovered: project.conceptsCovered,
        });
      }
    }
  }

  console.log(`Extracted ${cards.length} project card(s) from ${files.length} module(s).`);

  const output = `/**
 * GENERATED by scripts/build-projects-index.mjs — do not hand-edit once the
 * generator script exists and per-category modules are populated. Currently
 * hand-written as a Phase 1 scaffold with one example entry (see
 * PROJECTS_PLAN.md section 5.1 and AGENTS.md Rule 37/41).
 *
 * This is a SLIM CARD PROJECTION, not the full Project data. The /projects
 * hub client bundle reads only this file, never a src/lib/projects/*.ts
 * category module directly (AGENTS.md Rule 41: never ship a large data
 * module, including long strings like outputSample/dashboard, to a
 * "use client" file that every hub visitor downloads). Full Project objects
 * are dynamically imported one category at a time, on demand, by
 * ProjectDrawer.tsx when a learner opens a specific card.
 *
 * Regenerate with: node --import tsx scripts/build-projects-index.mjs
 */

import type { ProjectTier, Archetype, ProjectMode } from "@/lib/projects/types";

export type ProjectCardData = {
  id: string;
  category: string;
  lessonSlug: string;
  lessonTitle: string;
  tier: ProjectTier;
  archetype: Archetype;
  mode: ProjectMode;
  title: string;
  timeMinutes: number;
  companyId: string;
  conceptsCovered: string[];
};

export const PROJECTS_INDEX: ProjectCardData[] = ${JSON.stringify(cards, null, 2)};
`;

  writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Wrote ${cards.length} card(s) to ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

main().catch((err) => {
  console.error("build-projects-index failed:", err);
  process.exit(1);
});
