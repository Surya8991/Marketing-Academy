import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { normCdf, twoPropP, sampleSizePerArm } from "@/lib/lab-math";

describe("lab-math", () => {
  it("normCdf matches known values", () => {
    assert.ok(Math.abs(normCdf(0) - 0.5) < 1e-7);
    assert.ok(Math.abs(normCdf(1.959964) - 0.975) < 1e-6);
    assert.ok(Math.abs(normCdf(-1.959964) - 0.025) < 1e-6);
  });

  it("twoPropP: identical rates give p = 1, a clear gap gives a small p", () => {
    assert.ok(Math.abs(twoPropP(40, 1000, 40, 1000) - 1) < 1e-6);
    // 4.0% vs 4.4% on 40,000 each: z ~ 2.82, p ~ 0.0048
    const p = twoPropP(1600, 40000, 1760, 40000);
    assert.ok(p > 0.004 && p < 0.006, String(p));
  });

  it("sampleSizePerArm: 4% baseline, 10% lift needs ~39.5k per variant", () => {
    const n = sampleSizePerArm(0.04, 0.1);
    assert.ok(n > 39000 && n < 40000, String(n));
    assert.ok(sampleSizePerArm(0.04, 0.2) < n, "bigger lift needs fewer visitors");
  });
});
