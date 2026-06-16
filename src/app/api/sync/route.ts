import { NextRequest, NextResponse } from "next/server";

const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/progress`;
const CF_TOKEN = process.env.CF_KV_API_TOKEN ?? "";
const SYNC_SECRET = process.env.SYNC_SECRET ?? "";

function authorized(req: NextRequest): boolean {
  if (!SYNC_SECRET) return false;
  return req.headers.get("x-sync-secret") === SYNC_SECRET;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch(CF_BASE, {
    headers: { Authorization: `Bearer ${CF_TOKEN}` },
  });

  if (res.status === 404) {
    return NextResponse.json({ data: null });
  }
  if (!res.ok) {
    return NextResponse.json({ error: "KV read failed" }, { status: 502 });
  }

  try {
    const data = JSON.parse(await res.text());
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Invalid data in KV" }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const res = await fetch(CF_BASE, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CF_TOKEN}`,
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "KV write failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
