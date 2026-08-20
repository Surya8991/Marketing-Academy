import { NextRequest, NextResponse } from "next/server";
import { and, eq, gt } from "drizzle-orm";
import { cookies } from "next/headers";
import { auth } from "@/auth";
import { db } from "@/server/db/client";
import { sessions } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";
import { currentSessionToken } from "@/lib/session-cookie";

function maskToken(token: string): string {
  if (token.length <= 12) return "••••••••";
  return `${token.slice(0, 6)}••••${token.slice(-4)}`;
}

export async function GET() {
  const session = await auth();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`list-sessions:${userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const jar = await cookies();
  const currentToken = currentSessionToken(jar);
  const rows = await db
    .select()
    .from(sessions)
    .where(and(eq(sessions.userId, userId), gt(sessions.expires, new Date())));

  return NextResponse.json({
    sessions: rows
      .map((r) => ({
        tokenPreview: maskToken(r.sessionToken),
        expires: r.expires.toISOString(),
        isCurrent: r.sessionToken === currentToken,
        _sort: r.expires.getTime(),
      }))
      .sort((a, b) => b._sort - a._sort)
      .map(({ _sort: _unused, ...rest }) => rest),
  });
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`revoke-session:${userId}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { tokenPreview } = (await req.json().catch(() => ({}))) as { tokenPreview?: string };
  if (!tokenPreview) return NextResponse.json({ error: "tokenPreview required" }, { status: 400 });

  const jar = await cookies();
  const currentToken = currentSessionToken(jar);
  const rows = await db.select().from(sessions).where(eq(sessions.userId, userId));
  const target = rows.find((r) => maskToken(r.sessionToken) === tokenPreview);
  if (!target) return NextResponse.json({ error: "Session not found" }, { status: 404 });
  if (target.sessionToken === currentToken) {
    return NextResponse.json({ error: "That's your current session — sign out instead" }, { status: 400 });
  }

  await db.delete(sessions).where(eq(sessions.sessionToken, target.sessionToken));
  return NextResponse.json({ ok: true });
}
