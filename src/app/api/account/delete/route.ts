import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { auth, isAdminUser } from "@/auth";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";
import { clearSessionCookie } from "@/lib/session-cookie";

export async function POST() {
  const session = await auth();
  const user = session?.user as { id?: string; email?: string; role?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`self-delete-account:${user.id}`, 3, 60_000)) {
    return NextResponse.json({ error: "Too many attempts — slow down" }, { status: 429 });
  }
  if (isAdminUser({ email: user.email ?? null, role: user.role ?? null })) {
    return NextResponse.json({ error: "Admin accounts can't self-delete" }, { status: 400 });
  }

  // Cascading FKs handle accounts/sessions/progress (all reference users.id
  // with onDelete: "cascade" — see src/server/db/schema.ts).
  await db.delete(users).where(eq(users.id, user.id));

  const jar = await cookies();
  clearSessionCookie(jar);

  return NextResponse.json({ ok: true });
}
