#!/usr/bin/env node
/**
 * merge-projects-batch.mjs
 *
 * AGENTS.md Rule 56 follow-up: Session 76 hand-wrote a one-off merge script
 * to concatenate 3 subagents' scratch project files into src/lib/projects/
 * seo.ts. Its first version had a regex that silently failed to strip an
 * `export const BATCH_X = {` wrapper line whenever the source file had a
 * blank line between `import` and `export` (2 of 12 lesson keys ended up
 * missing/misplaced, caught only by grepping the merged key list, not by
 * `tsc`, since a `Record` with a misplaced key is still syntactically
 * valid). This script is that fix, generalized and made reusable so the
 * bug-class doesn't get re-introduced by hand next time.
 *
 * What it does, safely:
 *   1. Reads each scratch batch file, locates its Record body via a plain
 *      indexOf/lastIndexOf on "Project[]> = {" and the final "};" (not a
 *      fragile ^-anchored regex), so leading blank lines can't break it.
 *   2. Refuses to merge a lesson key that already exists in the target
 *      file (prevents silent duplicate/overwrite).
 *   3. Verifies the target file's key count after merging matches
 *      (existing keys) + (sum of new keys across all batch files) exactly.
 *   4. Leaves NO backup/scratch file inside src/lib/projects/ (Session 76's
 *      second bug: a stray .bak file there broke the Turbopack build,
 *      because that directory is dynamically globbed). Backups go to the
 *      OS temp dir instead.
 *
 * Usage:
 *   node --import tsx scripts/merge-projects-batch.mjs <category> <scratchFile1> [<scratchFile2> ...]
 *
 * Example:
 *   node --import tsx scripts/merge-projects-batch.mjs seo \
 *     /tmp/batch-a-projects.ts /tmp/batch-b-projects.ts /tmp/batch-c-projects.ts
 */

import { readFileSync, writeFileSync, mkdtempSync, copyFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const [category, ...scratchFiles] = process.argv.slice(2);
if (!category || scratchFiles.length === 0) {
  console.error("Usage: node --import tsx scripts/merge-projects-batch.mjs <category> <scratchFile1> [<scratchFile2> ...]");
  process.exit(1);
}

const targetPath = path.join(ROOT, `src/lib/projects/${category}.ts`);
let target = readFileSync(targetPath, "utf8");

const existingKeys = new Set([...target.matchAll(/^\s{2}"([a-z0-9-]+)":\s*\[/gm)].map((m) => m[1]));

// Backup goes OUTSIDE the project tree, never inside src/lib/projects/
// (Turbopack globs that directory; a stray file there breaks the build).
const backupDir = mkdtempSync(path.join(os.tmpdir(), "projects-merge-backup-"));
const backupPath = path.join(backupDir, `${category}.ts.bak`);
copyFileSync(targetPath, backupPath);
console.log(`Backup written to: ${backupPath}`);

// Strip the final "};" closing the target's Record — re-added at the end.
if (!/\};\s*$/.test(target)) {
  console.error(`${targetPath} doesn't end with "};" as expected, aborting without changes.`);
  process.exit(1);
}
target = target.replace(/\};\s*$/, "");

let newKeysTotal = 0;
let inserts = "";

for (const scratchFile of scratchFiles) {
  const raw = readFileSync(scratchFile, "utf8");

  const openMarker = "Project[]> = {";
  const openIdx = raw.indexOf(openMarker);
  if (openIdx === -1) {
    console.error(`${scratchFile}: couldn't find "${openMarker}", is this a valid batch file?`);
    process.exit(1);
  }
  const bodyStart = openIdx + openMarker.length;

  const closeIdx = raw.lastIndexOf("};");
  if (closeIdx === -1 || closeIdx <= bodyStart) {
    console.error(`${scratchFile}: couldn't find a closing "};" after the Record body.`);
    process.exit(1);
  }

  const body = raw.slice(bodyStart, closeIdx);
  const newKeys = [...body.matchAll(/^\s*"([a-z0-9-]+)":\s*\[/gm)].map((m) => m[1]);

  for (const k of newKeys) {
    if (existingKeys.has(k)) {
      console.error(`REFUSING TO MERGE: lesson key "${k}" (from ${scratchFile}) already exists in ${targetPath}. Resolve manually before re-running.`);
      process.exit(1);
    }
    existingKeys.add(k);
  }

  console.log(`${path.basename(scratchFile)}: ${newKeys.length} lesson key(s) — ${newKeys.join(", ")}`);
  newKeysTotal += newKeys.length;
  inserts += body; // preserved as-is: original indentation + trailing commas intact
}

const merged = target + inserts + "};\n";
writeFileSync(targetPath, merged);

// Verify: final key count == existing (pre-merge) + all new keys.
const finalKeys = [...merged.matchAll(/^\s{2}"([a-z0-9-]+)":\s*\[/gm)].map((m) => m[1]);
const expectedCount = existingKeys.size;
if (finalKeys.length !== expectedCount) {
  console.error(`MISMATCH: expected ${expectedCount} total lesson keys after merge, found ${finalKeys.length}. Restore from backup: ${backupPath}`);
  process.exit(1);
}

console.log(`\nMerged ${newKeysTotal} new lesson key(s) into ${targetPath}.`);
console.log(`Total lesson keys now: ${finalKeys.length}.`);
console.log(`Next: npx tsc --noEmit, npm run lint, npm test, npm run build, then node --import tsx scripts/build-projects-index.mjs`);
