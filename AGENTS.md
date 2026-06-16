<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes, APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Marketing Academy, Agent Rules

> These rules are non-negotiable. Every rule below was learned from a real build failure or bug in this project. Violating any of them will break the build or the site.

---

## MDX Lesson Files

### Rule 1, No unescaped double quotes inside lessonMeta strings
**BROKEN (will crash Vercel build):**
```mdx
export const lessonMeta = {
  summary: "Why "better" loses to "different".",
}
```
**FIXED, use single quotes for inner quotes:**
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

### Rule 2, Use `export const lessonMeta`, NOT YAML frontmatter
```mdx
// CORRECT
export const lessonMeta = {
  title: "Lesson Title",
  level: "Beginner",   // must be exactly: "Beginner" | "Intermediate" | "Advanced"
  summary: "One sentence. Use single quotes for any inner quotes.",
};

// WRONG, YAML frontmatter does NOT work with @next/mdx
---
title: Lesson Title
---
```

### Rule 3, Global components are available without imports
These work in every MDX file, do NOT import them:
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

### Rule 4, params is a Promise, always await it
```tsx
// CORRECT
type Props = { params: Promise<{ category: string; lesson: string }> }
const { category, lesson } = await params;

// WRONG, Next.js 14 style, breaks in 16
const { category, lesson } = params;
```

### Rule 5, NO Tailwind `dark:` classes, use CSS variables only
```tsx
// CORRECT
<div className="bg-[var(--background)] text-[var(--foreground)]">

// WRONG, dark: classes do nothing in this project
<div className="bg-white dark:bg-gray-900">
```

Available CSS variables: `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--accent`, `--accent-foreground`, `--card`

### Rule 6, `@/*` alias maps to `./src/*` only, mdx-components.tsx is at project ROOT
```
tsconfig.json: "paths": { "@/*": ["./src/*"] }

@/lib/curriculum     → src/lib/curriculum.ts        ✅
@/components/Nav     → src/components/Nav.tsx        ✅
@/mdx-components     → src/mdx-components.tsx        ❌ DOES NOT EXIST
```
`mdx-components.tsx` is at the project root. Next.js picks it up automatically. **Never import it.**

### Rule 7, TypeScript: use definite assignment `!`, not JSX `!`
```tsx
// CORRECT, declare with ! then assign inside try
let LessonContent!: React.ComponentType;
LessonContent = mod.default;
<LessonContent />

// WRONG, can't use ! in JSX tag position
<LessonContent! />   // SyntaxError
```

### Rule 8, Mermaid must be client-side only
```tsx
"use client"
// Dynamic import inside useEffect only, never at module level
```

### Rule 9, lucide-react v1.18 has no `Youtube` or `Github` icon
```tsx
import { Play } from "lucide-react";         // use Play instead of Youtube
import { ExternalLink } from "lucide-react"; // use ExternalLink instead of Github
```

### Rule 10, next.config.ts plugin format, string/tuple, not function
```ts
// CORRECT
remarkPlugins: [["remark-gfm", {}]],

// WRONG, function form breaks @next/mdx
remarkPlugins: [remarkGfm],
```

---

## Content Quality Rules

### Rule 11, Every lesson MUST include real research
Before writing any lesson:
1. Run 2–3 WebSearch queries, include "2024" or "2025" in at least one
2. WebFetch the best result
3. Include real stats, dates, and source citations in the lesson body

### Rule 12, Lesson file location
```
src/content/[category-slug]/[lesson-slug].mdx

Examples:
src/content/seo/keyword-research.mdx
src/content/growth/ab-testing.mdx
src/content/ai-marketing/rag-for-marketers.mdx
```
Category slugs: `fundamentals`, `seo`, `paid-ads`, `growth`, `social`, `content`, `email`, `analytics`, `tools`, `psychology`, `copywriting`, `cro`, `brand-strategy`, `product-marketing`, `ai-marketing`

### Rule 13, New global components available in MDX
In addition to Callout, Mermaid, ResourceList, the Quiz component is registered globally too. Do NOT import it.

### Rule 14, ResourceList lang field
```mdx
{ title: "WsCube Tech (Hindi)", url: "https://...", type: "video", lang: "hi", free: true, note: "..." },
{ title: "Tamil channel", url: "https://...", type: "video", lang: "ta", free: true },
```
Valid lang values: `"en"` | `"hi"` | `"ta"` | `"te"`, renders colored badge in ResourceList.

### Rule 15, Every lesson must end with 3 multilingual entries
The last 3 entries of every ResourceList must be:
```mdx
{ title: "WsCube Tech, [Topic] (Hindi)", url: "https://www.youtube.com/@WsCubeTech", type: "video", lang: "hi", free: true, note: "Top Hindi digital marketing channel" },
{ title: "Mr Digital Marketing Tamil, [Topic]", url: "https://www.youtube.com/channel/UCQpgJad_YaHAW_CVFTBNyiw", type: "video", lang: "ta", free: true, note: "Tamil digital marketing tutorials" },
{ title: "ODMT Telugu, [Topic]", url: "https://www.youtube.com/@ODMTtelugu", type: "video", lang: "te", free: true, note: "Telugu digital marketing training" },
```
CRITICAL: every resource object including the last one needs a trailing comma before `]} />`

