# Marketing Academy — Master Project Log

> **ACCOUNT-SWITCH PROOF. Read every section before touching any code.**
> Last audited: 2026-06-14 (Session 4). Every ✅ item has been verified as correct in this session.

---

## ⚡ 60-Second Resume (new session starts here)

```
1. cd D:\Coding\marketing-academy
2. Count MDX files: ls src/content/**/*.mdx (PowerShell: (Get-ChildItem src/content -Recurse -Filter *.mdx).Count)
3. Find first 🔴 row in the "MDX Progress" table below
4. Launch the workflow to write missing lessons (see "Exact Next Steps" section)
```

**Do NOT:**
- Run `npm install` again — everything is installed
- Recreate any ✅ file below — it already exists and is correct
- Use Tailwind `dark:` classes — use CSS variables for dark mode (see Gotchas)
- Use YAML frontmatter in MDX — use `export const lessonMeta = {...}` instead
- Import `useMDXComponents` from `@/mdx-components` — that path does NOT exist (`@/*` maps to `./src/*` but mdx-components.tsx is at the PROJECT ROOT, not in src/)
- Write `<ComponentName! />` in JSX — use `let x!: Type` declaration instead (definite assignment assertion)

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

### 8. MDX lesson format — always use `export const lessonMeta`, NOT YAML frontmatter
```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  summary: "One-line description.",
};

# Lesson Title

Content here...
```

### 9. Global MDX components — Mermaid, Callout, ResourceList
These are registered in `mdx-components.tsx` and available in ALL MDX files without imports:
```mdx
<Callout type="info">This works in any MDX file.</Callout>

<Mermaid chart={`graph TD; A-->B`} />

<ResourceList resources={[
  { title: "Resource Name", url: "https://...", type: "article", free: true }
]} />
```

### 10. Curriculum — `getLessonNav` returns `categorySlug` on nav items
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
