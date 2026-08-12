/**
 * Stage 3b.4: Tier 2 regression tests.
 *
 * These tests enforce structural invariants that, if broken, re-open
 * previously-fixed integrity holes. They cannot be tested at runtime
 * because the bugs are silent (wrong key names, missing checks, etc.).
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { CATEGORIES, uniqueLessonCount, flatLessons } from "@/lib/curriculum";

// ---------------------------------------------------------------------------
// 3b.4a: No 4th ungated markComplete() call site (AGENTS.md Rule 36)
// ---------------------------------------------------------------------------

describe("markComplete gate invariant (Rule 36)", () => {
  /**
   * Scans source files for `markComplete(` calls. Every call site must be
   * in one of the three allowed files. A 4th file calling markComplete()
   * without a getQuizPassed() check re-opens the completion bypass.
   */
  it("markComplete() is only called from the 3 allowed files", () => {
    const allowed = new Set([
      "src/components/MarkComplete.tsx",
      "src/components/TrackLessonList.tsx",
      "src/components/TrackQuizPageClient.tsx",
    ]);

    const srcDir = path.join(process.cwd(), "src");
    const violations: string[] = [];

    function walk(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
        } else if (/\.(ts|tsx)$/.test(entry.name)) {
          const rel = path.relative(process.cwd(), full).replace(/\\/g, "/");
          // Skip test files and type declarations
          if (rel.startsWith("tests/") || entry.name.endsWith(".d.ts")) continue;
          // Skip the definition file itself
          if (rel === "src/lib/progress.ts") continue;

          const content = fs.readFileSync(full, "utf-8");
          // Match actual calls, not imports or comments
          if (/\bmarkComplete\s*\(/.test(content) && !allowed.has(rel)) {
            violations.push(rel);
          }
        }
      }
    }

    walk(srcDir);

    assert.deepEqual(
      violations,
      [],
      `markComplete() called from unauthorized file(s): ${violations.join(", ")}. ` +
      `See AGENTS.md Rule 36 — every call site must check getQuizPassed() first.`,
    );
  });
});

// ---------------------------------------------------------------------------
// 3b.4b: Achievements are satisfiable (Rule 43)
// ---------------------------------------------------------------------------

describe("achievement satisfiability", () => {
  it("uniqueLessonCount matches the deduped set of writable IDs", () => {
    const writableIds = new Set<string>();
    for (const cat of CATEGORIES) {
      for (const l of cat.lessons) {
        const srcCat = l.sourceCategory ?? cat.slug;
        writableIds.add(`${srcCat}/${l.slug}`);
      }
    }
    assert.equal(
      uniqueLessonCount(),
      writableIds.size,
      `uniqueLessonCount (${uniqueLessonCount()}) !== writable IDs (${writableIds.size})`,
    );
  });

  it("every category can reach 100% completion", () => {
    // For each category, every lesson's canonical ID must be writable.
    // The bug this catches: fundamentals was capped at 27/40 because
    // 13 cross-listed lessons wrote under mental-models/, but completion
    // checked fundamentals/<slug>.
    for (const cat of CATEGORIES) {
      for (const l of cat.lessons) {
        const canonId = `${l.sourceCategory ?? cat.slug}/${l.slug}`;
        // The canonical ID must be a unique, writable key
        assert.ok(
          canonId,
          `${cat.slug}/${l.slug} has no canonical ID`,
        );
      }
    }
  });

  it("flatLessons().length >= uniqueLessonCount() (cross-listings inflate count)", () => {
    assert.ok(
      flatLessons().length >= uniqueLessonCount(),
      `flatLessons ${flatLessons().length} < uniqueLessonCount ${uniqueLessonCount()}`,
    );
  });
});

// ---------------------------------------------------------------------------
// 3b.4c: sourceCategory references valid categories
// ---------------------------------------------------------------------------

describe("sourceCategory references", () => {
  it("every sourceCategory points to a real category slug", () => {
    const validSlugs = new Set(CATEGORIES.map((c) => c.slug));
    for (const cat of CATEGORIES) {
      for (const l of cat.lessons) {
        if (l.sourceCategory) {
          assert.ok(
            validSlugs.has(l.sourceCategory),
            `${cat.slug}/${l.slug} has sourceCategory "${l.sourceCategory}" which is not a valid category`,
          );
        }
      }
    }
  });
});
