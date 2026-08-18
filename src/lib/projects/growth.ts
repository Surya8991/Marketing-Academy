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
};
