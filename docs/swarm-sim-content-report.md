# Swarm-sim forecast: who sticks with Marketing Academy in the first 4 weeks

*Run date: 2026-11-20. Method: `/swarm-sim`, 6 rounds (weeks 1, 2, 3, 4, 6, 8), 20 agents (5 weighted persona cohorts + 13 individual voices + 2 decision-makers), 1 baseline run + 1 what-if branch. Live discussion view: [swarm-sim-live.html](swarm-sim-live.html). Run files (agents, every round's posts, metrics): `scratchpad/swarm-sim/ma-learner-retention-2026-11-20/` in this session's temp folder.*

> **Read this first.** This is a language-model rehearsal, not a calibrated prediction. The repo holds no real usage or retention data (progress lives in each learner's browser), so every retention number below is simulated. Two kinds of claims are kept apart throughout:
> - **[Repo]** = checked in the source code or content, with a file path.
> - **[Sim]** = what the simulated learners did or said. Treat it as a plausible scenario, not as evidence.

---

## Answer

**[Sim] Most learners are gone by week 4.** About **10% of the weighted learner crowd is still active at week 4**, in the "mass drop-off" range for self-paced free courses. Confidence: **medium** on the direction (it matches the cited base rates of 7-26%), **low** on the exact number.

Who stays and who leaves:
- **Stay:** career switchers who use the interview bank, and freelancers and agencies who use the projects as templates.
- **Leave first:** Indian college students who wanted Hindi, Tamil or Telugu video. Most were gone by week 2. The competitor's AI tutor in week 3 took most of the rest.
- **Drift:** working marketers. They treat the site as a reference they land on from Google, not as a course.
- **Hiring managers turn more negative:** the certificate can't be verified.

**[Repo] Four content facts drive most of the drop-off:**
1. The regional-language links go to channel homepages, not topic videos.
2. The lessons have almost no Indian context.
3. "Totally new to marketing" lands learners on a 21-topic list with no set order.
4. Certificates and portfolios exist only in the learner's own browser.

---

## 1. Retention forecast per persona

Active share = max(0, cohort stance), counted for learners only (hiring managers excluded). See the [Limits](#9-assumptions-and-limits) section for why this formula changed partway through the run.

| Persona (weight) | Start | Wk 1 | Wk 2 | Wk 3 | **Wk 4** | Wk 8 | Verdict |
|---|---|---|---|---|---|---|---|
| Indian college students, vernacular video (30%) | +0.40 | +0.15 | −0.05 | −0.45 | **−0.45 (≈0% active)** | −0.45 | **Churn**, weeks 1-3 |
| Career switchers (25%) | +0.50 | +0.50 | +0.50 | +0.25 | **+0.20 (≈20%)** | +0.20 | **Partial stay** |
| Working marketers 2-5 yrs (20%) | +0.30 | +0.30 | +0.15 | +0.10 | **+0.05 (≈5%)** | +0.10 | **Drift**: episodic, via search |
| Freelancers / agencies (15%) | +0.20 | +0.20 | +0.20 | +0.20 | **+0.20 (≈20%)** | +0.30 | **Stay** for projects |
| Hiring managers (10%, judges, not learners) | −0.20 | −0.20 | −0.20 | −0.20 | **−0.45** | −0.45 | **Distrust grows** |
| **Weighted learners still active** | 40% | 29% | 21% | 12% | **10%** | 13% | |

### Indian college students: churn
- **[Sim]** Two things pushed them out in week 1: phone-length English text, and the "Hindi video" opening WsCube's channel instead of a video on the topic. A typical member said: *"Easier to watch WsCube directly"* (simulated, round 1).
- **[Sim]** The placement-season student left in week 2. Six passed quizzes still didn't add up to a certificate before placements.
- **[Sim]** The week-3 AI tutor, with own-language explanations and a certificate carrying an ID, took most of the rest in one round.
- **[Repo] Pages and lessons involved:**
  - **Regional links:** 568 lessons point their Hindi, Tamil and Telugu entries at the same three channel homepages. Example: the last three ResourceList entries of `src/content/ai-marketing/ai-agents-marketing.mdx`.
  - **Onboarding:** "Totally new to marketing" routes to `/learn` (`src/components/OnboardingModal.tsx:11`).
  - **Track length:** tracks run 13-21 lessons, with a stated 10-22 hours (`src/lib/tracks.ts`).
  - **Certificate rule:** a certificate needs 100% of the track's lessons plus the track quiz (`src/app/certificates/[slug]/page.tsx:85`).
  - **Shop examples:** the social lessons use US brands and dollar budgets, e.g. `src/content/social/algorithm-basics.mdx`.

### Career switchers: partial stay
- **[Sim]** The interview bank is what held them: *"exactly how I need to talk in interviews"* (simulated, round 1).
- **[Sim]** Two things wore them down in week 4. Interviewers asked for work samples, and the portfolio only shows on the learner's own laptop.
- **[Sim]** The best outcome in the run was a switcher who got a job offer. He used the question bank plus two finished projects and *"never showed the certificate once."*
- **[Repo] Files involved:**
  - **Interview bank:** about 159 problem/approach/result Q&As in `src/lib/interview-questions.ts`.
  - **Portfolio:** completed projects are read from localStorage only (`src/components/PortfolioClient.tsx:73-76`).

### Working marketers: drift
- **[Sim]** They come in from Google for one topic, read one good lesson and close the tab. They never sign in, so no streak or resume email ever reaches them: *"I use it like a reference, not a course."*
- **[Sim]** An SEO executive who wanted paid ads skills left for Google Skillshop in week 2.
- **[Repo] Files and lessons involved:**
  - **Paid-ads depth:** only 3 of 33 paid-ads lessons are Beginner, and the budgets in `src/content/paid-ads/google-search-ads.mdx` are in dollars.
  - **Analytics:** `src/content/analytics/analytics-101.mdx` still spends space on Universal Analytics vs GA4, and `src/content/analytics/ai-powered-insights.mdx` has no worked example.
  - **Reminders:** streak, resume and digest emails only reach signed-in users (`.github/workflows/engagement-emails.yml`, `src/lib/engagement.ts`).

### Freelancers and agencies: stay, for one reason
- **[Sim]** They skipped the tracks and kept the projects. One freelancer turned a project's sample output into a paid audit in 2 hours. An agency owner made the projects week 1 of junior onboarding.
- **[Sim]** Their one repeated ask, every round: a proposal, scope and pricing exercise, and a client-reporting template.
- **[Repo] Files involved:**
  - **Projects:** 803 projects with free-tool paths and sample outputs (`src/lib/projects/`).
  - **Missing projects:** `src/lib/projects/` has no file for `marketing-leadership`, which holds `freelance-consulting-marketer.mdx` and `agency-vs-inhouse-decision.mdx`, or for `affiliate-marketing`.

### Hiring managers: distrust grows
- **[Sim]** The turning point came in week 4. A hiring manager clicked a candidate's shared certificate and saw a "not quite eligible yet" screen, because the page reads the viewer's browser, not the candidate's.
- **[Repo] Files involved:**
  - **Share link:** the LinkedIn share URL is `/certificates/{track-slug}` with no learner id (`src/app/certificates/[slug]/page.tsx:379`).
  - **Eligibility:** computed from localStorage (`:85`).
  - **Name:** a free-text input, so anyone can type any name (`:340`).

---

## 2. Top 10 content gaps and weak spots, ranked

The ranking comes from simulated impact: how many weighted learners a gap touched, and how early. The evidence column is checked repo fact.

| # | Gap | Evidence [Repo] | Who it loses [Sim] |
|---|---|---|---|
| 1 | **Regional-language links go to channel homepages, not topic videos** | 568 lessons link the same 3 homepages (e.g. `src/content/ai-marketing/ai-agents-marketing.mdx`, last 3 entries). Some titles don't match the topic (`src/content/mental-models/bayesian-updating.mdx` Hindi entry is titled "Marketing Analytics"). In `src/lib/lesson-resources.ts`, 519 of 1,543 "Hindi" videos are the same URL as an English video, and 249 of 642 lessons have no curated video set at all. | Students (30%) in week 1; it is also the opening the competitor walks through |
| 2 | **Certificates can't be verified** | `src/app/certificates/[slug]/page.tsx:85` (localStorage eligibility), `:340` (free-text name), `:379` (share link with no learner id) | Hiring managers; it also weakens the reason switchers and students have to finish |
| 3 | **Almost no Indian context** | "India" in about 60 of 642 lessons, ₹ in about 1, Indian consumer brands in 5. 0 of 20 sampled lessons in batch B had any India example. All 28 `src/content/legal-compliance/` lessons are US law (CAN-SPAM, BIPA, TCPA). The DPDP Act appears only in `src/content/analytics/marketing-data-governance.mdx`; ASCI appears in 0 files. | Students and switchers in India; makes lessons feel foreign ("saree shop, not a US brand") |
| 4 | **No starting path for a true beginner** | `src/components/OnboardingModal.tsx:11` sends "Totally new to marketing" to `/learn`, the full 21-topic list. Homepage says "Start anywhere" (`src/app/page.tsx`). No goal option for job seekers or freelancers (`OnboardingModal.tsx:11-17`). | Students, and some switchers lost in week 1 |
| 5 | **No student or first-job track; career content is buried** | All 24 tracks in `src/lib/tracks.ts` target practitioner roles. Career lessons sit in `src/content/marketing-leadership/marketing-career-paths.mdx`, mostly at Intermediate or Advanced level. | Switchers and students preparing for placements |
| 6 | **Track length doesn't fit learners' deadlines** | Tracks are 13-21 lessons and 10-22 hours (`src/lib/tracks.ts`). Certificate needs 100% + track quiz. | Placement-season students in week 2 |
| 7 | **Portfolio can't be shared** | `src/components/PortfolioClient.tsx:73-76` reads completed projects from localStorage only, with no public URL | Switchers asked for work samples in week 4 |
| 8 | **Nothing brings an anonymous or search visitor back** | Streak, resume and digest emails need sign-in (`.github/workflows/engagement-emails.yml`); XP and streaks live in localStorage (`src/lib/engagement.ts`) | Working marketers (20%), who drift to reference-only use |
| 9 | **No client toolkit for freelancers** | No proposal, pricing or client-reporting project. No `src/lib/projects/` file for `marketing-leadership` or `affiliate-marketing`. `src/content/marketing-leadership/freelance-consulting-marketer.mdx` has no project. | Freelancers stay, but only for projects; this caps word of mouth |
| 10 | **Thin or dated lessons where working marketers need depth** | Short advanced lessons: `src/content/email/abm-email-sequences.mdx` (1,054 words), `src/content/tools/all-in-one-tools.mdx` (1,213), `src/content/marketing-leadership/board-reporting-marketing.mdx` (974, no year cited). Dated material: `src/content/ai-marketing/ai-content-writing.mdx:58` names GPT-4.1/GPT-4o as current, and `src/content/analytics/analytics-101.mdx` still covers UA vs GA4. 10 of 22 sampled lessons in batch A have no `<InAction>` case (e.g. `src/content/email/email-101.mdx`). | Working marketers, who compare against Skillshop and ChatGPT |

---

## 3. What the site does well (keep these)

- **The interview bank** (`src/lib/interview-questions.ts`). **[Repo]** About 159 answers in a problem/approach/result shape. **[Sim]** The most-cited reason switchers stayed, and part of a simulated job offer.
- **Projects with a free-tool path and a sample output** (`src/lib/projects/`, 803 projects). **[Sim]** The only thing freelancers and agencies stayed for. **[Sim]** Hiring managers trusted a project sample over any certificate.
- **The quiz gate with a retake button** (`src/components/Quiz.tsx`). **[Sim]** The anxious career-returner's "saved me from giving up" moment, plus a real track completion in week 4.
- **XP, streaks and the review page** (`src/lib/engagement.ts`, `/review`). **[Sim]** These kept the one structured learner on a 9-day streak.
- **Consistent lesson structure, with Mermaid diagrams and sourced cases.** **[Repo]**
  - **Components:** 419 lessons have a Mermaid diagram, and 386 have an `<InAction>` case.
  - **Reference lesson:** `src/content/cro/conversion-rate-math.mdx`, which has 2 cases, a diagram, a 12-row table and a worked four-step playbook.
- **Free, with no account needed.** **[Sim]** No one cited cost as a reason to leave. The losses were about format, proof and relevance.

---

## 4. Baseline vs what-if: tracks cut to 5 lessons each

**[Repo] What the cut would actually contain** (`src/lib/tracks.ts`, first 5 lessons):
- **paid-ads-mastery:** paid-ads-101, google-search-ads, meta-ads, quality-score, bidding-strategies. All introductory.
- **freelancer-agency:** what-is-marketing, value-proposition, marketing-math, how-search-works, keyword-research. Nothing about clients.
- **analytics-mastery:** analytics-101, ga4-setup, utm-tagging, kpis-for-marketers, conversion-tracking. The practical core.
- **social-media-manager:** strategy basics, then Instagram, LinkedIn, TikTok and YouTube.

| Learners still active [Sim] | Wk 1 | Wk 2 | Wk 3 | **Wk 4** | Wk 8 |
|---|---|---|---|---|---|
| Baseline (13-21 lesson tracks) | 29% | 21% | 12% | **10%** | 13% |
| What-if (5-lesson tracks) | 34% | 30% | 14% | **12%** | 13% |

| Persona at week 4 [Sim] | Baseline | 5-lesson tracks | Why |
|---|---|---|---|
| Students | −0.45 | **−0.20** | A certificate in one evening kept them through weeks 1-2. They still left at week 3 for a certificate an employer could check. |
| Career switchers | +0.20 | +0.25 | Finished more tracks, but "four certificates, not sure any mean much" |
| Working marketers | +0.05 | +0.10 | Helped where the first 5 lessons are the core (analytics). Didn't help where they're intros (paid ads). |
| Freelancers | +0.20 | +0.15 | The 5-lesson freelancer track is generic basics. Projects stay the draw. |
| Hiring managers | −0.45 | **−0.50** | "A stack of two-hour certificates" made each one worth even less |

**What changes [Sim]:**
- **Weeks 1-2 get better:** short tracks lift early retention by 5-9 points. Completions rise, and the career-returner said 15 hours *"would have scared me off."*
- **Week 4 barely moves:** the competitor and the language gap decide weeks 3-4, not track length (12% vs 10%).
- **Two new problems appear:**
  - **Certificates lose value:** hiring managers discount them harder.
  - **Finishers stall:** learners hit a wall after lesson 5, with the other 8-16 lessons of each topic outside any path.

**Takeaway [Sim]:** shorter tracks are worth doing as a "level 1" with a clear "level 2" after it. Don't use them as a replacement, and don't attach the same certificate to them.

---

## 5. Three interviews (in character, simulated)

**Stayer: Meera, a former teacher returning from a career break (career switcher)** *(in character)*
> *Why did you stay when so many people left?* Because I always knew what came next. The track told me lesson 4, then lesson 5, and the quiz made me go back when I'd skimmed. I failed one and nearly quit, but the retake button was right there. *What almost made you leave?* Week 1. Twenty-one topics is a lot when you're already unsure of yourself. And later a recruiter liked my certificate post, then asked for writing samples. The projects gave me those. The certificate didn't.

**Churner: Rohan, a BBA final-year student in Lucknow (Hindi-first)** *(in character)*
> *What happened?* Placements were in two weeks. I passed six quizzes and still had no certificate, because I needed the whole track plus another quiz. The Hindi link just opened WsCube's channel. I already watch WsCube, so what's the point? *Would anything have kept you?* A short course with a certificate before placements, and a Hindi video on the actual topic. Then the AI tutor came along with both, and the certificate had an ID.

**Hiring manager: Deepak, head of growth at a D2C brand** *(in character)*
> *Do these certificates mean anything to you?* I clicked one from a candidate's LinkedIn. It showed *me* a "not quite eligible yet" screen. I don't know what that says about the candidate, but it says the certificate can't be checked. *So what would count?* The GA4 audit another candidate sent, built from one of their projects. The work was solid and the reasoning was clear. Give me a public link to that work with the learner's name on it, and I'll read it. A PDF anyone can print, I won't.

---

## 6. Forecast (outcome buckets at week 4, baseline)

Bucket definitions: mass drop-off < 20% active · niche retention 20-40% · solid retention 40-60% · breakout > 60%.

**Reference cases** (the "outside view": comparable real courses, cited):
- edX/HarvardX-MITx, second-year retention down to 7% → mass drop-off ([MIT TSL, *The MOOC Pivot*](https://tsl.mit.edu/research/the-mooc-pivot/))
- Self-paced programming MOOC, 13% retained vs 45% for the fixed-schedule version → mass drop-off ([IEEE FIE 2020](https://computer.org/csdl/proceedings-article/fie/2020/09274023/1phRTHwOS7C))
- Self-paced programme, 26% of 876 completed at least one course → niche retention ([arXiv](https://arxiv.org/pdf/2609.34953))

| Bucket | Simulated (1 run) | Outside view | Blend (w = 0.4) | **Final, 5% floor** |
|---|---|---|---|---|
| mass_drop_off | 100% | 67% | 80% | **72%** |
| niche_retention | 0% | 33% | 20% | **18%** |
| solid_retention | 0% | 0% | 0% | **5%** |
| breakout | 0% | 0% | 0% | **5%** |

What would move the tails:
- **Niche retention:** fixing gaps 1-4 before a competitor arrives, which would hold students past week 2.
- **Solid retention:** verifiable certificates plus a first-job track, so switchers and students have proof worth finishing for.
- **Breakout:** freelancers recommending the site widely once a client toolkit exists (gap 9).

---

## 7. Who moved whom [Sim]

- **The competitor's launch (week 3)** was the biggest single shock. Students fell from −0.05 to −0.45 in one round. A regional-language YouTuber, the most influential voice students follow, switched to promoting it.
- **Hiring-manager posts (week 4)** turned "certificate" from a selling point into a weakness. The forum skeptic's line *"a hiring manager wants a link to work"* (round 2) came true two rounds later.
- **The maintainers (simulated) shipped two fixes:** topic-specific video links (announced week 3) and certificate verification for signed-in learners (announced week 4, live week 8). Both arrived after students had left. One student came back for a project once the Tamil link went to the right video, but the cohort as a whole didn't recover.

---

## 8. Levers and signals to watch

- **Levers, in the order the sim suggests:**
  1. Replace channel-homepage links with topic videos. `lesson-resources.ts` already has them for 393 lessons.
  2. Make certificates and project links verifiable for signed-in learners. Account sync already writes progress to the database.
  3. Add a "first marketing job" path: the interview bank, 5 portfolio projects and a verifiable certificate in one track.
  4. Route "Totally new" to one beginner track instead of `/learn`.
  5. Add India examples to the beginner lessons and DPDP/ASCI coverage to legal-compliance.
  6. Add a proposal, pricing and client-report project for freelancers.
- **Real signals that would confirm or refute this forecast:**
  - Week-2 and week-4 return rates of signed-in users, split by onboarding goal.
  - Click-through on Hindi, Tamil and Telugu links compared with English resources.
  - Certificate-page views by people who don't hold the certificate.
  - Project-page traffic from returning visitors compared with lesson-page traffic.

---

## 9. Assumptions and limits

- **No real data.** The repo has no usage or retention data, and progress is stored in browsers. Initial stances are priors set from persona interests.
- **The persona weights are yours.** 30/25/20/15/10 came from your brief, not from analytics.
- **The activity formula changed after round 4.** The run started with active share = (stance + 1)/2. That formula gave a neutral learner 50% activity and put week 4 at **46% (solid retention)**, which contradicts the cited 7-26% base rates. I switched to max(0, stance) for learners only, which gives **10%**. The bucket label depends on this choice. The ranking of personas and gaps does not.
- **The competitor is a fictional composite.** Its features (AI tutor, regional languages, verification ID, mock interviews) are assumed, not sourced.
- **The maintainers' moves are simulated.** In the sim they shipped fixes in weeks 3-8. The real site has none of these changes; the baseline numbers for weeks 1-3 reflect the site as it is today.
- **The sample is small.** 1 baseline run and 1 branch, no ensemble. 42 sampled lessons (2 per category); the sub-agents read the openings and headings of about 14 and scanned all 42 mechanically (word counts, components, India terms, years, links). None was read end to end. Hands-on and jargon calls on lessons are judgement.
- **No site files were edited.** This report and `docs/swarm-sim-live.html` are the only files written in the repo.
