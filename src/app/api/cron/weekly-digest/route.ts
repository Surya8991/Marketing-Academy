import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { users, progress } from "@/server/db/schema";
import { isCronAuthorized } from "@/lib/cron-auth";
import { daysAgoKey } from "@/lib/cron-dates";
import { sendMail } from "@/lib/email/transport";
import { weeklyDigestEmail } from "@/lib/email/templates/weekly-digest";
import { buildUnsubscribeToken } from "@/lib/email/unsubscribe-token";
import { uniqueLessonCount } from "@/lib/curriculum";
import { COMPLETED_KEY } from "@/lib/progress";
import type { EngagementState } from "@/lib/engagement";

/** IMPROVEMENT_PLAN #28. Runs weekly (vercel.json) — no date-equality gate
 *  needed, every opted-in user gets one every run regardless of activity
 *  level (a quiet week is still worth a digest, unlike the two daily
 *  reminders above which only fire on a specific trigger day). */
export async function GET(req: NextRequest) {
  if (!isCronAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sevenDaysAgoKey = daysAgoKey(7);
  const totalLessons = uniqueLessonCount();
  const candidates = await db
    .select({ id: users.id, email: users.email, data: progress.data })
    .from(users)
    .innerJoin(progress, eq(progress.userId, users.id))
    .where(and(eq(users.emailWeeklyDigest, true), eq(users.suspended, false)));

  let sent = 0;
  for (const row of candidates) {
    let snapshot: Record<string, unknown>;
    try {
      snapshot = JSON.parse(row.data);
    } catch {
      continue;
    }
    const engagement = snapshot["ma_engagement"] as EngagementState | undefined;
    if (!engagement) continue;

    const xpThisWeek = Object.entries(engagement.xpByDay)
      .filter(([day]) => day >= sevenDaysAgoKey)
      .reduce((sum, [, xp]) => sum + xp, 0);
    const lessonsThisWeek = engagement.xpLog.filter(
      (e) => e.action === "complete" && e.ts >= Date.now() - 7 * 24 * 60 * 60 * 1000
    ).length;

    const completed = new Set((snapshot[COMPLETED_KEY] as string[] | undefined) ?? []);
    const overallPct = totalLessons > 0 ? Math.round((completed.size / totalLessons) * 100) : 0;

    const unsubscribeUrl = `https://marketing-academy-roan.vercel.app/api/email/unsubscribe?token=${buildUnsubscribeToken(row.id, "weeklyDigest")}`;
    const { subject, html, text } = weeklyDigestEmail({
      lessonsThisWeek,
      xpThisWeek,
      streak: engagement.streak,
      overallPct,
      unsubscribeUrl,
    });
    const ok = await sendMail({ to: row.email, subject, html, text });
    if (ok) sent++;
  }

  return NextResponse.json({ checked: candidates.length, sent });
}
