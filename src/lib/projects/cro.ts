import type { Project } from "@/lib/projects/types";

/**
 * Practice projects for the `cro` category (Session 85).
 * First projects in this category — created for the CRO & Conversion
 * Mastery track rollout (PROJECTS_PLAN.md Stage 8.3a priority #8).
 */
export const CRO_PROJECTS: Record<string, Project[]> = {
  "cro-101": [
    {
      id: "cro-101-single-goal-page-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Goal-Clarity Audit: Why a 1.1% Page Has Four CTAs",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real landing page brief with four competing CTAs and a stalled 1.1% conversion rate, apply the lesson's 'one primary goal per page' rule to diagnose the actual problem before recommending any test.",
      companyId: "casper-sleep",
      scenario:
        "You're a growth marketer at Casper Sleep. The flagship mattress product page converts at 1.1%, well under the 2.8% category average, and nobody agrees on why.",
      brief:
        "Classify every CTA as macro or micro conversion, then use a session-recording note to name the friction point, not a guess.",
      mode: "diagnostic",
      conceptsCovered: [
        "Every page needs exactly one primary conversion goal",
        "Macro vs micro conversions",
        "Friction identification before hypothesis",
      ],
      steps: [
        {
          stepId: "step-1-goal-clarity",
          concept: "Every page needs exactly one primary conversion goal",
          lessonAnchor: "what-is-a-conversion",
          theoryRecap:
            "Every page on a site should have exactly one primary conversion goal. Pages without a clear goal convert poorly almost by definition.",
          question:
            "The mattress product page has four buttons above the fold: 'Buy Now', 'Take the Sleep Quiz', 'Chat with a Sleep Expert', and 'Download the Sizing Guide'. Which one is the macro conversion, and what are the other three?",
          toolName: "Google Sheets",
          where: "List all four CTAs in a sheet with a Macro/Micro column, then sort by column.",
          procedure: [
            "List the 4 CTAs in column A, one per row",
            "Tag 'Buy Now' as Macro (the primary revenue-driving action)",
            "Tag the remaining 3 as Micro (quiz, chat, guide download)",
            "Note which micro-CTAs currently outrank Buy Now in visual weight",
          ],
          outputSample:
            "CTA                          Type    Visual weight\nBuy Now                      Macro   3rd (below fold)\nTake the Sleep Quiz          Micro   1st (hero, large button)\nChat with a Sleep Expert     Micro   2nd (sticky footer)\nDownload the Sizing Guide    Micro   4th (small text link)",
          healthy:
            "Buy Now is the largest, highest-contrast element on the page; the 3 micro-CTAs are visually secondary.",
          unhealthy:
            "The macro conversion (Buy Now) is visually the 3rd priority on the page, buried below two micro-conversion CTAs.",
          interpret:
            "A page with 4 co-equal buttons has no primary goal in practice, even if one is labeled 'Buy Now'. Visual hierarchy, not the label, decides what visitors actually click.",
          soWhat: [
            {
              symptom: "Buy Now sits below the Sleep Quiz CTA in visual weight",
              action: "Promote Buy Now to the dominant hero position; demote the quiz to a secondary text link",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-friction-id",
          concept: "Friction identification before hypothesis",
          lessonAnchor: "the-cro-loop",
          theoryRecap:
            "The CRO loop starts with Collect Data, then Identify Friction, then Form Hypothesis. Skipping straight to a hypothesis without data produces guesses, not tests.",
          question:
            "A Hotjar session-recording note reads: '68% of visitors scroll past the Buy Now button without pausing, then exit within 8 seconds of reaching the reviews section.' What is the friction, and what hypothesis does it support?",
          toolName: "Hotjar (CRO)",
          where: "Review the session recordings filter for 'exited within 10s of scroll depth 60-80%'.",
          procedure: [
            "Filter recordings where scroll depth reached 60-80% (the reviews section)",
            "Watch 5 recordings matching the 68% pattern",
            "Note the exact element visible on screen at the moment of exit",
            "Write one hypothesis in the lesson's 'If X, then Y, because Z' format",
          ],
          outputSample:
            "Pattern: 68% of exits occur while the review-star widget is on screen, showing '3.6 out of 5 (12 reviews)'.\nHypothesis: If we move the review widget below a curated set of 4-5-star reviews, then exit rate at scroll depth 60-80% will drop, because visitors are reacting to a low-looking review count rather than the reviews themselves.",
          healthy:
            "Exit spikes align with a specific, screenshot-able element, giving a hypothesis a concrete cause.",
          unhealthy:
            "Treating 'people are leaving' as the finding and jumping straight to a headline test with no diagnosis.",
          interpret:
            "A friction point tied to a specific, visible element is testable. A vague 'engagement is low' finding is not.",
          soWhat: [
            {
              symptom: "68% of sessions exit at the same scroll depth",
              action: "Watch 5 of those recordings before writing any hypothesis",
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
            role: "Classify CTAs as macro or micro conversions",
            why: "Free, no setup, fast for a small sorting task",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Hotjar (CRO)",
            role: "Watch session recordings to find the exact friction moment",
            why: "Free tier covers up to 35 sessions/day, enough to spot a repeating pattern",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "VWO",
            role: "Run the resulting A/B test once the hypothesis is written",
            why: "Full-featured testing platform for the follow-on test",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page audit memo naming Buy Now as the single primary conversion goal, reclassifying the other three CTAs as micro-conversions, and stating one friction-based hypothesis ready to test.",
      sampleOutput:
        "Warby Parker Home Try-On page, goal-clarity audit (excerpt)\n\nPRIMARY GOAL: Start Home Try-On (macro)\nMICRO CONVERSIONS: Take the Style Quiz, Book In-Store Appointment, Email Signup\n\nFRICTION FOUND: 54% of exits occur immediately after the shipping-cost disclosure line.\nHYPOTHESIS: If we state 'Free shipping both ways' in the hero instead of after scroll, then exit rate near that line will drop, because visitors currently discover the cost mid-decision instead of upfront.",
      successCriteria: [
        "Correctly names exactly one macro conversion and reclassifies the rest as micro",
        "Friction claim is tied to a specific, observable element, not a vague impression",
        "Hypothesis follows the exact 'If X, then Y, because Z' format",
      ],
      portfolioReady: true,
    },
    {
      id: "cro-101-test-priority-roadmap-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Roadmap: Scoring and Sequencing Six Test Ideas",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given six raw test ideas pitched by different teams, score each on impact and effort, plot them against the lesson's priority matrix, and write one fully formatted hypothesis for the top pick.",
      companyId: "nykaa",
      scenario:
        "You're the CRO lead at Nykaa. Five teams have each pitched one test idea for next quarter, and the product team added a sixth. You have budget for 3.",
      brief:
        "Score every idea, plot it, and only then write a hypothesis, not the other way around.",
      mode: "build",
      conceptsCovered: [
        "Testing Priority Matrix: impact vs effort",
        "Hypothesis format: If X then Y because Z",
        "Testing one element at a time",
      ],
      steps: [
        {
          stepId: "step-1-score-and-plot",
          concept: "Testing Priority Matrix: impact vs effort",
          lessonAnchor: "core-cro-concepts",
          theoryRecap:
            "Not every test idea is worth running. Prioritize using impact, confidence, and ease, focusing first on high-impact, low-effort changes.",
          question:
            "Six ideas: (1) Rewrite the checkout CTA copy, (2) Full homepage redesign, (3) Shorten the signup form from 6 fields to 3, (4) Change the 'Add to Bag' button color, (5) Add a size-fit quiz to product pages, (6) Rebuild the entire mobile checkout flow. Score each 0-1 on effort and impact, then identify the 3 quick wins.",
          toolName: "Google Sheets",
          where: "Build a 4-column sheet: Idea, Effort (0-1), Impact (0-1), Quadrant.",
          procedure: [
            "Score each of the 6 ideas on effort (0=low, 1=high) using team estimates",
            "Score each on impact (0=low, 1=high) using the lesson's benchmark data (form length, CTA clarity)",
            "Plot each into a quadrant: Quick Wins (low effort, high impact) vs Plan Carefully (high effort, high impact)",
            "Select the top 3 from Quick Wins first, only pulling from Plan Carefully if fewer than 3 quick wins exist",
          ],
          outputSample:
            "Idea                         Effort  Impact  Quadrant\nShorten signup form 6->3     0.3     0.85    Quick Win\nCheckout CTA copy rewrite    0.2     0.7     Quick Win\nSize-fit quiz                0.5     0.75    Plan Carefully\nAdd to Bag button color      0.15    0.25    Skip/Deprioritize\nHomepage redesign            0.9     0.8     Plan Carefully\nMobile checkout rebuild      0.95    0.85    Plan Carefully",
          healthy:
            "The 3 selected tests are all Quick Wins or the highest-impact Plan Carefully item, never the button-color test.",
          unhealthy:
            "Picking the homepage redesign first because a stakeholder is excited about it, ignoring the effort score.",
          interpret:
            "Impact and effort scoring exists specifically to overrule internal politics and hunches with a repeatable ranking.",
          soWhat: [
            {
              symptom: "The roadmap defaults to whichever team pitched loudest",
              action: "Score every idea on the same 2 axes before ranking",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-write-hypothesis",
          concept: "Hypothesis format: If X then Y because Z",
          lessonAnchor: "how-to-run-your-first-cro-test",
          theoryRecap:
            "Write one hypothesis per test using the format: 'If we [change X], then [metric Y] will improve because [reason Z].' Change only one element per test.",
          question:
            "Your #1 ranked test is shortening the signup form from 6 fields to 3. Write the hypothesis in the required format, and name the one variable this test isolates.",
          toolName: "Google Sheets",
          where: "Add a Hypothesis column next to the #1 ranked row.",
          procedure: [
            "State the single change: removing 3 non-essential fields",
            "State the metric: form completion rate",
            "State the reasoning: fewer fields lowers the effort required to convert",
            "Confirm no other element (button color, copy, layout) changes in the same test",
          ],
          outputSample:
            "Hypothesis: If we reduce the signup form from 6 fields to 3 (name, email, password), then form completion rate will improve, because each additional field adds friction that causes drop-off before submission.\nIsolated variable: field count only. Button copy, color, and layout stay identical to control.",
          healthy:
            "One variable changes; the hypothesis names a measurable metric and a clear reason.",
          unhealthy:
            "A hypothesis that changes the form length AND the button color AND the headline in the same test, making the result unattributable.",
          interpret:
            "A hypothesis that isolates one variable is the only kind that produces a usable, attributable result.",
          soWhat: [
            {
              symptom: "The test brief lists 3 simultaneous changes",
              action: "Split into 3 sequential single-variable tests instead",
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
            role: "Score, plot, and rank the 6 test ideas",
            why: "Free, sortable, easy to share with stakeholders",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optimizely",
            role: "Launch the top-ranked test once the roadmap is approved",
            why: "Enterprise-grade experimentation platform for running the resulting tests",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A ranked 6-item test roadmap with quadrant placement for each idea, plus one fully formatted, single-variable hypothesis for the #1 test.",
      sampleOutput:
        "Lenskart Q3 test roadmap (excerpt)\n\n#1 QUICK WIN: Remove redundant prescription-upload step (effort 0.25, impact 0.8)\nHypothesis: If we combine the 2-step prescription upload into 1 step, then checkout completion will improve, because removing a step reduces the chance of mid-flow abandonment.\n\n#2 QUICK WIN: Add a 'lens type' filter to the PDP (effort 0.3, impact 0.7)\n#3 PLAN CAREFULLY: Rebuild the frame try-on AR flow (effort 0.8, impact 0.85)",
      successCriteria: [
        "All 6 ideas are scored and correctly placed into a quadrant",
        "The top 3 selections follow the quadrant ranking, not intuition",
        "The hypothesis isolates exactly one variable and names a measurable metric",
      ],
      portfolioReady: true,
    },
  ],
  "conversion-rate-math": [
    {
      id: "conversion-rate-math-revenue-lift-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Build the Business Case: Forecasting a CRO Revenue Lift",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given real traffic, conversion, and AOV numbers, calculate baseline revenue, Revenue per Visitor, and the annual dollar lift from a targeted conversion rate improvement, using the lesson's exact formulas.",
      companyId: "warby-parker",
      scenario:
        "You're building a Q4 budget case for a CRO hire at Warby Parker's online store. Finance wants a dollar figure, not a percentage.",
      brief: "Show your work with the exact formulas from the lesson; round to the nearest dollar.",
      mode: "calibration",
      conceptsCovered: [
        "Revenue per Visitor (RPV)",
        "Annual lift calculation model",
      ],
      steps: [
        {
          stepId: "step-1-compute-cr-and-rpv",
          concept: "Revenue per Visitor (RPV)",
          lessonAnchor: "step-1-know-your-four-core-numbers",
          theoryRecap:
            "RPV = AOV x Conversion Rate. It collapses conversion rate and order value into a single dollar-per-visitor figure.",
          question:
            "The product page gets 80,000 monthly visitors and 1,760 monthly conversions, with a $150 average order value. What is the current conversion rate and RPV?",
          toolName: "Google Sheets",
          where: "New sheet, 2 formula cells: CR and RPV.",
          procedure: [
            "CR = (1,760 / 80,000) x 100",
            "RPV = $150 x CR (as a decimal)",
            "Record both figures to 2 decimal places",
          ],
          outputSample: "CR = (1,760 / 80,000) x 100 = 2.2%\nRPV = $150 x 0.022 = $3.30 per visitor",
          healthy: "CR and RPV are both computed from the same underlying numbers, with no rounding before the final step.",
          unhealthy: "Rounding CR to '2%' before computing RPV, which understates RPV by a meaningful margin at scale.",
          interpret:
            "RPV of $3.30 means every 1,000 visitors sent to this page is worth $3,300, regardless of channel. That is the number a budget case should lead with.",
          soWhat: [
            {
              symptom: "The budget case cites conversion rate percentage only",
              action: "Convert CR to RPV before presenting to a non-marketing audience",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-annual-lift",
          concept: "Annual lift calculation model",
          lessonAnchor: "step-2-calculate-your-revenue-lift-before-you-start-any-test",
          theoryRecap:
            "Baseline: Visitors x Current CR x AOV. Target: Visitors x Target CR x AOV. Annual lift: (Target - Baseline) x 12.",
          question:
            "If a CRO program lifts CR from 2.2% to 2.9% with traffic and AOV held constant, what is the annual revenue lift?",
          toolName: "Google Sheets",
          where: "Add Baseline, Target, and Annual Lift rows below the CR/RPV cells.",
          procedure: [
            "Baseline monthly revenue = 80,000 x 0.022 x $150",
            "Target monthly revenue = 80,000 x 0.029 x $150",
            "Annual lift = (Target - Baseline) x 12",
          ],
          outputSample:
            "Baseline: 80,000 x 0.022 x $150 = $264,000/mo\nTarget: 80,000 x 0.029 x $150 = $348,000/mo\nAnnual lift: ($348,000 - $264,000) x 12 = $1,008,000/year",
          healthy: "The forecast states a single dollar figure with the underlying assumption (+0.7pp CR) named explicitly.",
          unhealthy: "Presenting '32% more revenue' with no visitor count or AOV shown, so the claim can't be checked.",
          interpret:
            "A 0.7-percentage-point CR lift, holding traffic and AOV flat, is worth just over $1M a year here. That is the number that gets a budget approved.",
          soWhat: [
            {
              symptom: "Leadership asks 'so what does this actually mean in dollars'",
              action: "Always attach the 3-line baseline/target/annual-lift table to any CR pitch",
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
            role: "Run the CR, RPV, and annual lift calculations",
            why: "Free, formula-driven, easy to hand to a finance stakeholder",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page CRO business case showing current CR, RPV, baseline monthly revenue, target revenue at +0.7pp CR, and the resulting annual dollar lift.",
      sampleOutput:
        "Casper Sleep CRO business case (excerpt)\n\nCurrent: 45,000 visitors/mo x 1.9% CR x $900 AOV = $769,500/mo\nTarget: 45,000 visitors/mo x 2.6% CR x $900 AOV = $1,053,000/mo\nAnnual lift: ($1,053,000 - $769,500) x 12 = $3,402,000/year\nRPV moves from $17.10 to $23.40 per visitor.",
      successCriteria: [
        "CR and RPV are both computed correctly from the raw inputs",
        "Baseline and target revenue use the exact 3-step model, not a shortcut percentage",
        "The final annual lift is a single, defensible dollar figure",
      ],
      portfolioReady: true,
    },
    {
      id: "conversion-rate-math-cpa-diagnosis-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineer the Bottleneck: CR, CPA, and a Misleading 20% Headline",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given only raw ad spend, traffic, and revenue numbers with no conversion rate stated, back into CR and CPA, then use relative-vs-absolute lift framing to diagnose whether spend, conversion rate, or AOV is the real problem.",
      companyId: "casper-sleep",
      scenario:
        "Casper Sleep's paid social channel doubled ad spend last quarter, but revenue only grew 20%. Marketing is calling it a win. You have the raw numbers, not a labeled report.",
      brief: "Compute before you diagnose. Don't accept the '20% CR lift' headline until you've checked it against the absolute numbers.",
      mode: "diagnostic",
      conceptsCovered: [
        "Cost per Acquisition (CPA) formula",
        "CPA halves when CR doubles",
        "Relative vs absolute lift",
      ],
      steps: [
        {
          stepId: "step-1-back-into-cr-and-cpa",
          concept: "Cost per Acquisition (CPA) formula",
          lessonAnchor: "step-3-calculate-how-cpa-drops-as-cr-rises",
          theoryRecap:
            "CPA = Ad Spend / Conversions. As CR rises with traffic and spend held flat, more of the same visitors convert, so CPA drops.",
          question:
            "Last quarter: $18,000 ad spend, 500,000 visitors, 3,000 conversions. What is the conversion rate and CPA?",
          toolName: "Google Sheets",
          where: "New sheet, compute CR and CPA from the 3 raw inputs.",
          procedure: [
            "CR = (3,000 / 500,000) x 100",
            "CPA = $18,000 / 3,000",
            "Record both figures",
          ],
          outputSample: "CR = (3,000 / 500,000) x 100 = 0.6%\nCPA = $18,000 / 3,000 = $6.00",
          healthy: "CR and CPA are computed from the same period's raw numbers before any comparison is made.",
          unhealthy: "Accepting a stakeholder's stated percentage without recomputing it from the underlying visitor and conversion counts.",
          interpret: "A 0.6% CR and $6 CPA are the real baseline this quarter's '20% growth' claim needs to be checked against.",
          soWhat: [
            { symptom: "A report states a growth percentage with no CR or CPA shown", action: "Recompute both from raw visitor/conversion/spend numbers before trusting the headline", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-relative-vs-absolute",
          concept: "Relative vs absolute lift",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "A headline percentage lift can sound extraordinary while the absolute percentage-point change is small. Always anchor percentage gains to absolute numbers and real dollars.",
          question:
            "Prior quarter's CR was 0.5%; this quarter's CR (computed above) is 0.6%. Marketing calls this a '20% CR lift.' At $150 AOV and 500,000 visitors, what is the absolute lift in percentage points and in dollars, and was doubling ad spend worth it?",
          toolName: "Google Sheets",
          where: "Add a comparison block below the CR/CPA cells.",
          procedure: [
            "Relative lift = (0.6% - 0.5%) / 0.5% = 20%",
            "Absolute lift = 0.6% - 0.5% = 0.1 percentage points",
            "Dollar impact = 500,000 x 0.001 x $150 = $75,000 in added revenue",
            "Compare $75,000 in added revenue against the $9,000 increase in ad spend (from doubling $9,000 to $18,000)",
          ],
          outputSample:
            "Relative lift: 20% (sounds large)\nAbsolute lift: 0.1 percentage points (0.5% -> 0.6%)\nDollar impact: 500,000 x 0.001 x $150 = $75,000\nExtra spend: +$9,000\nVerdict: revenue grew $75,000 against $9,000 in added spend, a real win, but CPA still rose from prior levels because spend outpaced the CR gain, not a pure CR success story.",
          healthy: "The team reports both the relative and absolute figures together with the dollar impact and the spend delta.",
          unhealthy: "The team repeats '20% lift' in every slide without ever stating the 0.1-percentage-point absolute change or the CPA trend.",
          interpret:
            "The real story is a modest CR improvement riding on top of doubled spend, not a CRO breakthrough. The bottleneck is spend efficiency, not the page itself.",
          soWhat: [
            { symptom: "A results deck leads with a relative percentage only", action: "Require the absolute percentage-point and dollar figures on the same slide", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Back into CR and CPA from raw spend/traffic/conversion numbers",
            why: "Free, formula-driven, sufficient for a diagnostic memo",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull the underlying visitor and conversion counts by channel",
            why: "Free, standard source for the raw traffic and conversion data used in the calculation",
            required: false,
            fallback: "Use the numbers as given in the scenario if GA4 access isn't available",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A short diagnostic memo stating the computed CR, CPA, and RPV, the relative-vs-absolute lift comparison, and a verdict on whether the real Q3 problem is spend, conversion rate, or AOV.",
      sampleOutput:
        "Lenskart paid search diagnostic (excerpt)\n\nCR: 1.4% (up from 1.2%) | CPA: $11.90 (up from $9.80)\nRelative lift: 16.7% | Absolute lift: 0.2 percentage points\nDollar impact: 300,000 visitors x 0.002 x $2,200 AOV = $132,000\nVerdict: CR improved, but CPA rose faster than revenue, meaning the real bottleneck this quarter is rising traffic cost, not conversion rate.",
      successCriteria: [
        "CR and CPA are correctly computed from raw spend/traffic/conversion inputs, not assumed",
        "Relative and absolute lift are both stated, with a dollar figure attached",
        "The verdict correctly identifies spend efficiency, not conversion rate, as the actual driver",
      ],
      portfolioReady: true,
    },
  ],

  "landing-page-anatomy": [
    {
      id: "landing-page-anatomy-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Find the Broken Sections: Landing Page Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic landing page draft, apply the 7-section playbook to find every structural defect costing conversions, and tell the difference between a real defect and a stylistic choice that just looks off.",
      companyId: "glossybox",
      scenario:
        "You're a freelance CRO consultant. Glossybox has sent over a draft landing page for a Black Friday subscription push and wants a structural review before it goes live.",
      brief:
        "Read the specimen page copy end to end, mark every section that violates the 7-section playbook, and separate genuine defects from things that merely look unusual but are fine.",
      mode: "teardown",
      conceptsCovered: [
        "Section 1: Headline",
        "Section 4: Benefits List",
        "Section 5: Social Proof",
        "Section 6: Call to Action (CTA)",
        "Section 7: Objection Handler",
      ],
      teardownItems: [
        {
          itemId: "teardown-1-glossybox-draft",
          specimen:
            "HEADLINE: \"Welcome to Glossybox — Your Monthly Beauty Discovery Partner Since 2011\"\n" +
            "SUBHEAD: \"Curated by beauty experts, loved by 1 million+ subscribers.\"\n" +
            "HERO: [product photo — assorted makeup laid out on a marble countertop]\n" +
            "BENEFITS:\n" +
            "  - Free shipping on all orders\n" +
            "  - Cancel anytime\n" +
            "  - 5 full-size and deluxe sample products every month\n" +
            "CTA ROW (two equal-weight buttons side by side): [ Subscribe Now ]   [ Browse Past Boxes ]\n" +
            "FOOTER (bottom of page, small text): \"As seen in Vogue, Allure, and Cosmopolitan.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "List every structural defect in this draft, its severity, and which playbook section it violates. Then note anything that looks unusual but is actually fine.",
          answerKey: [
            {
              defect:
                "Headline names the company and its founding year instead of the visitor's outcome (\"Your Monthly Beauty Discovery Partner Since 2011\").",
              severity: "critical",
              whyItMatters:
                "90% of visitors read the headline first; a headline that answers 'who are you' instead of 'what do I get' loses them before the subhead even loads.",
              lessonRef: "section-1-headline",
              owner: "you",
            },
            {
              defect:
                "Two equally-weighted CTA buttons ('Subscribe Now' and 'Browse Past Boxes') compete for the click.",
              severity: "critical",
              whyItMatters:
                "Pages with multiple offers convert 266% worse than single-offer pages; a second button splits intent instead of focusing it.",
              lessonRef: "section-6-call-to-action-cta",
              owner: "you",
            },
            {
              defect:
                "No objection-handling microcopy sits beside the CTA button — 'Cancel anytime' is buried mid-way down the benefits list instead.",
              severity: "moderate",
              whyItMatters:
                "The objection handler's entire job is to catch the last-second doubt right where the visitor's cursor is; moving it away from the button erases that function.",
              lessonRef: "section-7-objection-handler",
              owner: "you",
            },
            {
              defect:
                "Benefits list mixes a feature ('5 full-size and deluxe sample products') in with outcome-framed lines instead of translating it to a 'so what.'",
              severity: "moderate",
              whyItMatters:
                "A feature tells the visitor what they get; an outcome tells them why it matters. 'Discover 5 products worth trying before you buy full-size' converts a spec into a reason to care.",
              lessonRef: "section-4-benefits-list",
              owner: "you",
            },
            {
              defect:
                "The only social proof ('As seen in Vogue, Allure, and Cosmopolitan') is in the footer, far from the CTA.",
              severity: "moderate",
              whyItMatters:
                "Visitors who scroll to the CTA are closest to converting; proof placed only at the bottom never reaches the moment of hesitation.",
              lessonRef: "section-5-social-proof",
              owner: "you",
            },
          ],
          distractors: [
            "The hero image is a product photo of makeup on a countertop rather than a photo of people. (Not a defect — the lesson warns against generic stock photos of people shaking hands, not clean product photography.)",
            "The subheadline is a separate line from the headline instead of being merged into one sentence. (Not a defect — a distinct headline plus subheadline is the required structure, not a flaw.)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect, its severity, and the fix as you work through the specimen",
            why: "Free, zero setup, easy to hand back to a client as a findings sheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar (CRO)",
            role: "Watch real session recordings on a live page to confirm where visitors actually hesitate before the CTA",
            why: "Turns a static teardown into evidence from real behavior once the page is live",
            required: false,
            fallback: "Skip this step on a pre-launch draft; there's no live traffic to record yet",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A findings sheet listing every defect found, its severity, the violated playbook section, and a one-line fix, ready to hand back to the client.",
      sampleOutput:
        "Allbirds landing page teardown (excerpt)\n\nCRITICAL — Headline names the company, not the outcome\n  Current: 'Welcome to Allbirds'\n  Fix: 'Shoes Made From Wool, Not Plastic'\n\nMODERATE — No social proof near CTA\n  Current: reviews only in footer\n  Fix: add star rating + review count directly above the Add to Cart button",
      successCriteria: [
        "Correctly identifies all 5 real defects with the right severity and playbook section",
        "Correctly separates both distractors from real defects, explaining why each is not actually a problem",
        "Every fix proposed is specific enough that a copywriter could act on it without asking a follow-up question",
      ],
      portfolioReady: true,
    },
    {
      id: "landing-page-anatomy-build-outline",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Page: A 7-Section Landing Page Outline",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Draft a complete landing page copy outline for a real launch scenario, following the lesson's 7-section order, so every section earns the next one instead of just filling space.",
      companyId: "duolingo",
      scenario:
        "You're a growth marketer at Duolingo building the landing page for a new 'Duolingo for Schools' offer aimed at time-strapped teachers.",
      brief:
        "Work through the 7-section playbook in order and produce a page outline a copywriter could hand off to design without further back-and-forth.",
      mode: "build",
      conceptsCovered: [
        "Section 1: Headline",
        "Section 4: Benefits List",
        "Section 6: Call to Action (CTA)",
      ],
      steps: [
        {
          stepId: "step-1-headline-subhead",
          concept: "Section 1: Headline",
          lessonAnchor: "section-1-headline",
          theoryRecap:
            "The lesson's Section 1 rule: one sentence, states the outcome the visitor gets, never the product name or a clever tagline.",
          question:
            "Given the audience is time-strapped teachers, which of these three headline candidates actually passes the 'stranger test'?",
          toolName: "Google Sheets",
          where: "A new 'Landing Page Draft' tab in a shared planning sheet",
          procedure: [
            "List 3 headline candidates in column A",
            "Score each one PASS/FAIL against 'states an outcome, not the product name' in column B",
            "Keep the highest-scoring headline and write a one-to-two-sentence subheadline beneath it naming the audience and the mechanism",
          ],
          outputSample:
            "HEADLINE CANDIDATES\n1. 'Introducing Duolingo for Schools' — FAIL (names the product)\n2. 'Get Every Student Speaking a New Language in 15 Minutes a Day' — PASS (states the outcome)\n3. 'Free Language Learning for Classrooms' — PARTIAL (states the offer, not the outcome)\n\nKEPT: #2\nSUBHEAD: 'Built for teachers with no extra prep time — assign a lesson in under a minute.'",
          healthy:
            "The kept headline names a concrete outcome the visitor wants, with zero mention of the product name or company history.",
          unhealthy:
            "The headline opens with the product name, a launch announcement, or company history instead of a result.",
          interpret:
            "If a stranger with zero context can't repeat back what they'd get from the page, the headline still needs another pass.",
          soWhat: [
            {
              symptom: "Every candidate headline mentions the product name first",
              action: "Rewrite starting from the outcome sentence, then see if the product name is even necessary in the headline at all",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-benefits-outcomes",
          concept: "Section 4: Benefits List",
          lessonAnchor: "section-4-benefits-list",
          theoryRecap:
            "The lesson's Section 4 test: does each bullet answer 'so what?' for the visitor, or does it just list a feature?",
          question:
            "Turn these 3 raw product features into outcome-framed benefit bullets a teacher would actually care about.",
          toolName: "Google Sheets",
          where: "The same 'Landing Page Draft' tab, a new Benefits block",
          procedure: [
            "List the raw features in column A: auto-graded exercises, progress dashboard, offline mode",
            "For each, write the outcome version in column B using the 'so what' test",
            "Keep only the 3-5 strongest outcome bullets for the final page",
          ],
          outputSample:
            "FEATURE → BENEFIT\n'Auto-graded exercises' → 'Get grading off your plate — every exercise scores itself'\n'Progress dashboard' → 'See which students are falling behind before test day, not after'\n'Offline mode' → 'Assign homework that works even without home Wi-Fi'",
          healthy:
            "Every bullet answers a 'why does this matter to me' question a teacher would actually ask.",
          unhealthy:
            "Bullets read like a spec sheet: feature name, then nothing else.",
          interpret:
            "A benefits list that could be copy-pasted onto a competitor's page unchanged has not been translated into outcomes yet.",
          soWhat: [
            {
              symptom: "A bullet is just a feature name with no verb tied to a result",
              action: "Add the 'so what' clause: what does the teacher get to stop worrying about, or start doing, because of this feature",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cta-objection",
          concept: "Section 6: Call to Action (CTA)",
          lessonAnchor: "section-6-call-to-action-cta",
          theoryRecap:
            "The lesson's Section 6-7 rule: one CTA button labeled with what happens next, paired with one line that removes the last micro-doubt.",
          question:
            "Which CTA label and objection-handler pairing gives a teacher the least reason to hesitate before clicking?",
          toolName: "Google Sheets",
          where: "The same 'Landing Page Draft' tab, the final CTA block",
          procedure: [
            "Write 2 CTA label candidates that describe what happens next, not a generic verb",
            "Pick the strongest label and write one objection-handler line directly beneath it",
            "Paste the finished CTA + objection-handler pair at the bottom of the outline",
          ],
          outputSample:
            "CTA CANDIDATES\n'Submit' — weak, generic\n'Get My Free Classroom Trial' — strong, outcome-labeled\n\nFINAL:\n[ Get My Free Classroom Trial ]\n'No credit card required. Set up your first class in under 5 minutes.'",
          healthy:
            "The CTA label describes the specific next step, and the objection-handler line directly answers the one doubt a teacher would have before clicking.",
          unhealthy:
            "The CTA says 'Submit' or 'Continue' with no supporting line beneath it.",
          interpret:
            "A CTA without an objection handler leaves the visitor's last hesitation completely unaddressed at the exact moment it matters most.",
          soWhat: [
            {
              symptom: "The CTA button has no microcopy beneath it",
              action: "Add one line removing the most likely objection: cost, time, or commitment",
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
            role: "Draft, score, and finalize every section of the outline in one shared document",
            why: "Free, and a shared sheet is easy to hand to a copywriter or designer for the next step",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva",
            role: "Turn the finished text outline into a visual wireframe before handing it to design",
            why: "Speeds up stakeholder buy-in with a rough visual instead of a plain text doc",
            required: false,
            fallback: "Hand off the text outline directly; most designers can wireframe from a clear written brief",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete landing page copy outline covering headline, subheadline, benefits, CTA, and objection handler, in the lesson's 7-section order, ready for a copywriter or designer to build from.",
      sampleOutput:
        "Squarespace 'Squarespace for Nonprofits' outline (excerpt)\n\nHEADLINE: 'Launch a Donation Page Your Board Will Actually Approve'\nSUBHEAD: 'Built for nonprofits with no in-house designer — go live in an afternoon.'\nCTA: [ Start My Free Trial ]\n'No credit card required. Cancel anytime.'",
      successCriteria: [
        "Headline names an outcome, never the product name",
        "At least 3 benefit bullets are outcome-framed, not feature lists",
        "The CTA label describes the next step and is paired with an objection-handler line",
      ],
      portfolioReady: true,
    },
  ],
  "hero-formula": [
    {
      id: "hero-formula-audit-checklist",
      tier: "mini",
      archetype: "audit",
      title: "Three-Second Test: Auditing a Hero Section",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Score a real hero section against the lesson's 4-component formula and the Ofspace failure patterns, to decide whether it would survive the 'three-second test' with a real visitor.",
      companyId: "squarespace",
      scenario:
        "You're a CRO analyst reviewing Squarespace's own template hero sections before recommending which templates the design team should feature as 'conversion-ready' defaults.",
      brief:
        "Score the specimen hero against all 4 formula components and flag any of the 6 documented Ofspace failure patterns it exhibits.",
      mode: "diagnostic",
      conceptsCovered: [
        "1. The Outcome Headline",
        "3. The Single CTA Button",
      ],
      steps: [
        {
          stepId: "step-1-headline-clarity",
          concept: "1. The Outcome Headline",
          lessonAnchor: "1-the-outcome-headline",
          theoryRecap:
            "The lesson's stranger test: a stranger reading only the headline, with zero other context, should immediately know what they'd get.",
          question:
            "This template's hero headline reads 'Welcome to the Everything Store.' Does it pass the stranger test?",
          toolName: "Google Sheets",
          where: "A new 'Hero Audit' tab, one row per hero section reviewed",
          procedure: [
            "Paste the headline text into column A",
            "Score PASS/FAIL against 'names a concrete outcome, not a company tagline' in column B",
            "Write the fixed version in column C if it fails",
          ],
          outputSample:
            "HEADLINE: 'Welcome to the Everything Store.'\nSCORE: FAIL — names nothing a visitor would get\nFIX: 'Sell Anything, From One Simple Dashboard'",
          healthy:
            "The headline names a specific, concrete outcome the visitor gets, no company tagline language.",
          unhealthy:
            "The headline is a welcome message or a vague positioning line with no stated outcome.",
          interpret:
            "37% of visitors leave within three seconds if they can't understand what a site offers — a failing headline is the single most expensive defect in the hero.",
          soWhat: [
            {
              symptom: "The headline is a company tagline instead of an outcome statement",
              action: "Rewrite it to name the specific result a visitor gets, using the stranger test as the bar",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cta-count",
          concept: "3. The Single CTA Button",
          lessonAnchor: "3-the-single-cta-button",
          theoryRecap:
            "The Ofspace 2024 finding: 27% of startup hero sections had multiple equally-weighted CTA buttons, and those sites were nearly 3x more likely to also lack trust signals.",
          question:
            "This hero has 'Start Free Trial' and 'Watch Demo' as two equal-sized buttons side by side. What does the formula say to do?",
          toolName: "Google Sheets",
          where: "The same 'Hero Audit' tab, a CTA count column",
          procedure: [
            "Count every CTA-styled button visible in the hero without scrolling",
            "Flag any hero with 2+ equally-weighted buttons",
            "Recommend which single action should stay primary and where the second action should move",
          ],
          outputSample:
            "CTAs FOUND: 2 ('Start Free Trial', 'Watch Demo'), both same size and color\nFLAG: multiple equal-weight CTAs\nRECOMMENDATION: keep 'Start Free Trial' as the primary button; move 'Watch Demo' to a smaller text link beneath it",
          healthy:
            "One button carries clear visual weight; any secondary action is visually smaller or placed lower on the page.",
          unhealthy:
            "Two or more buttons compete for attention with identical size, color, and placement.",
          interpret:
            "Multiple equal-weight CTAs don't just split clicks — the Ofspace data shows they correlate with missing trust signals, compounding the conversion problem.",
          soWhat: [
            {
              symptom: "Two buttons in the hero share the same visual weight",
              action: "Demote the secondary action to a text link or smaller button beneath the primary CTA",
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
            role: "Score every hero section against the 4-component checklist in one sheet",
            why: "Free, and turns a subjective 'this looks off' review into a repeatable scored audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar (CRO)",
            role: "Add a heatmap on the live hero to confirm which button visitors actually click when two are present",
            why: "Turns the audit's prediction into measured evidence once the page has real traffic",
            required: false,
            fallback: "Skip on a pre-launch template; use the checklist score alone",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored audit sheet covering headline clarity and CTA count for the reviewed hero, with a pass/fail flag and a specific fix for each failure.",
      sampleOutput:
        "Glossybox hero audit (excerpt)\n\nHEADLINE: 'Beauty, Delivered.' — FAIL, no outcome named\nCTA COUNT: 1 ('Get Your First Box') — PASS\nOVERALL: 1 of 2 components failing, headline needs a rewrite before launch",
      successCriteria: [
        "Correctly scores the headline against the stranger test with a specific fix if it fails",
        "Correctly counts and flags any hero with 2+ equal-weight CTA buttons",
      ],
      portfolioReady: true,
    },
    {
      id: "hero-formula-rebuild-weak-hero",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild It: Turning a Weak Hero Into a Four-Component Hero",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Take a real weak hero section apart and rebuild it component by component, in the formula's fixed order, producing a finished hero ready for a designer to lay out.",
      companyId: "allbirds",
      scenario:
        "You're a conversion copywriter brought onto Allbirds' site team to rebuild the hero section for a new product line launch page. The current draft is generic and untested.",
      brief:
        "Rebuild the hero from scratch across all 4 components, in the formula's order, and justify each choice against the lesson's data.",
      mode: "build",
      conceptsCovered: [
        "1. The Outcome Headline",
        "2. The Supporting Subheadline",
        "3. The Single CTA Button",
        "4. The Contextual Visual",
      ],
      steps: [
        {
          stepId: "step-1-rebuild-headline-subhead",
          concept: "1. The Outcome Headline",
          lessonAnchor: "1-the-outcome-headline",
          theoryRecap:
            "The lesson's stranger test, plus the subheadline's job: name who this is for and how the outcome is delivered.",
          question:
            "The current draft headline is 'Introducing the New Allbirds Collection.' Rebuild it and its subheadline from scratch.",
          toolName: "Google Sheets",
          where: "A new 'Hero Rebuild' tab, one row per component",
          procedure: [
            "Write the outcome the new product line actually delivers for the visitor",
            "Draft the headline naming that outcome directly, no product-launch language",
            "Draft a 1-2 sentence subheadline naming the audience and the mechanism (the material, the fit, the guarantee)",
          ],
          outputSample:
            "OLD: 'Introducing the New Allbirds Collection'\nNEW HEADLINE: 'Shoes That Actually Feel Good After 10 Hours on Your Feet'\nNEW SUBHEAD: 'Made from merino wool and eucalyptus fiber, for anyone on their feet all day at work.'",
          healthy:
            "The headline names a concrete physical or emotional outcome; the subheadline names the audience and the mechanism without jargon.",
          unhealthy:
            "The headline announces a launch or collection name instead of an outcome.",
          interpret:
            "'Introducing' language answers a question the visitor never asked. The formula only works when every word answers 'why should I care.'",
          soWhat: [
            {
              symptom: "The headline uses launch language ('Introducing', 'New')",
              action: "Replace it with the specific physical or emotional outcome the product delivers",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rebuild-cta",
          concept: "3. The Single CTA Button",
          lessonAnchor: "3-the-single-cta-button",
          theoryRecap:
            "The lesson's CTA rule: one button, labeled with the outcome of clicking, not a generic verb.",
          question:
            "The current draft CTA says 'Learn More.' What replaces it, and what happens to any secondary link on the page?",
          toolName: "Canva",
          where: "A rough mockup of the hero layout with the new CTA placed",
          procedure: [
            "Write a CTA label naming the specific next step ('Shop the Collection', not 'Learn More')",
            "Remove or visually demote any second button competing with it",
            "Place the single CTA where it's visible without scrolling on mobile",
          ],
          outputSample:
            "OLD CTA: 'Learn More' (with a second equal-size 'View Lookbook' button beside it)\nNEW: single button '[ Shop the New Collection ]', 'View Lookbook' demoted to a small text link below the fold",
          healthy:
            "One clearly-labeled button carries all the visual weight in the hero, visible on mobile without scrolling.",
          unhealthy:
            "Two buttons of equal visual weight both sit above the fold.",
          interpret:
            "25% of startup hero sections in the Ofspace analysis had major mobile usability failures with CTAs pushed below the fold — mobile placement is not optional.",
          soWhat: [
            {
              symptom: "The CTA is not visible without scrolling on a phone-width mockup",
              action: "Shorten the headline/subhead block or move the CTA higher until it clears the fold on mobile",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-rebuild-visual",
          concept: "4. The Contextual Visual",
          lessonAnchor: "4-the-contextual-visual",
          theoryRecap:
            "The lesson's rule: the visual must reinforce the headline's promise, not contradict it — show the product or the result, not a generic stock scene.",
          question:
            "The current draft uses a stock photo of people jumping on a beach. Does it match the new headline about all-day comfort at work?",
          toolName: "Canva",
          where: "The same hero mockup, the visual slot",
          procedure: [
            "Check whether the current image supports or contradicts the new headline's claim",
            "Replace it with a product-in-use shot: someone wearing the shoes in a real work setting",
            "Confirm the final mockup shows headline, subhead, single CTA, and visual together in the formula's order",
          ],
          outputSample:
            "OLD VISUAL: stock photo, people jumping on a beach — contradicts 'all-day comfort at work'\nNEW VISUAL: photo of someone wearing the shoes on a warehouse floor, mid-shift\nFINAL MOCKUP: headline → subhead → single CTA → contextual visual, in order",
          healthy:
            "The visual shows the specific outcome or context the headline promises.",
          unhealthy:
            "The visual is a generic stock scene unrelated to the headline's specific claim.",
          interpret:
            "Visitors process images before text — a mismatched visual creates doubt before the visitor even reads the headline properly.",
          soWhat: [
            {
              symptom: "The hero visual doesn't obviously connect to the headline's claim",
              action: "Replace it with a photo or screenshot that directly shows the promised outcome",
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
            role: "Draft and compare old-vs-new copy for the headline and subheadline before mocking anything up",
            why: "Free, and keeps the before/after comparison in one place for stakeholder review",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Mock up the rebuilt hero layout with the new headline, CTA, and visual placed together",
            why: "Free tier covers a single-page mockup with stock or uploaded imagery",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Figma",
            role: "Hand off a pixel-precise hero layout to a design team instead of a rough mockup",
            why: "Better for teams that need exact spacing and responsive breakpoints specified",
            required: false,
            fallback: "A Canva mockup with clear component labels is enough for most handoffs",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A finished hero mockup showing the rebuilt headline, subheadline, single CTA, and contextual visual together, plus a before/after comparison sheet documenting why each change was made.",
      sampleOutput:
        "Duolingo for Schools hero rebuild (excerpt)\n\nOLD: 'Welcome to Duolingo for Schools' + 2 competing CTAs + generic classroom stock photo\nNEW: 'Every Student Speaking a New Language in 15 Minutes a Day' + single CTA '[ Start My Free Class ]' + screenshot of the actual teacher dashboard",
      successCriteria: [
        "Rebuilt headline names a concrete outcome and passes the stranger test",
        "Only one CTA carries primary visual weight and is visible above the fold on mobile",
        "The new visual directly supports the new headline's specific claim",
      ],
      portfolioReady: true,
      stretch:
        "Run the old and new hero mockups past 3 people outside marketing, cold, and time how long it takes each person to correctly say what the page offers.",
    },
  ],

  "form-optimization": [
    {
      id: "form-optimization-signup-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Toll Booth Audit: Tearing Down a Vendor Sign-Up Form",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 9-field vendor sign-up form specimen, identify which fields are legitimate friction and which are unjustified toll charges, using the lesson's Audit/Reduce framework.",
      companyId: "instacart",
      scenario:
        "You're a growth marketer at Instacart reviewing the sign-up form for a new grocery-partner onboarding page. Partner activations have been flat for two months and the team suspects the form itself is the leak.",
      brief:
        "Read the specimen form field-by-field. For each field, decide whether it earns its place or should be removed, combined, or deferred to post-signup.",
      mode: "teardown",
      conceptsCovered: [
        "Filtering fields against a decision the data enables",
        "Combining fields to cut visual weight",
        "Deferring non-essential fields to a post-conversion step",
      ],
      teardownItems: [
        {
          itemId: "teardown-1-full-form",
          specimen:
            "Instacart Partner Sign-Up (specimen, synthetic)\n1. First Name *\n2. Last Name *\n3. Store Name *\n4. Store Phone Number *\n5. Store Email *\n6. Confirm Store Email *\n7. Create a Password *\n8. Confirm Password *\n9. Estimated Monthly Order Volume (dropdown) *\n10. How did you hear about us? (free text, optional)\n11. Preferred Onboarding Call Time (optional)\n\n[ Submit ]",
          specimenSource: "synthetic-realistic",
          prompt:
            "This form has 11 fields, all but 2 marked required, on a single unbroken page with a generic 'Submit' button. Identify every defect that is costing this form completions.",
          answerKey: [
            {
              defect: "Separate 'Confirm Store Email' field",
              severity: "critical",
              whyItMatters:
                "Modern browsers autofill email correctly; a confirmation field doubles the highest-abandonment field type (email, 6.4% per-field abandonment) for a check that catches almost no real typos.",
              lessonRef: "stage-2-reduce",
              owner: "developer",
            },
            {
              defect: "Separate 'Confirm Password' field alongside password creation upfront",
              severity: "critical",
              whyItMatters:
                "Password fields already carry the highest per-field abandonment rate (10.5%); forcing password creation before the store owner has seen any value compounds it, and confirming it a second time doubles the cost.",
              lessonRef: "stage-3-sequence",
              owner: "developer",
            },
            {
              defect: "First Name / Last Name as two separate fields",
              severity: "moderate",
              whyItMatters:
                "These can combine into a single 'Full Name' field, cutting a field with no loss of data quality.",
              lessonRef: "stage-2-reduce",
              owner: "developer",
            },
            {
              defect: "Generic 'Submit' button copy",
              severity: "moderate",
              whyItMatters:
                "'Submit' names the action, not the reward. A store owner responds better to something like 'Start Selling on Instacart' that completes the sentence 'I want to...'.",
              lessonRef: "stage-4-test",
              owner: "either",
            },
            {
              defect: "'How did you hear about us?' as an open free-text field",
              severity: "moderate",
              whyItMatters:
                "This data does not change any onboarding decision and can be captured later via analytics UTM tracking instead of asking the visitor to type it.",
              lessonRef: "stage-1-audit",
              owner: "you",
            },
            {
              defect: "No single-page vs. multi-step decision made for an 11-field form",
              severity: "moderate",
              whyItMatters:
                "At this field count the lesson's research shows breaking into steps reduces perceived effort; this form ships everything on one unbroken page.",
              lessonRef: "stage-3-sequence",
              owner: "developer",
            },
          ],
          distractors: [
            "Estimated Monthly Order Volume dropdown, this field is required and directly changes which onboarding specialist is assigned, so it passes the audit and should stay",
            "Store Phone Number, this is required for logistics coordination and changes a real downstream decision, so it is not a defect",
            "Preferred Onboarding Call Time, this is already marked optional and low-friction as a dropdown, not a defect worth flagging",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each field against the audit questions and log the defect list",
            why: "No account friction, easy to share the finished audit with a team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar",
            role: "Watch real session recordings to confirm which field visitors actually abandon on",
            why: "Turns the theoretical teardown into a verified, evidence-backed priority list",
            required: false,
            fallback: "Google Sheets defect log alone is enough to start the fix backlog",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored defect list ranking each field by severity, with a specific fix (remove, combine, or defer) for every flagged item.",
      sampleOutput:
        "Chewy Autoship Sign-Up, defect log (excerpt)\n\nCRITICAL: Confirm Email field, duplicate check, remove\nCRITICAL: Password created before any value shown, defer to post-signup\nMODERATE: First/Last Name, combine into Full Name\nMODERATE: 'Submit' button, change to 'Start My Autoship'",
      successCriteria: [
        "Flags both confirmation fields as critical defects",
        "Correctly identifies the dropdown as passing the audit, not a defect",
        "Proposes a concrete fix, not just a complaint, for every flagged field",
      ],
      portfolioReady: true,
    },
    {
      id: "form-optimization-field-audit-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "The Field-by-Field Call: Auditing a Real Signup Form Spec",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real field-by-field spec of a live signup form with per-field abandonment data, apply the lesson's ARTS framework to produce a prioritized fix list ranked by impact.",
      companyId: "chewy",
      scenario:
        "You're the CRO analyst at Chewy reviewing the Autoship subscription signup form after a quarter of flat activation numbers. You have the field list plus per-field abandonment percentages pulled from form analytics.",
      brief:
        "Sequence the fields, flag the ones causing the most measured drop-off, and recommend which move to a post-signup step.",
      mode: "diagnostic",
      conceptsCovered: [
        "Sequencing fields with the foot-in-the-door principle",
        "Prioritizing fixes by per-field abandonment rate",
        "Testing one variable at a time",
      ],
      steps: [
        {
          stepId: "step-1-sequence-audit",
          concept: "Sequencing fields with the foot-in-the-door principle",
          lessonAnchor: "stage-3-sequence",
          theoryRecap:
            "The lesson's Stage 3 says field order matters: easy, low-stakes fields first (name, fastest at 3.5 seconds), sensitive or high-effort fields last.",
          question:
            "This form currently asks for payment card details in field 2, before name or email. Given the abandonment data below, what should field 2 actually be?",
          toolName: "Google Sheets",
          where: "Import the field-order-and-abandonment.csv export, sort by current field position.",
          procedure: [
            "Import the field export and list all 9 fields in their current on-page order",
            "Add the measured per-field abandonment column next to each field",
            "Re-sequence the list so low-effort fields (name, email) come first and payment comes last",
          ],
          outputSample:
            "CURRENT ORDER (abandonment %)\n1. Full Name (2%)\n2. Card Number (14.5%)\n3. Email (6.4%)\n4. Pet Name (3%)\n5. Delivery Frequency (4%)\n\nRECOMMENDED ORDER\n1. Full Name -> 2. Email -> 3. Pet Name -> 4. Delivery Frequency -> 5. Card Number (last)",
          healthy:
            "Payment fields sit at the very end, after the visitor has already invested time in the easier fields.",
          unhealthy:
            "Payment details requested second, before the visitor has any sunk cost in the form, which is exactly where this specimen's 14.5% abandonment spike is happening.",
          interpret:
            "Field order is a psychological lever, not just a layout choice; sequencing the hardest field last uses the visitor's own sunk time as leverage to finish.",
          soWhat: [
            {
              symptom: "Abandonment spikes on a specific field position rather than being spread evenly",
              action: "Move that field later in the sequence and re-measure before touching its copy or design",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-prioritize-fixes",
          concept: "Prioritizing fixes by per-field abandonment rate",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson cites field-level abandonment benchmarks: password 10.5%, address 7.4%, email 6.4%, phone 6.3%. Fields above those benchmarks deserve attention first.",
          question:
            "Of the 9 fields in this spec, 2 exceed even the worst-performing benchmark field type. Which 2, and what's the fix for each?",
          toolName: "Google Sheets",
          where: "Same sheet, add a 'benchmark comparison' column.",
          procedure: [
            "Add a column comparing each field's measured abandonment against the lesson's benchmark table",
            "Flag any field exceeding its benchmark type as high priority",
            "Write one fix recommendation per flagged field",
          ],
          outputSample:
            "FLAGGED (above benchmark)\nCard Number: 14.5% measured vs. no direct benchmark, treat as highest priority\nDelivery Address Line 2: 9.1% measured vs. 7.4% address benchmark, make optional and collapsed by default",
          healthy: "Every field above its category benchmark has a specific, single fix assigned.",
          unhealthy: "Treating all fields equally instead of triaging by which ones are actually bleeding the most conversions.",
          interpret: "Not all friction costs the same; fix the worst-performing fields first, not the easiest to fix.",
          soWhat: [
            {
              symptom: "A field abandonment rate sits well above its category benchmark",
              action: "Treat it as the top-priority fix, ahead of copy or button changes",
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
            role: "Sort, benchmark, and re-sequence the field list",
            why: "Free, sortable, easy to hand off as a prioritized backlog",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar",
            role: "Pull the actual per-field abandonment percentages from form analytics",
            why: "Turns a guess-based audit into a data-backed one",
            required: false,
            fallback: "Use the provided abandonment percentages if no live analytics account is available",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A re-sequenced field order plus a prioritized fix list, ranked by which fields exceed their category benchmark.",
      sampleOutput:
        "FirstCry Newsletter Signup, field audit (excerpt)\n\nRE-SEQUENCE: Move phone number from position 2 to position 5 (after email)\nPRIORITY FIX 1: Password field exceeds 10.5% benchmark at 13%, defer to post-signup\nPRIORITY FIX 2: Address Line 2 exceeds 7.4% benchmark at 8.9%, make optional and collapsed",
      successCriteria: [
        "Correctly re-sequences payment/sensitive fields to the end",
        "Identifies both fields exceeding their category benchmark",
        "Every flagged field has one specific, testable fix, not a vague note",
      ],
      portfolioReady: true,
    },
  ],
  "checkout-optimization": [
    {
      id: "checkout-optimization-lean-spec-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Asset: A Leaner Checkout Field Spec",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a bloated 18-field checkout spec, apply the lesson's field-reduction playbook to build a leaner spec that still fulfills every order requirement.",
      companyId: "firstcry-brainbees",
      scenario:
        "You're the ecommerce PM at FirstCry rebuilding the checkout for the baby-products storefront ahead of a peak sale season. The current checkout has 18 fields and a 68% abandonment rate at the payment step.",
      brief:
        "Cut the field list down to what fulfillment actually requires, decide what becomes optional/collapsed, and specify guest checkout as the default path.",
      mode: "build",
      conceptsCovered: [
        "Reducing form fields to only what fulfillment requires",
        "Guest checkout as the default path",
        "Collapsing optional fields by default",
      ],
      steps: [
        {
          stepId: "step-1-cut-the-field-list",
          concept: "Reducing form fields to only what fulfillment requires",
          lessonAnchor: "step-3----reduce-form-fields",
          theoryRecap:
            "The lesson's Step 3 cites Baymard research: the median checkout asks for 14.88 fields but only needs 8 to fulfill an order. Company name, address line 2, phone (unless used for SMS), duplicate email confirmation, and separate billing address are the common cuts.",
          question:
            "This 18-field FirstCry spec includes company name, a duplicate email field, and a separate billing address block. Which fields survive the cut, and which get removed or made optional?",
          toolName: "Google Sheets",
          where: "List the current 18 fields in one column, mark each KEEP / OPTIONAL / REMOVE in the next.",
          procedure: [
            "List all 18 current fields",
            "Mark REMOVE for anything not needed for a baby-products order (company name, duplicate email)",
            "Mark OPTIONAL/collapsed for address line 2 and phone unless SMS updates are actually used",
            "Replace separate billing address fields with a single 'same as shipping' checkbox",
          ],
          outputSample:
            "KEEP (8): Full Name, Email, Address Line 1, City, State, Zip, Card Number, Expiry+CVV\nOPTIONAL/COLLAPSED (2): Address Line 2, Phone\nREMOVE (8): Company Name, Confirm Email, separate Billing block (5 fields), Fax",
          healthy: "The rebuilt spec lands at 8-10 required fields, matching the lesson's benchmark for top-performing checkouts.",
          unhealthy: "Keeping fields because 'we might need the data,' which is exactly the mistake the lesson calls out as the most common one.",
          interpret: "Every field on a checkout should trace to a specific fulfillment or communication need, not a hypothetical future use.",
          soWhat: [
            {
              symptom: "A checkout spec has more than 10 required fields",
              action: "Run each field through the fulfillment-need test before the next design review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-guest-default",
          concept: "Guest checkout as the default path",
          lessonAnchor: "step-2----collapse-the-flow",
          theoryRecap:
            "The lesson's Step 2 sets a target: guest checkout reachable in 3 clicks or fewer, with account creation offered post-purchase instead of forced upfront.",
          question:
            "The current spec requires account creation before checkout begins. Rewrite the entry flow so guest checkout is the default, and account creation is optional and deferred.",
          toolName: "Google Sheets",
          where: "Same sheet, add a new 'entry flow' section describing the click path.",
          procedure: [
            "Write the current flow: Cart -> Create Account (forced) -> Checkout",
            "Rewrite it: Cart -> Checkout (guest default, 'Create account' link secondary) -> Order confirmed -> optional account creation prompt",
            "Confirm the new flow reaches payment in 3 clicks or fewer from the cart",
          ],
          outputSample:
            "OLD: Cart > Create Account (required, 2 fields + password) > Shipping > Payment (4 clicks minimum)\nNEW: Cart > Checkout (guest, no password) > Payment (2 clicks)",
          healthy: "Guest checkout reaches payment in 2-3 clicks with no forced password creation.",
          unhealthy: "A password field still gates checkout, silently reintroducing the account-creation abandonment the rebuild was meant to fix.",
          interpret: "Account creation is a retention feature, not a purchase requirement, it belongs after the sale, not before it.",
          soWhat: [
            {
              symptom: "Checkout still requires a password field before payment",
              action: "Move account creation to a post-purchase prompt and re-test guest-only checkout",
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
            role: "Draft the field cut list and the new entry-flow spec",
            why: "Free, easy to share with engineering as a build ticket",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Forms",
            role: "Prototype the leaner field order to sanity-check the sequence before handoff",
            why: "Fast way to click through a mock version of the new field order",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A field-by-field KEEP/OPTIONAL/REMOVE spec plus a rewritten guest-default entry flow, ready to hand to engineering as a build ticket.",
      sampleOutput:
        "Instacart Checkout Rebuild Spec (excerpt)\n\nKEEP (7): Full Name, Email, Address, City, State, Zip, Payment\nREMOVE: Fax, Company Name, Confirm Email\nENTRY FLOW: Cart > Guest Checkout > Payment (2 clicks, no password required)",
      successCriteria: [
        "Final required field count lands at 8-10, matching the lesson's benchmark",
        "Guest checkout is specified as the default, not an opt-in link buried in copy",
        "Billing address is a checkbox against shipping, not a duplicate field block",
      ],
      portfolioReady: true,
    },
    {
      id: "checkout-optimization-flow-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Airport Security Line: Tearing Down a Checkout Flow",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a synthetic 6-step checkout flow specimen with per-step drop-off data, identify every friction defect and map each to a specific fix, using the lesson's decision tree.",
      companyId: "thredup",
      scenario:
        "You're the CRO lead at ThredUp reviewing why the resale checkout flow loses 70% of carts. You have a step-by-step flow specimen with drop-off percentages at each node.",
      brief:
        "Walk the flow node by node. For each drop-off point, name the defect, its severity, and the specific fix from the lesson's playbook.",
      mode: "teardown",
      conceptsCovered: [
        "Revealing shipping cost before the final step",
        "Removing forced account creation",
        "Supporting the buyer's preferred payment method",
        "Recovering abandoned carts with timed follow-up",
      ],
      teardownItems: [
        {
          itemId: "teardown-1-checkout-flow",
          specimen:
            "ThredUp Checkout Flow (specimen, synthetic)\n\nStep 1: View Cart (100 visitors)\nStep 2: Click 'Checkout' (70 continue, 30% exit, no shipping cost shown yet)\nStep 3: Create Account screen, required, no guest option (52 continue, 25.7% exit)\nStep 4: Shipping cost revealed for the first time ($8.99, surprise) (44 continue, 15.4% exit)\nStep 5: Payment page, credit card only, no PayPal or digital wallet (39 continue, 11.4% exit)\nStep 6: Order confirmed (36 complete)",
          specimenSource: "synthetic-realistic",
          prompt:
            "This flow loses 64% of visitors between cart and confirmation. Identify the defect at each drop-off node and the specific fix.",
          answerKey: [
            {
              defect: "Shipping cost not shown until Step 4, deep into the flow",
              severity: "critical",
              whyItMatters:
                "The lesson identifies shipping-cost reveal as often the single largest abandonment spike; showing it on the product page or cart instead removes the surprise entirely.",
              lessonRef: "step-1----audit-your-drop-off-points",
              owner: "developer",
            },
            {
              defect: "Forced account creation at Step 3 with no guest option",
              severity: "critical",
              whyItMatters:
                "Over 23% of buyers abandon when they cannot check out as a guest per the lesson's Baymard citation; this flow makes it mandatory, not optional.",
              lessonRef: "step-2----collapse-the-flow",
              owner: "developer",
            },
            {
              defect: "Credit card as the only payment method at Step 5",
              severity: "moderate",
              whyItMatters:
                "The lesson notes that defaulting to credit-card-only loses entire audience segments who expect PayPal, digital wallets, or region-specific methods.",
              lessonRef: "step-4----add-express-payment-options",
              owner: "developer",
            },
            {
              defect: "No abandoned-cart recovery step captured after any of the three exit points",
              severity: "moderate",
              whyItMatters:
                "The lesson shows a 3-email sequence starting within 30 minutes recovers 18-26% of abandoners; this flow has no recovery mechanism visible at all.",
              lessonRef: "step-5----recover-abandoned-carts",
              owner: "either",
            },
          ],
          distractors: [
            "Step 6, Order confirmed page shown after payment succeeds, this is the correct final state and not a defect",
            "Step 1, View Cart with 100 starting visitors, the volume itself is not a defect, it's the baseline",
            "Step 5, Payment page existing at all, a payment step is required to complete any order and is not itself a defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect with severity and the matching fix from the playbook",
            why: "Simple structured output that hands off cleanly to a dev ticket queue",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar",
            role: "Watch session recordings at each drop-off node to confirm the diagnosed defect before it becomes a dev ticket",
            why: "Confirms the teardown's guesses against real visitor behavior before engineering time is spent",
            required: false,
            fallback: "GA4 funnel exploration can substitute for confirming step-by-step drop-off rates",
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull the real per-step funnel drop-off rates for the live checkout",
            why: "Replaces the synthetic specimen's numbers with the store's actual funnel data",
            required: false,
            fallback: "Use the specimen's provided percentages if GA4 access isn't available",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A defect log mapping each drop-off node to a severity rating and a specific, actionable fix, ordered by exit-rate size.",
      sampleOutput:
        "Chewy Checkout Teardown (excerpt)\n\nCRITICAL: Shipping cost hidden until page 3, move to cart page\nCRITICAL: Account creation forced, add guest checkout as default\nMODERATE: No PayPal option, add express payment methods",
      successCriteria: [
        "Correctly ranks the shipping-cost reveal and forced account creation as the two most critical defects",
        "Every flagged defect has one specific, testable fix",
        "Does not flag Step 6 (order confirmation) or the payment step's existence as defects",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the teardown against the flow's mobile version and note which defects get worse on a small screen.",
    },
  ],

  "friction-audit": [
    {
      id: "friction-audit-checkout-funnel-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Priority Call: Auditing YETI's Checkout Drop-off Data",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a mapped 5-step checkout funnel with drop-off percentages and raw user counts, apply the lesson's data-plus-effort framework to identify the single highest-priority friction point to fix first.",
      companyId: "yeti",
      scenario:
        "You're the CRO analyst at YETI ahead of a holiday traffic push. Paid traffic is up 40% quarter over quarter but checkout conversion hasn't moved, so leadership wants to know exactly where the funnel is leaking before spend increases further.",
      brief:
        "Pull the drop-off numbers, rank by absolute users lost (not just percentage), then score the top candidate on severity versus ease of fixing before recommending what ships first.",
      mode: "diagnostic",
      conceptsCovered: ["Pull Drop-off Data", "Prioritize by Impact and Effort"],
      steps: [
        {
          stepId: "step-1-pull-dropoff-data",
          concept: "Pull Drop-off Data",
          lessonAnchor: "step-2-pull-drop-off-data",
          theoryRecap:
            "The lesson's Step 2 says to sort funnel steps by absolute number of exits, not just percentage, because a step losing 5,000 users at 30% matters more than one losing 50 users at 60%.",
          question:
            "This 5-step checkout funnel has one step with a middling 24% drop-off but the highest raw user loss of any step. Which step gets flagged first?",
          toolName: "Google Sheets",
          where: "Import the funnel export, freeze the header row, add a column for absolute users lost.",
          procedure: [
            "Import checkout-funnel-export.csv and freeze row 1",
            "Add a column: users_lost = entered - completed for each step",
            "Sort descending by users_lost, not by drop-off percentage",
            "Flag the top row as the priority candidate for Step 2's deeper investigation",
          ],
          outputSample:
            "Step               Entered   Completed   Drop-off %   Users Lost\nCart Review         18,400     16,100        12.5%         2,300\nShipping Info        16,100     11,600        27.9%         4,500\nPayment Info         11,600      8,800        24.1%         2,800\nReview & Confirm      8,800      8,100         8.0%           700\nOrder Confirmation    8,100      7,950         1.9%           150",
          healthy:
            "The team flags Shipping Info first, it has the second-highest percentage but the largest raw user loss by far (4,500).",
          unhealthy:
            "The team flags Payment Info first because 24.1% sounds more alarming in a slide than 27.9% attached to a step nobody scrutinized.",
          interpret:
            "Percentage alone hides scale. A step that loses fewer people at a higher rate can still matter less in absolute revenue terms than a bigger step with a lower rate.",
          soWhat: [
            {
              symptom: "The funnel report is sorted by drop-off percentage by default",
              action: "Re-sort by absolute users lost before presenting priorities to stakeholders",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-prioritize-by-impact-effort",
          concept: "Prioritize by Impact and Effort",
          lessonAnchor: "step-6-prioritize-by-impact-and-effort",
          theoryRecap:
            "The lesson's Step 6 scores each friction point on severity and ease of fixing, then plots them on a 2x2 grid: high severity/easy fix ships immediately.",
          question:
            "Shipping Info's drop-off is traced to a required 'Company Name' field that confuses users into entering it in the wrong place, and a shipping cost that only appears one screen later. Which fix ships first?",
          toolName: "Google Sheets",
          where: "Same sheet, add severity (1-5) and effort (1-5) columns, then plot a quadrant chart.",
          procedure: [
            "Score each candidate fix on severity: how many users it affects",
            "Score each candidate fix on effort: 1 (copy/config change) to 5 (backend rebuild)",
            "Removing the optional Company Name field scores severity 4, effort 1",
            "Surfacing shipping cost earlier scores severity 4, effort 3 (requires a pricing API call earlier in the flow)",
          ],
          outputSample:
            "Fix                              Severity   Effort   Quadrant\nRemove Company Name field            4          1      Do now\nSurface shipping cost earlier         4          3      Schedule\nAdd trust badges near payment         2          1      Batch\nRedesign shipping form layout         2          4      Skip for now",
          healthy:
            "Remove the Company Name field this sprint, it's the highest-severity, lowest-effort item on the grid. Schedule the shipping-cost fix for the next sprint since it needs engineering time.",
          unhealthy:
            "Starting with the shipping form redesign because it 'looks the most broken,' while the one-line field removal sits in the backlog untouched.",
          interpret:
            "The 2x2 grid exists specifically to stop teams from chasing the most visually broken thing instead of the fix with the best return for the effort spent.",
          soWhat: [
            {
              symptom: "Multiple friction fixes are proposed with no clear order",
              action: "Score each on severity and effort, ship the high-severity/low-effort ones first",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Sort funnel data by absolute drop-off and build the severity/effort scoring grid",
            why: "Free, no account friction, and every marketer already has access",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A prioritized friction fix list with severity and effort scores, plus a written recommendation for what ships this sprint versus what gets scheduled.",
      sampleOutput:
        "Rent the Runway, checkout funnel priority call (excerpt)\n\nDO NOW: Remove the mandatory 'Referral Code' field default-showing an error state (severity 4, effort 1)\nSCHEDULE: Add a persistent order-total summary sidebar (severity 3, effort 3)\nSKIP: Rebuild the size-selector UI (severity 2, effort 5)",
      successCriteria: [
        "Sorts the funnel by absolute users lost, not percentage alone",
        "Correctly scores at least one fix as high-severity/low-effort and recommends it first",
      ],
      portfolioReady: true,
    },
    {
      id: "friction-audit-session-recording-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Signal or Noise: Tearing Down Zomato Session Recording Notes",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 5 anonymized session-recording notes from a food-delivery checkout flow, distinguish real friction signals (rage clicks, hesitation, scroll-backs) from normal browsing behavior, per the lesson's Step 3 framework.",
      companyId: "zomato",
      scenario:
        "You're reviewing a batch of Hotjar session recordings for Zomato's restaurant-checkout flow after a spike in cart abandonment on the payment step.",
      brief:
        "Read each session note, tag it as a real friction signal or normal behavior, and write the specific fix each real signal points to.",
      mode: "diagnostic",
      conceptsCovered: ["Watch Session Recordings"],
      steps: [
        {
          stepId: "step-1-teardown-session-notes",
          concept: "Watch Session Recordings",
          lessonAnchor: "step-3-watch-session-recordings",
          theoryRecap:
            "The lesson's Step 3 lists specific signals to watch for in recordings: rage clicks, repeated scroll-backs, hesitation before a form field, and cursor hovering over the exit button.",
          question:
            "Of these 5 session notes, which ones are real friction signals and which are just normal, unremarkable browsing?",
          toolName: "Hotjar",
          where: "Session recordings library, filtered to the payment step, sorted by duration.",
          procedure: [
            "Read all 5 session notes end to end before tagging any",
            "Tag each as SIGNAL (matches a Step 3 friction pattern) or NOISE (normal behavior)",
            "For each SIGNAL, name the specific pattern it matches and the fix it points to",
          ],
          outputSample:
            "Session 1: User clicks the 'Apply Coupon' button 7 times in 4 seconds after it visibly greys out. Duration 38s.\nSession 2: User scrolls the payment page top-to-bottom twice, pauses 12s on the delivery-fee line, then closes tab.\nSession 3: User reads menu, adds 2 items, checks out normally in 90s, no unusual behavior.\nSession 4: User hovers over the browser back button for 6s while the address field is empty, then fills it and continues.\nSession 5: User scrolls smoothly through the order summary once, taps 'Place Order', done in 45s.",
          healthy:
            "Sessions 1, 2, and 4 get tagged SIGNAL: rage click on a dead button, hesitation over an unexplained fee, and cursor-toward-exit while stuck on a required field. Sessions 3 and 5 get tagged NOISE.",
          unhealthy:
            "Tagging all 5 sessions as friction because the reviewer assumes every recording in the 'high drop-off' segment must show a problem.",
          interpret:
            "Most sessions in any drop-off segment are unremarkable. The audit's value comes from correctly separating the few real signals from the majority of normal browsing, not from finding a problem in every recording.",
          soWhat: [
            {
              symptom: "The 'Apply Coupon' button greys out with no explanation while still appearing clickable",
              action: "Add a disabled visual state and inline message explaining why the button is inactive",
              effort: "5 min",
            },
            {
              symptom: "Users hesitate on the delivery-fee line before abandoning",
              action: "Surface the delivery fee earlier in the flow, before the payment step",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Hotjar",
            role: "Watch and tag session recordings for rage clicks, hesitation, and scroll-back patterns",
            why: "Free tier includes session recordings and heatmaps, sufficient for a single funnel audit",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each session's tag (SIGNAL/NOISE), matched pattern, and recommended fix",
            why: "Keeps the friction inventory in one shareable place",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tagged inventory of all 5 sessions (SIGNAL or NOISE), with the matched friction pattern and a specific fix for each real signal.",
      sampleOutput:
        "YETI, payment-step session review (excerpt)\n\nSIGNAL: Session 3, rage click on 'Continue' button during a 2s page freeze. Fix: investigate page load performance on that step.\nNOISE: Session 7, normal 60s checkout with no unusual scroll or click patterns.",
      successCriteria: [
        "Correctly separates real friction signals from normal browsing across the 5 sessions",
        "Each SIGNAL is tied to a specific fix, not a vague 'improve UX' recommendation",
      ],
      portfolioReady: false,
    },
  ],
  "exit-intent": [
    {
      id: "exit-intent-segmented-popup-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Offer: A Segmented Exit-Intent Popup for MVMT",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given 3 visitor segments (cart abandoner, blog reader, pricing-page browser), write a matched exit-intent offer, headline, and trigger rule for each, per the lesson's Stage 2 and Stage 3 framework.",
      companyId: "mvmt-watches",
      scenario:
        "You're setting up exit-intent for MVMT's site ahead of a sale. Marketing wants one popup live within the week, but a single generic offer would waste it on visitors who are nowhere near ready to buy.",
      brief:
        "Match each segment's likely exit reason to a specific offer, write the headline, and set the trigger delay and frequency cap for each.",
      mode: "build",
      conceptsCovered: ["Segmentation", "The Offer"],
      steps: [
        {
          stepId: "step-1-build-segmented-offers",
          concept: "Segmentation",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Stage 2 says segmentation is where most of the performance gain lives: a cart abandoner over $50 sees a free shipping offer, a blog reader sees a content upgrade, a pricing-page visitor sees a trial prompt.",
          question:
            "Given these 3 segments, what offer and headline does each get, and does a generic '10% off' popup fit any of them?",
          toolName: "Google Sheets",
          where: "Build a 3-row segment-to-offer mapping table before writing any popup copy.",
          procedure: [
            "List each segment: cart value, page type, time on page",
            "Match each to the exit reason it most likely reflects (per Stage 3's list)",
            "Write one headline and one offer per segment, no shared generic offer",
            "Set a trigger delay (minimum 30-60s per the lesson's Common Mistake #2) and a frequency cap for each",
          ],
          outputSample:
            "Segment: Cart abandoner, $85 cart, 90s on checkout page\nOffer: Free shipping on this order\nHeadline: 'Your order qualifies for free shipping, don't leave it behind'\nTrigger: 45s delay, cap 1x per 30 days\n\nSegment: Blog reader, no product page visited\nOffer: Downloadable buying guide (PDF)\nHeadline: 'Not ready to buy? Grab our watch-sizing guide first'\nTrigger: 60s delay, cap 1x per 30 days\n\nSegment: Pricing/product page, 3+ minutes, no cart\nOffer: 10% first-order discount code\nHeadline: 'Still deciding? Here's 10% to help'\nTrigger: 30s delay, cap 1x per 14 days",
          healthy:
            "Three distinct offers, each tied to a specific exit reason, each with its own trigger timing and frequency cap.",
          unhealthy:
            "One 'Wait! 10% off!' popup fired identically at all three segments the moment the mouse moves toward the tab bar.",
          interpret:
            "The offer has to answer the specific reason that segment is about to leave. A discount does nothing for a blog reader who was never close to buying.",
          soWhat: [
            {
              symptom: "The current exit popup shows the same offer on every page",
              action: "Split the popup config by page type and cart status before the next campaign launch",
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
            role: "Map segments to offers, headlines, and trigger rules before building in the popup tool",
            why: "Free, forces the offer-matching decision before any design work starts",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 3-row segment-to-offer table with headline, offer, trigger delay, and frequency cap for each of the 3 visitor segments.",
      sampleOutput:
        "Rent the Runway, exit-intent segment map (excerpt)\n\nSegment: Cart abandoner, dress in cart, 60s on page\nOffer: Extend rental to Sunday delivery, free\nHeadline: 'One more thing before you go, free date-flex on this rental'\nTrigger: 40s delay, cap 1x per 30 days",
      successCriteria: [
        "Each of the 3 segments gets a distinct offer tied to its likely exit reason",
        "No segment receives a generic, un-matched discount offer",
        "Trigger delay is at least 30 seconds per segment",
      ],
      portfolioReady: true,
    },
    {
      id: "exit-intent-recovery-revenue-forecast",
      tier: "core",
      archetype: "forecast",
      title: "The Math Behind the Popup: Forecasting Recovery Revenue for Rent the Runway",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given real traffic and abandonment numbers plus the lesson's published conversion benchmarks, forecast the revenue difference between a generic exit popup and a segmented, cart-specific one, and recommend which to build first.",
      companyId: "rent-the-runway",
      scenario:
        "Rent the Runway's growth team is deciding whether to invest engineering time in segmented exit-intent popups or ship a single generic popup this quarter. You've been asked to model the revenue difference before the roadmap gets locked.",
      brief:
        "Use the lesson's benchmark conversion rates for generic versus cart-specific exit popups to forecast monthly recovered revenue under both scenarios, then recommend one.",
      mode: "diagnostic",
      conceptsCovered: ["Detection", "Capture"],
      steps: [
        {
          stepId: "step-1-forecast-generic-vs-segmented",
          concept: "Detection",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson's data section reports a general exit-intent conversion rate of 2.81% to 3.94%, while cart-specific exit popups convert at 17.12% (OptiMonk, 2025), more than six times higher.",
          question:
            "Rent the Runway has 4,000 daily visitors who add an item to cart and then show exit-intent signals, with an average order value of $95. What is the monthly revenue difference between a generic popup and a cart-specific one, using the lesson's benchmark rates?",
          toolName: "Google Sheets",
          where: "Build a simple forecast model: daily exit-intent visitors x conversion rate x AOV x 30 days.",
          procedure: [
            "Generic scenario: 4,000 x 2.81% = 112 recovered/day x $95 AOV x 30 days",
            "Cart-specific scenario: 4,000 x 17.12% = 685 recovered/day x $95 AOV x 30 days",
            "Calculate the monthly revenue for each scenario and the delta between them",
          ],
          outputSample:
            "Generic exit popup:      112/day  x $95 x 30 = $319,200/month\nCart-specific popup:      685/day  x $95 x 30 = $1,952,250/month\nMonthly delta:                                  $1,633,050",
          healthy:
            "The forecast shows a large enough delta that the recommendation is to build the cart-specific, segmented version even though it takes more engineering time.",
          unhealthy:
            "Recommending the generic popup because it ships one sprint faster, without ever running the revenue math to see what that speed costs.",
          interpret:
            "A conversion-rate gap this large compounds fast at scale. The forecast turns an abstract 'segmentation is better' claim into a specific dollar number leadership can weigh against engineering cost.",
          soWhat: [
            {
              symptom: "The roadmap defaults to the fastest-to-ship popup version",
              action: "Attach a revenue forecast to each option before prioritization, not after",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-form-length",
          concept: "Capture",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Stage 4 cites Popupsmart's 2025 benchmark: 2-field forms convert at 5.1% while 4-field forms convert at 8.6%, with conversion dropping sharply past 6 fields.",
          question:
            "The proposed cart-specific popup currently asks for name, email, phone, and a marketing-consent checkbox, 4 fields. Does the benchmark data support keeping all 4, or cutting to 2?",
          toolName: "Google Sheets",
          where: "Add a second forecast row comparing the 2-field and 4-field capture-rate benchmarks.",
          procedure: [
            "Note that 4-field forms outperform 2-field forms in the cited benchmark (8.6% vs 5.1%)",
            "Cross-check whether phone number is actually needed for the immediate use case (email confirmation of the discount)",
            "Recommend keeping the fields that both match the benchmark's better-performing configuration and serve a real downstream need",
          ],
          outputSample:
            "2-field (email, consent):   5.1% capture rate\n4-field (name, email, phone, consent): 8.6% capture rate\nRecommendation: keep 4 fields, the benchmark favors it and phone enables SMS follow-up",
          healthy:
            "The team keeps 4 fields because the data, not an assumption that 'shorter is always better,' supports it.",
          unhealthy:
            "Cutting the form to 2 fields by default because 'fewer fields' sounds like standard CRO wisdom, without checking what the benchmark for this specific case actually shows.",
          interpret:
            "Form length isn't a universal rule, it depends on what the extra fields unlock. The lesson's own benchmark shows 4 fields outperforming 2 here.",
          soWhat: [
            {
              symptom: "A 'shorten every form' policy is being applied without checking benchmark data for the specific case",
              action: "Check the relevant conversion benchmark before defaulting to the shortest possible form",
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
            role: "Build the revenue forecast model comparing generic and segmented exit-intent scenarios",
            why: "Free, sufficient for a straightforward multiplication-based forecast",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "VWO",
            role: "Run the actual A/B test between generic and segmented popups once the forecast justifies building both",
            why: "Full-stack experimentation platform with built-in significance calculation for validating the forecast against real results",
            required: false,
            fallback: "Google Sheets can track a manual before/after comparison if a dedicated testing tool isn't available yet",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A monthly revenue forecast comparing generic versus cart-specific exit popups, plus a form-length recommendation, with a final build recommendation for the roadmap.",
      sampleOutput:
        "MVMT, exit-intent revenue forecast (excerpt)\n\nGeneric popup: 2,000 visitors/day x 2.81% x $70 AOV x 30 = $118,020/month\nCart-specific: 2,000 visitors/day x 17.12% x $70 AOV x 30 = $718,720/month\nRecommendation: build the cart-specific version first, delta justifies the extra sprint",
      successCriteria: [
        "Correctly calculates monthly recovered revenue for both scenarios using the lesson's benchmark rates",
        "Recommendation is backed by the calculated dollar delta, not a general preference",
        "Form-length recommendation cites the specific benchmark numbers rather than a generic 'shorter is better' rule",
      ],
      portfolioReady: true,
    },
  ],

  "trust-signals": [
    {
      id: "trust-signals-anxiety-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which Anxiety Is This Page Failing to Answer?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real product page, map every visible trust signal against the 5 buyer anxieties from the lesson and flag which anxieties have no answer at all.",
      companyId: "policybazaar",
      scenario:
        "You're a CRO analyst at PolicyBazaar reviewing a term-insurance comparison page ahead of a paid traffic push. Leadership wants to know why quote-to-purchase conversion lags the category average before spending more on ads.",
      brief:
        "Score the page against the lesson's anxiety-to-signal table, then rank the gaps by how early in the funnel they occur.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching the trust signal to the specific anxiety",
        "Placing signals where decisions happen, not in the footer",
      ],
      steps: [
        {
          stepId: "step-1-anxiety-map",
          concept: "Matching the trust signal to the specific anxiety",
          lessonAnchor: "step-2-match-signal-to-anxiety",
          theoryRecap:
            "The lesson's anxiety table pairs 5 buyer questions (is this real, is payment safe, will I regret this, are others buying, is this right for me) with the one signal type that actually resolves each one.",
          question:
            "This term-insurance page shows an IRDAI registration number in the footer, a 4.3-star app rating badge near the hero, and nothing else. Which 2 of the 5 anxieties are completely unanswered?",
          toolName: "Google Sheets",
          where: "Build a 5-row anxiety table with columns: Anxiety, Signal Present?, Location, Verdict.",
          procedure: [
            "List all 5 anxieties from the lesson as rows in column A",
            "Screenshot or note every trust element currently on the page and place each in the row of the anxiety it addresses",
            "Mark any row with no matching element as a gap",
            "Sort gaps by funnel stage, hero section gaps outrank checkout-page gaps for a page with no cart yet",
          ],
          outputSample:
            "ANXIETY MAP\nIs this site real?        4.3-star app badge (hero)     COVERED\nWill payment be safe?     none                          GAP\nWill I regret this?      none                          GAP\nAre others buying?       none                          GAP\nIs this right for me?    comparison table (mid-page)   COVERED",
          healthy:
            "Every anxiety has at least one signal, and payment/regret signals sit near the CTA, not just in the footer.",
          unhealthy:
            "3 of 5 anxieties are unanswered anywhere on the page, and the one covered anxiety is answered twice while others get nothing.",
          interpret:
            "A page can look trustworthy at a glance (one good badge) while leaving the anxieties that actually block conversion, payment safety and regret, completely unaddressed.",
          soWhat: [
            {
              symptom: "Payment-safety anxiety has zero signals anywhere on the page",
              action: "Add a payment-logo strip and a data-privacy line directly above the quote-request form",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-placement-check",
          concept: "Placing signals where decisions happen, not in the footer",
          lessonAnchor: "step-3-place-signals-where-decisions-happen",
          theoryRecap:
            "A trust signal that exists on the page but sits in the footer or an About page is functionally invisible, placement within the decision zone (near the CTA, on the form) is what makes it work.",
          question:
            "The page's only guarantee statement ('claims settled fairly') lives in a footer link labeled 'Legal.' Is this signal doing any work?",
          toolName: "Google Sheets",
          where: "Add a 'Distance from nearest CTA' column to the anxiety table from Step 1.",
          procedure: [
            "For every COVERED row, note how many scrolls or clicks separate the signal from the nearest CTA button",
            "Flag any signal more than 1 scroll away from a CTA as effectively invisible",
            "Recommend a new location within the decision zone for each flagged signal",
          ],
          outputSample:
            "PLACEMENT CHECK\nGuarantee statement   Footer 'Legal' link   4 scrolls from CTA   INVISIBLE\n  -> Move to: directly under the quote-request button",
          healthy: "Every covered anxiety's signal sits within one scroll of the decision point it's meant to support.",
          unhealthy: "The only guarantee on the page requires a dedicated click to a legal page to even find.",
          interpret:
            "A real, accurate guarantee that nobody sees converts exactly as well as no guarantee at all.",
          soWhat: [
            {
              symptom: "Guarantee language exists but only on a footer legal page",
              action: "Duplicate a plain-language version of the guarantee directly beneath the primary CTA",
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
            role: "Build the anxiety-to-signal map and placement audit table",
            why: "Free, no account friction, sortable columns make gap-ranking fast",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-row anxiety map with placement distances and a ranked list of the top 2 gaps to fix before the next paid traffic push.",
      sampleOutput:
        "Coinbase, quick anxiety scan (excerpt)\n\nIs payment safe?   SSL padlock only, no visible badge near funding form   PARTIAL\nAre others buying? 'Trusted by 100M+ users' in hero               COVERED, well-placed",
      successCriteria: [
        "Correctly identifies at least 2 unanswered anxieties",
        "Flags any signal sitting more than one scroll from its relevant CTA",
      ],
      portfolioReady: true,
    },
    {
      id: "trust-signals-checkout-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: The Checkout Page That Looks Secure but Isn't",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic checkout-page specimen, identify which trust elements are genuine signals and which are cosmetic or actively risky, using the lesson's Common Mistakes list.",
      companyId: "coinbase",
      scenario:
        "You're reviewing a funding-page mockup for Coinbase's crypto-purchase flow before it ships, modeled on patterns the lesson flags as common mistakes.",
      brief: "Sort each element into real signal, cosmetic clutter, or active risk, and justify each call against the lesson.",
      mode: "teardown",
      conceptsCovered: [
        "Borrowed credibility vs. self-claimed credibility",
        "Security seals without SSL, and other common mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-badge-cluster",
          specimen:
            "Funding-page mockup, synthetic: a row of 11 security and payment badges (SSL, PCI, Visa, Mastercard, Norton, McAfee, BBB, TRUSTe, GDPR, ISO, 'Verified Merchant') stacked in a single dense row above the card-entry form, each badge roughly 24px tall.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Sort every element on this specimen into: real signal, cosmetic clutter, or active risk. Justify each call in one sentence citing the lesson.",
          answerKey: [
            {
              defect: "11 badges crammed into one row above the form",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistake #1: a row of 12+ badges reads as a scam site from 2009 and signals anxiety rather than authority; 2-3 relevant signals with space around them work better than a wall of logos.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "No visible active-SSL indicator (padlock/https) anywhere near the card field itself",
              severity: "critical",
              whyItMatters:
                "Baymard's checkout research (cited in the lesson) found users specifically look for a badge near the card field, not a generic row above it, badges alone don't substitute for a visible security indicator at the input.",
              lessonRef: "step-3-place-signals-where-decisions-happen",
              owner: "developer",
            },
          ],
          distractors: [
            "The Visa and Mastercard logos are present (these are legitimate, expected payment-method indicators, not a defect)",
            "The row uses brand-accurate badge artwork (correct implementation detail, not itself a trust problem)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-buried-guarantee",
          specimen:
            "Below the funding form, small gray text reads: 'Funds protection details available in our Terms of Service (link).' No other guarantee or protection language appears on the page.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this guarantee doing any conversion work? What's the fix?",
          answerKey: [
            {
              defect: "Guarantee/protection language buried in a ToS link instead of stated in plain language on the page",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistake #3: a guarantee hidden behind a click to a legal document is functionally not a trust signal, it must be stated plainly at the decision point.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The text is gray instead of black (a minor cosmetic-severity styling choice, not the actual defect being tested here)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Hotjar",
            role: "Confirm where real users hesitate on the live checkout page before prioritizing which defect to fix first",
            why: "Free plan captures enough session recordings to validate whether the badge row or the buried guarantee is the bigger drop-off driver",
            required: false,
            fallback: "Skip and prioritize by severity rating alone if no analytics tool is available",
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each specimen element with its severity and fix recommendation",
            why: "Free, sortable by severity for a quick fix-priority list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A defect log sorting every specimen element into real signal / cosmetic clutter / active risk, with one fix per defect.",
      sampleOutput:
        "PolicyBazaar funding-page teardown (excerpt)\n\nDEFECT: Guarantee text sized 10px, gray-on-white, placed below fold\nSEVERITY: moderate\nFIX: Restate at 14px, near the CTA, in plain language",
      successCriteria: [
        "Correctly separates real signals from cosmetic clutter for both items",
        "Cites the specific lesson section supporting each defect call",
      ],
      portfolioReady: true,
    },
  ],
  "urgency-design": [
    {
      id: "urgency-email-compliance-audit",
      tier: "mini",
      archetype: "audit",
      title: "Real Deadline or Regulatory Risk? Auditing an Urgency Email Flow",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a 4-email urgency sequence, classify each urgency claim as verifiable, ambiguous, or a 2024-2025 regulatory red flag using the lesson's implementation checklists.",
      companyId: "klaviyo",
      scenario:
        "You're auditing a Klaviyo-built cart-abandonment and flash-sale email flow for a DTC brand client ahead of a UK and EU send, where dark-pattern enforcement is now an active priority.",
      brief: "Classify each urgency claim and flag anything that would fail the lesson's countdown-timer or stock-count checklists.",
      mode: "diagnostic",
      conceptsCovered: [
        "Time-based urgency, inventory-based scarcity, and social urgency",
        "Regulatory enforcement of fabricated urgency and dark patterns",
      ],
      steps: [
        {
          stepId: "step-1-classify-claims",
          concept: "Time-based urgency, inventory-based scarcity, and social urgency",
          lessonAnchor: "types-of-urgency-and-scarcity-signals",
          theoryRecap:
            "The lesson splits urgency into 4 types, time-based, inventory-based, access-based, and social, and each type is only legitimate when the underlying number or deadline is real and verifiable.",
          question:
            "Email 2 of this flow says '47 people are viewing this deal right now' with no dynamic data source cited in the campaign brief. Email 3 says 'Sale ends Friday 11:59 PM PST.' Which claim can you verify is real from the brief alone, and which can't you?",
          toolName: "Google Sheets",
          where: "Build a 4-row table: Email #, Claim Type, Claim Text, Verifiable From Brief? (Y/N).",
          procedure: [
            "Extract every urgency or scarcity claim from all 4 emails into rows",
            "Classify each by type (time / inventory / access / social)",
            "Check the campaign brief for a data source backing each claim",
            "Mark unverifiable claims for follow-up with the client before send",
          ],
          outputSample:
            "CLAIM AUDIT\nEmail 2   Social    '47 viewing now'         NO data source in brief   FLAG\nEmail 3   Time      'Ends Fri 11:59 PM PST'  Tied to real price change  OK",
          healthy: "Every claim in the sequence maps to a real, briefed data source or event.",
          unhealthy: "A live-looking viewer count exists with no explanation of where the number comes from.",
          interpret:
            "An email can look identical whether the number behind it is real or invented, the brief is the only place that distinction is checkable before send.",
          soWhat: [
            {
              symptom: "A social-proof number has no cited data source",
              action: "Ask the client for the analytics integration powering the count, or remove the claim before sending",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-regulatory-check",
          concept: "Regulatory enforcement of fabricated urgency and dark patterns",
          lessonAnchor: "regulatory-landscape-2024-2025",
          theoryRecap:
            "UK CMA guidance and multiple 2024-2025 enforcement actions specifically target resetting countdown timers and unverifiable urgency claims as per se violations, not just bad practice.",
          question:
            "Email 4 contains a countdown timer image that visually resets to 24:00:00 every time the subscriber reopens the email. Is this a compliance risk for a UK send?",
          toolName: "Google Sheets",
          where: "Add a 'Regulatory Risk' column to the claim table from Step 1.",
          procedure: [
            "For each timer or deadline claim, check whether it resets on reopen or refresh",
            "Mark any resetting timer as a named UK CMA / FTC enforcement target",
            "Recommend a server-side, non-resetting timestamp as the fix",
          ],
          outputSample: "REGULATORY CHECK\nEmail 4 timer   Resets on every reopen   HIGH RISK, named UK CMA target",
          healthy: "All deadline claims are tied to one fixed timestamp shown identically to every recipient.",
          unhealthy: "A timer resets per-open, giving each subscriber a different, fabricated deadline.",
          interpret:
            "A resetting timer isn't just a weaker trust signal, it is now the specific pattern regulators are actively enforcing against.",
          soWhat: [
            {
              symptom: "Countdown image resets on every email reopen",
              action: "Replace with a server-generated countdown tied to one fixed send-wide deadline before the UK send goes out",
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
            role: "Build the claim classification and regulatory-risk audit table",
            why: "Free, sortable columns make it fast to isolate every unverifiable or resetting claim before send",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A classified claim table flagging every unverifiable or non-compliant urgency element in the 4-email sequence.",
      sampleOutput:
        "Robinhood, waitlist email urgency scan (excerpt)\n\nCLAIM: 'Only 500 founder spots left'\nTYPE: Access-based\nVERIFIABLE: Yes, tied to real referral-queue count\nRISK: None, matches lesson's honest access-scarcity pattern",
      successCriteria: [
        "Correctly classifies all 4 claims by urgency type",
        "Flags the resetting timer as a named regulatory risk, not just a UX weakness",
      ],
      portfolioReady: true,
    },
    {
      id: "urgency-landing-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: The Countdown Timer That Resets on Refresh",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a synthetic landing-page specimen with 4 urgency elements, identify which are honest, which are fabricated, and which cross into active regulatory risk, with full defect writeups and partial credit for correct severity calls.",
      companyId: "robinhood",
      scenario:
        "You're reviewing a trading-app landing page mockup, styled after patterns similar to a Robinhood-style promo, before its EU launch, checking every urgency element against the lesson's 2024-2025 enforcement landscape.",
      brief: "Score all 4 elements for authenticity and regulatory risk, then write the fix for each defect found.",
      mode: "teardown",
      conceptsCovered: [
        "Time-based urgency, inventory-based scarcity, and social urgency",
        "Regulatory enforcement of fabricated urgency and dark patterns",
        "Implementation mechanics: server-side timestamps and live inventory",
      ],
      teardownItems: [
        {
          itemId: "item-1-resetting-timer",
          specimen:
            "Landing-page hero, synthetic: 'Sign up in the next 23:59:47 to get a free stock' with a live countdown. Refreshing the page in a screen-recording shows the timer restart at 23:59:59 each time.",
          specimenSource: "synthetic-realistic",
          prompt: "Classify this element: honest urgency, fabricated urgency, or regulatory-risk urgency? Justify and cite the fix.",
          answerKey: [
            {
              defect: "Countdown timer resets to a fresh 24-hour window on every page refresh",
              severity: "critical",
              whyItMatters:
                "The lesson names resetting timers as an explicit per se violation under active UK CMA guidance and FTC scrutiny, this is the single most-targeted urgency pattern in current enforcement, not a minor UX flaw.",
              lessonRef: "regulatory-landscape-2024-2025",
              owner: "developer",
            },
          ],
          distractors: [
            "The timer uses red text for urgency (a styling choice, not the defect being tested)",
            "The free-stock offer itself is generous (the offer's value has nothing to do with the timer's legality)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-vague-copy",
          specimen: "Below the timer: 'Limited time offer, don't miss out!' with no date, time, or timezone specified anywhere on the page.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this copy an urgency signal or noise? What's the fix?",
          answerKey: [
            {
              defect: "Generic 'limited time' copy with no specific deadline, date, or timezone",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistake #2: overused generic urgency copy registers as noise, not information, specific deadlines with a timezone are what actually move buyers.",
              lessonRef: "implementation-mechanics",
              owner: "you",
            },
          ],
          distractors: [
            "The exclamation point makes the copy feel too casual (a tone preference, not the substantive defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-honest-access-scarcity",
          specimen:
            "A separate section reads: 'Referral queue: you're #1,240. Refer 3 friends to move up 100 spots,' with a live-updating position number tied to the visitor's actual referral count.",
          specimenSource: "synthetic-realistic",
          prompt: "Classify this element: honest urgency, fabricated urgency, or regulatory-risk urgency?",
          answerKey: [
            {
              defect: "No defect, this is a correctly implemented access-based scarcity mechanic",
              severity: "cosmetic",
              whyItMatters:
                "This mirrors the lesson's Robinhood-style access-scarcity pattern: the position number is tied to a real, live referral count rather than a fabricated figure, which is exactly what makes it durable rather than a compliance risk.",
              lessonRef: "types-of-urgency-and-scarcity-signals",
              owner: "either",
            },
          ],
          distractors: [
            "The queue number looks arbitrary because it's not round (a real, granular number is a feature here, not a defect, it signals the count is live rather than a marketer-chosen round figure)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-stacked-signals",
          specimen:
            "The same page also shows, simultaneously: the countdown timer, the referral queue widget, a '312 people signed up in the last hour' banner, and a 'Best rated trading app 2025' badge, all above the fold.",
          specimenSource: "synthetic-realistic",
          prompt: "Is stacking these 4 signals together a problem, even if some are individually honest?",
          answerKey: [
            {
              defect: "4 urgency/trust signals stacked simultaneously above the fold",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistake #5: stacking too many urgency signals at once creates visual noise and can trigger skepticism even when each individual signal is accurate, test 1-2 signals per page rather than all at once.",
              lessonRef: "implementation-mechanics",
              owner: "you",
            },
          ],
          distractors: [
            "The signals are visually different colors (a design-consistency note, not the tested defect, which is signal count, not styling)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log all 4 specimen elements with authenticity classification, severity, and fix",
            why: "Free, sortable table makes it easy to separate honest signals from fabricated or stacked ones",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Hotjar",
            role: "Optionally record real sessions on the live page to confirm which stacked signal users actually notice first",
            why: "Free plan is enough to validate whether removing signals hurts or helps real engagement before recommending a fix",
            required: false,
            fallback: "Skip and rely on the severity ratings from the defect log alone",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 4-item defect log classifying every urgency element as honest, fabricated, or stacked, each with a specific fix.",
      sampleOutput:
        "Klaviyo-built flow, urgency teardown (excerpt)\n\nDEFECT: 'Only a few left!' with no number specified\nSEVERITY: moderate\nFIX: Replace with a real threshold, e.g. 'Only 4 left,' pulled from live inventory",
      successCriteria: [
        "Correctly classifies all 4 specimen elements by authenticity",
        "Cites the specific lesson section supporting each severity call",
        "Identifies the one honest element (item 3) without flagging it as a defect",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite the landing page's above-the-fold section using only the 2 strongest, most honest signals from the teardown, and note which 2 you cut and why.",
    },
  ],

  "sample-size-math": [
    {
      id: "sample-size-launch-forecast-slack",
      tier: "mini",
      archetype: "forecast",
      title: "The Launch Forecast: Sample Size and Runtime for a Real Test",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real baseline conversion rate, MDE, and daily traffic figure, calculate the required sample size per variant and forecast the exact runtime before a test launches.",
      companyId: "slack",
      scenario:
        "You're a growth marketer at Slack proposing a new pricing-page CTA test. Your manager will not approve the launch without a sample size and end date attached to the request.",
      brief:
        "Apply the lesson's sample size formula to real numbers, then convert the required sample into a calendar runtime using daily traffic.",
      mode: "calibration",
      conceptsCovered: [
        "Calculating required sample size from baseline, MDE, and power",
        "Estimating test runtime from required sample and daily traffic",
      ],
      steps: [
        {
          stepId: "step-1-calculate-sample-size",
          concept: "Calculating required sample size from baseline, MDE, and power",
          lessonAnchor: "step-3-run-the-calculation",
          theoryRecap:
            "The lesson's Step 3 uses baseline conversion rate, MDE, alpha, and power to compute the visitors needed per variant, roughly 14,000 per variant for a 3% baseline and a 10% relative MDE.",
          question:
            "Slack's pricing page converts at 4.2% baseline. You want to detect a 12% relative improvement (to 4.7%) at 95% confidence and 80% power. Using the same calculator logic as the lesson's worked example, is 8,000 visitors per variant enough?",
          toolName: "Google Sheets",
          where: "Build a small calculator sheet with baseline, MDE, alpha, and power as input cells.",
          procedure: [
            "Enter baseline 4.2%, MDE 12% relative (target 4.7%), alpha 0.05, power 80% as labeled input cells",
            "Cross-check the output against Evan Miller's standard sample size calculator methodology referenced in the lesson",
            "Record the required sample per variant and total sample across both variants",
          ],
          outputSample:
            "Sample size calculator, pricing CTA test\n  Baseline:        4.2%\n  Target:          4.7% (12% relative MDE)\n  Alpha / Power:   0.05 / 80%\n  Required n/variant: ~11,400\n  Total sample:        ~22,800",
          healthy:
            "The calculated requirement (~11,400 per variant) is compared honestly against the proposed 8,000 and the gap is flagged before launch.",
          unhealthy:
            "Rounding down the requirement or assuming 8,000 is 'close enough' because the team is eager to launch this week.",
          interpret:
            "8,000 per variant is short of the ~11,400 needed; launching anyway means the test is underpowered and a real 12% lift could go undetected.",
          soWhat: [
            {
              symptom: "Proposed sample (8,000/variant) is below the calculated requirement (~11,400/variant)",
              action: "Either widen the MDE to a level 8,000 can detect, or extend runtime to reach the real requirement",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-runtime",
          concept: "Estimating test runtime from required sample and daily traffic",
          lessonAnchor: "step-4-estimate-runtime",
          theoryRecap:
            "The lesson's Step 4 divides total required sample by daily traffic to the test page to get a runtime in days, and requires at least one full business cycle regardless of when sample is hit.",
          question:
            "The pricing page gets 1,050 daily visitors. Given the ~22,800 total sample from Step 1, what launch date and end date should go in the test-plan doc?",
          toolName: "Google Sheets",
          where: "Same calculator sheet, add a runtime row.",
          procedure: [
            "Divide total required sample (22,800) by daily traffic (1,050) to get raw days needed",
            "Round up to the nearest full week and apply the 14-day business-cycle minimum from the lesson",
            "Write the launch date and locked end date directly into the test-plan doc before requesting approval",
          ],
          outputSample:
            "Runtime forecast\n  Total sample needed:  22,800\n  Daily traffic:         1,050\n  Raw days:              21.7 -> round to 22 days\n  Business-cycle floor:  14 days (already exceeded)\n  Locked end date:       Day 22, no early stopping",
          healthy: "A specific end date is written into the plan before the test launches, and the plan states no peeking-based early stop.",
          unhealthy: "Leaving the end date as 'until significant' so the team can stop whenever the metric looks good.",
          interpret: "22 days is the honest runtime; anything shorter risks the 40%+ false-positive inflation the lesson documents for early stopping.",
          soWhat: [
            {
              symptom: "Test plan has no fixed end date",
              action: "Add a locked end date (Day 22) to the approval doc before requesting sign-off",
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
            role: "Build the sample size and runtime calculator",
            why: "Free, no account friction, easy to attach to an approval doc",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optimizely",
            role: "Built-in sample size and significance calculator inside the test-creation flow",
            why: "Automates the calculation and locks the end date at launch, matching Booking.com's automated-power-analysis approach",
            required: false,
            fallback: "Google Sheets calculator covers the same math manually",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A one-page test plan showing the required sample size per variant, total sample, and a locked launch/end date.",
      sampleOutput:
        "Adyen checkout-page CTA test plan (excerpt)\n\nBaseline: 2.8%  |  MDE: 15% relative (target 3.2%)\nRequired sample: 9,600/variant, 19,200 total\nDaily traffic: 1,400  |  Runtime: 14 days (business-cycle floor applied)\nLocked end date: Day 14. No early stopping regardless of interim significance.",
      successCriteria: [
        "Correctly calculates required sample size per variant from the given baseline, MDE, alpha, and power",
        "Correctly converts total sample into a runtime using daily traffic, applying the 14-day business-cycle floor",
        "States a locked end date rather than an 'until significant' condition",
      ],
      portfolioReady: true,
    },
    {
      id: "peeking-audit-two-test-plans-zendesk",
      tier: "mini",
      archetype: "head-to-head",
      title: "Two Test Plans, One Approval: Auditing for Peeking Risk",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two competing test plans for the same experiment, identify which one is statistically sound and quantify why the other one is not, using the lesson's false-positive-inflation evidence.",
      companyId: "zendesk",
      scenario:
        "Two PMs at Zendesk each propose a different way to run the same support-ticket upsell banner test, and only one plan can be approved this sprint.",
      brief: "Score both plans against the lesson's peeking and validation rules, then write the approval memo.",
      mode: "diagnostic",
      conceptsCovered: [
        "False positive inflation from peeking without a pre-set stopping rule",
        "Validating results only after reaching planned sample size and a full business cycle",
      ],
      steps: [
        {
          stepId: "step-1-score-peeking-risk",
          concept: "False positive inflation from peeking without a pre-set stopping rule",
          lessonAnchor: "why-it-matters",
          theoryRecap:
            "The lesson cites a 2025 simulation study finding that checking results 10+ times and stopping at the first significant read inflates false positives above 40%, versus the nominal 5% alpha.",
          question:
            "Plan A checks the p-value every morning starting Day 3 and stops the moment it crosses p<0.05. Plan B pre-registers a fixed sample of 24,000 total and a 14-day end date with no interim stops. Which plan's approach to 'significance' can actually be trusted?",
          toolName: "Google Sheets",
          where: "Log each plan's daily p-value sequence in a sheet to see how often 'significant' appears before Day 14.",
          procedure: [
            "Enter the two plans' rules side by side: check frequency, stopping condition, sample target",
            "Log the given 12-day p-value sequence for Plan A: it dips below 0.05 on Day 6, back above on Day 9, below again on Day 13",
            "Flag every day Plan A's rule would have triggered a stop, and count how many separate 'wins' it would have declared",
          ],
          outputSample:
            "Plan A daily p-value log\n  Day 6:  p=0.041  <- would stop and declare a winner here\n  Day 9:  p=0.11   (already 'shipped' by Day 6 under Plan A's rule)\n  Day 13: p=0.038\n\nPlan B: no interim checks, single read on Day 14, p=0.06 (not significant)",
          healthy: "The memo flags that Plan A's Day 6 stop is exactly the peeking pattern the lesson's cited study measured at 40%+ false positive rates.",
          unhealthy: "Approving Plan A because it 'found a winner faster' without checking whether that reflects the peeking risk.",
          interpret:
            "Plan A's early stop on Day 6 is not evidence of a real effect, it is the predictable artifact of checking daily and stopping at first significance; Plan B's single Day 14 read (p=0.06) is the trustworthy number.",
          soWhat: [
            {
              symptom: "A test plan checks significance more than once and stops at the first pass",
              action: "Reject the plan or require it switch to a pre-registered fixed sample and single end-of-test read",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-validate-before-approving",
          concept: "Validating results only after reaching planned sample size and a full business cycle",
          lessonAnchor: "step-5-validate-results-after-the-test",
          theoryRecap:
            "The lesson's Step 5 checklist requires confirming the planned sample was hit, the test ran a full business cycle, and the result clears both the significance threshold and the MDE before calling a winner.",
          question:
            "Plan B's Day 14 read shows p=0.06 and only 19,000 of the planned 24,000 sample. Should this be approved as a completed test?",
          toolName: "Google Sheets",
          where: "Same sheet, add a validation checklist row per the lesson's Step 5 criteria.",
          procedure: [
            "Check sample hit: 19,000 of 24,000 planned, not yet met",
            "Check business cycle: 14 days run, meets the 14-day preferred minimum",
            "Check significance and MDE: p=0.06 is above alpha 0.05, does not clear the bar",
          ],
          outputSample:
            "Validation checklist, Plan B Day 14\n  Sample hit?         NO  (19,000 / 24,000)\n  Business cycle?     YES (14 days)\n  Significant + MDE?  NO  (p=0.06)\n  Verdict: extend the test, do not call a winner yet",
          healthy: "The memo recommends extending Plan B to hit its planned sample rather than approving an incomplete read.",
          unhealthy: "Calling Plan B 'basically significant' and shipping the change because p=0.06 is close to 0.05.",
          interpret: "Neither plan currently has a trustworthy result: Plan A's is inflated by peeking, Plan B's is real but incomplete.",
          soWhat: [
            {
              symptom: "A test hasn't hit its planned sample size at the scheduled end date",
              action: "Extend the runtime rather than approve a partial-sample result",
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
            role: "Log daily p-values and score each plan against the validation checklist",
            why: "Fast to build, easy to attach as evidence in the approval memo",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optimizely",
            role: "Sequential-testing and alpha-spending safeguards that make daily peeking statistically safe",
            why: "If daily monitoring is a hard business requirement, this is the correct way to get it without inflating false positives",
            required: false,
            fallback: "Pre-register a fixed sample and single end-of-test read in Google Sheets instead",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A one-page approval memo recommending which plan to run, with the peeking-risk math and validation checklist shown as evidence.",
      sampleOutput:
        "Snowflake trial-signup banner test, plan audit memo (excerpt)\n\nPlan A (daily checks, stop at first p<0.05): REJECTED, peeking pattern matches the 40%+ false-positive study cited in CRO training.\nPlan B (fixed 22,000 sample, 14-day single read): APPROVED, add 3 more days to reach planned sample before reading results.",
      successCriteria: [
        "Correctly identifies which plan's stopping rule inflates false positives",
        "Applies the Step 5 validation checklist before recommending approval of either plan",
        "Recommends extending an incomplete test rather than approving a borderline p-value",
      ],
      portfolioReady: true,
    },
  ],
  "multivariate-vs-ab": [
    {
      id: "ab-vs-mvt-decision-snowflake-signup-flow",
      tier: "core",
      archetype: "head-to-head",
      title: "A/B or MVT: The Traffic-Backed Decision for a Signup Flow",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Snowflake's actual monthly traffic and a proposed 3-element test, apply the lesson's traffic threshold and combination math to decide between A/B and MVT, and justify the call in writing.",
      companyId: "snowflake",
      scenario:
        "Snowflake's growth team wants to test headline, CTA copy, and hero image on the trial-signup page all at once. They ask you to decide whether that should be one MVT or a sequence of A/B tests.",
      brief: "Run the traffic-threshold check and the combination-count math before recommending a test type.",
      mode: "diagnostic",
      conceptsCovered: [
        "Traffic threshold for reliable MVT testing",
        "Combination explosion calculation and staged testing when traffic falls short",
      ],
      steps: [
        {
          stepId: "step-1-traffic-threshold-check",
          concept: "Traffic threshold for reliable MVT testing",
          lessonAnchor: "traffic-the-deciding-factor",
          theoryRecap:
            "The lesson states only 9% of businesses have enough traffic for reliable MVT, and gives a rough guideline: default to A/B under 50,000 monthly visitors, and MVT needs 100k+ monthly visitors to the specific page to give each combination a fair shot.",
          question:
            "The Snowflake trial-signup page gets 62,000 monthly visitors. Testing 3 elements at 2 variants each creates 8 combinations. Does this page clear the traffic bar for MVT?",
          toolName: "Google Sheets",
          where: "Build a small worksheet with total monthly traffic and combination count as inputs.",
          procedure: [
            "Enter 62,000 monthly visitors and 8 combinations (2^3) as input cells",
            "Divide 62,000 by 8 to get visitors-per-combination-per-month",
            "Compare that per-combination figure against the lesson's A/B guideline (1,000-5,000 visitors per variant per week, roughly 4,000-20,000/month) as a rough proxy for whether each combination gets enough traffic",
          ],
          outputSample:
            "Traffic check, signup page\n  Monthly traffic:     62,000\n  Combinations (2^3):  8\n  Per-combination/mo:  7,750\n  A/B-equivalent floor: ~4,000-20,000/mo per variant\n  Verdict: below the 100k MVT floor from the lesson, and per-combination volume is thin",
          healthy: "The 62,000 monthly figure is correctly flagged as short of the lesson's 100k MVT threshold, before any combination math is even needed.",
          unhealthy: "Proceeding to design the MVT anyway because 62,000 'sounds like a lot of traffic'.",
          interpret: "62,000 is well under the 100k+ threshold the lesson sets for reliable MVT; this page should default to A/B testing per the guideline.",
          soWhat: [
            {
              symptom: "A team wants to run MVT on a page under 100k monthly visitors",
              action: "Recommend sequenced A/B tests instead, and revisit MVT once traffic grows",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-recommend-staged-ab",
          concept: "Combination explosion calculation and staged testing when traffic falls short",
          lessonAnchor: "when-to-use-multivariate-testing",
          theoryRecap:
            "The lesson's decision flowchart routes any page under the 100k/month threshold to A/B testing, and its Common Mistakes section warns against running MVT on a page that hasn't already been validated as converting well.",
          question:
            "Given the Step 1 verdict, what should the growth team actually run this quarter, and in what order?",
          toolName: "Google Sheets",
          where: "Same worksheet, add a recommended testing sequence.",
          procedure: [
            "List the 3 proposed elements (headline, CTA copy, hero image) as separate A/B test candidates",
            "Rank them by expected impact using the lesson's guidance that A/B is for validating a big idea",
            "Sequence them: headline first (biggest concept-level lever), then CTA copy, then hero image",
          ],
          outputSample:
            "Recommended sequence\n  1. Headline A/B test (4 weeks, biggest expected lever)\n  2. CTA copy A/B test (3 weeks)\n  3. Hero image A/B test (3 weeks)\n  Revisit MVT once monthly traffic to this page passes 100,000",
          healthy: "The recommendation sequences 3 separate A/B tests instead of one underpowered 8-way MVT.",
          unhealthy: "Compressing all 3 elements into one MVT to 'save time', producing 8 combinations with ~7,750 visitors each.",
          interpret: "At this traffic level, three sequential A/B tests each get full statistical power; one MVT would starve every combination of sample.",
          soWhat: [
            {
              symptom: "Three or more elements proposed for one test on a sub-100k-traffic page",
              action: "Split into a sequenced A/B roadmap and revisit MVT once traffic grows",
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
            role: "Run the traffic-threshold check and build the sequenced test roadmap",
            why: "No paid tool needed to do the arithmetic behind the decision",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "VWO",
            role: "Native MVT combination builder, worth adopting once traffic clears the 100k threshold",
            why: "Automates combination generation and traffic split once MVT is actually justified",
            required: false,
            fallback: "Sequenced A/B tests in the same platform's standard split-test builder",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A decision memo recommending A/B testing over MVT for the current traffic level, with a sequenced 3-test roadmap.",
      sampleOutput:
        "Adyen merchant-dashboard onboarding page, A/B vs MVT decision memo (excerpt)\n\nMonthly traffic: 41,000 -> below the 50k A/B-default threshold in the lesson\nRecommendation: single-variant A/B test on the strongest hypothesis (progress-bar redesign) only, MVT not viable at this traffic level.",
      successCriteria: [
        "Correctly computes combinations (2^3 = 8) and per-combination monthly traffic",
        "Correctly applies the 100k monthly visitor threshold to reject MVT for this page",
        "Recommends a sequenced A/B roadmap rather than a single underpowered MVT",
      ],
      portfolioReady: true,
    },
    {
      id: "mvt-feasibility-forecast-adyen-pricing-page",
      tier: "core",
      archetype: "forecast",
      title: "The Combination Cap: Forecasting Whether a 4-Element MVT Is Feasible",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Adyen has abundant traffic to a mature, already-converting pricing page and wants to test 4 elements at once, forecast the full-factorial combination count and required runtime, then decide whether to cap the design.",
      companyId: "adyen",
      scenario:
        "Adyen's pricing page converts well and gets 180,000 monthly visitors. The team wants to test headline, CTA button color, pricing-table layout, and hero graphic all at once.",
      brief: "Forecast the combination count and runtime for the full design, then check it against the lesson's combination cap guidance.",
      mode: "calibration",
      conceptsCovered: [
        "Full factorial combination growth calculation for multivariate tests",
        "Forecasting MVT sample size and runtime against the combination cap guideline",
      ],
      steps: [
        {
          stepId: "step-1-forecast-combinations",
          concept: "Full factorial combination growth calculation for multivariate tests",
          lessonAnchor: "how-mvt-works-step-by-step",
          theoryRecap:
            "The lesson notes a full factorial MVT with 3 elements at 2 variants each creates 8 combinations (2x2x2), and 4 elements at 2 variants each creates 16, with traffic requirements growing fast as elements are added.",
          question:
            "The team wants 4 elements at 2 variants each. The lesson's own decision flowchart caps recommended combinations at 16. Does the full 4-element design clear or blow past that cap?",
          toolName: "Google Sheets",
          where: "Build a combination-count table listing each element count option and its resulting combinations.",
          procedure: [
            "Calculate 2^4 for the full 4-element design",
            "Calculate 2^3 for a reduced 3-element design (dropping the lowest-impact element) as a comparison row",
            "Flag which option sits at or under the flowchart's 16-combination cap",
          ],
          outputSample:
            "Combination forecast\n  4 elements x 2 variants = 2^4 = 16 combinations  (exactly at the cap)\n  3 elements x 2 variants = 2^3 = 8 combinations   (well under the cap)",
          healthy: "The 16-combination result is checked directly against the flowchart's cap rather than assumed to be fine because 'it's just 4 things'.",
          unhealthy: "Adding a 5th element later without re-running this calculation, silently pushing the design to 32 combinations.",
          interpret: "16 combinations sits exactly at the lesson's recommended ceiling; it's forecastable, but any additional element or variant pushes the design past what the flowchart recommends.",
          soWhat: [
            {
              symptom: "A proposed MVT design sits at or above 16 combinations",
              action: "Cap the design at the current element count, or drop an element before finalizing scope",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-runtime",
          concept: "Forecasting MVT sample size and runtime against the combination cap guideline",
          lessonAnchor: "traffic-the-deciding-factor",
          theoryRecap:
            "The lesson's rough guideline is that an 8-combination MVT needs roughly 8 times the per-variant traffic of a 2-variant A/B test to give each combination a fair shot; a 16-combination design needs roughly double that again.",
          question:
            "With 180,000 monthly visitors and a 16-combination design, roughly how many weeks should the team forecast, using the lesson's A/B baseline of 1,000-5,000 visitors per variant per week?",
          toolName: "Google Sheets",
          where: "Same sheet, add a runtime forecast row using the 8x-per-8-combinations multiplier.",
          procedure: [
            "Take the lesson's A/B weekly baseline (1,000-5,000 visitors per variant) as the per-combination target for a fair test",
            "Multiply by 16 combinations to get the total weekly traffic needed",
            "Divide the page's monthly traffic (180,000, roughly 41,500/week) by that total to forecast weeks required",
          ],
          outputSample:
            "Runtime forecast, 16-combination design\n  Per-combination weekly target: 1,000-5,000\n  Total weekly need (x16):        16,000-80,000\n  Actual weekly traffic:          ~41,500\n  Forecast: within range at the low end, but tight at the high end -> plan for 8-10 weeks, not the 2-4 weeks a single A/B test would take",
          healthy: "The team sets an 8-10 week runtime expectation upfront and communicates it before launch.",
          unhealthy: "Promising stakeholders a 3-week timeline because that's how long the last A/B test took, without redoing the math for 16 combinations.",
          interpret: "16 combinations at this traffic level is feasible but slow, months not weeks, which matches the lesson's warning that MVT time-to-significance is measured in months on most sites.",
          soWhat: [
            {
              symptom: "Stakeholders expect an MVT to finish on an A/B test timeline",
              action: "Set explicit 8-10 week runtime expectations in the kickoff doc before launch",
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
            role: "Forecast combination count and runtime before committing to a design",
            why: "The arithmetic is simple enough that no paid calculator is required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "VWO",
            role: "Native MVT combination generator and traffic-split engine",
            why: "Once the forecast confirms feasibility, VWO automates generating and splitting traffic across all 16 combinations",
            required: false,
            fallback: "Manually build combinations in the A/B test tool and split traffic evenly across them",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A capacity-forecast worksheet showing combination count, weekly traffic requirement, and forecasted runtime, with a go/no-go recommendation on the full 4-element design.",
      sampleOutput:
        "Zendesk in-app upgrade banner, MVT forecast (excerpt)\n\nProposed: 3 elements x 2 variants = 8 combinations\nWeekly traffic: 28,000 (well above the 8,000-40,000 need for 8 combinations)\nForecast runtime: 5-6 weeks\nGo: design is feasible at current traffic, proceed to build.",
      successCriteria: [
        "Correctly calculates 2^4 = 16 combinations and checks it against the lesson's combination cap",
        "Correctly forecasts weekly traffic requirement and runtime using the combination multiplier",
        "Produces a specific go/no-go recommendation with a stated runtime range, not just a raw combination count",
      ],
      portfolioReady: true,
    },
  ],

  "statistical-pitfalls-in-cro": [
    {
      id: "statistical-pitfalls-teardown-test-writeup",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: The Test Writeup That Broke Every Rule",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style CRO test writeup, identify which statistical pitfalls (peeking, multiple comparisons, Simpson's Paradox) it committed and which claims are actually sound.",
      companyId: "freshworks",
      scenario:
        "You're a growth analyst at Freshworks. A teammate is about to email leadership a test writeup recommending a full rollout. Your job is to catch anything wrong before it ships.",
      brief:
        "Read the underlying specimen writeup snippets and flag every statistical defect, citing the lesson concept each one violates.",
      mode: "teardown",
      conceptsCovered: [
        "Peeking / optional stopping",
        "Multiple comparisons problem",
        "Simpson's Paradox",
      ],
      teardownItems: [
        {
          itemId: "item-1-peeking",
          specimen:
            "Day 3 update: Treatment is already beating control by +4% (p=0.04). We've been checking the dashboard every morning since launch. Given the strong early signal, recommend we call this test now and ship to 100% today, no need to wait for the original 14-day/25,000-visitor plan.",
          specimenSource: "synthetic-realistic",
          prompt:
            "What's wrong with this recommendation, and what should the team have done instead?",
          answerKey: [
            {
              defect:
                "The test was stopped early based on a significant result seen through daily monitoring, not the pre-registered 14-day/25,000-visitor plan.",
              severity: "critical",
              whyItMatters:
                "Daily peeking with a stop-on-significance rule can push a nominal 5% false positive rate to 20%+, the 'win' is very likely noise, not a real effect.",
              lessonRef:
                "The Peeking Problem, Why 'Stop When Significant' Is Wrong",
              owner: "you",
            },
          ],
          distractors: [
            "The sample size formula used to plan 25,000 visitors was wrong",
            "The treatment group received more traffic than control starting on day 1",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-multiple-comparisons",
          specimen:
            "We tracked 6 metrics on this test: primary conversion rate, add-to-cart rate, average order value, email signup rate, page scroll depth, and time on page. Average order value came back significant at p=0.03, so we're calling this a win on AOV even though conversion rate itself was flat.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is declaring a win on average order value here justified? What's the actual issue?",
          answerKey: [
            {
              defect:
                "Six metrics were tracked with no correction, and the 'win' was declared on a secondary metric (AOV) instead of the pre-registered primary metric, which was flat.",
              severity: "critical",
              whyItMatters:
                "Testing 6 metrics without correction inflates the chance of at least one false positive well above 5%; picking whichever metric turned green after the fact is the multiple comparisons problem in disguise.",
              lessonRef:
                "Multiple Comparisons, When Running Many Tests Inflates Everything",
              owner: "you",
            },
          ],
          distractors: [
            "AOV is not a valid CRO metric to track",
            "p=0.03 is not statistically significant at alpha 0.05",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-simpsons",
          specimen:
            "Combined across the full test, treatment converted at 1.20% versus control's 1.68%, so we're planning to kill treatment. Note: we ramped treatment traffic from 1% on day 1 to 50% by day 2 to speed up data collection.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Should the team kill treatment based on this combined number? What else needs checking first?",
          answerKey: [
            {
              defect:
                "Traffic allocation to treatment was changed mid-test (1% to 50%), which can produce Simpson's Paradox, the combined number can look like a loss even when treatment wins every individual day or segment.",
              severity: "critical",
              whyItMatters:
                "Without checking day-by-day or segment-level results, the team risks killing a variant that is actually winning, purely because of a mix-shift artifact in the combined total.",
              lessonRef:
                "Simpson's Paradox, When Every Segment Wins But the Total Loses",
              owner: "you",
            },
          ],
          distractors: [
            "The combined conversion rate math (1.20% vs 1.68%) was calculated incorrectly",
            "Killing a losing variant after a full test is always the wrong call",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log the writeup review and track each flagged defect",
            why: "Free, no account friction, sufficient for a written peer review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written peer-review comment thread flagging each statistical defect, its severity, and what should happen instead before the writeup ships.",
      sampleOutput:
        "Wise CRO peer review (excerpt)\n\nDefect 1 (critical): Stopped test on day 3 after daily peeking hit p=0.04. Fix: hold to the pre-registered 14-day/25,000-visitor plan.\nDefect 2 (critical): Declared win on AOV, a secondary metric, while the primary metric (conversion rate) was flat across 6 tracked metrics. Fix: report against the primary metric only.\nDefect 3 (critical): Traffic ramped 1% -> 50% mid-test; combined number reverses the per-day result. Fix: break out by allocation period before trusting the total.",
      successCriteria: [
        "Identifies all 3 statistical defects and correctly labels which lesson concept each one violates",
        "Does not flag either distractor per item as a real defect",
        "Recommends the correct fix for each (pre-registered plan, primary metric, stable allocation)",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite the writeup's recommendation section as if the test had been run correctly from day 1.",
    },
    {
      id: "statistical-pitfalls-stop-continue-audit",
      tier: "core",
      archetype: "audit",
      title: "The Stop/Continue Call: Auditing a Live Test Dashboard Before You Decide",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a live-test dashboard export (day-by-day p-values, metric list, and traffic-allocation log), apply the lesson's three checks to decide whether the result can be trusted.",
      companyId: "wise",
      scenario:
        "You're the CRO lead at Wise. A pricing-page test has been running for 9 of its planned 14 days, and the PM is asking whether you can call it today.",
      brief:
        "Walk the dashboard export through the peeking check, the multiple comparisons check, and the Simpson's Paradox check before answering the PM.",
      mode: "diagnostic",
      conceptsCovered: [
        "Peeking / optional stopping",
        "Multiple comparisons problem",
        "Simpson's Paradox",
      ],
      steps: [
        {
          stepId: "step-1-peeking-check",
          concept: "Peeking / optional stopping",
          lessonAnchor: "the-peeking-problem-why-stop-when-significant-is-wrong",
          theoryRecap:
            "A p-value calculated for a fixed sample size assumes one look at the end; checking daily and stopping at first significance can push a nominal 5% false positive rate to 20%+.",
          question:
            "The dashboard shows day 9 of a planned 14-day/30,000-visitor test crossing p=0.048 today after being non-significant on days 3-8. Should you call it now?",
          toolName: "Google Sheets",
          where: "Open dashboard-export.csv, day-by-day p-value column.",
          procedure: [
            "Open dashboard-export.csv and check the 'planned end date/sample size' field logged at launch",
            "Compare today's date and sample against that plan",
            "If the plan isn't reached, do not stop, regardless of today's p-value",
          ],
          outputSample:
            "Planned: 14 days / 30,000 visitors (logged at launch)\nCurrent: Day 9 / 19,400 visitors\np-value history: Day3 0.61, Day5 0.34, Day7 0.19, Day9 0.048\nStatus: NOT yet at plan -> do not stop",
          healthy:
            "The team holds the line and waits for day 14 / 30,000 visitors regardless of today's p-value.",
          unhealthy:
            "The team calls the test today because p crossed 0.05, five days and roughly 10,600 visitors early.",
          interpret:
            "A p-value crossing 0.05 before the pre-registered endpoint is exactly the pattern peeking produces, it is not evidence.",
          soWhat: [
            {
              symptom: "PM is asking to call the test early because today's number looks good",
              action: "Show the pre-registered end date/sample size and hold until it's reached",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-multiple-comparisons-check",
          concept: "Multiple comparisons problem",
          lessonAnchor: "multiple-comparisons-when-running-many-tests-inflates-everything",
          theoryRecap:
            "Testing many metrics or variants without correction means the odds of at least one false 'win' climb fast, roughly 64% across 20 tests at alpha 0.05.",
          question:
            "The dashboard logs 7 tracked metrics for this test. Which one was declared the primary metric before launch, and does the 'win' show up there?",
          toolName: "Google Sheets",
          where: "Metrics tab of dashboard-export.csv",
          procedure: [
            "Find the 'primary metric' field logged at launch",
            "Check whether that specific metric, not any of the other 6, is the one showing significance",
            "If a secondary metric is significant but the primary isn't, treat it as a diagnostic lead, not a result",
          ],
          outputSample:
            "Primary metric (logged at launch): Checkout conversion rate -> p=0.41 (not significant)\nSecondary metrics: AOV p=0.03, email opt-in p=0.09, scroll depth p=0.22, ...\nStatus: Primary metric not significant -> no win to call",
          healthy:
            "The team reports 'primary metric not significant, test continues or fails' regardless of which secondary metric turned green.",
          unhealthy:
            "The team reports a win on AOV because it's the only metric under 0.05, ignoring that 7 metrics were tracked.",
          interpret:
            "A secondary metric turning significant among 7 tracked metrics is the multiple comparisons problem showing up in real data.",
          soWhat: [
            {
              symptom: "A secondary metric is significant but the primary metric is flat",
              action:
                "Report the primary metric result as the decision, and log the secondary finding as a new hypothesis to test on its own",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-simpsons-check",
          concept: "Simpson's Paradox",
          lessonAnchor: "simpsons-paradox-when-every-segment-wins-but-the-total-loses",
          theoryRecap:
            "Simpson's Paradox happens when a trend inside every subgroup reverses once you combine the subgroups, usually from uneven traffic mix between variants.",
          question:
            "The traffic-allocation log shows the treatment split moved from 10% to 50% on day 6 to speed up data collection. Does the combined day 1-9 conversion number mean anything on its own?",
          toolName: "Google Sheets",
          where: "Allocation-log tab of dashboard-export.csv",
          procedure: [
            "Check the allocation-log tab for any change in the treatment/control traffic split during the test",
            "If the split changed, break the conversion numbers out by day/allocation period instead of trusting the combined total",
            "Confirm treatment's per-period result agrees with the combined result before reporting either",
          ],
          outputSample:
            "Days 1-5 (10% split): Control 2.1% CVR, Treatment 2.4% CVR -> Treatment wins\nDays 6-9 (50% split): Control 1.3% CVR, Treatment 1.5% CVR -> Treatment wins\nCombined days 1-9: Control 1.68%, Treatment 1.52% -> looks like Control wins",
          healthy:
            "The team reports the per-period breakdown and flags the allocation change as the reason the combined number is misleading.",
          unhealthy:
            "The team reports 'Control wins' off the combined total without checking whether the allocation changed mid-test.",
          interpret:
            "The allocation change on day 6 is exactly the trigger the lesson names for Simpson's Paradox; the combined total is not trustworthy on its own.",
          soWhat: [
            {
              symptom: "Combined result disagrees with every per-period result",
              action:
                "Hold traffic allocation constant for future tests, and re-run this one cleanly instead of trusting the combined number",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Review the dashboard export, metrics tab, and allocation log",
            why: "Free, sufficient to filter and compare columns from an exported test dashboard",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written stop/continue recommendation to the PM covering all 3 checks, with the reasoning shown, not just the verdict.",
      sampleOutput:
        "Freshworks pricing-test stop/continue memo (excerpt)\n\n1. Peeking check: Day 8/14, 21,000/28,000 visitors -> not at plan, hold.\n2. Multiple comparisons check: Primary metric (trial starts) p=0.22, not significant -> no win yet.\n3. Simpson's check: Allocation stable at 50/50 throughout -> combined number is trustworthy.\nRecommendation: Continue to day 14.",
      successCriteria: [
        "Correctly applies all 3 checks using the dashboard's own logged plan/allocation data, not just today's p-value",
        "Recommendation matches what the 3 checks actually show",
        "Explains reasoning for the stop/continue call, not just a verdict",
      ],
      portfolioReady: true,
      stretch:
        "Draft the pre-registration template (metric, sample size, end date, allocation) this team should fill out before every future test launches.",
    },
  ],
  "cro-research": [
    {
      id: "cro-research-plan-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Research Plan Audit: Catching Bad Methodology Before It Ships",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a draft CRO research plan for a real product page, identify methodology flaws against the lesson's four-stage cycle and qualitative-tool best practices.",
      companyId: "grab",
      scenario:
        "You're the CRO researcher at Grab. A junior analyst has drafted a research plan for the ride-booking checkout page and wants a sign-off before running it.",
      brief:
        "Check the plan against the lesson's minimum thresholds and Common Mistakes, then flag every methodology gap.",
      mode: "diagnostic",
      conceptsCovered: [
        "Setting a minimum traffic threshold before starting qualitative research",
        "Applying qualitative tools in sequence: heatmaps, then recordings, then surveys",
        "Balancing exit surveys with post-purchase surveys",
        "Writing a hypothesis with a 'because' clause",
      ],
      steps: [
        {
          stepId: "step-1-traffic-threshold",
          concept: "Setting a minimum traffic threshold before starting qualitative research",
          lessonAnchor: "stage-1-discover",
          theoryRecap:
            "Pages with fewer than 1,000 monthly sessions will not yield reliable heatmap data; reliable A/B test results need at least 25,000 visitors.",
          question:
            "The draft plan proposes running heatmaps on the ride-booking checkout page, which gets 420 monthly sessions. Is that enough?",
          toolName: "Google Sheets",
          where: "Traffic tab of research-plan-draft.xlsx",
          procedure: [
            "Pull the page's monthly session count from the traffic tab",
            "Compare it against the 1,000-session minimum for reliable heatmap data",
            "If below threshold, flag the page or recommend a longer collection window",
          ],
          outputSample:
            "Checkout page: 420 sessions/month\nThreshold: 1,000 sessions/month minimum\nStatus: Below threshold -> heatmap data will not be reliable at this volume",
          healthy:
            "The plan is revised to either extend the collection window to 3+ months or pick a higher-traffic page.",
          unhealthy:
            "Heatmap research runs anyway on a 3-week window and gets treated as reliable.",
          interpret:
            "Below-threshold traffic produces noisy, unreliable heatmap patterns, the qualitative-research equivalent of an underpowered A/B test.",
          soWhat: [
            {
              symptom: "A low-traffic page is queued for heatmap research on a short window",
              action:
                "Extend the collection window until session count clears 1,000, or reprioritize a higher-traffic page",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sequence-check",
          concept: "Applying qualitative tools in sequence: heatmaps, then recordings, then surveys",
          lessonAnchor: "stage-2-diagnose",
          theoryRecap:
            "Stage 2 sequences the tools deliberately: start broad (heatmaps), go deep (recordings), then ask directly (surveys), each layer builds on the previous one.",
          question:
            "The plan schedules an exit survey to launch on day 1, before any heatmap or recording review. Is that the right order?",
          toolName: "Google Sheets",
          where: "Timeline tab of research-plan-draft.xlsx",
          procedure: [
            "Check the scheduled order of research methods against the heatmap-recordings-surveys sequence",
            "Flag any survey questions written before heatmap/recording review, since they won't be grounded in observed behavior",
            "Recommend reordering so surveys are written after the first two layers",
          ],
          outputSample:
            "Draft schedule: Day 1 exit survey, Day 8 heatmap install, Day 15 recordings review\nCorrect order: Day 1 heatmap install, Day 8 recordings review, Day 15 survey (informed by findings)",
          healthy:
            "Survey questions reference specific friction points already observed in heatmaps and recordings.",
          unhealthy:
            "Survey questions are generic ('How was your experience?') because they were written before any behavioral data existed.",
          interpret:
            "Writing surveys before heatmaps and recordings means the questions can't target the actual friction points, defeating the point of layering the tools.",
          soWhat: [
            {
              symptom: "Survey questions are generic and not tied to an observed friction point",
              action:
                "Reorder the plan so heatmaps and recordings run first, then write survey questions from what they show",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-survey-balance-check",
          concept: "Balancing exit surveys with post-purchase surveys",
          lessonAnchor: "stage-2-diagnose",
          theoryRecap:
            "Surveying only non-converters is systematically skewed; balancing every exit survey with a post-purchase survey reveals the real decision threshold.",
          question: "The plan only includes an exit-intent survey. What's missing?",
          toolName: "Google Forms",
          where: "Survey tab of research-plan-draft.xlsx",
          procedure: [
            "Check whether the plan includes both an exit survey and a post-purchase survey",
            "If only exit surveys are planned, add a one-question post-purchase survey to the order-confirmation screen",
            "Confirm both surveys ask a single open-text question, not multiple choice",
          ],
          outputSample:
            "Planned: Exit survey only ('What stopped you from booking today?')\nMissing: Post-purchase survey on the confirmation screen ('Was there anything that almost stopped you from booking?')",
          healthy: "Both surveys run in parallel, and their contrast is analyzed together.",
          unhealthy:
            "Only non-converters are surveyed, so the research never learns what almost stopped people who did convert.",
          interpret:
            "Exit-only surveys are skewed toward people who were never going to convert regardless of any fix.",
          soWhat: [
            {
              symptom: "Only an exit survey is planned",
              action: "Add a one-question post-purchase survey and plan to compare both response sets",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-hypothesis-check",
          concept: "Writing a hypothesis with a 'because' clause",
          lessonAnchor: "stage-3-hypothesize",
          theoryRecap:
            "A valid hypothesis follows: 'Because [research finding], we believe [change] will [outcome] for [segment].' Without the because clause it's a guess, not a hypothesis.",
          question:
            "The plan's draft test idea reads: 'We should make the Book Now button bigger.' Is this a valid hypothesis?",
          toolName: "Google Sheets",
          where: "Hypothesis backlog tab of research-plan-draft.xlsx",
          procedure: [
            "Check each backlog row for a 'because [finding]' clause tied to a specific research source",
            "Reject any row that states a change with no cited finding",
            "Send it back for a specific finding before it enters the backlog",
          ],
          outputSample:
            "Rejected: 'Make the Book Now button bigger' (no finding cited)\nRevised: 'Because heatmap data shows 60% of sessions never scroll to the current Book Now button position, we believe moving it above the fold will increase checkout starts for mobile users'",
          healthy: "Every backlog row traces to a specific heatmap, recording, or survey finding.",
          unhealthy: "Backlog rows are design preferences with no evidence attached.",
          interpret:
            "A hypothesis without a because clause is opinion-driven regardless of how many research tools were used elsewhere in the plan.",
          soWhat: [
            {
              symptom: "A backlog row has no cited finding",
              action: "Reject it and require a specific research citation before it's scheduled for testing",
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
            role: "Review the traffic, timeline, and hypothesis tabs of the draft plan",
            why: "Free, sufficient for a methodology audit",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Forms",
            role: "Check survey question design against the exit/post-purchase format",
            why: "Free tool, sufficient to confirm single-question, open-text survey format",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written audit memo listing every methodology gap in the draft plan, with the fix for each.",
      sampleOutput:
        "Nubank checkout research-plan audit (excerpt)\n\n1. Traffic check: Page clears 1,000 sessions/month, heatmap data reliable - PASS\n2. Sequence check: Surveys scheduled before heatmap review - FAIL, reorder\n3. Survey balance: Post-purchase survey missing - FAIL, add\n4. Hypothesis check: 2 of 5 backlog rows have no cited finding - FAIL, reject and revise",
      successCriteria: [
        "Correctly flags all methodology gaps present in the draft plan",
        "Cites the correct lesson concept or threshold for each flag",
        "Provides a specific fix, not just a criticism",
      ],
      portfolioReady: true,
      stretch: "Rewrite the full research plan from scratch so it passes your own audit.",
    },
    {
      id: "cro-research-hypothesis-backlog-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "From Raw Signals to a Prioritized Hypothesis Backlog",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given raw heatmap notes, 20 exit-survey responses, and 10 post-purchase-survey responses for one page, build a prioritized, ICE-scored hypothesis backlog using the lesson's 'because' clause format.",
      companyId: "nubank",
      scenario:
        "You're the growth researcher at Nubank. The credit-card signup page converts below benchmark, and you've just finished a round of qualitative research. Now you have to turn it into something the team can actually test.",
      brief:
        "Synthesize the raw research notes into 3-5 hypotheses, each with a because clause and an ICE score, ranked by priority.",
      mode: "build",
      conceptsCovered: [
        "Synthesizing qualitative findings into a prioritized test backlog",
        "Writing a hypothesis with a 'because' clause",
        "Prioritizing with ICE scoring: Impact, Confidence, Ease",
      ],
      steps: [
        {
          stepId: "step-1-synthesize-patterns",
          concept: "Synthesizing qualitative findings into a prioritized test backlog",
          lessonAnchor: "stage-3-hypothesize",
          theoryRecap:
            "Stage 3 synthesizes findings from heatmaps, recordings, and surveys into a prioritized list of test ideas, not a report.",
          question:
            "Given raw notes (heatmap: 70% of sessions never scroll past the fee-schedule table; exit survey: 12 of 20 responses mention 'not sure about fees'; post-purchase: 6 of 10 mention 'almost gave up on the fee page'), what pattern do all three sources agree on?",
          toolName: "Google Sheets",
          where: "raw-research-notes.csv",
          procedure: [
            "List each finding from the heatmap notes, exit survey, and post-purchase survey in separate rows",
            "Group findings that point at the same page element or moment",
            "Discard single-source findings that no other tool corroborates for this round",
          ],
          outputSample:
            "Pattern found in all 3 sources: fee-schedule table on the signup page\nHeatmap: 70% never scroll to it\nExit survey: 12/20 mention fee confusion\nPost-purchase: 6/10 nearly abandoned over fees\n-> Strongest candidate for a hypothesis",
          healthy:
            "The strongest hypothesis is the one corroborated across multiple research sources, not the loudest single comment.",
          unhealthy:
            "A hypothesis is written off one exit-survey comment with no corroboration from heatmap or post-purchase data.",
          interpret:
            "Cross-source agreement is what separates a strong hypothesis from a guess dressed up as research.",
          soWhat: [
            {
              symptom: "A candidate hypothesis is based on only one research source",
              action: "Check the other two sources for corroboration before writing the hypothesis, or mark it lower confidence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-write-hypothesis",
          concept: "Writing a hypothesis with a 'because' clause",
          lessonAnchor: "stage-3-hypothesize",
          theoryRecap:
            "'Because [specific finding], we believe [change] will [outcome] for [segment].' The because clause has to trace back to real evidence.",
          question:
            "Turn the fee-schedule pattern from step 1 into a valid hypothesis using the because-clause format.",
          toolName: "Google Sheets",
          where: "hypothesis-backlog.csv, new row",
          procedure: [
            "Write the finding into the 'because' clause with the specific numbers from step 1",
            "State the proposed change",
            "State the expected outcome and the user segment it applies to",
          ],
          outputSample:
            "Because heatmap data shows 70% of sessions never scroll to the fee-schedule table, and 12/20 exit-survey and 6/10 post-purchase responses cite fee confusion, we believe moving a summarized fee callout above the fold will increase signup completion for first-time applicants.",
          healthy: "Every backlog row can be traced back to specific research numbers from step 1.",
          unhealthy: "The row states the change and outcome but drops the because clause under time pressure.",
          interpret:
            "The because clause is what makes this a hypothesis instead of a design opinion, it has to survive being written down.",
          soWhat: [
            {
              symptom: "A backlog row is missing its because clause",
              action: "Go back to the raw notes and cite the specific finding before adding the row",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-ice-score",
          concept: "Prioritizing with ICE scoring: Impact, Confidence, Ease",
          lessonAnchor: "stage-3-hypothesize",
          theoryRecap:
            "Score each hypothesis 1-10 on Impact, Confidence, and Ease, then sort the backlog by total score.",
          question:
            "Given 2 other draft hypotheses in the backlog with rough impact/confidence/ease estimates, where does the fee-callout hypothesis from step 2 rank?",
          toolName: "Google Sheets",
          where: "hypothesis-backlog.csv, ICE columns",
          procedure: [
            "Score the fee-callout hypothesis on Impact, Confidence, Ease (1-10 each), using the corroboration strength from step 1 as the Confidence input",
            "Score the other backlog rows the same way",
            "Sum each row and sort descending",
          ],
          outputSample:
            "Fee-callout: Impact 8, Confidence 9 (3-source corroboration), Ease 7 = 24\nTrust badges: Impact 6, Confidence 5, Ease 8 = 19\nButton color: Impact 3, Confidence 4, Ease 9 = 16\nRanked: Fee-callout (24) > Trust badges (19) > Button color (16)",
          healthy:
            "The highest-corroboration hypothesis scores highest on Confidence and rises to the top of the backlog.",
          unhealthy:
            "A low-confidence, single-source idea outranks a well-corroborated one because Ease was overweighted.",
          interpret:
            "ICE scoring only works if Confidence reflects real evidence strength, not a gut feeling separate from the research.",
          soWhat: [
            {
              symptom: "A low-evidence hypothesis is ranked above a well-corroborated one",
              action: "Re-score Confidence using the source count from step 1, then re-sort the backlog",
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
            role: "Log raw findings and build the scored hypothesis backlog",
            why: "Free, sufficient to synthesize and sort a backlog by ICE score",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar (CRO)",
            role: "Source of the original heatmap and recording data in a live scenario",
            why: "Faster ongoing qualitative-data collection than free tools at scale",
            required: false,
            fallback: "Microsoft Clarity (free) covers the same heatmap and recording data collection",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 3-5 row prioritized hypothesis backlog, each row with a because-clause hypothesis and an ICE score.",
      sampleOutput:
        "Wise signup-page hypothesis backlog (excerpt)\n\n1. (Score 24) Because heatmap data shows 65% never scroll to the fee table, and exit/post-purchase surveys corroborate fee confusion, we believe a fee callout above the fold will increase completions for first-time users.\n2. (Score 19) Because 8/20 exit-survey responses cite trust concerns, we believe adding a security badge near the submit button will increase completions.\n3. (Score 16) Because heatmap clicks cluster on the current button color with no drop-off pattern, we believe a color change alone will not move completions much, low priority.",
      successCriteria: [
        "Every backlog row is corroborated by at least one specific data point from the raw notes",
        "Every row includes a complete because-clause hypothesis",
        "ICE scores are consistent with the corroboration strength found in step 1, and the backlog is sorted correctly",
      ],
      portfolioReady: true,
      stretch: "Pull a real page from a site you have access to and run this same synthesis on genuine heatmap and survey data.",
    },
  ],

  "personalization-cro": [
    {
      id: "personalization-cro-plan-audit",
      tier: "mini",
      archetype: "audit",
      title: "Green-Light or Red-Flag: Auditing a Personalization Rollout Plan",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a draft personalization rollout plan covering 6 segments, apply the lesson's segment-sizing rule and signal-choice rule to flag which segments should ship, which should be cut, and which are over-reaching for a B2C business.",
      companyId: "lenskart",
      scenario:
        "You're the CRO analyst at Lenskart. The growth team drafted a personalization rollout plan with 6 proposed segments ahead of next quarter's roadmap review, and asked you to sign off before engineering starts building.",
      brief:
        "Score each segment against the minimum-traffic threshold and check whether the proposed signal actually fits a consumer eyewear business, then produce a one-page go/no-go verdict.",
      mode: "diagnostic",
      conceptsCovered: [
        "Minimum viable segment size (500 monthly visitors)",
        "Choosing a signal proportional to the business model (B2C vs. ABM)",
      ],
      steps: [
        {
          stepId: "step-1-segment-size-filter",
          concept: "Minimum viable segment size (500 monthly visitors)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 1 sets the floor: a segment under roughly 500 monthly visitors can't reach 95% statistical confidence within a reasonable testing window, so the 'lift' you eventually see is noise.",
          question:
            "The plan lists 6 segments with their trailing-30-day traffic. Which ones clear the 500-visitor floor and are safe to personalize this quarter?",
          toolName: "Google Sheets",
          where:
            "Paste the segment traffic table into Sheets, add a PASS/CUT column, and sort by monthly visitors descending.",
          procedure: [
            "List all 6 segments with their monthly visitor counts in column A/B",
            "Flag any segment under 500 monthly visitors as CUT in column C",
            "Sort the remaining PASS segments by traffic, highest first",
          ],
          outputSample:
            "Segment                          Monthly visitors   Verdict\nGoogle Search - power lenses          6,200      PASS\nRetargeting - cart abandoners         2,100      PASS\nLinkedIn - B2B bulk orders               340      CUT\nInstagram - contact lens first-timers    890      PASS\nReferral - existing customers            410      CUT\nEmail - lapsed customers                 610      PASS",
          healthy:
            "4 of 6 segments clear 500 visitors and move to the build stage; the 2 CUT segments get merged into a broader bucket or dropped for this quarter.",
          unhealthy:
            "All 6 segments get built and shipped simultaneously, including the 340-visitor and 410-visitor segments, because 'more personalization is always better.'",
          interpret:
            "A segment too small to reach significance isn't a smaller opportunity, it's an unmeasurable one; shipping it burns engineering time for a result you can never trust.",
          soWhat: [
            {
              symptom: "Two proposed segments sit under the 500-visitor floor",
              action: "Merge the LinkedIn B2B segment into the general awareness page instead of building a dedicated variant",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-signal-fit-check",
          concept: "Choosing a signal proportional to the business model (B2C vs. ABM)",
          lessonAnchor: "how-it-works-the-four-stage-playbook",
          theoryRecap:
            "Stage 2 of the lesson lists IP-based company enrichment as the most expensive, least precise signal, useful mainly for B2B account-based marketing pages, not individual consumer shopping.",
          question:
            "One of the surviving 4 segments proposes using IP-based company enrichment to guess a shopper's employer and personalize eyewear recommendations by 'inferred income bracket.' Does this signal fit a consumer eyewear retailer?",
          toolName: "Google Sheets",
          where: "Add a 'Signal type' and 'Fits B2C?' column next to each surviving segment.",
          procedure: [
            "List the signal each segment plans to use: UTM, cookie, CRM, or IP enrichment",
            "Mark IP-based enrichment segments for review, since Lenskart sells to individuals, not companies",
            "Replace the flagged segment's signal with a cookie-based 'returning visitor who viewed power lenses' segment instead",
          ],
          outputSample:
            "Segment                                  Signal proposed        Fits B2C?\nRetargeting - cart abandoners             Cookie                  Yes\nInstagram - contact lens first-timers     UTM                     Yes\nEmail - lapsed customers                  CRM                     Yes\nGoogle Search - power lenses               IP company enrichment   NO, flagged",
          healthy:
            "The IP-enrichment segment is rewritten to use a cookie signal (returning visitor who viewed power-lens pages twice), a concrete behavioral trigger that doesn't require inferring someone's employer to sell them glasses.",
          unhealthy:
            "The plan ships IP-based 'income bracket' personalization on a consumer storefront, which is both the wrong tool for the segment (Stage 2 flags it as an ABM signal) and the kind of over-reach that reads as creepy rather than helpful.",
          interpret:
            "Signal choice isn't just a cost decision, it has to match the business model; an ABM-grade signal on a B2C storefront is a red flag, not a nice-to-have upgrade.",
          soWhat: [
            {
              symptom: "A consumer segment is built on a B2B-grade identification signal",
              action: "Swap IP enrichment for a cookie-based behavioral signal that doesn't require inferring personal financial data",
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
            role: "Score each segment against the traffic floor and signal-fit rules",
            why: "Free, no account friction, sortable and filterable for a 6-row plan",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page segment scorecard listing all 6 proposed segments with a PASS/CUT/FLAG verdict and the reasoning for each.",
      sampleOutput:
        "Swiggy Instamart, Q3 personalization scorecard (excerpt)\n\nPASS: App reinstall push - last-order category (3,400 visitors/mo, cookie signal)\nCUT: Corporate bulk-order landing page (280 visitors/mo, below floor)\nFLAG: 'High-spender' segment built on IP-inferred neighborhood income, rewritten to use actual order-history AOV instead",
      successCriteria: [
        "Correctly cuts both segments under the 500-visitor floor",
        "Correctly flags the IP-enrichment segment as a signal/business-model mismatch",
        "Proposes a concrete replacement signal for the flagged segment",
      ],
      portfolioReady: true,
    },
    {
      id: "personalization-cro-segment-plan-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Three-Segment Personalization Plan for a Paid Traffic Launch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given three paid-traffic audiences landing on one product page, design a complete segment-signal-variant-measurement plan using the lesson's four-stage playbook, keeping every variant to 1-3 swapped elements.",
      companyId: "halo-top",
      scenario:
        "You're the growth marketer at Halo Top launching a new low-calorie ice cream SKU. Three paid campaigns are about to send traffic to one product landing page: a fitness-app partnership audience, a diet-conscious retargeting audience, and a general awareness audience.",
      brief:
        "For each of the 3 segments, choose the signal, specify the 1-3 elements to swap, and set the sample-size gate before anything ships to engineering.",
      mode: "build",
      conceptsCovered: [
        "Choose your signal",
        "Build the variant (swap only the elements that carry the message)",
        "Measure the lift against a control before rolling out",
      ],
      steps: [
        {
          stepId: "step-1-choose-signal-per-segment",
          concept: "Choose your signal",
          lessonAnchor: "how-it-works-the-four-stage-playbook",
          theoryRecap:
            "Stage 2 gives four signal options: UTM parameters, cookies, CRM data, and IP enrichment. UTM is free and already live in ad URLs, cookies work for returning-visitor logic.",
          question:
            "All 3 traffic sources come from paid ads with distinct UTM content values, and the retargeting audience has already visited the site once. Which signal should drive each segment?",
          toolName: "Google Sheets",
          where: "Build a 3-row table: segment, traffic source, chosen signal, reasoning.",
          procedure: [
            "List the 3 segments with their ad platform and UTM content values",
            "Assign UTM parameters as the signal for the fitness-app and general-awareness segments, since both are first-touch paid traffic",
            "Assign a cookie-based signal for the retargeting segment, since it needs to know the visitor already viewed the product once",
          ],
          outputSample:
            "Segment                     Traffic source        Signal\nFitness-app partnership     Paid, first-touch     UTM (utm_content=fitness-partner)\nDiet-conscious retargeting  Paid, second-touch     Cookie (site_visited=true)\nGeneral awareness           Paid, first-touch     UTM (utm_content=general)",
          healthy:
            "Each segment's signal matches its actual funnel position: first-touch traffic uses the free UTM signal already in the ad URL, retargeting uses the cookie that confirms a prior visit.",
          unhealthy:
            "All 3 segments are built on the same UTM signal, so the retargeting variant can't actually tell a returning visitor apart from a first-time one and shows the wrong message.",
          interpret:
            "The signal has to match what you actually know about the visitor at that moment, not just whichever signal is easiest to wire up first.",
          soWhat: [
            {
              symptom: "Retargeting segment can't distinguish new vs. returning visitors",
              action: "Add a site-visited cookie check ahead of the UTM check for that segment",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-build-the-variant",
          concept: "Build the variant (swap only the elements that carry the message)",
          lessonAnchor: "how-it-works-the-four-stage-playbook",
          theoryRecap:
            "Stage 3 restricts changes to the headline, sub-headline, hero image, social proof, and CTA copy, keeping layout and navigation identical. Mistake 2 warns against swapping more than 1-3 elements per variant.",
          question:
            "For each segment, which 1-3 elements should change, and what should the headline say, without touching the page layout?",
          toolName: "Figma",
          where: "Duplicate the base product-page frame 3 times and edit only the headline, sub-headline, and CTA text layers per segment.",
          procedure: [
            "Duplicate the control frame once per segment (3 total copies)",
            "Edit only the H1 headline and CTA button copy in each duplicate, leave hero image and layout untouched",
            "Label each frame with its segment name and the 2 elements changed",
          ],
          outputSample:
            "Control headline: 'Ice cream you don't have to feel guilty about'\n\nFitness-app segment headline: 'The post-workout treat with 280 calories a pint'\nFitness-app CTA: 'See the macros'\n\nRetargeting segment headline: 'Still deciding? Your cart flavor is back in stock'\nRetargeting CTA: 'Finish your order'\n\nGeneral awareness: control (no change, serves as the baseline)",
          healthy:
            "Each variant changes exactly 2 elements (headline + CTA), the layout, nav, and footer are pixel-identical to the control across all 3 frames.",
          unhealthy:
            "The fitness-app variant gets a new headline, new hero image, reordered social proof, and a new page layout all at once, so a later lift or drop can't be attributed to any single change.",
          interpret:
            "Fewer changes per variant means a clean read on what actually moved the number; more changes means a guess dressed up as a result.",
          soWhat: [
            {
              symptom: "A variant frame has more than 3 elements changed from the control",
              action: "Strip it back to headline + CTA only, move the rest to a second-round test",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-set-the-measurement-gate",
          concept: "Measure the lift against a control before rolling out",
          lessonAnchor: "how-it-works-the-four-stage-playbook",
          theoryRecap:
            "Stage 4 requires an A/B test of the variant against the control within the segment, at 95% statistical confidence, and the lesson's Mistake 1 sets the practical floor at roughly 500 monthly visitors per segment.",
          question:
            "Given the 3 segments' expected monthly traffic (fitness-app: 1,800, retargeting: 640, general: 4,200), which segments can realistically reach a confident result in 30-60 days, and what's the rollout rule for each?",
          toolName: "Google Sheets",
          where: "Add a 'measurement plan' row under each segment with expected traffic and the go/no-go rule.",
          procedure: [
            "List each segment's expected monthly traffic next to its 500-visitor floor",
            "Mark all 3 as eligible to test, since all exceed 500/month",
            "Write the rollout rule: variant wins at 95% confidence rolls out to 100% of that segment, otherwise the control stays live",
          ],
          outputSample:
            "Segment                     Monthly traffic   Eligible?   Rollout rule\nFitness-app partnership     1,800             Yes         Variant wins at 95% conf. -> 100% rollout\nDiet-conscious retargeting  640               Yes (near floor, expect a longer test window)\nGeneral awareness           4,200             Yes         Fastest segment to reach significance",
          healthy:
            "All 3 segments get an explicit rollout rule before launch, and the retargeting segment (closest to the 500 floor) is flagged to expect a longer test window rather than an early false read.",
          unhealthy:
            "The team eyeballs a lift after 2 weeks on the 640-visitor retargeting segment and rolls it out without checking for 95% confidence.",
          interpret:
            "Setting the confidence threshold and rollout rule before launch, not after seeing an early number, is what keeps personalization decisions honest.",
          soWhat: [
            {
              symptom: "A near-floor segment shows an early lift after only 2 weeks",
              action: "Hold the test open until the sample size calculator's target is actually reached before declaring a winner",
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
            role: "Plan the signal assignment and the measurement/rollout rules per segment",
            why: "Free, sortable, easy to share with engineering as the spec",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Figma",
            role: "Mock up the 3 headline/CTA variants against the control frame before handing off to engineering",
            why: "Lets engineering see the exact copy and placement instead of working from a text description",
            required: false,
            fallback: "Sketch the 3 variants as plain text blocks in Google Sheets or Google Docs instead",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 3-segment personalization spec: signal, the 1-3 changed elements with actual copy, and the measurement/rollout rule per segment, ready to hand to engineering.",
      sampleOutput:
        "Lenskart, blue-light lens launch personalization spec (excerpt)\n\nSegment: Retargeting - viewed blue-light lenses twice\nSignal: Cookie (page_view_count >= 2 on blue-light PDP)\nHeadline swap: 'Still deciding on blue-light lenses? Here's 15% off your first pair'\nCTA swap: 'Claim your discount'\nMonthly traffic: 1,100 | Eligible: Yes | Rollout rule: 95% conf. -> 100% rollout, else control stays",
      successCriteria: [
        "Assigns a signal to each segment that matches its actual funnel position",
        "Limits every variant to 1-3 changed elements, layout untouched",
        "Sets an explicit confidence threshold and rollout rule per segment before launch",
      ],
      portfolioReady: true,
      stretch:
        "Add a fourth segment using CRM data pushed from an email click, and write the JavaScript-level pseudocode for how the page would read that CRM field on load.",
    },
  ],
};
