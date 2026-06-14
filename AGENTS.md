<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Marketing Academy — Agent Rules

> These rules are non-negotiable. Every rule below was learned from a real build failure or bug in this project. Violating any of them will break the build or the site.

---

## MDX Lesson Files

### Rule 1 — No unescaped double quotes inside lessonMeta strings
**BROKEN (will crash Vercel build):**
```mdx
export const lessonMeta = {
  summary: "Why "better" loses to "different".",
}
```
**FIXED — use single quotes for inner quotes:**
```mdx
export const lessonMeta = {
  summary: "Why 'better' loses to 'different'.",
}
```
**OR escape them:**
```mdx
export const lessonMeta = {
  summary: "Why \"better\" loses to \"different\".",
}
```
The MDX parser (acorn) treats unescaped `"` inside a double-quoted string as string termination. The build fails with `SyntaxError: Unexpected token`. This broke the first Vercel deploy.

### Rule 2 — Use `export const lessonMeta`, NOT YAML frontmatter
```mdx
// CORRECT
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // must be exactly: "Beginner" | "Intermediate" | "Advanced"
  summary: "One sentence. Use single quotes for any inner quotes.",
};

// WRONG — YAML frontmatter does NOT work with @next/mdx
---
title: Lesson Title
---
```

### Rule 3 — Global components are available without imports
These work in every MDX file — do NOT import them:
```mdx
<Callout type="info">Works out of the box.</Callout>
<Callout type="warning">...</Callout>
<Callout type="success">...</Callout>
<Callout type="tip">...</Callout>
<Callout type="example">...</Callout>

<Mermaid chart={`graph TD; A-->B`} />

<ResourceList resources={[
  { title: "Name", url: "https://...", type: "article", free: true },
  { title: "Video", url: "https://...", type: "video", free: true },
  { title: "Course", url: "https://...", type: "course", free: false },
  { title: "Docs", url: "https://...", type: "docs", free: true },
  { title: "Tool", url: "https://...", type: "tool", free: true },
]} />
```

---

## Next.js 16 Rules (App Router)

### Rule 4 — params is a Promise, always await it
```tsx
// CORRECT
type Props = { params: Promise<{ category: string; lesson: string }> }
const { category, lesson } = await params;

// WRONG — Next.js 14 style, breaks in 16
const { category, lesson } = params;
```

### Rule 5 — NO Tailwind `dark:` classes — use CSS variables only
```tsx
// CORRECT
<div className="bg-[var(--background)] text-[var(--foreground)]">

// WRONG — dark: classes do nothing in this project
<div className="bg-white dark:bg-gray-900">
```

Available CSS variables: `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--accent`, `--accent-foreground`, `--card`

### Rule 6 — `@/*` alias maps to `./src/*` only — mdx-components.tsx is at project ROOT
```
tsconfig.json: "paths": { "@/*": ["./src/*"] }

@/lib/curriculum     → src/lib/curriculum.ts        ✅
@/components/Nav     → src/components/Nav.tsx        ✅
@/mdx-components     → src/mdx-components.tsx        ❌ DOES NOT EXIST
```
`mdx-components.tsx` is at the project root. Next.js picks it up automatically. **Never import it.**

### Rule 7 — TypeScript: use definite assignment `!`, not JSX `!`
```tsx
// CORRECT — declare with ! then assign inside try
let LessonContent!: React.ComponentType;
LessonContent = mod.default;
<LessonContent />

// WRONG — can't use ! in JSX tag position
<LessonContent! />   // SyntaxError
```

### Rule 8 — Mermaid must be client-side only
```tsx
"use client"
// Dynamic import inside useEffect only — never at module level
```

### Rule 9 — lucide-react v1.18 has no `Youtube` icon
```tsx
import { Play } from "lucide-react";  // use Play instead
```

### Rule 10 — next.config.ts plugin format — string/tuple, not function
```ts
// CORRECT
remarkPlugins: [["remark-gfm", {}]],

// WRONG — function form breaks @next/mdx
remarkPlugins: [remarkGfm],
```

---

## Content Quality Rules

### Rule 11 — Every lesson MUST include real research
Before writing any lesson:
1. Run 2–3 WebSearch queries — include "2024" or "2025" in at least one
2. WebFetch the best result
3. Include real stats, dates, and source citations in the lesson body

### Rule 12 — Lesson file location
```
src/content/[category-slug]/[lesson-slug].mdx

Examples:
src/content/seo/keyword-research.mdx
src/content/growth/ab-testing.mdx
src/content/ai-marketing/rag-for-marketers.mdx
```
Category slugs: `fundamentals`, `seo`, `paid-ads`, `growth`, `social`, `content`, `email`, `analytics`, `tools`, `ai-marketing`
