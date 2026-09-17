import { sqliteTable, integer, text, primaryKey } from "drizzle-orm/sqlite-core";

// --- Auth.js standard tables (NextAuth v5 + @auth/drizzle-adapter contract) ---
export const users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text("email").unique().notNull(),
  name: text("name"),
  image: text("image"),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  // 'user' | 'admin'. Persisted, bootstrapped from ADMIN_EMAILS on sign-in
  // (see src/auth.ts's events.signIn hook). Editable by a superadmin via
  // /admin/users (IMPROVEMENT_PLAN #30) — NOT self-service anywhere else.
  role: text("role").notNull().default("user"),
  // Set only via /admin/users by a superadmin (#30). A suspended user's next
  // request is treated as signed-out (src/auth.ts's session() callback +
  // requireUser()) — existing sessions/tokens are deliberately left alone,
  // since auth() is re-evaluated fresh on every request, not cached.
  suspended: integer("suspended", { mode: "boolean" }).notNull().default(false),
  // Opt-in engagement email prefs (#28), all default OFF — a signed-in user
  // turns these on individually in Settings. Server-side (not localStorage)
  // because the cron routes that send these run with no browser attached.
  // Each maps to one email/lib/templates/*.ts template + one /api/cron/*
  // route; the one-click unsubscribe link in every send flips its own
  // column via /api/email/unsubscribe (token-verified, no sign-in needed).
  emailStreakReminder: integer("emailStreakReminder", { mode: "boolean" }).notNull().default(false),
  emailResumeLearning: integer("emailResumeLearning", { mode: "boolean" }).notNull().default(false),
  emailWeeklyDigest: integer("emailWeeklyDigest", { mode: "boolean" }).notNull().default(false),
});

// Append-only log of every superadmin mutation (#30) — the accountability
// record for a dashboard that can change roles, suspend, or delete accounts.
// No update/delete path is ever exposed for this table.
export const adminAuditLog = sqliteTable("adminAuditLog", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  actorUserId: text("actorUserId").notNull(),
  actorEmail: text("actorEmail").notNull(),
  action: text("action").notNull(), // "promote" | "demote" | "suspend" | "unsuspend" | "delete"
  targetUserId: text("targetUserId").notNull(),
  targetEmail: text("targetEmail").notNull(),
  at: integer("at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
});

export const accounts = sqliteTable("accounts", {
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
}, (t) => ({ pk: primaryKey({ columns: [t.provider, t.providerAccountId] }) }));

export const sessions = sqliteTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable("verificationTokens", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
}, (t) => ({ pk: primaryKey({ columns: [t.identifier, t.token] }) }));

// --- App table ---
export const progress = sqliteTable("progress", {
  userId: text("userId").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  // JSON-stringified Record<string, unknown> — same shape src/lib/progress-snapshot.ts's
  // collectAllKeys() produces. One row per user, full-replace on every sync push.
  data: text("data").notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});
