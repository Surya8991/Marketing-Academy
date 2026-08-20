import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const API_ROOT = path.resolve(__dirname, "../src/app/api");

/**
 * routeKey → reason it's exempt from requiring auth() / requireUser() /
 * requireAdmin(). Every entry here should have been read and verified, not
 * assumed. Mirrors the Email-Automator sister project's
 * test/unit/api-auth-coverage.test.ts.
 *
 * Note: `src/app/api/og/route.tsx` (a next/og ImageResponse renderer) exists
 * and IS covered here. An earlier version of this test only matched the
 * literal filename `route.ts`, which silently excluded `.tsx` route files
 * from discovery entirely — no error, no warning, just never checked. That
 * defeated the point of the test (a future `.tsx` route, auth-relevant or
 * not, would never be scanned). Fixed by matching both `route.ts` and
 * `route.tsx`. `og/route.tsx` is now in EXEMPT below with a verified reason.
 */
const EXEMPT: Record<string, string> = {
  "auth/[...nextauth]/route.ts": "This IS the auth system — nothing to gate.",
  "newsletter/route.ts": "Stub route, always returns 501, not wired to any real service.",
  "geo-audit/route.ts": "Public utility tool (SSRF-hardened URL fetch + scoring), no per-user data — verify this is still accurate by reading the file before trusting this entry.",
  "og/route.tsx": "Renders an OG image via next/og's ImageResponse from three length-capped query params (title/category/level) reflected directly into JSX — React auto-escapes them, and the output is an image, not HTML. No user data read/written, no database access, no auth needed.",
};

const AUTH_MARKERS = [/\brequireUser\s*\(/, /\brequireAdmin\s*\(/, /\bawait\s+auth\s*\(\s*\)/];

function findRouteFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findRouteFiles(full));
    else if (entry.isFile() && /^route\.tsx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

describe("every API route is either auth-gated or explicitly exempt", () => {
  const routeFiles = findRouteFiles(API_ROOT);

  test("found route files to check (sanity)", () => {
    assert.ok(routeFiles.length >= 4, `expected at least 4 route files, found ${routeFiles.length}`);
  });

  for (const file of routeFiles) {
    const routeKey = path.relative(API_ROOT, file).replace(/\\/g, "/");
    test(`${routeKey} is gated or exempt`, () => {
      if (routeKey in EXEMPT) {
        assert.ok(EXEMPT[routeKey]);
        return;
      }
      const src = fs.readFileSync(file, "utf8");
      const gated = AUTH_MARKERS.some((re) => re.test(src));
      assert.ok(
        gated,
        `${routeKey} calls none of requireUser()/requireAdmin()/auth() and isn't in EXEMPT. ` +
          `If genuinely public, add it to EXEMPT with a verified reason.`
      );
    });
  }

  test("every EXEMPT entry still points at a real file", () => {
    for (const routeKey of Object.keys(EXEMPT)) {
      assert.ok(fs.existsSync(path.join(API_ROOT, routeKey)), `EXEMPT lists '${routeKey}' but no such file exists`);
    }
  });
});
