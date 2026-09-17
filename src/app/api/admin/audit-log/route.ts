import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { requireSuperAdmin } from "@/auth";
import { db } from "@/server/db/client";
import { adminAuditLog } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";

const LIMIT = 50;

// Superadmin-only, same as the actions it's a record of (IMPROVEMENT_PLAN #30).
export async function GET() {
  const actor = await requireSuperAdmin();
  if (!rateLimit(`admin:audit-log:${actor.id}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const rows = await db.select().from(adminAuditLog).orderBy(desc(adminAuditLog.at)).limit(LIMIT);
  return NextResponse.json({ entries: rows.map((r) => ({ ...r, at: r.at.toISOString() })) });
}
