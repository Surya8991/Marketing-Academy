# Hands-On Projects Layer, Implementation Plan

> **PRIORITY: HIGH.** This is the active roadmap for the next major phase of the project. Section 0 is the running order.
>
> Status: PROPOSED, awaiting approval. **No code written yet, this document is the only deliverable so far.**
>
> ⚠️ **Contains a family of five live integrity bugs**, unrelated to the projects feature but found while planning it. Two are P0: track pages let a learner complete a whole track without opening a lesson (**0.1**), and the certificate page has **no eligibility gate whatsoever** (**0.1b**). See **0.1 through 0.1f**. Fix these as one batch before anything else in this document; they interlock, and fixing one alone moves the hole rather than closing it.
>
> Decisions locked by the owner:
> - **Projects on every lesson, present and future. Track lessons first** (0.2)
> - Pilot-first rollout
> - Strict verified company roster, with full company details, mixing global and Indian companies across sizes, sectors and revenue
> - Full XP / completion tracking
> - All six proposed additions accepted (section 9)
> - A dedicated `/projects` hub with search, filters and labels (section 5)
> - Every project carries a free-and-paid Recommended Tools section (section 2.3)
> - Projects appear on both the lesson page and the hub, from one definition (section 5A)
>
> UX reference: **ToolForge** (`master-tools-hub.vercel.app`), the owner's own tools hub. Patterns adopted and rejected are itemised in 5.9.
>
> **The brief, in two reader complaints:**
>
> 1. *"I finished `/learn/seo/technical-seo` knowing what crawlability is, and I still cannot check it on my own site."*
> 2. *"I finished `/learn/paid-ads/paid-ads-101` and I may or may not run a real ad, but either way I should know what to do in what situation."*
>
> These need structurally different answers, a **diagnostic runbook** and a **decision simulation**. Section 2.3 is the plan for both, and everything else in this document exists to deliver it.

---

## 0. Execution order by priority

This section is the **authoritative running order**. Sections 1-12 below are reference material, organised by topic rather than by importance; read them for detail, execute in the order here.

Every known issue, in the order it should be executed. Nothing below is implemented yet.

#### Stage 1, integrity. Ship as one batch, they interlock

| # | Item | Section | Why this rank |
|---|---|---|---|
| **1** | Track checkboxes bypass the quiz entirely | **0.1** | Live P0. 13 lessons, 390 XP and a certificate in ~5 seconds without opening anything |
| **2** | Certificates render and print with **no gate at all** | **0.1b** | Live P0. Needs no clicks, just the URL. Independent of item 1 |
| **3** | Quiz reveals answers then allows retry | **0.1c** | Fixing 1 makes the quiz the only gate, and this makes that gate ~30 seconds to defeat |
| **4** | 80% pooled pass marks failed lessons complete | **0.1d** | Needs a decision, not necessarily a fix |
| **5** | `markIncomplete()` does not reverse XP | **0.1e** | Low severity, cheap to fix while in the file |
| **6** | Lint or test that fails on a 4th ungated `markComplete()` | 0.1f | Stops the family regrowing. Rule 36 |

> Fix 1-3 together. Closing the track bypass alone pushes everyone onto a quiz that reveals its own answers, and the certificate at the end was never gated regardless. **Fixing one in isolation moves the hole rather than closing it.**

#### Stage 2, blockers for the projects work

| # | Item | Section | Why this rank |
|---|---|---|---|
| **7** | 10 lessons with zero `##` headings | 12.2 | No TOC renders, **and** hard-blocks projects and scenarios there, since steps must map to real headings |
| **8** | Resolve 8 near-duplicate slug pairs | 12.6 | Must land **before** authoring or near-identical projects get written twice. 5 of the 8 are in `analytics` |
| **9** | 4 sub-700-word stub lessons | 12.3 | Two are independently flagged unprojectable in 11.6 |

#### Stage 3, reader-visible cleanup, parallelisable

| # | Item | Section | Why this rank |
|---|---|---|---|
| **10** | `" ,  "` residue in 53 files, 200+ occurrences | 12.1 | Visible to every reader today. Scripted pass plus review |
| **11** | UTF-8 BOM in 19 files | 12.7 | Silently breaks tooling anchored on `^export`. It broke this audit |
| **12** | Single-quoted `lessonMeta` in 25 files | 12.8 | Same class: caused three phantom findings during the audit |
| **13** | One bloated lesson | 12.9 | Optional |

#### Stage 4, the projects layer

| # | Item | Section | Why this rank |
|---|---|---|---|
| **14** | Phase 0, roster + datasets + types | 6 | Foundation for everything after |
| **15** | Phase 1, pilot + hub + review gate | 6, 11.8 | Proves all six modes at 50 projects, not 600 |
| **16** | Phase 2, track lessons (240 lessons, ~480 projects) | 6, 0.2 | The stated priority target |
| **17** | Phase 2b, concept scenarios for track lessons | 10 | **Bundle with the 45 stale-year fixes (12.5)**, one evidence refresh not two |

#### Stage 5, long tail

| # | Item | Section | Why this rank |
|---|---|---|---|
| **18** | Phase 3, career layer, `/portfolio`, certificates, `calibration` | 6, 11.5 | `calibration` needs persistence and scheduled re-prompting that do not exist |
| **19** | Related Concepts, present in only 10% of lessons | 12.4 | Largest SEO win available, but blocks nobody. Generate from `curriculum.ts` |
| **20** | Remaining 402 non-track lessons, ~804 projects | 0.2 | Runs indefinitely. Rule 38 stops the backlog regrowing |

---

### 0.1 P0 BUG: track pages let you complete lessons without reading or quizzing

**Status: confirmed in code, live in production today.**

`src/components/TrackLessonList.tsx` line 96 wires each lesson's circle straight to `toggle()`:

```tsx
<button onClick={() => toggle(lesson.category, lesson.slug)}>
```

and `toggle()` (lines 20-34) marks complete and awards full XP with **no quiz check of any kind**:

```tsx
markComplete(id);
const newState = addXP("complete", id);   // 30 XP, same as a real completion
```

Compare `src/components/MarkComplete.tsx` on the lesson page, line 132:

```tsx
const locked = !quizPassed && !done;   // reads getQuizPassed(category, slug)
```

**Two components perform the same state change through two different gates.** The lesson page enforces Rule 25. The track page ignores it entirely.

#### What it costs

On a 13-lesson track, roughly five seconds of clicking yields:

- 13 lessons marked complete, never opened
- **390 XP** (13 × 30), same as genuinely finishing them
- 100% track progress
- Achievements and a track certificate

It also makes the track's own headline call to action pointless. The page offers *"Take track quiz to mark all complete"*, gated at 80% across a pooled question set, sitting directly above thirteen circles that do the same thing for free. **The honest path is strictly harder than the bypass**, which is the worst possible incentive design.

Knock-on damage: `/certificates` becomes unfalsifiable, the `/portfolio` view planned in 9.3 inherits fake completions, and any future "most completed projects" signal on the hub is corrupted.

#### Why it exists

It was deliberate. AGENTS.md Rule 24 states: *"Individual per-lesson checkboxes are NOT gated."* That decision predates Rule 25, which later locked the lesson page behind a quiz. **The two rules now contradict each other**, and Rule 24 is the stale one.

#### Fix

Apply the `MarkComplete` gate to the track list. Same import, same rule:

```tsx
import { getQuizPassed } from "@/lib/quizzes";

const locked = !getQuizPassed(lesson.category, lesson.slug) && !done;
```

- **Locked**: render a lock icon; clicking navigates to `/learn/{category}/{slug}#quiz-section` rather than toggling. Mirrors the scroll-to-quiz behaviour of Rule 25, adapted for a cross-page jump.
- **Unlocked or already done**: current toggle behaviour is fine, including un-completing.
- **`getQuizPassed` must be called with `sourceCategory`** for cross-listed lessons, per Rule 31, or the 13 `mental-models` lessons surfaced under `fundamentals` will read the wrong localStorage key and stay permanently locked.
- Keep the track-quiz route as the legitimate bulk path. Once the bypass closes, *"Take track quiz to mark all complete"* becomes a genuine shortcut rather than the slow lane.

#### Migration question, needs a decision

Existing users hold completions earned through the bypass. Options:

1. **Leave them.** No disruption, but existing certificates stay unearned.
2. **Invalidate un-quizzed completions.** Correct, and it will visibly reset progress for anyone who used the bypass.
3. **Grandfather with a notice.** Keep existing completions, gate everything new, and say so once in the UI.

Recommend **3**. It is honest about the change without punishing people for using an affordance the product offered them.

#### AGENTS.md changes required

- **Rewrite Rule 24.** Delete *"Individual per-lesson checkboxes are NOT gated."* Replace with the gated behaviour and a note that it must match Rule 25.
- **Add:** any component calling `markComplete()` **must** check `getQuizPassed()` first. There are currently two such call sites; a third would reopen the hole.

---

### 0.1b P0 BUG: certificates have no eligibility gate at all

**Status: confirmed in code, live today. Independent of 0.1, and arguably worse.**

`src/app/certificates/[slug]/page.tsx` reads completion state:

```tsx
const count = track.lessons.filter((l) => completed.has(`${l.category}/${l.slug}`)).length;
const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
```

...and then **never uses `pct` as a condition**. Grepping the file for `pct <`, `pct >=`, `pct ===`, `completedCount <`, or any eligibility guard returns **zero matches**. The page renders `Certificate of Completion` with a working `window.print()` button unconditionally.

**Anyone can open `/certificates/b2b-marketer` having completed nothing and print a certificate.** The only trace is a progress line reading "Completed 0 of 21 lessons (0%)", which is on the page but not on the part that matters.

This does not even require the 0.1 bypass. It needs no clicks at all, just the URL.

**Fix:** gate the certificate render on `pct === 100`. Below that, show the progress bar and a link back to the track. Decide separately whether 100% of lessons is the bar, or lessons plus the track quiz, which is the stronger claim now that 0.1 closes the free path.

---

### 0.1c P1 BUG: the lesson quiz reveals its answers, then lets you retry

`src/components/Quiz.tsx` requires 100% to dispatch `QUIZ_PASSED_EVENT`, which sounds strict. But on answering each question it:

- highlights the correct option (`i === question.correct`, line 251 and 280)
- prints the full explanation (line 296-298)
- offers `handleRetry()` (line 119, wired at 159 and 194)

So the defeat is: answer all four at random, read the four revealed correct answers, click retry, score 100%. **Roughly thirty seconds, no knowledge required.**

This matters more once 0.1 is fixed, because the quiz then becomes the *only* gate on completion, XP and certificates. Fixing 0.1 without fixing this just moves the bypass rather than closing it.

**Options, cheapest first:**

1. **Reveal explanations only after the whole quiz is submitted**, not per question. Keeps the teaching, removes the answer key mid-run.
2. **Shuffle option order on every attempt.** See 0.1c-i below, this is the highest-value fix and it has a trap in it.
3. **Cooldown or attempt cap** before a retry counts toward passing. Heavier, and probably unnecessary if 1 and 2 land.

Recommend 1 + 2. Note the tension honestly: instant per-question feedback is genuinely good pedagogy, and this is the one place where the teaching goal and the gating goal actually conflict. Option 1 is the compromise, since the explanation still arrives, just after the attempt is locked in.

---

### 0.1c-i Shuffle answer positions on every attempt

**Confirmed: `Quiz.tsx` shuffles nothing at all.** The whole file contains **zero** occurrences of `Math.random` or `sort(`. Line 76 reads straight from the prop:

```tsx
const question = questions[current];   // no shuffle, ever
```

and `handleRetry()` resets `current`, `selected`, `answers` and `finished` but **reorders nothing**.

So question order *and* option order are byte-identical on every attempt. Combined with the answer reveal in 0.1c, the defeat is even cheaper than described above: memorise **"B, D, A, C"** on the first run and spam those four positions on the second. **You never read a word.** Position-spamming, not just answer-reading, is the actual exploit.

#### ⚠️ The trap that would silently break all 2,252 questions

`correct` is a **positional index**, not a value (line 88: `const isCorrect = selected === question.correct;`).

Shuffling `options[]` without remapping `correct` would silently mis-grade **every question in the library**. No build error. No runtime error. No type error, since `correct` stays a valid `number`. Just wrong answers marked correct across 642 lessons, and right answers marked wrong. It is the most dangerous possible way to implement this, and the naive version looks completely correct in review.

**Correct implementation, pair then shuffle then recompute:**

