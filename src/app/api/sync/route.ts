import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { progress } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";
// auth() directly, not requireUser(): requireUser() redirects unauthenticated
// callers rather than returning null, which is correct for a page but wrong
// for an API route consumed by fetch() — a redirect response confuses a
// JSON client. Route handlers call auth() and return a real 401 instead.
import { auth } from "@/auth";

async function getUserId(): Promise<string | null> {
  const session = await auth();
  return (session?.user as { id?: string } | undefined)?.id ?? null;
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`sync:get:${userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const [row] = await db.select().from(progress).where(eq(progress.userId, userId));
  if (!row) return NextResponse.json({ data: null, updatedAt: null });
  try {
    return NextResponse.json({ data: JSON.parse(row.data), updatedAt: row.updatedAt.getTime() });
  } catch {
    return NextResponse.json({ error: "Corrupt sync data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`sync:post:${userId}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const bodyStr = JSON.stringify(body);
  // Same 512KB guard the old sync-proxy had — a realistic snapshot is a few KB.
  if (bodyStr.length > 512 * 1024) {
    return NextResponse.json({ error: "Payload too large (max 512KB)" }, { status: 413 });
  }

  const now = new Date();
  await db
    .insert(progress)
    .values({ userId, data: bodyStr, updatedAt: now })
    .onConflictDoUpdate({ target: progress.userId, set: { data: bodyStr, updatedAt: now } });

  return NextResponse.json({ ok: true });
}
