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
  // (see src/auth.ts's events.signIn hook). No admin UI reads/writes this
  // beyond requireAdmin() — see the design doc's Non-Goals.
  role: text("role").notNull().default("user"),
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
