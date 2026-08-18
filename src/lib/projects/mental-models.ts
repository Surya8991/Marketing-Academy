/**
 * Practice projects for the `mental-models` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * Three lessons covered in this pass:
 *   - "first-principles-thinking": teardown (spot the borrowed-vs-derived
 *     reasoning) + build-the-asset (rebuild one assumption from scratch).
 *   - "opportunity-cost-thinking": explicit "no-project" verdict. This is
 *     PROJECTS_PLAN.md section 11.8's own chosen example of an "unmappable"
 *     lesson, opportunity cost's consequences are invisible at decision
 *     time and only visible in a foregone counterfactual, which no hands-on
 *     format here can honestly grade. Empty array, not a missing entry.
 *   - "writing-to-think": build-the-asset (a graded decision memo) +
 *     head-to-head (compare a prose memo against a conclusions-only memo,
 *     graded via the teardown mode's answer-key/distractor shape).
 *
 * None of these four projects use the `steps` (ProjectStep) shape, so no
 * `lessonAnchor` values are minted here. ProjectStep.lessonAnchor is
 * rendered as a literal `href="#${lessonAnchor}"` by ProjectStep.tsx, which
 * requires a real rehype-slug id, not heading prose. Teardown and
 * build-the-asset archetypes don't require steps (Project.steps is
 * optional; "build/drill/calibration may use steps or a bespoke shape per
 * project" per types.ts), so this file uses `teardownItems` or plain prose
 * fields (brief/deliverable/successCriteria) instead, sidestepping the
 * anchor question entirely.
 */

import type { Project } from "@/lib/projects/types";

