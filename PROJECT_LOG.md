# Marketing Academy - Master Project Log

> **ACCOUNT-SWITCH PROOF. Read every section before touching any code.**
> Last audited: 2026-06-14 (Session 9).

---

## ⚡ 60-Second Resume

```
1. cd D:\Coding\marketing-academy
2. Count MDX files: (Get-ChildItem src/content -Recurse -Filter *.mdx).Count   [PowerShell]
3. Find first 🔴 row in the "MDX Progress" table below
4. Launch the workflow to write missing lessons (see "Order of Execution" section)
```

**Do NOT:**
- Run `npm install` again - everything is installed
- Recreate any ✅ file below - it already exists and is correct
- Use Tailwind `dark:` classes - use CSS variables for dark mode (see Gotchas)
- Use YAML frontmatter in MDX - use `export const lessonMeta = {...}` instead
- Import `useMDXComponents` from `@/mdx-components` - that path does NOT exist (`@/*` maps to `./src/*` but mdx-components.tsx is at the PROJECT ROOT)
- Write `<ComponentName! />` in JSX - use `let x!: Type` declaration instead
- Put unescaped double quotes inside lessonMeta strings - use single quotes or `\"escaped\"` (broke first Vercel build)
- Use em dashes (—) ANYWHERE - the user dislikes them. Substitute hyphens, commas, colons, or words.
- Add `Co-Authored-By: Claude` trailer to commits. User wants clean attribution.

---

## 📊 Current Curriculum: 241 lessons across 15 categories

| # | Emoji | Category | Slug | Lessons |
|---|---|---|---|---|
| 1 | 🎯 | Marketing Fundamentals | `fundamentals` | 16 |
| 2 | 🔎 | SEO | `seo` | 20 |
| 3 | 💰 | Paid Ads | `paid-ads` | 18 |
| 4 | 🚀 | Growth Marketing | `growth` | 16 |
| 5 | 📱 | Social Media | `social` | 18 |
| 6 | ✍️ | Content Marketing | `content` | 15 |
| 7 | 📧 | Email & Lifecycle | `email` | 14 |
| 8 | 📊 | Analytics & Attribution | `analytics` | 16 |
| 9 | 🛠️ | Marketing Tools | `tools` | 15 |
| 10 | 🧠 | Human Psychology | `psychology` | 16 |
| 11 | ✍️ | Copywriting | `copywriting` | 16 |
| 12 | 🎯 | Conversion Rate Optimization | `cro` | 15 |
| 13 | 🎨 | Brand Strategy | `brand-strategy` | 16 |
| 14 | 📦 | Product Marketing | `product-marketing` | 13 |
| 15 | 🤖 | AI in Marketing | `ai-marketing` | 17 |
| | | **TOTAL** | | **241** |

---

## 🗂 ORDER OF EXECUTION

> Status: Phase 1 ✅ → Phase 2 ✅ → Phase 3 🔄 in progress → Phase 4 ✅ → Phase 5 ✅ live → Phase 6 🔄 partial → Phase 7 🔄 in progress

### PHASE 1 - Infrastructure ✅ COMPLETE
All code, pages, components built. Next.js 16.2.9 + Tailwind v4 + @next/mdx + Mermaid + fuse.js.

### PHASE 2 - GitHub Push ✅ COMPLETE
Repo: https://github.com/Surya8991/Marketing-Academy
Branch: main. Auto-deploys to Vercel on push.

### PHASE 3 - MDX Content 🔄 IN PROGRESS
~310+/241 lessons written and reviewed as of Session 13 (extra lessons beyond curriculum count)

Each MDX lesson MUST include real research:
1. 2-3 WebSearch queries (include "2024" or "2025" in one)
2. WebFetch best source
3. Write with real stats, citations, current examples

**Completed workflows (Sessions 8-9):**
- Write A - DONE: wrote all copywriting (19), CRO (18), gap-fills for growth/social/content/email/analytics/tools. Committed + pushed.
- Write B - DONE: wrote all brand-strategy (19), product-marketing (16), ai-marketing (14). Committed + pushed.
- Review A (`wxlfdlb61`) - STOPPED after completing: fundamentals (16), seo (20), paid-ads (18). Committed + pushed.
- Review B (`wfc2celzk`) - STOPPED after completing: email (6), analytics (7), psychology (4), tools (15 new). Committed + pushed.

