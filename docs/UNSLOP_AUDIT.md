# Unslop Audit — Marketing Academy

> Audit conducted using the **unslop** framework (created by Damir Sokolovsky, [@heydamir](https://x.com/heydamir), licensed under CC BY 4.0).

---

## 1. Overall Assessment: Moderate Slop (Two Competing Visual Languages)

Marketing Academy currently mixes two incompatible design systems:

1. **The "Editorial Lab" System (Strong Foundation):**
   - Warm paper (`#fafaf8`) and deep ink (`#191927`) palette in `src/app/globals.css`
   - Editorial type pairing: `Fraunces` (display), `Public Sans` (UI), `IBM Plex Mono` (tabular data/codes) in `src/app/layout.tsx`
   - Clean geometric bar-chart mark in `src/app/icon.svg`
   - Quiet structural patterns in `src/components/PageMasthead.tsx` and `src/components/StatsRow.tsx`

2. **AI-Template / SaaS-Slop Pockets (Needs Unslopping):**
   - Concentrated heavily on the **Homepage** (`HeroModern`, `WorldGrid`, `LearningPaths`, `InteractiveLab`, `CaseStudiesSection`, `FinalCtaSection`, `src/app/page.tsx`): morphing 3D gradient blobs, radial blurs, frosted glass floating pills, 3D glossy orbs, rotated pastel shape confetti, glowing dark-indigo SaaS container, `animate-pulse` dot, and emoji feature cards.
   - Scattered across **App, Catalog, Dashboard & Lesson pages**: `transition-all`, `hover:-translate-y` / `hover:scale`, `uppercase tracking-wider` labels, emoji icons in UI chrome, exclamation marks in interface copy, arbitrary pixel values, and mixed border radii.

**Scope Recommendation:** Run **Full Unslop (9 passes)** on the **Homepage** and **Polish Mode** across **Global Chrome + App/Dashboard/Lesson pages** so the entire web app speaks the Editorial Lab language consistently.

---

## 2. Proposed 5-Line Direction (Confirm Before Editing)

- **Product.** A free, source-cited marketing curriculum with interactive calculators, practice projects, and lesson quizzes for self-taught marketers and founders.
- **Character.** Editorial, exact, encouraging.
- **World.** Paper, ink, and a working marketer's field notebook — warm off-white stock, sharp ink typography, and tabular data.
- **Moments.** (1) The `InteractiveLab` built as a crisp paper-and-ink working instrument rather than a glowing dark box; (2) real curriculum, quiz, `StatsRow`, and `ActivityHeatmap` data views.
- **Signature.** Numbered mono classification codes and specimen indices (`01`, `02`, `MKT-01` in `IBM Plex Mono` with `tabular-nums`) paired with quiet hairline rules.

---

## 3. Detailed Audit by Slop Category

### A. Surfaces, Color & Visuals

| Where | Slop Sign | Fix |
| --- | --- | --- |
| `src/components/home/HeroModern.tsx:204-290` | `radial-gradient` blur aura, rotating `linear-gradient(140deg, #837cff, #4f46e5, #3327ba)` morphing blob with specular droplets, and 4 `backdrop-blur-md` floating pills (`Psychology`, `Growth`, `Strategy`, `AI & automation`). | Remove decorative blob, aura, and floating pills. Replace with a real product preview (e.g., an interactive lesson + quiz/lab specimen card) on a calm surface. |
| `src/components/home/WorldGrid.tsx:97-108` | 4 tilted `rounded-3xl` 3D glossy gradient orbs with `blur-[1px]` specular highlights inside pastel cards (`--lav`, `--blue`, `--mint`, `--amber`). | Remove decorative orbs. Use quiet neutral cards (`--card` / `--paper`) with hairline borders; distinguish categories via mono classification codes or a single small status dot. |
| `src/components/home/LearningPaths.tsx:77-84` | 4 rotated pastel squares (`w-10`, `w-14`, `w-8`, `w-6`) above each track title as decorative filler. | Remove filler shapes. Replace with real track metadata (step count, duration, or first-lesson preview). |
| `src/components/home/InteractiveLab.tsx:69-81` | Dark `#1d1c32` SaaS box with `blur-[100px]` `#4f46e5` radial glow and `bg-white/[0.05] backdrop-blur-md` glass panel. | Remove radial blur and glassmorphism. Restyle as a crisp raised surface (`--card` with hairline `--border`) matching the Editorial Lab palette. |
| `src/components/interactive/LabShell.tsx:65` | `radial-gradient` ambient wash behind lab shell. | Remove radial wash; use flat surface + hairline border. |
| `src/components/home/CaseStudiesSection.tsx:24-30` | `bg-[var(--blue)]` card with a giant `text-[180px]` watermark `↗` arrow. | Use a quiet raised surface (`--paper`) with a hairline border and remove the giant watermark. |
| `src/components/home/FinalCtaSection.tsx:9-18` | Dark purple `#25224b` band with two `480px` / `620px` decorative orbital rings. | Remove orbital rings; align background with the neutral ramp (`--muted` or `--paper` with top hairline). |
| `src/app/compare/[slug]/page.tsx:318,397`, `src/app/glossary/[slug]/page.tsx:93`, `src/app/learn/[category]/page.tsx:138`, `src/app/search/SearchClient.tsx:138,157` | `bg-gradient-to` surface washes on headers and cards. | Replace with flat neutral surfaces (`--card` / `--muted`) and hairline borders. |

### B. Typography

| Where | Slop Sign | Fix |
| --- | --- | --- |
| `src/app/layout.tsx:17-31` | 5 Google font families loaded simultaneously (`Geist`, `Geist Mono`, `Fraunces`, `Public Sans`, `IBM Plex Mono`). | Consolidate to one UI sans (`Public Sans` or `Geist`), one mono (`IBM Plex Mono` or `Geist Mono`), and `Fraunces` for display headlines only. |
| `src/components/PageMasthead.tsx:15` | `tracking-[0.08em] uppercase` on masthead strip. | Use sentence case with normal or `+0.01em` tracking. |
| `src/components/home/HeroModern.tsx:127,139` | `uppercase tracking-wider` on pill kicker; `<em className="font-serif italic ...">` in H1. | Remove pill kicker; remove `italic` from H1 (use font/color contrast without italic). |
| `src/components/Footer.tsx:75,94,113` | `uppercase tracking-wider` on column headings (`Learn`, `Resources`, `Topics`). | Sentence case (`font-medium`, normal tracking). |
| `src/app/learn/[category]/[lesson]/page.tsx:251,255,260` | `.toUpperCase()` and `PROJECT`/`PROJECTS`, `UPDATED ...` uppercase metadata. | Sentence case (`1 project`, `Updated Nov 2026`). |
| `src/app/profile/ProfileClient.tsx:167,175,201`, `src/app/tracks/page.tsx:29`, `src/app/projects/page.tsx:44`, `src/app/tools/page.tsx:49`, `src/app/compare/page.tsx:94`, `src/app/about/page.tsx:94,119,142,198`, plus ~45 more files | `uppercase` and `tracking-wider` / `tracking-widest` on section labels and kickers (120 lines across 56 files). | Sentence case across all labels; reserve mono for codes, dates, and numbers. |
| `HeroModern.tsx`, `WorldGrid.tsx`, `LearningPaths.tsx`, `CaseStudiesSection.tsx`, `FinalCtaSection.tsx`, `src/app/page.tsx` | `font-bold` (700) on headings while newer pages (`learn`, `tracks`, `projects`, `tools`, `StatsRow`) use `font-semibold` (600) or 500. | Standardize headings to `font-medium` (500) / `font-semibold` (600) and rely on size + color for hierarchy. |
| `HeroModern.tsx:174-192`, `StatsRow.tsx:38`, `ProfileClient.tsx:92-100` | Mixed number formats (`500+`, `100%`, `01`, `4h`) and missing `tabular-nums` on stat figures. | Add `tabular-nums` to all stat counters and unify number formatting. |

### C. Icons & Emoji (48 lines across 21 files)

| Where | Slop Sign | Fix |
| --- | --- | --- |
| `src/app/page.tsx:19-22,119` | `🤖`, `🎯`, `🔎`, `⚡` emojis on Featured lesson cards and AI Spotlight tile. | Replace with `lucide-react` line icons (`16px` or `18px`, `strokeWidth={1.5}`) in muted/secondary color, or omit. |
| `src/components/Footer.tsx:123`, `src/app/learn/page.tsx:56`, `src/app/profile/ProfileClient.tsx:213` | `{cat.emoji}` rendered inline before category titles. | Remove category emojis; use mono classification codes (`classificationCode(cat.slug)`) or plain text. |
| `src/app/profile/ProfileClient.tsx:132` | `🔥 {stats.streak}-day streak` emoji in profile header. | Use `Flame` from `lucide-react` at `16px`, `strokeWidth={1.5}`, muted color. |
| `src/app/compare/page.tsx:27-69`, `src/app/not-found.tsx:10-13`, `src/app/quizzes/page.tsx:64-98`, `src/app/achievements/AchievementsClient.tsx:108`, `src/components/AchievementToast.tsx:44`, `src/app/learn/[category]/[lesson]/page.tsx:333`, `src/app/settings/SettingsClient.tsx:320`, `src/app/skill-map/SkillMapClient.tsx:113` | Emojis (`📊`, `🕷`, `🤖`, `🧠`, `🚀`, `🏅`, `⚖️`, `⚠`, `🗺`, etc.) used as UI icons. | Replace all UI emojis with `lucide-react` icons at one consistent size and stroke. |
| `HeroModern.tsx:257-287`, `WorldGrid.tsx:9-51` | Unicode symbol icons (`✳`, `↗`, `⟲`, `⌘`) inside colored icon tiles. | Replace with `lucide-react` icons or mono classification codes. |

### D. Copy & Microcopy

| Where | Slop Sign | Fix |
| --- | --- | --- |
| `src/components/Quiz.tsx:34,41,376`, `src/components/gamification/DailyChallenge.tsx:95,103`, `src/components/ShareButtons.tsx:146`, `src/components/StorageWarning.tsx:9`, `src/components/TrackShareButton.tsx:37`, `src/app/certificates/[slug]/page.tsx:381`, `src/app/interview-questions/CopyQuestionsButton.tsx:59` | Exclamation marks in interface text (`!` on buttons, alerts, quiz states). | Plain statements without exclamation marks. |
| `src/app/tools/geo-audit/GeoAuditClient.tsx:145` | `"AI-Powered"` hype label. | Replace with plain description (e.g., `"Citability check"` or `"GEO Audit"`). |
| `src/app/profile/ProfileClient.tsx:100,235`, `src/app/achievements/AchievementsClient.tsx:12,59,111`, `src/components/AchievementToast.tsx:101`, `src/components/MarkComplete.tsx` | `"Unlock"` used repeatedly in achievement/progress copy. | Replace with `"Earn"` or `"Complete"`. |
| `HeroModern.tsx:138-140`, `FinalCtaSection.tsx:24`, `CaseStudiesSection.tsx:89` | Trailing periods on short display headlines (`Understand marketing. / Build what works.`, `Start with lesson one.`). | Remove trailing periods on headlines and short labels. |
| `src/components/gamification/DailyChallenge.tsx:39-105` | Hardcoded `communityPct` values (`62`, `38`, `71`, `29`). | Verify whether these come from real data; if placeholder, replace with sourced teardown outcome only or remove unverified percentage. |

### E. Spacing, Layout & Components

| Where | Slop Sign | Fix |
| --- | --- | --- |
| 40 lines across 17 files (`ProofStrip.tsx:27`, `InteractiveLab.tsx:148-316`, `HeroModern.tsx:200-228`, `WorldGrid.tsx:87,106,115`, `LearningPaths.tsx:73`, `CaseStudiesSection.tsx:24,27`, `FinalCtaSection.tsx:12,16`, `Nav.tsx:206`, `LessonResourcesClient.tsx:24,109`) | Arbitrary pixel values (`text-[10px]`, `text-[11px]`, `min-h-[350px]`, `min-h-[340px]`, `w-[190px]`). | Snap to the 4px scale (`12px` minimum for readable labels; `352px`/`336px` or natural height; `192px` sidebar). |
| `src/components/home/HeroModern.tsx:125-131` | Rounded pill badge above headline (`"Free, no sign-up"`) with pulsing green dot. | Remove pill badge; use `PageMasthead` or quiet plain meta text. |
| Across Homepage & App pages | Mixed border radii: `rounded-lg` (`/learn`, `/tools`), `rounded-xl` (buttons, lesson cards), `rounded-2xl` (`WorldGrid`, `LearningPaths`), `rounded-3xl` (`InteractiveLab`, `CaseStudiesSection`), `rounded-full` (`Edit profile` button). | Standardize to token scale: `8px` controls/buttons, `12px–16px` cards, `16px–20px` panels, with `inner = outer - padding`. |
| `src/app/page.tsx:87-140` | 10 stacked sections with inconsistent vertical rhythm (`py-14 sm:py-28`, `pt-8`, `pt-10 pb-4`, `py-12 sm:py-16`). | Standardize section spacing on the 4px scale (`py-16 sm:py-24`) and group dynamic learner widgets cleanly. |

### F. Motion & Interaction

| Where | Slop Sign | Fix |
| --- | --- | --- |
| `src/components/home/HeroModern.tsx:29-103` | Continuous GSAP rotation loops (35s/45s/55s), infinite `yoyo` floating pills, `mousemove` 3D parallax, and `back.out(1.4)`/`back.out(2)` overshoot springs. | Remove infinite loops, bounce easing, and cursor parallax. Use at most one short fade-and-rise entrance (`cubic-bezier(0.22, 1, 0.36, 1)`). |
| `HeroModern.tsx:129`, `DailyChallenge.tsx:185`, `GeoAuditClient.tsx:176,218` | `animate-pulse` on non-live status dots and badges. | Make static (keep pulse only for genuine loading skeletons). |
| 64 lines across 39 files (`WorldGrid.tsx:87,99`, `LearningPaths.tsx:73,81`, `CaseStudiesSection.tsx:24,48,59,83`, `FinalCtaSection.tsx:35`, `HeroModern.tsx:157,164`, `learn/[category]/page.tsx:201,220`, `src/app/page.tsx:116,160,207`) | `transition-all`, `hover:-translate-y-1.5`, `group-hover:scale-105`. | Replace `transition-all` with `transition-colors` or `transition-[transform,opacity]`, and replace card lift/scale with subtle border or surface-step transitions. |

---

## 4. Section-by-Section Summary

- **Global Chrome (`Nav`, `Footer`, `PageMasthead`):** `Nav` is structurally clean; `Footer` needs sentence-case headers and emoji removal in Topics; `PageMasthead` needs sentence-case text instead of `uppercase tracking-[0.08em]`.
- **Homepage (`HeroModern` → `FinalCtaSection`):** Highest slop concentration. Strip the 3D blob, radial blurs, floating pills, 3D orbs, pastel shapes, dark-indigo glow box, and orbital rings; replace the hero visual with a real product/curriculum specimen and unify all home sections under the Editorial Lab palette and type scale.
- **Catalog & Learning (`Learn`, `Tracks`, `Projects`, `Lesson` reader):** Already closest to the Editorial Lab direction (`PageMasthead`, `classificationCode`, `StatsRow`). Clean up `uppercase` meta labels, category emojis, `transition-all`, and `hover:-translate-y` on cards.
- **Profile, Achievements & Gamification (`ProfileClient`, `AchievementsClient`, `DailyChallenge`):** Replace emojis (`🔥`, `🚀`, `🏅`), `"Unlock"` hype copy, exclamation marks, `uppercase` section labels, and `animate-pulse`.
- **Tools & Reference (`Tools`, `GEO Auditor`, `Compare`, `Glossary`):** Remove `bg-gradient-to` washes, `"AI-Powered"` label, emoji icons in `Compare`, and `uppercase tracking-wider` labels.

---

## 5. Execution Order & Completed Work

### Phase 1 — Homepage & Global Chrome (Completed)
- `src/components/PageMasthead.tsx`: Sentence-case labels, `text-xs`, `tabular-nums`, solid status dot.
- `src/components/Footer.tsx`: Sentence-case column headers, removed category emojis, standardized `lucide-react` icons (`16px`, `strokeWidth={1.5}`).
- `src/components/home/HeroModern.tsx`: Removed GSAP infinite rotation/float loops, `back.out` bounce, mouse parallax, `animate-pulse` pill, italic H1, and 3D gradient blob; replaced hero visual with a real **Lesson & Quiz Specimen** preview; added `tabular-nums` to metric counters.
- `src/components/home/ProofStrip.tsx`: Added `01`–`04` mono indices with `tabular-nums`, snapped `text-[11px]` to `text-xs`, removed `hover:translate-x-1`.
- `src/components/home/WorldGrid.tsx`: Removed 3D gradient orbs, pastel card backgrounds, Unicode glyph tiles, and `hover:-translate-y-1.5`/`scale-105`; unified onto `--card` + `--border` with mono codes.
- `src/components/home/LearningPaths.tsx`: Removed rotated pastel filler squares and lift/scale hover; added track code + level + `tabular-nums` metadata.
- `src/components/home/InteractiveLab.tsx`: Replaced `#1d1c32` glowing SaaS box and radial blur with an Editorial Lab `--card` / `--muted` instrument, `tabular-nums` metrics, sentence-case labels, and semantic `--success` / `--danger` colors.
- `src/components/home/CaseStudiesSection.tsx`: Removed `--blue` card background, giant `↗` watermark, `rounded-3xl`, and trailing period.
- `src/components/home/FinalCtaSection.tsx`: Removed `#25224b` purple band and decorative orbital rings; aligned with `--muted` + top hairline.
- `src/app/page.tsx`: Removed emojis (`🤖`, `🎯`, `🔎`, `⚡`, category emojis), `bg-[var(--lav)]`, `transition-all`, `hover:-translate-y-1`, and `uppercase`; unified section spacing (`py-16 sm:py-24`) and `01`–`21` topic indices.

### Phase 2 — App, Dashboard, Catalog, Tools & Lesson Pages (Completed)
- `src/app/learn/page.tsx`: Removed `{cat.emoji}`, `font-semibold` → `font-medium`, snapped `0.7rem` to `text-xs` with `tabular-nums`.
- `src/app/learn/[category]/page.tsx`: Removed `bg-gradient-to-br` header wash, `{cat.emoji}`, `hover:-translate-y-0.5`, and `transition-all`.
- `src/app/learn/[category]/[lesson]/page.tsx`: Converted `.toUpperCase()` metadata to sentence case, removed `⚖️` emoji, replaced `transition-all` with `transition-colors`.
- `src/app/tracks/page.tsx`, `src/app/projects/page.tsx`, `src/app/tools/page.tsx`: Converted `uppercase tracking-[0.08em]` kickers to sentence case `text-xs`.
- `src/app/profile/ProfileClient.tsx`: Replaced `🔥` emoji with `Flame` icon, removed `{c.emoji}`, converted `uppercase` section labels to sentence case, added `tabular-nums`.
- `src/app/achievements/AchievementsClient.tsx`: Removed `🚀` emoji, converted `uppercase` kicker to sentence case, replaced `"unlock badges"` with `"earn badges"`.
- `src/components/AchievementToast.tsx`: Replaced `🏅`/emoji with `Award` icon (`lucide-react`), removed uppercase tracking, changed `"Achievement Unlocked"` to `"Achievement earned"`.
- `src/components/StreakBadge.tsx`: Replaced `🔥` and `🛡️` emojis with `Flame` and `Shield` icons (`lucide-react`, `14px`, `strokeWidth={1.5}`) and `tabular-nums`.
- `src/components/StorageWarning.tsx`: Replaced `⚠️` and `✕` with `AlertTriangle` and `X` (`lucide-react`).
- `src/components/Quiz.tsx`: Removed `!` from pass headings and `transition-all` on option buttons.
- `src/components/gamification/DailyChallenge.tsx`: Removed `animate-pulse` on streak flame, `uppercase tracking-wider`, and `transition-all`.
- `src/app/tools/geo-audit/GeoAuditClient.tsx`: Removed `"AI-Powered"` pill badge, `animate-pulse` on button icon, and `transition-all` on score bar.
- `src/components/interactive/LabShell.tsx`: Converted `uppercase tracking-wider` labels to sentence case, removed `scale(1.05)` and `transition-all` on stage buttons.
- `src/app/not-found.tsx`, `src/app/search/SearchClient.tsx`, `src/app/glossary/[slug]/page.tsx`, `src/app/compare/[slug]/page.tsx`: Removed `bg-gradient-to` washes, category/quick-link emojis, `transition-all`, and `uppercase` labels.

### Phase 3 — Remaining UI Polish Across All Pages & Components (Completed)
- `src/app/compare/page.tsx`: Removed `Sparkles` pill badge, tool emojis (`📊`, `🕷️`, `🐵`, `📧`, etc.), `translateY(-2px)` lift, `uppercase tracking-wider`, and `transition-all`.
- `src/app/quizzes/page.tsx`: Replaced `🧠`, `📖`, `📝`, `🏆` with `BookOpen`, `FileText`, `Trophy` (`lucide-react`), removed pill badge, added `tabular-nums`.
- `src/app/skill-map/SkillMapClient.tsx`: Replaced `🗺️` with `Map` (`lucide-react`).
- `src/app/settings/SettingsClient.tsx`: Replaced `⚠️` with `AlertTriangle` (`lucide-react`).
- `src/components/OnboardingModal.tsx`: Replaced `🌱`–`📱` emojis with `lucide-react` icons (`Sprout`, `Briefcase`, `Rocket`, `ShoppingCart`, `User`, `Cpu`, `PenTool`, `Smartphone`).
- `src/app/certificates/[slug]/page.tsx`, `src/app/interview-questions/CopyQuestionsButton.tsx`, `src/app/interview-questions/[category]/CopyQuestionsButton.tsx`, `src/components/ShareButtons.tsx`, `src/components/TrackShareButton.tsx`: Removed exclamation marks from UI copy and LinkedIn share text.
- **22 files** (`about`, `resources`, `review`, `CategoryProgress`, `DecisionBox`, `MarkComplete`, `RecentlyViewed`, `RecommendedNext`, `RelatedLessons`, `ReviewDueBadge`, `ScrollToTop`, `SimulationRunner`, `SurpriseMeButton`, `TrackLessonList`, `TrackProgress`, `TrackQuizPageClient`, `TracksPageClient`, and all 5 interactive lab components): Replaced all remaining `transition-all` with explicit `transition-colors`, `transition-[width]`, or `transition-[transform,opacity]`.

### Phase 4 — Type Scale & Sentence-Case Labels (Completed)
- Converted `text-[0.65rem] tracking-[0.08em] uppercase`, `text-[10px] font-semibold uppercase tracking-wide`, and `uppercase tracking-wider` labels across 13 files (`about`, `admin/users`, `compare/[slug]`, `glossary/[slug]`, `portfolio`, `profile`, `projects`, `resources`, `review`, `search`, `skill-map`, `DecisionBox`, `InAction`) to readable `text-xs` / `text-sm` sentence case (`font-medium`).

### Phase 5 — Final Sweep & Full Verification (Completed)
- `src/components/interactive/*` (`AbTestLab`, `FunnelAnalysisLab`, `HeadlineTester`, `KeywordResearchLab`, `LabShell`, `LtvCacLab`, `RoasCalculator`): Converted remaining `text-[0.65rem]`/`text-[0.68rem]`/`text-[0.7rem]` `uppercase tracking-wider` labels to `text-xs` sentence case.
- `src/components/LessonResourcesClient.tsx`: Converted `text-[10px]`/`text-[11px]` `uppercase tracking-widest` labels to `text-xs font-medium`.
- `src/components/Nav.tsx`: Snapped `w-[190px]` / `w-[210px]` flyout sidebars to the 4px scale (`w-48` = 192px, `w-52` = 208px).

### Intentional Exceptions Kept
- `GeoAuditClient.tsx` & `Mermaid.tsx` `animate-pulse` on genuine loading skeletons.
- `src/app/opengraph-image.tsx` & `src/app/api/og/route.tsx` edge-runtime OG image generators.
- `DailyChallenge.tsx` quoted real-world marketing copy examples from Basecamp/Booking.com.
- `Quiz.tsx` / `StorageWarning.tsx` / `AchievementToast.tsx` comments only (not rendered UI).