### Rule 16, Lesson tone: encourage, don't overwhelm
Lessons must feel like a smart friend explaining something, not a textbook.
- **800-1200 words** of body content. A focused 900-word lesson beats a bloated 2000-word one.
- **Max 2 sentences per paragraph.** Third sentence? New paragraph or bullet point.
- **Short bullet lists: 3-6 items max.** If you have 10 bullets, you have 2 sections.
- **One idea per section.** No "additionally" / "furthermore" dumps.
- **End each section with momentum**, a short line that makes the reader want to continue.
- **Define jargon immediately** when introduced. Never use a term before explaining it.
- Goal: reader feels curious and confident after each section, not exhausted.

### Rule 17, NO `"use client"` + `generateStaticParams` in the same file
Next.js App Router forbids combining a Client Component directive with static param generation. This broke the Vercel build on 2026-06-14.

**BROKEN:**
```tsx
"use client"   // <-- at top
// ...
export function generateStaticParams() { ... }   // <-- in same file, BUILD FAILS
```

**FIXED, split into two files:**
```
page.tsx          // server component: has generateStaticParams + generateMetadata
ClientPart.tsx    // "use client": has the interactive behavior (print button, etc.)
```
The server page imports the client component. generateStaticParams stays in page.tsx only.

### Rule 18, Shared storage logic goes in `src/lib/`, not in components
When two or more components need to read/write the same localStorage key, extract the logic to a shared lib file. This prevents key-name drift and O(n^2) bugs from duplicated grouping logic.

```ts
// CORRECT, single source of truth
// src/lib/bookmarks.ts
export const BOOKMARK_KEY = "ma_bookmarks";
export function getBookmarks(): BookmarkEntry[] { ... }
export function saveBookmarks(entries: BookmarkEntry[]): void { ... }

// WRONG, duplicated in BookmarkButton.tsx AND BookmarksList.tsx
const STORAGE_KEY = "ma_bookmarks"; // in one file
const key = "bookmarks"; // drifted in another
```

### Rule 19, Use rgba semi-transparent overlays for color badges, not Tailwind color classes
Dark mode requires CSS-variable-aware colors. Tailwind `bg-green-100 text-green-800` ignores the theme.

```ts
// CORRECT, works in light and dark mode
const pricingStyles = {
  Free: { background: "rgba(22, 163, 74, 0.15)", color: "var(--foreground)", border: "1px solid rgba(22, 163, 74, 0.35)" },
};

// WRONG, hardcoded colors break dark mode
<span className="bg-green-100 text-green-800">Free</span>
```

### Rule 20, Server components with `metadata` export cannot use event handlers
A page that exports `metadata` is a Server Component. Event handlers (`onClick`, `onMouseEnter`, etc.) are forbidden. Use CSS hover via `<style dangerouslySetInnerHTML={{ __html: css }} />` instead.

```tsx
// CORRECT, inject CSS class via dangerouslySetInnerHTML
const hoverCSS = `.card:hover { border-color: var(--accent) !important; }`;
<style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
<div className="card" style={{ transition: "border-color 0.15s" }}>...</div>

// WRONG, breaks server component
<div onMouseEnter={() => setHover(true)}>...</div>
```

### Rule 21, Interview answer strings use `\n\n` for paragraph breaks
Interview Q&A answers in `src/lib/interview-questions.ts` use the literal 4-character escape sequence `\n\n` as a paragraph separator inside the `a:` string field. The renderer in `src/app/interview-questions/[category]/page.tsx` splits on `\n\n` at runtime to render each paragraph as a `<p>` tag.

When adding new Q&As, write multi-paragraph answers as:
```ts
a: "First paragraph here.\n\nSecond paragraph here.\n\nThird paragraph if needed.",
```

Do NOT use actual newline characters inside the string, only the literal `\n\n` escape sequence. Do NOT instruct an LLM agent to insert `\n\n` paragraph breaks into TypeScript source: agents produce real newline characters (JSON `\n`), not the 4-char literal. Use a Python script with `r'\n\n'` as the joiner if bulk-splitting answers.

### Rule 22, XP/Engagement system: localStorage key, event bus, and call pattern
The XP system lives in `src/lib/engagement.ts`. Key constants and patterns that MUST be followed:

**localStorage key:** `"ma_engagement"` (defined in engagement.ts, import it, never hardcode it)

