# Marketing Academy - Master Project Log

> **ACCOUNT-SWITCH PROOF. Read every section before touching any code.**
> Last audited: 2026-06-13 (Session 6).

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

> Status: Phase 1 ✅ → Phase 2 ✅ → Phase 3 🔄 in progress → Phase 4 🔴 → Phase 5 ✅ live → Phase 6 🔴

### PHASE 1 - Infrastructure ✅ COMPLETE
All code, pages, components built. Next.js 16.2.9 + Tailwind v4 + @next/mdx + Mermaid + fuse.js.

### PHASE 2 - GitHub Push ✅ COMPLETE
Repo: https://github.com/Surya8991/Marketing-Academy
Branch: main. Auto-deploys to Vercel on push.

### PHASE 3 - MDX Content 🔄 IN PROGRESS

Each MDX lesson MUST include real research:
1. 2-3 WebSearch queries (include "2024" or "2025" in one)
2. WebFetch best source
3. Write with real stats, citations, current examples

**Active workflows:**
- `wf_231a3bfa-b05` - 116 lessons across original 10 categories + 116 verifiers
- `wf_d89f0c2a-abe` - 16 Human Psychology lessons + 16 verifiers
- **QUEUED** (launches when above complete): 60 lessons for Copywriting + CRO + Brand Strategy + Product Marketing

### PHASE 4 - Type Check & Build 🔴 NOT STARTED
After all 241 MDX files exist:
- `npx tsc --noEmit` - 0 errors expected
- Vercel auto-deploys on every push

### PHASE 5 - Vercel Deploy ✅ LIVE
Live URL: **https://marketing-academy-roan.vercel.app**

Vercel files:
- `src/app/not-found.tsx` - custom 404 "lesson coming soon"
- `src/app/robots.ts` - allow all crawlers
- `src/app/sitemap.ts` - only includes lessons with real MDX (parallel check)
- `.gitattributes` - LF line endings

Every push auto-deploys within ~60 seconds.

**TODO after all content written:**
- Update `robots.ts` + `sitemap.ts` BASE constant to actual URL `marketing-academy-roan.vercel.app`
- Set custom domain (optional)
- Update README live URL

### PHASE 6 - Polish (after all content live) 🔴 FUTURE
| Step | What |
|---|---|
| 6.1 | Em-dash cleanup pass over all written MDX (replace `—` with `-`, `,`, `:`, or words) |
| 6.2 | Dark mode manual toggle (currently auto via OS) |
| 6.3 | OG images (`/api/og` with `@vercel/og`) |
| 6.4 | Search filter chips above results |
| 6.5 | Glossary route `/glossary/[term]` |
| 6.6 | Lesson quiz/assessment |
| 6.7 | RSS feed `/feed.xml` |
| 6.8 | B2B / E-commerce / Solo-founder track UIs (filtered subsets of existing 241 lessons) |
| 6.9 | Newsletter signup |
| 6.10 | Reading time estimate per lesson |

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
    │   ├── sitemap.ts          ✅ smart filter
    │   ├── learn/
    │   │   ├── page.tsx        ✅ Browse all 241 lessons
    │   │   └── [category]/
    │   │       ├── page.tsx    ✅ Category w/ level grouping + progress
    │   │       └── [lesson]/
    │   │           └── page.tsx  ✅ LEFT ToC + reading progress + MarkComplete
    │   └── search/
    │       ├── page.tsx        ✅ Fuse.js
    │       └── layout.tsx      ✅
    │
    ├── components/
    │   ├── Nav.tsx             ✅ Topics dropdown
    │   ├── Footer.tsx          ✅
    │   ├── Mermaid.tsx         ✅ Fullscreen button
    │   ├── Callout.tsx         ✅ Dark-mode safe tints
    │   ├── ResourceList.tsx    ✅
    │   ├── LevelBadge.tsx      ✅
    │   ├── MarkComplete.tsx    ✅
    │   ├── CategoryProgress.tsx ✅
    │   ├── ReadingProgress.tsx ✅
    │   └── TableOfContents.tsx ✅ Desktop (LEFT) + Mobile
    │
    ├── lib/
    │   ├── curriculum.ts       ✅ 241 lessons, 15 categories
    │   ├── utils.ts            ✅ cn()
    │   └── progress.ts         ✅ localStorage
    │
    └── content/                🔄 MDX being written by workflows
        ├── fundamentals/       13/16
        ├── seo/                20/20 ✅ COMPLETE
        ├── paid-ads/           14/18
        ├── growth/             2/16
        ├── social/             0/18
        ├── content/            0/15
        ├── email/              0/14
        ├── analytics/          0/16
        ├── tools/              0/15
        ├── psychology/         0/16  (NEW category)
        ├── copywriting/        0/16  (NEW category)
        ├── cro/                0/15  (NEW category)
        ├── brand-strategy/     0/16  (NEW category)
        ├── product-marketing/  0/13  (NEW category)
        └── ai-marketing/       0/17
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
| 6 | 2026-06-13 | Added Human Psychology category (16 lessons, 165→181). Launched 116-lesson + 16-psych MDX workflows in parallel. Full design + UX overhaul (Nav redo with Topics dropdown, homepage rebuild w/ Featured Lessons & Learning Paths, lesson reader w/ ToC on LEFT + reading progress + sticky nav, Footer added, prose system rewritten for dark-mode contrast, Mermaid fullscreen, Callout dark-mode fix). Added 4 more categories (Copywriting 16, CRO 15, Brand Strategy 16, Product Marketing 13) - total now **241 lessons across 15 categories**. Saved feedback memories: no em dashes, no Co-Authored-By trailer. |

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
