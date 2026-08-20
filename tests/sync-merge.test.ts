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

  test("no server data yet: local wins unconditionally", () => {
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
});
