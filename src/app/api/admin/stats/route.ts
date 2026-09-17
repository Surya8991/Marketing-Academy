import { NextResponse } from "next/server";
import { requireAdmin } from "@/auth";
import { rateLimit } from "@/lib/rate-limit";
import { getAdminStats } from "@/lib/admin-stats";

export async function GET() {
  const admin = await requireAdmin();
  if (!rateLimit(`admin:stats:${admin.id}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  return NextResponse.json(await getAdminStats());
}
