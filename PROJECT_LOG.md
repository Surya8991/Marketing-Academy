# Marketing Academy — Master Project Log

> **ACCOUNT-SWITCH PROOF. Read every section before touching any code.**
> Last audited: 2026-06-14 (Session 5). Every ✅ item has been verified as correct in this session.

---

## ⚡ 60-Second Resume (new session starts here)

```
1. cd D:\Coding\marketing-academy
2. Count MDX files: (Get-ChildItem src/content -Recurse -Filter *.mdx).Count   [PowerShell]
3. Find first 🔴 row in the "MDX Progress" table below
4. Launch the workflow to write missing lessons (see "Order of Execution" section)
```

**Do NOT:**
- Run `npm install` again — everything is installed
- Recreate any ✅ file below — it already exists and is correct
- Use Tailwind `dark:` classes — use CSS variables for dark mode (see Gotchas)
- Use YAML frontmatter in MDX — use `export const lessonMeta = {...}` instead
- Import `useMDXComponents` from `@/mdx-components` — that path does NOT exist (`@/*` maps to `./src/*` but mdx-components.tsx is at the PROJECT ROOT, not in src/)
- Write `<ComponentName! />` in JSX — use `let x!: Type` declaration instead (definite assignment assertion)
- Put unescaped double quotes inside lessonMeta strings — use single quotes or `\"escaped\"` (broke first Vercel build)

---

## 🗂 ORDER OF EXECUTION — Complete Project Roadmap

> Read this top-to-bottom before doing anything. Every phase must complete before the next starts.
> Status: **Phase 1 ✅ done → Phase 2 ✅ done → Phase 3 in progress (49/165 lessons)**

---

### PHASE 1 — Infrastructure ✅ COMPLETE
*All code, pages, and components. Nothing here needs to be touched again unless there's a bug.*

| Step | What | File | Status |
|---|---|---|---|
| 1.1 | Scaffold Next.js 16 project | `npx create-next-app@latest` | ✅ |
| 1.2 | Install all dependencies | MDX, Mermaid, Tailwind typography, fuse.js, lucide-react, clsx, tailwind-merge | ✅ |
| 1.3 | Configure MDX | `next.config.ts` — remark-gfm, rehype-slug, rehype-autolink-headings | ✅ |
| 1.4 | Build CSS variable system | `src/app/globals.css` — Tailwind v4 + full light/dark token set | ✅ |
| 1.5 | Register global MDX components | `mdx-components.tsx` at PROJECT ROOT — Mermaid, Callout, ResourceList | ✅ |
| 1.6 | Build lesson registry | `src/lib/curriculum.ts` — 165 lessons, 10 categories, all nav helpers | ✅ |
| 1.7 | Build utility libs | `src/lib/utils.ts` (cn()), `src/lib/progress.ts` (localStorage) | ✅ |
| 1.8 | Build all components | Nav, Mermaid, Callout, ResourceList, LevelBadge, MarkComplete, CategoryProgress | ✅ |
| 1.9 | Build all pages | homepage, /learn, /learn/[category], /learn/[category]/[lesson], /search | ✅ |
| 1.10 | Write BACKLOG.md | 50+ advanced/emerging topics for future | ✅ |
| 1.11 | Write README.md | Full project docs with lesson counts | ✅ |

---

### PHASE 2 — GitHub Push ✅ COMPLETE (2026-06-14)

| Step | What | Command | Status |
|---|---|---|---|
| 2.1 | `git init` | — | ✅ |
| 2.2 | `git remote add origin` | `https://github.com/Surya8991/Marketing-Academy.git` | ✅ |
| 2.3 | First commit (86 files) | `git add . && git commit -m "Initial commit"` | ✅ |
| 2.4 | Push to main | `git branch -M main && git push -u origin main` | ✅ |
| 2.5 | Add Vercel files | not-found.tsx, robots.ts, sitemap.ts, .gitattributes | ✅ |
| 2.6 | Pre-deploy fixes | mdx-components.tsx signature, sitemap parallelized, engines in package.json | ✅ |
| 2.7 | Fix Vercel build error | positioning.mdx unescaped quotes in summary → `SyntaxError` | ✅ |

---

### PHASE 3 — MDX Content 🔴 IN PROGRESS (49 / 165 lessons)
*Write every MDX file. Each lesson MUST include real research (WebSearch + WebFetch) before writing.*

**Research protocol per lesson (mandatory):**
1. Run 2–3 WebSearch queries — always include "2024" or "2025" in at least one query
2. WebFetch the best source URL
3. Write lesson with real stats, citations, current examples

