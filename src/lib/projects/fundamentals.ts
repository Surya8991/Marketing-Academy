/**
 * Practice projects for the `fundamentals` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * Coverage in this file:
 * - "what-is-marketing": explicit no-project verdict (PROJECTS_PLAN.md
 *   11.6, part of the "definitional tail" that has no honest hands-on
 *   practice shape).
 * - "value-proposition": build-the-asset (core) + head-to-head (mini).
 * - "marketing-math": audit/diagnostic (core) + forecast/drill (mini).
 * - "product-market-fit": audit/diagnostic (core) + teardown (mini).
 *
 * Real numbers used below are traceable to the actual CSV rows in
 * public/project-data/ad-account-export.csv (verified by summing the
 * `cost` and `conversions` columns for the stated ad_group + date range)
 * and public/project-data/cohort-retention.csv and
 * public/project-data/funnel-data.csv (verified by summing the relevant
 * columns for the stated grouping). Everything else (finance inputs like
 * gross margin, monthly churn, plan price) is explicitly given scenario
 * context, the same way paid-ads.ts's £600 budget and 14-day window are
 * given context rather than dataset-sourced.
 */

import type { Project } from "@/lib/projects/types";

export const FUNDAMENTALS_PROJECTS: Record<string, Project[]> = {
  // -------------------------------------------------------------------
  // No honest hands-on practice shape for a pure definitional lesson.
  // Explicit, deliberate empty array per PROJECTS_PLAN.md 11.6.
  // -------------------------------------------------------------------
  "what-is-marketing": [],

  // -------------------------------------------------------------------
  // value-proposition
  // -------------------------------------------------------------------
  "value-proposition": [
    {
      id: "value-proposition-seed-deck-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Seed Deck Value Prop: Writing One a VC Can't Poke Holes In",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Write a complete, four-part value proposition for a challenger personal-care brand using the lesson's own framework, then pressure-test it against the specificity, so-what, and steal-their-language checks until it could not be mistaken for a competitor's.",
      companyId: "native-deodorant",
      scenario:
        "You're the first marketing hire at a two-person natural deodorant startup, built in the scrappy spirit of Native's early years: $500K raised, no agency, a founder who runs the Instagram account personally. Seed investors keep asking the same question in every meeting: \"why would someone switch from what they already use?\" Nobody on the team can answer it in one breath yet.",
      brief:
        "Follow the lesson's five-step draft process in order, do not skip to step 3. You'll end with one paragraph, but the real deliverable is being able to defend each of its four parts separately when a VC pokes at any single word.",
      mode: "build",
      conceptsCovered: [
        "How It Works",
        "How to Write Your First Draft",
        "Common Mistakes",
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you draft, cut, and version the value proposition",
            why: "Free tier is plenty for a single-paragraph deliverable with a version history you can compare against your first draft.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Docs",
            role: "A plain, zero-setup alternative to Notion for the same drafting task",
            why: "Not in the tools directory, genuinely free, no account beyond a Google login, works identically for this exercise.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://docs.google.com",
            inlinePricing: "Free",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This project needs nothing paid. The entire deliverable is a paragraph of writing, judged against the criteria below, not against production quality.",
      },
      deliverable:
        "A single 60-90 word value proposition for the deodorant brand, plus one written line for each of the four framework parts (segment, problem, outcome, differentiator) that assembled into it.",
      sampleOutput:
        "Here's what a first draft looks like when the four-part framework is followed all the way through, using RXBAR's real ingredient-first positioning as the model (a worked example built the same way you're about to build yours, not RXBAR's actual marketing copy):\n\n  Segment:        Home cooks who read the ingredient panel before buying a\n                   snack bar and feel burned by \"natural\" labels that turn\n                   out to be marketing.\n  Problem:        Every bar on the shelf hides its real ingredients behind\n                   flavor names and health claims, so you can't tell what\n                   you're eating without downloading an app to scan it.\n  Outcome:        You read the full recipe in four seconds, from the front\n                   of the wrapper, before you've even picked it up.\n  Differentiator: Everyone else prints the health claim on the front and\n                   the ingredient list on the back in six-point type; this\n                   brand prints egg whites, dates, almonds where the health\n                   claim usually goes.\n\n  Assembled: \"For people who read ingredient labels before they buy, we\n  put the entire recipe, egg whites, dates, almonds, on the front of the\n  wrapper instead of burying it in six-point type on the back, so you\n  know exactly what you're eating in four seconds, not four minutes of\n  label-reading.\"",
      successCriteria: [
        "Names one specific customer segment, not \"everyone\" or \"consumers\"",
        "States a specific problem tied to a felt frustration, not a vague category pain",
        "Describes the after-state as an outcome (what changes for the customer), not a list of product features",
        "Includes one specific, defensible differentiator, not a vague superlative like \"best\" or \"better\"",
        "Passes the \"could this describe a competitor?\" test: swap in a rival brand's name and the statement should become false or absurd",
        "Lands at roughly 60-90 words after the \"cut it in half\" pass",
      ],
      portfolioReady: true,
      stretch:
        "Run the \"so what?\" test out loud with a friend who has never seen your product: after every sentence, they ask \"so what does that mean for me?\" until you hit a real feeling, relief, confidence, time back, status. Rewrite anything that doesn't survive three rounds of \"so what?\"",
    },
    {
      id: "value-proposition-two-drafts-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Two Drafts, One Board Meeting: Judging Value Props Against the Framework",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two competing value-proposition drafts for the same grooming brand, use the lesson's own quality tests, specificity, outcome vs. feature, customer language, to decide which one a board would actually approve, and name exactly which mistake the losing draft makes.",
      companyId: "walker-and-company",
      scenario:
        "Two junior marketers at a grooming brand for underserved skin and hair types (built in the spirit of Walker & Company's founding mission) each wrote a value proposition for a homepage redesign. The founder has fifteen minutes before the board call and needs a decision, not a diplomatic \"both are good.\" (These two drafts are illustrative copy written for this exercise, not the company's real historical marketing.)",
      brief:
        "Two drafts, two comparison passes. Run each draft through the same two lesson mistakes in order, then write the one-paragraph verdict the founder actually needs.",
      mode: "diagnostic",
      conceptsCovered: ["Common Mistakes"],
      steps: [
        {
          stepId: "vp-headtohead-feature-vs-outcome",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 1: writing for yourself, not your customer. Customers do not buy features, they buy outcomes. If a value proposition could live on a competitor's homepage without changing a word, it is not specific enough.",
          question: "Which draft describes what the company built versus what changes for the customer?",
          toolName: "Notion",
          where: "the two draft paragraphs below, read side by side",
          procedure: [
            "Read Draft A and underline every noun that names a product feature (trimmer, blade system, edge, grip).",
            "Read Draft B and underline every phrase that names a customer feeling or outcome (bumps, calm skin, one blade instead of five).",
            "Count which draft leads with a feature versus which leads with an outcome in its first sentence.",
            "Decide which draft would survive being read out loud to someone who has never heard of the brand.",
          ],
          outputSample:
            "Draft A: \"Our precision trimmer and single-blade razor system,\n  engineered with a patented bump-prevention edge, delivers a\n  barbershop-quality shave with reduced irritation and a sleeker\n  grip design.\"\n\n  Draft B: \"You've stopped shaving because every razor leaves you with\n  bumps that take a week to calm down. This single-blade system cuts\n  each hair once instead of dragging it out with the follicle, so the\n  shave that used to wreck your skin for days doesn't anymore.\"",
          healthy: "Opening sentence names the customer's felt problem before any product mechanism.",
          unhealthy: "Opening sentence lists product features (patented edge, grip design) before naming what changes for the customer.",
          interpret:
            "Draft A lists three features, trimmer, patented edge, grip design, before a single customer benefit appears. Draft B opens with the felt problem itself and only introduces the mechanism (\"one blade, not five\") to explain why the outcome is true.",
          soWhat: [
            {
              symptom: "value proposition reads like a spec sheet",
              action: "rewrite the opening sentence to start with the customer's frustration, not the product's engineering",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "vp-headtohead-segment-specificity",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 2: trying to appeal to everyone. A value proposition that speaks to everyone speaks to no one. Name the specific type of customer and the specific friction they feel.",
          question: "Which draft implies a specific, real customer segment, and which one implies \"everyone who shaves\"?",
          toolName: "Notion",
          where: "the same two drafts, checking for an implied audience",
          procedure: [
            "Check Draft A for any language that narrows the audience beyond \"a person who shaves.\"",
            "Check Draft B for language that narrows the audience without stating a demographic outright.",
            "Note that Draft B never says a demographic category, it implies a segment through the specific symptom (bumps that take a week to heal), which is the harder, more honest version of naming a segment.",
          ],
          outputSample:
            "Draft A audience: unstated, implicitly \"anyone who shaves.\"\n  Draft B audience: implied through symptom, people whose skin reacts\n  badly to standard multi-blade razors, without naming a demographic.",
          healthy: "Segment is named or clearly implied through a specific, shared symptom.",
          unhealthy: "No segment is named or implied; the copy could apply to any customer of any competitor.",
          interpret:
            "Draft B's segment is implied rather than stated outright, which is still a pass: the lesson's own bar is specificity, not a demographic label. Draft A never narrows the audience at all.",
          soWhat: [
            {
              symptom: "value proposition tries to describe every possible customer at once",
              action: "name the one symptom or moment that only your real target segment feels, and write to that",
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
            role: "Where you compare the two drafts side by side",
            why: "Free tier's table/columns view is enough to lay two paragraphs next to each other for comparison.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "Nothing paid is needed, this is a fifteen-minute reading and judgment exercise.",
      },
      deliverable:
        "A one-paragraph verdict naming which draft wins and which two specific lesson mistakes the losing draft makes, plus a two-sentence rewrite of its weakest line.",
      sampleOutput:
        "Winning draft: Draft B. It leads with the specific felt problem (razor bumps that take a week to calm down), not the product's engineering, and it implies a specific segment through the symptom itself rather than naming \"everyone who shaves.\" Draft A commits Mistake 1 (writing for yourself, not the customer) by opening with three product features, precision trimmer, patented edge, sleeker grip, before ever mentioning what changes for the person using it. The fix for Draft A's weakest line: \"engineered with a patented bump-prevention edge\" becomes \"built so the bumps that used to last a week don't show up in the first place.\" The same discipline is what let a brand like Drunk Elephant grow almost entirely through Sephora sell-through and organic social instead of an ad-led launch, the product claim did the work a slogan usually has to.",
      successCriteria: [
        "Correctly identifies Draft A as feature-first (Mistake 1) and explains what customer outcome is missing",
        "Correctly identifies that Draft B implies a specific segment while Draft A implies none (Mistake 2)",
        "Verdict names Draft B as the stronger draft with a reason tied to the lesson, not a vague \"it just sounds better\"",
        "Rewrite of the weakest line converts a feature into an outcome",
      ],
      portfolioReady: false,
      stretch:
        "Write a Draft C that fixes both of Draft A's flagged mistakes in two sentences or fewer, then check it against the specificity test from the core project: could this describe a competitor's razor?",
    },
  ],

  // -------------------------------------------------------------------
  // marketing-math
  // -------------------------------------------------------------------
  "marketing-math": [
    {
      id: "marketing-math-cfo-unit-economics-audit",
      tier: "core",
      archetype: "audit",
      title: "The CFO Meeting: Auditing a Paid Social Channel's Real Unit Economics",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real 9-day campaign export and a set of finance inputs, calculate fully loaded CAC, LTV, ROAS, and payback period for one acquisition channel, then decide whether it deserves more budget, less, or a hold, exactly the way a CFO would read the same numbers.",
      companyId: "freshworks",
      scenario:
        "You're the growth marketer at Freshworks (styled after its real freemium-to-paid SMB SaaS motion) preparing the unit-economics slide for a budget review. Marketing wants to double the \"Social - Prospecting Lookalike\" ad group's budget next quarter. Finance wants proof it's not just buying vanity signups.",
      brief:
        "Four numbers, one campaign export, one finance handoff. Walk CAC, LTV, ROAS, and payback in order, exactly like the lesson's own workflow, then write the one sentence that either gets the budget increase approved or kills it.",
      mode: "diagnostic",
      conceptsCovered: [
        "1. CAC, Customer Acquisition Cost",
        "2. LTV, Lifetime Value (also called CLV or Customer Lifetime Value)",
        "3. ROAS, Return on Ad Spend",
        "4. Payback Period",
        "How the Four Metrics Work Together",
      ],
      steps: [
        {
          stepId: "mm-audit-cac",
          concept: "1. CAC, Customer Acquisition Cost",
          lessonAnchor: "1-cac-customer-acquisition-cost",
          theoryRecap:
            "CAC = Total Sales and Marketing Spend / New Customers Acquired. \"Total spend\" means everything, ad spend alone (\"paid CAC\") gives you a flattering number finance will not trust.",
          question: "What did it actually cost, fully loaded, to win each of the 9 customers this ad group produced?",
          toolName: "Google Sheets",
          where:
            "public/project-data/ad-account-export.csv, filter ad_group = \"Social - Prospecting Lookalike\", 2026-06-01 through 2026-06-09",
          procedure: [
            "Filter the export to the \"Social - Prospecting Lookalike\" ad group and sum the cost column for 2026-06-01 through 2026-06-09.",
            "Cross-check against the CRM: of the resulting trial signups, note how many converted to a paid plan within 30 days.",
            "Add finance's allocated share of the growth marketer's salary and the ad-creative tool retainer for this channel, ask finance for the number, don't estimate it.",
            "Divide fully loaded spend by paid customers, not trial signups, that's the CAC number finance will actually accept.",
          ],
          outputSample:
            "Social - Prospecting Lookalike · 2026-06-01 to 2026-06-09 (9 days)\n\n  Ad spend (from export)        $258.07\n  Trial signups                     72\n  Trial-to-paid (CRM, 30-day)        9\n  + Allocated salary/tools      $416.93\n  = Fully loaded spend          $675.00\n\n  Paid CAC (ad spend only)   $258.07 / 9 = $28.67\n  Fully loaded CAC           $675.00 / 9 = $75.00",
          healthy: "Fully loaded CAC sits comfortably under the $205 SaaS industry average CAC benchmark the lesson cites.",
          unhealthy: "Fully loaded CAC runs 2-3x the paid-only number and keeps climbing quarter over quarter with no change in trial-to-paid rate.",
          interpret:
            "$75 fully loaded is well under the $205 SaaS benchmark, on cost alone this channel already looks efficient. But CAC in isolation never tells you whether to spend more, only LTV and payback do.",
          soWhat: [
            {
              symptom: "the deck reports paid CAC ($28.67) instead of fully loaded CAC ($75.00)",
              action: "restate the slide with fully loaded CAC before finance catches the gap themselves",
              effort: "5 min",
            },
            {
              symptom: "trial-to-paid rate (9 of 72, 12.5%) isn't broken out anywhere",
              action: "add it as its own line, it's the number that will get questioned first",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-audit-ltv",
          concept: "2. LTV, Lifetime Value (also called CLV or Customer Lifetime Value)",
          lessonAnchor: "2-ltv-lifetime-value-also-called-clv-or-customer-lifetime-value",
          theoryRecap:
            "LTV = (Monthly Revenue per Customer x Gross Margin %) / Monthly Churn Rate for subscription businesses. Gross profit, never top-line revenue, or the ratio evaporates the moment finance checks it.",
          question: "What is each of those 9 paying customers actually worth, in gross profit, over their full relationship with the company?",
          toolName: "Google Sheets",
          where: "Finance's SaaS metrics sheet: average monthly revenue per customer, gross margin, and monthly churn for this plan tier",
          procedure: [
            "Pull average monthly revenue per customer for the SMB plan tier this ad group sells into: $49/month.",
            "Pull gross margin from finance for this plan tier: 78% after hosting and support costs.",
            "Pull monthly churn rate for this cohort's plan tier: 3%.",
            "Apply the formula: (Monthly Revenue x Gross Margin) / Monthly Churn Rate.",
          ],
          outputSample:
            "SMB plan tier inputs (from finance)\n\n  Avg monthly revenue/customer   $49.00\n  Gross margin                      78%\n  Monthly churn rate                 3%\n\n  Monthly gross profit/customer  $49.00 x 0.78 = $38.22\n  LTV                            $38.22 / 0.03 = $1,274.00",
          healthy: "LTV:CAC ratio (next step) clears 3:1, and the margin figure used is gross profit, not revenue.",
          unhealthy: "Someone plugs $49 revenue directly into the ratio instead of $38.22 gross profit, an inflated ratio that isn't real.",
          interpret:
            "$1,274 LTV against a $75 CAC is a 17:1 ratio, more than five times the 3:1 healthy benchmark. This isn't just healthy, it's a signal the channel is being under-funded relative to what each customer is worth.",
          soWhat: [
            {
              symptom: "LTV:CAC is above 5:1",
              action: "this is the lesson's own \"under-investing in growth\" branch, bring a specific budget-increase number to the CFO meeting, not just a status update",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-audit-roas",
          concept: "3. ROAS, Return on Ad Spend",
          lessonAnchor: "3-roas-return-on-ad-spend",
          theoryRecap:
            "ROAS = Revenue Generated by Ads / Ad Spend. It's the speedometer, a fast read on efficiency, not the destination, it ignores everything that happens after the first purchase.",
          question: "Read on its own, does this channel's ROAS look like it deserves a bigger budget?",
          toolName: "Google Ads",
          where: "First-month revenue from the 9 paying customers against the $258.07 ad spend that produced them",
          procedure: [
            "Multiply paying customers by first-month revenue: 9 x $49.",
            "Divide by ad spend for the same window: $258.07.",
            "Compare against the 2.04 median e-commerce ROAS and 4:1 typical e-commerce target the lesson cites, then note this is a SaaS motion, not e-commerce, so the target itself needs adjusting, not just the number.",
          ],
          outputSample: "First-month revenue (9 customers x $49)   $441.00\n  Ad spend (9-day window)                  $258.07\n  ROAS                                       1.71x",
          healthy: "For a SaaS motion with a 3%-a-month churn tail, a ROAS just above 1x in the first 30 days is expected, most of the return arrives in months 2 through 24, not month 1.",
          unhealthy: "A ROAS below 1x on a channel with no long-tail retention story (a one-time-purchase product, for instance) and no plan to improve it.",
          interpret:
            "1.71x looks unimpressive next to the 4:1 e-commerce benchmark, but that benchmark is for a different business model. Read alone, ROAS would talk you out of a channel the LTV:CAC number just told you to fund more.",
          soWhat: [
            {
              symptom: "someone on the team wants to pause the channel because \"1.71x isn't a good ROAS\"",
              action: "walk them through LTV:CAC in the same conversation, ROAS answers \"did this week work,\" not \"should we keep doing this\"",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-audit-payback",
          concept: "4. Payback Period",
          lessonAnchor: "4-payback-period",
          theoryRecap:
            "Payback Period (months) = CAC / Monthly Gross Profit per Customer, how many months of margin it takes to cover what you spent acquiring the customer.",
          question: "How many months of margin does it take before this channel's customers stop being cash-negative?",
          toolName: "Google Sheets",
          where: "The CAC ($75.00) and monthly gross profit per customer ($38.22) already calculated above",
          procedure: [
            "Divide fully loaded CAC by monthly gross profit per customer.",
            "Compare against the under-12-month ideal and the ~20-month 2025 SaaS median the lesson cites.",
            "Write the one-sentence recommendation for the CFO slide.",
          ],
          outputSample: "Payback = $75.00 / $38.22 = 1.96 months",
          healthy: "Under 12 months is the ideal the lesson cites; under 18 months with a 3:1+ LTV:CAC is the floor for \"safe to scale.\"",
          unhealthy: "Payback exceeds 18 months while LTV:CAC sits below 3:1, a unit economics problem, not a marketing problem.",
          interpret:
            "Under 2 months against a ~20-month 2025 SaaS-wide median isn't just healthy, it's the third piece of evidence, after CAC and LTV:CAC, all pointing the same direction: this channel can absorb a lot more budget before it stops being efficient.",
          soWhat: [
            {
              symptom: "the budget review keeps stalling on \"is this channel working\"",
              action: "bring all three numbers together, CAC $75, LTV:CAC 17:1, payback under 2 months, as one slide, not three separate updates",
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
            role: "Where you filter the CSV export and run the four formulas",
            why: "Not in the tools directory, genuinely free, opens the CSV and every formula in this project directly.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "Google Analytics 4",
            role: "Where you'd confirm trial-to-paid and revenue figures in a real account",
            why: "Free tier is enough to cross-check the CRM/revenue numbers used in this audit against real event data.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Triple Whale",
            role: "Automates this exact CAC/LTV/ROAS rollup across channels on an ongoing basis",
            why: "Useful once you're running this audit every week across five channels instead of once by hand, never required to complete this project.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a spreadsheet and the CSV export) completes this project in full. Triple Whale or a similar attribution tool is only worth it once this becomes a recurring weekly task.",
      },
      datasetUrl: "/project-data/ad-account-export.csv",
      deliverable:
        "A one-slide unit-economics summary: CAC (paid + fully loaded), LTV, LTV:CAC ratio, ROAS, and payback period, plus a two-sentence budget recommendation.",
      sampleOutput:
        "Fully loaded CAC: $75.00 (vs. $205 SaaS benchmark). LTV: $1,274 (78% margin, 3% monthly churn). LTV:CAC: 17:1, more than 5x the 3:1 healthy floor. ROAS: 1.71x in month one, unremarkable read alone, expected for a subscription motion. Payback: 1.96 months, a tenth of the ~20-month 2025 SaaS median. Recommendation: this channel is under-funded relative to what it returns; a company at Klaviyo's scale would treat a 17:1 ratio this consistent as a green light to double the budget, not a number to double-check for the third time.",
      successCriteria: [
        "Uses fully loaded CAC ($75), not paid-only CAC ($28.67), in the final recommendation",
        "Calculates LTV from gross profit ($38.22), not raw revenue ($49)",
        "Correctly reads ROAS (1.71x) as inconclusive on its own, not as a reason to cut the channel",
        "Final recommendation is \"increase budget\" with a specific number tied to the LTV:CAC ratio, not a vague \"this looks fine\"",
      ],
      portfolioReady: false,
      stretch:
        "Redo the calculation using the \"Core Terms\" search ad group instead (same CSV, same 9-day window). It spent $340.08 for 3 customers, CAC alone tells a very different story than this one, decide whether that channel deserves the same recommendation.",
    },
    {
      id: "marketing-math-rapid-fire-drills",
      tier: "mini",
      archetype: "forecast",
      // NOTE on shape adaptation: "drill" is not one of the dedicated
      // shapes in Phase 1's Project type (steps -> diagnostic,
      // stages -> simulation, teardownItems -> teardown). Per the brief,
      // this project repurposes ProjectStep[] as a rep list: each "step"
      // below is one short calculation rep, not a runbook stage.
      // `procedure` holds the calculation steps and `outputSample` holds
      // the worked answer, rather than a tool-reading runbook tied to a
      // single live dashboard. `where` still points at the real dataset
      // row(s) each rep's numbers come from.
      title: "Investor Q&A Drills: Six Rapid CAC/LTV/ROAS/Payback Reps",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Build calculation speed and formula recall for CAC, LTV, ROAS, and payback across six short, varied scenarios pulled from a real campaign export, the way an investor or CFO fires off follow-up numbers in a live meeting with no time to look up the formula.",
      companyId: "zomato",
      scenario:
        "You're prepping for a fundraising Q&A in the hustle spirit of Zomato's early growth years (35x oversubscribed IPO, built on unit-economics discipline it had to earn before anyone gave it credit). Investors don't ask one clean question, they fire six half-finished ones back to back, and you need the formula cold.",
      brief:
        "This is a drill project, not a single deep dive: six short numeric reps, each pulling real numbers from the same campaign export used elsewhere in this track. Work through them in order, then check your math against the worked answer.",
      mode: "drill",
      conceptsCovered: [
        "1. CAC, Customer Acquisition Cost",
        "2. LTV, Lifetime Value (also called CLV or Customer Lifetime Value)",
        "3. ROAS, Return on Ad Spend",
        "4. Payback Period",
      ],
      steps: [
        {
          stepId: "mm-drill-1-cac-core-terms",
          concept: "1. CAC, Customer Acquisition Cost",
          lessonAnchor: "1-cac-customer-acquisition-cost",
          theoryRecap: "CAC = Total Spend / New Customers Acquired.",
          question:
            "The \"Core Terms\" search ad group spent $340.08 and produced 3 new customers over its first 9 days. What's the CAC?",
          toolName: "Google Sheets",
          where: "public/project-data/ad-account-export.csv, ad_group = \"Core Terms\", 2026-06-01 to 2026-06-09",
          procedure: [
            "Sum the cost column for the filtered rows: $340.08.",
            "Sum the conversions column for the same rows: 3.",
            "Divide: $340.08 / 3.",
          ],
          outputSample: "CAC = $340.08 / 3 = $113.36 per customer",
          healthy: "Under the relevant sector benchmark (SaaS: $205, Retail: $87).",
          unhealthy: "Well above sector benchmark with no offsetting LTV story.",
          interpret:
            "$113.36 sits comfortably under the $205 SaaS benchmark but above the $87 Retail benchmark, the verdict depends entirely on which sector this company is in.",
          soWhat: [
            {
              symptom: "a CAC number is stated with no sector benchmark next to it",
              action: "always state the benchmark next to the number, a number with no comparison persuades nobody",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-drill-2-cac-competitor-terms",
          concept: "1. CAC, Customer Acquisition Cost",
          lessonAnchor: "1-cac-customer-acquisition-cost",
          theoryRecap: "CAC = Total Spend / New Customers Acquired.",
          question:
            "\"Competitor Terms\" spent $82.91 and produced 3 conversions over the same 9-day window. What's the CAC, and how does it compare to Core Terms?",
          toolName: "Google Sheets",
          where: "public/project-data/ad-account-export.csv, ad_group = \"Competitor Terms\", 2026-06-01 to 2026-06-09",
          procedure: [
            "Sum the cost column: $82.91.",
            "Sum the conversions column: 3.",
            "Divide: $82.91 / 3.",
            "Compare against Core Terms' $113.36 from Drill 1.",
          ],
          outputSample: "CAC = $82.91 / 3 = $27.64 per customer, less than a quarter of Core Terms' $113.36",
          healthy: "Meaningfully lower CAC than the account's other ad groups, worth investigating why.",
          unhealthy: "N/A here, this is the efficient outlier in this pair.",
          interpret:
            "Competitor Terms is roughly 4x cheaper per customer than Core Terms despite similar conversion volume, that's a budget-reallocation conversation, not a footnote.",
          soWhat: [
            {
              symptom: "a cheaper ad group is getting the same budget share as an expensive one",
              action: "flag for reallocation in the next budget review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-drill-3-ltv",
          concept: "2. LTV, Lifetime Value (also called CLV or Customer Lifetime Value)",
          lessonAnchor: "2-ltv-lifetime-value-also-called-clv-or-customer-lifetime-value",
          theoryRecap: "LTV = (Monthly Revenue per Customer x Gross Margin %) / Monthly Churn Rate.",
          question: "A customer pays $80/month, gross margin is 70%, and monthly churn is 4%. What's their LTV?",
          toolName: "Google Sheets",
          where: "finance's plan-tier metrics sheet",
          procedure: [
            "Monthly gross profit: $80 x 0.70 = $56.",
            "Divide by churn: $56 / 0.04.",
          ],
          outputSample: "LTV = ($80 x 0.70) / 0.04 = $56 / 0.04 = $1,400.00",
          healthy: "Healthy if CAC for this customer is under roughly $466 (a 3:1 ratio).",
          unhealthy: "Someone plugs $80 revenue straight into the ratio instead of $56 gross profit.",
          interpret: "$1,400 is the correct LTV only because gross profit ($56), not revenue ($80), was divided by churn.",
          soWhat: [
            {
              symptom: "team plugs $80 revenue straight into a ratio instead of $56 gross profit",
              action: "flag it before it reaches a fundraising deck",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-drill-4-ltv-margin-trap",
          concept: "2. LTV, Lifetime Value (also called CLV or Customer Lifetime Value)",
          lessonAnchor: "2-ltv-lifetime-value-also-called-clv-or-customer-lifetime-value",
          theoryRecap: "Always use gross profit, not revenue, and always re-derive a ratio before repeating it.",
          question:
            "Someone on the team calculates LTV as $80 x 0.70 x 25 months = $1,400 and separately claims an 8:1 LTV:CAC against a $175 CAC. Spot the error, then recalculate.",
          toolName: "Google Sheets",
          where: "n/a, this drill is a mental-math verification check",
          procedure: [
            "Check whether the $1,400 already includes gross margin: $80 x 0.70 x 25 = $1,400 is correct math for a 25-month average lifetime.",
            "Recompute the ratio: $1,400 / $175.",
            "Decide whether the claimed ratio is actually correct or not.",
          ],
          outputSample:
            "$1,400 / $175 = 8:1 exactly. The claim was correct this time, the trap is realizing you have to check the math instead of assuming a stated ratio is right or wrong.",
          healthy: "8:1 is real and comfortably above the 3:1 floor.",
          unhealthy: "N/A, this drill exists to build the habit of checking, not to catch a planted error every time.",
          interpret: "Fast mental math confirms $80 x 0.70 = $56 and $56 x 25 = $1,400, always verify a stated ratio before repeating it in your own deck.",
          soWhat: [
            {
              symptom: "a stated ratio gets forwarded without anyone re-deriving it",
              action: "re-derive every LTV:CAC ratio you're handed before you cite it externally",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-drill-5-roas",
          concept: "3. ROAS, Return on Ad Spend",
          lessonAnchor: "3-roas-return-on-ad-spend",
          theoryRecap: "ROAS = Revenue Generated by Ads / Ad Spend.",
          question:
            "The \"Social - Prospecting Lookalike\" ad group spent $142.78 over 2026-06-10 through 2026-06-14 and drove 29 conversions worth $22 each in first-purchase revenue. What's the ROAS?",
          toolName: "Google Ads",
          where: "public/project-data/ad-account-export.csv, ad_group = \"Social - Prospecting Lookalike\", 2026-06-10 to 2026-06-14",
          procedure: [
            "Revenue: 29 x $22 = $638.",
            "Divide by spend: $638 / $142.78.",
          ],
          outputSample: "ROAS = $638 / $142.78 = 4.47x",
          healthy: "Above the e-commerce 4:1 typical target the lesson cites.",
          unhealthy: "Below the 2.04 e-commerce median.",
          interpret:
            "4.47x clears even the ambitious 4:1 e-commerce target, but remember the lesson's warning: platforms overstate ROAS by 2.3x on average, verify against your own revenue records before reporting this number externally.",
          soWhat: [
            {
              symptom: "a 4.47x ROAS gets reported straight from the ad platform",
              action: "cross-check against actual bank or payment-processor revenue before it goes in a deck",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "mm-drill-6-payback",
          concept: "4. Payback Period",
          lessonAnchor: "4-payback-period",
          theoryRecap: "Payback Period (months) = CAC / Monthly Gross Profit per Customer.",
          question: "CAC is $220, monthly gross profit per customer is $19. What's the payback period, and is it healthy?",
          toolName: "Google Sheets",
          where: "finance's plan-tier metrics sheet",
          procedure: [
            "Divide: $220 / $19.",
            "Compare against the under-18-month floor and the ~20-month 2025 SaaS median.",
          ],
          outputSample: "Payback = $220 / $19 = 11.58 months",
          healthy: "Under 12 months, the lesson's stated ideal, and well under the ~20-month 2025 median.",
          unhealthy: "N/A here.",
          interpret: "11.58 months clears even the strict under-12-month ideal, not just the looser 18-month floor, a green light on cost alone.",
          soWhat: [
            {
              symptom: "payback looks fine in isolation",
              action: "still check LTV:CAC before recommending a budget increase, a fast payback with a thin LTV:CAC can still be a mediocre channel",
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
            role: "Where you run each drill's calculation",
            why: "Not in the tools directory, genuinely free, all six drills are single-formula calculations.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
        ],
        paid: [],
        paidUpgradeNote: "Nothing paid is needed, these are six short mental-math-plus-spreadsheet reps.",
      },
      datasetUrl: "/project-data/ad-account-export.csv",
      deliverable: "Six worked answers, one per drill, each showing the formula, the plug-in, and the final number.",
      sampleOutput:
        "Drill 1: $113.36. Drill 2: $27.64 (4x cheaper than Drill 1). Drill 3: $1,400.00. Drill 4: 8:1, ratio checks out. Drill 5: 4.47x. Drill 6: 11.58 months. A team prepping the same drills for a company at Swiggy's scale would run this exact six-question set before every board deck, the numbers change, the formulas never do.",
      successCriteria: [
        "All 6 answers match the worked math within rounding",
        "Drill 1 vs. Drill 2 comparison correctly flags Competitor Terms as the more efficient channel",
        "Drill 3 uses gross profit, not raw revenue, in the LTV formula",
        "Drill 6 correctly clears both the 12-month ideal and the 18-month floor",
      ],
      portfolioReady: false,
      stretch:
        "Time yourself: a real investor Q&A doesn't wait for you to open a calculator. Try to complete all 6 drills from memory of the formulas in under 8 minutes on a second attempt.",
    },
  ],

  // -------------------------------------------------------------------
  // product-market-fit
  // -------------------------------------------------------------------
  "product-market-fit": [
    {
      id: "pmf-retention-audit-signals",
      tier: "core",
      archetype: "audit",
      title: "Reading the Three PMF Signals: A Real Retention-Curve and Survey Audit",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a real cohort-retention export and a Sean Ellis-style survey framework, decide whether a product has genuine product-market fit or just enthusiastic early numbers, using the same three signals, survey threshold, retention curve shape, unprompted word of mouth, the lesson defines.",
      companyId: "duolingo",
      scenario:
        "You're the growth lead at a habit-forming consumer app built in the spirit of Duolingo's early gamification playbook (near-zero paid acquisition, streaks and habit loops doing the heavy lifting). Leadership wants to double the ad budget next month. Before you sign off, you need to know if retention actually supports that, or if you're about to pour money into acquiring users who'll churn by day 30.",
      brief:
        "Three signals, in the order the lesson gives them: run the Sean Ellis math, read a real 8-cohort retention export for flattening vs. decay, and check whether unpaid discovery is carrying its weight. One honest verdict at the end, scale or hold.",
      mode: "diagnostic",
      conceptsCovered: [
        "Signal 1: The Sean Ellis Test",
        "Signal 2: Retention Curves That Flatten",
        "Signal 3: Word-of-Mouth Without Prompting",
      ],
      steps: [
        {
          stepId: "pmf-audit-sean-ellis",
          concept: "Signal 1: The Sean Ellis Test",
          lessonAnchor: "signal-1-the-sean-ellis-test",
          theoryRecap:
            "Ask \"How would you feel if you could no longer use this product?\" with four options: Very Disappointed, Somewhat Disappointed, Not Disappointed, N/A. 40%+ \"Very Disappointed\" is the industry-standard PMF gut-check.",
          question: "You surveyed 140 active users. 46 said \"Very Disappointed.\" Do you have a PMF signal?",
          toolName: "Hotjar",
          where: "an on-site or in-app one-question survey sent to users active in the last 30 days",
          procedure: [
            "Send the exact single question to a random sample of users active in the last 30 days, not your most engaged power users, that inflates the score.",
            "Require a forced choice between the four options, no free text, free text tanks response rates.",
            "Divide \"Very Disappointed\" responses by total responses.",
            "Compare against the 40% threshold.",
          ],
          outputSample:
            "Sean Ellis survey · n=140 respondents\n\n  Very Disappointed      46   32.9%\n  Somewhat Disappointed  58   41.4%\n  Not Disappointed       30   21.4%\n  N/A                     6    4.3%",
          healthy: "40% or higher answering \"Very Disappointed.\"",
          unhealthy: "Below 40%, especially with a large \"Somewhat Disappointed\" bucket, that's a segmentation opportunity, not a dead end.",
          interpret:
            "32.9% is below the 40% threshold, but not catastrophically, per the lesson's own Superhuman case (22% to 58%), the fix is usually segmentation: find which slice of these 140 users scores near or above 40% and narrow acquisition toward them.",
          soWhat: [
            {
              symptom: "overall score sits just under 40%",
              action: "cross-tab the survey by acquisition channel or use-case before concluding there's no PMF",
              effort: "half day",
            },
            {
              symptom: "large \"Somewhat Disappointed\" bucket (41.4%)",
              action: "interview 5-10 of these users specifically, they're closest to converting into \"Very Disappointed\"",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pmf-audit-retention-curve",
          concept: "Signal 2: Retention Curves That Flatten",
          lessonAnchor: "signal-2-retention-curves-that-flatten",
          theoryRecap:
            "A curve that drops to zero means nobody found lasting value. A curve that flattens at any non-zero level, even a low one, means a slice of users found real value. Read the shape, not the starting number.",
          question: "Read the December 2025 cohort in the retention export: does it flatten or keep decaying through month 5?",
          toolName: "Google Sheets",
          where: "public/project-data/cohort-retention.csv, row for cohort_month = 2025-12",
          procedure: [
            "Open the export and find the 2025-12 cohort row.",
            "Scan month_0 through month_5 in sequence: 100.0, 50.0, 40.9, 34.0, 28.2, 24.9.",
            "Calculate the month-over-month percentage-point drop for each step and watch whether it's shrinking or staying constant.",
            "Compare against an earlier cohort (2025-11) and a later one (2026-01) to see if the pattern holds across cohorts, one cohort alone could be noise.",
          ],
          outputSample:
            "cohort 2025-11: 100.0, 47.0, 34.3, 26.1, 20.3, 16.8   (drop shrinks: -53, -13, -8, -6, -3.5 pts)\n  cohort 2025-12: 100.0, 50.0, 40.9, 34.0, 28.2, 24.9   (drop shrinks: -50, -9, -7, -6, -3.3 pts)\n  cohort 2026-01: 100.0, 50.4, 40.8, 33.9, 30.2, 27.1   (drop shrinks: -50, -10, -7, -4, -3 pts)",
          healthy: "Month-over-month drop shrinks toward a small, stable number, the curve is bending toward flat even if it hasn't gone fully horizontal within the visible window.",
          unhealthy: "Drop stays roughly constant or grows every month, that's still-decaying, not flattening, more months of data will likely show it hitting zero.",
          interpret:
            "All three cohorts show the same shape: a steep month-0-to-1 drop (roughly half the cohort), then progressively smaller drops each month after. By month 4 to 5 the drop is down to 3-3.5 points. That's the flattening signal the lesson describes, not a curve heading to zero, a curve settling into a stable core.",
          soWhat: [
            {
              symptom: "someone reads only month_0 to month_1 (a 50% drop) and calls it a retention crisis",
              action: "always read the full curve shape, not the first data point, the first drop is normal for most consumer apps",
              effort: "5 min",
            },
            {
              symptom: "2026-05 and 2026-06 cohorts have missing later-month data (too new to have aged that far)",
              action: "don't compare an immature cohort's early numbers against a mature cohort's late numbers, wait for it to age before drawing conclusions",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pmf-audit-organic-share",
          concept: "Signal 3: Word-of-Mouth Without Prompting",
          lessonAnchor: "signal-3-word-of-mouth-without-prompting",
          theoryRecap:
            "When people tell friends without being asked, without referral codes or incentives, that's the strongest qualitative PMF signal. It rarely has its own analytics line, you usually have to read it off the organic-acquisition share instead.",
          question: "This funnel export doesn't have a \"referred a friend\" column. What's the closest honest proxy available, and what does it say?",
          toolName: "Google Analytics 4",
          where: "public/project-data/funnel-data.csv, source column summed across the 30-day window",
          procedure: [
            "Sum the visit-stage visitors column grouped by source across all 30 days.",
            "Calculate each source's share of total visits.",
            "Treat \"organic\" as the closest available proxy for unprompted discovery, note in the write-up that it's not a perfect stand-in for true referral, it also includes organic search, which is intent-driven, not word-of-mouth.",
            "Flag the real gap: recommend adding a proper referral/attribution field if this analysis needs to happen again.",
          ],
          outputSample:
            "30-day visit totals by source\n\n  organic       22,119   43.0%\n  paid_search   14,976   29.1%\n  paid_social    6,849   13.3%\n  email          7,482   14.6%\n  Total         51,426  100.0%",
          healthy: "Organic share is a meaningful plurality of traffic and growing over time without a matching increase in organic-search-specific SEO investment.",
          unhealthy: "Organic share only exists because of a PR/press spike that decays within weeks, or because paid channels were paused, not because unprompted sharing is happening.",
          interpret:
            "43.0% organic is a real plurality, the largest single source, but this dataset can't separate \"searched us by name because a friend mentioned us\" from \"found us cold via a generic search.\" Flag this as a genuine measurement gap rather than overstating it as confirmed word-of-mouth.",
          soWhat: [
            {
              symptom: "team wants to cite \"43% organic\" as proof of word-of-mouth PMF in a board deck",
              action: "caveat it explicitly as a proxy, or better, add a \"how did you hear about us?\" field to onboarding to get the real number",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Hotjar",
            role: "Runs the Sean Ellis one-question survey on-site or in-app",
            why: "Free tier's response cap is enough for a single-question survey sent to a sample of active users.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Source-of-traffic data behind the organic-share proxy",
            why: "Free tier reports session source/medium, exactly what's needed to reproduce the organic-share calculation on real traffic.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Where you read the retention CSV and run all three calculations",
            why: "Not in the tools directory, genuinely free, opens the CSV and every formula in this project directly.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Automates cohort retention curves and Sean Ellis-style surveys at scale",
            why: "Useful once cohorts number in the dozens and this audit needs to run monthly instead of once by hand, never required to complete this project.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Hotjar's survey, GA4's source data, and a spreadsheet for the CSV) completes this project in full. Mixpanel is only worth it once this becomes a recurring, automated report.",
      },
      datasetUrl: "/project-data/cohort-retention.csv",
      deliverable:
        "A one-page PMF verdict: Sean Ellis score with interpretation, retention curve shape verdict (flattening or decaying, with the three-cohort comparison), organic-share proxy with its caveat, and a final scale/hold recommendation.",
      sampleOutput:
        "Sean Ellis: 32.9%, below the 40% threshold but with a large \"Somewhat Disappointed\" bucket worth segmenting. Retention: all three mature cohorts (Nov, Dec, Jan) show the same flattening shape, steep month-0 drop, shrinking drops after, settling near 25-27% by month 5. Organic share: 43.0% of traffic, flagged as an imperfect proxy, not confirmed word-of-mouth. Verdict: hold the budget increase until the Sean Ellis segmentation is done, retention alone doesn't carry a \"scale now\" call the way Slack's near-zero churn among 2,000-message teams did on day one, this product's signal is real but partial, not the unambiguous kind.",
      successCriteria: [
        "Correctly reads 32.9% as below-threshold but not disqualifying, and recommends segmentation rather than \"no PMF, stop\"",
        "Identifies the flattening shape by comparing month-over-month drop size across at least 2 cohorts, not just eyeballing one",
        "Explicitly caveats the organic-share number as an imperfect word-of-mouth proxy rather than treating it as confirmed",
        "Final verdict is \"hold\" or \"scale with conditions,\" not an uncaveated \"yes, scale\" given the below-threshold Sean Ellis score",
      ],
      portfolioReady: false,
      stretch:
        "Pull the 2026-02 through 2026-04 cohorts from the same export and check whether the flattening pattern holds for three more months of cohorts, or whether it was specific to the Nov-Jan window.",
    },
    {
      id: "pmf-vanity-growth-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Vanity Growth or Real PMF? Tearing Down a Pre-Series-B Growth Memo",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Read a subscription startup's investor growth memo (styled after the pattern that preceded Winc's 2022 bankruptcy, a company that scaled hard before proving retention) and separate the genuine PMF defects from the numbers that merely look alarming but aren't the actual problem.",
      companyId: "winc-club-w",
      scenario:
        "A subscription wine-discovery startup is raising a follow-on round. The growth memo below is the kind of document that got startups like this funded in 2019-2021, styled after the pattern Winc's own trajectory followed (IPO'd November 2021, filed for Chapter 11 just over a year later, per its confirmed record). Your job: find what the memo is hiding, and don't get distracted by what merely looks bad. (This memo is a synthetic specimen written for this exercise, not a real internal Winc document.)",
      brief:
        "One specimen memo, several plausible-looking flags. Some of them are real PMF defects. Some are normal, healthy-looking noise a nervous reader might flag anyway. Sort them correctly and you'll see the pattern that preceded the real company's collapse.",
      mode: "teardown",
      conceptsCovered: [
        "Signal 1: The Sean Ellis Test",
        "Signal 2: Retention Curves That Flatten",
        "Common Mistakes to Avoid",
      ],
      teardownItems: [
        {
          itemId: "winc-style-growth-memo",
          specimen:
            "GROWTH MEMO — Series B Update (synthetic, modeled on the pattern of a real\n2020-era subscription-commerce raise)\n\nMonthly signups: 8,200 -> 10,000 (+22% MoM)\nSean Ellis score (last surveyed 14 months ago): \"38%, in line with industry\"\nDay-30 retention: 9% (down from 34% two cohorts ago)\nCAC: $61 -> $70 (+15% QoQ, blamed on \"seasonal ad costs\")\nApp store rating: 4.2 stars, 1,900 reviews\n\"Referral\" signups: 1,400/month (all via a $15-credit referral bonus program)\nMonthly burn: $1.1M, runway 11 months\nQuote from the deck: \"Our engaged super-users personalize their box every\nmonth and rave about us.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "List every genuine PMF defect this memo is hiding, and explicitly name which of the listed numbers are NOT defects even though they might look concerning at first glance.",
          answerKey: [
            {
              defect: "Sean Ellis score is 14 months stale and was never re-run as the product and market changed",
              severity: "critical",
              whyItMatters:
                "the lesson is explicit that PMF is not a one-time event; a 14-month-old 38% score tells you nothing about today, especially with day-30 retention actively falling",
              lessonRef: "Common Mistakes to Avoid, Mistake 3: Treating PMF as a one-time event",
              owner: "you",
            },
            {
              defect: "Day-30 retention fell from 34% to 9% across recent cohorts, a decaying curve, not a flattening one",
              severity: "critical",
              whyItMatters:
                "this is the clearest, most current PMF signal in the whole memo, and it's the one most likely to get buried under the more flattering headline growth number",
              lessonRef: "Signal 2: Retention Curves That Flatten",
              owner: "you",
            },
            {
              defect: "\"Referral\" signups are entirely paid-incentive signups ($15 credit), not unprompted word-of-mouth",
              severity: "moderate",
              whyItMatters:
                "labeling an incentivized channel as \"referral\" borrows the credibility of organic word-of-mouth without earning it; it's a paid acquisition channel wearing a PMF-signal costume",
              lessonRef: "Signal 3: Word-of-Mouth Without Prompting",
              owner: "you",
            },
            {
              defect:
                "the deck quote (\"super-users personalize their box and rave about us\") is anecdotal and describes the most engaged sliver, not the median cohort, whose retention is collapsing",
              severity: "moderate",
              whyItMatters:
                "the lesson's Superhuman case shows the fix for weak overall PMF is segmenting toward the fit users; this memo does the opposite, using the fit users' enthusiasm to paper over the median user's churn",
              lessonRef: "Common Mistakes to Avoid",
              owner: "you",
            },
          ],
          distractors: [
            "Monthly signup growth of +22% MoM, a fast top-line growth number by itself is not a PMF defect; it's actually the thing making the retention collapse easy to hide.",
            "CAC rising 15% QoQ, normal in a competitive paid-acquisition environment and not, on its own, a PMF signal one way or the other; it's a unit-economics question, not a fit question.",
            "4.2-star app rating with 1,900 reviews, app store ratings measure satisfaction among people who bothered to rate, not retention or repeat usage, it's a distractor, not evidence either way.",
            "11 months of runway, a real business concern, but a cash/fundraising fact, not a PMF signal, don't let it distract from the retention numbers.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Where you write up the defect list and severity ratings",
            why: "Not in the tools directory, genuinely free, this project needs a document, not a data tool.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
        ],
        paid: [],
        paidUpgradeNote: "Nothing paid is needed, this is a reading and judgment exercise against a fixed specimen.",
      },
      deliverable:
        "A short memo-review write-up: the 4 real defects (with severity and lesson tie-back) and an explicit note on which flagged-looking numbers are actually distractors, not defects.",
      sampleOutput:
        "Real defects found: (1) Sean Ellis score is 14 months stale, (2) day-30 retention collapsed from 34% to 9%, (3) \"referral\" signups are entirely paid-incentive, not organic, (4) the deck quote cherry-picks super-users while median retention craters. Correctly NOT flagged: the +22% signup growth, the CAC rise, the app rating, and the runway figure, all real numbers, none of them a PMF defect on their own. The pattern here is the opposite of what builds durable subscription retention at a company like Chewy: real loyalty shows up in what customers do release after release, not in a stale survey score or an incentivized referral count standing in for it.",
      successCriteria: [
        "Names all 4 defects with correct severity",
        "Does not flag any of the 4 distractors as defects",
        "Ties at least 3 of the 4 defects to a specific lesson section, not just a general \"this looks bad\"",
        "Final write-up explicitly separates \"defect\" from \"concerning-looking but not a defect\"",
      ],
      portfolioReady: false,
      stretch:
        "Rewrite the memo's Sean Ellis and retention lines the way an honest founder would present them, stale data flagged as stale, declining retention stated plainly, and decide whether you'd still fund this company.",
    },
  ],

  "stp": [
    {
      id: "stp-segment-scoring-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Market Selection Matrix: Auditing and Scoring Three B2B Segments",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate three prospective B2B market segments using the lesson's four-question targeting score (Size, Reach, Advantage, Growth) to decide which segment to dominate first and which high-risk trap to eliminate.",
      companyId: "freshworks",
      scenario:
        "You're the product marketing manager at Freshworks evaluating three prospective customer segments for a new customer service automation add-on: 1) Enterprise Financial Services (5,000+ employees), 2) Rapidly Scaling E-commerce Brands (50-250 employees), and 3) Solopreneur Agencies. Leadership is tempted to pursue the enterprise banks because of high ACV, but the sales cycle is 12 months and customization demands are massive.",
      brief:
        "Score all three candidate segments across Size, Reach, Advantage, and Growth in a comparison matrix. Flag the single segment with the highest 'winnable-to-value' ratio, and write a one-paragraph justification killing the enterprise bank push.",
      mode: "diagnostic",
      conceptsCovered: ["Step 1: Segmentation", "Step 2: Targeting"],
      steps: [
        {
          stepId: "stp-audit-segmentation-matrix",
          concept: "Step 1: Segmentation",
          lessonAnchor: "step-1-segmentation",
          theoryRecap:
            "The lesson divides markets across demographic/firmographic (company size, industry), geographic, psychographic, and behavioral dimensions. The sharpest B2B segments combine firmographic scale with a shared urgent pain.",
          question:
            "Which candidate segment has a unified, acute Sunday-night worry versus fragmented feature wishlists?",
          toolName: "Google Sheets",
          where: "Segment Candidate Tab in your GTM Planning Sheet",
          procedure: [
            "List the three candidate segments with their firmographic criteria and current software stack.",
            "Document the primary 'Sunday-night worry' for each group based on sales discovery notes.",
            "Verify that each group has a clear behavioral filter (e.g., currently overwhelmed by ticket spikes on Shopify) rather than a loose demographic bucket.",
          ],
          outputSample:
            "Segment A: Enterprise Banks (5000+ seats, legacy on-premise, security review 9+ mos)\nSegment B: Scaling DTC Brands (50-250 seats, Shopify Plus, 40% holiday ticket surges)\nSegment C: Solo Agencies (1-3 seats, free tools, high churn)",
          healthy:
            "Segment definition combines firmographic bounds with a specific operational friction.",
          unhealthy:
            "Defining a target as 'any company that needs customer support automation.'",
          interpret:
            "Segment B has an acute, time-bound behavioral pain (Black Friday ticket spikes) that Freshworks' out-of-the-box setup solves in days, whereas Segment A requires custom SOC2 audits and custom integrations.",
          soWhat: [
            {
              symptom:
                "candidate segments are defined only by employee count without an operational trigger",
              action:
                "add a behavioral filter before scoring targeting viability",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "stp-audit-targeting-score",
          concept: "Step 2: Targeting",
          lessonAnchor: "step-2-targeting",
          theoryRecap:
            "Score candidate segments against four criteria: Size (is it worth it?), Reach (can you acquire them efficiently?), Advantage (do you have an edge over incumbents?), and Growth (is the segment expanding?). Dominate a small pond first.",
          question:
            "Which segment yields the highest combined score on Advantage + Reach rather than raw market size?",
          toolName: "Google Sheets",
          where:
            "Targeting Evaluation Matrix (Columns: Size 1-5, Reach 1-5, Advantage 1-5, Growth 1-5)",
          procedure: [
            "Score each segment from 1 to 5 across Size, Reach, Advantage, and Growth.",
            "Multiply Advantage by Reach to calculate the acquisition feasibility index.",
            "Identify the winning segment that balances high product fit with low acquisition friction.",
            "Draft the one-paragraph executive summary recommending which segment to fund.",
          ],
          outputSample:
            "Scoring Summary (Scale 1-5):\n- Enterprise Banks: Size 5, Reach 2, Advantage 2, Growth 3 (Total: 12/20, Feasibility: 4)\n- Scaling DTC Brands: Size 4, Reach 5, Advantage 5, Growth 5 (Total: 19/20, Feasibility: 25)\n- Solo Agencies: Size 2, Reach 4, Advantage 3, Growth 2 (Total: 11/20, Feasibility: 12)\n\nVerdict: Dominate Scaling DTC Brands first.",
          healthy:
            "Targeting selection favors high advantage and efficient reach over pure raw market size.",
          unhealthy:
            "Chasing a low-advantage segment simply because the total addressable market dollar figure looks large in a pitch deck.",
          interpret:
            "Scaling DTC brands score 19/20 because Freshworks has an immediate time-to-value advantage over Salesforce and Zendesk in this bracket, and acquisition via app ecosystems (Shopify App Store) is self-serve.",
          soWhat: [
            {
              symptom:
                "sales leadership wants to chase low-feasibility enterprise accounts with 12-month cycles",
              action:
                "present the 19/20 vs 12/20 targeting scorecard showing payback velocity",
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
            role: "Model the 4-part targeting scorecard and feasibility weighting",
            why: "Zero-cost spreadsheet for multi-attribute segment scoring",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Filter historical deals by company size and sales cycle length to validate win rates",
            why: "Enriches scoring with historical CRM closed-won data",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The spreadsheet template completes this project in full. A CRM is only useful for historical deal validation.",
      },
      deliverable:
        "A completed 4-question targeting scorecard for all three segments and a one-paragraph recommendation selecting the primary target.",
      sampleOutput:
        "Targeting Evaluation Matrix — Klaviyo SMS Add-on Expansion\n\nCandidate Segments:\n1. Enterprise Retailers ($50M+ GMV, custom headless stacks): Size 5/5, Reach 2/5, Advantage 2/5, Growth 3/5 -> Total: 12/20\n2. Mid-Market DTC ($2M-$20M GMV, Shopify/BigCommerce): Size 4/5, Reach 5/5, Advantage 5/5, Growth 5/5 -> Total: 19/20\n3. Boutique Brick-and-Mortar (<$250k revenue, POS-only): Size 2/5, Reach 3/5, Advantage 2/5, Growth 2/5 -> Total: 9/20\n\nExecutive Recommendation:\nFund Mid-Market DTC exclusively for Q3 GTM. Klaviyo's 1-click Shopify SMS integration and shared email/SMS profiles provide an unbeatable product advantage against single-point SMS tools (Attentive) and generic enterprise clouds (Salesforce Marketing Cloud). While Enterprise Retailers have larger list sizes, their 9-month custom integration timelines and procurement red tape will tie up engineering. Win 35% market share in the mid-market DTC tier before building custom enterprise adapters.",
      successCriteria: [
        "Correctly breaks down three segments using firmographic and behavioral attributes",
        "Scores each segment across all four targeting dimensions (Size, Reach, Advantage, Growth)",
        "Selects the segment with highest advantage and distribution efficiency rather than raw market size alone",
        "Provides a defensible one-paragraph executive rationale",
      ],
      portfolioReady: true,
    },
    {
      id: "stp-positioning-statement-rebuild",
      tier: "mini",
      archetype: "rebuild",
      title: "The Positioning Overhaul: Rebuilding a Fluffy Feature Pitch into an Internal Compass",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Transform a vague, feature-heavy homepage draft into a disciplined, four-part internal positioning statement (For / Who / Product / Unlike) that clearly differentiates against the category incumbent.",
      companyId: "slack",
      scenario:
        "You're a product marketer at Slack during its early breakout phase. The current marketing draft says: 'Slack is a revolutionary real-time messaging, file sharing, and team collaboration platform with powerful search and hundreds of native app integrations.' It reads like a laundry list of features that Microsoft and Skype could also claim. You need to rewrite it into a sharp internal positioning statement that guides sales and copy.",
      brief:
        "Dissect the weak feature pitch, map the target segment's specific friction, isolate the primary differentiator against email and legacy chat, and write the final four-part positioning statement.",
      mode: "build",
      conceptsCovered: ["Step 3: Positioning", "Common Mistakes"],
      steps: [
        {
          stepId: "stp-positioning-teardown-fluff",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Positioning in features ('we have more integrations') fails because features are easily copied. Effective positioning describes a feeling of fit and an emotional or operational outcome that competitors cannot easily match.",
          question:
            "What makes the draft sentence 'Slack is a real-time messaging and file sharing platform' vulnerable to competitors?",
          toolName: "Google Docs",
          where: "Marketing Positioning Document (Draft Review Section)",
          procedure: [
            "Identify every feature noun in the draft (messaging, file sharing, search, integrations).",
            "Test if an incumbent (e.g. Microsoft Skype/Lync or HipChat) could put the exact same sentence on their homepage.",
            "Isolate the emotional/operational transformation: moving from chaotic inbox silos to transparent, searchable channels.",
          ],
          outputSample:
            "Weak Draft: 'A real-time messaging and file sharing tool with searchable archives.'\nCompetitor Test: Skype, Google Hangouts, and HipChat can make the exact same claim.\nMissing Core Value: Eliminating email silo anxiety and fragmented communication across fast-moving product teams.",
          healthy:
            "Identifies that feature-led claims create zero differentiation against incumbents.",
          unhealthy:
            "Trying to fix a positioning statement by simply adding more feature adjectives (e.g. 'faster, smarter, AI-driven').",
          interpret:
            "A positioning statement that can be copied by an incumbent is invalid. It must stake a claim on a specific problem and point of view.",
          soWhat: [
            {
              symptom:
                "positioning draft describes what the product contains instead of why the customer switches",
              action:
                "strip all feature nouns and rewrite the customer before/after state",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "stp-positioning-statement-assembly",
          concept: "Step 3: Positioning",
          lessonAnchor: "step-3-positioning",
          theoryRecap:
            "Follow the classic four-part positioning framework: For [target], who [need/problem], [Product] is a [category] that [key benefit]. Unlike [main alternative], we [key differentiator].",
          question:
            "How do you structure the four components into a single guiding statement?",
          toolName: "Google Docs",
          where: "Internal Strategic Positioning Compass",
          procedure: [
            "Define the exact target segment and their acute friction in the 'For / Who' clauses.",
            "Define the category and primary emotional/operational benefit in the '[Product] is a [category] that' clause.",
            "Name the primary alternative (email/silos) and the uncompromising differentiator in the 'Unlike / We' clause.",
            "Verify that the statement serves as an internal decision filter for product and copywriting.",
          ],
          outputSample:
            "For modern product and engineering teams who are drowning in fragmented email threads and missed updates, Slack is a channel-based collaboration hub that makes team communication transparent, searchable, and effortless. Unlike internal email and legacy chat tools that trap information in private inboxes, we organize conversations into open channels so knowledge flows automatically across the entire company.",
          healthy:
            "Statement clearly defines target, category, primary benefit, and distinct competitive alternative.",
          unhealthy:
            "Omits the alternative or writes a vague differentiator like 'we provide better customer service.'",
          interpret:
            "This statement clearly stakes out 'channel-based transparency vs private email silos', giving designers, writers, and sales reps an unmistakable standard for what belongs in Slack's messaging.",
          soWhat: [
            {
              symptom: "landing page copy drifts into generic tech jargon",
              action:
                "compare new headlines directly against the 'Unlike' clause of the positioning statement",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft, critique, and version the 4-part positioning statement",
            why: "Collaborative drafting workspace with revision history",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "No paid tools needed. This strategic exercise requires clear thinking and structured drafting.",
      },
      deliverable:
        "A deconstructed analysis of the flawed feature draft and the finished 4-part internal positioning statement.",
      sampleOutput:
        "Positioning Statement Overhaul — Squarespace (vs WordPress)\n\nFlawed Feature Draft:\n'Squarespace is a cloud-based content management system with drag-and-drop templates, hosting, domain registration, and e-commerce capabilities.'\n\nFlaw Breakdown:\nLists six technical features that WordPress + Bluehost also provide. Fails to articulate the emotional relief of never having to update PHP plugins or fix broken server configurations.\n\nFinished Internal Positioning Statement:\nFor creative entrepreneurs and boutique business owners who want a stunning digital storefront without hiring a web developer, Squarespace is an all-in-one website publishing platform that guarantees design-grade visual polish in hours. Unlike WordPress and open-source CMSs that require managing brittle plugins, hosting servers, and security patches, we combine award-winning curated design templates with fully managed infrastructure so your site never breaks.",
      successCriteria: [
        "Isolates why feature-heavy positioning fails the competitor copy test",
        "Follows the exact 4-part framework (For, Who, Product/Category, Unlike/Differentiator)",
        "Positions against a specific alternative (status quo or legacy incumbent)",
        "Produces an internal standard that informs copywriting and marketing creative",
      ],
      portfolioReady: true,
    },
  ],
  "buyer-personas": [
    {
      id: "buyer-personas-fluff-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Fluff Teardown: Stripping Demographic Wallpaper from a B2B Persona",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit a typical 'demographic wallpaper' buyer persona profile, identify 4 critical defects (useless lifestyle details, missing trigger events, fabricated pain points, lack of direct quotes), and extract the few actionable insights that actually influence copy and product.",
      companyId: "zendesk",
      scenario:
        "An external branding agency handed Zendesk's customer service marketing team a 15-page buyer persona for 'Support Manager Susan'. It contains stock photos, her favorite Starbucks drinks, and generic statements like 'values efficiency.' Before the team wastes budget writing campaigns to this profile, you need to tear it down, flag the decorative fluff, and extract the real operational buying signals.",
      brief:
        "Review the provided persona profile specimen. Identify all defects that violate the lesson's rules, distinguish genuine buying signals from demographic wallpaper, and provide the graded teardown.",
      mode: "teardown",
      conceptsCovered: ["What Goes Wrong", "The Quote Test"],
      teardownItems: [
        {
          itemId: "bp-teardown-item-1",
          specimenSource: "synthetic-realistic",
          specimen:
            "PERSONA PROFILE: Support Manager Susan (Age 36)\n\nDEMOGRAPHICS & LIFESTYLE:\n- Married with 2 golden retrievers, drives a Subaru Outback\n- Enjoys weekend yoga and listens to NPR podcasts on her commute\n- Holds a Bachelor's in Communications\n\nGOALS & PAINS:\n- Goals: 'Wants to be an effective leader and optimize team efficiency'\n- Pain Points: 'Doesn't like inefficient processes; feels stressed when tools are slow'\n- Tech Stack: 'Uses a laptop and smartphone daily'\n- Preferred Channels: 'Active on LinkedIn and Facebook'\n\nBUYING MOTIVATION:\n- 'Looking for modern software that helps her team succeed and scales with company growth.'",
          prompt:
            "Identify all critical and moderate defects in 'Support Manager Susan' where demographic fluff or vague generalities replace real operational buying triggers.",
          answerKey: [
            {
              defect:
                "Demographic and lifestyle wallpaper (Subaru, yoga, dogs, NPR) that has zero connection to customer service software evaluation or purchasing behavior",
              severity: "critical",
              whyItMatters:
                "Forces copywriters and media buyers to make arbitrary creative assumptions based on irrelevant personal hobbies rather than work context",
              lessonRef:
                "Demographic wallpaper is the second trap. 'Sarah, 34, likes yoga and reads HBR' is harmless but useless unless those traits connect to how she makes purchasing decisions.",
              owner: "you",
            },
            {
              defect:
                "Vague, meaningless goal ('optimize team efficiency') and generic pain ('feels stressed when tools are slow') without specific operational metrics",
              severity: "critical",
              whyItMatters:
                "Every software buyer on earth wants efficiency; without specific friction (e.g., ticket volume surges, missed SLAs, duplicate responses), marketing cannot write landing page copy that resonates",
              lessonRef:
                "The primary problem they are trying to solve and what they have already tried that did not work.",
              owner: "you",
            },
            {
              defect:
                "Complete absence of a trigger event (the specific catalyst that made her start searching for a new helpdesk today)",
              severity: "critical",
              whyItMatters:
                "The trigger is the most useful detail in a persona—without knowing what broke, ad targeting and lifecycle messaging have no timing relevance",
              lessonRef:
                "The most useful detail in a persona is the trigger: what moment made the customer start looking for a solution.",
              owner: "you",
            },
            {
              defect:
                "Zero customer verbatim quotes or specific objections to purchasing",
              severity: "moderate",
              whyItMatters:
                "Without real quotes, the persona is an internal hypothesis rather than verified customer reality (fails the Quote Test)",
              lessonRef:
                "The Quote Test: A direct quote from a real customer interview, in their exact words. 'I was drowning in spreadsheets' is more useful than 'values efficiency.'",
              owner: "you",
            },
          ],
          distractors: [
            "The persona mentions she uses a laptop and smartphone instead of naming specific operating system version numbers",
            "The profile should include Susan's Myers-Briggs personality type (MBTI) to help writers choose adjectives",
            "The persona has only one role title instead of combining four different job levels into a single profile",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Annotate and document the persona teardown findings",
            why: "Clean workspace for highlighting defects and writing corrections",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "No paid tools needed. This is an analytical critique of a persona artifact.",
      },
      deliverable:
        "A graded teardown report categorizing each element of the persona profile as Actionable Signal, Decorative Fluff, or Dangerous Assumption.",
      sampleOutput:
        "Persona Teardown Audit — Mailchimp SMB Profile ('Boutique Owner Brenda')\n\nFLAGGED DEFECTS:\n1. Fluff: 'Loves vintage flea markets and artisanal bakery pastries' -> Severity: Critical. Zero impact on email marketing tool selection.\n2. Vague Pain: 'Wants to communicate better with shoppers' -> Severity: Critical. Replaced real operational friction (e.g., 'Manually sending individual sale emails took 6 hours every Sunday night').\n3. Missing Trigger: Does not specify what forced the switch (e.g., customer email list crossed 1,000 contacts and Gmail blocked outgoing messages for spam).\n4. Missing Verbatim: No direct customer quote explaining why prior tools failed.\n\nACTIONABLE RECONSTRUCTION:\n- Role: Owner/Sole Operator, 1-location retail boutique\n- Trigger: Reached 1,200 newsletter subscribers; Gmail threw delivery throttle errors during Black Friday promo\n- Failed Alternative: Batch emailing via BCC in Apple Mail / Gmail\n- Primary Fear: Accidental data leak (putting 500 customer emails in CC instead of BCC) and looking unprofessional\n- Verified Quote: 'I almost cried when my email was blocked on Small Business Saturday because Google thought I was a spam bot.'",
      successCriteria: [
        "Identifies demographic wallpaper and explains why it fails the decision-filter test",
        "Flags the missing trigger event as the primary structural defect",
        "Notes the absence of customer verbatim quotes and specific objections",
        "Correctly distinguishes distractors from genuine persona defects",
      ],
      portfolioReady: false,
    },
    {
      id: "buyer-personas-interview-synthesis-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "From Call Recording to Decision Filter: Building a Trigger-First B2B Persona",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Synthesize three raw B2B customer interview transcripts into a single 1-page, trigger-first buyer persona featuring the 5 mandatory components: Core Problem, Failed Alternatives, Trust Triggers, Primary Objection, and Verbatim Customer Quotes.",
      companyId: "freshworks",
      scenario:
        "Freshworks just launched Freshsales for scaling B2B agencies. You conducted 3 discovery calls with recent buyers who switched from spreadsheets and legacy CRMs. Your task is to extract the recurring patterns, discard irrelevant personal banter, and assemble a 1-page persona that product managers, copywriters, and paid ad marketers can immediately use to guide campaigns.",
      brief:
        "Analyze the 3 customer transcripts, identify the shared catalyst/trigger moment, extract the exact customer words for their biggest objection, and build the final 1-page persona asset.",
      mode: "build",
      conceptsCovered: [
        "How to Build a Persona That Actually Works",
        "The Quote Test",
      ],
      steps: [
        {
          stepId: "bp-build-transcript-extraction",
          concept: "How to Build a Persona That Actually Works",
          lessonAnchor: "how-to-build-a-persona-that-actually-works",
          theoryRecap:
            "Aim for interviews with recent buyers, listen for: 1) exact language describing their problem, 2) the trigger moment that made them search, and 3) what almost made them not buy. Layer interview 'why' over CRM 'who'.",
          question:
            "Across the three buyer transcripts below, what was the common breaking point (trigger) that forced them to search for a dedicated CRM?",
          toolName: "Google Docs",
          where: "Customer Discovery Notes (3 Transcript Excerpts)",
          procedure: [
            "Read Transcript 1 (Agency Founder, 18 staff): 'We were tracking 40 deals in Notion and Google Sheets. Then two reps double-pitched the same $60k client with conflicting discounts.'",
            "Read Transcript 2 (Ops Lead, 25 staff): 'Our founder forgot to follow up with a warm referral for three weeks because the spreadsheet row was marked in yellow instead of green.'",
            "Read Transcript 3 (Sales Director, 30 staff): 'I spent 4 hours every Friday manually reconciling who owned which lead across three different spreadsheets.'",
            "Identify the unified trigger: Spreadsheet tracking broke at 15-30 employees, leading to public lead collisions and lost revenue.",
          ],
          outputSample:
            "Shared Trigger: Deal collisions and missed follow-ups caused by shared spreadsheets breaking at >15 employees.\nShared Failed Solution: Color-coded Google Sheets and Notion tables.\nShared Fear: Buying enterprise CRM (Salesforce) that takes 6 months to set up and requires full-time admins.",
          healthy:
            "Synthesizes a concrete operational breaking point shared across multiple real customer accounts.",
          unhealthy:
            "Creating separate personas for each individual interviewee rather than finding the structural common trigger.",
          interpret:
            "The common catalyst is not company age or founder background—it is the operational chaos of multi-rep lead collision in spreadsheets once pipeline exceeds 30 concurrent deals.",
          soWhat: [
            {
              symptom:
                "marketing team drafts ad copy about 'streamlining workflows'",
              action:
                "rewrite the ad hook to target the exact trigger: 'Stop two reps from pitching the same client with different quotes'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "bp-build-persona-asset-assembly",
          concept: "The Quote Test",
          lessonAnchor: "the-quote-test",
          theoryRecap:
            "Build the 1-page persona around 5 core elements: Primary Problem, Failed Alternatives, Trust Triggers, Biggest Objection, and Direct Customer Verbatim Quotes. If it doesn't change a decision, cut it.",
          question:
            "How do you structure the final 1-page persona so every section acts as a decision filter for copy, product, and channel choice?",
          toolName: "Notion",
          where: "GTM Persona Repository",
          procedure: [
            "Assign a functional persona name (e.g. 'Scaling Agency Founder Alex').",
            "Summarize the Primary Problem in terms of felt commercial risk (reputation damage from lead collisions).",
            "Document What Was Tried Before (Google Sheets, Notion, HubSpot Free Tier).",
            "List What Builds Trust (2-minute self-serve setup, no credit card required, instant CSV import).",
            "State the Biggest Objection ('My reps will refuse to log data if it takes more than 3 clicks').",
            "Insert at least two verbatim customer quotes verified from the interview transcripts.",
          ],
          outputSample:
            "BUYER PERSONA: Scaling Agency Alex\n- Role: Founder / Managing Director (15-35 employees)\n- Trigger: Two account managers double-emailed a $50k prospect with conflicting price proposals from an outdated Google Sheet.\n- Primary Problem: Loss of revenue and agency credibility from chaotic, uncoordinated deal handoffs.\n- Tried Before: Color-coded Google Sheets, Notion pipeline boards (broke when team grew past 3 reps).\n- Trust Factors: 14-day full-feature free trial, 5-minute CSV lead import, zero implementation consultant fees.\n- Biggest Objection: 'My team hates admin; if this takes more than 30 seconds per call update, they'll go back to their private notes.'\n- Real Quotes: 'We lost a $60k deal because nobody knew who was supposed to send the revised contract.' / 'I don't need a spaceship CRM, I just need to know who owns what.'",
          healthy:
            "Persona contains zero decorative fluff and provides instant clarity for ad copy hooks, feature prioritization, and onboarding flows.",
          unhealthy:
            "Including lifestyle details or vague corporate slogans that fail to guide concrete copy or UX decisions.",
          interpret:
            "Every line in this completed profile directly dictates a marketing action: the homepage headline must speak to lead ownership and speed, onboarding must feature instant CSV import, and product must minimize click-depth for daily logging.",
          soWhat: [
            {
              symptom:
                "product team plans a complex 10-step deal configuration wizard",
              action:
                "cite Alex's biggest objection ('takes more than 30 seconds') to simplify the flow to 2 steps",
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
            role: "Format and store the 1-page buyer persona decision card",
            why: "Clean database/page format for team-wide sharing",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Review raw customer interview transcripts",
            why: "Standard transcript reading and highlighting tool",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Validate customer deal sizes and sales cycle lengths against interview claims",
            why: "Enriches qualitative interview insights with closed-won CRM data",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Notion and Google Docs complete this project in full without any paid subscriptions.",
      },
      deliverable:
        "A complete 1-page trigger-first buyer persona document containing the 5 core elements and verified customer quotes.",
      sampleOutput:
        "1-Page Persona: Data Engineering Lead David (Snowflake)\n\nProfile & Context:\n- Role: VP / Director of Data Engineering (Mid-Market B2B SaaS, 200-800 employees)\n- The Trigger: Nightly ETL batch jobs took 7 hours and crashed at 4 AM, delaying executive reporting dashboards for the 3rd time in one month.\n- Primary Problem: Legacy on-premise data warehouses require constant manual compute tuning, locking engineering into maintenance instead of building user-facing features.\n- Tried Before: Optimizing Hadoop clusters and scaling Redshift nodes (resulted in spiraling idle compute costs and maintenance overhead).\n- Trust Factors: Instant 30-day trial with preloaded sample workloads, separation of storage and compute pricing, SOC2 compliance out of the box.\n- Biggest Objection: 'Will running ad-hoc queries from our analytics team blow through our quarterly cloud budget in two weeks?'\n- Verified Quotes:\n  1. 'I spent my entire Sunday fixing a crashed nightly aggregation pipeline while our CEO was waiting for board metrics.'\n  2. 'I don't want my senior engineers spending half their week managing cluster indexing; we need query compute that turns off when it's done.'\n\nMarketing Application:\n- Homepage Headline: 'Run queries in seconds, not hours—without managing infrastructure.'\n- Primary Proof Asset: Architecture comparison showing automatic compute suspension.",
      successCriteria: [
        "Extracts a unified operational trigger event across multiple customer interview transcripts",
        "Builds the complete 5-element persona framework (Problem, Failed Solutions, Trust Factors, Objection, Quotes)",
        "Contains zero demographic fluff or irrelevant personal lifestyle traits",
        "Every section provides a direct decision filter for copy, product, or sales",
      ],
      portfolioReady: true,
    },
  ],

  // -------------------------------------------------------------------
  // positioning
  // -------------------------------------------------------------------
  "positioning": [
    {
      id: "positioning-copy-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Category Trap: Tearing Down 3 Broken Positioning Statements",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate three synthetic B2B SaaS positioning statements against the lesson's core rules (avoiding 'better', framing the category, establishing defensibility, and passing the 'only' test), pinpointing fatal positioning defects and distinguishing genuine flaws from cosmetic copy choices.",
      companyId: "slack",
      scenario:
        "You are advising an early-stage B2B enterprise collaboration startup built during the rise of team chat (in the spirit of Slack's 2013 launch phase). The founder has drafted three alternative positioning angles for their landing page and pitch deck, but every draft triggers investor skepticism. You need to identify which fundamental positioning errors each specimen makes before they spend budget on paid traffic.",
      brief:
        "Review 3 positioning specimens. For each specimen, identify whether it falls into the 'better' trap, lacks a clear frame of reference, makes non-defensible feature claims, or fails the 'Only' test. Flag genuine defects against the answer key while rejecting cosmetic distractors.",
      mode: "teardown",
      conceptsCovered: [
        "Why Better Is a Losing Strategy",
        "Common Mistakes",
        "The Only Test",
      ],
      teardownItems: [
        {
          itemId: "teardown-pos-specimen-1",
          specimen:
            "Specimen A (B2B Project Tracker):\n\"The world's best, fastest project management platform with 50+ cutting-edge features, AI-powered automation, and superior UI designed to help all teams collaborate better than Asana or Monday.com.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the critical strategic flaws in Specimen A's positioning statement.",
          answerKey: [
            {
              defect:
                "Competes on 'better' inside an incumbent's established category instead of claiming a distinct point of difference",
              severity: "critical",
              whyItMatters:
                "Claiming to be 'better, faster' invites direct comparison against well-funded incumbents (Asana, Monday.com) who already own category mindshare, reviews, and trust.",
              lessonRef:
                "Why 'Better' Is a Losing Strategy: Comparisons favor whoever already owns the category",
              owner: "you",
            },
            {
              defect:
                "Targets 'all teams' with a generic feature laundry list rather than a specific, well-defined audience with an acute pain point",
              severity: "critical",
              whyItMatters:
                "Positioning to everyone means owning no one; lack of segmentation makes the product the first choice for nobody.",
              lessonRef:
                "Common Mistakes: Positioning to everyone means owning no one",
              owner: "you",
            },
          ],
          distractors: [
            "Mentions competitor names directly in the positioning draft",
            "Sentence is grammatically complex with too many clauses",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-pos-specimen-2",
          specimen:
            "Specimen B (Customer Feedback Tool):\n\"We are an innovative, all-in-one AI platform that synergizes customer insights and transforms cross-functional business growth across every touchpoint.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the core positioning failure in Specimen B.",
          answerKey: [
            {
              defect:
                "Fails the 'Only' test by using empty placeholder jargon ('innovative all-in-one platform') without naming a recognizable frame of reference or concrete point of difference",
              severity: "critical",
              whyItMatters:
                "Without a clear category frame, prospective buyers have no mental anchor to understand what problem this solves or what budget it comes from.",
              lessonRef:
                "The 'Only' Test: If you cannot fill in category and point of difference, you have a direction, not a position",
              owner: "you",
            },
            {
              defect:
                "Confuses internal aspirational messaging with strategic positioning",
              severity: "moderate",
              whyItMatters:
                "Buzzwords like 'synergizes' and 'transforms business growth' fail to communicate the single defensible truth the company aligns around.",
              lessonRef:
                "Common Mistakes: Confusing positioning with messaging",
              owner: "you",
            },
          ],
          distractors: [
            "Mentions AI in the description",
            "Lacks a customer testimonial quote in the statement",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-pos-specimen-3",
          specimen:
            "Specimen C (DevOps Alert System):\n\"The only incident alert tool with customizable dark-mode dashboard themes and 12 distinct notification beep sounds for cloud engineering teams.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the structural defect in Specimen C's differentiator.",
          answerKey: [
            {
              defect:
                "Point of difference is anchored on superficial features (dark mode, sound alerts) rather than a defensible business model, structural workflow advantage, or core customer value",
              severity: "critical",
              whyItMatters:
                "Superficial feature differences can be copied by rivals in days; defensible positions require structural, workflow, or business-model moats.",
              lessonRef:
                "Step 3: Make It Defensible: Tie your position to business model, story, distribution, or technology moat, not just an easily copied feature",
              owner: "you",
            },
          ],
          distractors: [
            "Target customer is too narrowly restricted to cloud engineering teams",
            "Does not state the monthly subscription pricing in the statement",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Document and score teardown specimens",
            why: "Structured notes and side-by-side comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This teardown requires only analytical evaluation against the lesson framework. No paid tooling required.",
      },
      deliverable:
        "A scored teardown report classifying 3 positioning statements with root-cause diagnoses for their category, differentiation, and defensibility errors.",
      sampleOutput:
        "Positioning Teardown Audit (Worked Reference: Early Mailchimp Challenger)\n\nSpecimen Evaluated:\n\"The most advanced, high-power email automation suite with 200+ enterprise integrations designed to help all marketers send better campaigns than Mailchimp.\"\n\nDefect Diagnosis:\n1. Category Trap: Claims 'better email suite' vs Mailchimp, anchoring on an incumbent's turf where Mailchimp holds 60%+ SMB mindshare.\n2. Target Vagueness: 'All marketers' dilutes focus; fails to segment high-volume transactional senders from boutique creators.\n3. Indefensible Moat: '200+ integrations' is a feature checklist easily matched by rivals rather than a structural advantage.\n\nRemedy ('Only' Test Restructure):\n\"Postmark is the only transactional email service that guarantees zero inbox delay for web application developers who cannot risk password-reset emails landing in spam.\"",
      successCriteria: [
        "Correctly flags competing on 'better' in Specimen A",
        "Identifies lack of category frame and placeholder jargon in Specimen B",
        "Identifies cosmetic feature trap versus defensible moat in Specimen C",
        "Distinguishes core positioning failures from superficial copy distractors",
      ],
      portfolioReady: false,
    },
    {
      id: "positioning-dunford-five-step-rebuild",
      tier: "core",
      archetype: "rebuild",
      title:
        "From Feature List to Category Dominance: Rebuilding B2B Positioning with Dunford's 5-Step Framework",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Apply April Dunford's five-component positioning framework (competitive alternatives, unique attributes, customer value, target segment, and market category) to reposition a crowded B2B software product, formulating an airtight 'Only' statement and a defensibility audit.",
      companyId: "freshworks",
      scenario:
        "You are the product marketing lead at Freshworks (FRSH) during the early expansion of Freshdesk. The customer service software market is fiercely competitive: Zendesk dominates mid-market tech companies, Salesforce Service Cloud dominates legacy enterprise, and hundreds of SMBs still manage support out of a shared Gmail inbox. Sales reps report prospects asking 'how are you different from Zendesk?', and your homepage is slipping into generic feature-comparison territory.",
      brief:
        "Rebuild Freshworks' core customer-support positioning from the ground up using the lesson's three-step positioning process and Dunford's 5-part framework. Map competitive alternatives (including 'doing nothing / shared inbox'), isolate the single authentic point of difference, define the ideal customer profile, choose the winning frame of reference, and validate defensibility against the 'Only' test.",
      mode: "build",
      conceptsCovered: [
        "Choose Your Frame of Reference",
        "Find Your Point of Difference",
        "Make It Defensible",
        "The Only Test",
      ],
      steps: [
        {
          stepId: "step-1-frame-of-reference",
          concept: "Choose Your Frame of Reference",
          lessonAnchor: "step-1-choose-your-frame-of-reference",
          theoryRecap:
            "The lesson's Step 1 establishes that your market category (frame of reference) dictates who your competitors are, what price you can charge, and which features matter. Slack succeeded by framing against email rather than enterprise chat.",
          question:
            "What frame of reference allows Freshdesk to avoid a direct head-on slugfest with heavyweight enterprise suites while standing miles above shared email inboxes?",
          toolName: "Notion",
          where:
            "Positioning workspace table -> Section 1: Frame of Reference & Competitive Alternatives",
          procedure: [
            "List the primary competitive alternatives prospects use when they do not buy your product: (1) Shared Gmail/Outlook inbox, (2) Heavy enterprise suites like Salesforce/ServiceNow, (3) Complex mid-market helpdesks like Zendesk.",
            "Identify what baggage and pricing expectations each frame carries for a 20-person support team.",
            "Define the category frame that highlights fast time-to-value and low administrative overhead rather than endless enterprise customization.",
          ],
          outputSample:
            "Frame Analysis:\n- Alternative A: Shared Gmail/Outlook (Free, zero setup, but chaotic, collisions, no ticket routing)\n- Alternative B: Salesforce Service Cloud (Enterprise, $150+/agent/mo, requires full-time admin and 6-month rollout)\n- Target Frame: 'Modern, setup-in-minutes customer support software for fast-growing teams who refuse enterprise bloat'",
          healthy:
            "Category frame immediately positions the product against both chaotic inboxes and bloated enterprise tools.",
          unhealthy:
            "Selecting 'Enterprise Customer Relationship Management Platform', forcing direct RFP comparisons with Salesforce on enterprise feature checkboxes.",
          interpret:
            "Your category frame must make your strengths obvious and your competitors' strengths irrelevant for your chosen segment.",
          soWhat: [
            {
              symptom:
                "Prospects compare your product to $50k enterprise platforms",
              action:
                "Refocus the category frame on 'frictionless setup and lightweight agility'",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-point-of-difference",
          concept: "Find Your Point of Difference",
          lessonAnchor: "step-2-find-your-point-of-difference",
          theoryRecap:
            "Step 2 requires identifying the single point of difference that delivers distinct customer value. April Dunford's framework links unique attributes directly to business outcomes for the customer, not a feature list.",
          question:
            "Which unique capability translates into the single highest-value business outcome for high-velocity support teams?",
          toolName: "Notion",
          where:
            "Positioning workspace table -> Section 2: Attribute-to-Value Mapping",
          procedure: [
            "List 3 candidate features (e.g., intuitive multi-channel ticketing UI, built-in phone channel, transparent per-agent pricing with zero setup fee).",
            "Convert each feature input into a tangible customer outcome (e.g., agents onboard in 15 minutes without certification; team saves 60% on total cost of ownership).",
            "Select the single primary point of difference that competitors cannot claim without undermining their own enterprise business model.",
          ],
          outputSample:
            "Feature: Zero-configuration omnichannel inbox with transparent self-serve pricing.\nOutcome: Support teams launch full ticketing, chat, and phone in under one day with zero IT assistance, cutting response time by 45%.\nPoint of Difference: 'The only omnichannel helpdesk that delivers instant agent productivity without implementation consultants or multi-month contracts.'",
          healthy:
            "Point of difference names one clear, demonstrable customer outcome tied directly to product design.",
          unhealthy:
            "Listing 10 generic features ('AI, reporting, macros, integrations') as the differentiator.",
          interpret:
            "If your point of difference requires a bulleted list, you have not isolated your core strategic advantage.",
          soWhat: [
            {
              symptom:
                "Sales deck lists 15 bullet points on the 'Why Choose Us' slide",
              action:
                "Consolidate to the one core outcome that addresses the customer's primary frustration",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-defensibility-audit",
          concept: "Make It Defensible",
          lessonAnchor: "step-3-make-it-defensible",
          theoryRecap:
            "Step 3 tests whether the position is anchored in structural advantages—such as business model, distribution, or architecture—that competitors cannot copy in a single quarter.",
          question:
            "Why can legacy enterprise incumbents not easily clone this positioning without cannibalizing their core revenue?",
          toolName: "Google Sheets",
          where: "Competitive Moat Matrix -> Defensibility Audit Tab",
          procedure: [
            "Evaluate the incumbent's revenue model: enterprise vendors rely heavily on professional services fees, multi-year lock-in, and tiered enterprise addons.",
            "Assess the competitor's innovator dilemma: if an enterprise competitor attempts to simplify setup and slash prices, they cannibalize their lucrative implementation partner ecosystem.",
            "Document how Freshworks' self-serve, cloud-native architecture creates a durable structural cost advantage.",
          ],
          outputSample:
            "Defensibility Moat Audit:\n- Competitor Constraint: Legacy enterprise vendors earn 20-30% of revenue from professional implementation services.\n- Incumbent Dilemma: Sponsoring a 'self-serve 10-minute setup' narrative alienates their partner network.\n- Structural Edge: Freshworks' bottom-up trial model and intuitive UI creates viral land-and-expand adoption at a fraction of legacy customer acquisition cost.",
          healthy:
            "Position is protected by the incumbent's economic model and organizational inertia.",
          unhealthy:
            "Assuming UI cleanliness alone is a permanent moat without business model defensibility.",
          interpret:
            "The strongest positions leverage the competitor's own business model against them.",
          soWhat: [
            {
              symptom:
                "Competitor launches a promotional campaign copying your headline",
              action:
                "Double down on self-serve product trials where their sales-heavy model cannot follow",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-the-only-test",
          concept: "The Only Test",
          lessonAnchor: "the-only-test",
          theoryRecap:
            "The 'Only' Test forces rigorous positioning discipline: '[Brand] is the only [category] that [point of difference] for [target customer].'",
          question:
            "How do you synthesize the frame, differentiator, and target customer into an airtight, defensible positioning statement?",
          toolName: "Notion",
          where:
            "Positioning Synthesis -> Final One-Sentence Position Statement",
          procedure: [
            "Fill in all four components: Brand, Category Frame, Point of Difference, and Target Customer.",
            "Run the substitution test: replace 'Freshdesk' with 'Zendesk' or 'Salesforce'—the statement must become false or absurd.",
            "Run the exclusion test: ensure the statement clearly repels massive Fortune 500 legacy RFP procurement buyers who demand 12-month on-prem custom consulting.",
          ],
          outputSample:
            "Positioning Statement:\n'Freshdesk is the only customer support platform that provides complete multi-channel ticketing with zero-day setup and transparent pricing for fast-growing companies that need immediate agent productivity without enterprise complexity or consulting overhead.'\n\nSubstitution Check: Fails if Zendesk or Salesforce is inserted (neither offers zero-day setup with zero enterprise overhead).\nExclusion Check: Clearly excludes companies seeking customized multi-million dollar on-prem legacy deployments.",
          healthy:
            "Statement passes the substitution test and gives sales, marketing, and product a single unifying anchor.",
          unhealthy:
            "Writing a fluffy slogan ('The smart way to delight customers') that fails all four 'Only' test blanks.",
          interpret:
            "An effective positioning statement is an internal strategic compass, not a public tagline.",
          soWhat: [
            {
              symptom:
                "Marketing copy drifts into generic claims across different landing pages",
              action:
                "Benchmark every headline against the core 'Only' statement before publishing",
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
            role: "Draft the 5-component Dunford framework and synthesize the Only Test statement",
            why: "Structured document templates with version comparison",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Conduct the competitor defensibility and moat audit",
            why: "Tabular evaluation of incumbent constraints and unit economics",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Strategic positioning exercises require no paid software; standard collaborative doc and spreadsheet tooling is completely sufficient.",
      },
      deliverable:
        "A complete 5-component B2B positioning dossier containing competitive alternative mapping, point of difference breakdown, incumbent defensibility matrix, and a validated 'Only' positioning statement.",
      sampleOutput:
        "B2B Product Positioning Dossier (Worked Example: Postman API Platform)\n\n1. Market Category (Frame of Reference):\n   API Collaboration Platform (repositioned away from 'simple HTTP testing utility')\n\n2. Competitive Alternatives:\n   - cURL scripts and command-line tools (free, but siloed, non-shareable, high friction for non-devs)\n   - Heavy API management gateways like Apigee/MuleSoft (enterprise-governed, rigid, disconnected from daily developer workflows)\n\n3. Point of Difference & Customer Value:\n   - Unique Attribute: Shared team workspaces with automated mocking, documentation, and live test collections.\n   - Core Customer Value: Eliminates cross-team API integration friction, reducing API development lifecycle from weeks to hours.\n\n4. Target Customer:\n   Engineering teams and product developers building modular, microservices-driven web and cloud applications.\n\n5. Defensibility Moat:\n   Network effects of public/private API workspaces and developer bottom-up adoption; enterprise API gateways cannot replicate grassroots developer workflow affinity.\n\n6. Synthesized 'Only' Statement:\n   \"Postman is the only collaborative API platform that unites the entire API development lifecycle in shared workspaces for software teams who need to design, test, and ship reliable APIs at high velocity.\"",
      successCriteria: [
        "Identifies real competitive alternatives beyond direct software rivals (including 'doing nothing')",
        "Extracts a single, value-driven point of difference rather than a feature checklist",
        "Evaluates structural competitor constraints to prove positioning defensibility",
        "Passes the 'Only' test with a non-interchangeable position statement",
        "Passes the substitution and exclusion checks",
      ],
      portfolioReady: true,
      stretch:
        "Conduct 3 mock customer-objection teardowns: write the exact 2-sentence script sales reps should use when a prospect asks 'Why shouldn't we just stick with our shared Gmail inbox?' and 'Why shouldn't we upgrade to Salesforce Service Cloud?'",
    },
  ],

  // -------------------------------------------------------------------
  // customer-journey
  // -------------------------------------------------------------------
  "customer-journey": [
    {
      id: "customer-journey-touchpoint-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 5-Stage Funnel Audit: Finding Dropoffs in a SaaS Journey Map",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit a multi-channel SaaS customer touchpoint map across Awareness, Consideration, Decision, Retention, and Advocacy in Google Analytics 4 and Miro, identifying stage mismatches, missing bridge content, and post-purchase neglect.",
      companyId: "zendesk",
      scenario:
        "You are the growth marketing manager at a B2B SaaS customer communication platform (modeled after Zendesk's mid-market support suite). The executive team is puzzled: top-of-funnel web traffic is up 40%, but trial-to-paid conversion is down 22% and 90-day logo churn has ticked up. You must map all existing marketing assets against the 5 journey stages to diagnose where prospects and new customers are stalling.",
      brief:
        "Audit 12 marketing touchpoints across the 5 journey stages. Categorize each asset, evaluate whether its messaging matches the customer's core question at that stage, identify where top-of-funnel traffic is being prematurely pitched with Decision-stage discounts, and flag the post-purchase retention void.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Five Stages in Plain English",
        "Stage 4: Retention",
      ],
      steps: [
        {
          stepId: "cj-audit-stage-alignment",
          concept: "The Five Stages in Plain English",
          lessonAnchor: "the-five-stages-in-plain-english",
          theoryRecap:
            "The lesson breaks the journey into 5 stages with distinct customer questions: Awareness ('Do I have a problem?'), Consideration ('What are my options?'), Decision ('Why pick you?'), Retention ('Did I choose right?'), and Advocacy ('Who else should know?'). Mismatching message and stage destroys conversion.",
          question:
            "Which touchpoints in the marketing audit suffer from severe stage mismatch, such as pushing hard discounts to cold awareness traffic?",
          toolName: "Google Analytics 4",
          where:
            "Reports -> Engagement -> Pages and screens (cross-referenced with Campaign Acquisition)",
          procedure: [
            "Review the list of 12 current marketing campaigns and landing pages.",
            "Assign each asset to its intended journey stage and inspect its primary Call to Action (CTA).",
            "Identify cold paid search ads sending Awareness-level 'how to reduce support tickets' searchers directly to a 'Buy Annual Plan Now - 20% Off' checkout page with an 88% bounce rate.",
            "Flag the lack of Consideration-stage comparison guides or product interactive tours.",
          ],
          outputSample:
            "Touchpoint Stage Audit Table:\n1. Ad: 'Best Support Tips 2026' (Search) -> Landing: /checkout-annual (CTA: Buy Now) | Verdict: CRITICAL MISMATCH (Awareness traffic sent to Decision checkout)\n2. Blog: 'What is Omnichannel Support?' -> CTA: 'Download Free Architecture Blueprint' | Verdict: HEALTHY (Awareness aligned)\n3. Comparison Page: 'Our Platform vs Intercom vs Zendesk' -> CTA: 'Start 14-Day Free Sandbox' | Verdict: HEALTHY (Consideration aligned)\n4. Post-signup Trial: 0 automated onboarding emails sent between Day 2 and Day 14 | Verdict: CRITICAL GAP (Retention void)",
          healthy:
            "Every touchpoint's CTA directly answers the question corresponding to the buyer's current stage.",
          unhealthy:
            "Routing cold discovery traffic to hard-close sales pages or offering top-of-funnel ebooks to buyers ready for a pricing demo.",
          interpret:
            "Sending Decision-stage messages to Awareness visitors burns ad spend and creates high bounce rates without intent.",
          soWhat: [
            {
              symptom:
                "Paid acquisition bounce rate exceeds 80% on search campaigns",
              action:
                "Redirect Awareness search queries to educational problem-solving hubs with soft newsletter or guide CTAs",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "cj-audit-retention-gap",
          concept: "Stage 4: Retention",
          lessonAnchor: "stage-4-retention",
          theoryRecap:
            "Stage 4 addresses buyer's remorse and early adoption: 'Did I make the right choice?' Acquiring a customer costs 5-7x more than retaining one, yet post-purchase onboarding is the most frequently neglected phase in marketing.",
          question:
            "How does the absence of post-purchase onboarding touchpoints explain the 90-day churn spike, and what milestone trigger should be implemented immediately?",
          toolName: "Miro",
          where: "Customer Journey Board -> Retention & Onboarding Swimlane",
          procedure: [
            "Map the touchpoints that occur immediately after the credit card or trial activation event.",
            "Track the time gap between signup and the user's 'first ticket resolved' activation moment.",
            "Design a 3-part onboarding milestone sequence (Day 1: Quick-start template, Day 3: Channel integration check, Day 7: First report review) to eliminate the post-sale communication void.",
          ],
          outputSample:
            "Retention Touchpoint Diagnosis:\n- Current State: 1 automated receipt email at Day 0, then radio silence until Day 30 renewal billing reminder.\n- Customer Dropoff: 41% of trial accounts never connect an email/chat channel because they encounter setup friction on Day 2.\n- Remediation Plan: Trigger in-app Slackbot/email helper when an account reaches Day 3 without connecting an inbox, guiding them to first ticket resolution.",
          healthy:
            "A structured onboarding sequence guides the user to their first meaningful product win within 48 hours.",
          unhealthy:
            "Treating conversion as the end of marketing and abandoning new users until renewal time.",
          interpret:
            "Retention is active marketing, not passive customer support. Early post-purchase touchpoints cement product value before doubt sets in.",
          soWhat: [
            {
              symptom: "New user 30-day dropoff exceeds 35%",
              action:
                "Implement an automated milestone-triggered onboarding email sequence tied to first-run setup actions",
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
            role: "Analyze bounce rates, user acquisition funnels, and stage dropoffs",
            why: "Standard free platform for measuring web traffic and conversion paths",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Miro",
            role: "Visualize the 5-stage touchpoint journey map and map gap remediation",
            why: "Collaborative whiteboard template for customer journey mapping",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "GA4 and Miro provide full free tiers capable of end-to-end customer journey tracking and touchpoint diagramming.",
      },
      deliverable:
        "A complete 5-stage customer journey audit matrix in Miro highlighting touchpoint stage mismatches, conversion leakages, and a post-purchase onboarding blueprint.",
      sampleOutput:
        "SaaS Journey Audit & Gap Matrix (Worked Example: Early Slack Expansion)\n\nStage 1: Awareness (Question: 'Do I have a problem?')\n- Current Touchpoint: Blog post 'Why Team Inboxes Become Black Holes'\n- CTA: 'Read the 5 signs of communication breakdown'\n- Audit Verdict: ALIGNED. Engages reader around shared frustration without hard-pitching software.\n\nStage 2: Consideration (Question: 'What are my options?')\n- Current Touchpoint: Interactive tool 'Team Communication Time-Waste Calculator'\n- CTA: 'See how your team compares to industry benchmarks'\n- Audit Verdict: ALIGNED. Provides objective evaluation criteria.\n\nStage 3: Decision (Question: 'Why pick you specifically?')\n- Current Touchpoint: 3-minute self-guided interactive product tour + SOC2 Security Whitepaper\n- CTA: 'Create a Free Team Workspace in 60 Seconds'\n- Audit Verdict: ALIGNED. Removes friction and addresses IT compliance objections.\n\nStage 4: Retention (Question: 'Did I make the right choice?')\n- Current Touchpoint: Slackbot automated onboarding prompts driving toward the 2,000-message milestone\n- CTA: 'Invite 3 teammates to join your #general channel'\n- Audit Verdict: CRITICAL ASSET. Directly drives team activation to the 93% retention threshold.\n\nStage 5: Advocacy (Question: 'Who else should know about this?')\n- Current Touchpoint: 'Share your team's weekly focus stats' export graphic\n- CTA: 'Tweet your team's zero-unread celebration'\n- Audit Verdict: HIGH LEVERAGE. Loops organic advocacy back into top-of-funnel Awareness.",
      successCriteria: [
        "Accurately classifies touchpoints into the 5 core journey stages",
        "Identifies stage-mismatched CTAs that push premature purchase commitments",
        "Identifies retention and onboarding gaps in the post-purchase lifecycle",
        "Produces an actionable remediation roadmap to fix high-leakage stages",
      ],
      portfolioReady: false,
    },
    {
      id: "customer-journey-messy-middle-teardown",
      tier: "mini",
      archetype: "teardown",
      title:
        "The Messy Middle Teardown: Dissecting 3 B2B Mid-Funnel Re-entry Failures",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Diagnose three real-world mid-funnel campaign failures where B2B buyers stalled between exploration and evaluation loops, spotting fatal behavioral friction and identifying missing cognitive bias anchors.",
      companyId: "slack",
      scenario:
        "You are analyzing mid-funnel campaign data for a B2B collaboration platform (modeled after Slack's self-serve team expansion). Marketing data reveals that over 65% of evaluators visit the website, compare feature plans, and then vanish into a 45-day exploration/evaluation loop without taking action. You need to inspect three marketing campaign specimens aimed at this 'messy middle' audience and flag their structural defects.",
      brief:
        "Evaluate 3 campaign specimens targeting mid-funnel buyers stuck in exploration and evaluation loops. Spot defects such as lack of social proof, missing category heuristics, absence of re-entry retargeting, or forcing a rigid linear path, against the answer key.",
      mode: "teardown",
      conceptsCovered: [
        "The Messy Middle, Why the Journey Is Not Linear",
        "Stage 2: Consideration",
        "Stage 3: Decision",
      ],
      teardownItems: [
        {
          itemId: "teardown-mm-specimen-1",
          specimen:
            "Specimen 1 (Retargeting Ad Sequence):\n\"A prospect visits the pricing page, looks at the Enterprise tier, and leaves without signing up. Over the next 14 days, they receive 8 identical retargeting display banner ads that read: 'BUY NOW: Limited Time 10% Off Your First Year!'\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the core flaw in Specimen 1's messy-middle retargeting approach.",
          answerKey: [
            {
              defect:
                "Treats an evaluation-loop stall as a pricing discount problem rather than resolving information and comparison uncertainty",
              severity: "critical",
              whyItMatters:
                "Enterprise evaluators rarely stall over a 10% discount; they stall because they cannot evaluate security compliance, implementation effort, or team buy-in.",
              lessonRef:
                "The 'Messy Middle', Why the Journey Is Not Linear: Real buyers get stuck in a loop between exploration and evaluation",
              owner: "you",
            },
            {
              defect:
                "Repeats identical low-information banners instead of providing category heuristics or customer case study proof",
              severity: "moderate",
              whyItMatters:
                "Buyers cycling through evaluation need social proof and concrete differentiation to build purchase confidence, not repetitive ad fatigue.",
              lessonRef:
                "Stage 2: Consideration: Good Consideration content includes comparison pages, case studies, and detailed guides",
              owner: "you",
            },
          ],
          distractors: [
            "The 10% discount percentage is too small to appeal to enterprise buyers",
            "Ad banner dimensions should be vertical rather than display rectangles",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-mm-specimen-2",
          specimen:
            "Specimen 2 (Mid-Funnel Comparison Asset):\n\"A SaaS vendor creates a comparison page titled 'Us vs. Competitor X'. The page awards the vendor 5 green checkmarks in every category and gives Competitor X 5 red crosses, claiming the vendor is 100% superior across all dimensions with zero concessions or neutral third-party benchmark citations.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify why Specimen 2 fails to help buyers navigate the evaluation loop.",
          answerKey: [
            {
              defect:
                "Lacks credibility and objective evaluation heuristics, destroying trust during the buyer's critical research phase",
              severity: "critical",
              whyItMatters:
                "Buyers do 57-70% of research independently; one-sided 'all-green vs all-red' matrices are dismissed as biased propaganda, pushing buyers back to Reddit and third-party review sites.",
              lessonRef:
                "Why the Customer Journey Exists: Buyers do 57-70% of their research before ever contacting a company; they read reviews and check comparisons",
              owner: "you",
            },
          ],
          distractors: [
            "Comparison pages should never mention a direct competitor by name",
            "The page should require an email address before revealing comparison rows",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-mm-specimen-3",
          specimen:
            "Specimen 3 (Nurture Sequence Flow):\n\"A user downloads a top-of-funnel whitepaper on 'The Future of Remote Work'. The automated CRM immediately enrolls them in a 5-day daily email drip from an Account Executive asking: 'When are you free for a 30-minute demo this Thursday or Friday?'\"",
          specimenSource: "synthetic-realistic",
          prompt: "Identify the journey failure in Specimen 3.",
          answerKey: [
            {
              defect:
                "Prematurely escalates an early Awareness/Exploration interaction into a high-friction Decision sales pitch",
              severity: "critical",
              whyItMatters:
                "Sending Decision-stage sales calls to early exploration readers damages trust and causes immediate unsubscribes before the customer has even evaluated options.",
              lessonRef:
                "The two most common mistakes brands make: Sending Decision-stage messages to Awareness-stage audiences",
              owner: "you",
            },
          ],
          distractors: [
            "The Account Executive should have called the prospect on the phone instead of emailing",
            "Email drips should always be sent at 9:00 AM local time",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Review and score mid-funnel marketing teardown specimens",
            why: "Documenting evaluation criteria and answer key checks",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Teardown analysis is fully supported with free collaborative note and documentation tools.",
      },
      deliverable:
        "A diagnostic teardown report analyzing 3 flawed mid-funnel campaign specimens with behavioral science remedies for the messy middle.",
      sampleOutput:
        "Messy Middle Teardown Scorecard (Worked Example: Notion Enterprise Evaluation)\n\nSpecimen Diagnosed:\nCold retargeting campaign offering $50 Amazon gift cards for booking an enterprise workspace demo after a user viewed a public template gallery page.\n\nFlaw Analysis:\n1. Stage Disconnect: Viewing a community template is an Exploration activity (problem-discovery). A $50 gift card demo pitch is a forced Decision intervention that creates transactional resistance.\n2. Missing Evaluation Anchor: The evaluator needs to know if Notion can import their team's existing Trello boards and Google Docs without data loss, not a sales presentation.\n3. Remediation: Replace the demo ad with a modular migration guide: \"How Engineering Teams Move from Confluence to Notion in 3 Steps (with Migration Checklist).\"",
      successCriteria: [
        "Identifies improper discount escalations during evaluation-loop stalls in Specimen 1",
        "Identifies credibility collapse in one-sided comparison pages in Specimen 2",
        "Identifies premature sales demo escalation on top-of-funnel readers in Specimen 3",
        "Rejects superficial format and timing distractors in favor of journey-stage diagnosis",
      ],
      portfolioReady: false,
    },
  ],
};