```ts
function shuffleOptions(q: Quiz): Quiz {
  const paired = q.options.map((text, i) => ({ text, wasCorrect: i === q.correct }));
  for (let i = paired.length - 1; i > 0; i--) {       // Fisher-Yates, not sort(() => Math.random() - 0.5)
    const j = Math.floor(Math.random() * (i + 1));
    [paired[i], paired[j]] = [paired[j], paired[i]];
  }
  return {
    ...q,
    options: paired.map((p) => p.text),
    correct: paired.findIndex((p) => p.wasCorrect),   // recomputed, never carried over
  };
}
```

Use Fisher-Yates rather than `sort(() => Math.random() - 0.5)`. The sort-comparator trick is what `TrackQuizPageClient` currently uses; it is measurably biased and, on a 4-item array, leaves the original order far more often than chance. For a spam-resistance feature that bias is the whole point of failure.

#### Second trap: hydration

`Math.random()` during render produces different output on server and client. This site already carries a documented theme hydration warning, and a second source would be worse. **Shuffle after mount in `useEffect`**, holding the shuffled set in state, exactly as `TrackQuizPageClient` does. Never shuffle inline in the render path.

#### Audited: only 1 question in the library blocks this

Position-dependent options ("All of the above" and friends) break under shuffling. Scanned all 8,341 option strings across `quizzes.ts`:

| Pattern | Count |
|---|---|
| "All of the above" | **1** |
| "None of the above" | 0 |
| "Both of the above" | 0 |
| "A and B" style | 1 (false positive on inspection) |

**One affected lesson: `analytics/consent-mode`.** Rewrite that single option into a concrete statement, then shuffling is safe for all 2,252 questions. This was the main risk to the whole change and it turns out to be a one-line fix.

#### Scope: options always, questions on retry only

- **Option order: reshuffle on every mount and every retry.** Always safe.
- **Question order: reshuffle on retry only, not mid-session.** The saved resume state is `{ answers: boolean[], total }`, and `answers` is indexed positionally. Reordering questions inside a live session would remap a learner's saved answers onto the wrong questions. Retry is safe because `handleRetry()` already clears the stored state first.

#### Rule to add

**40. Never shuffle a `Quiz.options[]` array without recomputing `correct`.** It is a positional index. A naive shuffle silently mis-grades every question in the library with no error of any kind. Pair each option with a `wasCorrect` flag, shuffle the pairs, then derive the new index. Shuffle after mount, never during render.

---

### 0.1d P2: the track quiz can mark lessons complete that you failed entirely

`TrackQuizPageClient` pools every question from every lesson in the track, shuffles, and passes at `PASS_THRESHOLD = 0.8`. On success `markAll()` marks **all** lessons complete.

On a 13-lesson track with ~52 pooled questions, a learner can miss 10 and still pass at 80%. If those 10 happen to be every question from two lessons, **both lessons are marked complete despite a 0% score on them.**

This is a design consequence rather than an oversight, and it may be acceptable. But it should be a decision, not an accident.

**Options:**

1. Keep 80% overall **and** require a minimum per-lesson score, e.g. at least half of each lesson's pooled questions.
2. Mark complete only the lessons the learner actually scored well on, leaving the rest.
3. Leave as is, and say plainly in the UI that the track quiz certifies the track, not each lesson.

Recommend 1. It preserves the bulk path while stopping a total blank on a topic from being certified.

---

### 0.1e P3: `markIncomplete()` does not reverse XP, so completions can be farmed

`src/lib/progress.ts` `markIncomplete()` deletes the id from the completed set and nothing else. `addXP()` deduplicates on `(action, id)` for 24 hours only.

So: complete a lesson (+30 XP), un-complete it, wait out the 24-hour window, complete it again (+30 XP), repeat. XP, levels and any XP-derived achievement are farmable without limit.

Low severity, since XP is self-motivational rather than competitive, and there is no leaderboard today. It becomes material the moment XP is shown socially or gates anything.

**Fix when convenient:** either subtract the XP in `markIncomplete()`, or make the completion XP dedupe permanent per lesson rather than rolling 24 hours. The second is simpler and matches intent, a lesson is only completed for the first time once.

---

### 0.1f Summary of the integrity family

Five defects, one root cause: **completion state is written from several places, and only one of them checks anything.**

| # | Defect | Severity | Component |
|---|---|---|---|
| 0.1 | Track checkboxes bypass the quiz entirely | **P0** | `TrackLessonList.tsx` |
| 0.1b | Certificates render and print with no gate | **P0** | `certificates/[slug]/page.tsx` |
| 0.1c | Quiz reveals answers, then allows retry | P1 | `Quiz.tsx` |
| 0.1d | 80% pooled pass marks failed lessons complete | P2 | `TrackQuizPageClient.tsx` |
| 0.1e | `markIncomplete` does not reverse XP | P3 | `progress.ts` |

**Fix them together, in that order.** They interlock: closing 0.1 alone pushes every learner onto the quiz, which 0.1c makes trivially defeatable, and 0.1b means the end reward was never gated in the first place. Fixing one in isolation moves the hole rather than closing it.

The three `markComplete()` call sites (`MarkComplete.tsx`, `TrackLessonList.tsx`, `TrackQuizPageClient.tsx`) should be the *only* three, and Rule 36 now requires each to check `getQuizPassed()` first. Worth adding a lint rule or a test that fails on a fourth ungated call site.

---

### 0.2 Scope decision: every lesson, tracks first

Confirmed target is now **all 642 lessons**, present and future, not only the 240 referenced by tracks. Track lessons are done **first**, and the rest follow.

| Wave | Lessons | Projects @ 2 each | Approx words |
|---|---|---|---|
| **Wave 1**, pilot | 19 | ~38 | ~45k |
| **Wave 2**, track lessons | 240 | ~480 | ~550k |
| **Wave 3**, remaining library | 402 | ~804 | ~900k |
| **Total** | **642** | **~1,284** | **~1.5M** |

Two things follow, and both are load-bearing:

**This is a multi-year content programme at full scope, not a feature.** ~1.5M words is roughly double the existing 642-lesson library. The tracks-first ordering is what makes that acceptable: after Wave 2 every curated learning path is fully practisable, which is the point at which the feature is genuinely useful. Wave 3 is a long tail that can run indefinitely without blocking anything.

**Every new lesson from now on ships with its projects.** Adding them retroactively is what created a 1.5M-word backlog in the first place. This becomes an authoring rule (Rule 29 below) so the backlog never regrows.

Mode distribution at full scope, applying the section 11 percentages to 642 lessons:

| Mode | Lessons | Note |
|---|---|---|
| `diagnostic` | ~167 | Cheapest to author |
| `build` | ~167 | ~1 in 3 convert to `teardown` per Rule 24 |
| `simulation` | ~135 | **Most expensive.** Concentrated in paid-ads + pr-communications |
| `teardown` | ~77 | Plus the converted builds |
| `calibration` | ~45 | Phase 3+, infrastructure does not exist |
| `drill` | ~32 | |
| `no-project` | ~19 | Explicit and expected |

**29. Every new lesson ships with its projects and at least one concept scenario in the same commit.** Retrofitting is what created the backlog. A lesson without a project is incomplete, not merely unfinished.

---

## 1. What the research changed about the brief

Three findings reshape the original request. All three are evidence-backed, not opinion.

### 1.1 "Real companies with exits" is a factual minefield

Spot-checking the four most common DTC marketing examples:

| Company | Assumed exit | Reality |
|---|---|---|
| Dollar Shave Club | $1B to Unilever | **True.** Cash deal, July 2016 |
| Warby Parker | IPO | **True.** Direct listing 29 Sep 2021, ~$6.8B open |
| Glossier | "$1.8B exit" | **False.** Never exited. 2025 raise reportedly *below* $1B |
| Away | "acquired" | **False.** Only ever *explored* a sale |

Half the obvious picks are wrong. Writing ~600 projects with ad-hoc per-lesson company choices would ship fabricated exits at scale, which is precisely the failure mode Rule 11 exists to prevent. **The roster must be a vetted, cited data file, not a per-lesson judgment call.**

### 1.2 Track lessons are 240 of the 642, and they come first

**Superseded in part by 0.2:** the confirmed target is now the whole library, all 642 lessons, with track lessons sequenced first. The finding below still governs the *ordering*.

The 24 tracks reference 363 lesson slots, but only **240 unique lessons** across 17 categories. That 240 is a coherent milestone: once it is done, every curated learning path on the site is fully practisable end to end.

| Wave | Lessons | Projects @ 2 each |
|---|---|---|
| Pilot (solo-founder + paid-ads-101) | 19 | ~38 |
| **Track lessons** | **240** | **~480** |
| Remaining library | 402 | ~804 |
| Total | 642 | ~1,284 |

(Revised from 2-3 projects per lesson down to 2, because the runbook anatomy in 2.3 roughly triples the depth of each one. Reasoning in 2.3.)

### 1.3 A single projects data file would be the biggest file in the repo

Existing single-module data files carry no code splitting:

- `quizzes.ts` = **1.91 MB**, 25,723 lines
- `lesson-resources.ts` = **1.72 MB**

600 projects at the depth you asked for (brief + steps + tools + sample filled version) lands around **3-4 MB**, larger than both combined. Following the `quizzes.ts` pattern would make an existing problem materially worse.

**Decision: projects ship as per-category modules, dynamically imported per route.** A lesson page loads only its own category's projects.

---

## 2. Architecture

### 2.1 Case company roster, `src/lib/case-companies.ts`

Single shared module (~90 KB at 150 companies, small enough to stay one file). You asked for full company details:

```ts
export type Region = "india" | "global";
export type ExitScale = "mega" | "large" | "mid" | "small";  // >$1B / $100M-1B / $10-100M / <$10M or undisclosed

export type CaseCompany = {
  id: string;              // "dollar-shave-club"
  name: string;
  website: string;
  industry: string;        // "DTC grooming / subscription ecommerce"
  sector: string;          // coarse facet for filtering: "D2C", "SaaS", "Fintech", ...
  region: Region;
  hq: string;              // "Bengaluru, India"
  founded: number;
  sizeAtExit: string;      // "~200 employees, 3.2M subscribers"
  revenueAtExit: string;   // "$152M ARR (2015)" or "undisclosed"
  bestKnownFor: string;    // the ONE marketing thing they nailed
  disciplines: string[];   // ["copywriting","paid-ads","growth"] , drives lesson matching
  exit: {
    type: "acquisition" | "ipo" | "direct-listing" | "spac" | "merger";
    scale: ExitScale;
    date: string;          // ISO
    valueLabel: string;    // "$1B cash" | "₹11,327 Cr (~$1.36B)" | "undisclosed"
    acquirer?: string;
    source: string;        // citation URL, REQUIRED
  };
  keyNumbers: string[];    // verified stats projects may cite
};
```

Every company is verified by web search before it enters the file. `source` is mandatory. No entry without a confirmed, dated exit.

#### Geographic mix

Target split **~60% global / ~40% India**, and "global" means genuinely global (US, EU, SEA, LatAm), not US-only.

India feasibility is confirmed, there is a deep verified pool across eras and sectors:

| Company | Exit | Date | Value |
|---|---|---|---|
| Flipkart | Acquisition (Walmart, 77%) | May 2018 | $16B |
| Zomato | IPO | 23 Jul 2021 | mcap >₹1 lakh Cr (~$13.3B) |
| Nykaa | IPO | Nov 2021 | Beauty/content-commerce |
| PolicyBazaar | IPO | Nov 2021 | Fintech |
| Freshworks | NASDAQ IPO | Sep 2021 | SaaS |
| Delhivery | IPO | May 2022 | Logistics |
| Honasa (Mamaearth) | IPO | Nov 2023 | D2C beauty |
| Swiggy | IPO | Nov 2024 | ₹11,327 Cr raise, ~$11.3B |
| Ola Electric | IPO | Aug 2024 | ₹6,146 Cr raise |
| FirstCry | IPO | Aug 2024 | ₹4,194 Cr raise |
| Lenskart | IPO | listed 10 Nov 2025 | ~₹70,000 Cr (~$8B) |

**The same Glossier trap applies to India.** Several of the most-cited Indian marketing case studies have never exited: **CRED, Zerodha, Zoho, Dream11** are all private with no exit event. They are barred from the roster under the strict rule, however good the marketing story is.

#### Size and revenue spread

There is a real tension here worth naming: **"various sizes" pulls against "verified exits"**, because small acquisitions usually have undisclosed terms and thin coverage. Left unmanaged, the roster silently drifts to all-mega-cap, and every project ends up about a billion-dollar company, which is useless to a learner marketing a 10-person business.

