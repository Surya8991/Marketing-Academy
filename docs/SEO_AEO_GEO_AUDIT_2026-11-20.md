# SEO, AEO and GEO audit: Marketing Academy

**Date:** 2026-11-20 · **Site:** marketing-academy-roan.vercel.app · **Code:** `main` after PR #37 (4a2fa2b)

This audit covers classic search (SEO), answer engines such as Google AI Overviews and featured snippets (AEO), and generative engines such as ChatGPT, Claude, Perplexity and Gemini (GEO). It follows the sections of `docs/seo-aeo-geo-master-guide.html` (technical SEO, AEO, GEO, AI Overviews, measurement).

## How this was measured

- **Full crawl:** all 1,738 sitemap URLs plus every internal link they contain (23 more URLs), on a local production build of the merged code. Each page's status, title, description, canonical, robots tag, headings, JSON-LD, Open Graph tags, internal links, image alt text and word count were recorded.
- **Live checks:** robots.txt, llms.txt, response headers, redirects, 404 handling, and requests to the live site from seven crawler user agents (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Googlebot, Bingbot, Google-CloudVertexBot).
- **Content analysis:** all 642 lesson MDX files, scanned for answer-first intros, question headings, FAQ and summary blocks, source links, statistics and the years they cite.
- **Speed:** JavaScript weight, layout shift and DOM size on four page types, measured on the local production build.

**Not checked (no access):** Google Search Console, Bing Webmaster Tools, real Core Web Vitals field data, rankings, backlinks, and actual citations in AI answers. PostHog's key is empty locally, so AI-referral traffic can't be measured from here either.

## Scorecard

| Area | Grade | One-line verdict |
|---|---|---|
| Crawling and indexing | B | Clean: every sitemap URL returns 200, no broken links, AI crawlers allowed. But 794 project pages can only be found through the sitemap, and the sitemap lists 29 noindexed pages. |
| On-page basics | C+ | No duplicate titles, but 452 lessons have two H1s, 800 of 803 project titles are too long, and the homepage title is just the brand name. |
| Structured data | B | Valid JSON-LD on every content page, but every lesson claims the same modified date, none has a published date, and the logo is a 32px favicon. |
| AEO (answer engines) | C | 73% of lessons open with a Quick Summary (good), but no lesson has an FAQ, only 8% use question headings, and glossary pages average 60 words. |
| GEO (AI engines) | C | llms.txt and crawler access are good, but 57% of lessons link no sources, the author is an anonymous "Organization", and the domain is a vercel.app subdomain. |
| Performance | B | Layout shift is fine (0 to 0.067); every page type ships 265 to 338 KB of compressed JavaScript, even a 60-word glossary page. |

## What is already done well

- **Every sitemap URL returns 200, and no internal link points at a missing page.** Unknown URLs return a real 404 (no soft 404s), `/learn/` redirects to `/learn` with a 308, and http redirects to https.
- **No duplicate titles across 1,738 pages.**
- **Every crawler gets 200.** All seven user agents tested above get the home page, a lesson and a glossary term with no firewall or bot-protection block. robots.txt explicitly allows them.
- **Lesson text is in the raw HTML.** AI crawlers don't run JavaScript, and they still get the full lesson body.
- **`/llms.txt` is generated from the curriculum**, so its counts can't drift (it already lists the two new tracks).
- **JSON-LD parses on every page.**
  - Lessons: Article, LearningResource and BreadcrumbList.
  - Glossary terms: DefinedTerm.
  - Interview question pages: FAQPage.
  - Tracks and categories: Course.
  - Homepage: Organization and WebSite.
- **The 13 lessons listed under two categories** canonicalise correctly to their `/learn/mental-models/` URLs.
- **The basics are in place.** All 6,616 images have alt text, `lang="en"` is set everywhere, and HSTS is on.
- **73% of lessons (471) have a "Quick Summary" or Key Takeaways list near the top**, the format answer engines quote most easily.
- **60% of lessons (386) include an `InAction` case study** with a named company and a cited outcome.

## Top 12 fixes, in priority order

