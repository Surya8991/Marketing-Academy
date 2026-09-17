import type { MetadataRoute } from "next";

const BASE = "https://marketing-academy-roan.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep crawlers out of API routes and per-user/utility pages that carry no
      // indexable content. The pages also set `robots: { index: false }` in their
      // own metadata (belt-and-braces, since disallow only blocks crawling, not
      // indexing of already-known URLs). AI answer-engine crawlers (GPTBot,
      // ClaudeBot, PerplexityBot, Google-Extended, …) are intentionally allowed
      // on everything else — see /llms.txt for the crawl guide.
      disallow: [
        "/api/",
        "/account",
        "/login",
        "/settings",
        "/bookmarks",
        "/portfolio",
        "/review",
        "/skill-map",
        "/achievements",
      ],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
