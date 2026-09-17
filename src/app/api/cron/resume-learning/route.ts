import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { users, progress } from "@/server/db/schema";
import { isCronAuthorized } from "@/lib/cron-auth";
import { daysAgoKey } from "@/lib/cron-dates";
import { sendMail } from "@/lib/email/transport";
import { resumeLearningEmail } from "@/lib/email/templates/resume-learning";
import { buildUnsubscribeToken } from "@/lib/email/unsubscribe-token";
import { getLesson } from "@/lib/curriculum";
import type { EngagementState } from "@/lib/engagement";

/**
 * IMPROVEMENT_PLAN #28. Fires once, exactly 3 days after `lastActiveDay`
 * (same self-limiting date-equality trick as streak-reminder, not a 3-7 day
 * range, a range would re-send once per day for 5 days, which is the
 * nagging behavior the design explicitly wants to avoid).
 */
export async function GET(req: NextRequest) {
  if (!isCronAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const threeDaysAgo = daysAgoKey(3);
  const candidates = await db
    .select({ id: users.id, email: users.email, data: progress.data })
    .from(users)
    .innerJoin(progress, eq(progress.userId, users.id))
    .where(and(eq(users.emailResumeLearning, true), eq(users.suspended, false)));

  let sent = 0;
  for (const row of candidates) {
    let snapshot: Record<string, unknown>;
    try {
      snapshot = JSON.parse(row.data);
    } catch {
      continue;
    }
    const engagement = snapshot["ma_engagement"] as EngagementState | undefined;
    if (!engagement || engagement.lastActiveDay !== threeDaysAgo) continue;

    const lastComplete = [...engagement.xpLog].reverse().find((e) => e.action === "complete");
    if (!lastComplete) continue;
    const [category, slug] = lastComplete.id.split("/");
    if (!category || !slug) continue;
    const lesson = getLesson(category, slug);
    if (!lesson) continue;

    const unsubscribeUrl = `https://marketing-academy-roan.vercel.app/api/email/unsubscribe?token=${buildUnsubscribeToken(row.id, "resumeLearning")}`;
    const { subject, html, text } = resumeLearningEmail({
      lessonTitle: lesson.title,
      lessonUrl: `/learn/${category}/${slug}`,
      unsubscribeUrl,
    });
    const ok = await sendMail({ to: row.email, subject, html, text });
    if (ok) sent++;
  }

  return NextResponse.json({ checked: candidates.length, sent });
}
