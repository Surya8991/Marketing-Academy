# Marketing Academy: Improvement Plan (Multi-Perspective Audit)

> Compiled 2026-09-17 (Session 88). A full audit across 8 stakeholder perspectives,
> learner, SEO/growth, performance, accessibility, privacy/security, business,
> maintainer, and AEO/GEO. Items are prioritized P0 (do first) → P2 (nice to have).
> This is an **execution tracker**: check items off as they ship. Product/compliance
> decisions are flagged `⚠️ DECISION` and must NOT be auto-executed without owner sign-off.

**Verified findings** (re-checked against source, not just reported): the canonical bug,
the `CATEGORY_INDEX` bundle regression, no `llms.txt`, no monetization/lead-capture.

---

## ⭐ Recommended priority: remaining open work (2026-09-17)

Interlink map (#22) is deliberately **LAST** (largest task). Owner-requested features first.

**Tier 1, Owner-requested features**
1. ~~**#23 Quiz: revisable answers + review-before-submit**~~, ✅ DONE.
2. ~~**#24 + #25 + #27 Profile cluster**~~, ✅ DONE (2026-09-17): shared foundation (`profile-stats.ts`, `profile.ts`, `<StatsRow>`, `<ActivityHeatmap>`) → `/profile` hub → Settings cards + onboarding capture + autosave indicator/guest nudge.
3. ~~**#26 Email magic-link auth (Gmail SMTP)**~~, ✅ code-complete (2026-09-17); needs a real Gmail App Password on Vercel to verify the actual send-and-click round trip.
4. ~~**#28 Re-engagement email**~~, ✅ code-complete (2026-09-17).
5. ~~**#30 Superadmin dashboard + user management**~~, ✅ code-complete (2026-09-17). Owner asked to build it directly instead of waiting for review.

**Tier 2, SEO/AEO + growth**
6. **#10 Global search** covers glossary/tools/projects (not just lessons+tracks).
7. **#6d Blog build** (design ready; also lands #9 author/date signals on fresh content).
8. **#2 remaining freshness**, lesson byline + Article `dateModified`/`datePublished`; `digital-marketing-cheat-sheet` 2026 data refresh.
9. **#6c / #6 remaining**, meta-description quality; glossary-list `ItemList`/`DefinedTermSet`.

**Tier 3, Perf / polish / decisions**
10. **#29 Lesson-page "related" clutter** `⭐ owner-flagged`, dedupe the 3 stacked related/nav blocks into one row (quick, high visual payoff).
11. **#12 Client-bundle trims**, `CASE_COMPANIES`/`TOOLS`/`PROJECTS_INDEX` off the client.
12. **#13 Route loading skeletons.**
13. **#14 IA dedup**, `/interview-prep` vs `/interview-questions`, cheat-sheet routes.
14. **#16 `bigProject` XP** `⚠️ decision`, wire capstone or drop the tier.

**Tier 4, LAST (large batch)**
15. **#22 Per-lesson interlink map** (642 lessons; 9 SEO done, resume category-by-category on Sonnet). **Owner note (2026-09-17): paused, owner will resume this personally.**

*(Done this session: #1, #3, #4, #5, #6, #6b, #8, #11, #15, #18, #19, #20, #2 sitemap half, #23, #24, #25, #27, #26 code, #30 code, #28 code.)*

---

## Execution order (master checklist)

### P0: High impact, self-contained, clearly correct
- [x] **1. SEO canonical bug**, ✅ DONE (2026-09-17). Removed blanket `canonical: BASE` from `layout.tsx`; added self-canonicals to homepage + 15 content pages (glossary list/[slug], interview-questions list/[category], interview-prep, cheat-sheets list/[category], digital-marketing-cheat-sheet, tools, tools/geo-audit, about, resources, compare, learn, search). Verified in browser: `/`→`/`, `/about`→`/about`, `/glossary`→`/glossary`. *(Also the #1 AEO/GEO citability fix.)*
- [x] **2. Sitemap completeness + freshness**, ✅ DONE (2026-09-17). Added 803 project pages + `/projects` + `/tools/geo-audit`; `lastModified` now uses the build date (was frozen `2026-07-04`). Verified: sitemap.xml = 1,734 URLs, lastmod = today. **Still open (separate freshness signals):** the hardcoded lesson byline "UPDATED JUN 2026" + Article `dateModified`, and the `digital-marketing-cheat-sheet` 2025 data refresh, tracked in Perspective 9.
- [x] **3. `llms.txt`**, ✅ DONE (2026-09-17). `src/app/llms.txt/route.ts` serves an llmstxt.org-format manifest generated live from the curriculum (disciplines, tracks, reference hubs). Verified at `/llms.txt`. Dogfoods the `llms-txt-ai-crawler-management` lesson.
- [x] **4. Certificate name field**, ✅ DONE (2026-09-17). New `src/lib/cert-name.ts` (`ma_cert_name`, dispatches `PROGRESS_CHANGED_EVENT`, registered in `progress-snapshot` EXPORT_KEYS so it syncs/exports). Cert page has a "Name on certificate" input (no-print) that renders the name onto the certificate (serif, above the signature line); falls back to the blank line when empty. Verified in-browser end-to-end ("Awarded to: Arvind Kumar", 100% eligible).
- [x] **5. `CATEGORY_INDEX` true slim module**, ✅ DONE (2026-09-17). New `src/lib/category-index.ts` is a standalone literal (no `CATEGORIES` import); `Nav` imports from it, and the derived version was removed from `curriculum.ts`. Drift-guarded by `tests/category-index.test.ts` (asserts it matches `CATEGORIES` exactly). This removes ~148 KB of curriculum from **every** route's client bundle. `tsc` + 66/66 tests pass; Nav verified.

### P1: Real gaps, moderate effort
- [x] **6. Structured data gaps**, ✅ DONE (2026-09-17). Added `BreadcrumbList` JSON-LD to `compare/[slug]`, `cheat-sheets/[category]`, `digital-marketing-cheat-sheet`, and `projects/[category]/[slug]` (+ a `LearningResource` schema on project pages). Verified in browser. *(Glossary-list `ItemList`/`DefinedTermSet`, minor, deferred; individual terms already carry `DefinedTerm`.)*
- [x] **6b. Title double-suffix bug (~30 pages)**, ✅ DONE (2026-09-17). Stripped `| Marketing Academy` from the **document** title on 30 pages (left `openGraph.title` branded, since the template doesn't apply there). Verified in browser: `/about` → "About | Marketing Academy" (was doubled). `tsc`/lint clean. *(See Perspective 9.)*
- [ ] **6c. Meta description quality**, `glossary/[slug]` description is a hard `slice(0,155)` (cuts mid-word); interior pages (glossary term, interview category, cheat-sheet category, compare) set no page-specific `openGraph`/image → generic social cards.
- [ ] **6d. Blog / articles hub**, ✅ APPROVED by owner (2026-09-17), design below; build queued as a future task. A content-education site has no fresh-article surface, the most linkable, AI-citable, keyword-targetable content shape. See **"Blog design"** section below.
- [ ] **6e. Interlinking depth**, `/learn` index links only 5 lessons/category (`PREVIEW_COUNT`), so 642 lessons sit 3 clicks deep with no master index; no topical-cluster hubs; contextual in-body cross-links between related lessons are sparse (only the structured RelatedLessons/RelatedConcepts blocks). *(See Perspective 9.)*
- [ ] **7. In-place core navigation**, make lesson Prev/Next + "Continue where you left off" navigate in the same tab (keep cross-references new-tab).
- [x] **8. Accessibility fixes**, ✅ DONE (2026-09-17). `error.tsx` red box → theme-aware rgba; search input `type=search` + `aria-label`; notes textarea `aria-label`; `Callout` label text → `--foreground` (was failing-AA `-500` on tint, icon stays brand-coloured). Newsletter `aria-live` moot (component deleted). Verified in browser. `tsc`/lint clean.
- [ ] **9. Author/citability signals (AEO)**, Article `datePublished` + named `Person` author (E-E-A-T); render `lessonMeta.summary` as an extractable TL;DR/direct-answer block.
- [ ] **10. Global search scope**, add glossary (158), tools (157), projects (803) to `/search` + ⌘K (currently lessons + tracks only).
- [x] **11. `robots.ts`**, ✅ DONE (2026-09-17). `disallow` `/api/` + 8 personal routes; added `robots: { index: false }` metadata to achievements/settings/account/login/skill-map/certificates(+[slug] via a new server layout)/search. Verified: robots.txt + `/settings` `noindex, nofollow`.
- [ ] **12. `CASE_COMPANIES` / `PROJECTS_INDEX` / `TOOLS` client-bundle trimming**, pass minimal props instead of importing full data modules into `"use client"` files.

### P2: Polish / cleanup / decisions
- [ ] **13. Route `loading.tsx` skeletons**, client pages flash blank divs.
- [ ] **14. IA de-duplication**, `/interview-prep` vs `/interview-questions`; `/cheat-sheets` vs `/digital-marketing-cheat-sheet`. Pick canonical + cross-link.
- [ ] **29. Lesson-page "related" clutter, dedupe the stacked blocks** `⭐ owner-flagged (2026-09-17, screenshot)`, the bottom of every lesson stacks **THREE** near-identical navigation blocks: **RELATED CONCEPTS** (`RelatedConcepts.tsx`, curated from `lessonMeta.relatedConcepts`) + **You Might Also Like** (`RelatedLessons.tsx`, auto first-3-same-category) + **Prev/Next**. They overlap heavily (e.g. "Search Intent" appeared 3×, "On-Page SEO" 2× in one screenshot) → 6–9 redundant cards. This is the duplication AGENTS.md Rule 51/53 already flagged. **Fix (preferred): show only ONE related-cards row**, when a lesson has curated `relatedConcepts`, render those and **hide "You Might Also Like"** (or filter out lessons already shown above); fall back to the auto "You Might Also Like" only when no curated concepts exist. Result: `[3 Related cards] → [Prev/Next]`. Touches the lesson page (`learn/[category]/[lesson]/page.tsx`) + `RelatedLessons.tsx`/`RelatedConcepts.tsx`. Low risk, high visual payoff.
- [x] **15. `/compare/[slug]` "coming soon" copy**, ✅ DONE (2026-09-17). Replaced the "coming soon" promise with an honest label + a cross-link to the comparisons hub.
- [ ] **16. `bigProject` XP tier (100 XP) unreachable** `⚠️ DECISION`, defined in `engagement.ts` but no project awards it. Needs a product call: designate capstone projects to grant it, or drop the tier. Left open.
- [ ] **17. Dead newsletter code**, orphaned component + 501 endpoint. Finish or delete. *(see #20)*
- [x] **18. Doc drift**, ✅ DONE (2026-09-17). README routes table: added `/review`, `/compare`(+`/[slug]`), `/tools/geo-audit`, `/quizzes`, `/llms.txt`, `/robots.txt`. AGENTS.md Rule 41's now-false claim is corrected by the new `category-index.ts` module + Rule 79/#5 note. *(A dedicated Rule 41 amendment is optional follow-up.)*
- [x] **19. PostHog consent**, ✅ DONE (2026-09-17, owner: disable autocapture). `layout.tsx` init now sets `autocapture:false, disable_session_recording:true, respect_dnt:true` (keeps only the PII-free explicit `capture()` events + pageleave). No banner needed.
- [x] **20. Monetization / newsletter**, ✅ DONE (2026-09-17, owner: remove dead code). Deleted orphaned `NewsletterSignup.tsx` + `/api/newsletter` (501 stub). README updated. *(Broader monetization/audience-capture strategy remains an open owner decision, no code path today.)*
- [ ] **21. `⚠️ DECISION`, `/api/geo-audit` abuse vector**, unauthenticated, in-memory rate limit, proxies paid Groq. Needs a decision (auth-gate, shared-store limit, or usage cap).

### 🏁 LAST: largest task (run after everything above)
- [ ] **22. Per-lesson interlink map (642 lessons)** `🏁 FINAL / HUGE`, **IN PROGRESS.** For **each lesson**, weave **2–3 internal links** (to related lessons/glossary) and **2–3 external authoritative links** **INLINE into the article body** (owner clarification 2026-09-17: contextual anchors in the prose, NOT end sections like "## Related Concepts"/"## Further Reading").
  - **The load-bearing safety rule:** only turn an **existing phrase already in the sentence** into a link (`[existing phrase](/learn/cat/slug)`). **Never rewrite, rephrase, or add sentences.** This keeps prose byte-identical except for link syntax → safe at 642-file scale.
  - Internal targets come from the lesson's own category list (+ adjacent categories/glossary); slugs MUST resolve. External links: most lessons already have inline external links (Rule 11 research), leave them (the `rehype-external-links` plugin now makes all external links open in a new tab with `rel=noopener`); only add 2–3 (linkifying existing phrases to the lesson's own ResourceList URLs) if the body has fewer than ~2.
  - Placement: inline in `<p>`/`<li>` body text. Do NOT touch `lessonMeta`, `<Callout>`, `<Mermaid>` labels, `<InAction>`, or `<ResourceList>`. Strengthens topical clustering, crawl depth (#6e), AEO citability.
  - **Execution:** batched subagents category-by-category (Rule 56). Toolchain ready: `rehype-external-links` added. Pilot done: `seo/content-decay-refresh.mdx` (3 internal links woven in). Fan-out started with the SEO category.

### After the interlink map (owner-added 2026-09-17)
- [x] **23. Quiz: revisable answers + full review before submit**, ✅ DONE (2026-09-17). `Quiz.tsx`: `selections` is now a fixed-length, freely-revisable array (any option can be re-picked before moving on); after the last question, a new "review" screen lists every question with the picked answer (no correctness shown) and a per-question "Edit" button that jumps back and returns to review afterward; only "Submit Quiz" from the review screen grades the attempt. Mid-quiz correctness reveal was NOT reintroduced (Rule 25/40 anti-farming intact). `tsc`/lint clean, 66/66 tests pass (updated the Rule-47-style regression test for the renamed `handleSubmit`/`finalSelections`).
- [x] **24. New-user profile capture**, ✅ DONE (2026-09-17). `OnboardingModal` now has an optional name field (rides `cert-name.ts`'s `ma_cert_name`) and stores the picked goal as `profile.primaryGoal`; role/experience-level are editable on the new Settings "Profile Details" card. New `src/lib/profile.ts` (`ma_profile` key, registered in `progress-snapshot` EXPORT_KEYS per Rules 18/77). Still fully skippable, no sign-up wall.
- [x] **25. `/profile`, Personal Profile hub**, ✅ DONE (2026-09-17). New `src/lib/profile-stats.ts` (`getProfileStats()`, one aggregator replacing 4× duplicated derivations across Achievements/SkillMap/Portfolio/certificates), `<StatsRow>`, `<ActivityHeatmap>` (fed by `xpByDay`, existed but was never rendered). `/profile` aggregates identity, XP/level bar, 8 analytics tiles, 18-week heatmap, recent activity, top disciplines, badges/certificates/portfolio/bookmarks/review-due, all linking to their existing dedicated pages. Guest + signed-in both work. `noindex`. Nav gets a persistent Profile entry point (icon, account-menu item, mobile link).
- [x] **26. Auth / login: Gmail SMTP magic-link ONLY**, ✅ DONE (2026-09-17, code-complete). New `emailAuthConfigured()` gate drives every sign-in entry point; NextAuth `Nodemailer` provider added to `src/auth.ts` with a custom `sendVerificationRequest` using the new branded email layer (`src/lib/email/`). `/login` is a single email-input form (`SignInButton.tsx` → `signIn("nodemailer", ...)`). Google OAuth stays wired but unpromoted. Zero schema change. `nodemailer@^7` added. **Not yet verified end-to-end**, needs a real Gmail App Password in `EMAIL_SERVER`/`EMAIL_FROM` on Vercel to confirm an actual send-and-click round trip; that's an owner deployment-env step, see the design section below.
- [x] **27. Autosave trust + guest data-loss nudge**, ✅ DONE (2026-09-17). New shared `<AutosaveIndicator>` ("Saved · synced Xm ago") on `/profile` and a new Settings "Autosave" card. Guest nudge ("Sign in to save your progress across devices") renders on `/profile` when not signed in and email auth is configured.
- [x] **28. Re-engagement email**, ✅ code-complete (2026-09-17). 3 opt-in templates (streak-reminder, resume-learning, weekly-digest) + 3 `/api/cron/*` routes wired to `vercel.json`'s `crons`, gated by `CRON_SECRET` (Vercel's own auto-injected `Authorization: Bearer` header). Prefs are new `users` columns (not localStorage, a cron job has no browser to read from), toggled in a new Settings "Email Notifications" card, signed-in only, all default OFF. One-click unsubscribe via an HMAC-signed token (`src/lib/email/unsubscribe-token.ts`, no sign-in required to use it). `tsc`/lint clean, 75/75 tests, build passes, every DB query + the token sign/verify round-trip hand-verified against real data. **Not verified**: an actual cron-triggered send (needs `CRON_SECRET` + real email credentials on the live Vercel deployment). *(Optional sibling, not building now: a shareable public profile / "share my achievements", adds real privacy scope; flag before pursuing.)*
- [x] **30. Superadmin dashboard + user management**, ✅ code-complete (2026-09-17). `SUPERADMIN_EMAILS` env-only tier (never DB-persisted). `/admin` (any admin, read-only stats) + `/admin/users` (superadmin: search/promote/demote/suspend/delete + audit log). `users.suspended` + `adminAuditLog` schema added, migration applied to local dev DB and verified. Suspension enforced in 3 places (signIn callback, session payload, direct-`auth()` routes) per AGENTS.md Rule 80. `tsc`/lint clean, 70/70 tests, build passes. **Not verified**: a real signed-in admin/superadmin browser session (needs #26's real email credentials + a `SUPERADMIN_EMAILS` value on the actual deployment, not available in this environment). **See "Superadmin dashboard design" below** for the full design (still accurate to what shipped).

---

## Perspective 1: Learner (UX)

Mature: progress, XP/streak, achievements, spaced review, projects, tracks, sync all work.

| # | Finding | Ref |
|---|---|---|
| 4 | Certificate "Awarded to:" is a blank `<span>`, no name on the shareable cert | `certificates/[slug]/page.tsx:362` |
| 7 | Prev/Next + "Continue where you left off" open new tabs → fragments the reading session | `[lesson]/page.tsx:331,349`, `RecentlyViewed.tsx:30` |
| 10 | Global search covers only lessons + tracks; glossary/tools/projects unfindable | `search/SearchClient.tsx` |
| 13 | No `loading.tsx` anywhere → blank flashes on client pages | (all routes) |
| 16 | `bigProject` (100 XP) defined but never awarded | `ProjectCard.tsx:175`, `engagement.ts` |

## Perspective 2: SEO / Organic Growth  *(biggest lever)*

| # | Finding | Ref |
|---|---|---|
| 1 | **Sitewide canonical → homepage.** ~all glossary/hub/reference pages inherit `canonical: BASE` | `layout.tsx:53` (verified) |
| 6 | `compare/[slug]`, `cheat-sheets/[category]`, `digital-marketing-cheat-sheet`, `projects/*` emit no JSON-LD/breadcrumbs | (those routes) |
| 2 | 803 project pages + projects hub indexable but absent from sitemap | `sitemap.ts` |
| 2 | Frozen freshness: sitemap lastmod, Article `dateModified` all hardcoded `2026-07-04`; byline "UPDATED JUN 2026"; one page says 2025 | `sitemap.ts:10`, `[lesson]/page.tsx:157,241`, `digital-marketing-cheat-sheet/page.tsx:41` |
| 11 | `robots.ts` no `disallow`; personal pages (achievements/settings/account/login) indexable | `robots.ts`, `achievements/page.tsx:4` |
| 14 | Two interview hubs + two cheat-sheet routes, no self-canonical/disambiguation |, |
|, | Lesson `generateMetadata` fails silently to `{}`; title falls back to slug, no description if `lessonMeta` incomplete | `[lesson]/page.tsx:42,66` |

## Perspective 3: Performance / Core Web Vitals

| # | Finding | Ref |
|---|---|---|
| 5 | **`CATEGORY_INDEX` derives from full `CATEGORIES`** → ~148 KB curriculum ships every route (Rule 41 fix defeated) | `curriculum.ts:924` (verified) |
| 12 | `CASE_COMPANIES` (~98 KB) → client via ProjectCard/PortfolioClient/ProjectsClient | `ProjectCard.tsx:58` |
| 12 | `/projects` hydrates full 436 KB `PROJECTS_INDEX` as a prop | `projects/page.tsx:67` |
| 12 | `TOOLS` (~56 KB) → client (ToolStack/CompareSelector); full `CATEGORIES` → client (Search/SkillMap/Bookmarks/SurpriseMe) | `ToolStack.tsx:24`, `SearchClient.tsx:6` |
|, | 5 `next/font` families; Nav avatar `<img>` missing width/height | `layout.tsx:16-30`, `Nav.tsx:440` |

**Strong (leave alone):** `quizzes.ts`/`lesson-resources.ts` server boundaries hold; Mermaid/CommandPalette/PostHog lazy; full SSG; SW network-first + prod-only.

## Perspective 4: Accessibility (WCAG)

Strong base: skip link, focus traps, reduced-motion, ARIA combobox, icon+text in quizzes.

| # | Finding | Ref |
|---|---|---|
| 8 | `error.tsx` `bg-red-50`/`text-red-500` → near-white box in dark mode (Rule 19) | `error.tsx:21` |
| 8 | Main search input + notes textarea: placeholder only, no label/aria-label | `SearchClient.tsx:111`, `LessonNotes.tsx:108` |
| 8 | Newsletter success/error messages have no `aria-live` | `NewsletterSignup.tsx:68` |
| 8 | `Callout` label colors `text-amber-500`/`green-500` fail AA on tint | `Callout.tsx:7-11` |
|, | Content emojis not `aria-hidden` (low severity) | `OnboardingModal.tsx:170` |

## Perspective 5: Privacy / Security (end user)

Strong: full security headers/CSP, hardened auth session allow-list, `rel="noopener"` everywhere, no PII in URLs, DOMPurify-locked Mermaid, PII-free explicit analytics.

| # | Finding | Ref |
|---|---|---|
| 19 | PostHog autocapture on, no consent/DNT → GDPR exposure | `layout.tsx:129` |
| 21 | `/api/geo-audit` unauthenticated + in-memory rate limit, proxies paid Groq | `geo-audit/route.ts:115,220` |
|, | Private notes synced server-side in plaintext (auth-gated, disclosed) | `progress-snapshot.ts:37` |
|, | Admin-self-delete guard reads `session.user.role` (always undefined now) | `account/delete/route.ts:12` |

## Perspective 6: Business / Owner

- **No monetization and no audience capture.** Huge content asset (642 lessons, 803 projects), the only lead-capture surface (newsletter) is dead code (component unrendered, endpoint 501). Combined with the canonical bug throttling organic reach → no growth loop. `⚠️ DECISION` (#20).

## Perspective 7: Maintainer / Code Health

- Excellent CI (71 tests + git-identity guard); data-integrity test suite is a real strength.
- **AGENTS.md is 78 rules**: heavy tacit-knowledge load; docs starting to drift (routes table incomplete; Rule 41 claim now false). `quizzes.ts` 2.4 MB single file remains the structural smell. (#18)

## Perspective 8: AEO / GEO (Answer/Generative Engine Optimization)

Assessed against the project's **own** geo-audit 6-signal framework (`GeoAuditClient.tsx:33-48`). The site teaches AEO/GEO but doesn't apply it to itself.

| Signal (their framework) | Site's own state | Action |
|---|---|---|
| **entity_coverage** (named stats/tools/dates) | Strong, Rule 11 mandates real research + `InAction` named companies | keep |
| **citability** (authorship, quotable, attributable) | **Weak**, Article author is `Organization` only, no `datePublished`, generic byline | #9 |
| **structured_data** (lists/tables/FAQ/steps) | Mixed, FAQPage + DefinedTerm good; compare/cheat-sheets/projects have none | #6 |
| **direct_answers** (specific factual answers) | Weak, lessons are prose; no extractable TL;DR at top (`lessonMeta.summary` unused as answer block) | #9 |
| **brand_signals** (consistent identity) | OK | keep |
| **content_depth** (definitive source) | Strong, 800–2000 word researched lessons | keep |

**Cross-cutting AEO/GEO gaps:**
- **#3 No `llms.txt`**: the emerging AI-crawler manifest; the site has a whole lesson on it. Biggest dogfooding miss.
- **#1 Canonical bug directly kills GEO citability** of every reference page (AI engines drop pages that self-declare as homepage duplicates).
- **Freshness (#2)**: AI answer engines favor recent content; frozen dates hurt.
- `robots.ts` allows AI crawlers by default (fine) but no explicit intent signal; an `llms.txt` covers this.

## Perspective 9: Meta tags, content hub, page sections & interlinking

Added 2026-09-17 per owner request. Some overlaps with SEO/AEO above; collected here for the "meta tags / blogs / layouts / interlinking" review.

### Meta tags
| # | Finding | Ref |
|---|---|---|
| 6b | **Title double-suffix on ~30 pages**, hardcoded `\| Marketing Academy` + template `%s \| Marketing Academy` → doubled. Confirmed live on `/about` | `about/page.tsx:11`, `cheat-sheets/page.tsx`, `compare/*`, `interview-*`, `learn/[category]`, `certificates`, `bookmarks`, `portfolio`, etc. (30 files) |
| 6c | `glossary/[slug]` description `slice(0,155)` cuts mid-word | `glossary/[slug]/page.tsx:20` |
| 6c | Interior pages set no page-specific `openGraph`/image → generic social cards | glossary term, interview category, cheat-sheet category, compare |
| 2 | Title year drift: `digital-marketing-cheat-sheet` says 2025 throughout (title + H1 + benchmark tables). Deferred to #2, needs a real **data refresh** (updating the 2025 benchmark numbers), not a find-replace, so the page stays internally consistent | `digital-marketing-cheat-sheet/page.tsx` |
|, | Lesson `generateMetadata` fails silent → `{}` (no title/desc) if MDX import throws | `[lesson]/page.tsx:66` |

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
|, | No topical-cluster hub pages (pillar→cluster internal-linking model) |, |
|, | No in-body contextual cross-links between related lessons (only structured Related blocks) |, |
|, | No lesson→glossary term auto-linking (glossary terms are orphaned from lesson bodies) |, |
| ✓ | Strong: breadcrumbs (visible + JSON-LD), RelatedLessons, RelatedConcepts, all `next/link` crawlable |, |

---

## Blog design (#6d: approved 2026-09-17, build queued)

A lightweight MDX articles hub that reuses the existing lesson/MDX pipeline (no new CMS). Goal: a fresh, dated, keyword-targeted, AI-citable content surface that feeds organic + AEO growth (the gap in Perspective 6/8/9).

**Routes**
- `/blog`, index: reverse-chronological article cards (title, date, reading time, tag, excerpt). Paginated at ~12/page.
- `/blog/[slug]`, article reader: reuses the lesson prose system (`Callout`/`Mermaid`/`ResourceList`), plus a visible **author byline + published/updated dates** (this is where #9's E-E-A-T author/date signals land first, on new content, rather than retrofitting 642 lessons).
- `/blog/tag/[tag]`, optional tag archives (topical clustering).

**Content model** (`src/content/blog/*.mdx`, mirroring lessons)
```ts
export const postMeta = {
  title: "…",
  description: "…",            // single quotes for inner quotes (Rule 1)
  publishedAt: "2026-09-20",   // REAL per-post date, drives sitemap lastmod + Article dates
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

## Profile, Settings & Accounts: design (owner-requested 2026-09-17)

Decisions (owner): profile works for **guests + signed-in**; `/profile` is a **hub that aggregates + links** (existing pages stay); email sign-in uses **Gmail/Google SMTP**; capture **name + role + experience level + primary goal**. Everything below is derivable from data that already exists (see the inventory), mostly an aggregation + visualization layer, not new tracking.

### A. Shared data foundation (build FIRST: everything depends on it)
- **`src/lib/profile.ts`**: persona fields `{ role, experienceLevel, primaryGoal }` under key `ma_profile`; add to `progress-snapshot` `EXPORT_KEYS` (Rules 18/77, so it syncs/exports/resets). **Name stays in `cert-name.ts`** (`ma_cert_name`, already syncs + auto-fills the certificate), profile.ts references it, no duplicate key.
- **`src/lib/profile-stats.ts`**: one `getProfileStats()` aggregator returning ALL derived stats: `lessonsDone`, `overallPct`, `perCategory[]`, `quizzesPassed`, `projectsDone`+`projectHours`, `bookmarks`, `notesCount`, `reviewDue`+`lapses`, `xp`, `level`+`title`, `streak`, `longestStreak`, `badges {unlocked,total}`, `certificatesEarned[]`, `xpByDay`, `recentActivity[]` (from `xpLog`). **Kills the 3× duplicated derivations** (SkillMap/Achievements/Portfolio/certificates each re-derive today). Those pages can later refactor to use it.
- **`<StatTile>` / `<StatsRow>`** shared component, the `code/value/label` tile grid is hand-duplicated in AchievementsClient, SkillMapClient, about/page. One component.

### B. `/profile`: the hub (guest + signed-in, `noindex`, new-tab convention N/A)
1. **Identity header**, name (profile/cert-name, or Google `session.user.name`), avatar (Google `image` or an initial), `role · experience level`, level title + XP progress bar, streak flame, signed-in status. "Edit" → Settings.
2. **Analytics tiles** (`<StatsRow>`): lessons done + overall %, quizzes passed, projects done, current streak, longest streak, total XP, badges X/12, certificates earned, review-due.
3. **Activity heatmap**, GitHub-style calendar from `xpByDay` (data exists, never rendered anywhere today). New `<ActivityHeatmap>`.
4. **Recent activity timeline**, from `xpLog` (last ~15: "Completed {lesson}", "Passed quiz", "Finished project").
5. **Progress by discipline**, top categories via `profile-stats`, link to `/skill-map`.
6. **Achievements preview**, earned badges + count, link to `/achievements`.
7. **Certificates + portfolio snapshot**, earned certs, completed-project count/hours; links to `/certificates`, `/portfolio`.
8. **Bookmarks + notes**, counts, links to `/bookmarks`.
9. **Guest state**, if not signed in (and auth configured): a "Sign in to save across devices" card (#27).
- **Nav**: add a profile/avatar entry point (currently only a sign-in link / account menu).

### C. Settings improvements (`/settings` today is only Export/Import/Sync/Reset)
Add cards, keep the existing four:
1. **Profile Details**, edit name + role + experience level + primary goal (writes `profile.ts` + `cert-name.ts`).
2. **Account**, sign-in status (email/avatar or a Sign-in button), last-synced time, link to `/account` (sessions/delete).
3. **Preferences**, theme control (today only in Nav), optional default-landing.
4. **Autosave/status line**, surfaces #27's "Saved • synced" state so Settings answers "is my data safe?".
Also migrate SettingsClient off inline styles toward the app's token classes where cheap (consistency).

### D. Auth: Gmail SMTP magic-link ONLY, for now (#26)
Owner decision: enable **only** the passwordless email magic-link via Gmail SMTP. Google OAuth stays in `auth.ts` but is not the enabled path.
- Dep: `nodemailer` (NextAuth Email provider transport). Not currently installed.
- `env.ts`: add `EMAIL_SERVER` (e.g. `smtp://you%40gmail.com:APP_PASSWORD@smtp.gmail.com:587`) + `EMAIL_FROM`; add an `emailAuthConfigured()` gate (true when `AUTH_SECRET` + `EMAIL_SERVER` + `EMAIL_FROM` set). This gate, not `authConfigured()` (Google), drives whether sign-in UI shows.
- `auth.ts`: conditionally add `Email({ server, from, maxAge: 10*60 })` to `providers` (10-min link expiry).
- `login/page.tsx` + `SignInButton.tsx`: a **single email-input form** → `signIn("email", { email })` → "check your inbox" confirmation screen. No provider picker (only one method now).
- `Nav.tsx`: the two hardcoded `signIn("google")` calls → route to `/login` (the email form).
- **DB: zero schema change**: `verificationTokens` already exists and is exactly what the Email provider needs.
- **Gmail SMTP specifics**: needs 2FA + a Gmail **App Password** (never a real password, never committed, env only), `smtp.gmail.com:587`, ~500 emails/day cap; deliverability can be flagged at volume → a transactional provider (Resend/Postmark) is the documented upgrade path once volume grows. Set `AUTH_SECRET` too (magic links are signed).
- Verify: a real sign-in round-trip (request link → email arrives → click → session created) before calling it done.

### D2. Email templates & notifications (owner-requested full set)
All emails share one branded, responsive HTML layout (logo, `--foreground/--muted` tokens rendered as inline styles since email has no CSS vars, plain-text fallback, footer with unsubscribe + physical-sender line for CAN-SPAM/GDPR). Build a small `src/lib/email/` with `renderEmail(template, data)` + a `sendEmail()` wrapper over the same nodemailer transport as auth. Store per-category email prefs in `profile.ts`/a `ma_email_prefs` (opt-in by default OFF for marketing, ON for security/transactional); one-click unsubscribe token per category.

**Transactional (event-triggered, always sent, no opt-out):**
| Template | Trigger | Core content |
|---|---|---|
| `magic-link` | sign-in request | "Sign in to Marketing Academy" + one-time button/link (10-min expiry), "ignore if not you" |
| `welcome` | first successful sign-in | greet by name, what the account unlocks (cross-device sync, profile), CTA → `/profile` / resume |
| `account-deleted` | `POST /api/account/delete` success | confirm account + data deleted, no further emails, re-signup link |

**Engagement (opt-in, #28, need a scheduled job / Vercel Cron):**
| Template | Trigger | Core content |
|---|---|---|
| `streak-reminder` | daily cron: `lastActiveDay == yesterday` & nothing today | "Your {n}-day streak ends tonight" + one-tap resume link |
| `resume-learning` | cron: inactive 3–7 days | "Pick up where you left off: {last lesson}" + 1–2 recommended next lessons |
| `weekly-digest` | weekly cron (opt-in) | lessons completed this week, XP gained, current streak, badges unlocked, next recommended lesson, overall % |

**Milestone (opt-in, event-triggered):**
| Template | Trigger | Core content |
|---|---|---|
| `achievement-unlocked` | new badge unlocked (`checkAchievements` delta) | badge art + name + how they earned it, progress to next |
| `certificate-earned` | track becomes `eligible` (100% + track quiz) | "You earned the {track} certificate" + link to view/share/print |
| `level-up` (optional) | crossing a level threshold | new level title, XP to next |

**In-app notifications (mostly EXIST, audit, don't rebuild):** `AchievementToast` (unlock), `StreakBadge`, `ReviewDueBadge` all already render. Gap: no persistent **notification center** and no cross-device notification (they're localStorage/event-driven). Decide whether a lightweight bell/inbox is in scope, or whether email covers cross-device. **Recommendation: skip a notification center for now**, the existing in-app toasts + the new emails cover it; revisit only if users ask.

**Infra notes:** event-triggered emails send inline from the action's server route/handler; the three cron emails need a scheduler, **Vercel Cron** (`vercel.json` `crons` → a `/api/cron/*` route gated by a `CRON_SECRET`) iterating signed-in users' server-side progress rows (`progress` table) to compute streak/inactivity. Guests (no account/email) never receive email, another reason the guest→sign-in nudge (#27) matters. Every marketing/engagement email carries a working unsubscribe; transactional ones don't need one but still identify the sender.

### E. #27: Autosave trust + guest nudge
- **"Saved" indicator**: autosave is already instant locally + 2s cloud-push when signed in (`sync-client.ts`), but invisible. Add a subtle "Saved • synced {relative time}" (reads last `PROGRESS_CHANGED_EVENT` / sync state). Place on `/profile` + `/settings`, optional tiny nav dot.
- **Guest nudge**: after the first meaningful milestone (first lesson complete), a dismissible "Sign in to save your progress across devices" toast/card, only when NOT signed in AND auth configured. Respects the no-sign-up-wall promise (dismissible, never blocking).

### F. Build order
1. **Foundation**, `profile.ts`, `profile-stats.ts`, `<StatsRow>` (+ `<ActivityHeatmap>`).
2. **`/profile` hub** (#25), consumes the foundation.
3. **Settings cards + onboarding name/detail capture** (#24, #27 indicator).
4. **Email auth** (#26), independent, can run in parallel.
5. **Guest nudge** (#27), after profile + auth exist.

Privacy: profile fields (name/role/etc.) are localStorage for guests; for signed-in users they ride the existing per-user, auth-gated sync (same as notes). `noindex` on `/profile`.

## Superadmin dashboard design (#30, owner-requested 2026-09-17)

**Built (2026-09-17)**: the owner asked to build directly rather than wait for review. This is the biggest access-control surface in the app so far; the implementation follows the conservative design below as written, section by section.

### A. Access model: two tiers, one new env-only tier above the existing one

The app already has a `role` column (`'user' | 'admin'`, DB-persisted) bootstrapped from `ADMIN_EMAILS` (Rule 78). That tier is **not** enough for "set at Vercel": once an email is promoted, `role='admin'` is a normal database row, anyone with database write access (a compromised admin session that can reach a future admin API, a DB migration mistake) could grant it to another account. The owner's ask is a tier that **cannot** be granted through the app at all.

- **`SUPERADMIN_EMAILS`**: new env var, Vercel-only, comma-separated, parsed exactly like `ADMIN_EMAILS` (`src/lib/env.ts`). **Deliberately never persisted to the `users` table**, no `role: 'superadmin'` value, no bootstrap-on-sign-in write. The only source of truth is the env var read fresh on every check. This means superadmin status can be added or revoked by editing Vercel env and redeploying, and, critically, **cannot be self-granted or escalated from inside the app**, unlike `role`.
- `isSuperAdmin(email)`, new helper in `src/auth.ts`, checks `SUPERADMIN_EMAILS` only (mirrors `isAdminUser()`'s shape but with no DB fallback to check).
- `requireSuperAdmin()`, new server helper alongside `requireUser()`/`requireAdmin()`, redirects non-superadmins to `/` (or to `/admin` with a "not authorized" message if they're a regular `admin`, so an admin isn't confused into thinking the whole dashboard is broken).
- **Existing `role`/`ADMIN_EMAILS` admin tier is unchanged** and gets read-only dashboard access (see below), this adds a tier on top, it doesn't replace what Rule 78 already ships.

### B. `/admin`: dashboard (gate: `requireAdmin()`, read-only for plain admins)

1. **Overview stats**, total users, new users (7d/30d, from `users.createdAt`), role breakdown (user/admin/superadmin-by-env), users with a `progress` row (proxy for "ever synced/signed in and used the app") vs. accounts with none.
2. **Growth chart**, signups per day/week from `createdAt`, reusing the `<ActivityHeatmap>`-adjacent charting approach already established for `/profile`, or a simple bar list (no new charting dependency needed for this volume).
3. A visible **"You have read-only access, user management requires superadmin"** notice for plain admins, so the boundary is never silently confusing.

### C. `/admin/users`: user management (gate: `requireSuperAdmin()`, mutations only)

1. **Search + paginated list**, email, name, role, `createdAt`, has-progress-row y/n. Search by email substring (server-side, parameterized query, no raw SQL string interpolation).
2. **Actions per row**:
   - **Promote/demote admin** (`role` toggle), a superadmin action, not exposed to plain admins even for viewing other admins' rows if that ever felt sensitive (default: plain admins CAN see the list read-only, just can't act, simpler mental model, revisit only if the owner wants stricter row-level hiding).
   - **Suspend/unsuspend**: needs a new `users.suspended` boolean column (schema migration). A suspended user's session is rejected: `requireUser()` (and the `auth()` session callback) checks the flag and treats a suspended account as signed-out, with a clear message rather than a silent redirect loop.
   - **Delete**: reuses the exact cascade-delete already proven in `/api/account/delete/route.ts` (FKs already cascade `accounts`/`sessions`/`progress`), just callable against an arbitrary `userId` instead of only `session.user.id`, and gated `requireSuperAdmin()` instead of self-only. Sends the same `account-deleted` email (§D2) as a courtesy, same as self-delete does.
   - **Never**: bulk actions (bulk-delete, bulk-email) and "impersonate / login as this user" are explicitly **out of scope for v1**, both are real security/privacy footguns (impersonation in particular needs its own consent-and-audit model) and neither was asked for. Flag before building either.
3. **A superadmin can never suspend or delete another superadmin** (env-tier accounts are equals; demoting one from the app would defeat the "only Vercel can grant/revoke this" property), the mutation routes check `isSuperAdmin()` on the TARGET user and refuse if true, mirroring the existing self-delete admin guard's shape in `/api/account/delete/route.ts`.

### D. Audit log: new `adminAuditLog` table, append-only

Every mutating admin action (`role` change, suspend/unsuspend, delete) writes a row: `{ id, actorUserId, actorEmail, action, targetUserId, targetEmail, at }`. Rendered as a simple reverse-chronological list at the bottom of `/admin/users` (superadmin-only). This is the accountability mechanism for a dashboard that can delete or suspend accounts, without it, "who suspended this user and why" is unanswerable after the fact. No edit/delete UI for the log itself (append-only by design).

### E. API surface + Rule 44 compliance

New routes, all under `/api/admin/`:
- `GET /api/admin/stats`, `requireAdmin()`.
- `GET /api/admin/users`, `requireAdmin()` (list/search, read-only).
- `PATCH /api/admin/users/[id]`, `requireSuperAdmin()`, body `{ role? | suspended? }`, writes an audit-log row.
- `DELETE /api/admin/users/[id]`, `requireSuperAdmin()`, same cascade as self-delete, writes an audit-log row.

All mutating routes get `rateLimit()` (matching the existing self-delete pattern in `/api/account/delete/route.ts`), same disclosed in-memory-per-lambda-instance caveat as Rule 44 already documents elsewhere, not a new gap this feature introduces. `tests/api-auth-coverage.test.ts` will need these four routes added (they'll auto-pass since all four call `requireAdmin()`/`requireSuperAdmin()`, which are `auth()`-based).

### F. Schema change required

```ts
// src/server/db/schema.ts, users table
suspended: integer("suspended", { mode: "boolean" }).notNull().default(false),

// new table
export const adminAuditLog = sqliteTable("adminAuditLog", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  actorUserId: text("actorUserId").notNull(),
  actorEmail: text("actorEmail").notNull(),
  action: text("action").notNull(), // "role_change" | "suspend" | "unsuspend" | "delete"
  targetUserId: text("targetUserId").notNull(),
  targetEmail: text("targetEmail").notNull(),
  at: integer("at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
});
```
Needs a real Drizzle migration run against the Turso/libsql database (not just a local `file:` dev DB), a deployment step the owner needs to run, same class of step as setting `EMAIL_SERVER` for #26.

### G. Nav / discoverability

A small "Admin" link in the account dropdown, visible only when `session.user.isAdmin` (already computed server-side into the session payload per Rule 78), same visibility rule for both admin and superadmin, since plain admins get real (read-only) value from `/admin` too.

### Defaults shipped (owner didn't answer before asking to build: revisit any of these on request)
1. Plain `admin` (not just `superadmin`) gets read-only `/admin` dashboard access. `/admin/users` stays superadmin-only. Easy to tighten to superadmin-only if that turns out to be the wrong default.
2. Scope shipped as designed: stats + user-management + audit-log only. No content moderation, feature flags, or email-delivery health panel, flag if any of those are wanted, they're straightforward additions to the same `/admin` shell.

## Status log
- 2026-09-17, Plan compiled (8 perspectives). Beginning execution at P0 #1.
- 2026-09-17, **P0 #1 (canonical) DONE + verified.** `tsc` clean. Added Perspective 9 (meta tags / blog / layouts / interlinking) + items 6b–6e per owner request.
- 2026-09-17, **#6b (title double-suffix) DONE + verified** on 30 pages. `tsc`/lint clean. Committed #1 + #6b (`c74c19d`).
- 2026-09-17, **#3 (llms.txt) + #2 (sitemap completeness/freshness) DONE + verified.** sitemap 931→1,734 URLs (803 project pages), lastmod unfrozen; `/llms.txt` live. Owner added a **642-lesson interlink map** as the explicit FINAL task (#22).
- 2026-09-17, Owner directives: keep auto-executing technical fixes; batch on `development-branch`; PostHog→disable autocapture, newsletter→remove, blog→approved (design added).
- 2026-09-17, **DONE this session:** #11 robots/noindex, #19 PostHog autocapture off, #20 newsletter removed, #8 a11y, #4 certificate name field, #6 structured data, #5 CATEGORY_INDEX bundle fix (+drift test), #15 compare copy, #18 doc drift, #6d blog design. **66/66 tests, tsc clean, 10 commits on `development-branch`.**
- **Still open:** #9 (author/date, now folded into the blog for fresh content), #12 (route-scoped bundle trims), #13 loading skeletons, #14 IA dedup, #16 `bigProject` XP `⚠️`, blog BUILD.
- 2026-09-17, **#22 interlink map STARTED then PAUSED for review.** Inline approach confirmed; `rehype-external-links` added; **9 SEO lessons done + committed** (pilot + 8-lesson validation batch, all verified pure-linkification via link-stripping diff, on Sonnet). Remaining 29 SEO + other categories NOT done (interrupted batches reverted to a clean state). Resume when the profile/settings work is reviewed.
- 2026-09-17, **Owner: use Sonnet (not Opus) for all subagents** (cost), saved to memory; applied to the interlink fan-out.
- 2026-09-17, **Research + design pass for Profile/Settings/Accounts** (owner-requested, review-then-build). Full personal-data inventory taken. Design written above (#24 extended, #25 `/profile` hub, #26 auth, #27 autosave trust + guest nudge). Confirmed **autosave is present** (local instant + cloud 2s when signed in); the gap is guest cloud backup + no visible indicator. **No implementation yet, awaiting owner review.**
- 2026-09-17, **#23 (quiz revisable answers + review-before-submit) DONE + verified.** `Quiz.tsx` reworked: selections are freely revisable, a new pre-submit "review your answers" screen lists picks (no correctness) with per-question Edit; only "Submit Quiz" grades. `tsc`/lint clean, 66/66 tests (regression test updated for `handleSubmit`/`finalSelections`). Build succeeds (1,734+ static paths). Next up: #24/#25/#27 profile cluster.
- 2026-09-17, Owner refinements: **auth = Gmail SMTP magic-link ONLY for now** (no Google-OAuth path, no provider picker); added a **full email-templates & notifications spec** (§D2): 3 transactional + 3 engagement (cron) + 3 milestone templates, shared branded layout + prefs/unsubscribe, Vercel-Cron for scheduled sends; in-app toasts already exist (no notification center for now). Added prioritized order (interlink map last) + #28 re-engagement email.
- 2026-09-17, **Owner: "start working on the plan, leave interlink map for later."** Executed Tier 1 in full: **#24/#25/#27 Profile cluster DONE** (`profile.ts`, `profile-stats.ts` aggregator, `<StatsRow>`, `<ActivityHeatmap>`, `/profile` hub, Settings Profile/Account/Preferences/Autosave cards, onboarding name+goal capture, Nav profile entry point), verified live in browser, reactive updates confirmed via `PROGRESS_CHANGED_EVENT`. **#26 email auth code-complete**: Nodemailer provider + branded `src/lib/email/` layer (magic-link/welcome/account-deleted templates), `/login` single-email-form, Google unpromoted everywhere. `tsc`/lint clean, 66/66 tests, full production build passes. **Not yet verified**: an actual Gmail-App-Password send-and-click round trip (needs owner's real `EMAIL_SERVER`/`EMAIL_FROM` on Vercel). 3 commits on `development-branch`.
- 2026-09-17, **Owner: "Create superadmin dashboard, user management... add these in the plan too."** Added **#30 Superadmin dashboard + user management** as a new owner-requested `⚠️ DECISION` item, full design written above (env-only `SUPERADMIN_EMAILS` tier above the existing DB-persisted `role`/`ADMIN_EMAILS` admin tier, `/admin` overview + `/admin/users` management + append-only audit log, `users.suspended` schema addition, Rule 44-compliant API surface). **Design only, not built**, access-control changes and a schema migration go through review first, same as Profile/Settings/Auth did. Two open questions flagged for owner sign-off before implementation.
- 2026-09-17, **Owner: "go ahead and start building #30 superadmin dashboard."** Built per the design above, unchanged. `SUPERADMIN_EMAILS` (`src/lib/env.ts`), `isSuperAdminEmail()`/`requireSuperAdmin()` (`src/auth.ts`), `users.suspended` + `adminAuditLog` schema (migration `0001_overrated_dagger.sql`, applied to local dev DB, every query hand-verified against the real SQLite dialect via a scratch script). Suspension enforced in 3 places (signIn callback denies new sign-in; session payload carries `isSuspended` for an already-active session; the 3 routes calling `auth()` directly each check it), documented as **AGENTS.md Rule 80**. `/admin` (read-only for any admin) + `/admin/users` (superadmin: search/promote/demote/suspend/delete, a superadmin can never target another superadmin or themselves) + audit log UI, 4 new rate-limited `/api/admin/*` routes. `tests/api-auth-coverage.test.ts`'s `AUTH_MARKERS` updated (`requireSuperAdmin` wasn't recognized, 2 routes failed until fixed). Verified: `tsc`/lint clean, **70/70 tests**, full `npm run build` succeeds, `/admin`+`/admin/users` correctly redirect unauthenticated visitors to `/login`. **Two open design questions defaulted rather than blocking** (see "Defaults shipped" under the design section), flag either to change. **Not verified**: a real signed-in admin/superadmin browser session, which needs #26's real email credentials plus a real `SUPERADMIN_EMAILS` value on the actual Vercel deployment, neither available in this environment. Docs updated: README (routes/key-files/env-vars/.env.example), AGENTS.md Rule 80, PROJECT_LOG.md. 1 commit on `development-branch`, not pushed.
- 2026-09-17, **Owner: "continue building #28 re-engagement email."** Built per §D2's engagement-template spec (streak-reminder, resume-learning, weekly-digest), with one design refinement made during implementation: prefs moved from the originally-sketched localStorage pattern to new `users.emailStreakReminder`/`emailResumeLearning`/`emailWeeklyDigest` DB columns, since a cron job has no browser to read localStorage from, this wasn't spelled out in the original §D2 sketch and only became obvious once actually wiring the cron routes. New Settings "Email Notifications" card (signed-in only, all opt-in default OFF, `/api/account/email-prefs` GET/PATCH). 3 new `/api/cron/*` routes wired into `vercel.json`'s `crons`, gated by `isCronAuthorized()` checking Vercel's auto-injected `CRON_SECRET` bearer header. `streak-reminder`/`resume-learning` both trigger on an EXACT date-string equality (not a range) so each fires exactly once per lapse, a range would re-send daily for the whole window, which is the nagging behavior §D2 explicitly didn't want; documented as the load-bearing reason in **AGENTS.md Rule 81**. One-click unsubscribe via a new HMAC-signed token (`src/lib/email/unsubscribe-token.ts`, keyed on the existing `AUTH_SECRET`, no new secret), `/api/email/unsubscribe` is intentionally public (a click from an email client has no session), added to `tests/api-auth-coverage.test.ts`'s `EXEMPT` with a verified reason; `isCronAuthorized(` added to that same test's `AUTH_MARKERS` (a real gate, just not a user session). Migration `0002_married_lockheed.sql` applied to local dev DB. Verified: `tsc`/lint clean, **75/75 tests**, full `npm run build` succeeds, the unsubscribe-token sign/verify round trip (including tamper + garbage rejection) and all three cron routes' query + trigger-condition logic hand-verified against real seeded data via a scratch script, and the 401/401/200 response-code split confirmed live (`/api/account/email-prefs` and `/api/cron/streak-reminder` correctly reject unauthenticated/unsigned requests; `/api/email/unsubscribe` correctly serves a public "invalid link" page for a garbage token). **Not verified**: an actual cron-triggered send with a real recipient, needs `CRON_SECRET` set and Vercel's scheduler actually invoking the route on the live deployment, plus #26's real email credentials, neither available in this environment. Docs updated: README (key files, env vars, `.env.example`, Settings/routes description, test count), AGENTS.md Rule 81. 1 commit on `development-branch`, not pushed.
- 2026-09-17, **Owner: "organize the project folder files."** This file (and `PROJECT_LOG.md`/`PROJECTS_PLAN.md`/`PROJECTS_AUTHORING_GUIDE.md`/`BACKLOG.md`) moved from the repo root into `docs/`, this doc is now `docs/IMPROVEMENT_PLAN.md`. Also moved: `resources/seo-aeo-geo-master-guide.html` → `docs/seo-aeo-geo-master-guide.html` (and the now-empty `resources/` removed), `docs/superpowers/` (dead planning docs from the shipped accounts+sync feature) renamed to `docs/archive-superpowers-accounts-sync-2026-08-20/` to signal it's historical. Verified via repo-wide grep before moving: zero programmatic references to any of the 5 moved `.md` files anywhere (no `readFileSync`, no `import()`, no markdown links, nothing in `package.json`/CI), only prose citations, which still read fine as plain text. `.vercelignore` simplified (its specific per-file lines were redundant under the existing broader `/docs/` rule, and that same rule now also correctly excludes this file from the Vercel bundle, which it never had before). `AGENTS.md`/`CLAUDE.md`/`README.md` stay at root (`CLAUDE.md`'s `@AGENTS.md` import is location-relative). `tsc`/lint clean, 75/75 tests, build passes. Nothing else in this document changed.