**MDX file format (every lesson must follow this exactly):**
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  summary: "One-line description for cards and search.",
};

# Lesson Title

Intro paragraph...

## Section Heading

Content with real data and examples.

<Callout type="info">Key insight here.</Callout>

## Key Takeaways

- Point 1
- Point 2

<ResourceList resources={[
  { title: "Name", url: "https://...", type: "article", free: true },
]} />
```

**Content execution order (do categories in this sequence):**

| Order | Category | Slug | Total | Done | Remaining |
|---|---|---|---|---|---|
| 3.1 | Marketing Fundamentals | `fundamentals` | 16 | 13 ✅ | flywheel, category-design, pricing-psychology |
| 3.2 | Paid Ads | `paid-ads` | 18 | 14 ✅ | apple-search-ads, ctv-ott-ads, reddit-ads, retail-media |
| 3.3 | Growth Marketing | `growth` | 16 | 2 | 14 missing — see full list below |
| 3.4 | Social Media | `social` | 18 | 0 | ALL 18 |
| 3.5 | Content Marketing | `content` | 15 | 0 | ALL 15 |
| 3.6 | Email & Lifecycle | `email` | 14 | 0 | ALL 14 |
| 3.7 | Analytics | `analytics` | 16 | 0 | ALL 16 |
| 3.8 | Marketing Tools | `tools` | 15 | 0 | ALL 15 |
| 3.9 | AI in Marketing | `ai-marketing` | 17 | 0 | ALL 17 |
| 3.10 | SEO | `seo` | 20 | **20 ✅** | COMPLETE |

*SEO done. Do 3.1 → 3.2 → 3.3 → 3.4 → ... → 3.9 in order.*

**How to launch the content workflow (use this exact approach):**

Run a Workflow that fans out all missing lessons in parallel. Each agent:
1. Receives: category slug, lesson slug, lesson title, level, summary
2. Runs WebSearch × 2–3 queries
3. WebFetches top result
4. Writes the full MDX file to `src/content/{category}/{slug}.mdx`

After the workflow completes: run `(Get-ChildItem src/content -Recurse -Filter *.mdx).Count` — should match 165.

---

### PHASE 4 — Type Check & Build 🔴 NOT STARTED
*Run after ALL 165 MDX files are written.*

| Step | Command | Expected result | Status |
|---|---|---|---|
| 4.1 | `npx tsc --noEmit` | 0 errors | 🔴 |
| 4.2 | `npm run build` | Compiled successfully | 🔴 |

**If build fails on missing MDX:** The `catch { notFound() }` in the lesson reader handles this — missing MDX pages become 404s, not build failures. If TypeScript errors appear, check the Gotchas section.

---

### PHASE 5 — Deploy to Vercel 🔴 NOT STARTED
*Run after Phase 4 passes clean.*

**Vercel files already added (✅ committed):**

| File | Purpose |
|---|---|
| `src/app/not-found.tsx` | Custom 404 page — shown when a lesson MDX doesn't exist yet |
| `src/app/robots.ts` | Generates `/robots.txt` — allows all crawlers, points to sitemap |
| `src/app/sitemap.ts` | Generates `/sitemap.xml` — only includes lessons with actual MDX files |
| `.gitattributes` | Forces LF line endings on commit — eliminates CRLF warnings |

**Deploy steps:**

| Step | What | How | Status |
|---|---|---|---|
| 5.1 | Connect repo to Vercel | vercel.com → New Project → Import `Surya8991/Marketing-Academy` | 🔴 |
| 5.2 | Verify auto-detected settings | Framework: Next.js, Build: `npm run build`, Output: `.next` — no changes needed | 🔴 |
| 5.3 | No env vars needed | Everything is static — just click Deploy | 🔴 |
| 5.4 | Verify live URL | Check `https://marketing-academy.vercel.app` (or Vercel-assigned URL) | 🔴 |
| 5.5 | Update `robots.ts` + `sitemap.ts` | Replace `marketing-academy.vercel.app` with actual Vercel URL if different | 🔴 |
| 5.6 | Set custom domain (optional) | Vercel Dashboard → Domains | 🔴 |
| 5.7 | Update README live URL | Replace placeholder with real URL | 🔴 |

**Every subsequent push auto-deploys:**
```bash
git add src/content/...      # stage new MDX files
git commit -m "add: growth + social lessons"
git push                     # Vercel picks it up automatically
```