**Adding XP from a component:**
```ts
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";

const newState = addXP("complete" | "quiz" | "bookmark", lessonId);
const unlocked = checkAchievements(newState);
window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
```
`checkAchievements()` is called OUTSIDE `addXP()` because it needs cross-cutting localStorage state (completions, bookmarks) not available inside the pure XP function.

**Reactive components** (StreakBadge, AchievementToast) listen to `ENGAGEMENT_EVENT` via `window.addEventListener`. They do NOT poll localStorage on a timer.

**The event constants single source of truth is `src/lib/events.ts`:**
```ts
// src/lib/events.ts, add all CustomEvent name constants here
export const COMMAND_PALETTE_EVENT = "ma_cmd_palette";
```
Never export event constants from component files. Components re-export from `@/lib/events` if backward compat is needed.

**XP values:** complete=30, quiz=20, bookmark=5. 24h deduplication per lessonId per action type.

**Levels (7 total):** Marketing Newcomer (0) → Certified Polymath (last). `nextAt: Infinity` at max level, always guard `if (nextAt !== Infinity)` before rendering XP progress bar.

---

## Pre-Push Checklist

### Rule 23, Update docs before every push
Before any `git push`, update ALL of the following that are affected by the changes:

**`PROJECT_LOG.md`**
- "Last audited" session number at the top
- 60-Second Resume counts (lesson total, any changed stat)
- "Current State" table, per-category lesson counts if curriculum.ts changed
- Session History, add a row for the current session describing what was done
- Component/file descriptions in "What's Built & Verified" if a component changed significantly
- File inventory tree if new files were added or deleted

**`README.md`**
- Lesson count in the hero paragraph and the category table if curriculum.ts changed
- Features list if a new user-facing feature shipped
- Key Files table if a new lib/component/config file was added
- Routes table if a new page route was added

**`AGENTS.md`**
- Add a new numbered Rule for any non-obvious gotcha discovered during the session
- Update existing rules if their scope changed
- Never let a build failure or bug go undocumented

**What counts as "affected":**
- New route added → README Routes table + PROJECT_LOG session entry
- New component/lib file → README Key Files + PROJECT_LOG file inventory
- curriculum.ts lesson count changed → README table + PROJECT_LOG Current State table + 60-sec resume
- Bug found and fixed → AGENTS.md rule if non-obvious, PROJECT_LOG session entry
- Nav/Footer changed → PROJECT_LOG component description row

**Enforcement:** The commit message must reference what docs were updated. If no docs were changed in a code commit, state explicitly why none needed updating.

### Rule 24, Track quiz gate: full-page route, not a modal component
"Mark all complete" on a `/tracks/[slug]` page is gated behind a full-page quiz at `/tracks/[slug]/quiz`. There is NO `TrackQuizGate.tsx` component, it does not exist.

Architecture:
- **`src/components/TrackLessonList.tsx`**, renders a Link to `/tracks/[slug]/quiz` when `pct < 100`. Individual per-lesson checkboxes are NOT gated.
- **`src/components/TrackQuizPageClient.tsx`**, full-page client component at `/tracks/[slug]/quiz`. Pools ALL questions from every lesson in the track (shuffled), requires ≥80% correct to pass, then calls `markAll()` which calls `markComplete(lessonId)` for every lesson AND dispatches `ENGAGEMENT_EVENT` with XP for each completed lesson.
- Do NOT create `TrackQuizGate.tsx`, `openGate()`, or `gateQuestions`, these do not exist.

### Rule 25, Per-lesson quiz gate: MarkComplete scroll pattern (no modal)
Every lesson page is locked behind a quiz. There is NO `LessonQuizGate.tsx` modal, it does not exist.

Architecture:
- **`src/components/MarkComplete.tsx`**, `locked = !quizPassed && !done`. When locked, clicking the button calls `document.getElementById("quiz-section")?.scrollIntoView()`, it scrolls to the quiz, it does NOT open a modal.
- **`src/components/Quiz.tsx`**, the quiz section at the bottom of each lesson. On 4/4 correct, dispatches `QUIZ_PASSED_EVENT` via `window.dispatchEvent`. `MarkComplete` listens to `QUIZ_PASSED_EVENT` and calls `setQuizPassed(category, slug)` then `handleComplete()`.
- **`src/lib/quizzes.ts`** exports `getQuizPassed`, `setQuizPassed`, `QUIZ_PASSED_EVENT` (re-exported from events.ts), `QUIZ_PASS_KEY_PREFIX`, `quizStorageKey`, and `QUIZZES`. `setQuizPassed` writes `ma_quiz_pass_{category}_{slug}` to localStorage.
- All 393 lessons have entries in `QUIZZES`, never remove entries or make `QUIZZES[key]` return undefined for a registered lesson.
- Do NOT add `hasQuiz` prop back to `MarkComplete`, it was removed because all lessons now have quizzes.
- Do NOT create `LessonQuizGate.tsx`, `handleGatePass()`, or `onPass` callback, these do not exist.