**Active workflows (Session 9):**
- Review Remaining A (`wf_e1c122d9-480`) - research-backed review: growth (18), social (18), content (19), copywriting (19), cro (18) = 92 lessons. Partial batch committed (27 files) + pushed.
- Readability pass (`wf_d2841960-658`) - paragraph splitting, bullet conversion, whitespace for 71 already-reviewed lessons: fundamentals (16), seo (20), paid-ads (18), psychology (4), email (6), analytics (7).

**TypeScript status:** npx tsc --noEmit passes with 0 errors (verified 2026-06-14).

**Review status by category:**
- fundamentals - ✅ reviewed + pushed + toned down
- seo - ✅ reviewed + pushed + toned down
- paid-ads - ✅ reviewed + pushed + toned down
- growth - ✅ reviewed + pushed
- social - ✅ reviewed + pushed
- content - ✅ reviewed + pushed
- email - ✅ reviewed + pushed + toned down
- analytics - ✅ reviewed + pushed + toned down
- tools - ✅ reviewed + pushed
- psychology - ✅ reviewed + pushed + toned down
- copywriting - ✅ reviewed + pushed
- cro - ✅ reviewed + pushed
- brand-strategy - ✅ reviewed + pushed
- product-marketing - ✅ reviewed + pushed
- ai-marketing - ✅ reviewed + pushed

**Review improvements per lesson:**
- Live WebSearch + WebFetch for 2024/2025 stats
- Quick Summary bullet section added after intro
- Plain English rewrites + jargon definitions
- Min 2 real company examples with specific numbers + year
- Mermaid diagram (min 1)
- Callout boxes: info + example + warning
- Punchy one-line takeaway
- Em dashes removed
- Min 6 curated English resources + 3 multilingual (Hindi/Tamil/Telugu)

**Known MDX issue to watch:** After each workflow batch, run Python comma-fix script before committing:
```python
import re, glob
for f in glob.glob('src/content/**/*.mdx', recursive=True):
    content = open(f, encoding='utf-8').read()
    fixed = re.sub(r'\}\n(\s*\{ title: "WsCube)', r'},\n\1', content)
    fixed = re.sub(r'\}\n(\s*\{ title: "Mr Digital)', r'},\n\1', fixed)
    fixed = re.sub(r'\}\n(\s*\{ title: "ODMT)', r'},\n\1', fixed)
    if fixed != content:
        open(f, 'w', encoding='utf-8').write(fixed)
        print(f'Fixed: {f}')
```

### PHASE 4 - Type Check & Build ✅ PASSING
- `npx tsc --noEmit` - 0 errors (verified 2026-06-14)
- Vercel auto-deploys on every push to main

### PHASE 5 - Vercel Deploy ✅ LIVE
Live URL: **https://marketing-academy-roan.vercel.app**

Vercel files:
- `src/app/not-found.tsx` - custom 404 "lesson coming soon"
- `src/app/robots.ts` - allow all crawlers
- `src/app/sitemap.ts` - only includes lessons with real MDX (parallel check). BASE = `https://marketing-academy-roan.vercel.app`
- `.gitattributes` - LF line endings

Every push auto-deploys within ~60 seconds.

### PHASE 7 - New Features 🔄 IN PROGRESS (Session 13)
| Step | What | Status |
|---|---|---|
| 7.1 | Interview-prep landing page `/interview-prep` | 🔄 Building |
| 7.2 | Share buttons (LinkedIn/Twitter) on each lesson | 🔄 Building |
| 7.3 | Cheat sheet cards `/cheat-sheets/[category]` - printable per category | 🔄 Building |
| 7.4 | TypeScript build check `npx tsc --noEmit` | 🔄 Verifying |
| 7.5 | Related lessons "You might also like" on lesson page | 🔄 Building |
| 7.6 | More quizzes - extend from 20 to all 241 lessons | 🔴 Separate workflow needed |
| 7.7 | PWA support - manifest.json + service worker | 🔄 Building |
| 7.8 | Progress certificates - downloadable PDF per track | 🔄 Building |
| 7.9 | Lesson bookmarks - save lessons beyond MarkComplete | 🔄 Building |
| 7.10 | SEO landing pages - `/interview-questions`, `/digital-marketing-cheat-sheet` | 🔄 Building |