**What happens on Vercel build with missing MDX:**
- `generateStaticParams` returns all 165 lesson paths
- For lessons without MDX, `catch { notFound() }` fires → renders `not-found.tsx`
- Build does NOT fail — missing lessons become polished 404 pages
- Sitemap auto-excludes them (only includes pages with real MDX files)

---

### PHASE 6 — Polish (after live) 🔴 FUTURE
*Nice-to-haves. Don't start until all 165 lessons are live.*

| Step | What | Notes |
|---|---|---|
| 6.1 | Dark mode manual toggle | Currently auto via OS — add a sun/moon button in Nav |
| 6.2 | OG images | `/api/og` with `@vercel/og` — per-lesson social preview cards |
| 6.3 | Sitemap | `src/app/sitemap.ts` — auto-generates XML sitemap from curriculum |
| 6.4 | robots.txt | `src/app/robots.ts` — allow all, point to sitemap |
| 6.5 | Search improvements | Add category filter chips above results |
| 6.6 | B2B track | BACKLOG.md has the full list — dedicated "B2B Marketing" category |
| 6.7 | E-commerce track | Product pages, PDPs, marketplace SEO — in BACKLOG |
| 6.8 | Glossary | `/glossary/[term]` — 200+ marketing term definitions |
| 6.9 | Quiz/assessment | End-of-lesson quiz, category completion badges |
| 6.10 | RSS feed | `/feed.xml` for new-lesson notifications |

---

## 📋 Current Status (Session 4 — 2026-06-14)

### MDX Content Progress: 49 / 165 files written

| # | Emoji | Category | Slug | Total | Written | Missing |
|---|---|---|---|---|---|---|
| 1 | 🎯 | Marketing Fundamentals | `fundamentals` | 16 | 13 ✅ | flywheel, category-design, pricing-psychology |
| 2 | 🔎 | SEO | `seo` | 20 | **20 ✅** | — COMPLETE — |
| 3 | 💰 | Paid Ads | `paid-ads` | 18 | 14 | apple-search-ads, ctv-ott-ads, reddit-ads, retail-media |
| 4 | 🚀 | Growth Marketing | `growth` | 16 | 2 | north-star-metric, activation, retention-cohorts, growth-loops, viral-coefficient, ab-testing, ice-rice-prioritization, plg, onboarding, referral-programs, experimentation-program, reverse-trials, activation-rate, freemium-vs-free-trial |
| 5 | 📱 | Social Media Marketing | `social` | 18 | 0 | ALL 18 |
| 6 | ✍️ | Content Marketing | `content` | 15 | 0 | ALL 15 |
| 7 | 📧 | Email & Lifecycle | `email` | 14 | 0 | ALL 14 |
| 8 | 📊 | Analytics & Attribution | `analytics` | 16 | 0 | ALL 16 |
| 9 | 🛠️ | Marketing Tools | `tools` | 15 | 0 | ALL 15 |
| 10 | 🤖 | AI in Marketing | `ai-marketing` | 17 | 0 | ALL 17 |
| | | **TOTAL** | | **165** | **49** | **116 remaining** |

### Confirmed written MDX files (49 total):

**fundamentals (13):** what-is-marketing, 4ps-7ps, stp, value-proposition, buyer-personas, positioning, branding, customer-journey, aida-funnel, jtbd, brand-vs-performance, product-market-fit, marketing-math

**seo (20 — COMPLETE):** how-search-works, keyword-research, on-page-seo, search-intent, technical-seo, core-web-vitals, link-building, internal-linking, content-clusters, schema-structured-data, local-seo, international-seo, ai-overviews-geo, eeat, aeo, llmo, entity-seo, programmatic-seo, zero-click-search, voice-search-seo

**paid-ads (14):** paid-ads-101, google-search-ads, meta-ads, quality-score, bidding-strategies, ad-copy-frameworks, creative-testing, retargeting, google-shopping-pmax, youtube-ads, linkedin-ads, tiktok-ads, ios-attribution, mmm-vs-mta

**growth (2):** what-is-growth, aarrr

---

## ▶️ Exact Next Steps (in strict order)

