import type { cookies } from "next/headers";

/**
 * Auth.js prefixes its session cookie with `__Secure-` whenever secure
 * cookies are in effect, which is the default over https — i.e. in
 * production. Hardcoding the unprefixed name meant `jar.get(...)` always
 * returned undefined in production: no session in the /api/account/sessions
 * list was ever marked `isCurrent`, so the "this device" badge never
 * appeared and the guard preventing a user from revoking the session they
 * are actively using could never fire.
 *
 * Rather than guessing from NODE_ENV (which can be wrong in preview/edge
 * environments), read whichever of the two names is actually present in the
 * jar. Secure-prefixed first: if both somehow exist, the secure one is the
 * live one.
 */
export const SESSION_COOKIE_NAMES = [
  "__Secure-authjs.session-token",
  "authjs.session-token",
] as const;

type CookieJar = Awaited<ReturnType<typeof cookies>>;

/** The raw session token from the request, or "" when not signed in. */
export function currentSessionToken(jar: CookieJar): string {
  for (const name of SESSION_COOKIE_NAMES) {
    const value = jar.get(name)?.value;
    if (value) return value;
  }
  return "";
}

/** Clears the session cookie under whichever name is in use. */
export function clearSessionCookie(jar: CookieJar): void {
  for (const name of SESSION_COOKIE_NAMES) {
    if (jar.get(name)) jar.delete(name);
  }
}