### PHASE 6 - Polish 🔄 PARTIALLY COMPLETE
| Step | What | Status |
|---|---|---|
| 6.1 | Em-dash cleanup in MDX | 🔄 Handled in review workflows |
| 6.2 | Dark mode manual toggle | ✅ ThemeToggle.tsx + data-theme + localStorage (no flash) |
| 6.3 | OG images per lesson | ✅ `src/app/api/og/route.tsx` edge runtime, 1200x630 |
| 6.4 | RSS feed `/feed.xml` | ✅ `src/app/feed.xml/route.ts` with auto-discovery link in layout |
| 6.5 | Reading time per lesson | ✅ Server-side raw MDX word count, shown next to level badge |
| 6.6 | Search filter chips | ✅ Category + level filter chips added to /search (AND logic, result count shown) |
| 6.7 | Glossary route `/glossary/[slug]` | ✅ 80+ terms, A-Z index, client search, individual term pages |
| 6.8 | Lesson quiz/assessment | ✅ Quiz.tsx global component, questions for 20 lessons in quizzes.ts, shown on lesson pages |
| 6.9 | Learning tracks (B2B / E-commerce / Solo / AI-first) | ✅ /tracks overview + /tracks/[slug] detail pages, TrackCard on homepage |
| 6.10 | Newsletter signup | ✅ NewsletterSignup.tsx in Footer + /api/newsletter route (TODO: connect email service) |
| 6.11 | Multilingual resources (Hindi/Tamil/Telugu) | ✅ Added in all lessons via review workflows |
| 6.12 | Content readability pass | 🔄 PARTIAL - batch 1 DONE + pushed: fundamentals (16), seo (20), paid-ads (18), psychology (4), email (6), analytics (7), cro (partial), content (partial), social (partial). Remaining: growth, copywriting, brand-strategy, product-marketing, ai-marketing (after review workflows finish). |

---

## ✅ What's Built & Verified

### Infrastructure
- Next.js 16.2.9 App Router at `D:\Coding\marketing-academy`
- All deps installed (MDX, Mermaid, Tailwind v4, fuse.js, lucide-react, clsx, tailwind-merge, gray-matter, remark-gfm, rehype-slug, rehype-autolink-headings)
- `next.config.ts` - MDX configured
- `globals.css` - Tailwind v4 + full CSS variable system + prose system with WCAG-AA contrast + autolink-heading override
- `mdx-components.tsx` - Mermaid, Callout, ResourceList registered globally (PROJECT ROOT)
- `src/lib/curriculum.ts` - **241 lessons, 15 categories**
- `src/lib/utils.ts` - cn() utility
- `src/lib/progress.ts` - localStorage progress utilities

### Pages
- `src/app/layout.tsx` - root layout + Nav + Footer
- `src/app/page.tsx` - homepage (hero, Featured Lessons, 15-category grid, Learning Paths, How to use, gradient CTA)
- `src/app/learn/page.tsx` - all 241 lessons by category
- `src/app/learn/[category]/page.tsx` - category page with Beginner/Intermediate/Advanced grouping + CategoryProgress
- `src/app/learn/[category]/[lesson]/page.tsx` - lesson reader with **ToC on LEFT** (desktop), reading progress bar, MarkComplete, prev/next, back link, mobile ToC
- `src/app/search/page.tsx` - Fuse.js fuzzy search
- `src/app/not-found.tsx` - custom 404
- `src/app/robots.ts` - /robots.txt
- `src/app/sitemap.ts` - /sitemap.xml (smart: only includes lessons with real MDX)

### Components
- `Nav.tsx` - logo + Topics dropdown panel (2-col card grid) + Browse + Search + Start Learning CTA + mobile menu
- `Footer.tsx` - 4-col footer with GitHub link
- `Mermaid.tsx` - client, dynamic import, dark-mode aware via CSS vars, **fullscreen button** (Maximize2 → modal overlay, Esc to close)
- `Callout.tsx` - 5 variants (info/warning/success/tip/example) with semitransparent tints (`bg-blue-500/10`) and `var(--foreground)` text - readable in both modes
- `ResourceList.tsx` - resource cards with type icons + Free badge + external link
- `LevelBadge.tsx` - Beginner=green / Intermediate=amber / Advanced=red pill
- `MarkComplete.tsx` - client toggle backed by localStorage
- `CategoryProgress.tsx` - per-category progress bar
- `ReadingProgress.tsx` - scroll-driven progress bar at top
- `TableOfContents.tsx` - exports `TableOfContentsDesktop` (LEFT sticky aside, scroll-spy via IntersectionObserver) + `TableOfContentsMobile` (collapsible details)