| # | Action | Status |
|---|---|---|
| 1 | Write 3 missing fundamentals lessons (flywheel, category-design, pricing-psychology) | 🔴 |
| 2 | Write 4 missing paid-ads lessons (apple-search-ads, ctv-ott-ads, reddit-ads, retail-media) | 🔴 |
| 3 | Write 14 missing growth lessons (see table above) | 🔴 |
| 4 | Write all 18 social lessons | 🔴 |
| 5 | Write all 15 content lessons | 🔴 |
| 6 | Write all 14 email lessons | 🔴 |
| 7 | Write all 16 analytics lessons | 🔴 |
| 8 | Write all 15 tools lessons | 🔴 |
| 9 | Write all 17 ai-marketing lessons | 🔴 |
| 10 | Run `npx tsc --noEmit` — should be clean | 🔴 |
| 11 | Run `npm run build` — should succeed | 🔴 |
| 12 | Deploy to Vercel (`npx vercel --prod` or push to GitHub) | 🔴 |

### How to launch the content workflow (do this first):

Each MDX lesson MUST follow this research protocol before writing:
1. Run 2–3 WebSearch queries for the topic (include year 2024/2025 in queries)
2. WebFetch the best source
3. Write the lesson with real citations, stats, and current examples

Use a Workflow to fan out all missing lessons in parallel. Target: all 116 missing lessons in one workflow run.

```
// Schema for lesson validation
const LESSON_SCHEMA = {
  type: "object",
  properties: {
    slug: { type: "string" },
    category: { type: "string" },
    mdxContent: { type: "string", description: "Full MDX file content" }
  },
  required: ["slug", "category", "mdxContent"]
}
```

---

## ✅ What's Fully Built & Verified

### Infrastructure
- Next.js 16.2.9 project at `D:\Coding\marketing-academy`
- All npm dependencies installed (MDX, Mermaid, Tailwind typography, fuse.js, lucide-react, clsx, tailwind-merge, gray-matter, remark-gfm, rehype-slug, rehype-autolink-headings)
- `next.config.ts` — MDX with remark-gfm, rehype-slug, rehype-autolink-headings
- `globals.css` — Tailwind v4 + typography plugin + full CSS variable system (light & dark)
- `mdx-components.tsx` — Mermaid, Callout, ResourceList registered globally for MDX (PROJECT ROOT — not in src/)
- `src/lib/curriculum.ts` — **165 lessons, 10 categories**, all slugs/titles/levels/summaries, `getLessonNav`, `getCourseNav`, `flatLessons`
- `src/lib/utils.ts` — `cn()` utility
- `src/lib/progress.ts` — localStorage progress utilities

### Pages (all built & verified)
- `src/app/layout.tsx` — root layout, Geist font, Nav, metadata template
- `src/app/page.tsx` — homepage: hero, stats bar (165+ lessons), 10-category card grid, how-it-works, CTA
- `src/app/learn/page.tsx` — browse all 165 lessons by category
- `src/app/learn/[category]/page.tsx` — category page with lessons grouped by level
- `src/app/learn/[category]/[lesson]/page.tsx` — **lesson reader**: breadcrumb, level badge, MarkComplete, MDX content, prev/next nav
- `src/app/search/page.tsx` — Fuse.js client-side fuzzy search, dynamic count (`{ALL_LESSONS.length}`)

### Components (all built & verified)
- `Nav.tsx` — fixed header, 10 emoji category links, Search icon, mobile hamburger
- `Mermaid.tsx` — client-side, dynamic import, dark mode aware, error boundary
- `Callout.tsx` — 5 variants: info/warning/success/tip/example (dark: bug fixed)
- `ResourceList.tsx` — resource cards with type icons, Free badge, external link
- `LevelBadge.tsx` — Beginner=green / Intermediate=amber / Advanced=red
- `MarkComplete.tsx` — client toggle button backed by localStorage progress
- `CategoryProgress.tsx` — per-category progress bar (client component)

### Docs
- `README.md` — updated with 165 lesson counts, full tech stack docs
- `BACKLOG.md` — 50+ advanced topics, B2B track, e-commerce track, emerging topics

---

## 📌 Project Identity

| Field | Value |
|---|---|
| **Path** | `D:\Coding\marketing-academy` |
| **Dev URL** | http://localhost:3000 |
| **Dev command** | `npm run dev` |
| **Build** | `npm run build` |
| **Type check** | `npx tsc --noEmit` |
| **Node** | v24.16.0 |
| **npm** | 11.13.0 |
| **Next.js** | 16.2.9 |

---

