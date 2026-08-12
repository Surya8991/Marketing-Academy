#!/usr/bin/env node
/**
 * compute-project-assignment.mjs
 *
 * PROJECTS_PLAN.md Stage 8.2b: computes centrality band, tier pair, and
 * track-budget-capped tier pair for every one of the 642 lessons, per the
 * mechanical steps 1-3 and 6 of section 17.6's authoring procedure.
 *
 * What this script does NOT do (deliberately, per 17.6 step 4-5 and 17.4):
 *   - Mode and archetype are chosen by reading what the lesson actually
 *     teaches, not derivable from track-reference counts alone. Those stay
 *     a per-lesson authoring decision made by whoever (or whichever agent)
 *     writes that lesson's projects, using this file's tierPair as the
 *     mechanical input and PROJECTS_PLAN.md 17.4's topic-shape table for
 *     archetype selection.
 *
 * Procedure (PROJECTS_PLAN.md 17.6):
 *   1. Centrality band from track-reference count, with a foundational-slug
 *      fallback (-101 suffix, what-is-/how- prefix) for the 402 lessons in
 *      zero tracks (17.2's Investment Weight table).
 *   2. Cognitive demand read directly from the lesson's `level` field.
 *   3. Tier pair looked up from the 17.3 matrix (level x band).
 *   6. Track budget cap applied per track: max 6 core-tier lessons per
 *      track, and never two consecutive lessons both carrying a core
 *      project (17.5). A demotion is recorded with a reason, never silent.
 *
 * Run with: node --import tsx scripts/compute-project-assignment.mjs
 */

import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CURRICULUM_FILE = path.resolve(__dirname, "../src/lib/curriculum.ts");
const TRACKS_FILE = path.resolve(__dirname, "../src/lib/tracks.ts");
const OUTPUT_FILE = path.resolve(__dirname, "../src/lib/projects-assignment.ts");

/** Foundational-slug fallback pattern (17.2): -101 suffix, what-is-/how- prefix. */
function isFoundationalSlug(slug) {
  return /-101$/.test(slug) || /^what-is-/.test(slug) || /^how-/.test(slug);
}

/** 17.2 Investment Weight table. */
function centralityBand(trackRefCount, slug) {
  if (trackRefCount >= 3 || isFoundationalSlug(slug)) return "hub";
  if (trackRefCount >= 1) return "connector";
  return "leaf";
}

/** 17.3 assignment matrix, level x band -> tier pair. */
const MATRIX = {
  Beginner: { leaf: ["mini", "mini"], connector: ["mini", "core"], hub: ["core", "core"] },
  Intermediate: { leaf: ["mini", "core"], connector: ["mini", "core"], hub: ["core", "core"] },
  Advanced: { leaf: ["mini", "core"], connector: ["core", "core"], hub: ["core", "core-feeds-big"] },
};

