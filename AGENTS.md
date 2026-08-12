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
- **`src/components/Quiz.tsx`**, the quiz section at the bottom of each lesson. On 4/4 correct, dispatches `QUIZ_PASSED_EVENT` via `window.dispatchEvent`. `MarkComplete` listens to `QUIZ_PASSED_EVENT` and calls `setQuizPassed(category, slug)` then `handleComplete()`.
- **`src/lib/quizzes.ts`** exports `getQuizPassed`, `setQuizPassed`, `QUIZ_PASSED_EVENT` (re-exported from events.ts), `QUIZ_PASS_KEY_PREFIX`, `quizStorageKey`, and `QUIZZES`. `setQuizPassed` writes `ma_quiz_pass_{category}_{slug}` to localStorage.
- All 516 lessons have entries in `QUIZZES`, never remove entries or make `QUIZZES[key]` return undefined for a registered lesson.
- Do NOT add `hasQuiz` prop back to `MarkComplete`, it was removed because all lessons now have quizzes.
- Do NOT create `LessonQuizGate.tsx`, `handleGatePass()`, or `onPass` callback, these do not exist.

### Rule 26 — SYNC_SECRET must be set as NEXT_PUBLIC_SYNC_SECRET for client auth
`/api/sync-proxy` verifies `x-sync-secret` header against `process.env.SYNC_SECRET`. The client reads `process.env.NEXT_PUBLIC_SYNC_SECRET` to send in this header. Both vars must be set in Vercel: `SYNC_SECRET` (server-only) AND `NEXT_PUBLIC_SYNC_SECRET` (same value, exposed to client). Without both, sync push/pull silently returns 401.

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

**This is one of five interlocking integrity defects.** The others, all confirmed in code and documented in `PROJECTS_PLAN.md` 0.1b-0.1e:
- `src/app/certificates/[slug]/page.tsx` computes `pct` and **never gates on it**, so anyone can print a certificate at 0% completion by visiting the URL.
- `Quiz.tsx` reveals the correct answer and explanation per question, then offers unlimited retry, so 100% is reachable in ~30 seconds without knowledge.
- `TrackQuizPageClient` passes at 80% of a *pooled* question set, so a learner can score 0% on two lessons and still have them marked complete.
- `markIncomplete()` does not reverse XP, and `addXP` dedupes on a rolling 24h window, so completions are farmable.

Fix them as one batch. Closing the track bypass alone just pushes everyone onto a quiz that shows its own answers, toward a certificate that was never gated.

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
`correct` in `src/lib/quizzes.ts` is a **positional index** into `options[]`, not a value (`Quiz.tsx`: `const isCorrect = selected === question.correct`). Shuffling the options array without remapping `correct` silently mis-grades **all 2,252 questions across 642 lessons**: no build error, no runtime error, no type error, since `correct` stays a valid number. Wrong answers get marked correct everywhere. The naive version looks correct in review, which is what makes it dangerous.

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

Known blocker, one lesson only: `analytics/consent-mode` has an "All of the above" option. Rewrite it into a concrete statement before enabling shuffling. Audited all 8,341 option strings; it is the only position-dependent option in the library.

### Rule 41 — Never import a large data module into a `"use client"` file
`Nav.tsx` is `"use client"` and imports `CATEGORIES` from `curriculum.ts`. Measured cost: a **148,426 B raw / 48,020 B gzip** chunk containing all 655 lesson `summary:` fields, shipped on **every route**, when Nav only uses `slug`, `title`, `emoji` and `lessons.length`. Export a slim index instead.

Verified counterexample worth knowing: `quizzes.ts` (1.91 MB) and `lesson-resources.ts` (1.72 MB) correctly do **not** reach the client, because `Quiz.tsx` takes questions as a **prop**, the lesson page is a server component, and `TrackQuizPageClient` uses `import type`. Preserve those boundaries. A learner downloads ~4 questions, not 2,252.

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