### Docs
- `README.md` - project docs
- `BACKLOG.md` - 50+ advanced/emerging topics
- `AGENTS.md` - 12 non-negotiable rules
- `PROJECT_LOG.md` - this file

---

## ⚠️ Critical Gotchas

### 1. NO em dashes (—) anywhere
User dislikes them. Use `-`, `,`, `:`, or words. Apply when writing any new file. Cleanup pass over existing MDX is queued for Phase 6.

### 2. NO `dark:` Tailwind classes
Use CSS variables only: `bg-[var(--background)]`, `text-[var(--foreground)]`, etc.

### 3. `@/*` → `./src/*` only
mdx-components.tsx is at PROJECT ROOT, not in src/. Next.js picks it up automatically. Never import it manually.

### 4. Next.js 16 - params is a Promise
`type Props = { params: Promise<{...}> }` + `const { x } = await params`

### 5. Definite assignment, not JSX `!`
`let X!: Type` then `X = mod.default` then `<X />` - not `<X! />`.

### 6. Mermaid client-side only
"use client" + dynamic import inside useEffect.

### 7. next.config.ts plugin tuple format
`remarkPlugins: [["remark-gfm", {}]]` - NOT function form.

### 8. lucide-react v1.18 - no `Youtube`, no `Github` icons
Use `Play` for video, `ExternalLink` for GitHub.

### 9. No unescaped `"` inside lessonMeta strings
Use single quotes inside, or escape with `\"`. Acorn (MDX parser) will break Vercel build otherwise.

### 10. MDX format - export const lessonMeta, NOT YAML
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // Beginner | Intermediate | Advanced
  summary: "Description.",
};
```

### 11. Global MDX components - no imports
Callout, Mermaid, ResourceList are registered globally - never import them in MDX files.

### 12. getLessonNav returns categorySlug
Use `prev.categorySlug` for cross-category nav.

### 13. No `Co-Authored-By: Claude` in commits
User wants clean attribution. Just write the commit message body, nothing about Claude.

---

## 📁 Complete File Inventory

```
D:\Coding\marketing-academy\
├── PROJECT_LOG.md              ✅ THIS FILE
├── BACKLOG.md                  ✅ 50+ advanced topics
├── README.md                   ✅
├── AGENTS.md                   ✅ 12 non-negotiable rules
├── CLAUDE.md                   ✅ @AGENTS.md
├── .gitattributes              ✅ Forces LF
├── next.config.ts              ✅
├── mdx-components.tsx          ✅ PROJECT ROOT
├── postcss.config.mjs          ✅
├── tsconfig.json               ✅
├── package.json                ✅ engines.node >= 20
├── package-lock.json           ✅
│
└── src/
    ├── app/
    │   ├── globals.css         ✅ Tailwind v4 + CSS vars + prose system
    │   ├── layout.tsx          ✅ Root + Nav + Footer
    │   ├── page.tsx            ✅ Homepage
    │   ├── not-found.tsx       ✅ Custom 404
    │   ├── robots.ts           ✅
    │   ├── sitemap.ts          ✅ smart filter (BASE fixed to marketing-academy-roan.vercel.app)
    │   ├── learn/
    │   │   ├── page.tsx        ✅ Browse all 241 lessons
    │   │   └── [category]/
    │   │       ├── page.tsx    ✅ Category w/ level grouping + progress
    │   │       └── [lesson]/
    │   │           └── page.tsx  ✅ LEFT ToC + reading progress + MarkComplete
    │   ├── api/
    │   │   ├── og/
    │   │   │   └── route.tsx   ✅ Edge runtime OG image 1200x630 (dark branded card)
    │   │   └── newsletter/
    │   │       └── route.ts    ✅ POST handler with email validation (TODO: connect email service)
    │   ├── feed.xml/
    │   │   └── route.ts        ✅ RSS feed, auto-discovered via <link> in layout
    │   ├── search/
    │   │   ├── page.tsx        ✅ Fuse.js + category + level filter chips
    │   │   └── layout.tsx      ✅
    │   ├── glossary/
    │   │   ├── page.tsx        ✅ A-Z index with client search
    │   │   ├── GlossaryClient.tsx ✅ Client component for search/filter
    │   │   └── [slug]/
    │   │       └── page.tsx    ✅ Individual term pages + generateStaticParams
    │   └── tracks/
    │       ├── page.tsx        ✅ 4 track cards overview
    │       └── [slug]/
    │           └── page.tsx    ✅ Track detail with ordered lesson list
    │
    ├── components/
    │   ├── Nav.tsx             ✅ Topics dropdown + ThemeToggle + Tracks + Glossary links
    │   ├── Footer.tsx          ✅ + NewsletterSignup above columns
    │   ├── Mermaid.tsx         ✅ Fullscreen button
    │   ├── Callout.tsx         ✅ Dark-mode safe tints
    │   ├── ResourceList.tsx    ✅ + lang badge (en/hi/ta/te)
    │   ├── LevelBadge.tsx      ✅
    │   ├── MarkComplete.tsx    ✅
    │   ├── CategoryProgress.tsx ✅
    │   ├── ReadingProgress.tsx ✅
    │   ├── TableOfContents.tsx ✅ Desktop (LEFT) + Mobile
    │   ├── ThemeToggle.tsx     ✅ Sun/Moon, localStorage, no-flash inline script
    │   ├── Quiz.tsx            ✅ "use client", one question at a time, score screen
    │   ├── NewsletterSignup.tsx ✅ "use client", idle/loading/success/error states
    │   ├── TrackCard.tsx       ✅ Card for homepage track grid
    │   └── TrackLessonList.tsx ✅ Ordered lesson list for track detail page
    │
    ├── lib/
    │   ├── curriculum.ts       ✅ 241 lessons, 15 categories
    │   ├── utils.ts            ✅ cn()
    │   ├── progress.ts         ✅ localStorage
    │   ├── tracks.ts           ✅ 4 learning tracks (b2b-marketer, ecommerce-growth, solo-founder, ai-first-marketer)
    │   ├── glossary.ts         ✅ 80+ marketing terms with definitions + related terms
    │   └── quizzes.ts          ✅ 3-5 questions for 20 key lessons
    │
    └── content/                🔄 241+ written. Review in progress.
        ├── fundamentals/       16 ✅ reviewed + pushed
        ├── seo/                20 ✅ reviewed + pushed
        ├── paid-ads/           18 ✅ reviewed + pushed
        ├── growth/             19 ✅ reviewed + pushed
        ├── social/             18 ✅ reviewed + pushed
        ├── content/            19 ✅ reviewed + pushed
        ├── email/              14 ✅ reviewed + pushed
        ├── analytics/          16 ✅ reviewed + pushed
        ├── tools/              15 ✅ reviewed + pushed
        ├── psychology/         16 ✅ reviewed + pushed
        ├── copywriting/        19 ✅ reviewed + pushed
        ├── cro/                18 ✅ reviewed + pushed
        ├── brand-strategy/     19 ✅ reviewed + pushed
        ├── product-marketing/  16 ✅ reviewed + pushed
        └── ai-marketing/       14 ✅ reviewed + pushed
