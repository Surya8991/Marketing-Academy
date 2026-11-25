# Marketing Academy — Design Guide (Editorial Lab System)

> Canonical design, layout, and UI-craft reference for Marketing Academy. Every new page, component, or redesign must follow this guide alongside `AGENTS.md` and the latest unslop audit, `docs/UNSLOP_AUDIT_2026-11-25.md`.
>
> **This file supersedes `docs/DESIGN_SYSTEM_GUIDE.md`** (the earlier, pre-Editorial-Lab system notes). Where the two disagree, this guide wins. The current unslop audit and its fix log live in `docs/UNSLOP_AUDIT_2026-11-25.md`; the older `docs/UNSLOP_AUDIT.md` is kept only for history.

---

## 1. Design Direction

- **Product:** Free, source-cited marketing curriculum with interactive calculators, practice projects, and lesson quizzes for self-taught marketers and founders.
- **Character:** Editorial, exact, encouraging.
- **World:** Paper, ink, and a working marketer's field notebook — warm off-white stock, sharp ink typography, and tabular data.
- **Moments:** Working interactive instruments (`InteractiveLab`, `AbTestLab`, `LtvCacLab`, `GeoAuditClient`) and real data views (`StatsRow`, `ActivityHeatmap`, `Lesson` specimen cards) — never decorative blobs or glowing gradients.
- **Signature:** Mono classification codes and numbered specimen indices (`01`, `02`, `MKT-01` in `IBM Plex Mono` with `tabular-nums`) paired with quiet `1px` hairline rules.

---

## 2. Color System & Theme Rules

All colors are defined in `src/app/globals.css`. **Never use Tailwind `dark:` classes** (`AGENTS.md` Rule 5) — use CSS variables exclusively so light and dark themes stay automatic.

### Core Tokens
| Token | Light (`#fafaf8` Paper) | Dark (`#0a0a0b` Ink) | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#fafaf8` | `#0a0a0b` | Page canvas |
| `--card` | `#ffffff` | `#131316` | Cards, panels, inputs |
| `--muted` | `#f4f4f0` | `#18181b` | Secondary bands, raised rows, code chips |
| `--border` | `#e9e8e4` | `#2a2a30` | `1px` hairline borders and dividers |
| `--foreground` | `#191927` | `#f4f4f5` | Primary headings and body ink |
| `--muted-foreground` | `#6a6a7c` | `#b8b8c4` | Secondary text, meta, captions |
| `--accent` | `#4f46e5` | `#a5b4fc` | Primary CTAs, active tabs, classification codes |
| `--accent-foreground` | `#ffffff` | `#0a0a0b` | Text on `--accent` fills |
| `--success` | `#166534` | `#4ade80` | Positive deltas, quiz pass |
| `--warning` | `#92400e` | `#fbbf24` | Cautions, medium thresholds |
| `--danger` | `#b91c1c` | `#f87171` | Negative deltas, errors |

### Color Rules
1. **No hue gradients, radial blurs, or colored glows** on UI surfaces, headings, or cards.
2. **One accent (`--accent`) used sparingly:** Primary action, active tab/pill, key metric, or classification code.
3. **Theme-aware badges (`AGENTS.md` Rule 19):** Use `rgba(...)` semi-transparent tints with `var(--foreground)` instead of hardcoded Tailwind `bg-green-100 text-green-800`.
4. **Status *text* colors (`AGENTS.md` Rule 82):** Green/amber/red text (verdicts, deltas, quiz right/wrong, destructive actions) uses `var(--success)` / `var(--warning)` / `var(--danger)` — never a fixed hex (`#16a34a`) or Tailwind `text-red-600`, which fail contrast on the dark card. Canvas drawing (e.g. `MarkComplete` confetti) is the one exception, since a canvas can't resolve CSS variables.
5. **One accent, and it is `#4f46e5` (dark `#a5b4fc`):** The off-brand indigo `#6366f1` / `rgba(99,102,241,…)` and the violet `#8b5cf6` / `#a855f7` are **not** the brand accent — use `var(--accent)` or `#4f46e5` tints (`rgba(79,70,229,…)`). No two-color gradients (certificates included).

---

## 3. Typography & Hierarchy

