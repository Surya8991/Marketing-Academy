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
- **800-1200 words for a focused, single-concept lesson.** A lesson that's genuinely rich, real case studies with named numbers, a comparison table, a Mermaid diagram, a worked step-by-step example, legitimately runs longer, commonly 1300-2000 words in this codebase, and that's fine. Session 68 measured all 642 lessons: only 34% land in the literal 800-1200 band, the rest skew longer because they carry real depth (the reference lesson `core-web-vitals.mdx` runs ~1800 words and is an intentional quality exemplar). **Don't mechanically trim a rich lesson just to hit 1200; don't pad a focused one just to hit 800.** The failure mode this rule actually guards against is a lesson under ~700 words with no real depth (a stub) or one that rambles past 2000 words repeating itself without adding new information, not length itself.
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
- **`src/components/TrackLessonList.tsx`**, renders a Link to `/tracks/[slug]/quiz` when `pct < 100`.

> ⚠️ **CORRECTION (supersedes the previous wording of this rule).** This rule used to read *"Individual per-lesson checkboxes are NOT gated."* That was written before Rule 25 locked the lesson page behind a quiz, and the two rules then contradicted each other. The ungated checkbox let a learner mark every lesson in a track complete, and collect full XP plus a certificate, without opening a single lesson. See `PROJECTS_PLAN.md` section 0.1 for the full write-up and the fix.
>
> **Per-lesson checkboxes in `TrackLessonList` MUST use the same gate as `MarkComplete`:**
> ```tsx
> const locked = !getQuizPassed(lesson.category, lesson.slug) && !done;
> ```
> When locked, clicking navigates to `/learn/{category}/{slug}#quiz-section` instead of toggling. Pass `sourceCategory` for cross-listed lessons per Rule 31, or the 13 `mental-models` lessons surfaced under `fundamentals` read the wrong key and stay permanently locked.
- **`src/components/TrackQuizPageClient.tsx`**, full-page client component at `/tracks/[slug]/quiz`. Pools ALL questions from every lesson in the track (shuffled), requires ≥80% correct to pass, then calls `markAll()` which calls `markComplete(lessonId)` for every lesson AND dispatches `ENGAGEMENT_EVENT` with XP for each completed lesson.
- Do NOT create `TrackQuizGate.tsx`, `openGate()`, or `gateQuestions`, these do not exist.

### Rule 25, Per-lesson quiz gate: MarkComplete scroll pattern (no modal)
Every lesson page is locked behind a quiz. There is NO `LessonQuizGate.tsx` modal, it does not exist.

Architecture:
- **`src/components/MarkComplete.tsx`**, `locked = !quizPassed && !done`. When locked, clicking the button calls `document.getElementById("quiz-section")?.scrollIntoView()`, it scrolls to the quiz, it does NOT open a modal.
- **`src/components/Quiz.tsx`**, the quiz section at the bottom of each lesson. On ≥80% correct (4 of 5, since Stage 10.1 — was 3 of 4 before), dispatches `QUIZ_PASSED_EVENT` via `window.dispatchEvent`. `MarkComplete` listens to `QUIZ_PASSED_EVENT` and calls `setQuizPassed(category, slug)` then `handleComplete()`.
- **`src/lib/quizzes.ts`** exports `getQuizPassed`, `setQuizPassed`, `QUIZ_PASSED_EVENT` (re-exported from events.ts), `QUIZ_PASS_KEY_PREFIX`, `quizStorageKey`, and `QUIZZES`. `setQuizPassed` writes `ma_quiz_pass_{category}_{slug}` to localStorage.
- All 516 lessons have entries in `QUIZZES`, never remove entries or make `QUIZZES[key]` return undefined for a registered lesson.
- Do NOT add `hasQuiz` prop back to `MarkComplete`, it was removed because all lessons now have quizzes.
- Do NOT create `LessonQuizGate.tsx`, `handleGatePass()`, or `onPass` callback, these do not exist.

### Rule 26 — SYNC_SECRET must be set as NEXT_PUBLIC_SYNC_SECRET for client auth
`/api/sync-proxy` verifies `x-sync-secret` header against `process.env.SYNC_SECRET`. The client reads `process.env.NEXT_PUBLIC_SYNC_SECRET` to send in this header. Both vars must be set in Vercel: `SYNC_SECRET` (server-only) AND `NEXT_PUBLIC_SYNC_SECRET` (same value, exposed to client). Without both, sync push/pull silently returns 401.

> ✅ **Resolved.** `/api/sync-proxy` and the `SYNC_SECRET`/`NEXT_PUBLIC_SYNC_SECRET` pair no longer exist in this codebase — the accounts-and-sync feature (2026-08-20) replaced the shared-secret proxy entirely with real per-user auth. Sync now lives at `/api/sync`, gated by `requireUser()` (a database session from Google sign-in via `src/auth.ts`), and writes to a per-user row in the app's own database (`src/server/db/`), not one shared global KV key. See Rule 77 for the new architecture (`PROGRESS_CHANGED_EVENT`, `progress-snapshot.ts`, `role`/`ADMIN_EMAILS`). Left here, annotated rather than deleted, per this file's standing convention (see Rule 36) — so a future reader doesn't reintroduce a shared-secret proxy thinking it's the established pattern.

### Rule 27 — `src/app/opengraph-image.tsx` lesson count is hardcoded
The root OG image uses a literal `"516+"` string (edge runtime cannot import `flatLessons()`). When the lesson count changes significantly, manually update the string in `src/app/opengraph-image.tsx` line 82 to match.

### Rule 28 — Mermaid: NEVER strip `<style>` in the DOMPurify sanitize config
`src/components/Mermaid.tsx` sanitizes Mermaid's SVG output with DOMPurify before injecting it. Mermaid v11 ships **all node fills and label colours inside a single diagram-scoped `<style>` element** embedded in the SVG. If DOMPurify removes it, every `<rect>` falls back to the SVG default `fill: black`, so nodes render as **solid black boxes with invisible labels** (this shipped to production and broke every diagram in both themes).

**BROKEN:**
```ts
FORBID_TAGS: ["script", "style"],   // <-- strips Mermaid's styles → black boxes
```
**FIXED:**
```ts
ADD_TAGS: ["foreignObject", "style"],  // keep <style>; DOMPurify still sanitizes its CSS
FORBID_TAGS: ["script"],               // only <script> is a tag-level threat here
```
The `<style>` is safe: it is diagram-`id`-scoped, DOMPurify sanitizes the CSS it contains, and the chart source is author-written MDX (not runtime user input). Forbid `<script>` and event-handler attrs (`onerror`, `onload`, …), never `<style>`.

### Rule 29 — Mermaid theme must follow `data-theme`, not `prefers-color-scheme`
The site theme is set by the `data-theme` attribute on `<html>` (see `ThemeToggle.tsx`), NOT the OS `prefers-color-scheme`. `Mermaid.tsx` must read `document.documentElement.getAttribute("data-theme")` to pick light/dark tokens and re-render via a `MutationObserver` on that attribute (with `matchMedia` only as the fallback for `"system"`/unset). Using `prefers-color-scheme` alone means diagrams don't re-render on the in-app theme toggle and mismatch colours when OS and site themes differ.

