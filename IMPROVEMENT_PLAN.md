# Marketing Academy — Improvement Plan (Multi-Perspective Audit)

> Compiled 2026-09-17 (Session 88). A full audit across 8 stakeholder perspectives —
> learner, SEO/growth, performance, accessibility, privacy/security, business,
> maintainer, and AEO/GEO. Items are prioritized P0 (do first) → P2 (nice to have).
> This is an **execution tracker**: check items off as they ship. Product/compliance
> decisions are flagged `⚠️ DECISION` and must NOT be auto-executed without owner sign-off.

**Verified findings** (re-checked against source, not just reported): the canonical bug,
the `CATEGORY_INDEX` bundle regression, no `llms.txt`, no monetization/lead-capture.

---

## ⭐ Recommended priority — remaining open work (2026-09-17)

Interlink map (#22) is deliberately **LAST** (largest task). Owner-requested features first.

**Tier 1 — Owner-requested features (do next)**
1. **#23 Quiz: revisable answers + review-before-submit** — small, self-contained, high UX.
2. **#24 + #25 + #27 Profile cluster** — build in the design's A→B→C order: shared foundation (`profile-stats.ts`, `profile.ts`, `<StatsRow>`) → `/profile` hub → Settings cards + onboarding capture + autosave indicator/guest nudge.
3. **#26 Email magic-link auth (Gmail SMTP)** — pairs with the profile/account work; can run in parallel with #25.
4. **#28 Re-engagement email** — after #26.

**Tier 2 — SEO/AEO + growth**
5. **#10 Global search** covers glossary/tools/projects (not just lessons+tracks).
6. **#6d Blog build** (design ready; also lands #9 author/date signals on fresh content).
7. **#2 remaining freshness** — lesson byline + Article `dateModified`/`datePublished`; `digital-marketing-cheat-sheet` 2026 data refresh.
8. **#6c / #6 remaining** — meta-description quality; glossary-list `ItemList`/`DefinedTermSet`.

**Tier 3 — Perf / polish / decisions**
9. **#12 Client-bundle trims** — `CASE_COMPANIES`/`TOOLS`/`PROJECTS_INDEX` off the client.
10. **#13 Route loading skeletons.**
11. **#14 IA dedup** — `/interview-prep` vs `/interview-questions`, cheat-sheet routes.
12. **#16 `bigProject` XP** `⚠️ decision` — wire capstone or drop the tier.

**Tier 4 — LAST (large batch)**
13. **#22 Per-lesson interlink map** (642 lessons; 9 SEO done, resume category-by-category on Sonnet).

*(Done this session: #1, #3, #4, #5, #6, #6b, #8, #11, #15, #18, #19, #20, #2 sitemap half.)*

---

## Execution order (master checklist)

### P0 — High impact, self-contained, clearly correct
- [x] **1. SEO canonical bug** — ✅ DONE (2026-09-17). Removed blanket `canonical: BASE` from `layout.tsx`; added self-canonicals to homepage + 15 content pages (glossary list/[slug], interview-questions list/[category], interview-prep, cheat-sheets list/[category], digital-marketing-cheat-sheet, tools, tools/geo-audit, about, resources, compare, learn, search). Verified in browser: `/`→`/`, `/about`→`/about`, `/glossary`→`/glossary`. *(Also the #1 AEO/GEO citability fix.)*
- [x] **2. Sitemap completeness + freshness** — ✅ DONE (2026-09-17). Added 803 project pages + `/projects` + `/tools/geo-audit`; `lastModified` now uses the build date (was frozen `2026-07-04`). Verified: sitemap.xml = 1,734 URLs, lastmod = today. **Still open (separate freshness signals):** the hardcoded lesson byline "UPDATED JUN 2026" + Article `dateModified`, and the `digital-marketing-cheat-sheet` 2025 data refresh — tracked in Perspective 9.
- [x] **3. `llms.txt`** — ✅ DONE (2026-09-17). `src/app/llms.txt/route.ts` serves an llmstxt.org-format manifest generated live from the curriculum (disciplines, tracks, reference hubs). Verified at `/llms.txt`. Dogfoods the `llms-txt-ai-crawler-management` lesson.
- [x] **4. Certificate name field** — ✅ DONE (2026-09-17). New `src/lib/cert-name.ts` (`ma_cert_name`, dispatches `PROGRESS_CHANGED_EVENT`, registered in `progress-snapshot` EXPORT_KEYS so it syncs/exports). Cert page has a "Name on certificate" input (no-print) that renders the name onto the certificate (serif, above the signature line); falls back to the blank line when empty. Verified in-browser end-to-end ("Awarded to: Arvind Kumar", 100% eligible).
- [x] **5. `CATEGORY_INDEX` true slim module** — ✅ DONE (2026-09-17). New `src/lib/category-index.ts` is a standalone literal (no `CATEGORIES` import); `Nav` imports from it, and the derived version was removed from `curriculum.ts`. Drift-guarded by `tests/category-index.test.ts` (asserts it matches `CATEGORIES` exactly). This removes ~148 KB of curriculum from **every** route's client bundle. `tsc` + 66/66 tests pass; Nav verified.

### P1 — Real gaps, moderate effort
- [x] **6. Structured data gaps** — ✅ DONE (2026-09-17). Added `BreadcrumbList` JSON-LD to `compare/[slug]`, `cheat-sheets/[category]`, `digital-marketing-cheat-sheet`, and `projects/[category]/[slug]` (+ a `LearningResource` schema on project pages). Verified in browser. *(Glossary-list `ItemList`/`DefinedTermSet` — minor, deferred; individual terms already carry `DefinedTerm`.)*
- [x] **6b. Title double-suffix bug (~30 pages)** — ✅ DONE (2026-09-17). Stripped `| Marketing Academy` from the **document** title on 30 pages (left `openGraph.title` branded, since the template doesn't apply there). Verified in browser: `/about` → "About | Marketing Academy" (was doubled). `tsc`/lint clean. *(See Perspective 9.)*
- [ ] **6c. Meta description quality** — `glossary/[slug]` description is a hard `slice(0,155)` (cuts mid-word); interior pages (glossary term, interview category, cheat-sheet category, compare) set no page-specific `openGraph`/image → generic social cards.
- [ ] **6d. Blog / articles hub** — ✅ APPROVED by owner (2026-09-17), design below; build queued as a future task. A content-education site has no fresh-article surface — the most linkable, AI-citable, keyword-targetable content shape. See **"Blog design"** section below.
- [ ] **6e. Interlinking depth** — `/learn` index links only 5 lessons/category (`PREVIEW_COUNT`), so 642 lessons sit 3 clicks deep with no master index; no topical-cluster hubs; contextual in-body cross-links between related lessons are sparse (only the structured RelatedLessons/RelatedConcepts blocks). *(See Perspective 9.)*
- [ ] **7. In-place core navigation** — make lesson Prev/Next + "Continue where you left off" navigate in the same tab (keep cross-references new-tab).
- [x] **8. Accessibility fixes** — ✅ DONE (2026-09-17). `error.tsx` red box → theme-aware rgba; search input `type=search` + `aria-label`; notes textarea `aria-label`; `Callout` label text → `--foreground` (was failing-AA `-500` on tint, icon stays brand-coloured). Newsletter `aria-live` moot (component deleted). Verified in browser. `tsc`/lint clean.
- [ ] **9. Author/citability signals (AEO)** — Article `datePublished` + named `Person` author (E-E-A-T); render `lessonMeta.summary` as an extractable TL;DR/direct-answer block.
- [ ] **10. Global search scope** — add glossary (158), tools (157), projects (803) to `/search` + ⌘K (currently lessons + tracks only).
- [x] **11. `robots.ts`** — ✅ DONE (2026-09-17). `disallow` `/api/` + 8 personal routes; added `robots: { index: false }` metadata to achievements/settings/account/login/skill-map/certificates(+[slug] via a new server layout)/search. Verified: robots.txt + `/settings` `noindex, nofollow`.
- [ ] **12. `CASE_COMPANIES` / `PROJECTS_INDEX` / `TOOLS` client-bundle trimming** — pass minimal props instead of importing full data modules into `"use client"` files.

### P2 — Polish / cleanup / decisions
- [ ] **13. Route `loading.tsx` skeletons** — client pages flash blank divs.
- [ ] **14. IA de-duplication** — `/interview-prep` vs `/interview-questions`; `/cheat-sheets` vs `/digital-marketing-cheat-sheet`. Pick canonical + cross-link.
- [x] **15. `/compare/[slug]` "coming soon" copy** — ✅ DONE (2026-09-17). Replaced the "coming soon" promise with an honest label + a cross-link to the comparisons hub.
- [ ] **16. `bigProject` XP tier (100 XP) unreachable** `⚠️ DECISION` — defined in `engagement.ts` but no project awards it. Needs a product call: designate capstone projects to grant it, or drop the tier. Left open.
- [ ] **17. Dead newsletter code** — orphaned component + 501 endpoint. Finish or delete. *(see #20)*
- [x] **18. Doc drift** — ✅ DONE (2026-09-17). README routes table: added `/review`, `/compare`(+`/[slug]`), `/tools/geo-audit`, `/quizzes`, `/llms.txt`, `/robots.txt`. AGENTS.md Rule 41's now-false claim is corrected by the new `category-index.ts` module + Rule 79/#5 note. *(A dedicated Rule 41 amendment is optional follow-up.)*
- [x] **19. PostHog consent** — ✅ DONE (2026-09-17, owner: disable autocapture). `layout.tsx` init now sets `autocapture:false, disable_session_recording:true, respect_dnt:true` (keeps only the PII-free explicit `capture()` events + pageleave). No banner needed.
- [x] **20. Monetization / newsletter** — ✅ DONE (2026-09-17, owner: remove dead code). Deleted orphaned `NewsletterSignup.tsx` + `/api/newsletter` (501 stub). README updated. *(Broader monetization/audience-capture strategy remains an open owner decision — no code path today.)*
- [ ] **21. `⚠️ DECISION` — `/api/geo-audit` abuse vector** — unauthenticated, in-memory rate limit, proxies paid Groq. Needs a decision (auth-gate, shared-store limit, or usage cap).

### 🏁 LAST — largest task (run after everything above)
- [ ] **22. Per-lesson interlink map (642 lessons)** `🏁 FINAL / HUGE` — **IN PROGRESS.** For **each lesson**, weave **2–3 internal links** (to related lessons/glossary) and **2–3 external authoritative links** **INLINE into the article body** (owner clarification 2026-09-17: contextual anchors in the prose, NOT end sections like "## Related Concepts"/"## Further Reading").
  - **The load-bearing safety rule:** only turn an **existing phrase already in the sentence** into a link (`[existing phrase](/learn/cat/slug)`). **Never rewrite, rephrase, or add sentences.** This keeps prose byte-identical except for link syntax → safe at 642-file scale.
  - Internal targets come from the lesson's own category list (+ adjacent categories/glossary); slugs MUST resolve. External links: most lessons already have inline external links (Rule 11 research) — leave them (the `rehype-external-links` plugin now makes all external links open in a new tab with `rel=noopener`); only add 2–3 (linkifying existing phrases to the lesson's own ResourceList URLs) if the body has fewer than ~2.
  - Placement: inline in `<p>`/`<li>` body text. Do NOT touch `lessonMeta`, `<Callout>`, `<Mermaid>` labels, `<InAction>`, or `<ResourceList>`. Strengthens topical clustering, crawl depth (#6e), AEO citability.
  - **Execution:** batched subagents category-by-category (Rule 56). Toolchain ready: `rehype-external-links` added. Pilot done: `seo/content-decay-refresh.mdx` (3 internal links woven in). Fan-out started with the SEO category.

### After the interlink map (owner-added 2026-09-17)
- [ ] **23. Quiz: revisable answers + full review before submit** — let a learner **change a selection before the final submit** and **review all their answers** on a summary step before grading. Nuance to reconcile: the current quiz locks each answer on click and reveals correctness only on the finished screen (anti-farming, Rule 25/40) — so "reselect" must mean *revise your pick before submitting* (no mid-quiz correctness reveal), and a "Review your answers" step before "See Results" lets them confirm/change each one. Do NOT reintroduce per-question correctness reveal mid-quiz. Touches `Quiz.tsx` (add editable selections + a pre-submit review screen).
- [ ] **24. New-user profile capture** — on first visit, ask the learner for their **name + a few light personal details** (name, role/goal — extend `OnboardingModal`, which today only asks a goal and stores nothing but `ma_onboarded`), persisted to a profile viewable/editable on **`/settings`** and the new **`/profile`** hub. Reuse `cert-name.ts`'s `ma_cert_name` for the name (already syncs) and add `src/lib/profile.ts` (role, experience level, goals) via `progress-snapshot` EXPORT_KEYS (Rules 18/77). Auto-fills the certificate name field (#4). Skippable — the "no sign-up wall" promise holds (local, optional). **See "Profile, Settings & Accounts design" below.**
- [ ] **25. `/profile` — Personal Profile hub** `⭐ owner-requested` — one dashboard aggregating everything currently scattered across `/achievements`, `/skill-map`, `/portfolio`, `/certificates`, `/account`. Analytics (level/XP/streak/heatmap/timeline, completion %, quizzes/projects/bookmarks/notes/review-due), badges (12), certificates earned, profile identity. Needs a shared `src/lib/profile-stats.ts` aggregator + `<StatsRow>` component to kill 3× duplicated stat derivations. `noindex`. **See design below.**
- [ ] **26. Auth / login: Google (exists) + email magic-link (SMTP)** `⭐ owner-requested` — Google OAuth **already exists** (NextAuth v5, `src/auth.ts`, env-gated); just needs `AUTH_SECRET`+`GOOGLE_CLIENT_ID`/`SECRET` set to activate. ADD an **email magic-link** provider (works with Google/Gmail SMTP or a transactional provider). The `verificationTokens` DB table already exists (zero schema change). **See design below.**
- [ ] **27. Autosave trust + guest data-loss nudge** — autosave IS present (local instant; cloud auto-push 2s when signed in) but invisible + guests have no cloud backup. Add a subtle "Saved • synced" indicator and a gentle "sign in to save across devices" prompt after a milestone (e.g. first lesson complete). Pairs with #25/#26.
- [ ] **28. Re-engagement email** `depends on #26` — the newsletter was removed (#20), so there's no channel to bring learners back. Once email auth (#26) exists, add opt-in transactional emails: streak-about-to-break reminder, "resume {last lesson}", weekly progress digest. Uses the same mailer as #26 (Gmail SMTP for low volume; a transactional provider is the upgrade path). Strictly opt-in + one-click unsubscribe (respect the no-spam ethos). *(Optional sibling, not building now: a shareable public profile / "share my achievements" — adds real privacy scope; flag before pursuing.)*

---

## Perspective 1 — Learner (UX)

Mature: progress, XP/streak, achievements, spaced review, projects, tracks, sync all work.

| # | Finding | Ref |
|---|---|---|
| 4 | Certificate "Awarded to:" is a blank `<span>` — no name on the shareable cert | `certificates/[slug]/page.tsx:362` |
| 7 | Prev/Next + "Continue where you left off" open new tabs → fragments the reading session | `[lesson]/page.tsx:331,349`, `RecentlyViewed.tsx:30` |
| 10 | Global search covers only lessons + tracks; glossary/tools/projects unfindable | `search/SearchClient.tsx` |
| 13 | No `loading.tsx` anywhere → blank flashes on client pages | (all routes) |
| 16 | `bigProject` (100 XP) defined but never awarded | `ProjectCard.tsx:175`, `engagement.ts` |

## Perspective 2 — SEO / Organic Growth  *(biggest lever)*

| # | Finding | Ref |
|---|---|---|
| 1 | **Sitewide canonical → homepage.** ~all glossary/hub/reference pages inherit `canonical: BASE` | `layout.tsx:53` (verified) |
| 6 | `compare/[slug]`, `cheat-sheets/[category]`, `digital-marketing-cheat-sheet`, `projects/*` emit no JSON-LD/breadcrumbs | (those routes) |
| 2 | 803 project pages + projects hub indexable but absent from sitemap | `sitemap.ts` |
| 2 | Frozen freshness: sitemap lastmod, Article `dateModified` all hardcoded `2026-07-04`; byline "UPDATED JUN 2026"; one page says 2025 | `sitemap.ts:10`, `[lesson]/page.tsx:157,241`, `digital-marketing-cheat-sheet/page.tsx:41` |
| 11 | `robots.ts` no `disallow`; personal pages (achievements/settings/account/login) indexable | `robots.ts`, `achievements/page.tsx:4` |
| 14 | Two interview hubs + two cheat-sheet routes, no self-canonical/disambiguation | — |
| — | Lesson `generateMetadata` fails silently to `{}`; title falls back to slug, no description if `lessonMeta` incomplete | `[lesson]/page.tsx:42,66` |

## Perspective 3 — Performance / Core Web Vitals

| # | Finding | Ref |
|---|---|---|
| 5 | **`CATEGORY_INDEX` derives from full `CATEGORIES`** → ~148 KB curriculum ships every route (Rule 41 fix defeated) | `curriculum.ts:924` (verified) |
| 12 | `CASE_COMPANIES` (~98 KB) → client via ProjectCard/PortfolioClient/ProjectsClient | `ProjectCard.tsx:58` |
| 12 | `/projects` hydrates full 436 KB `PROJECTS_INDEX` as a prop | `projects/page.tsx:67` |
| 12 | `TOOLS` (~56 KB) → client (ToolStack/CompareSelector); full `CATEGORIES` → client (Search/SkillMap/Bookmarks/SurpriseMe) | `ToolStack.tsx:24`, `SearchClient.tsx:6` |
| — | 5 `next/font` families; Nav avatar `<img>` missing width/height | `layout.tsx:16-30`, `Nav.tsx:440` |

**Strong (leave alone):** `quizzes.ts`/`lesson-resources.ts` server boundaries hold; Mermaid/CommandPalette/PostHog lazy; full SSG; SW network-first + prod-only.

## Perspective 4 — Accessibility (WCAG)

Strong base: skip link, focus traps, reduced-motion, ARIA combobox, icon+text in quizzes.

| # | Finding | Ref |
|---|---|---|
| 8 | `error.tsx` `bg-red-50`/`text-red-500` → near-white box in dark mode (Rule 19) | `error.tsx:21` |
| 8 | Main search input + notes textarea: placeholder only, no label/aria-label | `SearchClient.tsx:111`, `LessonNotes.tsx:108` |
| 8 | Newsletter success/error messages have no `aria-live` | `NewsletterSignup.tsx:68` |
| 8 | `Callout` label colors `text-amber-500`/`green-500` fail AA on tint | `Callout.tsx:7-11` |
| — | Content emojis not `aria-hidden` (low severity) | `OnboardingModal.tsx:170` |

## Perspective 5 — Privacy / Security (end user)

Strong: full security headers/CSP, hardened auth session allow-list, `rel="noopener"` everywhere, no PII in URLs, DOMPurify-locked Mermaid, PII-free explicit analytics.

| # | Finding | Ref |
|---|---|---|
| 19 | PostHog autocapture on, no consent/DNT → GDPR exposure | `layout.tsx:129` |
| 21 | `/api/geo-audit` unauthenticated + in-memory rate limit, proxies paid Groq | `geo-audit/route.ts:115,220` |
| — | Private notes synced server-side in plaintext (auth-gated, disclosed) | `progress-snapshot.ts:37` |
| — | Admin-self-delete guard reads `session.user.role` (always undefined now) | `account/delete/route.ts:12` |

## Perspective 6 — Business / Owner

- **No monetization and no audience capture.** Huge content asset (642 lessons, 803 projects), the only lead-capture surface (newsletter) is dead code (component unrendered, endpoint 501). Combined with the canonical bug throttling organic reach → no growth loop. `⚠️ DECISION` (#20).

## Perspective 7 — Maintainer / Code Health

- Excellent CI (71 tests + git-identity guard); data-integrity test suite is a real strength.
- **AGENTS.md is 78 rules** — heavy tacit-knowledge load; docs starting to drift (routes table incomplete; Rule 41 claim now false). `quizzes.ts` 2.4 MB single file remains the structural smell. (#18)

## Perspective 8 — AEO / GEO (Answer/Generative Engine Optimization)

Assessed against the project's **own** geo-audit 6-signal framework (`GeoAuditClient.tsx:33-48`). The site teaches AEO/GEO but doesn't apply it to itself.

| Signal (their framework) | Site's own state | Action |
|---|---|---|
| **entity_coverage** (named stats/tools/dates) | Strong — Rule 11 mandates real research + `InAction` named companies | keep |
| **citability** (authorship, quotable, attributable) | **Weak** — Article author is `Organization` only, no `datePublished`, generic byline | #9 |
| **structured_data** (lists/tables/FAQ/steps) | Mixed — FAQPage + DefinedTerm good; compare/cheat-sheets/projects have none | #6 |
| **direct_answers** (specific factual answers) | Weak — lessons are prose; no extractable TL;DR at top (`lessonMeta.summary` unused as answer block) | #9 |
| **brand_signals** (consistent identity) | OK | keep |
| **content_depth** (definitive source) | Strong — 800–2000 word researched lessons | keep |

**Cross-cutting AEO/GEO gaps:**
- **#3 No `llms.txt`** — the emerging AI-crawler manifest; the site has a whole lesson on it. Biggest dogfooding miss.
- **#1 Canonical bug directly kills GEO citability** of every reference page (AI engines drop pages that self-declare as homepage duplicates).
- **Freshness (#2)** — AI answer engines favor recent content; frozen dates hurt.
- `robots.ts` allows AI crawlers by default (fine) but no explicit intent signal; an `llms.txt` covers this.

## Perspective 9 — Meta tags, content hub, page sections & interlinking

Added 2026-09-17 per owner request. Some overlaps with SEO/AEO above; collected here for the "meta tags / blogs / layouts / interlinking" review.

### Meta tags
| # | Finding | Ref |
|---|---|---|
| 6b | **Title double-suffix on ~30 pages** — hardcoded `\| Marketing Academy` + template `%s \| Marketing Academy` → doubled. Confirmed live on `/about` | `about/page.tsx:11`, `cheat-sheets/page.tsx`, `compare/*`, `interview-*`, `learn/[category]`, `certificates`, `bookmarks`, `portfolio`, etc. (30 files) |
| 6c | `glossary/[slug]` description `slice(0,155)` cuts mid-word | `glossary/[slug]/page.tsx:20` |
| 6c | Interior pages set no page-specific `openGraph`/image → generic social cards | glossary term, interview category, cheat-sheet category, compare |
| 2 | Title year drift: `digital-marketing-cheat-sheet` says 2025 throughout (title + H1 + benchmark tables). Deferred to #2 — needs a real **data refresh** (updating the 2025 benchmark numbers), not a find-replace, so the page stays internally consistent | `digital-marketing-cheat-sheet/page.tsx` |
| — | Lesson `generateMetadata` fails silent → `{}` (no title/desc) if MDX import throws | `[lesson]/page.tsx:66` |

### Blog / content hub  `⚠️ DECISION`
- **No `/blog`, `/news`, `/changelog`, `/guides` route.** For organic + AEO growth, article-shaped content is the highest-leverage surface (fresh, dated, linkable, `Article`/`FAQ` schema, AI-citable). Options: (a) a lightweight `/blog` MDX section reusing the lesson pipeline; (b) a `/changelog` or "What's New" page (also a freshness signal); (c) topical "guide" hub pages that cluster related lessons. Needs an owner decision on scope.

### Page layouts & sections
- **Lesson page** is rich (ToC, quiz, projects, notes, resources, related, breadcrumbs). Missing for SEO/AEO/E-E-A-T: a visible **author/byline with a real Person**, an accurate **"Last updated" date** (currently hardcoded "UPDATED JUN 2026"), and a short **TL;DR / key-takeaway answer block at the top** (great for AI extraction; `lessonMeta.summary` already exists, just not rendered as a lead answer).
- **Category & track pages** lack an intro paragraph / FAQ section that would target head terms and add crawlable context.
- **Glossary list** has no `DefinedTermSet`/`ItemList` schema and no cross-links from lessons to relevant glossary terms.
- **Homepage** sections are strong (hero, differentiators, tracks, featured, recent).

### Interlinking / crawlability
| # | Finding | Ref |
|---|---|---|
| 6e | `/learn` index links only 5 lessons/category (`PREVIEW_COUNT=5`) → 642 lessons 3 clicks deep, no full master index | `learn/page.tsx:20` |
| 7 | Sitewide `target="_blank"` on internal lesson links (incl. Prev/Next) fragments sessions + dwell signals | many (see Perspective 1/2) |
| — | No topical-cluster hub pages (pillar→cluster internal-linking model) | — |
| — | No in-body contextual cross-links between related lessons (only structured Related blocks) | — |
| — | No lesson→glossary term auto-linking (glossary terms are orphaned from lesson bodies) | — |
| ✓ | Strong: breadcrumbs (visible + JSON-LD), RelatedLessons, RelatedConcepts, all `next/link` crawlable | — |

---

## Blog design (#6d — approved 2026-09-17, build queued)

A lightweight MDX articles hub that reuses the existing lesson/MDX pipeline (no new CMS). Goal: a fresh, dated, keyword-targeted, AI-citable content surface that feeds organic + AEO growth (the gap in Perspective 6/8/9).

**Routes**
- `/blog` — index: reverse-chronological article cards (title, date, reading time, tag, excerpt). Paginated at ~12/page.
- `/blog/[slug]` — article reader: reuses the lesson prose system (`Callout`/`Mermaid`/`ResourceList`), plus a visible **author byline + published/updated dates** (this is where #9's E-E-A-T author/date signals land first, on new content, rather than retrofitting 642 lessons).
- `/blog/tag/[tag]` — optional tag archives (topical clustering).

**Content model** (`src/content/blog/*.mdx`, mirroring lessons)
```ts
export const postMeta = {
  title: "…",
  description: "…",            // single quotes for inner quotes (Rule 1)
  publishedAt: "2026-09-20",   // REAL per-post date — drives sitemap lastmod + Article dates
  updatedAt: "2026-09-20",
  author: "…",                 // named Person → Article.author (E-E-A-T)
  tags: ["seo", "ai-search"],
  hero?: "…",
};
```

**Wiring**
- `src/lib/blog.ts`: read `postMeta` + reading time (mirror the lesson loader); `getAllPosts()` / `getPostBySlug()`.
- **SEO**: `Article` JSON-LD with a real `datePublished`/`dateModified` + `author` Person; `BreadcrumbList`; self-canonical; add posts to `sitemap.ts` with their real `publishedAt` lastmod; add a `/blog` section to `llms.txt`.
- **Feed**: extend the existing `/feed.xml` to include blog posts.
- **Interlinking**: each post links out to 2–3 related lessons (feeds the pillar→cluster model in #6e / #22); the homepage gets a "Latest from the blog" strip.

**Guardrails**: same content-quality rules as lessons (Rule 11 real research, Rule 1 MDX quoting). Start with 3–5 seed posts on high-intent 2026 topics (e.g. AI Overviews, GEO, zero-click search) drawn from `BACKLOG.md`. This also becomes the natural home for the #9 author/date signals on fresh content instead of a mass 642-lesson retrofit.

## Profile, Settings & Accounts — design (owner-requested 2026-09-17)

Decisions (owner): profile works for **guests + signed-in**; `/profile` is a **hub that aggregates + links** (existing pages stay); email sign-in uses **Gmail/Google SMTP**; capture **name + role + experience level + primary goal**. Everything below is derivable from data that already exists (see the inventory) — mostly an aggregation + visualization layer, not new tracking.

### A. Shared data foundation (build FIRST — everything depends on it)
- **`src/lib/profile.ts`** — persona fields `{ role, experienceLevel, primaryGoal }` under key `ma_profile`; add to `progress-snapshot` `EXPORT_KEYS` (Rules 18/77, so it syncs/exports/resets). **Name stays in `cert-name.ts`** (`ma_cert_name`, already syncs + auto-fills the certificate) — profile.ts references it, no duplicate key.
- **`src/lib/profile-stats.ts`** — one `getProfileStats()` aggregator returning ALL derived stats: `lessonsDone`, `overallPct`, `perCategory[]`, `quizzesPassed`, `projectsDone`+`projectHours`, `bookmarks`, `notesCount`, `reviewDue`+`lapses`, `xp`, `level`+`title`, `streak`, `longestStreak`, `badges {unlocked,total}`, `certificatesEarned[]`, `xpByDay`, `recentActivity[]` (from `xpLog`). **Kills the 3× duplicated derivations** (SkillMap/Achievements/Portfolio/certificates each re-derive today). Those pages can later refactor to use it.
- **`<StatTile>` / `<StatsRow>`** shared component — the `code/value/label` tile grid is hand-duplicated in AchievementsClient, SkillMapClient, about/page. One component.

### B. `/profile` — the hub (guest + signed-in, `noindex`, new-tab convention N/A)
1. **Identity header** — name (profile/cert-name, or Google `session.user.name`), avatar (Google `image` or an initial), `role · experience level`, level title + XP progress bar, streak flame, signed-in status. "Edit" → Settings.
2. **Analytics tiles** (`<StatsRow>`): lessons done + overall %, quizzes passed, projects done, current streak, longest streak, total XP, badges X/12, certificates earned, review-due.
3. **Activity heatmap** — GitHub-style calendar from `xpByDay` (data exists, never rendered anywhere today). New `<ActivityHeatmap>`.
4. **Recent activity timeline** — from `xpLog` (last ~15: "Completed {lesson}", "Passed quiz", "Finished project").
5. **Progress by discipline** — top categories via `profile-stats`, link to `/skill-map`.
6. **Achievements preview** — earned badges + count, link to `/achievements`.
7. **Certificates + portfolio snapshot** — earned certs, completed-project count/hours; links to `/certificates`, `/portfolio`.
8. **Bookmarks + notes** — counts, links to `/bookmarks`.
9. **Guest state** — if not signed in (and auth configured): a "Sign in to save across devices" card (#27).
- **Nav**: add a profile/avatar entry point (currently only a sign-in link / account menu).

### C. Settings improvements (`/settings` today is only Export/Import/Sync/Reset)
Add cards, keep the existing four:
1. **Profile Details** — edit name + role + experience level + primary goal (writes `profile.ts` + `cert-name.ts`).
2. **Account** — sign-in status (email/avatar or a Sign-in button), last-synced time, link to `/account` (sessions/delete).
3. **Preferences** — theme control (today only in Nav), optional default-landing.
4. **Autosave/status line** — surfaces #27's "Saved • synced" state so Settings answers "is my data safe?".
Also migrate SettingsClient off inline styles toward the app's token classes where cheap (consistency).

### D. Auth: Google (exists) + Gmail SMTP magic-link (#26)
- **Google OAuth already works** — `src/auth.ts` conditionally includes it; activate by setting `AUTH_SECRET` + `GOOGLE_CLIENT_ID`/`SECRET`. No build needed, just env + Google Cloud OAuth client + redirect URIs.
- **Add email magic-link** (passwordless — no password storage):
  - Dep: `nodemailer` (NextAuth Email provider transport). Not currently installed.
  - `env.ts`: add `EMAIL_SERVER` (e.g. `smtp://you%40gmail.com:APP_PASSWORD@smtp.gmail.com:587`) + `EMAIL_FROM`; add an `emailAuthConfigured()` gate separate from Google's `authConfigured()`.
  - `auth.ts`: conditionally add `Email({ server, from })` to `providers`.
  - `login/page.tsx` + `SignInButton.tsx`: add an email-input form → `signIn("email", { email })`; show a provider picker when both Google + email are configured.
  - `Nav.tsx`: the two hardcoded `signIn("google")` calls → route to the `/login` picker when email is also enabled.
  - **DB: zero schema change** — `verificationTokens` already exists and is exactly what the Email provider needs.
  - **Gmail SMTP specifics**: needs 2FA + a Gmail **App Password** (never a real password, never committed), `smtp.gmail.com:587`, ~500 emails/day cap, deliverability can be flagged at volume → a transactional provider (Resend/Postmark) is the documented upgrade path if re-engagement emails ship.
- Unlocks later **re-engagement emails** (streak reminders, "resume learning").

### E. #27 — Autosave trust + guest nudge
- **"Saved" indicator**: autosave is already instant locally + 2s cloud-push when signed in (`sync-client.ts`), but invisible. Add a subtle "Saved • synced {relative time}" (reads last `PROGRESS_CHANGED_EVENT` / sync state). Place on `/profile` + `/settings`, optional tiny nav dot.
- **Guest nudge**: after the first meaningful milestone (first lesson complete), a dismissible "Sign in to save your progress across devices" toast/card — only when NOT signed in AND auth configured. Respects the no-sign-up-wall promise (dismissible, never blocking).

### F. Build order
1. **Foundation** — `profile.ts`, `profile-stats.ts`, `<StatsRow>` (+ `<ActivityHeatmap>`).
2. **`/profile` hub** (#25) — consumes the foundation.
3. **Settings cards + onboarding name/detail capture** (#24, #27 indicator).
4. **Email auth** (#26) — independent, can run in parallel.
5. **Guest nudge** (#27) — after profile + auth exist.

Privacy: profile fields (name/role/etc.) are localStorage for guests; for signed-in users they ride the existing per-user, auth-gated sync (same as notes). `noindex` on `/profile`.

## Status log
- 2026-09-17 — Plan compiled (8 perspectives). Beginning execution at P0 #1.
- 2026-09-17 — **P0 #1 (canonical) DONE + verified.** `tsc` clean. Added Perspective 9 (meta tags / blog / layouts / interlinking) + items 6b–6e per owner request.
- 2026-09-17 — **#6b (title double-suffix) DONE + verified** on 30 pages. `tsc`/lint clean. Committed #1 + #6b (`c74c19d`).
- 2026-09-17 — **#3 (llms.txt) + #2 (sitemap completeness/freshness) DONE + verified.** sitemap 931→1,734 URLs (803 project pages), lastmod unfrozen; `/llms.txt` live. Owner added a **642-lesson interlink map** as the explicit FINAL task (#22).
- 2026-09-17 — Owner directives: keep auto-executing technical fixes; batch on `development-branch`; PostHog→disable autocapture, newsletter→remove, blog→approved (design added).
- 2026-09-17 — **DONE this session:** #11 robots/noindex, #19 PostHog autocapture off, #20 newsletter removed, #8 a11y, #4 certificate name field, #6 structured data, #5 CATEGORY_INDEX bundle fix (+drift test), #15 compare copy, #18 doc drift, #6d blog design. **66/66 tests, tsc clean, 10 commits on `development-branch`.**
- **Still open:** #9 (author/date — now folded into the blog for fresh content), #12 (route-scoped bundle trims), #13 loading skeletons, #14 IA dedup, #16 `bigProject` XP `⚠️`, blog BUILD.
- 2026-09-17 — **#22 interlink map STARTED then PAUSED for review.** Inline approach confirmed; `rehype-external-links` added; **9 SEO lessons done + committed** (pilot + 8-lesson validation batch, all verified pure-linkification via link-stripping diff, on Sonnet). Remaining 29 SEO + other categories NOT done (interrupted batches reverted to a clean state). Resume when the profile/settings work is reviewed.
- 2026-09-17 — **Owner: use Sonnet (not Opus) for all subagents** (cost) — saved to memory; applied to the interlink fan-out.
- 2026-09-17 — **Research + design pass for Profile/Settings/Accounts** (owner-requested, review-then-build). Full personal-data inventory taken. Design written above (#24 extended, #25 `/profile` hub, #26 Google+Gmail-SMTP auth, #27 autosave trust + guest nudge). Confirmed **autosave is present** (local instant + cloud 2s when signed in); the gap is guest cloud backup + no visible indicator. **No implementation yet — awaiting owner review.**
