# Marketing Academy - Master Project Log

> **ACCOUNT-SWITCH PROOF. Read every section before touching any code.**
> Last audited: 2026-06-14 (Session 14).

---

## 60-Second Resume

```
1. cd D:\Coding\marketing-academy
2. Count MDX files: (Get-ChildItem src/content -Recurse -Filter *.mdx).Count   [PowerShell]
3. Current: 308 MDX files across 15 categories - all written + reviewed
4. Next priority: quiz generation workflow (221 lessons still need quizzes)
```

**Do NOT:**
- Run `npm install` again - everything is installed
- Recreate any file marked below - it exists and is correct
- Use Tailwind `dark:` classes - use CSS variables for dark mode (see Gotchas)
- Use YAML frontmatter in MDX - use `export const lessonMeta = {...}` instead
- Import `useMDXComponents` from `@/mdx-components` - that path does NOT exist (`@/*` maps to `./src/*` but mdx-components.tsx is at the PROJECT ROOT)
- Write `<ComponentName! />` in JSX - use `let x!: Type` declaration instead
- Put unescaped double quotes inside lessonMeta strings - use single quotes or `\"escaped\"` (broke first Vercel build)
- Use em dashes anywhere - substitute hyphens, commas, colons, or words (127 already fixed 2026-06-14)
- Add `Co-Authored-By: Claude` trailer to commits. User wants clean attribution.
- Put `"use client"` and `export function generateStaticParams()` in the same file - Next.js forbids it (broke Vercel build 2026-06-14)

---

## Current State: 308 MDX lessons across 15 categories

> Note: curriculum.ts lists 241 canonical lessons. 308 MDX files exist (67 bonus lessons written during workflows). All are accessible via direct URL but not all appear in navigation.

| # | Emoji | Category | Slug | In curriculum.ts | MDX files on disk |
|---|---|---|---|---|---|
| 1 | 🎯 | Marketing Fundamentals | `fundamentals` | 16 | 19 |
| 2 | 🔎 | SEO | `seo` | 20 | 20 |
| 3 | 💰 | Paid Ads | `paid-ads` | 18 | 21 |
| 4 | 🚀 | Growth Marketing | `growth` | 16 | 19 |
| 5 | 📱 | Social Media | `social` | 18 | 18 |
| 6 | ✍️ | Content Marketing | `content` | 15 | 19 |
| 7 | 📧 | Email & Lifecycle | `email` | 14 | 25 |
| 8 | 📊 | Analytics & Attribution | `analytics` | 16 | 27 |
| 9 | 🛠️ | Marketing Tools | `tools` | 15 | 30 |
| 10 | 🧠 | Human Psychology | `psychology` | 16 | 21 |
| 11 | ✍️ | Copywriting | `copywriting` | 16 | 19 |
| 12 | 🎯 | CRO | `cro` | 15 | 18 |
| 13 | 🎨 | Brand Strategy | `brand-strategy` | 16 | 19 |
| 14 | 📦 | Product Marketing | `product-marketing` | 13 | 16 |
| 15 | 🤖 | AI in Marketing | `ai-marketing` | 17 | 17 |
| | | **TOTAL** | | **241 canonical** | **308 on disk** |

---

## Order of Execution

> Status: Phase 1 ✅ → Phase 2 ✅ → Phase 3 ✅ → Phase 4 ✅ → Phase 5 ✅ live → Phase 6 ✅ → Phase 7 ✅ → Phase 8 🔴 next

### PHASE 1 - Infrastructure ✅ COMPLETE
Next.js 16.2.9 App Router + Tailwind v4 + @next/mdx + Mermaid + fuse.js. All deps installed.

### PHASE 2 - GitHub Push ✅ COMPLETE
Repo: https://github.com/Surya8991/Marketing-Academy
Branch: main. Auto-deploys to Vercel on push.

### PHASE 3 - MDX Content ✅ COMPLETE
308 MDX lessons written + research-backed review pass on all 15 categories. All committed + pushed.

**All 15 categories: ✅ written + reviewed + toned down + pushed**

