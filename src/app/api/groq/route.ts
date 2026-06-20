import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const GROQ_BASE = "https://api.groq.com/openai/v1";
const DEFAULT_MODEL = "llama-3.3-70b-versatile";

const ALLOWED_MODELS = new Set([
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "llama3-8b-8192",
  "llama3-70b-8192",
  "mixtral-8x7b-32768",
  "gemma2-9b-it",
]);

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;

// Simple in-memory rate limit: max 30 requests per minute per IP.
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (bucket.count >= 30) return false;
  bucket.count++;
  return true;
}

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function validateMessages(raw: unknown[]): ChatMessage[] | null {
  const valid: ChatMessage[] = [];
  for (const m of raw) {
    if (typeof m !== "object" || m === null) return null;
    const msg = m as Record<string, unknown>;
    if (!["system", "user", "assistant"].includes(msg.role as string)) return null;
    if (typeof msg.content !== "string") return null;
    if (msg.content.length > MAX_MESSAGE_LENGTH) return null;
    valid.push({ role: msg.role as ChatMessage["role"], content: msg.content });
  }
  return valid;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "groq_not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: { messages: unknown[]; model?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const { messages: rawMessages, model = DEFAULT_MODEL } = body;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return Response.json({ error: "messages_required" }, { status: 400 });
  }
  if (rawMessages.length > MAX_MESSAGES) {
    return Response.json({ error: "too_many_messages" }, { status: 400 });
  }
  if (!ALLOWED_MODELS.has(model)) {
    return Response.json({ error: "model_not_allowed" }, { status: 400 });
  }

  const messages = validateMessages(rawMessages);
  if (!messages) {
    return Response.json({ error: "invalid_message_shape" }, { status: 400 });
  }

  const groqRes = await fetch(`${GROQ_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, messages, stream: true }),
  });

  if (!groqRes.ok) {
    const text = await groqRes.text();
    return Response.json({ error: "groq_error", detail: text }, { status: 502 });
  }

  if (!groqRes.body || !groqRes.headers.get("content-type")?.includes("text/event-stream")) {
    return Response.json({ error: "unexpected_groq_response" }, { status: 502 });
  }

  return new Response(groqRes.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
    },
  });
}
