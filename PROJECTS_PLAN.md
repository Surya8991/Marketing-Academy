# Hands-On Projects Layer, Implementation Plan

> **PRIORITY: HIGH.** This is the active roadmap for the next major phase of the project. Section 0 is the running order.
>
> Status: PROPOSED, awaiting approval. **No code written yet, this document is the only deliverable so far.**
>
> ⚠️ **This document now carries ~120 verified findings, 13 of them P0**, none implemented.
>
> Most are unrelated to the projects feature and were found while planning it: five interlocking completion-integrity bugs (**0.1 to 0.1f**), a 20-item lesson-quality backlog (**section 12**), and ~94 findings from a five-lens adversarial code audit (**section 14**) covering security, state integrity, accessibility, performance and new-learner UX.
>
> **The three most urgent, all confirmed in source:** `/api/groq` is an unauthenticated LLM proxy on your API key with **zero callers**; cloud sync writes every user to **one global KV key**, exposing private notes; and three unguarded `localStorage` calls crash **every page** for anyone with site data blocked.
>
> Section 0 carries the full execution order, twelve stages (0 through 10, with 3b as an eleventh inserted stage), ordered by live harm rather than by topic. Stage 10 (5-questions-per-lesson quiz expansion) was added during Stage 1 execution, see its own entry for why it's sequenced last.
>
> 🔍 **This document has been audited against itself, see section 18.** Two agents found 62 findings including 8 P0; six factual errors are fixed inline and the rest are recorded. **Read 18.7 before starting Phase 1** — two P0 gaps would ship defects this plan exists to prevent, and the mode-distribution percentages are a 5% sample presented as measurement.
>
> Decisions locked by the owner:
> - **Projects on every lesson, present and future. Track lessons first** (0.2)
> - Pilot-first rollout
> - Strict verified company roster, with full company details, mixing global and Indian companies across sizes, sectors and revenue
> - Full XP / completion tracking
> - All six proposed additions accepted (section 9)
> - A dedicated `/projects` hub with search, filters and labels (section 5)
> - Every project carries a free-and-paid Recommended Tools section (section 2.3)
> - Projects appear on both the lesson page and the hub, from one definition (section 5A)
> - **Bypass-completion migration: grandfather with a one-time notice** (16.3, option C)
> - **Per-lesson quiz threshold lowered to 75% (3 of 4 correct)** — the plan's stated "80%" is unreachable for a 4-question quiz (only 0/25/50/75/100% are possible scores), so 75% is the actual threshold that delivers the plan's own "one miss shouldn't force a retry" intent (16.5, option A, corrected during implementation)
> - **Certificate eligibility: 100% of lessons plus a passed track quiz** (16.6, option B)
> - **Quiz answer reveal moves to after full submission**, not per-question (16.7, option A)
>
> UX reference: **ToolForge** (`master-tools-hub.vercel.app`), the owner's own tools hub. Patterns adopted and rejected are itemised in 5.9.
>
> **The brief, in two reader complaints:**
>
> 1. *"I finished `/learn/seo/technical-seo` knowing what crawlability is, and I still cannot check it on my own site."*
> 2. *"I finished `/learn/paid-ads/paid-ads-101` and I may or may not run a real ad, but either way I should know what to do in what situation."*
>
> These need structurally different answers, a **diagnostic runbook** and a **decision simulation**. Section 2.3 is the plan for both, and everything else in this document exists to deliver it.

---

## 0. Execution order by priority

This section is the **authoritative running order**. Sections 1-12 below are reference material, organised by topic rather than by importance; read them for detail, execute in the order here.

Every known issue, in execution order. **Nothing below is implemented.** Roughly 120 findings total: 20 from the lesson audit (section 12), ~94 from the five-lens code audit (section 14), and the 5 integrity bugs in 0.1.

Ordering principle: **live harm to real users first**, then things that block other work, then everything else by leverage.

> ⚠️ **Rule numbers inside this document are PROPOSED and currently collide with `AGENTS.md`.** This plan proposes rules numbered **1-19** (section 7), **20-22** (10.9), **23-28** (11.9), **29** (0.2), **40** (0.1c-i), **41-43** (13.8) and **44-48** (14.8), plus four unnumbered drafts in 17.7. `AGENTS.md` already uses **1 through 44** for real, different rules. **The section 7 block collides head-on with AGENTS.md 1-19, and those are the rules most often cited by number elsewhere in this document** (5, 13, 14, 15, 16, 18, 19), so a citation like "per Rule 15" is currently ambiguous between two different rules. Renumber every proposed rule from **45 upward** at merge time, and re-resolve every in-document rule citation. The only ones already merged and therefore authoritative are `AGENTS.md` Rules **36-40** (integrity gates, quiz shuffling) and **41-44** (client bundles, localStorage, `sourceCategory`, API auth). Treat inline numbers below as draft labels, not references.

#### Stage 0, stop the bleeding. Ship first, independently

Each of these is exploitable or breaking for someone right now.

| # | Item | Where | Why first |
|---|---|---|---|
| **0.1** | Delete `/api/groq` | `api/groq/route.ts:83` | Unauthenticated LLM proxy on your API key with **zero callers**. Uncapped billing. Deleting dead code is the cheapest P0 anyone will ever fix |
| **0.2** | Fix or disable cloud sync | `api/sync-proxy/route.ts:25` | One global KV key means any visitor can read another user's **private notes** or wipe all progress. Disable the feature until it is per-user keyed |
| **0.3** | Guard the 3 unguarded `localStorage` calls | `ThemeToggle.tsx:18`, `OnboardingModal.tsx:25`, `LessonNotes.tsx:15` | Blocked site data crashes **every page**. Three try/catch blocks |
| **0.4** | Gate the certificate on 100% | `certificates/[slug]/page.tsx:249` | Prints "Certificate of Completion" at 0%. Found by 3 of 5 audits independently |
| **0.5** | Fix quiz keyboard focus | `Quiz.tsx:266` | `disabled={answered}` drops focus to `<body>` on every question of every lesson |
| **0.6** | Fix the invisible "Clear all" button | `tools/ToolsClient.tsx:163` | 1:1 contrast in **both** themes. One token swap |

#### Stage 1, the completion-integrity family. Ship as one batch

They interlock; fixing one alone moves the hole rather than closing it.

| # | Item | Section |
|---|---|---|
| **1.1** | Track checkboxes bypass the quiz | 0.1 |
| **1.2** | Quiz reveals answers, then allows retry | 0.1c |
| **1.3** | Shuffle answer positions (Fisher-Yates, recompute `correct`) | 0.1c-i |
| **1.4** | Track quiz never calls `setQuizPassed()`, so unticking re-locks permanently | 14.3 T4 |
| **1.5** | 80% pooled pass marks failed lessons complete | 0.1d |
| **1.6** | Align quiz thresholds: 100% per-lesson vs 80% per-track is backwards | 14.6 U7 |
| **1.7** | `markIncomplete()` does not reverse XP | 0.1e |
| **1.8** | Lint or test failing on a 4th ungated `markComplete()` | 0.1f |

> Prerequisite for 1.3: rewrite the single "All of the above" option in `analytics/consent-mode`. It is the only position-dependent option in all 8,341 audited.

#### Stage 2, correctness bugs users hit today

| # | Item | Where | Impact |
|---|---|---|---|
| **2.1** | Resolve `sourceCategory ?? category` in all ID construction | `achievements.ts:85,108`, `SkillMapClient.tsx:31`, `CategoryProgress.tsx:18` | `fundamentals` capped at **27/40** forever; two achievements **mathematically unreachable** |
| **2.2** | Preserve raw value on storage parse failure | `engagement.ts:63`, `progress.ts:26` | Silent permanent loss of all XP and progress |
| **2.3** | Validate shape in `getEngagement()`, add `catch` to `addXP` | `engagement.ts:62,116` | A `null` field throws on every completion |
| **2.4** | Surface storage write failures in the UI | `progress.ts:39`, `engagement.ts:85`, `bookmarks.ts:36` | Confetti fires and nothing persists |
| **2.5** | Dedup `saveBookmarks()` | `bookmarks.ts:30` | "Bookworm" unlockable with one lesson in five tabs |
| **2.6** | Decay `streak` on read | `engagement.ts:127` | Shows 🔥 7 months after the streak died |
| **2.7** | Fix the reset sweep | `SettingsClient.tsx:248` | Leaves `ma_quiz__*` and `ma_recent` behind |
| **2.8** | Delete or fix the dead write lock | `engagement.ts:101` | Multi-tab writes silently discard each other |

#### Stage 3, performance. Highest leverage per minute of work in the document

| # | Item | Where | Measured |
|---|---|---|---|
| **3.1** | Export `CATEGORY_INDEX`, import it in Nav | `Nav.tsx:12` | **−48 KB gzip on every route.** One import swap |
| **3.2** | Move `dompurify` into the dynamic block | `Mermaid.tsx:100` | **−10 KB gzip on 642 pages.** Two lines |
| **3.3** | Lazy-load `posthog-js` after the key check | `PostHogProvider.tsx:3` | −64 KB gzip on every route |
| **3.4** | Paginate or collapse `/learn` | `learn/page.tsx:29` | 1.33 MB document, 5.7× the next largest page |
| **3.5** | Gate Mermaid on `IntersectionObserver` | `Mermaid.tsx:99` | 135 KB gzip at hydration on 419 pages |
| **3.6** | Add `@next/bundle-analyzer` + a CI size budget | `package.json:6` | 3.1-3.3 shipped precisely because nothing measures |

> 3.1 and 3.2 together are roughly **58 KB gzip off every route for about ten minutes of work**.

#### Stage 3b, make the rules enforceable

| # | Item | Section | Why here |
|---|---|---|---|
| **3b.1** | Add `"test": "node --test tests/"`, no new framework | 15.6 | There is currently **no test script and no test file in the repo** |
| **3b.2** | Tier 1 data validation over curriculum, quizzes, roster | 15.3 | Turns this document's rules into something enforced rather than aspirational |
| **3b.3** | Property test: shuffling preserves `correct` across all 2,252 questions | 15.3 | The single highest-value test here. Blocks the Rule 40 trap permanently |
| **3b.4** | Tier 2 regression: no 4th ungated `markComplete()`, achievements satisfiable | 15.4 | Implements Stage 1.8, which is otherwise unimplementable |
| **3b.5** | CI job: `lint && test && build` + the bundle-size assertion | 15.7 | Stops the 3.1-3.3 class of regression shipping again |

> Sequenced after Stage 3 because 3b.2 and 3b.4 would have caught several Stage 2 bugs at authoring time, and everything from Stage 8 onward depends on invariants that nothing currently enforces.

#### Stage 4, blockers for the projects layer

| # | Item | Section |
|---|---|---|
| **4.1** | 10 lessons with zero `##` headings | 12.2 |
| **4.2** | Resolve 8 near-duplicate slug pairs | 12.6 |
| **4.3** | 4 sub-700-word stub lessons | 12.3 |

#### Stage 5, trust and honesty in user-facing copy

| # | Item | Where |
|---|---|---|
| **5.1** | Warn that progress is browser-only, promote Export | `SettingsClient.tsx:279`, `page.tsx:197` |
| **5.2** | Hide Cloud Sync unless configured, rewrite for learners | `SettingsClient.tsx:316` |
| **5.3** | Fix stale counts on six pages: "393+", "15 disciplines", "22 tracks" | `learn/page.tsx:11`, `page.tsx:72`, +4 |
| **5.4** | Fix the dead GitHub URL | `Footer.tsx:27` |
| **5.5** | Remove the fake "Popular" badges | `TracksPageClient.tsx:116` |
| **5.6** | Label `/compare` honestly, 7 of 112 pairs have real data | `compare/[slug]/page.tsx:324` |
| **5.7** | `" ,  "` residue in 53 files | 12.1 |

#### Stage 6, accessibility beyond the P0s

| # | Item | Where |
|---|---|---|
| **6.1** | `aria-live` on quiz results, XP toasts, search counts, settings status | `Quiz.tsx:135`, `AchievementToast.tsx:82`, +3 |
| **6.2** | Command palette combobox semantics | `CommandPalette.tsx:208` |
| **6.3** | Icon plus text on wrong answers, not colour alone | `Quiz.tsx:255` |
| **6.4** | Real text alternatives for Mermaid diagrams | `Mermaid.tsx:239` |
| **6.5** | Global `:focus-visible` rule | `globals.css` |
| **6.6** | `prefers-reduced-motion` guard, especially confetti | `MarkComplete.tsx:141` |
| **6.7** | `aria-pressed` on all filter chips | 5 files |
| **6.8** | Fix nested `<main>` landmarks in 9 pages | `layout.tsx:73` + 9 |

#### Stage 7, UX quality

| # | Item | Where |
|---|---|---|
| **7.1** | Paginate and persist the track quiz (84 questions, no save) | `TrackQuizPageClient.tsx:141` |
| **7.2** | Empty states for Achievements and Skill Map | `AchievementsClient.tsx:65` |
| **7.3** | Mobile XP badge and search affordance | `StreakBadge.tsx:30`, `Nav.tsx:310` |
| **7.4** | Certificate print rule to hide nav and footer | `certificates/[slug]/page.tsx:73` |
| **7.5** | Onboarding: add "totally new", suppress on lesson pages | `OnboardingModal.tsx:23` |
| **7.6** | Collapse `/learn` categories on mobile | `learn/page.tsx:28` |
| **7.7** | Reduce the 9 competing homepage entry points | `page.tsx:24-53` |
| **7.8** | Mobile ToC `max-height`, quiz pill overflow at 375px | `TableOfContents.tsx:91`, `Quiz.tsx:224` |

#### Stage 8, the projects layer

| # | Item | Section | Status |
|---|---|---|---|
| **8.1** | Phase 0, roster + datasets + types | 6 | ✅ Done, Session 73. 77 verified companies (66/34 global/india, 38 mega/27 large/5 mid/7 small), 8 starter datasets, full type system in `src/lib/projects/types.ts` |
| **8.2** | Phase 1, pilot + hub + review gate | 6, 11.8 | ✅ Done, Session 73. 19 pilot lessons (18 solo-founder + paid-ads-101), 34 projects, `/projects` hub, full component layer. Review-gate verdict: PASS-WITH-CONCERNS on first pass (backwards simulation economics, dead anchor links, unrendered teardown data) — all found defects fixed and re-verified live in browser. See session log below |
| **8.2b** | Compute centrality bands + assign tiers/archetypes from the section 17 matrix | 17 | ⏸️ Not done. Pilot used ad hoc archetype/tier assignment (§17's matrix, not yet computed programmatically across all 642 lessons). Needed before Phase 2 scales past the pilot's 19 lessons |
| **8.3** | Phase 2, track lessons (240 lessons, ~480 projects) | 6, 0.2 | 🔄 In progress, Session 76. Technical SEO Mastery track (12 of its 13 lessons — `mobile-first-indexing` was already done in Session 74) ✅ done: 24 new projects. Owner explicitly directed starting Phase 2 before a separate human pilot-walkthrough occurred, superseding this row's prior gate for the SEO scope; the gate still applies to the rest of the library. **TODO, not started**: the other 3 SEO-named tracks (On-Page SEO Mastery, Off-Page SEO Mastery, AI Search Optimization — 18 more `seo`-category lessons, scoped in detail in 8.3a below) and the remaining 196 track lessons across all other categories |
| **8.4** | Phase 2b, concept scenarios, bundled with the 45 stale-year fixes | 10, 12.5 | 🔄 In progress, Session 76. Infra built from scratch (none existed before this session) + 24 scenarios shipped for the Technical SEO Mastery track. Design deviates from this section's preferred build-time rehype injection — see 8.4a. **TODO, not started**: the other 18 SEO-track lessons + the rest of the library (~600-700 more scenarios per this section's original estimate) |

**Session 73 pilot results, in detail:**
- Roster (`src/lib/case-companies.ts`): 77 companies, every entry with a real cited `exit.source` URL. First research pass skewed 74%/26% global/India with zero mid/small-scale exits; a targeted gap-fill pass corrected this to 66%/34% and 38 mega/27 large/5 mid/7 small.
- 8 starter datasets in `public/project-data/`, including an ad-account export whose day-3/9/14 cumulative numbers for the "Core Terms" ad group exactly reproduce this document's own §2.3b worked example.
- Component layer: `ProjectList`/`ProjectCard`/`ProjectStep`/`SimulationRunner`/`SimulationDebrief`/`LiveTrackPanel`/`TeardownItemCard`/`ToolStack`/`OutputSample`, `src/lib/projects-progress.ts` (localStorage + XP, `project`=40/`bigProject`=100 added to `engagement.ts`'s `XPAction`), `TableOfContents.tsx` `extraSections` (also fixed the pre-existing Quiz-missing-from-ToC gap), `/projects` hub with search/filter/sort mirroring `ToolsClient.tsx`, `scripts/build-projects-index.mjs` generator.
- Content: 34 projects across 9 category modules (`src/lib/projects/{fundamentals,mental-models,seo,content,email,copywriting,growth,analytics,paid-ads}.ts`) + `src/lib/track-projects.ts` (4 big projects for `solo-founder`). 2 explicit `no-project` verdicts (`what-is-marketing`, `opportunity-cost-thinking`), proving Rule 23 (§11.9) holds in practice.
- **Review-gate findings, all fixed**: the paid-ads-101 simulation's "costly" terminal originally spent *less* and had a *better* cost-per-conversion than the "optimal" terminal (backwards) — rewritten into two distinct, genuinely-worse terminals (`day14-restart-penalty`: 2 conversions/£285.70 per conv/CTR below industry average vs. optimal's 4/£149.81/above average; `day14-wasted-spend`: flat conversions at a higher CPC). 5 `lessonAnchor` values pointed at prose text with no real heading id, fixed to real slugs or the containing section. 19 `conceptsCovered` entries were sentence fragments instead of concept names (Rule 46). One tool FK typo (`Semrush` → `SEMrush`). `TeardownItem` data (specimen/answerKey/distractors) was authored but never rendered by `ProjectCard`, fixed via new `TeardownItemCard.tsx` (Rule 48). All fixes verified live in the browser after re-running `npx tsc --noEmit`, `npm run build`, `npm run lint`, `npm test` (18/18 pass).
- **Not yet done**: a human walkthrough of the pilot beyond what the automated review-gate covered. Per this plan's own gate ("if either fails, nothing downstream matters and Phase 2 does not start"), 8.3 should not begin until that happens. **Superseded for the Technical SEO Mastery scope only** by the owner's explicit Session 76 instruction to proceed; the gate remains binding for every other track.

**Session 76, Technical SEO Mastery track (8.3 + 8.4), in detail:**