Each MDX lesson includes:
- Live WebSearch + WebFetch for 2024/2025 stats
- Quick Summary bullet section after intro
- Plain English rewrites + jargon definitions
- Min 2 real company examples with specific numbers + year
- Mermaid diagram (min 1)
- Callout boxes: info + example + warning
- Punchy one-line takeaway
- Em dashes removed
- Min 6 curated English resources + 3 multilingual (Hindi/Tamil/Telugu)
- Interview Q and A section added to all lessons (Sessions 12-13)

**Known MDX issue to watch:** After new workflow batches, run Python comma-fix script before committing:
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
- `npx tsc --noEmit` - 0 errors (verified 2026-06-14, Session 14)
- Vercel auto-deploys on every push to main

### PHASE 5 - Vercel Deploy ✅ LIVE
Live URL: **https://marketing-academy-roan.vercel.app**

- `src/app/not-found.tsx` - custom 404 "lesson coming soon"
- `src/app/robots.ts` - allow all crawlers
- `src/app/sitemap.ts` - only includes lessons with real MDX. BASE = `https://marketing-academy-roan.vercel.app`
- `.gitattributes` - LF line endings

Every push auto-deploys within ~60 seconds.

### PHASE 6 - Polish ✅ COMPLETE
| Step | What | Status |
|---|---|---|
| 6.1 | Em-dash cleanup | ✅ 127 em dashes fixed across 7 source files (2026-06-14) |
| 6.2 | Dark mode toggle | ✅ ThemeToggle.tsx + data-theme + localStorage (no flash) |
| 6.3 | OG images per lesson | ✅ `src/app/api/og/route.tsx` edge runtime, 1200x630 |
| 6.4 | RSS feed `/feed.xml` | ✅ auto-discovered via `<link>` in layout |
| 6.5 | Reading time per lesson | ✅ server-side raw MDX word count |
| 6.6 | Search filter chips | ✅ category + level filter (AND logic, result count) |
| 6.7 | Glossary `/glossary/[slug]` | ✅ 148 terms, A-Z index, client search, individual term pages |
| 6.8 | Lesson quizzes | ✅ Quiz.tsx global component, 20 lessons covered in quizzes.ts |
| 6.9 | Learning tracks | ✅ 7 tracks: B2B, E-commerce, Solo Founder, AI-First, Content Creator, Social Media Manager, Data-Driven |
| 6.10 | Newsletter signup | ✅ NewsletterSignup.tsx in Footer + /api/newsletter (TODO: wire to email service) |
| 6.11 | Multilingual resources | ✅ Hindi/Tamil/Telugu links in every lesson |
| 6.12 | Content readability pass | ✅ Complete across all 15 categories |
| 6.13 | Footer restructure | ✅ 4-col layout with all 7 tracks listed |

### PHASE 7 - New Features ✅ COMPLETE (Session 13-14)
| Step | What | Status |
|---|---|---|
| 7.1 | Interview prep hub `/interview-prep` | ✅ hub page + category cards + sample Q&A |
| 7.2 | Share buttons (LinkedIn/Twitter) | ✅ ShareButtons.tsx wired into every lesson page |
| 7.3 | Cheat sheets `/cheat-sheets/[category]` | ✅ printable per-category cards + print CSS |
| 7.4 | TypeScript build verified | ✅ 0 errors |
| 7.5 | Related lessons | ✅ RelatedLessons.tsx wired into every lesson page |
| 7.6 | More quizzes (all 241 lessons) | 🔴 Separate workflow needed - see Phase 8 |
| 7.7 | PWA support | ✅ manifest.json + sw.js + layout wired (manifest link + SW registration) |
| 7.8 | Progress certificates `/certificates/[slug]` | ✅ printable certificate per track |
| 7.9 | Lesson bookmarks | ✅ BookmarkButton.tsx wired into every lesson page + /bookmarks page |
| 7.10 | SEO landing pages | ✅ /interview-questions + /digital-marketing-cheat-sheet |
| 7.11 | Tools directory `/tools` | ✅ 85+ tools, 11 categories, search + pricing + category filters |
| 7.12 | Nav updated | ✅ Interview Prep + Cheat Sheets + Tools links in desktop + mobile nav |

