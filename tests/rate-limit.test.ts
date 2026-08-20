import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { rateLimit } from "../src/lib/rate-limit";

describe("rateLimit", () => {
  test("allows up to max calls in the window, then blocks", () => {
    const key = `test-${Date.now()}`;
    for (let i = 0; i < 3; i++) {
      assert.equal(rateLimit(key, 3, 60_000), true, `call ${i} should be allowed`);
    }
    assert.equal(rateLimit(key, 3, 60_000), false, "4th call should be blocked");
  });

  test("different keys have independent buckets", () => {
    const a = `a-${Date.now()}`;
    const b = `b-${Date.now()}`;
    assert.equal(rateLimit(a, 1, 60_000), true);
    assert.equal(rateLimit(a, 1, 60_000), false);
    assert.equal(rateLimit(b, 1, 60_000), true, "different key must not share a's bucket");
  });
});