Resolution: an acquisition with a **confirmed, cited acquisition event but an undisclosed price** is admissible, recorded as `scale: "small"`, `valueLabel: "undisclosed"`. The exit is still a fact; only the number is missing.

Target distribution, enforced as a roster quota:

| Scale | Share | Why it matters |
|---|---|---|
| mega (>$1B) | ~30% | The canonical, well-documented playbooks |
| large ($100M-1B) | ~30% | Most transferable to a scaling business |
| mid ($10-100M) | ~25% | Realistic for a founder or small team |
| small (<$10M / undisclosed) | ~15% | Proves the tactic works without a huge budget |

Sector coverage target, minimum 12 sectors: D2C, SaaS, fintech, edtech, foodtech, ecommerce, healthtech, media, gaming, logistics, travel, B2B services.

#### Currency convention

Indian figures are reported in ₹ crore/lakh, global ones in $. Mixing them silently makes numbers incomparable.

Rule: **always give the native figure first, then a USD approximation and the as-of date**, e.g. `₹11,327 Cr (~$1.36B, Nov 2024)`. Never silently convert, and never present a stale conversion as current.

Target: **~60 companies for the pilot, ~150 for full rollout**, spread so no company appears in more than ~4 projects.

### 2.2 Project data, `src/lib/projects/[category].ts`

21 category modules plus a thin `index.ts` that dynamic-imports by category.

```ts
export type ProjectTier = "mini" | "core" | "big";

export type Archetype =
  | "teardown" | "rebuild" | "audit" | "head-to-head" | "forecast"
  | "simulation" | "reverse-engineer" | "build-the-asset" | "ai-critique";

export type Project = {
  id: string;                  // stable, drives the localStorage key AND the #project-{id} anchor
  tier: ProjectTier;
  archetype: Archetype;
  title: string;
  timeEstimate: string;        // "45 minutes"
  timeMinutes: number;         // machine-sortable, feeds the hub time filter
  objective: string;           // what you can do afterwards
  companyId: string;           // FK into CASE_COMPANIES
  scenario: string;            // real-company setup
  brief: string;               // what you must produce
  mode: ProjectMode;           // diagnostic | simulation | build , see 2.3
  conceptsCovered: string[];   // lesson concepts this drills, feeds the hub concept filter

  // Exactly one of these, per mode:
  steps?: ProjectStep[];       // diagnostic + build , see 2.3a
  stages?: SimulationStage[];  // simulation , see 2.3b
  liveTrack?: LiveTrack;       // simulation only: the optional real-money path

  toolStack: ToolStack;        // free + paid, see 2.4
  datasetUrl?: string;         // /project-data/*.csv , see 9.2
  deliverable: string;
  sampleOutput: string;        // filled example, DIFFERENT company
  successCriteria: string[];
  portfolioReady: boolean;     // surfaces in /portfolio , see 9.3
  stretch?: string;
};
```

Two invariants the authoring pass must hold: `toolStack.free` always describes a complete free path (2.4), and any project whose archetype is `simulation`, `forecast` or `audit` must carry a `datasetUrl` (9.2), since those are impossible without data.

### 2.3 Project modes: the three shapes a project takes

This section defines what a project actually *is*. It is driven by two reported reader experiences, on `/learn/seo/technical-seo` and `/learn/paid-ads/paid-ads-101`, which turn out to need structurally different answers.

#### Why one shape is not enough

Crawlability can be practised for real: open Search Console, look at your own site, fix what is broken. Free, immediate, no risk.

Paid ads cannot. Practising for real means an ad account, a payment method, and roughly **$500-$1,500 over 60-90 days**, which is the lesson's own stated figure. The reader's framing was exact: *"I may run the ad in realtime or not, but I should know what to do in what situation."*

That is not a smaller version of the same problem, it is a different one. And it is not confined to paid ads. Large parts of the library cannot be practised live:

| Blocker | Categories affected |
|---|---|
| Costs real money | paid-ads |
| Needs an audience you do not have | email, social, affiliate-marketing |
| Takes months to show a result | seo (partly), brand-strategy, growth |
| Needs access you do not have | analytics, product-marketing, marketing-leadership |
| Irreversible or high-risk to rehearse live | pr-communications, legal-compliance, crisis scenarios |

So projects come in **three modes**, sharing one spine but differing in shape:

| Mode | Reader question | Reference lesson | Needs live access? |
|---|---|---|---|
| **`diagnostic`** | "Is this broken on my site, and how do I fix it?" | technical-seo | Yes, but free |
| **`simulation`** | "What do I do in what situation?" | paid-ads-101 | **No** |
| **`build`** | "What does a good one look like, and can I make one?" | positioning-doc | No |

The shared spine, in all three: **a question → what you actually see → what it means → what you do next.** Everything below is that spine applied to different constraints.

> ⚠️ **These three are necessary but not sufficient.** A four-agent survey of 454 lessons across all 21 categories found that **~15-20% of the library fits none of them**, and that `build` silently fails on a further ~12% where quality is rhetorical rather than countable. Three more modes and an explicit `no-project` verdict are required. **Section 11 carries the evidence and the revised model, and supersedes this table.** The three below remain correct and are still the majority of the library, so they are documented first and in full.

```ts
export type ProjectMode =
  | "diagnostic" | "simulation" | "build"    // 2.3a-c, ~73% of the library
  | "teardown" | "drill" | "calibration"     // section 11, the remainder
  | "no-project";                            // 11.6, an honest verdict, not a gap
```

---

### 2.3a Diagnostic mode

#### The gap, stated precisely

`technical-seo.mdx` is a good lesson. In 2,208 words it explains six pillars under "The Six Pillars Explained": Crawlability, Indexability, Sitemaps, robots.txt, Canonical Tags, JavaScript Rendering. On crawlability it correctly tells you the problems are broken internal links, redirect chains over 3-4 hops, pages more than 4 clicks deep, and server errors.

A reader finishes that section knowing **what crawlability is** and **that broken links are bad**. They still cannot answer:

| The reader's actual question | Does the lesson answer it? |
|---|---|
| What is crawlability? | **Yes** |
| Does *my* site have a crawlability problem? | No |
| Which tool shows me that? | No |
| Where exactly in that tool do I click? | No |
| What does the output look like when I get there? | No |
| Is what I'm seeing healthy or broken? | No |
| I found a problem. Now what? | No |
| Is this my job or a developer's? | No |

**Seven of eight questions are unanswered.** That is the gap, and it is not a flaw specific to this lesson. It is structural: lessons teach concepts, and concepts do not come with a procedure attached. This is exactly why a quiz cannot close it either, a quiz tests whether you understood the concept, not whether you can operate it.

#### Consequence: a "step" is not a sentence

The original design had `steps: { title, detail }[]`, which would have reproduced the same gap one level down ("Step 2: Check crawlability"). A step that does not name the tool, the exact path, the expected output and the fix is just the lesson again, in imperative mood.

So every step carries the full runbook:

```ts
export type Effort = "5 min" | "30 min" | "half day" | "dev ticket";

export type ProjectStep = {
  // WHICH CONCEPT THIS OPERATIONALISES
  concept: string;             // "Crawlability"
  lessonAnchor: string;        // "#1-crawlability", deep-links back to the exact lesson section
  theoryRecap: string;         // one line, so the step stands alone

  // THE QUESTION THE READER ACTUALLY HAS
  question: string;            // "Does my site have pages Google can't reach?"

  // HOW TO CHECK IT
  toolName: string;            // FK into TOOLS (2.4)
  where: string;               // exact path: "Search Console → Indexing → Pages"
  procedure: string[];         // click-by-click, no assumed knowledge

  // OUTPUT REFERENCE  ← the piece that is missing everywhere today
  outputSample: string;        // a realistic rendering of what the tool shows
  healthy: string;             // what good looks like, with a threshold
  unhealthy: string;           // what broken looks like, with a threshold
  interpret: string;           // how to tell which one you are looking at

  // WHAT TO DO NEXT
  soWhat: { symptom: string; action: string; effort: Effort }[];
  owner: "you" | "developer" | "either";   // is this even your job?
  stepId: string;              // stable, so progress is tracked per step not per project
};
```

`owner` deserves a note. A marketer who finds a redirect chain can fix it in a CMS; one who finds a JavaScript rendering failure cannot, and needs to write a dev ticket instead of losing a weekend. Telling people which is which is a large part of what a senior colleague actually provides, and no lesson on the site says it today.

#### Worked example, from the reference lesson

The crawlability step of the Technical SEO audit project:

- **concept** Crawlability
- **lessonAnchor** `#1-crawlability`
- **theoryRecap** Googlebot discovers pages by following links; unreachable or erroring pages never get indexed.
- **question** Does my site have pages Google cannot reach?
- **toolName** Google Search Console (Free)
- **where** Search Console → Indexing → Pages → "Why pages aren't indexed"
- **procedure** 1. Open the property. 2. Left nav, Indexing, Pages. 3. Scroll past the green "Indexed" chart to the reasons table. 4. Sort by page count descending. 5. Click any reason to see affected URLs. 6. Export.
- **outputSample**

  ```
  Why pages aren't indexed                      Pages
  ─────────────────────────────────────────────────────
  Crawled, currently not indexed                  690
  Blocked by robots.txt                           412   ← investigate first
  Duplicate, no user-selected canonical           182
  Not found (404)                                  94
  Server error (5xx)                               11   ← urgent
  ─────────────────────────────────────────────────────
  Indexed                                       3,891
  ```

- **healthy** Under ~5% of known URLs in error states; "Server error (5xx)" at or near zero.
- **unhealthy** Any 5xx at all, "Blocked by robots.txt" containing URLs you expected to rank, or "Not found" trending upward week over week.
- **interpret** Compare the error total against Indexed. 517 of 4,408 is ~12%, which is a real problem, not noise.
- **soWhat**
  - 5xx present → send the URL list to whoever owns the server, this is an availability bug, not SEO. `dev ticket`
  - Money pages blocked by robots.txt → open `/robots.txt`, find the matching `Disallow`, remove it, re-test in GSC's robots tester. `30 min`
  - 404s from old internal links → fix the linking page or 301 the old URL. `30 min`
  - "Crawled, currently not indexed" is large → usually thin or duplicate content, not a crawl bug. Route to the duplicate-content project. `half day`
- **owner** either

That single step answers all seven previously-unanswered questions. A project is a sequence of these, one per concept the lesson introduced.

#### Output reference: rendered text, never screenshots

`outputSample` is deliberately a text or table rendering, not an image. Screenshots of third-party products go stale every time a vendor reships their UI, cannot be themed for dark mode (Rule 5), add page weight, are not searchable or copy-pasteable, and carry licensing questions. A rendered table survives a GSC redesign because the *reasons* persist even when the chrome changes, and it can be styled with CSS variables like everything else.

#### Concept coverage, and the loop back to the lesson

`conceptsCovered` on the project is derived from its steps' `concept` values. Two things fall out:

1. **A concept map at the top of the lesson's projects section**, rendered by `ProjectList` from data, so **no MDX file is edited** (3.3 still holds):

   | Concept from this lesson | Practise it |
   |---|---|
   | Crawlability | Technical SEO Audit, step 1 |
   | Indexability | Technical SEO Audit, step 2 |
   | robots.txt | Technical SEO Audit, step 4 |
   | JavaScript rendering | Rendering Teardown, step 1 |

   This is what a reader hits when they finish the six pillars thinking "fine, but how do I check any of this".

2. **A concept filter on the hub** (5.3). "I just read about canonicals, show me every project that drills canonicals" becomes a real query across all ~600 projects.

#### Per-step progress

Because a `stepId` is stable, completion is tracked **per step**, not per project. A 6-step technical audit is realistically done across several sittings, and a project that can only be marked done-or-not will mostly sit at not-done. This also gives the hub a genuine "in progress" state rather than a binary.

---

### 2.3b Simulation mode

Reference lesson: `/learn/paid-ads/paid-ads-101`.

#### What that lesson already gives, and what it withholds

It is a strong lesson. It contains a genuine decision table under "Key Metrics and What They Tell You":

| Metric | Diagnosis |
|---|---|
| CTR low | Targeting fine, ad copy needs work, or wrong audience |
| CTR high, conversions low | Ad promises what the page does not deliver |
| CPC rising | More competitors in your auction |
| Conversion rate under 2% | Landing page problem or wrong traffic |
| ROAS under 1x | Losing money, pause and diagnose |

It also states the learning phase (7-14 days, check every 3-5 days, one change at a time), the budget math (100-200 clicks to judge a keyword, so $300-600 at a $3 CPC), and three named beginner mistakes.

