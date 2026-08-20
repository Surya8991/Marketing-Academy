import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import type { Adapter } from "next-auth/adapters";
import { db, getDb, lazyProxy } from "@/server/db/client";
import { accounts, sessions, users, verificationTokens } from "@/server/db/schema";
import { env, adminEmails } from "@/lib/env";

/** True if a user counts as an admin via the persisted `role` column or the
 *  ADMIN_EMAILS env var (bootstrap + failsafe — see events.signIn below). */
export function isAdminUser(u: { email: string | null; role?: string | null }): boolean {
  return u.role === "admin" || adminEmails.includes((u.email ?? "").toLowerCase());
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Lazy: DrizzleAdapter() reads db[entityKind] to pick a dialect, which
  // would force the (eager, throws-if-the-file's-directory-is-missing) libsql
  // client to be constructed at MODULE SCOPE — 500ing every page that imports
  // this file on a fresh checkout. See src/server/db/client.ts's docblock.
  adapter: lazyProxy<Adapter>(() =>
    DrizzleAdapter(getDb(), {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    })
  ),
  session: { strategy: "database", maxAge: 60 * 60 * 24 * 7 },
  trustHost: true,
  providers: [
    ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
      ? [Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })]
      : []),
  ],
  callbacks: {
    // Built explicitly from an allow-list rather than by mutating/deleting
    // fields on the adapter's session row. The database strategy spreads the
    // whole row — including the raw `sessionToken` — into what
    // /api/auth/session returns as JSON, readable by ANY script on the page
    // (an XSS, a compromised third-party snippet), which defeats the point of
    // the cookie being httpOnly. Constructing the payload means a future
    // Auth.js version adding another adapter-internal field can't silently
    // leak it either.
    session({ session, user }) {
      return {
        expires: session.expires,
        user: {
          id: user.id,
          name: session.user?.name ?? user.name ?? null,
          email: session.user?.email ?? user.email ?? null,
          image: session.user?.image ?? user.image ?? null,
          isAdmin: isAdminUser(user as { email: string | null; role?: string | null }),
        },
        // Double assertion on purpose: the declared callback return type is
        // `AdapterSession & Session`, i.e. it INCLUDES the adapter-internal
        // fields (sessionToken, emailVerified, userId) this allow-list exists
        // to drop. Satisfying that type would mean shipping them again.
      } as unknown as typeof session;
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