async function main() {
  const curriculumMod = await import(pathToFileURL(CURRICULUM_FILE).href);
  const tracksMod = await import(pathToFileURL(TRACKS_FILE).href);
  const CATEGORIES = curriculumMod.CATEGORIES;
  const TRACKS = tracksMod.TRACKS;

  // Every lesson, keyed by its canonical id (sourceCategory ?? category, per
  // AGENTS.md Rule 31/43 -- cross-listed lessons must resolve to one identity).
  const lessons = new Map(); // canonicalId -> { category, slug, level, title }
  for (const cat of CATEGORIES) {
    for (const l of cat.lessons) {
      const sourceCat = l.sourceCategory ?? cat.slug;
      const id = `${sourceCat}/${l.slug}`;
      if (!lessons.has(id)) {
        lessons.set(id, { category: sourceCat, slug: l.slug, level: l.level, title: l.title });
      }
    }
  }

  // Track-reference count per canonical lesson id, and per-track ordered
  // lesson-id lists (for the budget cap pass below).
  const trackRefCount = new Map();
  const trackLessonLists = []; // [{ trackSlug, lessonIds: string[] }]
  for (const track of TRACKS) {
    const ids = [];
    for (const tl of track.lessons) {
      const id = `${tl.category}/${tl.slug}`;
      ids.push(id);
      trackRefCount.set(id, (trackRefCount.get(id) ?? 0) + 1);
    }
    trackLessonLists.push({ trackSlug: track.slug, lessonIds: ids });
  }

  // Steps 1-3: band + raw tier pair for every lesson.
  const assignment = new Map(); // id -> { ...lesson, trackRefCount, band, tierPair, cappedTierPair, override }
  for (const [id, lesson] of lessons) {
    const refCount = trackRefCount.get(id) ?? 0;
    const band = centralityBand(refCount, lesson.slug);
    const tierPair = MATRIX[lesson.level]?.[band] ?? ["mini", "core"];
    assignment.set(id, {
      ...lesson,
      trackRefCount: refCount,
      band,
      tierPair,
      cappedTierPair: [...tierPair],
      override: null,
    });
  }

  // Step 6: track budget cap, applied per track in lesson order.
  // Max 6 core-tier lessons per track; never two consecutive lessons both
  // carrying a core project. "Carrying a core project" = tierPair includes
  // "core" or "core-feeds-big" anywhere.
  function hasCore(tierPair) {
    return tierPair.some((t) => t === "core" || t === "core-feeds-big");
  }
  function demoteToMini(tierPair) {
    // Demote the heavier slot only: core+core -> mini+core, mini+core -> mini+mini,
    // core-feeds-big is preserved (Advanced x Hub's second project stays a track
    // big-project feed even under the cap, since it's synthesized at the track
    // level, not an extra per-lesson core).
    const idx = tierPair.findIndex((t) => t === "core");
    if (idx === -1) return tierPair;
    const next = [...tierPair];
    next[idx] = "mini";
    return next;
  }

  for (const { trackSlug, lessonIds } of trackLessonLists) {
    let coreCount = 0;
    let prevHadCore = false;
    for (const id of lessonIds) {
      const entry = assignment.get(id);
      if (!entry) continue; // lesson not found in curriculum (shouldn't happen, defensive)

      let capped = entry.cappedTierPair;
      let reason = null;

      if (prevHadCore && hasCore(capped)) {
        capped = demoteToMini(capped);
        reason = `Demoted: two consecutive lessons in track "${trackSlug}" would both carry a core project (17.5 cap)`;
      } else if (coreCount >= 6 && hasCore(capped)) {
        capped = demoteToMini(capped);
        reason = `Demoted: track "${trackSlug}" already has 6 core-tier lessons (17.5 cap)`;
      }

      if (reason && !entry.override) {
        entry.cappedTierPair = capped;
        entry.override = reason;
      }

      if (hasCore(entry.cappedTierPair)) coreCount++;
      prevHadCore = hasCore(entry.cappedTierPair);
    }
  }

  // Summary stats for the console + file header.
  const total = assignment.size;
  const bandCounts = { hub: 0, connector: 0, leaf: 0 };
  const overrideCount = [...assignment.values()].filter((e) => e.override).length;
  for (const e of assignment.values()) bandCounts[e.band]++;

  console.log(`Computed assignment for ${total} lessons.`);
  console.log(`  Hub: ${bandCounts.hub}, Connector: ${bandCounts.connector}, Leaf: ${bandCounts.leaf}`);
  console.log(`  Track-budget overrides applied: ${overrideCount}`);

  const entries = [...assignment.entries()].sort(([a], [b]) => a.localeCompare(b));

  const output = `/**
 * GENERATED by scripts/compute-project-assignment.mjs — do not hand-edit.
 * Regenerate with: node --import tsx scripts/compute-project-assignment.mjs
 *
 * PROJECTS_PLAN.md Stage 8.2b: mechanical steps 1-3 and 6 of section 17.6's
 * authoring procedure, computed for all ${total} lessons.
 *
 *   - band: centrality band from track-reference count (17.2), "hub" = >=3
 *     references or a foundational slug (-101/what-is-/how-), "connector" =
 *     1-2 references, "leaf" = 0 references.
 *   - tierPair: raw lookup from the 17.3 matrix (level x band), BEFORE the
 *     track budget cap.
 *   - cappedTierPair: tierPair after the 17.5 track budget cap (max 6 core
 *     lessons per track, never two consecutive). This is what authoring
 *     should actually use.
 *   - override: non-null only when cappedTierPair differs from tierPair,
 *     explains why (17.7: "any project whose tier departs from the matrix
 *     must carry a written justification").
 *
 * "core-feeds-big" in either tier array means: this project is a track big
 * project's synthesis input rather than a second per-lesson core project
 * (17.3's Advanced x Hub cell). See src/lib/track-projects.ts for the
 * TrackBigProject shape that consumes these.
 *
 * Mode and archetype are NOT computed here (17.6 steps 4-5 require reading
 * the actual lesson to judge topic shape, see 17.4's table). Authoring
 * agents/authors use this file's cappedTierPair as their mechanical input.
 *
 * Band counts: hub ${bandCounts.hub}, connector ${bandCounts.connector}, leaf ${bandCounts.leaf}.
 * Track-budget overrides applied: ${overrideCount}.
 */

export type CentralityBand = "hub" | "connector" | "leaf";
export type AssignedTier = "mini" | "core" | "core-feeds-big";

export type ProjectAssignment = {
  category: string;
  slug: string;
  level: string;
  title: string;
  trackRefCount: number;
  band: CentralityBand;
  tierPair: [AssignedTier, AssignedTier];
  cappedTierPair: [AssignedTier, AssignedTier];
  override: string | null;
};

export const PROJECT_ASSIGNMENT: Record<string, ProjectAssignment> = {
${entries
  .map(
    ([id, e]) =>
      `  ${JSON.stringify(id)}: ${JSON.stringify({
        category: e.category,
        slug: e.slug,
        level: e.level,
        title: e.title,
        trackRefCount: e.trackRefCount,
        band: e.band,
        tierPair: e.tierPair,
        cappedTierPair: e.cappedTierPair,
        override: e.override,
      })},`
  )
  .join("\n")}
};
`;

  writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Wrote ${total} entries to ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

main().catch((err) => {
  console.error("compute-project-assignment failed:", err);
  process.exit(1);
});
