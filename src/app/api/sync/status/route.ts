/**
 * GET /api/sync/status
 *
 * Returns { enabled: boolean } so the settings UI can show/hide the sync section
 * WITHOUT exposing any secret values to the browser.
 *
 * The client fetches this on mount and disables the sync UI when enabled=false,
 * rather than letting users click "Push" and receive a confusing 503.
 *
 * This intentionally mirrors the same 4-var check in /api/sync-proxy/route.ts.
 * If you add or remove a required env var, update both files.
 */

import { NextResponse } from "next/server";

export async function GET() {
  const enabled = Boolean(
    process.env.SYNC_SECRET &&
    process.env.CF_ACCOUNT_ID &&
    process.env.CF_KV_NAMESPACE_ID &&
    process.env.CF_KV_API_TOKEN
  );
  return NextResponse.json({ enabled });
}
