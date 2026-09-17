import { count, gte, sql } from "drizzle-orm";
import { db } from "@/server/db/client";
import { users, progress, adminAuditLog } from "@/server/db/schema";

export type AdminStats = {
  totalUsers: number;
  newUsersLast7Days: number;
  newUsersLast30Days: number;
  suspendedUsers: number;
  usersWithProgress: number;
  roleBreakdown: { role: string; count: number }[];
  recentAuditLogCount: number;
};

/** Shared by the /admin dashboard page (server-rendered, no client fetch
 *  needed for first paint) and GET /api/admin/stats (for client refresh). */
export async function getAdminStats(): Promise<AdminStats> {
  const now = Date.now();
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const [[totalRow], [newLast7], [newLast30], [suspendedRow], [progressRow], roleBreakdown, [auditRow]] =
    await Promise.all([
      db.select({ n: count() }).from(users),
      db.select({ n: count() }).from(users).where(gte(users.createdAt, sevenDaysAgo)),
      db.select({ n: count() }).from(users).where(gte(users.createdAt, thirtyDaysAgo)),
      db.select({ n: count() }).from(users).where(sql`${users.suspended} = 1`),
      db.select({ n: count() }).from(progress),
      db.select({ role: users.role, n: count() }).from(users).groupBy(users.role),
      db.select({ n: count() }).from(adminAuditLog),
    ]);

  return {
    totalUsers: totalRow?.n ?? 0,
    newUsersLast7Days: newLast7?.n ?? 0,
    newUsersLast30Days: newLast30?.n ?? 0,
    suspendedUsers: suspendedRow?.n ?? 0,
    usersWithProgress: progressRow?.n ?? 0,
    roleBreakdown: roleBreakdown.map((r) => ({ role: r.role, count: r.n })),
    recentAuditLogCount: auditRow?.n ?? 0,
  };
}
