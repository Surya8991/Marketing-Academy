import { test, describe, before, beforeEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { PROGRESS_CHANGED_EVENT } from "../src/lib/events";

function installLocalStorage() {
  const store: Record<string, string> = {};
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => { store[k] = v; },
    removeItem: (k: string) => { delete store[k]; },
    get length() { return Object.keys(store).length; },
    key: (i: number) => Object.keys(store)[i] ?? null,
    clear: () => { for (const k of Object.keys(store)) delete store[k]; },
  } as Storage;
}

function installWindow() {
  const listeners: Record<string, ((e: Event) => void)[]> = {};
  (globalThis as unknown as { window: Window }).window = {
    dispatchEvent: (e: Event) => {
      for (const fn of listeners[e.type] ?? []) fn(e);
      return true;
    },
    addEventListener: (type: string, fn: (e: Event) => void) => {
      (listeners[type] ??= []).push(fn);
    },
  } as unknown as Window;
  (globalThis as unknown as { CustomEvent: typeof CustomEvent }).CustomEvent = CustomEvent;
  return listeners;
}

describe("PROGRESS_CHANGED_EVENT fires from every progress-writing function", () => {
  before(() => { installLocalStorage(); installWindow(); });
  beforeEach(() => { localStorage.clear(); });

  test("progress.ts markComplete/markIncomplete", async () => {
    const { markComplete, markIncomplete } = await import("../src/lib/progress.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    markComplete("seo/keyword-research");
    markIncomplete("seo/keyword-research");
    assert.equal(fired, 2);
  });

  test("bookmarks.ts saveBookmarks() fires the event", async () => {
    const { saveBookmarks } = await import("../src/lib/bookmarks.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    saveBookmarks([{ category: "seo", slug: "keyword-research", title: "Keyword Research" }]);
    assert.equal(fired, 1);
  });

  test("notes.ts saveNote() fires the event", async () => {
    const { saveNote } = await import("../src/lib/notes.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    saveNote("seo", "keyword-research", "my note text");
    assert.equal(fired, 1);
  });

  test("engagement.ts addXP() fires once on a real award, not on the dedupe no-op branch", async () => {
    const { addXP } = await import("../src/lib/engagement.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    addXP("complete", "seo/keyword-research"); // first time, real write
    addXP("complete", "seo/keyword-research"); // permanent dedupe, no-op
    assert.equal(fired, 1);
  });

  test("quizzes.ts setQuizPassed()/setTrackQuizPassed() fire the event", async () => {
    const { setQuizPassed, setTrackQuizPassed } = await import("../src/lib/quizzes.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    setQuizPassed("seo", "keyword-research");
    setTrackQuizPassed("technical-seo");
    assert.equal(fired, 2);
  });

  test("projects-progress.ts markProjectComplete/Incomplete + markStepComplete/Incomplete fire the event", async () => {
    const { markProjectComplete, markProjectIncomplete, markStepComplete, markStepIncomplete } =
      await import("../src/lib/projects-progress.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    markProjectComplete("seo/keyword-research-audit");
    markProjectIncomplete("seo/keyword-research-audit");
    markStepComplete("seo/keyword-research-audit#1");
    markStepIncomplete("seo/keyword-research-audit#1");
    assert.equal(fired, 4);
  });

  test("spaced-review.ts recordMiss() fires; recordHit() fires only when it actually mutates the queue", async () => {
    const { recordMiss, recordHit } = await import("../src/lib/spaced-review.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });

    const id = "seo/keyword-research#0";
    recordMiss({
      id,
      category: "seo",
      slug: "keyword-research",
      lessonTitle: "Keyword Research",
      question: "What is a SERP?",
      options: ["A", "B", "C", "D"],
      correct: 0,
      explanation: "explanation",
    });
    assert.equal(fired, 1, "recordMiss should fire once");

    recordHit(id); // real mutation, item is in the queue
    assert.equal(fired, 2, "recordHit should fire when it mutates an existing queue item");

    recordHit("never-missed/lesson#0"); // no-op, id was never recorded as missed
    assert.equal(fired, 2, "recordHit should NOT fire on its no-op branch");
  });

  test("recentlyViewed.ts trackLesson() fires the event", async () => {
    const { trackLesson } = await import("../src/lib/recentlyViewed.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    trackLesson({
      categorySlug: "seo",
      slug: "keyword-research",
      title: "Keyword Research",
      categoryTitle: "SEO",
    });
    assert.equal(fired, 1);
  });
});

/**
 * Fix Round 1 (task reviewer finding): OnboardingModal.tsx, TrackLessonList.tsx,
 * and Quiz.tsx each write a tracked key (ONBOARDED_KEY, GATE_NOTICE_KEY,
 * QUIZ_STORAGE_PREFIX respectively) directly via a raw localStorage.setItem
 * inside a "use client" component's internal event handler (handleGoal/
 * handleSkip, dismissNotice, handleNext) — none of these are exported
 * functions, they only exist as closures reachable through a button click.
 *
 * This codebase's test suite (all pre-existing tests/*.test.ts files) has no
 * React-rendering infrastructure of any kind (no jsdom, no
 * @testing-library/react, confirmed absent from package.json and
 * node_modules) — every existing test either calls a plain exported function
 * (as above) or, for exactly this "verify a call exists inside the right
 * function, in the right file" shape, scans source text the way
 * tests/integrity-regression.test.ts's Rule 36 markComplete() gate check
 * already does (AGENTS.md Rule 47 documents that this plain-text scanning
 * approach is the established, accepted pattern for this class of check in
 * this repo). Adding a new component-rendering test dependency for 3 call
 * sites was judged disproportionate; these tests follow the codebase's own
 * existing precedent instead.
 */
describe("PROGRESS_CHANGED_EVENT: component write sites dispatch alongside their localStorage write", () => {
  function readSrc(relPath: string): string {
    return fs.readFileSync(path.join(process.cwd(), relPath), "utf-8");
  }

  /**
   * Extracts a named function's body (handles `function name(...) { ... }`
   * and `const name = (...) => { ... }` — matching brace-depth aware, so it
   * doesn't stop at the first inner `}` the way a naive regex terminator
   * would (see AGENTS.md Rule 57's empty-array parsing trap for why a
   * terminator-based slice is the wrong tool here).
   */
  function extractFunctionBody(src: string, fnName: string): string {
    const startMatch = src.match(
      new RegExp(`function\\s+${fnName}\\s*\\([^)]*\\)\\s*\\{|const\\s+${fnName}\\s*=\\s*(?:\\([^)]*\\)|[a-zA-Z]+)\\s*(?::[^=]+)?=>\\s*\\{`)
    );
    assert.ok(startMatch, `could not locate function "${fnName}" in source`);
    const startIdx = startMatch!.index! + startMatch![0].length;
    let depth = 1;
    let i = startIdx;
    for (; i < src.length && depth > 0; i++) {
      if (src[i] === "{") depth++;
      else if (src[i] === "}") depth--;
    }
    return src.slice(startIdx, i);
  }

  test("OnboardingModal.tsx: handleGoal() and handleSkip() both dispatch PROGRESS_CHANGED_EVENT after their localStorage.setItem", () => {
    const src = readSrc("src/components/OnboardingModal.tsx");
    assert.match(src, /PROGRESS_CHANGED_EVENT/, "PROGRESS_CHANGED_EVENT is not imported/used at all");

    for (const fn of ["handleGoal", "handleSkip"]) {
      const body = extractFunctionBody(src, fn);
      assert.match(body, /localStorage\.setItem\(STORAGE_KEY,\s*"1"\)/, `${fn} should still write ONBOARDED_KEY`);
      assert.match(
        body,
        /localStorage\.setItem\(STORAGE_KEY,\s*"1"\);\s*window\.dispatchEvent\(new CustomEvent\(PROGRESS_CHANGED_EVENT\)\)/,
        `${fn} should dispatch PROGRESS_CHANGED_EVENT immediately after the successful setItem`
      );
    }
  });

  test("TrackLessonList.tsx: dismissNotice() dispatches PROGRESS_CHANGED_EVENT after its localStorage.setItem", () => {
    const src = readSrc("src/components/TrackLessonList.tsx");
    const body = extractFunctionBody(src, "dismissNotice");
    assert.match(body, /localStorage\.setItem\(GATE_NOTICE_KEY,\s*"1"\)/, "dismissNotice should still write GATE_NOTICE_KEY");
    assert.match(
      body,
      /localStorage\.setItem\(GATE_NOTICE_KEY,\s*"1"\);\s*window\.dispatchEvent\(new CustomEvent\(PROGRESS_CHANGED_EVENT\)\)/,
      "dismissNotice should dispatch PROGRESS_CHANGED_EVENT immediately after the successful setItem"
    );
  });

  test("Quiz.tsx: the finished-quiz localStorage.setItem(quizStorageKey(...)) block dispatches PROGRESS_CHANGED_EVENT", () => {
    const src = readSrc("src/components/Quiz.tsx");
    const body = extractFunctionBody(src, "handleNext");
    assert.match(body, /localStorage\.setItem\(\s*quizStorageKey\(pathname\)/, "handleNext should still persist the finished quiz result under quizStorageKey(pathname)");
    assert.match(
      body,
      /JSON\.stringify\(\{ selections: newSelections, total: totalQuestions \}\)\s*\);\s*window\.dispatchEvent\(new CustomEvent\(PROGRESS_CHANGED_EVENT\)\)/,
      "the quizStorageKey write should dispatch PROGRESS_CHANGED_EVENT immediately after the successful setItem"
    );
  });
});
