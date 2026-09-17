import { env } from "@/lib/env";

/**
 * Vercel automatically sends `Authorization: Bearer <CRON_SECRET>` on any
 * request it makes to a scheduled function, once CRON_SECRET is set in the
 * project's env — this is Vercel's own documented cron-auth mechanism, not
 * something this app invents. Every /api/cron/* route calls this first;
 * with no CRON_SECRET configured, cron sending stays off entirely (same
 * "safe with zero new env vars" guarantee as the rest of the accounts
 * feature — see src/server/db/client.ts's docblock for the precedent).
 */
export function isCronAuthorized(req: Request): boolean {
  if (!env.CRON_SECRET) return false;
  return req.headers.get("authorization") === `Bearer ${env.CRON_SECRET}`;
}
