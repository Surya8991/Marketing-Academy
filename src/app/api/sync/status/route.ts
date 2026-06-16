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
