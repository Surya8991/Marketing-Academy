/**
 * Server-side Cloudflare KV proxy for cross-device progress sync.
 *
 * WHY THIS EXISTS:
 *   The CF KV API token must never be sent to the browser. If we used
 *   NEXT_PUBLIC_CF_KV_API_TOKEN it would be embedded in the client bundle and
 *   visible in devtools. Instead, the client calls this proxy which reads the
 *   token from server-only environment variables (no NEXT_PUBLIC_ prefix).
 *
 * REQUIRED ENV VARS (set in Vercel dashboard, never in .env.local for prod):
 *   SYNC_SECRET       , arbitrary shared secret; client sends this to authenticate
 *   CF_ACCOUNT_ID     , Cloudflare account ID
 *   CF_KV_NAMESPACE_ID, KV namespace ID
 *   CF_KV_API_TOKEN   , CF API token with KV write permission
 *
 * If any var is missing, all endpoints return 503 so the UI can degrade gracefully
 * rather than throwing 500s. Check /api/sync/status for a boolean enabled flag.
 *
 * KV key: "progress" (single JSON blob per user, no per-lesson keys in KV).
 */

import { NextRequest, NextResponse } from "next/server";

// KV URL is constructed at module load, safe because server-only module
const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/progress`;
const CF_TOKEN = process.env.CF_KV_API_TOKEN ?? "";

/** Returns true only if all 4 required env vars are present */
function isConfigured(): boolean {
  return Boolean(
    process.env.SYNC_SECRET &&
    process.env.CF_ACCOUNT_ID &&
    process.env.CF_KV_NAMESPACE_ID &&
    CF_TOKEN
  );
}

/** Verifies the shared secret sent by the client matches the server-side env var */
function authenticate(req: NextRequest): boolean {
  const clientSecret = req.headers.get("x-sync-secret") ?? "";
  return clientSecret === (process.env.SYNC_SECRET ?? "");
}

/** GET /api/sync-proxy, pulls the user's saved progress blob from CF KV */
export async function GET(req: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Sync not configured" }, { status: 503 });
  }
  if (!authenticate(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const res = await fetch(CF_BASE, {
    headers: { Authorization: `Bearer ${CF_TOKEN}` },
  });
  // 404 means no data saved yet, not an error
  if (res.status === 404) return NextResponse.json({ data: null });
  if (!res.ok) return NextResponse.json({ error: "KV read failed" }, { status: 502 });
  try {
    const data = JSON.parse(await res.text());
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Invalid data in KV" }, { status: 502 });
  }
}

/** POST /api/sync-proxy, pushes the user's progress blob to CF KV (PUT semantics, full replace) */
export async function POST(req: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Sync not configured" }, { status: 503 });
  }
  if (!authenticate(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const bodyStr = JSON.stringify(body);
  // 512KB guard, CF KV free tier limit is 25MB per value, but a realistic
  // progress blob should never exceed a few KB; 512KB catches runaway serialization
  if (bodyStr.length > 512 * 1024) {
    return NextResponse.json({ error: "Payload too large (max 512KB)" }, { status: 413 });
  }

  const res = await fetch(CF_BASE, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CF_TOKEN}`,
      "Content-Type": "text/plain", // CF KV requires text/plain for string values
    },
    body: bodyStr,
  });
  if (!res.ok) return NextResponse.json({ error: "KV write failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