### PHASE 8 - Quiz Expansion 🔴 NOT STARTED
- Goal: add 3-5 quiz questions to all 221 remaining lessons (currently only 20 have quizzes)
- Approach: one workflow agent per category, reads MDX content, generates relevant questions
- Output: appended to `src/lib/quizzes.ts`
- Once done: `/interview-prep` page becomes fully populated

---

## What's Built & Verified

### Infrastructure
- Next.js 16.2.9 App Router at `D:\Coding\marketing-academy`
- All deps installed (MDX, Mermaid, Tailwind v4, fuse.js, lucide-react, clsx, tailwind-merge, gray-matter, remark-gfm, rehype-slug, rehype-autolink-headings)
- `next.config.ts` - MDX configured with remark-gfm tuple format
- `globals.css` - Tailwind v4 + full CSS variable system + prose system with WCAG-AA contrast
- `mdx-components.tsx` - Callout, Mermaid, ResourceList, Quiz registered globally (PROJECT ROOT)
- `src/lib/curriculum.ts` - 241 canonical lessons, 15 categories, em dashes fixed
- `src/lib/utils.ts` - cn() utility
- `src/lib/progress.ts` - localStorage progress utilities
- `src/lib/tracks.ts` - 7 learning tracks
- `src/lib/glossary.ts` - 148 marketing terms
- `src/lib/quizzes.ts` - 3-5 questions for 20 key lessons
- `src/lib/tools-directory.ts` - 85+ real marketing tools across 11 categories

### Pages
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage: hero, featured lessons, 15-category grid, tracks, CTA |
| `/learn` | `src/app/learn/page.tsx` | Browse all 241 lessons by category |
| `/learn/[category]` | `src/app/learn/[category]/page.tsx` | Category page: level grouping + progress bar |
| `/learn/[category]/[lesson]` | `src/app/learn/[category]/[lesson]/page.tsx` | Lesson reader: LEFT ToC, reading progress, MarkComplete, ShareButtons, BookmarkButton, RelatedLessons, Quiz, prev/next |
| `/search` | `src/app/search/page.tsx` | Fuse.js fuzzy search + category/level filter chips |
| `/tracks` | `src/app/tracks/page.tsx` | 7 track cards overview |
| `/tracks/[slug]` | `src/app/tracks/[slug]/page.tsx` | Track detail with ordered lesson list |
| `/glossary` | `src/app/glossary/page.tsx` | A-Z index with client search |
| `/glossary/[slug]` | `src/app/glossary/[slug]/page.tsx` | Individual term pages |
| `/bookmarks` | `src/app/bookmarks/page.tsx` | Bookmarked lessons (localStorage) |
| `/interview-prep` | `src/app/interview-prep/page.tsx` | Interview prep hub: categories + sample Q&A |
| `/interview-questions` | `src/app/interview-questions/page.tsx` | SEO landing: digital marketing interview Q&A |
| `/cheat-sheets` | `src/app/cheat-sheets/page.tsx` | Cheat sheet index: all 15 categories |
| `/cheat-sheets/[category]` | `src/app/cheat-sheets/[category]/page.tsx` | Printable per-category cheat sheet |
| `/digital-marketing-cheat-sheet` | `src/app/digital-marketing-cheat-sheet/page.tsx` | SEO landing: cheat sheet with key metrics/tables |
| `/tools` | `src/app/tools/page.tsx` | Tools directory: 85+ tools, search + filters |
| `/certificates` | `src/app/certificates/page.tsx` | Certificate index: 7 tracks |
| `/certificates/[slug]` | `src/app/certificates/[slug]/page.tsx` | Printable track completion certificate |
| `/api/og` | `src/app/api/og/route.tsx` | Edge OG image 1200x630 |
| `/api/newsletter` | `src/app/api/newsletter/route.ts` | Newsletter signup handler |
| `/feed.xml` | `src/app/feed.xml/route.ts` | RSS feed with auto-discovery |
| `/sitemap.xml` | `src/app/sitemap.ts` | Smart sitemap: only MDX-backed lessons |
| `/robots.txt` | `src/app/robots.ts` | Allow all crawlers |
| `404` | `src/app/not-found.tsx` | Custom 404 "lesson coming soon" |

