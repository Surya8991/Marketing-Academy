/**
 * In-memory sliding-window rate limiter. Per-instance only — on Vercel that
 * means per-Lambda, so a "global" limit is approximate under multi-instance
 * load. Accepted per the design doc's Non-Goals: /api/sync isn't a
 * high-value abuse target the way a login/magic-link endpoint would be, so
 * no Redis dependency is introduced for it.
 */
interface Bucket { hits: number[] }
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const b = buckets.get(key) ?? { hits: [] };
  b.hits = b.hits.filter((t) => t > now - windowMs);
  if (b.hits.length >= max) {
    buckets.set(key, b);
    return false;
  }
  b.hits.push(now);
  buckets.set(key, b);
  if (buckets.size > 2000) {
    for (const [k, v] of buckets) {
      if (v.hits.length === 0 || v.hits[v.hits.length - 1]! < now - windowMs) buckets.delete(k);
    }
  }
  return true;
}