| # | Fix | Why it matters | Where | Effort |
|---|---|---|---|---|
| 1 | Put project links in the server HTML | 794 of 803 project pages have **zero** internal links in the HTML. The lesson page's project list is collapsed and client-rendered, and the `/projects` hub only renders 9 links in its HTML. Crawlers can reach these pages only through the sitemap, which is a weak signal that often leads to "Discovered, not indexed". | `src/components/ProjectList.tsx` (render each `<a>` even while collapsed, e.g. inside `<details>`); `src/app/projects/page.tsx` / `ProjectsClient` (render the full list on the server) | S to M |
| 2 | Use real per-lesson dates | `dateModified` is hard-coded to `"2026-07-04"` for all 655 lessons (`src/app/learn/[category]/[lesson]/page.tsx:157`), and no lesson has `datePublished`. The sitemap gives every URL the build date as `lastmod`. Search engines learn to ignore dates that never change, and freshness is a top GEO signal. | Add `published` / `updated` to `lessonMeta` (Vercel's shallow clone makes build-time git dates unreliable); use them in the JSON-LD, the sitemap and a visible "Updated" line | M |
| 3 | Add source links to unsourced stats | 369 lessons (57%) have **no clickable source** in the body, yet the median lesson cites 7 percentage figures. AI engines prefer to cite pages whose claims are attributed, and AGENTS.md Rule 11 already requires sources. Example: `seo/keyword-research` states "long-tail keywords drive 70% of all search traffic" with no source. | `src/content/**` (start with the affiliate-marketing category, which is entirely unsourced, then the highest-traffic lessons) | L |
| 4 | Remove the second H1 on lessons | 439 MDX files start with `# Title`, and the page template also renders the title as an H1, so 452 lesson URLs have two identical H1s. | `mdx-components.tsx`: map `h1` to render nothing (the template already shows the title) | XS |
| 5 | Drop noindexed URLs from the sitemap | The sitemap lists 29 pages that say `noindex`: 26 `/certificates/*`, `/certificates`, `/search` and `/skill-map`. `/skill-map` is also blocked in robots.txt. Google reports these as sitemap errors and trusts the sitemap less. | `src/app/sitemap.ts` (remove `certificateRoutes`, `/certificates`, `/search`, `/skill-map`) | XS |
| 6 | Give every page a share image | 855 pages have no `og:image`: all 803 projects, 26 tracks, 21 categories, and `/tools`, `/projects`, `/interview-prep`, `/tools/geo-audit`. Their own `openGraph` object replaces the inherited one (AGENTS.md Rule 79's shallow merge), and projects also fall back to the small `summary` Twitter card. | Add `images: [/api/og?...]` to `openGraph` in `src/app/projects/[category]/[slug]/page.tsx:43`, `src/app/tracks/[slug]/page.tsx:24`, `src/app/learn/[category]/page.tsx:45` and the four static pages | S |
| 7 | Rewrite titles | The homepage `<title>` is just "Marketing Academy" (17 characters, no keyword). 800 of 803 project titles run past 60 characters (median about 85, longest 129) because of the "(Project) \| Marketing Academy" suffix. 285 lessons run past 60. `/learn/seo` is titled just "SEO". | Homepage metadata in `src/app/page.tsx`; project title template; long `lessonMeta.title` values | S |
| 8 | Link the hidden hub pages | `/resources`, `/interview-prep`, `/search` and `/tools/geo-audit` have no internal links in any page's HTML: they appear only inside nav dropdowns, which render when opened. Tracks, cheat sheets and comparisons each get just 1 inlink (their hub). | Add them to `Footer.tsx`; link each category page to its cheat sheet and matching tracks; link lessons to relevant comparisons | S |
| 9 | Fill out glossary pages | 158 glossary pages average **60 words**: a definition and little else. These are the pages answer engines would quote for "what is X" queries, and right now they are thin. | Glossary term page: add an example, a formula where one exists, "why it matters", and links to 2 to 3 lessons. Keep the one-sentence definition first. | M |
| 10 | Add questions and FAQs to lessons | 0 lessons have an FAQ section; 52 (8%) use any question-style heading. AI Overviews and People Also Ask pull from question-and-answer blocks. | Add a 3 to 5 question FAQ (plus `FAQPage` JSON-LD) to the top 50 lessons; rewrite some H2s as the question the section answers | M to L |
| 11 | Strengthen who's behind the site | `author` is the generic Organization on every lesson. The Organization `logo` is `favicon.ico` at 32×32 (Google requires at least 112×112). `sameAs` lists only a GitHub repo and a personal X account. `/about` has no structured data. | 512×512 PNG logo; an editorial/author page with a `Person` (or named team) as author; `AboutPage` + Organization JSON-LD on `/about`; add LinkedIn and other official profiles to `sameAs` | S to M |
| 12 | Move to a custom domain | `*.vercel.app` builds no brand equity, can't be verified in Search Console via DNS, and reads as less authoritative to AI engines. The domain is hard-coded in **26 files**. | Put one `SITE_URL` in `src/lib/env.ts`, replace the 26 copies, then add the domain in Vercel with 308 redirects | M |

## Detailed findings

### 1. Crawling and indexing

| Check | Result |
|---|---|
| robots.txt | Allows `/`. Blocks `/api/` and 10 personal pages. Points to the sitemap. No AI crawler is blocked. Good. |
| Live crawler access | 200 for all seven user agents on the home page, a lesson and a glossary term |
| Sitemap | 1,738 URLs, no duplicates, all 200 |
| Noindexed URLs in sitemap | **29** (see fix 5) |
| `lastmod` | The build date on every URL (fix 2). Google ignores `lastmod` once it proves unreliable. |
| Orphans (no internal link in HTML) | **798**: 794 projects plus `/tools/geo-audit`, `/interview-prep`, `/search`, `/resources` |
| Pages with only one inlink | 87: all 26 tracks (23 of them), cheat sheets (21), comparisons (7), certificates (26) |
| Median inlinks | lessons 6, glossary 5, categories 35, projects **0** |
| Comparison URLs in sitemap | Hard-coded list of 7 in `sitemap.ts`. Adding a comparison elsewhere silently leaves it out. |
| Redirects and 404s | Correct (308 trailing slash, 308 http to https, real 404s) |
| Homepage links | It also links to `/portfolio`, `/profile` and `/skill-map`, which are noindexed or robots-blocked. That wastes a little link equity; low priority. |

### 2. On-page

| Page type | Pages | Title > 60 chars | Description < 70 / > 160 | H1 problems | Median words in `<main>` |
|---|---|---|---|---|---|
| Lesson | 655 | 285 | 72 / 125 | 452 with two H1s | 1,459 |
| Project | 803 | **800** | 72 / 0 | none | 817 |
| Glossary term | 158 | 6 | 0 / 0 | none | **60** |
| Track | 26 | 0 | 0 / 21 | none | 139 |
| Category | 21 | 0 | 0 / 15 | none | 819 |
| Cheat sheet | 21 | 4 | 0 / 0 | none | 795 |
| Interview category | 16 | 7 | 0 / 0 | none | 1,625 |
| Compare | 7 | 1 | 0 / 0 | none | 356 |

- **Duplicate descriptions:** one group of 27, the homepage plus all 26 certificate pages, which reuse the site description. The certificates are noindexed, so this is harmless once they leave the sitemap.
- **Project descriptions are templated:** "A hands-on audit project (~40 min) for the 'Keyword Research' lesson." They say nothing about what the learner does or finds. Use the project's `objective` or `keyQuestion` instead.
- **Track pages are short (139 words)** and are mostly a lesson list. A paragraph on who the track is for, what you can do at the end, and the job it prepares for would help them rank for "learn X" queries.

### 3. Structured data

| Page type | Types found | Gaps |
|---|---|---|
| Lesson | Article + LearningResource, BreadcrumbList, `isPartOf` Course | Static `dateModified`, no `datePublished`, Organization author, logo too small |
| Project | LearningResource, BreadcrumbList | No image |
| Glossary term | DefinedTerm in DefinedTermSet | Good. Could add `sameAs` to a Wikipedia entry where one exists. |
| Interview category | FAQPage | Good for AI engines. Google only shows FAQ rich results for government and health sites (since 2023), so expect no SERP feature. |
| Track, category | Course + CourseInstance | Google's Course rich result also wants `offers` (free: price 0) and course schedule details |
| Home | Organization, WebSite (SearchAction), ItemList | Google retired the sitelinks search box in 2024, so SearchAction is now just harmless. Logo is the 32px favicon. |
| Static pages | 16 of 19 have none | `/about` should carry AboutPage + Organization |

No invalid JSON-LD blocks were found.

### 4. AEO: being the quoted answer

| Signal (642 lessons) | Result |
|---|---|
| "Quick Summary" or Key Takeaways block | **471 (73%)**, a real strength |
| Opening paragraph defines the topic ("X is ...") | 388 (60%) |
| Intro before the first H2 | median 48 words; 83 lessons (12%) have none |
| Any question-style H2 or H3 | 52 (8%) |
| FAQ section | **0** |
| Comparison table | 141 (21%) |
| Lists | 606 (94%) |

What to change:
- **Lead with the answer.** For the 40% that open with a story ("Three different affiliates might touch the same sale..."), add one plain definition sentence before the story. Snippets take the first clear answer on the page.
- **Ask the question in the heading.** "Why This Matters More Than You Think" becomes "Why does keyword research matter?" This matches how people query AI assistants.
- **Add short FAQs** to the highest-value lessons, with matching `FAQPage` JSON-LD.
- **Glossary pages are AEO landing pages** for "what is X" questions. Fix 9 is the biggest AEO lever per hour spent.

### 5. GEO: being cited by AI engines

| Signal | Result |
|---|---|
| AI crawler access | Allowed in robots.txt; 200 live |
| `/llms.txt` | Present, generated, correct `text/markdown` type. A `/llms-full.txt` with lesson summaries would give AI engines more to work with. |
| Source links in lesson bodies | median **0**; 369 lessons (57%) have none; 97 (15%) have 5 or more |
| Statistics | median 7 percentage figures per lesson; 83 lessons have none |
| Recency of evidence | newest year cited: 2025 or 2026 in 473 lessons; 2023 or earlier in 22; no year at all in 78 |
| Visible dates on pages | none (no `<time>` element on any page) |
| Author | the generic Organization, no person or credentials |
| Entity signals | vercel.app domain, 32px logo, 2 `sameAs` profiles |

Generative engines cite pages that make **attributed, specific, recent claims** from a **recognisable source**. The content has the specific claims; it is missing the attribution (fix 3), the dates (fix 2) and the recognisable source (fixes 11 and 12).

Examples of lessons whose newest cited year is 2023 or earlier:
- `fundamentals/jtbd` (2016)
- `events-experiential/user-conference-strategy` (2017)
- `brand-strategy/micro-community-branding` (2018)
- `legal-compliance/comparative-advertising-law` (2019)

### 6. Performance (local production build, no network throttling)

| Page | Compressed JS | Uncompressed JS | HTML | Layout shift |
|---|---|---|---|---|
| Home | 306 KB | 988 KB | 147 KB | 0 |
| Lesson | 338 KB | 1,119 KB | 186 KB | 0.067 |
| Project | 313 KB | 1,041 KB | 134 KB | 0 |
| Glossary term | 265 KB | 873 KB | 52 KB | 0 |

- **Layout shift is under the 0.1 threshold** everywhere.
- **The heavy libraries are lazy-loaded.** Mermaid (640 KB raw) and KaTeX don't load on the glossary page.
- **The baseline is still high for read-only pages:** a 60-word definition ships 265 KB of compressed JavaScript. Worth checking what the root layout pulls into every page (nav, command palette, sync, PostHog, onboarding).
- **LCP couldn't be measured** because the preview browser runs in the background. Check real Core Web Vitals in Search Console, or run PageSpeed Insights on the live URLs.

## Measurement to set up

1. **Search Console and Bing Webmaster Tools.** Verify the site and submit the sitemap. No verification meta tag was found, so it is either verified another way or not at all. Watch the "Discovered, not indexed" count for `/projects/*` before and after fix 1.
2. **AI referrals in PostHog.** Segment sessions whose referrer is chatgpt.com, perplexity.ai, claude.ai, gemini.google.com or copilot.microsoft.com. The local PostHog key is empty, so confirm it is set in Vercel.
3. **Citation tracking.** Once a month, ask the main AI assistants 20 fixed marketing questions the lessons answer, and log whether Marketing Academy is cited.
4. **IndexNow.** Bing and Yandex accept instant URL submission. A small route that pings IndexNow on deploy would get new lessons seen faster.

## Appendix: page inventory from the crawl

| Type | Pages | In sitemap | Notes |
|---|---|---|---|
| Lessons | 642 canonical + 13 cross-listed | 642 | cross-listed URLs correctly canonicalise and stay out of the sitemap |
| Projects | 803 | 803 | rendered on demand (ISR) and cached |
| Glossary terms | 158 | 158 | |
| Tracks | 26 | 26 | includes the 2 added today |
| Certificates | 26 | 26 | noindex, should leave the sitemap |
| Categories, cheat sheets | 21 each | 21 each | |
| Interview categories | 16 | 16 | |
| Comparisons | 7 | 7 | hard-coded list |
| Static | 19 | 18 | |

The crawl, analysis and content scripts used for this audit were run from a temporary folder and are not part of the repo.