### Components
| File | What it does |
|---|---|
| `Nav.tsx` | Logo + Topics dropdown (15 categories) + Browse + Tracks + Glossary + Interview Prep + Cheat Sheets + Tools + Search + mobile menu |
| `Footer.tsx` | 4-col layout: brand + quick links, topics col 1, topics col 2, all 7 tracks |
| `Mermaid.tsx` | Client, dynamic import, dark-mode aware, fullscreen button (Maximize2 icon, Esc to close) |
| `Callout.tsx` | 5 variants: info/warning/success/tip/example, semitransparent tints, readable in both modes |
| `ResourceList.tsx` | Resource cards with type icons + Free badge + lang badge (en/hi/ta/te) + external link |
| `LevelBadge.tsx` | Beginner=green / Intermediate=amber / Advanced=red pill |
| `MarkComplete.tsx` | Client toggle backed by `ma_completed` localStorage key |
| `BookmarkButton.tsx` | Client toggle backed by `ma_bookmarks` localStorage key |
| `ShareButtons.tsx` | LinkedIn + Twitter/X share buttons with popup window |
| `RelatedLessons.tsx` | Server component: 3 lessons from same category (same level fallback) |
| `CategoryProgress.tsx` | Per-category progress bar |
| `ReadingProgress.tsx` | Scroll-driven progress bar at top of page |
| `TableOfContents.tsx` | Desktop (LEFT sticky, scroll-spy) + Mobile (collapsible details) |
| `ThemeToggle.tsx` | Sun/Moon icon, localStorage, no-flash inline script in layout |
| `Quiz.tsx` | "use client", one question at a time, score screen, registered globally in mdx-components.tsx |
| `NewsletterSignup.tsx` | "use client", idle/loading/success/error states |
| `TrackCard.tsx` | Card for homepage track grid |
| `TrackLessonList.tsx` | Ordered lesson list for track detail page |
| `ScrollToTop.tsx` | Scroll to top button |

