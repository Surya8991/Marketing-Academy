# Unslop audit: Marketing Academy (2026-11-25)

Audit only. This file is the fix list; the fixes will be made in Antigravity. Method: the unslop skill (heydamir/unslop, CC BY 4.0), local dev at 1440x900 and 375 wide, dark and light, plus a grep sweep of `src/`.

## Where things stand

- **Round 1 (morning):** first audit. Homepage had heavy slop (purple blob, orbit rings, glass pills, glossy tiles, purple-glow lab); the rest of the site had light slop.
- **Round 2:** another agent wrote `docs/UNSLOP_AUDIT.md` and changed 65 files (not committed). Checked: `tsc` clean, `eslint` 0 errors, `npm test` 84/84, no sideways scroll at 1440 or 375, both themes render. **The homepage is fixed** and now has a real lesson-specimen card in the hero.
- **Round 3 (this list):** every page type re-checked: lesson, `/learn`, `/learn/[category]`, `/tracks`, `/tracks/[slug]`, `/tools`, `/projects`, `/profile`, `/achievements`, `/compare`, `/interview-prep`, `/quizzes`, `/skill-map`, homepage. What is left is below, in priority order.

| Sign | Round 1 | Now |
| --- | --- | --- |
| Gradients | ~20 | 4 (2 in OG image generators: fine; 2 in certificates: fix) |
| Glows / blur | 12 | 3 (all functional: sticky nav, Mermaid overlay) |
| Looping pulse / ping | several | 2, real loading skeletons (fine) |
| Hover lift / scale / `transition-all` | ~45 | 0 |
| `uppercase` | 110 | 27 lines in 20 files |
| `font-bold` and heavier | 99 | 47 lines in 19 files |
| Emoji rendered in the UI | many | 30 render sites in 23 files (from data) |

## Round 4 re-check (2026-11-25, 15:50)

