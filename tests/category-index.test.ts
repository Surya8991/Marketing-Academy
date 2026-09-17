/**
 * Drift guard for the standalone slim category index (IMPROVEMENT_PLAN #5,
 * AGENTS.md Rule 41). `src/lib/category-index.ts` is a hand-written literal that
 * must NOT import the full `CATEGORIES` (doing so ships ~148 KB of curriculum to
 * every route via Nav). Because it's decoupled, it can drift — this test asserts
 * it stays byte-for-byte in sync with the values derived from `CATEGORIES`.
 *
 * If this fails after a curriculum change, update the literal in
 * `src/lib/category-index.ts` to match — do NOT "fix" it by changing the literal
 * back to `CATEGORIES.map(...)`, which reintroduces the bundle regression.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { CATEGORIES } from "@/lib/curriculum";
import { CATEGORY_INDEX } from "@/lib/category-index";

describe("category-index (slim index drift guard)", () => {
  it("has one entry per category, in the same order", () => {
    assert.equal(CATEGORY_INDEX.length, CATEGORIES.length);
    assert.deepEqual(
      CATEGORY_INDEX.map((c) => c.slug),
      CATEGORIES.map((c) => c.slug)
    );
  });

  it("every entry matches the derived slim values exactly", () => {
    const derived = CATEGORIES.map((c) => ({
      slug: c.slug,
      title: c.title,
      emoji: c.emoji,
      lessonCount: c.lessons.length,
    }));
    assert.deepEqual(CATEGORY_INDEX, derived);
  });
});
