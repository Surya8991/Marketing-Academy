import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { verifyUnsubscribeToken } from "@/lib/email/unsubscribe-token";
import { rateLimit } from "@/lib/rate-limit";

const CATEGORY_LABELS: Record<string, string> = {
  streakReminder: "streak reminder",
  resumeLearning: "resume-learning",
  weeklyDigest: "weekly digest",
};

const CATEGORY_COLUMN = {
  streakReminder: "emailStreakReminder",
  resumeLearning: "emailResumeLearning",
  weeklyDigest: "emailWeeklyDigest",
} as const;

function page(title: string, body: string): NextResponse {
  return new NextResponse(
    `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title>
      <style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:80px auto;padding:0 20px;text-align:center;color:#0a0a0a;}
      a{color:#6366f1;}</style></head>
      <body><h1 style="font-size:1.5rem;">${title}</h1><p>${body}</p>
      <p><a href="https://marketing-academy-roan.vercel.app">&larr; Back to Marketing Academy</a></p></body></html>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

// Public and intentionally so — a one-click unsubscribe from an email client
// has no session to check. Token-verified instead (see unsubscribe-token.ts).
// No auth() call here is a deliberate design choice, not an oversight.
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  if (!rateLimit(`unsubscribe:${req.headers.get("x-forwarded-for") ?? "unknown"}`, 20, 60_000)) {
    return page("Too many requests", "Please try again in a minute.");
  }

  const verified = verifyUnsubscribeToken(token);
  if (!verified) return page("Invalid link", "This unsubscribe link is invalid or has expired.");

  const column = CATEGORY_COLUMN[verified.category];
  await db.update(users).set({ [column]: false }).where(eq(users.id, verified.userId));

  return page("Unsubscribed", `You won't receive any more ${CATEGORY_LABELS[verified.category]} emails. You can re-enable this any time in Settings.`);
}