**The reader has the decision table and still cannot make decisions.** Reading "CTR high, conversions low means fix the landing page" is not the same as being shown a dashboard on day 9 with £340 spent, a 7.1% CTR and 3 conversions, and having to choose. The lesson gives the lookup table; it never makes you use it under uncertainty, with money notionally draining, against the clock.

Worse, the two most expensive mistakes it names are **timing** mistakes, panicking on day 3, or changing two things at once. Timing errors are impossible to teach in prose because prose has no clock. A simulation does.

#### Anatomy

```ts
export type Verdict = "optimal" | "acceptable" | "costly";

export type SimulationStage = {
  stageId: string;
  label: string;              // "Day 9, mid-flight check"
  elapsed: string;            // drives the learning-phase logic
  concept: string;            // lesson concept under test
  lessonAnchor: string;

  // WHAT YOU SEE  (same principle as outputSample, rendered text not screenshots)
  situation: string;          // narrative state
  dashboard: string;          // rendered metrics table
  spendToDate: string;
  budgetRemaining: string;

  decision: {
    prompt: string;
    options: {
      id: string;
      label: string;
      verdict: Verdict;
      outcome: string;        // what actually happens next
      why: string;            // reasoning, tied to the lesson
      lessonRef: string;      // e.g. "Mistake 3: touching campaigns too often"
      nextStageId: string;    // BRANCHES, a bad call leads to a worse state
    }[];
  };

  liveVariant?: string;       // how to do this stage for real, if you have an account
};
```

Three properties do the work:

**Branching, not marking.** A poor choice routes to a genuinely worse stage: budget burnt, learning phase reset, fewer days left. You feel the consequence instead of reading "incorrect". The lesson's learning-phase warning becomes something the simulation can actually enforce, change bids on day 3 and stage 4 opens with the learning phase restarted and a week gone.

**Three verdicts, not two.** `optimal | acceptable | costly`. Real paid media rarely has one right answer, and a binary correct/incorrect would teach a false model of the discipline. "Acceptable" covers the defensible-but-not-best call, which is most real decisions.

**Wrong options are the lesson's own named mistakes.** Every `costly` option maps to something the lesson explicitly warns about, and `lessonRef` names it. The debrief then tells you not just that you lost money, but which paragraph you had already read and not applied.

#### Worked example, from the reference lesson

```
STAGE 3  ·  Day 9  ·  Spend £340 of £600  ·  Learning phase: day 9 of 14

Search campaign, "project management software for remote teams"

  Impressions        18,420
  Clicks              1,308      CTR 7.1%      (industry avg 6.66%)
  CPC                 £0.26
  Conversions             3      CVR 0.23%     (industry avg 7.52%)
  Cost per conv     £113.33
  ROAS                 0.4x

DECISION: What do you do?

  A  Pause the campaign, ROAS is under 1x
  B  Raise bids to get more clicks and more conversions
  C  Leave the campaign alone, fix the landing page
  D  Switch off the two worst keywords and rewrite the ad copy
```

- **C is optimal.** CTR is above industry average, so targeting and copy are working. The break is between click and conversion, which is the landing page or the offer. This is row 2 of the lesson's own table. You are also on day 9 of a 14-day learning phase, so campaign-level changes reset it.
- **A is acceptable.** ROAS under 1x does mean stop the bleeding, and the lesson does say pause and diagnose. Defensible, but it throws away a campaign whose top-of-funnel is healthy and forfeits the learning already paid for.
- **B is costly.** Buying more clicks when clicks are not the problem. Spends the rest of the budget on the same 0.23% conversion rate.
- **D is costly**, and instructively so. It looks diligent, but it changes two variables at once during the learning phase, the lesson's Mistake 3. Even if performance moves, you will not know which change caused it.

D is the important option. It is the trap a careful reader falls into, and no quiz question can catch it, because the error is not a misunderstanding of a fact, it is a misjudgement of timing.

#### The dual track: simulated by default, live if you want it

This answers "I may run the ad in realtime or not" directly. Every simulation project ships both paths:

| | Simulated path (default) | Live path (optional) |
|---|---|---|
| Cost | £0 | Stated minimum, e.g. £300 over 14 days |
| Account | None | Google Ads or Meta account |
| Time | ~45 minutes | 2-4 weeks real elapsed |
| Feedback | Immediate at each stage | Real, delayed, noisy |
| Carries | `dashboard` per stage | `liveVariant` per stage |

`liveVariant` on each stage says what the equivalent real action is: which screen, what to set, what to wait for, what to look at when you return. So the same project is a 45-minute decision drill for someone with no budget, and a structured 3-week live campaign runbook for someone with £300. Nobody is locked out, and nobody with real budget is stuck playing a toy.

This also preserves the free-tool guarantee (9.1) in a category where the tool itself costs money. The free path is complete because the simulation is complete.

#### Debrief

Every simulation ends with a scored debrief, not just a final screen:

- Path taken versus the optimal path
- Notional budget wasted against the ideal run
- Each `costly` call, with the `lessonRef` paragraph it contradicted
- The concepts to re-read, deep-linked back to the lesson sections
- Replay, since the value is in trying a different branch

The debrief is where a simulation stops being a game and becomes teaching. It is also what feeds XP and per-step progress, and it gives the hub something meaningful to show as "in progress".

---

### 2.3c Build mode

The spine holds when nothing is diagnosed or simulated. For `build-the-asset`, `question` becomes "what am I producing", `outputSample` becomes a filled example of the artefact, `healthy`/`unhealthy` become quality criteria to judge your own draft against, and `soWhat` becomes iteration guidance.

No project ships in any mode without an output reference and a next action.

#### Mode selection during authoring

Not a free choice. It follows from whether the concept can be practised live for free:

```
Can a beginner practise this for free, today, on something they own?
   YES → diagnostic
   NO  → Is there a sequence of real decisions with consequences?
           YES → simulation
           NO  → build
```

Rough expected distribution: `seo`, `cro`, `content`, `tools`, `analytics` skew diagnostic; `paid-ads`, `email`, `social`, `growth`, `pr-communications` skew simulation; `brand-strategy`, `product-marketing`, `copywriting`, `fundamentals` skew build. Most lessons will pair one mini `diagnostic` or `build` with one core `simulation`, or the reverse.

#### What this costs, and the scope change it forces

This anatomy is roughly **3x the depth** of the original design. A fully specified step runs 250-400 words once it carries a procedure, an output sample, thresholds and a remediation table.

| Tier | Steps | Words |
|---|---|---|
| mini | 2-3 | 600-900 |
| core | 4-6 | 1,200-1,800 |
| big | 8-12 | 2,500-3,500 |

Under the original "2-3 projects per lesson", 240 lessons plus 90 big projects lands near **800,000 words**, which is the whole existing 642-lesson library over again.

**Recommended scope change: 2 projects per lesson, not 2-3.** One `mini` (a single-concept drill, finishable in a sitting) and one `core` (the multi-concept project). That gives ~480 lesson projects plus ~90 big, around 550,000 words, and every one of them actually closes the gap.

This is the right trade. Three shallow projects that say "check your crawlability" are worth less than one that shows you the GSC path, the output, the thresholds and the fix. Depth per project is the entire point of this section; breadth is negotiable.

Knock-on effects to carry forward:
- Data volume rises to roughly **6-8 MB** across the per-category modules, which makes the split in 2.2 and the slim index in 5.1 load-bearing rather than merely tidy.
- Authoring cost per project roughly triples, so the Phase 1 review gate matters more, not less.

### 2.4 Recommended Tools section, free and paid

Every project renders a **Recommended Tools** block splitting free and paid explicitly, rather than a single flat list with a boolean buried on each row. A learner deciding whether they can actually start this project needs to see the free path as a *set*, not infer it by scanning badges.

#### Reuse the existing tools directory, do not duplicate

`src/lib/tools-directory.ts` already exists and already models this:

```ts
export type PricingTier = "Free" | "Freemium" | "Paid" | "Open Source";
export type MarketingTool = {
  name; description; category: ToolCategory; pricing: PricingTier;
  url; emoji; tags: string[]; popular?: boolean; note?: string;
};
export const TOOLS: MarketingTool[]        // 111+ entries
export const TOOL_CATEGORIES: ToolCategory[]   // 11 categories
export const PRICING_TIERS: PricingTier[]
```

Projects **reference** this by name and inherit `url`, `pricing`, `emoji` and `category`. Re-declaring a tool inside a project would guarantee drift: the price changes in one place and not the other, exactly the class of bug Rule 18 exists to prevent.

```ts
export type ToolRef = {
  toolName: string;          // FK into TOOLS. Inherits url/pricing/emoji/category.
  role: string;              // what it does IN THIS PROJECT, e.g. "keyword volume data"
  why: string;               // one line, project-specific, not the generic description
  required: boolean;         // false = optional convenience
  fallback?: string;         // what to do without it
  lastVerified: string;      // ISO, see 9.6

  // ONLY when the tool is genuinely absent from TOOLS:
  inlineUrl?: string;
  inlinePricing?: PricingTier;
};

export type ToolStack = {
  free: ToolRef[];           // MUST be a complete, sufficient path on its own
  paid: ToolRef[];           // upgrades only, never on the critical path
  paidUpgradeNote?: string;  // what paid actually buys you: speed, scale, depth
};
```

**Any tool referenced but missing from `TOOLS` is a signal to add it to the directory**, not to inline it permanently. `inlineUrl`/`inlinePricing` are an escape hatch that should trend toward zero. This makes the project layer a forcing function that improves `/tools` over time.

#### Rendering

Two labelled groups, free first, since free is the default path and paid is the exception:

```
RECOMMENDED TOOLS

  Free path  (everything below is enough to finish)
  ┌──────────────────────────────────────────────┐
  │ 🔍 Google Search Console      Free           │
  │    Role: query + impression data              │
  │    Why: the only first-party source for ...   │
  ├──────────────────────────────────────────────┤
  │ 🔑 Google Keyword Planner     Free           │
  └──────────────────────────────────────────────┘

  Paid upgrades  (optional, faster/deeper)
  ┌──────────────────────────────────────────────┐
  │ 🕷️ Ahrefs                     Paid           │
  │    Buys you: 10 yrs of backlink history ...   │
  └──────────────────────────────────────────────┘
```

The "everything below is enough to finish" line is load-bearing. It is the visible promise behind the free-tool guarantee (9.1), and it is what stops the block reading as an advert.

Each row: emoji or letter-avatar fallback, tool name linking to its directory entry, pricing badge using the existing `PricingTier` styling, role, and the project-specific why. Pricing badges follow Rule 19, rgba overlays rather than Tailwind colour classes, so they survive dark mode.

#### The reciprocal link

Once projects reference tools, `/tools` can show *"used in N projects"* per tool and link back. That turns a static directory into a practice surface and is close to free once the index in 5.1 exists.

Two fields map directly to your explicit asks:

- **`tools`** is the suggested-tool element, with a free/paid flag and a one-line reason each.
- **`sampleOutput`** is the filled version. **It deliberately uses a different roster company than `scenario`**, so it demonstrates the standard without handing over the answer. Flag this if you wanted the sample filled in for the *same* company instead.

### 2.5 Project variety guard

The real risk at 600 projects is that they all read identically ("research, build a spreadsheet, analyse"). Mitigation: every project is stamped with one of **8 archetypes**, and no lesson may use the same archetype twice.

Teardown, Rebuild, Audit, Head-to-head, Forecast/model, Given-data simulation, Reverse-engineer a real campaign, Build-the-asset.

### 2.6 Track big projects, `src/lib/track-projects.ts`

Same rich shape, tier `"big"`, plus:

```ts
trackSlug: string;
afterLessonIndex: number;   // milestone position in the track
synthesizes: string[];      // lesson slugs it pulls together
```

At 3-5 lessons per milestone and ~15 lessons per track: **3-4 big projects per track, ~90 total**. These are cross-lesson synthesis work and are written to be distinct from the lesson-level projects they sit after, matching the same principle already used by `TRACK_QUIZZES` (Rule 32).

### 2.7 Components

