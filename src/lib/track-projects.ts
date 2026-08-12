/**
 * Track-level "big" projects (PROJECTS_PLAN.md section 2.6, tier "big").
 *
 * These are cross-lesson synthesis work, not a restatement of any single
 * lesson's own project. They sit at milestone points inside a track's
 * lesson sequence (`afterLessonIndex`, 0-indexed against `TRACKS[...].lessons`
 * in src/lib/tracks.ts) and pull concepts from every lesson listed in
 * `synthesizes`, matching the same principle `TRACK_QUIZZES` already uses
 * for track-level synthesis quizzes (AGENTS.md Rule 32).
 *
 * ---------------------------------------------------------------------------
 * A running example instead of four disconnected scenarios
 * ---------------------------------------------------------------------------
 * All four Solo Founder Track big projects follow one continuous fictional
 * venture, "Loopwork" — a project-management SaaS for 5-15 person distributed
 * teams — advised by the learner across the whole track. Loopwork's backdrop
 * company is `freshworks` (CASE_COMPANIES): a real, cited, bootstrapped
 * Chennai-founded SaaS company that grew into a $10.13B Nasdaq IPO (see
 * src/lib/projects/paid-ads.ts for the same company used the same way, a
 * real test-product narrative layered on a real company's facts). Using one
 * company across all four milestones lets the track read as one earned
 * journey rather than four unrelated case studies, exactly the brief for a
 * track capstone. Every `sampleOutput` below intentionally demonstrates the
 * exercise using a DIFFERENT real company than `freshworks` (mailchimp,
 * zillow, dollar-shave-club, duolingo), so it teaches the method without
 * handing over Loopwork's specific numbers.
 *
 * This also happens to be possible because four of the eight starter
 * datasets in public/project-data/ independently describe the same kind of
 * business (a project-management SaaS tool): funnel-data.csv,
 * cohort-retention.csv, keyword-export.csv, positioning-comparison.json,
 * and email-campaign-export.csv all read naturally as Loopwork's own
 * exports. utm-traffic-export.csv (project 4) is channel-agnostic and reused
 * the same way. Every number quoted in a step below was computed directly
 * from those files, not invented (see the per-step `where` field for the
 * exact path and the aggregation described in `procedure`).
 *
 * ---------------------------------------------------------------------------
 * A note on `ProjectStep.lessonAnchor` for a MULTI-lesson project
 * ---------------------------------------------------------------------------
 * `ProjectStep.lessonAnchor` was designed for a single-lesson `Project`
 * (see src/lib/projects/mental-models.ts's header comment: it is rendered as
 * a literal `href="#${lessonAnchor}"` by `ProjectStep.tsx`, which assumes
 * every step's heading lives on the one lesson page the project is attached
 * to). A `TrackBigProject` has no such single page, it renders inside
 * `TrackLessonList` on the track page (PROJECTS_PLAN.md 2.7's planned
 * `TrackProjectCard.tsx`, not yet built). There is currently no per-step
 * field naming which lesson (of the several in `synthesizes`) a given step's
 * anchor belongs to.
 *
 * Resolution used here: every `lessonAnchor` below is still the exact,
 * verified rehype-slug id of a real heading (per the hard requirement that
 * it "resolve to that heading's id"), computed from the actual MDX file
 * named in that step's `where` comment. `TrackProjectCard.tsx`, when built,
 * will need to resolve which lesson each step belongs to before it can link
 * correctly — the straightforward approach is matching the anchor id against
 * each `synthesizes` lesson's heading id list (one match should be unique in
 * practice) rather than assuming the bare `#id` href pattern `ProjectStep.tsx`
 * uses today. Flagging this now so it isn't rediscovered as a bug later.
 */

import type { TrackBigProject } from "@/lib/projects/types";

