import { createHmac, timingSafeEqual } from "node:crypto";
import { env } from "@/lib/env";

/**
 * One-click unsubscribe (IMPROVEMENT_PLAN §D2 / #28) has to work from a
 * cold click in an email client — no session, no sign-in. A signed token
 * (HMAC-SHA256, keyed on AUTH_SECRET — already a required secret for any of
 * this to function, no new env var needed) lets /api/email/unsubscribe
 * verify "this really is a link Marketing Academy sent to this user for
 * this category" without a database round trip or an active session.
 *
 * Low-severity by design if AUTH_SECRET were ever guessed: worst case is
 * someone unsubscribing another user from a single opt-in marketing
 * category, never account access.
 */
export type EmailCategory = "streakReminder" | "resumeLearning" | "weeklyDigest";

function key(): string {
  if (!env.AUTH_SECRET) throw new Error("AUTH_SECRET is not set — unsubscribe tokens are unavailable.");
  return env.AUTH_SECRET;
}

function sign(payload: string): string {
  return createHmac("sha256", key()).update(payload).digest("hex");
}

export function buildUnsubscribeToken(userId: string, category: EmailCategory): string {
  const payload = `${userId}:${category}`;
  const payloadB64 = Buffer.from(payload, "utf8").toString("base64url");
  return `${payloadB64}.${sign(payload)}`;
}

export function verifyUnsubscribeToken(token: string): { userId: string; category: EmailCategory } | null {
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return null;
  let payload: string;
  try {
    payload = Buffer.from(payloadB64, "base64url").toString("utf8");
  } catch {
    return null;
  }
  const expected = sign(payload);
  const sigBuf = Buffer.from(sig, "hex");
  const expectedBuf = Buffer.from(expected, "hex");
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) return null;

  const [userId, category] = payload.split(":");
  if (!userId || !category) return null;
  if (!["streakReminder", "resumeLearning", "weeklyDigest"].includes(category)) return null;
  return { userId, category: category as EmailCategory };
}
