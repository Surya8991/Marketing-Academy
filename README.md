# Marketing Academy

A free, structured marketing education site - from absolute beginner to advanced practitioner across every major discipline.

**Live:** [marketing-academy-roan.vercel.app](https://marketing-academy-roan.vercel.app)
**Repo:** [github.com/Surya8991/Marketing-Academy](https://github.com/Surya8991/Marketing-Academy)
**Dev:** `npm run dev` then open http://localhost:3000

---

## What This Is

393 lessons across 15 disciplines. No paywalls, no drip sequences, no email required. Every lesson includes real research, company examples with specific numbers, Mermaid diagrams, interview Q&A, and curated free resources in English, Hindi, Tamil, and Telugu.

| # | Category | Slug | MDX Files |
|---|---|---|---|
| 1 | Marketing Fundamentals | `fundamentals` | 25 |
| 2 | SEO | `seo` | 26 |
| 3 | Paid Ads | `paid-ads` | 28 |
| 4 | Growth Marketing | `growth` | 24 |
| 5 | Social Media | `social` | 24 |
| 6 | Content Marketing | `content` | 25 |
| 7 | Email & Lifecycle | `email` | 31 |
| 8 | Analytics & Attribution | `analytics` | 33 |
| 9 | Marketing Tools | `tools` | 36 |
| 10 | Human Psychology | `psychology` | 26 |
| 11 | Copywriting | `copywriting` | 24 |
| 12 | Conversion Rate Optimization | `cro` | 22 |
| 13 | Brand Strategy | `brand-strategy` | 24 |
| 14 | Product Marketing | `product-marketing` | 22 |
| 15 | AI in Marketing | `ai-marketing` | 23 |
| | **TOTAL** | | **393** |

---

## Features

**Learning**
- **Lesson reader** - Left-side table of contents, reading progress bar, reading time estimate, prev/next navigation
- **Related lessons** - "You might also like" section at the bottom of every lesson
- **Lesson quizzes** - 4 questions at the bottom of 257 lessons; quiz must be passed (100%) to unlock Mark Complete
- **Progress tracking** - Mark lessons complete, per-category progress bar, bookmarks (all localStorage)
- **Learning tracks** - 7 curated paths: B2B Marketer, E-commerce Growth, Solo Founder, AI-First Marketer, Content Creator, Social Media Manager, Data-Driven
- **Progress certificates** - Printable completion certificate per track at `/certificates/[slug]`
- **XP + Streak system** - Earn XP for completing lessons (30), passing quizzes (20), bookmarking (5). Daily streak. 7 levels (Marketing Newcomer → Certified Polymath). Live badge in nav.
- **Achievements** - 10 unlockable badges with toast notification on unlock. Full gallery at `/achievements`
- **Skill Map** - `/skill-map`: 15 category cards sorted by your % complete with animated progress bars
- **Onboarding** - First-visit goal selector: pick a goal, get routed to the right learning track

**Discovery**
- **Command Palette** - Cmd/Ctrl+K fuzzy search across all 393 lessons, 216 glossary terms, 108 tools, and nav pages
- **Search** - Client-side fuzzy search (Fuse.js) with category and level filter chips
- **Glossary** - 216 marketing terms with A-Z index and individual term pages at `/glossary`
- **Tools directory** - 108 marketing tools across 11 categories with search, category, and pricing filters at `/tools`
- **Cheat sheets** - Printable per-category quick reference cards at `/cheat-sheets/[category]`

**Interview Prep**
- **Interview prep hub** - `/interview-prep` aggregates all categories with sample Q&A
- **Interview questions (2026)** - `/interview-questions`: 151 Q&As across 16 disciplines with scenario-based questions, updated for 2026. Covers behavioral, SEO, paid ads, content, analytics, email, growth, AI marketing, social, copywriting, CRO, brand strategy, product marketing, psychology, tools, and general/behavioral interview skills
- **SEO landing pages** - `/interview-questions` and `/digital-marketing-cheat-sheet` for organic search

**Sharing**
- **Share buttons** - LinkedIn and Twitter/X share on every lesson
- **Bookmarks** - Save lessons to `/bookmarks` (localStorage)
- **RSS feed** - `/feed.xml` with auto-discovery `<link>` in layout
- **OG images** - Dynamic per-lesson Open Graph images via edge function at `/api/og`

**Technical**
- **Dark mode** - Manual toggle (Sun/Moon) with localStorage persistence and no flash on load
- **PWA** - Installable on mobile: `public/manifest.json` + `public/sw.js` service worker
- **Multilingual resources** - Every lesson links to Hindi (WsCube Tech), Tamil, and Telugu YouTube channels
- **Newsletter signup** - Footer form with `/api/newsletter` endpoint (connect to your email service)
- **Sitemap** - Auto-generated, only includes lessons that have MDX files

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 + CSS variables for theming |
| Content | MDX via `@next/mdx` - lessons are `.mdx` files in `src/content/` |
| Search | Fuse.js (client-side fuzzy search) |
| Diagrams | Mermaid (client-side, dark-mode aware, fullscreen button) |
| Icons | Lucide React v1.18 |
| Deploy | Vercel (auto-deploy on push to main) |

---

## Development

```bash
# Dev server (node_modules already installed - skip npm install)
npm run dev

# Type check
npx tsc --noEmit

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
| `src/lib/curriculum.ts` | Single source of truth — all lesson slugs, titles, levels |
| `src/lib/tracks.ts` | 7 learning track definitions |
| `src/lib/glossary.ts` | 216 marketing term definitions |
| `src/lib/quizzes.ts` | Quiz questions (4 per lesson, 257 lessons covered) |
| `src/lib/tools-directory.ts` | 108 marketing tools with category/pricing data |
| `src/lib/bookmarks.ts` | Shared bookmark storage (BOOKMARK_KEY, getBookmarks, saveBookmarks) |
| `src/lib/progress.ts` | Lesson completion helpers (COMPLETED_KEY exported, getCompleted, markComplete) |
| `src/lib/engagement.ts` | XP/streak system (addXP, getEngagement, getCurrentLevel, ENGAGEMENT_EVENT) |
| `src/lib/achievements.ts` | 10 declarative badges (ACHIEVEMENTS array, checkAchievements) |
| `src/lib/commandIndex.ts` | Fuse.js index builder for Cmd+K palette |
| `src/lib/events.ts` | Shared CustomEvent name constants (COMMAND_PALETTE_EVENT) |
| `mdx-components.tsx` | Global MDX component registry at project root: Callout, Mermaid, ResourceList, Quiz, DiagramBlock |
| `src/app/globals.css` | Tailwind v4 + CSS variable design system |
| `src/components/ThemeToggle.tsx` | Dark/light/system toggle with no-flash inline script |
| `src/app/api/og/route.tsx` | Edge function for dynamic OG images |
| `src/app/feed.xml/route.ts` | RSS feed |
| `public/manifest.json` | PWA Web App Manifest |
| `public/sw.js` | Service worker: network-first for HTML, cache-first for hashed static assets |
| `vercel.json` | Security headers (CSP, HSTS, X-Frame-Options, etc.) |
| `AGENTS.md` | 23 non-negotiable build rules for AI agents (incl. Rule 23: pre-push doc checklist) |
| `PROJECT_LOG.md` | Full session history, gotchas, file inventory, pending tasks |

---

## Routes

| Route | What |
|---|---|
| `/` | Homepage: hero, category grid, 7 learning tracks, featured lessons |
| `/learn` | All lessons browsable by category |
| `/learn/[category]` | Category page: Beginner/Intermediate/Advanced grouping + progress |
| `/learn/[category]/[lesson]` | Lesson reader: ToC, share, bookmark, related lessons, quiz, prev/next |
| `/search` | Fuzzy search with category + level filters |
| `/tracks` | 7 learning tracks overview |
| `/tracks/[slug]` | Track detail with ordered lesson list |
| `/glossary` | 216-term A-Z marketing glossary |
| `/glossary/[slug]` | Individual term page |
| `/bookmarks` | Saved lessons (localStorage) |
| `/tools` | 108 marketing tools with search + category + pricing filters |
| `/cheat-sheets` | Printable cheat sheet index (15 categories) |
| `/cheat-sheets/[category]` | Printable per-category cheat sheet |
| `/interview-prep` | Interview prep hub with category Q&A links |
| `/interview-questions` | SEO landing: digital marketing interview Q&A |
| `/digital-marketing-cheat-sheet` | SEO landing: key metrics, frameworks, glossary |
| `/skill-map` | 15 category cards sorted by your % complete — progress overview |
| `/achievements` | XP level, streak, and 10 unlockable achievement badges |
| `/settings` | Export / import / reset all learning progress as JSON |
| `/about` | About page: mission, builder profile, stats, tech stack, links |
| `/certificates` | Track completion certificate index |
| `/certificates/[slug]` | Printable track completion certificate |
| `/feed.xml` | RSS feed |
| `/sitemap.xml` | Auto-generated sitemap (lessons with MDX only) |
| `/api/og` | Dynamic OG image endpoint |
| `/api/newsletter` | Newsletter signup (connect to your email service) |

---

## Deploy

Auto-deploys to Vercel on every push to `main`. No environment variables needed.

To connect newsletter to an email service, edit `src/app/api/newsletter/route.ts` - it has a `// TODO` comment marking the integration point.
