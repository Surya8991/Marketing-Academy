# SEO, AEO and GEO fix plan: Marketing Academy

Plan for the 12 fixes in [SEO_AEO_GEO_AUDIT_2026-11-20.md](SEO_AEO_GEO_AUDIT_2026-11-20.md). Approved 2026-11-20 ("Yes, do fix all of these"). Nothing here is committed or pushed until the owner asks.

**Status (2026-11-20):** steps 1-7 done and pushed to `main`; step 8 (owner questions) open. Deviations from the plan: the shared helpers live in `src/lib/site.ts` (not `env.ts`); lessons are not linked to the 7 comparison pages (low value, skipped); the `/about` Organization lists the founder already named in the page's own text, but lessons still carry the Organization as author.

## Scope, and what needs the owner

| # | Fix | Done by | Waiting on the owner |
|---|---|---|---|
| 1 | Project links in server HTML | Code | No |
| 2 | Real per-lesson dates | Code + generated data | No |
| 3 | Source links for 369 unsourced lessons | Content research | **Yes:** how far to take it (cost and time), asked after everything else ships |
| 4 | One H1 per lesson | Code | No |
| 5 | No noindexed URLs in the sitemap | Code | No |
| 6 | Share image on every page | Code | No |
| 7 | Better titles and descriptions | Code | No |
| 8 | Internal links to hidden hubs | Code | No |
| 9 | Fuller glossary pages | Content (agents) + code | No |
| 10 | FAQs on the top 50 lessons | Content (agents) + code | No |
| 11 | Who's behind the site | Code | **Yes:** whose name goes on lessons as a `Person` author, and which official profiles go in `sameAs` |
| 12 | Custom domain | Code (one `SITE_URL`) | **Yes:** buying the domain and adding it in Vercel |

## Work steps

### Step 1. Sitemap cleanup and real lesson dates (fixes 2, 5)
- `src/app/sitemap.ts`: remove `certificateRoutes`, `/certificates`, `/search`, `/skill-map`. Stop giving every URL the build date as `lastmod`; use real dates for lessons and omit `lastModified` where no real date exists.
- New `scripts/lesson-dates.mjs` writes `src/lib/lesson-dates.ts` (`{ "category/slug": { published, updated } }`) from local git history. It skips mass-sweep commits that touched more than 100 MDX files (the 2026-11-20 regional-link sweep touched all 642), so `updated` reflects real content edits. Generated locally because Vercel's shallow clone has no history at build time.
- Lesson page: `datePublished` + `dateModified` in the JSON-LD from that map (replaces the hard-coded `"2026-07-04"`), and a visible `<time>` in place of the hard-coded "UPDATED JUN 2026".

### Step 2. One H1, better titles and descriptions (fixes 4, 7)
- `mdx-components.tsx`: map `h1` to render nothing; drop the `[&>h1:first-of-type]:hidden` class from the lesson page. Safe: the only other `#` lines in MDX sit inside code blocks.
- Homepage `<title>` gets a keyword phrase.
- Project titles: drop "(Project)"; when name + brand suffix passes 60 characters, use `{ absolute }` without the suffix. Project description from `objective` / `keyQuestion`.
- Category pages: descriptive title instead of the bare category name ("SEO").
- Descriptions over 160 characters trimmed at a word boundary; under 70 enriched.

### Step 3. Share images, logo, About structured data (fixes 6, 11)
- `openGraph.images` from `/api/og` plus `twitter.card: "summary_large_image"` on project, track and category pages, and on `/tools`, `/projects`, `/interview-prep`, `/tools/geo-audit`.
- A 512×512 PNG logo; Organization `logo` points at it instead of `favicon.ico`.
- `/about`: `AboutPage` + `Organization` JSON-LD.
- Not done without the owner: `Person` author, new `sameAs` profiles.

### Step 4. Server-rendered project and hub links (fixes 1, 8)
- `src/components/ProjectList.tsx`: always render the project cards, hidden with `hidden={!open}` while collapsed, so every project's "Open project" link is in the lesson's server HTML. Gives each of the 794 orphaned projects an inlink from its own lesson. The `/projects` hub's client pagination stays as is.
- `src/components/Footer.tsx`: links to `/resources`, `/interview-prep`, `/search`, `/tools/geo-audit`.
- Category page: link to its cheat sheet and the tracks that use it.

### Step 5. One `SITE_URL` instead of 26 copies (fix 12, code half)
- One constant (env `NEXT_PUBLIC_SITE_URL`, falling back to the current Vercel URL) in `src/lib/`; replace the 26 hard-coded copies. The certificate footer's display text uses its host. Moving to a custom domain then becomes one env var plus a Vercel domain with 308 redirects.

### Step 6. Glossary pages and lesson FAQs (fixes 9, 10)
- Six background agents, running now:
  - 3 glossary agents write `whyItMatters`, `example` and 1-3 lesson links per term (158 terms) to scratchpad JSON. Illustrative arithmetic only, no invented statistics.
  - 3 FAQ agents add a `## Frequently Asked Questions` section (4 `###` questions, answers drawn only from that lesson) to the 50 most-linked lessons. They never rename existing headings, since project `lessonAnchor`s depend on them.
- Code: optional `whyItMatters?`, `example?`, `lessons?` on `GlossaryTerm`, merged from the agent output and rendered on the term page; a test that every glossary lesson link resolves.
- Lesson page parses the FAQ section from the raw MDX it already reads (for reading time) and emits `FAQPage` JSON-LD.

### Step 7. Verify and document
- `tsc` → `eslint` → `npm test` → `npm run build` (build in the background).
- Local production check on port 3005 (unregister the service worker first): one H1, dates, FAQ JSON-LD, project links present while collapsed, og:image tags, sitemap contents. Re-run the audit's crawl and analysis scripts to compare against the baseline numbers.
- Docs: AGENTS.md rules (lesson-dates script, `h1` mapping, FAQ format feeds JSON-LD, `SITE_URL`), `docs/PROJECT_LOG.md` session row, README Key Files.

### Step 8. Ask the owner
- Fix 3 scope: all 369 lessons, the affiliate-marketing category first, or the highest-traffic lessons only.
- Fix 11: the `Person` author name and the official profile URLs.
- Fix 12: the domain, once bought.
- Whether to commit and open a PR.
