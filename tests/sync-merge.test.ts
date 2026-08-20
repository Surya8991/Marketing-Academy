// tests/sync-merge.test.ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mergeSnapshots } from "../src/lib/sync-client";

describe("mergeSnapshots", () => {
  test("newer local wins when local is more recent", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 2000, remote, 1000);
    assert.equal(result.winner, "local");
    assert.deepEqual(result.data, local);
  });

  test("newer remote wins when remote is more recent", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 1000, remote, 2000);
    assert.equal(result.winner, "remote");
    assert.deepEqual(result.data, remote);
  });

  test("no server data yet: local wins unconditionally (owned timestamp)", () => {
    const local = { a: 1 };
    const result = mergeSnapshots(local, 1000, null, null);
    assert.equal(result.winner, "local");
    assert.deepEqual(result.data, local);
  });

  test("equal timestamps: local wins (stable, avoids flapping)", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 1000, remote, 1000);
    assert.equal(result.winner, "local");
  });

  // --- ownership guard (a null local timestamp = "not owned by this user") ---

  test("cross-user: stale timestamp from another user is ignored, remote wins even when older", () => {
    // User A left a NEWER timestamp behind on this shared browser; user B
    // signs in. localUpdatedAtFor(B) returns null because the stored userId
    // is A's, so B's own (older) server row must still win — otherwise A's
    // completions/bookmarks/notes get pushed into B's account.
    const localFromUserA = { ma_completed: ["a/1"] };
    const remoteForUserB = { ma_completed: ["b/1"] };
    const result = mergeSnapshots(localFromUserA, null, remoteForUserB, 1);
    assert.equal(result.winner, "remote");
    assert.deepEqual(result.data, remoteForUserB);
  });

  test("cross-user with no server row: winner is 'none' — never push unowned local data", () => {
    const localFromUserA = { ma_completed: ["a/1"] };
    const result = mergeSnapshots(localFromUserA, null, null, null);
    assert.equal(result.winner, "none");
    assert.deepEqual(result.data, {});
  });

  test("guest with real progress but no timestamp, server row exists: remote wins", () => {
    const guestProgress = { ma_completed: ["seo/keyword-research"] };
    const remote = { ma_completed: ["seo/technical-seo"] };
    const result = mergeSnapshots(guestProgress, null, remote, 5);
    assert.equal(result.winner, "remote");
    assert.deepEqual(result.data, remote);
  });

  test("guest with real progress, no timestamp, no server row: 'none' (nothing auto-pushed)", () => {
    const guestProgress = { ma_completed: ["seo/keyword-research"] };
    const result = mergeSnapshots(guestProgress, null, null, null);
    assert.equal(result.winner, "none");
  });

  test("own fresh timestamp beats an older server row", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 9_000, remote, 8_999);
    assert.equal(result.winner, "local");
    assert.deepEqual(result.data, local);
  });
});