| File | Type | Role |
|---|---|---|
| `ProjectList.tsx` | client | The 2-3 projects for a lesson, injected below the Quiz |
| `ProjectCard.tsx` | client | One project, expand/collapse, completion toggle |
| `SampleOutput.tsx` | client | "Show sample answer" reveal, hidden by default |
| `TrackProjectCard.tsx` | client | Big-project milestone inside `TrackLessonList` |
| `src/lib/projects-progress.ts` | lib | localStorage + XP, per Rule 18 (shared storage in lib, never in components) |
| `TableOfContents.tsx` | **modified** | Accept an `extraSections` prop so Projects and Quiz appear in the TOC (see 3.4) |
| `src/app/projects/page.tsx` | server | Hub: metadata + stats hero (see 5) |
| `src/app/projects/ProjectsClient.tsx` | client | Hub search + 11 filters + sort + preset lenses, mirrors `ToolsClient` |
| `ProjectDrawer.tsx` | client | Hub slide-over with full detail, dynamic-imports one category module (5.6) |
| `ToolStack.tsx` | client | The free/paid Recommended Tools block (2.4), reused on lesson pages and in the drawer |
| `ProjectStep.tsx` | client | One runbook step: question, tool path, output sample, thresholds, remediation table, per-step tick (2.3a) |
| `SimulationRunner.tsx` | client | Stage-by-stage decision drill with branching, state, and spend tracking (2.3b) |
| `SimulationDebrief.tsx` | client | Scored debrief: path vs optimal, budget wasted, `lessonRef` back-links, replay |
| `LiveTrackPanel.tsx` | client | The optional real-account path alongside the simulation (2.3b) |
| `ConceptMap.tsx` | client | The lesson-concept to project-step table at the top of the projects section (2.3) |
| `OutputSample.tsx` | client | Renders `outputSample` as themed monospace, horizontally scrollable, never an image |
| `src/lib/projects-index.ts` | **generated** | Slim card projection of every project (see 5.1) |
| `scripts/build-projects-index.mjs` | build | Regenerates the index from the per-category modules |
| `src/app/portfolio/page.tsx` | server | Completed-projects view (see 9.3) |
| `public/project-data/*.csv` | assets | Starter datasets (see 9.2) |

### 2.8 XP wiring

`XPAction` is a clean union with a `Record<XPAction, number>` table, so extension is type-safe:

```ts
export type XPAction = "complete" | "quiz" | "bookmark" | "project" | "bigProject";
// mini/core project = 40, big project = 100
```

No level rebalance needed. The ladder already caps at 4,000 XP (~80 completed lessons) against a library worth ~32,000 XP, so it is saturated long before projects enter the picture.

---

## 3. Placement on the lesson page, and TOC integration

### 3.1 Current bottom-of-lesson order

`src/app/learn/[category]/[lesson]/page.tsx` renders, in order:

1. `<article class="prose">` MDX body
2. `LessonResources`
3. Bottom `MarkComplete`
4. Up Next CTA
5. Tool Comparison callout (`tools` category only)
6. **Quiz**, `id="quiz-section"`
7. `LessonNotes`
8. `RelatedLessons`
9. Prev / Next nav

### 3.2 Chosen placement: directly after the Quiz, before `LessonNotes`

```
... Quiz (#quiz-section)
    ↓
    Projects (#projects-section)   ← NEW
    ↓
    LessonNotes
    RelatedLessons
```

Three reasons this is the only defensible slot:

- **The quiz is the completion gate.** Rule 25 locks `MarkComplete` until the quiz passes, and clicking it scrolls to `#quiz-section`. Putting a 45-minute project *before* that gate would put heavy work in front of lesson completion and tank completion rates.
- **Escalating depth.** Quiz is a 4-question recall check; projects are the deep application. Read, verify, then apply.
- **Notes and Related are terminal.** Both are wrap-up/navigational, so projects must sit above them.

### 3.3 Zero MDX files change

Projects are injected by the page from the data layer, keyed on `sourceCat/lesson`, exactly how `QUIZZES` already works (line 108 of the lesson page). **None of the 240 lesson `.mdx` files need editing**, which removes the single largest source of risk in a change this size.

### 3.4 The TOC will not pick projects up for free

`TableOfContents.tsx` scopes itself hard:

```ts
const article = document.querySelector("article.prose");
const nodes = article.querySelectorAll("h2, h3");
```

It only reads headings **inside** the MDX article. Everything after `</article>` is invisible to it. That is why the Quiz is missing from the TOC today, and Projects would be missing for the same reason.

**Fix: declared extra sections, not a wider selector.**

```ts
type TocSection = { id: string; text: string };

<TableOfContentsDesktop extraSections={[
  { id: "quiz-section",     text: "Test Your Knowledge" },
  { id: "projects-section", text: "Practice Projects" },
]} />
```

`useHeadings()` appends these after the article headings (DOM order is already correct, since both sit below the article). Rejected the alternative of widening the selector to the whole main column: it would sweep in "Up Next", "Related Lessons" and any stray `h2` from future components, with no control over what appears.

Two bonuses from doing it this way:

- Scroll-spy highlighting works with no extra code, because the `IntersectionObserver` already resolves targets via `document.getElementById(h.id)`.
- **It fixes the pre-existing gap where the Quiz never appears in the TOC.**

### 3.5 Secondary discovery signals

- **Header meta line**: add a project count beside read time, e.g. `18 min read · 3 projects (~2 hrs)`. Cheap, and sets time expectations before the learner commits.
- **Up Next ordering (optional).** The Up Next CTA currently sits at position 4, well above the Quiz and Projects, so it invites the learner to leave before reaching either. Moving it below Projects would help, but it changes existing behaviour, so it is proposed separately rather than bundled in. The TOC entry already solves the core discovery problem without touching it.

### 3.6 Track pages

Big Projects render inline inside `TrackLessonList` at their `afterLessonIndex`, as a visually distinct milestone card breaking up the numbered lesson rows. The existing track progress bar counts them alongside lessons.

---

## 4. Track lesson reordering

You asked for tracks ordered "in best outcome order". Current lesson sequences are largely grouped by category, not by learning dependency. Each of the 24 tracks gets resequenced on one rule: **nothing appears before the thing it depends on, and each big-project milestone lands where the learner actually has the pieces to complete it.**

Reordering and milestone placement are done together, because the milestone position determines where the natural breakpoints are.

---

## 5. The Projects hub, `/projects`

A first-class browse surface for the whole project database, modelled on the existing `/tools` directory (server page with a stats hero, then a client component owning search and filter state).

### 5.1 The data problem this creates, and the fix

Section 2.2 splits projects into per-category modules precisely so a lesson page never loads 3-4 MB. But a hub needs **every** project at once, which walks straight back into the bundle problem.

Fix: **a slim card projection, generated at build time.** The hub never loads project bodies.

```ts
// src/lib/projects-index.ts , GENERATED, all projects, ~120 KB at 600 entries
export type ProjectIndexEntry = {
  id: string;
  title: string;
  tier: ProjectTier;          // mini | core | big
  archetype: Archetype;       // 9 values
  category: string;           // lesson category
  lessonSlug: string;
  lessonTitle: string;
  timeMinutes: number;
  companyId: string;
  companyName: string;
  region: Region;             // india | global
  sector: string;
  exitScale: ExitScale;
  freeToolsOnly: boolean;
  hasDataset: boolean;
  tracks: string[];           // tracks that surface this project
  conceptsCovered: string[];  // powers the concept filter (2.3)
  toolNames: string[];        // powers the tool filter
  mode: ProjectMode;
  needsAccountOrBudget: boolean;  // false for every simulation and build project
  stepCount: number;          // steps or stages
};
```

Heavy fields (`scenario`, `steps`, `sampleOutput`, `successCriteria`) stay in the per-category modules and load only on the lesson page. **~120 KB instead of ~3-4 MB**, and the index stays automatically in sync because it is generated, never hand-maintained.

### 5.2 Search

Matches across title, lesson title, company name, sector and objective keywords.

### 5.3 Filters

| Filter | Values |
|---|---|
| Difficulty | Mini / Core / Big |
| Category | 21 lesson categories |
| Archetype | Teardown, Rebuild, Audit, Head-to-head, Forecast, Simulation, Reverse-engineer, Build-the-asset, AI-critique |
| Time | under 1h / 1-3h / 3-6h / 6h+ |
| Company region | India / Global |
| Sector | D2C, SaaS, fintech, edtech, foodtech, ecommerce, ... |
| Exit scale | mega / large / mid / small |
| Free tools only | toggle |
| Has starter dataset | toggle |
| Track | 24 tracks |
| Status | not started / in progress / completed (from localStorage) |
| **Concept** | crawlability, canonicals, deliverability, attribution, ... (from `conceptsCovered`, see 2.3) |
| **Tool** | filter by any tool in the project's stack, e.g. "everything that uses Search Console" |
| **Mode** | diagnostic / simulation / build (see 2.3) |
| **No account or budget needed** | toggle. Matches every `simulation` and `build` project, plus diagnostics on free tools |

Four filters serve the originating use cases directly:

- *"I just read about canonicals, show me how to practise canonicals"* → **Concept**
- *"I have Search Console open, what can I do right now"* → **Tool**
- *"I want to make decisions, not audit things"* → **Mode**
- *"I have no ad budget"* → **No account or budget needed**

That last one matters more than it looks. Without it, a learner with no budget browsing paid-ads projects has no way to tell which are actually open to them, and the honest answer is all of them, via the simulated path.

Sort by difficulty, time, category, completion, or **recently verified** (which surfaces the `lastVerified` work from 9.6 instead of leaving it invisible metadata).

#### Preset lenses

ToolForge's strongest idea: *"Pick a ready-made lens instead of browsing 2,386 cards."* Eleven filters is powerful and also paralysing on first visit. Named one-click presets do most of the work:

| Lens | Resolves to |
|---|---|
| Weekend projects | tier mini/core, time under 3h |
| Zero-budget | freeToolsOnly, all tiers |
| Indian case studies | region india |
| Portfolio starters | portfolioReady, tier core/big |
| Big builds | tier big |
| Data-driven | hasDataset |
| Beginner friendly | tier mini, time under 1h |
| Work with AI | archetype ai-critique |

These render above the filter bar as chips, exactly like ToolForge's "Recommended views" block.

### 5.4 Card labels

Each card carries: tier badge, time estimate, category chip, archetype chip, company name with a region flag, a free-tools badge, a dataset badge, and a completion tick when done.

Region and exit-scale labels do real work here. They let a learner deliberately choose "show me mid-size Indian D2C projects" rather than being fed billion-dollar US case studies by default, which is the whole point of the roster quota in 2.1.

### 5.5 Stats hero

Matching the `/tools` treatment: total projects, big projects, free-tool projects, companies covered, and the India/global split.

### 5.6 Deep linking without detail routes

Per-project routes stay rejected (~600 thin pages cannibalising the lesson pages they belong to). Two mechanisms replace them, borrowed from ToolForge:

**1. A detail drawer on the hub.** Clicking a card opens a slide-over with the full brief, steps, tool stack and success criteria, fetched by dynamic-importing only that project's category module. Full detail, zero new routes, and the 3-4 MB never enters the initial bundle. This is a straight lift of ToolForge's drawer pattern and it resolves the tension between "the hub should be browsable in depth" and "the hub must stay slim".

**2. Anchors into the lesson.** Every project also renders on its lesson page with a stable `id="project-{id}"`, and the drawer carries an "Open in lesson" link to:

```
/learn/{category}/{slug}#project-{id}
```

The target card auto-expands from the URL hash. So the hub answers "what exists", the lesson answers "why this matters here", and both are shareable.

### 5.7 Hub vs Portfolio

Two different surfaces, easy to confuse:

- **`/projects`** is the catalogue: everything that exists, for discovery.
- **`/portfolio`** (9.3) is personal: only what *you* completed, framed as interview evidence.

### 5.8 Wiring

Nav entry under the "Learn" dropdown and the footer "Learn" column. `ItemList` JSON-LD on the hub. The page is a real keyword surface ("marketing projects", "SEO project ideas", "marketing portfolio projects"), so it also earns its place on SEO grounds.

Projects also register in the **existing command palette**. `COMMAND_PALETTE_EVENT` already lives in `src/lib/events.ts` and the nav already has a palette button, so Ctrl+K project search is wiring, not new infrastructure.

### 5.9 Other patterns adopted from ToolForge

