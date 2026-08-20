import { test, describe, before, beforeEach } from "node:test";
import assert from "node:assert/strict";
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
});
