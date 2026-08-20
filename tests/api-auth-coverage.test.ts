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
 * Note: the implementation plan's brief listed an `og/route.ts` as an
 * expected exempt route (an OG-image renderer). No such file exists under
 * src/app/api in this repo (confirmed via `find src/app/api -name
 * "route.ts"` — only 6 route files exist, none under an `og/` directory;
 * the site's OG image is `src/app/opengraph-image.tsx`, a Next.js
 * convention file, not an API route). It is intentionally omitted here.
 */
const EXEMPT: Record<string, string> = {
  "auth/[...nextauth]/route.ts": "This IS the auth system — nothing to gate.",
  "newsletter/route.ts": "Stub route, always returns 501, not wired to any real service.",
  "geo-audit/route.ts": "Public utility tool (SSRF-hardened URL fetch + scoring), no per-user data — verify this is still accurate by reading the file before trusting this entry.",
};

const AUTH_MARKERS = [/\brequireUser\s*\(/, /\brequireAdmin\s*\(/, /\bawait\s+auth\s*\(\s*\)/];

function findRouteFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findRouteFiles(full));
    else if (entry.isFile() && entry.name === "route.ts") out.push(full);
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
