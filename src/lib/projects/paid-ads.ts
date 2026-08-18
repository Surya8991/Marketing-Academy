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
};
