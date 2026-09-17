import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { users, progress } from "@/server/db/schema";
import { isCronAuthorized } from "@/lib/cron-auth";
import { daysAgoKey } from "@/lib/cron-dates";
import { sendMail } from "@/lib/email/transport";
import { streakReminderEmail } from "@/lib/email/templates/streak-reminder";
import { buildUnsubscribeToken } from "@/lib/email/unsubscribe-token";
import type { EngagementState } from "@/lib/engagement";

const BASE_URL = "https://marketing-academy-roan.vercel.app";

/**
 * IMPROVEMENT_PLAN #28. Fires once per lapsing streak: `lastActiveDay` in
 * the user's synced snapshot equals yesterday (naturally self-limiting, the
 * day after, "yesterday" advances but lastActiveDay doesn't move until they
 * act again, so this condition is only ever true for one day per lapse).
 * Scheduled daily, evening UTC (see vercel.json) so "tonight" reads true for
 * most timezones without storing one per user.
 */
export async function GET(req: NextRequest) {
  if (!isCronAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const yesterday = daysAgoKey(1);
  const candidates = await db
    .select({ id: users.id, email: users.email, suspended: users.suspended, data: progress.data })
    .from(users)
    .innerJoin(progress, eq(progress.userId, users.id))
    .where(and(eq(users.emailStreakReminder, true), eq(users.suspended, false)));

  let sent = 0;
  for (const row of candidates) {
    let snapshot: Record<string, unknown>;
    try {
      snapshot = JSON.parse(row.data);
    } catch {
      continue;
    }
    const engagement = snapshot["ma_engagement"] as EngagementState | undefined;
    if (!engagement || engagement.streak < 1 || engagement.lastActiveDay !== yesterday) continue;

    const unsubscribeUrl = `${BASE_URL}/api/email/unsubscribe?token=${buildUnsubscribeToken(row.id, "streakReminder")}`;
    const { subject, html, text } = streakReminderEmail({ streak: engagement.streak, unsubscribeUrl });
    const ok = await sendMail({ to: row.email, subject, html, text });
    if (ok) sent++;
  }

  return NextResponse.json({ checked: candidates.length, sent });
}
