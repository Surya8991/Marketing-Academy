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
          lessonAnchor: "the-budget-question",
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
                  "You let the learning phase run undisturbed. 405 clicks already clears the 100-200 the lesson cites for reading one keyword theme, but conversions, not clicks, are the actual bottleneck here, and one conversion in three days is still a coin flip, not a trend. The learning phase itself runs on a clock, 7-14 days, not a click count, and you're only three days into it.",
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
                nextStageId: "day14-restart-penalty",
              },
              {
                id: "pause-now",
                label: "Pause the campaign, ROAS is basically zero",
                verdict: "costly",
                outcome:
                  "You pause on day 3 having spent £105.30 to learn almost nothing. To get a real answer you'll have to relaunch, and a relaunch is a brand-new learning phase, not a resumed one, so the account effectively restarts from zero anyway.",
                why:
                  "A ROAS reading built on one conversion isn't a reading, it's a coin flip. The lesson's \"pause and diagnose\" advice assumes you have enough data to diagnose from; you don't yet.",
                lessonRef: "Key Metrics table: ROAS below 1x means pause and diagnose",
                nextStageId: "day14-restart-penalty",
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
          lessonAnchor: "key-metrics-and-what-they-tell-you",
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
                nextStageId: "day14-wasted-spend",
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
                nextStageId: "day14-restart-penalty",
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
          lessonAnchor: "the-budget-question",
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
          lessonAnchor: "key-metrics-and-what-they-tell-you",
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
          stageId: "day14-restart-penalty",
          label: "Day 14, learning phase restarted mid-run",
          elapsed: "Day 14 of 14",
          concept: "What restarting the learning phase actually costs, in numbers, not just delay",
          lessonAnchor: "common-beginner-mistakes",
          situation:
            "Whether it was an early copy change, a panic-pause-and-relaunch, or a same-day keyword-and-copy overhaul, the account got edited mid-flight and Google re-explored a broader, less-qualified audience for a while before re-converging. That re-exploration is not free.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 14 of 14 (restarted mid-run)\n\n" +
            "  Impressions         33,966\n" +
            "  Clicks                1,970      CTR 5.8%     (industry avg 6.66%, now BELOW it)\n" +
            "  CPC                   £0.29     (up from £0.26, Quality Score reset penalty)\n" +
            "  Conversions               2      CVR 0.10%\n" +
            "  Cost per conv       £285.70\n" +
            "  Spend               £571.40 of £600\n\n" +
            "  Note: the learning phase restarted mid-run, so no single 14-day\n" +
            "  window of data exists to diagnose anything from, and the CTR that\n" +
            "  was beating the industry average is now below it.",
          spendToDate: "£571.40 of £600",
          budgetRemaining: "£28.60",
          decision: {
            prompt:
              "£571.40 spent for half the conversions and nearly double the cost-per-conversion of the clean run, and £28.60 left. What's the honest next move?",
            options: [
              {
                id: "write-up-and-stop",
                label: "Stop spending, write up exactly what changed and when, hand it to whoever tests this next",
                verdict: "optimal",
                outcome:
                  "You can't buy back the clean signal this campaign should have produced, £600 for 2 conversions at a reset-penalty CPC instead of £600 for 4 at the account's real rate. But you can make sure the next attempt doesn't repeat the same timing mistake. The £28.60 left is worth more unspent than blown proving a point.",
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
                  "£28.60 buys roughly 100 clicks at this stage's £0.29 CPC, technically inside the 100-200 range the lesson cites, but that's 100 clicks landing on top of an account whose signal already restarted once. A borderline sample stacked on already-contaminated data isn't a clean read, it's noise on top of noise, and it closes out the budget without producing anything you can act on.",
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
        {
          stageId: "day14-wasted-spend",
          label: "Day 14, bids raised, same broken funnel",
          elapsed: "Day 14 of 14",
          concept: "Why buying more clicks doesn't fix a click-to-conversion problem",
          lessonAnchor: "key-metrics-and-what-they-tell-you",
          situation:
            "You raised bids on day 9 to buy more volume. The auction did what auctions do when you bid more: it charged more per click. The landing page that was actually breaking the funnel was never touched.",
          dashboard:
            "Search campaign · Core Terms ad group · Day 14 of 14 (bids raised day 9)\n\n" +
            "  Impressions         27,141\n" +
            "  Clicks                1,927      (fewer than the £0.26-CPC run, despite spending the same money)\n" +
            "  CPC                   £0.31     (up from £0.26 after the bid increase)\n" +
            "  Conversions               3      CVR 0.16%    (industry avg 7.52%)\n" +
            "  Cost per conv       £200.00\n" +
            "  Spend               £600.00 of £600",
          spendToDate: "£600.00 of £600",
          budgetRemaining: "£0.00",
          decision: {
            prompt:
              "£260 more spent since day 9 than the clean run needed, zero new conversions the higher bids actually bought, cost-per-conversion up from £113.33 to £200.00. What's the actual lesson here?",
            options: [
              {
                id: "diagnose-not-scale",
                label: "Write up that the conversion bottleneck was never solved, the extra spend just proved bidding higher doesn't fix a landing page",
                verdict: "optimal",
                outcome:
                  "You correctly name what the £260 actually bought: proof that the auction was never the problem. The conversion rate barely moved because the thing suppressing it, the landing page, was never in the auction's control to begin with.",
                why:
                  "This is the lesson's own CTR-high/conversion-low row read correctly, one checkpoint too late. Raising bids only ever fixes a CTR-is-low problem.",
                lessonRef: "Key Metrics table: CTR is high, conversions are low means fix the landing page or the offer",
                nextStageId: "end",
              },
              {
                id: "raise-bids-again",
                label: "Conclude the campaign needs an even bigger budget next time to really test it",
                verdict: "costly",
                outcome:
                  "You take away exactly the wrong lesson. A bigger budget spent the same way buys more of a conversion rate that was never going to move, because the constraint was never volume.",
                why:
                  "This repeats Mistake 2's underlying error at a larger scale: throwing more spend at a problem before diagnosing what's actually broken.",
                lessonRef: "Key Metrics table: CTR is low row does not apply here, CTR is already healthy",
                nextStageId: "end",
              },
            ],
          },
          liveVariant:
            "In a real account: check the Auction Insights report before raising bids, if your impression share is already high, more bid budget buys expensive marginal clicks, not a fixed conversion problem.",
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
    {
      id: "paid-ads-101-account-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Structural Mistakes: A Google Ads Account Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic-but-realistic Google Ads search account about to get a 8x budget increase, find the real structural mistakes hiding in it, and correctly leave alone the numbers that only look wrong.",
      companyId: "hellofresh",
      scenario:
        "You're brought in to review a Google Ads search account for a meal-kit subscription startup modeling its go-to-market on HelloFresh's aggressive, always-on performance-marketing playbook, the same approach that let HelloFresh outspend rival Blue Apron on customer acquisition. The founder wants to raise the daily budget from $50 to $400 tomorrow. Before your manager signs off, they want your eyes on the account structure: is this built to scale, or is it quietly wasting money?",
      brief:
        "One account, two ad groups, four days of live data. Find every real structural mistake before the budget goes up, and don't flag the numbers that only look wrong.",
      mode: "teardown",
      conceptsCovered: [
        "Mistake 1: sending ad traffic to your homepage",
        "Ad Group / Ad Set level: one keyword theme per group (The Full Campaign Structure)",
        "Ad level: run at least 2 ads per group to compare (The Full Campaign Structure)",
        "Mistake 2: starting with too broad a target before narrowing",
      ],
      teardownItems: [
        {
          itemId: "mealkit-account-day4",
          specimenSource: "synthetic-realistic",
          specimen:
            "Account: mealkitstartup.com — Search campaign, live for 4 days\n" +
            "Campaign: Search - Meal Kit Subscription Launch          Budget: $400/day (raised today from a $50/day pilot)\n\n" +
            "AD GROUP 1: Meal Kits - General\n" +
            "  Keywords:\n" +
            "    [Broad]   meal kit delivery\n" +
            "    [Broad]   healthy dinner ideas\n" +
            "    [Phrase]  \"vegan recipes free\"\n" +
            "    [Exact]   blue apron alternative\n" +
            "    [Broad]   subscription box food\n" +
            "  Negative keywords: none configured\n" +
            "  Ads running: 1\n" +
            "    \"Meal Kits Delivered | Sign Up Today\" -> mealkitstartup.com (homepage)\n" +
            "  4-day metrics: 8,200 impr · 484 clicks · CTR 5.9% · CPC $0.90 · 0 conversions\n\n" +
            "AD GROUP 2: Competitor Conquest\n" +
            "  Keywords:\n" +
            "    [Exact]   blue apron promo code\n" +
            "    [Exact]   hellofresh discount\n" +
            "    [Phrase]  \"hellofresh vs blue apron\"\n" +
            "  Negative keywords: none configured\n" +
            "  Ads running: 1\n" +
            "    \"Try Something New | Meal Kits\" -> mealkitstartup.com (homepage)\n" +
            "  4-day metrics: 1,050 impr · 61 clicks · CTR 5.8% · CPC $2.15 · 0 conversions",
          prompt:
            "Before this account's budget goes from $50/day to $400/day tomorrow, list every real structural mistake you'd fix first, and explicitly name anything in the numbers that looks wrong but isn't.",
          answerKey: [
            {
              defect: "Both ad groups send every click to the homepage, not a dedicated landing page",
              severity: "critical",
              whyItMatters:
                "The lesson's Mistake 1 is exactly this: a homepage tries to do ten things at once, and dedicated landing pages convert 65% better (Digital Silk, 2025) than sending traffic to a general page. At $400/day this is the single most expensive unfixed problem in the account.",
              lessonRef: "Mistake 1: Sending ad traffic to your homepage",
              owner: "either",
            },
            {
              defect:
                "\"Meal Kits - General\" mixes three unrelated keyword themes in one ad group: a generic category term, a direct competitor brand term, and an unrelated informational term",
              severity: "critical",
              whyItMatters:
                "The lesson's campaign-structure rule is explicit: keep each group tightly themed, one keyword theme per group. One ad trying to be relevant to \"healthy dinner ideas\", \"blue apron alternative\", and \"vegan recipes free\" at once will have a mediocre Quality Score against all three, raising CPC across the whole group.",
              lessonRef: "The Full Campaign Structure: Ad Group / Ad Set level, keep each group tightly themed",
              owner: "you",
            },
            {
              defect: "Each ad group is running only one ad, with no second variant to compare it against",
              severity: "moderate",
              whyItMatters:
                "The lesson is explicit that you should always run at least 2 ads per group so you can compare performance. With one ad each, there's no way to know if 5.9-5.8% CTR is the best this account can do or the floor.",
              lessonRef: "The Full Campaign Structure: Ad level, run at least 2 ads per group",
              owner: "you",
            },
            {
              defect:
                "Zero negative keywords configured on an ad group running broad match on generic terms (\"healthy dinner ideas\", \"subscription box food\")",
              severity: "moderate",
              whyItMatters:
                "This is the practical form of the lesson's Mistake 2, starting too broad. Broad match without any exclusions on generic category terms is exactly how budget bleeds onto irrelevant searches before the account has even validated its narrowest, tightest theme.",
              lessonRef: "Mistake 2: Starting with too broad an audience or too many keywords",
              owner: "you",
            },
          ],
          distractors: [
            "Ad Group 1's CTR is 5.9%, slightly under the lesson's cited 6.66% average Google Search CTR (WordStream, 2025), a small gap like this is normal variance, not a structural defect",
            "Ad Group 2's CPC ($2.15) is more than double Ad Group 1's ($0.90), branded competitor-conquest terms routinely cost more because more advertisers bid on them, exactly the lesson's 'CPC is rising: more competitors entering your auction' row, this is expected, not broken",
            "The account only has 2 ad groups total, the lesson's own fix for starting too broad is to begin with the tightest possible theme and expand later, 2 narrow groups is the healthy starting point, not a sign the account is too small",
            "Zero conversions recorded after 4 days live, the lesson's own budget guidance says you need roughly 100-200 clicks to know if a keyword or ad group is working, at 484 and 61 clicks respectively neither group has reached that yet, so 0 conversions is too early to read, not a red flag",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Where you'd actually restructure ad groups, add negative keywords, and add a second ad variant",
            why: "Free to browse and edit, this entire teardown is completable by reading and annotating the specimen above without opening an account at all.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Confirm whether the homepage is actually bleeding clicks before recommending a dedicated landing page",
            why: "Free tier shows bounce/engagement time on the homepage specifically from paid traffic, the evidence behind flagging defect 1.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Optmyzr",
            role: "Automated account-structure audits and negative-keyword suggestions at scale",
            why: "The free path (manual review, exactly like this teardown) is complete for a 2-ad-group account; Optmyzr earns its cost once you're auditing accounts with dozens of ad groups on a recurring basis.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This teardown needs no paid tool at all, it's a structural read of an account export. Paid audit tools only save time once you're doing this across many accounts, not one.",
      },
      deliverable:
        "A structural audit memo listing only the real mistakes you found (not the distractors), each with the specific fix and the exact lesson mistake/rule it violates.",
      sampleOutput:
        "Applying the same 4-point checklist to a Dollar Shave Club-style launch account: the audit flagged all ad traffic routing to the homepage instead of a dedicated razor-subscription landing page, a single \"Shaving\" ad group mixing brand-defense terms with unrelated grooming-tips searches, and only one ad live in each group. The account's slightly-below-average 6.1% CTR and its zero conversions after 3 days were both explicitly logged as non-issues, not enough data yet, exactly like the distractors in this teardown.",
      successCriteria: [
        "Flagged all 4 real defects: homepage-only landing pages, the mixed-theme ad group, the single-ad-per-group problem, and the missing negative keywords",
        "Did not flag the 5.9% CTR as a defect on its own, correctly read it as normal variance against the 6.66% benchmark",
        "Did not flag the higher competitor-conquest CPC as a mistake, correctly attributed it to normal auction competition",
        "Did not flag the low click/conversion volume as a red flag, correctly identified it as too early to judge per the lesson's 100-200 click guidance",
      ],
      portfolioReady: false,
      stretch:
        "Pull a real Google Ads account (yours or a client's) that's about to get a budget increase and run this exact same 4-point structural checklist against it before the new budget goes live.",
    },
  ],

  "google-search-ads": [
    {
      id: "google-search-ads-search-terms-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Negative Keyword Audit: Cleaning Up a Live Search Terms Report",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real Search Terms report export and a Quality Score breakdown, identify which triggered queries are wasting spend and diagnose the weakest Ad Rank component, using the lesson's match-type and auction framework.",
      companyId: "lenskart",
      scenario:
        "You're a paid search associate at Lenskart reviewing a broad-match eyewear campaign that has been live for three weeks with a rising cost per lead.",
      brief:
        "Find the irrelevant triggered queries burning budget, build a themed negative keyword list, and read the Quality Score breakdown to find the one component actually dragging down Ad Rank.",
      mode: "diagnostic",
      conceptsCovered: [
        "Negative keywords as a budget and Quality Score control",
        "Reading Quality Score components to diagnose Ad Rank",
      ],
      steps: [
        {
          stepId: "step-1-search-terms-scan",
          concept: "Negative keywords as a budget and Quality Score control",
          lessonAnchor: "keyword-match-types",
          theoryRecap:
            "The lesson's warning callout on match types: broad match with zero negative keywords lets Google spend your budget on searches unrelated to your business, so the Search Terms report has to be checked weekly.",
          question:
            "This 18-row Search Terms export is from a broad-match 'prescription eyeglasses' ad group. Which triggered queries should become negative keywords before next week's spend?",
          toolName: "Google Sheets",
          where: "Import search-terms-export.csv, freeze the header row, sort by Cost descending.",
          procedure: [
            "Import the export and freeze row 1",
            "Sort by Cost descending to see which queries consumed the most budget",
            "Flag every query with zero conversions and a clear intent mismatch",
            "Group flagged queries into negative keyword themes (repair, jobs, free, DIY)",
          ],
          outputSample:
            "Search Terms report (excerpt, sorted by cost)\n\n  eyeglasses repair near me        Cost $38.10   Clicks 22   Conv 0\n  prescription glasses jobs        Cost $19.40   Clicks 11   Conv 0\n  free eyeglasses government       Cost $16.70   Clicks 9    Conv 0\n  buy prescription eyeglasses      Cost $61.20   Clicks 34   Conv 4\n  prescription eyeglasses online   Cost $54.90   Clicks 29   Conv 3",
          healthy:
            "The three zero-conversion, intent-mismatched rows (repair, jobs, free/government) become negatives; the two converting rows stay untouched and may get their own tighter ad group.",
          unhealthy:
            "Treating every low-converting row the same and cutting 'prescription eyeglasses online' along with the true negatives, which removes a query that is already converting.",
          interpret:
            "A negative keyword decision is about intent mismatch, not just a low conversion count on its own.",
          soWhat: [
            {
              symptom: "Cost per lead has been climbing week over week with no ad or bid changes",
              action: "Pull the Search Terms report and check it before touching bids or budget",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-quality-score-breakdown",
          concept: "Reading Quality Score components to diagnose Ad Rank",
          lessonAnchor: "how-the-auction-works",
          theoryRecap:
            "Ad Rank = Bid x Quality Score x expected impact of ad extensions. Quality Score itself is built from three components Google scores separately: Expected CTR, Ad Relevance, and Landing Page Experience.",
          question:
            "This keyword's Quality Score is 4/10. Given the three-component breakdown below, which one lever, if fixed, most directly explains the low score?",
          toolName: "Google Sheets",
          where: "Log the three component ratings from the Google Ads Keyword status column into a tracking sheet.",
          procedure: [
            "Record Expected CTR, Ad Relevance, and Landing Page Experience for the keyword",
            "Compare each rating (Below Average / Average / Above Average) against the ad and landing page it maps to",
            "Identify which single component is rated Below Average",
          ],
          outputSample:
            "Keyword: prescription eyeglasses online   Quality Score: 4/10\n\n  Expected CTR          Average\n  Ad Relevance          Average\n  Landing Page Experience   Below Average\n\n  Ad group's ads link to: lenskart.com/ (homepage)",
          healthy:
            "The diagnosis correctly names Landing Page Experience as the weak link, and the fix is a dedicated /eyeglasses/prescription landing page, not a rewritten ad.",
          unhealthy:
            "Rewriting ad headlines for another week when the ad itself is already rated Average, while the homepage-as-landing-page mismatch goes untouched.",
          interpret:
            "Quality Score is diagnostic, not just a number: each of the three components points at a different fix.",
          soWhat: [
            {
              symptom: "Quality Score stays at 4-5/10 despite several rounds of new ad copy",
              action: "Check Landing Page Experience specifically before writing another headline",
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
            role: "Sort, filter, and group the Search Terms export and Quality Score log",
            why: "No account access needed, works entirely on the provided exports",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optmyzr",
            role: "Automated negative keyword mining across large accounts",
            why: "Surfaces waste patterns across hundreds of ad groups instead of a manual weekly scan",
            required: false,
            fallback: "The manual Google Sheets scan above catches the same waste at low query volume",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A themed negative keyword list (grouped by intent-mismatch category) plus a one-paragraph Quality Score diagnosis naming the single weakest component and its fix.",
      sampleOutput:
        "Warby Parker, prescription sunglasses ad group audit\n\nNEGATIVE KEYWORDS TO ADD\n  repair: sunglasses repair, lens replacement\n  free/jobs: free sunglasses, sunglasses warehouse jobs\n\nQUALITY SCORE DIAGNOSIS\nKeyword 'buy prescription sunglasses' scores 5/10. Expected CTR and Ad Relevance are both Average; Landing Page Experience is Below Average because the ad links to the general sunglasses category page instead of a prescription-specific page. Fix: build a dedicated /prescription-sunglasses landing page before touching ad copy.",
      successCriteria: [
        "Correctly separates true intent-mismatch negatives from low-but-valid converting queries",
        "Names the single weakest Quality Score component from the breakdown, not a guess",
        "Ties the fix to the specific component diagnosed (landing page vs ad copy vs CTR)",
      ],
      portfolioReady: true,
    },
    {
      id: "google-search-ads-bidding-strategy-sim",
      tier: "core",
      archetype: "simulation",
      title: "The Bidding Strategy Call: Simulating Three Weeks of a New Search Campaign",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Make the bidding-strategy, negative-keyword, and Target CPA timing decisions a real Google Search Ads account manager faces across the first three weeks of a new campaign, and see the downstream consequences of each choice.",
      companyId: "warby-parker",
      scenario:
        "You're running Google Search Ads for Warby Parker's new prescription-sunglasses line launch, with a $600 weekly budget and a mandate to hit a sustainable cost per conversion within a month.",
      brief:
        "Decide when to switch from manual to automated bidding, how to react to early broad-match waste, and how to size a Target CPA target, without resetting Google's ability to optimize your account.",
      mode: "simulation",
      conceptsCovered: [
        "Why automated bidding needs conversion volume before it works",
        "Fixing match-type waste before scaling spend",
        "Setting a realistic Target CPA once enough data exists",
      ],
      stages: [
        {
          stageId: "day3-early-switch-temptation",
          label: "Day 3, first dashboard check",
          elapsed: "Day 3 of a 4-week launch",
          concept: "Why automated bidding needs conversion volume before it works",
          lessonAnchor: "bidding-strategies",
          situation:
            "You launched three days ago on Manual CPC. Results look thin and you're tempted to hand bidding over to Google's algorithm immediately.",
          dashboard:
            "Search campaign · Prescription Sunglasses · Day 3 of 28\n\n  Impressions   9,120\n  Clicks   310   CTR 3.4%\n  Conversions   6   Cost per conv $48.70\n  Bidding strategy   Manual CPC",
          spendToDate: "$292.20 of $600 (week 1)",
          budgetRemaining: "$307.80",
          decision: {
            prompt: "Six conversions in three days. Do you switch to Target CPA now to let Google optimize faster?",
            options: [
              {
                id: "switch-now",
                label: "Switch to Target CPA today with a $45 target",
                verdict: "costly",
                outcome:
                  "Delivery becomes erratic. Google throttles impressions trying to hit a target it doesn't have enough data to pursue, and daily conversions drop to 1-2 for the rest of the week.",
                why:
                  "The lesson's tip is explicit: Target CPA needs at least 30-50 conversions in the past 30 days to work well. Six conversions is nowhere near enough signal.",
                lessonRef: "Bidding Strategies: 'Do not switch to automated bidding strategies too soon... If you have fewer than 30 conversions in the past 30 days, manual CPC... is more predictable.'",
                nextStageId: "day10-broad-match-waste-degraded",
              },
              {
                id: "stay-manual",
                label: "Stay on Manual CPC, keep collecting data",
                verdict: "optimal",
                outcome:
                  "Delivery stays stable and conversion volume keeps accumulating toward the threshold Target CPA needs to work.",
                why:
                  "Manual CPC is predictable exactly when there isn't yet enough conversion history for Google's algorithm to optimize against.",
                lessonRef: "Bidding Strategies: manual CPC or Maximize Clicks 'is more predictable' below 30 conversions in 30 days.",
                nextStageId: "day10-broad-match-waste",
              },
              {
                id: "maximize-conversions-now",
                label: "Switch to Maximize Conversions to spend the full budget faster",
                verdict: "costly",
                outcome:
                  "Google spends the full daily budget chasing volume with no CPA guardrail, and cost per conversion climbs to $71 by day 5 with no cap to stop it.",
                why:
                  "Maximize Conversions has no cost ceiling of its own; the lesson explicitly says to 'watch your CPA carefully' with this strategy, which is riskier with almost no baseline data yet.",
                lessonRef: "Bidding Strategies: 'Maximize Conversions... Simple to set up, but watch your CPA carefully.'",
                nextStageId: "day10-broad-match-waste-degraded",
              },
            ],
          },
        },
        {
          stageId: "day10-broad-match-waste",
          label: "Day 10, Search Terms check",
          elapsed: "Day 10 of 28",
          concept: "Fixing match-type waste before scaling spend",
          lessonAnchor: "keyword-match-types",
          situation:
            "You stayed on Manual CPC and conversions have kept coming in steadily. Checking the Search Terms report for the first time reveals broad-match waste.",
          dashboard:
            "Search campaign · Prescription Sunglasses · Day 10 of 28\n\n  Conversions (to date)   19   Cost per conv $46.10\n  Search Terms flagged   'sunglasses repair', 'cheap reading glasses', 'sunglasses jobs'\n  Wasted spend (7 days)   $84.30, zero conversions",
          spendToDate: "$598.40 of $1,800 (3 weeks)",
          budgetRemaining: "$1,201.60",
          decision: {
            prompt: "You've found $84.30 of wasted spend on irrelevant broad-match queries. What now?",
            options: [
              {
                id: "add-negatives",
                label: "Add the flagged terms as negative keywords, keep the rest of the campaign as is",
                verdict: "optimal",
                outcome:
                  "Wasted spend on those exact terms drops to zero the following week, and the freed budget goes toward already-converting queries. Cost per conversion improves to $41.80.",
                why:
                  "The lesson's warning callout is direct: check the Search Terms report weekly and add irrelevant queries as negatives.",
                lessonRef: "Keyword Match Types warning: 'check the Search Terms report weekly to find irrelevant queries and add them as negatives.'",
                nextStageId: "day20-target-cpa-ready",
              },
              {
                id: "ignore-and-scale",
                label: "Ignore the waste and raise the daily budget to reach more people",
                verdict: "costly",
                outcome:
                  "Scaling budget without fixing the leak scales the waste proportionally. Wasted spend more than doubles to $190 the following week.",
                why:
                  "Adding budget on top of an unaddressed broad-match leak doesn't fix the underlying targeting problem, it just funds more of it.",
                lessonRef: "Keyword Match Types warning: broad match 'without a strong negative keyword list' wastes budget on irrelevant searches.",
                nextStageId: "day20-target-cpa-throttled",
              },
              {
                id: "switch-everything-exact",
                label: "Pause the broad-match keywords entirely and rebuild the ad group on exact match only",
                verdict: "acceptable",
                outcome:
                  "Waste stops immediately, but rebuilding the ad group also pauses several already-converting broad-match queries, and weekly conversion volume dips from 9 to 6 while the new exact-match set ramps up.",
                why:
                  "Exact match is 'most controlled, usually most efficient' per the lesson, but a full rebuild mid-flight loses the accumulated signal on terms that were actually working, a slower path to the same fix as adding targeted negatives.",
                lessonRef: "Keyword Match Types: 'Exact match... Most controlled, usually most efficient' vs. negatives being the lesson's recommended weekly-review fix.",
                nextStageId: "day20-target-cpa-ready",
              },
            ],
          },
        },
        {
          stageId: "day10-broad-match-waste-degraded",
          label: "Day 10, Search Terms check (recovering from an early bidding mistake)",
          elapsed: "Day 10 of 28",
          concept: "Fixing match-type waste before scaling spend",
          lessonAnchor: "keyword-match-types",
          situation:
            "Delivery has been erratic since the early automated-bidding switch. Checking the Search Terms report now shows the same broad-match waste, compounded by the unstable algorithm behavior.",
          dashboard:
            "Search campaign · Prescription Sunglasses · Day 10 of 28\n\n  Conversions (to date)   11   Cost per conv $68.90\n  Search Terms flagged   'sunglasses repair', 'cheap reading glasses', 'sunglasses jobs'\n  Wasted spend (7 days)   $121.60, zero conversions",
          spendToDate: "$612.90 of $1,800 (3 weeks)",
          budgetRemaining: "$1,187.10",
          decision: {
            prompt: "Cost per conversion is now $68.90, far above the day-3 baseline. Do you fix negatives and revert to Manual CPC, or keep pushing the automated strategy?",
            options: [
              {
                id: "revert-and-fix",
                label: "Revert to Manual CPC and add the flagged negative keywords",
                verdict: "acceptable",
                outcome:
                  "Delivery stabilizes and cost per conversion begins recovering, but the account has lost a full week of clean data and is now behind where the steady path would be at this point.",
                why:
                  "Reverting to a predictable strategy and clearing the match-type waste is the right fix, it's just recovering from a stage-1 mistake rather than avoiding it.",
                lessonRef: "Bidding Strategies tip on switching only once there is enough data; Keyword Match Types warning on weekly negative review.",
                nextStageId: "day20-target-cpa-ready",
              },
              {
                id: "stay-automated",
                label: "Keep the automated strategy running, assume it will self-correct",
                verdict: "costly",
                outcome:
                  "Cost per conversion keeps climbing past $75 as the algorithm keeps optimizing toward a target it still doesn't have reliable data to hit.",
                why:
                  "The lesson is clear that automated bidding needs conversion history to work; letting it run longer without that foundation compounds the problem rather than resolving it.",
                lessonRef: "Bidding Strategies: 'Google's algorithm needs conversion data to optimize.'",
                nextStageId: "day20-target-cpa-throttled",
              },
            ],
          },
        },
        {
          stageId: "day20-target-cpa-ready",
          label: "Day 20, enough data at last",
          elapsed: "Day 20 of 28",
          concept: "Setting a realistic Target CPA once enough data exists",
          lessonAnchor: "bidding-strategies",
          situation:
            "The account has now logged 34 conversions in the trailing 30 days at a stable $41-46 cost per conversion. It's time to decide on a Target CPA value.",
          dashboard:
            "Search campaign · Prescription Sunglasses · Day 20 of 28\n\n  Conversions (trailing 30 days)   34\n  Average cost per conversion   $43.20\n  Bidding strategy   Manual CPC",
          spendToDate: "$1,140 of $1,800",
          budgetRemaining: "$660",
          decision: {
            prompt: "You now have 34 conversions in 30 days, above the lesson's 30-50 threshold. What Target CPA do you set?",
            options: [
              {
                id: "realistic-target",
                label: "Set Target CPA at $44, close to the current actual average",
                verdict: "optimal",
                outcome:
                  "Delivery stays stable through the transition and cost per conversion holds in the low $40s while conversion volume grows over the next week.",
                why:
                  "A target close to the account's real, data-backed average gives the algorithm an achievable goal instead of a guess.",
                lessonRef: "Bidding Strategies: 'Target CPA... You tell Google what you want to pay per conversion. Google's algorithm adjusts bids to hit that target.'",
                nextStageId: "end",
              },
              {
                id: "aggressive-target",
                label: "Set Target CPA at $25 to push costs down aggressively",
                verdict: "costly",
                outcome:
                  "Delivery throttles hard, impressions drop by half, and weekly conversions fall from 9 to 3 as the algorithm struggles to find clicks cheap enough to hit an unrealistic target.",
                why:
                  "Setting a target far below the account's real, proven cost per conversion doesn't lower costs, it just suppresses delivery.",
                lessonRef: "Bidding Strategies: Target CPA requires the algorithm to hit a real cost target with real conversion data; an unrealistic target undermines the same 30-50 conversion foundation the lesson calls for.",
                nextStageId: "end",
              },
              {
                id: "stay-manual-forever",
                label: "Stay on Manual CPC indefinitely now that performance is stable",
                verdict: "acceptable",
                outcome:
                  "Performance stays stable but plateaus, missing the incremental efficiency gains automated bidding could unlock now that the account has enough conversion history.",
                why:
                  "Manual CPC was the right choice while data was thin; once the 30-50 conversion threshold is cleared, the lesson frames Target CPA as the next step, not staying manual forever.",
                lessonRef: "Bidding Strategies tip: 'Switch to Target CPA once you have enough data.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day20-target-cpa-throttled",
          label: "Day 20, recovering from compounded early mistakes",
          elapsed: "Day 20 of 28",
          concept: "Setting a realistic Target CPA once enough data exists",
          lessonAnchor: "bidding-strategies",
          situation:
            "The account is finally stabilizing after the earlier missteps, but conversion history is thinner and less consistent than it should be at this point in the campaign.",
          dashboard:
            "Search campaign · Prescription Sunglasses · Day 20 of 28\n\n  Conversions (trailing 30 days)   22\n  Average cost per conversion   $58.90\n  Bidding strategy   Manual CPC",
          spendToDate: "$1,340 of $1,800",
          budgetRemaining: "$460",
          decision: {
            prompt: "You're below the 30-conversion threshold and costs are still elevated. Do you switch to Target CPA now anyway to try to hit the deadline?",
            options: [
              {
                id: "wait-longer",
                label: "Stay on Manual CPC through the remaining budget to build real signal",
                verdict: "acceptable",
                outcome:
                  "Performance keeps improving gradually but the campaign ends the month without ever reaching the automated-bidding efficiency gain a cleaner launch would have unlocked.",
                why:
                  "Given the compounded early mistakes, staying manual is the safest recovery even though it means finishing the month below the account's potential.",
                lessonRef: "Bidding Strategies tip: switch only once you have enough data, below 30 conversions manual stays 'more predictable.'",
                nextStageId: "end",
              },
              {
                id: "force-switch",
                label: "Switch to Target CPA anyway to try to hit the deadline",
                verdict: "costly",
                outcome:
                  "With only 22 conversions in 30 days, delivery throttles again and cost per conversion spikes past $80 in the campaign's final week.",
                why:
                  "Switching below the lesson's stated 30-50 conversion threshold repeats the exact mistake that caused the day-3 setback in the first place.",
                lessonRef: "Bidding Strategies tip: 'Requires at least 30-50 conversions per month to work well.'",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$600/week for 3-4 weeks",
        minDurationDays: 21,
        setupSteps: [
          "Launch a Manual CPC search campaign with 2-3 tightly themed ad groups",
          "Check the Search Terms report every 7 days and add negatives",
          "Track trailing-30-day conversion count before considering any automated bidding switch",
        ],
        checkInSchedule: "Weekly, same day each week, comparing trailing conversion count against the 30-50 threshold",
      },
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Run the live campaign, read the dashboard and Search Terms report",
            why: "The only place these bidding and match-type decisions actually happen",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written log of the three bidding decisions made across the simulation, each with the dashboard number that drove it and the lesson passage that justified it.",
      sampleOutput:
        "Lenskart, Search Ads launch decision log (excerpt)\n\nDay 3: Stayed on Manual CPC. Only 5 conversions logged, below the 30-conversion threshold for Target CPA.\nDay 10: Added 'frames repair' and 'glasses jobs' as negatives after the Search Terms report showed $71 of zero-conversion waste.\nDay 20: Switched to Target CPA at $39, matching the trailing 30-day average of $38.60.",
      successCriteria: [
        "Never switches to automated bidding before the 30-50 conversion threshold is met",
        "Fixes match-type waste with negatives rather than scaling budget through it",
        "Sets a Target CPA close to the account's real trailing average, not an aspirational number",
      ],
      portfolioReady: true,
    },
  ],
  "meta-ads": [
    {
      id: "meta-ads-audience-structure-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Audience Size Teardown: Diagnosing an Over-Narrowed Ad Set",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real Ads Manager ad set structure export, diagnose why a heavily layered interest audience is starving the algorithm of data, and check whether the account's ad-set-to-conversion-volume ratio can support the learning phase at all.",
      companyId: "nykaa",
      scenario:
        "You're a growth marketer at Nykaa auditing an underperforming beauty prospecting campaign that has been live for two weeks with a rising cost per lead.",
      brief:
        "Read the ad set's targeting stack and its estimated audience size, then check whether the account is splitting too little conversion volume across too many ad sets.",
      mode: "diagnostic",
      conceptsCovered: [
        "Audience size as a delivery constraint, not just a targeting choice",
        "Ad set count vs. conversion volume needed for the learning phase",
      ],
      steps: [
        {
          stepId: "step-1-audience-size-check",
          concept: "Audience size as a delivery constraint, not just a targeting choice",
          lessonAnchor: "key-targeting-options-explained",
          theoryRecap:
            "The lesson's warning callout: targeting under 100,000 people is usually a mistake, the algorithm needs room to find your best buyers, and most campaigns should aim for 500,000-5 million.",
          question:
            "This ad set stacks four interest layers. Given the estimated audience size shown, is the targeting structurally broken before you even look at creative?",
          toolName: "Meta Ads Manager",
          where: "Ad Set level, Detailed Targeting section, Audience Definition panel on the right.",
          procedure: [
            "Open the ad set and list every interest layer stacked with AND logic",
            "Read the estimated audience size shown in the Audience Definition panel",
            "Compare that number against the lesson's 500,000-5 million guidance",
          ],
          outputSample:
            "Ad Set: Beauty Prospecting, Women 18-24\nTargeting stack (AND):\n  Interest: Organic Skincare\n  Interest: K-beauty Products\n  Behavior: Engaged Shoppers\n  Interest: Cruelty-Free Cosmetics\n\nEstimated audience size: 42,000 people",
          healthy:
            "The diagnosis correctly flags 42,000 as far below the 500,000-5 million range and traces it to four stacked AND layers, not to the creative or the offer.",
          unhealthy:
            "Concluding the ad set is 'fine' because 42,000 sounds like a reasonably large number in isolation, without checking it against the lesson's stated range.",
          interpret:
            "Audience size is a hard delivery constraint the algorithm needs room to work within, not a targeting precision score.",
          soWhat: [
            {
              symptom: "CPL keeps rising on an ad set with strong creative and clear offer",
              action: "Check the Audience Definition estimate before touching the creative",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-adset-count-vs-conversions",
          concept: "Ad set count vs. conversion volume needed for the learning phase",
          lessonAnchor: "the-learning-phase-and-why-you-must-not-kill-campaigns-early",
          theoryRecap:
            "The learning phase ends once an ad set collects 50 conversion events within a 7-day window; below that, the ad set is still stuck testing delivery.",
          question:
            "This campaign has 6 ad sets sharing 80 total conversions per week. Which of them can actually clear the learning phase threshold?",
          toolName: "Google Sheets",
          where: "Export the Ads Manager campaign breakdown by ad set and paste it into a tracking sheet.",
          procedure: [
            "List each ad set's weekly conversion count from the export",
            "Divide the account's 80 total weekly conversions across the 6 ad sets",
            "Flag any ad set below 50 conversions/week as unable to exit the learning phase",
          ],
          outputSample:
            "Weekly conversions by ad set\n\n  Beauty Prospecting, 18-24        13\n  Beauty Prospecting, 25-34        11\n  Beauty Prospecting, 35-44        9\n  Skincare Retargeting             22\n  Haircare Prospecting             15\n  Haircare Retargeting             10\n\nTotal: 80/week across 6 ad sets",
          healthy:
            "All six ad sets are correctly flagged as stuck below the 50-conversion threshold, and the fix proposed is consolidating them, not adding a seventh.",
          unhealthy:
            "Recommending a 7th ad set to test a new audience segment while every existing ad set is already starved of conversion volume.",
          interpret:
            "Splitting limited conversion volume across too many ad sets keeps every one of them permanently stuck in the learning phase.",
          soWhat: [
            {
              symptom: "Cost per result stays high indefinitely across several ad sets, none of them stabilize",
              action: "Consolidate overlapping ad sets so each one can individually clear 50 conversions/week",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Meta Ads Manager",
            role: "Read the targeting stack and audience size estimate",
            why: "The audience estimate is only shown live in Ads Manager, free to view without spending",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Tabulate ad set conversion counts against the 50-conversion threshold",
            why: "Free, no account access needed beyond the exported numbers",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Triple Whale",
            role: "Automated ad-set-level learning phase and CPL monitoring across accounts",
            why: "Flags starved ad sets automatically instead of a manual weekly export",
            required: false,
            fallback: "The manual Google Sheets tally above catches the same pattern at low ad set counts",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A short written diagnosis naming the audience size problem, the ad-set-count problem, and a consolidated ad set structure that fixes both.",
      sampleOutput:
        "Chewy, autoship prospecting ad set audit\n\nAUDIENCE SIZE: Ad set 'Dog Owners, Grain-Free Interest' stacks 3 AND layers, estimated audience 68,000, below the 500K-5M range.\n\nAD SET COUNT: 5 ad sets share 65 weekly conversions (13 avg each), all below the 50-conversion learning phase threshold.\n\nFIX: Merge the 5 narrow ad sets into 2 broader ones (Dogs, Cats) and let Advantage+ Audience find converters within each.",
      successCriteria: [
        "Correctly identifies audience size below the lesson's 500K-5M range from the targeting stack",
        "Correctly divides total conversions across ad set count to check the 50-conversion threshold",
        "Proposes consolidation rather than more granular targeting",
      ],
      portfolioReady: true,
    },
    {
      id: "meta-ads-learning-phase-sim",
      tier: "core",
      archetype: "simulation",
      title: "The Learning Phase Test: Surviving the First 9 Days of a New Ad Set",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Make the day-by-day reaction calls a Meta Ads manager faces in the first 9 days of a new ad set's learning phase, and see how panic edits, creative starvation, and scaling decisions each play out.",
      companyId: "chewy",
      scenario:
        "You're running Meta Ads for Chewy's new autoship subscription push, with a $50/day budget on a single ad set targeting pet owners.",
      brief:
        "Get the ad set through its learning phase without resetting it, fix a creative-starvation problem along the way, and scale responsibly once it exits.",
      mode: "simulation",
      conceptsCovered: [
        "Why editing an ad set early resets the learning phase",
        "Creative variation count as a lever the algorithm needs",
        "Scaling budget without re-triggering the learning phase",
      ],
      stages: [
        {
          stageId: "day2-panic-check",
          label: "Day 2, first dashboard check",
          elapsed: "Day 2 of the campaign",
          concept: "Why editing an ad set early resets the learning phase",
          lessonAnchor: "the-learning-phase-and-why-you-must-not-kill-campaigns-early",
          situation:
            "You launched the ad set two days ago. Cost per lead looks alarming compared to the $27.66 industry average cited in the lesson.",
          dashboard:
            "Ad Set: Autoship Prospecting · Day 2 of learning phase\n\n  Spend   $94.00\n  Leads   1\n  Cost per lead   $94.00\n  Conversions toward learning phase exit   1 of 50 needed",
          spendToDate: "$94.00 of $350 (week budget)",
          budgetRemaining: "$256.00",
          decision: {
            prompt: "One lead at $94 cost after two days, far above benchmark. Do you pause and rework the ad set now?",
            options: [
              {
                id: "wait",
                label: "Leave the ad set untouched, check again in a few days",
                verdict: "optimal",
                outcome: "The ad set keeps accumulating conversion data undisturbed toward the 50-conversion threshold.",
                why: "The lesson's warning callout is explicit: judging results in the first 2-4 days and editing then is 'the most expensive mistake in Meta Ads.'",
                lessonRef: "The Learning Phase warning: 'Give new ad sets at least 7 days and enough budget to collect 50 conversions before making any judgment.'",
                nextStageId: "day5-single-ad-problem",
              },
              {
                id: "pause-and-edit",
                label: "Pause the ad set and rewrite the targeting today",
                verdict: "costly",
                outcome: "The learning phase resets to zero. By day 9, the ad set is still on only 4 total conversions instead of the 50+ it should have.",
                why: "Pausing or heavily editing in the first days is named directly as the expensive mistake, it resets the phase completely.",
                lessonRef: "The Learning Phase warning: 'Pausing or heavily editing a campaign because early results look bad... resets the learning phase completely.'",
                nextStageId: "day9-still-learning",
              },
              {
                id: "cut-budget",
                label: "Cut the daily budget in half to limit the damage while it's performing badly",
                verdict: "costly",
                outcome: "The budget cut counts as a significant edit; the learning phase resets and the ad set restarts data collection from zero.",
                why: "A meaningful budget change is exactly the kind of early edit the lesson warns resets the learning phase before it has a chance to work.",
                lessonRef: "The Learning Phase warning: heavily editing an ad set in the first days 'resets the learning phase completely.'",
                nextStageId: "day9-still-learning",
              },
            ],
          },
        },
        {
          stageId: "day5-single-ad-problem",
          label: "Day 5, creative check",
          elapsed: "Day 5 of the campaign",
          concept: "Creative variation count as a lever the algorithm needs",
          lessonAnchor: "common-mistakes-and-how-to-avoid-them",
          situation:
            "You left the ad set alone and results are improving. Reviewing the ad set setup, you notice it only has one static image ad running.",
          dashboard:
            "Ad Set: Autoship Prospecting · Day 5 of learning phase\n\n  Spend   $235.00\n  Leads   9\n  Cost per lead   $26.10\n  Ads in this ad set   1 (single static image)\n  Conversions toward learning phase exit   9 of 50",
          spendToDate: "$235.00 of $350",
          budgetRemaining: "$115.00",
          decision: {
            prompt: "Cost per lead has recovered to near-benchmark, but there's only one ad running. Do you add creative variety now, mid-learning-phase?",
            options: [
              {
                id: "add-creatives",
                label: "Add 3 more creative variations (a UGC-style video, a carousel, a second static angle) to the same ad set",
                verdict: "optimal",
                outcome: "The system starts testing the new variations alongside the original within the same ad set; the learning phase continues uninterrupted since ads were added, not the ad set paused.",
                why: "The lesson names running one ad per ad set as Mistake 4, and specifically recommends 3-5 creative variations so the system can find winners.",
                lessonRef: "Common Mistakes, Mistake 4: 'Give Meta at least 3-5 creative variations per ad set... One ad means no comparison, no optimization.'",
                nextStageId: "day9-strong-exit",
              },
              {
                id: "leave-single-ad",
                label: "Leave it as one ad since it's already performing near benchmark",
                verdict: "acceptable",
                outcome: "The ad set exits the learning phase on schedule, but with no comparison data the account never learns whether a stronger creative could have lowered CPL further.",
                why: "Performing near-benchmark isn't the same as performing optimally; the lesson frames single-ad ad sets as a mistake regardless of current results, since there's no test running.",
                lessonRef: "Common Mistakes, Mistake 4: 'One ad means no comparison, no optimization.'",
                nextStageId: "day9-strong-exit",
              },
              {
                id: "swap-the-ad",
                label: "Replace the single ad with a different single ad to test a new angle",
                verdict: "costly",
                outcome: "Swapping the only ad counts as a significant edit to the ad set's delivery, and the learning phase resets, losing the 9 conversions already banked.",
                why: "Removing the only running ad and replacing it is a heavier edit than adding new variations alongside it, and triggers the same reset the lesson warns about for early edits.",
                lessonRef: "The Learning Phase warning: heavily editing an ad set 'resets the learning phase completely'; the fix per Mistake 4 is to add variations, not swap the only one.",
                nextStageId: "day9-still-learning",
              },
            ],
          },
        },
        {
          stageId: "day9-strong-exit",
          label: "Day 9, learning phase exit",
          elapsed: "Day 9 of the campaign",
          concept: "Scaling budget without re-triggering the learning phase",
          lessonAnchor: "the-learning-phase-and-why-you-must-not-kill-campaigns-early",
          situation:
            "The ad set has cleared 52 conversions in the trailing 7 days and formally exited the learning phase with strong, stable cost per lead.",
          dashboard:
            "Ad Set: Autoship Prospecting · Learning phase: Exited\n\n  Conversions (trailing 7 days)   52\n  Cost per lead   $22.40\n  Daily budget   $50",
          spendToDate: "$450 of $700 (2-week total)",
          budgetRemaining: "$250",
          decision: {
            prompt: "Performance is strong and stable. How do you scale spend for week 2?",
            options: [
              {
                id: "gradual-increase",
                label: "Increase the daily budget by about 20%, to $60/day",
                verdict: "optimal",
                outcome: "Delivery stays stable through the increase and cost per lead holds near $23 while lead volume grows proportionally.",
                why: "A modest, incremental change is consistent with the lesson's core theme: the algorithm needs stability once it has learned, not a fresh shock.",
                lessonRef: "The Learning Phase warning frames any 'heavily editing' move as risky; a small proportional budget step keeps the ad set inside stable delivery rather than shocking it.",
                nextStageId: "end",
              },
              {
                id: "double-budget",
                label: "Double the daily budget to $100/day to capture more volume fast",
                verdict: "costly",
                outcome: "The large budget jump acts as a significant edit; the ad set re-enters a learning-phase-like reset and cost per lead spikes back toward $60 for several days.",
                why: "The lesson's core warning is that heavy edits reset the learning phase, doubling budget overnight is exactly the kind of large, sudden change that provokes it.",
                lessonRef: "The Learning Phase warning: heavily editing a campaign 'resets the learning phase completely... Your cost-per-result stays high indefinitely.'",
                nextStageId: "end",
              },
              {
                id: "duplicate-adset",
                label: "Keep this ad set's budget flat and duplicate it as a second ad set to add more spend",
                verdict: "acceptable",
                outcome: "The original ad set's performance stays untouched, but the new duplicate has to run through its own full learning phase from zero, delaying the added volume by roughly a week.",
                why: "This avoids disturbing the winning ad set, which is safe, but it doesn't scale as efficiently as growing the proven ad set's budget gradually.",
                lessonRef: "The Learning Phase warning frames stability as the priority; duplicating protects that but starts a second, separate learning phase rather than compounding the one that already worked.",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day9-still-learning",
          label: "Day 9, still stuck in a reset learning phase",
          elapsed: "Day 9 of the campaign",
          concept: "Scaling budget without re-triggering the learning phase",
          lessonAnchor: "the-learning-phase-and-why-you-must-not-kill-campaigns-early",
          situation:
            "An earlier edit reset the learning phase. The ad set is still accumulating conversions slowly and has not yet reached the 50-conversion threshold.",
          dashboard:
            "Ad Set: Autoship Prospecting · Learning phase: In progress (reset)\n\n  Conversions (trailing 7 days)   14\n  Cost per lead   $41.90\n  Daily budget   $50",
          spendToDate: "$540 of $700 (2-week total)",
          budgetRemaining: "$160",
          decision: {
            prompt: "The ad set is still well under the 50-conversion threshold with elevated cost per lead. Do you make any further changes with the remaining budget?",
            options: [
              {
                id: "hold-steady",
                label: "Leave the ad set completely untouched and let the remaining budget run",
                verdict: "optimal",
                outcome: "Cost per lead gradually improves as data accumulates again, though the campaign ends the flight without ever reaching the efficiency a clean run would have hit.",
                why: "The only way out of a reset learning phase is uninterrupted time and budget, exactly what the lesson's warning prescribes even after a mistake has already happened.",
                lessonRef: "The Learning Phase warning: 'Give new ad sets at least 7 days and enough budget to collect 50 conversions before making any judgment.'",
                nextStageId: "end",
              },
              {
                id: "edit-again",
                label: "Make another targeting change, reasoning it can't get much worse",
                verdict: "costly",
                outcome: "The learning phase resets a second time, and the ad set ends the flight having never exited it, with cost per lead still above $45.",
                why: "Each edit restarts the same clock; a second edit during an already-reset learning phase compounds the exact mistake the lesson warns against.",
                lessonRef: "The Learning Phase warning: editing 'resets the learning phase completely. The algorithm never gets enough data to optimize.'",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$50/day for at least 9 days",
        minDurationDays: 9,
        setupSteps: [
          "Launch one ad set with 3-5 creative variations from day one if possible",
          "Install the Meta Pixel before spending anything",
          "Set a calendar reminder not to open Ads Manager with editing intent before day 7",
        ],
        checkInSchedule: "Day 2 (observe only), day 5 (creative check only), day 7-9 (learning phase exit review)",
      },
      toolStack: {
        free: [
          {
            toolName: "Meta Ads Manager",
            role: "Run the live ad set and read learning phase status",
            why: "The learning phase indicator and conversion count are only visible here",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written log of the three decisions made across the simulation, each citing the dashboard number that drove it and the exact lesson passage that justified it.",
      sampleOutput:
        "Firstcry, autoship prospecting ad set decision log (excerpt)\n\nDay 2: Left the ad set untouched despite a $91 cost per lead; only 1 of 50 needed conversions logged.\nDay 5: Added 2 new creative variations alongside the existing single ad rather than replacing it.\nDay 9: Increased daily budget by 20% to $48/day after the ad set cleared 54 conversions in 7 days.",
      successCriteria: [
        "Never pauses or heavily edits the ad set inside the first 7 days",
        "Adds creative variations without removing the ad set's only existing ad",
        "Scales budget incrementally rather than in a large jump after learning phase exit",
      ],
      portfolioReady: true,
    },
  ],

  "quality-score": [
    {
      id: "quality-score-component-diagnostic-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Component Breakdown: Diagnosing a Below-Average Quality Score Export",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real keyword-level Quality Score export (10 keywords with the three component ratings), identify which component is dragging each keyword's score down and prescribe the correct fix, not just react to the composite number.",
      companyId: "zendesk",
      scenario:
        "You're the paid search analyst at Zendesk reviewing why the 'Help Desk Software' campaign's CPCs have crept up 40% quarter over quarter, even though bids haven't changed.",
      brief:
        "Read the three-component breakdown, not the composite 1-10 score, and match each 'Below Average' rating to the specific fix the lesson prescribes for that component.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reading the three Quality Score components instead of the composite number",
        "Matching a Below Average rating to its specific fix",
      ],
      steps: [
        {
          stepId: "step-1-flag-below-average-components",
          concept: "Reading the three Quality Score components instead of the composite number",
          lessonAnchor: "how-the-three-components-work",
          theoryRecap:
            "The lesson breaks Quality Score into three weighted parts: Expected CTR (~39%), Landing Page Experience (~39%), and Ad Relevance (~22%). Google shows each as Below Average, Average, or Above Average in the Keywords tab.",
          question:
            "This export has 10 keywords. Sorted by which component is rated 'Below Average,' which single component shows up most often across the account?",
          toolName: "Google Sheets",
          where: "Import qs-export.csv, freeze the header row, and add a flag column per component.",
          procedure: [
            "Import qs-export.csv into Sheets and freeze row 1",
            "Add three helper columns: CTR Flag, Relevance Flag, LP Flag, marking each 'Below Average' cell",
            "Sum each flag column to see which component fails most often across the 10 keywords",
          ],
          outputSample:
            "Keyword                      QS   Exp.CTR        Ad Relevance     LP Experience\nhelp desk software            4   Below Average  Average          Below Average\nticketing system software     3   Below Average  Below Average    Below Average\ncustomer support platform     6   Average         Average          Below Average\nit service desk software      4   Below Average  Average          Below Average\nzendesk alternative            7   Average         Above Average    Average\n\nFlag totals (10 keywords): CTR Flag = 6, Relevance Flag = 2, LP Flag = 7",
          healthy:
            "The flag totals point to Landing Page Experience (7 of 10 keywords) as the dominant failure, so the fix effort goes there first.",
          unhealthy:
            "Treating all 10 keywords the same way because the composite scores look similarly low, when the actual failing component differs keyword to keyword.",
          interpret:
            "The composite score tells you something is wrong; the component flags tell you what to fix and in what order.",
          soWhat: [
            {
              symptom: "7 of 10 keywords flag Below Average on Landing Page Experience",
              action: "Prioritize dedicated landing pages per keyword theme before touching ad copy",
              effort: "half day",
            },
            {
              symptom: "Only 2 keywords flag Below Average on Ad Relevance",
              action: "Leave ad group structure alone for now; it isn't the bottleneck",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-match-fix-to-component",
          concept: "Matching a Below Average rating to its specific fix",
          lessonAnchor: "how-to-improve-each-component",
          theoryRecap:
            "The lesson gives a distinct fix list per component: CTR fixes are about headline-keyword matching and extensions, Ad Relevance fixes are about ad group tightness, and Landing Page fixes are about dedicated pages, speed, and message match.",
          question:
            "For the two keywords flagged Below Average on Ad Relevance ('ticketing system software' and one other), what is the single most likely structural cause, based on the lesson's mistake list?",
          toolName: "Google Sheets",
          where: "Same qs-export.csv, cross-referenced against the account's ad group list.",
          procedure: [
            "Filter the export to the 2 rows flagged Below Average on Ad Relevance",
            "Check which ad group each keyword sits in against the account's ad group export",
            "Confirm both keywords share one broad ad group with 40+ other terms",
          ],
          outputSample:
            "Ad group: 'Support Software - Broad' (47 keywords)\n  ticketing system software    QS 3   Ad Relevance: Below Average\n  it help desk software         QS 4   Ad Relevance: Below Average\n\nAd group: 'Zendesk Brand'  (3 keywords)\n  zendesk alternative           QS 7   Ad Relevance: Above Average",
          healthy:
            "Both Below-Average-Relevance keywords sit in the same 47-keyword catch-all ad group; the fix is splitting it into 3-5 keyword clusters with matched copy, exactly the lesson's mistake #1.",
          unhealthy:
            "Rewriting ad copy for the whole broad ad group once and expecting Ad Relevance to recover, without first splitting the cluster.",
          interpret:
            "Ad Relevance problems are almost always a structure problem (ad group is too broad), not a copywriting problem alone.",
          soWhat: [
            {
              symptom: "A 47-keyword ad group has 2+ keywords Below Average on Ad Relevance",
              action: "Split the ad group into 3-5 keyword clusters with dedicated ad copy per cluster",
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
            role: "Import and filter the Quality Score export, flag Below Average components",
            why: "Free, no account access required beyond a CSV export",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Ads",
            role: "Pull the keyword-level Quality Score columns to build the export",
            why: "Free to view for any account owner or manager",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A component-flag table across all 10 keywords with the dominant failing component identified, plus a one-paragraph fix recommendation prioritized by impact.",
      sampleOutput:
        "Freshworks CRM, QS component audit (excerpt)\n\nFlag totals (12 keywords): CTR Flag = 3, Relevance Flag = 8, LP Flag = 2\n\nFinding: Ad Relevance is the dominant failure, driven by one 30-keyword 'CRM Software - Broad' ad group. Recommendation: split into 5 clusters (free CRM, CRM for startups, CRM pricing, CRM integrations, CRM alternatives) before any copy rewrite.",
      successCriteria: [
        "Correctly tallies which component fails most often across the export",
        "Correctly identifies ad group structure, not copy quality, as the Ad Relevance root cause",
      ],
      portfolioReady: true,
    },
    {
      id: "quality-score-ad-rank-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "The Ad Rank Forecast: Would a Higher Quality Score Beat a Higher Bid?",
      timeEstimate: "15 minutes",
      timeMinutes: 15,
      objective:
        "Given four competing advertisers' bids and Quality Scores in the same auction, calculate Ad Rank for each and forecast both the resulting position order and the CPC outcome of a Quality Score improvement.",
      companyId: "policybazaar",
      scenario:
        "You manage paid search for PolicyBazaar's term life insurance vertical and want to prove to a stakeholder that improving Quality Score can outrank a richer competitor without raising the bid.",
      brief:
        "Apply the lesson's Ad Rank formula to forecast the auction outcome, then check the result against the CPC-multiplier table.",
      mode: "diagnostic",
      conceptsCovered: [
        "Ad Rank = Quality Score x Maximum Bid + Other Signals",
        "Quality Score CPC multiplier tiers",
      ],
      steps: [
        {
          stepId: "step-1-calculate-ad-rank",
          concept: "Ad Rank = Quality Score x Maximum Bid + Other Signals",
          lessonAnchor: "what-is-quality-score",
          theoryRecap:
            "Ad Rank is roughly Quality Score multiplied by Maximum Bid, plus other signals like device and extensions. A lower bidder with a higher Quality Score can outrank a higher bidder with a lower score.",
          question:
            "Four advertisers bid on 'term life insurance online' with different bids and Quality Scores. Ignoring other signals, what is the rank order?",
          toolName: "Google Sheets",
          where: "A 4-row table of Bid and Quality Score per advertiser.",
          procedure: [
            "List each advertiser's Max Bid and Quality Score in a Sheets table",
            "Add an Ad Rank column computed as Bid x Quality Score",
            "Sort descending by Ad Rank to get the auction order",
          ],
          outputSample:
            "Advertiser        Max Bid   Quality Score   Ad Rank (Bid x QS)\nPolicyBazaar       $3.00     8               24.0\nCompetitor A       $5.00     3               15.0\nCompetitor B       $4.00     4               16.0\nCompetitor C       $2.50     9               22.5\n\nRank order: PolicyBazaar (24.0) > Competitor C (22.5) > Competitor B (16.0) > Competitor A (15.0)",
          healthy:
            "PolicyBazaar wins the top spot at $3.00 against Competitor A's $5.00 bid, purely because QS 8 beats QS 3.",
          unhealthy:
            "Assuming Competitor A wins because $5.00 is the highest bid on the list, ignoring the Quality Score multiplier entirely.",
          interpret:
            "Ad Rank is a product, not a sum, so a large Quality Score gap can flip the outcome even against a much larger bid gap.",
          soWhat: [
            {
              symptom: "A competitor is outbidding you 60%+ but you still rank higher",
              action: "Don't raise the bid to 'be safe'; the QS advantage is already doing the work",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-cpc-outcome",
          concept: "Quality Score CPC multiplier tiers",
          lessonAnchor: "how-quality-score-affects-your-cpc",
          theoryRecap:
            "The lesson's CPC multiplier table shows QS 10 gets up to a 50% discount vs. baseline, QS 7-9 gets 20-30% off, QS 5-6 is roughly baseline, and QS 1-4 pays a 25-400% premium.",
          question:
            "If PolicyBazaar raises Quality Score from 8 to 10 on this keyword, what should happen to the CPC actually paid, holding position roughly constant?",
          toolName: "Google Sheets",
          where: "Same table, add a forecast row for QS 10.",
          procedure: [
            "Add a forecast row: same $3.00 bid, Quality Score raised to 10",
            "Apply the lesson's discount tiers to estimate the new effective CPC range",
            "Compare forecast CPC against the current QS 8 CPC",
          ],
          outputSample:
            "Scenario          Bid      QS   Discount tier applied      Forecast CPC range\nCurrent            $3.00    8    20-30% off baseline         $2.10 - $2.40\nForecast (QS 10)   $3.00    10   up to 50% off baseline      $1.50",
          healthy:
            "Raising QS from 8 to 10 forecasts a further CPC drop from roughly $2.10-2.40 down to about $1.50, without touching the bid.",
          unhealthy:
            "Concluding the CPC is fixed at whatever the bid is set to, and that Quality Score only affects position, not price.",
          interpret:
            "Quality Score compounds: it wins better positions AND buys them at a lower actual price than the max bid suggests.",
          soWhat: [
            {
              symptom: "Stakeholder asks to raise the bid to defend position",
              action: "Show the forecast table; a QS push to 10 is cheaper than a bid increase for the same or better position",
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
            role: "Build the Ad Rank and CPC forecast tables",
            why: "Free, no account access needed for a forecast exercise",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An Ad Rank comparison table across 4 advertisers plus a before/after CPC forecast for a Quality Score improvement from 8 to 10.",
      sampleOutput:
        "Lenskart, Ad Rank forecast (excerpt)\n\nAdvertiser     Bid      QS   Ad Rank\nLenskart        $2.20    9    19.8\nCompetitor X    $4.00    4    16.0\n\nForecast: raising Lenskart's QS from 9 to 10 at the same bid moves effective CPC from ~$1.80 toward ~$1.60, while position stays #1.",
      successCriteria: [
        "Correctly computes Ad Rank as Bid x Quality Score for all 4 advertisers",
        "Correctly forecasts a lower CPC (not just better position) from the QS 8 to QS 10 improvement",
      ],
      portfolioReady: true,
    },
  ],
  "bidding-strategies": [
    {
      id: "bidding-strategy-eligibility-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Eligibility Check: Is This Account Ready for Smart Bidding?",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a monthly conversion-volume and CPA export across 5 campaigns, apply the lesson's data thresholds to sort campaigns into 'stay on Manual CPC,' 'use Maximize Conversions first,' or 'eligible for Target CPA.'",
      companyId: "duolingo",
      scenario:
        "You're the growth marketing analyst reviewing five regional Search campaigns for Duolingo Plus subscriptions before recommending a bidding-strategy rollout.",
      brief:
        "Use the lesson's 25/30/50-conversion thresholds, not intuition, to sort the campaigns and flag which low-volume ones should be pooled.",
      mode: "diagnostic",
      conceptsCovered: [
        "The 30-50 monthly conversion threshold for smart bidding eligibility",
        "Portfolio bid strategies pooling low-volume campaigns",
      ],
      steps: [
        {
          stepId: "step-1-sort-by-conversion-threshold",
          concept: "The 30-50 monthly conversion threshold for smart bidding eligibility",
          lessonAnchor: "3-target-cpa-tcpa",
          theoryRecap:
            "The lesson sets a hard floor: accounts with fewer than 25 monthly conversions underperform on every bidding strategy, including manual. Target CPA needs at least 30, ideally 50+.",
          question:
            "Five campaigns show monthly conversions of 12, 28, 34, 61, and 9. Which are eligible for Target CPA today, and which must stay on Manual CPC or Maximize Conversions?",
          toolName: "Google Sheets",
          where: "Import the 5-campaign conversion export and add an eligibility column.",
          procedure: [
            "Import campaign-conversions.csv listing monthly conversions per campaign",
            "Add an Eligibility column: below 25 = Manual CPC, 25-49 = Maximize Conversions (no target), 50+ = Target CPA ready",
            "Sort the sheet by the Eligibility column",
          ],
          outputSample:
            "Campaign                 Monthly Conversions   Eligibility\nDuolingo Plus - US        61                     Target CPA ready\nDuolingo Plus - India      34                    Maximize Conversions (no target)\nDuolingo Plus - Brazil     28                    Maximize Conversions (no target)\nDuolingo Plus - Germany    12                    Manual CPC\nDuolingo Plus - Japan       9                    Manual CPC",
          healthy:
            "Only the US campaign (61 conversions) is recommended for Target CPA; Germany and Japan stay on Manual CPC until volume grows.",
          unhealthy:
            "Switching all five campaigns to Target CPA at once because 'smart bidding is supposed to be better,' including the two under 25 conversions.",
          interpret:
            "Eligibility is a hard data floor, not a preference; below the threshold, every strategy including manual underperforms.",
          soWhat: [
            {
              symptom: "Two campaigns sit under 25 monthly conversions",
              action: "Leave them on Manual CPC and revisit after 60 days of volume growth",
              effort: "5 min",
            },
            {
              symptom: "Two campaigns sit between 25 and 49 conversions",
              action: "Move to Maximize Conversions with no target to build data, not straight to Target CPA",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pool-low-volume-campaigns",
          concept: "Portfolio bid strategies pooling low-volume campaigns",
          lessonAnchor: "a-step-by-step-switching-framework",
          theoryRecap:
            "Portfolio bid strategies apply one Target CPA or Target ROAS across multiple campaigns, pooling their conversion data. This helps when individual campaigns are below threshold but the combined account clears it.",
          question:
            "Germany (12) and Japan (9) are both under threshold individually. Combined, do they clear the 25-conversion floor for a pooled Maximize Conversions strategy?",
          toolName: "Google Sheets",
          where: "Same sheet, sum the two low-volume campaigns.",
          procedure: [
            "Sum Germany's 12 and Japan's 9 monthly conversions",
            "Compare the combined total against the 25-conversion floor",
            "Flag both campaigns for a shared portfolio bid strategy if combined volume clears the floor",
          ],
          outputSample:
            "Germany (12) + Japan (9) = 21 combined monthly conversions\nFloor required: 25\nResult: still below floor, do not pool yet; recheck after 30 more days of volume",
          healthy:
            "Combined volume is checked honestly (21 vs. 25 needed) instead of assuming pooling automatically fixes low volume.",
          unhealthy:
            "Pooling Germany and Japan into a portfolio strategy anyway because it 'feels' like enough combined traffic, without checking the number against the floor.",
          interpret:
            "Portfolio bidding pools data, it doesn't invent it; the combined total still has to clear the same threshold.",
          soWhat: [
            {
              symptom: "Combined conversions from two campaigns still fall under 25",
              action: "Keep both on Manual CPC for another 30 days rather than pooling prematurely",
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
            role: "Sort campaigns by eligibility and test pooled totals",
            why: "Free, works from a plain CSV export",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Ads",
            role: "Pull the monthly conversion counts per campaign",
            why: "Free to view for any account owner or manager",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-campaign eligibility table with each campaign assigned to Manual CPC, Maximize Conversions, or Target CPA, plus a pooling recommendation for the two lowest-volume campaigns.",
      sampleOutput:
        "Klaviyo, campaign eligibility audit (excerpt)\n\nCampaign               Monthly Conversions   Eligibility\nKlaviyo - Ecommerce     58                    Target CPA ready\nKlaviyo - B2B            19                    Manual CPC\n\nPooling check: no second low-volume campaign to combine with B2B this quarter; keep on Manual CPC.",
      successCriteria: [
        "Correctly sorts all 5 campaigns using the 25/50 thresholds",
        "Correctly computes the combined conversion total for the pooling check and compares it to the floor",
      ],
      portfolioReady: true,
    },
    {
      id: "bidding-strategy-learning-period-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The Learning Period Gauntlet: Surviving the First 4 Weeks of Smart Bidding",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Navigate a simulated 4-week Target CPA rollout for an Instacart-style grocery-delivery Search campaign, deciding at each checkpoint whether to hold, panic-switch, or tighten the target, with consequences that mirror the lesson's real thresholds.",
      companyId: "instacart",
      scenario:
        "You just switched Instacart's 'Same-Day Grocery Delivery' Search campaign from Manual CPC to Target CPA, target set at your $18 historical average CPA. The campaign now enters its learning period.",
      brief:
        "At each checkpoint, decide whether the data is enough to act on yet, and whether any action is even needed.",
      mode: "simulation",
      conceptsCovered: [
        "The 2-4 week learning period after switching to smart bidding",
        "Setting the initial target near the historical average, not the goal",
        "Tightening the target 10-15% every 2 weeks after stabilizing",
      ],
      stages: [
        {
          stageId: "day5-first-look",
          label: "Day 5, first look",
          elapsed: "Day 5 of an expected 28",
          concept: "The 2-4 week learning period after switching to smart bidding",
          lessonAnchor: "the-learning-period-the-concept-most-advertisers-ignore",
          situation:
            "You switched the campaign to Target CPA five days ago, target set at your $18 historical average. You open the dashboard for the first time since the switch.",
          dashboard:
            "Same-Day Grocery Delivery, Search · Target CPA $18 · Day 5 of 28\n\n  Conversions        9\n  Cost per conv      $31.00\n  Impressions         14,200\n  CTR                 4.1%",
          spendToDate: "$1,240 of $6,000 monthly budget",
          budgetRemaining: "$4,760",
          decision: {
            prompt: "CPA is running 72% over target after just 5 days. What do you do?",
            options: [
              {
                id: "hold",
                label: "Log the numbers and check back at day 12",
                verdict: "optimal",
                outcome: "The algorithm keeps testing bids across the auction range undisturbed.",
                why: "5 days is far short of the 2-4 week learning period; judging performance now discards the exact signal the algorithm needs to converge.",
                lessonRef:
                  "The Learning Period: give any smart bidding strategy a minimum of 4 weeks and 50 conversions before judging its performance.",
                nextStageId: "day12-mid-learning",
              },
              {
                id: "revert",
                label: "Switch back to Manual CPC immediately",
                verdict: "costly",
                outcome:
                  "The campaign loses all 5 days of learning data. The next Target CPA attempt starts the clock over from zero.",
                why: "Reverting mid-learning-period restarts the algorithm's calibration entirely; the wasted spend and time compound.",
                lessonRef:
                  "Advertisers who panic and switch strategies after one week never allow the system to learn, and they restart the learning period every time they switch.",
                nextStageId: "day5-restart-penalty",
              },
              {
                id: "tighten-early",
                label: "Lower the tCPA target to $15 right now to force compliance",
                verdict: "costly",
                outcome: "Bids constrict hard; impressions and conversions both drop sharply the next day.",
                why: "Tightening before the algorithm has stabilized starves it of the exploration budget it needs, worsening both volume and CPA at once.",
                lessonRef:
                  "Always start your target at or near your historical average and tighten it by 10-15% every two weeks, after the learning period, not during it.",
                nextStageId: "day5-restart-penalty",
              },
            ],
          },
        },
        {
          stageId: "day5-restart-penalty",
          label: "Restart penalty",
          elapsed: "Day 5, learning period restarted",
          concept: "Restarting the learning period by reacting too early",
          lessonAnchor: "the-learning-period-the-concept-most-advertisers-ignore",
          situation:
            "Your early change reset the algorithm's calibration. The campaign is effectively back to day 0, but you've already spent $1,240 gathering data that the algorithm can no longer use.",
          dashboard:
            "Same-Day Grocery Delivery, Search · Target CPA $18 · Learning period restarted\n\n  Conversions (post-restart)   0\n  Cost per conv                 n/a\n  Wasted pre-restart spend      $1,240",
          spendToDate: "$1,240 wasted + new learning period beginning",
          budgetRemaining: "$4,760",
          decision: {
            prompt: "The clock is back to zero. What now?",
            options: [
              {
                id: "hold-this-time",
                label: "Leave the target at $18 and don't touch anything for the full 4 weeks",
                verdict: "acceptable",
                outcome:
                  "The campaign eventually stabilizes, but a full extra learning cycle (and the earlier wasted spend) has been lost that a first-time hold would have avoided.",
                why: "This is the correct behavior now, but it's recovering from an avoidable mistake rather than following the plan cleanly.",
                lessonRef:
                  "Give any smart bidding strategy a minimum of 4 weeks and 50 conversions before judging its performance.",
                nextStageId: "day12-mid-learning",
              },
              {
                id: "revert-again",
                label: "Switch back to Manual CPC a second time",
                verdict: "costly",
                outcome: "A second restart in one month burns the remaining budget window with no usable data at all.",
                why: "Repeated switching compounds the same mistake; each switch is a fresh zero.",
                lessonRef:
                  "They restart the learning period every time they switch.",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day12-mid-learning",
          label: "Day 12, mid-learning check",
          elapsed: "Day 12 of 28",
          concept: "Recognizing when a sample is still too small to act on",
          lessonAnchor: "the-learning-period-the-concept-most-advertisers-ignore",
          situation:
            "CPA has improved but is still above target. You open the dashboard again at the halfway point of the learning period.",
          dashboard:
            "Same-Day Grocery Delivery, Search · Target CPA $18 · Day 12 of 28\n\n  Conversions        28\n  Cost per conv      $24.10\n  Impressions         31,600\n  CTR                 4.6%",
          spendToDate: "$3,180 of $6,000 monthly budget",
          budgetRemaining: "$2,820",
          decision: {
            prompt: "CPA has dropped from $31 to $24.10, still above the $18 target, with 28 conversions logged. What do you do?",
            options: [
              {
                id: "keep-waiting",
                label: "Continue holding until the full 4-week mark",
                verdict: "optimal",
                outcome: "The trend keeps improving as the algorithm accumulates more auction data.",
                why: "28 conversions is progress but still under the 50-conversion bar the lesson sets for a reliable read.",
                lessonRef:
                  "Give any smart bidding strategy a minimum of 4 weeks and 50 conversions before judging its performance.",
                nextStageId: "week4-evaluate",
              },
              {
                id: "tighten-mid",
                label: "Tighten the target to $16 now since the trend looks good",
                verdict: "costly",
                outcome: "The algorithm hasn't finished stabilizing; tightening now flattens conversion volume for the remaining 2 weeks.",
                why: "Tightening is reserved for after the learning period completes and performance is stable, not mid-trend.",
                lessonRef: "Tighten it by 10-15% every two weeks, after stabilizing, not while the trend is still moving.",
                nextStageId: "week4-evaluate",
              },
              {
                id: "pause-worst-keywords",
                label: "Manually pause the 3 worst-performing keywords inside the ad group",
                verdict: "acceptable",
                outcome: "Removes some noisy signal but also removes data the algorithm was still using to learn.",
                why: "Not as damaging as reverting or tightening the target, but still interferes with the exploration the algorithm needs mid-learning-period.",
                lessonRef: "Do not touch anything for 4 weeks; let the algorithm complete its learning period.",
                nextStageId: "week4-evaluate",
              },
            ],
          },
        },
        {
          stageId: "week4-evaluate",
          label: "Week 4, evaluate",
          elapsed: "Day 28 of 28",
          concept: "Tightening the target 10-15% every 2 weeks after stabilizing",
          lessonAnchor: "a-step-by-step-switching-framework",
          situation:
            "The learning period is complete. Performance has stabilized close to target.",
          dashboard:
            "Same-Day Grocery Delivery, Search · Target CPA $18 · Day 28 of 28\n\n  Conversions        64\n  Cost per conv      $18.90\n  Impressions         52,300\n  CTR                 4.9%",
          spendToDate: "$5,720 of $6,000 monthly budget",
          budgetRemaining: "$280",
          decision: {
            prompt: "CPA has stabilized at $18.90, close to the $18 target, with 64 conversions logged. What now?",
            options: [
              {
                id: "tighten-10-15",
                label: "Tighten the target by 10-15%, to roughly $15.50-$16.20",
                verdict: "optimal",
                outcome: "The algorithm gradually pulls CPA down over the next cycle without a volume collapse.",
                why: "This is exactly the lesson's step-by-step framework: evaluate at 4 weeks, then tighten by 10-15%, repeating every 2 weeks toward the goal.",
                lessonRef:
                  "After 4 weeks, evaluate. If performance is stable, tighten your target by 10-15%. Repeat every 2 weeks until you reach your goal CPA.",
                nextStageId: "end",
              },
              {
                id: "tighten-aggressive",
                label: "Jump the target straight to $10 to hit the long-term goal faster",
                verdict: "costly",
                outcome: "Conversion volume collapses the following week as the algorithm can no longer find enough qualifying auctions.",
                why: "A 45% cut far exceeds the lesson's 10-15% tightening pace and re-triggers instability, not progress.",
                lessonRef:
                  "If your historical CPA is $80 and you set a tCPA of $20, the algorithm will constrain bids so tightly that your ads barely show.",
                nextStageId: "end",
              },
              {
                id: "leave-unchanged",
                label: "Leave the target at $18 indefinitely since it's already close",
                verdict: "acceptable",
                outcome: "Performance stays stable but efficiency gains that were available get left on the table.",
                why: "Not harmful, but the lesson's framework expects a deliberate tightening step now that performance has stabilized.",
                lessonRef: "Repeat step 6 every 2 weeks until you reach your goal CPA or ROAS.",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "The dashboard this simulation mirrors; practice reading real learning-period data here after the simulation",
            why: "Free to view for any account owner or manager",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each checkpoint's CPA and conversion count to track the trend across the 4 weeks",
            why: "Free, no account required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed decision log across all 4 checkpoints (day 5, day 12, week 4, plus any restart) with the verdict and lesson reference for each choice made.",
      sampleOutput:
        "PolicyBazaar, Target CPA learning-period log (excerpt)\n\nDay 5:   Held. CPA $34 vs $20 target. Verdict: optimal.\nDay 12:  Held. CPA $23.80. Verdict: optimal.\nWeek 4:  Tightened target 12%, to $17.60. Verdict: optimal.\nOutcome: stable CPA reduction with no volume collapse.",
      successCriteria: [
        "Holds through both early checkpoints without reverting or tightening prematurely",
        "Applies a 10-15% tightening step, not a large jump, once the learning period completes at week 4",
      ],
      portfolioReady: true,
      liveTrack: {
        minSpend: "$3,000/month",
        minDurationDays: 28,
        setupSteps: [
          "Confirm conversion tracking fires only on high-value actions before switching from Manual CPC",
          "Set the initial Target CPA at or near your trailing 30-day average CPA, not your goal",
          "Calendar a check-in for day 12 and day 28, not sooner",
        ],
        checkInSchedule: "Log CPA and conversion volume at day 5, day 12, and day 28; only act on the day-28 read",
      },
    },
  ],

  "ad-copy-frameworks": [
    {
      id: "ad-copy-frameworks-headline-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Framework Teardown: Three Broken Ad Sets",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three synthetic YETI-style ad specimens, identify which framework step each one skips (PAS, AIDA, or the 4 Us) and rank the defects by severity.",
      companyId: "yeti",
      scenario:
        "You're a freelance copy reviewer YETI's agency hired for a one-day audit before a paid social push. Three ad sets are ready to launch and someone asked you to sign off first.",
      brief:
        "Read each specimen cold, run it against the framework it's supposed to follow, and flag every defect before it spends a single dollar.",
      mode: "teardown",
      conceptsCovered: [
        "PAS, Problem, Agitate, Solution",
        "AIDA, Attention, Interest, Desire, Action",
        "The 4 Us, Urgent, Unique, Useful, Ultra-specific",
      ],
      teardownItems: [
        {
          itemId: "item-1-search-ad",
          specimen:
            "GOOGLE SEARCH AD\nHeadline 1: Buy Tumblers Online\nHeadline 2: Free Shipping Available\nDescription: We sell insulated tumblers in many colors. Check out our website today.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is meant to follow PAS. Find every place it breaks the framework, and note anything that's fine as-is.",
          answerKey: [
            {
              defect:
                "Headline 1 states the product category ('Buy Tumblers Online') instead of naming a problem — skips PAS's Problem step entirely.",
              severity: "critical",
              whyItMatters:
                "PAS only works if the reader recognizes their own pain in line one; a category label gives them nothing to react to.",
              lessonRef: "1-pas-problem-agitate-solution",
              owner: "you",
            },
            {
              defect:
                "Description lists features ('insulated tumblers in many colors') instead of a benefit or outcome.",
              severity: "moderate",
              whyItMatters:
                "Benefit-focused copy converts 20-40% better than feature-focused copy; this ad never states what the reader gets.",
              lessonRef: "real-company-examples",
              owner: "you",
            },
            {
              defect:
                "No number, name, or concrete detail anywhere in the ad — fails Ultra-specific.",
              severity: "moderate",
              whyItMatters:
                "Vague copy is invisible in a results page full of near-identical listings; specificity is what earns the click.",
              lessonRef: "3-the-4-us-urgent-unique-useful-ultra-specific",
              owner: "you",
            },
          ],
          distractors: [
            "Headline 2 mentions free shipping",
            "The description is grammatically correct",
            "There are two headlines instead of one",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-meta-primary-text",
          specimen:
            "META PRIMARY TEXT\nIntroducing the YETI Trailhead Chair. It has a durable frame and weather-resistant fabric. Buy now.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is meant to follow AIDA. Find every place it breaks the framework, and note anything that's fine as-is.",
          answerKey: [
            {
              defect:
                "Skips Interest and Desire entirely — jumps from a flat product announcement straight to 'Buy now' with no emotional arc.",
              severity: "critical",
              whyItMatters:
                "AIDA needs all four stages in a longer format like Meta primary text; skipping two of them collapses the funnel the reader needed to move through.",
              lessonRef: "2-aida-attention-interest-desire-action",
              owner: "you",
            },
            {
              defect:
                "Opening line is a flat announcement, not a scroll-stopping Attention hook (no bold claim, stat, or question).",
              severity: "moderate",
              whyItMatters:
                "8 out of 10 people only read the headline/opening line; a weak opener means the rest of the copy never gets read.",
              lessonRef: "2-aida-attention-interest-desire-action",
              owner: "you",
            },
            {
              defect:
                "CTA 'Buy now' gives zero specific reason to act immediately — not Urgent per the 4 Us filter.",
              severity: "cosmetic",
              whyItMatters:
                "A generic CTA is easy to scroll past; a deadline or scarcity detail gives the reader a reason to act today instead of later.",
              lessonRef: "3-the-4-us-urgent-unique-useful-ultra-specific",
              owner: "you",
            },
          ],
          distractors: [
            "Mentions a specific product name (Trailhead Chair)",
            "Uses short sentences",
            "Ends with a call to action",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-display-headline",
          specimen: "DISPLAY AD HEADLINE\nGreat gear for your next adventure",
          specimenSource: "synthetic-realistic",
          prompt:
            "Run this headline through the 4 Us filter. Score it and list what's missing.",
          answerKey: [
            {
              defect:
                "No number, name, or concrete detail anywhere — fails Ultra-specific.",
              severity: "moderate",
              whyItMatters:
                "Specificity is what makes a claim believable; 'great gear' is a claim anyone could make about anything.",
              lessonRef: "3-the-4-us-urgent-unique-useful-ultra-specific",
              owner: "you",
            },
            {
              defect:
                "Could be said by literally any outdoor brand — fails Unique, says nothing YETI-specific.",
              severity: "critical",
              whyItMatters:
                "A headline that doesn't differentiate wastes the impression; the reader has no reason to remember which brand said it.",
              lessonRef: "3-the-4-us-urgent-unique-useful-ultra-specific",
              owner: "you",
            },
            {
              defect: "No urgency — nothing prompts acting now versus later.",
              severity: "cosmetic",
              whyItMatters:
                "Without urgency, the ad is easy to defer indefinitely, which quietly kills click-through rate.",
              lessonRef: "3-the-4-us-urgent-unique-useful-ultra-specific",
              owner: "you",
            },
          ],
          distractors: [
            "The headline is under 30 characters",
            "It uses the word 'adventure'",
            "It doesn't mention price",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect found, with severity, against the three specimens",
            why: "Free, no account friction, and easy to sort by severity when you're ready to prioritize the rewrite",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across all 3 specimens ranked by severity, with a full rewrite drafted for the single worst-offending ad.",
      sampleOutput:
        "Warby Parker defect log (excerpt)\n\nSPECIMEN: Search ad, frame try-on kit\nSeverity: critical — Headline names the product category ('Try Frames Free') not a problem; PAS Problem step is missing\nSeverity: moderate — Description is feature-focused ('5 frames, home try-on') with no stated benefit\n\nREWRITE\nHeadline 1: Bad glasses selfies? Not anymore.\nHeadline 2: Try 5 frames at home, free, before you buy.\nDescription: Order your free home try-on kit. Ships in 2 days, return anytime.",
      successCriteria: [
        "Correctly identifies the missing PAS/AIDA stage in specimens 1 and 2",
        "Correctly scores specimen 3 against all 4 Us and explains each miss",
        "Does not flag any of the distractors as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "ad-copy-frameworks-casper-launch-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Launch Copy: Casper's Lightweight Topper",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Write a complete PAS Google Search ad and a complete AIDA Meta primary text for a new Casper product launch, then run both headlines through the 4 Us filter.",
      companyId: "casper-sleep",
      scenario:
        "You're the junior copywriter on Casper's launch team for a new lightweight mattress topper built for hot sleepers. Search and Meta both need finished, ready-to-run copy by end of day.",
      brief:
        "Draft PAS for Search, AIDA for Meta, then quality-check both headlines with the 4 Us filter before handing off.",
      mode: "build",
      conceptsCovered: [
        "PAS, Problem, Agitate, Solution",
        "AIDA, Attention, Interest, Desire, Action",
        "The 4 Us, Urgent, Unique, Useful, Ultra-specific",
      ],
      steps: [
        {
          stepId: "step-1-pas-search-ad",
          concept: "PAS, Problem, Agitate, Solution",
          lessonAnchor: "1-pas-problem-agitate-solution",
          theoryRecap:
            "PAS names the exact pain (Problem), makes it feel bigger (Agitate), then presents the product as the obvious fix (Solution). It's the strongest framework for Search, where the person already named their problem in the query.",
          question:
            "The target searcher is typing queries like 'mattress topper for hot sleepers.' Write a Google Search ad (2 headlines + 1 description) in PAS for the new Casper lightweight topper.",
          toolName: "Google Sheets",
          where:
            "A shared drafting sheet with columns for Problem / Agitate / Solution, one row per ad variant.",
          procedure: [
            "In the Problem column, write the exact discomfort ('waking up sweaty and flipping your pillow at 2am')",
            "In the Agitate column, make the cost of inaction concrete (bad sleep, groggy mornings, buying yet another cooling pillow that doesn't work)",
            "In the Solution column, present the topper as the direct fix, keeping Headline 1 under 30 characters",
          ],
          outputSample:
            "Headline 1 (Problem): Waking Up Sweaty Again?\nHeadline 2 (Agitate): Every Hot Night Wrecks Tomorrow\nDescription (Solution): Casper's cooling topper pulls heat away all night. 100-night trial, free shipping.",
          healthy:
            "Headline 1 names the specific discomfort; the description states the fix without listing materials or specs.",
          unhealthy:
            "Headline 1 reads 'Shop Mattress Toppers' — a category label, not a problem, so PAS never actually starts.",
          interpret:
            "If a reader can't tell what pain the ad is speaking to within the first 5 words, PAS has collapsed into a plain product ad.",
          soWhat: [
            {
              symptom: "Headline states the product category instead of a problem",
              action: "Rewrite Headline 1 to name the exact discomfort the searcher already feels",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-aida-meta-primary-text",
          concept: "AIDA, Attention, Interest, Desire, Action",
          lessonAnchor: "2-aida-attention-interest-desire-action",
          theoryRecap:
            "AIDA moves a reader through four states in one longer-format ad: Attention (interrupt the scroll), Interest (give them a reason to keep reading), Desire (make the outcome feel personal), Action (one clear CTA).",
          question:
            "Write a full Meta primary text (3-5 sentences) for the same topper launch, using all four AIDA stages in order.",
          toolName: "Google Sheets",
          where: "Same drafting sheet, a new tab labeled AIDA with one row per stage.",
          procedure: [
            "Attention: open with a surprising stat or direct question about hot sleeping",
            "Interest: add one sentence of context on why normal toppers fail to fix it",
            "Desire: describe the specific outcome, waking up rested instead of drenched",
            "Action: end with a single CTA and remove any competing links or asks",
          ],
          outputSample:
            "Attention: 67% of hot sleepers say they wake up at least once a night to flip their pillow.\nInterest: Most 'cooling' toppers trap heat within a week.\nDesire: Casper's topper actively pulls heat away, so you fall back asleep in minutes, not hours.\nAction: Try it for 100 nights, free returns. Shop now.",
          healthy:
            "Each sentence maps cleanly to one AIDA stage in order, and there's exactly one CTA at the end.",
          unhealthy:
            "The copy opens with 'Introducing the new Casper Topper' (a flat announcement) and ends with two competing CTAs ('Shop now' and 'Learn more').",
          interpret:
            "A flat product announcement skips Attention; multiple CTAs dilute Action and cost clicks.",
          soWhat: [
            {
              symptom: "Copy has more than one CTA",
              action: "Cut to a single CTA and delete the second link entirely",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-4us-quality-check",
          concept: "The 4 Us, Urgent, Unique, Useful, Ultra-specific",
          lessonAnchor: "3-the-4-us-urgent-unique-useful-ultra-specific",
          theoryRecap:
            "The 4 Us is a quality filter, not a writing formula: score any headline on Urgent, Unique, Useful, Ultra-specific. A headline hitting 3-4 is worth testing; 1-2 needs a rewrite.",
          question:
            "Score both headlines from Steps 1 and 2 against the 4 Us. Any headline scoring below 3/4 gets one rewrite pass.",
          toolName: "Google Sheets",
          where: "Same sheet, a scoring table with one row per headline and a column per U.",
          procedure: [
            "Score each headline Yes/No on Urgent, Unique, Useful, Ultra-specific",
            "Total the score out of 4 for each headline",
            "Rewrite any headline scoring below 3, then re-score the rewrite",
          ],
          outputSample:
            "Headline 1 'Waking Up Sweaty Again?': Urgent-No, Unique-Yes, Useful-Yes, Ultra-specific-No. Score 2/4.\nRewrite: 'Stop Waking Up Sweaty By Tonight': Urgent-Yes, Unique-Yes, Useful-Yes, Ultra-specific-Yes. Score 4/4.",
          healthy: "The rewrite adds a concrete timeframe ('by tonight') and now scores 4/4.",
          unhealthy:
            "A headline stays at 2/4 after 'rewriting' because only word order changed, not the missing Us.",
          interpret:
            "A rewrite that doesn't add a number, name, deadline, or specific detail hasn't actually fixed an Ultra-specific or Urgent gap.",
          soWhat: [
            {
              symptom: "Rewrite still scores below 3/4",
              action: "Add one concrete detail (a number, deadline, or named outcome) rather than rephrasing",
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
            role: "Draft PAS and AIDA copy, then score headlines against the 4 Us",
            why: "Free, no account friction, easy to share with a reviewer",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "One finished PAS Google Search ad, one finished AIDA Meta primary text, and a 4 Us score (with rewrite if below 3/4) for both headlines — ready to hand to media buying for the Casper topper launch.",
      sampleOutput:
        "Allbirds launch copy (excerpt)\n\nSEARCH AD (PAS)\nHeadline 1: Sneakers That Smell By Noon?\nHeadline 2: Every Sweaty Commute Adds Up\nDescription: Allbirds' new merino blend stays fresh all day. Free shipping, 30-day trial.\n\n4 Us SCORE\nHeadline 1: Urgent-No, Unique-Yes, Useful-Yes, Ultra-specific-Yes. Score 3/4.",
      successCriteria: [
        "PAS ad names a specific problem in Headline 1, not a product category",
        "AIDA copy moves through all four stages in order with exactly one CTA",
        "Both headlines are scored against all 4 Us with any sub-3 headline rewritten and re-scored",
      ],
      portfolioReady: true,
    },
  ],
  "creative-testing": [
    {
      id: "creative-testing-flawed-plans-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Broken Test: Three MVMT Test Plans",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three synthetic MVMT-style creative test plans, identify which testing discipline each one violates and why the result can't be trusted.",
      companyId: "mvmt-watches",
      scenario:
        "You've joined MVMT's growth team as a contractor for one week to review the last quarter's creative test plans before the next round launches. Three plans are queued for a repeat.",
      brief:
        "Read each test plan as written, decide whether its result is trustworthy, and flag exactly what broke it.",
      mode: "teardown",
      conceptsCovered: [
        "One variable per test",
        "Statistical significance and test duration",
        "Testing new creative against an established winner",
      ],
      teardownItems: [
        {
          itemId: "item-1-multi-variable",
          specimen:
            "TEST PLAN: New Watch Face Ad\nWe changed the hero image, the headline, and the CTA button color all at once. Ran both ads in the same ad set for 2 days. Version B has slightly more clicks so we're pausing A and scaling B tomorrow.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Decide whether this test's conclusion ('scale Version B') is trustworthy. List every reason it isn't.",
          answerKey: [
            {
              defect:
                "Three variables changed at once (image, headline, CTA color) — impossible to know which change actually caused the result.",
              severity: "critical",
              whyItMatters:
                "Changing more than one element per test means a winning result can't be repeated deliberately on the next brief.",
              lessonRef: "step-2-build-your-variants-one-variable-only",
              owner: "you",
            },
            {
              defect:
                "Both ads ran in the same ad set, so the algorithm skewed delivery toward its predicted winner instead of a fair random split.",
              severity: "critical",
              whyItMatters:
                "Without a platform A/B test tool doing a true random split, the 'slightly more clicks' result reflects the algorithm's bias, not audience preference.",
              lessonRef: "step-3-run-the-test",
              owner: "you",
            },
            {
              defect:
                "Decision made after only 2 days — platforms are still in a learning phase and daily results fluctuate by day of week.",
              severity: "moderate",
              whyItMatters:
                "Stopping early on 'slightly more clicks' is one of the most expensive errors in paid advertising; a real read needs 7-14 days.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The test used a watch product",
            "The CTA button has a color",
            "The test ran on Facebook",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-no-hypothesis-old-winner",
          specimen:
            "TEST PLAN: Hook Test\nNo written hypothesis, we just tried a new intro line to see what sticks. New creative is being tested directly against our 8-month-old top-performing evergreen ad. Budget and conversion target were not set before launch.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Decide whether this test is set up to produce a learnable result. List every reason it isn't.",
          answerKey: [
            {
              defect:
                "No written hypothesis — the team can't say beforehand why one version might win, so the result teaches nothing repeatable.",
              severity: "moderate",
              whyItMatters:
                "A hypothesis forces you to think about why a version might win, which is what makes a losing test still useful.",
              lessonRef: "step-1-form-a-hypothesis",
              owner: "you",
            },
            {
              defect:
                "New creative tested directly against an 8-month-old winner with months of engagement signals and pixel data baked in — an unfair fight from day one.",
              severity: "critical",
              whyItMatters:
                "New creatives should be tested against each other first, then the winner validated against the established control, not thrown straight at it.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "No sample size or conversion target set before launch.",
              severity: "cosmetic",
              whyItMatters:
                "Without a target, there's no way to know in advance whether the test window will reach the 50-100 conversions per variant needed for a reliable read.",
              lessonRef: "step-3-run-the-test",
              owner: "you",
            },
          ],
          distractors: [
            "The test involves a hook",
            "The new ad is a video",
            "The old ad performed well",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-underpowered-multivariable",
          specimen:
            "TEST PLAN: Format Test, 'Q3 Creative Refresh'\nComparing a UGC video vs. a polished studio video vs. a new CTA button text vs. a new background color, all in one experiment. Budget: $50 total, ran for 3 days, 12 conversions across all variants combined.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Decide whether this test could possibly produce a trustworthy winner. List every reason it can't.",
          answerKey: [
            {
              defect:
                "Four unrelated variables (video format, video format, CTA text, background color) bundled into one experiment.",
              severity: "critical",
              whyItMatters:
                "This is the one-variable-per-test rule broken twice over, compounding the same problem seen in item 1.",
              lessonRef: "step-2-build-your-variants-one-variable-only",
              owner: "you",
            },
            {
              defect:
                "$50 total budget and 12 conversions across all variants combined is far short of the 50-100 conversions per variant needed for a reliable read.",
              severity: "critical",
              whyItMatters:
                "Underpowered tests produce noise that looks like a signal; no conclusion from this data is trustworthy.",
              lessonRef: "step-3-run-the-test",
              owner: "you",
            },
            {
              defect: "3-day runtime is well under the 7-14 day minimum window.",
              severity: "moderate",
              whyItMatters:
                "Short windows catch day-of-week noise, not real audience preference.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The experiment has a name",
            "It includes a UGC video",
            "It tests a background color",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect found, with severity, against the three test plans",
            why: "Free, no account friction, easy to sort by severity",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across all 3 test plans, plus a rewritten one-variable, correctly-budgeted, correctly-timed test plan for the worst offender.",
      sampleOutput:
        "Nykaa defect log (excerpt)\n\nPLAN: Lipstick launch hook test\nSeverity: critical — Hook, thumbnail, and price badge all changed in the same test\nSeverity: moderate — Ran 4 days, under the 7-14 day minimum\n\nREWRITE\nVariable changed: hook only (first 3 seconds of a 15-second video)\nBudget: ₹85,000 for 2 variants, targeting 75 conversions each\nDuration: 10 days",
      successCriteria: [
        "Correctly identifies the multi-variable violation in items 1 and 3",
        "Correctly identifies the missing hypothesis and unfair-comparison violations in item 2",
        "Does not flag any of the distractors as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "creative-testing-glossybox-results-audit",
      tier: "core",
      archetype: "audit",
      title: "The Calibration Call: Reading Glossybox's Test Results",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given real-shaped result data from a Glossybox creative test, correctly read statistical significance, calculate the budget needed for the next test, and pick the next highest-priority variable to test.",
      companyId: "glossybox",
      scenario:
        "You're the paid social analyst on Glossybox's growth team. This month's creative test just wrapped and the team is deciding what to do next based on the numbers, not gut feel.",
      brief:
        "Work through the actual result numbers, calculate what the next test needs, and rank what to test next using the lesson's priority list.",
      mode: "calibration",
      conceptsCovered: [
        "Statistical significance and test duration",
        "Budget required to reach 50-100 conversions per variant",
        "Testing priority order",
        "One variable per test",
      ],
      steps: [
        {
          stepId: "step-1-read-significance",
          concept: "Statistical significance and test duration",
          lessonAnchor: "step-4-read-results-and-act",
          theoryRecap:
            "After 7-14 days with enough conversions, check for statistical significance. Below 95%, the difference could be random noise, extend the test or accept neither variant is clearly better.",
          question:
            "After 9 days, Variant A (problem-first hook) has 68 conversions at $19.40 CPA; Variant B (product-first hook) has 71 conversions at $19.90 CPA. Platform-reported significance is 88%. What's the correct action?",
          toolName: "Google Sheets",
          where: "A results tracking sheet with one row per variant per day.",
          procedure: [
            "Log daily conversions and CPA for both variants into the sheet",
            "Check the platform's reported significance against the 95% threshold",
            "If below 95%, calculate how many more days at the current daily conversion rate are needed to reach the 50-100 conversions per variant range with more confidence",
          ],
          outputSample:
            "Day 9 results:\nVariant A: 68 conversions, $19.40 CPA\nVariant B: 71 conversions, $19.90 CPA\nSignificance: 88%\nDecision: Extend test 4-5 more days; 88% is below the 95% threshold and both variants are still short of a clearly separated result.",
          healthy:
            "The team extends the test because 88% is below 95%, even though B looks slightly ahead on raw conversions.",
          unhealthy:
            "The team declares B the winner on day 9 because it has more raw conversions, ignoring that significance is only 88%.",
          interpret:
            "A variant with more conversions isn't automatically the real winner; below 95% significance, the gap could still be noise.",
          soWhat: [
            {
              symptom: "Team wants to call a winner below 95% significance",
              action: "Extend the test window rather than declaring a winner on raw conversion count alone",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-calculate-budget",
          concept: "Budget required to reach 50-100 conversions per variant",
          lessonAnchor: "step-3-run-the-test",
          theoryRecap:
            "Aim for 50-100 conversions per variant within your test window. Rough formula: divide the target conversion count by your target cost per purchase to get budget per variant.",
          question:
            "Glossybox's target CPA is $20. Next month's test has 3 variants. What total budget is needed to reach at least 50 conversions per variant?",
          toolName: "Google Sheets",
          where: "Same sheet, a budget calculator tab.",
          procedure: [
            "Multiply target CPA ($20) by minimum conversions per variant (50) to get the minimum per-variant budget",
            "Multiply that per-variant budget by the number of variants (3)",
            "Add a buffer for the top end of the range (100 conversions) to see the full budget window",
          ],
          outputSample:
            "Minimum per variant: $20 x 50 = $1,000\nMinimum total (3 variants): $1,000 x 3 = $3,000\nUpper end per variant: $20 x 100 = $2,000\nBudget window: $3,000-$6,000 total for the 3-variant test",
          healthy:
            "The team allocates at least $3,000 across the 3 variants before launching.",
          unhealthy:
            "The team launches a 3-variant test with a $900 total budget, which can't reach 50 conversions per variant at a $20 target CPA.",
          interpret:
            "An underfunded test window guarantees an underpowered read, no matter how clean the variable isolation is.",
          soWhat: [
            {
              symptom: "Test budget is below the calculated minimum",
              action: "Either raise the budget to the minimum or cut the variant count to fit the available budget",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-priority-order",
          concept: "Testing priority order",
          lessonAnchor: "what-to-test-a-priority-list",
          theoryRecap:
            "Not all creative elements move the needle equally. Test in priority order: format, then hook, then core message angle, then visual style, then CTA text, then headline copy.",
          question:
            "Glossybox's last 6 tests were all headline copy variations (priority 6). Video format has never been tested against static images. What should next month's test target instead?",
          toolName: "Google Sheets",
          where: "Same sheet, a priority-tracking tab logging what's been tested so far.",
          procedure: [
            "List every test run in the last quarter and the priority tier each one belongs to",
            "Identify the highest-priority element (lowest number) that has never been tested",
            "Recommend that element for the next test instead of another headline variant",
          ],
          outputSample:
            "Tests run this quarter: 6 headline copy tests (priority 6), 0 format tests, 0 hook tests.\nRecommendation: Test video vs. static image (priority 1) next month — it has the biggest potential variance and has never been tested.",
          healthy:
            "The team pivots to a format test even though headline testing feels 'safer' and more familiar.",
          unhealthy:
            "The team runs a 7th headline test because the team already has a workflow for it.",
          interpret:
            "Testing what's easy instead of what's highest-priority wastes months chasing small gains while a bigger lever goes untested.",
          soWhat: [
            {
              symptom: "Recent tests cluster at the bottom of the priority list",
              action: "Schedule the next test against the highest untested priority tier, not the most familiar one",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-verify-one-variable",
          concept: "One variable per test",
          lessonAnchor: "step-2-build-your-variants-one-variable-only",
          theoryRecap:
            "Change exactly one element between control and challenger. Common elements: hook, visual format, problem vs. product framing, social proof, CTA.",
          question:
            "The proposed format test brief says: 'Test UGC video with a customer testimonial vs. static image without a testimonial.' Is this a clean one-variable test?",
          toolName: "Google Sheets",
          where: "Same sheet, a brief-review tab.",
          procedure: [
            "Compare the two proposed variants line by line",
            "Identify every element that differs between them, not just the one the brief names",
            "Flag any additional variable and rewrite the brief to isolate the intended one",
          ],
          outputSample:
            "Brief as written changes 2 variables: video format AND presence of testimonial.\nFix: Test UGC video with testimonial vs. UGC video without testimonial (holds format constant, isolates testimonial); run format vs. static as a separate test.",
          healthy:
            "The reviewer catches the hidden second variable before launch and splits it into two clean tests.",
          unhealthy:
            "The test launches as written, and a win can't be attributed to format or to the testimonial.",
          interpret:
            "A brief can look like a one-variable test on the surface while quietly bundling two changes into 'format.'",
          soWhat: [
            {
              symptom: "A test brief bundles two changes under one label",
              action: "Split into two sequential single-variable tests before launch",
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
            role: "Track daily results, calculate budget, and log test priority history",
            why: "Free, no account friction, handles all the calculations in this project",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Looker Studio",
            role: "Build a live dashboard of creative test results across campaigns",
            why: "Useful once you're running multiple simultaneous tests and need a shared view for the team",
            required: false,
            fallback: "Google Sheets with manual daily entry covers a single test cleanly",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed test-results memo: significance verdict for the current test, required budget for the next test, the top-priority variable to test next, and a corrected one-variable brief.",
      sampleOutput:
        "Allbirds test-results memo (excerpt)\n\nCURRENT TEST: Wool Runner hook test, day 8\nSignificance: 97% — Variant B (problem-first hook) is a confirmed winner\nAction: Pause Variant A, scale Variant B, document 'problem-first outperforms product-first for cold audiences'\n\nNEXT TEST BUDGET: $20 target CPA x 60 conversions x 2 variants = $2,400 minimum\nNEXT PRIORITY: Format (video vs. static) — never tested, highest potential variance",
      successCriteria: [
        "Correctly recommends extending the test at 88% significance rather than declaring a winner",
        "Budget calculation matches target CPA x minimum conversions x variant count",
        "Recommends the highest-priority untested element, not another headline test",
        "Catches the hidden second variable in the format test brief",
      ],
      portfolioReady: true,
    },
  ],

  "retargeting": [
    {
      id: "retargeting-account-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Segmentation Audit: Finding the Leaks in a Retargeting Account Export",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real retargeting ad-set export, apply the lesson's segmentation, exclusion, and frequency rules to find which mistakes are quietly burning budget.",
      companyId: "chewy",
      scenario:
        "You're auditing the retargeting account for Chewy's cart-abandonment campaign after cost-per-acquisition crept up 40% over the last quarter with no obvious cause.",
      brief:
        "Review the ad-set export against the lesson's Common Mistakes checklist: exclusions, segmentation depth, and frequency caps.",
      mode: "diagnostic",
      conceptsCovered: [
        "Excluding recent purchasers from retargeting audiences",
        "Segmenting audiences by intent instead of one generic audience",
        "Setting a frequency cap to prevent ad fatigue",
      ],
      steps: [
        {
          stepId: "step-1-exclusion-check",
          concept: "Excluding recent purchasers from retargeting audiences",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section flags showing a 'buy now' ad to someone who bought yesterday as the single biggest waste in retargeting, and requires a recent-purchasers exclusion on every campaign.",
          question:
            "Four ad sets are running. Which ones are missing a purchaser exclusion, and what is that costing?",
          toolName: "Google Sheets",
          where: "Import ad-set-export.csv, freeze the header row, scan the 'Exclusion audiences' column.",
          procedure: [
            "Import ad-set-export.csv and freeze row 1",
            "Filter the 'Exclusion audiences' column for blank cells",
            "Cross-reference blank rows against the 'Spend (7d)' and 'Purchases from ad (7d)' columns to estimate wasted spend",
          ],
          outputSample:
            "Ad Set              Audience              Exclusion Audience     Spend (7d)  Purchases from ad (7d)\nCart Abandoners     Cart 7-day             Purchasers 30d          $412        3\nAll Visitors         Site 30-day             (blank)                 $598        11\nProduct Viewers      Product 14-day          (blank)                 $301        6",
          healthy:
            "Every ad set targeting past visitors carries a 'Purchasers 30-90d' exclusion; purchases attributed to the ad after a same-user purchase are near zero.",
          unhealthy:
            "Two of three ad sets have a blank exclusion column, and 17 of the week's attributed 'purchases' are actually repeat buyers who already converted before the ad ran.",
          interpret:
            "A missing exclusion doesn't just waste impressions, it inflates the campaign's reported conversions with people who were going to buy anyway, making the whole campaign look more efficient than it is.",
          soWhat: [
            {
              symptom: "Ad set has no value in the Exclusion Audience column",
              action: "Build a 'Recent Purchasers (30-90 days)' audience and add it as an exclusion to every retargeting ad set",
              effort: "30 min",
            },
          ],
          owner: "you",
          },
        {
          stepId: "step-2-segmentation-depth",
          concept: "Segmenting audiences by intent instead of one generic audience",
          lessonAnchor: "the-three-core-audience-segments",
          theoryRecap:
            "The lesson's Three Core Audience Segments splits visitors into homepage/blog visitors (low intent), product viewers (medium intent), and cart abandoners (high intent) — each needs its own message.",
          question:
            "The export shows one ad set called 'All Visitors' running a single generic ad to everyone. What is that costing relative to segmented ad sets?",
          toolName: "Google Sheets",
          where: "Same export, compare the 'All Visitors' row against the segmented rows.",
          procedure: [
            "Sort the export by CTR and CPA",
            "Compare the single 'All Visitors' ad set's CTR/CPA against 'Cart Abandoners' and 'Product Viewers'",
            "Note the audience size and creative angle used for the merged ad set",
          ],
          outputSample:
            "Ad Set              CTR      CPA      Creative Angle\nAll Visitors        0.6%     $58      Generic 20%-off banner\nCart Abandoners     2.1%     $19      Urgency: 'Still in your cart'\nProduct Viewers     1.3%     $31      Social proof: star ratings",
          healthy:
            "Each segment's CTR and CPA reflect its intent level — cart abandoners convert cheapest, homepage visitors are the most expensive segment to convert and use a trust-building message, not a discount.",
          unhealthy:
            "One merged 'All Visitors' ad set shows a CPA 3x higher than the cart-abandoner segment because a low-intent browser and a near-buyer are seeing the identical discount ad.",
          interpret:
            "Blending intent levels into one audience forces one message to serve people in completely different mental states, which drags average performance toward the worst-performing segment.",
          soWhat: [
            {
              symptom: "One ad set covers 'All Visitors' with a single generic creative",
              action: "Split into at minimum 3 ad sets (browsers, product viewers, cart abandoners) with distinct creative angles",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-frequency-cap",
          concept: "Setting a frequency cap to prevent ad fatigue",
          lessonAnchor: "frequency-management-avoiding-ad-stalking",
          theoryRecap:
            "The lesson caps frequency at 5-10 impressions per person per week; beyond that, users stop noticing the ad and start resenting the brand ('ad stalking').",
          question:
            "The export includes a 'Frequency (7d)' column. Which ad set is at risk of ad fatigue, and what should change?",
          toolName: "Google Sheets",
          where: "Same export, 'Frequency (7d)' column.",
          procedure: [
            "Sort by the Frequency (7d) column descending",
            "Flag any ad set above 10 impressions per person for the week",
            "Check whether that ad set has a frequency cap set in its settings",
          ],
          outputSample:
            "Ad Set              Frequency (7d)   Frequency Cap Set?\nAll Visitors        18.4             No\nCart Abandoners     6.2              Yes (8/week)\nProduct Viewers     7.9              Yes (10/week)",
          healthy:
            "Every ad set has a frequency cap between 5-10 impressions/week, and actual delivered frequency stays inside that cap.",
          unhealthy:
            "The 'All Visitors' ad set shows 18.4 impressions per person in one week with no cap set, well past the point where the same message stops converting and starts annoying people.",
          interpret:
            "An uncapped ad set spends the most impressions on the people least likely to respond to another repeat, which is the fastest way to burn budget without moving CPA.",
          soWhat: [
            {
              symptom: "Frequency (7d) exceeds 10 and no cap is set",
              action: "Set a frequency cap of 5-10 impressions per week in the ad set's delivery settings",
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
            role: "Import and filter the ad-set export to find missing exclusions, weak segmentation, and uncapped frequency",
            why: "Free, no account access needed, works from a CSV export alone",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page account audit flagging every mistake found (missing exclusions, single generic audience, uncapped frequency) with a prioritized fix list ordered by estimated impact.",
      sampleOutput:
        "Rent the Runway, Retargeting Account Audit (excerpt)\n\nFIX NOW\n1. 'All Visitors' ad set has no purchaser exclusion — est. 22 wasted impressions/week on repeat buyers\n2. 'All Visitors' frequency at 21.0/week, no cap set — add 8/week cap\n\nFIX THIS SPRINT\n3. Split 'All Visitors' into browsers / product viewers / cart abandoners, each with its own creative angle",
      successCriteria: [
        "Correctly identifies every ad set missing a purchaser exclusion",
        "Correctly flags the merged 'All Visitors' audience as under-segmented",
        "Correctly flags any ad set exceeding a 10/week frequency with no cap",
        "Prioritizes fixes by estimated spend impact, not just by list order",
      ],
      portfolioReady: true,
    },
    {
      id: "retargeting-launch-week-sim",
      tier: "mini",
      archetype: "simulation",
      title: "Launch Week: Running a Retargeting Campaign's First 10 Days",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Practice the sequence of retargeting decisions a real launch requires — frequency cap, audience segmentation, and purchaser exclusion — in the order they actually come up, with no real ad account needed.",
      companyId: "firstcry-brainbees",
      scenario:
        "You're launching FirstCry's first retargeting campaign for its baby-gear category after a spike in cart abandonment from a new checkout flow.",
      brief:
        "Make the launch-week calls a retargeting manager makes for real: frequency settings at launch, when to split audiences, and when to add exclusions.",
      mode: "simulation",
      conceptsCovered: [
        "Setting a frequency cap before launch",
        "Segmenting cart abandoners from homepage visitors",
        "Excluding recent purchasers from ads",
      ],
      stages: [
        {
          stageId: "day1-launch-frequency",
          label: "Day 1, launch settings",
          elapsed: "Day 1 of 14",
          concept: "Setting a frequency cap before launch",
          lessonAnchor: "frequency-management-avoiding-ad-stalking",
          situation:
            "You're building the first ad set in Meta Ads Manager: 'All Site Visitors, 30 days.' The frequency cap field is optional and defaults to no cap.",
          dashboard:
            "New Ad Set: Cart Recovery — Baby Gear\n\n  Audience size (est.)   14,200\n  Budget                  ₹2,000/day\n  Frequency cap           [not set]\n  Placements               Automatic",
          spendToDate: "₹0 of ₹28,000",
          budgetRemaining: "₹28,000",
          decision: {
            prompt: "The frequency cap field is empty. What do you do before launching?",
            options: [
              {
                id: "set-cap",
                label: "Set a frequency cap of 8 impressions per person per week before launching",
                verdict: "optimal",
                outcome: "The campaign launches with delivery bounded to a sane range from day one.",
                why: "The lesson's frequency guidance (5-10/week) is meant to be set at launch, not patched after a spike, since Meta's default delivery has no built-in ceiling.",
                lessonRef: "Frequency Management: 'Frequency cap... is essential. Most practitioners cap at 5-10 impressions per person per week.'",
                nextStageId: "day4-segmentation-check",
              },
              {
                id: "launch-no-cap",
                label: "Launch without a cap — Meta's algorithm should self-regulate delivery",
                verdict: "costly",
                outcome: "By day 4, the algorithm concentrates delivery on a small responsive slice of the audience, and frequency climbs past 15/week for that group.",
                why: "Meta optimizes for conversions, not for comfortable frequency; without an explicit cap it will happily over-serve the same eager segment.",
                lessonRef: "Frequency Management: 'If someone sees your ad 20 times in a week... they'll start to resent your brand.'",
                nextStageId: "day4-fatigue-recovery",
              },
              {
                id: "cap-too-tight",
                label: "Set an aggressive cap of 2 impressions per week to be extra safe",
                verdict: "acceptable",
                outcome: "Delivery is safely bounded, but the campaign under-delivers against budget because the cap is tighter than the audience can absorb.",
                why: "A cap this low is not wrong, it avoids fatigue, but it leaves budget unspent and slows how fast the campaign can prove itself.",
                lessonRef: "Frequency Management: 'Most practitioners cap at 5-10 impressions per person per week.'",
                nextStageId: "day4-segmentation-check",
              },
            ],
          },
          liveVariant:
            "If running for real: set the cap inside the ad set's Delivery settings before publishing, and re-check delivered frequency in Ads Manager after 48 hours.",
        },
        {
          stageId: "day4-segmentation-check",
          label: "Day 4, first performance check",
          elapsed: "Day 4 of 14",
          concept: "Segmenting cart abandoners from homepage visitors",
          lessonAnchor: "the-three-core-audience-segments",
          situation:
            "The campaign is running one ad set covering all 30-day site visitors with a single 20%-off banner. Early numbers are in.",
          dashboard:
            "All Site Visitors, 30-day — Day 4\n\n  Impressions   38,400\n  CTR            0.6%\n  Cart-page visitors in audience: 2,100 (15% of total)\n  Homepage-only visitors: 12,100 (85% of total)\n  CPA            ₹410",
          spendToDate: "₹8,000 of ₹28,000",
          budgetRemaining: "₹20,000",
          decision: {
            prompt: "One audience, one generic discount ad, and 85% of it is low-intent homepage visitors diluting performance. What do you do?",
            options: [
              {
                id: "split-audience",
                label: "Split into a cart-abandoner ad set (urgency creative) and a homepage-visitor ad set (trust-building creative)",
                verdict: "optimal",
                outcome: "Cart-abandoner CPA drops sharply once the discount message reaches only the high-intent segment, while the homepage segment gets a cheaper trust-building ad instead.",
                why: "The lesson's Three Core Audience Segments exists precisely because a homepage visitor and a cart abandoner are in different mental states and need different messages.",
                lessonRef: "The Three Core Audience Segments: 'Cart Abandoners... consistently has the highest conversion rate of all three.'",
                nextStageId: "day10-exclusion-check",
              },
              {
                id: "raise-discount",
                label: "Keep one audience, but raise the discount to 30% to lift CTR",
                verdict: "costly",
                outcome: "CTR ticks up slightly but CPA gets worse, since the higher discount is now being shown to homepage visitors who were never close to buying.",
                why: "Raising the offer doesn't fix a targeting problem; it spends more per person in a segment that wasn't going to convert on message alone.",
                lessonRef: "The Three Core Audience Segments: 'One giant everyone-who-visited audience... that's a waste.'",
                nextStageId: "day10-exclusion-check-costly",
              },
              {
                id: "wait-more-data",
                label: "Leave it as one audience and wait another few days for more data",
                verdict: "acceptable",
                outcome: "No harm done, but 4 more days of budget go to an undifferentiated audience while the fix is already obvious from the data.",
                why: "The segmentation problem is visible right now; waiting doesn't reveal anything new, it just delays the fix.",
                lessonRef: "The Three Core Audience Segments: 'This is where most beginners go wrong.'",
                nextStageId: "day10-exclusion-check",
              },
            ],
          },
        },
        {
          stageId: "day10-exclusion-check",
          label: "Day 10, nearing budget review",
          elapsed: "Day 10 of 14",
          concept: "Excluding recent purchasers from ads",
          lessonAnchor: "common-mistakes",
          situation:
            "Segmented ad sets are performing well. Reviewing the audience settings before the week-2 budget call, you notice the cart-abandoner audience has no purchaser exclusion.",
          dashboard:
            "Cart Abandoners, 7-day — Day 10\n\n  Reach   9,800\n  Purchases attributed   61\n  Of which, purchased BEFORE ad clicked (same-session log)   9\n  CPA (reported)   ₹340\n  CPA (excluding pre-existing purchasers)   ₹402",
          spendToDate: "₹19,500 of ₹28,000",
          budgetRemaining: "₹8,500",
          decision: {
            prompt: "9 of 61 attributed purchases were people who'd already bought before the ad even ran. What do you do?",
            options: [
              {
                id: "add-exclusion",
                label: "Add a 'Purchased in last 30 days' exclusion audience to the cart-abandoner ad set immediately",
                verdict: "optimal",
                outcome: "Reported CPA becomes accurate, and the freed-up impressions redirect to genuine non-purchasers still in the funnel.",
                why: "The lesson calls this out directly as the single mistake that both wastes spend and inflates reported performance.",
                lessonRef: "Common Mistakes: 'Not excluding purchasers... wastes money and frustrates loyal customers.'",
                nextStageId: "end",
              },
              {
                id: "ignore-small-number",
                label: "9 out of 61 is a small share — leave it and focus on the bigger optimization",
                verdict: "costly",
                outcome: "The exclusion gap persists into week 2, and as the purchaser pool grows, the wasted-spend share climbs from 15% toward 25%+ by campaign end.",
                why: "The lesson treats this as a hard rule, not a threshold to tolerate below some percentage — the fix costs 5 minutes either way.",
                lessonRef: "Common Mistakes: 'Always create a recent purchasers... audience and exclude it from every retargeting campaign.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day4-fatigue-recovery",
          label: "Day 4, recovering from an uncapped launch",
          elapsed: "Day 4 of 14",
          concept: "Setting a frequency cap before launch",
          lessonAnchor: "frequency-management-avoiding-ad-stalking",
          situation:
            "Having launched without a cap, frequency for a small core segment has already reached 16/week and CTR for that segment is falling.",
          dashboard:
            "All Site Visitors, 30-day — Day 4 (no cap set)\n\n  Frequency (top decile)   16.2/week\n  CTR (top decile)   0.2% (down from 0.9% on day 1)\n  CPA (top decile)   ₹610",
          spendToDate: "₹9,400 of ₹28,000",
          budgetRemaining: "₹18,600",
          decision: {
            prompt: "Frequency has already run away for the most-served segment. What now?",
            options: [
              {
                id: "cap-now",
                label: "Set an 8/week frequency cap immediately and rotate in a new creative",
                verdict: "acceptable",
                outcome: "Delivery normalizes over the next 2-3 days, but the fatigued segment's CTR takes longer to recover than if a cap had been set at launch.",
                why: "It's the right fix, just later than it needed to be — this is why the lesson recommends setting the cap before launch, not after symptoms appear.",
                lessonRef: "Frequency Management: 'Beyond caps, rotate your creative.'",
                nextStageId: "day10-exclusion-check",
              },
              {
                id: "still-no-cap",
                label: "Keep monitoring without setting a cap — it might self-correct",
                verdict: "costly",
                outcome: "By day 7 the fatigued segment's CTR bottoms out near zero and CPA for that slice nearly triples, dragging the whole campaign's average up.",
                why: "Uncapped delivery does not self-correct toward comfortable frequency; the algorithm keeps re-serving whoever is easiest to reach.",
                lessonRef: "Frequency Management: 'If someone sees your ad 20 times in a week... they're not going to suddenly change their mind.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day10-exclusion-check-costly",
          label: "Day 10, recovering from a discount-only fix",
          elapsed: "Day 10 of 14",
          concept: "Excluding recent purchasers from ads",
          lessonAnchor: "common-mistakes",
          situation:
            "Having raised the discount instead of segmenting on day 4, CPA is still high and now a purchaser-exclusion gap is also visible in the data.",
          dashboard:
            "All Site Visitors, 30-day (30% off) — Day 10\n\n  CPA   ₹520\n  Purchases attributed to already-purchased users   14 of 88",
          spendToDate: "₹22,000 of ₹28,000",
          budgetRemaining: "₹6,000",
          decision: {
            prompt: "Two compounding problems now: an undifferentiated audience and no purchaser exclusion, with 4 days of budget left. What's the highest-leverage fix?",
            options: [
              {
                id: "exclusion-first",
                label: "Add the purchaser exclusion now, and segment the audience for the remaining budget",
                verdict: "optimal",
                outcome: "The exclusion is a 5-minute fix that immediately stops the clearest waste; segmentation, while also needed, takes longer to show results in the final days.",
                why: "Both fixes matter, but the exclusion has the fastest, most certain payoff with limited budget and time remaining.",
                lessonRef: "Common Mistakes: 'Always create a recent purchasers... audience and exclude it from every retargeting campaign.'",
                nextStageId: "end",
              },
              {
                id: "do-nothing-final-days",
                label: "Let the campaign run out as-is since there are only 4 days left",
                verdict: "costly",
                outcome: "The campaign closes out with its worst CPA of the flight, and the exclusion gap alone accounts for a measurable share of the final week's wasted spend.",
                why: "A 5-minute fix with real remaining budget behind it is worth making even late in a flight.",
                lessonRef: "Common Mistakes: 'Not excluding purchasers... wastes money and frustrates loyal customers.'",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "₹15,000 (~$180)",
        minDurationDays: 10,
        setupSteps: [
          "Install the Meta Pixel and verify it fires on product and cart pages",
          "Build a 30-day site-visitor audience and wait for it to clear 1,000 people",
          "Create at minimum a cart-abandoner and a homepage-visitor ad set with distinct creative",
        ],
        checkInSchedule: "Check frequency and CPA by segment every 2-3 days; do not judge results before day 7.",
      },
      toolStack: {
        free: [
          {
            toolName: "Meta Ads Manager",
            role: "Where every decision in this simulation is actually made in a live campaign",
            why: "Free to access; only ad spend costs money, and this simulation requires none",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Triple Whale",
            role: "Faster cross-segment CPA and frequency dashboards than native Ads Manager reporting",
            why: "Speeds up the same checks this simulation walks through, not required to complete them",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A launch-week decision log: the choice made at each stage, the outcome, and which lesson passage justified it.",
      sampleOutput:
        "Warby Parker, Retargeting Launch Log (excerpt)\n\nDay 1: Set 8/week frequency cap at launch — avoided the fatigue spike seen in the uncapped branch\nDay 4: Split into cart-abandoner (urgency) and homepage-visitor (trust) ad sets — CPA fell from ₹410 to ₹260 within 3 days\nDay 10: Added 30-day purchaser exclusion — reported CPA became accurate, freed 12% of impressions for genuine prospects",
      successCriteria: [
        "Chooses the frequency cap at launch rather than reacting after fatigue appears",
        "Recognizes the segmentation gap from the day-4 dashboard, not just the prompt wording",
        "Adds the purchaser exclusion once the same-session purchase overlap is visible",
      ],
      portfolioReady: true,
    },
  ],
  "google-shopping-pmax": [
    {
      id: "pmax-feed-quality-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Feed Audit: Diagnosing Why Half a Catalog Isn't Getting Clicks",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real product feed export, apply the lesson's feed-quality levers (titles, GTIN/MPN, custom labels) to find why specific SKUs are getting zero Shopping traffic.",
      companyId: "lenskart",
      scenario:
        "You're auditing Lenskart's eyewear product feed after noticing a third of the catalog gets almost no Shopping impressions despite healthy overall traffic.",
      brief:
        "Diagnose the feed row by row against the lesson's title, GTIN, and custom-label guidance, and flag the fixes with the biggest expected impact.",
      mode: "diagnostic",
      conceptsCovered: [
        "Writing product titles that mirror how shoppers search",
        "Including GTIN or MPN to improve catalog matching",
        "Using Custom Labels to segment by margin tier",
      ],
      steps: [
        {
          stepId: "step-1-title-quality",
          concept: "Writing product titles that mirror how shoppers search",
          lessonAnchor: "how-google-shopping-works",
          theoryRecap:
            "The lesson contrasts 'Blue Shoe Men' (barely matches anything) against 'Nike Air Zoom Pegasus 41 Men's Running Shoe Blue Size 10' (matches dozens of real queries) — title is the most important feed field.",
          question:
            "Six product rows are pulled from the feed. Which titles are too generic to match real search queries, and what's missing from each?",
          toolName: "Google Sheets",
          where: "Import product-feed-export.csv, review the 'title' column against 'category' and 'attributes'.",
          procedure: [
            "Import product-feed-export.csv and freeze row 1",
            "For each row, compare the title length and specificity against the product's brand/model/color/size attributes already in the feed",
            "Flag any title under 40 characters or missing brand + model as a rewrite candidate",
          ],
          outputSample:
            "SKU        Title                          Brand + Model in Title?   Impressions (30d)\nLK-2291    Sunglasses Black               No                        14\nLK-2292    Ray-Ban Aviator RB3025 Black    Yes                       1,840\nLK-2340    Reading Glasses                No                        6",
          healthy:
            "Titles include brand + product name + key variant details (color, size, material); low-traffic SKUs share the same detailed title pattern as high-traffic ones.",
          unhealthy:
            "Generic titles like 'Sunglasses Black' get single-digit-to-low-double-digit impressions over 30 days while near-identical products with full brand/model titles get thousands.",
          interpret:
            "Google matches queries against title text; a title with no brand or model simply doesn't overlap with the specific terms shoppers type.",
          soWhat: [
            {
              symptom: "Title is under 40 characters and missing brand or model",
              action: "Rewrite the title as brand + product name + key variant details, pulling from the feed's own attribute columns",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-gtin-check",
          concept: "Including GTIN or MPN to improve catalog matching",
          lessonAnchor: "how-google-shopping-works",
          theoryRecap:
            "The lesson notes GTIN or MPN (barcode or manufacturer part number) 'boosts eligibility' by letting Google match products to its structured catalog data.",
          question: "Which rows are missing a GTIN/MPN value, and does that correlate with lower impressions?",
          toolName: "Google Sheets",
          where: "Same export, 'gtin' and 'mpn' columns.",
          procedure: [
            "Filter for rows where both gtin and mpn are blank",
            "Cross-reference against the Merchant Center diagnostics export for any 'limited performance' warnings on those SKUs",
          ],
          outputSample:
            "SKU        GTIN        MPN         Merchant Center Flag\nLK-2291    (blank)     (blank)     Limited performance: missing identifiers\nLK-2292    8901030...  RB3025      None",
          healthy: "Every SKU has a GTIN or MPN populated, and Merchant Center shows no 'missing identifiers' warnings.",
          unhealthy: "Blank GTIN/MPN rows carry a 'limited performance' flag in Merchant Center diagnostics, meaning Google is capping their eligibility.",
          interpret: "Without a GTIN or MPN, Google can't confidently match the product to its catalog data, which throttles how often it's shown even if the title is decent.",
          soWhat: [
            { symptom: "GTIN and MPN both blank with a Merchant Center 'limited performance' flag", action: "Pull GTINs from the manufacturer or supplier record and add them to the feed", effort: "dev ticket" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Import and cross-reference the feed export to find weak titles and missing identifiers",
            why: "Free, works entirely from exported CSVs, no ad account access required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A prioritized list of SKUs to fix, split into 'rewrite title' and 'add GTIN/MPN,' ranked by estimated impression uplift.",
      sampleOutput:
        "Warby Parker, Feed Audit (excerpt)\n\nREWRITE TITLE (est. highest impact)\n1. WP-1104: 'Glasses Blue' -> 'Warby Parker Percey Eyeglasses Blue Crystal Size 50'\n\nADD GTIN/MPN\n2. WP-1104: no manufacturer part number on file, request from supplier",
      successCriteria: [
        "Correctly identifies generic titles missing brand/model as the primary traffic blocker",
        "Correctly flags GTIN/MPN gaps and connects them to Merchant Center's own diagnostic flag",
        "Orders fixes by estimated impact, not by feed row order",
      ],
      portfolioReady: true,
    },
    {
      id: "pmax-launch-decisions-sim",
      tier: "core",
      archetype: "simulation",
      title: "The First 30 Days: Launching Performance Max Without Burning the Budget",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Practice the sequence of launch, learning-period, and bidding decisions a real PMax rollout requires, including catching branded-search cannibalization before it inflates ROAS.",
      companyId: "yeti",
      scenario:
        "You're migrating YETI's outdoor-gear Shopping campaigns to Performance Max after leadership asks for a single campaign covering the full catalog.",
      brief:
        "Make the calls a PMax launch actually requires: whether you have enough conversion history to launch, how to react during the learning period, and how to set a realistic ROAS target.",
      mode: "simulation",
      conceptsCovered: [
        "Launching with sufficient conversion history",
        "Reading learning-period volatility without overreacting",
        "Setting a realistic ROAS target relative to current performance",
        "Spotting branded-search cannibalization in Search Terms Insights",
      ],
      stages: [
        {
          stageId: "day0-launch-readiness",
          label: "Day 0, launch readiness check",
          elapsed: "Day 0 of 30",
          concept: "Launching with sufficient conversion history",
          lessonAnchor: "the-learning-period",
          situation:
            "The existing Standard Shopping campaign is averaging 22 conversions per month. Leadership wants PMax live this week.",
          dashboard:
            "Standard Shopping — Trailing 30 days\n\n  Conversions   22\n  Google's stated PMax learning threshold   30-50 conversions/month\n  Current ROAS   410%",
          spendToDate: "$0 of $40,000 (monthly budget)",
          budgetRemaining: "$40,000",
          decision: {
            prompt: "Conversion volume is below Google's stated threshold for PMax to learn effectively. What do you recommend?",
            options: [
              {
                id: "wait-and-build",
                label: "Keep running Standard Shopping for another 4-6 weeks to build conversion volume, then migrate",
                verdict: "optimal",
                outcome: "By migration time, conversion volume clears 35/month and the campaign exits its learning period faster with a cleaner signal.",
                why: "The lesson is explicit that the fix for insufficient data is running Shopping longer first, not launching PMax anyway.",
                lessonRef: "The Learning Period: 'Do not launch PMax without sufficient conversion history... run a Standard Shopping campaign first.'",
                nextStageId: "day10-volatility",
              },
              {
                id: "launch-anyway",
                label: "Launch PMax now since leadership wants it live this week",
                verdict: "costly",
                outcome: "The campaign enters an extended, noisy learning period; CPA swings 2-3x week to week and doesn't stabilize by day 21.",
                why: "Google's own recommendation of 30-50 monthly conversions exists because the algorithm needs a minimum signal volume to learn efficiently.",
                lessonRef: "The Learning Period: 'Launch with less data and the algorithm guesses broadly, burning budget while it learns.'",
                nextStageId: "day10-volatility-costly",
              },
              {
                id: "launch-half-budget",
                label: "Launch PMax now but at half budget to limit downside while it learns",
                verdict: "acceptable",
                outcome: "The learning period is still noisy and extended, but the smaller budget limits total wasted spend compared to launching at full budget.",
                why: "This reduces the damage of an early launch but doesn't fix the underlying problem, the algorithm still doesn't have enough conversions to learn well.",
                lessonRef: "The Learning Period: 'Do not launch PMax without sufficient conversion history.'",
                nextStageId: "day10-volatility",
              },
            ],
          },
        },
        {
          stageId: "day10-volatility",
          label: "Day 10, mid-learning-period check",
          elapsed: "Day 10 of 30",
          concept: "Reading learning-period volatility without overreacting",
          lessonAnchor: "the-learning-period",
          situation:
            "PMax launched after the conversion-volume fix. CPA is higher than the old Shopping campaign's average and swinging day to day.",
          dashboard:
            "Performance Max — Day 10\n\n  CPA (7-day avg)   $58 (vs. $41 on prior Shopping campaign)\n  CPA day-to-day range   $31 to $89\n  Conversions this period   34",
          spendToDate: "$14,200 of $40,000",
          budgetRemaining: "$25,800",
          decision: {
            prompt: "CPA is higher and swinging widely 10 days in. What do you do?",
            options: [
              {
                id: "hold-steady",
                label: "Leave budget and targets untouched; the learning period typically runs 1-2 weeks",
                verdict: "optimal",
                outcome: "By day 18, CPA stabilizes near $38, better than the old Shopping campaign's average, once the algorithm finishes calibrating.",
                why: "The lesson states plainly that higher CPA and inconsistent results during the learning period are normal, and that every significant change restarts the clock.",
                lessonRef: "The Learning Period: 'This is normal... every significant change... restarts the clock.'",
                nextStageId: "day21-roas-target",
              },
              {
                id: "change-target-now",
                label: "Lower the target ROAS immediately to try to stabilize CPA faster",
                verdict: "costly",
                outcome: "The bid-target change restarts the learning clock; by day 20 the campaign is still volatile instead of settling.",
                why: "The lesson specifically warns that a new bid target restarts the learning period, exactly the outcome the manager was trying to avoid.",
                lessonRef: "The Learning Period: 'Every significant change (new budget, new bid target...) restarts the clock.'",
                nextStageId: "day21-roas-target-costly",
              },
            ],
          },
        },
        {
          stageId: "day21-roas-target",
          label: "Day 21, setting the ROAS target",
          elapsed: "Day 21 of 30",
          concept: "Setting a realistic ROAS target relative to current performance",
          lessonAnchor: "smart-bidding-what-you-control-vs-what-the-algorithm-controls",
          situation:
            "The campaign has stabilized. Leadership asks for an aggressive ROAS target to 'push the algorithm harder.'",
          dashboard:
            "Performance Max — Day 21, stabilized\n\n  Current ROAS   395%\n  Old Standard Shopping ROAS   410%\n  Leadership's requested target   700%",
          spendToDate: "$26,000 of $40,000",
          budgetRemaining: "$14,000",
          decision: {
            prompt: "Leadership wants a 700% ROAS target set right now, well above current performance. What do you do?",
            options: [
              {
                id: "set-realistic-target",
                label: "Set the target at or slightly below current ROAS (roughly 400%), and tighten gradually as data accumulates",
                verdict: "optimal",
                outcome: "The campaign holds volume while ROAS climbs gradually toward 450% over the following weeks without a volatility spike.",
                why: "The lesson's explicit rule is to start at or below current performance and tighten as the algorithm learns, not to jump straight to an aspirational number.",
                lessonRef: "Common Mistakes / Campaign Structure Principles: 'If your current Smart Shopping achieves 400% ROAS, do not launch PMax at a 700% target.'",
                nextStageId: "day25-branded-search",
              },
              {
                id: "set-aggressive-target",
                label: "Set the 700% target leadership asked for",
                verdict: "costly",
                outcome: "The algorithm sharply restricts spend to chase the unreachable target, and conversion volume drops by more than half within a week.",
                why: "An unrealistic target relative to current performance forces the algorithm into overly conservative bidding, exactly what the lesson warns against.",
                lessonRef: "Campaign Structure Principles: 'Set realistic ROAS targets... start at a match or slightly below and tighten as the algorithm learns.'",
                nextStageId: "day25-branded-search-costly",
              },
            ],
          },
        },
        {
          stageId: "day25-branded-search",
          label: "Day 25, reviewing Search Terms Insights",
          elapsed: "Day 25 of 30",
          concept: "Spotting branded-search cannibalization in Search Terms Insights",
          lessonAnchor: "smart-bidding-what-you-control-vs-what-the-algorithm-controls",
          situation:
            "ROAS looks excellent this week. You open Search Terms Insights to understand what's driving it before reporting the number up.",
          dashboard:
            "Search Terms Insights — Day 25\n\n  Top query: 'yeti tundra 45'    38% of PMax conversions\n  Top query: 'yeti coolers'       14% of PMax conversions\n  Combined branded-query share   52% of all PMax conversions",
          spendToDate: "$33,000 of $40,000",
          budgetRemaining: "$7,000",
          decision: {
            prompt: "Over half of this week's PMax conversions are coming from branded searches for 'YETI.' What do you do before reporting the ROAS number?",
            options: [
              {
                id: "flag-branded-add-campaign",
                label: "Flag that ROAS is inflated by branded demand, and set up a separate higher-priority branded Search campaign to route that traffic",
                verdict: "optimal",
                outcome: "Reported incremental ROAS drops to a more honest ~280%, but leadership now sees the true new-customer contribution of PMax and branded spend is measured separately.",
                why: "The lesson names this exact pattern and gives this exact fix, isolating branded traffic so PMax's real incremental performance is visible.",
                lessonRef: "Smart Bidding section tip: 'PMax will spend budget on branded searches... inflates ROAS... add a separate branded Search campaign with higher priority.'",
                nextStageId: "end",
              },
              {
                id: "report-as-is",
                label: "Report the strong ROAS number as-is; the campaign is technically performing well",
                verdict: "costly",
                outcome: "Leadership approves a bigger PMax budget based on an inflated number, and the incremental return on the new spend turns out far weaker than reported.",
                why: "Reporting branded-inflated ROAS without flagging it misrepresents how much of the result is genuinely incremental new-customer growth.",
                lessonRef: "Smart Bidding section tip: 'This inflates ROAS numbers but does not represent real incremental growth.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day10-volatility-costly",
          label: "Day 10, still volatile after an early launch",
          elapsed: "Day 10 of 30",
          concept: "Reading learning-period volatility without overreacting",
          lessonAnchor: "the-learning-period",
          situation: "Having launched without enough conversion history, the campaign is still deep in an extended learning period with no sign of stabilizing.",
          dashboard: "Performance Max — Day 10 (launched early)\n\n  CPA (7-day avg)   $81\n  Conversions this period   19\n  Trend   still volatile, not converging",
          spendToDate: "$18,900 of $40,000",
          budgetRemaining: "$21,100",
          decision: {
            prompt: "The campaign still hasn't stabilized because it launched below the conversion threshold. What now?",
            options: [
              {
                id: "pause-and-rebuild",
                label: "Pause PMax, return to Standard Shopping to rebuild conversion volume, then relaunch",
                verdict: "acceptable",
                outcome: "Performance recovers to baseline over the following weeks once volume is rebuilt, but the month's PMax budget was largely wasted on an early attempt.",
                why: "This is the correct long-term fix, though it comes after real budget was already spent learning this the hard way instead of before launch.",
                lessonRef: "The Learning Period: 'The fix: run a Standard Shopping campaign first, build up conversion volume... then migrate to PMax.'",
                nextStageId: "end",
              },
              {
                id: "keep-pushing",
                label: "Keep the campaign running as-is and hope it stabilizes with more time",
                verdict: "costly",
                outcome: "By day 20, CPA is still swinging widely and the month closes with a materially worse CPA than the old Shopping campaign.",
                why: "Without enough conversion signal, more elapsed time alone doesn't fix the underlying data shortage.",
                lessonRef: "The Learning Period: 'Launch with less data and the algorithm guesses broadly, burning budget while it learns.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day21-roas-target-costly",
          label: "Day 21, recovering from a restarted learning period",
          elapsed: "Day 21 of 30",
          concept: "Setting a realistic ROAS target relative to current performance",
          lessonAnchor: "smart-bidding-what-you-control-vs-what-the-algorithm-controls",
          situation: "The mid-campaign target change restarted the learning clock, and now leadership is asking for the aggressive 700% target on top of that.",
          dashboard: "Performance Max — Day 21 (learning restarted twice)\n\n  ROAS   340% and still unstable\n  Leadership's requested target   700%",
          spendToDate: "$29,000 of $40,000",
          budgetRemaining: "$11,000",
          decision: {
            prompt: "The campaign is already destabilized from one restart. Leadership still wants the aggressive target. What do you do?",
            options: [
              {
                id: "hold-and-explain",
                label: "Push back, hold the target at or below current ROAS, and let the remaining days stabilize before making any further change",
                verdict: "optimal",
                outcome: "ROAS recovers to roughly 380% by month end, still below the old campaign but clearly stabilizing instead of oscillating.",
                why: "Avoiding a second destabilizing change is the only way to let the algorithm recover within the remaining budget window.",
                lessonRef: "Campaign Structure Principles: 'Start at a match or slightly below and tighten as the algorithm learns.'",
                nextStageId: "end",
              },
              {
                id: "set-700-anyway",
                label: "Set the 700% target as requested",
                verdict: "costly",
                outcome: "Spend nearly halts as the algorithm refuses to bid competitively enough to hit the target, and the month ends with the lowest conversion volume of the quarter.",
                why: "Stacking a second unrealistic change on an already-unstable campaign compounds the volatility instead of resolving it.",
                lessonRef: "Campaign Structure Principles: 'Set realistic ROAS targets... do not launch PMax at a 700% target.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day25-branded-search-costly",
          label: "Day 25, reviewing a still-shaky campaign",
          elapsed: "Day 25 of 30",
          concept: "Spotting branded-search cannibalization in Search Terms Insights",
          lessonAnchor: "smart-bidding-what-you-control-vs-what-the-algorithm-controls",
          situation: "Even with the aggressive target reduced back down, this month's numbers still show heavy branded-search reliance.",
          dashboard: "Search Terms Insights — Day 25\n\n  Combined branded-query share   58% of all PMax conversions",
          spendToDate: "$34,500 of $40,000",
          budgetRemaining: "$5,500",
          decision: {
            prompt: "Branded search is still driving over half of conversions this month too. What do you do before the month-end report?",
            options: [
              {
                id: "flag-and-fix",
                label: "Flag the branded share in the report and set up a separate branded Search campaign for next month",
                verdict: "optimal",
                outcome: "Next month's PMax numbers become a much more honest read on incremental performance once branded traffic is routed elsewhere.",
                why: "It's not too late to apply the lesson's fix even after a rocky launch; isolating branded demand is what makes the ROAS number trustworthy going forward.",
                lessonRef: "Smart Bidding section tip: 'add a separate branded Search campaign with a higher priority so branded traffic routes there instead.'",
                nextStageId: "end",
              },
              {
                id: "hide-in-report",
                label: "Report the combined ROAS number without breaking out branded share",
                verdict: "costly",
                outcome: "Leadership continues judging PMax on a number roughly half inflated by demand that would have converted regardless of the ad.",
                why: "This repeats the same measurement mistake the lesson warns about, just at a worse moment given the campaign's rocky month.",
                lessonRef: "Smart Bidding section tip: 'This inflates ROAS numbers but does not represent real incremental growth.'",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$8,000",
        minDurationDays: 21,
        setupSteps: [
          "Confirm the source Shopping campaign clears 30+ conversions/month before migrating",
          "Set an initial ROAS target at or slightly below current Shopping performance",
          "Add a separate, higher-priority branded Search campaign before or at PMax launch",
        ],
        checkInSchedule: "Check Search Terms Insights weekly for branded-query share; do not change budget or targets before day 14.",
      },
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Where every decision in this simulation is actually made — campaign settings, Search Terms Insights, ROAS targets",
            why: "Free to access; only ad spend costs money, and this simulation requires none",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optmyzr",
            role: "Automated PMax script alerts for branded-query share and learning-period volatility",
            why: "Speeds up the same checks this simulation walks through manually, not required to complete them",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 30-day launch decision log: the choice made at each stage, the resulting metric change, and the exact lesson passage that justified it.",
      sampleOutput:
        "Chewy, PMax Launch Log (excerpt)\n\nDay 0: Delayed launch 5 weeks to clear 30+ monthly conversions on Standard Shopping first\nDay 10: Held targets steady through learning-period volatility — CPA stabilized at $36 by day 18\nDay 21: Set ROAS target at 395% (matching current performance), not leadership's requested 700%\nDay 25: Flagged 52% branded-query share and split off a dedicated branded Search campaign for next month",
      successCriteria: [
        "Delays or adjusts launch when conversion volume is below the stated threshold, rather than launching anyway",
        "Holds targets steady through learning-period volatility instead of making a destabilizing mid-period change",
        "Sets the ROAS target at or below current performance rather than an aspirational number",
        "Identifies branded-search cannibalization from Search Terms Insights before reporting ROAS",
      ],
      portfolioReady: true,
    },
  ],

  "youtube-ads": [
    {
      id: "youtube-ads-quartile-dropoff-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Quartile Drop-Off Audit: Diagnosing Where Viewers Bail",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real YouTube Ads quartile-report export, diagnose whether a weak hook or a weak middle is killing view-through, and recommend the specific fix.",
      companyId: "freshworks",
      scenario:
        "You're a growth marketer at Freshworks reviewing a 30-day skippable in-stream campaign for a new helpdesk add-on. View rate has been sitting well below the account's historical average, and leadership wants a diagnosis before next month's budget renewal.",
      brief:
        "Read the view-rate and quartile drop-off numbers, decide whether the problem lives in the first 5 seconds or somewhere in the middle of the video, and recommend the exact fix, not a general 'refresh the creative' note.",
      mode: "diagnostic",
      conceptsCovered: [
        "View rate as a hook-strength signal",
        "Quartile data as a mid-video diagnostic",
      ],
      steps: [
        {
          stepId: "step-1-view-rate-check",
          concept: "View rate as a hook-strength signal",
          lessonAnchor: "measurement-what-to-actually-track",
          theoryRecap:
            "The lesson's measurement section gives a hard benchmark: industry average view rate is around 31.9%. Below 15% on a skippable ad usually signals a weak hook in the first 5 seconds, not a targeting problem.",
          question:
            "This export shows 1,240,000 impressions and 168,000 views on the skippable in-stream ad group. Is this a hook problem, a targeting problem, or healthy performance?",
          toolName: "Google Sheets",
          where: "Import the quartile-export.csv from Google Ads' Video reporting tab, freeze the header row.",
          procedure: [
            "Import quartile-export.csv and freeze row 1",
            "Divide total views by total impressions to get view rate",
            "Compare the result against the 31.9% industry benchmark and the 15% weak-hook floor",
          ],
          outputSample:
            "Freshworks Helpdesk Add-On, skippable in-stream\n\n  Impressions        1,240,000\n  Views (30s/completed) 168,000\n  View rate           13.5%\n  Industry benchmark   31.9%\n  Weak-hook floor      15%",
          healthy:
            "View rate sits at or above roughly 20-25%, close enough to benchmark that the targeting is reaching an interested audience and the opening seconds are holding attention.",
          unhealthy:
            "View rate sits below the 15% floor, as it does here at 13.5%, which points to the first 5 seconds losing viewers before the message even lands.",
          interpret:
            "13.5% is below the weak-hook floor, so the fix is a new opening 5 seconds, not a new audience. Reworking targeting here would waste a sprint on the wrong layer.",
          soWhat: [
            {
              symptom: "View rate is under 15% while targeting matches the lesson's ICP guidance",
              action: "Storyboard 3 new hook variants using the ABCD framework's Attract step before touching audience settings",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-quartile-check",
          concept: "Quartile data as a mid-video diagnostic",
          lessonAnchor: "measurement-what-to-actually-track",
          theoryRecap:
            "The lesson explains that Google Ads reports what percentage of viewers watched 25%, 50%, 75%, and 100% of a video. A big drop between two adjacent quartiles pinpoints exactly where the video loses its audience.",
          question:
            "The same export shows 25% retention at 61%, 50% retention at 58%, and 75% retention at 22%. Where is this video actually losing people?",
          toolName: "Google Sheets",
          where: "Same quartile-export.csv, the Video Quartiles columns.",
          procedure: [
            "Chart the four quartile retention percentages as a line",
            "Calculate the point-to-point drop between each adjacent quartile",
            "Flag the single largest drop as the diagnosis",
          ],
          outputSample:
            "Quartile retention, Freshworks skippable ad\n\n  25% mark   61%\n  50% mark   58%   (-3 pts)\n  75% mark   22%   (-36 pts)\n  100% mark  19%   (-3 pts)",
          healthy: "Retention declines gradually across all four quartiles with no single drop exceeding roughly 10-15 points.",
          unhealthy: "One quartile-to-quartile gap is dramatically larger than the others, as the 36-point collapse between the 50% and 75% marks is here.",
          interpret:
            "The hook is actually fine, 61% still watching at the 25% mark is respectable. The video loses two-thirds of its remaining audience in the middle third, which points at a pacing or offer problem around the midpoint, not the opening.",
          soWhat: [
            {
              symptom: "A single quartile shows a drop far larger than the others",
              action: "Re-cut the video so the product demo or offer reveal moves earlier, before the 50% mark",
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
            role: "Import the quartile export and calculate view rate and drop-off points",
            why: "No account setup needed, works directly on the exported CSV",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page diagnosis memo stating whether the hook or the mid-video pacing is the problem, backed by the view-rate and quartile numbers, with one concrete next action.",
      sampleOutput:
        "Peloton, Q2 skippable in-stream diagnosis (excerpt)\n\nVIEW RATE: 24.1% — inside normal range, hook is not the issue.\nQUARTILE DROP: -31 pts between 25% and 50% marks.\nDIAGNOSIS: Video front-loads brand story before the workout demo; move the demo to the first 10 seconds.\nACTION: Re-cut opening, retest within 2 weeks.",
      successCriteria: [
        "Correctly calculates view rate and compares it against the 15%/31.9% benchmarks",
        "Identifies the single largest quartile-to-quartile drop rather than treating all four numbers as equally important",
        "Recommends a fix that matches the diagnosis (hook fix for low view rate, mid-video re-cut for a quartile collapse), not a generic 'refresh creative' note",
      ],
      portfolioReady: true,
    },
    {
      id: "youtube-ads-launch-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 21-Day Launch: Simulating a YouTube Ads Rollout Under Budget Pressure",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Practice the sequence of judgment calls across a 21-day YouTube campaign launch: when to leave the auction alone, when creative fatigue demands a refresh, how to keep cold/warm/hot audiences from overlapping, and how to read Brand Lift signals against last-click data.",
      companyId: "duolingo",
      scenario:
        "You're running paid video for Duolingo's new certification product launch. Budget is £4,000 over 21 days, and the growth lead checks the dashboard with you at three points along the way.",
      brief:
        "At each checkpoint, read the dashboard, apply the lesson's frameworks, and pick the action a disciplined YouTube advertiser would actually take, not the one that feels most urgent.",
      mode: "simulation",
      conceptsCovered: [
        "Reading auction benchmarks before judging a young campaign",
        "Creative refresh timing before fatigue sets in",
        "Separating cold, warm, and hot audiences with exclusions",
        "Brand Lift and view-through conversions as a measurement layer beyond clicks",
      ],
      stages: [
        {
          stageId: "day3-early-check",
          label: "Day 3, first look",
          elapsed: "Day 3 of 21",
          concept: "Reading auction benchmarks before judging a young campaign",
          lessonAnchor: "how-the-auction-works",
          situation:
            "You launched the skippable in-stream campaign three days ago and open the dashboard for the first time. The growth lead is asking whether it's working.",
          dashboard:
            "Skippable in-stream · Cold audience ad group · Day 3 of 21\n\n  Impressions   142,000\n  CPV           £0.041\n  CTR           0.52%\n  View rate     27.8%\n  Spend         £480 of £4,000",
          spendToDate: "£480 of £4,000",
          budgetRemaining: "£3,520",
          decision: {
            prompt:
              "CPV is running above the £0.02-0.03 benchmark and CTR is slightly under the 0.65% average. Three days in, what do you do?",
            options: [
              {
                id: "wait-and-log",
                label: "Log the numbers against benchmark, make no changes, check again on day 10",
                verdict: "optimal",
                outcome: "The campaign gets time to accumulate real signal before any judgment is made.",
                why:
                  "The lesson's benchmark table is a 2024-2025 average across $14.32B in spend, not a day-3 pass/fail line. A handful of days of auction data is too small a sample to separate a slow start from a real problem.",
                lessonRef: "How the Auction Works: 2024-2025 benchmark numbers table (Average CPV $0.02-$0.03, Average CTR ~0.65%)",
                nextStageId: "day10-creative-check",
              },
              {
                id: "raise-bid-now",
                label: "Raise the CPV bid immediately to try to win more impressions",
                verdict: "costly",
                outcome:
                  "CPV climbs further above benchmark with no more evidence the extra spend buys better performance, and £3,520 in remaining budget now funds an unproven fix.",
                why:
                  "Changing the bid on day 3 answers a question the data can't ask yet: three days of impressions isn't enough to know if the current bid is actually the problem.",
                lessonRef: "How the Auction Works: benchmark numbers are drawn from full-flight averages, not early-day snapshots",
                nextStageId: "day10-creative-check-costly",
              },
              {
                id: "pause-campaign",
                label: "Pause the campaign and rebuild targeting from scratch",
                verdict: "costly",
                outcome:
                  "The campaign loses its accumulated auction data and restarts cold, spending the first £480 for nothing.",
                why:
                  "A CPV slightly above benchmark on day 3 is not evidence the targeting itself is wrong; pausing throws away the only data collected so far.",
                lessonRef: "How the Auction Works: benchmark table",
                nextStageId: "day10-creative-check-costly",
              },
            ],
          },
        },
        {
          stageId: "day10-creative-check",
          label: "Day 10, creative fatigue check",
          elapsed: "Day 10 of 21",
          concept: "Creative refresh timing before fatigue sets in",
          lessonAnchor: "creative-refresh-rate-and-growth",
          situation:
            "Numbers have normalized closer to benchmark since day 3. The same single creative variant has now been running for 10 days straight.",
          dashboard:
            "Skippable in-stream · Cold audience ad group · Day 10 of 21\n\n  CPV           £0.029\n  CTR           0.61%\n  View rate     22.1% (down from 27.8% on day 3)\n  Creative age  10 days, single variant\n  Spend         £1,850 of £4,000",
          spendToDate: "£1,850 of £4,000",
          budgetRemaining: "£2,150",
          decision: {
            prompt: "View rate has dropped 5.7 points since day 3 and the same creative has run for 10 days. What now?",
            options: [
              {
                id: "refresh-now",
                label: "Ship 2 new creative variants now, before the 14-day mark",
                verdict: "optimal",
                outcome: "View rate recovers toward the day-3 level once the new variants start serving.",
                why:
                  "The lesson's data shows advertisers who refresh every 14 days or fewer see +1.67% month-over-month growth, while those waiting past 30 days see -0.95% decline. A declining view rate at day 10 is the fatigue signal arriving early, not a reason to wait until day 14 exactly.",
                lessonRef: "Creative Refresh Rate and Growth: advertisers refreshing within 14 days see +1.67% MoM growth vs -0.95% decline past 30 days",
                nextStageId: "day16-audience-check",
              },
              {
                id: "wait-until-14",
                label: "Wait until exactly day 14 as the checklist suggests, change nothing today",
                verdict: "acceptable",
                outcome: "View rate keeps drifting down for 4 more days before the refresh finally lands.",
                why:
                  "Day 14 is a reminder deadline, not a floor. The lesson's checklist item exists so refreshes don't get forgotten, not to justify ignoring an earlier fatigue signal that's already visible in the data.",
                lessonRef: "Campaign Setup Checklist: set a creative review reminder for day 14, refresh before fatigue sets in",
                nextStageId: "day16-audience-check",
              },
              {
                id: "ignore-drop",
                label: "Ignore the view-rate dip, it's only a few points",
                verdict: "costly",
                outcome: "View rate keeps falling through day 16, and the campaign enters its final week already fatigued.",
                why:
                  "Creative fatigue compounds. The lesson is explicit that waiting past 30 days between refreshes produces measurable decline; treating an early warning sign as noise guarantees the campaign hits that decline inside its own 21-day flight.",
                lessonRef: "Creative Refresh Rate and Growth: -0.95% month-over-month decline once refresh gaps exceed 30 days",
                nextStageId: "day16-audience-check-costly",
              },
            ],
          },
        },
        {
          stageId: "day10-creative-check-costly",
          label: "Day 10, recovering from an early misstep",
          elapsed: "Day 10 of 21",
          concept: "Creative refresh timing before fatigue sets in",
          lessonAnchor: "creative-refresh-rate-and-growth",
          situation:
            "The day-3 change reset the auction's learning signal, and CPV is still elevated with less budget left to work with.",
          dashboard:
            "Skippable in-stream · Cold audience ad group · Day 10 of 21\n\n  CPV           £0.038 (still above benchmark)\n  CTR           0.49%\n  View rate     19.4%\n  Creative age  10 days, single variant\n  Spend         £2,280 of £4,000",
          spendToDate: "£2,280 of £4,000",
          budgetRemaining: "£1,720",
          decision: {
            prompt: "Fewer days remain and less budget is left. The same single creative has now run for 10 days. What now?",
            options: [
              {
                id: "refresh-now-recover",
                label: "Ship 2 new creative variants immediately",
                verdict: "acceptable",
                outcome: "View rate stabilizes but starts from a weaker base than the undisturbed path would have.",
                why:
                  "This is still the right move at day 10, but the earlier bid change already cost budget and data the campaign won't get back.",
                lessonRef: "Creative Refresh Rate and Growth: refresh within 14 days to avoid decline",
                nextStageId: "day16-audience-check",
              },
              {
                id: "keep-waiting",
                label: "Keep the same creative running",
                verdict: "costly",
                outcome: "View rate continues declining with 11 days and £1,720 left to recover.",
                why: "Compounding an early misstep with a second delayed refresh leaves too little runway in a 21-day flight.",
                lessonRef: "Creative Refresh Rate and Growth: -0.95% MoM decline past 30-day refresh gaps",
                nextStageId: "day16-audience-check-costly",
              },
            ],
          },
        },
        {
          stageId: "day16-audience-check",
          label: "Day 16, audience overlap check",
          elapsed: "Day 16 of 21",
          concept: "Separating cold, warm, and hot audiences with exclusions",
          lessonAnchor: "the-audience-funnel-cold-warm-hot",
          situation:
            "Creative refresh worked, view rate recovered. The growth lead now wants to add a retargeting push for cart abandoners on the certification signup page.",
          dashboard:
            "3 ad groups live · Day 16 of 21\n\n  Cold (interest/demo targeting)     view rate 26%\n  Warm (site visitors, no exclusion) view rate 24%\n  Hot (cart abandoners, new)         not yet launched\n  Spend                              £3,010 of £4,000",
          spendToDate: "£3,010 of £4,000",
          budgetRemaining: "£990",
          decision: {
            prompt: "You're about to launch the hot cart-abandoner ad group. How do you set it up?",
            options: [
              {
                id: "exclude-overlap",
                label: "Launch the hot ad group with exclusions so cold and warm audiences can't also see it",
                verdict: "optimal",
                outcome: "Each viewer sees exactly one message tier, and the remaining £990 is spent on the highest-intent group without waste.",
                why:
                  "The lesson calls mixing cold and warm audiences in the same ad group the single biggest YouTube mistake, and requires exclusions between all three tiers, not just a new audience layered on top.",
                lessonRef: "The Audience Funnel: 'Always build three separate audience tiers, and use exclusions to prevent overlap'",
                nextStageId: "day21-measurement",
              },
              {
                id: "launch-no-exclusions",
                label: "Launch the hot ad group without setting exclusions, more reach can't hurt",
                verdict: "costly",
                outcome:
                  "Cart abandoners now see all three ad tiers in the same week, and the remaining budget gets spread across duplicate impressions instead of concentrated on the highest-intent group.",
                why:
                  "This is exactly the mixing the lesson warns against. Overlapping audiences waste budget and make hot-tier messaging feel repetitive rather than targeted.",
                lessonRef: "The Audience Funnel: 'Mixing cold and warm audiences in the same ad group wastes budget and feels irrelevant to everyone'",
                nextStageId: "day21-measurement-costly",
              },
              {
                id: "skip-hot-tier",
                label: "Skip the hot tier entirely and keep spending on cold and warm only",
                verdict: "acceptable",
                outcome: "No wasted overlap, but the campaign never spends its final week on its highest-converting audience segment.",
                why:
                  "This avoids the overlap mistake but leaves the framework half-used. Cart abandoners are exactly who the hot tier exists for in the final stretch of a flight.",
                lessonRef: "The Audience Funnel: Hot tier is 'remarketing to cart abandoners, high-intent page visitors, or existing customers for upsell'",
                nextStageId: "day21-measurement",
              },
            ],
          },
        },
        {
          stageId: "day16-audience-check-costly",
          label: "Day 16, entering the final week already behind",
          elapsed: "Day 16 of 21",
          concept: "Separating cold, warm, and hot audiences with exclusions",
          lessonAnchor: "the-audience-funnel-cold-warm-hot",
          situation:
            "View rate is still recovering from the delayed refresh, and budget is tighter than it would otherwise be heading into the final week.",
          dashboard:
            "3 ad groups live · Day 16 of 21\n\n  Cold                view rate 21%\n  Warm (no exclusion)  view rate 20%\n  Hot                  not yet launched\n  Spend                £3,340 of £4,000",
          spendToDate: "£3,340 of £4,000",
          budgetRemaining: "£660",
          decision: {
            prompt: "Only £660 remains for the final week. How do you launch the hot cart-abandoner ad group?",
            options: [
              {
                id: "exclude-overlap-recover",
                label: "Launch the hot ad group with exclusions against cold and warm",
                verdict: "acceptable",
                outcome: "The remaining £660 is spent cleanly, but the smaller total budget limits how much the hot tier can accomplish.",
                why: "Correct structure this late still protects the last week's spend from waste, even though earlier missteps shrank what's left to work with.",
                lessonRef: "The Audience Funnel: exclusions between all three tiers",
                nextStageId: "day21-measurement",
              },
              {
                id: "no-exclusions-recover",
                label: "Launch without exclusions to maximize remaining reach",
                verdict: "costly",
                outcome: "The final £660 gets split across overlapping impressions instead of concentrated on cart abandoners.",
                why: "Skipping exclusions with an already-reduced budget compounds the waste from the earlier missteps.",
                lessonRef: "The Audience Funnel: 'Mixing cold and warm audiences in the same ad group wastes budget'",
                nextStageId: "day21-measurement-costly",
              },
            ],
          },
        },
        {
          stageId: "day21-measurement",
          label: "Day 21, final measurement call",
          elapsed: "Day 21 of 21",
          concept: "Brand Lift and view-through conversions as a measurement layer beyond clicks",
          lessonAnchor: "measurement-what-to-actually-track",
          situation:
            "The flight has ended. Total spend is £3,940 of £4,000. Click-through conversions look thin, and the growth lead is drafting a one-line verdict for the exec summary: 'YouTube underperformed.'",
          dashboard:
            "Final report · 21-day flight\n\n  Click-through conversions   34\n  View-through conversions    211\n  Branded search volume       +148% vs pre-flight baseline\n  Total spend                 £3,940 of £4,000",
          spendToDate: "£3,940 of £4,000",
          budgetRemaining: "£60",
          decision: {
            prompt: "Click conversions are thin but view-through and branded search both jumped. What's the verdict?",
            options: [
              {
                id: "full-picture",
                label: "Report the full picture: click conversions plus view-through conversions plus the branded-search lift",
                verdict: "optimal",
                outcome: "The exec summary reflects what YouTube actually did, and next quarter's budget decision uses real signal instead of a partial one.",
                why:
                  "The lesson is explicit that YouTube's impact is consistently underestimated by last-click attribution, and that a branded-search lift is a legitimate free proxy for Brand Lift when spend is under the $50,000 Brand Lift threshold.",
                lessonRef: "Measurement: 'YouTube's impact is consistently underestimated by last-click attribution models' and the branded-search proxy tip",
                nextStageId: "end",
              },
              {
                id: "clicks-only",
                label: "Report only the 34 click-through conversions as the campaign's result",
                verdict: "costly",
                outcome: "The exec summary reads as a failed campaign, and next quarter's YouTube budget gets cut based on an incomplete number.",
                why:
                  "Judging a YouTube flight on click conversions alone ignores exactly the measurement gap the lesson warns about.",
                lessonRef: "Measurement: 'Many campaigns that look weak on click metrics are quietly winning the consideration battle'",
                nextStageId: "end",
              },
              {
                id: "wait-for-brand-lift",
                label: "Hold the report until an official Brand Lift study can run",
                verdict: "acceptable",
                outcome: "The exec summary is delayed a full quarter waiting on a study the account doesn't qualify for yet.",
                why:
                  "Brand Lift needs roughly $50,000 in spend to unlock. At £3,940 spent, the branded-search proxy is the available signal now, not a future study.",
                lessonRef: "Measurement: Brand Lift is 'available above certain spend thresholds, typically around $50,000'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day21-measurement-costly",
          label: "Day 21, closing out a campaign that fought its own structure",
          elapsed: "Day 21 of 21",
          concept: "Brand Lift and view-through conversions as a measurement layer beyond clicks",
          lessonAnchor: "measurement-what-to-actually-track",
          situation:
            "The flight ends with overlapping audiences having diluted the final week. Spend hit £4,000, but the numbers are weaker than they should have been.",
          dashboard:
            "Final report · 21-day flight\n\n  Click-through conversions   19\n  View-through conversions    97\n  Branded search volume       +52% vs pre-flight baseline\n  Total spend                 £4,000 of £4,000",
          spendToDate: "£4,000 of £4,000",
          budgetRemaining: "£0",
          decision: {
            prompt: "The numbers are weaker than the disciplined path would have produced. What's the honest verdict for the exec summary?",
            options: [
              {
                id: "full-picture-honest",
                label: "Report the full picture including view-through and branded search, and flag the audience-overlap issue for next flight",
                verdict: "optimal",
                outcome: "The exec summary is accurate and next quarter's setup avoids the same overlap mistake.",
                why: "Even a flight with structural mistakes deserves a measurement approach that reflects YouTube's actual impact, not just clicks.",
                lessonRef: "Measurement: view-through conversions and branded search as legitimate signal beyond last-click",
                nextStageId: "end",
              },
              {
                id: "clicks-only-costly",
                label: "Report only click conversions and call the channel a failure",
                verdict: "costly",
                outcome: "The exec summary blames the channel for a structural setup mistake, and the real lesson (fix the exclusions) never gets learned.",
                why: "This both underreports YouTube's real impact and misdiagnoses why this particular flight underperformed its own potential.",
                lessonRef: "Measurement: 'consistently underestimated by last-click attribution models'",
                nextStageId: "end",
              },
            ],
          },
          liveVariant:
            "Running this for real: launch a £50-100 skippable in-stream test campaign in Google Ads, apply the day-3/day-10/day-16 checkpoints on your own dashboard, and compare your actual decisions against this simulation's optimal path.",
        },
      ],
      liveTrack: {
        minSpend: "£300",
        minDurationDays: 14,
        setupSteps: [
          "Create a skippable in-stream campaign in Google Ads with one cold-audience ad group",
          "Upload at least 2 creative variants from day one",
          "Connect Google Analytics 4 and import at least one conversion event before launch",
        ],
        checkInSchedule: "Check the dashboard on day 3, day 10, and day 14, using this simulation's three checkpoints as the review structure.",
      },
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Build and run the simulated campaign structure and read the dashboard metrics",
            why: "Free to open an account; this simulation only requires reading sample dashboards, no real spend needed to complete it",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Reference for how conversion events would be tracked in the live-track extension",
            why: "Free tier covers everything a learner needs to connect conversion tracking",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 4-checkpoint decision log stating which action was taken at each stage and the lesson passage that justified it, plus a final exec-summary paragraph using the full measurement picture.",
      sampleOutput:
        "Peloton connected-fitness launch, decision log (excerpt)\n\nDAY 3: Logged CPV/CTR against benchmark, no changes made.\nDAY 10: Shipped 2 new creative variants after a 4-point view-rate dip.\nDAY 16: Launched hot cart-abandoner ad group with exclusions against cold/warm.\nDAY 21: Reported clicks (41) + view-through (188) + branded search lift (+134%) in the exec summary.",
      successCriteria: [
        "Picks the optimal option at the day-3 checkpoint (no premature bid or targeting changes)",
        "Refreshes creative in response to the declining view-rate signal rather than waiting past the point fatigue is visible",
        "Sets exclusions when launching the hot audience tier",
        "Reports view-through conversions and branded search alongside click conversions in the final verdict",
      ],
      portfolioReady: true,
      stretch:
        "Run the live-track extension: launch a real £300+, 14-day skippable in-stream test and compare your own day-3/day-10/day-14 decisions against this simulation's optimal path.",
    },
  ],
  "linkedin-ads": [
    {
      id: "linkedin-ads-targeting-stack-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Precision Audit: Sizing a LinkedIn Targeting Stack Before Launch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a LinkedIn Campaign Manager audience-forecast export comparing a broad and a narrow targeting stack, decide which one to launch and calculate the maximum CPL the campaign can afford.",
      companyId: "snowflake",
      scenario:
        "You're on Snowflake's paid social team validating a Sponsored Content campaign targeting stack before it goes live. Two audience-forecast options are sitting in front of you, and finance wants a maximum CPL before they'll approve budget.",
      brief:
        "Compare the broad and narrow audience forecasts, pick the one the lesson's targeting framework favors, then run the ACV-based CPL formula to set a launch ceiling.",
      mode: "diagnostic",
      conceptsCovered: [
        "Layered targeting filters for precision over reach",
        "Maximum acceptable CPL using the ACV formula",
      ],
      steps: [
        {
          stepId: "step-1-audience-size-check",
          concept: "Layered targeting filters for precision over reach",
          lessonAnchor: "targeting-where-linkedin-earns-its-premium",
          theoryRecap:
            "The lesson's targeting section shows a typical layered stack (industry, company size, job function, seniority) producing an audience of roughly 80,000-150,000 people, and states a tightly defined 100,000-person audience converts better than a broad 2-million-person one.",
          question:
            "The forecast tool shows two options: a broad stack at 410,000 people, and a narrower stack (adding seniority and skill filters) at 92,000 people. Which one matches the lesson's guidance?",
          toolName: "LinkedIn Campaign Manager",
          where: "The audience-forecast panel in the campaign builder, before publishing.",
          procedure: [
            "Open both saved audience stacks in the forecast panel",
            "Note the projected audience size for each",
            "Compare both against the lesson's 80,000-150,000 typical-range guidance",
          ],
          outputSample:
            "Snowflake Sponsored Content, audience forecast\n\n  Broad stack (Industry + Company size only)          410,000 people\n  Narrow stack (+ Seniority: Manager-C-Suite, + Skills) 92,000 people\n  Lesson's typical precise range                       80,000-150,000",
          healthy:
            "The chosen audience lands inside or near the 80,000-150,000 range the lesson describes as where LinkedIn's precision actually pays for itself.",
          unhealthy:
            "The audience is broad enough (hundreds of thousands or millions) to include people who will never buy the product, which is exactly the mistake the lesson calls out.",
          interpret:
            "The 410,000-person stack is the broad-targeting mistake the lesson warns against by name. The 92,000-person stack is inside the ideal range and is the one to launch.",
          soWhat: [
            {
              symptom: "A saved audience stack forecasts in the hundreds of thousands or millions",
              action: "Add seniority and job-function filters until the forecast lands in the 50,000-300,000 range before publishing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-max-cpl-check",
          concept: "Maximum acceptable CPL using the ACV formula",
          lessonAnchor: "is-linkedin-worth-the-cost",
          theoryRecap:
            "The lesson gives a direct formula: Maximum acceptable CPL = ACV x lead-to-close rate x 0.2, using 20% of first-year revenue as the spend ceiling.",
          question:
            "Snowflake's enterprise data-warehouse tier has a $45,000 ACV and a 4% lead-to-close rate. What's the maximum CPL finance should approve, and does the SaaS-benchmark median CPC of roughly $8 make this viable?",
          toolName: "Google Sheets",
          where: "A blank sheet next to the forecast export.",
          procedure: [
            "Multiply ACV ($45,000) by lead-to-close rate (0.04)",
            "Multiply that result by 0.2 to get the maximum acceptable CPL",
            "Compare the maximum CPL against the account's expected CPL range for the narrow audience",
          ],
          outputSample:
            "Max CPL calculation\n\n  ACV                    $45,000\n  Lead-to-close rate     4%\n  Max CPL = 45,000 x 0.04 x 0.2 = $360",
          healthy: "The industry or account CPL benchmark sits below the calculated maximum, leaving room for the channel to be profitable.",
          unhealthy: "The account's realistic CPL sits above the calculated maximum, meaning every lead loses money before sales even touches it.",
          interpret:
            "At $360 max CPL against a typical SaaS CPL range of $80-130 (per the lesson's example), Snowflake's targeting stack is comfortably viable even before factoring in the narrower audience's better conversion quality.",
          soWhat: [
            {
              symptom: "Finance approves budget without a maximum-CPL ceiling",
              action: "Set the $360 max CPL as a hard cutoff in the CPL bidding target before launch",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "LinkedIn Campaign Manager",
            role: "Read the audience-forecast panel to compare stack sizes",
            why: "Forecasting is available free inside any Campaign Manager account before spend is committed",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Run the ACV x lead-to-close x 0.2 maximum-CPL formula",
            why: "No paid tool needed for a single formula calculation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page launch memo naming the recommended audience stack, its forecasted size, and the maximum acceptable CPL finance should approve.",
      sampleOutput:
        "Zendesk enterprise-tier launch memo (excerpt)\n\nRECOMMENDED STACK: Narrow (Seniority: Director+, Job function: IT/Support) — 118,000 people.\nREJECTED: Broad stack (Industry only) — 620,000 people, fails precision guidance.\nMAX CPL: $30,000 ACV x 5% close rate x 0.2 = $300.\nBENCHMARK CPL: $90-140 (SaaS median). Channel is viable.",
      successCriteria: [
        "Selects the narrower audience stack and explains why using the lesson's precision-over-reach guidance",
        "Correctly applies the ACV x lead-to-close x 0.2 formula",
        "States a clear go/no-go recommendation based on comparing the calculated max CPL against the realistic benchmark",
      ],
      portfolioReady: true,
    },
    {
      id: "linkedin-ads-abm-launch-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The ABM Rollout: Simulating a 6-Week LinkedIn Campaign Under a $10 CPC",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Practice the sequence of judgment calls across a 6-week LinkedIn ABM campaign launched in Q4: narrowing an oversized audience, excluding existing pipeline, weighing seasonal MQL efficiency, and applying the maximum-CPL formula to a final go/no-go call.",
      companyId: "zendesk",
      scenario:
        "You're running LinkedIn ads for Zendesk's new enterprise support tier, targeting Head of Support and VP of Support at 200-2,000 employee companies. Budget is $6,000 over 6 weeks, and the launch lands in October, right at the start of Q4.",
      brief:
        "At each checkpoint, read the dashboard and apply the lesson's targeting, exclusion, seasonal, and CPL frameworks to make the call a disciplined B2B advertiser would make.",
      mode: "simulation",
      conceptsCovered: [
        "Narrow precise audiences over broad reach",
        "Excluding existing customers and pipeline contacts from paid audiences",
        "Seasonal cost-per-MQL patterns by quarter",
        "Maximum acceptable CPL using the ACV formula",
      ],
      stages: [
        {
          stageId: "week1-cpc-shock",
          label: "Week 1, CPC shock",
          elapsed: "Week 1 of 6",
          concept: "Narrow precise audiences over broad reach",
          lessonAnchor: "targeting-where-linkedin-earns-its-premium",
          situation:
            "The campaign launched Monday with a broad targeting stack (Industry + Company size only) to maximize reach. CPC is running well above expectations.",
          dashboard:
            "Sponsored Content, CPC bidding · Week 1 of 6\n\n  Audience size   420,000 (Industry + Company size only)\n  CPC             $14.20\n  CTR             0.31%\n  Spend           $1,050 of $6,000",
          spendToDate: "$1,050 of $6,000",
          budgetRemaining: "$4,950",
          decision: {
            prompt: "CPC is running $4-6 above what similar SaaS campaigns typically see. What's the fix?",
            options: [
              {
                id: "narrow-targeting",
                label: "Add seniority (Director+) and job-function filters to narrow the audience to roughly 80,000-150,000",
                verdict: "optimal",
                outcome: "CPC drops toward benchmark as the audience concentrates on people who actually control the buying decision.",
                why:
                  "The lesson states directly that a tightly defined 100,000-person audience converts better than a broad 2-million-person one, and that new advertisers opening targeting to lower CPMs has it backwards.",
                lessonRef: "Common Mistakes: 'Targeting too broad... LinkedIn's value is specificity... A 60,000-person precise audience almost always outperforms a 400,000-person vague one'",
                nextStageId: "week2-exclusions",
              },
              {
                id: "raise-budget",
                label: "Keep the broad audience and increase daily budget to win more of the auction",
                verdict: "costly",
                outcome: "Spend accelerates against the same unqualified 420,000-person audience, burning budget faster without fixing the CPC.",
                why: "More budget against a broad, imprecise audience amplifies the exact mistake the lesson warns against rather than fixing it.",
                lessonRef: "Common Mistakes: targeting too broad wastes spend on people who will never buy",
                nextStageId: "week2-exclusions-costly",
              },
              {
                id: "switch-cpm",
                label: "Switch from CPC to CPM bidding to reduce cost-per-impression instead",
                verdict: "costly",
                outcome: "Cost per impression looks better on the dashboard, but the audience is still full of people who won't buy, and total wasted spend doesn't improve.",
                why:
                  "This treats the symptom (a high per-unit cost metric) instead of the cause (an audience too broad for the product). The lesson's fix for CPC pressure is precision, not a bidding-model swap.",
                lessonRef: "Common Mistakes: 'Targeting too broad'",
                nextStageId: "week2-exclusions-costly",
              },
            ],
          },
        },
        {
          stageId: "week2-exclusions",
          label: "Week 2, pipeline overlap",
          elapsed: "Week 2 of 6",
          concept: "Excluding existing customers and pipeline contacts from paid audiences",
          lessonAnchor: "other-mistakes-to-avoid",
          situation:
            "The narrowed audience is performing well. Reviewing the click report, you notice several clicks from people already in Zendesk's active sales pipeline.",
          dashboard:
            "Sponsored Content, narrowed audience (118,000) · Week 2 of 6\n\n  CPC             $9.10\n  Clicks from known pipeline contacts   6 (of 41 total clicks)\n  Spend           $2,120 of $6,000",
          spendToDate: "$2,120 of $6,000",
          budgetRemaining: "$3,880",
          decision: {
            prompt: "Nearly 15% of this week's clicks came from people already in the sales pipeline. What do you do?",
            options: [
              {
                id: "upload-exclusion-list",
                label: "Upload the CRM pipeline list to Matched Audiences and exclude them from the campaign",
                verdict: "optimal",
                outcome: "Future weeks stop spending $9+ clicks on people sales is already talking to, and net-new-lead volume improves without a budget increase.",
                why:
                  "The lesson names this exact mistake: 'Forgetting to exclude existing customers and pipeline contacts... you are paying $10+ per click. Showing ads to people already in your sales process wastes budget.'",
                lessonRef: "Other mistakes to avoid: exclude existing customers and pipeline contacts via Matched Audiences, refresh exclusion lists monthly",
                nextStageId: "week4-seasonal",
              },
              {
                id: "ignore-overlap",
                label: "Leave it as is, 15% of clicks isn't a large share",
                verdict: "costly",
                outcome: "The overlap continues for the remaining 4 weeks, quietly wasting a growing share of an already-expensive CPC.",
                why: "At $9+ per click, even a 15% overlap compounds into real wasted spend across a 6-week flight, exactly the scenario the lesson calls out by name.",
                lessonRef: "Other mistakes to avoid: 'Showing ads to people already in your sales process wastes budget and can annoy active prospects'",
                nextStageId: "week4-seasonal-costly",
              },
            ],
          },
        },
        {
          stageId: "week2-exclusions-costly",
          label: "Week 2, still paying broad-audience prices",
          elapsed: "Week 2 of 6",
          concept: "Excluding existing customers and pipeline contacts from paid audiences",
          lessonAnchor: "other-mistakes-to-avoid",
          situation:
            "CPC is still elevated from the unresolved targeting issue, and the click report also shows clicks from active pipeline contacts.",
          dashboard:
            "Sponsored Content, broad audience (420,000) · Week 2 of 6\n\n  CPC             $13.80\n  Clicks from known pipeline contacts   9 (of 58 total clicks)\n  Spend           $2,890 of $6,000",
          spendToDate: "$2,890 of $6,000",
          budgetRemaining: "$3,110",
          decision: {
            prompt: "Two compounding problems now: broad audience CPC and pipeline overlap. What's the priority fix?",
            options: [
              {
                id: "fix-both",
                label: "Narrow the audience with seniority filters AND upload the pipeline exclusion list in the same update",
                verdict: "acceptable",
                outcome: "Both problems get fixed at once, though the campaign has already burned nearly half its budget under the broad, unexcluded setup.",
                why: "Correct fix, applied a week later than it should have been, so the remaining 4 weeks have less runway than the disciplined path would have left.",
                lessonRef: "Common Mistakes + Other mistakes to avoid: precision targeting and exclusion lists",
                nextStageId: "week4-seasonal",
              },
              {
                id: "fix-neither",
                label: "Keep the audience and click pattern as is, focus on the creative instead",
                verdict: "costly",
                outcome: "Both the CPC and the pipeline waste continue compounding through the campaign's midpoint.",
                why: "Creative changes don't address either root cause the lesson identifies here: audience breadth and missing exclusions.",
                lessonRef: "Common Mistakes: targeting too broad; Other mistakes to avoid: pipeline exclusions",
                nextStageId: "week4-seasonal-costly",
              },
            ],
          },
        },
        {
          stageId: "week4-seasonal",
          label: "Week 4, the Q4 question",
          elapsed: "Week 4 of 6",
          concept: "Seasonal cost-per-MQL patterns by quarter",
          lessonAnchor: "seasonal-patterns-timing-matters",
          situation:
            "It's now late October. MQL efficiency has started softening as the quarter progresses, and $2,100 of the $6,000 budget remains for the final two weeks.",
          dashboard:
            "Narrowed + excluded audience · Week 4 of 6\n\n  CPC             $8.40\n  MQLs this week  4 (down from 7 in week 2)\n  Spend           $3,900 of $6,000\n  Quarter         Q4 (Oct-Dec)",
          spendToDate: "$3,900 of $6,000",
          budgetRemaining: "$2,100",
          decision: {
            prompt: "MQL volume is softening as Q4 progresses. What do you do with the remaining $2,100?",
            options: [
              {
                id: "shift-to-awareness",
                label: "Shift the remaining budget toward brand-awareness content for now, and plan the next hard lead-gen push for Q1",
                verdict: "optimal",
                outcome: "Budget isn't wasted chasing a seasonal efficiency dip, and the account enters Q1, the cheapest and fastest-converting quarter, ready to push hard.",
                why:
                  "The lesson states Q4 has the worst MQL efficiency despite the highest budget share industry-wide, while Q1 has the lowest CPCs ($10.48 average) and fastest sales cycles (24 days vs 68 in Q4).",
                lessonRef: "Seasonal Patterns: 'Save the heavy Q4 push for brand awareness, not lead generation'; Q1 has the fastest sales cycles",
                nextStageId: "week6-final",
              },
              {
                id: "push-harder-q4",
                label: "Push harder on lead-gen now to try to hit the original MQL target before quarter-end",
                verdict: "costly",
                outcome: "Spend accelerates into the quarter's weakest efficiency window, and cost-per-MQL rises further without recovering the volume.",
                why: "The lesson explicitly identifies Q4 as the worst-efficiency quarter, competing hard here fights the seasonal pattern instead of working with it.",
                lessonRef: "Seasonal Patterns: Q4 'highest budget share... but the worst MQL efficiency. Companies are competing hard, prices rise'",
                nextStageId: "week6-final-costly",
              },
              {
                id: "pause-everything",
                label: "Pause the campaign entirely until Q1",
                verdict: "acceptable",
                outcome: "No further waste, but the campaign also loses continuity and the account has to relaunch cold in January instead of arriving with momentum.",
                why: "This avoids the Q4 inefficiency but overcorrects; the lesson's advice is to redirect Q4 spend toward awareness, not to go dark entirely.",
                lessonRef: "Seasonal Patterns: 'Save the heavy Q4 push for brand awareness, not lead generation'",
                nextStageId: "week6-final",
              },
            ],
          },
        },
        {
          stageId: "week4-seasonal-costly",
          label: "Week 4, compounding an already-slow start",
          elapsed: "Week 4 of 6",
          concept: "Seasonal cost-per-MQL patterns by quarter",
          lessonAnchor: "seasonal-patterns-timing-matters",
          situation:
            "The campaign is still catching up from its slow start, and MQL efficiency is now also softening with the quarter.",
          dashboard:
            "Narrowed + excluded audience (fixed in week 2) · Week 4 of 6\n\n  CPC             $9.60\n  MQLs this week  2\n  Spend           $4,400 of $6,000\n  Quarter         Q4 (Oct-Dec)",
          spendToDate: "$4,400 of $6,000",
          budgetRemaining: "$1,600",
          decision: {
            prompt: "Only $1,600 remains and MQL efficiency is falling with the quarter. What now?",
            options: [
              {
                id: "shift-to-awareness-recover",
                label: "Redirect the remaining budget to brand-awareness content and plan the real push for Q1",
                verdict: "acceptable",
                outcome: "Further waste is avoided, though the campaign's earlier slow start means this flight's total lead output stays below what a clean run would have produced.",
                why: "Still the right seasonal call, just made with less remaining budget than the disciplined path would have had left.",
                lessonRef: "Seasonal Patterns: 'Save the heavy Q4 push for brand awareness'",
                nextStageId: "week6-final",
              },
              {
                id: "push-harder-recover",
                label: "Push the remaining $1,600 hard into lead-gen to try to close the gap",
                verdict: "costly",
                outcome: "The last of the budget goes into the quarter's worst-efficiency window, producing the fewest MQLs per dollar of the entire flight.",
                why: "Fighting a known seasonal pattern with the smallest remaining budget is the least efficient possible use of what's left.",
                lessonRef: "Seasonal Patterns: Q4 worst MQL efficiency",
                nextStageId: "week6-final-costly",
              },
            ],
          },
        },
        {
          stageId: "week6-final",
          label: "Week 6, the final CPL verdict",
          elapsed: "Week 6 of 6",
          concept: "Maximum acceptable CPL using the ACV formula",
          lessonAnchor: "is-linkedin-worth-the-cost",
          situation:
            "The flight has ended. Zendesk's enterprise support tier has a $30,000 ACV and a 5% lead-to-close rate. Final numbers are in.",
          dashboard:
            "Final report · 6-week flight\n\n  Total MQLs        22\n  Total spend        $5,940 of $6,000\n  Realized CPL       $270\n  ACV                $30,000\n  Lead-to-close rate 5%",
          spendToDate: "$5,940 of $6,000",
          budgetRemaining: "$60",
          decision: {
            prompt: "Apply the maximum-CPL formula and decide whether this channel earns a bigger budget next quarter.",
            options: [
              {
                id: "calculate-and-recommend",
                label: "Calculate max CPL ($30,000 x 5% x 0.2 = $300), compare it to the realized $270 CPL, and recommend continuing with an increased budget",
                verdict: "optimal",
                outcome: "The realized $270 CPL sits under the $300 ceiling, confirming the channel is profitable, and the recommendation is backed by the lesson's own formula.",
                why:
                  "This applies the lesson's formula exactly as written and reaches a defensible, numbers-based recommendation rather than a gut call.",
                lessonRef: "Is LinkedIn Worth the Cost?: 'Maximum acceptable CPL = ACV x Lead-to-close rate x 0.2'",
                nextStageId: "end",
              },
              {
                id: "judge-by-cpc-alone",
                label: "Judge the channel by comparing its CPC to Meta's CPC and recommend cutting it since LinkedIn cost 5-10x more per click",
                verdict: "costly",
                outcome: "The channel gets recommended for a budget cut despite being clearly profitable on the metric that actually matters, cost per qualified lead against deal value.",
                why:
                  "The lesson is explicit that LinkedIn's premium CPC is expected and the right comparison is CPL against ACV, not CPC against a cheaper platform selling a different kind of product.",
                lessonRef: "Is LinkedIn Worth the Cost?: 'If LinkedIn's CPL for your industry is below $120 [the max], the channel can be profitable'",
                nextStageId: "end",
              },
              {
                id: "no-formula-gut-call",
                label: "Skip the formula and recommend continuing because 22 MQLs feels like a reasonable result",
                verdict: "acceptable",
                outcome: "The recommendation happens to be directionally correct, but without the formula there's no way to know how much budget increase the channel could actually absorb profitably.",
                why: "The lesson provides the exact formula for this decision. Reaching the same answer without it works by luck, not by process, and won't scale to setting next quarter's budget.",
                lessonRef: "Is LinkedIn Worth the Cost?: the ACV x lead-to-close x 0.2 formula",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "week6-final-costly",
          label: "Week 6, closing out a flight that fought the calendar",
          elapsed: "Week 6 of 6",
          concept: "Maximum acceptable CPL using the ACV formula",
          lessonAnchor: "is-linkedin-worth-the-cost",
          situation:
            "The flight ends having pushed hard into Q4's weak window. Final numbers are weaker than the disciplined path would have produced.",
          dashboard:
            "Final report · 6-week flight\n\n  Total MQLs        14\n  Total spend        $6,000 of $6,000\n  Realized CPL       $429\n  ACV                $30,000\n  Lead-to-close rate 5%",
          spendToDate: "$6,000 of $6,000",
          budgetRemaining: "$0",
          decision: {
            prompt: "Apply the maximum-CPL formula to this weaker outcome. What's the honest recommendation?",
            options: [
              {
                id: "calculate-and-flag",
                label: "Calculate max CPL ($300), note the realized $429 CPL exceeds it, and recommend fixing targeting/exclusions/seasonal timing before the next flight rather than abandoning the channel",
                verdict: "optimal",
                outcome: "The exec summary correctly diagnoses that this flight's execution, not LinkedIn as a channel, produced the unprofitable CPL, and next quarter's setup avoids the same mistakes.",
                why: "The formula shows this specific flight lost money, but the root causes (broad audience, no exclusions, fighting Q4) are fixable process issues covered earlier in this same simulation, not evidence LinkedIn doesn't work for this product.",
                lessonRef: "Is LinkedIn Worth the Cost?: the max-CPL formula, applied honestly even to a weak result",
                nextStageId: "end",
              },
              {
                id: "abandon-channel",
                label: "Recommend cutting LinkedIn entirely based on this flight's $429 CPL",
                verdict: "costly",
                outcome: "A channel that could be profitable under correct execution gets abandoned based on one flight run with three compounding setup mistakes.",
                why: "This confuses a channel problem with an execution problem. The earlier stages in this same campaign show exactly what went wrong and how it's fixable.",
                lessonRef: "Is LinkedIn Worth the Cost?: the formula is meant to guide setup and budget decisions, not serve as a one-flight verdict on the channel",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$1,000",
        minDurationDays: 21,
        setupSteps: [
          "Build a Sponsored Content campaign in LinkedIn Campaign Manager with a layered audience stack (industry, company size, seniority, job function) forecasted in the 50,000-300,000 range",
          "Upload your CRM's pipeline list to Matched Audiences and exclude it before launch",
          "Calculate your own maximum acceptable CPL using your real ACV and lead-to-close rate before setting a CPL bid target",
        ],
        checkInSchedule: "Check the dashboard weekly, comparing audience size, CPC, and MQL volume against this simulation's week-1, week-2, and week-4 checkpoints.",
      },
      toolStack: {
        free: [
          {
            toolName: "LinkedIn Campaign Manager",
            role: "Read the simulated dashboard metrics and, for the live-track extension, build the real campaign structure",
            why: "Account creation and the audience-forecast tool are free before any spend is committed",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Run the maximum-CPL formula at each budget checkpoint",
            why: "No paid tool needed for the calculation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 4-checkpoint decision log stating which action was taken at each stage, the lesson passage that justified it, and a final CPL-formula-backed go/no-go recommendation.",
      sampleOutput:
        "Adyen enterprise-merchant campaign, decision log (excerpt)\n\nWEEK 1: Narrowed audience from 380,000 to 104,000 using seniority + job-function filters.\nWEEK 2: Uploaded pipeline exclusion list to Matched Audiences.\nWEEK 4: Redirected remaining Q4 budget to awareness content, planned Q1 lead-gen push.\nWEEK 6: Max CPL = $50,000 x 4% x 0.2 = $400. Realized CPL $310. Recommended increased Q1 budget.",
      successCriteria: [
        "Narrows the audience in week 1 rather than raising budget or switching bid types against a broad audience",
        "Uploads the pipeline exclusion list once overlap is visible in week 2",
        "Redirects Q4 spend toward awareness rather than pushing harder into the quarter's weak MQL efficiency window",
        "Applies the ACV x lead-to-close x 0.2 formula correctly at the final checkpoint and bases the recommendation on the comparison to realized CPL",
      ],
      portfolioReady: true,
      stretch:
        "Run the live-track extension: build a real $1,000+, 21-day LinkedIn ABM test with a properly narrowed and excluded audience, and compare your own weekly decisions against this simulation's optimal path.",
    },
  ],

  "tiktok-ads": [
    {
      id: "tiktok-hook-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Hook Rate Autopsy: Diagnosing Why 4 TikTok Ad Openers Would Flop",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 4 synthetic TikTok ad opening scripts and configs, correctly identify which would fail the Hook Rate benchmark, the native-creative standard, or the campaign-structure rules, without seeing performance data first.",
      companyId: "rxbar",
      scenario:
        "You're a freelance TikTok ads consultant reviewing draft creative and ad group setups for RXBAR before they go live. Production budget is already spent; you only get to flag issues before launch.",
      brief:
        "Read each specimen cold. Decide pass/fail against the lesson's hook, native-creative, and campaign-structure standards, then check your calls against the answer key.",
      mode: "teardown",
      conceptsCovered: [
        "The Hook: Your Most Important Asset",
        "What Makes TikTok Ads Different",
        "Campaign Structure That Works",
        "Setting Up Spark Ads",
      ],
      teardownItems: [
        {
          itemId: "script-1-logo-reveal",
          specimen:
            "SCRIPT 1 — 'Protein On The Go'\n0:00-0:03  Slow zoom on RXBAR logo, brand jingle plays\n0:03-0:08  Voiceover: 'Introducing RXBAR, the protein bar made with real ingredients'\n0:08-0:15  Product shot rotating on white background\n0:15-0:30  Text overlay: '6 ingredients or less. Available now.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Would this opener survive TikTok's Hook Rate and native-creative standards? List every defect you find.",
          answerKey: [
            {
              defect:
                "First 3 seconds is a logo/jingle, not a hook, gives zero reason to keep watching",
              severity: "critical",
              whyItMatters:
                "Hook Rate measures viewers who watch past 3 seconds; a logo reveal has no hook at all, so hook rate lands well under the 15% failure floor",
              lessonRef:
                "The Hook: Your Most Important Asset — 'your first two seconds must give a reason to keep watching'",
              owner: "you",
            },
            {
              defect:
                "White-background product rotation and a brand jingle read as a commercial, not a native TikTok post",
              severity: "critical",
              whyItMatters:
                "TikTok users swipe within a second of anything that feels produced or corporate, and the algorithm itself deprioritizes low-completion ads",
              lessonRef:
                "What Makes TikTok Ads Different — 'the most expensive-looking content often performs worst'",
              owner: "you",
            },
          ],
          distractors: [
            "Uses on-screen text overlay for the offer, which is a normal, encouraged pattern, not a defect",
            "Runs 30 seconds total, which is within normal range for In-Feed ads",
          ],
          partialCredit: true,
        },
        {
          itemId: "script-2-mid-action-hook",
          specimen:
            "SCRIPT 2 — 'I Ate 30 Protein Bars So You Don't Have To'\n0:00-0:02  Handheld phone footage, creator already mid-bite, chewing, slightly shaky camera\n0:02-0:04  Text overlay pops in: 'Rating every RXBAR flavor (ranked worst to best)'\n0:04-0:20  Creator tastes and reacts to 5 flavors, casual tone, trending audio under it\n0:20-0:28  'Link in bio, my #1 pick is restocked'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Check this opener against the hook and native-creative standards. Are there any remaining issues even though the hook itself works?",
          answerKey: [
            {
              defect:
                "None in the opening 3 seconds, it starts mid-action with movement already happening, matching the recommended hook pattern",
              severity: "cosmetic",
              whyItMatters:
                "This is the exact pattern the lesson recommends; flagging it as a problem would be a false positive",
              lessonRef:
                "The Hook: Your Most Important Asset — 'start mid-action with movement and sound already happening'",
              owner: "you",
            },
            {
              defect:
                "No clear call-to-action tied to a trackable link/pixel event before the video ends",
              severity: "moderate",
              whyItMatters:
                "Without a pixel-trackable CTA moment, TikTok Pixel conversion reporting has nothing clean to attribute the click to",
              lessonRef:
                "Setting Up Spark Ads — 'destination URL, TikTok Pixel tracking, and conversion reporting all work exactly as they would with a standard In-Feed ad'",
              owner: "developer",
            },
          ],
          distractors: [
            "Uses trending audio, which is encouraged, not a defect",
            "Shaky handheld camera work, which is the intended lo-fi native look, not a defect",
          ],
          partialCredit: true,
        },
        {
          itemId: "adgroup-3-over-targeted",
          specimen:
            "AD GROUP CONFIG — 'RXBAR Retarget Push'\nAudience: Interests (Health & Fitness, Protein Supplements) + Behavior (Recently viewed food delivery apps) + Lookalike (1% of website purchasers, US only)\nEstimated audience size: 180,000\nCreative variations uploaded: 1\nBudget: $50/day\nBidding: Lowest Cost",
          specimenSource: "synthetic-realistic",
          prompt: "Review this ad group setup before it launches. What would you flag?",
          answerKey: [
            {
              defect:
                "Interest + behavior + lookalike stacked together shrinks the audience to 180,000, far too narrow for the algorithm to learn from",
              severity: "critical",
              whyItMatters:
                "Excessively narrow audiences prevent system learning and drive up CPMs without improving conversion rates on TikTok specifically, unlike Meta",
              lessonRef:
                "Campaign Structure That Works — 'Excessively narrow audiences prevent system learning and drive up CPMs without improving conversion rates'",
              owner: "you",
            },
            {
              defect: "Only 1 creative variation uploaded, below TikTok's recommended minimum",
              severity: "critical",
              whyItMatters:
                "TikTok recommends 3-5 creative variations per ad group as how the algorithm learns; one variation gets exhausted and stale fast",
              lessonRef:
                "Campaign Structure That Works — 'a minimum of 3-5 creative variations per ad group'",
              owner: "you",
            },
          ],
          distractors: [
            "Uses Lowest Cost bidding, a standard, reasonable default bidding strategy, not a defect",
            "$50/day budget, a modest starting budget is not itself a problem",
          ],
          partialCredit: true,
        },
        {
          itemId: "script-4-spark-ad-missing-auth",
          specimen:
            "SPARK AD CANDIDATE — Organic post from @rxbar_official, posted 6 days ago\nOrganic performance: 62,000 likes, 340 comments, 1,900 shares, no paid spend yet\nProposed action: Authorize as Spark Ad, allocate 80% of next month's budget to boosting this post, remaining 20% to new In-Feed creative",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a defect-free plan, or is something still missing before launch?",
          answerKey: [
            {
              defect:
                "Plan is sound in principle (boosting an already-validated organic winner via Spark Ads, 80/20 split) but is missing the authorization-code step before it can run",
              severity: "moderate",
              whyItMatters:
                "Spark Ads require the creator or account owner to generate an authorization code in the TikTok app and enter it in Ads Manager before the post can be boosted",
              lessonRef:
                "Setting Up Spark Ads — 'the creator...generates a unique code...you enter that code in TikTok Ads Manager'",
              owner: "you",
            },
          ],
          distractors: [
            "Allocating 80% of budget to Spark Ads and 20% to In-Feed, matches the benchmark split experienced advertisers use, not a defect",
            "Boosting a post that already has organic traction before spending, matches the 'earn before you spend' approach, not a defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "TikTok Ads",
            role: "Reference how a real Ads Manager campaign, ad group, and Spark Ad authorization flow is structured",
            why: "It's the platform every specimen in this teardown is modeled on, free to use with just an ad account",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each specimen's defects and severity ratings",
            why: "Free, sufficient for a 4-item teardown log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A pass/fail defect log across all 4 specimens, each defect tagged by severity, ready to hand to the creative team before spend starts.",
      sampleOutput:
        "Halo Top, Spark Ad creative audit (excerpt)\n\nSCRIPT: 'Pint Nutrition Facts in 3 Seconds'\nHook (0:00-0:03): PASS — opens on a spoon scraping the bottom of an empty pint, no logo\nNative fit: PASS — vertical, handheld, trending audio\nCTA/Pixel: FLAG — no trackable link moment before video ends\nVerdict: Launch-ready pending CTA fix",
      successCriteria: [
        "Correctly identifies both critical defects in Script 1 (no hook, corporate feel)",
        "Does not flag Script 2's mid-action opener as a defect (recognizes the correct pattern)",
        "Flags the over-targeted ad group's narrow audience and single-creative-variation issues",
        "Catches the missing Spark Ad authorization step in Script 4",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite Script 1's opening 3 seconds using one of the 2025 hook patterns from the lesson.",
    },
    {
      id: "tiktok-spark-ads-spend-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 14-Day Spend Simulation: Scaling a Swiggy TikTok Campaign Without Burning Budget",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a simulated 14-day TikTok campaign dashboard, make the same budget, targeting, and creative-refresh calls a live media buyer would, without risking real ad spend.",
      companyId: "swiggy",
      scenario:
        "You're running paid social for Swiggy's TikTok push to drive food-delivery app installs across a ₹1,40,000, 14-day test budget.",
      brief:
        "Read each stage's dashboard, diagnose the signal against the lesson's benchmarks, and make the call. A wrong call routes you into a worse dashboard on the next stage, exactly like it would in a real ad account.",
      mode: "simulation",
      conceptsCovered: [
        "The Hook: Your Most Important Asset",
        "Campaign Structure That Works",
        "How the Auction Works",
      ],
      stages: [
        {
          stageId: "day2-weak-hook-rate",
          label: "Day 2, first dashboard check",
          elapsed: "Day 2 of 14",
          concept: "Diagnosing a weak Hook Rate before it burns budget",
          lessonAnchor: "the-hook-your-most-important-asset",
          situation:
            "You launched an In-Feed campaign 2 days ago for the Swiggy app-install push. First real look at the dashboard.",
          dashboard:
            "Swiggy App Installs · In-Feed campaign · Day 2 of 14\n\n  Impressions   142,000\n  Hook Rate (3-sec view)   12%\n  CTR   0.4%\n  Installs   38\n  CPM   ₹680\n  Frequency   1.3x",
          spendToDate: "₹19,300 of ₹1,40,000",
          budgetRemaining: "₹1,20,700",
          decision: {
            prompt:
              "Hook Rate is sitting at 12%, below the lesson's 15% failure line, and CTR is weak. What do you do?",
            options: [
              {
                id: "swap-creative",
                label:
                  "Pause the ad, cut a new hook using a 2025 pattern (open with the result, not the process), relaunch",
                verdict: "optimal",
                outcome:
                  "Hook Rate climbs to 34% within 48 hours and CPM starts dropping as engagement signals kick in.",
                why: "Below 15% means you're paying for impressions nobody watches; the fix is the opening 3 seconds, not the targeting or budget.",
                lessonRef:
                  "The Hook: Your Most Important Asset — 'Below 15% means you are paying for impressions that nobody watches'",
                nextStageId: "day6-scaling-decision",
              },
              {
                id: "wait-and-see",
                label: "Leave it running a few more days, 2 days might not be enough data",
                verdict: "acceptable",
                outcome:
                  "You gather 2 more days of low-Hook-Rate data before acting, wasting some spend on a creative you'll replace anyway.",
                why: "Two days is a small sample, but a Hook Rate this far under the 15% floor is already a clear enough signal to act on, waiting only compounds wasted spend.",
                lessonRef:
                  "The Hook: Your Most Important Asset — Hook Rate is a direct, fast-reading diagnostic, not one that needs a full 14-day sample",
                nextStageId: "day6-scaling-decision",
              },
              {
                id: "narrow-audience",
                label:
                  "Tighten targeting to app-category interests plus a lookalike, assuming the wrong people are seeing it",
                verdict: "costly",
                outcome:
                  "CPM jumps 40% and Hook Rate stays flat at 13%, the audience was never the problem.",
                why: "A weak Hook Rate is a creative problem, not a targeting problem; narrowing the audience on TikTok removes the algorithm's room to learn and raises costs without fixing the actual issue.",
                lessonRef:
                  "Campaign Structure That Works — 'Excessively narrow audiences prevent system learning and drive up CPMs without improving conversion rates'",
                nextStageId: "day6-narrowed-recovery",
              },
            ],
          },
        },
        {
          stageId: "day6-scaling-decision",
          label: "Day 6, scaling check",
          elapsed: "Day 6 of 14",
          concept: "Deciding whether to scale broad or add creative variations",
          lessonAnchor: "campaign-structure-that-works",
          situation:
            "Hook Rate has recovered. The dashboard now shows a healthier campaign, but only 2 creative variations are running.",
          dashboard:
            "Swiggy App Installs · In-Feed campaign · Day 6 of 14\n\n  Hook Rate   34%\n  CTR   1.3%\n  Installs   410\n  CPM   ₹410\n  Frequency   1.9x\n  Active creative variations   2",
          spendToDate: "₹58,000 of ₹1,40,000",
          budgetRemaining: "₹82,000",
          decision: {
            prompt:
              "Performance is healthy but frequency is climbing toward the 2.5x fatigue threshold, and you're running only 2 creatives. What's the move?",
            options: [
              {
                id: "add-variations",
                label: "Brief 2-3 more creative variations this week, keep the audience broad",
                verdict: "optimal",
                outcome:
                  "By Day 10 you have 5 active variations, frequency stays under 2x, and Hook Rate holds above 30%.",
                why: "TikTok recommends a minimum of 3-5 creative variations per ad group; below that, the algorithm exhausts your best creative and frequency spikes.",
                lessonRef:
                  "Campaign Structure That Works — 'TikTok recommends a minimum of 3-5 creative variations per ad group...it is how the algorithm learns'",
                nextStageId: "day10-final-decision",
              },
              {
                id: "hold-steady",
                label: "Keep the current 2 creatives running, revisit next week",
                verdict: "acceptable",
                outcome:
                  "Performance holds for a few more days but frequency creeps toward 2.4x with no new creative queued.",
                why: "Not wrong yet, but the lesson's 7-10 day creative lifespan means this campaign is on a countdown with no replacement ready.",
                lessonRef:
                  "Campaign Structure That Works — 'Average creative lifespan on TikTok is 7-10 days before performance degrades'",
                nextStageId: "day10-final-decision",
              },
              {
                id: "increase-budget",
                label: "Increase daily budget 50% to capture more of the good performance while it lasts",
                verdict: "costly",
                outcome:
                  "Frequency accelerates past 2.5x within 3 days on the same 2 creatives, and conversions start dropping before Day 10.",
                why: "More budget on the same underlying creative pool just burns through your audience faster; it doesn't fix the coming fatigue problem.",
                lessonRef:
                  "Campaign Structure That Works — 'At a frequency above 2.5x...conversions drop 30-40%'",
                nextStageId: "day10-final-decision",
              },
            ],
          },
        },
        {
          stageId: "day6-narrowed-recovery",
          label: "Day 6, recovering from the narrowing mistake",
          elapsed: "Day 6 of 14",
          concept: "Recovering from an over-targeting mistake",
          lessonAnchor: "campaign-structure-that-works",
          situation:
            "You narrowed the audience on Day 2. It's Day 6 and CPM is still elevated with flat conversions.",
          dashboard:
            "Swiggy App Installs · In-Feed campaign · Day 6 of 14\n\n  Hook Rate   31% (creative was fixed too)\n  CTR   0.9%\n  Installs   190\n  CPM   ₹690\n  Frequency   2.1x\n  Audience size   ~210,000 (narrowed)",
          spendToDate: "₹71,000 of ₹1,40,000",
          budgetRemaining: "₹69,000",
          decision: {
            prompt:
              "Hook Rate recovered once you fixed the creative, but CPM never came back down after narrowing the audience. What now?",
            options: [
              {
                id: "revert-broad",
                label:
                  "Revert to broad targeting (18-45, country-level, no interest stack), let the algorithm re-explore",
                verdict: "optimal",
                outcome:
                  "CPM drops back to ₹420 within 2 days as the algorithm regains room to find efficient placements.",
                why: "The platform's algorithm is designed to find the right people if you give it room to explore; reverting restores that.",
                lessonRef:
                  "Campaign Structure That Works — 'start broad, use strong creative as your primary filter, and let the algorithm do the targeting work'",
                nextStageId: "day10-final-decision",
              },
              {
                id: "narrow-further",
                label: "Narrow further with a 1% lookalike, assuming the audience still isn't precise enough",
                verdict: "costly",
                outcome:
                  "CPM climbs to ₹910 and the campaign burns the remaining budget on an audience too small to deliver installs at pace.",
                why: "Doubling down on narrow targeting compounds the exact mistake that caused the elevated CPM in the first place.",
                lessonRef:
                  "Campaign Structure That Works — 'a broad audience...will consistently outperform a hyper-targeted audience'",
                nextStageId: "day10-final-decision",
              },
            ],
          },
        },
        {
          stageId: "day10-final-decision",
          label: "Day 10, closing out the flight",
          elapsed: "Day 10 of 14",
          concept: "Closing out the test budget against the 14-day benchmark",
          lessonAnchor: "how-the-auction-works",
          situation: "Four days of budget remain. Time to decide how to finish the flight.",
          dashboard:
            "Swiggy App Installs · In-Feed campaign · Day 10 of 14\n\n  Hook Rate   29%\n  CTR   1.1%\n  Installs (cumulative)   890\n  Cost per install   ₹142\n  CPM   ₹455\n  Frequency   2.2x",
          spendToDate: "₹1,08,000 of ₹1,40,000",
          budgetRemaining: "₹32,000",
          decision: {
            prompt: "Cost per install is healthy and there's ₹32,000 left. How do you finish the flight?",
            options: [
              {
                id: "steady-finish",
                label: "Keep pacing as-is through Day 14, queue next month's creative refresh now",
                verdict: "optimal",
                outcome:
                  "The campaign finishes at a stable ₹138 cost per install and you already have new creative briefed before fatigue sets in again.",
                why: "Nothing in the dashboard signals a problem; the discipline is queuing the next creative refresh before the current batch ages past its 7-10 day lifespan.",
                lessonRef:
                  "Campaign Structure That Works — 'High-spend accounts need 3-5 new creative concepts per week'",
                nextStageId: "day10-final-decision",
              },
              {
                id: "front-load-spend",
                label: "Push the remaining ₹32,000 into the last 2 days to 'use up the budget'",
                verdict: "costly",
                outcome:
                  "Frequency spikes past 2.6x in the final 2 days and cost per install rises to ₹210 as the same audience sees the ad repeatedly.",
                why: "Compressing spend into fewer days raises frequency faster than the audience or creative can absorb, exactly the 2.5x threshold the lesson warns about.",
                lessonRef:
                  "The Hook: Your Most Important Asset — frequency above 2.5x drops conversions 30-40%",
                nextStageId: "day10-final-decision",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "TikTok Ads",
            role: "Read the campaign dashboard metrics simulated in each stage and locate the real Hook Rate, frequency, and CPM columns",
            why: "It's the platform this entire simulation is modeled on, free to use with just an ad account",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each stage's decision and reasoning to compare against the answer key at the end",
            why: "Free, simple decision log",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A day-by-day decision log (4 calls) with your reasoning, compared against the simulation's optimal path at the end.",
      sampleOutput:
        "Zomato, TikTok spend simulation log (excerpt)\n\nDay 2: Hook Rate 11% → swapped creative (optimal)\nDay 6: 4 variations queued, held broad audience (optimal)\nDay 10: kept pacing steady, queued next refresh (optimal)\nFinal CPI: ₹131, 14% better than account average",
      successCriteria: [
        "Diagnoses the Day 2 weak Hook Rate as a creative problem, not a targeting problem",
        "Does not narrow the audience in response to a Hook Rate or CPM problem",
        "Recognizes the 3-5 creative variation minimum before frequency crosses 2.5x",
        "Reaches Day 14 without a costly decision in the final stage",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation choosing the costly option at every stage and note exactly where the numbers diverge from the optimal path.",
    },
  ],
  "programmatic-advertising": [
    {
      id: "programmatic-publisher-report-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Placement Audit: Cleaning Up a Programmatic Publisher Report",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 20-row publisher-level performance export, apply the lesson's brand-safety and waste-reduction framework to decide which placements to keep, cut, or whitelist.",
      companyId: "halo-top",
      scenario:
        "You manage paid media for Halo Top's programmatic display retargeting campaign, which has been running open-web for 3 months with no manual review.",
      brief:
        "Read the supplied publisher report, flag the waste and brand-safety risk, and build a whitelist recommendation.",
      mode: "diagnostic",
      conceptsCovered: ["How It Works", "Common Mistakes"],
      steps: [
        {
          stepId: "step-1-cpm-outliers",
          concept: "How It Works",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's RTB sequence ends in a second-price auction: the winner pays the second-highest bid plus one cent, with a floor price as the publisher's minimum. A placement's real CPM should track close to the account average, not spike far above it.",
          question:
            "Given a 20-row export of CPM by publisher domain, which rows are CPM outliers worth investigating first?",
          toolName: "Google Sheets",
          where: "Import publisher-report.csv, sort by CPM descending",
          procedure: [
            "Import publisher-report.csv and freeze row 1",
            "Sort by CPM descending",
            "Flag any publisher CPM more than 2x the account average of ₹340",
            "Cross-check flagged rows against their viewability and conversion columns",
          ],
          outputSample:
            "publisher-report.csv (sorted, excerpt)\n\nadnetwork-xyz.com    CPM ₹890   Viewability 31%   Conversions 0\nquiz-clickbait.net   CPM ₹710   Viewability 24%   Conversions 0\ntimesofindia.com     CPM ₹410   Viewability 68%   Conversions 12\nhindustantimes.com   CPM ₹365   Viewability 71%   Conversions 9",
          healthy:
            "CPM outliers correlate with low viewability and zero conversions, a fraud or waste signal.",
          unhealthy:
            "Treating a high-CPM, high-viewability, high-converting publisher as waste just because the CPM number looks high.",
          interpret:
            "CPM alone doesn't identify waste, it's CPM combined with low viewability and zero conversions that flags a placement worth cutting.",
          soWhat: [
            {
              symptom: "Two publishers show CPM over 2x average with 0 conversions and under 35% viewability",
              action: "Add both domains to the exclusion list before the next flight",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-whitelist-decision",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's JPMorgan Chase example cut programmatic buying from roughly 400,000 sites down to a ~5,000-domain whitelist with little to no change in cost or reach, showing most open-web inventory adds cost and risk without adding real reach.",
          question:
            "Of the 20 publishers in this export, only 6 have both viewability above 60% and at least 1 conversion. What do you recommend for the other 14?",
          toolName: "Google Sheets",
          where: "Same publisher-report.csv, add a Recommendation column",
          procedure: [
            "Mark the 6 publishers meeting the >60% viewability + 1+ conversion bar as 'Whitelist'",
            "Mark publishers with 0 conversions and any brand-safety flag as 'Exclude'",
            "Mark the remaining publishers with some signal but below the bar as 'Monitor, do not scale yet'",
          ],
          outputSample:
            "Recommendation summary\n\nWhitelist (6):  timesofindia.com, hindustantimes.com, ndtv.com, ...\nExclude (9):    adnetwork-xyz.com, quiz-clickbait.net, ...\nMonitor (5):    remaining mid-performing domains",
          healthy:
            "A tight, mostly-whitelisted buy that concentrates spend on proven publishers, mirroring the JPMorgan pattern.",
          unhealthy:
            "Leaving all 20 publishers active because 'more inventory means more reach', the exact set-and-forget mistake the lesson warns about.",
          interpret:
            "Cutting weak inventory rarely costs you real reach, most of it was adding cost and risk, not incremental audience.",
          soWhat: [
            {
              symptom: "14 of 20 publishers show weak or zero performance signal",
              action: "Move to a whitelist-first buying strategy and re-expand only from verified performance data",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-verification-tooling",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson recommends setting brand safety filters, using a verified ad verification tool, checking placement reports weekly, and excluding low-quality categories from day one.",
          question:
            "The export has no brand-safety or fraud-verification column at all. What's missing from the campaign setup itself, not just this report?",
          toolName: "Google Sheets",
          where: "Publisher-report.csv, note the missing column",
          procedure: [
            "Confirm there is no viewability-verification or fraud-flag column sourced from a third-party verification tool",
            "Note this as a setup gap, not just a reporting gap",
            "Recommend adding a verified ad-verification integration before the next flight",
          ],
          outputSample:
            "Setup gap log\n\nMissing: third-party brand-safety/fraud verification (e.g. IAS, DoubleVerify)\nCurrent state: viewability numbers self-reported by ad server only\nRisk: fraud and unsafe placements have no independent check",
          healthy: "A verification tool feeds an independent viewability/fraud signal into every future report.",
          unhealthy: "Relying only on the DSP's self-reported numbers with no independent brand-safety check.",
          interpret:
            "Self-reported delivery numbers can't catch fraud or brand-safety issues, that requires an independent verification layer.",
          soWhat: [
            {
              symptom: "No independent verification column exists in the report",
              action: "Add a verified ad-verification tool to the stack before the next campaign flight",
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
            role: "Sort, filter, and tag the publisher export",
            why: "Free, handles a 20-row export easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 20-row publisher report tagged Whitelist/Exclude/Monitor, plus a one-line note on the missing verification tooling.",
      sampleOutput:
        "Grab, programmatic publisher audit (excerpt)\n\nWhitelist (7): straitstimes.com, channelnewsasia.com, ...\nExclude (11): 2 domains with 0% viewability and 0 conversions, 9 domains under the CPM/viewability bar\nMonitor (2): new domains with under 2 weeks of data\nGap flagged: no independent fraud-verification tool in current stack",
      successCriteria: [
        "Correctly flags the 2 CPM-outlier, zero-conversion publishers in Step 1",
        "Whitelist recommendation matches the >60% viewability + 1+ conversion bar",
        "Identifies the missing independent verification tooling as a setup gap, not a report error",
      ],
      portfolioReady: true,
      stretch: "Estimate the wasted spend across the 9 lowest-performing publishers as a percentage of total flight budget.",
    },
    {
      id: "programmatic-media-plan-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Set-and-Forget Teardown: Finding the Mistakes in 3 Programmatic Media Plans",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 3 synthetic programmatic campaign setup summaries, correctly identify which brand-safety, targeting, or auction-mechanics mistakes each one contains.",
      companyId: "sea-limited",
      scenario:
        "You're auditing 3 draft programmatic campaign setups for Shopee before they go live across Southeast Asia.",
      brief: "Read each setup cold, flag every mistake against the lesson's framework, then check the answer key.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "How It Works", "Why It Matters"],
      teardownItems: [
        {
          itemId: "plan-1-open-web-no-filter",
          specimen:
            "MEDIA PLAN 1 — 'Shopee 11.11 Retargeting'\nBuying method: Open web, all exchange inventory\nBrand safety filters: None configured\nFrequency cap: None set\nAd verification tool: Not integrated\nFloor price: Exchange default",
          specimenSource: "synthetic-realistic",
          prompt: "This plan is about to launch. What would you flag before approving it?",
          answerKey: [
            {
              defect: "No brand safety filters configured on an open-web buy",
              severity: "critical",
              whyItMatters:
                "Ads can appear next to harmful or extremist content with zero filtering in place",
              lessonRef:
                "Common Mistakes — 'wasted spend from brand safety issues (ads appearing next to harmful content)'",
              owner: "either",
            },
            {
              defect: "No ad verification tool integrated",
              severity: "critical",
              whyItMatters:
                "Without a verification layer like IAS or DoubleVerify, fraud and unsafe placements have no independent check",
              lessonRef: "Common Mistakes — 'use a verified ad verification tool like IAS or DoubleVerify'",
              owner: "developer",
            },
            {
              defect: "No frequency cap set",
              severity: "moderate",
              whyItMatters:
                "Uncapped frequency on a retargeting push wastes budget showing the same users the ad repeatedly instead of reaching new ones",
              lessonRef: "Common Mistakes — treating programmatic as set-and-forget accumulates wasted spend",
              owner: "either",
            },
          ],
          distractors: [
            "Buying on the open exchange itself, scale is a legitimate reason to use open web, the missing filters are the actual defect, not the channel choice",
            "Using the exchange's default floor price, a reasonable starting point before you have performance data to set your own",
          ],
          partialCredit: true,
        },
        {
          itemId: "plan-2-whitelist-correct",
          specimen:
            "MEDIA PLAN 2 — 'Shopee App Install Push'\nBuying method: Whitelist of 4,200 vetted publisher domains\nBrand safety filters: Configured, excludes 12 content categories\nFrequency cap: 3 impressions per user per week\nAd verification tool: Integrated, weekly placement report review scheduled",
          specimenSource: "synthetic-realistic",
          prompt: "Is this plan ready to launch, or is something still missing?",
          answerKey: [
            {
              defect: "None found, this plan matches the lesson's recommended setup",
              severity: "cosmetic",
              whyItMatters:
                "Whitelist buying, brand safety filters, a frequency cap, and scheduled verification review are exactly what the lesson recommends",
              lessonRef:
                "Common Mistakes — 'Start with a whitelist of known, trusted publisher domains...set brand safety filters...check placement reports weekly'",
              owner: "you",
            },
          ],
          distractors: [
            "Whitelisting 4,200 domains instead of running fully open web, this trades some scale for quality, matching the lesson's explicit recommendation, not a defect",
            "3 impressions per user per week frequency cap, a reasonable, deliberate cap, not a defect",
          ],
          partialCredit: true,
        },
        {
          itemId: "plan-3-narrow-b2b-niche",
          specimen:
            "MEDIA PLAN 3 — 'Shopee Seller Onboarding, B2B'\nAudience: Small business owners in 3 mid-sized cities, estimated reach 40,000\nBuying method: Programmatic RTB, automated bidding\nGoal: Hyper-local reach to a narrow professional segment",
          specimenSource: "synthetic-realistic",
          prompt: "Is programmatic RTB actually the right buying method for this specific plan?",
          answerKey: [
            {
              defect:
                "Programmatic automated bidding is being applied to a hyper-local, niche B2B audience where it's least useful",
              severity: "moderate",
              whyItMatters:
                "The lesson notes programmatic is less useful for hyper-local or niche B2B campaigns where the audience is too small to benefit from automated bidding",
              lessonRef:
                "Why It Matters — 'less useful for hyper-local or niche B2B campaigns where your audience is too small'",
              owner: "you",
            },
          ],
          distractors: [
            "Targeting only 3 cities, the narrow geography itself isn't the defect, it's applying automated RTB bidding to that narrow a segment",
            "40,000 estimated reach, a small number is expected for this audience type, not itself a mistake",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each plan's flagged defects and severity",
            why: "Free, sufficient for a 3-plan review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across all 3 media plans, each item tagged critical/moderate/cosmetic, with Plan 2 correctly identified as launch-ready.",
      sampleOutput:
        "Grab, media plan teardown (excerpt)\n\nPlan A: no brand safety filters, no verification tool — CRITICAL x2\nPlan B: whitelist + filters + frequency cap + verification — READY, no defects\nPlan C: RTB applied to a 15,000-reach niche audience — MODERATE, wrong buying method",
      successCriteria: [
        "Flags both critical defects in Plan 1 (no brand safety filters, no verification tool)",
        "Correctly identifies Plan 2 as defect-free rather than inventing a problem",
        "Identifies Plan 3's mismatch between programmatic RTB and a hyper-local niche audience",
      ],
      portfolioReady: true,
      stretch: "Rewrite Plan 1's setup checklist so it would pass the same audit.",
    },
  ],

  "ios-attribution": [
    {
      id: "capi-pixel-dedup-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Duplicate Count: Auditing a CAPI + Pixel Event Log",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a raw exported event log containing both browser-pixel and Conversions API (CAPI) events, identify which conversions are being double-counted because they lack a shared event ID for deduplication.",
      companyId: "duolingo",
      scenario:
        "You're the growth marketer at Duolingo checking why last week's Meta Ads Manager purchase count for the Plus subscription campaign looks 40% higher than the number in the billing system.",
      brief:
        "Pull the raw event export, match pixel and CAPI rows by event ID and timestamp, and flag every purchase that was logged twice.",
      mode: "diagnostic",
      conceptsCovered: ["CAPI + pixel event deduplication"],
      steps: [
        {
          stepId: "step-1-dedup-audit",
          concept: "CAPI + pixel event deduplication",
          lessonAnchor: "2-meta-conversions-api-capi-server-to-server-tracking",
          theoryRecap:
            "The lesson's Mistake 2 explains that running the browser pixel and CAPI together without a shared event ID makes Meta log the same purchase twice, inflating conversion counts by 30-60%.",
          question:
            "This export has 50 purchase rows, 18 of them share an identical event_id value across a pixel row and a CAPI row. How many real purchases actually happened?",
          toolName: "Google Sheets",
          where: "Import capi-pixel-events.csv, freeze the header row, sort by event_id then source.",
          procedure: [
            "Import capi-pixel-events.csv and freeze row 1",
            "Sort by event_id, then by source (pixel vs capi)",
            "Use COUNTIF on event_id to flag any value appearing more than once",
            "Subtract the flagged duplicate count from the total row count to get real purchases",
          ],
          outputSample:
            "event_id       source   value   timestamp\nevt_2291a       pixel    12.99   14:02:03\nevt_2291a       capi     12.99   14:02:05\nevt_2295b       capi     12.99   14:05:11\nevt_2299c       pixel    12.99   14:07:44\n\nCOUNTIF(event_id) > 1: 18 rows (9 duplicate pairs)\nRaw row count: 50 | Deduplicated purchase count: 41",
          healthy:
            "Every duplicate pair shares one event_id across pixel and CAPI; the dashboard total is corrected down to the deduplicated count before anyone reports ROAS.",
          unhealthy:
            "Reporting the raw 50-purchase count as 'conversions' when 9 of those purchases were logged twice, inflating ROAS by roughly 22%.",
          interpret:
            "A shared event_id is the only thing that tells Meta two rows are one event, not two; without it, every dual-tracked purchase counts twice.",
          soWhat: [
            {
              symptom: "Ads Manager purchase count is meaningfully higher than the billing system's real order count",
              action: "Pull the raw event export and COUNTIF the event_id column before trusting the dashboard number",
              effort: "5 min",
            },
            {
              symptom: "No event_id column exists in the export at all",
              action: "Flag to the developer that CAPI events are firing without a matching pixel event_id parameter, this is a required fix, not optional",
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
            role: "Sort, filter, and COUNTIF the raw event export",
            why: "Free, no account access needed, handles a few thousand rows easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A corrected purchase count with every duplicate pair flagged, plus a one-line note on the true ROAS versus the dashboard's inflated number.",
      sampleOutput:
        "Wise, Meta Ads purchase export audit (excerpt)\n\nRaw dashboard count: 112 purchases\nDuplicate pairs found (matching event_id, pixel + capi): 21\nCorrected purchase count: 91\nDashboard ROAS: 4.8x -> Corrected ROAS: 3.9x",
      successCriteria: [
        "Correctly identifies every duplicate event_id pair in the export",
        "Produces a deduplicated purchase count that matches the billing system",
        "States the corrected ROAS, not just the raw dashboard number",
      ],
      portfolioReady: true,
    },
    {
      id: "skan-postback-log-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: A SKAdNetwork Postback Log for a Mobile App Launch",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a synthetic-realistic SKAdNetwork postback summary across 12 iOS ad sets, identify which campaigns are producing unusable data and which conversion-value mapping decisions are actively hiding the app's most valuable users.",
      companyId: "robinhood",
      scenario:
        "You're auditing Robinhood's iOS UA campaign structure after the mobile team flags that 'SKAN data looks useless this month, we can't tell which ad sets are working.'",
      brief:
        "Read the postback summary, separate genuine SKAN limitations from fixable schema and structure mistakes, and write up what to change before next month's spend.",
      mode: "teardown",
      conceptsCovered: [
        "SKAdNetwork's 100-150 daily install threshold for usable postback data",
        "SKAN conversion value schema design",
      ],
      teardownItems: [
        {
          itemId: "item-1-null-conversion-campaigns",
          specimen:
            "Robinhood iOS UA, SKAN 4 postback summary, last 30 days\n\nAd Set              Daily Installs   Postbacks Received   Null Conversion Value Rate\nBrokerage-US-Broad       310              298                   6%\nBrokerage-US-Lookalike    22               19                   84%\nCrypto-US-Interest        14               11                   91%\nCrypto-UK-Broad           95               88                   9%\nOptions-US-Retarget        8                6                   100%\nOptions-US-Broad          180              171                   11%\nSavings-US-Lookalike      17               14                   88%\nSavings-US-Broad         240              229                    7%\nCard-US-Interest          19               16                   90%\nCard-US-Broad            150              143                   10%\nBrokerage-CA-Broad        12               10                   93%\nCrypto-CA-Broad            9                7                   100%",
          specimenSource: "synthetic-realistic",
          prompt:
            "Which ad sets in this postback summary are structurally incapable of returning usable conversion-value data, and what single change fixes most of them at once?",
          answerKey: [
            {
              defect:
                "6 of 12 ad sets (Lookalike, Interest, and CA-Broad sets) average under 20-22 daily installs and return 84-100% null conversion values",
              severity: "critical",
              whyItMatters:
                "Below roughly 100-150 daily installs, Apple suppresses conversion value data to protect user privacy, so these ad sets are spending budget with zero usable optimization signal",
              lessonRef: "1-skadnetwork-skan-apples-own-solution",
              owner: "either",
            },
            {
              defect:
                "Six separate low-volume ad sets targeting overlapping US audiences (Brokerage, Crypto, Options, Savings, Card interest/lookalike splits) are fragmenting the same install pool into sub-threshold slices",
              severity: "critical",
              whyItMatters:
                "Consolidating these into 1-2 broader ad sets per product line would push installs-per-day well past the 100-150 threshold and unlock real postback data for the whole budget, not just the broad campaigns",
              lessonRef: "mobile-gaming-industry-the-volume-problem",
              owner: "you",
            },
          ],
          distractors: [
            "Brokerage-US-Broad's postback count (298) is slightly lower than its daily install count (310) — this is normal SKAN attrition, not a defect",
            "Options-US-Retarget has only 8 daily installs but is a small always-on test campaign; low volume alone isn't the defect, the defect is running six such campaigns and expecting usable data from them",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-conversion-value-schema",
          specimen:
            "Robinhood SKAN conversion value schema (as configured in AppsFlyer)\n\nValue 0-15:  App opened, no action\nValue 16-31: Completed KYC signup\nValue 32-47: Funded account (any amount)\nValue 48-55: Placed first trade\nValue 56-63: Funded account OR placed first trade (same range, either action)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review this conversion value schema against the lesson's worked example. What is wrong with how the top value band is defined?",
          answerKey: [
            {
              defect:
                "Values 56-63 map to two different, non-equivalent high-intent actions (funding an account vs. placing a first trade) as if they were the same signal",
              severity: "critical",
              whyItMatters:
                "When a postback arrives with value 60, the UA team cannot tell whether that install funded an account or placed a trade, so the campaign optimization signal is ambiguous exactly where it matters most",
              lessonRef: "1-skadnetwork-skan-apples-own-solution",
              owner: "either",
            },
            {
              defect:
                "Placing a first trade (the strongest revenue-intent signal for a brokerage app) sits in a lower value band (48-55) than the ambiguous combined band (56-63)",
              severity: "moderate",
              whyItMatters:
                "The schema should rank the single highest-intent action at the top of the value range on its own, mirroring the lesson's fitness-app example where free trial start gets the highest dedicated band",
              lessonRef: "1-skadnetwork-skan-apples-own-solution",
              owner: "either",
            },
          ],
          distractors: [
            "The schema uses four bands instead of a larger number of narrower bands — SKAN 4 supports up to 63 values but a schema doesn't need to use all of them to be effective",
            "KYC signup is mapped to values 16-31, a relatively wide range — width alone isn't a defect if the actions within that range are genuinely equivalent in value",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Analyze the postback summary and calculate null rates by ad set",
            why: "Free, sufficient for a monthly-sized postback export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Google Sheets",
            role: "Same tool covers both the free and full workflow here",
            why: "No paid MMP dashboard access is required to complete this teardown",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A written teardown flagging every low-volume ad set, a consolidation recommendation, and a corrected conversion value schema with one action per value band.",
      sampleOutput:
        "Nubank iOS UA, SKAN teardown findings (excerpt)\n\nSTRUCTURAL: 5 of 9 ad sets under 20 daily installs, consolidate Interest + Lookalike splits per product into one Broad ad set each\nSCHEMA: Values 50-63 currently cover both 'card activated' and 'first transfer' as one band, split into two dedicated bands so postbacks stop being ambiguous",
      successCriteria: [
        "Correctly identifies all 6 sub-threshold ad sets and their null conversion value rates",
        "Recommends consolidation as the fix, not simply 'increase budget'",
        "Identifies the conversion value schema's ambiguous top band as a separate, second defect",
      ],
      portfolioReady: true,
      stretch:
        "Redesign the full 0-63 schema for Robinhood with a dedicated band for each of: app open, KYC complete, account funded, first trade placed, and recurring deposit set up.",
    },
  ],
  "ad-fraud-invalid-traffic": [
    {
      id: "givt-traffic-log-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Bot Filter: Auditing a Raw Click Log for GIVT",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a raw programmatic click log, apply the lesson's GIVT criteria (known crawlers, data center IPs, pre-fetch loads) to separate filterable invalid traffic from traffic that needs deeper SIVT review.",
      companyId: "blue-apron",
      scenario:
        "You're the paid media analyst at Blue Apron reviewing why a display retargeting campaign's CTR looks unusually high this week.",
      brief:
        "Filter the click log by IP range and user agent, isolate the GIVT rows, and report what share of 'clicks' were never a human at all.",
      mode: "diagnostic",
      conceptsCovered: ["GIVT filtering by IP range and user agent"],
      steps: [
        {
          stepId: "step-1-givt-filter",
          concept: "GIVT filtering by IP range and user agent",
          lessonAnchor: "givt-vs-sivt-two-very-different-problems",
          theoryRecap:
            "The lesson defines GIVT as traffic that identifies itself: known crawlers, data center IP ranges, and browser pre-fetch loads, all catchable with routine list-matching and IP filtering.",
          question:
            "This click log has 300 rows. How many are GIVT you can filter out with a simple IP-range and user-agent rule, before you even start looking for SIVT?",
          toolName: "Google Sheets",
          where: "Import click-log-export.csv, add a helper column flagging known data center ASNs and bot user agents.",
          procedure: [
            "Import click-log-export.csv and freeze row 1",
            "Add a helper column matching the IP column against a known data-center ASN list",
            "Filter the user_agent column for known crawler strings (Googlebot, bingbot, etc.)",
            "Sum the flagged rows to get the GIVT count",
          ],
          outputSample:
            "Total rows: 300\nData-center ASN matches: 41\nKnown crawler user agents: 9\nGIVT total: 50 rows (16.7% of logged clicks)\nRemaining 250 rows require SIVT-level review (behavior, device, proxy signals)",
          healthy:
            "GIVT is filtered out before any spend or performance conclusion is drawn, the remaining 250 rows are what actually gets analyzed for campaign performance.",
          unhealthy:
            "Reporting CTR off the full 300-row log, including the 50 rows that were never a human, inflating the apparent engagement rate.",
          interpret:
            "GIVT is the easy layer, a list-match catches nearly all of it, but it is only step one, the remaining traffic still needs a SIVT check before you trust it.",
          soWhat: [
            {
              symptom: "CTR spikes with no creative or targeting change",
              action: "Run the IP-range and user-agent filter first, GIVT inflation is the fastest thing to rule out",
              effort: "5 min",
            },
            {
              symptom: "GIVT rate is consistently above 10% on one specific publisher or exchange",
              action: "Add that source to a block list and flag it to the media buyer for renegotiation or removal",
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
            role: "Filter and flag the raw click log by IP range and user agent",
            why: "Free, handles a few hundred to a few thousand rows without issue",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Google Analytics 4",
            role: "Cross-check filtered traffic against session quality signals (bounce, engagement time)",
            why: "Confirms the remaining non-GIVT traffic actually behaves like real sessions",
            required: false,
            fallback: "Google Sheets pivot on session duration if GA4 access isn't available",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A GIVT-filtered click count with the percentage of raw clicks removed, plus a flag list of any single source over a 10% GIVT rate.",
      sampleOutput:
        "HelloFresh, display retargeting click log audit (excerpt)\n\nRaw clicks: 1,240\nData-center ASN matches: 187 (15.1%)\nKnown crawler UAs: 22 (1.8%)\nGIVT total: 209 rows (16.9%)\nFlagged source: exchange-partner-14, 34% GIVT rate, recommend blocklist",
      successCriteria: [
        "Correctly separates GIVT rows using IP range and user-agent criteria",
        "States a clean percentage of raw clicks that were GIVT",
        "Flags any single traffic source with a disproportionately high GIVT rate",
      ],
      portfolioReady: true,
    },
    {
      id: "mobile-install-fraud-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: A Mobile Install Report for SDK Spoofing and Click Injection",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a synthetic-realistic mobile install and post-install event report, distinguish genuine app install fraud (SDK spoofing, click injection) from normal attribution variance.",
      companyId: "policybazaar",
      scenario:
        "PolicyBazaar's app install campaign shows a strong install number this month, but the insurance-quote team says lead quality from app users has cratered.",
      brief:
        "Review the install-to-event report, identify which installs show fraud signatures, and recommend which ad network to pause.",
      mode: "teardown",
      conceptsCovered: ["SDK spoofing detection", "Click injection detection"],
      teardownItems: [
        {
          itemId: "item-1-post-install-silence",
          specimen:
            "PolicyBazaar app install report, Network C, 500 installs sampled\n\nMetric                                  Value\nInstalls attributed to Network C          500\nInstalls with any post-install event      41 (8.2%)\nInstalls with a quote-form start          6 (1.2%)\nAverage click-to-install time             1.4 seconds\nInstalls attributed to Network A (control) 500\nNetwork A: installs with post-install event  412 (82.4%)\nNetwork A: average click-to-install time     41 minutes",
          specimenSource: "synthetic-realistic",
          prompt:
            "Compare Network C to the Network A control group in this report. What does the combination of post-install silence and click-to-install timing tell you?",
          answerKey: [
            {
              defect:
                "Only 8.2% of Network C's attributed installs generated any in-app event afterward, versus 82.4% for the control network",
              severity: "critical",
              whyItMatters:
                "The lesson identifies post-install silence as the signature of SDK spoofing, the install event was faked, so there's no real device or user behind it to generate anything next",
              lessonRef: "detection-tools-and-practices-that-actually-work",
              owner: "either",
            },
            {
              defect:
                "Network C's average click-to-install time is 1.4 seconds, versus 41 minutes for the organic-behavior control",
              severity: "critical",
              whyItMatters:
                "A click landing seconds before an install completes is the classic click injection signature, a malicious app detects a real install starting and fires a fraudulent click just before it finishes to steal attribution credit",
              lessonRef: "detection-tools-and-practices-that-actually-work",
              owner: "either",
            },
          ],
          distractors: [
            "Network C delivered exactly 500 installs, the same round number as Network A — a round sample size is a reporting artifact of how this data was pulled, not a fraud signal on its own",
            "6 installs from Network C did start a quote form — a small number of genuine conversions existing alongside heavy fraud doesn't mean the network is clean, it means some real installs are mixed into a mostly fraudulent batch",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-ctr-geo-mismatch",
          specimen:
            "PolicyBazaar Network C, weekly click summary by geo\n\nGeo             Clicks    Target Geo?\nIndia-Tier1      2,100        Yes\nIndia-Tier2      3,400        Yes\nUnknown/VPN      8,900        No, campaign targets India only\n\nClick timing distribution: 61% of all Network C clicks landed between 2:00-2:15 AM IST",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the same Network C from a different report view. What two additional red flags does this geo and timing breakdown add to the case for pausing this network?",
          answerKey: [
            {
              defect:
                "8,900 of roughly 14,400 total clicks (62%) come from an unknown/VPN geo bucket on a campaign targeted only at India",
              severity: "critical",
              whyItMatters:
                "The lesson flags geo mismatch, clicks from outside the targeted region, as a classic proxy-farm signature; this network is delivering most of its volume from exactly that pattern",
              lessonRef: "red-flags-a-marketer-should-watch-for",
              owner: "either",
            },
            {
              defect:
                "61% of clicks cluster into one 15-minute window at 2:00-2:15 AM India time",
              severity: "moderate",
              whyItMatters:
                "The lesson identifies click timing clusters, a wall of clicks landing in the same narrow window daily, as not being human behavior; this is consistent with an automated click farm running on a schedule",
              lessonRef: "red-flags-a-marketer-should-watch-for",
              owner: "either",
            },
          ],
          distractors: [
            "India-Tier2 clicks (3,400) outnumber India-Tier1 clicks (2,100) — Tier 2 cities having higher click volume than Tier 1 is a normal, well-documented pattern for insurance-comparison apps, not a fraud signal",
            "The report is broken into three geo buckets instead of a full city-by-city list — bucket granularity is a reporting choice, not evidence of fraud",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compare install, event, and timing data across networks",
            why: "Free, sufficient for a sampled report of this size",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Looker Studio",
            role: "Build a recurring dashboard comparing post-install event rates by network",
            why: "Turns this one-time teardown into an ongoing weekly fraud-monitoring view",
            required: false,
            fallback: "A saved Google Sheets pivot table refreshed weekly",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A written case for pausing Network C, citing the post-install silence rate, click-to-install timing, geo mismatch, and click timing clustering as combined evidence.",
      sampleOutput:
        "Nubank app install fraud review (excerpt)\n\nNetwork D: 91% post-install silence, 2.1 sec average click-to-install time, 58% clicks from unlisted geo\nRecommendation: Pause Network D immediately, request MMP raw log export for the last 30 days before any refund negotiation",
      successCriteria: [
        "Correctly identifies post-install silence rate as an SDK spoofing signal",
        "Correctly identifies sub-second click-to-install timing as a click injection signal",
        "Cites the geo mismatch and click timing cluster as corroborating, not standalone, evidence",
      ],
      portfolioReady: true,
      stretch:
        "Draft the message you'd send to Network C's account manager requesting a refund, citing the specific report rows as evidence.",
    },
  ],

  "native-advertising": [
    {
      id: "native-advertising-sponsored-content-teardown",
      tier: "mini",
      archetype: "teardown",
      mode: "teardown",
      title: "The Sponsored-Content Red Flag Audit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three short native ad specimens drafted for a DTC eyewear brand, identify which pieces would pass a native-advertising quality bar and which would break reader trust or violate disclosure rules, using the lesson's own criteria.",
      companyId: "warby-parker",
      scenario:
        "You're a content reviewer on Warby Parker's brand team. Three draft native ad pieces are queued for a Taboola distribution buy this week, and you have final sign-off before they go live.",
      brief:
        "Score each piece against the lesson's two hard rules: does it read like a genuinely useful article and not a pitch, and is the sponsored relationship disclosed clearly.",
      conceptsCovered: ["What It Is", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "specimen-1-eye-exam-piece",
          specimenSource: "synthetic-realistic",
          specimen:
            "5 Ways to Tell If Your Glasses Prescription Is Outdated\n\n" +
            "Blurry street signs. A headache after two hours at your laptop. Squinting at restaurant menus in dim light. These are the quiet signs your prescription has drifted out of date, something that happens to most people every 1-2 years without them noticing.\n\n" +
            "An eye exam takes about 20 minutes and settles it either way. If your prescription has changed, ordering new glasses online now takes about as long as the exam itself, most virtual try-on tools let you compare five frames side by side before you commit.",
          prompt: "Would this piece pass as a native ad, or does it need a fix before it runs?",
          answerKey: [
            {
              defect: "No 'Sponsored' or 'Paid Content' label anywhere in the piece",
              severity: "critical",
              whyItMatters:
                "Hiding the commercial relationship is a trust violation and, in many markets, an advertising-regulation violation, not a style choice.",
              lessonRef: "Common Mistakes: 'always include a clear Sponsored or Paid Content label'",
              owner: "you",
            },
          ],
          distractors: [
            "Mentions ordering glasses online only in the last two sentences",
            "Uses second-person 'you' throughout the piece",
            "Never names Warby Parker directly in the body text",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-best-frames-pitch",
          specimenSource: "synthetic-realistic",
          specimen:
            "Why Warby Parker Frames Are the Best Glasses You'll Ever Own\n\n" +
            "Our bestselling frames start at $95, a fraction of what department-store opticians charge for the same quality. Every pair ships with a 30-day satisfaction guarantee, and our Home Try-On program lets you test five frames free before buying.\n\n" +
            "Shop the full collection now and see why over 200,000 five-star reviews call us the best online eyewear brand.\n\nSponsored content in partnership with Warby Parker.",
          prompt: "Would this piece pass as a native ad, or does it need a fix before it runs?",
          answerKey: [
            {
              defect:
                "Reads as a straight product pitch (price, guarantee, shop-now CTA) with no informational content for the reader",
              severity: "critical",
              whyItMatters:
                "Readers came expecting an article; a sales brochure disguised as one breaks trust and kills performance once they notice the deception.",
              lessonRef:
                "Common Mistakes: 'the biggest mistake in native advertising is making the ad too promotional'",
              owner: "you",
            },
          ],
          distractors: [
            "Names Warby Parker directly by brand name",
            "Includes a specific price ($95)",
            "Has a 'Sponsored content' disclosure line at the end",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-eye-exam-research-piece",
          specimenSource: "synthetic-realistic",
          specimen:
            "The Hidden Cost of Skipping Your Annual Eye Exam\n\n" +
            "Uncorrected vision problems are linked to a measurable rise in workplace errors and reduced productivity. Untreated astigmatism alone can cause persistent headaches that many people misattribute to stress or screen time.\n\n" +
            "Warby Parker partners with independent doctors in over 160 of its stores, so booking an exam and picking up new frames can happen in the same visit if your prescription needs an update.\n\nSponsored content in partnership with Warby Parker.",
          prompt: "Would this piece pass as a native ad, or does it need a fix before it runs?",
          answerKey: [],
          distractors: [
            "Discloses the brand partnership in a closing line rather than a headline badge",
            "Doesn't cite a named source for the workplace-error claim inline",
            "Mentions the brand's own stores rather than staying fully neutral",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track the pass/fail scorecard across the three specimens",
            why: "Free, no account friction, enough for a three-row audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-row scorecard, one row per specimen, marking pass/fail against the disclosure rule and the promotional-tone rule, with the specific defect quoted for any fail.",
      sampleOutput:
        "Nykaa native content review, Q3 batch (excerpt)\n\n" +
        "Piece 1, 'Why Your Foundation Oxidizes by Noon': PASS. Informational, cites a dermatologist by name, sponsorship disclosed in a top badge.\n" +
        "Piece 2, 'Nykaa's Top 10 Bestselling Lipsticks, Ranked': FAIL. Straight product ranking with buy links, no disclosure label anywhere in the piece.\n" +
        "Piece 3, 'The Skincare Routine Dermatologists Actually Recommend': FAIL. Genuinely useful content, but the sponsorship line was cut during editing, needs it restored before publish.",
      successCriteria: [
        "Correctly flags the missing disclosure label in specimen 1",
        "Correctly flags the promotional-pitch problem in specimen 2",
        "Correctly passes specimen 3 without inventing a defect that isn't there",
      ],
      portfolioReady: true,
    },
    {
      id: "native-advertising-performance-network-audit",
      tier: "core",
      archetype: "audit",
      mode: "diagnostic",
      title: "The Network Performance Audit: Which Native Placements Are Actually Working",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a 30-row native ad performance export split across two networks with CTR, time on page, and conversions, apply the lesson's CTR benchmark and Stage 4 measurement framework to separate genuinely effective placements from clickbait traps, and recommend which channel and content type to scale.",
      companyId: "hellofresh",
      scenario:
        "You're the acquisition marketer at HelloFresh reviewing last month's native ad spend split across Taboola and Outbrain before locking next quarter's channel budget.",
      brief:
        "Benchmark CTR against the lesson's 0.2%-0.4% range, cross-check the outliers against time-on-page and conversions to catch clickbait traps, then recommend a channel and content-type mix.",
      conceptsCovered: [
        "Benchmarking native CTR against the industry range instead of judging it in isolation",
        "Cross-checking CTR against time on page and conversions to catch clickbait",
        "Choosing a distribution channel based on content type and editorial control needs",
      ],
      steps: [
        {
          stepId: "step-1-ctr-benchmark",
          concept: "Benchmarking native CTR against the industry range instead of judging it in isolation",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson notes native ad CTRs typically run 0.2% to 0.4% on content networks, lower than search ads, because the audience is cold and the content is doing the persuading.",
          question:
            "Sorted by CTR, 4 of the 30 rows sit above 0.6%, more than double the lesson's benchmark range. Are these automatically your best-performing placements?",
          toolName: "Google Sheets",
          where: "Import native-performance-export.csv, freeze the header row, sort by the CTR column descending.",
          procedure: [
            "Import the export and freeze row 1",
            "Sort descending by CTR, isolate the 4 rows above 0.6%",
            "Do not conclude anything yet, flag them for a second pass",
            "Note the network (Taboola/Outbrain) and headline style for each flagged row",
          ],
          outputSample:
            "HIGH CTR ROWS (4 of 30)\n  'You Won't Believe This Weeknight Dinner Hack'   Taboola   CTR 0.71%\n  'This 15-Minute Recipe Broke the Internet'       Taboola   CTR 0.68%\n  '5-Star Recipe Box Review, Week 12'              Outbrain  CTR 0.64%\n  'The Meal Kit Even Chefs Are Obsessed With'      Taboola   CTR 0.61%",
          healthy: "A high CTR paired with above-average time on page and conversions, the content earned the click and delivered on it.",
          unhealthy: "A high CTR driven by a curiosity-gap headline that doesn't match what the article actually delivers.",
          interpret: "CTR alone can't tell you which, it's a headline-quality signal, not a value signal, on its own.",
          soWhat: [
            { symptom: "4 rows sit far above the benchmark CTR range", action: "Hold them for a time-on-page and conversion cross-check before scaling budget", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-clickbait-cross-check",
          concept: "Cross-checking CTR against time on page and conversions to catch clickbait",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Stage 4 says to track CTR for awareness and form fills, sign-ups, or purchases after the click for conversion, not CTR alone.",
          question:
            "Cross-referenced against time on page and conversions, 3 of the 4 high-CTR rows average 9 seconds on page and 0 conversions. What does that combination mean?",
          toolName: "Google Sheets",
          where: "Add time-on-page and conversions columns next to the 4 flagged rows from Step 1, using VLOOKUP against the full export.",
          procedure: [
            "Pull time-on-page and conversions for the 4 flagged rows",
            "Compare against the export's overall average (52 seconds, 1.8% conversion rate)",
            "Separate rows that hold up under the cross-check from rows that don't",
          ],
          outputSample:
            "CROSS-CHECK RESULTS\n  'You Won't Believe...'      9s on page   0 conversions   CLICKBAIT TRAP\n  '15-Minute Recipe...'       11s on page  0 conversions   CLICKBAIT TRAP\n  '5-Star Recipe Box Review'  61s on page  2.4% conv        GENUINE WINNER\n  'Meal Kit Even Chefs...'    8s on page   0 conversions   CLICKBAIT TRAP",
          healthy: "High CTR, above-average time on page, above-average conversion, the headline set accurate expectations.",
          unhealthy: "High CTR, single-digit seconds on page, zero conversions, readers clicked and immediately bounced.",
          interpret: "3 of the 4 'best performers' from Step 1 were curiosity-gap headlines wasting budget, the network is charging per click regardless of what happens after.",
          soWhat: [
            { symptom: "High CTR rows show near-zero time on page and zero conversions", action: "Pause those creatives and reallocate their budget to the one row that held up under the cross-check", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-channel-choice",
          concept: "Choosing a distribution channel based on content type and editorial control needs",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Stage 2 notes Taboola and Outbrain distribute broadly across thousands of sites, while direct publisher deals give more editorial control, the right choice depends on the content type.",
          question:
            "The one genuine winner, the recipe-box review, ran on Outbrain and reads like real editorial content. The clickbait losers all ran on Taboola with curiosity-gap headlines. Do you conclude Outbrain beats Taboola?",
          toolName: "Google Sheets",
          where: "Pivot the full 30-row export by network to compare average CTR, time on page, and conversion rate per network, not just the 4 flagged rows.",
          procedure: [
            "Build a pivot table: network as rows, average CTR / time on page / conversion rate as values",
            "Compare the network-level averages, not just the 4 outlier rows",
            "Check whether the pattern holds across all rows or was a coincidence of headline style",
          ],
          outputSample:
            "NETWORK AVERAGES (all 30 rows)\n  Taboola   avg CTR 0.34%   avg time 44s   avg conv 1.6%\n  Outbrain  avg CTR 0.29%   avg time 58s   avg conv 2.1%",
          healthy: "Network averages are close once the outlier rows are removed, the real driver was headline honesty, not the network itself.",
          unhealthy: "Concluding one network is universally better from 4 rows out of 30 without checking the full pivot.",
          interpret: "Once the clickbait rows are excluded, Taboola and Outbrain perform similarly, the actual lever is writing headlines that match the content, on either network.",
          soWhat: [
            { symptom: "Team is about to shift 100% of budget to Outbrain based on 4 rows", action: "Show the full-network pivot and recommend a headline-quality rewrite instead of a network switch", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Import, sort, cross-check, and pivot the 30-row performance export",
            why: "Free, handles VLOOKUP and pivot tables for a dataset this size with no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written recommendation memo: which of the 4 high-CTR placements are genuine winners vs. clickbait traps, a network-level pivot showing the pattern holds across both networks, and a headline-quality fix rather than a network-switch recommendation.",
      sampleOutput:
        "Nykaa, native ad quarterly review (excerpt)\n\n" +
        "Flagged rows: 5 of 28 rows exceeded 0.6% CTR.\n" +
        "Cross-check: 4 of 5 averaged 12 seconds on page, 0 conversions, curiosity-gap headlines ('The Skincare Mistake Everyone Makes').\n" +
        "1 of 5 held up: 'Winter Skincare Routine, Dermatologist Reviewed', 64s on page, 2.8% conversion.\n" +
        "Network pivot: Taboola and Outbrain within 0.05 points of each other once outliers removed.\n" +
        "Recommendation: pause the 4 clickbait creatives, rewrite headlines to match content, keep budget split across both networks.",
      successCriteria: [
        "Correctly separates the genuine winner from the 3 clickbait rows using time-on-page and conversion data",
        "Builds the full-network pivot instead of generalizing from the 4 flagged rows alone",
        "Recommends a headline fix over a network switch, with the pivot data to back it up",
      ],
      portfolioReady: true,
    },
  ],
  "mmm-vs-mta": [
    {
      id: "mmm-vs-mta-attribution-model-bakeoff",
      tier: "mini",
      archetype: "head-to-head",
      mode: "diagnostic",
      title: "The Attribution Model Bake-Off: Same Journeys, Five Different Verdicts",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given the same 10 synthetic user journeys, each with 2-4 tracked digital touchpoints and a conversion, apply last-click, first-click, and linear attribution by hand to see how differently they credit the same underlying data, then identify which channel is most at risk of being defunded by the model currently in use.",
      companyId: "robinhood",
      scenario:
        "You're a growth analyst at Robinhood reviewing a 10-journey sample pulled from GA4 before recommending which attribution model the team should default to for weekly bid decisions.",
      brief:
        "Apply three MTA models to the same touchpoint data, tabulate which channel wins credit under each, and flag which channel is most at risk of being defunded by the wrong model choice.",
      conceptsCovered: [
        "Attribution model choice changes which channel gets credited for the same conversion",
        "Linear and time-decay models spreading credit change budget conclusions versus last-click",
      ],
      steps: [
        {
          stepId: "step-1-model-crediting",
          concept: "Attribution model choice changes which channel gets credited for the same conversion",
          lessonAnchor: "multi-touch-attribution-mta",
          theoryRecap:
            "The lesson lists five ways to assign credit: last-click gives 100% to the final touchpoint, first-click gives 100% to the first, linear splits evenly, time-decay weights recent touchpoints more, and data-driven uses machine learning.",
          question:
            "Journey 7 is: paid social impression (no click) -> search ad click -> retargeting display click -> direct visit and purchase. Under last-click, which channel gets 100% credit? Under first-click?",
          toolName: "Google Sheets",
          where: "Import journeys.csv, one row per journey with a semicolon-separated touchpoints column.",
          procedure: [
            "Import journeys.csv and split the touchpoints column by semicolon",
            "For each journey, add a 'last-click winner' and 'first-click winner' column",
            "Fill both columns for all 10 journeys before moving on",
          ],
          outputSample:
            "JOURNEY 7\n  Touchpoints: paid social (no click) -> search click -> display click -> direct + purchase\n  Last-click winner: Direct\n  First-click winner: Paid Social",
          healthy: "A journey where last-click and first-click agree, the model choice doesn't change the budget conclusion.",
          unhealthy: "A journey where last-click credits 'Direct' (an unpaid channel) while the paid channels that actually built awareness get zero credit.",
          interpret: "Last-click systematically overcredits the final touchpoint, in journey 7 that's Direct traffic, which isn't a channel you can optimize spend against at all.",
          soWhat: [
            { symptom: "Last-click keeps crediting 'Direct' for conversions that started with a paid touchpoint", action: "Flag Direct-heavy journeys for a linear or time-decay re-run before trusting the last-click report", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-aggregate-comparison",
          concept: "Linear and time-decay models spreading credit change budget conclusions versus last-click",
          lessonAnchor: "multi-touch-attribution-mta",
          theoryRecap:
            "Linear credit splits evenly across every touchpoint in a journey; time-decay weights touchpoints closer to conversion more heavily. Both differ from last-click's winner-take-all approach.",
          question:
            "Aggregated across all 10 journeys, last-click credits Paid Search with 60% of conversions and Paid Social with 5%. Under linear, Paid Social's share rises to 22%. Which model would a Paid Social manager prefer, and which one is closer to the truth?",
          toolName: "Google Sheets",
          where: "Sum the last-click and linear credit columns across all 10 journeys, group by channel.",
          procedure: [
            "Sum last-click winners by channel across all 10 journeys",
            "Sum linear credit (1 / number of touchpoints per journey) by channel across all 10 journeys",
            "Compare the two channel-share totals side by side",
          ],
          outputSample:
            "CHANNEL SHARE OF CONVERSIONS\n  Channel        Last-click   Linear\n  Paid Search    60%          38%\n  Paid Social    5%           22%\n  Display        5%           18%\n  Direct         30%          22%",
          healthy: "A model choice that's disclosed and consistent, so everyone knows Paid Social's real number is 'X% under model Y'.",
          unhealthy: "Defaulting to last-click because it favors the channel already getting the most budget, without disclosing the model choice to stakeholders.",
          interpret: "Neither model is 'correct' in isolation, but a 17-point swing in Paid Social's credited share means the model you pick directly decides whether that channel's budget grows or gets cut.",
          soWhat: [
            { symptom: "Paid Social shows only 5% credit under the team's default last-click report", action: "Re-run the same data under linear and time-decay before recommending a budget cut, and disclose which model the recommendation used", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Split touchpoints, tabulate credit under each model, and compare channel-level totals",
            why: "Free, handles a 10-row synthetic dataset with simple formulas, no attribution software needed to see the pattern",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "The real-world source of the touchpoint-level data this exercise simulates",
            why: "Free tier gives any team the raw event data multi-touch attribution is built from",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A model-comparison table showing each channel's share of conversions under last-click vs. linear, with a written flag naming the channel most at risk of being defunded by staying on last-click.",
      sampleOutput:
        "Casper Sleep, MTA model comparison (excerpt)\n\n" +
        "  Channel         Last-click   Linear\n" +
        "  Paid Search     55%          41%\n" +
        "  Podcast (tracked promo codes) 3%   14%\n" +
        "  Paid Social     12%          19%\n" +
        "  Direct          30%          26%\n\n" +
        "Flag: Podcast is credited with only 3% of conversions under last-click but 14% under linear. It is the channel most likely to get cut next budget cycle if last-click stays the default.",
      successCriteria: [
        "Correctly identifies the last-click and first-click winner for journey 7",
        "Correctly computes linear credit shares that sum to 100% per journey",
        "Names the specific channel most at risk of being defunded by the last-click default, with the percentage swing as evidence",
      ],
      portfolioReady: true,
    },
    {
      id: "mmm-vs-mta-budget-reallocation-audit",
      tier: "core",
      archetype: "audit",
      mode: "diagnostic",
      title: "The Budget Reallocation Audit: When MMM and MTA Disagree",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a channel-level spreadsheet showing MTA-attributed revenue, a simplified MMM-style contribution estimate, and geo-holdout incrementality test results for the same 6 channels, apply the lesson's triangulation method to decide which model to trust per channel and draft a reallocated budget.",
      companyId: "instacart",
      scenario:
        "You're the paid media lead at Instacart. MTA says TV and podcast sponsorships contribute almost nothing; a first-pass MMM says they're carrying real weight. Finance wants one answer before next quarter's budget is locked.",
      brief:
        "Use the lesson's geo-holdout triangulation method to see which model each channel's real-world test result agrees with, then draft the reallocation.",
      conceptsCovered: [
        "MTA systematically undercounts channels it can't track at the user level",
        "MMM captures offline and brand-building channels that MTA is blind to",
        "Geo-holdout incrementality experiments as the tie-breaker between MMM and MTA",
      ],
      steps: [
        {
          stepId: "step-1-mta-blind-spots",
          concept: "MTA systematically undercounts channels it can't track at the user level",
          lessonAnchor: "multi-touch-attribution-mta",
          theoryRecap:
            "The lesson states MTA only sees what it can track, so it systematically undercounts TV, podcasts, organic social, and any touch where the user can't be identified.",
          question:
            "MTA attributes 2% of revenue to TV and 1% to podcast sponsorships, both channels Instacart has spent steadily on for two years. Is 3% combined a reliable read on their true contribution?",
          toolName: "Google Sheets",
          where: "Open channel-attribution-export.csv, sort the MTA-revenue column, note which channels sit near zero.",
          procedure: [
            "Sort the export by MTA-attributed revenue share, ascending",
            "Flag any channel below 3% that has meaningful, sustained spend behind it",
            "Note that TV and podcast are both untrackable at the user level, this is a structural gap, not a performance signal",
          ],
          outputSample:
            "MTA REVENUE SHARE (6 channels)\n  Paid Search    52%\n  Paid Social    28%\n  Display        14%\n  Retargeting     3%\n  TV              2%\n  Podcast         1%",
          healthy: "A near-zero MTA share for a channel with little to no spend behind it, the low number matches the low investment.",
          unhealthy: "A near-zero MTA share for a channel with two years of steady, meaningful spend, that's a measurement gap, not a performance verdict.",
          interpret: "TV and podcast can't be near-zero in reality given the spend levels, MTA's near-zero number reflects what it can see, not what's actually happening.",
          soWhat: [
            { symptom: "Finance is proposing to cut TV and podcast based on the 2%/1% MTA numbers", action: "Flag both as structurally undercounted before any cut decision, and pull the MMM estimate for a second opinion", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-mmm-comparison",
          concept: "MMM captures offline and brand-building channels that MTA is blind to",
          lessonAnchor: "marketing-mix-modeling-mmm",
          theoryRecap:
            "The lesson notes MMM can measure TV, radio, out-of-home, organic word of mouth, and long-term brand-building effects, precisely the things MTA can't see.",
          question:
            "The same export includes an MMM-style contribution column: TV at 11%, podcast at 6%. That's a 9-point and 5-point swing from the MTA numbers. Which set do you trust so far?",
          toolName: "Google Sheets",
          where: "Add the MMM-contribution column next to the MTA column for all 6 channels, compute the point-difference per channel.",
          procedure: [
            "Add MMM contribution % next to MTA share % for each channel",
            "Compute the absolute point-difference per channel",
            "Rank channels by the size of the disagreement between the two models",
          ],
          outputSample:
            "MODEL COMPARISON\n  Channel     MTA   MMM   Difference\n  Paid Search 52%   44%   8 pts\n  Paid Social 28%   24%   4 pts\n  Display     14%   9%    5 pts\n  Retargeting 3%    6%    3 pts\n  TV          2%    11%   9 pts\n  Podcast     1%    6%    5 pts",
          healthy: "A small point-difference between MTA and MMM for a fully-trackable digital channel, the two methods roughly agree.",
          unhealthy: "A large point-difference concentrated exactly on the untrackable channels (TV, podcast), matching the structural gap identified in Step 1.",
          interpret: "The disagreement isn't random, it's concentrated on the two channels MTA structurally can't see, which is exactly what the lesson predicts, but a model disagreement alone still isn't proof, it needs a real-world tie-breaker.",
          soWhat: [
            { symptom: "MTA and MMM disagree by 9 points on TV's contribution", action: "Don't average the two numbers or pick one by preference, pull the geo-holdout test result for TV specifically", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-geo-holdout-tiebreaker",
          concept: "Geo-holdout incrementality experiments as the tie-breaker between MMM and MTA",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's pro tip: run a spend-up or spend-down test in a subset of regions, measure the actual sales lift, then compare it against what MMM and MTA each predicted. This triangulation reveals which model is closer to ground truth.",
          question:
            "Instacart paused TV entirely in 4 test regions for 6 weeks. Sales in those regions dropped 9.5% versus matched control regions. MMM predicted an 11% contribution; MTA predicted 2%. Which model does the real-world test support, and what's the reallocation call?",
          toolName: "Google Sheets",
          where: "Add the geo-holdout result to the comparison table from Step 2, next to the MTA and MMM columns for TV.",
          procedure: [
            "Record the geo-holdout sales-lift result (9.5%) next to the MTA (2%) and MMM (11%) numbers for TV",
            "Note which model's estimate the real-world test result sits closer to",
            "Draft a one-line reallocation recommendation for TV based on the test, not either model alone",
          ],
          outputSample:
            "TV, MODEL VS. REALITY\n  MTA estimate:        2%\n  MMM estimate:        11%\n  Geo-holdout result:  9.5% sales lift when TV is on\n  Verdict: MMM was close, MTA was structurally wrong, keep TV funded",
          healthy: "A geo-holdout result close to MMM's estimate, confirming the aggregate model over the user-level model for this specific channel.",
          unhealthy: "Splitting the difference between MTA and MMM without running the test, or trusting whichever number supports the budget you already wanted.",
          interpret: "The geo-holdout, not either model, is the actual ground truth here, and it confirms TV should stay funded near MMM's estimate, not MTA's.",
          soWhat: [
            { symptom: "Finance wants to cut TV to zero based on the 2% MTA number", action: "Present the geo-holdout result as the deciding evidence and recommend keeping TV near its current budget", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the MTA-vs-MMM comparison table and layer in the geo-holdout result",
            why: "Free, sufficient for a 6-channel comparison table with no modeling software required",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Source of the underlying MTA-attributed revenue by channel",
            why: "Free tier provides the touchpoint-level data MTA numbers are built from",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Visualize the MTA-vs-MMM-vs-geo-holdout comparison for a finance-facing readout",
            why: "Free, connects directly to Sheets for a presentable chart without a paid BI tool",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 6-channel comparison table (MTA share, MMM contribution, geo-holdout result where available) with a written reallocation recommendation per channel, explicitly citing the geo-holdout as the tie-breaker for TV and podcast.",
      sampleOutput:
        "DoorDash, Q3 channel reallocation memo (excerpt)\n\n" +
        "  Channel      MTA   MMM   Geo-holdout   Verdict\n" +
        "  Paid Search  48%   41%   n/a            Trust MTA, fully trackable\n" +
        "  Display      6%    13%   +10% lift      Trust MMM, geo-holdout confirms\n" +
        "  Radio        1%    8%    +6.5% lift     Trust MMM, keep funded\n\n" +
        "Recommendation: shift 8% of Paid Search budget into Display, which the geo-holdout confirms is underfunded relative to its real contribution.",
      successCriteria: [
        "Correctly identifies TV and podcast as MTA's structural blind spots, not genuine underperformers",
        "Computes the point-difference between MTA and MMM per channel without conflating disagreement with proof",
        "Uses the geo-holdout result, not model preference, as the deciding evidence in the final reallocation recommendation",
      ],
      portfolioReady: true,
    },
  ],

  "apple-search-ads": [
    {
      id: "apple-search-ads-campaign-structure-audit",
      tier: "mini",
      archetype: "teardown",
      title: "One Campaign, Four Problems: Auditing a Real Apple Ads Account Structure",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a screenshot-style export of a single-campaign Apple Search Ads account, diagnose which search terms are silently wasting spend and explain how splitting into Brand/Competitor/Generic/Discovery would fix each defect.",
      companyId: "duolingo",
      scenario: "You're a freelance ASO consultant. A new client, a language-learning app competing with Duolingo, hands you an export of their only Apple Ads campaign, three months old, never restructured, and asks why CPA keeps climbing.",
      brief: "Read the search-term report, flag every defect using the lesson's four-campaign framework, and rank fixes by expected budget recovery.",
      mode: "teardown",
      conceptsCovered: ["How the Campaign Structure Works"],
      teardownItems: [
        {
          itemId: "single-campaign-search-term-report",
          specimen:
            "Campaign: \"App Growth - All Keywords\" (Search Match ON, broad match, no negatives)\nLast 30 days, 40,200 impressions, 2,150 taps, $4,988 spend\n\nSearch term            Taps   Installs   Spend    CPT\n\"babbel\"                 210      38      $588    $2.80\n\"duolingo\"                 4       0       $11    $2.75\n\"learn spanish app\"      340      61      $850    $2.50\n\"free language app\"      280      12      $644    $2.30\n\"language learning app\"  190      29      $437    $2.30\n\"our app name\" (own brand) 6       5       $ 9    $1.50\n\"kids coding games\"       95       1      $228    $2.40\n\"spanish for travel\"     140      22      $308    $2.20",
          specimenSource: "synthetic-realistic",
          prompt: "This single campaign mixes brand, competitor, generic, and irrelevant terms under one Search Match/broad-match setup with zero negatives. Identify every defect and name which of the four campaign types each search term belongs in.",
          answerKey: [
            {
              defect: "\"babbel\" (a named competitor) is bidding at nearly the account's highest CPT ($2.80) inside a broad campaign with no strategy behind it",
              severity: "critical",
              whyItMatters: "Competitor terms are supposed to be a deliberate, budgeted bet on intercepting rival-brand searchers, not an accident of broad match. Left here, spend on it can't be capped or evaluated separately from everything else.",
              lessonRef: "Campaign Structure: Competitor Campaign",
              owner: "you",
            },
            {
              defect: "The account's own brand term (\"our app name\") gets only 6 taps and $9 of spend in 30 days despite the cheapest CPT in the whole report ($1.50)",
              severity: "critical",
              whyItMatters: "Brand defense is described as the highest-ROI spend in the account, and it's starving here because Search Match buries it under generic terms competing for the same budget.",
              lessonRef: "Campaign Structure: Brand Campaign",
              owner: "you",
            },
            {
              defect: "\"kids coding games\" spent $228 for a single install, a term with zero topical relevance to a language app",
              severity: "moderate",
              whyItMatters: "This is exactly what Search Match without a Discovery-campaign negative list produces, an irrelevant term burning budget nobody is watching.",
              lessonRef: "Campaign Structure: Discovery Campaign",
              owner: "you",
            },
            {
              defect: "\"learn spanish app\" and \"language learning app\" (both generic/category terms) are converting at a reasonable ~18% install rate but are lumped in with everything else instead of being isolated into an exact-match Generic campaign",
              severity: "moderate",
              whyItMatters: "These are the terms that should be harvested into exact match now that they've proven themselves, per the lesson's rule that any term converting twice or more gets moved out of broad discovery.",
              lessonRef: "Campaign Structure: Discovery Campaign harvesting rule",
              owner: "you",
            },
          ],
          distractors: [
            "The overall $2.32 average CPT is too high for the category",
            "40,200 impressions is too low a volume to draw any conclusions",
            "The campaign needs a bigger daily budget to fix the CPA problem",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Sort and tag the search-term export by intent bucket", why: "Free, no account needed to practice the audit", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "AppsFlyer", role: "Verify which taps are converting to real post-install events, not just installs", why: "Confirms whether the harvested Discovery terms are worth the exact-match move on LTV, not just CPA", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A defect list mapping each search term to its correct campaign type, with the brand term's starved spend flagged as the first fix.",
      sampleOutput:
        "Robinhood ASA restructure notes (excerpt)\n\n" +
        "BRAND (move now): \"robinhood app\" — was getting 4% of budget at the cheapest CPT on the sheet, raise daily cap immediately\n" +
        "COMPETITOR (new campaign, capped budget): \"webull\", \"acorns\" — currently unbudgeted inside broad match\n" +
        "GENERIC, harvest to exact match: \"stock trading app\", \"investing app for beginners\" — both above 2x conversion threshold\n" +
        "DISCOVERY, add as negative: \"free games\", \"budget planner\" — zero relevance, cut immediately",
      successCriteria: [
        "Correctly sorts all 8 search terms into Brand/Competitor/Generic/Discovery-irrelevant",
        "Flags the starved brand term as the highest-priority fix, not the highest-spend term",
      ],
      portfolioReady: true,
    },
    {
      id: "apple-search-ads-launch-week-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The First 14 Days: Running an Apple Ads Launch Without Blowing the Budget",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Make the weekly optimization calls a real Apple Search Ads Advanced launch requires, deciding when data is trustworthy enough to act on and when patience is the correct move, across a 4-stage simulated 30-day launch.",
      companyId: "robinhood",
      scenario: "You're running Apple Search Ads Advanced for a Robinhood-style trading app's first-ever App Store campaign, a $3,000 monthly test budget split across four campaign types, launched this week.",
      brief: "At each weekly checkpoint, read the dashboard and decide whether to wait, adjust, or restructure, knowing that finance-category CPTs and CPAs run well above average.",
      mode: "simulation",
      conceptsCovered: ["Recognizing when a sample is too small to act on", "CPP mismatch diagnosis via CVR by keyword", "Cost of resetting the learning phase"],
      stages: [
        {
          stageId: "day3-early-panic",
          label: "Day 3 of 30",
          elapsed: "Day 3",
          concept: "Recognizing when a sample is too small to act on",
          lessonAnchor: "how-the-campaign-structure-works",
          situation: "Three days in. Your Generic campaign (\"stock trading app\", \"investing app for beginners\") has spent $310 with zero installs. Your CFO Slacks you asking if this was a mistake.",
          dashboard:
            "Generic Campaign, Day 3 of 30\n\n  Impressions       2,140\n  Taps                124      CTR 5.8%\n  Installs               0      CVR 0.0%\n  Spend               $310 of $3,000 monthly",
          spendToDate: "$310 of $3,000",
          budgetRemaining: "$2,690",
          decision: {
            prompt: "Zero installs after 3 days and 124 taps. What do you do?",
            options: [
              {
                id: "wait-day3",
                label: "Reply that 124 taps is too small a sample, hold the campaign unchanged, check back day 7",
                verdict: "optimal",
                outcome: "You wait. By day 7 the Generic campaign has its first 6 installs at a $54 CPA, in line with finance-category norms, and the CFO stands down.",
                why: "The lesson's timeline explicitly reserves days 1-7 for data collection, not optimization, and finance-category CPAs (well above the $2.90 blended average) mean a slow start is expected, not a failure signal.",
                lessonRef: "Advanced Optimization: Timeline for new campaigns, Days 1-7",
                nextStageId: "day9-diagnosis",
              },
              {
                id: "pause-day3",
                label: "Pause the Generic campaign immediately to stop the bleeding",
                verdict: "costly",
                outcome: "Pausing resets Apple's learning algorithm. When you relaunch on day 10, the campaign starts its data-collection clock over from zero, costing you a full extra week versus just waiting it out.",
                why: "Apple's auction needs a continuous data stream to calibrate; pausing and restarting is treated as a fresh campaign, not a resumed one.",
                lessonRef: "Advanced Optimization: Timeline for new campaigns, Days 1-7",
                nextStageId: "day9-reset-penalty",
              },
              {
                id: "raise-bid-day3",
                label: "Double the max CPT bid to force more volume and \"prove it faster\"",
                verdict: "costly",
                outcome: "Doubling the bid burns through $900 more by day 7 chasing the same low-intent taps, installs barely move because the underlying keyword-to-CPP match was never the problem, volume was.",
                why: "More spend on an under-3-day sample doesn't fix a data problem, it just makes the eventual real signal more expensive to reach.",
                lessonRef: "Advanced Optimization: Timeline for new campaigns, Days 1-7",
                nextStageId: "day9-reset-penalty",
              },
            ],
          },
        },
        {
          stageId: "day9-diagnosis",
          label: "Day 9 of 30",
          elapsed: "Day 9",
          concept: "CPP mismatch diagnosis via CVR by keyword",
          lessonAnchor: "custom-product-pages-the-hidden-multiplier",
          situation: "Nine days in. The Generic campaign now has real volume. One keyword theme is converting far below the rest.",
          dashboard:
            "Generic Campaign, Day 9 of 30\n\n" +
            "\"stock trading app\"            410 taps   CVR 9.0%   CPA $28\n" +
            "\"investing app for beginners\"  260 taps   CVR 8.5%   CPA $29\n" +
            "\"crypto trading app\"           190 taps   CVR 1.6%   CPA $172\n\n" +
            "All three route to the same default product page, which leads with stock-charting screenshots.",
          spendToDate: "$2,240 of $3,000",
          budgetRemaining: "$760",
          decision: {
            prompt: "\"crypto trading app\" is converting 5x worse than the other two generic terms on the same product page. What's the move?",
            options: [
              {
                id: "cpp-fix",
                label: "Build a Custom Product Page leading with crypto screenshots and route the crypto keyword to it",
                verdict: "optimal",
                outcome: "CVR on \"crypto trading app\" climbs to 7.1% within a week once the page matches the search intent, CPA drops from $172 to roughly $39, in line with the other terms.",
                why: "A keyword promising crypto trading but landing on stock-chart screenshots is exactly the mismatch the lesson warns costs 15-30% of conversion, here it was closer to 80%.",
                lessonRef: "Custom Product Pages: The Hidden Multiplier",
                nextStageId: "end",
              },
              {
                id: "cut-keyword",
                label: "Cut the \"crypto trading app\" keyword entirely, it's clearly a weak term",
                verdict: "acceptable",
                outcome: "Spend stabilizes but you never learn whether crypto searchers were a real opportunity, competitors keep bidding on that term uncontested.",
                why: "Cutting removes the symptom without testing the actual fix; it's not wrong, but it forfeits a segment the other two keywords prove is reachable.",
                lessonRef: "Custom Product Pages: The Hidden Multiplier",
                nextStageId: "end",
              },
              {
                id: "ignore-cpp",
                label: "Leave it running, $172 CPA is still under the finance-category benchmark ceiling",
                verdict: "costly",
                outcome: "By day 20, the crypto keyword alone has burned $860 more at the same broken CVR, money a one-time CPP build would have saved by day 12.",
                why: "Being under a category benchmark doesn't mean a specific keyword isn't broken; the same-page mismatch is a fixable, diagnosable cause sitting in the data already.",
                lessonRef: "Custom Product Pages: The Hidden Multiplier",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day9-reset-penalty",
          label: "Day 9 of 30 (after a day-3 restart)",
          elapsed: "Day 9",
          concept: "Cost of resetting the learning phase",
          lessonAnchor: "advanced-optimization-bid-strategy-and-share-of-voice",
          situation: "Because the campaign was paused or over-bid on day 3, you're only two days into a second learning phase with the monthly budget half gone.",
          dashboard:
            "Generic Campaign, Day 9 of 30 (restarted day 7)\n\n  Spend to date        $2,180 of $3,000\n  Installs so far           14\n  Blended CPA             $156\n  Days of budget left        6 (at current burn rate)",
          spendToDate: "$2,180 of $3,000",
          budgetRemaining: "$820",
          decision: {
            prompt: "You're burning budget fast with only 6 days of runway left and a blended CPA nearly 3x the finance-category norm. What now?",
            options: [
              {
                id: "cut-losses",
                label: "Cut daily budget in half immediately to stretch the remaining runway to month-end",
                verdict: "acceptable",
                outcome: "You avoid running out of budget before day 30, but the campaign never accumulates enough volume this month to properly diagnose the CPP mismatch that caused the original slow start.",
                why: "It contains the damage from the earlier mistake, but the underlying lesson, don't reset a live learning phase, is now a sunk cost for this month's data.",
                lessonRef: "Advanced Optimization: Timeline for new campaigns",
                nextStageId: "end",
              },
              {
                id: "keep-going",
                label: "Leave the budget as-is and hope it recovers before month-end",
                verdict: "costly",
                outcome: "The campaign fully exhausts its $3,000 by day 24 without ever stabilizing, leaving 6 days with zero App Store presence and no usable data to plan month two.",
                why: "The lesson's timeline treats days 30-60 as the restructuring point precisely because a single month rarely recovers from a reset this early without intervention.",
                lessonRef: "Advanced Optimization: Timeline for new campaigns",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$500 minimum monthly budget (Advanced mode has no cap, but under $500 rarely clears the learning phase)",
        minDurationDays: 14,
        setupSteps: [
          "Enroll in Apple Search Ads Advanced with an App Store Connect account",
          "Build the four-campaign structure (Brand, Competitor, Generic, Discovery) from day one",
          "Set Search Match ON only in Discovery, with every other campaign's keywords added as negatives",
        ],
        checkInSchedule: "Check the dashboard on day 3 (observe only), day 7 (first adjustments), day 14 (structural review)",
      },
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log weekly CPT/CPA/CVR by campaign to spot the trend, not just the daily snapshot", why: "Free, and daily dashboard noise is exactly what causes premature day-3 panic", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "AppsFlyer", role: "Attribute post-install revenue events (funded account, first trade) back to the keyword", why: "CPA alone can't tell you if the crypto-keyword traffic is high-LTV; a paid MMP closes that loop", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A day-by-day decision log across the 30-day launch explaining what was waited on, what was fixed, and why.",
      sampleOutput:
        "Nykaa ASA launch log (excerpt)\n\n" +
        "Day 3: 2 installs on 96 taps. Holding, sample too small per the 7-day rule.\n" +
        "Day 7: CVR stabilized at 6.8% on Generic. First bid adjustment: raised \"lipstick shades for indian skin tone\" by 15%.\n" +
        "Day 9: \"skincare routine app\" keyword converting 4x worse than \"makeup try on app\" on the same default CPP. Built a skincare-led CPP, routed the keyword to it.\n" +
        "Day 14: Skincare CPP live for 5 days, CVR up from 1.9% to 6.4% on that keyword. Structural review scheduled day 30.",
      successCriteria: [
        "Waits through the day-3 checkpoint rather than acting on an under-powered sample",
        "Diagnoses the day-9 CVR gap as a CPP/keyword mismatch, not a bidding problem",
      ],
      portfolioReady: true,
    },
  ],
  "ctv-ott-ads": [
    {
      id: "ctv-ott-ads-buying-lane-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Which Buying Lane, Modeling a $15K/Month CTV Budget Across Self-Serve, DSP, and FAST",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective: "Given a fixed monthly CTV budget and a reach/frequency goal, forecast realistic impression volume and blended CPM across the three buying lanes (self-serve, programmatic DSP, FAST channels) to recommend a split.",
      companyId: "thredup",
      scenario: "You're the growth marketer at a ThredUp-style online resale marketplace with a new $15,000/month test budget to move off saturated Meta prospecting and into CTV for the first time.",
      brief: "Model expected impressions and blended CPM for three allocation scenarios, then recommend a split that balances reach against premium-streamer brand lift.",
      mode: "diagnostic",
      conceptsCovered: ["Self-serve vs. programmatic DSP vs. FAST channel tradeoffs", "Unified frequency capping across platforms"],
      steps: [
        {
          stepId: "step-1-lane-selection",
          concept: "Self-serve vs. programmatic DSP vs. FAST channel tradeoffs",
          lessonAnchor: "how-the-buying-system-works",
          theoryRecap: "The lesson splits CTV buying into three lanes by budget size: self-serve managed platforms ($1K-$250K/month), programmatic DSPs (cross-platform unified buys), and FAST channels ($12-20 CPM vs. $25-65 on premium streamers).",
          question: "At $15,000/month, is this budget better spent entirely on a premium self-serve platform like Roku Ads Manager, split across FAST channels, or blended?",
          toolName: "Google Sheets",
          where: "Build a 3-row model: Premium-only, FAST-only, and a 60/40 blended scenario.",
          procedure: [
            "Row 1: $15,000 at a $35 blended premium CPM (Netflix/Hulu range) = ~428,500 impressions",
            "Row 2: $15,000 at a $16 blended FAST CPM (Tubi/Pluto/Roku Channel range) = ~937,500 impressions",
            "Row 3: 60% ($9,000) to FAST at $16 CPM + 40% ($6,000) to premium at $35 CPM = 562,500 + 171,400 = ~733,900 impressions",
            "Compare completion rates: 88-94% on FAST vs. ~95% on premium, both well above social video",
          ],
          outputSample:
            "Scenario          Impressions   Blended CPM   Completion Rate\nPremium-only         428,500        $35.00           ~95%\nFAST-only             937,500        $16.00         88-94%\n60/40 Blend            733,900        $20.44         90-94%",
          healthy: "The blended scenario delivers 71% more reach than premium-only at a completion rate within a few points of it, using FAST volume to fund a smaller premium presence for brand-safe placements.",
          unhealthy: "Spending the entire $15,000 on premium streamers because they \"sound better,\" delivering under half the reach for a completion-rate difference of only a few points.",
          interpret: "At this budget size, reach efficiency from FAST channels usually outweighs the marginal completion-rate edge of premium streamers, the lesson's own guidance for advertisers under $20,000/month.",
          soWhat: [
            { symptom: "Budget under $20K/month is being allocated 100% to premium streamers", action: "Shift the majority to FAST channels and use premium only for high-value creative moments", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-frequency-cap",
          concept: "Unified frequency capping across platforms",
          lessonAnchor: "step-3-set-frequency-caps",
          theoryRecap: "The lesson warns that a 3-per-week cap set separately on 3 different DSPs becomes a 9-per-week cap for any household reachable across all three, unless the cap is unified.",
          question: "The blended plan above runs across 2 self-serve platforms (Roku Ads Manager for FAST, MNTN for premium) with no shared frequency cap set yet. What's the risk and the fix?",
          toolName: "Google Sheets",
          where: "Add a frequency-cap column to the buying-lane model built in step 1.",
          procedure: [
            "Set a 3-per-week cap inside Roku Ads Manager",
            "Set a separate 3-per-week cap inside MNTN",
            "Recognize any household reachable on both platforms can see up to 6 ads/week instead of the intended 3",
            "Either lower each platform's individual cap to 1-2/week, or move to a single DSP that can enforce one cap across both lanes",
          ],
          outputSample: "Household overlap check: 34% of the FAST-reachable audience is also reachable on MNTN's premium inventory -> uncapped combined frequency could hit 6/week for over a third of the target audience.",
          healthy: "Each platform's cap is set to roughly half the target (1-2/week) to keep the combined ceiling near the intended 3/week for overlapping households.",
          unhealthy: "Both platforms run their own full 3/week cap independently, quietly doubling frequency for the highest-overlap third of the audience.",
          interpret: "A frequency cap set at the platform level, not the household level, is not really a cap once you're buying across more than one platform.",
          soWhat: [
            { symptom: "Two or more CTV platforms are live with the same nominal frequency cap", action: "Halve each platform's individual cap or consolidate into a single DSP that unifies it", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Model impression volume and blended CPM across buying-lane scenarios", why: "No CTV spend required to test the allocation math before committing budget", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Google Ads", role: "Run the YouTube CTV portion of the blended buy once the allocation is decided", why: "The lesson names YouTube via Google Ads as a real CTV buying lane, and it's the one cataloged tool that actually reaches living-room TV screens", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A 3-scenario impression/CPM forecast model with a recommended budget split and a frequency-cap plan across platforms.",
      sampleOutput:
        "Grab CTV test budget model (excerpt)\n\n" +
        "Premium-only ($20K):     571,400 impressions at $35 CPM\n" +
        "FAST-only ($20K):      1,250,000 impressions at $16 CPM\n" +
        "Recommended 65/35 blend: 1,043,600 impressions, blended CPM $19.16\n\n" +
        "Frequency cap: Roku Channel capped at 2/week, premium DSP capped at 1/week, combined ceiling ~3/week for overlapping households.",
      successCriteria: [
        "Correctly calculates impression volume from budget divided by CPM for all three scenarios",
        "Identifies the frequency-cap overlap risk and proposes a specific fix",
      ],
      portfolioReady: true,
    },
    {
      id: "ctv-ott-ads-lift-study-simulation",
      tier: "core",
      archetype: "simulation",
      title: "Prove It Without a Click: Running a CTV Lift Study Under Pressure",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective: "Navigate a simulated 6-week CTV campaign where last-click attribution shows almost nothing, deciding when to trust an incrementality lift study over the CFO's instinct to pull the budget.",
      companyId: "peloton",
      scenario: "You're the performance marketing lead at a Peloton-style connected fitness brand running your first CTV campaign, $40,000 over 6 weeks on Hulu and Roku, with a geo-lift test structured from day one.",
      brief: "Defend the channel through the weeks where last-click attribution looks broken, using the lift-study design correctly instead of reverting to last-click to make the CFO comfortable.",
      mode: "simulation",
      conceptsCovered: ["Last-click attribution undercounting CTV", "Frequency cap and brand sentiment tradeoff"],
      stages: [
        {
          stageId: "week2-last-click-panic",
          label: "Week 2 of 6",
          elapsed: "Week 2",
          concept: "Last-click attribution undercounting CTV",
          lessonAnchor: "step-4-measure-the-right-way",
          situation: "Two weeks in. Google Analytics last-click reports show only 12 conversions attributed to \"CTV\" out of $13,300 spent so far. The CFO asks why you're not pulling the plug.",
          dashboard:
            "Last-click view, Weeks 1-2\n  CTV-attributed conversions: 12\n  Cost per last-click conversion: $1,108\n\nGeo-lift test (test markets vs. holdout markets), Weeks 1-2\n  Test market trial signups: 640\n  Holdout market trial signups: 512\n  Lift so far: +25% (early, not yet significant)",
          spendToDate: "$13,300 of $40,000",
          budgetRemaining: "$26,700",
          decision: {
            prompt: "Last-click says CTV is nearly worthless. The geo-lift test, the actual measurement method the campaign was designed around, shows an early +25% signal. What do you tell the CFO?",
            options: [
              {
                id: "trust-liftstudy",
                label: "Show the geo-lift comparison, explain last-click structurally cannot see CTV, and hold the plan through week 4 when the test reaches significance",
                verdict: "optimal",
                outcome: "By week 4 the lift test reaches statistical significance at +21% incremental trial signups in test markets, the CFO approves the remaining budget.",
                why: "The lesson is explicit that CTV ads have no clickable link and last-click will make the channel look worthless by design, the geo-lift test is the instrument that was actually built to measure this.",
                lessonRef: "Step 4: Measure the Right Way, Incrementality lift studies",
                nextStageId: "week5-frequency-check",
              },
              {
                id: "switch-to-lastclick",
                label: "Agree the numbers look bad and reallocate half the remaining budget back to Meta retargeting",
                verdict: "costly",
                outcome: "Cutting the CTV budget mid-test breaks the geo-lift design (test markets now get inconsistent exposure), the study becomes unreadable, and you can never actually prove or disprove the channel's value from this flight.",
                why: "A lift study needs a clean, consistent test-vs-holdout split for its full duration; changing spend mid-flight in the test markets invalidates the comparison the CFO would need to see anyway.",
                lessonRef: "Step 4: Measure the Right Way, Incrementality lift studies",
                nextStageId: "end",
              },
              {
                id: "add-tracking-pixel",
                label: "Add a view-through pixel this week and report those numbers instead of waiting for the lift test",
                verdict: "acceptable",
                outcome: "View-through data gives a slightly better story (34 tagged visits) but the lesson is clear this is directional, not rigorous, the CFO remains skeptical and you still need the lift test to close the argument.",
                why: "View-through attribution is a real, useful signal, but the lesson ranks it below lift studies as the gold standard specifically because it doesn't isolate causation the way a holdout comparison does.",
                lessonRef: "Step 4: Measure the Right Way, View-through attribution",
                nextStageId: "week5-frequency-check",
              },
            ],
          },
        },
        {
          stageId: "week5-frequency-check",
          label: "Week 5 of 6",
          elapsed: "Week 5",
          concept: "Frequency cap and brand sentiment tradeoff",
          lessonAnchor: "step-3-set-frequency-caps",
          situation: "The lift study is reading positive and the CFO wants to double down. Someone on the team suggests raising the frequency cap from 3/week to 6/week on Hulu to accelerate results before the flight ends.",
          dashboard:
            "Current: 3 impressions/household/week, Hulu only (single platform, cap already unified)\nBrand sentiment survey (mid-flight): neutral-to-positive\nProposed: raise cap to 6/week for the final week",
          spendToDate: "$34,600 of $40,000",
          budgetRemaining: "$5,400",
          decision: {
            prompt: "Doubling the frequency cap for the final week to squeeze more results before the flight ends, good idea?",
            options: [
              {
                id: "hold-cap",
                label: "Keep the 3/week cap; the remaining budget is better spent extending reach to new households, not repeating exposure",
                verdict: "optimal",
                outcome: "The final week's lift result holds at +19%, and post-flight brand sentiment stays neutral-to-positive with no measurable fatigue.",
                why: "The lesson states more than 3 impressions/week damages brand sentiment without additional conversion benefit, there is no upside being traded away here.",
                lessonRef: "Step 3: Set Frequency Caps",
                nextStageId: "end",
              },
              {
                id: "raise-cap",
                label: "Raise the cap to 6/week to try to close stronger before the deadline",
                verdict: "costly",
                outcome: "The post-flight brand sentiment survey dips into negative territory for the over-exposed household segment, and the final week's incremental lift barely moves, the extra frequency bought fatigue, not results.",
                why: "The lesson names this exact failure mode: frequency beyond 3/week has a well-documented sentiment cost with no corresponding conversion upside.",
                lessonRef: "Step 3: Set Frequency Caps",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      liveTrack: {
        minSpend: "$5,000 minimum to structure a readable geo-lift split across at least 2 test and 2 holdout markets",
        minDurationDays: 28,
        setupSteps: [
          "Pick matched test and holdout DMAs of similar size and baseline conversion rate",
          "Confirm the chosen self-serve platform or DSP supports geo-level exclusion targeting",
          "Set the frequency cap once at the DSP level before launch, not per-platform",
        ],
        checkInSchedule: "Check test-vs-holdout delta weekly; do not change spend levels in test markets mid-flight",
      },
      toolStack: {
        free: [
          { toolName: "Google Analytics 4", role: "Track view-through visits and site conversions as a directional secondary signal alongside the lift study", why: "Free, already instrumented on most sites, useful context even though it's not the primary measurement method", required: true, lastVerified: "2026-08" },
          { toolName: "Looker Studio", role: "Build the weekly test-vs-holdout geo-lift comparison the CFO conversation actually depends on", why: "Free, pulls straight from GA4 and Sheets, and produces the comparison chart described in the lesson's Step 4", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
        paidUpgradeNote: "No dedicated CTV DSP or lift-measurement tool (e.g. The Trade Desk, MNTN) is currently in this site's tool directory, see final report; the free GA4 + Looker Studio path above is a real, complete way to build the geo-lift comparison by hand, a paid platform's native lift tooling would only remove manual market-matching effort, not add a capability this path lacks.",
      },
      deliverable: "A week-by-week defense log showing what last-click said, what the geo-lift test said, and which decision was made at each pressure point.",
      sampleOutput:
        "FirstCry CTV flight log (excerpt)\n\n" +
        "Week 2: Last-click shows 8 conversions on ₹9.4L spend. Geo-lift early read: +18% trial signups, test vs. holdout, not yet significant. Holding the plan.\n" +
        "Week 4: Lift reaches significance at +23%. CFO approves remaining spend.\n" +
        "Week 5: Held frequency cap at 3/week despite a request to raise it; final lift held at +20% with stable brand sentiment.",
      successCriteria: [
        "Chooses the geo-lift study over last-click or a mid-flight budget cut at the week-2 pressure point",
        "Holds the frequency cap at week 5 rather than trading sentiment for a rushed final push",
      ],
      portfolioReady: true,
    },
  ],

  "reddit-ads": [
    {
      id: "reddit-ads-campaign-export-audit",
      tier: "mini",
      archetype: "audit",
      title: "Before You Scale: Auditing a Reddit Campaign Export",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real Reddit Ads campaign export (12 subreddits, keyword layer, and Pixel status), decide which subreddits to cut, whether the keyword layer is doing its job, and whether the campaign is even allowed to prove ROI yet.",
      companyId: "nykaa",
      scenario:
        "You're a paid social analyst at Nykaa, India's largest beauty and fashion ecommerce platform, reviewing a Reddit Ads campaign a junior teammate launched two weeks ago for a new clean-beauty skincare line, before the team commits another month of budget to it.",
      brief:
        "Sort the 12 targeted subreddits by real intent fit, check whether Contextual Keyword Targeting is layered correctly, and confirm the Pixel is actually installed before anyone talks about scaling spend.",
      mode: "diagnostic",
      conceptsCovered: [
        "Picking 5-15 hand-picked subreddits over broad interest categories",
        "Layering Contextual Keyword Targeting on top of subreddit targeting",
        "Installing the Reddit Pixel before spending on conversions",
      ],
      steps: [
        {
          stepId: "step-1-subreddit-fit",
          concept: "Picking 5-15 hand-picked subreddits over broad interest categories",
          lessonAnchor: "step-1-pick-5-15-subreddits-not-50",
          theoryRecap:
            "The lesson's Step 1 says to hand-pick 5-15 subreddits confirmed to have 10,000+ weekly active users, and to avoid mega-subreddits like r/funny that eat budget with zero purchase intent.",
          question:
            "The export lists 12 targeted subreddits. Two of them are r/BeautyTricks (2.1M members, general beauty meme community) and r/AskIndia (1.8M members, general Q&A). Both have huge reach. Should they stay in the campaign?",
          toolName: "Google Sheets",
          where: "Import the campaign export CSV, freeze the header row, sort by the subreddit column.",
          procedure: [
            "Import reddit-campaign-export.csv and freeze row 1",
            "List all 12 targeted subreddits with member count and weekly active users",
            "Flag any subreddit with fewer than 10,000 weekly active users as too small",
            "Flag any subreddit whose primary content is memes, general Q&A, or unrelated topics as too broad",
          ],
          outputSample:
            "Subreddit           Members   WAU      Topic fit\n" +
            "r/SkincareAddiction  3.2M      410K     high, active ingredient debates\n" +
            "r/IndianSkincareAddicts  180K  38K      high, India-specific routines\n" +
            "r/30PlusSkinCare     420K      61K      high, anti-aging focus\n" +
            "r/BeautyTricks       2.1M      290K     low, general meme content\n" +
            "r/AskIndia           1.8M      210K     low, unrelated general Q&A\n" +
            "...7 more rows, mix of niche skincare and beauty-adjacent subs",
          healthy:
            "r/SkincareAddiction, r/IndianSkincareAddicts, and r/30PlusSkinCare stay because their entire feed is people debating skincare products, exactly the conversation this product belongs in.",
          unhealthy:
            "r/BeautyTricks and r/AskIndia stay in the campaign because their raw member counts look impressive, even though almost none of that traffic is discussing skincare purchase decisions.",
          interpret:
            "Reach numbers lie. A 2.1M-member meme subreddit delivers worse buying intent than a 180K-member subreddit where every third post is 'what serum should I buy.'",
          soWhat: [
            {
              symptom: "Two of twelve targeted subreddits have low topic fit despite high member counts",
              action: "Pause r/BeautyTricks and r/AskIndia, reallocate their budget to the three high-fit subreddits",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-keyword-layer-check",
          concept: "Layering Contextual Keyword Targeting on top of subreddit targeting",
          lessonAnchor: "step-2-layer-contextual-keyword-targeting",
          theoryRecap:
            "The lesson's Step 2 says Contextual Keyword Targeting restricts impressions to threads containing specific phrases, and should be layered on top of subreddit targeting, not used instead of it.",
          question:
            "The export shows the campaign has subreddit targeting set up correctly, but the Contextual Keyword Targeting field is empty across all ad groups. What does that mean for the ads currently running?",
          toolName: "Google Sheets",
          where: "Check the keyword_targeting column in the campaign export against the ad group settings sheet.",
          procedure: [
            "Filter the export to the keyword_targeting column",
            "Confirm the column is blank for all 3 ad groups",
            "Cross-reference against the lesson's list of high-intent phrases for this category",
            "Draft the keyword list: 'switching from', 'best serum for', 'is this worth it', 'dupe for'",
          ],
          outputSample:
            "Ad group            Subreddit targeting   Keyword targeting\n" +
            "AG1 - Core Skincare  Set (3 subs)           BLANK\n" +
            "AG2 - Anti-Aging     Set (2 subs)            BLANK\n" +
            "AG3 - Retargeting    Set (1 sub)              BLANK",
          healthy:
            "Every ad group has both subreddit targeting and a keyword layer, so impressions fire only when the conversation is actually about switching products or picking one.",
          unhealthy:
            "The ad shows on every single post in the subreddit, including unrelated meme posts, jokes, and off-topic discussion threads, because there is no keyword filter narrowing it further.",
          interpret:
            "Subreddit targeting alone gets you into the right neighborhood. Keyword targeting gets you into the right conversation inside that neighborhood, and skipping it wastes impressions on irrelevant threads.",
          soWhat: [
            {
              symptom: "Keyword targeting field is empty on all ad groups despite correct subreddit setup",
              action: "Add the drafted keyword list to Contextual Keyword Targeting on all 3 ad groups before the next budget review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-pixel-readiness",
          concept: "Installing the Reddit Pixel before spending on conversions",
          lessonAnchor: "step-4-install-the-reddit-pixel-on-day-one",
          theoryRecap:
            "The lesson's Step 4 says the Reddit Pixel is non-negotiable: without it you cannot retarget visitors, cannot run Conversions-objective campaigns, and cannot prove ROI.",
          question:
            "The campaign has been live for two weeks and the objective is set to 'Conversions,' but the Pixel status column shows 'Not Detected.' What does this mean for every metric the team has reported so far?",
          toolName: "Reddit Ads Manager",
          where: "Events Manager tab inside Reddit Ads Manager, Pixel status indicator.",
          procedure: [
            "Open Events Manager and check the Pixel status indicator",
            "Confirm 'Not Detected' status against the site's actual page source (search for the Reddit Pixel script tag)",
            "Check whether any Conversions-objective optimization has been running blind",
            "Flag the two weeks of 'Conversions' data as unreliable until the Pixel fires correctly",
          ],
          outputSample:
            "Events Manager\n" +
            "  Pixel status: Not Detected\n" +
            "  PageVisit events (last 14 days): 0\n" +
            "  Purchase events (last 14 days): 0\n" +
            "  Campaign objective: Conversions\n" +
            "  Reported conversions in dashboard: 14 (self-reported by landing page tool, not Pixel-verified)",
          healthy:
            "The Pixel fires PageVisit and Purchase events, the Conversions objective has real signal to optimize against, and every reported number can be trusted.",
          unhealthy:
            "A Conversions-objective campaign runs for two weeks with zero Pixel events, meaning Reddit's algorithm has been optimizing blind and the '14 conversions' in the dashboard came from an unrelated tool, not verified purchases.",
          interpret:
            "A Conversions campaign without a working Pixel is not measuring conversions at all. Every decision made from that data for the past two weeks needs to be treated as unverified.",
          soWhat: [
            {
              symptom: "Pixel shows 'Not Detected' on a live Conversions-objective campaign",
              action: "Escalate to the developer to install the Pixel base code plus Purchase event immediately, pause budget scaling until it's confirmed firing",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Sort and audit the campaign export", why: "No account friction, works with any CSV export", required: true, lastVerified: "2026-08" },
          { toolName: "Reddit Ads Manager", role: "Check live Pixel status and ad group settings", why: "Free self-serve platform, required to verify what's actually configured", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo listing which subreddits to cut, the missing keyword list to add, and a flagged Pixel issue blocking accurate reporting.",
      sampleOutput:
        "Grammarly, Reddit campaign audit (excerpt)\n\n" +
        "CUT (low topic fit despite high reach)\n" +
        "  r/InternetIsBeautiful, r/todayilearned\n\n" +
        "KEEP + ADD KEYWORDS\n" +
        "  r/college, r/writing -> add: 'switching from', 'grammar checker for', 'is this worth it'\n\n" +
        "BLOCKER\n" +
        "  Pixel status: Not Detected on 3 of 4 landing pages, escalate before scaling spend further",
      successCriteria: [
        "Correctly flags both low-fit subreddits despite their high member counts",
        "Identifies the missing keyword layer across all ad groups",
        "Catches the Pixel-not-detected issue and flags it as blocking, not cosmetic",
      ],
      portfolioReady: true,
    },
    {
      id: "reddit-ads-learning-phase-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 14-Day Learning Phase: Reddit Budget Decisions",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Run a simulated 14-day Reddit Ads launch for a new product, making the bidding, comment-moderation, and scaling decisions a real campaign manager faces, with each choice routing to a realistically better or worse outcome.",
      companyId: "instacart",
      scenario:
        "You're testing Reddit as a new acquisition channel for Instacart+, the membership program, running a Conversation Ads campaign in r/MealPrepSunday, r/EatCheapAndHealthy, and r/instantpot with a $2,000 flight budget.",
      brief:
        "Manage manual CPC bidding through the learning phase, handle a hostile comment thread, decide when to switch to oCPM, and structure retargeting correctly at the end of the flight.",
      mode: "simulation",
      conceptsCovered: [
        "Manual CPC bidding through the learning phase before switching to oCPM",
        "Treating the comment section as active campaign management, not a side channel",
        "Switching to oCPM Conversions only after 50+ recorded conversions",
        "Structuring retargeting as its own ad group with its own creative",
      ],
      stages: [
        {
          stageId: "day2-early-check",
          label: "Day 2, first dashboard check",
          elapsed: "Day 2 of 14",
          concept: "Manual CPC bidding through the learning phase before switching to oCPM",
          lessonAnchor: "step-5-use-manual-cpc-bidding-first-then-switch",
          situation:
            "The campaign launched 48 hours ago on manual CPC. You open the dashboard for the first time since launch.",
          dashboard:
            "Conversation Ads campaign - Instacart+ Trial\n" +
            "  Impressions        18,400\n" +
            "  Clicks                 92     CTR 0.5%\n" +
            "  Conversions              2     CVR 2.2%\n" +
            "  Cost per conversion  $41.00\n" +
            "  Spend to date        $82.00",
          spendToDate: "$82.00 of $2,000",
          budgetRemaining: "$1,918.00",
          decision: {
            prompt: "Two conversions in two days on manual CPC. What's the move?",
            options: [
              {
                id: "switch-auto-early",
                label: "Switch to oCPM Conversions now, the algorithm can optimize faster with automation",
                verdict: "costly",
                outcome:
                  "The algorithm has almost no conversion data to learn from. It spends the next several days chasing a weak signal and CPA climbs instead of falling.",
                why: "oCPM needs a real signal to optimize against. Two conversions is not a pattern, it's noise, and switching this early throws away the manual-bid data you'd need to know if the campaign even works.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day5-comment-crisis-behind",
              },
              {
                id: "keep-manual",
                label: "Leave it on manual CPC, keep the bid where it is, check back in a few days",
                verdict: "optimal",
                outcome:
                  "You let the campaign run undisturbed. Two days of data is nowhere near the 50-conversion threshold the lesson sets for switching bid strategies.",
                why: "Manual CPC through the early days protects you from an algorithm optimizing on noise, and gives you real signal to judge the campaign by later.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day5-comment-crisis",
              },
              {
                id: "raise-bid",
                label: "Raise the manual bid 50% to speed up impression volume",
                verdict: "acceptable",
                outcome:
                  "Impressions increase and so does spend, but the underlying CTR and conversion pattern don't actually change, you've just bought the same signal faster and more expensively.",
                why: "This isn't wrong, but it's not the highest-leverage move at day 2, patience costs nothing here and a bid increase does.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day5-comment-crisis",
              },
            ],
          },
        },
        {
          stageId: "day5-comment-crisis",
          label: "Day 5, a comment thread turns hostile",
          elapsed: "Day 5 of 14",
          concept: "Treating the comment section as active campaign management, not a side channel",
          lessonAnchor: "common-mistakes-that-kill-campaigns",
          situation:
            "A Conversation Ad in r/EatCheapAndHealthy has a top comment reading 'another company trying to make meal prep a subscription, no thanks' with 340 upvotes, posted 90 minutes ago.",
          dashboard:
            "Ad group: r/EatCheapAndHealthy Conversation Ad\n" +
            "  CTR before comment      0.6%\n" +
            "  CTR last 90 min         0.2% (declining)\n" +
            "  Comment upvotes         340\n" +
            "  Comment age              90 minutes",
          spendToDate: "$310.00 of $2,000",
          budgetRemaining: "$1,690.00",
          decision: {
            prompt: "A sarcastic top comment with 340 upvotes is dragging your CTR down in real time. What do you do?",
            options: [
              {
                id: "ignore-comment",
                label: "Ignore it, comments are noise, focus on the dashboard metrics",
                verdict: "costly",
                outcome:
                  "CTR keeps sliding over the next 24 hours as the comment stays pinned at the top of the thread with no response. The ad flight underperforms its own first-week benchmark by the time you check again.",
                why: "A single unanswered sarcastic top comment can tank CTR for the entire flight, engagement is part of campaign management on Reddit, not a separate job.",
                lessonRef: "Common Mistakes That Kill Campaigns, Mistake 3",
                nextStageId: "day9-diagnosis",
              },
              {
                id: "respond-helpfully",
                label: "Post a genuine, specific reply addressing the subscription concern directly",
                verdict: "optimal",
                outcome:
                  "The reply gets several upvotes of its own, the thread tone shifts, and CTR recovers within a few hours as the top comment stops being purely negative.",
                why: "Responding within 2 hours with something that sounds human, not corporate, is exactly what the lesson calls out as required Reddit campaign management.",
                lessonRef: "Common Mistakes That Kill Campaigns, Mistake 3",
                nextStageId: "day9-scaling-decision",
              },
              {
                id: "delete-report",
                label: "Report the comment to Reddit as it violates no rules, and hope it gets removed",
                verdict: "costly",
                outcome:
                  "The comment doesn't violate any rules, so nothing happens, and the delay costs you the response window while CTR keeps declining.",
                why: "You can't moderate away a legitimate opinion, and trying to wastes the 2-hour response window the lesson specifically calls out.",
                lessonRef: "Common Mistakes That Kill Campaigns, Mistake 3",
                nextStageId: "day9-diagnosis",
              },
            ],
          },
        },
        {
          stageId: "day9-scaling-decision",
          label: "Day 9, conversions cross the threshold",
          elapsed: "Day 9 of 14",
          concept: "Switching to oCPM Conversions only after 50+ recorded conversions",
          lessonAnchor: "step-5-use-manual-cpc-bidding-first-then-switch",
          situation:
            "The campaign recovered after your comment response. You now have 54 recorded conversions on manual CPC, comfortably past the lesson's 50-conversion threshold.",
          dashboard:
            "Campaign totals, day 9\n" +
            "  Conversions            54\n" +
            "  Cost per conversion   $19.40\n" +
            "  Spend to date        $1,047.60\n" +
            "  Bid strategy          Manual CPC",
          spendToDate: "$1,047.60 of $2,000",
          budgetRemaining: "$952.40",
          decision: {
            prompt: "You've crossed 50 conversions on manual CPC. What now?",
            options: [
              {
                id: "switch-ocpm-now",
                label: "Switch to oCPM Conversions now that there's a real signal to optimize against",
                verdict: "optimal",
                outcome:
                  "The algorithm now has enough data to find people similar to your 54 converters. Cost per conversion trends down over the remaining flight.",
                why: "This is exactly the threshold the lesson sets for switching, waiting further just delays letting the algorithm do what manual bidding can't.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day14-retargeting-structure",
              },
              {
                id: "stay-manual-longer",
                label: "Keep manual CPC running for the rest of the flight to be safe",
                verdict: "acceptable",
                outcome:
                  "The campaign keeps performing steadily, but you leave efficiency on the table, oCPM's algorithm could have found cheaper converters with the data already in hand.",
                why: "Not wrong, but overly cautious once you've already cleared the threshold the lesson names for switching.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day14-retargeting-structure",
              },
              {
                id: "double-budget",
                label: "Double the remaining budget and keep manual CPC to chase volume fast",
                verdict: "costly",
                outcome:
                  "Spend accelerates but the manual bid can't adapt to who's converting, so cost per conversion creeps up instead of down over the final days.",
                why: "More budget without switching to an optimization strategy that can use your conversion data just buys more of the same inefficiency, faster.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day14-retargeting-structure",
              },
            ],
          },
        },
        {
          stageId: "day5-comment-crisis-behind",
          label: "Day 5, recovering from an early oCPM switch",
          elapsed: "Day 5 of 14",
          concept: "Switching to oCPM Conversions only after 50+ recorded conversions",
          lessonAnchor: "step-5-use-manual-cpc-bidding-first-then-switch",
          situation:
            "Having switched to oCPM at day 2 with almost no signal, cost per conversion has climbed to $58, well above the manual-CPC baseline. You now also have a hostile top comment forming in r/EatCheapAndHealthy.",
          dashboard:
            "Campaign totals, day 5\n" +
            "  Bid strategy           oCPM Conversions (switched day 2)\n" +
            "  Cost per conversion   $58.00 (up from $41 baseline)\n" +
            "  Spend to date         $610.00\n" +
            "  Top comment            340 upvotes, unanswered, 90 min old",
          spendToDate: "$610.00 of $2,000",
          budgetRemaining: "$1,390.00",
          decision: {
            prompt: "The early oCPM switch is costing you efficiency, and now a hostile comment needs a response too. Which do you fix first?",
            options: [
              {
                id: "revert-and-respond",
                label: "Switch back to manual CPC to stop the bleeding, and respond to the comment in the same sitting",
                verdict: "acceptable",
                outcome:
                  "Cost per conversion stabilizes back toward baseline over the next few days, and the comment response prevents further CTR decline. You've recovered, but you're behind where an undisturbed campaign would be.",
                why: "This is damage control done right, but the original early switch already cost real budget that a patient manual-CPC period would have saved.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day9-diagnosis",
              },
              {
                id: "stay-ocpm",
                label: "Stay on oCPM and hope it self-corrects as more data comes in",
                verdict: "costly",
                outcome:
                  "Cost per conversion keeps climbing for several more days before the algorithm has enough signal to correct itself, and the unanswered comment compounds the CTR damage.",
                why: "An algorithm optimizing on thin data doesn't self-correct quickly, and ignoring the comment on top of it stacks two of the lesson's named mistakes at once.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "day9-diagnosis",
              },
            ],
          },
        },
        {
          stageId: "day9-diagnosis",
          label: "Day 9, assessing the damage",
          elapsed: "Day 9 of 14",
          concept: "Treating the comment section as active campaign management, not a side channel",
          lessonAnchor: "common-mistakes-that-kill-campaigns",
          situation:
            "Whichever path led here, the campaign is now behind its efficient-path benchmark. You have 5 days and a shrinking budget left to close the gap before the flight ends.",
          dashboard:
            "Campaign totals, day 9 (recovery path)\n" +
            "  Conversions             31\n" +
            "  Cost per conversion    $34.80\n" +
            "  Spend to date         $1,079.00\n" +
            "  Budget remaining        $921.00",
          spendToDate: "$1,079.00 of $2,000",
          budgetRemaining: "$921.00",
          decision: {
            prompt: "With 31 conversions, you're short of the 50-conversion oCPM threshold and the flight ends in 5 days. What's the realistic move?",
            options: [
              {
                id: "finish-manual",
                label: "Finish the flight on manual CPC and treat this as a learning-phase report, not a scaling campaign",
                verdict: "optimal",
                outcome:
                  "The campaign closes with honest, usable data on subreddit and creative performance, even though it never reached the volume needed to justify switching bid strategies.",
                why: "Forcing an oCPM switch below the threshold just to say you did it repeats the exact mistake that put the campaign behind in the first place.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "end",
              },
              {
                id: "force-switch-late",
                label: "Switch to oCPM anyway with 5 days left, hoping volume picks up before the flight ends",
                verdict: "costly",
                outcome:
                  "The algorithm barely has time to calibrate before the flight ends, so the switch adds cost without adding the efficiency it's meant to deliver.",
                why: "The 50-conversion threshold exists because oCPM needs real signal, switching late with an even smaller sample repeats the original mistake in miniature.",
                lessonRef: "Step 5: Use Manual CPC Bidding First, Then Switch",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day14-retargeting-structure",
          label: "Day 14, flight ending, planning the follow-up",
          elapsed: "Day 14 of 14",
          concept: "Structuring retargeting as its own ad group with its own creative",
          lessonAnchor: "campaign-structure-that-works",
          situation:
            "The flight ends today with 89 total conversions at $17.20 cost per conversion. The Pixel has built a retargeting pool of 4,200 site visitors who didn't convert. You're planning the next flight.",
          dashboard:
            "Final flight totals\n" +
            "  Conversions              89\n" +
            "  Cost per conversion    $17.20\n" +
            "  Pixel retargeting pool  4,200 visitors\n" +
            "  Budget remaining          $0",
          spendToDate: "$2,000.00 of $2,000",
          budgetRemaining: "$0.00",
          decision: {
            prompt: "Planning the next flight with a 4,200-person retargeting pool. How do you structure it?",
            options: [
              {
                id: "separate-ad-group",
                label: "Create a dedicated retargeting ad group with its own warmer, more direct creative",
                verdict: "optimal",
                outcome:
                  "The retargeting ad group converts at a noticeably higher rate than cold subreddit targeting, because the creative speaks to people who already know the product.",
                why: "Retargeting is a warmer audience and deserves a different message, folding it into the cold campaign structure wastes that advantage.",
                lessonRef: "Campaign Structure That Works",
                nextStageId: "end",
              },
              {
                id: "add-to-cold-group",
                label: "Add the retargeting audience into the existing cold ad groups to keep things simple",
                verdict: "costly",
                outcome:
                  "The same cold-audience creative shown to warm, already-interested visitors underperforms what a tailored retargeting message would have delivered, and you can't isolate which audience is driving results.",
                why: "Mixing a warm retargeting pool into cold ad groups hides the retargeting pool's real performance and wastes its higher intent on generic creative.",
                lessonRef: "Campaign Structure That Works",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Reddit Ads Manager", role: "Run the campaign, monitor dashboard, respond to comments", why: "Free self-serve platform, no minimum spend to access", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log daily metrics and decisions across the 14-day flight", why: "Free tracking log outside the ad platform's own reporting", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Triple Whale", role: "Blend Reddit spend with other channel ROAS for a full-funnel view", why: "Useful once running Reddit alongside other paid channels, not needed for a single-platform flight", required: false, fallback: "Blend CPA numbers manually in the Google Sheets tracking log", lastVerified: "2026-08" },
        ],
      },
      deliverable:
        "A day-by-day decision log for the 14-day flight plus a retargeting-ready ad group structure for the next campaign.",
      sampleOutput:
        "Hims and Hers, learning-phase decision log (excerpt)\n\n" +
        "Day 2: 2 conversions, held manual CPC, no action taken\n" +
        "Day 5: hostile top comment (290 upvotes) in r/tressless, responded within 90 min, CTR recovered by day 6\n" +
        "Day 9: 52 conversions reached, switched to oCPM Conversions\n" +
        "Day 14: 94 total conversions at $16.80 CPA, retargeting pool of 3,800 moved into its own ad group with warmer creative for next flight",
      successCriteria: [
        "Holds manual CPC through the early low-signal days instead of switching prematurely",
        "Responds to the hostile comment within the window instead of ignoring or mis-escalating it",
        "Switches to oCPM only after crossing the 50-conversion threshold",
        "Structures retargeting as a separate ad group with distinct creative at the end",
      ],
      portfolioReady: true,
    },
  ],
  "retail-media": [
    {
      id: "retail-media-listing-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Why This Amazon Listing Wastes Ad Spend",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real product listing page and a search-term performance report, identify the specific defects suppressing conversion rate and metric-reading habits that are wasting ad budget, separate from cosmetic non-issues.",
      companyId: "chewy",
      scenario:
        "You're a marketplace analyst at Chewy running a competitive gap analysis on rival pet-brand Amazon listings and campaign reports, to advise your own team's multichannel retail media strategy before the next planning cycle.",
      brief:
        "Two specimens: one competitor product listing page, one competitor search-term report. Find what's actually suppressing performance in each, and don't flag things that only look wrong.",
      mode: "teardown",
      conceptsCovered: ["Metrics That Actually Matter", "The Practical Playbook"],
      teardownItems: [
        {
          itemId: "listing-page-probiotic",
          specimen:
            "PRODUCT: DailyBoost Dog Probiotic Chews, 90 Count\n" +
            "TITLE: DailyBoost Dog Chews\n" +
            "PRICE: $28.99 (category average: $24.50)\n" +
            "IMAGES: 4 total - main product shot on white, ingredient label closeup, package back, size chart\n" +
            "BULLET POINTS:\n" +
            "  - Great for your dog's health\n" +
            "  - Made with quality ingredients\n" +
            "  - Dogs love the taste\n" +
            "  - Trusted by pet owners everywhere\n" +
            "REVIEWS: 12 reviews, 3.8 average rating\n" +
            "A+ CONTENT: Yes, includes a brand story module\n" +
            "CAMPAIGN DATA: Sponsored Products, $2.10 avg CPC, 3.1% conversion rate (category avg: 11%)",
          specimenSource: "synthetic-realistic",
          prompt:
            "This listing is getting real clicks from Sponsored Products at a reasonable $2.10 CPC, but converting at less than a third of the category average. Before recommending more ad spend, find what's suppressing conversion on the page itself.",
          answerKey: [
            {
              defect: "Title omits the primary keyword and any specific benefit, just brand plus generic product type",
              severity: "critical",
              whyItMatters: "Shoppers scanning search results skim titles first, a title with no keyword match and no differentiator gets scrolled past even when the ad placement is strong",
              lessonRef: "Metrics That Actually Matter: your product listing page IS your landing page",
              owner: "you",
            },
            {
              defect: "Bullet points are generic marketing language with zero specifics, no ingredient names, no dosage, no strain count, nothing a comparison-shopping buyer needs",
              severity: "critical",
              whyItMatters: "Probiotic buyers specifically compare CFU counts and strain diversity, bullets with no specifics lose every side-by-side comparison against a competitor listing that has them",
              lessonRef: "Metrics That Actually Matter: your product listing page IS your landing page",
              owner: "you",
            },
            {
              defect: "12 reviews at 3.8 stars against a category norm of 2,000+ reviews at 4.5 stars",
              severity: "critical",
              whyItMatters: "Low review count and below-average rating are the single strongest conversion-rate signals on a marketplace listing, no ad spend fixes a trust deficit this large",
              lessonRef: "Metrics That Actually Matter: your product listing page IS your landing page",
              owner: "either",
            },
            {
              defect: "No lifestyle or infographic imagery, only a plain white-background shot and label closeups",
              severity: "moderate",
              whyItMatters: "Buyers can't picture the product in use or quickly scan dosage/benefit info without reading dense label text, both slow the decision and cost conversions",
              lessonRef: "Metrics That Actually Matter: your product listing page IS your landing page",
              owner: "either",
            },
          ],
          distractors: [
            "Price is $4.49 above category average, this small a premium doesn't meaningfully suppress conversion when trust and clarity signals are otherwise strong",
            "The listing includes A+ Content with a brand story module, this is a genuine strength, not a defect",
          ],
          partialCredit: true,
        },
        {
          itemId: "search-term-report-mismanagement",
          specimen:
            "SEARCH TERM PERFORMANCE REPORT, 6-week campaign, Sponsored Products\n" +
            "Total spend: $4,200\n" +
            "Reported ROAS: 8.2x (dashboard headline metric, tracked weekly)\n\n" +
            "TOP 5 'CONVERTING' SEARCH TERMS:\n" +
            "  1. dailyboost dog probiotic          412 clicks   9.1% CVR\n" +
            "  2. dailyboost                         298 clicks   11.4% CVR\n" +
            "  3. daily boost dog chews              203 clicks   8.7% CVR\n" +
            "  4. dog probiotic chews                 88 clicks   2.1% CVR\n" +
            "  5. probiotic for dogs                  71 clicks   1.8% CVR\n\n" +
            "NEGATIVE KEYWORDS ADDED IN 6 WEEKS: 0\n" +
            "'free dog treats' search term spend: $340, 0 conversions\n" +
            "Budget allocation: 100% on this one SKU, brand has 40 total SKUs live",
          specimenSource: "synthetic-realistic",
          prompt:
            "The dashboard shows a healthy 8.2x ROAS on this campaign. The account manager wants to double the budget next month. Before signing off, find what the headline ROAS number is hiding.",
          answerKey: [
            {
              defect: "3 of the top 5 'converting' search terms are branded (the product's own name), which inflates the blended ROAS because those shoppers were already looking for this exact product",
              severity: "critical",
              whyItMatters: "Branded-term ROAS looks like ad performance but is really just the ad capturing demand that likely existed anyway, non-branded conversion is the true measure of the ad's incremental value",
              lessonRef: "The Practical Playbook: separate branded from non-branded before judging performance",
              owner: "you",
            },
            {
              defect: "Zero negative keywords added across 6 full weeks despite $340 spent on a clearly irrelevant term ('free dog treats') with zero conversions",
              severity: "moderate",
              whyItMatters: "This is a basic weekly hygiene task the lesson calls out explicitly, skipping it for 6 straight weeks means budget bled to junk terms the whole time",
              lessonRef: "The Practical Playbook: negative match weekly",
              owner: "you",
            },
            {
              defect: "100% of budget concentrated on one SKU while the brand has 40 live products, with no share-of-voice strategy across the rest of the catalog",
              severity: "moderate",
              whyItMatters: "Doubling budget on an already-saturated single SKU has diminishing returns, the same dollars spread to a second strong-converting SKU would likely return more",
              lessonRef: "The Practical Playbook: win share of voice on your top 5 SKUs, not just one",
              owner: "you",
            },
          ],
          distractors: [
            "The report only shows Sponsored Products, not Sponsored Brands or Display, this is a reasonable single-format campaign choice, not itself a defect",
            "Non-branded term CVRs (1.8%-2.1%) look low compared to branded terms, but that gap alone is expected and normal, not a red flag on its own",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log defects, severity, and recommendations per specimen", why: "Free, no account needed, works for any exported report", required: true, lastVerified: "2026-08" },
          { toolName: "Amazon Ads", role: "Cross-check real search-term report formatting and negative keyword tools", why: "Free to view for any active advertiser account, confirms the specimen matches real report structure", required: false, fallback: "Use the specimen data as-is, the report format is representative of what Amazon Ads exports", lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A defect log for both specimens, each defect tagged by severity, with a one-line recommendation per defect.",
      sampleOutput:
        "Liquid Death, competitor listing teardown (excerpt)\n\n" +
        "LISTING DEFECTS\n" +
        "  [CRITICAL] Title has no differentiator beyond brand name, add flavor + size + key claim\n" +
        "  [MODERATE] Only 3 images, none lifestyle, add at least 2 in-use shots\n\n" +
        "NOT A DEFECT\n" +
        "  Price sits $2 above category average, negligible at this price tier\n\n" +
        "SEARCH TERM REPORT\n" +
        "  [CRITICAL] 60% of 'top converting' terms are branded, true non-branded ROAS is 2.1x, not the 6.4x headline",
      successCriteria: [
        "Flags all critical defects in the listing specimen (title, bullets, reviews)",
        "Correctly identifies the branded-term ROAS inflation in the search-term specimen",
        "Does not flag either distractor as a real defect",
      ],
      portfolioReady: true,
    },
    {
      id: "retail-media-tacos-budget-audit",
      tier: "core",
      archetype: "audit",
      title: "The Budget Call: Auditing a Quarter of Retail Media Spend",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a quarter of sponsored ads performance data across two retail media networks, apply TACoS over ROAS, separate branded from non-branded performance, and decide where next quarter's budget should actually go.",
      companyId: "nykaa",
      scenario:
        "You're the retail media manager at Nykaa, evaluating a quarter of Sponsored Products performance across Amazon and a grocery-style RMN before proposing next quarter's budget split to leadership.",
      brief:
        "Recompute the real picture using TACoS instead of the headline ROAS number, split branded from non-branded performance, and recommend which platform gets the incremental budget.",
      mode: "diagnostic",
      conceptsCovered: [
        "TACoS as a more honest metric than ROAS alone",
        "Separating branded from non-branded keyword performance",
        "Choosing where to allocate incremental budget by category fit",
      ],
      steps: [
        {
          stepId: "step-1-tacos-recompute",
          concept: "TACoS as a more honest metric than ROAS alone",
          lessonAnchor: "metrics-that-actually-matter",
          theoryRecap:
            "The lesson explains TACoS divides total ad spend by total revenue (ad-driven plus organic), capturing the organic sales lift that ROAS alone misses.",
          question:
            "Leadership's slide says 'Amazon Sponsored Products: 7.8x ROAS, best channel this quarter.' The same product line's organic Amazon revenue also grew 40% this quarter. Is 7.8x ROAS the number to lead the recommendation with?",
          toolName: "Google Sheets",
          where: "Import ad spend and total revenue by platform, build a TACoS column next to the existing ROAS column.",
          procedure: [
            "Pull total ad spend and ad-attributed revenue per platform from the quarterly export",
            "Pull total revenue (ad-attributed plus organic) per platform for the same period",
            "Calculate TACoS = total ad spend / total revenue for each platform",
            "Compare TACoS trend across the quarter's three months, not just the single headline ROAS figure",
          ],
          outputSample:
            "Platform         Ad spend   Ad revenue   ROAS   Total revenue   TACoS\n" +
            "Amazon           $42,000    $327,600     7.8x   $890,000        4.7%\n" +
            "Grocery-style RMN $18,500    $96,200      5.2x   $210,000        8.8%",
          healthy:
            "TACoS on Amazon sits at 4.7%, well inside the 5-15% healthy band, meaning ad spend is compounding into organic rank rather than being the only thing carrying sales.",
          unhealthy:
            "Leading the budget recommendation with the 7.8x ROAS headline alone, without the TACoS context, makes it look like Amazon is simply 'better,' when the grocery-style RMN's 8.8% TACoS is also healthy and reaching a different, less Amazon-saturated shopper.",
          interpret:
            "A high ROAS with a healthy TACoS means the platform is compounding well. Don't let one number override the other; both are needed for a real budget call.",
          soWhat: [
            {
              symptom: "Leadership slide leads with ROAS only, no TACoS context",
              action: "Add the TACoS column to the recommendation slide before it goes to leadership",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-branded-split",
          concept: "Separating branded from non-branded keyword performance",
          lessonAnchor: "the-practical-playbook",
          theoryRecap:
            "The lesson's Practical Playbook, Step 2 says branded keyword ROAS is misleadingly high because those shoppers were already looking for the brand, and incrementality should be measured on non-branded keywords.",
          question:
            "Within Amazon's 7.8x ROAS, the search-term report shows 61% of ad-attributed revenue came from searches containing 'Nykaa.' What does the incremental picture look like once branded terms are set aside?",
          toolName: "Amazon Ads",
          where: "Search Term Report inside Amazon Ads Console, filtered to branded vs. non-branded terms.",
          procedure: [
            "Export the Search Term Report for the quarter",
            "Tag each search term as branded (contains 'nykaa') or non-branded",
            "Recalculate ROAS separately for the branded and non-branded segments",
            "Flag the non-branded ROAS as the real measure of incremental customer acquisition",
          ],
          outputSample:
            "Segment        Ad-attributed revenue   Spend    ROAS\n" +
            "Branded (61%)  $199,836                 $15,750  12.7x\n" +
            "Non-branded    $127,764                 $26,250  4.9x",
          healthy:
            "Non-branded ROAS of 4.9x is still solidly profitable, meaning the campaign is winning real new customers away from competitors, not just capturing brand-search demand that existed anyway.",
          unhealthy:
            "Reporting the blended 7.8x ROAS as 'the number' overstates how much new customer acquisition the campaign is actually driving, since branded searches were mostly going to convert regardless of the ad.",
          interpret:
            "Blended ROAS answers 'did the campaign make money.' Non-branded ROAS answers the more important question: 'is the campaign winning customers we wouldn't have gotten otherwise.'",
          soWhat: [
            {
              symptom: "61% of ad-attributed revenue is coming from branded search terms",
              action: "Report branded and non-branded ROAS as two separate lines going forward, not one blended figure",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-platform-allocation",
          concept: "Choosing where to allocate incremental budget by category fit",
          lessonAnchor: "which-platform-to-start-on",
          theoryRecap:
            "The lesson recommends starting on Amazon for high-search-volume categories like beauty, then adding a grocery-style RMN like Instacart for CPG-adjacent categories with genuine reach beyond Amazon shoppers.",
          question:
            "Given Amazon's healthy but branded-heavy 4.9x non-branded ROAS and 4.7% TACoS, and the grocery-style RMN's 8.8% TACoS reaching a largely non-Amazon audience, where should the next $10,000 in incremental budget go?",
          toolName: "Looker Studio",
          where: "Build a simple side-by-side dashboard comparing non-branded ROAS and TACoS trend by platform.",
          procedure: [
            "Chart non-branded ROAS trend by platform across the quarter's three months",
            "Chart TACoS trend by platform across the same period",
            "Check whether either platform's TACoS is trending up (a warning sign) or flat/down (healthy)",
            "Recommend the split based on both trend direction and audience overlap, not the single highest ROAS number",
          ],
          outputSample:
            "Platform          Non-branded ROAS trend   TACoS trend      Audience overlap with other platform\n" +
            "Amazon            4.6x -> 4.9x -> 4.9x      5.1% -> 4.9% -> 4.7%    High-intent search demand\n" +
            "Grocery-style RMN  4.1x -> 4.6x -> 5.0x      9.4% -> 9.0% -> 8.8%    Largely distinct shopper base",
          healthy:
            "Both platforms show flat-to-improving TACoS and rising non-branded ROAS, meaning incremental budget on either platform is currently compounding well rather than just buying more of the same demand.",
          unhealthy:
            "Putting all incremental budget on Amazon alone, since it already has the highest single ROAS number, while the grocery-style RMN's improving trend and distinct audience get starved of budget to test further.",
          interpret:
            "When both platforms show healthy trends and one reaches a meaningfully different audience, the incremental dollar usually belongs on the platform with room to grow its audience overlap, not just the platform with the biggest existing number.",
          soWhat: [
            {
              symptom: "Both platforms trending healthy but budget concentrated entirely on the higher-ROAS platform",
              action: "Recommend splitting the next $10,000 roughly 60/40 toward Amazon, with a meaningful test allocation to the grocery-style RMN to keep growing the distinct audience",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Amazon Ads", role: "Pull search-term reports and spend/revenue data", why: "Native reporting for any active advertiser, no extra cost", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Calculate TACoS and branded/non-branded splits", why: "Free, flexible enough for custom formula columns not in native dashboards", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Triple Whale", role: "Automate TACoS and cross-platform blended reporting", why: "Saves manual recalculation once running budget across 3+ platforms regularly", required: false, fallback: "Build the same TACoS formula manually in Google Sheets each quarter", lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free path (Amazon Ads native reports plus Google Sheets formulas) is a complete quarterly workflow. A paid dashboarding tool like Triple Whale only saves time once you're doing this recalculation across more than two or three platforms every month.",
      },
      deliverable:
        "A budget recommendation memo with TACoS and non-branded ROAS by platform, and a specific dollar split for next quarter's incremental spend.",
      sampleOutput:
        "Chewy, quarterly retail media budget memo (excerpt)\n\n" +
        "HEADLINE METRIC LEADERSHIP SAW\n" +
        "  Amazon Sponsored Products: 6.9x ROAS\n\n" +
        "REAL PICTURE\n" +
        "  TACoS: 5.3% (healthy)\n" +
        "  Non-branded ROAS: 4.2x (the real acquisition number, branded search was 58% of attributed revenue)\n\n" +
        "RECOMMENDATION\n" +
        "  Split next quarter's incremental $15,000 as 65% Amazon / 35% grocery-style RMN test, both platforms show flat-to-improving TACoS",
      successCriteria: [
        "Recomputes TACoS instead of relying on the headline ROAS figure alone",
        "Correctly separates branded from non-branded ROAS and flags the branded inflation",
        "Recommends a specific budget split backed by trend data, not just the single highest number",
      ],
      portfolioReady: true,
    },
  ],

  "audio-ads": [
    {
      id: "audio-ads-podcast-pitch-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Pitch Audit: Evaluating a Podcast Sponsorship Package",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a supplied podcast sponsorship pitch (CPM, format, ad script draft) for a mid-size business show, decide whether the deal represents good value and catch the two most common rollout mistakes before signing.",
      companyId: "casper-sleep",
      scenario:
        "You're the media buyer at Casper Sleep fielding a sponsorship pitch from a 200k-download business podcast that wants a 12-week mid-roll deal.",
      brief:
        "Score the quoted CPM against podcast benchmarks, confirm the placement matches best practice, and rewrite any part of the draft script that reads like copy instead of a conversation.",
      mode: "diagnostic",
      conceptsCovered: [
        "Comparing podcast CPM against benchmark ranges",
        "Talking points versus a word-for-word script",
      ],
      steps: [
        {
          stepId: "step-1-cpm-benchmark",
          concept: "Comparing podcast CPM against benchmark ranges",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Step 2 states podcast ads run $18-$50 CPM against Spotify programmatic's $10-$25, and Step 3 flags mid-roll placements as outperforming pre-roll and post-roll in recall.",
          question:
            "The pitch quotes $42 CPM for a 60-second mid-roll spot, delivered to a podcast averaging 200,000 downloads/episode across 12 episodes. Is that CPM defensible, and does the placement match best practice?",
          toolName: "Google Sheets",
          where:
            "Build a comparison sheet: quoted CPM vs. the lesson's benchmark range, quoted placement vs. mid-roll/pre-roll/post-roll.",
          procedure: [
            "List the quoted CPM ($42) next to the podcast benchmark range ($18-$50)",
            "Confirm the placement is mid-roll, not pre-roll or post-roll",
            "Multiply CPM x (impressions/1000) to get total cost: $42 x (2,400,000/1000) = $100,800",
            "Compare total cost against the quarterly awareness budget before approving",
          ],
          outputSample:
            "CPM check\n  Quoted: $42 CPM, mid-roll, 12 episodes x 200,000 downloads = 2,400,000 impressions\n  Benchmark: $18-$50 CPM (host-read podcast)\n  Verdict: within range, mid-roll confirmed\n  Total cost: $100,800",
          healthy:
            "$42 sits inside the $18-$50 host-read benchmark and the placement is confirmed mid-roll, the deal is worth negotiating rather than rejecting outright.",
          unhealthy:
            "A quote above $50 CPM for pre-roll placement, that combination is both overpriced and in the weaker placement slot, a clear renegotiate-or-walk signal.",
          interpret:
            "CPM alone doesn't tell you if a deal is good, CPM plus placement together do. A benchmark-range CPM on a bad placement is still a bad deal.",
          soWhat: [
            {
              symptom: "Sponsorship pitch quotes CPM without specifying placement",
              action: "Get placement confirmed in writing before comparing price",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-script-check",
          concept: "Talking points versus a word-for-word script",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes callout warns that a scripted, legal-copy-style read kills performance, hosts should get talking points, not a word-for-word script, and creative should rotate at least every six weeks.",
          question:
            "The draft ad copy reads: 'Casper Sleep offers a 100-night trial period and free shipping on all mattress orders. Visit casper.com today.' Does this pass the conversational bar, and what's missing?",
          toolName: "Google Sheets",
          where:
            "Mark up the draft script line by line in a shared sheet, flag any sentence that reads like ad copy rather than a host's own words.",
          procedure: [
            "Read the draft aloud, flag any sentence that wouldn't survive being said out loud casually",
            "Rewrite flagged lines as talking points ('mention the 100-night trial, mention free shipping') instead of a fixed script",
            "Check for a single clear call to action, not three competing ones",
            "Confirm the plan includes a second creative version to rotate in before week 6",
          ],
          outputSample:
            "Script audit\n  Flagged: 'offers a 100-night trial period and free shipping on all mattress orders' — reads like a website bullet, not speech\n  Rewrite direction: talking points only — trial length, shipping, one promo code\n  CTA count: 1 (promo code) — passes\n  Rotation plan: missing, add before week 6",
          healthy:
            "The brief hands the host 3-4 talking points and a promo code, then lets them say it in their own words.",
          unhealthy:
            "A fixed script with three different CTAs and no rotation plan past episode 6, fatigue and confusion baked in before launch.",
          interpret:
            "A script that reads fine on a page can still fail on air. The test is whether it survives being read aloud casually, not whether it's grammatically correct.",
          soWhat: [
            {
              symptom: "Draft ad copy sounds like a website product description",
              action: "Convert it to a bulleted talking-points brief and send it back to the host",
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
            role: "Build the CPM/placement comparison and script markup",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page go/no-go recommendation on the sponsorship pitch, with the CPM benchmark comparison and a revised talking-points brief attached.",
      sampleOutput:
        "HelloFresh, mid-roll podcast pitch review (excerpt)\n\nCPM: $38 quoted vs $18-$50 benchmark — PASS\nPlacement: mid-roll confirmed — PASS\nScript: 3 competing CTAs found — FAIL, revise to 1 CTA before signing\nRotation: no second creative planned — FAIL, add before week 6\n\nRecommendation: approve pending script revision and rotation plan",
      successCriteria: [
        "Correctly benchmarks the quoted CPM against the $18-$50 host-read range",
        "Flags any scripted (non-conversational) line and any missing rotation plan",
      ],
      portfolioReady: true,
    },
    {
      id: "audio-ads-podcast-campaign-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 8-Week Podcast Sponsorship: A Live Decision Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Run an 8-week podcast + Spotify programmatic sponsorship as a series of weekly checkpoints, deciding when to hold, cut, or rotate creative based on promo-code redemption data, without spending a dollar of real budget.",
      companyId: "allbirds",
      scenario:
        "You're running audio acquisition for Allbirds: a $24,000 quarterly budget split across 3 host-read podcast deals and a Spotify programmatic layer, with a unique promo code per show.",
      brief:
        "Read each week's redemption dashboard, decide whether to hold, cut, or rotate creative, and land the quarter within budget with defensible calls.",
      mode: "simulation",
      conceptsCovered: [
        "Reading promo-code redemption as the leading signal for podcast ROI",
        "Recognizing creative fatigue before redemption drops",
      ],
      stages: [
        {
          stageId: "week2-early-read",
          label: "Week 2, first redemption check",
          elapsed: "Week 2 of 8",
          concept: "Reading promo-code redemption as the leading signal for podcast ROI",
          lessonAnchor: "how-it-works",
          situation:
            "Three shows launched two weeks ago: a 400k-download business show, a 90k-download design show, and Spotify programmatic running in parallel. This is the first dashboard pull.",
          dashboard:
            "Week 2 redemption by promo code\n  ALLBIRDS-BIZ (business show):    340k impressions, 1,150 code uses (0.34% redemption)\n  ALLBIRDS-DSGN (design show):      78k impressions,   410 code uses (0.53% redemption)\n  Spotify programmatic:            1.2M impressions,  890 code uses (0.07% redemption, $10-25 CPM tier)",
          spendToDate: "$6,000 of $24,000",
          budgetRemaining: "$18,000",
          decision: {
            prompt:
              "Two weeks in, redemption looks decent across all three lines. What's the right call?",
            options: [
              {
                id: "hold-and-wait",
                label: "Log the numbers, make no changes, check again at week 4",
                verdict: "optimal",
                outcome:
                  "You let the campaign run its natural course. The lesson's own guidance is to optimize after 4-6 weeks, not 2, two weeks of host-read data on a monthly-release show may only cover one or two episodes.",
                why: "Cutting or rotating this early risks killing a show that just needed more episodes to build trust with its audience.",
                lessonRef: "How It Works, Step 5: after 4-6 weeks, cut shows with low redemption",
                nextStageId: "week5-fatigue-check",
              },
              {
                id: "cut-programmatic-now",
                label: "Cut Spotify programmatic immediately, its redemption is lowest",
                verdict: "costly",
                outcome:
                  "You kill the format two weeks in, before it had time to build the awareness half of a two-step funnel; programmatic audio is priced and expected to convert slower than a trusted host's personal endorsement.",
                why: "Programmatic's lower redemption at two weeks is expected, not a failure signal, it's a broader-reach, lower-trust format by design.",
                lessonRef: "Why It Matters: programmatic trades listener trust for scale and precision targeting",
                nextStageId: "end",
              },
              {
                id: "double-budget-biz-show",
                label: "Immediately double the business show's budget based on its lead",
                verdict: "acceptable",
                outcome:
                  "The business show is ahead, but doubling budget on a two-week sample locks in a decision before week 3-4 confirms whether it sustains, a defensible instinct, not the optimal one.",
                why: "A stronger early read is worth watching, not immediately over-committing budget to, especially with 6 weeks of runway left to confirm the trend.",
                lessonRef: "How It Works, Step 5: optimize after 4-6 weeks of data",
                nextStageId: "week5-fatigue-check",
              },
            ],
          },
        },
        {
          stageId: "week5-fatigue-check",
          label: "Week 5, redemption plateau",
          elapsed: "Week 5 of 8",
          concept: "Recognizing creative fatigue before redemption drops",
          lessonAnchor: "common-mistakes",
          situation:
            "The business show has run the same 60-second host-read spot since week 1. Redemption climbed through week 3, then flattened.",
          dashboard:
            "Week 5 cumulative, ALLBIRDS-BIZ\n  Week 1-2 redemption rate: 0.34%\n  Week 3 redemption rate:   0.61%\n  Week 4 redemption rate:   0.58%\n  Week 5 redemption rate:   0.31% (dropping)\n  Same 60-second script running since week 1 (5 weeks, no rotation)",
          spendToDate: "$14,500 of $24,000",
          budgetRemaining: "$9,500",
          decision: {
            prompt:
              "Redemption peaked at week 3 and is now sliding back toward the week-1 baseline. The script hasn't changed. What do you do?",
            options: [
              {
                id: "rotate-creative",
                label: "Brief the host on a second talking-points version, rotate in next episode",
                verdict: "optimal",
                outcome:
                  "You catch fatigue right at the point the lesson warns about: running the same creative past six weeks causes fatigue, and this show is at week 5 with a visible decline already showing.",
                why: "A second creative version resets listener attention without abandoning a show that already proved it converts.",
                lessonRef:
                  "Common Mistakes: running the same creative for more than six weeks causes fatigue, rotate at least two versions",
                nextStageId: "end",
              },
              {
                id: "cut-the-show",
                label: "Cut the business show, the trend is declining",
                verdict: "costly",
                outcome:
                  "You cut a show that peaked at 0.61% redemption, nearly double its opening week, over a single week's dip that has an obvious, fixable cause: stale creative, not audience fit.",
                why: "The data points to a creative-fatigue problem, not an audience-fit problem, cutting the show throws away a proven-working relationship over the wrong fix.",
                lessonRef: "Common Mistakes: rotate creative, don't abandon a working show",
                nextStageId: "end",
              },
              {
                id: "wait-one-more-week",
                label: "Wait one more week to confirm the decline is real before acting",
                verdict: "acceptable",
                outcome:
                  "One more week of data would confirm the trend, but you've already burned $14,500 of $24,000 with only 3 weeks left, waiting costs runway you don't have to spare.",
                why: "The signal is already clear enough to act on: two consecutive weeks of decline after a peak is not noise at this sample size.",
                lessonRef: "How It Works, Step 5: optimize based on the trend, not a single data point",
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
            role: "Track weekly redemption, impressions, and spend against budget",
            why: "Free, no ad account or spend required to run this simulation",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Spotify for Podcasters",
            role: "Reference for real show download/listener analytics when running this live",
            why: "Free podcaster dashboard, useful once a real sponsorship deal is signed",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An 8-week decision log recording each checkpoint's dashboard reading, the call made, and the reasoning.",
      sampleOutput:
        "HelloFresh, 8-week podcast sponsorship log (excerpt)\n\nWeek 2: All 3 lines within expected range, hold\nWeek 5: Business show redemption dropped 2 weeks running, creative rotated\nWeek 8: Rotated creative recovered redemption to 0.52%, campaign renewed",
      successCriteria: [
        "Chooses 'hold' at week 2 rather than reacting to a two-week sample",
        "Chooses creative rotation over cutting the show at week 5",
      ],
      portfolioReady: true,
    },
  ],
  "pmax-advantage-plus": [
    {
      id: "pmax-advantage-plus-feed-asset-group-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Pre-Launch Audit: Catching Feed and Asset Group Problems Before They Cost You",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a supplied product feed export and an asset group screenshot for a new Performance Max campaign, catch the two failure patterns the lesson warns about before launch: feed hygiene gaps and undifferentiated creative across audiences.",
      companyId: "nykaa",
      scenario:
        "You're the paid media analyst at Nykaa (FSN E-Commerce Ventures) reviewing a new PMax campaign for a skincare sub-brand before it goes live.",
      brief:
        "Check the feed for the specific hygiene gaps the lesson names, missing GTINs and thin titles, then check whether the asset groups are actually differentiated by audience or just copy-pasted.",
      mode: "diagnostic",
      conceptsCovered: [
        "Feed hygiene as a PMax prerequisite, not an afterthought",
        "Distinct asset groups per audience segment versus one asset group reused everywhere",
      ],
      steps: [
        {
          stepId: "step-1-feed-hygiene",
          concept: "Feed hygiene as a PMax prerequisite, not an afterthought",
          lessonAnchor: "the-2026-steering-and-reporting-overhaul",
          theoryRecap:
            "The lesson's Common Mistakes callout names turning on PMax before the product feed is cleaned, missing GTINs, thin titles, then blaming the algorithm for weak results.",
          question:
            "The export has 40 SKUs. 6 rows have a blank GTIN column, and 11 titles read as just the product name with no attributes ('Vitamin C Serum' instead of 'Nykaa Vitamin C Serum 30ml, Brightening'). Is this feed launch-ready?",
          toolName: "Google Merchant Center",
          where:
            "Open the feed diagnostics tab, filter for missing GTIN and item-level disapprovals, cross-check flagged rows against the raw export.",
          procedure: [
            "Filter the export for blank GTIN values, count them (6 of 40)",
            "Filter for titles under 5 words with no attribute (11 of 40)",
            "Flag both sets as blockers, not warnings, before enabling the campaign",
            "Draft the required title fix pattern: Brand + Product + Size + Key Attribute",
          ],
          outputSample:
            "Feed hygiene check, 40 SKUs\n  Missing GTIN: 6 rows (15%)\n  Thin titles (<5 words, no attribute): 11 rows (27.5%)\n  Launch-ready: NO — 17 of 40 SKUs (42.5%) need fixes first",
          healthy:
            "0 missing GTINs, every title follows Brand + Product + Size + Attribute, feed passes Merchant Center diagnostics with zero item-level disapprovals.",
          unhealthy:
            "Launching with 42.5% of SKUs carrying a hygiene gap, then reading a weak PMax result three weeks later as an algorithm problem instead of a feed problem.",
          interpret:
            "PMax can only advertise what the feed accurately describes. A gap in GTIN or title data doesn't just risk disapproval, it starves the algorithm of the attributes it needs to match the right shopper.",
          soWhat: [
            {
              symptom: "New PMax campaign underperforms in week 1",
              action: "Check feed diagnostics before touching bids or budget",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-asset-group-differentiation",
          concept: "Distinct asset groups per audience segment versus one asset group reused everywhere",
          lessonAnchor: "creative-as-the-new-targeting-mechanism",
          theoryRecap:
            "The lesson states creative has replaced manual targeting, the algorithm learns who to reach from who engages with each asset group, and warns against uploading the same three assets to every asset group.",
          question:
            "This campaign has 3 asset groups (Skincare Starters, Anti-Aging, Gift Sets) but all three use the identical 5 product images and 1 generic headline. Is this set up correctly?",
          toolName: "Google Sheets",
          where:
            "List each asset group's headlines, descriptions, and images in a comparison sheet to check for actual differentiation, not just group names.",
          procedure: [
            "List all assets currently assigned to each of the 3 asset groups",
            "Mark any asset reused across 2+ groups",
            "Identify which group needs UGC-style creative (Skincare Starters, price-sensitive) vs. which needs before/after proof (Anti-Aging)",
            "Recommend at least 2 unique assets per group before launch",
          ],
          outputSample:
            "Asset group audit\n  Skincare Starters: 5 images, 1 headline — all 5 shared with the other 2 groups\n  Anti-Aging: same 5 images, same headline\n  Gift Sets: same 5 images, same headline\n  Unique assets per group: 0 of 3 groups pass",
          healthy:
            "Each asset group has at least 2 unique images and a headline written for that segment's motivation.",
          unhealthy:
            "Three asset groups that are functionally one asset group with three names, the algorithm has no differentiated signal to learn from.",
          interpret:
            "Naming asset groups differently does nothing if the assets inside them are identical. Differentiation has to live in the actual creative, not the label.",
          soWhat: [
            {
              symptom: "PMax asset groups all show similar audience overlap in reporting",
              action: "Audit for shared assets across groups and replace duplicates",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Merchant Center",
            role: "Run feed diagnostics and check GTIN/title completeness",
            why: "Free, required for any Shopping/PMax feed",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the asset-group differentiation comparison",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A pre-launch audit memo listing every feed hygiene gap and every asset group differentiation gap, with fixes required before the campaign goes live.",
      sampleOutput:
        "Allbirds, PMax pre-launch audit (excerpt)\n\nFeed: 2 of 35 SKUs missing GTIN (fixed before launch)\nAsset groups: Everyday Wool vs. Trail Runners now use distinct hero images and segment-specific headlines\nStatus: launch-ready",
      successCriteria: [
        "Correctly counts and flags every missing-GTIN and thin-title row",
        "Correctly identifies that all 3 asset groups share identical creative",
      ],
      portfolioReady: true,
    },
    {
      id: "pmax-advantage-plus-budget-pacing-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The Mid-Month Pacing Call: A Performance Max Budget Simulation",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Run a month of a live Performance Max campaign as weekly dashboard checkpoints, using the 2026 budget report and audience-exclusion tools to decide when to intervene and when to let the algorithm keep learning.",
      companyId: "hellofresh",
      scenario:
        "You're running acquisition PMax for HelloFresh's new plant-based box line, with a $30,000 monthly budget and a target ROAS of 4.0.",
      brief:
        "Read the budget pacing report and placement data each week, decide whether to adjust exclusions or hold, and land the month within target ROAS without shutting off spend prematurely.",
      mode: "simulation",
      conceptsCovered: [
        "Using the end-of-month spend projection to catch pacing problems mid-month",
        "Using first-party audience exclusions to stop re-selling existing customers",
      ],
      stages: [
        {
          stageId: "week1-pacing-report",
          label: "Week 1, first budget projection",
          elapsed: "Week 1 of 4",
          concept: "Using the end-of-month spend projection to catch pacing problems mid-month",
          lessonAnchor: "the-2026-steering-and-reporting-overhaul",
          situation:
            "The campaign launched a week ago. You open the new 2026 budget report for the first time.",
          dashboard:
            "Week 1 budget report\n  Spend to date: $10,200 of $30,000 monthly budget\n  Projected end-of-month spend: $43,600 (145% of budget)\n  ROAS to date: 3.4 (target: 4.0)",
          spendToDate: "$10,200 of $30,000",
          budgetRemaining: "$19,800",
          decision: {
            prompt:
              "The projection shows you're on track to overspend the monthly budget by 45% if nothing changes. What do you do?",
            options: [
              {
                id: "lower-daily-cap",
                label: "Lower the daily budget cap now so the projection lands near $30,000",
                verdict: "optimal",
                outcome:
                  "You catch the pacing problem the report exists to surface, mid-month instead of after the invoice, and correct it with the least disruptive lever: the daily cap, not bids or targeting.",
                why: "The 2026 budget report's whole purpose is catching exactly this kind of overspend early enough to act on.",
                lessonRef:
                  "The 2026 Steering and Reporting Overhaul: the budget report projects end-of-month spend so pacing problems surface mid-month",
                nextStageId: "week3-exclusion-check",
              },
              {
                id: "do-nothing",
                label: "Let it run, PMax's algorithm will self-correct as it learns more",
                verdict: "costly",
                outcome:
                  "You let a projected 45% budget overrun run unaddressed. PMax optimizes toward the budget and targets you give it, it does not know your monthly cap is a hard constraint unless the daily budget reflects it.",
                why: "A budget report showing a clear overrun is a signal to act on, not a data point to wait out.",
                lessonRef: "The 2026 Steering and Reporting Overhaul",
                nextStageId: "end",
              },
              {
                id: "cut-roas-target",
                label: "Lower the target ROAS to 3.0 to match current performance",
                verdict: "acceptable",
                outcome:
                  "This would slow the overspend by loosening the bidding constraint, but it also permanently accepts weaker unit economics instead of fixing the pacing problem directly, a bigger lever than the situation calls for.",
                why: "The problem here is budget pacing, not bid strategy, changing the ROAS target treats the wrong variable.",
                lessonRef: "The 2026 Steering and Reporting Overhaul: PMax still sets bids itself",
                nextStageId: "week3-exclusion-check",
              },
            ],
          },
        },
        {
          stageId: "week3-exclusion-check",
          label: "Week 3, placement and audience review",
          elapsed: "Week 3 of 4",
          concept: "Using first-party audience exclusions to stop re-selling existing customers",
          lessonAnchor: "the-2026-steering-and-reporting-overhaul",
          situation:
            "Pacing is now on track. You open the placement report to check where conversions are actually coming from.",
          dashboard:
            "Week 3 placement + audience report\n  ROAS: 3.9 (target 4.0)\n  Conversions from Search: 61%\n  Conversions from Display/YouTube placements: 24%\n  Of those Display/YouTube conversions: 68% matched against the existing-customer list (not yet excluded)",
          spendToDate: "$21,000 of $30,000",
          budgetRemaining: "$9,000",
          decision: {
            prompt:
              "Over two-thirds of the Display/YouTube conversions are existing customers the campaign is re-selling to, not new acquisition. What do you do?",
            options: [
              {
                id: "add-exclusion-list",
                label: "Upload the existing-customer list as a first-party audience exclusion",
                verdict: "optimal",
                outcome:
                  "You redirect that spend toward net-new acquisition, exactly the lever the lesson names for this problem, and the remaining $9,000 now has a real chance to hit the 4.0 ROAS target on genuinely new customers.",
                why: "First-party audience exclusions are built for exactly this: stopping PMax from re-selling to people who already bought.",
                lessonRef:
                  "The 2026 Steering and Reporting Overhaul: audience exclusions redirect spend toward net-new acquisition",
                nextStageId: "end",
              },
              {
                id: "ignore-it",
                label: "Leave it, ROAS is close to target so the mix doesn't matter",
                verdict: "costly",
                outcome:
                  "The 3.9 ROAS is propped up by cheap existing-customer conversions that would have converted anyway, the acquisition goal the budget was set for is being quietly under-delivered.",
                why: "A campaign built for acquisition that's actually re-selling to current customers is hitting the wrong goal, even if the top-line ROAS number looks fine.",
                lessonRef: "The 2026 Steering and Reporting Overhaul",
                nextStageId: "end",
              },
              {
                id: "pause-display",
                label: "Pause Display/YouTube placements entirely for the rest of the month",
                verdict: "acceptable",
                outcome:
                  "This stops the re-selling problem but also cuts off the 24% of conversions coming from that placement entirely, including the genuinely new customers mixed in, a blunter fix than excluding just the existing-customer list.",
                why: "The exclusion list solves the actual problem, existing-customer overlap, without discarding a placement that's also generating real new conversions.",
                lessonRef:
                  "The 2026 Steering and Reporting Overhaul: placement reporting exists for channel-mix understanding, exclusions for acquisition targeting",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Run the campaign, read the budget report, and upload audience exclusions",
            why: "Free platform access, cost is media spend only",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Build a standing weekly pacing dashboard across the month",
            why: "Free, connects directly to Google Ads reporting data",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Triple Whale",
            role: "Cross-channel ecommerce dashboard for teams already running multiple ad platforms",
            why: "Useful once PMax sits alongside Meta and email in one attribution view, not required for this simulation",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 4-week pacing and exclusion decision log, with each week's budget-report reading and the resulting action.",
      sampleOutput:
        "Nykaa, PMax pacing log (excerpt)\n\nWeek 1: Projected overspend 38%, daily cap lowered\nWeek 2: Pacing back on track, ROAS 3.6\nWeek 3: 71% of Display conversions matched existing customers, exclusion list uploaded\nWeek 4: ROAS 4.1, ahead of target",
      successCriteria: [
        "Correctly identifies the week 1 pacing overrun and the correct lever (daily cap, not ROAS target)",
        "Correctly identifies the audience-exclusion opportunity in week 3",
      ],
      portfolioReady: true,
    },
  ],

  "demand-gen-campaigns": [
    {
      id: "demand-gen-campaigns-asset-group-audit",
      tier: "mini",
      archetype: "audit",
      title: "Ready to Scale? Auditing a Demand Gen Asset Group Before Raising Budget",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real Demand Gen asset group export, diagnose whether the creative-variety and audience-seeding minimums from the lesson are actually met before recommending a budget increase.",
      companyId: "allbirds",
      scenario:
        "You're the paid media analyst at Allbirds, the sustainable footwear brand, reviewing a Demand Gen campaign that's been live for three weeks. The brand team wants to double the daily budget next week; your job is to confirm the campaign is actually ready for more spend, not just tolerating it.",
      brief:
        "Pull the asset group export and the audience settings panel, check both against the lesson's minimum requirements, and write a go/no-go recommendation.",
      mode: "diagnostic",
      conceptsCovered: [
        "Creative format variety requirement",
        "Customer Match seed list as lookalike foundation",
      ],
      steps: [
        {
          stepId: "step-1-creative-variety",
          concept: "Creative format variety requirement",
          lessonAnchor: "creative-requirements",
          theoryRecap:
            "The lesson's Creative Requirements section says the algorithm needs contrast to test effectively: at least two videos in different aspect ratios plus three to four image variants. One video and two images is not enough.",
          question:
            "The asset group export shows 1 landscape (16:9) video, 2 square (1:1) images, and nothing else. Is this campaign ready for more budget?",
          toolName: "Google Ads",
          where: "Campaign > Asset groups > the live Demand Gen campaign's asset list.",
          procedure: [
            "Open the asset group and list every asset by format and aspect ratio",
            "Count video formats separately from image formats",
            "Compare the count against the lesson's minimum (2+ videos, different ratios; 3-4 images)",
            "Flag any missing format as a blocker before budget changes",
          ],
          outputSample:
            "Asset group: Allbirds — Wool Runners Prospecting\n  VIDEO\n    1x Landscape 16:9, 22s\n  IMAGE\n    2x Square 1200x1200\n  MISSING: Portrait 9:16 video, second landscape/square video variant, portrait 960x1200 image",
          healthy:
            "At least 2 videos in different aspect ratios and 3-4 image variants, giving the algorithm real contrast to test.",
          unhealthy:
            "1 video and 2 images total, the exact under-supplied combination the lesson calls out as insufficient.",
          interpret:
            "This asset group is under-supplied. More budget on the same thin creative set just spends faster into the same ceiling, it does not fix the ceiling.",
          soWhat: [
            {
              symptom: "Only one video and two images in the asset group",
              action: "Hold the budget increase and brief in a Shorts-format 9:16 video plus 2 more image variants before scaling spend",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-audience-seed-size",
          concept: "Customer Match seed list as lookalike foundation",
          lessonAnchor: "campaign-setup-audiences-that-matter",
          theoryRecap:
            "The lesson recommends starting with a Customer Match list of 5,000+ matched emails before building a lookalike, and warns Optimised Targeting is only safe for accounts with 50+ conversions a month.",
          question:
            "The audience panel shows a Customer Match seed list of 1,200 matched emails, a lookalike built from it, and Optimised Targeting switched on. The account has averaged 12 conversions/month. What's the risk?",
          toolName: "Google Ads",
          where: "Campaign > Audiences > audience segment settings.",
          procedure: [
            "Check the Customer Match seed list size against the 5,000+ recommendation",
            "Check whether Optimised Targeting is enabled",
            "Check trailing 30-day conversion volume against the 50+ conversions/month threshold for safely running Optimised Targeting",
          ],
          outputSample:
            "Customer Match seed: 1,200 matched emails (recommended: 5,000+)\nLookalike: built from seed, size = narrow\nOptimised Targeting: ON\nTrailing 30-day conversions: 12",
          healthy:
            "A seed list of 5,000+ emails feeding the lookalike, with Optimised Targeting reserved for accounts already converting 50+ times a month.",
          unhealthy:
            "A 1,200-email seed list (too thin for a reliable lookalike) with Optimised Targeting on at only 12 conversions/month, letting Google expand reach on almost no signal.",
          interpret:
            "Optimised Targeting on a sparse-data account lets Google guess at scale instead of learning from real signal. It should be disabled until conversion volume, or the seed list, is materially larger.",
          soWhat: [
            {
              symptom: "Optimised Targeting is enabled with fewer than 50 conversions/month",
              action: "Turn off Optimised Targeting and grow the Customer Match list toward 5,000+ before re-enabling it",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Pull the asset group export and audience settings",
            why: "Native reporting inside the ad account, no export tooling needed",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the asset and audience audit checklist",
            why: "Free, shareable with the brand team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo recommending scale-now, fix-creative-first, or fix-audience-first, with the specific line-item fix for each flagged gap.",
      sampleOutput:
        "Warby Parker, Demand Gen readiness audit (excerpt)\n\n" +
        "CREATIVE: PASS\n  3 videos (16:9, 9:16, 1:1), 4 image variants — meets minimum contrast requirement\n\n" +
        "AUDIENCE: FAIL\n  Customer Match seed: 2,100 emails (below 5,000 recommendation)\n  Optimised Targeting: ON at 31 conversions/month (below 50 threshold)\n\n" +
        "RECOMMENDATION: Hold budget increase. Turn off Optimised Targeting and grow the seed list before scaling spend.",
      successCriteria: [
        "Correctly identifies whether the creative set meets the 2-video/3-4-image minimum",
        "Correctly identifies whether the audience seed size and Optimised Targeting setting match the account's conversion volume",
      ],
      portfolioReady: true,
    },
    {
      id: "demand-gen-campaigns-bidding-phase-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 8-Week Bidding Decision Log",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Walk an 8-week Demand Gen campaign through its learning phase, the Maximize Conversions to tCPA switch, and the view-through conversion signal, making the same timing decisions a live account manager would face.",
      companyId: "rxbar",
      scenario:
        "You manage paid media for RXBAR, the protein bar brand, and just launched a Demand Gen campaign to warm shoppers who've been engaging with fitness and meal-prep content but haven't searched for a protein bar yet.",
      brief:
        "Decide when to leave Maximize Conversions alone, when to switch to tCPA and at what target, and how to read view-through conversions once tCPA is running.",
      mode: "simulation",
      conceptsCovered: [
        "Maximize Conversions learning phase patience",
        "Setting tCPA at 20-30% above observed CPA",
        "View-through conversions signal creative is building intent",
      ],
      stages: [
        {
          stageId: "week1-learning-phase-check",
          label: "Week 1, first dashboard check",
          elapsed: "Day 5 of 56",
          concept: "Maximize Conversions learning phase patience",
          lessonAnchor: "bidding-two-modes-different-jobs",
          situation:
            "You launched the campaign on Maximize Conversions 5 days ago and are opening the dashboard for the first time.",
          dashboard:
            "Demand Gen · RXBAR Fitness Content Prospecting · Day 5 of 56\n\n" +
            "  Impressions        142,000\n" +
            "  CTR                   0.9%\n" +
            "  Conversions              6\n" +
            "  Cost per conv        $31.40",
          spendToDate: "$188.40 of $2,800 (4-week phase 1 budget)",
          budgetRemaining: "$2,611.60",
          decision: {
            prompt: "Five days in, CPA looks high and volume looks thin. What do you do?",
            options: [
              {
                id: "wait-out-learning",
                label: "Leave it on Maximize Conversions, check back in 3 weeks",
                verdict: "optimal",
                outcome:
                  "You let the campaign accumulate real data. The lesson's guidance is to run Maximize Conversions for 3-4 weeks before judging CPA, five days is not a sample.",
                why: "Switching strategy mid-learning-phase restarts the algorithm's calibration, wasting the data already collected.",
                lessonRef: "Bidding: launch with Maximize Conversions, let it run 3-4 weeks before reviewing CPA",
                nextStageId: "week4-tcpa-decision",
              },
              {
                id: "switch-tcpa-now",
                label: "Switch to Target CPA immediately at $20 to force efficiency",
                verdict: "costly",
                outcome:
                  "Delivery collapses. A tCPA target set before the account has real conversion data, and set below the observed $31 CPA, causes the campaign to under-deliver almost entirely.",
                why: "The lesson explicitly warns tCPA needs 50+ conversions in the last 30 days as a baseline, and setting the target too low too early causes under-delivery.",
                lessonRef: "Bidding: switch to tCPA once you have 50+ conversions in the last 30 days",
                nextStageId: "end",
              },
              {
                id: "pause-campaign",
                label: "Pause the campaign, the CPA already looks too high to continue",
                verdict: "costly",
                outcome:
                  "You throw away 5 days of learning-phase data on a sample of 6 conversions. There's no basis yet to know if $31.40 is high or normal for this audience.",
                why: "Judging CPA on day 5 of a stated 3-4 week learning window is judging a campaign before it's had a chance to calibrate.",
                lessonRef: "Bidding: use Maximize Conversions during the learning phase (first 2-4 weeks) when CPA data is thin",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "week4-tcpa-decision",
          label: "Week 4, setting the tCPA target",
          elapsed: "Day 28 of 56",
          concept: "Setting tCPA at 20-30% above observed CPA",
          lessonAnchor: "bidding-two-modes-different-jobs",
          situation:
            "Four weeks of Maximize Conversions data is in. The account has 58 conversions in the trailing 30 days at an observed CPA of $22.10.",
          dashboard:
            "Demand Gen · RXBAR Fitness Content Prospecting · Day 28 of 56\n\n" +
            "  Trailing 30-day conversions        58\n" +
            "  Observed CPA                   $22.10\n" +
            "  CTR                               1.4%",
          spendToDate: "$1,281.80 of $2,800",
          budgetRemaining: "$1,518.20",
          decision: {
            prompt: "You have enough conversions to safely switch to tCPA. Where do you set the target?",
            options: [
              {
                id: "tcpa-25-percent-above",
                label: "Set tCPA at $27.50, about 25% above the observed $22.10 CPA",
                verdict: "optimal",
                outcome:
                  "Delivery stays stable and CPA holds close to the observed baseline while the algorithm optimizes toward the target over the following weeks.",
                why: "The lesson's practical rule is to set tCPA at 20-30% above the observed CPA, giving the algorithm room to bid without starving delivery.",
                lessonRef: "Bidding: set tCPA at 20-30% above the observed CPA, then tighten over the next 4-6 weeks",
                nextStageId: "week8-viewthrough-signal",
              },
              {
                id: "tcpa-match-observed",
                label: "Set tCPA at exactly $22.10, the observed CPA, to lock in current performance",
                verdict: "costly",
                outcome:
                  "Delivery volume drops sharply. A target with no buffer leaves the algorithm no room to bid competitively for the next conversion, so it simply serves fewer ads.",
                why: "Matching the target to the observed CPA exactly removes the buffer the lesson says the algorithm needs to keep delivering at volume.",
                lessonRef: "Bidding: setting tCPA too low too early causes under-delivery",
                nextStageId: "end",
              },
              {
                id: "stay-max-conversions",
                label: "Stay on Maximize Conversions indefinitely, it's already working",
                verdict: "acceptable",
                outcome:
                  "The campaign keeps spending its full budget with no CPA ceiling. It performs fine but leaves cost efficiency on the table once the account clearly has enough data to set a target.",
                why: "Maximize Conversions is the right mode for the learning phase, but the lesson frames tCPA as the next deliberate step once you cross the 50-conversion threshold, not something to skip indefinitely.",
                lessonRef: "Bidding: switch to tCPA once you have at least 50 conversions in the last 30 days",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "week8-viewthrough-signal",
          label: "Week 8, direct conversions flat, view-through climbing",
          elapsed: "Day 56 of 56",
          concept: "View-through conversions signal creative is building intent",
          lessonAnchor: "what-to-watch-in-your-dashboard",
          situation:
            "tCPA has run for 4 weeks and stabilized. Direct conversions have plateaued, but view-through conversions have climbed steadily, and assisted conversions in the Search conversion path report are up too.",
          dashboard:
            "Demand Gen · RXBAR Fitness Content Prospecting · Day 56 of 56\n\n" +
            "  Direct conversions (last 2 weeks)     41, 43 (flat)\n" +
            "  View-through conversions              18, 34 (up 89%)\n" +
            "  Assisted conversions (Search path)     22, 39 (up 77%)",
          spendToDate: "$2,690 of $2,800",
          budgetRemaining: "$110",
          decision: {
            prompt: "Direct conversions look stalled but view-through and assisted conversions are climbing fast. What's your read?",
            options: [
              {
                id: "read-mid-funnel-success",
                label: "Recognize this as the mid-funnel thesis working, keep the campaign running and feed Search",
                verdict: "optimal",
                outcome:
                  "You correctly read the pattern: Demand Gen is warming people who convert later via Search, exactly the assisted-conversion role the lesson describes for a mid-funnel channel.",
                why: "Rising view-through and assisted conversions with flat direct conversions is the exact signature of Demand Gen doing its job as a Search feeder, not a sign it's failing.",
                lessonRef: "What to Watch in Your Dashboard: high assisted conversion numbers confirm the mid-funnel thesis is working",
                nextStageId: "end",
              },
              {
                id: "pause-flat-conversions",
                label: "Pause the campaign, direct conversions have stopped growing",
                verdict: "costly",
                outcome:
                  "You cut a campaign that was quietly generating most of its value through view-through and assisted conversions, the two metrics that actually confirm mid-funnel impact.",
                why: "Direct conversions alone undercounts a mid-funnel channel's real contribution, which is exactly why the lesson calls out view-through and assisted conversions as the metrics that matter here.",
                lessonRef: "What to Watch in Your Dashboard: view-through conversions and assisted conversions",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads",
            role: "Set bidding strategy, monitor CPA and conversion volume",
            why: "Native to the campaign, no export needed for weekly checks",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull view-through and assisted conversion data via the linked account",
            why: "Free once linked to the Google Ads account, no separate license",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A week-by-week bidding decision log across the 8-week campaign, documenting when to hold, when to switch to tCPA and at what target, and how the view-through signal was interpreted.",
      sampleOutput:
        "Instacart, Demand Gen bidding log (excerpt)\n\n" +
        "Week 1: Maximize Conversions, CPA $34.80 on 4 conversions. Held, sample too small.\n" +
        "Week 4: 61 trailing-30-day conversions, observed CPA $24.60. Set tCPA at $31 (26% above observed).\n" +
        "Week 8: Direct conversions flat at ~50/week, view-through up 72%, assisted conversions up 64%. Read as mid-funnel success, kept running as a Search feeder.",
      successCriteria: [
        "Does not switch bidding strategy before the learning phase completes",
        "Sets tCPA within the 20-30% above observed CPA band",
        "Correctly interprets rising view-through/assisted conversions as a positive mid-funnel signal, not a failure",
      ],
      portfolioReady: true,
    },
  ],
  "amazon-advertising": [
    {
      id: "amazon-advertising-dashboard-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Metric That Actually Matters: Auditing an Amazon Ads Dashboard Export",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real Amazon Ads dashboard export with ACoS, TACoS, and campaign structure, diagnose whether the account's trend is healthy and whether the campaign structure has a coverage gap.",
      companyId: "mvmt-watches",
      scenario:
        "You're the paid media analyst at MVMT, the DTC watch and accessories brand, reviewing six months of Amazon Ads performance ahead of a quarterly budget review.",
      brief:
        "Read the ACoS/TACoS trend correctly, then check the campaign structure against the lesson's three-layer framework for coverage gaps.",
      mode: "diagnostic",
      conceptsCovered: [
        "TACoS vs ACoS trend interpretation",
        "Auto vs manual campaign structure completeness",
      ],
      steps: [
        {
          stepId: "step-1-tacos-trend",
          concept: "TACoS vs ACoS trend interpretation",
          lessonAnchor: "acos-and-tacos-amazons-core-metrics",
          theoryRecap:
            "The lesson explains TACoS reveals business health because it includes organic sales: if TACoS is declining while ACoS stays flat or rises, it means ads are building organic rank, which is a good sign, not a problem.",
          question:
            "Over 6 months, ACoS rose from 22% to 27% while TACoS fell from 9% to 7%. Is this a problem?",
          toolName: "Amazon Ads",
          where: "Campaign Manager > Advertising reports, plus Seller Central Business Reports for total revenue.",
          procedure: [
            "Pull ad spend and ad-attributed revenue by month to calculate ACoS",
            "Pull total revenue (ad-attributed plus organic) by month to calculate TACoS",
            "Plot both trends side by side over the 6-month window",
            "Compare the direction of each line, not just the latest month's number",
          ],
          outputSample:
            "MVMT, 6-month trend\n  Month 1: ACoS 22%, TACoS 9%\n  Month 3: ACoS 24%, TACoS 8%\n  Month 6: ACoS 27%, TACoS 7%",
          healthy:
            "TACoS declining over time while ACoS holds flat or even rises slightly, meaning organic sales are growing faster than ad-attributed sales.",
          unhealthy:
            "TACoS rising alongside ACoS, meaning the business is becoming more dependent on paid spend, not less.",
          interpret:
            "This is the healthy pattern the lesson describes. Rising ACoS with falling TACoS means the ads are functioning as a rank-building investment, not a growing cost problem.",
          soWhat: [
            {
              symptom: "ACoS trending up month over month",
              action: "Before cutting ad spend to lower ACoS, check the TACoS trend first, cutting spend here would slow the organic growth ACoS rising is currently funding",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-structure-gap",
          concept: "Auto vs manual campaign structure completeness",
          lessonAnchor: "campaign-structure-best-practices",
          theoryRecap:
            "The lesson's three-layer framework is Discovery (auto/broad), Performance (exact-match manual on proven keywords), and Defense (campaigns on your own brand terms to stop competitors stealing page visitors).",
          question:
            "The campaign list shows one auto campaign running for 6 months and one broad-match manual campaign. There is no exact-match harvest campaign and no campaign targeting the brand's own name. What's missing?",
          toolName: "Amazon Ads",
          where: "Campaign Manager > campaign list, filtered by targeting type.",
          procedure: [
            "List every live campaign and tag it Discovery, Performance, or Defense",
            "Check whether any campaign is exact-match on proven converting terms (Performance layer)",
            "Check whether any campaign targets the brand's own name (Defense layer)",
            "Flag any missing layer",
          ],
          outputSample:
            "MVMT campaign list\n  MVMT-Auto-Discovery: auto targeting, live 6 months\n  MVMT-Broad-Manual: broad/phrase match, live 6 months\n  MISSING: exact-match Performance campaign, brand-defense campaign",
          healthy:
            "All three layers present: Discovery finding new terms, Performance running exact-match on proven winners, Defense protecting the brand name.",
          unhealthy:
            "Only Discovery-layer campaigns after 6 months, with no harvest into exact-match and no brand-defense campaign at all.",
          interpret:
            "Six months of auto/broad data with nothing harvested into exact-match means proven winning terms are still paying broad-match rates instead of controlled bids, and the brand name is sitting undefended.",
          soWhat: [
            {
              symptom: "No campaign targets the brand's own name after 6 months live",
              action: "Launch an exact-match campaign bidding on the brand's own name at a low floor bid immediately",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Amazon Ads",
            role: "Pull the campaign list and ACoS/TACoS reporting",
            why: "Native Campaign Manager reporting, no third-party tool required",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Chart the ACoS/TACoS trend and log the campaign structure audit",
            why: "Free and fast for a 6-month trend comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo stating whether the ACoS/TACoS trend is healthy, and listing the specific campaign-structure gaps to fix before the next quarter.",
      sampleOutput:
        "RXBAR, Amazon Ads audit (excerpt)\n\n" +
        "TREND: HEALTHY\n  ACoS 19% -> 23% (up), TACoS 11% -> 8% (down) — organic rank is absorbing more of total sales\n\n" +
        "STRUCTURE: GAP FOUND\n  Discovery: present (auto campaign, 4 months live)\n  Performance: MISSING — no exact-match harvest campaign\n  Defense: present (brand-name campaign live)\n\n" +
        "RECOMMENDATION: Pull the search term report and harvest top 10 converting terms into a new exact-match campaign this week.",
      successCriteria: [
        "Correctly reads a rising-ACoS/falling-TACoS trend as healthy, not a problem",
        "Correctly identifies which of the three campaign-structure layers is missing",
      ],
      portfolioReady: true,
    },
    {
      id: "amazon-advertising-harvest-cycle-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 30-Day Flywheel: Auto Campaign to Manual Harvest",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Run a new Amazon Sponsored Products launch through the lesson's 30-day playbook, making the same harvest-timing and brand-defense decisions a live account manager would face.",
      companyId: "firstcry-brainbees",
      scenario:
        "You manage Amazon India advertising for FirstCry (Brainbees Solutions), launching a new baby-monitor SKU with a fresh auto Sponsored Products campaign.",
      brief:
        "Decide when to harvest converting search terms into a manual campaign, and how to respond when a competitor starts bidding on the brand's own name.",
      mode: "simulation",
      conceptsCovered: [
        "Harvesting converting search terms from auto campaigns",
        "Defending your own brand name from competitor bidding",
      ],
      stages: [
        {
          stageId: "day14-first-harvest",
          label: "Day 14, first search term pull",
          elapsed: "Day 14 of 30",
          concept: "Harvesting converting search terms from auto campaigns",
          lessonAnchor: "getting-started-the-30-day-playbook",
          situation:
            "The auto campaign has run untouched for two weeks as the lesson recommends. You pull the search term report for the first time.",
          dashboard:
            "FirstCry Auto-Discovery, Baby Monitor SKU · Day 14 of 30\n\n" +
            "  Total spend                 Rs 18,400\n" +
            "  ACoS                             38%\n" +
            "  Top converting terms       12 terms, 3+ conversions each, ACoS 14-22%\n" +
            "  Zero-conversion terms      31 terms, Rs 6,100 spent, 0 conversions",
          spendToDate: "Rs 18,400 of Rs 40,000 (30-day budget)",
          budgetRemaining: "Rs 21,600",
          decision: {
            prompt: "The search term report is in front of you. What's the move?",
            options: [
              {
                id: "harvest-and-negative",
                label: "Harvest the 12 top-converting terms into a new exact-match manual campaign, and add them as negatives in the auto campaign",
                verdict: "optimal",
                outcome:
                  "The manual campaign takes over spend on the proven terms at controlled bids, while the auto campaign keeps discovering new terms instead of competing against your own manual bids.",
                why: "This is the exact harvest-and-negative loop the lesson's 30-day playbook describes: mine the auto campaign's winners, move them to manual, let auto keep discovering.",
                lessonRef: "Getting Started: pull the search term report, move top converting terms into a manual exact match campaign with controlled bids",
                nextStageId: "day30-brand-defense",
              },
              {
                id: "wait-longer",
                label: "Let the auto campaign run untouched for another two weeks before doing anything",
                verdict: "acceptable",
                outcome:
                  "You collect more data, but you also keep paying auto-match rates on 12 already-proven terms and keep bleeding spend on the 31 zero-conversion terms for two more weeks.",
                why: "The lesson's playbook specifically times the first harvest at two weeks, waiting longer isn't wrong, it's just leaving money on the table the playbook says is already ready to move.",
                lessonRef: "Getting Started: let it run for two weeks without touching it, you need data",
                nextStageId: "day30-brand-defense",
              },
              {
                id: "raise-auto-bid",
                label: "Raise the auto campaign's overall bid to capture more volume across all terms",
                verdict: "costly",
                outcome:
                  "Spend accelerates on both the 12 winning terms and the 31 zero-conversion terms equally, since a blanket bid increase can't tell them apart. ACoS gets worse, not better.",
                why: "A campaign-wide bid increase spends more on exactly the terms that were already burning budget with zero conversions, the opposite of what harvesting is meant to fix.",
                lessonRef: "Getting Started: harvest winning terms, pause or lower bids on irrelevant terms in the auto campaign",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day30-brand-defense",
          label: "Day 30, a competitor bids on the brand name",
          elapsed: "Day 30 of 30",
          concept: "Defending your own brand name from competitor bidding",
          lessonAnchor: "campaign-structure-best-practices",
          situation:
            "The harvest cycle is working, the manual campaign now drives most conversions at a controlled ACoS. A competitor's ad has started appearing when shoppers search \"FirstCry baby monitor\" directly.",
          dashboard:
            "FirstCry, Day 30 of 30\n\n" +
            "  Manual campaign share of conversions     71%\n" +
            "  Manual campaign ACoS                     19%\n" +
            "  Brand-name search results                Competitor ad now appears above organic listing",
          spendToDate: "Rs 39,100 of Rs 40,000",
          budgetRemaining: "Rs 900",
          decision: {
            prompt: "A competitor is now bidding on your own brand name in Amazon search results. What do you do?",
            options: [
              {
                id: "defend-brand-name",
                label: "Launch an exact-match campaign bidding on the brand's own name at a low floor bid",
                verdict: "optimal",
                outcome:
                  "The floor bid is enough to keep FirstCry's own ad above the competitor's, protecting page visitors for a low incremental spend since the organic listing already ranks first.",
                why: "The lesson is direct on this: competitors will bid on your brand name, and losing your own brand keywords to a rival on your own page is an easy, cheap loss to prevent.",
                lessonRef: "Campaign Structure Best Practices: bid on your own brand name, competitors absolutely will",
                nextStageId: "end",
              },
              {
                id: "ignore-organic-rank",
                label: "Ignore it, the organic listing still ranks first anyway",
                verdict: "costly",
                outcome:
                  "Over the following weeks, a measurable share of brand-name search clicks go to the competitor's ad instead, page visitors that were previously free are now being paid for by someone else.",
                why: "Ranking first organically doesn't stop a paid ad from appearing above it, the lesson calls this exact scenario an easy loss to prevent, not one to tolerate.",
                lessonRef: "Campaign Structure Best Practices: losing your brand keywords to a rival on your own Amazon page is an easy loss to prevent",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Amazon Ads",
            role: "Run the auto and manual campaigns, pull the search term report",
            why: "Native Campaign Manager tooling covers the full harvest cycle",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Track harvested terms and their move from auto to manual over time",
            why: "Free and sufficient for a weekly harvest log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 30-day campaign log documenting the harvest decision at day 14 and the brand-defense decision at day 30, with the reasoning for each.",
      sampleOutput:
        "Allbirds, Amazon Ads 30-day flywheel log (excerpt)\n\n" +
        "Day 14: Search term report showed 9 converting terms at ACoS 12-19%. Harvested into a new exact-match campaign, added as negatives in auto.\n" +
        "Day 21: Manual campaign driving 58% of conversions, overall ACoS down from 41% to 26%.\n" +
        "Day 28: Competitor ad appeared on brand-name search. Launched a brand-defense exact-match campaign at a Rs 3 floor bid same day.",
      successCriteria: [
        "Harvests converting search terms into a manual campaign rather than raising auto bids broadly",
        "Launches a brand-defense campaign rather than relying on organic rank alone",
      ],
      portfolioReady: true,
    },
  ],

  "first-party-data-activation": [
    {
      id: "first-party-data-activation-hashing-pipeline-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a SHA-256 Hashing-Ready Customer Match Upload Sheet",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a raw, messy 20-row customer export (mixed casing, extra whitespace, non-E.164 phone formats), normalize it into a Customer Match-ready format and correctly identify which rows must be dropped before hashing rather than uploaded as-is.",
      companyId: "thredup",
      scenario: "You're a growth marketer at ThredUp, the online secondhand-apparel marketplace, prepping a lapsed-buyer segment for a Google Customer Match re-engagement campaign ahead of the resale season.",
      brief: "Normalize the export to Google's match-key requirements (lowercase, trimmed emails; E.164 phones) and flag any row that can't be hashed safely as-is.",
      mode: "build",
      conceptsCovered: ["Normalizing match keys before hashing"],
      steps: [
        {
          stepId: "step-1-normalize-match-keys",
          concept: "Normalizing match keys before hashing",
          lessonAnchor: "data-requirements-and-hashing",
          theoryRecap: "The lesson's Data Requirements and Hashing section requires emails normalized to lowercase and trimmed, and phone numbers in E.164 format, before SHA-256 hashing, because a hash of ` User@Example.com ` will never match Google's hash of `user@example.com`.",
          question: "Given 20 raw rows including ' Sara.K@Gmail.com', '(415) 555-2671', and a row with a blank email and no phone, which rows are upload-ready and which must be fixed or dropped?",
          toolName: "Google Sheets",
          where: "Import customer-export.csv, add helper columns for normalized email and E.164 phone.",
          procedure: [
            "Import customer-export.csv and freeze the header row",
            "Add a normalized-email column: =LOWER(TRIM(A2)) applied down the column",
            "Add an E.164-phone column converting formats like '(415) 555-2671' to '+14155552671'",
            "Flag any row with neither a usable email nor phone as DROP, it has no match key to hash",
          ],
          outputSample: "row 3: raw ' Sara.K@Gmail.com' -> normalized 'sara.k@gmail.com'   READY\nrow 7: raw '(415) 555-2671'    -> E.164 '+14155552671'      READY\nrow 12: raw email blank, phone blank                    DROP, no match key\nrow 15: raw 'MIKE@BIZ.CO ' (trailing space)              READY after trim+lowercase",
          healthy: "18 of 20 rows normalized and upload-ready; 2 rows explicitly dropped with a reason logged.",
          unhealthy: "Uploading all 20 rows as-is, including the 2 with no match key, or hashing ' User@Example.com' without trimming first.",
          interpret: "A hash is only useful if it matches Google's hash of the same value in the same format. Normalization has to happen before hashing, not after, because hashing is one-way, you can't fix a bad hash after the fact.",
          soWhat: [{ symptom: "Customer Match audience uploads but match rate is unexpectedly low", action: "Check normalization (case, whitespace, phone format) before assuming the audience is just small", effort: "30 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Normalize raw export fields before hashing", why: "Free, no account friction, formulas handle case/whitespace/phone-format fixes", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A cleaned, normalized customer list with a DROP flag column, ready to be hashed and uploaded to Google's Data Manager API.",
      sampleOutput:
        "Glossybox, lapsed-subscriber re-engagement list (excerpt)\n\n" +
        "email_normalized          phone_e164        status\n" +
        "priya.n@gmail.com         +919845012345     READY\n" +
        "sam.oconnor@yahoo.com     +14155552671      READY\n" +
        "(blank)                   (blank)           DROP, no match key\n" +
        "j.lee@biz.co              +442071234567     READY\n\n" +
        "Summary: 47 of 50 rows ready, 3 dropped for missing match keys",
      successCriteria: ["Every ready row has lowercase, trimmed email or valid E.164 phone", "Rows with no usable match key are explicitly flagged, not silently uploaded"],
      portfolioReady: true,
    },
    {
      id: "first-party-data-activation-capi-dedup-audit",
      tier: "core",
      archetype: "audit",
      title: "The Deduplication Audit: Catching a Double-Counted Conversion Before It Skews Your CPA",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Given a set of paired browser-Pixel and server-CAPI event logs for the same purchases, identify which events are missing a matching event_id (and will double-count) versus which are correctly deduplicated, and quantify the CPA distortion caused by the gap.",
      companyId: "airbnb",
      scenario: "You're auditing tracking health for a mid-market DTC brand's Meta ad account after a developer rolled out server-side CAPI last month, and CPA has mysteriously dropped 35% in the dashboard with no change in spend or targeting.",
      brief: "Pair every Pixel event against its CAPI counterpart by order ID, check for matching event_id, and calculate the real (deduplicated) purchase count versus the dashboard's reported count.",
      mode: "diagnostic",
      conceptsCovered: ["Diagnosing double-counted conversions from a missing event_id", "Reading Enhanced Conversions match-rate impact on Smart Bidding"],
      steps: [
        {
          stepId: "step-1-event-id-pairing",
          concept: "Diagnosing double-counted conversions from a missing event_id",
          lessonAnchor: "meta-capi-pixel-server-not-eitheror",
          theoryRecap: "The lesson's Meta CAPI section explains that running Pixel and CAPI in parallel requires an identical event_id on both payloads for the same event, or Meta counts it twice, artificially lowering apparent CPA and causing Smart Bidding to over-spend chasing a target that isn't real.",
          question: "Of 15 purchase events logged this week, 15 fired from the Pixel and 15 fired from CAPI. Pairing them by order ID, 4 pairs share no matching event_id. What does the dashboard report versus what actually happened?",
          toolName: "Google Sheets",
          where: "Import pixel-events.csv and capi-events.csv, join on order_id, compare event_id columns.",
          procedure: [
            "Import both event logs and match rows on order_id using VLOOKUP or a join",
            "Compare the event_id value on each matched pair",
            "Flag pairs where event_id differs or is blank on one side, these count as 2 conversions instead of 1",
            "Recalculate true purchase count and the resulting real CPA",
          ],
          outputSample: "order #4471: pixel event_id 'evt_a1'  | capi event_id 'evt_a1'   MATCHED, counts once\norder #4472: pixel event_id 'evt_b2'  | capi event_id (blank)    NOT MATCHED, counts twice\norder #4473: pixel event_id 'evt_c3'  | capi event_id 'evt_c9'   MISMATCHED, counts twice\n...\nDashboard-reported purchases: 19   Actual deduplicated purchases: 15   Inflation: +26.7%",
          healthy: "Deduplicated purchase count matches order volume exactly; dashboard CPA and real CPA are the same number.",
          unhealthy: "Dashboard shows 19 purchases against 15 real orders because 4 CAPI events fired without the Pixel's event_id, so Meta's bid strategy is optimizing toward a CPA that's 27% too optimistic.",
          interpret: "A missing or mismatched event_id isn't a tracking inconvenience, it directly corrupts the number Smart Bidding optimizes against, which means the algorithm will keep spending as if it's hitting a target CPA it's actually missing.",
          soWhat: [{ symptom: "CPA drops sharply right after a CAPI rollout with no other change", action: "Audit event_id pairing before trusting the new lower CPA, don't just celebrate it", effort: "30 min" }],
          owner: "developer",
        },
        {
          stepId: "step-2-enhanced-conversions-lift-read",
          concept: "Reading Enhanced Conversions match-rate impact on Smart Bidding",
          lessonAnchor: "enhanced-conversions-setup-and-expected-lift",
          theoryRecap: "The lesson cites Workshop Digital's case studies: 4 of 5 client accounts saw a lift in tracked conversion volume after enabling Enhanced Conversions, averaging 6-10% recovery, because hashed first-party data gives Google a second matching attempt when cookies fail.",
          question: "After enabling Enhanced Conversions, weekly tracked conversions rose from 210 to 226 with no change in spend or creative. Is this a real recovery signal or noise?",
          toolName: "Google Sheets",
          where: "Compare a 4-week pre-launch average against a 4-week post-launch average for tracked conversions, holding spend constant.",
          procedure: [
            "Pull weekly tracked conversions for the 4 weeks before and after enabling Enhanced Conversions",
            "Confirm spend and campaign structure didn't change in the same window",
            "Calculate percent lift: (post-avg minus pre-avg) / pre-avg",
            "Compare the lift against the lesson's 6-10% benchmark range",
          ],
          outputSample: "Pre-launch 4-week avg: 210 conversions/week\nPost-launch 4-week avg: 226 conversions/week\nLift: +7.6%, within the 6-10% typical recovery range cited in the case studies",
          healthy: "A 6-10% lift with stable spend, consistent with previously-unmatched cookieless conversions now being recovered via hashed data.",
          unhealthy: "Treating any conversion increase as proof of a random creative or targeting change when spend and creative were both held constant.",
          interpret: "A lift in this specific range, with everything else held constant, is the expected signature of Enhanced Conversions recovering matches Google previously missed, not a coincidence worth re-attributing to something else.",
          soWhat: [{ symptom: "Conversions rise right after enabling Enhanced Conversions", action: "Check the lift against the 6-10% benchmark before crediting an unrelated campaign change", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Join and compare Pixel vs CAPI event logs by order ID", why: "Free, handles VLOOKUP-based pairing without a paid analytics tool", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A deduplication audit spreadsheet showing true purchase count vs. dashboard-reported count, plus an Enhanced Conversions lift calculation with a verdict on whether it matches the expected benchmark range.",
      sampleOutput:
        "Duolingo Plus, Meta Ads tracking audit (excerpt)\n\n" +
        "DEDUPLICATION CHECK\n" +
        "  Dashboard purchases (7 days): 142\n" +
        "  Deduplicated purchases: 131\n" +
        "  Inflation: +8.4%, 11 events missing matched event_id\n\n" +
        "ENHANCED CONVERSIONS LIFT\n" +
        "  Pre-launch avg: 580/week   Post-launch avg: 621/week\n" +
        "  Lift: +7.1%, within expected 6-10% recovery range",
      successCriteria: ["Correctly identifies every mismatched/missing event_id pair", "Calculates a real deduplicated CPA distinct from the dashboard number", "Correctly judges whether the Enhanced Conversions lift falls inside the benchmark range"],
      portfolioReady: true,
    },
  ],
  "creator-ugc-ads": [
    {
      id: "creator-ugc-ads-brief-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Write a UGC Creator Brief That Doesn't Sound Like a Script",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Write a Hook-format UGC creator brief for a real product that gives a creator enough direction to produce on-brand content without dictating word-for-word dialogue, the single most common way brands accidentally make UGC look scripted.",
      companyId: "glossybox",
      scenario: "You're the paid social lead at Glossybox, the beauty subscription box company, briefing a UGC platform creator for a Hook-format ad testing a new limited-edition box.",
      brief: "Write a brief with a problem/surprise hook, 3 required talking points (not scripted lines), and explicit creative freedom notes, then check it against a scripted-sounding version to see the difference.",
      mode: "build",
      conceptsCovered: ["Writing a Hook-format brief without over-scripting"],
      steps: [
        {
          stepId: "step-1-hook-brief",
          concept: "Writing a Hook-format brief without over-scripting",
          lessonAnchor: "the-three-ugc-content-formats-and-when-to-use-each",
          theoryRecap: "The lesson's Hook Format section describes opening with a problem or surprise ('I spent $3,000 on productivity tools and wasted it all') before revealing the product, used for cold traffic, and notes that UGC only reads as authentic when it isn't scripted word-for-word.",
          question: "Given the product (a $42/month beauty subscription box) and format (Hook), what belongs in the brief as a required talking point versus what should be left to the creator's own words?",
          toolName: "Google Docs",
          where: "Draft the brief in a shared doc the creator can comment on directly.",
          procedure: [
            "Write a 1-sentence problem/surprise hook prompt, not a scripted line",
            "List 3 required talking points (what the box costs, what's inside, the cancel-anytime policy) as bullet facts, not dialogue",
            "Add an explicit 'in your own words' note next to each talking point",
            "Specify format constraints only (length, vertical video, first 3 seconds must show a reaction) without directing exact phrasing",
          ],
          outputSample: "HOOK PROMPT (creator's own words): Something that surprised you about your first box\nREQUIRED FACTS: $42/month, 5-7 full-size products, cancel anytime\nFORMAT: 15-30 sec, vertical, reaction visible in first 3 seconds\nNOT INCLUDED: no scripted lines, no required brand phrases",
          healthy: "A brief a creator can read in 2 minutes and immediately understand what facts must appear, while everything else stays in their own voice.",
          unhealthy: "A brief with a full word-for-word script the creator is asked to read on camera, which is the single fastest way to make UGC look like a studio ad.",
          interpret: "The lesson's core claim is that authenticity beats polish because people trust a peer, not a brand message; a scripted brief undoes that trust before the creator even films.",
          soWhat: [{ symptom: "UGC videos come back sounding stiff or brand-scripted", action: "Check the brief for dialogue lines instead of talking-point facts", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Draft and share the creator brief", why: "Free, comment threads let the creator ask clarifying questions directly on the brief", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A one-page Hook-format creator brief with required facts separated from open creative direction.",
      sampleOutput:
        "ThredUp, UGC Hook brief (excerpt)\n\n" +
        "HOOK PROMPT: Something that shocked you the first time you thrifted online\n" +
        "REQUIRED FACTS: up to 90% off retail, free shipping over $79, Clean Out Kit for selling\n" +
        "FORMAT: 20-30 sec vertical, unboxing moment required\n" +
        "NOT SCRIPTED: creator's own words throughout, no required brand phrases",
      successCriteria: ["Required facts are listed separately from any suggested phrasing", "No line in the brief reads as a word-for-word script"],
      portfolioReady: true,
    },
    {
      id: "creator-ugc-ads-teardown-authenticity",
      tier: "core",
      archetype: "teardown",
      title: "The Authenticity Teardown: Spotting What Makes UGC Read as an Ad",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective: "Given 3 synthetic UGC ad scripts (one Hook, one Product Demo, one Testimonial), identify the specific lines and structural choices that break the authenticity illusion, versus surface-level flags (a phone camera, a plain background) that don't actually matter.",
      companyId: "duolingo",
      scenario: "You're reviewing a batch of 3 UGC ad scripts submitted by a creator platform for Duolingo's language-learning app before greenlighting production, checking each against the lesson's authenticity criteria.",
      brief: "Score each script's defects by severity, distinguish real red flags from things that merely look unpolished but aren't actually the problem.",
      mode: "teardown",
      conceptsCovered: ["Scripted dialogue defeats the Hook format's authenticity", "Brand-phrase language breaks Testimonial-format trust", "Format-mismatch between Demo content and Testimonial framing"],
      teardownItems: [
        {
          itemId: "item-1-hook-script",
          specimen: "SCRIPT A (Hook format, submitted for cold-traffic testing):\n[Creator on camera, holding phone] \"Hey guys! I'm SO excited to share Duolingo with you today, it's a language-learning app that has completely transformed the way I study! With Duolingo, you can learn over 40 languages using bite-sized, gamified lessons that fit into your busy schedule. I've used the app to learn Spanish for 3 months and I've seen incredible results! Duolingo makes learning fun and effective, unlike boring textbooks!\"\n[Cut to app screen recording]",
          specimenSource: "synthetic-realistic",
          prompt: "This is a Hook-format script meant for cold traffic. Identify what breaks the authenticity illusion, and note anything that looks unpolished but isn't actually a defect.",
          answerKey: [
            { defect: "Opens with brand enthusiasm ('I'm SO excited to share Duolingo with you today') instead of a problem or surprise, the lesson's Hook format specifically requires opening with a problem or surprise, not a product introduction", severity: "critical", whyItMatters: "A Hook that leads with the product name and brand excitement reads exactly like a scripted ad, the opposite of the format's purpose of stopping cold-traffic scroll with a relatable moment", lessonRef: "The Three UGC Content Formats, And When to Use Each", owner: "you" },
            { defect: "Marketing-copy phrasing ('bite-sized, gamified lessons that fit into your busy schedule', 'unlike boring textbooks') reads as lifted from an app store listing, not something a real person says out loud", severity: "critical", whyItMatters: "This is the exact scripted-dialogue failure the lesson warns kills the peer-recommendation feel that makes UGC outperform studio ads", lessonRef: "The Performance Gap", owner: "you" },
            { defect: "No specific, concrete detail (which language beyond naming Spanish, what the '3 months' result actually was) to anchor the claim as a real experience", severity: "moderate", whyItMatters: "Vague claims read as generic testimonial filler rather than a specific, believable moment, weakening trust even if the delivery improves", lessonRef: "The Performance Gap", owner: "you" },
          ],
          distractors: ["The creator is holding a phone instead of using a tripod", "The script cuts to a screen recording of the app"],
          partialCredit: true,
        },
        {
          itemId: "item-2-testimonial-script",
          specimen: "SCRIPT B (Testimonial format, submitted for bottom-funnel retargeting):\n[Creator sitting casually at home] \"Okay so I have to talk about this. I was honestly skeptical about language apps, I'd tried like 3 before and gave up on all of them within a week. But Duolingo's streak thing genuinely got me, I'm on day 94 now and I actually understand basic conversations in French, which felt impossible six months ago. It's not perfect, some of the later lessons feel repetitive, but for actually sticking with it? Nothing else worked for me like this did.\"",
          specimenSource: "synthetic-realistic",
          prompt: "This is a Testimonial-format script for bottom-funnel retargeting. Identify any real defects versus things that might look like defects but actually support the format's goal.",
          answerKey: [
            { defect: "No defect: including a mild criticism ('some of the later lessons feel repetitive') alongside the praise, this is a strength, not a flaw", severity: "cosmetic", whyItMatters: "A testimonial with zero criticism reads as scripted; a specific, minor gripe alongside genuine praise is exactly what makes the format read as a real peer opinion rather than an ad", lessonRef: "The Three UGC Content Formats, And When to Use Each", owner: "you" },
          ],
          distractors: ["The creator mentions trying 3 competitor apps by name, which could be a legal/comparative-claims risk depending on how it's phrased", "The specific streak number (day 94) makes the claim feel dated once the real campaign launches"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Score and annotate each submitted script before greenlighting production", why: "Free, comment threads track defect notes creator-facing feedback can reference directly", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A scored teardown of all 3 submitted scripts with defects ranked by severity and a go/no-go/revise verdict per script.",
      sampleOutput:
        "ThredUp, UGC script review (excerpt)\n\n" +
        "SCRIPT A (Hook): REVISE, critical, opens with product name instead of a relatable problem\n" +
        "SCRIPT B (Testimonial): APPROVE, mild built-in criticism reads as authentic, no scripted-language flags\n" +
        "SCRIPT C (Demo): REVISE, moderate, framed as an opinion piece instead of a step-by-step walkthrough",
      successCriteria: ["Correctly separates real authenticity defects from cosmetic non-issues", "Flags scripted/marketing-copy language specifically, not just general tone", "Does not penalize legitimate testimonial criticism as a defect"],
      portfolioReady: true,
    },
  ],

  "snapchat-pinterest-ads": [
    {
      id: "snapchat-pinterest-ads-platform-fit-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which Platform Actually Fits: A Two-Brand Placement Audit",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective: "Given two supplied brand briefs and a shared $20/day test budget, apply the lesson's platform-fit framework and Pinterest keyword-targeting logic to decide which platform each brand should lead with, and which Pinterest keywords each should bid on.",
      companyId: "allbirds",
      scenario: "You're a freelance paid-media consultant. Two prospective clients have asked which platform, Snapchat or Pinterest, deserves their first $20/day test: Allbirds (sustainable footwear, core buyer 22-35) and a fictional home-décor brand, Warmly Home (ceramic planters and linen throws, core buyer 28-45, average 4-month purchase-planning cycle).",
      brief: "Score each brand against the lesson's audience/intent criteria for both platforms, then write 5 Pinterest keywords for whichever brand fits Pinterest, sized against realistic search intent.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching platform to audience age and purchase-intent horizon",
        "Pinterest keyword targeting as a search-intent signal, not an interest signal",
      ],
      steps: [
        {
          stepId: "step-1-platform-fit",
          concept: "Matching platform to audience age and purchase-intent horizon",
          lessonAnchor: "which-platform-for-which-brand",
          theoryRecap: "The lesson splits fit by two variables: audience age (Snapchat skews under-25, 90%+ of US/UK/Australian users daily active) and purchase-planning horizon (Pinterest users plan 3-6 months out; someone pinning wedding dresses is 90% more likely to be actively planning a wedding).",
          question: "Allbirds' buyer is 22-35 buying shoes on a short cycle. Warmly Home's buyer is 28-45 planning a room refresh over months. Which platform leads for each, and why does Warmly Home NOT default to Snapchat just because CPMs are lower there?",
          toolName: "Google Sheets",
          where: "Build a 2-column scoring sheet: platform fit criteria as rows, each brand as a column.",
          procedure: [
            "List the lesson's fit criteria as rows: audience age, purchase-planning horizon, category (CPG/fashion vs. home/wedding/DIY)",
            "Score Allbirds against Snapchat and Pinterest fit criteria",
            "Score Warmly Home against Snapchat and Pinterest fit criteria",
            "Write the platform recommendation for each brand with one sentence citing the deciding criterion",
          ],
          outputSample: "Allbirds -> Snapchat lead (fashion/apparel chasing a younger, faster-cycle buyer; short consideration window fits Snap's impulse-driven Story format)\nWarmly Home -> Pinterest lead (home decor, 3-6 month planning cycle, buyer actively searching room-refresh ideas, not scrolling Stories)",
          healthy: "Warmly Home gets recommended to Pinterest even though Snapchat CPMs are cheaper, because cheap reach to the wrong intent is still wasted spend.",
          unhealthy: "Recommending Snapchat for Warmly Home purely because the CPM number looks better on a spreadsheet.",
          interpret: "Platform fit is decided by audience age and purchase-intent horizon first; CPM is a tiebreaker only after fit is established, never the primary filter.",
          soWhat: [{ symptom: "A client asks 'why not just run the cheaper platform for both brands'", action: "Show the fit-criteria table, not the CPM comparison, to justify the split", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-keyword-targeting",
          concept: "Pinterest keyword targeting as a search-intent signal, not an interest signal",
          lessonAnchor: "pinterest-targeting-keywords-like-search",
          theoryRecap: "The lesson positions Pinterest keyword targeting as closer to search than social: keywords like 'sustainable wedding dress' or 'coastal interior design' target people already primed to convert, not people who merely share an interest category.",
          question: "For Warmly Home, which 5 keywords belong in the first Pinterest campaign, and which of the following should be rejected as too broad: 'home decor', 'ceramic planter for windowsill', 'living room ideas', 'linen throw blanket neutral', 'interior design', 'cozy reading nook decor'?",
          toolName: "Pinterest Ads Manager",
          where: "Pinterest Ads Manager, campaign creation, Keywords targeting tab.",
          procedure: [
            "Discard 'home decor' and 'interior design': category-level terms with no specific buying signal, matches the lesson's warning against broad interest terms",
            "Keep 'ceramic planter for windowsill', 'linen throw blanket neutral', 'cozy reading nook decor': specific enough to signal an active shopper, not a browser",
            "Keep 'living room ideas' as a secondary informational-adjacent term feeding the top of funnel, flagged lower priority",
            "Submit the 5-keyword list ranked by specificity",
          ],
          outputSample: "PRIMARY (high specificity)\n  1. ceramic planter for windowsill\n  2. linen throw blanket neutral\n  3. cozy reading nook decor\nSECONDARY (top-of-funnel)\n  4. living room ideas\nREJECTED (too broad)\n  home decor, interior design",
          healthy: "The keyword list favors specific, buying-stage phrases over category umbrellas.",
          unhealthy: "Bidding on 'home decor' because it has the highest search volume, without checking whether volume means buying intent.",
          interpret: "On Pinterest, keyword specificity is a proxy for purchase stage; broad category terms pull browsers, specific product-context terms pull buyers.",
          soWhat: [{ symptom: "Pinterest CTR is fine but conversion rate is flat", action: "Audit the keyword list for category-level terms and replace them with specific product-context phrases", effort: "30 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Score platform fit for each brand", why: "Free, no account needed", required: true, lastVerified: "2026-08" },
          { toolName: "Pinterest Ads Manager", role: "Build and validate the keyword list", why: "Free account creation, keyword targeting tab available without spend", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page platform recommendation for each brand plus a ranked 5-keyword Pinterest targeting list for the brand that fits Pinterest.",
      sampleOutput:
        "Warmly Home, Pinterest keyword targeting brief\n\n" +
        "RECOMMENDATION: Pinterest lead, Snapchat skip for now\n" +
        "Reasoning: buyer plans 3-6 months out and actively searches room-refresh ideas; matches Casper Sleep's own finding that intent-stage keyword targeting outperforms interest-stage targeting for considered-purchase categories.\n\n" +
        "KEYWORD LIST (ranked)\n" +
        "1. ceramic planter for windowsill   -- primary, high specificity\n" +
        "2. linen throw blanket neutral      -- primary, high specificity\n" +
        "3. cozy reading nook decor          -- primary, high specificity\n" +
        "4. living room ideas                -- secondary, top-of-funnel\n" +
        "REJECTED: home decor, interior design (category-level, no buying signal)",
      successCriteria: [
        "Correctly recommends Snapchat for Allbirds and Pinterest for Warmly Home with the deciding criterion named",
        "Keeps the 3 specific keywords, demotes the 1 informational term, and rejects both category-level terms",
      ],
      portfolioReady: true,
    },
    {
      id: "snapchat-pinterest-ads-two-week-test-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The $20/Day Split Test: Running Two Weeks of Snapchat and Pinterest",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Practice the lesson's 14-day, $20/day split-test workflow across Snapchat and Pinterest, reacting to swipe-rate, CTR, and add-to-cart signals at three checkpoints without an ad account or real spend.",
      companyId: "casper-sleep",
      scenario: "You're running paid social for Casper Sleep's new travel pillow line. You've allocated $20/day for 14 days, split $10 Snapchat / $10 Pinterest, to find which platform earns the next quarter's budget.",
      brief: "Read each checkpoint's dashboard, apply the lesson's swipe-rate and add-to-cart benchmarks, and decide whether to hold, adjust, or reallocate budget.",
      mode: "simulation",
      conceptsCovered: [
        "Reading Snapchat swipe rate as a creative-resonance signal",
        "Reading Pinterest add-to-cart rate as the winner-selection metric",
      ],
      stages: [
        {
          stageId: "day3-checkpoint",
          label: "Day 3, first look",
          elapsed: "Day 3 of 14",
          concept: "Reading Snapchat swipe rate as a creative-resonance signal",
          lessonAnchor: "testing-both-platforms-without-overspending",
          situation: "Both campaigns have been live for three days with the single Snap Ad creative and the 3 Pinterest lifestyle images running untouched.",
          dashboard:
            "Snapchat, 'Travel Pillow Launch'\n" +
            "  Spend            $30.00\n" +
            "  Impressions       9,400\n" +
            "  Swipe rate         84%   (lesson benchmark: above 80% = creative isn't resonating)\n" +
            "  CPC               $0.71\n\n" +
            "Pinterest, 3 lifestyle images\n" +
            "  Spend             $30.00\n" +
            "  Clicks              210\n" +
            "  Add-to-cart          4",
          spendToDate: "$60.00 of $280",
          budgetRemaining: "$220.00",
          decision: {
            prompt: "Snapchat's swipe rate is 84%, above the lesson's 80% ceiling for 'creative isn't resonating.' What do you do on day 3?",
            options: [
              {
                id: "swap-creative-day3",
                label: "Swap the Snap Ad for a rawer, phone-shot cut with the hook in the first second",
                verdict: "optimal",
                outcome: "The lesson is explicit: above 80% swipe rate means the creative isn't resonating, and Snapchat rewards native, unpolished content over TV-style production. Swapping early, on day 3 of 14, still leaves 11 days to gather real signal on the replacement.",
                why: "An 84% swipe rate this early is a creative problem, not a targeting problem; waiting burns budget on a format the audience is already rejecting.",
                lessonRef: "Creative Principles for Snapchat: feel native to the platform, not like a TV commercial",
                nextStageId: "day9-checkpoint",
              },
              {
                id: "wait-it-out-day3",
                label: "Leave both campaigns untouched and check again in a week",
                verdict: "costly",
                outcome: "By day 9 the swipe rate is still 83% and $90 more has been spent reaching an audience that keeps skipping. The delay cost a full week of the 14-day test on a creative the lesson's own benchmark already flagged.",
                why: "The 80% swipe-rate threshold exists specifically so you don't need a week of extra data to know a creative is failing.",
                lessonRef: "On Snapchat, focus on one vertical video creative. Measure swipe rate and cost per click.",
                nextStageId: "end",
              },
              {
                id: "kill-snapchat-day3",
                label: "Pull all remaining Snapchat budget and move it to Pinterest immediately",
                verdict: "acceptable",
                outcome: "Pinterest gets more budget and Snapchat stops bleeding on a bad creative, but this skips the lesson's actual fix, swapping creative, and abandons a channel that fits Casper's under-35 travel-pillow buyer well before giving it a fair second attempt.",
                why: "A high swipe rate on day 3 is a creative signal, not proof the platform is wrong for this brand.",
                lessonRef: "Which Platform for Which Brand?",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day9-checkpoint",
          label: "Day 9, mid-test read",
          elapsed: "Day 9 of 14",
          concept: "Reading Pinterest add-to-cart rate as the winner-selection metric",
          lessonAnchor: "testing-both-platforms-without-overspending",
          situation: "The swapped Snap Ad is now at a healthy 41% swipe rate. Pinterest has run all 3 lifestyle images against the 5 target keywords for 9 days.",
          dashboard:
            "Snapchat, new creative\n" +
            "  Spend            $60.00 (since swap)\n" +
            "  Swipe rate          41%\n" +
            "  CPC               $0.52\n\n" +
            "Pinterest, per-image breakdown\n" +
            "  Image A (product on shelf)         Clicks 140   Add-to-cart 2\n" +
            "  Image B (pillow in airport lounge)  Clicks 165   Add-to-cart 11\n" +
            "  Image C (pillow + neck, close-up)   Clicks 120   Add-to-cart 3",
          spendToDate: "$210.00 of $280",
          budgetRemaining: "$70.00",
          decision: {
            prompt: "Pinterest Image B is clearly outperforming on add-to-cart rate. With 5 days and $70 left, what's the right move?",
            options: [
              {
                id: "shift-to-winner-image",
                label: "Pause Images A and C, put the remaining Pinterest budget behind Image B",
                verdict: "optimal",
                outcome: "Image B converts to add-to-cart at roughly 6.7% versus A's 1.4% and C's 2.5%, a clear lifestyle-context winner (the airport-lounge scene, not the plain product shot). Concentrating the last $70 there maximizes learnings and cart adds before the test ends.",
                why: "The lesson's own workflow is to identify the top performer after one week, then increase budget to that winner, exactly this decision at exactly this point in the test.",
                lessonRef: "On Pinterest, test 3 different lifestyle images with keyword targeting... Identify the top performer after one week, then increase budget to that winner.",
                nextStageId: "end",
              },
              {
                id: "keep-all-three-running",
                label: "Keep all 3 images running evenly through day 14 for a 'clean' final comparison",
                verdict: "costly",
                outcome: "The final report shows the same pattern, Image B wins, but $30-40 that could have compounded the winner's data instead diluted spend across two images already proven weaker.",
                why: "Once a clear winner emerges mid-test, continuing to split budget evenly is testing a question you've already answered.",
                lessonRef: "Identify the top performer after one week, then increase budget to that winner.",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Snapchat Ads Manager", role: "Monitor swipe rate and CPC, swap creative", why: "Free account, dashboard-only monitoring needed for this simulation", required: true, lastVerified: "2026-08" },
          { toolName: "Pinterest Ads Manager", role: "Monitor per-image clicks and add-to-cart, reallocate budget", why: "Free account, no spend required to read the reporting UI", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A day-by-day decision log across the 14-day test explaining what was changed at each checkpoint and why, plus a final budget-allocation recommendation for next quarter.",
      sampleOutput:
        "Peloton, travel-accessory line, 14-day split test log (excerpt)\n\n" +
        "Day 3: Snap Ad swipe rate hit 82% (above 80% ceiling). Swapped to a phone-shot cut with a first-second hook.\n" +
        "Day 9: New Snap creative recovered to 38% swipe rate. Pinterest Image B (lifestyle-context) hit 5.9% add-to-cart vs. 1.1% and 2.8% for the other two; reallocated remaining Pinterest budget to Image B.\n" +
        "Day 14 result: Pinterest CPC $0.61 lower cost-per-add-to-cart than Snapchat's cost-per-swipe-through; recommend 70% of Q2 budget to Pinterest, 30% to Snapchat for retargeting.",
      successCriteria: [
        "Swaps the Snapchat creative at day 3 rather than waiting out a swipe rate above the 80% ceiling",
        "Reallocates Pinterest budget to the clear add-to-cart winner at the day 9 checkpoint",
      ],
      portfolioReady: true,
    },
  ],
  "ai-max-broad-match": [
    {
      id: "ai-max-broad-match-search-terms-waste-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Search Terms Report: Finding Waste Before You Turn On AI Max",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective: "Given a 25-row search terms export from a broad-match campaign, apply the lesson's negative-keyword and conversion-threshold framework to decide which terms to cut, which to promote, and whether the account has enough conversion volume to safely launch AI Max.",
      companyId: "robinhood",
      scenario: "You're a PPC analyst for Robinhood's brokerage app marketing team, reviewing a 30-day search terms export from a broad-match Search campaign before deciding whether to migrate it to AI Max.",
      brief: "Sort the export by conversions, flag low-intent terms as negatives, flag high-converting patterns for a future Standard Search brand campaign, and check the account against the 30-conversion monthly threshold.",
      mode: "diagnostic",
      conceptsCovered: [
        "The 30-conversion monthly threshold as a gate before enabling AI Max",
        "Sorting a search terms report into negatives vs. Standard Search candidates",
      ],
      steps: [
        {
          stepId: "step-1-conversion-threshold",
          concept: "The 30-conversion monthly threshold as a gate before enabling AI Max",
          lessonAnchor: "the-minimum-conversion-threshold",
          theoryRecap: "The lesson sets a hard floor: don't launch AI Max without at least 30 conversions/month baseline, because below that the algorithm is under-trained and defaults to bidding high and broad, wasting budget.",
          question: "The 30-day export totals 22 conversions across the account. Does this account clear the threshold to launch AI Max this month?",
          toolName: "Google Sheets",
          where: "Sum the conversions column of the exported search terms report.",
          procedure: [
            "Import the 30-day search terms export into Sheets",
            "Sum the conversions column across all 25 rows",
            "Compare the total (22) against the lesson's 30-conversion floor",
            "Write the go/no-go recommendation with the gap to close",
          ],
          outputSample: "Total 30-day conversions: 22\nThreshold: 30\nGap: 8 conversions short\nRecommendation: hold on AI Max, run Standard Search for another 2-3 weeks to close the gap",
          healthy: "The account waits until it clears 30 conversions/month before migrating, even though it's tempting to switch now.",
          unhealthy: "Launching AI Max at 22 conversions/month because 'it's close enough.'",
          interpret: "The threshold is not a soft guideline; 8 conversions short means the algorithm is still under-trained and will default to broad, expensive bidding.",
          soWhat: [{ symptom: "An account is 5-10 conversions short of 30/month", action: "Hold on AI Max, extend Standard Search 2-3 more weeks, recheck the total", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-search-term-sort",
          concept: "Sorting a search terms report into negatives vs. Standard Search candidates",
          lessonAnchor: "search-term-reporting-monitoring-adding-negatives",
          theoryRecap: "The lesson's workflow: export search terms, sort by conversions, add low-relevance bottom performers as negatives, and identify high-converting patterns as candidates for their own Standard Search brand campaign.",
          question: "Two rows stand out: 'robinhood app free download' (340 clicks, 0 conversions) and 'robinhood options trading fees explained' (85 clicks, 9 conversions). What does each become?",
          toolName: "Google Ads",
          where: "Google Ads, Search Terms report, exact-match negative list.",
          procedure: [
            "Sort the 25-row export by conversions ascending to surface zero-conversion, high-click terms first",
            "Add 'robinhood app free download' as an exact-match negative: high clicks, zero conversions, low-intent 'free' modifier",
            "Flag 'robinhood options trading fees explained' as a Standard Search candidate: high conversion rate on a specific, high-intent query",
            "Repeat the sort weekly per the lesson's monitoring cadence",
          ],
          outputSample: "NEGATIVE (exact match): robinhood app free download -- 340 clicks, 0 conv\nSTANDARD SEARCH CANDIDATE: robinhood options trading fees explained -- 85 clicks, 9 conv (10.6% CVR)",
          healthy: "The zero-conversion, high-click term gets excluded before more budget flows to it; the high-converting specific query gets promoted to its own tightly controlled campaign.",
          unhealthy: "Leaving 'free download' unaddressed because it's still technically driving clicks and impressions.",
          interpret: "A search terms report isn't just a negatives source, it's also a discovery tool for queries specific enough to deserve dedicated, tightly-controlled campaigns.",
          soWhat: [{ symptom: "A high-click term has zero conversions after 2+ weeks", action: "Add it as an exact-match negative this week, don't wait for a full month of data", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Sum conversions, sort the export", why: "Free, works on any exported CSV", required: true, lastVerified: "2026-08" },
          { toolName: "Google Ads", role: "Read the native Search Terms report, add negatives", why: "Free with any active Google Ads account", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A go/no-go recommendation on launching AI Max plus a sorted negatives list and a Standard Search candidate list from the search terms export.",
      sampleOutput:
        "Peloton, connected fitness app, search terms audit (excerpt)\n\n" +
        "CONVERSION THRESHOLD: 34 conversions in the last 30 days -- clears the 30-conversion floor, AI Max migration approved\n\n" +
        "NEGATIVES ADDED (exact match)\n" +
        "  peloton bike free trial cancel      210 clicks   0 conv\n" +
        "  peloton jobs remote                  95 clicks   0 conv\n\n" +
        "STANDARD SEARCH CANDIDATES\n" +
        "  peloton bike vs tread monthly cost   60 clicks   7 conv  (11.7% CVR)",
      successCriteria: [
        "Correctly totals conversions and recommends holding at 22/month against the 30 threshold",
        "Correctly separates the zero-conversion high-click term as a negative from the high-converting specific term as a Standard Search candidate",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-max-broad-match-migration-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The AI Max Migration: 30 Days From Standard Search to Full Orchestration",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective: "Practice the lesson's staged migration workflow, from hitting the conversion baseline through launching AI Max with multiple asset groups to protecting brand with Standard Search, reacting to a live-feeling dashboard at each checkpoint.",
      companyId: "rent-the-runway",
      scenario: "You manage paid search for Rent the Runway's new 'Try Before You Buy' subscription tier. Standard Search has been running for 6 weeks and just crossed the conversion baseline.",
      brief: "Decide when to migrate, how many asset groups to launch with, and how to react to a mid-flight overspend signal, following the lesson's staged workflow.",
      mode: "simulation",
      conceptsCovered: [
        "Migrating to AI Max only after clearing the conversion baseline, with a controlled budget increase",
        "Asset group segmentation preventing budget cannibalization between customer segments",
      ],
      stages: [
        {
          stageId: "week6-migration-decision",
          label: "Week 6, migration checkpoint",
          elapsed: "Week 6 of Standard Search",
          concept: "Migrating to AI Max only after clearing the conversion baseline, with a controlled budget increase",
          lessonAnchor: "the-new-workflow-for-2026",
          situation: "Standard Search has run for 6 weeks on core non-brand keywords. This morning's dashboard shows the trailing-30-day conversion count just crossed 30 for the first time.",
          dashboard:
            "Standard Search, 'Try Before You Buy', trailing 30 days\n" +
            "  Conversions              32\n" +
            "  Spend                $4,100\n" +
            "  CPA                  $128.10\n" +
            "  Current daily budget     $140",
          spendToDate: "$4,100 over 6 weeks",
          budgetRemaining: "N/A, monthly budget cycle",
          decision: {
            prompt: "Conversions just crossed 30 for the first time this month. What's the right migration move?",
            options: [
              {
                id: "migrate-with-20pct-increase",
                label: "Migrate to AI Max now, with a budget set 20% higher than current spend",
                verdict: "optimal",
                outcome: "The lesson's workflow calls for exactly this: once you hit 30+ conversions, launch AI Max with a monthly budget 20% higher than current spend, then monitor daily for the first two weeks.",
                why: "32 conversions clears the floor, and the 20% increase (not a 2x or 3x jump) gives the algorithm room to find incremental volume without a budget shock.",
                lessonRef: "Launch AI Max: Set a monthly budget 20% higher than you currently spend. Let it run for 14 days.",
                nextStageId: "week8-overspend-check",
              },
              {
                id: "wait-another-month",
                label: "Wait one more month to confirm 30+ conversions is a stable pattern, not a one-time spike",
                verdict: "acceptable",
                outcome: "This is defensible caution, but it costs a full month of AI Max's likely incremental performance for confirmation the lesson's threshold doesn't actually require, 30 is the floor to act on, not a number to double-check first.",
                why: "The lesson treats 30 conversions/month as the action threshold itself, not a signal to wait for a second confirming month.",
                lessonRef: "Once you hit 30+ conversions, increase spend.",
                nextStageId: "end",
              },
              {
                id: "migrate-with-3x-budget",
                label: "Migrate to AI Max and triple the budget immediately to accelerate learning",
                verdict: "costly",
                outcome: "A 3x budget jump on a freshly-migrated, still-calibrating algorithm burns through spend on low-confidence placements exactly like Mistake 1 in the lesson: launching without a controlled, gradual increase.",
                why: "The lesson is specific that the increase should be 20%, gradual, with daily monitoring for overspend, not an aggressive multiple.",
                lessonRef: "Mistake 1: Launching AI Max without conversion data... Let it optimize gradually.",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "week8-overspend-check",
          label: "Week 8, day 10 of AI Max",
          elapsed: "10 days into AI Max",
          concept: "Asset group segmentation preventing budget cannibalization between customer segments",
          lessonAnchor: "the-correct-ai-max-campaign-structure",
          situation: "AI Max launched 10 days ago with a single asset group covering all messaging: budget-conscious renters and premium subscribers mixed into one set of headlines and images.",
          dashboard:
            "AI Max, 'Try Before You Buy', single asset group, day 10\n" +
            "  Spend               $2,850 of $4,920 monthly budget\n" +
            "  Conversions              14\n" +
            "  CPA                  $203.57  (up from $128.10 pre-migration)\n" +
            "  Budget-tier ad share      68%\n" +
            "  Premium-tier ad share     32% (underserved despite similar audience size)",
          spendToDate: "$2,850 of $4,920",
          budgetRemaining: "$2,070",
          decision: {
            prompt: "CPA rose 59% and the single asset group is favoring budget-tier messaging over premium, even though both segments are similar in size. What's the fix?",
            options: [
              {
                id: "split-into-segments",
                label: "Split into 2-3 asset groups by customer segment (budget, premium, first-time-renter) and let each compete for its own budget",
                verdict: "optimal",
                outcome: "Within the next reporting cycle, CPA begins correcting as the algorithm can now allocate budget within each segment instead of collapsing everyone into whichever messaging tested marginally better first.",
                why: "The lesson is direct: one asset group forces Google to pick between customer types and defaults to high CPCs; 2-3 segment-specific groups let the algorithm allocate intelligently.",
                lessonRef: "Mistake 2: Only one asset group... Create 2-3 asset groups per campaign, each targeting a distinct customer segment.",
                nextStageId: "end",
              },
              {
                id: "pause-and-revert",
                label: "Pause AI Max entirely and revert to Standard Search",
                verdict: "costly",
                outcome: "Reverting abandons 10 days of algorithm learning and the underlying diagnosis, a structural asset-group problem, never gets fixed, so a second attempt later would hit the same issue.",
                why: "The dashboard shows a fixable structural mistake (one asset group), not evidence that AI Max itself is wrong for this account.",
                lessonRef: "Mistake 2: Only one asset group.",
                nextStageId: "end",
              },
              {
                id: "just-cut-budget",
                label: "Cut the daily budget in half to control the CPA rise",
                verdict: "acceptable",
                outcome: "CPA growth slows because less is spent overall, but the root cause, budget/premium cannibalization inside one asset group, is untouched, so the same distortion reappears at any budget level.",
                why: "Cutting budget treats the symptom (spend) without addressing the cause (a single asset group forcing the algorithm to pick a winner between two real segments).",
                lessonRef: "If you only have one asset group, you're forcing Google to pick between cannibalizing the budget-buyer and the premium-buyer.",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Ads", role: "Monitor conversions, CPA, and asset-group performance share", why: "Free with any active account, dashboard read is sufficient for this simulation", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log the week-over-week CPA and conversion trend", why: "Free tracking companion to the Ads dashboard", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Triple Whale", role: "Cross-channel attribution once AI Max is stable and spend scales past a single-platform view", why: "Useful once orchestrating AI Max + Standard Search + PMax together, not needed for this single-campaign migration", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A migration decision log covering the week-6 launch call and the week-8 asset-group fix, with the CPA trend and reasoning at each checkpoint.",
      sampleOutput:
        "Allbirds, 'Wool Runners Restock' campaign, AI Max migration log (excerpt)\n\n" +
        "Week 5: Conversions crossed 31/month. Migrated to AI Max with a 20% budget increase ($3,200 -> $3,840/month).\n" +
        "Week 7, day 9: CPA up 44% vs. pre-migration, single asset group favoring one shoe colorway. Split into 3 asset groups (everyday, trail, limited colorway).\n" +
        "Week 9: CPA recovered to 12% above pre-migration baseline, conversions up 38% -- net positive once segmented.",
      successCriteria: [
        "Migrates at the week-6 checkpoint with a 20% budget increase, not a wait-and-confirm delay or an aggressive multiple",
        "Diagnoses the week-8 CPA rise as a single-asset-group cannibalization problem and fixes it by segmenting, not by pausing or cutting budget",
      ],
      portfolioReady: true,
    },
  ],

  "ad-frequency-creative-fatigue": [
    {
      id: "ad-frequency-creative-fatigue-export-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Refresh Call: Auditing a Frequency and CTR Export",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a 21-day Meta ad set export with daily frequency, CTR, and CPA, identify the day fatigue actually set in and decide whether the fix is a refresh, a frequency cap, or a broader audience.",
      companyId: "warby-parker",
      scenario: "You're the paid social analyst at Warby Parker, running a Meta campaign for a new frame collection launch. Week one crushed it. By week three, the media buyer wants to know why CPA has climbed and whether to kill the campaign or fix it.",
      brief: "Read frequency and CTR together, not separately, find the exact day the curve broke, and recommend the specific fix the data supports.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reading frequency and CTR trend together to catch fatigue before CPA rises",
        "Matching the refresh trigger to a frequency threshold, not a fixed calendar date",
      ],
      steps: [
        {
          stepId: "step-1-read-the-curve",
          concept: "Reading frequency and CTR trend together to catch fatigue before CPA rises",
          lessonAnchor: "what-creative-fatigue-actually-looks-like",
          theoryRecap: "The lesson's fatigue curve shows peak CTR days 1-3, a 15-20% CTR drift days 4-7, and a 30-50% CTR drop by days 8-10 on Meta, with frequency crossing 3.0 as the signal that First-Time Impression Ratio has fallen below 20%.",
          question: "The export shows frequency crossing 3.0 on day 9, and CTR has already dropped 24% from its day-2 peak by day 9. Is this campaign still in the 'watch it' zone or the 'act now' zone?",
          toolName: "Google Sheets",
          where: "Import frequency-ctr-export.csv, freeze the header row, add a column charting CTR against frequency by day.",
          procedure: [
            "Import the 21-day export and freeze row 1",
            "Plot frequency and CTR on the same day axis to see where the lines cross",
            "Mark the day frequency first exceeds 3.0",
            "Compare CTR on that day against the day-2 peak to size the drop",
          ],
          outputSample: "Day 2 (peak): freq 1.4, CTR 2.1%, CPA $18\nDay 9: freq 3.1, CTR 1.6% (-24% vs peak), CPA $27\nDay 14: freq 4.3, CTR 1.1% (-48% vs peak), CPA $39",
          healthy: "Frequency stays under 3.0 through day 10 while CTR holds within 10-15% of its peak.",
          unhealthy: "Frequency crosses 3.0 by day 9 with CTR already down 24% and CPA up 50%, the fatigue curve has already broken.",
          interpret: "Frequency crossing 3.0 is the trigger, not CPA. By the time CPA visibly moves, the campaign has already been re-showing the same faces for days.",
          soWhat: [
            { symptom: "Frequency crosses 3.0 while CTR is still within 15% of peak", action: "Schedule a refresh within the week, not urgent yet", effort: "5 min" },
            { symptom: "Frequency crosses 3.0 and CTR has already dropped over 20%", action: "Refresh creative or cap frequency immediately, the window already closed", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pick-the-fix",
          concept: "Matching the refresh trigger to a frequency threshold, not a fixed calendar date",
          lessonAnchor: "a-practical-creative-refresh-cadence-framework",
          theoryRecap: "2026 benchmarks put Meta's refresh window at 7-10 days once frequency exceeds 2.5, with a rotation pool of 6-8 active creatives keeping delivery from concentrating on one asset.",
          question: "The export shows only 2 creatives running in this ad set the whole 21 days. Given the fatigue already measured in step 1, what's the actual fix, a hard frequency cap, a new audience, or more creative variants?",
          toolName: "Meta Ads Manager",
          where: "Ads Manager > Ad Set > Frequency & Reach column, cross-referenced with the Ads tab creative count.",
          procedure: [
            "Check how many distinct creatives are live in the ad set",
            "Compare that count against the 6-8 creative benchmark",
            "If creative count is below benchmark, recommend adding variants before touching audience size",
            "If creative count already meets benchmark, recommend an audience expansion or hard frequency cap instead",
          ],
          outputSample: "Ad set 'Frame Launch - Lookalike 1%': 2 active creatives, 21 days live, frequency 4.3 on day 14.\nBenchmark: 6-8 active creatives.\nGap: 4-6 creatives short of pool minimum.",
          healthy: "An ad set fatiguing fast still has 6+ creatives in rotation, so the fix is audience expansion or a hard cap.",
          unhealthy: "An ad set fatiguing fast has only 2 creatives, the fatigue is a starved rotation pool, not a targeting problem.",
          interpret: "Do not reach for a bigger audience as the first fix if the creative pool itself is underfed, adding reach just exposes more people to the same two tired assets faster.",
          soWhat: [
            { symptom: "Fewer than 6 active creatives in a fatiguing ad set", action: "Add 4-6 new creative variants before touching audience or budget", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Chart frequency against CTR to find the break point", why: "Free, no account friction, sufficient for a single ad set export", required: true, lastVerified: "2026-08" },
          { toolName: "Meta Ads Manager", role: "Check live creative count and frequency stats directly", why: "Source of truth for what's actually running, free with any ad account", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page diagnosis naming the day fatigue set in, the frequency threshold that triggered it, and whether the fix is more creative, a frequency cap, or a wider audience.",
      sampleOutput:
        "Casper Sleep, Frame Launch Ad Set Diagnosis (excerpt)\n\n" +
        "FATIGUE ONSET: Day 9 (frequency 3.1, CTR down 24% vs. peak)\n" +
        "ROOT CAUSE: Only 2 active creatives against a 6-8 benchmark\n" +
        "RECOMMENDED FIX: Add 4 new creative variants this week, do not expand audience yet\n" +
        "EXPECTED IMPACT: CTR recovery toward peak within 5-7 days of new creative going live",
      successCriteria: [
        "Correctly identifies the day frequency crosses 3.0 and the associated CTR drop",
        "Diagnoses whether the fatigue is a creative-pool problem or an audience problem before recommending a fix",
      ],
      portfolioReady: true,
    },
    {
      id: "ad-frequency-creative-fatigue-dashboard-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Three Ad Sets, One Fatigue Dashboard: Spot the Real Defect",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Given three supplied Meta ad set dashboard snapshots (frequency, First-Time Impression Ratio, CTR trend, days live, active creative count), correctly identify which ad sets show genuine fatigue defects versus which show a metric that looks alarming but is not actually a problem.",
      companyId: "allbirds",
      scenario: "You're auditing the Meta account for Allbirds ahead of a budget review. Three ad sets are flagged for review. The media buyer wants to know which ones are actually fatigued and which are just noisy metrics.",
      brief: "Read each dashboard snapshot fully, tell real fatigue apart from a metric that looks bad but isn't, and cite the specific number that proves your call.",
      mode: "teardown",
      conceptsCovered: [
        "Frequency crossing 3.0 with First-Time Impression Ratio collapsing below 20% together, not either alone",
        "A starved creative rotation pool masquerading as a targeting problem",
        "New-audience frequency looking artificially low right after an expansion, masking early fatigue in the original segment",
      ],
      teardownItems: [
        {
          itemId: "item-1-classic-fatigue",
          specimen: "Ad Set A, 'Wool Runners - Broad US', Day 16 of 16\nFrequency (7-day rolling): 3.8\nFirst-Time Impression Ratio: 14%\nCTR trend: Day 3 peak 1.9% -> Day 16 current 0.9% (-53%)\nCPA trend: Day 3 $22 -> Day 16 $41\nActive creatives: 3\nAudience size: 1.2M",
          specimenSource: "synthetic-realistic",
          prompt: "Is this ad set genuinely fatigued? What's the evidence and what's the fix?",
          answerKey: [
            {
              defect: "Frequency at 3.8 with First-Time Impression Ratio collapsed to 14% means the ad set is almost entirely re-showing the same 1.2M-person audience, not finding new people",
              severity: "critical",
              whyItMatters: "CTR has already dropped 53% and CPA nearly doubled, this is the textbook Meta fatigue curve past day 10, not a transient dip",
              lessonRef: "What Creative Fatigue Actually Looks Like",
              owner: "you",
            },
            {
              defect: "Only 3 active creatives against the 6-8 rotation-pool benchmark starved the ad set of fresh material to absorb repeat impressions",
              severity: "moderate",
              whyItMatters: "Even a well-targeted 1.2M audience fatigues fast when only 3 assets are absorbing all the delivery",
              lessonRef: "A Practical Creative-Refresh Cadence Framework",
              owner: "you",
            },
          ],
          distractors: [
            "The audience size of 1.2M is too small for this budget level",
            "CPA rising from $22 to $41 means the bidding strategy needs to change from lowest-cost to a bid cap",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-false-alarm",
          specimen: "Ad Set B, 'Tree Dashers - Lookalike 3%', Day 5 of 5\nFrequency (7-day rolling): 1.6\nFirst-Time Impression Ratio: 71%\nCTR trend: Day 1 1.5% -> Day 5 1.4% (-7%)\nCPA trend: Day 1 $19 -> Day 5 $20\nActive creatives: 2\nAudience size: 4.8M",
          specimenSource: "synthetic-realistic",
          prompt: "The media buyer flagged this ad set because it only has 2 active creatives, below the 6-8 benchmark. Does that mean it's fatigued?",
          answerKey: [
            {
              defect: "No real defect: frequency is 1.6, well under the 3.0 threshold, First-Time Impression Ratio is a healthy 71%, and CTR has drifted only 7% over 5 days",
              severity: "cosmetic",
              whyItMatters: "A low creative count only matters once frequency starts climbing and the pool can't absorb repeat exposure, at day 5 with a 4.8M audience this ad set isn't there yet",
              lessonRef: "What Creative Fatigue Actually Looks Like",
              owner: "you",
            },
          ],
          distractors: [
            "2 active creatives is below the 6-8 benchmark, so this ad set needs more creative variants added immediately",
            "A 4.8M audience is too broad to be efficient at this budget",
            "CPA rising from $19 to $20 is an early fatigue signal worth acting on now",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-masked-fatigue",
          specimen: "Ad Set C, 'Wool Runners - Expanded Lookalike 5% (audience widened Day 11)', Day 18 of 18\nFrequency (7-day rolling): 1.9\nFirst-Time Impression Ratio: 58%\nCTR trend: Day 3 peak 2.0% -> Day 10 (pre-expansion) 1.1% (-45%) -> Day 18 (post-expansion) 1.3%\nCPA trend: Day 3 $20 -> Day 10 $34 -> Day 18 $29\nActive creatives: 4",
          specimenSource: "synthetic-realistic",
          prompt: "Frequency looks fine today at 1.9. Does that mean this ad set is healthy?",
          answerKey: [
            {
              defect: "The current 1.9 frequency is diluted by a Day 11 audience expansion, it masks that CTR had already dropped 45% and CPA had climbed 70% in the original segment before the expansion happened",
              severity: "critical",
              whyItMatters: "Reading only the current-day frequency hides that the underlying creative was fatigued and never actually refreshed, the audience expansion is treating a symptom, not the cause",
              lessonRef: "What Creative Fatigue Actually Looks Like",
              owner: "you",
            },
            {
              defect: "Active creative count of 4 is still below the 6-8 benchmark, so the expansion bought time but the root creative shortage was never fixed",
              severity: "moderate",
              whyItMatters: "Without adding new creative, this ad set will re-fatigue in the expanded audience on the same curve, just delayed",
              lessonRef: "A Practical Creative-Refresh Cadence Framework",
              owner: "you",
            },
          ],
          distractors: [
            "First-Time Impression Ratio at 58% proves this ad set is currently healthy and needs no action",
            "The audience expansion on Day 11 was the wrong fix and should be reversed immediately",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Meta Ads Manager", role: "Source the frequency, First-Time Impression Ratio, and creative count fields directly", why: "Free with any ad account, the source of truth for all three snapshots", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Line up the three ad sets' metrics side by side for comparison", why: "Free, sufficient for a 3-row comparison table", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Triple Whale", role: "Automated creative-level fatigue alerts across many ad sets at once", why: "Useful once an account runs more than a handful of ad sets and manual dashboard checks don't scale", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A verdict on all three ad sets (fatigued / healthy / masked) with the specific metric cited as evidence for each call, plus the recommended fix for the two that need one.",
      sampleOutput:
        "HelloFresh, Ad Set Fatigue Review (excerpt)\n\n" +
        "Ad Set A: FATIGUED. Frequency 3.8, FTIR 14%, CTR -53%. Fix: pause and refresh creative, add 3+ variants before relaunching.\n" +
        "Ad Set B: HEALTHY. Frequency 1.6, FTIR 71%. No action needed, low creative count is not yet a problem at this frequency.\n" +
        "Ad Set C: MASKED FATIGUE. Current frequency 1.9 hides a pre-expansion CTR drop of 45%. Fix: add creative variants now, the expansion only bought time.",
      successCriteria: [
        "Correctly separates the one genuinely healthy ad set from the two with real defects",
        "Cites frequency AND First-Time Impression Ratio together, not frequency alone, as evidence",
        "Catches that Ad Set C's current-day frequency is misleading due to the mid-flight audience expansion",
      ],
      portfolioReady: true,
    },
  ],
  "landing-page-message-match": [
    {
      id: "landing-page-message-match-ad-page-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Ad Says One Thing, Page Says Another: Spot the Mismatch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given three supplied ad-plus-landing-page pairs, identify exactly where message match breaks (headline, offer, or audience language) and distinguish a real defect from a cosmetic difference that doesn't hurt relevance.",
      companyId: "hellofresh",
      scenario: "You're reviewing paid search creative for HelloFresh ahead of a Quality Score audit. Three ad-to-landing-page pairs are queued for review before the account team scales spend.",
      brief: "Read each ad and its landing page as a visitor would in the first two seconds, and name the specific words that do or don't carry through.",
      mode: "teardown",
      conceptsCovered: [
        "Headline message match between ad and landing page",
        "Offer-level message match, not just headline wording",
        "A generic homepage substituting for a dedicated landing page",
      ],
      teardownItems: [
        {
          itemId: "item-1-offer-mismatch",
          specimen: "AD:\nHeadline: 'HelloFresh: 16 Free Meals + Free Shipping'\nDescription: 'New customers only. Offer applies to your first 4 boxes.'\n\nLANDING PAGE (clicked through):\nH1: 'Get Started With HelloFresh'\nSubhead: 'Delicious meals delivered weekly.'\nCTA button: 'Sign Up'\nNo mention of '16 free meals,' 'free shipping,' or the 4-box window anywhere above the fold.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this landing page match its ad? What specifically is missing?",
          answerKey: [
            {
              defect: "The ad's specific, quantified offer, 16 free meals, free shipping, first 4 boxes, is completely absent from the landing page headline and subhead",
              severity: "critical",
              whyItMatters: "A visitor who clicked for a specific discount sees a generic sign-up page with no confirmation the deal exists, this is the exact 'wait, is this the right page?' hesitation that costs conversions",
              lessonRef: "What Message Match Actually Means",
              owner: "you",
            },
          ],
          distractors: [
            "The CTA button text 'Sign Up' is too short and should be longer",
            "The page doesn't mention a specific number of servings per meal",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-good-match",
          specimen: "AD:\nHeadline: 'HelloFresh: 16 Free Meals + Free Shipping'\nDescription: 'New customers only. Offer applies to your first 4 boxes.'\n\nLANDING PAGE (clicked through):\nH1: '16 Free Meals + Free Shipping On Your First 4 Boxes'\nSubhead: 'New HelloFresh customers only, no code needed.'\nCTA button: 'Claim My 16 Free Meals'",
          specimenSource: "synthetic-realistic",
          prompt: "Compare this pair to item 1. What changed, and is anything still missing?",
          answerKey: [
            {
              defect: "No real defect: the headline, offer terms (16 meals, free shipping, 4-box window, new-customer restriction), and CTA all mirror the ad's exact language",
              severity: "cosmetic",
              whyItMatters: "This is the target state, the visitor sees the identical promise they clicked for, with zero gap to interpret or doubt",
              lessonRef: "What Message Match Actually Means",
              owner: "you",
            },
          ],
          distractors: [
            "The CTA should say 'Sign Up' instead of 'Claim My 16 Free Meals' to sound less salesy",
            "The subhead is too long and should be shortened to improve load time",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-homepage-redirect",
          specimen: "AD (Search, keyword 'vegetarian meal kit delivery'):\nHeadline: 'Vegetarian Meal Kits, Delivered Weekly'\nDescription: '25+ vegetarian recipes. Skip or cancel anytime.'\n\nLANDING PAGE (clicked through, is the site's main homepage):\nH1: 'HelloFresh: America's #1 Meal Kit'\nNav bar: Meals, Family, Veggie, Pescatarian, Gift Cards, About\nHero image rotates between a beef dish, a pasta dish, and a salmon dish\nNo mention of 'vegetarian' anywhere above the fold",
          specimenSource: "synthetic-realistic",
          prompt: "This ad targets a vegetarian-specific search. What's wrong with sending that click here?",
          answerKey: [
            {
              defect: "The click lands on the general homepage instead of a dedicated vegetarian-specific page, and the rotating hero image actively contradicts the search intent by showing a beef dish first",
              severity: "critical",
              whyItMatters: "A visitor who searched specifically for 'vegetarian' meal kits sees meat in the hero image within the first two seconds, the architectural failure (homepage, not a themed page) is worse than any headline wording issue",
              lessonRef: "Structuring Landing Pages Around Ad Groups, Not a Homepage",
              owner: "you",
            },
            {
              defect: "The six-item navigation bar gives an already-uncertain visitor five ways to wander off before converting",
              severity: "moderate",
              whyItMatters: "A dedicated landing page should strip navigation to keep the one job, converting the click already paid for, intact",
              lessonRef: "Structuring Landing Pages Around Ad Groups, Not a Homepage",
              owner: "you",
            },
          ],
          distractors: [
            "The headline 'America's #1 Meal Kit' is an unsubstantiated claim and should be removed for legal reasons",
            "The page loads too many product categories, which will slow down page speed",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each ad/page pair's headline, offer, and CTA side by side for comparison", why: "Free, sufficient for a small teardown set", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A verdict (match / mismatch / architectural failure) for all three pairs, citing the exact words or elements that broke or held the match.",
      sampleOutput:
        "Nykaa, Ad-to-Page Message Match Review (excerpt)\n\n" +
        "Pair 1: MISMATCH. Ad promises '30% off first order,' page headline says 'Shop Beauty Online' with no offer mentioned. Fix: put the exact discount in the H1.\n" +
        "Pair 2: MATCH. Offer, headline, and CTA language are identical between ad and page.\n" +
        "Pair 3: ARCHITECTURAL FAILURE. Search ad for 'lipstick' sends traffic to the full-catalog homepage, not a lipstick category page.",
      successCriteria: [
        "Correctly identifies the one pair with no real defect",
        "Distinguishes a headline-wording mismatch from an architectural homepage-redirect failure",
      ],
      portfolioReady: true,
    },
    {
      id: "landing-page-message-match-rewrite-build",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild the Page: Rewrite a Mismatched Landing Page to Match Its Ad",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Given a real ad's exact headline, description, and offer, rewrite a generic landing page's headline, subhead, and CTA so every visitor sees language that mirrors the ad they clicked, without changing the underlying product.",
      companyId: "casper-sleep",
      scenario: "You're the growth marketer at Casper Sleep. A Google Search campaign for 'mattress for back pain' is driving clicks to the general homepage, and the account's Quality Score is stuck at Below Average on Landing Page Experience.",
      brief: "Take the ad's exact promise and rebuild the page copy so a visitor feels zero doubt they landed in the right place, then justify each change against the ad's language.",
      mode: "build",
      conceptsCovered: [
        "Rewriting a landing page headline to mirror the ad's exact promise",
        "Matching the offer field-for-field between ad and CTA",
      ],
      steps: [
        {
          stepId: "step-1-extract-the-promise",
          concept: "Rewriting a landing page headline to mirror the ad's exact promise",
          lessonAnchor: "what-message-match-actually-means",
          theoryRecap: "Message match is a literal test, not a vibe: the visitor's landing page headline should say the same thing as the ad headline they clicked, because a mismatch fires a 'wait, is this the right page?' hesitation in the first two seconds.",
          question: "The ad headline is 'Mattress for Back Pain, 100-Night Trial' and the current page H1 is 'Casper: Sleep Better Tonight.' What exact words from the ad need to appear in the new H1?",
          toolName: "Google Sheets",
          where: "A simple two-column sheet: ad copy in column A, current page copy in column B, to spot every gap at once.",
          procedure: [
            "List the ad's headline, description, and offer terms word for word in column A",
            "List the current page's H1, subhead, and CTA in column B",
            "Circle every ad term missing from the page copy",
            "Draft a new H1 that contains the ad's specific claim, 'back pain' and '100-night trial', not a paraphrase",
          ],
          outputSample: "Ad terms: 'Mattress for Back Pain', '100-Night Trial'\nCurrent page: 'Sleep Better Tonight' (0 of 2 terms present)\nDraft new H1: 'The Mattress Built for Back Pain Relief, Try It 100 Nights Free'",
          healthy: "The new H1 contains both specific terms from the ad, not a generic rewording.",
          unhealthy: "The new H1 says something adjacent like 'Better Sleep, Better Life' that still doesn't confirm the back-pain promise.",
          interpret: "A near-match still fails the two-second test. The visitor needs to see their exact search intent confirmed, not a related idea.",
          soWhat: [{ symptom: "New headline draft doesn't contain the ad's specific claim word for word", action: "Rewrite until the exact term appears, don't settle for a close paraphrase", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-align-the-offer-and-cta",
          concept: "Matching the offer field-for-field between ad and CTA",
          lessonAnchor: "structuring-landing-pages-around-ad-groups-not-a-homepage",
          theoryRecap: "The fix is architectural: build the page around the ad group's specific theme and offer, strip distracting navigation, and make the CTA button restate the offer rather than a generic 'Get Started.'",
          question: "The ad's offer is a '100-Night Trial,' but the current CTA button just says 'Shop Now.' What should the new CTA say, and what else on the page needs to change to support a back-pain-specific visitor?",
          toolName: "Unbounce",
          where: "Build a dedicated page variant off the existing template, swapping only the H1, subhead, CTA text, and top testimonial.",
          procedure: [
            "Change the CTA button text from 'Shop Now' to restate the offer, e.g. 'Start My 100-Night Trial'",
            "Add a subhead naming the specific pain point (back pain, spinal alignment) instead of generic sleep language",
            "Swap the top testimonial for one that mentions back pain specifically, if available",
            "Strip the full six-item site navigation down to just the CTA, so there's one path forward",
          ],
          outputSample: "Old CTA: 'Shop Now'\nNew CTA: 'Start My 100-Night Trial'\nNew subhead: 'Engineered for spinal alignment. Real back-pain relief, or your 100 nights are free.'\nNav: reduced from 6 links to 0 (CTA only)",
          healthy: "The CTA restates the specific offer and the page has one clear path to convert, no competing nav links.",
          unhealthy: "The CTA still says something generic like 'Learn More' while the rest of the page is rewritten, undermining the match at the exact moment of decision.",
          interpret: "The CTA is the last thing a visitor reads before converting or leaving, a mismatched CTA can undo an otherwise perfect headline rewrite.",
          soWhat: [{ symptom: "Headline matches but CTA button still says generic text", action: "Rewrite the CTA to restate the specific offer before shipping the page", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Map ad copy against current page copy to find every gap before drafting", why: "Free, fast enough for a single-page rewrite", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Unbounce", role: "Build and publish the dedicated landing page variant without engineering time", why: "Purpose-built for spinning up ad-group-specific pages from a template, faster than a CMS ticket", required: false, fallback: "A developer can hand-edit the existing page template's headline, subhead, CTA, and nav if no landing-page builder is available", lastVerified: "2026-08" },
        ],
      },
      deliverable: "A before/after rewrite of the landing page's H1, subhead, and CTA, with each change justified against the specific ad language it now mirrors.",
      sampleOutput:
        "Allbirds, 'Machine Washable Wool Shoes' Ad Group Rewrite (excerpt)\n\n" +
        "AD: 'Machine Washable Wool Sneakers, Free Shipping'\n" +
        "OLD H1: 'Allbirds: Shoes For Better Days'\n" +
        "NEW H1: 'Machine Washable Wool Sneakers, Free Shipping Both Ways'\n" +
        "OLD CTA: 'Shop Now' -> NEW CTA: 'Get My Machine Washable Pair'\n" +
        "NAV: reduced from 5 links to 0 (CTA only)",
      successCriteria: [
        "New H1 contains the ad's specific, quantified claim word for word",
        "New CTA restates the offer rather than using a generic verb",
        "Justifies each change by pointing to the exact ad phrase it now mirrors",
      ],
      portfolioReady: true,
      stretch: "Run the old and new page as an A/B test and report the conversion-rate delta after 2 weeks of traffic.",
    },
  ],

  "budget-pacing-optimization": [
    {
      id: "budget-pacing-optimization-spend-export-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Overspend Audit: Diagnosing a Restricted-Schedule Pacing Export",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a 14-day daily-spend export for a business-hours-only Google Search campaign, diagnose whether the account has drifted into the June 2026 30.4x monthly-cap pacing pattern, identify the exact day the trend broke from flat to accelerating, and recommend an alert-threshold fix instead of a panic budget cut.",
      companyId: "warby-parker",
      scenario:
        "You're the paid media analyst at Warby Parker, reviewing a Google Search campaign restricted to weekday business hours (9am-6pm) after the June 2026 pacing change rolled out across the account.",
      brief:
        "Read a daily-spend table, calculate the 7-day rolling average and projected monthly spend, and flag the day pacing broke from flat to accelerating relative to the 75%/90% alert thresholds.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing the June 2026 30.4x monthly-cap overspend pattern on a restricted ad schedule",
        "Setting and reading 75%/90% pacing alert thresholds against actual cumulative spend",
      ],
      steps: [
        {
          stepId: "step-1-detect-cap-drift",
          concept: "Diagnosing the June 2026 30.4x monthly-cap overspend pattern on a restricted ad schedule",
          lessonAnchor: "why-pacing-matters-and-why-accelerated-delivery-is-mostly-gone",
          theoryRecap:
            "Since June 1, 2026, Google paces scheduled campaigns toward a full monthly cap of 30.4x the daily budget, even when the ad schedule only allows a fraction of the week, so restricted-schedule accounts can see 2-3x higher effective daily spend on active days than planned.",
          question:
            "With a $150 daily budget (monthly cap: $150 x 30.4 = $4,560), this 14-day export shows spend holding flat for the first 8 business days, then rising sharply. Which day did pacing break, and what's the projected monthly overage if it continues?",
          toolName: "Google Sheets",
          where: "Import daily-spend-export.csv, add a 7-day rolling average column, and a projected-monthly column (avg x 30.4).",
          procedure: [
            "Import daily-spend-export.csv and freeze the header row",
            "Add a rolling 7-day average spend column",
            "Add a projected-monthly column: rolling average x 30.4",
            "Scan the projected-monthly column for the first day it exceeds the $4,560 cap by more than 10%",
          ],
          outputSample:
            "Warby Parker Search - Frame Finder (Mon-Fri only), $150 daily budget, cap $4,560\n\n" +
            "Date          Spend   7-day avg   Projected monthly\n" +
            "Aug 3 (Mon)   $148     $150         $4,560\n" +
            "Aug 4 (Tue)   $151     $150         $4,560\n" +
            "Aug 5 (Wed)   $149     $150         $4,560\n" +
            "Aug 6 (Thu)   $152     $150         $4,560\n" +
            "Aug 7 (Fri)   $150     $150         $4,560\n" +
            "Aug 10 (Mon)  $152     $150         $4,560\n" +
            "Aug 11 (Tue)  $287     $179         $5,442\n" +
            "Aug 12 (Wed)  $301     $198         $6,019\n" +
            "Aug 13 (Thu)  $294     $217         $6,597\n" +
            "Aug 14 (Fri)  $309     $236         $7,174",
          healthy: "Spend holds near $150/day and the projected-monthly column stays close to the $4,560 cap.",
          unhealthy:
            "Starting Aug 11, daily spend jumps roughly 90% and the projected-monthly figure blows past the cap toward $7,174, a 57% overshoot.",
          interpret:
            "The break lines up with the restricted-schedule pacing behavior the lesson describes: with only 45 active hours a week, Google compresses more of the monthly target into those hours once its pacing curve recalculates mid-flight.",
          soWhat: [
            {
              symptom: "Projected-monthly column exceeds the cap by more than 10%",
              action: "Set 75%/90% pacing alerts immediately and flag the account for a schedule review, not an emergency budget cut",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-alert-threshold-check",
          concept: "Setting and reading 75%/90% pacing alert thresholds against actual cumulative spend",
          lessonAnchor: "a-practical-mid-flight-optimization-checklist",
          theoryRecap:
            "The lesson's checklist recommends re-checking pacing alerts weekly, confirming the actual monthly spend trend against the cap rather than reacting to a single day's number, and changing one lever at a time.",
          question:
            "Using the projected-monthly figures from Step 1, at what point should a 75%/90% alert have fired, and what's the safe next action per the checklist's 'one lever at a time' rule?",
          toolName: "Google Sheets",
          where: "Same sheet, add columns for cumulative spend-to-date and percent of monthly cap.",
          procedure: [
            "Add a cumulative-spend-to-date column",
            "Add a percent-of-cap column: cumulative spend / $4,560",
            "Mark the first day percent-of-cap trend crosses 75%, then 90%, on the projected trajectory",
            "Write a one-sentence recommendation: what changes, and what does not",
          ],
          outputSample:
            "Day        Cumulative spend   % of $4,560 cap (projected trajectory)\n" +
            "Aug 7        $750                16%\n" +
            "Aug 11      $1,187               75% (projected trajectory crosses threshold)\n" +
            "Aug 13      $1,775               90% (projected trajectory crosses threshold)\n" +
            "Aug 14      $2,084               94%",
          healthy: "Alert fires at the 75% projected-trajectory crossing on Aug 11, giving a full week of warning before month-end.",
          unhealthy: "No alert configured, so the first signal anyone sees is the finance team asking about an invoice that's 57% over plan.",
          interpret:
            "A pacing alert exists to catch the trend, not the total, checking only today's absolute spend misses the accelerating slope entirely.",
          soWhat: [
            {
              symptom: "No alert thresholds configured on a restricted-schedule campaign",
              action: "Enable 75%/90% alerts in Campaign settings > Budget, and review the ad schedule itself before touching the daily budget number",
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
            role: "Build the rolling-average and projected-monthly pacing calculations",
            why: "Free, no account setup, and sufficient for a 14-day export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A dated diagnosis memo identifying the exact day pacing broke from flat to accelerating, the projected monthly overage, and a recommended alert-threshold fix rather than a budget cut.",
      sampleOutput:
        "ThredUp, Search - Resale Marketplace, pacing diagnosis memo (excerpt)\n\n" +
        "FINDING: Pacing broke on Day 9 (Tue), 6 business days into the flight.\n" +
        "  7-day avg spend jumped from $210/day flat to $340/day.\n" +
        "  Projected monthly spend: $6,384 against a $3,952 cap (30.4x $130/day), a 62% overshoot.\n\n" +
        "RECOMMENDATION: Do not cut the daily budget. Enable 75%/90% pacing alerts today,\n" +
        "review whether the ad schedule can be widened, and revisit in 3-4 days once the trend is confirmed.",
      successCriteria: [
        "Correctly identifies the day pacing shifted from flat to accelerating using the rolling-average column",
        "Recommends alert thresholds and a schedule review rather than an immediate budget cut",
      ],
      portfolioReady: true,
    },
    {
      id: "budget-pacing-optimization-learning-phase-scaling-sim",
      tier: "core",
      archetype: "simulation",
      title: "The Scaling Ladder: Live Budget Decisions Across a Learning Phase",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Make a sequence of live-feeling budget decisions across a simulated 14-day Meta Andromeda learning phase, distinguishing real underperformance from learning-phase noise, and scaling budget in the lesson's 20%-per-step, days-apart pattern instead of a single aggressive jump.",
      companyId: "mvmt-watches",
      scenario:
        "You manage paid social for MVMT, the DTC watch brand now owned by Movado Group, and just launched a new Meta prospecting campaign at $50/day.",
      brief:
        "Navigate four dashboard checkpoints across a simulated 14-day flight. At each one, decide whether to touch budget, and if so, by how much and how soon after the last change.",
      mode: "simulation",
      conceptsCovered: [
        "Distinguishing learning-phase noise from real underperformance",
        "Reading pacing trend against alert thresholds before deciding to scale",
        "Spacing budget increases 3-4 days apart to preserve algorithmic learning while scaling",
      ],
      stages: [
        {
          stageId: "day3-early-dip",
          label: "Day 3, CPA looks rough",
          elapsed: "Day 3 of 14",
          concept: "Distinguishing learning-phase noise from real underperformance",
          lessonAnchor: "the-learning-phase-reset-risk-the-mistake-that-costs-you-twice",
          situation:
            "CPA sits at $58 against a $35 target after just 3 days. You're tempted to fix it now, before it gets worse.",
          dashboard:
            "MVMT Prospecting - Meta Ads Manager, Day 3 of 14\n\n" +
            "  Spend               $150\n" +
            "  Purchases              3     CPA $50\n" +
            "  Learning phase     Active (12 of ~50 events needed)",
          spendToDate: "$150 of $700 (14-day flight)",
          budgetRemaining: "$550",
          decision: {
            prompt: "CPA is running 43% over target on day 3. What do you do?",
            options: [
              {
                id: "cut-budget-30",
                label: "Cut daily budget 30% to control spend while it's rough",
                verdict: "costly",
                outcome:
                  "The 30% cut exceeds Meta's roughly 20% reset threshold. Andromeda discards the 12 accumulated events and restarts the learning clock, adding another 7-14 days before you get a real read.",
                why: "Post-Andromeda, budget changes above roughly 20% in a single edit are treated as a new configuration and reset accumulated signal.",
                lessonRef: "The Learning-Phase-Reset Risk, the Mistake That Costs You Twice",
                nextStageId: "day9-still-rough",
              },
              {
                id: "wait-3-days",
                label: "Hold budget, keep watching, wait for closer to 50 events before judging",
                verdict: "optimal",
                outcome:
                  "You let the learning phase run undisturbed. Three purchases in three days is a small sample, not a trend, and the phase runs on an event count, not a day count.",
                why: "The lesson's checklist says: confirm whether an issue is genuine underperformance or normal learning-phase noise by looking at the trend across the full window, not a single day.",
                lessonRef: "A Practical Mid-Flight Optimization Checklist",
                nextStageId: "day9-diagnosis",
              },
            ],
          },
        },
        {
          stageId: "day9-still-rough",
          label: "Day 9, still recovering from the reset",
          elapsed: "Day 9 of 14 (post-reset)",
          concept: "Distinguishing learning-phase noise from real underperformance",
          lessonAnchor: "the-learning-phase-reset-risk-the-mistake-that-costs-you-twice",
          situation:
            "Six days after the 30% cut, the campaign is still in a fresh learning phase with CPA at $61, worse than where you started.",
          dashboard:
            "MVMT Prospecting - Meta Ads Manager, Day 9 of 14 (learning restarted Day 3)\n\n" +
            "  Spend               $315\n" +
            "  Purchases              5     CPA $63\n" +
            "  Learning phase     Active again (18 of ~50 events needed)",
          spendToDate: "$465 of $700",
          budgetRemaining: "$235",
          decision: {
            prompt: "The flight is more than half over and the campaign has effectively lost a full week to a self-inflicted reset. What now?",
            options: [
              {
                id: "accept-and-hold",
                label: "Hold the current budget for the remaining days, let it finish learning, and log the mistake for next time",
                verdict: "acceptable",
                outcome:
                  "The flight ends without exiting learning, so you never get a clean read on true CPA, but you don't compound the mistake with a second reset inside a shrinking window.",
                why: "The lesson's log-every-change habit exists exactly for this: knowing the Day 3 cut caused the Day 9 numbers prevents repeating it on the next flight.",
                lessonRef: "A Practical Mid-Flight Optimization Checklist",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day9-diagnosis",
          label: "Day 9, learning phase nearly done",
          elapsed: "Day 9 of 14",
          concept: "Reading pacing trend against alert thresholds before deciding to scale",
          lessonAnchor: "why-pacing-matters-and-why-accelerated-delivery-is-mostly-gone",
          situation:
            "CPA has settled to $38, close to target, with 52 of the roughly 50 needed events logged. The campaign is about to exit learning.",
          dashboard:
            "MVMT Prospecting - Meta Ads Manager, Day 9 of 14\n\n" +
            "  Spend               $450\n" +
            "  Purchases             12     CPA $38\n" +
            "  Learning phase     Exiting (52 of ~50 events needed)",
          spendToDate: "$450 of $700",
          budgetRemaining: "$250",
          decision: {
            prompt: "The campaign is exiting learning with CPA close to target and 5 days of flight left. Do you scale, and if so, how?",
            options: [
              {
                id: "scale-20-percent",
                label: "Increase daily budget 20%, then hold and watch for 3-4 days",
                verdict: "optimal",
                outcome:
                  "The increase stays under the reset threshold. Performance holds through the remaining flight because Andromeda treats it as a minor adjustment, not a new configuration.",
                why: "The lesson's safe-scaling pattern: increase in roughly 20% increments, wait 3-4 days between each step.",
                lessonRef: "The Learning-Phase-Reset Risk, the Mistake That Costs You Twice",
                nextStageId: "day13-scaling-check",
              },
              {
                id: "scale-60-percent",
                label: "Increase daily budget 60% now to capture more volume before the flight ends",
                verdict: "costly",
                outcome:
                  "The 60% jump resets learning again with only 5 days left in the flight, the campaign never has time to re-exit before the flight ends.",
                why: "Budget changes above roughly 20% in one edit risk a full learning-phase reset, and a 5-day window isn't enough runway to absorb another 7-14 day recovery.",
                lessonRef: "The Learning-Phase-Reset Risk, the Mistake That Costs You Twice",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day13-scaling-check",
          label: "Day 13, results holding after the first step",
          elapsed: "Day 13 of 14",
          concept: "Spacing budget increases 3-4 days apart to preserve algorithmic learning while scaling",
          lessonAnchor: "a-practical-mid-flight-optimization-checklist",
          situation:
            "It's been 4 days since the 20% bump and CPA is still at $37. It's tempting to bump again immediately since it's clearly working.",
          dashboard:
            "MVMT Prospecting - Meta Ads Manager, Day 13 of 14\n\n" +
            "  Spend               $610\n" +
            "  Purchases             16     CPA $37\n" +
            "  Learning phase     Stable",
          spendToDate: "$610 of $700",
          budgetRemaining: "$90",
          decision: {
            prompt: "Only 1 day is left in this flight. Do you push another 20% increase now?",
            options: [
              {
                id: "wait-for-next-flight",
                label: "Hold budget for the final day and plan the next 20% step for the start of the next flight",
                verdict: "optimal",
                outcome:
                  "The campaign finishes the flight with stable, trustworthy CPA data, and the next flight starts already outside learning, ready for the next scaling step on schedule.",
                why: "The checklist calls for one lever at a time and spacing changes several days apart, not stacking another edit one day after the last.",
                lessonRef: "A Practical Mid-Flight Optimization Checklist",
                nextStageId: "end",
              },
              {
                id: "stack-another-20",
                label: "Stack another 20% increase now, only 4 days after the last one, to end strong",
                verdict: "acceptable",
                outcome:
                  "This lands right at the edge of the lesson's 3-4 day spacing guidance rather than clearly inside it, so results are noisier than the previous step but don't trigger a full reset.",
                why: "The 3-4 day spacing rule is a guideline for re-stabilization, not a hard reset trigger like the 20% single-edit size, but cutting it this close removes your margin for error.",
                lessonRef: "A Practical Mid-Flight Optimization Checklist",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Meta Ads Manager",
            role: "Where the actual budget edits and learning-phase status live",
            why: "Free with any ad account, no additional cost to observe learning-phase status",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log every change with a date, per the lesson's checklist",
            why: "Free and sufficient for a simple dated change log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A dated change log documenting each budget decision made across the 14-day simulated flight, spend levels at each checkpoint, and the reasoning behind each move or deliberate non-move.",
      sampleOutput:
        "Warby Parker, Meta Prospecting - New Frames, change log (excerpt)\n\n" +
        "Day 3: CPA $52 vs $30 target, 9 of ~50 events. Held budget, noted as noise not signal.\n" +
        "Day 8: 48 events logged, CPA settled to $31. Learning phase exiting.\n" +
        "Day 8: Increased daily budget 20% ($40 to $48). Held, no further changes.\n" +
        "Day 12: CPA stable at $29 after 4 days. Logged for next flight's scaling step, no same-flight second increase.",
      successCriteria: [
        "Never touches budget during the first learning-phase window without a genuine, justified reason",
        "When scaling, keeps each single edit at or under 20% and spaces edits at least 3-4 days apart",
      ],
      portfolioReady: true,
    },
  ],
  "ai-creative-testing-at-scale": [
    {
      id: "ai-creative-testing-at-scale-angle-diversity-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Sameness Check: Auditing 24 AI Variants for Real Angle Diversity",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 24-variant AI creative performance export tagged by angle, determine whether the test set actually covered distinct psychological angles or just cosmetic variations of one angle, and recommend which angle to scale.",
      companyId: "doordash",
      scenario:
        "You're the paid social analyst at DoorDash reviewing a Meta Advantage+ Creative test that generated 24 image variants for a new promo, and leadership wants to know which angle to scale before the next order cycle.",
      brief:
        "Group variants by underlying angle rather than by surface cosmetics, calculate performance per angle group, and flag whether the test had enough real diversity to trust the result.",
      mode: "diagnostic",
      conceptsCovered: [
        "Detecting sameness fatigue by grouping AI variants by underlying angle, not surface cosmetics",
        "Scaling the winning angle's underlying idea, not just the single top-performing asset",
      ],
      steps: [
        {
          stepId: "step-1-group-by-angle",
          concept: "Detecting sameness fatigue by grouping AI variants by underlying angle, not surface cosmetics",
          lessonAnchor: "sameness-fatigue-the-new-failure-mode",
          theoryRecap:
            "Testing 20 AI variants that all share the same core angle, hook, and visual structure tells you which shade of blue converts slightly better, not which underlying idea resonates, spending a testing budget while learning almost nothing transferable.",
          question:
            "This export has 24 variants tagged with an 'angle' column, but the tags only cover 3 distinct underlying angles. Is this a valid angle test, or a sameness-fatigue trap?",
          toolName: "Google Sheets",
          where: "Import the 24-row export, build a pivot table on the angle column, count executions per angle.",
          procedure: [
            "Import the creative-performance export and pivot on the angle column",
            "Count how many of the 24 variants fall into each distinct angle",
            "Calculate average CPA per angle group, not per individual asset",
            "Flag any angle with fewer than 3 executions as too thin to judge confidently",
          ],
          outputSample:
            "DoorDash Promo Test, 24 variants by tagged angle\n\n" +
            "Angle             Variants   Avg CPA\n" +
            "Product Hero          18       $4.20\n" +
            "Social Proof           4       $3.95\n" +
            "Pain Point             2       $3.40",
          healthy: "8-12 genuinely distinct angles, each represented by a handful of executions (3-5).",
          unhealthy: "18 of 24 variants tagged 'Product Hero,' only 3 total underlying angles present despite 24 total assets generated.",
          interpret:
            "This is sameness fatigue: 'Product Hero' looks like the strongest performer partly because it had 18 shots on goal versus 2-4 for everything else, not because the angle itself is proven best.",
          soWhat: [
            {
              symptom: "One angle dominates the variant count in a creative test export",
              action: "Rebrief the next test with 8-12 explicitly distinct angles and cap executions at 3-5 per angle before generating",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-angle-level-scale-call",
          concept: "Scaling the winning angle's underlying idea, not just the single top-performing asset",
          lessonAnchor: "why-ai-changes-the-testing-math",
          theoryRecap:
            "When a winning angle emerges, the lesson says to scale the underlying idea across new executions, not just the single winning asset, that is where the compounding insight lives.",
          question:
            "Pain Point had only 2 variants but the lowest CPA per variant. Product Hero had 18 variants and the lowest CPA of any single asset. Which do you recommend leadership scale?",
          toolName: "Google Sheets",
          where: "Same pivot table, add a confidence flag column based on sample size per angle.",
          procedure: [
            "Compare average CPA per angle group, not the single best individual asset",
            "Flag Pain Point as promising but under-sampled (only 2 executions)",
            "Recommend a follow-up brief of 3-5 more Pain Point executions before crowning a winner",
            "Recommend scaling Product Hero cautiously, since its lead may partly reflect volume, not angle strength",
          ],
          outputSample:
            "Recommendation memo (excerpt)\n\n" +
            "Do not scale the single best 'Product Hero' asset as the definitive winner, its angle had 9x\n" +
            "the sample size of Pain Point. Rebrief Pain Point with 3-5 more executions next cycle before\n" +
            "declaring a winning angle. Continue running Product Hero and Social Proof at current volume\n" +
            "in the meantime, neither is disqualified, but neither is confirmed either.",
          healthy: "A scale recommendation names the angle with a note on sample-size confidence for each group.",
          unhealthy: "Declaring 'Product Hero' the winner and scaling the single top asset without accounting for its 9x sample advantage.",
          interpret: "Raw asset-count wins are not the same as angle-level wins, the lesson's whole point about testing ideas, not pixels.",
          soWhat: [
            {
              symptom: "A recommendation names a single winning asset instead of a winning angle",
              action: "Re-run the comparison at the angle level and flag any angle below 3 executions as needing more data first",
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
            role: "Pivot the export by angle and calculate angle-level performance",
            why: "Free, no account friction, sufficient for a 24-row export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An angle-grouped performance summary with a scale recommendation and a note on which angle needs more data before a confident call.",
      sampleOutput:
        "ThredUp, Meta Advantage+ Creative test, angle summary (excerpt)\n\n" +
        "Angle             Variants   Avg CPA   Confidence\n" +
        "Nostalgia/Resale      15      $2.80     Low, oversampled vs other angles\n" +
        "UGC Unboxing           5      $2.55     Medium\n" +
        "Sustainability         4      $2.30     Medium, promising, needs 2-3 more reps\n\n" +
        "RECOMMENDATION: Do not scale Nostalgia/Resale as the confirmed winner on raw CPA alone.\n" +
        "Rebrief Sustainability with 3 more executions before the next scaling decision.",
      successCriteria: [
        "Groups variants by underlying angle rather than counting raw asset-level wins",
        "Flags angles with too few executions to trust before recommending a scale decision",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-creative-testing-at-scale-qc-gate-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The QC Gate Teardown: Catching What AI Creative Slips Past You",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Review 5 specimen AI-generated ad concepts for a monsoon sale against the lesson's five-point QC checklist, correctly identifying which contain a genuine launch-blocking defect and which are clean, without over-flagging plausible-looking but acceptable choices.",
      companyId: "firstcry-brainbees",
      scenario:
        "You're the QC reviewer at FirstCry (Brainbees Solutions) ahead of a monsoon baby-gear sale, and the performance marketing team has handed you 5 AI-generated ad concepts from Advantage+ Creative to sign off before spend goes live.",
      brief:
        "Apply the five-point QC checklist, factual accuracy, brand safety, representation, legal/regulatory compliance, and landing-page match, to each specimen and mark launch-ready vs blocked.",
      mode: "teardown",
      conceptsCovered: [
        "The Quality-Control Gate Before Anything Goes Live",
        "Sameness Fatigue: The New Failure Mode",
      ],
      teardownItems: [
        {
          itemId: "specimen-1-medical-claim",
          specimen:
            "AI-generated carousel ad. Image: baby in a monsoon-themed onesie under an umbrella graphic. Headline: 'Skin Clears Up in Days with Our Baby Lotion.' Body: 'Doctor-approved formula for sensitive skin.' CTA: Shop Now.",
          specimenSource: "synthetic-realistic",
          prompt: "Review this specimen against the QC checklist. What, if anything, blocks launch?",
          answerKey: [
            {
              defect: "Unapproved medical/efficacy claim ('Clears Up in Days')",
              severity: "critical",
              whyItMatters:
                "Implies a therapeutic guarantee no dermatology claim was cleared for, the same failure mode the lesson describes in its DTC skincare example, risking a platform policy strike and regulatory exposure on a baby-care product.",
              lessonRef: "The Quality-Control Gate Before Anything Goes Live, factual accuracy and legal/regulatory compliance",
              owner: "you",
            },
            {
              defect: "'Doctor-approved' claim with no citation or approval on file",
              severity: "critical",
              whyItMatters:
                "Regulated-category products need the same compliance bar as human-written copy, an unverifiable endorsement claim is a legal liability, not a minor QC nitpick.",
              lessonRef: "The Quality-Control Gate Before Anything Goes Live, legal and regulatory compliance",
              owner: "either",
            },
          ],
          distractors: [
            "Umbrella graphic tied to the monsoon-sale theme (on-brand seasonal creative, not a defect)",
            "'Shop Now' CTA (a standard call to action, not a compliance issue)",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-clean-pass",
          specimen:
            "AI-generated single-image ad. Image: toddler splashing in rain boots, a raincoat product shot inset bottom-right with the FirstCry logo correctly placed. Headline: 'Monsoon-Ready Gear, Up to 40% Off.' Body: 'Rain boots, raincoats and umbrellas for every age, starting at Rs 299.' CTA: Shop the Sale.",
          specimenSource: "synthetic-realistic",
          prompt: "Review this specimen against the QC checklist. What, if anything, blocks launch?",
          answerKey: [],
          distractors: [
            "Price stated as 'starting at Rs 299' in the body copy (verify this matches the landing page's actual entry price, if it matches, it's a legitimate, disclosed price point, not a defect)",
            "Logo placement in the bottom-right corner (unconventional but within accepted layout variance, not a brand-safety violation)",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-context-mismatch",
          specimen:
            "AI-generated video storyboard. Scene: a family in a Western-style living room with snow visible through the window, toddler in mittens. Headline: 'Beat the Monsoon, Stock Up Now.' CTA: Shop Monsoon Essentials.",
          specimenSource: "synthetic-realistic",
          prompt: "Review this specimen against the QC checklist. What, if anything, blocks launch?",
          answerKey: [
            {
              defect: "Imagery contradicts the campaign's own stated context (a snow and mittens scene paired with a monsoon-sale headline)",
              severity: "moderate",
              whyItMatters:
                "Generative image tools trained on global stock data default to generic 'cozy family' visuals that don't match an India-specific monsoon campaign, undermining relevance and trust even though nothing in the ad is factually false.",
              lessonRef: "The Quality-Control Gate Before Anything Goes Live, brand safety and representation review",
              owner: "you",
            },
          ],
          distractors: ["Headline 'Beat the Monsoon, Stock Up Now' (accurate seasonal messaging, not itself the defect)"],
          partialCredit: true,
        },
        {
          itemId: "specimen-4-landing-page-mismatch",
          specimen:
            "AI-generated ad promoting 'Buy 2 Get 1 Free on all raincoats,' CTA linking to the general FirstCry monsoon category page, which is actually running a flat 30%-off promotion instead.",
          specimenSource: "synthetic-realistic",
          prompt: "Review this specimen against the QC checklist. What, if anything, blocks launch?",
          answerKey: [
            {
              defect: "Ad promise ('Buy 2 Get 1 Free') does not match the live landing page offer (flat 30% off)",
              severity: "critical",
              whyItMatters:
                "Landing-page mismatches tank conversion rate and can trigger platform policy violations for misleading offers, the lesson's fifth checklist point.",
              lessonRef: "The Quality-Control Gate Before Anything Goes Live, landing page match",
              owner: "either",
            },
          ],
          distractors: ["Raincoats as the featured product category (on-strategy for a monsoon push, not a defect)"],
          partialCredit: true,
        },
        {
          itemId: "specimen-5-representation",
          specimen:
            "AI-generated ad featuring a generated image of a caregiver figure depicted in a stereotyped, exaggerated domestic-servant pose, visually distinct from how any other adult figure in the brand's existing ad library is depicted, positioned next to a baby product.",
          specimenSource: "synthetic-realistic",
          prompt: "Review this specimen against the QC checklist. What, if anything, blocks launch?",
          answerKey: [
            {
              defect: "Stereotyped depiction of a caregiver figure",
              severity: "moderate",
              whyItMatters:
                "Representation and sensitivity review is a manual human check the generation tool does not self-police, per the lesson, shipping this risks brand reputation harm even though no claim is factually false.",
              lessonRef: "The Quality-Control Gate Before Anything Goes Live, representation and sensitivity review",
              owner: "you",
            },
          ],
          distractors: [
            "Presence of a caregiver figure in the ad at all (a caregiver-focused angle is a legitimate creative choice, the depiction style is the actual issue)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track the QC scorecard across all 5 specimens",
            why: "Free and sufficient for a simple pass/block tracking sheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed QC scorecard for all 5 specimens marking launch-ready vs blocked, with the specific defect, severity, and checklist category cited for each block.",
      sampleOutput:
        "Warby Parker, AI creative QC scorecard (excerpt)\n\n" +
        "Specimen 1 (frame-fit claim): BLOCKED, critical, unverified 'zero pressure points' efficacy claim, factual accuracy.\n" +
        "Specimen 2 (lifestyle shot, city street): PASS, no defect found.\n" +
        "Specimen 3 (price mismatch): BLOCKED, critical, landing page match.\n" +
        "Specimen 4 (seasonal imagery, off-region): BLOCKED, moderate, brand safety/representation.\n" +
        "Specimen 5 (clean variant): PASS, no defect found.",
      successCriteria: [
        "Correctly identifies all 3 launch-blocking specimens and their specific checklist violation",
        "Does not flag the clean specimen or the on-strategy raincoat/CTA/logo-placement choices as defects",
      ],
      portfolioReady: true,
    },
  ],
};