Loaded in `src/app/layout.tsx`:
- **Display (`font-serif` / `Fraunces`):** Hero, section, and page/lesson headlines (`font-medium` / `500` or `font-semibold` / `600` max — never `700`–`900` or italic).
- **UI & Body (`font-ui-sans` / `Public Sans`):** Navigation, cards, buttons, forms, and descriptions.
- **Data & Meta (`font-data` / `IBM Plex Mono`):** Classification codes, lesson counts, read times, dates, and stat numbers. Always pair with `tabular-nums`.
- **Lesson Prose (`font-sans` / `Geist Sans`):** Long-form MDX lesson body copy.

> `layout.tsx` loads **five** `next/font` families, but only these **four** are part of the type system. The fifth, `Geist_Mono` (`--font-geist-mono`), is legacy from the pre-Editorial-Lab setup and is not a system role — use `font-data` (IBM Plex Mono) for all mono/data text, not Geist Mono. Don't add a new mono role without removing this one first.

### Type Rules
- **Sentence case everywhere:** No `uppercase` + `tracking-wider`/`tracking-widest` on section kickers, table headers, or metadata.
- **Minimum label size:** `text-xs` (`12px`) for meta/captions; never `10px` or `11px`.
- **Hierarchy from size + color**, not heavy weight.

---

## 4. Spacing, Containers & Radii