## 🏗 Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js | 16.2.9 | App Router only |
| Language | TypeScript | ^5 | Strict, `@/*` → `./src/*` |
| UI | React | 19.2.4 | |
| Styling | Tailwind CSS | ^4 | v4 syntax — NO `dark:` classes |
| Typography | @tailwindcss/typography | latest | `prose` for MDX |
| MDX | @next/mdx | ^16.2.9 | App Router native |
| Diagrams | mermaid | ^11.15.0 | Client-side only |
| Icons | lucide-react | ^1.18.0 | No `Youtube` icon — use `Play` |
| Search | fuse.js | ^7.4.2 | Client-side fuzzy |
| Class utils | clsx + tailwind-merge | latest | via `cn()` |

---

## ⚠️ Critical Gotchas (read before every session)

### 1. NO `dark:` Tailwind classes
Tailwind v4 dark mode is done with CSS variables only:
```css
/* globals.css sets these — just use them */
bg-[var(--background)]
text-[var(--foreground)]
text-[var(--muted-foreground)]
border-[var(--border)]
text-[var(--accent)]
```

### 2. `@/*` alias maps to `./src/*` ONLY — mdx-components.tsx is at PROJECT ROOT
```
tsconfig.json: "paths": { "@/*": ["./src/*"] }
```
- `@/lib/curriculum` → `src/lib/curriculum.ts` ✅
- `@/components/Nav` → `src/components/Nav.tsx` ✅
- `@/mdx-components` → `src/mdx-components.tsx` ❌ DOES NOT EXIST
- mdx-components.tsx is at `D:\Coding\marketing-academy\mdx-components.tsx` (project root)
- Next.js App Router picks it up automatically from root — **never import it manually**

### 3. Next.js 16 — params is a Promise
```tsx
// CORRECT
type Props = { params: Promise<{ category: string; lesson: string }> }
const { category, lesson } = await params;

// WRONG (Next.js 14 style — will break)
const { category, lesson } = params;
```

### 4. TypeScript definite assignment assertion (not JSX `!`)
```tsx
// CORRECT — use definite assignment in the declaration
let LessonContent!: React.ComponentType;
// ...
LessonContent = mod.default; // assigned inside try block
// ...
<LessonContent /> // works fine

// WRONG — can't use ! in JSX tag position
<LessonContent! />  // syntax error
```

### 5. Mermaid must be client-side only
```tsx
"use client"
// dynamic import inside useEffect only
// never import mermaid at module level
```

### 6. next.config.ts plugin format
```ts
// CORRECT
remarkPlugins: [["remark-gfm", {}]],  // string/tuple form

// WRONG — function form breaks with @next/mdx
remarkPlugins: [remarkGfm],
```

### 7. lucide-react v1.18 — no `Youtube` icon
Use `Play` instead:
```tsx
import { Play } from "lucide-react";
```

### 8. CRITICAL — No unescaped double quotes inside lessonMeta strings
This caused the first Vercel build to fail with `SyntaxError: Unexpected token`.
```mdx
// BROKEN — acorn sees "better" as a new token mid-string
summary: "Why "better" loses to "different".",

// FIXED — use single quotes for inner quotes
summary: "Why 'better' loses to 'different'.",

// ALSO FINE — escaped double quotes
summary: "Why \"better\" loses to \"different\".",
```
**Rule: if your summary contains quotes, always use single quotes or escape them.**

### 9. MDX lesson format — always use `export const lessonMeta`, NOT YAML frontmatter
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  summary: "One-line description.",
};

# Lesson Title

Content here...
```

### 10. Global MDX components — Mermaid, Callout, ResourceList
These are registered in `mdx-components.tsx` and available in ALL MDX files without imports:
```mdx
<Callout type="info">This works in any MDX file.</Callout>

<Mermaid chart={`graph TD; A-->B`} />

