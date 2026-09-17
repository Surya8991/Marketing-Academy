/**
 * Mirrors engagement.ts's localDate()/today()/yesterday() format exactly
 * (`YYYY-MM-DD`) so a cron route's date math matches the `lastActiveDay`
 * values already written to EngagementState. Not exported from engagement.ts
 * itself (those helpers are module-private there), so duplicated here rather
 * than reaching into that module's internals.
 *
 * Known approximation (#28, no per-user timezone stored anywhere in this
 * app): this runs in the CRON JOB'S timezone (UTC on Vercel), not the
 * individual user's. A user near the UTC dateline can see their streak
 * reminder land a few hours off from their own local "today" — acceptable
 * for a best-effort reminder, not worth a timezone-storage feature to fix.
 */
function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function todayKey(): string {
  return dateKey(new Date());
}

export function daysAgoKey(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return dateKey(d);
}
