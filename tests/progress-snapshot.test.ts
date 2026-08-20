import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  EXPORT_KEYS,
  ALLOWED_KEY_PREFIXES,
  collectAllKeys,
  isAllowedKey,
  restoreAllKeys,
} from "../src/lib/progress-snapshot";
import { PROJECTS_PROGRESS_KEY, REVIEW_QUEUE_KEY } from "../src/lib/events";

describe("progress-snapshot", () => {
  test("EXPORT_KEYS includes the two keys added this session", () => {
    assert.ok(EXPORT_KEYS.includes(PROJECTS_PROGRESS_KEY), "missing PROJECTS_PROGRESS_KEY");
    assert.ok(EXPORT_KEYS.includes(REVIEW_QUEUE_KEY), "missing REVIEW_QUEUE_KEY");
  });

  test("collectAllKeys reads every EXPORT_KEYS entry, null when unset", () => {
    const g = globalThis as unknown as { localStorage: Storage };
    const store: Record<string, string> = {};
    g.localStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
      get length() { return Object.keys(store).length; },
      key: (i: number) => Object.keys(store)[i] ?? null,
      clear: () => { for (const k of Object.keys(store)) delete store[k]; },
    } as Storage;

    store[PROJECTS_PROGRESS_KEY] = JSON.stringify({ completedProjectIds: ["a"], completedStepIds: [] });
    const data = collectAllKeys();
    assert.deepEqual(data[PROJECTS_PROGRESS_KEY], { completedProjectIds: ["a"], completedStepIds: [] });
    assert.equal(data[REVIEW_QUEUE_KEY], null);
  });

  test("isAllowedKey accepts fixed keys and prefixed keys, rejects unknown", () => {
    assert.ok(isAllowedKey(PROJECTS_PROGRESS_KEY));
    assert.ok(isAllowedKey(ALLOWED_KEY_PREFIXES[0] + "seo/keyword-research"));
    assert.equal(isAllowedKey("some_unrelated_key"), false);
  });

  test("restoreAllKeys round-trips through collectAllKeys", () => {
    const g = globalThis as unknown as { localStorage: Storage };
    const store: Record<string, string> = {};
    g.localStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
      get length() { return Object.keys(store).length; },
      key: (i: number) => Object.keys(store)[i] ?? null,
      clear: () => { for (const k of Object.keys(store)) delete store[k]; },
    } as Storage;

    const snapshot = collectAllKeys();
    snapshot[PROJECTS_PROGRESS_KEY] = { completedProjectIds: ["x"], completedStepIds: ["y"] };
    restoreAllKeys(snapshot);
    const roundTripped = collectAllKeys();
    assert.deepEqual(roundTripped[PROJECTS_PROGRESS_KEY], { completedProjectIds: ["x"], completedStepIds: ["y"] });
  });
});