- **Scope**: all 4 SEO-named tracks (Technical SEO Mastery, On-Page SEO Mastery, Off-Page SEO Mastery, AI Search Optimization) cover 44 unique lessons; 33 are `seo`-category, 11 are cross-category (6 `pr-communications`, 2 `content`, 2 `ai-marketing`, 1 `copywriting`) that only appear because those tracks happen to reference them. Owner decision: `seo`-category only for now, cross-category lessons stay untouched. Of the 33, 3 already had projects (`keyword-research`, `on-page-seo`, `mobile-first-indexing`), leaving 30. Owner further scoped this session to the Technical SEO Mastery track's 12 remaining lessons as a checkpoint, with the other 3 tracks' 18 lessons explicitly deferred (**8.3a below**). ⚠️ **This "4 SEO-named tracks" framing was later found to be incomplete**: it filtered by track *name* rather than by which tracks actually reference a `seo`-category lesson. A full sweep found `content-decay-refresh` reachable only via the non-SEO-named "Content Strategy Mastery" track, bringing the true remaining total to 19, not 18 — corrected in 8.3a below.
- **8.3 delivered**: `how-search-works`, `technical-seo`, `core-web-vitals`, `https-security-seo`, `internal-linking`, `schema-structured-data`, `duplicate-thin-content`, `ecommerce-product-page-seo`, `log-file-analysis`, `llms-txt-ai-crawler-management`, `international-seo`, `seo-site-migrations` — 2 projects each (24 total, tier pairs taken directly from `projects-assignment.ts`'s `cappedTierPair`, not re-derived), added to `src/lib/projects/seo.ts` (now 15 lessons, 30 projects total in that file).
- **8.4 delivered, infra built from scratch**: no `ConceptScenario` type, component, or injection mechanism existed anywhere in the codebase before this session (confirmed by grep). Built `src/components/InAction.tsx`, a global MDX component (registered in root `mdx-components.tsx` alongside Callout/Quiz), and authored 24 scenarios (2 per lesson) inserted directly into the 12 lessons' MDX files right after the heading each one illustrates. **Design deviation from this section's 10.5**: skipped the preferred build-time rehype-injection plan (zero MDX edits) in favor of the direct-embed fallback this section itself sanctions (10.5, "a one-time scripted insertion into the MDX"), because `AGENTS.md` Rule 10 already documents this repo's `@next/mdx`/Turbopack setup breaking on non-string-tuple plugin forms — a novel custom rehype transform was judged too much build-break risk for one session with no test coverage to catch it. See `AGENTS.md` Rule 49.
- **Execution**: 3 parallel `general-purpose` subagents (Agent tool, not Workflow — no multi-agent-orchestration opt-in this session), 4 lessons each, disjoint files so no write conflicts. Each agent researched real citations (WebSearch/WebFetch) and authored both the projects and the `InAction` inserts for its 4 lessons in one pass.
- **Review gate**: `tsc --noEmit`, `npm run lint`, `npm test` (18/18) all clean. A structural audit script (checks every `lessonAnchor` resolves to a real MDX heading, every `companyId` resolves in `case-companies.ts`, every `toolName` resolves in `tools-directory.ts`, diagnostic steps carry all 5 runbook parts, mode/steps-vs-teardownItems consistency) found 7 issues, all the same root cause: 4 projects used invented placeholder tool names (`"Manual JSON-LD draft"`, `"Manual link map spreadsheet"` ×2, `"Manual comparison sheet"` ×2, `"Hosting or CDN bot-traffic dashboard"`) instead of a real cataloged tool, violating Rule 11. Fixed by adding two missing-but-already-informally-used tools to `tools-directory.ts` for real: **`Google Sheets`** (was already used 20+ times across `email.ts`/`fundamentals.ts`/the original `keyword-research` pilot project without ever being cataloged — a pre-existing gap this session closed for the whole codebase, not just its own new content) and **`Cloudflare`** (the `where` field already named it for a bot-traffic-dashboard step). Company-variety check: no company used more than 2× across all 30 projects in the file. Archetype-variety check: no lesson repeats an archetype within its own pair. 6 of the 24 `InAction` citations were independently spot-checked (WebFetch/WebSearch against the actual claimed source): all 6 confirmed accurate, including exact-number matches (e.g. CloudEagle "23k users in 2022 to 82k in 2023, an incredible 252.52% increase," Visit Seattle "Jumped from 8 to 76... 850% improvement," Read the Docs "73 TB of zipped HTML files in May 2024"). `npm run build` verified clean after fixing an unrelated merge artifact (see below). Live-checked in browser: `schema-structured-data` lesson renders its `InAction` card and correctly shows "2 projects · ~65 min total" in the collapsed Practice Projects summary.
- **Two mechanical mistakes caught and fixed during this session, worth recording**: (1) a hand-written merge script (concatenating 3 agents' scratch output files into `seo.ts`) had a regex that silently failed to strip an `export const BATCH_X = {` wrapper line when the source file had a blank line between its `import` and `export` statements — first attempt produced a syntactically broken file with 2 of 12 lesson keys missing/misplaced. Caught by grepping the merged file's key list against the expected 12 before running `tsc`, not by `tsc` itself (a `Record<string, Project[]>` with misplaced keys can still be syntactically valid TS with the wrong runtime shape). (2) a leftover `.bak` backup file inside `src/lib/projects/` (from the merge script's safety copy) broke the Turbopack build entirely ("Unknown module type") since that directory is dynamically globbed — deleted before rebuilding. Neither reached the final committed state, but both are recorded because a `Record` key silently ending up in the wrong place, or an intermediate scratch file surviving into a source directory, are exactly the class of error a fast merge script produces and a build failure (not a type error) is what actually catches.
- **Process-improvement analysis** (requested by the owner mid-session, to apply to Stage 8.3a and all further Phase 2 batches): the 3 agents cost 267k/280k/282k tokens respectively for 4 lessons each (~67-70k/lesson), ~90-103 tool calls each. Two concrete causes identified, both fixable without touching output quality:
  1. **Duplicated reference-file reads.** Every agent independently read `types.ts` (259 lines), `case-companies.ts` (2,230 lines / 77 companies), `tools-directory.ts` (1,115 lines / 113 tools), and 2 full example projects (~750 lines combined) — identical content read 3 times. Fix: inline a condensed reference pack (trimmed type shape, one worked example, only the ~10 companies actually relevant to that batch) directly into the prompt instead of pointing agents at the files.
  2. **Context compounding within a single agent session.** Every tool call re-sends the full conversation so far as input; an agent doing 4 lessons sequentially pays for lessons 1-3's accumulated research and output again on every call by lesson 4. Fix: drop batch size from 4 lessons/agent to 2, which more than offsets the fixed per-agent setup cost that (1) already reduces.
  Also recommended: an explicit research budget per concept (e.g. max 2 searches + 1 fetch before moving to a better-sourced concept instead of searching exhaustively) and dropping the agent-side `tsc --noEmit` self-check (redundant with the one compile I run once at merge time across the whole file). Estimated combined effect: 30-45% fewer tokens per lesson at equal or better quality (the condensed pack reduces reference ambiguity rather than adding it). **This analysis is now implemented, not just recorded**: `PROJECTS_AUTHORING_GUIDE.md` is the operational playbook (fill-in agent prompt template with the condensed pack inlined), backed by 3 tested scripts (`scripts/get-track-batch-info.mjs`, `scripts/merge-projects-batch.mjs`, `scripts/audit-projects.mjs`) that also fix the 2 mechanical mistakes from this session's hand-written merge/audit (see AGENTS.md Rule 56). Still not yet run against real content, no measured before/after number exists — the guide's section 4 has a placeholder to fill in once Stage 8.3a actually runs.

#### Stage 8.3a — Owner-set priority order across all 24 tracks (set Session 76)

**Use `PROJECTS_AUTHORING_GUIDE.md` for every track below, don't re-derive the process.** Run `node --import tsx scripts/get-track-batch-info.mjs <track-slug>` (add `--category-only=<cat>` only for a track you want to scope down, e.g. `seo`) to get that track's exact remaining-lesson list and tier pairs before authoring.

The owner reviewed the full 24-track list (all categories, not just SEO) and set this explicit order. **Supersedes the earlier SEO-only framing below it** — that detail is kept because it's still accurate for whichever SEO tracks come up in the queue.

| Priority | Track | Slug | Status (lessons w/ projects / total) |
|---|---|---|---|
| — | ⚙️ Technical SEO Mastery | `technical-seo` | ✅ **13/13, done (Session 76)** |
| 1 | 🤖 AI Search Optimization | `ai-search-optimization` | 0/14 |
| 2 | 🤖 AI-First Marketer | `ai-first-marketer` | 0/14 |
| 3 | 🔗 Off-Page SEO Mastery | `off-page-seo-mastery` | 0/13 |
| 4 | 📄 On-Page SEO Mastery | `on-page-seo-mastery` | 8/13 |
| 5 | 🏢 B2B Marketing | `b2b-marketer` | 5/21 |
| 6 | 💸 Paid Ads Mastery | `paid-ads-mastery` | 1/15 |
| 7 | 📊 Data-Driven Marketer | `data-driven-marketer` | 3/19 |
| 8 | 🎯 CRO & Conversion Mastery | `cro-mastery` | 0/15 |
| 9 | 📈 Analytics & Measurement Mastery | `analytics-mastery` | 1/15 |
| 10 | 📧 Email & Lifecycle Mastery | `email-lifecycle-mastery` | 2/15 |
| 11 | 🚀 Solo Founder | `solo-founder` | 17/18 (1 lesson from done) |
| 12 | 🎯 Freelancer & Agency | `freelancer-agency` | 10/16 |
| 13 | ✍️ Content Creator | `content-creator` | 9/18 |
| 14 | 🧠 Marketing Mental Models | `mental-models` | 3/13 |
| 15 | ✍️ Copywriting Mastery | `copywriting-mastery` | 1/15 |
| 16 | 📝 Content Strategy Mastery | `content-strategy` | 2/14 |
| 17 | 🚀 Growth Marketing Mastery | `growth-marketing-mastery` | 2/14 |
| 18 | 🛒 E-commerce Growth | `ecommerce-growth` | 2/18 |
| 19 | 📱 Social Media Manager | `social-media-manager` | 0/14 |
| 20 | 🧩 Product Marketing Mastery | `product-marketing-mastery` | 0/14 |
| 21 | 🎨 Brand Strategy Mastery | `brand-strategy-mastery` | 0/14 |
| 22 | 🧭 Psychology of Marketing | `psychology-of-marketing` | 0/14 |
| 23 | 📣 PR & Communications Mastery | `pr-communications-mastery` | 0/14 |

Priorities 11-23 (everything after the owner's explicit 1-10) were proposed by the assistant, not owner-specified, weighted toward finishing near-complete tracks first (Solo Founder needs exactly 1 lesson) then cross-cutting/foundational skills (Mental Models, Copywriting) before more specialized ones (Brand Strategy, Psychology, PR). **Re-confirm or reorder this tail if it doesn't match actual priority.**

**Multi-category tracks need more than one category's projects/concept-scenarios files.** Several tracks in this list mix categories (e.g. `ai-search-optimization` = `seo`+`ai-marketing`; `b2b-marketer` = `fundamentals`+`mental-models`+`product-marketing`+`content`+`email`+`analytics`) — running `get-track-batch-info.mjs` without `--category-only` shows every category involved; batch and merge per category, not per track.

**SEO-specific detail, still valid for tracks 3/4 above and Content Strategy's one `seo` lesson:**
- **On-Page SEO Mastery**: `search-intent`, `image-seo-visual-search`, `video-seo` (3 lessons; the rest of this track's `seo` lessons are already covered via Technical SEO Mastery's overlap)
- **Off-Page SEO Mastery**: `link-building`, `entity-seo`, `eeat`, `local-seo`, `reddit-forum-seo`, `brand-serp-control` (6 lessons)
- **AI Search Optimization**: `aeo`, `voice-search-seo`, `ai-overviews-geo`, `ai-mode-search-optimization`, `llmo`, `seo-for-ai-platforms`, `content-clusters`, `zero-click-search`, `ai-search-visibility-metrics` (9 `seo` lessons; the track also needs 2 `ai-marketing` lessons, `ai-search-ranking` + `rag-for-marketers`)
- **Content Strategy Mastery**'s one remaining `seo` lesson: `content-decay-refresh` (`search-intent` is already listed above via On-Page SEO Mastery)
- **Also outstanding, found by `scripts/audit-projects.mjs` but not fixed (out of Session 76's stated scope)**: the original Session 73 pilot's `keyword-research` and `on-page-seo` projects use invented placeholder `toolName` strings (`"Written justification"`, `"Manual page crawl"`, `"Manual calculation"`, `"Manual rewrite"`, `"Manual edit"`), the same Rule 55 issue fixed in this session's own new batch. Run `node --import tsx scripts/audit-projects.mjs seo` (unscoped) to see the current list.
- **Explicitly out of scope until a separate decision**: the 11 cross-category lessons inside the 4 SEO-named tracks that aren't `seo`/`ai-marketing` (`pr-communications` ×6, `content` ×2, `copywriting` ×1) — these ARE now in scope via `b2b-marketer` etc. if those tracks pull in the same categories, check per-track when you get there.

#### Stage 9, long tail

| # | Item | Section |
|---|---|---|
| **9.1** | Phase 3, career layer, `/portfolio`, `calibration` | 6, 11.5 |
| **9.2** | Related Concepts, present in only 10% of lessons | 12.4 |
| **9.3** | Remaining 402 non-track lessons | 0.2 |
| **9.4** | Hygiene: 19 BOMs, 25 single-quoted `lessonMeta`, 1 bloated lesson | 12.7-12.9 |

#### Stage 10, expand every lesson quiz to 5 questions

| # | Item | Where | Why last |
|---|---|---|---|
| **10.1** | Author one new, lesson-accurate question (correct answer + 3 plausible distractors + explanation) for all 642 lessons, 4 → 5 questions each | `src/lib/quizzes.ts` | 642 net-new questions is a content-authoring project, not a code change, each one needs to be factually grounded in its specific lesson (can't be bulk-generated safely per this repo's content-quality rules) |
| **10.2** | Update `PASS_THRESHOLD` in `Quiz.tsx` and `TrackQuizPageClient.tsx` from 0.75 (3 of 4) to 0.8 (4 of 5) | `Quiz.tsx`, `TrackQuizPageClient.tsx` | With 5 questions, 80% is exactly reachable (4/5) and delivers the same "one wrong answer is forgiven" behavior the 75%/4-question fix already gives today, this is why 10.1 is not itself blocking Stage 1 |
| **10.3** | Update `PER_LESSON_MIN`-adjacent counts, `TRACK_QUIZZES` pooling math, and every "4 questions"/"4/4" reference in code comments and AGENTS.md (Rule 25 among them) | repo-wide grep | Stale references would misdescribe the quiz shape once this ships |
| **10.4** | Re-run the position-dependent-option scan (18.7 / F10) against the expanded ~10,300-option set before enabling shuffling on the new questions | `quizzes.ts` | The Stage 1.3 scan only covers the original 4-question set; new questions could introduce a fresh "All of the above" |

**Origin:** raised during Stage 1 execution (2026-08-12) as an alternative to the 75%/4-question threshold fix. Decided to ship the 4-question/75% fix immediately (zero content risk, functionally equivalent forgiveness: exactly one wrong answer passes either way) and treat the question-count expansion as this separate, explicitly-scoped stage rather than block Stage 1 on writing 642 new quiz questions.

---

**If only six things get done:** 0.1 (delete dead proxy), 0.2 (disable sync), 0.3 (three try/catch), 3.1 and 3.2 (58 KB off every route), and 2.1 (unbreak two achievements and a whole category). That is roughly a day of work and it removes the billing exposure, the data-leak, the crash, and the two most embarrassing correctness bugs.

---

### 0.1 P0 BUG: track pages let you complete lessons without reading or quizzing

**Status: confirmed in code, live in production today.**

`src/components/TrackLessonList.tsx` line 96 wires each lesson's circle straight to `toggle()`:

```tsx
<button onClick={() => toggle(lesson.category, lesson.slug)}>
```

and `toggle()` (lines 20-34) marks complete and awards full XP with **no quiz check of any kind**:

```tsx
markComplete(id);
const newState = addXP("complete", id);   // 30 XP, same as a real completion
```

Compare `src/components/MarkComplete.tsx` on the lesson page, line 132:

```tsx
const locked = !quizPassed && !done;   // reads getQuizPassed(category, slug)
```

**Two components perform the same state change through two different gates.** The lesson page enforces Rule 25. The track page ignores it entirely.

#### What it costs

On a 13-lesson track, roughly five seconds of clicking yields:

- 13 lessons marked complete, never opened
- **390 XP** (13 × 30), same as genuinely finishing them
- 100% track progress
- Achievements and a track certificate

It also makes the track's own headline call to action pointless. The page offers *"Take track quiz to mark all complete"*, gated at 80% across a pooled question set, sitting directly above thirteen circles that do the same thing for free. **The honest path is strictly harder than the bypass**, which is the worst possible incentive design.

Knock-on damage: `/certificates` becomes unfalsifiable, the `/portfolio` view planned in 9.3 inherits fake completions, and any future "most completed projects" signal on the hub is corrupted.

#### Why it exists

It was deliberate. AGENTS.md Rule 24 states: *"Individual per-lesson checkboxes are NOT gated."* That decision predates Rule 25, which later locked the lesson page behind a quiz. **The two rules now contradict each other**, and Rule 24 is the stale one.

#### Fix

Apply the `MarkComplete` gate to the track list. Same import, same rule:

```tsx
import { getQuizPassed } from "@/lib/quizzes";

const locked = !getQuizPassed(lesson.category, lesson.slug) && !done;
```

- **Locked**: render a lock icon; clicking navigates to `/learn/{category}/{slug}#quiz-section` rather than toggling. Mirrors the scroll-to-quiz behaviour of Rule 25, adapted for a cross-page jump.
- **Unlocked or already done**: current toggle behaviour is fine, including un-completing.
- **`getQuizPassed` must be called with `sourceCategory`** for cross-listed lessons, per Rule 31, or the 13 `mental-models` lessons surfaced under `fundamentals` will read the wrong localStorage key and stay permanently locked.
- Keep the track-quiz route as the legitimate bulk path. Once the bypass closes, *"Take track quiz to mark all complete"* becomes a genuine shortcut rather than the slow lane.

#### Migration question, needs a decision

Existing users hold completions earned through the bypass. Options:

1. **Leave them.** No disruption, but existing certificates stay unearned.
2. **Invalidate un-quizzed completions.** Correct, and it will visibly reset progress for anyone who used the bypass.
3. **Grandfather with a notice.** Keep existing completions, gate everything new, and say so once in the UI.

Recommend **3**. It is honest about the change without punishing people for using an affordance the product offered them.

#### AGENTS.md changes required

- **Rewrite Rule 24.** Delete *"Individual per-lesson checkboxes are NOT gated."* Replace with the gated behaviour and a note that it must match Rule 25.
- **Add:** any component calling `markComplete()` **must** check `getQuizPassed()` first. There are currently two such call sites; a third would reopen the hole.

---

### 0.1b P0 BUG: certificates have no eligibility gate at all

**Status: confirmed in code, live today. Independent of 0.1, and arguably worse.**

`src/app/certificates/[slug]/page.tsx` reads completion state:

```tsx
const count = track.lessons.filter((l) => completed.has(`${l.category}/${l.slug}`)).length;
const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
```

...and then **never uses `pct` as a condition**. Grepping the file for `pct <`, `pct >=`, `pct ===`, `completedCount <`, or any eligibility guard returns **zero matches**. The page renders `Certificate of Completion` with a working `window.print()` button unconditionally.

**Anyone can open `/certificates/b2b-marketer` having completed nothing and print a certificate.** The only trace is a progress line reading "Completed 0 of 21 lessons (0%)", which is on the page but not on the part that matters.

This does not even require the 0.1 bypass. It needs no clicks at all, just the URL.

**Fix:** gate the certificate render on `pct === 100`. Below that, show the progress bar and a link back to the track. Decide separately whether 100% of lessons is the bar, or lessons plus the track quiz, which is the stronger claim now that 0.1 closes the free path.

---

### 0.1c P1 BUG: the lesson quiz reveals its answers, then lets you retry

`src/components/Quiz.tsx` requires 100% to dispatch `QUIZ_PASSED_EVENT`, which sounds strict. But on answering each question it:

- highlights the correct option (`i === question.correct`, line 251 and 280)
- prints the full explanation (line 296-298)
- offers `handleRetry()` (line 119, wired at 159 and 194)

So the defeat is: answer all four at random, read the four revealed correct answers, click retry, score 100%. **Roughly thirty seconds, no knowledge required.**

This matters more once 0.1 is fixed, because the quiz then becomes the *only* gate on completion, XP and certificates. Fixing 0.1 without fixing this just moves the bypass rather than closing it.

**Options, cheapest first:**

1. **Reveal explanations only after the whole quiz is submitted**, not per question. Keeps the teaching, removes the answer key mid-run.
2. **Shuffle option order on every attempt.** See 0.1c-i below, this is the highest-value fix and it has a trap in it.
3. **Cooldown or attempt cap** before a retry counts toward passing. Heavier, and probably unnecessary if 1 and 2 land.

Recommend 1 + 2. Note the tension honestly: instant per-question feedback is genuinely good pedagogy, and this is the one place where the teaching goal and the gating goal actually conflict. Option 1 is the compromise, since the explanation still arrives, just after the attempt is locked in.

---

### 0.1c-i Shuffle answer positions on every attempt

**Confirmed: `Quiz.tsx` shuffles nothing at all.** The whole file contains **zero** occurrences of `Math.random` or `sort(`. Line 76 reads straight from the prop:

```tsx
const question = questions[current];   // no shuffle, ever
```

and `handleRetry()` resets `current`, `selected`, `answers` and `finished` but **reorders nothing**.

So question order *and* option order are byte-identical on every attempt. Combined with the answer reveal in 0.1c, the defeat is even cheaper than described above: memorise **"B, D, A, C"** on the first run and spam those four positions on the second. **You never read a word.** Position-spamming, not just answer-reading, is the actual exploit.

#### ⚠️ The trap that would silently break all 2,252 questions

`correct` is a **positional index**, not a value (line 88: `const isCorrect = selected === question.correct;`).

Shuffling `options[]` without remapping `correct` would silently mis-grade **every question in the library**. No build error. No runtime error. No type error, since `correct` stays a valid `number`. Just wrong answers marked correct across 642 lessons, and right answers marked wrong. It is the most dangerous possible way to implement this, and the naive version looks completely correct in review.

**Correct implementation, pair then shuffle then recompute:**

```ts
function shuffleOptions(q: Quiz): Quiz {
  const paired = q.options.map((text, i) => ({ text, wasCorrect: i === q.correct }));
  for (let i = paired.length - 1; i > 0; i--) {       // Fisher-Yates, not sort(() => Math.random() - 0.5)
    const j = Math.floor(Math.random() * (i + 1));
    [paired[i], paired[j]] = [paired[j], paired[i]];
  }
  return {
    ...q,
    options: paired.map((p) => p.text),
    correct: paired.findIndex((p) => p.wasCorrect),   // recomputed, never carried over
  };
}
```

Use Fisher-Yates rather than `sort(() => Math.random() - 0.5)`. The sort-comparator trick is what `TrackQuizPageClient` currently uses; it is measurably biased and, on a 4-item array, leaves the original order far more often than chance. For a spam-resistance feature that bias is the whole point of failure.

#### Second trap: hydration

`Math.random()` during render produces different output on server and client. This site already carries a documented theme hydration warning, and a second source would be worse. **Shuffle after mount in `useEffect`**, holding the shuffled set in state, exactly as `TrackQuizPageClient` does. Never shuffle inline in the render path.

#### Audited: only 1 question in the library blocks this

Position-dependent options ("All of the above" and friends) break under shuffling. Scanned all 8,341 option strings across `quizzes.ts`:

| Pattern | Count |
|---|---|
| "All of the above" | **1** |
| "None of the above" | 0 |
| "Both of the above" | 0 |
| "A and B" style | 1 (false positive on inspection) |

**One affected lesson: `analytics/consent-mode`.** Rewrite that single option into a concrete statement, then shuffling is safe for all 2,252 questions. This was the main risk to the whole change and it turns out to be a one-line fix.

#### Scope: options always, questions on retry only

- **Option order: reshuffle on every mount and every retry.** Always safe.
- **Question order: reshuffle on retry only, not mid-session.** The saved resume state is `{ answers: boolean[], total }`, and `answers` is indexed positionally. Reordering questions inside a live session would remap a learner's saved answers onto the wrong questions. Retry is safe because `handleRetry()` already clears the stored state first.

#### Rule to add

**40. Never shuffle a `Quiz.options[]` array without recomputing `correct`.** It is a positional index. A naive shuffle silently mis-grades every question in the library with no error of any kind. Pair each option with a `wasCorrect` flag, shuffle the pairs, then derive the new index. Shuffle after mount, never during render.

---

### 0.1d P2: the track quiz can mark lessons complete that you failed entirely

`TrackQuizPageClient` pools every question from every lesson in the track, shuffles, and passes at `PASS_THRESHOLD = 0.8`. On success `markAll()` marks **all** lessons complete.

On a 13-lesson track with ~52 pooled questions, a learner can miss 10 and still pass at 80%. If those 10 happen to be every question from two lessons, **both lessons are marked complete despite a 0% score on them.**

This is a design consequence rather than an oversight, and it may be acceptable. But it should be a decision, not an accident.

**Options:**

1. Keep 80% overall **and** require a minimum per-lesson score, e.g. at least half of each lesson's pooled questions.
2. Mark complete only the lessons the learner actually scored well on, leaving the rest.
3. Leave as is, and say plainly in the UI that the track quiz certifies the track, not each lesson.

Recommend 1. It preserves the bulk path while stopping a total blank on a topic from being certified.

---

### 0.1e P3: `markIncomplete()` does not reverse XP, so completions can be farmed

`src/lib/progress.ts` `markIncomplete()` deletes the id from the completed set and nothing else. `addXP()` deduplicates on `(action, id)` for 24 hours only.

So: complete a lesson (+30 XP), un-complete it, wait out the 24-hour window, complete it again (+30 XP), repeat. XP, levels and any XP-derived achievement are farmable without limit.

Low severity, since XP is self-motivational rather than competitive, and there is no leaderboard today. It becomes material the moment XP is shown socially or gates anything.

**Fix when convenient:** either subtract the XP in `markIncomplete()`, or make the completion XP dedupe permanent per lesson rather than rolling 24 hours. The second is simpler and matches intent, a lesson is only completed for the first time once.

---

### 0.1f Summary of the integrity family

Five defects, one root cause: **completion state is written from several places, and only one of them checks anything.**

| # | Defect | Severity | Component |
|---|---|---|---|
| 0.1 | Track checkboxes bypass the quiz entirely | **P0** | `TrackLessonList.tsx` |
| 0.1b | Certificates render and print with no gate | **P0** | `certificates/[slug]/page.tsx` |
| 0.1c | Quiz reveals answers, then allows retry | P1 | `Quiz.tsx` |
| 0.1d | 80% pooled pass marks failed lessons complete | P2 | `TrackQuizPageClient.tsx` |
| 0.1e | `markIncomplete` does not reverse XP | P3 | `progress.ts` |

**Fix them together, in that order.** They interlock: closing 0.1 alone pushes every learner onto the quiz, which 0.1c makes trivially defeatable, and 0.1b means the end reward was never gated in the first place. Fixing one in isolation moves the hole rather than closing it.

The three `markComplete()` call sites (`MarkComplete.tsx`, `TrackLessonList.tsx`, `TrackQuizPageClient.tsx`) should be the *only* three, and Rule 36 now requires each to check `getQuizPassed()` first. Worth adding a lint rule or a test that fails on a fourth ungated call site.

---

### 0.2 Scope decision: every lesson, tracks first

Confirmed target is now **all 642 lessons**, present and future, not only the 240 referenced by tracks. Track lessons are done **first**, and the rest follow.

| Wave | Lessons | Projects @ 2 each | Approx words |
|---|---|---|---|
| **Wave 1**, pilot | 19 | ~38 | ~45k |
| **Wave 2**, track lessons | 240 | ~480 | ~550k |
| **Wave 3**, remaining library | 402 | ~804 | ~900k |
| **Total** | **642** | **~1,284** | **~1.5M** |

Two things follow, and both are load-bearing:

**This is a multi-year content programme at full scope, not a feature.** ~1.5M words is roughly double the existing 642-lesson library. The tracks-first ordering is what makes that acceptable: after Wave 2 every curated learning path is fully practisable, which is the point at which the feature is genuinely useful. Wave 3 is a long tail that can run indefinitely without blocking anything.

**Every new lesson from now on ships with its projects.** Adding them retroactively is what created a 1.5M-word backlog in the first place. This becomes an authoring rule (Rule 29 below) so the backlog never regrows.

Mode distribution at full scope, applying the section 11 percentages to 642 lessons:

| Mode | Lessons | Note |
|---|---|---|
| `diagnostic` | ~167 | Cheapest to author |
| `build` | ~167 | ~1 in 3 convert to `teardown` per Rule 24 |
| `simulation` | ~135 | **Most expensive.** Concentrated in paid-ads + pr-communications |
| `teardown` | ~77 | Plus the converted builds |
| `calibration` | ~45 | Phase 3+, infrastructure does not exist |
| `drill` | ~32 | |
| `no-project` | ~19 | Explicit and expected |

**29. Every new lesson ships with its projects and at least one concept scenario in the same commit.** Retrofitting is what created the backlog. A lesson without a project is incomplete, not merely unfinished.

---

## 1. What the research changed about the brief

Three findings reshape the original request. All three are evidence-backed, not opinion.

### 1.1 "Real companies with exits" is a factual minefield

Spot-checking the four most common DTC marketing examples:

| Company | Assumed exit | Reality |
|---|---|---|
| Dollar Shave Club | $1B to Unilever | **True.** Cash deal, July 2016 |
| Warby Parker | IPO | **True.** Direct listing 29 Sep 2021, ~$6.8B open |
| Glossier | "$1.8B exit" | **False.** Never exited. 2025 raise reportedly *below* $1B |
| Away | "acquired" | **False.** Only ever *explored* a sale |

Half the obvious picks are wrong. Writing ~600 projects with ad-hoc per-lesson company choices would ship fabricated exits at scale, which is precisely the failure mode Rule 11 exists to prevent. **The roster must be a vetted, cited data file, not a per-lesson judgment call.**

### 1.2 Track lessons are 240 of the 642, and they come first

**Superseded in part by 0.2:** the confirmed target is now the whole library, all 642 lessons, with track lessons sequenced first. The finding below still governs the *ordering*.

The 24 tracks reference 363 lesson slots, but only **240 unique lessons** across 17 categories. That 240 is a coherent milestone: once it is done, every curated learning path on the site is fully practisable end to end.

| Wave | Lessons | Projects @ 2 each |
|---|---|---|
| Pilot (solo-founder + paid-ads-101) | 19 | ~38 |
| **Track lessons** | **240** | **~480** |
| Remaining library | 402 | ~804 |
| Total | 642 | ~1,284 |

(Revised from 2-3 projects per lesson down to 2, because the runbook anatomy in 2.3 roughly triples the depth of each one. Reasoning in 2.3.)

### 1.3 A single projects data file would be the biggest file in the repo

> ## ❌ THIS SECTION WAS WRONG. See 14.5.1 for the measurement that disproved it.
>
> The claim below, that a projects dataset would put 3-4 MB into the **client**, is false. `quizzes.ts` and `lesson-resources.ts` do not reach the client at all: their payload strings were grepped across all 105 chunks in `.next/static/chunks/` with **0 matches**. `Quiz.tsx` takes questions as a prop and the lesson page is a server component. A learner downloads ~4 questions, not 2,252.
>
> **The decision below still stands, but the reasoning does not.** The real justification is the `/projects` hub (section 5), which *is* a client component and does need queryable data. That is what the slim generated index in 5.1 solves. The 3.6 MB is a build-time and DX cost, not a user cost.
>
> Kept rather than deleted because the error is instructive: it was asserted from file sizes without checking the module graph, which is the same failure mode as section 12's audit.

Existing single-module data files carry no code splitting:

- `quizzes.ts` = **1.91 MB**, 25,723 lines
- `lesson-resources.ts` = **1.72 MB**

~~600 projects at the depth you asked for lands around **3-4 MB**, larger than both combined.~~ *(Disproven, see banner above.)*

**Decision: projects ship as per-category modules, dynamically imported per route**, and the hub reads a generated slim index. Still correct, for the reason in the banner.

---

## 2. Architecture

### 2.1 Case company roster, `src/lib/case-companies.ts`

Single shared module (~90 KB at 150 companies, small enough to stay one file). You asked for full company details:

```ts
export type Region = "india" | "global";
export type ExitScale = "mega" | "large" | "mid" | "small";  // >$1B / $100M-1B / $10-100M / <$10M or undisclosed

export type CaseCompany = {
  id: string;              // "dollar-shave-club"
  name: string;
  website: string;
  industry: string;        // "DTC grooming / subscription ecommerce"
  sector: string;          // coarse facet for filtering: "D2C", "SaaS", "Fintech", ...
  region: Region;
  hq: string;              // "Bengaluru, India"
  founded: number;
  sizeAtExit: string;      // "~200 employees, 3.2M subscribers"
  revenueAtExit: string;   // "$152M ARR (2015)" or "undisclosed"
  bestKnownFor: string;    // the ONE marketing thing they nailed
  disciplines: string[];   // ["copywriting","paid-ads","growth"] , drives lesson matching
  exit: {
    type: "acquisition" | "ipo" | "direct-listing" | "spac" | "merger";
    scale: ExitScale;
    date: string;          // ISO
    valueLabel: string;    // "$1B cash" | "₹11,327 Cr (~$1.36B)" | "undisclosed"
    acquirer?: string;
    source: string;        // citation URL, REQUIRED
  };
  keyNumbers: string[];    // verified stats projects may cite
};
```

Every company is verified by web search before it enters the file. `source` is mandatory. No entry without a confirmed, dated exit.

#### Geographic mix

Target split **~60% global / ~40% India**, and "global" means genuinely global (US, EU, SEA, LatAm), not US-only.

India feasibility is confirmed, there is a deep verified pool across eras and sectors:

| Company | Exit | Date | Value |
|---|---|---|---|
| Flipkart | Acquisition (Walmart, 77%) | May 2018 | $16B |
| Zomato | IPO | 23 Jul 2021 | mcap >₹1 lakh Cr (~$13.3B) |
| Nykaa | IPO | Nov 2021 | Beauty/content-commerce |
| PolicyBazaar | IPO | Nov 2021 | Fintech |
| Freshworks | NASDAQ IPO | Sep 2021 | SaaS |
| Delhivery | IPO | May 2022 | Logistics |
| Honasa (Mamaearth) | IPO | Nov 2023 | D2C beauty |
| Swiggy | IPO | Nov 2024 | ₹11,327 Cr raise (~$1.36B); ~$11.3B valuation |
| Ola Electric | IPO | Aug 2024 | ₹6,146 Cr raise |
| FirstCry | IPO | Aug 2024 | ₹4,194 Cr raise |
| Lenskart | IPO | listed 10 Nov 2025 | ~₹70,000 Cr (~$8B) |

**The same Glossier trap applies to India.** Several of the most-cited Indian marketing case studies have never exited: **CRED, Zerodha, Zoho, Dream11** are all private with no exit event. They are barred from the roster under the strict rule, however good the marketing story is.

#### Size and revenue spread

There is a real tension here worth naming: **"various sizes" pulls against "verified exits"**, because small acquisitions usually have undisclosed terms and thin coverage. Left unmanaged, the roster silently drifts to all-mega-cap, and every project ends up about a billion-dollar company, which is useless to a learner marketing a 10-person business.

Resolution: an acquisition with a **confirmed, cited acquisition event but an undisclosed price** is admissible, recorded as `scale: "small"`, `valueLabel: "undisclosed"`. The exit is still a fact; only the number is missing.

Target distribution, enforced as a roster quota:

| Scale | Share | Why it matters |
|---|---|---|
| mega (>$1B) | ~30% | The canonical, well-documented playbooks |
| large ($100M-1B) | ~30% | Most transferable to a scaling business |
| mid ($10-100M) | ~25% | Realistic for a founder or small team |
| small (<$10M / undisclosed) | ~15% | Proves the tactic works without a huge budget |

Sector coverage target, minimum 12 sectors: D2C, SaaS, fintech, edtech, foodtech, ecommerce, healthtech, media, gaming, logistics, travel, B2B services.

#### Currency convention

Indian figures are reported in ₹ crore/lakh, global ones in $. Mixing them silently makes numbers incomparable.

Rule: **always give the native figure first, then a USD approximation and the as-of date**, e.g. `₹11,327 Cr (~$1.36B, Nov 2024)`. Never silently convert, and never present a stale conversion as current.

Target: **~60 companies for the pilot, ~150 by the end of Wave 2**.

> ⚠️ **The "no company in more than 4 projects" cap does not survive full scope.** 150 companies × 4 = 600 projects, but the confirmed target is ~1,284 lesson projects plus ~90 big ones. Holding the cap at full scope needs **≥350 companies**, more than double the stated ceiling. Either the roster grows to ~350, or the cap relaxes to ~8 for Wave 3, or full scope is reconsidered. **This is an open decision, not a settled number**, and the Tier-1 validation assertion in 15.3 must not be written against 4 until it is resolved.

### 2.2 Project data, `src/lib/projects/[category].ts`

21 category modules plus a thin `index.ts` that dynamic-imports by category.

```ts
export type ProjectTier = "mini" | "core" | "big";

export type Archetype =
  | "teardown" | "rebuild" | "audit" | "head-to-head" | "forecast"
  | "simulation" | "reverse-engineer" | "build-the-asset" | "ai-critique";

export type Project = {
  id: string;                  // stable, drives the localStorage key AND the #project-{id} anchor
  tier: ProjectTier;
  archetype: Archetype;
  title: string;
  timeEstimate: string;        // "45 minutes"
  timeMinutes: number;         // machine-sortable, feeds the hub time filter
  objective: string;           // what you can do afterwards
  companyId: string;           // FK into CASE_COMPANIES
  scenario: string;            // real-company setup
  brief: string;               // what you must produce
  mode: ProjectMode;           // diagnostic | simulation | build , see 2.3
  conceptsCovered: string[];   // lesson concepts this drills, feeds the hub concept filter

  // Exactly one of these, per mode:
  steps?: ProjectStep[];       // diagnostic + build , see 2.3a
  stages?: SimulationStage[];  // simulation , see 2.3b
  liveTrack?: LiveTrack;       // simulation only: the optional real-money path

  toolStack: ToolStack;        // free + paid, see 2.4
  datasetUrl?: string;         // /project-data/*.csv , see 9.2
  deliverable: string;
  sampleOutput: string;        // filled example, DIFFERENT company
  successCriteria: string[];
  portfolioReady: boolean;     // surfaces in /portfolio , see 9.3
  stretch?: string;
};
```

Two invariants the authoring pass must hold: `toolStack.free` always describes a complete free path (2.4), and any project whose archetype is `simulation`, `forecast` or `audit` must carry a `datasetUrl` (9.2), since those are impossible without data.

### 2.3 Project modes: the three shapes a project takes

This section defines what a project actually *is*. It is driven by two reported reader experiences, on `/learn/seo/technical-seo` and `/learn/paid-ads/paid-ads-101`, which turn out to need structurally different answers.

#### Why one shape is not enough

Crawlability can be practised for real: open Search Console, look at your own site, fix what is broken. Free, immediate, no risk.

Paid ads cannot. Practising for real means an ad account, a payment method, and roughly **$500-$1,500 over 60-90 days**, which is the lesson's own stated figure. The reader's framing was exact: *"I may run the ad in realtime or not, but I should know what to do in what situation."*

That is not a smaller version of the same problem, it is a different one. And it is not confined to paid ads. Large parts of the library cannot be practised live:

| Blocker | Categories affected |
|---|---|
| Costs real money | paid-ads |
| Needs an audience you do not have | email, social, affiliate-marketing |
| Takes months to show a result | seo (partly), brand-strategy, growth |
| Needs access you do not have | analytics, product-marketing, marketing-leadership |
| Irreversible or high-risk to rehearse live | pr-communications, legal-compliance, crisis scenarios |

So projects come in **three modes**, sharing one spine but differing in shape:

| Mode | Reader question | Reference lesson | Needs live access? |
|---|---|---|---|
| **`diagnostic`** | "Is this broken on my site, and how do I fix it?" | technical-seo | Yes, but free |
| **`simulation`** | "What do I do in what situation?" | paid-ads-101 | **No** |
| **`build`** | "What does a good one look like, and can I make one?" | positioning-doc | No |

The shared spine, in all three: **a question → what you actually see → what it means → what you do next.** Everything below is that spine applied to different constraints.

> ⚠️ **These three are necessary but not sufficient.** A four-agent survey of 454 lessons across all 21 categories found that **~15-20% of the library fits none of them**, and that `build` silently fails on a further ~12% where quality is rhetorical rather than countable. Three more modes and an explicit `no-project` verdict are required. **Section 11 carries the evidence and the revised model, and supersedes this table.** The three below remain correct and are still the majority of the library, so they are documented first and in full.

```ts
export type ProjectMode =
  | "diagnostic" | "simulation" | "build"    // 2.3a-c, ~73% of the library
  | "teardown" | "drill" | "calibration"     // section 11, the remainder
  | "no-project";                            // 11.6, an honest verdict, not a gap
```

---

### 2.3a Diagnostic mode

#### The gap, stated precisely

`technical-seo.mdx` is a good lesson. In 2,208 words it explains six pillars under "The Six Pillars Explained": Crawlability, Indexability, Sitemaps, robots.txt, Canonical Tags, JavaScript Rendering. On crawlability it correctly tells you the problems are broken internal links, redirect chains over 3-4 hops, pages more than 4 clicks deep, and server errors.

A reader finishes that section knowing **what crawlability is** and **that broken links are bad**. They still cannot answer:

| The reader's actual question | Does the lesson answer it? |
|---|---|
| What is crawlability? | **Yes** |
| Does *my* site have a crawlability problem? | No |
| Which tool shows me that? | No |
| Where exactly in that tool do I click? | No |
| What does the output look like when I get there? | No |
| Is what I'm seeing healthy or broken? | No |
| I found a problem. Now what? | No |
| Is this my job or a developer's? | No |

**Seven of eight questions are unanswered.** That is the gap, and it is not a flaw specific to this lesson. It is structural: lessons teach concepts, and concepts do not come with a procedure attached. This is exactly why a quiz cannot close it either, a quiz tests whether you understood the concept, not whether you can operate it.

#### Consequence: a "step" is not a sentence

The original design had `steps: { title, detail }[]`, which would have reproduced the same gap one level down ("Step 2: Check crawlability"). A step that does not name the tool, the exact path, the expected output and the fix is just the lesson again, in imperative mood.

So every step carries the full runbook:

```ts
export type Effort = "5 min" | "30 min" | "half day" | "dev ticket";

export type ProjectStep = {
  // WHICH CONCEPT THIS OPERATIONALISES
  concept: string;             // "Crawlability"
  lessonAnchor: string;        // "#1-crawlability", deep-links back to the exact lesson section
  theoryRecap: string;         // one line, so the step stands alone

  // THE QUESTION THE READER ACTUALLY HAS
  question: string;            // "Does my site have pages Google can't reach?"

  // HOW TO CHECK IT
  toolName: string;            // FK into TOOLS (2.4)
  where: string;               // exact path: "Search Console → Indexing → Pages"
  procedure: string[];         // click-by-click, no assumed knowledge

  // OUTPUT REFERENCE  ← the piece that is missing everywhere today
  outputSample: string;        // a realistic rendering of what the tool shows
  healthy: string;             // what good looks like, with a threshold
  unhealthy: string;           // what broken looks like, with a threshold
  interpret: string;           // how to tell which one you are looking at

  // WHAT TO DO NEXT
  soWhat: { symptom: string; action: string; effort: Effort }[];
  owner: "you" | "developer" | "either";   // is this even your job?
  stepId: string;              // stable, so progress is tracked per step not per project
};
```

`owner` deserves a note. A marketer who finds a redirect chain can fix it in a CMS; one who finds a JavaScript rendering failure cannot, and needs to write a dev ticket instead of losing a weekend. Telling people which is which is a large part of what a senior colleague actually provides, and no lesson on the site says it today.

#### Worked example, from the reference lesson

The crawlability step of the Technical SEO audit project:

- **concept** Crawlability
- **lessonAnchor** `#1-crawlability`
- **theoryRecap** Googlebot discovers pages by following links; unreachable or erroring pages never get indexed.
- **question** Does my site have pages Google cannot reach?
- **toolName** Google Search Console (Free)
- **where** Search Console → Indexing → Pages → "Why pages aren't indexed"
- **procedure** 1. Open the property. 2. Left nav, Indexing, Pages. 3. Scroll past the green "Indexed" chart to the reasons table. 4. Sort by page count descending. 5. Click any reason to see affected URLs. 6. Export.
- **outputSample**

  ```
  Why pages aren't indexed                      Pages
  ─────────────────────────────────────────────────────
  Crawled, currently not indexed                  690
  Blocked by robots.txt                           412   ← investigate first
  Duplicate, no user-selected canonical           182
  Not found (404)                                  94
  Server error (5xx)                               11   ← urgent
  ─────────────────────────────────────────────────────
  Indexed                                       3,891
  ```

- **healthy** Under ~5% of known URLs in error states; "Server error (5xx)" at or near zero.
- **unhealthy** Any 5xx at all, "Blocked by robots.txt" containing URLs you expected to rank, or "Not found" trending upward week over week.
- **interpret** Compare the error total against Indexed. 517 of 4,408 is ~12%, which is a real problem, not noise.
- **soWhat**
  - 5xx present → send the URL list to whoever owns the server, this is an availability bug, not SEO. `dev ticket`
  - Money pages blocked by robots.txt → open `/robots.txt`, find the matching `Disallow`, remove it, re-test in GSC's robots tester. `30 min`
  - 404s from old internal links → fix the linking page or 301 the old URL. `30 min`
  - "Crawled, currently not indexed" is large → usually thin or duplicate content, not a crawl bug. Route to the duplicate-content project. `half day`
- **owner** either

That single step answers all seven previously-unanswered questions. A project is a sequence of these, one per concept the lesson introduced.

#### Output reference: rendered text, never screenshots

`outputSample` is deliberately a text or table rendering, not an image. Screenshots of third-party products go stale every time a vendor reships their UI, cannot be themed for dark mode (Rule 5), add page weight, are not searchable or copy-pasteable, and carry licensing questions. A rendered table survives a GSC redesign because the *reasons* persist even when the chrome changes, and it can be styled with CSS variables like everything else.

#### Concept coverage, and the loop back to the lesson

`conceptsCovered` on the project is derived from its steps' `concept` values. Two things fall out:

1. **A concept map at the top of the lesson's projects section**, rendered by `ProjectList` from data, so **no MDX file is edited** (3.3 still holds):

   | Concept from this lesson | Practise it |
   |---|---|
   | Crawlability | Technical SEO Audit, step 1 |
   | Indexability | Technical SEO Audit, step 2 |
   | robots.txt | Technical SEO Audit, step 4 |
   | JavaScript rendering | Rendering Teardown, step 1 |

   This is what a reader hits when they finish the six pillars thinking "fine, but how do I check any of this".

2. **A concept filter on the hub** (5.3). "I just read about canonicals, show me every project that drills canonicals" becomes a real query across all ~600 projects.

#### Per-step progress

Because a `stepId` is stable, completion is tracked **per step**, not per project. A 6-step technical audit is realistically done across several sittings, and a project that can only be marked done-or-not will mostly sit at not-done. This also gives the hub a genuine "in progress" state rather than a binary.

---

### 2.3b Simulation mode

Reference lesson: `/learn/paid-ads/paid-ads-101`.

#### What that lesson already gives, and what it withholds

It is a strong lesson. It contains a genuine decision table under "Key Metrics and What They Tell You":

| Metric | Diagnosis |
|---|---|
| CTR low | Targeting fine, ad copy needs work, or wrong audience |
| CTR high, conversions low | Ad promises what the page does not deliver |
| CPC rising | More competitors in your auction |
| Conversion rate under 2% | Landing page problem or wrong traffic |
| ROAS under 1x | Losing money, pause and diagnose |

It also states the learning phase (7-14 days, check every 3-5 days, one change at a time), the budget math (100-200 clicks to judge a keyword, so $300-600 at a $3 CPC), and three named beginner mistakes.

**The reader has the decision table and still cannot make decisions.** Reading "CTR high, conversions low means fix the landing page" is not the same as being shown a dashboard on day 9 with £340 spent, a 7.1% CTR and 3 conversions, and having to choose. The lesson gives the lookup table; it never makes you use it under uncertainty, with money notionally draining, against the clock.

Worse, the two most expensive mistakes it names are **timing** mistakes, panicking on day 3, or changing two things at once. Timing errors are impossible to teach in prose because prose has no clock. A simulation does.

#### Anatomy

```ts
export type Verdict = "optimal" | "acceptable" | "costly";

export type SimulationStage = {
  stageId: string;
  label: string;              // "Day 9, mid-flight check"
  elapsed: string;            // drives the learning-phase logic
  concept: string;            // lesson concept under test
  lessonAnchor: string;

  // WHAT YOU SEE  (same principle as outputSample, rendered text not screenshots)
  situation: string;          // narrative state
  dashboard: string;          // rendered metrics table
  spendToDate: string;
  budgetRemaining: string;

  decision: {
    prompt: string;
    options: {
      id: string;
      label: string;
      verdict: Verdict;
      outcome: string;        // what actually happens next
      why: string;            // reasoning, tied to the lesson
      lessonRef: string;      // e.g. "Mistake 3: touching campaigns too often"
      nextStageId: string;    // BRANCHES, a bad call leads to a worse state
    }[];
  };

  liveVariant?: string;       // how to do this stage for real, if you have an account
};
```

Three properties do the work:

**Branching, not marking.** A poor choice routes to a genuinely worse stage: budget burnt, learning phase reset, fewer days left. You feel the consequence instead of reading "incorrect". The lesson's learning-phase warning becomes something the simulation can actually enforce, change bids on day 3 and stage 4 opens with the learning phase restarted and a week gone.

**Three verdicts, not two.** `optimal | acceptable | costly`. Real paid media rarely has one right answer, and a binary correct/incorrect would teach a false model of the discipline. "Acceptable" covers the defensible-but-not-best call, which is most real decisions.

**Wrong options are the lesson's own named mistakes.** Every `costly` option maps to something the lesson explicitly warns about, and `lessonRef` names it. The debrief then tells you not just that you lost money, but which paragraph you had already read and not applied.

#### Worked example, from the reference lesson

```
STAGE 3  ·  Day 9  ·  Spend £340 of £600  ·  Learning phase: day 9 of 14

Search campaign, "project management software for remote teams"

  Impressions        18,420
  Clicks              1,308      CTR 7.1%      (industry avg 6.66%)
  CPC                 £0.26
  Conversions             3      CVR 0.23%     (industry avg 7.52%)
  Cost per conv     £113.33
  ROAS                 0.4x

DECISION: What do you do?

  A  Pause the campaign, ROAS is under 1x
  B  Raise bids to get more clicks and more conversions
  C  Leave the campaign alone, fix the landing page
  D  Switch off the two worst keywords and rewrite the ad copy
```

- **C is optimal.** CTR is above industry average, so targeting and copy are working. The break is between click and conversion, which is the landing page or the offer. This is row 2 of the lesson's own table. You are also on day 9 of a 14-day learning phase, so campaign-level changes reset it.
- **A is acceptable.** ROAS under 1x does mean stop the bleeding, and the lesson does say pause and diagnose. Defensible, but it throws away a campaign whose top-of-funnel is healthy and forfeits the learning already paid for.
- **B is costly.** Buying more clicks when clicks are not the problem. Spends the rest of the budget on the same 0.23% conversion rate.
- **D is costly**, and instructively so. It looks diligent, but it changes two variables at once during the learning phase, the lesson's Mistake 3. Even if performance moves, you will not know which change caused it.

D is the important option. It is the trap a careful reader falls into, and no quiz question can catch it, because the error is not a misunderstanding of a fact, it is a misjudgement of timing.

#### The dual track: simulated by default, live if you want it

This answers "I may run the ad in realtime or not" directly. Every simulation project ships both paths:

| | Simulated path (default) | Live path (optional) |
|---|---|---|
| Cost | £0 | Stated minimum, e.g. £300 over 14 days |
| Account | None | Google Ads or Meta account |
| Time | ~45 minutes | 2-4 weeks real elapsed |
| Feedback | Immediate at each stage | Real, delayed, noisy |
| Carries | `dashboard` per stage | `liveVariant` per stage |

`liveVariant` on each stage says what the equivalent real action is: which screen, what to set, what to wait for, what to look at when you return. So the same project is a 45-minute decision drill for someone with no budget, and a structured 3-week live campaign runbook for someone with £300. Nobody is locked out, and nobody with real budget is stuck playing a toy.

This also preserves the free-tool guarantee (9.1) in a category where the tool itself costs money. The free path is complete because the simulation is complete.

#### Debrief

Every simulation ends with a scored debrief, not just a final screen:

- Path taken versus the optimal path
- Notional budget wasted against the ideal run
- Each `costly` call, with the `lessonRef` paragraph it contradicted
- The concepts to re-read, deep-linked back to the lesson sections
- Replay, since the value is in trying a different branch

The debrief is where a simulation stops being a game and becomes teaching. It is also what feeds XP and per-step progress, and it gives the hub something meaningful to show as "in progress".

---

### 2.3c Build mode

The spine holds when nothing is diagnosed or simulated. For `build-the-asset`, `question` becomes "what am I producing", `outputSample` becomes a filled example of the artefact, `healthy`/`unhealthy` become quality criteria to judge your own draft against, and `soWhat` becomes iteration guidance.

No project ships in any mode without an output reference and a next action.

#### Mode selection during authoring

Not a free choice. It follows from whether the concept can be practised live for free:

```
Can a beginner practise this for free, today, on something they own?
   YES → diagnostic
   NO  → Is there a sequence of real decisions with consequences?
           YES → simulation
           NO  → build
```

Rough expected distribution: `seo`, `cro`, `content`, `tools`, `analytics` skew diagnostic; `paid-ads`, `email`, `social`, `growth`, `pr-communications` skew simulation; `brand-strategy`, `product-marketing`, `copywriting`, `fundamentals` skew build. Most lessons will pair one mini `diagnostic` or `build` with one core `simulation`, or the reverse.

#### What this costs, and the scope change it forces

This anatomy is roughly **3x the depth** of the original design. A fully specified step runs 250-400 words once it carries a procedure, an output sample, thresholds and a remediation table.

| Tier | Steps | Words |
|---|---|---|
| mini | 2-3 | 600-900 |
| core | 4-6 | 1,200-1,800 |
| big | 8-12 | 2,500-3,500 |

Under the original "2-3 projects per lesson", 240 lessons plus 90 big projects lands near **800,000 words**, which is the whole existing 642-lesson library over again.

**Recommended scope change: 2 projects per lesson, not 2-3.** One `mini` (a single-concept drill, finishable in a sitting) and one `core` (the multi-concept project). That gives ~480 lesson projects plus ~90 big, around 550,000 words, and every one of them actually closes the gap.

This is the right trade. Three shallow projects that say "check your crawlability" are worth less than one that shows you the GSC path, the output, the thresholds and the fix. Depth per project is the entire point of this section; breadth is negotiable.

Knock-on effects to carry forward:
- Data volume rises to roughly **6-8 MB** across the per-category modules, which makes the split in 2.2 and the slim index in 5.1 load-bearing rather than merely tidy.
- Authoring cost per project roughly triples, so the Phase 1 review gate matters more, not less.

### 2.4 Recommended Tools section, free and paid

Every project renders a **Recommended Tools** block splitting free and paid explicitly, rather than a single flat list with a boolean buried on each row. A learner deciding whether they can actually start this project needs to see the free path as a *set*, not infer it by scanning badges.

#### Reuse the existing tools directory, do not duplicate

`src/lib/tools-directory.ts` already exists and already models this:

```ts
export type PricingTier = "Free" | "Freemium" | "Paid" | "Open Source";
export type MarketingTool = {
  name; description; category: ToolCategory; pricing: PricingTier;
  url; emoji; tags: string[]; popular?: boolean; note?: string;
};
export const TOOLS: MarketingTool[]        // 111+ entries
export const TOOL_CATEGORIES: ToolCategory[]   // 11 categories
export const PRICING_TIERS: PricingTier[]
```

Projects **reference** this by name and inherit `url`, `pricing`, `emoji` and `category`. Re-declaring a tool inside a project would guarantee drift: the price changes in one place and not the other, exactly the class of bug Rule 18 exists to prevent.

```ts
export type ToolRef = {
  toolName: string;          // FK into TOOLS. Inherits url/pricing/emoji/category.
  role: string;              // what it does IN THIS PROJECT, e.g. "keyword volume data"
  why: string;               // one line, project-specific, not the generic description
  required: boolean;         // false = optional convenience
  fallback?: string;         // what to do without it
  lastVerified: string;      // ISO, see 9.6

  // ONLY when the tool is genuinely absent from TOOLS:
  inlineUrl?: string;
  inlinePricing?: PricingTier;
};

export type ToolStack = {
  free: ToolRef[];           // MUST be a complete, sufficient path on its own
  paid: ToolRef[];           // upgrades only, never on the critical path
  paidUpgradeNote?: string;  // what paid actually buys you: speed, scale, depth
};
```

**Any tool referenced but missing from `TOOLS` is a signal to add it to the directory**, not to inline it permanently. `inlineUrl`/`inlinePricing` are an escape hatch that should trend toward zero. This makes the project layer a forcing function that improves `/tools` over time.

#### Rendering

Two labelled groups, free first, since free is the default path and paid is the exception:

```
RECOMMENDED TOOLS

  Free path  (everything below is enough to finish)
  ┌──────────────────────────────────────────────┐
  │ 🔍 Google Search Console      Free           │
  │    Role: query + impression data              │
  │    Why: the only first-party source for ...   │
  ├──────────────────────────────────────────────┤
  │ 🔑 Google Keyword Planner     Free           │
  └──────────────────────────────────────────────┘

  Paid upgrades  (optional, faster/deeper)
  ┌──────────────────────────────────────────────┐
  │ 🕷️ Ahrefs                     Paid           │
  │    Buys you: 10 yrs of backlink history ...   │
  └──────────────────────────────────────────────┘
```

The "everything below is enough to finish" line is load-bearing. It is the visible promise behind the free-tool guarantee (9.1), and it is what stops the block reading as an advert.

Each row: emoji or letter-avatar fallback, tool name linking to its directory entry, pricing badge using the existing `PricingTier` styling, role, and the project-specific why. Pricing badges follow Rule 19, rgba overlays rather than Tailwind colour classes, so they survive dark mode.

#### The reciprocal link

Once projects reference tools, `/tools` can show *"used in N projects"* per tool and link back. That turns a static directory into a practice surface and is close to free once the index in 5.1 exists.

Two fields map directly to your explicit asks:

- **`tools`** is the suggested-tool element, with a free/paid flag and a one-line reason each.
- **`sampleOutput`** is the filled version. **It deliberately uses a different roster company than `scenario`**, so it demonstrates the standard without handing over the answer. Flag this if you wanted the sample filled in for the *same* company instead.

### 2.5 Project variety guard

The real risk at 600 projects is that they all read identically ("research, build a spreadsheet, analyse"). Mitigation: every project is stamped with one of **8 archetypes**, and no lesson may use the same archetype twice.

Teardown, Rebuild, Audit, Head-to-head, Forecast/model, Given-data simulation, Reverse-engineer a real campaign, Build-the-asset.

### 2.6 Track big projects, `src/lib/track-projects.ts`

Same rich shape, tier `"big"`, plus:

```ts
trackSlug: string;
afterLessonIndex: number;   // milestone position in the track
synthesizes: string[];      // lesson slugs it pulls together
```

At 3-5 lessons per milestone and ~15 lessons per track: **3-4 big projects per track, ~90 total**. These are cross-lesson synthesis work and are written to be distinct from the lesson-level projects they sit after, matching the same principle already used by `TRACK_QUIZZES` (Rule 32).

### 2.7 Components

| File | Type | Role |
|---|---|---|
| `ProjectList.tsx` | client | The 2-3 projects for a lesson, injected below the Quiz |
| `ProjectCard.tsx` | client | One project, expand/collapse, completion toggle |
| `SampleOutput.tsx` | client | "Show sample answer" reveal, hidden by default |
| `TrackProjectCard.tsx` | client | Big-project milestone inside `TrackLessonList` |
| `src/lib/projects-progress.ts` | lib | localStorage + XP, per Rule 18 (shared storage in lib, never in components) |
| `TableOfContents.tsx` | **modified** | Accept an `extraSections` prop so Projects and Quiz appear in the TOC (see 3.4) |
| `src/app/projects/page.tsx` | server | Hub: metadata + stats hero (see 5) |
| `src/app/projects/ProjectsClient.tsx` | client | Hub search + 11 filters + sort + preset lenses, mirrors `ToolsClient` |
| `ProjectDrawer.tsx` | client | Hub slide-over with full detail, dynamic-imports one category module (5.6) |
| `ToolStack.tsx` | client | The free/paid Recommended Tools block (2.4), reused on lesson pages and in the drawer |
| `ProjectStep.tsx` | client | One runbook step: question, tool path, output sample, thresholds, remediation table, per-step tick (2.3a) |
| `SimulationRunner.tsx` | client | Stage-by-stage decision drill with branching, state, and spend tracking (2.3b) |
| `SimulationDebrief.tsx` | client | Scored debrief: path vs optimal, budget wasted, `lessonRef` back-links, replay |
| `LiveTrackPanel.tsx` | client | The optional real-account path alongside the simulation (2.3b) |
| `ConceptMap.tsx` | client | The lesson-concept to project-step table at the top of the projects section (2.3) |
| `OutputSample.tsx` | client | Renders `outputSample` as themed monospace, horizontally scrollable, never an image |
| `src/lib/projects-index.ts` | **generated** | Slim card projection of every project (see 5.1) |
| `scripts/build-projects-index.mjs` | build | Regenerates the index from the per-category modules |
| `src/app/portfolio/page.tsx` | server | Completed-projects view (see 9.3) |
| `public/project-data/*.csv` | assets | Starter datasets (see 9.2) |

### 2.8 XP wiring

`XPAction` is a clean union with a `Record<XPAction, number>` table, so extension is type-safe:

```ts
export type XPAction = "complete" | "quiz" | "bookmark" | "project" | "bigProject";
// mini/core project = 40, big project = 100
```

No level rebalance needed. The ladder already caps at 4,000 XP (~80 completed lessons) against a library worth ~32,000 XP, so it is saturated long before projects enter the picture.

---

## 3. Placement on the lesson page, and TOC integration

### 3.1 Current bottom-of-lesson order

`src/app/learn/[category]/[lesson]/page.tsx` renders, in order:

1. `<article class="prose">` MDX body
2. `LessonResources`
3. Bottom `MarkComplete`
4. Up Next CTA
5. Tool Comparison callout (`tools` category only)
6. **Quiz**, `id="quiz-section"`
7. `LessonNotes`
8. `RelatedLessons`
9. Prev / Next nav

### 3.2 Chosen placement: directly after the Quiz, before `LessonNotes`

```
... Quiz (#quiz-section)
    ↓
    Projects (#projects-section)   ← NEW
    ↓
    LessonNotes
    RelatedLessons
```

Three reasons this is the only defensible slot:

- **The quiz is the completion gate.** Rule 25 locks `MarkComplete` until the quiz passes, and clicking it scrolls to `#quiz-section`. Putting a 45-minute project *before* that gate would put heavy work in front of lesson completion and tank completion rates.
- **Escalating depth.** Quiz is a 4-question recall check; projects are the deep application. Read, verify, then apply.
- **Notes and Related are terminal.** Both are wrap-up/navigational, so projects must sit above them.

### 3.3 Zero MDX files change

Projects are injected by the page from the data layer, keyed on `sourceCat/lesson`, exactly how `QUIZZES` already works (line 108 of the lesson page). **None of the 240 lesson `.mdx` files need editing**, which removes the single largest source of risk in a change this size.

### 3.4 The TOC will not pick projects up for free

`TableOfContents.tsx` scopes itself hard:

```ts
const article = document.querySelector("article.prose");
const nodes = article.querySelectorAll("h2, h3");
```

It only reads headings **inside** the MDX article. Everything after `</article>` is invisible to it. That is why the Quiz is missing from the TOC today, and Projects would be missing for the same reason.

**Fix: declared extra sections, not a wider selector.**

```ts
type TocSection = { id: string; text: string };

<TableOfContentsDesktop extraSections={[
  { id: "quiz-section",     text: "Test Your Knowledge" },
  { id: "projects-section", text: "Practice Projects" },
]} />
```

`useHeadings()` appends these after the article headings (DOM order is already correct, since both sit below the article). Rejected the alternative of widening the selector to the whole main column: it would sweep in "Up Next", "Related Lessons" and any stray `h2` from future components, with no control over what appears.

Two bonuses from doing it this way:

- Scroll-spy highlighting works with no extra code, because the `IntersectionObserver` already resolves targets via `document.getElementById(h.id)`.
- **It fixes the pre-existing gap where the Quiz never appears in the TOC.**

### 3.5 Secondary discovery signals

- **Header meta line**: add a project count beside read time, e.g. `18 min read · 3 projects (~2 hrs)`. Cheap, and sets time expectations before the learner commits.
- **Up Next ordering (optional).** The Up Next CTA currently sits at position 4, well above the Quiz and Projects, so it invites the learner to leave before reaching either. Moving it below Projects would help, but it changes existing behaviour, so it is proposed separately rather than bundled in. The TOC entry already solves the core discovery problem without touching it.

### 3.6 Track pages

Big Projects render inline inside `TrackLessonList` at their `afterLessonIndex`, as a visually distinct milestone card breaking up the numbered lesson rows. The existing track progress bar counts them alongside lessons.

---

## 4. Track lesson reordering

You asked for tracks ordered "in best outcome order". Current lesson sequences are largely grouped by category, not by learning dependency. Each of the 24 tracks gets resequenced on one rule: **nothing appears before the thing it depends on, and each big-project milestone lands where the learner actually has the pieces to complete it.**

Reordering and milestone placement are done together, because the milestone position determines where the natural breakpoints are.

---

## 5. The Projects hub, `/projects`

A first-class browse surface for the whole project database, modelled on the existing `/tools` directory (server page with a stats hero, then a client component owning search and filter state).

### 5.1 The data problem this creates, and the fix

Section 2.2 splits projects into per-category modules. ~~precisely so a lesson page never loads 3-4 MB~~ *(that premise was disproven, see 1.3 and 14.5.1)*. The real constraint is this: a hub needs **every** project at once, and unlike the lesson page the hub **is** a client component, so it has no server boundary protecting it.

Fix: **a slim card projection, generated at build time.** The hub never loads project bodies.

```ts
// src/lib/projects-index.ts , GENERATED, all projects. SIZE: see the correction below
export type ProjectIndexEntry = {
  id: string;
  title: string;
  tier: ProjectTier;          // mini | core | big
  archetype: Archetype;       // 9 values
  category: string;           // lesson category
  lessonSlug: string;
  lessonTitle: string;
  timeMinutes: number;
  companyId: string;
  companyName: string;
  region: Region;             // india | global
  sector: string;
  exitScale: ExitScale;
  freeToolsOnly: boolean;
  hasDataset: boolean;
  tracks: string[];           // tracks that surface this project
  conceptsCovered: string[];  // powers the concept filter (2.3)
  toolNames: string[];        // powers the tool filter
  mode: ProjectMode;
  needsAccountOrBudget: boolean;  // false for every simulation and build project
  stepCount: number;          // steps or stages
};
```

Heavy fields (`scenario`, `steps`, `sampleOutput`, `successCriteria`) stay in the per-category modules and load only on the lesson page. The index stays automatically in sync because it is generated, never hand-maintained.

> ⚠️ **The original "~120 KB" estimate was wrong by ~3×, measured.** Building a realistic entry from the shape above:
>
> | Scope | Full facet index | Minimal index |
> |---|---|---|
> | 600 projects | 367 KB raw / ~81 KB gzip | 129 KB / ~28 KB |
> | **1,284 (confirmed scope)** | **786 KB raw / ~173 KB gzip** | 276 KB / ~61 KB |
>
> For comparison, the `curriculum.ts` chunk that section 14.5 flags as **P0** is 148 KB raw / 48 KB gzip. At full scope this index would be **3.6× the payload already called a P0**, and even a stripped version is 1.3× it. It would also directly violate draft Rule 44 (never import a large data module into a `"use client"` file), which the hub is.
>
> **Therefore the index must not be a JS import at all.** Ship it as a **separately-fetched static JSON asset** (`public/projects-index.json`), fetched on the hub route after first paint and cached by the existing service worker. That keeps it out of the JS bundle entirely and makes its size largely irrelevant. Revised from the original design.

### 5.2 Search

Matches across title, lesson title, company name, sector and objective keywords.

### 5.3 Filters

| Filter | Values |
|---|---|
| Difficulty | Mini / Core / Big |
| Category | 21 lesson categories |
| Archetype | Teardown, Rebuild, Audit, Head-to-head, Forecast, Simulation, Reverse-engineer, Build-the-asset, AI-critique |
| Time | under 1h / 1-3h / 3-6h / 6h+ |
| Company region | India / Global |
| Sector | D2C, SaaS, fintech, edtech, foodtech, ecommerce, ... |
| Exit scale | mega / large / mid / small |
| Free tools only | toggle |
| Has starter dataset | toggle |
| Track | 24 tracks |
| Status | not started / in progress / completed (from localStorage) |
| **Concept** | crawlability, canonicals, deliverability, attribution, ... (from `conceptsCovered`, see 2.3) |
| **Tool** | filter by any tool in the project's stack, e.g. "everything that uses Search Console" |
| **Mode** | diagnostic / simulation / build (see 2.3) |
| **No account or budget needed** | toggle. Matches every `simulation` and `build` project, plus diagnostics on free tools |

Four filters serve the originating use cases directly:

- *"I just read about canonicals, show me how to practise canonicals"* → **Concept**
- *"I have Search Console open, what can I do right now"* → **Tool**
- *"I want to make decisions, not audit things"* → **Mode**
- *"I have no ad budget"* → **No account or budget needed**

That last one matters more than it looks. Without it, a learner with no budget browsing paid-ads projects has no way to tell which are actually open to them, and the honest answer is all of them, via the simulated path.

Sort by difficulty, time, category, completion, or **recently verified** (which surfaces the `lastVerified` work from 9.6 instead of leaving it invisible metadata).

#### Preset lenses

ToolForge's strongest idea: *"Pick a ready-made lens instead of browsing 2,386 cards."* Eleven filters is powerful and also paralysing on first visit. Named one-click presets do most of the work:

| Lens | Resolves to |
|---|---|
| Weekend projects | tier mini/core, time under 3h |
| Zero-budget | freeToolsOnly, all tiers |
| Indian case studies | region india |
| Portfolio starters | portfolioReady, tier core/big |
| Big builds | tier big |
| Data-driven | hasDataset |
| Beginner friendly | tier mini, time under 1h |
| Work with AI | archetype ai-critique |

These render above the filter bar as chips, exactly like ToolForge's "Recommended views" block.

### 5.4 Card labels

Each card carries: tier badge, time estimate, category chip, archetype chip, company name with a region flag, a free-tools badge, a dataset badge, and a completion tick when done.

Region and exit-scale labels do real work here. They let a learner deliberately choose "show me mid-size Indian D2C projects" rather than being fed billion-dollar US case studies by default, which is the whole point of the roster quota in 2.1.

### 5.5 Stats hero

Matching the `/tools` treatment: total projects, big projects, free-tool projects, companies covered, and the India/global split.

### 5.6 Deep linking without detail routes

Per-project routes stay rejected (~600 thin pages cannibalising the lesson pages they belong to). Two mechanisms replace them, borrowed from ToolForge:

**1. A detail drawer on the hub.** Clicking a card opens a slide-over with the full brief, steps, tool stack and success criteria, fetched by dynamic-importing only that project's category module. Full detail, zero new routes, and the 3-4 MB never enters the initial bundle. This is a straight lift of ToolForge's drawer pattern and it resolves the tension between "the hub should be browsable in depth" and "the hub must stay slim".

**2. Anchors into the lesson.** Every project also renders on its lesson page with a stable `id="project-{id}"`, and the drawer carries an "Open in lesson" link to:

```
/learn/{category}/{slug}#project-{id}
```

The target card auto-expands from the URL hash. So the hub answers "what exists", the lesson answers "why this matters here", and both are shareable.

### 5.7 Hub vs Portfolio

Two different surfaces, easy to confuse:

- **`/projects`** is the catalogue: everything that exists, for discovery.
- **`/portfolio`** (9.3) is personal: only what *you* completed, framed as interview evidence.

### 5.8 Wiring

Nav entry under the "Learn" dropdown and the footer "Learn" column. `ItemList` JSON-LD on the hub. The page is a real keyword surface ("marketing projects", "SEO project ideas", "marketing portfolio projects"), so it also earns its place on SEO grounds.

Projects also register in the **existing command palette**. `COMMAND_PALETTE_EVENT` already lives in `src/lib/events.ts` and the nav already has a palette button, so Ctrl+K project search is wiring, not new infrastructure.

### 5.9 Other patterns adopted from ToolForge

| Pattern | How it maps here | Verdict |
|---|---|---|
| URL-encoded filter state | Every filter combination shareable and bookmarkable, e.g. `?tier=big&region=india`. Also makes the preset lenses just canned URLs. | **Adopt.** Cheap, high value |
| Category sidebar with live counts | Left rail listing 21 categories with per-category project counts, plus a find-category input | **Adopt** |
| Export saved as CSV/JSON | Feeds directly into `/portfolio` (9.3) as interview evidence | **Adopt** |
| Curator badges | "Editor's Choice" / "Popular" become "Portfolio starter", "Beginner friendly", "Most completed" | **Adopt**, renamed to fit |
| Letter-avatar fallback | Companies have no logos in the roster. A colour-coded initial avatar per company avoids broken images and costs nothing | **Adopt** |
| Skip link + full keyboard nav | ToolForge has "Skip to tools" and ARIA roles throughout. The lesson pages here already ship a skip link, so the hub should match | **Adopt** |
| Density controls (compact/default/comfortable) | Real value at 2,386 cards; marginal at ~600, and it is another persisted preference to maintain | **Defer**, revisit if the library grows |
| Comparison matrix | Comparing two projects side by side is not a real user need. The tool-level free/paid split in 2.3 already covers the comparison that matters | **Reject** |

---

## 5A. Dual surface: the same project in two places

Stated explicitly because it is a requirement, not an implementation detail.

Every project appears in **both** places, from **one** definition:

| Surface | Question it answers | What renders |
|---|---|---|
| **Lesson page**, `#projects-section` (see 3) | "I just learned this, how do I practise it?" | The 2-3 projects for that lesson, inline, in teaching context |
| **`/projects` hub** (see 5) | "What can I build? Show me everything." | All ~600, searchable, filterable, with a detail drawer |

The single definition lives in `src/lib/projects/[category].ts`. The lesson page imports its own category module; the hub reads the generated slim index (5.1) and dynamic-imports a single module only when a drawer opens.

**There is no second copy of any project, anywhere.** Both surfaces derive from the same record, so a wording fix lands in both at once. The generated index is what keeps them honest, since it cannot be hand-edited into disagreement with the source.

Track big projects follow the same rule: defined once in `track-projects.ts`, rendered inline on the track page (3.6) and listed in the hub under tier `big`.

---

## 6. Phasing

### Phase 0, Foundations
- `case-companies.ts`, ~60 verified companies, ~60/40 global/India, meeting the exit-scale quota, every entry cited
- Types, the 9 archetypes, the project authoring standard
- ~8 starter datasets in `public/project-data/` covering the simulation/forecast/audit archetypes
- Deliverable: data foundations only, no UI

### Phase 1, Pilot on `solo-founder` + the hub
Track chosen because it spans **8 categories** (fundamentals, mental-models, seo, content, email, copywriting, growth, analytics), so it stress-tests the per-category code splitting properly, and it is now the #1 track.

- Full component build, progress lib, XP wiring
- `TableOfContents.tsx` `extraSections` support, which also fixes the missing Quiz entry
- Lesson page injection at `#projects-section`, `#project-{id}` anchors, header project count
- `ToolStack.tsx`, the free/paid Recommended Tools block (2.3), plus an audit of which referenced tools are missing from `tools-directory.ts`
- **`/projects` hub + the index generator + detail drawer + preset lenses**, built now rather than later so the facets and filter UX are validated at 50 projects instead of being discovered wrong at 600
- URL-encoded filter state, command-palette registration
- 18 lessons, ~36 lesson projects (1 mini + 1 core each), 4-5 big projects
- **Plus `paid-ads/paid-ads-101` as a 19th pilot lesson, outside the track.** `solo-founder` spans no paid-ads lessons, and paid-ads-101 is both the reference case for simulation mode and the hardest thing in this plan to author. Proving it now is what de-risks committing to ~200 more simulations in Phase 2. Building only the cheap modes first would hide the real cost.
- `solo-founder` resequenced
- **Review gate, two artefacts to judge:**
  1. The crawlability **diagnostic** step: does it answer all seven questions from the 2.3a table, so you can actually go and check your own site?
  2. The paid-ads **simulation**: on day 9 with a 7.1% CTR and 3 conversions, does picking option D genuinely teach you why the diligent-looking answer was the expensive one?

  If either fails, nothing downstream matters and Phase 2 does not start.

### Phase 2, Scale
- Remaining 222 unique lessons, ~444 projects
- Roster to ~150 companies
- All 24 tracks resequenced, ~90 big projects total
- Datasets to ~20

### Phase 2b, Concept scenarios for track lessons
- ~600-720 scenarios (section 10), bundled with the 45 stale-year lesson fixes (12.5) so evidence is refreshed once, not twice

### Phase 3, Career layer
- `/portfolio` view, wired to `/interview-prep`
- Big projects feeding `/certificates`
- Project achievements in `achievements.ts`
- `calibration` mode infrastructure: prediction persistence, scheduled re-prompting, personal prediction log (11.5)
- Docs: `PROJECT_LOG.md`, `README.md`, the new `AGENTS.md` rules

### Phase 4, The long tail
- Remaining 402 non-track lessons, ~804 projects
- Runs indefinitely, blocks nothing
- From here on, Rule 29 applies: every new lesson ships with its projects in the same commit, so the backlog never regrows

---

## 7. New AGENTS.md rules this will require

1. **Projects data is per-category and dynamically imported.** Never a single module. Reason: `quizzes.ts` at 1.91 MB is the precedent to avoid, not follow.
2. **Every `companyId` must resolve to a `CASE_COMPANIES` entry with a confirmed, dated, cited exit.** No inline company facts in project prose.
3. **`sampleOutput` must reference a different company than `scenario`.**
4. **No lesson may reuse a project archetype within its own project set.**
5. **Roster keeps a ~60/40 global/India split and meets the exit-scale quota.** A company with no confirmed exit never enters the roster, however famous its marketing (CRED, Zerodha, Zoho, Glossier, Away).
6. **Indian figures are written native-first with a dated USD approximation**, e.g. `₹11,327 Cr (~$1.36B, Nov 2024)`.
7. **Every project has a complete free-tool path.** Paid tools are optional upgrades only, never on the critical path.
8. **`simulation`, `forecast` and `audit` projects must carry a `datasetUrl`.** Those archetypes are impossible to complete without supplied data.
9. **`src/lib/projects-index.ts` is generated, never hand-edited.** Re-run `scripts/build-projects-index.mjs` after touching any project module, or the hub silently drifts out of sync with the data.
10. **`/projects` must never statically import a per-category project module.** It uses the slim index only. Full modules are dynamic-imported, one at a time, when a drawer opens.
11. **Project tools reference `TOOLS` in `tools-directory.ts` by name.** Never re-declare a tool's url or pricing inside a project. A tool missing from the directory should be added there, not inlined permanently.
12. **`toolStack.free` must be a sufficient path on its own.** If a project cannot be finished with only the free list, it is mis-specified. Paid tools are upgrades, never dependencies.
13. **Every `ProjectStep` must carry all five runbook parts**: `where` + `procedure` (how to check), `outputSample` (what you'll see), `healthy`/`unhealthy`/`interpret` (is it a problem), `soWhat` (what to do), `owner` (whose job). A step missing any of these is the lesson restated as an instruction and fails review.
14. **`outputSample` is rendered text or a table, never a screenshot.** Vendor UIs reship constantly, images cannot follow the theme (Rule 5), and they are not copy-pasteable.
15. **Every step's `concept` must correspond to a real heading in the source lesson**, and `lessonAnchor` must resolve to that heading's id. Projects operationalise the lesson, they do not introduce new material.
16. **Mode is derived, not chosen.** Run the decision tree in 2.3c. If a beginner can practise it free today on something they own, it is `diagnostic`. If not and there is a sequence of consequential decisions, it is `simulation`. Otherwise `build`.
17. **Every `simulation` must be completable with zero spend and no account.** The `liveTrack` is strictly optional and must never be required to finish or to earn XP.
18. **Every `costly` option in a simulation must carry a `lessonRef`** naming the passage it contradicts. If a wrong answer is not traceable to something the lesson taught, either the option is unfair or the lesson has a gap, and both need fixing before ship.
19. **Simulations branch, they do not grade.** A poor decision routes to a materially worse stage. Never render a bare "incorrect", the consequence is the teaching.

---

## 8. Open risks

| Risk | Mitigation |
|---|---|
| 600 formulaic projects | Archetype stamping + per-lesson archetype uniqueness |
| Fabricated exits | Mandatory cited roster, verified before authoring |
| Bundle bloat | Per-category dynamic imports, measured at Phase 1 |
| Company over-repetition | Roster sized so no company exceeds ~4 projects |
| Multi-session drift | This file is the source of truth, updated each session |
| Roster drifts all-mega-cap | Scale quota enforced in the roster (2.1), checked before authoring |
| Steps degrade into restated theory | Rule 13, all five runbook parts required or the step fails review. This is the failure mode that would make the whole feature pointless |
| Simulations feel like a quiz with extra steps | Branching with real consequences (Rule 19), three verdicts not two, and wrong options drawn from the lesson's own named mistakes |
| Simulation authoring is much harder than a runbook | Branching stages carry the highest cost per project. The pilot deliberately includes one, so the true cost is known before Phase 2 commits to ~200 of them |
| Tool UI paths go stale (`where`, `procedure`) | `lastVerified` per tool (9.6), "recently verified" sort on the hub, and rendered-text output samples that survive vendor redesigns |
| 550k words of authoring | Scope cut to 2 projects per lesson (2.3); pilot review gate before any scaling |
| India examples that never exited | CRED, Zerodha, Zoho, Dream11 explicitly barred; strict rule applies equally to both regions |

---

## 9. Accepted additions (all in scope)

All six approved. The first two are the difference between projects people *complete* and projects people *read*.

### 9.1 Free-tool guarantee

The site's entire positioning is free marketing education. A project that needs Ahrefs at $99/mo is not free, it is an advert. Right now nothing in the design prevents that.

Rule: **every project must be completable end to end using only free tools.** Paid tools may appear, but only flagged as an optional upgrade, never on the critical path. The `tools[]` field already carries a `free` boolean, so this is enforceable: every project must have a complete free path.

### 9.2 Starter datasets

This is the biggest silent blocker. Several archetypes (Given-data simulation, Forecast/model, Audit) assume the learner has data. A beginner has no ad account, no GA4 property, no keyword export, no email list. Without data those projects are simply impossible, and they are also the highest-value ones.

Fix: ship small fixtures in `public/project-data/` (CSV/JSON), referenced by a `datasetUrl` field on the project. A funnel dataset, a mock ad-account export, a keyword set, a cohort table. Roughly 15-20 fixtures cover most of the library through reuse.

### 9.3 Portfolio output, wired to the existing interview prep

The site already ships `/interview-questions` and `/interview-prep`. A completed project *is* the artifact you bring to a marketing interview, and right now that value is left on the table.

Add a `/portfolio` view listing the learner's completed projects with their deliverable specs, exportable. This costs little (completion state already exists from the tracking decision) and converts the whole feature from "exercises" into "career evidence". Highest motivational return of anything in this list.

### 9.4 Feed big projects into `/certificates`

`/certificates` already exists. Track certificates currently rest on lesson completion plus the track quiz. Requiring the track's big projects makes the certificate mean something. Small change, large credibility gain.

### 9.5 An "AI critique" archetype, making it 9

Learners will paste these into ChatGPT regardless. Rather than pretend otherwise, make one archetype explicitly: *have AI produce the deliverable, then identify three things it got wrong and fix them.* On-brand for a site carrying 36 `ai-marketing` lessons, teaches judgment rather than output, and is honest about how marketers actually work now.

### 9.6 `lastVerified` on tool recommendations

Exit facts are permanent. Tool recommendations rot fast: free tiers vanish, pricing changes, products shut down. Add `lastVerified: string` to each tool entry plus a stated review cadence, so stale advice is detectable instead of invisible.

### 9.7 Considered and rejected

- **Per-project detail routes** (`/projects/[id]`): ~600 thin pages competing with the lesson pages they belong to. The `/projects` hub plus `#project-{id}` anchors (5.6) captures the value without the cannibalisation.
- **Widening the TOC selector** instead of `extraSections`: covered in 3.4.
- **Projects authored inside MDX**: would require editing all 240 lesson files and block reuse on track pages.
- **Shipping the full project dataset to `/projects`**: 3-4 MB to the client. Replaced by the generated slim index in 5.1.

---

## 10. Concept scenarios in lessons ("where is this used, and what did it get them?")

A separate workstream from projects. This changes the **lessons**, not the practice layer.

### 10.1 The ask

A reader meets "crawlability" and gets a definition. What they do not get is: where does this actually get used, why did someone reach for it, and what did it get them. The concept arrives without a situation attached.

### 10.2 Measured, not assumed

Audited all 642 lessons for sections matching real-example / case-study heading patterns:

| Measure | Result |
|---|---|
| Lessons with any example section | **302 of 642 (47%)** |
| Lessons with **none** | **340 (53%)** |
| Example sections found | 336 |
| ...containing any number | 191 (57%) |
| ...containing a % figure | 122 (36%) |
| ...containing a year | 150 (45%) |
| ...containing **both a % and a year** (a dated, quantified outcome) | **98 (29%)** |
| Average **teaching concepts** per lesson (h2/h3, boilerplate excluded) | **8.1** |
| Average **example sections** per lesson | **0.5** |

Two numbers carry the argument:

- **8.1 concepts taught against 0.5 examples given.** A 16:1 ratio.
- **~98 dated, quantified examples against ~5,200 concepts library-wide.** Under **2%** of concepts ever show an outcome.

Coverage is also wildly uneven, and worst exactly where a reader is least likely to have prior intuition:

| Category | Lessons | With an example section |
|---|---|---|
| legal-compliance | 28 | **0%** |
| events-experiential | 28 | 4% |
| marketing-leadership | 28 | 4% |
| affiliate-marketing | 28 | 11% |
| pr-communications | 28 | 11% |
| ... | | |
| brand-strategy / cro | 28 | 75% |
| content | 29 | **79%** |

### 10.3 The reference lesson proves it

`technical-seo.mdx` is one of the better-evidenced lessons. Its "Real Company Case Studies" section is genuinely good:

> **Airbnb, 2017.** ~30% of listing pages were not indexed because Googlebot could not parse their JavaScript-rendered content. After moving critical listing pages to server-side rendering and submitting a sitemap covering 1M+ URLs, organic traffic to listing pages rose ~25% within six months. No new content, no new links, purely a technical fix.

That is exactly the standard: company, situation, action, quantified benefit, timeframe, date.

But it is **pooled at the bottom**, and its three examples cover JavaScript rendering, structured data, and site architecture. The lesson teaches six pillars. **Crawlability, indexability, sitemaps, robots.txt and canonical tags get no scenario at all.** A reader learns what a canonical tag is and never once sees one used in anger.

The problem is not example quality. It is that examples are lesson-level when concepts are the unit of confusion.

### 10.4 Shape

```ts
export type ConceptScenario = {
  concept: string;         // "Crawlability" , must match a real lesson heading
  lessonKey: string;       // "seo/technical-seo"
  lessonAnchor: string;    // "#1-crawlability"

  companyName: string;
  companyId?: string;      // roster FK where the company is in CASE_COMPANIES

  where: string;           // the situation it got used in
  why: string;             // the problem it was reached for
  what: string;            // what they actually did
  benefit: string;         // the outcome, QUANTIFIED
  timeframe: string;       // "within six months"
  date: string;            // ISO or year
  source: string;          // citation URL, REQUIRED

  counterExample?: string; // what it costs when ignored, cited the same way
};
```

`counterExample` earns its place. `technical-seo` already carries one (HubSpot, ~13.5M to under 7M monthly organic visits, Nov-Dec 2024). Concepts land harder with both the win and the cost of ignoring it.

### 10.5 Rendering and injection

A global `<InAction>` MDX component, rendered immediately **after the concept's heading**, inside `article.prose` so the existing TOC and reading-time logic treat it as lesson content.

Injection is a **rehype plugin at build time**: walk the heading nodes, look up `CONCEPT_SCENARIOS[lessonKey][headingId]`, inject the component node. `next.config.ts` already carries rehype/remark plugin config, and this keeps the 3.3 promise intact, **zero MDX files edited**, so scenarios can be backfilled incrementally without touching 240 files.

Fallback if the plugin proves fragile: a one-time scripted insertion into the MDX, generated from the same data file. The data file stays the source of truth either way, which is what makes the citations auditable.

### 10.6 Scope

Covering all ~5,200 concepts is not real. **2-3 scenarios per lesson, on its most important concepts.**

| Target | Lessons | Scenarios |
|---|---|---|
| Track lessons (aligned with the projects scope) | 240 | ~600-720 |
| Whole library, later | 642 | ~1,600 |

Priority order:
1. The **340 lessons with zero examples**, since they start from nothing
2. The five near-empty categories: legal-compliance (0%), events-experiential (4%), marketing-leadership (4%), affiliate-marketing (11%), pr-communications (11%)
3. Concepts already drilled by a project, so lesson scenario and project step reinforce each other

### 10.7 A scoped exception to the exit rule

Rule 5 requires every roster company to have a confirmed exit. That rule was written for case-study companies and it does not serve scenarios well. The most instructive scenarios are often **failures and turnarounds**: JCPenney's 2012 "Fair and Square" pricing (same-store sales down 25%, CEO out within 18 months) teaches second-order thinking better than any acquisition, and JCPenney never exited.

**Scenarios require a documented, cited outcome, not an exit.** Where the company is also on the roster, link it via `companyId`. Where it is not, `source` still carries the full evidentiary burden. This is a deliberate, scoped divergence, not a loosening of Rule 5, which continues to bind the project roster.

### 10.8 Cost

At ~120 words each, ~700 scenarios is roughly **85,000 words**, plus a citation per scenario. Materially smaller than the projects layer, and it improves lessons that already exist rather than adding a new surface, so it is the cheapest quality win in this document.

### 10.9 New rules

20. **Every `ConceptScenario` needs a cited, dated, quantified outcome.** No `source`, no ship.
21. **`concept` must match a real heading in the target lesson**, and `lessonAnchor` must resolve to it.
22. **`CONCEPT_SCENARIOS` is injected by the rehype plugin, never hand-written into MDX**, so 3.3 (zero MDX edits) continues to hold.

---

## 11. Library survey: where the three-mode model breaks

Four independent agents audited **454 lessons across all 21 categories**, sampling 34 in depth. Each was given the three modes and asked to hunt for misfits. They converged, without coordination, on the same conclusions.

### 11.1 Headline

| Finding | Consequence |
|---|---|
| ~15-20% of lessons fit none of the three modes | Three more modes needed |
| `build` fails wherever quality is rhetorical, not countable | ~1 in 3 build lessons must convert to `teardown` |
| All four agents independently invented the same 4th mode | `teardown` is real, not a local quirk |
| `simulation` is structurally wrong for delayed-consequence lessons | `calibration` mode, or ship nothing |
| `mental-models` is ~50% unmappable | The hardest category, and it sits in the pilot track |

### 11.2 The `build` grader problem

The sharpest finding, and it invalidates part of the earlier plan.

`build` has no grader. Where the artefact has **countable structure** or the lesson ships a **numeric threshold**, self-assessment genuinely works:

- `content/repurposing` produces an atom map. Auto-checkable: at least 6 distinct formats, a well-formed UTM per atom (regex), dates spread over 21+ days, and n-gram overlap with the source pillar under ~30%, which directly enforces the lesson's own "transform, do not copy-paste".
- `copywriting/value-prop-copy` ships the 5-second test, a *procedure with a threshold* (4 of 5 people). The best grader found anywhere in the survey.
- `analytics/utm-tagging` produces a taxonomy doc that is machine-checkable.

Where quality is purely rhetorical, it collapses:

- `copywriting/copywriting-101` asks for a rewritten 150-word block. Every auto-check (you-vs-we ratio, sentence length, CTA is a verb phrase) is trivially gameable. **A learner can pass every check and still write copy that sells nothing.** That is exactly "here is a sample, hope yours is similar".

**Rule: `build` requires a threshold or countable structure. Otherwise convert to `teardown`.** Projected impact: roughly 12-15 of the ~41 builds in content/copywriting/brand-strategy alone, concentrated in `copywriting`, where nearly everything wants to be a build.

### 11.3 Mode 4, `teardown`: supplied specimen, fixed answer key

All four agents proposed this independently under four names: *trace/explain*, *audit (frozen-artefact replay)*, *teardown/critique*, *red-team specimen critique*. Same mechanism every time.

**The learner analyses a specimen they do not own, scored against a pre-written expert key.**

It solves four separate problems at once:

1. **The only mode that grades exactly without a human.** The key is fixed, so partial credit and precise feedback are possible. This is the escape hatch for every failing `build`.
2. **Unblocks gated diagnostics.** `paid-ads/quality-score` has perfect diagnostic bones (exact column path, published thresholds, per-component remediation) but the learner must already have spent ~$300 for the data to be non-default. Hand them a realistic export instead.
3. **Handles architecture explainers.** `seo/how-search-works`, `analytics/cdp`, `data-warehouses`, `reverse-etl`, `privacy-sandbox` have no learner-side action at all. Given a URL and a symptom ("discovered, currently not indexed"), name which stage of the pipeline broke.
4. **Handles bias spotting.** Plant known defects in a real-shaped specimen (a Q4 discount plan, an MQL OKR sheet, a checkout flow) with a hidden defect manifest. Covers `sunk-cost-fallacy`, `survivorship-bias`, `cognitive-biases`, and the ethics half of `loss-aversion` ("find the three manufactured scarcity claims").

```ts
export type TeardownItem = {
  itemId: string;
  specimen: string;          // rendered text/table, never a screenshot (Rule 14)
  specimenSource: "real-redacted" | "synthetic-realistic";
  prompt: string;
  answerKey: {
    defect: string;
    severity: "critical" | "moderate" | "cosmetic";
    whyItMatters: string;
    lessonRef: string;
    owner: "you" | "developer" | "either";
  }[];
  distractors: string[];     // plausible non-defects that must NOT be flagged
  partialCredit: true;
};
```

`distractors` is what stops this degrading into find-the-obvious. The right standard: an ad export must contain keywords under 500 impressions that the learner is **supposed to ignore**, because knowing what is statistically unreliable is the actual skill being tested.

### 11.4 Mode 5, `drill`: parameterised numeric reps

For numeric-judgement lessons: `cro/sample-size-math`, `conversion-rate-math`, `statistical-pitfalls-in-cro`, `multivariate-vs-ab`, `analytics/ltv-cac`, `experimentation-program-roi`, `fundamentals/marketing-math`.

Why the others fail: `build` produces a one-cell answer, not an artefact. `diagnostic` fails because the calculator takes inputs the learner invents, so there is no state of the world to inspect. `simulation` is wildly over-engineered, you would build a branching dashboard to teach `n ~ 14,000`, and the learner passes once and learns nothing, **because the skill is pattern recognition across many parameter sets, not one decision.**

Shape: 6-10 randomly parameterised scenarios, ~30 seconds each, auto-graded against the closed-form answer with a tolerance band, scored on streak and accuracy rather than optimal/acceptable/costly.

**The critical design requirement: include unwinnable scenarios.** Given 400 visitors a week and a 1.8% baseline, the correct answer is "this test is not worth running, use qualitative research instead". Recognising the un-runnable test is the actual professional skill, and no single-shot mode can teach it.

### 11.5 Mode 6, `calibration`: deferred verification

The genuinely novel one, and the most important finding in the survey.

**Why `simulation` is structurally wrong for `mental-models/second-order-thinking`:** the entire content of that lesson is that consequences are invisible at decision time and arrive 6-18 months later, unattributed. A simulation that reveals "you chose the discount, here is the margin erosion" in three seconds teaches pattern-matching on five memorised traps, not the habit. **Learners will ace the drill and still discount in Q4.** The instant feedback loop is opposed to the lesson's own premise.

`build` fails too, because the artefact and the reasoning are the same object. Showing the sample consequence-tree removes the exercise; withholding it removes the grading.

Structure:

1. The learner picks a **real, live, undecided** decision from their own work, not a supplied scenario.
2. They write a falsifiable prediction: the first-order effect, at least two further orders, each with a date and a confidence percentage, plus one named disconfirming signal ("if X is above Y by March, I was wrong").
3. **Immediate grading is on structure only, never content**: depth of at least 2 orders, each order naming a mechanism rather than a mood, at least one predicted cost, at least one falsifiable signal with a date, confidence stated. All objectively checkable without the system knowing the right answer.
4. The prediction is stored with a review date. At 30/90/180 days the learner is re-prompted with their own text, records what actually happened, and scores their own calibration.
5. Optional adversarial layer: the system argues the opposite case and the learner must defend or explicitly update. This is where `bayesian-updating` and `chestertons-fence` actually live.

Three properties no other mode has: **the correct answer is unknown to the system**, **grading is on reasoning structure not outcome**, and **verification is deferred**.

It also needs product infrastructure nothing else here does: persistence, scheduled re-prompting, and a personal prediction log. That puts it in **Phase 3 at the earliest**.

### 11.6 `no-project` is a valid verdict

Until `calibration` exists, roughly 14 `mental-models` lessons and the definitional tail of `fundamentals` (`what-is-marketing`, `strategy-vs-tactics`, `mission-vision-values`, `brand-vs-performance`, `flywheel`) get **no project**, explicitly marked as such.

> **A fake simulation on `second-order-thinking` is worse than no project at all, because it certifies the wrong skill.**

That is Rule 23 below, and it is the most important rule in this document.

### 11.7 Revised distribution

Across the 454 lessons surveyed, after converting failing builds to `teardown`:

| Mode | Share | Concentrated in |
|---|---|---|
| `diagnostic` | ~26% | seo technical, analytics setup, email deliverability, growth. GSC + PageSpeed + GA4 Admin carry nearly all of it |
| `build` | ~26% | product-marketing, content, social calendars, email sequences |
| `simulation` | ~21% | **paid-ads and pr-communications almost exclusively** |
| `teardown` | ~12% | copywriting, analytics interpretation, psychology bias-spotting |
| `calibration` | ~7% | mental-models, fundamentals definitional tail |
| `drill` | ~5% | cro maths, analytics unit economics |
| `no-project` | ~3% | architecture explainers |

Two findings that should change build order:

- **Simulation ROI is concentrated, not spread.** It is the most expensive mode to author and it pays off almost entirely in `paid-ads` and `pr-communications`, the two categories where "irreversible, audience-facing, one shot" is the normal condition. Elsewhere it is thin. Build the simulation engine for those two and resist using it as a default anywhere else.
- **`mental-models` is the break point** (~15 of 29 unmappable), `psychology` second (~8 of 29), `fundamentals` third (~7 of 27). All three share one root cause: **the lesson teaches a judgement whose correctness is only observable after a delay the product currently has no way to represent.**

### 11.8 Consequence for the pilot

`solo-founder` includes three `mental-models` lessons: `first-principles-thinking` (build, weak), `opportunity-cost-thinking` (**unmappable**), `writing-to-think` (build, survives).

So the pilot hits the hardest case immediately. That is good rather than bad: far better to discover `no-project` and `calibration` in the pilot than at lesson 200. **Phase 1 should ship at least one explicit `no-project` verdict** to prove the honesty rule holds in practice.

Recommended pilot mode coverage, so every mechanism is proven before scaling:

| Mode | Pilot lesson |
|---|---|
| diagnostic | `fundamentals/marketing-math` (the survey's strongest diagnostic candidate) or `seo/on-page-seo` |
| simulation | `paid-ads/paid-ads-101` (already added as the 19th lesson) |
| build | `content/content-strategy` |
| teardown | `copywriting/copywriting-101` (the canonical failing build) |
| drill | `fundamentals/marketing-math`, numeric variant |
| no-project | `mental-models/opportunity-cost-thinking` |
| calibration | **deferred to Phase 3**, infrastructure not built |

### 11.9 New rules

23. **`no-project` is a valid, expected verdict.** Never force a mode onto a lesson that resists all of them. A fake simulation certifies the wrong skill and is worse than nothing.
24. **`build` requires a numeric threshold or countable artefact structure.** If quality is purely rhetorical, convert to `teardown`. Auto-checks a learner can game while still producing bad work do not count as grading.
25. **Every `teardown` needs distractors**, plausible non-defects that must not be flagged. Without them it degrades into find-the-obvious.
26. **`drill` must include unwinnable scenarios** where the correct answer is "do not run this".
27. **`calibration` grades structure, never content.** The system does not know the right answer and must never imply that it does.
28. **Do not default to `simulation`.** It is the most expensive mode and its ROI is concentrated in `paid-ads` and `pr-communications`. Elsewhere prefer `teardown` or `drill`.

---

## 12. Lesson quality issues found by audit (backlog, fix later)

A full mechanical audit of all **642 lesson files**, run while designing the projects layer. Every item below is **verified**, not inferred. None of it blocks the projects work, but several items are user-visible today.

Two findings turned out to be measurement artifacts that exposed *different* real problems, documented at 12.10 so nobody re-derives them.

### 12.1 P1, user-visible: `" ,  "` em-dash replacement residue, 53 files

The worst-looking issue, because it renders directly to the reader.

A bulk em-dash removal appears to have replaced `—` with `` ,  `` (space, comma, two spaces), leaving broken punctuation mid-sentence:

> "Segment, RudderStack, mParticle **,  the** unified-customer-profile layer." (`analytics/cdp`)

**53 files affected, 200+ individual occurrences.** Worst offenders:

| File | Occurrences |
|---|---|
| `copywriting/value-prop-copy` | 24 |
| `brand-strategy/naming` | 23 |
| `analytics/cdp` | 11 |
| `analytics/privacy-sandbox` | 4 |
| ...49 more files | 1-3 each |

**Fix:** scripted pass replacing `` ,  `` with the correct punctuation per context. Not blindly, since some are legitimately a comma followed by a sentence continuation. Recommend: auto-fix where the pattern is `word ,  word` mid-sentence (collapse to `, `), and hand-review the rest. Grep: `grep -rn " ,  " src/content --include=*.mdx`.

### 12.2 P1, user-visible: 10 lessons have no `##` headings at all

`TableOfContents.tsx` returns `null` when it finds fewer than 2 headings. These 10 lessons therefore render **with no table of contents, on desktop and mobile**, and the reader gets no way to navigate or scan.

```
ai-marketing/internal-gpt-knowledge-bases
brand-strategy/narrative-transport-branding
copywriting/ux-writing-microcopy
cro/post-purchase-cro
fundamentals/plg-fundamentals
growth/reverse-trials-monetization
paid-ads/pmax-advantage-plus
product-marketing/category-creation-gtm
+ 2 more
```

**Fix:** add section headings. This also directly blocks the projects layer, since Rule 15 requires every `ProjectStep.concept` to map to a real lesson heading, and section 10 requires `ConceptScenario.lessonAnchor` to resolve to one. **These 10 lessons cannot receive projects or concept scenarios until they have headings.**

### 12.3 P1: 4 lessons below the Rule 16 stub threshold

Rule 16 flags anything under ~700 words with no real depth as a stub.

| Lesson | Words |
|---|---|
| `fundamentals/strategy-vs-tactics` | 648 |
| `pr-communications/press-kit-media-kit` | 661 |
| `affiliate-marketing/influencer-vs-affiliate` | 666 |
| `pr-communications/measuring-pr-impact` | 693 |

Note `fundamentals/strategy-vs-tactics` was independently flagged in the mode survey (11.6) as having no procedure at all, only What/Why/How/Mistakes/Takeaway. Thin **and** unprojectable is a strong signal it needs rewriting, not just padding.

### 12.4 P2, SEO and navigation: "Related Concepts" exists in only 10% of lessons

**63 of 642 (9.8%).** 579 lessons have no related-concepts section.

This is the largest internal-linking gap in the codebase. The site teaches internal linking as a ranking factor (`seo/internal-linking`, in two tracks) while 90% of its own lessons are terminal nodes.

**Fix:** generate from `curriculum.ts` rather than hand-authoring 579 sections. Same category plus shared level is a reasonable first heuristic; `RelatedLessons.tsx` already exists and already does this at the page level, so the cheapest fix may be to drop the MDX convention entirely and rely on the component, then delete the 63 hand-written ones for consistency.

### 12.5 P2: 45 lessons cite 2024 and never 2025 or 2026

The footer reads "© 2026" and Rule 11 requires recent research. These 45 read as stale on arrival:

```
analytics/marketing-kpis-okrs, analytics/product-vs-marketing-analytics,
analytics/reverse-etl, analytics/session-recording,
brand-strategy/narrative-transport-branding, brand-strategy/personal-brand-vs-company-brand,
content/content-localization, content/video-first-content-strategy,
copywriting/microcopy, copywriting/storytelling-copy, + 35 more
```

**Fix:** refresh stats with 2025/2026 sources. This overlaps usefully with section 10, since adding a dated concept scenario naturally refreshes the lesson's evidence base. **Do them together, not twice.**

### 12.6 P2: near-duplicate lesson slugs

Confirmed pairs likely to produce duplicated projects and to compete in search:

| Pair | Note |
|---|---|
| `analytics/attribution` vs `attribution-models` | Near-identical scope |
| `analytics/funnel-analysis` vs `funnel-analytics` | Names differ by one character |
| `analytics/cdp` vs `composable-cdp` | Parent/child, probably fine merged |
| `analytics/kpis-for-marketers` vs `marketing-kpis-okrs` | Overlapping |
| `analytics/dashboards` vs `reading-dashboards-for-non-analysts` | Overlapping |
| `email/email-101` vs `email-marketing-101` | Near-identical |
| `email/automation-drips` vs `automation-flows` | Near-identical |
| `social/social-listening` vs `social-listening-advanced` | Parent/child, probably fine |

**Fix before authoring projects.** Either merge, or give each a distinct angle and a distinct project. Doing nothing means paying twice to write near-identical runbooks. Note `analytics` accounts for 5 of the 8 pairs.

### 12.7 P3, hygiene: UTF-8 BOM at file start, 19 files

```
analytics/cdp, analytics/clean-rooms, analytics/data-warehouses,
analytics/privacy-sandbox, psychology/default-bias,
psychology/mere-exposure-effect, tools/ai-native-tools,
tools/ai-tools-overview, + 11 more
```

A `U+FEFF` byte order mark sits before `export const lessonMeta`. Harmless today because the MDX parser tolerates it, but it silently breaks any tool anchoring on `^export`. It broke this audit, which is how it was found.

**Fix:** strip the BOM, add a lint check.

### 12.8 P3, consistency: 25 lessons use single quotes in `lessonMeta`

```ts
level: 'Advanced',      // 25 files
level: "Advanced",      // 617 files
```

Valid JavaScript, so nothing breaks at build time. The risk is **silent tooling divergence**: this audit's `level`, `summary` and Rule 15 multilingual checks all false-negatived on exactly these 25 files, producing three phantom issues that looked real until verified.

This matters more than it sounds. Rule 21 already documents a case where an agent's output format silently diverged from the codebase convention and caused a real bug. Same class of problem.

**Fix:** normalise to double quotes, add a lint rule. Note that Rule 1 (no unescaped inner double quotes) becomes relevant when converting; check each summary for `'` contractions and inner quotes before switching.

### 12.9 P3: one bloated lesson

`cro/social-proof-engineering` at 2,694 words, just past the Rule 16 ceiling of ~2,000-2,600 for a rich lesson. Low priority. Only act if it repeats itself; Rule 16 explicitly warns against trimming rich lessons to hit a number.

### 12.10 Two false positives, recorded so they are not "fixed" by mistake

**A. Mermaid `\n` in node labels, 165 files. NOT a bug. Do not touch.**

A naive audit flags 165 files writing `A[Product\nWhat you sell]`. **This is the correct, documented authoring pattern.** Rule 30 explains at length that `Mermaid.tsx`'s `insertLabelBreaks()` handles the conversion, that the `<br/>` alternative was tried and fails silently because DOMPurify strips HTML-namespaced elements inside `foreignObject`, and that new lessons should keep writing `\n`. Any future agent "fixing" these 165 files would reintroduce a bug that already shipped to production once.

**B. Rule 15 multilingual entries appear 100% compliant.** The 25 apparent violations were all the single-quote files from 12.8. No genuine Rule 15 gaps found across 642 lessons.

### 12.11 Clean results worth recording

Audited and found **zero** violations of:

- Rule 33, leaked agent thinking lines above `lessonMeta` (the Session 66 issue has stayed fixed)
- Rule 1, unescaped double quotes inside `lessonMeta` strings
- Missing `<ResourceList>`, present in all 642
- Rule 15 multilingual entries, see 12.10B

### 12.12 Suggested order

| Priority | Item | Effort | Why now |
|---|---|---|---|
| 1 | 12.2, 10 lessons with no headings | Small | **Blocks projects and concept scenarios** on those lessons |
| 2 | 12.1, `" ,  "` residue in 53 files | Small, scripted + review | Visible to every reader today |
| 3 | 12.6, duplicate slugs | Medium, judgement | Must resolve **before** authoring projects or the work is paid for twice |
| 4 | 12.3, 4 stub lessons | Medium | Two are already flagged unprojectable |
| 5 | 12.5, 45 stale-year lessons | Large | **Bundle with section 10 scenario work** |
| 6 | 12.4, Related Concepts at 10% | Medium, generated | Biggest SEO win, but no reader is blocked |
| 7 | 12.7 + 12.8, BOM and quote style | Small, scripted | Prevents future silent tooling divergence |
| 8 | 12.9, one bloated lesson | Trivial | Optional |

Items 1, 3 and 5 have direct dependencies on the projects and scenarios work. The rest are independent and can be done any time.

---

## 13. Consumer personas: who this is actually for

Five personas to design against and to test every project, scenario and UX decision against. They are derived from evidence already in the codebase, not invented: the `audience` field on all 24 tracks, the existence of `/interview-questions` and `/interview-prep`, the mandatory Hindi/Tamil/Telugu resources in every lesson (Rule 15), the free-tool ethos, and the fact that the site has **no accounts at all**, only localStorage.

### 13.1 P1, Meera, the career switcher

**28, Bengaluru. Ex-support, wants a marketing job in 6 months. No budget. Learns partly in Hindi.**

- **Has:** a laptop, time in the evenings, high motivation, no employer
- **Lacks:** a website, an ad account, a GA4 property, an email list, any professional data
- **Wants:** proof she can do the job, and something to say in an interview
- **Existing site support:** strong. `/interview-questions`, `/interview-prep`, and the Rule 15 multilingual resources exist for exactly her.

**What she needs from projects:** `simulation`, `teardown` and `drill`, plus the starter datasets (9.2). The `/portfolio` output (9.3) is not a nice-to-have for her, it is the entire point.

**What currently fails her:** every `diagnostic` project. She has nothing of her own to inspect. She is ~26% locked out by default.

### 13.2 P2, Arjun, the solo founder

**34, running a 2-person SaaS. Time-poor, not curious, wants outcomes.**

- **Has:** a live site, GSC, GA4, a small ad budget he guards carefully, ~3 hours a week
- **Lacks:** patience for theory, a team, tolerance for anything that does not move a number
- **Wants:** to find what is broken on his own site tonight
- **Existing site support:** the `solo-founder` track is the #1 track after the reorder

**What he needs:** `diagnostic` above everything, on his own assets, with the `owner: you | developer` field (2.3a) so he knows what he can fix himself versus what needs his one engineer.

**What currently fails him:** long lessons. He will skip to the project. This is the strongest argument for the concept map (2.3) sitting at the top of the projects section, and for the header time estimate.

### 13.3 P3, Priya, the junior in-house marketer

**24, first marketing job, 8-person team. Has access, lacks judgement.**

- **Has:** GSC, GA4, an ad account, a CMS, a manager reviewing her work
- **Lacks:** confidence, and any sense of what "normal" looks like
- **Wants:** to not look stupid, and to know when a number is a problem
- **Existing site support:** partial. Lessons teach concepts; nothing tells her what healthy looks like.

**What she needs:** the `healthy` / `unhealthy` / `interpret` fields (2.3a) more than anyone. Her actual question is never "what is CTR", it is "is 1.4% bad?" She also needs `drill` mode, since her weakness is reps, not comprehension.

**What currently fails her:** benchmarks appear inside lesson prose and are unfindable later. She will be looking at a dashboard, not reading a lesson.

### 13.4 P4, Sameer, the freelancer

**31, five clients across five channels. Sells deliverables.**

- **Has:** client accounts, real budgets, breadth
- **Lacks:** depth in any one channel, and time to build templates from scratch
- **Wants:** something he can put his logo on and send to a client
- **Existing site support:** the `freelancer-agency` track

**What he needs:** `build` mode, specifically the artefacts with countable structure (11.2). A positioning doc, a UTM taxonomy, a content calendar, an audit report. He is also the main audience for the free-vs-paid tool split (2.4), because he has to justify tool spend to clients.

**What currently fails him:** nothing produces a client-ready artefact today.

### 13.5 P5, Tom, the curious beginner

**19, student, no site, no job, no data, browsing on a phone at 11pm.**

- **Has:** curiosity, a phone, zero context
- **Lacks:** everything else, including a reason to come back tomorrow
- **Wants:** to understand how marketing works, with no commitment
- **Existing site support:** weakest of the five. He is the empty-state case throughout.

**What he needs:** `simulation` and `teardown` exclusively, plus genuinely good empty states.

**Why he matters most for design:** he is the hardest constraint. If a project works for Tom it works for everyone, because he has no site, no account, no budget and no data.

### 13.6 Coverage matrix

| Mode | Meera | Arjun | Priya | Sameer | Tom |
|---|---|---|---|---|---|
| `diagnostic` (~26%) | ❌ no assets | ✅ ideal | ✅ ideal | ✅ client assets | ❌ no assets |
| `simulation` (~21%) | ✅ | ⚠️ time | ✅ | ✅ | ✅ ideal |
| `build` (~26%) | ✅ | ⚠️ time | ✅ | ✅ ideal | ⚠️ no context |
| `teardown` (~12%) | ✅ ideal | ✅ | ✅ | ✅ | ✅ ideal |
| `drill` (~5%) | ✅ | ⚠️ | ✅ ideal | ✅ | ✅ |
| `calibration` (~7%) | ❌ no live decisions | ✅ ideal | ⚠️ junior | ✅ | ❌ |

### 13.7 What the matrix actually tells us

**1. `diagnostic` locks out two of five personas, and they are the two with the least alternative.** Meera and Tom have nothing to inspect. That is roughly 26% of the library closed to the users who most need free education.

**Fix:** every `diagnostic` project ships a **supplied-specimen fallback**, which is `teardown` machinery reused (11.3). The survey already found `seo/core-web-vitals` degrades gracefully this way, since PageSpeed Insights runs on any public URL, so the drill becomes "audit a competitor" instead of "audit your site". **Make that the rule, not the exception.** This is the single highest-value change the persona pass produces.

**2. `teardown` is the only mode that works for all five.** It was the survey's fourth mode, discovered late and initially framed as an escape hatch for failing builds. The persona matrix says it is actually the most broadly valuable mode in the system. **Raise its priority in Phase 1 accordingly.**

**3. `calibration` serves exactly one persona well.** It needs the most new infrastructure (persistence, scheduled re-prompting, a prediction log) and only Arjun and Sameer have real live decisions to predict against. Phase 3 placement is correct, and this justifies it.

**4. Tom is the acceptance test.** Adopt as a standing check: **if a project cannot be completed by someone with no site, no account, no budget and no data, it needs a supplied-specimen path before it ships.**

### 13.8 New rules

41. **Every `diagnostic` project must ship a supplied-specimen fallback.** Two of five personas own no assets to inspect. Reuse the `teardown` answer-key machinery rather than building something new.
42. **Tom is the acceptance test.** No site, no account, no budget, no data, on a phone. If a project cannot be finished under those constraints, it is not finished.
43. **Benchmarks must live in project `healthy`/`unhealthy` fields, not only in lesson prose.** Priya's real question is never "what is CTR", it is "is 1.4% bad?", and she is looking at a dashboard, not a lesson.

---

## 14. Code audit: five adversarial lenses

Five independent agents audited the codebase, one per lens: **security & abuse**, **state integrity**, **accessibility**, **performance**, and **new-learner UX**. Each was required to cite `file:line`, quote the offending line, and separate confirmed from unconfirmed. Roughly **94 findings**, of which **13 are P0**.

Context for why this exists: the earlier "audit" in section 12 examined 642 `.mdx` files and **zero lines of application code**. Every integrity bug in section 0.1 was found by the owner, not by that audit. This section is the pass that should have happened first.

### 14.1 P0 findings, all confirmed in source

| # | Finding | Location |
|---|---|---|
| **S1** | Cloud sync writes **every user to one global KV key** | `api/sync-proxy/route.ts:25` |
| **S2** | Sync auth secret is inlined into the public JS bundle | `settings/SettingsClient.tsx:141` |
| **S3** | `/api/groq` is an unauthenticated LLM proxy with **no callers** | `api/groq/route.ts:83` |
| **U1** | Blocked `localStorage` crashes **the entire site** | `ThemeToggle.tsx:18`, `OnboardingModal.tsx:25`, `LessonNotes.tsx:15` |
| **U2** | Users never told progress is browser-only | `page.tsx:197`, `SettingsClient.tsx:279` |
| **U3** | Cloud Sync UI instructs learners to set env vars | `SettingsClient.tsx:316-345` |
| **U4** | Certificates issued at 0% completion | `certificates/[slug]/page.tsx:249` |
| **A1** | Quiz answer buttons `disabled` on select, destroying keyboard focus | `Quiz.tsx:266` |
| **A2** | Command palette is a broken combobox, silent to screen readers | `CommandPalette.tsx:208` |
| **A3** | "Clear all" button is 1:1 contrast, invisible in **both** themes | `tools/ToolsClient.tsx:163` |
| **P1** | `/learn` ships a **1.33 MB** HTML document | `learn/page.tsx:29-68` |
| **P2** | Full `curriculum.ts` in the client bundle on **every** route | `Nav.tsx:12` |
| **T1** | Corrupt storage silently replaced by defaults, then overwritten | `engagement.ts:63`, `progress.ts:26` |

### 14.2 Security & abuse

**S1, one global KV key.** `api/sync-proxy/route.ts:25`:
```ts
.../storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/progress
```
The key is the literal string `progress`. No user identifier exists anywhere in the route; GET and POST hit the same key. The payload is not just checkmarks, `SettingsClient.tsx:12` includes `NOTE_KEY_PREFIX`, so every `ma_note_*` key, the learner's **private per-lesson notes**, goes into a shared global blob. Combined with S2, anyone can read the last syncing user's notes or destroy everyone's progress with one request.
**Fix:** key by a per-user identifier issued as an httpOnly cookie.

**S2, the secret is public.** `SettingsClient.tsx:141` sends `process.env.NEXT_PUBLIC_SYNC_SECRET`, which Next inlines literally into a static chunk. It is the route's only gate (`sync-proxy/route.ts:41`). AGENTS.md Rule 26 documents this as intentional. **The audit's assessment is that Rule 26 documents a vulnerability rather than a design.** It is also unthrottled, unlike `/api/groq` and `/api/geo-audit`.

**S3, open LLM proxy.** `api/groq/route.ts:83` has no auth, no origin check, no referer check. `grep -rn "api/groq" src/` returns **no callers**. Dead code, live in production, forwarding attacker-chosen `system` messages (`:41` explicitly permits `role: "system"`) to Groq on `GROQ_API_KEY` and streaming results back. Uncapped billing exposure, and the domain becomes a laundered jailbreak endpoint.
**Fix:** delete the route. It has no caller.

**S4 (P1), in-memory rate limiting does nothing on Vercel.** `groq/route.ts:21`, `geo-audit/route.ts:115` use a module-scope `Map`. State is per-lambda-instance, so limits are per-cold-start, not per-IP. The Map is also never pruned.

**S5 (P2), two conflicting CSP headers.** `vercel.json` and `next.config.ts` both emit one. Browsers enforce the **intersection**, so the stricter `vercel.json` policy wins and the documented `next.config.ts` policy, which whitelists PostHog, **is not what runs**. PostHog is likely blocked in production.

**S6 (P2), `geo-audit` port oracle.** The SSRF guard is genuinely strong (verified against IP-literal, decimal/octal, IPv6 ULA, `::ffff:` mapping and redirect-to-internal), but filters addresses and never **ports**. `http://public-host:22/` is allowed and distinct error strings turn it into a port scanner running from Vercel egress IPs.

### 14.3 State integrity

**T1, silent permanent data loss.** `engagement.ts:63` and `progress.ts:26` both `catch { return defaultState() }`. Neither distinguishes "absent" from "unparseable", so the next write serialises defaults over still-recoverable data. A quota-truncated write or partial sync pull means a user opens the site, sees 0 XP, clicks one lesson, and 4,000 XP is gone forever.

**T2, achievements are mathematically unreachable.** `achievements.ts:108` checks `completed.size >= flatLessons().length`.

> **Numbers corrected during verification.** The agent reported 606 entries / 593 unique. Verified directly: `flatLessons()` returns **655**, unique writable IDs are **642**, matching the 642 `.mdx` files on disk exactly. The gap of **13** is right; the magnitudes were wrong by 49. Published figures below are the verified ones.

So "Marketing Polymath" requires 655 and the maximum reachable is 642. **Unreachable by exactly 13, permanently.**

**T3, `fundamentals` capped at 27/40 forever.** All 13 cross-listed lessons live in `fundamentals` (verified). `MarkComplete` writes `sourceCat` (`page.tsx:214`), but `achievements.ts:85`, `SkillMapClient.tsx:31` and `CategoryProgress.tsx:18` all look up `fundamentals/<slug>`. The category is stuck at **67.5%** and "Category Clear" never fires.

**T4, the track quiz never sets the quiz-pass flag.** `TrackQuizPageClient.tsx:101` calls `markComplete()` and `addXP()` but `grep setQuizPassed` in that file returns **0 hits**. `MarkComplete.tsx:132` masks it only while `done` is true. Untick a lesson once and it **re-locks permanently**, despite the learner having passed the track quiz and the XP never being reversed. This compounds 0.1d.

**T5, the engagement write lock is dead code.** `engagement.ts:149` clears `_writing` in a `finally` before `addXP` returns, so the next call always re-reads localStorage. The documented `markAll()` protection at `:91-99` actually comes from `saveEngagement` being synchronous, not from the lock. No `storage` event listener exists anywhere, so **multi-tab writes silently discard each other**.

**T6, `getEngagement()` spread admits `null`.** `engagement.ts:62` spreads parsed JSON over defaults with no validation, and `addXP` has `try/finally` with **no `catch`** (`:116`, `:149`). An imported blob containing `{"xpLog": null}` makes every completion throw, after `markComplete()` has already persisted.

**T7 (P2), bookmarks have no dedup.** `BookmarkButton.tsx:38` guards on mount-time state, not the freshly read array. Open one lesson in five tabs, click bookmark in each, and "Bookworm" unlocks with one lesson.

**T8 (P2), streak never decays on read.** `engagement.ts:127` only recomputes inside `addXP`. Stop for two months and `StreakBadge` still renders 🔥 7 until an XP action silently resets it to 1.

**T9 (P2), "Reset All Progress" leaves state behind.** `SettingsClient.tsx:248` sweeps `QUIZ_PASS_KEY_PREFIX` but not `QUIZ_STORAGE_PREFIX` (`ma_quiz__learn_*`) or `ma_recent`. After a reset, a previously-passed lesson renders a green "You've unlocked Mark as Complete" panel next to a **locked** button.

### 14.4 Accessibility

Zero `aria-live` regions, zero `tabIndex`, and zero `prefers-reduced-motion` in the entire codebase.

**A1, `Quiz.tsx:266` `disabled={answered}`.** A keyboard user tabs to an option and presses Enter; all four buttons become `disabled`, leave the tab order, and focus drops to `<body>`. They must tab from the top of the document to reach "Next Question", **on every question, on every lesson**. Same defect at `TrackQuizPageClient.tsx:187`, where it disables every option across all 84 questions at once.

**A2, `CommandPalette.tsx:208`.** The input has no `role="combobox"`, no `aria-expanded`, no `aria-controls`, no `aria-activedescendant`, and no `id` on any `<li role="option">`. Cmd+K is a keyboard power feature that is unusable by exactly the users who most need it.

**A3, `tools/ToolsClient.tsx:163`.** "Clear all" uses `text-[var(--accent-foreground)]` on `var(--background)`. Those tokens are `#ffffff`/`#ffffff` in light and `#0a0a0b`/`#0a0a0b` in dark. **1:1 contrast in both themes**, invisible to every sighted user.

**A4 (P1), quiz results never announced.** `Quiz.tsx:135` uses `role="region"`, which is not a live region. The single most important moment in the product is silent.

**A5 (P1), wrong answers signalled by colour alone.** `Quiz.tsx:255` sets a red border on the user's incorrect pick with no icon and no text, while the correct option gets a `CheckCircle2`. `TrackQuizPageClient.tsx:159` does this correctly with an `XCircle`; `Quiz.tsx` does not.

**A6 (P1), Mermaid diagrams have no text alternative.** `Mermaid.tsx:239` sets `role="img"` with `aria-label={caption ?? "Diagram"}`, collapsing the whole SVG into one node. With no `caption` prop, the accessible name is literally the word "Diagram". A blind learner gets zero content from a teaching diagram, on 419 lesson pages.

**A7 (P1), locked "Mark as complete" scrolls without moving focus.** `MarkComplete.tsx:160`. A screen-reader user activates the gate and hears nothing.

**A8 (P2), no focus-visible fallback.** Several inputs use `focus:outline-none` with only a 1px border hue change, and `globals.css` has no global `:focus-visible` rule to fall back on.

**Clean:** `useFocusTrap` is genuinely correct, every image has `alt`, no unlabelled icon buttons, no clickable `<div>`s, skip link correct, modals trap focus and close on Escape.

### 14.5 Performance, including a correction to this plan

> ### ⚠️ 14.5.1 This plan's section 1.3 was wrong
>
> Section 1.3 asserted that a projects dataset would put "3-4 MB, larger than both combined" into the client, reasoning from `quizzes.ts` at 1.91 MB and `lesson-resources.ts` at 1.72 MB. **That premise is false and is now disproven by measurement.**
>
> Neither file reaches the client. Distinctive payload strings were grepped across all 105 chunks in `.next/static/chunks/` with **0 matches**, and found only in `.next/server/chunks/`. The boundary holds because `Quiz.tsx:29` takes questions as a **prop**, the lesson page is a server component, and `TrackQuizPageClient.tsx:29` uses `import type`. A learner downloads **~4 questions, not 2,252**.
>
> **The per-category split decision in 2.2 still stands, but for a different reason.** It was justified by a lesson-page bundle risk that does not exist. The real justification is the `/projects` hub (section 5), which **is** a client component and does need queryable data, which is exactly what the slim generated index in 5.1 solves. The 3.6 MB is a build-time and DX cost, not a user cost.
>
> Recording this because the original reasoning was asserted from file sizes without checking the module graph, which is the same failure mode as section 12's audit.

**P1, `/learn` is a 1.33 MB document.** `learn/page.tsx:29-68` renders all 655 lesson rows with summaries. Measured: `learn.html` = **1,326,887 B raw / 136,226 B gzip**, of which 767,735 B is `<script>` because every summary appears twice (HTML plus the embedded `self.__next_f` RSC payload). The separate `learn.rsc` is another 700,746 B. The next largest page is 231,576 B, so this is **5.7× the runner-up**.

**P2, `curriculum.ts` in every client bundle.** `Nav.tsx:1` is `"use client"` and `:12` imports `CATEGORIES`. Measured chunk **148,426 B raw / 48,020 B gzip**, containing 655 `summary:` fields, present in the script list of **every** prerendered page. Nav uses only `slug`, `title`, `emoji` and `lessons.length`.
**Fix:** export a `CATEGORY_INDEX` of ~1 KB. **−48 KB gzip on every route for one import swap.**

**P3 (P1), `posthog-js` eagerly bundled.** `PostHogProvider.tsx:3` static import, **195,735 B raw / 63,958 B gzip** on every page, downloaded and parsed even when `NEXT_PUBLIC_POSTHOG_KEY` is unset, because the guard at `:9` is inside the effect after the module already loaded.

**P4 (P1), DOMPurify on 223 pages that have no diagram.** `Mermaid.tsx` statically imports `dompurify` (**27,135 B raw / 10,138 B gzip**) while mermaid itself is correctly dynamic. 419 of 642 lessons use `<Mermaid`; the other **223 pay for nothing**.
**Fix:** move the import into the existing `await import()` block at `Mermaid.tsx:100`. **−10 KB gzip on 642 pages, two lines.**

**P5 (P1), Mermaid loads at mount, not on visibility.** 135 KB gzip pulled during hydration on 419 pages even for a below-the-fold diagram.

**Clean:** zero `useEffect` without a dep array across 39 sites, no `setInterval` anywhere, no O(n²) loops, Mermaid code-splitting verified working, CommandPalette correctly deferred with `ssr: false`, fonts self-hosted, service worker correct.

**Contested:** the audit **could not reproduce** the theme hydration mismatch observed in the dev console earlier in this session, and reports the code as written is correct. Possibly dev-only or extension-induced. Needs one clean check before anyone "fixes" it.

### 14.6 New-learner UX

**U1, blocked storage crashes everything.** `ThemeToggle.tsx:18`, `OnboardingModal.tsx:25` and `LessonNotes.tsx:15` call raw `localStorage` with no try/catch. The first two render inside `layout.tsx`, a layout-level throw is not caught by `error.tsx`, and there is **no `global-error.tsx`**. A user with site data blocked gets Next's raw crash screen on every page. Every other storage module guards correctly.

**U2, no warning that progress is browser-only.** `page.tsx:197` sells "No account needed" as a feature. `/settings` never states the risk and puts Export below the fold.

**U4, certificates at 0%.** Confirmed independently by three of the five audits.

**U5 (P1), the track quiz is 56-84 questions on one page with no persistence.** `TrackQuizPageClient.tsx:141` renders every question at once, `:61` disables Submit until all are answered, and `:47` keeps state in React only. `b2b-marketer` is **84 questions**, roughly a 60-screen scroll on a phone, and backgrounding the tab wipes it.

**U6 (P1), the track page invites skipping the track.** `TrackLessonList.tsx:66` shows "Take track quiz to mark all complete" **because** `pct < 100`, so it is loudest for someone who has learned nothing.

**U7 (P1), the stricter gate is on the easier task.** The per-lesson quiz demands **100%** (`Quiz.tsx:94`); the track quiz covering 21 lessons needs **80%**.

**U8 (P1), mobile has no XP badge and no search.** `StreakBadge.tsx:30` is `hidden sm:flex`, the palette button is `hidden md:flex`, and `learn/page.tsx:21` tells phone users to "use Ctrl+K".

**U9 (P1), Achievements and Skill Map are a wall of zeros.** No empty state, while `BookmarksList.tsx:41` has an excellent one. The pattern exists in the codebase and was not applied.

**U10 (P1), silent write failures across the gamification loop.** `MarkComplete.handleComplete()` fires confetti, flips the button and dispatches the toast even when nothing persisted.

**U11 (P2), stale numbers in user-visible copy on six pages.** "393+ lessons" and "15 disciplines" against the real **642** and **21**; `/tracks` says 22 against **24**. Meanwhile the hero computes 655 and the OG image hardcodes 642.

**U12 (P2), certificate print includes nav and footer.** No global `@media print` rule; the sibling cheat-sheet page has one.

**U13 (P2), `/compare` promises pros and cons for 112 tools; only 7 pairs have data.**

**U14 (P2), dead GitHub URL.** `Footer.tsx:27` points at `Layruss98266`; the rest of the site uses `Surya8991`.

**U15 (P2), `/interview-prep` is orphaned.** Nothing links to it.

**Clean:** quiz coverage is complete across all 642 unique lessons with 0 orphans, no broken track links, no dead internal routes, the 404 page is genuinely helpful, and hydration is handled cleanly with `mounted` flags everywhere.

### 14.7 Convergent findings

Where lenses independently agreed, confidence is highest:

| Finding | Found by |
|---|---|
| Certificates ungated | security, UX, and section 0.1b |
| Cross-listing breaks achievements and progress | state, UX |
| Track quiz reveals answers then allows retry | security, and section 0.1c |
| localStorage failures are silent or fatal | UX, state, security |
| `/learn` and `curriculum.ts` are oversized | performance, UX |

### 14.8 New rules

44. **Never add a `"use client"` file that imports a large data module.** `Nav.tsx` importing `CATEGORIES` costs 48 KB gzip on every route. Import a slim index instead. This is the shape that would have made the projects layer genuinely expensive.
45. **Every `localStorage` access goes through its `src/lib` module.** `ThemeToggle`, `OnboardingModal` and `LessonNotes` bypass theirs and can crash the entire app. Rule 18 already required this; it is being violated in three places.
46. **On a storage parse failure, preserve the raw value before writing defaults over it.** Currently a corrupt blob is silently replaced and then overwritten, destroying recoverable data.
47. **Any ID built from a category must resolve `sourceCategory ?? category`.** Three separate progress UIs and two achievements are broken by this today.
48. **No API route ships without auth and a shared-store rate limit.** `/api/groq` has neither and has no callers at all.

---

## 15. Testing and data validation

### 15.1 Current state: there is none

Verified: **no `test` script in `package.json`**, no test files anywhere in the repo, no CI test step. The only automated check is `next build` and `next lint`.

That has been survivable because the site is mostly static content. It stops being survivable here, for a specific reason: **this plan adds ~1,284 project records whose correctness is entirely a matter of invariants that a human reviewer cannot hold in their head.** Every rule in this document is currently an aspiration with nothing enforcing it.

The clearest case is Rule 40. Shuffling `Quiz.options[]` without remapping `correct` silently mis-grades all 2,252 questions with no build error, no runtime error and no type error. A five-line property test catches it instantly. Code review demonstrably does not, since the naive version looks correct.

### 15.2 The important reframe: this needs data validation, not unit tests

Most of the value here is **not** React component testing. It is assertions over static data files. That is cheaper, faster, and catches the things that actually go wrong in a content codebase.

Three tiers, in order of value per hour:

| Tier | What it covers | Effort |
|---|---|---|
| **1. Data validation** | Roster, projects, scenarios, quizzes, curriculum. ~80% of the value | Low |
| **2. Integrity regression** | The gate bugs in 0.1-0.1f, so they cannot silently return | Low |
| **3. Component tests** | Quiz, MarkComplete, TrackLessonList behaviour | Medium |

### 15.3 Tier 1, data validation

These are the assertions that turn this document's rules into something enforced.

**Curriculum and content integrity** (would have caught findings the audits found by hand):

- Every `LessonRef` resolves to an MDX file at `src/content/{sourceCategory ?? category}/{slug}.mdx`
- No orphan MDX files, every file on disk is referenced by `curriculum.ts`
- `flatLessons()` deduped count **equals** the `.mdx` file count. *This single assertion catches the 655 vs 642 drift that makes two achievements unreachable.*
- Every lesson has at least two `##` headings. *Catches the 10 heading-less lessons in 12.2, which also block projects.*
- No two slugs in a category normalise to the same string. *Catches the 8 near-duplicate pairs in 12.6.*

**Quizzes** (existing data, no new feature required):

- `correct` is an integer index within `options.length`, for all 2,252
- Every registered lesson has a `QUIZZES` entry and vice versa
- No option string is position-dependent (`/all of the above|none of the above/i`). *Catches `analytics/consent-mode`, the sole blocker for Rule 40's shuffling.*
- **Property test for the shuffle**: for any question, after `shuffleOptions(q)`, `result.options[result.correct] === q.options[q.correct]`. Run it over all 2,252 with a seeded RNG. This is the single highest-value test in the document.

**Roster** (`case-companies.ts`):

- Every entry has a non-empty, well-formed `exit.source` URL and a parseable `exit.date`
- The barred list is absent: Glossier, Away, CRED, Zerodha, Zoho
- Region split within tolerance of the 60/40 target
- Exit-scale quota within tolerance of the 30/30/25/15 target
- Minimum 12 distinct sectors
- No `companyId` appears in more than 4 projects

**Projects**:

- Every `companyId` resolves in `CASE_COMPANIES`
- Every `toolName` resolves in `TOOLS`, or carries `inlineUrl` + `inlinePricing`
- `toolStack.free` is non-empty (the free-path guarantee)
- `mode: "simulation"` implies `stages` and no `steps`; other modes the reverse
- `archetype` in `{simulation, forecast, audit}` implies `datasetUrl`, **and the referenced file exists in `public/project-data/`**
- Every `ProjectStep` carries all five runbook parts: `where`, `procedure`, `outputSample`, `healthy`/`unhealthy`/`interpret`, `soWhat`, `owner`
- `sampleOutput` references a different `companyId` than `scenario`
- No lesson reuses an archetype within its own project set
- Every `costly` simulation option has a non-empty `lessonRef`
- **Every step's `concept` matches a real heading in the source lesson's MDX**, and `lessonAnchor` equals that heading's slugified id. This one requires parsing the MDX, and it is the assertion that stops projects drifting away from the lessons they operationalise.

**Concept scenarios**: every entry has a cited `source`, a quantified `benefit`, and a `concept` matching a real lesson heading.

### 15.4 Tier 2, integrity regression

Small, targeted, and permanent:

- **No component calls `markComplete()` without `getQuizPassed()` in the same file.** A grep-based assertion over `src/components/**` is sufficient and directly implements plan item 1.8, which is otherwise unimplementable. Currently three call sites; a fourth should fail the build.
- `markIncomplete()` reverses the XP that `markComplete()` awarded
- The certificate page returns null or a progress card below 100%
- `getEngagement()` returns a valid shape when given `{"xpLog": null}`, `"garbage"`, `""`, and a truncated JSON string
- Achievement `check` functions are satisfiable: for each, construct the maximal reachable state and assert it passes. *This is a general form of the bug that makes "Marketing Polymath" unreachable, and it would have caught it at authoring time.*

### 15.5 Tier 3, component tests

Only where behaviour is subtle. Not a coverage exercise.

- `Quiz`: retry clears saved state; options reshuffle between attempts; question order is stable within a session
- `MarkComplete`: locked when `!quizPassed && !done`; unlocks on `QUIZ_PASSED_EVENT`
- `TrackLessonList`: locked checkbox navigates rather than toggling
- `TableOfContents`: `extraSections` appear after article headings

### 15.6 Tooling recommendation

**Start with `node --test`, add nothing.** Node 20+ (already required by `engines`) ships a test runner. Tiers 1 and 2 are plain assertions over imported data and need no framework, no jsdom, no transform pipeline. That is ~80% of the value for one line in `package.json`:

```json
"test": "node --test tests/"
```

Add **Vitest** only when Tier 3 becomes necessary, since component tests do need a transform and a DOM. Do not add it preemptively.

Caveat worth knowing: the data files are TypeScript. Either run validation against the built output, or add `--experimental-strip-types` (Node 22+), or keep a tiny `tsx` dev dependency. The last is the pragmatic choice.

### 15.7 CI

One GitHub Actions job on PR: `npm run lint && npm test && npm run build`. Add the bundle-size assertion from plan item 3.6 to the same job, so the `Nav.tsx` class of regression (48 KB gzip on every route) fails loudly rather than shipping.

### 15.8 What not to do

- **Do not chase coverage.** A static content site does not benefit from testing render output of 642 pages.
- **Do not snapshot-test lesson MDX.** It changes constantly by design and snapshots would be pure noise.
- **Do not test third-party behaviour.** Mermaid, DOMPurify and PostHog are not yours to verify.
- **Do not write Tier 3 before Tiers 1 and 2.** Component tests are the most expensive and the least likely to catch what actually breaks here.

---

## 16. Open decisions blocking implementation

Eleven decisions that need an answer before the work they gate can start. Recommendations given, but these are calls for the owner, not defaults to assume.

### 16.1 `/api/groq`, delete or gate? — blocks Stage 0.1

Unauthenticated LLM proxy on your API key with **zero callers anywhere in the app**.

- **A. Delete it.** Nothing uses it, so nothing breaks.
- B. Keep and gate behind a real session.

**Recommend A.** If there is a planned use, B, but the route should not stay live while that plan is theoretical.

### 16.2 Cloud sync, fix or remove? — blocks Stage 0.2

Currently one global KV key for all users, exposing private notes, gated only by a secret published in the client bundle.

- **A. Disable the feature now, fix properly later.** Removes the leak today.
- B. Fix per-user keying immediately, which needs a user identity mechanism the site does not have.
- C. Leave it, accepting that synced data is public.

**Recommend A.** B is a real feature requiring auth, and this site has none by design. Note the UX audit found the feature is written for a developer anyway, so almost nobody is using it.

### 16.3 Migration for completions earned via the bypass — blocks Stage 1.1

Existing users hold completions and XP from the ungated track checkbox.

- A. Leave them, existing certificates stay unearned.
- B. Invalidate un-quizzed completions, correct but visibly resets people's progress.
- **C. Grandfather with a one-time notice.**

**Recommend C.** Honest about the change without punishing people for using an affordance the product offered.

**✅ DECIDED: C.** Owner confirmed. Implemented as part of Stage 1.1.

### 16.4 Track quiz pooled threshold — blocks Stage 1.5

80% of a pooled set currently marks *all* lessons complete, so a learner can score 0% on two lessons and still have both certified.

- **A. Keep 80% overall plus a per-lesson minimum** (say half of each lesson's questions).
- B. Mark complete only the lessons scored well on.
- C. Leave as is, and say plainly in the UI that the track quiz certifies the track, not each lesson.

**Recommend A.**

**✅ DECIDED: A.** Following the plan's recommendation (not separately re-asked; directly implied by 16.5's decision to align both thresholds). Implemented as part of Stage 1.5.

### 16.5 Per-lesson quiz threshold — blocks Stage 1.6

Per-lesson demands **100%**; the track quiz covering 21 lessons needs **80%**. The stricter gate is on the easier task.

- **A. Lower per-lesson to 80%**, consistent with the track.
- B. Raise the track quiz to 100%, harsh at 84 questions.
- C. Keep both, and justify the asymmetry in the UI.

**Recommend A.**

**✅ DECIDED: A, with a correction found during implementation.** Every lesson quiz has exactly 4 questions (verified: 642 lessons × 4 = 2,568, which also confirms 18.2/F10's finding that this document's "2,252 questions" figure elsewhere is wrong). With exactly 4 questions, scores only land on 0/25/50/75/100%, so a literal 80% threshold is mathematically identical to today's 100% (75% still fails either way) — it would not actually change behavior. **Owner confirmed the real threshold should be 75% (3 of 4 correct)**, which is what the "one missed question shouldn't force a retry" rationale actually requires. Implemented as part of Stage 1.6.

### 16.6 Certificate eligibility bar — blocks Stage 0.4

- A. 100% of lessons complete.
- **B. 100% of lessons plus a passed track quiz.**
- C. A lower bar, e.g. 90%, with the percentage printed on the certificate.

**Recommend B**, since it is the only option that makes the certificate mean something once Stage 1 closes the free paths.

**✅ DECIDED: B.** Owner confirmed. Stage 0.4 originally shipped as pct===100 only (option A); upgrading to B as part of Stage 1 now that Stage 1.1 closes the checkbox bypass and Stage 1.4 makes the track-quiz-pass flag reliable.

### 16.7 Quiz answer reveal timing — blocks Stage 1.2

The genuine tension in this document: instant per-question feedback is good pedagogy, and it is also what makes the gate defeatable in thirty seconds.

- **A. Reveal explanations after the whole quiz is submitted**, not per question.
- B. Keep per-question reveal, rely on option shuffling alone.
- C. Reveal per question only on a passing attempt.

**Recommend A**, combined with the shuffling in 1.3. The explanation still arrives, just after the attempt is locked in.

**✅ DECIDED: A.** Owner confirmed. Implemented as part of Stage 1.2.

### 16.8 Projects per lesson, 2 or 3? — blocks Stage 8

The runbook anatomy in 2.3 roughly tripled the depth of each project. At 2-3 per lesson the full library is ~1.5M words.

- **A. Two per lesson**, one `mini` and one `core`. ~1,284 projects.
- B. Three, accepting roughly 50% more authoring.

**Recommend A**, as argued in 2.3. Depth per project is the point; breadth is negotiable.

### 16.9 `analytics/consent-mode` rewrite — blocks Stage 1.3

Its "All of the above" option is the sole position-dependent option in all 8,341 audited, and it blocks quiz shuffling library-wide. Needs one option rewritten into a concrete statement. Trivial, but someone has to decide the replacement wording.

### 16.10 `/interview-prep` — orphaned route

Nothing links to it. Delete, or wire it into the nav? **Recommend wiring it in**, given it is directly relevant to the Meera persona (13.1) and to the `/portfolio` work in 9.3.

### 16.11 Rule renumbering at merge

This plan's proposed rule numbers collide with `AGENTS.md`, which is already at Rule 44. Confirm they renumber from **45** upward when merged. No real tradeoff, just needs to be agreed so two people do not renumber differently.

---

## 17. How projects get assigned to lessons

Until now this plan specified what a project *is* (2.3), what **mode** it takes (11.6), and how many per lesson (16.8). It never specified **which project a given lesson gets**. Left unspecified, authoring defaults to the intuitive rule "easy lesson gets an easy project", and the data says that rule is exactly backwards.

### 17.1 The finding: lesson difficulty does not predict lesson importance. It inverts it.

Measured across all 642 lessons, using track-reference count as the centrality proxy:

| Level | Count | Avg track references | In ≥1 track |
|---|---|---|---|
| **Beginner** | 127 (20%) | **0.98** | 59/127 (46%) |
| Intermediate | 315 (49%) | 0.46 | 111/315 (35%) |
| Advanced | 200 (31%) | 0.47 | 70/200 (35%) |

**Beginner lessons are referenced roughly twice as often as Intermediate or Advanced ones.**

And the hub list is unanimous. Every one of the twelve most-referenced lessons in the entire curriculum is **Beginner**:

| Tracks | Level | Lesson |
|---|---|---|
| 6 | Beginner | `analytics/analytics-101` |
| 5 | Beginner | `email/email-marketing-101` |
| 5 | Beginner | `analytics/utm-tagging` |
| 4 | Beginner | `seo/keyword-research` |
| 4 | Beginner | `seo/on-page-seo` |
| 4 | Beginner | `content/content-strategy` |
| 4 | Beginner | `copywriting/copywriting-101` |
| 4 | Beginner | `copywriting/headlines` |
| 4 | Beginner | `paid-ads/meta-ads` |
| 3 | Beginner | `fundamentals/what-is-marketing`, `value-proposition`, `marketing-math` |

**So mapping "Beginner → mini project" would give the most trivial treatment to the twelve lessons the entire curriculum rests on.** A learner who half-understands `utm-tagging` has a broken analytics foundation in five different tracks. That lesson deserves the deepest project in its category, and it is rated Beginner.

### 17.2 The model: two orthogonal axes

Difficulty and importance are different things, and the data above shows they are not merely independent but negatively correlated. So they drive different decisions.

| Axis | Source | Decides |
|---|---|---|
| **Cognitive demand** | lesson `level` | *What the project asks you to do* |
| **Investment weight** | centrality | *How much it asks of you* |

**Cognitive demand** (from `level`):

| Level | The project asks you to | Verb |
|---|---|---|
| Beginner | Apply the concept once, correctly, on something real | *do it* |
| Intermediate | Diagnose, compare, or decide between options | *judge it* |
| Advanced | Design, model, or defend a choice under constraints | *own it* |

**Investment weight** (from centrality):

| Band | Definition | Count |
|---|---|---|
| **Hub** | ≥3 track references, or a `-101`/`what-is-`/`how-` foundational slug | ~46 |
| **Connector** | 1-2 track references | 214 |
| **Leaf** | 0 track references | 402 |

Note the fallback matters: **402 of 642 lessons appear in no track at all**, so track-reference count alone leaves 63% unscored. The 20 foundational-pattern slugs plus position within the category's authored lesson order are the fallback signals. Both need validating during the Phase 1 pilot before being trusted at scale.

### 17.3 The assignment matrix

Each lesson gets two projects (16.8 decision A). Tier is read off this grid:

| | **Leaf** (0 tracks) | **Connector** (1-2) | **Hub** (3+ or foundational) |
|---|---|---|---|
| **Beginner** | mini + mini | mini + core | **core + core** |
| **Intermediate** | mini + core | mini + core | core + core |
| **Advanced** | mini + core | core + core | core + feeds a track big project |

The load-bearing cell is **Beginner × Hub → core + core**. That is the cell the naive rule gets wrong, and it covers `analytics-101`, `utm-tagging`, `keyword-research`, `copywriting-101` and the rest of the top twelve.

The inverse also matters: **Advanced × Leaf → mini + core**, not two heavy projects. An advanced lesson nobody's learning path depends on does not warrant eight hours, however sophisticated the topic.

### 17.4 Archetype selection by topic shape

Mode comes from the 11.6 decision tree. Archetype should come from **what shape of thing the lesson teaches**, not from rotating through the list.

| If the lesson teaches... | Archetype | Example |
|---|---|---|
| A process with known failure modes | `audit` | `technical-seo` |
| A choice between named options | `head-to-head` | `multivariate-vs-ab` |
| A framework that outputs an artefact | `build-the-asset` | `positioning-doc` |
| Numbers, thresholds, unit economics | `forecast` or `drill` | `marketing-math` |
| A famous worked example | `reverse-engineer` | `paid-ads-101` |
| A sequence where timing matters | `simulation` | `meta-ads` |
| An anti-pattern or bias | `teardown` (planted defects) | `sunk-cost-fallacy` |
| A judgement whose payoff is delayed | `calibration` | `second-order-thinking` |
| Anything with a live AI angle | `ai-critique` | `ai-content-writing` |

Rule 24 (draft) already forbids reusing an archetype within a lesson's own set. This table decides which one is *right*, rather than merely which is unused.

### 17.5 Track-level budget, and a problem it exposes

Sequencing within a track has to respect a total, not just per-lesson correctness.

Measured: **24 tracks, 363 lesson references, 15.1 lessons per track, and an advertised duration averaging 15.4 hours.**

Applying the matrix naively to an average track:

```
15 lessons × (1 mini ≈ 45min + 1 core ≈ 3h)   ≈ 56 hours
4 big projects × ~8h                          ≈ 32 hours
                                              ─────────
                                                88 hours
```

**Against an advertised 15.4 hours.** That is a **5.7× overrun**, and every track page states its duration prominently.

This is not an argument against the projects layer, it is an argument that the advertised number has to change. Three options:

1. **Split the display**: "15 hours reading · 60+ hours practice". Honest, and the practice number is a selling point rather than a deterrent.
2. **Mark projects optional** and keep the duration as reading time only, with a separate practice estimate per project.
3. **Cap project load per track**: at most N core projects per track, the rest mini.

**Recommend 1 plus 3.** Split the display so the number is honest, and cap the per-track budget so the ramp stays humane. A concrete cap: **no more than 6 core projects per track**, and never two consecutive lessons both carrying a core project. Under that cap an average track lands near 35 hours of practice, which is a real commitment stated honestly.

This also feeds the reorder work in section 4: **project weight should ramp across a track**, light early to build momentum, heavier once the learner has the pieces. Big-project milestones already sit every 3-5 lessons, so core projects should cluster just before them, not immediately after a milestone when the learner has just spent eight hours.

### 17.6 Assignment is derived, then reviewed. Never invented.

The authoring procedure, in order:

1. Compute **centrality band** from track references, with the foundational-slug fallback
2. Read **cognitive demand** from `level`
3. Look up **tier pair** in the 17.3 matrix
4. Derive **mode** from the 11.6 decision tree
5. Pick **archetype** from the 17.4 table by topic shape
6. Check the **track budget** in 17.5 and demote a core to mini if the cap is exceeded
7. **Only then** write the project

Steps 1-6 are mechanical and belong in the data-validation suite (section 15), which should assert that every project's tier matches what the matrix predicts, or carries an explicit documented override. An override is fine; an unexamined mismatch is not.

### 17.7 Draft rules

- **Tier is derived from centrality, not from `level`.** Beginner hub lessons get the deepest projects in their category. Mapping difficulty to effort inverts the curriculum's actual dependency structure.
- **Archetype is chosen by topic shape** from the 17.4 table, never rotated for variety alone. Rule 24 (draft) prevents repetition; this table decides correctness.
- **Every track has a project budget.** Maximum 6 core projects, never two consecutive, and the advertised duration must state reading and practice separately.
- **Any project whose tier departs from the 17.3 matrix must carry a written justification** in the data. Validation asserts the match and permits explicit overrides only.

---

## 18. Plan self-audit

Two agents audited this document itself, one for **internal contradictions and unverified claims**, one for **missing specifications**. Both had to cite line numbers. **62 findings, 8 of them P0.** Six factual errors have been fixed inline; the rest are recorded here.

This section exists because the document had reached 2,500 lines written incrementally, and later sections were silently invalidating earlier ones.

### 18.1 Fixed inline

| # | Error | Fix |
|---|---|---|
| **F2** | **Swiggy's figure was wrong by 8.3×.** The India table read "₹11,327 Cr raise, ~$11.3B", conflating the *raise* (₹11,327 Cr ≈ $1.36B) with the *valuation* ($11.3B). The two numbers coinciding at "11.3" made it look like a conversion. **Inside the section whose purpose is proving currency discipline**, and contradicting the plan's own Rule 6 example three lines away | Split into raise and valuation |
| **F1** | **The "no company in more than 4 projects" cap is arithmetically impossible.** 150 companies × 4 = 600, against a confirmed scope of ~1,284. Holding it needs **≥350 companies**. The cap and the 150 ceiling were both set when the target was ~600 projects and never revisited after scope doubled. Load-bearing twice: a shipped validation assertion *and* the sole mitigation for the "formulaic projects" risk | Flagged as an open decision; validation must not be written against 4 until resolved |
| **F16** | **Hub index sized for the wrong scope and underestimated 3×.** Measured: **786 KB raw / 173 KB gzip** at 1,284 projects, versus the claimed "~120 KB". That is **3.6× the `curriculum.ts` chunk section 14.5 calls a P0**, and it would violate draft Rule 44 in the hub, which is a client component | Redesigned: ship as a separately-fetched static JSON asset, not a JS import |
| **F15** | The disproven "3-4 MB to the client" premise survived in 5.1 after being retracted in 1.3 and 14.5.1 | Struck, replaced with the real constraint |
| **F4** | The rule-collision note was itself incomplete. The document also proposes **Rules 1-19** in section 7, colliding head-on with AGENTS.md 1-19, and those are the ones most cited by number | Inventory corrected |
| **F3** | "Rule 24" denotes three different things, and section 17 twice cites it for archetype uniqueness, which is actually section 7's Rule 4 | Covered by the F4 fix; every in-document rule citation needs re-resolving at merge |

### 18.2 P0, not yet fixed

**GAP 1, project completion is ungated.** `ProjectCard` is specified as a "completion toggle" worth 40 XP, feeding `/portfolio` and certificates, with no gate. **This is bug 0.1 rebuilt on a new surface.** Stage 1 exists entirely because "completion state is written from several places and only one checks anything", and projects add a fourth writer with zero checks. The graded modes already have graders sitting unused: `teardown` has an `answerKey` with partial credit, `drill` has tolerance bands, `simulation` has a scored debrief.

**Required:** completion for graded modes must come from the grader, not a tick. `build` and `diagnostic` are honestly self-assessed and therefore **must not feed certificates**. Add to section 16 as a blocking decision.

**GAP 2, no verification standard for project facts.** `CaseCompany.exit.source` is REQUIRED. `ConceptScenario.source` is REQUIRED, "no source, no ship". `Project` and `ProjectStep` have **no `source` field at all**. An author generates the tool navigation path, the `outputSample` numbers and the `healthy`/`unhealthy` thresholds from memory, and all of it passes validation because every assertion in 15.3 is structural.

Section 1.1 already proved this failure mode on companies and responded with a mandatory cited roster. The identical exposure on tool paths and thresholds is unaddressed. A hallucinated menu path is a broken project; **a hallucinated threshold is a learner making a wrong call at work**, which is the exact value the feature claims to add. `lastVerified` is author-set with no defined verifier and no staleness assertion.

**Required:** a `source` field on any step asserting a threshold or a tool path, mandatory before ship, plus a staleness assertion in the validation suite.

**F6, the mode distribution table double-counts ~56 lessons.** Section 11.7's percentages are stated as *after* converting failing builds to teardown. Section 0.2 applies those percentages to 642 and then annotates build with "~1 in 3 convert to teardown" and teardown with "plus the converted builds". Either build is 167 pre-conversion, or it is 167 post-conversion and both notes are false. The arithmetic sums to exactly 642, which makes it read as more settled than it is.

**F7, section 11's percentages are n≈34 presented as a survey of 454.** Four agents "audited 454 lessons, sampling 34 in depth". The distribution table is built on the 34 and then applied to 642, using the vocabulary of measurement throughout: "audited", "surveyed", "Measured", "Revised distribution". The one hedge appears once, in an opening sentence, and is never carried forward.

**Assessment: the document is not honest about this**, and it is conspicuously less honest here than elsewhere. Section 10.2 is literally titled "Measured, not assumed"; section 14.3 carries an explicit self-correction. Section 11 gets neither, despite a much longer inferential chain: 34 → 454 → 642. These numbers are load-bearing for the 642-lesson mode table, Rule 28, the decision to build the simulation engine for two categories only, the "~26% locked out" persona figure, and the deferral of `calibration`.

**Required:** relabel every figure in 11.7 and 0.2 as an **estimate from a 5% sample**, and re-derive after Phase 1 with real data.

**F10, three incompatible quiz counts.** "2,252 questions" appears six times. "8,341 option strings" implies 2,085. 642 lessons × 4 questions implies 2,568. The 8,341 figure is load-bearing for the claim that `analytics/consent-mode` is *the only* position-dependent option, which is what makes Rule 40's shuffle a one-line unblock. **If the option scan missed ~670 options, that result is not established.** Re-run the scan before relying on it.

**F11, the `Project` type never gained four of the seven modes.** It defines `steps?` (diagnostic + build) and `stages?` (simulation). `teardown` has a wholly different payload (`TeardownItem[]`) defined 600 lines later; `drill` needs parameterised scenarios; `calibration` needs stored predictions. The validation rule then says "simulation implies stages, other modes the reverse", forcing four modes into a shape that cannot hold them.

### 18.3 P1, recorded

| # | Finding |
|---|---|
| **GAP 3** | No versioning or migration for per-step progress. Content edits are certain (12.5 refreshes 45 lessons, 12.6 deletes one side of 8 slug pairs, 17.5 demotes core→mini), and saved progress would silently mis-map. The plan diagnosed this exact class for quizzes and did not apply the lesson |
| **GAP 4** | ~10 new interactive components with **no accessibility requirements**. The implementer's nearest precedent is `Quiz.tsx`, which section 14.4 documents as having P0 focus and announcement defects. Fixing 3 components while shipping 10 that repeat them is net-negative |
| **GAP 5** | New storage specified only as a filename. A key not registered in `SettingsClient`'s `EXPORT_KEYS` is **silently dropped from Export/Import and survives Reset**, reproducing bug 2.7 on day one in the same file being fixed |
| **GAP 6** | No instrumentation. Zero event definitions for a 1.5M-word commitment whose only quality signal is a review of two hand-picked artefacts. Compounded by S5: the effective CSP likely blocks PostHog in production already |
| **GAP 7** | Pilot failure has no rollback. Grep for "feature flag", "kill switch", "revert" returns nothing. The pilot ships to production with XP awarded, so a failed gate is permanent |
| **F9** | The "near 35 hours" track budget does not follow from its own cap. Recomputing with the document's own inputs: 6 core (18h) + 9 mini (6.75h) + 4 big (32h) = **56.75h**. It also contradicts the "60+ hours practice" display string recommended in the same section. Both per-project durations are invented constants appearing nowhere else |
| **F14** | `no-project` is defined two incompatible ways, and the near-term count is **~64, not ~19**, because the ~45 `calibration` lessons are deferred to Phase 3 and have nothing in the interim |
| **F18** | Personas are framed as "derived from evidence, not invented". The artefacts cited exist; the five named individuals, their budgets and the 30-cell coverage matrix are asserted. Three shipped rules rest on this, including "Tom is the acceptance test" |
| **F19** | Section 1.1's "half the obvious picks are wrong" is **n=4**, described as "evidence-backed, not opinion". The conclusion is probably right; the framing oversells a sample of four |
| **F13** | The pilot assigns `fundamentals/marketing-math` to `diagnostic` **and** `drill` in the same table, and 11.4 says diagnostic is structurally impossible for that lesson class |
| **F12** | Stage numbers collide with section numbers. "0.1", "0.2", "2.4", "5.1" and "9.3" each denote two different things, and the document cross-references both namespaces |

### 18.4 P2 and P3, summarised

Stale scope survivals: "2-3 projects per lesson" in 3 places after the decision to ship 2; "240 lesson `.mdx` files" in 3 places after scope moved to 642; "8 archetypes" against 9; "11 filters" against 15 listed; "ten stages" against 11; "sections 1-12 are reference material" when the document runs to 17; the risk register still sized at 550k words against 1.5M.

Arithmetic: wave columns sum to 661 against a stated 642; centrality bands sum to 662 because 20 foundational slugs are counted in both Hub and Leaf; Phase 2 says 222/~444 while Stage 8.3 says 240/~480; the ~90 big projects are excluded from the "~1,284 total".

Cross-references: five pointers to "2.3" that should be 2.4, three to "11.6" that should be 2.3c. The `markComplete()` call-site count is given as both two and three in the same document, and the grep assertion in 15.4 is specified against it.

Also flagged: ad-budget minimums stated five ways, all attributed to "the lesson"; the "Most completed" badge has no data source and re-commits the fake-"Popular" dishonesty Stage 5.5 removes; `no-project` lessons would render a TOC link to a nonexistent anchor; simulation stage graphs have no reachability or termination validation; specimen provenance is unspecified so a real client export could land in a public directory; multilingual is absent for projects despite Rule 15 and persona P1.

### 18.5 What the auditors found consistent

Worth recording, since it says which parts to trust:

- **Section 17.1's level data is the most rigorously constructed in the document.** 127+315+200 = 642; the in-track counts reproduce the independently derived 363 track references exactly.
- **Section 10.2's audit numbers are internally airtight**, every derived figure checks out, and it states its method.
- **Section 14.3's self-correction** (655 vs 642, "the magnitudes were wrong by 49") is named as the model the rest of the document should follow.
- **Bundle measurements agree to the byte** between Stage 3 and section 14.5.
- **Section 12 is the best-disciplined section**, because it labels its own limits and records false positives to prevent re-derivation.

### 18.6 The pattern

Three failure modes recur, and all three are the same mistake:

1. **Estimates written in the vocabulary of measurement.** F7 and F19 both assert conclusions from small samples using words like "found" and "evidence-backed".
2. **Numbers set early and never revisited after scope changed.** F1, F16, F22, F25, F26 all date from when the target was ~600 projects.
3. **Lessons diagnosed and then not applied to new work.** GAP 1 rebuilds bug 0.1; GAP 3 repeats the positional-progress bug the plan documents for quizzes; GAP 4 would reproduce the `Quiz.tsx` a11y defects in ten new components.

The third is the most serious, because the document's whole value is that it diagnosed those things.

### 18.7 Required before Phase 1

- Resolve GAP 1 and GAP 2. Both are P0 and both would ship a defect the plan exists to prevent.
- Relabel section 11.7 and 0.2 as sample-derived estimates.
- Re-run the 8,341-option scan (F10) before relying on the one-blocker result.
- Extend the `Project` type to cover all seven modes (F11).
- Resolve the company-quota decision (F1).
- Add rollback for the pilot (GAP 7).
- Reconcile the stage/section numbering collision (F12) before anyone follows a cross-reference.
