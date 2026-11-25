/**
 * SEO/AEO data invariants (docs/SEO_AEO_GEO_FIX_PLAN_2026-11-20.md).
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { LESSON_DATES } from "@/lib/lesson-dates";
import { parseFaq } from "@/lib/faq";
import { fitTitle, clip } from "@/lib/site";

const CONTENT = path.join(process.cwd(), "src", "content");
const mdxIds = fs
  .readdirSync(CONTENT)
  .flatMap((c) => fs.readdirSync(path.join(CONTENT, c)).filter((f) => f.endsWith(".mdx")).map((f) => `${c}/${f.slice(0, -4)}`));

describe("glossary", () => {
  it("every glossary lesson link points at a real lesson MDX file", () => {
    const ids = new Set(mdxIds);
    const bad = GLOSSARY_TERMS.flatMap((t) => (t.lessons ?? []).filter((id) => !ids.has(id)).map((id) => `${t.slug} -> ${id}`));
    assert.deepEqual(bad, []);
  });
});

describe("lesson dates", () => {
  it("every lesson has a [published, updated] date pair (re-run scripts/lesson-dates.mjs after adding lessons)", () => {
    const missing = mdxIds.filter((id) => !LESSON_DATES[id]);
    assert.deepEqual(missing, []);
    for (const [pub, upd] of Object.values(LESSON_DATES)) assert.ok(pub <= upd);
  });
});

describe("lesson FAQs", () => {
  it("every FAQ section parses into question/answer pairs for FAQPage JSON-LD", () => {
    const bad = mdxIds.filter((id) => {
      const s = fs.readFileSync(path.join(CONTENT, `${id}.mdx`), "utf8");
      return s.includes("## Frequently Asked Questions") && parseFaq(s).length < 2;
    });
    assert.deepEqual(bad, []);
  });

  it("parseFaq stops at the next heading or JSX block", () => {
    const md = "## Frequently Asked Questions\n\n### What is X?\n\nX is **a thing**.\n\n### Why?\n\nBecause.\n\n<ResourceList resources={[]} />\n";
    assert.deepEqual(parseFaq(md), [
      { q: "What is X?", a: "X is a thing." },
      { q: "Why?", a: "Because." },
    ]);
  });
});

describe("titles and descriptions", () => {
  it("fitTitle drops the brand suffix only when it would pass 60 characters", () => {
    assert.equal(fitTitle("Short title"), "Short title");
    assert.deepEqual(fitTitle("x".repeat(45)), { absolute: "x".repeat(45) });
  });

  it("clip trims to 160 characters at a word boundary", () => {
    const out = clip("word ".repeat(50));
    assert.ok(out.length <= 160 && out.endsWith("word…"));
  });
});