export const MENTAL_MODELS_PROJECTS: Record<string, Project[]> = {
  "first-principles-thinking": [
    {
      id: "first-principles-thinking-memo-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Borrowed Reasoning or Derived Truth? A Growth Memo Teardown",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Read a realistic internal growth memo and separate the claims that are genuinely derived from first principles from the claims that are just analogy wearing a business-casual outfit, using the lesson's own name-it/test-it/rebuild-it method as the answer key.",
      companyId: "allbirds",
      scenario:
        "You've been brought in to advise Allbirds' growth team for a quarter. A memo lands in your inbox from the growth lead proposing a large budget shift, six numbered claims, one recommendation, decided by end of week. Nobody has time to relitigate it from scratch, but somebody needs to check the reasoning before the budget moves.",
      brief:
        "Read the memo below. For each of the six numbered claims, decide whether it's a base truth someone actually tested (keep it) or an assumption borrowed from somewhere else and dressed up as a reason (flag it). Three of the six are borrowed reasoning. The other three look similarly confident but are genuinely derived from the team's own first-party data, don't flag those just because they sit next to the bad ones.",
      mode: "teardown",
      conceptsCovered: ["What It Actually Is", "The Playbook: The Three-Step Method", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "growth-memo-q3-budget-shift",
          specimenSource: "synthetic-realistic",
          specimen:
            "INTERNAL STRATEGY MEMO — Q3 Growth Plan\nTo: Marketing Leadership | From: Growth Lead\n\nWe should shift 40% of our paid budget from Google Search to Instagram Reels this quarter.\n\nClaim 1: Our closest competitor moved budget to Reels in Q1 and their follower count doubled, so we should do the same to keep pace.\n\nClaim 2: Our own funnel data shows our best landing page converts video-referred traffic at 4.1%, versus 1.8% for search-referred traffic over the last two quarters, so shifting spend toward video-native channels should raise blended conversion rate.\n\nClaim 3: Reels is where \"the algorithm rewards creators right now,\" and every growth newsletter is saying the same thing this month, so the timing is right.\n\nClaim 4: Our support-ticket data shows 61% of new customers this quarter cite \"saw a product demo video\" as their discovery source, up from 23% a year ago, so our buyers are already telling us where purchase intent is forming.\n\nClaim 5: Search CPCs in our category rose 34% year-over-year per our own account data, while last month's small Reels pilot produced a 22% lower cost-per-acquisition on the identical offer, so the unit-economics case is already showing up in our own numbers, not just in theory.\n\nClaim 6: A well-known DTC skincare brand built its entire growth engine on Reels, and if it worked for them, it will work for us.\n\nRecommendation: approve the 40% shift immediately.",
          prompt:
            "Which of the six numbered claims are analogy-based assumptions (copied from a competitor, a trend, or someone else's result) rather than base truths this team actually tested on its own numbers? Name each one and say what it's really resting on.",
          answerKey: [
            {
              defect:
                "Claim 1: 'our competitor moved budget to Reels and their follower count doubled, so we should too' is pure analogical reasoning, follower count isn't even the metric the memo is trying to move (blended conversion / CAC is), and the competitor's starting conditions are never examined.",
              severity: "critical",
              whyItMatters:
                "This is the exact pattern the lesson opens with: 'SaaS companies should do content marketing because HubSpot did.' A doubled follower count for a different company says nothing about whether the same channel converts for this one.",
              lessonRef: "What It Actually Is: reasoning by analogy vs. reasoning up from what is actually true",
              owner: "you",
            },
            {
              defect:
                "Claim 3 leans on 'the algorithm rewards creators right now' plus 'every growth newsletter is saying the same thing,' which is popularity of the claim, not evidence for it, restated as if repetition were proof.",
              severity: "moderate",
              whyItMatters:
                "The lesson calls this out directly: for each 'because,' ask whether it's actually true or just repeated often. A trend everyone is repeating this month is the textbook fingerprint of an untested assumption, not a base truth.",
              lessonRef: "The Playbook: The Three-Step Method, Step 2, test each link",
              owner: "you",
            },
            {
              defect:
                "Claim 6: 'a well-known DTC skincare brand built its whole growth engine on Reels, so it will work for us' copies a single outcome from a different category, different audience, and different starting CAC with zero attempt to check whether the underlying conditions match.",
              severity: "critical",
              whyItMatters:
                "This is Mistake 1's mirror image: it isn't contrarianism, it's the opposite failure, pure precedent-following with no independent derivation at all. If the derived answer happens to match the industry that's fine, but here nothing was derived, only copied.",
              lessonRef: "Common Mistakes, Mistake 1: confusing first principles with contrarianism (here, skipping derivation entirely)",
              owner: "you",
            },
          ],
          distractors: [
            "Claim 2 (4.1% vs. 1.8% conversion by referral source) uses the team's own two-quarter funnel data, not a borrowed benchmark, this is a base truth someone actually measured, don't flag it.",
            "Claim 4 (61% of new customers citing video discovery, up from 23%) is the team's own support-ticket data tracked over a year, first-party evidence of a real shift, not an assumption.",
            "Claim 5 (34% CPC inflation and a 22% lower CPA from the team's own Reels pilot) is a real pilot result on the team's own offer, exactly the kind of tested link the lesson's Step 2 asks for, it isn't borrowed reasoning just because it sits next to claims that are.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you mark up the memo and write your claim-by-claim verdict",
            why: "Free tier is enough for a single page of annotated reasoning, any plain-text editor works identically, the tool doesn't matter here, the thinking does.",
            required: false,
            fallback: "Any plain text editor or even a printed copy with a pen",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "There is no paid tier to this project. It's a reading-and-reasoning exercise; the free path is the whole path.",
      },
      deliverable:
        "A claim-by-claim verdict (keep / flag) for all six numbered claims, each with one sentence saying what it's really resting on, plus a one-sentence overall call on whether you'd approve the budget shift as written.",
      sampleOutput:
        "Worked example using a different memo (not the Allbirds one above), on Warby Parker's well-known internal debate over glasses pricing: the industry-standard reasoning was 'frames cost $500 because that's what LensCrafters charges,' which is Claim-1-style analogy, a competitor's price copied wholesale with no look at what frames actually cost to source. The team instead priced from raw materials, licensing, and manufacturing costs, the same three-step move this teardown is grading: name the assumption ('$500 is the going rate'), test it against actual input costs, rebuild the number from what survived. A passing verdict on this teardown reads the same way, claim by claim, not 'these all sound confident so I'll flag half of them.'",
      successCriteria: [
        "Correctly flags all three analogy-based claims (1, 3, 6) as borrowed reasoning, not base truths",
        "Correctly leaves all three first-party-data claims (2, 4, 5) unflagged, doesn't over-flag just because they sit next to bad reasoning",
        "Each flagged claim's stated reason names what it's actually resting on (a competitor's result, a trend, someone else's case study), not just 'this seems off'",
        "Final one-sentence call is a genuine verdict on the recommendation, not a restatement of the memo's own conclusion",
      ],
      portfolioReady: false,
    },
    {
      id: "first-principles-thinking-rebuild-assumption",
      tier: "core",
      archetype: "build-the-asset",
      title: "Rebuild One Assumption-Driven Decision From Scratch",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Take one real, currently-assumption-driven marketing decision and run it through the lesson's three-step method for real, producing a short written reasoning chain that could actually be handed to a decision-maker.",
      companyId: "casper-sleep",
      scenario:
        "You're advising Casper's growth team, and someone has already decided: 'we should run a heavy Black Friday discount because every mattress brand does.' The decision hasn't shipped yet. You have one shot to either confirm it with real reasoning or replace it with something better before the budget is committed.",
      brief:
        "Pick one assumption-driven marketing decision, either the Casper Black Friday example above, or a real decision from your own work or a company you know well. Run it through the three-step method from the lesson and write up the result as a short reasoning-chain document, not a slide, not bullets pretending to be reasoning, an actual chain someone could follow and disagree with on the merits.",
      mode: "build",
      conceptsCovered: ["The Playbook: The Three-Step Method", "Why It Matters", "A Real Example"],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you draft and structure the three-part reasoning chain",
            why: "Free tier handles a single structured document with headers for each step, no paid feature is needed for this deliverable.",
            required: false,
            fallback: "Any plain text editor, a Google Doc, or a notebook page photographed at the end",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Claude",
            role: "Optional devil's-advocate pass on Step 2 (test each link)",
            why: "Pasting your if-then chain and asking it to argue against each link is a fast way to catch a link you talked yourself into without really testing, useful but not required, the lesson's method works with a blank page and no AI at all.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a blank document and the three-step method) is the complete path. The AI devil's-advocate pass is a speed upgrade, not a requirement, the lesson was written and tested for decades before either tool existed.",
      },
      deliverable:
        "A written reasoning chain with three labeled sections: (1) the standard answer as an explicit if-then chain, (2) each link tested with a stated true/false/unclear verdict and why, (3) the rebuilt conclusion from whatever survived, plus one line on whether it matches or contradicts the standard answer.",
      sampleOutput:
        "Illustrative walkthrough, not the Casper decision, applied instead to a hypothetical Chewy assumption ('we should run paid social because every DTC pet brand does'): Step 1, the if-then chain is 'DTC pet brands succeed on paid social, therefore paid social will work for us, therefore we should budget for it.' Step 2, testing each link: 'DTC pet brands succeed on paid social' is true for some but conflates brand awareness with retention-driven brands like this one; 'therefore it will work for us' is unclear, no data cited on this specific audience's paid-social response; the chain does not survive intact. Step 3, rebuilt conclusion: given the retention-first model, the base truth actually in evidence is repeat-purchase behavior driven by service quality, not discovery channel, so the higher-leverage first-principles move is testing lifecycle email deepening before adding a new paid channel. Different answer than the standard playbook, which is exactly the point of running the exercise instead of skipping it.",
      successCriteria: [
        "The if-then chain in Step 1 has at least 3 distinct linked claims, not one vague assumption restated three times",
        "At least one link in Step 2 is marked false or unclear with a stated reason, not every link rubber-stamped true",
        "The Step 3 conclusion is derived from what specifically survived Step 2, traceable claim by claim, not just a restatement of the original decision with new words",
        "The closing line explicitly states whether the rebuilt conclusion matches or contradicts the standard answer, per the lesson's own framing of what counts as a genuine result either way",
      ],
      portfolioReady: true,
      stretch:
        "Run the same three-step method on a second, higher-stakes decision from your own work (a positioning claim, a channel bet, a pricing assumption) and compare how much the conclusion moved between the two.",
    },
  ],

  "opportunity-cost-thinking": [],

  "writing-to-think": [
    {
      id: "writing-to-think-decision-memo",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Prose Test: Write a Real Decision Memo",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Take a real, currently-undecided marketing decision and write it up as a full-sentence prose memo using the lesson's Prose Test, so any weak reasoning surfaces on the page instead of surviving into the actual decision.",
      companyId: "klaviyo",
      scenario:
        "You're the marketing lead at Klaviyo weighing whether to sponsor a major ecommerce conference at a six-figure price tag. Leadership wants a recommendation by Friday. You could walk in with a bullet-point slide, or you could write the reasoning out first and see if it survives the sentences.",
      brief:
        "Write a one-to-two page decision memo in full prose, no bullets, no fragment lists, about the conference sponsorship decision above, or a real decision from your own work if you'd rather use live stakes. Follow the lesson's Prose Test: state the plan, write the reasoning as complete sentences, and if it collapses into 'and then a miracle happens,' rewrite until it doesn't, or let the memo change your recommendation.",
      mode: "build",
      conceptsCovered: ["The Playbook: The Prose Test", "What Actually Improves From Writing", "Common Mistakes"],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you draft the prose memo",
            why: "Free tier is a blank page with headers, which is all this deliverable needs, the format constraint (prose, not bullets) matters far more than the tool.",
            required: false,
            fallback: "Any plain text editor, a Google Doc, or a notebook",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "No paid tool improves this exercise. Adding AI drafting assistance here would defeat the point, the value is in your own reasoning surfacing on the page, not a fluent paragraph generated around a bullet list you never actually tested.",
      },
      deliverable:
        "A one-to-two page prose memo (full sentences and paragraphs only) covering: the decision on the table, the reasoning for and against written out sentence to sentence, at least one place where writing it out changed or complicated your initial view, and a final one-paragraph recommendation.",
      sampleOutput:
        "Illustrative structure, using Mailchimp's decision on whether to raise prices for legacy free-tier users as the topic instead of the Klaviyo one above: the memo opens by stating the plan in one sentence, then spends a paragraph on the strongest case for it (revenue per free user is negative, the cohort has grown faster than paid conversion), then a paragraph testing that case against churn risk data, and explicitly reverses from 'raise prices across the board' to 'raise prices only for accounts inactive 90+ days' once the churn-risk paragraph exposed a gap the bullet version never would have shown. The closing paragraph states the narrower recommendation and names the one remaining unknown (whether inactive accounts are dormant or simply low-usage) as still untested.",
      successCriteria: [
        "Written entirely in full sentences and paragraphs, zero bullet points or fragment lists anywhere in the reasoning section",
        "Names at least 3 explicit, distinct uncertainties or unknowns in direct language ('I don't know,' 'unclear,' 'untested'), not buried or implied",
        "At least one stated position is visibly reversed or narrowed partway through the memo, with the sentence that triggered the change identifiable",
        "The closing recommendation follows traceably from the preceding paragraphs, not a restatement of the opening plan with different words",
      ],
      portfolioReady: true,
    },
    {
      id: "writing-to-think-memo-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Two Memos, Same Decision: Which One Actually Thought It Through?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Read two memos about the identical decision, one written as prose that exposes its own reasoning, one written as confident bullets that hide the gaps, and correctly identify which specific moves in each one demonstrate (or fake) the thinking the lesson describes.",
      companyId: "chewy",
      scenario:
        "Two members of Chewy's retention team independently wrote up the same proposal, a paid loyalty program, ahead of the same budget meeting. Only one memo actually shows its work. You're sitting in for the marketing director and have to decide which one to trust, and be able to say exactly why.",
      brief:
        "Read Memo A and Memo B below, both about the identical loyalty-program decision. Identify which one demonstrates writing-to-think and which one only performs certainty. For Memo B specifically, name which bullets are hiding an untested jump in reasoning, not just 'this whole memo feels thin.'",
      mode: "teardown",
      conceptsCovered: ["The Playbook: The Prose Test", "What It Actually Is", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "loyalty-program-memo-a-vs-memo-b",
          specimenSource: "synthetic-realistic",
          specimen:
            "MEMO A (prose):\n\"I think we should launch a paid loyalty program in Q3, but I'm not fully sure the math works. Our repeat-purchase rate is 31%, and I assumed a loyalty program would lift that to 40%+ the way it did for a comparable retailer, but when I actually laid the comparison out in writing, it fell apart: their average order value was $180, ours is $42, and their program had a $99 paid entry fee that filtered for already-loyal buyers, ours would be free enrollment. Rewriting the question, it isn't 'does a loyalty program work,' it's 'does a free-entry program work at our order size,' which I don't have an answer to. Given that, I'm reversing my initial recommendation: instead of a full launch, we should run a 90-day pilot with 5,000 customers and measure repeat-rate lift before committing the year's CRM budget to a full build.\"\n\nMEMO B (bullets):\n\"- Launch loyalty program in Q3\n- Comparable retailers see 40%+ repeat-rate lift\n- Program cost: $85K build + $12K/month\n- Target: all 210,000 active customers\n- Timeline: 6 weeks to launch\n- Recommendation: approve full build\"",
          prompt:
            "Which memo actually demonstrates the Prose Test, and where specifically does Memo A expose or reverse reasoning that Memo B never tests at all? Point to the specific bullets in Memo B that are hiding an unexamined jump, not the memo as a vague whole.",
          answerKey: [
            {
              defect:
                "Memo B's bullet 'Comparable retailers see 40%+ repeat-rate lift' states the comparison as settled fact, with none of the order-value or entry-fee differences Memo A surfaced the moment it was written out in full sentences.",
              severity: "critical",
              whyItMatters:
                "This is the exact contrast the lesson draws: 'Launch Q2 campaign' as a bullet passes; the same claim in a paragraph forces you to finish the sentence. Here the comparable-retailer claim only survives because it's a bullet, not a sentence.",
              lessonRef: "What It Actually Is: bullets are what let poor thinking look tidy",
              owner: "you",
            },
            {
              defect:
                "Memo B's bullet 'Target: all 210,000 active customers' jumps straight to full-scale rollout with no pilot, no stated uncertainty, and no test of whether the comparable-retailer lift even applies at this order size, the exact gap Memo A found and acted on.",
              severity: "critical",
              whyItMatters:
                "Memo A's whole value is the reversal from 'full launch' to '90-day pilot on 5,000 customers,' triggered by writing the comparison out. Memo B shows no equivalent test ever happened, only the untested full-scale plan survived.",
              lessonRef: "The Playbook: The Prose Test, does the reasoning survive the sentences, or collapse into 'and then a miracle happens'",
              owner: "you",
            },
            {
              defect:
                "Memo B's final bullet 'Recommendation: approve full build' follows directly from the first bullet with nothing in between, no reasoning chain a reader could actually disagree with on the merits.",
              severity: "moderate",
              whyItMatters:
                "The lesson's own line applies directly here: a written prose pitch that anticipates the questions gets funded, a slide-only pitch invites debate for its own sake, except here it wouldn't even get the debate, the gaps are invisible until someone tries to write the same claims as full sentences.",
              lessonRef: "Common Mistakes, Mistake 1: writing after the decision instead of before (here, never writing the reasoning at all)",
              owner: "you",
            },
          ],
          distractors: [
            "Memo B's 'Program cost: $85K build + $12K/month' is a concrete factual estimate, not a hidden reasoning gap, don't flag it just because it's a bullet.",
            "Memo B's 'Timeline: 6 weeks to launch' is a logistics detail, not a place where reasoning is being hidden.",
            "Memo B's 'Launch loyalty program in Q3' simply states the topic and timeframe under discussion, it isn't itself an unexamined claim, the claims worth flagging come after it.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you write your comparison verdict",
            why: "This is a reading-and-judging exercise, any note-taking tool works, the free tier is the whole requirement.",
            required: false,
            fallback: "Pen and paper, or annotate directly on a printed copy of the two memos",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "No paid tool applies to this project, it's a judgment exercise, not a production one.",
      },
      deliverable:
        "A short written verdict naming which memo demonstrates writing-to-think, plus a bullet-by-bullet call on the three flagged claims in Memo B (what jump each one hides) and the three unflagged ones (why they're fine as bullets).",
      sampleOutput:
        "Illustrative verdict on a different pair of memos (not the Chewy loyalty-program pair above), using Duolingo's streak-retention messaging as the comparison case: a passing answer states plainly that the prose memo wins because it names a specific place ('rewriting the question exposed...') where the act of writing changed the conclusion, while the bullet memo's most confident-sounding claim ('comparable apps see 2x day-30 retention from streak mechanics') is exactly the kind of claim that only survives as a bullet, restate it as a sentence and it demands a citation the memo never provides. The point isn't finding more flaws in the bullet memo, it's finding the right three and leaving the concrete logistics bullets alone.",
      successCriteria: [
        "Correctly identifies Memo A as demonstrating writing-to-think and Memo B as performing certainty without testing it",
        "Correctly flags all three reasoning-hiding bullets in Memo B (the comparable-retailer lift claim, the full-rollout target, the recommendation with no visible chain), not just a vague 'Memo B is worse' verdict",
        "Correctly leaves the three factual/logistics bullets in Memo B unflagged (cost, timeline, topic statement), doesn't over-flag the whole memo indiscriminately",
        "Points to the specific sentence in Memo A where the written reasoning caused a reversal, not just 'Memo A seems more thoughtful'",
      ],
      portfolioReady: false,
    },
  ],

  "second-order-thinking": [
    {
      id: "second-order-thinking-promo-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Discount Trap: Teardown of a 'Quick Fix' Growth Strategy",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given an internal strategy proposal advocating an aggressive price discount and zero-down financing, identify the hidden second- and third-order systemic traps using the lesson's 'And Then What?' drill.",
      companyId: "ola-electric",
      scenario:
        "You are a growth strategy consultant reviewing a Q4 promotional proposal for Ola Electric's S1 scooter lineup. To hit ambitious year-end delivery targets, the marketing team proposes an immediate 20% price slash combined with zero-down-payment financing, claiming it will guarantee hitting quarterly unit volume goals.",
      brief:
        "Analyze the promotional proposal below. For each numbered claim, evaluate whether the proposed action accounts for second- and third-order consequences (customer expectation anchoring, dealership margin erosion, resale value collapse, and brand premium dilution) or merely celebrates a first-order dashboard metric.",
      mode: "teardown",
      conceptsCovered: [
        "What It Actually Is",
        "The Playbook: The \"And Then What?\" Drill",
        "Applying It to Common Marketing Traps",
      ],
      teardownItems: [
        {
          itemId: "ola-electric-q4-promo-proposal",
          specimenSource: "synthetic-realistic",
          specimen:
            "PROMOTIONAL STRATEGY PROPOSAL — Q4 S1 Volume Push\nFrom: Growth Marketing Lead | To: Leadership Team\n\nTo close the 15,000-unit gap on our annual target, we recommend the following Q4 promotional blitz:\n\nClaim 1: Launch an immediate 20% festive price cut across all S1 models. First-order modeling indicates this will drive a 45% surge in checkout conversion this quarter and clear remaining factory inventory.\n\nClaim 2: Introduce 'Zero Down Payment + Instant Approval' financing with third-party NBFCs. Even if subprime default rates rise from 2% to 6%, the increased initial delivery volume improves our public market share optics.\n\nClaim 3: We have tracked cohort repurchase cycles for charging accessories and found that verified S1 owners with home Hyperchargers purchase 2.4x more maintenance packages within 12 months, so our current retention baseline is solid.\n\nClaim 4: Announce a 'Lowest Price of the Year Guaranteed' flash-sale clock on the homepage. This creates urgency that forces fence-sitters to purchase before month-end with no impact on next year's launch.\n\nRecommendation: Approve the 20% discount and zero-down financing campaign for immediate rollout.",
          prompt:
            "Which claims in the proposal suffer from first-order tunnel vision, ignoring downstream behavioral or economic fallout? Name each flawed claim, classify its defect, and explain the second- and third-order consequences using the 'And Then What?' drill.",
          answerKey: [
            {
              defect:
                "Claim 1 ('20% price cut to drive 45% surge and clear inventory') ignores that existing buyers who purchased at full price last month will demand refunds or flood social media with price-drop complaints, while future buyers learn to delay vehicle purchases until festive discount windows.",
              severity: "critical",
              whyItMatters:
                "This is the exact discounting trap highlighted in the lesson: first-order revenue rises today, but second-order effect trains buyers to wait for sales, structurally destroying full-price demand and crushing secondary resale value.",
              lessonRef: "Applying It to Common Marketing Traps: Discounting",
              owner: "you",
            },
            {
              defect:
                "Claim 2 ('Zero Down Payment with subprime default rising from 2% to 6% is worth it for market share optics') sacrifices long-term balance-sheet health for vanity metric optimization.",
              severity: "critical",
              whyItMatters:
                "Tripling the default rate on zero-down financing leads directly to 2nd-order vehicle repossession costs, credit partner disputes, and 3rd-order margin write-offs that far exceed the short-term gross margin of the incremental units sold.",
              lessonRef: "Applying It to Common Marketing Traps: 'Growth at all costs'",
              owner: "you",
            },
            {
              defect:
                "Claim 4 ('Flash-sale urgency clock with zero impact on next year's launch') ignores customer psychology: heavy discounting on a premium tech product anchors reference price permanently downward, making next year's full-price S2 launch feel overpriced by comparison.",
              severity: "moderate",
              whyItMatters:
                "The lesson emphasizes that first-order gains are not free: artificial discount urgency burns brand prestige and erodes consumer trust that the product was ever worth its original retail price.",
              lessonRef: "What It Actually Is: the consequences of the first-order effect are delayed and invisible until they land",
              owner: "you",
            },
          ],
          distractors: [
            "Claim 3 (charging accessory cohort repurchase data showing 2.4x attach rate) is a factual historical retention metric based on first-party customer behavior, not an unexamined assumption or first-order trap.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Workspace for annotating the proposal and drafting second-order consequences",
            why: "Free workspace to map cause-and-effect chains and evaluate strategic memos without paid software.",
            required: false,
            fallback: "Any plain text editor or notebook",
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "The free path is completely sufficient. Mental model teardowns rely on logical rigor, not paid tooling.",
      },
      deliverable:
        "A structured teardown classifying each proposal claim as either a robust strategic move or a first-order trap, with an explicit 3-step 'And Then What?' chain for each defect.",
      sampleOutput:
        "Worked example using a different mobility company (Uber ride-pass discounting): Claim 1 proposed a flat $4.99 monthly pass giving 20% off all rides to boost monthly active riders. First order: monthly active riders increase 28%. Second order ('and then what?'): riders take high-mileage, peak-hour trips that cost Uber $12 per ride while paying only $6, burning cash faster than rider acquisition payback. Third order ('and then what?'): drivers see lower per-trip earnings during promos and switch to competitor apps, causing ETAs to spike from 3 mins to 9 mins for full-paying business riders. The passing teardown flags Claim 1 because it optimized for a volume vanity metric while cannibalizing peak-hour unit margins and driver liquidity.",
      successCriteria: [
        "Correctly identifies all first-order trap claims in the proposal",
        "Constructs a valid 3-level 'And Then What?' chain for each identified defect",
        "Leaves the genuinely sound cohort-retention claim unflagged as a valid control",
        "Explains the downstream unit-economic or behavioral mechanism rather than offering generic criticism",
      ],
      portfolioReady: false,
    },
    {
      id: "second-order-thinking-impact-matrix",
      tier: "mini",
      archetype: "audit",
      title: "The 'And Then What?' Matrix: Auditing a Referral Growth Campaign",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Build a 3-tier consequence matrix in Google Sheets to audit an aggressive customer referral incentive, mapping immediate lifts, behavioral shifts, and systemic costs before budget approval.",
      companyId: "grab",
      scenario:
        "You are a marketing strategist at Grab assessing a proposed 'Double Your Referral' campaign across Southeast Asia (giving $10 ride credits to both referrer and referee). The growth squad forecasts a 40% surge in new user signups. Your task is to audit the decision using a Second-Order Impact Matrix to determine if the campaign creates sustainable acquisition or an exploitable incentive trap.",
      brief:
        "Follow the step-by-step procedure in Google Sheets to audit the referral campaign: map the 1st-order lift, the 2nd-order behavioral responses (fraudulent multi-accounting, non-incremental cannibalization), and the 3rd-order equilibrium (blended CAC inflation, driver payout friction), and define guardrails.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Playbook: The \"And Then What?\" Drill",
        "Applying It to Common Marketing Traps",
        "Common Mistakes",
      ],
      steps: [
        {
          stepId: "step-1-map-consequence-chain",
          concept: "The Playbook: The \"And Then What?\" Drill",
          lessonAnchor: "the-playbook-the-and-then-what-drill",
          theoryRecap:
            "Second-order thinking requires asking 'and then what?' at least twice beyond the immediate metric lift to uncover delayed behavioral reactions and unintended incentives.",
          question:
            "What are the specific 1st, 2nd, and 3rd order consequences of doubling the referral incentive, and what are their estimated probabilities and mitigations?",
          toolName: "Google Sheets",
          where: "Open Google Sheets and create a tab named 'Referral Impact Matrix'",
          procedure: [
            "Create columns: Level (1st/2nd/3rd Order), Actor (New User / Existing User / Fraudster / Driver), Consequence Description, Impact Direction (+/-), Probability (%), and Operational Guardrail.",
            "Document 1st-order effect: immediate +40% surge in app referral downloads this month (+).",
            "Document 2nd-order effects: coupon-forum sharing causing non-incremental signups (-), existing users creating burner SIM accounts to claim $10 credits (-), referee 30-day retention dropping below 12% (-).",
            "Document 3rd-order effects: blended CAC rising 35% above lifetime gross margin, promo budget exhausted before genuine organic word-of-mouth activates.",
            "Formulate 2 operational guardrails to prevent exploitation while preserving referral virality.",
          ],
          outputSample:
            "| Level | Actor | Consequence | Impact | Prob | Operational Guardrail |\n|---|---|---|---|---|---|\n| 1st Order | General Public | +40% referral signup surge in 30 days | +Gross Volume | 90% | Monitor acquisition run-rate |\n| 2nd Order | Deal Seekers | Users post codes on public discount aggregators | -CAC Quality | 75% | Invalidate referrals from public coupon domains |\n| 2nd Order | Multi-Accounters | Burner SIM account creation for $10 rides | -Promo Waste | 60% | Enforce device-ID fingerprinting & verified payment requirement |\n| 3rd Order | Unit Economics | Blended CAC doubles; 60-day cohort retention drops to 11% | -Net Margin | 65% | Gate referee payout behind completion of 2nd paid trip >$8 |",
          healthy:
            "Matrix evaluates at least three tiers of consequences with specific probability estimates and identified actor behaviors across the entire ecosystem.",
          unhealthy:
            "Matrix lists only the intended 1st-order upside and vague generic risks without detailing specific behavioral causal chains.",
          interpret:
            "If negative 2nd- and 3rd-order impacts carry >50% probability and erode net cohort margin, the incentive structure must be gated with behavioral guardrails before launch.",
          soWhat: [
            {
              symptom: "High probability of referral credit abuse on public coupon forums",
              action: "Add qualification gate: referral credit unlocks only after referee completes second paid ride >$8",
              effort: "30 min",
            },
            {
              symptom: "Referee 30-day retention drops below 15% across promo cohorts",
              action: "Replace single lump-sum $10 credit with staged $2.50 discount vouchers across rides 1 through 4",
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
            role: "Spreadsheet for building the 3-level Second-Order Impact Matrix",
            why: "Free and accessible spreadsheet tool for tabular risk and consequence modeling.",
            required: true,
            fallback: "Notion or any spreadsheet application",
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Google Sheets is free and fully featured for consequence modeling.",
      },
      deliverable:
        "A completed Second-Order Impact Matrix in Google Sheets with three consequence levels, assigned probabilities, and two operational guardrails.",
      sampleOutput:
        "Worked example for a different delivery company (Instacart grocery delivery referral bonus):\n| Level | Actor | Consequence | Impact | Prob | Operational Guardrail |\n|---|---|---|---|---|---|\n| 1st Order | Casual Shoppers | +35% referral signups in 14 days | +$140k GMV | 95% | Track baseline volume |\n| 2nd Order | Deal Seekers | Users create burner accounts with disposable emails | -$35k promo waste | 70% | Require phone SMS + card verification |\n| 2nd Order | Existing Loyalists | Heavy organic referrers exhaust friends list | -$12k future referrals | 45% | Cap at 5 referrals/month per account |\n| 3rd Order | Unit Economics | Blended CAC rises 22% due to zero-repeat promo hunters | Margin squeeze | 60% | Tie payout to $35+ basket size on 2nd order |",
      successCriteria: [
        "Maps at least 3 tiers of consequences across multiple ecosystem actors",
        "Assigns realistic probability weights (not 0% or 100% assumptions)",
        "Identifies at least one negative second-order behavioral shift",
        "Proposes actionable friction or qualification guardrails to preserve first-order upside",
      ],
      portfolioReady: false,
    },
  ],

  "base-rates-forecasting": [
    {
      id: "base-rates-forecasting-expansion-model",
      tier: "core",
      archetype: "forecast",
      title: "The Outside-View Forecast: Reference-Class Modeling for a New Market Launch",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Construct an outside-view forecast model in Google Sheets for a major regional market expansion, establishing the reference class distribution, calculating base rate quartiles, and constraining inside-view optimism to justifiable adjustments.",
      companyId: "ola-electric",
      scenario:
        "You are a senior marketing analyst at Ola Electric tasked with forecasting 90-day test-ride booking volumes and unit deliveries for an expansion into 25 Tier-2/Tier-3 cities across India. The regional sales director built an inside-view model projecting 12,000 bookings per city based on local showroom hype. You must build a reference-class forecast based on the actual distribution of Ola Electric's previous 80 city rollouts.",
      brief:
        "Using the lesson's 4-step playbook, establish the reference class of historical city rollouts, calculate the base rate (median, 25th percentile, 75th percentile), test whether the inside-view claims survive empirical benchmarks, and produce a calibrated range forecast.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Playbook: Four Steps",
        "What It Actually Is",
        "Why It Matters",
        "Common Mistakes",
      ],
      steps: [
        {
          stepId: "step-1-define-reference-class",
          concept: "The Playbook: Four Steps",
          lessonAnchor: "the-playbook-four-steps",
          theoryRecap:
            "Step 1 of reference-class forecasting requires selecting a reference class that is broad enough to provide statistical significance (at least 10–20 comparable cases) and narrow enough to share structural characteristics.",
          question:
            "What criteria define the reference class of comparable city rollouts, and what is the distribution of historical 90-day booking volumes?",
          toolName: "Google Sheets",
          where: "Google Sheets / Tab: Reference Class Data",
          procedure: [
            "Filter the historical city rollout dataset for Tier-2/Tier-3 demographic and charging infrastructure parity (minimum 15 comparable launches).",
            "Record 90-day booking volume, showroom footfall, and lead-to-delivery conversion for each city in the class.",
            "Calculate the 10th percentile, 25th percentile, median (50th), 75th percentile, and 90th percentile of the reference class using PERCENTILE.INC.",
            "Compare the internal sales forecast of 12,000 against the historical distribution.",
          ],
          outputSample:
            "REFERENCE CLASS DISTRIBUTION (Historical Tier-2/3 City Rollouts, n=24):\n- Minimum (P0): 1,850 bookings\n- 25th Percentile (P25): 3,200 bookings\n- Median (P50 Base Rate): 4,650 bookings\n- 75th Percentile (P75): 6,400 bookings\n- 90th Percentile (P90): 7,900 bookings\n- Maximum (P100): 8,850 bookings\n- Inside-View Proposal: 12,000 bookings (Exceeds P100 historical record by +35%)",
          healthy:
            "Reference class contains 15+ comparable historical launches with calculated distribution percentiles (P25, P50, P75).",
          unhealthy:
            "Forecast relies on a single 'best case' launch (reference class of one) or unweighted averages distorted by extreme outliers.",
          interpret:
            "If the proposed inside-view projection sits above the 90th percentile of historical rollouts, it requires extraordinary empirical justification rather than narrative enthusiasm.",
          soWhat: [
            {
              symptom: "Proposed target exceeds the 90th percentile of the reference class",
              action: "Anchor the baseline budget to the 50th percentile (median) and require proven leading indicators before unlocking Tier-3 growth budget",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-calculate-base-rates",
          concept: "What It Actually Is",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The outside view replaces bottom-up storytelling with the actual historical hit rate and conversion benchmarks across similar cohorts.",
          question:
            "What is the empirical base rate for top-of-funnel conversion from digital lead to showroom test ride in comparable expansion markets?",
          toolName: "Google Sheets",
          where: "Google Sheets / Tab: Conversion Base Rates",
          procedure: [
            "Calculate historical lead-to-test-ride conversion rate across the reference class: Median = 4.2%, Interquartile Range = 3.1% – 5.8%.",
            "Calculate test-ride-to-booking conversion rate: Median = 18.5%, Interquartile Range = 14.0% – 22.0%.",
            "Multiply the baseline lead volume by the median conversion base rates to establish the unadjusted outside-view delivery forecast.",
            "Identify the discrepancy between the unadjusted outside-view model and the inside-view target.",
          ],
          outputSample:
            "| Funnel Stage | Inside-View Assumption | Base Rate Median (P50) | Base Rate IQR (P25–P75) | Discrepancy |\n|---|---|---|---|---|\n| Digital Lead -> Test Ride | 8.5% | 4.2% | 3.1% – 5.8% | +102% over baseline |\n| Test Ride -> Paid Booking | 32.0% | 18.5% | 14.0% – 22.0% | +73% over baseline |\n| End-to-End Funnel Yield | 2.72% | 0.78% | 0.43% – 1.28% | 3.5x higher than historical median |",
          healthy:
            "Conversion assumptions are explicitly bounded by the historical P25–P75 interquartile range.",
          unhealthy:
            "Model assumes compounding top-decile performance at every stage of the funnel simultaneously.",
          interpret:
            "Assuming 90th percentile performance across three consecutive funnel stages implies a 1-in-1,000 event (0.10^3 = 0.001 probability).",
          soWhat: [
            {
              symptom: "Inside-view model assumes 8.5% lead-to-ride conversion (2x historical median)",
              action: "Reset planning baseline to 4.2% median and build sensitivity tables for 3.1% (downside) and 5.8% (upside)",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-quantify-adjustments",
          concept: "The Playbook: Four Steps",
          lessonAnchor: "the-playbook-four-steps",
          theoryRecap:
            "Step 3 permits adjustments to the base rate only for documented, measurable structural advantages, capping subjective optimism.",
          question:
            "Which specific differentiators justify an upward or downward adjustment from the base rate median, and by what quantified percentage?",
          toolName: "Google Sheets",
          where: "Google Sheets / Tab: Calibrated Forecast",
          procedure: [
            "Audit each claimed advantage from the inside-view pitch (brand awareness, charging network density, state subsidies).",
            "Reject non-measurable narrative claims ('higher team excitement', 'better creative vibe').",
            "Quantify valid structural differences: +15% for pre-established Hypercharger network density vs class average; -10% for lower state EV subsidy in target region; +5% for local festive timing.",
            "Compute net adjusted forecast (+10% over median base rate = 5,115 bookings) and establish an 80% confidence interval (P10 to P90: 2,600 to 7,200 bookings).",
          ],
          outputSample:
            "| Adjustment Factor | Inside-View Claim | Verified Evidence | Justified Modifier | Calibrated Impact |\n|---|---|---|---|---|\n| Charging Infrastructure | 'Every buyer has charging' | 3 Hyperchargers per city (vs 1.8 avg) | +15% | +698 bookings |\n| Regional Subsidy Headwind | Ignored | State EV subsidy 40% lower than Tier-1 | -10% | -465 bookings |\n| Brand Search Index | 'Everyone knows us' | Search volume index matches class avg | 0% (No adjustment) | 0 bookings |\n| Festive Season Timing | 'Huge holiday boost' | Historic Q4 lift across past launches | +5% | +233 bookings |\n| NET ADJUSTMENT | +158% (Story-based) | Quantified structural factors | +10% over Base Rate | 5,115 bookings (80% CI: 2,600 – 7,200) |",
          healthy:
            "Adjustments are backed by quantified structural differences with explicit downward modifiers where headwinds exist.",
          unhealthy:
            "Every single adjustment is positive with zero acknowledgment of regional friction or operational bottlenecks.",
          interpret:
            "A disciplined reference-class forecast typically adjusts the base rate by no more than ±20% to ±30% unless a foundational business model shift is proven.",
          soWhat: [
            {
              symptom: "Total net adjustment exceeds +50% over the base rate",
              action: "Cap initial manufacturing and showroom inventory at the +20% threshold with a 30-day flex replenishment contract",
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
            role: "Forecasting model workbook containing Reference Class data, Base Rate calculations, and Adjusted Forecast",
            why: "Standard spreadsheet environment for statistical distribution modeling and scenario analysis.",
            required: true,
            fallback: "Excel or any spreadsheet editor",
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Google Sheets handles all necessary statistical functions (PERCENTILE.INC, MEDIAN, QUARTILE) with zero paid add-ons.",
      },
      deliverable:
        "A complete 3-tab Reference-Class Forecasting Model in Google Sheets with a historical reference class distribution, conversion base rates, calibrated adjustments, and an 80% confidence interval.",
      sampleOutput:
        "Worked example for Freshworks (B2B SaaS product add-on launch):\nThe product team forecasted 1,500 enterprise add-on purchases in Q1 ($3.6M ARR) based on bottom-up TAM estimates. Rebuilding with Reference-Class Forecasting:\n1. Reference class: 12 previous product module launches across Freshdesk and Freshservice between 2018–2023.\n2. Base rate: Median 90-day attach rate was 3.4% of existing customer base (IQR: 2.1%–4.6%), translating to 410 accounts ($984k ARR).\n3. Calibrated adjustments: +20% for automated in-app upsell prompts (tested in pilot), +10% for sales incentive spiff, -15% for higher compliance review cycle in enterprise tier. Net adjustment: +15% over median.\n4. Final calibrated forecast: 472 accounts ($1.13M ARR) with an 80% confidence band of 320 to 650 accounts. Actual day-90 result landed at 495 accounts, validating the base-rate anchor.",
      successCriteria: [
        "Defines a statistically sound reference class with at least 10 comparable historical initiatives",
        "Calculates accurate distribution percentiles (P25, Median, P75) rather than relying on a simple arithmetic mean",
        "Audits and filters subjective inside-view claims, applying adjustments only to verified structural differences",
        "Produces an 80% confidence range (P10 to P90) rather than a single point prediction",
      ],
      portfolioReady: true,
      stretch:
        "Incorporate a Brier score tracking log to measure forecast accuracy across subsequent quarterly launches.",
    },
    {
      id: "base-rates-forecasting-campaign-audit",
      tier: "core",
      archetype: "audit",
      title: "Inside View vs. Outside View: Auditing Overconfident Campaign Forecasts",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Audit three multi-million-dollar marketing launch forecasts, identifying inside-view cognitive biases, unanchored conversion assumptions, and improper reference class selection.",
      companyId: "freshworks",
      scenario:
        "You are the VP of Marketing Strategy at Freshworks reviewing three quarterly campaign budget proposals submitted by different product marketing teams: an outbound enterprise ABM campaign, an organic inbound content hub, and a self-serve freemium conversion redesign. Each proposal promises aggressive revenue ROI, but several are classic examples of the planning fallacy.",
      brief:
        "Audit the three forecast proposals. For each specimen, identify which claims violate reference-class forecasting principles (e.g. Reference Class of One, adjusting for subjective hopes, assuming top-decile performance across all funnel stages) vs. which claims are properly anchored in historical base rates.",
      mode: "teardown",
      conceptsCovered: [
        "What It Actually Is",
        "Why It Matters",
        "The Playbook: Four Steps",
        "Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "freshworks-three-campaign-forecasts",
          specimenSource: "synthetic-realistic",
          specimen:
            "Q3 MARKETING BUDGET PROPOSALS — Executive Summary\n\nPROPOSAL A: Outbound Enterprise ABM (Target: Global 2000 IT)\n- Proposed Budget: $250,000\n- Forecast: 60 Enterprise Deals Closed ($1.8M ARR)\n- Reasoning: 'Last quarter we ran a pilot targeting 10 accounts and closed 2 ($60k ARR each). If we scale outreach to 500 accounts, we will easily close 60 deals at a 12% win rate because our product-market fit in IT service management is proven.'\n- Cold Outbound Response Rate Anchor: Model assumes a 1.8% cold meeting booking rate, which matches our historical median across 45 previous outbound campaigns.\n\nPROPOSAL B: Product-Led Organic SEO Content Hub\n- Proposed Budget: $180,000 (100 in-depth comparison articles)\n- Forecast: 50,000 Monthly Organic Visits within 60 days of publishing\n- Reasoning: 'The target keywords have a combined search volume of 180,000/mo. At a top-3 ranking CTR of 28%, we will capture 50,000 visits by month 2, generating 1,200 product trials.'\n\nPROPOSAL C: Self-Serve Freemium Onboarding Overhaul\n- Proposed Budget: $90,000 (UX redesign + interactive product tours)\n- Forecast: +80% increase in free-to-paid conversion (from 1.5% to 2.7%)\n- Reasoning: 'The new onboarding UI is significantly more modern, intuitive, and visually stunning. Team enthusiasm is unanimous, justifying an 80% conversion uplift.'\n- Testing Plan: 14-day 50/50 holdout A/B test with pre-registered sample size to measure actual vs forecast conversion lift.",
          prompt:
            "Which specific forecasting assumptions in Campaigns A, B, and C suffer from the planning fallacy or inside-view distortions? Identify the defects, explain why they violate reference-class principles, and identify which assumptions are legitimate base-rate anchors.",
          answerKey: [
            {
              defect:
                "Proposal A assumes a 12% demo-to-close rate on cold outbound ABM based entirely on a 10-account pilot (closing 2 deals), which is a textbook 'Reference Class of One' (Mistake 1).",
              severity: "critical",
              whyItMatters:
                "Extrapolating a small pilot's 20% win rate to 500 cold enterprise accounts ignores that pilots target warm, friendly accounts. The enterprise B2B base rate for cold ABM win rates is 2% to 4%, not 12%.",
              lessonRef: "Common Mistakes, Mistake 1: Reference class of one",
              owner: "you",
            },
            {
              defect:
                "Proposal B assumes 50,000 organic visits within 60 days by multiplying raw keyword volume by top-rank CTR, completely ignoring the outside-view ranking distribution and indexing timeline.",
              severity: "critical",
              whyItMatters:
                "The base rate for new content indexing and ranking indicates that less than 5.7% of newly published pages reach Google page 1 within 90 days (Ahrefs benchmark). Assuming instant position 1–3 ranking is pure inside-view delusion.",
              lessonRef: "What It Actually Is: the outside view places your project in a reference class of similar projects and starts from that class's actual track record",
              owner: "you",
            },
            {
              defect:
                "Proposal C projects an +80% conversion lift based on 'modern, visually stunning UI and unanimous team enthusiasm', which directly violates Mistake 2 (Adjusting for hopes, not differences).",
              severity: "critical",
              whyItMatters:
                "Kohavi's controlled experiment base rates prove that 80%+ of UX redesigns have zero or negative impact on conversion. Adjustments must be based on tested behavioral friction removal, not design aesthetics or team excitement.",
              lessonRef: "Common Mistakes, Mistake 2: Adjusting for hopes, not differences",
              owner: "you",
            },
          ],
          distractors: [
            "Proposal A's cold meeting response rate of 1.8% is explicitly anchored to the historical median of 45 previous outbound campaigns, which is a textbook correct outside-view base rate anchor.",
            "Proposal C's 14-day holdout A/B test with pre-registered sample size is a correct calibration mechanism (Step 4 / Key Takeaways), allowing the team to measure actual lift against prediction.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Audit workspace to document defect classifications and forecast calibrations",
            why: "Provides structured document layout for strategic teardowns and evaluations without paid tools.",
            required: false,
            fallback: "Google Docs or any markdown/text editor",
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "No paid tools required. The audit evaluates analytical judgment and reasoning.",
      },
      deliverable:
        "A written audit report classifying the forecast defects across all three campaign proposals, citing the specific base-rate principle violated and providing a calibrated baseline for each.",
      sampleOutput:
        "Worked example for an email platform (Klaviyo campaign audit):\nAn ecommerce brand's email team submitted a Black Friday forecast predicting a 45% open rate and 8% click-to-purchase conversion based on their top performing flash sale from July. Audit finding: Defect flagged under Mistake 1 (Reference Class of One) and Inside-View overconfidence. The historical base rate across 12 Q4 peak periods for this industry sector shows median open rates drop to 18.2% (due to inbox congestion) and conversion averages 2.4%. The passing audit replaces the 8% assumption with the 2.4% baseline, adjusting upward only by +0.5% for proven SMS segmentation, resulting in a realistic revenue forecast of $320k rather than an unachievable $1.1M.",
      successCriteria: [
        "Correctly identifies all 3 forecasting defects (Reference Class of One, Funnel Stacking Overconfidence, Hopes-Based Adjustment)",
        "Leaves the 2 sound base-rate and holdout calibration elements unflagged as distractors",
        "Explains the exact statistical or behavioral flaw in each defective forecast assumption",
        "Provides a calibrated outside-view correction for each flagged proposal",
      ],
      portfolioReady: false,
    },
  ],

  "bayesian-updating": [
    {
      id: "bayesian-priors-calibration-drill",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Name Your Prior: A Calibration Drill on a Real Test Result",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real A/B test result with sample size and p-value, state a numeric prior before seeing the outcome framing, then apply the lesson's three-step update process to land on a calibrated new belief.",
      companyId: "klaviyo",
      scenario:
        "You're a lifecycle marketing analyst at Klaviyo evaluating whether a new abandoned-cart email subject line should become the default template offered to every client account.",
      brief:
        "State your prior with a number, weigh the evidence honestly, and update proportionally instead of shipping on the raw win.",
      mode: "calibration",
      conceptsCovered: [
        "Naming your prior with a probability",
        "Weighing evidence strength before updating",
      ],
      steps: [
        {
          stepId: "step-1-name-prior",
          concept: "Naming your prior with a probability",
          lessonAnchor: "the-playbook-three-explicit-steps",
          theoryRecap:
            "The lesson's Step 1 says: before evidence lands, put a percentage on what you already believed and how strongly.",
          question:
            "Before you look at the test data below, what is your prior? Current subject line: 'You left something behind.' Proposed: 'Still thinking it over? Your cart's waiting.' Internal copywriters are confident the new one wins because it feels more conversational. State a prior probability that the new line beats the control on open rate, before reading further.",
          toolName: "Google Sheets",
          where:
            "Open the shared 'Q3 Email Tests' sheet, tab 'abandoned-cart-subject-line'.",
          procedure: [
            "Write your prior probability (e.g. 55%) in cell B2 before opening the results tab",
            "Open the results tab: control 21.4% open rate (n=8,200), variant 23.1% open rate (n=8,150), p=0.09",
            "Note that 'conversational' subject line rewrites have a mixed track record in the company's own test archive: 6 wins, 9 losses over two years",
          ],
          outputSample:
            "PRIOR (before results): 55% confident new line wins\n\nRESULT\n  Control:  21.4% open rate, n=8,200\n  Variant:  23.1% open rate, n=8,150\n  p-value:  0.09 (not significant at p<0.05)\n\nHOUSE TRACK RECORD\n  Conversational rewrites: 6 wins / 15 tested (40%) over 2 years",
          healthy:
            "Recognizing that a p=0.09 result on a subject line category with a 40% historical win rate is weak evidence against a roughly 50/50 prior, and holding off on a full rollout.",
          unhealthy:
            "Treating the 1.7-point open-rate lift as a confirmed win because it 'felt right' to the copywriters, and rolling it out to every client account.",
          interpret:
            "A non-significant result on a category with a below-50% historical win rate should nudge your prior only slightly, not flip it.",
          soWhat: [
            {
              symptom: "A test result with p>0.05 gets shipped as 'the new default' anyway",
              action: "Require p<0.05 or a second confirming test before any subject-line default changes",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-weigh-update",
          concept: "Weighing evidence strength before updating",
          lessonAnchor: "the-playbook-three-explicit-steps",
          theoryRecap:
            "Step 2 and 3 of the lesson: rate how much the evidence actually tells you, then move your belief proportionally, not to 0% or 100%.",
          question:
            "Given the prior you stated, the p=0.09 result, and the 40% historical win rate for this style of rewrite, what is your updated probability that the new subject line is genuinely better? Propose a next action.",
          toolName: "Google Sheets",
          where: "Same sheet, tab 'abandoned-cart-subject-line', cell B3.",
          procedure: [
            "Rate the evidence strength as weak, moderate, or strong given n≈8,200 per arm and p=0.09",
            "Write your updated probability in cell B3, showing the move from your Step 1 prior",
            "Recommend either: ship now, re-run at 3x sample size, or discard, with a one-sentence reason",
          ],
          outputSample:
            "UPDATE\n  Prior: 55%\n  Evidence strength: weak-to-moderate (p=0.09, in-line with historical base rate)\n  Updated belief: 58%\n\nRECOMMENDATION: Re-run at ~25,000 sessions per arm before touching the default template.\nReason: the move from 55% to 58% is too small to justify rolling out to every client account.",
          healthy:
            "An 8,200-session test with p=0.09 moves the prior by single digits, and the team re-tests at scale before touching a shared default.",
          unhealthy:
            "The same result gets summarized in a Slack message as 'new subject line wins' and shipped as the default that day.",
          interpret:
            "Small proportional updates are the correct output of weak evidence, not a failure of the test.",
          soWhat: [
            {
              symptom: "Team debates feel like 'my opinion vs. your opinion' with no shared number",
              action: "Require every test readout to state prior%, evidence strength, and updated% in writing",
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
            role: "Log the prior, the result, and the updated probability side by side",
            why: "Free, no account friction, and forces the prior to be written down before the result is seen",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page calibration memo: stated prior, evidence-strength rating, updated probability, and a ship / re-test / discard decision.",
      sampleOutput:
        "Warby Parker, homepage hero-image test, calibration memo (excerpt)\n\nPrior: 40% confident the lifestyle photo beats the product-on-white shot\nEvidence: n=14,000/arm, +2.1pp add-to-cart rate, p=0.03\nEvidence strength: moderate (significant, but a single test)\nUpdated belief: 62%\nDecision: Ship to 50% of traffic for one more cycle before full rollout, given only one confirming test exists.",
      successCriteria: [
        "States a numeric prior before citing the result",
        "Rates evidence strength using sample size and p-value, not p-value alone",
        "Updated probability moves proportionally, not to 0% or 100%",
        "Recommendation matches the size of the update (small update -> no full rollout)",
      ],
      portfolioReady: true,
    },
    {
      id: "bayesian-quarterly-test-portfolio-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Forecasting Which Q3 Test Wins Will Hold at 10x Traffic",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a portfolio of 6 completed A/B tests with sample sizes, p-values, and effect sizes, forecast which results will replicate at national scale and which are noise, using proportional Bayesian updating instead of ranking by p-value alone.",
      companyId: "zomato",
      scenario:
        "You're a growth analyst at Zomato reviewing a quarter's worth of completed onboarding-flow experiments before recommending which changes get rolled out from a 3-city pilot to the entire country.",
      brief:
        "Score each test's prior plausibility and evidence strength, then forecast which changes will hold up when traffic scales roughly 10x.",
      mode: "diagnostic",
      conceptsCovered: [
        "Rating evidence strength by sample size and p-value together",
        "Distinguishing a plausible prior from a familiar-but-untested assumption",
        "Forecasting replication before a national rollout",
      ],
      steps: [
        {
          stepId: "step-1-rate-priors",
          concept: "Distinguishing a plausible prior from a familiar-but-untested assumption",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson warns that some priors deserve high confidence while others just feel familiar. Confusing 'true' with 'familiar' is a common marketing failure.",
          question:
            "For each of the 6 tests below, rate your prior confidence (before seeing results) that the change would help, and note whether that confidence is based on real prior data or just 'it seems obviously better.'",
          toolName: "Google Sheets",
          where: "Import onboarding-tests-q3.csv into a new sheet, columns A-F.",
          procedure: [
            "List all 6 tests: OTP-vs-social login, single-page vs. multi-step signup, restaurant-photo-first vs. menu-first browse, location-permission timing, referral-code prompt placement, welcome-offer banner copy",
            "For each, write a prior confidence (%) and mark the basis as 'prior data' or 'assumption only'",
            "Flag any test where confidence is high but the basis is 'assumption only', these are the highest-risk overreaction candidates",
          ],
          outputSample:
            "TEST                          PRIOR%  BASIS\nOTP-vs-social login            55%    assumption only\nSingle-page signup              70%    prior data (2 past tests)\nPhoto-first browse               50%    assumption only\nLocation-permission timing      60%    prior data (1 past test)\nReferral-code placement          45%    assumption only\nWelcome-offer banner copy        50%    assumption only",
          healthy:
            "4 of 6 tests are flagged 'assumption only,' so the team plans to weight their results more cautiously regardless of how large the effect looks.",
          unhealthy:
            "All 6 tests get equal trust because 'we ran a proper A/B test,' ignoring that most priors were pure guesses.",
          interpret:
            "A test built on an assumption-only prior needs stronger evidence to earn the same updated confidence as one built on real prior data.",
          soWhat: [
            {
              symptom: "Every winning test gets rolled out at the same speed regardless of how it was set up",
              action: "Tag each test's prior basis before results are read, and slow-roll assumption-only wins",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-weigh-portfolio-evidence",
          concept: "Rating evidence strength by sample size and p-value together",
          lessonAnchor: "the-playbook-three-explicit-steps",
          theoryRecap:
            "Step 2 of the lesson: a test with 500 visitors is much weaker evidence than one with 50,000, regardless of the p-value it produced.",
          question:
            "Given the results below, rate each test's evidence strength as weak, moderate, or strong, factoring in BOTH sample size and p-value, not p-value alone.",
          toolName: "Google Sheets",
          where: "Same sheet, columns G-I.",
          procedure: [
            "Record each test's sample size per arm and p-value from the results tab",
            "Rate evidence strength: weak (n<2,000 or p>0.05), moderate (n=2,000-10,000 and p<0.05), strong (n>10,000 and p<0.01)",
            "Cross-reference against Step 1's prior basis to find tests where weak evidence met an assumption-only prior",
          ],
          outputSample:
            "TEST                          N/ARM   P-VALUE   STRENGTH\nOTP-vs-social login            1,400   0.04      weak (small n)\nSingle-page signup             22,000  0.001     strong\nPhoto-first browse               980   0.03      weak (small n)\nLocation-permission timing     18,500  0.02      strong\nReferral-code placement        3,200   0.06      weak (not sig.)\nWelcome-offer banner copy      15,200  0.15      weak (not sig.)",
          healthy:
            "Photo-first browse (weak evidence, assumption-only prior) is flagged as the riskiest 'win' to scale, even though its p-value looks significant.",
          unhealthy:
            "Photo-first browse gets rolled out nationally first because its p=0.03 looked cleaner than the 'strong' tests' more complex readouts.",
          interpret:
            "A statistically significant result from 980 users on an assumption-only prior deserves a small update and a re-test, not a national rollout.",
          soWhat: [
            {
              symptom: "Rollout order is decided by whichever test 'felt' most convincing in the readout meeting",
              action: "Rank rollout order by combined prior-basis + evidence-strength score, not by p-value alone",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-forecast-replication",
          concept: "Forecasting replication before a national rollout",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 2: treating p<0.05 as truth ignores that running 20 tests should produce roughly one false positive by chance alone, exactly what a 6-test portfolio risks.",
          question:
            "With 6 tests run this quarter and 4 showing p<0.05, roughly how many of those 4 'wins' would you expect to be false positives by chance alone, and which specific test is the most likely candidate to not replicate at 10x traffic?",
          toolName: "Google Sheets",
          where: "Same sheet, summary row at the bottom.",
          procedure: [
            "Apply the 1-in-20 false-positive base rate to the 4 significant results to estimate expected false positives",
            "Cross-reference the false-positive risk against Step 1's assumption-only priors and Step 2's weak-evidence flags",
            "Name the single test most likely to fail to replicate, and propose a confirming re-test before national rollout",
          ],
          outputSample:
            "4 of 6 tests hit p<0.05. At a 1-in-20 base rate, roughly 0.2-0.3 of these could be chance, but 'photo-first browse' carries the compounded risk: assumption-only prior AND small sample (n=980) AND is the only 'weak' test that still cleared p<0.05.\n\nFORECAST: Single-page signup and location-permission timing (both strong evidence, prior-data-backed) are safe to roll out nationally now.\nPhoto-first browse needs a confirming re-test at 10,000+ sessions per arm before national rollout, it is the most likely false positive in this batch.",
          healthy:
            "The team ships the 2 strong-evidence tests immediately and holds the weak-evidence 'win' for a confirming test before it touches the whole country.",
          unhealthy:
            "All 4 significant tests roll out to 100% of national traffic simultaneously because each individually cleared p<0.05.",
          interpret:
            "A portfolio view catches false-positive risk that reading each test in isolation misses entirely.",
          soWhat: [
            {
              symptom: "Multiple 'winning' tests from the same quarter later get quietly reverted",
              action: "Review each quarter's wins as a portfolio, not one at a time, and flag the false-positive-risk math before rollout",
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
            role: "Track priors, evidence ratings, and rollout forecasts across the whole test portfolio",
            why: "Free, and a portfolio table is exactly what a spreadsheet is built for",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull actual session counts per test arm to confirm the sample sizes used in the forecast",
            why: "Free tier covers this volume of event data",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A portfolio forecast table ranking all 6 tests by prior basis + evidence strength, with an explicit national-rollout recommendation per test.",
      sampleOutput:
        "Squarespace, Q2 onboarding test portfolio, forecast excerpt\n\nTest: 'Free trial length: 14 vs. 30 days'\nPrior: 65% (prior data from 2023 pricing test)\nEvidence: n=19,000/arm, p=0.008, strong\nForecast: High confidence this replicates at scale. Roll out nationally.\n\nTest: 'Template gallery sort order'\nPrior: 50% (assumption only)\nEvidence: n=1,100/arm, p=0.04, weak (small n)\nForecast: Likely a false positive. Re-test at 10x sample before touching the default.",
      successCriteria: [
        "Every test gets a prior-basis tag (prior data vs. assumption only)",
        "Evidence strength rating uses both sample size and p-value",
        "Applies the 1-in-20 false-positive base rate to the set of significant results",
        "Names a specific highest-risk test with a reasoned justification, not just the lowest p-value",
      ],
      portfolioReady: true,
    },
  ],
  "goodharts-law": [
    {
      id: "goodharts-law-kpi-audit",
      tier: "mini",
      archetype: "audit",
      title: "The KPI Audit: Spotting Which Dashboard Metrics Are Already Gamed",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 8-metric growth dashboard, identify which metrics are being optimized in a way that has decoupled them from the real outcome they were meant to represent, and pair each with a guardrail.",
      companyId: "duolingo",
      scenario:
        "You're a marketing ops analyst at Duolingo reviewing the growth team's dashboard before a quarterly business review, where 3 of the 8 metrics are about to become official OKR targets.",
      brief:
        "For each metric, ask 'if this metric hit its target, would the real outcome necessarily improve?' Flag the gameable ones and pair each with a guardrail.",
      mode: "diagnostic",
      conceptsCovered: [
        "Identifying a proxy metric detached from the real outcome",
        "Pairing a target metric with a guardrail metric",
      ],
      steps: [
        {
          stepId: "step-1-flag-proxies",
          concept: "Identifying a proxy metric detached from the real outcome",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's core claim: as soon as a team knows what it's measured on, it optimizes the measurement, not the goal the measurement was supposed to represent.",
          question:
            "Below are the 8 metrics on the dashboard. For each, name the real outcome it's supposed to be a proxy for, and mark whether it could hit its target without that outcome improving.",
          toolName: "Looker Studio",
          where: "Open the 'Growth QBR Dashboard' report, review the 8 headline tiles.",
          procedure: [
            "List all 8 metrics: daily app opens, streak-notification click rate, lesson-start count, day-7 retention, referral link shares, push-opt-in rate, paid-install CAC, subscription free-trial starts",
            "For each, write the real outcome it should proxy (e.g. 'lesson-start count' should proxy 'people are actually learning')",
            "Mark each GAMEABLE or SOLID based on whether the metric can rise without the real outcome improving",
          ],
          outputSample:
            "METRIC                       REAL OUTCOME PROXIED           GAMEABLE?\nDaily app opens              Active learning                  YES, a notification spam campaign inflates this without any learning\nStreak-notification CTR      Habit formation                  YES, alarming subject lines raise CTR without habit forming\nLesson-start count           Learning progress                YES, can rise while lesson-complete count falls\nDay-7 retention               Long-term engagement            SOLID, hard to fake without real return visits\nReferral link shares          Organic growth                   YES, incentive-only shares don't convert to real users\nPush opt-in rate               Notification reach              SOLID, but not tied to any learning outcome\nPaid-install CAC               Efficient paid growth            SOLID if install quality is also tracked\nSubscription trial starts     Revenue intent                   YES, aggressive trial prompts inflate starts without paid conversion",
          healthy:
            "5 of 8 metrics get flagged as gameable, and the team stops proposing 'daily app opens' as a standalone Q4 OKR target.",
          unhealthy:
            "The 3 easiest-to-move metrics (app opens, lesson starts, trial starts) get chosen as OKR targets specifically because they're easy to move.",
          interpret:
            "A metric being easy to hit is often a sign it is easy to game, not a sign it is a good target.",
          soWhat: [
            {
              symptom: "A metric keeps hitting target every quarter but 'doesn't feel like it's moving the business'",
              action: "Run this gameable/solid audit on any metric before it becomes an official OKR target",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-guardrails",
          concept: "Pairing a target metric with a guardrail metric",
          lessonAnchor: "the-playbook-metrics-that-survive-being-targeted",
          theoryRecap:
            "Rule 3 of the lesson's playbook: for every growth target, add a guardrail metric that catches the most likely gaming move.",
          question:
            "The QBR wants to set 'lesson-start count' as the official Q4 growth target. Propose a specific guardrail metric and threshold that would catch the most obvious way to game it.",
          toolName: "Looker Studio",
          where: "Same report, add a guardrail tile next to the proposed target tile.",
          procedure: [
            "Identify the easiest way to inflate lesson-start count without real learning (e.g. auto-starting a lesson on app open)",
            "Propose a guardrail metric that would fall if that gaming move were used (e.g. lesson-completion rate)",
            "Set a specific guardrail threshold: 'lesson-completion rate cannot fall more than X points while lesson-starts rises'",
          ],
          outputSample:
            "TARGET: Lesson-start count, +25% by end of Q4\nEASIEST GAME: Auto-surface a lesson card on every app open, inflating starts with no intent to finish\nGUARDRAIL: Lesson-completion rate (starts that reach 100%) cannot fall more than 5 percentage points from the current 68% baseline while lesson-starts grows\nIF TRIPPED: Pause the auto-surface feature and investigate before continuing to chase the lesson-start target",
          healthy:
            "The QBR ships 'lesson-starts + completion-rate guardrail' as a paired target, and product declines to ship the auto-surface feature once its guardrail impact is modeled.",
          unhealthy:
            "'Lesson-start count' ships alone as the Q4 OKR, and the auto-surface feature ships in week 2 because it's the fastest way to hit the number.",
          interpret:
            "A guardrail only works if it is written down and monitored before the target ships, not added after the metric gets gamed.",
          soWhat: [
            {
              symptom: "A metric hit its target but a related quality signal quietly dropped in the same period",
              action: "Add the guardrail metric to the same dashboard tile as the target, not a separate report nobody checks",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Looker Studio",
            role: "Build the 8-metric audit view and the paired target-plus-guardrail tile",
            why: "Free, and connects directly to the underlying GA4/product data most teams already have",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the gameable/solid audit table",
            why: "Free and simple for an 8-row qualitative audit",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A dashboard audit table (metric, real outcome proxied, gameable Y/N) plus one paired target-and-guardrail proposal.",
      sampleOutput:
        "Instacart, delivery-ops dashboard audit (excerpt)\n\nMETRIC: On-time delivery rate\nREAL OUTCOME PROXIED: Customer satisfaction with delivery\nGAMEABLE: YES, shoppers can mark 'delivered' early to beat the clock\nGUARDRAIL PROPOSED: Pair with post-delivery CSAT score; on-time rate improvements that coincide with a CSAT drop of more than 3 points trigger a review of delivery-time logging.",
      successCriteria: [
        "All 8 metrics get a real-outcome-proxied statement, not just a gameable/solid label",
        "At least 4 of 8 metrics correctly flagged gameable with a specific gaming mechanism named",
        "Guardrail proposal names a concrete threshold, not just 'monitor closely'",
      ],
      portfolioReady: true,
    },
    {
      id: "goodharts-law-mql-quota-calibration",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Calibrating a Growth Target Before It Gets Gamed",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a proposed 'double MQLs by Q4' target with 6 months of historical MQL-to-SQL conversion data, calibrate a paired target that survives being gamed instead of shipping the raw volume number.",
      companyId: "lenskart",
      scenario:
        "You're the demand-gen lead at Lenskart and the CMO wants to double marketing-qualified leads (MQLs) by Q4, from 240/month to 480/month. You have six months of historical MQL-to-SQL conversion data to work from.",
      brief:
        "Model what happens to conversion rate if MQL volume doubles at the current qualification bar, then propose a paired target with a guardrail that keeps quality from collapsing.",
      mode: "calibration",
      conceptsCovered: [
        "Modeling the gaming risk of a raw volume target",
        "Designing a paired target that moves closer to the real business outcome",
      ],
      steps: [
        {
          stepId: "step-1-model-gaming-risk",
          concept: "Modeling the gaming risk of a raw volume target",
          lessonAnchor: "a-real-example",
          theoryRecap:
            "The lesson's real example: a team told to double SQLs hit the number by loosening qualification, and close rate fell from 22% to 11%, with net revenue actually dropping.",
          question:
            "Given the historical data below (240 MQLs/month, 35% MQL-to-SQL rate, 20% SQL-to-close rate), what is the most likely way the team hits 480 MQLs/month if the qualification bar is the only lever available, and what happens to downstream conversion if they use it?",
          toolName: "Google Sheets",
          where: "Open 'MQL Historical Data' sheet, review the last 6 months.",
          procedure: [
            "Record the current funnel: 240 MQLs -> 84 SQLs (35%) -> 17 closed-won (20% of SQL)",
            "Identify the fastest lever to double MQL count: lowering the lead-score threshold that defines 'qualified'",
            "Estimate the funnel if MQL count doubles via a lowered bar but downstream conversion rates fall proportionally to lead quality (assume MQL-to-SQL rate roughly halves to 18%)",
          ],
          outputSample:
            "CURRENT FUNNEL (monthly)\n  240 MQL -> 84 SQL (35%) -> 17 closed-won (20% of SQL)\n\nIF MQL BAR IS LOWERED TO HIT 480/MONTH\n  480 MQL -> ~86 SQL (18%, lower-quality leads convert worse) -> ~14 closed-won (16% of SQL, sales trusts these leads less)\n\nRESULT: MQL count doubles, but closed-won deals FALL from 17 to ~14/month despite 'hitting' the target.",
          healthy:
            "The model is built and shown to the CMO before the target ships, changing the conversation from 'can we hit 480' to 'what target actually grows revenue.'",
          unhealthy:
            "The 480 target ships as-is, and six months later someone asks why 'MQLs doubled but the pipeline looks the same.'",
          interpret:
            "A volume target with no downstream guardrail predictably gets hit by lowering quality, this is modelable in advance, not a surprise after the fact.",
          soWhat: [
            {
              symptom: "A leadership target is set as a raw volume number with no mention of the conversion funnel below it",
              action: "Model the funnel impact of the easiest gaming move before the target is finalized, not after it's missed",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-paired-target",
          concept: "Designing a paired target that moves closer to the real business outcome",
          lessonAnchor: "the-playbook-metrics-that-survive-being-targeted",
          theoryRecap:
            "Rule 2 of the lesson's playbook: move the target closer to the real outcome you have data for. Revenue is harder to game than MQL count.",
          question:
            "Propose a revised Q4 target for the CMO that still shows growth ambition but is paired with a guardrail on closed-won deals or close rate, so hitting the number can't happen by lowering quality alone.",
          toolName: "Google Sheets",
          where: "Same sheet, new tab 'Revised Q4 Target Proposal'.",
          procedure: [
            "Propose an MQL growth number that is ambitious but realistic (e.g. +50% instead of +100%) at the current qualification bar",
            "Pair it with a guardrail: 'MQL-to-SQL conversion rate cannot fall below 30% (down from 35%, allowing some natural variance)'",
            "State the projected closed-won number under the paired target, and compare it to the un-paired 480-MQL scenario from Step 1",
          ],
          outputSample:
            "REVISED PROPOSAL\n  Target: 360 MQLs/month (+50%, not +100%), at the current qualification bar\n  Guardrail: MQL-to-SQL rate must stay at or above 30% (baseline 35%)\n  Projected: 360 MQL -> ~113 SQL (31%) -> ~23 closed-won (20%)\n\nCOMPARISON\n  Raw 480-MQL target (ungated): ~14 closed-won/month\n  Paired 360-MQL target (guardrailed): ~23 closed-won/month\n\nThe smaller, guardrailed target produces MORE actual revenue-generating deals.",
          healthy:
            "The CMO signs off on the paired 360-MQL/30%-guardrail target after seeing the closed-won comparison table.",
          unhealthy:
            "The CMO keeps the 480 number because it 'sounds more ambitious' without seeing the downstream deal-count comparison.",
          interpret:
            "A target's ambition should be judged by its effect on the real outcome, not by the size of the headline number.",
          soWhat: [
            {
              symptom: "A leadership target gets set purely by how big the percentage increase sounds",
              action: "Always attach a projected real-outcome number (deals, revenue) next to any proxy-metric target before it ships",
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
            role: "Model the current funnel, the gaming-risk scenario, and the paired-target proposal",
            why: "Free, and a funnel model at this scale needs nothing more than formulas",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page target proposal memo: current funnel, gaming-risk model, and a revised paired target with a projected closed-won comparison.",
      sampleOutput:
        "Zendesk, support-ticket-deflection target proposal (excerpt)\n\nCURRENT: 1,200 tickets/month, 42% self-service deflection rate\nRAW TARGET REJECTED: '60% deflection by Q4' modeled to encourage agents hiding the 'contact us' link, projected CSAT drop of 6 points\nPAIRED TARGET PROPOSED: '50% deflection, guardrail: CSAT cannot fall below 4.2/5' -> projected deflection gain achieved without the CSAT risk",
      successCriteria: [
        "Funnel model shows the specific gaming move and its downstream effect on closed-won count",
        "Paired target includes a numeric guardrail, not just 'watch quality closely'",
        "Final comparison shows the guardrailed target produces a better real-outcome number than the raw target",
      ],
      portfolioReady: true,
    },
  ],
};
