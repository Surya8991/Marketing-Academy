import type { Project } from "@/lib/projects/types";

/**
 * Practice projects for the `brand-strategy` category (Session 85).
 * First projects in this category — created for the Brand Strategy Mastery
 * track rollout (PROJECTS_PLAN.md Stage 8.3a priority #21).
 */
export const BRAND_STRATEGY_PROJECTS: Record<string, Project[]> = {
  "brand-strategy-101": [
    {
      id: "four-layer-brand-strategy-doc-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the One-Page Brand Strategy Document",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Write a complete, one-page brand strategy document for a real company scenario, working through all four layers (Purpose, Positioning, Personality, Promise) so every statement passes the lesson's 'could a competitor copy this' test.",
      companyId: "allbirds",
      scenario:
        "You're the first marketing hire at Allbirds' India entry team. Leadership has approved the launch but there is no written brand strategy, every past decision (packaging copy, influencer picks, pricing) has been made ad hoc by whoever was in the room.",
      brief:
        "Draft the seven-component brand strategy document using the four-layer framework, then stress-test each statement against a competitor.",
      mode: "build",
      conceptsCovered: [
        "Purpose as a direction, not a destination",
        "Positioning as a hard choice, not a wish list",
        "Personality mapped to Aaker's five dimensions",
        "Promise as an operational commitment, not an ad claim",
      ],
      steps: [
        {
          stepId: "step-1-purpose",
          concept: "Purpose as a direction, not a destination",
          lessonAnchor: "layer-1-purpose",
          theoryRecap:
            "The lesson's Layer 1 defines purpose as why the organisation exists beyond profit, a statement that can never be fully achieved and eliminates a class of decisions automatically.",
          question:
            "Allbirds' actual purpose is reducing carbon footprint in the footwear industry. Write a one-sentence purpose statement for the India launch that a competitor selling 'eco-friendly sneakers' could NOT credibly copy without lying.",
          toolName: "Google Docs",
          where: "A blank Google Doc, section 1 of the brand strategy document.",
          procedure: [
            "List every claim a generic 'sustainable footwear' competitor already makes",
            "Cross out any purpose draft that overlaps with that list",
            "Write one present-tense sentence tied to a specific, measurable material or supply-chain commitment",
          ],
          outputSample:
            "DRAFT 1 (rejected): 'We make eco-friendly shoes for a better planet.' Any competitor can say this.\nDRAFT 2 (kept): 'We exist to prove that comfortable, everyday footwear can be made with a measurably lower carbon footprint than synthetic alternatives, and we publish the number on every box.'",
          healthy:
            "The purpose statement survives the competitor-copy test because it names a specific, verifiable behaviour (publishing a carbon number), not a generic value.",
          unhealthy:
            "The purpose statement is interchangeable with three other 'sustainable' brands in the same aisle.",
          interpret:
            "A purpose statement that any competitor could paste onto their own homepage is not a purpose statement, it's a category cliche.",
          soWhat: [
            {
              symptom: "Purpose draft reads like it belongs to any eco-brand",
              action: "Add one specific, measurable, ownable commitment to the sentence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-positioning",
          concept: "Positioning as a hard choice, not a wish list",
          lessonAnchor: "layer-2-positioning",
          theoryRecap:
            "Layer 2 forces a choice: you cannot be cheapest and most premium, you cannot be for everyone and resonate deeply with anyone.",
          question:
            "India's sneaker market has Bata (mass, cheap), Nike/Adidas (aspirational, premium), and Bewakoof-style D2C (trendy, low price). Using the positioning statement format, where does Allbirds win, and who does it explicitly lose to on purpose?",
          toolName: "Google Docs",
          where: "Section 2 of the brand strategy document.",
          procedure: [
            "Fill in: 'For [target] who [need], Allbirds is the [category] that [benefit] because [reason to believe]'",
            "Name the two competitor segments Allbirds is deliberately NOT competing against",
            "Write one sentence justifying why losing those segments is acceptable",
          ],
          outputSample:
            "'For environmentally conscious urban professionals who want their daily footwear choice to reflect their values, Allbirds is the everyday sneaker brand that proves comfort and sustainability aren't a trade-off, because every pair discloses its carbon footprint on the box.'\nDeliberately not competing: Bata (price-sensitive mass market), fast-fashion D2C sneaker brands (trend-cycle buyers).",
          healthy:
            "The positioning names a specific audience and explicitly excludes two segments, so a campaign brief targeting 'everyone who wears shoes' becomes an easy reject.",
          unhealthy:
            "The positioning statement tries to include price-conscious, premium, and trend-driven buyers all at once.",
          interpret:
            "A positioning statement with no stated exclusions hasn't actually chosen anything yet.",
          soWhat: [
            {
              symptom: "Marketing team keeps pitching campaigns for price-sensitive shoppers",
              action: "Reference the written exclusion list in the next campaign review",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-personality",
          concept: "Personality mapped to Aaker's five dimensions",
          lessonAnchor: "layer-3-personality",
          theoryRecap:
            "Layer 3 uses Aaker's 1997 model (Sincerity, Excitement, Competence, Sophistication, Ruggedness) to define how the brand speaks and behaves, warning that most B2B brands default to generic Competence.",
          question:
            "Pick the two Aaker dimensions Allbirds India should lead with, and write one 'we would say' / 'we would never say' example for each.",
          toolName: "Google Docs",
          where: "Section 3 of the brand strategy document.",
          procedure: [
            "Score the brand 1-5 against all five Aaker dimensions based on the purpose and positioning already written",
            "Select the top two scores as the lead personality attributes",
            "Write a would-say / would-never-say pair of sample lines for each",
          ],
          outputSample:
            "Sincerity (lead): WOULD SAY 'Here's exactly how much carbon this pair used.' WOULD NEVER SAY 'Our most revolutionary innovation yet.'\nCompetence (secondary): WOULD SAY 'Tested for 500km of daily wear.' WOULD NEVER SAY 'Limited edition drop, only 48 hours.'",
          healthy:
            "The two chosen dimensions are consistent with the purpose statement (a carbon-transparency purpose pairs naturally with Sincerity, not Excitement).",
          unhealthy:
            "The personality dimensions contradict the purpose, e.g. picking 'Excitement' and 'Sophistication' for a brand whose purpose is about honest measurement.",
          interpret:
            "Personality has to follow from purpose and positioning already decided, not be chosen independently as 'whatever sounds fun.'",
          soWhat: [
            {
              symptom: "Social copy sounds hype-driven despite a sustainability purpose",
              action: "Rewrite against the would-say/would-never-say pairs before publishing",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-promise",
          concept: "Promise as an operational commitment, not an ad claim",
          lessonAnchor: "layer-4-promise",
          theoryRecap:
            "Layer 4 defines the promise as defensible (deliverable today, not aspirationally), differentiated, and valued, an operational commitment the whole company has to build infrastructure around, not a marketing slogan.",
          question:
            "Write a one-sentence brand promise for Allbirds India that the supply chain and customer service teams could actually operationalise today, not one that only marketing could deliver.",
          toolName: "Google Docs",
          where: "Section 5 of the brand strategy document.",
          procedure: [
            "Draft a promise that references the carbon-disclosure purpose",
            "Check it against the three tests: defensible, differentiated, valued",
            "List the one operational change (e.g. supply chain data tracking) required to keep the promise true",
          ],
          outputSample:
            "PROMISE: 'Every pair you buy shows you its exact carbon footprint, verified, on the box, every time.'\nDEFENSIBLE: requires per-batch carbon tracking already built for the US line.\nDIFFERENTIATED: no competitor in the India market discloses per-unit carbon data.\nVALUED: target customer explicitly said sustainability transparency drives purchase in category research.",
          healthy:
            "The promise maps to a specific operational requirement someone in supply chain can be handed as a task.",
          unhealthy:
            "The promise is a feel-good line ('we care about the planet') with no operational owner or verification step.",
          interpret:
            "If you can't name who inside the company has to build something to keep the promise true, it isn't a promise, it's a slogan.",
          soWhat: [
            {
              symptom: "Promise sounds good but nobody owns delivering it",
              action: "Assign the operational owner and verification method in the same document",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft and structure the seven-component brand strategy document",
            why: "Free, shareable, no account friction for a solo or small-team draft",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page, seven-component brand strategy document (purpose, target audience, positioning, personality, promise, proof points, tone of voice) that passes the competitor-copy test on every line.",
      sampleOutput:
        "Casper Sleep, brand strategy excerpt\n\nPURPOSE: 'We exist to fix a broken, joyless mattress-buying process.'\nPOSITIONING: 'For sleep-deprived urban renters who dread furniture shopping, Casper is the mattress brand that makes buying a bed a 10-minute decision, because we replaced 12 confusing firmness options with one engineered-for-most design.'\nPROMISE: '100-night trial, free returns, no showroom pressure, every time.'",
      successCriteria: [
        "Every layer (purpose, positioning, personality, promise) is written and internally consistent with the others",
        "Positioning names at least two segments the brand deliberately does not compete for",
        "Promise names a specific operational owner, not just a marketing claim",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-layer-alignment-audit",
      tier: "core",
      archetype: "audit",
      title: "Diagnose a Misaligned Brand: The Four-Layer Contradiction Audit",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real company's public-facing brand signals, identify where the four layers (Purpose, Positioning, Personality, Promise) contradict each other and name the business risk each contradiction creates.",
      companyId: "warby-parker",
      scenario:
        "A DTC eyewear brand's marketing team asks you to sanity-check their brand before a funding round. Their pitch deck purpose statement, their Instagram tone, and their actual return-policy fine print don't obviously agree with each other.",
      brief:
        "Score four real brand signals against the four-layer framework and flag every contradiction with its business consequence.",
      mode: "diagnostic",
      conceptsCovered: [
        "Purpose-Promise contradiction detection",
        "Positioning-Personality mismatch detection",
        "The competitor-copy test applied as an audit tool",
      ],
      steps: [
        {
          stepId: "step-1-purpose-promise",
          concept: "Purpose-Promise contradiction detection",
          lessonAnchor: "layer-1-purpose",
          theoryRecap:
            "Common Mistake #1 in the lesson warns that aspirational positioning the operations cannot deliver destroys trust faster than having no strategy at all.",
          question:
            "The brand's stated purpose is 'democratizing access to eyewear.' Their actual pricing starts at $95 for a market where the median competitor charges $30-40. Does the purpose survive the promise test?",
          toolName: "Google Sheets",
          where: "A tracking sheet with columns: Layer, Stated Claim, Observed Behaviour, Contradiction Y/N.",
          procedure: [
            "List the exact purpose statement from the company's own public materials",
            "List the actual price point and compare to category median",
            "Mark contradiction Yes/No and write one sentence on the business risk",
          ],
          outputSample:
            "PURPOSE: 'Democratizing access to eyewear.'\nOBSERVED: Entry price $95, vs. category median $30-40 in this market.\nCONTRADICTION: Yes.\nRISK: A journalist or competitor uses the word 'democratize' against the brand in a price-comparison piece, undermining trust in every other claim.",
          healthy:
            "Purpose statements are checked against pricing and observed behaviour before publication, not just against a mission-statement workshop.",
          unhealthy:
            "The purpose statement is aspirational marketing copy nobody checked against the actual product.",
          interpret:
            "A purpose the business can't back with its own pricing is a liability the moment a competitor or journalist points it out.",
          soWhat: [
            {
              symptom: "Purpose statement uses a word ('democratizing', 'accessible') the pricing contradicts",
              action: "Either adjust the purpose language or flag the pricing gap to leadership before the funding pitch",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-positioning-personality",
          concept: "Positioning-Personality mismatch detection",
          lessonAnchor: "layer-2-positioning",
          theoryRecap:
            "The lesson's four layers must align, or, as the intro states, 'the brand collapses under its own weight' when one layer contradicts another.",
          question:
            "The brand's positioning targets 'design-conscious professionals' but their Instagram voice uses meme formats and slang aimed at Gen Z college students. Is this a contradiction or a deliberate dual-audience strategy?",
          toolName: "Google Sheets",
          where: "Same tracking sheet, second row block.",
          procedure: [
            "Pull 5 recent Instagram captions and note their tone (formal / casual / meme-driven)",
            "Compare against the stated target audience's likely tone preference",
            "Decide: contradiction, or an intentional secondary-audience test, and state which evidence supports that call",
          ],
          outputSample:
            "POSITIONING TARGET: design-conscious professionals, 28-45.\nOBSERVED TONE: 5/5 captions used Gen Z meme formats and slang.\nCONTRADICTION: Likely yes, no stated secondary-audience rationale found anywhere in public materials.\nRISK: The professional target audience may find the tone unserious for a $95+ purchase decision.",
          healthy:
            "A tone shift toward a different audience is documented as a deliberate strategy with its own positioning statement.",
          unhealthy:
            "The social team picks trending formats without checking them against the stated target audience.",
          interpret:
            "An unexplained tone-audience mismatch usually means personality was decided by whoever runs social that week, not by the brand strategy document.",
          soWhat: [
            {
              symptom: "Social content tone doesn't match the stated target audience",
              action: "Get the social team a one-page personality reference (would-say/would-never-say pairs)",
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
            role: "Track each layer's stated claim vs. observed behaviour and flag contradictions",
            why: "Free, simple enough for a fast audit with no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A contradiction log scoring at least 4 brand signals against the four-layer framework, each with a named business risk and a recommended fix.",
      sampleOutput:
        "Casper Sleep, contradiction audit excerpt\n\nLAYER: Promise\nSTATED: '100-night risk-free trial.'\nOBSERVED: Return shipping fee of $50 buried in FAQ page.\nCONTRADICTION: Yes.\nRISK: 'Risk-free' claim becomes a false-advertising exposure the moment a customer disputes the fee publicly.",
      successCriteria: [
        "At least 4 brand signals are scored against stated claims",
        "Every flagged contradiction names a specific business risk, not just 'this feels off'",
        "At least one recommended fix is operational, not just a copywriting change",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the same audit on your own employer or a brand you follow closely, and share the contradiction log with someone on that brand's team.",
    },
  ],
  "brand-vs-marketing": [
    {
      id: "brand-marketing-split-audit",
      tier: "mini",
      archetype: "audit",
      title: "Sort the List: Is This Brand or Marketing?",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a mixed list of 12 real activities from a company's operations, correctly sort each into the Brand Layer or Marketing Layer per the lesson's framework, and flag the one item that sits in both.",
      companyId: "casper-sleep",
      scenario:
        "You're onboarding as a marketing coordinator at Casper. Your manager hands you a messy list of 12 things the team is 'working on this quarter' and asks you to sort what's actually brand work versus marketing work before the planning meeting.",
      brief:
        "Classify each of 12 real activities as Brand Layer, Marketing Layer, or both, using the lesson's two-layer model.",
      mode: "diagnostic",
      conceptsCovered: [
        "Brand Layer vs. Marketing Layer classification",
        "The feedback loop between marketing execution and brand perception",
      ],
      steps: [
        {
          stepId: "step-1-classify",
          concept: "Brand Layer vs. Marketing Layer classification",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson splits the Brand Layer (positioning statement, brand voice, visual identity, core values) from the Marketing Layer (campaign strategy, channel mix, creative execution, performance measurement), operating on different time horizons.",
          question:
            "Sort this list: (1) new tagline, (2) this month's Instagram ad budget, (3) core mattress-firmness positioning, (4) an A/B test on a landing page headline, (5) the color palette refresh, (6) Q3 email send calendar, (7) customer service tone guidelines, (8) a Black Friday discount code, (9) the founder's mission statement, (10) an affiliate partnership program, (11) the logo, (12) this week's paid search bids. Which layer does each belong to?",
          toolName: "Google Sheets",
          where: "A 2-column sheet: Item, Layer (Brand / Marketing / Both).",
          procedure: [
            "List all 12 items in column A",
            "Classify each against the lesson's two lists (Brand Layer items vs. Marketing Layer items)",
            "Flag any item that genuinely straddles both layers and explain why",
          ],
          outputSample:
            "1. New tagline -> Brand (voice)\n2. Instagram ad budget -> Marketing (channel mix)\n3. Core mattress-firmness positioning -> Brand (positioning)\n4. Landing page headline A/B test -> Marketing (creative execution)\n9. Founder's mission statement -> Brand (core values)\n7. Customer service tone guidelines -> BOTH: brand voice applied through a marketing/CX touchpoint",
          healthy:
            "9 of 12 items sort cleanly into one layer; the 1-2 that straddle both are explicitly flagged with a reason, not just guessed.",
          unhealthy:
            "Everything gets labeled 'marketing' because it's happening inside the marketing team's sprint board, regardless of its actual time horizon or function.",
          interpret:
            "Team ownership (who does the work) and layer classification (what kind of decision it is) are two different questions; a marketing team executes plenty of brand-layer work.",
          soWhat: [
            {
              symptom: "Planning meeting treats a positioning change with the same urgency as a discount code",
              action: "Use the sorted list to separate the quarterly brand review from the weekly campaign standup",
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
            role: "Classify each activity into Brand Layer or Marketing Layer",
            why: "Free, fast, no setup needed for a 12-item sort",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 12-item classification sheet sorting each activity into Brand Layer, Marketing Layer, or Both, with a one-line reason for each 'Both' flag.",
      sampleOutput:
        "Lenskart, classification excerpt\n\n1. In-store frame styling guidelines -> Brand (visual identity applied at a touchpoint)\n2. This week's app push notification copy -> Marketing (campaign execution)\n3. 'Vision for a billion eyes' mission line -> Brand (core purpose)",
      successCriteria: [
        "At least 10 of 12 items are correctly classified per the lesson's two lists",
        "Any 'Both' classification includes a specific reason, not just uncertainty",
      ],
      portfolioReady: false,
    },
    {
      id: "cac-misalignment-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Forecast the CAC Cost of Brand-Marketing Misalignment",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Using the lesson's cited 36% CAC-increase figure for brand-marketing misalignment, forecast the dollar impact on a given company's acquisition budget and decide whether fixing the misalignment or accepting it is the better call this quarter.",
      companyId: "allbirds",
      scenario:
        "Allbirds' India performance marketing lead flags that this quarter's paid ads (discount-led, urgency-driven copy) don't match the brand's calm, sustainability-first positioning. Leadership wants a number before deciding whether it's worth pausing campaigns to fix.",
      brief:
        "Model current CAC against the lesson's misalignment penalty, forecast next quarter's cost if nothing changes, and recommend a call.",
      mode: "diagnostic",
      conceptsCovered: [
        "CAC impact of brand-marketing misalignment",
        "Paid-channel dependency as a symptom of weak brand equity",
      ],
      steps: [
        {
          stepId: "step-1-cac-forecast",
          concept: "CAC impact of brand-marketing misalignment",
          lessonAnchor: "why-it-matters",
          theoryRecap:
            "The lesson cites Demand Metric research showing brand-marketing misalignment raises customer acquisition costs by up to 36%, because inconsistent messaging means prospects don't build recognition or trust.",
          question:
            "Current CAC is 1,200 rupees per customer, acquiring 5,000 customers this quarter. If the discount-led ad copy is creating the kind of misalignment the lesson describes, forecast next quarter's CAC and total acquisition spend at the full 36% penalty, and at a conservative half-penalty (18%).",
          toolName: "Google Sheets",
          where: "A forecast sheet with columns: Scenario, CAC, Customers, Total Spend.",
          procedure: [
            "Calculate baseline spend: 1,200 x 5,000",
            "Calculate full-penalty CAC: 1,200 x 1.36, then total spend at same customer count",
            "Calculate half-penalty CAC: 1,200 x 1.18, then total spend",
            "Write a one-line recommendation on whether the forecasted gap justifies pausing campaigns to fix the mismatch",
          ],
          outputSample:
            "BASELINE: CAC 1,200, 5,000 customers, total spend 6,000,000\nFULL PENALTY (36%): CAC 1,632, total spend 8,160,000, gap +2,160,000\nHALF PENALTY (18%): CAC 1,416, total spend 7,080,000, gap +1,080,000\nRECOMMENDATION: Even at the conservative half-penalty, the gap (1,080,000) exceeds the estimated one-week cost of pausing paid campaigns to realign ad copy with brand voice, so pause and fix.",
          healthy:
            "The forecast is run at two scenarios (full and conservative penalty) rather than treating the cited 36% as guaranteed, and the recommendation compares the forecasted cost against a real alternative.",
          unhealthy:
            "The number gets quoted as 'we'll definitely lose 36%' without modeling a range or comparing it to the cost of the fix.",
          interpret:
            "A single cited statistic becomes useful only once it's run against the company's own numbers, and against the cost of the alternative action.",
          soWhat: [
            {
              symptom: "Team wants a specific dollar number before approving a campaign pause",
              action: "Run the two-scenario forecast and attach it to the pause request",
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
            role: "Model baseline vs. penalty-adjusted CAC scenarios",
            why: "Free, sufficient for a straightforward multiplication-based forecast",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A two-scenario CAC forecast (full penalty, conservative penalty) with a written recommendation on whether to pause and fix the misalignment this quarter.",
      sampleOutput:
        "Warby Parker, CAC forecast excerpt\n\nBASELINE: CAC $45, 20,000 customers, total spend $900,000\nFULL PENALTY (36%): CAC $61.20, total spend $1,224,000, gap +$324,000\nRECOMMENDATION: Gap exceeds one quarter's brand-copy realignment cost; fix before scaling further.",
      successCriteria: [
        "Both a full-penalty and conservative-penalty scenario are calculated correctly",
        "The recommendation explicitly compares the forecasted CAC gap to the cost of fixing the misalignment",
      ],
      portfolioReady: false,
    },
  ],

  "how-brands-grow": [
    {
      id: "how-brands-grow-cep-reach-audit",
      tier: "core",
      archetype: "audit",
      title: "The Penetration Call: Auditing a Reach and CEP Gap",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a real buyer-base breakdown and a category entry point (CEP) list, decide whether a brand's growth problem is a penetration problem or a loyalty problem, and which CEPs are underexploited.",
      companyId: "squarespace",
      scenario:
        "You're a brand analyst at Squarespace reviewing why growth has stalled despite a highly satisfied existing customer base. Leadership wants to double down on loyalty perks for current subscribers before you've looked at the numbers.",
      brief:
        "Apply the Double Jeopardy Law to the buyer data, then map which category entry points the current campaign roster actually covers, to decide where the real growth lever is.",
      mode: "diagnostic",
      conceptsCovered: ["The Double Jeopardy Law", "Category Entry Points (CEPs)"],
      steps: [
        {
          stepId: "step-1-double-jeopardy-read",
          concept: "The Double Jeopardy Law",
          lessonAnchor: "step-1-understand-the-double-jeopardy-law",
          theoryRecap:
            "The lesson's Step 1 states that bigger brands have more buyers AND those buyers purchase slightly more often, the gap between large and small brands is driven almost entirely by penetration, not loyalty.",
          question:
            "This quarter's data shows Squarespace's buyer base grew 2% while purchase frequency per existing subscriber grew 11%. Is this a healthy growth pattern by Sharp's evidence?",
          toolName: "Google Sheets",
          where: "Import buyer-base-quarterly.csv, compare the penetration column against the frequency column across the last 4 quarters.",
          procedure: [
            "Import buyer-base-quarterly.csv and chart penetration (new buyers) against frequency (repeat purchases per buyer) side by side",
            "Calculate the ratio of revenue growth attributable to each: penetration vs frequency",
            "Flag any quarter where frequency growth outpaces penetration growth by more than 3x",
          ],
          outputSample:
            "Q1: penetration +2.1%, frequency +3.0%\nQ2: penetration +1.8%, frequency +6.4%\nQ3: penetration +2.0%, frequency +11.2%\nQ4: penetration +1.6%, frequency +9.8%\n\nTrend: frequency growth accelerating, penetration growth flat to declining.",
          healthy:
            "Penetration and frequency grow together, or penetration leads, matching the Double Jeopardy pattern Sharp documented across hundreds of categories.",
          unhealthy:
            "Frequency climbing while penetration stalls or declines, revenue is being squeezed from an aging buyer base rather than replenished by new buyers.",
          interpret:
            "A brand that is only getting existing buyers to buy more, without growing who buys, is riding a ceiling. Sharp's data says this pattern precedes decline, not growth.",
          soWhat: [
            {
              symptom: "Frequency growth outpaces penetration growth by 3x or more for two consecutive quarters",
              action: "Reallocate loyalty-program budget toward broad-reach awareness media aimed at non-buyers",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cep-coverage-map",
          concept: "Category Entry Points (CEPs)",
          lessonAnchor: "step-2-build-mental-availability",
          theoryRecap:
            "The lesson's Step 2 defines Category Entry Points as every distinct occasion, mood, need, or context that could trigger a purchase, and says infrequent buyers need repeated exposure across those CEPs to form memory structures.",
          question:
            "Given this list of 10 CEPs for 'starting a website' and the brand's last 12 months of campaign briefs, how many CEPs has Squarespace's creative actually addressed?",
          toolName: "Google Docs",
          where: "Open cep-list-and-campaigns.docx, cross-reference each of the 10 CEPs against the 12-month campaign brief archive.",
          procedure: [
            "List the 10 supplied CEPs (launching a side hustle, rebranding a small business, building a portfolio, starting a newsletter, opening an online store, etc.)",
            "Tag each of the 12 monthly campaign briefs with the CEP(s) it targets",
            "Count how many of the 10 CEPs received zero dedicated creative in the period",
          ],
          outputSample:
            "CEPs covered by at least 1 campaign: 4 of 10\n  - Launching a side hustle (3 campaigns)\n  - Building a portfolio (2 campaigns)\n  - Opening an online store (4 campaigns)\n  - Rebranding a small business (1 campaign)\nCEPs with zero coverage: 6 of 10\n  - Starting a newsletter, planning a wedding site, launching a nonprofit, freelancer invoicing hub, community/membership site, event landing page",
          healthy:
            "Campaign coverage spread reasonably evenly across most CEPs, so the brand can be recalled in a wide range of buying moments.",
          unhealthy:
            "Creative concentrated on 2-3 CEPs while 6 of 10 real buying triggers get zero brand exposure, a narrow-targeting pattern the lesson's Mistake 4 warns against.",
          interpret:
            "6 uncovered CEPs are 6 buying moments where a competitor's brand is more likely to surface first, purely because Squarespace never built a memory structure there.",
          soWhat: [
            {
              symptom: "More than half of mapped CEPs have zero dedicated creative in the last 12 months",
              action: "Brief at least 2 new campaigns against the highest-volume uncovered CEPs next quarter",
              effort: "dev ticket",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Chart penetration vs frequency trends", why: "Free, no account friction, sufficient for pivot-style analysis", required: true, lastVerified: "2026-08" },
          { toolName: "Google Docs", role: "Cross-reference CEP list against campaign briefs", why: "Free, simple tagging table works without specialized software", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A one-page diagnosis stating whether the growth problem is penetration or loyalty-driven, plus a ranked list of the 3 highest-priority uncovered CEPs to brief next quarter.",
      sampleOutput:
        "Chewy Q3 Growth Diagnosis (excerpt)\n\nVERDICT: Loyalty-skewed growth pattern. Frequency +9% vs penetration +1% over 2 quarters.\n\nTOP 3 UNCOVERED CEPs TO BRIEF NEXT:\n  1. 'New pet owner, first 90 days' (est. 40% of category search volume, zero dedicated creative)\n  2. 'Switching vets, need new prescription refill' (recurring need state, zero coverage)\n  3. 'Multi-pet household restocking' (high frequency occasion, only 1 legacy campaign)",
      successCriteria: [
        "Correctly identifies whether the pattern is penetration-led or frequency-led using the Double Jeopardy framework",
        "Accurately counts covered vs uncovered CEPs from the supplied data",
        "Ranks uncovered CEPs by plausible impact, not just alphabetically",
      ],
      portfolioReady: true,
    },
    {
      id: "how-brands-grow-distinctive-asset-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Distinctive Brand Asset Inventory and Consistency Scorecard",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Build a documented inventory of a brand's distinctive assets (colour, shape, character, sonic, tagline) and score how consistently each has appeared across the last year of creative, the way Sharp's research says drives recognition.",
      companyId: "duolingo",
      scenario:
        "You're supporting Duolingo's brand team ahead of a creative refresh. Before anyone touches the assets, leadership wants a documented inventory of what currently drives recognition and how consistently it's been used, so the refresh doesn't repeat Tropicana's 2009 mistake.",
      brief:
        "Catalogue every distinctive asset the brand currently owns, then audit the last 12 months of creative output for consistency, flagging any asset that has drifted or gone missing from recent work.",
      mode: "build",
      conceptsCovered: ["Distinctive Brand Assets", "Physical Availability"],
      steps: [
        {
          stepId: "step-1-asset-inventory",
          concept: "Distinctive Brand Assets",
          lessonAnchor: "step-4-build-distinctive-brand-assets",
          theoryRecap:
            "The lesson's Step 4 explains that buyers do not carefully evaluate attributes before purchasing, most purchases are habitual and triggered by recognition cues like colour, shape, characters, sonic identifiers, and taglines, not rational comparison.",
          question:
            "Looking at 12 months of Duolingo's app-store screenshots, social posts, and out-of-home ads, which recurring visual or verbal elements would a buyer recognise without seeing the brand name?",
          toolName: "Google Sheets",
          where: "Build an asset inventory tab with columns for asset type, description, and first-observed date.",
          procedure: [
            "List every candidate distinctive asset observed across the supplied creative set (the owl mascot Duo, the specific green colour, the notification-style sound cue, the streak-flame icon)",
            "For each asset, note whether it appeared with or without the brand logo/name nearby",
            "Rank assets by how many separate creative pieces they appeared in over the 12 months",
          ],
          outputSample:
            "ASSET INVENTORY (12-month sample, 40 creative pieces reviewed)\n  Duo the owl mascot        — 38/40 pieces, appears logo-free in 21\n  Signature green (#58CC02) — 40/40 pieces, always present\n  Streak-flame icon         — 22/40 pieces, logo-free in 9\n  Notification chime sound  — 14/40 pieces (app-only), never logo-adjacent",
          healthy:
            "A small set of 3-5 assets appears in nearly every piece of creative, several strong enough to be recognised with no logo present at all.",
          unhealthy:
            "Assets appear inconsistently or only ever alongside the logo, meaning they aren't yet doing independent recognition work.",
          interpret:
            "An asset that only registers when the logo is also visible isn't yet a distinctive asset by Sharp's definition, it's decoration riding on the name, not a standalone recognition trigger.",
          soWhat: [
            {
              symptom: "A candidate asset appears in fewer than half of sampled creative pieces",
              action: "Either commit to using it in every future execution for at least 2 quarters, or drop it from the priority asset list",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-availability-check",
          concept: "Physical Availability",
          lessonAnchor: "step-3-build-physical-availability",
          theoryRecap:
            "The lesson's Step 3 defines physical availability as buyers being able to find and complete a purchase with minimal friction, covering distribution, digital findability, and checkout friction.",
          question:
            "Given the app-store category rankings and onboarding funnel data provided, where is Duolingo's physical availability strongest and where is there real friction?",
          toolName: "Google Docs",
          where: "Draft a short findability-and-friction memo referencing the supplied app-store rank and funnel-drop-off numbers.",
          procedure: [
            "Note current App Store / Play Store category rank for the core language-learning search terms provided",
            "Walk the supplied onboarding funnel and mark the step with the highest drop-off percentage",
            "Write one sentence recommending the single highest-leverage friction fix",
          ],
          outputSample:
            "App Store rank, 'learn spanish': #2 of category\nOnboarding funnel drop-off: 34% at the account-creation step (before any lesson content is shown)\nRecommendation: Move the first lesson before account creation is required, delay the signup wall by one screen.",
          healthy:
            "High findability paired with a short, low-drop-off path from discovery to first use.",
          unhealthy:
            "Strong findability undermined by a friction point that loses over a third of interested buyers before they experience the product.",
          interpret:
            "Mental availability work (the asset inventory) is wasted if physical availability has a leak this large, recognition got them to the door, friction lost them at the threshold.",
          soWhat: [
            {
              symptom: "A single funnel step accounts for over 25% of drop-off",
              action: "Prioritise that step in the next sprint over any new asset or campaign work",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build and score the distinctive asset inventory", why: "Free, tabular scoring is straightforward without specialized brand-tracking software", required: true, lastVerified: "2026-08" },
          { toolName: "Google Docs", role: "Draft the physical availability findability memo", why: "Free, lightweight enough for a short internal memo", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A distinctive asset inventory scored by consistency, plus a one-paragraph physical availability memo identifying the single highest-leverage friction fix.",
      sampleOutput:
        "Glossybox Asset Inventory (excerpt)\n\nSignature pink box       — 44/44 unboxing posts, logo-free in 30\nMonthly reveal ritual     — 40/44 posts\nInfluencer unboxing format — 18/44, inconsistent framing\n\nFriction memo: Checkout requires 6 fields before the first box ships; recommend cutting to 3 (email, address, payment) and deferring preference quiz to post-purchase.",
      successCriteria: [
        "Every candidate asset is scored against consistency and logo-independence, not just listed",
        "The friction memo cites the actual highest drop-off step from the supplied funnel data, not a guess",
        "Recommendation is a single concrete action, not a general statement",
      ],
      portfolioReady: true,
    },
  ],
  "brand-pillars": [
    {
      id: "brand-pillars-draft-and-specificity-test",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Draft 3 Candidate Brand Pillars and Run the Competitor Test",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given real customer-review language and competitor claims, draft 3 candidate brand pillars as specific phrases, not single words, and run each through the lesson's competitor test.",
      companyId: "glossybox",
      scenario:
        "You're helping Glossybox's brand team turn a pile of recurring customer-review phrases into candidate brand pillars ahead of a positioning refresh.",
      brief:
        "Turn 3 recurring pieces of genuine customer language into specific, defensible pillar phrases, then test each against what competitors could plausibly also claim.",
      mode: "build",
      conceptsCovered: ["Drafting specific pillar phrases", "The competitor test for pillar quality"],
      steps: [
        {
          stepId: "step-1-draft-pillars",
          concept: "Drafting specific pillar phrases",
          lessonAnchor: "step-4-draft-3-to-5-candidate-pillars",
          theoryRecap:
            "The lesson's Step 4 says each pillar should be a short, specific phrase, not a generic word, 'radical transparency in pricing' is a pillar, 'transparency' is not.",
          question:
            "Given these 3 recurring review phrases ('the box always arrives on the promised day', 'I found 2 brands I now buy full-size', 'their curator notes actually explain why each product was picked'), what specific pillar phrase does each suggest?",
          toolName: "Google Docs",
          where: "Draft a 2-column table: raw customer phrase, candidate pillar phrase.",
          procedure: [
            "Read each of the 3 supplied review phrases and note the underlying commitment behind it, not the surface wording",
            "Write a specific pillar phrase for each, avoiding single-word abstractions like 'reliability' or 'discovery'",
            "Check that each phrase names a concrete, checkable behaviour",
          ],
          outputSample:
            "Review phrase: 'box always arrives on the promised day' -> Pillar: 'Ship-date reliability, no surprise delays'\nReview phrase: 'found 2 brands I now buy full-size' -> Pillar: 'Curated discovery that converts to full-size purchases'\nReview phrase: 'curator notes explain why each product was picked' -> Pillar: 'Every product ships with a reason, not just a sample'",
          healthy:
            "Each pillar names a specific, observable behaviour that could be checked against a real box shipment or a real curator note.",
          unhealthy:
            "Pillars land on generic single words like 'reliability' or 'discovery' that any subscription box competitor could claim identically.",
          interpret:
            "A pillar built from a customer's literal language, kept specific, is harder for a competitor to copy word-for-word than an abstracted trait.",
          soWhat: [
            {
              symptom: "A drafted pillar is a single word or a common industry buzzword",
              action: "Rewrite it as a specific, checkable commitment before moving to the competitor test",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft and refine candidate pillar phrases", why: "Free, a simple table is enough for this exercise", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "3 candidate brand pillar phrases, each traced back to a specific piece of real customer language.",
      sampleOutput:
        "Chewy candidate pillar (excerpt)\n\nReview phrase: 'a vet card showed up after my dog passed'\nPillar: 'We treat the pet loss, not just the account cancellation'",
      successCriteria: [
        "Each pillar traces to a specific supplied customer phrase, not an invented aspiration",
        "No pillar is a single abstract word",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-pillars-competitor-test-audit",
      tier: "mini",
      archetype: "audit",
      title: "Audit 5 Draft Pillars Against the Competitor and Decision Tests",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a set of 5 already-drafted pillar candidates, decide which pass the lesson's competitor test and decision-making test, and which are decoration.",
      companyId: "chewy",
      scenario:
        "Chewy's brand team has drafted 5 pillar candidates from a workshop. Before they go into the style guide, you've been asked to stress-test each one against the lesson's two filters.",
      brief:
        "Score each of the 5 supplied pillars against two questions: could a top competitor say this with a straight face, and would living by it ever force a real no.",
      mode: "diagnostic",
      conceptsCovered: ["The competitor test for pillar quality", "Testing each pillar for decision-making power"],
      steps: [
        {
          stepId: "step-1-competitor-and-decision-test",
          concept: "Testing each pillar for decision-making power",
          lessonAnchor: "step-5-test-each-pillar-for-decision-making-power",
          theoryRecap:
            "The lesson's Step 5 says a real pillar should be able to kill a bad idea in a meeting, if living by it fully wouldn't force you to say no to anything, it's too broad to be useful.",
          question:
            "Given these 5 draft pillars ('Pet-first customer service', 'Quality', 'Fast, reliable shipping with real-time vet support', 'Innovation', 'We never upsell during a grief moment'), which pass both the competitor test and the decision test, and which should be cut?",
          toolName: "Google Sheets",
          where: "Build a 5-row scorecard with 2 pass/fail columns: competitor test, decision test.",
          procedure: [
            "For each of the 5 pillars, ask whether Petco or Amazon Pet could plausibly claim the identical phrase",
            "For each pillar, name one concrete decision it would force the team to say no to, or mark it 'none found' if nothing comes to mind",
            "Flag any pillar that fails either test for removal or rewriting",
          ],
          outputSample:
            "'Pet-first customer service' -> competitor test: FAIL (any pet retailer claims this) | decision test: none found -> CUT\n'Quality' -> competitor test: FAIL | decision test: none found -> CUT\n'Fast, reliable shipping with real-time vet support' -> competitor test: PASS (few competitors staff vets) | decision test: 'reject 3rd-party fulfillment partner with no vet line' -> KEEP\n'Innovation' -> competitor test: FAIL | decision test: none found -> CUT\n'We never upsell during a grief moment' -> competitor test: PASS | decision test: 'kill the auto-reorder email after a supplied end-of-life date flag' -> KEEP",
          healthy:
            "2-3 of the 5 candidates survive both tests and each maps to a real, nameable decision the pillar would force.",
          unhealthy:
            "All 5 pass on the surface because no one actually tried to name the decision each would force, generic language sails through unchallenged.",
          interpret:
            "A pillar that survives to the style guide without a named example of a decision it forces will sit unused, exactly the gap the lesson's data shows between the 95% who write guidelines and the 25% who enforce them.",
          soWhat: [
            {
              symptom: "A pillar has no concrete example of a decision it would force",
              action: "Either find a real example from the last quarter's decisions or cut the pillar before it reaches the style guide",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Score each pillar against the two pass/fail tests", why: "Free, a simple scorecard table is sufficient", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A 5-row pillar scorecard marking each candidate KEEP or CUT, with the named decision each surviving pillar would force.",
      sampleOutput:
        "Squarespace pillar scorecard (excerpt)\n\n'Design that a beginner can ship in an afternoon' -> competitor test: PASS | decision test: 'reject a feature requiring a code edit to use' -> KEEP\n'Trusted' -> competitor test: FAIL | decision test: none found -> CUT",
      successCriteria: [
        "Every one of the 5 supplied pillars is scored against both tests, not just the obviously weak ones",
        "Each KEEP pillar has a real, specific named decision, not a vague justification",
      ],
      portfolioReady: true,
    },
  ],

  "brand-archetypes": [
    {
      id: "archetype-selection-worksheet",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building an Archetype Selection Worksheet for a New Product Launch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's core-desire framework to select one Jungian archetype for a real product launch, then document its voice words and guardrails.",
      companyId: "swiggy",
      scenario:
        "You're the brand manager launching Swiggy Instamart as a standalone consumer brand. Marketing wants a documented personality before the ad agency starts producing creative.",
      brief:
        "Identify the core desire your target grocery shopper has, select one matching archetype, and write the 3-5 word voice plus guardrails that will govern all creative.",
      mode: "build",
      conceptsCovered: [
        "Grouping archetypes by core human drive",
        "Writing voice in 3 to 5 words with guardrails",
      ],
      steps: [
        {
          stepId: "step-1-core-desire",
          concept: "Grouping archetypes by core human drive",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson groups the 12 archetypes under four core drives: safety and order, belonging and love, mastery and achievement, freedom and discovery.",
          question:
            "Instamart's target shopper wants groceries delivered in 10 minutes without thinking about it. Which drive group does that serve, and which archetype in that group fits a fast, no-friction, dependable brand best?",
          toolName: "Google Docs",
          where: "Open a blank doc, write the customer's underlying emotional state, not their purchase reason.",
          procedure: [
            "Write one sentence describing what the Instamart shopper actually wants to feel after ordering",
            "Match that feeling against the 4 drive groups: safety/order, belonging, mastery, freedom/discovery",
            "Shortlist the 3 archetypes inside the matching group and rule out any that require a personality trait Instamart doesn't have (e.g. Ruler's prestige)",
            "Pick one archetype and write the one-sentence reason it fits both the customer's desire and the brand's actual character",
          ],
          outputSample:
            "Drive: Safety and order\nShortlist: Innocent, Caregiver, Ruler\nRuled out: Ruler (prestige/control doesn't fit a 10-min grocery app)\nSelected: Caregiver — Instamart's whole promise is removing the anxiety of an empty fridge, fast, dependable, no drama.",
          healthy: "The chosen archetype maps directly to a specific customer emotional outcome, not a mood board aesthetic.",
          unhealthy: "Picking 'Explorer' because adventurous photography looks good in the deck, with no link to what a grocery shopper actually wants.",
          interpret: "If you can't state the customer's core desire in one sentence before picking, the archetype choice isn't grounded yet.",
          soWhat: [
            {
              symptom: "Team disagrees on Instamart's brand personality in every creative review",
              action: "Force the core-desire sentence exercise before revisiting the archetype",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-voice-guardrails",
          concept: "Writing voice in 3 to 5 words with guardrails",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 3 and Step 4 turn the archetype into a usable filter: 3-5 voice words, plus 'always/never/never under any circumstances' guardrails.",
          question:
            "Given Caregiver as the selected archetype, what 3-5 voice words and 3 guardrails would keep every copywriter and agency aligned without a briefing call?",
          toolName: "Google Docs",
          where: "Same doc, new section titled Voice and Guardrails.",
          procedure: [
            "Write 3-5 adjectives that describe how a Caregiver brand talks (e.g. gentle, reassuring, dependable)",
            "Write one 'We will always...' guardrail tied to the archetype",
            "Write one 'We will never...' guardrail",
            "Write one 'We never, under any circumstances...' guardrail",
            "Test the guardrails against 2 real ad headline drafts and flag any that violate them",
          ],
          outputSample:
            "Voice: gentle, dependable, reassuring, unpretentious\nAlways: speak like a neighbor who noticed you're out of milk\nNever: use urgency or scarcity language ('Hurry, offer ends!')\nNever under any circumstances: mock a customer for forgetting to shop ahead",
          healthy: "Guardrails are specific enough that two different writers would flag the same headline as off-brand.",
          unhealthy: "Guardrails so vague ('be nice') that no one can point to a violation.",
          interpret: "A guardrail that can't reject a real headline draft isn't a guardrail yet, it's a wish.",
          soWhat: [
            {
              symptom: "New agency copy doesn't sound like Instamart",
              action: "Hand them the voice words plus guardrails doc before any brief, not after revisions",
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
            role: "Draft the worksheet",
            why: "Free, shareable, version history",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page archetype selection worksheet: core desire sentence, selected archetype with reasoning, 3-5 voice words, and 3 guardrails.",
      sampleOutput:
        "Zomato Instant, Archetype Worksheet (excerpt)\n\nCore desire: 'I don't want to think about dinner, I just want it handled.'\nDrive: Mastery and achievement\nSelected: Hero — the brand takes on the chore of dinner logistics so the customer doesn't have to fight it themselves\nVoice: capable, fast, no-nonsense, warm\nAlways: show the order actually arriving, not just the app screen\nNever: shame a customer for ordering instead of cooking",
      successCriteria: [
        "States the customer's core desire in one sentence before naming an archetype",
        "Selected archetype traces to a specific drive group, not an aesthetic preference",
        "3-5 voice words and all 3 guardrail types are present and specific enough to reject a real headline",
      ],
      portfolioReady: true,
    },
    {
      id: "touchpoint-archetype-audit",
      tier: "core",
      archetype: "audit",
      title: "Auditing a Real Brand's Touchpoints for Archetype Consistency",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a set of real brand touchpoints, identify which archetype the brand is actually expressing at each one and flag the touchpoints that are off-archetype.",
      companyId: "zomato",
      scenario:
        "You're a new brand strategist reviewing Zomato's public touchpoints ahead of a rebrand pitch. Leadership wants to know if the brand's stated personality is actually being lived out.",
      brief:
        "Pull 5 real, current Zomato touchpoints (homepage copy, app store description, a recent social post, an ad, a customer support macro), determine what archetype each one is expressing, and flag mismatches.",
      mode: "diagnostic",
      conceptsCovered: [
        "Auditing touchpoints against a chosen archetype",
        "Detecting archetype blending as a symptom of drift",
      ],
      steps: [
        {
          stepId: "step-1-touchpoint-audit",
          concept: "Auditing touchpoints against a chosen archetype",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Step 5 of the lesson's playbook has you read each touchpoint and ask 'does this sound like archetype X or a different one?'",
          question:
            "You've pulled 5 real Zomato touchpoints. For each, which of the 12 archetypes' natural tone (per the lesson's reference table) does the copy actually match?",
          toolName: "Google Sheets",
          where: "Paste each touchpoint's text into its own row, add an 'archetype detected' column.",
          procedure: [
            "Paste the exact text of 5 touchpoints: homepage hero line, app store description, one recent Instagram/X caption, one ad headline, one support macro",
            "For each row, name the archetype whose natural tone (from the lesson's 12-archetype table) it most closely matches",
            "Note any row where the tone doesn't cleanly match any single archetype",
            "Count how many distinct archetypes appear across the 5 rows",
          ],
          outputSample:
            "Touchpoint | Text (excerpt) | Archetype detected\nHomepage hero | 'Order food & more' | Everyman (plain, no drama)\nInstagram caption | witty meme about biryani cravings | Jester\nSupport macro | formal, scripted apology language | Ruler (unintentional)\n\n3 distinct archetypes across 5 touchpoints",
          healthy: "1 archetype appears across at least 4 of 5 touchpoints, showing a dominant, consistent personality.",
          unhealthy: "3+ different archetypes across 5 touchpoints with no dominant pattern, evidence of the drift the lesson's Mistake 4 warns about.",
          interpret: "The number of distinct archetypes detected is a direct measure of enforcement gap, not a matter of opinion.",
          soWhat: [
            {
              symptom: "Support tone reads as Ruler while marketing reads as Jester",
              action: "Flag the support macro for a rewrite brief using the marketing team's voice words",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-dominant-verdict",
          concept: "Detecting archetype blending as a symptom of drift",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 2 in the lesson warns that blending two archetypes ('heroic AND caring') functions as a brand death sentence, only one archetype should govern major decisions.",
          question:
            "Your audit found 3 distinct archetypes. Which one is closest to dominant, and what's the single guardrail you'd write to pull the other touchpoints back in line?",
          toolName: "Google Sheets",
          where: "Same sheet, add a verdict column.",
          procedure: [
            "Count occurrences of each detected archetype across the 5 rows",
            "Name the plurality archetype as the working dominant archetype",
            "Write one guardrail sentence that would have prevented the worst-mismatched touchpoint",
            "Recommend which touchpoint to fix first based on visibility and mismatch severity",
          ],
          outputSample:
            "Dominant (by count): Everyman (2 of 5)\nWorst mismatch: Support macro (Ruler tone in an Everyman brand)\nGuardrail: 'We will never use formal, distancing language in support responses'\nFix first: Support macro — highest customer-facing frequency, most damaging mismatch",
          healthy: "The recommended fix targets the highest-frequency, highest-visibility mismatch first, not the easiest one to change.",
          unhealthy: "Recommending a fix to the lowest-traffic touchpoint because it's the fastest one to edit.",
          interpret: "Prioritize by customer exposure times mismatch severity, not by editing convenience.",
          soWhat: [
            {
              symptom: "Leadership asks where to start a brand voice cleanup",
              action: "Hand them the frequency-ranked mismatch table, not a full rebrand brief",
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
            role: "Log and score each touchpoint",
            why: "Free, sortable, easy to share with stakeholders",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-row touchpoint audit sheet with detected archetype per row, a dominant-archetype verdict, and one prioritized fix recommendation.",
      sampleOutput:
        "Klaviyo Touchpoint Audit (excerpt)\n\nHomepage hero: 'Owned marketing, not rented reach' — Sage (precise, credible)\nSupport macro: warm, first-name, casual — Everyman\nVerdict: Sage dominant (3 of 5), support macro is the outlier\nFix first: rewrite support macro to lead with a precise, credible line instead of casual small talk",
      successCriteria: [
        "All 5 touchpoints are assigned a specific archetype from the lesson's 12, not a vague description",
        "Dominant archetype is identified by actual count, not assumption",
        "Fix recommendation is prioritized by visibility and severity, not convenience",
      ],
      portfolioReady: true,
    },
  ],
  "visual-identity": [
    {
      id: "reverse-engineer-visual-identity-system",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineering a Real Company's Visual Identity System",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real company's live touchpoints, extract and document the five pillars of its visual identity system as if writing their brand guidelines from observation alone.",
      companyId: "klaviyo",
      scenario:
        "You're a freelance brand consultant pitching Klaviyo for a competitive brand audit. To prove you understand systems thinking, you reverse-engineer their current visual identity from public touchpoints before the call.",
      brief:
        "Visit Klaviyo's website, app screenshots, and social profiles. Document their primary color (with hex if visible), heading font style, and photography/illustration style as if writing page 1 of their brand guidelines.",
      mode: "diagnostic",
      conceptsCovered: [
        "Extracting a color system from live touchpoints",
        "Extracting a type and imagery style from live touchpoints",
      ],
      steps: [
        {
          stepId: "step-1-color-extraction",
          concept: "Extracting a color system from live touchpoints",
          lessonAnchor: "2-color-system",
          theoryRecap:
            "The lesson's Color System pillar requires a primary color, secondary colors, neutrals, and semantic colors, each with a documented hex value.",
          question:
            "Looking at Klaviyo's website and app screenshots, what's the primary brand color, and where does it show up versus where a neutral is used instead?",
          toolName: "Figma",
          where: "Use Figma's eyedropper on screenshots pasted into a new file, or the browser's built-in inspector color picker.",
          procedure: [
            "Take 3 screenshots: homepage hero, a CTA button, and the app product UI",
            "Paste into Figma and use the eyedropper to sample the CTA button color, this is very likely the primary",
            "Sample 2 more colors used for backgrounds or secondary buttons, label as secondary or neutral",
            "Write the hex values you found next to each label",
          ],
          outputSample:
            "Primary (CTA buttons): coral-orange accent, consistent across all 3 screenshots\nSecondary: soft yellow accent on data charts\nNeutral: off-white background, dark navy body text",
          healthy: "The color used most consistently on CTAs and key actions across all 3 screenshots is confidently labeled primary.",
          unhealthy: "Labeling a rarely-used accent color as primary because it happened to be the most visually striking one in a single hero image.",
          interpret: "Primary color is defined by function (what carries the CTA) not by which color is largest on screen.",
          soWhat: [
            {
              symptom: "Two people on the audit disagree on the primary color",
              action: "Re-check across all 3 screenshot types before deciding, not just the homepage",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-type-imagery",
          concept: "Extracting a type and imagery style from live touchpoints",
          lessonAnchor: "3-typography",
          theoryRecap:
            "The lesson's Typography and Imagery pillars call for naming the heading font's character and the photography's subject matter, color treatment, and composition rules.",
          question:
            "What does the heading font's shape suggest about brand personality, and what's the dominant subject matter and color treatment in their marketing imagery?",
          toolName: "Figma",
          where: "Same Figma file, add a Typography and Imagery section.",
          procedure: [
            "Screenshot an H1 headline and describe its shape: geometric sans, humanist sans, serif, etc.",
            "Note whether body text is a different, more legible font or the same family",
            "Pull 2-3 marketing images and describe subject matter (people, product UI, abstract) and color treatment (high contrast, muted, warm)",
            "Write one sentence connecting the type and imagery choices to a likely brand personality",
          ],
          outputSample:
            "Heading font: geometric sans, tight letter spacing, confident\nBody font: same family, lighter weight, legible at small sizes\nImagery: abstract data visualizations plus real founder headshots, high contrast, consistent accent color\nPersonality read: precise and data-forward, but warmed up by real human photos, not purely corporate",
          healthy: "The type and imagery description could let a new designer produce an on-brand asset without seeing the original guidelines.",
          unhealthy: "A vague description like 'modern and clean' that could apply to almost any SaaS brand.",
          interpret: "If your description isn't specific enough to reject an off-brand asset, it isn't a spec yet, just an impression.",
          soWhat: [
            {
              symptom: "A freelancer's first draft doesn't feel on-brand",
              action: "Hand them this documented type/imagery read instead of just the logo file",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Figma",
            role: "Sample colors and organize screenshots",
            why: "Free tier eyedropper and canvas is enough for a reverse-engineering pass",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page reverse-engineered visual identity brief covering primary/secondary/neutral colors with hex values, type character, and imagery style.",
      sampleOutput:
        "Swiggy, Reverse-Engineered Visual Brief (excerpt)\n\nPrimary: #FC8019 orange, used on every CTA and the app icon\nSecondary: black used for headlines, high contrast against orange\nType: bold, rounded sans, playful and energetic\nImagery: bright, saturated food photography, close-cropped, appetite-forward",
      successCriteria: [
        "Primary color is identified by CTA/functional consistency across 3+ touchpoints, not visual dominance in one image",
        "Type and imagery descriptions are specific enough to brief a new designer without seeing the original guidelines",
      ],
      portfolioReady: true,
    },
    {
      id: "one-page-brand-guidelines-sheet",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building a One-Page Brand Guidelines Sheet",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Compress the lesson's five pillars into a single-page, actionable guidelines sheet for a real product launch, the minimum viable version a freelancer or new hire could actually follow.",
      companyId: "zomato",
      scenario:
        "You're supporting Zomato's marketing team on a new sub-brand launch (a quick-commerce vertical) that has no documented visual system yet, only a logo file from the design team.",
      brief:
        "Given only a logo and one brand color, build the one-page guidelines sheet covering the two highest-leverage decisions the lesson recommends starting with: primary color and heading font, plus a minimum-size rule for the logo.",
      mode: "build",
      conceptsCovered: [
        "Starting a visual identity system with the two highest-leverage decisions",
        "Specifying color in multiple formats for print and digital",
      ],
      steps: [
        {
          stepId: "step-1-color-font",
          concept: "Starting a visual identity system with the two highest-leverage decisions",
          lessonAnchor: "the-visual-identity-build-process",
          theoryRecap:
            "The lesson's tip callout says if you have nothing and need to start today, pick your primary brand color and heading font first, these two decisions carry the highest leverage.",
          question:
            "Given only Zomato's existing sub-brand logo and one hex color from the design team, what heading font pairs with it, and what's the minimum clear-space rule for the logo?",
          toolName: "Canva",
          where: "Canva's Brand Kit panel, or a blank design if no Brand Kit access.",
          procedure: [
            "Enter the given primary hex color into a new Canva design",
            "Test 3 heading font options against the logo, pick the one that doesn't visually compete with the logo's own shape",
            "Set a minimum logo size rule (e.g. never smaller than 24px on digital) and a clear space rule (padding equal to the logo's cap height)",
            "Write both rules directly under the logo on the sheet",
          ],
          outputSample:
            "Primary color: #FF6B35\nHeading font: Poppins SemiBold (geometric, doesn't compete with the logo's rounded mark)\nMinimum logo size: 24px digital / 0.5in print\nClear space: padding equal to the height of the 'Z' in the wordmark",
          healthy: "The chosen font's weight and shape visually complement the logo instead of fighting it for attention in the same layout.",
          unhealthy: "Picking a heading font because it looks trendy, without testing it next to the actual logo file.",
          interpret: "A font choice untested against the real logo is a guess, not a decision.",
          soWhat: [
            {
              symptom: "The heading font and logo look mismatched on the first real asset",
              action: "Re-test 2 more font options directly against the logo before finalizing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-color-formats",
          concept: "Specifying color in multiple formats for print and digital",
          lessonAnchor: "2-color-system",
          theoryRecap:
            "The lesson's Color System pillar requires every color specified in HEX, RGB, and CMYK, since 'close enough' costs recognition exactly when you need it most.",
          question:
            "Your primary color is #FF6B35 for digital. What's the CMYK equivalent the print team needs, and why can't they just guess it from the hex?",
          toolName: "Canva",
          where: "Canva's color picker shows HEX, RGB, and CMYK simultaneously when you select a color swatch.",
          procedure: [
            "Select the primary color swatch in Canva and open the color picker",
            "Record the HEX, RGB, and CMYK values shown",
            "Add all three values to the guidelines sheet under the primary color swatch",
            "Note that a print vendor converting HEX to CMYK themselves can shift the color visibly",
          ],
          outputSample: "Primary color\nHEX: #FF6B35\nRGB: 255, 107, 53\nCMYK: 0, 58, 79, 0",
          healthy: "All three color formats are documented before the first print asset (business card, packaging insert) goes to a vendor.",
          unhealthy: "Sending only the hex code to a print vendor and letting them auto-convert, risking a visibly different orange on physical materials.",
          interpret: "A hex-only spec is a digital-only spec. Print always needs its own documented value.",
          soWhat: [
            {
              symptom: "Printed packaging looks like a different orange than the app",
              action: "Get the CMYK value from design before approving any print run",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Canva",
            role: "Build the one-page sheet and pull HEX/RGB/CMYK values",
            why: "Free tier color picker and layout tools cover a one-page sheet completely",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page brand guidelines sheet: primary color in HEX/RGB/CMYK, heading font choice with rationale, and logo minimum-size plus clear-space rules.",
      sampleOutput:
        "Swiggy Instamart, One-Page Guidelines (excerpt)\n\nPrimary: #FC8019 / RGB 252,128,25 / CMYK 0,49,90,1\nHeading font: Circular Std Bold\nMin logo size: 20px digital\nClear space: 1x the icon's width on all sides",
      successCriteria: [
        "Primary color is documented in all 3 formats, not hex alone",
        "Heading font choice is tested against the actual logo file before being finalized",
        "Logo minimum-size and clear-space rules are both present with specific numeric values",
      ],
      portfolioReady: true,
    },
  ],

  "naming": [
    {
      id: "naming-fintech-feature-shortlist",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Naming Shortlist for a New Fintech Feature",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Generate and filter a real naming shortlist for a new product feature using the lesson's four generation methods and four-filter test.",
      companyId: "robinhood",
      scenario: "Robinhood is launching a new fractional-share gifting feature and needs a standalone feature name, not just \"Gifting,\" that can survive trademark scrutiny and scale internationally.",
      brief: "Generate 12+ candidates across all four generation methods, then run each through the spell/say/search/scale filter and submit a ranked shortlist of 3.",
      mode: "build",
      conceptsCovered: ["Generating a large candidate pool across four methods"],
      steps: [
        {
          stepId: "step-1-generate-candidates",
          concept: "Generating a large candidate pool across four methods",
          lessonAnchor: "step-2-generate-a-large-candidate-pool",
          theoryRecap: "The lesson's Step 2 gives four generation methods: thematic brainstorm, root word exploration, unexpected adjacency, and portmanteau construction, so no single method biases the pool.",
          question: "Using all four methods, can you generate at least 3 candidates per method (12+ total) for a fractional-share gifting feature before filtering anything out?",
          toolName: "Google Docs",
          where: "A shared Google Doc with four labeled columns, one per generation method.",
          procedure: [
            "Thematic brainstorm: list 10 words tied to 'giving' and 'ownership', then combine or distort 3 of them",
            "Root word exploration: pull 3 candidates from Latin/Greek roots for 'share' or 'gift' (e.g. dona-, part-)",
            "Unexpected adjacency: pick an unrelated category (gardening, astronomy) and pull 3 candidate words from it",
            "Portmanteau construction: merge two meaningful words (e.g. 'share' + 'kindle') into 3 candidates",
          ],
          outputSample: "THEMATIC: Giftly, Sharecircle, Ownshare\nROOT WORD: Donari, Partis, Kleros\nADJACENCY: Sprout, Bloomshare, Orbit\nPORTMANTEAU: Sharedle, Giftfolio, Sprinkle",
          healthy: "12+ candidates spread evenly across all four methods before any filtering begins.",
          unhealthy: "8 of 12 candidates are minor variations of the same thematic word because brainstorming stopped after one method felt productive.",
          interpret: "A pool skewed toward one generation method produces a shortlist that only reflects one creative lens, not the full range of naming strategies from the lesson.",
          soWhat: [
            { symptom: "Every candidate sounds like a variation of 'share' or 'gift'", action: "Force at least 3 candidates from the adjacency and portmanteau methods before filtering", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft and organize the candidate pool by generation method", why: "Free, shareable, no account friction for a brainstorming document", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A ranked shortlist of 3 final name candidates, each annotated with which generation method produced it and its pass/fail result on all four filters.",
      sampleOutput: "PolicyBazaar Health Add-On, naming shortlist (excerpt)\n\nFINALIST 1: CoverKind (portmanteau: cover + kind)\n  Spell: PASS (3/3 testers spelled it correctly)\n  Say: PASS\n  Search: PASS (no competitor domination on page 1)\n  Scale: PASS (works beyond health into life/auto add-ons)\n\nCUT: HealthGuardPlus (descriptive)\n  Spell: PASS   Say: PASS   Search: FAIL (page 1 dominated by an existing HDFC product)   Scale: FAIL (locked to health only)",
      successCriteria: [
        "At least 3 candidates generated per each of the 4 generation methods",
        "All 12+ candidates run through the spell/say/search/scale filter with a pass/fail noted for each",
        "Final shortlist of exactly 3 names, each with its generation method labeled",
      ],
      portfolioReady: true,
    },
    {
      id: "naming-candidate-export-audit",
      tier: "core",
      archetype: "audit",
      title: "The Clearance Call: Auditing a Sub-Brand Naming Shortlist",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Given a real 10-name shortlist for a new sub-brand, apply the four-filter test and a trademark-clearance triage to decide which names survive to legal review.",
      companyId: "firstcry-brainbees",
      scenario: "FirstCry is launching a premium maternity sub-brand and the internal team has produced a 10-name shortlist with no filtering applied yet. You have one week before names go to outside counsel.",
      brief: "Apply the four-filter test to eliminate weak candidates, then triage the survivors by trademark-conflict risk before recommending which 3 go to a paid clearance opinion.",
      mode: "diagnostic",
      conceptsCovered: ["Applying the four-filter test", "Triaging trademark clearance risk before paying for a legal opinion"],
      steps: [
        {
          stepId: "step-1-four-filter-audit",
          concept: "Applying the four-filter test",
          lessonAnchor: "step-3-apply-the-four-filter-test",
          theoryRecap: "The lesson's Step 3 eliminates any candidate that fails two or more of spell, say, search, and scale.",
          question: "Of the 10 shortlisted names, 4 fail the search test because a competitor already dominates page 1. Do any of those 4 also fail a second filter, and should they be cut immediately?",
          toolName: "Google Sheets",
          where: "Import the 10-name shortlist into a sheet with 4 filter columns, mark PASS/FAIL per name.",
          procedure: [
            "Import the 10-name shortlist and add spell/say/search/scale columns",
            "Google each name and mark search PASS/FAIL based on page-1 competitor dominance",
            "Read each name aloud to 2 colleagues and mark say PASS/FAIL on pronunciation agreement",
            "Cut any name failing 2 or more filters",
          ],
          outputSample: "SHORTLIST AUDIT (10 names)\n  MaternaCare: search FAIL (existing competitor), scale PASS, spell PASS, say PASS -> KEEP (1 fail)\n  BumpEssentials: search FAIL, scale FAIL (too narrow), spell PASS, say PASS -> CUT (2 fails)\n  Nestlingo: search PASS, scale PASS, spell FAIL, say PASS -> KEEP (1 fail)",
          healthy: "Only names failing 0-1 filters remain on the shortlist after this pass.",
          unhealthy: "A name that fails 3 of 4 filters stays on the list because the team likes how it sounds.",
          interpret: "The filter is a hard cutoff, not a scoring suggestion; sentimental attachment to a failing name is exactly what the framework exists to override.",
          soWhat: [
            { symptom: "A favorite name fails 2+ filters but nobody wants to cut it", action: "Present the filter scorecard in the next review meeting before any subjective discussion happens", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-clearance-triage",
          concept: "Triaging trademark clearance risk before paying for a legal opinion",
          lessonAnchor: "step-4-trademark-clearance",
          theoryRecap: "The lesson's Step 4 recommends a free USPTO TESS search before spending $500-$2,000 per name on a full attorney clearance opinion.",
          question: "Of the names surviving the four-filter cut, which show an exact or close match in a free USPTO TESS search, and should be dropped before paying for legal review?",
          toolName: "Google Sheets",
          where: "Add a 'TESS search result' column to the same shortlist sheet.",
          procedure: [
            "Run each surviving name through a free USPTO TESS search",
            "Mark CLEAR, CLOSE MATCH, or CONFLICT for each",
            "Drop any CONFLICT names regardless of how well they scored on the four-filter test",
            "Send only CLEAR or CLOSE MATCH names to the paid clearance opinion",
          ],
          outputSample: "CLEARANCE TRIAGE (3 survivors)\n  MaternaCare: TESS = CLOSE MATCH (registered in an adjacent class) -> hold, needs attorney opinion\n  Nestlingo: TESS = CLEAR -> send to attorney\n  BabyBloom: TESS = CONFLICT (exact match, active registration) -> DROP, do not pay for opinion",
          healthy: "Only 2-3 names go to the paid attorney opinion, each already cleared or close-matched via free search.",
          unhealthy: "All 5 surviving names go to the attorney sight-unseen, spending $2,500-$10,000 on names a free search would have eliminated.",
          interpret: "The free TESS search is a triage filter, not a substitute for legal opinion, but it should always run first to avoid paying for names with an obvious conflict.",
          soWhat: [
            { symptom: "Budget for legal clearance opinions is fixed at 3 names but 5 survived the four-filter test", action: "Run the free TESS triage before sending any names to counsel, cut CONFLICT results immediately", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Track filter results and TESS triage across the shortlist", why: "Free, sortable, easy to share with the legal team", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A filtered shortlist of 2-3 names with a documented pass/fail on all four filters plus a TESS clearance triage result for each, ready to hand to outside counsel.",
      sampleOutput: "Robinhood Retirement Add-On, clearance triage (excerpt)\n\nSURVIVOR 1: VaultAge\n  4-filter: 0 fails   TESS: CLEAR   Recommendation: send to attorney\n\nDROPPED: NestEgg Direct\n  4-filter: 1 fail (scale)   TESS: CONFLICT (registered by a competing broker)   Recommendation: do not pursue",
      successCriteria: [
        "All 10 names scored against all 4 filters with pass/fail documented",
        "Names failing 2+ filters are cut before the TESS triage step",
        "TESS triage completed for every filter-surviving name, with CONFLICT names dropped before recommending a legal spend",
      ],
      portfolioReady: true,
    },
  ],
  "brand-voice-system": [
    {
      id: "voice-system-attribute-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a 3-Attribute Voice System for a Support Team",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Draft 3 voice attributes, each with a label, a contrast statement, and an on-voice/off-voice example pair, for a real support-team scenario.",
      companyId: "policybazaar",
      scenario: "PolicyBazaar's support team has no documented voice guide, and agent replies range from overly formal to overly casual depending on who wrote them.",
      brief: "Define exactly 3 voice attributes for the support team, each actionable enough that a new agent could apply it to a real reply within 60 seconds.",
      mode: "build",
      conceptsCovered: ["Defining voice attributes with label, contrast statement, and example pair"],
      steps: [
        {
          stepId: "step-1-define-attributes",
          concept: "Defining voice attributes with label, contrast statement, and example pair",
          lessonAnchor: "stage-2-define",
          theoryRecap: "The lesson's Stage 2 requires exactly 3-5 attributes, each with a label, a 'we are X, not Y' contrast statement, and one off-voice/on-voice example pair covering the same idea.",
          question: "Can you write a contrast statement for 'Direct' that actually tells an agent what NOT to do, not just what to do?",
          toolName: "Google Docs",
          where: "A shared Google Doc with one section per attribute.",
          procedure: [
            "Pick 3 attributes that describe how support should sound (e.g. Direct, Reassuring, Plain)",
            "Write a 'we are X, not Y' contrast statement for each",
            "Write one real off-voice sentence and one on-voice sentence covering the same claim status update",
            "Test each attribute by asking a colleague to edit a sample reply using only the label",
          ],
          outputSample: "ATTRIBUTE: Direct\nContrast: We are direct, not blunt. We say what happened without hedging, but we never skip context the customer needs.\nOff-voice: 'There may be a possibility your claim could potentially require further review.'\nOn-voice: 'Your claim needs one more document before we can approve it. Here's what to upload.'",
          healthy: "A colleague who was not involved in writing the attribute can apply it to a real reply within 60 seconds.",
          unhealthy: "The attribute is just an adjective ('Direct') with no contrast statement, so two writers interpret it in opposite directions.",
          interpret: "An attribute without a contrast statement is decoration, not a usable rule; the contrast is where the actual guidance lives.",
          soWhat: [
            { symptom: "A test writer cannot apply the attribute to a real reply in under 60 seconds", action: "Rewrite the contrast statement to name the specific behavior it forbids, not just the behavior it wants", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft attributes, contrast statements, and example pairs", why: "Free, easy to share with the support team for testing", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A 3-attribute voice mini-guide, each with a label, a contrast statement, and one off-voice/on-voice example pair drawn from a real support scenario.",
      sampleOutput: "Robinhood Support, voice mini-guide (excerpt)\n\nATTRIBUTE: Calm\nContrast: We are calm, not clinical. We acknowledge the customer is worried about their money, but we never use jargon to sound official.\nOff-voice: 'Your order execution has been flagged pending compliance verification.'\nOn-voice: 'We paused your order to double-check something on our end. It'll clear within an hour, no action needed from you.'",
      successCriteria: [
        "Exactly 3 attributes defined, no more",
        "Every attribute has a label, a 'we are X, not Y' contrast statement, and an example pair",
        "A test reader can apply at least one attribute to a real reply within 60 seconds",
      ],
      portfolioReady: true,
    },
    {
      id: "voice-drift-content-audit",
      tier: "mini",
      archetype: "audit",
      title: "Audit 10 Content Pieces for Voice Drift",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Apply the lesson's Stage 1 audit diagnostic to a set of 10 real content pieces and flag which ones would fail the 'logo removed' test.",
      companyId: "firstcry-brainbees",
      scenario: "FirstCry has content from 4 different teams, marketing emails, app push notifications, support replies, and social captions, with no shared voice check performed in over a year.",
      brief: "Read all 10 pieces aloud, apply the logo-removed diagnostic, and flag structural drift patterns, not just individual off-voice lines.",
      mode: "diagnostic",
      conceptsCovered: ["The logo-removed diagnostic for voice audits"],
      steps: [
        {
          stepId: "step-1-logo-removed-audit",
          concept: "The logo-removed diagnostic for voice audits",
          lessonAnchor: "stage-1-audit",
          theoryRecap: "The lesson's Stage 1 asks one diagnostic question per piece: if the logo were removed, would a reader still know this came from your organization?",
          question: "Of 10 pieces across 4 teams, if more than 5 fail the logo-removed test, is the voice problem structural or just a few bad drafts?",
          toolName: "Google Sheets",
          where: "List all 10 pieces in a sheet with a PASS/FAIL column for the logo-removed test and a notes column.",
          procedure: [
            "Read each of the 10 pieces aloud without seeing which team wrote it",
            "Mark PASS if the piece is recognizably on-brand without the logo, FAIL if it isn't",
            "For each FAIL, note the specific drift pattern (jargon, formality swing, missing personality)",
            "Count FAILs; if more than half the sample fails, flag the problem as structural",
          ],
          outputSample: "VOICE AUDIT (10 pieces)\n  Marketing email #1: PASS\n  Push notification #2: FAIL - reads like a system alert, no personality\n  Support reply #4: FAIL - overly formal, no contraction use anywhere\n  Social caption #7: PASS\n  ...\n  TOTAL: 6 of 10 FAIL -> structural problem, not editorial",
          healthy: "Fewer than half the sample fails, and failures cluster around one team or format, pointing to a targeted fix.",
          unhealthy: "More than half the sample fails and failures span every team and format with no shared pattern.",
          interpret: "A high fail rate spread across teams means there is no shared voice document doing any work, this is a Stage 2/3 gap, not a training problem with one team.",
          soWhat: [
            { symptom: "6 of 10 pieces fail the logo-removed test across 4 different teams", action: "Escalate to defining and documenting voice attributes (Stage 2-3) rather than editing individual pieces", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Track pass/fail results and drift notes across all 10 pieces", why: "Free, easy to sort and share with stakeholders across teams", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A completed 10-row audit sheet with a PASS/FAIL call and a specific drift note for every piece, plus a one-line verdict on whether the problem is structural or editorial.",
      sampleOutput: "PolicyBazaar Content Audit (excerpt)\n\nEmail #3: FAIL - jargon-heavy ('premium remittance schedule') where support copy elsewhere uses plain language\nPush #6: PASS\nVERDICT: 7 of 10 pieces fail; drift concentrated in email and support, not social. Structural gap in email/support voice specifically.",
      successCriteria: [
        "All 10 pieces read and scored PASS/FAIL against the logo-removed test",
        "Every FAIL has a specific, named drift pattern, not just 'off-voice'",
        "A final verdict states whether the problem is structural (affects most pieces/teams) or isolated",
      ],
      portfolioReady: true,
    },
  ],

  "brand-book": [
    {
      id: "brand-book-audit-gaps",
      tier: "mini",
      archetype: "audit",
      title: "The Gap Audit: Reviewing a Submitted Brand Book Against the Five-Layer Framework",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given an agency-submitted brand book excerpt, apply the lesson's five-layer framework to identify which layers are missing or underdeveloped before it goes into company-wide distribution.",
      companyId: "adyen",
      scenario: "You're the junior brand coordinator at Adyen. A design agency just delivered a 'brand guidelines' PDF ahead of a global partner rollout, and your manager wants a gap check before it's approved.",
      brief: "Check the submitted document against all five layers. Flag what's missing, not just what's wrong.",
      mode: "diagnostic",
      conceptsCovered: ["Layer 2: Verbal Identity", "Layer 5: Distribution"],
      steps: [
        {
          stepId: "step-1-verbal-identity-check",
          concept: "Layer 2: Verbal Identity",
          lessonAnchor: "layer-2-verbal-identity",
          theoryRecap: "The lesson's Layer 2 requires tone of voice, a vocabulary list, before-and-after rewrites, and grammar preferences, not just visual rules.",
          question: "The submitted document has 14 pages on logo and color, and one paragraph that says 'write in a professional, friendly tone.' Does this satisfy Layer 2?",
          toolName: "Google Docs",
          where: "Open the submitted PDF (copied into a Google Doc for markup) and search for a dedicated voice and tone section.",
          procedure: [
            "Search the document for 'tone', 'voice', 'vocabulary', or 'writing' as section headers",
            "Check whether any vocabulary list (words to use/avoid) exists",
            "Check whether any before-and-after sentence rewrite examples exist",
            "Note the finding as a comment directly on the page where verbal identity should live",
          ],
          outputSample: "SECTION SEARCH RESULTS\nLogo & color: pages 2-14 (13 pages)\nTone of voice: page 15, one paragraph\nVocabulary list: not found\nBefore/after rewrites: not found\n\nFINDING: Layer 2 is present in name only. No usable rule for a copywriter.",
          healthy: "A flagged gap report that names exactly what's missing (vocabulary list, rewrite pairs) so the agency knows what to add.",
          unhealthy: "Approving the document because 'it has a tone paragraph' without checking whether that paragraph is actionable.",
          interpret: "A tone description without a vocabulary list and before/after examples is not a usable rule, it's an adjective.",
          soWhat: [
            { symptom: "Only 1 of 14 pages covers verbal identity", action: "Send the gap list back to the agency and request a vocabulary list plus 3 before/after rewrite pairs", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-distribution-check",
          concept: "Layer 5: Distribution",
          lessonAnchor: "layer-5-distribution",
          theoryRecap: "The lesson's Layer 5 requires a living, findable hosting plan: a wiki link, onboarding checklist inclusion, agency contract language, and a 12-month review cadence.",
          question: "The agency delivered a single static PDF attached to one email. Does a distribution plan exist?",
          toolName: "Google Docs",
          where: "Check the document's final section (or lack of one) for any hosting, linking, or review-cadence instructions.",
          procedure: [
            "Search for a 'distribution', 'hosting', or 'how to use this document' section",
            "Check whether the document specifies where it will live (a URL, a wiki, a design tool)",
            "Check whether it names a review or update cadence",
            "Log the answer as present/absent for each of the three checks",
          ],
          outputSample: "DISTRIBUTION CHECK\nHosting location named: NO\nOnboarding/contract language: NO\nReview cadence stated: NO\n\nFINDING: Layer 5 does not exist in this document at all.",
          healthy: "The gap report calls out Layer 5 as fully missing, not just incomplete, since a PDF with no hosting plan will be forwarded once and then forgotten.",
          unhealthy: "Treating distribution as 'IT's problem' and approving the content layers without requiring a distribution plan before sign-off.",
          interpret: "A brand book without a named home and review cadence is a file, not a system, per the lesson's core failure mode.",
          soWhat: [
            { symptom: "No hosting location or review cadence in the delivered document", action: "Require the agency (or your own team) to add a distribution page naming the host URL and a 12-month review date before approval", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Mark up the submitted brand book with gap comments", why: "Free, familiar commenting workflow for cross-team review", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A one-page gap report listing which of the five layers are present, partial, or missing, with a specific fix requested for each gap.",
      sampleOutput: "Slack, Brand Book Gap Report (excerpt)\n\nLayer 1 Foundation: PRESENT (mission + positioning, 1 page)\nLayer 2 Verbal Identity: PARTIAL (tone named, no vocabulary list)\nLayer 3 Visual Identity: PRESENT (logo, 4-color palette, Circular typeface documented)\nLayer 4 Usage Rules: MISSING (no do/don't examples)\nLayer 5 Distribution: MISSING (no hosting URL, no review date)\n\nACTION: Return to design team with 2 required additions before company-wide rollout.",
      successCriteria: [
        "Correctly identifies Layer 2 as partial, not fully present, with a specific missing element named",
        "Correctly identifies Layer 5 as fully missing",
        "Gap report names a concrete fix, not just 'add more detail'",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-book-verbal-identity-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building the Verbal Identity Layer of a Brand Book from Scratch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Write a complete, usable Layer 2 (Verbal Identity) section for a real company, including a tone description, a vocabulary list, and two before-and-after rewrite pairs.",
      companyId: "nubank",
      scenario: "You're a freelance brand consultant hired by Nubank's regional marketing team to draft the verbal identity section their in-house brand book is missing.",
      brief: "Produce a one-page Layer 2 section a copywriter could use immediately, not a mood board.",
      mode: "build",
      conceptsCovered: ["Layer 2: Verbal Identity", "Layer 4: Usage Rules"],
      steps: [
        {
          stepId: "step-1-tone-and-vocabulary",
          concept: "Layer 2: Verbal Identity",
          lessonAnchor: "layer-2-verbal-identity",
          theoryRecap: "Layer 2 needs a named tone (formal vs casual, warm vs authoritative), a vocabulary list of words to use and avoid, and grammar preferences.",
          question: "Nubank positions itself as simplifying banking for people locked out of traditional banks. What tone words and vocabulary choices reflect that, and which words undercut it?",
          toolName: "Google Docs",
          where: "Draft the tone and vocabulary block in a new Google Doc, referencing Nubank's public positioning as a plain-language digital bank.",
          procedure: [
            "Write a 2-3 word tone description (e.g. 'warm, direct, never condescending')",
            "List 6 words the brand should use ('clear', 'yours', 'simple')",
            "List 6 words the brand should avoid ('leverage', 'synergy', 'utilize', jargon that implies the reader needs a finance degree)",
            "Write one sentence explaining why the avoid-list words undercut the positioning",
          ],
          outputSample: "TONE: Warm, direct, never condescending\n\nUSE: clear, yours, simple, together, real, straightforward\nAVOID: leverage, utilize, synergy, robust, ecosystem, bespoke\n\nWHY: A bank positioned as 'banking without the bank jargon' loses credibility the moment it uses the jargon it claims to remove.",
          healthy: "A vocabulary list a copywriter can literally check sentences against before publishing.",
          unhealthy: "A tone description like 'friendly and professional' with no word-level guidance, which every brand book already claims and no one can act on.",
          interpret: "Tone words alone are not a rule; the vocabulary list is what actually gets enforced.",
          soWhat: [{ symptom: "Copy across channels uses inconsistent jargon levels", action: "Require every published piece to be checked against the avoid-list before it ships", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-before-after-rewrites",
          concept: "Layer 4: Usage Rules",
          lessonAnchor: "layer-4-usage-rules",
          theoryRecap: "Layer 4 shows correct and incorrect applications side by side; for verbal identity, that means before-and-after sentence rewrites, not abstract description.",
          question: "Given the off-brand sentence 'Our platform leverages a robust ecosystem of financial tools to optimize your banking experience,' how would you rewrite it on-brand?",
          toolName: "Google Docs",
          where: "Add a before/after table to the same draft document, directly under the vocabulary list.",
          procedure: [
            "Copy the off-brand sentence into the 'before' column",
            "Rewrite it using only words from the approved vocabulary list",
            "Write a second before/after pair using a different example (a fee-disclosure sentence)",
            "Label both pairs clearly as 'Before (off-brand)' and 'After (on-brand)'",
          ],
          outputSample: "BEFORE (off-brand): 'Our platform leverages a robust ecosystem of financial tools to optimize your banking experience.'\nAFTER (on-brand): 'Everything you need to manage your money, in one simple app.'\n\nBEFORE: 'Utilize our fee-free transactional infrastructure.'\nAFTER: 'No hidden fees. Ever.'",
          healthy: "Two rewrite pairs a copywriter can hold next to their own draft and immediately see the difference.",
          unhealthy: "A single vague instruction like 'write more simply' with no worked example, which restates the tone description without adding anything usable.",
          interpret: "Before/after pairs are what makes Layer 2's abstract tone rule concrete enough for daily use, matching Layer 4's usage-rules pattern.",
          soWhat: [{ symptom: "Writers keep asking 'what does on-brand actually sound like'", action: "Add 2 more before/after pairs per quarter drawn from real published copy", effort: "30 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Draft and format the verbal identity section", why: "Free, shareable, comment-friendly for stakeholder review", required: true, lastVerified: "2026-08" }],
        paid: [{ toolName: "Canva", role: "Lay the finished section out as a shareable one-pager", why: "Turns the draft into a distributable, on-brand-looking document", required: false, lastVerified: "2026-08" }],
      },
      deliverable: "A one-page Layer 2 Verbal Identity section: tone description, 6-word use list, 6-word avoid list, and two before/after rewrite pairs.",
      sampleOutput: "Wise, Verbal Identity excerpt\n\nTONE: Plain, confident, no bank-speak\nUSE: transparent, real rate, yours, simple\nAVOID: competitive rates, world-class, seamless, best-in-class\n\nBEFORE: 'Enjoy seamless, best-in-class currency conversion.'\nAFTER: 'See the real exchange rate. No markup.'",
      successCriteria: [
        "Vocabulary list has at least 6 use words and 6 avoid words specific to the brand's positioning, not generic",
        "Both before/after pairs use only approved vocabulary in the 'after' version",
        "The deliverable fits on one page",
      ],
      portfolioReady: true,
      stretch: "Add a third before/after pair for a customer-support-tone sentence, the hardest tone to keep on-brand under pressure.",
    },
  ],
  "distinctive-assets": [
    {
      id: "distinctive-assets-portfolio-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Sorting a Distinctive Asset Portfolio into Protect, Build, or Drop",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Apply the lesson's Fame/Uniqueness thresholds to classify four real-style brand assets into Protect, Build, or Drop, and correctly identify one asset that can't be classified yet.",
      companyId: "wise",
      scenario: "You're a brand analyst asked to review Wise's asset portfolio ahead of a planning cycle, using Fame and Uniqueness scores from a category buyer study.",
      brief: "Classify each asset card using the lesson's thresholds, and flag any asset the study didn't actually measure.",
      mode: "teardown",
      conceptsCovered: ["Stage 3: Classify and Prioritize", "Stage 2: Test Fame and Uniqueness"],
      teardownItems: [
        {
          itemId: "item-1-primary-color",
          specimen: "ASSET CARD — Primary Color\nWise's signature bright green, applied consistently across the app, debit cards, marketing site, and out-of-home ads since the 2021 rebrand.\nMeasured Fame: 74% (correctly linked to Wise by category buyers)\nMeasured Uniqueness: 68% (not confused with any competitor)",
          specimenSource: "synthetic-realistic",
          prompt: "Using the lesson's Stage 3 thresholds (Fame above 70%, Uniqueness above 60% = Protect), classify this asset and justify the call.",
          answerKey: [
            {
              defect: "Asset sits above both thresholds and is at risk of being treated as a routine design element rather than a protected moat",
              severity: "moderate",
              whyItMatters: "Assets that clear both thresholds should never be casually 'refreshed'; doing so discards measured equity, per Stage 4's warning against freshening strong assets",
              lessonRef: "stage-3-classify-and-prioritize",
              owner: "you",
            },
          ],
          distractors: [
            "Classify as 'Build' because the color could always be applied more consistently",
            "Classify as 'Drop' because a competitor also uses a shade of green somewhere in its palette",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-wordmark-casing",
          specimen: "ASSET CARD — Wordmark Casing\nThe lowercase 'wise' logotype is the documented standard, but partner integration pages and some app store listings render it as 'WISE' in all caps.\nMeasured Fame: 55%\nMeasured Uniqueness: 71%",
          specimenSource: "synthetic-realistic",
          prompt: "Classify this asset per Stage 3 and identify what the inconsistent usage is doing to its Fame score.",
          answerKey: [
            {
              defect: "Fame is being suppressed by inconsistent execution (all-caps variants in partner contexts), not by the asset lacking distinctiveness",
              severity: "moderate",
              whyItMatters: "This is a Build-bucket asset per Stage 3: low Fame, high Uniqueness, meaning the fix is more consistent repetition, not a redesign",
              lessonRef: "stage-3-classify-and-prioritize",
              owner: "either",
            },
          ],
          distractors: [
            "Classify as 'Drop' because Fame is below 70%",
            "Classify as 'Protect' because Uniqueness is already above the threshold",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-icon-style",
          specimen: "ASSET CARD — App Icon Illustration Style\nA rounded, friendly icon style used throughout in-app illustrations. Category research shows 3 competing fintech apps use a visually similar rounded-icon style.\nMeasured Fame: 62%\nMeasured Uniqueness: 22%",
          specimenSource: "synthetic-realistic",
          prompt: "Classify this asset and explain the risk of continued investment in it as-is.",
          answerKey: [
            {
              defect: "Low Uniqueness (22%) means the asset is training buyers to recognize the fintech category in general, not Wise specifically, despite moderate Fame",
              severity: "critical",
              whyItMatters: "Per Stage 3, low-Uniqueness assets 'may actually be training buyers to think of the whole category or, worse, a competitor', this is marketing spend subsidizing competitors",
              lessonRef: "stage-3-classify-and-prioritize",
              owner: "you",
            },
          ],
          distractors: [
            "Classify as 'Protect' because Fame is above 60%",
            "Classify as 'Build' since the style is at least well-liked internally",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-sound-untested",
          specimen: "ASSET CARD — Transfer Confirmation Sound\nA short chime plays when a transfer completes successfully. The sound has never been tested with real customers or measured for Fame or Uniqueness; the design team believes it 'feels premium.'",
          specimenSource: "synthetic-realistic",
          prompt: "Can this asset be classified into Protect / Build / Drop using Stage 3? If not, what has to happen first?",
          answerKey: [
            {
              defect: "No Fame or Uniqueness data exists, so classification is impossible; the asset is still in the Audit stage, not ready for Stage 3",
              severity: "moderate",
              whyItMatters: "Per Stage 2, every asset must be tested with real category buyers before classification; subjective judgments like 'feels premium' are not a substitute for measurement",
              lessonRef: "stage-2-test-fame-and-uniqueness",
              owner: "either",
            },
          ],
          distractors: [
            "Classify as 'Build' since new assets always start in that bucket",
            "Classify as 'Protect' since sonic branding is inherently valuable",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log each asset's Fame/Uniqueness scores and classification", why: "Free, quick to build a sortable classification table", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A completed classification table sorting all 4 assets into Protect / Build / Drop / Needs Testing, with a one-line justification citing the actual Fame or Uniqueness number for each.",
      sampleOutput: "Nubank, Asset Classification (excerpt)\n\nPrimary purple: Fame 81%, Uniqueness 76% -> PROTECT\nCard tap-to-pay animation: Fame 48%, Uniqueness 64% -> BUILD\nGeneric rounded sans typeface: Fame 58%, Uniqueness 19% -> DROP/REPLACE\nApp notification sound: untested -> NEEDS TESTING before classification",
      successCriteria: [
        "Correctly classifies at least 3 of 4 assets using the stated Fame/Uniqueness thresholds",
        "Flags the untested sound asset as unclassifiable rather than guessing",
        "Justification cites the specific Fame or Uniqueness number, not a subjective impression",
      ],
      portfolioReady: true,
    },
    {
      id: "distinctive-assets-rebrand-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Forecasting Which Assets Survive a Rebrand: A Fame vs. Uniqueness Stress Test",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Use Fame/Uniqueness thresholds and a real rebrand-backlash precedent to forecast which assets should be excluded from a proposed visual refresh, and estimate the risk of overruling that forecast.",
      companyId: "nubank",
      scenario: "Nubank's leadership team has proposed a full visual refresh for next quarter. You're asked to forecast which existing assets are safe to redesign and which should be protected before the creative brief goes out.",
      brief: "Turn Fame/Uniqueness data into a clear forecast leadership can act on, not just a preference.",
      mode: "diagnostic",
      conceptsCovered: ["Stage 2: Test Fame and Uniqueness", "Stage 3: Classify and Prioritize"],
      steps: [
        {
          stepId: "step-1-forecast-survival",
          concept: "Stage 2: Test Fame and Uniqueness",
          lessonAnchor: "stage-2-test-fame-and-uniqueness",
          theoryRecap: "The Ehrenberg-Bass benchmark for a genuine competitive moat is Fame above 70% and Uniqueness above 60%; anything below is still being built.",
          question: "Nubank's purple brand color tests at 81% Fame and 76% Uniqueness in a category study. Its app's rounded-card visual style tests at 45% Fame and 58% Uniqueness. If leadership proposes a full visual refresh next quarter, which asset should you forecast as 'do not touch' and which as 'safe to redesign'?",
          toolName: "Google Sheets",
          where: "Log both assets and their scores in a simple table, then apply the two thresholds.",
          procedure: [
            "Enter both assets with their Fame and Uniqueness scores in a sheet",
            "Mark each asset PASS or FAIL against the 70%/60% thresholds",
            "Forecast the outcome of touching each asset given its pass/fail status",
            "Write a one-line recommendation for the refresh brief",
          ],
          outputSample: "ASSET FORECAST\nPurple brand color: Fame 81% PASS, Uniqueness 76% PASS -> PROTECT, do not touch\nRounded-card style: Fame 45% FAIL, Uniqueness 58% FAIL -> safe to redesign, still being built\n\nRECOMMENDATION: Refresh brief should explicitly exclude the purple from any color exploration.",
          healthy: "A refresh brief that names the purple as out-of-scope before any designer starts exploring alternatives.",
          unhealthy: "Letting 'we're refreshing everything' apply uniformly, putting a proven 81%/76% asset on the table alongside a genuinely weak one.",
          interpret: "Fame and Uniqueness scores, not internal creative fatigue, should decide what's eligible for a redesign.",
          soWhat: [{ symptom: "A rebrand brief doesn't distinguish protected assets from redesign candidates", action: "Attach the Fame/Uniqueness table to the creative brief before work starts", effort: "30 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-forecast-consequence",
          concept: "Stage 3: Classify and Prioritize",
          lessonAnchor: "stage-3-classify-and-prioritize",
          theoryRecap: "GAP's 2010 logo redesign lasted six days before reversal under consumer backlash, because it changed an asset with decades of accumulated Fame.",
          question: "If leadership overrules the recommendation and redesigns the purple anyway, what should you forecast happening in the first two weeks post-launch, based on the GAP precedent?",
          toolName: "Google Sheets",
          where: "Add a forecast row to the same sheet estimating likely backlash risk and recovery cost.",
          procedure: [
            "Note the GAP 2010 timeline as a reference case (redesigned, then reversed within 6 days)",
            "Forecast the likely customer reaction to changing an 81%/76% asset",
            "Estimate the cost of a possible reversal (design hours, PR, re-issued assets) versus the cost of not changing it at all",
            "Write the forecast as a short risk note for leadership",
          ],
          outputSample: "FORECAST RISK NOTE\nPrecedent: GAP 2010 logo change reversed in 6 days after public backlash\nNubank purple: Fame 81%, Uniqueness 76%, well above both protect thresholds\nForecast: High probability of visible backlash within days of launch; reversal cost (design + PR + re-issued cards) likely exceeds the cost of never changing it\nRECOMMENDATION: Do not proceed without a separate, dedicated equity-risk review",
          healthy: "Leadership sees a concrete forecast with a real precedent before greenlighting, not just a designer's opinion.",
          unhealthy: "Presenting the risk only after the redesign has shipped, when reversal is expensive and public.",
          interpret: "A Protect-bucket asset carries real reversal cost if changed; forecasting that cost before launch is cheaper than discovering it after.",
          soWhat: [{ symptom: "A redesign proposal touches a Protect-bucket asset with no risk forecast attached", action: "Require a documented Fame/Uniqueness risk note before any Protect-bucket asset enters a creative brief", effort: "30 min" }],
          owner: "either",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log asset scores and build the forecast/risk table", why: "Free, fast to build a shareable forecast table for a leadership review", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A one-page forecast table and risk note recommending which assets are safe to redesign and which should be excluded, with a cited precedent.",
      sampleOutput: "Adyen, Asset Forecast (excerpt)\n\nCore navy blue: Fame 77%, Uniqueness 65% -> PROTECT\nSecondary icon set: Fame 38%, Uniqueness 41% -> safe to redesign\n\nRECOMMENDATION: Exclude navy from Q3 visual refresh scope.",
      successCriteria: [
        "Correctly identifies the 81%/76% asset as Protect and excludes it from redesign scope",
        "Cites the GAP 2010 precedent to support the forecast",
        "Risk note quantifies the cost tradeoff, not just 'this is risky'",
      ],
      portfolioReady: true,
      stretch: "Build the same forecast table for your own company's top 3 assets using real internal recognition survey data if available.",
    },
  ],

  "brand-tracking": [
    {
      id: "brand-tracking-wave-diagnostic-audit",
      tier: "mini",
      archetype: "audit",
      title: "Reading the Trend Line: Diagnosing a Brand Tracking Wave",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given four quarterly waves of brand tracking data for a SaaS brand against two named competitors, diagnose which funnel stage is breaking down and decide whether it is a data blip or a real trend.",
      companyId: "zendesk",
      scenario:
        "You're a brand marketing analyst at Zendesk reviewing Wave 4 of a quarterly brand health study. Awareness looks fine, but something in the funnel below it has been drifting for two quarters straight.",
      brief:
        "Read the four-wave data, isolate the stage where Zendesk is losing ground relative to the competitive set, and write a one-paragraph diagnosis for the brand lead.",
      mode: "diagnostic",
      conceptsCovered: ["Reporting trend lines instead of single-wave snapshots"],
      steps: [
        {
          stepId: "step-1-trend-vs-snapshot",
          concept: "Reporting trend lines instead of single-wave snapshots",
          lessonAnchor: "step-5-report-trends-not-snapshots",
          theoryRecap:
            "The lesson's Step 5 is explicit: a single wave number means nothing on its own. A consideration score only becomes actionable once you can see it move against a competitor's score over at least three waves.",
          question:
            "Below are four quarterly waves for Zendesk vs. Freshdesk and Intercom, aided awareness through preference. Which stage is actually breaking down, and is it real or noise?",
          toolName: "Google Sheets",
          where: "Import the four-wave export, one row per brand per quarter, and build a line chart per funnel stage.",
          procedure: [
            "Import the wave data into Google Sheets with quarter, brand, and each funnel stage as columns",
            "Pivot so each funnel stage becomes its own line chart with quarter on the x-axis and brand as separate series",
            "Compare Zendesk's slope on each stage against Freshdesk and Intercom's slope over the same four quarters",
            "Flag the one stage where Zendesk's line diverges from the competitive set for two or more consecutive quarters",
          ],
          outputSample:
            "Aided Awareness (%): Zendesk 71,72,70,73 | Freshdesk 64,65,66,67 | Intercom 58,60,61,63\nConsideration (%): Zendesk 44,41,37,34 | Freshdesk 38,39,41,43 | Intercom 33,35,38,40\nPreference (%): Zendesk 22,21,20,19 | Freshdesk 17,18,19,21 | Intercom 14,15,17,19",
          healthy:
            "Awareness holds steady while consideration and preference move in the same direction as competitors, or Zendesk's decline is a single-quarter blip surrounded by flat quarters on both sides.",
          unhealthy:
            "Consideration falls for three consecutive quarters (44 to 34, a 10-point drop) while both named competitors rise over the identical period, awareness stays flat, meaning the problem is not visibility, it is what people think once they already know the brand.",
          interpret:
            "Awareness flat plus consideration falling plus competitors rising in the same window rules out a sampling fluke. The brand is known but is losing the argument for why it should be considered, that is a positioning or product-perception problem, not an awareness problem.",
          soWhat: [
            {
              symptom: "Consideration drops for 2+ consecutive quarters while awareness stays flat",
              action: "Brief a message-perception study before touching media spend, the funnel says the problem is not visibility",
              effort: "half day",
            },
            {
              symptom: "One-quarter dip surrounded by flat quarters on both sides",
              action: "Log it and wait for the next wave, one point of data is not a trend per Step 5",
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
            role: "Chart the four-wave funnel data and compare slopes across brands",
            why: "No account friction, pivot tables and line charts are all this diagnosis needs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-paragraph written diagnosis identifying the breaking-down funnel stage, the evidence for it being a real trend and not noise, and the type of research needed next.",
      sampleOutput:
        "Diagnosis, Grab Holdings brand tracking Wave 6 (excerpt)\n\nAwareness is stable at 68-70% across three quarters. Consideration fell from 51% to 44% over the same window while GoJek's consideration rose from 46% to 50%. The gap is now a 6-point relative swing. Recommend a message-perception study before the Q3 media plan is finalized.",
      successCriteria: [
        "Correctly identifies consideration (not awareness) as the breaking-down stage",
        "Cites at least two consecutive quarters of divergence from competitors as evidence it is a trend, not noise",
        "Recommends a next step scoped to the actual problem (perception research, not more media spend)",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-tracking-consideration-forecast",
      tier: "core",
      archetype: "forecast",
      title: "The Six-Month Warning: Forecasting Revenue Risk from a Consideration Trend",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a rolling four-quarter brand tracking trend and the lesson's 6-12 month lead-lag principle, forecast when a consideration decline is likely to hit renewal revenue and decide how urgently to escalate.",
      companyId: "grab",
      scenario:
        "You're the brand insights lead at Grab Holdings. Consideration for Grab's ride-hailing vertical has been sliding since Q1 while a regional competitor gains ground. Leadership wants to know if this is worth interrupting the roadmap for.",
      brief:
        "Use the lesson's 6-12 month lead-lag window and the cadence guidance to forecast the revenue-risk window and recommend an escalation timeline.",
      mode: "calibration",
      conceptsCovered: [
        "Brand metrics leading sales by 6-12 months",
        "Choosing tracking cadence to catch trend shifts early",
      ],
      steps: [
        {
          stepId: "step-1-lead-lag-forecast",
          concept: "Brand metrics leading sales by 6-12 months",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "Research cited in the lesson shows brand metrics like consideration typically precede sales figures by 6-12 months in consumer categories, giving teams an early warning window before revenue is hit.",
          question:
            "Grab's consideration score dropped from 52% (Q1) to 43% (Q4), a 9-point decline over three quarters. Using the 6-12 month lead-lag window, by when should leadership expect to see this show up in renewal or repeat-usage revenue if nothing changes?",
          toolName: "Google Sheets",
          where: "Build a simple timeline model: plot the Q1-Q4 consideration trend, then project a 6-12 month forward window from the quarter the decline started.",
          procedure: [
            "Chart the consideration trend by quarter and mark the quarter the decline began (Q1)",
            "Apply the 6-12 month lead window to that starting quarter to calculate the earliest and latest revenue-impact dates",
            "Cross-check against the competitor's rising trend over the identical period to confirm this is a relative, not just absolute, decline",
            "Write the forecast window as a date range, not a single date",
          ],
          outputSample:
            "Consideration: Q1 52%, Q2 49%, Q3 46%, Q4 43% (decline started Q1)\nCompetitor (GoJek): Q1 46%, Q2 47%, Q3 49%, Q4 50%\nLead-lag window: 6-12 months from Q1 start = revenue impact expected between Q3 and Q1 of next year",
          healthy:
            "The forecast window is flagged to leadership at least one full quarter before the earliest revenue-impact date, giving time to adjust creative or spend before the income statement shows it.",
          unhealthy:
            "Waiting for the actual renewal-rate dip to appear before escalating, which per the lesson's 6-12 month lag means the decision window to cheaply course-correct has already closed.",
          interpret:
            "A 9-point relative consideration swing over three consecutive quarters, with the decline starting in Q1, means the revenue-risk window opens as early as Q3 this year. Escalating now, not after Q3 numbers land, is what makes the forecast useful.",
          soWhat: [
            {
              symptom: "Consideration decline exceeds 5 points over 3+ quarters relative to the named competitor",
              action: "Escalate to leadership immediately with the forecast window, not after the next wave",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cadence-check",
          concept: "Choosing tracking cadence to catch trend shifts early",
          lessonAnchor: "step-3-choose-your-cadence",
          theoryRecap:
            "The lesson's cadence table recommends monthly tracking for fast-moving consumer categories and notes that monthly cadence catches trust erosion roughly two reporting cycles earlier than quarterly.",
          question:
            "Grab is currently tracking quarterly. Given the recommended cadence table, should the ride-hailing vertical move to monthly tracking, and what does that change about the forecast window?",
          toolName: "Google Sheets",
          where: "Compare the cadence table's recommendation for Grab's category against its current quarterly schedule.",
          procedure: [
            "Check the lesson's cadence table for Grab's category (fast-moving consumer/superapp usage)",
            "Compare current quarterly cadence to the monthly recommendation",
            "Recalculate how much earlier a monthly cadence would have caught the Q1 inflection point",
          ],
          outputSample:
            "Current cadence: quarterly (4 waves/year)\nRecommended: monthly for fast-moving consumer categories\nEstimated earlier detection: ~2 reporting cycles, meaning the Q1 inflection could have been flagged in month 2 instead of the Q1 wave",
          healthy: "The team moves to monthly tracking for the affected vertical after this incident, shortening future detection windows.",
          unhealthy: "The team stays quarterly and re-discovers the same lag problem on the next slow-moving trend.",
          interpret: "Cadence is not a formality, it directly sets how much of the 6-12 month lead time is actually usable before revenue impact.",
          soWhat: [
            {
              symptom: "A category matching the table's 'monthly' recommendation is still tracked quarterly",
              action: "Propose moving that vertical to monthly cadence in the next budget cycle",
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
            role: "Build the trend timeline and calculate the forecast window",
            why: "Free, sufficient for a simple date-range projection off quarterly data",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written forecast memo giving a specific revenue-impact date range, the evidence behind it, and a cadence recommendation.",
      sampleOutput:
        "Forecast memo, Zendesk support-suite consideration trend (excerpt)\n\nConsideration fell from 44% to 34% between Q1 and Q4 while Freshdesk rose from 38% to 43% over the same window. Applying the 6-12 month lead-lag window from the Q1 inflection point, expect renewal-rate impact between Q3 this year and Q1 next year. Recommend moving from quarterly to monthly tracking for this segment to catch the next inflection ~2 cycles earlier.",
      successCriteria: [
        "Forecast window is expressed as a date range derived from the 6-12 month lag, not a single guessed date",
        "Uses the competitor's opposite trend as corroborating evidence, not just Grab's own numbers",
        "Cadence recommendation is grounded in the lesson's cadence table, not invented",
      ],
      portfolioReady: true,
      stretch:
        "Model what the forecast window would have looked like if the decline had started two quarters earlier, and explain how that changes the urgency of the escalation.",
    },
  ],
  "brand-equity": [
    {
      id: "brand-equity-bsi-scorecard-audit",
      tier: "mini",
      archetype: "audit",
      title: "Auditing a BSI Scorecard: Where Is the Valuation Leaking?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a five-metric Brand Strength Index scorecard with real weights, calculate the weighted BSI score, determine which royalty-rate band it falls into, and identify the single metric dragging the score down.",
      companyId: "snowflake",
      scenario:
        "You're on the brand team at Snowflake ahead of the annual royalty-relief valuation refresh. The consumer BSI survey just came back and the data team needs the weighted score before the finance meeting.",
      brief:
        "Score the five BSI metrics against their weights, determine whether the brand clears the 75-point top-royalty-rate threshold, and flag which single metric is costing the most points.",
      mode: "diagnostic",
      conceptsCovered: ["Scoring the Brand Strength Index across five weighted metrics"],
      steps: [
        {
          stepId: "step-1-bsi-weighted-score",
          concept: "Scoring the Brand Strength Index across five weighted metrics",
          lessonAnchor: "the-brand-strength-index-bsi",
          theoryRecap:
            "The lesson's BSI table weights five metrics: Familiarity (20%), Consideration (20%), Preference (20%), Loyalty (25%), and Advocacy (15%). A score above 75 pushes the royalty rate to the sector ceiling; below 40 compresses it below the floor.",
          question:
            "Snowflake's raw BSI sub-scores came back as Familiarity 82, Consideration 79, Preference 68, Loyalty 61, Advocacy 74. What is the weighted BSI, which royalty band does it land in, and which metric is dragging it down the most?",
          toolName: "Google Sheets",
          where: "Build a five-row table with metric, raw score, weight, and weighted contribution, then sum the contributions.",
          procedure: [
            "List the five metrics with their raw scores and the lesson's fixed weights",
            "Multiply each raw score by its weight to get the weighted contribution",
            "Sum the five weighted contributions to get the final BSI",
            "Compare each raw score to the category's typical range to spot the biggest underperformer relative to the others",
          ],
          outputSample:
            "Familiarity: 82 x 20% = 16.4\nConsideration: 79 x 20% = 15.8\nPreference: 68 x 20% = 13.6\nLoyalty: 61 x 25% = 15.25\nAdvocacy: 74 x 15% = 11.1\nWeighted BSI = 72.15",
          healthy:
            "The weighted BSI lands close to but below 75, and the audit correctly names Loyalty as the largest drag both because its raw score (61) is the lowest and because it carries the heaviest weight (25%).",
          unhealthy:
            "Treating Familiarity as the concern because it 'sounds important,' when the raw data shows Familiarity is the strongest metric at 82, or averaging the five raw scores unweighted (72.8) instead of applying the weights.",
          interpret:
            "At 72.15, Snowflake sits just under the 75-point top-royalty-rate threshold. Loyalty is both the lowest raw score and the highest-weighted metric, so it has an outsized effect on the final number, closing even a 5-point gap there would likely clear the threshold.",
          soWhat: [
            {
              symptom: "Weighted BSI sits within 5 points of the 75 threshold",
              action: "Prioritize research into the lowest-scoring, highest-weighted metric before the next survey wave",
              effort: "half day",
            },
            {
              symptom: "BSI calculated as a simple average instead of weighted",
              action: "Rebuild the scorecard with the lesson's fixed weights before presenting to finance",
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
            role: "Build the weighted BSI scorecard and identify the biggest drag metric",
            why: "A five-row weighted sum needs nothing more than a spreadsheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed weighted BSI scorecard with the final score, the royalty-band determination, and a one-line note identifying the biggest drag metric.",
      sampleOutput:
        "Grab Holdings BSI scorecard (excerpt)\n\nFamiliarity 74 x 20% = 14.8\nConsideration 58 x 20% = 11.6\nPreference 55 x 20% = 11.0\nLoyalty 49 x 25% = 12.25\nAdvocacy 62 x 15% = 9.3\nWeighted BSI = 58.95, mid-band, below the 75 ceiling and above the 40 floor. Loyalty is the biggest drag at 49.",
      successCriteria: [
        "Uses the correct fixed weights (20/20/20/25/15), not an unweighted average",
        "Correctly determines whether the score clears 75 or falls below 40",
        "Identifies the metric with the largest combined effect of low score and high weight, not just the lowest raw number",
      ],
      portfolioReady: true,
    },
    {
      id: "brand-equity-royalty-relief-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Running the Royalty-Relief Math: Forecasting Brand Value Under Two Scenarios",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given projected branded revenue, a sector royalty-rate range, and a BSI score, run the royalty-relief valuation and forecast how the valuation shifts under a crisis scenario that drops the BSI score.",
      companyId: "grab",
      scenario:
        "You're supporting the finance team at Grab Holdings ahead of an investor update. They want a base-case brand valuation and a stress-tested 'what if a service outage hits trust scores' scenario, both using the royalty-relief method.",
      brief:
        "Calculate the base-case royalty-relief valuation, then rerun it with a BSI drop to forecast the downside scenario finance is asking about.",
      mode: "calibration",
      conceptsCovered: [
        "Applying royalty-relief valuation mechanics",
        "Forecasting equity decay after a crisis",
      ],
      steps: [
        {
          stepId: "step-1-royalty-relief-base-case",
          concept: "Applying royalty-relief valuation mechanics",
          lessonAnchor: "how-it-works-the-royalty-relief-valuation-method",
          theoryRecap:
            "The lesson's royalty-relief method forecasts branded revenue, applies a sector royalty rate adjusted by the BSI score, then discounts the resulting royalty stream to present value.",
          question:
            "Grab's super-app segment projects $2.1B in branded revenue next year. The consumer-tech sector royalty range is 3-6%, and Grab's current BSI is 71. What royalty rate applies, and what is the undiscounted annual brand earnings figure?",
          toolName: "Google Sheets",
          where: "Build a simple royalty calculator: revenue x royalty rate = annual brand earnings, with the rate chosen based on the BSI band.",
          procedure: [
            "Confirm the BSI band: 71 is below the 75 ceiling but well above the 40 floor, so the rate lands mid-to-upper range, not at the sector ceiling",
            "Select a royalty rate within the 3-6% range reflecting a BSI just under the top threshold (e.g. 5%)",
            "Multiply $2.1B revenue by the selected rate to get annual brand earnings before discounting",
          ],
          outputSample:
            "BSI: 71 (below 75 ceiling, upper-mid band)\nSelected royalty rate: 5% of the 3-6% sector range\nAnnual brand earnings = $2.1B x 5% = $105M (pre-discount)",
          healthy:
            "The selected rate reflects the BSI band honestly, a 71 score justifies a rate near but not at the top of the range, not the full 6% ceiling reserved for scores above 75.",
          unhealthy:
            "Applying the sector ceiling rate (6%) regardless of the BSI score, which overstates the valuation and misrepresents what the consumer data actually supports.",
          interpret:
            "A BSI of 71 earns a strong but not maximum royalty rate. The valuation output is only as credible as the honesty of this rate selection, this is the step most likely to get fudged under pressure to hit a target number.",
          soWhat: [
            {
              symptom: "Royalty rate applied does not track the BSI band it's supposedly derived from",
              action: "Re-anchor the rate selection to the actual BSI score before presenting to finance",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-crisis-forecast",
          concept: "Forecasting equity decay after a crisis",
          lessonAnchor: "brand-equity-decay-the-three-mechanisms",
          theoryRecap:
            "The lesson identifies three equity-decay mechanisms after a crisis, social amplification, substitution availability, and earned media compounding, and notes equity can collapse in 24 hours but takes two to three years to fully recover.",
          question:
            "Finance wants a stress-test: if a service outage drops Grab's BSI from 71 to 52 (a 19-point fall, still above the 40 floor), how does the royalty rate and resulting valuation change?",
          toolName: "Google Sheets",
          where: "Rerun the same royalty calculator with the stressed BSI score and a correspondingly lower rate.",
          procedure: [
            "Re-map the stressed BSI of 52 to a lower point in the 3-6% sector range (e.g. 3.5%, closer to the floor)",
            "Recalculate annual brand earnings at $2.1B x 3.5%",
            "State the dollar and percentage difference versus the base case",
          ],
          outputSample:
            "Stressed BSI: 52 (well below 71, still above the 40 floor)\nStressed royalty rate: 3.5%\nStressed annual brand earnings = $2.1B x 3.5% = $73.5M\nDelta vs. base case: -$31.5M, a 30% drop in annual brand earnings from a 19-point BSI fall",
          healthy:
            "The forecast shows a meaningful but proportionate valuation drop tied directly to the BSI fall, giving finance a real number to plan a contingency reserve or crisis-communications budget around.",
          unhealthy:
            "Presenting only the base case to finance and leaving the crisis scenario as a vague verbal caveat instead of a modeled number.",
          interpret:
            "A 19-point BSI drop translates to a 30% cut in annual brand earnings in this model, that is the kind of concrete, board-legible number the lesson says CFOs actually respond to, not a qualitative warning about reputational risk.",
          soWhat: [
            {
              symptom: "Leadership treats brand-crisis risk as unquantified",
              action: "Present the stress-tested royalty-relief delta alongside the base case in every valuation update",
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
            role: "Build the base-case and stress-test royalty-relief calculators",
            why: "The full method is a handful of multiplications and a rate lookup, no paid modeling tool required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A two-scenario royalty-relief valuation summary (base case and crisis-stressed case) with the BSI, royalty rate, and resulting annual brand earnings for each.",
      sampleOutput:
        "Zendesk royalty-relief scenario summary (excerpt)\n\nBase case: BSI 68, rate 4.5% of a 3-7% SaaS sector range, revenue $1.3B, annual brand earnings $58.5M.\nCrisis case: BSI drops to 45 after a data-security incident, rate falls to 3.2%, annual brand earnings $41.6M, a 29% decline.",
      successCriteria: [
        "Royalty rate selection in both scenarios is justified by the BSI band, not picked arbitrarily",
        "Crisis scenario recalculates from the stressed BSI, not just an assumed percentage cut",
        "States the dollar and percentage delta between base and stressed cases explicitly",
      ],
      portfolioReady: true,
      stretch:
        "Add a third scenario modeling the 2-3 year recovery timeline the lesson describes, and forecast at what point the BSI, and therefore the valuation, returns to the base case.",
    },
  ],

  "brand-crisis": [
    {
      id: "crisis-war-room-first-four-hours",
      tier: "mini",
      archetype: "simulation",
      title: "Crisis War Room: The First Four Hours",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Navigate a branching crisis-response simulation from detection through recovery, and see how one slow or defensive choice routes you into a genuinely worse position than the choice next to it.",
      companyId: "coinbase",
      scenario:
        "You are the on-call comms lead at Coinbase. A viral video alleges customer trading funds were frozen without warning during a routine maintenance window, and mentions are spiking.",
      brief:
        "Make one decision per stage. Each option carries a real verdict, optimal, acceptable, or costly, and a costly choice can route you into a harder stage, not just a worse outcome at the end.",
      mode: "simulation",
      conceptsCovered: [
        "Detection speed and escalation rules",
        "Severity scoring before response",
        "The cost of delayed detection",
        "Holding statement structure",
        "Recovery cadence and concrete action",
      ],
      stages: [
        {
          stageId: "detect",
          label: "Detect",
          elapsed: "T+0 to 15 minutes",
          concept: "Detection speed and escalation rules",
          lessonAnchor: "stage-1-detect-0-15-minutes",
          situation:
            "Your social listening tool fires an alert: brand mentions are up 40x in 20 minutes. A support agent flags three near-identical complaints in the last hour, all claiming frozen funds.",
          dashboard:
            "MENTION VOLUME: 40x baseline, rising\nSENTIMENT: 78% negative\nTOP POST: 340K views, 2 hours old, unverified claim\nSUPPORT TICKETS (last hour): 3 matching complaints",
          spendToDate: "$0",
          budgetRemaining: "Full crisis budget untouched",
          decision: {
            prompt: "What do you do in the first 15 minutes?",
            options: [
              {
                id: "escalate-fast",
                label: "Escalate to the crisis lead immediately and start verifying the facts with engineering in parallel.",
                verdict: "optimal",
                outcome: "Crisis lead is briefed within 12 minutes, engineering confirms it was a scheduled maintenance window mislabeled in the app, not frozen funds.",
                why: "Detection speed is the only variable fully in your control before a crisis goes public. Escalating and verifying in parallel means you enter Stage 2 with facts, not guesses.",
                lessonRef: "stage-1-detect-0-15-minutes",
                nextStageId: "assess",
              },
              {
                id: "handle-solo",
                label: "Handle it yourself for now; it's probably nothing and you don't want to alarm leadership over three tickets.",
                verdict: "costly",
                outcome: "By the time you loop in the crisis lead two hours later, the clip has 2.1 million views and a finance journalist has requested comment.",
                why: "Escalation rules exist precisely so one person's judgment call doesn't become the bottleneck. A customer service agent needs a written trigger to hand this off, not a gut feeling.",
                lessonRef: "stage-1-detect-0-15-minutes",
                nextStageId: "assess-behind",
              },
              {
                id: "post-immediate-reply",
                label: "Reply to the viral post right away with 'this is false' before confirming what actually happened.",
                verdict: "acceptable",
                outcome: "The reply buys a little time but has to be walked back an hour later when the maintenance-window detail comes out, creating a minor credibility wobble.",
                why: "Speed without verification is still a gamble. It's better than silence, but a wrong denial costs more credibility than a short delay for facts.",
                lessonRef: "stage-1-detect-0-15-minutes",
                nextStageId: "assess",
              },
            ],
          },
        },
        {
          stageId: "assess",
          label: "Assess",
          elapsed: "T+15 to 60 minutes",
          concept: "Severity scoring before response",
          lessonAnchor: "stage-2-assess-15-60-minutes",
          situation:
            "Facts are in: a maintenance window mislabeled the account status as 'restricted' for about 6,000 users for 90 minutes. No funds were actually at risk. You need to assign a severity level and a single spokesperson.",
          dashboard:
            "AFFECTED USERS: ~6,000\nMEDIA INTEREST: 1 finance journalist, no broadcast yet\nSOCIAL VOLUME: still climbing\nINTERNAL VOICES READY TO COMMENT: 4 (support, PR, legal, a VP)",
          spendToDate: "$0",
          budgetRemaining: "Full crisis budget untouched",
          decision: {
            prompt: "How do you score and staff this?",
            options: [
              {
                id: "score-level4-single-spokesperson",
                label: "Score it Level 4 given the media interest and scale, convene comms lead and legal within the hour, and name one spokesperson.",
                verdict: "optimal",
                outcome: "One consistent voice goes out to the journalist and to social. The mislabeling explanation lands cleanly with no contradicting statements.",
                why: "National or notable media attention plus thousands of affected users clears the bar for Level 4. One spokesperson prevents mixed messaging from accelerating the story.",
                lessonRef: "stage-2-assess-15-60-minutes",
                nextStageId: "respond",
              },
              {
                id: "score-level2-handle-social",
                label: "Score it Level 1-2 since no funds were actually lost, and let the social media team handle replies without escalating further.",
                verdict: "costly",
                outcome: "The under-scored response looks dismissive to the journalist, who publishes anyway with a headline implying Coinbase downplayed a fund-freeze scare.",
                why: "Severity scoring isn't about whether the underlying harm was real, it's about scale and audience. 6,000 affected users and live media interest is not a Level 1-2 situation.",
                lessonRef: "stage-2-assess-15-60-minutes",
                nextStageId: "end",
              },
              {
                id: "assign-multiple-spokespeople",
                label: "Score it correctly at Level 4, but let support, PR, and the VP each respond in their own channel to move faster.",
                verdict: "acceptable",
                outcome: "The severity call is right, but the VP's LinkedIn comment uses slightly different language than PR's statement, and a reporter notices the gap.",
                why: "Getting the severity score right is necessary but not sufficient. Multiple voices, even well-intentioned ones, get cross-examined for inconsistencies.",
                lessonRef: "stage-2-assess-15-60-minutes",
                nextStageId: "respond",
              },
            ],
          },
        },
        {
          stageId: "assess-behind",
          label: "Assess (behind the story)",
          elapsed: "T+2 hours, already trailing",
          concept: "The cost of delayed detection",
          lessonAnchor: "common-mistakes",
          situation:
            "Because escalation was delayed, you're now assessing severity after the clip already has 2.1 million views and a journalist inquiry sitting unanswered for 40 minutes.",
          dashboard:
            "AFFECTED USERS: ~6,000\nMEDIA INTEREST: 1 journalist, inquiry unanswered 40 min\nSOCIAL VOLUME: 2.1M views and climbing\nSPECULATION: 'frozen funds' framing now dominant, unchallenged",
          spendToDate: "$0",
          budgetRemaining: "Full crisis budget untouched, but the narrative window is closing",
          decision: {
            prompt: "You're now behind the story. What's the move?",
            options: [
              {
                id: "rush-statement-now",
                label: "Get a holding statement out within the next 20 minutes, even though you're already behind.",
                verdict: "acceptable",
                outcome: "The statement lands after the worst of the speculation has already spread, so it corrects the record but doesn't fully recover the narrative.",
                why: "Late is still better than never. A statement now stops the bleeding even if it can't undo the head start speculation already had.",
                lessonRef: "Mistake 1: The Silence Trap, 'Issue a holding statement within one hour of detection.'",
                nextStageId: "respond",
              },
              {
                id: "continue-silence",
                label: "Wait until you have a fully polished, legally reviewed statement before saying anything.",
                verdict: "costly",
                outcome: "Silence stretches past the four-hour mark. Two more outlets pick up the story using the unchallenged 'frozen funds' framing as fact.",
                why: "In the absence of your statement, the gap gets filled by speculation, and that version spreads faster than a perfect one you publish six hours later.",
                lessonRef: "Mistake 1: The Silence Trap, 'Silence reads as guilt... their version spreads faster than yours.'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "respond",
          label: "Respond",
          elapsed: "T+1 to 4 hours",
          concept: "Holding statement structure",
          lessonAnchor: "stage-3-respond-within-1-4-hours",
          situation:
            "It's time to publish. Legal has drafted three different versions of a statement for you to choose between.",
          dashboard:
            "DRAFT A: Acknowledges issue, explains maintenance mislabel, commits to a 2-hour follow-up\nDRAFT B: 'We regret any inconvenience this may have caused to affected users.'\nDRAFT C: Single tweet, no follow-up commitment",
          spendToDate: "$0",
          budgetRemaining: "Full crisis budget untouched",
          decision: {
            prompt: "Which statement goes out?",
            options: [
              {
                id: "acknowledge-act-commit-time",
                label: "Draft A: acknowledge the issue directly, explain what happened, and commit to a specific follow-up time.",
                verdict: "optimal",
                outcome: "The specific 2-hour commitment gives the journalist and the public a reason to wait instead of speculate, and the follow-up lands on schedule.",
                why: "Acknowledge, state the action underway, commit to a specific time, this structure forces internal accountability and defuses speculation.",
                lessonRef: "stage-3-respond-within-1-4-hours",
                nextStageId: "recover",
              },
              {
                id: "legal-boilerplate-statement",
                label: "Draft B: the passive, legally safe version.",
                verdict: "costly",
                outcome: "Commenters immediately flag the passive language as evasive, and the story pivots to 'Coinbase won't say what happened.'",
                why: "Passive, legalistic phrasing signals lawyers wrote it, not someone who takes the situation seriously. It reads as its opposite of accountability.",
                lessonRef: "stage-3-respond-within-1-4-hours",
                nextStageId: "end",
              },
              {
                id: "single-tweet-no-followup-time",
                label: "Draft C: a short tweet acknowledging the issue with no specific follow-up time.",
                verdict: "acceptable",
                outcome: "The acknowledgment helps, but without a specific time commitment, replies keep asking 'when will you tell us more,' extending the news cycle.",
                why: "An acknowledgment without a specific update time is only half the template. It removes the silence problem but not the uncertainty problem.",
                lessonRef: "stage-3-respond-within-1-4-hours",
                nextStageId: "recover",
              },
            ],
          },
        },
        {
          stageId: "recover",
          label: "Recover",
          elapsed: "Weeks after",
          concept: "Recovery cadence and concrete action",
          lessonAnchor: "stage-4-recover-weeks-to-months",
          situation:
            "The immediate story has died down. Now you decide what the next month of follow-through looks like.",
          dashboard:
            "OPEN COMMITMENT: 2-hour follow-up delivered on schedule\nENGINEERING FIX: mislabel bug identified, patch scheduled\nAUDIENCE SENTIMENT: recovering but not yet back to baseline",
          spendToDate: "$0",
          budgetRemaining: "Full crisis budget untouched",
          decision: {
            prompt: "How do you close this out?",
            options: [
              {
                id: "cadence-updates-policy-change",
                label: "Publish a short weekly update until the patch ships, and announce a new pre-maintenance user notification policy.",
                verdict: "optimal",
                outcome: "Sentiment returns to baseline within three weeks, and the notification policy becomes a small positive talking point in support reviews.",
                why: "Recovery is a sequence of tangible actions, not a single press release. A concrete policy change is proof something actually changed.",
                lessonRef: "stage-4-recover-weeks-to-months",
                nextStageId: "end",
              },
              {
                id: "one-follow-up-then-silent",
                label: "Publish the promised follow-up, then move on to other priorities.",
                verdict: "costly",
                outcome: "Three weeks later, a maintenance window causes a smaller, similar scare, and this time users reference the first incident as 'they never actually fixed anything.'",
                why: "One detailed follow-up and then silence is a second silence. Audiences who don't hear from you again assume nothing changed.",
                lessonRef: "stage-4-recover-weeks-to-months",
                nextStageId: "end",
              },
              {
                id: "pr-statement-only-no-product-fix",
                label: "Publish a warm, well-written statement about lessons learned, without committing engineering resources to the underlying labeling bug.",
                verdict: "acceptable",
                outcome: "The statement is well received short-term, but the labeling bug resurfaces during the next maintenance window with a smaller version of the same complaint.",
                why: "Words without action set up a worse second crisis. A statement about values means little without a change to the thing that caused the problem.",
                lessonRef: "stage-4-recover-weeks-to-months",
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
            role: "Log the stage, the option chosen, its verdict, and why, as a time-stamped decision record.",
            why: "Free, no account friction, and mirrors the incident log a real crisis team keeps.",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the actual holding statement text before comparing it to the simulation's Draft A/B/C options.",
            why: "Free and lets you practice writing the acknowledge-act-commit-time structure from scratch.",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A time-stamped crisis decision log covering all five stages, each row showing the option you chose, its verdict, and a one-line justification tied to the lesson's framework.",
      sampleOutput:
        "ThredUp crisis decision log (excerpt)\n\nT+0-15min | DETECT | Chose: escalate-fast | Verdict: optimal\n  Why: Escalated to crisis lead within 12 min instead of waiting for more tickets to confirm the pattern.\n\nT+15-60min | ASSESS | Chose: score-level4-single-spokesperson | Verdict: optimal\n  Why: Media interest plus 6,000 affected accounts cleared the Level 4 bar; named one spokesperson to avoid mixed messaging.",
      successCriteria: [
        "Completes all five stages with a decision logged for each",
        "Correctly identifies which stage a costly choice routes into (assess-behind) and why it's harder than the direct path",
        "Final log explains the reasoning for each choice, not just the verdict label",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation choosing the costly option at every stage, then write a one-paragraph comparison of how many extra hours and reputational cost that path added.",
    },
    {
      id: "severity-triage-week-of-complaints",
      tier: "core",
      archetype: "audit",
      title: "Severity Triage: Auditing a Week of Flagged Complaints",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a week's worth of real-style flagged customer complaints and social mentions, apply the lesson's 1-5 severity framework to decide which get a holding statement and which don't.",
      companyId: "instacart",
      scenario:
        "You're the trust and safety comms analyst at Instacart. Six items were flagged by the monitoring dashboard this week, and you have one hour before the weekly comms sync to triage them.",
      brief:
        "Score every item on the 1-5 scale from the lesson, decide the right owner for each, then draft one holding statement for the item that actually clears the Level 4 bar.",
      mode: "diagnostic",
      conceptsCovered: [
        "Severity scoring before response",
        "Holding statement structure",
      ],
      steps: [
        {
          stepId: "step-1-severity-scoring",
          concept: "Severity scoring before response",
          lessonAnchor: "stage-2-assess-15-60-minutes",
          theoryRecap:
            "The lesson's Stage 2 splits incidents into Level 1-2 (isolated complaint, handled by support), Level 3 (multiple complaints or a sensitive topic, comms lead notified), and Level 4-5 (national coverage, safety risk, or regulatory attention, CEO and legal convene within the hour).",
          question:
            "Six flagged items this week: (1) one customer tweet about a late delivery, (2) 40+ complaints about a specific shopper mishandling an allergy note, with a local news tip-line inquiry, (3) a viral TikTok alleging a driver followed a customer home, 600K views, (4) a one-star app review, (5) a data-broker report that a food safety inspector is asking questions about a warehouse, (6) three complaints about a coupon code not applying. Score each 1-5.",
          toolName: "Google Sheets",
          where: "Open a blank Google Sheet with columns: Item, Description, Severity (1-5), Owner, Reasoning.",
          procedure: [
            "List all six items as rows with a short description",
            "Score each 1-5 using the lesson's three tiers, not gut feeling",
            "Assign an owner per score: support for 1-2, comms lead for 3, CEO plus legal plus comms lead for 4-5",
            "Write a one-sentence reasoning for the two highest scores, since those are the ones a director will ask about",
          ],
          outputSample:
            "SEVERITY TRIAGE, week of Aug 11\n\n1. Late delivery tweet — Level 1 — Owner: support\n2. Allergy mishandling, 40+ complaints + local news inquiry — Level 4 — Owner: CEO/legal/comms\n   Reasoning: Safety-adjacent topic plus outside media interest clears the Level 4 bar even without national reach.\n3. Viral TikTok, driver followed customer home, 600K views — Level 5 — Owner: CEO/legal/comms\n   Reasoning: Personal safety allegation plus viral reach is the clearest Level 5 case in the batch.\n4. One-star app review — Level 1 — Owner: support\n5. Warehouse inspector inquiry via data broker — Level 3 — Owner: comms lead notified, watch for escalation\n6. Coupon code complaints — Level 1 — Owner: support",
          healthy:
            "The two flagged items with safety implications and outside interest (items 2 and 3) get escalated same-day; routine items stay with support.",
          unhealthy:
            "Treating item 3 (600K-view safety allegation) the same as item 6 (coupon complaints) because both are 'just social media noise.'",
          interpret:
            "Severity scoring is about scale and audience risk, not how annoyed the complaint sounds. A quiet inquiry from a food safety inspector outranks a loud complaint about a coupon.",
          soWhat: [
            {
              symptom: "Every flagged item lands in the same Slack channel with no triage",
              action: "Build a severity-scored intake sheet so Level 4-5 items get routed within the hour, not discovered at the next sync",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-holding-statement-draft",
          concept: "Holding statement structure",
          lessonAnchor: "stage-3-respond-within-1-4-hours",
          theoryRecap:
            "A holding statement acknowledges the situation directly, states what action is already underway, and commits to a specific update time. All three parts are required; a statement missing the specific time is incomplete.",
          question:
            "Item 3, the viral TikTok safety allegation, is your Level 5. Draft the holding statement using the three-part structure.",
          toolName: "Google Docs",
          where: "Open a blank Google Doc and write the statement as it would actually be published.",
          procedure: [
            "Write the acknowledgment sentence naming the situation without confirming unverified details",
            "Write the action-underway sentence describing what's happening right now, not what you plan to eventually do",
            "Write a specific update-time commitment, a real clock time or a stated number of hours, never 'soon'",
          ],
          outputSample:
            "We are aware of a video circulating regarding a delivery interaction and take any concern about customer or shopper safety seriously. We are actively reviewing the specific order and shopper account involved and have suspended the shopper pending that review. We will share a full update by 6 PM ET today.",
          healthy:
            "The statement names the concern, describes a concrete action already taken (suspension pending review), and gives a real clock time.",
          unhealthy:
            "'We take all reports seriously and will look into this matter.' No action stated, no time given, reads as a placeholder.",
          interpret:
            "The specific time commitment is the part most drafts skip, and it's the part that does the most work: it gives the public a reason to wait instead of fill the silence with speculation.",
          soWhat: [
            {
              symptom: "Draft statements consistently omit a specific update time",
              action: "Add 'update time' as a required field in the statement template so it can't ship without one",
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
            role: "Build and score the severity triage sheet",
            why: "Free, no account friction, matches the intake sheet a real trust and safety team uses",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the holding statement for the Level 4-5 item",
            why: "Free and keeps the statement in a shareable, commentable format for a comms lead to review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A six-item severity triage sheet with scores, owners, and reasoning, plus one complete holding statement for the highest-severity item.",
      sampleOutput:
        "Coinbase severity triage (excerpt)\n\n1. Login outage complaints (12) — Level 2 — Owner: support\n2. Regulator inquiry re: cold storage practices — Level 4 — Owner: CEO/legal/comms\n   Draft statement: 'We are aware of an inquiry regarding our cold storage practices and are cooperating fully with the review. Our security team has confirmed all customer assets remain fully backed 1:1. We will provide a full update by end of day Friday.'",
      successCriteria: [
        "All six items scored using the lesson's tiers, not intuition",
        "Correct owner assigned per severity level",
        "Holding statement includes all three required parts: acknowledgment, action, specific time",
      ],
      portfolioReady: true,
    },
  ],
  "brand-in-ai-era": [
    {
      id: "zero-click-signal-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Zero-Click Audit: Is Your Brand Visible to AI Search?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Score a brand's public presence against the four signal types LLMs actually draw on, then propose one piece of distinctive language worth seeding across third-party platforms.",
      companyId: "thredup",
      scenario:
        "You're a brand strategist doing a quarterly AI-visibility check for ThredUp before a budget review. Leadership wants to know if the brand actually shows up when a shopper asks an AI assistant about secondhand clothing marketplaces.",
      brief:
        "Score the four trust signals from the lesson, then ask three real AI assistants the same category question and record whether the brand is mentioned.",
      mode: "diagnostic",
      conceptsCovered: [
        "Third-party signals AI models trust",
        "Distinctive language AI can associate with a brand",
      ],
      steps: [
        {
          stepId: "step-1-signal-audit",
          concept: "Third-party signals AI models trust",
          lessonAnchor: "what-makes-a-brand-known-to-an-llm",
          theoryRecap:
            "The lesson names four sources LLMs draw on most: press and editorial coverage, Wikipedia and structured reference pages plus review platforms, consistent brand voice across the web, and community-generated content like forum threads and reviews.",
          question:
            "For a brand of your choosing (or ThredUp itself), how strong is each of the four signal types, on a 0-2 scale where 0 is absent and 2 is strong?",
          toolName: "Google Sheets",
          where: "Open a blank Google Sheet with four columns: Press/editorial, Wikipedia/reviews, Consistent voice, Community content.",
          procedure: [
            "Search '[brand name] review' and '[brand name] news' to check for press and editorial coverage from outlets you don't control",
            "Check whether the brand has a factual Wikipedia page, and check G2, Trustpilot, or Capterra for a review profile",
            "Read the brand's own site copy against three independent mentions of it, and note whether the same positioning language shows up in both",
            "Search Reddit and one relevant forum for unprompted discussion of the brand, not brand-initiated posts",
            "Score all four columns 0-2 and total the score out of 8",
          ],
          outputSample:
            "AI VISIBILITY SIGNAL AUDIT\n\nPress/editorial: 2 (covered in TechCrunch, Vogue Business)\nWikipedia/reviews: 1 (Trustpilot profile, no Wikipedia page)\nConsistent voice: 1 (site says 'sustainable style,' but press coverage uses 'secondhand marketplace' more often)\nCommunity content: 2 (active Reddit threads, r/frugalfashion mentions)\nTOTAL: 6/8",
          healthy:
            "A score of 6+ out of 8, with at least one point in every column, means an LLM has multiple independent reasons to associate the brand with its category.",
          unhealthy:
            "A high score in press but 0 in community content, or vice versa. Relying on one signal type leaves the brand invisible the moment that source ages out of a model's training window.",
          interpret:
            "No Wikipedia page is the single most fixable gap here: it's a low-effort anchor point that LLMs use for grounding, and most growing brands haven't created one yet.",
          soWhat: [
            {
              symptom: "Wikipedia/reviews column scores 0 or 1",
              action: "Claim and complete review profiles on the platforms relevant to the category before pursuing a Wikipedia page, which has stricter notability requirements",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-distinctive-language-brief",
          concept: "Distinctive language AI can associate with a brand",
          lessonAnchor: "byron-sharp-in-the-ai-index",
          theoryRecap:
            "A logo or color is invisible to an LLM, but distinctive language, a coined term, a proprietary framework, a consistent metaphor, can be learned and associated with a brand if it's used consistently across third-party platforms, not just the brand's own site.",
          question:
            "Propose one piece of distinctive language the brand could own (a coined term for its approach, or a named framework), and name three third-party platforms where it should appear this quarter.",
          toolName: "Google Docs",
          where: "Open a blank Google Doc and write a one-paragraph brief.",
          procedure: [
            "Draft a short, specific name for a process or approach the brand already does but hasn't named",
            "Write one sentence defining it the same way every time it will be used",
            "List three third-party platforms (a guest post outlet, a podcast, a community forum) where it should be used this quarter, not the brand's own blog",
          ],
          outputSample:
            "Proposed term: 'Closet Velocity' — how fast an item moves from listing to sale on a resale platform, used as ThredUp's shorthand for marketplace liquidity.\nDefinition (repeat verbatim everywhere): 'Closet Velocity measures how quickly a resale listing sells, the core health metric of any secondhand marketplace.'\nSeed platforms: a retail-industry trade publication guest post, a fashion-resale subreddit AMA, a sustainability podcast interview.",
          healthy:
            "The term is specific enough to be quotable and gets the exact same one-sentence definition every time it appears across all three platforms.",
          unhealthy:
            "A vague tagline like 'smarter shopping' that could describe any brand, or a term defined differently in each place it's used.",
          interpret:
            "Consistency of the definition matters more than cleverness of the term. Pattern reinforcement is what gets learned; a term that shifts meaning fragments the signal.",
          soWhat: [
            {
              symptom: "The brand has no memorable, ownable vocabulary distinct from category-generic terms",
              action: "Pick one internal process metric or framework, name it, and write the one-sentence definition that never changes",
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
            role: "Score and total the four-signal audit",
            why: "Free, no account friction, easy to revisit quarterly",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the distinctive-language brief",
            why: "Free and shareable with whoever owns the brand's PR and content pitching",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A four-signal audit score sheet plus a one-paragraph distinctive-language brief naming a term, its fixed definition, and three seed platforms.",
      sampleOutput:
        "Instacart signal audit (excerpt)\n\nPress/editorial: 2\nWikipedia/reviews: 2\nConsistent voice: 1\nCommunity content: 1\nTOTAL: 6/8\n\nProposed term: 'Basket Completion Rate' — the share of started grocery orders that finish checkout, used as shorthand for platform trust.",
      successCriteria: [
        "All four signal types scored with a specific reason for each score, not a guess",
        "Distinctive-language brief includes a fixed one-sentence definition and three named third-party seed platforms",
      ],
      portfolioReady: true,
    },
    {
      id: "predict-before-you-peek-ai-visibility-stats",
      tier: "core",
      archetype: "forecast",
      title: "Predict Before You Peek: Calibrating on 2025's AI-Visibility Research",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Predict the size of two real, measured AI-visibility effects before revealing the actual research numbers, then use the gap between your guess and reality to calibrate how much brand-content investment actually moves AI citation.",
      companyId: "coinbase",
      scenario:
        "You're presenting a content-budget shift to Coinbase's marketing leadership, moving spend from paid performance toward citation-worthy content. Before you present, you want to know if your own intuition about what actually moves AI visibility is calibrated.",
      brief:
        "Write down your prediction for each stat before revealing it, then compare, then translate the real numbers into one budget-shift recommendation.",
      mode: "calibration",
      conceptsCovered: [
        "Statistics and quotations increase AI visibility",
        "Community content compounds LLM equity",
      ],
      steps: [
        {
          stepId: "step-1-predict-stat-lift",
          concept: "Statistics and quotations increase AI visibility",
          lessonAnchor: "byron-sharp-in-the-ai-index",
          theoryRecap:
            "The lesson states that adding statistics to content increases AI visibility by a measured percentage, and adding direct quotations boosts it by a larger measured percentage, per 2025 research cited in the lesson.",
          question:
            "Before looking back at the lesson: do you predict adding statistics or adding direct quotations produces the bigger AI-visibility lift, and by roughly how many percentage points each?",
          toolName: "Google Docs",
          where: "Open a blank Google Doc and write your two numeric predictions before scrolling back to the lesson.",
          procedure: [
            "Write your predicted percentage lift for adding statistics to content",
            "Write your predicted percentage lift for adding direct quotations to content",
            "Only after both are written, check the lesson's actual figures (22% for statistics, 37% for quotations) and record the gap",
          ],
          outputSample:
            "MY PREDICTION: statistics +15%, quotations +20%\nACTUAL (per lesson): statistics +22%, quotations +37%\nGAP: underestimated both, and underestimated quotations by more than double my guess for statistics",
          healthy:
            "A prediction within roughly 10 points of the real figures, and correctly guessing which lever (quotations) is bigger.",
          unhealthy:
            "Guessing statistics as the bigger lever, which is the more common intuitive mistake since numbers feel more 'objective' than quotes.",
          interpret:
            "Direct quotations outperforming raw statistics is counterintuitive if you assume AI models weight numeric precision most heavily. In practice, a quotable, attributable sentence is easier for a model to lift into an answer verbatim.",
          soWhat: [
            {
              symptom: "Content briefs ask writers to 'add data' but never ask for a quotable, attributable line",
              action: "Add a required 'quotable sentence' field to the content brief template, not just a stats requirement",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-community-content-budget-case",
          concept: "Community content compounds LLM equity",
          lessonAnchor: "the-3-brand-building-moves-that-matter-in-2026",
          theoryRecap:
            "The lesson's Move 3 argues that community-generated content, forum threads, a Slack group, a subreddit, compounds because every post becomes an ongoing training signal for the next model generation, unlike a one-time blog post.",
          question:
            "Given that most marketers still allocate close to 70% of spend to performance channels per the lesson, write a two-sentence case for leadership on why a small, recurring community-content budget line is worth adding this quarter.",
          toolName: "Google Docs",
          where: "Continue in the same Google Doc, add a short recommendation section.",
          procedure: [
            "State the current allocation problem in one sentence (most budget chases clicks that are shrinking as AI answers replace search)",
            "State the community-content case in one sentence, tying it to the compounding mechanic from the lesson, not just 'engagement'",
          ],
          outputSample:
            "Nearly 70% of our spend still targets clicks that a growing share of buyers never make. Investing even a small recurring budget in community, a moderated subreddit or user forum, creates human-authored mentions that compound with every future model training cycle, unlike a blog post that only exists once.",
          healthy:
            "The recommendation names the specific compounding mechanic (training signal for future models) rather than a generic 'community is good' argument.",
          unhealthy:
            "A recommendation that describes community content as good for 'engagement' or 'brand love' without connecting it to the AI-citation mechanism the lesson actually explains.",
          interpret:
            "Leadership will fund what they understand the mechanism for. 'It compounds because every post is a future training signal' is a specific, defensible budget argument; 'community builds brand love' is not.",
          soWhat: [
            {
              symptom: "Budget proposals for community content get deprioritized against performance channels with clearer immediate ROI",
              action: "Reframe the pitch around the compounding training-signal mechanic, not soft engagement metrics",
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
            role: "Record predictions before reveal, then draft the budget recommendation",
            why: "Free, and writing the prediction down before checking forces honest calibration instead of hindsight bias",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A recorded prediction-versus-actual comparison for the statistics/quotation lift, plus a two-sentence budget-shift recommendation grounded in the community-content compounding mechanic.",
      sampleOutput:
        "ThredUp calibration doc (excerpt)\n\nMY PREDICTION: statistics +25%, quotations +25%\nACTUAL: statistics +22%, quotations +37%\nGAP: overestimated statistics slightly, significantly underestimated quotations\n\nBudget case: Nearly 70% of spend still chases clicks fewer buyers make. A small recurring community-content line compounds because every user post becomes a training signal for the next model generation.",
      successCriteria: [
        "Prediction recorded in writing before the actual figures were checked",
        "Gap between prediction and actual figures explicitly stated",
        "Budget recommendation names the compounding training-signal mechanic, not a generic engagement argument",
      ],
      portfolioReady: true,
    },
  ],
};
