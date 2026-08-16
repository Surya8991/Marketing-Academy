/**
 * Practice projects for the `copywriting` category.
 *
 * Two lessons covered in this module:
 *
 * 1. `copywriting-101` — deliberately built as archetype "teardown" (mode
 *    "teardown") plus archetype "rebuild" (mode "build"), NOT a plain
 *    rewrite-this-block build. PROJECTS_PLAN.md 11.2 and 11.8 both name
 *    copywriting-101 as the canonical failing build: a "rewrite this 150-word
 *    block" project is gameable because every mechanical check (you-vs-we
 *    ratio, sentence length, CTA word count) can be satisfied while the copy
 *    still sells nothing. Teardown forces the learner to find and justify
 *    real defects against an answer key instead of pattern-matching a style
 *    guide.
 *
 * 2. `headlines` — archetype "head-to-head" (mode "build") plus archetype
 *    "build-the-asset" (mode "build"). Per PROJECTS_PLAN.md 17.4's own
 *    topic-shape table, "a choice between named options -> head-to-head."
 *    Both projects share one numeric, threshold-based rubric (character
 *    count, specificity, benefit clarity, formula match, clarity penalty) so
 *    scoring is never a vague "which one do you like better."
 *
 * Specimen copy in both copywriting-101 projects is entirely
 * synthetic-realistic (TaskFlow, GreenCart, PulseFit are not real
 * products/companies). Real case companies are used only as the narrative
 * backdrop (an internship, a freelance trial task), never as the source of
 * the weak copy being torn down, so no real company's actual copy is
 * characterized as bad.
 */

import type { Project } from "@/lib/projects/types";

const HEADLINE_RUBRIC =
  "RUBRIC — score every headline 0, 1, or 2 on each of the four rows below, then sum for a total out of 8.\n\n" +
  "CRITERION         | 0 points                      | 1 point                        | 2 points\n" +
  "Character count    | under 25 or over 75 chars     | 25-39 or 61-75 chars           | 40-60 chars\n" +
  "Specificity        | no concrete number or fact     | one vague qualifier only       | at least one real number or named fact\n" +
  "Benefit clarity     | states a topic/feature only    | benefit implied, not stated    | reader can finish 'so that I ___' straight from the headline\n" +
  "Formula match       | no identifiable formula        | formula unclear or mixed       | clearly matches one of the six formulas\n\n" +
  "CLARITY PENALTY: if a reader has to decode wordplay or a pun before understanding the headline, subtract 2 points from the total (Common Mistakes: Mistake 1, clever over clear).\n\n" +
  "PUBLISH THRESHOLD: 6-8 = publish as-is. 4-5 = revise the weak row before testing. 0-3 = rewrite from scratch.";

