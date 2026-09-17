# Marketing Academy

A free, structured marketing education site — from complete beginner to advanced practitioner across every major discipline. No paywalls, no sign-up, no email required.

**Live:** https://marketing-academy-roan.vercel.app

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
```

## What's inside

642 lessons across 21 disciplines. Every lesson has real research with cited stats, company examples with real numbers, diagrams, a short quiz, and curated free resources (including Hindi, Tamil, and Telugu).

Disciplines: Fundamentals, SEO, Paid Ads, Growth, Social Media, Content, Email & Lifecycle, Analytics, Tools, Psychology, Copywriting, CRO, Brand Strategy, Product Marketing, AI in Marketing, Mental Models, PR & Communications, Events, Affiliate Marketing, Leadership & Career, and Legal & Compliance.

## Features

- **Lessons** — table of contents, reading progress, a quiz you pass to mark complete, and related-lesson suggestions
- **24 learning tracks** — curated paths like Solo Founder, B2B Marketer, AI-First Marketer, and Technical SEO
- **800+ practice projects** — hands-on exercises tied to lessons, each on its own page
- **Progress** — completion tracking, bookmarks, XP, daily streaks, achievements, and printable track certificates (saved in your browser)
- **Search** — Cmd/Ctrl+K command palette and fuzzy search across lessons, tracks, glossary, and tools
- **Reference** — a marketing glossary, a tools directory, printable cheat sheets, and interview Q&A
- **Optional accounts** — sign in to sync progress across devices (the site works fully without one)
- Dark mode, installable as a mobile app (PWA), RSS feed, and per-lesson social share

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** with CSS-variable theming
- **MDX** for lesson content
- **Fuse.js** search, **Mermaid** diagrams
- Deployed on **Vercel** (auto-deploys on push to `main`)

## Development

```bash
npm run dev          # dev server
npx tsc --noEmit     # type check
npm test             # test suite
npm run build        # production build
```

## Adding a lesson

1. Create `src/content/[category]/[lesson-slug].mdx`
2. Add an entry for it to that category in `src/lib/curriculum.ts`

Lessons use `export const lessonMeta` (title, level, summary) and can use global components — `<Callout>`, `<Mermaid>`, `<ResourceList>`, `<Quiz>`, `<DiagramBlock>` — without importing them.

## Project structure

```
src/
  app/         Routes (App Router)
  content/     Lesson MDX files, grouped by category
  components/  UI components
  lib/         Curriculum, tracks, glossary, tools, quizzes, progress
public/        Static assets, PWA manifest, service worker
```

## Deploy

Pushes to `main` auto-deploy to Vercel. The core site needs no environment variables. Optional accounts and cross-device sync add a few — see `.env.example`.
