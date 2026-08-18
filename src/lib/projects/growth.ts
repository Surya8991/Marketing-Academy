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
};
