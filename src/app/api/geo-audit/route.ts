import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const GROQ_BASE = "https://api.groq.com/openai/v1";
const MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are a GEO (Generative Engine Optimization) auditor. GEO is about making content discoverable and citable by AI models like ChatGPT, Claude, Gemini, and Perplexity.

When given a webpage's text content, evaluate it across these 6 dimensions and return ONLY valid JSON:

{
  "scores": {
    "entity_coverage": <0-100>,
    "citability": <0-100>,
    "structured_data": <0-100>,
    "direct_answers": <0-100>,
    "brand_signals": <0-100>,
    "content_depth": <0-100>
  },
  "overall": <0-100>,
  "grade": "A" | "B" | "C" | "D" | "F",
  "summary": "<2-3 sentence summary of the page's GEO readiness>",
  "wins": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "gaps": ["<gap 1>", "<gap 2>", "<gap 3>"],
  "quick_fixes": [
    { "action": "<what to do>", "impact": "high" | "medium" | "low", "effort": "high" | "medium" | "low" }
  ]
}

Scoring guide:
- entity_coverage: Does the content name specific people, tools, brands, stats, dates? (LLMs cite entities)
- citability: Is there original research, unique data, clear authorship, or quotable claims?
- structured_data: Are there lists, tables, step-by-step guides, FAQ-style Q&A?
- direct_answers: Does the page answer questions directly with specific, factual statements?
- brand_signals: Is the brand/author clearly identified and consistent?
- content_depth: Is the content comprehensive enough to be a definitive source on the topic?

Return ONLY the JSON object, no markdown, no explanation.`;

// Rate limit: 10 audits/minute per IP
const auditBuckets = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = auditBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    auditBuckets.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (bucket.count >= 10) return false;
  bucket.count++;
  return true;
}

async function fetchPageText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "GEO-Auditor/1.0 (marketing-academy.vercel.app)" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Failed to fetch page: ${res.status}`);
  const html = await res.text();

  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, 8000);

  if (text.length < 100) throw new Error("Page has too little text content to audit.");
  return text;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "groq_not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return Response.json({ error: "rate_limited", detail: "Max 10 audits per minute." }, { status: 429 });
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const url = (rawBody as Record<string, unknown>)?.url;
  if (!url || typeof url !== "string") {
    return Response.json({ error: "url_required" }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return Response.json({ error: "invalid_url" }, { status: 400 });
  }
  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return Response.json({ error: "invalid_url" }, { status: 400 });
  }
  const h = parsedUrl.hostname;
  if (
    h === "localhost" || h === "127.0.0.1" || h === "0.0.0.0" ||
    h.startsWith("10.") || h.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(h)
  ) {
    return Response.json({ error: "invalid_url" }, { status: 400 });
  }

  let pageText: string;
  try {
    pageText = await fetchPageText(url);
  } catch (e) {
    return Response.json({ error: "fetch_failed", detail: String(e) }, { status: 422 });
  }

  const groqRes = await fetch(`${GROQ_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Audit this page content:\n\nURL: ${url}\n\n---\n\n${pageText}` },
      ],
      stream: false,
      temperature: 0.1,
    }),
  });

  if (!groqRes.ok) {
    const text = await groqRes.text();
    return Response.json({ error: "groq_error", detail: text }, { status: 502 });
  }

  const groqData = await groqRes.json();
  const raw: string = groqData?.choices?.[0]?.message?.content ?? "";
  if (!raw) {
    return Response.json({ error: "invalid_groq_response" }, { status: 502 });
  }

  let result: unknown;
  try {
    const cleaned = raw.replace(/^```json?\n?/, "").replace(/\n?```$/, "").trim();
    result = JSON.parse(cleaned);
  } catch {
    return Response.json({ error: "parse_failed", raw }, { status: 502 });
  }

  return Response.json({ ok: true, url, result });
}
