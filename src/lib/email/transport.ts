import nodemailer from "nodemailer";
import { env } from "@/lib/env";

/**
 * One shared SMTP transport for every outbound email (auth magic-links,
 * transactional, and — once #28 ships — engagement/milestone mail). Built
 * lazily so importing this module never throws when EMAIL_SERVER isn't set
 * (mirrors the lazyProxy pattern in src/server/db/client.ts for the same
 * "must not crash on a fresh checkout with no env vars" reason).
 */
let cached: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransport() {
  if (!env.EMAIL_SERVER) {
    throw new Error("EMAIL_SERVER is not set — email sending is not configured.");
  }
  if (!cached) {
    cached = nodemailer.createTransport(env.EMAIL_SERVER);
  }
  return cached;
}

export type SendMailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

/** Returns true on success, false on any failure — email is always a
 *  best-effort side channel, never something that should break the caller's
 *  actual request (account creation, a sign-in, etc). */
export async function sendMail(input: SendMailInput): Promise<boolean> {
  if (!env.EMAIL_SERVER || !env.EMAIL_FROM) return false;
  try {
    await getTransport().sendMail({
      to: input.to,
      from: env.EMAIL_FROM,
      subject: input.subject,
      html: input.html,
      text: input.text,
    });
    return true;
  } catch {
    return false;
  }
}
