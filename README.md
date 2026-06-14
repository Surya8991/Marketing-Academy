# Marketing Academy

A free, structured marketing education site — from absolute beginner to advanced practitioner across every major discipline.

**Live:** [marketing-academy.vercel.app](https://marketing-academy.vercel.app) *(once deployed)*  
**Dev:** `npm run dev` → http://localhost:3000

---

## What This Is

165 lessons across 10 disciplines. No paywalls, no drip sequences, no email required. Just good marketing education in one place.

| # | Category | Lessons |
|---|---|---|
| 🎯 | Marketing Fundamentals | 16 |
| 🔎 | SEO | 20 |
| 💰 | Paid Ads | 18 |
| 🚀 | Growth Marketing | 16 |
| 📱 | Social Media Marketing | 18 |
| ✍️ | Content Marketing | 15 |
| 📧 | Email & Lifecycle | 14 |
| 📊 | Analytics & Attribution | 16 |
| 🛠️ | Marketing Tools | 15 |
| 🤖 | AI in Marketing | 17 |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 + CSS variables for theming
- **Content:** MDX with `@next/mdx` — lessons are `.mdx` files in `src/content/`
- **Search:** Fuse.js client-side fuzzy search
- **Diagrams:** Mermaid (client-side, dark-mode aware)
- **Icons:** Lucide React

---

## Development

```bash
# Install (already done — skip if node_modules exists)
npm install

# Dev server
npm run dev

# Type check
npx tsc --noEmit

# Build
npm run build
```

---

## Content Structure

Each lesson is an MDX file at `src/content/[category]/[slug].mdx`:

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

Lessons use `export const lessonMeta = {...}` (not YAML frontmatter) and have access to three global components: `<Callout>`, `<Mermaid>`, `<ResourceList>`.

The full lesson registry lives in `src/lib/curriculum.ts`. Adding a new lesson requires:
1. Create the `.mdx` file in the right `src/content/[category]/` folder
2. Add an entry to the category's `lessons` array in `curriculum.ts`

---

## Key Files

| File | Purpose |
|---|---|
| `src/lib/curriculum.ts` | Single source of truth — all 126 lesson slugs, titles, levels |
| `src/app/learn/[category]/[lesson]/page.tsx` | Lesson reader — loads MDX dynamically |
| `src/app/search/page.tsx` | Client-side Fuse.js search |
| `mdx-components.tsx` | Global MDX component registry (must be at project root) |
| `src/app/globals.css` | Tailwind v4 + CSS variable design system |
| `PROJECT_LOG.md` | Full session history, gotchas, next steps |
| `BACKLOG.md` | Future topics and expansion ideas |

---

## Deploy

Push to GitHub and connect to Vercel. No environment variables needed — everything is static.

```bash
# Or deploy directly
npx vercel --prod
```