### Public files
| File | What |
|---|---|
| `public/manifest.json` | PWA Web App Manifest (name, icons, display: standalone, theme_color: #6366f1) |
| `public/sw.js` | Service worker: network-first for /api/, cache-first for everything else |

---

## Critical Gotchas

### 1. NO em dashes anywhere
Use `-`, `,`, `:`, or words. 127 instances fixed 2026-06-14 in curriculum.ts + 6 other files. Run em dash check before any new commit: `grep -rn "—" src/`

### 2. NO `dark:` Tailwind classes
Use CSS variables only: `bg-[var(--background)]`, `text-[var(--foreground)]`, `text-[var(--muted-foreground)]`, `border-[var(--border)]`, `bg-[var(--accent)]`, `text-[var(--accent-foreground)]`, `bg-[var(--card)]`

### 3. `@/*` maps to `./src/*` only
`mdx-components.tsx` is at PROJECT ROOT. Next.js picks it up automatically. Never import it.

### 4. Next.js 16 - params is a Promise
```tsx
type Props = { params: Promise<{ category: string; lesson: string }> }
const { category, lesson } = await params;
```

### 5. Definite assignment, not JSX `!`
`let X!: Type` then `X = mod.default` then `<X />` - never `<X! />`

### 6. Mermaid client-side only
`"use client"` + dynamic import inside useEffect only.

### 7. next.config.ts plugin tuple format
`remarkPlugins: [["remark-gfm", {}]]` - NOT the function form `remarkPlugins: [remarkGfm]`

### 8. lucide-react v1.18 - no `Youtube`, no `Github` icons
Use `Play` for video, `ExternalLink` for GitHub.

### 9. No unescaped `"` inside lessonMeta strings
Use single quotes inside or escape with `\"`. Acorn (MDX parser) will break the Vercel build.

### 10. MDX format - export const lessonMeta, NOT YAML frontmatter
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // must be exactly: "Beginner" | "Intermediate" | "Advanced"
  summary: "One sentence.",
};
```

### 11. Global MDX components - no imports needed
Callout, Mermaid, ResourceList, Quiz are registered globally in mdx-components.tsx at project root. Never import them in MDX files.

### 12. getLessonNav returns categorySlug
Use `prev.categorySlug` not `prev.category` for cross-category prev/next navigation.

### 13. No `Co-Authored-By: Claude` in commits
Clean attribution only. No Claude trailer in any commit message.

### 14. NO `"use client"` + `generateStaticParams` in same file
Next.js App Router forbids it. Split into a server page.tsx (with generateStaticParams/generateMetadata) that imports a separate client component for interactive parts. This broke Vercel build 2026-06-14 in cheat-sheets/[category]/page.tsx.

---

## Complete File Inventory

```
D:\Coding\marketing-academy\
├── PROJECT_LOG.md              ✅ THIS FILE (last updated Session 14)
├── BACKLOG.md                  ✅ advanced/emerging topics
├── README.md                   ✅ updated Session 14
├── AGENTS.md                   ✅ 14 non-negotiable rules
├── CLAUDE.md                   ✅ @AGENTS.md
├── .gitattributes              ✅ Forces LF
├── next.config.ts              ✅ MDX configured
├── mdx-components.tsx          ✅ PROJECT ROOT - Callout, Mermaid, ResourceList, Quiz
├── postcss.config.mjs          ✅
├── tsconfig.json               ✅
├── package.json                ✅ engines.node >= 20
├── package-lock.json           ✅
│
├── public/
│   ├── manifest.json           ✅ PWA manifest
│   ├── sw.js                   ✅ service worker
│   └── *.svg                   ✅ Next.js default icons
│
└── src/
    ├── app/
    │   ├── globals.css             ✅ Tailwind v4 + CSS vars + prose system
    │   ├── layout.tsx              ✅ Root + Nav + Footer + PWA manifest link + SW registration
    │   ├── page.tsx                ✅ Homepage
    │   ├── not-found.tsx           ✅ Custom 404
    │   ├── robots.ts               ✅
    │   ├── sitemap.ts              ✅ smart filter
    │   ├── learn/
    │   │   ├── page.tsx            ✅ Browse all lessons
    │   │   └── [category]/
    │   │       ├── page.tsx        ✅ Category + level grouping + progress
    │   │       └── [lesson]/
    │   │           └── page.tsx    ✅ Lesson reader (LEFT ToC, ShareButtons, BookmarkButton, RelatedLessons, Quiz, prev/next)
    │   ├── api/
    │   │   ├── og/route.tsx        ✅ Edge OG image 1200x630
    │   │   └── newsletter/route.ts ✅ POST email handler
    │   ├── feed.xml/route.ts       ✅ RSS feed
    │   ├── search/
    │   │   ├── page.tsx            ✅ Fuse.js + category + level filter chips
    │   │   └── layout.tsx          ✅
    │   ├── glossary/
    │   │   ├── page.tsx            ✅ A-Z index with client search
    │   │   ├── GlossaryClient.tsx  ✅ Client search/filter
    │   │   └── [slug]/page.tsx     ✅ Individual term pages
    │   ├── tracks/
    │   │   ├── page.tsx            ✅ 7 track cards
    │   │   └── [slug]/page.tsx     ✅ Track detail with lesson list
    │   ├── bookmarks/
    │   │   ├── page.tsx            ✅ Bookmarked lessons list
    │   │   └── BookmarksList.tsx   ✅ Client component (reads localStorage)
    │   ├── interview-prep/
    │   │   └── page.tsx            ✅ Hub: categories + sample Q&A + how-to-prep
    │   ├── interview-questions/
    │   │   └── page.tsx            ✅ SEO landing: 5 topic Q&A sections with details/summary
    │   ├── cheat-sheets/
    │   │   ├── page.tsx            ✅ Index: all 15 category cards
    │   │   └── [category]/
    │   │       ├── page.tsx        ✅ Server component: lesson grid + print CSS
    │   │       └── PrintButton.tsx ✅ Client component: window.print()
    │   ├── digital-marketing-cheat-sheet/
    │   │   └── page.tsx            ✅ SEO landing: metrics tables + glossary + print
    │   ├── tools/
    │   │   ├── page.tsx            ✅ Server component: hero + stats + ToolsClient
    │   │   └── ToolsClient.tsx     ✅ Client: search + category filter + pricing filter + 85+ tool cards
    │   └── certificates/
    │       ├── page.tsx            ✅ Index: 7 track certificate links
    │       └── [slug]/page.tsx     ✅ Printable certificate (localStorage progress check)
    │
    ├── components/
    │   ├── Nav.tsx                 ✅ Topics dropdown + Tracks + Glossary + Interview Prep + Cheat Sheets + Tools
    │   ├── Footer.tsx              ✅ 4-col + NewsletterSignup + all 7 tracks
    │   ├── Mermaid.tsx             ✅ Fullscreen button
    │   ├── Callout.tsx             ✅ 5 variants, dark-mode safe
    │   ├── ResourceList.tsx        ✅ lang badge (en/hi/ta/te)
    │   ├── LevelBadge.tsx          ✅
    │   ├── MarkComplete.tsx        ✅ localStorage ma_completed
    │   ├── BookmarkButton.tsx      ✅ localStorage ma_bookmarks
    │   ├── ShareButtons.tsx        ✅ LinkedIn + Twitter/X popup
    │   ├── RelatedLessons.tsx      ✅ Server component: 3 related lessons
    │   ├── CategoryProgress.tsx    ✅
    │   ├── ReadingProgress.tsx     ✅ scroll-driven top bar
    │   ├── TableOfContents.tsx     ✅ Desktop (LEFT) + Mobile
    │   ├── ThemeToggle.tsx         ✅ no-flash
    │   ├── Quiz.tsx                ✅ global MDX component
    │   ├── NewsletterSignup.tsx    ✅
    │   ├── TrackCard.tsx           ✅
    │   ├── TrackLessonList.tsx     ✅
    │   └── ScrollToTop.tsx         ✅
    │
    ├── lib/
    │   ├── curriculum.ts           ✅ 241 lessons, 15 categories, em dashes fixed
    │   ├── utils.ts                ✅ cn()
    │   ├── progress.ts             ✅ localStorage helpers
    │   ├── tracks.ts               ✅ 7 learning tracks
    │   ├── glossary.ts             ✅ 148 marketing terms
    │   ├── quizzes.ts              ✅ 3-5 questions for 20 lessons (Phase 8 will expand to all)
    │   └── tools-directory.ts      ✅ 85+ tools, 11 categories, PricingTier + ToolCategory types
    │
    └── content/                    ✅ 308 MDX files, all reviewed
        ├── fundamentals/           19 ✅
        ├── seo/                    20 ✅
        ├── paid-ads/               21 ✅
        ├── growth/                 19 ✅
        ├── social/                 18 ✅
        ├── content/                19 ✅
        ├── email/                  25 ✅
        ├── analytics/              27 ✅
        ├── tools/                  30 ✅
        ├── psychology/             21 ✅
        ├── copywriting/            19 ✅
        ├── cro/                    18 ✅
        ├── brand-strategy/         19 ✅
        ├── product-marketing/      16 ✅
        └── ai-marketing/           17 ✅
