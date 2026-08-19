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

  "4ps-7ps": [
    {
      id: "4ps-7ps-diagnostic-funnel-audit",
      tier: "mini",
      archetype: "audit",
      title: "Find the Broken P: Diagnosing a Stalled DoorDash Market Launch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a snapshot of launch metrics for a new DoorDash market, walk the 7 Ps diagnostic funnel in the lesson's prescribed order (Product, Price, Place, Promotion, People, Process, Physical Evidence) to identify which single P is actually broken, instead of defaulting to 'more promotion.'",
      companyId: "doordash",
      scenario:
        "You're a launch marketer at DoorDash. A mid-size metro opened eight weeks ago and order volume is 40% below plan. The regional GM wants to double the ad budget. You have one data snapshot before that budget gets approved.",
      brief:
        "Apply the diagnostic order from the lesson (Product first, Promotion near the end) to a metrics table, and stop at the first P that fails its healthy/unhealthy test.",
      mode: "diagnostic",
      conceptsCovered: ["Diagnosing underperformance by walking the 7 Ps in a fixed order before increasing ad spend"],
      steps: [
        {
          stepId: "step-1-diagnostic-order",
          concept: "Diagnosing underperformance by walking the 7 Ps in a fixed order before increasing ad spend",
          lessonAnchor: "using-the-7-ps-as-a-diagnostic-tool",
          theoryRecap:
            "The lesson's diagnostic flowchart checks Product, then Price, then Place, then Promotion, then People, then Process, before landing on Physical Evidence, stopping at the first 'No.'",
          question:
            "Restaurant selection matches other markets, price parity holds, and the app is live in 94% of target zip codes, but only 22% of a pre-launch awareness survey has heard of DoorDash launching locally. Which P is broken?",
          toolName: "Google Sheets",
          where: "Open the launch metrics snapshot, score each P healthy/unhealthy in the order given.",
          procedure: [
            "List all 7 Ps as rows, in the lesson's diagnostic order",
            "Score Product: restaurant count and category mix vs. 2 comparable launches",
            "Score Price: delivery fee and menu markup vs. competitor benchmark in that metro",
            "Score Place: percentage of target zip codes with active coverage",
            "Score Promotion: pre-launch and week-8 unaided awareness survey results",
            "Stop scoring at the first 'unhealthy' row and flag that as the fix",
          ],
          outputSample:
            "P-by-P scorecard, DoorDash [Metro] launch, week 8\n\nProduct: HEALTHY, 340 restaurants live, matches comparable-market average\nPrice: HEALTHY, delivery fee within $0.50 of local competitor\nPlace: HEALTHY, 94% zip code coverage vs. 90% target\nPromotion: UNHEALTHY, 22% unaided awareness vs. 65% target at week 8\n\nDiagnosis: Promotion is the first broken P. Do not add more restaurants or change price, fix awareness first.",
          healthy: "Diagnosis stops at the first unhealthy P and that becomes the sole recommendation.",
          unhealthy: "Recommending a budget increase before scoring Product, Price, and Place.",
          interpret:
            "Because Product, Price, and Place all score healthy, Promotion is the legitimate bottleneck here, this is one of the few cases where more promotion actually is the right call, because it is not masking a deeper problem.",
          soWhat: [
            {
              symptom: "GM wants to double ad budget without a diagnosis",
              action: "Run the P-by-P scorecard before approving new spend",
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
            role: "Build the P-by-P scorecard",
            why: "Free, sortable, easy to share with the GM",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page P-by-P scorecard with a single recommended fix, not a list of five things to try.",
      sampleOutput:
        "Zomato is often held up as the counterexample: when its Tier-2 city expansion underperformed in 2019, delivery times (Process) turned out to be the broken P, not Promotion, average delivery time was 61 minutes against a 35 minute target. Zomato fixed dispatch routing before spending a rupee on new ads, and order volume recovered within a quarter.",
      successCriteria: [
        "Scores all Ps in the lesson's diagnostic order, not a random order",
        "Correctly identifies Promotion (not Product/Price/Place) as the broken P from the given data",
        "Recommendation matches the single broken P, not a bundle of fixes",
      ],
      portfolioReady: true,
    },
    {
      id: "4ps-7ps-marketing-mix-writeup-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: A Junior Marketer's 7 Ps Plan for a HelloFresh Regional Launch",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Read a draft 7 Ps write-up for a HelloFresh regional expansion and flag where one P's plan contradicts what the lesson says another P now has to deliver, using the lesson's ripple-effect logic.",
      companyId: "hellofresh",
      scenario:
        "A junior marketer at HelloFresh drafted a 7 Ps plan for entering a new region. Before it goes to the regional director, you're asked to red-pen it for internal contradictions between the Ps.",
      brief: "Find where one P's plan contradicts what the lesson says another P now has to deliver.",
      mode: "teardown",
      conceptsCovered: ["How All 7 Ps Connect"],
      teardownItems: [
        {
          itemId: "item-1-price-physical-evidence-mismatch",
          specimen:
            "PRICE: Position this region 20% above the closest meal-kit competitor to signal premium quality.\nPHYSICAL EVIDENCE: Reuse the existing cardboard box design and printed recipe cards from our lowest-cost market to control launch costs.\nPROMOTION: Heavy local influencer push in month one to drive trial.",
          specimenSource: "synthetic-realistic",
          prompt: "This plan raises Price to signal premium quality. Does the rest of the plan support that signal, or contradict it?",
          answerKey: [
            {
              defect:
                "Physical Evidence (packaging and recipe cards) was left at the lowest-cost market's standard while Price was raised to premium, the tangible proof does not match the price signal.",
              severity: "critical",
              whyItMatters:
                "The lesson's ripple-effect logic says raising Price means Product and Physical Evidence must now match that expectation, or the brand loses credibility on unboxing, the first tangible thing a subscriber sees.",
              lessonRef: "how-all-7-ps-connect",
              owner: "you",
            },
          ],
          distractors: [
            "The influencer push in month one is too aggressive for a new region.",
            "20% above competitor pricing is inherently too high for meal kits.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-place-process-ownership-gap",
          specimen:
            "PLACE: Move this region from a grocery-store retail partnership to direct-to-consumer subscription shipping.\nPROCESS: No changes needed, the retail partner's existing logistics team will keep handling delivery.\nPEOPLE: No new hires planned for this region.",
          specimenSource: "synthetic-realistic",
          prompt: "The plan switches this region's Place from retail to DTC. Is the Process and People plan consistent with that switch?",
          answerKey: [
            {
              defect:
                "The plan keeps Process and People unchanged even though switching Place from retail to DTC means HelloFresh, not the retailer, now owns delivery logistics and customer-facing support.",
              severity: "critical",
              whyItMatters:
                "The lesson states that changing Place from retail to DTC means you now own the customer relationship, so Process and People become your responsibility, not the retailer's, skipping this creates an operational gap on day one.",
              lessonRef: "how-all-7-ps-connect",
              owner: "you",
            },
          ],
          distractors: [
            "DTC shipping is always more expensive than retail distribution.",
            "The region should not switch to DTC at all.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Red-pen the draft plan and leave inline comments",
            why: "Free, comment threads keep the defect explanation attached to the exact line",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "An annotated copy of the draft plan with each P-to-P contradiction flagged and the fix stated in one sentence.",
      sampleOutput:
        "Flipkart ran into the same Price/Physical-Evidence mismatch during an early premium-electronics push: it priced a refurbished-phone line at near-new rates but shipped units in generic warehouse packaging with no certification insert. Return rates on that line ran nearly triple the new-phone baseline until the packaging and included certificate were upgraded to match the price.",
      successCriteria: [
        "Correctly identifies both P-to-P contradictions, not just one",
        "Cites the specific ripple-effect rule from the lesson, not a generic 'this seems off'",
        "Distinguishes the real defect from the plausible-but-wrong distractors",
      ],
      portfolioReady: true,
    },
  ],
  "mission-vision-values": [
    {
      id: "mission-vision-values-generic-statement-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Which Flipkart Draft Mission Statement Would Actually Survive a Hard Decision?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two draft mission statement candidates submitted by different departments, use the lesson's genericness test (would this sentence work for any company in any industry?) to flag which draft is decoration and which one is actually a mislabeled values statement.",
      companyId: "flipkart",
      scenario:
        "Flipkart's brand team collected draft mission statements from different departments before a rewrite. Before publishing one, you're asked to stress-test each against the lesson's genericness rule.",
      brief: "Apply the 'would this work for any company in any industry' test to each draft and flag the ones that fail.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "What It Is"],
      teardownItems: [
        {
          itemId: "item-1-buzzword-mission-draft",
          specimen:
            "Draft A (Ops team): \"We deliver world-class solutions that empower communities and drive innovation for a better tomorrow.\"",
          specimenSource: "synthetic-realistic",
          prompt: "Would this sentence work unchanged for almost any company in any industry?",
          answerKey: [
            {
              defect:
                "The sentence strings together generic phrases ('world-class solutions', 'empower communities', 'a better tomorrow') that could describe a bank, an NGO, or a software company with zero edits, it fails the lesson's own genericness test.",
              severity: "critical",
              whyItMatters:
                "The lesson's callout says if the sentence works for any company in any industry, rewrite it, a mission this vague cannot be used to make a real decision under pressure.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The sentence is too long for a mission statement.",
            "The sentence doesn't mention profit or growth targets.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-values-mislabeled-as-mission",
          specimen: "Draft B (HR team): \"Our mission is to treat every employee with integrity, honesty, and respect.\"",
          specimenSource: "synthetic-realistic",
          prompt: "Is this actually a mission statement, or does it answer a different question than 'why do we exist right now'?",
          answerKey: [
            {
              defect:
                "This is a values statement mislabeled as a mission, it describes how the company behaves internally, not what problem it solves for customers today, conflating the two documents defeats the point of having both.",
              severity: "moderate",
              whyItMatters:
                "The lesson defines mission as 'why we exist right now' for customers, and values as 'how we behave along the way', treating them as interchangeable means neither one does its actual job.",
              lessonRef: "what-it-is",
              owner: "you",
            },
          ],
          distractors: [
            "The statement is too short to be a real mission.",
            "Integrity and honesty aren't good things for a company to value.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Comment on each draft with the genericness verdict",
            why: "Free, supports inline comments for department-by-department feedback",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "Two flagged drafts with the specific rewrite direction each one needs, one sentence each.",
      sampleOutput:
        "DoorDash's own mission, 'we want to shrink every city by bringing people anything, faster, fresher, and from farther away,' passes the same test easily, no other logistics company could paste that sentence in unchanged, because it names the specific mechanic (shrinking geographic friction) rather than a generic aspiration.",
      successCriteria: [
        "Correctly flags the buzzword-only draft as failing the genericness test",
        "Correctly identifies the HR draft as a values statement mislabeled as mission",
        "States a one-sentence rewrite direction for each flagged draft",
      ],
      portfolioReady: true,
    },
    {
      id: "mission-vision-values-pressure-test-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Pressure Test: Does Airbnb's Last 10 Decisions Match Its Stated Mission?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Apply step five of the lesson's mission framework, the pressure test, to a list of ten real-ish Airbnb decisions, and determine whether behavior matches the stated mission or whether the words, or the behavior, need to change.",
      companyId: "airbnb",
      scenario:
        "Airbnb's brand team is refreshing its mission statement. Before publishing, they want you to run the lesson's pressure test: pull the last ten major decisions and check if they're consistent with what the company claims to stand for.",
      brief: "Score each decision against the stated mission ('Belong Anywhere') and flag the ones that don't fit.",
      mode: "diagnostic",
      conceptsCovered: ["Pressure Test: Does our last 10 decisions match these words?"],
      steps: [
        {
          stepId: "step-1-pressure-test-scoring",
          concept: "Pressure Test: Does our last 10 decisions match these words?",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's framework diagram ends with a pressure test, checking whether the last 10 big decisions actually match the stated mission, before publishing anything.",
          question:
            "Airbnb's stated mission centers on belonging and community-driven travel. Given a list of 10 recent decisions (Categories browsing redesign, a crackdown on party-house listings, an ad campaign, a stock buyback, an AI-powered host-matching tool, a fee-transparency change, an anti-discrimination policy update, a luxury 'Icons' experience line, a layoff round, and a data-sharing partnership), which decisions clearly support the mission and which ones need the mission's language revised, or the decision reconsidered?",
          toolName: "Google Sheets",
          where: "List all 10 decisions as rows, score each Consistent / Inconsistent / Neutral against the mission text.",
          procedure: [
            "List all 10 decisions in one column",
            "Write the mission's exact wording at the top of the sheet for reference",
            "Score each decision Consistent, Inconsistent, or Neutral",
            "For every Inconsistent score, write one sentence: does the mission's wording need to change, or does the decision?",
          ],
          outputSample:
            "Pressure test, Airbnb mission ('Belong Anywhere')\n\nCategories redesign (2022): CONSISTENT, surfaces underused local listings\nParty-house crackdown: CONSISTENT, protects the host/neighbor trust the mission depends on\nStock buyback: NEUTRAL, financial decision unrelated to the mission's promise\nLuxury 'Icons' line: INCONSISTENT on its face, flag for review, does 'belong anywhere' still mean anyone can afford it?\n...\n\n7 of 10 decisions score Consistent, 2 Neutral, 1 flagged Inconsistent for review.",
          healthy: "At least 8 of 10 decisions score Consistent or Neutral, with a specific written reason for any Inconsistent flag.",
          unhealthy: "Marking every decision Consistent without checking it against the mission's literal wording.",
          interpret: "A pressure test that finds zero inconsistencies is a sign the test wasn't run honestly, not a sign the mission is perfect.",
          soWhat: [
            {
              symptom: "Mission refresh drafted without checking it against actual decisions",
              action: "Run the 10-decision pressure test before publishing any new wording",
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
            role: "Build the 10-decision scorecard",
            why: "Free, sortable, easy to circulate for review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A scored list of 10 decisions with a one-sentence resolution for each flagged inconsistency.",
      sampleOutput:
        "DoorDash's own pressure test would likely flag its 2024 grocery-delivery expansion as borderline: the mission talks about connecting local businesses to customers, and national grocery chains are a stretch of 'local,' which is exactly the kind of tension a pressure test is supposed to surface before a rebrand, not after one.",
      successCriteria: [
        "Scores all 10 decisions, not just the obvious ones",
        "Correctly flags at least one genuinely borderline decision instead of rubber-stamping everything Consistent",
        "States whether the fix is the wording or the behavior for each flag",
      ],
      portfolioReady: true,
    },
  ],

  "strategy-vs-tactics": [
    {
      id: "strategy-vs-tactics-plan-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Strategy or Tactic? Sorting a Real Marketing Plan Document",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a draft marketing plan with statements labeled STRATEGY or TACTIC, find the statements that are mislabeled, tactics disguised as strategy, and correct them.",
      companyId: "adyen",
      scenario:
        "You're a junior strategist at Adyen, the Dutch payments platform, reviewing a draft marketing plan for an SMB payments push before it goes to leadership next week.",
      brief:
        "Read the numbered statements. Some genuinely describe strategy. Some are tactics wearing a STRATEGY label because they sound important. Find the mislabeled ones.",
      mode: "teardown",
      conceptsCovered: ["How It Works"],
      teardownItems: [
        {
          itemId: "plan-teardown-1",
          specimen:
            "DRAFT MARKETING PLAN, Adyen SMB Payments Push, Q1 Draft\n\n1. STRATEGY: Win small and mid-sized e-commerce merchants by being the payments platform that never forces an upsell into enterprise-only features.\n2. STRATEGY: Run a LinkedIn ad campaign targeting Shopify store owners.\n3. TACTIC: Publish three case studies of merchants who switched from a legacy processor.\n4. STRATEGY: Have a booth at NRF and Money20/20.\n5. TACTIC: Cut integration time from two weeks to two days with a self-serve API sandbox.\n6. STRATEGY: Position Adyen as the platform SMBs 'graduate into' as they grow, not something they later have to leave.\n7. STRATEGY: Send a monthly newsletter to signed-up merchants.\n8. TACTIC: Offer a 90-day fee waiver for merchants switching from a named competitor.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Sort each numbered statement into STRATEGY or TACTIC. Flag any statement labeled STRATEGY that is actually a tactic in disguise, and explain the tell.",
          answerKey: [
            {
              defect:
                "Statement 2 ('Run a LinkedIn ad campaign targeting Shopify store owners') is labeled STRATEGY but names a specific channel and audience action, a tactic.",
              severity: "critical",
              whyItMatters:
                "If this gets treated as the strategy, the team will defend the LinkedIn channel forever instead of asking whether it still serves the real goal.",
              lessonRef: "How It Works",
              owner: "you",
            },
            {
              defect:
                "Statement 4 ('booth at NRF and Money20/20') is labeled STRATEGY but is a specific event-presence action, a tactic.",
              severity: "moderate",
              whyItMatters:
                "Trade-show presence is a channel decision. Calling it strategy hides the actual question: does event presence serve the graduation positioning in statement 6?",
              lessonRef: "How It Works",
              owner: "you",
            },
            {
              defect:
                "Statement 7 ('monthly newsletter') is labeled STRATEGY but is a recurring content channel, a tactic.",
              severity: "moderate",
              whyItMatters:
                "A newsletter cadence is easy to keep running by habit even after it stops serving the real strategy, because it was never correctly labeled as a tactic to be evaluated.",
              lessonRef: "How It Works",
              owner: "you",
            },
          ],
          distractors: [
            "Statement 1 sounds broad, so it might look like it should be reclassified, but it correctly describes an audience and a durable positioning choice, it is strategy.",
            "Statement 6 sounds like marketing copy, so it might look suspicious, but it is the real strategy statement, the 'graduate into' positioning is exactly what a strategy statement should look like.",
            "Statement 8 (the fee waiver) sounds like a big commitment, so it might seem strategic, but it is a single time-boxed promotion, correctly labeled TACTIC.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up the draft plan and re-label each numbered statement",
            why: "Free, no account friction, comment threads work well for showing reasoning next to each line",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A corrected copy of the plan with each statement re-labeled STRATEGY or TACTIC, plus a short note explaining why the 3 mislabeled statements caused confusion in the original draft.",
      sampleOutput:
        "Wise SMB expansion plan, corrected labels (excerpt)\n\nSTRATEGY\n- Win freelancers and small agencies who bill overseas clients by making multi-currency invoicing the easiest part of getting paid, not an integration project.\n\nTACTIC (was mislabeled STRATEGY)\n- Sponsor two fintech newsletters read by freelance operators.\n- Exhibit at a regional freelancer conference.\n\nTACTIC\n- Publish a comparison page against a competitor's cross-border fees.",
      successCriteria: [
        "Correctly re-labels all 3 mislabeled statements as tactics",
        "Explains in plain language why each was a tactic, not a strategy",
        "Does not flag any of the correctly-labeled strategy statements as tactics",
      ],
      portfolioReady: true,
    },
    {
      id: "strategy-vs-tactics-metrics-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Metrics Audit: Is This Company's Growth a Strategy Win or a Tactic Fluke?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a company's public marketing results and spend pattern, trace the numbers back through the three-layer model (Goal, Strategy, Tactics, Metrics) to state the underlying strategy in one plain sentence.",
      companyId: "coinbase",
      scenario:
        "You're advising a small SaaS company's marketing lead, who wants to copy Coinbase's playbook after reading about its viral Super Bowl ad, and needs to know whether to imitate the tactic or the strategy underneath it.",
      brief:
        "Look at Coinbase's Super Bowl results and its longer marketing-spend pattern. Separate what's a metric, a tactic, and the actual strategy, then recommend what a much smaller company should actually imitate.",
      mode: "diagnostic",
      conceptsCovered: ["Tracing metrics back through tactics to strategy using the three-layer model"],
      steps: [
        {
          stepId: "step-1-trace-the-chain",
          concept: "Tracing metrics back through tactics to strategy using the three-layer model",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's three-layer model runs Goal to Strategy to Tactics to Metrics. Metrics should trace back and explain whether the goal is being served, not just prove a single tactic was flashy.",
          question:
            "Coinbase's 2022 Super Bowl QR ad drove 20 million landing-page hits in one minute and pushed the app from 186th to 2nd on Apple's App Store, and the company's overall marketing spend grew from $78.2 million in 2023 to $164.8 million in 2024 while broadening from crypto enthusiasts toward mainstream education. Was the QR ad Coinbase's strategy, or one tactic inside a larger strategy? What is the strategy in one sentence?",
          toolName: "Google Docs",
          where: "Draft a one-page memo answering the question with evidence from the numbers given.",
          procedure: [
            "List every metric mentioned: landing-page hits, App Store rank, marketing spend growth, audience broadening",
            "Group each item under GOAL, STRATEGY, TACTIC, or METRIC using the three-layer model",
            "Write the underlying strategy in one sentence with no channel or campaign name in it",
            "Recommend which layer, if any, the SaaS company should actually imitate",
          ],
          outputSample:
            "Metric trace (excerpt)\nGOAL: expand from early-adopter traders to a mainstream, trusted financial platform\nSTRATEGY: build broad public legitimacy for crypto, so trust transfers specifically to Coinbase\nTACTIC: Super Bowl QR ad (Feb 2022); TV explainer campaign; sports sponsorships\nMETRIC: 20M landing-page hits, App Store rank jump, marketing spend growth",
          healthy: "The memo states the strategy in one plain sentence with no channel name in it.",
          unhealthy: "The memo's takeaway is 'we should also run a Super Bowl ad.'",
          interpret:
            "If the recommendation names a specific channel or campaign, the SaaS company copied the tactic, not the strategy, and it will not transfer without Coinbase's budget or existing audience.",
          soWhat: [
            {
              symptom: "Team wants to imitate the exact tactic (a viral stunt ad)",
              action: "Redirect to what strategy the tactic served, then pick a tactic that fits the smaller budget",
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
            role: "Write the metrics-trace memo",
            why: "Free, easy to share with the marketing lead for comment",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page memo tracing Coinbase's public metrics back to a plain-English strategy statement, with a recommendation on what, if anything, the SaaS company should imitate.",
      sampleOutput:
        "Wise growth memo (excerpt)\n\nGOAL: become the default way people and businesses move money across borders\nSTRATEGY: win trust through radical fee transparency so referrals replace paid acquisition\nTACTIC: public fee comparison calculator; the 2021 TransferWise-to-Wise rename\nMETRIC: roughly 65% of new customers arriving via referral, revenue up 24% year-over-year\nRECOMMENDATION: imitate the transparency strategy (publish real numbers), not the specific calculator tool.",
      successCriteria: [
        "States the strategy in one sentence with no channel or campaign name in it",
        "Correctly separates at least 4 items into GOAL, STRATEGY, TACTIC, or METRIC",
        "Recommendation targets the strategy layer, not the exact tactic",
      ],
      portfolioReady: true,
    },
  ],
  "branding": [
    {
      id: "branding-identity-consistency-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Consistency Audit: Does This Brand's Identity Actually Match Its Strategy?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given three touchpoints that use a consistent visual identity but describe the value proposition three different ways, diagnose whether the real problem lives at the logo, identity, or strategy layer.",
      companyId: "sea-limited",
      scenario:
        "You're a junior brand associate at Sea Limited, checking Shopee's marketing materials across three touchpoints before a leadership review, to see if the visual identity is actually reinforcing one clear brand promise.",
      brief:
        "The logo and colors are applied correctly everywhere. The words describing what the brand stands for are not consistent. Find out which layer, logo, identity, or strategy, actually needs fixing.",
      mode: "diagnostic",
      conceptsCovered: ["Distinguishing a logo problem from a brand identity problem from a brand strategy problem"],
      steps: [
        {
          stepId: "step-1-identity-vs-brand-check",
          concept: "Distinguishing a logo problem from a brand identity problem from a brand strategy problem",
          lessonAnchor: "why-this-distinction-changes-how-you-work",
          theoryRecap:
            "The lesson's diagnostic point is that customers who don't convert or remember you rarely have a logo problem, they usually have a brand clarity problem about what the company stands for.",
          question:
            "Homepage: 'Shop it, love it, all in one app.' Ad creative: 'Southeast Asia's most trusted marketplace.' Support chat greeting: 'Fast, affordable shopping for everyone.' The logo and colors are identical and correct across all three. Is this a logo problem, an identity problem, or a strategy problem?",
          toolName: "Google Docs",
          where: "Review the 3 touchpoint lines given above and write the diagnosis.",
          procedure: [
            "List what's consistent across the 3 touchpoints (logo, colors, fonts)",
            "List what's inconsistent (the actual words used to describe the value proposition)",
            "Apply the test: is the mark consistent? Is the visual system consistent? Is the story consistent?",
            "Name which single layer needs the fix, and write one unified value-proposition sentence",
          ],
          outputSample:
            "Touchpoint audit (excerpt)\nLogo/colors: consistent across all 3\nStory: 3 different value propositions, none contradict each other, but none reinforce each other either\nDiagnosis: strategy problem, not a visual one",
          healthy:
            "The diagnosis correctly names this a strategy problem, even though the visual identity is applied perfectly.",
          unhealthy:
            "The diagnosis recommends 'refresh the logo' or 'update the color palette' to fix a wording inconsistency.",
          interpret:
            "A logo and identity system can be applied perfectly while the underlying brand strategy, what the company actually says it stands for, is still undefined or inconsistent.",
          soWhat: [
            {
              symptom: "Team keeps proposing visual refreshes for what is actually a messaging problem",
              action:
                "Run the blank-page test: describe the brand's promise in 3 sentences without using the logo, colors, or product features",
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
            role: "Write the diagnosis memo",
            why: "Free, no account friction, easy to share for leadership review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page diagnosis memo naming which of the 3 layers, logo, identity, or strategy, actually needs the fix, with a corrected one-sentence value proposition.",
      sampleOutput:
        "Coinbase touchpoint diagnosis (excerpt)\n\nSTRATEGY PROBLEM CONFIRMED\nHomepage: 'The easiest way to buy crypto.'\nApp Store listing: 'Your gateway to the open financial system.'\nSupport greeting: 'Buy, sell, and manage digital currency safely.'\nRECOMMENDATION: unify around one sentence, 'Coinbase makes crypto trustworthy enough for anyone to use.' No logo or color change needed.",
      successCriteria: [
        "Correctly identifies the strategy layer as the actual problem, not logo or identity",
        "Writes one unified value-proposition sentence",
        "Does not recommend any visual change",
      ],
      portfolioReady: true,
    },
    {
      id: "branding-identity-brief-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Brand Identity Brief: Translating Strategy into a Usable System",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Write a one-page brand identity brief for a fictional startup that starts with strategy inputs (audience, position, promise) and only then derives identity rules (tone, visual), so a designer could act on it directly.",
      companyId: "wise",
      scenario:
        "You're a freelance brand consultant hired by a 3-person fintech startup, 'MoveFast' (fictional), that admires Wise's borderless positioning but has never written down its own identity system, and needs a one-page brief a designer can actually use.",
      brief:
        "Do not start with colors or fonts. Start with the strategy inputs, then derive the identity rules from them, so every visual and tone decision traces back to a specific word in the promise.",
      mode: "build",
      conceptsCovered: [
        "Brand strategy as the required input before identity work starts",
        "Translating a brand strategy into a usable visual and verbal identity system",
      ],
      steps: [
        {
          stepId: "step-1-strategy-inputs",
          concept: "Brand strategy as the required input before identity work starts",
          lessonAnchor: "brand",
          theoryRecap:
            "The lesson defines brand strategy as what a company wants people to feel and believe, the layer identity work must translate, not invent.",
          question:
            "Before writing a single identity guideline (colors, fonts, tone), what three questions about MoveFast's brand strategy need answers first?",
          toolName: "Google Docs",
          where: "Draft the strategy-inputs section of the brief.",
          procedure: [
            "Answer: who is the audience, and what do they currently believe about existing options?",
            "Answer: what position does MoveFast want to own that competitors don't?",
            "Answer: what's the one-sentence promise, written with zero mention of any visual element?",
            "Write these 3 answers as the brief's opening section",
          ],
          outputSample:
            "Strategy inputs (excerpt)\nAudience: freelancers billing overseas clients who currently lose 3-5% to hidden FX fees\nPosition: the only invoicing tool that shows the real fee before you send\nPromise: 'MoveFast never hides what a transfer costs you.'",
          healthy: "All 3 answers are written with zero mention of colors, logos, or fonts.",
          unhealthy: "The 'promise' answer describes a visual style instead of what the company stands for.",
          interpret:
            "If the strategy section already contains colors or fonts, the brief has skipped a layer, and identity work will have nothing real to translate.",
          soWhat: [
            {
              symptom: "Promise statement mentions the logo or a color",
              action: "Rewrite it as a belief or feeling, not a visual",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-identity-system",
          concept: "Translating a brand strategy into a usable visual and verbal identity system",
          lessonAnchor: "brand-identity",
          theoryRecap:
            "The lesson defines brand identity as the full visual and verbal system, colors, fonts, tone, naming, that a designer or writer can actually apply, built downstream of the strategy.",
          question:
            "Given the Step 1 promise ('MoveFast never hides what a transfer costs you'), what tone-of-voice rule and what visual rule would express that promise consistently?",
          toolName: "Google Docs",
          where: "Add the identity section to the same brief document.",
          procedure: [
            "Write one tone-of-voice rule tied directly to the promise (e.g. always state the fee in the first sentence of pricing copy)",
            "Write one visual rule tied to the promise (e.g. the fee number is never hidden behind a click)",
            "Add 2 example lines of real copy that follow the tone rule",
            "Add a one-line rationale connecting each rule back to the Step 1 promise",
          ],
          outputSample:
            "Identity rules (excerpt)\nTone rule: state the fee before the benefit, every time. Example: 'This transfer costs $4.20, arrives in 30 minutes.'\nVisual rule: the fee number is never smaller than the CTA button text.",
          healthy: "Every identity rule traces back to a specific word or phrase in the Step 1 promise.",
          unhealthy: "The identity rules are generic ('be friendly', 'use blue') with no connection to the promise.",
          interpret:
            "An identity system that doesn't trace back to the strategy is decoration, not a brand system, and won't hold up once a new channel or designer is added.",
          soWhat: [
            {
              symptom: "Identity rules feel arbitrary or copied from a template",
              action: "Delete any rule that doesn't reference a specific word from the strategy promise",
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
            role: "Write and share the brief",
            why: "Free, comment threads make it easy for a designer to ask questions inline",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Mock up one example asset (e.g. a pricing card) to visualize the visual rule",
            why: "Free tier covers a single mockup, no design software needed",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page brand identity brief for MoveFast with a strategy-inputs section and an identity-rules section, ready to hand to a designer.",
      sampleOutput:
        "Adyen-inspired identity brief (excerpt, fictional example)\n\nSTRATEGY INPUT\nAudience: enterprise finance teams tired of stitching together several different payment providers\nPosition: the only platform that is the acquirer, the gateway, and the risk engine at once\nPromise: 'Adyen removes the seams between your payment stack.'\n\nIDENTITY RULES\nTone: never say 'integrate', always say 'connect once'\nVisual: every product diagram shows one box, not five",
      successCriteria: [
        "Strategy-inputs section contains zero visual language",
        "Both identity rules explicitly reference a word from the strategy promise",
        "Brief is short enough (under one page) that a designer could act on it directly",
      ],
      portfolioReady: true,
    },
  ],

  "aida-funnel": [
    {
      id: "aida-funnel-ad-copy-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Missing Stage: Tearing Down Draft Ad Copy Against AIDA",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two draft ad copy specimens, identify which AIDA stage each is missing or executing weakly, and justify the diagnosis using the lesson's four-stage framework.",
      companyId: "warby-parker",
      scenario:
        "You're a marketing associate at Warby Parker reviewing two draft ad concepts an agency submitted for a new frame launch, before they go to media buying.",
      brief:
        "Read each specimen once as a cold stranger would. Map every line to an AIDA stage. Flag the stage that's missing or thin, and say what a fix would add.",
      mode: "teardown",
      conceptsCovered: ["The Four Stages Explained Simply"],
      teardownItems: [
        {
          itemId: "item-1-attention-skip",
          specimen:
            "Introducing the Downing frame. Acetate front, spring hinges, anti-reflective coating standard. Available in six colorways. Starting at $95, or $0 with most vision insurance. Free shipping and returns.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This ad copy for the new Warby Parker Downing frame is about to go into paid social to a cold audience. Which AIDA stage is weakest here, and why will that sink performance on someone scrolling past it?",
          answerKey: [
            {
              defect: "Opens with a product spec (acetate, hinges, coating) instead of a scroll-stopping hook",
              severity: "critical",
              whyItMatters:
                "Cold audiences see about 1.7 seconds of a scrolling feed before moving on; specs don't interrupt anything, they only make sense to someone already paying attention.",
              lessonRef: "the-four-stages-explained-simply",
              owner: "you",
            },
          ],
          distractors: [
            "The price appears too late in the copy",
            "There's no discount code offered",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-no-action-cta",
          specimen:
            "Every pair of Warby Parker glasses starts with a designer who obsesses over the smallest details, from the curve of a temple tip to the exact shade of a tortoiseshell pattern. Real customers say our frames are the most comfortable they've ever worn, and it shows: thousands of five-star reviews back that up. Learn more about our story.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This ad has a strong emotional build-up and social proof. Which AIDA stage is weakest, and why does the copy fail even though Interest and Desire are well handled?",
          answerKey: [
            {
              defect:
                "CTA is vague ('Learn More About Our Story') instead of one clear, low-friction instruction to buy or shop",
              severity: "critical",
              whyItMatters:
                "The lesson's Action stage requires a single clear instruction with minimal friction; a vague CTA wastes the Desire the copy just built by sending the reader somewhere other than a purchase path.",
              lessonRef: "the-four-stages-explained-simply",
              owner: "you",
            },
          ],
          distractors: [
            "The Desire section uses a customer testimonial",
            "The Interest section mentions the designer's process",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Read and annotate the ad copy specimens with stage labels",
            why: "Free, comment threads make the stage-by-stage diagnosis explicit and shareable with the agency",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated copy of each specimen with every line labeled by AIDA stage, the weak or missing stage flagged, and one sentence on what to add.",
      sampleOutput:
        "ThredUp 'Spring Refresh' ad, stage annotation\n\nATTENTION: 'Your closet called. It wants an upgrade.' -- flagged OK, one sharp line.\nINTEREST: missing -- copy jumps directly from the hook to a 20%-off badge.\nDESIRE: missing -- no proof, no before/after.\nACTION: 'Shop Now' button -- flagged OK but arrives with nothing built to want yet.\n\nDiagnosis: Interest and Desire are both skipped. Fix: add one line on why resale beats fast fashion (Interest), then one stat or review (Desire), before the CTA.",
      successCriteria: [
        "Correctly identifies the weakest or missing AIDA stage in both specimens",
        "Explains why that specific gap hurts performance, not just that something 'feels off'",
        "Does not flag a distractor as a defect",
      ],
      portfolioReady: true,
    },
    {
      id: "aida-funnel-stage-metrics-audit",
      tier: "core",
      archetype: "audit",
      title: "The Leak Diagnosis: Auditing a Real AIDA Funnel by Stage Metrics",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given stage-by-stage funnel metrics (reach, CTR, time-on-page, add-to-cart, conversion rate) for a live ad campaign, diagnose which AIDA stage is leaking and recommend the fix that matches that stage, not a generic budget increase.",
      companyId: "instacart",
      scenario:
        "You're a growth marketer at Instacart validating a new campaign for same-day grocery delivery in a new metro market. Leadership wants to know why sign-ups are flat despite a healthy ad budget.",
      brief:
        "Use the lesson's stage-to-metric mapping to find exactly which AIDA stage the campaign is leaking at, then recommend the fix that matches that stage.",
      mode: "diagnostic",
      conceptsCovered: [
        "Mapping funnel metrics to AIDA stages to diagnose leaks",
        "Choosing a stage-appropriate fix instead of scaling budget",
      ],
      steps: [
        {
          stepId: "step-1-map-metrics-to-stages",
          concept: "Mapping funnel metrics to AIDA stages to diagnose leaks",
          lessonAnchor: "how-to-apply-aida-to-your-own-campaigns",
          theoryRecap:
            "The lesson's stage-metric mapping: Attention pairs with CTR/reach, Interest with time-on-page, Desire with add-to-cart rate, Action with conversion rate.",
          question:
            "Reach is 500,000, CTR is 3.8% (benchmark 2.0%), average time-on-page is 8 seconds (benchmark 45 seconds), add-to-cart rate is 1.1% (benchmark 3.5%), and final conversion rate is 0.9% (benchmark 2.5%). Which stage is leaking?",
          toolName: "Google Sheets",
          where: "Paste the four metrics into a sheet next to their AIDA stage and category benchmark.",
          procedure: [
            "List each metric next to its AIDA stage",
            "Mark each metric healthy or unhealthy against its stated benchmark",
            "Identify the first stage in sequence where the metric goes unhealthy",
          ],
          outputSample:
            "STAGE | METRIC | VALUE | BENCHMARK | STATUS\nAttention | CTR | 3.8% | 2.0% | HEALTHY\nInterest | Time-on-page | 8 sec | 45 sec | UNHEALTHY <- leak starts here\nDesire | Add-to-cart | 1.1% | 3.5% | unhealthy (downstream)\nAction | Conversion | 0.9% | 2.5% | unhealthy (downstream)",
          healthy: "CTR beats benchmark, the ad creative itself is doing its job.",
          unhealthy: "Time-on-page collapses to 8 seconds against a 45-second benchmark right after a strong CTR.",
          interpret:
            "The leak starts at Interest, not Attention or Action -- everything downstream of Interest is a symptom, not a separate problem.",
          soWhat: [
            {
              symptom: "High CTR but 8-second time-on-page",
              action:
                "Rewrite the landing page's first screen to state relevance to this specific metro market in the first line, before scaling ad spend",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-recommend-fix",
          concept: "Choosing a stage-appropriate fix instead of scaling budget",
          lessonAnchor: "the-funnel-shape-why-most-people-never-reach-action",
          theoryRecap:
            "The lesson warns that 'just run more ads' rarely solves a conversion problem, since more spend just sends more people into the same leaky pipe.",
          question:
            "Leadership's first instinct is to double the ad budget to hit the sign-up target. Using the Step 1 diagnosis, what should you recommend instead, and why would more spend fail?",
          toolName: "Google Docs",
          where: "Draft a one-page recommendation memo.",
          procedure: [
            "State the diagnosed leak stage and the evidence behind it",
            "Explain why more ad spend does not fix an Interest-stage leak",
            "Recommend the specific fix and what to measure after shipping it",
          ],
          outputSample:
            "Memo: Sign-up funnel diagnosis\n\nLeak stage: Interest (time-on-page 8 sec vs 45 sec benchmark)\nWhy more spend won't help: Attention is already healthy (3.8% CTR); doubling spend sends more visitors into the same page that loses them in 8 seconds.\nRecommendation: Rewrite the landing page hero line to name the specific metro market and delivery window before asking for anything.\nMeasure next: time-on-page and scroll depth over 2 weeks before touching ad spend again.",
          healthy: "Recommendation targets the diagnosed stage specifically.",
          unhealthy: "Recommendation defaults to 'increase budget' or 'add a discount' without addressing Interest.",
          interpret: "A correct diagnosis is wasted if the recommendation reverts to a generic budget increase.",
          soWhat: [
            {
              symptom: "Leadership pressure to just spend more",
              action: "Present the stage-metric table as evidence before any budget conversation",
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
            role: "Build the stage-metric diagnostic table",
            why: "Free, sortable, easy to share with leadership",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the one-page recommendation memo",
            why: "Free, simple structure for a leadership-facing memo",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A stage-metric diagnostic table plus a one-page memo recommending the correct fix for the diagnosed leak.",
      sampleOutput:
        "Rent the Runway campaign diagnosis (excerpt)\n\nSTAGE | METRIC | VALUE | BENCHMARK | STATUS\nAttention | CTR | 4.2% | 2.0% | HEALTHY\nInterest | Time-on-page | 52 sec | 45 sec | HEALTHY\nDesire | Add-to-cart | 0.8% | 3.0% | UNHEALTHY <- leak starts here\nAction | Conversion | 0.7% | 2.5% | unhealthy (downstream)\n\nRecommendation: Add a first-order customer review carousel before the add-to-bag button; do not increase ad spend.",
      successCriteria: [
        "Correctly identifies the first stage in sequence where the metric fails its benchmark",
        "Recommendation matches the diagnosed stage, not a generic budget increase",
        "Memo cites the specific evidence (metric plus benchmark) supporting the diagnosis",
      ],
      portfolioReady: true,
    },
  ],
  "flywheel": [
    {
      id: "flywheel-friction-audit",
      tier: "mini",
      archetype: "audit",
      title: "Where's the Friction? Auditing a Flywheel's Weakest Force",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given churn, support, and referral data for a subscription business, identify which of the three flywheel forces (Attract, Engage, Delight) has the most friction and recommend the single highest-leverage fix.",
      companyId: "rent-the-runway",
      scenario:
        "You're a lifecycle marketer at Rent the Runway reviewing this quarter's retention dashboard before the flywheel review meeting.",
      brief:
        "Use the lesson's friction/force framework to find the biggest leak in the wheel, not just list every metric.",
      mode: "diagnostic",
      conceptsCovered: ["Auditing friction points across Attract, Engage, and Delight"],
      steps: [
        {
          stepId: "step-1-friction-audit",
          concept: "Auditing friction points across Attract, Engage, and Delight",
          lessonAnchor: "step-2-audit-your-friction-points",
          theoryRecap:
            "The lesson's Step 2 lists friction signals: high early churn (broken onboarding), long support response times (kills Delight), confusing pricing (kills Engage), no referral program (wasted Delight energy).",
          question:
            "First-30-day churn is 22% (category benchmark ~10%), support first-response time is 36 hours, pricing page bounce is normal, and there's no referral program. Which force has the most friction, and what's the highest-leverage fix?",
          toolName: "Google Sheets",
          where: "List each of the 4 friction signals next to the force it damages and whether it beats a stated benchmark.",
          procedure: [
            "List all 4 signals with their benchmark comparison",
            "Tag each signal to Attract, Engage, or Delight per the lesson's mapping",
            "Rank which force has the most simultaneous friction signals",
          ],
          outputSample:
            "SIGNAL | VALUE | BENCHMARK | FORCE DAMAGED\n30-day churn | 22% | ~10% | Delight (onboarding)\nSupport first-response | 36 hrs | <24 hrs | Delight\nPricing bounce | normal | normal | Engage (no issue)\nReferral program | none | n/a | Delight (wasted energy)\n\nDelight is damaged on 3 of 4 signals.",
          healthy: "Signals map cleanly to a single force with 3 of 4 pointing the same direction.",
          unhealthy: "Treating all 4 signals as equally weighted instead of ranking by force.",
          interpret: "Delight carries the most friction here; fixing Attract spend would not touch any of these 3 signals.",
          soWhat: [
            {
              symptom: "22% first-30-day churn against a 10% benchmark",
              action: "Rebuild the onboarding email sequence before adding any new acquisition channel",
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
            role: "Build the friction signal table",
            why: "Free, sortable for ranking which force has the most friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A friction-signal table ranking which flywheel force (Attract, Engage, Delight) is leaking the most, plus one recommended fix.",
      sampleOutput:
        "ThredUp Q3 flywheel friction audit (excerpt)\n\nSIGNAL | VALUE | BENCHMARK | FORCE DAMAGED\nFirst-order NPS | 28 | 45+ | Delight\nReactivation email open rate | 11% | 22% | Delight\nReferral-sourced signups | 4% of new users | n/a | Delight (underused)\n\nDelight is the weakest force. Recommendation: launch a formal 'give $10, get $10' referral program before increasing paid acquisition spend.",
      successCriteria: [
        "Correctly tags each friction signal to Attract, Engage, or Delight",
        "Identifies the force with the most simultaneous friction signals, not just the single worst metric",
        "Recommended fix targets the identified force, not a generic 'spend more' answer",
      ],
      portfolioReady: true,
    },
    {
      id: "flywheel-map-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Wheel: Mapping a Subscription Business's Attract-Engage-Delight Loop",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a subscription business's current channels, sales process, and post-purchase experience, build a complete flywheel map (Attract/Engage/Delight, one friction point and one force multiplier per underbuilt arc) that a growth team could act on.",
      companyId: "warby-parker",
      scenario:
        "You're a growth strategist advising Warby Parker's contact-lens subscription line, still under 12 months old, on how to plan its flywheel instead of a funnel.",
      brief:
        "Map the current state of all three arcs with real inputs, then add exactly one force multiplier proposal for the arc with the fewest touchpoints so the deliverable is prioritized, not just descriptive.",
      mode: "build",
      conceptsCovered: [
        "Mapping the three flywheel arcs: Attract, Engage, Delight",
        "Identifying force multipliers that speed up the wheel",
      ],
      steps: [
        {
          stepId: "step-1-map-three-arcs",
          concept: "Mapping the three flywheel arcs: Attract, Engage, Delight",
          lessonAnchor: "step-1-map-the-three-arcs",
          theoryRecap:
            "The lesson's Step 1 asks: what content or channels bring people to you (Attract), how do people become paying customers (Engage), what happens after the sale (Delight).",
          question:
            "Given the subscription line's current channels -- Instagram, a referral link in the shipping box, and email -- sort each into its correct arc and flag the arc with the fewest inputs.",
          toolName: "Miro",
          where: "Build a 3-column board, one column per arc, and place each existing channel or touchpoint as a sticky note.",
          procedure: [
            "Create Attract / Engage / Delight columns",
            "Place every known channel or touchpoint into its correct column",
            "Circle the column with the fewest stickies -- that's the underbuilt arc",
          ],
          outputSample:
            "ATTRACT: Instagram ads, organic try-on content\nENGAGE: online style quiz, checkout flow\nDELIGHT: (empty)\n\nDelight has zero mapped touchpoints.",
          healthy: "All three arcs have at least one real touchpoint mapped.",
          unhealthy: "One arc is empty, meaning the business is planning a funnel, not a wheel.",
          interpret: "An empty Delight column means referrals and repeat purchases are left entirely to chance.",
          soWhat: [
            {
              symptom: "Delight column has zero touchpoints",
              action: "Add a first-order check-in email and a referral prompt in the shipping box before spending more on Attract",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-add-force-multiplier",
          concept: "Identifying force multipliers that speed up the wheel",
          lessonAnchor: "step-3-find-your-force-multipliers",
          theoryRecap:
            "The lesson's Step 3 lists referral programs, user-generated content, integrations, and community as force multipliers.",
          question:
            "Given the empty Delight arc from Step 1, which force multiplier from the lesson's list fits a contact-lens subscription business best, and what specific mechanic would you launch?",
          toolName: "Google Docs",
          where: "Write a one-paragraph force-multiplier proposal.",
          procedure: [
            "Pick one force multiplier type from the lesson's list",
            "Specify the exact mechanic, not just the category",
            "State which arc it feeds back into",
          ],
          outputSample:
            "Force multiplier: referral program.\nMechanic: 'Give a friend their first month free, get $10 off your next order' link included in every shipping box.\nFeeds back into: Attract (new signups) and Delight (existing customers feel rewarded).",
          healthy: "Mechanic is specific enough to hand to an engineer or ops team.",
          unhealthy: "Proposal stays at the category level ('do referrals') with no concrete mechanic.",
          interpret: "A force multiplier only works once it's a specific, shippable mechanic, not a category label.",
          soWhat: [
            {
              symptom: "Force multiplier proposal is too vague to build",
              action: "Rewrite with the exact incentive amount and where it appears in the customer journey",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Miro",
            role: "Build the 3-arc flywheel map with sticky notes",
            why: "Free tier supports a single unlimited board, enough for this exercise",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Write the force-multiplier proposal",
            why: "Free, quick single-paragraph deliverable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 3-arc flywheel map (Miro board or equivalent) plus a one-paragraph force-multiplier proposal for the underbuilt arc.",
      sampleOutput:
        "Instacart same-day grocery flywheel map (excerpt)\n\nATTRACT: paid search, in-app restaurant cross-promotion\nENGAGE: one-click reorder, saved carts\nDELIGHT: (empty before this exercise)\n\nForce multiplier proposal: 'refer a neighbor, both get $15 off' prompt shown after a 5-star delivery rating. Feeds Attract (new signups from existing dense-delivery zones) and Delight (existing customer feels rewarded right after a good experience).",
      successCriteria: [
        "All three arcs are populated with at least one real touchpoint",
        "The underbuilt arc is correctly identified before proposing a fix",
        "The force-multiplier proposal specifies an exact mechanic, not just a category",
      ],
      portfolioReady: true,
    },
  ],

  // -------------------------------------------------------------------
  // pricing-psychology
  // -------------------------------------------------------------------
  "pricing-psychology": [
    {
      id: "pricing-psychology-tier-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Corporate Gifting Tiers: Auditing Allbirds' New B2B Price Sheet",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a draft 3-tier price sheet for a new corporate-gifting program, apply the lesson's anchoring and charm-pricing levers to decide what's working, what's missing, and what to fix before it ships.",
      companyId: "allbirds",
      scenario:
        "You're a growth marketer at Allbirds, the sustainable footwear brand, building the pricing page for a new 'Allbirds for Teams' corporate-gifting program aimed at HR and People teams ordering in bulk for onboarding kits.",
      brief:
        "Score the draft price sheet against anchoring order and charm-pricing conventions, then rewrite the weakest lever with a one-line justification.",
      mode: "diagnostic",
      conceptsCovered: [
        "Anchoring the first price a buyer sees",
        "Charm-pricing the entry tier",
      ],
      steps: [
        {
          stepId: "step-1-anchor-order",
          concept: "Anchoring the first price a buyer sees",
          lessonAnchor: "lever-1-anchor-high-then-descend",
          theoryRecap:
            "The lesson's Lever 1 says the first number a visitor sees becomes the reference point for every price after it. Listing the top tier first makes the middle tier feel like the reasonable choice, not the ceiling.",
          question:
            "The draft page lists tiers in this order, top to bottom: Starter ($299 / 25 pairs), Growth ($899 / 100 pairs), Enterprise ($2,400 / 300 pairs). Does this order help or hurt the anchor?",
          toolName: "Google Sheets",
          where: "The draft order-form spreadsheet, one row per tier, columns for name/price/unit count/display order.",
          procedure: [
            "Open the sheet and note the current top-to-bottom display order.",
            "Flag that Starter, the cheapest tier, is listed first — this anchors buyers on $299, not on the enterprise ceiling.",
            "Reorder rows: Enterprise first, then Growth, then Starter last.",
            "Re-check that Enterprise has at least one real past order behind it (per the lesson's fake-anchor warning) before using it as the anchor.",
          ],
          outputSample:
            "REORDERED DISPLAY (top to bottom)\n1. Enterprise — $2,400 / 300 pairs\n2. Growth — $899 / 100 pairs (highlight this one)\n3. Starter — $299 / 25 pairs\n\nAnchor check: Enterprise has 3 confirmed past orders (Q1-Q3) — real anchor, not fake.",
          healthy: "Highest tier displayed first, with confirmed real purchases behind it.",
          unhealthy: "Cheapest tier displayed first, or a top tier with zero real customers.",
          interpret:
            "An anchor only works if it's both first in view and genuinely purchasable — order alone doesn't fix a fake anchor.",
          soWhat: [
            {
              symptom: "Starter tier listed first on the page",
              action: "Flip display order so Enterprise leads",
              effort: "5 min",
            },
            {
              symptom: "Enterprise tier has never actually sold",
              action: "Either find a real past order or drop the tier and re-anchor on Growth",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-charm-price-check",
          concept: "Charm-pricing the entry tier",
          lessonAnchor: "lever-3-charm-price-the-entry-round-the-top",
          theoryRecap:
            "The lesson's Lever 3 says charm-price the low-sensitivity entry tier ($29, $49) and round the top tier ($500, $2,000) — round numbers read as premium, 99-cent endings can cheapen a high-ticket offer.",
          question:
            "Starter is priced at $299 flat and Enterprise at $2,400 flat. Which tier, if any, is priced in the wrong direction for its position?",
          toolName: "Google Sheets",
          where: "Same price-sheet tab, `price` column.",
          procedure: [
            "Check Starter: $299 is a round number sitting in the low-sensitivity, high-scrutiny entry slot.",
            "Reprice Starter to $289 to signal a sharpened, competitive floor.",
            "Confirm Enterprise stays round ($2,400, not $2,399) — a charm ending would cheapen the premium tier.",
          ],
          outputSample:
            "Starter: $299 -> $289 (charm-priced, entry tier)\nGrowth: $899 (unchanged, mid-tier stays round)\nEnterprise: $2,400 (unchanged, round premium anchor)",
          healthy: "Entry tier ends near a charm price; top tier stays round.",
          unhealthy: "Entry tier is round while a high-ticket tier ends in .99.",
          interpret: "Charm pricing and rounding are position-dependent, not a single rule applied everywhere.",
          soWhat: [
            {
              symptom: "Entry tier priced at a flat round number",
              action: "Shift to a charm ending just below the round number",
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
            role: "Hold and reorder the draft price sheet",
            why: "Free, no account friction, sortable columns for price/order review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A reordered, repriced 3-tier price sheet with a one-line note on each change and why.",
      sampleOutput:
        "MVMT for Teams, corporate order tiers (revised)\n\n1. Enterprise — $2,400 / 300 pairs (anchor, 3 confirmed past orders)\n2. Growth — $899 / 100 pairs — MOST POPULAR\n3. Starter — $289 / 25 pairs (charm-priced entry)\n\nChange log:\n- Reordered high-to-low so Enterprise anchors first\n- Starter repriced $299 -> $289\n- Enterprise kept round, not charm-priced",
      successCriteria: [
        "Correctly identifies the display-order problem and fixes it",
        "Correctly reprices only the entry tier, leaving the premium tier round",
      ],
      portfolioReady: true,
    },
    {
      id: "pricing-psychology-page-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Three Broken Pricing Pages: A Teardown",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three synthetic pricing-page specimens, each with 2-3 real psychological-pricing defects hidden among plausible-looking choices, identify every defect, rate its severity, and explain why it costs conversions.",
      companyId: "halo-top",
      scenario:
        "You're a pricing consultant reviewing three draft tier pages for Halo Top's new direct-to-freezer subscription box before they go live.",
      brief:
        "Find the defects the lesson's Common Mistakes section warns about: fake anchors, mixed discount frames, five-tier sprawl, hidden prices, percentage-only annual framing. Cite the specific mistake, not just 'looks off.'",
      mode: "teardown",
      conceptsCovered: [
        "Common Mistakes",
        "Lever 1, Anchor High, Then Descend",
        "Lever 5, Frame Annual Savings in Dollars, Not Percentages",
      ],
      teardownItems: [
        {
          itemId: "specimen-a-fake-anchor",
          specimen:
            "FREEZER CLUB — SPECIMEN A\nEnthusiast — $199.99/mo (crossed out from $249.99, 'Save 20%!') — 0 orders placed since launch, engineering keeps it live 'just in case'\nFan — $39.99/mo\nCurious — $9.99/mo\nAll tiers: 'Contact us for annual pricing.'",
          specimenSource: "synthetic-realistic",
          prompt: "List every pricing-psychology defect in this specimen.",
          answerKey: [
            {
              defect: "Enthusiast tier has zero real orders — a fake anchor with a confused purpose.",
              severity: "critical",
              whyItMatters:
                "The lesson's Common Mistakes section says an anchor must be sellable, even if rarely sold — an unsold anchor signals a broken tier, not a premium option.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect: "'Contact us for annual pricing' hides the annual price entirely.",
              severity: "critical",
              whyItMatters:
                "Hiding price on every annual option kills self-serve conversion — at least one tier needs a transparent, self-serve price.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Curious tier ending in .99 (this is correct charm pricing for a low-sensitivity entry tier, not a defect)",
            "Only three tiers total (three is the lesson's recommended sweet spot, not a defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-b-double-discount",
          specimen:
            "FREEZER CLUB — SPECIMEN B\nStarter — $29.99/mo, was $39.99/mo, 'Limited time!'\nCore — $59/mo — MOST POPULAR\nUnlimited — $2,000/mo\nAnnual toggle: 'Save 20% with annual billing'",
          specimenSource: "synthetic-realistic",
          prompt: "List every pricing-psychology defect in this specimen.",
          answerKey: [
            {
              defect:
                "Starter stacks a charm price ($29.99) with a crossed-out discount frame ($39.99, 'Limited time!') — two discount signals at once.",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistakes section warns that stacking two discount frames on an already charm-priced plan sends mixed signals — pick one frame.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect: "Annual savings shown only as a percentage ('Save 20%'), never a dollar amount.",
              severity: "moderate",
              whyItMatters:
                "Lever 5 says absolute dollar savings anchor harder than percentages, especially on smaller base prices — '$141.60/year' would land harder than '20%.'",
              lessonRef: "Lever 5, Frame Annual Savings in Dollars, Not Percentages",
              owner: "you",
            },
          ],
          distractors: [
            "Unlimited tier priced at a round $2,000 (this is correct — round numbers signal premium quality on top tiers)",
            "Core tier flagged 'Most Popular' (correct use of Lever 4's visual highlighting, not a defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-c-reversed-anchor",
          specimen:
            "FREEZER CLUB — SPECIMEN C (mobile layout, top to bottom)\nCurious — $9.99/mo\nFan — $39.99/mo\nEnthusiast — $249.99/mo (12 real subscribers this quarter)\nEnthusiast — highlighted with a colored border and 'Best Value' badge",
          specimenSource: "synthetic-realistic",
          prompt: "List every pricing-psychology defect in this specimen.",
          answerKey: [
            {
              defect:
                "Cheapest tier (Curious) shown first on mobile, so the low price becomes the anchor instead of the top tier.",
              severity: "critical",
              whyItMatters:
                "Lever 1 says list the top tier first, top to bottom on mobile — a low-to-high order anchors buyers on the cheap price, making everything above feel expensive rather than reasonable.",
              lessonRef: "Lever 1, Anchor High, Then Descend",
              owner: "you",
            },
            {
              defect:
                "The highlighted 'Best Value' tier is the highest-priced tier, not the intended middle/target tier.",
              severity: "moderate",
              whyItMatters:
                "Visual highlighting (Lever 4) is meant to steer buyers toward the plan the business actually wants sold — highlighting the priciest tier undermines the whole tier structure's purpose.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Enthusiast tier has 12 real subscribers (this makes it a real, sellable anchor — not a defect)",
            "Only three tiers shown (three is the tested sweet spot, not a defect)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Write up the defect list and severity ratings for each specimen",
            why: "Free, easy to share with a reviewing partner, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect report covering all three specimens: each defect named, severity rated, and tied to the specific lesson mistake it matches.",
      sampleOutput:
        "Casper Freezer Club Teardown (excerpt)\n\nSpecimen A — CRITICAL: Enthusiast tier is a fake anchor (0 orders since launch). CRITICAL: annual price hidden behind 'contact us.'\n\nSpecimen B — MODERATE: Starter stacks charm pricing with a crossed-out discount. MODERATE: annual savings shown only as a percentage.\n\nSpecimen C — CRITICAL: cheapest tier anchors first on mobile. MODERATE: highlight badge is on the wrong (highest-priced) tier.",
      successCriteria: [
        "Finds at least 2 real defects per specimen and correctly rejects the distractors",
        "Every defect cites the specific lesson section it violates, not a vague description",
      ],
      portfolioReady: true,
    },
  ],

  // -------------------------------------------------------------------
  // 5cs-framework
  // -------------------------------------------------------------------
  "5cs-framework": [
    {
      id: "5cs-framework-worksheet-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Half-Finished Worksheet: Auditing Casper's 5C Analysis Before a New-Category Launch",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a partially completed 5Cs worksheet for Casper's expansion into a new sleep-accessories category, identify which C's are missing, shallow, or conflated with another C, and rewrite the weakest one.",
      companyId: "casper-sleep",
      scenario:
        "You're a strategy associate at Casper Sleep, reviewing a 5Cs worksheet a junior teammate drafted ahead of a leadership review on entering the weighted-blanket category.",
      brief:
        "Check the worksheet's five sections against what each C is actually supposed to answer, flag the weakest section, and rewrite it with specific questions answered.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing Competitors from Collaborators",
        "Auditing for a missing Context analysis",
      ],
      steps: [
        {
          stepId: "step-1-competitor-collaborator-split",
          concept: "Distinguishing Competitors from Collaborators",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's How It Works section defines Competitors as who else is fighting for the same customer, and Collaborators as the partners, suppliers, and distributors that enable your business to function — two different questions, often merged by mistake.",
          question:
            "The worksheet's 'Competitors' section lists: 'Tuft & Needle, Purple, our fulfillment warehouse partner, our retail wholesale distributor.' What's wrong here?",
          toolName: "Google Docs",
          where: "The shared worksheet doc, 'Competitors' section.",
          procedure: [
            "Read every line under 'Competitors' and ask: does this entity compete for the same customer, or enable the business?",
            "Move 'fulfillment warehouse partner' and 'retail wholesale distributor' into a new 'Collaborators' section.",
            "Leave only true competitors (Tuft & Needle, Purple) under Competitors.",
          ],
          outputSample:
            "COMPETITORS (corrected)\n- Tuft & Needle\n- Purple\n\nCOLLABORATORS (new section, split out)\n- Fulfillment warehouse partner\n- Retail wholesale distributor",
          healthy: "Competitors lists only entities fighting for the same customer.",
          unhealthy: "Competitors and Collaborators merged into one undifferentiated list.",
          interpret:
            "Conflating the two C's hides real questions — a distributor problem needs a partnership fix, not a competitive one.",
          soWhat: [
            {
              symptom: "One list mixes competitors and enabling partners",
              action: "Split into two labeled sections and re-answer each C's actual questions",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-missing-context",
          concept: "Auditing for a missing Context analysis",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's How It Works section defines Context as the external forces shaping the market: economic conditions, regulation, technology shifts, and cultural trends — sometimes framed with the PESTLE lens.",
          question: "The worksheet has zero content under 'Context.' What questions should have been answered there before this goes to leadership?",
          toolName: "Google Docs",
          where: "The shared worksheet doc, 'Context' section (currently blank).",
          procedure: [
            "Note that Context is entirely empty — a real gap, not a shallow answer.",
            "Draft 3-5 questions: Is home-textile spending rising or falling this year? Are there new import tariffs on textiles? Is 'cozy home' a rising cultural trend post-pandemic?",
            "Answer each with a one-line finding sourced from recent data, not assumption.",
          ],
          outputSample:
            "CONTEXT (drafted)\n- Economic: home-goods discretionary spend down slightly this year\n- Cultural: 'cozy/hygge home' search interest trending up\n- Regulatory: no new textile tariffs affecting blanket imports currently",
          healthy: "Every C has at least 3 answered questions, including Context.",
          unhealthy: "A whole C left blank going into a leadership review.",
          interpret:
            "A blank Context section is the exact failure mode the lesson's Quibi example shows — context shifts sink product bets that looked fine on paper.",
          soWhat: [
            {
              symptom: "Context section is empty",
              action: "Draft and answer 3-5 PESTLE-style questions before the review",
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
            role: "Hold and edit the shared 5Cs worksheet",
            why: "Free, collaborative, matches how this worksheet would actually be reviewed by a team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated worksheet: the Competitor/Collaborator split corrected, and the Context section fully answered.",
      sampleOutput:
        "Allbirds new-category worksheet audit (excerpt)\n\nCOMPETITORS (corrected) — On Running, Nike, Rothy's\nCOLLABORATORS (split out) — wool suppliers, retail wholesale partners\nCONTEXT (drafted) — sustainable-footwear market growing ~16.8% annually; no new tariff changes affecting wool imports currently",
      successCriteria: [
        "Correctly separates Competitors from Collaborators with a stated reason",
        "Fills the blank Context section with at least 3 real, sourced questions and answers",
      ],
      portfolioReady: true,
    },
    {
      id: "5cs-framework-market-entry-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Full 5Cs Analysis for MVMT's Entry into Budget Smartwatches",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Build a complete 5Cs situational analysis from scratch for MVMT's hypothetical entry into the budget smartwatch category, producing decision-ready findings under Customer, Competitors, and Context, and flagging at least one assumption the findings challenge.",
      companyId: "mvmt-watches",
      scenario:
        "You're a market-entry strategist at MVMT, the affordable-luxury watch brand (part of Movado Group since its 2018 acquisition), evaluating whether MVMT should extend into budget smartwatches alongside Apple Watch and low-cost fitness trackers.",
      brief:
        "Answer 3-5 structured questions under Customer, Competitors, and Context using the provided research notes, starting with Customer per the lesson's tip, and end with one assumption the analysis overturns.",
      mode: "build",
      conceptsCovered: [
        "Starting the 5Cs with Customer, not Company",
        "Competitors: who else is fighting for the same buyer",
        "Context: what external forces are shaping the decision",
      ],
      steps: [
        {
          stepId: "step-1-customer-first",
          concept: "Starting the 5Cs with Customer, not Company",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's tip callout says to start with Customer, not Company — most teams default to listing internal strengths first, but reversing the order forces outside-in thinking, which is where good strategy begins.",
          question:
            "MVMT's core buyer is a 25-40 year-old who wants affordable-luxury style. Would that same buyer choose a $180 MVMT smartwatch over a $250 Apple Watch SE or a $50 fitness band? Why?",
          toolName: "Google Docs",
          where: "A new 'MVMT Smartwatch 5Cs' doc, Customer section.",
          procedure: [
            "List MVMT's current buyer profile: style-first, price-sensitive relative to true luxury, values design over deep tech features.",
            "Answer: what job would this buyer 'hire' a smartwatch to do? (Likely: look good, basic notifications — not fitness-tracking depth.)",
            "Answer: what's their frustration with current options? (Apple Watch: too expensive/techy for a style-first buyer; cheap fitness bands: look cheap.)",
          ],
          outputSample:
            "CUSTOMER\n- Job to be done: a watch that looks premium and shows notifications, not deep health tracking\n- Frustration with Apple Watch: price and 'tech gadget' look clash with MVMT buyer's style-first identity\n- Frustration with budget fitness bands: look and feel cheap, contradict the 'affordable luxury' self-image",
          healthy: "Customer section answers a real job-to-be-done, not just demographics.",
          unhealthy: "Customer section lists age/income only, no stated need or frustration.",
          interpret: "A smartwatch built around fitness depth would miss MVMT's actual buyer motivation entirely.",
          soWhat: [
            {
              symptom: "Product brief assumes MVMT buyers want fitness-tracking depth",
              action: "Redirect the brief toward design and notification features instead",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-competitors",
          concept: "Competitors: who else is fighting for the same buyer",
          lessonAnchor: "why-it-matters",
          theoryRecap:
            "The lesson cites Crayon's 2025 finding that 44% of companies have zero visibility into what competitors are doing, while sales teams with strong competitive intelligence are 108% more likely to report positive revenue impact — Competitors is not a step to skip.",
          question: "Who is actually competing for MVMT's style-first buyer in this category, and where are the gaps?",
          toolName: "Google Docs",
          where: "Same doc, Competitors section.",
          procedure: [
            "List direct competitors for the same buyer: Apple Watch SE, Fossil Gen hybrid smartwatches, Withings.",
            "Note each competitor's gap: Apple (too techy/pricey for style-first buyers), Fossil (closest positioning, already owns 'fashion smartwatch').",
            "Identify the open gap: an affordable ($100-180), design-first hybrid with basic notifications, no dedicated deep-fitness competitor there yet.",
          ],
          outputSample:
            "COMPETITORS\n- Apple Watch SE ($249+): too tech-forward, priced above MVMT's core buyer's comfort zone\n- Fossil Gen hybrid: closest direct competitor, already owns 'fashion smartwatch' positioning\n- Withings: premium hybrid, priced above MVMT's range\n- Gap: no strong player at $100-180 combining MVMT's design identity with basic smart features",
          healthy: "Competitor list identifies a real, specific gap to occupy.",
          unhealthy: "Competitor list names brands with no stated gap or differentiation angle.",
          interpret: "Fossil is the real threat here, not Apple — a smaller, closer competitor often matters more than the category giant.",
          soWhat: [
            {
              symptom: "Team keeps benchmarking against Apple Watch pricing and features",
              action: "Redirect competitive benchmarking to Fossil's hybrid line instead",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-context",
          concept: "Context: what external forces are shaping the decision",
          lessonAnchor: "real-world-example",
          theoryRecap:
            "The lesson's Quibi example shows what happens without a Context check: a $1.75B-funded launch missed that its context (COVID lockdowns, people on TV screens not phones) had shifted under it before launch.",
          question: "What external forces could make or break an MVMT smartwatch launch, independent of the product itself?",
          toolName: "Google Docs",
          where: "Same doc, Context section.",
          procedure: [
            "Check the economic angle: is discretionary spend on wearables rising or falling this year?",
            "Check the tech angle: are component costs (displays, sensors) still falling, making a $150 price point more viable than 2 years ago?",
            "Check the cultural angle: is 'digital wellbeing'/screen-reduction sentiment working for or against a notification-forward wearable?",
          ],
          outputSample:
            "CONTEXT\n- Economic: wearables spend has been resilient even as broader discretionary spend softened\n- Technology: component costs for basic smartwatch displays/sensors have continued to fall, supporting a sub-$180 price point\n- Cultural: rising 'digital wellbeing' sentiment favors a low-notification, style-first device over an always-buzzing fitness tracker — actually supports MVMT's positioning, not against it",
          healthy: "Context findings are checked against, and can overturn, an initial assumption.",
          unhealthy: "Context section assumes the same conditions as the last planning cycle without checking.",
          interpret:
            "The cultural finding flips the initial worry — a low-notification device isn't a weakness here, it's the actual differentiator against Apple Watch.",
          soWhat: [
            {
              symptom: "Team assumed 'fewer smart features' was a competitive weakness",
              action: "Reframe 'fewer notifications' as a stated benefit in positioning, backed by the digital-wellbeing trend",
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
            role: "Build the full 5Cs analysis doc section by section",
            why: "Free, shareable with the wider team ahead of a leadership review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 3-section 5Cs analysis (Customer, Competitors, Context) with at least 3 answered questions each, plus one stated assumption the findings overturn.",
      sampleOutput:
        "Garmin budget-tier entry, 5Cs excerpt\n\nCUSTOMER — job to be done: reliable basic fitness tracking at a low price, not premium design\nCOMPETITORS — gap identified against Fitbit's aging budget line\nCONTEXT — component costs falling supports a sub-$100 price point this cycle\n\nAssumption overturned: team assumed design mattered most to this buyer; Customer research showed price-per-sensor-accuracy mattered more.",
      successCriteria: [
        "Each of the 3 built sections answers at least 3 specific questions with findings, not assumptions",
        "States one assumption the analysis genuinely overturns, not a restated fact",
      ],
      portfolioReady: true,
      stretch:
        "Add the remaining two C's (Company, Collaborators) to complete the full 5Cs before the leadership review.",
    },
  ],

  "jtbd": [
    {
      id: "jtbd-reverse-engineer-rxbar-copy",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Decoding the Job Behind RXBAR's Ad Copy",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given RXBAR's actual front-of-pack copy and a founder quote, reverse-engineer the functional, emotional, and social job layers the brand is really selling against, without seeing any customer research.",
      companyId: "rxbar",
      scenario:
        "You're a junior brand strategist at RXBAR reviewing the packaging and website copy before a messaging refresh.",
      brief:
        "Read the packaging copy and founder quote, then write the job statement as three complete sentences, one per layer, in the customer's own voice.",
      mode: "diagnostic",
      conceptsCovered: ["Reverse-engineering the underlying job from marketing copy"],
      steps: [
        {
          stepId: "step-1-decode-rxbar-copy",
          concept: "Reverse-engineering the underlying job from marketing copy",
          lessonAnchor: "the-three-job-layers",
          theoryRecap:
            "The lesson's Three Job Layers framework splits any job into functional (the practical task), emotional (how the customer wants to feel), and social (how they want to appear to others).",
          question:
            "RXBAR's core tagline is 'No B.S.' and its packaging lists ingredients on the front instead of a brand logo. Given only that packaging choice and one founder quote ('People don't want to decode an ingredient list anymore'), which job is RXBAR actually selling against, and what are its three layers?",
          toolName: "Google Docs",
          where: "A blank doc with the packaging copy and founder quote pasted at the top.",
          procedure: [
            "Paste the exact copy: front-of-pack ingredient list, 'No B.S.' tagline, founder quote.",
            "Underline every word that names a practical task, that is the functional layer.",
            "Underline every word that implies a feeling, that is the emotional layer.",
            "Underline every word that implies how the buyer wants to look to others, that is the social layer.",
            "Write one complete sentence per layer, stating the job in the customer's voice.",
          ],
          outputSample:
            "Functional: 'Give me a protein bar where I don't have to decode a chemistry-class ingredient list to know what I'm eating.'\nEmotional: 'Let me stop feeling guilty or tricked by \"healthy\" snack marketing.'\nSocial: 'Let me be the person at the gym who reads labels and still trusts what they're eating.'",
          healthy:
            "All three layers are written as complete sentences in the customer's own frustration, not as product features.",
          unhealthy: "Writing 'the job is eating a protein bar', that restates the product category, not a job.",
          interpret:
            "If your three sentences could apply to any protein bar on the shelf, you've described the category, not RXBAR's specific job.",
          soWhat: [
            {
              symptom: "Job sentences sound generic enough to fit any competitor",
              action:
                "Re-read the founder quote for the specific frustration it's responding to, then rewrite the functional layer around that frustration",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Hold the source copy and your layer analysis in one place",
            why: "Free, no account friction, easy to share as a portfolio artifact",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page job statement for RXBAR broken into functional, emotional, and social layers, each written as a complete sentence in the customer's voice.",
      sampleOutput:
        "Spotify, job statement (illustrative)\n\nFunctional: 'Help me get through this specific moment, my commute, my workout, my wind-down, without having to search for the right song myself.'\nEmotional: 'Let me feel like the music understands my mood right now.'\nSocial: 'Let me discover songs before my friends do, so sharing a playlist makes me look like I have great taste.'\n\nThis is the job Spotify's 'Discover Weekly' and mood-based playlists are hired for, not 'access to 100 million tracks.'",
      successCriteria: [
        "All three layers are written as complete customer-voice sentences, not features",
        "The functional layer ties directly back to a specific detail in the source copy or quote",
        "The job statement is specific enough that it would NOT accurately describe a generic competitor",
      ],
      portfolioReady: true,
    },
    {
      id: "jtbd-audit-blue-bottle-interviews",
      tier: "core",
      archetype: "audit",
      title: "The Switch Interview Audit: Finding Blue Bottle's Real Job",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given five Switch Interview transcript excerpts from recent subscribers, separate genuine job statements from feature requests and identify the real competing alternative the subscription beat, applying the lesson's interview framework without conducting new interviews.",
      companyId: "blue-bottle-coffee",
      scenario:
        "You're a marketing analyst at Blue Bottle Coffee reviewing five Switch Interview transcript excerpts from customers who joined the Bottle Bank subscription (recurring coffee-bag delivery) in the last two months, before a messaging refresh.",
      brief:
        "Read the transcript excerpts, separate genuine job statements from feature requests, and identify the real competing alternative the subscription beat.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing feature requests from the real job",
        "Identifying the losing alternative as the real competitor",
      ],
      steps: [
        {
          stepId: "step-1-separate-job-from-feature",
          concept: "Distinguishing feature requests from the real job",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 1 warns that a feature request ('send better emails') is not a job. The job is the life outcome underneath it ('look credible to clients without hiring a designer').",
          question:
            "Transcript excerpt: 'Honestly I just wanted the bag delivery to be on a schedule I could set myself, not whatever the default was.' Is 'a schedule I can set myself' the job, or a feature request sitting on top of a job? What's the underlying job?",
          toolName: "Google Docs",
          where: "The 5 transcript excerpts pasted into one doc, one per section.",
          procedure: [
            "Read all 5 excerpts once without taking notes.",
            "For each excerpt, ask: does this sentence describe a UI control, or a life outcome?",
            "Tag every feature-shaped sentence ('a schedule I can set') as FEATURE.",
            "For each FEATURE tag, write the one-sentence life outcome underneath it.",
            "Compare all 5 underlying outcomes for a repeated pattern.",
          ],
          outputSample:
            "Excerpt 3, tagged FEATURE: 'a schedule I could set myself'\nUnderlying job: 'Stop wasting good coffee because a fixed delivery cadence doesn't match how fast my household actually drinks it.'\n\nExcerpt 5, tagged FEATURE: 'the app remembering my grind setting'\nUnderlying job: 'Never have to think about ordering again, once it's set up right, it should just work.'",
          healthy: "3 to 4 of the 5 excerpts resolve to the same or a closely related underlying job.",
          unhealthy:
            "Treating the feature request itself as the job and writing messaging around 'customizable schedules.'",
          interpret:
            "When multiple customers independently ask for the same feature, the shared underlying job is the real insight, not the feature they used to describe it.",
          soWhat: [
            {
              symptom: "Messaging draft lists product features instead of outcomes",
              action:
                "Replace every feature-shaped headline with the one-sentence life outcome from this audit",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-find-the-losing-alternative",
          concept: "Identifying the losing alternative as the real competitor",
          lessonAnchor: "how-to-run-jtbd-research",
          theoryRecap:
            "The lesson's Switch Interview method treats 'what did you almost go with instead' as the single most valuable question, because the losing alternative reveals who you're actually competing against in the customer's mind.",
          question:
            "Excerpt 2: 'I was this close to just setting a recurring reminder to buy bags at Whole Foods, way cheaper.' None of the 5 excerpts mention a competing coffee subscription brand. What does that tell you about who Blue Bottle's Bottle Bank is actually competing with?",
          toolName: "Google Docs",
          where: "The same transcript doc, this time scanning only for the words 'instead,' 'almost,' or 'before.'",
          procedure: [
            "Search all 5 excerpts for 'instead,' 'almost,' or 'before.'",
            "List every alternative named, no matter how informal (a store run, a habit, doing nothing).",
            "Group alternatives into: competing subscriptions, one-off retail purchases, and 'do nothing / status quo.'",
            "Note which group has the most mentions.",
          ],
          outputSample:
            "Alternatives named across 5 excerpts:\n  Competing coffee subscription: 0 mentions\n  One-off retail purchase (grocery store, local cafe bag): 4 mentions\n  'Just kept forgetting to reorder' (status quo / do nothing): 1 mention",
          healthy:
            "The real competitor is retail habit or inertia, not another subscription brand, so messaging should target 'stop forgetting' and 'stop overpaying at retail,' not feature comparisons against rival subscriptions.",
          unhealthy:
            "Assuming the competitor is whichever subscription brand shows up in a competitive analysis deck, because no customer actually mentioned one.",
          interpret:
            "The named alternative in real customer language always outranks a company's internal assumption about its competitive set.",
          soWhat: [
            {
              symptom: "Competitive messaging compares features against a rival subscription brand nobody mentioned",
              action: "Rewrite the comparison against the real named alternative: retail habit and forgetting to reorder",
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
            role: "Hold and annotate the 5 transcript excerpts",
            why: "Free, easy to tag and compare text side by side",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo: the shared underlying job across the 5 interviews, and the real competing alternative (named in the customer's own words, not assumed).",
      sampleOutput:
        "Intercom, Switch Interview audit memo excerpt (illustrative)\n\nShared underlying job (4 of 5 interviews): 'Answer routine customer questions without hiring another support agent.'\n\nReal competing alternative: not Zendesk or Salesforce, in every excerpt customers named the alternative as 'hiring a part-time support rep' or 'just letting the email backlog grow.' Intercom's messaging shifted from feature comparisons against other chat tools to a direct cost comparison against a support hire.",
      successCriteria: [
        "Every excerpt is correctly tagged as feature vs. underlying job",
        "The competing alternative is drawn directly from the transcripts, not assumed",
        "The final memo states the job as a life-outcome sentence, not a product feature",
      ],
      portfolioReady: true,
    },
  ],
  "brand-vs-performance": [
    {
      id: "brand-vs-performance-forecast-drunk-elephant-split",
      tier: "mini",
      archetype: "forecast",
      title: "Forecasting the Right Brand/Performance Split for a Scaling DTC Brand",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a short company profile for a scaling DTC skincare brand, apply the lesson's skew rules to forecast whether it should hold the 60/40 baseline or shift the split, and justify the call with the specific signal that triggers the shift.",
      companyId: "drunk-elephant",
      scenario:
        "You're a marketing consultant advising a Drunk Elephant style clean-skincare brand ahead of its annual budget planning cycle.",
      brief:
        "Read the company profile, match its signals against the lesson's skew-toward-brand and skew-toward-performance triggers, and forecast a specific split with a one-sentence justification.",
      mode: "diagnostic",
      conceptsCovered: ["Applying the skew rules to forecast a budget split"],
      steps: [
        {
          stepId: "step-1-apply-skew-rules",
          concept: "Applying the skew rules to forecast a budget split",
          lessonAnchor: "when-to-adjust-the-6040-split",
          theoryRecap:
            "The lesson lists concrete triggers for skewing more than 70% toward performance (early-stage, no PMF, short buying cycle) or more than 70% toward brand (high-consideration category, rising CAC for 2+ quarters, strong PMF, new-market entry).",
          question:
            "Profile: founded 6 years ago, proven product-market fit, sold DTC plus in Sephora and Ulta, average order value $52, repeat purchase rate above category norms, but blended CAC has risen for the last 3 quarters straight despite no bidding changes. What split do you forecast, and which single signal drove the call?",
          toolName: "Google Sheets",
          where: "A simple 2-column sheet: signal from the profile, matching rule from the lesson.",
          procedure: [
            "List every fact in the profile as its own row.",
            "Next to each fact, write which skew rule (if any) it matches.",
            "Count matches for skew-toward-performance vs. skew-toward-brand.",
            "Identify the single strongest signal, not just the majority count.",
            "State the forecasted split as a specific number, not a range.",
          ],
          outputSample:
            "6 years old, proven PMF -> matches 'strong PMF, durable position' (brand)\nCAC rising 3 quarters straight -> matches 'CAC rising 2+ quarters = brand signal, not bidding problem' (brand, strongest signal)\nRepeat purchase above norm -> supports existing brand equity, not a new-market signal\n\nForecast: shift to roughly 70% brand / 30% performance. The rising CAC across 3 consecutive quarters is the strongest single signal in the lesson's framework, and it overrides the fact that performance channels are still technically profitable today.",
          healthy: "The forecast cites the rising-CAC signal specifically, not just 'the company is mature so more brand.'",
          unhealthy: "Recommending 50/50 as a 'safe middle ground' without tying the number to any specific triggered rule.",
          interpret:
            "A rising CAC across multiple quarters is the lesson's clearest brand-deficit signal, treat it as the deciding factor over softer signals like company age.",
          soWhat: [
            {
              symptom: "Budget recommendation has no specific number or citable trigger",
              action:
                "Re-run the signal-matching table and force a specific percentage tied to the strongest matched rule",
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
            role: "Build the signal-to-rule matching table",
            why: "Free, fast to sort and count matches",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page forecast memo: recommended split as a specific percentage, plus the single strongest signal that drove the call.",
      sampleOutput:
        "Nike, budget forecast memo excerpt (illustrative)\n\nSignal: brand campaign (Kaepernick, 2018) ran with zero direct-response elements and stock hit an all-time high within 3 weeks.\nForecast for a brand at this scale: hold at or above the 60% brand baseline. A market leader with strong PMF should skew further toward brand to defend margin and pricing power, not chase incremental performance gains.",
      successCriteria: [
        "Forecast is a specific percentage, not a range or 'more brand'",
        "The justification names the single strongest matched signal from the lesson's rule list",
        "The forecast does not contradict a rule the profile explicitly triggers",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-vs-performance-audit-walker-budget",
      tier: "core",
      archetype: "audit",
      title: "Auditing a Budget for the Brand/Performance Blind Spot",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a simplified marketing budget breakdown and channel-level dashboard notes for a grooming DTC brand, audit the allocation for the two mistakes the lesson names most often: over-indexing on performance despite a rising-CAC brand signal, and trusting last-click attribution to judge brand channels.",
      companyId: "walker-and-company",
      scenario:
        "You're reviewing Q3 budget performance for Walker & Company Brands (Bevel), the grooming brand for people of color, ahead of a Q4 planning meeting.",
      brief:
        "Read the budget table and the dashboard note, flag the allocation problem and the measurement problem separately, and recommend a fix for each.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing a rising CAC as a brand signal, not a bidding problem",
        "Spotting the last-click attribution trap in a budget review",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-cac-signal",
          concept: "Diagnosing a rising CAC as a brand signal, not a bidding problem",
          lessonAnchor: "when-to-adjust-the-6040-split",
          theoryRecap:
            "The lesson states that a cost-per-acquisition rising for more than two quarters in a row is almost always a brand signal, not a bidding problem, especially in a high-consideration category.",
          question:
            "Budget table: 92% of spend on Google Search + retargeting, 8% on podcast sponsorships. Dashboard note: blended CAC up 34% over the last 3 quarters, no major bid or targeting changes made. What's the actual problem, and is more performance spend the right fix?",
          toolName: "Google Sheets",
          where: "The Q3 budget table, columns: channel, spend %, category (brand/performance).",
          procedure: [
            "Label every line item brand or performance.",
            "Sum the two categories as percentages of total spend.",
            "Compare the split against the lesson's 60/40 baseline and the rising-CAC skew-toward-brand rule.",
            "State plainly whether more performance spend would fix a rising CAC that has no bidding cause.",
          ],
          outputSample:
            "Category totals: Performance 92%, Brand 8%\nBaseline: 60% brand / 40% performance\nGap: brand is under-invested by roughly 52 percentage points against baseline\nCAC has risen 34% over 3 quarters with no bidding changes, matching the lesson's rising-CAC-as-brand-signal rule directly.\nConclusion: adding more performance budget would bid against the same shrinking pool of in-market buyers and likely push CAC higher, not lower.",
          healthy: "The memo explicitly rejects 'spend more on performance' as the fix and names the brand-signal rule.",
          unhealthy: "Recommending a bidding or creative refresh on the existing performance channels as the primary fix.",
          interpret:
            "A rising CAC with no bidding changes and almost no brand spend is the textbook case the lesson's skew-toward-brand rule was written for.",
          soWhat: [
            {
              symptom: "Team proposes a Q4 bid strategy overhaul to fix rising CAC",
              action: "Redirect at least 20-30 percentage points of budget toward brand channels before touching bids",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-spot-attribution-trap",
          concept: "Spotting the last-click attribution trap in a budget review",
          lessonAnchor: "different-channels-different-metrics",
          theoryRecap:
            "The lesson warns that last-touch attribution tools credit the final click, so a customer who saw a brand ad months ago and later searches the brand name shows up as 'organic search,' making brand spend look worthless in performance dashboards.",
          question:
            "Dashboard note: 'Podcast sponsorship channel shows $0 attributed conversions in Google Analytics, recommend cutting it.' Organic/branded search conversions rose 18% during the same 2 podcast flights. Should the podcast line be cut?",
          toolName: "Google Sheets",
          where: "The same budget sheet, add a column for 'measurement tool used.'",
          procedure: [
            "Note which tool measured each channel's result (last-click GA vs. no dedicated brand measurement).",
            "Flag any brand channel measured only by last-click attribution.",
            "Cross-reference the branded-search conversion spike against the flagged channel's flight dates.",
            "Recommend the correct measurement method instead of a straight cut.",
          ],
          outputSample:
            "Podcast sponsorship: measured only by last-click GA, shows $0 attributed conversions.\nBranded search conversions rose 18% during both podcast flight windows, a pattern consistent with delayed brand recall, not coincidence.\nRecommendation: do not cut podcast on GA data alone. Run a brand lift study or holdout test before the Q4 decision.",
          healthy:
            "The memo separates 'this channel measured badly' from 'this channel performed badly,' and recommends a brand-appropriate measurement method before recommending a cut.",
          unhealthy: "Accepting the $0-attributed-conversions number at face value and cutting the channel.",
          interpret:
            "$0 last-click conversions on a brand channel is expected behavior, not proof of failure, when the customer's actual next action was a branded search weeks later.",
          soWhat: [
            {
              symptom: "A brand channel shows near-zero last-click conversions and is flagged for cuts",
              action: "Run a brand lift study or geo holdout test before reallocating that budget",
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
            role: "Hold the budget table and run the category/attribution audit",
            why: "Free, sufficient for a channel-level percentage audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A two-part audit memo: the allocation problem (with a specific percentage gap against baseline) and the measurement problem (with the correct fix for each).",
      sampleOutput:
        "Airbnb, Q1 2021 budget audit excerpt (illustrative)\n\nAllocation: cut performance spend by more than 50% and eliminated most retargeting; reallocated toward the 'Made Possible by Hosts' brand campaign.\nMeasurement: tracked direct-traffic growth and brand lift instead of last-click conversions, since a brand campaign's real effect was people typing airbnb.com directly rather than clicking a paid ad.\nResult: direct traffic grew 28% following the shift, exactly the kind of gain a last-click dashboard alone would have missed.",
      successCriteria: [
        "Allocation gap against the 60/40 baseline is stated as a specific percentage",
        "Rising CAC is correctly diagnosed as a brand signal, not recommended for a performance-side fix",
        "The attribution problem is flagged separately from the allocation problem, with a brand-appropriate measurement fix",
      ],
      portfolioReady: true,
    },
  ],

  "category-design": [
    {
      id: "category-design-mailchimp-billboard-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Category or Feature? A Positioning Statement Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate positioning statements from a fictional Mailchimp product launch, apply the lesson's 'billboard test' to decide which one names a real category and which two are feature claims dressed up as category launches.",
      companyId: "mailchimp",
      scenario:
        "You're a product marketer at Mailchimp. The team is about to launch a new AI send-time feature and three different people have pitched three different ways to position it. Leadership wants one recommendation before the launch brief is finalized.",
      brief:
        "Read each specimen, decide whether it names a category (billboard-able, ownable, competitor cannot claim the same label) or a feature (a comparative claim inside an existing category), and flag the defect.",
      mode: "teardown",
      conceptsCovered: ["Naming a feature instead of a category"],
      teardownItems: [
        {
          itemId: "category-design-mailchimp-teardown-1",
          specimen:
            "\"Introducing AI-Powered Send Time Optimization, the smartest way to schedule your Mailchimp campaigns.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this a category name or a feature name? Would it survive the billboard test, and could a competitor claim the exact same label next quarter?",
          answerKey: [
            {
              defect: "Feature launch framed as a category, not an actual category",
              severity: "critical",
              whyItMatters:
                "'AI-Powered Send Time Optimization' describes what the feature does, not a new problem the market has no language for. Every competing ESP (email service provider) can and will ship the identical feature under the identical name within a year, and the label gives Mailchimp no ownership.",
              lessonRef: "Step 2: Name the Category, Then the Company",
              owner: "you",
            },
          ],
          distractors: [
            "The name isn't catchy enough to fit on a billboard",
            "It's too technical for a CFO to repeat in a budget meeting",
            "It needs a shorter acronym before it can be a category",
          ],
          partialCredit: true,
        },
        {
          itemId: "category-design-mailchimp-teardown-2",
          specimen:
            "\"Mailchimp is building for Owned Marketing, the category for brands who refuse to keep renting their audience from ad platforms they don't control.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this a category name or a feature name? Would it survive the billboard test, and could a competitor claim the exact same label next quarter?",
          answerKey: [
            {
              defect: "None critical, this one passes the billboard test",
              severity: "cosmetic",
              whyItMatters:
                "'Owned Marketing' names a problem (renting audiences from ad platforms you don't control) rather than a product capability, and it's short enough for a CFO to repeat. The only real gap left is Step 3: it still needs a published point of view before it's a real category, not just a slogan.",
              lessonRef: "Step 2: Name the Category, Then the Company",
              owner: "you",
            },
          ],
          distractors: [
            "The phrase 'Owned Marketing' is too abstract to mean anything",
            "It doesn't mention Mailchimp's product features at all, so it will confuse buyers",
            "It should be renamed to something with 'AI' in it to feel current",
          ],
          partialCredit: true,
        },
        {
          itemId: "category-design-mailchimp-teardown-3",
          specimen:
            "\"Our new Customer Journey Builder runs automations 40% faster than the leading competitor's tool.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this a category name or a feature name? Would it survive the billboard test, and could a competitor claim the exact same label next quarter?",
          answerKey: [
            {
              defect: "Comparative feature claim, plays entirely on a competitor's terms",
              severity: "critical",
              whyItMatters:
                "This statement accepts 'marketing automation tool' as the category and argues only about speed inside it. It's the exact 'which vendor is best' framing category design exists to escape, and '40% faster' is a claim any competitor can beat with next quarter's benchmark.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The 40% figure needs a footnote citing the benchmark methodology",
            "'Customer Journey Builder' is not a snappy enough product name",
            "The claim should be tested with a landing page before publishing",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Score each specimen against the billboard test and write the one-line recommendation",
            why: "Free, and the shared-comment workflow matches how a real positioning decision gets reviewed by leadership",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page memo scoring all three specimens against the billboard test, with a single recommended positioning statement for the launch brief.",
      sampleOutput:
        "Positioning Teardown, Gong AI Call Scoring Launch (excerpt)\n\nSPECIMEN 1: \"Introducing AI Call Grading, automatically score every rep's call quality.\"\nVERDICT: Feature, not category. Describes a capability; any competitor ships the identical label.\n\nSPECIMEN 2: \"Gong is building the category for Revenue Intelligence, understanding what actually happens in the field instead of trusting what reps type into a CRM.\"\nVERDICT: Category. Names a problem (data entered by hand vs. reality), short enough for a CFO, ownable.\n\nRECOMMENDATION: Lead the launch brief with Specimen 2's framing. Fold the AI call-grading feature in as one proof point under the Revenue Intelligence umbrella, not as the headline.",
      successCriteria: [
        "Correctly identifies specimen 1 and 3 as feature claims and specimen 2 as a real category name",
        "Recommendation names the specific defect, not just 'good' or 'bad'",
      ],
      portfolioReady: true,
    },
    {
      id: "category-design-snowflake-pov-brief",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Point of View: A Category POV Brief for a New Data Category",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Given a scenario where a data-cloud company is deciding whether to name a new category around AI-native data workloads, use the lesson's 10-part POV structure to draft the core sections of a category manifesto and sequence the sales conversation that would open it.",
      companyId: "snowflake",
      scenario:
        "You're on the positioning team at Snowflake. Engineering shipped a new capability for running AI model workloads directly against warehoused data without exporting it. Leadership is deciding whether this deserves its own category or should ship as a feature inside the existing Data Cloud story.",
      brief:
        "Draft the Context, Problem, Villain, and Why Now sections of a POV brief, then sequence how the first sales conversation should open if this becomes a real category launch.",
      mode: "build",
      conceptsCovered: [
        "The 10-Part Point of View Structure",
        "Sell the Problem First, the Product Second",
      ],
      steps: [
        {
          stepId: "category-design-snowflake-step-1-pov-structure",
          concept: "The 10-Part Point of View Structure",
          lessonAnchor: "the-10-part-point-of-view-structure",
          theoryRecap:
            "A strong category manifesto opens with four sections in order: Context (sets the scene), Problem (names the pain), Villain (the old way), and Why Now (the timing argument), before it ever mentions the solution.",
          question:
            "What is the actual problem, not the feature, that justifies a new category here, and why does it have to be named now rather than in two years?",
          toolName: "Google Docs",
          where:
            "A new doc titled 'AI-Native Data POV, Draft 1' shared with the positioning team.",
          procedure: [
            "Write one paragraph of Context: what changed in how companies build with data in the last 18 months",
            "Write one paragraph of Problem: name the specific pain, not the feature (data leaving the warehouse to reach an AI model is slow, insecure, and creates duplicate copies)",
            "Write one paragraph naming the Villain: the old way companies are forced to work (exporting data to a separate ML platform)",
            "Write one paragraph of Why Now: the timing argument that makes this urgent instead of optional",
          ],
          outputSample:
            "CONTEXT: Every data team now has an AI initiative, and every AI initiative needs the company's own data, not a public model's training set.\n\nPROBLEM: Getting a company's real data in front of an AI model still means exporting it to a separate ML platform, copying it, losing governance, and waiting days.\n\nVILLAIN: The 'export-and-hope' workflow, where sensitive data leaves the warehouse's security perimeter just to be usable by an AI model.\n\nWHY NOW: Every AI vendor is racing to plug into enterprise data; the company that lets AI work where the data already lives, instead of the other way around, sets the default architecture before anyone else does.",
          healthy:
            "Problem section names a pain with no feature name in it at all.",
          unhealthy:
            "Problem section reads 'the problem is we don't have Feature X yet', which just restates the roadmap.",
          interpret:
            "If you can't write a Problem paragraph without naming your own feature, you have a feature, not a category, and the launch should stay inside the existing Data Cloud story.",
          soWhat: [
            {
              symptom: "Problem paragraph mentions the feature name",
              action: "Rewrite until it names only the pain, then re-check whether a feature name crept back in",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "category-design-snowflake-step-2-sell-problem-first",
          concept: "Sell the Problem First, the Product Second",
          lessonAnchor: "step-5-sell-the-problem-first-the-product-second",
          theoryRecap:
            "In a category-design motion, roughly the first 60% of a sales conversation is spent getting the prospect to agree the old category is broken, before a single product screen shows.",
          question:
            "If a sales rep opens a call about this new capability, what should the first three minutes of the conversation cover before the product ever comes up?",
          toolName: "Google Docs",
          where: "The same POV doc, new section titled 'Opening the Conversation'.",
          procedure: [
            "Write the first question a rep should ask to surface the export-and-hope pain in the prospect's own words",
            "Write one follow-up question that gets the prospect to state the cost of that pain out loud",
            "Write the one sentence that transitions from problem agreement to naming the new approach",
            "Mark the point in the sequence where the product demo is allowed to start",
          ],
          outputSample:
            "OPEN: \"Walk me through what happens today when your data science team needs data from the warehouse for a model.\"\n\nFOLLOW-UP: \"How many separate copies of that data exist right now, and who signs off on each one leaving the warehouse?\"\n\nTRANSITION: \"That export-and-hope step is exactly what we built this to remove.\"\n\nDEMO STARTS: Only after the prospect has named their own copy-and-export pain unprompted, never before.",
          healthy:
            "The product name doesn't appear until the fourth line of the sequence.",
          unhealthy:
            "The rep's opening question already contains the product name or feature name.",
          interpret:
            "A sales sequence that leads with the product name is a feature pitch wearing a category costume; the problem has to land first or the category framing never actually happens in the room.",
          soWhat: [
            {
              symptom: "Reps keep opening calls with a product demo",
              action: "Rewrite the call script's first three lines around the problem questions above, hold the demo until the prospect names the pain",
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
            role: "Draft the POV sections and the sales-opening sequence in one shared document",
            why: "Free, comment-friendly, and matches how a real positioning brief circulates for review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A POV brief draft covering Context, Problem, Villain, and Why Now, plus a four-line sales-opening sequence that delays the product name until the prospect has named their own pain.",
      sampleOutput:
        "Qualtrics XM POV Brief, Draft 1 (excerpt)\n\nCONTEXT: Every company collects customer feedback, but almost none of it changes a decision.\n\nPROBLEM: Operational data (what happened) and experience data (how people felt about it) live in separate systems that never talk to each other.\n\nVILLAIN: The quarterly survey, filed and forgotten before the next board meeting.\n\nWHY NOW: Churn is now visible in real time on every dashboard except the one that would explain why it's happening.\n\nOPENING SEQUENCE: \"Walk me through what happens after your last NPS survey closed.\" -> \"Who acted on it, and what changed?\" -> \"That gap between feedback and action is what we built Experience Management to close.\" -> demo starts.",
      successCriteria: [
        "Problem paragraph names a pain with zero feature or product names in it",
        "Sales-opening sequence delays the product name to the final line",
      ],
      portfolioReady: true,
      stretch:
        "Add the remaining six sections of the 10-part structure (Costs of Inaction, Solution, Category Name, Blueprint, Outcomes, Call to Action) to turn the draft into a complete manifesto.",
    },
  ],
  "plg-fundamentals": [
    {
      id: "plg-fundamentals-squarespace-signup-audit",
      tier: "mini",
      archetype: "audit",
      title: "Find the Leak: Auditing a Self-Serve Signup Funnel",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a synthetic step-by-step signup funnel with drop-off numbers for a website-builder product, identify where time-to-value is being lost and which step is the highest-leverage fix.",
      companyId: "squarespace",
      scenario:
        "You're a growth PM at Squarespace. A new self-serve signup flow launched last month and weekly trial-to-paid conversion dropped. You've pulled the funnel's step-by-step numbers to find out where.",
      brief:
        "Walk the funnel, flag the step with the steepest drop-off relative to how far the user already is from value, and recommend the single change most likely to shorten time-to-value.",
      mode: "diagnostic",
      conceptsCovered: ["Time-to-Value (TTV)"],
      steps: [
        {
          stepId: "plg-fundamentals-squarespace-step-1-ttv-audit",
          concept: "Time-to-Value (TTV)",
          lessonAnchor: "core-metrics-of-plg",
          theoryRecap:
            "Time-to-Value is the duration it takes a new user to experience their first win, and minimizing it is the single most effective lever for improving activation rate.",
          question:
            "Given this funnel, which drop-off is a normal signup-friction loss, and which one is actually a time-to-value problem, a step where the user is close to their first win but leaves anyway?",
          toolName: "Google Sheets",
          where: "Import the funnel export, one row per step, with a `users_reached` and `dropoff_pct` column.",
          procedure: [
            "List all 5 funnel steps with users reached and drop-off percentage at each",
            "Mark which steps happen before the user has seen any real output from the product (pre-value) and which happen after (post-value)",
            "Flag the step with the highest drop-off that occurs after the user is already close to a first win",
            "Write the one recommended fix for that specific step",
          ],
          outputSample:
            "STEP           USERS   DROPOFF\nSignup form     1,000    12%\nEmail verify      880     8%\nTemplate pick      810    35%  <- FLAGGED\nDomain connect     527    15%\nFirst publish      448     -\n\nFLAGGED STEP: Template pick. Users have already verified their email (committed) and are one click from seeing a live site (near value), yet lose over a third of the funnel here.",
          healthy:
            "The steepest post-commitment drop-off sits right before the user would see their first real output.",
          unhealthy:
            "Treating the signup-form drop-off (12%) as the priority because it's the first number in the list, when it's normal top-of-funnel friction, not a time-to-value problem.",
          interpret:
            "A user who already verified their email has invested effort; losing 35% of them one step before they'd see a live site means the template picker itself, not the product's value, is the barrier.",
          soWhat: [
            {
              symptom: "35% drop-off at template selection, right before first publish",
              action: "Cut the template choice to 3 curated options with a 'skip, use default' path so the first published site appears faster",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Lay out the funnel steps and compute drop-off percentages",
            why: "Free, and pivot-table friendly for a 5-row funnel export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A funnel audit table flagging the highest-leverage drop-off step with a specific recommended fix.",
      sampleOutput:
        "Navattic Signup Funnel Audit (excerpt)\n\nSTEP              USERS   DROPOFF\nAccount created    1,200    10%\nConnect data source  1,080  40%  <- FLAGGED\nBuild first demo      648   18%\nShare demo link        531    -\n\nFLAGGED STEP: Connect data source. Users already created an account (committed) and are two steps from their first published demo (near value), but 40% abandon at the data-connection step.\n\nRECOMMENDATION: Add a 'use sample data' skip option so users can reach a first demo before connecting their own source.",
      successCriteria: [
        "Correctly separates pre-value friction from a genuine time-to-value leak",
        "Flags the step with the steepest post-commitment drop-off, not just the largest raw number",
      ],
      portfolioReady: true,
    },
    {
      id: "plg-fundamentals-klaviyo-pql-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Real Signal or Vanity Metric? A PQL Definition Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate definitions of a Product-Qualified Lead for an email marketing platform, identify which definitions actually indicate buying intent and which are vanity activity that doesn't predict a sale.",
      companyId: "klaviyo",
      scenario:
        "You're on the growth team at Klaviyo. Sales wants a list of PQLs to prioritize outreach, and three different definitions have been proposed by three different people in the same meeting.",
      brief:
        "Score each candidate PQL definition against whether it reflects experienced value and buying intent, or just login activity that doesn't predict expansion.",
      mode: "teardown",
      conceptsCovered: ["Product-Qualified Leads (PQLs)"],
      teardownItems: [
        {
          itemId: "plg-fundamentals-klaviyo-teardown-1",
          specimen:
            "PQL definition A: \"Any account that has logged in at least once in the past 30 days.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Does this definition indicate buying intent, or is it a vanity activity metric?",
          answerKey: [
            {
              defect: "Vanity activity metric, not a value or intent signal",
              severity: "critical",
              whyItMatters:
                "A login proves nothing about whether the account experienced value or hit a usage ceiling. A PQL definition has to measure a milestone that indicates the user understood the product's value, not that they opened a tab.",
              lessonRef: "Core Metrics of PLG",
              owner: "you",
            },
          ],
          distractors: [
            "The 30-day window is too short and should be 60 days",
            "It should require two logins instead of one",
            "It needs to exclude free trial accounts specifically",
          ],
          partialCredit: true,
        },
        {
          itemId: "plg-fundamentals-klaviyo-teardown-2",
          specimen:
            "PQL definition B: \"Any account that has sent at least 3 campaigns AND hit the free-tier contact limit in the same billing cycle.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Does this definition indicate buying intent, or is it a vanity activity metric?",
          answerKey: [
            {
              defect: "None critical, this combines an activation milestone with a real usage-ceiling signal",
              severity: "cosmetic",
              whyItMatters:
                "Sending 3 campaigns shows the account experienced core value, and hitting the free-tier contact limit is a direct signal they need to pay to keep growing. This is exactly the kind of usage-threshold-plus-value combination a PQL definition should use.",
              lessonRef: "Core Metrics of PLG",
              owner: "you",
            },
          ],
          distractors: [
            "3 campaigns is an arbitrary number that should be tested further",
            "The definition doesn't account for seasonal senders",
            "It should also require a certain open rate to qualify",
          ],
          partialCredit: true,
        },
        {
          itemId: "plg-fundamentals-klaviyo-teardown-3",
          specimen:
            "PQL definition C: \"Any account whose company name matches a target list of enterprise brands.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Does this definition indicate buying intent, or is it a vanity activity metric?",
          answerKey: [
            {
              defect: "Firmographic filter, not a product-usage signal at all",
              severity: "moderate",
              whyItMatters:
                "This is a marketing-qualified-lead style filter borrowed from the sales-led playbook. It says nothing about whether the account has used the product or is near a usage ceiling, it just says the company is big, which is a completely different question from 'has this account experienced value.'",
              lessonRef: "The Paradigm Shift of PLG",
              owner: "you",
            },
          ],
          distractors: [
            "The target list needs more enterprise brands added to it",
            "It should be combined with a minimum employee count",
            "It's fine for enterprise accounts but not for SMB accounts",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each candidate PQL definition against a value-signal checklist",
            why: "Free, and easy to share with sales for a fast sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page scorecard ranking the three candidate PQL definitions with the recommended one for sales to use.",
      sampleOutput:
        "Notion PQL Definition Scorecard (excerpt)\n\nDEFINITION A: \"Created a workspace.\"\nVERDICT: Vanity signal. No value experienced yet.\n\nDEFINITION B: \"Invited 3+ teammates AND created 10+ pages within 14 days.\"\nVERDICT: Real signal. Combines collaboration habit formation with a concrete usage milestone.\n\nRECOMMENDATION: Route sales outreach off Definition B only; Definition A produces too many false positives to be actionable.",
      successCriteria: [
        "Correctly flags the login-only definition as a vanity metric",
        "Correctly identifies the usage-threshold-plus-value definition as the strongest signal",
      ],
      portfolioReady: true,
    },
  ],

  "go-to-market-strategy": [
    {
      id: "gtm-motion-selection-brief",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Motion Call: Building a GTM Selection Brief for a New Product",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic new product's deal size, buyer type, and complexity, apply the lesson's 3-variable framework to select a GTM motion and draft the five core GTM components that support it.",
      companyId: "robinhood",
      scenario:
        "You're a GTM strategist at Robinhood, evaluating a new $15/month premium research subscription for retail investors the company is considering launching alongside its existing free brokerage app.",
      brief:
        "Use the deal-size/buyer-type/complexity signal table to pick a motion, then draft ICP, messaging, channel, pricing, and sales-motion decisions consistent with that pick.",
      mode: "build",
      conceptsCovered: [
        "Choosing a GTM motion using deal size, buyer type, and product complexity",
        "Building the five core GTM components",
      ],
      steps: [
        {
          stepId: "step-1-motion-selection",
          concept: "Choosing a GTM motion using deal size, buyer type, and product complexity",
          lessonAnchor: "how-to-pick-your-motion",
          theoryRecap:
            "The lesson's motion-selection table maps ACV, buyer type, and product complexity onto one of four GTM motions, PLG, SLG, Marketing-Led, or Channel-Led.",
          question:
            "$15/month, individual retail investors self-serve sign-up, the product (a research dashboard) delivers value in under 2 minutes, and no reseller or partner ecosystem exists yet. Which motion does the signal table point to?",
          toolName: "Google Sheets",
          where: "A single-tab decision matrix, one row per signal from the lesson's table, one column for your product's actual value.",
          procedure: [
            "List all 7 signals from the lesson's table as rows",
            "Fill in the product's real value for each signal (ACV, buyer type, complexity, activation time, ecosystem)",
            "Mark which motion each row points toward",
            "Tally the majority motion and flag any row that contradicts it",
          ],
          outputSample:
            "Signal -> Product value -> Motion pointed to\nACV -> $180/yr ($15/mo) -> Product-Led\nBuyer -> Individual retail investor -> Product-Led\nComplexity -> Self-serve, no onboarding call -> Product-Led\nTime to value -> Under 2 minutes -> Product-Led\nEcosystem -> None yet -> Sales-Led or Marketing-Led (contradicts)\n\nMajority: Product-Led Growth (4 of 5 signals). Ecosystem signal is neutral, not contradictory, since a missing ecosystem doesn't rule out PLG.",
          healthy: "4-5 of the 7 signals agree on one motion, and any disagreement is explainable (e.g. a missing signal, not a conflicting one).",
          unhealthy: "Picking a motion because a competitor uses it, without running the product's own numbers through the table.",
          interpret:
            "A near-unanimous signal table means the motion choice is low-risk. A split table (e.g. 4 signals PLG, 3 signals SLG) means the product may need a hybrid motion, not a forced single choice.",
          soWhat: [
            {
              symptom: "Team wants to hire SDRs for a $15/month self-serve product",
              action: "Show the signal table in the next planning meeting before headcount is approved",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-core-components",
          concept: "Building the five core GTM components",
          lessonAnchor: "core-gtm-components",
          theoryRecap:
            "Every GTM strategy needs five components regardless of motion: ICP definition, messaging, channel selection, pricing/packaging, and sales motion, each sized to fit the chosen motion.",
          question:
            "Given the PLG pick from Step 1, what does each of the five core components look like for a self-serve $15/month research subscription?",
          toolName: "Google Sheets",
          where: "A second tab, one row per component, one column for the PLG-consistent decision.",
          procedure: [
            "ICP: narrow past 'retail investors' to a specific behavior segment (e.g. active traders checking the app 3+ times/week)",
            "Messaging: write one sentence a user could repeat to a friend, no jargon like 'innovative'",
            "Channel: pick the one channel your ICP already spends attention on (in-app upsell, not cold outbound)",
            "Pricing: confirm $15/month with a free-tier on-ramp matches PLG, not a 'Contact Sales' button",
            "Sales motion: confirm the path from free user to paid is fully automated, no human handoff",
          ],
          outputSample:
            "ICP: Active traders who open the app 3+ times/week and have viewed a stock's fundamentals tab\nMessaging: 'See what the pros see before you trade, no subscription commitment'\nChannel: In-app upsell banner on the fundamentals tab (where the buying intent already exists)\nPricing: $15/mo, first 7 days free, no sales call required\nSales motion: Fully self-serve, upgrade button inside the app, zero human touch",
          healthy: "Every component is internally consistent with PLG, no 'Contact Sales' button hiding inside an otherwise self-serve flow.",
          unhealthy: "Messaging written for the PLG motion but pricing that requires a sales call, a classic motion/pricing mismatch.",
          interpret: "A GTM brief where all five components point the same direction is fundable. One inconsistent component (usually pricing) undermines the whole plan.",
          soWhat: [
            {
              symptom: "Pricing page has a 'Contact Sales' button on a $15/month product",
              action: "Replace with a self-serve checkout flow before launch",
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
            role: "Build the motion-selection matrix and the five-component brief",
            why: "Free, no account friction, sufficient structure for a two-tab decision document",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page GTM motion brief: the selected motion with its signal-table justification, plus five core-component decisions (ICP, messaging, channel, pricing, sales motion) sized to that motion.",
      sampleOutput:
        "Wise Business Multi-Currency Card, GTM Motion Brief (excerpt)\n\nSELECTED MOTION: Product-Led Growth\nJustification: 6 of 7 signals point PLG, sub-$500/mo ACV, individual business owner as buyer, self-serve card ordering, value delivered on first transaction.\n\nICP: Solo founders and freelancers invoicing in 2+ currencies who already hold a Wise personal account\nMessaging: 'One card, any currency, no hidden conversion fees'\nChannel: In-app prompt shown after a user's third cross-currency transfer\nPricing: Free card, revenue from FX spread, no tier requires a sales call\nSales motion: Fully self-serve card order inside the existing Wise app",
      successCriteria: [
        "Motion selection is justified by the signal table, not by preference or competitor-copying",
        "All five core components are internally consistent with the chosen motion",
        "Pricing and sales motion don't contradict each other (no sales call hidden behind self-serve pricing)",
      ],
      portfolioReady: true,
    },
    {
      id: "gtm-sequencing-audit",
      tier: "mini",
      archetype: "audit",
      title: "Sequencing Autopsy: Auditing a GTM Rollout That Scaled Too Soon",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic GTM rollout log for a new Coinbase merchant-payments product, identify every sequencing violation against the lesson's Phase 1-3 model and Common Mistakes list, then rewrite the correct order.",
      companyId: "coinbase",
      scenario:
        "Coinbase's product team hands you the rollout log for a new B2B crypto-payments product for merchants. Paid ads, a global content push, and 4 SDR hires all launched the same month the beta ended, before a single paying customer had closed.",
      brief:
        "Read the rollout log, flag every sequencing violation against Phase 1/Phase 2/Phase 3, map each to a named GTM mistake, and rewrite the correct order.",
      mode: "diagnostic",
      conceptsCovered: [
        "Sequencing GTM Phase 1 through Phase 3",
        "Diagnosing the most common GTM mistakes",
      ],
      steps: [
        {
          stepId: "step-1-phase-audit",
          concept: "Sequencing GTM Phase 1 through Phase 3",
          lessonAnchor: "gtm-sequencing-what-to-do-first",
          theoryRecap:
            "The correct GTM order is Phase 1 (founder/team closes 10 deals themselves to learn objections), Phase 2 (prove one channel to repeatable CAC), Phase 3 (hire and scale the proven motion). Skipping ahead is the #1 GTM killer.",
          question:
            "The rollout log shows 4 SDR hires and a global content push launching the same month the beta ended, with zero paying customers closed yet. Which phase did the team skip?",
          toolName: "Google Sheets",
          where: "A log-review sheet: one row per rollout log entry, one column for which Phase it should belong to.",
          procedure: [
            "List every dated action from the rollout log as a row",
            "Tag each action with the Phase (1, 2, or 3) it actually belongs to",
            "Flag any action tagged Phase 2 or 3 that happened before any Phase 1 action completed",
            "Count how many paying customers existed when Phase 3-tagged actions (hiring) began",
          ],
          outputSample:
            "Action -> Should be Phase -> Actually happened\nBeta ends, 0 paying customers -> n/a -> Month 1\n4 SDRs hired -> Phase 3 -> Month 1 (violation, 0 paying customers)\nGlobal content push across 6 markets -> Phase 2/3 -> Month 1 (violation, no proven channel yet)\nFirst paying customer closes -> Phase 1 -> Month 2 (should have been first)",
          healthy: "Phase 3 actions (hiring, scaling) only appear in the log after Phase 1 (10 deals) and Phase 2 (one proven channel) are already checked off.",
          unhealthy: "Hiring and multi-market spend appearing in the same month as the very first paying customer.",
          interpret: "When Phase 3 actions precede Phase 1 completion, the team is scaling a motion nobody has proven yet, exactly the pattern the lesson calls the #1 GTM killer.",
          soWhat: [
            { symptom: "SDRs hired before any deal has closed", action: "Pause hiring, redirect the SDR budget to founder-led sales for 60 days", effort: "half day" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-mistake-mapping",
          concept: "Diagnosing the most common GTM mistakes",
          lessonAnchor: "common-gtm-mistakes",
          theoryRecap:
            "The lesson names three recurring GTM mistakes: confusing a launch with GTM, going multi-channel too early, and lacking ICP discipline.",
          question:
            "The same rollout log shows content pushed across 6 markets simultaneously by a 3-person team, and every inbound lead accepted regardless of fit. Which named mistakes does this match?",
          toolName: "Google Sheets",
          where: "A second column next to your Phase tags, naming the specific mistake.",
          procedure: [
            "Match the 6-market simultaneous push to 'Going multi-channel too early'",
            "Match 'every inbound lead accepted' to 'No ICP discipline'",
            "Match the assumption that beta-end equals GTM-done to 'Confusing launch with GTM'",
            "Write one corrected action per flagged mistake",
          ],
          outputSample:
            "Log entry -> Mistake -> Correction\n6-market content push, 3-person team -> Going multi-channel too early -> Pick 1 market, prove it, then expand\nAll inbound leads routed to sales -> No ICP discipline -> Filter to accounts matching the merchant-payments ICP only\nTeam considers beta-end as 'launched' -> Confusing launch with GTM -> Treat beta-end as Day 1 of Phase 1, not the finish line",
          healthy: "Each flagged log entry maps to exactly one named mistake with a specific correction, not a vague 'do better' note.",
          unhealthy: "Treating the whole rollout as one generic failure instead of separating out which specific mistake caused which specific symptom.",
          interpret: "A rollout usually fails from 2-3 compounding mistakes, not one. Fixing only the loudest symptom (e.g. pausing ads) without fixing ICP discipline just delays the same failure.",
          soWhat: [
            { symptom: "Every inbound lead routed straight to sales regardless of fit", action: "Add an ICP-fit filter before any lead reaches an AE", effort: "30 min" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the phase-tagging and mistake-mapping audit log",
            why: "Free, sufficient for a row-per-log-entry audit with no special features needed",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An audit memo flagging every sequencing violation in the rollout log, each mapped to a named GTM mistake, plus a corrected Phase 1 through Phase 3 timeline.",
      sampleOutput:
        "Adyen Merchant Onboarding Tool, Sequencing Audit (excerpt)\n\nVIOLATION 1: Marketing hired an agency and briefed a 4-market launch before any pilot merchant had onboarded.\nMistake: Going multi-channel too early + Confusing launch with GTM.\nCorrection: Pull back to 1 pilot market, onboard 10 merchants manually, then brief the agency on what actually worked.\n\nVIOLATION 2: Sales accepted every inbound demo request, including non-merchant accounts.\nMistake: No ICP discipline.\nCorrection: Route demo requests through an ICP-fit filter (transaction volume, industry) before booking.",
      successCriteria: [
        "Every flagged log entry is mapped to a specific named phase or mistake, not a generic critique",
        "The corrected timeline puts Phase 1 (proof) before Phase 3 (scale) actions",
      ],
      portfolioReady: true,
    },
  ],
  "abm-fundamentals": [
    {
      id: "abm-target-account-list-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Account List: Building a Tiered TAL for a New Vertical",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given synthetic firmographic, technographic, and intent data for 20 prospective accounts, build a tiered Target Account List (1:1 / 1:Few / 1:Many) using the lesson's four-input framework.",
      companyId: "adyen",
      scenario:
        "Adyen's enterprise sales team wants to push harder into mid-market fashion and beauty e-commerce retailers. You have a spreadsheet of 20 candidate accounts with headcount, tech stack, and intent signals.",
      brief:
        "Layer ICP firmographics, technographics, intent data, and sales input to assign each account to a tier, then justify the split.",
      mode: "build",
      conceptsCovered: [
        "Layering ICP firmographics, technographics, intent data, and sales input into a Target Account List",
        "Assigning accounts to the three ABM tiers by investment level",
      ],
      steps: [
        {
          stepId: "step-1-tal-inputs",
          concept: "Layering ICP firmographics, technographics, intent data, and sales input into a Target Account List",
          lessonAnchor: "building-your-target-account-list",
          theoryRecap:
            "A strong TAL layers four inputs: ICP firmographics (industry, size, geography), technographics (which tools the account already runs), intent data (who's actively researching now), and sales input (which accounts AEs already know are live).",
          question:
            "Of your 20 candidate accounts, 12 run a checkout platform Adyen already integrates with, 5 show recent intent spikes on 'payment orchestration' content, and sales flags 3 as already in active conversation. How do you combine these into one ranked list?",
          toolName: "Google Sheets",
          where: "A 20-row sheet, one column per input (firmographic fit, technographic fit, intent signal, sales flag).",
          procedure: [
            "List all 20 accounts as rows",
            "Score firmographic fit (industry + headcount match) as a checkbox column",
            "Score technographic fit (already runs a compatible checkout stack) as a checkbox column",
            "Mark intent-spike accounts and sales-flagged accounts separately",
            "Sum checked columns per account to get a raw priority score",
          ],
          outputSample:
            "Account -> Firmographic -> Technographic -> Intent -> Sales flag -> Score\nAccount A (mid-market beauty, 300 staff) -> yes -> yes -> yes -> yes -> 4\nAccount B (mid-market fashion, 250 staff) -> yes -> yes -> no -> no -> 2\nAccount C (out of size range) -> no -> yes -> no -> no -> 1",
          healthy: "The top-scoring accounts have hits across at least 3 of the 4 inputs, not just one strong signal masking three weak ones.",
          unhealthy: "Prioritizing an account purely on intent data while ignoring that it doesn't fit the firmographic ICP at all.",
          interpret: "A 4-input score separates real fit from noise. An account with only an intent spike and nothing else is a lead, not yet a target account.",
          soWhat: [
            { symptom: "TAL built from intent data alone", action: "Cross-check every intent-flagged account against firmographic fit before adding it", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-tier-assignment",
          concept: "Assigning accounts to the three ABM tiers by investment level",
          lessonAnchor: "the-three-abm-tiers",
          theoryRecap:
            "1:1 (Strategic) gets bespoke content for 20-50 must-win accounts and 50-60% of budget. 1:Few (Cluster) groups lookalikes with semi-customized content. 1:Many (Programmatic) runs templated content at scale for hundreds of ICP-fit accounts.",
          question:
            "Your top-scoring 3 accounts (score 4/4) include sales-flagged, in-conversation deals. Your next 8 accounts (score 2-3) share the same fashion-retail profile. The remaining 9 are ICP-fit but unengaged. How do you tier them?",
          toolName: "Google Sheets",
          where: "A new column assigning each scored account to 1:1, 1:Few, or 1:Many.",
          procedure: [
            "Assign the top 3 score-4 accounts to 1:1 (bespoke content, executive outreach)",
            "Assign the 8 score-2/3 fashion-retail accounts to 1:Few (one shared industry-specific campaign)",
            "Assign the remaining 9 ICP-fit accounts to 1:Many (templated, intent-triggered ads)",
            "Confirm the 1:1 tier stays capped near 20-30 accounts even as the list grows",
          ],
          outputSample:
            "Tier -> Accounts -> Content approach\n1:1 -> 3 (score 4, sales-flagged) -> Custom ROI model + executive briefing per account\n1:Few -> 8 (fashion-retail cluster) -> One industry-specific case study + tailored landing page for the cluster\n1:Many -> 9 (ICP-fit, unengaged) -> Intent-triggered display ads + templated nurture",
          healthy: "1:1 stays reserved for the highest-scoring, sales-confirmed accounts, not padded with borderline fits just to look ambitious.",
          unhealthy: "Putting all 20 accounts into 1:1 because the team wants to feel like every account gets VIP treatment, which no one can sustain.",
          interpret: "Tier size should shrink as personalization depth increases. If 1:1 has more accounts than 1:Few, the program is over-committing bespoke effort it can't deliver.",
          soWhat: [
            { symptom: "1:1 tier has grown past 30 accounts", action: "Demote the lowest-scoring 1:1 accounts to 1:Few before the next quarter", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score accounts against the four TAL inputs and assign tiers",
            why: "Free, handles a 20-row scored list without needing a paid intent-data platform",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "HubSpot CRM",
            role: "Log sales input (which accounts AEs already know are in active conversation)",
            why: "Free CRM tier is enough to tag and track account status alongside the TAL",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tiered Target Account List (1:1 / 1:Few / 1:Many) for 20 accounts, each tagged with the firmographic, technographic, intent, or sales-input signal that justified its tier.",
      sampleOutput:
        "Wise Business, Fintech Vertical TAL (excerpt)\n\n1:1 (3 accounts): Includes one account where sales already has a live proposal in review, custom ROI model in progress.\n1:Few (6 accounts): Mid-market fintech app cluster sharing the same 'multi-currency payout' pain point, one shared case study in production.\n1:Many (11 accounts): ICP-fit fintech accounts with no engagement yet, entered into intent-triggered ad sequence.",
      successCriteria: [
        "Every account's tier assignment is traceable to at least 2 of the 4 TAL inputs",
        "The 1:1 tier stays reserved for the highest-scoring, sales-confirmed accounts only",
        "Tier sizes shrink as personalization depth increases (1:1 smallest, 1:Many largest)",
      ],
      portfolioReady: true,
    },
    {
      id: "abm-program-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Program Teardown: Finding the Defects in a Failing ABM Pitch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Read a synthetic ABM program recap for Wise Business and identify every structural defect against the lesson's tiering, TAL, channel, and metrics frameworks, separating real defects from plausible-sounding but correct choices.",
      companyId: "wise",
      scenario:
        "Wise Business's marketing lead shares a Q3 ABM program recap ahead of a budget renewal meeting. The recap reads confidently, but the underlying program has several structural problems the lesson's frameworks would catch.",
      brief:
        "Read the recap, flag every real defect with its severity, and separate it from anything that only sounds like a defect.",
      mode: "teardown",
      conceptsCovered: [
        "Diagnosing target account list sizing against the lesson's 50-300 account guidance",
        "Distinguishing pipeline-influenced metrics from vanity metrics",
      ],
      teardownItems: [
        {
          itemId: "wise-abm-q3-recap",
          specimenSource: "synthetic-realistic",
          specimen:
            "WISE BUSINESS ABM PROGRAM, Q3 RECAP\n\nTarget Account List: 5,200 companies matching 'business with international operations,' pulled from a firmographic database export.\nChannels run: LinkedIn Ads (broad awareness campaign, no account-level targeting filters applied), a company blog post shared to the general newsletter list, and a generic outbound email sequence sent to all 5,200 accounts.\nSales involvement: Marketing built the program independently; sales was notified after launch via a company-wide Slack post.\nHeadline metric reported to leadership: 4,800 MQLs generated this quarter, up 30% from Q2.\nTier structure: All 5,200 accounts treated identically, no 1:1, 1:Few, or 1:Many split.\nNote: The program did correctly restrict LinkedIn Ads to a B2B audience filter and used a 90-day attribution window for the MQL count.",
          prompt:
            "Identify every structural defect in this ABM program recap, citing the specific lesson framework each one violates. Then list anything in the recap that sounds like it could be a defect but is actually a legitimate, correct choice.",
          answerKey: [
            {
              defect: "5,200-account 'TAL' is really a demand-gen list with better naming",
              severity: "critical",
              whyItMatters: "Effective ABM runs 50-300 accounts per rep with Tier 1 capped at 20-30. A 5,200-account list can't receive any real account-level personalization, it's demand gen wearing an ABM label.",
              lessonRef: "common-abm-mistakes",
              owner: "you",
            },
            {
              defect: "No tier structure at all, every account treated identically",
              severity: "critical",
              whyItMatters: "ABM is a tiered investment model by definition. Without 1:1/1:Few/1:Many differentiation, there's no way to concentrate effort on the accounts that matter most.",
              lessonRef: "the-three-abm-tiers",
              owner: "you",
            },
            {
              defect: "Headline metric reported is MQLs, not pipeline influenced",
              severity: "critical",
              whyItMatters: "MQLs are the wrong metric for ABM, a lead from an account not on the TAL is noise. Reporting MQL growth to leadership as an ABM win reinforces measuring the wrong thing.",
              lessonRef: "metrics-that-matter-in-abm",
              owner: "you",
            },
            {
              defect: "Sales was only notified after launch, not involved in building the program",
              severity: "critical",
              whyItMatters: "ABM without sales alignment collapses, marketing can't act on engagement signals or account plans sales never bought into.",
              lessonRef: "common-abm-mistakes",
              owner: "either",
            },
            {
              defect: "Generic outbound email sent identically to all 5,200 accounts",
              severity: "moderate",
              whyItMatters: "ABM channels are supposed to be coordinated and personalized per account or cluster. A single generic sequence at that scale is a demand-gen blast, not an ABM email motion.",
              lessonRef: "abm-channels-that-actually-work",
              owner: "you",
            },
          ],
          distractors: [
            "LinkedIn Ads restricted to a B2B audience filter (this is a correct, standard targeting practice, not a defect)",
            "Using a 90-day attribution window for the MQL count (attribution window length isn't the problem here, the metric itself is)",
            "Sharing the blog post to the general newsletter list (fine as a supporting inbound tactic, the defect is treating it as the ABM program's core channel)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the defect-and-severity scorecard while reading the recap",
            why: "Free, sufficient for a row-per-defect scoring sheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect list scored by severity, each mapped to the specific ABM framework it violates, plus a one-paragraph rewrite of the Q4 program plan that fixes the critical defects.",
      sampleOutput:
        "Coinbase Institutional, ABM Teardown Response (excerpt)\n\nCRITICAL: 'Target list' of 3,000 accounts is a demand-gen export, not a TAL. Rewrite: cut to top 150 accounts by trading-volume fit, split into 1:1 (20) and 1:Few (130).\nCRITICAL: Headline metric is MQLs. Rewrite: report % of open pipeline touched by ABM-tagged accounts instead.\nMODERATE: Same outbound sequence sent to every account regardless of tier. Rewrite: bespoke sequence for 1:1, shared-cluster sequence for 1:Few.",
      successCriteria: [
        "All 5 real defects are identified with correct severity and lesson framework citation",
        "None of the 3 distractors are flagged as defects",
        "The Q4 rewrite paragraph addresses the critical-severity defects specifically, not generic advice",
      ],
      portfolioReady: true,
    },
  ],

  "community-led-growth-intro": [
    {
      id: "community-led-growth-intro-champion-program-brief",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Draft a Champion Program Brief for a Connected-Hardware Brand",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given Peloton's broad consumer base and its need to deepen loyalty among its most vocal super-users, pick the right community model from the lesson's three-model framework and write a one-page brief that justifies the choice.",
      companyId: "peloton",
      scenario: "You're a lifecycle marketer at Peloton. Leadership wants a business case for investing in a smaller, more curated group of super-users, not just growing total member count.",
      brief: "Recommend one of the three community models (external customer community, internal champion program, open-source community), justify it against Peloton's audience, and define one success metric that isn't a vanity number.",
      mode: "build",
      conceptsCovered: ["Choosing the right community model for your audience"],
      steps: [
        {
          stepId: "community-led-growth-intro-champion-program-brief-step-1",
          concept: "Choosing the right community model for your audience",
          lessonAnchor: "the-three-community-models",
          theoryRecap: "The lesson splits communities into three shapes: an open external customer community for broad-audience products, a curated internal champion program for products where a small group of power users drives outsized influence, and an open-source community anchored on the codebase itself.",
          question: "Peloton already has millions of members and an open community (Facebook groups, leaderboards). The brief needs to recommend the NEXT layer: which model best deepens loyalty among the small slice of members who already evangelize the brand unpaid?",
          toolName: "Google Docs",
          where: "A new one-page brief document.",
          procedure: [
            "State the business problem in one sentence: broad community exists, but the most engaged 1% aren't formally recognized or leveraged.",
            "Pick a model: internal champion program (invite-only, curated, direct product input).",
            "List 3 selection criteria for who gets invited (e.g. instructor-tagged leaderboard activity, referral count, community moderator history).",
            "List 3 perks that cost Peloton near-zero cash (early class access, direct line to the content team, named recognition on the platform).",
            "Define one non-vanity success metric and its target.",
          ],
          outputSample: "CHAMPION PROGRAM BRIEF\n\nProblem: Peloton's most engaged members get the same treatment as a first-week rider.\n\nModel: Internal champion program (curated, invite-only).\n\nInvite criteria:\n- Top 2% by monthly class count\n- 3+ successful referrals in the last 12 months\n- Active in official Facebook/Discord groups as an unpaid moderator or top contributor\n\nPerks (near-zero cost):\n- Early access to new instructor drops\n- Quarterly call with the content team\n- 'Founding Rider' badge on profile\n\nSuccess metric: NPS delta between champions and the general member base, target +15 points within 2 quarters.",
          healthy: "The brief ties the model choice directly to Peloton's actual audience shape (mass-market product, small highly-engaged tail) rather than picking whichever model sounds trendiest.",
          unhealthy: "Recommending an open-source community for a hardware/subscription product with no codebase, or an external community when one already exists and the real gap is deeper engagement of existing members.",
          interpret: "The right model answers 'what does THIS audience's engagement shape actually need,' not 'what community model do competitors use.'",
          soWhat: [
            { symptom: "Champion program brief lists perks that cost real money per member", action: "Swap for recognition-based perks (badges, early access, direct input) that scale to zero marginal cost", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Draft the one-page brief", why: "Free, shareable, no account friction for a stakeholder-facing document", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A one-page champion program brief: problem statement, chosen model, invite criteria, perks list, and one non-vanity success metric.",
      sampleOutput: "Figma's early champion cohort (invite-only, pre-enterprise era) gave a small group of design leads direct input on the plugin API in exchange for public advocacy. By the time Figma sold enterprise deals, those champions were already trained, unpaid internal salespeople inside their own companies.",
      successCriteria: [
        "Picks one of the three named models and justifies it against the audience, not just preference",
        "Invite criteria are behavior-based (activity, referrals) not just tenure or spend",
        "Success metric is not a vanity count (followers, posts) per the lesson's measurement section",
      ],
      portfolioReady: true,
    },
    {
      id: "community-led-growth-intro-platform-fit-audit",
      tier: "mini",
      archetype: "audit",
      title: "Score the Right Community Platform for an Outdoor Brand",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given YETI's outdoor/adventure audience, who want real-time trip-planning chatter alongside searchable, evergreen gear advice, score the five platforms from the lesson against that audience and pick one.",
      companyId: "yeti",
      scenario: "YETI's community team is choosing a platform for a new owners' community. Leadership is leaning toward Discord because 'it's what the outdoor gear brands use.'",
      brief: "Score Discord, Slack, Circle, Skool, and Reddit against YETI's actual audience needs using a weighted matrix, then recommend one platform with the tradeoff stated explicitly.",
      mode: "diagnostic",
      conceptsCovered: ["Picking the right community platform for your audience"],
      steps: [
        {
          stepId: "community-led-growth-intro-platform-fit-audit-step-1",
          concept: "Picking the right community platform for your audience",
          lessonAnchor: "picking-the-right-platform",
          theoryRecap: "The lesson scores platforms on real-time chat strength, content discovery/organization, gamification, cost, and whether organic demand already exists there (Reddit's case). Picking wrong locks in the wrong culture permanently.",
          question: "YETI owners need both real-time trip planning ('anyone camping at Big Bend this weekend?') and searchable gear advice that ranks and gets found months later. Which platform actually covers both, and what does the brand give up by picking it?",
          toolName: "Google Sheets",
          where: "A new scoring matrix, platforms as rows, weighted criteria as columns.",
          procedure: [
            "List the 5 platforms as rows.",
            "Score each 1-5 on: real-time chat, content discoverability, gamification, cost, existing organic demand.",
            "Weight content discoverability and real-time chat highest (both are named needs), weight gamification lowest (not a stated need).",
            "Sum weighted scores and rank.",
            "Write one sentence naming the tradeoff of the winner.",
          ],
          outputSample: "PLATFORM SCORING (weighted, 1-5 scale)\n\nCircle: chat 3, discoverability 5, gamification 3, cost 2 (~$89/mo), organic demand 2 -> weighted total: highest\nDiscord: chat 5, discoverability 1, gamification 2, cost 5 (free), organic demand 3 -> weighted total: mid\nReddit: chat 2, discoverability 4, gamification 1, cost 5 (free), organic demand 4 (r/YETI exists) -> weighted total: mid-high\nSlack: chat 4, discoverability 1, gamification 1, cost 4, organic demand 1 -> weighted total: low\nSkool: chat 3, discoverability 3, gamification 5, cost 3, organic demand 1 -> weighted total: low-mid\n\nWinner: Circle. Tradeoff: costs ~$89/month and loses Discord's real-time immediacy, but content actually gets found six months later instead of scrolling into the void.",
          healthy: "The matrix weights criteria by what the audience actually stated it needs, not by which platform is trendiest or cheapest.",
          unhealthy: "Picking Discord by default because 'outdoor brands use it,' then discovering six months in that no gear advice is ever findable again once it scrolls past.",
          interpret: "A platform choice is a bet on which failure mode you can live with, chat that vanishes or content that's slower to post.",
          soWhat: [
            { symptom: "Community picked Discord for a mostly evergreen-content use case", action: "Pin and cross-post key threads to a searchable Circle or forum space instead of migrating everything", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Build and weight the scoring matrix", why: "Free, fast to weight and re-sort criteria", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A weighted platform-scoring matrix plus a one-sentence recommendation stating the winner's tradeoff.",
      sampleOutput: "Duolingo's community strategy leans on wherever organic demand already existed (Reddit threads, Discord servers run by fans) rather than forcing every fan onto one owned platform, letting each channel play to its own strength instead of chasing a single 'official' hub.",
      successCriteria: [
        "Weights criteria by the audience's actual stated needs, not platform popularity",
        "Names the winning platform's real tradeoff instead of presenting it as a free win",
      ],
      portfolioReady: true,
    },
  ],
  "demand-gen-vs-lead-gen": [
    {
      id: "demand-gen-vs-lead-gen-campaign-brief-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: A Campaign Brief Stuck in Lead-Gen Theatre",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Read a real-looking campaign brief and flag the specific defects that reveal lead-gen theatre, gating educational content and treating every download like a sales-ready lead, versus the tactics that are actually fine.",
      companyId: "stitch-fix",
      scenario: "A junior marketer at Stitch Fix drafted this Q3 campaign brief for review. It reads confidently, but three choices in it will inflate cost per lead and burn trust with early-stage readers.",
      brief: "Find the defects, explain why each one matters, and don't flag the two tactics in the brief that are actually sound.",
      mode: "teardown",
      conceptsCovered: ["What Lead Gen Actually Captures", "Why This Matters Strategically", "How B2B SaaS Companies Made the Shift"],
      teardownItems: [
        {
          itemId: "demand-gen-vs-lead-gen-campaign-brief-teardown-item-1",
          specimen: "Q3 CAMPAIGN BRIEF — Stitch Fix Style Discovery Guide\n\nGoal: Grow qualified leads.\n\nTactic 1: Publish 'How to Build a Capsule Wardrobe,' a beginner styling guide. Gate it behind a mandatory form (name, email, phone number) before any of the content is visible.\n\nTactic 2: Promote the gated guide via paid social with the CTA 'Book Your Styling Consultation Now.'\n\nTactic 3: Every single form submission is routed straight to a stylist sales call within 24 hours, regardless of how much of the guide the person actually engaged with.\n\nSuccess metric: Total MQLs generated this quarter. Target: 2,000.",
          specimenSource: "synthetic-realistic",
          prompt: "This brief will hit its 2,000-MQL target on paper. Identify what's actually broken about the strategy behind it.",
          answerKey: [
            {
              defect: "A beginner, top-of-funnel educational guide is gated behind a mandatory form",
              severity: "critical",
              whyItMatters: "A reader who's still learning what a capsule wardrobe even is hasn't earned enough trust to hand over a phone number. Gating this content kills organic search reach and search-engine indexing, exactly the top-of-funnel awareness the lesson says demand gen is supposed to build.",
              lessonRef: "What Lead Gen Actually Captures",
              owner: "you",
            },
            {
              defect: "Success metric is raw MQL volume, with no pipeline-influence or category-reach measure anywhere in the brief",
              severity: "moderate",
              whyItMatters: "Optimizing purely for MQL count is the lesson's textbook definition of lead-gen theatre: a metric that's easy to report upward but ignores whether the resulting leads are actually convertible.",
              lessonRef: "Why This Matters Strategically",
              owner: "you",
            },
            {
              defect: "Every download is routed to a stylist sales call within 24 hours regardless of engagement level",
              severity: "critical",
              whyItMatters: "Treating a first-touch, curiosity-stage reader like a ready-to-buy prospect is exactly the mistake B2B SaaS companies moved away from when they ungated content, it burns trust and inflates cost per lead chasing people who aren't ready.",
              lessonRef: "How B2B SaaS Companies Made the Shift",
              owner: "either",
            },
          ],
          distractors: [
            "Promoting the guide via paid social",
            "Publishing a capsule-wardrobe styling guide as the content itself",
            "Following up by phone after someone submits a form on a bottom-of-funnel page",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Write the annotated teardown memo", why: "Free, easy to comment inline next to the brief text", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "An annotated teardown memo: each defect named, its severity, why it matters, and one concrete fix per defect.",
      sampleOutput: "Care.com teardown note (excerpt)\n\nDEFECT: 'Local caregiver checklist' gated behind a mandatory phone number.\nFIX: Ungate the checklist; gate only the caregiver-matching request form further down the funnel, once intent is already proven.\n\nDEFECT: Every download triggers an immediate outbound sales call.\nFIX: Score engagement first (pages read, time on guide); route only high-engagement downloads to a human, route the rest into a nurture sequence.",
      successCriteria: [
        "Correctly identifies the gating defect and explains the search/trust cost",
        "Correctly identifies the MQL-only success metric as the lead-gen-theatre defect",
        "Does not flag either distractor as a real defect",
      ],
      portfolioReady: true,
    },
    {
      id: "demand-gen-vs-lead-gen-budget-split-headtohead",
      tier: "core",
      archetype: "head-to-head",
      title: "Head-to-Head: Diagnosing Lead-Gen Theatre and Picking a Defensible Budget Split",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Diagnose whether a marketing org's dashboard shows lead-gen theatre, then run two budget-split scenarios (30/70 vs 60/40 demand-gen/lead-gen) head-to-head against the company's actual maturity stage and pick a defensible split.",
      companyId: "care-com",
      scenario: "Care.com's marketing dashboard has tracked the same five metrics for two years: MQLs, cost per lead, form conversion rate, SQL conversion rate, and lead-to-customer velocity. Nothing tracks pipeline influence or share of voice.",
      brief: "First diagnose whether this dashboard signals lead-gen theatre. Then run the 30/70 early-stage split against the 60/40 Binet & Field split for a company at Care.com's stage, and recommend one with a stated reason.",
      mode: "diagnostic",
      conceptsCovered: ["Diagnosing whether an org is stuck in lead-gen theatre", "Deciding a defensible demand-gen/lead-gen budget split"],
      steps: [
        {
          stepId: "demand-gen-vs-lead-gen-budget-split-headtohead-step-1",
          concept: "Diagnosing whether an org is stuck in lead-gen theatre",
          lessonAnchor: "signs-your-org-is-stuck-in-lead-gen-theatre",
          theoryRecap: "The lesson's warning signs: obsession with MQL volume, sales rejecting leads as unqualified, chasing CPL down while CAC climbs, and measuring success entirely in short-cycle metrics with nothing tracking pipeline influence or category reach.",
          question: "Care.com's dashboard tracks only MQLs, CPL, form conversion, SQL conversion, and velocity, five short-cycle metrics, zero long-cycle ones. Does this pattern match the lesson's lead-gen-theatre warning signs, and what's missing?",
          toolName: "Google Sheets",
          where: "The dashboard export, alongside a blank column for 'metric type.'",
          procedure: [
            "List all 5 tracked metrics in one column.",
            "Tag each as short-cycle (lead gen) or long-cycle (demand gen) in a second column.",
            "Count: 5 short-cycle, 0 long-cycle.",
            "Compare against the lesson's warning-sign list and state a verdict.",
          ],
          outputSample: "METRIC AUDIT\n\nMQLs generated -> short-cycle\nCost per lead -> short-cycle\nForm conversion rate -> short-cycle\nSQL conversion rate -> short-cycle\nLead-to-customer velocity -> short-cycle\n\nLong-cycle metrics tracked: 0 (no pipeline-influence, share-of-voice, or branded-search tracking anywhere)\n\nVerdict: Yes, this matches lead-gen theatre, the dashboard measures exactly what's easy to report upward and nothing about whether demand is actually being built upstream.",
          healthy: "Recognizing that 5/5 short-cycle metrics with zero long-cycle tracking is itself the diagnostic signal, not a coincidence of what's easy to measure.",
          unhealthy: "Assuming the dashboard is fine because every individual metric looks reasonable in isolation.",
          interpret: "A dashboard with only lead-gen metrics can't tell the difference between a healthy funnel and a funnel starving its own top for the sake of a clean report.",
          soWhat: [
            { symptom: "Zero long-cycle metrics on the dashboard", action: "Add pipeline-influenced revenue and branded search volume as tracked lines before the next planning cycle", effort: "half day" },
          ],
          owner: "you",
        },
        {
          stepId: "demand-gen-vs-lead-gen-budget-split-headtohead-step-2",
          concept: "Deciding a defensible demand-gen/lead-gen budget split",
          lessonAnchor: "why-this-matters-strategically",
          theoryRecap: "Early-stage companies often start 30/70 (demand/lead) because they need immediate pipeline. LinkedIn's 2024 B2B Marketing Benchmark Report backs Binet & Field's 60/40 split favoring demand gen for established, competitive markets.",
          question: "Care.com is an established marketplace, not an early-stage startup, competing in a crowded caregiving category. Run 30/70 head-to-head against 60/40 for this specific stage and pick one.",
          toolName: "HubSpot Marketing Hub",
          where: "A campaign-attribution comparison view, one saved view per budget scenario.",
          procedure: [
            "Build scenario A: 30% demand gen / 70% lead gen, model expected pipeline-influenced reach vs. direct MQL volume.",
            "Build scenario B: 60% demand gen / 40% lead gen, model the same two outputs.",
            "Compare against Care.com's actual stage: established, competitive, not needing emergency pipeline.",
            "Pick the scenario that matches stage, not the one with the bigger near-term MQL number.",
          ],
          outputSample: "SCENARIO COMPARISON\n\nA) 30/70: Higher near-term MQL volume, but zero investment in category share-of-voice against competing caregiver marketplaces.\nB) 60/40: Lower near-term MQL count, but builds branded search and category authority in a market Care.com already competes hard in.\n\nDecision: B (60/40). Care.com isn't chasing first pipeline like an early-stage startup, it's defending and growing share in a crowded category, which is exactly the Binet & Field 60/40 use case.",
          healthy: "The split decision is anchored to the company's actual maturity stage, not copied from whichever ratio sounds more 'balanced.'",
          unhealthy: "Defaulting to 30/70 forever because it produces a bigger MQL number this quarter, even after the company has outgrown the early-stage pipeline emergency that justified it.",
          interpret: "The right split is a function of stage and competitive pressure, not a fixed rule applied the same way at every company size.",
          soWhat: [
            { symptom: "Budget still 30/70 years after the company stopped being early-stage", action: "Re-run this head-to-head comparison at the next annual planning cycle", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Tag and count dashboard metrics by cycle type", why: "Free, fast for the metric-audit step", required: true, lastVerified: "2026-08" }],
        paid: [{ toolName: "HubSpot Marketing Hub", role: "Model pipeline-influenced attribution per budget scenario", why: "Native campaign attribution across long-cycle and short-cycle metrics in one view", required: false, lastVerified: "2026-08" }],
        paidUpgradeNote: "The free tier's basic forms and email tracking are enough to tag metrics by cycle type; comparing pipeline-influenced attribution across two full budget scenarios is materially easier with a paid Marketing Hub tier.",
      },
      deliverable: "A metric-type audit table plus a one-paragraph budget-split recommendation naming the chosen ratio and the stage-based reason for it.",
      sampleOutput: "Cognism's invite-only dinner with LeanData paired a demand-gen move (an exclusive event experience, no form anywhere) with a lead-gen follow-up (personalized outreach to attendees afterward), and that single sequence generated a $75,000 sales opportunity, proof the two motions work best chained, not chosen between.",
      successCriteria: [
        "Correctly diagnoses the all-short-cycle dashboard as a lead-gen-theatre signal",
        "Recommends a budget split with a reason tied to Care.com's actual maturity stage, not a default preference",
      ],
      portfolioReady: true,
    },
  ],

  // -------------------------------------------------------------------
  // revops-for-marketers
  // -------------------------------------------------------------------
  "revops-for-marketers": [
    {
      id: "revops-for-marketers-waterfall-conversion-audit",
      tier: "mini",
      archetype: "audit",
      title: "Where the Handoff Breaks: Auditing a Lead-to-Revenue Waterfall",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given stage-by-stage counts from a real lead-to-revenue waterfall, calculate the conversion rate between every stage and use the lesson's own diagnostic logic to decide whether the break is an MQL-definition problem or a sales follow-up problem.",
      companyId: "klaviyo",
      scenario:
        "You're the marketing analyst at Klaviyo, the Boston-founded email and SMS marketing automation SaaS company (130,000+ customers at IPO). Sales keeps saying marketing's leads are weak. Marketing keeps saying sales isn't following up. RevOps has asked you to pull the actual waterfall numbers before the next QBR (quarterly business review) so the argument has data instead of opinions.",
      brief:
        "Build the stage-to-stage conversion table first, do not jump to a conclusion before the numbers are in front of you. Then apply the lesson's own example logic (a low MQL-to-SQL rate next to a healthy SQL-to-opportunity rate points at MQL definition, not sales effort) to name the actual broken stage.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reading a lead-to-revenue waterfall to locate the broken stage",
      ],
      steps: [
        {
          stepId: "revops-for-marketers-waterfall-conversion-audit-step-1",
          concept: "Reading a lead-to-revenue waterfall to locate the broken stage",
          lessonAnchor: "lead-to-revenue-waterfall-ownership-and-handoff",
          theoryRecap:
            "The lesson's waterfall runs reach to awareness to engaged to MQL to SQL to opportunity to negotiation to closed won to customer to renewal, and the conversion rate between each pair of stages, not the raw counts, is what reveals where the system is actually breaking.",
          question:
            "Given last quarter's stage counts below, which single stage-to-stage transition is the real problem, and is it an MQL-definition issue or a sales follow-up issue?",
          toolName: "Google Sheets",
          where:
            "Paste the raw stage counts into a sheet, add a column that divides each stage by the one before it to get the stage-to-stage conversion percentage.",
          procedure: [
            "List every waterfall stage in order down one column with its raw count",
            "Add a second column computing (this stage / previous stage) as a percentage",
            "Flag any transition below half the average of the other transitions",
            "Compare the flagged transition's neighbors: is the stage right before it (definition) or right after it (follow-up) more likely at fault",
            "Write one sentence naming the broken stage and the fix owner",
          ],
          outputSample:
            "Klaviyo, Q2 waterfall (excerpt)\n\nReach          48,000\nAwareness      19,200   (40%)\nEngaged         6,720   (35%)\nMQL             2,150   (32%)\nSQL               108   (5%)   <-- flagged\nOpportunity        32   (30%)\nNegotiation         9   (28%)\nClosed Won          4   (44%)",
          healthy:
            "MQL-to-SQL and SQL-to-opportunity both sit within a normal range of each other (roughly 25-35%), so the break, if any, is isolated to one clear transition.",
          unhealthy:
            "MQL-to-SQL sits at 5% while SQL-to-opportunity sits at 30%, a healthy rate right after it, meaning the leads that do get accepted convert fine, the problem is what counts as an MQL in the first place, not sales effort.",
          interpret:
            "A stage with a low conversion rate feeding into a stage with a normal conversion rate points backward, at the definition or hand-off gate, not forward at the team receiving it.",
          soWhat: [
            {
              symptom: "MQL-to-SQL conversion is far below every other transition in the waterfall",
              action: "Bring the MQL definition back to RevOps for a joint marketing-sales review before blaming either team's execution",
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
            role: "Build the stage-to-stage conversion table",
            why: "No account friction, and a simple divide-and-flag calculation doesn't need anything heavier.",
            required: true,
            lastVerified: "2026-08-19",
          },
        ],
        paid: [],
      },
      deliverable:
        "A stage-to-stage waterfall conversion table with the broken transition flagged and one sentence naming whether it's a definition problem or a follow-up problem.",
      sampleOutput:
        "Adyen, Q2 waterfall diagnosis (excerpt)\n\nFlagged transition: SQL to Opportunity (9%), well below the 30%+ seen at every other stage.\n\nDiagnosis: MQL-to-SQL conversion (33%) and Opportunity-to-Negotiation (31%) both look healthy, so the break sits specifically at SQL to Opportunity, this is a sales qualification or follow-up issue, not an MQL-definition issue, since the stage right before it is converting normally.",
      successCriteria: [
        "Computes a stage-to-stage percentage for every transition in the waterfall, not just the overall funnel conversion",
        "Correctly identifies the single most-flagged transition rather than several",
        "States whether the cause is a definition problem or a follow-up problem, and justifies it using the neighboring stage's conversion rate",
      ],
      portfolioReady: true,
    },
    {
      id: "revops-for-marketers-sla-doc-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The SLA That Isn't: Teardown of a Marketing-Sales Agreement",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Review a draft marketing-sales SLA (service level agreement) against the lesson's three pillars of RevOps, and correctly separate the clauses that are genuine governance defects from the clauses that only sound weak but are actually fine.",
      companyId: "snowflake",
      scenario:
        "You're the incoming RevOps lead at Snowflake, the cloud data warehousing company (customers including Capital One, Sony, and Adobe). Someone drafted a marketing-sales SLA eighteen months ago and nobody has touched it since. Leadership wants it signed off at the next ELT (executive leadership team) meeting, and you've been asked to red-team it first.",
      brief:
        "Read the specimen SLA clause by clause against the lesson's people alignment, process standardization, and technology integration pillars. Not every awkward-sounding clause is actually broken, some are deliberately vague on purpose and that's fine, so back every defect you flag with the specific pillar it violates.",
      mode: "teardown",
      conceptsCovered: [
        "The Three Pillars of RevOps",
        "The RevOps Tech Stack",
      ],
      teardownItems: [
        {
          itemId: "revops-for-marketers-sla-doc-teardown-item-1",
          specimen:
            "SNOWFLAKE MARKETING-SALES SERVICE LEVEL AGREEMENT (Draft v3, unchanged since last review)\n\n1. Marketing will deliver a strong volume of high-quality leads each month.\n2. Sales will make a reasonable effort to follow up on leads in a timely manner.\n3. An MQL (marketing qualified lead) is any contact who fills out a form on the website.\n4. Success is measured by total MQLs delivered per quarter.\n5. If sales disputes a lead's quality, the deal is removed from the count with no further review.\n6. CRM fields for lead source and campaign are optional at the rep's discretion.\n7. When an SLA target is missed two quarters running, marketing and sales leadership hold a joint review to adjust the definition or process.\n8. Renewal and expansion data from customer success is not currently connected to this SLA.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Which of these 8 clauses are real RevOps governance defects, which pillar (people, process, or technology) does each violate, and which clauses are actually fine even though they read as informal?",
          answerKey: [
            {
              defect: "Clause 1 and 2 use no measurable numbers ('strong volume,' 'reasonable effort,' 'timely manner')",
              severity: "critical",
              whyItMatters: "The lesson's people-alignment pillar requires shared SLAs with concrete commitments (e.g. 24-hour response time), a vague SLA cannot be missed, which means it can never trigger the blameless post-mortem that actually fixes anything.",
              lessonRef: "the-three-pillars-of-revops",
              owner: "either",
            },
            {
              defect: "Clause 3 defines MQL as any form fill, with no qualification criteria",
              severity: "critical",
              whyItMatters: "Process standardization requires a real MQL definition with gates for progression, a form fill alone is exactly the kind of unqualified lead that causes sales to distrust marketing's numbers.",
              lessonRef: "the-three-pillars-of-revops",
              owner: "either",
            },
            {
              defect: "Clause 4 measures success by MQL volume alone, with no pipeline or revenue tie-back",
              severity: "moderate",
              whyItMatters: "The lesson is explicit that pipeline influenced, not lead volume, is what's hard to game, an MQL-only metric can be inflated without moving revenue at all.",
              lessonRef: "how-revops-changes-the-marketers-job",
              owner: "either",
            },
            {
              defect: "Clause 5 lets sales remove a disputed lead from the count with no review process",
              severity: "critical",
              whyItMatters: "This gives one side unilateral authority to erase the data that would otherwise reveal a broken stage in the waterfall, defeating the entire point of shared accountability.",
              lessonRef: "the-three-pillars-of-revops",
              owner: "developer",
            },
            {
              defect: "Clause 6 makes lead source and campaign fields optional in the CRM",
              severity: "critical",
              whyItMatters: "The tech stack pillar depends on data governance, agreed-upon required fields, optional attribution fields guarantee the closed-loop reporting the lesson describes simply can't be built.",
              lessonRef: "the-revops-tech-stack",
              owner: "developer",
            },
            {
              defect: "Clause 8 leaves customer success renewal and expansion data disconnected from the SLA entirely",
              severity: "moderate",
              whyItMatters: "RevOps unifies marketing, sales, AND customer success, an SLA that only covers the marketing-sales handoff is missing a third of the operating model the lesson defines.",
              lessonRef: "what-revops-actually-is",
              owner: "developer",
            },
          ],
          distractors: [
            "Clause 7's joint review is only triggered after two consecutive missed quarters, not every single miss",
            "The document is called a draft and hasn't been reviewed in eighteen months",
            "The SLA doesn't specify which tool hosts the CRM",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track each clause against a pillar (people, process, technology) and a verdict (defect or fine)",
            why: "A simple two-column tracker is enough to force a verdict on every clause instead of skimming past the vague ones.",
            required: true,
            lastVerified: "2026-08-19",
          },
        ],
        paid: [],
      },
      deliverable:
        "A clause-by-clause verdict table naming each real defect, the RevOps pillar it violates, and a one-line fix, plus a short note on which clauses were correctly left alone.",
      sampleOutput:
        "MapmyIndia, SLA teardown verdict table (excerpt)\n\nClause 3 (MQL = any form fill): DEFECT, process pillar. Fix: define MQL with a minimum qualification (job title, company size, or intent signal), not form completion alone.\n\nClause 7 (two-quarter joint review trigger): NOT A DEFECT. A two-miss threshold before triggering review is a reasonable damping mechanism, not a governance gap, flagging it would be over-correcting.",
      successCriteria: [
        "Correctly flags all 6 real defects from the 8-clause specimen",
        "Names the specific RevOps pillar (people, process, or technology) each defect violates, not just 'this is bad'",
        "Does not flag any of the 3 distractors as defects",
      ],
      portfolioReady: true,
    },
  ],

  // -------------------------------------------------------------------
  // marketing-budgeting-101
  // -------------------------------------------------------------------
  "marketing-budgeting-101": [
    {
      id: "marketing-budgeting-101-tier-budget-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Three-Tier Channel Budget from a Blank Slate",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a revenue figure and company stage, calculate a defensible total marketing budget using the lesson's benchmark ranges, then split it into the 60/40 brand-performance rule and the three-tier foundation/growth/experiments framework.",
      companyId: "mapmyindia",
      scenario:
        "You're the first dedicated marketing hire for a new consumer navigation app division at MapmyIndia (CE Info Systems), the Delhi-founded digital mapping and geospatial technology company (roughly ₹7,420 Cr market cap at listing). The division is projected to do ₹40 crore in revenue this year and has never had a formal marketing budget, spend has been ad hoc, campaign by campaign.",
      brief:
        "Work top-down: pick the right percent-of-revenue range for a growth-stage division first, then split that total using the 60/40 rule, then split again into the three tiers. Skipping straight to naming channels before the top-line number is set is the single most common mistake in this exercise.",
      mode: "build",
      conceptsCovered: [
        "Setting total marketing spend as a percent of revenue by company stage",
        "Splitting the total using the 60/40 brand-performance rule and the three-tier framework",
      ],
      steps: [
        {
          stepId: "marketing-budgeting-101-tier-budget-build-step-1",
          concept: "Setting total marketing spend as a percent of revenue by company stage",
          lessonAnchor: "how-much-should-you-spend-real-benchmarks",
          theoryRecap:
            "The lesson's 2026 benchmarks put growth-stage companies at 10-15% of revenue, versus 15-20% for pre-product-market-fit startups and 5-10% for mature enterprises, the less proven the channels, the higher the justified spend.",
          question:
            "This division is growth-stage (proven channels exist, now scaling) on ₹40 crore in projected revenue. What total budget range is defensible, and where in that range should a still-young division sit?",
          toolName: "Google Sheets",
          where:
            "A single sheet with revenue, the chosen percentage, and the resulting total budget as three linked cells.",
          procedure: [
            "Classify the division's stage (growth-stage, not pre-PMF or mature) using the lesson's own criteria",
            "Select the matching range (10-15% of revenue)",
            "Lean toward the higher end of the range since the division itself, unlike the parent company, is still young",
            "Calculate the resulting rupee total and hold it as the top-line number for the rest of the exercise",
          ],
          outputSample:
            "Division stage: Growth-stage (proven channels, division is new)\nRevenue: ₹40,00,00,000\nRange selected: 13% (upper-middle of 10-15%, division still young)\nTotal marketing budget: ₹5,20,00,000",
          healthy:
            "The chosen percentage sits inside the stage-matched range and the reasoning names a specific factor (division age within a mature parent company) for where in the range it lands.",
          unhealthy:
            "Picking a round number like 10% because it 'sounds standard' without connecting it to the division's actual stage, or copying the parent company's overall percentage instead of the division's own.",
          interpret:
            "The percent-of-revenue range is a stage-matched starting point, not a lookup table, the specific number within the range should reflect how proven this specific budget-holder's channels actually are.",
          soWhat: [
            {
              symptom: "No clear rationale for where in the 10-15% range the number landed",
              action: "Name one concrete factor (division age, channel maturity, competitive pressure) that justifies the specific percentage chosen",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "marketing-budgeting-101-tier-budget-build-step-2",
          concept: "Splitting the total using the 60/40 brand-performance rule and the three-tier framework",
          lessonAnchor: "a-simple-budget-building-framework",
          theoryRecap:
            "Binet and Field's 996-case-study analysis supports a roughly 60% brand, 40% performance split as a durable default, and within that, the lesson's three tiers (foundation 50-60%, growth 25-35%, experiments 10-15%) turn the single total into a reviewable, channel-level plan.",
          question:
            "Starting from the ₹5.2 crore total, what does the brand/performance split look like in rupees, and how does the three-tier framework further divide it into a channel-level plan?",
          toolName: "Google Sheets",
          where:
            "Extend the same sheet with a brand/performance split, then a three-tier breakdown, both computed from the single total budget cell.",
          procedure: [
            "Apply 60/40 to the total: brand building vs. demand generation and nurturing combined",
            "Apply the three tiers to the full total: Foundation 55%, Growth 30%, Experiments 15%",
            "Name at least one real channel per tier (e.g. Foundation: proven paid search; Experiments: an untested short-form video format)",
            "Note that early-stage divisions like this one skew further toward demand generation within the brand/performance split, since there's no brand equity to protect yet",
          ],
          outputSample:
            "Brand/performance split: ₹2,08,00,000 brand (40%, below the 60% default given the division's early stage) / ₹3,12,00,000 performance (60%)\n\nTier 1 Foundation (55%): ₹2,86,00,000, proven paid search + core SEO content\nTier 2 Growth (30%): ₹1,56,00,000, a newer short-video ad platform showing early promise\nTier 3 Experiments (15%): ₹78,00,000, one untested influencer partnership, capped downside",
          healthy:
            "Every rupee in the tier breakdown traces back to the single total budget cell, and the brand/performance split has an explicit, stated reason for deviating from the 60/40 default (or a reason for following it).",
          unhealthy:
            "Naming channels for each tier without the numbers actually summing back to the total, or applying the 60/40 rule blindly to an early-stage division with no brand equity yet to protect.",
          interpret:
            "A three-tier breakdown is only defensible if it's traceable, every tier's rupee figure and named channel should reconcile back to the single top-line number from step 1.",
          soWhat: [
            {
              symptom: "Tier totals don't sum back to the top-line budget",
              action: "Rebuild the tier percentages from the single total cell instead of estimating each tier's rupee amount separately",
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
            role: "Build the linked total-budget, split, and tier calculations",
            why: "Linked cells make the whole build traceable back to one top-line number, which is the actual point of the exercise.",
            required: true,
            lastVerified: "2026-08-19",
          },
        ],
        paid: [
          {
            toolName: "Looker Studio",
            role: "Turn the finished tier breakdown into a shareable one-page dashboard for a budget review meeting",
            why: "Not required to build the numbers, but useful once the plan needs to be presented to leadership on a recurring quarterly cadence.",
            required: false,
            lastVerified: "2026-08-19",
          },
        ],
        paidUpgradeNote: "Looker Studio is actually free, listed here only as an optional presentation upgrade over a static spreadsheet, not a paid necessity.",
      },
      deliverable:
        "A linked budget sheet showing the total marketing budget, the brand/performance split with a stated reason, and a three-tier channel breakdown that sums back to the total.",
      sampleOutput:
        "Snowflake, division budget build (excerpt)\n\nTotal: $8.4M (12% of $70M divisional revenue, growth-stage)\nSplit: $3.36M brand (40%) / $5.04M performance (60%), skewed to performance given limited brand equity for this specific product line\nTier 1 Foundation (58%): $4.87M\nTier 2 Growth (28%): $2.35M\nTier 3 Experiments (14%): $1.18M",
      successCriteria: [
        "Selects a percent-of-revenue range that matches the stated company/division stage, not an arbitrary number",
        "Every tier's rupee amount reconciles back to the single total budget figure",
        "States an explicit reason for the brand/performance split chosen, whether it follows or deviates from 60/40",
      ],
      portfolioReady: true,
    },
    {
      id: "marketing-budgeting-101-benchmark-diagnostic",
      tier: "core",
      archetype: "forecast",
      title: "Is This Spend Defensible? A Benchmark Diagnostic",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a company's actual percent-of-revenue spend and brand/performance split, diagnose whether the current allocation is defensible against the lesson's 2026 benchmarks, or whether it signals a specific, nameable mistake.",
      companyId: "adyen",
      scenario:
        "You're a marketing finance partner reviewing last year's actuals for Adyen, the Amsterdam-founded global payments platform for enterprise merchants (over €159B in cumulative processed volume). The CFO wants a one-page verdict before next year's planning cycle starts: is current spend in line with what a company like this should be doing, or not?",
      brief:
        "Compare the actual numbers against both benchmarks in the lesson, the stage/industry percent-of-revenue range and the 60/40 brand/performance default, separately. A company can be right on one axis and wrong on the other.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing actual spend against percent-of-revenue and brand-performance benchmarks",
      ],
      steps: [
        {
          stepId: "marketing-budgeting-101-benchmark-diagnostic-step-1",
          concept: "Diagnosing actual spend against percent-of-revenue and brand-performance benchmarks",
          lessonAnchor: "splitting-the-budget-brand-vs-performance-and-across-channels",
          theoryRecap:
            "The lesson's most common budgeting mistake is funding performance marketing almost entirely because it has a trackable ROAS while brand doesn't show up for months, a pattern that eventually runs the company out of new demand to capture.",
          question:
            "Adyen-scale fintech, mature enterprise stage, spent 6% of revenue on marketing last year (91% performance, 9% brand). Is the total spend defensible? Is the split defensible? Name the specific mistake, if any.",
          toolName: "Google Sheets",
          where:
            "Two rows: actual vs. benchmark, one for percent-of-revenue, one for brand/performance split, with a verdict column for each.",
          procedure: [
            "Check the percent-of-revenue figure against the mature-enterprise range (5-10%)",
            "Check the brand/performance split against the 60/40 default",
            "Score each axis independently as defensible or not, with a one-line reason",
            "If the split fails, name the lesson's specific 'most common mistake' pattern by name rather than a generic critique",
          ],
          outputSample:
            "Percent-of-revenue: 6% -- DEFENSIBLE, sits inside the 5-10% mature-enterprise range.\nBrand/performance split: 91/9 -- NOT DEFENSIBLE, far below the 60/40 default and matches the lesson's named 'funding performance entirely because it's trackable' mistake pattern.",
          healthy:
            "Both axes are scored independently, with the reasoning for each grounded in a specific number from the lesson, not a vague 'seems low' judgment.",
          unhealthy:
            "Treating a defensible total spend percentage as proof the whole budget is healthy, when the brand/performance split inside that total can still be badly wrong.",
          interpret:
            "Total spend and channel split are two separate diagnostic checks, a company can pass one and fail the other, and only checking the easier-to-see total misses the split problem entirely.",
          soWhat: [
            {
              symptom: "Brand spend is far below the 60/40 default even though total spend looks reasonable",
              action: "Flag the specific under-investment-in-brand pattern by name in the one-page verdict, not just 'spend seems low in one area'",
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
            role: "Build the two-axis actual-vs-benchmark comparison with a verdict column",
            why: "A simple side-by-side table is enough to separate the two benchmark checks cleanly.",
            required: true,
            lastVerified: "2026-08-19",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page verdict comparing actual spend to both benchmarks (percent-of-revenue and brand/performance split) with an independent pass/fail and reason for each axis.",
      sampleOutput:
        "Klaviyo, benchmark diagnostic verdict (excerpt)\n\nPercent-of-revenue: 14% -- DEFENSIBLE, matches the growth-stage 10-15% range for a company still scaling proven channels.\nBrand/performance split: 55/45 -- DEFENSIBLE, close enough to 60/40 to reflect a reasonable house view rather than a red flag.\nOverall verdict: No corrective action needed this cycle, revisit next quarter per the lesson's quarterly-review rule.",
      successCriteria: [
        "Scores percent-of-revenue and brand/performance split as two separate, independent checks",
        "Cites the specific benchmark range or ratio from the lesson for each check, not a rounded approximation",
        "When the split fails, names the lesson's specific named mistake pattern rather than a generic critique",
      ],
      portfolioReady: true,
    },
  ],

  "marketing-org-chart": [
    {
      id: "marketing-org-chart-span-of-control-audit",
      tier: "mini",
      archetype: "audit",
      title: "Span-of-Control Audit: Stress-Testing a Growing Team's Reporting Lines",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 34-person marketing org chart for TBO Tek, apply the lesson's span-of-control and structure-by-headcount rules to flag exactly which reporting lines are broken and rank the fixes.",
      companyId: "tbo-tek",
      scenario:
        "You're a marketing operations analyst at TBO Tek, the Gurugram-based B2B travel distribution platform that listed on the NSE/BSE in May 2024. Headcount has tripled in 18 months and nobody has touched the org chart since the team was five people.",
      brief:
        "Read the current org chart, apply the lesson's 5-8 direct-report rule and its centralized/functional/pod-model guidance, flag every violation, and rank the fixes by urgency.",
      mode: "diagnostic",
      conceptsCovered: [
        "Healthy span of control is five to eight direct reports per manager",
        "Structure should match headcount, not the org chart of an admired company",
      ],
      steps: [
        {
          stepId: "step-1-span-of-control-check",
          concept: "Healthy span of control is five to eight direct reports per manager",
          lessonAnchor: "how-the-structure-changes-with-company-size",
          theoryRecap:
            "The lesson's 10-50 person stage says functional directors should emerge for demand gen, content, ops, and product marketing, each managing a small team, with 4-5 directors reporting to the CMO. Span of control outside five to eight direct reports signals a missing layer or a bottleneck.",
          question:
            "TBO Tek's chart: CMO has 5 direct reports (4 directors + 1 unassigned Marketing Ops Analyst). Director of Demand Gen has 11 direct reports (paid, SEO, email, webinars, 2 regional leads, 5 specialists). There is no Marketing Ops director; 4 ops staff report straight to the CMO. The Product Marketing Manager reports to the Head of Product, not to any marketing director. Which single fix is most urgent?",
          toolName: "Miro",
          where: "The shared org-chart board in Miro",
          procedure: [
            "Recreate the chart as boxes and arrows, one box per role",
            "Count direct reports under every manager and circle any count outside 5-8",
            "Check whether each of the five core functions (brand, demand gen, content, product marketing, ops) has a named owner",
            "Flag any role reporting outside the marketing org entirely",
            "Rank the flagged issues by how many people or how much budget each one touches",
          ],
          outputSample:
            "FINDINGS (ranked by urgency)\n1. Director, Demand Gen: 11 direct reports (healthy range 5-8) — bottleneck risk, this director is the single busiest node on the chart\n2. Marketing Ops: no director, 4 analysts report straight to CMO — function has no dedicated owner despite CMO span already at 5\n3. Product Marketing Manager reports to Head of Product, not marketing — the bridge role has drifted fully into one department\n\nNOT FLAGGED (healthy)\n- Director, Content: 6 direct reports\n- Director, Brand: 4 direct reports (slightly under range, acceptable at this headcount)",
          healthy: "Every manager has 5-8 direct reports and all five core functions have a named owner inside marketing.",
          unhealthy:
            "A director with 11 direct reports while a whole function (ops) has zero dedicated leadership and reports piecemeal to the CMO.",
          interpret:
            "The demand-gen overload and the missing ops director are the same root cause: headcount grew but the layer of leadership underneath the CMO didn't. Fix the missing layer first; it relieves both problems at once.",
          soWhat: [
            {
              symptom: "One director has 11 direct reports and misses 1:1s",
              action: "Split the demand-gen team into two sub-teams (paid+SEO, email+webinars) under a new manager layer",
              effort: "dev ticket",
            },
            {
              symptom: "Ops analysts report straight to the CMO with no dedicated advocate",
              action: "Promote the senior ops analyst to Director, Marketing Ops and move the other 3 under them",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Miro",
            role: "Rebuild and annotate the org chart to count spans and spot missing functions",
            why: "Free tier boards handle a 34-box chart with no paywall",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked list of every span-of-control and missing-function violation on TBO Tek's org chart, with the single highest-priority fix flagged first and a one-line reason for the ranking.",
      sampleOutput:
        "Awfis Space Solutions, Marketing Org Audit (excerpt)\n\nURGENT\n1. Director, Enterprise Demand Gen: 9 direct reports across 6 cities — split by region before Q3 hiring adds 3 more\n\nWATCH\n2. Brand and Content share one director: fine at current headcount, revisit above 40 marketers\n\nHEALTHY\n- Marketing Ops: 5 direct reports to a dedicated director, added last quarter\n- Product Marketing: reports to VP Marketing, not Product — bridge role intact",
      successCriteria: [
        "Flags all three real violations (demand-gen overload, missing ops director, misplaced product marketing) against the lesson's rules",
        "Does not flag the Brand director's 4 direct reports as broken — under-range at this headcount is acceptable, not a violation",
        "Ranks the fixes by people/budget impact, not by which one appears first on the chart",
      ],
      portfolioReady: true,
    },
    {
      id: "marketing-org-chart-reorg-plan-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Reorg Plan: Structuring Go Digit's Marketing Team Past 10 People",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given Go Digit General Insurance's current 8-person generalist marketing team and approval to hire 6 more people this year, build a reorg plan that assigns each of the lesson's five core functions a clear owner while keeping every manager inside the healthy span-of-control range.",
      companyId: "go-digit-insurance",
      scenario:
        "You're the newly hired Head of Marketing Operations at Go Digit General Insurance, the Bengaluru-based insurer that listed on the NSE/BSE in May 2024. The 8-person team reports straight to the CMO with no directors, and budget just cleared for 6 more hires this year.",
      brief:
        "Use the lesson's functional-model guidance to decide which of the five core functions get a dedicated director now, draft the resulting reporting lines for 14 people, and confirm no manager ends up outside the 5-8 direct-report range.",
      mode: "build",
      conceptsCovered: [
        "Assigning a clear owner to each of marketing's five core functions",
        "Structuring reporting lines by function and headcount, not aspiration",
      ],
      steps: [
        {
          stepId: "step-1-functional-reorg-plan",
          concept: "Assigning a clear owner to each of marketing's five core functions",
          lessonAnchor: "the-core-roles-and-what-each-one-owns",
          theoryRecap:
            "The lesson names five core functions (brand, demand gen, content, product marketing, ops) and says the 10-50 person stage is where director-level owners emerge for each, reporting to the CMO or VP.",
          question:
            "Go Digit's 8 current marketers already lean into demand gen (5 people, unofficially) and content (2 people); 1 person handles everything else including brand, product marketing, and ops part-time. Budget covers at most 3 new director-level hires this year, not 5. Which functions get a dedicated director now, and which one stays folded under an existing role for another year?",
          toolName: "Google Sheets",
          where: "A blank headcount-planning sheet",
          procedure: [
            "List all five functions in rows, current headcount and current owner in the next two columns",
            "Mark which functions already have de facto ownership (demand gen, content) versus none (brand, product marketing, ops)",
            "Assign the 3 new director hires to the functions with the least existing coverage and the highest business risk if left unowned",
            "Draft the new reporting lines: 3-4 directors reporting to the CMO, 5-8 people under each director",
            "Note which one function stays generalist-owned for another year and why that's an acceptable tradeoff at this size",
          ],
          outputSample:
            "GO DIGIT REORG PLAN (14 people, 3 new director hires)\n\nDirector, Demand Gen — 6 reports (existing 5 + 1 new)\nDirector, Marketing Ops — 3 reports (new hire, absorbs CRM/attribution from the generalist)\nDirector, Product Marketing — 2 reports (new hire, was previously unowned)\nContent Lead (not yet director-level) — 2 reports, stays under CMO for now\nBrand — folded into CMO's own remit for another year; revisit above 20 marketers",
          healthy: "Every function with real business risk (ops data hygiene, product marketing launches) gets a named owner before headcount doubles again.",
          unhealthy: "Hiring a Director of Brand first because it sounds senior, while marketing ops keeps running on tribal knowledge in one person's head.",
          interpret:
            "At 14 people, not every function can have a director; the plan should protect the functions where the absence of ownership causes the most damage first, not the ones that are easiest to hire for.",
          soWhat: [
            {
              symptom: "One generalist is quietly doing ops, brand, and product marketing part-time",
              action: "Hire a dedicated Marketing Ops director first; it's the function silently blocking every other team's reporting",
              effort: "dev ticket",
            },
            {
              symptom: "Budget only covers 3 directors but 3 functions are unowned",
              action: "Leave Brand under the CMO for one more year rather than under-hiring for Ops or Product Marketing",
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
            role: "Draft the headcount table and reporting-line plan",
            why: "Free, no account friction, easy to share with the CMO for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 14-person reorg plan naming a director for each prioritized function, draft reporting lines under the CMO, and a note on which function stays generalist-owned for another year.",
      sampleOutput:
        "TBO Tek, Marketing Reorg Plan (excerpt)\n\nDirector, Content — 7 reports (blog, case studies, TBO Academy enablement content)\nDirector, Product Marketing — 4 reports (new hire, was reporting into Product before this plan)\nBrand — stays under the VP Marketing directly; team is 3 people, too small for its own director yet",
      successCriteria: [
        "Assigns all 3 new director hires to functions with real unowned business risk, not to the most visible function",
        "Every proposed manager, existing or new, ends up with 5-8 direct reports or has a stated reason for being temporarily under range",
        "Explicitly names which function stays generalist-owned and why that's acceptable at 14 people",
      ],
      portfolioReady: true,
    },
  ],
};