<ResourceList resources={[
  { title: "Resource Name", url: "https://...", type: "article", free: true }
]} />
```

### 11. Curriculum — `getLessonNav` returns `categorySlug` on nav items
```ts
const { prev, next } = getLessonNav(category, lesson);
// prev.categorySlug is available — use it for cross-category nav
href={`/learn/${prev.categorySlug}/${prev.slug}`}
```

---

## 📁 Complete File Inventory

```
D:\Coding\marketing-academy\
│
├── PROJECT_LOG.md              ✅ THIS FILE
├── BACKLOG.md                  ✅ 50+ advanced/emerging topics
├── README.md                   ✅ Updated with 165 lesson counts
├── AGENTS.md                   ✅ "Read bundled docs first" warning
├── CLAUDE.md                   ✅ @AGENTS.md reference
├── .gitattributes              ✅ Forces LF line endings — no CRLF noise
├── next.config.ts              ✅ MDX configured
├── mdx-components.tsx          ✅ AT PROJECT ROOT — Mermaid, Callout, ResourceList
├── postcss.config.mjs          ✅
├── tsconfig.json               ✅ @/* alias → src/*
├── package.json                ✅ All deps
├── package-lock.json           ✅
│
└── src/
    ├── app/
    │   ├── globals.css         ✅ Tailwind v4 + CSS variables
    │   ├── layout.tsx          ✅ Root layout
    │   ├── page.tsx            ✅ Homepage
    │   ├── not-found.tsx       ✅ Custom 404 — "This lesson doesn't exist yet"
    │   ├── robots.ts           ✅ /robots.txt — allow all, points to sitemap
    │   ├── sitemap.ts          ✅ /sitemap.xml — only lessons with real MDX included
    │   ├── learn/
    │   │   ├── page.tsx        ✅ /learn browse
    │   │   └── [category]/
    │   │       ├── page.tsx    ✅ Category page
    │   │       └── [lesson]/
    │   │           └── page.tsx  ✅ LESSON READER — exists and correct
    │   └── search/
    │       └── page.tsx        ✅ Fuse.js search
    │
    ├── components/
    │   ├── Nav.tsx             ✅
    │   ├── Mermaid.tsx         ✅
    │   ├── Callout.tsx         ✅
    │   ├── ResourceList.tsx    ✅
    │   ├── LevelBadge.tsx      ✅
    │   ├── MarkComplete.tsx    ✅
    │   └── CategoryProgress.tsx ✅
    │
    ├── lib/
    │   ├── curriculum.ts       ✅ 165 lessons, 10 categories
    │   ├── utils.ts            ✅ cn()
    │   └── progress.ts         ✅ localStorage utilities
    │
    └── content/
        ├── fundamentals/       13/16 ✅ (missing: flywheel, category-design, pricing-psychology)
        ├── seo/                20/20 ✅ COMPLETE
        ├── paid-ads/           14/18  (missing: apple-search-ads, ctv-ott-ads, reddit-ads, retail-media)
        ├── growth/             2/16   (missing: 14 lessons — see table above)
        ├── social/             0/18   ALL MISSING
        ├── content/            0/15   ALL MISSING
        ├── email/              0/14   ALL MISSING
        ├── analytics/          0/16   ALL MISSING
        ├── tools/              0/15   ALL MISSING
        └── ai-marketing/       0/17   ALL MISSING
```

---

## 📖 Full Curriculum Reference (curriculum.ts — 165 lessons)

### fundamentals (16)
1. what-is-marketing — What Marketing Actually Is (Beginner)
2. 4ps-7ps — The 4 Ps (and the extra 3) (Beginner)
3. stp — Segmentation, Targeting, Positioning (Beginner)
4. value-proposition — The Value Proposition (Beginner)
5. buyer-personas — Buyer Personas (without the fluff) (Beginner)
6. positioning — Positioning (Intermediate)
7. branding — Branding vs. Identity vs. Logo (Intermediate)
8. customer-journey — The Customer Journey (Intermediate)
9. aida-funnel — AIDA & the Marketing Funnel (Intermediate)
10. jtbd — Jobs To Be Done (Advanced)
11. product-market-fit — Product–Market Fit (Advanced)
12. brand-vs-performance — Brand vs. Performance Marketing (Advanced)
13. marketing-math — Marketing Math: CAC, LTV, ROAS, Payback (Beginner)
14. flywheel — The Marketing Flywheel (Intermediate) 🔴 MDX MISSING
15. category-design — Category Design (Advanced) 🔴 MDX MISSING
16. pricing-psychology — Pricing Psychology (Intermediate) 🔴 MDX MISSING

### seo (20) — ALL COMPLETE ✅
1. how-search-works (Beginner) 2. keyword-research (Beginner) 3. search-intent (Beginner)
4. on-page-seo (Beginner) 5. technical-seo (Intermediate) 6. core-web-vitals (Intermediate)
7. internal-linking (Intermediate) 8. link-building (Intermediate) 9. schema-structured-data (Intermediate)
10. content-clusters (Intermediate) 11. local-seo (Advanced) 12. international-seo (Advanced)
13. eeat (Advanced) 14. ai-overviews-geo (Advanced) 15. aeo (Advanced)
16. llmo (Advanced) 17. entity-seo (Advanced) 18. programmatic-seo (Advanced)
19. zero-click-search (Advanced) 20. voice-search-seo (Advanced)

### paid-ads (18)
1. paid-ads-101 (Beginner) ✅ 2. google-search-ads (Beginner) ✅ 3. meta-ads (Beginner) ✅
4. quality-score (Intermediate) ✅ 5. bidding-strategies (Intermediate) ✅ 6. ad-copy-frameworks (Intermediate) ✅
7. creative-testing (Intermediate) ✅ 8. retargeting (Intermediate) ✅ 9. google-shopping-pmax (Advanced) ✅
10. youtube-ads (Advanced) ✅ 11. linkedin-ads (Advanced) ✅ 12. tiktok-ads (Advanced) ✅
13. ios-attribution (Advanced) ✅ 14. mmm-vs-mta (Advanced) ✅
15. apple-search-ads (Advanced) 🔴 16. ctv-ott-ads (Advanced) 🔴
17. reddit-ads (Advanced) 🔴 18. retail-media (Advanced) 🔴

### growth (16)
1. what-is-growth (Beginner) ✅ 2. aarrr (Beginner) ✅
3. north-star-metric (Beginner) 🔴 4. activation (Intermediate) 🔴 5. retention-cohorts (Intermediate) 🔴
6. growth-loops (Intermediate) 🔴 7. viral-coefficient (Intermediate) 🔴 8. ab-testing (Intermediate) 🔴
9. ice-rice-prioritization (Intermediate) 🔴 10. plg (Advanced) 🔴 11. onboarding (Advanced) 🔴
12. referral-programs (Advanced) 🔴 13. experimentation-program (Advanced) 🔴
14. reverse-trials (Advanced) 🔴 15. activation-rate (Intermediate) 🔴 16. freemium-vs-free-trial (Intermediate) 🔴

### social (18) — ALL MISSING 🔴
social-strategy-basics (Beginner), organic-vs-paid (Beginner), content-calendar (Beginner),
instagram (Intermediate), tiktok (Intermediate), linkedin (Intermediate), youtube (Intermediate),
x-twitter (Intermediate), pinterest (Intermediate), influencer-marketing (Advanced),
ugc (Advanced), community-building (Advanced), social-listening (Advanced),
algorithm-basics (Advanced), threads (Intermediate), substack-notes (Intermediate),
reddit-marketing (Advanced), bluesky (Advanced)

### content (15) — ALL MISSING 🔴
what-is-content-marketing (Beginner), content-strategy (Beginner), editorial-calendar (Beginner),
blog-seo-content (Intermediate), topic-clusters (Intermediate), lead-magnets (Intermediate),
gated-content (Intermediate), video-content (Intermediate), podcasting (Intermediate),
content-distribution (Advanced), repurposing (Advanced), thought-leadership (Advanced),
newsletter-strategy (Intermediate), content-moats (Advanced), ai-content-detection (Intermediate)

### email (14) — ALL MISSING 🔴
email-101 (Beginner), list-building (Beginner), welcome-series (Beginner),
segmentation (Intermediate), automation-drips (Intermediate), abandoned-cart (Intermediate),
winback (Intermediate), deliverability (Advanced), compliance (Advanced),
rfm (Advanced), clv (Advanced), sms-marketing (Intermediate),
push-notifications (Intermediate), whatsapp-marketing (Advanced)

### analytics (16) — ALL MISSING 🔴
analytics-101 (Beginner), ga4-setup (Beginner), utm-tagging (Beginner),
conversion-tracking (Intermediate), dashboards (Intermediate), funnel-analytics (Intermediate),
cohort-analysis (Intermediate), attribution-models (Advanced), mmm (Advanced),
incrementality (Advanced), server-side-tracking (Advanced), consent-mode (Advanced),
cdp (Advanced), data-warehouses (Advanced), clean-rooms (Advanced), privacy-sandbox (Advanced)

### tools (15) — ALL MISSING 🔴
seo-tools (Beginner), paid-ads-tools (Beginner), social-media-tools (Beginner),
content-marketing-tools (Beginner), email-marketing-tools (Beginner),
analytics-tools (Intermediate), cro-tools (Intermediate), growth-tools (Intermediate),
design-tools (Beginner), all-in-one-tools (Advanced), free-tools-stack (Beginner),
ai-tools-overview (Intermediate), ai-native-tools (Intermediate),
no-code-marketing-tools (Intermediate), tools-stack-by-stage (Advanced)

### ai-marketing (17) — ALL MISSING 🔴
ai-marketing-101 (Beginner), ai-content-writing (Beginner),
ai-seo (Intermediate), ai-paid-ads (Intermediate), ai-email-marketing (Intermediate),
ai-social-media (Intermediate), ai-analytics (Intermediate), ai-image-video (Intermediate),
ai-personalization (Advanced), ai-agents-marketing (Advanced),
prompt-engineering-marketers (Intermediate), ai-ethics-brand-safety (Advanced),
ai-search-ranking (Advanced), multimodal-ai (Advanced), rag-for-marketers (Advanced),
ai-voice-content (Intermediate), mcp-marketing (Advanced)

---

## 🔑 Key Code Snippets

### Lesson reader page (`src/app/learn/[category]/[lesson]/page.tsx`)
```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategory, getLessonNav } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import MarkComplete from "@/components/MarkComplete";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string; lesson: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return CATEGORIES.flatMap((cat) =>
    cat.lessons.map((l) => ({ category: cat.slug, lesson: l.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, lesson } = await params;
  try {
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    return { title: mod.lessonMeta?.title ?? lesson };
  } catch { return {}; }
}

export default async function LessonPage({ params }: Props) {
  const { category, lesson } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  let LessonContent!: React.ComponentType;
  let lessonMeta: { title: string; level: string; summary: string } | undefined;
  try {
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    LessonContent = mod.default;
    lessonMeta = mod.lessonMeta;
  } catch { notFound(); }

  const { prev, next } = getLessonNav(category, lesson);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-8">
        <Link href="/learn">All Topics</Link>
        <ChevronRight size={14} />
        <Link href={`/learn/${category}`}>{cat.title}</Link>
        <ChevronRight size={14} />
        <span className="text-[var(--foreground)]">{lessonMeta?.title}</span>
      </nav>
      <div className="flex items-center justify-between mb-4">
        {lessonMeta?.level && (
          <LevelBadge level={lessonMeta.level as "Beginner" | "Intermediate" | "Advanced"} />
        )}
        <MarkComplete category={category} slug={lesson} />
      </div>
      <article className="prose prose-slate max-w-none">
        <LessonContent />
      </article>
      <nav className="mt-12 pt-6 border-t border-[var(--border)] flex justify-between gap-4">
        {prev ? (
          <Link href={`/learn/${prev.categorySlug}/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)]">
            <ChevronLeft size={16} /> {prev.title}
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/learn/${next.categorySlug}/${next.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)]">
            {next.title} <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
```

### MDX lesson template
```mdx
export const lessonMeta = {
  title: "Lesson Title Here",
  level: "Intermediate",
  summary: "One-sentence description for cards and search.",
};

# Lesson Title Here

Intro paragraph — one or two sentences that hook the reader.

## First Section

Content...

<Callout type="info">
Key insight or definition.
</Callout>

## Second Section

<Mermaid chart={`
graph TD
  A[Step 1] --> B[Step 2]
  B --> C[Step 3]
`} />

## Key Takeaways

- Takeaway 1
- Takeaway 2
- Takeaway 3

<ResourceList resources={[
  { title: "Resource Name", url: "https://example.com", type: "article", free: true },
  { title: "Video Explainer", url: "https://youtube.com/...", type: "video", free: true },
]} />
```

---

## 📅 Session History

| Session | Date | Key Accomplishments |
|---|---|---|
| 1 | 2026-06-14 | Project scaffolded, all infrastructure built, all components, curriculum.ts with 126 lessons |
| 2 | 2026-06-14 | Lesson reader page, search page, MarkComplete, CategoryProgress, progress.ts, BACKLOG.md, README.md, content folders, started MDX workflow |
| 3 | 2026-06-14 | Curriculum expanded 126→165 (39 new lessons: SEO progression AEO/LLMO/entity/programmatic/zero-click/voice, fundamentals additions, AI marketing additions, paid ads additions, growth/social/email/analytics expansions), fundamentals 12 MDX complete, SEO 15 MDX written |
| 4 | 2026-06-14 | SEO complete (20/20), paid-ads 14/18, fundamentals 13/16, growth 2/16. Total: 49/165. Updated PROJECT_LOG with full current state for account switch. |
| 5 | 2026-06-14 | GitHub pushed (Surya8991/Marketing-Academy). Added Vercel files (not-found, robots, sitemap, .gitattributes). Fixed 3 pre-deploy issues. First Vercel build failed — positioning.mdx had unescaped `"better"` inside double-quoted string → `SyntaxError`. Fixed and redeployed. AGENTS.md rewritten with all 12 non-negotiable rules. |