export const TRACK_BIG_PROJECTS: Record<string, TrackBigProject[]> = {
  "solo-founder": [
    // -----------------------------------------------------------------
    // Milestone 1 — after product-market-fit (lesson index 3)
    // -----------------------------------------------------------------
    {
      id: "solo-founder-big-1-positioning-economics-sprint",
      trackSlug: "solo-founder",
      afterLessonIndex: 3,
      synthesizes: ["value-proposition", "marketing-math", "product-market-fit"],
      tier: "big",
      archetype: "forecast",
      title: "The Founder Positioning & Economics Sprint",
      timeEstimate: "3 hours",
      timeMinutes: 180,
      objective:
        "Build a one-page Positioning & Economics Brief for Loopwork by drafting a four-level value proposition against real competitor positioning data, forecasting CAC and payback from a real 30-day funnel export, and reading a real cohort-retention export for an honest PMF signal, before a single dollar of the pre-seed budget goes to paid acquisition.",
      companyId: "freshworks",
      scenario:
        "You're the fractional marketing advisor to a two-person founding team building Loopwork, a project-management tool for distributed teams of 5-15 people. It's an early echo of Freshworks' own 2010 Chennai origin story, Girish Mathrubootham and two co-founders bootstrapping a helpdesk product on a shoestring before it became a $10.13B Nasdaq company. Loopwork has no funding beyond $2,000 of pre-seed marketing budget and 90 days of runway before the founders need to decide whether to keep building.",
      brief:
        "Three lessons, one document. You'll map Loopwork against five real competitor products, draft and pressure-test a four-level value proposition, forecast what a real 30-day funnel export implies about channel-level CAC, read a real cohort-retention curve for an honest (not hopeful) PMF signal, and end with a single go/no-go call on the remaining budget.",
      mode: "build",
      conceptsCovered: [
        "the four levels of a value proposition (functional/emotional/social/identity)",
        "pressure-testing a value prop with the 'so what' test",
        "why a clear value prop matters before you spend on acquisition",
        "the CAC formula and channel-level acquisition efficiency",
        "how CAC, LTV, ROAS and payback interact",
        "the three signals of product-market fit",
        "the Sean Ellis / PMF measurement toolkit",
        "when to spend marketing budget before vs. after PMF",
      ],
      steps: [
        {
          stepId: "map-competitors",
          concept: "Mapping Loopwork against real competitor positioning to find an actual gap",
          lessonAnchor: "the-four-levels-of-a-value-proposition",
          theoryRecap:
            "A value proposition only means something relative to what else a buyer could choose. The four levels (functional, emotional, social, identity) are where you differentiate; the target audience is where you decide who you're differentiating for.",
          question:
            "Where does Loopwork actually sit against the five PM tools already fighting for the same distributed-team dollar, and is there a real gap or are you about to be the sixth 'thinks like your team' pitch?",
          toolName: "Notion",
          where: "public/project-data/positioning-comparison.json, opened alongside a new Notion page titled \"Competitor Map\"",
          procedure: [
            "Read all 5 entries in positioning-comparison.json: Flowbase, Trellix Pro, Orbitwork, Nudge, Ridgeline",
            "For each, log target_audience, key_differentiator, and price_tier in a table",
            "Circle every competitor whose target_audience overlaps Loopwork's assumed ICP (5-15 person distributed teams)",
            "Name the one thing none of the five currently claim",
          ],
          outputSample:
            "Competitor       Audience                                  Differentiator                          Price\n" +
            "Flowbase         10-50 person distributed teams (Series A/B) AI weekly status summaries              $12-18/seat\n" +
            "Trellix Pro      Small creative/marketing teams (5-20)       Deepest kanban customization             $6-9/seat\n" +
            "Orbitwork        500+ employee IT/ops, cross-dept programs   Resource capacity planning, PMO-level   $35-55/seat\n" +
            "Nudge            Solo founders/freelancers                   Auto-prioritized single-user task list   Free + $5/mo\n" +
            "Ridgeline        20-200 person eng/product, sprint delivery  Native Git commit/PR sync                $20-28/seat",
          healthy:
            "A visible, nameable gap: a segment two or more competitors under-serve, for example teams too big for Nudge's single-user design but too small and non-technical for Trellix Pro's kanban depth or Flowbase's AI/integration overhead.",
          unhealthy:
            "Every competitor already claims your exact audience and differentiator, meaning Loopwork would be the sixth near-identical pitch into a crowded segment.",
          interpret:
            "Nudge is explicitly single-user (no team features at any price), Flowbase targets 10-50 person teams already past Series A, Orbitwork is enterprise-only, and Ridgeline is engineering-specific. The real gap is 5-15 person non-technical teams who've outgrown Nudge but don't need Trellix Pro's kanban depth or Flowbase's AI overhead, exactly the size Loopwork already assumed, now backed by evidence instead of a guess.",
          soWhat: [
            {
              symptom: "The 5-15 person, non-technical gap is confirmed and unclaimed",
              action: "Draft Loopwork's positioning explicitly against Nudge (too solo) and Trellix Pro (too kanban-heavy), not against Flowbase",
              effort: "30 min",
            },
            {
              symptom: "Instead, Loopwork's assumed audience turns out to overlap Flowbase almost exactly",
              action: "Narrow the ICP further (by industry, by tooling maturity, or by team structure) until a real gap appears before spending another hour on positioning",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "four-levels-draft",
          concept: "Drafting and pressure-testing the four-level value proposition",
          lessonAnchor: "how-to-write-your-first-draft",
          theoryRecap:
            "A first draft only earns its place once it survives the 'so what' test three times: state the claim, ask 'so what' out loud, restate one level deeper, repeat until the answer is a reason a specific person would care, not a feature list.",
          question:
            "Can you state Loopwork's value in one sentence per level, functional, emotional, social, identity, without any sentence being a lightly reworded version of a competitor's tagline from step 1?",
          toolName: "Notion",
          where: "Same Notion page, new section \"Four-Level Value Prop\"",
          procedure: [
            "Draft one sentence at each of the 4 levels for Loopwork's 5-15 person distributed-team audience",
            "Run each sentence through the 'so what' test 3 times before accepting it",
            "Cross-check every sentence against step 1's competitor table, delete anything too close to an existing tagline",
          ],
          outputSample:
            "Level        Draft sentence\n" +
            "Functional   Organizes a 5-15 person team's work without the kanban depth or AI overhead you don't need yet\n" +
            "Emotional    Nobody on the team dreads the Monday status update\n" +
            "Social       The team that 'has its act together' compared to teams still living in spreadsheets or Slack threads\n" +
            "Identity     We're a real company now, not five people improvising",
          healthy:
            "Each level survives three rounds of 'so what' and lands somewhere none of the five step-1 competitors already claim.",
          unhealthy:
            "The functional line is a lightly reworded version of Flowbase's or Trellix Pro's own tagline from step 1.",
          interpret:
            "The functional and emotional lines pass, they're specific to the 5-15 person gap identified in step 1. The identity line is the weakest, 'we're a real company now' is closer to a feeling every SaaS tool claims to deliver than something Loopwork specifically earns, worth another draft pass before this ships anywhere public.",
          soWhat: [
            {
              symptom: "Identity-level sentence reads generic on the third 'so what' pass",
              action: "Rewrite it anchored to something only a 5-15 person team feels, not any SaaS buyer, then re-run the test",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "cac-from-funnel",
          concept: "Forecasting channel-level CAC from a real 30-day funnel export",
          lessonAnchor: "the-four-formulas",
          theoryRecap:
            "CAC is what you spend, divided by how many of those visitors actually become paying customers. It only means something at the channel level, a blended average hides which channel is actually working.",
          question:
            "Using the real 30-day funnel export, which channel converts a visitor into a purchaser most efficiently, and what does that imply about where Loopwork's first paid dollars should go, if any?",
          toolName: "Google Sheets",
          where: "public/project-data/funnel-data.csv, opened as a spreadsheet (30 days, 4 channels, 5-stage funnel per day)",
          procedure: [
            "Sum 'visit' stage visitors and 'purchase' stage conversions across all 30 days, grouped by source",
            "Compute visit-to-purchase conversion rate per channel",
            "Apply a stated $0.90 CPC assumption (this export has no cost column, so this is your own assumption, not data) to the two genuinely paid channels only",
            "Compute CAC = CPC / conversion rate for paid_search and paid_social",
          ],
          outputSample:
            "Channel        30-day visits  Actual purchases  Visit->purchase %   CAC @ $0.90 CPC\n" +
            "organic            22,119            255              1.153%       n/a (no ad cost)\n" +
            "paid_search        14,976            157              1.048%       $85.88\n" +
            "paid_social         6,849             92              1.343%       $67.00\n" +
            "email                7,482             80              1.069%       n/a (owned list)",
          healthy:
            "The best-converting paid channel's CAC stays well under a third of whatever price point Loopwork eventually confirms (a common early-stage rule of thumb).",
          unhealthy:
            "Both paid channels' CAC would take more than a year of subscription revenue to pay back at any plausible SaaS seat price.",
          interpret:
            "Paid_social actually converts visit-to-purchase better than paid_search in this export (1.343% vs 1.048%), which cuts its forecast CAC to $67 against paid_search's $85.88, the opposite of the common assumption that search intent always beats social. Organic's 1.153% conversion rate beats both paid channels outright, at zero marginal cost.",
          soWhat: [
            {
              symptom: "Organic converts better than either paid channel and costs nothing per click",
              action: "Treat the content/SEO plan (the next track milestone) as the priority before turning on any paid spend at all",
              effort: "5 min",
            },
            {
              symptom: "If paid spend does start, paid_social's forecast CAC beats paid_search's by ~22%",
              action: "If testing paid at all, put the first budget into paid_social, not the more conventional paid_search choice",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "ltv-payback",
          concept: "Estimating LTV and payback from a real cohort-retention curve",
          lessonAnchor: "how-the-four-metrics-work-together",
          theoryRecap:
            "LTV and payback only mean something together: LTV tells you what a customer is worth over their lifetime, payback tells you how long you wait to get your CAC back. A great LTV with a 24-month payback can still sink a bootstrapped founder.",
          question:
            "At an assumed $15/seat/month price and a 5-seat average team, what does the real cohort-retention export imply about how long a customer actually stays, and what payback period does that produce against step 3's CAC?",
          toolName: "Google Sheets",
          where: "public/project-data/cohort-retention.csv, opened as a spreadsheet (monthly cohorts, month_0 through month_5 retention %)",
          procedure: [
            "Read the 2025-12 and 2026-01 cohort rows (the two with a full 6-month history)",
            "Note where the curve stops dropping steeply and starts leveling off",
            "Use the leveled-off percentage as a rough 'sticky core' floor to estimate months of paying life",
            "Multiply assumed monthly revenue per team ($15 x 5 seats = $75) by the estimated months to get a rough LTV",
          ],
          outputSample:
            "Cohort     m0     m1     m2     m3     m4     m5\n" +
            "2025-12   100.0   50.0   40.9   34.0   28.2   24.9\n" +
            "2026-01   100.0   50.4   40.8   33.9   30.2   27.1",
          healthy:
            "Estimated LTV / step-3 CAC ratio clears roughly 3:1, and payback lands under 12 months, survivable for a bootstrapped two-person team.",
          unhealthy:
            "Payback exceeds 18-24 months at the CAC computed in step 3, unsustainable without outside funding.",
          interpret:
            "Both cohorts drop hard in month 1 (roughly -50 points) then decelerate sharply, by month 4-5 the drop is down to 3-4 points per month, not fully flat yet but clearly slowing. Treating month 5's ~25-27% as a rough floor implies an average paying life in the 5-6 month range at $75/team/month, a rough LTV near $400-450 per team, against a paid_social CAC of $67, that's roughly 6-7x, comfortably healthy if the deceleration holds past month 5.",
          soWhat: [
            {
              symptom: "Deceleration is real but not yet confirmed past month 5",
              action: "Note this LTV estimate as provisional in the brief, revisit once the 2026-01 cohort has 2 more months of data",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pmf-signal-retention",
          concept: "Reading whether the retention curve actually shows PMF Signal 2 (flattening)",
          lessonAnchor: "the-three-signals-of-pmf",
          theoryRecap:
            "Signal 2 isn't 'retention exists', it's the curve flattening into a horizontal line instead of curving toward zero. A curve that's merely decelerating is a promising trend, not yet a confirmed signal.",
          question:
            "Do the month-over-month deltas in the cohort export actually flatten, or is the curve still meaningfully dropping every month?",
          toolName: "Google Sheets",
          where: "Same cohort-retention.csv, computing month-over-month point deltas",
          procedure: [
            "Compute each month's point-drop from the prior month for both the Dec and Jan cohorts",
            "Compare the size of the month 4-to-5 delta against the month 0-to-1 delta",
            "Decide honestly: flattening, decelerating-but-not-flat, or still steep",
          ],
          outputSample:
            "Cohort     m0->m1   m1->m2   m2->m3   m3->m4   m4->m5\n" +
            "2025-12    -50.0     -9.1     -6.9     -5.8     -3.3\n" +
            "2026-01    -49.6     -9.6     -6.9     -3.7     -3.1",
          healthy:
            "Later-month deltas shrink into low single digits, close to a true flattening, this is a confirmed Signal 2.",
          unhealthy:
            "Deltas stay in the double digits all the way through month 5, the curve is still actively bleeding users, not flattening.",
          interpret:
            "Both cohorts land at a 3-3.3 point delta by month 4-5, down from a 50-point drop in month 1, a real, honest deceleration, but not yet a flat line. Calling this a confirmed Signal 2 would be premature; calling it 'promising, needs 2 more months to confirm' is the accurate read.",
          soWhat: [
            {
              symptom: "Curve decelerating but not fully flat",
              action: "Do not reallocate the full pre-seed budget to paid growth on the strength of retention alone yet",
              effort: "5 min",
            },
            {
              symptom: "If deltas were still double-digit at month 5 instead",
              action: "Stop and run 10 more customer conversations before spending anything further on acquisition",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pmf-signal-toolkit",
          concept: "Building the Sean Ellis PMF survey template for the next 40 signups",
          lessonAnchor: "how-to-measure-pmf-the-practical-toolkit",
          theoryRecap:
            "Signal 1 (the Sean Ellis test) asks one question, \"how would you feel if you could no longer use this product?\", and needs roughly 40 responses before the % who say 'very disappointed' means anything.",
          question:
            "Loopwork doesn't have 40 signups yet, so what's the exact template you'll run the moment it does, and how will you log it?",
          toolName: "Notion",
          where: "New Notion page, \"PMF Survey Template\" (this step produces a template to run later, not fabricated results now)",
          procedure: [
            "Draft the single Sean Ellis question exactly as the lesson specifies it",
            "Decide the send trigger (e.g., day 14 after signup) and the tool you'll use to send it",
            "Build an empty response-logging table with the 3 standard answer buckets",
            "Write the 40%-threshold decision rule directly into the template so there's no ambiguity later",
          ],
          outputSample:
            "Response bucket        Count   %\n" +
            "Very disappointed        —     —\n" +
            "Somewhat disappointed    —     —\n" +
            "Not disappointed         —     —\n" +
            "(Rule: >=40% 'very disappointed' among >=40 responses = Signal 1 confirmed)",
          healthy:
            "The template is fully built and the trigger/threshold decided now, so there's zero ambiguity or hindsight-bias risk when real responses start arriving.",
          unhealthy:
            "The plan is to 'figure out the threshold later once we see the numbers', which invites moving the goalposts to match whatever result comes in.",
          interpret:
            "Deciding the 40% threshold and the day-14 trigger before any real data exists is what makes this a genuine test instead of a post-hoc rationalization. This step is intentionally a template, not a result, don't backfill fake numbers into it.",
          soWhat: [
            {
              symptom: "Template built and threshold locked in advance",
              action: "Set a calendar reminder to run it the day signup #40 arrives, not before",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pmf-when-to-spend",
          concept: "Deciding what the $2,000 pre-seed budget actually funds next",
          lessonAnchor: "pmf-and-marketing-when-to-spend-what",
          theoryRecap:
            "Before PMF is confirmed, marketing spend belongs on cheap signal (surveys, retention tracking, organic content), not on scaling acquisition. Scaling paid spend before retention is proven is the single most common way early-stage budget gets wasted.",
          question:
            "Given a promising-but-unconfirmed PMF signal (steps 5-6) and a real per-channel CAC forecast (step 3), how should the remaining $2,000 pre-seed budget actually be allocated over the next 90 days?",
          toolName: "Notion",
          where: "Decision-log section of the same Notion brief",
          procedure: [
            "Summarize steps 3-6's findings in 3 sentences",
            "Write one explicit go/no-go decision for the $2,000",
            "Name the specific lesson guidance the decision follows",
          ],
          outputSample:
            "Decision log:\n" +
            "Retention is decelerating but not confirmed flat (step 5). Organic converts better than either paid channel at zero marginal cost (step 3).\n" +
            "Decision: hold $1,500 of the $2,000 for the content/SEO plan (organic, the proven-cheaper channel) and 40 Sean-Ellis responses; reserve $500 as a small paid_social test only once Signal 1 or a flatter month-6 retention curve confirms.",
          healthy:
            "Most of the budget goes toward generating more PMF signal (content, surveys) rather than scaling paid spend on an unconfirmed retention curve.",
          unhealthy:
            "The full $2,000 goes to paid acquisition despite steps 5-6 explicitly not confirming Signal 2 yet.",
          interpret:
            "This is the lesson's own guidance applied literally: spend on learning before PMF, spend on scaling after. Loopwork isn't there yet.",
          soWhat: [
            {
              symptom: "Decision correctly withholds most paid spend",
              action: "Carry the $1,500/$500 split forward as the actual budget line for the next track milestone (the content/SEO plan)",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "final-brief-assembly",
          concept: "Assembling the one-page brief and testing it on a cold reader",
          lessonAnchor: "why-it-matters",
          theoryRecap:
            "A value proposition that only the founder understands hasn't done its job yet, it has to survive being read cold by someone who wasn't in the room for any of the reasoning.",
          question:
            "Does the assembled one-pager let a stranger, a future co-founder, an investor, the first hire, restate Loopwork's position, economics, and PMF status in under 90 seconds?",
          toolName: "Notion",
          where: "Final merge into one Notion page, exported or printed",
          procedure: [
            "Combine steps 1-7's outputs into one page, cutting anything that doesn't survive a first read",
            "Hand it to someone outside the venture cold, no verbal explanation",
            "Time how long it takes them to correctly restate the positioning and the budget decision",
            "Cut anything they had to ask you to explain",
          ],
          outputSample:
            "Founder Positioning & Economics Brief — Loopwork\n" +
            "1. Positioning gap (vs. 5 named competitors)\n" +
            "2. Four-level value proposition\n" +
            "3. Channel CAC forecast (organic / paid_search / paid_social)\n" +
            "4. LTV & payback estimate\n" +
            "5. PMF signal read (retention curve + survey template)\n" +
            "6. Budget decision for the next 90 days",
          healthy:
            "A cold outside reader restates the gap, the budget call, and why, unprompted, in under 90 seconds.",
          unhealthy:
            "The reader needs the founder to explain any section out loud, or the document runs past one printable page.",
          interpret:
            "A one-pager that needs a live explainer isn't actually a positioning document yet, it's notes for one.",
          soWhat: [
            {
              symptom: "Reader passes the 90-second test cleanly",
              action: "This is the artifact that carries forward into every later milestone in the track, keep it updated as new signal arrives",
              effort: "5 min",
            },
            {
              symptom: "Reader stalls on the budget section specifically",
              action: "Rewrite the decision log in step 7 as a single declarative sentence before moving on",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where the positioning brief, competitor table, and decision log live",
            why: "Free tier covers a single evolving document with no page limit, exactly what this brief needs.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Where the funnel and cohort CSVs get opened, filtered, and aggregated by channel",
            why: "Free, opens CSV exports directly with no conversion step, and the SUMIF-style aggregation needed here is basic spreadsheet work.",
            required: true,
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Live competitor traffic and keyword-overlap data instead of the static positioning-comparison.json snapshot used here",
            why: "Useful once Loopwork is live and you want real-time competitor movement, not required to finish this sprint.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The entire sprint, competitor map, value prop, CAC forecast, LTV estimate, PMF signal read, is completable at zero spend with the two free tools above. Ahrefs only matters once there's a live site to track.",
      },
      datasetUrl: "/project-data/funnel-data.csv",
      deliverable:
        "A one-page Founder Positioning & Economics Brief for Loopwork: a four-level value proposition cleared of competitor overlap, computed CAC by channel from a real 30-day funnel export, a retention-implied LTV/payback estimate, a built (not-yet-run) PMF survey template, and an explicit go/no-go call on the remaining $2,000 pre-seed budget.",
      sampleOutput:
        "For contrast, here's the same exercise's shape applied to a real company's early days instead of Loopwork's, Mailchimp. Mailchimp never raised outside venture funding before its eventual $12B sale to Intuit in 2021, which only worked because founders Ben Chestnut and Dan Kurzius forecast unit economics conservatively from day one instead of chasing paid growth on hope. Their functional value prop (simple email marketing a small business could actually run itself) beat feature-heavy competitors on clarity, not feature count, their freemium onboarding kept CAC near zero for years, and they didn't scale spend until retention was unmistakably real, evidenced by reaching $800M revenue and 1,200+ employees in 2020 while still bootstrapped. The brief you just built for Loopwork asks the same three questions Mailchimp's founders were implicitly answering every quarter for a decade: what's the real gap, what does a customer actually cost and return, and has retention earned the right to spend more yet.",
      successCriteria: [
        "Positioning gap in step 1 is a real, nameable segment, not a restatement of an existing competitor's claim",
        "All 4 value-prop level sentences survive 3 rounds of the 'so what' test",
        "CAC and LTV figures in steps 3-4 are traceable to the actual funnel-data.csv and cohort-retention.csv aggregates, with any assumption (like the $0.90 CPC) explicitly labeled as an assumption, not data",
        "Step 5's PMF signal read is honest about 'decelerating, not yet flat' rather than rounding up to 'confirmed'",
        "Final budget decision in step 7 correctly prioritizes signal-generation over acquisition scaling given the unconfirmed PMF read",
      ],
      portfolioReady: true,
      stretch:
        "Once Loopwork (or your own real product) clears 40 real signups, run the Sean Ellis survey template built in step 6 for real, log the actual percentages, and revise the go/no-go decision in step 7 with real Signal 1 data instead of a template.",
    },

    // -----------------------------------------------------------------
    // Milestone 2 — after content-strategy (lesson index 10)
    // -----------------------------------------------------------------
    {
      id: "solo-founder-big-2-content-seo-plan",
      trackSlug: "solo-founder",
      afterLessonIndex: 10,
      synthesizes: [
        "first-principles-thinking",
        "writing-to-think",
        "keyword-research",
        "on-page-seo",
        "what-is-content-marketing",
        "content-strategy",
      ],
      tier: "big",
      archetype: "build-the-asset",
      title: "The First-Principles Content & SEO Plan",
      timeEstimate: "3.5 hours",
      timeMinutes: 210,
      objective:
        "Build a 90-day, 3-keyword content and SEO plan for Loopwork by first-principles-reasoning through a real 40-keyword competitive export instead of chasing the highest search volume, matching content to real search intent, applying the on-page signal stack to the flagship page, and writing an explicit list of what won't get published.",
      companyId: "freshworks",
      scenario:
        "Milestone 1 ended with a decision: put most of the $2,000 pre-seed budget behind organic content, because it converts better than either paid channel at zero marginal cost. Loopwork has 90 days and one person writing part-time. A real 40-keyword export for the 'project management software' market is on the table, and the naive move is to chase whichever keyword has the biggest search-volume number.",
      brief:
        "You'll first-principles your way through 40 real keywords instead of ranking them by raw volume, filter by intent and by Milestone 1's actual ICP (not just competitor overlap), pick the 3 that survive, build the on-page signal stack for the flagship page, and end with a publishing calendar plus an explicit list of what Loopwork will NOT write in the next 90 days.",
      mode: "build",
      conceptsCovered: [
        "first-principles deconstruction of 'what everyone does for SEO'",
        "borrowed vs. derived reasoning when a competitor's content strategy is tempting to copy",
        "the four-stage keyword research process",
        "filtering keywords by intent, not just search volume",
        "evaluating and prioritizing keyword opportunities under a real time budget",
        "matching page intent to what the searcher actually expects to see first",
        "the on-page SEO signal stack",
        "the prose test for writing that has to hold together as a real argument",
        "sequencing content into a publishing cadence one person can sustain",
        "writing an explicit 'will not publish' list",
      ],
      steps: [
        {
          stepId: "deconstruct-need",
          concept: "Deconstructing each keyword to the actual human need underneath it",
          lessonAnchor: "the-playbook-the-three-step-method",
          theoryRecap:
            "First-principles thinking means deconstructing a claim to what's actually true underneath it, questioning the assumption everyone repeats, then rebuilding from there, instead of copying what 'everyone does for SEO'.",
          question:
            "Strip away 'what a normal SEO plan would do' with this list, what is the actual, irreducible reason a person types each of these 40 queries?",
          toolName: "Google Sheets",
          where: "public/project-data/keyword-export.csv, opened as a spreadsheet (40 rows: keyword, volume, difficulty, cpc, intent, current_rank)",
          procedure: [
            "Open all 40 rows",
            "For each, write the underlying need in 6 words or fewer",
            "Flag any keyword whose need has nothing to do with content at all",
          ],
          outputSample:
            "Keyword                                          Need underneath it\n" +
            "\"project management software\"                    find a tool that organizes team work\n" +
            "\"project management software login\"              already a customer, wants the login page\n" +
            "\"how to manage a remote team\"                    wants a management skill, not necessarily software yet",
          healthy:
            "Clusters reveal 3-5 genuinely distinct underlying needs, and immediately exclude keywords whose need is navigational (already-a-customer) rather than content-addressable.",
          unhealthy:
            "Every keyword gets treated as 'write a blog post', including a navigational query like 'project management software login' (rank 3, volume 590) which is someone trying to log into a product they already use, not a content opportunity at all.",
          interpret:
            "The export mixes at least 4 distinct needs (evaluating a new tool, comparing tools, learning the discipline generally, and reaching an existing account) inside one flat keyword list. Treating them as one undifferentiated 'SEO opportunity' pile is exactly the borrowed-reasoning mistake step 2 is about to name directly.",
          soWhat: [
            {
              symptom: "Navigational and account-access queries mixed into the content list",
              action: "Drop 'project management software login' and any similar navigational query from consideration entirely",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "avoid-borrowed-strategy",
          concept: "Checking whether the emerging plan is derived reasoning or just copying a competitor",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The most common first-principles failure is borrowed reasoning dressed up as derived reasoning, copying what the market leader does and calling it a strategy, instead of re-deriving from your own actual constraints and audience.",
          question:
            "Which of the 5 competitors from Milestone 1's positioning map would you be most tempted to just copy the content strategy of, and why would that specifically be borrowed, not derived, reasoning for Loopwork?",
          toolName: "Notion",
          where: "positioning-comparison.json and keyword-export.csv opened side by side",
          procedure: [
            "List what Flowbase (Loopwork's closest positioned competitor from Milestone 1) most likely already ranks for, given its 10-50 person Series A/B audience",
            "Resist writing the same content Flowbase would write",
            "Re-derive from Milestone 1's actual gap: 5-15 person non-technical teams outgrowing Nudge",
          ],
          outputSample:
            "Temptation: copy Flowbase's likely angle (\"AI status summaries for distributed teams\")\n" +
            "Why it's borrowed, not derived: Flowbase's audience is 10-50 person, already-funded teams; Loopwork's actual gap (Milestone 1) is smaller, less technical teams who don't want AI-summary overhead at all",
          healthy:
            "The emerging plan diverges meaningfully from 'write what the market leader already ranks for'.",
          unhealthy:
            "The plan is functionally 'do what Flowbase does, one size smaller'.",
          interpret:
            "Copying Flowbase's content angle would mean writing for an audience Loopwork explicitly isn't targeting. The re-derived version has to start from the 5-15 person gap, not from what a bigger, better-funded competitor already publishes.",
          soWhat: [
            {
              symptom: "Plan re-derived from Loopwork's own gap instead of a competitor's angle",
              action: "Carry the 5-15 person, non-technical framing into every keyword decision in the next 3 steps",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "raw-opportunity-scan",
          concept: "Running the keyword-research process's expansion stage and surfacing the naive top picks",
          lessonAnchor: "the-keyword-research-process",
          theoryRecap:
            "The 4-stage process is: seed list, expand with a tool, filter by intent, evaluate and prioritize. This export is already the output of stage 2, expanded, so the real work starts at stage 3.",
          question:
            "If you ranked all 40 keywords by a naive volume-over-difficulty ratio with no other filter, what would the plan look like, and why is that plan still wrong for Loopwork?",
          toolName: "Google Sheets",
          where: "Same keyword-export.csv, adding a computed volume/difficulty column",
          procedure: [
            "Compute volume / difficulty for all 40 rows",
            "Sort descending",
            "Note the top 3 by this naive score alone",
          ],
          outputSample:
            "Keyword                                Volume   Difficulty   Ratio\n" +
            "\"project management templates\"          14,800       39       379.5\n" +
            "\"free project management tools\"          18,100       58       312.1\n" +
            "\"gantt chart software\"                    4,400       44       100.0",
          healthy:
            "The naive ranking is treated as a starting list to interrogate, not a final answer.",
          unhealthy:
            "The plan locks in on 'free project management tools' (highest true opportunity score) without checking who that searcher actually is.",
          interpret:
            "This ranking alone says nothing about whether the searcher is Loopwork's buyer. The next step, filtering by intent, is what turns this raw list into an actual plan.",
          soWhat: [
            {
              symptom: "Highest-ratio keyword is a template/informational query, not a buying query",
              action: "Hold all 3 top-ratio keywords for the intent filter in the next step before committing to any of them",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "filter-by-intent-and-icp",
          concept: "Filtering by intent and cross-checking against Loopwork's actual buyer",
          lessonAnchor: "stage-3-filter-by-intent",
          theoryRecap:
            "Volume and difficulty tell you how big and how contested a keyword is. Intent tells you what the searcher actually wants to do next, and that's what determines whether they can ever become a customer.",
          question:
            "Of the top-ratio keywords from step 3, which intent actually matches someone who could become a paying Loopwork customer, versus someone hunting for something Loopwork structurally can't (or shouldn't try to) serve?",
          toolName: "Google Sheets",
          where: "Same spreadsheet, filtering the intent column",
          procedure: [
            "Check the intent field for each top-ratio keyword",
            "Ask whether that intent-holder matches Milestone 1's ICP (5-15 person distributed team, willing to pay $15/seat)",
            "Specifically test 'free project management tools' (18,100 vol, commercial intent) against that ICP",
          ],
          outputSample:
            "\"free project management tools\": commercial intent, but a searcher hunting specifically for FREE tools rarely converts to a paid $15/seat product\n" +
            "\"project management software for remote teams\": commercial intent, 1,300 vol, difficulty 42, currently ranked #6 by some competitor, AND the only keyword in the entire export whose literal phrase matches Loopwork's stated ICP",
          healthy:
            "The chosen commercial keyword is small in volume but exactly matches the ICP, not just the biggest available number.",
          unhealthy:
            "The plan chases the highest-ratio commercial keyword regardless of whether that searcher's stated intent (free forever) matches the business model at all.",
          interpret:
            "\"Free project management tools\" fails the 'so what' test from Milestone 1's own value-prop step: a free-tool searcher will not convert to a $15/seat product. \"Project management software for remote teams\", despite 14x less volume, is the only real match to Loopwork's actual buyer.",
          soWhat: [
            {
              symptom: "High-ratio keyword rejected on intent grounds despite the bigger number",
              action: "Commit the flagship commercial slot to 'project management software for remote teams' instead",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "prioritize-final-three",
          concept: "Scoring the shortlist and committing to exactly 3 keywords for 90 days",
          lessonAnchor: "stage-4-evaluate-and-prioritize",
          theoryRecap:
            "Prioritization under a real constraint (one part-time writer, 90 days) means picking a small number of keywords that together cover the funnel, not a long list that guarantees none of them get finished.",
          question:
            "Given the flagship commercial keyword from step 4, which 2 informational keywords round out a top/middle/bottom-funnel set that a single part-time writer can actually finish in 90 days?",
          toolName: "Google Sheets",
          where: "Same spreadsheet, shortlisting from the informational-intent rows",
          procedure: [
            "Pull 'how to manage a remote team' (4,900 vol, difficulty 31, unranked, top-of-funnel, matches the ICP's actual problem, not just the software category)",
            "Pull 'project management templates' (14,800 vol, difficulty 39, someone else ranked weakly at 41, middle-of-funnel)",
            "Confirm the final 3 collectively span top, middle, and bottom funnel",
          ],
          outputSample:
            "Funnel stage   Keyword                                             Volume   Difficulty\n" +
            "Top             \"how to manage a remote team\"                        4,900       31\n" +
            "Middle          \"project management templates\"                     14,800       39\n" +
            "Bottom          \"project management software for remote teams\"      1,300       42",
          healthy:
            "The 3 chosen keywords collectively cover top, middle, and bottom funnel, and all trace back to the same 5-15 person distributed-team ICP.",
          unhealthy:
            "All 3 keywords cluster in the same funnel stage, or one of them doesn't actually match the ICP established in Milestone 1.",
          interpret:
            "Average difficulty across the 3 (31, 39, 42) stays low enough for a brand-new domain to have a real shot within 90 days, unlike the 78-difficulty head term 'project management software' which would take years for a new site.",
          soWhat: [
            {
              symptom: "3-keyword shortlist locked with balanced funnel coverage",
              action: "This shortlist is the plan, resist adding a 4th keyword mid-quarter even if a tempting one appears",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "match-search-intent",
          concept: "Writing the intent-match brief for the flagship page",
          lessonAnchor: "the-search-intent-layer",
          theoryRecap:
            "Ranking isn't the finish line, matching what the searcher expects to see in the first 5 seconds is. A page that ranks but doesn't match intent still loses the click or bounces immediately.",
          question:
            "For 'project management software for remote teams', what does that searcher expect to see first, and does Loopwork's planned page deliver it immediately?",
          toolName: "Notion",
          where: "New Notion section, \"Intent Brief: Flagship Page\"",
          procedure: [
            "Write what the searcher expects to see in the first 5 seconds (a direct comparison or fit-check, not a generic feature tour)",
            "Write what the page will actually lead with",
            "Confirm the two match",
          ],
          outputSample:
            "Searcher expects: quick confirmation this tool fits a small distributed team, not enterprise, not solo\n" +
            "Page leads with: \"Loopwork is built for teams of 5-15 people working across time zones, not 50-person orgs or solo freelancers\" + a 3-row comparison table (Nudge / Trellix Pro / Loopwork)",
          healthy:
            "The page's opening line answers the exact fit-question the keyword implies, within the first sentence.",
          unhealthy:
            "The page opens with a generic \"Loopwork is powerful project management software\" line that could apply to any of the 5 competitors.",
          interpret:
            "A page that opens by naming the exact team size and immediately contrasting against the two nearest competitors (Nudge, Trellix Pro) answers the implicit question in under 5 seconds; a generic feature-tour opening does not.",
          soWhat: [
            {
              symptom: "Opening line matches searcher intent precisely",
              action: "Use this exact opening line as the page's H1-adjacent lead paragraph in step 7",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "onpage-signal-stack",
          concept: "Applying the 8-part on-page signal stack to the flagship page",
          lessonAnchor: "how-on-page-seo-works-the-signal-stack",
          theoryRecap:
            "On-page SEO is 8 stacked signals working together: title tag, URL slug, H1, H2/H3 subheadings, body depth, image alt text, internal links, and meta description. Weak in any one weakens the whole stack.",
          question:
            "Draft all 8 signal-stack elements for the flagship 'project management software for remote teams' page.",
          toolName: "Notion",
          where: "New Notion section, \"On-Page Signal Stack: Flagship Page\"",
          procedure: [
            "Draft the title tag, URL slug, H1, and 2-3 H2 subheadings",
            "Note the body-depth target (informed by what already ranks at position 6)",
            "Draft alt text for the planned comparison-table image and 2 internal links (to the other 2 shortlisted pages)",
            "Draft the meta description",
          ],
          outputSample:
            "Title tag     Project Management Software for Remote Teams | Loopwork\n" +
            "URL slug      /project-management-software-for-remote-teams\n" +
            "H1            Project Management Software Built for Remote Teams of 5-15\n" +
            "H2s           \"How Loopwork compares to Nudge and Trellix Pro\", \"What a remote team actually needs\"\n" +
            "Alt text      \"Comparison table: Loopwork vs Nudge vs Trellix Pro for 5-15 person remote teams\"\n" +
            "Internal links -> \"how to manage a remote team\" post, -> templates post\n" +
            "Meta desc.    \"See why 5-15 person remote teams choose Loopwork over single-user or kanban-only tools.\"",
          healthy:
            "All 8 elements are filled in and consistent with each other (the title tag, H1, and meta description all reference the same specific audience).",
          unhealthy:
            "Elements contradict each other, e.g. a generic title tag paired with a highly specific H1, which confuses both search engines and readers.",
          interpret:
            "Consistency across all 8 signals, all pointing at '5-15 person remote teams', is what the lesson calls a signal stack: no single element does the work alone.",
          soWhat: [
            {
              symptom: "All 8 elements consistent and specific",
              action: "Use this as the template for the other 2 shortlisted pages before writing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "prose-test-draft",
          concept: "Running the prose test on the flagship page's opening paragraph",
          lessonAnchor: "the-playbook-the-prose-test",
          theoryRecap:
            "The prose test: write the argument as real sentences a reader could follow aloud, not a bullet list. If it doesn't hold together read aloud, the thinking underneath it isn't finished yet, no amount of formatting fixes that.",
          question:
            "Write the actual opening paragraph of the flagship page using step 6's intent match, does it hold together as an argument someone could follow if read aloud?",
          toolName: "Notion",
          where: "Draft directly under the signal-stack section",
          procedure: [
            "Write the opening paragraph as full sentences, no bullets",
            "Read it aloud",
            "Cut or rewrite anything that requires re-reading to follow",
          ],
          outputSample:
            "Draft: \"If your team is 5 to 15 people working across time zones, you've probably outgrown a single-user to-do app but you don't need enterprise software built for a 500-person IT department. Loopwork sits in between: real team collaboration, without the kanban depth or AI-summary overhead you don't need yet.\"",
          healthy:
            "The paragraph reads cleanly aloud in one pass, and a listener could restate the core claim without re-reading.",
          unhealthy:
            "The paragraph requires re-reading, or is really 3 disconnected claims stitched together with commas.",
          interpret:
            "This draft passes: it states the audience, the two things they've outgrown/don't need, and Loopwork's position between them, in one followable arc.",
          soWhat: [
            {
              symptom: "Paragraph passes the prose test on first read",
              action: "Lock this as the page's opening paragraph, don't over-edit it into bullets later",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "publishing-cadence",
          concept: "Sequencing the 3 pieces into a cadence one part-time writer can sustain",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "A content plan is only real once it's sequenced against actual available time. Three great keyword choices with no realistic calendar behind them is still just a wish list.",
          question:
            "In what order, and on what cadence, do the 3 shortlisted pieces actually get written and published across 90 days by one part-time writer?",
          toolName: "Notion",
          where: "New Notion section, \"90-Day Publishing Calendar\"",
          procedure: [
            "Sequence the 3 pieces (start with the flagship commercial page, since it's already fully drafted through step 8)",
            "Assign realistic week ranges given part-time writing capacity",
            "Note the internal-linking dependency: the top-of-funnel and middle-of-funnel pieces should publish before or alongside the flagship page's internal links go live",
          ],
          outputSample:
            "Week 1-3    Flagship page: \"project management software for remote teams\" (already drafted)\n" +
            "Week 4-7    \"how to manage a remote team\" (top-of-funnel)\n" +
            "Week 8-12   \"project management templates\" (middle-of-funnel), link back to flagship",
          healthy:
            "The calendar fits inside the 90-day/12-week window with buffer, and sequencing respects the internal-link dependency from step 7.",
          unhealthy:
            "The calendar assumes 3 pieces get written and published in the first 2 weeks with no buffer, unrealistic for one part-time writer.",
          interpret:
            "Leading with the already-drafted flagship page (steps 6-8) front-loads the highest-value, most ICP-specific piece while the writer is warmed up on the research.",
          soWhat: [
            {
              symptom: "Calendar has realistic pacing with buffer",
              action: "Publish week 1-3's flagship page first, then build the internal links into the later two pieces as they publish",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "will-not-publish-list",
          concept: "Writing the explicit 'will not publish' list",
          lessonAnchor: "step-6-write-the-will-not-publish-list",
          theoryRecap:
            "A content plan is defined as much by what it excludes as what it includes. Writing the exclusion list explicitly stops scope creep from quietly eating the 90 days one 'quick extra post' at a time.",
          question:
            "Given the ICP and the 90-day/one-writer constraint, what will Loopwork explicitly NOT write in the next quarter, even though it's tempting?",
          toolName: "Notion",
          where: "Final section of the plan",
          procedure: [
            "List 3-4 specific topics that are tempting but out of scope",
            "State the reason for each exclusion in one line",
          ],
          outputSample:
            "Will NOT publish this quarter:\n" +
            "- \"project management software\" (head term, difficulty 78, unwinnable for a new domain within a year)\n" +
            "- Any comparison post vs. Orbitwork (different ICP entirely, enterprise 500+, not Loopwork's buyer)\n" +
            "- \"free project management tools\" (wrong buyer intent, per step 4)\n" +
            "- A 4th keyword mid-quarter, however tempting, per step 5's decision to lock the shortlist",
          healthy:
            "The list names specific, tempting topics and the exact reason each is excluded, tied back to earlier steps' findings.",
          unhealthy:
            "The list is vague ('we won't write low-quality content') and doesn't actually prevent scope creep on a real topic.",
          interpret:
            "Naming the head term and the Orbitwork comparison explicitly (both genuinely tempting, both wrong for this ICP) is what makes this list functional rather than decorative.",
          soWhat: [
            {
              symptom: "Exclusion list complete and specific",
              action: "Pin this list at the top of the Notion plan so it's the first thing re-read before any new topic gets added mid-quarter",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Keyword Planner",
            role: "Verifying and refreshing volume/difficulty numbers beyond the static export used in this plan",
            why: "Free with a Google Ads account (no spend required to browse), the standard free source for real keyword data once Loopwork is live.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Tracking whether the 3 published pages actually get indexed and start earning impressions",
            why: "Free, and the only way to confirm the plan is working once pages are live, not just planned.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Notion",
            role: "Where the competitor map, keyword shortlist, signal-stack brief, calendar, and exclusion list all live as one plan",
            why: "Free tier handles a single evolving planning document with no page limit.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Filtering and scoring the 40-row keyword export",
            why: "Free, opens the CSV directly, sufficient for the ratio/filter/sort work in steps 3-5.",
            required: true,
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Deeper competitor content-gap analysis once Loopwork has real ranking data to compare against",
            why: "Optional upgrade for finding new keyword opportunities beyond this starter export, not required to execute this plan.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The full plan, competitor map, keyword shortlist, signal stack, calendar, exclusion list, is built entirely on the free tools above and the provided keyword export. Ahrefs only matters for finding the NEXT quarter's keywords once these 3 are live.",
      },
      datasetUrl: "/project-data/keyword-export.csv",
      deliverable:
        "A 90-day, 3-keyword content and SEO plan for Loopwork: a first-principles-derived keyword shortlist (not the highest-volume ones), an on-page signal-stack brief and prose-tested opening paragraph for the flagship page, a realistic publishing calendar for one part-time writer, and an explicit 'will not publish' list.",
      sampleOutput:
        "For contrast, here's the same reasoning applied to a real company, Zillow. Zillow's SEO strategy could have chased the highest-volume real estate term available ('homes for sale'), but its actual first-principles insight was different: build the Zestimate, a free, instantly useful tool that answered the specific irreducible question every visitor actually had ('what is my home worth right now') rather than a generic listings page competing with every other portal. That specificity, not volume-chasing, is what took Zillow from a $30.5M-revenue company in FY2010 to a ~$950M market cap at its 2011 IPO, built on organic, tool-driven search traffic rather than paid acquisition. The lesson for Loopwork's plan is the same one Zillow's founders applied: the highest-volume keyword and the right keyword are rarely the same keyword, and the gap between them is exactly what first-principles filtering is for.",
      successCriteria: [
        "Final 3-keyword shortlist excludes every keyword whose intent doesn't match the ICP, even when a rejected keyword had a higher volume/difficulty ratio",
        "Shortlist spans top, middle, and bottom funnel, not 3 keywords in the same stage",
        "On-page signal stack is internally consistent across all 8 elements for the flagship page",
        "Opening paragraph passes a genuine read-aloud prose test, not just a bullet list reformatted as sentences",
        "'Will not publish' list names specific, tempting real topics from the export, not vague generalities",
      ],
      portfolioReady: true,
      stretch:
        "Once the flagship page is live, pull a real Google Search Console indexing report and check it against a healthy baseline (most pages indexed, few blocked or duplicate) the same way a technical SEO audit would, before assuming the plan worked just because it published.",
    },

    // -----------------------------------------------------------------
    // Milestone 3 — after headlines (lesson index 14)
    // -----------------------------------------------------------------
    {
      id: "solo-founder-big-3-welcome-sequence-build",
      trackSlug: "solo-founder",
      afterLessonIndex: 14,
      synthesizes: ["email-marketing-101", "welcome-series", "copywriting-101", "headlines"],
      tier: "big",
      archetype: "build-the-asset",
      title: "The Welcome Sequence Build: Copy, Timing, and Real Benchmarks",
      timeEstimate: "3 hours",
      timeMinutes: 180,
      objective:
        "Build a complete 4-email welcome sequence for Loopwork, benchmarked against a real SaaS company's actual send data, with a behavioral conditional split, 3 tested subject line candidates, and full AIDA-structured body copy for email 1.",
      companyId: "freshworks",
      scenario:
        "Milestone 2's content plan is live and producing Loopwork's first real signups. A single generic 'welcome to Loopwork' email is currently the entire onboarding experience, and it's leaving activation to chance. Before hiring anyone, the founders need a real, benchmarked welcome sequence.",
      brief:
        "You'll benchmark against a real project-management SaaS company's actual 30-day send history, design a 4-email arc with one behavioral conditional split, write and pressure-test 3 subject line candidates, and draft full AIDA-structured body copy with a specific, low-friction call to action for email 1.",
      mode: "build",
      conceptsCovered: [
        "the 5 essential email types and the welcome email's specific job",
        "open rate, click rate, and unsubscribe rate as real benchmarks, not guesses",
        "why a multi-email series outperforms a single welcome email",
        "structuring a welcome series across the first 7 days",
        "conditional splits based on real user behavior",
        "subject line strategy specific to a welcome email",
        "the headline-writing workflow applied to a subject line",
        "psychological triggers appropriate (and inappropriate) for B2B SaaS email",
        "the AIDA copywriting structure",
        "writing a specific, low-friction call to action",
      ],
      steps: [
        {
          stepId: "benchmark-from-real-sends",
          concept: "Setting a real open/click benchmark from an actual SaaS send history",
          lessonAnchor: "key-metrics-to-track",
          theoryRecap:
            "Open rate, click rate, and unsubscribe rate only mean something against a real baseline. A 'good' number for a cold newsletter and a 'good' number for a welcome email someone is actively expecting are very different.",
          question:
            "What's a realistic open/click target for Loopwork's own welcome email 1, based on how a real project-management SaaS company's own welcome email actually performed against its own newsletter?",
          toolName: "Google Sheets",
          where: "public/project-data/email-campaign-export.csv, opened as a spreadsheet (10 real campaigns, May-June 2026)",
          procedure: [
            "Find the 'Welcome Series - Email 1' row and note its open/click/unsubscribe rates",
            "Compare it against the 'Weekly Product Digest' rows from the same export",
            "Set Loopwork's own email 1 target using the welcome-email row, not the digest rows",
          ],
          outputSample:
            "Campaign                          Sent    Open rate   Click rate   Unsubs\n" +
            "Welcome Series - Email 1          8,420      66.07%       25.68%        6\n" +
            "Weekly Product Digest - W18      24,150      33.29%        4.39%       24\n" +
            "Weekly Product Digest - W19      24,310      31.21%        7.49%       26",
          healthy:
            "Welcome email benchmark clears roughly double the steady-state newsletter open rate, and unsubscribes stay low relative to volume sent.",
          unhealthy:
            "Treating the newsletter's ~32% open rate as the welcome email target, badly under-forecasting what a welcome email should do.",
          interpret:
            "This export's real welcome email hit 66.07% open / 25.68% click, roughly double the newsletter's open rate and 3-6x its click rate, exactly matching the lesson's claim that welcome emails get outsized attention because they're timely and expected. Loopwork's email 1 target should be set against this row, not the digest rows.",
          soWhat: [
            {
              symptom: "Welcome email benchmark set at ~60%+ open / ~20%+ click",
              action: "Use this as the pass/fail bar once Loopwork's own email 1 goes live and real data starts arriving",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "define-email1-job",
          concept: "Defining the single job of email 1, not the whole series",
          lessonAnchor: "1-welcome-email",
          theoryRecap:
            "The welcome email's job is to confirm the signup was worth it, immediately, not to explain every feature at once.",
          question:
            "What is the ONE thing email 1 needs to accomplish, and what does it explicitly NOT try to do?",
          toolName: "Notion",
          where: "New Notion page, \"Welcome Sequence Build\"",
          procedure: [
            "Write a single-sentence goal for email 1",
            "List 2-3 things email 1 will explicitly defer to later emails in the sequence",
          ],
          outputSample:
            "Email 1's one job: get the new signup to create their first project inside Loopwork within 10 minutes\n" +
            "Explicitly deferred: full feature tour (email 2), team-invite prompt (email 3), upgrade pitch (not in this sequence at all)",
          healthy:
            "The single-sentence goal is a specific, trackable action, not a vague 'introduce the product'.",
          unhealthy:
            "Email 1 tries to do everything (feature tour + team invite + upgrade pitch) in one send.",
          interpret:
            "A single, specific action goal (create first project) gives email 1 a clear success metric and keeps it short enough to actually get read, consistent with the one-email-one-goal principle.",
          soWhat: [
            {
              symptom: "Single clear goal defined",
              action: "Every later step (copy, CTA, subject line) gets checked against this one goal before it's finalized",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "why-series-not-single",
          concept: "Confirming a series beats a single email using real focused-vs-generic send data",
          lessonAnchor: "why-a-series-beats-a-single-email",
          theoryRecap:
            "A single info-dump welcome email underperforms a short series of focused, single-topic emails, each one easier to act on than a wall of everything at once.",
          question:
            "Does the real send data support splitting the welcome content into a focused series instead of one long email?",
          toolName: "Google Sheets",
          where: "Same email-campaign-export.csv, comparing the feature-launch row against the digest rows",
          procedure: [
            "Find the 'Feature Launch - Kanban Boards' row (a focused, single-topic send)",
            "Compare its click rate against the general digest rows",
          ],
          outputSample:
            "Campaign                           Open rate   Click rate   Revenue\n" +
            "Feature Launch - Kanban Boards        34.02%       10.51%    $9,440.13\n" +
            "Weekly Product Digest - W20            32.32%        7.09%    $2,702.19\n" +
            "Weekly Product Digest - W21            34.51%        7.22%    $2,879.96",
          healthy:
            "A focused, single-topic send clearly outperforms a general multi-topic send on click rate and revenue in the real data.",
          unhealthy:
            "No meaningful difference between focused and general sends, undermining the case for a series over a single email.",
          interpret:
            "The single-topic feature launch email more than doubled the digest's click rate (10.51% vs ~7%) and produced over 3x the revenue of either digest, real evidence for splitting the welcome content into focused, single-topic emails rather than one dense email.",
          soWhat: [
            {
              symptom: "Focused sends clearly outperform general ones in real data",
              action: "Commit to a 4-email focused series design in the next step instead of a single welcome email",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "map-series-structure",
          concept: "Mapping the 4-email arc across the first 7 days",
          lessonAnchor: "how-the-series-works",
          theoryRecap:
            "A welcome series typically runs across the first week, each email spaced to match when the new user is likely to need that next piece of information, not on an arbitrary daily cadence.",
          question:
            "What does Loopwork's specific day 0/2/4/7 send schedule look like, and what's the single focused topic of each email?",
          toolName: "Notion",
          where: "Same Notion page, \"Series Schedule\" section",
          procedure: [
            "Assign a day and a single topic to each of 4 emails",
            "Confirm each email's topic maps to step 2's activation goal (create first project) or a natural next step after it",
          ],
          outputSample:
            "Day    Email                          Topic\n" +
            "0      Email 1                        Create your first project (10-min goal)\n" +
            "2      Email 2                        The one Loopwork feature that saves the most time\n" +
            "4      Email 3                        Invite your team (unlocks the real value)\n" +
            "7      Email 4                        Check-in + a case example from a similar-sized team",
          healthy:
            "Each email has one clear topic, and the sequence logically escalates from individual setup to team value.",
          unhealthy:
            "All 4 emails cover overlapping ground, or the schedule crams everything into the first 48 hours.",
          interpret:
            "The day 0->2->4->7 spacing gives each action (create a project, learn a feature, invite the team, see it working) room to actually happen before the next email arrives.",
          soWhat: [
            {
              symptom: "4-email schedule with distinct topics locked",
              action: "Carry this schedule into the conditional-split design in the next step",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "design-conditional-split",
          concept: "Designing the one behavioral conditional split the series actually needs",
          lessonAnchor: "conditional-splits-the-feature-most-brands-ignore",
          theoryRecap:
            "Most brands send the same welcome series to everyone regardless of what they've actually done. A single well-chosen conditional split (did they take the key action, yes/no) meaningfully improves relevance for almost no added complexity.",
          question:
            "What's the one branch condition Loopwork's series should split on, and what does each branch send differently?",
          toolName: "Notion",
          where: "Same Notion page, \"Conditional Split\" section",
          procedure: [
            "Choose the branch condition (has the user created a first project by day 2, yes/no)",
            "Write what the 'yes' branch's email 2 says differently from the 'no' branch's email 2",
          ],
          outputSample:
            "Branch condition (checked day 2): created a first project?\n" +
            "YES branch email 2: \"Here's a shortcut you probably haven't found yet\" (deepen usage)\n" +
            "NO branch email 2: \"Still haven't started? Here's the fastest way to create your first project\" (remove friction)",
          healthy:
            "The split is based on an actual trackable action from step 2's goal, and each branch's copy is meaningfully different, not just a re-titled version of the same email.",
          unhealthy:
            "The split exists on paper but both branches send functionally the same content.",
          interpret:
            "Splitting on the exact activation action from step 2 means the series can re-engage stalled users specifically, instead of sending everyone the same generic nudge regardless of where they actually are.",
          soWhat: [
            {
              symptom: "Split branches genuinely differ in content and intent",
              action: "Build this split first if using a free ESP with limited automation complexity, it's the single highest-leverage addition to the series",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "draft-subject-lines",
          concept: "Drafting and predicting 3 subject line variants for email 1",
          lessonAnchor: "subject-line-strategy",
          theoryRecap:
            "A welcome email's subject line has an advantage over cold sends, it's expected, so it can be direct rather than needing a curiosity hook to earn the open.",
          question:
            "What 3 subject line variants would you test for email 1, and which one would you predict wins based on the welcome-email-specific guidance?",
          toolName: "Notion",
          where: "Same Notion page, \"Subject Lines\" section",
          procedure: [
            "Draft 3 subject line variants",
            "Predict a winner and state the reasoning before any real send data exists",
          ],
          outputSample:
            "A. \"Welcome to Loopwork\" (generic)\n" +
            "B. \"Let's get your first project set up\" (direct, action-oriented)\n" +
            "C. \"You're in! Here's the fastest way to start\" (confirmation + direct)\n" +
            "Predicted winner: C, confirms the signup worked (expected, not a curiosity hook) and states the action directly",
          healthy:
            "The predicted winner is justified by the welcome-email-specific reasoning (direct beats curiosity here), not just a guess.",
          unhealthy:
            "All 3 variants are close variations of the same generic phrase with no real distinction to test.",
          interpret:
            "Variant A is closest to what a generic newsletter subject line would look like; B and C are both more direct and expectation-confirming, matching what welcome emails specifically benefit from.",
          soWhat: [
            {
              symptom: "Variant C selected as predicted winner",
              action: "Run this through the full headline workflow in the next step before finalizing",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "run-headline-workflow",
          concept: "Running the winning subject line candidate through the headline-writing workflow",
          lessonAnchor: "the-headline-writing-workflow",
          theoryRecap:
            "The headline workflow checks a candidate for specificity, a clear benefit, and whether it survives being read in isolation, out of context, the way an inbox actually presents it.",
          question:
            "Does step 6's predicted winner (\"You're in! Here's the fastest way to start\") survive the full headline workflow, or does it need another pass?",
          toolName: "Notion",
          where: "Same section, applying the workflow checklist",
          procedure: [
            "Check the candidate for specificity (does it name a concrete next step, not just 'get started')",
            "Check for a clear, stated benefit",
            "Read it in isolation, as it would appear alone in an inbox list",
          ],
          outputSample:
            "Candidate: \"You're in! Here's the fastest way to start\"\n" +
            "Specificity check: partial, \"fastest way to start\" is vague about what \"start\" means\n" +
            "Revised: \"You're in! Create your first project in under 2 minutes\"",
          healthy:
            "The revised version names the specific action (create your first project) and a concrete time claim, both checkable and honest.",
          unhealthy:
            "The subject line stays vague after the workflow (\"here's how to get started\") with no concrete action or benefit named.",
          interpret:
            "Naming the specific action (\"create your first project\") and a real, honest time estimate (\"under 2 minutes\", matching step 2's 10-minute goal loosely, adjust if inaccurate) makes the subject line testable against real behavior later, not just a vibe.",
          soWhat: [
            {
              symptom: "Revised subject line passes specificity and benefit checks",
              action: "Lock this as the email 1 subject line to test against variants A and B once real sends begin",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "check-psychological-triggers",
          concept: "Choosing honest triggers and rejecting manipulative ones for B2B SaaS",
          lessonAnchor: "psychological-triggers-that-work",
          theoryRecap:
            "Psychological triggers work, but not every trigger fits every context. Fake urgency or artificial scarcity on a $15/mo B2B tool reads as manipulative and damages trust with exactly the buyer Loopwork needs to keep.",
          question:
            "Which trigger genuinely fits a B2B SaaS welcome email, and which common trigger would actively hurt trust here?",
          toolName: "Notion",
          where: "Same Notion page, \"Trigger Check\" section",
          procedure: [
            "Name one trigger that fits honestly (e.g., completion/momentum, confirming the signup was a good decision)",
            "Name one trigger to explicitly avoid (e.g., fake countdown urgency, \"only 3 spots left\")",
            "State why the avoided trigger would specifically backfire here",
          ],
          outputSample:
            "Use: confirmation/momentum (\"You're in, let's keep the momentum going\") — honest, matches a real just-completed signup\n" +
            "Avoid: fake urgency (\"Offer expires in 1 hour\") — Loopwork has no real offer expiring, and B2B buyers evaluating a $15/seat tool for their team will notice and distrust it",
          healthy:
            "The chosen trigger is honestly true of the moment (the signup did just happen), no fabricated scarcity or urgency.",
          unhealthy:
            "The email uses a countdown timer or \"limited spots\" framing with nothing real backing it.",
          interpret:
            "A B2B buyer evaluating a tool for their whole team is more skeptical of manufactured urgency than a consumer impulse buyer would be, using it risks the exact trust Milestone 1's value proposition worked to build.",
          soWhat: [
            {
              symptom: "Momentum/confirmation trigger selected, fake urgency explicitly rejected",
              action: "Flag this decision in the copy brief so it survives even if a later teammate suggests adding urgency for 'conversion'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "draft-aida-body",
          concept: "Drafting the full email 1 body using the AIDA structure",
          lessonAnchor: "how-it-works-the-aida-playbook",
          theoryRecap:
            "AIDA, Attention, Interest, Desire, Action, structures copy so each sentence earns the reader's attention for the next one, rather than front-loading everything at once.",
          question:
            "Draft the full body of email 1 using the AIDA structure, tied to step 2's single goal (create a first project).",
          toolName: "Notion",
          where: "Same Notion page, \"Email 1 Full Draft\" section",
          procedure: [
            "Write the Attention line (confirms the signup, echoes the locked subject line)",
            "Write the Interest line (the one thing that makes Loopwork worth the next 2 minutes)",
            "Write the Desire line (what it feels like once the first project exists)",
            "Write the Action line (the single CTA)",
          ],
          outputSample:
            "Attention: \"You're in. Welcome to Loopwork.\"\n" +
            "Interest: \"Most teams like yours get their first project set up in under 2 minutes, no onboarding call required.\"\n" +
            "Desire: \"Once it's up, everyone on the team sees exactly what's happening, no more Monday status-update scramble.\"\n" +
            "Action: [Create your first project] (single button, one destination)",
          healthy:
            "Each AIDA line does exactly one job, and the copy stays short enough to be read in the time it took to draft it, no padding.",
          unhealthy:
            "The Interest and Desire sections blur into a generic feature list instead of one clear thread building toward the Action.",
          interpret:
            "This draft keeps a single thread, confirm, hook, feel, act, without introducing team invites or feature tours that step 2 already deferred to later emails.",
          soWhat: [
            {
              symptom: "Draft holds a single AIDA thread with no scope creep",
              action: "Finalize the CTA button copy in the next step before this is done",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "finalize-specific-cta",
          concept: "Confirming the CTA is specific and low-friction enough for a brand-new user",
          lessonAnchor: "step-4-action",
          theoryRecap:
            "A CTA has to be specific enough that the reader knows exactly what happens next, and low-friction enough that a person 10 minutes into a free trial will actually click it.",
          question:
            "Is \"Create your first project\" the right CTA, or would a vaguer, lower-commitment option actually convert better this early in the relationship?",
          toolName: "Notion",
          where: "Same section, CTA comparison",
          procedure: [
            "List 2-3 CTA options at different commitment levels",
            "Pick the one that matches step 2's goal without overcommitting a brand-new user",
          ],
          outputSample:
            "Option A: \"Create your first project\" (specific, matches the day-0 goal)\n" +
            "Option B: \"Explore Loopwork\" (vague, low-friction but doesn't drive the actual activation action)\n" +
            "Option C: \"Invite your team now\" (specific but too high-commitment for someone 10 minutes into signup)\n" +
            "Chosen: Option A",
          healthy:
            "The chosen CTA is specific about the next action and matched to what a brand-new user is realistically ready to do.",
          unhealthy:
            "The CTA asks for a high-commitment action (invite the whole team) before the user has experienced any value themselves.",
          interpret:
            "Option A is specific enough to be clear and matched to step 2's own activation goal, unlike Option B (too vague to drive the metric that matters) or Option C (asks for team commitment before individual value is proven).",
          soWhat: [
            {
              symptom: "CTA finalized as specific and appropriately low-commitment",
              action: "The full 4-email sequence, subject line, and CTA are now ready to load into the chosen ESP for real sending",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Mailchimp",
            role: "Building and sending the actual 4-email welcome sequence with the conditional split",
            why: "Free tier supports basic automation and audience tagging sufficient for a single conditional split at Loopwork's early signup volume.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Notion",
            role: "Where every draft, subject line test, and the AIDA copy get written and iterated before loading into the ESP",
            why: "Free tier, keeps drafts and decisions in one place separate from the sending tool.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Opening and benchmarking against the real email-campaign-export.csv send history",
            why: "Free, opens the CSV directly for the comparisons in steps 1 and 3.",
            required: true,
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "More advanced multi-condition branching once Loopwork's signup volume and behavioral data justify it",
            why: "Optional upgrade once a single yes/no split isn't enough, not required to build or run this sequence.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The complete 4-email sequence, including the one conditional split, is buildable and sendable on Mailchimp's free tier. Klaviyo only matters once Loopwork needs more than one behavioral branch.",
      },
      datasetUrl: "/project-data/email-campaign-export.csv",
      deliverable:
        "A complete 4-email welcome sequence for Loopwork: a day 0/2/4/7 send schedule, one behavioral conditional split (created-first-project yes/no), a benchmarked and workflow-tested subject line for email 1, and full AIDA-structured body copy with a specific, appropriately low-commitment CTA.",
      sampleOutput:
        "For contrast, here's the same reasoning applied to a real company's own launch copy, Dollar Shave Club. Their famous 2012 founder-led launch video didn't open with a feature tour, it opened with a direct, confirmation-style hook (\"our blades are f***ing great\") and moved straight to one specific action (subscribe for $1/month), the same Attention-to-Action discipline this sequence applies to Loopwork's email 1. That single video, built on a shoestring budget with zero paid media behind it initially, became the case study for scrappy DTC copy precisely because every line earned the next one, with no wasted setup, the same standard the AIDA draft above and the CTA check were built to pass. DSC went on to a $1B Unilever acquisition in 2016 on the strength of that same disciplined, single-thread copy approach carried through its entire growth. The welcome sequence you just built for Loopwork is a smaller-scale version of exactly that discipline: one goal per email, one honest trigger, one specific action.",
      successCriteria: [
        "Email 1's open/click benchmark is set from the real Welcome-Series-Email-1 row, not the newsletter/digest rows",
        "The conditional split's two branches send meaningfully different copy, not the same content with a different subject line",
        "Winning subject line candidate passes the specificity and benefit checks in the headline workflow, not just the initial prediction",
        "Chosen psychological trigger is honestly true of the moment; a tempting but dishonest trigger (fake urgency) is explicitly named and rejected",
        "Email 1's CTA matches the single activation goal from step 2, and isn't over-committing a brand-new user",
      ],
      portfolioReady: true,
      stretch:
        "Load the finished sequence into Mailchimp's free tier for real, send it to an actual beta signup list, and compare the real open/click numbers after 2 weeks against the benchmark set in step 1.",
    },

    // -----------------------------------------------------------------
    // Milestone 4 — after analytics-101 (lesson index 17, track capstone)
    // -----------------------------------------------------------------
    {
      id: "solo-founder-big-4-north-star-metric-audit",
      trackSlug: "solo-founder",
      afterLessonIndex: 17,
      synthesizes: ["what-is-growth", "north-star-metric", "analytics-101"],
      tier: "big",
      archetype: "audit",
      title: "The North Star Metric Audit",
      timeEstimate: "2.5 hours",
      timeMinutes: 150,
      objective:
        "Choose and pressure-test a North Star Metric for Loopwork, then audit a real multi-channel UTM export to fix a genuine tracking bug, separate actionable signal from vanity numbers, and assign the right KPI to each live acquisition channel before deciding whether Loopwork's early growth is real.",
      companyId: "freshworks",
      scenario:
        "Content (Milestone 2) is publishing, the welcome sequence (Milestone 3) is live, and Loopwork has its first real weeks of multi-channel traffic. Before hiring anyone or raising a cent, the founders need exactly one metric that isn't vanity, the analytics set up to track it honestly, and an accurate read of what's actually working.",
      brief:
        "You'll derive a North Star Metric from Loopwork's own value statement, test it against the lesson's own three criteria, then audit a real UTM export, catching a genuine data-hygiene bug along the way, to separate which channels are actually driving value from which just look busy.",
      mode: "diagnostic",
      conceptsCovered: [
        "choosing a North Star Metric from your value statement's verb",
        "growth loops vs. linear funnels",
        "the four-step playbook to find a North Star Metric",
        "testing a candidate NSM against three criteria",
        "North Star Metric patterns by business model",
        "the five core analytics terms (event, session, engaged session, user, key event)",
        "actionable vs. vanity metrics",
        "assigning the right KPI to each acquisition channel",
      ],
      steps: [
        {
          stepId: "candidate-nsm-from-value",
          concept: "Turning the value statement's verb into a candidate metric",
          lessonAnchor: "step-1-choose-your-north-star-metric",
          theoryRecap:
            "A North Star Metric starts from the verb inside your own value statement, the specific action a customer takes that means they're actually getting the value you promised, not a generic business KPI.",
          question:
            "Going back to Milestone 1's functional value prop, what's the verb, and what candidate metric does it suggest?",
          toolName: "Notion",
          where: "Reopen Milestone 1's positioning brief alongside a new Notion page, \"North Star Metric\"",
          procedure: [
            "Reread Milestone 1's functional value-prop line",
            "Identify the core verb (organizes a team's work)",
            "Turn it into 2-3 candidate metrics",
          ],
          outputSample:
            "Value statement verb: \"organizes\"\n" +
            "Candidates: (a) teams that create a project, (b) teams that complete a task within 7 days of signup, (c) teams with 3+ active members",
          healthy:
            "Candidates are specific, countable actions traceable directly back to the value statement's own verb.",
          unhealthy:
            "Candidates are generic business metrics (signups, revenue) disconnected from what the product's verb actually promises.",
          interpret:
            "Candidate (b), teams that complete a task within 7 days, most directly reflects \"organizes work\" actually happening, not just an account existing.",
          soWhat: [
            {
              symptom: "3 candidates identified, one clearly closer to the value verb",
              action: "Carry candidate (b) into the 4-step playbook in the next step",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "run-four-step-playbook",
          concept: "Running the candidate through the four-step NSM playbook",
          lessonAnchor: "the-four-step-playbook-to-find-your-nsm",
          theoryRecap:
            "The four-step playbook, write the value statement, turn the verb into a metric, test against three criteria, decompose into input metrics, turns a plausible-sounding candidate into a metric you can actually manage day to day.",
          question:
            "Apply all four steps of the playbook to candidate (b), \"teams that complete a task within 7 days of signup\".",
          toolName: "Notion",
          where: "Same page, working through each of the 4 steps explicitly",
          procedure: [
            "Step 1 (done above): value statement",
            "Step 2 (done above): verb -> metric",
            "Preview step 3's three-criteria test (next step) and step 4's decomposition (later step)",
            "Confirm the candidate is specific and measurable with data Loopwork already has (welcome-series activation event from Milestone 3)",
          ],
          outputSample:
            "NSM candidate: \"Weekly count of teams completing >=1 task within 7 days of signup\"\n" +
            "Already trackable via: the welcome-series conditional split's activation event (Milestone 3)",
          healthy:
            "The candidate is measurable today with events Loopwork already has instrumented, not a metric requiring new tracking to be built from scratch.",
          unhealthy:
            "The candidate requires data Loopwork has no way to capture yet, making it aspirational rather than usable.",
          interpret:
            "Milestone 3's conditional split already checks exactly this action (created a first project) at day 2, meaning the NSM candidate reuses existing instrumentation instead of needing new tracking built.",
          soWhat: [
            {
              symptom: "Candidate is already trackable via existing instrumentation",
              action: "Proceed to the three-criteria test in the next step with this exact framing",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "test-three-criteria",
          concept: "Testing the candidate NSM against the three criteria",
          lessonAnchor: "step-3-test-against-three-criteria",
          theoryRecap:
            "A real NSM has to be a leading indicator of value (not a lagging one like revenue), something the team can actually influence, and simple enough to explain to anyone on the team in one sentence.",
          question:
            "Does \"weekly teams completing >=1 task within 7 days\" pass all three criteria?",
          toolName: "Notion",
          where: "Same page, explicit criteria checklist",
          procedure: [
            "Check: is it a leading indicator, does it predict retention/revenue before those numbers arrive?",
            "Check: is it actionable, can the team directly influence it (e.g., via onboarding changes)?",
            "Check: is it simply explainable in one sentence to a non-marketer?",
          ],
          outputSample:
            "Leading indicator?  Yes, task completion within 7 days plausibly predicts later retention (echoes Milestone 1's cohort-curve reasoning)\n" +
            "Actionable?         Yes, the welcome sequence (Milestone 3) directly targets this exact action\n" +
            "Simple to explain?  Yes, \"teams that actually use Loopwork in their first week\"",
          healthy:
            "The candidate clears all three criteria without a forced or hand-wavy justification on any of them.",
          unhealthy:
            "The candidate fails the actionability check, e.g. a metric the team has no real lever to move.",
          interpret:
            "All three checks pass cleanly, largely because Milestone 1 and Milestone 3's work already built the exact mechanisms (retention-curve reasoning, the activation-focused welcome sequence) this metric depends on.",
          soWhat: [
            {
              symptom: "All three criteria pass",
              action: "Confirm this as Loopwork's NSM and move to the business-model pattern check",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "check-business-model-pattern",
          concept: "Checking the NSM against known patterns for this business model",
          lessonAnchor: "nsm-patterns-by-business-model",
          theoryRecap:
            "Different business models tend toward different NSM shapes, a seat-based B2B collaboration tool's NSM usually centers on active usage by a team, not individual logins or raw signups.",
          question:
            "Does Loopwork's confirmed NSM fit the expected pattern for a seat-based B2B collaboration SaaS, or does it drift toward a pattern that fits a different kind of business?",
          toolName: "Notion",
          where: "Same page, pattern comparison",
          procedure: [
            "Identify which documented NSM pattern a seat-based B2B collaboration tool typically follows",
            "Confirm Loopwork's chosen NSM (team-level task completion) matches that pattern rather than an individual-usage or pure-signup pattern",
          ],
          outputSample:
            "Expected pattern for seat-based B2B collaboration SaaS: team-level active-usage metric, not individual logins, not raw signup count\n" +
            "Loopwork's NSM: \"teams completing >=1 task within 7 days\" — matches the team-level pattern, not an individual or vanity-signup pattern",
          healthy:
            "The chosen NSM matches the expected pattern for this specific business model.",
          unhealthy:
            "The chosen NSM is actually an individual-usage or raw-signup metric dressed up as team-level, a mismatch with a seat-based collaboration business.",
          interpret:
            "Because the metric counts teams, not individual users, completing a real collaborative action, it correctly reflects that Loopwork's value only exists when a team, not one person, uses it together.",
          soWhat: [
            {
              symptom: "Pattern match confirmed",
              action: "Lock \"weekly teams completing >=1 task within 7 days of signup\" as Loopwork's official NSM",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "loop-vs-funnel-check",
          concept: "Checking whether current acquisition is a loop or still a linear funnel",
          lessonAnchor: "growth-loops-vs-linear-funnels",
          theoryRecap:
            "A linear funnel spends to acquire, once. A growth loop reinvests each new user's output (content, invites, referrals) back into acquiring the next one, compounding rather than resetting to zero every cycle.",
          question:
            "Is Loopwork's current acquisition (Milestone 2's content, Milestone 3's welcome series) a loop or a linear funnel right now, and what specifically would turn it into a loop?",
          toolName: "Notion",
          where: "Same page, funnel/loop diagram",
          procedure: [
            "Map the current path: content -> signup -> welcome series -> (end)",
            "Identify the missing reinvestment step that would make it loop (e.g., activated teams inviting teammates, who then also see Loopwork's content)",
          ],
          outputSample:
            "Current: content -> signup -> welcome series -> STOPS (linear funnel)\n" +
            "Missing loop step: activated team invites teammates (email 3 in Milestone 3's sequence already nudges this, but nothing yet turns an invited teammate into new top-of-funnel content exposure)",
          healthy:
            "The audit correctly identifies the current state as still linear, and names one concrete, specific step that would close the loop.",
          unhealthy:
            "The audit claims a loop already exists without a real reinvestment mechanism connecting output back to input.",
          interpret:
            "Milestone 3's team-invite email is a first step toward a loop, but it doesn't yet feed back into new acquisition (e.g., invited teammates don't currently discover Loopwork's content the way the original signup did). This is a real gap, not yet a functioning loop.",
          soWhat: [
            {
              symptom: "Current state is honestly linear, not a loop",
              action: "Flag 'team-invite acceptance driving new content exposure' as a concrete post-track improvement, not something to claim as already working",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "audit-utm-hygiene",
          concept: "Auditing the real UTM export for a genuine tracking bug before trusting any channel numbers",
          lessonAnchor: "the-5-terms-you-must-know",
          theoryRecap:
            "Before any channel comparison means anything, confirm what's actually being measured. A 'session' with inconsistent source/medium tagging silently fragments one channel into several, undercounting it in every downstream report.",
          question:
            "Using the real UTM export, is there a data-hygiene problem hiding in how sessions are tagged, and does it change which channel actually looks biggest?",
          toolName: "Google Sheets",
          where: "public/project-data/utm-traffic-export.csv, opened as a spreadsheet (30 rows, 20 days, mixed-case source/medium values)",
          procedure: [
            "Group sessions by the raw, exact-case utm_source/utm_medium values",
            "Separately, group the same data after lowercasing both fields",
            "Compare the two groupings",
          ],
          outputSample:
            "RAW (case-sensitive) grouping:\n" +
            "google/cpc      2,143 sessions\n" +
            "Google/cpc      1,273 sessions   <- silently split from the row above\n" +
            "google/organic  1,567 sessions\n" +
            "\n" +
            "CORRECTED (lowercased) grouping:\n" +
            "google/cpc      3,416 sessions   <- actually the largest channel\n" +
            "google/organic  1,567 sessions",
          healthy:
            "The audit catches the case-sensitivity split and corrects the channel ranking before drawing any conclusions from it.",
          unhealthy:
            "The audit trusts the raw, uncorrected grouping, in which google/cpc (2,143) looks smaller than it really is, and google/organic (1,567) looks closer to it than it actually is.",
          interpret:
            "Merging \"Google/cpc\" into \"google/cpc\" reveals paid search is actually Loopwork's largest channel by session volume (3,416, not 2,143), a genuinely different picture than the raw export shows. This is exactly the kind of hygiene bug that quietly corrupts every report built on top of it.",
          soWhat: [
            {
              symptom: "Case-sensitivity bug found and corrected before any further analysis",
              action: "Fix the UTM tagging convention going forward (lowercase only) so this doesn't recur in future exports",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "actionable-vs-vanity",
          concept: "Separating actionable channel signal from vanity session counts",
          lessonAnchor: "actionable-vs-vanity-metrics",
          theoryRecap:
            "A channel with a big session count and a terrible conversion rate is a vanity number if you judge it on volume alone. The actionable read is conversion rate and revenue per session, not raw traffic.",
          question:
            "Using the corrected grouping from step 6, which channel is a vanity trap (looks big, converts poorly) and which is the real, if smaller, signal?",
          toolName: "Google Sheets",
          where: "Same corrected spreadsheet, adding conversion rate per channel",
          procedure: [
            "Compute conversions / sessions for each corrected channel group",
            "Rank channels by conversion rate, not by raw session count",
          ],
          outputSample:
            "Channel (corrected)     Sessions   Conversions   Conv. rate   Revenue\n" +
            "newsletter/email             640           24        3.75%   $1,484.88\n" +
            "google/cpc                 3,416           85        2.49%   $6,225.38\n" +
            "google/organic             1,567           39        2.49%   $1,808.69\n" +
            "facebook/paid_social         359            7        1.95%     $405.87\n" +
            "bing/cpc                    323            5        1.55%     $318.06\n" +
            "twitter/social               420            4        0.95%     $221.68",
          healthy:
            "The audit correctly flags the channel with decent session volume but the worst conversion rate as the vanity risk, rather than crediting it for its raw traffic.",
          unhealthy:
            "The audit ranks channels by session count alone, praising Twitter's 420 sessions without noting its 0.95% conversion rate is the worst of all six.",
          interpret:
            "Twitter/social has more raw sessions than bing/cpc or facebook/paid_social but by far the worst conversion rate (0.95%), a textbook vanity channel if judged on traffic alone. Newsletter/email has the fewest sessions of any channel but the best conversion rate (3.75%), the actionable signal is buried under the channel with the smallest number.",
          soWhat: [
            {
              symptom: "Twitter looks mid-sized on raw sessions but converts worst of all 6 channels",
              action: "Don't scale Twitter spend or effort based on session count alone; investigate why conversion is weak before investing further",
              effort: "half day",
            },
            {
              symptom: "Newsletter/email has the smallest session count but the best conversion rate",
              action: "Treat the welcome-series email list (Milestone 3) as a growth lever worth deliberately growing, not a lower priority just because it's smaller",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "assign-channel-kpis",
          concept: "Assigning the right headline KPI to each live channel",
          lessonAnchor: "key-metrics-by-channel",
          theoryRecap:
            "Different channels are measured by different primary numbers, an organic content channel is judged on ranking/indexed pages and assisted conversions, an owned email channel on open/click and list growth, and a paid channel on conversion rate and CAC, not the same one-size-fits-all metric for all three.",
          question:
            "Given Loopwork's 3 live channels (Milestone 2's organic content, Milestone 3's owned email, and any paid test from Milestone 1), what's the correct primary KPI for each?",
          toolName: "Notion",
          where: "Same North Star Metric Notion page, final KPI table",
          procedure: [
            "Assign one primary KPI per channel type",
            "Note which KPI feeds directly into the confirmed NSM and which is a supporting/leading metric",
          ],
          outputSample:
            "Channel                Primary KPI                              Feeds NSM?\n" +
            "Organic content         indexed pages + assisted signups          Indirectly (drives signups, not NSM itself)\n" +
            "Welcome-series email    open/click rate + 7-day activation rate   Directly (activation IS the NSM's core action)\n" +
            "Paid (if tested)        conversion rate + CAC (from Milestone 1)  Indirectly (drives signups, not NSM itself)",
          healthy:
            "Each channel gets a distinct, appropriate KPI, and the audit correctly identifies which one directly feeds the confirmed NSM versus which are upstream/supporting metrics.",
          unhealthy:
            "All three channels get judged by the same generic metric (e.g., session count for all of them), losing the distinction that made step 7's vanity-metric finding useful in the first place.",
          interpret:
            "Only the welcome-series' 7-day activation rate feeds the NSM directly, content and paid channels are upstream of it (they drive signups, which then either do or don't activate). This distinction is what keeps the whole team pointed at the same real metric instead of each channel optimizing its own local number.",
          soWhat: [
            {
              symptom: "KPI table complete with NSM-feed relationships marked",
              action: "Set up this exact KPI table as a Looker Studio dashboard reading from GA4, so it's checked weekly instead of re-derived from scratch",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Where Loopwork's real events (signup, project-created, task-completed) get tracked going forward",
            why: "Free, and the standard source for the session/conversion data this audit's real export represents.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Looker Studio",
            role: "Building the final KPI table from step 9 into an actual weekly dashboard",
            why: "Free, connects directly to GA4 and Sheets, purpose-built for exactly this kind of per-channel KPI view.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Running the raw-vs-corrected UTM grouping and the conversion-rate ranking in steps 6-7",
            why: "Free, opens the CSV directly, sufficient for the grouping and ratio work this audit requires.",
            required: true,
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Event-level product analytics (task completion, per-team activation) beyond GA4's session-based model",
            why: "Optional upgrade once Loopwork needs deeper behavioral/cohort analysis than GA4's default reports provide, not required to complete this audit.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The full NSM derivation and channel audit runs entirely on GA4, Looker Studio, and Sheets, all free. Mixpanel only matters once Loopwork needs event-level product analytics GA4's session model doesn't cover well.",
      },
      datasetUrl: "/project-data/utm-traffic-export.csv",
      deliverable:
        "A North Star Metric decision doc for Loopwork (\"weekly teams completing >=1 task within 7 days of signup\", derived and tested through all four playbook steps), a corrected multi-channel performance table with a real UTM case-sensitivity bug fixed, and a channel-by-channel KPI assignment ready to build into a GA4/Looker Studio dashboard.",
      sampleOutput:
        "For contrast, here's the same reasoning applied to a real company, Duolingo. Duolingo didn't choose 'total registered users' as its North Star, a classic vanity metric that only ever goes up, it chose something closer to consistent daily active engagement (streaks, daily lessons completed), a metric that's a genuine leading indicator of the habit loop the whole product is built around. That discipline (measuring real usage, not signup volume) is part of why Duolingo could IPO in 2021 at a $3.7B valuation, up from a $2.4B private valuation just a year earlier, on the strength of demonstrable, retained engagement rather than raw download counts. The audit you just ran for Loopwork asks the same question Duolingo's own metrics team has to keep asking: is the number going up because the product is actually working, or just because more people signed up.",
      successCriteria: [
        "Chosen NSM traces directly back to the value statement's own verb from Milestone 1, not a generic business metric",
        "NSM passes all three criteria (leading indicator, actionable, simply explainable) with real, specific reasoning for each",
        "UTM case-sensitivity bug is caught and the corrected numbers, not the raw split numbers, are used for every conclusion afterward",
        "Vanity-channel finding (Twitter) is based on conversion rate, not session count, and doesn't just praise whichever channel has the biggest raw number",
        "Each of the 3 live channels gets a distinct, appropriate KPI, not one generic metric applied to all three",
      ],
      portfolioReady: true,
      stretch:
        "Fix the UTM tagging convention at the source (lowercase-only campaign builder or naming convention doc) so the case-sensitivity bug from step 6 can't recur, then re-pull a fresh export 30 days later and compare the corrected channel ranking against this audit's baseline.",
    },
  ],
};