- **4px grid:** Use standard Tailwind steps (`p-4`, `p-5`, `p-6`, `gap-4`, `gap-6`, `py-16 sm:py-24`). Avoid arbitrary pixel values like `min-h-[350px]` or `text-[11px]`.
- **Containers:**
  - `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for Homepage, Nav, Footer, and Lesson Reader shell.
  - `max-w-6xl` for `/learn` catalog matrix; `max-w-5xl` for `/tracks`, `/profile`, `/achievements`.
  - `max-w-3xl` (`~68ch`) for MDX lesson reading prose.
- **Border Radii (nested math `inner = outer - padding`):**
  - Controls, buttons, inputs, tabs: `rounded-lg` (`8px`).
  - Standard cards: `rounded-xl` (`12px`).
  - Large panels / hero instruments: `rounded-2xl` (`16px`).
  - Avoid `rounded-3xl` and avoid `rounded-full` pills on everything.

---

## 5. Icons & Visuals

- **Icon set:** `lucide-react` only (`14px`–`18px`, `strokeWidth={1.5}`), colored in `var(--muted-foreground)` or `var(--accent)` — never multi-colored icon tiles.
- **No UI emojis:** Never use emojis (`🤖`, `🎯`, `🔥`, `🚀`, `⚠️`) in navigation, cards, headers, or status badges.
- **Rule 9 (`lucide-react` v1.18):** Use `Play` instead of `Youtube`, `ExternalLink` instead of `Github`.
- **Real visuals over filler:** Show working calculators, quiz specimens, `StatsRow` tiles, or `Mermaid` diagrams — never decorative orbs, rotated shapes, or giant watermarks.

### Callout component (`src/components/Callout.tsx`)
- **One quiet neutral box**, not five colored tints: surface `bg-[var(--muted)]`, hairline `border-[var(--border)]`. A lesson full of callouts must not read as a rainbow.
- **Type is carried by icon + label, never by color alone.** Only the icon takes a type color: `warning` → `var(--warning)`, `success` → `var(--success)`; `info` / `tip` / `example` stay `var(--muted-foreground)`.
- **Sentence-case labels:** `Note`, `Common mistake`, `Best practice`, `Tip`, `Real example`.

### Badges & pills
- Pill badges (tier, level, severity, type) use the theme-aware `rgba(...)` tint + `var(--foreground)` pattern, **sentence/Title-case text, no `uppercase` + `letter-spacing`**. For a single lowercase data value (e.g. severity `critical`) use `text-transform: capitalize`, not `uppercase`.
- Reserve the solid `var(--accent)` fill for the one active/selected pill, primary CTA, or link — not for every tag in a row.

### Type scale (quick reference)
- Smallest on-screen text is **`text-xs` (12px)**. There is no `10px`/`11px`/`0.65rem`/`0.7rem` in the UI (`AGENTS.md` Rule 16 / §3 here).
- Heaviest weight is **`font-semibold` (600)**. No `font-bold`/`extrabold`/`black` or inline `fontWeight: 700–900`; hierarchy comes from size + color.

---

## 6. Copy & Tone

- **Encouraging, plain English, source-cited** (`AGENTS.md` Rule 16).
- **No exclamation marks (`!`)** in UI copy, buttons, or alerts.
- **No trailing periods** on display headlines, subheads, or short labels.
- **No hype words** (`AI-powered`, `Unlock`, `Supercharge`, `Seamless`, `Revolutionize`). Prefer `"Earn"`, `"Complete"`, `"GEO Audit"`.

---

## 7. Motion & Interaction

- **No infinite loops:** No `animate-pulse` on non-live status dots or badges (skeleton loaders only).
- **No `transition-all` and no card lift/scale (`hover:-translate-y`, `hover:scale`)** — use `transition-colors`, `transition-opacity`, or `transition-[transform,opacity]`. `transition-[width]` is **only** for a progress/meter fill whose `width` is genuinely the animated property; it triggers layout, so never use it for hover/entrance motion — animate `transform` there instead.
- **Focus & Reduced Motion:** Global `:focus-visible` outline (`2px solid var(--accent)`) and `prefers-reduced-motion` are enforced in `src/app/globals.css`.

---

## 8. Page Layout Blueprints (Implemented)

### A. Homepage (`src/app/page.tsx` — Variation D)
1. **Lab-First Split Hero (`HeroModern.tsx` + `InteractiveLab.tsx` embedded):**
   - Left (`lg:col-span-5`): Mono kicker, `Fraunces` H1 (`Test the math before you spend`), value prop, primary/secondary CTAs, and `tabular-nums` metric counters.
   - Right (`lg:col-span-7`): Live **Unit Economics / Headline Clinic / A/B Dilemma** instrument.
2. **Proof Strip (`ProofStrip.tsx`):** `01`–`04` indexed trust row.
3. **Role-Based Track Switcher (`LearningPaths.tsx`):** Clickable role pills (`Solo Founder`, `Growth Marketer`, `SEO & Content`, `Paid Ads & CRO`, `AI-First Marketer`) updating the active track summary + 4-step syllabus preview (`01`–`04`).
4. **Discipline Worlds (`WorldGrid.tsx`):** 4-column `01`–`04` topic areas.
5. **Case Studies (`CaseStudiesSection.tsx`):** `01 · Positioning` featured card + `02 · Conversion` / `03 · Retention` stacked cards.
6. **Dynamic Habit Loop + AI Spotlight + Featured + All 21 Topics + Final CTA.**

### B. All Topics Catalog (`src/app/learn/page.tsx` — Variation A)
- `PageMasthead` → Header + `SurpriseMeButton` → Filter bar (discipline-group tabs from `TOPIC_GROUPS` + live search) → 2-column matrix of topic cards (`LearnCatalogClient.tsx`) previewing the first 3 ordered lessons per topic.

### C. Lesson Reader (`src/app/learn/[category]/[lesson]/page.tsx` — A + B Hybrid)
- **Left (`xl+`):** Sticky Table of Contents (`TableOfContentsDesktop`).
- **Center (`max-w-3xl`):** Sentence-case breadcrumb (no emoji), `Fraunces` H1, sentence-case `tabular-nums` meta line, MDX prose, `LessonResources` (`Watch / Read / Tools`), and matched Quiz / Practice Projects / Notes accordion stack.
- **Right (`lg+`):** Sticky **Study Workspace Rail (`lg:w-72`)** with `MarkComplete`, `BookmarkButton`, `ShareButtons`, and quick anchor jumps to the Quiz and Practice Projects.

### D. Catalog, Track, Project & Profile Pages
- Always open with `PageMasthead` (`left` context · `right` live counts).
- Use `StatsRow` (`src/components/StatsRow.tsx`) for specimen metric grids (`01`–`08`).
- Keep `generateStaticParams` in Server Component `page.tsx` and interactive UI in `*Client.tsx` (`AGENTS.md` Rule 17).

---

## 9. Workflow & Pre-Push Gate

1. **Design in Figma first** (when Figma MCP quota is available) using the **Editorial Lab** variable collection.
2. **Verify in order** (`PRE_PUSH_CHECKLIST.md`):
   - `npx tsc --noEmit`
   - `npx eslint . --max-warnings=9999`
   - `npm test`
   - `npm run build`
3. **Update docs** (`docs/PROJECT_LOG.md`, `README.md`, `AGENTS.md`, `docs/DESIGN_GUIDE.md`) before every `git push`.
