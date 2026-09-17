import { z } from "zod";

const envSchema = z.object({
  AUTH_SECRET: z.string().min(16).optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  // file:./data/marketing-academy.db for local dev, libsql://...-turso.io for prod.
  DATABASE_URL: z.string().default("file:./data/marketing-academy.db"),
  TURSO_AUTH_TOKEN: z.string().optional(),
  ADMIN_EMAILS: z.string().default(""),
  // Gmail SMTP magic-link auth (IMPROVEMENT_PLAN #26). EMAIL_SERVER is a
  // full smtp:// connection string, e.g.
  // smtp://you%40gmail.com:APP_PASSWORD@smtp.gmail.com:587 — the value
  // uses a Gmail App Password (2FA required), never a real account password.
  EMAIL_SERVER: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
});

// Drop empty-string env values before validating — an env var present but
// blank (e.g. a placeholder left in Vercel's dashboard) should behave as
// "not set," not as a value that fails .min(16).optional().
function withoutBlanks(source: NodeJS.ProcessEnv): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(source)) {
    if (v === "") continue;
    out[k] = v;
  }
  return out;
}

export const env = envSchema.parse(withoutBlanks(process.env));
export const adminEmails = env.ADMIN_EMAILS.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);

/** True only when every var required for real sign-in is present. */
export function authConfigured(): boolean {
  return Boolean(env.AUTH_SECRET && env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
}

/**
 * True only when Gmail-SMTP magic-link sign-in is fully configured
 * (IMPROVEMENT_PLAN #26). This — not authConfigured()/Google — is the gate
 * that drives whether sign-in UI shows: Google OAuth stays wired in
 * src/auth.ts as a provider but is deliberately not the enabled path.
 */
export function emailAuthConfigured(): boolean {
  return Boolean(env.AUTH_SECRET && env.EMAIL_SERVER && env.EMAIL_FROM);
}
