/**
 * Stage 3b.2: Tier 1 data validation over curriculum, quizzes, and roster.
 * Turns AGENTS.md rules into something enforced rather than aspirational.
 *
 * Uses Node's built-in test runner (node --test). No framework needed.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { CATEGORIES, flatLessons, uniqueLessonCount } from "@/lib/curriculum";
import { QUIZZES } from "@/lib/quizzes";

// ---------------------------------------------------------------------------
// Curriculum invariants
// ---------------------------------------------------------------------------

describe("curriculum", () => {
  const allLessons = flatLessons();

  it("CATEGORIES is non-empty", () => {
    assert.ok(CATEGORIES.length > 0);
  });

  it("every category has a slug, title, emoji, and at least one lesson", () => {
    for (const cat of CATEGORIES) {
      assert.ok(cat.slug, `missing slug`);
      assert.ok(cat.title, `missing title for ${cat.slug}`);
      assert.ok(cat.emoji, `missing emoji for ${cat.slug}`);
      assert.ok(cat.lessons.length > 0, `${cat.slug} has 0 lessons`);
    }
  });

  it("no duplicate category slugs", () => {
    const slugs = CATEGORIES.map((c) => c.slug);
    assert.equal(slugs.length, new Set(slugs).size, "duplicate category slugs");
  });

  it("no duplicate lesson slugs within a category", () => {
    for (const cat of CATEGORIES) {
      const slugs = cat.lessons.map((l) => l.slug);
      assert.equal(
        slugs.length,
        new Set(slugs).size,
        `duplicate lesson slug in ${cat.slug}`,
      );
    }
  });

  it("every lesson has a valid level", () => {
    const valid = new Set(["Beginner", "Intermediate", "Advanced"]);
    for (const l of allLessons) {
      assert.ok(
        valid.has(l.level),
        `${l.categorySlug}/${l.slug} has invalid level "${l.level}"`,
      );
    }
  });

  it("uniqueLessonCount matches unique MDX files on disk", () => {
    const mdxFiles = new Set<string>();
    for (const cat of CATEGORIES) {
      for (const l of cat.lessons) {
        const srcCat = l.sourceCategory ?? cat.slug;
        mdxFiles.add(`${srcCat}/${l.slug}`);
      }
    }
    assert.equal(uniqueLessonCount(), mdxFiles.size);
  });

  it("every lesson has a corresponding MDX file on disk", () => {
    for (const cat of CATEGORIES) {
      for (const l of cat.lessons) {
        const srcCat = l.sourceCategory ?? cat.slug;
        const filePath = path.join(
          process.cwd(),
          "src",
          "content",
          srcCat,
          `${l.slug}.mdx`,
        );
        assert.ok(
          fs.existsSync(filePath),
          `missing MDX file: ${filePath} (registered as ${cat.slug}/${l.slug})`,
        );
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Quiz invariants
// ---------------------------------------------------------------------------

describe("quizzes", () => {
  const allLessons = flatLessons();

  it("every registered lesson has a quiz entry", () => {
    for (const l of allLessons) {
      const srcCat = l.sourceCategory ?? l.categorySlug;
      const key = `${srcCat}/${l.slug}`;
      assert.ok(
        QUIZZES[key] && QUIZZES[key].length > 0,
        `no quiz for ${key}`,
      );
    }
  });

  it("every quiz entry maps to a registered lesson (no orphan quizzes)", () => {
    const validKeys = new Set(
      allLessons.map((l) => {
        const srcCat = l.sourceCategory ?? l.categorySlug;
        return `${srcCat}/${l.slug}`;
      }),
    );
    for (const key of Object.keys(QUIZZES)) {
      assert.ok(validKeys.has(key), `orphan quiz: ${key}`);
    }
  });

  it("correct index is within bounds for every question", () => {
    for (const [key, questions] of Object.entries(QUIZZES)) {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        assert.ok(
          q.correct >= 0 && q.correct < q.options.length,
          `${key} Q${i + 1}: correct=${q.correct} but only ${q.options.length} options`,
        );
      }
    }
  });

  it("every question has 2-6 options", () => {
    for (const [key, questions] of Object.entries(QUIZZES)) {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        assert.ok(
          q.options.length >= 2 && q.options.length <= 6,
          `${key} Q${i + 1}: ${q.options.length} options (expected 2-6)`,
        );
      }
    }
  });

  it("no empty question text or option text", () => {
    for (const [key, questions] of Object.entries(QUIZZES)) {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        assert.ok(q.question.trim(), `${key} Q${i + 1}: empty question`);
        for (let j = 0; j < q.options.length; j++) {
          assert.ok(
            q.options[j].trim(),
            `${key} Q${i + 1} option ${j}: empty`,
          );
        }
      }
    }
  });
});