export const COPYWRITING_PROJECTS: Record<string, Project[]> = {
  "copywriting-101": [
    {
      id: "copywriting-101-landing-copy-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Spot the Copy Killers: A Landing Page Teardown",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given two synthetic-realistic draft copy blocks, find every real defect that would tank conversions, rate its severity, and name the exact lesson concept it violates, without flagging the deliberate, effective choices sitting right next to the real mistakes.",
      companyId: "dollar-shave-club",
      scenario:
        "You're three weeks into an internship on Dollar Shave Club's growth marketing team. DSC built its name on famously sharp, punchy copy, so the bar for anything that ships is high. Your manager hands you two draft blocks written by teammates outside the copy team, a SaaS landing page hero and a marketing email, and asks you to red-line them before anything goes further, exactly the review DSC's own copy would have to survive.",
      brief:
        "Two specimens, one prompt each: read the copy, list every real defect using the lesson's own vocabulary (which mistake, which AIDA step it breaks), rate severity, and explain why it matters. Then do the harder part: name one or two things in each specimen that look like mistakes but are actually deliberate, effective techniques the lesson itself endorses. Getting the real defects right without also flagging the good stuff is the actual skill being tested here.",
      mode: "teardown",
      conceptsCovered: [
        "Step 1: Attention",
        "Step 3: Desire",
        "Step 4: Action",
        "Mistake 1: Writing About Yourself Instead of the Reader",
        "Mistake 3: Vague, Weak CTAs",
        "Mistake 4: No Specificity",
        "Mistake 5: Ignoring Skimmers",
      ],
      teardownItems: [
        {
          itemId: "taskflow-landing-hero",
          specimen:
            "HEADLINE: Welcome to TaskFlow\n\n" +
            "We are excited to announce our new project management platform.\n\n" +
            "TaskFlow was founded in 2019 by a team of ex-Google engineers. Our mission is to build the best project management software on the market. We are trusted by thousands of teams around the world, and our platform is used across dozens of industries every single day.\n\n" +
            "FEATURES\n" +
            "- 256GB of cloud storage per workspace\n" +
            "- 50+ third-party integrations\n" +
            "- Real-time sync across every device\n" +
            "- Unlimited boards and custom fields\n\n" +
            "No fluff. No 40-tab setup wizard. Just tasks.\n\n" +
            "Ready to get organized? Learn more about how TaskFlow can help your team below.\n\n" +
            "[Learn more]",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the hero section of TaskFlow's homepage, written by a teammate covering for the copywriter this week. List every real defect, rate its severity, and name the lesson concept it breaks. Then flag anything you almost marked as a defect but shouldn't have.",
          answerKey: [
            {
              defect:
                "The headline 'Welcome to TaskFlow' is a vague opener that names no benefit and no problem, it's a gatekeeper that fails before the reader gets anywhere.",
              severity: "critical",
              whyItMatters:
                "This is the exact example the lesson warns against by name, 'Welcome to our website' style openers waste the only moment you have to earn the rest of the read.",
              lessonRef: "Step 1: Attention — avoid vague openers like 'Welcome to our website'",
              owner: "you",
            },
            {
              defect:
                "The subhead and opening paragraph are entirely company-focused: 'We are excited...', 'Our mission...', 'We are trusted...' — three sentences in and the reader still hasn't heard a single thing about themselves.",
              severity: "critical",
              whyItMatters:
                "The reader arrived asking 'can this help me?' and this copy never answers. The lesson's own fix is direct: every 'we provide' can become 'you get.'",
              lessonRef: "Mistake 1: Writing About Yourself Instead of the Reader",
              owner: "you",
            },
            {
              defect:
                "'Trusted by thousands of teams around the world' is an unverifiable, round-number claim with no real figure behind it.",
              severity: "moderate",
              whyItMatters:
                "Vague claims are ignored; specific ones are believed. The lesson's own before/after is 'thousands' versus '4,317 marketing teams as of Q1 2025' — this copy chose the version that gets ignored.",
              lessonRef: "Mistake 4: No Specificity",
              owner: "you",
            },
            {
              defect:
                "The feature bullets (256GB storage, 50+ integrations, real-time sync, unlimited boards) list what the product does, never what the reader gets from it. 256GB of storage is the lesson's own textbook feature example, left unconverted.",
              severity: "critical",
              whyItMatters:
                "Desire is built on benefits, not specs. A reader has to do the feature-to-benefit translation themselves here, and most won't bother.",
              lessonRef: "Step 3: Desire — feature vs. benefit ('256GB of storage' vs. 'never delete a photo or app again')",
              owner: "you",
            },
            {
              defect:
                "The only call to action is a small text link reading 'Learn more' buried at the very bottom, not a button, and not a specific next step.",
              severity: "critical",
              whyItMatters:
                "'Learn more' is explicitly named as a non-CTA in the lesson, and formatting a CTA as a button instead of a text link alone increases clicks by 45%. This copy gets both wrong at once.",
              lessonRef: "Step 4: Action / Mistake 3: Vague, Weak CTAs",
              owner: "either",
            },
          ],
          distractors: [
            "\"No fluff. No 40-tab setup wizard. Just tasks.\" — this reads short and almost fragmented compared to the paragraph above it, which can look like a mistake. It isn't: three short, skimmable sentences that name the reader's actual frustration (bloated software) is exactly the structure-for-skimmers technique the lesson endorses, and it's the one line in this specimen written like the reader's own internal monologue.",
            "\"Ready to get organized?\" — a rhetorical question right before the CTA can look vague on first read. It isn't a vague opener problem here (that rule applies to headlines/gatekeepers), it names the exact benefit ('get organized') and functions as a natural bridge into the action step.",
          ],
          partialCredit: true,
        },
        {
          itemId: "greencart-email",
          specimen:
            "SUBJECT: GreenCart Update\n\n" +
            "Hi there,\n\n" +
            "GreenCart is an eco-friendly grocery delivery app that many customers love. We offer same-day delivery, a rewards program, a huge selection of organic products, and a carbon-offset option at checkout. Our app makes your life better and helps you shop more sustainably without the hassle of a regular grocery run. Many customers love us for our selection and our service, and we think you will too.\n\n" +
            "We're always working to improve GreenCart, and we have some exciting updates coming soon that we think you'll love.\n\n" +
            "Only 200 new-member spots open in your city this week.\n\n" +
            "Check out the app, browse our catalog, read customer reviews, or reply to this email with any questions.\n\n" +
            "– The GreenCart team",
          specimenSource: "synthetic-realistic",
          prompt:
            "This marketing email went out to GreenCart's waitlist last week and open rates were fine but clicks were nearly zero. List every real defect, rate severity, name the concept it breaks, and flag anything that looks wrong but isn't.",
          answerKey: [
            {
              defect:
                "Subject line 'GreenCart Update' names no benefit and creates no curiosity, it tells the reader nothing about why this email is worth opening.",
              severity: "critical",
              whyItMatters:
                "47% of email recipients decide whether to open based on the subject line alone. A subject line this generic is a coin flip at best.",
              lessonRef: "Step 1: Attention",
              owner: "you",
            },
            {
              defect:
                "'Many customers love us' appears twice and is never backed by a number, a name, or a proof point.",
              severity: "moderate",
              whyItMatters:
                "Repeating a vague claim doesn't make it more credible, it just uses twice the space to say nothing specific. The lesson's fix is a real figure, not a bigger adjective.",
              lessonRef: "Mistake 4: No Specificity",
              owner: "you",
            },
            {
              defect:
                "The feature list (same-day delivery, rewards program, organic selection, carbon-offset option) is never translated into a reader outcome, it's a spec sheet, not a pitch.",
              severity: "critical",
              whyItMatters:
                "Desire comes from what the reader gets, not a list of what the app does. None of these four features tells the reader what changes in their life.",
              lessonRef: "Step 3: Desire — feature vs. benefit",
              owner: "you",
            },
            {
              defect:
                "'Makes your life better' is the vaguest possible benefit claim, it could describe literally any product and proves nothing.",
              severity: "critical",
              whyItMatters:
                "This is Mistake 4 and the failure mode of Step 3 at the same time: a benefit statement with zero specificity behind it reads as filler, not a reason to act.",
              lessonRef: "Step 3: Desire / Mistake 4: No Specificity",
              owner: "you",
            },
            {
              defect:
                "The closing line offers four competing actions at once: check out the app, browse the catalog, read reviews, or reply to the email. None is positioned as the action.",
              severity: "critical",
              whyItMatters:
                "Emails with a single, focused CTA get 371% more clicks than ones with multiple competing links. This is the exact mistake the lesson's own statistic is warning against.",
              lessonRef: "Mistake 3: Vague, Weak CTAs",
              owner: "you",
            },
          ],
          distractors: [
            "\"Only 200 new-member spots open in your city this week\" can look like manufactured fake urgency, a common red flag. It isn't one here: it's specific (a real number), scoped (this city, this week), and matches the lesson's own finding that urgency words can lift sales by 332%, when the urgency is a genuine, specific claim rather than a vague 'act now.'",
            "\"– The GreenCart team\" as a short, informal sign-off can look under-produced next to a more polished brand email. It isn't a defect: it's the same instinct behind the Obama campaign's highest-performing subject line ever tested, just 'Hey', personal and human beats polished and corporate.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Optional second-opinion pass on your defect list, after you've written it",
            why: "Free tier is enough to sanity-check your own answer key once you've already done the analysis yourself. Using it before you've written your own list defeats the point of the exercise.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Notion",
            role: "Somewhere to write your defect list, severity ratings, and distractor notes",
            why: "Free tier handles a one-page teardown write-up with room to spare.",
            required: false,
            fallback: "Any notes app or plain text file works exactly as well, there's nothing Notion-specific about this task.",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Brand-voice-aware AI copy review for teams doing this kind of teardown at scale",
            why: "Useful if a whole team is standardizing copy QA against a shared style guide, not needed for this single exercise.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This entire project is completable for free with a notes app and your own judgment. Nothing paid adds anything a solo learner needs here.",
      },
      deliverable:
        "A written teardown of both specimens: every real defect found, its severity, the lesson concept it violates, plus the one or two deliberate/effective choices you correctly did NOT flag.",
      sampleOutput:
        "TASKFLOW HERO — 5 defects found: (1) vague headline, critical, Step 1; (2) company-focused opening, critical, Mistake 1; (3) 'trusted by thousands' unverifiable claim, moderate, Mistake 4; (4) feature bullets never translated to benefits, critical, Step 3; (5) buried text-link CTA, critical, Step 4/Mistake 3. Correctly NOT flagged: the short fragment closer ('No fluff...') and the rhetorical question before the CTA, both are deliberate skimmer-friendly, reader-voiced techniques the lesson endorses, not mistakes. For comparison, Mailchimp's own early marketing leaned on this same short, plain-spoken register (its bootstrapped, un-corporate brand voice was a large part of what took it to a $12B acquisition) rather than polished corporate phrasing, which is why a short fragment isn't automatically a red flag.",
      successCriteria: [
        "Finds all 5 real defects in both specimens (10 total), not a partial list",
        "Assigns a severity to every defect that roughly matches the answer key (critical items are not downgraded to cosmetic)",
        "Names the specific lesson concept (step or mistake) each defect violates, not just 'this is bad'",
        "Correctly identifies at least one distractor per specimen as a deliberate, effective choice rather than a defect",
      ],
      portfolioReady: false,
    },
    {
      id: "copywriting-101-rebuild-the-page",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild It: Turn Weak Copy Into a Converting Page",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a landing page hero with five named, lesson-mapped defects, rewrite it from scratch applying the AIDA structure, benefit framing, specificity, and a single strong CTA, then compare your rewrite's approach against a sample rebuild of a different product.",
      companyId: "zomato",
      scenario:
        "Zomato's growth marketing team runs the same trial task for every copywriter finalist: fix a real weak draft before they'll trust you with an actual campaign. The draft below was written by a product manager covering for a copywriter on leave, not a professional copywriter, and it reads like it.",
      brief:
        "Below is the PulseFit homepage hero draft, plus the five defects your reviewer already named for you (this project skips the finding step, that was the last project, this one is about the fix). Rewrite the whole block: new headline, new opening, benefit-framed features, one clear CTA, structured so a skimmer gets the full pitch from headlines and bullets alone.\n\n" +
          "SPECIMEN — PulseFit homepage hero:\n\n" +
          "PulseFit: A Fitness App\n\n" +
          "PulseFit was created in 2022 by a team of certified trainers and engineers who wanted to build a better fitness experience. Our app includes over 500 workout videos, a food logging feature, community forums, and integration with popular wearables. We think fitness should be accessible to everyone, and we've worked hard to create an app that helps people reach their goals.\n\n" +
          "If you're interested in learning more about what PulseFit can do for you, feel free to check out the app in the App Store or Google Play.\n\n" +
          "Download Now\n\n" +
          "NAMED DEFECTS TO FIX:\n" +
          "1. Headline and opening paragraph are company-history-focused ('was created in 2022 by...'), not reader-focused. (Mistake 1)\n" +
          "2. Features (500 workout videos, food logging, forums, wearable integration) are listed with zero benefit translation. (Step 3: Desire)\n" +
          "3. 'Helps people reach their goals' is a maximally vague benefit claim with no specificity or proof. (Mistake 4)\n" +
          "4. The CTA is hedged ('feel free to check out') and then contradicted by a disconnected, abrupt 'Download Now' that doesn't match the sentence before it. (Step 4 / Mistake 3)\n" +
          "5. The whole block is dense paragraph text with no bullets or bold, nothing for a skimmer to catch. (Mistake 5)",
      mode: "build",
      conceptsCovered: [
        "How It Works: The AIDA Playbook",
        "Step 1: Attention",
        "Step 3: Desire",
        "Step 4: Action",
        "Mistake 1: Writing About Yourself Instead of the Reader",
        "Mistake 2: Burying the Benefit",
        "Mistake 4: No Specificity",
        "Mistake 5: Ignoring Skimmers",
      ],
      toolStack: {
        free: [
          {
            toolName: "Claude",
            role: "Optional brainstorming partner for alternate headline angles, after your first full draft",
            why: "Free tier is enough for a few rounds of 'give me 3 more headline directions' once you already have a complete draft to compare against, it should never write the first draft for you.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Notion",
            role: "Drafting space for the rewrite",
            why: "Free tier is plenty for one landing page block.",
            required: false,
            fallback: "Any word processor or plain text editor works identically.",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Brand-voice-controlled drafting for teams rebuilding pages at volume",
            why: "Only worth it past a handful of pages a week; a single rebuild like this one doesn't need it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path, your own draft plus an optional AI brainstorm afterward, is the complete path. Paid tools only pay off at team scale.",
      },
      deliverable:
        "A full rewritten PulseFit hero section (headline, opening line, benefit-led feature list, single CTA) that fixes all five named defects, plus a 2-3 sentence note explaining what changed and why for each defect.",
      sampleOutput:
        "Here's the same kind of fix applied to a different product, not PulseFit, so you can see the technique without copying the answer. A SaaS support tool in Freshworks' benefit-first register might rebuild a weak 'HelpDeskPro was founded in 2021...' opener into: Headline: 'Close support tickets in half the time, without hiring anyone new.' Opening: 'Your team is drowning in tickets, not because they're slow, because the tools are.' Features rewritten as benefits: '500+ workout videos' becomes 'Never run out of a routine that fits today's mood' style translation, i.e. every spec gets a 'so you can ___' clause. CTA: one button, 'Start free, no card needed', nothing else on the page competing with it.",
      successCriteria: [
        "New headline names a specific reader benefit or outcome, not company history or a generic welcome",
        "Every one of the four listed features is translated into a 'so you can ___' reader benefit, not left as a spec",
        "At least one claim in the rewrite is specific (a number, a timeframe, a named proof point) rather than vague",
        "Exactly one CTA appears, phrased as a specific action, not a hedge",
        "Copy is structured with short paragraphs and/or bullets so a skimmer gets the full pitch without reading every word",
      ],
      portfolioReady: true,
    },
  ],
  "headlines": [
    {
      id: "headlines-head-to-head-scoring",
      tier: "core",
      archetype: "head-to-head",
      title: "Head-to-Head: Score Four Term-Insurance Blog Headlines",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given four headline options for the same blog post, score each one against a numeric, threshold-based rubric built from the lesson's own formulas and rules, then recommend a winner backed by the scores, not a gut feeling.",
      companyId: "policybazaar",
      scenario:
        "You're doing a paid trial task for PolicyBazaar's content marketing team. They've drafted four headline options for a new blog post aimed at first-time term insurance buyers and want a scored recommendation, not a personal opinion, before it goes onto the editorial calendar and into an A/B test.",
      brief:
        HEADLINE_RUBRIC +
        "\n\nFOUR HEADLINE OPTIONS FOR THE SAME BLOG POST:\n\n" +
        "H1: \"7 Mistakes First-Time Term Insurance Buyers Make in India\" (57 characters)\n" +
        "H2: \"PolicyBazaar Explains Term Insurance\" (36 characters)\n" +
        "H3: \"Buy the Right Term Cover in 15 Minutes, No Agent Calls\" (54 characters)\n" +
        "H4: \"Are You Really, Truly, 100% Sure Your Family Would Be Protected If Something Happened Tomorrow?\" (97 characters)\n\n" +
        "Score all four against every row of the rubric, apply the clarity penalty if it's earned, sum each total, and write a 2-3 sentence recommendation naming the winner and the specific formula and rule it satisfies.",
      mode: "build",
      conceptsCovered: [
        "How It Works",
        "Psychological Triggers That Work",
        "Common Mistakes",
      ],
      toolStack: {
        free: [
          {
            toolName: "CoSchedule Headline Analyzer",
            role: "Optional automated cross-check of your character counts and word balance after you've scored manually",
            why: "Free web tool, good for confirming your own char-count math, not a substitute for applying the rubric yourself.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://coschedule.com/headline-analyzer",
            inlinePricing: "Free",
          },
          {
            toolName: "Advanced Marketing Institute Headline Analyzer",
            role: "Optional cross-check of emotional marketing value against the specificity/benefit rows",
            why: "Free web tool that scores emotional pull, useful as a second opinion on the specificity and benefit-clarity rows, not a replacement for your own scoring.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://www.aminstitute.com/headline/",
            inlinePricing: "Free",
          },
          {
            toolName: "Notion",
            role: "Building the 4x4 scoring table",
            why: "Free tier handles a small table with totals easily.",
            required: false,
            fallback: "A plain text table or a sheet of paper with the same four rows works identically, manual character counting is fine too.",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Generating additional headline variants at scale for teams testing many options a week",
            why: "Not needed to score four already-written headlines, only useful if generating dozens of new options.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Scoring four given headlines needs nothing but the rubric and basic character counting. The free tools above are optional cross-checks, not requirements.",
      },
      deliverable:
        "A completed 4-headline by 4-criteria scored table with totals and the clarity-penalty check applied to each row, plus a 2-3 sentence written recommendation naming the winner.",
      sampleOutput:
        "Sample scoring for a different brand's headline pair, not PolicyBazaar's set, to show the expected format. Care.com testing 'Find a Babysitter Near You Tonight' (39 chars, 1pt) against 'How 31.7M Families Found Trustworthy Care' (43 chars, 2pt; specificity 2pt for the real member count; benefit clarity 1pt, implied not stated; Specific Promise/Social Proof blend, 1pt formula match; total 6/8, publish range) versus the first option (1+0+1+1=3/8, rewrite range because 'tonight' alone isn't a real specificity anchor and no formula is clearly used). The second headline wins on the strength of its real, cited number.",
      successCriteria: [
        "All four headlines scored on all four rubric rows, not summarized qualitatively",
        "Character counts are computed, not eyeballed, and match roughly the counts given",
        "H2 is correctly identified as company-focused with no formula match and a near-bottom score (rewrite-from-scratch range)",
        "H3 is correctly identified as the highest scorer (8/8, publish range) with the Specific Promise formula named",
        "Recommendation cites at least one specific rubric row or lesson rule, not just 'H3 feels stronger'",
      ],
      portfolioReady: true,
    },
    {
      id: "headlines-build-the-asset",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Asset: Write 5 Original Headlines and Score Your Own Work",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Write five original headlines for a real content brief, each using a genuinely different formula, then self-score every one against the same numeric rubric and pick the strongest option with a written justification.",
      companyId: "nykaa",
      scenario:
        "A beauty content team modeled on Nykaa's creator-and-content-led growth strategy needs five headline options for a new blog post: 'How to Build a Skincare Routine for Humid Indian Summers.' They want five genuinely different angles, not five reworded versions of the same idea, each scored honestly before anything goes to the editorial calendar.",
      brief:
        HEADLINE_RUBRIC +
        "\n\nTHE BRIEF: write 5 original headlines for a blog post titled internally 'How to Build a Skincare Routine for Humid Indian Summers,' aimed at first-time skincare buyers in India.\n\n" +
        "CONSTRAINT: your five headlines must use at least 4 of the 6 formulas (Number List, How-To, Question, Specific Promise, Secret/Shortcut, Social Proof) between them. Five near-duplicate headlines using the same formula fails this project even if each one is individually decent.\n\n" +
        "For every headline, state: the formula used, the character count, and its full rubric score (all four rows plus the clarity-penalty check). Then pick the one you'd actually publish and justify it in 2-3 sentences.",
      mode: "build",
      conceptsCovered: [
        "How It Works",
        "Psychological Triggers That Work",
        "Common Mistakes",
        "Key Takeaways",
      ],
      toolStack: {
        free: [
          {
            toolName: "CoSchedule Headline Analyzer",
            role: "Optional cross-check on character count and clarity after you've written your five",
            why: "Free web tool, useful to confirm your own counts once your five headlines are drafted.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://coschedule.com/headline-analyzer",
            inlinePricing: "Free",
          },
          {
            toolName: "Claude",
            role: "Optional brainstorming aid to check formula variety, used only after your own first five",
            why: "Free tier can sanity-check whether your five headlines actually span 4+ distinct formulas, it should not write your headlines for you.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Bulk headline generation for teams shipping many posts a week",
            why: "Overkill for writing and scoring five headlines by hand.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Writing and self-scoring five headlines needs nothing beyond the rubric itself. Every tool above is an optional cross-check, never a requirement.",
      },
      deliverable:
        "Five original headlines for the given brief, each labeled with its formula, character count, and full rubric score, plus a 2-3 sentence justification for the one selected to publish.",
      sampleOutput:
        "Sample format from a different brief, not the skincare one, to show what 'done' looks like. For a Zomato blog post on 'ordering food late at night without regret,' one headline in a five-set might be: 'The 9pm Order That 40,000 Bangalore Users Made Last Month' (58 chars; specificity 2pt for the real-sounding named number and city; benefit clarity 1pt, implied through social proof rather than stated outright; Social Proof formula, 2pt; char count 2pt; total 7/8, publish range). Each of the other four in that same set would need to use a different formula, a How-To or Question headline sitting next to this Social Proof one, not another Social Proof variant.",
      successCriteria: [
        "Exactly 5 headlines submitted, spanning at least 4 of the 6 distinct formulas",
        "Character count stated and correct (within a character or two) for every headline",
        "Every headline scored against all 4 rubric rows plus the clarity-penalty check, shown as work not just a final number",
        "Selected winner has the highest total score, or the write-up gives a specific, rubric-referenced reason for picking a lower scorer",
        "At least one headline in the set contains a specific, provable number or named fact, not just adjectives",
      ],
      portfolioReady: true,
    },
    {
      id: "headlines-teardown-specimen-score",
      tier: "mini",
      archetype: "teardown",
      title: "Would It Win the Test? Score Three Headline Specimens",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three synthetic-realistic headline candidates drafted for the same blog brief, decide whether each would win an A/B test, name every real defect using the lesson's own vocabulary, and correctly recognize which near-defect is actually a deliberate, effective choice.",
      companyId: "drunk-elephant",
      scenario:
        "You're doing a one-day trial task for a clean-beauty content team modeled on Drunk Elephant's ingredient-education positioning. They've drafted three headline candidates for a blog post about their 'Suspicious 6' ingredient-exclusion list and want a scored teardown before anything reaches the editorial calendar.",
      brief:
        "Three specimens, one prompt each: read the headline, decide whether it would win an A/B test, and name every real defect, tying each one to a specific Step, Mistake, or Trigger from the lesson (not a vague opinion). Rate each defect's severity. For the third specimen, do the harder part too: name at least one thing you almost flagged as a defect but correctly recognized was not one.",
      mode: "teardown",
      conceptsCovered: ["How It Works", "Common Mistakes", "Psychological Triggers That Work"],
      teardownItems: [
        {
          itemId: "specimen-1-vague-topic-opener",
          specimen: "Why Ingredients Matter",
          specimenSource: "synthetic-realistic",
          prompt:
            "Headline candidate #1 for the Suspicious 6 blog post. Would this win the test? Name every real defect.",
          answerKey: [
            {
              defect:
                "Names a topic ('ingredients') with no benefit and no specific claim, it never tells the reader what they get for clicking.",
              severity: "critical",
              whyItMatters:
                "A topic-only headline gives a skimmer nothing to act on. It fails at the benefit-or-fear test before formula or length even matter.",
              lessonRef: "Step 1: Identify the Single Biggest Benefit or Fear",
              owner: "you",
            },
            {
              defect:
                "Uses none of the lesson's six formulas, no number, no how-to, no question, no promise, no secret, no social proof.",
              severity: "moderate",
              whyItMatters:
                "Formula-free headlines rely entirely on topic interest, which is the hardest way to earn a click and the easiest one to ignore.",
              lessonRef: "Step 2: Choose Your Formula",
              owner: "you",
            },
          ],
          distractors: [
            "It is short, at 22 characters, that alone is not the defect, the 40-60 rule protects against truncation, it does not set a hard minimum.",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-overclaim-vague-hook",
          specimen: "This One Ingredient Swap Will Change Your Skin Forever",
          specimenSource: "synthetic-realistic",
          prompt:
            "Headline candidate #2 for the same post. Would this win the test? Name every real defect.",
          answerKey: [
            {
              defect:
                "'Change Your Skin Forever' is a sweeping, unfalsifiable claim with no real number or timeframe behind it.",
              severity: "critical",
              whyItMatters:
                "This is the exact shape of the lesson's own 'Make $10,000 This Weekend' warning, credibility breaks the moment the reader's real experience does not match.",
              lessonRef: "Mistake 3: Over-Promising",
              owner: "you",
            },
            {
              defect:
                "'This one ingredient' names no ingredient and no source, a vague qualifier where the lesson calls for a real number or named fact.",
              severity: "moderate",
              whyItMatters:
                "Specificity is what makes a claim believable. An unnamed 'one ingredient' invites skepticism instead of clicks.",
              lessonRef: "Psychological Triggers That Work, Specificity",
              owner: "you",
            },
          ],
          distractors: [
            "Using a curiosity gap is not itself the defect, curiosity gaps work fine when paired with a credible promise, the problem here is that the promise underneath is not credible.",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-strong-with-trap",
          specimen: "The 6 Ingredients We Will Never Put In Your Skincare (And Why)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Headline candidate #3 for the same post. Would this win the test? Name every real defect, then name at least one thing you almost flagged that is not actually a defect.",
          answerKey: [
            {
              defect:
                "At 63 characters this runs a few characters past the 40-60 sweet spot and may truncate in some email clients, worth trimming before it ships to an email send.",
              severity: "cosmetic",
              whyItMatters:
                "Step 3's rule exists specifically to avoid channel truncation. A few characters over is a real, if minor, risk worth a quick edit.",
              lessonRef: "Step 3: Apply the 40-60 Character Rule",
              owner: "you",
            },
          ],
          distractors: [
            "The parenthetical '(And Why)' is not a defect, it is a legitimate curiosity-gap extension of the Number List formula, not clutter to cut.",
            "'Never' is not the same over-promise as 'Forever' in specimen 2, it is a specific, falsifiable exclusion claim tied to the brand's real ingredient policy, exactly the kind of specificity the lesson rewards.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the 3-specimen defect table with severity and lesson reference columns",
            why: "Free spreadsheet tool, more than enough for a 3-row scoring table.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "CoSchedule Headline Analyzer",
            role: "Optional character-count cross-check on specimen 3's borderline length",
            why: "Free web tool, useful only to confirm the exact character count, not to find the defects themselves.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://coschedule.com/headline-analyzer",
            inlinePricing: "Free",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Scoring three given headlines against the lesson's own concepts needs nothing beyond a spreadsheet and your own judgment. No paid tool adds anything here.",
      },
      deliverable:
        "A completed defect list for all three specimens (defect, severity, lesson reference for each) plus a short written note on the specimen-3 issue you correctly did not flag as a defect.",
      sampleOutput:
        "Sample scoring format from a different brief, not the Suspicious 6 post, to show what 'done' looks like. For a men's grooming brand's candidate 'The Beard Oil Ingredient Most Brands Skip (And Why It Matters)': no critical defect found, one cosmetic note that at 61 characters it sits one over the sweet spot, and the parenthetical correctly left unflagged since it extends the curiosity gap rather than clutters it.",
      successCriteria: [
        "Correctly identifies the critical defect in specimen 1 (topic-only opener, no benefit, no formula)",
        "Correctly identifies both the over-promising defect and the specificity defect in specimen 2, as two separate issues",
        "Does not mark the parenthetical or the word 'Never' in specimen 3 as defects",
        "Every defect named is tied to a specific lesson Step, Mistake, or Trigger, not a personal opinion",
      ],
      portfolioReady: true,
      stretch:
        "Write a fourth headline candidate for the same Suspicious 6 brief that would score highest against Steps 2-6, then explain which formula and which psychological trigger you deliberately chose.",
    },
    {
      id: "headlines-reverse-engineer-real-winners",
      tier: "core",
      archetype: "reverse-engineer",
      title: "Reverse-Engineer Three Real Winning Headlines, Then Apply the Pattern",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Analyze three real, cited headline and subject-line wins to name exactly which formula and psychological trigger drove each result, then apply the same reverse-engineered patterns, not the same words, to write three original headlines for a new brief.",
      companyId: "ustraa",
      scenario:
        "A men's grooming content team modeled on Ustraa's category-education content strategy is planning a new blog post, 'Why Your Beard Itches in Humid Indian Summers (And How to Stop It),' and wants headline options built on patterns proven to work in real campaigns, not guesses.",
      brief:
        "THREE REAL, CITED HEADLINE WINS TO REVERSE-ENGINEER:\n\n" +
        "1. Microsoft Bing's advertising interface: the feature-focused 'New Tab Features' was rewritten to the benefit-focused 'Open Tabs Faster.' The change contributed to a documented $100 million revenue increase for Bing's ad platform.\n\n" +
        "2. AwayFind's homepage, May 2012: 'Let us find your urgent messages' was rewritten to 'Get AWAY from your inbox, let urgent emails cut through the clutter and FIND you...instantly.' Trial registrations increased 91% and clicks to the sign-up page increased 42%. Source: MarketingSherpa, https://www.marketingsherpa.com/article/case-study/91-conversion-lift-from-new.\n\n" +
        "3. Obama for America, June 26, 2012: the fundraising email subject line 'I will be outspent' raised $2.5 million in a single send, one of the campaign's best-performing emails. Source: ABC News, https://abcnews.com/blogs/politics/2012/11/odd-obama-email-subject-lines-drew-huge-cash.\n\n" +
        "FOR EACH of the three, name the formula (if any, from the lesson's six) and the psychological trigger (from the lesson's five) that best explains why the rewrite outperformed the original.\n\n" +
        "THEN, for the Ustraa-style beard-care brief above, write THREE original headlines. Each one must deliberately apply one of the three patterns you just identified, the underlying technique, not the same wording. Label every headline with the real example its pattern borrows from, plus the formula and trigger it uses.",
      mode: "build",
      conceptsCovered: ["How It Works", "Psychological Triggers That Work", "Real Company Examples"],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the 3-row reverse-engineering table and the 3-headline output table",
            why: "Free spreadsheet tool, handles both small tables easily.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "CoSchedule Headline Analyzer",
            role: "Optional character-count and clarity cross-check on your three finished headlines",
            why: "Free web tool, a useful sanity check after you have written your three headlines, not a substitute for the pattern analysis.",
            required: false,
            lastVerified: "2026-08-12",
            inlineUrl: "https://coschedule.com/headline-analyzer",
            inlinePricing: "Free",
          },
          {
            toolName: "ChatGPT",
            role: "Optional second opinion on whether your three headlines actually apply three genuinely different patterns",
            why: "Free tier is enough to sanity-check pattern variety, it should not write the headlines for you.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Generating additional headline variants at scale for teams testing many patterns a week",
            why: "Not needed to reverse-engineer three examples and write three headlines by hand.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The full task, analyzing three real examples and writing three original headlines, needs nothing beyond a spreadsheet and the lesson itself. Every tool above is an optional cross-check.",
      },
      deliverable:
        "A 3-row reverse-engineering table (real example, formula identified, trigger identified) plus 3 original headlines for the beard-care brief, each labeled with the real example its pattern borrows from and the formula/trigger it uses.",
      sampleOutput:
        "Sample format using a different real example, not one of the three in the brief, to show what 'done' looks like. Optimizely's documented personalization work (a 20-30% conversion lift on enterprise SaaS pages, cited earlier in this lesson) reverse-engineers to: pattern = matching the headline to the reader's specific situation rather than a generic claim; trigger = Specificity. Applied to a men's grooming brief, a headline borrowing that same pattern might read: 'Beard Care for Humid Indian Summers: The 4-Step Routine That Actually Works' (Specific Promise formula, Specificity trigger, borrowing the same 'name the specific situation' move Optimizely's personalization relies on).",
      successCriteria: [
        "Correctly identifies 'Open Tabs Faster' as a benefit-led rewrite rather than naming an unrelated formula",
        "Correctly identifies the AwayFind rewrite as benefit-anchored copy, not a Number List or Question formula",
        "Correctly identifies 'I will be outspent' as using the Fear of Loss (loss-aversion) trigger, not Curiosity Gap",
        "All three new headlines are genuinely different from each other, not the same idea restated three times",
        "Each new headline is explicitly labeled with the real example it borrows its pattern from and the formula/trigger it uses",
      ],
      portfolioReady: true,
      stretch:
        "Score all three of your new headlines against the 40-60 character rule and the odd-number rule, then revise any headline that fails either check.",
    },
  ],

  "aida-pas-frameworks": [
    {
      id: "aida-pas-cold-email-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Missing Stage: AIDA & PAS Copy Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate two synthetic sales copy drafts (a cold outreach email and a social ad) to identify where psychological stages are skipped, diagnose the conversion impact of weak transitions, and distinguish real structural defects from deliberate, effective copy choices.",
      companyId: "slack",
      scenario:
        "You're reviewing inbound sales enablement and ad copy at Slack (acquired by Salesforce for $27.7B). The growth team is testing copy to convert enterprise teams away from fragmented email threads into Slack channels. You've received two draft specimens from junior copywriters: a cold email claiming to use PAS, and a sponsored LinkedIn post attempting AIDA. Both are underperforming.",
      brief:
        "Audit both specimens against the core AIDA and PAS frameworks. Identify every structural defect (such as skipping the Agitate stage or using generic Action CTAs), explain the exact conversion risk, reference the violated lesson concept, and verify that deliberate techniques are not falsely flagged as errors.",
      mode: "teardown",
      conceptsCovered: [
        "AIDA, Four Stages",
        "PAS, Three Stages",
        "Choosing the Right Framework",
        "Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "fragmented-team-cold-email",
          specimen:
            "SUBJECT: Fix your team communication with Slack\n\n" +
            "Hi Sarah,\n\n" +
            "Are you tired of cluttered email inboxes and slow response times among your engineering leads?\n\n" +
            "Slack offers 2,600+ app integrations, enterprise-grade channel security, and real-time audio huddles that let your team connect instantly.\n\n" +
            "Over 750,000 businesses use Slack to communicate every day. You can sign up for a trial on our website whenever you have a moment.\n\n" +
            "Best,\n" +
            "The Outbound Team\n\n" +
            "[Learn more]",
          specimenSource: "synthetic-realistic",
          prompt:
            "This outbound email was drafted for a warm, problem-aware audience using PAS. Identify all structural defects, rate their severity, and name the violated lesson concept. Note any non-defects you chose not to flag.",
          answerKey: [
            {
              defect:
                "The copy completely skips the Agitate stage: it asks a Problem question and immediately pivots to product features without making the reader feel the ongoing cost of lost hours, siloed context, and delayed project sprints.",
              severity: "critical",
              whyItMatters:
                "Without the Agitate step, a pain point feels like a minor background inconvenience rather than an urgent priority requiring immediate budget and tool adoption.",
              lessonRef: "Common Mistakes: Mistake 1, Skipping Agitate in PAS",
              owner: "you",
            },
            {
              defect:
                "The Action step is passive and frictionless-free: 'whenever you have a moment' paired with a generic '[Learn more]' link offers no compelling reason to act now.",
              severity: "critical",
              whyItMatters:
                "The lesson notes personalized, specific CTAs convert 202% better; passive placeholders fail to drive next steps.",
              lessonRef: "Common Mistakes: Mistake 2, Using a generic Action in AIDA",
              owner: "you",
            },
            {
              defect:
                "The solution stage is packed with technical feature specs ('2,600+ app integrations') instead of reader-focused outcomes and workflow relief.",
              severity: "moderate",
              whyItMatters:
                "Desire and Solution stages must focus on how work feels after the fix, not a product specification sheet.",
              lessonRef:
                "Common Mistakes: Mistake 5, Overloading the Desire stage with features instead of benefits",
              owner: "you",
            },
          ],
          distractors: [
            "The opening subject line mentions the brand name",
            "The email includes social proof citing 750,000 businesses",
            "The email body is under 150 words",
          ],
          partialCredit: true,
        },
        {
          itemId: "sponsored-social-ad-draft",
          specimen:
            "HEADLINE: Modern Collaboration Software for High-Growth Teams\n\n" +
            "Managing remote developers is challenging when communication gets lost across timezones. Our platform centralizes discussions and speeds up code deployment cycles by 35%.\n\n" +
            "Click below to explore our enterprise tier options.\n\n" +
            "[Click here]",
          specimenSource: "synthetic-realistic",
          prompt:
            "This LinkedIn feed ad was drafted using AIDA for cold prospect traffic. Spot all structural defects preventing it from converting cold prospects.",
          answerKey: [
            {
              defect:
                "The headline fails the Attention stage: 'Modern Collaboration Software for High-Growth Teams' is a generic label that does not stop the scroll with a bold hook, surprising stat, or provocative question.",
              severity: "critical",
              whyItMatters:
                "80% of readers never get past the headline; a generic headline kills the copy before Interest or Desire can even be read.",
              lessonRef: "AIDA, Four Stages: Step 1, Attention",
              owner: "you",
            },
            {
              defect:
                "The CTA button uses the placeholder text '[Click here]' instead of a specific, high-intent action specifying what the user gets.",
              severity: "critical",
              whyItMatters:
                "Generic 'Click here' placeholders fail to tell the reader what happens next or provide a reason to act now.",
              lessonRef: "Common Mistakes: Mistake 2, Using a generic Action in AIDA",
              owner: "you",
            },
            {
              defect:
                "Jumps straight to 'enterprise tier options' without building sufficient Desire or social proof for a cold audience that does not know the product.",
              severity: "moderate",
              whyItMatters:
                "Cold audiences require vivid outcome descriptions and proof points before evaluating enterprise sales tiers.",
              lessonRef: "AIDA, Four Stages: Step 3, Desire",
              owner: "you",
            },
          ],
          distractors: [
            "Targeting remote developers narrows the audience too specifically",
            "Including a concrete metric ('35% faster code deployment') harms credibility",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Copy annotation and defect scoring",
            why: "Clean text markup without account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed teardown score sheet with defects categorized by severity and lesson concept references, plus identified effective patterns.",
      sampleOutput:
        "NOTION — INBOUND AD COPY TEARDOWN\n\n" +
        "SPECIMEN: \"All-in-one workspace for your team docs and wiki. Stop wasting time looking for files. Sign up today.\"\n\n" +
        "DEFECT 1 (Severity: Critical | Ref: AIDA, Four Stages: Step 1, Attention)\n" +
        "  Opening line states a feature category rather than a hook that stops the scroll. Lacks an arresting stat, provocative question, or customer-centric insight.\n\n" +
        "DEFECT 2 (Severity: Critical | Ref: PAS, Three Stages: Step 2, Agitate)\n" +
        "  Problem ('wasting time looking for files') leaps straight to Solution without Agitation. No visceral articulation of context-switching friction or delayed project launches.\n\n" +
        "DEFECT 3 (Severity: Moderate | Ref: Common Mistakes: Mistake 2, Using a generic Action in AIDA)\n" +
        "  'Sign up today' is generic. Better: 'Try Notion free with your team — no credit card required.'\n\n" +
        "DISTRACTOR VERIFICATION:\n" +
        "  The phrasing 'All-in-one workspace' is clear positioning, not a defect.",
      successCriteria: [
        "Identifies missing Agitate stage in the PAS specimen",
        "Pinpoints generic headline and CTA placeholder in the AIDA specimen",
        "Accurately separates real structural flaws from intentional copy choices",
      ],
      portfolioReady: false,
    },
    {
      id: "aida-pas-framework-rebuild",
      tier: "mini",
      archetype: "build-the-asset",
      title: "From Blank Page to Framework: Drafting AIDA & PAS Asset Pairs",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Draft two complementary conversion copy assets for a B2B SaaS launch—a cold-audience AIDA landing page hero section and a pain-aware PAS email follow-up—ensuring every psychological stage is fully developed before publication.",
      companyId: "freshworks",
      scenario:
        "Freshworks (Nasdaq: FRSH) is rolling out a new AI-powered customer service ticketing assistant for mid-market IT support teams. As the product marketing copywriter, you need to deliver two structured copy assets: an AIDA-structured landing page hero to hook cold ad visitors, and a 200-word PAS email to re-engage warm IT managers who signed up for a webinar on ticket backlog reduction.",
      brief:
        "Write two distinct copy assets in Google Docs. Asset 1 must execute all 4 stages of AIDA with a question hook, proof-backed desire, and a specific CTA. Asset 2 must execute PAS with at least 3 sentences of painful agitation before introducing the AI resolution engine. Complete a framework-channel alignment matrix in Google Sheets.",
      mode: "build",
      conceptsCovered: [
        "AIDA, Four Stages",
        "PAS, Three Stages",
        "Choosing the Right Framework",
      ],
      steps: [
        {
          stepId: "step-1-aida-landing-hero",
          concept: "AIDA, Four Stages",
          lessonAnchor: "aida-four-stages",
          theoryRecap:
            "AIDA moves cold audiences through Attention, Interest, Desire, and Action. Question-based headlines lift traffic by up to 480%, and the Action stage requires a single specific outcome CTA.",
          question:
            "How do you structure an Attention hook and Desire proof point for IT managers who have never heard of this specific AI assistant?",
          toolName: "Google Docs",
          where:
            "Open a blank Google Doc, create a section titled 'Asset 1: AIDA Landing Hero', and create 4 labelled sub-blocks: [Attention], [Interest], [Desire], [Action].",
          procedure: [
            "Draft an Attention headline using a provocative question or quantified benchmark about unresolved IT ticket backlogs",
            "Write 2 sentences of Interest explaining why traditional ticketing queues break during product updates",
            "Build Desire with a specific outcome metric (e.g. 45% automated resolution within 60 seconds) and customer proof",
            "Write an Action button CTA specifying exact immediate value rather than 'Submit' or 'Learn More'",
          ],
          outputSample:
            "[Attention]: Still spending 4 hours a day manually routing Tier-1 IT helpdesk tickets?\n" +
            "[Interest]: When system updates roll out, repetitive password and access requests drown your senior sysadmins in busywork.\n" +
            "[Desire]: Freshdesk Omni AI resolves 45% of recurring tickets instantly—freeing your team to focus on critical infrastructure uptime.\n" +
            "[Action]: [Start 14-Day Free IT Helpdesk Trial →]",
          healthy:
            "All four stages are explicitly represented with a benefit-driven Desire stage and an action-oriented CTA.",
          unhealthy:
            "Headline is a vague company statement ('Welcome to Freshworks AI') or Desire focuses purely on technical specifications.",
          interpret:
            "AIDA ensures cold traffic doesn't bounce before understanding why the product matters to their daily workflow.",
          soWhat: [
            {
              symptom: "Bounce rate on cold ad traffic exceeds 75%",
              action:
                "Sharpen the Attention headline and move proof metrics into the visible viewport",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pas-nurture-email",
          concept: "PAS, Three Stages",
          lessonAnchor: "pas-three-stages",
          theoryRecap:
            "PAS targets warm, pain-aware prospects. The Agitate stage is critical: it must sit with the reader long enough to illustrate the compound financial, temporal, and team costs of inaction before offering relief.",
          question:
            "How do you write an Agitate section that builds real emotional tension without sounding hyperbolic or alienating?",
          toolName: "Google Docs",
          where:
            "In the same Google Doc, create 'Asset 2: PAS Re-engagement Email' with 3 distinct paragraphs: [Problem], [Agitate], and [Solution].",
          procedure: [
            "Name the exact pain in the Problem sentence: IT backlog piling up while engineers wait on access permissions",
            "Expand the Agitate paragraph into 3 sentences detailing the cascade: missed SLA deadlines, frustrated engineering leads, and burnt-out support staff working overtime",
            "Introduce the Solution in 2 crisp sentences as the logical relief mechanism with a 1-click CTA",
          ],
          outputSample:
            "[Problem]: Your IT support queue currently has 80+ open tickets, and half of them are simple permission resets.\n" +
            "[Agitate]: Every hour an engineer waits for an access token is an hour of lost sprint velocity. By Friday, small delays snowball into missed deployment deadlines, frustrated team leads, and a support desk pulling weekend shifts just to keep their heads above water.\n" +
            "[Solution]: Freshdesk Omni AI deflects Tier-1 access requests automatically across Slack and email in under 30 seconds. Connect your knowledge base in 10 minutes and clear your backlog before Monday.\n" +
            "[Action]: [Connect Your Helpdesk Free →]",
          healthy:
            "Agitate section spans at least 3 concrete sentences detailing the compounding consequences of inaction.",
          unhealthy:
            "Agitate is skipped or reduced to one sentence, making the solution feel optional.",
          interpret:
            "Agitation creates the urgency that turns a nice-to-have software demo into an urgent operational priority.",
          soWhat: [
            {
              symptom:
                "Email open rates are high (35%+) but click-through rates remain below 2%",
              action:
                "Deepen the Agitate section with concrete financial and operational consequences",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-framework-choice-audit",
          concept: "Choosing the Right Framework",
          lessonAnchor: "choosing-the-right-framework",
          theoryRecap:
            "Framework selection depends on audience temperature: cold audiences require AIDA to build awareness, warm audiences respond faster to PAS, and hot prospects convert via BAB or 4Ps.",
          question:
            "How do you systematically check that each copy block matches its distribution channel and reader awareness level?",
          toolName: "Google Sheets",
          where:
            "Create a 4-row review matrix in Google Sheets comparing Audience Temperature, Target Stage, Selected Framework, and Risk of Mismatch.",
          procedure: [
            "Map Asset 1 to Cold Awareness (Paid Social / Google Ads traffic) -> AIDA",
            "Map Asset 2 to Problem-Aware Warm Leads (Webinar attendees / Newsletter subscribers) -> PAS",
            "Verify that no cold assets use PAS without defining the core context",
            "Ensure all CTAs align with the decision stage of each audience segment",
          ],
          outputSample:
            "CHANNEL | AUDIENCE TEMP | FRAMEWORK | AUDIT VERDICT\n" +
            "Paid LinkedIn Ad | Cold | AIDA | Approved — hooks curiosity, establishes social proof\n" +
            "Webinar Follow-Up Email | Warm | PAS | Approved — leverages existing pain awareness, builds urgency\n" +
            "Retargeting Landing Page | Hot | BAB / 4Ps | Approved — direct bridge from current friction to outcome",
          healthy:
            "Each channel is paired with a framework matching reader temperature.",
          unhealthy:
            "Cold audiences are sent PAS emails that assume familiarity with internal product terminology.",
          interpret:
            "Matching framework to audience temperature prevents premature selling or unnecessary over-explaining.",
          soWhat: [
            {
              symptom:
                "Campaign performance drops when scaling ad spend to cold lookalikes",
              action:
                "Switch cold copy from PAS to AIDA to introduce fundamental relevance",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Copy drafting and structural formatting",
            why: "Free and accessible collaborative word processor",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Channel and framework alignment audit",
            why: "Tabular comparison of audience temperatures",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete two-asset copy document containing an AIDA landing hero and a PAS nurture email, plus a channel-framework alignment matrix.",
      sampleOutput:
        "ZENDESK — TWO-ASSET COPY PORTFOLIO\n\n" +
        "ASSET 1: AIDA HERO (Cold Inbound Traffic)\n" +
        "  [Attention]: Are your support agents answering the exact same 5 questions 100 times a day?\n" +
        "  [Interest]: Repetitive tier-1 inquiries clog your queue and cause ticket resolution times to spike by 40%.\n" +
        "  [Desire]: Zendesk AI automates routine answers instantly across chat and email, helping 100,000+ support teams cut handle time by half.\n" +
        "  [Action]: [Try Zendesk AI Free for 14 Days]\n\n" +
        "ASSET 2: PAS RE-ENGAGEMENT EMAIL (Warm Webinar Leads)\n" +
        "  [Problem]: Your customer satisfaction scores are slipping because response times are creeping past 4 hours.\n" +
        "  [Agitate]: Long wait times don't just frustrate customers—they churn high-value accounts, flood your agents with angry escalations, and drag down team morale. Every delayed ticket is revenue walking out the door.\n" +
        "  [Solution]: Zendesk AI deflects 60% of common tickets before an agent ever touches them. Set it up in under an afternoon.\n" +
        "  [Action]: [See How Zendesk AI Works →]",
      successCriteria: [
        "AIDA asset contains all four distinct stages with an outcome-based CTA",
        "PAS asset features a developed Agitate section of at least 3 sentences",
        "Channel matrix correctly aligns audience temperature with framework choice",
      ],
      portfolioReady: true,
    },
  ],
};
