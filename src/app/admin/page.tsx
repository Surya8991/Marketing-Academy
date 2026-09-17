import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { requireAdmin } from "@/auth";
import { getAdminStats } from "@/lib/admin-stats";
import PageMasthead from "@/components/PageMasthead";
import StatsRow, { type StatTileData } from "@/components/StatsRow";

export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const admin = await requireAdmin();
  const stats = await getAdminStats();

  const roleCount = (role: string) => stats.roleBreakdown.find((r) => r.role === role)?.count ?? 0;

  const tiles: StatTileData[] = [
    { code: "01", value: String(stats.totalUsers), label: "Total users" },
    { code: "02", value: String(stats.newUsersLast7Days), label: "New, last 7 days" },
    { code: "03", value: String(stats.newUsersLast30Days), label: "New, last 30 days" },
    { code: "04", value: String(stats.usersWithProgress), label: "Users with synced progress" },
    { code: "05", value: String(roleCount("admin")), label: "Admins" },
    { code: "06", value: String(stats.suspendedUsers), label: "Suspended" },
    { code: "07", value: String(roleCount("user")), label: "Regular users" },
    { code: "08", value: String(stats.recentAuditLogCount), label: "Audit log entries" },
  ];

  return (
    <>
      <PageMasthead left="Marketing Academy · Admin" right={admin.isSuperAdmin ? "Superadmin" : "Admin"} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <h1 className="font-display font-semibold text-3xl mb-3">Admin dashboard</h1>
        <p className="text-[var(--muted-foreground)] mb-8 font-ui-sans">
          Account and usage overview, from the <code>users</code> and <code>progress</code> tables.
        </p>

        {!admin.isSuperAdmin && (
          <div className="border border-[var(--border)] rounded-xl p-4 mb-8 font-ui-sans text-sm">
            You have <strong>read-only</strong> access. User management (roles, suspending, deleting accounts)
            requires superadmin, which is granted only via Vercel environment variables — not from inside the app.
          </div>
        )}

        <StatsRow stats={tiles} columns={4} className="mb-10" />

        {admin.isSuperAdmin && (
          <Link
            href="/admin/users"
            className="inline-flex items-center gap-1.5 text-sm font-medium bg-[var(--accent)] text-[var(--accent-foreground)] rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Manage users <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </>
  );
}
