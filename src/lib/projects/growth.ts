/**
 * Practice projects for the `growth` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * Numbers cited from public/project-data/funnel-data.csv and
 * public/project-data/cohort-retention.csv are the actual sums/rates in
 * those files (verify: sum "visit" stage visitors across all rows =
 * 51,426; organic channel visit->purchase = 435/22,119 = 1.97%; the
 * 2025-11 cohort's month-5 retention = 16.8%).
 */

import type { Project } from "@/lib/projects/types";

export const GROWTH_PROJECTS: Record<string, Project[]> = {
  "what-is-growth": [
    {
      id: "what-is-growth-vanity-metrics-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Vanity Metrics Deck: Spot What's Actually Growth",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a synthetic-realistic monthly growth update modeled on an early-stage language-learning app, correctly separate the metrics that prove real value delivery from the ones that just look good in a board deck, and defend each call against the lesson's own vanity-vs-outcome distinction.",
      companyId: "duolingo",
      scenario:
        "You've joined as a fractional growth advisor for an early-stage language-learning startup that is explicitly copying Duolingo's playbook, streaks, mascot, and all. The founder just forwarded you this month's growth update before the board meeting and wants your read within the hour.",
      brief:
        "One specimen, one prompt: which of these six numbers is actual growth, and which is just activity that looks like growth? Flag every metric that fails the lesson's outcome-vs-output test, defend the ones you leave alone, and don't flag a metric just because 'more is good' feels automatic.",
      mode: "teardown",
      conceptsCovered: [
        "Choose Your North Star Metric",
        "Map the AARRR Funnel",
        "Measuring outputs instead of outcomes",
      ],
      teardownItems: [
        {
          itemId: "vanity-deck-01",
          specimen:
            "MONTHLY GROWTH UPDATE, LinguaLeap (Month 4)\n" +
            "Prepared for the board\n\n" +
            "1. Total app downloads: 340,000 this month (+180% MoM)\n" +
            "2. Instagram followers: 89,400 (+12,100 this month)\n" +
            "3. Total signups (account created): 61,800 (+94% MoM)\n" +
            "4. Learners completing at least 1 lesson every day this week: 8,900 (14.4% of Month-1 signup cohort)\n" +
            "5. Average app store rating: 4.8 stars (up from 4.3 last quarter)\n" +
            "6. 7-day retention rate (returned and completed a lesson): 19.2%, down from 22.1% last month\n\n" +
            "Founder's note: \"Downloads and followers both nearly doubled. We're clearly winning.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read this monthly growth update exactly as the board will. For each numbered metric, decide: is this proof of real growth (a customer receiving value), or a vanity metric dressed up as one? Write your call and one sentence of why for each.",
          answerKey: [
            {
              defect: "Total app downloads presented as the headline growth number",
              severity: "critical",
              whyItMatters:
                "A download is the moment someone taps 'install,' before they've experienced a second of the product's value. It sits at the far upstream end of the vanity spectrum, alongside registered users and pageviews, and a spike here can come entirely from one viral video with zero retention behind it.",
              lessonRef: "Common Mistakes: Measuring outputs instead of outcomes",
              owner: "either",
            },
            {
              defect: "Instagram followers cited as a growth win",
              severity: "moderate",
              whyItMatters:
                "Follower count is a reach metric with no required link to product usage, someone can follow the account and never open the app. Citing it next to downloads implies both describe the same kind of win, they don't.",
              lessonRef: "How It Works: The Growth Playbook, Step 1: Choose Your North Star Metric",
              owner: "you",
            },
            {
              defect: "Total signups presented as if it already proves activation",
              severity: "critical",
              whyItMatters:
                "Signup is one AARRR stage above the value moment. Mapping the funnel stage by stage is exactly how you catch a near-doubling of signups masking a shrinking Activation stage right behind it, which is what metric 4 and 6 actually show.",
              lessonRef: "How It Works: The Growth Playbook, Step 2: Map the AARRR Funnel",
              owner: "you",
            },
            {
              defect: "The founder's closing claim ('we're clearly winning') rests only on the two upstream numbers",
              severity: "critical",
              whyItMatters:
                "The deck's own numbers 4 and 6 both point the opposite direction, 7-day retention fell 2.9 points month over month. Leading with downloads and followers while retention declines is the textbook outputs-over-outcomes mistake.",
              lessonRef: "Common Mistakes: Measuring outputs instead of outcomes",
              owner: "either",
            },
          ],
          distractors: [
            "Learners completing at least 1 lesson every day this week (metric 4), buried among the vanity numbers, but it's the closest thing in this deck to a real North Star candidate, the same shape as the lesson's own 'completes a language lesson daily' example. The correct critique is that the founder buried it, not that the metric itself is illegitimate.",
            "7-day retention rate (metric 6) is a declining number, which is bad news, but the metric itself is exactly the kind of outcome-linked signal the lesson calls for. Don't flag the metric as illegitimate just because its trend is negative.",
            "Average app store rating (metric 5) is a soft, easily-gamed number, but it isn't the deck's core problem, it isn't the headline claim and it isn't what the founder used to justify the growth narrative, so it doesn't need a formal defect flag here.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you write up the metric-by-metric call and the North Star recommendation",
            why: "Free for a single user, enough to produce the one-page deliverable this project asks for.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Mixpanel",
            role: "The real tool you'd use to check activation and 7-day retention cohorts behind a deck like this",
            why: "Free tier covers cohort and retention analysis for a startup this size, this exercise is complete without ever opening it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "North Star decomposition and cohort analysis at scale",
            why: "An upgrade once the team has enough volume that Mixpanel's free tier gets limiting, never required to finish this teardown.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Notion for the write-up, Mixpanel free tier for the real cohort check) is complete on its own. Amplitude is only worth paying for once volume outgrows Mixpanel's free tier.",
      },
      deliverable:
        "A one-page call sheet: for each of the six metrics, real growth or vanity, with a one-sentence justification tied to the lesson's outcome/output distinction, plus a one-line recommendation for what LinguaLeap's actual North Star Metric candidate should be.",
      sampleOutput:
        "Flagged: downloads (1), followers (2), and the 'we're clearly winning' framing of signups (3), they measure reach and account creation, not product value delivered. Left alone: daily lesson completion (4) and 7-day retention (6), the closest thing in the deck to a real value-delivery signal, the same category Slack was tracking when it watched teams that had sent 2,000+ messages rather than just counting logins. Recommendation: LinguaLeap's North Star candidate should be built from metric 4, not metric 1 or 3, and the board should hear that retention fell 2.9 points before it hears that followers grew 12%.",
      successCriteria: [
        "Correctly flags downloads and followers as vanity/output metrics, not proof of growth",
        "Correctly leaves daily-completion and 7-day-retention metrics unflagged, recognizing them as legitimate outcome signals",
        "Explains the AARRR-stage gap between signups (metric 3) and the founder's 'winning' claim",
        "Names a specific North Star Metric candidate for LinguaLeap grounded in metric 4, not in downloads or followers",
      ],
      portfolioReady: false,
      stretch:
        "Pull real 7-day and 30-day retention numbers for an app you use daily (your own screen-time report, or the app's own stats page if it shows one) and see whether the vanity numbers (ratings, review counts) tell the same story your actual usage does.",
    },
    {
      id: "what-is-growth-loop-plateau-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Loop or Funnel? Forecasting Whether Swiggy Instamart's Growth Holds",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Read four weeks of real funnel data stage by stage, the way a growth analyst would, and forecast whether the acquisition engine is compounding like a loop or quietly draining like a leaky funnel, before the trend shows up in the topline number anyone in the room is watching.",
      companyId: "swiggy",
      scenario:
        "You're the first growth hire supporting a quick-commerce vertical built on the Swiggy Instamart model during a stretch leadership is calling 'healthy and flat.' Weekly signups have barely moved for a month, which the team reads as stability. You've been handed the raw funnel export and asked for a one-slide verdict: is this actually stable, or is something underneath about to break?",
      brief:
        "The topline number (signups) is nearly flat across four weeks, that part is true. Your job is to look one layer beneath it, at the stage-to-stage conversion rates, and decide whether the engine underneath a flat topline is holding steady or eroding, using the lesson's own loop-vs-funnel and outputs-vs-outcomes lens.",
      mode: "diagnostic",
      conceptsCovered: [
        "Map the AARRR Funnel",
        "Growth Loops vs. Linear Funnels",
        "Measuring outputs instead of outcomes",
      ],
      steps: [
        {
          concept: "Map the AARRR Funnel",
          lessonAnchor: "step-2-map-the-aarrr-funnel",
          theoryRecap:
            "The lesson's Step 2: plot your conversion rate at each AARRR stage and find the biggest drop-off, that's your highest-leverage point.",
          question:
            "Which stage-to-stage transition is actually moving over the last four weeks, and which one looks frozen only because you haven't broken it into stages yet?",
          toolName: "Looker Studio",
          where:
            "public/project-data/funnel-data.csv, grouped by week (Jun 1-7, 8-14, 15-21, 22-28) and stage",
          procedure: [
            "Group the daily rows into four 7-day weeks (Jun 1-7, Jun 8-14, Jun 15-21, Jun 22-28); drop the trailing partial days so every week compares like-for-like",
            "Sum 'visitors' within each week for each of the five stages: visit, signup, activation, purchase, retained",
            "Compute four stage-to-stage rates per week: visit-to-signup, signup-to-activation, activation-to-purchase, purchase-to-retained",
            "Line up the four weeks side by side and scan each rate for a trend, not just a single week's number",
          ],
          outputSample:
            "Week            visit->signup  signup->activation  activation->purchase  purchase->retained\n" +
            "Jun 1-7  (W1)       9.9%            56.1%                30.7%                55.4%\n" +
            "Jun 8-14 (W2)      10.6%            55.9%                36.5%                57.8%\n" +
            "Jun 15-21(W3)      11.0%            54.9%                36.3%                57.6%\n" +
            "Jun 22-28(W4)      10.9%            49.3%                35.0%                58.3%",
          healthy:
            "Each stage-to-stage rate holds roughly flat or improves week over week while topline visits/signups stay steady.",
          unhealthy:
            "One interior stage trends down for two or more consecutive weeks while the stages around it stay flat, a hidden leak a flat topline number will hide from you.",
          interpret:
            "visit-to-signup is flat-to-improving (9.9% to 10.9%) and activation-to-purchase and purchase-to-retained both hold steady, but signup-to-activation drops for three straight weeks: 56.1% to 55.9% to 54.9% to 49.3%, a 6.8-point fall concentrated almost entirely in week 4. Acquisition and monetization both look fine; activation is quietly breaking.",
          soWhat: [
            {
              symptom: "Signup-to-activation falling three-plus weeks running while top-of-funnel volume is flat",
              action:
                "Pull the activation step itself (what does 'activated' mean here, e.g. first order placed within 48 hours?) and check whether onboarding, catalog load time, or delivery-slot availability changed in week 4",
              effort: "half day",
            },
            {
              symptom: "Flat weekly signups being read as 'stable' by leadership without a stage breakdown",
              action:
                "Replace the single 'signups' slide with the four-stage table above in the next update, a flat topline is not the same claim as a healthy funnel",
              effort: "30 min",
            },
          ],
          owner: "you",
          stepId: "loop-forecast-step-1",
        },
        {
          concept: "Growth Loops vs. Linear Funnels",
          lessonAnchor: "growth-loops-vs-linear-funnels",
          theoryRecap:
            "The lesson's distinction: funnels drain, loops compound. A loop is healthy when this cycle's output measurably feeds the next cycle's input, e.g. more retained users than the equivalent week prior.",
          question:
            "Is week-over-week retained-user volume actually compounding (each week produces more retained users than the last), or is it just riding the same flat signup volume?",
          toolName: "Looker Studio",
          where: "Same weekly table, this time isolating absolute 'retained' counts, not rates",
          procedure: [
            "Pull the absolute 'retained' visitor count per week from the same weekly aggregation (not the rate, the raw number)",
            "Compare each week's retained count to the week before it",
            "Check whether growth in retained users is outpacing, matching, or lagging growth in visits",
          ],
          outputSample:
            "Week             visits   retained (count)   retained / visits\n" +
            "W1 (Jun 1-7)     11,891         112               0.94%\n" +
            "W2 (Jun 8-14)    12,654         159               1.26%\n" +
            "W3 (Jun 15-21)   11,388         144               1.26%\n" +
            "W4 (Jun 22-28)   11,800         130               1.10%",
          healthy:
            "Retained/visits ratio holds flat or climbs, meaning each unit of top-of-funnel traffic produces an equal or growing share of durably retained users, the mark of a compounding loop.",
          unhealthy:
            "Retained/visits ratio falls even while raw visit volume holds steady, meaning the same traffic now produces a smaller retained base, the activation leak from Step 1 showing up two stages downstream.",
          interpret:
            "Retained/visits rose from 0.94% to 1.26% across weeks 1-3, then fell back to 1.10% in week 4, the same week signup-to-activation cratered. This is a funnel quietly draining exactly where the deck says it's 'flat,' not a loop compounding.",
          soWhat: [
            {
              symptom: "Retained/visits ratio falling the same week signup-to-activation falls",
              action:
                "Confirm the activation-stage leak from Step 1 is the cause (not a separate week-4-only issue like a delivery outage) before recommending a fix",
              effort: "half day",
            },
            {
              symptom: "Leadership reading 'flat signups' as evidence the loop is stable",
              action:
                "Reframe the forecast: without an activation fix, week 5's retained count is more likely to fall further than to recover on its own",
              effort: "5 min",
            },
          ],
          owner: "either",
          stepId: "loop-forecast-step-2",
        },
        {
          concept: "Measuring outputs instead of outcomes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 3: impressions, clicks, and open rates are outputs, revenue, retention, and activation rate are outcomes, every metric on a leadership slide should tie to an outcome, not a vague sense of 'growth is slowing.'",
          question:
            "Given everything above, what's the one-line verdict for the leadership slide, and is it a forecast of continued plateau, mild decline, or something worse if nothing changes?",
          toolName: "Notion",
          where: "The one-slide summary the leadership team actually reads",
          procedure: [
            "State the verdict in one sentence: healthy plateau, slow leak, or active break",
            "Name the specific stage responsible (signup-to-activation, week 4) rather than a vague 'growth is slowing'",
            "Attach the two numbers that prove it: the 6.8-point signup-to-activation drop and the retained/visits reversal",
            "Give a one-week check-in date to confirm whether the fix reversed the trend",
          ],
          outputSample:
            "VERDICT SLIDE, Instamart Acquisition Health, Week 4 Read\n" +
            "Status: Not a healthy plateau, an activation leak currently masked by flat topline signups.\n" +
            "Evidence: signup->activation fell 56.1% -> 49.3% over 4 weeks (-6.8pts); retained/visits reversed 1.26% -> 1.10% the same week.\n" +
            "Forecast if unaddressed: retained users, the real compounding input to the loop, keep shrinking even if signups stay flat.\n" +
            "Next check-in: pull week 5 numbers after the activation-step fix ships.",
          healthy:
            "The verdict slide names the specific stage and week, cites both supporting numbers, and gives a concrete re-check date.",
          unhealthy:
            "The verdict slide repeats the topline 'signups are flat' framing without naming the stage-level cause, leadership walks away no better informed than before the CSV was opened.",
          interpret:
            "A specific, numbered verdict is what turns a spreadsheet exercise into something leadership can act on; a vague 'growth looks okay' slide wastes the four weeks of real data just read.",
          soWhat: [
            {
              symptom: "Verdict slide says 'growth is flat' with no stage or number attached",
              action: "Rewrite using the template above: named stage, two numbers, one re-check date",
              effort: "30 min",
            },
            {
              symptom: "No re-check date on the slide",
              action: "Set a specific week-5 date to confirm the fix worked before treating the diagnosis as closed",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "loop-forecast-step-3",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Looker Studio",
            role: "Blend and pivot the funnel CSV into the weekly stage table",
            why: "Free, and the entire step-1 and step-2 tables above can be built in it (or any spreadsheet) from the raw export.",
            required: true,
            fallback: "Any spreadsheet tool (Google Sheets, Excel) works identically for this pivot.",
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Notion",
            role: "Write the verdict slide",
            why: "Free for a single user, enough to produce the one-slide deliverable.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "True cohort-based loop instrumentation once this kind of check needs to run continuously",
            why: "An upgrade for a team that wants this table live every week instead of pulled from a CSV, never required to finish this project.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a spreadsheet or Looker Studio plus Notion for the write-up) is complete on its own. Amplitude is only worth paying for once the team wants this check running continuously instead of pulled by hand.",
      },
      datasetUrl: "/project-data/funnel-data.csv",
      deliverable:
        "A one-slide verdict (see Step 3's template) plus the four-week stage-conversion table built to support it.",
      sampleOutput:
        "Verdict: not a plateau, an activation leak masked by flat signups, signup-to-activation fell 6.8 points over four weeks (56.1% to 49.3%), and retained/visits reversed the same week (1.26% to 1.10%). This is the same distinction Airbnb's growth team drew when it moved off signups and onto nights booked: a flat top-of-funnel number can hide a shrinking value-delivery stage underneath it. Recommended fix: audit the activation step (first order within 48 hours) for anything that changed in week 4 before assuming next week recovers on its own.",
      successCriteria: [
        "Breaks the four weeks into stage-to-stage rates instead of reading only the topline signup number",
        "Correctly identifies signup-to-activation, not visit-to-signup or activation-to-purchase, as the stage that's degrading",
        "Connects the retained/visits reversal in week 4 to the same root cause identified in the stage table",
        "States a specific, numbered forecast/verdict rather than a vague 'growth looks fine' summary",
      ],
      portfolioReady: false,
      stretch:
        "Pull your own product's or employer's actual weekly funnel export (most GA4/Mixpanel setups can produce one) and run the same four-week stage-rate comparison. Real activation leaks are often invisible until someone breaks the topline number into stages.",
    },
  ],

  "north-star-metric": [
    {
      id: "north-star-metric-policybazaar-nsm-defense",
      tier: "core",
      archetype: "forecast",
      title: "Pick and Defend PolicyBazaar's North Star Metric",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given four candidate North Star Metrics for an insurance-comparison marketplace, choose one and defend it in writing against the lesson's three-criteria test and its four-category input-metric decomposition, the way a growth lead would defend it to a skeptical leadership team.",
      companyId: "policybazaar",
      scenario:
        "You're the incoming growth lead at an insurance-comparison marketplace built on the PolicyBazaar model, SEO- and comparison-content-driven acquisition feeding an insurance and lending marketplace. Leadership has four different numbers they each personally favor as 'the metric that matters' and cannot agree. You have one week to bring back a single recommendation, decomposed into inputs teams can actually act on.",
      brief:
        "Four candidates, one slide's worth of criteria. Run each through the lesson's value-statement method and three-criteria test, eliminate the ones that fail, then decompose your winner into the four Amplitude input categories so it's an operating metric, not a decoration.",
      mode: "build",
      conceptsCovered: [
        "Write the Value Statement",
        "Test Against Three Criteria",
        "Decompose into Input Metrics",
        "Before Product-Market Fit: A Special Case",
      ],
      steps: [
        {
          concept: "Write the Value Statement",
          lessonAnchor: "step-1-write-the-value-statement",
          theoryRecap:
            "Step 1 of the lesson's playbook: finish the sentence 'Our product is valuable when a customer ___.' The verb in your answer usually points directly to your NSM.",
          question:
            "Given the four candidates, which value statement does each one actually describe, and does it match what a comparison-and-purchase insurance marketplace is actually for?",
          toolName: "Notion",
          where: "A shared doc listing the four candidates with the value statement each one implies",
          procedure: [
            "List all four candidates: (A) total registered users (families and agents), (B) quotes generated per month, (C) policies purchased within 30 days of a quote, (D) monthly premium revenue processed",
            "For each candidate, write the one-sentence value statement it implies, e.g. 'valuable when a customer registers an account' for A",
            "Flag any candidate whose implied value statement stops short of the real outcome (a customer being covered, not just browsing)",
          ],
          outputSample:
            "Candidate  Implied value statement                    Stops short of real outcome?\n" +
            "A          '...creates an account.'                    Yes, no product use implied at all\n" +
            "B          '...receives a comparison quote.'            Yes, still browsing, not covered\n" +
            "C          '...buys the policy they compared.'          No, this is the actual outcome\n" +
            "D          '...generates revenue for the business.'     Yes, this is the company's result, not the customer's",
          healthy: "The candidate list narrows to one or two once you write out what each one actually implies about customer behavior.",
          unhealthy: "All four still look equally plausible after this step, meaning the value statements weren't written specifically enough to differentiate them.",
          interpret:
            "Candidate C is the only one whose value statement describes the customer actually receiving what they came for (coverage), not just interacting with the product (A, B) or the company's own result (D).",
          soWhat: [
            {
              symptom: "A value statement describes an account action, not a customer outcome",
              action: "Rewrite it one step further downstream: what does the customer get, not what do they click",
              effort: "30 min",
            },
            {
              symptom: "A value statement is actually describing company revenue, not customer value",
              action: "Separate it out, revenue is a lagging result per Step 3's criteria, not a candidate NSM itself",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "nsm-defense-step-1",
        },
        {
          concept: "Test Against Three Criteria",
          lessonAnchor: "step-3-test-against-three-criteria",
          theoryRecap:
            "The lesson's three questions: does it reflect real customer value, does it predict revenue (leading, not lagging), and can multiple teams move it with their daily work?",
          question: "Score all four candidates against the three criteria and see which one is the only clean pass.",
          toolName: "Notion",
          where: "Same shared doc, criteria scorecard",
          procedure: [
            "For each candidate, answer yes/no: reflects real customer value? leading indicator of revenue? multi-team actionable?",
            "Eliminate any candidate with even one 'no'",
            "For the survivor, write one sentence on why each 'yes' is actually true, not just asserted",
          ],
          outputSample:
            "Candidate                        Real value?   Leading indicator?   Multi-team actionable?\n" +
            "A, registered users               No             No (vanity)          Yes\n" +
            "B, quotes generated               Partial         Weak (browsing)      Yes\n" +
            "C, policies purchased in 30 days  Yes             Yes                  Yes\n" +
            "D, monthly premium revenue        Yes (result)    No (lagging)         Partially (mostly sales)",
          healthy: "Exactly one candidate clears all three criteria with a genuine 'yes,' not a stretched one.",
          unhealthy:
            "Two or more candidates clear all three, or the survivor only clears them on a technicality, e.g. 'multi-team actionable' because everyone can theoretically influence revenue.",
          interpret:
            "Candidate C is the only clean pass. B fails the 'real value' test because a quote alone proves interest, not coverage. D fails the leading-indicator test explicitly, it's the lesson's named Mistake 1: picking revenue itself as the NSM.",
          soWhat: [
            {
              symptom: "Revenue (D) is the candidate leadership keeps defaulting back to",
              action: "Point at the lesson's Mistake 1 directly: revenue is a lagging result you can inflate short-term with discounts while damaging retention",
              effort: "5 min",
            },
            {
              symptom: "Quotes generated (B) looks tempting because it's already the team's biggest existing dashboard number",
              action: "Name explicitly what it's missing: it measures interest, not the moment of actual coverage",
              effort: "5 min",
            },
          ],
          owner: "either",
          stepId: "nsm-defense-step-2",
        },
        {
          concept: "Before Product-Market Fit: A Special Case",
          lessonAnchor: "before-product-market-fit-a-special-case",
          theoryRecap:
            "The lesson's caveat: before obsessing over an NSM, confirm retention curves are flattening at a healthy level, that's the real proof of product-market fit an NSM choice should build on.",
          question:
            "Before locking in Candidate C, does the real cohort-retention data support treating this marketplace as past the product-market-fit stage, or is the NSM choice premature?",
          toolName: "Google Analytics 4",
          where: "public/project-data/cohort-retention.csv, monthly cohorts from Nov 2025 through Jun 2026",
          procedure: [
            "Read the month-0 through month-5 retention percentages for each monthly cohort",
            "Check whether the curves are flattening (retention loss slowing by month 4-5) or still falling steeply with no floor",
            "Compare the newest complete cohorts (Feb-Apr 2026) against the oldest (Nov-Dec 2025) to see whether retention is improving, flat, or worsening over time",
          ],
          outputSample:
            "Cohort     M0     M1     M2     M3     M4     M5\n" +
            "2025-11   100.0   47.0   34.3   26.1   20.3   16.8\n" +
            "2025-12   100.0   50.0   40.9   34.0   28.2   24.9\n" +
            "2026-01   100.0   50.4   40.8   33.9   30.2   27.1\n" +
            "2026-02   100.0   48.4   39.3   33.4   29.6   25.8\n" +
            "2026-03   100.0   50.5   40.7   32.5   29.1   25.9\n" +
            "2026-04   100.0   46.0   37.0   28.5   24.9   22.5",
          healthy:
            "Later cohorts retain at or above the level of earlier cohorts by month 4-5, and each cohort's month-to-month drop-off visibly slows down rather than falling in a straight line toward zero.",
          unhealthy:
            "Later cohorts retain worse than earlier ones, or the curve keeps falling at close to the same rate all the way to month 5 with no sign of leveling off.",
          interpret:
            "The Nov 2025 cohort is the clear outlier at 16.8% by month 5, every cohort from Dec 2025 onward retains meaningfully higher (22.5%-27.1% by month 5) and the month-4-to-5 drop is a few points, not a cliff. That's a flattening curve on the cohorts that matter, product-market fit looks confirmed enough to build an NSM on.",
          soWhat: [
            {
              symptom: "An NSM proposal with no retention-curve check behind it",
              action: "Always attach this table before locking a candidate, a plausible-sounding NSM built on pre-PMF data will mislead every team that acts on it",
              effort: "30 min",
            },
            {
              symptom: "Nov 2025 cohort's weak 16.8% used to argue against the whole marketplace",
              action: "Treat it as the pre-fix baseline, not the current state, compare against Dec 2025 onward instead",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "nsm-defense-step-3",
        },
        {
          concept: "Decompose into Input Metrics",
          lessonAnchor: "step-4-decompose-into-input-metrics",
          theoryRecap:
            "Step 4 of the lesson's playbook: break the NSM into 3-5 input metrics across Amplitude's four categories, breadth, depth, frequency, efficiency, so individual teams have something to move each sprint.",
          question: "What are this marketplace's breadth, depth, frequency, and efficiency inputs underneath Candidate C, and which team owns each one?",
          toolName: "Notion",
          where: "Final section of the recommendation doc",
          procedure: [
            "Breadth: what share of quote-generators go on to purchase within 30 days, who owns it (conversion/CRO team)",
            "Depth: how many insurers/policy types does a buyer compare before purchasing, who owns it (content/comparison-engine team)",
            "Frequency: what share of buyers return to renew or add a second policy, who owns it (lifecycle/retention team)",
            "Efficiency: how many days from first quote to purchase, who owns it (product/UX team)",
          ],
          outputSample:
            "Input        Metric                                                Owning team\n" +
            "Breadth      Quote-to-purchase rate within 30 days                 Conversion/CRO\n" +
            "Depth        Insurers compared per buyer before purchase           Content/comparison engine\n" +
            "Frequency    Buyers who renew or add a 2nd policy within 12 months Lifecycle/retention\n" +
            "Efficiency   Days from first quote to completed purchase           Product/UX",
          healthy: "Each of the four inputs has exactly one clear owning team and a concrete, trackable number, not a vague description.",
          unhealthy:
            "An input with no clear owner, or two inputs that are really the same metric restated, e.g. listing both 'quote-to-purchase rate' and 'purchases' as separate inputs.",
          interpret:
            "This decomposition gives four different teams a weekly number to move, none of which is 'increase total registered users,' exactly what makes Candidate C an operating metric instead of a dashboard vanity number.",
          soWhat: [
            {
              symptom: "An input metric with no owning team named",
              action: "Assign it before shipping the recommendation, an NSM without owned inputs is decoration per the lesson's Mistake 5",
              effort: "30 min",
            },
            {
              symptom: "Leadership asks why 'total registered users' isn't one of the four inputs",
              action: "Point back to Steps 1-2: it failed the value-statement and criteria test, it doesn't re-enter through the back door as an input",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "nsm-defense-step-4",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where the scorecards and final recommendation doc live",
            why: "Free for a single user, enough to produce every artifact this project asks for.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Where a real team would pull the cohort-retention table from",
            why: "Free tier's Retention report produces the same shape of table used in Step 3, this exercise is complete without ever opening it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Packaged North Star tracking and input-metric dashboards",
            why: "An upgrade for a team that wants this decomposition live and automated, never required to write the recommendation doc.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Notion plus GA4's free-tier retention report) is complete on its own. Amplitude is only worth paying for once the team wants the decomposition running as a live dashboard.",
      },
      datasetUrl: "/project-data/cohort-retention.csv",
      deliverable:
        "A one-page NSM recommendation: chosen candidate, the value-statement and three-criteria reasoning that eliminated the other three, the retention-curve evidence confirming product-market fit, and the four-input decomposition table with owning teams.",
      sampleOutput:
        "Recommendation: Candidate C, 'policies purchased within 30 days of a quote.' It's the only candidate whose value statement describes the customer actually receiving coverage, not just browsing (B) or registering (A), and the only one that passes all three criteria cleanly, unlike revenue (D), which fails the leading-indicator test the same way Airbnb rejected signups in favor of nights booked, a metric that captures both sides of the marketplace getting value at once. Retention curves from Dec 2025 onward flatten in the 22-27% range by month 5, confirming enough product-market fit to build an NSM on. Four inputs assigned: quote-to-purchase rate (CRO), insurers compared per buyer (content), 12-month renewal/second-policy rate (lifecycle), days-to-purchase (product).",
      successCriteria: [
        "Eliminates registered users and revenue as NSM candidates using the lesson's own reasons (vanity; lagging indicator)",
        "Correctly identifies policies-purchased-within-30-days as the only candidate that passes all three criteria",
        "Uses the real cohort-retention numbers to confirm, not assume, product-market fit before finalizing the NSM",
        "Decomposes the chosen NSM into four input metrics, each with a named owning team",
      ],
      portfolioReady: true,
      stretch:
        "Take your own company's (or a product you use daily's) actual candidate metrics and run the same four-step test. Most teams have never written out the value statement each metric implies, and it changes the answer more often than you'd expect.",
    },
    {
      id: "north-star-metric-zomato-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Orders Placed vs. App Opens: A Head-to-Head NSM Drill",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given exactly two competing NSM candidates for a food-delivery marketplace, score both against the lesson's three criteria in under 20 minutes and declare a defensible winner, the fast version of the judgment call a growth lead makes every time a new metric gets proposed.",
      companyId: "zomato",
      scenario:
        "A product manager at a Zomato-style food-delivery marketplace is pushing 'weekly app opens' as the team's new North Star, arguing it captures engagement better than the current 'orders placed per user per month.' You have one stand-up's worth of time to settle it.",
      brief:
        "Two candidates, three criteria, one winner. The fast version of the NSM defense exercise: no decomposition, no retention check, just a clean head-to-head using the lesson's own test.",
      mode: "drill",
      conceptsCovered: ["The Three Games Your Product Can Play", "Test Against Three Criteria"],
      steps: [
        {
          concept: "The Three Games Your Product Can Play",
          lessonAnchor: "the-three-games-your-product-can-play",
          theoryRecap:
            "The lesson's framework: attention game (time spent), transaction game (completed transactions), productivity game (work output). Picking the wrong game means measuring engagement in a business built on transactions.",
          question: "Which game is a food-delivery marketplace actually playing, and which candidate matches that game?",
          toolName: "Notion",
          where: "Quick scorecard, one line per candidate",
          procedure: [
            "Identify the business model: is this an attention business (time spent) or a transaction business (completed orders)?",
            "Match each candidate to the game it measures: app opens measures attention/engagement, orders placed measures transactions",
            "Flag the mismatch, if any, between the business's actual game and the metric being proposed",
          ],
          outputSample:
            "Business type: transaction game (like Uber and Amazon, per the lesson's own table)\n" +
            "Candidate               Measures\n" +
            "Weekly app opens        Attention (time/frequency of visits, not outcomes)\n" +
            "Orders placed/user/mo   Transaction (completed purchases)",
          healthy: "The candidate that matches the business's actual game (transaction, here) is the one that survives this step.",
          unhealthy: "Defending an attention-game metric (app opens) for a transaction business because it's already the bigger, more impressive-looking number.",
          interpret:
            "App opens measures the wrong game entirely, a user can open the app to browse, compare restaurants, or check an order status without ever completing a transaction. It's a mismatch before the three-criteria test even starts.",
          soWhat: [
            {
              symptom: "A proposed NSM measures the wrong game for the business model",
              action: "Reject it at this step, don't proceed to the criteria test, a wrong-game metric fails on category before it fails on detail",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "nsm-h2h-step-1",
        },
        {
          concept: "Test Against Three Criteria",
          lessonAnchor: "step-3-test-against-three-criteria",
          theoryRecap: "Same three-question test: real customer value, leading indicator of revenue, multi-team actionable.",
          question: "Score both candidates head-to-head and declare the winner in one sentence.",
          toolName: "Notion",
          where: "Same scorecard, three-criteria columns added",
          procedure: [
            "Score weekly app opens on all three criteria",
            "Score orders placed/user/month on all three criteria",
            "Declare the winner and write the one sentence you'd say in stand-up",
          ],
          outputSample:
            "Candidate            Real value?   Leading indicator?   Multi-team actionable?  Winner?\n" +
            "Weekly app opens       No             Weak                 Yes                    No\n" +
            "Orders placed/mo       Yes            Yes                  Yes                    Yes",
          healthy:
            "One candidate clears all three criteria cleanly and the loser fails on the same criterion (real value) the Step 1 game-mismatch already predicted.",
          unhealthy:
            "Both candidates look defensible on paper, meaning the criteria weren't applied strictly, e.g. 'app opens' getting credit for 'leading indicator' just because it's correlated with orders.",
          interpret:
            "Orders placed per user per month wins clean: it's the transaction the business actually exists to facilitate, unlike app opens, which can rise while orders fall if browsing behavior changes.",
          soWhat: [
            {
              symptom: "Stand-up pressure to declare app opens the winner because it's the bigger, faster-growing number",
              action:
                "Say the one sentence: a number going up doesn't mean it's the right number, it has to measure the transaction, not the visit",
              effort: "5 min",
            },
          ],
          owner: "either",
          stepId: "nsm-h2h-step-2",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "The two-row scorecard",
            why: "Free for a single user, enough to run this drill in under 20 minutes.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Run this exact comparison against real event data instead of a scorecard",
            why: "An upgrade for validating the call against live numbers, never required to finish the drill.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a Notion scorecard) is complete on its own. Amplitude is only worth paying for once you want to validate the call against live event data instead of reasoning through it.",
      },
      deliverable: "A two-row scorecard and a one-sentence verdict you could say out loud in a five-minute stand-up.",
      sampleOutput:
        "Winner: orders placed per user per month. Weekly app opens fails the 'real value' criterion, a user can open the app to browse without ordering, the same reason DoorDash's own growth reporting centers on completed orders and active merchants rather than raw app-session counts. Orders placed also matches the business's actual game (transaction, not attention) and predicts revenue directly, since GMV is built from completed orders.",
      successCriteria: [
        "Correctly identifies the business as a transaction-game business, not an attention-game business",
        "Rejects weekly app opens specifically because it fails the 'real customer value' criterion, not just because it 'feels wrong'",
        "States a one-sentence, stand-up-ready verdict rather than a paragraph of hedging",
      ],
      portfolioReady: false,
      stretch:
        "Run this same two-candidate drill on a proposed metric change at your own job or a product you follow closely. Most 'let's just track X too' proposals collapse fast once you apply these three questions out loud.",
    },
  ],

  "ab-testing": [
    {
      id: "ab-testing-results-conclusiveness-audit",
      tier: "mini",
      archetype: "audit",
      title: "Ship It or Kill It: Auditing a Suspiciously Good Test Result",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a supplied A/B test results table (sample sizes, conversion rates, p-value, dates), decide whether the test is actually conclusive or whether peeking, underpowering, or the novelty effect makes the declared winner unreliable.",
      companyId: "casper-sleep",
      scenario:
        "You're the growth analyst at Casper. A PM is pushing to ship a new checkout variant after 4 days because 'it's already significant.' You've been handed the raw results table and asked to sign off before it ships.",
      brief:
        "Check the sample size against the pre-registered calculation, check test duration against a full business cycle, and check whether the p-value was read mid-test or at the planned end date.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating required sample size before launch",
        "Peeking and early stopping inflates false positives",
        "Running for full business cycles",
      ],
      steps: [
        {
          stepId: "step-1-sample-size-check",
          concept: "Calculating required sample size before launch",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 2 requires calculating sample size from baseline rate, MDE, 95% confidence, and 80% power before launch, not checking it after the fact.",
          question:
            "The pre-launch plan called for 30,000 visitors per variant. The results table shows 6,200 in control and 6,050 in variant, collected over 4 days. Is this test adequately powered?",
          toolName: "Google Sheets",
          where: "Open results-table.csv, compare the 'visitors' column against the pre-registered sample size note in row 1.",
          procedure: [
            "Import results-table.csv into Google Sheets",
            "Sum visitors per variant and compare against the pre-registered target of 30,000",
            "Flag the test as underpowered if actual visitors are under 25% of the target",
          ],
          outputSample:
            "Pre-registered target: 30,000 visitors/variant\nActual after 4 days:\n  Control: 6,200 visitors, 248 conversions (4.0%)\n  Variant: 6,050 visitors, 278 conversions (4.6%)\nActual sample = 20% of target",
          healthy:
            "The test is flagged as underpowered and not shipped until it reaches the pre-registered sample size.",
          unhealthy:
            "The PM ships the variant because the dashboard shows a green checkmark, ignoring that the sample is one-fifth of the planned size.",
          interpret:
            "A p-value computed on 20% of the required sample is not evidence, it is noise that happened to cross a threshold.",
          soWhat: [
            {
              symptom: "A stakeholder wants to ship based on an early significant reading",
              action: "Pull the pre-registered sample size and show the gap in writing before any ship decision",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-peeking-check",
          concept: "Peeking and early stopping inflates false positives",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section states early stopping inflates the false positive rate from 5% to over 30%, and that the end date must be locked before launch and not moved.",
          question:
            "The results table has a 'checked_at' column showing the team looked at p-values on day 1, day 2, day 3, and day 4, and shipped the moment day 4 crossed p < 0.05. What does this pattern tell you about the reported significance?",
          toolName: "Google Sheets",
          where: "Filter the 'checked_at' log column in results-table.csv.",
          procedure: [
            "Filter the checked_at column to count how many times the team looked at results before shipping",
            "Cross-reference the day the decision was made against the planned 2-week end date",
            "Recompute the effective false positive rate implied by 4 looks (roughly 20%+, not 5%)",
          ],
          outputSample:
            "checked_at log: Day 1 (p=0.31), Day 2 (p=0.14), Day 3 (p=0.09), Day 4 (p=0.048, shipped)\nPlanned end date: Day 14\nLooks before ship: 4",
          healthy:
            "The test is declared inconclusive and restarted with a locked end date and a single significance check at the finish line.",
          unhealthy:
            "The team treats the day-4 p=0.048 as the real result and ships, unaware that 4 sequential looks pushed the true false-positive rate well above 5%.",
          interpret:
            "Every additional peek at an unfinished test is another roll of the dice; the reported p-value at the moment of shipping is not the test's true error rate.",
          soWhat: [
            {
              symptom: "A dashboard shows daily p-value snapshots being screenshotted and shared",
              action: "Disable public significance dashboards during the test, or restrict access until the locked end date",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Import and audit the raw results table",
            why: "Free, no account friction, sufficient for a sample-size and peeking-pattern audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit verdict (ship / do not ship / extend test) with the specific sample-size gap and peeking pattern cited as evidence.",
      sampleOutput:
        "Allbirds, checkout CTA test audit (excerpt)\n\nVERDICT: DO NOT SHIP\n\nSample size: 8,400 / 28,000 required visitors per variant (30% of target)\nPeeking: 5 significance checks logged before the day-5 ship decision\nRecommendation: restart with a locked 2-week end date, no interim dashboard access",
      successCriteria: [
        "Correctly identifies the sample-size shortfall against the pre-registered target",
        "Correctly identifies the peeking pattern from the checked_at log",
        "Recommends not shipping, with both the sample-size and peeking evidence cited",
      ],
      portfolioReady: true,
    },
    {
      id: "ab-testing-checkout-test-plan-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Pre-Register the Test: Building a Properly Powered A/B Test Plan",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real baseline conversion rate and traffic volume, build a complete pre-registered test plan: hypothesis, sample size calculation, primary and guardrail metrics, and a locked end date, before any variant is built.",
      companyId: "nykaa",
      scenario:
        "You're the growth lead at Nykaa. The team wants to test a simplified 2-step checkout against the current 4-step checkout. Before anyone touches design, you own the test plan.",
      brief:
        "Turn a vague 'let's test the checkout' idea into a fully pre-registered plan with a real sample size number, a locked duration, and guardrail metrics that would catch a hidden regression.",
      mode: "build",
      conceptsCovered: [
        "Writing a testable hypothesis",
        "Calculating required sample size before launch",
        "Picking one primary metric with guardrail metrics",
        "Running for full business cycles",
      ],
      steps: [
        {
          stepId: "step-1-hypothesis",
          concept: "Writing a testable hypothesis",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 1 requires the template 'Because we observed [data], we believe [change] will cause [metric] to improve by [amount] for [audience].' If you cannot fill every blank, it is a guess, not a hypothesis.",
          question:
            "Analytics shows 38% of users abandon at the 3rd of 4 checkout steps, mostly on mobile. Write a hypothesis that fills every blank in the template using this data.",
          toolName: "Google Sheets",
          where: "Draft the hypothesis in a shared plan doc tab.",
          procedure: [
            "Pull the step-by-step checkout funnel drop-off from the analytics export",
            "Identify the specific step and audience segment with the highest abandonment",
            "Fill in every blank of the hypothesis template with a specific, falsifiable claim",
          ],
          outputSample:
            "Because we observed 38% of mobile users abandon at the shipping-address step (step 3 of 4), we believe collapsing steps 2-4 into a single scrollable screen will cause checkout completion rate to improve by 8% for mobile users.",
          healthy:
            "Every blank in the template is filled with a specific number and audience, making the hypothesis falsifiable.",
          unhealthy:
            "The hypothesis reads 'we believe a simpler checkout will convert better,' which cannot fail and is not testable.",
          interpret:
            "A hypothesis that cannot be wrong is not a hypothesis; it is a preference restated as a claim.",
          soWhat: [
            {
              symptom: "A test brief has no specific numbers in the hypothesis line",
              action: "Reject the brief and require a filled-in template before sample size work begins",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sample-size-calc",
          concept: "Calculating required sample size before launch",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 2 requires four inputs before launch: baseline conversion rate, minimum detectable effect, 95% confidence, and 80% power.",
          question:
            "Baseline checkout completion is 62%. You want to detect the 8% relative lift from your hypothesis (62% to 66.96%) at 95% confidence and 80% power. Using a sample size calculator, roughly how many visitors per variant do you need, and does current traffic support it?",
          toolName: "Google Sheets",
          where: "Log the calculator inputs and output in the plan doc; cross-check against current daily checkout traffic.",
          procedure: [
            "Enter baseline rate 62% and MDE 8% relative into a sample size calculator (e.g. Evan Miller's)",
            "Record the required sample size per variant, typically several thousand for an 8% relative lift on a 62% baseline",
            "Divide by current daily checkout traffic to estimate how many days the test needs to run",
          ],
          outputSample:
            "Baseline: 62%   MDE: 8% relative   Confidence: 95%   Power: 80%\nRequired: ~3,900 visitors per variant\nCurrent daily checkout traffic: ~650/day total, ~325/variant\nEstimated runtime: ~12 days minimum",
          healthy:
            "The plan locks a 14-day minimum runtime, covering both the calculated sample size and a full two-week business cycle.",
          unhealthy:
            "The team launches with no runtime estimate and starts checking results after 2 days because 'it felt long enough.'",
          interpret:
            "Sample size and business-cycle duration are two separate checks; a plan needs both satisfied, not whichever comes first.",
          soWhat: [
            {
              symptom: "A test plan has no calculated sample size or runtime estimate",
              action: "Block the launch until the calculator output and a locked end date are both in the plan doc",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-metrics",
          concept: "Picking one primary metric with guardrail metrics",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 3 requires committing to one primary decision metric before launch, plus guardrail metrics tracked to catch regressions without deciding the winner.",
          question:
            "Checkout completion rate is the obvious primary metric. What guardrail metrics would catch a hidden regression, like the 2-step checkout lifting completion but quietly increasing return/refund requests?",
          toolName: "Google Sheets",
          where: "List primary and guardrail metrics in the plan doc with their data source.",
          procedure: [
            "Set checkout completion rate as the single primary metric",
            "Add revenue per session as a guardrail against a low-value completion spike",
            "Add 30-day return rate and support ticket volume as guardrails against a rushed, error-prone flow",
          ],
          outputSample:
            "PRIMARY: Checkout completion rate\nGUARDRAILS:\n  Revenue per session (catches low-AOV completions)\n  30-day return rate (catches rushed/mistaken orders)\n  Checkout-related support tickets (catches confusing new flow)",
          healthy:
            "Guardrails are defined and monitored before launch so a completion-rate win that breaks returns or support volume gets caught, not shipped.",
          unhealthy:
            "Only completion rate is tracked; the team ships an 8% lift and discovers a return-rate spike two months later.",
          interpret:
            "A win on the primary metric that breaks a guardrail is not a win, per the lesson's own framing.",
          soWhat: [
            {
              symptom: "A test plan lists only one metric with no guardrails",
              action: "Add at least one revenue and one downstream quality guardrail before the plan is approved",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Draft and log the full pre-registered test plan",
            why: "Free, shareable, sufficient for hypothesis, sample size math, and metric definitions",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "VWO",
            role: "Run the actual test and enforce the locked end date once the plan is approved",
            why: "Handles randomization, sample size tracking, and guardrail dashboards without manual tracking",
            required: false,
            fallback: "Google Sheets can log manual daily counts if no testing platform is available yet",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete pre-registered test plan document: filled hypothesis template, sample size calculation with inputs and output, primary metric, 3 guardrail metrics, and a locked minimum runtime.",
      sampleOutput:
        "Lenskart, checkout redesign test plan (excerpt)\n\nHYPOTHESIS: Because we observed 41% of users abandon at the prescription-upload step, we believe making upload optional-until-payment will cause checkout completion to improve by 6% for first-time buyers.\n\nSAMPLE SIZE: baseline 58%, MDE 6% relative, 95%/80% power = ~4,800/variant\nRUNTIME: 15 days minimum (traffic-bound)\nPRIMARY: Checkout completion rate\nGUARDRAILS: Revenue per session, prescription-verification failure rate, support tickets",
      successCriteria: [
        "Hypothesis fills every blank of the template with specific numbers",
        "Sample size is calculated from real baseline/MDE inputs, not guessed",
        "Exactly one primary metric is named, with at least 2 guardrail metrics",
        "Runtime accounts for both sample size and the full-business-cycle minimum",
      ],
      portfolioReady: true,
    },
  ],

  "aarrr": [
    {
      id: "aarrr-funnel-bottleneck-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "Which Door Is Stuck? Diagnosing a Real Funnel with the AARRR Decision Tree",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective: "Given a real four-number funnel snapshot, apply the lesson's diagnostic decision tree in the correct order to find the one stage worth fixing this quarter.",
      companyId: "lenskart",
      scenario: "You're the growth analyst at Lenskart. Leadership wants to know which AARRR stage to fix before the next budget cycle, and they've asked for a one-page answer, not a 20-tab dashboard.",
      brief: "Run the lesson's four-question decision tree, top to bottom, against Lenskart's real Q3 numbers. Stop at the first 'yes' and don't skip ahead to a stage that looks more exciting to fix.",
      mode: "diagnostic",
      conceptsCovered: ["Diagnosing the funnel bottleneck with the AARRR decision tree"],
      steps: [
        {
          stepId: "step-1-diagnose-bottleneck",
          concept: "Diagnosing the funnel bottleneck with the AARRR decision tree",
          lessonAnchor: "where-to-start-diagnosing-your-funnel",
          theoryRecap: "The lesson's decision tree checks stages in a fixed order: Retention first, then Activation, then Referral, then Revenue, then Acquisition last. You stop at the first stage that fails its threshold.",
          question: "Lenskart's Q3 snapshot: Day 30 retention 34%, activation rate 41%, K-factor 0.6, LTV:CAC 2.4. Which stage does the decision tree tell you to fix first?",
          toolName: "Google Sheets",
          where: "Open funnel-snapshot.csv, lay the four numbers out as a single row, and walk the decision tree question by question in adjacent cells.",
          procedure: [
            "Import funnel-snapshot.csv, which has one row of Q3 numbers: retention, activation, K-factor, LTV:CAC",
            "Check question 1: is Day 30 retention below 20%? Lenskart's is 34%, so answer No and move on",
            "Check question 2: is activation rate below 37%? Lenskart's is 41%, so answer No and move on",
            "Check question 3: is K-factor below 0.5? Lenskart's is 0.6, so answer No and move on",
            "Check question 4: is LTV under 3x CAC? Lenskart's is 2.4x, below the 3:1 target, so answer Yes and stop here",
          ],
          outputSample: "Lenskart Q3 funnel snapshot\n  Day 30 retention:  34%   (threshold 20%)   -> pass\n  Activation rate:   41%   (threshold 37%)   -> pass\n  K-factor:          0.6   (threshold 0.5)   -> pass\n  LTV:CAC:           2.4x  (threshold 3.0x)  -> FAIL, stop here\n\nDiagnosis: fix the Revenue stage (pricing, packaging, or upsell path) before scaling Acquisition further.",
          healthy: "The team stops at the first failed threshold and builds a pricing/packaging brief, leaving Acquisition spend untouched until LTV:CAC clears 3:1.",
          unhealthy: "The team sees a decent-looking activation number and decides to run a splashy referral campaign instead, skipping past the actual failing gate.",
          interpret: "The decision tree is sequential on purpose. A stage that passes its threshold is not 'done', it's just not this quarter's bottleneck.",
          soWhat: [
            { symptom: "LTV:CAC sits at 2.4x against a 3:1 target", action: "Pull the top 20% of customers by LTV and check what pricing tier or bundle they're on before touching acquisition spend", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Lay out the four funnel numbers and walk the decision tree", why: "No account friction, handles four numbers and four if/then checks with zero setup", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Google Analytics 4", role: "Pull the real retention and activation numbers behind the snapshot", why: "Source of truth for cohort-based retention once you move past a single provided snapshot", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A one-page diagnosis memo: which stage failed the decision tree, the exact threshold it missed, and the one recommended fix for next quarter.",
      sampleOutput: "Warby Parker Q2 funnel snapshot\n  Day 30 retention:  16%   (threshold 20%)   -> FAIL, stop here\n\nDiagnosis: fix Retention before anything else. Referral and Revenue numbers are irrelevant until the leaky bucket is patched; scaling acquisition now would only accelerate churn.",
      successCriteria: [
        "Checks all four thresholds in the lesson's specified order, not by eyeballing which number looks worst",
        "Stops at the first failed threshold instead of continuing down the tree",
        "States a specific fix tied to the failing stage, not a generic 'improve marketing' recommendation",
      ],
      portfolioReady: true,
    },
    {
      id: "aarrr-referral-loop-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Engineer the Loop: Building a Referral Program from Trigger to Incentive",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Design a complete referral loop, trigger, mechanic, and incentive, for a real product scenario, instead of leaving word-of-mouth to chance.",
      companyId: "warby-parker",
      scenario: "Warby Parker's home try-on program has high satisfaction but almost no structured referral flow. You're asked to design one before the next quarter's growth review.",
      brief: "Referral doesn't happen by accident. Specify exactly when you ask, what gets shared, and why someone would bother sharing it.",
      mode: "build",
      conceptsCovered: ["Engineering a referral loop with trigger, mechanic, and incentive"],
      steps: [
        {
          stepId: "step-1-build-referral-loop",
          concept: "Engineering a referral loop with trigger, mechanic, and incentive",
          lessonAnchor: "stage-4-referral-do-they-bring-others",
          theoryRecap: "The lesson names three required components of a real referral loop: a trigger (when you ask), a mechanic (what gets shared), and an incentive (why someone shares it). Missing any one of the three means the loop won't run.",
          question: "Warby Parker's home try-on box arrives, the customer picks their favorite pair, and orders it. At what exact moment should the referral ask fire, and what should the customer actually share?",
          toolName: "Google Sheets",
          where: "Build a three-row spec sheet: Trigger, Mechanic, Incentive, with one filled cell per row plus a one-line justification.",
          procedure: [
            "Row 1, Trigger: pick the moment of peak satisfaction, right after the customer completes checkout on their favorite pair from the try-on box, not at delivery or account creation",
            "Row 2, Mechanic: define exactly what gets shared, a personal referral link plus a photo of the customer's chosen frame, not a generic 'invite friends' button",
            "Row 3, Incentive: specify a two-sided reward, $20 off for the friend's first pair, $20 store credit for the referrer once the friend orders",
            "Write one justification line per row explaining why that specific choice beats the obvious alternative",
          ],
          outputSample: "Warby Parker referral loop spec\n  Trigger:   Fires at checkout completion after the try-on box, satisfaction is highest here (not at delivery, before frames are seen)\n  Mechanic:  Personal link + photo of the chosen frame (social proof beats a bare 'invite friends' button)\n  Incentive: Two-sided, $20 off friend's first pair / $20 credit to referrer (matches the lesson's Dropbox two-sided model)",
          healthy: "The referral ask fires at the single highest-satisfaction moment and gives the sharer something specific and personal to post, not a generic invite link.",
          unhealthy: "A referral button sits permanently in account settings where almost nobody who is satisfied right now will ever see it.",
          interpret: "A referral loop is a specification, not a feature checkbox. All three parts have to be deliberately designed together.",
          soWhat: [
            { symptom: "Referral rate is under 2% despite high satisfaction scores", action: "Move the ask from account settings to the moment right after checkout completion", effort: "half day" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Draft and justify the trigger/mechanic/incentive spec", why: "Enough structure to force all three components to be filled in before calling it done", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A three-part referral loop spec (trigger, mechanic, incentive) with a one-line justification for each choice, ready to hand to a developer.",
      sampleOutput: "Allbirds referral loop spec\n  Trigger:   Fires 14 days after first wear, once the customer has posted a repeat purchase or a 5-star review (proven satisfaction signal, not just a completed order)\n  Mechanic:  A shareable 'my pair' referral link pre-filled with the exact shoe color and size\n  Incentive: $25 credit both ways, redeemable only on a second pair, ties the reward to the retention goal",
      successCriteria: [
        "All three components (trigger, mechanic, incentive) are specified, not just one or two",
        "The trigger is tied to a real satisfaction moment, not an arbitrary time delay",
        "The incentive is two-sided, matching the lesson's stated best-practice pattern",
      ],
      portfolioReady: true,
    },
  ],
  "activation": [
    {
      id: "activation-magic-number-cohort-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "Find the Magic Number: Cohort Analysis on a Real Retention Split",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given cohort data comparing retained vs. churned users by an early behavior, find the specific frequency and time window where the two curves diverge.",
      companyId: "glossybox",
      scenario: "You're the lifecycle analyst at Glossybox. Product suspects 'rated at least 2 products in the first box' predicts subscription renewal, but nobody has actually tested it against the numbers.",
      brief: "Compare Month 3 retention for users above and below the candidate threshold. Confirm the divergence is real before it becomes an onboarding goal.",
      mode: "diagnostic",
      conceptsCovered: ["Finding the magic number with cohort analysis"],
      steps: [
        {
          stepId: "step-1-magic-number-cohort",
          concept: "Finding the magic number with cohort analysis",
          lessonAnchor: "step-2-find-your-magic-number-with-cohort-analysis",
          theoryRecap: "The lesson defines the magic number as a behavior, frequency, and time window combination where retention curves for retained vs. churned users visibly diverge, found only by comparing real cohorts, not by guessing.",
          question: "Users who rated 2+ products in their first box show 61% Month 3 retention. Users who rated 0-1 products show 24%. Is 'rate 2+ products in box 1' a real magic number, and what should the onboarding goal become?",
          toolName: "Google Sheets",
          where: "Import cohort-retention.csv, split rows by the rating-count threshold, and compare the Month 3 retention percentage for each group side by side.",
          procedure: [
            "Import cohort-retention.csv with columns: user_id, products_rated_box1, retained_month3",
            "Split users into two groups: rated 2+ products vs. rated 0-1 products",
            "Calculate Month 3 retention percentage for each group separately",
            "Confirm the two percentages are far enough apart to count as a real divergence, not noise",
          ],
          outputSample: "Glossybox Box 1 cohort split (n=800)\n  Rated 2+ products (n=310): 61% retained at Month 3\n  Rated 0-1 products (n=490): 24% retained at Month 3\n  Gap: 37 percentage points -> genuine divergence, this is a real magic number candidate",
          healthy: "A 37-point retention gap between the two groups is wide enough to confidently set 'rate 2+ products in box 1' as the activation event and design onboarding around it.",
          unhealthy: "Treating a 3-4 point gap as a magic number and rebuilding onboarding around noise that won't replicate next quarter.",
          interpret: "A real magic number produces a gap wide enough that nobody on the team would argue it's coincidence. Small gaps mean keep looking.",
          soWhat: [
            { symptom: "Onboarding has no clear activation goal beyond 'complete signup'", action: "Add a first-box rating prompt and track the 2+ threshold as the new activation metric on the weekly dashboard", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Split cohorts by threshold and compare retention percentages", why: "Filtering and a COUNTIF-style split handle this comparison without any analytics tool setup", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Amplitude", role: "Run this same cohort comparison at full scale across many candidate behaviors at once", why: "Built-in cohort comparison views designed for exactly this analysis, per the lesson", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A cohort comparison table showing Month 3 retention for both groups, plus a one-line verdict on whether the candidate behavior is a real magic number.",
      sampleOutput: "Lenskart first-purchase cohort split (n=1,200)\n  Completed a virtual try-on before purchase (n=430): 58% retained at Month 3\n  Purchased without virtual try-on (n=770): 31% retained at Month 3\n  Gap: 27 percentage points -> real divergence; virtual try-on is a strong activation-event candidate",
      successCriteria: [
        "Splits the cohort by the candidate threshold correctly, not by an unrelated variable",
        "Reports Month 3 retention as a percentage for each group separately",
        "Gives a clear real-vs-noise verdict based on the size of the gap, not just a description of the numbers",
      ],
      portfolioReady: true,
    },
    {
      id: "activation-time-to-value-flow-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Compress the Path: Building a Time-to-Value First Session",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Redesign a signup-to-activation flow using the lesson's five time-to-value tactics, cutting every step that delays the first real value moment.",
      companyId: "allbirds",
      scenario: "Allbirds is launching a loyalty app. Early testers take 4 screens and an email verification before they see their first personalized shoe recommendation.",
      brief: "Apply the lesson's time-to-value tactics to redesign the flow so a new user sees a real recommendation in the first session, not after four setup screens.",
      mode: "build",
      conceptsCovered: ["Compressing time-to-value in the first session"],
      steps: [
        {
          stepId: "step-1-compress-time-to-value",
          concept: "Compressing time-to-value in the first session",
          lessonAnchor: "step-4-compress-time-to-value-ruthlessly",
          theoryRecap: "The lesson lists five concrete tactics to cut time-to-value: pre-fill forms, import sample data or templates, remove optional steps from the critical path, defer email verification, and offer a done-for-you setup as default.",
          question: "The current flow is: create account, verify email, set shoe size, set style preference, then see a recommendation. Which of the lesson's five tactics cuts the most steps from this critical path?",
          toolName: "Google Sheets",
          where: "List the current 4-screen flow in one column, then rebuild it in a second column applying as many of the five tactics as legitimately apply.",
          procedure: [
            "List the current flow step by step: create account, verify email, set size, set style, see recommendation",
            "Apply 'defer email verification': move it after the first recommendation is shown, not before",
            "Apply 'pre-fill forms': pull shoe size from the customer's past Allbirds order history if they're a returning web customer",
            "Apply 'import sample data': show a generic best-seller recommendation immediately, then refine it once style preference is set",
            "Rebuild the flow: create account, see an instant best-seller recommendation, set style preference to refine it, verify email later",
          ],
          outputSample: "Allbirds loyalty app, before vs. after\n  BEFORE: account -> verify email -> set size -> set style -> see recommendation (4 screens before value)\n  AFTER:  account -> see instant recommendation -> refine with style tap -> verify email later (1 screen before value)",
          healthy: "A new user sees a real, even if generic, recommendation within the first 30 seconds, then personalizes it further instead of configuring blind.",
          unhealthy: "Email verification stays as a hard gate before screen one, so a meaningful share of new users never see a single recommendation.",
          interpret: "Cutting steps only counts if the remaining steps get the user to value faster. A shorter flow that still gates the value moment behind verification hasn't actually fixed anything.",
          soWhat: [
            { symptom: "Only 40% of new signups complete all 4 onboarding screens", action: "Move email verification after the first recommendation is shown, and pre-fill size from order history where available", effort: "dev ticket" },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Map the before/after flow and check each tactic against the critical path", why: "A two-column before/after list is enough structure to plan a flow redesign before it goes to engineering", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A before/after flow diagram (as a step list) showing which lesson tactics were applied and the resulting screen count before first value.",
      sampleOutput: "Glossybox app, before vs. after\n  BEFORE: account -> verify email -> beauty profile quiz (6 questions) -> see box preview (3 screens before value)\n  AFTER:  account -> see box preview using default profile -> refine with a 2-question quick quiz -> verify email later (1 screen before value)",
      successCriteria: [
        "Identifies at least 2 of the lesson's 5 named tactics and applies them correctly to this specific flow",
        "The rebuilt flow shows a real value moment (a recommendation) before email verification, not after",
        "States the new screen count before value is reached, not just a vague 'shorter flow' claim",
      ],
      portfolioReady: true,
    },
  ],

  "growth-loops": [
    {
      id: "growth-loops-reverse-engineer-instacart",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineer Instacart's Growth Loop from Public Signals",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given only public app-store listings, help-center pages, and press coverage, map Instacart's growth loop into the lesson's four parts: input, action, output, re-investment.",
      companyId: "instacart",
      scenario:
        "You're a growth analyst pitching a loop-mapping exercise to your VP before your own team builds a referral feature. You want a real precedent, not a hypothetical, so you reverse-engineer Instacart's loop from what's publicly visible.",
      brief:
        "Using only Instacart's own app, referral landing pages, and public reporting (no internal data), reconstruct the loop diagram and identify which of the four steps is weakest based on visible evidence.",
      mode: "diagnostic",
      conceptsCovered: ["Mapping input, action, output, and re-investment"],
      steps: [
        {
          stepId: "step-1-map-the-four-parts",
          concept: "Mapping input, action, output, and re-investment",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook says a real loop must answer four questions without ever saying 'and then we run an ad': what triggers a cycle (input), what happens inside the product (action), what artifact gets produced (output), and how that artifact becomes a fresh input.",
          question:
            "Open Instacart's referral page and a recent order confirmation flow. What is the input, what is the action, what is the output, and what turns that output into the next input?",
          toolName: "Google Sheets",
          where: "A blank Google Sheet with four labeled columns: Input, Action, Output, Re-investment.",
          procedure: [
            "Open Instacart's public referral landing page (instacart.com/referral or the in-app 'Invite Friends' screen) and note the exact offer language",
            "Place an order (or read a recent order-confirmation email screenshot from a review site) and note every prompt shown after checkout",
            "Fill in the four-column sheet: Input = an existing user needing groceries, Action = they place an order and are shown the referral prompt, Output = a shareable referral code/link with a credit offer, Re-investment = the invitee redeems the code, becomes a new input",
            "Flag any step where the evidence is thin (e.g. you can't observe the actual redemption rate) and mark it 'unverifiable from public data'",
          ],
          outputSample:
            "INPUT: Existing customer places a grocery order\nACTION: Post-checkout screen surfaces 'Give $10, Get $10' referral prompt\nOUTPUT: Unique referral link + dual-sided credit\nRE-INVESTMENT: Invitee redeems link on first order, becomes a new INPUT next cycle\nWEAKEST LINK (visible evidence): Output-to-re-investment conversion is unverifiable publicly — no redemption-rate data disclosed",
          healthy:
            "All four boxes filled with real observed behavior, not internal assumptions, and the analyst names exactly which step lacks public evidence.",
          unhealthy:
            "Skipping straight from 'they have a referral program' to 'it's a loop' without ever writing what the re-investment step actually is.",
          interpret:
            "A referral program is only a loop if you can point to the specific mechanic that turns the output back into a new input — otherwise it's a one-time incentive with a loop-shaped label.",
          soWhat: [
            {
              symptom: "You can describe the referral offer but not the re-investment mechanic",
              action: "Go back to the product and trace exactly what the invitee sees and does after redeeming, not just the offer copy",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the four-column loop map and note evidence gaps",
            why: "Free, no account friction, easy to share with a manager",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page loop diagram (four labeled boxes) for Instacart, with the weakest, least-verifiable step explicitly flagged.",
      sampleOutput:
        "Rent the Runway loop map (excerpt)\n\nINPUT: Existing subscriber's box is due for return\nACTION: App prompts 'Add an item to your next shipment'\nOUTPUT: A styled outfit photo the subscriber posts or shares\nRE-INVESTMENT: Unverifiable publicly — no data on how many viewers convert from shared posts\nWEAKEST LINK: Output-to-re-investment, same gap pattern as most consumer subscription loops",
      successCriteria: [
        "All four loop steps are filled with specific, observed behavior (not guesses)",
        "Exactly one step is flagged as unverifiable from public data, with a reason",
      ],
      portfolioReady: true,
    },
    {
      id: "growth-loops-forecast-loop-factor",
      tier: "core",
      archetype: "forecast",
      title: "Forecast Chewy's Autoship Loop Factor Twelve Months Out",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three plausible loop-factor scenarios for a subscription-driven paid loop, calculate the loop factor for each and forecast the twelve-month user-count difference between a leaking loop and a compounding one.",
      companyId: "chewy",
      scenario:
        "You're modeling growth scenarios for Chewy's Autoship-funded acquisition loop ahead of a budget review. Leadership wants to see, in real numbers, what happens if the loop factor sits at 0.8 versus 1.15.",
      brief:
        "Using the lesson's loop-factor formula (conversion x yield x velocity), build a 12-month compounding forecast under three scenarios and identify the single lever most worth fixing first.",
      mode: "calibration",
      conceptsCovered: [
        "Calculating the loop factor from conversion, yield, and velocity",
        "Forecasting compounding growth from a loop factor above or below 1.0",
      ],
      steps: [
        {
          stepId: "step-1-calculate-loop-factor",
          concept: "Calculating the loop factor from conversion, yield, and velocity",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson defines loop factor as conversion rate x yield rate x loop velocity, multiplied together, with 1.0 as the break-even line between leaking and compounding.",
          question:
            "Given Autoship conversion 60%, referral-yield 25%, and redemption-velocity 55%, what is the loop factor, and is this loop leaking or compounding?",
          toolName: "Google Sheets",
          where: "A sheet with one row per scenario and columns for each rate plus a computed loop-factor cell.",
          procedure: [
            "Enter three scenario rows: Conservative (55% / 20% / 45%), Base (60% / 25% / 55%), Optimistic (65% / 30% / 65%)",
            "Multiply the three percentages in each row to get the loop factor",
            "Label each row leaking (<1.0), flat (=1.0), or compounding (>1.0)",
          ],
          outputSample:
            "SCENARIO      CONVERSION  YIELD  VELOCITY  LOOP FACTOR  STATUS\nConservative  55%         20%    45%       0.0495       Leaking\nBase          60%         25%    55%       0.0825       Leaking\nOptimistic    65%         30%    65%       0.127        Leaking (all below 1.0 pre-scaling)",
          healthy:
            "The analyst multiplies all three rates correctly and correctly labels every result below 1.0 as leaking, resisting the urge to round up.",
          unhealthy:
            "Averaging the three percentages instead of multiplying them, which inflates the loop factor and hides a leaking loop.",
          interpret:
            "Raw per-user rates on a referral loop are almost always well below 1.0 individually; the compounding case only appears once you model volume scaling across many concurrent cycles, not a single pass.",
          soWhat: [
            {
              symptom: "A single-pass loop factor looks tiny and discouraging",
              action: "Re-express the model as weekly cohorts stacking on top of each other, not one linear pass",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-12-months",
          concept: "Forecasting compounding growth from a loop factor above or below 1.0",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson's UpGrowth citation shows a loop starting at 20 users growing 10% week-over-week reaches thousands within twelve months without new spend, while a one-time campaign is dead after week one.",
          question:
            "Starting from 20,000 Autoship subscribers, project week-52 user counts at 10% weekly compounding versus flat 0% growth. What's the twelve-month gap?",
          toolName: "Google Sheets",
          where: "A new sheet tab with a 52-row weekly compounding formula.",
          procedure: [
            "Row 1: 20,000 users. Column A = week number, Column B = compounding formula =B(prev)*1.10",
            "Add a flat-growth column that stays at 20,000 for all 52 weeks as the funnel-only baseline",
            "Chart both lines and read off the week-52 values",
          ],
          outputSample:
            "Week 1:  20,000 (compounding) vs 20,000 (flat)\nWeek 26: ~247,000 (compounding) vs 20,000 (flat)\nWeek 52: ~3,041,000 (compounding) vs 20,000 (flat)\nGap at week 52: ~3,021,000 users, entirely from the loop, zero extra spend assumed",
          healthy:
            "The forecast shows the gap widening every week, not linearly, and the analyst notes this is illustrative math, not a guarantee real-world decay won't slow it.",
          unhealthy:
            "Presenting the week-52 number to leadership as a committed forecast rather than a best-case illustration of what compounding could do if the loop factor holds.",
          interpret:
            "The gap between a compounding loop and a flat funnel is not visible for months — it looks unremarkable through week 10, which is exactly why teams give up on loops too early.",
          soWhat: [
            {
              symptom: "Leadership wants to cut the loop investment after 8 weeks of unremarkable numbers",
              action: "Show the week-8 vs week-52 chart side by side to make the compounding curve's timing visible",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the loop-factor calculator and the 52-week compounding forecast",
            why: "Free, formula-driven, easy to chart and share",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Track real cohort-by-cohort loop velocity once the loop ships, instead of modeled estimates",
            why: "Cohort retention and behavioral-event tracking replace the spreadsheet's assumed rates with observed ones",
            required: false,
            fallback: "Google Sheets with manually logged weekly cohort counts",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Free spreadsheet modeling is sufficient for a forecast; a paid product-analytics tool only matters once the loop is live and you need real cohort data instead of assumptions.",
      },
      deliverable:
        "A 52-week compounding forecast comparing a leaking-to-compounding loop factor against a flat funnel baseline, with the single weakest rate flagged as the priority fix.",
      sampleOutput:
        "ThredUp resale-loop forecast (excerpt)\n\nBase case: 15,000 sellers, loop factor 0.09 per pass, scaled to +8%/week across concurrent cohorts\nWeek 12: ~37,800 sellers\nWeek 52: ~712,000 sellers (modeled)\nWeakest rate: yield (only 18% of sellers list a second batch) — flagged as the first experiment",
      successCriteria: [
        "Loop factor is calculated by multiplying, not averaging, the three rates",
        "The 52-week forecast correctly shows exponential divergence from the flat baseline",
        "One specific rate is identified as the priority lever, with a stated reason",
      ],
      portfolioReady: true,
    },
  ],
  "engagement-loops": [
    {
      id: "engagement-loops-reverse-engineer-thredup",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineer ThredUp's Trigger-Action-Reward-Investment Loop",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given only ThredUp's public app and email flows, map its engagement loop into the lesson's four Hooked Model stages and identify whether the investment stage is real or missing.",
      companyId: "thredup",
      scenario:
        "You're auditing consumer resale apps for engagement-loop patterns before your own team designs a retention feature. ThredUp is a strong test case because it depends on repeat sellers, not just repeat buyers.",
      brief:
        "Trace a seller's or buyer's real journey through ThredUp's app/emails and assign each moment to trigger, action, variable reward, or investment, then judge if the investment stage genuinely increases switching cost.",
      mode: "diagnostic",
      conceptsCovered: ["Mapping the four stages: trigger, action, variable reward, investment"],
      steps: [
        {
          stepId: "step-1-map-hooked-stages",
          concept: "Mapping the four stages: trigger, action, variable reward, investment",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's Hooked Model breakdown defines trigger (the prompt), action (the simplest behavior), variable reward (the partially unpredictable payoff), and investment (what the user puts in that raises the value of the next cycle).",
          question:
            "Sign up for ThredUp's marketing emails or open the app's seller flow. What triggers a return visit, what's the simplest action, what reward is shown, and what does the user leave behind afterward?",
          toolName: "Google Sheets",
          where: "A four-column sheet: Trigger, Action, Reward, Investment.",
          procedure: [
            "Note the trigger from a real ThredUp email or push notification screenshot ('Your bag sold!' / 'New arrivals in your size')",
            "Note the single simplest action the app asks for next (open the app, browse the 'For You' feed)",
            "Note the reward shown (a personalized feed, a payout notification, a discount)",
            "Note what the user invests afterward (listing more items, saving sizes/brands as preferences, leaving items in a bag)",
          ],
          outputSample:
            "TRIGGER: 'Your bag sold! You earned $12.40' notification\nACTION: Open app to view payout and browse for something to buy with it\nREWARD: Personalized 'For You' feed, unpredictable which items appear\nINVESTMENT: Saved size/brand preferences that sharpen next visit's feed\nJUDGMENT: Investment is real — preference data measurably changes what the next session shows",
          healthy:
            "The investment stage names a specific artifact (saved preferences, listed items) that provably changes a future session, not a vague 'they feel engaged.'",
          unhealthy:
            "Labeling 'the user opened the app again' as investment — that's just repeated action, not something left behind that raises future value.",
          interpret:
            "A loop only has an investment stage if you can point to a specific thing stored that changes what the next cycle looks like.",
          soWhat: [
            {
              symptom: "You can't name a specific stored artifact from the investment stage",
              action: "Re-check onboarding and settings screens for saved preferences, wishlists, or size profiles you missed",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the four-stage loop map from observed app/email behavior",
            why: "Free, quick to fill in during a live app walkthrough",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A four-stage loop map for ThredUp with an explicit judgment call on whether the investment stage is real or missing, and why.",
      sampleOutput:
        "Rent the Runway loop map (excerpt)\n\nTRIGGER: 'Your next shipment ships in 3 days, customize it now' email\nACTION: Open app, swap an item in the upcoming box\nREWARD: Preview photos of the swapped outfit, unpredictable styling combos\nINVESTMENT: Saved 'closet' of favorited styles that refines future recommendations\nJUDGMENT: Real investment — the saved closet is reused by the recommendation engine on the next visit",
      successCriteria: [
        "All four stages are filled with a specific observed moment, not a guess",
        "The investment stage is explicitly judged real or missing, with a named artifact as evidence",
      ],
      portfolioReady: true,
    },
    {
      id: "engagement-loops-forecast-investment-stage-churn",
      tier: "mini",
      archetype: "forecast",
      title: "Forecast the Churn Impact of Adding an Investment Stage",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a subscription company's current monthly churn rate and the lesson's cited 2-3x churn reduction for full-loop completers, forecast the retained-subscriber impact of shipping an investment-stage feature.",
      companyId: "rent-the-runway",
      scenario:
        "You're pitching Rent the Runway's retention team on building a 'saved closet' investment feature. You need a real before/after subscriber forecast, not just 'this should help retention.'",
      brief:
        "Using the lesson's cited churn-reduction stat for full-loop completers, model current monthly churn against a scenario where 40% of subscribers reach full-loop completion after the feature ships.",
      mode: "calibration",
      conceptsCovered: ["Loop completion rate as a predictor of retention"],
      steps: [
        {
          stepId: "step-1-forecast-churn-reduction",
          concept: "Loop completion rate as a predictor of retention",
          lessonAnchor: "step-6-measure-loop-health-with-three-metrics",
          theoryRecap:
            "The lesson states users who complete a full loop cycle (trigger, action, reward, investment) churn at 2-3x lower rates than those who don't, and that loop completion rate is one of the three health metrics worth tracking alongside frequency and cohort delta.",
          question:
            "Rent the Runway's current monthly subscriber churn sits at 8%, with 0% of subscribers completing a full loop today (no investment stage exists). If the new 'saved closet' feature gets 40% of subscribers to full-loop completion at a conservative 2x churn reduction, what's the blended monthly churn rate, and how many more subscribers are retained over 12 months on a 50,000-subscriber base?",
          toolName: "Google Sheets",
          where: "A sheet blending two subscriber segments: loop-completers and non-completers.",
          procedure: [
            "Segment 1 (60% of base, non-completers): churn stays at 8%/month",
            "Segment 2 (40% of base, loop-completers): churn drops to 4%/month (2x reduction, conservative end of the cited range)",
            "Compute blended monthly churn: (0.6 x 8%) + (0.4 x 4%) = weighted average",
            "Run a 12-month retained-subscriber count at blended churn vs the current flat 8% churn on 50,000 subscribers, and read off the gap",
          ],
          outputSample:
            "Blended monthly churn = (0.6 x 8%) + (0.4 x 4%) = 6.4%\nMonth 12 retained @ 8% churn (no feature): ~17,970 of 50,000\nMonth 12 retained @ 6.4% blended churn (feature shipped): ~22,960 of 50,000\n12-month gap: ~4,990 additional retained subscribers",
          healthy:
            "The forecast uses the conservative 2x end of the lesson's cited 2-3x range and states the 40% completion assumption explicitly as an assumption, not a guarantee.",
          unhealthy:
            "Applying the full 3x reduction to 100% of subscribers, which overstates the case and won't survive a skeptical finance review.",
          interpret:
            "Even a conservative, partial-adoption scenario produces a measurable retained-subscriber gap — the pitch doesn't need the optimistic case to be worth building.",
          soWhat: [
            {
              symptom: "Finance pushes back that 40% loop-completion is an unproven assumption",
              action: "Propose a 90-day pilot on a 10% subscriber cohort to measure actual completion rate before committing to the full build",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the blended-churn model and 12-month retained-subscriber forecast",
            why: "Free, formula-driven, sufficient for a pre-build business case",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Measure real loop-completion rate and cohort churn once the investment feature ships",
            why: "Retention and cohort-analysis views replace the spreadsheet's assumed completion rate with observed data",
            required: false,
            fallback: "Google Sheets with manually logged monthly cohort churn",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A blended-churn forecast model showing the 12-month retained-subscriber gap between shipping and not shipping an investment-stage feature, with assumptions stated explicitly.",
      sampleOutput:
        "Chewy Autoship pilot forecast (excerpt)\n\nCurrent churn: 6% monthly, 0% loop-completion (no investment stage)\nScenario: 35% reach full-loop completion at 2.5x churn reduction\nBlended churn: (0.65 x 6%) + (0.35 x 2.4%) = 4.74%\n12-month gap on 80,000 subscribers: ~6,300 additional retained",
      successCriteria: [
        "Uses the conservative end of the lesson's cited 2-3x churn-reduction range, stated explicitly",
        "Blended churn is calculated as a weighted average across the two segments, not a flat guess",
        "The 12-month retained-subscriber gap is computed and stated as a number, not a direction",
      ],
      portfolioReady: true,
    },
  ],

  "retention-cohorts": [
    {
      id: "retention-cohorts-cliff-diagnosis",
      tier: "mini",
      archetype: "audit",
      title: "Cliff, Slope, or Floor: Diagnosing a Broken Retention Curve",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real weekly cohort table for a SaaS product, identify which of the three retention zones (cliff, slope, floor) is broken and recommend the correct fix.",
      companyId: "freshworks",
      scenario:
        "You're a growth analyst at Freshworks reviewing a new self-serve add-on's first eight weeks of cohort data before the team commits next quarter's roadmap to a retention fix.",
      brief:
        "Read the cohort table, classify the drop-off by zone, and recommend the single highest-leverage fix.",
      mode: "diagnostic",
      conceptsCovered: ["The Retention Curve", "Building a Cohort Table"],
      steps: [
        {
          stepId: "step-1-zone-classification",
          concept: "The Retention Curve",
          lessonAnchor: "the-retention-curve",
          theoryRecap:
            "The lesson splits every retention curve into three zones: the cliff (Day 1-7, the largest absolute drop), the slope (Week 2-8, decelerating decay), and the floor (Week 8+, where the cohort stabilizes).",
          question:
            "This cohort loses 71% of users between Day 0 and Day 1, then decays slowly and predictably after that. Which zone is broken, and does that point at acquisition quality or onboarding?",
          toolName: "Google Sheets",
          where: "Import cohort-export.csv, freeze the header row, and chart Week 0 through Week 8 for each cohort as a line graph.",
          procedure: [
            "Import cohort-export.csv and freeze row 1",
            "Chart each cohort row as a line from Week 0 to Week 8",
            "Measure the percentage-point drop between each adjacent pair of columns",
            "Flag whichever single gap accounts for the largest share of total attrition",
          ],
          outputSample:
            "Freshworks add-on cohort, Week-over-week drop\nDay 0 -> Day 1:  -71 pts  (100% -> 29%)\nDay 1 -> Week 2: -6 pts   (29% -> 23%)\nWeek 2 -> Week 4: -3 pts  (23% -> 20%)\nWeek 4 -> Week 8: -1 pt   (20% -> 19%)",
          healthy:
            "The largest drop sits between Day 1 and Day 7 (the cliff), and the curve flattens into a stable floor by Week 8.",
          unhealthy:
            "A 71-point drop concentrated in the first 24 hours, with almost no further decay afterward, meaning the users who churn never experienced the product at all.",
          interpret:
            "When nearly all attrition happens before Day 1 and the remaining users retain well, the product itself is fine, the problem is who is arriving. This is an acquisition-quality signal, not an onboarding signal.",
          soWhat: [
            {
              symptom: "71% of a cohort disappears before completing a single session",
              action: "Audit the acquisition source mix for this cohort before touching onboarding copy or flow",
              effort: "30 min",
            },
            {
              symptom: "The post-Day-1 slope is already shallow and the floor is stable",
              action: "Do not fund an onboarding redesign; it is not where the users are being lost",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Chart the cohort table and measure drop-off between periods",
            why: "No account friction, sufficient for an 8-week, single-product cohort table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Segment the same cohort by acquisition source to confirm the diagnosis",
            why: "Built-in retention reports let you re-run the same cohort split by channel without a manual export",
            required: false,
            fallback: "Google Sheets with a manually tagged acquisition-source column",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page diagnosis memo naming the broken zone (cliff, slope, or floor), the evidence for it, and the single highest-leverage recommended fix.",
      sampleOutput:
        "Mailchimp automation add-on, cohort diagnosis (excerpt)\n\nZONE: Slope (Week 2-8), not the cliff\nDay 0->Day 1 drop: -18 pts (mild, expected)\nWeek 2->Week 8 drop: -34 pts (broken)\n\nDIAGNOSIS: Users complete first setup but abandon before finding a second reason to return. This is an onboarding depth problem, not an acquisition problem.\nRECOMMENDATION: Build a Week-2 email nudge toward the second core action, not a paid-traffic audit.",
      successCriteria: [
        "Correctly identifies which zone (cliff, slope, or floor) accounts for most of the attrition",
        "Distinguishes an acquisition-quality problem from an onboarding problem based on where the drop concentrates",
        "Recommends one action, not a scattershot list",
      ],
      portfolioReady: true,
    },
    {
      id: "retention-cohorts-health-score-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Week-1 Account Health Score",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a raw table of Week-1 user activity, build a simple weighted health score from the lesson's five leading indicators and flag which accounts need proactive outreach.",
      companyId: "klaviyo",
      scenario:
        "You're a lifecycle marketer at Klaviyo. The support team wants a list of at-risk new accounts to reach out to before Week 2, not after churn has already happened.",
      brief:
        "Turn five raw leading-indicator columns into one weighted score, then set a threshold for proactive outreach.",
      mode: "build",
      conceptsCovered: ["Leading Indicators to Track"],
      steps: [
        {
          stepId: "step-1-build-the-score",
          concept: "Leading Indicators to Track",
          lessonAnchor: "leading-indicators-to-track",
          theoryRecap:
            "The lesson lists five leading indicators that predict retention before the curve turns down: time to first value action, features adopted in Week 1, session frequency in Days 2-7, support tickets in Week 1, and invite/share actions.",
          question:
            "Given raw Week-1 data for 12 new accounts across these five columns, how do you combine them into a single score instead of eyeballing five separate numbers per account?",
          toolName: "Google Sheets",
          where: "Build a weighted-sum formula column next to the raw week-1-activity.csv import.",
          procedure: [
            "Import week-1-activity.csv with the five raw indicator columns",
            "Normalize each column to a 0-3 scale (fast time-to-value = 3, slow = 0, etc.)",
            "Apply weights: time-to-value 30%, features adopted 30%, session frequency 25%, support tickets -10%, invite action +15%",
            "Sum into one health score per account and sort ascending",
          ],
          outputSample:
            "Klaviyo new-account health score (excerpt)\nAccount    TTV  Features  Sessions  Tickets  Invite  SCORE\nAcct 118   0.9   1         2         3        0       1.4  <- flag\nAcct 204   2.8   3         3         0        1       2.9\nAcct 331   1.2   1         1         2        0       1.1  <- flag",
          healthy:
            "A small number of accounts land clearly below the threshold, giving support a short, prioritized outreach list instead of all new signups.",
          unhealthy:
            "Every account scores in the middle band, meaning the weights or scale aren't discriminating between healthy and at-risk behavior.",
          interpret:
            "The score's value isn't the number itself, it's whether it separates accounts enough to make outreach worth prioritizing over just calling everyone.",
          soWhat: [
            {
              symptom: "Two accounts score below 1.5 out of a possible 3",
              action: "Route those two accounts to customer success for a Week-2 check-in call",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build and weight the composite health score",
            why: "A formula-based weighted sum needs no analytics platform for a 12-account pilot",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Automate the same health score across the full account base as a saved cohort",
            why: "Once the weighting is validated on a small sample, a product analytics tool can compute it continuously without a manual export",
            required: false,
            fallback: "Google Sheets, re-run weekly on a fresh export",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A weighted health-score spreadsheet with a defined outreach threshold and the list of accounts below it.",
      sampleOutput:
        "Freshworks trial cohort, Week-1 health score (excerpt)\n\nAcct 07: TTV 3.0, Features 2, Sessions 3, Tickets 0, Invite 1 -> SCORE 2.8 (healthy)\nAcct 15: TTV 0.5, Features 0, Sessions 1, Tickets 4, Invite 0 -> SCORE 0.6 (FLAG: outreach)\n\nThreshold set at 1.5. 2 of 14 trial accounts flagged for proactive CS outreach before Week 2.",
      successCriteria: [
        "All five leading indicators from the lesson are represented in the score, not just one or two",
        "Weights are stated explicitly, not hidden inside an unexplained formula",
        "A clear numeric threshold separates accounts needing outreach from healthy ones",
      ],
      portfolioReady: true,
    },
  ],
  "referral-programs": [
    {
      id: "referral-funnel-drop-off-audit",
      tier: "core",
      archetype: "audit",
      title: "Find the Break: Auditing a Referral Program's Funnel Data",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given real funnel-stage numbers for a live referral program, identify which of the two highest-failure nodes (the share moment or tracking/attribution) is actually broken, and separate that from a reward-design problem.",
      companyId: "mailchimp",
      scenario:
        "You're a growth marketer at Mailchimp. The referral program has a healthy volume of eligible users but a share rate and conversion rate the team suspects are underperforming, and leadership wants the actual bottleneck, not a guess.",
      brief:
        "Walk the funnel stage by stage against the lesson's two highest-failure nodes and recommend a fix scoped to the real bottleneck, not the reward.",
      mode: "diagnostic",
      conceptsCovered: ["The Referral Funnel", "Reward Timing"],
      steps: [
        {
          stepId: "step-1-funnel-node-diagnosis",
          concept: "The Referral Funnel",
          lessonAnchor: "the-referral-funnel",
          theoryRecap:
            "The lesson's funnel diagram identifies two highest-failure nodes: the share moment never surfacing, and tracking failing on mobile (particularly iOS Safari stripping link decoration). Both are engineering problems, not incentive problems.",
          question:
            "Eligible users to share-prompt-seen conversion is 91%, but share-prompt-seen to link-shared is only 4%. Click-to-signup conversion, when it's tracked, is a healthy 22%. Which node is actually broken?",
          toolName: "Google Sheets",
          where: "Import referral-funnel-export.csv and compute the conversion rate between each adjacent funnel stage.",
          procedure: [
            "Import referral-funnel-export.csv with raw counts per stage",
            "Compute stage-to-stage conversion rate for all 6 transitions in the funnel",
            "Compare the two lowest conversion rates against the lesson's two highest-failure nodes (share moment, tracking)",
            "Rule out reward size as the cause if the drop happens before the reward is ever seen",
          ],
          outputSample:
            "Mailchimp referral funnel, stage conversion (excerpt)\nEligible -> Prompt seen:      91%\nPrompt seen -> Link shared:    4%  <- broken\nLink shared -> Friend clicks: 68%\nClick -> Signup:              22%\nSignup -> Tracked correctly:  95%",
          healthy:
            "Prompt-seen to link-shared conversion sits in the 15-30% range typical of an unburied share moment.",
          unhealthy:
            "A 4% prompt-seen to link-shared rate, while every stage after the share itself converts normally.",
          interpret:
            "The drop happens at the share action itself, before any reward or tracking logic runs, so this is a share-moment placement or friction problem, not a reward-size or attribution problem.",
          soWhat: [
            {
              symptom: "91% see the prompt but only 4% act on it",
              action: "Test moving the share prompt to fire immediately after a completed campaign send, not from a settings-page link",
              effort: "half day",
            },
            {
              symptom: "Team's first instinct is to raise the reward amount",
              action: "Do not touch the reward until the share-moment placement test has run, the drop happens before the reward is seen",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-reward-timing-check",
          concept: "Reward Timing",
          lessonAnchor: "reward-timing",
          theoryRecap:
            "Rewards delivered immediately after the referred friend's first action outperform delayed rewards by 2.6x in repeat referral behavior (Extole, 2023), because the immediate reward confirms the system works.",
          question:
            "Tracked signups convert to reward issuance in 95% of cases, but the reward currently pays out on a 14-day delay after signup. Repeat-referral rate among rewarded users is only 9%. Is reward timing a secondary issue worth fixing here?",
          toolName: "Google Sheets",
          where: "Filter referral-funnel-export.csv to rewarded users only and compute repeat-share rate.",
          procedure: [
            "Filter to users who received a reward",
            "Compute what percentage of rewarded users share a second referral link within 30 days",
            "Compare against the lesson's 2.6x immediate-vs-delayed benchmark",
          ],
          outputSample:
            "Rewarded users, repeat-share behavior\nCurrent (14-day delayed reward): 9% share again within 30 days\nExtole benchmark (immediate reward): ~2.6x higher repeat rate expected",
          healthy: "Repeat-share rate among rewarded users tracks close to the immediate-reward benchmark once delivery is fast.",
          unhealthy: "A 14-day gap between the referred signup and the reward, with a repeat-share rate well below benchmark.",
          interpret:
            "Reward timing is a real, secondary lever here, worth fixing after the share-moment placement, not instead of it.",
          soWhat: [
            {
              symptom: "Rewards pay out 14 days after the qualifying signup",
              action: "Move reward issuance to fire immediately on qualifying signup confirmation, as a second-priority fix behind the share-moment test",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compute stage-to-stage funnel conversion rates from the raw export",
            why: "A 6-stage funnel with simple ratios needs no dedicated analytics tool to diagnose",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Google Analytics 4",
            role: "Build a persistent funnel-exploration report so the diagnosis doesn't require a manual CSV export every time",
            why: "Once the broken node is confirmed, a standing funnel report catches regressions after the fix ships",
            required: false,
            fallback: "Re-run the Google Sheets funnel export weekly",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A funnel-stage conversion table with the broken node identified, evidence for why it's the share moment (not the reward or tracking), and a prioritized two-item fix list.",
      sampleOutput:
        "Freshworks partner-referral funnel, diagnosis (excerpt)\n\nEligible -> Prompt seen: 88%\nPrompt seen -> Link shared: 3% <- broken node\nLink shared -> Click: 71%\nClick -> Signup: 19%\n\nDIAGNOSIS: Share moment is buried in account settings, 3 clicks deep. Not a reward or tracking issue.\nFIX 1 (this week): Surface share prompt in the post-onboarding success screen.\nFIX 2 (after Fix 1 ships): Move reward payout from 10-day delay to immediate.",
      successCriteria: [
        "Computes conversion rate for every funnel stage, not just the two suspected weak points",
        "Correctly rules out reward size as the cause when the drop happens before the reward is seen",
        "Separates the primary fix (share-moment placement) from the secondary fix (reward timing) and orders them",
      ],
      portfolioReady: true,
    },
    {
      id: "referral-program-design-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Design a Referral Program From Scratch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a product profile and unit economics, build a complete referral program design: share moment, reward structure, and the two mobile-tracking safeguards the lesson identifies as the most common failure points.",
      companyId: "zendesk",
      scenario:
        "You're a growth PM at Zendesk scoping a referral program for a new self-serve support-desk tier. Product, engineering, and finance all need a single design doc before anyone writes a ticket.",
      brief:
        "Identify the real share moment, pick a reward structure that matches the product's margin profile, and specify the mobile-tracking safeguards up front.",
      mode: "build",
      conceptsCovered: ["Step 1: Identify the Share Moment", "Step 2: Choose Your Reward Structure"],
      steps: [
        {
          stepId: "step-1-find-the-share-moment",
          concept: "Step 1: Identify the Share Moment",
          lessonAnchor: "step-1-identify-the-share-moment",
          theoryRecap:
            "The share moment is the point in the product experience when a user is most likely to want to tell someone else, usually right after first value delivery, not buried in account settings.",
          question:
            "For a self-serve support-desk product, is the strongest share moment right after signup, or right after a support team resolves its first ticket queue backlog?",
          toolName: "Google Sheets",
          where: "List candidate trigger events with their timing and estimated 'felt value' rating.",
          procedure: [
            "List every candidate trigger event in the product's first-week journey",
            "Rate each on proximity to a genuine value moment, not just proximity to signup",
            "Select the single highest-rated event as the share-prompt trigger",
          ],
          outputSample:
            "Candidate share moments, Zendesk-style support tier\nAccount created: felt value LOW (nothing accomplished yet)\nFirst ticket resolved: felt value MEDIUM\nFirst week's ticket backlog cleared to zero: felt value HIGH  <- selected",
          healthy:
            "The chosen moment sits right after a support team can see visible, felt proof the product worked (an empty queue), not at account creation.",
          unhealthy:
            "Defaulting to 'right after signup' because it's the easiest to build, when no value has been delivered yet.",
          interpret:
            "The share moment has to coincide with a real 'this worked' feeling, matching Dropbox's post-sync and Airbnb's post-checkout pattern from the lesson.",
          soWhat: [
            {
              symptom: "The only share prompt currently fires at account creation",
              action: "Move the primary share trigger to the first-week backlog-cleared milestone",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-pick-the-reward",
          concept: "Step 2: Choose Your Reward Structure",
          lessonAnchor: "step-2-choose-your-reward-structure",
          theoryRecap:
            "The lesson matches reward type to unit economics: high-margin SaaS should use product credits or feature unlocks (zero marginal cost, high perceived value), not cash.",
          question:
            "This is a high-margin SaaS support tier with near-zero marginal cost per seat. Cash reward or product credit, and how large does it need to be to overcome social-sharing friction?",
          toolName: "Google Sheets",
          where: "Model reward cost against the lesson's 10-15% of referred-product-value benchmark.",
          procedure: [
            "Confirm the product is high-margin SaaS, ruling out cash per the lesson's matrix",
            "Model a product-credit reward (extra seats or a feature unlock) at 10-15% of monthly plan value for both referrer and new user",
            "Check the two-sided structure against the lesson's 3-4x gross-referred-revenue outperformance versus one-sided",
          ],
          outputSample:
            "Zendesk-tier reward model\nMonthly plan value: $49/seat\nReward: 1 free month, both referrer and new user (two-sided, ~100% of one month, above the 10-15% floor)\nMarginal cost to company: ~$0 (unused seat capacity)",
          healthy:
            "A two-sided, product-credit reward sized well above the 10-15% floor, at zero real marginal cost to the company.",
          unhealthy:
            "A one-sided $10 cash reward on a $49/month product, below the value threshold and mismatched to a high-margin SaaS product.",
          interpret:
            "Because the product has near-zero marginal cost per seat, the company can afford a reward that feels generous to the user without a real cash outlay, this is the alignment the lesson's Dropbox example describes.",
          soWhat: [
            {
              symptom: "Finance is worried about reward cost before seeing the marginal-cost model",
              action: "Present the product-credit-vs-cash marginal cost comparison before any reward-size negotiation",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Model candidate share moments and reward cost against unit economics",
            why: "The design decisions here are comparative scoring and simple margin math, not analytics",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Instrument the chosen share moment and reward-redemption events once the design ships",
            why: "Tracking share rate and redemption rate post-launch requires event analytics, not just the design-phase spreadsheet",
            required: false,
            fallback: "Google Sheets, manually logging weekly counts pulled from the database",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page referral program design doc: chosen share moment with rationale, reward structure with cost model, and the mobile-tracking safeguard requirement for engineering.",
      sampleOutput:
        "Klaviyo referral design doc (excerpt)\n\nSHARE MOMENT: First automated flow goes live and sends its first message (not account creation)\nREWARD: Two-sided, 1 free month of current plan tier, ~14% of annual plan value per side\nTRACKING REQUIREMENT: First-party cookie fallback for iOS Safari link-decoration stripping, required before launch, not a post-launch fix",
      successCriteria: [
        "Chosen share moment is tied to a felt-value milestone, not just signup",
        "Reward structure explicitly matches the product's margin profile per the lesson's matrix",
        "Design doc specifies the mobile-tracking safeguard before launch, not as a follow-up ticket",
      ],
      portfolioReady: true,
      stretch:
        "Add a fraud-control section (device fingerprinting, email domain checks, reward delay) before presenting the design to engineering.",
    },
  ],

  "viral-coefficient": [
    {
      id: "viral-coefficient-k-factor-calculator",
      tier: "mini",
      archetype: "forecast",
      title: "Run the Numbers: Calculating and Forecasting K-Factor",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real month of invite and signup data, calculate K-factor, benchmark it against B2B SaaS norms, and forecast whether the referral loop is worth continued investment.",
      companyId: "squarespace",
      scenario:
        "You're the growth analyst at Squarespace reviewing the first full month of the 'Refer a friend' program (site credit for the referrer, a discount for the referee) before the team decides whether to keep funding it.",
      brief:
        "Pull the raw counts, compute i, c, and K, compare against the B2B SaaS benchmark, and forecast three months of cohort compounding at the current rate.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating K-factor from invites and conversion",
        "Forecasting cohort compounding from K and cycle time",
      ],
      steps: [
        {
          stepId: "step-1-calculate-k",
          concept: "Calculating K-factor from invites and conversion",
          lessonAnchor: "how-to-calculate-your-k-factor",
          theoryRecap:
            "K = i x c, where i is invites sent per active user and c is the fraction of those invites that convert into new active users.",
          question:
            "Last month Squarespace's referral program had 12,400 active users, those users sent 3,100 referral links, and 186 of those links converted to new paid signups. What is K, and how does it compare to the 0.1-0.25 B2B SaaS benchmark?",
          toolName: "Google Sheets",
          where: "Import the monthly referral export (active users, links sent, attributed signups) and build the formula in three columns.",
          procedure: [
            "Compute i = links sent / active users = 3,100 / 12,400 = 0.25 invites per user",
            "Compute c = attributed signups / links sent = 186 / 3,100 = 0.06 conversion rate",
            "Compute K = i x c = 0.25 x 0.06 = 0.015",
            "Compare 0.015 against the 0.1-0.25 B2B SaaS median from the lesson's benchmark table",
          ],
          outputSample:
            "Squarespace referral program, Month 1\n  Active users: 12,400\n  Links sent: 3,100  ->  i = 0.25\n  Attributed signups: 186  ->  c = 0.06\n  K = 0.015 (target range: 0.1-0.25)",
          healthy: "K lands inside or above the 0.1-0.25 B2B SaaS benchmark range, meaning the loop is already contributing meaningfully to net-new signups.",
          unhealthy: "K of 0.015 sits an order of magnitude below the benchmark, meaning the loop is currently a rounding error next to paid and organic acquisition.",
          interpret:
            "At K = 0.015, i (invite volume) is close to healthy but c (conversion) is the bottleneck; a five-fold improvement in landing page conversion alone would put K near the benchmark floor without touching invite volume at all.",
          soWhat: [
            {
              symptom: "K is far below benchmark and the team is debating killing the program",
              action: "Isolate whether i or c is the weaker variable before cutting the program; a c-side fix is usually cheaper than growing invite volume",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-compounding",
          concept: "Forecasting cohort compounding from K and cycle time",
          lessonAnchor: "levers-for-improving-k",
          theoryRecap:
            "K interacts with viral cycle time: the same K compounds faster with a short cycle time (days) than a long one (weeks), because each cohort produces its next cohort sooner.",
          question:
            "If Squarespace fixes the recipient landing page and lifts K from 0.015 to 0.06 with an average 20-day cycle time, how many of the next quarter's new signups come from the loop itself rather than direct acquisition, assuming 12,400 active users stays constant as the seed cohort?",
          toolName: "Google Sheets",
          where: "Build a simple cohort table: each row is one 20-day cycle, multiply the prior cycle's new users by K to get the next cycle's referral-driven users.",
          procedure: [
            "Cycle 1: 12,400 seed users x 0.06 = 744 referral-driven signups",
            "Cycle 2: 744 x 0.06 = 45 additional signups",
            "Cycle 3 (roughly one quarter at a 20-day cycle): 45 x 0.06 = 3 additional signups",
            "Sum the three cycles: 744 + 45 + 3 = 792 signups over the quarter attributable to the loop",
          ],
          outputSample:
            "Forecast at K = 0.06, 20-day cycle, one quarter (~4-5 cycles)\n  Cycle 1: 744 signups\n  Cycle 2: 45 signups\n  Cycle 3: 3 signups\n  Quarter total: ~792 signups, decaying fast because K is still below 1",
          healthy: "The team treats 792 signups as a real, incremental, near-zero-cost acquisition channel worth the landing page investment.",
          unhealthy: "The team expects K = 0.06 to produce exponential growth on its own; below K = 1, the loop always decays toward zero without a fresh seed cohort.",
          interpret:
            "Below K = 1, a viral loop is a multiplier on other acquisition channels, not a replacement for them; the forecast's value is proving the landing page fix pays for itself, not promising runaway growth.",
          soWhat: [
            {
              symptom: "Leadership expects the referral fix alone to replace paid acquisition",
              action: "Present the decaying-cycle forecast table before the K improvement ships, so the win is measured against the right expectation",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compute i, c, K, and the cohort compounding forecast",
            why: "No account friction, formulas are transparent to a non-technical stakeholder reviewing the numbers",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page K-factor readout: current i, c, K, benchmark comparison, and a three-cycle compounding forecast for the proposed fix.",
      sampleOutput:
        "Snowflake partner-referral loop, Q2 readout (excerpt)\n\nCurrent state: i = 0.18, c = 0.09, K = 0.016 (below 0.1-0.25 benchmark)\nProposed fix: personalize the recipient landing page to the referring account's use case\nForecast at K = 0.05: Cycle 1 adds 410 signups, Cycle 2 adds 20, Cycle 3 adds 1\nRecommendation: fund the landing page fix; it pays back inside one quarter even without hitting K = 1",
      successCriteria: [
        "Correctly computes i, c, and K from the raw counts",
        "Compares K against the stated B2B SaaS benchmark range",
        "Builds a decaying multi-cycle forecast rather than a single-period estimate",
      ],
      portfolioReady: true,
    },
    {
      id: "referral-incentive-and-landing-page-audit",
      tier: "mini",
      archetype: "audit",
      title: "One-Sided, Two-Sided, or Broken: Auditing a Referral Program's Weak Link",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit a live referral program's incentive structure and recipient landing page against the lesson's two highest-leverage levers, and recommend which to fix first.",
      companyId: "firstcry-brainbees",
      scenario:
        "FirstCry's referral program currently gives only the referring parent a discount code; the friend who signs up gets nothing extra beyond the normal new-customer offer. Growth wants a recommendation before the next planning cycle.",
      brief:
        "Score the current program against the two-sided-incentive and recipient-landing-page findings from the lesson, and recommend the single highest-leverage fix.",
      mode: "calibration",
      conceptsCovered: [
        "Two-sided incentives outperform one-sided incentives",
        "Recipient landing page conversion is usually the highest-leverage fix",
      ],
      steps: [
        {
          stepId: "step-1-audit-incentive-structure",
          concept: "Two-sided incentives outperform one-sided incentives",
          lessonAnchor: "dropbox-the-referral-program-that-defined-the-category",
          theoryRecap:
            "Dropbox's two-sided program (both sender and recipient got 500MB) drove a K of 1.225 and scaled Dropbox from 100,000 to 4,000,000 users in 15 months; ReferralCandy's meta-analysis of 500+ programs found two-sided incentives produce 3x higher participation than sender-only rewards.",
          question:
            "FirstCry's program gives the referrer a Rs.300 discount and the referee nothing beyond the standard new-user offer. Sender participation (the referrer share rate) is 8%. Using the 3x figure, what participation rate would a genuinely two-sided version realistically target, and is that alone enough to fix the loop?",
          toolName: "Google Sheets",
          where: "Log the current incentive structure and the ReferralCandy comparison side by side in a two-column audit sheet.",
          procedure: [
            "Record the current structure: referrer gets Rs.300, referee gets nothing extra",
            "Apply the 3x participation multiplier: 8% x 3 = an estimated 24% participation rate under a two-sided structure",
            "Flag that participation (i) is only half of K; note that conversion (c) still needs a separate audit",
          ],
          outputSample:
            "Current: one-sided, Rs.300 to referrer only, 8% participation\nProjected: two-sided, matching Rs.300 credit to referee, ~24% participation (3x ReferralCandy benchmark)\nOpen question: participation lift alone doesn't tell us what happens to conversion on the recipient side",
          healthy: "The team recognizes a participation lift on i still needs a c-side check before declaring the fix complete.",
          unhealthy: "The team ships the two-sided incentive and assumes K triples, without checking whether the recipient landing page converts those extra invites.",
          interpret:
            "A one-sided incentive is a real, fixable gap, but it only raises i; it says nothing about whether more invited friends actually convert once they click through.",
          soWhat: [
            {
              symptom: "Leadership wants to greenlight the two-sided incentive as the whole fix",
              action: "Pair the incentive change with a recipient landing page review before calling the project done",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-audit-recipient-page",
          concept: "Recipient landing page conversion is usually the highest-leverage fix",
          lessonAnchor: "why-k-factor-matters-more-than-referral-rate-alone",
          theoryRecap:
            "Redpoint's 2024 benchmark found referral landing page conversion varies 3-10x across comparable SaaS products, while sender participation only varies 1.5-2x; the recipient page is usually the bigger lever, not the sender incentive.",
          question:
            "FirstCry's referral link currently sends every recipient to the generic homepage, not a page mentioning the friend who referred them or the specific discount. Given the Redpoint finding, which of the two fixes (two-sided incentive vs. a personalized recipient page) should be built first?",
          toolName: "Google Sheets",
          where: "Add a third row to the audit sheet comparing the expected variance range of each fix.",
          procedure: [
            "Note sender-side variance ceiling: roughly 1.5-2x from incentive changes",
            "Note recipient-page variance ceiling: roughly 3-10x from landing page personalization",
            "Recommend building the personalized recipient page first, then layering the two-sided incentive on top",
          ],
          outputSample:
            "Fix A (two-sided incentive): expected variance ceiling ~1.5-2x on participation\nFix B (personalized recipient page): expected variance ceiling ~3-10x on conversion\nRecommendation: ship Fix B first, it has the larger addressable range and doesn't require a discount budget change to test",
          healthy: "The recommendation sequences the higher-ceiling, lower-cost fix (the landing page) ahead of the incentive change that requires a finance sign-off.",
          unhealthy: "The team defaults to the incentive change first because it's the more visible, easier-to-explain fix, even though the data says the page has more headroom.",
          interpret:
            "When two fixes compete for one planning cycle, the one with the wider verified variance range and the smaller budget ask should usually go first.",
          soWhat: [
            {
              symptom: "Two valid fixes are competing for the same sprint",
              action: "Sequence by variance ceiling and approval friction, not by which fix is easier to describe in a meeting",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log the incentive audit and the two-fix comparison",
            why: "Fast, shareable, no setup needed for a one-page recommendation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page recommendation memo naming the highest-leverage fix, with the supporting variance comparison.",
      sampleOutput:
        "Squarespace referral audit (excerpt)\n\nCurrent: one-sided credit, generic recipient landing page\nFix A ceiling: ~1.8x (two-sided incentive)\nFix B ceiling: ~6x (personalized recipient page showing the referrer's plan tier)\nRecommendation: build Fix B this sprint; revisit the incentive structure next quarter once conversion data confirms the page fix worked",
      successCriteria: [
        "Correctly applies the ReferralCandy 3x figure to the current participation rate",
        "Correctly compares the two fixes' variance ceilings from the lesson's Redpoint data",
        "Recommends a single sequenced fix, not both simultaneously",
      ],
      portfolioReady: true,
    },
  ],
  "ice-rice-prioritization": [
    {
      id: "ice-backlog-calibration-sprint",
      tier: "mini",
      archetype: "audit",
      title: "Score the Backlog: An ICE Calibration Sprint",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Score a real 8-idea growth backlog with ICE, then audit each Confidence score against the evidence actually cited for it before finalizing the rank order.",
      companyId: "snowflake",
      scenario:
        "You're the growth marketer at Snowflake heading into a 45-minute backlog session with a designer and an engineer. Eight experiment ideas need an ICE score before anyone commits a week of work.",
      brief:
        "Apply the lesson's ICE scales, then flag and downgrade any Confidence score that isn't backed by a prior test or a cited benchmark.",
      mode: "calibration",
      conceptsCovered: [
        "ICE = Impact x Confidence x Ease",
        "Confidence must be evidence-based, not gut feel",
      ],
      steps: [
        {
          stepId: "step-1-score-ice",
          concept: "ICE = Impact x Confidence x Ease",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "ICE scores each idea 1-10 on Impact, Confidence, and Ease, then multiplies the three for a single rank-order number; it's fast because it skips Reach, which makes it best for ideas you can ship in under a week.",
          question:
            "Idea: 'Add social proof (customer logos) to the free-trial signup page.' The team scores Impact 6 (a plausible but unproven 5-10% lift), Confidence 7 (a similar test at a comparable SaaS company showed a real lift), Ease 9 (a one-day design change, no engineering). What is the ICE score, and where does it likely rank against a 'redesign the entire trial flow' idea scored Impact 9, Confidence 4, Ease 2?",
          toolName: "Google Sheets",
          where: "Build an 8-row ICE table with Impact, Confidence, Ease, and a formula column multiplying the three.",
          procedure: [
            "Social proof idea: 6 x 7 x 9 = 378",
            "Trial flow redesign: 9 x 4 x 2 = 72",
            "Sort the table descending by score; the social proof idea ranks well above the redesign despite the redesign's higher Impact score",
          ],
          outputSample:
            "ICE backlog (excerpt, sorted)\n  1. Add social proof to trial signup      6 x 7 x 9 = 378\n  2. Shorten trial signup form              7 x 6 x 8 = 336\n  ...\n  8. Redesign entire trial flow             9 x 4 x 2 = 72",
          healthy: "Low-Ease, low-Confidence big bets naturally sink to the bottom of a fast-lane ICE list, which is correct: they belong in a separate roadmap conversation, not this week's sprint.",
          unhealthy: "The team overrides the score to run the trial flow redesign anyway because it 'feels bigger,' defeating the purpose of scoring at all.",
          interpret:
            "ICE is deliberately blunt: a high-Impact idea with low Ease and low Confidence should lose to a smaller, well-evidenced, cheap-to-ship idea in a fast-lane backlog, that's the tool working as designed.",
          soWhat: [
            {
              symptom: "A big, exciting idea scores low and someone wants to override the ranking",
              action: "Let it rank low for the ICE fast-lane sprint, and route it to a RICE-based roadmap review instead",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-calibrate-confidence",
          concept: "Confidence must be evidence-based, not gut feel",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Inflating Confidence to win the argument corrupts the whole backlog; if you can't cite a prior test, an industry benchmark, or qualitative evidence, Confidence belongs below 60%, or below 6 on the 1-10 ICE scale.",
          question:
            "Two backlog rows both have Confidence 8. Row A cites 'a similar social proof test that lifted conversion 12% at a comparable SaaS company, per a public case study.' Row B cites 'the whole team feels good about this one.' Which Confidence score should be downgraded, and to roughly what value?",
          toolName: "Google Sheets",
          where: "Add a 'Confidence evidence' column next to the ICE table and require one sentence of citation per row.",
          procedure: [
            "Row A: keep Confidence at 8, cited external benchmark supports it",
            "Row B: downgrade Confidence to 3-4, no cited test or benchmark exists",
            "Recalculate Row B's ICE score with the corrected Confidence and re-sort the backlog",
          ],
          outputSample:
            "Row A: Impact 6, Confidence 8 (cited case study), Ease 8 -> 384\nRow B, before: Impact 7, Confidence 8 (no citation), Ease 7 -> 392\nRow B, after correction: Impact 7, Confidence 3, Ease 7 -> 147, drops from rank 1 to rank 6",
          healthy: "The corrected backlog moves the uncited idea down several ranks, and it gets routed to a quick research step instead of the top of the sprint.",
          unhealthy: "The uncited idea stays at Confidence 8 because downgrading it would mean losing the argument in the room, which is exactly the score inflation the lesson warns about.",
          interpret:
            "A one-sentence citation requirement next to every Confidence score is a cheap, mechanical way to catch inflation before it corrupts the whole backlog's rank order.",
          soWhat: [
            {
              symptom: "A Confidence score of 8+ has no citation attached",
              action: "Downgrade it to 3-4 and route the idea to a research step (interview, teardown, or survey) before it competes for a sprint slot",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the ICE scoring table and the Confidence evidence audit column",
            why: "Fast enough to fill live in a 45-minute backlog session with the whole team watching",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A ranked ICE backlog of 8 ideas with a Confidence-evidence column, and a corrected rank order after the calibration pass.",
      sampleOutput:
        "Robinhood growth backlog, ICE pass (excerpt)\n\n1. Simplify the deposit confirmation screen   8 x 8 x 8 = 512 (cited: prior A/B test)\n2. Add referral status to the home feed        7 x 6 x 8 = 336 (cited: comparable fintech benchmark)\n...\n6. Gamify the watchlist (downgraded)           6 x 3 x 6 = 108, was 288 before Confidence correction",
      successCriteria: [
        "Correctly computes ICE scores for all 8 backlog rows",
        "Identifies at least one uncited Confidence score and downgrades it with a stated new value",
        "Re-sorts the backlog after the correction and shows the resulting rank change",
      ],
      portfolioReady: true,
    },
    {
      id: "rice-reach-from-analytics-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Reach Isn't a Guess: Scoring a Roadmap with Real RICE Numbers",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Score three competing roadmap features with RICE using real analytics-sourced Reach numbers, in person-weeks Effort, and forecast which one wins an engineering quarter.",
      companyId: "robinhood",
      scenario:
        "Robinhood's product team has one engineering quarter and three candidate features: a power-user charting tool, an onboarding simplification, and a settings redesign. Reach must come from GA4, not memory.",
      brief:
        "Pull real 90-day Reach numbers for each surface, score all three with RICE, and forecast which feature the data supports shipping first.",
      mode: "diagnostic",
      conceptsCovered: [
        "RICE = (Reach x Impact x Confidence) / Effort",
        "Effort must be scored in person-weeks, not days",
      ],
      steps: [
        {
          stepId: "step-1-pull-reach-and-score",
          concept: "RICE = (Reach x Impact x Confidence) / Effort",
          lessonAnchor: "step-4-pull-reach-from-real-analytics",
          theoryRecap:
            "The most common RICE mistake is estimating Reach from memory; pulling the real 90-day session or user count from GA4 for the specific surface prevents the backlog from skewing toward features the team personally uses.",
          question:
            "GA4 shows: the charting tool's power-user segment had 1,900 unique sessions in 90 days; the onboarding flow had 38,000; the settings page had 6,200. Charting scores Impact 3, Confidence 100%; onboarding scores Impact 1, Confidence 80%; settings scores Impact 0.5, Confidence 50%. What is each RICE numerator (Reach x Impact x Confidence), before Effort is applied?",
          toolName: "Google Analytics 4",
          where: "Filter GA4 to each surface's page path, set the date range to the trailing 90 days, and record unique users.",
          procedure: [
            "Charting tool numerator: 1,900 x 3 x 1.0 = 5,700",
            "Onboarding numerator: 38,000 x 1 x 0.8 = 30,400",
            "Settings numerator: 6,200 x 0.5 x 0.5 = 1,550",
            "Note that onboarding already leads by a wide margin before Effort is even applied",
          ],
          outputSample:
            "GA4, trailing 90 days\n  Charting tool: 1,900 sessions -> numerator 5,700\n  Onboarding: 38,000 sessions -> numerator 30,400\n  Settings: 6,200 sessions -> numerator 1,550",
          healthy: "Onboarding's real Reach number, pulled from GA4, dominates the ranking before Effort is even factored in, matching the lesson's point that Reach usually decides close calls.",
          unhealthy: "The team estimates 'the charting tool feels like it touches a lot of our best users' instead of pulling the actual 1,900-session number, and overrates it.",
          interpret:
            "A 20x gap in real Reach (38,000 vs 1,900) is exactly the kind of gap ICE would have missed entirely, since ICE has no Reach term at all.",
          soWhat: [
            {
              symptom: "A power-user feature keeps winning debates on 'feel' alone",
              action: "Require a GA4 screenshot of the actual 90-day Reach number before any feature enters the RICE table",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-apply-effort-and-forecast",
          concept: "Effort must be scored in person-weeks, not days",
          lessonAnchor: "step-2-define-your-scales-before-the-first-session",
          theoryRecap:
            "Effort is person-weeks: one engineer for one week equals 1. Scoring in days instead flattens the denominator and makes every idea look artificially cheap.",
          question:
            "Charting tool needs 1 engineer for 6 weeks (Effort 6); onboarding needs 2 engineers for 2 weeks each (Effort 4); settings needs 1 engineer for 1 week (Effort 1). Using the numerators from Step 1, what is the final RICE score for each, and which feature does the data support shipping this quarter?",
          toolName: "Google Sheets",
          where: "Add an Effort column in person-weeks next to the Step 1 numerators and divide.",
          procedure: [
            "Charting tool: 5,700 / 6 = 950",
            "Onboarding: 30,400 / 4 = 7,600",
            "Settings: 1,550 / 1 = 1,550",
            "Rank descending: onboarding wins by roughly 5x over the next-highest score",
          ],
          outputSample:
            "Final RICE scores\n  Onboarding: 30,400 / 4 = 7,600  <- ships this quarter\n  Settings: 1,550 / 1 = 1,550\n  Charting tool: 5,700 / 6 = 950",
          healthy: "The team commits the quarter to onboarding, with settings as a plausible next pick and the charting tool deferred, not killed.",
          unhealthy: "The team splits the quarter across all three features because each has a vocal internal advocate, diluting engineering time across all of them.",
          interpret:
            "RICE's job in a roadmap review is to make the trade-off explicit: onboarding's Reach advantage outweighs even a 4x higher Effort cost than settings.",
          soWhat: [
            {
              symptom: "Leadership wants to fund all three features 'a little bit' this quarter",
              action: "Present the RICE-ranked table and recommend fully funding the top score before partially funding the rest",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Pull the real 90-day Reach number for each competing surface",
            why: "Free, and the lesson explicitly warns against estimating Reach from memory",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the RICE table and compute the final scores",
            why: "Transparent formulas for a roadmap review audience",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Cross-check Reach with event-level data when GA4's page-path filtering is too coarse for a specific in-app surface",
            why: "Useful when the three features live inside one screen and GA4 pageviews can't separate them",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A RICE-scored roadmap table for all three features with real GA4 Reach numbers, and a one-line recommendation for the quarter.",
      sampleOutput:
        "Snowflake data-platform roadmap, RICE pass (excerpt)\n\nQuery builder redesign: Reach 24,000, Impact 1, Confidence 80%, Effort 5 -> 3,840\nAdmin console polish: Reach 2,100, Impact 2, Confidence 100%, Effort 2 -> 2,100\nRecommendation: fund the query builder redesign this quarter, its Reach advantage outweighs the admin console's higher Confidence",
      successCriteria: [
        "Uses real Reach numbers rather than estimates for all three features",
        "Correctly scores Effort in person-weeks",
        "Computes the final RICE score and states a single clear recommendation",
      ],
      portfolioReady: true,
    },
  ],

  "plg": [
    {
      id: "plg-signup-funnel-activation-audit",
      tier: "core",
      archetype: "audit",
      title: "The First 5 Minutes: Auditing a Self-Serve Signup Funnel for Activation Gaps",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real-shaped funnel export (signups, verified, first action, PQL trigger), find exactly where the activation flywheel leaks and recommend the highest-leverage fix.",
      companyId: "coinbase",
      scenario:
        "You're a growth analyst at Coinbase reviewing last month's retail signup cohort: 50,000 signups, but only a fraction ever complete the actions that predict they'll become active traders.",
      brief:
        "Use the lesson's activation-rate and PQL-trigger framework to read a funnel export, find the biggest leak, and size the fix.",
      mode: "diagnostic",
      conceptsCovered: ["Activation Rate", "Product-Qualified Leads (PQLs)"],
      steps: [
        {
          stepId: "step-1-activation-rate",
          concept: "Activation Rate",
          lessonAnchor: "2-activation-rate",
          theoryRecap:
            "The lesson defines activation rate as the % of signups completing the action that predicts retention: 20-40% is average, 50%+ is excellent.",
          question:
            "Of 50,000 signups, 41,000 verified identity but only 9,800 completed a first funded trade within 7 days. What's the activation rate, and is it healthy?",
          toolName: "Google Sheets",
          where: "Import funnel-export.csv, compute completed/signups per stage.",
          procedure: [
            "Import funnel-export.csv and freeze the header row",
            "Add a column dividing each stage's count by total signups",
            "Flag any stage below the lesson's 20% floor",
          ],
          outputSample:
            "Stage counts (50,000 signups)\n  Verified identity      41,000   82.0%\n  Funded first trade      9,800   19.6%   <- activation rate\n  Traded on 3+ days       6,100   12.2%",
          healthy:
            "Activation rate lands at or above 20%, with most drop-off between signup and identity verification, a known friction point smoothed by better UX copy.",
          unhealthy:
            "Activation sits at 19.6%, just under the lesson's 20% floor, and the steepest drop is AFTER verification: users who cleared identity checks still don't fund a trade.",
          interpret:
            "The leak isn't awareness or trust (82% verify), it's translating a verified account into a completed action. That points at onboarding friction inside the app, not top-of-funnel messaging.",
          soWhat: [
            {
              symptom: "Verified users stall before funding a first trade",
              action: "Ship a guided 'fund $10 and place your first trade' prompt inside onboarding",
              effort: "dev ticket",
            },
            {
              symptom: "No segmentation of where verified users drop off",
              action: "Add stage-level event tracking between verification and first trade",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pql-trigger",
          concept: "Product-Qualified Leads (PQLs)",
          lessonAnchor: "3-product-qualified-leads-pqls",
          theoryRecap:
            "PQLs are free/self-serve users who hit usage signals predicting conversion; the lesson notes PQLs convert 3-5x better than MQLs.",
          question:
            "Which of these three usage signals should trigger a PQL flag: traded once, traded on 3+ days, or invited a friend?",
          toolName: "Google Sheets",
          where: "Cross-reference the funnel export's behavior columns against the 7-day activity window.",
          procedure: [
            "Filter the export to users who traded on 3+ distinct days",
            "Compare their week-4 retention rate against the 'traded once' segment",
            "Flag the higher-retention segment as the PQL trigger",
          ],
          outputSample:
            "Week-4 retention by segment\n  Traded once only        14%\n  Traded 3+ days          58%   <- PQL trigger\n  Invited a friend        31%",
          healthy:
            "The team picks 'traded 3+ days' as the PQL trigger because it has by far the highest downstream retention, a real predictive signal.",
          unhealthy:
            "Picking 'invited a friend' as the PQL trigger because it feels like the most engaged action, even though it retains worse than the 3+ day trading signal.",
          interpret: "A PQL trigger has to be chosen by what it predicts, not by which action sounds most impressive.",
          soWhat: [
            {
              symptom: "Sales/lifecycle team has no PQL definition to work from",
              action: "Ship the '3+ trading days in 7' flag as the PQL trigger and route it to a lifecycle email",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Import and segment the funnel export",
            why: "Free, no account needed, handles pivot-style segmentation easily",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Confirm stage-to-stage drop-off matches the exported funnel",
            why: "Free funnel exploration report validates the CSV against live event data",
            required: false,
            fallback: "Skip and trust the CSV export if GA4 isn't wired to the product",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Build a persistent activation funnel dashboard with cohort retention curves",
            why: "Purpose-built product-analytics tool for PQL scoring at scale",
            required: false,
            lastVerified: "2026-08",
            inlinePricing: "Freemium",
          },
        ],
        paidUpgradeNote:
          "Amplitude's free tier covers this exact exercise; the paid tier only matters once you're tracking millions of monthly events.",
      },
      deliverable:
        "A one-page activation audit memo: the measured activation rate, where the biggest leak sits in the funnel, the chosen PQL trigger with its supporting retention data, and one dev-ticket-sized fix.",
      sampleOutput:
        "Wise, Q2 self-serve signup audit (excerpt)\n\nActivation rate: 34% (above the 20% floor)\nBiggest leak: 'first transfer' step, 22% drop after account funding\nPQL trigger selected: '2+ transfers in 14 days' (61% week-4 retention vs 18% for 'transfer once')\nRecommended fix: add a second-transfer nudge email at day 3",
      successCriteria: [
        "Correctly calculates activation rate from the raw stage counts",
        "Identifies the funded-but-not-trading leak, not the identity-verification stage",
        "Selects the PQL trigger with the highest supporting retention data, not the most 'active-sounding' behavior",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the same audit on a second cohort and check whether the PQL trigger's predictive power holds steady month over month.",
    },
    {
      id: "plg-expansion-flywheel-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Sizing the Compounding Engine: Forecasting PLG Expansion Revenue",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a starting PLG customer base and two NRR scenarios, forecast 3-year revenue and decide whether the current expansion motion is strong enough to hit a growth target.",
      companyId: "wise",
      scenario:
        "You're on the growth team at Wise modeling what happens to the self-serve customer base's revenue if the expansion motion (seat/feature upsells to existing accounts) stays flat vs. improves.",
      brief:
        "Use the lesson's NRR and expansion-engine framework to forecast revenue under two scenarios and recommend which expansion lever to prioritize.",
      mode: "diagnostic",
      conceptsCovered: ["Net Revenue Retention (NRR)", "Expansion: The Hidden Engine"],
      steps: [
        {
          stepId: "step-1-nrr-compounding",
          concept: "Net Revenue Retention (NRR)",
          lessonAnchor: "4-net-revenue-retention-nrr",
          theoryRecap:
            "The lesson states best-in-class PLG companies hit 120%+ NRR, the compounding engine behind PLG's value even with some churn.",
          question:
            "Starting at $2M MRR from existing self-serve accounts, what does the base become after 3 years at 105% NRR vs. 120% NRR?",
          toolName: "Google Sheets",
          where: "Build a compounding formula: MRR × (NRR^years).",
          procedure: [
            "Set up a 3-year compounding table for $2M MRR at 105% and 120% NRR",
            "Compute year-end MRR for each scenario using MRR × NRR^year",
            "Compute the dollar gap between scenarios at year 3",
          ],
          outputSample:
            "Starting MRR: $2,000,000\n\n              Year 1        Year 2        Year 3\n105% NRR    $2,100,000    $2,205,000    $2,315,250\n120% NRR    $2,400,000    $2,880,000    $3,456,000\n\nYear-3 gap: $1,140,750/mo",
          healthy:
            "The team sees the 15-point NRR gap compounds into a >$1.1M/mo difference by year 3, purely from the existing base, no new customers assumed.",
          unhealthy:
            "Treating NRR as a single-year metric and missing that a 15-point gap barely shows up in year 1 ($300K/mo) but triples by year 3.",
          interpret:
            "NRR's real cost of being average instead of excellent only shows up when you compound it, which is exactly why the lesson calls it the flywheel's compounding engine.",
          soWhat: [
            {
              symptom: "NRR sits near 105%, below the 120% PLG benchmark",
              action: "Prioritize expansion levers (seat limits, feature gates) over new-logo acquisition this quarter",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-expansion-lever",
          concept: "Expansion: The Hidden Engine",
          lessonAnchor: "expansion-the-hidden-engine",
          theoryRecap:
            "The lesson notes 18% of ARR in high-performing PLG companies comes from expansion, driven by usage ceilings (seats, storage, API calls) that feel generous early and limiting at scale.",
          question:
            "Which of these three usage ceilings is the strongest expansion lever: transfer volume limits, currency-count limits, or support-ticket limits?",
          toolName: "Google Sheets",
          where: "Rank the three levers against the export's usage-vs-upgrade correlation.",
          procedure: [
            "Pull the % of users who upgraded within 30 days of hitting each limit",
            "Rank the three limits by upgrade conversion rate",
            "Recommend the top lever for the next expansion campaign",
          ],
          outputSample:
            "Upgrade rate within 30 days of hitting limit\n  Transfer volume limit     38%   <- strongest lever\n  Currency-count limit      14%\n  Support-ticket limit       3%",
          healthy:
            "Transfer volume limit gets prioritized because it converts far better, a natural ceiling tied directly to the core value the customer already gets.",
          unhealthy:
            "Building a campaign around the support-ticket limit because it's easiest to implement, ignoring that it barely converts.",
          interpret:
            "A usage ceiling only works as an expansion lever if hitting it means the customer is already deep in the product's core value, not just generating support volume.",
          soWhat: [
            {
              symptom: "Expansion campaigns are spread evenly across all three limits",
              action: "Reallocate next quarter's expansion campaign budget to the transfer-volume-limit trigger only",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the NRR compounding table and rank expansion levers",
            why: "Free, handles both the formula table and the ranking without a paid analytics seat",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Mixpanel",
            role: "Pull the real upgrade-within-30-days conversion rate per usage limit",
            why: "Free tier supports funnel/cohort queries against real usage-limit events",
            required: false,
            fallback: "Use the provided sample data instead of a live Mixpanel account",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Automate the upgrade-conversion ranking across dozens of usage limits at once",
            why: "Built-in behavioral cohorting scales past what a manual Sheets pull can track",
            required: false,
            lastVerified: "2026-08",
            inlinePricing: "Freemium",
          },
        ],
        paidUpgradeNote:
          "Free tiers of Mixpanel or Amplitude cover this exercise completely; upgrade only once you're tracking limit-hits across dozens of features.",
      },
      deliverable:
        "A 1-page forecast memo: 3-year MRR projection at current vs. target NRR, the dollar gap it creates, and the single highest-converting usage-limit lever to prioritize next quarter.",
      sampleOutput:
        "Slack, self-serve expansion forecast (excerpt)\n\nCurrent NRR: 108%   Target: 122%\nYear-3 gap at $5M starting MRR: $2.6M/mo\nTop lever: message-history limit, 44% upgrade rate within 30 days of hitting it\nRecommendation: shift Q3 expansion campaign budget to message-history-limit triggers",
      successCriteria: [
        "Correctly compounds MRR across 3 years for both NRR scenarios",
        "Identifies the transfer-volume-limit lever as strongest, not the easiest-to-build one",
        "Ties the recommendation back to a real usage-based trigger, not a generic upsell email",
      ],
      portfolioReady: true,
      stretch: "Model a third scenario at 130% NRR (top-quartile PLG) and see how much faster the gap compounds.",
    },
  ],
  "net-revenue-retention": [
    {
      id: "nrr-account-bridge-audit",
      tier: "mini",
      archetype: "audit",
      title: "Reading the Bridge: Auditing an Account-Level MRR Waterfall",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-shaped 20-account MRR waterfall (starting MRR, expansion, contraction, churn), calculate NRR and GRR and diagnose whether expansion is masking a churn problem.",
      companyId: "adyen",
      scenario:
        "You're a marketing analyst at Adyen reviewing last year's mid-market account cohort to see whether the reported topline growth is hiding account-level churn.",
      brief:
        "Use the lesson's NRR/GRR formulas to compute both from a real account waterfall and flag if GRR reveals a problem NRR hides.",
      mode: "diagnostic",
      conceptsCovered: ["What NRR Actually Measures", "Current Benchmarks: Where Companies Actually Land in 2026"],
      steps: [
        {
          stepId: "step-1-nrr-grr-formula",
          concept: "What NRR Actually Measures",
          lessonAnchor: "what-nrr-actually-measures",
          theoryRecap:
            "NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR. GRR is the same but excludes expansion.",
          question:
            "Starting MRR $500,000, Expansion $95,000, Contraction $18,000, Churn $42,000: what are NRR and GRR?",
          toolName: "Google Sheets",
          where: "Enter the four waterfall inputs and compute both formulas in adjacent cells.",
          procedure: [
            "Enter starting MRR, expansion, contraction, and churn in separate columns",
            "Compute NRR = (Start + Expansion - Contraction - Churn) / Start",
            "Compute GRR = (Start - Contraction - Churn) / Start",
          ],
          outputSample:
            "Starting MRR: $500,000\nExpansion: +$95,000\nContraction: -$18,000\nChurn: -$42,000\n\nNRR = (500,000+95,000-18,000-42,000)/500,000 = 107.0%\nGRR = (500,000-18,000-42,000)/500,000 = 88.0%",
          healthy: "NRR and GRR sit close together, meaning expansion isn't doing heavy lifting to cover up churn.",
          unhealthy:
            "NRR reads a healthy 107%, but GRR at 88% is right at the lesson's 'watch this' threshold: expansion revenue is masking real churn.",
          interpret:
            "The 19-point gap between NRR and GRR is the tell: without expansion, this account base would be shrinking, not growing.",
          soWhat: [
            {
              symptom: "NRR alone looks fine but GRR is near or below 90%",
              action: "Escalate the churn/contraction accounts to customer success for a root-cause review before the next board update",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-segment-benchmark",
          concept: "Current Benchmarks: Where Companies Actually Land in 2026",
          lessonAnchor: "current-benchmarks-where-companies-actually-land-in-2026",
          theoryRecap:
            "2026 benchmarks: enterprise SaaS (over $100K ACV) NRR near 118%, SMB (under $25K ACV) near 97%.",
          question:
            "This account cohort's average ACV is $180,000. Is a 107% NRR strong, weak, or roughly on-benchmark for its segment?",
          toolName: "Google Sheets",
          where: "Compare the computed 107% NRR against the segment-specific benchmark, not the blended average.",
          procedure: [
            "Tag each account by ACV tier (enterprise vs. SMB)",
            "Filter to the enterprise-tier accounts only",
            "Compare their NRR against the 118% enterprise benchmark, not the blended 101-106% figure",
          ],
          outputSample:
            "Segment check\n  Blended benchmark: 101-106%   (wrong comparison for this cohort)\n  Enterprise benchmark: ~118%\n  This cohort's NRR: 107%   <- 11 points below its real benchmark",
          healthy:
            "The team compares against the enterprise benchmark and correctly flags 107% as underperforming for this segment, not 'above average.'",
          unhealthy:
            "Comparing 107% against the blended 101-106% median and concluding the account base is performing well, when against its real segment it's 11 points behind.",
          interpret:
            "A blended benchmark can make a genuinely underperforming enterprise cohort look fine; segment-matching the benchmark is what makes the number actionable.",
          soWhat: [
            {
              symptom: "NRR is being benchmarked against the blended industry average",
              action: "Re-segment NRR reporting by ACV tier before the next board deck",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compute NRR/GRR and segment accounts by ACV tier",
            why: "Free, handles the waterfall formula and segmentation without a BI tool",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Cross-check which accounts' usage data explains the churn/contraction rows",
            why: "Free product-usage view helps validate why specific accounts contracted",
            required: false,
            fallback: "Skip and rely on the provided waterfall export alone",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Build a live account-health dashboard segmented by ACV tier",
            why: "Automates the segment-vs-benchmark comparison at renewal-review scale",
            required: false,
            lastVerified: "2026-08",
            inlinePricing: "Freemium",
          },
        ],
        paidUpgradeNote:
          "Google Sheets fully covers a 20-account audit; a paid tier only pays off once you're tracking hundreds of accounts continuously.",
      },
      deliverable:
        "A one-page NRR/GRR audit memo: both computed figures, the segment-correct benchmark comparison, and a flag on whether expansion is masking churn.",
      sampleOutput:
        "Coinbase, enterprise cohort NRR/GRR audit (excerpt)\n\nNRR: 121%   GRR: 94%\nSegment benchmark (enterprise, >$100K ACV): ~118%\nVerdict: on-benchmark, and the 27-point NRR/GRR gap is expansion-driven growth, not churn masked by upsells",
      successCriteria: [
        "Correctly computes both NRR and GRR from the four waterfall inputs",
        "Uses the segment-specific benchmark (enterprise/SMB), not the blended median",
        "Flags a wide NRR/GRR gap as a potential churn-masking signal",
      ],
      portfolioReady: true,
      stretch: "Recompute the audit quarterly for four quarters and check whether the NRR/GRR gap is widening or narrowing.",
    },
    {
      id: "nrr-five-year-compounding-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "The 2.5x Bet: Forecasting a Revenue Base Under Different NRR Scenarios",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a $10M ARR base, forecast 5-year outcomes at 100%, 110%, and 120% NRR with zero new-customer acquisition, and decide which marketing lever is worth funding to close the gap.",
      companyId: "coinbase",
      scenario:
        "You're presenting to Coinbase's marketing leadership on whether funding a usage-triggered expansion campaign is worth it, framed entirely around what different NRR levels do to the existing subscription base over 5 years.",
      brief:
        "Use the lesson's compounding math to forecast 5-year ARR at three NRR levels, then justify funding the expansion lever with the dollar gap it closes.",
      mode: "diagnostic",
      conceptsCovered: ["How Marketing Actually Moves This Number"],
      steps: [
        {
          stepId: "step-1-five-year-forecast",
          concept: "How Marketing Actually Moves This Number",
          lessonAnchor: "how-marketing-actually-moves-this-number",
          theoryRecap:
            "The lesson states a sustained 120% NRR compounds a $10M ARR base to roughly $24.9M over 5 years with zero new sales, and names usage-triggered expansion campaigns as a marketing-owned lever.",
          question:
            "At $10M starting ARR, what's the 5-year outcome at 100% NRR (flat), 110% NRR, and 120% NRR, and what's the dollar gap between flat and 120%?",
          toolName: "Google Sheets",
          where: "Build a 5-year compounding table, ARR × NRR^years, for all three scenarios.",
          procedure: [
            "Set up a 5-year table for $10M ARR at 100%, 110%, and 120% NRR",
            "Compute year-5 ARR for each using ARR × NRR^5",
            "Compute the dollar gap between the 100% and 120% scenarios",
          ],
          outputSample:
            "Starting ARR: $10,000,000\n\n           Year 1     Year 3      Year 5\n100% NRR  $10.0M     $10.0M      $10.0M\n110% NRR  $11.0M     $13.3M      $16.1M\n120% NRR  $12.0M     $17.3M      $24.9M\n\nYear-5 gap (100% vs 120%): $14.9M",
          healthy:
            "The team sees the $14.9M gap and treats a usage-triggered expansion campaign, projected to lift NRR from 100% toward 110-120%, as directly fundable against that number.",
          unhealthy:
            "Presenting the NRR gap as an abstract percentage-point difference without translating it into the dollar figure leadership actually budgets against.",
          interpret:
            "A 20-point NRR difference isn't a rounding error, it's the difference between a flat $10M business and a $24.9M one in year 5, with the exact same number of customers.",
          soWhat: [
            {
              symptom: "Leadership is skeptical that a lifecycle/expansion campaign is worth funding",
              action: "Present the 5-year dollar gap, not the NRR percentage, in the next budget review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the 3-scenario compounding forecast table",
            why: "Free, handles the exponential formula without any paid modeling tool",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull the current usage-trigger event volume to estimate realistic NRR lift from the campaign",
            why: "Free event data grounds the NRR-lift assumption in real trigger volume instead of a guess",
            required: false,
            fallback: "Use a conservative 5-point NRR lift assumption if usage-event data isn't available",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Model cohort-level NRR lift scenarios directly from historical usage-trigger campaigns",
            why: "Built-in cohort forecasting saves rebuilding the compounding model by hand each quarter",
            required: false,
            lastVerified: "2026-08",
            inlinePricing: "Freemium",
          },
        ],
        paidUpgradeNote:
          "Google Sheets fully covers a one-time forecast; a paid tool only pays off if you're rerunning this model every quarter.",
      },
      deliverable:
        "A one-page 5-year forecast memo: ARR outcomes at three NRR scenarios, the dollar gap between flat and best-case, and a funding recommendation for the expansion campaign.",
      sampleOutput:
        "Adyen, 5-year NRR scenario forecast (excerpt)\n\nStarting ARR: $25M\n100% NRR -> $25M in Year 5\n118% NRR (enterprise benchmark) -> $56.9M in Year 5\nGap: $31.9M\nRecommendation: fund the usage-triggered expansion program, the 5-year gap alone justifies a 7-figure campaign budget",
      successCriteria: [
        "Correctly compounds ARR across 5 years for all three NRR scenarios",
        "Converts the NRR percentage gap into a dollar figure leadership can act on",
        "Ties the forecast to a specific, marketing-owned lever named in the lesson, not a generic 'improve retention' recommendation",
      ],
      portfolioReady: true,
      stretch: "Rerun the forecast assuming the campaign only lifts NRR by 5 points instead of 10, and see how much the 5-year gap shrinks.",
    },
  ],

  "experimentation-program": [
    {
      id: "experimentation-maturity-audit",
      tier: "mini",
      archetype: "audit",
      title: "Grading a Growth Team's Experimentation Maturity",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a raw backlog export from a real growth team, score their experimentation process against the five-gear framework and identify the single weakest gear.",
      companyId: "nubank",
      scenario:
        "You're a growth analyst embedded with Nubank's app growth team for a quarter. They've handed you a backlog export and asked you to diagnose why velocity is stuck at 2-3 tests a quarter.",
      brief:
        "Score hypothesis compliance and ICE-scoring coverage from the raw backlog, then name the weakest gear with a concrete fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "Filtering ideas through a structured hypothesis format before backlog entry",
        "Scoring backlog items with ICE before committing engineering time",
      ],
      steps: [
        {
          stepId: "step-1-hypothesis-format",
          concept: "Filtering ideas through a structured hypothesis format before backlog entry",
          lessonAnchor: "gear-1-idea-intake",
          theoryRecap:
            "Gear 1 requires every backlog submission to state 'If we change X for users Y, metric Z will move because rationale R.' Without that structure, ideas are wishes, not experiments.",
          question:
            "Nubank's backlog has 18 entries. Only 4 use the full hypothesis format; the other 14 are one-line feature requests like 'Test a new home screen banner.' What's the actual state of Gear 1?",
          toolName: "Google Sheets",
          where:
            "Open backlog-export.csv, add a column flagging which rows contain all three hypothesis components (change, audience, metric).",
          procedure: [
            "Import backlog-export.csv into Sheets",
            "Add a column 'Has Hypothesis' and mark TRUE only for rows naming a specific change, a specific user segment, and a specific metric",
            "Count TRUE vs FALSE to get the compliance rate",
          ],
          outputSample:
            "18 backlog rows\n  4 rows: full hypothesis (change + audience + metric + rationale)\n  14 rows: title only, no metric named\n  Compliance rate: 22%",
          healthy:
            "Compliance rate above 80% — most ideas already name a specific metric and audience before they reach the backlog.",
          unhealthy:
            "Compliance rate under 30% — the backlog is really a wishlist, and prioritization scoring later will be guessing, not measuring.",
          interpret:
            "A low compliance rate means Gear 1 is broken even if Gear 2's scoring template looks polished; you can't score a hypothesis that was never written.",
          soWhat: [
            {
              symptom: "Backlog entries are one-line feature requests with no named metric",
              action: "Add a required 'hypothesis' field to the intake form and reject submissions missing it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ice-scoring-gap",
          concept: "Scoring backlog items with ICE before committing engineering time",
          lessonAnchor: "gear-2-prioritization",
          theoryRecap:
            "Gear 2 requires every hypothesis to be scored (ICE or PXL) before anyone commits engineering time. 58% of teams skip this entirely, and that single gap kills velocity more than anything else.",
          question:
            "None of Nubank's 18 backlog rows carry an Impact, Confidence, or Ease score. Engineering picks the next test from whichever PM asked most recently. What does this tell you about Gear 2, and what's the fix?",
          toolName: "Google Sheets",
          where:
            "Add Impact / Confidence / Ease columns (1-10 each) next to the 4 rows that already have a real hypothesis, and compute an ICE score.",
          procedure: [
            "Add three columns: Impact, Confidence, Ease (1-10 scale)",
            "Score only the 4 rows with a real hypothesis, since the other 14 can't be scored honestly yet",
            "Sort descending by ICE score to produce a ranked shortlist",
          ],
          outputSample:
            "ICE-scored shortlist (of 4 valid hypotheses)\n  1. Simplify KYC upload flow   I:8 C:7 E:6 = 336\n  2. Reorder home screen cards  I:5 C:4 E:8 = 160\n  Remaining 14 backlog rows: unscored, unranked",
          healthy:
            "A ranked shortlist exists and engineering pulls the next test from the top of that list, not from whoever asked last.",
          unhealthy:
            "Zero rows carry a score, and the next test is chosen by seniority or urgency of the request, not evidence.",
          interpret:
            "Missing ICE scores plus a HiPPO-driven pick order is the exact failure mode the lesson calls out: 58% of teams skip prioritization, and it is the single most common reason velocity collapses.",
          soWhat: [
            {
              symptom: "Engineering picks tests by whoever asked most recently",
              action: "Require an ICE score on every backlog row before it can be assigned to a sprint",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score and rank the backlog",
            why: "Free, no account friction, sortable columns for ICE ranking",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page maturity scorecard for Nubank's experimentation program: hypothesis compliance rate, ICE-scoring coverage, and the single weakest gear with a named fix.",
      sampleOutput:
        "Grab experimentation maturity scorecard (reference)\n\nGear 1 (Intake): 91% hypothesis compliance — healthy\nGear 2 (Prioritization): 100% ICE-scored before sprint assignment — healthy\nGear 4 (Review): no weekly council, SRM checks ad hoc — WEAKEST GEAR\nRecommended fix: stand up a 30-minute weekly experimentation council.",
      successCriteria: [
        "Correctly computes hypothesis compliance rate from the raw backlog",
        "Identifies missing ICE scores as the primary velocity blocker, not a tooling problem",
        "Names one concrete fix tied to the weakest gear",
      ],
      portfolioReady: true,
      stretch:
        "Re-score the 14 non-compliant rows after rewriting them into proper hypotheses, then compare the new ranked order to the original request order.",
    },
    {
      id: "experimentation-program-charter-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Standing Up an Experimentation Program From Zero",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Build the founding artifacts of a working experimentation program for a team that currently runs ad-hoc tests: a structured hypothesis backlog, an ICE-scored prioritization sheet, a power/sample-size check, and a weekly review council agenda with an SRM check built in.",
      companyId: "grab",
      scenario:
        "Grab's food-delivery growth team runs 2-3 tests a quarter with no shared backlog and no review ritual. You've been asked to stand up the process before the next planning cycle.",
      brief:
        "Produce a backlog template, a scored shortlist, a power check, and a review ritual — the gears most teams skip first.",
      mode: "build",
      conceptsCovered: [
        "Writing hypotheses in the if/because format",
        "Scoring backlog items with ICE before committing engineering time",
        "Calculating whether a surface has enough traffic to reach significance in four weeks",
        "Catching sample-ratio mismatch in a weekly review before shipping",
      ],
      steps: [
        {
          stepId: "step-1-hypothesis-template",
          concept: "Writing hypotheses in the if/because format",
          lessonAnchor: "gear-1-idea-intake",
          theoryRecap:
            "Gear 1: every submission must state 'If we change [X] for users [Y], metric [Z] will move because [rationale R].' Without that structure, ideas are wishes, not experiments.",
          question:
            "Grab's team has one raw idea note: 'riders drop off during payment, maybe simplify it.' Turn this into a real hypothesis using the if/because format.",
          toolName: "Google Sheets",
          where: "Create a Backlog tab with columns: Hypothesis, Audience, Metric, Rationale, Submitted By.",
          procedure: [
            "Create a Backlog tab with columns Hypothesis / Audience / Metric / Rationale / Submitted By",
            "Rewrite the raw note as: 'If we reduce payment steps from 4 to 2 for first-time riders, checkout completion rate will increase because fewer steps reduce drop-off from decision fatigue'",
            "Add 4 more raw ideas from the team and rewrite each the same way",
          ],
          outputSample:
            "Backlog tab (row 1)\nHypothesis: If we reduce payment steps from 4 to 2 for first-time riders, checkout completion will increase\nAudience: First-time riders, mobile app\nMetric: Checkout completion rate\nRationale: Fewer steps reduce drop-off from decision fatigue",
          healthy: "Every row names a specific change, a specific audience segment, and one measurable metric.",
          unhealthy:
            "Rows that just restate the raw idea ('simplify checkout') with no named metric or audience.",
          interpret:
            "A hypothesis without a named metric can't be scored in Gear 2 or measured in Gear 4 — the format isn't bureaucracy, it's what makes the next two gears possible.",
          soWhat: [
            {
              symptom: "Backlog rows are one-line feature ideas",
              action: "Reject any backlog submission missing an audience or metric field",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ice-shortlist",
          concept: "Scoring backlog items with ICE before committing engineering time",
          lessonAnchor: "gear-2-prioritization",
          theoryRecap:
            "Score every hypothesis on Impact x Confidence x Ease before committing engineering time. 58% of teams skip this, and it's the single biggest reason velocity collapses.",
          question:
            "You now have 5 hypotheses. Score each 1-10 on Impact, Confidence, and Ease, then rank them. Which one ships first?",
          toolName: "Google Sheets",
          where: "Add Impact / Confidence / Ease columns to the Backlog tab and a formula column for ICE score.",
          procedure: [
            "Add columns Impact, Confidence, Ease (1-10), and an ICE formula column (=Impact*Confidence*Ease)",
            "Score all 5 hypotheses as a team, not solo, to avoid one person's bias driving the ranking",
            "Sort descending by ICE score",
          ],
          outputSample:
            "Ranked shortlist\n1. Reduce payment steps 4->2   I:8 C:7 E:6 = 336\n2. Add saved-card autofill    I:6 C:8 E:7 = 336\n3. Reorder promo carousel     I:4 C:5 E:9 = 180",
          healthy:
            "The top-ranked test by ICE score is the one that gets engineering time next sprint, no exceptions.",
          unhealthy:
            "A lower-scored test jumps the queue because a senior stakeholder asked for it — that's HiPPO-driven guessing, not a program.",
          interpret:
            "The score only has teeth if it actually determines the sprint order; a scoring sheet nobody follows is theater, not Gear 2.",
          soWhat: [
            {
              symptom: "A stakeholder request jumps the ICE-ranked queue",
              action: "Require a documented ICE override reason before any queue-jump",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-power-check",
          concept: "Calculating whether a surface has enough traffic to reach significance in four weeks",
          lessonAnchor: "gear-3-power-and-design",
          theoryRecap:
            "Before launch, calculate minimum detectable effect and required sample size. If you can't reach 95% confidence within four weeks at current traffic, don't run the test on that surface.",
          question:
            "The checkout page gets 40,000 weekly sessions. The team wants to detect a 3% lift in completion rate. Should this test run on checkout, or does it need a higher-traffic surface?",
          toolName: "Google Analytics 4",
          where:
            "Pull weekly session counts for the checkout page from GA4, then run the numbers through a sample-size calculator.",
          procedure: [
            "Pull the checkout page's weekly session count from GA4 (assume ~22% baseline completion rate)",
            "Plug baseline rate, 3% relative MDE, and 95% confidence into a sample-size calculator",
            "Compare the required sample per variant to 4 weeks of available traffic (40,000/week x 4 = 160,000 sessions, split two ways = 80,000/variant)",
          ],
          outputSample:
            "Required sample per variant: ~65,000\nAvailable per variant in 4 weeks: ~80,000\nVerdict: sufficient power, test can launch on checkout as-is",
          healthy: "Available traffic per variant exceeds the required sample size before the test ever launches.",
          unhealthy:
            "Available traffic falls short, and the test runs anyway, then gets extended indefinitely chasing significance that will never arrive.",
          interpret:
            "Power belongs before launch, not as an excuse invented after a test stalls at week 6 with an inconclusive read.",
          soWhat: [
            {
              symptom: "A test has been running 6+ weeks with no significant result",
              action: "Check power before extending; if underpowered, either raise the MDE or move to a higher-traffic surface",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-review-agenda",
          concept: "Catching sample-ratio mismatch in a weekly review before shipping",
          lessonAnchor: "gear-4-review-and-ship",
          theoryRecap:
            "A weekly experimentation council — PM, engineer, analyst, designer, 30 minutes — reviews queued tests and catches sample-ratio mismatches (SRM) before they happen. This ritual is the structural difference between 5 tests a year and 5 tests a week.",
          question:
            "Write the standing agenda for Grab's first weekly council. What gets checked on every live test before anyone reads the results?",
          toolName: "Google Sheets",
          where: "Add a Review tab with a fixed agenda template and an SRM check row for each live test.",
          procedure: [
            "Create a Review tab with 4 fixed agenda items: new tests to approve, live tests' SRM check, tests ready to read out, backlog re-prioritization",
            "For each live test, log actual split (e.g. 51.8/48.2) against the expected 50/50",
            "Flag any split beyond roughly 1-2% deviation for investigation before reading results",
          ],
          outputSample:
            "Weekly council agenda, Aug 18\n1. Approve: payment-steps test (ICE 336)\n2. SRM check: saved-card-autofill test — split 52.4/47.6, FLAGGED, investigate before reading\n3. Ready to read out: none this week\n4. Re-prioritize: promo-carousel test dropped after new data",
          healthy: "Every live test gets an SRM check logged every week, before anyone looks at the primary metric.",
          unhealthy:
            "Results get read and shared the moment they look significant, with no check on whether the split itself is broken.",
          interpret:
            "SRM is not a nice-to-have footnote — a broken 52/48 split invalidates every downstream number regardless of what the dashboard's p-value says.",
          soWhat: [
            {
              symptom: "A test's actual split has drifted more than ~2% from the intended split",
              action: "Freeze the readout and route to engineering to find the allocation bug before trusting any result",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Backlog, ICE scoring, and review agenda in one workbook",
            why: "Free, shareable, sortable, no account friction for a cross-functional council",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull weekly session counts per surface for the power calculation",
            why: "Free tier covers the session-volume data needed for sample-size math",
            required: false,
            fallback: "Estimate weekly traffic from any existing analytics export",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A working experimentation program starter kit for Grab: a Backlog tab (hypotheses in if/because format), an ICE-scored ranked shortlist, a power check for the target surface, and a Review tab with a standing weekly council agenda that includes an SRM check.",
      sampleOutput:
        "Nubank experimentation starter kit (reference)\n\nBacklog: 6 hypotheses, all if/because format\nICE shortlist: KYC upload simplification ranked #1 (I:8 C:7 E:6=336)\nPower check: checkout surface cleared at 3% MDE, 95% confidence\nReview agenda: 4 fixed items, SRM logged weekly, one test flagged at 53/47 split in week 2",
      successCriteria: [
        "All backlog rows follow the if/because hypothesis format with a named metric",
        "ICE scores are computed and used to rank the shortlist, not just recorded",
        "A power/sample-size check is done before the top-ranked test launches",
        "The review agenda includes an explicit SRM check step for every live test",
      ],
      portfolioReady: true,
      stretch:
        "Add a Readout tab (Gear 5) with a template for hypothesis, result, primary metric movement, guardrail status, and searchable tags.",
    },
  ],

  "activation-rate": [
    {
      id: "activation-rate-host-cohort-audit",
      tier: "mini",
      archetype: "audit",
      title: "Finding the Aha Behavior: A Host Cohort Audit",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a synthetic export of 30 Airbnb hosts' first-14-day behaviors and whether each host was still active at day 90, apply the lesson's cohort-comparison method to identify which single behavior is the real activation event, and set the time window that captures it.",
      companyId: "airbnb",
      scenario:
        "You're a growth analyst on Airbnb's host-growth team. Leadership wants one activation metric for new hosts instead of five loosely tracked onboarding steps. You've pulled a 30-host synthetic export with first-14-day behaviors and each host's day-90 status.",
      brief:
        "Compare the retained-at-day-90 cohort against the churned cohort, find the earliest behavior that actually separates them, and write a one-line activation definition an engineer could instrument tomorrow.",
      mode: "diagnostic",
      conceptsCovered: ["Finding the aha behavior via cohort comparison"],
      steps: [
        {
          stepId: "step-1-find-aha-behavior",
          concept: "Finding the aha behavior via cohort comparison",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 1 says: pull the retained-past-day-30 cohort and the churned-before-day-30 cohort, then look for the earliest behavior that separates them. The activation event is not the behavior most hosts do, it is the behavior that correlates with sticking around.",
          question:
            "22 of 30 hosts synced their calendar in week 1, but only 11 hosts uploaded 5+ photos in week 1. Which behavior actually separates the day-90-retained hosts from the churned ones, and why does the more 'popular' behavior lose?",
          toolName: "Google Sheets",
          where:
            "Import the 30-row export, freeze the header row, then build a pivot table with `day_90_active` as rows and each behavior column as values.",
          procedure: [
            "Import the export and freeze row 1.",
            "Split hosts into two groups: day_90_active = TRUE (18 hosts) and FALSE (12 hosts).",
            "For each behavior column (calendar_synced, photos_5plus, first_booking_accepted, pricing_tool_used, messaged_guest_first), compute the % TRUE within each group.",
            "Rank behaviors by the gap between the two group percentages, largest gap first.",
            "Confirm the winning behavior happens early enough (within 14 days) to be useful as a leading indicator, not a lagging one.",
          ],
          outputSample:
            "Behavior gap analysis (n=30 hosts)\n\ncalendar_synced: 73% (active) vs 67% (churned) -> 6pt gap\nphotos_5plus: 61% (active) vs 58% (churned) -> 3pt gap\nfirst_booking_accepted: 89% (active) vs 25% (churned) -> 64pt gap\npricing_tool_used: 44% (active) vs 33% (churned) -> 11pt gap\nmessaged_guest_first: 39% (active) vs 17% (churned) -> 22pt gap\n\nWinner: first_booking_accepted, 64-point gap, occurs at a median of day 9.",
          healthy:
            "One behavior shows a gap of 40+ points between the retained and churned cohorts, and it happens inside the target window.",
          unhealthy:
            "The 'busiest' behavior (calendar_synced, done by almost everyone) shows only a 6-point gap. Building onboarding around it would optimize for attendance, not value.",
          interpret:
            "Accepting a first booking, not syncing a calendar, is the aha moment: it's the point where a host experiences real income, which is what makes them stick. Calendar sync is a setup step everyone does regardless of outcome.",
          soWhat: [
            {
              symptom: "Onboarding funnel currently celebrates 'calendar synced' as the activation milestone",
              action: "Re-point the activation event to first_booking_accepted, and redesign onboarding to accelerate getting a first booking (better default pricing, instant-book nudges)",
              effort: "half day",
            },
            {
              symptom: "No single frozen definition exists, each team cites a different onboarding step",
              action: "Write the definition down: 'Activated = accepted first booking within 14 days of listing published' and circulate it as the one number every team reports against",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Pivot the export and compute the retained-vs-churned behavior gaps",
            why: "No account friction, pivot tables handle a 30-row cohort split easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-line activation definition (event + threshold + window), backed by the cohort gap analysis, ready to hand to engineering for instrumentation as a single `activated` event.",
      sampleOutput:
        "HelloFresh, new-subscriber activation definition (excerpt)\n\nCandidate behaviors tested against day-30 retention (n=45 synthetic subscribers):\n  box_customized: 8pt gap\n  delivery_rescheduled: 4pt gap\n  second_box_ordered: 71pt gap  <- winner\n\nFrozen definition: 'Activated = ordered a second box within 21 days of first delivery.'\nOwner: Retention pod. Reviewed quarterly against fresh cohort data.",
      successCriteria: [
        "Correctly computes the retained-vs-churned percentage gap for all 5 candidate behaviors",
        "Selects the behavior with the largest gap, not the most frequent behavior",
        "Writes a frozen definition with an explicit event name, threshold, and time window",
      ],
      portfolioReady: true,
    },
    {
      id: "activation-rate-definition-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: Four Activation Definitions Submitted by Feature Teams",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given four real-style activation metric definitions submitted by different feature teams at DoorDash, apply the lesson's Common Mistakes framework to find the specific defect in each (vanity threshold, oversized window, ad-hoc derived logic, or a definition that looks fine but is missing channel segmentation).",
      companyId: "doordash",
      scenario:
        "You're the analytics lead reviewing activation-metric proposals ahead of a quarterly OKR planning cycle at DoorDash. Four feature teams (New Customer, Dasher, Merchant, DashPass) each submitted a written definition. You have one meeting to approve, reject, or send each back for rework.",
      brief:
        "Read each submitted definition as written, decide whether it has a real defect or is sound, and if it's flawed, name the specific failure mode from the lesson (not just 'this seems off').",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "How It Works / The Playbook"],
      teardownItems: [
        {
          itemId: "item-1-new-customer",
          specimen:
            "New Customer team's submitted definition: 'Activated = logged in 3+ times within 30 days of signup.'",
          specimenSource: "synthetic-realistic",
          prompt: "Approve, reject, or send back for rework? Name the defect if any.",
          answerKey: [
            {
              defect: "Vanity threshold, not a value-revealing action",
              severity: "critical",
              whyItMatters:
                "'Logged in 3 times' measures attendance, not whether the user experienced value. A user can open the app three times and never place an order.",
              lessonRef: "Common Mistakes: Picking a vanity threshold",
              owner: "you",
            },
          ],
          distractors: [
            "The 30-day window is the real problem here, not the login threshold",
            "This definition is fine because 3+ logins is a common industry benchmark",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-dasher",
          specimen:
            "Dasher team's submitted definition: 'Activated = completed onboarding checklist (background check, bank info, first availability set) within 30 days of application approval.'",
          specimenSource: "synthetic-realistic",
          prompt: "Approve, reject, or send back for rework? Name the defect if any.",
          answerKey: [
            {
              defect: "30-day window is too long to run weekly experiments",
              severity: "moderate",
              whyItMatters:
                "A 30-day window produces roughly one usable data point per month. Most meaningful onboarding behavior for a Dasher happens in the first few days; if it genuinely takes 30 days, that's a time-to-value problem, not just a measurement one.",
              lessonRef: "Common Mistakes: Setting a 30-day activation window",
              owner: "either",
            },
          ],
          distractors: [
            "Requiring a background check as part of the definition is the actual defect",
            "Bank info collection should not be part of onboarding at all",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-merchant",
          specimen:
            "Merchant team's submitted definition: 'Activated = (menu_items_uploaded > 10 AND store_hours_set) OR first_order_received, recomputed weekly from the events warehouse.'",
          specimenSource: "synthetic-realistic",
          prompt: "Approve, reject, or send back for rework? Name the defect if any.",
          answerKey: [
            {
              defect: "Derived on the fly from multiple events instead of a single fired event",
              severity: "critical",
              whyItMatters:
                "A compound OR/AND expression recomputed from the warehouse gets reinterpreted differently every quarter as analysts tweak the logic, which is exactly the ambiguity the lesson warns causes teams to argue about methodology instead of acting on data.",
              lessonRef: "How It Works / The Playbook: Instrument a single event",
              owner: "developer",
            },
          ],
          distractors: [
            "Weekly recomputation frequency is the actual problem, it should run daily",
            "first_order_received should not be part of the definition at all",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-dashpass",
          specimen:
            "DashPass team's submitted definition: 'Activated = placed a DashPass order within 7 days of subscribing, single frozen event, fires once per user.' Reported as one blended number across all acquisition channels.",
          specimenSource: "synthetic-realistic",
          prompt: "Approve, reject, or send back for rework? Name the defect if any.",
          answerKey: [
            {
              defect: "Missing channel segmentation before the number is trusted",
              severity: "moderate",
              whyItMatters:
                "The event, threshold, and window are all sound, but reporting one blended rate hides that paid-acquired subscribers likely activate 30-60 points below organic referrals. An average here can mask a channel burning CAC for nothing.",
              lessonRef: "How It Works / The Playbook: Segment by acquisition channel",
              owner: "you",
            },
          ],
          distractors: [
            "The 7-day window is too short for a subscription product",
            "The event should fire more than once per user to capture repeat activation",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track each submission, your verdict, and the cited lesson concept in one review sheet",
            why: "A simple review log is all four write-ups need, no analytics tool required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page review memo: one verdict (approve / reject / rework) per submission, the named defect, and the one-sentence fix each team should apply before resubmitting.",
      sampleOutput:
        "Flipkart Seller Hub, activation definition review memo (excerpt)\n\nSeller Onboarding team: REWORK. Definition uses 'catalog_viewed 2+ times,' a vanity threshold. Recommend re-deriving from cohort data against 90-day seller retention instead.\n\nAds team: APPROVE. 'first_campaign_launched within 10 days,' single frozen event, correct window, already segmented by seller tier.",
      successCriteria: [
        "Correctly identifies the specific defect in items 1, 2, and 3 (not just 'something is wrong')",
        "Correctly recognizes item 4's event/threshold/window is sound and the real gap is missing segmentation",
        "Does not flag a distractor as the primary defect",
      ],
      portfolioReady: true,
    },
  ],
  "freemium-vs-free-trial": [
    {
      id: "freemium-trial-seller-tool-economics",
      tier: "mini",
      archetype: "head-to-head",
      title: "Freemium vs. Opt-In vs. Opt-Out: Modeling the Same Launch Three Ways",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given the lesson's real visitor-to-signup and signup-to-paid benchmarks, calculate how many paying customers each of the three acquisition models produces from the same 50,000 monthly visitors, and recommend a model for a new seller-analytics add-on.",
      companyId: "flipkart",
      scenario:
        "Flipkart's Seller Hub team wants to launch a paid analytics add-on for third-party sellers and is deciding between freemium, an opt-in trial, and an opt-out (card-required) trial. You have 50,000 monthly seller-portal visitors and the industry benchmarks from this lesson.",
      brief:
        "Apply the lesson's visitor-signup rates and signup-to-paid conversion rates to each model, calculate paying customers per month, and recommend a model with the tradeoff stated explicitly.",
      mode: "diagnostic",
      conceptsCovered: ["Choosing between freemium and free trial using real conversion benchmarks"],
      steps: [
        {
          stepId: "step-1-model-three-funnels",
          concept: "Choosing between freemium and free trial using real conversion benchmarks",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson cites: opt-in trials convert 8.9% of trial signups to paid but only 7.8% of visitors sign up. Opt-out trials convert 49.9% of signups but only 2.4% of visitors sign up (card requirement filters hard at the door). Freemium converts 3-5% of a much larger signup pool to paid over time.",
          question:
            "From 50,000 monthly visitors, which of the three models produces the most paying customers this month, and which produces the most total signed-up users (future upgrade candidates)?",
          toolName: "Google Sheets",
          where: "Build a 3-row table: model, visitor-to-signup rate, signup-to-paid rate, then multiply through.",
          procedure: [
            "Freemium: assume a 10% visitor-to-signup rate (low friction, no card) x 50,000 = 5,000 signups; apply 3% freemium-to-paid = 150 paying customers this month.",
            "Opt-in trial: 7.8% visitor-to-signup x 50,000 = 3,900 signups; apply 8.9% trial-to-paid = ~347 paying customers.",
            "Opt-out trial: 2.4% visitor-to-signup x 50,000 = 1,200 signups; apply 49.9% trial-to-paid = ~599 paying customers.",
            "Compare total signed-up users too: freemium leaves 4,850 unconverted-but-active free users; opt-out leaves only ~601 non-converters, most of whom never signed up at all.",
            "Weigh cost-to-serve: an analytics add-on with real compute cost per seller favors the model with fewer non-paying users on the infrastructure bill.",
          ],
          outputSample:
            "50,000 visitors, three models compared\n\nFreemium: 5,000 signups x 3% = 150 paying/mo. 4,850 free users still on infra.\nOpt-in trial: 3,900 signups x 8.9% = ~347 paying/mo. 3,553 lapsed trials, off infra after 14 days.\nOpt-out trial: 1,200 signups x 49.9% = ~599 paying/mo. Smallest funnel, highest yield per signup.",
          healthy:
            "The opt-out trial produces the most paying customers per visitor this month, and the fewest non-paying users sitting on infrastructure.",
          unhealthy:
            "Picking freemium by default because 'more signups feels safer,' without running the actual math on paying-customer yield.",
          interpret:
            "For a seller tool with real per-seller compute cost (analytics queries against live order data), the opt-out trial's card-required filter produces more revenue per visitor and less unpaid infrastructure load than freemium.",
          soWhat: [
            {
              symptom: "Team defaults to freemium because it 'feels more generous' to sellers",
              action: "Run the visitor-to-paying math before choosing; recommend opt-out trial given the compute cost per active seller",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Model the three funnels side by side and compute paying-customer yield",
            why: "A funnel comparison is a handful of multiplications, no paid tool needed",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page recommendation memo: paying-customer count per model, non-paying-user infrastructure load per model, and a stated recommendation with the tradeoff named explicitly.",
      sampleOutput:
        "Sea Limited, Shopee seller-tools launch memo (excerpt)\n\nModel comparison at 80,000 monthly visitors:\nFreemium: 480 paying/mo, 7,600 free users on infra.\nOpt-out trial: 940 paying/mo, 900 total signups.\nRecommendation: opt-out trial. Real-time inventory sync has non-trivial compute cost per active seller; the smaller, higher-intent funnel wins on unit economics.",
      successCriteria: [
        "Correctly applies both the visitor-to-signup and signup-to-paid rates for all three models",
        "States a recommendation with an explicit tradeoff, not just the model with the highest paying-customer count",
      ],
      portfolioReady: true,
    },
    {
      id: "freemium-trial-12-month-forecast",
      tier: "core",
      archetype: "forecast",
      title: "12-Month Forecast: When Does a Freemium-Only Launch Need to Add a Trial?",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given a 12-month signup and conversion trajectory for a freemium-only launch, forecast when paid-customer growth plateaus, and calculate whether layering an opt-out trial on top (a hybrid model) meaningfully changes the 12-month outcome.",
      companyId: "sea-limited",
      scenario:
        "Sea Limited is piloting a freemium seller-analytics tool inside Shopee's merchant app. Six months of real usage data shows freemium signups growing but paid conversion flattening. Leadership wants a 12-month forecast before deciding whether to add a premium trial on top.",
      brief:
        "Project month 7-12 paying customers under 'freemium stays freemium-only' versus 'freemium adds a hybrid opt-out trial in month 7,' using the lesson's benchmark rates, and recommend a path.",
      mode: "diagnostic",
      conceptsCovered: [
        "Forecasting freemium-only growth against a hybrid model transition",
        "The hybrid model layers a trial on top of a freemium base",
      ],
      steps: [
        {
          stepId: "step-1-baseline-freemium-forecast",
          concept: "Forecasting freemium-only growth against a hybrid model transition",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "Freemium-to-paid conversion in this lesson's benchmark sits at 3-5%, and it compounds slowly because it depends on users hitting a usage ceiling over time, not a fixed deadline. Month-over-month paid growth from a flat signup base plateaus once the addressable pool of 'about to hit the ceiling' users is exhausted.",
          question:
            "Months 1-6 show 4,000 new freemium signups/month and a steady 3.5% eventual conversion rate, but months 5 and 6 both added only ~40 net new paying customers versus ~140 in month 2. What's happening, and what does months 7-12 look like if nothing changes?",
          toolName: "Google Sheets",
          where: "Build a 12-row month-by-month table: new signups, cumulative free base, new paying customers, cumulative paying customers.",
          procedure: [
            "Extend the 6-month actuals at the same 4,000 signups/month and 3.5% eventual conversion rate for months 7-12.",
            "Note that new paying customers per month depend on how many freemium users are newly hitting the usage ceiling, not the whole free base, so growth flattens once early cohorts have already converted or plateaued as non-converters.",
            "Forecast: months 7-12 continue near the ~40-50/month plateau seen in months 5-6, absent any change to the funnel.",
            "Total 12-month paying customers under freemium-only: roughly 700-750.",
          ],
          outputSample:
            "Freemium-only forecast, months 1-12\n\nMonth 1: 4,000 signups, 140 new paying (early high-intent cohort converts fast)\nMonth 2: 4,000 signups, 140 new paying\n...\nMonth 5: 4,000 signups, 42 new paying (ceiling pool shrinking)\nMonth 6: 4,000 signups, 39 new paying\nMonth 7-12 (forecast): ~40/month flat -> ~240 more\n12-month cumulative paying: ~730",
          healthy:
            "Forecast is built from the observed plateau in months 5-6, not extrapolated from the strong early months.",
          unhealthy:
            "Assuming months 7-12 will keep adding 140 paying customers/month because that's what months 1-2 did, ignoring the visible plateau.",
          interpret:
            "A freemium-only model's paid growth is bounded by how fast users hit the usage ceiling, not by signup volume. Once the early high-intent cohort converts, growth flattens even with steady signups.",
          soWhat: [
            {
              symptom: "New paying customers per month dropped from 140 to ~40 by month 5, with signups holding flat",
              action: "Flag the plateau to leadership before month 7 planning, don't wait for a full quarter of flat growth to notice",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-hybrid-transition-forecast",
          concept: "The hybrid model layers a trial on top of a freemium base",
          lessonAnchor: "the-hybrid-model-increasingly-the-default",
          theoryRecap:
            "The lesson describes the hybrid model (Canva, Loom, Webflow): a freemium base handles distribution, and a time-boxed premium trial layered on top handles conversion urgency, converting users who already built a habit on the free tier.",
          question:
            "If month 7 adds a 14-day premium trial for freemium users who've hit the usage ceiling (targeting the plateaued ~3,650 free users from the first 6 months, not new signups), and that trial converts at the opt-out benchmark of 49.9% among the ~15% who actually start a trial, what does that add to the 12-month total?",
          toolName: "Google Sheets",
          where: "Add a one-time cohort row for the existing plateaued free base, separate from the ongoing new-signup rows.",
          procedure: [
            "Identify the plateaued pool: ~3,650 free users from months 1-6 who never converted under freemium alone.",
            "Apply a 15% trial-start rate (users who've already built a habit are the most likely to try a premium trial) = ~548 trial starts.",
            "Apply the 49.9% opt-out conversion benchmark to those trial starts = ~273 additional paying customers, one-time, in month 7.",
            "Add this to the freemium-only forecast: ~730 (freemium-only) + ~273 (hybrid trial layer) = ~1,003 paying customers by month 12.",
            "Note the caveat: this is a one-time unlock of the existing plateaued pool, not a new steady-state rate, month 8-12 still needs its own hybrid cohort math for a real model.",
          ],
          outputSample:
            "Hybrid transition, month 7 one-time cohort\n\nPlateaued free base: 3,650 users\nTrial starts (15%): 548\nConverted at 49.9%: ~273 new paying customers\n\n12-month total: 730 (freemium-only baseline) + 273 (hybrid unlock) = ~1,003",
          healthy:
            "The hybrid layer is modeled as a one-time unlock of the existing stuck cohort, with an explicit caveat that it isn't a repeatable monthly rate.",
          unhealthy:
            "Treating the +273 hybrid bump as a new permanent monthly run-rate and extrapolating it forward without re-deriving month 8-12 separately.",
          interpret:
            "A hybrid model's biggest lift often comes from finally converting users who already built a habit but had no urgency mechanism, exactly the population freemium alone structurally can't monetize.",
          soWhat: [
            {
              symptom: "Freemium-only forecast plateaus at ~730 paying customers by month 12",
              action: "Recommend layering an opt-out trial for the plateaued cohort in month 7, expected one-time lift of ~273 paying customers",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the 12-month cohort forecast table for both scenarios",
            why: "A month-by-month cohort table is a spreadsheet exercise, no forecasting software required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Pull the real month 1-6 signup and conversion cohort data this forecast is built on",
            why: "Cohort-based conversion analysis over time is Amplitude's core use case once you have real usage events, not a synthetic export",
            required: false,
            fallback: "Export raw signup/conversion event timestamps from any analytics tool and build the cohort table in Google Sheets manually",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 12-month forecast comparing freemium-only versus a month-7 hybrid trial layer, with the one-time-unlock caveat stated explicitly, and a recommendation.",
      sampleOutput:
        "Peloton digital-only tier, 12-month hybrid forecast (excerpt)\n\nFreemium-only baseline: ~610 paying by month 12 (plateau visible from month 4)\nHybrid trial layer (month 7, targeting 5,200 plateaued free users): +389 one-time\nRevised 12-month total: ~999\nCaveat: month 8-12 requires a fresh cohort model, this is not a new run-rate.",
      successCriteria: [
        "Correctly identifies the freemium plateau from the observed month 5-6 data rather than extrapolating early months",
        "Models the hybrid trial layer as a one-time cohort unlock, not a permanent new monthly rate",
        "States the caveat about needing a fresh cohort model for months 8-12 explicitly in the deliverable",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the hybrid forecast assuming only a 20% opt-out conversion rate (a more conservative estimate for a less habit-formed cohort) and see how much the recommendation changes.",
    },
  ],

  "onboarding": [
    {
      id: "onboarding-friction-audit-tac-security",
      tier: "mini",
      archetype: "audit",
      title: "Friction Audit: Auditing TAC Security's Trial Signup Flow",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 8-step free-trial signup-and-setup funnel with per-step drop-off percentages, correctly identify which steps sit before the activation event (a completed vulnerability scan) and calculate how many signups are lost to non-value fields.",
      companyId: "tac-security",
      scenario:
        "You're the growth analyst at TAC Security (TAC Infosec), a vulnerability-and-risk-management SaaS platform, reviewing why free-trial signups aren't reaching their first completed scan.",
      brief:
        "Apply the lesson's Step 1 (define one activation event) and Step 3 (defer everything that is not value) to a supplied step-by-step funnel with drop-off data, then flag every pre-activation step as a friction cost.",
      mode: "diagnostic",
      conceptsCovered: ["Defer everything that is not value"],
      steps: [
        {
          stepId: "step-1-classify-pre-activation-steps",
          concept: "Defer everything that is not value",
          lessonAnchor: "step-3-defer-everything-that-is-not-value",
          theoryRecap:
            "The lesson's Step 3 says every field required before the aha moment costs roughly 10% of remaining signups, and the fix is deferring billing, profile setup, and tours until after activation.",
          question:
            "Given TAC Security's 8-step funnel below, which steps happen before the activation event (first completed vulnerability scan), and what percentage of signups are lost to those pre-activation steps combined?",
          toolName: "Google Sheets",
          where: "Import the 8-row funnel export, add a column flagging each step pre- or post-activation.",
          procedure: [
            "Import the funnel: signup(1,000) -> email verify(870) -> company profile(690) -> team size dropdown(610) -> integration picker(540) -> asset upload(430) -> first scan configured(410) -> first scan completed(365)",
            "Mark 'first scan completed' as the single activation event per the lesson's Step 1 rule",
            "Flag every step before it (verify, profile, team size, integration picker, asset upload, scan configured) as pre-activation",
            "Sum the drop from signup (1,000) to the first post-activation-adjacent step (asset upload, 430) to quantify pre-activation loss",
            "Separate the two required-but-not-value fields (company profile, team size dropdown) from the two setup fields the product genuinely needs (integration picker, asset upload) before a scan can run",
          ],
          outputSample:
            "TAC Security trial funnel (n=1,000)\nsignup 1,000 -> verify 870 (-13.0%) -> profile 690 (-20.7%) -> team size 610 (-11.6%) -> integration 540 (-11.5%) -> asset upload 430 (-20.4%) -> scan configured 410 (-4.7%) -> SCAN COMPLETE 365 (-11.0%)\n\nPre-activation loss: 1,000 -> 365 = 63.5% never reach activation\nRemovable-now fields (not required to run a scan): company profile, team size dropdown -> combined loss 300 signups (30% of the starting cohort)",
          healthy: "Every step before the activation event is either strictly required to configure the scan, or removed.",
          unhealthy: "Company profile and team size dropdown sit between signup and the first scan with no technical reason to gate the scan behind them.",
          interpret:
            "63.5% of signups never complete a scan, and two of the six pre-activation steps (profile, team size) don't need to exist before that scan runs at all, they're collected value the product wants, not value the user came for.",
          soWhat: [
            { symptom: "Company profile and team size dropdown sit before the first scan", action: "Move both fields to a post-scan settings prompt", effort: "dev ticket" },
            { symptom: "63.5% pre-activation drop with no per-step ownership", action: "Assign a single owner to instrument and review this funnel weekly per Step 6", effort: "30 min" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Import the funnel export, flag steps, compute drop-off", why: "No account friction, handles an 8-row funnel easily", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Amplitude", role: "Instrument the real funnel with actual timestamped events instead of a static export", why: "Turns this one-time audit into the weekly funnel review the lesson's Step 6 calls for", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A funnel table with every step flagged pre- or post-activation, plus a ranked list of which pre-activation fields to remove or defer first.",
      sampleOutput:
        "Yatra Online, trial signup teardown (excerpt)\n\nActivation event: first completed itinerary saved\nPre-activation steps: 5 of 7\nRemovable now: travel-preference survey (no scan/save dependency) -> 18% of remaining signups lost here alone\nRecommendation: move preference survey to post-first-save, matches Step 3's defer principle",
      successCriteria: [
        "Correctly identifies 'first scan completed' as the single activation event, not scan configured or asset upload",
        "Correctly separates the two non-essential pre-activation fields from the two functionally required ones",
        "Computes the 63.5% pre-activation loss figure from the supplied numbers",
      ],
      portfolioReady: true,
    },
    {
      id: "onboarding-rebuild-care-com-workspace",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild the Flow: From a 12-Field Form to a Seeded Care Match",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Care.com's current 12-field caregiver-search onboarding form, rebuild the first-run experience using a two-question intent picker and pre-seeded sample matches, applying the lesson's Step 4 and Step 5 directly to a real information architecture problem.",
      companyId: "care-com",
      scenario:
        "You're the growth PM at Care.com, the online marketplace for finding child, senior, and pet care. New users currently fill out 12 profile fields before seeing a single caregiver match.",
      brief:
        "Replace the 12-field intake form's blocking position with a 2-question intent picker that routes to a pre-seeded results screen, keeping the detailed fields but moving them after the first match is shown.",
      mode: "build",
      conceptsCovered: ["Personalize the first run", "Seed empty states"],
      steps: [
        {
          stepId: "step-1-build-intent-picker",
          concept: "Personalize the first run",
          lessonAnchor: "step-4-personalize-the-first-run",
          theoryRecap:
            "The lesson's Step 4 says a two-question intent picker lets you route users to completely different first experiences, since a solo user and an enterprise admin don't need the same first three screens.",
          question:
            "Care.com serves parents needing childcare, adults needing senior care, and pet owners needing pet sitters, three audiences with almost no field overlap. What two questions replace the first 6 of the 12 fields?",
          toolName: "Google Sheets",
          where: "Draft the picker as a two-row spec: question text, answer options, and which downstream fields each answer makes irrelevant.",
          procedure: [
            "Question 1: 'What kind of care are you looking for?' -> Child / Senior / Pet (replaces 3 category-specific fields collected identically today regardless of answer)",
            "Question 2: 'When do you need this care?' -> Right away / Within a month / Just researching (replaces urgency and scheduling fields, and determines whether to show live availability first)",
            "Map each of the remaining 10 original fields to whether it's still needed pre-match (schedule, location) or can move post-match (payment details, background-check preference, backup care needs)",
            "Result: 2 questions replace 6 fields pre-match, the other 6 move to a post-match profile step",
          ],
          outputSample:
            "BEFORE: 12 fields, 0 matches shown until form complete\nAFTER: 2 questions (care type, urgency) -> matches shown -> 4 remaining pre-match fields (zip code, schedule) -> matches refresh -> 6 fields deferred to post-match profile completion",
          healthy: "A user sees real caregiver cards within 2 questions and a zip code.",
          unhealthy: "A user fills 12 fields before seeing whether any caregivers are even available in their area.",
          interpret: "Most of the original form was collecting profile-completeness data the business wants, not data the match algorithm needs before showing a first result.",
          soWhat: [
            { symptom: "Zero caregiver cards shown until form completion", action: "Query available caregivers after question 2 + zip code only", effort: "dev ticket" },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-seed-empty-state",
          concept: "Seed empty states",
          lessonAnchor: "step-5-seed-empty-states",
          theoryRecap:
            "The lesson's Step 5 says a pre-filled workspace demonstrates value while a blank canvas demands work; pre-populating with sample content shifts the user's job from 'figure out how to start' to 'see if this works for me.'",
          question:
            "Once the intent picker routes a parent needing childcare in a given zip code, what should the very first results screen show if the real-time caregiver query is still loading or returns zero exact matches?",
          toolName: "Google Sheets",
          where: "Spec the fallback content for the results screen's three states: loading, zero-match, and populated.",
          procedure: [
            "Loading state: show 3 anonymized sample caregiver cards from the nearest metro area, labeled 'Example matches while we search your area', never a blank spinner",
            "Zero-match state: show the same 3 sample cards with a 'expand your radius' prompt instead of a dead end",
            "Populated state: real matches replace the samples within 2 seconds in the common case",
            "Every sample card links to 'How matching works' instead of a real profile, so it can never be mistaken for an actual available caregiver",
          ],
          outputSample: "RESULTS SCREEN (loading, 0-2s)\nExample matches while we search your area:\n  - Maria G. -- 4.9 stars, 6 yrs experience, CPR certified (sample)\n  - James T. -- 4.8 stars, background-checked (sample)\n  - Priya K. -- 4.9 stars, infant care specialist (sample)\n[Expanding your search...]",
          healthy: "New users see what a good match looks like within 2 seconds, real or sample.",
          unhealthy: "New users stare at a loading spinner or a 'no caregivers found' dead end as their first post-signup experience.",
          interpret: "Seeding the empty state removes the single highest-risk moment in the new flow, the gap between finishing the intent picker and seeing real value.",
          soWhat: [
            { symptom: "Zero-match zip codes show a dead-end empty state today", action: "Ship the 3-sample-card fallback before removing any of the 12 original fields", effort: "dev ticket" },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Draft the field-reduction map and fallback-state spec", why: "Enough to plan the rebuild before any engineering ticket is written", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Hotjar", role: "Record real sessions on the current 12-field form to confirm exactly where users abandon before shipping the rebuild", why: "Validates the rebuild plan against real behavior instead of assumption alone", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A field-reduction map (12 fields -> 2 questions + 4 pre-match fields + 6 deferred fields) plus a 3-state fallback spec for the results screen.",
      sampleOutput:
        "Duolingo, first-lesson-before-signup rebuild (excerpt)\n\nBEFORE: email + password required before lesson 1\nAFTER: lesson 1 playable immediately, account creation deferred until user tries to save progress\nResult: 47% reduction in first-week churn (UserGuiding, 2024 case study)",
      successCriteria: [
        "Reduces pre-match fields from 12 to 2 questions + zip code only",
        "Specifies a non-blank fallback for both loading and zero-match states",
        "Correctly defers the 6 non-essential fields to a post-match step rather than deleting them",
      ],
      portfolioReady: true,
      stretch:
        "Design the two-question picker's routing logic for a fourth, unstated segment: a user who selects more than one care type (e.g. both child and senior care) in the same session.",
    },
  ],
  "reverse-trials": [
    {
      id: "reverse-trials-forecast-stoneco",
      tier: "mini",
      archetype: "forecast",
      title: "The Economics Call: Forecasting a Reverse Trial's Payoff",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given StoneCo's current freemium conversion rate and monthly signup volume for a merchant-analytics add-on, forecast a conservative incremental-revenue range from switching to a reverse trial, using the lesson's cited conversion benchmarks.",
      companyId: "stoneco",
      scenario:
        "You're the growth analyst at StoneCo, the Brazilian merchant-payments and fintech platform for SMBs, forecasting whether switching a payments-analytics add-on from standard freemium to a 30-day reverse trial is worth the engineering cost.",
      brief:
        "Apply the lesson's conversion-rate ranges (2-5% freemium vs. 15-30% reverse trial) conservatively, not optimistically, to a real signup volume and current conversion rate.",
      mode: "diagnostic",
      conceptsCovered: ["Reverse trial conversion economics"],
      steps: [
        {
          stepId: "step-1-forecast-conservative-lift",
          concept: "Reverse trial conversion economics",
          lessonAnchor: "measuring-success",
          theoryRecap:
            "The lesson's Measuring Success section sets a 15-30% trial-to-paid target for B2B SaaS reverse trials versus the 2-5% freemium baseline, and warns to track time-to-convert and 90-day retention, not just headline conversion.",
          question:
            "StoneCo's add-on gets 4,000 free signups a month and currently converts at 3.2% under freemium. Using the low end of the reverse-trial range as the conservative case, how many incremental paid customers per month does the switch forecast, and what's the one metric that could make this forecast wrong?",
          toolName: "Google Sheets",
          where: "Build a 3-row scenario table: current freemium, conservative reverse trial (15%), and optimistic reverse trial (30%).",
          procedure: [
            "Row 1, current: 4,000 signups x 3.2% = 128 paid customers/month",
            "Row 2, conservative reverse trial: 4,000 x 15% = 600 paid customers/month, a 472-customer lift",
            "Row 3, optimistic reverse trial: 4,000 x 30% = 1,200 paid customers/month, a 1,072-customer lift",
            "Flag that the forecast assumes 90-day retention holds steady; the lesson warns reverse-trial converts can churn faster if they converted from loss aversion rather than genuine fit",
            "Recommend using Row 2 (conservative) for any resourcing decision, and instrumenting 90-day retention from week one of rollout",
          ],
          outputSample:
            "StoneCo add-on forecast (n=4,000 signups/mo)\nCurrent (freemium, 3.2%): 128 paid/mo\nConservative (reverse trial, 15%): 600 paid/mo (+472)\nOptimistic (reverse trial, 30%): 1,200 paid/mo (+1,072)\nRisk flag: forecast is invalid if 90-day retention for reverse-trial converts drops below the freemium baseline",
          healthy: "The forecast used for a resourcing decision is the conservative 15% case, not the optimistic 30% case.",
          unhealthy: "A team greenlights engineering spend based on the 30% optimistic scenario without a retention caveat attached.",
          interpret: "A 472-customer conservative lift already justifies most reverse-trial engineering costs; the real open question is whether those converts stay, not whether they convert.",
          soWhat: [
            { symptom: "Forecast built on the 30% optimistic case alone", action: "Rebuild the business case using the 15% conservative case as the floor", effort: "30 min" },
            { symptom: "No retention instrumentation planned for the rollout", action: "Add a 90-day retention cohort comparison to the launch checklist before shipping", effort: "dev ticket" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the 3-row conversion-scenario forecast", why: "A simple multiplication table needs nothing more", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Mixpanel", role: "Track the actual reverse-trial cohort's conversion and 90-day retention once live, against this forecast", why: "Confirms whether the conservative forecast held once real data replaces the estimate", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A 3-row conversion-scenario forecast table (current, conservative reverse trial, optimistic reverse trial) with a stated retention risk flag.",
      sampleOutput:
        "Trade Desk, self-serve tool forecast (excerpt)\n\nCurrent (freemium, 2.8%): 84 paid/mo (n=3,000 signups)\nConservative (reverse trial, 15%): 450 paid/mo (+366)\nRisk flag: enterprise buyers in this segment have a 6-month sales cycle, reverse trials may not apply to that portion of signups",
      successCriteria: [
        "Correctly computes all three rows of the scenario table from the given inputs",
        "Recommends the conservative (15%) case for resourcing decisions, not the optimistic case",
        "States the retention risk that could invalidate the forecast",
      ],
      portfolioReady: true,
    },
    {
      id: "reverse-trials-head-to-head-trade-desk",
      tier: "core",
      archetype: "head-to-head",
      title: "Reverse Trial vs. Freemium: Reading Two Cohort Reports",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two real cohort performance tables (a reverse-trial cohort and a standard-freemium cohort for the same self-serve tool) and two downgrade-email variants, correctly diagnose which model is healthier on more than conversion rate alone, and which email variant follows the lesson's messaging guidance.",
      companyId: "trade-desk",
      scenario:
        "You're the growth PM at The Trade Desk, the programmatic advertising DSP, deciding whether to keep a self-serve campaign-optimization tool on standard freemium or move it to a reverse trial ahead of a broader rollout.",
      brief:
        "Compare two cohort tables across conversion rate, time-to-convert, and 90-day retention (not conversion rate alone), then evaluate two downgrade-notice email drafts against the lesson's loss-framing guidance.",
      mode: "diagnostic",
      conceptsCovered: ["Measuring reverse trial success beyond conversion rate", "Downgrade communication timing and framing"],
      steps: [
        {
          stepId: "step-1-compare-cohort-health",
          concept: "Measuring reverse trial success beyond conversion rate",
          lessonAnchor: "measuring-success",
          theoryRecap:
            "The lesson's Measuring Success section says to track trial-to-paid conversion, time-to-convert, and post-conversion 90-day retention together, since reverse trials can convert faster but churn faster too.",
          question:
            "Cohort A (reverse trial): 22% conversion, 68% convert before downgrade, 71% 90-day retention. Cohort B (freemium): 4% conversion, no downgrade event, 89% 90-day retention. Which cohort is actually healthier for the business?",
          toolName: "Google Sheets",
          where: "Build a 2-row, 3-column comparison table and compute the net retained-paid-customer rate for each cohort.",
          procedure: [
            "Cohort A: 22% conversion x 71% 90-day retention = 15.6% of original signups are still paying at day 90",
            "Cohort B: 4% conversion x 89% 90-day retention = 3.6% of original signups are still paying at day 90",
            "Cohort A still wins on net retained customers despite the lower retention rate, because the conversion gap (22% vs 4%) outweighs the retention gap (71% vs 89%)",
            "Flag the retention gap itself as the actionable finding: an 18-point retention drop suggests some Cohort A converts are loss-averse rather than genuinely activated",
          ],
          outputSample:
            "Cohort comparison (n=1,000 each)\nA (reverse trial): 220 convert, 156 still paying day 90 (15.6% net)\nB (freemium): 40 convert, 36 still paying day 90 (3.6% net)\nGap to investigate: A's 71% 90-day retention vs B's 89%, why do reverse-trial converts churn more?",
          healthy: "The comparison weighs conversion x retention together, and treats the retention gap as a finding to investigate, not a reason to reject the reverse trial outright.",
          unhealthy: "Picking Cohort B because 89% looks like a better number than 71%, without multiplying through to net retained customers.",
          interpret: "Cohort A delivers over 4x the net retained-paying customers of Cohort B, but the retention gap says the reverse trial's post-conversion nurture and product fit still need work.",
          soWhat: [
            { symptom: "Retention comparison stops at the headline 71% vs 89% numbers", action: "Segment Cohort A's day-90 churners by time-to-convert to see if fast converters churn more than slow ones", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-evaluate-downgrade-emails",
          concept: "Downgrade communication timing and framing",
          lessonAnchor: "3-downgrade-communication",
          theoryRecap:
            "The lesson says the downgrade notice should arrive at least 3 days before the actual downgrade and should frame what the user will lose, not what they need to pay, citing 'Your dashboard will become read-only on June 17' as the model.",
          question:
            "Draft 1 arrives on the downgrade day and reads 'Upgrade now to keep your plan active!' Draft 2 arrives 4 days before downgrade and reads 'Your campaign-bid-optimization automations pause on August 24 unless you upgrade.' Which draft follows the lesson's guidance, and on which two dimensions does the other one fail?",
          toolName: "Google Sheets",
          where: "Score both drafts against a 2-column checklist: timing (3+ days advance) and framing (loss-specific vs. generic upsell).",
          procedure: [
            "Draft 1 fails timing (arrives on the downgrade day itself, giving zero advance warning) and fails framing (generic 'upgrade to keep your plan' instead of naming the specific lost feature and date)",
            "Draft 2 passes timing (4 days advance, exceeds the 3-day minimum) and passes framing (names the specific feature, 'campaign-bid-optimization automations', and the exact date)",
            "Flag that Draft 1 is a Mistake 3 case study from the lesson's Common Mistakes section, weak downgrade messaging",
          ],
          outputSample: "Draft 1: FAILS timing (0 days advance), FAILS framing (generic)\nDraft 2: PASSES timing (4 days advance), PASSES framing (names feature + date)\nVerdict: Draft 2 matches the lesson's model example",
          healthy: "The winning draft names the specific feature and exact date, sent with 3+ days of advance notice.",
          unhealthy: "A same-day, generic 'upgrade now' email with no reference to what is actually being lost.",
          interpret: "Draft 1 is the exact failure pattern the lesson's Mistake 3 warns underperforms, timing and framing are both correctable without touching the trial mechanic itself.",
          soWhat: [
            { symptom: "Downgrade emails are generic and same-day", action: "Rewrite using Draft 2's pattern: name the specific feature, exact date, 4+ days advance", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the cohort comparison table and the email-draft scoring checklist", why: "Both comparisons are simple enough not to need a specialized tool", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Amplitude", role: "Pull the real cohort conversion, time-to-convert, and 90-day retention data instead of a supplied table", why: "Replaces the static comparison with a live, ongoing cohort dashboard", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A cohort comparison table with the net-retained-customer calculation for both models, plus a scored evaluation of the two downgrade-email drafts.",
      sampleOutput:
        "Canva, downgrade notice evaluation (excerpt)\n\nDraft sent day 27 of 30-day trial: 'Your background remover and brand kit tools return to standard on day 30.'\nTiming: PASSES (3 days advance)\nFraming: PASSES (names specific tools and the exact day)",
      successCriteria: [
        "Correctly computes net retained-paid-customer rate for both cohorts (15.6% vs 3.6%) and recommends Cohort A despite its lower retention percentage",
        "Identifies the 18-point retention gap as a finding to investigate, not a reason to reject the reverse trial",
        "Correctly scores Draft 1 as failing both timing and framing, and Draft 2 as passing both",
      ],
      portfolioReady: true,
    },
  ],

  "network-effects": [
    {
      id: "network-effects-yelp-liquidity-audit",
      tier: "mini",
      archetype: "audit",
      title: "Real Network Effect or Just Growth? Auditing Yelp's City-Level Liquidity",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 3-city export of Yelp business-listing counts, monthly active reviewers, and reviews-per-business, classify which cities have crossed the 'can users reliably find what they need' liquidity threshold and which are still in cold start.",
      companyId: "yelp",
      scenario:
        "You're a growth analyst at Yelp assessing whether three newer metro markets are ready for a local ad-sales push, or whether the review density is still too thin to support it.",
      brief:
        "Compute reviews-per-active-business for each city, apply the lesson's marketplace liquidity definition, and flag which city is cold-start, which is tipping, and which has compounded past critical mass.",
      mode: "diagnostic",
      conceptsCovered: ["Classifying critical mass by liquidity, not raw user count"],
      steps: [
        {
          stepId: "step-1-liquidity-classification",
          concept: "Classifying critical mass by liquidity, not raw user count",
          lessonAnchor: "stage-2-critical-mass",
          theoryRecap:
            "The lesson defines a marketplace's critical mass threshold by liquidity: can a user reliably find what they need, not by total signups.",
          question:
            "City A has 40,000 listed businesses and 2,000 reviews. City B has 6,000 listed businesses and 18,000 reviews. Which city is actually closer to critical mass?",
          toolName: "Google Sheets",
          where: "Import the 3-city export, add a computed reviews-per-business column, sort descending.",
          procedure: [
            "Import the export with columns: city, businesses_listed, monthly_active_reviewers, total_reviews",
            "Add a formula column: =total_reviews/businesses_listed",
            "Sort by that ratio descending, not by raw business count",
            "Flag any city under a 0.5 reviews-per-business ratio as cold-start",
          ],
          outputSample:
            "City, Businesses, Reviews, Reviews/Business\nCity B, 6,000, 18,000, 3.00 -> LIQUID\nCity C, 15,000, 9,000, 0.60 -> TIPPING\nCity A, 40,000, 2,000, 0.05 -> COLD START",
          healthy: "A smaller city with a high reviews-per-business ratio, users can reliably find a reviewed business.",
          unhealthy: "A large city with thousands of listings but almost no reviews per business, raw scale masking cold start.",
          interpret:
            "Total listings measure reach, not liquidity. A city with fewer, well-reviewed businesses is closer to critical mass than a sparsely-reviewed sprawl.",
          soWhat: [
            {
              symptom: "Sales team wants to launch paid ads in the largest city by listing count",
              action: "Redirect ad-sales launch to the city with the highest reviews-per-business ratio first",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compute and sort the reviews-per-business ratio across cities",
            why: "Free, no account friction, sufficient for a 3-row comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 3-city liquidity ranking with a cold-start / tipping / liquid classification and one launch recommendation.",
      sampleOutput:
        "Zillow market-readiness memo (excerpt)\n\nLIQUID: Austin (3.1 reviews/listing) -> greenlight local ad-sales outreach\nTIPPING: Raleigh (0.6 reviews/listing) -> hold 1 quarter, reassess\nCOLD START: Boise (0.08 reviews/listing) -> needs manual seller-review seeding before any paid push",
      successCriteria: [
        "Correctly computes reviews-per-business for all 3 cities",
        "Classifies each city as cold-start, tipping, or liquid using the ratio, not raw counts",
        "Recommends the ad-sales launch city based on liquidity, not listing volume",
      ],
      portfolioReady: true,
    },
    {
      id: "network-effects-goto-city-expansion-simulation",
      tier: "core",
      archetype: "forecast",
      title: "City-by-City Cold Start: Simulating GoTo's Ride-Hailing Expansion",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Play a 3-stage city-launch simulation for a GoTo ride-hailing expansion: decide where to subsidize, when to declare density sufficient, and how to react once the network tips, tracking spend and driver density at each decision point.",
      companyId: "goto-gojek-tokopedia",
      scenario:
        "You're the city launch lead for GoTo's ride-hailing vertical, opening a new secondary Indonesian city with a fixed 90-day subsidy budget.",
      brief:
        "At each stage, pick the tactic that matches the lesson's cold-start and critical-mass playbook. Wrong calls burn budget without building density; right calls hit the driver-density threshold and let organic growth take over.",
      mode: "simulation",
      conceptsCovered: [
        "Subsidizing the scarce side during cold start",
        "Geographic concentration to hit a density threshold",
        "Recognizing the critical-mass tipping point",
      ],
      stages: [
        {
          stageId: "stage-1-launch-decision",
          label: "Week 1: Where does the subsidy budget go?",
          elapsed: "Day 1",
          concept: "Subsidizing the scarce side during cold start",
          lessonAnchor: "stage-1-cold-start",
          situation:
            "Riders open the app and see almost no available drivers nearby. Drivers who sign up see almost no ride requests. Both sides are near-empty.",
          dashboard: "12 drivers online city-wide, 4 completed rides in week 1, average rider wait time 22 minutes",
          spendToDate: "Rp0 of Rp450M budget",
          budgetRemaining: "Rp450M",
          decision: {
            prompt: "Where should the first month's subsidy budget go?",
            options: [
              {
                id: "subsidize-drivers",
                label: "Guarantee drivers a minimum hourly rate to build supply first",
                verdict: "optimal",
                outcome: "Driver count triples within 2 weeks; wait times start dropping as supply builds.",
                why: "Riders have no product without drivers online, so supply is the scarce, harder-to-recruit side here, exactly the tactic the lesson attributes to Uber's early playbook.",
                lessonRef: "stage-1-cold-start",
                nextStageId: "stage-2-density-check",
              },
              {
                id: "subsidize-riders",
                label: "Offer riders free first rides to drive demand",
                verdict: "costly",
                outcome: "Ride requests spike but most go unfulfilled, riders churn after one bad experience.",
                why: "Demand without supply just burns budget on frustrated riders. The lesson's Mistake 3 warns against subsidizing the abundant, or in this case irrelevant, side.",
                lessonRef: "common-mistakes",
                nextStageId: "stage-2-density-check",
              },
              {
                id: "split-budget-evenly",
                label: "Split the subsidy 50/50 across both sides",
                verdict: "acceptable",
                outcome: "Driver growth is slower than the supply-first path, but the city avoids a full stall.",
                why: "Not wrong, but diluting a scarce subsidy budget across both sides moves neither one fast enough to hit density quickly.",
                lessonRef: "stage-1-cold-start",
                nextStageId: "stage-2-density-check",
              },
            ],
          },
        },
        {
          stageId: "stage-2-density-check",
          label: "Day 30: Do you expand to a second neighborhood or stay concentrated?",
          elapsed: "Day 30",
          concept: "Geographic concentration to hit a density threshold",
          lessonAnchor: "stage-1-cold-start",
          situation:
            "Driver count is climbing in the launch district, but growth has slowed and the team is under pressure to show city-wide coverage.",
          dashboard: "18 drivers online concurrently in the launch district (target: 15-20), wait time down to 6 minutes",
          spendToDate: "Rp180M of Rp450M budget",
          budgetRemaining: "Rp270M",
          decision: {
            prompt: "The launch district is close to the 15-20 concurrent-driver density target. What next?",
            options: [
              {
                id: "hold-and-confirm",
                label: "Hold subsidies in the launch district until density is confirmed stable for 2 weeks",
                verdict: "optimal",
                outcome: "District crosses the density threshold and wait times stabilize under 5 minutes without added spend.",
                why: "The lesson's tactic is geographic concentration first: 15-20 concurrent cars was the density GM William Barnes identified before expanding further.",
                lessonRef: "stage-1-cold-start",
                nextStageId: "stage-3-critical-mass-tip",
              },
              {
                id: "expand-second-district",
                label: "Split the remaining budget to open a second neighborhood immediately",
                verdict: "costly",
                outcome: "Both districts now sit below the density threshold; wait times rise city-wide.",
                why: "Spreading a still-forming network thin resets the cold-start clock in a second area before the first has tipped, exactly Mistake 2 in the lesson.",
                lessonRef: "common-mistakes",
                nextStageId: "stage-3-critical-mass-tip",
              },
              {
                id: "cut-subsidy-early",
                label: "Cut driver subsidies now to save budget since density looks close",
                verdict: "acceptable",
                outcome: "Some drivers log off without the guarantee; density dips just under threshold, needing a top-up later.",
                why: "Cutting the subsidy before density is confirmed stable is premature, the lesson's Subsidy Trap warns that pulling support too early can undo the density you just built.",
                lessonRef: "the-subsidy-trap",
                nextStageId: "stage-3-critical-mass-tip",
              },
            ],
          },
        },
        {
          stageId: "stage-3-critical-mass-tip",
          label: "Day 75: The network has tipped, what now?",
          elapsed: "Day 75",
          concept: "Recognizing the critical-mass tipping point",
          lessonAnchor: "stage-2-critical-mass",
          situation:
            "Ride requests are growing faster than the marketing team is spending, word-of-mouth referrals now outnumber paid signups.",
          dashboard: "210 drivers online city-wide, average wait time 4 minutes, 61% of new riders arriving via referral, not ads",
          spendToDate: "Rp300M of Rp450M budget",
          budgetRemaining: "Rp150M",
          decision: {
            prompt: "Referrals now outpace paid acquisition. What should the remaining Rp150M budget do?",
            options: [
              {
                id: "shift-to-retention",
                label: "Redirect remaining budget from acquisition to retention loops and reliability",
                verdict: "optimal",
                outcome: "Repeat ride frequency climbs, the network's compounding growth becomes self-reinforcing.",
                why: "The lesson is explicit: reaching critical mass means users can stay, not that they will, engagement and reliability convert reach into stickiness.",
                lessonRef: "stage-2-critical-mass",
                nextStageId: "end",
              },
              {
                id: "keep-spending-acquisition",
                label: "Keep the full budget on paid rider acquisition since it's working",
                verdict: "costly",
                outcome: "CAC creeps up while organic referral growth was already covering new demand for free.",
                why: "Once compounding growth is self-reinforcing, continued heavy paid spend is redundant, the lesson notes the incumbent's job past this point is mostly to avoid self-inflicted damage, not keep force-feeding growth.",
                lessonRef: "stage-3-compounding-dominance",
                nextStageId: "end",
              },
              {
                id: "bank-the-budget",
                label: "Bank the remaining budget unspent and declare the launch complete",
                verdict: "acceptable",
                outcome: "City stabilizes, but a chance to lock in retention loops before a competitor enters is missed.",
                why: "Not harmful, but passive. The lesson frames this stage as needing active reinforcement of retention, not just coasting on momentum.",
                lessonRef: "stage-2-critical-mass",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track spend-to-date, driver density, and wait-time trend across the 3 decision points",
            why: "Free, sufficient for logging a 3-stage decision trail",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A completed 3-stage decision log with the chosen tactic, outcome, and remaining budget at each stage.",
      sampleOutput:
        "Zillow city-launch decision log (excerpt, different market)\n\nStage 1: Subsidized supply side first -> driver count tripled in 2 weeks\nStage 2: Held subsidy, confirmed density stable -> crossed 15-20 concurrent threshold\nStage 3: Shifted budget to retention -> repeat-ride frequency up, CAC flat",
      successCriteria: [
        "Chooses the supply-side subsidy at Stage 1",
        "Chooses to hold and confirm density before expanding at Stage 2",
        "Chooses to shift budget to retention once referrals overtake paid acquisition at Stage 3",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation choosing 'costly' at every stage and total the wasted budget versus the optimal path.",
    },
  ],
  "two-sided-marketplaces": [
    {
      id: "two-sided-marketplaces-cold-start-strategy-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which Side Do You Seed First? Auditing a Marketplace Launch Plan",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a scenario describing a new fashion-rental marketplace's supply (designer inventory) and demand (renters) constraints, apply the lesson's seed-first decision table to choose which side to seed and justify it.",
      companyId: "rent-the-runway",
      scenario:
        "You're a marketplace strategist at Rent the Runway, planning the launch of a new city market where designer brand partnerships are hard to close but renter sign-ups are cheap to acquire via paid social.",
      brief:
        "Use the lesson's seed-first decision table to determine which side is the actual bottleneck, then write a one-paragraph justification a designer-partnerships lead could act on.",
      mode: "diagnostic",
      conceptsCovered: ["Choosing which side to seed first based on scarcity"],
      steps: [
        {
          stepId: "step-1-seed-first-decision",
          concept: "Choosing which side to seed first based on scarcity",
          lessonAnchor: "which-side-should-you-seed-first",
          theoryRecap:
            "The lesson's decision table says: if supply is scarce or hard to recruit, seed supply first, because demand won't show up if there's nothing to rent.",
          question:
            "Designer brand partnerships take 6-10 weeks to close and require inventory commitments. Renter sign-ups convert in days via paid social. Which side is the real launch bottleneck?",
          toolName: "Google Sheets",
          where: "Build a 2-row comparison: time-to-acquire, cost-to-acquire, and 'does the other side show up without this one' for each side.",
          procedure: [
            "List supply (designer inventory) and demand (renters) as two rows",
            "Fill in time-to-acquire and acquisition cost for each",
            "Answer: would renters sign up with an empty closet of inventory? Would designers commit inventory with zero renters?",
            "Apply the decision table: seed the scarce, slow-to-recruit side first",
          ],
          outputSample:
            "Side, Time to Acquire, Cost, Shows up without the other?\nSupply (designers), 6-10 weeks, High (inventory commitment), No, renters need selection\nDemand (renters), Days, Low (paid social), No, but cheap and fast to refill",
          healthy: "Recognizing that fast, cheap acquisition on one side doesn't matter if the slow side is what actually gates launch.",
          unhealthy: "Launching a renter acquisition campaign before enough designer inventory exists to fill it.",
          interpret:
            "Supply is the scarce, slow-to-recruit side here, exactly the pattern the lesson flags as 'one side is also the product' since designer inventory IS what Rent the Runway sells.",
          soWhat: [
            {
              symptom: "Marketing wants to run a renter acquisition campaign before launch",
              action: "Delay the demand campaign until a minimum viable designer catalog is locked in for the city",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the two-row seed-first comparison",
            why: "Free, fast enough for a 2-row structured decision",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-paragraph seed-first recommendation with the comparison table backing it.",
      sampleOutput:
        "ThredUp new-market launch memo (excerpt)\n\nSeed supply first. Seller onboarding (Clean Out Kits) takes 2-3 weeks to convert into listable inventory, while buyer acquisition converts same-day via paid social. Hold buyer-acquisition spend until the market has enough listed inventory to support first-session conversion.",
      successCriteria: [
        "Correctly identifies designer supply as the scarce, slow-to-recruit side",
        "Recommends delaying demand-side spend until a minimum inventory threshold exists",
      ],
      portfolioReady: true,
    },
    {
      id: "two-sided-marketplaces-thredup-launch-plan-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Spot the Trap: Teardown of Two Marketplace Launch Plans",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Review two synthetic marketplace launch plans for a resale-apparel platform, find the cold-start and monetization defects each one hides, and separate real defects from plausible-sounding but acceptable choices.",
      companyId: "thredup",
      scenario:
        "You're reviewing two draft city-launch plans for ThredUp's resale marketplace before either gets approved for budget.",
      brief:
        "Read each plan, identify the defects using the lesson's Cold-Start Problem and Monetization Models sections, and don't flag every unconventional-sounding choice as a mistake, some are legitimate tradeoffs.",
      mode: "teardown",
      conceptsCovered: ["The Cold-Start Problem", "Monetization Models"],
      teardownItems: [
        {
          itemId: "teardown-item-1-subsidy-trap",
          specimen:
            "PLAN A: Seller Growth Sprint\n\nWeek 1-4: Offer sellers a guaranteed $15 payout per Clean Out Kit regardless of what sells, to maximize inventory volume fast.\nWeek 5: Launch a buyer discount code (40% off first order) to clear the new inventory quickly.\nWeek 6: Take a 5% platform fee on all transactions starting immediately to fund the next city's launch.\nSuccess metric: total items listed by week 6.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the defects in Plan A. Not every unusual choice below is wrong, at least one line is a reasonable early-stage tactic, not a mistake.",
          answerKey: [
            {
              defect: "Turning on a 5% platform fee in week 6, before either side has seen sustained value",
              severity: "critical",
              whyItMatters:
                "The lesson's Mistake 3 warns that taking a cut before either side sees real value kills growth; most successful marketplaces wait for liquidity before monetizing.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Success metric is total items listed, not items sold or matched to a buyer",
              severity: "moderate",
              whyItMatters:
                "Optimizing for listing volume over quality is the lesson's Mistake 2, more supply isn't better if it doesn't convert into satisfied buyers.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "The guaranteed flat payout regardless of what sells, paired with immediate deep discounting, risks masking whether the underlying unit economics work once the discount ends",
              severity: "moderate",
              whyItMatters:
                "The lesson's Subsidy Trap callout warns that subsidizing one side can mask a broken model if no one models what happens when subsidies stop.",
              lessonRef: "the-cold-start-problem",
              owner: "you",
            },
          ],
          distractors: [
            "Guaranteeing sellers a flat payout during the first 4 weeks (this is a legitimate supply-first subsidy tactic, the defect is not modeling what happens after subsidies end, not the subsidy itself)",
            "Launching a buyer discount code (a reasonable single-tactic move; the defect is the fee change in week 6, not the discount)",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-item-2-single-side-value",
          specimen:
            "PLAN B: Single-Player Seller Tools First\n\nMonth 1: Launch free listing photography and pricing-suggestion tools for sellers, no fee, no buyer marketing yet.\nMonth 2: Once 500+ quality listings exist in the city, launch buyer acquisition via paid social and SEO content.\nMonth 3: Introduce a 4.5% seller-side transaction fee, positioned as covering payout processing and buyer trust guarantees.\nSuccess metric: listing-to-sale conversion rate by month 3, not raw listing count.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify any defects in Plan B. This plan is deliberately close to the lesson's recommended playbook, look carefully for what, if anything, is actually wrong versus what just looks unconventional.",
          answerKey: [
            {
              defect: "No defects rise to critical; the plan matches the lesson's single-side value and seed-supply-first sequencing",
              severity: "cosmetic",
              whyItMatters:
                "The lesson's Single-Player Mode Test asks whether the product delivers value to one side before both exist; free seller tools do exactly that, and monetization is delayed until after a 500-listing liquidity threshold, matching the lesson's sequencing guidance.",
              lessonRef: "the-cold-start-problem",
              owner: "you",
            },
          ],
          distractors: [
            "Delaying buyer marketing until month 2 (this is the correct seed-supply-first sequence, not a defect)",
            "Using listing-to-sale conversion rather than raw listing count as the success metric (this is the correct quality-over-quantity metric per the lesson, not a defect)",
            "Charging a 4.5% seller-side fee in month 3 (this comes after the 500-listing liquidity threshold is met, consistent with the lesson's 'monetize after liquidity' guidance, not before it, so it is not the same mistake as Plan A)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each identified defect against its severity and lesson reference for the writeup",
            why: "Free, sufficient for a structured 2-plan review log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A defect log for both plans with severity ratings, plus a one-line approve/hold recommendation for each.",
      sampleOutput:
        "Rent the Runway plan-review log (excerpt, different plan)\n\nPlan X: HOLD, critical defect, monetization turned on before liquidity confirmed.\nPlan Y: APPROVE, sequencing matches seed-supply-first playbook, no critical defects found.",
      successCriteria: [
        "Flags Plan A's early monetization as the critical defect",
        "Correctly identifies Plan B as matching the lesson's playbook rather than inventing a defect for it",
        "Does not flag the week 1-4 seller subsidy in Plan A as itself the defect",
      ],
      portfolioReady: true,
    },
  ],

  "community-led-growth": [
    {
      id: "community-led-growth-cql-scoring-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Routing Call: Scoring a Community Export for CQLs",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 20-row community engagement export, apply the lesson's three-tier CQL model to decide which members get a direct sales handoff, which get nurture content, and which are just lurkers, without over-notifying sales.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the community operations lead at Awfis Space Solutions, India's first listed coworking company (NSE: AWFIS), running a private member Slack for enterprise account admins across its 200+ centres. You've pulled a 20-row engagement export for this week and have one sales team to protect from noise.",
      brief:
        "Sort every row into high, mid, or low intent using the lesson's signal tiers, flag only the true high-intent rows for a direct sales handoff, and justify why the rest stay in nurture.",
      mode: "diagnostic",
      conceptsCovered: ["Scoring community engagement signals into CQL intent tiers"],
      steps: [
        {
          stepId: "step-1-intent-tier-scoring",
          concept: "Scoring community engagement signals into CQL intent tiers",
          lessonAnchor: "community-qualified-leads-cqls-scoring-intent-from-behavior",
          theoryRecap:
            "The lesson's CQL model sorts members into high, mid, or low intent tiers based on specific behavioral signals, not raw engagement volume, and only the top tier gets a direct sales outreach.",
          question:
            "Of 20 rows (pricing-thread visits, 'what does enterprise include' questions, event RSVPs, and bio-only signups), which rows justify pulling a rep off their queue today?",
          toolName: "Google Sheets",
          where: "Import the Slack engagement export, freeze the header row, filter the `signal_type` and `signal_detail` columns.",
          procedure: [
            "Import and freeze row 1",
            "Filter signal_type for direct questions ('enterprise plan', 'migration from [competitor]') and mark as high-intent",
            "Filter for repeated pricing-thread visits and event-application activity, mark as mid-intent",
            "Mark bio-only joins and single-visit rows as low-intent",
            "Count each tier and compare against the sales team's weekly capacity",
          ],
          outputSample:
            "Awfis Community Engagement Export, Week 12 (20 rows)\n\nHIGH-INTENT (2 rows)\n  1. admin_0142 -- asked 'what's included in the enterprise seat plan for 40+ desks' in #pricing\n  2. admin_0289 -- asked 'how do we migrate our WeWork lease mid-term' in #general\n\nMID-INTENT (6 rows, sample)\n  3. admin_0311 -- visited #pricing thread 4x this week, no post\n  4. admin_0367 -- applied to the quarterly Champion cohort\n  ...4 more rows\n\nLOW-INTENT (12 rows, sample)\n  9. admin_0402 -- joined, added bio, saved 1 resource\n  ...11 more rows",
          healthy: "2 high-intent rows go to sales today; the 6 mid-intent rows go into a nurture sequence, not a cold call.",
          unhealthy: "All 20 rows get forwarded to sales because 'they're all engaged.'",
          interpret:
            "Intent tier, not engagement count, decides who gets a rep's time; a member who visited a thread 10 times but never asked a buying question still isn't high-intent.",
          soWhat: [
            {
              symptom: "Sales complains the community team is flooding their queue with cold leads",
              action: "Re-score the export by direct-question signals only before forwarding anything",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Import, filter, and tier the engagement export",
            why: "Free, no account friction, sortable in minutes",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 20-row export re-sorted into high/mid/low intent tiers with only the high-intent rows flagged for a sales handoff.",
      sampleOutput:
        "dbt Labs Community Slack, Week 9 export (excerpt)\n\nHIGH-INTENT (1 row)\n  1. admin_2201 -- asked 'does the enterprise tier support SSO for 200+ seats' in #general\n\nMID-INTENT (4 rows, sample)\n  2. admin_2255 -- visited #pricing 3x, applied to the ambassador cohort\n\nLOW-INTENT (9 rows, sample)\n  6. admin_2299 -- joined, added bio, no further activity",
      successCriteria: [
        "Correctly separates direct-question signals (high) from repeated-visit signals (mid)",
        "Flags only the genuinely high-intent rows for sales, not the whole engaged segment",
      ],
      portfolioReady: true,
    },
    {
      id: "community-led-growth-flywheel-dashboard-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building the CLG Dashboard and the Dark-Funnel Case for Budget",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Build a one-view CLG metrics dashboard from the lesson's seven metrics using a real activity export, then calculate a dark-funnel attribution offset ratio to make the investment case to finance.",
      companyId: "sula-vineyards",
      scenario:
        "You're the growth marketer at Sula Vineyards, India's largest listed wine company (NSE: SULA), building a formal member community around SulaFest and its wine club. Finance wants to see the community's real pipeline contribution before renewing next year's budget.",
      brief:
        "Turn a raw activity export into the lesson's seven-metric dashboard, then use a self-reported attribution survey gap to calculate and defend an undercount ratio for community-sourced pipeline.",
      mode: "build",
      conceptsCovered: [
        "Building the seven-metric CLG dashboard",
        "Calculating the dark-funnel attribution offset ratio",
      ],
      steps: [
        {
          stepId: "step-1-clg-dashboard-build",
          concept: "Building the seven-metric CLG dashboard",
          lessonAnchor: "the-clg-metrics-dashboard",
          theoryRecap:
            "The lesson's dashboard tracks MAU, activation rate, NPS by tier, community-sourced pipeline %, champion retention, CQL-to-opportunity conversion, and UGC SEO impact in one view so leading and lagging indicators show causality together.",
          question:
            "Given raw monthly activity numbers (2,400 total members, 540 posted or reacted, 310 new members, 74 took a meaningful action in 30 days), what does the dashboard say about flywheel health before you even look at pipeline?",
          toolName: "Google Sheets",
          where: "Build a single tab with one row per metric, one column per month, and a target column pulled from the lesson's benchmarks.",
          procedure: [
            "Calculate MAU% (540/2,400 = 22.5%) against the 20% floor",
            "Calculate activation rate (74/310 = 23.9%) against the 20-30% target band",
            "Add placeholder rows for NPS-by-tier, champion retention, and CQL-to-opportunity, sourced from CRM exports",
            "Color-code each metric red/yellow/green against its benchmark",
            "Write one sentence per red metric explaining the likely cause",
          ],
          outputSample:
            "Sula Wine Club Community Dashboard, Month 4\n\nMAU%: 22.5% (target 20%+) -- GREEN\nActivation rate: 23.9% (target 20-30%) -- GREEN\nCommunity-sourced pipeline %: 9% (target 15-25%) -- RED, likely undercounted, see attribution step\nChampion retention (6mo): 71% (target 60%+) -- GREEN\nUGC SEO sessions: 1,140/mo, up from 620 last quarter -- trending up",
          healthy: "Five of seven metrics sit at or above benchmark, and the one red metric has a written hypothesis, not just a red cell.",
          unhealthy: "A dashboard with all seven metrics reported in separate decks so no one can see that low pipeline % and high MAU% are the same story.",
          interpret:
            "A single red metric next to six green ones is a specific, fixable problem (attribution), not evidence the whole program is failing.",
          soWhat: [
            {
              symptom: "Community-sourced pipeline % sits below benchmark despite healthy MAU and activation",
              action: "Run the dark-funnel attribution survey in step 2 before concluding the community isn't driving pipeline",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-dark-funnel-offset",
          concept: "Calculating the dark-funnel attribution offset ratio",
          lessonAnchor: "the-dark-funnel-problem-measuring-what-you-cannot-track",
          theoryRecap:
            "The lesson's fix for undercounted community influence is a self-reported attribution survey compared against CRM source data, with the resulting gap applied as a multiplier to the CRM pipeline number.",
          question:
            "Your CRM attributes ₹42L in wine-club pipeline to 'community.' Your signup survey shows 27% of new members cite the community as how they first heard of Sula's wine club, against total quarterly pipeline of ₹4.2Cr. What's your undercount ratio, and what do you present to finance?",
          toolName: "Google Sheets",
          where: "Two-column comparison: CRM-attributed community pipeline vs. survey-implied community pipeline.",
          procedure: [
            "Calculate survey-implied community pipeline: 27% x ₹4.2Cr = ₹1.134Cr",
            "Calculate the undercount ratio: ₹1.134Cr / ₹42L = 2.7x",
            "Present both the conservative CRM figure and the survey-adjusted figure side by side",
            "Recommend the CRM number for forecasting, the adjusted number for the budget case",
          ],
          outputSample:
            "Sula Wine Club, Q3 Community Pipeline\n\nCRM-attributed: Rs 42,00,000\nSurvey-implied: Rs 1,13,40,000 (27% of Rs 4.2Cr total pipeline)\nUndercount ratio: 2.7x\n\nRecommendation: forecast on Rs 42L, justify next year's community budget on the Rs 1.13Cr adjusted figure.",
          healthy: "Both figures presented together, with the CRM number explicitly kept for forecasting.",
          unhealthy: "Presenting only the survey-adjusted number to finance as if it were the CRM-verified figure.",
          interpret:
            "The gap is a measurement problem to disclose, not a number to inflate confidence with.",
          soWhat: [
            {
              symptom: "Finance is skeptical of the community budget renewal",
              action: "Bring both the conservative and adjusted pipeline figures, with the survey methodology shown",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the dashboard and run the attribution offset calculation",
            why: "Free, handles both the metrics table and the ratio math without extra setup",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Host the survey questions and write up the budget case as a shareable doc",
            why: "Free tier covers a single survey doc and a linked dashboard summary",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Automate MAU, activation rate, and UGC session tracking instead of manual monthly exports",
            why: "Useful once the community crosses a few thousand members and manual exports become a weekly time sink",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free Google Sheets path works fine at this scale; upgrade to Mixpanel only once manual monthly exports start eating more than an hour a week.",
      },
      deliverable: "A seven-metric CLG dashboard with color-coded benchmarks, plus a dark-funnel attribution offset calculation ready for a finance conversation.",
      sampleOutput:
        "Figma Community Dashboard, Month 6 (excerpt)\n\nMAU%: 26% (target 20%+) -- GREEN\nCommunity-sourced pipeline %: 11% CRM-attributed vs. 24% survey-implied -- undercount ratio 2.2x\n\nRecommendation: forecast on the 11% CRM figure, justify headcount on the 24% adjusted figure.",
      successCriteria: [
        "All seven dashboard metrics calculated correctly against their benchmark bands",
        "Attribution offset ratio calculated correctly and presented alongside, not instead of, the CRM figure",
      ],
      portfolioReady: true,
      stretch: "Re-run the offset calculation with a 15% and a 35% survey-response scenario to show finance a sensitivity range instead of one fixed number.",
    },
  ],
  "product-led-sales": [
    {
      id: "product-led-sales-pql-signal-audit",
      tier: "mini",
      archetype: "audit",
      title: "The First Cut: Auditing a Usage Export for PQL Signals",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 15-row product usage export, identify which free-trial accounts show genuine PQL trigger signals versus which are just active free users who aren't sales-ready.",
      companyId: "mapmyindia",
      scenario:
        "You're the growth analyst at MapmyIndia (CE Info Systems), India's listed digital mapping and geospatial API provider (NSE: MAPMYINDIA), reviewing this week's self-serve API trial signups before your one weekly sync with sales.",
      brief:
        "Apply the lesson's PQL trigger criteria to a 15-row export of trial accounts and separate real PQLs from accounts that are just exploring the free tier.",
      mode: "diagnostic",
      conceptsCovered: ["Identifying PQL trigger signals from raw product usage data"],
      steps: [
        {
          stepId: "step-1-pql-signal-audit",
          concept: "Identifying PQL trigger signals from raw product usage data",
          lessonAnchor: "the-product-qualified-lead-pql",
          theoryRecap:
            "The lesson defines a PQL by specific behavioral thresholds, three or more teammates invited, a power feature used five or more times in two weeks, a seat count near the plan limit, or API usage suggesting an integration is already underway, not just general activity.",
          question:
            "Of 15 trial accounts, which ones cross an actual PQL trigger threshold, and which are just a single developer poking at the API sandbox?",
          toolName: "Google Sheets",
          where: "Import the trial usage export, freeze the header row, filter on `teammates_invited`, `api_calls_14d`, and `seats_used`.",
          procedure: [
            "Import and freeze row 1",
            "Filter for accounts with 3+ teammates invited",
            "Filter for accounts with sustained API calls across multiple days (not a single burst-test)",
            "Filter for accounts nearing their free-tier seat or call-volume limit",
            "Flag rows matching two or more criteria as PQL-ready",
          ],
          outputSample:
            "MapmyIndia Trial Export, Week 6 (15 rows)\n\nPQL-READY (3 rows)\n  1. acct_0091 -- 4 teammates invited, API calls on 11 of 14 days, 88% of free call quota used\n  2. acct_0114 -- 6 teammates invited, geocoding endpoint called daily for 2 weeks\n  3. acct_0138 -- 5 teammates invited, 95% of free quota used in week 2\n\nNOT YET (12 rows, sample)\n  4. acct_0102 -- 1 teammate, 40 API calls total, single burst on day 1\n  ...11 more rows",
          healthy: "3 of 15 accounts flagged as PQL-ready based on two or more matching criteria.",
          unhealthy: "Flagging any account with high total API call count, including a single-day load test from one developer.",
          interpret: "Sustained, multi-day usage with team growth is a PQL signal; a one-off spike from a single tester is not.",
          soWhat: [
            {
              symptom: "Sales is calling trial accounts that ghost immediately",
              action: "Re-filter for sustained multi-day usage plus team growth before forwarding any account",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Filter and flag the trial usage export",
            why: "Free, no account friction, handles a weekly 15-row export easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 15-row trial export re-sorted with PQL-ready accounts flagged and the matching trigger criteria noted for each.",
      sampleOutput:
        "Calendly Trial Export, Week 3 (excerpt)\n\nPQL-READY (2 rows)\n  1. acct_5521 -- scheduled 11 meetings via booking link in 9 days, 3 teammates invited\n\nNOT YET (8 rows, sample)\n  2. acct_5544 -- 1 meeting scheduled, no teammates invited",
      successCriteria: [
        "Correctly distinguishes sustained multi-signal usage from a single burst of activity",
        "Flags only accounts matching two or more real trigger criteria, not just high raw activity",
      ],
      portfolioReady: true,
    },
    {
      id: "product-led-sales-scoring-rubric-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building the PQL Rubric and the CRM Handoff Brief",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Build a weighted PQL scoring rubric across engagement, fit, and intent, apply it to route a batch of trial accounts into the lesson's three sales tiers, then write the CRM enrichment brief a rep needs before calling.",
      companyId: "mapmyindia",
      scenario:
        "Same MapmyIndia trial pipeline, one sprint later. Sales has asked for a real scoring model instead of a manual weekly flag, and reps say they're calling PQLs blind, with no usage context in the CRM record.",
      brief:
        "Build a 100-point rubric across engagement, fit, and intent, score a batch of accounts against it, route each into nurture, SDR-touch, or AE-touch, then define the exact fields a rep needs to see before dialing.",
      mode: "build",
      conceptsCovered: [
        "Weighting engagement, fit, and intent signals into a 100-point PQL rubric",
        "Defining the CRM fields a sales rep needs to see before calling a PQL",
      ],
      steps: [
        {
          stepId: "step-1-pql-rubric-build",
          concept: "Weighting engagement, fit, and intent signals into a 100-point PQL rubric",
          lessonAnchor: "building-a-pql-scoring-model",
          theoryRecap:
            "The lesson's rubric splits signals into engagement, fit, and intent buckets, assigns point values, and sets three routing thresholds: 0-40 nurture, 41-70 SDR-touch, 71-100 AE-touch.",
          question:
            "Given engagement, fit, and intent signals for 6 accounts, how do you weight them into a single 100-point score without letting one loud signal (like a single high-usage day) dominate the total?",
          toolName: "Google Sheets",
          where: "Build a scoring tab with three signal columns, a point-weight row, and a formula summing each account's total.",
          procedure: [
            "Assign engagement points: teammates invited (0-30), sustained API usage (0-20)",
            "Assign fit points: company size and industry match to ICP (0-25)",
            "Assign intent points: quota-limit proximity, pricing-page visits (0-25)",
            "Sum each account's score and map it to a routing tier",
            "Re-check the two highest-scoring accounts by hand to confirm no single signal is inflating the total alone",
          ],
          outputSample:
            "MapmyIndia PQL Rubric, Sprint 7\n\nacct_0091: engagement 28, fit 20, intent 22 = 70 -- SDR-touch\nacct_0114: engagement 30, fit 25, intent 20 = 75 -- AE-touch\nacct_0138: engagement 22, fit 10, intent 8 = 40 -- nurture (fit score too low despite high engagement)\n...3 more rows",
          healthy: "Scores spread across all three tiers, with at least one high-engagement account correctly routed to nurture because fit was weak.",
          unhealthy: "Every account with high API call volume auto-routes to AE-touch regardless of fit score.",
          interpret: "A rubric that lets engagement alone override fit and intent isn't a rubric, it's a single-metric filter with extra steps.",
          soWhat: [
            {
              symptom: "AEs are getting routed accounts with high usage but no budget authority",
              action: "Re-weight fit points so a poor ICP match caps the total score below the AE-touch threshold",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-crm-handoff-brief",
          concept: "Defining the CRM fields a sales rep needs to see before calling a PQL",
          lessonAnchor: "crm-integration-feeding-context-into-reps",
          theoryRecap:
            "The lesson's integration pattern feeds product events into a scoring engine that enriches CRM records with last active date, top features used, seat count, plan tier, and the calculated PQL score, so reps open with specifics instead of a cold script.",
          question:
            "For the two accounts routed to AE-touch and SDR-touch in step 1, what exact five fields does a rep need visible on the CRM record before their first call?",
          toolName: "Notion",
          where: "Write a one-page CRM enrichment brief listing the required fields and a sample opening line per account.",
          procedure: [
            "List the five required fields: last active date, top feature used, seat count, plan tier, PQL score",
            "Pull the actual values for acct_0091 and acct_0114 from step 1's data",
            "Draft one specific opening line per account referencing real usage, not a generic script",
            "Hand the brief to the rep alongside the routed account list",
          ],
          outputSample:
            "CRM Enrichment Brief: acct_0114 (AE-touch, score 75)\n\nLast active: 2 days ago\nTop feature: geocoding endpoint (daily use, 14 days straight)\nSeats: 6 of 6 free-tier seats used\nPlan tier: Free API sandbox\nPQL score: 75\n\nOpening line: 'I saw your team's been hitting the geocoding endpoint daily for two weeks and just filled your last free seat, wanted to walk through what the enterprise plan unlocks for that kind of volume.'",
          healthy: "Every routed account has a specific, usage-referencing opening line ready before the first call.",
          unhealthy: "Reps calling from a generic script because the CRM record only shows company name and signup date.",
          interpret: "Specificity in the opener is only possible because the enrichment fields exist on the record before the call, not because the rep is naturally better at cold calls.",
          soWhat: [
            {
              symptom: "PQL-to-opportunity conversion is flat despite a working scoring rubric",
              action: "Check whether the CRM record actually surfaces the five enrichment fields, or just the PQL score alone",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build and calculate the weighted PQL rubric",
            why: "Free, formula-driven scoring works fine for a rubric this size",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Write and share the CRM enrichment brief with the sales team",
            why: "Free tier covers a single shareable brief doc",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Automate the engagement and intent signal feed into the scoring rubric instead of manual weekly exports",
            why: "Worth adopting once trial volume outgrows a manually refreshed spreadsheet",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Google Sheets and Notion cover the full free path at this volume; move signal collection to Amplitude only once manual exports can't keep up with trial volume.",
      },
      deliverable: "A weighted 100-point PQL rubric applied to 6 accounts, plus a CRM enrichment brief with usage-specific opening lines for the two routed accounts.",
      sampleOutput:
        "Linear PQL Rubric + CRM Brief (excerpt)\n\nworkspace_4471: engagement 27, fit 24, intent 21 = 72 -- AE-touch\nCRM brief: last active yesterday, 5 engineers active, issue throughput up 40% in 2 weeks, 0 enterprise features enabled\nOpening line: 'Saw your team's issue throughput jumped 40% this month, wanted to show you what the org plan adds once you're at this pace.'",
      successCriteria: [
        "Rubric correctly weights engagement, fit, and intent so no single signal dominates routing",
        "CRM brief includes all five required fields and a usage-specific opening line per routed account",
      ],
      portfolioReady: true,
      stretch: "Recalibrate the routing thresholds against a hypothetical quarter of actual win-rate data, per the lesson's note that thresholds need re-tuning as the company matures.",
    },
  ],

  "reverse-trials-monetization": [
    {
      id: "reverse-trials-monetization-conversion-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "The Downgrade Cliff: Forecasting RateGain's Reverse Trial Revenue Swing",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 90-day reverse trial cohort export (signups, premium feature touches, trial-end outcome), forecast the paid-conversion range and quarterly revenue delta a reverse trial produces versus RateGain's existing freemium baseline.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're a growth analyst at RateGain Travel Technologies, the Noida-founded, NSE-listed travel-tech SaaS company, evaluating whether to convert 'RevGain Insights,' a premium demand-forecasting add-on for hotel revenue managers, from freemium to a 21-day reverse trial.",
      brief:
        "Use the trial cohort's feature-touch data to separate genuine forecast conversion from noise, then project the revenue delta against the freemium baseline.",
      mode: "diagnostic",
      conceptsCovered: ["Forecasting reverse trial conversion from feature-touch data, not access alone"],
      steps: [
        {
          stepId: "step-1-forecast-conversion-swing",
          concept: "Forecasting reverse trial conversion from feature-touch data, not access alone",
          lessonAnchor: "understanding-the-monetization-spectrum",
          theoryRecap:
            "The lesson's monetization-spectrum comparison shows freemium's core weakness is that users must pay before ever touching the premium value, which caps free-to-paid conversion far below what a reverse trial can reach once the same premium features are already integrated into a workflow.",
          question:
            "Of 180 hotels on a 21-day RevGain Insights reverse trial, 62 used the demand-forecast export at least 3 times and 118 opened it once or never. Given the lesson's benchmark that repeated-touch trial users convert far above single-touch users, what paid-conversion range should you forecast for each group, and what does that imply for the freemium baseline RateGain already runs?",
          toolName: "Google Sheets",
          where: "Import the 180-row trial cohort export, split into two segments by feature-touch count.",
          procedure: [
            "Import the cohort export and freeze the header row",
            "Segment rows into '3+ touches' (62 hotels) and '0-1 touches' (118 hotels)",
            "Apply the lesson's engaged-vs-unengaged conversion spread to each segment",
            "Multiply by RevGain Insights' ₹18,000/month list price to project quarterly revenue",
            "Compare the projected total against RateGain's existing freemium conversion baseline for the same 180 hotels",
          ],
          outputSample:
            "RevGain Insights, 21-day reverse trial cohort forecast\n\n3+ TOUCHES (62 hotels)\n  Forecast paid conversion: 30-34%\n  Projected payers: ~19-21 hotels\n\n0-1 TOUCHES (118 hotels)\n  Forecast paid conversion: 5-7%\n  Projected payers: ~6-8 hotels\n\nTOTAL PROJECTED PAYERS: ~25-29 of 180 (14-16%)\nFREEMIUM BASELINE (same 180 hotels, historical): 4%\nQUARTERLY REVENUE DELTA: +₹1.4M to +₹1.7M vs. freemium run rate",
          healthy:
            "Forecast conversion tracks feature-touch depth, with the 3+ touch segment projected several multiples above the freemium baseline.",
          unhealthy:
            "Treating all 180 trial hotels as one undifferentiated group and forecasting a single blended conversion rate off total signups.",
          interpret:
            "Trial access alone doesn't predict conversion, repeated engagement with the specific premium feature during the trial does, so the forecast has to be built segment by segment.",
          soWhat: [
            {
              symptom: "Blended forecast undercounts the true opportunity from engaged trial users",
              action: "Segment every reverse-trial forecast by in-trial feature-touch count before projecting revenue",
              effort: "30 min",
            },
            {
              symptom: "0-1 touch segment still shows some conversion, diluting the model",
              action: "Trigger a mid-trial nudge campaign at day 7 for hotels with zero feature touches",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Segment the cohort export and build the forecast model",
            why: "Free, no account friction, sufficient for a 180-row segmentation and projection",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A segmented conversion forecast (by feature-touch depth) with a projected quarterly revenue delta versus the freemium baseline.",
      sampleOutput:
        "Five-Star Business Finance, Q2 reverse trial forecast (excerpt)\n\n3+ TOUCHES (41 branches)\n  Forecast paid conversion: 28-32%\n  Projected payers: ~11-13 branches\n\n0-1 TOUCHES (76 branches)\n  Forecast paid conversion: 4-6%\n  Projected payers: ~3-5 branches\n\nQUARTERLY REVENUE DELTA: +₹8.6L to +₹10.2L vs. freemium run rate",
      successCriteria: [
        "Correctly segments the cohort by feature-touch depth before forecasting",
        "Produces a quarterly revenue delta grounded in the segment-level conversion forecast, not a single blended rate",
      ],
      portfolioReady: true,
    },
    {
      id: "reverse-trials-monetization-downgrade-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: Five-Star's Reverse Trial Downgrade Flow",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a synthetic downgrade-flow specimen (in-app messaging plus an email sequence) for a branch loan-officer app's premium AI underwriting assistant, identify which parts follow reverse trial best practice and which recreate the lesson's four common mistakes.",
      companyId: "five-star-business-finance",
      scenario:
        "You're auditing UX copy at Five-Star Business Finance, the Chennai-headquartered, NSE-listed MSME lender, ahead of rolling a 30-day reverse trial of 'Star AI Underwriter' out to its full branch network.",
      brief:
        "Read the specimen downgrade sequence end to end, flag every defect against the lesson's common-mistakes list, and don't get fooled by messaging that sounds reassuring but still commits a mistake.",
      mode: "teardown",
      conceptsCovered: ["Auditing a downgrade UX sequence against the reverse trial common-mistakes checklist"],
      teardownItems: [
        {
          itemId: "item-1-downgrade-sequence",
          specimen:
            "STAR AI UNDERWRITER — 30-DAY TRIAL DOWNGRADE SEQUENCE (synthetic, branch loan-officer app)\n\nDay 28 in-app banner: 'Your Star AI Underwriter trial is ending soon. Upgrade to keep instant risk scoring.'\n\nDay 30, 11:58 PM: trial access silently removed. No further notice sent.\n\nDay 31 email: 'Your Star AI Underwriter trial has ended. Upgrade now to restore instant risk scoring.' (Underwriting notes and risk-score history created during the trial are deleted from the branch dashboard as part of the downgrade, per the engineering ticket linked in the email.)\n\nFree-tier dashboard: no visual indicator distinguishes which loan files were scored with AI assistance versus manually, and no upgrade prompt appears anywhere in the free tier after day 31.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify every defect in this downgrade sequence, rate its severity, and explain why it undermines the reverse trial's loss-aversion mechanic.",
          answerKey: [
            {
              defect:
                "Trial access is removed at exactly midnight on day 30 with no day-30 warning, only a day-28 banner three days earlier",
              severity: "moderate",
              whyItMatters:
                "The lesson's common-mistakes list flags abrupt downgrades without warning as feeling 'tricked, not motivated'; a single banner two days before cutoff isn't a signal, it's an afterthought",
              lessonRef: "common-mistakes-in-reverse-trial-design",
              owner: "developer",
            },
            {
              defect: "Underwriting notes and risk-score history created during the trial are deleted on downgrade",
              severity: "critical",
              whyItMatters:
                "Deleting trial-created data is the lesson's most damaging mistake, it causes users to churn completely instead of sticking around to consider a later upgrade, and here it also destroys real underwriting records",
              lessonRef: "common-mistakes-in-reverse-trial-design",
              owner: "developer",
            },
            {
              defect: "No visual tag distinguishes AI-scored loan files from manually-scored ones on the free tier",
              severity: "moderate",
              whyItMatters:
                "The lesson requires tagging premium assets clearly so users know what they will lose upon downgrade; without it, branch staff can't even see what the trial gave them",
              lessonRef: "managing-downstream-churn-and-retention",
              owner: "developer",
            },
            {
              defect: "No upgrade prompt anywhere in the free tier after day 31",
              severity: "critical",
              whyItMatters:
                "The lesson calls for contextual upgrade triggers when a free user hits a gated feature; a dead-end free tier wastes the acquisition investment already made in every branch that touched the trial",
              lessonRef: "managing-downstream-churn-and-retention",
              owner: "either",
            },
          ],
          distractors: [
            "The day-31 email uses the phrase 'has ended' instead of 'is ending' (this is a tense choice, not a defect the lesson flags)",
            "The trial ran for 30 days instead of 21 or 14 (30 days is within the lesson's normal range for reverse trials and is not itself a mistake)",
            "The in-app banner appeared on day 28 rather than day 25 (the lesson never specifies an exact warning lead time, only that warning must exist at all)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each identified defect with severity and lesson reference",
            why: "Free, sufficient for a structured defect log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log rating each downgrade-flow issue by severity, mapped to the specific common-mistake it recreates.",
      sampleOutput:
        "Utkarsh Small Finance Bank, downgrade flow defect log (excerpt)\n\nCRITICAL: Trial-created customer notes deleted on downgrade\n  Ref: managing-downstream-churn-and-retention\n\nMODERATE: Single day-28 warning banner only, no day-30 notice\n  Ref: common-mistakes-in-reverse-trial-design",
      successCriteria: [
        "Correctly identifies all 4 planted defects with matching severity",
        "Does not flag any of the 3 distractors as defects",
      ],
      portfolioReady: true,
    },
  ],
  "b2b-growth-loops": [
    {
      id: "b2b-growth-loops-integration-loop-audit",
      tier: "mini",
      archetype: "audit",
      title: "Diagnosing Go Digit's Embedded-Insurance Integration Loop",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a synthetic month-2 partner funnel export, apply the lesson's integration-loop KPI (percent of active partners with 3+ API integrations) to diagnose whether Go Digit's embedded-insurance loop is compounding or stalling.",
      companyId: "go-digit-insurance",
      scenario:
        "You're a growth analyst at Go Digit General Insurance, the Bengaluru-headquartered, NSE-listed general insurer, reviewing how its API partner ecosystem (travel apps, fintech apps, and OEM dealerships embedding Go Digit's insurance APIs) is compounding.",
      brief:
        "Segment partners by how many Go Digit API products they've integrated, benchmark against the lesson's Slack-derived 3+ integration target, and diagnose where the loop is stalling.",
      mode: "diagnostic",
      conceptsCovered: ["Diagnosing an integration ecosystem loop against a 3+ integration KPI benchmark"],
      steps: [
        {
          stepId: "step-1-integration-depth-audit",
          concept: "Diagnosing an integration ecosystem loop against a 3+ integration KPI benchmark",
          lessonAnchor: "measuring-b2b-loop-efficiency",
          theoryRecap:
            "The lesson's efficiency framework benchmarks the integration ecosystem loop by the percent of month-2 active users who've installed 3+ integrations, using Slack's >50% target as the bar for a loop that's genuinely compounding.",
          question:
            "Of Go Digit's 210 month-2 active API partners, 74 have integrated 3+ insurance products (motor, travel, health) into their app, 91 have integrated exactly 1, and 45 have integrated 2. Against the lesson's 3+ integration benchmark, is this loop compounding or stalling, and which segment do you target first?",
          toolName: "Google Sheets",
          where: "Import the 210-row partner export, group by integration count.",
          procedure: [
            "Import and freeze the header row",
            "Group partners into 1, 2, and 3+ integration buckets",
            "Calculate the percent of month-2 actives at 3+ integrations",
            "Compare against the lesson's >50% Slack-derived benchmark",
            "Flag the 2-integration bucket as the highest-leverage nudge target (closest to the compounding threshold)",
          ],
          outputSample:
            "Go Digit API partner ecosystem, month-2 integration depth\n\n1 INTEGRATION: 91 partners (43%)\n2 INTEGRATIONS: 45 partners (21%)\n3+ INTEGRATIONS: 74 partners (35%)\n\nBENCHMARK (lesson, Slack-derived): >50% at 3+ integrations\nGAP TO BENCHMARK: -15 points\nHIGHEST-LEVERAGE SEGMENT: 45 partners at exactly 2 integrations",
          healthy: "35%+ of month-2 actives sit at 3+ integrations and trending upward month over month.",
          unhealthy: "The majority of partners plateau at exactly 1 integration and never add a second.",
          interpret:
            "At 35% against a >50% benchmark, the loop is under-compounding, the 2-integration bucket is the fastest path to close the gap since those partners have already cleared the harder first-integration hurdle.",
          soWhat: [
            {
              symptom: "35% at 3+ integrations, 15 points under benchmark",
              action: "Build a targeted 'add your second integration' campaign for the 45 partners stuck at 2",
              effort: "half day",
            },
            {
              symptom: "91 partners stuck at exactly 1 integration",
              action: "Audit onboarding for why partners stop after the first API call",
              effort: "dev ticket",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Group and benchmark the partner export",
            why: "Free, sufficient for a 210-row grouping and benchmark comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An integration-depth funnel benchmarked against the lesson's 3+ integration KPI, with the highest-leverage segment flagged.",
      sampleOutput:
        "RateGain partner ecosystem, month-2 integration depth (excerpt)\n\n1 INTEGRATION: 58 partners (31%)\n2 INTEGRATIONS: 39 partners (21%)\n3+ INTEGRATIONS: 89 partners (48%)\n\nGAP TO BENCHMARK: -2 points",
      successCriteria: [
        "Correctly groups partners into the three integration-depth buckets",
        "Benchmarks against the lesson's >50% target and identifies the highest-leverage segment to nudge",
      ],
      portfolioReady: true,
    },
    {
      id: "b2b-growth-loops-champion-expansion-map",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building RateGain's Champion-Led Expansion Loop Map",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Using the lesson's Inputs/Actions/Outputs/Feedback framework, build a champion-led expansion loop map for RateGain's RevGain Insights add-on, from a single hotel revenue manager's adoption to a multi-department contract expansion.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're on the growth team at RateGain Travel Technologies, mapping how a single hotel revenue manager's use of RevGain Insights could expand into a property-wide, then group-wide, RateGain contract.",
      brief:
        "Fill in each stage of the Inputs/Actions/Outputs/Feedback framework with RateGain-specific detail, then write the one-sentence business case a champion would need to justify expansion to procurement.",
      mode: "build",
      conceptsCovered: [
        "Mapping a champion-led expansion loop using the Inputs/Actions/Outputs/Feedback framework",
        "Writing a champion's expansion business case in ROI terms, not feature terms",
      ],
      steps: [
        {
          stepId: "step-1-map-the-loop",
          concept: "Mapping a champion-led expansion loop using the Inputs/Actions/Outputs/Feedback framework",
          lessonAnchor: "mapping-your-own-b2b-growth-loop",
          theoryRecap:
            "The lesson's mapping framework breaks any B2B loop into Inputs (what brings a customer in), Actions (the smallest step to a moment of truth), Outputs (what changes after that moment), and Feedback (what compels repeating the action).",
          question:
            "A single hotel revenue manager starts using RevGain Insights for demand forecasting. Map what input brought her in, what action created her moment of truth, what output resulted, and what feedback mechanism would pull in the GM and then the ownership group.",
          toolName: "Google Sheets",
          where: "Build a 4-row template, one row per framework stage, filled with RateGain-specific detail.",
          procedure: [
            "Row 1, Input: what search or referral brought the revenue manager to RevGain Insights",
            "Row 2, Action: the smallest action that produces her moment of truth (a forecast that changes a real pricing decision)",
            "Row 3, Output: what changes in her world after that moment (a documented revenue lift she can show her GM)",
            "Row 4, Feedback: what compels the GM, then ownership, to expand the contract",
          ],
          outputSample:
            "RevGain Insights champion-expansion map\n\nINPUT: Revenue manager finds RevGain Insights via a RateGain webinar on 2026 demand forecasting\nACTION: Runs a 7-day demand forecast against an upcoming low-occupancy week, adjusts room rates accordingly\nOUTPUT: Documented 6% RevPAR lift for that week, screenshotted into her monthly GM report\nFEEDBACK: GM asks for property-wide access; group ownership sees the RevPAR lift across 3 properties and asks procurement to add group-wide seats",
          healthy:
            "Each stage produces a concrete, RateGain-specific artifact (a webinar name, a documented RevPAR number, a named stakeholder) rather than a generic restatement of the framework.",
          unhealthy:
            "Filling in the four rows with abstract statements like 'user finds value' and 'company expands' with no specific input, action, or number.",
          interpret:
            "A loop map is only useful if it's specific enough to design an actual campaign around, a vague map can't tell you which webinar to fund or which GM report template to build.",
          soWhat: [
            {
              symptom: "Output row has no documented number the champion can show upward",
              action: "Build a one-click 'RevPAR impact' export inside RevGain Insights the champion can screenshot",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-write-the-business-case",
          concept: "Writing a champion's expansion business case in ROI terms, not feature terms",
          lessonAnchor: "the-four-core-b2b-growth-loops",
          theoryRecap:
            "The lesson's Salesforce example shows a champion's expansion succeeds because she 'creates a business case, demonstrates ROI to procurement' rather than asking for a feature; the lesson's four loops all monetize on business value, not on excitement.",
          question:
            "Using the documented 6% RevPAR lift from Step 1, write the one-paragraph business case the revenue manager would actually bring to her GM to justify expanding RevGain Insights property-wide.",
          toolName: "Google Sheets",
          where: "Write the business case paragraph in a new sheet row, then check it against the ROI-vs-feature test.",
          procedure: [
            "State the documented result first (the 6% RevPAR lift), not the tool's features",
            "Translate the percentage into a rupee figure the GM can defend to ownership",
            "Name the specific expansion ask (property-wide seats, then group-wide)",
            "Check: does the paragraph mention a feature name before it mentions the ROI number? If yes, rewrite",
          ],
          outputSample:
            "Business case draft:\n'RevGain Insights produced a 6% RevPAR lift on one low-occupancy week, worth an estimated ₹4.2L in incremental revenue at this property alone. Rolling it out to all 40 rooms and all revenue-managed rate categories property-wide would let us apply the same forecasting discipline to every low-occupancy week this quarter, not just the one we tested.'\n\nROI-before-feature check: PASS, first sentence is the number, not the tool.",
          healthy:
            "The business case leads with a rupee-denominated result and only mentions the product name in service of that result.",
          unhealthy:
            "A business case that opens with 'RevGain Insights has powerful AI forecasting features' before ever stating a number.",
          interpret:
            "Procurement funds ROI, not features, a champion who leads with the number gets approved faster than one who leads with a feature list.",
          soWhat: [
            {
              symptom: "Business case opens with a feature description instead of a number",
              action: "Rewrite so the first sentence is always the documented result",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the loop map and draft the business case",
            why: "Free, sufficient for a 4-row framework map and a short paragraph draft",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed Inputs/Actions/Outputs/Feedback loop map plus a one-paragraph, ROI-led expansion business case.",
      sampleOutput:
        "Utkarsh Small Finance Bank champion-expansion map (excerpt)\n\nINPUT: Branch manager finds the Utkarsh digital lending dashboard via an internal training session\nACTION: Approves 15 MSME loans in a week using the dashboard's faster risk-scoring flow\nOUTPUT: Documented 3-day reduction in average approval time, reported to the regional head\nFEEDBACK: Regional head requests the dashboard for 8 more branches in the cluster",
      successCriteria: [
        "All four framework stages contain RateGain-specific, non-generic detail",
        "The business case leads with a documented ROI number before mentioning any feature name",
      ],
      portfolioReady: true,
      stretch: "Repeat the map for a second RateGain product line and compare which loop compounds faster.",
    },
  ],

  "ai-experiment-design": [
    {
      id: "ai-experiment-design-hypothesis-sanity-check",
      tier: "mini",
      archetype: "ai-critique",
      title: "AI Hypothesis Audit: Separating Real Signal from Plausible Guesses",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 8 AI-generated growth hypotheses and 3 known business constraints, apply a domain-context sanity check to flag which hypotheses address a real, evidenced user problem versus which are plausible-sounding guesses an LLM produced without knowing your business.",
      companyId: "rxbar",
      scenario:
        "You're the growth analyst at RXBAR, the Chicago-founded protein bar brand ATT (acquired by Kellanova/Kellogg for $600M in 2017). Claude read your checkout session recordings and produced 8 hypotheses. Sprint planning is in an hour.",
      brief:
        "Score each hypothesis against 3 constraints you know and Claude doesn't: subscription customers already get free shipping, the mobile checkout was rebuilt last quarter, and first-time buyers are price-anchored by a 12-bar variety pack, not single flavors.",
      mode: "diagnostic",
      conceptsCovered: ["Sanity-checking AI hypotheses against domain knowledge"],
      steps: [
        {
          stepId: "step-1-sanity-check-hypotheses",
          concept: "Sanity-checking AI hypotheses against domain knowledge",
          lessonAnchor: "over-reliance-on-ai-conclusions-without-domain-context",
          theoryRecap:
            "The lesson's pitfall section warns that LLMs generate plausible hypotheses, not ground-truth ones, and that a PM who runs all 10 AI-generated ideas in parallel without a domain filter watches most of them fail.",
          question:
            "Claude's 8 hypotheses include 'add free shipping threshold banner', 'redesign mobile checkout button', and 'bundle flavors at a discount for first-time buyers'. Which of these survive contact with what you already know?",
          toolName: "Claude",
          where: "Paste the 8 hypotheses plus your 3 known constraints into a Claude conversation.",
          procedure: [
            "List the 8 AI-generated hypotheses in one column",
            "List your 3 known constraints in a second reference block",
            "For each hypothesis, ask: does this conflict with a constraint I already know is true?",
            "Kill any hypothesis that targets an already-solved problem (free shipping banner, mobile checkout)",
            "Keep hypotheses that target an unaddressed, evidenced friction point (flavor bundling for anchoring)",
          ],
          outputSample:
            "HYPOTHESIS AUDIT\n\n1. Add free shipping threshold banner -- KILL. Subscription customers already get free shipping; banner targets a solved problem.\n2. Redesign mobile checkout button -- KILL. Checkout was rebuilt last quarter; re-testing the same surface wastes a cycle.\n3. Bundle flavors at a discount for first-time buyers -- KEEP. First-time buyers are anchored to the 12-bar variety pack; a flavor bundle addresses real anchoring friction Claude correctly inferred from session data.\n...5 more rows",
          healthy: "3 of 8 hypotheses survive the constraint check and go into the sprint.",
          unhealthy: "All 8 hypotheses get greenlit because the AI confidence scores looked high.",
          interpret:
            "An LLM's hypothesis list is a starting menu, not a ranked verdict; only a human who knows what's already shipped can tell which items are real.",
          soWhat: [
            {
              symptom: "Sprint burns a cycle re-testing an already-solved checkout problem",
              action: "Keep a running list of 'already shipped or already known' constraints and paste it alongside every AI hypothesis prompt",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Claude",
            role: "Generate the initial hypothesis batch and hold the sanity-check conversation",
            why: "Free tier handles an 8-item hypothesis list and a short back-and-forth without hitting usage limits",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 3-hypothesis shortlist for this sprint, plus the 5 killed hypotheses each paired with the specific constraint that killed it.",
      sampleOutput:
        "Halo Top hypothesis audit (excerpt)\n\nKEEP: 'Show calorie count above the fold on the pint PDP' -- addresses a real, unaddressed comparison-shopping friction seen in session recordings.\nKILL: 'Add a countdown timer to the flavor drop' -- Halo Top already ran and killed this exact test last quarter; re-testing wastes the cycle.\nKILL: 'Simplify the newsletter signup form' -- newsletter conversion isn't a business goal this quarter; hypothesis is plausible but off-target.",
      successCriteria: [
        "Correctly kills every hypothesis that conflicts with a stated constraint",
        "Keeps only hypotheses that target a real, unaddressed friction point",
        "States the specific conflicting constraint for each killed hypothesis, not just 'not a priority'",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-experiment-design-brief-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build an AI-Assisted Experiment Brief: Hypothesis to RICE Score",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given real funnel data, use AI at two stages of the workflow, hypothesis generation from session data and RICE prioritisation scoring, to produce a complete, ready-to-review experiment brief for one growth idea.",
      companyId: "mvmt-watches",
      scenario:
        "You're the growth marketer at MVMT, the DTC watch brand that sold to Movado Group for a reported $100M in 2018. Checkout abandonment is up 6 points this month and you have 12 candidate ideas competing for one dev sprint.",
      brief:
        "Use an LLM to turn raw session notes into ranked hypotheses, then use RICE scoring (also AI-assisted) to defend which one idea gets the sprint, and write the one-page brief a developer can build from.",
      mode: "build",
      conceptsCovered: [
        "Hypothesis generation from qualitative session data",
        "Automated experiment prioritisation with RICE",
      ],
      steps: [
        {
          stepId: "step-1-generate-hypotheses",
          concept: "Hypothesis generation from qualitative session data",
          lessonAnchor: "hypothesis-generation-from-data",
          theoryRecap:
            "The lesson contrasts traditional hypothesis generation (a PM eyeballs a heatmap) with AI-assisted generation: paste session recordings and support tickets into an LLM and ask for the top friction points, compressing 10 hours of manual review into seconds.",
          question:
            "You have 40 session-recording notes and 15 support tickets mentioning checkout. What are the top 3 friction points worth turning into hypotheses?",
          toolName: "Claude",
          where: "Paste the session notes and ticket excerpts into Claude in one message.",
          procedure: [
            "Compile session notes and support-ticket excerpts into one text block",
            "Prompt: 'What are the top 5 friction points in this checkout flow, ranked by how many sessions show the pattern?'",
            "Review Claude's output against the raw notes for at least the top 2 patterns",
            "Convert the top pattern into a testable hypothesis with a clear metric",
          ],
          outputSample:
            "TOP FRICTION PATTERNS (from 40 sessions + 15 tickets)\n1. Re-entering shipping address after a failed promo code (14 sessions) -- HYPOTHESIS: preserving form state across a failed promo-code submit will reduce checkout abandonment.\n2. Watch band size chart opens in a new tab and loses cart context (9 sessions)\n3. Order confirmation email delayed 20+ minutes, driving repeat-purchase attempts (6 tickets)",
          healthy: "One hypothesis is grounded in 14 of 40 sessions showing the same pattern.",
          unhealthy: "A hypothesis invented from a single anecdotal ticket with no session-data pattern behind it.",
          interpret:
            "A hypothesis is only as strong as the number of independent sessions that show the same friction; AI's job is surfacing the pattern fast, not deciding it matters.",
          soWhat: [
            {
              symptom: "Team debates which of 12 ideas to run without evidence",
              action: "Require every hypothesis to cite a session or ticket count before it enters the prioritisation step",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rice-score-and-brief",
          concept: "Automated experiment prioritisation with RICE",
          lessonAnchor: "automated-experiment-prioritisation",
          theoryRecap:
            "The lesson notes RICE (Reach x Impact x Confidence / Effort) is where AI excels because it multiplies across dimensions fast and surfaces ideas that look average on one metric but exceptional on others.",
          question:
            "Your form-state hypothesis competes against 11 other ideas. Reach is high (checkout touches 100% of buyers), but is it the highest-RICE idea, or does a lower-reach idea with near-zero effort win?",
          toolName: "Claude",
          where: "Feed Claude your 12-idea list with reach/impact/confidence/effort estimates for each.",
          procedure: [
            "List all 12 ideas with your best-guess reach, impact, confidence, and effort estimates",
            "Prompt Claude to compute RICE score per idea and rank the list",
            "Sanity-check the top-ranked idea against what you know the dev team can ship this sprint",
            "Write the one-page brief: hypothesis, RICE score and reasoning, success metric, sample size",
          ],
          outputSample:
            "RICE RANKING (top 3 of 12)\n1. Preserve form state on failed promo code -- Reach 100% x Impact 2 x Confidence 80% / Effort 1 = 160. Ships in 2 days, touches every checkout session.\n2. Fix band-size-chart tab context loss -- Reach 22% x Impact 1 x Confidence 60% / Effort 2 = 6.6\n3. Speed up confirmation email -- Reach 15% x Impact 1 x Confidence 50% / Effort 3 = 2.5\n\nBRIEF: Ship the form-state fix this sprint; RICE score is 24x the next idea and effort is a 2-day dev ticket.",
          healthy: "The top RICE idea also matches the dev team's actual sprint capacity.",
          unhealthy: "Picking the highest-reach idea without checking whether effort makes it undeliverable this sprint.",
          interpret:
            "RICE surfaces the idea, but a human still checks that the winning score is buildable in the time available.",
          soWhat: [
            {
              symptom: "Team ships the loudest idea instead of the highest-RICE idea",
              action: "Require a RICE table with all 12 ideas visible before any single idea gets greenlit",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Claude",
            role: "Generate hypotheses from session data and compute RICE scores",
            why: "Free tier handles a 40-session text block and a 12-row scoring table in one conversation",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Hold the 12-idea RICE table and the final brief draft",
            why: "Free, shareable with the dev team without export friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optimizely",
            role: "Calculate the required sample size and run the experiment once it ships",
            why: "Built-in sample size calculator and Stats Engine for early significance detection",
            required: false,
            fallback: "Google Sheets with a manual sample-size formula",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page experiment brief: the top hypothesis, its RICE score and reasoning against the other 11 ideas, the success metric, and the required sample size.",
      sampleOutput:
        "Chewy checkout brief (excerpt)\n\nHYPOTHESIS: Preserving cart contents when a shipping-zip lookup fails will reduce cart abandonment.\nEVIDENCE: 11 of 30 reviewed sessions show a zip-lookup failure immediately preceding exit.\nRICE: Reach 100% x Impact 2 x Confidence 75% / Effort 1 = 150 (highest of 9 candidate ideas).\nMETRIC: checkout completion rate.\nSAMPLE SIZE: ~18,000 sessions per arm at 95% confidence for a 2pp lift.",
      successCriteria: [
        "Hypothesis cites a specific session or ticket count as evidence",
        "RICE table shows all competing ideas, not just the winner",
        "Brief includes a stated success metric and sample size",
      ],
      portfolioReady: true,
      stretch:
        "Ask Claude to draft 3 confounding variables the eventual A/B test result should be checked against before declaring a winner.",
    },
  ],
  "growth-hacking-ethics-dark-patterns": [
    {
      id: "growth-hacking-ethics-dark-patterns-flow-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Signup Flow Teardown: Spot the Dark Patterns Before Legal Does",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 3 screens from a synthetic subscription signup and cancellation flow, identify which UI decisions are dark patterns under the FTC's 2022 framework versus which are legitimate, aggressive-but-fair growth tactics.",
      companyId: "halo-top",
      scenario:
        "You're the growth lead reviewing a proposed redesign of Halo Top's DTC subscription box signup and cancel flow before it ships, three weeks after the design team optimized it for conversion.",
      brief:
        "Walk each of the 3 screens through the lesson's fake-scarcity, referral-mechanics, and asymmetric-effort traps, and flag real defects versus legitimate urgency.",
      mode: "teardown",
      conceptsCovered: ["Fake scarcity counters", "Deceptive referral mechanics", "Asymmetric signup and cancellation effort"],
      teardownItems: [
        {
          itemId: "item-1-scarcity-banner",
          specimen:
            "Screen 1, product page banner: 'Only 3 subscription boxes left at this price!' The counter is hardcoded in the page template and resets to 3 on every page refresh, regardless of actual inventory or subscriber count.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this banner a legitimate scarcity lever or a dark pattern? Cite the specific fact being asserted.",
          answerKey: [
            {
              defect: "Countdown/inventory counter is hardcoded and resets on refresh, disconnected from real stock or subscriber count",
              severity: "critical",
              whyItMatters:
                "The FTC's 2022 'Bringing Dark Patterns to Light' report names exactly this pattern; the tactic asserts a fact (only 3 left) that is not true or current, which is the textbook definition of deceptive under Section 5",
              lessonRef: "The Regulatory Context: Dark Patterns Are Not a Gray Area Anymore",
              owner: "developer",
            },
          ],
          distractors: ["The banner uses urgent language ('Only 3 left!')", "The banner is positioned above the fold"],
          partialCredit: true,
        },
        {
          itemId: "item-2-referral-mechanic",
          specimen:
            "Screen 2, referral share modal: headline reads 'Give $20, Get $20' but the fine print (a 9pt gray link below the button) reveals the referred friend receives store credit that expires in 14 days, not the $20 cash-value discount implied by the headline.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this referral mechanic cross the line, and if so, on what specific claim?",
          answerKey: [
            {
              defect: "Headline implies a $20 cash-equivalent reward; fine print delivers a time-limited store credit, a materially different reward",
              severity: "critical",
              whyItMatters:
                "The lesson's framework calls this 'deceptive referral mechanics': the mechanic itself is legitimate, but misrepresenting what the reward actually is converts a growth channel into a liability channel",
              lessonRef: "Common Growth-Tactic Ethical Traps",
              owner: "you",
            },
          ],
          distractors: ["The referral program requires the friend to make a purchase before the reward unlocks", "The share modal uses a bright CTA button color"],
          partialCredit: true,
        },
        {
          itemId: "item-3-cancel-flow",
          specimen:
            "Screen 3, account settings: signup is a single 'Start my box' button. Cancellation requires clicking 'Manage Subscription', then 'Account Settings', then calling a phone number only staffed weekdays 9-5, where a retention agent must approve the cancellation before it takes effect.",
          specimenSource: "synthetic-realistic",
          prompt: "Apply the lesson's second ethics question to this flow: is the cost of reversing the action equal to the cost of taking it?",
          answerKey: [
            {
              defect: "Signup is one click; cancellation requires 2 in-app steps plus a phone call during limited hours with agent approval",
              severity: "critical",
              whyItMatters:
                "This is the exact asymmetry the FTC's Amazon and Vonage settlements were built on; regulators look for asymmetric effort between joining and leaving first",
              lessonRef: "A Practical Framework: Aggressive-But-Fair vs. Deceptive",
              owner: "developer",
            },
          ],
          distractors: ["Cancellation requires logging into the account first", "The phone number is listed in the footer, not the main settings page"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each screen, the defect found, its severity, and the lesson framework question it fails",
            why: "Free, easy to share with legal or compliance for a real pre-launch review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 3-row defect log: screen, defect, severity, which of the 3 framework questions it fails, and the fix.",
      sampleOutput:
        "MVMT pre-launch flow review (excerpt)\n\nSCREEN: watch-band size guide upsell modal\nDEFECT: 'Add protective case, only 12 in stock' counter is static across all sessions, never decrements\nSEVERITY: critical\nFAILS QUESTION: 'Is the underlying fact true?'\nFIX: Wire the counter to real inventory or remove the number entirely and keep the upsell copy without a fabricated count.",
      successCriteria: [
        "Flags all 3 real defects, not just the most obvious one",
        "Cites the specific fact or asymmetry each defect violates, not a generic 'feels sketchy'",
        "Does not flag either distractor as a defect",
      ],
      portfolioReady: true,
    },
    {
      id: "growth-hacking-ethics-dark-patterns-three-question-filter",
      tier: "core",
      archetype: "audit",
      title: "The Three-Question Filter: Auditing a Referral Program Before It Ships",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a real referral program design brief, apply the lesson's three-question ethics filter (is the fact true, is reversal cost equal to action cost, would it survive being explained out loud) to decide what ships as-is, what needs a fix, and what needs a legal review before launch.",
      companyId: "walker-and-company",
      scenario:
        "You're the growth marketer at Walker & Company Brands, the grooming company (Bevel) that Procter & Gamble acquired in 2018. Product is proposing a referral program for a Q4 launch and wants your sign-off by Friday.",
      brief:
        "Run all 5 elements of the proposed program through the three-question filter and write a go/no-go memo with specific fixes for anything that fails.",
      mode: "diagnostic",
      conceptsCovered: ["The three-question ethics filter", "Asymmetric signup and cancellation effort"],
      steps: [
        {
          stepId: "step-1-fact-check-and-symmetry-audit",
          concept: "The three-question ethics filter",
          lessonAnchor: "a-practical-framework-aggressive-but-fair-vs-deceptive",
          theoryRecap:
            "The lesson's practical framework runs three checks in order: is the underlying fact true, is the cost of reversing the action equal to the cost of taking it, and would the tactic survive being explained out loud to the user it targets.",
          question:
            "The brief proposes: (1) a 'limited spots' referral cap that isn't actually limited, (2) a reward that pays out only after the referred friend's 3rd purchase with no disclosure of that condition, (3) an opt-out link buried in a footer FAQ. Which of these ship, which get fixed, which get killed?",
          toolName: "Google Sheets",
          where: "Build a 5-row table: program element, question 1 answer, question 2 answer, question 3 answer, verdict.",
          procedure: [
            "List every element of the referral program brief in its own row",
            "For each, answer question 1: is the asserted fact (cap, reward, deadline) actually true?",
            "Answer question 2: is opting out or reversing as easy as opting in?",
            "Answer question 3: would this survive being explained in plain language to the user?",
            "Any element failing one or more questions gets a specific fix, not a vague 'make it clearer'",
          ],
          outputSample:
            "REFERRAL PROGRAM AUDIT\n\n1. 'Limited spots' cap -- Q1 FAIL (no real cap exists) -- VERDICT: fix, remove fabricated scarcity or implement a real cap\n2. Reward requires friend's 3rd purchase, undisclosed -- Q1 FAIL (headline implies immediate reward) -- VERDICT: fix, disclose the condition in the same font size as the headline\n3. Opt-out buried in footer FAQ -- Q2 FAIL (signup is 1-click, opt-out requires finding a footer link then reading an FAQ) -- VERDICT: fix, add opt-out to the same settings screen as signup\n...2 more rows",
          healthy: "Every failing element gets a specific, shippable fix, not a blanket 'run it by legal'.",
          unhealthy: "The whole program gets killed because one of 5 elements failed, wasting a legitimate growth mechanic.",
          interpret:
            "The filter isolates which specific claim or asymmetry is the problem, so the fix is surgical instead of scrapping the entire program.",
          soWhat: [
            {
              symptom: "Team debates whether the whole referral program is 'too risky' without pinpointing which element",
              action: "Run every program element through all 3 questions individually before any go/no-go decision",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the 5-element audit table and the final go/no-go memo",
            why: "Free, shareable directly with product and legal for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A go/no-go memo: each program element, its verdict (ship, fix, kill), and the specific one-line fix for anything that failed a question.",
      sampleOutput:
        "Drunk Elephant referral audit (excerpt)\n\nELEMENT: 'Give $15, Get $15' headline paying out as store credit\nQ1: FAIL, headline implies cash-value discount, actual reward is time-limited store credit\nVERDICT: fix, headline must read 'Give $15 credit, Get $15 credit' or the reward must become cash-equivalent\nELEMENT: cancel-anytime subscription toggle in account settings\nQ2: PASS, toggle is one click, same surface as the original signup CTA\nVERDICT: ship as-is",
      successCriteria: [
        "Every program element gets an answer to all 3 questions, not just an overall verdict",
        "Fixes are specific and shippable, not generic",
        "Memo distinguishes 'fix and ship' from 'kill entirely'",
      ],
      portfolioReady: true,
      stretch:
        "Draft the one paragraph you'd say out loud to a user explaining the reward mechanic, per the lesson's third question, and check it against the actual program copy.",
    },
  ],

  "growth-team-operating-cadence": [
    {
      id: "growth-team-operating-cadence-friday-review-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Status Theater or Real Review? Auditing a Friday Growth Meeting",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two transcript excerpts from a Friday experiment review, identify which one is a status-update trap and which one follows the learnings-focused format the lesson describes, and name the specific defects.",
      companyId: "mapmyindia",
      scenario:
        "You're a growth analyst at MapmyIndia (CE Info Systems), the NSE-listed New Delhi geospatial company, sitting in on two versions of the same team's Friday review, recorded two months apart, to diagnose why shipped-experiment velocity hasn't moved despite the meeting still happening every week.",
      brief:
        "Read both transcript excerpts. For each, flag whether it matches the status-update trap or the learnings-focused format, and cite the specific lines that prove it.",
      mode: "teardown",
      conceptsCovered: ["Distinguishing a learnings-focused review from a status-update trap"],
      teardownItems: [
        {
          itemId: "item-1-transcript-pair",
          specimen:
            "TRANSCRIPT A (Week 6)\nFacilitator: 'Okay, quick round-robin, what's running?'\nOwner 1: 'Pricing page test is still live, no update yet.'\nOwner 2: 'Onboarding email variant launched Tuesday, too early to call.'\nOwner 3: 'Checkout test is paused, engineering bandwidth.'\nFacilitator: 'Great, same time next week.'\n[Meeting length: 9 minutes]\n\nTRANSCRIPT B (Week 14)\nFacilitator: 'Priya, you're up, one learning in under 5 minutes.'\nPriya: 'The urgency banner on the pricing page lost. CTR was flat but refund requests rose 1.4x in the treatment. My read: the banner attracted price-sensitive users who weren't a fit.'\nFacilitator: 'Is that a valid result, sample size?'\nOwner 2: '3,200 per arm, powered for a 5% lift, we're confident in the read.'\nFacilitator: 'What else might it tell us?'\nPriya: 'Maybe urgency framing works for renewal, not new signup, worth a second test scoped to renewals.'\nFacilitator: 'Where else should we apply it? Anyone else running urgency copy?'\nOwner 3: 'The trial-expiry email uses similar language, we should hold off shipping that until we test the renewal angle.'\n[Meeting length: 42 minutes, 3 experiments reviewed]",
          specimenSource: "synthetic-realistic",
          prompt:
            "For each transcript, decide: status-update trap or learnings-focused review? Cite the specific evidence.",
          answerKey: [
            {
              defect: "Transcript A is a status-update trap: it reports what is running, not what was learned",
              severity: "critical",
              whyItMatters:
                "No decision gets made and no learning transfers to the next experiment; the meeting could be replaced by a dashboard link, exactly the failure mode the lesson names.",
              lessonRef: "common-cadence-failure-modes",
              owner: "you",
            },
            {
              defect: "Transcript A's 9-minute length for 3 experiments signals no real interrogation happened",
              severity: "moderate",
              whyItMatters:
                "Balfour's format allocates most of the meeting to interrogating learnings; a 3-minute-per-experiment pace cannot fit the 'is this valid, what else, where else' sequence.",
              lessonRef: "a-practical-weekly-rhythm-template",
              owner: "you",
            },
            {
              defect:
                "Transcript B correctly runs the three-question sequence: is this valid, what else might it tell us, where else should we apply it",
              severity: "cosmetic",
              whyItMatters:
                "This is the healthy pattern, flagging it correctly matters for calibrating what 'good' looks like, not for fixing a defect.",
              lessonRef: "a-practical-weekly-rhythm-template",
              owner: "you",
            },
            {
              defect:
                "Transcript B's finding changed a decision outside the original experiment (holding the trial-expiry email)",
              severity: "moderate",
              whyItMatters:
                "A review that only closes out the experiment being discussed, without asking where else the learning applies, wastes the highest-leverage part of the meeting.",
              lessonRef: "a-practical-weekly-rhythm-template",
              owner: "you",
            },
          ],
          distractors: [
            "Transcript A's meeting length (9 minutes) is itself the problem",
            "Transcript B is too long at 42 minutes and should be shortened",
            "Owner 3 pausing the checkout test in Transcript A is a defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Annotate the transcript excerpts and write up the defect list",
            why: "Free, no account friction, comment threads work well for citing specific lines",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A short write-up naming which transcript is which failure mode, with line-level citations for each defect found.",
      sampleOutput:
        "MapmyIndia Growth Review Audit\n\nTranscript A: STATUS-UPDATE TRAP\n- No experiment reaches a decision (running/paused/too early, all deferred)\n- 9 minutes for 3 experiments leaves no room for the 3-question sequence\n- Meeting could be replaced by a dashboard link\n\nTranscript B: LEARNINGS-FOCUSED REVIEW\n- Each owner presents one learning, not a status\n- Facilitator runs is-it-valid / what-else / where-else on every item\n- Finding on the pricing banner changes a decision on a separate email campaign\n\nRecommendation: replace the round-robin format with Priya's structure starting next Friday.",
      successCriteria: [
        "Correctly labels each transcript's failure mode or healthy pattern",
        "Cites specific lines as evidence, not just a general impression",
        "Identifies at least 3 of the 4 answer-key defects/patterns",
      ],
      portfolioReady: true,
    },
    {
      id: "growth-team-operating-cadence-build-the-rhythm",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Four-Touchpoint Weekly Rhythm From a Messy Backlog",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a disorganized 12-item experiment backlog with no owners or scores, build the actual weekly rhythm artifact: an async-scored backlog doc, a Friday review agenda template, and a portfolio-rebalance checklist, following the lesson's four-touchpoint structure.",
      companyId: "awfis-space-solutions",
      scenario:
        "You've joined the growth team at Awfis Space Solutions, the NSE-listed Indian flexible-workspace company, three weeks after a reorg. The old team ran no fixed cadence; experiments got discussed 'whenever someone had time.' Your first task is standing up the four-touchpoint rhythm from the lesson before the team's next planning cycle.",
      brief:
        "Score the 12-item backlog with ICE, build the Monday async doc, the Friday review agenda, and the biweekly portfolio-rebalance checklist.",
      mode: "build",
      conceptsCovered: [
        "Scoring a backlog asynchronously before the meeting, not during it",
        "Structuring a Friday review around learnings, not status",
        "Building a periodic portfolio-rebalance checklist to catch zombie initiatives",
      ],
      steps: [
        {
          stepId: "step-1-async-backlog",
          concept: "Scoring a backlog asynchronously before the meeting, not during it",
          lessonAnchor: "why-cadence-beats-headcount",
          theoryRecap:
            "The lesson's live-prioritization failure mode wastes meeting time on math one person could do alone; scoring happens before Monday's 10-minute confirmation, not during it.",
          question:
            "Given 12 unscored backlog items (headline, funnel stage, rough effort), which 3 to 5 make this week's cut once ICE-scored?",
          toolName: "Google Sheets",
          where: "Import the 12-item backlog, add Impact/Confidence/Ease columns (1-10 each), sort by the product.",
          procedure: [
            "Import the 12 items with a blank ICE score column each",
            "Score Impact, Confidence, Ease for each row (1-10), most teams score independently then average",
            "Sort descending by ICE product, top 5 become Monday's confirmed list",
            "Flag the bottom 3 as 'parking lot', explicitly deferred, not silently dropped",
          ],
          outputSample:
            "Awfis Growth Backlog, Week of Aug 24 (ICE-scored, top 5)\n1. Onboarding tour skip-rate fix, ICE 486 (I8 C9 E6.75)\n2. Coworking-plan comparison page, ICE 420\n3. Referral incentive reminder email, ICE 392\n4. Day-pass checkout autofill, ICE 336\n5. Meeting-room search filters, ICE 315\n\nParking lot (deferred, not dropped): virtual tour embed, pricing FAQ redesign, Slack integration prompt",
          healthy: "5 items enter Monday's meeting pre-scored, discussion takes 10 minutes confirming, not debating math",
          unhealthy: "12 unscored items get argued over live, the meeting runs 40 minutes and nothing ships that week",
          interpret:
            "Async scoring turns the Monday meeting into a confirmation, not a negotiation, freeing the room's attention for the one or two genuinely ambiguous calls.",
          soWhat: [
            {
              symptom: "Monday meetings run long and re-litigate scores every week",
              action: "Move ICE scoring to an async doc with a Sunday-night deadline",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-friday-agenda",
          concept: "Structuring a Friday review around learnings, not status",
          lessonAnchor: "a-practical-weekly-rhythm-template",
          theoryRecap:
            "Balfour's format spends roughly 40 of 45 minutes interrogating what experiments taught the team, each owner presents one learning in under 5 minutes.",
          question:
            "Given 3 experiments finishing this week (onboarding tour, referral email, day-pass checkout), what does the Friday agenda look like?",
          toolName: "Google Docs",
          where: "Create a shared doc, sent 24 hours before the meeting, each owner fills their section before showing up.",
          procedure: [
            "Create one section per finishing experiment: hypothesis, result, is-it-valid check, learning",
            "Send the doc Thursday afternoon, 24 hours before Friday's meeting",
            "Require owners to fill their section before the meeting starts",
            "Reserve meeting time for the 3-question sequence per experiment, not for reading the doc aloud",
          ],
          outputSample:
            "Friday Review Agenda, Aug 28 (45 min)\n\n1. Onboarding tour skip-rate fix (owner: Rahul, 5 min + 10 min discussion)\n2. Referral incentive reminder email (owner: Divya, 5 min + 10 min discussion)\n3. Day-pass checkout autofill (owner: Karan, 5 min + 10 min discussion)\n4. 5-min buffer for a cross-cutting theme if one emerges",
          healthy: "Every owner arrives having already written their section, discussion time exceeds presentation time",
          unhealthy: "The doc gets opened for the first time in the room, presentation eats the whole 45 minutes",
          interpret:
            "The pre-read requirement is what converts a status meeting into a decision meeting; skipping it collapses the format back into round-robin updates.",
          soWhat: [
            {
              symptom: "Owners read their section out loud instead of discussing it",
              action: "Enforce the 24-hour pre-read deadline, open with discussion, not presentation",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score and sort the backlog with ICE",
            why: "Free, familiar, sorting and formulas handle ICE math without extra tooling",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Build the Friday review agenda and portfolio-rebalance checklist",
            why: "Free, shareable, comment threads support async pre-reads",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "Three artifacts: an ICE-scored backlog doc, a Friday review agenda template, and a biweekly portfolio-rebalance checklist with at least 3 questions.",
      sampleOutput:
        "Portfolio Rebalance Checklist, Awfis Growth (biweekly)\n\n1. Which funnel stage got the most experiments the last 2 weeks? Is that intentional or just where it's easy to test?\n2. Any experiment still 'in progress' after 3 review cycles? Kill or timebox it.\n3. Has a past 'sure thing' win stopped moving its metric? Re-test or retire the claim.\n4. What's the one funnel leak nobody has proposed an experiment against yet?",
      successCriteria: [
        "Backlog is scored and sorted, top 5 clearly separated from the parking lot",
        "Friday agenda follows the learning-per-owner, 3-question-discussion structure",
        "Portfolio checklist includes a zombie-initiative check and a funnel-coverage check",
      ],
      portfolioReady: true,
      stretch:
        "Add a lightweight owner-rotation rule so the same person doesn't facilitate every Friday review, sustaining the cadence past one enthusiastic owner leaving.",
    },
  ],
  "localization-for-growth": [
    {
      id: "localization-for-growth-market-scorecard-audit",
      tier: "mini",
      archetype: "audit",
      title: "Score Three Candidate Markets Before a Launch Date Gets Set",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given raw signals for 3 candidate markets, score each on the lesson's four factors (demand signal, unit economics fit, channel availability, regulatory/payment friction) and rank them to pick the lowest-friction beachhead.",
      companyId: "sula-vineyards",
      scenario:
        "You're on the growth team at Sula Vineyards, the Nashik-based, NSE-listed wine company, evaluating a direct-to-consumer export push. Leadership wants a market picked by next week's board update, and the CEO's early favorite is the biggest market on the list, not necessarily the best-scoring one.",
      brief:
        "Score UK, Singapore, and Germany on the four factors using the data given, rank them, and explain why the top-ranked market is not the biggest one.",
      mode: "diagnostic",
      conceptsCovered: ["Scoring candidate markets on demand signal, unit economics, channel availability, and regulatory friction"],
      steps: [
        {
          stepId: "step-1-score-markets",
          concept: "Scoring candidate markets on demand signal, unit economics, channel availability, and regulatory friction",
          lessonAnchor: "how-growth-teams-pick-a-market",
          theoryRecap:
            "The lesson's four-factor framework scores demand signal, unit economics fit, channel availability, and regulatory/payment friction, then ranks; the highest score is rarely the biggest market.",
          question:
            "UK: high organic demand, strong purchasing power, mature wine e-commerce channels, straightforward alcohol-import licensing. Singapore: moderate demand, high purchasing power, thin direct-to-consumer wine e-commerce, complex alcohol duty structure. Germany: highest raw market size, but low organic demand signal and a strict alcohol-advertising regulatory regime. Which market ranks first?",
          toolName: "Google Sheets",
          where: "Build a 3-market by 4-factor grid, score each cell 1-5, sum for a total, sort descending.",
          procedure: [
            "List UK, Singapore, Germany as rows, the 4 factors as columns",
            "Score each cell 1-5 using the scenario data (5 = strongest fit)",
            "Sum each row for a total score",
            "Sort descending, the top row is the recommended beachhead",
          ],
          outputSample:
            "Sula Export Market Scorecard\n\n         Demand  UnitEcon  Channel  Regulatory  Total\nUK          5        4         5         4         18\nSingapore   3        5         2         3         13\nGermany     2        4         3         2         11\n\nRecommendation: UK, despite Germany having the larger raw market size.",
          healthy: "UK wins on total score despite not being the biggest market, exactly the pattern the lesson describes",
          unhealthy: "Picking Germany because it's the biggest wine market in Europe, ignoring the low demand signal and regulatory friction",
          interpret:
            "Raw market size is not on the scorecard for a reason, it doesn't predict how many things have to be invented from scratch to launch there.",
          soWhat: [
            {
              symptom: "Leadership wants to pick the biggest market by default",
              action: "Present the scorecard total alongside market size, so the tradeoff is explicit, not hidden",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build and sort the market scorecard",
            why: "Free, sorting and SUM formulas are all the math this needs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A completed 3-market scorecard with a one-paragraph recommendation memo for the board update.",
      sampleOutput:
        "Sula Export Recommendation Memo\n\nWe scored UK, Singapore, and Germany on demand signal, unit economics fit, channel availability, and regulatory friction. UK ranks first (18/20) despite Germany having the larger addressable wine market, because Germany's low organic demand signal and strict alcohol-advertising rules mean more has to be built from scratch before we can launch. Singapore's thin direct-to-consumer wine channel is the main drag on its score. Recommend UK as the beachhead market, revisit Germany once we have UK operating cash flow to fund the regulatory lift.",
      successCriteria: [
        "All 3 markets scored on all 4 factors with a justified number, not a guess",
        "Ranking is explicit and matches the summed scores",
        "Memo explains why the top-ranked market isn't the biggest one",
      ],
      portfolioReady: true,
    },
    {
      id: "localization-for-growth-what-breaks-silently-forecast",
      tier: "core",
      archetype: "forecast",
      title: "The What-Breaks-Silently Audit and Revenue-at-Risk Forecast",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a launch plan that only budgeted for translation, run the lesson's 'what breaks silently' audit across payments, pricing, channels, and trust signals, then forecast the revenue-at-risk if each gap ships unaddressed.",
      companyId: "mapmyindia",
      scenario:
        "MapmyIndia (CE Info Systems) is preparing to launch its mapping SDK in Indonesia. The go-to-market plan currently budgets only for translating the developer docs and marketing site into Bahasa Indonesia. You've been asked to stress-test that plan before it's signed off.",
      brief:
        "Audit payments, pricing, channel fit, and trust signals against the translation-only plan, then estimate revenue-at-risk for each gap using the given adoption assumptions.",
      mode: "diagnostic",
      conceptsCovered: [
        "Auditing payment methods, purchasing-power pricing, channel fit, and trust signals beyond translation",
        "Forecasting revenue-at-risk from an unaddressed localization gap",
      ],
      steps: [
        {
          stepId: "step-1-breaks-silently-audit",
          concept: "Auditing payment methods, purchasing-power pricing, channel fit, and trust signals beyond translation",
          lessonAnchor: "what-actually-needs-localizing-it-is-not-the-copy",
          theoryRecap:
            "The lesson's 'what breaks silently' audit lists every system that assumes home-market defaults, payment processor, pricing, channels, trust signals, anything not explicitly rebuilt fails without warning once growth starts working.",
          question:
            "The plan budgets for translation only. Checkout accepts card only (Indonesia's e-wallet share is large), pricing is a flat INR-to-IDR conversion, the only acquisition channel planned is the same LinkedIn ad strategy used in India, and the case-study page features only Indian customers. Which of these is the audit's job to flag?",
          toolName: "Google Docs",
          where: "Build a 4-row audit table: system, home-market default, what's actually needed locally, risk if unaddressed.",
          procedure: [
            "List the 4 systems: payments, pricing, channels, trust signals",
            "For each, state the home-market default currently planned",
            "State what the local market actually requires",
            "Rate the risk if it ships unaddressed: high, medium, low",
          ],
          outputSample:
            "MapmyIndia Indonesia Launch, What-Breaks-Silently Audit\n\nPAYMENTS: plan is card-only. Indonesia's e-wallet (GoPay, OVO) share is large among developer/startup buyers. Risk: HIGH\nPRICING: plan is flat INR-to-IDR conversion. No purchasing-power adjustment. Risk: HIGH\nCHANNELS: plan reuses the India LinkedIn strategy unchanged. Indonesian developer discovery skews more toward local dev communities and WhatsApp groups. Risk: MEDIUM\nTRUST SIGNALS: case-study page shows only Indian customers. No local proof. Risk: MEDIUM",
          healthy: "Every system gets an explicit local-requirement check before launch, gaps are named and risk-rated",
          unhealthy: "Only the docs and marketing copy get localized, payments/pricing/channels/trust ship on home-market defaults",
          interpret:
            "None of these four gaps show up in a translation budget line, which is exactly why they fail silently instead of blocking launch outright.",
          soWhat: [
            {
              symptom: "Launch plan only line-items translation cost",
              action: "Add payment integration, PPP pricing review, and a local trust-signal asset to the launch checklist before sign-off",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-revenue-at-risk-forecast",
          concept: "Forecasting revenue-at-risk from an unaddressed localization gap",
          lessonAnchor: "expansion-wins-and-failures-side-by-side",
          theoryRecap:
            "Uber's China exit shows that solving the visible localization problem (offering a local payment option) without solving the actual friction (making it as easy as the incumbent's) still loses the market; the audit needs to translate into a forecast leadership will act on, not just a list.",
          question:
            "If e-wallet-only buyers are 45% of the addressable developer market and a card-only checkout converts them at roughly one-third the rate of card buyers, what's the rough revenue-at-risk on a projected $200K year-one Indonesia revenue?",
          toolName: "Google Sheets",
          where: "Build a simple weighted-loss estimate: segment share x conversion gap x projected revenue.",
          procedure: [
            "Segment addressable revenue by payment preference (45% e-wallet, 55% card)",
            "Apply the conversion-rate gap for the underserved segment (roughly two-thirds lost)",
            "Multiply the loss rate by that segment's share of projected revenue",
            "State the result as a range, not a false-precision single number",
          ],
          outputSample:
            "Revenue-at-Risk Estimate, Payments Gap Only\n\nProjected year-one Indonesia revenue: $200K\nE-wallet-preferring segment: 45% = $90K addressable\nEstimated conversion loss if card-only: ~65% of that segment\nRevenue-at-risk: ~$58K (29% of total year-one projection), from payments alone, before pricing/channel/trust gaps are added",
          healthy: "The forecast gives leadership a number attached to inaction, not just a checklist item",
          unhealthy: "The audit stays a qualitative list, leadership deprioritizes it against harder deadlines",
          interpret:
            "A dollar figure moves a launch checklist item from 'nice to have' to 'blocking', which is the whole point of pairing the audit with a forecast.",
          soWhat: [
            {
              symptom: "Localization fixes keep losing prioritization fights to feature work",
              action: "Attach a revenue-at-risk estimate to every unaddressed audit line before the launch review",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Build the what-breaks-silently audit table",
            why: "Free, easy to share with the launch team for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the revenue-at-risk weighted estimate",
            why: "Free, handles the segment-share x conversion-gap math without extra tooling",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 4-row what-breaks-silently audit table plus a revenue-at-risk estimate for the highest-risk gap, formatted for a launch sign-off review.",
      sampleOutput:
        "Uber China, Retrospective What-Breaks-Silently Audit (for comparison)\n\nPAYMENTS: Alipay linking was offered but unreliable; Didi's password-free agreement was near-frictionless. Risk realized: lost share despite 'having' local payments.\nLesson: offering a local payment method is not the same as making it as frictionless as the incumbent's.",
      successCriteria: [
        "Audit covers all 4 systems (payments, pricing, channels, trust) with a risk rating each",
        "Revenue-at-risk estimate shows the calculation, not just a final number",
        "Deliverable is formatted for a real sign-off review, not just raw notes",
      ],
      portfolioReady: true,
      stretch:
        "Repeat the revenue-at-risk estimate for the pricing gap (flat INR-to-IDR conversion) using a purchasing-power-adjusted price point instead, and compare the two risk sizes.",
    },
  ],

  "churn-prediction-early-warning": [
    {
      id: "churn-prediction-early-warning-health-score-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Health-Score Triage: Auditing an At-Risk Account Export",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a synthetic 25-account health-score export (login trend, support sentiment, feature-adoption %, current MRR), sort accounts into the three churn signal families, build a composite risk tier, and route each flagged account to the correct save motion.",
      companyId: "zendesk",
      scenario:
        "You're the retention analyst at Zendesk, the customer service and support-ticketing SaaS platform, reviewing this month's account health export before the save-campaign meeting.",
      brief:
        "Score each account against usage-decline, support-sentiment, and feature-adoption-stall signals, flag accounts showing 2+ active signals as highest priority, and route each risk trigger to the save motion the lesson prescribes for it.",
      mode: "diagnostic",
      conceptsCovered: [
        "Sorting accounts into the three churn signal families",
        "Routing each risk trigger to a matching save motion",
      ],
      steps: [
        {
          stepId: "step-1-signal-triage",
          concept: "Sorting accounts into the three churn signal families",
          lessonAnchor: "the-three-signal-families",
          theoryRecap:
            "The lesson splits churn risk into three signal families: usage-decline (product usage drops ~41% the quarter before cancellation, login-frequency decline gives ~60 days of lead time), support-ticket sentiment (a sentiment spike correlates with ~3x higher churn risk), and feature-adoption stalling (accounts using <30% of core features show ~80% first-year churn).",
          question:
            "Of the 25 accounts in this export, which ones show 2 or more of the three signal families active at the same time, and which show only one?",
          toolName: "Google Sheets",
          where: "Import the export, freeze the header row, and add three helper columns that flag each signal family.",
          procedure: [
            "Import the export and freeze row 1",
            "Add a USAGE_FLAG column: TRUE if 30-day login count dropped 40%+ vs. the prior 30 days",
            "Add a SENTIMENT_FLAG column: TRUE if 2+ support tickets in 30 days scored negative",
            "Add an ADOPTION_FLAG column: TRUE if core-feature usage is below 30% for 3+ consecutive weeks",
            "Add a SIGNAL_COUNT column summing the three flags, sort descending",
          ],
          outputSample:
            "SIGNAL_COUNT = 3 (2 accounts)\n  Acct #114 — login -52%, 3 negative tickets, adoption 18%\n  Acct #209 — login -61%, 2 negative tickets, adoption 22%\n\nSIGNAL_COUNT = 2 (4 accounts)\n  Acct #087 — login -44%, adoption 26% (no sentiment flag)\n  Acct #133 — 3 negative tickets, adoption 12% (no usage flag)\n  ...2 more rows\n\nSIGNAL_COUNT = 1 (9 accounts)\n  ...9 rows, single-signal only\n\nSIGNAL_COUNT = 0 (10 accounts)\n  Healthy, no action",
          healthy:
            "2 accounts at SIGNAL_COUNT = 3 move to the top of the save-campaign queue, single-signal accounts stay on watch.",
          unhealthy:
            "Treating a SIGNAL_COUNT = 1 account (say, adoption-only) the same as a SIGNAL_COUNT = 3 account, or closing the file after only checking usage decline.",
          interpret:
            "Multiple active signal families is the strongest predictor in the lesson, a composite view catches accounts a single metric would miss.",
          soWhat: [
            {
              symptom: "An account is flagged on sentiment alone but shows healthy login and adoption",
              action: "Keep it on watch, don't auto-route to the highest-priority save tier yet",
              effort: "5 min",
            },
            {
              symptom: "Two or more signal families are active on the same account",
              action: "Move it to the top of this week's save-campaign queue",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-save-motion-routing",
          concept: "Routing each risk trigger to a matching save motion",
          lessonAnchor: "turning-signals-into-a-save-campaign",
          theoryRecap:
            "The lesson routes each trigger to a specific motion: a usage-decline trigger gets a lifecycle email nudge, a support-sentiment trigger gets a human CSM call (not an automated sequence), and a feature-adoption stall gets a targeted onboarding walkthrough of the specific unused feature most correlated with retention.",
          question:
            "For the 6 accounts flagged with SIGNAL_COUNT ≥ 2, what is each account's dominant trigger, and which save motion does that trigger require?",
          toolName: "Google Sheets",
          where: "Add a DOMINANT_TRIGGER and SAVE_MOTION column next to the flagged accounts.",
          procedure: [
            "For each flagged account, identify which flag is most severe (biggest % deviation from healthy)",
            "Mark DOMINANT_TRIGGER as usage, sentiment, or adoption",
            "Map usage → lifecycle email nudge, sentiment → human CSM call, adoption → targeted onboarding walkthrough",
            "Flag any account where sentiment is the dominant trigger for same-day human follow-up, not a queued task",
          ],
          outputSample:
            "Acct #114 — dominant: sentiment → HUMAN CSM CALL (same-day)\nAcct #209 — dominant: usage → lifecycle email nudge\nAcct #087 — dominant: usage → lifecycle email nudge\nAcct #133 — dominant: adoption → onboarding walkthrough (unused: bulk-export feature)\n...2 more rows",
          healthy: "Every sentiment-dominant account gets a human call this week, not an automated email.",
          unhealthy: "Enrolling a sentiment-dominant account in the same automated sequence as a usage-decline account.",
          interpret:
            "The save motion has to match the trigger, a mismatched motion (automated email for a frustrated, ticket-heavy account) wastes the lead time the signal bought you.",
          soWhat: [
            {
              symptom: "A sentiment-dominant account is sitting in an automated email queue",
              action: "Pull it out and assign it directly to a CSM for a same-day call",
              effort: "5 min",
            },
            {
              symptom: "An adoption-stall account has no specific feature named in its outreach",
              action: "Look up its lowest-adoption core feature and name it in the walkthrough invite",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score, flag, and route the account export",
            why: "Free, handles the filter/pivot workflow this audit needs with no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Pull live login-frequency and feature-adoption trend data instead of a static monthly export",
            why: "Turns this into a continuous monitoring workflow rather than a once-a-month manual pull",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path works fine from a manual monthly export; Mixpanel or Amplitude automate the usage-decline signal continuously instead of requiring someone to remember to pull a new export.",
      },
      deliverable:
        "A routed save-campaign worklist: account name, composite signal count, dominant trigger, and assigned save motion for every flagged account.",
      sampleOutput:
        "Care.com, retention worklist (excerpt)\n\nSIGNAL_COUNT = 3\n  Family Plus Care Group — sentiment dominant → CSM call scheduled Thu\n  Bright Horizons Local — usage dominant → lifecycle email sent\n\nSIGNAL_COUNT = 2\n  Sunrise Senior Partners — adoption dominant → onboarding walkthrough (background-check feature) booked\n  ...3 more rows\n\nWATCH LIST (SIGNAL_COUNT = 1): 9 accounts, no action this cycle",
      successCriteria: [
        "Correctly tags all accounts by dominant signal family (usage-decline, support-sentiment, feature-adoption-stall)",
        "Flags every account showing 2+ active signal families as highest-priority tier",
        "Assigns each flagged account the save motion that matches its dominant trigger, never a generic email for a sentiment-dominant account",
      ],
      portfolioReady: true,
    },
    {
      id: "churn-prediction-early-warning-save-campaign-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Routing Review: Teardown of a Save-Campaign Rule Set",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given 4 synthetic save-campaign automation rules (the trigger-to-workflow logic that fires when a risk signal crosses threshold), identify which ones route the signal to the wrong save motion and explain why the mismatch costs the account.",
      companyId: "snowflake",
      scenario:
        "You're auditing Snowflake's, the cloud data-warehousing company, retention-ops rule set ahead of a quarterly review of save-campaign intervention success rates.",
      brief:
        "Review each rule against the lesson's signal-to-motion mapping and composite-scoring principle, flag defects like a sentiment trigger routed to an automated sequence or a flat queue with no priority tiering.",
      mode: "teardown",
      conceptsCovered: ["Turning Signals Into a Save Campaign", "The Three Signal Families"],
      teardownItems: [
        {
          itemId: "item-1-usage-decline-trigger",
          specimen:
            "RULE: IF login_frequency drops more than 40% over 14 days THEN send a single automated 're-engagement' email from the marketing team and close the alert.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this the correct save motion for a usage-decline trigger? If not, what's wrong?",
          answerKey: [
            {
              defect:
                "Closing the alert after one automated email ignores that the same account could also be stalling on feature adoption or accumulating negative tickets at the same time.",
              severity: "moderate",
              whyItMatters:
                "The lesson calls out waiting on a single signal and closing the loop as a cause of false negatives, since some accounts churn from a second signal family the first rule never checks again.",
              lessonRef: "turning-signals-into-a-save-campaign",
              owner: "either",
            },
          ],
          distractors: [
            "Using an automated email for a usage-decline trigger (this part is correct per the lesson's routing table)",
            "Using a 14-day window to measure the login-frequency drop (a reasonable operationalization of the ~60-day lead-time signal)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-sentiment-trigger",
          specimen:
            "RULE: IF support-ticket sentiment score crosses the negative threshold twice in 30 days THEN enroll the account in the standard 4-email automated win-back sequence.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this routing match the lesson's signal-to-motion mapping?",
          answerKey: [
            {
              defect: "A support-sentiment spike is routed to an automated email sequence instead of a human CSM call.",
              severity: "critical",
              whyItMatters:
                "The lesson is explicit that a support-sentiment trigger should route to a human CSM call, not an automated sequence, because a frustrated, ticket-heavy account needs a real conversation.",
              lessonRef: "turning-signals-into-a-save-campaign",
              owner: "developer",
            },
          ],
          distractors: [
            "Using a 30-day window to measure repeated sentiment dips (a reasonable noise filter, not the defect)",
            "Requiring two negative-sentiment tickets rather than one (also a reasonable filter, not the defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-adoption-stall-trigger",
          specimen:
            "RULE: IF an account uses fewer than 30% of core features for 3 consecutive weeks THEN route to a targeted onboarding walkthrough of the specific unused feature most correlated with retention.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this routing correct as written, or does it have a defect?",
          answerKey: [],
          distractors: [
            "Using a 3-consecutive-week window instead of a single week (this matches the lesson's 'stuck for multiple consecutive weeks' language, not a defect)",
            "Targeting the specific unused feature most correlated with retention (this matches the lesson's stall-routing recommendation exactly)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-composite-score-trigger",
          specimen:
            "RULE: IF login_frequency drops more than 40% OR support sentiment crosses negative OR feature adoption falls below 30% THEN treat all three cases identically: assign the account to the CSM's general outreach queue with no priority tier.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this composite-scoring setup match the lesson's framework?",
          answerKey: [
            {
              defect:
                "Every trigger lands in the same generic queue with no priority tier and no distinction of which save motion fits which signal.",
              severity: "critical",
              whyItMatters:
                "The lesson names treating every risk signal the same way as the most common failure, a flat queue with no tiering or motion-matching is exactly that mistake.",
              lessonRef: "turning-signals-into-a-save-campaign",
              owner: "developer",
            },
            {
              defect:
                "Using OR logic without ever checking for overlapping signals means an account hitting two or three triggers at once gets no extra priority.",
              severity: "moderate",
              whyItMatters:
                "Accounts showing multiple active signal families are the highest-confidence churn risk in the lesson's framework and should be prioritized above single-signal accounts.",
              lessonRef: "the-three-signal-families",
              owner: "either",
            },
          ],
          distractors: [
            "Checking all three signal families in the same rule (this part is correct, the lesson wants a composite view)",
            "Using OR logic to catch any single signal (a reasonable first filter before scoring, not itself the defect)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each rule reviewed, its defect status, and the fix",
            why: "Free, sufficient for a structured review checklist across 4 rules",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across all 4 save-campaign rules: which route correctly, which don't, and the specific fix for each defective one.",
      sampleOutput:
        "Freshworks, save-campaign rule audit (excerpt)\n\nRULE 1 (usage-decline): PASS with note — add a recheck for other signals before auto-closing\nRULE 2 (sentiment): FAIL — routed to automated sequence, must route to human CSM call\nRULE 3 (adoption-stall): PASS — matches lesson framework\nRULE 4 (composite): FAIL — flat queue, no tiering, no motion-matching by dominant signal",
      successCriteria: [
        "Correctly identifies the sentiment-to-automated-email misrouting as the critical defect",
        "Recognizes the flat no-tier queue as violating the composite-score requirement",
        "Does not flag the two correctly-routed rules (usage-decline, adoption-stall) as defective",
      ],
      portfolioReady: true,
    },
  ],
  "building-in-public": [
    {
      id: "building-in-public-cadence-plan-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Pilot Plan: Building a One-Quarter Build-in-Public Cadence",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Build a one-quarter build-in-public plan for a real product beta: pick a sustainable cadence, sort a set of draft post ideas into safe-to-publish vs. hold, and lay out the first month's post calendar.",
      companyId: "zendesk",
      scenario:
        "You're the growth marketer piloting a build-in-public cadence for a new Zendesk AI feature currently in private beta, ahead of general availability.",
      brief:
        "Choose a cadence (weekly, monthly, or milestone-based) that fits a small team and a pre-GA product, apply the share/keep-private framework to 6 draft post ideas, and fill in the first month's calendar.",
      mode: "build",
      conceptsCovered: [
        "Choosing what to share without leaking the moat",
        "Picking a sustainable posting cadence",
      ],
      steps: [
        {
          stepId: "step-1-share-filter",
          concept: "Choosing what to share without leaking the moat",
          lessonAnchor: "what-to-keep-private",
          theoryRecap:
            "The lesson's share list is revenue/growth numbers, in-progress product decisions, real mistakes, and roadmap tradeoffs. Its keep-private list is anything that hands a competitor a working playbook (exact channel spend, the specific edge-dependent trick), individual customer/employee details, unverified numbers, and anything under active negotiation.",
          question:
            "Here are 6 draft post ideas for the beta launch. Which are safe to publish as-is, and which need to be held or rewritten?",
          toolName: "Notion",
          where: "Set up a simple table: draft idea, share/hold decision, cited rule if held.",
          procedure: [
            "List all 6 draft post ideas in one Notion table",
            "For each, check it against the share list and the keep-private list",
            "Mark SAFE for anything with a real, checkable number or an in-progress decision with no leaked specifics",
            "Mark HOLD for anything revealing exact spend/targeting, an unverified projection, or a live negotiation, and cite which rule it breaks",
          ],
          outputSample:
            "1. 'Beta hit 500 signups this week, up from 310 last week' — SAFE\n2. 'In talks with 2 potential launch partners, more soon' — HOLD (active negotiation)\n3. 'We're spending $9K/mo on LinkedIn ads at this exact targeting combo...' — HOLD (channel spend + moat)\n4. 'Reversed our pricing tier decision after beta feedback, here's why' — SAFE (real mistake/decision)\n5. 'Might hit 10K users by Q3 (unconfirmed estimate)' — HOLD (unverified number)\n6. 'Beta users complained about setup time, we're cutting it from 12 min to 4' — SAFE",
          healthy: "3 of 6 drafts pass through untouched, 3 are held with a specific rule cited for each.",
          unhealthy: "Publishing the exact ad-spend draft because it 'shows momentum,' or holding the pricing-reversal post because it feels like bad news.",
          interpret:
            "The share/hold line isn't about good news vs. bad news, it's about whether a competitor could clone the post or whether the number is actually verified.",
          soWhat: [
            {
              symptom: "A draft names an exact channel spend or targeting combo",
              action: "Hold it, or rewrite it to name the channel without the specific numbers that make it cloneable",
              effort: "5 min",
            },
            {
              symptom: "A draft states a projected number as if it already happened",
              action: "Hold until the number is actual, or clearly label it as a projection",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cadence-pick",
          concept: "Picking a sustainable posting cadence",
          lessonAnchor: "a-cadence-framework-that-holds-up",
          theoryRecap:
            "The lesson's cadence framework: weekly (one small update, early-stage/pre-revenue), monthly (full metrics recap, post-revenue steady growth), or milestone-based (only at real thresholds, later-stage/lower audience appetite). Most solo founders and small teams do best with monthly.",
          question:
            "Given a 2-person growth team supporting a pre-GA beta with no revenue yet, which cadence fits, and what does the first month's calendar look like?",
          toolName: "Notion",
          where: "Build a 4-week calendar table mapped to the 3 SAFE drafts plus new updates as the beta progresses.",
          procedure: [
            "Pick weekly cadence, since the product is pre-revenue and early-stage, matching the lesson's guidance for that stage",
            "Slot the 3 already-approved SAFE drafts into weeks 1, 2, and 4",
            "Leave week 3 open for whatever real update happens that week, not a filler post",
            "Note the commitment: hold this cadence for at least two quarters before judging results",
          ],
          outputSample:
            "Week 1: 'Beta hit 500 signups, up from 310 last week'\nWeek 2: 'Reversed our pricing tier decision after beta feedback, here's why'\nWeek 3: [reserved for the week's real update]\nWeek 4: 'Cut setup time from 12 min to 4 min based on beta complaints'",
          healthy: "Every scheduled week has a real, specific update or is explicitly reserved rather than padded with a vague filler post.",
          unhealthy: "Committing to weekly, then posting a vague 'great progress!' update in week 3 just to hit the schedule.",
          interpret:
            "The cadence only works if held for two quarters; a plan that looks right for one month but has no room for real content by month two isn't actually sustainable.",
          soWhat: [
            {
              symptom: "A scheduled week has no real update available",
              action: "Leave it reserved rather than posting a vague filler, or shift to a milestone-based post that week",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Draft and organize the post calendar and the share/keep-private checklist",
            why: "Free tier handles a running content calendar and a review table with no setup cost",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log which numbers have been verified before they're posted",
            why: "A simple verification log catches an unconfirmed number before it goes out, per the lesson's 'numbers you have not verified' rule",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-quarter build-in-public plan: chosen cadence with reasoning, 6 draft post ideas sorted into safe-to-publish vs. hold with rules cited, and a filled-in first-month post calendar.",
      sampleOutput:
        "Freshworks beta cadence plan (excerpt)\n\nCADENCE: Weekly (pre-revenue, early-stage, per the lesson's framework)\n\nWeek 1: 'AI ticket-routing beta hit 500 signups this week, up from 310'\nWeek 2: 'We reversed our pricing tier after beta feedback, here's the full reasoning'\nWeek 3: [reserved for that week's real update]\nWeek 4: 'Cut setup time from 12 minutes to 4 based on what beta users told us'\n\nHELD: 2 drafts (exact ad-spend/targeting detail, unconfirmed Q3 user projection)",
      successCriteria: [
        "Picks one cadence (weekly, monthly, or milestone-based) and justifies it against the team's actual stage",
        "Correctly holds any draft revealing exact channel spend, an unverified projection, or details under negotiation",
        "First-month calendar has no filler post standing in for a week with no real update",
      ],
      portfolioReady: true,
    },
    {
      id: "building-in-public-post-draft-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Pre-Publish Review: Teardown of Four Post Drafts",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given four synthetic build-in-public post drafts queued for the week, apply the share/keep-private framework to catch the ones that would leak competitive intel, post an unverified number, or fail to say anything specific.",
      companyId: "care-com",
      scenario:
        "You're the growth marketer at Care.com, the online marketplace for family, child, senior, and pet care services, doing the Friday pre-publish review of next week's build-in-public queue.",
      brief: "Read each draft, decide whether it's safe to publish as written, and cite the specific rule it breaks if not.",
      mode: "teardown",
      conceptsCovered: ["What to Actually Share", "What to Keep Private"],
      teardownItems: [
        {
          itemId: "item-1-negotiation-leak",
          specimen:
            "Draft post: 'Huge news brewing — we're deep in talks with a major daycare chain about a co-marketing partnership, terms are looking great and we might announce pricing details next week!'",
          specimenSource: "synthetic-realistic",
          prompt: "Safe to publish as written?",
          answerKey: [
            {
              defect: "Publishes details of a partnership still under active negotiation, including a hint at pricing terms.",
              severity: "critical",
              whyItMatters:
                "The lesson lists 'anything under active negotiation: funding terms, an acquisition conversation, a partnership before signatures' as something that should almost never go public, posting it early can derail the deal.",
              lessonRef: "what-to-keep-private",
              owner: "you",
            },
          ],
          distractors: [
            "Expressing enthusiasm about the partnership (tone isn't the issue)",
            "Not naming the daycare chain directly (the post still leaks enough specifics to be a problem)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-vague-momentum",
          specimen: "Draft post: 'Such a great month for the team, momentum is really building and we're excited about where things are headed!'",
          specimenSource: "synthetic-realistic",
          prompt: "Safe to publish as written?",
          answerKey: [
            {
              defect: "No specific, checkable number or decision anywhere in the post.",
              severity: "moderate",
              whyItMatters:
                "The lesson is explicit that a vague 'great momentum this month' post gets scrolled past, while a specific, true number gets replies because it reads as evidence, not marketing copy.",
              lessonRef: "what-to-actually-share",
              owner: "you",
            },
          ],
          distractors: [
            "Sounding overly positive (tone isn't the defect, missing specificity is)",
            "Being short (length isn't the issue, a short post with a real number would be fine)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-channel-spend-leak",
          specimen:
            "Draft post: 'Sharing our full growth playbook: we're spending $18K/month on TikTok ads targeting new-parent lookalike audiences at a $6.40 CPA, up 40% MoM since we found this exact targeting combo.'",
          specimenSource: "synthetic-realistic",
          prompt: "Safe to publish as written?",
          answerKey: [
            {
              defect: "Reveals exact ad spend by channel and the specific targeting combination currently driving results.",
              severity: "critical",
              whyItMatters:
                "The lesson flags 'exact ad spend by channel, the specific integration or growth trick your edge depends on' as content a competitor could clone in a weekend, this draft is exactly that case.",
              lessonRef: "what-to-keep-private",
              owner: "you",
            },
          ],
          distractors: [
            "Naming TikTok as a growth channel at all (naming the channel alone is a smaller risk than the exact spend + targeting combo)",
            "Including a MoM percentage change (a specific number is generally good, the issue is which specific number)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-verified-milestone",
          specimen:
            "Draft post: 'We crossed 50,000 active families on the platform this week, up from 41,000 three months ago. That's the number, pulled straight from this morning's dashboard.'",
          specimenSource: "synthetic-realistic",
          prompt: "Safe to publish as written?",
          answerKey: [],
          distractors: [
            "Posting a specific, dashboard-verified number (this matches the lesson's core requirement exactly)",
            "Including a comparison to three months ago (adds useful, checkable context, not a risk)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Run the pre-publish checklist against the lesson's share/keep-private rules",
            why: "Free, works as a lightweight review doc before anything goes out",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A hold/publish decision for each of the 4 drafts, with the specific rule cited for every hold.",
      sampleOutput:
        "Zendesk, pre-publish queue review (excerpt)\n\nDRAFT 1 (partnership talks): HOLD — active negotiation\nDRAFT 2 ('great momentum'): HOLD — no specific number, rewrite before it goes out\nDRAFT 3 (exact TikTok spend/targeting): HOLD — channel spend + moat leak\nDRAFT 4 (verified user count): PUBLISH — specific, dashboard-checked number",
      successCriteria: [
        "Holds the negotiation-leak and channel-spend-leak drafts with the correct cited rule",
        "Flags the vague-momentum draft for lacking specificity rather than approving it",
        "Approves the verified-milestone draft without flagging a false defect",
      ],
      portfolioReady: true,
    },
  ],
};
