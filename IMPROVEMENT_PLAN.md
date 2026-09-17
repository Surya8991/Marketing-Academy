# Marketing Academy — Improvement Plan (Multi-Perspective Audit)

> Compiled 2026-09-17 (Session 88). A full audit across 8 stakeholder perspectives —
> learner, SEO/growth, performance, accessibility, privacy/security, business,
> maintainer, and AEO/GEO. Items are prioritized P0 (do first) → P2 (nice to have).
> This is an **execution tracker**: check items off as they ship. Product/compliance
> decisions are flagged `⚠️ DECISION` and must NOT be auto-executed without owner sign-off.

**Verified findings** (re-checked against source, not just reported): the canonical bug,
the `CATEGORY_INDEX` bundle regression, no `llms.txt`, no monetization/lead-capture.

---

## Execution order (master checklist)

### P0 — High impact, self-contained, clearly correct
- [x] **1. SEO canonical bug** — ✅ DONE (2026-09-17). Removed blanket `canonical: BASE` from `layout.tsx`; added self-canonicals to homepage + 15 content pages (glossary list/[slug], interview-questions list/[category], interview-prep, cheat-sheets list/[category], digital-marketing-cheat-sheet, tools, tools/geo-audit, about, resources, compare, learn, search). Verified in browser: `/`→`/`, `/about`→`/about`, `/glossary`→`/glossary`. *(Also the #1 AEO/GEO citability fix.)*
- [x] **2. Sitemap completeness + freshness** — ✅ DONE (2026-09-17). Added 803 project pages + `/projects` + `/tools/geo-audit`; `lastModified` now uses the build date (was frozen `2026-07-04`). Verified: sitemap.xml = 1,734 URLs, lastmod = today. **Still open (separate freshness signals):** the hardcoded lesson byline "UPDATED JUN 2026" + Article `dateModified`, and the `digital-marketing-cheat-sheet` 2025 data refresh — tracked in Perspective 9.
- [x] **3. `llms.txt`** — ✅ DONE (2026-09-17). `src/app/llms.txt/route.ts` serves an llmstxt.org-format manifest generated live from the curriculum (disciplines, tracks, reference hubs). Verified at `/llms.txt`. Dogfoods the `llms-txt-ai-crawler-management` lesson.
- [x] **4. Certificate name field** — ✅ DONE (2026-09-17). New `src/lib/cert-name.ts` (`ma_cert_name`, dispatches `PROGRESS_CHANGED_EVENT`, registered in `progress-snapshot` EXPORT_KEYS so it syncs/exports). Cert page has a "Name on certificate" input (no-print) that renders the name onto the certificate (serif, above the signature line); falls back to the blank line when empty. Verified in-browser end-to-end ("Awarded to: Arvind Kumar", 100% eligible).
- [ ] **5. `CATEGORY_INDEX` true slim module** — currently derived from full `CATEGORIES`, so ~148 KB of curriculum ships on every route (Rule 41 fix defeated).

### P1 — Real gaps, moderate effort
- [ ] **6. Structured data gaps** — `compare/[slug]`, `cheat-sheets/[category]`, `digital-marketing-cheat-sheet`, `projects/[category]/[slug]`, glossary list emit no JSON-LD/breadcrumbs.
- [x] **6b. Title double-suffix bug (~30 pages)** — ✅ DONE (2026-09-17). Stripped `| Marketing Academy` from the **document** title on 30 pages (left `openGraph.title` branded, since the template doesn't apply there). Verified in browser: `/about` → "About | Marketing Academy" (was doubled). `tsc`/lint clean. *(See Perspective 9.)*
- [ ] **6c. Meta description quality** — `glossary/[slug]` description is a hard `slice(0,155)` (cuts mid-word); interior pages (glossary term, interview category, cheat-sheet category, compare) set no page-specific `openGraph`/image → generic social cards.
- [ ] **6d. Blog / articles / "What's New" hub** `⚠️ DECISION` — no `/blog`, `/news`, `/changelog`, or `/guides` route exists. A content-education site has no fresh-article surface — the most linkable, AI-citable, keyword-targetable content shape. Biggest topical-authority + freshness gap. *(See Perspective 9.)*
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
- [ ] **15. `/compare/[slug]` "coming soon" copy** — remove or replace.
- [ ] **16. `bigProject` XP tier (100 XP) unreachable** — wire capstone projects to it or drop the tier.
- [ ] **17. Dead newsletter code** — orphaned component + 501 endpoint. Finish or delete. *(see #20)*
- [ ] **18. Doc drift** — README routes table missing `/review`, `/compare`, `/tools/geo-audit`; AGENTS.md Rule 41 documents a fix that no longer holds.
- [x] **19. PostHog consent** — ✅ DONE (2026-09-17, owner: disable autocapture). `layout.tsx` init now sets `autocapture:false, disable_session_recording:true, respect_dnt:true` (keeps only the PII-free explicit `capture()` events + pageleave). No banner needed.
- [x] **20. Monetization / newsletter** — ✅ DONE (2026-09-17, owner: remove dead code). Deleted orphaned `NewsletterSignup.tsx` + `/api/newsletter` (501 stub). README updated. *(Broader monetization/audience-capture strategy remains an open owner decision — no code path today.)*
- [ ] **21. `⚠️ DECISION` — `/api/geo-audit` abuse vector** — unauthenticated, in-memory rate limit, proxies paid Groq. Needs a decision (auth-gate, shared-store limit, or usage cap).

### 🏁 LAST — largest task (run after everything above)
- [ ] **22. Per-lesson interlink map (642 lessons)** `🏁 FINAL / HUGE` — for **each lesson**, add **2–3 contextual internal links** (to related lessons / glossary terms, woven into the body prose with descriptive anchor text, not a bare "Related" list) **then 2–3 suitable external links** to authoritative sources (studies, official docs, original data) with **related, descriptive anchor text** (never "click here"). External links open in a new tab with `rel="noopener noreferrer"` (and consider `nofollow`/`sponsored` where appropriate). This strengthens topical clustering, crawl depth (#6e), and AEO citability (entity/citation signals). Scope: 642 MDX files — must be batched (per `PROJECTS_AUTHORING_GUIDE.md` fan-out discipline, Rule 56) and is deliberately sequenced **dead last** because of its size. Owner directive 2026-09-17.

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

## Status log
- 2026-09-17 — Plan compiled (8 perspectives). Beginning execution at P0 #1.
- 2026-09-17 — **P0 #1 (canonical) DONE + verified.** `tsc` clean. Added Perspective 9 (meta tags / blog / layouts / interlinking) + items 6b–6e per owner request.
- 2026-09-17 — **#6b (title double-suffix) DONE + verified** on 30 pages. `tsc`/lint clean. Committed #1 + #6b (`c74c19d`).
- 2026-09-17 — **#3 (llms.txt) + #2 (sitemap completeness/freshness) DONE + verified.** sitemap 931→1,734 URLs (803 project pages), lastmod unfrozen; `/llms.txt` live. Owner added a **642-lesson interlink map** as the explicit FINAL task (#22).
