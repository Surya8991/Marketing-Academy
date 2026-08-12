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
};
