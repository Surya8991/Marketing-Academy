#!/usr/bin/env node
/**
 * merge-quiz-questions.mjs
 *
 * PROJECTS_PLAN.md Stage 10.1: expand every lesson's quiz from 4 to 5
 * questions. src/lib/quizzes.ts is ONE large file (unlike the projects
 * layer's per-category files), so parallel authoring agents can't edit it
 * directly without write conflicts. Agents instead write scratch files
 * exporting a flat Record<string, Quiz> (one new 5th question per lesson
 * key), and this script inserts each one into the real array in quizzes.ts
 * by finding that key's `[ ... ]` block via bracket-depth counting (the
 * same safe technique fix-lessonmeta-quotes.mjs used) and splicing the new
 * question object in just before the closing `]`.
 *
 * Refuses (does not modify the file) if:
 *   - the key doesn't exist in quizzes.ts
 *   - the key's array already has 5+ questions (idempotent safety, so a
 *     re-run or an overlapping batch never double-inserts)
 *
 * Usage:
 *   node --import tsx scripts/merge-quiz-questions.mjs <scratchA.ts> [<scratchB.ts> ...]
 *
 * Each scratch file must be:
 *   import type { Quiz } from "@/lib/quizzes";
 *   export const NEW_QUESTIONS: Record<string, Quiz> = {
 *     "category/slug": { question: "...", options: [...], correct: N, explanation: "..." },
 *     ...
 *   };
 */
import { readFileSync, writeFileSync, copyFileSync, mkdtempSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const QUIZ_FILE = path.join(ROOT, "src/lib/quizzes.ts");

const scratchPaths = process.argv.slice(2);
if (scratchPaths.length === 0) {
  console.error("Usage: node --import tsx scripts/merge-quiz-questions.mjs <scratchA.ts> [<scratchB.ts> ...]");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Load every scratch file's NEW_QUESTIONS map.
// ---------------------------------------------------------------------------
const allNew = {};
for (const p of scratchPaths) {
  const abs = path.resolve(p);
  const mod = await import(pathToFileURL(abs).href);
  const map = mod.NEW_QUESTIONS;
  if (!map || typeof map !== "object") {
    console.error(`${p}: no NEW_QUESTIONS export found, skipping.`);
    continue;
  }
  const keys = Object.keys(map);
  console.log(`${path.basename(p)}: ${keys.length} question(s) — ${keys.join(", ")}`);
  for (const [k, v] of Object.entries(map)) {
    if (allNew[k]) {
      console.error(`DUPLICATE key "${k}" across scratch files — refusing to merge. Fix the source batches.`);
      process.exit(1);
    }
    allNew[k] = v;
  }
}

// ---------------------------------------------------------------------------
// 2. Backup quizzes.ts outside the project tree before editing.
// ---------------------------------------------------------------------------
const backupDir = mkdtempSync(path.join(os.tmpdir(), "quiz-merge-backup-"));
const backupPath = path.join(backupDir, "quizzes.ts.bak");
copyFileSync(QUIZ_FILE, backupPath);
console.log(`\nBackup written to: ${backupPath}`);

// ---------------------------------------------------------------------------
// 3. For each key, find its array in quizzes.ts and splice in the new
//    question object just before the closing `]`.
// ---------------------------------------------------------------------------
let src = readFileSync(QUIZ_FILE, "utf8");
let inserted = 0;
let skipped = [];

function serializeQuestion(q, indent = "    ") {
  const optionsStr = q.options.map((o) => `${indent}    ${JSON.stringify(o)},`).join("\n");
  return (
    `${indent}{\n` +
    `${indent}  question: ${JSON.stringify(q.question)},\n` +
    `${indent}  options: [\n${optionsStr}\n${indent}  ],\n` +
    `${indent}  correct: ${q.correct},\n` +
    `${indent}  explanation: ${JSON.stringify(q.explanation)},\n` +
    `${indent}},`
  );
}

for (const [key, question] of Object.entries(allNew)) {
  const marker = `  "${key}": [`;
  const startIdx = src.indexOf(marker);
  if (startIdx === -1) {
    skipped.push(`${key}: NOT FOUND in quizzes.ts`);
    continue;
  }
  // Bracket-depth count from the `[` at the end of the marker to its match.
  const openBracketIdx = startIdx + marker.length - 1;
  let depth = 0;
  let closeIdx = -1;
  for (let i = openBracketIdx; i < src.length; i++) {
    const ch = src[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        closeIdx = i;
        break;
      }
    }
  }
  if (closeIdx === -1) {
    skipped.push(`${key}: could not find closing bracket`);
    continue;
  }
  const arrayBody = src.slice(openBracketIdx + 1, closeIdx);
  const existingCount = (arrayBody.match(/\bquestion:\s*"/g) || []).length;
  if (existingCount >= 5) {
    skipped.push(`${key}: already has ${existingCount} questions, refusing to double-insert`);
    continue;
  }

  // Strip trailing spaces/tabs on the line right before the closing `]`
  // (the existing 2-space indent), but keep the newline, so the new
  // question slots in cleanly with a single blank-free line between it and
  // the previous question, then a fresh 2-space indent before `]`.
  let before = src.slice(0, closeIdx).replace(/[ \t]+$/, "");
  // Some existing arrays' last item lacks a trailing comma (it was the last
  // element before this script ran). Add one if the last non-whitespace
  // char is `}` without a following `,`, or the insertion produces a
  // syntax error (two object literals with no separator).
  if (/\}\s*$/.test(before) && !/\},\s*$/.test(before)) {
    before = before.replace(/\}(\s*)$/, "},$1");
  }
  const newBlock = serializeQuestion(question) + "\n  ";
  src = before + newBlock + src.slice(closeIdx);
  inserted++;
}

if (skipped.length > 0) {
  console.log(`\nSkipped ${skipped.length} key(s):`);
  skipped.forEach((s) => console.log(`  ${s}`));
}

if (inserted === 0) {
  console.log("\nNothing inserted, no changes written.");
  process.exit(skipped.length > 0 ? 1 : 0);
}

writeFileSync(QUIZ_FILE, src, "utf8");
console.log(`\nInserted ${inserted} new question(s) into ${QUIZ_FILE}.`);
console.log("Next: npx tsc --noEmit, npm run lint, npm test, npm run build");
