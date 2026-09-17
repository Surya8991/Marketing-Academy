import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";

// auth() directly, not requireUser(), same reasoning as /api/sync/route.ts's
// own comment: this is a fetch()-based API client, a redirect would confuse it.
async function getUserId(): Promise<string | null> {
  const session = await auth();
  const user = session?.user as { id?: string; isSuspended?: boolean } | undefined;
  if (user?.isSuspended) return null;
  return user?.id ?? null;
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`email-prefs:get:${userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const [row] = await db
    .select({
      emailStreakReminder: users.emailStreakReminder,
      emailResumeLearning: users.emailResumeLearning,
      emailWeeklyDigest: users.emailWeeklyDigest,
    })
    .from(users)
    .where(eq(users.id, userId));

  return NextResponse.json(row ?? { emailStreakReminder: false, emailResumeLearning: false, emailWeeklyDigest: false });
}

export async function PATCH(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`email-prefs:patch:${userId}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    emailStreakReminder?: boolean;
    emailResumeLearning?: boolean;
    emailWeeklyDigest?: boolean;
  };
  const update: Partial<typeof body> = {};
  if (typeof body.emailStreakReminder === "boolean") update.emailStreakReminder = body.emailStreakReminder;
  if (typeof body.emailResumeLearning === "boolean") update.emailResumeLearning = body.emailResumeLearning;
  if (typeof body.emailWeeklyDigest === "boolean") update.emailWeeklyDigest = body.emailWeeklyDigest;
  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "No valid fields in body" }, { status: 400 });
  }

  await db.update(users).set(update).where(eq(users.id, userId));
  return NextResponse.json({ ok: true });
}
