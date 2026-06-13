import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email } = body as { email?: string };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // TODO: connect to Mailchimp/ConvertKit/Resend - replace this with your email service API call
  console.log("Newsletter signup:", email);

  return NextResponse.json({ success: true }, { status: 200 });
}
