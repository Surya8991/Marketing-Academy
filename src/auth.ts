import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { accounts, sessions, users, verificationTokens } from "@/server/db/schema";
import { env, adminEmails } from "@/lib/env";

/** True if a user counts as an admin via the persisted `role` column or the
 *  ADMIN_EMAILS env var (bootstrap + failsafe — see events.signIn below). */
export function isAdminUser(u: { email: string | null; role?: string | null }): boolean {
  return u.role === "admin" || adminEmails.includes((u.email ?? "").toLowerCase());
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: "database", maxAge: 60 * 60 * 24 * 7 },
  trustHost: true,
  providers: [
    ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
      ? [Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })]
      : []),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        (session.user as { id?: string }).id = user.id;
        (session.user as { isAdmin?: boolean }).isAdmin = isAdminUser(user as { email: string | null; role?: string | null });
      }
      return session;
    },
  },
  events: {
    // Auto-promote: any ADMIN_EMAILS address gets role='admin' persisted on
    // its next real sign-in. Same pattern as the Email-Automator sister
    // project — ADMIN_EMAILS is a bootstrap mechanism, `role` is the
    // primary source (checked by isAdminUser() above).
    async signIn({ user }) {
      if (!user?.id || !user.email) return;
      if (!adminEmails.includes(user.email.toLowerCase())) return;
      try {
        await db.update(users).set({ role: "admin" }).where(eq(users.id, user.id));
      } catch {
        // Non-fatal — isAdminUser()'s env fallback still grants admin
        // access this session even if the persist failed.
      }
    },
  },
  pages: { signIn: "/login" },
});

export async function requireUser() {
  const session = await auth();
  const id = (session?.user as { id?: string } | undefined)?.id;
  if (!session?.user || !id) redirect("/login");
  return session.user as { id: string; email: string; name?: string; image?: string; isAdmin?: boolean };
}

export async function requireAdmin() {
  const u = await requireUser();
  if (!u.isAdmin) redirect("/");
  return u;
}
