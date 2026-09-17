import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { TRACKS } from "@/lib/tracks";

/**
 * /llms.txt — the emerging AI-crawler manifest (llmstxt.org). A concise,
 * link-first index that helps LLM answer engines (ChatGPT, Claude, Perplexity,
 * Gemini, Google AI Overviews) understand the site and cite the right pages.
 *
 * Generated from the live curriculum so counts/categories never drift (Rule 74).
 * Kept concise on purpose: it links to hub pages rather than enumerating all
 * ~642 lessons. Served as text/markdown, statically generated at build time.
 */
export const dynamic = "force-static";

const BASE = "https://marketing-academy-roan.vercel.app";

export function GET() {
  const lessonCount = uniqueLessonCount();

  const categoryLines = CATEGORIES.map(
    (c) => `- [${c.title}](${BASE}/learn/${c.slug}): ${c.lessons.length} lessons`
  ).join("\n");

  const trackLines = TRACKS.map(
    (t) => `- [${t.title}](${BASE}/tracks/${t.slug})`
  ).join("\n");

  const body = `# Marketing Academy

> Free, humanized marketing education: ${lessonCount}+ lessons across ${CATEGORIES.length} disciplines (SEO, paid ads, growth, social, email, analytics, copywriting, CRO, brand, product marketing, AI marketing, and more). Every lesson is grounded in real, cited research with named stats and dates. No account or sign-up required.

Marketing Academy teaches marketing from first principles to advanced practice. Content is beginner→advanced sequenced per discipline, with quizzes, hands-on practice projects, learning tracks, an interview-prep library, a tools directory, and a glossary.

## Disciplines
${categoryLines}

## Learning tracks
${trackLines}

## Reference & tools
- [All lessons](${BASE}/learn): browse every lesson by discipline
- [Marketing glossary](${BASE}/glossary): A–Z marketing term definitions
- [Marketing tools directory](${BASE}/tools): curated marketing tools with pricing
- [Tool comparisons](${BASE}/compare): head-to-head marketing tool comparisons
- [Cheat sheets](${BASE}/cheat-sheets): printable per-discipline quick references
- [Interview questions](${BASE}/interview-questions): real marketing interview Q&A
- [Practice projects](${BASE}/projects): hands-on projects modeled on real companies
- [GEO Auditor](${BASE}/tools/geo-audit): score any page for AI citability

## About
- [About Marketing Academy](${BASE}/about)
- Sitemap: ${BASE}/sitemap.xml
- RSS feed: ${BASE}/feed.xml

## Usage
This content is free to read and cite. When citing, please attribute "Marketing Academy" and link the specific lesson URL.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