| Pattern | How it maps here | Verdict |
|---|---|---|
| URL-encoded filter state | Every filter combination shareable and bookmarkable, e.g. `?tier=big&region=india`. Also makes the preset lenses just canned URLs. | **Adopt.** Cheap, high value |
| Category sidebar with live counts | Left rail listing 21 categories with per-category project counts, plus a find-category input | **Adopt** |
| Export saved as CSV/JSON | Feeds directly into `/portfolio` (9.3) as interview evidence | **Adopt** |
| Curator badges | "Editor's Choice" / "Popular" become "Portfolio starter", "Beginner friendly", "Most completed" | **Adopt**, renamed to fit |
| Letter-avatar fallback | Companies have no logos in the roster. A colour-coded initial avatar per company avoids broken images and costs nothing | **Adopt** |
| Skip link + full keyboard nav | ToolForge has "Skip to tools" and ARIA roles throughout. The lesson pages here already ship a skip link, so the hub should match | **Adopt** |
| Density controls (compact/default/comfortable) | Real value at 2,386 cards; marginal at ~600, and it is another persisted preference to maintain | **Defer**, revisit if the library grows |
| Comparison matrix | Comparing two projects side by side is not a real user need. The tool-level free/paid split in 2.3 already covers the comparison that matters | **Reject** |

---

## 5A. Dual surface: the same project in two places

Stated explicitly because it is a requirement, not an implementation detail.

Every project appears in **both** places, from **one** definition:

| Surface | Question it answers | What renders |
|---|---|---|
| **Lesson page**, `#projects-section` (see 3) | "I just learned this, how do I practise it?" | The 2-3 projects for that lesson, inline, in teaching context |
| **`/projects` hub** (see 5) | "What can I build? Show me everything." | All ~600, searchable, filterable, with a detail drawer |

The single definition lives in `src/lib/projects/[category].ts`. The lesson page imports its own category module; the hub reads the generated slim index (5.1) and dynamic-imports a single module only when a drawer opens.

**There is no second copy of any project, anywhere.** Both surfaces derive from the same record, so a wording fix lands in both at once. The generated index is what keeps them honest, since it cannot be hand-edited into disagreement with the source.

Track big projects follow the same rule: defined once in `track-projects.ts`, rendered inline on the track page (3.6) and listed in the hub under tier `big`.

---

## 6. Phasing

### Phase 0, Foundations
- `case-companies.ts`, ~60 verified companies, ~60/40 global/India, meeting the exit-scale quota, every entry cited
- Types, the 9 archetypes, the project authoring standard
- ~8 starter datasets in `public/project-data/` covering the simulation/forecast/audit archetypes
- Deliverable: data foundations only, no UI

### Phase 1, Pilot on `solo-founder` + the hub
Track chosen because it spans **8 categories** (fundamentals, mental-models, seo, content, email, copywriting, growth, analytics), so it stress-tests the per-category code splitting properly, and it is now the #1 track.

- Full component build, progress lib, XP wiring
- `TableOfContents.tsx` `extraSections` support, which also fixes the missing Quiz entry
- Lesson page injection at `#projects-section`, `#project-{id}` anchors, header project count
- `ToolStack.tsx`, the free/paid Recommended Tools block (2.3), plus an audit of which referenced tools are missing from `tools-directory.ts`
- **`/projects` hub + the index generator + detail drawer + preset lenses**, built now rather than later so the facets and filter UX are validated at 50 projects instead of being discovered wrong at 600
- URL-encoded filter state, command-palette registration
- 18 lessons, ~36 lesson projects (1 mini + 1 core each), 4-5 big projects
- **Plus `paid-ads/paid-ads-101` as a 19th pilot lesson, outside the track.** `solo-founder` spans no paid-ads lessons, and paid-ads-101 is both the reference case for simulation mode and the hardest thing in this plan to author. Proving it now is what de-risks committing to ~200 more simulations in Phase 2. Building only the cheap modes first would hide the real cost.
- `solo-founder` resequenced
- **Review gate, two artefacts to judge:**
  1. The crawlability **diagnostic** step: does it answer all seven questions from the 2.3a table, so you can actually go and check your own site?
  2. The paid-ads **simulation**: on day 9 with a 7.1% CTR and 3 conversions, does picking option D genuinely teach you why the diligent-looking answer was the expensive one?

  If either fails, nothing downstream matters and Phase 2 does not start.

### Phase 2, Scale
- Remaining 222 unique lessons, ~444 projects
- Roster to ~150 companies
- All 24 tracks resequenced, ~90 big projects total
- Datasets to ~20

### Phase 2b, Concept scenarios for track lessons
- ~600-720 scenarios (section 10), bundled with the 45 stale-year lesson fixes (12.5) so evidence is refreshed once, not twice

### Phase 3, Career layer
- `/portfolio` view, wired to `/interview-prep`
- Big projects feeding `/certificates`
- Project achievements in `achievements.ts`
- `calibration` mode infrastructure: prediction persistence, scheduled re-prompting, personal prediction log (11.5)
- Docs: `PROJECT_LOG.md`, `README.md`, the new `AGENTS.md` rules

### Phase 4, The long tail
- Remaining 402 non-track lessons, ~804 projects
- Runs indefinitely, blocks nothing
- From here on, Rule 29 applies: every new lesson ships with its projects in the same commit, so the backlog never regrows

---

## 7. New AGENTS.md rules this will require

