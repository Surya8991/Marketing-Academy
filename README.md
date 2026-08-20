# Marketing Academy

A free, structured marketing education site, from absolute beginner to advanced practitioner across every major discipline.

**Live:** [marketing-academy-roan.vercel.app](https://marketing-academy-roan.vercel.app)
**Repo:** [github.com/Surya8991/Marketing-Academy](https://github.com/Surya8991/Marketing-Academy)
**Dev:** `npm run dev` then open http://localhost:3000

---

## What This Is

642 lessons across 21 disciplines. No paywalls, no drip sequences, no email required. Every lesson includes real research, company examples with specific numbers, Mermaid diagrams, interview Q&A, and curated free resources in English, Hindi, Tamil, and Telugu.

| # | Category | Slug | MDX Files |
|---|---|---|---|
| 1 | Marketing Fundamentals | `fundamentals` | 40 |
| 2 | SEO | `seo` | 38 |
| 3 | Paid Ads | `paid-ads` | 33 |
| 4 | Growth Marketing | `growth` | 30 |
| 5 | Social Media | `social` | 31 |
| 6 | Content Marketing | `content` | 29 |
| 7 | Email & Lifecycle | `email` | 33 |
| 8 | Analytics & Attribution | `analytics` | 36 |
| 9 | Marketing Tools | `tools` | 39 |
| 10 | Human Psychology | `psychology` | 29 |
| 11 | Copywriting | `copywriting` | 28 |
| 12 | Conversion Rate Optimization | `cro` | 28 |
| 13 | Brand Strategy | `brand-strategy` | 28 |
| 14 | Product Marketing | `product-marketing` | 28 |
| 15 | AI in Marketing | `ai-marketing` | 36 |
| 16 | Mental Models | `mental-models` | 29 |
| 17 | PR & Communications | `pr-communications` | 28 |
| 18 | Events & Experiential Marketing | `events-experiential` | 28 |
| 19 | Affiliate & Partner Marketing | `affiliate-marketing` | 28 |
| 20 | Marketing Leadership & Career | `marketing-leadership` | 28 |
| 21 | Legal & Compliance for Marketers | `legal-compliance` | 28 |
| | **TOTAL** | | **642** |

---

## Features

**Learning**
- **Lesson reader**, Left-side table of contents, reading progress bar, reading time estimate, prev/next navigation, practice projects (collapsed behind a one-line summary by default)
- **Related lessons**, "You might also like" section at the bottom of every lesson
- **Lesson quizzes**, 5 questions at the bottom of 642 lessons (Session 85, Stage 10.1); quiz must be passed (80%, 4 of 5) to unlock Mark Complete. Questions and options are Fisher-Yates shuffled on every attempt. Answers revealed only after full submission
- **Progress tracking**, Mark lessons complete, per-category progress bar, bookmarks (all localStorage)
- **Learning tracks**, 24 curated paths: B2B Marketer, E-commerce Growth, Solo Founder, AI-First Marketer, Content Creator, Social Media Manager, Data-Driven Marketer, Freelancer & Agency, Marketing Mental Models, Technical SEO Mastery, AI Search Optimization, Content Strategy Mastery, On-Page SEO Mastery, Off-Page SEO Mastery, Paid Ads Mastery, Email & Lifecycle Mastery, CRO & Conversion Mastery, Analytics & Measurement Mastery, Copywriting Mastery, Brand Strategy Mastery, Psychology of Marketing, PR & Communications Mastery, Growth Marketing Mastery, Product Marketing Mastery
- **Progress certificates**, Printable completion certificate per track at `/certificates/[slug]` (requires 100% lesson completion + track quiz pass)
- **XP + Streak system**, Earn XP for completing lessons (30), passing quizzes (20), bookmarking (5). Daily streak. 7 levels (Marketing Newcomer → Certified Polymath). Live badge in nav.
- **Achievements**, 12 unlockable badges (grouped into Getting Started/Streaks/Practice Projects/Milestones since Stage 11) with toast notification on unlock. Full gallery at `/achievements`
- **Skill Map**, `/skill-map`: category cards grouped by discipline (Strategy/Channels/Growth & Data/Outreach/Career & Legal, same taxonomy as the nav's Topics dropdown, since Stage 11), sorted by % complete within each group, with animated progress bars
- **Onboarding**, First-visit goal selector: pick a goal (including "totally new to marketing"), get routed to the right learning track. Suppressed on lesson pages so direct-link visitors aren't interrupted

**Discovery**
- **Command Palette**, Cmd/Ctrl+K fuzzy search across all 642 lessons, 24 learning tracks, 158 glossary terms, 157 tools, and nav pages
- **Search**, Client-side fuzzy search (Fuse.js) across lessons and tracks, with category and level filter chips (chips apply to lessons only, a track spans multiple categories/levels by design)
- **Glossary**, 158 marketing terms with A-Z index and individual term pages at `/glossary`
- **Tools directory**, 157 marketing tools across 11 categories with search, category, and pricing filters at `/tools`
- **Cheat sheets**, Printable per-category quick reference cards at `/cheat-sheets/[category]`

**Interview Prep**
- **Interview prep hub**, `/interview-prep` aggregates all categories with sample Q&A
- **Interview questions (2026)**, `/interview-questions`: 151 Q&As across 16 disciplines with scenario-based questions, updated for 2026. Covers behavioral, SEO, paid ads, content, analytics, email, growth, AI marketing, social, copywriting, CRO, brand strategy, product marketing, psychology, tools, and general/behavioral interview skills
- **SEO landing pages**, `/interview-questions` and `/digital-marketing-cheat-sheet` for organic search

**Sharing**
- **Share buttons**, LinkedIn and Twitter/X share on every lesson
- **Bookmarks**, Save lessons to `/bookmarks` (localStorage)
- **RSS feed**, `/feed.xml` with auto-discovery `<link>` in layout
- **OG images**, Dynamic per-lesson Open Graph images via edge function at `/api/og`

**Technical**
- **Dark mode**, Manual toggle (Sun/Moon) with localStorage persistence and no flash on load
- **Reduced motion**, Respects OS-level `prefers-reduced-motion`, neutralizes animations/transitions/smooth-scroll site-wide
- **PWA**, Installable on mobile: `public/manifest.json` + `public/sw.js` service worker
- **Multilingual resources**, Every lesson links to Hindi (WsCube Tech), Tamil, and Telugu YouTube channels
- **Newsletter signup**, Footer form with `/api/newsletter` endpoint (connect to your email service)
- **Sitemap**, Auto-generated, only includes lessons that have MDX files

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 + CSS variables for theming |
| Content | MDX via `@next/mdx`, lessons are `.mdx` files in `src/content/` |
| Search | Fuse.js (client-side fuzzy search) |
| Diagrams | Mermaid (client-side, dark-mode aware, fullscreen button) |
| Icons | Lucide React v1.18 |
| Deploy | Vercel (auto-deploy on push to main) |

---

## Development

```bash
# Dev server (node_modules already installed, skip npm install)
npm run dev

# Type check
npx tsc --noEmit

# Tests (65 tests: data validation, projects data, quiz shuffle property, integrity regression)
npm test

# Build
npm run build
```

---

## Content Structure

Each lesson is an MDX file at `src/content/[category-slug]/[lesson-slug].mdx`.

Lessons use `export const lessonMeta` (not YAML frontmatter) and have access to five global components without any imports:

```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  summary: "One sentence. Use single quotes for any inner quotes.",
};

<Callout type="info">Works without importing.</Callout>
<Mermaid chart={`graph TD; A-->B`} />
<ResourceList resources={[...]} />
<Quiz questions={[...]} category="seo" slug="keyword-research" />
<DiagramBlock type="funnel" title="AIDA Model" items={["Awareness","Interest","Desire","Action"]} />
```

The full lesson registry is in `src/lib/curriculum.ts`. To add a lesson:
1. Create the `.mdx` file in `src/content/[category]/`
2. Add an entry to the category's `lessons` array in `curriculum.ts`

---

## Key Files

| File | Purpose |
|---|---|
| `src/lib/curriculum.ts` | Single source of truth, all lesson slugs, titles, levels |
| `src/lib/tracks.ts` | 24 learning track definitions |
| `src/lib/glossary.ts` | 158 marketing term definitions |
| `src/lib/quizzes.ts` | Quiz questions (5 per lesson since Stage 10.1, all 642 lessons covered) |
| `src/lib/tools-directory.ts` | 157 marketing tools with category/pricing data |
| `PROJECTS_PLAN.md` | **High-priority roadmap.** Stages 0-8 (all 24 tracks' practice projects), 9.1/9.4, 10 (quiz expansion to 5 questions/lesson), and 11 (Skill Map/Achievements/Resources UX pass) are all complete as of Session 85. **Stage 9.3** (non-track lesson project authoring) is queued to run LAST, narrowed to 8 categories by owner directive: `fundamentals`, `seo`, `paid-ads`, `growth`, `social`, `product-marketing`, `ai-marketing`, `tools`. Use `PROJECTS_AUTHORING_GUIDE.md` to execute |
| `src/components/InAction.tsx` | Global MDX component rendering one cited "concept scenario" inline after a lesson heading (PROJECTS_PLAN.md section 10 / Stage 8.4). Embedded directly in lesson MDX, not build-time-injected — see AGENTS.md Rule 54 |
| `PROJECTS_AUTHORING_GUIDE.md` | Operational playbook for authoring a new track's Stage 8.3/8.4 batch: fill-in agent prompt template + condensed reference pack + the scripts below, in order. Next two tracks are pre-scoped in PROJECTS_PLAN.md 8.3b |
| `scripts/get-track-batch-info.mjs` | Given a track slug, lists which lessons still need projects and their tier (reads `tracks.ts` + `projects-assignment.ts`), pre-split into batches |
| `scripts/merge-projects-batch.mjs` | Safely merges subagents' scratch project output into `src/lib/projects/{category}.ts` (refuses duplicate keys, verifies key count) |
| `scripts/audit-projects.mjs` | Structural check on a category's projects: real `lessonAnchor`s, real `companyId`s, real `toolName`s, runbook completeness |
| `src/lib/projects-assignment.ts` | **Generated**, PROJECTS_PLAN.md 17's centrality band + tier-pair computation for all 642 lessons — regenerate with `node --import tsx scripts/compute-project-assignment.mjs` |
| `src/components/PageMasthead.tsx` | Shared "journal masthead" info-strip component used at the top of Home/Learn/Tracks/Projects/Tools/About |
| `src/lib/classificationCodes.ts` | 2-4 letter discipline codes (SEO/ADS/PSY/AI/...) used as specimen-card eyebrows on redesigned pages |
| `src/components/RelatedConcepts.tsx` | Renders `lessonMeta.relatedConcepts` (written into ~65 lessons' MDX, unused until Session 75) as cards on the lesson page, sourced from real `curriculum.ts` data |
| `.github/workflows/ci.yml` | GitHub Actions CI: lint + test + build on push/PR to main |
| `src/lib/projects/types.ts` | Practice-projects type system: `Project`, `ProjectStep`, `SimulationStage`, `TeardownItem`, `CaseCompany`, 6 modes + no-project verdict, 9 archetypes |
| `src/lib/case-companies.ts` | 77 verified case companies with cited exits, backdrop for practice projects |
| `src/lib/projects/*.ts` | Per-category practice project modules (dynamically imported, never one shared file — AGENTS.md Rule 37) |
| `src/lib/projects-index.ts` | **Generated** slim card index for the `/projects` hub — regenerate with `node --import tsx scripts/build-projects-index.mjs` |
| `src/lib/projects-progress.ts` | Practice-project completion + XP lib (localStorage, mirrors progress.ts/engagement.ts patterns) |
| `src/lib/projects/lookup.ts` | Server-safe `getProjectByCategoryAndId()` — dynamically imports one category module and finds a project by its `id`, used by the dedicated `/projects/[category]/[slug]` page |
| `src/components/DecisionBox.tsx` | Renders a `Project.decision` multiple-choice checkpoint on the project detail page, answer hidden until picked (same reveal timing as `Quiz.tsx`, AGENTS.md Rule 25) — see Rules 63-65 for the full "Learn vs Do" content architecture (9 new optional `Project` fields). `seo.ts` fully migrated (60/60) as of Session 81; the other 8 category files (53 projects) not yet migrated |
| `src/lib/bookmarks.ts` | Shared bookmark storage (BOOKMARK_KEY, getBookmarks, saveBookmarks) |
| `src/lib/progress.ts` | Lesson completion helpers (COMPLETED_KEY exported, getCompleted, markComplete) |
| `src/lib/engagement.ts` | XP/streak system (addXP, getEngagement, getCurrentLevel, ENGAGEMENT_EVENT) |
| `src/lib/achievements.ts` | 12 declarative badges (ACHIEVEMENTS array, checkAchievements) — includes `first-project`/`ten-projects` (Session 85) |
| `src/components/PortfolioClient.tsx` | Session 85 — `/portfolio` page's interactive body: completed projects as evidence, JSON export |
| `src/lib/commandIndex.ts` | Fuse.js index builder for Cmd+K palette — lessons, tracks, glossary, tools, nav (tracks added Session 85) |
| `src/lib/topic-groups.ts` | Session 85 — shared `TOPIC_GROUPS` discipline taxonomy (Strategy/Channels/Growth & Data/Outreach/Career & Legal), used by both Nav.tsx's Topics dropdown and `/skill-map` so they can't drift apart |
| `src/lib/events.ts` | Shared CustomEvent name constants (COMMAND_PALETTE_EVENT) |
| `mdx-components.tsx` | Global MDX component registry at project root: Callout, Mermaid, ResourceList, Quiz, DiagramBlock |
| `src/app/globals.css` | Tailwind v4 + CSS variable design system. Colors are the original white/near-black/indigo palette (deliberately unchanged in the 2026-08-12 redesign); `--font-display`/`--font-ui-sans`/`--font-data` (Fraunces/Public Sans/IBM Plex Mono, registered in layout.tsx) are the new type system used on Home/Learn/Tracks/Projects/Tools/About — lesson prose stays on Geist Sans |
| `src/components/ThemeToggle.tsx` | Dark/light/system toggle with no-flash inline script |
| `src/app/api/og/route.tsx` | Edge function for dynamic OG images |
| `src/app/feed.xml/route.ts` | RSS feed |
| `public/manifest.json` | PWA Web App Manifest |
| `public/sw.js` | Service worker: network-first for HTML, cache-first for hashed static assets |
| `vercel.json` | Security headers (CSP, HSTS, X-Frame-Options, etc.) |
| `src/lib/storage-utils.ts` | Safe `localStorage` wrapper with try/catch, corrupt-value backup, and `StorageWarning` trigger |
| `src/components/StorageWarning.tsx` | Client banner shown when localStorage is blocked (corporate/Android) |
| `tests/*.test.ts` | 65 tests (Node.js built-in runner + tsx): data validation, **projects data (Rule 57, the gate for project referential integrity)**, quiz shuffle, integrity regression |
| `AGENTS.md` | 77 non-negotiable build rules for AI agents (incl. Rule 23: pre-push doc checklist) |
| `src/lib/notes.ts` | Shared note storage (NOTE_KEY_PREFIX, getNoteKey, getNote, saveNote) |
| `src/auth.ts` | NextAuth v5 config (Google sign-in via `DrizzleAdapter`), `requireUser()`/`requireAdmin()`/`isAdminUser()` |
| `src/server/db/` | `schema.ts` (users/accounts/sessions/verificationTokens), `client.ts`, Drizzle `migrations/` |
| `src/app/api/sync/route.ts` | Per-user progress sync, gated by `requireUser()`'s database session. Replaces the deleted `/api/sync-proxy` shared-secret design (AGENTS.md Rule 26/44, Rule 77) |
| `src/lib/sync-client.ts` | Client auto-sync: `mergeSnapshots`/`pullAndMerge`/`pushNow`/`startAutoSync`, debounce-pushes on `PROGRESS_CHANGED_EVENT` |
| `src/lib/progress-snapshot.ts` | Single source of truth for "the user's progress data" (`EXPORT_KEYS`/`ALLOWED_KEY_PREFIXES`/`collectAllKeys`/`restoreAllKeys`), shared by `/settings` and sync |
| `PROJECT_LOG.md` | Full session history, gotchas, file inventory, pending tasks |

---

## Routes

| Route | What |
|---|---|
| `/` | Homepage: hero, category grid, 24 learning tracks, featured lessons |
| `/learn` | All lessons browsable by category |
| `/learn/[category]` | Category page: Beginner/Intermediate/Advanced grouping + progress |
| `/learn/[category]/[lesson]` | Lesson reader (docs-style, Session 75): left scroll-spy ToC, Quiz/Projects/Notes as an accordion group, Related Concepts cards, prev/next, bottom action bar (Mark Complete/Bookmark/Share). Every outbound link to another lesson (prev/next, Related Concepts, Related Lessons, Continue CTA) opens in a new tab (Session 78) |
| `/search` | Fuzzy search across lessons and tracks, with category + level filters (lessons only) |
| `/tracks` | 24 learning tracks overview |
| `/tracks/[slug]` | Track detail with ordered lesson list |
| `/glossary` | 158-term A-Z marketing glossary |
| `/glossary/[slug]` | Individual term page |
| `/bookmarks` | Saved lessons (localStorage) |
| `/tools` | 157 marketing tools with search + category + pricing filters |
| `/cheat-sheets` | Printable cheat sheet index (21 categories) |
| `/cheat-sheets/[category]` | Printable per-category cheat sheet |
| `/interview-prep` | Interview prep hub with category Q&A links |
| `/interview-questions` | SEO landing: digital marketing interview Q&A |
| `/digital-marketing-cheat-sheet` | SEO landing: key metrics, frameworks, glossary |
| `/skill-map` | Category cards grouped by discipline, sorted by % complete within each group, progress overview (Stage 11) |
| `/achievements` | XP level, streak, and 12 unlockable achievement badges |
| `/portfolio` | Session 85, Stage 9.1 — your completed practice projects as portfolio-ready interview evidence: company, tier, archetype, concepts, "Export as JSON," cross-linked with `/interview-prep`. `noindex` (personal, per-browser data) |
| `/settings` | Export / import / reset all learning progress as JSON |
| `/login` | Google sign-in (only rendered when auth env vars are configured) |
| `/account` | Signed-in profile: session list, delete account |
| `/about` | About page: mission, builder profile, stats, tech stack, links |
| `/certificates` | Track completion certificate index |
| `/certificates/[slug]` | Printable track completion certificate |
| `/projects` | Practice projects hub: search, tier/archetype/mode/category filters (803 projects across the library — Stage 8.3a is fully complete, all 24 tracks, plus Stage 9.3's fully-completed 8-category non-track scope: `fundamentals`, `seo`, `paid-ads`, `growth`, `social`, `product-marketing`, `ai-marketing`, `tools`, plus 8/28 `events-experiential` lessons left out of scope). "View details" opens the project's own dedicated page in a new tab (Session 78, replaces the old slide-over drawer) |
| `/projects/[category]/[slug]` | Dedicated single-project page (Session 78) — the full project (steps/stages/teardown items, tool stack, success criteria) always expanded, no inline toggle. Statically generated for all projects. Opened in a new tab from both the lesson page's Project List and the `/projects` hub, so a project always opens in its own page + tab regardless of entry point |
| `/feed.xml` | RSS feed |
| `/sitemap.xml` | Auto-generated sitemap (lessons with MDX only) |
| `/api/og` | Dynamic OG image endpoint |
| `/api/newsletter` | Newsletter signup (connect to your email service) |
| `/api/auth/[...nextauth]` | NextAuth v5 handler (Google sign-in) |
| `/api/sync` | Per-user progress push/pull, requires a signed-in session |
| `/api/account/sessions` | List/revoke the signed-in user's active sessions |
| `/api/account/delete` | Delete the signed-in user's account and data |

---

## Deploy

Auto-deploys to Vercel on every push to `main`. No environment variables are required for the core site.

**Accounts + sync (all optional)** — the sign-in button is hidden (`Nav` receives `authConfigured` from the root layout, matching `/login`) and `/api/sync` returns `401 Unauthorized` for anyone not signed in, until every one of these is set (see `.env.example`):

| Var | Purpose |
|---|---|
| `AUTH_SECRET` | NextAuth session encryption (`openssl rand -base64 32`) |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth credentials for sign-in |
| `DATABASE_URL` | SQLite file path for local dev, or a `libsql://...` Turso URL in production |
| `TURSO_AUTH_TOKEN` | Auth token for a remote Turso database (unused for local SQLite) |
| `ADMIN_EMAILS` | Comma-separated addresses auto-promoted to `role: "admin"` on sign-in (bootstrap/failsafe, mirrors the Email-Automator sister project's pattern — AGENTS.md Rule 77) |

To connect newsletter to an email service, edit `src/app/api/newsletter/route.ts`, it has a `// TODO` comment marking the integration point.
