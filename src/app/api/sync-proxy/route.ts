import { NextRequest, NextResponse } from "next/server";

const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/progress`;
const CF_TOKEN = process.env.CF_KV_API_TOKEN ?? "";

function isConfigured(): boolean {
  return Boolean(
    process.env.SYNC_SECRET &&
    process.env.CF_ACCOUNT_ID &&
    process.env.CF_KV_NAMESPACE_ID &&
    CF_TOKEN
  );
}

export async function GET() {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Sync not configured" }, { status: 503 });
  }
  const res = await fetch(CF_BASE, {
    headers: { Authorization: `Bearer ${CF_TOKEN}` },
  });
  if (res.status === 404) return NextResponse.json({ data: null });
  if (!res.ok) return NextResponse.json({ error: "KV read failed" }, { status: 502 });
  try {
    const data = JSON.parse(await res.text());
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Invalid data in KV" }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Sync not configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const bodyStr = JSON.stringify(body);
  if (bodyStr.length > 512 * 1024) {
    return NextResponse.json({ error: "Payload too large (max 512KB)" }, { status: 413 });
  }

  const res = await fetch(CF_BASE, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CF_TOKEN}`,
      "Content-Type": "text/plain",
    },
    body: bodyStr,
  });
  if (!res.ok) return NextResponse.json({ error: "KV write failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
