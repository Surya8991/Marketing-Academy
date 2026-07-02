import { NextRequest } from "next/server";
import dns from "node:dns/promises";
import net from "node:net";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const MAX_RESPONSE_BYTES = 2 * 1024 * 1024; // 2MB cap on upstream response body
const MAX_REDIRECTS = 3;

/**
 * Blocks loopback/private/link-local/reserved ranges, including the cloud metadata
 * endpoint (169.254.169.254, covered by the 169.254.0.0/16 check) and IPv6 loopback/
 * ULA/link-local. IPv4-mapped IPv6 addresses (::ffff:a.b.c.d) are unwrapped and
 * re-checked against the IPv4 rules so they can't smuggle a private address past the
 * IPv6 branch.
 */
function isPrivateOrReservedIp(ip: string): boolean {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    if (a === 127) return true; // loopback
    if (a === 10) return true; // RFC1918 private
    if (a === 172 && b >= 16 && b <= 31) return true; // RFC1918 private
    if (a === 192 && b === 168) return true; // RFC1918 private
    if (a === 169 && b === 254) return true; // link-local, incl. cloud metadata (169.254.169.254)
    if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
    if (a === 0) return true; // "this" network
    if (a >= 224) return true; // multicast/reserved
    return false;
  }
  if (net.isIPv6(ip)) {
    const lower = ip.toLowerCase();
    if (lower === "::1" || lower === "::") return true; // loopback / unspecified
    if (lower.startsWith("fc") || lower.startsWith("fd")) return true; // fc00::/7 ULA
    if (/^fe[89ab]/.test(lower)) return true; // fe80::/10 link-local
    const v4mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
    if (v4mapped) return isPrivateOrReservedIp(v4mapped[1]);
    return false;
  }
  return true; // unrecognized format, reject conservatively
}

/** Resolves the hostname and rejects if ANY resolved address is private/reserved.
 *  Also handles literal IP hostnames directly (net.isIP normalizes decimal/hex/octal
 *  forms the WHATWG URL parser already canonicalizes into dotted-decimal). */
async function assertPublicHost(hostname: string): Promise<void> {
  if (net.isIP(hostname)) {
    if (isPrivateOrReservedIp(hostname)) throw new Error("blocked_target");
    return;
  }
  const records = await dns.lookup(hostname, { all: true, verbatim: true });
  if (records.length === 0) throw new Error("dns_resolution_failed");
  for (const r of records) {
    if (isPrivateOrReservedIp(r.address)) throw new Error("blocked_target");
  }
}

/** Reads a fetch Response body up to maxBytes, aborting the stream if exceeded. */
async function readCapped(res: Response, maxBytes: number): Promise<string> {
  const reader = res.body?.getReader();
  if (!reader) return res.text();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel();
      throw new Error("response_too_large");
    }
    text += decoder.decode(value, { stream: true });
  }
  return text;
}

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

/**
 * Fetches the page with SSRF guards: the hostname is DNS-resolved and checked against
 * private/reserved ranges BEFORE each request (blocks decimal/hex/octal IP encodings,
 * cloud metadata, IPv6 loopback/ULA/link-local). Redirects are followed manually (not
 * via fetch's automatic redirect) so every hop is re-validated the same way — an
 * attacker can't pass an initially-public URL that 302s to an internal address.
 */
async function fetchPageText(startUrl: string): Promise<string> {
  let currentUrl = startUrl;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const parsed = new URL(currentUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("invalid_url");
    }
    await assertPublicHost(parsed.hostname);

    const res = await fetch(currentUrl, {
      headers: { "User-Agent": "GEO-Auditor/1.0 (marketing-academy.vercel.app)" },
      signal: AbortSignal.timeout(10_000),
      redirect: "manual",
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) throw new Error(`Failed to fetch page: ${res.status} (no redirect target)`);
      if (hop === MAX_REDIRECTS) throw new Error("too_many_redirects");
      currentUrl = new URL(location, currentUrl).toString();
      continue;
    }

    if (!res.ok) throw new Error(`Failed to fetch page: ${res.status}`);

    const html = await readCapped(res, MAX_RESPONSE_BYTES);
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

  throw new Error("too_many_redirects");
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
  // Private/reserved-range rejection (incl. cloud metadata, IPv6 loopback/ULA,
  // decimal/hex IP encodings, and every redirect hop) happens inside fetchPageText via
  // assertPublicHost — a DNS-resolved check, not a hostname-string check. Duplicating a
  // weaker string-based check here would just be a second, inconsistent source of truth.
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
