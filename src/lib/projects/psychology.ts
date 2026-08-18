import type { Project } from "@/lib/projects/types";

export const PSYCHOLOGY_PROJECTS: Record<string, Project[]> = {
  "psychology-101": [
    {
      id: "persuasion-cue-live-page-audit",
      tier: "core",
      archetype: "audit",
      title: "The Persuasion Cue Audit: Diagnosing a Live Product Page",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given any live ecommerce or booking page you can access for free, identify which of Cialdini's seven persuasion principles are present, which are missing, and whether any urgency or scarcity claim on the page is honest or fabricated.",
      companyId: "nykaa",
      scenario:
        "You're a growth marketer at Nykaa, the Mumbai-founded beauty and fashion ecommerce company (NSE: NYKAA), prepping a briefing for a category-page redesign sprint. Before anyone touches the design, leadership wants a plain audit of which persuasion levers competitors and your own pages actually use.",
      brief:
        "Pick any live product or checkout page, log every System 1 cue and Cialdini principle you can find, then test whether the urgency claims on that page are real or fabricated.",
      mode: "diagnostic",
      conceptsCovered: [
        "Identifying which persuasion principle a page element uses",
        "Auditing whether urgency and scarcity claims are honest",
      ],
      steps: [
        {
          stepId: "step-1-principle-inventory",
          concept: "Identifying which persuasion principle a page element uses",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson frames every page element as a signal sent to System 1 before System 2 ever gets a turn, and names Cialdini's principles, reciprocity, commitment, social proof, authority, liking, scarcity, unity, as the specific levers that move it.",
          question:
            "Looking at a real product page element, 'Booked 4 times in the last 6 hours' next to 'Only 2 left at this price', which two principles are stacked here, and is stacking two at once still honest?",
          toolName: "Google Sheets",
          where: "Open any live product or checkout page in a second browser tab alongside a fresh spreadsheet.",
          procedure: [
            "Pick one live product, checkout, or booking page you can access for free",
            "Screenshot or list every UI element that is not pure product description, badges, counters, banners, reviews, timers",
            "Create 7 columns, one per Cialdini principle, plus an 'element' column",
            "Tag each element to the principle it triggers, note if any element triggers two at once",
          ],
          outputSample:
            "Page: [product] checkout\n\nElement                                   Principle        Stacked?\n'4.6 stars, 12,340 ratings'               Social proof     No\n'Only 3 left in stock'                     Scarcity         No\n'Recommended by 9/10 dermatologists'      Authority        No\n'Booked 4 times in last 6 hours'          Social proof +   Yes, stacked with the\n  + '2 people viewing this now'             Scarcity         scarcity counter above",
          healthy:
            "The page uses 1-2 principles clearly, each one backed by a real, checkable number.",
          unhealthy:
            "The page stacks four or more principles on a single element, or repeats the same principle three different ways above the fold.",
          interpret:
            "A page that reads as 'too eager to convince you' has usually stacked principles past the point the lesson warns about, start with one lever per element, not seven.",
          soWhat: [
            {
              symptom: "One product card carries 3+ persuasion badges at once",
              action: "Cut to the single strongest, most honest principle for that element",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-honesty-check",
          concept: "Auditing whether urgency and scarcity claims are honest",
          lessonAnchor: "where-it-backfires-ethical-limits",
          theoryRecap:
            "The lesson's clean test is: if the customer found out exactly how the persuasion worked, would they still feel respected? Fabricated urgency, like a countdown that resets on refresh, fails that test and has drawn real regulatory fines.",
          question:
            "A countdown timer says '4:58 remaining'. You refresh the page. It says '4:59 remaining' again. What does that tell you about the claim, and what should the page do instead?",
          toolName: "Google Sheets",
          where: "The same live page from Step 1, refreshed 3 times and logged in a new sheet tab.",
          procedure: [
            "Find any countdown timer, low-stock counter, or 'X people viewing' claim on the page",
            "Refresh the page 3 times, 30 seconds apart, and record the exact value each time",
            "Open the page in a private/incognito window and compare the same claim's value",
            "Mark each claim as real (tied to actual inventory or session data) or fabricated (resets, or identical across sessions)",
          ],
          outputSample:
            "Claim                          Refresh 1   Refresh 2   Incognito   Verdict\n'4:58 remaining'                4:58        4:59        4:58        Fabricated, resets\n'Only 3 left in stock'           3 left      3 left      3 left      Real, consistent\n'12 people viewing'              12          9           14          Real, fluctuates plausibly",
          healthy:
            "Every urgency or scarcity number stays consistent across refreshes and only changes in a way that matches real behavior (like a viewer count going up and down).",
          unhealthy:
            "A countdown timer resets to its original value on refresh, or a 'low stock' claim never changes no matter how many times the page is reloaded or how much time passes.",
          interpret:
            "A resetting timer is not a UX bug, it is a fabricated urgency claim, and regulators in the UK and EU have fined companies for exactly this pattern since 2024.",
          soWhat: [
            {
              symptom: "A countdown timer resets on refresh",
              action: "Flag it to the developer, replace with a real inventory-tied counter or remove it",
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
            role: "Log every persuasion cue and its honesty verdict",
            why: "Free, no account needed beyond a Google login, and sortable by principle",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page principle inventory of a live product page, tagging every persuasion cue by Cialdini principle and marking each urgency/scarcity claim real or fabricated.",
      sampleOutput:
        "Page audited: Chewy.com, dog food subscription checkout\n\n" +
        "PRINCIPLE INVENTORY\n" +
        "  Social proof     'Rated 4.8 by 28,000+ pet parents'          Real, links to review count\n" +
        "  Commitment       'Autoship saves you 5% every order'          Real, matches account settings\n" +
        "  Scarcity         none found                                   n/a\n\n" +
        "HONESTY CHECK\n" +
        "  No countdown timers or low-stock counters present on this checkout flow.\n" +
        "  Verdict: page relies on subscription commitment and real review counts, not fabricated urgency.",
      successCriteria: [
        "Tags at least 5 real page elements to a specific Cialdini principle",
        "Correctly identifies at least one honest and one fabricated (or absent) urgency claim through the refresh test",
      ],
      portfolioReady: true,
    },
    {
      id: "dark-pattern-or-honest-nudge-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Dark Pattern or Honest Nudge? A Landing Page Teardown",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given three specimen landing-page snippets, decide for each one whether it is an honest application of a persuasion principle or a dark pattern that suppresses information System 2 would need, and name the specific defect if there is one.",
      companyId: "rent-the-runway",
      scenario:
        "You're a UX researcher doing a pre-launch content review for Rent the Runway, the Nasdaq-listed fashion rental company (NASDAQ: RENT), before a new checkout flow ships. Legal and growth disagree on three pieces of copy, your teardown settles it.",
      brief:
        "Read each specimen, decide honest nudge or dark pattern, and justify it against the lesson's 'would the customer still feel respected' test.",
      mode: "teardown",
      conceptsCovered: [
        "Distinguishing honest urgency from fabricated urgency",
        "Recognizing confirm-shaming as a dark pattern",
        "Recognizing legitimate social proof",
      ],
      teardownItems: [
        {
          itemId: "item-1-countdown-banner",
          specimen:
            "Banner copy on the rental checkout page:\n\n'Only 1 dress left in your size! Reserved for you for the next 4 minutes.'\n\nQA note from engineering: the 4-minute timer restarts at 4:00 every time the page is refreshed or revisited, and inventory count does not change regardless of the timer's state.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this an honest application of scarcity, or a dark pattern? If it's a defect, name it precisely.",
          answerKey: [
            {
              defect:
                "The countdown timer resets on every refresh instead of tracking a real reservation hold, making the urgency fabricated rather than tied to actual inventory or a real reservation lock.",
              severity: "critical",
              whyItMatters:
                "The lesson's own test fails here, if the customer discovered the timer always resets, they would feel deceived, not respected, and this exact pattern has drawn regulatory fines since 2024.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: [
            "The phrase 'Only 1 dress left' is itself the defect, because scarcity messaging is inherently manipulative even when accurate",
            "The defect is that the banner uses red text, since urgent colors are always a dark pattern regardless of the underlying claim",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-social-proof-line",
          specimen:
            "Line displayed under a dress listing:\n\n'1,842 people rented this dress this month.'\n\nInternal note: this number is pulled live from the rental database's monthly count query, updated nightly.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this an honest application of social proof, or a dark pattern? If it's a defect, name it precisely.",
          answerKey: [],
          distractors: [
            "This is a dark pattern because it pressures the customer with a large number they cannot verify themselves",
            "The defect is that a real number without a source citation is automatically fabricated urgency",
            "This is manipulative because 1,842 is suspiciously round-sounding and likely inflated",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-confirm-shaming-modal",
          specimen:
            "Exit-intent modal on the cancel-subscription flow, two buttons:\n\n'Keep My Closet Active' (highlighted, large)\n'No thanks, I don't want great outfits' (small, grey text)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Is this an honest application of a persuasion principle, or a dark pattern? If it's a defect, name it precisely.",
          answerKey: [
            {
              defect:
                "Confirm-shaming opt-out copy, the decline option is worded to mock or guilt the customer instead of neutrally stating the choice (e.g. 'No thanks, cancel my subscription').",
              severity: "moderate",
              whyItMatters:
                "This directly matches the lesson's named example of confirm-shaming as a dark pattern, and the US FTC's 2023 Click-to-Cancel rule specifically targets cancellation flows that add friction or shame.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "you",
            },
          ],
          distractors: [
            "The defect is that the 'Keep My Closet Active' button is visually larger, since any size difference between two buttons is inherently manipulative",
            "This is fine because the customer can still technically click the small button to cancel",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each specimen's verdict and reasoning before checking the answer key",
            why: "Free, and forces you to write your reasoning down before seeing the answer",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-row verdict sheet, one row per specimen, marking honest nudge or dark pattern with a one-sentence justification for each.",
      sampleOutput:
        "Teardown log, ThredUp checkout review\n\n" +
        "Specimen                                Verdict          Justification\n" +
        "'Ships in 2-3 days, tracked'              Honest           Factual shipping info, no pressure tactic\n" +
        "'9 shoppers bought this today'            Honest           Live database count, checked against admin panel\n" +
        "'Wait, don't leave your bag empty!'       Borderline       Mild guilt language, not confirm-shaming but worth softening",
      successCriteria: [
        "Correctly identifies the fabricated-urgency defect in item 1",
        "Correctly identifies item 2 as honest social proof, not a dark pattern",
        "Correctly identifies the confirm-shaming defect in item 3",
      ],
      portfolioReady: true,
    },
  ],
  "system-1-system-2": [
    {
      id: "purchase-classification-calibration",
      tier: "mini",
      archetype: "audit",
      title: "System 1 or System 2? Calibrating Your Purchase-Classification Judgment",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Classify 6 real purchase scenarios as System 1-dominant or System 2-dominant, then check your reasoning against a known-good key to calibrate your judgment before applying it to your own marketing decisions.",
      companyId: "chewy",
      scenario:
        "You're a lifecycle marketer at Chewy, the Nasdaq-listed pet products retailer known for its Autoship subscription model, prepping a briefing on which purchase moments deserve emotional creative versus which need a spec sheet.",
      brief:
        "Read each scenario, classify it, write one sentence of reasoning, then reveal the known-good key and score yourself.",
      mode: "calibration",
      conceptsCovered: ["Matching persuasion tactic to system dominance by price and risk"],
      steps: [
        {
          stepId: "step-1-classify-scenarios",
          concept: "Matching persuasion tactic to system dominance by price and risk",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson's rule of thumb: cheap and habitual purchases run on System 1, expensive and considered purchases wake System 2. A $4 snack needs imagery and one-tap checkout, a $40,000 contract needs ROI proof.",
          question:
            "For each of the 6 scenarios below, is the dominant decision-maker System 1 or System 2, and what single word gives it away, price, risk, habit, or novelty?",
          toolName: "Google Sheets",
          where: "A blank spreadsheet, one row per scenario, columns for your classification and reasoning.",
          procedure: [
            "Read all 6 scenarios below before classifying any of them",
            "For each, write S1 or S2 plus one sentence of reasoning in your own words",
            "Do not look at the outputSample answer key until you have classified all 6",
            "Score yourself: 5-6 correct is well-calibrated, 3-4 means re-read the price/risk/habit rule, 0-2 means re-read How It Actually Works before trusting your gut on real campaigns",
          ],
          outputSample:
            "SCENARIOS\n" +
            "1. Reordering the same bag of dog treats via Autoship (habitual, $18)\n" +
            "2. Switching pet insurance providers for the first time ($40/month, 1-year lock-in)\n" +
            "3. Adding a $6 squeaky toy to cart because it's cute in the thumbnail\n" +
            "4. Choosing a $1,200 orthopedic dog bed after a vet recommendation\n" +
            "5. Clicking 'reorder' on a treat bag from a push notification while walking the dog\n" +
            "6. Comparing 3 pet insurance plans in a spreadsheet before signing up\n\n" +
            "KNOWN-GOOD KEY\n" +
            "1. S1, habitual + low price, no new decision being made\n" +
            "2. S2, high risk (1-year lock-in) and unfamiliar category, needs comparison\n" +
            "3. S1, low price + emotional trigger (cute image), impulse\n" +
            "4. S2, high price + external authority signal (vet) invites deliberation\n" +
            "5. S1, near-zero friction, habitual, mobile context reinforces speed\n" +
            "6. S2, the act of comparing in a spreadsheet is System 2's signature move",
          healthy:
            "You correctly classify at least 5 of 6, and your reasoning names price, risk, habit, or novelty rather than a vague 'it felt like System 1'.",
          unhealthy:
            "You classify every scenario as System 1 (or every scenario as System 2) instead of splitting them, a sign you're not actually applying the price/risk gradient.",
          interpret:
            "Miscalibration usually clusters around mid-price items, scenario 3's $6 toy or a $150 item, where the temptation is to overthink an impulse buy or under-think a considered one.",
          soWhat: [
            {
              symptom: "You scored 3 or below",
              action: "Re-read How It Actually Works, then reclassify only the scenarios you got wrong",
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
            role: "Track your classification and reasoning before revealing the key",
            why: "Free and forces written reasoning, which is what actually calibrates judgment",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 6-row self-scored classification sheet with your reasoning and a calibration score out of 6.",
      sampleOutput:
        "HelloFresh purchase-classification calibration\n\n" +
        "1. First-time meal-kit subscription signup       S2  new category, needs proof of value\n" +
        "2. Reordering the same weekly box                 S1  habitual, already trusts the brand\n" +
        "3. Upgrading to a premium recipe tier for $8 more  S1  small delta, low-risk add-on\n" +
        "4. Cancelling after comparing 3 competitor prices   S2  active comparison, price-driven\n" +
        "Score: 4/4",
      successCriteria: [
        "Classifies at least 5 of 6 scenarios correctly against the known-good key",
        "States the price, risk, habit, or novelty signal that drove each classification",
      ],
      portfolioReady: false,
    },
    {
      id: "cognitive-load-checkout-checklist-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Cognitive-Load Checkout Checklist",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Build a reusable one-page checklist of the friction points most likely to wake System 2 during checkout, so any future redesign can be screened against it in minutes.",
      companyId: "hellofresh",
      scenario:
        "You're a CRO analyst at HelloFresh, the meal-kit subscription company, and the design team keeps proposing checkout changes with no shared standard for what counts as friction. You're building the checklist that becomes the standard.",
      brief:
        "Turn the lesson's cognitive-ease principle into a concrete, reusable checklist a designer could run through in under 5 minutes on any checkout page.",
      mode: "build",
      conceptsCovered: ["Reducing cognitive load at the moment of action"],
      steps: [
        {
          stepId: "step-1-build-checklist",
          concept: "Reducing cognitive load at the moment of action",
          lessonAnchor: "how-to-apply-it-ethically",
          theoryRecap:
            "The lesson names cognitive ease as the discipline of removing friction at the moment of action, every extra form field, unexpected fee, or jargon word wakes System 2 and gives it a reason to walk away.",
          question:
            "What are the 8 most common friction points on a checkout flow that give System 2 a reason to stop and think, and how would you phrase each as a yes/no checklist item?",
          toolName: "Notion",
          where: "A new Notion page or doc, formatted as a checklist with checkboxes.",
          procedure: [
            "List every moment in a typical checkout where a customer might pause: form fields, price reveals, account creation, shipping cost, confirmation",
            "For each, write one yes/no checklist question a designer can answer just by looking at the page",
            "Group the 8 items under 3 headers: Before Checkout, During Checkout, At Confirmation",
            "Add a one-line 'why this matters' note under each item, referencing System 1/System 2",
          ],
          outputSample:
            "COGNITIVE-LOAD CHECKOUT CHECKLIST\n\n" +
            "BEFORE CHECKOUT\n" +
            "[ ] Is the total price (including shipping/tax) visible before the final screen?\n" +
            "     Why: a surprise price at the end is the #1 System 2 trigger, per Baymard's 2024 abandonment research\n" +
            "[ ] Can the customer check out as a guest, without creating an account first?\n" +
            "     Why: forced signup adds a decision point that has nothing to do with the purchase\n\n" +
            "DURING CHECKOUT\n" +
            "[ ] Are there 5 or fewer form fields on the payment step?\n" +
            "[ ] Is there any jargon (SKU, promo code terms, shipping tier names) left unexplained?\n" +
            "[ ] Does autofill work on every field?\n\n" +
            "AT CONFIRMATION\n" +
            "[ ] Does the confirmation screen restate exactly what was charged, with no new numbers?\n" +
            "[ ] Is the cancel/refund policy one click away, not buried in a footer link?\n" +
            "[ ] Is there a single, unambiguous next action (not 3 competing CTAs)?",
          healthy:
            "The checklist has exactly one clear yes/no question per friction point, and a designer could run through all 8 items on a real page in under 5 minutes.",
          unhealthy:
            "Checklist items are vague opinions ('does it feel easy?') instead of yes/no, checkable facts about the page.",
          interpret:
            "A checklist item that requires judgment instead of observation will get answered inconsistently by different people, the whole point of building the asset is to remove that inconsistency.",
          soWhat: [
            {
              symptom: "A checklist item can't be answered with a clear yes or no",
              action: "Rewrite it as a specific, observable fact about the page",
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
            role: "Build and store the reusable checklist document",
            why: "Free tier supports checkboxes and is easy to share with a design team",
            required: true,
            fallback: "Google Sheets works equally well if Notion access isn't available",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A reusable 8-item cognitive-load checklist, grouped into 3 checkout stages, ready to run against any future checkout redesign.",
      sampleOutput:
        "Chewy checkout cognitive-load review, applied to the Autoship signup flow\n\n" +
        "BEFORE CHECKOUT\n" +
        "[x] Total price visible before final screen\n" +
        "[x] Guest checkout available\n\n" +
        "DURING CHECKOUT\n" +
        "[ ] 5 or fewer form fields, FAIL: 8 fields on payment step, address autofill missing 2 fields\n" +
        "[x] No unexplained jargon\n\n" +
        "AT CONFIRMATION\n" +
        "[x] Confirmation restates charge with no new numbers\n" +
        "[ ] Cancel policy one click away, FAIL: buried in footer\n\n" +
        "Result: 6/8, two flagged for the next sprint",
      successCriteria: [
        "Produces exactly 8 checklist items, each phrased as a yes/no observable question",
        "Each item includes a one-line System 1/System 2 rationale",
      ],
      portfolioReady: true,
    },
  ],

  "maslow-marketing": [
    {
      id: "maslow-tier-landing-page-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which Need Are You Actually Selling? A Homepage Tier Audit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 3 real product homepage headlines, identify which Maslow tier each one targets, check that tier against the tier a first-time buyer is actually in, and flag the channel the headline is currently running in.",
      companyId: "chewy",
      scenario:
        "You're the on-site copy analyst at Chewy, the pet-products subscription retailer, reviewing whether the Autoship homepage headline matches the tier a first-time, worried pet owner is actually in when they land, before the team greenlights new paid creative.",
      brief:
        "Diagnose the tier of 3 real headlines (Chewy's own, or two category competitors), then check whether each one is running in the right channel for that tier.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing which Maslow tier the customer is actually in",
        "Matching channel to tier",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-tier",
          concept: "Diagnosing which Maslow tier the customer is actually in",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson's meal-kit example shows the same product becomes five different ads depending which tier the copy names: 'ready in 15 minutes' is physiological, 'doctor-approved' is safety, 'cook together' is belonging, 'restaurant-quality plating' is esteem, 'learn to cook like a chef' is self-actualization.",
          question:
            "Pull 3 real homepage headlines in one product category (Chewy's own, plus 2 competitors). For each, which single tier does the wording target, and is that the tier a first-time, worried buyer of that category is actually in when they land?",
          toolName: "Google Sheets",
          where:
            "New sheet with columns: headline | tier claimed | evidence phrase | customer's real tier | match?",
          procedure: [
            "Copy 3 real homepage headlines in one product category, one being the company you're reviewing",
            "For each, underline the exact word or phrase that signals the tier ('organic' = safety, 'join thousands of pet parents' = belonging, 'guilt-free' = esteem)",
            "Write down which tier a first-time, anxious buyer of that category is actually in the moment they land on the page",
            "Mark a mismatch anywhere the claimed tier and the customer's real tier don't line up",
          ],
          outputSample:
            "headline | tier claimed | evidence | customer's real tier | match?\n" +
            "\"Never run out again\" | Safety | \"never run out\" | Safety (worried about missing a refill) | YES\n" +
            "\"Join 20M pet parents\" | Belonging | \"join\" | Safety (first-time buyer, unsure about quality) | NO\n" +
            "\"Vet-formulated, ships free\" | Safety | \"vet-formulated\" | Safety (first-time buyer, unsure about quality) | YES",
          healthy:
            "2 of 3 headlines match the customer's real tier; the mismatched one is flagged with a specific fix, not a vague 'improve messaging' note.",
          unhealthy:
            "All 3 headlines target esteem or belonging on a category where every buyer lands in safety mode first; nobody on the team has ever named the mismatch out loud.",
          interpret:
            "A belonging-tier headline aimed at a safety-tier buyer doesn't fail because it's bad copy, it fails because it answers a question the buyer isn't asking yet.",
          soWhat: [
            {
              symptom: "Headline sells belonging or esteem to a customer still in safety mode",
              action: "Rewrite the above-the-fold headline to lead with the safety proof point; move belonging language to post-purchase or loyalty emails",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-match-channel",
          concept: "Matching channel to tier",
          lessonAnchor: "how-to-apply-it-ethically",
          theoryRecap:
            "The lesson states physiological and safety pitches work in performance channels (Search, retargeting), while esteem and self-actualization pitches need brand channels (long-form video, PR, founder content) to compound over time.",
          question:
            "For the same 3 headlines, which channel is each one currently running in (or would naturally run in), and does that channel match the tier the headline targets?",
          toolName: "Google Sheets",
          where: "Same sheet, add a column: current/likely channel | channel fits tier?",
          procedure: [
            "For each headline, note the channel it appears in today (homepage hero, Google Search ad, YouTube pre-roll, retargeting banner)",
            "Mark whether a performance channel is carrying a belonging/esteem message, or a brand channel is carrying a safety message",
            "For any mismatch, name the channel that would fit the tier better",
          ],
          outputSample:
            "headline | tier | current channel | fits?\n" +
            "\"Vet-formulated, ships free\" | Safety | Google Search ad | YES, performance channel\n" +
            "\"Join 20M pet parents\" | Belonging | Google Search ad | NO, belonging needs a brand channel like YouTube or email",
          healthy: "Safety and physiological headlines live in Search/retargeting; belonging and esteem headlines live in video, email, or PR.",
          unhealthy: "A belonging-tier message is burning Search ad spend meant for buyers actively comparing prices, converting far below a safety-tier ad in the same slot.",
          interpret: "A tier-channel mismatch isn't just weak copy, it's budget spent trying to build identity in a channel built for comparison shopping.",
          soWhat: [
            {
              symptom: "A belonging or esteem headline is running as a Google Search ad",
              action: "Move that message to a brand channel (YouTube, email, founder content) and replace the Search ad with a safety-tier headline",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log headlines, tiers, and channel fit", why: "Free, no account friction, sortable columns", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A 3-row tier-and-channel audit with every mismatch flagged and a one-line fix for each.",
      sampleOutput:
        "Nykaa, homepage headline audit (excerpt)\n\n" +
        "headline | tier claimed | customer's real tier | match? | channel | fits?\n" +
        "\"India's glow-up destination\" | Esteem | Safety (first-time buyer worried about authenticity) | NO | Google Search ad | NO\n" +
        "\"100% authentic, or your money back\" | Safety | Safety | YES | Google Search ad | YES\n" +
        "FIX: swap the hero headline on the paid-search landing page to the authenticity guarantee; move the glow-up esteem line to the loyalty-program welcome email.",
      successCriteria: [
        "Correctly identifies the targeted tier for all 3 headlines with a quoted evidence phrase",
        "Flags at least one tier-channel mismatch with a specific, actionable fix",
      ],
      portfolioReady: true,
    },
    {
      id: "maslow-fear-marketing-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Spot the Manufactured Fear: A Maslow Tier-Mixing Teardown",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given 4 synthetic-but-realistic ad copy specimens, identify which ones manufacture a lower-tier fear to sell a higher-tier product, which stack more than one tier in a single asset, and which are honest, correctly-targeted pitches.",
      companyId: "honasa-mamaearth",
      scenario:
        "You're the reviewer sitting between the creative team and paid media at a D2C beauty company, checking a batch of draft ad copy against the lesson's ethical test before it goes live: would you say this claim out loud to the customer's face?",
      brief:
        "Read each specimen once as a customer would, then find the defect: a manufactured fear, a stacked-tier headline, or a tier mismatched to the customer's real moment. One specimen has no defect at all.",
      mode: "teardown",
      conceptsCovered: [
        "Manufacturing lower-tier fear to sell higher-tier products",
        "Stacking more than one tier in a single asset",
        "Matching tier to the customer's actual moment",
      ],
      teardownItems: [
        {
          itemId: "item-1-serum-fear",
          specimen:
            "Instagram ad copy, face serum:\n\n\"Your skin is absorbing toxins every single day, from tap water, from your pillowcase, from the air itself, and most of it is silently building up in your pores. Our Vitamin C Barrier Serum flushes it out so you can finally have the luminous, envy-worthy glow your skin was always capable of. Shop now, your future self will thank you.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "What is the defect in this copy, and which Maslow tiers is it mixing?",
          answerKey: [
            {
              defect:
                "Manufactures a nonexistent safety-tier threat ('toxins silently building up') with no cited mechanism or source, then pivots to an esteem-tier glow claim",
              severity: "critical",
              whyItMatters:
                "This is exactly the pattern the FTC's 2024 wellness-advertiser enforcement actions targeted, inventing a health risk to justify a purchase the customer didn't actually need protection from.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "you",
            },
          ],
          distractors: [
            "The copy uses the word 'shop now' as a call to action",
            "The copy mentions the product is a serum rather than a cream",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-stacked-tiers",
          specimen:
            "Landing page hero headline, sleep-tracking ring:\n\n\"Finally sleep through the night, join thousands of high-performers who've made rest their edge, and become the best version of yourself, one night at a time.\"",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect in this headline?",
          answerKey: [
            {
              defect:
                "Stacks three tiers in one headline, physiological ('sleep through the night'), belonging ('join thousands'), and self-actualization ('best version of yourself'), diluting all three instead of committing to one",
              severity: "moderate",
              whyItMatters:
                "The lesson's own rule is 'pick one tier per asset'; a landing page trying to be all three says nothing clearly and gives the reader no single reason to keep reading.",
              lessonRef: "How to Apply It Ethically",
              owner: "you",
            },
          ],
          distractors: [
            "The headline is longer than one sentence",
            "The headline mentions a specific product category (sleep-tracking ring)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-honest-safety-pitch",
          specimen:
            "Google Search ad, home water filter:\n\n\"NSF-certified, removes lead and 60+ contaminants. Independently tested, results on our site. Ships free, 30-day return.\"",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect in this ad, if any?",
          answerKey: [],
          distractors: [
            "It only mentions safety, so it should also add belonging language",
            "It doesn't use an emotional hook, so it must be underperforming",
            "It should promise a lifestyle upgrade to convert better",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-esteem-mismatch",
          specimen:
            "Retargeting ad shown to a visitor who just searched 'home security system after break-in':\n\n\"Be the envy of your street. Our sleek, design-award-winning system doesn't just protect your home, it makes a statement.\"",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect in this ad, given who is seeing it?",
          answerKey: [
            {
              defect:
                "Targets the esteem tier ('be the envy of your street') at a visitor whose search behavior shows they're in acute safety-tier need (a recent break-in), the tier is mismatched to the customer's real moment, not just mismatched to the product category",
              severity: "critical",
              whyItMatters:
                "A first-time homebuyer or a break-in victim in safety mode who sees a status ad reads it as tone-deaf, the lesson's own homebuyer example warns against exactly this.",
              lessonRef: "How to Apply It Ethically",
              owner: "you",
            },
          ],
          distractors: [
            "The ad mentions a design award, which is an unrelated claim",
            "The ad is a retargeting ad rather than a cold ad",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each specimen's defect, severity, and lesson reference", why: "Free, easy to structure as a scoring rubric", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A scored teardown of all 4 specimens: defect (or 'none'), severity, and the lesson section each violates.",
      sampleOutput:
        "Warby Parker, ad copy review (excerpt)\n\n" +
        "item-1, homepage banner: \"Millions have terrible eyesight and don't even know it. See what you're missing, literally, with prescription-grade lenses starting at $95.\"\n" +
        "DEFECT: manufactures a safety-tier fear ('don't even know it') with no supporting data, to sell a routine, low-risk purchase.\n" +
        "SEVERITY: moderate (no invented health mechanism, but still implies undiagnosed risk without evidence).",
      successCriteria: [
        "Correctly flags the defect in item-1, item-2, and item-4 with the matching lesson reference",
        "Correctly identifies item-3 as having no defect rather than over-flagging it",
      ],
      portfolioReady: true,
    },
  ],
  "emotion-vs-logic": [
    {
      id: "emotion-first-headline-audit",
      tier: "mini",
      archetype: "audit",
      title: "Feeling or Feature? Auditing Your Own Headlines for System 1",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 3 real ad or landing-page headlines, classify each as feeling-first or feature-first, rewrite the feature-first ones, then collect 3 real 'why did you buy' answers to check what customers say versus what likely moved them first.",
      companyId: "duolingo",
      scenario:
        "You're a growth marketer at Duolingo checking whether the app's own paid-search headlines lead with an emotional payoff (confidence, relief from guilt) or a feature (streaks, XP, lesson count) before a new batch of ad variants goes live.",
      brief:
        "Classify 3 real headlines as feeling-first or feature-first, rewrite the feature-first ones, then collect real customer reasoning to see what they say after the fact.",
      mode: "diagnostic",
      conceptsCovered: [
        "Leading the headline with a feeling instead of a feature",
        "Testing the post-purchase rationalization",
      ],
      steps: [
        {
          stepId: "step-1-classify-and-rewrite",
          concept: "Leading the headline with a feeling instead of a feature",
          lessonAnchor: "how-to-apply-it-ethically",
          theoryRecap:
            "The lesson's rule: 'Sleep through the night again' beats '10-hour battery.' Lead the headline with the feeling the product produces, save the spec for the third paragraph where System 2 goes looking for ammunition.",
          question:
            "Pull 3 real headlines (Duolingo's own paid-search ad, plus 2 competitor language-app ads). For each, is the first clause a feeling or a feature? Rewrite any feature-first headline.",
          toolName: "Google Sheets",
          where: "New sheet: headline | feeling-first or feature-first | rewrite (if needed)",
          procedure: [
            "Copy 3 real headlines in one category",
            "Underline the first clause of each and classify it as naming a feeling (relief, pride, confidence) or a feature (streaks, price, spec)",
            "For any feature-first headline, rewrite it to lead with the feeling the feature produces",
            "Keep the original feature language in the rewrite, just move it to the second clause",
          ],
          outputSample:
            "headline | classification | rewrite\n" +
            "\"500+ million downloads, learn 40+ languages\" | Feature-first | \"Finally speak Spanish without freezing up, one 5-minute lesson at a time.\"\n" +
            "\"Never lose your streak\" | Feeling-first (loss-aversion pride) | no rewrite needed",
          healthy: "The team can point to a specific feeling word in the winning headline, not just 'it converted better.'",
          unhealthy: "Every headline in the account opens with a number (downloads, price, lesson count) and nobody has tested a feeling-first version.",
          interpret: "A feature-first headline talks to System 2, the part of the brain that's already tired and skeptical by the time it reads an ad; a feeling-first headline talks to System 1, which decides in about 50 milliseconds.",
          soWhat: [
            { symptom: "Every headline in the account leads with a number or spec", action: "A/B test a feeling-first rewrite of the top 3 spending ads against the current feature-first versions", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-post-purchase-check",
          concept: "Testing the post-purchase rationalization",
          lessonAnchor: "how-to-apply-it-ethically",
          theoryRecap:
            "The lesson's rule: ask customers why they bought, their stated reasons are the logical scaffold System 2 built after System 1 already decided, and that language belongs in retargeting and case studies, not in the first headline.",
          question:
            "Collect 3 real 'why did you buy/subscribe' answers (from reviews, a quick survey, or people you know who use the product). Do the stated reasons sound like justifications, and would a feeling-first or feature-first headline have gotten them there first?",
          toolName: "Google Forms",
          where: "One-question form: 'Why did you start using this product?', sent to 3 real users",
          procedure: [
            "Create a 1-question Google Form: 'Why did you start using [product]?'",
            "Send it to 3 real users or pull 3 real public reviews mentioning a reason",
            "Log each answer, and note whether it reads as a feature justification (price, spec) or a feeling (relief, pride)",
            "Compare against the headline classification from Step 1, does the stated reason match what likely got their attention first?",
          ],
          outputSample:
            "answer 1: \"It's cheaper than a tutor and I can do it on the bus.\" (feature justification, arrived after the fact)\n" +
            "answer 2: \"I felt embarrassed I couldn't order food in Spanish on my trip, so I just wanted to not feel like that again.\" (the actual feeling that drove the decision)",
          healthy: "At least one answer names an emotional trigger (embarrassment, relief, pride) that predates the logical reasons listed afterward.",
          unhealthy: "The survey only asks 'rate our features 1-5' and never gives the customer room to describe the moment or feeling that triggered the purchase.",
          interpret: "The feature-sounding answers aren't wrong, they're just System 2's paperwork; the feeling named alongside them is the System 1 decision that actually happened first.",
          soWhat: [
            { symptom: "Case studies and testimonials only quote feature reasons", action: "Ask one follow-up question in every customer interview: 'What were you feeling right before you decided to buy?'", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Classify and rewrite headlines", why: "Free, fast for a small comparison table", required: true, lastVerified: "2026-08" },
          { toolName: "Google Forms", role: "Collect real 'why did you buy' answers from users", why: "Free, no account needed for respondents", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A 3-headline feeling-vs-feature classification with rewrites, plus 3 real customer 'why I bought' answers mapped against them.",
      sampleOutput:
        "Chewy, headline audit (excerpt)\n\n" +
        "headline: \"Free shipping on orders $49+\" | Feature-first\n" +
        "rewrite: \"Never run out of food for your best friend again, free shipping on orders $49+.\"\n\n" +
        "real answer collected: \"I signed up the week after I forgot to reorder and had to drive to a gas station for cat food at 11pm.\" (the feeling: panic/relief, not the free-shipping feature)",
      successCriteria: [
        "Correctly classifies all 3 headlines and rewrites every feature-first one",
        "Collects at least 2 real customer answers and identifies the underlying feeling in at least one",
      ],
      portfolioReady: true,
    },
    {
      id: "dark-pattern-urgency-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Real Scarcity or Manufactured Urgency? A Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 3 synthetic-realistic checkout and landing-page specimens, identify which urgency or social-proof claims are honest and which manufacture a feeling the product/inventory can't actually back up.",
      companyId: "thredup",
      scenario:
        "You're reviewing 3 draft checkout-page snippets before a resale flash-sale campaign ships, checking each one against the lesson's dark-pattern list and the one-week-later honesty test.",
      brief:
        "Read each specimen, decide if the urgency or social-proof claim is real or manufactured, and flag the ones that would fail the lesson's honesty test.",
      mode: "teardown",
      conceptsCovered: [
        "Manufacturing feelings the product cannot deliver on",
        "Fake scarcity and countdown timers",
        "The one-week-later honesty test",
      ],
      teardownItems: [
        {
          itemId: "item-1-resetting-timer",
          specimen:
            "Checkout page banner:\n\n\"Sale ends in 00:14:59!\" (the timer resets to 15:00 every time the page is reloaded or the customer returns the next day)",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect here?",
          answerKey: [
            {
              defect:
                "A countdown timer that resets on reload or on return visits is fabricated urgency, there is no real deadline behind it",
              severity: "critical",
              whyItMatters:
                "The lesson names fake countdown timers directly as a dark pattern; the FTC fined several subscription services tens of millions in 2024 for exactly this kind of manufactured urgency.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: [
            "The timer uses a red color, which is too aggressive",
            "The timer is placed at the top of the page instead of near the buy button",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-fake-viewers",
          specimen:
            "Product page badge:\n\n\"12 people are looking at this item right now\" (the number is a static placeholder hard-coded into the template, not pulled from real session data)",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect here?",
          answerKey: [
            {
              defect:
                "A 'people viewing this' claim that isn't pulled from real, current session data is a fabricated social-proof signal",
              severity: "critical",
              whyItMatters:
                "The UK's Competition and Markets Authority secured binding 2019 commitments from Booking.com, Expedia, and others to stop exactly this practice after finding some 'people viewing' and 'rooms left' messages weren't backed by real-time data.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: [
            "The badge uses the number 12 specifically, which is too small to be believable",
            "The badge appears on every product page instead of only on popular ones",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-real-low-stock",
          specimen:
            "Product page badge:\n\n\"Only 3 left\" (pulled live from the actual warehouse inventory count for that SKU)",
          specimenSource: "synthetic-realistic",
          prompt: "What is the defect here, if any?",
          answerKey: [],
          distractors: [
            "It should also add a countdown timer to increase urgency further",
            "It doesn't mention how many people bought it today, so it's incomplete",
            "It should round up to a bigger number to sound more impressive",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each specimen's verdict and lesson reference", why: "Free, fast for a 3-row scoring table", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A verdict (manufactured / real, or none) for all 3 specimens with the lesson section each violates.",
      sampleOutput:
        "Rent the Runway, checkout review (excerpt)\n\n" +
        "specimen: \"Only 2 sizes left in your area!\" badge shown on every single item regardless of actual local inventory.\n" +
        "VERDICT: manufactured, the badge text is identical across items that have very different real stock levels.\n" +
        "LESSON REF: Where It Backfires / Ethical Limits.",
      successCriteria: [
        "Correctly flags item-1 and item-2 as manufactured with the matching lesson reference",
        "Correctly identifies item-3 as honest rather than over-flagging it",
      ],
      portfolioReady: true,
    },
  ],

  "cognitive-biases": [
    {
      id: "cognitive-bias-checkout-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Real Cue or Dark Pattern? A Checkout Page Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three synthetic product/email/pricing mockups modeled on common ecommerce patterns, separate legitimate bias-based persuasion from illegal dark patterns, using the lesson's honesty tests for anchoring, scarcity, and social proof.",
      companyId: "chewy",
      scenario:
        "You're a junior brand marketer at Chewy, the pet-products ecommerce and subscription company, and legal/compliance has asked you to review three page mockups before they ship, flagging anything that could trigger the FTC's 2024 dark-pattern enforcement.",
      brief:
        "Read each specimen, mark every bias cue as real or fake, and justify each call against the lesson's honesty rules.",
      mode: "teardown",
      conceptsCovered: ["3. Social Proof", "1. Anchoring Bias", "How to Apply This Ethically"],
      teardownItems: [
        {
          itemId: "item-1-product-page",
          specimen:
            'PREMIUM DOG FOOD BUNDLE — PRODUCT PAGE DRAFT\n\nWas $89.99 → Now $54.99 (39% off)\n"Only 2 left in stock!"\n"127 people are viewing this right now"\n★ 4.8 (2,340 reviews) — Verified Purchase\n[Add to Cart]\nOffer ends in: 00:04:12 (timer restarts every time the page is refreshed)',
          specimenSource: "synthetic-realistic",
          prompt: "Legal flagged this page for review before launch. For each bias cue, decide: ship as-is, or fix before launch?",
          answerKey: [
            {
              defect: "Countdown timer resets on every page refresh",
              severity: "critical",
              whyItMatters:
                "The lesson's ethics callout names this exact pattern: a countdown that resets on refresh is fake urgency, illegal under the UK's 2024 Digital Markets, Competition and Consumers Act and actionable under the US FTC's dark-patterns guidance.",
              lessonRef: "How to Apply This Ethically",
              owner: "developer",
            },
            {
              defect: '"127 people are viewing this right now" has no real session data behind it',
              severity: "critical",
              whyItMatters:
                "Fabricated live-activity counters are the same category of false urgency the lesson's ethics section flags; if the number isn't pulled from real concurrent sessions, it's a fake social-proof claim.",
              lessonRef: "3. Social Proof",
              owner: "developer",
            },
          ],
          distractors: [
            '"Was $89.99 → Now $54.99" — a real anchor price, ship as-is if $89.99 was genuinely the prior list price',
            '"Only 2 left in stock!" — legitimate if it matches real inventory',
            "4.8 rating from 2,340 Verified Purchase reviews — real, verifiable social proof",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-cart-abandon-email",
          specimen:
            'CART ABANDONMENT EMAIL DRAFT\n\nSubject: Your cart is about to expire!\n\nBody: "Sarah from Chicago just bought this 2 minutes ago. Only 3 left at this price. This offer expires in 24 hours, after that we can\'t guarantee availability."\n\n[Internal note from email platform vendor, not shown to customer]: Customer names in the \'X from Y just bought this\' line are auto-generated from a name/city list, not tied to real orders. Inventory count and 24-hour expiry are both pulled live from the order management system.',
          specimenSource: "synthetic-realistic",
          prompt: "The internal vendor note tells you which claims are real. Which line needs to be cut before send?",
          answerKey: [
            {
              defect: '"Sarah from Chicago just bought this 2 minutes ago" is auto-generated, not a real order',
              severity: "critical",
              whyItMatters:
                "This is fabricated social proof, a fake specific name and city manufactured to look like a real recent purchase. The lesson is explicit: real review counts and real install numbers only, never invented activity.",
              lessonRef: "3. Social Proof",
              owner: "developer",
            },
          ],
          distractors: [
            '"Only 3 left at this price" — real, pulled live from the order management system per the vendor note',
            '"Expires in 24 hours" — real, pulled live from the order management system per the vendor note',
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-pricing-tiers",
          specimen:
            "PRICING PAGE MOCKUP\n\nSTARTER — $29/mo\nGROWTH — $79/mo  ★ Most Popular (used by 68% of customers*)\nENTERPRISE — $249/mo\n\n*Based on internal signups from the last 30 days, updated weekly.\n\n[Internal PM note, not shown to users]: Enterprise tier has zero paying customers to date. It was added last sprint specifically to make Growth look cheaper by comparison.",
          specimenSource: "synthetic-realistic",
          prompt: "Before this ships, flag anything that violates the lesson's 'use anchoring honestly' rule.",
          answerKey: [
            {
              defect: "Enterprise tier ($249) has zero real customers, it exists solely to anchor Growth's price",
              severity: "critical",
              whyItMatters:
                "The lesson's rule is explicit: show a real, defensible reference price, your previous price, a competitor's price, or the unbundled price, never an invented number dressed as a real tier.",
              lessonRef: "1. Anchoring Bias",
              owner: "either",
            },
          ],
          distractors: [
            '"Most Popular (used by 68% of customers*)" on Growth — real and sourced, a dated footnote discloses the basis',
            "Three-tier structure with Growth positioned in the middle — a standard, honest layout choice, not itself deceptive",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each specimen's cues as real/fake with your justification",
            why: "Free, easy shareable checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-row teardown log marking each bias cue real/fake with a one-line justification citing the lesson's honesty rule it passes or fails.",
      sampleOutput:
        "Warby Parker homepage banner audit (excerpt)\n\n" +
        "Cue: 'Free shipping on orders over $50' — REAL (site-wide policy, verifiable in checkout)\n" +
        "Cue: 'Only 4 pairs left in this style' — FAKE (inventory API shows 40+ units; flagged for removal)\n" +
        "Cue: '12,000+ 5-star reviews' — REAL (matches Yotpo widget count, verified 2026-08)",
      successCriteria: [
        "Correctly labels at least 5 of 6 cues across the three specimens as real or fake",
        "Cites the specific lesson rule (anchoring/scarcity/social-proof honesty) for each fake cue flagged",
      ],
      portfolioReady: true,
    },
    {
      id: "cognitive-bias-own-funnel-audit",
      tier: "core",
      archetype: "audit",
      title: "Audit Your Own Funnel for Real vs. Fake Bias Cues",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Using your own (or a practice) product page, pricing page, and one marketing email, verify whether every anchoring, scarcity, and social-proof cue you're already running is real and defensible, then log a fix list for anything you can't verify.",
      companyId: "warby-parker",
      scenario:
        "You're a growth marketer at Warby Parker, the DTC eyewear company, ahead of a compliance review of the site's pricing and promotional copy.",
      brief:
        "Walk your own live pages (or a page you have edit access to) and verify three bias categories against the source data, not against how convincing the copy sounds.",
      mode: "diagnostic",
      conceptsCovered: ["Anchoring Bias Verification", "Scarcity and FOMO Verification", "Social Proof Verification"],
      steps: [
        {
          stepId: "step-1-anchoring",
          concept: "Anchoring Bias Verification",
          lessonAnchor: "1-anchoring-bias",
          theoryRecap:
            "The lesson's Anchoring Bias section shows Apple projecting $999 before revealing $499 for the original iPad, then repeating the tactic with the 2024 Vision Pro at $3,499. The anchor works, but only stays inside the ethics line when the anchor number was ever a real price.",
          question:
            "Your pricing/product page shows a 'was $X, now $Y' claim, or a highest-tier-first layout. Was $X ever the real price this exact SKU sold at, or the real un-bundled price?",
          toolName: "Google Sheets",
          where: "Pull every 'was/now' or crossed-out price on your live site into one sheet, one row per SKU.",
          procedure: [
            "List every product/pricing page showing a struck-through 'was' price",
            "For each, pull the actual price history from your order system or CMS changelog",
            "Mark REAL if the 'was' price was genuinely charged in the last 90 days, mark UNVERIFIED otherwise",
            "For UNVERIFIED rows, note who owns the fix (marketing copy change vs. engineering price-history feed)",
          ],
          outputSample:
            "SKU        Was Price   Real Price History?   Verdict\nRW-224     $310        Charged Jan-Mar 2026     REAL\nRW-118     $295        No record found          UNVERIFIED\nRW-330     $340        CMS default, never sold  UNVERIFIED",
          healthy: "Every 'was' price traces to a real price history entry within a defensible window.",
          unhealthy:
            "A 'was' price that was never actually charged, invented purely to make the current price look like a discount.",
          interpret:
            "An anchor with no price history isn't persuasion, it's a fabricated number, and it's the exact 'invented inflated was price' pattern the lesson's ethics section calls out.",
          soWhat: [
            {
              symptom: "One or more SKUs show UNVERIFIED",
              action: "Route the SKU to whoever owns pricing copy and either find the real price record or remove the strike-through",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-scarcity",
          concept: "Scarcity and FOMO Verification",
          lessonAnchor: "4-scarcity-and-fomo-fear-of-missing-out",
          theoryRecap:
            "The lesson's Scarcity section is explicit: 'if only 3 seats remain, say so; if supply is unlimited, do not pretend otherwise.' Any countdown timer or stock badge is only ethical if it reflects real, checkable data.",
          question: "For every countdown timer or 'X left' badge on your funnel, does it come from a live data feed, or a static/looping asset?",
          toolName: "Google Sheets",
          where: "Open each live page in an incognito window twice, an hour apart, and log what changes.",
          procedure: [
            "Open each page with a countdown timer or stock badge in a fresh incognito window",
            "Note the exact time remaining or stock count shown",
            "Reload the same page after refreshing the browser (not waiting) and log whether the timer reset",
            "Cross-check any 'X left in stock' badge against the real inventory count if you have access",
          ],
          outputSample:
            'Page              Cue                Reset on refresh?   Matches real inventory?\n/checkout/RW-224   00:14:22 countdown   YES (reset to 15:00)  n/a\n/product/RW-118    "Only 3 left"        n/a                    NO (42 units in stock)',
          healthy: "Timers count down in real time across refreshes; stock badges match the live inventory count.",
          unhealthy: "A timer that jumps back to a fixed starting value on refresh, or a stock badge that never matches inventory.",
          interpret:
            "A resetting timer or a stock badge detached from real inventory is the same fake-urgency pattern the UK's 2024 DMCC Act and the FTC now penalize, not a persuasion technique worth defending.",
          soWhat: [
            {
              symptom: "A timer resets on refresh or a stock count doesn't match inventory",
              action: "Escalate to engineering to wire the cue to the real data feed, or remove it until it can be",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-3-social-proof",
          concept: "Social Proof Verification",
          lessonAnchor: "3-social-proof",
          theoryRecap:
            "The lesson's Social Proof section names the honest version explicitly: real review counts, 'X people bought this today' only if it's a real count, real customer logos.",
          question: "Every review count, 'bought today' counter, or customer logo on your page, can you trace it to a real, named source?",
          toolName: "Google Sheets",
          where: "List every social-proof element on your top three landing pages.",
          procedure: [
            "List every review count, activity counter, and customer logo across your top 3 landing pages",
            "For review counts, confirm the number matches your review platform's dashboard (not a rounded-up marketing number)",
            "For customer logos, confirm each logo'd company is an active or verifiably past customer, not aspirational",
            "Flag anything you can't trace to a real source",
          ],
          outputSample:
            'Element                        Source checked          Verdict\n"2,340 verified reviews"        Yotpo dashboard: 2,338    REAL (rounding, acceptable)\n"Trusted by 500+ brands" logo   CRM active accounts: 214  UNVERIFIED, overstated',
          healthy: "Every number and logo traces to a real, current data source within a reasonable rounding tolerance.",
          unhealthy: "A round, impressive-sounding number nobody can trace to an actual dashboard or account list.",
          interpret:
            "'Trusted by 500+ brands' when the CRM shows 214 active accounts isn't optimistic rounding, it's the same overstatement the lesson warns kills trust once a customer checks.",
          soWhat: [
            {
              symptom: "A social-proof number is more than a small rounding gap from its real source",
              action: "Correct the copy to the real, current number",
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
            role: "Log every cue and its verification status",
            why: "Free, no account friction, works for a solo audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-tab audit log (anchoring, scarcity, social proof) marking every live bias cue REAL or UNVERIFIED, with an owner and fix action for each UNVERIFIED row.",
      sampleOutput:
        "Chewy Autoship page audit (excerpt)\n\n" +
        "ANCHORING\n  \"Was $54.99, Now $42.99\" (Bag XL)      REAL, matched Jan invoice history\n\n" +
        "SCARCITY\n  \"Selling fast\" badge, no countdown       UNVERIFIED, no inventory threshold defined, routed to PM\n\n" +
        "SOCIAL PROOF\n  \"4.7 stars, 18,900 reviews\"              REAL, matches Bazaarvoice dashboard (18,873)",
      successCriteria: [
        "All three bias categories checked across at least one real or practice page",
        "Every UNVERIFIED cue has a named owner and a fix action, not just a flag",
      ],
      portfolioReady: true,
    },
  ],
  "cialdini-6-principles": [
    {
      id: "cialdini-reciprocity-social-proof-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which of the Six Are You Actually Using?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Check your own (or a practice) product page and one email against two of Cialdini's six principles, reciprocity and social proof/authority, verifying each claim is real rather than merely well-written.",
      companyId: "honasa-mamaearth",
      scenario:
        "You're a growth marketer at Honasa Consumer (Mamaearth), the Indian D2C beauty company, prepping a campaign relaunch and want to know which principles you're already using honestly.",
      brief: "Pull your funnel's reciprocity offer and its social-proof/authority claims into one sheet and verify each against a real source.",
      mode: "diagnostic",
      conceptsCovered: ["Reciprocity", "Social Proof and Authority"],
      steps: [
        {
          stepId: "step-1-reciprocity",
          concept: "Reciprocity",
          lessonAnchor: "why-marketers-care-20242025-examples",
          theoryRecap:
            "The lesson's reciprocity example is HubSpot: free templates, calculators, and its State of Marketing report before ever asking for a demo. The gift has to be genuinely useful, not a thin lead-gen gate.",
          question: "What do you give away before you ask for an email or a sale, and would a stranger call it genuinely useful on its own?",
          toolName: "Google Sheets",
          where: "List every free-value offer on your site (lead magnet, free tool, free sample, free trial).",
          procedure: [
            "List every 'free' offer across your homepage, landing pages, and popups",
            "For each, note what the visitor gets immediately, before providing any contact info",
            "Rate each 1-5 for whether it stands alone as useful, or whether it's just a teaser for the paid product",
            "Flag any offer scoring 2 or below",
          ],
          outputSample:
            'Offer                          Gets immediately?      Usefulness (1-5)\nFree skin-type quiz + PDF        Yes, before email        4\n"Free guide" (email-gated)       No, gated                2',
          healthy: "Most free offers deliver real value immediately, or clearly earn the small ask they make in return.",
          unhealthy: "A 'free' offer that's actually a teaser, gated behind an email with nothing useful until after signup.",
          interpret:
            "Reciprocity only works if the gift feels like a gift. A gated teaser reads as a trade, not a gift, and doesn't trigger the same obligation.",
          soWhat: [
            {
              symptom: "An offer scores 2 or below",
              action: "Either ungate the real value or add something genuinely useful before the gate",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-social-proof-authority",
          concept: "Social Proof and Authority",
          lessonAnchor: "why-marketers-care-20242025-examples",
          theoryRecap:
            "The lesson cites a Northwestern Spiegel Research Center study showing reviews can lift purchase likelihood up to 270% on higher-priced products, and notes that real 2024 authority claims cite named experts and peer-reviewed studies, not stock-photo doctors.",
          question: "For every review count and every 'expert-backed' or 'dermatologist-tested' claim on your page, can you name the source?",
          toolName: "Google Sheets",
          where: "List every social-proof and authority claim on your top product page.",
          procedure: [
            "List every review count, star rating, and expert/authority claim on your top page",
            "For review counts, match against your reviews platform's live dashboard number",
            "For authority claims ('dermatologist-tested', 'clinically proven'), find the named study, lab, or expert behind it",
            "Flag anything you can't name a source for",
          ],
          outputSample:
            'Claim                             Source found?\n"4.6 stars, 12,400 reviews"        Yes, matches platform dashboard\n"Dermatologist-tested"             No named dermatologist or lab on file',
          healthy: "Every number matches a live dashboard; every authority claim names a real person, lab, or study.",
          unhealthy: "An authority claim with no named expert or study behind it, decorative rather than real.",
          interpret:
            "'Dermatologist-tested' with no name attached is the 2005-style stock-photo-doctor move the lesson warns against, it decays trust the moment a customer asks who.",
          soWhat: [
            {
              symptom: "An authority claim has no named source",
              action: "Either name the real expert/study or remove the claim",
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
            role: "Log every offer and claim with its verification status",
            why: "Free, fast for a solo audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A two-section audit (reciprocity offers, social-proof/authority claims) with a usefulness score or named source for each, and a fix list for anything under threshold.",
      sampleOutput:
        "ThredUp funnel audit (excerpt)\n\n" +
        "RECIPROCITY\n  Free \"Clean Out Kit\" bag, no email required    5/5, real value before any ask\n\n" +
        "SOCIAL PROOF / AUTHORITY\n  \"4.5 stars, 890K reviews\"                        matches Trustpilot dashboard (887,412)\n  \"As seen in Vogue, Forbes\"                       real, links to actual coverage on file",
      successCriteria: [
        "Every reciprocity offer scored 1-5 with a stated reason",
        "Every authority claim has either a named source or is flagged for removal",
      ],
      portfolioReady: true,
    },
    {
      id: "cialdini-signup-flow-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Six Principles or Six Dark Patterns? A Signup Flow Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two synthetic account-funding flow mockups, decide which Cialdini-style cues are honest applications of the six principles and which cross into the FTC's dark-pattern definition.",
      companyId: "robinhood",
      scenario:
        "You're on the trust & safety review team at Robinhood, the commission-free trading app, checking a new account-funding flow mockup before it ships to production.",
      brief: "Read each mockup screen and mark every persuasion cue as a legitimate principle or a dark pattern, citing the lesson's ethics test.",
      mode: "teardown",
      conceptsCovered: ["How to Apply It Ethically", "Where It Backfires / Ethical Limits"],
      teardownItems: [
        {
          itemId: "item-1-funding-screen",
          specimen:
            'ACCOUNT FUNDING SCREEN DRAFT\n\nHeadline: "Get a free stock worth up to $200 when you fund your account today"\nSubtext: "Recommended by financial experts."\nBanner: "Bonus offer expires in 00:09:47 (timer restarts if you leave and come back)"\nButton 1 (small, greyed): "Maybe later"\nButton 2 (large, highlighted): "Fund now and claim bonus"',
          specimenSource: "synthetic-realistic",
          prompt: "Which cues on this screen are honest applications of reciprocity, authority, or scarcity, and which are dark patterns?",
          answerKey: [
            {
              defect: '"Recommended by financial experts" names no expert, firm, or credential',
              severity: "critical",
              whyItMatters:
                "The lesson's authority principle requires naming your experts and linking studies or credentials; an unnamed, uncheckable 'experts' claim is the stock-photo-doctor move the lesson calls a 2005-era tactic.",
              lessonRef: "How to Apply It Ethically",
              owner: "developer",
            },
            {
              defect: "Bonus countdown timer restarts if the user leaves and returns",
              severity: "critical",
              whyItMatters:
                "The lesson's ethical-limits section names fake countdown timers that reset as the exact dark pattern the FTC's 2023 'Bringing Dark Patterns to Light' report and the DMCC Act both penalize.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: [
            '"Get a free stock worth up to $200 when you fund your account" — a real reciprocity offer if the stock is genuinely delivered',
            "Small, greyed 'Maybe later' button next to a large highlighted CTA — a visual hierarchy choice, not itself one of the six principles",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-verification-badge",
          specimen:
            'ACCOUNT VERIFICATION SCREEN DRAFT\n\nBadge: "Verified by a Licensed Financial Advisor" (no name, no license number shown)\nSeparate line: "Portfolio review by Priya Nair, CFP, License #NY-48213 (verify at cfp.net)"\nBoth badges appear next to the same \'Continue\' button.',
          specimenSource: "synthetic-realistic",
          prompt: "Both lines claim authority. Only one meets the lesson's bar. Which, and why?",
          answerKey: [
            {
              defect: '"Verified by a Licensed Financial Advisor" has no name or license number attached',
              severity: "critical",
              whyItMatters:
                "An authority claim with no way to check it isn't the honest version the lesson describes, naming the expert and the credential is what makes it checkable rather than decorative.",
              lessonRef: "How to Apply It Ethically",
              owner: "developer",
            },
          ],
          distractors: [
            '"Portfolio review by Priya Nair, CFP, License #NY-48213 (verify at cfp.net)" — a named, checkable authority claim, exactly what the lesson recommends',
            "Both badges placed next to the same button — a layout choice, not itself a defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each cue as honest/dark-pattern with a one-line citation",
            why: "Free, simple shareable checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A two-row teardown log marking each cue honest/dark-pattern with the specific lesson rule it passes or fails.",
      sampleOutput:
        "Duolingo onboarding screen audit (excerpt)\n\n" +
        "Cue: \"Pick your daily goal before you sign up\" — HONEST, real commitment-and-consistency, user sets it themselves\n" +
        "Cue: \"10,000 people started their streak today\" — FLAGGED, no source cited, needs a real counter or removal",
      successCriteria: [
        "Correctly identifies all 3 defects across the two specimens",
        "Cites the specific lesson section for each defect flagged",
      ],
      portfolioReady: true,
    },
  ],

  "anchoring-framing": [
    {
      id: "anchor-order-pricing-tier-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Anchor Order Audit: Does Your Pricing Page Anchor Itself?",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit a real, public subscription pricing page's tier order and structure to determine whether it is using anchoring correctly, and produce a reordering recommendation if it isn't.",
      companyId: "rent-the-runway",
      scenario:
        "You're a marketing analyst at Rent the Runway reviewing the public subscription page (Unlimited, Update, one-time rental) ahead of a page redesign.",
      brief:
        "Record the tier order and prices shown on the live page, then apply the lesson's anchor-order framework to flag whether the page is anchored correctly or needs reordering.",
      mode: "diagnostic",
      conceptsCovered: ["Anchor order determines whether a price feels generous or greedy"],
      steps: [
        {
          stepId: "step-1-anchor-order",
          concept: "Anchor order determines whether a price feels generous or greedy",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson explains that the brain doesn't independently evaluate a price, it evaluates the price relative to whatever anchor it saw first. $999 next to $499 reads as a deal; $499 alone reads as an expense.",
          question:
            "Which of the three subscription tiers on the page functions as the anchor, and does its position make the plan you actually want to sell look proportionate, or does the page need reordering?",
          toolName: "Google Sheets",
          where: "Open the live public Rent the Runway subscription page in a browser and log what you see into a sheet.",
          procedure: [
            "Visit the public subscription page and record each tier's name, price, and left-to-right or top-to-bottom position",
            "Note which tier is visually first (largest, leftmost, or top of the page)",
            "Apply the lesson's rule: does the highest price appear before the target tier, or after it",
            "Flag whether the most-common plan sits in the middle column, per the lesson's 'How to Apply It Ethically' guidance",
          ],
          outputSample:
            "Tier audit log\n\nPosition  Tier            Price      Anchor role\n1 (top)   Unlimited       $219/mo    Highest price, anchors everything below\n2         Update          $155/mo    Target plan, sits in the middle\n3         Reserve (1-off) $30-250    Priced per item, no fixed anchor role\n\nVerdict: Anchored correctly. Unlimited is shown first and Update reads as the sensible middle choice.",
          healthy:
            "The highest tier is shown first, or the target tier sits in the middle column, so the anchor does the selling before the customer reads a single feature.",
          unhealthy:
            "The cheapest tier is listed first with nothing more expensive nearby, so every price after it looks expensive by comparison.",
          interpret: "Order matters as much as the number itself; the same three prices can feel generous or greedy depending on sequence.",
          soWhat: [
            {
              symptom: "Middle-tier signups are lower than expected",
              action: "Reorder so the highest tier displays first, or add a clearly labeled premium anchor tier",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log tier order and prices for the audit", why: "Free, no account friction, sortable", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A one-page anchor-order audit: current tier sequence, verdict (anchored correctly / needs reorder), and the reordered sequence recommendation.",
      sampleOutput:
        "Chewy Autoship tier audit (excerpt)\n\n" +
        "Position  Tier              Price        Anchor role\n" +
        "1 (top)   One-time order    List price   No anchor, priced alone\n" +
        "2         Autoship (5% off) List - 5%    Reads as a small discount only\n\n" +
        "Verdict: Needs reorder. No premium anchor tier exists above Autoship, so the 5% discount feels marginal instead of generous. Recommendation: surface a 'Autoship + rewards' premium tier above the standard Autoship tier to anchor it.",
      successCriteria: [
        "Correctly logs all three tiers with position and price",
        "Reaches a verdict (anchored correctly / needs reorder) grounded in the lesson's anchor-order rule",
        "Recommendation is specific enough to hand to a designer",
      ],
      portfolioReady: true,
    },
    {
      id: "pricing-page-anchor-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Fake Anchor Teardown: Spotting Manufactured 'Was' Prices",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three synthetic pricing-page specimens, identify which anchors are legitimate and which are fabricated or misleading per the lesson's ethical-limits framework.",
      companyId: "dollar-shave-club",
      scenario:
        "You're a brand marketing associate at Dollar Shave Club reviewing three draft promo landing pages before legal sign-off.",
      brief: "Apply the lesson's 'Where It Backfires / Ethical Limits' framework to find the real defects in each specimen, and don't get fooled by the distractors.",
      mode: "teardown",
      conceptsCovered: ["Distinguishing real anchors from fabricated 'was' prices", "Framing that hides material information"],
      teardownItems: [
        {
          itemId: "specimen-1-was-price",
          specimen:
            "Promo page headline: 'Razor Subscription Starter Kit -- Was $45, Now $9 First Box!' Small print at the bottom of the page: 'The Starter Kit has always launched new subscribers at $9; $45 reflects our optional a la carte razor price if purchased separately, never a Starter Kit price we have charged.'",
          specimenSource: "synthetic-realistic",
          prompt: "Is the '$45, Now $9' anchor on this page legitimate or fabricated? What's the defect, if any?",
          answerKey: [
            {
              defect: "The '$45 was' price for the Starter Kit was never actually charged, it's a repurposed a la carte price used to manufacture a discount that never existed",
              severity: "critical",
              whyItMatters:
                "Fabricated 'original prices' are illegal in the EU under the Omnibus Directive and have triggered US class-action settlements against retailers like Kohl's and JCPenney, per the lesson's ethical-limits section",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "either",
            },
          ],
          distractors: [
            "The $9 price itself is too low to be profitable, so the offer should be flagged on margin grounds",
            "The phrase 'Starter Kit' is confusing branding that should be renamed",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-recyclable-frame",
          specimen:
            "Product page hero claim: '95% Recyclable Packaging!' The product ships in a box that is 90% single-use plastic clamshell and 5% recyclable cardboard insert, which is disclosed only in a materials PDF linked at the bottom of the page.",
          specimenSource: "synthetic-realistic",
          prompt: "Is the '95% Recyclable' framing on this page a legitimate frame or a defect? What's the defect, if any?",
          answerKey: [
            {
              defect:
                "The positive frame ('95% Recyclable') conceals the dominant negative attribute (90% single-use plastic), the same pattern as the lesson's '95% fat free' example on a 90%-sugar product",
              severity: "moderate",
              whyItMatters: "Framing crosses the line when it hides material information; if the frame collapses the moment a customer reads the fine print, it's a refund engine, not a marketing strategy",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "either",
            },
          ],
          distractors: ["The word 'Packaging' should be replaced with 'Box' for clarity"],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-legit-anchor",
          specimen:
            "Comparison table: 'Executive Kit -- $45/mo (6-blade cartridges, travel case, shave butter)' shown above 'Starter Kit -- $9/mo, our most popular plan'. Both plans are real, currently sold SKUs, but neither is labeled as 'most popular' with a badge, only in body text.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this anchor legitimate or fabricated? Does it still have a defect worth flagging?",
          answerKey: [
            {
              defect:
                "The anchor itself is legitimate (both plans are genuinely sold), but the Executive Kit's position above Starter Kit isn't visually reinforced with a badge, so a skimming reader may miss the intended anchor effect entirely",
              severity: "cosmetic",
              whyItMatters: "A real anchor only works if the customer actually registers it before evaluating the target price; an anchor buried in body text does less work than one that's visually distinct",
              lessonRef: "How to Apply It Ethically",
              owner: "you",
            },
          ],
          distractors: ["The $9 to $45 price gap is too large to be believable"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log each specimen's verdict, defect, severity, and lesson citation", why: "Free, structures the teardown into a reviewable scorecard", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A completed teardown scorecard for all three specimens: verdict, defect, severity, and the specific lesson rule each violates or upholds.",
      sampleOutput:
        "HelloFresh promo page teardown (excerpt)\n\n" +
        "Specimen: 'Save $150 on your first box!' banner, small print shows the $150 figure is calculated against a hypothetical 6-box order nobody has actually purchased at full price.\n" +
        "Verdict: Fabricated anchor. The $150 'savings' figure has no real transaction history behind it.\n" +
        "Severity: Critical. Same category as a fake 'was' price, exposes the brand to deceptive-pricing enforcement.",
      successCriteria: [
        "Correctly separates the legitimate anchor (specimen 3) from the two fabricated ones",
        "Names the specific defect and severity for each specimen, not just 'good' or 'bad'",
        "Avoids being misled by at least 2 of the 3 distractors",
      ],
      portfolioReady: true,
    },
  ],
  "loss-aversion": [
    {
      id: "duolingo-streak-loss-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Streak Freeze Audit: Reading Duolingo's Loss Aversion Playbook",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit Duolingo's real, public streak-loss messaging (in-app notifications, Streak Freeze upsell) and map each element to the lesson's reference-point mechanism.",
      companyId: "duolingo",
      scenario: "You're a growth marketer at Duolingo reviewing streak-related messaging before a notification copy refresh.",
      brief: "Use the lesson's reference-point framework to classify each streak message as gain-framed or loss-framed, and check whether the loss it names is real or manufactured.",
      mode: "diagnostic",
      conceptsCovered: ["Reference point shift making inaction feel like a loss"],
      steps: [
        {
          stepId: "step-1-reference-point-classification",
          concept: "Reference point shift making inaction feel like a loss",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson explains that the brain treats your current state, what you own or have already built, as a reference point. Anything that pulls you below that point registers as a loss, and loss-framed copy taps that reference point directly.",
          question:
            "Duolingo sends 'Your 12 day streak is about to end!' rather than 'Practice today to build your streak.' Using the lesson's reference-point framework, why is the first message the stronger lever, and is the loss it names real or manufactured?",
          toolName: "Google Sheets",
          where: "Use the free Duolingo app (or publicly documented screenshots of its notifications) and log observed messages into a sheet.",
          procedure: [
            "Open the free Duolingo app or find publicly documented screenshots of its streak notifications",
            "Log 3-5 real streak-related messages you can find (in-app banners, push notifications, Streak Freeze upsell)",
            "Classify each as gain-framed ('build your streak') or loss-framed ('your streak is about to end')",
            "For each loss-framed message, verify the loss is real (the user genuinely has an active streak) rather than sent to someone who never had one",
          ],
          outputSample:
            "Streak message log\n\n" +
            "Message                                          Frame   Reference point named   Real or manufactured?\n" +
            "'Your 12 day streak is about to end!'            Loss    12-day streak            Real, tied to actual usage\n" +
            "'Use a Streak Freeze to protect your streak'      Loss    Existing streak          Real, insurance against a real loss\n" +
            "'Practice today to keep learning!'                Gain    None                     N/A, no reference point named",
          healthy: "Every loss-framed message names a streak or feature the user has genuinely already earned through real usage.",
          unhealthy: "Wording implies a loss to a user who never had the feature at all, for example warning a free-tier user about losing a paid-only perk.",
          interpret: "Loss framing is only as strong, and as honest, as the reference point behind it; a real streak makes the frame land, a fabricated one breaks trust.",
          soWhat: [
            {
              symptom: "Notification opt-outs are rising",
              action: "Audit whether loss-framed messages are being sent to segments who never actually had the referenced feature or streak",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log and classify each streak message", why: "Free, simple table structure for a short audit", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A classified log of 3-5 real streak or trial messages with gain/loss frame and a real-vs-manufactured verdict for each.",
      sampleOutput:
        "Swiggy delivery-streak notification log (excerpt)\n\n" +
        "Message                                         Frame   Reference point named   Real or manufactured?\n" +
        "'Your 5-order streak resets at midnight!'        Loss    5-order streak           Real, tied to actual order history\n" +
        "'Order now and unlock free delivery!'            Gain    None                     N/A",
      successCriteria: [
        "Logs at least 3 real streak or trial messages",
        "Correctly classifies each as gain or loss framed",
        "Correctly flags whether the named loss is real or manufactured",
      ],
      portfolioReady: true,
    },
    {
      id: "checkout-scarcity-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Scarcity Checkout Teardown: Real Cue or Dark Pattern?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two synthetic checkout-page specimens with scarcity and loss messaging, identify which cues are real constraints versus manufactured dark patterns per the lesson's ethical-limits checklist.",
      companyId: "thredup",
      scenario: "You're a CRO associate at ThredUp reviewing two checkout page variants queued for an A/B test before launch.",
      brief: "Apply the lesson's 'Where loss aversion backfires' checklist to flag manufactured urgency before either variant ships.",
      mode: "teardown",
      conceptsCovered: ["Real constraints vs manufactured urgency in scarcity messaging"],
      teardownItems: [
        {
          itemId: "specimen-1-fake-urgency",
          specimen:
            "Checkout page copy: '24-Hour Sale!' with a countdown timer that visibly resets to 24:00:00 every time the page is reloaded. Below every product thumbnail: 'Only 2 left!', shown identically on all items regardless of actual inventory count.",
          specimenSource: "synthetic-realistic",
          prompt: "Which scarcity cues here are dark patterns, and which lesson rule do they violate?",
          answerKey: [
            {
              defect: "The countdown timer resets on reload instead of tracking a real deadline",
              severity: "critical",
              whyItMatters: "The FTC's 2023-2025 crackdown on dark-pattern subscription and urgency flows targets exactly this tactic; once a shopper notices the reset, every future urgency claim on the site is discounted",
              lessonRef: "How to Apply It Ethically / Where loss aversion backfires",
              owner: "either",
            },
            {
              defect: "'Only 2 left!' is shown on every item regardless of real inventory",
              severity: "critical",
              whyItMatters: "Manufactured scarcity breaks trust permanently once discovered, per the lesson's core warning about fake constraints",
              lessonRef: "Where loss aversion backfires",
              owner: "developer",
            },
          ],
          distractors: ["The headline '24-Hour Sale!' is too generic a phrase and should be rewritten for tone"],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-real-constraint",
          specimen:
            "Checkout page copy: 'This item has 3 left in stock' (pulled live from inventory) and 'Your cart is reserved for 10 minutes', which matches the real reservation hold in the backend. No countdown visual is used, just plain text.",
          specimenSource: "synthetic-realistic",
          prompt: "Are these scarcity cues legitimate or manufactured? Is there still a defect worth flagging?",
          answerKey: [
            {
              defect: "Both cues track real backend state, but the reservation message doesn't say what happens when it expires (item returns to stock vs. permanently lost), leaving the reference point ambiguous",
              severity: "cosmetic",
              whyItMatters: "An unclear reference point weakens the loss frame; a shopper who doesn't know exactly what they'd lose feels less urgency than one who does",
              lessonRef: "How It Actually Works",
              owner: "you",
            },
          ],
          distractors: ["'3 left in stock' is too low a number to be believable to shoppers"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Score each specimen's cues as real or manufactured", why: "Free, structures the teardown into a reviewable scorecard", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A completed teardown scorecard for both checkout specimens, flagging manufactured versus real scarcity cues with severity and lesson citation.",
      sampleOutput:
        "Warby Parker checkout teardown (excerpt)\n\n" +
        "Specimen: 'Selling fast!' badge shown on every frame in the catalog, including frames with 200+ units in stock.\n" +
        "Verdict: Manufactured. The badge isn't tied to real inventory data.\n" +
        "Severity: Critical. Same failure mode as a fake countdown timer, breaks trust once a repeat shopper notices the badge never changes.",
      successCriteria: [
        "Correctly separates the manufactured specimen (1) from the legitimate one (2)",
        "Names both defects in specimen 1 with correct severity",
        "Avoids being misled by the distractors in both items",
      ],
      portfolioReady: true,
    },
  ],

  "scarcity-urgency": [
    {
      id: "scarcity-claim-consistency-audit",
      tier: "mini",
      archetype: "audit",
      title: "Real or Fake? Auditing a Live Scarcity Claim",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Pick one live product page showing a stock-count or countdown scarcity claim, test whether the claim stays consistent across a refresh and a return visit, and classify it as honest, ambiguous, or fake using the lesson's four-question ethics checklist.",
      companyId: "chewy",
      scenario:
        "You're a growth marketer at Chewy, the pet-products subscription retailer, and your VP wants to know whether the 'Only X left' badges other retailers use actually hold up, before your team copies the tactic onto Autoship product pages.",
      brief:
        "Choose any live ecommerce product page (not Chewy's) that shows a stock count or countdown. Log it, refresh it, come back later, and write a one-page verdict.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing real scarcity from fake scarcity",
        "Testing deadline consistency across sessions",
      ],
      steps: [
        {
          stepId: "step-1-refresh-test",
          concept: "Distinguishing real scarcity from fake scarcity",
          lessonAnchor: "tell-the-truth-about-the-constraint",
          theoryRecap:
            "The lesson's ethics section argues honest scarcity converts nearly as well as fake scarcity, and the tell is whether the displayed number reflects real inventory. A count that never moves is a lie, not a marketing tactic.",
          question:
            "You find a product page reading 'Only 3 left in stock!'. Does that number reflect anything real, or is it hardcoded copy?",
          toolName: "Google Sheets",
          where: "A blank Google Sheet to log your observations across time.",
          procedure: [
            "Find a live product page (any retailer, not Chewy) showing a stock-count claim like 'Only X left'",
            "Log the exact number, the URL, and the timestamp in your sheet",
            "Refresh the page 3 times over 10 minutes, log the number each time",
            "Open the same page in a private/incognito window and log the number again",
            "Note whether the number changed, stayed identical, or behaved inconsistently (e.g. went up)",
          ],
          outputSample:
            "URL: [product page]\nRefresh 1 (10:02am): Only 3 left\nRefresh 2 (10:07am): Only 3 left\nRefresh 3 (10:14am): Only 3 left\nIncognito (10:15am): Only 3 left\nVerdict so far: number never moved across 15 min and 2 sessions -> suspicious, needs the 24h check in Step 2",
          healthy:
            "The count fluctuates in a plausible direction (e.g. goes down as you refresh, or differs by session) and is close to inventory levels a real warehouse could hold.",
          unhealthy:
            "The exact same number appears in every refresh, every incognito session, and doesn't move even after real time has passed, an unmoving 'urgent' number is the signature of hardcoded fake scarcity.",
          interpret:
            "A number that never changes isn't communicating real inventory, it's decorative copy dressed up as data. That is the exact 'Only 2 left for three weeks' pattern the lesson's warning callout flags as EU-finable.",
          soWhat: [
            {
              symptom: "The stock count is identical across every refresh and session",
              action: "Flag it as likely-fake in your audit log; do not copy this pattern onto your own product pages",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-deadline-return-check",
          concept: "Testing deadline consistency across sessions",
          lessonAnchor: "anchor-urgency-to-a-real-event",
          theoryRecap:
            "The lesson distinguishes a deadline anchored to a real event ('price goes up Friday because rates change') from a countdown timer that silently resets every midnight, a textbook dark pattern.",
          question:
            "If the same page also shows a countdown timer, does the deadline it displays hold steady when you come back the next day, or has it quietly reset?",
          toolName: "Google Sheets",
          where: "The same log sheet from Step 1, a new row for the return visit.",
          procedure: [
            "If the page has a countdown timer, note the exact time remaining it displays today",
            "Bookmark the page and return to it 24 hours later",
            "Compare: did the timer count down by roughly 24 hours, or did it reset back to its original length?",
            "Write a 3-sentence verdict: honest, ambiguous, or fake, citing your evidence",
          ],
          outputSample:
            "Day 1, 10:15am: timer shows 'Ends in 23:41:12'\nDay 2, 10:20am: timer shows 'Ends in 23:38:47'\nVerdict: RESET. A real 24h deadline should show roughly 0 hours remaining by day 2, not another full day. This is fake urgency.",
          healthy:
            "The countdown reflects real elapsed time and eventually expires or changes the offer, matching a real, checkable business event.",
          unhealthy:
            "The countdown resets to roughly the same length every time you check on a new day, meaning the 'deadline' never actually arrives.",
          interpret:
            "A resetting timer is the single clearest fake-scarcity signal because it requires zero technical audit tools to catch, just patience and a bookmark.",
          soWhat: [
            {
              symptom: "A 'deadline' timer shows nearly the same time remaining a day later",
              action: "Mark the claim as fake in your written verdict and exclude that tactic from any recommendation to your team",
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
            role: "Log the claim, timestamps, and your refresh/return observations",
            why: "Free, no signup friction, sortable for a before/after comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page written verdict (honest / ambiguous / fake) for one live product page's scarcity claim, backed by a timestamped observation log.",
      sampleOutput:
        "Audit: Swiggy Instamart, 'Only 2 left' badge on a snack SKU\n\n" +
        "Observation log:\n" +
        "  10:02am: Only 2 left\n" +
        "  10:07am: Only 2 left\n" +
        "  10:14am: Only 2 left\n" +
        "  Incognito, 10:15am: Only 2 left\n" +
        "  Next day, 10:10am: Only 2 left (unchanged after 24h, no purchases blocked this)\n\n" +
        "Verdict: FAKE. The count did not move across two sessions and 24 hours despite the SKU remaining purchasable the whole time. This matches the lesson's 'Only 2 left for three weeks' warning example exactly.",
      successCriteria: [
        "Logs at least 4 timestamped observations of the same claim",
        "Tests both a refresh and a 24-hour return visit",
        "Reaches a verdict (honest/ambiguous/fake) with evidence cited, not a guess",
      ],
      portfolioReady: true,
    },
    {
      id: "flash-sale-scarcity-rollout-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The Countdown Timer Decision: Launching a Flash Sale Without Getting Fined",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Navigate 3 real-world decision points in launching a discount flash sale, choosing between honest and manufactured urgency at each stage, and see how each choice compounds into either a defensible campaign or a legal/trust liability, without spending a rupee or a dollar.",
      companyId: "hellofresh",
      scenario:
        "You're the growth marketing lead at HelloFresh, running a flash-sale discount for new subscribers with an $18,000 campaign budget. Legal, design, and your own conversion targets are all pulling in different directions over the next 3 days.",
      brief:
        "Make 3 sequential calls: the launch copy, the stock-counter widget, and (if you chose poorly) how to respond when legal flags the campaign. This can't be practiced live for free, a real fake-urgency rollout risks real fines and real brand damage, so you run it as a scored simulation instead.",
      mode: "simulation",
      conceptsCovered: [
        "Anchoring urgency to a real event",
        "Category scarcity vs fake-count scarcity",
        "Testing the full funnel, not just conversion",
      ],
      stages: [
        {
          stageId: "stage-1-launch-copy",
          label: "Day 0: Writing the Launch Copy",
          elapsed: "0 hours",
          concept: "Anchoring urgency to a real event",
          lessonAnchor: "anchor-urgency-to-a-real-event",
          situation:
            "Your team has two subject-line drafts on the table for the new-subscriber discount email, and needs a decision by end of day to hit the print/email schedule.",
          dashboard:
            "Draft A: 'Price goes up Friday, our new-customer rate changes then.'\nDraft B: 'Sale ends in 23:59:59', a JS countdown that resets to 23:59:59 every time the page loads.\nDraft C: 'Ends this week', vague but not fabricated.",
          spendToDate: "$0",
          budgetRemaining: "$18,000 campaign budget, untouched",
          decision: {
            prompt: "Which launch copy do you ship?",
            options: [
              {
                id: "real-deadline",
                label: "Draft A: anchor to the actual rate-change date (Friday)",
                verdict: "optimal",
                outcome:
                  "You ship the honest deadline. Open rates are solid and, because the claim is true, nothing needs walking back later.",
                why: "This is a real, checkable business event (the rate genuinely changes Friday), exactly the pattern the lesson calls defensible.",
                lessonRef: "Anchor urgency to a real event",
                nextStageId: "stage-2-stock-counter",
              },
              {
                id: "vague-deadline",
                label: "Draft C: use the vaguer 'ends this week' framing",
                verdict: "acceptable",
                outcome:
                  "It's not a lie, but it's soft enough that some customers assume it's marketing filler and ignore the urgency entirely, click-through comes in below Draft A.",
                why: "Vague-but-true urgency is safe legally but weaker persuasively than a specific, real deadline.",
                lessonRef: "Anchor urgency to a real event",
                nextStageId: "stage-2-stock-counter",
              },
              {
                id: "fake-reset-timer",
                label: "Draft B: ship the countdown that resets on every page load",
                verdict: "costly",
                outcome:
                  "CTR jumps in the first 48 hours. On day 3, a customer screenshots the timer resetting and posts it, and legal opens a review.",
                why: "A countdown that never actually expires is exactly the fabricated-urgency pattern EU and FTC enforcement now fines for.",
                lessonRef: "Where It Backfires",
                nextStageId: "stage-2b-legal-flag",
              },
            ],
          },
        },
        {
          stageId: "stage-2-stock-counter",
          label: "Day 2: The Stock Counter Question",
          elapsed: "48 hours",
          concept: "Category scarcity vs fake-count scarcity",
          lessonAnchor: "use-category-scarcity-not-fake-count-scarcity",
          situation:
            "Conversion is trending fine off the honest launch copy. Design now wants to add a stock-counter widget to the checkout page to squeeze out more lift before the sale ends.",
          dashboard:
            "Current conversion: 3.1% (baseline was 2.4%)\nDesign's 3 widget options are on the table for a same-day ship.",
          spendToDate: "$4,200 of $18,000 (email + landing page build)",
          budgetRemaining: "$13,800",
          decision: {
            prompt: "Which stock-counter widget do you approve?",
            options: [
              {
                id: "real-inventory-counter",
                label: "Wire the widget to real meal-kit box inventory, updates live",
                verdict: "optimal",
                outcome:
                  "Conversion lifts another 1.1 points to 4.2%, and because the number is real, it survives a support-ticket audit with zero complaints.",
                why: "Category scarcity tied to actual inventory is verifiable and, per the lesson's data, converts nearly as well as a fake count without the legal exposure.",
                lessonRef: "Use category scarcity, not fake-count scarcity",
                nextStageId: "end",
              },
              {
                id: "generic-selling-fast-badge",
                label: "Use a generic 'Selling fast!' badge with no real number",
                verdict: "acceptable",
                outcome:
                  "A smaller lift (0.4 points) since there's no specific number to anchor on, but nothing to fact-check or misrepresent either.",
                why: "Vague-but-honest signals are safe but leave real conversion lift on the table compared to a verifiable number.",
                lessonRef: "Use category scarcity, not fake-count scarcity",
                nextStageId: "end",
              },
              {
                id: "hardcoded-fake-count",
                label: "Ship a hardcoded 'Only 3 boxes left' that never changes",
                verdict: "costly",
                outcome:
                  "Conversion spikes hardest of all three options in week one, then a customer newsletter calls it out publicly, and refund requests climb as buyers feel misled.",
                why: "Exactly the 'permanent limited time' pattern the lesson's warning callout says a single screenshot can undo months of trust for.",
                lessonRef: "Where It Backfires",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-2b-legal-flag",
          label: "Day 3: Legal Flags the Campaign",
          elapsed: "72 hours",
          concept: "Testing the full funnel, not just conversion",
          lessonAnchor: "test-the-full-funnel-not-just-conversion",
          situation:
            "Legal has seen the customer screenshot of the resetting countdown and wants a same-day decision on whether the campaign keeps running.",
          dashboard:
            "Conversion is up 18% vs. baseline since the timer shipped.\nRefund requests are up 25% over the same window.\nSocial mentions of the screenshot: 340 and climbing.",
          spendToDate: "$9,600 of $18,000",
          budgetRemaining: "$8,400",
          decision: {
            prompt: "How do you respond?",
            options: [
              {
                id: "pause-and-fix",
                label: "Pause the campaign, swap in a real deadline, publish a short correction",
                verdict: "optimal",
                outcome:
                  "You lose 2 days of the sale window, but refund requests drop back to baseline within a week and no regulator inquiry follows.",
                why: "Measuring refund rate alongside conversion is exactly the full-funnel test the lesson calls for before declaring a tactic a win.",
                lessonRef: "Test the full funnel, not just conversion",
                nextStageId: "end",
              },
              {
                id: "soften-copy-keep-running",
                label: "Soften the countdown copy but keep the underlying reset logic running",
                verdict: "acceptable",
                outcome:
                  "The public complaint quiets down for now, but the underlying fake mechanism is still live and the same risk resurfaces next sale.",
                why: "A cosmetic fix without addressing the reset logic delays the problem rather than resolving it.",
                lessonRef: "Where It Backfires",
                nextStageId: "end",
              },
              {
                id: "keep-running-defend-ctr",
                label: "Keep it running as-is, citing the 18% conversion lift to leadership",
                verdict: "costly",
                outcome:
                  "A consumer-protection complaint gets filed within the month, echoing the same 'made-up scarcity claims' language regulators used against Booking.com's EUR 413 million fine.",
                why: "Optimizing for conversion alone while refund rate and public complaints both climb is the exact failure mode the lesson's funnel-testing section warns against.",
                lessonRef: "Where It Backfires",
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
            role: "Track the dashboard numbers (conversion, refunds, spend) at each stage as you decide",
            why: "Free, sufficient for logging 3 stages of simulated metrics",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written decision log across all 3 stages: your choice, the outcome, and a one-sentence justification tied to the lesson's ethics checklist for each.",
      sampleOutput:
        "Swiggy flash-sale simulation, decision log\n\n" +
        "Stage 1 (launch copy): Chose real-deadline anchor. Justification: rate change is a genuine event, verifiable if a customer asks.\n" +
        "Stage 2 (stock counter): Chose live-inventory counter. Justification: matches Stage 1's honesty and still captures most of the conversion lift.\n" +
        "Result: campaign completed without a legal flag, final conversion 4.2% vs 2.4% baseline, refund rate unchanged.",
      successCriteria: [
        "Completes all reachable stages with a documented decision at each",
        "Written justification cites the specific lesson section, not just 'felt right'",
        "Final log distinguishes what changed (or didn't) between the optimal and costly path",
      ],
      portfolioReady: true,
    },
  ],
  "social-proof-psychology": [
    {
      id: "review-widget-placement-audit",
      tier: "mini",
      archetype: "audit",
      title: "Volume and Recency: Auditing a Real Product Page's Review Widget",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given any live product page with a review widget, score it against the lesson's volume and recency rules, and write a one-paragraph recommendation for what to fix first.",
      companyId: "warby-parker",
      scenario:
        "You're a CRO analyst supporting Warby Parker's product team, benchmarking how competitors display reviews before recommending changes to your own product pages.",
      brief:
        "Pick a live product page (any retailer, not Warby Parker) with a star rating and review count. Score it on volume, recency, and specificity.",
      mode: "diagnostic",
      conceptsCovered: [
        "Showing volume, not just stars",
        "Using specific, recent proof",
      ],
      steps: [
        {
          stepId: "step-1-volume-check",
          concept: "Showing volume, not just stars",
          lessonAnchor: "1-show-volume-not-just-stars",
          theoryRecap:
            "The lesson notes '4.8 stars (12,431 reviews)' beats a bare '4.8 stars' because volume is the credibility signal, and a 5.0 with 3 reviews reads as insider-written.",
          question:
            "Does the page show a review count next to the star rating, and is that count high enough to read as credible rather than suspicious?",
          toolName: "Google Sheets",
          where: "A blank sheet to score each product page you check.",
          procedure: [
            "Find a live product page showing a star rating",
            "Check whether a review count is displayed next to the stars, not just on a separate page",
            "Note the exact count and the star average",
            "Flag it: 0-10 reviews (suspicious), 11-199 (moderate), 200+ (strong, matches the lesson's 2x-revenue threshold)",
          ],
          outputSample:
            "Product: [wireless earbuds listing]\nStars shown: 4.9\nReview count shown next to stars: none, count is only visible after clicking through\nFlag: WEAK, high star average with no visible count reads as suspicious per the lesson's framework",
          healthy:
            "The count sits directly next to the stars, is 200+, and is genuinely visible without a click-through.",
          unhealthy:
            "Only a bare star average shows, with the count hidden behind a click, or a suspiciously low count (under 10) paired with a perfect 5.0.",
          interpret:
            "Volume next to the stars is what turns a rating into evidence; hiding the count (or having too little of it) undercuts the exact signal the rating is supposed to send.",
          soWhat: [
            {
              symptom: "Star rating shows with no visible review count",
              action: "Recommend surfacing the count directly next to the stars, not behind a click",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-recency-check",
          concept: "Using specific, recent proof",
          lessonAnchor: "3-use-specific-recent-proof",
          theoryRecap:
            "The lesson cites Trustmary's 2025 finding that 83% of consumers distrust reviews older than one month, and that specific numbers ('2,847 marketers this month') beat round ones ('thousands').",
          question:
            "Are the top-displayed reviews dated, and if so, how recent are they? Does any surrounding copy use a specific number or a vague round one?",
          toolName: "Google Sheets",
          where: "The same sheet, a second column for recency and specificity.",
          procedure: [
            "Check the dates on the first 3 reviews shown by default",
            "Note whether any are older than 30 days",
            "Scan nearby marketing copy for a customer-count claim (e.g. 'trusted by thousands' vs. 'trusted by 12,847 customers')",
            "Write your recommendation: what would you fix first, volume display or recency/specificity",
          ],
          outputSample:
            "Top 3 review dates: 4 months ago, 7 months ago, 11 months ago\nNearby copy: 'Loved by thousands of customers'\nRecommendation: fix recency first, no review in the default view is under 30 days old, and 'thousands' should become a real number.",
          healthy:
            "Most default-shown reviews are under 30 days old, and nearby claims use specific real numbers.",
          unhealthy:
            "Default reviews are all months old, and copy uses round, unverifiable numbers like 'thousands' or 'millions.'",
          interpret:
            "Staleness and vagueness both quietly signal 'this claim isn't being maintained,' which is the opposite of the trust proof is supposed to build.",
          soWhat: [
            {
              symptom: "Default-shown reviews are all older than 30 days",
              action: "Recommend sorting by recency by default, or actively soliciting new reviews on a schedule",
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
            role: "Score volume, recency, and specificity for each page you audit",
            why: "Free, sufficient for a single-page scoring exercise",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 2-row scoring sheet (volume, recency/specificity) for one live product page, plus a one-paragraph fix recommendation.",
      sampleOutput:
        "Audit: Nykaa, moisturizer listing\n\n" +
        "Volume: 4.6 stars, 1,204 reviews shown directly under the rating. STRONG.\n" +
        "Recency: top 3 reviews dated 6 days, 11 days, and 19 days ago. STRONG.\n" +
        "Specificity: page copy reads 'Chosen by 40,000+ customers this year'. STRONG.\n\n" +
        "Recommendation: no urgent fix needed, this page already follows all three rules from the lesson.",
      successCriteria: [
        "Scores a real live page on both volume and recency/specificity",
        "Cites the specific numbers observed, not a vague impression",
        "Names one concrete fix, or confirms none is needed, with reasoning",
      ],
      portfolioReady: true,
    },
    {
      id: "testimonials-section-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Fake: Teardown of a Testimonials Section",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic-but-realistic testimonials section, correctly identify the real trust-eroding defects (not just anything that looks slightly off) using the lesson's own credibility rules.",
      companyId: "rent-the-runway",
      scenario:
        "You're a freelance CRO consultant reviewing a testimonials section a Rent the Runway competitor's marketing intern drafted for a landing page redesign, before it goes live.",
      brief:
        "Read the specimen testimonials section below. Identify which elements are real defects versus which just look unusual but are actually fine.",
      mode: "teardown",
      conceptsCovered: [
        "Perfect ratings read as suspicious",
        "Vague testimonials lack the specificity that builds trust",
      ],
      teardownItems: [
        {
          itemId: "item-1-testimonials-section",
          specimen:
            "WHAT OUR CUSTOMERS SAY\n\n" +
            "★★★★★ 5.0 (based on 4,812 reviews)\n\n" +
            "\"Amazing service, highly recommend!\" - J.\n\n" +
            "\"Best decision ever, love it!\" - Anonymous\n\n" +
            "\"I rented a Zimmermann dress for my sister's wedding in March 2024, it arrived two days early, fit perfectly, and cost 1/4 of buying it. Returned it in the prepaid envelope with zero hassle.\" - Priya M., verified renter, reviewed 8 days ago\n\n" +
            "\"Great experience overall.\" - K.\n\n" +
            "[No photos anywhere in the section]",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify the real defects in this testimonials section. Not everything unusual is a defect, some things that look odd are actually fine or even good practice.",
          answerKey: [
            {
              defect: "A perfect 5.0 average displayed with no visible negative reviews anywhere",
              severity: "critical",
              whyItMatters:
                "The lesson cites Spiegel Research Center's finding that products with a perfect 5.0 convert worse than the 4.2-4.5 range, buyers read perfection as curated or fake.",
              lessonRef: "4. Surface negative reviews intentionally",
              owner: "you",
            },
            {
              defect: "Two testimonials ('Amazing service, highly recommend!' and 'Best decision ever, love it!') are vague with no specific detail",
              severity: "moderate",
              whyItMatters:
                "Vague praise with no product, date, or outcome reads as unverifiable, the opposite of the specificity the lesson says builds trust.",
              lessonRef: "3. Use specific, recent proof",
              owner: "you",
            },
            {
              defect: "Two testimonials use only an initial or 'Anonymous' as the attribution",
              severity: "moderate",
              whyItMatters:
                "Anonymous or single-initial attribution weakens the 'similarity to a real person' signal the lesson says makes social proof persuasive.",
              lessonRef: "2. Match the proof to the buyer",
              owner: "you",
            },
            {
              defect: "No customer photos anywhere in the section",
              severity: "cosmetic",
              whyItMatters:
                "Not a dealbreaker on its own, but the lesson notes customer photos measurably increase purchase likelihood, so this is a missed lift, not a trust violation.",
              lessonRef: "How It Actually Works",
              owner: "you",
            },
          ],
          distractors: [
            "The Priya M. review being only 8 days old (this is actually a strength: recent, specific, verified, exactly what the lesson recommends)",
            "The review count showing 4,812 (a specific, plausible number is a strength, not a defect)",
            "The word 'verified renter' appearing on only one review (labeling verified purchasers is good practice, not a flaw, the issue is the other reviews lack any specificity at all, not that this one is labeled)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "List each defect you find with its severity and reasoning before checking the answer key",
            why: "Free, structures your answer before comparing against the key",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written list of identified defects (with severity and reasoning) submitted before checking the answer key, plus a corrected rewrite of the two weakest testimonials.",
      sampleOutput:
        "My findings before checking the answer key:\n\n" +
        "1. CRITICAL: 5.0 average with zero visible negative reviews, reads as curated/fake per Spiegel Research.\n" +
        "2. MODERATE: 'Amazing service, highly recommend!' has zero specific detail, could be about anything.\n" +
        "3. MODERATE: 'Anonymous' attribution undermines trust, no way to verify a real person said this.\n" +
        "4. COSMETIC: no photos in the section, a missed conversion lift, not a lie.\n\n" +
        "Rewrite of 'Amazing service, highly recommend!': (kept generic on purpose here, a real rewrite would add a product, date, and outcome, matching the Priya M. example in the specimen.)",
      successCriteria: [
        "Identifies the perfect-5.0 defect and cites the correct lesson reasoning",
        "Correctly separates at least one distractor from a real defect",
        "Proposes a concrete fix for at least one vague testimonial",
      ],
      portfolioReady: true,
    },
  ],

  "habit-loops": [
    {
      id: "habit-loops-self-audit-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "The Loop Audit: Diagnosing Duolingo's Cue-Routine-Reward Mechanics",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Use Duolingo (or an existing account) for one day, log every trigger-to-open event, and classify each as cue/routine/reward to diagnose whether the loop's reward is reliable, variable, or missing.",
      companyId: "duolingo",
      scenario:
        "You're a growth analyst who just joined a team pitching a habit-loop redesign to leadership. Before proposing changes to your own product, your manager wants you to prove you can correctly diagnose an existing best-in-class loop, Duolingo, using nothing but your own phone for a day.",
      brief:
        "Log real notification-to-open events, classify cue/routine/reward for each, and rate whether the reward is fixed or variable using the schedule-of-reinforcement idea from the lesson.",
      mode: "diagnostic",
      conceptsCovered: ["The cue-routine-reward loop", "Variable reward strength"],
      steps: [
        {
          stepId: "step-1-classify-the-loop",
          concept: "The cue-routine-reward loop",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "Duhigg's habit loop splits every automatic behavior into a cue (trigger), a routine (the behavior), and a reward (payoff), synthesizing Ann Graybiel's 1999 basal-ganglia research at MIT.",
          question:
            "Over one day, Duolingo pings you at least once. For each ping, what is the cue, what is the routine, and what is the reward, and does the cue reliably precede the routine every time?",
          toolName: "Google Sheets",
          where: "Open Duolingo (or your existing account), keep notifications on for one day, and log events in a fresh sheet.",
          procedure: [
            "Create 4 columns: Time, Cue, Routine, Reward",
            "Every time Duolingo notifies or you open it, log the exact cue text (e.g. streak reminder push)",
            "Log the routine you performed (opened app, completed 1 lesson, closed app)",
            "Log the reward you received (XP number, streak count, gem chest, league update)",
            "At day's end, mark any row where the cue did NOT lead to the routine",
          ],
          outputSample:
            "Time | Cue | Routine | Reward | Cue->Routine?\n8:02pm | Push: \"Don't lose your 12-day streak!\" | Opened app, did 1 lesson | +10 XP, streak saved | Yes\n1:15pm | (none, self-initiated) | Opened app during commute | +15 XP, gem chest (random) | N/A\n8:45pm | Push: \"Duo is sad\" (2nd reminder) | Ignored, phone silenced | none | No",
          healthy: "Cue leads to routine on most logged rows, and the reward varies in size/type (gem chest sometimes, plain XP other times).",
          unhealthy:
            "The cue fires repeatedly with no routine following, meaning the cue has stopped working and is training the user to mute notifications.",
          interpret:
            "A cue that stops converting is a design signal, not a user failure. It means the reward attached to it has gone stale or the cue has been used too often.",
          soWhat: [
            { symptom: "Cue-to-routine conversion drops below half your logged rows", action: "Cut to one reliable daily cue instead of stacking reminders", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rate-reward-variability",
          concept: "Variable reward strength",
          lessonAnchor: "why-marketers-care-20242025-examples",
          theoryRecap:
            "Per B.F. Skinner's reinforcement-schedule research (cited in the lesson), variable rewards are the strongest reinforcement type, stronger than a fixed reward every time.",
          question:
            "Across the rewards you logged, how many were an identical fixed amount versus a randomized one (gem chest, league jump, unexpected bonus)? What does that ratio predict about how compulsive this loop feels?",
          toolName: "Google Sheets",
          where: "Same sheet, add a Reward Type column.",
          procedure: [
            "Tag every logged reward as Fixed (same every time) or Variable (randomized in type/size/timing)",
            "Count the ratio of Fixed to Variable rewards across your log",
            "Compare against the lesson's Duolingo stat: streak-active users are 3x more likely to return daily",
            "Write one sentence on which specific reward row felt most compelling and why",
          ],
          outputSample: "Reward Type tally: Fixed 4, Variable 3\nMost compelling row: 1:15pm gem chest (Variable) - unknown contents until opened",
          healthy: "At least some rewards are variable; variable rows report as the most compelling in the written reflection.",
          unhealthy: "All rewards are fixed and identical every day; the loop still runs but produces boredom, not craving.",
          interpret:
            "A pure fixed-reward loop can sustain a habit but rarely accelerates it. Mixing in variable rewards is what turns compliance into craving.",
          soWhat: [
            { symptom: "All logged rewards are identical fixed amounts", action: "Introduce one randomized reward tier without changing the core routine", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log and classify cue/routine/reward events", why: "Free, no signup needed beyond an existing Google account", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-day cue/routine/reward event log with a written diagnosis of which stage of the loop is strongest and weakest.",
      sampleOutput:
        "Nykaa app, one-day loop log (excerpt)\n\nTime | Cue | Routine | Reward | Cue->Routine?\n10:30am | Push: \"Your wishlist item is back in stock\" | Opened app, viewed item | Free sample offer at checkout | Yes\n6:00pm | Push: \"Flash sale ends in 2 hours\" | Ignored | none | No\n\nReward Type tally: Fixed 1, Variable 1\nDiagnosis: Cue is reliable for restock alerts (contextual, specific) but weak for generic urgency pushes (ignored). Reward is under-variable, both instances were predictable discounts.",
      successCriteria: [
        "Logs at least 3 real cue-to-routine events with all 4 columns filled",
        "Correctly tags each reward as fixed or variable",
        "Identifies which specific cue converted least and proposes a fix",
      ],
      portfolioReady: true,
      stretch: "Repeat the log for a second app you use daily and compare which one has the more reliable cue.",
    },
    {
      id: "chewy-autoship-habit-loop-simulation",
      tier: "core",
      archetype: "simulation",
      title: "Designing Chewy's Autoship Habit Loop: A 90-Day Cancellation-Prevention Rollout",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Play a lifecycle marketer at Chewy across three decision checkpoints, choosing the cue, recovering from a bad launch decision if needed, and setting the reward structure for Autoship, then see how each choice changes 90-day cancellation and trust outcomes.",
      companyId: "chewy",
      scenario:
        "Chewy's Autoship subscription sees a cancellation spike in month 2, right after the novelty of the welcome discount wears off. You're asked to redesign the reminder cue and reward structure before the next quarterly cohort launches.",
      brief:
        "At each checkpoint, choose the option that builds a habit users would endorse on reflection, not one that manufactures panic to hit a short-term save-rate number.",
      mode: "simulation",
      conceptsCovered: ["Cue design and reliability", "Sludge vs nudge ethical line", "Variable reward reinforcement"],
      stages: [
        {
          stageId: "stage-1-cue-design",
          label: "Day 0: Choosing the Cancellation-Prevention Cue",
          elapsed: "Day 0",
          concept: "Cue design and reliability",
          lessonAnchor: "how-it-actually-works",
          situation:
            "Data shows most Autoship cancellations happen in the 3 days before the second shipment, when customers forget they're enrolled. Leadership wants a fix live before next week's cohort.",
          dashboard: "Month-1 Autoship retention: 71%. Support tickets tagged 'forgot I was subscribed': 340/week. Current reminder: none.",
          spendToDate: "$0",
          budgetRemaining: "$15,000 lifecycle messaging budget",
          decision: {
            prompt: "Which reminder do you ship before next week's shipment?",
            options: [
              {
                id: "urgency-timer",
                label: "A countdown banner in the app: 'Your order ships in 6 HOURS - act now or miss this price!' even though the price never actually changes",
                verdict: "costly",
                outcome: "Complaints spike, three App Store reviews call out the fake countdown by name, and Trust & Safety opens a review.",
                why:
                  "The lesson's ethical test asks whether the habit would survive being described honestly in onboarding. A countdown implying a price change that never happens fails that test outright, this is sludge, not a cue.",
                lessonRef: "Where It Backfires / Ethical Limits",
                nextStageId: "stage-2a-backlash",
              },
              {
                id: "predictable-reminder",
                label: "A plain, dated reminder 3 days out: 'Bella's food ships Thursday, tap to skip or swap'",
                verdict: "optimal",
                outcome:
                  "Cancellations tied to 'forgot I was subscribed' tickets drop by more than half over the next cohort; the cue is specific, dated, and honest.",
                why: "A single reliable, predictable cue beats a noisy or manipulative one, exactly the lesson's 'engineer one reliable cue' guidance.",
                lessonRef: "How to Apply It Ethically",
                nextStageId: "stage-2b-scale",
              },
              {
                id: "no-reminder",
                label: "Ship nothing and let the auto-charge run silently",
                verdict: "acceptable",
                outcome:
                  "Cancellations stay flat because customers never get a chance to reconsider, but the 'forgot I was subscribed' support tickets keep costing the CX team $22 per contact.",
                why: "Silence avoids provoking a cancellation, but it does not build a habit, it just avoids a decision. It's not unethical, but it leaves money on the table versus a real cue.",
                lessonRef: "How It Actually Works",
                nextStageId: "stage-2b-scale",
              },
            ],
          },
        },
        {
          stageId: "stage-2a-backlash",
          label: "Day 14: Recovering from the Fake-Urgency Backlash",
          elapsed: "Day 14",
          concept: "Sludge vs nudge ethical line",
          lessonAnchor: "where-it-backfires-ethical-limits",
          situation:
            "The fake countdown timer is still live. Cancellations are up, not down, and a consumer-advocacy newsletter has flagged Chewy alongside other 'dark pattern' subscription complaints.",
          dashboard: "Month-1 Autoship retention: 64% (down from 71%). App Store rating: dropped from 4.7 to 4.4 in two weeks.",
          spendToDate: "$2,000",
          budgetRemaining: "$13,000",
          decision: {
            prompt: "How do you respond?",
            options: [
              {
                id: "double-down",
                label: "Add the countdown timer to two more screens to force more urgency",
                verdict: "costly",
                outcome: "Ratings keep falling and the app gets flagged in a trade-press roundup of subscription dark patterns.",
                why: "Doubling down on a pattern users already flagged as manipulative moves further from the lesson's honesty test, not toward it.",
                lessonRef: "Where It Backfires / Ethical Limits",
                nextStageId: "end",
              },
              {
                id: "apologize-fix",
                label: "Remove the fake countdown, replace it with the honest dated reminder, and post a changelog note",
                verdict: "acceptable",
                outcome: "Cancellations recover to 68% within a month, short of the 71% baseline; ratings recover more slowly than retention did.",
                why:
                  "Reversing course is the right call, but trust takes longer to rebuild than it took to break, so this scores acceptable, not optimal, purely on how much ground was already lost before stage 1.",
                lessonRef: "How to Apply It Ethically",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-2b-scale",
          label: "Day 60: Setting the Reward for Habitual Renewers",
          elapsed: "Day 60",
          concept: "Variable reward reinforcement",
          lessonAnchor: "why-marketers-care-20242025-examples",
          situation:
            "The reminder cue is stable. Now leadership wants a reward layer to push customers from 3 renewals to 6+ before they'd consider cancelling.",
          dashboard: "3-renewal retention: 71%. 6-renewal retention (customers who reach it): 89%. Budget approved for a loyalty reward.",
          spendToDate: "$4,500",
          budgetRemaining: "$10,500",
          decision: {
            prompt: "What reward do you attach to each renewal?",
            options: [
              {
                id: "flat-discount",
                label: "A flat, always-the-same 5% discount on every renewal",
                verdict: "acceptable",
                outcome: "Renewal rate holds steady but the discount becomes an expected baseline, customers stop noticing it within two cycles.",
                why: "A fixed reward is predictable and fine, but per Skinner's reinforcement research cited in the lesson, it is the weakest reinforcement type.",
                lessonRef: "Why Marketers Care (2024/2025 examples)",
                nextStageId: "end",
              },
              {
                id: "variable-bonus",
                label:
                  "A randomized bonus each renewal, sometimes a free treat sample, sometimes a surprise discount, sometimes nothing but an early-access perk",
                verdict: "optimal",
                outcome: "6-renewal reach rate climbs from 41% to 58% over the next quarter as customers start anticipating what the surprise will be.",
                why:
                  "Variable rewards are the strongest reinforcement schedule; pairing them with an already-honest cue is exactly the loop the lesson describes as the strongest and most defensible version.",
                lessonRef: "Why Marketers Care (2024/2025 examples)",
                nextStageId: "end",
              },
              {
                id: "no-reward",
                label: "No added reward, rely on the reminder cue alone",
                verdict: "costly",
                outcome: "6-renewal reach rate stays flat at 41%; the loop plateaus because a cue without a reinforcing reward stops compounding into a stronger habit.",
                why: "The lesson's loop has three parts, not two. Dropping the reward stage leaves craving with nothing to reinforce it.",
                lessonRef: "How It Actually Works",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each checkpoint's decision, verdict, and dashboard numbers as a rollout plan", why: "Free, sufficient for documenting a decision log", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A 90-day Autoship habit-loop rollout plan documenting the cue, recovery step (if needed), and reward chosen at each checkpoint, with the resulting retention numbers.",
      sampleOutput:
        "HelloFresh Weekly-Box Reminder, 90-day rollout log (excerpt)\n\nDay 0: Cue chosen - dated reminder 'Your box ships Tuesday, skip or swap by Sunday 11pm'. Verdict: optimal.\nDay 60: Reward chosen - variable recipe-card bonus (sometimes a chef video, sometimes a free side). Verdict: optimal.\nResult: 6-box retention projected to rise from 44% to 55% based on the variable-reward stage.",
      successCriteria: [
        "Chooses the honest, dated cue over the fake-urgency option at stage 1",
        "Correctly identifies the variable reward as stronger than the fixed discount at stage 2b",
        "Rollout log names the actual retention numbers changed by each choice, not just the choice made",
      ],
      portfolioReady: true,
      stretch: "Model what would happen if leadership demanded the countdown timer be restored after stage 2a's recovery, using the lesson's honesty test to write the pushback memo.",
    },
  ],
  "behavioral-economics": [
    {
      id: "warby-parker-checkout-nudge-audit",
      tier: "mini",
      archetype: "audit",
      title: "Nudge or Sludge? Auditing Warby Parker's Real Checkout Flow",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Browse Warby Parker's real checkout flow live, identify which of the four choice-architecture mechanisms (defaults, loss framing, anchoring, social proof) it uses, and flag anything that crosses from a legitimate nudge into sludge.",
      companyId: "warby-parker",
      scenario:
        "You're a CRO analyst asked to benchmark a well-regarded DTC checkout before your own team redesigns theirs. Rather than trust a summary, you're auditing the real, live flow yourself.",
      brief:
        "Add a pair of glasses to cart, walk the checkout to the final screen without paying, and log every choice-architecture technique you can find using the lesson's own four-mechanism list as your checklist.",
      mode: "diagnostic",
      conceptsCovered: ["Identifying defaults, loss framing, anchoring, and social proof", "Distinguishing an ethical nudge from sludge"],
      steps: [
        {
          stepId: "step-1-log-mechanisms",
          concept: "Identifying defaults, loss framing, anchoring, and social proof",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "The lesson lists four classic nudge mechanisms: defaults (pre-ticked boxes), loss framing ('don't lose' beats 'save'), anchoring (the first number distorts later judgment), and social proof (stated behavior of others).",
          question: "Walking Warby Parker's real site from product page to final checkout screen, which of these four mechanisms actually appear, and where exactly?",
          toolName: "Google Sheets",
          where: "warbyparker.com, product page through checkout (stop before entering real payment details)",
          procedure: [
            "Add a frame to cart and start checkout in a private/incognito window",
            "Log every screen in a sheet with columns: Screen, Mechanism, Exact Copy/Element",
            "Note any pre-checked boxes (insurance add-on, email opt-in, extras)",
            "Note any price anchor (a 'compare at' price, a bundle savings callout)",
            "Note any loss-framed or social-proof copy on the way to payment",
          ],
          outputSample:
            "Screen | Mechanism | Exact Element\nCart | Anchor | 'Bundle & save $50' next to full-price total\nCart | Default | Blue-light lens upgrade pre-selected\nShipping | Social proof | none found\nCheckout | Loss framing | none found",
          healthy: "At least 2 of the 4 mechanisms are present, and each one maps to a real, visible element you can screenshot.",
          unhealthy: "You log a mechanism that isn't actually there because you expected to find it, this is the confirmation-bias trap the audit is meant to catch.",
          interpret: "A real audit finds gaps as often as hits. Warby Parker not using every lever everywhere is itself a data point about what they consider worth the friction.",
          soWhat: [
            { symptom: "A default pre-selects a paid add-on with no visible way to decline in the same screen", action: "Flag it for the ethics step next, a hidden decline path is a sludge risk", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-classify-nudge-vs-sludge",
          concept: "Distinguishing an ethical nudge from sludge",
          lessonAnchor: "where-it-backfires-ethical-limits",
          theoryRecap:
            "The lesson defines sludge, Thaler's term, as choice architecture that benefits the architect at the chooser's expense: fake countdowns, hidden opt-outs, confirmshaming, roach-motel cancellation flows.",
          question: "For every mechanism you logged, is the underlying claim true and the opt-out visible in the same screen? Which ones pass, and which ones would you flag to legal?",
          toolName: "Google Sheets",
          where: "Same sheet, add a Verdict column.",
          procedure: [
            "For each logged mechanism, write whether the underlying number/claim is true (a real price, a real stated fact)",
            "Check whether declining any pre-selected default takes one click or requires hunting",
            "Mark each row Nudge (passes both checks) or Sludge (fails either)",
            "Write one sentence recommending a fix for any row marked Sludge",
          ],
          outputSample:
            "Mechanism | Claim True? | Opt-out visible? | Verdict\nBundle & save $50 anchor | Yes, compare price matches site-wide list price | N/A | Nudge\nBlue-light lens pre-selected | N/A | Yes, one-tap remove in same screen | Nudge",
          healthy: "Every mechanism you found passes both checks, or you have a specific, one-sentence fix for the one that doesn't.",
          unhealthy: "You mark something Sludge without checking whether the claim is actually true first, guessing instead of verifying is the same shortcut that creates sludge.",
          interpret: "The nudge/sludge line is not about the technique, defaults and anchors are neutral tools. It's about whether the claim is true and the exit is easy.",
          soWhat: [
            { symptom: "An add-on default has no visible one-click removal", action: "Move the decline control into the same screen as the default, not a settings page two clicks away", effort: "dev ticket" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each screen's mechanism and nudge/sludge verdict", why: "Free, no account needed beyond an existing Google account", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A logged audit of Warby Parker's checkout mechanisms with a Nudge/Sludge verdict and one fix recommendation.",
      sampleOutput:
        "Nykaa checkout audit (excerpt)\n\nScreen | Mechanism | Element | Claim True? | Opt-out visible? | Verdict\nCart | Anchor | 'MRP 1,999, you pay 1,299' | Yes, matches product page MRP | N/A | Nudge\nCart | Default | 'Nykaa Prime trial' pre-checked | N/A | No, removal buried in order summary footer | Sludge\n\nFix: move the Prime trial checkbox decline control next to the checkbox itself, not the footer.",
      successCriteria: [
        "Logs at least 3 real, verifiable mechanisms from the live site",
        "Correctly verifies claim-truth and opt-out visibility before assigning a verdict",
        "Provides one concrete fix for any row marked Sludge",
      ],
      portfolioReady: true,
      stretch: "Run the same audit on a competitor's checkout and compare which company uses more sludge.",
    },
    {
      id: "thredup-nudge-sludge-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Nudge or Sludge? Tearing Down a Resale Subscription's Signup and Cancellation Flow",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given two synthetic-but-realistic screens from a resale subscription's signup and cancellation flow, separate legitimate choice-architecture nudges from dark-pattern sludge, and correctly reject two plausible-looking distractors.",
      companyId: "thredup",
      scenario:
        "ThredUp's resale subscription is under a UX audit ahead of a compliance review triggered by the FTC's Click-to-Cancel rule. You've been handed two flow screens (recreated from common patterns seen across resale/subscription apps) to grade.",
      brief: "For each screen, list every real defect with severity, then explain why the listed distractors are NOT actually violations.",
      mode: "teardown",
      conceptsCovered: ["How It Actually Works", "Where It Backfires / Ethical Limits"],
      teardownItems: [
        {
          itemId: "item-1-signup-screen",
          specimen:
            "SIGNUP SCREEN\n\nPlan: Clean Out Unlimited - $29.99/mo\n[Struck-through: 'Regular price $49.99/mo'] You save 40%!\n\n[x] Auto-renew monthly (pre-checked, no visible way to uncheck without scrolling)\n[x] Email me styling tips (pre-checked)\n\n'Only 3 spots left in your area this month!' - resets to '3 spots left' again if you reload the page\n\n[CONTINUE TO PAYMENT]",
          specimenSource: "synthetic-realistic",
          prompt: "List every real defect in this signup screen with severity, then explain why the two listed distractors are not actually violations.",
          answerKey: [
            {
              defect: "'Only 3 spots left' resets to the same number on reload, a fake-scarcity counter with no real inventory behind it",
              severity: "critical",
              whyItMatters: "This is the fake-urgency pattern the lesson names directly, it manufactures pressure using a false claim, which fails the honesty test entirely.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "either",
            },
            {
              defect: "Auto-renew is pre-checked with the uncheck control requiring scrolling past the payment fields to find",
              severity: "critical",
              whyItMatters: "A default is fine when the opt-out is visible in the same screen. Burying it below the fold is the specific 'hidden opt-out' sludge pattern named in the lesson.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
            {
              defect: "'Styling tips' email pre-checked without a clearly visible label distinguishing it from required account fields",
              severity: "moderate",
              whyItMatters: "Lower severity than the auto-renew default because it costs the user an unwanted email, not money, but it's still an unrequested default bundled with a required action.",
              lessonRef: "How It Actually Works",
              owner: "either",
            },
          ],
          distractors: [
            "The struck-through 'Regular price $49.99/mo' anchor, this is a legitimate anchor as long as $49.99 is a real price actually charged to some customers, which the brief does not contradict",
            "The 40% savings callout itself, math and framing are not a violation on their own, only an untrue underlying number would be",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-cancellation-screen",
          specimen:
            "CANCELLATION FLOW\n\nStep 1: 'Wait! Here's 50% off your next 3 months' [Keep My Plan] [No thanks, I hate saving money ->]\n\nStep 2: 'To cancel, please call our Member Success line at 1-800-555-0199, available Mon-Fri 9am-5pm ET. Online cancellation is not available for Unlimited plans.'\n\n[BACK TO ACCOUNT]",
          specimenSource: "synthetic-realistic",
          prompt: "List every real defect in this cancellation flow with severity, then explain why the listed distractor is not actually a violation.",
          answerKey: [
            {
              defect: "The decline button reads 'No thanks, I hate saving money', confirmshaming the user for a decision they're entitled to make",
              severity: "moderate",
              whyItMatters: "The lesson names confirmshaming directly as a sludge pattern; it doesn't block the choice, but it penalizes it emotionally to discourage the click.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "either",
            },
            {
              defect: "Cancellation requires a phone call during limited business hours with no online option, despite signup being fully self-serve online",
              severity: "critical",
              whyItMatters: "This is the textbook roach-motel pattern, easy in, deliberately hard out, and is exactly what the FTC's 2023 Click-to-Cancel rule targets.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: [
            "The 50% retention offer itself on Step 1, offering a real, honored discount before someone cancels is a legitimate retention nudge, not sludge, as long as the discount is genuinely honored if accepted",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each defect with severity and lesson reference", why: "Free, sufficient for a structured defect log", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A defect log for both screens with severity ratings and a one-line justification for each rejected distractor.",
      sampleOutput:
        "Rent the Runway cancellation flow, defect log (excerpt)\n\nDefect: Cancel button only reachable after a 3-screen retention gauntlet with no direct link\nSeverity: critical\nWhy it matters: Extra required screens with no skip option is a roach-motel variant even without confirmshaming copy.\n\nRejected distractor: The final retention offer (10% off) - legitimate, honored discount, not sludge on its own.",
      successCriteria: [
        "Identifies at least 4 of the 5 real defects across both items with correct severity",
        "Correctly rejects both distractors with a stated reason, not just a guess",
        "Cites the specific lesson section for each defect's lessonRef",
      ],
      portfolioReady: true,
      stretch: "Rewrite both screens into an honest version that keeps a legitimate retention nudge but removes every flagged defect.",
    },
  ],

  "choice-architecture": [
    {
      id: "chewy-autoship-default-audit",
      tier: "mini",
      archetype: "audit",
      title: "Default Audit: Is a Subscription Checkout Ethical or a Dark Pattern?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given five real defaults from a pet-subscription checkout flow, classify each as an ethical nudge or a dark pattern using the lesson's four-reason default-stickiness model and the face-to-face disclosure test, then write a verdict memo.",
      companyId: "chewy",
      scenario:
        "You're the CRO analyst on Chewy's subscription growth team. Leadership wants a written verdict on whether the current Autoship checkout defaults are ethical nudges or dark patterns before the next board review.",
      brief:
        "Walk five real checkout defaults, classify each against the lesson's frameworks (why the default is sticky, who it serves, whether it survives disclosure), and flag any that cross the ethical line.",
      mode: "diagnostic",
      conceptsCovered: ["Default option classification", "The face-to-face ethical test"],
      steps: [
        {
          stepId: "step-1-default-classification",
          concept: "Default option classification",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "Defaults are sticky for four compounding reasons: friction to change them, implied authority from whoever set them, loss aversion against giving up a perceived endowment, and users not realizing a choice exists at all.",
          question:
            "Below are five real Autoship checkout defaults. For each, name which of the four stickiness reasons is doing the work, and whether the default serves the shopper's stated goal or Chewy's KPI at the shopper's expense.",
          toolName: "Google Sheets",
          where: "A blank Google Sheet with columns: Default, Stickiness Reason, Serves Whom, Verdict.",
          procedure: [
            "List the five defaults: (1) Autoship pre-checked on first order of a repeat-purchase item, (2) largest bag size pre-selected as the 'best value' option, (3) email marketing opt-in pre-checked below the fold, (4) delivery frequency defaulted to the shortest interval (highest order volume), (5) 'add pet insurance quote' pre-selected as an add-on line item",
            "For each row, name the dominant stickiness reason (friction, authority, loss aversion, or unawareness)",
            "Mark 'Serves Whom': shopper, Chewy, or both",
            "Write a one-line verdict per row: ethical nudge, borderline, or dark pattern",
          ],
          outputSample:
            "Default                                    Stickiness Reason   Serves Whom   Verdict\nAutoship pre-checked (repeat item)         Unawareness         Both          Ethical nudge (real savings, easy to uncheck)\nLargest bag pre-selected as 'best value'   Authority           Chewy         Borderline (true per-unit price, but frames spend up)\nEmail opt-in pre-checked, below fold       Unawareness         Chewy         Dark pattern (buried, no visible benefit to shopper)\nShortest delivery interval defaulted       Friction+Authority  Chewy         Dark pattern (inflates order volume, not shopper need)\nPet insurance quote pre-added as line item Loss aversion       Chewy         Dark pattern (adds cost without an explicit yes)",
          healthy:
            "Two of five defaults survive the test cleanly, the rest get flagged with a specific fix (uncheck by default, move above the fold, require an explicit click).",
          unhealthy:
            "Marking every default 'ethical' because the company benefits too, or marking every default 'dark pattern' without checking whether it also genuinely helps the shopper.",
          interpret:
            "A default earns the 'ethical nudge' label only when a shopper who noticed it would still choose it. Three of five defaults here fail that test.",
          soWhat: [
            {
              symptom: "A default only reduces friction for the company, not the shopper",
              action: "Move it from pre-checked to an explicit opt-in with a clear one-line benefit statement",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ethical-test",
          concept: "The face-to-face ethical test",
          lessonAnchor: "where-it-backfires-ethical-limits",
          theoryRecap:
            "The ethical line is whose interest the default serves: would you be comfortable explaining the default to the customer face-to-face? If no, redesign it.",
          question:
            "Take the three defaults you flagged 'dark pattern' or 'borderline' in Step 1. Write the one sentence you would say out loud to a shopper explaining why that default exists.",
          toolName: "Google Sheets",
          where: "Same sheet, new column: 'Face-to-Face Explanation'.",
          procedure: [
            "For each flagged default, write the honest one-sentence explanation you'd give a shopper who asked 'why was this already checked?'",
            "Mark PASS if the sentence sounds reasonable said out loud, FAIL if it sounds evasive or manipulative",
            "For every FAIL, propose the specific UI fix (uncheck by default, add disclosure copy, or remove entirely)",
          ],
          outputSample:
            "Default                                Explanation                                                    Result   Fix\nEmail opt-in pre-checked, below fold   'It's checked because most people forget to look down there'  FAIL     Move above the fold, unchecked by default\nShortest interval defaulted            'It's set to arrive most often because that's our best metric' FAIL    Default to the shopper's stated order history, not shortest\nPet insurance pre-added as line item   'We add it automatically so people don't have to think about it' FAIL  Require an explicit checkbox, remove the pre-add",
          healthy: "Every default that fails the face-to-face test gets a named fix, not just a flag.",
          unhealthy: "Writing a vague, generous explanation that avoids saying the real (company-benefiting) reason.",
          interpret:
            "If the honest sentence would make a shopper angry, the default is a liability the moment it's noticed, not a growth lever.",
          soWhat: [
            {
              symptom: "A flagged default has no fix proposed",
              action: "Assign it to a design/eng ticket before shipping the next checkout iteration",
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
            role: "Log and score each default against the two frameworks",
            why: "No account friction, sortable/filterable table format fits the audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hotjar",
            role: "Session-record real checkout flows to catch defaults you can't see from a screenshot alone",
            why: "Confirms whether shoppers actually notice and uncheck the flagged defaults, not just whether they exist",
            required: false,
            fallback: "Manually click through the checkout flow yourself and screenshot each default",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A five-row verdict table classifying each Autoship checkout default as ethical nudge, borderline, or dark pattern, with a named fix for every flagged default.",
      sampleOutput:
        "Warby Parker home try-on checkout, default audit (excerpt)\n\n" +
        "Default                                   Verdict          Fix\n" +
        "5-frame limit pre-selected (max allowed)  Ethical nudge    None, matches shopper's own stated goal\n" +
        "Return shipping label pre-printed         Ethical nudge    None, removes real friction from a return\n" +
        "Prescription upload reminder pre-checked  Borderline       Add a one-line 'why we ask' next to the checkbox\n" +
        "Marketing SMS opt-in pre-checked           Dark pattern     Uncheck by default, require explicit opt-in",
      successCriteria: [
        "All five defaults are classified with a named stickiness reason",
        "Every 'dark pattern' or 'borderline' verdict has a specific, actionable fix attached",
      ],
      portfolioReady: true,
    },
    {
      id: "rent-the-runway-cancellation-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: Find the Dark Patterns in a Subscription Cancellation Flow",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three synthetic screens from a subscription-cancellation flow, identify the specific dark pattern on each screen, name which is a legitimate save-offer versus which crosses the ethical line, and cite the regulation or lesson principle each defect violates.",
      companyId: "rent-the-runway",
      scenario:
        "You're a UX auditor hired by Rent the Runway ahead of a compliance review. Customer complaints describe the cancellation flow as 'impossible to find.' You've been given a synthetic (not real) walkthrough of three screens to assess.",
      brief:
        "Read each screen's specimen text, identify the defect(s), separate real dark patterns from legitimate retention tactics, and cite what each defect violates.",
      mode: "teardown",
      conceptsCovered: ["Confirmshaming and hidden CTAs", "Asymmetric friction between signup and cancel", "Undisclosed material terms"],
      teardownItems: [
        {
          itemId: "screen-1-guilt-video",
          specimen:
            "Screen 1 of the cancellation flow: clicking 'Manage Subscription' opens a full-screen autoplaying video of a sad-looking dog, captioned 'Wait... are you sure? Members save 40% vs. renting individually.' The only large, colored button reads 'Keep My Subscription.' The actual path to cancel is a 10px light-gray line of text at the very bottom of the screen: 'no, I don't want to save money.'",
          specimenSource: "synthetic-realistic",
          prompt: "What dark pattern(s) does this screen use, and which lesson principle does each violate?",
          answerKey: [
            {
              defect: "Confirmshaming copy ('no, I don't want to save money')",
              severity: "critical",
              whyItMatters:
                "Frames a neutral choice (cancel) as an admission of financial foolishness, manipulating via guilt rather than informing.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "you",
            },
            {
              defect: "Visual hierarchy hides the actual cancel action (10px gray link vs. a large colored CTA)",
              severity: "critical",
              whyItMatters:
                "Violates the 'order options by what you want chosen, but disclose the alternatives clearly' rule, the alternative isn't just deprioritized, it's nearly invisible.",
              lessonRef: "How to Apply It Ethically",
              owner: "developer",
            },
          ],
          distractors: [
            "Using a video at all in the retention offer",
            "Mentioning the 40% savings number (true and disclosed, a legitimate save-offer)",
          ],
          partialCredit: true,
        },
        {
          itemId: "screen-2-forced-phone-call",
          specimen:
            "Screen 2: after finding and clicking the gray link, a modal reads 'To cancel, please call our Member Success team at 1-800-555-0134, Mon-Fri 9am-5pm EST. Average hold time: 22 minutes.' There is no email, chat, or self-serve cancel button anywhere on the account page.",
          specimenSource: "synthetic-realistic",
          prompt: "What dark pattern(s) does this screen use, and which lesson principle or rule does it violate?",
          answerKey: [
            {
              defect:
                "Removing the self-serve cancel path entirely, forcing a phone call during limited business hours with a stated 22-minute hold",
              severity: "critical",
              whyItMatters:
                "Creates deliberate asymmetric friction: signup was one click, cancellation requires a scheduled phone call, exactly the pattern the FTC's 2024 Click-to-Cancel rule was built to stop.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "developer",
            },
          ],
          distractors: ["Offering phone support as an additional channel alongside a working self-serve option"],
          partialCredit: true,
        },
        {
          itemId: "screen-3-undisclosed-billing",
          specimen:
            "Screen 3 (only reachable after the phone call): the rep says 'Your cancellation is processed, but your card will still be charged for the current cycle that has already started, there's no proration.' This policy is not disclosed anywhere on the signup page, the pricing page, or the account settings screen.",
          specimenSource: "synthetic-realistic",
          prompt: "What dark pattern(s) does this screen reveal, and which lesson principle does it violate?",
          answerKey: [
            {
              defect: "A material billing term (no proration on cancellation) withheld from checkout and the pricing page",
              severity: "moderate",
              whyItMatters:
                "Shoppers can't evaluate the true cost of the subscription at signup because a real cost condition was never disclosed.",
              lessonRef: "How to Apply It Ethically",
              owner: "either",
            },
            {
              defect: "The undisclosed term only surfaces after the customer has already spent 22+ minutes trying to cancel",
              severity: "moderate",
              whyItMatters: "Compounds friction with information asymmetry at the exact moment the customer has the least patience left to contest it.",
              lessonRef: "Where It Backfires / Ethical Limits",
              owner: "you",
            },
          ],
          distractors: ["Charging for a partial cycle at all (a disclosed no-proration policy can be entirely legitimate)"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Log each screen's defects, severity, and citation as you work through the teardown",
            why: "Free, structured enough to build a shareable audit doc",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-screen defect log naming each dark pattern, its severity, the lesson/regulatory principle it violates, and which defects are legitimate retention tactics versus which cross the line.",
      sampleOutput:
        "HelloFresh cancellation flow, defect log (excerpt)\n\n" +
        "Screen 1, 'pause instead?' offer          Severity: none        Legitimate save-offer, clearly labeled, real alternative\n" +
        "Screen 2, cancel button color-matched     Severity: cosmetic    Same size as 'Keep Plan' but 80% lower contrast\n" +
        "Screen 3, requires a reason from a dropdown before cancel unlocks   Severity: moderate    Adds a mandatory step signup never required\n" +
        "Screen 4, confirmation email omits the actual cancellation date     Severity: moderate    Customer can't verify the cancel took effect",
      successCriteria: [
        "All 3 screens have at least one correctly identified defect with the right severity",
        "Distractors are correctly excluded from the answer, not flagged as defects",
      ],
      portfolioReady: true,
    },
  ],
  "peak-end-rule": [
    {
      id: "mamaearth-journey-peak-end-map",
      tier: "mini",
      archetype: "audit",
      title: "Mapping the Real Peak and End of a Post-Purchase Journey",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a company's real post-purchase touchpoint sequence (order confirmation through the first re-order email), identify the actual emotional peak and end versus the intended ones, and propose one fix for whichever is weaker.",
      companyId: "honasa-mamaearth",
      scenario:
        "You're a CX analyst at Honasa Consumer (Mamaearth). The brand assumes its 'unboxing moment' is the peak of the customer journey, but nobody has actually mapped it against the peak-end rule.",
      brief:
        "List every touchpoint from order confirmation to the first re-order nudge, mark the intended peak and end, then identify what's actually most likely to be remembered.",
      mode: "diagnostic",
      conceptsCovered: ["Peak identification in a real journey", "Engineering the end deliberately"],
      steps: [
        {
          stepId: "step-1-peak-identification",
          concept: "Peak identification in a real journey",
          lessonAnchor: "how-it-actually-works",
          theoryRecap:
            "Memory of an experience is roughly the average of its emotional peak and its end, duration and the forgettable middle barely register. There are two selves: the experiencing self living every moment, and the remembering self deciding whether to come back.",
          question:
            "Below are 6 real touchpoints in Mamaearth's post-purchase journey. Rank them by likely emotional intensity (not company intent) and mark which one is the actual peak.",
          toolName: "Google Sheets",
          where: "A Google Sheet with columns: Touchpoint, Intended Emotion, Actual Intensity (1-5), Notes.",
          procedure: [
            "List touchpoints: order confirmation email, shipping delay SMS, package arrival, unboxing (branded box + sample sachets), first product use, day-14 re-order reminder email",
            "Score each 1-5 for actual likely emotional intensity based on the copy/experience described, not company intent",
            "Circle the single highest-scoring touchpoint, that's the real peak",
            "Note whether the real peak matches what the brand assumes is the peak (the unboxing)",
          ],
          outputSample:
            "Touchpoint                  Intended Emotion   Actual Intensity   Notes\nOrder confirmation            Reassurance        2                  Generic, forgettable\nShipping delay SMS             (none, ops msg)    4                  Unintended negative peak, no apology or compensation\nPackage arrival                 Excitement         3                  Neutral, just a box on a doorstep\nUnboxing (branded box+samples) Delight            4                  Genuinely well-designed, ties with the delay\nFirst product use              Satisfaction        3                  Depends on skin match, out of brand's control\nDay-14 re-order email           Urgency             2                  Generic discount code, no personalization",
          healthy:
            "The real peak is identified even when it's negative (the shipping delay SMS scored as high as the unboxing), and that's flagged as a risk, not ignored.",
          unhealthy: "Assuming the unboxing is automatically the peak just because it's the touchpoint the brand designed most carefully.",
          interpret:
            "An unaddressed negative touchpoint (the delay SMS) can tie or beat your best-designed positive touchpoint for emotional intensity, and negative peaks are remembered just as strongly as positive ones.",
          soWhat: [
            {
              symptom: "A negative touchpoint scores as high as your best designed moment",
              action: "Add an apology + small compensation to the delay SMS so it can't out-compete the unboxing as the peak",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-engineer-the-end",
          concept: "Engineering the end deliberately",
          lessonAnchor: "how-to-apply-it-ethically",
          theoryRecap:
            "The last email in a sequence, the order-confirmation page, the cancellation flow, are remembered disproportionately. Spend design budget on the end, not just the splashy first touchpoint.",
          question:
            "Of the 6 touchpoints, which one is functionally 'the end' of this journey, and does it currently earn that weight?",
          toolName: "Google Forms",
          where: "A short 3-question Google Form sent to 5-10 recent customers.",
          procedure: [
            "Send a 3-question form: 'What's the last thing you remember from your order?', 'How did that make you feel?', 'What would have made it better?'",
            "Compare responses against your assumption of what 'the end' is (the day-14 re-order email)",
            "Write one specific redesign for the end touchpoint based on the responses",
          ],
          outputSample:
            "Q: What's the last thing you remember from your order?\n  4/8 respondents: 'the generic discount email' (negative/neutral)\n  3/8 respondents: 'nothing, I don't remember' (no end at all)\n  1/8 respondents: 'a thank you note in the box' (positive, but this was the unboxing, not the actual end)\n\nFinding: the real 'end' (day-14 email) is currently the weakest touchpoint in the journey, not the strongest.",
          healthy: "The redesign proposal targets the actual end touchpoint respondents named, not the touchpoint the brand assumed was the end.",
          unhealthy: "Redesigning the unboxing again because it's already the team's favorite touchpoint to work on.",
          interpret:
            "If customers can't name an 'end' at all, the journey doesn't have one designed, it just stops. That is itself the finding.",
          soWhat: [
            {
              symptom: "Customers report no memorable 'end' to the journey",
              action: "Replace the generic day-14 discount email with a personalized note referencing their specific product",
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
            role: "Score and rank touchpoints by emotional intensity",
            why: "Free, simple enough for a 6-row journey map",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Forms",
            role: "Collect 5-10 real customer responses on what they actually remember",
            why: "Free, fastest way to validate the assumed peak/end against real memory",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "SurveyMonkey",
            role: "Scale the same survey to a larger, segmented customer sample",
            why: "Better analytics and segmentation than Google Forms once the sample grows past a pilot",
            required: false,
            fallback: "Google Forms handles a 5-10 person pilot at zero cost",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 6-touchpoint journey map scored for emotional intensity, with the actual peak and end identified and one concrete redesign proposed for the weaker of the two.",
      sampleOutput:
        "Nykaa post-purchase journey, peak/end map (excerpt)\n\n" +
        "Touchpoint            Actual Intensity   Role\n" +
        "Order confirmation      2                  Neither\n" +
        "Delivery running late SMS  4               Unintended peak (negative, no compensation offered)\n" +
        "Unboxing                3                  Intended peak, underperforms\n" +
        "Re-order reminder        2                 Intended end, weakest touchpoint in the sequence\n\n" +
        "Finding: fix the delay SMS first, it's currently the strongest emotional moment in the journey and it's negative.",
      successCriteria: [
        "All 6 touchpoints are scored and the actual (not assumed) peak is correctly identified",
        "The redesign proposal targets the touchpoint customer responses actually named, not the brand's assumption",
      ],
      portfolioReady: true,
    },
    {
      id: "swiggy-cx-budget-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The CX Redesign Budget: Fix the Middle, the Peak, or the End?",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a limited quarterly CX budget and a dashboard of ticket volume vs. NPS drivers, make three sequential resource-allocation decisions that either correctly apply duration neglect and the peak-end rule or waste the budget chasing ticket volume instead of remembered experience.",
      companyId: "swiggy",
      scenario:
        "You're the CX lead at Swiggy with one quarter's budget to improve the delivery experience. Support ticket volume says one thing; NPS driver analysis says another. You can't fix everything this quarter.",
      brief:
        "Across three checkpoints, decide where the team's limited sprint capacity goes, and see how each choice plays out over the quarter.",
      mode: "simulation",
      conceptsCovered: ["Duration neglect", "Engineering the end", "The remembered experience over ticket volume"],
      stages: [
        {
          stageId: "stage-1-diagnose",
          label: "Week 1: Diagnosing the journey",
          elapsed: "Week 1",
          concept: "Duration neglect",
          lessonAnchor: "the-origin-real-research",
          situation:
            "Support ticket volume is dominated by 'my order was late' complaints (61% of tickets). But a separate NPS driver analysis shows the rider hand-off moment, not average delivery time, correlates most strongly with which customers churn after a bad experience.",
          dashboard:
            "Ticket volume: late delivery 61%, wrong item 22%, rider hand-off complaints 9%, other 8%.\nNPS driver regression: rider hand-off quality explains 3.2x more variance in churn than average delivery time.",
          spendToDate: "₹0 of ₹40L quarterly CX budget",
          budgetRemaining: "₹40L",
          decision: {
            prompt: "Where does the team's first sprint go?",
            options: [
              {
                id: "fix-handoff",
                label: "Redesign the rider hand-off moment (the actual churn driver), even though it's not the top ticket-volume complaint",
                verdict: "optimal",
                outcome:
                  "The team ships a redesigned hand-off flow (order-ready notification, a 10-second courtesy line for the rider). Ticket volume on hand-off complaints drops, and the NPS driver most tied to churn improves.",
                why: "This targets what Kahneman's research shows actually drives remembered experience, a specific emotional moment, not raw duration or ticket count.",
                lessonRef: "The Origin (Real Research)",
                nextStageId: "stage-2-end-design",
              },
              {
                id: "fix-average-time",
                label: "Fix average delivery time company-wide, since it's the top complaint by ticket volume",
                verdict: "acceptable",
                outcome:
                  "Average delivery time improves by 4 minutes. Ticket volume drops slightly, but NPS barely moves, because average duration isn't what customers actually remember.",
                why:
                  "Chasing the biggest ticket-volume bucket instead of the biggest NPS driver is a defensible instinct, but the lesson's duration-neglect finding predicts exactly this weak result.",
                lessonRef: "The Origin (Real Research)",
                nextStageId: "stage-2-end-design",
              },
              {
                id: "wait-for-data",
                label: "Hold the sprint and request another quarter of data before committing budget",
                verdict: "costly",
                outcome:
                  "The quarter closes with zero shipped improvements. Ticket volume and NPS are both flat. The board asks why the CX budget went unspent while churn stayed the same.",
                why:
                  "The lesson's core finding, that memory is driven by peak and end, not duration, was already strong enough evidence to act on. Waiting for certainty here means never acting.",
                lessonRef: "The Origin (Real Research)",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-2-end-design",
          label: "Week 4: Designing the end",
          elapsed: "Week 4",
          concept: "Engineering the end",
          lessonAnchor: "how-to-apply-it-ethically",
          situation:
            "With the hand-off fix in motion, the team has budget left for one more initiative before mid-quarter review. The delivery-complete notification, the very last touchpoint of every order, is currently a generic 'Your order has arrived' push.",
          dashboard: "Delivery-complete notification open rate: 71%. Post-delivery NPS survey response rate: 12%.",
          spendToDate: "₹18L of ₹40L quarterly CX budget",
          budgetRemaining: "₹22L",
          decision: {
            prompt: "What does the remaining budget fund next?",
            options: [
              {
                id: "redesign-end-notification",
                label:
                  "Redesign the delivery-complete notification with a personalized note and an automatic credit for any order that was late",
                verdict: "optimal",
                outcome:
                  "Post-delivery NPS survey response rate rises, and comments shift from complaints to compliments about the closing gesture, even on orders that were still late.",
                why: "This is the literal 'end' of every order, the lesson's own claim: spend design budget on the end, not the splashy homepage or hero moments.",
                lessonRef: "How to Apply It Ethically",
                nextStageId: "stage-3-measure",
              },
              {
                id: "generic-push-test",
                label: "A/B test a generic 'Thanks for ordering!' push notification for all orders",
                verdict: "acceptable",
                outcome: "Open rates tick up slightly. No measurable change in NPS or churn, the change was cosmetic, not emotional.",
                why: "A generic thank-you touches the end but doesn't engineer an actual emotional beat there.",
                lessonRef: "How to Apply It Ethically",
                nextStageId: "stage-3-measure",
              },
              {
                id: "skip-end-for-ads",
                label: "Skip the end-of-order redesign, redirect the remaining budget to paid acquisition ads instead",
                verdict: "costly",
                outcome:
                  "New-user signups tick up modestly, but existing-customer churn keeps bleeding out through the same weak final touchpoint no one fixed.",
                why:
                  "Acquisition spend can't fix a remembered-experience problem, this abandons the lesson's explicit guidance to spend design budget on the end.",
                lessonRef: "How to Apply It Ethically",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-3-measure",
          label: "Week 8: Measuring impact",
          elapsed: "Week 8",
          concept: "Duration neglect / remembered experience",
          lessonAnchor: "the-origin-real-research",
          situation:
            "Eight weeks in, hand-off complaints are down and the new closing notification has shipped. Quarterly NPS has risen 6 points. But the 'late delivery' ticket-volume bucket, the original top complaint by count, has barely moved.",
          dashboard: "Quarterly NPS: +6 pts. Late-delivery ticket volume: down 2% (was 61% of tickets, now 59%). Repeat-order rate: +4%.",
          spendToDate: "₹34L of ₹40L quarterly CX budget",
          budgetRemaining: "₹6L",
          decision: {
            prompt: "What's the recommendation for next quarter?",
            options: [
              {
                id: "scale-peak-end-fixes",
                label: "Scale the hand-off and end-of-order fixes to every city, and report NPS/repeat-rate, not ticket volume, as the primary CX metric",
                verdict: "optimal",
                outcome:
                  "The board approves scaling based on the NPS and repeat-order gains. Ticket volume is reframed internally as an operational metric, not a proxy for remembered experience.",
                why: "The data confirms the lesson's core claim directly: remembered experience (NPS, repeat orders) moved even though raw complaint volume barely budged.",
                lessonRef: "The Origin (Real Research)",
                nextStageId: "end",
              },
              {
                id: "pilot-longer",
                label: "Run one more quarter as a pilot in 2 cities before scaling company-wide",
                verdict: "acceptable",
                outcome: "Safe, slower. The gains hold in the pilot cities, but 3 months of company-wide impact are left on the table.",
                why: "Not wrong, just unnecessarily cautious given the pilot already produced a clear, statistically real NPS lift.",
                lessonRef: "The Origin (Real Research)",
                nextStageId: "end",
              },
              {
                id: "revert-chase-tickets",
                label: "Revert the changes and refocus the whole budget on cutting the late-delivery ticket-volume number",
                verdict: "costly",
                outcome:
                  "Ticket volume improves marginally next quarter, but NPS and repeat-order rate, the metrics that actually track churn, slide back down.",
                why:
                  "This misreads the entire quarter's evidence, the ticket-volume bucket was never the thing driving churn, and the data proved it. Reverting throws away a working fix.",
                lessonRef: "The Origin (Real Research)",
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
            role: "Model the budget allocation and track NPS/ticket-volume deltas across the three checkpoints",
            why: "Free, sufficient for a single-quarter budget-tracking exercise",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Document the rationale behind each budget decision as a lightweight decision log",
            why: "Free, keeps the 'why' attached to each choice for the quarterly review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Track real cohort-level NPS and repeat-order rate changes tied to each shipped fix",
            why: "Gives statistically real before/after cohort comparisons instead of aggregate quarterly deltas",
            required: false,
            fallback: "Google Sheets with manually pulled weekly NPS/ticket exports covers a single-quarter pilot",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A three-checkpoint decision log showing where the quarterly CX budget was allocated, the outcome of each choice, and a final recommendation on which metric (NPS/repeat-rate vs. ticket volume) should drive next quarter's CX budget.",
      sampleOutput:
        "Zomato CX budget simulation, decision log (excerpt)\n\n" +
        "Week 1: Funded the rider hand-off redesign over the top ticket-volume complaint\n" +
        "  Result: NPS driver improved, ticket volume on hand-off complaints dropped\n" +
        "Week 4: Funded a personalized delivery-complete notification with an auto-credit for late orders\n" +
        "  Result: Post-delivery survey response rate rose, comments shifted positive even on late orders\n" +
        "Week 8: Recommended scaling both fixes company-wide, reporting NPS/repeat-rate as the primary CX metric\n" +
        "  Result: Board approved scaling; ticket volume reframed as an operational, not a churn, metric",
      successCriteria: [
        "All three decision points are resolved with an option selected and its outcome recorded",
        "The final recommendation correctly identifies NPS/repeat-rate, not raw ticket volume, as the metric that tracked the fixes",
      ],
      portfolioReady: true,
    },
  ],
};
