import { NextRequest, NextResponse } from "next/server";
import { count, desc, like, or } from "drizzle-orm";
import { requireAdmin, isSuperAdminEmail } from "@/auth";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";

const PAGE_SIZE = 25;

// Read-only for both admin and superadmin (mutations live in [id]/route.ts,
// gated requireSuperAdmin), see IMPROVEMENT_PLAN #30's access model.
export async function GET(req: NextRequest) {
  const admin = await requireAdmin();
  if (!rateLimit(`admin:users:list:${admin.id}`, 60, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim().slice(0, 200) ?? "";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const where = q ? or(like(users.email, `%${q}%`), like(users.name, `%${q}%`)) : undefined;

  const [rows, [totalRow]] = await Promise.all([
    db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        suspended: users.suspended,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(where)
      .orderBy(desc(users.createdAt))
      .limit(PAGE_SIZE)
      .offset((page - 1) * PAGE_SIZE),
    db.select({ n: count() }).from(users).where(where),
  ]);

  return NextResponse.json({
    users: rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
      isSuperAdmin: isSuperAdminEmail(r.email),
    })),
    total: totalRow?.n ?? 0,
    page,
    pageSize: PAGE_SIZE,
  });
}