```

---

## 📅 Session History

| Session | Date | Key Accomplishments |
|---|---|---|
| 1 | 2026-06-14 | Project scaffolded, all infrastructure, curriculum with 126 lessons |
| 2 | 2026-06-14 | Lesson reader, search, MarkComplete, CategoryProgress, BACKLOG, README, started MDX workflow |
| 3 | 2026-06-14 | Expanded 126 → 165 (SEO progression AEO/LLMO/entity/programmatic, fundamentals/AI/paid-ads/growth/social/email/analytics additions). Fundamentals + SEO MDX largely complete |
| 4 | 2026-06-14 | SEO complete 20/20, paid-ads 14/18, total 49/165. Account-switch prep |
| 5 | 2026-06-14 | GitHub push (Surya8991/Marketing-Academy). Vercel deploy (live at marketing-academy-roan.vercel.app). Build failed twice (positioning.mdx quotes, sitemap.ts type predicate) - both fixed. AGENTS.md rewritten with 12 rules. |
| 6 | 2026-06-14 | Added Human Psychology category (16 lessons, 165→181). Launched 116-lesson + 16-psych MDX workflows in parallel. Full design + UX overhaul (Nav redo with Topics dropdown, homepage rebuild w/ Featured Lessons & Learning Paths, lesson reader w/ ToC on LEFT + reading progress + sticky nav, Footer added, prose system rewritten for dark-mode contrast, Mermaid fullscreen, Callout dark-mode fix). Added 4 more categories (Copywriting 16, CRO 15, Brand Strategy 16, Product Marketing 13) - total now **241 lessons across 15 categories**. Saved feedback memories: no em dashes, no Co-Authored-By trailer. |
| 7 | 2026-06-14 | Fixed Vercel build failure: 49 MDX files had missing comma before multilingual ResourceList entries (acorn SyntaxError). Fixed via Python regex. Added 4 quick wins: dark mode toggle (ThemeToggle.tsx + localStorage + no-flash inline script), OG images per lesson (api/og edge route), RSS feed (feed.xml route with auto-discovery link), reading time estimate (server-side raw MDX word count). Added multilingual resources (Hindi/Tamil/Telugu) to all lessons. Added ResourceList lang field + colored badges. Sitemap BASE URL fixed. |
| 8 | 2026-06-14 | Write A + Write B completed (all new lessons for copywriting/CRO/brand-strategy/product-marketing/ai-marketing + gap-fills). Review A + B partial. 5-feature workflow completed: search filters, glossary (80+ terms), quizzes (20 lessons), newsletter signup, learning tracks (4 paths). Nav updated with Tracks + Glossary links. |
| 9 | 2026-06-14 | Committed + pushed all reviewed content by category (fundamentals 16, seo 20, paid-ads 18, growth 4, email 6+9 new, analytics 7+9 new, psychology 4+1 new, tools 15 new). All 5 new features verified (TypeScript clean). Launched Review Remaining A (`wf_e1c122d9-480`) covering growth/social/content/copywriting/cro (92 lessons). Still pending: brand-strategy, product-marketing, ai-marketing, email remaining 8, analytics remaining 9, psychology remaining 13. |
| 10 | 2026-06-14 | Relaunched remaining review. Review C (`wf_efe43d89`) covers growth (19)/social (18)/content (19) = 56 lessons. Review D (`wf_9e38f788`) covers copywriting (19)/cro (18)/brand-strategy (19)/product-marketing (16)/ai-marketing (17) = 89 lessons. All 145 remaining un-reviewed lessons now in active research-backed review. Updated PROJECT_LOG with full status tracking. |
| 11 | 2026-06-14 | Review C complete (growth 19 + social 18 + content 19 = 56 lessons). Review D complete (copywriting 19 + cro 18 + brand-strategy 19 + product-marketing 16 + ai-marketing 17 = 89 lessons). Em dash sweep: 89 files fixed. All 145 remaining lessons committed and pushed. All 15 categories now fully reviewed. |
| 12 | 2026-06-14 | Launched 5 parallel workflows: Tone-down A (fundamentals/seo/paid-ads 60 lessons), Tone-down B (email/analytics/psychology 73 lessons), QnA A (fundamentals/seo/paid-ads/growth/social 97 lessons), QnA B (content/email/analytics/tools/psychology 110 lessons), QnA C (copywriting/cro/brand-strategy/product-marketing/ai-marketing 89 lessons). Interview Q and A sections being added to all 310 lessons. |
| 13 | 2026-06-14 | Phase 7 features: interview-prep landing page, share buttons (LinkedIn/Twitter), cheat sheet cards, related lessons, PWA support, progress certificates, lesson bookmarks, SEO landing pages. Quiz generation for all 241 lessons queued as separate workflow. |
| 13 | 2026-06-14 | 7 AM hard stop: committed all pending changes across all 15 categories, pushed to main. Tone-down pass complete on dense categories. All scheduled tasks have now run. Project fully up to date. |

---

## 🔑 Key Code Snippets

### MDX lesson template
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Intermediate",
  summary: "One-sentence description with no em dashes.",
};

# Lesson Title

Hook paragraph that explains why this matters.

## What It Actually Is

Plain-English definition with one concrete example.

## Why It Matters (with data)

Real 2024/2025 stats with [source links](https://url).

## How It Works / The Playbook

Concrete steps. Use bullets or numbered lists.

<Callout type="example">
Real brand example with specific numbers.
</Callout>

## Common Mistakes

- Specific mistake 1
- Specific mistake 2

## Key Takeaways

- Takeaway 1
- Takeaway 2

<ResourceList resources={[
  { title: "Source", url: "https://...", type: "article", free: true },
]} />
```

### Lesson reader skeleton (current state)
ToC is on the LEFT side as of Session 6:
```tsx
<div className="flex gap-12">
  <TableOfContentsDesktop />  {/* LEFT */}
  <div className="flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
    {/* header, mobile ToC, article, prev/next */}
  </div>
</div>
```
