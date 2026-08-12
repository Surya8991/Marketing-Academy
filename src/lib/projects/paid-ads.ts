/**
 * Practice projects for the `paid-ads` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file).
 *
 * This is the Phase 1 worked example for the whole projects layer, one
 * complete "simulation"-mode Project for `paid-ads-101`, built almost
 * verbatim from PROJECTS_PLAN.md section 2.3b's worked example (the Day 9
 * dashboard: 18,420 impressions / 1,308 clicks / 7.1% CTR / £0.26 CPC /
 * 3 conversions / £113.33 cost-per-conversion / 0.4x ROAS). Those numbers,
 * and the Day 3 and Day 14 numbers either side of them, are not invented,
 * they are the actual cumulative totals for the "Core Terms" ad group in
 * `public/project-data/ad-account-export.csv` (verify: sum impressions for
 * 2026-06-01 through 2026-06-09 = 18,420; sum clicks over the same range =
 * 1,308; sum cost = £340.08; sum conversions = 3).
 */

import type { Project } from "@/lib/projects/types";

export const PAID_ADS_PROJECTS: Record<string, Project[]> = {
  "paid-ads-101": [
    {
      id: "paid-ads-101-learning-phase-sim",
      tier: "core",
      archetype: "simulation",
      title: "The 14-Day Learning Phase: A Google Search Campaign Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a live-looking Google Ads search campaign dashboard on day 3, day 9, and day 14 of its learning phase, make the same call/hold/kill decisions a real account manager has to make under a ticking clock, and see exactly what a wrong-timed decision costs in wasted budget and lost signal.",
      companyId: "freshworks",
      scenario:
        "You're consulting on paid search for Freshworks, the Chennai-founded, Nasdaq-listed B2B SaaS company (FRSH). The team is demand-testing a prospective project-management add-on for remote teams before committing engineering budget to build it, and a single Google Search campaign is the entire test: \"Search - Remote PM Software\", £600 total budget, 14-day learning phase. You're the only person watching the dashboard.",
      brief:
        "Three checkpoints, three decisions. At each one you'll see the real cumulative numbers for that day, pick what you'd actually do, and find out immediately what that choice costs or protects. The lesson gave you the lookup table already, this is where you use it under a clock with money notionally draining.",
      mode: "simulation",
      conceptsCovered: [
        "auction mechanics (bid x quality score)",
        "CTR vs. conversion-rate diagnosis",
        "the 7-14 day learning phase",
        "ROAS interpretation",
        "one-change-at-a-time discipline",
      ],
      stages: [
        {
          stageId: "day3-early-check",
          label: "Day 3, first look",
          elapsed: "Day 3 of 14",
          concept: "Recognizing when a sample is too small to act on",
          lessonAnchor: "The Budget Question",
          situation:
            "You launched \"Search - Remote PM Software\" three days ago and open the dashboard for the first time since. Nothing has been touched since launch.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 3 of 14\n\n" +
            "  Impressions          5,710\n" +
            "  Clicks                 405      CTR 7.1%     (industry avg 6.66%)\n" +
            "  CPC                   £0.26\n" +
            "  Conversions               1      CVR 0.25%    (industry avg 7.52%)\n" +
            "  Cost per conv       £105.30\n" +
            "  ROAS                    n/a     (1 conversion is not a trend)",
          spendToDate: "£105.30 of £600",
          budgetRemaining: "£494.70",
          decision: {
            prompt:
              "One conversion in three days on a campaign that's supposed to validate real demand. What do you do?",
            options: [
              {
                id: "wait",
                label: "Note the numbers, close the dashboard, come back in 3-5 days",
                verdict: "optimal",
                outcome:
                  "You let the learning phase run undisturbed. Three days and 405 clicks is nowhere near the 100-200 clicks the lesson says you need just to judge one keyword theme, let alone enough to judge the whole campaign.",
                why:
                  "The algorithm is still calibrating who to show your ad to. Reacting to a single conversion is reacting to noise, not signal, and any edit right now restarts the clock you've already paid three days into.",
                lessonRef: "The Budget Question: 100-200 clicks to know if a keyword or ad group is working",
                nextStageId: "day9-diagnosis",
              },
              {
                id: "tweak-copy",
                label: "Rewrite the ad copy now, one conversion in three days feels too low",
                verdict: "costly",
                outcome:
                  "You ship a copy change on day 3. Google restarts the learning phase from zero. The clock you thought you were three days into is a fresh 14-day clock, and the 405 clicks of signal you already paid £105.30 for are void.",
                why:
                  "This is Mistake 3 in its purest form: touching a campaign before it has had time to speak. A single day's low conversion count on a brand-new campaign is not a trend.",
                lessonRef: "Mistake 3: touching campaigns too often (or not enough)",
                nextStageId: "day14-bled-budget",
              },
              {
                id: "pause-now",
                label: "Pause the campaign, ROAS is basically zero",
                verdict: "costly",
                outcome:
                  "You pause on day 3 having spent £105.30 to learn almost nothing. To get a real answer you'll have to relaunch, either now or later, and sit through this exact same three-day wait all over again.",
                why:
                  "A ROAS reading built on one conversion isn't a reading, it's a coin flip. The lesson's \"pause and diagnose\" advice assumes you have enough data to diagnose from; you don't yet.",
                lessonRef: "Key Metrics table: ROAS below 1x means pause and diagnose",
                nextStageId: "day14-bled-budget",
              },
            ],
          },
          liveVariant:
            "In a real account: resist opening Google Ads at all for the first 3 days after launch. When you do check, go to Campaigns > date range = launch-to-today, and note the numbers without touching anything, exactly like this stage.",
        },
        {
          stageId: "day9-diagnosis",
          label: "Day 9, scheduled check-in",
          elapsed: "Day 9 of 14",
          concept: "Diagnosing CTR-high / conversion-low with the metrics table",
          lessonAnchor: "Key Metrics and What They Tell You",
          situation:
            "Six days later. You're back on the 3-5 day check-in cadence the lesson recommends, not reacting to a notification or a bad feeling.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 9 of 14\n\n" +
            "  Impressions         18,420\n" +
            "  Clicks               1,308      CTR 7.1%     (industry avg 6.66%)\n" +
            "  CPC                  £0.26\n" +
            "  Conversions              3      CVR 0.23%    (industry avg 7.52%)\n" +
            "  Cost per conv      £113.33\n" +
            "  ROAS                  0.4x",
          spendToDate: "£340.08 of £600",
          budgetRemaining: "£259.92",
          decision: {
            prompt: "CTR is beating the industry average. Conversions are barely moving. What do you do?",
            options: [
              {
                id: "pause-roas",
                label: "Pause the campaign, ROAS is under 1x",
                verdict: "acceptable",
                outcome:
                  "You stop the bleeding at £340.08 spent. Defensible, ROAS under 1x genuinely does mean you're losing money right now. But you throw away a campaign whose top-of-funnel is proven working, and forfeit the learning phase you've already paid nine days for.",
                why:
                  "Pausing on a bad ROAS is in the lesson, but it's the second-best move here: it treats the symptom (money going out) without diagnosing the actual break (click-to-conversion, not the auction).",
                lessonRef: "Key Metrics table: ROAS below 1x means pause and diagnose",
                nextStageId: "day14-paused-early",
              },
              {
                id: "raise-bids",
                label: "Raise bids to get more clicks and more conversions",
                verdict: "costly",
                outcome:
                  "You spend the rest of the budget buying more of the same 0.23% conversion rate. Clicks were never the bottleneck, so more clicks just buys more of the problem, faster.",
                why:
                  "CTR at 7.1% against a 6.66% industry average says the targeting and copy are already working better than average. The gap is between click and conversion, not between impression and click.",
                lessonRef: "Key Metrics table: CTR is low row does not apply here, CTR is already healthy",
                nextStageId: "day14-bled-budget",
              },
              {
                id: "fix-landing-page",
                label: "Leave the campaign alone, fix the landing page",
                verdict: "optimal",
                outcome:
                  "You file a landing-page ticket and don't touch a single campaign setting. The learning phase keeps running uninterrupted, and the one variable you actually suspect (the page) gets fixed outside the platform where it can't reset anything.",
                why:
                  "This is row two of the lesson's own table: CTR high, conversions low means the ad is promising something the page doesn't deliver. You're also on day 9 of 14, a campaign-level change now would reset the clock for no reason.",
                lessonRef: "Key Metrics table: CTR is high, conversions are low means fix the landing page or the offer",
                nextStageId: "day14-clean-run",
              },
              {
                id: "double-change",
                label: "Switch off the two worst keywords and rewrite the ad copy",
                verdict: "costly",
                outcome:
                  "It looks like the diligent, thorough move. It changes two variables at once, five days before the learning phase would have finished on its own, and resets the clock exactly like a single change would.",
                why:
                  "Even if performance moves after this, you will never know which change caused it, the keyword cut or the new copy. Diligence isn't the problem here, timing is.",
                lessonRef: "Mistake 3: touching campaigns too often during the learning phase",
                nextStageId: "day14-bled-budget",
              },
            ],
          },
          liveVariant:
            "In a real account: Google Ads > Campaigns > your campaign > date range set to launch-to-today. Cross-check the Search Terms report against your landing page's actual headline, and check Analytics for average engagement time on that URL before deciding, don't decide from the campaign dashboard alone.",
        },
        {
          stageId: "day14-clean-run",
          label: "Day 14, full learning phase intact",
          elapsed: "Day 14 of 14",
          concept: "Reading a full, undisturbed learning-phase cycle",
          lessonAnchor: "The Budget Question",
          situation:
            "You left the campaign alone on day 9 and routed the landing-page fix through engineering instead of the ad account. The learning phase has now run its full, uninterrupted 14 days.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 14 of 14\n\n" +
            "  Impressions         32,427\n" +
            "  Clicks               2,288      CTR 7.1%     (still above the 6.66% industry avg)\n" +
            "  CPC                  £0.26\n" +
            "  Conversions              4      CVR 0.17%\n" +
            "  Cost per conv      £149.81\n" +
            "  Spend               £599.23 of £600",
          spendToDate: "£599.23 of £600",
          budgetRemaining: "£0.77",
          decision: {
            prompt:
              "CTR never dropped below industry average across all 14 days, that part of the campaign is proven. The landing-page fix hasn't shipped yet, so conversions barely moved. What do you take away from this run?",
            options: [
              {
                id: "relaunch-same-targeting",
                label: "Once the landing page fix ships, relaunch the same targeting and judge it on conversion rate alone",
                verdict: "optimal",
                outcome:
                  "You've isolated the variable. Whatever the conversion rate does next round is attributable to the landing page, because the targeting spent 14 clean days proving it isn't the problem.",
                why:
                  "This is what patience actually buys: not a bigger number this week, but a diagnosis you can trust next week. You spent £599.23 to learn one specific, correct thing.",
                lessonRef: "Key Metrics table: CTR is high, conversions are low means fix the landing page or the offer",
                nextStageId: "end",
              },
              {
                id: "abandon-targeting",
                label: "Drop this keyword theme, 4 conversions for £599 is not good enough",
                verdict: "costly",
                outcome:
                  "You throw away the one piece of proven signal from this entire test, that people searching this exact phrase click at an above-average rate, and go chase a different keyword theme that starts back at zero.",
                why:
                  "A CTR that beats industry average for 14 straight days is hard-won evidence. The conversion problem was diagnosed as a landing-page problem, not a targeting problem, on day 9, that diagnosis didn't stop being true because the fix is slow to ship.",
                lessonRef: "Key Metrics table: CTR is high, conversions are low means fix the landing page or the offer",
                nextStageId: "end",
              },
            ],
          },
          liveVariant:
            "In a real account: export the full 14-day Search Terms report before making any keyword decisions, and file the landing-page fix as a dev ticket referencing the exact ad copy promise, so whoever builds it knows what the ad told the visitor to expect.",
        },
        {
          stageId: "day14-paused-early",
          label: "Day 14, paused since day 9",
          elapsed: "Day 14 of 14 (campaign inactive since day 9)",
          concept: "The opportunity cost of a defensible-but-early pause",
          lessonAnchor: "Key Metrics and What They Tell You",
          situation:
            "The campaign has sat paused since day 9. £259.92 of the £600 budget was never spent, but nothing new has been learned in the five days since either.",
          dashboard:
            "Search campaign · Core Terms ad group · Paused day 9, Day 14 of 14\n\n" +
            "  Impressions         18,420   (unchanged since day 9)\n" +
            "  Clicks               1,308\n" +
            "  Conversions              3\n" +
            "  Cost per conv      £113.33\n" +
            "  Spend               £340.08 of £600 (£259.92 never spent)",
          spendToDate: "£340.08 of £600",
          budgetRemaining: "£259.92 (unspent, not lost)",
          decision: {
            prompt:
              "You saved £259.92, but you still don't know whether the problem was the landing page, the offer, or the audience. What's the actual next step?",
            options: [
              {
                id: "diagnose-before-relaunch",
                label: "Before relaunching anything, go check the landing page against the ad's promise",
                verdict: "acceptable",
                outcome:
                  "You do now what could have been done on day 9 without pausing, look at whether the page matches the ad. The budget is intact, but you've spent five extra days getting to a diagnosis you could have had already.",
                why:
                  "Pausing didn't lose money, but it didn't buy a diagnosis either. The CTR-high/conversion-low pattern was sitting in the day-9 dashboard the whole time.",
                lessonRef: "Key Metrics table: CTR is high, conversions are low means fix the landing page or the offer",
                nextStageId: "end",
              },
              {
                id: "relaunch-blind",
                label: "Relaunch with a lower budget and see what happens this time",
                verdict: "costly",
                outcome:
                  "Without diagnosing what broke the first run, a second run at a smaller budget just replays the same problem faster, with less room to reach the 100-200 clicks needed to judge it properly.",
                why:
                  "A relaunch is only useful once you know what you changed and why. Relaunching blind treats the pause as a reset button instead of a pause.",
                lessonRef: "The Budget Question: 100-200 clicks to know if a keyword or ad group is working",
                nextStageId: "end",
              },
            ],
          },
          liveVariant:
            "In a real account: a paused campaign's historical data stays on the Campaigns tab under a date range covering when it was live, use it, don't start a fresh campaign from nothing.",
        },
        {
          stageId: "day14-bled-budget",
          label: "Day 14, budget gone, no clean answer",
          elapsed: "Day 14 of 14",
          concept: "What a mistimed or compounded change actually costs",
          lessonAnchor: "Mistake 3: touching campaigns too often (or not enough)",
          situation:
            "Whether it was an early copy change, a panic-pause-and-relaunch, extra bid spend, or a same-day keyword-and-copy overhaul, the campaign spent almost the whole £600 without ever producing a clean, trustworthy signal.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 14 of 14\n\n" +
            "  Impressions         ~29,800   (a mix of two partial, interrupted phases)\n" +
            "  Clicks                1,958\n" +
            "  Conversions               4\n" +
            "  Cost per conv       £143.00\n" +
            "  Spend               £571.40 of £600\n\n" +
            "  Note: the learning phase restarted mid-run, so no single 14-day\n" +
            "  window of data exists to diagnose anything from.",
          spendToDate: "£571.40 of £600",
          budgetRemaining: "£28.60",
          decision: {
            prompt:
              "£571.40 spent, no 14-day window of clean data, and £28.60 left. What's the honest next move?",
            options: [
              {
                id: "write-up-and-stop",
                label: "Stop spending, write up exactly what changed and when, hand it to whoever tests this next",
                verdict: "optimal",
                outcome:
                  "You can't buy back the clean signal this campaign should have produced, but you can make sure the next attempt doesn't repeat the same timing mistake. The £28.60 left is worth more unspent than blown proving a point.",
                why:
                  "The lesson's point about the learning phase isn't that mistakes are unrecoverable, it's that the fix is discipline next time, not more spend now.",
                lessonRef: "Mistake 3: touching campaigns too often (or not enough)",
                nextStageId: "end",
              },
              {
                id: "spend-the-rest",
                label: "Spend the last £28.60 trying one more tweak before the budget runs out",
                verdict: "costly",
                outcome:
                  "£28.60 buys roughly 110 clicks at this campaign's CPC, well under the 100-200 the lesson says you need to judge even one keyword theme. It closes out the budget without producing anything you can act on.",
                why:
                  "The problem was never insufficient spend, it was insufficient patience. More of the same behavior at a smaller scale doesn't fix that.",
                lessonRef: "The Budget Question: 100-200 clicks to know if a keyword or ad group is working",
                nextStageId: "end",
              },
            ],
          },
          liveVariant:
            "In a real account: Google Ads shows a \"Learning\" status pill on the campaign or ad group whenever a significant edit restarts it, if you see that pill more than once in one campaign's life, that's the tell this stage is describing.",
        },
      ],
      liveTrack: {
        minSpend: "£300",
        minDurationDays: 14,
        setupSteps: [
          "Create a free Google Ads account (no cost to sign up, you only pay for clicks)",
          "Pick one narrow keyword theme for one real product or service, not ten themes at once",
          "Set a daily budget that totals £300-£600 across 14 days",
          "Write one dedicated landing page for the exact promise in the ad, not your homepage",
          "Launch, then close the dashboard for at least 3 days",
        ],
        checkInSchedule:
          "Every 3-5 days, exactly like the simulation stages above. Resist checking daily, the data won't have changed enough to mean anything.",
      },
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Where the real version of this campaign would live",
            why: "Free to browse and set up, Keyword Planner and campaign structure cost nothing to explore. This entire simulation is complete without ever opening it, the dashboards above are the account.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Where you'd confirm a CTR-high/conversion-low diagnosis for real",
            why: "Free tier reads landing-page engagement time and drop-off, the exact evidence behind the day-9 decision to fix the page rather than the targeting.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Google Ads",
            role: "Real ad spend for the optional live track",
            why: "The platform itself is free, the cost is the ad spend you choose to run (see liveTrack above, £300 minimum over 14 days). Only needed if you want to replay these exact decisions against a real account instead of this scripted one.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path is this simulation, complete, at zero spend. The live track is a genuine upgrade for anyone with a real product and £300 to spend, never a requirement to finish the project.",
      },
      datasetUrl: "/project-data/ad-account-export.csv",
      deliverable:
        "A decision log across all three checkpoints (day 3, day 9, day 14) plus a two-to-three sentence written diagnosis of what the day-9 dashboard was actually telling you and why.",
      sampleOutput:
        "Day 3: waited. Day 9: fixed the landing page, left the campaign alone. Day 14: CTR held at 7.1% for the full 14 days, well above the 6.66% industry average, so the targeting was never the problem, the break was always between click and conversion. Filed the fix as a dev ticket instead of a campaign edit, which kept the learning phase intact and means the next 14-day run will tell me, cleanly, whether the page fix worked.",
      successCriteria: [
        "Chose the optimal or acceptable option at day 3, not the costly early-change options",
        "Correctly diagnosed the day-9 dashboard as a click-to-conversion gap, not a targeting or budget gap",
        "Chose option C (fix the landing page, leave the campaign alone) or can explain in writing why a different choice was still defensible",
        "Final write-up names which specific lesson row or mistake each costly option would have contradicted",
      ],
      portfolioReady: false,
      stretch:
        "Run the live variant: launch a real £300, 14-day Google Ads search campaign for a real product (yours or a client's), and check in on your own dashboard at the same day-3 and day-9 marks instead of the scripted ones above.",
    },
  ],
};
