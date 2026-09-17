import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireSuperAdmin, isSuperAdminEmail } from "@/auth";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";
import { logAdminAction, type AdminAction } from "@/lib/admin-audit";
import { sendMail } from "@/lib/email/transport";
import { accountDeletedEmail } from "@/lib/email/templates/account-deleted";

type Props = { params: Promise<{ id: string }> };

const VALID_ACTIONS: AdminAction[] = ["promote", "demote", "suspend", "unsuspend"];

async function loadTarget(id: string) {
  const [row] = await db.select().from(users).where(eq(users.id, id));
  return row ?? null;
}

// Mutations only — gated requireSuperAdmin() (IMPROVEMENT_PLAN #30's access
// model: plain `admin` gets read-only /api/admin/users, never this route).
export async function PATCH(req: NextRequest, { params }: Props) {
  const actor = await requireSuperAdmin();
  const { id } = await params;
  if (!rateLimit(`admin:users:patch:${actor.id}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as { action?: string };
  const action = body.action as AdminAction | undefined;
  if (!action || !VALID_ACTIONS.includes(action)) {
    return NextResponse.json({ error: `action must be one of ${VALID_ACTIONS.join(", ")}` }, { status: 400 });
  }

  const target = await loadTarget(id);
  if (!target) return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (target.id === actor.id) {
    return NextResponse.json({ error: "Can't perform admin actions on your own account" }, { status: 400 });
  }
  // Env-tier accounts are equals — none of them can be demoted, suspended,
  // or (see DELETE below) deleted from inside the app, only via Vercel env.
  if (isSuperAdminEmail(target.email)) {
    return NextResponse.json({ error: "Superadmin accounts can only be changed via Vercel env" }, { status: 400 });
  }

  if (action === "promote") await db.update(users).set({ role: "admin" }).where(eq(users.id, id));
  if (action === "demote") await db.update(users).set({ role: "user" }).where(eq(users.id, id));
  if (action === "suspend") await db.update(users).set({ suspended: true }).where(eq(users.id, id));
  if (action === "unsuspend") await db.update(users).set({ suspended: false }).where(eq(users.id, id));

  await logAdminAction({
    actorUserId: actor.id,
    actorEmail: actor.email,
    action,
    targetUserId: target.id,
    targetEmail: target.email,
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const actor = await requireSuperAdmin();
  const { id } = await params;
  if (!rateLimit(`admin:users:delete:${actor.id}`, 10, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const target = await loadTarget(id);
  if (!target) return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (target.id === actor.id) {
    return NextResponse.json({ error: "Use Settings to delete your own account" }, { status: 400 });
  }
  if (isSuperAdminEmail(target.email)) {
    return NextResponse.json({ error: "Superadmin accounts can only be changed via Vercel env" }, { status: 400 });
  }

  // Cascading FKs handle accounts/sessions/progress, same as self-delete
  // (src/server/db/schema.ts, onDelete: "cascade").
  await db.delete(users).where(eq(users.id, id));

  await logAdminAction({
    actorUserId: actor.id,
    actorEmail: actor.email,
    action: "delete",
    targetUserId: target.id,
    targetEmail: target.email,
  });

  void sendMail({ to: target.email, ...accountDeletedEmail() });

  return NextResponse.json({ ok: true });
}