```

---

## Session History

| Session | Date | Key Accomplishments |
|---|---|---|
| 1 | 2026-06-14 | Project scaffolded, all infrastructure, curriculum with 126 lessons |
| 2 | 2026-06-14 | Lesson reader, search, MarkComplete, CategoryProgress, BACKLOG, README, started MDX workflow |
| 3 | 2026-06-14 | Expanded 126 to 165 lessons. Fundamentals + SEO MDX largely complete |
| 4 | 2026-06-14 | SEO 20/20, paid-ads 14/18, total 49/165. Account-switch prep |
| 5 | 2026-06-14 | GitHub push + Vercel deploy. 2 build failures fixed. AGENTS.md rewritten. |
| 6 | 2026-06-14 | Psychology category added. Full UX overhaul: Nav dropdown, homepage rebuild, LEFT ToC, prose system. 4 more categories. Total: 241 lessons across 15 categories. |
| 7 | 2026-06-14 | Fixed 49 MDX comma errors. Dark mode, OG images, RSS, reading time, multilingual resources. |
| 8 | 2026-06-14 | Write A + B complete. Search filters, glossary (80+ terms), quizzes (20 lessons), newsletter, 4 learning tracks. |
| 9 | 2026-06-14 | All reviewed content committed + pushed. Review Remaining A launched (92 lessons). |
| 10 | 2026-06-14 | Review C (56 lessons) + Review D (89 lessons) launched. All 145 remaining lessons in active review. |
| 11 | 2026-06-14 | Review C + D complete. Em dash sweep: 89 files. All 15 categories fully reviewed. |
| 12 | 2026-06-14 | 5 parallel workflows: Tone-down A+B, QnA A+B+C. Interview Q&A added to all 308 lessons. |
| 13 | 2026-06-14 | Phase 7 workflow: ShareButtons, BookmarkButton, RelatedLessons, /interview-prep, /cheat-sheets, /certificates, /bookmarks, PWA (manifest.json + sw.js), /interview-questions, /digital-marketing-cheat-sheet. Glossary expanded to 148 terms, tracks expanded to 7. |
| 14 | 2026-06-14 | Em dash fix: 127 instances across curriculum.ts + 6 files. Build fix: cheat-sheets/[category] split into server page.tsx + client PrintButton.tsx (Vercel build error). /tools directory: 85+ tools, 11 categories, search + pricing + category filters. All pushed. |

---

## Key Code Snippets

### MDX lesson template
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Intermediate",
  summary: "One-sentence description with no em dashes.",
};

# Lesson Title

Hook paragraph explaining why this matters.

## What It Actually Is

Plain-English definition with one concrete example.

## Why It Matters (with data)

Real 2024/2025 stats with [source links](https://url).

## How It Works

Concrete steps in bullets or numbered list.

<Callout type="example">
Real brand example with specific numbers and year.
</Callout>

## Common Mistakes

- Mistake 1
- Mistake 2

## Key Takeaways

- Takeaway 1
- Takeaway 2

## Interview Q&A

**Q: Common interview question about this topic?**
A: Concise answer with specific detail.

**Q: Second interview question?**
A: Answer.

<ResourceList resources={[
  { title: "Source", url: "https://...", type: "article", free: true },
  { title: "WsCube Tech - Topic (Hindi)", url: "https://www.youtube.com/@WsCubeTech", type: "video", lang: "hi", free: true, note: "Top Hindi digital marketing channel" },
  { title: "Mr Digital Marketing Tamil - Topic", url: "https://www.youtube.com/channel/UCQpgJad_YaHAW_CVFTBNyiw", type: "video", lang: "ta", free: true, note: "Tamil digital marketing tutorials" },
  { title: "ODMT Telugu - Topic", url: "https://www.youtube.com/@ODMTtelugu", type: "video", lang: "te", free: true, note: "Telugu digital marketing training" },
]} />
```

### Lesson reader (current layout)
```tsx
// ToC is on the LEFT. ShareButtons + BookmarkButton are in the header.
// RelatedLessons is above prev/next nav. Quiz is above RelatedLessons.
<div className="flex gap-12">
  <TableOfContentsDesktop />        // LEFT sticky
  <div className="flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
    // breadcrumb
    // header: level badge + reading time + title + summary
    // MarkComplete + BookmarkButton
    // ShareButtons
    // TableOfContentsMobile
    // <article><LessonContent /></article>
    // Quiz (if questions exist for this lesson)
    // RelatedLessons
    // prev/next nav
    // back link
  </div>
</div>
```

### Tool data shape (tools-directory.ts)
```ts
type MarketingTool = {
  name: string;
  description: string;
  category: ToolCategory;   // "SEO" | "Paid Advertising" | "Analytics" | etc.
  pricing: PricingTier;     // "Free" | "Freemium" | "Paid" | "Open Source"
  url: string;
  emoji: string;
  tags: string[];
  popular?: boolean;
  note?: string;
};
```