Checked against branch `design/homepage-human-copy` at `e79f085` ([PR #39](https://github.com/Surya8991/Marketing-Academy/pull/39)), not `main`. Your working copy was switched to `main` during the check; `main` has none of this work. Checks on the branch: `tsc` clean, `eslint` 0 errors (1 old warning), `npm test` 84/84, no sideways scroll at 375 on the homepage or a lesson page.

**What landed since round 3:** Variation D homepage (lab-first hero "Test the math before you spend"), `/learn` filterable matrix, lesson reader with a right-hand study rail. They look good and match the design guide's blueprint.

## Round 5 — fixed (2026-11-25, this session)

All 17 items resolved: 13 fixed in code, 4 deliberately kept with the reason recorded (they are correct design or out of the guide's scope, not slop). `tsc` clean, `eslint` 0 problems. The design guide (`docs/DESIGN_GUIDE.md`) and `AGENTS.md` Rule 65 were updated to match, so the code and the written rules now agree.

| # | Item | Resolution |
| --- | --- | --- |
| 1 | Emoji from data | **Fixed.** Every UI render site now uses a lucide icon (`src/lib/ui-icons.tsx` — `CategoryIcon`/`AchievementIcon`) or plain text. The emoji fields in the data modules are left intact (unused by the UI). |
| 2 | Callout five colours | **Fixed.** `Callout.tsx` is one neutral box (`bg-[var(--muted)]` + hairline); only the icon takes a type colour (`warning`/`success` tokens, rest muted); labels sentence-case. |
| 3 | Uppercase labels | **Fixed.** Word labels sentence-cased across ~20 files (removed `uppercase` + tracking / `textTransform`). Mono classification **codes** (`01`, `MKT-01`, `Step 01 of 05`, `Q1`) kept. Severity pill uses `capitalize`. |
| 4 | Exclamations | **Fixed.** `DailyChallenge` (result lines + share text), `HeadlineTester:202`, `TrackQuizPageClient:420`. Quoted ad-copy in the challenge (the test headlines themselves) kept. |
| 5 | Raw Tailwind colours | **No change needed** (false positive — the `error.tsx` `bg-red-50` is inside a comment; code already uses an rgba tint). |
| 6 | Off-brand indigo | **Fixed.** `rgba(99,102,241,…)` → `rgba(79,70,229,…)`; literals `#6366f1`/`#8b5cf6`/`#a855f7` → `#4f46e5` (themeColor, Mermaid fallback, confetti seed, certificate gradient→solid). Email templates (a separate surface) left on their own accent. |
| 7 | Heavy weights | **Fixed.** `font-bold`/`extrabold`/`black` → `font-semibold`; inline `fontWeight: 700–900` → `600`. 0 left in app UI. |
| 8 | Text under 12px | **Fixed.** `text-[9/10/11px]`, `text-[0.6–0.7rem]`, inline sub-12px `fontSize` → `text-xs` / `0.75rem`. |
| 9 | Italic | **Fixed.** Decorative italics de-italicized (ToolStack, SimulationDebrief/Runner, ToolsClient, ProjectCard `keyQuestion`). The two Fraunces pull-quotes (`ProjectCard.tsx:375`/`430`) kept — the only italics left (plus the certificate artifact). |
| 10 | Off-grid spacing | **Kept (not slop).** `ActivityHeatmap` cells (`w-[15px]`, `gap-[4px]`, `rounded-[3px]`) and the `LessonResourcesClient` count badge are fixed-dimension data-viz/badge primitives, not layout spacing — the guide §4 targets arbitrary *layout* values. No scale token fits a 15px heatmap cell. |
| 11 | Template heroes | **Kept.** The `/interview-prep` buttons are ordinary CTAs with real destinations; nothing reads as placeholder/template filler after the copy + weight + accent passes. |
| 12 | Accent everywhere | **Kept.** The remaining `var(--accent)` fills are active-pill, link, and focus-ring states — exactly what the guide §2 reserves accent for, not decoration. |
| 13 | Title Case | **Kept (in scope of the guide).** "Practice Projects" / "Test Your Knowledge" are feature/section **names**; guide §3 scopes sentence-case to kickers, table headers, and metadata — not feature names or display headings. Lowercasing them would also cascade into SEO titles, OG images, and breadcrumbs. |
| 14 | Two audit files | **Fixed.** `DESIGN_GUIDE.md` now names this file as the companion audit; the old `docs/UNSLOP_AUDIT.md` carries a "superseded" banner. |
| 15 | Docs before push | **Addressed here.** `AGENTS.md` Rule 65 and `DESIGN_GUIDE.md` updated this session. `PROJECT_LOG.md` / `README.md` still get their Rule-23 update at push time (no user-facing routes or counts changed, so those are session-log entries). |
| 16 | Accent decision | **Fixed/decided.** Brand accent is `#4f46e5` (dark `#a5b4fc`), recorded in `DESIGN_GUIDE.md` §2 rule 5; off-brand `#6366f1` is explicitly not the accent. |
| 17 | Onboarding lint warning | **Fixed.** `OnboardingModal.tsx` effect deps documented with a scoped eslint-disable; `eslint src` reports 0 problems. |

**Hero over-claim — fixed.** `HeroModern.tsx` subline is now "…lessons, each with a quiz. Plus interactive calculators and A/B teardowns for the numbers that matter." (was "paired with live calculators", which implied every lesson had one).

---

## (Round 4) Status when this list was handed off — 2 done, 15 open

Kept for history; superseded by Round 5 above.

| # | Item | Status |
| --- | --- | --- |
| 1 | Emoji from data | Open: 29 render sites (lesson breadcrumb fixed, every other site in the table remains) |
| 2 | Callout five colours | Open, unchanged |
| 3 | Uppercase labels | Open: 24 in UI (+2 OG images, fine) |
| 4 | Exclamations | Open, plus a new one: `src/components/TrackQuizPageClient.tsx:420` "You passed!" → "Passed." |
| 5 | Raw Tailwind colours | Open except `error.tsx`: **that one was a false positive in round 3** (the `bg-red-50` is inside a comment; the code already uses an rgba tint) |
| 6 | Off-brand indigo | Open, unchanged |
| 7 | Heavy weights | Open: 47 |
| 8 | Text under 11px | Open: 27 class-based (plus inline `fontSize` values in the same files) |
| 9 | Italic | Open: 9 (2 are the allowed pull quotes) |
| 10 | Off-grid spacing | Open |
| 11 | Template heroes | Open (`/interview-prep` still has 3 Title Case buttons) |
| 12 | Accent everywhere | Open, and `/learn` now adds accent topic codes on every card (see design-guide note 4) |
| 13 | Title Case | Open (e.g. `src/app/learn/[category]/[lesson]/page.tsx:304` "Test Your Knowledge") |
| 14 | Two audit files | Open (the design guide now points to `UNSLOP_AUDIT.md`, see note 5) |
| 15 | Docs before push | PR #39's commits touched only `docs/UNSLOP_AUDIT.md` and `docs/DESIGN_GUIDE.md` |
| 16 | Accent decision | Open |
| 17 | Onboarding lint warning | Open |

## Design guide review (`docs/DESIGN_GUIDE.md`)

The guide is good: it states one direction, real tokens, real file paths, and its page blueprints all exist in code (hero H1, `LearnCatalogClient.tsx`, `TOPIC_GROUPS` in `src/lib/topic-groups.ts`, the `lg:w-72` study rail, the stated containers). The `eslint` command matches `PRE_PUSH_CHECKLIST.md`. Things to fix in it:

1. **Three design guides contradict each other.** `docs/DESIGN_SYSTEM_GUIDE.md` (Nov 14, "S-Tier") still prescribes `font-bold` hero and section headings (lines 73, 75), `uppercase tracking-widest` eyebrows (line 81), `font-bold` codes (line 82) and the rotating gradient blob (line 91), all things the new guide bans. `docs/DESIGN_GUIDES.md` is general design theory with no project rules. Fix: delete `DESIGN_SYSTEM_GUIDE.md` (or add a one-line "superseded by DESIGN_GUIDE.md" banner at its top), keep `DESIGN_GUIDES.md` only if you want the theory, and point AGENTS.md at `DESIGN_GUIDE.md` as the one design source.
2. **It describes rules the code doesn't follow yet.** "No UI emojis" (29 sites), "sentence case everywhere" (24), "minimum 12px" (27), "hierarchy not heavy weight" (47 bold+), "lucide icons in muted or accent, never multi-coloured" (Callout uses blue, violet, orange). Either finish items 1-3, 7-8 above, or add a short "Known gaps" section that links to this audit so nobody copies the old patterns thinking they're approved.
3. **Line 94 endorses `transition-[width]`.** Animating width is a layout property and stutters on weak phones; 11 progress bars use it (`AchievementsClient:96`, `ReviewPageClient:106`, `SkillMapClient:152`, `GeoAuditClient:88`, `CategoryProgress:32`, `TrackLessonList:116`, `TrackProgress:30`, `TrackQuizPageClient:252`, `InteractiveLab:177`, `AbTestLab:192`, `FunnelAnalysisLab:191`). Low priority. Better: `transition-transform` with `scaleX` and `origin-left`, and change the guide to say so.
4. **Accent is given four jobs (line 30):** primary CTA, active tabs, key metric *and* every classification code. On `/learn` that puts accent on every card's code plus the filter and buttons, so nothing leads. Suggest codes in `--muted-foreground` and accent only for the primary action and the active state.
5. **Line 3 names `docs/UNSLOP_AUDIT.md` as the companion doc**, but there are two audits. Pick one (item 14) and update this line to match.
6. **Fonts: the guide lists four families, the app loads five.** Geist Mono is loaded and used 18 times via `font-mono` but isn't in the guide, alongside IBM Plex Mono for data. Lesson prose uses Geist Sans while the UI uses Public Sans. Suggest mapping `font-mono` to Plex Mono and dropping Geist Mono; decide whether prose should share Public Sans. Document whatever you choose.
7. **Missing rules that keep coming up in this audit:** the Callout pattern (neutral box, coloured icon only), when to use `--success` / `--warning` / `--danger` (AGENTS.md Rule 82), pills: 88 `rounded-full` uses with no guidance on when a pill is right, a type size scale (it names families but not sizes), number formatting (`tabular-nums`, one currency format), and the 375px mobile check.

## Direction (keep using this)

- **Product.** 642 free, plain-English marketing lessons with cited numbers and a quiz after each.
- **Character.** Exact, generous, a little bookish.
- **World.** An annotated field notebook: paper, ink, margin notes, numbered footnotes.
- **Moments.** The hero lesson-specimen card, and the lab's chart.
- **Signature.** Numbered mono codes (`01 · Positioning`, `MKT-01`, `Track 01`), already in place. Keep them; don't add a second signature.

---

## P1: visible on almost every page

### 1. Emoji still render from data (30 sites)

The emoji live in data files (`curriculum.ts`, `tracks.ts`, `tools-directory.ts`, `achievements.ts`, `category-index.ts`, `interview-questions.ts`) and these components print them:

| File:line | What it renders |
| --- | --- |
| `src/components/Nav.tsx:364`, `:542` | Topics mega menu + mobile menu |
| `src/app/learn/[category]/[lesson]/page.tsx:223` | Lesson breadcrumb (`🔎 SEO`) |
| `src/components/TracksPageClient.tsx:120` | Track cards on `/tracks` |
| `src/app/tracks/[slug]/page.tsx:79` | Big emoji above the track title |
| `src/app/tracks/[slug]/quiz/page.tsx:60` | Track quiz header |
| `src/app/tools/ToolsClient.tsx:207` | Tool cards |
| `src/components/ToolStack.tsx:71` | Tool rows in projects |
| `src/app/compare/CompareSelector.tsx:96`, `:118` | Compare dropdowns |
| `src/app/compare/[slug]/page.tsx:141`, `:173` | Compare headers |
| `src/app/achievements/AchievementsClient.tsx:140` | Badge tiles |
| `src/app/profile/ProfileClient.tsx:254` | Profile topic rows |
| `src/app/skill-map/SkillMapClient.tsx:144` | Skill map cards |
| `src/app/quizzes/page.tsx:121` | Quiz category cards |
| `src/app/cheat-sheets/page.tsx:117`, `[category]/page.tsx:111` | Cheat sheets |
| `src/app/interview-prep/page.tsx:234`, `:332` | Discipline grid |
| `src/app/interview-questions/page.tsx:204` | Section list |
| `src/app/interview-questions/[category]/page.tsx:92`, `:370`, `:395` | Header + prev/next |
| `src/app/bookmarks/BookmarksList.tsx:11` | Bookmark groups |
| `src/app/search/SearchClient.tsx:209` | Track results |
| `src/components/RecommendedNext.tsx:38` | "Recommended for you" |
| `src/app/certificates/page.tsx:61`, `[slug]/page.tsx:117`, `:409` | Certificates |

**Fix:**
- Where a text label already names the thing (Nav, breadcrumb, profile, skill map, quizzes, cheat sheets, interview pages, bookmarks, search, recommended): **delete the emoji span**, keep the text.
- Where the emoji is the card's only visual (tracks, tools, achievements, certificates, compare): use **one lucide icon per item**, 16px, stroke 1.5, `text-[var(--muted-foreground)]`. Put the slug → icon map in one file in `src/lib/` (AGENTS.md Rule 18), not per component.
- Leave the `emoji` fields in the data files for now; the OG images, RSS and `llms.txt` may still read them. Check with `grep -rn "\.emoji" src/app/api src/app/*.xml src/app/llms.txt` before removing any.

### 2. Lesson callouts are five different colours

`src/components/Callout.tsx:7-11`: info = blue, warning = amber, success = green, tip = violet, example = orange, each with a tinted background and border. A long lesson turns into a rainbow.

**Fix:** one neutral surface for all five (`bg-[var(--muted)]`, hairline `border-[var(--border)]`). Only the icon carries meaning: warning → `var(--warning)`, success → `var(--success)` (Rule 82), the other three → `var(--muted-foreground)`. Labels to sentence case: `Note`, `Common mistake`, `Best practice`, `Tip`, `Real example`.

### 3. Uppercase tracked labels (20 files)

Change to sentence case, normal tracking, `text-xs`, `font-medium`:

- `src/components/TableOfContents.tsx:69` ("On this page")
- `src/components/RelatedConcepts.tsx:39` ("Related concepts")
- `src/components/RecentlyViewed.tsx:20` (homepage "Continue where you left off")
- `src/components/RecommendedNext.tsx:24`
- `src/components/OutputSample.tsx:38`
- `src/components/ProjectStep.tsx:148`, `:204`
- `src/components/TeardownItemCard.tsx:62`, `:78`, `:106`
- `src/components/ProjectCard.tsx:122`, `:207`, `:330`, `:408`
- `src/components/CommandPalette.tsx:307`
- `src/components/PortfolioClient.tsx:202`
- `src/app/bookmarks/BookmarksList.tsx:97`
- `src/app/cheat-sheets/page.tsx:71`, `src/app/cheat-sheets/[category]/page.tsx:169`
- `src/app/interview-questions/[category]/page.tsx:202`, `:287`
- `src/app/projects/ProjectsClient.tsx:333`
- `src/app/tools/ToolsClient.tsx:231`
- `src/app/certificates/[slug]/page.tsx:212`

Leave alone: `src/app/opengraph-image.tsx:51` and `src/app/api/og/route.tsx:44` (share images).

**Decide first:** the mono eyebrows in `PageMasthead` and the lesson meta line (`BEGINNER · 11 MIN READ · ...`) are the house style in AGENTS.md Rule 65. Either keep them as the one exception, or sentence-case them too. Whichever you pick, update Rule 65 to match.

### 4. Exclamation marks in interface copy

| File:line | Now | Change to |
| --- | --- | --- |
| `src/components/gamification/DailyChallenge.tsx:50` | "Won with +102.5% higher conversion! Calling out..." | "Won with +102.5% higher conversion. Calling out..." |
| `DailyChallenge.tsx:79` | "Won with +18.4% higher resurrection rate! Reverse..." | same, period instead of `!` |
| `DailyChallenge.tsx:264` | "Great instinct! You scored +25 XP" | "Correct. +25 XP" |
| `DailyChallenge.tsx:268` | "Counter-intuitive result! +20 XP" | "The other version won. +20 XP" |
| `DailyChallenge.tsx:284` | share text "...on Marketing Academy!" | drop the `!` |
| `src/components/interactive/HeadlineTester.tsx:202` | "Excellent balance! You have combined..." | "Balanced: emotional pull, a specific promise and a readable length" |

Keep `DailyChallenge.tsx:66`, `:95`, `:103`: those quote the real test copy.

---

## P2: specific pages and components

### 5. Raw Tailwind colours that ignore the theme (Rules 19 and 82)

- `src/app/error.tsx:22`: `bg-red-50` is a light-only pink, so the error page breaks in dark mode. Use `rgba(220,38,38,0.12)` + `text-[var(--danger)]`.
- `src/app/account/AccountClient.tsx:70`, `:106`, `:122`: delete-account reds → `var(--danger)` text/border, rgba tint background.
- `src/components/gamification/DailyChallenge.tsx:210`, `:212`: emerald/red answer states → `var(--success)` / `var(--danger)`.
- `src/components/interactive/HeadlineTester.tsx:60-64` and `src/components/interactive/RoasCalculator.tsx:28-46`: amber/emerald/blue/red score bands → `--success` / `--warning` / `--danger`, and **muted** instead of blue for the neutral band.

### 6. Off-brand indigo and violet

- `src/app/certificates/[slug]/page.tsx:157` and `:293`: `linear-gradient(90deg, #6366f1, #8b5cf6)` → solid `var(--accent)` (`:293` is the print CSS, so use the literal `#4f46e5`).
- `src/app/layout.tsx:61`: `theme-color` is `#6366f1` but the accent is `#4f46e5`. Make them match (or use the page background).
- `src/components/MarkComplete.tsx:45`: confetti `#6366f1`, `#a855f7`. Canvas needs literal colours (Rule 82 exception), but use the accent `#4f46e5` plus neutral ramp shades, no violet.
- `src/components/Mermaid.tsx:183`: diagram theme uses `#a5b4fc` / `#6366f1`. Align it with the accent tokens (`#4f46e5` light, `#a5b4fc` dark).

### 7. Heavy weights (47 lines, 19 files)

Use `font-medium` (500), `font-semibold` (600) at most for rare emphasis. Worst file: `src/app/compare/[slug]/page.tsx` (17). Then `RoasCalculator.tsx` (4), `HeadlineTester.tsx` (4), and 1-2 each in `TrackQuizPageClient`, `ToolStack`, `TeardownItemCard`, `GeoAuditClient`, `quizzes/page.tsx`, `GlossaryClient`, `Quiz`, `ProjectStep`, `ProjectList`, `LessonResourcesClient`, `tracks/[slug]/quiz/page.tsx`, `tracks/[slug]/page.tsx`, `SearchClient`, `resources/page.tsx`, `compare/page.tsx`, `AchievementsClient`. Find them with `grep -rn "font-\(bold\|extrabold\|black\)" src --include=*.tsx`.

### 8. Text below 11px (27 sites, 17 files)

`text-[10px]`, `text-[9px]`, `text-[0.6xrem]` → `text-xs` (12px). Most are in the labs: `RoasCalculator` (4), `HeadlineTester` (4), `LtvCacLab` (2), `KeywordResearchLab` (2), `FunnelAnalysisLab`, `AbTestLab`, plus `GeoAuditClient` (2), `about/page.tsx` (2), `ToolStack`, `StatsRow`, `ProjectCard`, `LessonResourcesClient`, `tools/page.tsx`, `skill-map`, `projects/page.tsx`, `error.tsx`, `AccountClient`. Find them with `grep -rnE "text-\[(9|10|11)px\]|text-\[0\.(5|6)[0-9]*rem\]" src`.

### 9. Italic used for emphasis

Change to muted colour, no italic:
- `src/components/ProjectCard.tsx:258` (key question)
- `src/components/ToolStack.tsx:112`, `:141`
- `src/app/tools/ToolsClient.tsx:275`
- `src/components/SimulationDebrief.tsx:104`
- `src/components/SimulationRunner.tsx:204`
- `src/app/certificates/[slug]/page.tsx:241`

Keep `ProjectCard.tsx:376` and `:431`: those are the two Rule 65 pull quotes.

### 10. Off-grid spacing

- `src/components/ActivityHeatmap.tsx:63`, `:65`, `:68`, `:73`: `gap-[5px]`, `w-[15px] h-[15px]` → `gap-1` (4) and 16px cells.
- `src/components/LessonResourcesClient.tsx:24`: `min-w-[18px] h-[18px]` → 20px or 16px.

### 11. Page heroes that are still the template

- **`/interview-prep`** (`src/app/interview-prep/page.tsx:134`, `:150`, `:166`): centred hero with three buttons ("Browse All Topics", "Start with Fundamentals", "My Portfolio"). Keep one primary + one secondary ("Browse topics", "Start with fundamentals"); move "My portfolio" out of the hero. The discipline grid below repeats emoji (item 1).
- **`/compare`**: centred stacked hero; the selector placeholder "-- Select Tool --" → "Select a tool". The disabled "Compare Tools" button → "Compare".
- **`/quizzes`**: centred hero with three accent-coloured stat numbers, and every category card has an accent-filled "N questions" pill. Stat figures → `--foreground`; pills → quiet mono text (`38 questions · ~40 min`).

### 12. Accent spent everywhere, so nothing leads

- `/projects` (`src/app/projects/ProjectsClient.tsx`): every card has an accent-filled "View details" button. Make it a quiet text link with an arrow; keep accent for the filters' active state only.
- `/tracks` (`src/components/TracksPageClient.tsx`): every card has an accent audience pill ("Complete Beginners & Students"). Make it muted mono text.
- `/tools` (`src/app/tools/ToolsClient.tsx:235`): yellow "Popular" badge on cards. Make it quiet text (`Popular` in muted mono) or drop it.

### 13. Title Case in UI strings

Headings, buttons and labels should be sentence case. Seen: "Test Your Knowledge", "Practice Projects", "Related Concepts", "Browse All Topics", "Start with Fundamentals", "Mark as Complete", "Compare Tools", "Common Mistake", "Best Practice", "Pro Tip", "Real Example". Do a pass with `grep -rnE ">[A-Z][a-z]+ [A-Z][a-z]+ [A-Z]" src --include=*.tsx`, and keep proper nouns and track/lesson titles (those are data titles).

---

## P3: housekeeping before pushing

14. **Two audit files.** Keep this one; delete `docs/UNSLOP_AUDIT.md` or fold anything you want from it in here. It also says emoji are done, which is only true for emoji typed into components.
15. **Docs (AGENTS.md Rule 23, required before push):** add a PROJECT_LOG session row for the unslop pass; update AGENTS.md Rule 65 to match decision 3; add a new rule: "no emoji in UI chrome, icons are lucide 16/1.5 in a text colour", and "Callout uses neutral surface, only the icon is coloured".
16. **Accent decision.** It is still indigo `#4f46e5`. Fine if that's the brand; otherwise change it once in `globals.css` (the dark-mode `--accent` too) and in the literals listed in item 6.
17. **Old lint warning.** `src/components/OnboardingModal.tsx:61`: missing `handleSkip` in the `useEffect` deps (not from the unslop changes).

## Don't break these while fixing

- Lesson quiz: keep `id="quiz-accordion"` and `id="quiz-section"` (Rules 25, 52).
- Don't write the lesson-completion function's name with parentheses in any new comment; `tests/integrity-regression.test.ts` fails on it (Rule 47).
- Status colours must stay on `--success` / `--warning` / `--danger` (Rule 82).
- `ProjectList.tsx` must keep rendering its cards while collapsed (Rule 83).

## How to check when done

1. `npx tsc --noEmit` → `npx eslint src` → `npm test` → `npm run build`, in that order.
2. Re-run the sweep: the emoji render count, `uppercase`, `font-bold`, `text-[10px]` and the palette-colour greps above should be at or near zero (minus the listed exceptions).
3. Open the homepage, a lesson (scroll through callouts and the quiz), `/learn`, `/tracks`, `/tools`, `/projects`, `/quizzes`, `/interview-prep` in dark and light, and at 375 wide.

---

Audit method from unslop by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), CC BY 4.0.