1. **Projects data is per-category and dynamically imported.** Never a single module. Reason: `quizzes.ts` at 1.91 MB is the precedent to avoid, not follow.
2. **Every `companyId` must resolve to a `CASE_COMPANIES` entry with a confirmed, dated, cited exit.** No inline company facts in project prose.
3. **`sampleOutput` must reference a different company than `scenario`.**
4. **No lesson may reuse a project archetype within its own project set.**
5. **Roster keeps a ~60/40 global/India split and meets the exit-scale quota.** A company with no confirmed exit never enters the roster, however famous its marketing (CRED, Zerodha, Zoho, Glossier, Away).
6. **Indian figures are written native-first with a dated USD approximation**, e.g. `₹11,327 Cr (~$1.36B, Nov 2024)`.
7. **Every project has a complete free-tool path.** Paid tools are optional upgrades only, never on the critical path.
8. **`simulation`, `forecast` and `audit` projects must carry a `datasetUrl`.** Those archetypes are impossible to complete without supplied data.
9. **`src/lib/projects-index.ts` is generated, never hand-edited.** Re-run `scripts/build-projects-index.mjs` after touching any project module, or the hub silently drifts out of sync with the data.
10. **`/projects` must never statically import a per-category project module.** It uses the slim index only. Full modules are dynamic-imported, one at a time, when a drawer opens.
11. **Project tools reference `TOOLS` in `tools-directory.ts` by name.** Never re-declare a tool's url or pricing inside a project. A tool missing from the directory should be added there, not inlined permanently.
12. **`toolStack.free` must be a sufficient path on its own.** If a project cannot be finished with only the free list, it is mis-specified. Paid tools are upgrades, never dependencies.
13. **Every `ProjectStep` must carry all five runbook parts**: `where` + `procedure` (how to check), `outputSample` (what you'll see), `healthy`/`unhealthy`/`interpret` (is it a problem), `soWhat` (what to do), `owner` (whose job). A step missing any of these is the lesson restated as an instruction and fails review.
14. **`outputSample` is rendered text or a table, never a screenshot.** Vendor UIs reship constantly, images cannot follow the theme (Rule 5), and they are not copy-pasteable.
15. **Every step's `concept` must correspond to a real heading in the source lesson**, and `lessonAnchor` must resolve to that heading's id. Projects operationalise the lesson, they do not introduce new material.
16. **Mode is derived, not chosen.** Run the decision tree in 2.3c. If a beginner can practise it free today on something they own, it is `diagnostic`. If not and there is a sequence of consequential decisions, it is `simulation`. Otherwise `build`.
17. **Every `simulation` must be completable with zero spend and no account.** The `liveTrack` is strictly optional and must never be required to finish or to earn XP.
18. **Every `costly` option in a simulation must carry a `lessonRef`** naming the passage it contradicts. If a wrong answer is not traceable to something the lesson taught, either the option is unfair or the lesson has a gap, and both need fixing before ship.
19. **Simulations branch, they do not grade.** A poor decision routes to a materially worse stage. Never render a bare "incorrect", the consequence is the teaching.

---

## 8. Open risks

| Risk | Mitigation |
|---|---|
| 600 formulaic projects | Archetype stamping + per-lesson archetype uniqueness |
| Fabricated exits | Mandatory cited roster, verified before authoring |
| Bundle bloat | Per-category dynamic imports, measured at Phase 1 |
| Company over-repetition | Roster sized so no company exceeds ~4 projects |
| Multi-session drift | This file is the source of truth, updated each session |
| Roster drifts all-mega-cap | Scale quota enforced in the roster (2.1), checked before authoring |
| Steps degrade into restated theory | Rule 13, all five runbook parts required or the step fails review. This is the failure mode that would make the whole feature pointless |
| Simulations feel like a quiz with extra steps | Branching with real consequences (Rule 19), three verdicts not two, and wrong options drawn from the lesson's own named mistakes |
| Simulation authoring is much harder than a runbook | Branching stages carry the highest cost per project. The pilot deliberately includes one, so the true cost is known before Phase 2 commits to ~200 of them |
| Tool UI paths go stale (`where`, `procedure`) | `lastVerified` per tool (9.6), "recently verified" sort on the hub, and rendered-text output samples that survive vendor redesigns |
| 550k words of authoring | Scope cut to 2 projects per lesson (2.3); pilot review gate before any scaling |
| India examples that never exited | CRED, Zerodha, Zoho, Dream11 explicitly barred; strict rule applies equally to both regions |

---

## 9. Accepted additions (all in scope)

All six approved. The first two are the difference between projects people *complete* and projects people *read*.

### 9.1 Free-tool guarantee

The site's entire positioning is free marketing education. A project that needs Ahrefs at $99/mo is not free, it is an advert. Right now nothing in the design prevents that.

Rule: **every project must be completable end to end using only free tools.** Paid tools may appear, but only flagged as an optional upgrade, never on the critical path. The `tools[]` field already carries a `free` boolean, so this is enforceable: every project must have a complete free path.

### 9.2 Starter datasets

This is the biggest silent blocker. Several archetypes (Given-data simulation, Forecast/model, Audit) assume the learner has data. A beginner has no ad account, no GA4 property, no keyword export, no email list. Without data those projects are simply impossible, and they are also the highest-value ones.

Fix: ship small fixtures in `public/project-data/` (CSV/JSON), referenced by a `datasetUrl` field on the project. A funnel dataset, a mock ad-account export, a keyword set, a cohort table. Roughly 15-20 fixtures cover most of the library through reuse.

### 9.3 Portfolio output, wired to the existing interview prep

The site already ships `/interview-questions` and `/interview-prep`. A completed project *is* the artifact you bring to a marketing interview, and right now that value is left on the table.

Add a `/portfolio` view listing the learner's completed projects with their deliverable specs, exportable. This costs little (completion state already exists from the tracking decision) and converts the whole feature from "exercises" into "career evidence". Highest motivational return of anything in this list.

### 9.4 Feed big projects into `/certificates`

`/certificates` already exists. Track certificates currently rest on lesson completion plus the track quiz. Requiring the track's big projects makes the certificate mean something. Small change, large credibility gain.

### 9.5 An "AI critique" archetype, making it 9

Learners will paste these into ChatGPT regardless. Rather than pretend otherwise, make one archetype explicitly: *have AI produce the deliverable, then identify three things it got wrong and fix them.* On-brand for a site carrying 36 `ai-marketing` lessons, teaches judgment rather than output, and is honest about how marketers actually work now.

### 9.6 `lastVerified` on tool recommendations

Exit facts are permanent. Tool recommendations rot fast: free tiers vanish, pricing changes, products shut down. Add `lastVerified: string` to each tool entry plus a stated review cadence, so stale advice is detectable instead of invisible.

### 9.7 Considered and rejected

- **Per-project detail routes** (`/projects/[id]`): ~600 thin pages competing with the lesson pages they belong to. The `/projects` hub plus `#project-{id}` anchors (5.6) captures the value without the cannibalisation.
- **Widening the TOC selector** instead of `extraSections`: covered in 3.4.
- **Projects authored inside MDX**: would require editing all 240 lesson files and block reuse on track pages.
- **Shipping the full project dataset to `/projects`**: 3-4 MB to the client. Replaced by the generated slim index in 5.1.

---

## 10. Concept scenarios in lessons ("where is this used, and what did it get them?")

A separate workstream from projects. This changes the **lessons**, not the practice layer.

### 10.1 The ask

A reader meets "crawlability" and gets a definition. What they do not get is: where does this actually get used, why did someone reach for it, and what did it get them. The concept arrives without a situation attached.

### 10.2 Measured, not assumed

Audited all 642 lessons for sections matching real-example / case-study heading patterns:

| Measure | Result |
|---|---|
| Lessons with any example section | **302 of 642 (47%)** |
| Lessons with **none** | **340 (53%)** |
| Example sections found | 336 |
| ...containing any number | 191 (57%) |
| ...containing a % figure | 122 (36%) |
| ...containing a year | 150 (45%) |
| ...containing **both a % and a year** (a dated, quantified outcome) | **98 (29%)** |
| Average **teaching concepts** per lesson (h2/h3, boilerplate excluded) | **8.1** |
| Average **example sections** per lesson | **0.5** |

Two numbers carry the argument:

- **8.1 concepts taught against 0.5 examples given.** A 16:1 ratio.
- **~98 dated, quantified examples against ~5,200 concepts library-wide.** Under **2%** of concepts ever show an outcome.

Coverage is also wildly uneven, and worst exactly where a reader is least likely to have prior intuition:

| Category | Lessons | With an example section |
|---|---|---|
| legal-compliance | 28 | **0%** |
| events-experiential | 28 | 4% |
| marketing-leadership | 28 | 4% |
| affiliate-marketing | 28 | 11% |
| pr-communications | 28 | 11% |
| ... | | |
| brand-strategy / cro | 28 | 75% |
| content | 29 | **79%** |

### 10.3 The reference lesson proves it

`technical-seo.mdx` is one of the better-evidenced lessons. Its "Real Company Case Studies" section is genuinely good:

> **Airbnb, 2017.** ~30% of listing pages were not indexed because Googlebot could not parse their JavaScript-rendered content. After moving critical listing pages to server-side rendering and submitting a sitemap covering 1M+ URLs, organic traffic to listing pages rose ~25% within six months. No new content, no new links, purely a technical fix.

That is exactly the standard: company, situation, action, quantified benefit, timeframe, date.

But it is **pooled at the bottom**, and its three examples cover JavaScript rendering, structured data, and site architecture. The lesson teaches six pillars. **Crawlability, indexability, sitemaps, robots.txt and canonical tags get no scenario at all.** A reader learns what a canonical tag is and never once sees one used in anger.

The problem is not example quality. It is that examples are lesson-level when concepts are the unit of confusion.

### 10.4 Shape

```ts
export type ConceptScenario = {
  concept: string;         // "Crawlability" , must match a real lesson heading
  lessonKey: string;       // "seo/technical-seo"
  lessonAnchor: string;    // "#1-crawlability"

  companyName: string;
  companyId?: string;      // roster FK where the company is in CASE_COMPANIES

  where: string;           // the situation it got used in
  why: string;             // the problem it was reached for
  what: string;            // what they actually did
  benefit: string;         // the outcome, QUANTIFIED
  timeframe: string;       // "within six months"
  date: string;            // ISO or year
  source: string;          // citation URL, REQUIRED

  counterExample?: string; // what it costs when ignored, cited the same way
};
```

`counterExample` earns its place. `technical-seo` already carries one (HubSpot, ~13.5M to under 7M monthly organic visits, Nov-Dec 2024). Concepts land harder with both the win and the cost of ignoring it.

### 10.5 Rendering and injection

A global `<InAction>` MDX component, rendered immediately **after the concept's heading**, inside `article.prose` so the existing TOC and reading-time logic treat it as lesson content.

Injection is a **rehype plugin at build time**: walk the heading nodes, look up `CONCEPT_SCENARIOS[lessonKey][headingId]`, inject the component node. `next.config.ts` already carries rehype/remark plugin config, and this keeps the 3.3 promise intact, **zero MDX files edited**, so scenarios can be backfilled incrementally without touching 240 files.

Fallback if the plugin proves fragile: a one-time scripted insertion into the MDX, generated from the same data file. The data file stays the source of truth either way, which is what makes the citations auditable.

### 10.6 Scope

Covering all ~5,200 concepts is not real. **2-3 scenarios per lesson, on its most important concepts.**

| Target | Lessons | Scenarios |
|---|---|---|
| Track lessons (aligned with the projects scope) | 240 | ~600-720 |
| Whole library, later | 642 | ~1,600 |

Priority order:
1. The **340 lessons with zero examples**, since they start from nothing
2. The five near-empty categories: legal-compliance (0%), events-experiential (4%), marketing-leadership (4%), affiliate-marketing (11%), pr-communications (11%)
3. Concepts already drilled by a project, so lesson scenario and project step reinforce each other

### 10.7 A scoped exception to the exit rule

Rule 5 requires every roster company to have a confirmed exit. That rule was written for case-study companies and it does not serve scenarios well. The most instructive scenarios are often **failures and turnarounds**: JCPenney's 2012 "Fair and Square" pricing (same-store sales down 25%, CEO out within 18 months) teaches second-order thinking better than any acquisition, and JCPenney never exited.

**Scenarios require a documented, cited outcome, not an exit.** Where the company is also on the roster, link it via `companyId`. Where it is not, `source` still carries the full evidentiary burden. This is a deliberate, scoped divergence, not a loosening of Rule 5, which continues to bind the project roster.

### 10.8 Cost

At ~120 words each, ~700 scenarios is roughly **85,000 words**, plus a citation per scenario. Materially smaller than the projects layer, and it improves lessons that already exist rather than adding a new surface, so it is the cheapest quality win in this document.

### 10.9 New rules

20. **Every `ConceptScenario` needs a cited, dated, quantified outcome.** No `source`, no ship.
21. **`concept` must match a real heading in the target lesson**, and `lessonAnchor` must resolve to it.
22. **`CONCEPT_SCENARIOS` is injected by the rehype plugin, never hand-written into MDX**, so 3.3 (zero MDX edits) continues to hold.

---

## 11. Library survey: where the three-mode model breaks

Four independent agents audited **454 lessons across all 21 categories**, sampling 34 in depth. Each was given the three modes and asked to hunt for misfits. They converged, without coordination, on the same conclusions.

### 11.1 Headline

| Finding | Consequence |
|---|---|
| ~15-20% of lessons fit none of the three modes | Three more modes needed |
| `build` fails wherever quality is rhetorical, not countable | ~1 in 3 build lessons must convert to `teardown` |
| All four agents independently invented the same 4th mode | `teardown` is real, not a local quirk |
| `simulation` is structurally wrong for delayed-consequence lessons | `calibration` mode, or ship nothing |
| `mental-models` is ~50% unmappable | The hardest category, and it sits in the pilot track |

### 11.2 The `build` grader problem

The sharpest finding, and it invalidates part of the earlier plan.

`build` has no grader. Where the artefact has **countable structure** or the lesson ships a **numeric threshold**, self-assessment genuinely works:

- `content/repurposing` produces an atom map. Auto-checkable: at least 6 distinct formats, a well-formed UTM per atom (regex), dates spread over 21+ days, and n-gram overlap with the source pillar under ~30%, which directly enforces the lesson's own "transform, do not copy-paste".
- `copywriting/value-prop-copy` ships the 5-second test, a *procedure with a threshold* (4 of 5 people). The best grader found anywhere in the survey.
- `analytics/utm-tagging` produces a taxonomy doc that is machine-checkable.

Where quality is purely rhetorical, it collapses:

- `copywriting/copywriting-101` asks for a rewritten 150-word block. Every auto-check (you-vs-we ratio, sentence length, CTA is a verb phrase) is trivially gameable. **A learner can pass every check and still write copy that sells nothing.** That is exactly "here is a sample, hope yours is similar".

**Rule: `build` requires a threshold or countable structure. Otherwise convert to `teardown`.** Projected impact: roughly 12-15 of the ~41 builds in content/copywriting/brand-strategy alone, concentrated in `copywriting`, where nearly everything wants to be a build.

### 11.3 Mode 4, `teardown`: supplied specimen, fixed answer key

All four agents proposed this independently under four names: *trace/explain*, *audit (frozen-artefact replay)*, *teardown/critique*, *red-team specimen critique*. Same mechanism every time.

**The learner analyses a specimen they do not own, scored against a pre-written expert key.**

It solves four separate problems at once:

1. **The only mode that grades exactly without a human.** The key is fixed, so partial credit and precise feedback are possible. This is the escape hatch for every failing `build`.
2. **Unblocks gated diagnostics.** `paid-ads/quality-score` has perfect diagnostic bones (exact column path, published thresholds, per-component remediation) but the learner must already have spent ~$300 for the data to be non-default. Hand them a realistic export instead.
3. **Handles architecture explainers.** `seo/how-search-works`, `analytics/cdp`, `data-warehouses`, `reverse-etl`, `privacy-sandbox` have no learner-side action at all. Given a URL and a symptom ("discovered, currently not indexed"), name which stage of the pipeline broke.
4. **Handles bias spotting.** Plant known defects in a real-shaped specimen (a Q4 discount plan, an MQL OKR sheet, a checkout flow) with a hidden defect manifest. Covers `sunk-cost-fallacy`, `survivorship-bias`, `cognitive-biases`, and the ethics half of `loss-aversion` ("find the three manufactured scarcity claims").

```ts
export type TeardownItem = {
  itemId: string;
  specimen: string;          // rendered text/table, never a screenshot (Rule 14)
  specimenSource: "real-redacted" | "synthetic-realistic";
  prompt: string;
  answerKey: {
    defect: string;
    severity: "critical" | "moderate" | "cosmetic";
    whyItMatters: string;
    lessonRef: string;
    owner: "you" | "developer" | "either";
  }[];
  distractors: string[];     // plausible non-defects that must NOT be flagged
  partialCredit: true;
};
```

`distractors` is what stops this degrading into find-the-obvious. The right standard: an ad export must contain keywords under 500 impressions that the learner is **supposed to ignore**, because knowing what is statistically unreliable is the actual skill being tested.

### 11.4 Mode 5, `drill`: parameterised numeric reps

For numeric-judgement lessons: `cro/sample-size-math`, `conversion-rate-math`, `statistical-pitfalls-in-cro`, `multivariate-vs-ab`, `analytics/ltv-cac`, `experimentation-program-roi`, `fundamentals/marketing-math`.

Why the others fail: `build` produces a one-cell answer, not an artefact. `diagnostic` fails because the calculator takes inputs the learner invents, so there is no state of the world to inspect. `simulation` is wildly over-engineered, you would build a branching dashboard to teach `n ~ 14,000`, and the learner passes once and learns nothing, **because the skill is pattern recognition across many parameter sets, not one decision.**

Shape: 6-10 randomly parameterised scenarios, ~30 seconds each, auto-graded against the closed-form answer with a tolerance band, scored on streak and accuracy rather than optimal/acceptable/costly.

**The critical design requirement: include unwinnable scenarios.** Given 400 visitors a week and a 1.8% baseline, the correct answer is "this test is not worth running, use qualitative research instead". Recognising the un-runnable test is the actual professional skill, and no single-shot mode can teach it.

### 11.5 Mode 6, `calibration`: deferred verification

The genuinely novel one, and the most important finding in the survey.

**Why `simulation` is structurally wrong for `mental-models/second-order-thinking`:** the entire content of that lesson is that consequences are invisible at decision time and arrive 6-18 months later, unattributed. A simulation that reveals "you chose the discount, here is the margin erosion" in three seconds teaches pattern-matching on five memorised traps, not the habit. **Learners will ace the drill and still discount in Q4.** The instant feedback loop is opposed to the lesson's own premise.

`build` fails too, because the artefact and the reasoning are the same object. Showing the sample consequence-tree removes the exercise; withholding it removes the grading.

Structure:

1. The learner picks a **real, live, undecided** decision from their own work, not a supplied scenario.
2. They write a falsifiable prediction: the first-order effect, at least two further orders, each with a date and a confidence percentage, plus one named disconfirming signal ("if X is above Y by March, I was wrong").
3. **Immediate grading is on structure only, never content**: depth of at least 2 orders, each order naming a mechanism rather than a mood, at least one predicted cost, at least one falsifiable signal with a date, confidence stated. All objectively checkable without the system knowing the right answer.
4. The prediction is stored with a review date. At 30/90/180 days the learner is re-prompted with their own text, records what actually happened, and scores their own calibration.
5. Optional adversarial layer: the system argues the opposite case and the learner must defend or explicitly update. This is where `bayesian-updating` and `chestertons-fence` actually live.

Three properties no other mode has: **the correct answer is unknown to the system**, **grading is on reasoning structure not outcome**, and **verification is deferred**.

It also needs product infrastructure nothing else here does: persistence, scheduled re-prompting, and a personal prediction log. That puts it in **Phase 3 at the earliest**.

### 11.6 `no-project` is a valid verdict

Until `calibration` exists, roughly 14 `mental-models` lessons and the definitional tail of `fundamentals` (`what-is-marketing`, `strategy-vs-tactics`, `mission-vision-values`, `brand-vs-performance`, `flywheel`) get **no project**, explicitly marked as such.

> **A fake simulation on `second-order-thinking` is worse than no project at all, because it certifies the wrong skill.**

That is Rule 23 below, and it is the most important rule in this document.

### 11.7 Revised distribution

Across the 454 lessons surveyed, after converting failing builds to `teardown`:

| Mode | Share | Concentrated in |
|---|---|---|
| `diagnostic` | ~26% | seo technical, analytics setup, email deliverability, growth. GSC + PageSpeed + GA4 Admin carry nearly all of it |
| `build` | ~26% | product-marketing, content, social calendars, email sequences |
| `simulation` | ~21% | **paid-ads and pr-communications almost exclusively** |
| `teardown` | ~12% | copywriting, analytics interpretation, psychology bias-spotting |
| `calibration` | ~7% | mental-models, fundamentals definitional tail |
| `drill` | ~5% | cro maths, analytics unit economics |
| `no-project` | ~3% | architecture explainers |

Two findings that should change build order:

- **Simulation ROI is concentrated, not spread.** It is the most expensive mode to author and it pays off almost entirely in `paid-ads` and `pr-communications`, the two categories where "irreversible, audience-facing, one shot" is the normal condition. Elsewhere it is thin. Build the simulation engine for those two and resist using it as a default anywhere else.
- **`mental-models` is the break point** (~15 of 29 unmappable), `psychology` second (~8 of 29), `fundamentals` third (~7 of 27). All three share one root cause: **the lesson teaches a judgement whose correctness is only observable after a delay the product currently has no way to represent.**

### 11.8 Consequence for the pilot

`solo-founder` includes three `mental-models` lessons: `first-principles-thinking` (build, weak), `opportunity-cost-thinking` (**unmappable**), `writing-to-think` (build, survives).

So the pilot hits the hardest case immediately. That is good rather than bad: far better to discover `no-project` and `calibration` in the pilot than at lesson 200. **Phase 1 should ship at least one explicit `no-project` verdict** to prove the honesty rule holds in practice.

Recommended pilot mode coverage, so every mechanism is proven before scaling:

| Mode | Pilot lesson |
|---|---|
| diagnostic | `fundamentals/marketing-math` (the survey's strongest diagnostic candidate) or `seo/on-page-seo` |
| simulation | `paid-ads/paid-ads-101` (already added as the 19th lesson) |
| build | `content/content-strategy` |
| teardown | `copywriting/copywriting-101` (the canonical failing build) |
| drill | `fundamentals/marketing-math`, numeric variant |
| no-project | `mental-models/opportunity-cost-thinking` |
| calibration | **deferred to Phase 3**, infrastructure not built |

### 11.9 New rules

23. **`no-project` is a valid, expected verdict.** Never force a mode onto a lesson that resists all of them. A fake simulation certifies the wrong skill and is worse than nothing.
24. **`build` requires a numeric threshold or countable artefact structure.** If quality is purely rhetorical, convert to `teardown`. Auto-checks a learner can game while still producing bad work do not count as grading.
25. **Every `teardown` needs distractors**, plausible non-defects that must not be flagged. Without them it degrades into find-the-obvious.
26. **`drill` must include unwinnable scenarios** where the correct answer is "do not run this".
27. **`calibration` grades structure, never content.** The system does not know the right answer and must never imply that it does.
28. **Do not default to `simulation`.** It is the most expensive mode and its ROI is concentrated in `paid-ads` and `pr-communications`. Elsewhere prefer `teardown` or `drill`.

---

## 12. Lesson quality issues found by audit (backlog, fix later)

A full mechanical audit of all **642 lesson files**, run while designing the projects layer. Every item below is **verified**, not inferred. None of it blocks the projects work, but several items are user-visible today.

Two findings turned out to be measurement artifacts that exposed *different* real problems, documented at 12.10 so nobody re-derives them.

### 12.1 P1, user-visible: `" ,  "` em-dash replacement residue, 53 files

The worst-looking issue, because it renders directly to the reader.

A bulk em-dash removal appears to have replaced `—` with `` ,  `` (space, comma, two spaces), leaving broken punctuation mid-sentence:

> "Segment, RudderStack, mParticle **,  the** unified-customer-profile layer." (`analytics/cdp`)

**53 files affected, 200+ individual occurrences.** Worst offenders:

| File | Occurrences |
|---|---|
| `copywriting/value-prop-copy` | 24 |
| `brand-strategy/naming` | 23 |
| `analytics/cdp` | 11 |
| `analytics/privacy-sandbox` | 4 |
| ...49 more files | 1-3 each |

**Fix:** scripted pass replacing `` ,  `` with the correct punctuation per context. Not blindly, since some are legitimately a comma followed by a sentence continuation. Recommend: auto-fix where the pattern is `word ,  word` mid-sentence (collapse to `, `), and hand-review the rest. Grep: `grep -rn " ,  " src/content --include=*.mdx`.

### 12.2 P1, user-visible: 10 lessons have no `##` headings at all

`TableOfContents.tsx` returns `null` when it finds fewer than 2 headings. These 10 lessons therefore render **with no table of contents, on desktop and mobile**, and the reader gets no way to navigate or scan.

```
ai-marketing/internal-gpt-knowledge-bases
brand-strategy/narrative-transport-branding
copywriting/ux-writing-microcopy
cro/post-purchase-cro
fundamentals/plg-fundamentals
growth/reverse-trials-monetization
paid-ads/pmax-advantage-plus
product-marketing/category-creation-gtm
+ 2 more
```

**Fix:** add section headings. This also directly blocks the projects layer, since Rule 15 requires every `ProjectStep.concept` to map to a real lesson heading, and section 10 requires `ConceptScenario.lessonAnchor` to resolve to one. **These 10 lessons cannot receive projects or concept scenarios until they have headings.**

### 12.3 P1: 4 lessons below the Rule 16 stub threshold

Rule 16 flags anything under ~700 words with no real depth as a stub.

| Lesson | Words |
|---|---|
| `fundamentals/strategy-vs-tactics` | 648 |
| `pr-communications/press-kit-media-kit` | 661 |
| `affiliate-marketing/influencer-vs-affiliate` | 666 |
| `pr-communications/measuring-pr-impact` | 693 |

Note `fundamentals/strategy-vs-tactics` was independently flagged in the mode survey (11.6) as having no procedure at all, only What/Why/How/Mistakes/Takeaway. Thin **and** unprojectable is a strong signal it needs rewriting, not just padding.

### 12.4 P2, SEO and navigation: "Related Concepts" exists in only 10% of lessons

**63 of 642 (9.8%).** 579 lessons have no related-concepts section.

This is the largest internal-linking gap in the codebase. The site teaches internal linking as a ranking factor (`seo/internal-linking`, in two tracks) while 90% of its own lessons are terminal nodes.

**Fix:** generate from `curriculum.ts` rather than hand-authoring 579 sections. Same category plus shared level is a reasonable first heuristic; `RelatedLessons.tsx` already exists and already does this at the page level, so the cheapest fix may be to drop the MDX convention entirely and rely on the component, then delete the 63 hand-written ones for consistency.

### 12.5 P2: 45 lessons cite 2024 and never 2025 or 2026

The footer reads "© 2026" and Rule 11 requires recent research. These 45 read as stale on arrival:

```
analytics/marketing-kpis-okrs, analytics/product-vs-marketing-analytics,
analytics/reverse-etl, analytics/session-recording,
brand-strategy/narrative-transport-branding, brand-strategy/personal-brand-vs-company-brand,
content/content-localization, content/video-first-content-strategy,
copywriting/microcopy, copywriting/storytelling-copy, + 35 more
```

**Fix:** refresh stats with 2025/2026 sources. This overlaps usefully with section 10, since adding a dated concept scenario naturally refreshes the lesson's evidence base. **Do them together, not twice.**

### 12.6 P2: near-duplicate lesson slugs

Confirmed pairs likely to produce duplicated projects and to compete in search:

| Pair | Note |
|---|---|
| `analytics/attribution` vs `attribution-models` | Near-identical scope |
| `analytics/funnel-analysis` vs `funnel-analytics` | Names differ by one character |
| `analytics/cdp` vs `composable-cdp` | Parent/child, probably fine merged |
| `analytics/kpis-for-marketers` vs `marketing-kpis-okrs` | Overlapping |
| `analytics/dashboards` vs `reading-dashboards-for-non-analysts` | Overlapping |
| `email/email-101` vs `email-marketing-101` | Near-identical |
| `email/automation-drips` vs `automation-flows` | Near-identical |
| `social/social-listening` vs `social-listening-advanced` | Parent/child, probably fine |

**Fix before authoring projects.** Either merge, or give each a distinct angle and a distinct project. Doing nothing means paying twice to write near-identical runbooks. Note `analytics` accounts for 5 of the 8 pairs.

### 12.7 P3, hygiene: UTF-8 BOM at file start, 19 files

```
analytics/cdp, analytics/clean-rooms, analytics/data-warehouses,
analytics/privacy-sandbox, psychology/default-bias,
psychology/mere-exposure-effect, tools/ai-native-tools,
tools/ai-tools-overview, + 11 more
```

A `U+FEFF` byte order mark sits before `export const lessonMeta`. Harmless today because the MDX parser tolerates it, but it silently breaks any tool anchoring on `^export`. It broke this audit, which is how it was found.

**Fix:** strip the BOM, add a lint check.

### 12.8 P3, consistency: 25 lessons use single quotes in `lessonMeta`

```ts
level: 'Advanced',      // 25 files
level: "Advanced",      // 617 files
```

Valid JavaScript, so nothing breaks at build time. The risk is **silent tooling divergence**: this audit's `level`, `summary` and Rule 15 multilingual checks all false-negatived on exactly these 25 files, producing three phantom issues that looked real until verified.

This matters more than it sounds. Rule 21 already documents a case where an agent's output format silently diverged from the codebase convention and caused a real bug. Same class of problem.

**Fix:** normalise to double quotes, add a lint rule. Note that Rule 1 (no unescaped inner double quotes) becomes relevant when converting; check each summary for `'` contractions and inner quotes before switching.

### 12.9 P3: one bloated lesson

`cro/social-proof-engineering` at 2,694 words, just past the Rule 16 ceiling of ~2,000-2,600 for a rich lesson. Low priority. Only act if it repeats itself; Rule 16 explicitly warns against trimming rich lessons to hit a number.

### 12.10 Two false positives, recorded so they are not "fixed" by mistake

**A. Mermaid `\n` in node labels, 165 files. NOT a bug. Do not touch.**

A naive audit flags 165 files writing `A[Product\nWhat you sell]`. **This is the correct, documented authoring pattern.** Rule 30 explains at length that `Mermaid.tsx`'s `insertLabelBreaks()` handles the conversion, that the `<br/>` alternative was tried and fails silently because DOMPurify strips HTML-namespaced elements inside `foreignObject`, and that new lessons should keep writing `\n`. Any future agent "fixing" these 165 files would reintroduce a bug that already shipped to production once.

**B. Rule 15 multilingual entries appear 100% compliant.** The 25 apparent violations were all the single-quote files from 12.8. No genuine Rule 15 gaps found across 642 lessons.

### 12.11 Clean results worth recording

Audited and found **zero** violations of:

- Rule 33, leaked agent thinking lines above `lessonMeta` (the Session 66 issue has stayed fixed)
- Rule 1, unescaped double quotes inside `lessonMeta` strings
- Missing `<ResourceList>`, present in all 642
- Rule 15 multilingual entries, see 12.10B

### 12.12 Suggested order

| Priority | Item | Effort | Why now |
|---|---|---|---|
| 1 | 12.2, 10 lessons with no headings | Small | **Blocks projects and concept scenarios** on those lessons |
| 2 | 12.1, `" ,  "` residue in 53 files | Small, scripted + review | Visible to every reader today |
| 3 | 12.6, duplicate slugs | Medium, judgement | Must resolve **before** authoring projects or the work is paid for twice |
| 4 | 12.3, 4 stub lessons | Medium | Two are already flagged unprojectable |
| 5 | 12.5, 45 stale-year lessons | Large | **Bundle with section 10 scenario work** |
| 6 | 12.4, Related Concepts at 10% | Medium, generated | Biggest SEO win, but no reader is blocked |
| 7 | 12.7 + 12.8, BOM and quote style | Small, scripted | Prevents future silent tooling divergence |
| 8 | 12.9, one bloated lesson | Trivial | Optional |

Items 1, 3 and 5 have direct dependencies on the projects and scenarios work. The rest are independent and can be done any time.
