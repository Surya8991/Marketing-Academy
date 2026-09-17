import { requireSuperAdmin } from "@/auth";
import PageMasthead from "@/components/PageMasthead";
import AdminUsersClient from "./AdminUsersClient";

export const metadata = { title: "User Management", robots: { index: false, follow: false } };

export default async function AdminUsersPage() {
  await requireSuperAdmin();

  return (
    <>
      <PageMasthead left="Marketing Academy · Admin" right="User management" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <h1 className="font-display font-semibold text-3xl mb-3">User management</h1>
        <p className="text-[var(--muted-foreground)] mb-8 font-ui-sans">
          Search, promote/demote, suspend, or delete accounts. Every action here is logged below.
        </p>
        <AdminUsersClient />
      </div>
    </>
  );
}
