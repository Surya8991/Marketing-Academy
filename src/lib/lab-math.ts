/** Small stats helpers for the interactive lesson labs (src/components/interactive). */

/** Standard normal CDF (Abramowitz & Stegun 26.2.17, error < 7.5e-8). */
export function normCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z >= 0 ? 1 - p : p;
}

/** Two-sided p-value of a pooled two-proportion z-test. */
export function twoPropP(convA: number, nA: number, convB: number, nB: number): number {
  const pool = (convA + convB) / (nA + nB);
  const se = Math.sqrt(pool * (1 - pool) * (1 / nA + 1 / nB));
  if (se === 0) return 1;
  const z = (convB / nB - convA / nA) / se;
  return 2 * (1 - normCdf(Math.abs(z)));
}

/** Visitors needed per variant to detect a relative lift at 95% confidence and 80% power. */
export function sampleSizePerArm(baseline: number, relLift: number): number {
  const p1 = baseline;
  const p2 = baseline * (1 + relLift);
  const pBar = (p1 + p2) / 2;
  const a = 1.959964 * Math.sqrt(2 * pBar * (1 - pBar));
  const b = 0.841621 * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
  return Math.ceil(((a + b) ** 2) / (p2 - p1) ** 2);
}
