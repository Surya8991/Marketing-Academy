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
};