### Rule 30 — Mermaid node labels: write `\n` in MDX; `insertLabelBreaks()` turns it into a space, NOT a line break
Lesson MDX writes multi-line node labels like `A[Product\nWhat you sell]` inside the `<Mermaid chart={`...`}>` template literal. **JS evaluates that `\n` into a real newline character before Mermaid's parser ever runs** — Mermaid's own escape handling only recognizes the literal two-character `\n` sequence (as you'd get from a raw `.mmd` file), so it never fires here. Left unhandled, Mermaid's own label-text construction drops the raw newline entirely and words glue together with **zero separator** (e.g. "SegmentationDivide into groups"). This shipped across 74 lesson files / 611 labels before being caught.

**Do NOT try to fix this by converting the newline to a literal `<br/>` tag.** That was the first attempt and it fails silently: Mermaid renders labels inside an SVG `<foreignObject>` using XHTML-namespaced markup, and DOMPurify's namespace-confusion protection (an mXSS defense) strips ANY HTML-namespaced element there — verified this cannot be worked around via `ADD_TAGS`/`ALLOWED_TAGS`/`SANITIZE_DOM`/profile combination. A stripped `<br/>` contributes zero replacement characters, so the exact same glued-together bug reappears even though the fix "looks" correct.

`src/components/Mermaid.tsx`'s `insertLabelBreaks()` instead replaces the newline with a **literal space**, a bracket-depth-aware pass run on the chart string right before `mermaid.render()`. A space is plain text, not an element, so DOMPurify has nothing to strip — the label reads correctly as normal wrapped text (not forced onto exactly two lines like the visual source intent, but never glued). Do not remove this call, and do not attempt the `<br/>`/HTML-tag route again without first confirming DOMPurify can preserve it (it currently cannot). Continue writing labels as `A[Line one\nLine two]` in new lesson MDX — the component handles the conversion.

### Rule 31 — Cross-listed lessons: `sourceCategory` field, canonical URL, and localStorage keys
A lesson can appear in more than one category's UI without duplicating the MDX file. `LessonRef` in `src/lib/curriculum.ts` has an optional `sourceCategory?: string` field. When set, the entry is a **cross-reference**: the MDX file lives at `src/content/{sourceCategory}/{slug}.mdx`, not `src/content/{category}/{slug}.mdx`.

**Wiring (all handled in `src/app/learn/[category]/[lesson]/page.tsx`):**
- Look up the `LessonRef` from the current category, then compute `sourceCat = lessonRef?.sourceCategory ?? category`.
- Use `sourceCat` for: MDX dynamic import, reading-time source file read, `QUIZZES[\`${sourceCat}/${slug}\`]` lookup, `alternates.canonical` URL, and the `category` prop passed to `<MarkComplete>`, `<Quiz>`, and `<BookmarkButton>` so localStorage keys (`ma_complete_*`, `ma_bookmarks`, `ma_quiz_pass_*`) sync across both URLs.
- `articleLd.url` and breadcrumbs stay on the current-page `category` (both URLs are valid entry points; canonical handles SEO consolidation).

**Sitemap:** `src/app/sitemap.ts` skips entries where `sourceCategory` is set so only the canonical URL is emitted.

**Quiz keys:** live under the canonical `sourceCategory` (e.g. `"mental-models/pattern-recognition"`, not `"fundamentals/pattern-recognition"`). Do NOT create duplicate entries.

Current cross-listings: 13 lessons in the `mental-models` category are also referenced from `fundamentals` with `sourceCategory: "mental-models"`.

### Rule 32 — Track-level synthesis quizzes: `TRACK_QUIZZES` map in `quizzes.ts`
The tracks quiz page (`/tracks/[slug]/quiz`) pools two sources: per-lesson quizzes from `QUIZZES` (keyed by `${category}/${slug}`) AND optional track-level synthesis quizzes from `TRACK_QUIZZES` (keyed by track slug). Synthesis questions test cross-lesson application — scenarios where the learner must pick or combine multiple concepts — which no single lesson quiz can ask.

- Only add to `TRACK_QUIZZES` for tracks where cross-lesson synthesis meaningfully improves the assessment; most tracks work fine with pooled lesson quizzes alone.
- Same `Quiz` shape as regular quizzes (question, options[], correct, explanation).
- Currently populated: `mental-models` (10 questions) plus 13 tracks added in Session 67 (`technical-seo`, `ai-search-optimization`, `content-strategy`, `paid-ads-mastery`, `email-lifecycle-mastery`, `cro-mastery`, `analytics-mastery`, `copywriting-mastery`, `brand-strategy-mastery`, `psychology-of-marketing`, `pr-communications-mastery`, `growth-marketing-mastery`, `product-marketing-mastery`, 4-6 questions each).
- The 80% pass threshold applies to the combined pool.

### Rule 34 — Audit existing lessons before writing new ones for a track request
`src/lib/tracks.ts`'s `Track` type is just `{ slug, title, emoji, description, audience, duration, lessons: {category, slug, title}[] }` — a track is a **curated list pointing at existing lessons**, not a container that needs its own content. This codebase's categories are already deeply saturated (28-40 lessons each as of Session 67), so a request for a new "X Mastery Track" almost never needs new lesson content.

Before writing a single new `.mdx` file for a track request:
1. `grep -H '  title:\|  level:' src/content/{category}/*.mdx` for every plausible source category to see the full existing lesson list.
2. Build the track's lesson list from what already exists first (a track can pull lessons from multiple categories, e.g. `ai-search-optimization` mixes `seo` and `ai-marketing`).
3. Only write a new lesson for a topic with a genuinely confirmed zero-result grep across all plausible categories (verified this way for `mobile-first-indexing`, `https-security-seo`, `log-file-analysis`, `duplicate-thin-content`, `ai-search-visibility-metrics` in Session 67 — everything else that session, 13 tracks total, used only existing lessons).

Skipping this audit step and writing 10-15 new lessons per track wastes enormous effort duplicating content that already exists under a different lesson title.

### Rule 33 — Check for a stray leaked "thinking" line above `export const lessonMeta`
An LLM writing agent occasionally ships its own planning sentence as the first line of the MDX file, ABOVE the `lessonMeta` export, e.g. `Now I have real stats. Let me write the complete MDX file.` This renders as visible garbage text at the top of the live lesson page. Found and fixed in 2 files during the Session 66 audit (`fundamentals/mission-vision-values.mdx`, `psychology/sunk-cost-fallacy.mdx`).

Before trusting a newly-written lesson file, check that line 1 is either blank or `export const lessonMeta = {` — nothing else. A quick sweep across the whole library: `grep -rn "^Now I have\|^Good stats\|^Let me write\|^I'll write\|^Here's the" src/content/**/*.mdx` and manually confirm any hit isn't legitimate body prose before deleting it.

### Rule 35 — Converting an external private/proprietary doc set into public lessons requires explicit de-identification
Session 68 mined a user's private content-ops research doc (a personal LinkedIn/Instagram growth playbook) for genuinely well-sourced, generalizable 2026 platform-algorithm research (post-length studies, link-penalty data, format performance) and turned it into 5 new public lessons. This is a legitimate, valuable source, third-party named studies are exactly the kind of real research Rule 11 calls for, but the source document also contained the user's real name, employer, salary target, banned campaign references, and personal proof points mixed in with the citable research.

**Before converting any external private document into a public lesson:**
1. Get explicit user confirmation that conversion (not just reporting) is wanted — never assume.
2. Strip every personal/proprietary specific: real names, employer names, financial targets, internal-only data, anything that reads as someone's private business strategy rather than a teachable, generalizable skill.
3. Keep every genuine third-party citation (named study, sample size, date) — these are the actual value and are not proprietary just because they were found inside a private document.
4. If a private doc's own illustrative example is useful, genericize it (a real handle like `@suryal` becomes a placeholder like `@yourhandle`; a specific person's SEO framework example stays as a generic teaching example since the technique itself, not the specific outcome, is what's being taught).

### Rule 36 — Any component calling `markComplete()` MUST check `getQuizPassed()` first
There are exactly two call sites today: `MarkComplete.tsx` (lesson page) and `TrackLessonList.tsx` (track page). A third that skips the check reopens the completion bypass documented in `PROJECTS_PLAN.md` 0.1, where a learner could mark a whole track complete, collect full XP and earn a certificate without opening a lesson.

```tsx
// REQUIRED before any markComplete() + addXP("complete", id) pair
const locked = !getQuizPassed(category, slug) && !done;
```

Use `sourceCategory` for cross-listed lessons (Rule 31). Two components performing the same state change through two different gates is the bug class here, not a missing feature.

**This was one of five interlocking integrity defects, all now fixed (PROJECTS_PLAN.md Stage 1, decided options recorded in section 16).** Recorded here so the fix isn't undone by someone reading this rule's original problem statement and assuming it's still open:
- ~~`src/app/certificates/[slug]/page.tsx` computes `pct` and never gates on it~~ — **Fixed.** `eligible = pct === 100 && trackQuizPassed` (16.6, decided option B); the certificate route shows a "not quite eligible yet" screen with a progress bar and a link to the track quiz until both conditions hold.
- ~~`Quiz.tsx` reveals the correct answer and explanation per question, then offers unlimited retry~~ — **Fixed.** Correctness and explanations only render on the post-submit "finished" screen (Stage 1.2); options and question order are freshly Fisher-Yates-shuffled on every mount and retry (Stage 1.3, Rule 40).
- ~~`TrackQuizPageClient` passes at 80% of a pooled question set~~ — **Fixed.** Passing the overall pool (≥80%) is necessary but not sufficient: a lesson is only marked complete if the learner also scored ≥50% (`PER_LESSON_MIN`) on that lesson's own questions within the pool (Stage 1.5); lessons that miss it are listed in a "need more review" panel instead of being silently certified.
- ~~`markIncomplete()` does not reverse XP, and `addXP` dedupes on a rolling 24h window~~ — **Fixed.** `addXP("complete", id)` now dedupes **permanently** per lesson id via `EngagementState.completedXpIds` (uncapped, unlike the 200-entry `xpLog`), not the old 24h rolling window (Stage 1.7, `src/lib/engagement.ts`). `"quiz"` and `"bookmark"` intentionally keep the 24h window, that farming surface was never the concern.

Verified 2026-08-19: re-read all four call sites end to end, no regressions found. `markProjectComplete()` (`src/lib/projects-progress.ts`, practice projects) is a **separate, deliberately ungated** function, projects don't feed certificates and are explicitly out of this rule's scope (see that file's docstring) — do not "fix" it into gated behavior without a real product decision first.

### Rule 37 — The projects layer is planned in `PROJECTS_PLAN.md`, read it before touching projects
`PROJECTS_PLAN.md` (root) is the active high-priority roadmap for the hands-on projects layer, the `/projects` hub, and concept scenarios in lessons. Section 0 carries the execution order. Do not design any part of that feature without reading it; a four-agent survey of 454 lessons is already recorded there and re-deriving it wastes a lot of effort.

Key constraints it establishes, so they are not accidentally violated:
- Projects ship as **per-category modules**, dynamically imported. Never one file (`quizzes.ts` at 1.91 MB is the precedent to avoid).
- `src/lib/projects-index.ts` is **generated**, never hand-edited.
- Projects have **six modes** plus an explicit `no-project` verdict. Forcing a mode onto a lesson that resists all of them certifies the wrong skill and is worse than shipping nothing.
- Every project needs a complete **free-tool path**; paid tools are upgrades only.
- Case companies need a **confirmed, cited exit**. Glossier, Away, CRED, Zerodha and Zoho are barred; none of them exited.

### Rule 38 — Every new lesson ships with its projects and a concept scenario in the same commit
Retrofitting practice material is what created a ~1.5M-word backlog across 642 lessons. From now on a lesson is not complete without at least one project (or an explicit, justified `no-project` mark) and one concept scenario showing where the concept was used and what it achieved.

### Rule 39 — Known lesson-quality backlog lives in `PROJECTS_PLAN.md` section 12
A full mechanical audit of all 642 lessons is recorded there with verified counts. Before starting any lesson-cleanup work, read it, both to avoid re-deriving the same findings and to avoid "fixing" the two recorded false positives.

**The important false positive:** 165 files write Mermaid node labels as `A[Line one\nLine two]`. That is the **correct required pattern** per Rule 30. Changing it reintroduces a bug that already shipped to production.

### Rule 40 — Never shuffle `Quiz.options[]` without recomputing `correct`
`correct` in `src/lib/quizzes.ts` is a **positional index** into `options[]`, not a value (`Quiz.tsx`: `const isCorrect = selected === question.correct`). Shuffling the options array without remapping `correct` silently mis-grades **all 3,210 questions across 642 lessons** (was 2,252 before Stage 10.1's 4→5-question expansion): no build error, no runtime error, no type error, since `correct` stays a valid number. Wrong answers get marked correct everywhere. The naive version looks correct in review, which is what makes it dangerous.

```ts
// CORRECT , pair, shuffle, recompute
const paired = q.options.map((text, i) => ({ text, wasCorrect: i === q.correct }));
// Fisher-Yates over paired ...
return { ...q, options: paired.map(p => p.text), correct: paired.findIndex(p => p.wasCorrect) };

// WRONG , correct now points at whatever landed in that slot
return { ...q, options: shuffle(q.options) };
```

Three further constraints:
- Use **Fisher-Yates**, not `sort(() => Math.random() - 0.5)`. The comparator trick is biased and on a 4-item array leaves the original order far more often than chance, which defeats the point when the goal is spam-resistance.
- **Shuffle after mount in `useEffect`**, never during render. `Math.random()` in the render path causes an SSR/client hydration mismatch, and this site already carries one.
- **Options may reshuffle any time; question order may only reshuffle on retry.** Saved quiz progress is `{ answers: boolean[], total }` indexed positionally, so reordering questions mid-session remaps saved answers onto the wrong questions. `handleRetry()` clears that state first, so retry is safe.

**Fixed** (was: `analytics/consent-mode` had an "All of the above" option; rewritten into a concrete statement in an earlier session). Re-audited the full expanded set after Stage 10.1's 4→5-question rollout (Session 85, Stage 10.4): zero "all/none of the above" option strings anywhere in `quizzes.ts`, across all 12,840 option strings (3,210 questions × 4 options each, up from 8,341 pre-expansion). No new position-dependent options were introduced by the 642 new-question batch (one per lesson).

### Rule 41 — Never import a large data module into a `"use client"` file
`Nav.tsx` is `"use client"` and imports `CATEGORIES` from `curriculum.ts`. Measured cost: a **148,426 B raw / 48,020 B gzip** chunk containing all 655 lesson `summary:` fields, shipped on **every route**, when Nav only uses `slug`, `title`, `emoji` and `lessons.length`. Export a slim index instead.

Verified counterexample worth knowing: `quizzes.ts` (now ~2.4 MB after Stage 10.1's 4→5-question expansion) and `lesson-resources.ts` (1.72 MB) correctly do **not** reach the client, because `Quiz.tsx` takes questions as a **prop**, the lesson page is a server component, and `TrackQuizPageClient` uses `import type`. Preserve those boundaries. A learner downloads ~5 questions, not 3,210.

### Rule 42 — Every `localStorage` access goes through its `src/lib` module
`ThemeToggle.tsx:18`, `OnboardingModal.tsx:25` and `LessonNotes.tsx:15` call raw `localStorage` with no try/catch. The first two render inside `layout.tsx`, a layout-level throw is not caught by `error.tsx`, and there is no `global-error.tsx` — so blocked site data (common corporate/Android default) shows Next's raw crash screen on **every page**. Every other storage module guards correctly. Rule 18 already required this; three files violate it.

Related: on a parse failure, **preserve the raw value** (`ma_engagement__corrupt_<ts>`) before writing defaults over it. `engagement.ts:63` and `progress.ts:26` currently replace unrecoverable-looking data with defaults and then overwrite the still-recoverable original.

### Rule 43 — Any ID built from a category must resolve `sourceCategory ?? category`
13 lessons are cross-listed (all in `fundamentals`, `sourceCategory: "mental-models"`). `MarkComplete` writes the `sourceCat` key, but `achievements.ts:85,108`, `SkillMapClient.tsx:31` and `CategoryProgress.tsx:18` all build `fundamentals/<slug>`. Consequences today:
- `fundamentals` is permanently capped at **27/40 (67.5%)** and "Category Clear" never fires for it.
- `all-lessons` checks `completed.size >= flatLessons().length` = **655**, but the maximum writable is **642**. "Marketing Polymath" is unreachable by exactly 13, for everyone, forever.

Verified counts: 655 `flatLessons()` entries, 13 cross-listed, **642 unique**, matching the 642 `.mdx` files on disk. Any user-facing lesson count must use the deduped 642, not 655.

### Rule 44 — No API route ships without auth and a shared-store rate limit
`/api/groq` has neither, and has **no callers anywhere in the app**. In-memory `Map` rate limiters (`groq/route.ts:21`, `geo-audit/route.ts:115`) do nothing on Vercel: state is per-lambda-instance, so limits are per-cold-start, not per-IP. Use a shared store.

Also: `NEXT_PUBLIC_SYNC_SECRET` (Rule 26) is inlined into a public JS chunk and is the **only** gate on `/api/sync-proxy`, which writes every user to one global KV key named `progress` — including their private `ma_note_*` content. Rule 26 documents a vulnerability, not a design. Treat it as such.

> ✅ **Resolved (the `/api/sync-proxy` half of this rule).** The shared-secret global-KV-key design described above no longer exists — the accounts-and-sync feature (2026-08-20) replaced it with `/api/sync`, gated by `requireUser()`'s real per-user database session, writing to a per-user row instead of one shared key. See Rule 26's own annotation and Rule 77 for the replacement architecture. The rest of this rule (the general "no API route ships without auth and a shared-store rate limit" principle, and `/api/groq`'s specific gap) is still live and unaddressed by this feature — don't read this annotation as closing the whole rule, only the sync-proxy example it originally cited.

### Rule 45 — Projects layer: `Archetype` and `ProjectMode` are two different axes, never conflate them
`src/lib/projects/types.ts` defines both. `Archetype` answers "what shape of thing is this project?" (teardown, audit, forecast, simulation, ...). `ProjectMode` answers "how is it practiced and graded?" (diagnostic, simulation, build, teardown, drill, calibration, no-project). Both happen to include a `"teardown"` value, that is a coincidence of vocabulary, not the same field. A project can legitimately have archetype `"teardown"` with mode `"drill"` (repeated timed teardown reps) just as easily as archetype `"teardown"` with mode `"teardown"` (one scored teardown). Always set both explicitly.

`"no-project"` is a valid, deliberate mode value, not a missing one, for lessons with no honest hands-on practice shape (e.g. `fundamentals/what-is-marketing`, `mental-models/opportunity-cost-thinking`). Give those lessons an explicit empty array (`"lesson-slug": []`), never force one of the other six modes onto them just to fill the slot, that certifies a skill the learner never actually exercised.

### Rule 46 — Projects layer: `conceptsCovered` must be derived from `step.concept` values, never free-written
`conceptsCovered` powers the `/projects` hub's concept filter (`ProjectsClient.tsx`) and `ConceptMap.tsx`'s lesson-page concept table. Session 72's Stage 8 pilot review-gate found 19 entries across `seo.ts`/`content.ts`/`fundamentals.ts` written as full sentences or numbered-step references ("94.74% of all keywords get 10 or fewer monthly searches", "Step 6: Write the 'will not publish' list") instead of concept names, which silently breaks the hub filter for those projects (the filter still renders, it just becomes useless, no error is thrown). Before authoring `conceptsCovered`, write the project's `steps[]` first, then set `conceptsCovered` to the deduped list of `step.concept` values, not a separately-imagined list. Projects with no `steps[]` (teardown/build-shaped) may use real MDX heading text instead, per Rule 15's existing anchor requirement, but never a prose sentence.

### Rule 47 — The `markComplete()` gate regression test does plain-text matching, not AST-aware, comments count
`tests/integrity-regression.test.ts`'s Rule 36 guard scans every `.ts`/`.tsx` file for the literal pattern `\bmarkComplete\s*\(` and fails if it appears outside the 3 allowed call sites — including inside a comment. `src/lib/projects-progress.ts`'s `markProjectComplete()` (a genuinely different, ungated-by-design function for practice-project completion, not lesson completion) tripped this test in Session 72 purely because its JSDoc said "matching progress.ts's `markComplete()`". Fixed by rewording the comment to describe the relationship without the literal call-shaped substring. When writing a doc comment that references the real `markComplete()` by name, do not write it as `markComplete()` with parens, describe it in prose instead (e.g. "the lesson-completion function in progress.ts").

### Rule 48 — `TeardownItem.specimen`/`answerKey`/`distractors` need a real renderer, not a prompt-only placeholder
A `teardownItems` project without a dedicated component silently discards its own best content. `ProjectCard.tsx`'s first pass rendered only `item.prompt` in a bare list, dropping `specimen` (the thing the learner is supposed to analyze), `answerKey` (the graded defects), and `distractors` (the plausible non-defects, mandatory per Rule 25 in `PROJECTS_PLAN.md` §11.9) entirely, making 8 of the pilot's 34 projects effectively content-free in the UI despite being fully authored in data. Fixed by `src/components/TeardownItemCard.tsx`: renders the specimen via `OutputSample`, gates the answer key behind a "Reveal answer key" toggle (collapsed by default, same principle as Quiz.tsx's post-submission reveal, showing defects immediately defeats the exercise), then lists defects (with severity/whyItMatters/lessonRef/owner) and distractors clearly separated. Any future project archetype with its own data shape (`stages`, future `drill`/`calibration` shapes) needs the same check before being called done: does every field the type defines actually reach the DOM?

### Rule 49 — Tailwind v4 `@theme inline` custom font keys must self-reference, not alias to a differently-named CSS variable
`globals.css`'s `@theme inline` block generates utility classes (`font-display`, `font-ui-sans`, `font-data`, ...) from `--font-*` theme keys. A key that references its OWN name resolves correctly at runtime:
```css
/* WORKS — self-referencing */
--font-display: var(--font-display);   /* next/font sets --font-display on <html> */
```
A key that aliases to a **differently-named** variable silently fails, `getComputedStyle` reads back an empty string for the theme key, and the generated utility class resolves to nothing (falls back to the inherited body font with zero warning or error):
```css
/* BROKEN — cross-referencing, --font-data resolves to "" at runtime */
--font-data: var(--font-data-mono);    /* next/font sets --font-data-mono, NOT --font-data */
```
This shipped once in the 2026-08-12 redesign: `font-display`/`font-ui-sans` worked immediately (both self-reference), `font-data` silently fell back to the system sans stack because its next/font `variable` option was named `--font-data-mono`. Fixed by renaming the next/font `variable` string in `layout.tsx` to match the `@theme inline` key exactly (`--font-data`), eliminating the cross-reference. When adding a new custom font via next/font, the `variable:` string passed to the font loader and the `@theme inline` key name must be IDENTICAL.

### Rule 50 — Dev-server changes to CSS variables, fonts, or `globals.css` need a full restart + fresh tab, not just a save
Turbopack's file watcher (this environment, Windows) intermittently does not trigger a recompile after editing `globals.css` or `layout.tsx`, and separately, `public/sw.js` (the site's own service worker, "cache-first for hashed static assets") aggressively caches old JS/CSS bundles in any tab that was open before the change. Symptom: `getComputedStyle` on a reloaded, even hard-reloaded, tab still reports the OLD color/font values after a source edit that `tsc`/lint/build all confirm compiled correctly. Neither a plain reload nor `window.location.reload(true)` reliably fixes this. The reliable sequence, in order: (1) stop the dev server, (2) `rm -rf .next`, (3) restart the dev server, (4) open a **genuinely new** browser tab (not a reload of an existing one) and navigate there, unregistering any service worker + clearing caches first if a fresh tab isn't practical. Skipping any step reintroduces stale reads that look exactly like a real bug in the code.

### Rule 51 — New lesson-page sections default to collapsed, not expanded
The lesson reader page (`src/app/learn/[category]/[lesson]/page.tsx`) accumulates sections over time (ToC, Quiz, Projects, Notes, Related Lessons, prev/next). By Session 74 it had grown enough that a new full-weight section was flagged as clutter. `ProjectList.tsx` is the reference pattern for any future addition: it is `"use client"`, defaults to `useState(false)`, and renders a single-line summary button (title + count + a derived stat, e.g. "2 projects · ~70 min total") instead of the full content, with the section's real `id` staying on the outer wrapper so ToC scroll-spy and deep links (`#projects-section`) still resolve correctly whether the section is open or not. Do not add a new always-expanded section to this page without a specific reason it needs to be seen immediately (Quiz is the one exception, since passing it gates `MarkComplete`).

Also: this page previously had THREE places showing "next lesson" (MarkComplete's own post-completion "Continue: {title}" CTA, a standalone "Up Next" card, and the Prev/Next nav grid at the bottom). The standalone card was removed as pure duplication. Before adding a new "what's next" or "related" affordance, check `MarkComplete.tsx`'s `nextHref`/`nextTitle` props and the bottom `<nav>` grid first, a third copy is very easy to add by accident since each was written in a different session.

> ⚠️ **Superseded in part by Rule 52 (Session 75).** The lesson page moved from "each section collapses itself independently" to a docs-style accordion group for Quiz/Projects/Notes specifically. The collapse-by-default *principle* here still holds for any future section; the *mechanism* for Quiz specifically changed to a native `<details>` wrapper, see Rule 52.

### Rule 52 — A gated `scrollIntoView` target must force-open its own collapsed container first, or the scroll silently does nothing
The lesson page's "Test Your Knowledge" section is a native `<details id="quiz-accordion" open>` wrapping `Quiz.tsx`, which itself renders `<div id="quiz-section">` in every branch (loading/in-progress/finished). `MarkComplete.tsx`'s locked-state click handler does `document.getElementById("quiz-section")?.scrollIntoView(...)` (Rule 25). A closed `<details>` element hides its children the same way `display: none` does (no box, per the HTML spec's UA stylesheet), so `scrollIntoView()` on a hidden descendant is a silent no-op, not an error, the button just appears to do nothing.

The quiz accordion defaults `open`, which covers the common case, but a learner can manually collapse it and then click the locked Mark Complete button. Fixed in `MarkComplete.tsx`'s `toggle()`:
```tsx
} else if (locked) {
  const acc = document.getElementById("quiz-accordion") as HTMLDetailsElement | null;
  if (acc) acc.open = true;
  document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
```
Any future gate that scrolls to a target living inside a `<details>`, a tab panel, or any other collapsible must force that container open first. Do NOT just add the `open` attribute and assume it stays open, users can and do close things.

### Rule 53 — `lessonMeta.relatedConcepts` is real, consumed data now, not a dead MDX field
Roughly 65 lessons' MDX files set `relatedConcepts: [...]` in `lessonMeta` (same-category slugs). For most of this project's history nothing in `src/**/*.{ts,tsx}` ever read that field, it only existed because lessons also hand-write a "## Related Concepts" prose section referencing the same slugs (PROJECTS_PLAN.md 12.4 tracked this as "exists in only 10% of lessons"). `src/components/RelatedConcepts.tsx` (Session 75) now reads it, resolving each slug against `getCategory(sourceCat).lessons` and rendering cards on the lesson page. It silently returns `null` for the ~577 lessons without the field, or if a listed slug doesn't resolve, never force a section to render.

This means the MDX-authored prose "## Related Concepts" section and the new card section can now both appear on the same lesson (duplicate information, not a bug, just unresolved content debt from before this field was wired up). Do not treat that duplication as something to silently "fix" by deleting either one without asking, the prose version is real lesson content and the card version is a separate structural affordance; reconciling them is a content cleanup task, not a quick edit.

### Rule 54 — Concept scenarios (`InAction`) are embedded directly in MDX, not build-time injected
PROJECTS_PLAN.md section 10.5's preferred design for "concept scenarios" (Stage 8.4) is a build-time rehype plugin that walks heading nodes and injects the component with **zero MDX edits**. Session 76 deliberately did not build that. Rule 10 already documents this repo's `@next/mdx` + Turbopack setup breaking on non-string-tuple plugin forms, and a novel custom rehype transform is real build-break risk with no test covering it.

Instead, `src/components/InAction.tsx` is a normal global MDX component (registered in root `mdx-components.tsx`, same pattern as `Callout`/`Quiz`), called directly from lesson MDX right after the heading it illustrates:

```mdx
## Crawlability

<InAction
  concept="Crawlability"
  companyName="Airbnb"
  where="..." why="..." what="..." benefit="..." timeframe="..." date="2017"
  source="https://..."
/>
```

This is PROJECTS_PLAN.md 10.5's own explicitly-sanctioned fallback ("a one-time scripted insertion into the MDX"), not an invented shortcut. `source` is required, never optional (10.9's Rule 20: every scenario needs a cited, dated, quantified outcome, no source, no ship). `companyId` is optional and does **not** require the company to be on the `case-companies.ts` roster, that exit-required rule is scoped to `Project.companyId` only (PROJECTS_PLAN.md 10.7). Migrating to build-time injection remains a possible future upgrade; do not attempt it without first confirming this repo's MDX toolchain actually supports a custom rehype plugin, the way Rule 28/29/30's Mermaid fixes each had to work around a real, verified toolchain constraint rather than an assumed one.

### Rule 55 — Any `toolName`/tool reference informally reused across projects must be added to `tools-directory.ts` for real
Session 76's structural audit found 4 projects using invented placeholder strings as `toolName` (`"Manual JSON-LD draft"`, `"Manual link map spreadsheet"`, `"Manual comparison sheet"`, `"Hosting or CDN bot-traffic dashboard"`), violating Rule 11 (project tools must reference `TOOLS` by name). Worse, fixing the obvious replacement (`"Google Sheets"`) revealed it wasn't in `tools-directory.ts` either, despite being used **20+ times already** across `email.ts`, `fundamentals.ts`, and even the original Session 73 pilot's `keyword-research` project, all of which passed review without anyone catching that the tool it names doesn't exist in the directory it's supposed to be a foreign key into.

```ts
// WRONG, invents a description instead of naming a real cataloged tool
toolName: "Manual JSON-LD draft",

// WRONG, "Google Sheets" is a real tool but isn't in TOOLS, so this still fails an FK check
toolName: "Google Sheets",   // <- was used 20+ times before anyone added the TOOLS entry

// CORRECT, add it to tools-directory.ts once, then every reference resolves
{ name: "Google Sheets", category: "SEO", pricing: "Free", url: "https://sheets.google.com", ... }
```

If a project step genuinely needs a generic productivity tool (a spreadsheet, a plain-text draft) rather than a marketing-specific one, add it to `tools-directory.ts` the first time, don't invent a description string and don't assume a plausible-sounding name is already cataloged just because you've seen it used before. A grep for the exact `name: "..."` string before authoring a new `toolName` reference is the only way to know for sure.

### Rule 56 — Content-authoring subagent fan-outs: inline a condensed reference pack, keep batches small
Session 76's 3-agent fan-out (4 lessons each, full reference-file reads) cost ~67-70k tokens/lesson. Two root causes, both avoidable without touching output quality:

1. **Duplicated reference reads.** Telling every agent to independently read `types.ts` (259 lines), `case-companies.ts` (2,230 lines), `tools-directory.ts` (1,115 lines) and 2 full example projects (~750 lines) means identical content gets read once per agent for no benefit. Inline a condensed version (trimmed type shape, one worked example, only the handful of companies actually relevant to that batch) directly into the prompt instead.
2. **Context compounding.** Every tool call re-sends the whole conversation so far. An agent authoring 4 lessons sequentially pays for lessons 1-3's accumulated research again on every call by lesson 4. Smaller batches (2 lessons/agent, not 4) cut this more than they cost in repeated setup, once (1) has already shrunk that setup.

Also: give research an explicit budget (e.g. 2 searches + 1 fetch per fact before moving to a better-sourced concept, not searching exhaustively), and skip agent-side `tsc --noEmit` self-checks, that compile is redundant with the one run once at merge time across the whole file. None of this is optional polish, it is the difference between ~830k tokens for 12 lessons (Session 76's actual cost) and a meaningfully lower number for the same quality bar on Stage 8.3a's next 18.

**This rule is implemented, not just written down.** `PROJECTS_AUTHORING_GUIDE.md` is the operational playbook (fill-in-the-blanks agent prompt with the condensed pack this rule describes already inlined), backed by three scripts that also close the two mechanical-mistake gaps Session 76 hit by hand: `scripts/get-track-batch-info.mjs` (which lessons need projects + their tier), `scripts/merge-projects-batch.mjs` (safe merge, refuses duplicate keys, backs up outside `src/lib/projects/`), `scripts/audit-projects.mjs` (the structural checks Rules 3/11/12/13/15 require, generalized past the one-off `seo.ts`-only version Session 76 first wrote). Use these for every future batch instead of re-deriving the process by hand.

### Rule 57 — `tests/projects-data.test.ts` is the gate for project data, and `tsc` is not
Every invariant that matters for a project (`companyId` resolves, `toolName` resolves, `lessonAnchor` is a real heading, mode agrees with which array is populated, all five runbook parts present, unique ids, no archetype reuse in a lesson, simulation options route somewhere real) is a **valid string as far as TypeScript is concerned**. `tsc --noEmit` passes on all of them. That is exactly how the Session 73 pilot shipped invented `toolName` placeholders that survived three sessions of review.

`tests/projects-data.test.ts` (added Session 76) enforces them on the real imported objects in `npm test`, which CI already runs. Extend it when a new invariant appears; do not add a new one-off script and rely on someone remembering to run it.

Two things learned writing it, both worth not repeating:

**1. The empty `no-project` array breaks terminator-based regex parsing.** A lesson with an explicit no-project verdict is written inline:
```ts
"what-is-marketing": [],
```
A regex that isolates a lesson body by scanning for a `\n  ],\n` terminator finds **no match** here, silently runs on into the *next* lesson's array, and then validates that lesson's projects against the wrong lesson's MDX headings. This produced confident, entirely false "lessonAnchor is not a real heading" failures. Any script parsing `src/lib/projects/*.ts` by text must slice from one top-level key to the **start of the next key**, never to a closing-bracket pattern. Better still, import the module and work on real objects.

**2. Do not assert style heuristics as invariants.** Two stricter `conceptsCovered` checks were written and both had to be removed because they failed on legitimate content: "must not end with a period" flags valid short declarative concept names, and "must exactly match a step's `concept` value" fails 6 of the 33 step-bearing projects that reasonably shorten a long step concept into a readable card label. A test that fails on correct data is worse than no test, because it teaches everyone to ignore the failure or, worse, to "fix" content that was right. Assert what is objectively checkable (it resolves, it exists, it is non-empty, it is unique) and leave phrasing to review.

### Rule 58 — A lesson's top-level project key must be quoted, even though `aeo: [` is valid JS
Every existing key in `src/lib/projects/*.ts` is written as `"lesson-slug": [`. An authoring agent (Session 77, AI Search Optimization batch) wrote its first lesson's key unquoted instead, `aeo: [`, because `aeo` happens to be a legal JS identifier and the object-literal shorthand is syntactically fine. `tsc`, `npm run build`, and the actual runtime `Record<string, Project[]>` all work correctly either way, JavaScript does not care.

The problem is everything downstream that parses these files by **regex instead of importing the module**: `scripts/merge-projects-batch.mjs`'s key-counter and `scripts/audit-projects.mjs`'s lesson-body slicer both match `^\s*"([a-z0-9-]+)":\s*\[`, quotes required. An unquoted key still gets its content merged correctly (the merge script copies raw text between markers, not key-by-key), but it silently drops out of the key COUNT the merge script prints and out of anything that lists "existing keys" by that regex, no error, no warning. Caught here only because the printed "N new lesson keys" total didn't match the number of lessons actually assigned to the batch.

```ts
// WRONG — valid JS, invisible to every regex-based script in this codebase
export const SEO_PROJECTS: Record<string, Project[]> = {
  aeo: [ /* ... */ ],
};

// CORRECT — matches every other key in every projects/*.ts file
export const SEO_PROJECTS: Record<string, Project[]> = {
  "aeo": [ /* ... */ ],
};
```
When authoring or reviewing a new batch, grep the merged file for an unquoted top-level key (`grep -nE '^\s{2}[a-z][a-z0-9-]*:\s*\[' src/lib/projects/*.ts`) as a matter of course, the same way Rule 57's empty-array trap gets checked. Fix by adding quotes; never rewrite the merge/audit scripts to also accept unquoted keys, that just adds a second valid style for the same field and reopens Rule 56's "cheap to introduce, expensive to catch" problem for something else.

**This bit twice in the same session, the second time pre-existing.** Immediately after documenting the case above, `copywriting.ts`'s `headlines` key turned out to already be unquoted from an earlier session, which is exactly why `get-track-batch-info.mjs`'s "already has projects" check missed it and listed `headlines` as one of the On-Page SEO Mastery track's "5 remaining" lessons needing new projects. An authoring agent caught it anyway by reading the target file directly instead of trusting the script's count, and flagged the conflict for a manual merge (append into the existing array, re-verify archetype-reuse across the combined set) rather than duplicating the key. Treat any "N lessons already have projects" count from tooling as a claim to spot-check against the real file when something about the count looks surprising, not as ground truth on its own.

### Rule 59 — A user-reported rendering bug may be the site's own service worker, not the code; check before diagnosing further

Session 78: a user reported a Mermaid diagram rendering too small to read on the live site. A fresh browser tab against the actual production deployment rendered the diagram correctly (SVG filled 93.5% of its container, matching local dev exactly), yet the tab that showed the bug had a live `ma-v2` service-worker cache registered for that origin. `public/sw.js` (Rule 50) caches JS/CSS bundles per-origin and does not distinguish `localhost` from production, so **any tab left open across a deploy, on any host, can silently keep serving a stale bundle indefinitely** — a plain reload or hard reload does not reliably fix it (Rule 50 already documents this for local dev; this confirms the same mechanism reproduces in a real user's browser against the live site).

Before spending time diagnosing a rendering bug a user reports that doesn't reproduce in a fresh load:

```js
// Run in the reporting tab's console (or via javascript_tool) before assuming the code is wrong
const regs = await navigator.serviceWorker.getRegistrations();
const cacheNames = await caches.keys();
// If regs/cacheNames are non-empty and a FRESH tab doesn't show the bug, it's the service worker, not the code.
```

Fix for the user: unregister the service worker and clear Cache Storage in that tab (DevTools → Application), or simply close it and open the page in a brand-new tab. Do not "fix" working code because one stale tab shows old behavior.

### Rule 60 — A practice project's own detail page, and the "always open in a new tab + own page" convention

Every practice project has its own statically-generated page at `/projects/[category]/[id]` (`src/app/projects/[category]/[slug]/page.tsx`, `generateStaticParams` from `PROJECTS_INDEX`). `src/lib/projects/lookup.ts`'s `getProjectByCategoryAndId()` does the server-side lookup — same dynamic-import + `<CATEGORY>_PROJECTS`-export-name-with-fallback logic the old `ProjectDrawer.tsx` used client-side (that file is deleted; this is its server-side replacement).

`ProjectCard.tsx` now takes a `variant: "preview" | "full"` prop (default `"preview"`):
- `"preview"` (used by `ProjectList.tsx` on the lesson page): renders the header/summary only, with an "Open project" link to `/projects/{category}/{id}` — requires a `category` prop, threaded down from the lesson page's `sourceCat`. Never expands inline anymore.
- `"full"` (used only by the dedicated project page): renders the header plus the complete body (steps/stages/teardownItems, tool stack, dataset link, success criteria), always expanded, no toggle.

**Every path that lets a learner open a specific project must link to `/projects/{category}/{id}` with `target="_blank" rel="noopener noreferrer"`, never open an inline expand or a modal/drawer.** This applies regardless of entry point — the lesson page's Project List and the `/projects` hub both link to the exact same page. Do not reintroduce a drawer or inline-expand pattern for projects; it was deliberately removed by explicit user request so a project always opens in its own page and tab.

**Adding a third page that opens a lesson or a project only counts as done once the link target is confirmed, not once the href looks right.** This session's lesson-link `target="_blank"` sweep (17 links across `/learn`, homepage, search, cheat-sheets, interview-prep, bookmarks, recently-viewed, track lists, and both projects-page lesson backlinks) deliberately excluded the primary nav's "Start Learning"/Learn dropdown and every category-only link (`/learn/{category}` with no lesson slug) — those still navigate in the same tab. Before adding a new lesson-destination link anywhere in the app, check whether it belongs in the "opens in a new tab" set (a listing/hub page, or an in-lesson link to another lesson) or the excluded set (primary site navigation, category-only links) — grep for `href=\`/learn/` across `src/` and check the `target` attribute on the match rather than assuming a new link matches its neighbors.

### Rule 61 — Mermaid SVG viewBox sizing and layout-dependent DOM fallback
When Mermaid renders a diagram (flowcharts, sequence diagrams, etc.), the generated SVG's `viewBox` can sometimes contain excessive blank space (over 50% blank canvas), causing the flowchart to render too small or be clipped and distorted.

**To prevent and fix layout sizing bugs in Mermaid diagrams:**
- **Avoid querying `<g>` inside `<defs>`**: In `tightenViewBox`, never fall back to a generic `svgEl?.querySelector("g")` immediately, as this selects helper `<g>` groups inside `<defs>` (e.g. arrowheads or templates) which have tiny or 0 dimensions. Instead, check for `g.root`, then query the immediate root-level child `<g>` elements of the `<svg>` (which correctly bypasses `<defs>` children), and only then fall back to generic descendant `<g>` selectors.
- **Implement a layout-dependent DOM-based fallback**: In the async string-rendering path, `getBBox()` of a detached offscreen div can return `0` because it is not part of the active document layout tree. Always add a `useEffect` that reactively queries the rendered SVGs directly in the active DOM (both the inline container and the fullscreen overlay container) and tightens their `viewBox` using `requestAnimationFrame` once layout is active and styled.

### Rule 62 — SVG text elements do not wrap natively: use `<foreignObject>`
Standard SVG `<text>` elements do not automatically wrap text and will overflow diagram boundaries or card shapes when text is long, resulting in text clipping or broken layout scales.
- **For custom SVG diagrams**: Do not use raw `<text>` elements for labels or sentences that can be long or dynamic. Instead, wrap a standard HTML `<div>` inside an SVG `<foreignObject>` tag.
- **ForeignObject boundaries**: Set explicit `x`, `y`, `width`, and `height` properties on the `<foreignObject>` container to bounds-check and keep it fully aligned within the parent shape (e.g. rectangles, ellipses, trapezoids).
- **CSS styling**: Apply CSS flexbox centering (`display: flex; align-items: center; justify-content: center; text-align: center;`) and word wrapping (`word-break: break-word; line-height: 1.2; overflow: hidden;`) to the HTML elements inside the `<foreignObject>` to ensure the browser handles font metrics and line wrapping natively.


### Rule 63 — Project content architecture: 9 new optional fields on `Project`, "Learn vs Do" separation

Session 2026-08-13: `Project` (src/lib/projects/types.ts) gained 9 new **optional** fields so existing 113 projects keep rendering unchanged while each is migrated to a richer "Learn vs Do" structure:

```ts
skills?: string[];                 // header tags, e.g. ["Core Web Vitals", "Technical SEO"]
prerequisites?: string[];          // "Before You Start" checklist
terminology?: { term: string; definition: string }[]; // first-mention definitions, same section
keyQuestion?: string;               // the single question the project answers, shown under Objective
whatToLookFor?: { label: string; detail: string }[];   // "Analyze" framing before/alongside steps
decision?: { prompt: string; options: { id: string; label: string; correct: boolean }[]; explanation: string };
professionalRecommendation?: { priority: "High" | "Medium" | "Low"; text: string };
commonMistakes?: { mistake: string; explanation: string }[];
keyTakeaway?: string;                // 2-3 sentence closing synthesis
```

Rendered by `ProjectCard.tsx` ("full" variant only) and the new `DecisionBox.tsx` component. Every field is conditionally rendered (`{project.field && ...}`), so an unmigrated project simply omits those sections, nothing breaks and no test needs updating for a project that has not been migrated yet.

**`decision` follows the same answer-reveal-after-pick pattern as `Quiz.tsx`** (AGENTS.md Rule 25): the correct option and explanation are hidden until the learner picks one, never before. Do not add a version that shows the correct answer up front.

**Reference migration**: `seo.ts`, project `core-web-vitals-field-vs-lab-audit`, has all 9 fields populated end-to-end, verified rendering correctly (Decision box reveal, Professional Recommendation, Common Mistakes, Key Takeaway all confirmed live in the browser). Use it as the template when migrating the remaining 112 projects, not an invented shape.

**Do not treat the new fields as required.** `tests/projects-data.test.ts` intentionally does not assert their presence (Rule 57's "no style heuristics as invariants" lesson applies here too, forcing every project through the same 9 fields before content actually supports them would produce filler, not quality). Populate them only with real, lesson-grounded content.

### Rule 64 — `ProjectCard.tsx` "full" variant section order matches the "Learn vs Do" page architecture

The dedicated project page (`/projects/{category}/{id}`) renders sections in this fixed order, decided in the 2026-08-13 redesign session:

1. Header (tier/archetype/time badges, title, company, objective, scenario, brief, key question, skill tags)
2. **Before you start** — prerequisites, terminology, `<ToolStack>`, dataset download link (tools moved here from their own bottom-of-page section, so a learner sees what they need before starting, not after finishing)
3. **The process** — `project.steps` via `<ProjectStep>`, or `<SimulationRunner>` for `stages`, or `<TeardownItemCard>` per `teardownItems`
4. **What to look for** (`whatToLookFor`)
5. Decision checkpoint (`<DecisionBox>`, only if `project.decision` is set)
6. **Professional recommendation** (`professionalRecommendation`)
7. **Common mistakes** (`commonMistakes`)
8. **Final deliverable** — renders `project.deliverable` (the required field that existed since the original type but was never actually rendered anywhere until this session) plus `project.sampleOutput` behind a `<details>` "See a reference example" disclosure
9. **Success criteria** (`successCriteria`, pre-existing)
10. **Key takeaway** (`keyTakeaway`)

**Do not reintroduce a separate "Recommended tools" section near the bottom of the page.** It used to sit there (right before the success-criteria checklist); moving `<ToolStack>` into "Before you start" was a deliberate fix, tools belong before the process starts, not after. If you add a new tools-adjacent field, put it in the "Before you start" block.

**`project.deliverable` and `project.sampleOutput` were silently dropped by `ProjectCard.tsx` for the entire lifetime of the projects feature until this session** — both are non-optional fields on `Project` that every one of the 113 projects has always populated, but nothing ever rendered them. Found while implementing the "Final deliverable" section. If a future refactor of `ProjectCard.tsx` removes a field's render call, add a quick manual check (open one project page, confirm every non-optional `Project` field appears somewhere in the DOM) rather than assuming the type system would have caught a silently-unrendered-but-still-valid field, it doesn't, this is not a type error.

### Rule 65 — `ProjectCard.tsx` "full" body uses hairline dividers, not stacked card boxes; only genuinely interactive/complex pieces stay boxed

The first pass of the "Learn vs Do" redesign (Rule 64) wrapped every new section in its own `rounded-lg border` box, which reads as a stack of identical widgets, not an editorial page. Restyled to match the site's existing "field manual" identity (`PageMasthead.tsx`, homepage section labels): a `font-data` mono uppercase eyebrow + optional `font-display` (Fraunces) subhead, separated by a plain `border-t` hairline rule, no background tint, no border-radius box.

**What stays boxed, and why:** `<DecisionBox>` (an interactive multiple-choice control needs a contained hit-area), `<ProjectStep>`/`<TeardownItemCard>`/`<SimulationRunner>` (separate components with their own established, more complex internal structure, not touched by this pass). Everything else — Before You Start, What To Look For, Common Mistakes, Final Deliverable, Success Criteria — is a `Section` shell (defined at the top of `ProjectCard.tsx`) with a hairline top border only.

**The one deliberate signature move**: Professional Recommendation and Key Takeaway both render as a Fraunces italic pull-quote (`font-display italic`), the former with a thick `border-left: 3px solid var(--accent)` rule and a `"..."` wrap, the latter larger and unbordered as the page's closing statement. These are the two moments in a project worth typographic weight, everything else stays quiet by comparison. Do not add a third pull-quote-style treatment elsewhere on the page, spend that visual weight in exactly these two places or it stops reading as a signature.

`ToolStack` moved fully into "Before You Start" (Rule 64) keeps its own "Free path"/"Paid upgrades" sub-headings unchanged, they read fine as sub-labels under the section's "What you'll need" heading, no need to touch `ToolStack.tsx` itself.

### Rule 66 — The site's own service worker must never register outside production, or every dev session inherits Rule 50/59's staleness bug by default

`public/sw.js` registration in `layout.tsx` used to run unconditionally (`if ('serviceWorker' in navigator)`, no environment check). Rules 50 and 59 both independently rediscovered the same root cause, a registered SW caches JS/CSS bundles per-origin and doesn't distinguish `localhost` from production, so any dev tab that had ever loaded the site keeps serving stale chunks after every subsequent edit, indistinguishable from a real bug (chunk-loading errors, stale rendered output, hydration mismatches) until someone thinks to check `navigator.serviceWorker.getRegistrations()`. This shipped bugs to two different sessions and to a real end user's browser (Rule 59) before being fixed at the root in Session 80.

**Fixed**: the registration script now only calls `.register()` when `process.env.NODE_ENV === "production"` (inlined at build time by Next.js). In every other environment it proactively unregisters any SW the tab already has, so a tab that picked one up before this fix self-heals on next load instead of needing a manual DevTools trip.

```ts
// layout.tsx, the registration script (inlined, not a separate file)
if ('serviceWorker' in navigator) {
  if (IS_PRODUCTION) { navigator.serviceWorker.register('/sw.js').catch(function(){}); }
  else { navigator.serviceWorker.getRegistrations().then(function(rs){ rs.forEach(function(r){ r.unregister(); }); }); }
}
```

Rule 50's "full restart + fresh tab" sequence is still correct advice for the rarer Turbopack-file-watcher-didn't-recompile case, but the SW half of that problem should no longer occur in local dev at all going forward. If a stale-chunk/hydration-mismatch bug reappears in dev after this fix, check `navigator.serviceWorker.getRegistrations()` first anyway, don't assume this rule fixed it forever, a browser extension or an old registration from before this fix can still be present in an already-open tab.

### Rule 67 — A terminal `SimulationStage` option must use the `"end"` sentinel, never `nextStageId: ""`

`tests/projects-data.test.ts`'s simulation-routing check requires every `decision.options[].nextStageId` to resolve to either a real `stageId` in the same project or the literal string `"end"`. An authoring agent (Session 85, Paid Ads Mastery batch) instead left the field empty (`nextStageId: ""`) on every terminal option across two projects, reasoning (reasonably, but wrongly for this codebase) that an empty string reads as "nothing further happens." `tsc --noEmit`, `npm run lint`, and `scripts/audit-projects.mjs` all pass this without complaint, an empty string is a perfectly valid `string`, structurally indistinguishable from a real id to everything except the one test that actually walks the stage graph.

```ts
// WRONG — passes tsc/lint/audit-projects.mjs, fails only npm test
{ id: "realistic-target", verdict: "optimal", /* ... */ nextStageId: "" }

// CORRECT — the required terminal sentinel
{ id: "realistic-target", verdict: "optimal", /* ... */ nextStageId: "end" }
```

Caught only by `npm test` (`tests\projects-data.test.ts:250`, "every option routes to a real stage id or the terminal sentinel"), not by the audit script's structural check. When authoring or reviewing simulation-mode projects, grep the target file for `nextStageId: ""` before considering the batch done — `npm test` is the actual gate, per Rule 57, and this is exactly the kind of "valid string, wrong runtime meaning" defect that rule already warned `tsc` can't catch.

### Rule 68 — `Project.archetype` and `Project.mode` are different unions; don't put a `ProjectMode` value into `archetype`

Rule 45 already distinguishes the two fields conceptually. Session 85's Data-Driven Marketer batch shipped the concrete failure mode that rule warned about: two authoring agents wrote `archetype: "calibration"` on a project whose `mode` was correctly `"calibration"`. `"calibration"` is a real `ProjectMode` value but is NOT in the `Archetype` union (`teardown | rebuild | audit | head-to-head | forecast | simulation | reverse-engineer | build-the-asset | ai-critique`), so this fails `tsc --noEmit` with a plain `Type '"calibration"' is not assignable to type 'Archetype'` error.

```ts
// WRONG — "calibration" is a ProjectMode value, not an Archetype
{ archetype: "calibration", mode: "calibration", /* ... */ }

// CORRECT — archetype is a real Archetype value; mode stays "calibration"
{ archetype: "reverse-engineer", mode: "calibration", /* ... */ }
```

Unlike Rule 67's `nextStageId: ""` defect, `tsc --noEmit` DOES catch this one — but only if it's actually run before merging. `scripts/audit-projects.mjs` does not check it (it validates referential integrity — companyId/toolName/lessonAnchor — not enum membership), so a batch that skips the `tsc` step in `PROJECTS_AUTHORING_GUIDE.md` section 1.5 can still merge this defect. Always run the full verification sequence (`tsc` → lint → test → build) in order after every merge, never skip straight to `npm test`.

**This is not a one-time mistake — it recurred in Session 85's Email & Lifecycle Mastery batch as `archetype: "build"`** (also a real `ProjectMode` value, not in the `Archetype` union — the correct archetype is `"build-the-asset"`). Any of the 7 `ProjectMode` values (`diagnostic`, `simulation`, `build`, `teardown`, `drill`, `calibration`, `no-project`) can end up typed into `archetype` by mistake since an authoring agent is juggling both fields at once; `tsc` catches all of them the same way, but only `"teardown"` and `"simulation"` happen to also be valid `Archetype` values, so those two variants *compile* even though they're still semantically wrong — `scripts/audit-projects.mjs` and `npm test`'s "no lesson reuses an archetype" check won't catch a `mode`/`archetype` value that merely happens to be spelled the same; only a careful read of whether the field's *meaning* matches its label does. When reviewing a project, check `archetype` and `mode` independently against their own real definitions, not just that each field individually contains a plausible-looking string.

### Rule 69 — A `mode`-consistent project still needs its stage/step array actually built, not just narrated

Rule 45/58 cover the array-vs-mode mismatch (wrong array populated) and the enum-value confusion (wrong string in `archetype`). Session 85's Email & Lifecycle Mastery batch shipped a third variant: `deliverability-dmarc-rollout-simulation` had `mode: "simulation"` and correctly used no `steps[]` — but its `stages[]` array was simply empty. The agent wrote a fully simulation-flavored narrative (weekly DMARC checkpoints, a decision at each stage, `deliverable`/`sampleOutput` describing a 4-week rollout log) entirely in prose fields, then never actually constructed the `SimulationStage[]` objects the mode requires to render anything.

`scripts/audit-projects.mjs`'s structural check passes an empty array (it's still `[]`, not `undefined`), and `tsc` has nothing to flag (an empty array is a perfectly valid `SimulationStage[]`). Only `npm test`'s "mode agrees with which array is populated" assertion catches it, because that check specifically asserts the array is non-empty for the declared mode, not just present.

```ts
// WRONG — passes tsc and audit-projects.mjs, fails only npm test
{ mode: "simulation", stages: [] }   // narrative content lives in deliverable/sampleOutput instead

// CORRECT — the mode's actual structured data lives in the array itself
{ mode: "simulation", stages: [ { stageId: "...", decision: { options: [...] } } ] }
```

Fixed here by converting to `mode: "diagnostic"` with 2 real `ProjectStep` entries built from the project's own existing narrative (its `archetype: "simulation"` stayed valid and unchanged — archetype and mode are independent per Rule 45, and this genuinely reads as a simulation-shaped problem even once implemented as a diagnostic-mode project). The narrower lesson: before considering an authored project done, confirm the mode-appropriate array (`steps`, `stages`, or `teardownItems`) actually contains real entries, not just that a plausible-sounding `deliverable`/`sampleOutput` narrative exists around an empty one.

### Rule 70 — `paidUpgradeNote` belongs on `ToolStack`, never inside a `ToolRef`

`ToolStack = { free: ToolRef[]; paid: ToolRef[]; paidUpgradeNote?: string }` — the note is a single sentence about the free-vs-paid tradeoff for the *whole toolStack*, not a per-tool field. Session 85's Email & Lifecycle Mastery batch shipped it nested inside one `paid[]` entry instead:

```ts
// WRONG — paidUpgradeNote is not a ToolRef field, fails tsc
paid: [{ toolName: "Klaviyo Flows", role: "...", why: "...", required: false,
  lastVerified: "2026-08", paidUpgradeNote: "Free tier can time-delay emails but branching suppression logic needs a paid plan." }]

// CORRECT — sibling of free/paid on the ToolStack object itself
toolStack: {
  free: [...], paid: [{ toolName: "Klaviyo Flows", role: "...", why: "...", required: false, lastVerified: "2026-08" }],
  paidUpgradeNote: "Free tier can time-delay emails but branching suppression logic needs a paid plan.",
}
```

Caught by `tsc --noEmit` (`Object literal may only specify known properties`) — same "run the full chain, don't skip to `npm test`" lesson as Rule 68.

### Rule 71 — The site's `lessonAnchor` slug algorithm is a simplified approximation of `rehype-slug`, not identical to the real `github-slugger` library

`tests/projects-data.test.ts`'s `headingIdsFor()` (mirrored in `scripts/audit-projects.mjs`) computes expected heading ids with its own regex:
```ts
h.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-")
```
This strips punctuation first, THEN collapses whitespace runs to a single hyphen. Real `github-slugger` (what `rehype-slug` actually uses at build time) does it in the opposite order and treats a removed character as leaving a gap, which can produce a DOUBLE hyphen where the site's own approximation produces a SINGLE one. Confirmed directly (Session 85, Freelancer & Agency batch): for the heading "How It Works / The Playbook",

```
real github-slugger:  how-it-works--the-playbook   (double hyphen)
this site's own regex: how-it-works-the-playbook    (single hyphen)  <- what lessonAnchor must match
```

A heading with NO punctuation to strip (just a colon, like "Reels: Format for Reach") slugifies identically both ways (`reels-format-for-reach`) — the mismatch only shows up when a character gets removed from the MIDDLE of the heading (a `/`, a stray symbol) leaving adjacent whitespace on both sides. Two failure modes seen so far, both from agents guessing at slugs rather than computing them: (1) using the raw heading text unslugified at all, (2) running the real `github-slugger` npm package (or eyeballing its known double-hyphen behavior from the `Step 2 -- Collapse the Flow` em-dash case, which is a LITERAL double-hyphen in the source text, not a punctuation-removal artifact, and slugifies identically both ways since hyphens aren't stripped).

**When authoring or auditing a `lessonAnchor` for a heading containing anything besides letters/digits/spaces/hyphens/colons, don't guess and don't trust a general slugger library — compute it with the site's own regex above**, or grep an already-merged, test-passing project's `lessonAnchor` for the same heading if one exists.

### Rule 72 — Vercel's Image Optimization Transformations quota is separate from bandwidth, and the free tier caps at 5,000/month

`next/image` routes every distinct source-URL + size/quality/format combination through Vercel's Image Optimization API as a separate billed "transformation," counted independently from Fast Data Transfer or Edge Requests. This site's only `next/image` usage (`LessonResourcesClient.tsx`'s YouTube video thumbnails) exceeded the free plan's 5,000/month cap by itself, because `next/image`'s responsive `sizes` behavior generates several device-width variants per unique thumbnail, and the library has hundreds of distinct video resources.

**Fixed** (2026-08-18): `next.config.ts`'s `images` block now sets `unoptimized: true`. `next/image` still renders (lazy-loading, `alt`, explicit `width`/`height` to prevent layout shift all keep working) but serves the original source file directly instead of routing through Vercel's optimizer, so transformation usage drops to zero. The tradeoff is no server-side resizing/re-encoding, YouTube's own thumbnail CDN already serves reasonably-sized files, so this is a real fix, not a regression, for this specific usage.

If a future feature adds `next/image` usage against a source that genuinely needs on-the-fly resizing (a user-upload gallery, for example), re-enabling optimization for just that usage means either accepting the transformation cost consciously or serving a pre-sized asset instead, don't remove `unoptimized: true` globally without checking the current Transformations usage in the Vercel dashboard first.

### Rule 73 — A background authoring agent can stall silently after its MDX work is done, with no completion notification ever arriving

Session 85's final Stage 8.3a batch (PR & Communications Mastery) had 2 of 4 parallel `general-purpose` agents (batches B and D) go quiet mid-run with no `<task-notification>` ever firing, despite every other batch in this session (dozens of them) completing in a consistent ~5-7 minutes. `TaskOutput` on the agent's id returned "No task found" for both — the tool doesn't reliably track these background agent ids the way it tracks bash/workflow tasks, so it isn't a usable liveness check here.

**Diagnosis that worked**: compare each batch's scratch-file existence (`ls` the scratchpad dir for `<batch>.ts`) against its assigned MDX files' modification timestamps.
- Batch D: MDX files untouched since before launch → truly stalled before starting real work → safe to fully relaunch with the original prompt.
- Batch B: MDX files freshly modified (both `<InAction>` inserts confirmed present via `grep -c "<InAction"`) but no scratch `.ts` file ever appeared → it had finished the MDX half and stalled during/before writing the projects file → relaunching the FULL original prompt would have re-run the MDX step and very likely produced duplicate `<InAction>` blocks (a real risk, not hypothetical — nothing in the original prompt tells a fresh agent to check for pre-existing inserts).

**Fix pattern**: relaunch a stalled batch scoped to only the missing work.
- If MDX evidence shows no progress (untouched files, zero `<InAction>` count): relaunch the original prompt unchanged.
- If MDX evidence shows the insert work already landed: relaunch with MDX editing removed from the task entirely (told explicitly "do NOT touch the MDX files, your only job is the projects data file"), so it can't duplicate work that already succeeded.

Do not just wait indefinitely on a batch that has gone well past every comparable batch's typical runtime with zero new file activity — check mtimes/grep counts first, since a completion notification is not guaranteed to ever arrive for a stalled background agent.

### Rule 74 — A count cited in README.md drifts independently at every location it's copied to; verify against the live data file, never against another doc line

Session 85's branch-cleanup doc sweep found README.md citing three different tool-directory counts in three different places (108, 116, and the real 141), and the glossary at 216 terms when `GLOSSARY_TERMS.length` is 158 — all stale by different, unrelated amounts, none matching each other. None of these were touched by the sessions that actually changed `tools-directory.ts`/`glossary.ts`; each was written once as static prose text and then never revisited as the underlying data file grew.

`Object.keys(QUIZZES).length`-style dynamic derivation (Rule 23, and the pattern `about/page.tsx` already uses for its own stats) prevents this **in the running site**. It does nothing for a `.md` file, which has no build step and cannot drift-check itself. Before citing any count in README.md/PROJECT_LOG.md/PROJECTS_PLAN.md — lessons, tools, glossary terms, tracks, badges, quiz questions — get the real number from the source directly:

```bash
node --import tsx -e "import { TOOLS } from './src/lib/tools-directory.ts'; console.log(TOOLS.length);"
```

Never copy a count from another line in the same doc (they disagree with each other, per above) and never assume last session's number is still right. When a rule like this one fixes a batch of stale counts, grep the fixed file for the OLD wrong numbers one more time afterward (`grep -n "108 \|116 \|216-term"`) to confirm no sibling copy was missed — a single sed pass over one phrasing does not catch every place the same stat was hand-written differently.

### Rule 75 — A dropdown/mega-menu panel must be anchored to a container wide enough to hold it, never to its own small trigger button

`Nav.tsx`'s Topics mega menu was originally `<div className="relative">{trigger}{panel}</div>`, with the panel `absolute left-0` relative to that same small wrapper div. The panel's `left: 0` is relative to the *trigger's own wrapper*, not the viewport or the page — so on a wide screen where Topics sits near the left edge of the nav (first item after the logo), a panel wider than the remaining space to the right of the trigger silently overflows off the right edge of the browser window. This isn't a visual crowding issue, it's real clipping: at a 1440px viewport with the trigger around x=503 and a 1040px-wide panel, the panel's right edge landed at x=1543, so the last column (`Career & Legal`) was rendered entirely outside the visible viewport with no scrollbar to reach it. `npx tsc --noEmit` and `eslint` both pass clean on this bug — it's a runtime layout defect, invisible without actually opening the menu in a browser.

**Fixed** by decoupling the panel from the trigger: the panel now renders as a sibling of `<nav>`, absolutely positioned relative to the full header container (which has `relative` added), using `left-4 sm:left-6 lg:left-8` (matching the page's own left padding, so its edge lines up with the logo) and a width capped at `min(1040px, calc(100vw - 2rem))` instead of a viewport-relative-only clamp. The trigger button keeps its own small `relative` wrapper for its `aria-expanded` styling, but the panel is no longer inside it.

```tsx
// WRONG — panel anchored to the trigger's own small wrapper, overflows the viewport
// when the trigger sits near an edge and the panel is wider than the remaining space
<div className="relative">
  {triggerButton}
  {open && <div className="absolute left-0 top-full w-[1040px]">{panelContent}</div>}
</div>

// CORRECT — panel anchored to a container wide enough to hold it (here, the full
// header), independent of exactly where the trigger sits inside that container
<div className="relative" ref={headerRef}>
  <nav>{triggerButton}</nav>
  {open && (
    <div className="absolute left-4 sm:left-6 lg:left-8 top-full w-[min(1040px,calc(100vw-2rem))]">
      {panelContent}
    </div>
  )}
</div>
```

Before shipping any dropdown/mega-menu wider than ~400px, open it in a real browser (or a Playwright screenshot) at a representative desktop width and confirm no part of the panel is clipped by the viewport edge — `tsc`/lint/build all pass on this class of bug regardless of whether it's actually visible.

### Rule 76 — `scripts/get-category-batch-info.mjs` doesn't resolve `sourceCategory`, so it overcounts a category's remaining project-less lessons by however many cross-listed lessons it contains

`fundamentals` reports "8 already have projects, 32 remaining" — but 13 of those 32 are the cross-listed `mental-models` lessons (Rule 31/43: `pattern-recognition`, `systems-thinking`, `decision-making-under-uncertainty`, `first-principles-thinking`, `opportunity-cost-thinking`, `writing-to-think`, `base-rates-forecasting`, `second-order-thinking`, `inversion-thinking`, `goodharts-law`, `deliberate-practice`, `pareto-and-constraints`, `bayesian-updating`). Their real MDX lives at `src/content/mental-models/{slug}.mdx` and their canonical projects already exist in `src/lib/projects/mental-models.ts` (authored in Session 85's `mental-models` track rollout, 13/13 done) — but `get-category-batch-info.mjs` reports their MDX path as `src/content/fundamentals/{slug}.mdx` and lists them as project-less anyway, because the script checks `fundamentals.ts` for a matching key, not `mental-models.ts` via `sourceCategory`. True remaining count for `fundamentals` was 19, not 32.

Authoring a second, `fundamentals`-keyed project set for these 13 lessons would violate Rule 31 directly ("Quiz keys: live under the canonical `sourceCategory` … Do NOT create duplicate entries" — the same principle applies to project keys) and would silently orphan the new content, since the lesson page always resolves projects via `sourceCat = lessonRef?.sourceCategory ?? category`, so a `fundamentals.ts` entry for a cross-listed slug is never read by anything.

### Rule 77 — Accounts/sync: `PROGRESS_CHANGED_EVENT` is the one signal that drives auto-sync; a progress-writer that skips it silently never syncs

The accounts-and-sync feature (`src/lib/sync-client.ts`, `src/app/api/sync/route.ts`, Google sign-in via `src/auth.ts`) pushes a learner's progress to their account automatically, but it does this by listening for a single `CustomEvent`, not by polling localStorage. `sync-client.ts`'s `startAutoSync()` subscribes to `PROGRESS_CHANGED_EVENT` (`src/lib/events.ts`) on `window` and debounce-pushes (2s) whenever it fires. **Every localStorage-writing lib already dispatches it** after a real write: `progress.ts`, `bookmarks.ts`, `notes.ts`, `engagement.ts`, `quizzes.ts`, `projects-progress.ts`, `recentlyViewed.ts`, `spaced-review.ts`, and the two writes in `OnboardingModal.tsx`/`Quiz.tsx`/`TrackLessonList.tsx`.

```ts
// REQUIRED at the end of any function that writes progress data to localStorage
localStorage.setItem(SOME_KEY, JSON.stringify(data));
window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
```

A new progress-writing function that skips this dispatch has no build error, no lint error, and no visible symptom in the tab that made the change — it fails silently and only shows up as "my progress isn't on my other device," which is much harder to diagnose after the fact than to get right when the function is written. This is the same failure class Rule 18 already warned about for storage-key drift; `PROGRESS_CHANGED_EVENT` is the event-bus half of that same discipline.

**`src/lib/progress-snapshot.ts` is the single source of truth for "what counts as the user's progress data."** It exports `EXPORT_KEYS` (fixed-name keys) and `ALLOWED_KEY_PREFIXES` (prefixed keys, e.g. per-lesson quiz-pass/notes keys) plus `collectAllKeys()`/`restoreAllKeys()`/`isAllowedKey()`. This one module is shared by **both** `/settings`' export/import/reset AND `sync-client.ts`'s push/pull — it was extracted specifically so the two features can't drift into two different definitions of "the user's data" (the same problem Rule 18 exists to prevent, one level up). Adding a new localStorage key that should sync/export/reset means adding it here, not hand-rolling a second list in a component.

**`role`/`ADMIN_EMAILS` mirrors the Email-Automator sister project's pattern exactly, don't reinvent it.** `users.role` (`src/server/db/schema.ts`) is a persisted `'user' | 'admin'` column and is the primary source of truth, checked by `isAdminUser()` in `src/auth.ts`. `ADMIN_EMAILS` (`src/lib/env.ts`) is a comma-separated bootstrap/failsafe env var: on sign-in, any address in it gets `role: "admin"` persisted to the database (`auth.ts`'s `events.signIn` callback), and `isAdminUser()` also falls back to checking `ADMIN_EMAILS` directly in case that persist ever fails. Do not invent a different admin-check shape (a hardcoded list in a component, a separate `isAdmin` cookie, etc.) — `isAdminUser()` plus `requireAdmin()` (also in `auth.ts`) are the only sanctioned checks, matching how the Email-Automator project already does this.

**Before trusting any category's "remaining" batch list, cross-check it against `curriculum.ts`'s `sourceCategory` field**:
```bash
grep -n 'sourceCategory' src/lib/curriculum.ts
```
Any slug the batch tool lists that also appears with a `sourceCategory` in curriculum.ts is not actually remaining — check the real target category's `projects/*.ts` file for it before authoring. Do not fix this by teaching the script to skip cross-listed slugs without checking whether the target category's file already covers them; the script's counts of *other* categories are correct today only because no other category currently has this overlap.
