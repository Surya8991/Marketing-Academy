# Marketing Academy

A free, structured marketing education site - from absolute beginner to advanced practitioner across every major discipline.

**Live:** [marketing-academy-roan.vercel.app](https://marketing-academy-roan.vercel.app)
**Repo:** [github.com/Surya8991/Marketing-Academy](https://github.com/Surya8991/Marketing-Academy)
**Dev:** `npm run dev` then open http://localhost:3000

---

## What This Is

270+ lessons across 15 disciplines. No paywalls, no drip sequences, no email required. Every lesson includes real research, company examples with specific numbers, Mermaid diagrams, and curated free resources in English, Hindi, Tamil, and Telugu.

| # | Category | Slug | Lessons |
|---|---|---|---|
| 1 | Marketing Fundamentals | `fundamentals` | 19 |
| 2 | SEO | `seo` | 20 |
| 3 | Paid Ads | `paid-ads` | 21 |
| 4 | Growth Marketing | `growth` | 19 |
| 5 | Social Media | `social` | 18 |
| 6 | Content Marketing | `content` | 19 |
| 7 | Email & Lifecycle | `email` | 21 |
| 8 | Analytics & Attribution | `analytics` | 28 |
| 9 | Marketing Tools | `tools` | 28 |
| 10 | Human Psychology | `psychology` | 20 |
| 11 | Copywriting | `copywriting` | 19 |
| 12 | Conversion Rate Optimization | `cro` | 18 |
| 13 | Brand Strategy | `brand-strategy` | 19 |
| 14 | Product Marketing | `product-marketing` | 16 |
| 15 | AI in Marketing | `ai-marketing` | 17 |

---

## Features

- **Lesson reader** - Left-side table of contents, reading progress bar, reading time estimate, prev/next navigation
- **Dark mode** - Manual toggle (Sun/Moon) with localStorage persistence and no flash on load
- **Search** - Client-side fuzzy search (Fuse.js) with category and level filter chips
- **Learning tracks** - 4 curated paths: B2B Marketer, E-commerce Growth, Solo Founder, AI-First Marketer
- **Glossary** - 80+ marketing terms with A-Z index and individual term pages
- **Lesson quizzes** - 3-5 questions at the bottom of 20 key lessons
- **Progress tracking** - Mark lessons complete, per-category progress bar (localStorage)
- **RSS feed** - `/feed.xml` with auto-discovery `<link>` in layout
- **OG images** - Dynamic per-lesson Open Graph images via edge function at `/api/og`
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

```
src/content/
├── fundamentals/
│   ├── what-is-marketing.mdx
│   └── 4ps-7ps.mdx
├── seo/
│   ├── keyword-research.mdx
│   └── ...
└── ...
```

Lessons use `export const lessonMeta` (not YAML frontmatter) and have access to three global components without any imports:

```mdx
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  summary: "One sentence. Use single quotes for any inner quotes.",
};

<Callout type="info">Works without importing.</Callout>
<Mermaid chart={`graph TD; A-->B`} />
<ResourceList resources={[...]} />
```

The full lesson registry is in `src/lib/curriculum.ts`. To add a lesson:
1. Create the `.mdx` file in `src/content/[category]/`
2. Add an entry to the category's `lessons` array in `curriculum.ts`

---

## Key Files

| File | Purpose |
|---|---|
| `src/lib/curriculum.ts` | Single source of truth - all lesson slugs, titles, levels |
| `src/lib/tracks.ts` | 4 learning track definitions |
| `src/lib/glossary.ts` | 80+ marketing term definitions |
| `src/lib/quizzes.ts` | Quiz questions for 20 key lessons |
| `mdx-components.tsx` | Global MDX component registry (must be at project root, not in src/) |
| `src/app/globals.css` | Tailwind v4 + CSS variable design system |
| `src/components/ThemeToggle.tsx` | Dark/light/system toggle with no-flash inline script |
| `src/app/api/og/route.tsx` | Edge function for dynamic OG images |
| `src/app/feed.xml/route.ts` | RSS feed |
| `AGENTS.md` | Non-negotiable build rules for AI agents |
| `PROJECT_LOG.md` | Full session history, gotchas, all pending tasks |

---

## Routes

| Route | What |
|---|---|
| `/` | Homepage with hero, category grid, learning tracks, featured lessons |
| `/learn` | All lessons browsable by category |
| `/learn/[category]` | Category page with Beginner/Intermediate/Advanced grouping |
| `/learn/[category]/[lesson]` | Lesson reader with ToC, quiz, prev/next |
| `/search` | Fuzzy search with category + level filters |
| `/tracks` | Learning tracks overview |
| `/tracks/[slug]` | Track detail with ordered lesson list |
| `/glossary` | A-Z marketing glossary |
| `/glossary/[slug]` | Individual term page |
| `/feed.xml` | RSS feed |
| `/sitemap.xml` | Auto-generated sitemap (lessons with MDX only) |
| `/api/og` | Dynamic OG image endpoint |
| `/api/newsletter` | Newsletter signup (connect to your email service) |

---

## Deploy

Auto-deploys to Vercel on every push to `main`. No environment variables needed.

To connect newsletter to an email service, edit `src/app/api/newsletter/route.ts` - it has a `// TODO` comment marking the integration point.
