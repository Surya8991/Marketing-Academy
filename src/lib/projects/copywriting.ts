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

  "storytelling-copy": [
    {
      id: "storytelling-copy-feature-list-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Find the Missing Story: Teardown of Ustraa's Product Copy",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given two real-shaped Ustraa copy specimens, a product page and an Instagram caption, identify which of the four story-framework parts are missing versus present, without being told which is which.",
      companyId: "ustraa",
      scenario: "You're a freelance copy reviewer brought in to audit Ustraa's grooming-kit launch copy before it goes live. Both pieces read fine on a skim, but neither is converting the way the team expected.",
      brief: "Apply the Hook-Struggle-Turn-After State framework from this lesson to flag real defects, and avoid flagging plausible-sounding non-defects.",
      mode: "teardown",
      conceptsCovered: [
        "Hook: opening with a specific, relatable situation",
        "Struggle: naming the real cost of the problem",
        "Turn: introducing the product as the mechanism of change",
        "After State: making the transformation concrete",
      ],
      teardownItems: [
        {
          itemId: "item-1-product-page",
          specimen: "Ustraa Beard Grooming Kit: Contains beard oil, beard wash, and beard comb. Made with argan oil and vitamin E. Sulfate-free formula. Available in 100ml size. Suitable for all beard lengths. Free shipping on orders above ₹599.",
          specimenSource: "synthetic-realistic",
          prompt: "This is the current homepage copy for Ustraa's Beard Grooming Kit. Using the four-part framework, list what's missing.",
          answerKey: [
            {
              defect: "No hook — opens with the product name and ingredient list instead of a specific, relatable situation",
              severity: "critical",
              whyItMatters: "Without a hook the reader has no reason to see themselves in the copy; they scan for a price and leave.",
              lessonRef: "how-it-works-the-four-part-framework",
              owner: "you",
            },
            {
              defect: "No struggle — the copy never names the actual cost of an itchy, unkempt, or patchy beard",
              severity: "critical",
              whyItMatters: "Readers won't move toward a solution until they feel the weight of the problem; skipping the struggle produces a spec sheet, not a pitch.",
              lessonRef: "how-it-works-the-four-part-framework",
              owner: "you",
            },
            {
              defect: "No after state — the copy ends on shipping terms instead of a concrete scene of the transformed reader",
              severity: "moderate",
              whyItMatters: "A reader who can't picture the outcome has no emotional payoff to chase, which is what the lesson says drives action.",
              lessonRef: "how-it-works-the-four-part-framework",
              owner: "you",
            },
          ],
          distractors: [
            "Product name appears before the ingredient list",
            "Copy doesn't include a customer testimonial",
            "Copy uses metric units (ml) instead of imperial",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-instagram-caption",
          specimen: "New Beard Kit alert! 3-in-1 formula. Argan oil + Vitamin E. Shop now, link in bio. #Grooming #Menswear",
          specimenSource: "synthetic-realistic",
          prompt: "This Instagram caption promotes the same kit. What story-structure elements are missing?",
          answerKey: [
            {
              defect: "No hook — opens with an announcement ('alert') instead of a specific reader moment",
              severity: "moderate",
              whyItMatters: "An announcement reads as brand-first, which is the lesson's most common brand-as-hero mistake.",
              lessonRef: "how-it-works-the-four-part-framework",
              owner: "you",
            },
            {
              defect: "No turn — jumps from an ingredient list straight to a call to action, with no transformation moment for the product to enable",
              severity: "critical",
              whyItMatters: "Without a turn, the product never gets to be the mechanism of change, it's just a listed item.",
              lessonRef: "how-it-works-the-four-part-framework",
              owner: "you",
            },
          ],
          distractors: [
            "Caption is too short for Instagram's character limit",
            "Hashtags are not capitalized consistently",
            "Caption doesn't include an emoji",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up both specimens and draft the rewritten hook and struggle lines",
            why: "Free, no account friction, easy to comment inline on flagged defects",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A marked-up teardown of both specimens with defects flagged by severity, plus a rewritten hook and struggle line for the Beard Grooming Kit product page.",
      sampleOutput: "Nykaa product page rewrite (excerpt)\n\nHOOK: \"Priya used three different serums last winter and her skin still cracked by December.\"\nSTRUGGLE: \"She'd stopped taking selfies. Concealer wasn't covering it anymore, and every 'miracle' bottle in her bathroom cabinet was half-empty.\"\n\n[Product introduced here, as the turn, not before]",
      successCriteria: [
        "Correctly flags at least 2 of the 3 real defects in item 1 and 1 of the 2 real defects in item 2",
        "Does not select any of the listed distractors as defects",
        "Rewrite includes a specific hook naming a situation, not the product name",
      ],
      portfolioReady: false,
    },
    {
      id: "storytelling-copy-landing-page-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Story-Driven Landing Page From a Raw Feature List",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Turn a plain feature list and a real customer-research quote into a complete four-part landing page draft, applying Hook, Struggle, Turn, and After State as four separate, deliberate moves.",
      companyId: "slack",
      scenario: "You're a lifecycle copywriter at Slack launching a new async-huddle feature. Product handed you a feature list; the customer research team handed you one verbatim complaint. You have to write the actual landing page copy.",
      brief: "Write one sentence or short paragraph per framework part, in order, and never introduce the product before the Turn.",
      mode: "build",
      conceptsCovered: [
        "Hook: opening with a specific, relatable situation",
        "Struggle: naming the real cost of the problem",
        "Turn: introducing the product as the mechanism of change",
        "After State: making the transformation concrete",
      ],
      steps: [
        {
          stepId: "step-1-hook",
          concept: "Hook: opening with a specific, relatable situation",
          lessonAnchor: "how-it-works-the-four-part-framework",
          theoryRecap: "The lesson's Hook stage opens with a specific, concrete situation, not a general claim, because specificity triggers recognition.",
          question: "Raw research quote: 'Team of 12 remote workers, missed handoffs, using email for approvals, someone always finds out too late.' Write a one-sentence hook.",
          toolName: "Google Docs",
          where: "New Google Doc, top of the page draft, labeled HOOK",
          procedure: [
            "Read the raw customer research quote provided",
            "Extract the single most specific detail, not the general theme",
            "Write one sentence naming a real moment, a day, a time, or a name",
          ],
          outputSample: "Draft hook: \"Every Friday at 4:58pm, Priya re-read the same email thread three times trying to remember who'd actually approved the release.\"",
          healthy: "The hook names a specific day, time, and person; a reader in that situation recognizes themselves immediately.",
          unhealthy: "\"Struggling with team approvals?\" — a general claim nobody pictures themselves inside.",
          interpret: "A hook built from one real research quote will always out-recognize a hook built from a category.",
          soWhat: [{ symptom: "Hook reads like a category ('teams struggle with approvals')", action: "Replace the category with the single specific research quote", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-struggle",
          concept: "Struggle: naming the real cost of the problem",
          lessonAnchor: "how-it-works-the-four-part-framework",
          theoryRecap: "The Struggle stage makes the problem real by naming its costs, time lost, embarrassment, money wasted, before the reader will move toward a solution.",
          question: "What did missed handoffs actually cost this team? Name the cost, not the category of problem.",
          toolName: "Google Docs",
          where: "Same doc, section labeled STRUGGLE, directly below the hook",
          procedure: [
            "List every cost implied by the research quote (time, trust, rework)",
            "Pick the one cost that's most concrete and least abstract",
            "Write 1-2 sentences naming that cost specifically",
          ],
          outputSample: "Draft struggle: \"By the time she found the right thread, the release had already shipped without QA sign-off. Twice that quarter.\"",
          healthy: "The struggle names a real, countable consequence (twice that quarter) instead of a vague feeling.",
          unhealthy: "\"It's frustrating when approvals get missed\" — names a feeling, not a cost.",
          interpret: "A countable cost is what makes the reader feel the weight of the problem, a feeling alone does not.",
          soWhat: [{ symptom: "Struggle section only describes an emotion", action: "Add one specific, countable consequence from the research quote", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-3-turn",
          concept: "Turn: introducing the product as the mechanism of change",
          lessonAnchor: "how-it-works-the-four-part-framework",
          theoryRecap: "The Turn introduces the mechanism of change, the product appears as the tool that enables the protagonist's transformation, not as the hero.",
          question: "How does the new async-huddle feature specifically solve the missed-handoff cost you just named? Introduce it as the mechanism, not the subject.",
          toolName: "Google Docs",
          where: "Same doc, section labeled TURN, directly below the struggle",
          procedure: [
            "Name the exact mechanism the feature provides (a recorded async decision log)",
            "Connect the mechanism directly to the specific cost named in the Struggle",
            "Keep the reader, not the product, as the grammatical subject where possible",
          ],
          outputSample: "Draft turn: \"Then her team turned on async huddles. Every approval decision got a searchable, timestamped record no one had to hunt through email for.\"",
          healthy: "The product is introduced only after the struggle has built enough pressure, and it's framed as what the reader now has, not a features announcement.",
          unhealthy: "\"Our new async huddles feature includes recording, transcripts, and searchable history\" — a features list wearing a story's clothing.",
          interpret: "The turn only lands if the struggle already made the reader want a way out; if the turn opens the copy, there was no struggle to resolve.",
          soWhat: [{ symptom: "Product is introduced with a features list instead of as a mechanism", action: "Rewrite the turn to connect one mechanism to one named cost", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-4-after-state",
          concept: "After State: making the transformation concrete",
          lessonAnchor: "how-it-works-the-four-part-framework",
          theoryRecap: "The After State describes life after the transformation in concrete, specific terms, not \"you will feel better\" but a picture of a specific moment.",
          question: "What does Priya's Friday at 4:58pm look like now? Write the after-state scene.",
          toolName: "Google Docs",
          where: "Same doc, section labeled AFTER STATE, closing the draft",
          procedure: [
            "Return to the exact moment named in the hook",
            "Describe what's different in that same moment now, in concrete terms",
            "Avoid abstract relief words (\"better,\" \"easier\"); name a specific action or object instead",
          ],
          outputSample: "Draft after state: \"Now Priya closes her laptop at 5pm on Fridays. The approval log is one search away, and nothing ships without a name attached to it.\"",
          healthy: "The after state returns to the same specific moment as the hook and shows a concrete, opposite detail.",
          unhealthy: "\"Now approvals are easier and faster\" — an abstract claim with nothing for the reader to picture.",
          interpret: "Bookending the after state against the hook's exact moment is what makes the transformation feel earned instead of asserted.",
          soWhat: [{ symptom: "After state uses abstract relief words with no concrete detail", action: "Rewrite it as the same moment from the hook, now resolved", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft all four sections in sequence and share for review",
            why: "Free, no account friction, comment threads work well for section-by-section feedback",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A complete story-driven landing page draft, headline plus four labeled sections (Hook, Struggle, Turn, After State), for the Slack async-huddles feature.",
      sampleOutput: "PolicyBazaar renewal-reminder page (excerpt)\n\nHOOK: \"Rohan almost lost his car insurance grace period scrolling through five different apps seven minutes before the deadline.\"\nSTRUGGLE: \"He'd missed a renewal once before. The claim from that accident took four extra months to settle because the policy had lapsed for two days.\"\nTURN: \"PolicyBazaar's single renewal dashboard now shows every policy, every due date, in one screen.\"\nAFTER STATE: \"Now Rohan gets one reminder, taps once, and gets back to his commute.\"",
      successCriteria: [
        "Each of the 4 sections maps to exactly one framework part in order, with no missing part",
        "Hook and After State both contain a concrete, specific detail (a name, a time, or a number)",
        "The product is introduced only in the Turn section, not before",
      ],
      portfolioReady: true,
      stretch: "Rewrite the same landing page as a 30-second launch video script, keeping all four parts intact within the shorter format.",
    },
  ],

  "features-vs-benefits": [
    {
      id: "features-vs-benefits-product-page-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Feature Dump: Teardown of a Mattress Product Page",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic mattress product-page copy block, identify every line that lists a feature without a benefit translation, and diagnose why each one will underperform.",
      companyId: "casper-sleep",
      scenario:
        "You're a freelance copywriter auditing product-page copy for a mattress brand before a paid traffic campaign launch.",
      brief:
        "Read the specimen copy block, mark each defect using the feature-vs-benefit framework, and use the So What Test to find the buried benefit.",
      mode: "teardown",
      conceptsCovered: [
        "Confusing advantages with benefits",
        "Burying the benefit after three sentences of features",
        "Writing benefits for yourself, not your customer",
      ],
      teardownItems: [
        {
          itemId: "cloudrest-product-description",
          specimen:
            "CloudRest Mattress — Product Description\n\n- 12-inch profile with 5-layer memory foam construction\n- CertiPUR-US certified foam, industry-leading manufacturing standards\n- Motion isolation technology engineered for undisturbed sleep\n- Breathable cover fabric with moisture-wicking properties\n- Free shipping and a 100-night trial period\n- Available in Twin, Full, Queen, King, and California King",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read the CloudRest Mattress product description above. Mark every bullet that lists a feature without stating what changes for the sleeper. Rate each defect's severity and rewrite at least two using the 'which means' bridge.",
          answerKey: [
            {
              defect: "Every bullet lists a spec; none states what changes for the sleeper",
              severity: "critical",
              whyItMatters:
                "A reader scanning this page never learns what buying the mattress actually does for their life, so there's no emotional reason to keep reading.",
              lessonRef: "the-feature-to-benefit-playbook",
              owner: "you",
            },
            {
              defect: "'Industry-leading manufacturing standards' is an advantage claim, not a benefit",
              severity: "moderate",
              whyItMatters:
                "Advantages compare the product to competitors; they don't tell the customer what they personally get, which is what actually drives a purchase decision.",
              lessonRef: "mistake-5-confusing-advantages-with-benefits",
              owner: "you",
            },
            {
              defect:
                "'Motion isolation technology' names the feature but never states the outcome (a partner's movement doesn't wake you)",
              severity: "critical",
              whyItMatters:
                "The feature is meaningless to a non-technical shopper without the 'which means' bridge connecting it to an undisturbed night's sleep.",
              lessonRef: "step-2-apply-the-which-means-bridge",
              owner: "you",
            },
            {
              defect:
                "The '100-night trial' risk-reversal benefit is buried in the second-to-last bullet instead of leading the page",
              severity: "moderate",
              whyItMatters:
                "Risk reversal is one of the strongest purchase triggers for a big-ticket item bought sight-unseen online; burying it wastes its persuasive power.",
              lessonRef: "mistake-4-burying-the-benefit-after-three-sentences-of-features",
              owner: "you",
            },
          ],
          distractors: [
            "The size list (Twin through California King) is fine as-is; it doesn't need benefit translation",
            "Listing CertiPUR-US certification is an acceptable trust proof point, not a defect on its own",
            "The bullet-point format itself is not the problem",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up the specimen copy with inline comments",
            why: "Free commenting and suggestion mode with no account cost",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated copy of the specimen with each defect flagged, severity-rated, and rewritten using the 'which means' bridge.",
      sampleOutput:
        "Allbirds teardown excerpt (reference standard)\n\nORIGINAL: 'Merino wool upper with moisture-wicking properties.'\nFLAGGED: feature-only, no outcome stated.\nREWRITE: 'Merino wool upper, which means your feet stay dry and odor-free even after a full day on your feet.'",
      successCriteria: [
        "Flags at least 3 of the 4 real defects",
        "Does not flag any of the 3 distractors as defects",
        "Rewrites at least 2 defects using the 'which means' bridge",
      ],
      portfolioReady: true,
    },
    {
      id: "features-vs-benefits-warby-parker-hero-rebuild",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Rebuild the Page: Turning a Feature List into Benefit-Driven Hero Copy",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a raw feature list for a glasses-subscription landing page, apply the 'which means' bridge and the emotional-layer framework to write a benefit-driven headline, subheadline, and supporting bullets.",
      companyId: "warby-parker",
      scenario:
        "You're a copywriter hired to rewrite the hero section of an eyewear landing page before an A/B test against the current feature-first version.",
      brief:
        "Build a new hero headline, subheadline, and 3 supporting bullets that lead with benefits and support with features.",
      mode: "build",
      conceptsCovered: [
        "Apply the 'Which Means' Bridge",
        "Identify the Emotional Layer",
        "Choose the Right Layer for Your Audience",
      ],
      steps: [
        {
          stepId: "step-1-which-means-bridge",
          concept: "Apply the 'Which Means' Bridge",
          lessonAnchor: "step-2-apply-the-which-means-bridge",
          theoryRecap:
            "The lesson's Step 2 converts any feature into a benefit by completing: 'This feature X, which means the customer [outcome].'",
          question:
            "Given the raw feature list (home try-on with 5 free frames, AR virtual try-on, blue-light lenses, $95 flat price, 1-year warranty), which feature deserves the headline benefit?",
          toolName: "Google Docs",
          where: "Draft in a blank Google Doc using a 3-column feature / bridge / benefit table.",
          procedure: [
            "List all 5 raw features in column 1",
            "Write the 'which means' bridge sentence for each in column 2",
            "Select the one benefit with the strongest reader impact for the headline",
          ],
          outputSample:
            "FEATURE: Home try-on, 5 frames free\nBRIDGE: which means\nBENEFIT: you get to see how the glasses actually look on your face before spending a cent",
          healthy:
            "The headline leads with the try-before-you-buy benefit; the $95 price becomes a supporting bullet, not the headline.",
          unhealthy:
            "The headline leads with '$95 flat price,' a feature that says nothing about the customer's experience.",
          interpret:
            "Price is a feature buyers compare across brands, not the reason they choose one brand's glasses over another's.",
          soWhat: [
            {
              symptom: "Headline states the price instead of the outcome",
              action: "Swap the headline for the try-before-you-buy benefit and move price to a supporting bullet",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-identify-emotional-layer",
          concept: "Identify the Emotional Layer",
          lessonAnchor: "step-3-identify-the-emotional-layer",
          theoryRecap:
            "The lesson's Step 3 maps every functional benefit to an emotional category: fear removal, status gain, time liberation, belonging, or autonomy.",
          question:
            "Which emotional category fits the try-before-you-buy benefit best: fear removal, status gain, time liberation, belonging, or autonomy?",
          toolName: "Google Docs",
          where: "Same draft doc, new section below the bridge table.",
          procedure: [
            "Reread the 5 emotional categories from the lesson",
            "Match the try-before-you-buy benefit to autonomy (control over the choice) and fear removal (no risk of a bad purchase)",
            "Note the match next to the headline draft",
          ],
          outputSample:
            "BENEFIT: See how glasses look before buying\nEMOTIONAL CATEGORY: Autonomy + Fear removal\nNOTE: reader controls the decision and removes the risk of an online-only guess",
          healthy:
            "The headline's emotional category is named explicitly before writing, not guessed at during the writing itself.",
          unhealthy:
            "Writing the headline with no named emotional target produces generic phrasing like 'Great glasses, great price.'",
          interpret: "Naming the emotional category first constrains word choice and produces sharper copy.",
          soWhat: [
            {
              symptom: "Headline reads generic",
              action: "Name the emotional category before drafting, then choose words from that category",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-choose-audience-layer",
          concept: "Choose the Right Layer for Your Audience",
          lessonAnchor: "step-4-choose-the-right-layer-for-your-audience",
          theoryRecap:
            "The lesson's Step 4 explains that consumers respond to emotional benefits first, while B2B buyers need functional benefits (ROI, compliance) first.",
          question:
            "This is a consumer audience, not B2B procurement. Should the headline lead with the functional benefit (price, warranty) or the emotional benefit (autonomy, confidence)?",
          toolName: "Google Docs",
          where: "Final copy block at the bottom of the draft doc.",
          procedure: [
            "Confirm the audience is consumer, not B2B procurement",
            "Lead the headline with the emotional benefit",
            "Support it with 1-2 functional proof points in the subhead or bullets",
          ],
          outputSample:
            "HEADLINE (emotional lead): 'See clearly, five times over, before you spend a rupee.'\nSUBHEAD (functional support): 'Try 5 frames at home, free. 1-year warranty included.'",
          healthy:
            "Consumer copy leads emotional, supports functional; the reader feels the outcome before they read the fine print.",
          unhealthy:
            "Leading with '$95 flat price and 1-year warranty' reads like a spec sheet a B2B buyer would want, not what a consumer browsing on their phone responds to.",
          interpret: "Audience type decides layer order: consumer emotional-first, B2B functional-first.",
          soWhat: [
            {
              symptom: "Consumer-facing headline leads with price or warranty",
              action: "Move the functional detail to the subhead, lead with the emotional outcome",
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
            role: "Draft and structure the bridge table and final copy",
            why: "Free, supports simple table formatting for the feature/bridge/benefit workflow",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A rewritten hero section: 1 benefit-driven headline, 1 subheadline, and 3 supporting bullets that pair each feature with its benefit.",
      sampleOutput:
        "Lenskart hero rewrite (reference standard)\n\nHEADLINE: 'See clearly, five times over, before you spend a rupee.'\nSUBHEAD: 'Try 5 frames at home, free. Keep the one that feels like you.'\nBULLETS:\n- AR try-on, which means you skip the awkward guesswork of ordering blind\n- Blue-light lenses, which means your eyes stay fresh through a full day of screens\n- 1-year warranty, which means one accidental sit-on doesn't cost you a new pair",
      successCriteria: [
        "Headline states a benefit, not a feature or price",
        "At least 3 of 5 features are bridged to benefits",
        "Emotional and functional layers are both represented",
      ],
      portfolioReady: true,
    },
  ],
  "power-words": [
    {
      id: "power-words-email-sequence-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Category Mismatch Teardown: A Failing Welcome Email Sequence",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 6 subject lines from a single onboarding email sequence, identify which power words are miscategorized for the reader's funnel stage and which lines overload triggers.",
      companyId: "lenskart",
      scenario:
        "You're auditing an eyewear brand's welcome email sequence after open rates dropped from 38% to 19% over two months.",
      brief:
        "Diagnose each subject line against the six power-word categories and flag overloading, category mismatch, or manufactured urgency.",
      mode: "teardown",
      conceptsCovered: [
        "Overloading",
        "Manufactured Urgency",
        "Ignoring the Reader's Funnel Stage",
        "Curiosity and Intrigue",
      ],
      teardownItems: [
        {
          itemId: "welcome-sequence-subject-lines",
          specimen:
            "Welcome sequence subject lines (email 1-6, sent over 10 days):\n1. 'Welcome! Here's 10% off your first order' (Email 1, day 0)\n2. 'Exclusive, limited, proven eyewear you need NOW' (Email 2, day 1)\n3. 'Only 2 hours left on your discount!' (Email 3, day 1, evening)\n4. 'Join 40,000 members who never settle for blurry' (Email 4, day 2)\n5. 'The secret most opticians won't tell you' (Email 5, day 5)\n6. 'Verified by 12,000 customers: 98% satisfaction' (Email 6, day 10)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read the 6 welcome-sequence subject lines above in order. For each one, name its power-word category and flag any overloading, category mismatch, or manufactured urgency. Ignore lines that are already correct.",
          answerKey: [
            {
              defect:
                "Email 2 stacks 'exclusive,' 'limited,' 'proven,' and shouted 'NOW' in a single subject line",
              severity: "moderate",
              whyItMatters:
                "Reads as spam and triggers list fatigue after one send; one to two power words per line is the ceiling.",
              lessonRef: "mistake-1-overloading",
              owner: "you",
            },
            {
              defect:
                "Email 3's 'Only 2 hours left' the day after Email 2's 'limited' framing, with no explanation of what changed, is an unverifiable urgency claim",
              severity: "critical",
              whyItMatters:
                "Contradictory or fake urgency erodes trust the moment a reader notices the discount didn't actually expire.",
              lessonRef: "mistake-4-manufactured-urgency",
              owner: "you",
            },
            {
              defect:
                "Email 4 uses a belonging word ('Join 40,000 members') on day 2, before the subscriber has any relationship with the brand",
              severity: "moderate",
              whyItMatters:
                "Belonging words need warm traffic; a 2-day-old subscriber has no reason to want to join a community they know nothing about yet.",
              lessonRef: "mistake-5-ignoring-the-readers-funnel-stage",
              owner: "you",
            },
            {
              defect:
                "Email 5's 'secret most opticians won't tell you' has no factual backing anywhere in the brand's copy",
              severity: "critical",
              whyItMatters:
                "Curiosity gaps must resolve to something true; an empty gap reads as clickbait once the reader opens it and finds nothing.",
              lessonRef: "3-curiosity-and-intrigue",
              owner: "you",
            },
          ],
          distractors: [
            "Email 1's straightforward '10% off' welcome subject line is not a defect; it's an appropriate low-key opener for day 0",
            "Email 6's 'Verified by 12,000 customers: 98% satisfaction' is a legitimate trust claim, not a defect, as long as the number is real",
            "Sending 6 emails across 10 days is not itself a power-word defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each subject line with its power-word category and flag",
            why: "Free, simple tabular audit with no account cost",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated audit table: each subject line, its power-word category, defect (if any), and a rewritten version.",
      sampleOutput:
        "Allbirds welcome sequence audit (reference standard)\n\nEmail 2 ORIGINAL: 'Limited restock, don't miss the wool you love'\nFLAG: none, urgency is real (restock is genuinely limited)\nEmail 5 ORIGINAL: 'The secret to sneakers that breathe'\nFLAG: curiosity claim resolves in the email body with a real material fact, so it passes",
      successCriteria: [
        "Flags at least 3 of the 4 real defects",
        "Does not flag any of the 3 distractors",
        "Proposes a category-correct rewrite for at least 2 flagged lines",
      ],
      portfolioReady: true,
    },
    {
      id: "power-words-landing-page-audit",
      tier: "core",
      archetype: "audit",
      title: "The Category Match Audit: Rebuilding a Cold-Traffic Landing Page",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a full landing page copy block built for cold traffic, apply the six power-word categories to identify mismatches and rewrite each section with a category-correct power word.",
      companyId: "allbirds",
      scenario:
        "You're the conversion copywriter for a footwear brand's new cold-traffic landing page, currently converting at 1.1% against a 2.4% category benchmark.",
      brief:
        "Walk through the page section by section, diagnose the reader's emotional state at each point, and match the power-word category to that state.",
      mode: "diagnostic",
      conceptsCovered: [
        "Ignoring the Reader's Funnel Stage",
        "Trust and Credibility",
        "CTA Buttons",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-funnel-stage",
          concept: "Ignoring the Reader's Funnel Stage",
          lessonAnchor: "mistake-5-ignoring-the-readers-funnel-stage",
          theoryRecap:
            "The lesson's Mistake 5 explains that cold traffic needs desire and aspiration words while warm traffic needs trust and safety words; belonging words backfire on strangers.",
          question:
            "This landing page's headline reads 'Join 50,000 sustainable sneaker owners.' Given this is a cold-traffic ad landing page (first-time visitors from a prospecting campaign), is this the right category?",
          toolName: "Google Docs",
          where: "Open the landing page copy block, mark the traffic source and funnel stage above each section.",
          procedure: [
            "Confirm the traffic source is cold (prospecting ad, first visit)",
            "Identify that 'Join 50,000...' is a belonging-category word",
            "Flag the mismatch: belonging requires an existing relationship the cold visitor doesn't have yet",
          ],
          outputSample:
            "SECTION: Headline\nTRAFFIC: Cold (prospecting ad)\nCURRENT WORD CATEGORY: Belonging ('Join 50,000...')\nCORRECT CATEGORY: Desire and Aspiration\nFLAG: mismatch",
          healthy:
            "The cold-traffic headline uses a desire/aspiration word that paints the outcome, not a belonging word that assumes an existing relationship.",
          unhealthy:
            "A belonging word sits in the first thing a stranger reads, before they have any reason to want to belong.",
          interpret: "Category mismatch is invisible in isolation; it only shows up once you know the traffic source.",
          soWhat: [
            {
              symptom: "Cold-traffic headline uses a belonging word",
              action: "Replace with a desire/aspiration word describing the outcome",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rewrite-trust-section",
          concept: "Trust and Credibility",
          lessonAnchor: "1-trust-and-credibility",
          theoryRecap:
            "The lesson's Trust and Credibility category answers 'will this work for me?' with evidence words like proven, verified, backed.",
          question:
            "The page's social proof section currently reads 'Customers love these shoes.' What specific trust words would strengthen this before the CTA?",
          toolName: "Google Docs",
          where: "Edit the social-proof section directly below the body copy.",
          procedure: [
            "Locate the vague praise line",
            "Replace it with a quantified, verifiable trust claim",
            "Place the rewritten trust line directly above the CTA, the point of maximum reader hesitation",
          ],
          outputSample:
            "BEFORE: 'Customers love these shoes.'\nAFTER: 'Verified by 6,200 buyers: 4.7/5 average rating, 92% would repurchase.'",
          healthy:
            "Trust words carry a real, checkable number placed right before the moment of highest anxiety, the CTA click.",
          unhealthy: "Vague praise with no number sits in the same spot and gets skimmed past.",
          interpret:
            "Trust words only work when they're falsifiable; a number the reader could go verify is what actually reduces perceived risk.",
          soWhat: [
            {
              symptom: "Social proof section has no number",
              action: "Add a specific, real, checkable statistic and place it directly above the CTA",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-rewrite-cta",
          concept: "CTA Buttons",
          lessonAnchor: "cta-buttons",
          theoryRecap:
            "The lesson's CTA Buttons section shows first-person, outcome-stating CTAs outperform second-person, action-stating CTAs.",
          question:
            "The current CTA button reads 'Submit.' What's the category-correct rewrite for a cold-traffic reader who just read a desire-driven headline?",
          toolName: "Google Docs",
          where: "Edit the CTA button copy at the bottom of the landing page draft.",
          procedure: [
            "Identify that 'Submit' states the action, not the outcome",
            "Rewrite in first person, stating the outcome the reader gets",
            "Confirm the CTA echoes the emotional category used in the headline",
          ],
          outputSample: "BEFORE: 'Submit'\nAFTER: 'Get My Pair, Free Shipping'",
          healthy:
            "The CTA states what the reader gets, in their own voice (first person), echoing the headline's desire framing.",
          unhealthy:
            "'Submit' describes the mechanical action and creates a moment of friction right before conversion.",
          interpret: "The CTA is the last emotional touchpoint before the click; a generic action word wastes it.",
          soWhat: [
            {
              symptom: "CTA button says 'Submit' or 'Continue'",
              action: "Rewrite in first person, stating the specific outcome",
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
            role: "Draft and mark up the landing page copy section by section",
            why: "Free, supports inline comments for each section of the audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A section-by-section audit of the landing page with each power-word category diagnosed, mismatches flagged, and a full rewritten page (headline, trust section, CTA).",
      sampleOutput:
        "Casper Sleep landing page rewrite (reference standard)\n\nHEADLINE BEFORE: 'Join thousands of better sleepers' (belonging, cold-traffic mismatch)\nHEADLINE AFTER: 'Fall asleep faster, wake up without the ache' (desire and aspiration)\nCTA BEFORE: 'Submit'\nCTA AFTER: 'Start My 100-Night Trial'",
      successCriteria: [
        "Correctly identifies the headline's category mismatch",
        "Adds a specific, checkable number to the trust section",
        "Rewrites the CTA in first person, stating an outcome",
      ],
      portfolioReady: true,
      stretch:
        "Run the rewritten headline and CTA as an actual A/B test if you have access to a live landing page, and log the real lift in a swipe file.",
    },
  ],

  "voice-and-tone": [
    {
      id: "voice-pillar-consistency-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Consistency Check: Auditing Copy Against Voice Pillars",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 5 real-style copy samples from different channels, score each against a brand's voice pillars and contrast statements to spot where voice breaks down.",
      companyId: "squarespace",
      scenario:
        "You're a junior copywriter at Squarespace reviewing five pieces of copy pulled from the last quarter, an ad, an email subject line, a support chat reply, a blog intro, and a social caption, to check whether they actually sound like the same brand.",
      brief:
        "Apply the 'we are X, not Y' contrast-statement test to catch inconsistency that a normal proofread misses.",
      mode: "diagnostic",
      conceptsCovered: ["Applying voice pillar contrast statements to real copy"],
      steps: [
        {
          stepId: "step-1-contrast-test",
          concept: "Applying voice pillar contrast statements to real copy",
          lessonAnchor: "step-1-define-your-voice-pillars",
          theoryRecap:
            "The lesson's Step 1 defines voice pillars as 3-4 adjectives paired with a 'we are X, not Y' contrast statement, a vague adjective like 'friendly' means nothing without the contrast.",
          question:
            "Squarespace's stated pillar is 'confident, not arrogant.' Which of these 5 samples fails that test?",
          toolName: "Google Docs",
          where: "Paste all 5 copy samples into one doc, add a scoring column next to each.",
          procedure: [
            "Paste the 5 samples into a Google Doc, one per row",
            "Score each sample 1-5 against the 'confident, not arrogant' contrast statement",
            "Flag any sample scoring 2 or below and write the specific phrase that broke the pillar",
          ],
          outputSample:
            "SAMPLE 3 (support chat reply): 'Obviously you just need to check your billing settings, that's pretty basic.'\nScore: 1/5\nFlag: 'Obviously' and 'pretty basic' read as arrogant, not confident. Violates pillar.",
          healthy:
            "4 of 5 samples score 4+ and the one flagged sample gets rewritten before publishing.",
          unhealthy:
            "All 5 samples get approved because nobody actually re-reads them against the pillar, just against a spell-checker.",
          interpret:
            "A voice pillar without a scoring pass against real copy is decoration, not governance.",
          soWhat: [
            {
              symptom: "Support chat replies keep sounding harsher than the brand's ads",
              action:
                "Add the contrast-statement scoring pass to the support team's QA checklist, not just marketing's",
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
            role: "Score copy samples against pillar contrast statements",
            why: "Free, easy commenting for flags",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored table of 5 copy samples with the lowest-scoring sample rewritten to match the voice pillar.",
      sampleOutput:
        "Chewy voice audit (excerpt)\n\nSAMPLE: Email subject line - 'Your order shipped! 📦'\nPillar: warm, not saccharine\nScore: 5/5\n\nSAMPLE: Paid ad headline - 'INSANE savings you can't miss!!!'\nScore: 2/5 — 'INSANE' and the triple exclamation break the calm-confidence pillar.",
      successCriteria: [
        "Correctly scores all 5 samples using the contrast-statement test",
        "Identifies the specific phrase that breaks the pillar in flagged samples",
      ],
      portfolioReady: true,
    },
    {
      id: "cross-channel-voice-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Off-Brand Line: A Cross-Channel Voice Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 4 synthetic copy specimens styled after a real brand's channels, identify which line violates voice consistency and which just look different but are actually correct tone adaptation.",
      companyId: "glossybox",
      scenario:
        "You're reviewing Glossybox's content calendar output before it goes live across an Instagram caption, an email, a product description, and a customer-service macro.",
      brief:
        "Distinguish a real voice violation from correct tone flexibility, per the lesson's Common Mistake #1.",
      mode: "teardown",
      conceptsCovered: ["Distinguishing tone flexibility from voice inconsistency"],
      teardownItems: [
        {
          itemId: "item-1-four-specimens",
          specimen:
            "SPECIMEN A (Instagram caption): 'okay but this shade is EVERYTHING 💕 who's trying it first??'\nSPECIMEN B (Email subject): 'Your box ships tomorrow, here's what's inside'\nSPECIMEN C (Product description): 'Utilizing a proprietary formulation methodology, this product delivers optimal results.'\nSPECIMEN D (Support macro): 'I totally get why that's frustrating, let's get this sorted for you right now.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Which specimen breaks brand voice, versus which ones are correct tone adaptation for their channel?",
          answerKey: [
            {
              defect:
                "Specimen C shifts into stiff, jargon-heavy corporate language ('proprietary formulation methodology', 'optimal results') that no other specimen uses",
              severity: "critical",
              whyItMatters:
                "This is exactly the inconsistency the lesson's Common Mistake #1 warns about, a plain-language brand suddenly sounding like a legal disclaimer breaks trust and recognition",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Specimen A's casual, emoji-heavy tone (correct tone flexibility for Instagram, not a violation)",
            "Specimen D's empathetic phrasing (correct for support, matches the lesson's channel tone map)",
            "Specimen B's short, plain subject line (correct email tone, not a violation)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Compare specimens side by side and annotate",
            why: "Free commenting makes flagging easy",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A marked-up copy of the 4 specimens with the true violation flagged and the 3 correct tone adaptations explicitly cleared.",
      sampleOutput:
        "Squarespace teardown (excerpt)\n\nCLEARED: 'New year, new site. Let's build it.' (confident, on-brand for an ad)\nFLAGGED: 'Squarespace hereby provides users with comprehensive website-building solutions.' (stiff, off-brand, violates the 'clear, not corporate' pillar)",
      successCriteria: [
        "Correctly identifies Specimen C as the sole violation",
        "Correctly clears all 3 distractors as legitimate tone adaptation, not inconsistency",
      ],
      portfolioReady: true,
    },
  ],
  "landing-page-copy": [
    {
      id: "headline-subhead-cta-sprint",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Three-Line Sprint: Headline, Subheadline, CTA",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a product brief, write a headline, subheadline, and CTA that follow the lesson's outcome-first, first-person-CTA framework.",
      companyId: "duolingo",
      scenario:
        "Duolingo's team is testing a new landing page for a beginner-focused Spanish course bundle and needs three tight lines before the page goes into design.",
      brief: "Lead with the outcome, not the product name; make the CTA first-person and specific.",
      mode: "build",
      conceptsCovered: ["Writing an outcome-first headline and first-person CTA"],
      steps: [
        {
          stepId: "step-1-three-lines",
          concept: "Writing an outcome-first headline and first-person CTA",
          lessonAnchor: "step-1-headline",
          theoryRecap:
            "The lesson's Step 1 says the headline must name a specific result, audience, or timeframe, not the product name, or visitors leave within three to five seconds. Step 6 says first-person CTAs like 'Start my free trial' consistently outperform 'Start your free trial.'",
          question:
            "Given the brief 'beginner Spanish course, 15 minutes a day, results in 8 weeks,' what headline actually names the outcome, and what CTA matches it?",
          toolName: "Google Docs",
          where: "Draft 3 headline options in a doc, pick the one that names a specific result, then write the subheadline and CTA underneath it.",
          procedure: [
            "Write 3 headline drafts: one product-name-led, two outcome-led",
            "Cut the product-name-led draft immediately",
            "Pick the outcome-led draft that names a timeframe",
            "Write a one-sentence subheadline naming who it's for and the mechanism",
            "Write a first-person CTA naming the specific thing the visitor gets",
          ],
          outputSample:
            "HEADLINE: 'Speak conversational Spanish in 8 weeks, 15 minutes a day'\nSUBHEADLINE: 'Built for total beginners, bite-sized lessons that fit before your morning coffee.'\nCTA: 'Start my 8-week Spanish plan'",
          healthy:
            "The headline names a timeframe and outcome, and the CTA uses first-person language naming the specific benefit.",
          unhealthy:
            "Headline reads 'Welcome to Duolingo Spanish Courses' and the CTA just says 'Submit.'",
          interpret:
            "A headline that leads with the brand name instead of the outcome is the single most common reason a landing page underperforms.",
          soWhat: [
            {
              symptom: "The headline draft still opens with the product or company name",
              action: "Rewrite it starting with the verb the visitor wants to be able to do",
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
            role: "Draft and compare headline, subheadline, and CTA options",
            why: "Free, fast to iterate on 3 short lines",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "One finished headline, subheadline, and CTA ready to hand to design.",
      sampleOutput:
        "Chewy autoship landing page (excerpt)\n\nHEADLINE: 'Never run out of dog food again'\nSUBHEADLINE: 'Autoship delivers on your schedule and saves you 5% every order, cancel anytime.'\nCTA: 'Start my autoship plan'",
      successCriteria: [
        "Headline names a specific outcome and timeframe, not the product name",
        "CTA uses first-person language naming the specific benefit",
      ],
      portfolioReady: true,
    },
    {
      id: "full-page-conversion-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Six-Section Teardown: Finding What's Costing Conversions",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two synthetic-realistic landing page specimens, identify the specific copy defects costing conversions across the lesson's required sections.",
      companyId: "chewy",
      scenario:
        "You're a CRO copywriter reviewing two draft landing pages for Chewy's new pet-insurance product before they go live to real traffic.",
      brief:
        "Find defects across headline, social proof, CTA count, and reading level using the lesson's playbook, and don't flag correct choices as defects.",
      mode: "teardown",
      conceptsCovered: [
        "Identifying vague social proof",
        "Identifying multiple-CTA dilution",
        "Identifying reading-level friction",
      ],
      teardownItems: [
        {
          itemId: "item-1-hero-and-proof",
          specimen:
            "HERO SECTION:\nHeadline: 'Welcome to Chewy Pet Insurance'\nSubheadline: 'We provide comprehensive coverage solutions for your beloved companion animals.'\nSocial proof line: 'Trusted by thousands of pet parents nationwide!'",
          specimenSource: "synthetic-realistic",
          prompt:
            "This hero section has 2 real defects. Find them, and don't flag the subheadline length, which is fine at one sentence.",
          answerKey: [
            {
              defect:
                "Headline leads with the company name ('Welcome to Chewy Pet Insurance') instead of naming the outcome the visitor wants",
              severity: "critical",
              whyItMatters:
                "The lesson's Step 1 shows visitors leave within three to five seconds if the headline doesn't hook them with a specific outcome, not a welcome message",
              lessonRef: "step-1-headline",
              owner: "you",
            },
            {
              defect:
                "Social proof is vague ('trusted by thousands', 'nationwide') with no real name, number, or specific result",
              severity: "moderate",
              whyItMatters:
                "The lesson's Step 3 requires specific social proof, a vague claim reads as filler and doesn't borrow real credibility",
              lessonRef: "step-3-social-proof",
              owner: "you",
            },
          ],
          distractors: [
            "The subheadline being one sentence long (correct length per the lesson, not a defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-cta-and-body",
          specimen:
            "BODY COPY (bullet list):\n'Our platform utilizes advanced actuarial methodologies to determine premium calculations for comprehensive coverage optimization.'\n\nBUTTONS ON PAGE: 'Get a Quote' (top), 'Learn More' (middle), 'Contact Sales' (bottom)",
          specimenSource: "synthetic-realistic",
          prompt: "This body-and-CTA section has 2 real defects. Find them.",
          answerKey: [
            {
              defect:
                "Body copy is written at a college reading level with jargon ('actuarial methodologies', 'coverage optimization') instead of plain, scannable bullets",
              severity: "critical",
              whyItMatters:
                "Unbounce's 2024 data shows 5th-to-7th-grade copy converts at 11.1% vs 5.3% for college-level copy, this line actively suppresses conversion",
              lessonRef: "why-it-matters-with-data",
              owner: "you",
            },
            {
              defect:
                "Three different CTAs ('Get a Quote', 'Learn More', 'Contact Sales') split visitor attention instead of one action",
              severity: "critical",
              whyItMatters:
                "The lesson's Common Mistake #2 says multiple CTAs don't double conversions, they split attention and dilute the primary action",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Using bullet-list formatting for the body copy (correct format per the lesson, the content inside is the problem, not the format)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Annotate specimens and log defects",
            why: "Free commenting for flagging line-level issues",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across both specimens naming each issue, its severity, and the lesson section it violates.",
      sampleOutput:
        "Squarespace landing page teardown (excerpt)\n\nDEFECT: Headline 'Welcome to Squarespace' — leads with the brand name, not the outcome. Severity: critical.\nCLEARED: Single CTA button 'Start my free trial' — correct, one action only.",
      successCriteria: [
        "Correctly identifies both critical defects in each of the 2 specimens",
        "Correctly clears the 2 distractors as legitimate choices, not defects",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite the full hero section and body bullet from the second specimen using the lesson's outcome-first, plain-language framework.",
    },
  ],

  "cta-copy": [
    {
      id: "cta-copy-vsf-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Button Autopsy: Five CTAs, Five VSF Violations",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective: "Diagnose five real-world-style CTA specimens against the VSF framework and CTA placement rules, and tell defects apart from cosmetic non-issues.",
      companyId: "thredup",
      scenario: "You're reviewing ThredUp's homepage, product page, and flash-sale copy before a Q3 conversion push. Five CTA fragments landed in your queue for sign-off.",
      brief: "Score each specimen against VSF and placement, flag the real defect, and don't get baited by the distractors.",
      mode: "teardown",
      conceptsCovered: ["V, Value", "S, Specificity", "P, First Person", "Urgency and Scarcity: Use Real Numbers Only", "CTA Placement Rules"],
      teardownItems: [
        {
          itemId: "item-1-submit-button",
          specimen: "Newsletter signup form on ThredUp's homepage. Fields: Email. Button copy: 'Submit'",
          specimenSource: "synthetic-realistic",
          prompt: "This CTA sits below a form promising early access to flash sales. What's wrong with the button copy per the VSF framework?",
          answerKey: [
            {
              defect: "Button says 'Submit', a system action, not a value the visitor receives.",
              severity: "critical",
              whyItMatters: "'Submit' tells the user they're doing work for you, not receiving something. It carries zero VSF value framing.",
              lessonRef: "v-value",
              owner: "you",
            },
          ],
          distractors: ["The button is grey instead of the brand's accent color", "The form only asks for an email address", "The button is placed below the fold"],
          partialCredit: true,
        },
        {
          itemId: "item-2-order-now",
          specimen: "Product page CTA on a limited-run sneaker drop. Button copy: 'Order Now'",
          specimenSource: "synthetic-realistic",
          prompt: "This CTA sits on a product page with no other button. What's wrong with it per the VSF framework?",
          answerKey: [
            {
              defect: "Generic 'Order Now' doesn't preview what happens next or name any specific deliverable.",
              severity: "moderate",
              whyItMatters: "VWO's Consolidated Label test showed a specific price-quote CTA beat 'Order Now' by 62%; genericness reads as a trap and creates hesitation.",
              lessonRef: "s-specificity",
              owner: "you",
            },
          ],
          distractors: ["The button uses a verb", "The page has a product image above the CTA", "The CTA is centered on the page"],
          partialCredit: true,
        },
        {
          itemId: "item-3-your-trial",
          specimen: "SaaS landing page hero CTA: 'Start Your Free Trial'",
          specimenSource: "synthetic-realistic",
          prompt: "This is the single CTA in the hero section. What's wrong with it per the VSF framework?",
          answerKey: [
            {
              defect: "Uses 'Your' instead of first-person 'My', missing the ownership psychology behind the documented 90% CTR lift.",
              severity: "moderate",
              whyItMatters: "The ContentVerve/Unbounce test isolated pronoun as the only variable and found 'my' beat 'your' by 90% CTR.",
              lessonRef: "p-first-person",
              owner: "you",
            },
          ],
          distractors: ["The CTA mentions the trial is free", "The button text is 4 words long", "The CTA is a button, not a text link"],
          partialCredit: true,
        },
        {
          itemId: "item-4-fake-urgency",
          specimen: "Flash-sale banner: 'Only 3 Spots Left!!!' with a countdown timer that resets to 24:00:00 every time the page is reloaded.",
          specimenSource: "synthetic-realistic",
          prompt: "A user reloaded the page twice and noticed the timer reset both times. What's the real defect here?",
          answerKey: [
            {
              defect: "The countdown resets on reload, meaning the urgency isn't real, and reloading visitors notice.",
              severity: "critical",
              whyItMatters: "Fake scarcity produces a short-term lift followed by trust erosion and higher unsubscribe rates, per the lesson's countdown-timer test data.",
              lessonRef: "urgency-and-scarcity-use-real-numbers-only",
              owner: "developer",
            },
          ],
          distractors: ["The banner uses exclamation marks", "The countdown timer is styled in red", "The offer only lasts one day"],
          partialCredit: true,
        },
        {
          itemId: "item-5-buried-cta",
          specimen: "A 1,800-word product comparison page with the only CTA button placed in the footer, after 40 paragraphs of copy, with no repeat higher up.",
          specimenSource: "synthetic-realistic",
          prompt: "A visitor who's already convinced by paragraph 6 has to keep scrolling for 34 more paragraphs to find a button. What's the defect?",
          answerKey: [
            {
              defect: "The CTA is buried below the fold and after the strongest benefit claims, forcing convinced visitors to hunt for it.",
              severity: "moderate",
              whyItMatters: "Placing a CTA after the key benefit and near social proof captures visitors at peak motivation; burying it forces them past their decision point.",
              lessonRef: "cta-placement-rules",
              owner: "you",
            },
          ],
          distractors: ["The page has 40 paragraphs of copy", "The CTA button uses first-person copy", "The footer CTA says 'Get My Free Quote'"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Annotate each specimen with its defect and severity", why: "Free, shareable, no account friction", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log all 5 defects with severity for sign-off", why: "Easy to sort by severity before a review meeting", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A defect log across all 5 CTA specimens, each mapped to the VSF or placement principle it violates, sorted by severity.",
      sampleOutput: "Rent the Runway CTA teardown log (excerpt)\n\nSpecimen: 'Reserve Now' on subscription plan page\nDefect: Generic, no specificity | Severity: moderate\nFix: 'Reserve My Free Trial Box'\n\nSpecimen: 'Submit' on waitlist form\nDefect: System action, no value | Severity: critical\nFix: 'Get My Early Access'",
      successCriteria: [
        "Correctly flags all 5 defects with the right VSF or placement principle",
        "Does not select any of the distractors as defects",
        "Assigns a severity level consistent with the documented conversion impact",
      ],
      portfolioReady: true,
    },
    {
      id: "cta-copy-head-to-head-vsf-scorecard",
      tier: "mini",
      archetype: "head-to-head",
      title: "Draft A vs. Draft B: Scoring a CTA Head-to-Head",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective: "Score two competing CTA drafts against the VSF framework, then isolate the single-word pronoun swap that closes any remaining gap.",
      companyId: "rent-the-runway",
      scenario: "Rent the Runway's growth team is debating two CTA drafts for a subscription landing page redesign, and can't agree without a framework.",
      brief: "Score both drafts against VSF, pick a winner, and identify the one-word edit with the highest documented ROI.",
      mode: "diagnostic",
      conceptsCovered: ["The VSF Framework", "P, First Person"],
      steps: [
        {
          stepId: "step-1-vsf-scorecard",
          concept: "The VSF Framework",
          lessonAnchor: "the-vsf-framework",
          theoryRecap: "VSF scores a CTA on three axes: Value (what the user receives), Specificity (a named deliverable or number), and First Person (my vs. your).",
          question: "Draft A says 'Reserve Your Spot'. Draft B says 'Reserve My 4-Piece Rental Box'. Score both 0-3 on VSF. Which wins and why?",
          toolName: "Google Docs",
          where: "Open the two-draft comparison doc and score each line against the VSF checklist.",
          procedure: [
            "List Draft A and Draft B side by side in a table",
            "Score each on Value (0-1), Specificity (0-1), First Person (0-1)",
            "Total each draft's VSF score",
          ],
          outputSample: "Draft A: 'Reserve Your Spot' -- Value 0, Specificity 0, First Person 0 -- Total 0/3\nDraft B: 'Reserve My 4-Piece Rental Box' -- Value 1, Specificity 1, First Person 1 -- Total 3/3",
          healthy: "Draft B sweeps all three VSF criteria and previews the exact deliverable.",
          unhealthy: "Picking Draft A because it 'sounds more professional' despite scoring 0/3.",
          interpret: "A CTA that names the deliverable and uses first person will outperform a generic one in nearly every documented test.",
          soWhat: [{ symptom: "Two CTA drafts are being debated on gut feel", action: "Score both against the VSF checklist before choosing", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-first-person-isolation",
          concept: "P, First Person",
          lessonAnchor: "p-first-person",
          theoryRecap: "The ContentVerve/Unbounce test isolated pronoun as the single variable and found 'my' beat 'your' by 90% CTR.",
          question: "If Draft B instead read 'Reserve Your 4-Piece Rental Box' (same value and specificity, just 'your' not 'my'), would you expect it to convert as well? What single edit closes the gap?",
          toolName: "Google Docs",
          where: "In the comparison doc, isolate the pronoun as the only changed variable.",
          procedure: [
            "Rewrite Draft B swapping 'my' for 'your', holding everything else constant",
            "Note that this isolates pronoun as the single test variable",
            "Flag the 'my' version as the one to ship based on the 90% CTR precedent",
          ],
          outputSample: "Draft B-your: 'Reserve Your 4-Piece Rental Box'\nDraft B-my: 'Reserve My 4-Piece Rental Box'  <- ship this one",
          healthy: "The team ships the 'my' version and treats the pronoun as a tested variable, not a style preference.",
          unhealthy: "Assuming 'your' and 'my' are interchangeable and picking whichever 'sounds right' to the writer.",
          interpret: "First person is the single highest-ROI word swap documented in CTA testing; never leave it to preference.",
          soWhat: [{ symptom: "A CTA draft uses 'your' by default", action: "Swap to 'my' and treat it as a one-word test, not a style choice", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Docs", role: "Score and compare the two CTA drafts side by side", why: "Free, shareable, easy to leave scoring notes inline", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A scored VSF comparison of the two CTA drafts, with a recommendation and the single-word edit that closes any remaining gap.",
      sampleOutput: "ThredUp CTA head-to-head (excerpt)\n\nDraft A: 'Shop Now' -- VSF 0/3\nDraft B: 'Get My Resale Picks' -- VSF 3/3\nRecommendation: Ship Draft B.",
      successCriteria: [
        "Scores both drafts against all three VSF criteria",
        "Correctly identifies the first-person swap as the highest-leverage single edit",
        "Recommendation matches the higher-scoring draft",
      ],
      portfolioReady: true,
    },
  ],
  "email-copy": [
    {
      id: "email-copy-full-email-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Inbox Autopsy: Teardown of a Win-Back Email",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective: "Diagnose five fragments of a real-world-style win-back email against the lesson's subject line, opening, CTA, and personalization principles.",
      companyId: "klaviyo",
      scenario: "You're auditing a win-back email template drafted by Klaviyo's lifecycle marketing team before it goes out to 40,000 lapsed subscribers.",
      brief: "Score each fragment, flag the real defect against the concept it violates, and don't get baited by cosmetic non-issues.",
      mode: "teardown",
      conceptsCovered: ["Subject Lines: The Gate to Everything", "Preview text: the second subject line", "Opening Lines: Earn the Read", "CTAs: One Action, Maximum Clarity", "Button vs. text link"],
      teardownItems: [
        {
          itemId: "item-1-subject-line",
          specimen: "Subject line: 'Newsletter #47'",
          specimenSource: "synthetic-realistic",
          prompt: "This subject line sits on a win-back email meant to recover lapsed subscribers. What's wrong per the lesson's subject line data?",
          answerKey: [
            {
              defect: "Generic sequential label with no curiosity gap, benefit, or personalization, nothing that earns an open.",
              severity: "critical",
              whyItMatters: "Subject lines determine whether the rest of the email matters at all; Belkins' 2025 data shows structured formulas (question, specific number, curiosity gap) significantly outperform generic labels.",
              lessonRef: "subject-lines-the-gate-to-everything",
              owner: "you",
            },
          ],
          distractors: ["The subject line is under 50 characters", "The subject line doesn't use ALL CAPS", "The subject line avoids a misleading 'Re:' prefix"],
          partialCredit: true,
        },
        {
          itemId: "item-2-preview-text",
          specimen: "Preview text field left blank; the email client pulls in 'View this email in your browser | Unsubscribe' as the preview snippet.",
          specimenSource: "synthetic-realistic",
          prompt: "What's the defect in how this email's preview text is handled?",
          answerKey: [
            {
              defect: "No intentional preview text was written, so the email client defaulted to footer boilerplate instead of a second hook.",
              severity: "moderate",
              whyItMatters: "Preview text is a second subject line; leaving it blank wastes the highest-visibility real estate after the subject itself.",
              lessonRef: "preview-text-the-second-subject-line",
              owner: "you",
            },
          ],
          distractors: ["The subject line and preview text are different lengths", "The unsubscribe link appears in the footer", "The email was sent from a no-reply address"],
          partialCredit: true,
        },
        {
          itemId: "item-3-opening-line",
          specimen: "Opening line: 'Hi, we wanted to reach out to share some exciting updates about our platform and new features we've been working on.'",
          specimenSource: "synthetic-realistic",
          prompt: "What's the defect in this opening line?",
          answerKey: [
            {
              defect: "Opens with the sender's world ('we', 'our platform') instead of the reader's problem, delaying any tension for two clauses.",
              severity: "moderate",
              whyItMatters: "The first sentence must pull the reader into the second; starting with company news instead of the reader's situation loses attention immediately.",
              lessonRef: "opening-lines-earn-the-read",
              owner: "you",
            },
          ],
          distractors: ["The opening line is a complete sentence", "The email is addressed with 'Hi'", "The opening line mentions the platform by name"],
          partialCredit: true,
        },
        {
          itemId: "item-4-multi-cta",
          specimen: "Email footer contains three buttons: 'Shop New Arrivals', 'Read the Blog', 'Follow Us on Instagram'.",
          specimenSource: "synthetic-realistic",
          prompt: "What's the defect in this footer?",
          answerKey: [
            {
              defect: "Three competing CTAs split attention across three different goals instead of one.",
              severity: "critical",
              whyItMatters: "Moosend/WordStream benchmark data shows a single CTA generates 371% more clicks than emails with multiple competing links; every extra CTA lowers the odds any one gets clicked.",
              lessonRef: "ctas-one-action-maximum-clarity",
              owner: "you",
            },
          ],
          distractors: ["All three buttons use the same brand color", "The buttons are stacked vertically", "Each button uses action-oriented verb phrasing"],
          partialCredit: true,
        },
        {
          itemId: "item-5-text-link-cta",
          specimen: "Primary CTA is a plain underlined hyperlink reading 'click here to learn more', inline within a paragraph.",
          specimenSource: "synthetic-realistic",
          prompt: "What's the defect in how this CTA is styled and worded?",
          answerKey: [
            {
              defect: "The primary CTA is a plain text link, not a button, and uses generic 'click here' copy.",
              severity: "moderate",
              whyItMatters: "Campaign Monitor found button CTAs outperform text links by 127%; burying the primary action inline within a paragraph makes it easy to skim past.",
              lessonRef: "button-vs-text-link",
              owner: "developer",
            },
          ],
          distractors: ["The link is underlined", "The link is styled blue", "The link sits mid-paragraph rather than at the very top of the email"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Annotate each fragment with its defect and severity", why: "Free, shareable, no account friction", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log all 5 defects with severity for sign-off", why: "Easy to sort by severity before a review meeting", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A defect log across all 5 email fragments, each mapped to the concept it violates and a severity rating.",
      sampleOutput: "Mailchimp win-back email teardown log (excerpt)\n\nFragment: Subject line 'March Update'\nDefect: No curiosity/benefit framing | Severity: critical\nFix: 'Your cart's been waiting 9 days -- still want it?'\n\nFragment: CTA 'Learn more' text link\nDefect: Text link, not button | Severity: moderate\nFix: Button copy 'Get My 15% Off'",
      successCriteria: [
        "Correctly flags all 5 defects with the right concept reference",
        "Does not select any of the distractors as defects",
        "Assigns a severity level consistent with the documented impact",
      ],
      portfolioReady: true,
    },
    {
      id: "email-copy-build-win-back-email",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Win-Back Email End to End",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Write a complete win-back email, subject line, PAS body copy, one behavior-based personalization insert, and a single first-person CTA, using real subscriber data.",
      companyId: "mailchimp",
      scenario: "You're the lifecycle marketing writer at Mailchimp's internal team, building a win-back email for subscribers who haven't opened in 60 days and have an item sitting in an abandoned cart.",
      brief: "Draft the full email using the lesson's formulas, then verify it against the personalization and single-CTA rules before calling it done.",
      mode: "build",
      conceptsCovered: ["Subject Lines: The Gate to Everything", "The PAS framework", "The personalization multiplier", "CTAs: One Action, Maximum Clarity"],
      steps: [
        {
          stepId: "step-1-subject-line",
          concept: "Subject Lines: The Gate to Everything",
          lessonAnchor: "subject-lines-the-gate-to-everything",
          theoryRecap: "Belkins' 2025 study found 41-50 character subject lines hit 17.57% CTR, and question-format subjects reached 46% open rates.",
          question: "Write a subject line for a 60-day-lapsed subscriber using the question formula, staying within the 41-50 character range.",
          toolName: "Google Docs",
          where: "Draft in the subject-line field of the campaign brief doc.",
          procedure: [
            "Draft 3 candidate subject lines using the question formula",
            "Count characters, keep the shortlist to lines between 41-50 characters",
            "Pick the one with the most specific, credible outcome",
          ],
          outputSample: "Candidate: 'Still deciding? Your discount expires Friday' (46 chars)",
          healthy: "The chosen subject line is a specific question tied to a real deadline, within the 41-50 char band.",
          unhealthy: "Shipping a vague subject like 'We miss you!' with no specific hook or length discipline.",
          interpret: "Subject line length and format aren't style choices, they're the highest-leverage open-rate lever documented.",
          soWhat: [{ symptom: "Subject line drafts are all over 60 characters", action: "Cut to the single sharpest clause and re-count", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-2-pas-body",
          concept: "The PAS framework",
          lessonAnchor: "the-pas-framework",
          theoryRecap: "PAS names the Problem precisely, Agitates why it matters now, then introduces the Solution as the natural resolution.",
          question: "Write 3 sentences for the body, one per PAS stage, for a subscriber who abandoned a cart 60 days ago.",
          toolName: "Google Docs",
          where: "Body section of the campaign brief doc.",
          procedure: [
            "Write one Problem sentence naming the specific abandoned item",
            "Write one Agitation sentence stating what they're losing by waiting",
            "Write one Solution sentence introducing the win-back offer",
          ],
          outputSample: "Problem: The wireless earbuds in your cart sold out twice since you last looked.\nAgitation: The current batch has 6 left in stock.\nSolution: Here's 15% off to lock in a pair before they're gone again.",
          healthy: "Each PAS sentence is specific and references the reader's own behavior, not generic copy.",
          unhealthy: "Writing a single vague paragraph that doesn't name the specific product or urgency.",
          interpret: "PAS only works when Problem and Agitation are concrete; vague versions of either stage collapse the structure.",
          soWhat: [{ symptom: "Body copy reads as one generic paragraph", action: "Split it into 3 explicit PAS sentences with specifics", effort: "5 min" }],
          owner: "you",
        },
        {
          stepId: "step-3-personalization",
          concept: "The personalization multiplier",
          lessonAnchor: "the-personalization-multiplier",
          theoryRecap: "Personalization beyond first names, behavior triggers, segment-specific copy, dynamic content blocks, drives the 26% open-rate and 133% reply-rate lifts Campaign Monitor documented.",
          question: "Add one behavior-based personalization element to the draft using the subscriber's actual cart data.",
          toolName: "Google Sheets",
          where: "Cross-reference the subscriber's cart-abandonment row in the customer data export.",
          procedure: [
            "Look up the subscriber's exact abandoned item and date from the export",
            "Insert the specific item name and days-elapsed into the body copy",
            "Confirm the personalization references real behavior, not just a first name",
          ],
          outputSample: "Row: subscriber_id 4471, item 'Wireless Earbuds Pro', abandoned 60 days ago -> inserted into subject and body",
          healthy: "The email references the exact product and timeframe pulled from real subscriber data.",
          unhealthy: "Personalizing with only '{{first_name}}' and calling it done.",
          interpret: "First-name personalization is table stakes; behavior-based personalization is what multiplies engagement.",
          soWhat: [{ symptom: "The only personalization token is {{first_name}}", action: "Pull one behavior data point from the CRM export and write it into the copy", effort: "30 min" }],
          owner: "you",
        },
        {
          stepId: "step-4-single-cta",
          concept: "CTAs: One Action, Maximum Clarity",
          lessonAnchor: "ctas-one-action-maximum-clarity",
          theoryRecap: "Moosend/WordStream data shows single-CTA emails generate 371% more clicks; the CTA should complete the sentence 'I want to ___'.",
          question: "Write one button CTA for this win-back email, and confirm there are zero competing links in the draft.",
          toolName: "Google Docs",
          where: "CTA section of the campaign brief doc, final review pass.",
          procedure: [
            "Draft a CTA completing 'I want to ___' in first person",
            "Scan the full draft and remove any secondary links or buttons",
            "Confirm exactly one button CTA remains",
          ],
          outputSample: "CTA button: 'Get My 15% Off'\nSecondary links removed: 'Browse New Arrivals', 'View Account Settings'",
          healthy: "The final draft has exactly one CTA, first-person, tied directly to the offer.",
          unhealthy: "Keeping the win-back CTA plus a 'Browse New Arrivals' link 'just in case'.",
          interpret: "Every additional link is a vote against the one action that actually matters.",
          soWhat: [{ symptom: "The draft has 2+ buttons or links competing for attention", action: "Delete every link except the single primary CTA", effort: "5 min" }],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft the subject line, body copy, and CTA", why: "Free, shareable, sufficient for a written deliverable", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Look up the subscriber's real cart-abandonment data for personalization", why: "Free, matches the CRM-export workflow used in the personalization step", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Send the finished win-back email with behavior-based segmentation",
            why: "Built-in behavioral triggers and segment tooling that match the personalization step",
            required: false,
            fallback: "The Google Docs draft is the graded deliverable; a sending platform is optional for this exercise",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Free tools are enough to complete this project end-to-end; Klaviyo only matters if you want to actually send the email.",
      },
      deliverable: "A complete win-back email draft: subject line, PAS body copy with one personalization insert, and a single first-person CTA.",
      sampleOutput: "Klaviyo win-back email draft (excerpt)\n\nSubject: 'Still deciding? Your discount expires Friday' (46 chars)\nBody: Problem/Agitation/Solution referencing the subscriber's cart\nCTA: 'Get My 15% Off' (single button)",
      successCriteria: [
        "Subject line falls within 41-50 characters and uses a real formula",
        "Body follows Problem-Agitation-Solution with one concrete detail per stage",
        "Includes one behavior-based personalization element beyond first name",
        "Exactly one CTA appears in the final draft",
      ],
      portfolioReady: true,
      stretch: "Write a second subject-line variant and predict which wins based on the lesson's character-length data.",
    },
  ],

  "value-prop-copy": [
    {
      id: "value-prop-nubank-5-second-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 5-Second Verdict: Auditing Nubank's Value Prop Anatomy",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Score a homepage hero statement against the 4-part value prop anatomy (Who/What/How Different/Proof Anchor) and the 5-second test, then flag exactly which component is missing.",
      companyId: "nubank",
      scenario:
        "You're a contract copy auditor. Nubank's regional marketing lead wants a second opinion on a new homepage hero line before it ships to 48 million customers across Brazil, Mexico, and Colombia.",
      brief:
        "Break the given hero statement into its four anatomy components, run the 3-question 5-second test on it, and write the single highest-leverage fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Anatomy of a High-Converting Value Prop",
        "The 5-Second Test: Your Only Objective Measure",
      ],
      steps: [
        {
          stepId: "step-1-anatomy-breakdown",
          concept: "The Anatomy of a High-Converting Value Prop",
          lessonAnchor: "the-anatomy-of-a-high-converting-value-prop",
          theoryRecap:
            "Every high-converting value prop names a specific Who, a specific What (outcome, not mechanism), a How Different, and a Proof Anchor. Missing any one of the four weakens the whole claim.",
          question:
            "The draft hero line reads: 'Banking that just makes sense. Trusted across Latin America.' Which of the four anatomy components are present, and which is missing?",
          toolName: "Google Sheets",
          where: "Open a new sheet, add columns: Who | What | How Different | Proof Anchor | Verdict.",
          procedure: [
            "Paste the hero line into row 1 of the sheet",
            "Tag each anatomy component present with the exact phrase that carries it",
            "Mark any component with no supporting phrase as MISSING",
            "Write a one-line verdict: which missing component is costing the most clarity",
          ],
          outputSample:
            "Who: MISSING (no named segment)\nWhat: partial ('makes sense' is not an outcome)\nHow Different: MISSING (no stated alternative)\nProof Anchor: partial ('trusted across Latin America' has no number)\nVerdict: Who and How Different are both absent, the line could describe any bank in the region.",
          healthy:
            "At least 3 of 4 components carry a specific, checkable phrase, e.g. a named segment, a stated outcome, an explicit contrast, or a real number.",
          unhealthy:
            "2 or fewer components are present, or every component is an adjective ('simple', 'trusted', 'modern') with no specific noun or number behind it.",
          interpret:
            "A hero line that scores 2/4 or lower will pass a founder's read (they know the context) but fail a stranger's 5-second read, which is the only audience that matters on a real homepage.",
          soWhat: [
            {
              symptom: "Hero line has no named Who",
              action: "Add the specific customer segment the homepage traffic actually converts best from (e.g. 'first-time credit card holders')",
              effort: "30 min",
            },
            {
              symptom: "How Different is missing entirely",
              action: "Name the alternative being replaced (e.g. 'without the paperwork of a traditional bank')",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-five-second-test",
          concept: "The 5-Second Test: Your Only Objective Measure",
          lessonAnchor: "the-5-second-test-your-only-objective-measure",
          theoryRecap:
            "The 5-second test asks three fixed questions: what does this do, who is it for, why choose it over the alternative. Fewer than 4 of 5 strangers passing all three means the value prop fails.",
          question:
            "Given the anatomy gaps you just found in step 1, predict which of the 3 test questions strangers will fail, and why.",
          toolName: "Google Sheets",
          where: "Add a second sheet tab: Question | Predicted Pass/Fail | Reason.",
          procedure: [
            "List the 3 fixed questions in rows",
            "For each, predict pass or fail based on the anatomy gaps found",
            "Write the specific reason tied to the missing component, not a general impression",
          ],
          outputSample:
            "Q1 What does this do? PASS, 'banking' is unambiguous.\nQ2 Who is it for? FAIL, no segment named, could be anyone.\nQ3 Why choose it? FAIL, no stated contrast with traditional banks or other neobanks.",
          healthy:
            "The prediction traces directly back to a specific missing anatomy component, not a vague 'it feels weak' judgment.",
          unhealthy:
            "Predicting all three questions will pass because the line 'sounds fine', the most common founder blind spot the lesson warns about.",
          interpret:
            "2 of 3 predicted fails confirms the audit: this line needs a rewrite before it goes live, not a tweak.",
          soWhat: [
            {
              symptom: "2 or more questions predicted to fail",
              action: "Do not ship the line, rewrite using the Who and How Different gaps identified in step 1 first",
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
            role: "Score the hero line against the anatomy and the 5-second test",
            why: "Free, fast to structure into columns, no account friction for a one-off audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed anatomy + 5-second-test scorecard for the given hero line, with the single highest-leverage fix written as one sentence.",
      sampleOutput:
        "Zendesk hero audit (reference)\n\nOriginal: 'Support software that scales.'\nWho: MISSING | What: partial | How Different: MISSING | Proof Anchor: MISSING\nPredicted 5-second fails: Q2 (who), Q3 (why choose it)\nTop fix: name the segment (e.g. 'growing support teams') and the contrast (e.g. 'without a 6-month implementation').",
      successCriteria: [
        "Correctly tags all 4 anatomy components as present, partial, or missing with the exact phrase cited",
        "Predicts 5-second test pass/fail per question with a reason tied to a specific missing component",
        "Writes one fix that targets the single highest-leverage gap, not a full rewrite of everything",
      ],
      portfolioReady: true,
    },
    {
      id: "value-prop-firstcry-build-the-statement",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building FirstCry's 90-Minute Delivery Value Prop from Scratch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Write a complete value proposition statement for a new feature launch using the Who/What/How Different/Proof Anchor structure, then draft 3 versions per the lesson's bold claim / outcome / contrast framework.",
      companyId: "firstcry-brainbees",
      scenario:
        "FirstCry is launching 90-minute express delivery for baby essentials in 6 metro cities. Marketing has feature specs but no value prop, and the launch page is due in 2 days.",
      brief:
        "Build the value prop from customer language (new parents running out of formula or diapers at odd hours), not from the feature spec sheet.",
      mode: "build",
      conceptsCovered: [
        "The Anatomy of a High-Converting Value Prop",
        "How to Write the Value Prop: A 6-Step Process",
      ],
      steps: [
        {
          stepId: "step-1-build-anatomy",
          concept: "The Anatomy of a High-Converting Value Prop",
          lessonAnchor: "the-anatomy-of-a-high-converting-value-prop",
          theoryRecap:
            "The four components: Who (specific person), What (outcome, not mechanism), How Different (specific contrast), Proof Anchor (one believable number or name).",
          question:
            "Given the scenario, write one specific phrase for each of the 4 anatomy components. Do not use 'parents' alone, that is not specific enough per the lesson's Who standard.",
          toolName: "Google Docs",
          where: "New doc, 4 labeled lines: Who / What / How Different / Proof Anchor.",
          procedure: [
            "Write the Who as a specific situation, not a demographic label",
            "Write the What as the outcome (peace of mind at 11pm), not the mechanism (logistics network)",
            "Write the How Different as the explicit contrast (vs. waiting until morning, vs. a 2-day delivery competitor)",
            "Write the Proof Anchor using a real, specific number (delivery window, city count, or order volume)",
          ],
          outputSample:
            "Who: parents who run out of diapers or formula after 9pm\nWhat: baby essentials at your door before you'd finish a store run\nHow Different: no next-day wait, no emergency pharmacy markup\nProof Anchor: delivered in 90 minutes, live in 6 cities",
          healthy:
            "Each of the 4 lines contains a specific noun, number, or named situation a stranger could picture immediately.",
          unhealthy:
            "Any line reads as a category label ('parents', 'fast delivery', 'better service') instead of a specific, pictureable claim.",
          interpret:
            "A value prop assembled from 4 specific lines is dramatically easier to compress into a single sentence than one written top-down as a single sentence first.",
          soWhat: [
            {
              symptom: "A component reads as a generic label",
              action: "Rewrite it as a specific moment or number before moving to step 2",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-three-drafts",
          concept: "How to Write the Value Prop: A 6-Step Process",
          lessonAnchor: "how-to-write-the-value-prop-a-6-step-process",
          theoryRecap:
            "Step 3 of the process: draft three versions from the same raw material, bold claim, outcome lead, and contrast. You need live data to know which wins, but all three should be shippable candidates.",
          question:
            "Using the 4 anatomy lines from step 1, write one bold-claim version, one outcome-lead version, and one contrast version of the hero sentence.",
          toolName: "Google Docs",
          where: "Same doc, add a '3 Drafts' section below the anatomy lines.",
          procedure: [
            "Bold claim: lead with the number or speed claim",
            "Outcome lead: lead with the emotional payoff, mention the mechanism second",
            "Contrast: lead with what the customer no longer has to do",
          ],
          outputSample:
            "Bold claim: '90-minute baby essentials, 6 cities and counting.'\nOutcome lead: 'Never run out at 9pm again.'\nContrast: 'Skip the emergency pharmacy run. FirstCry delivers in 90 minutes.'",
          healthy:
            "All 3 drafts pass a mental 5-second read and stay under roughly 12 words each.",
          unhealthy:
            "Drafts drift back into feature language ('powered by our logistics network') instead of staying anchored to the Who/What/Contrast lines from step 1.",
          interpret:
            "Three distinct, testable drafts give the team something to A/B test with real traffic instead of debating opinions in a meeting.",
          soWhat: [
            {
              symptom: "All 3 drafts sound nearly identical",
              action: "Go back to step 1 and check whether the How Different line is actually a real contrast",
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
            role: "Draft the anatomy lines and the 3 headline versions",
            why: "Free, fast collaborative drafting before copy goes into a CMS",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page doc with the 4 anatomy lines and 3 testable hero-sentence drafts (bold claim, outcome lead, contrast) for the 90-minute delivery launch.",
      sampleOutput:
        "Instacart, sample-only reference\n\nBold claim: 'Groceries in 30 minutes, not 3 days.'\nOutcome lead: 'Never plan your week around a grocery run again.'\nContrast: 'Skip the store. Instacart delivers before you'd find parking.'",
      successCriteria: [
        "All 4 anatomy lines are specific and pictureable, not category labels",
        "All 3 drafts are distinct in structure (bold claim / outcome / contrast), not minor rewordings",
        "Every draft stays anchored to the Who and How Different established in step 1",
      ],
      portfolioReady: true,
    },
  ],
  "storybrand": [
    {
      id: "storybrand-zendesk-plan-and-cta-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Writing Zendesk's 3-Step Plan and CTA Pair for an AI Feature Launch",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Write Part 4 (a 3-step Plan) and Part 5 (a Direct + Transitional CTA pair) of a StoryBrand BrandScript for a new feature launch page.",
      companyId: "zendesk",
      scenario:
        "Zendesk is launching an AI agent feature for support teams. The current draft launch page lists 9 technical capabilities and has one CTA: 'Request a demo.' Leadership wants it StoryBranded before it ships.",
      brief:
        "Turn the 9-capability spec sheet into a 3-step plan a buyer can follow, and add a low-commitment transitional CTA for the 70-80% of visitors not ready to book a demo yet.",
      mode: "build",
      conceptsCovered: [
        "Part 4: Who Gives a Plan (your process)",
        "Part 5: And Calls Them to Action (CTA)",
      ],
      steps: [
        {
          stepId: "step-1-write-the-plan",
          concept: "Part 4: Who Gives a Plan (your process)",
          lessonAnchor: "part-4-who-gives-a-plan-your-process",
          theoryRecap:
            "The Plan is a clear 3-step process. Three steps is not arbitrary, more steps create hesitation through decision fatigue.",
          question:
            "The 9 capabilities cluster into: (1) connect existing ticket data, (2) configure response rules, (3) go live with a support queue. Turn that cluster into a numbered 3-step plan a buyer could read in 10 seconds.",
          toolName: "Google Docs",
          where: "New doc, 'Plan' heading, 3 numbered lines.",
          procedure: [
            "Group the 9 capabilities into 3 logical stages, not 9 separate steps",
            "Write each stage as an action the customer takes, not a feature the product has",
            "Keep each line under 12 words",
          ],
          outputSample:
            "1. Connect your existing help desk data.\n2. Set the rules your AI agent should follow.\n3. Go live and watch resolution time drop.",
          healthy:
            "Exactly 3 steps, each phrased as something the customer does, in a logical sequence a stranger could follow without asking a question.",
          unhealthy:
            "More than 3 steps, or steps phrased as product features ('AI-powered intent detection') rather than customer actions.",
          interpret:
            "A spec sheet with 9 bullet points feels like work. A 3-step plan feels like a next action, that shift alone is most of what StoryBrand's Plan step is doing.",
          soWhat: [
            {
              symptom: "Plan has more than 3 steps",
              action: "Merge related capabilities into a single stage until only 3 remain",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-write-the-ctas",
          concept: "Part 5: And Calls Them to Action (CTA)",
          lessonAnchor: "part-5-and-calls-them-to-action-cta",
          theoryRecap:
            "Every BrandScript needs two CTAs: a direct CTA (the primary ask) and a transitional CTA (a lower-commitment option) for visitors not ready to buy.",
          question:
            "The current page has only 'Request a demo.' Write a transitional CTA that captures research-mode visitors without asking for a sales call.",
          toolName: "Google Docs",
          where: "Same doc, add 'Direct CTA' and 'Transitional CTA' lines below the Plan.",
          procedure: [
            "Keep or sharpen the direct CTA",
            "Write a transitional CTA offering something lower-commitment (a guide, a recorded demo, a calculator)",
            "Make sure the transitional CTA still relates to the AI feature, not a generic newsletter signup",
          ],
          outputSample:
            "Direct CTA: 'Book a live demo.'\nTransitional CTA: 'Watch the 4-minute AI agent walkthrough.'",
          healthy:
            "The transitional CTA offers real value with zero sales pressure and takes under 5 minutes to consume.",
          unhealthy:
            "Only one CTA remains, or the transitional CTA is a generic 'Subscribe to our newsletter' unrelated to the feature.",
          interpret:
            "Only 20-30% of visitors are ready to buy on a first visit. Without a transitional CTA, the page has no way to keep the other 70-80% in the funnel.",
          soWhat: [
            {
              symptom: "Page has only a direct CTA",
              action: "Add a transitional CTA tied specifically to the feature being launched",
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
            role: "Draft the Plan and CTA block for the launch page",
            why: "Free, fast to draft and hand off to design/dev",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page Plan + CTA block (3-step numbered plan, direct CTA, transitional CTA) ready to drop into the AI feature launch page.",
      sampleOutput:
        "Nubank, sample-only reference\n\nPlan:\n1. Open your account in the app.\n2. Get your card instantly, no branch visit.\n3. Track every transaction in real time.\nDirect CTA: 'Open your free account.'\nTransitional CTA: 'See how the app works in 90 seconds.'",
      successCriteria: [
        "Plan has exactly 3 steps, each a customer action, not a feature list",
        "Both a direct and a transitional CTA are present and distinct",
        "Transitional CTA is specific to the AI feature, not a generic newsletter signup",
      ],
      portfolioReady: true,
    },
    {
      id: "storybrand-instacart-homepage-teardown",
      tier: "core",
      archetype: "reverse-engineer",
      title: "Reverse-Engineering Instacart's Homepage Against the Full SB7 BrandScript",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Reverse-engineer a real company's homepage copy against the 7-part StoryBrand framework, score each part, and identify the brand's biggest hero-mistake risk.",
      companyId: "instacart",
      scenario:
        "You're a messaging consultant brought in ahead of a homepage refresh. Before the team writes new copy, they want a documented teardown of what's currently working and what's silently making the brand the hero instead of the customer.",
      brief:
        "Walk the current homepage copy through Character, Problem, Guide, and the brand-as-hero mistake check, scoring each and citing the exact phrase that earns the score.",
      mode: "diagnostic",
      conceptsCovered: [
        "Part 1: A Character (your customer's desire)",
        "Part 2: Has a Problem (three levels)",
        "Part 3: Meets a Guide (your brand)",
        "Mistake 1: Making your brand the hero",
      ],
      steps: [
        {
          stepId: "step-1-character",
          concept: "Part 1: A Character (your customer's desire)",
          lessonAnchor: "part-1-a-character-your-customers-desire",
          theoryRecap:
            "Name the one thing your ideal customer wants most, one desire, not a feature list.",
          question:
            "Read Instacart's homepage hero copy. What single desire does the current copy name for the visitor, if any?",
          toolName: "Google Sheets",
          where: "New sheet, tab 'Character', columns: Phrase | Desire Named? | Verdict.",
          procedure: [
            "Quote the exact hero phrase from the homepage",
            "State the desire it names, in the customer's words, not the brand's",
            "Mark PASS if a specific desire is named, FAIL if the copy talks about the brand instead",
          ],
          outputSample:
            "Phrase: 'Get groceries delivered in as fast as 30 minutes.'\nDesire named: not having to go to the store, getting time back\nVerdict: PASS, the desire is implicit but clear from the specific time claim.",
          healthy:
            "The desire is stated or strongly implied through a specific, customer-centered phrase (a time saved, a hassle avoided).",
          unhealthy:
            "The copy leads with the brand's scale or awards ('America's largest grocery delivery platform') instead of what the customer gets.",
          interpret:
            "A homepage that opens with a company fact instead of a customer desire has already made the classic StoryBrand mistake in its first line.",
          soWhat: [
            {
              symptom: "Hero line leads with a brand fact, not a desire",
              action: "Rewrite the first line to open with the customer's specific want",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-problem",
          concept: "Part 2: Has a Problem (three levels)",
          lessonAnchor: "part-2-has-a-problem-three-levels",
          theoryRecap:
            "Problems split into External (observable), Internal (emotional frustration), and Philosophical (the deeper injustice). Most brands only name the external layer.",
          question:
            "Scan the homepage for language addressing each of the 3 problem levels. Which levels are present, and which is missing?",
          toolName: "Google Sheets",
          where: "New tab 'Problem', rows: External | Internal | Philosophical.",
          procedure: [
            "Find any phrase addressing the external problem (no time to shop)",
            "Find any phrase addressing the internal problem (the stress of a packed week)",
            "Find any phrase addressing the philosophical problem (nobody should have to sacrifice family time for errands)",
            "Mark PRESENT or MISSING for each with the supporting phrase",
          ],
          outputSample:
            "External: PRESENT, 'delivered in as fast as 30 minutes'\nInternal: MISSING, no phrase names the stress or overwhelm of grocery runs\nPhilosophical: MISSING, no phrase frames this as a values-level statement",
          healthy:
            "At least the external and internal layers are present with a specific supporting phrase for each.",
          unhealthy:
            "Only the external problem is addressed, which the lesson flags as the most common and most costly gap.",
          interpret:
            "Missing the internal problem means the copy is functionally correct but emotionally flat, it tells visitors what happens, not how their week will feel different.",
          soWhat: [
            {
              symptom: "Internal problem layer is missing",
              action: "Add one phrase naming the emotional frustration (the mental load of meal planning, the guilt of a wasted weekend on errands)",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-guide",
          concept: "Part 3: Meets a Guide (your brand)",
          lessonAnchor: "part-3-meets-a-guide-your-brand",
          theoryRecap:
            "The guide shows empathy (understanding the customer's frustration) and authority (proof it can help). The guide is a supporting character, not the hero.",
          question:
            "Find one phrase showing empathy and one showing authority on the homepage. Is either missing?",
          toolName: "Google Sheets",
          where: "New tab 'Guide', columns: Empathy Phrase | Authority Phrase | Verdict.",
          procedure: [
            "Quote a phrase showing Instacart understands the customer's situation",
            "Quote a phrase proving Instacart can deliver (a number, a stat, a scale claim)",
            "Verdict: does authority proof exist without tipping into hero language?",
          ],
          outputSample:
            "Empathy: implicit only, no direct 'we know grocery shopping is exhausting' line\nAuthority: PRESENT, delivery speed and coverage claims\nVerdict: authority is strong, empathy is thin, add one explicit empathy line",
          healthy:
            "Authority proof is specific (a number, a named retailer count) and empathy is stated in the customer's language, not the brand's achievements.",
          unhealthy:
            "Authority claims read as bragging ('the #1 grocery delivery app') with no accompanying empathy line, the classic hero-not-guide slip.",
          interpret:
            "Authority without empathy reads as a brand talking about itself. Pairing both is what makes a guide feel trustworthy instead of self-promotional.",
          soWhat: [
            {
              symptom: "Empathy phrase is missing or implicit only",
              action: "Add one explicit line naming the customer's frustration before stating the authority proof",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-hero-mistake-check",
          concept: "Mistake 1: Making your brand the hero",
          lessonAnchor: "mistake-1-making-your-brand-the-hero",
          theoryRecap:
            "The most common StoryBrand mistake: sentences that spotlight the brand ('industry leader', 'award-winning') instead of the customer's want or problem.",
          question:
            "Scan the full homepage for any sentence that could be rewritten as 'we are great' rather than 'here's what you get.' List every instance found.",
          toolName: "Google Sheets",
          where: "New tab 'Hero Mistake Check', columns: Phrase | Brand-as-Hero? | Rewrite.",
          procedure: [
            "List every brand-centric phrase found across the homepage",
            "Mark each as a hero-mistake instance",
            "Write a one-line customer-centered rewrite for the worst offender",
          ],
          outputSample:
            "Phrase: 'America's largest online grocery platform.'\nBrand-as-hero? YES, spotlights scale, not customer benefit\nRewrite: 'Shop from 1,400+ stores near you, all delivered to your door.'",
          healthy:
            "Zero or one hero-mistake instance found, and any found is paired with an immediate customer-centered rewrite.",
          unhealthy:
            "3 or more brand-centric phrases found in the primary above-the-fold copy, signaling a systemic hero-mistake pattern, not a one-off line.",
          interpret:
            "A homepage that names itself before it names the customer's desire is optimizing for pride, not conversion, exactly the failure mode this lesson's Mistake 1 warns about.",
          soWhat: [
            {
              symptom: "Multiple brand-as-hero phrases found",
              action: "Rewrite the worst offender first, then re-run the Character check from step 1 to confirm the fix",
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
            role: "Score all 7 BrandScript parts against the real homepage copy",
            why: "Free, structures the 4-tab teardown into a reusable scorecard",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 4-part BrandScript scorecard (Character, Problem, Guide, Hero-Mistake Check) for Instacart's homepage, with the top 2 rewrite recommendations.",
      sampleOutput:
        "Zendesk homepage teardown excerpt (reference)\n\nCharacter: PASS, 'get every customer question answered fast' names a clear want\nProblem, Internal: MISSING, no line names the stress of an overflowing support queue\nHero Mistake: 1 instance found ('the #1 rated support platform'), rewrite to 'Answer every ticket without the 3am panic.'",
      successCriteria: [
        "All 4 scorecard tabs are completed with an exact quoted phrase, not a paraphrase",
        "At least one internal-problem gap is correctly identified if present",
        "Hero-mistake check lists every instance found, with a customer-centered rewrite for the worst one",
      ],
      portfolioReady: true,
    },
  ],

  "b2b-copy": [
    {
      id: "b2b-copy-pain-proof-process-rewrite",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Pain-Proof-Process Solution Page From Scratch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a raw product brief and three customer interview quotes, write a full B2B solution page section using the Pain-Proof-Process framework: a specific pain headline, matched proof, and a process block that lowers perceived risk.",
      companyId: "freshworks",
      scenario:
        "You're a copywriter for Freshworks, briefed to write a new solution page for a mid-market IT helpdesk add-on. Sales has flagged that the current page reads like a feature list and buyers bounce before requesting a demo.",
      brief:
        "Turn a raw product brief and three anonymized customer interview quotes into a Pain-Proof-Process page section: one specific pain headline, one matched proof block with a named result, and a 3-step process block with a low-risk CTA.",
      mode: "build",
      conceptsCovered: [
        "Identifying the exact, quantified pain in the buyer's own language",
        "Matching proof directly to the pain named in the headline",
        "Writing a process block that reduces risk aversion",
        "Writing a low-risk CTA for a cold B2B audience",
      ],
      steps: [
        {
          stepId: "step-1-pain-headline",
          concept: "Identifying the exact, quantified pain in the buyer's own language",
          lessonAnchor: "step-1-identify-the-exact-pain",
          theoryRecap:
            "The lesson's Step 1 says pain must be specific to a role, quantified where possible, and written in the buyer's own words, not product language.",
          question:
            "One interview quote reads: 'Our IT team re-opens the same 15 tickets every week because agents can't see which device the employee is on.' Turn that into a headline. Which version survives Step 1's three tests?",
          toolName: "Google Docs",
          where: "Draft the headline in a new Google Doc, one line at a time, before writing any other copy.",
          procedure: [
            "Read all 3 interview quotes and underline every number and role mentioned",
            "Draft 3 headline candidates using only the buyer's own words",
            "Reject any headline that could describe a competitor's product unchanged",
            "Keep the headline that names a role, a frequency, and a concrete consequence",
          ],
          outputSample:
            "REJECTED: \"Streamline your IT support workflow.\"\nREJECTED: \"Better visibility for helpdesk teams.\"\nKEPT: \"Your IT team re-opens the same 15 tickets a week because agents can't see which device the employee is on.\"",
          healthy:
            "The kept headline names a role (IT team), a frequency (a week), and a consequence (reopened tickets) pulled straight from the interview transcript.",
          unhealthy:
            "A headline like 'Streamline your IT support workflow' survives unedited because it never gets tested against a real customer quote.",
          interpret:
            "A pain headline that could sit unchanged on a competitor's page has failed Step 1, no matter how polished it sounds.",
          soWhat: [
            {
              symptom: "Headline drafts keep sounding like every other SaaS homepage",
              action: "Re-read the raw interview transcript and lift a direct quote instead of paraphrasing",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-matched-proof",
          concept: "Matching proof directly to the pain named in the headline",
          lessonAnchor: "step-2-stack-the-proof",
          theoryRecap:
            "Step 2 says proof must directly answer the pain named in the headline; a mismatched testimonial (great product, wrong problem) undermines trust.",
          question:
            "You have two customer quotes available: one about faster onboarding, one about ticket re-opens dropping after device visibility was added. Which one goes directly under the pain headline?",
          toolName: "Google Docs",
          where: "Paste both candidate quotes into the doc under the headline and compare them against the pain statement.",
          procedure: [
            "Re-read the pain headline drafted in Step 1",
            "Place the ticket re-open quote directly beneath it",
            "Move the onboarding quote to a different section addressing a different pain",
            "Add the customer's name, title, and company to the kept quote",
          ],
          outputSample:
            "\"Reopened tickets dropped from 15 a week to 2 within a month of turning on device visibility.\"\n— Priya Menon, IT Operations Lead, a 400-seat mid-market logistics firm",
          healthy:
            "The proof block answers the exact pain named above it, with a named person, title, and a before/after number.",
          unhealthy:
            "The onboarding-speed quote gets placed under the ticket-reopen headline because it was the strongest quote available, not the most relevant one.",
          interpret:
            "Strong proof in the wrong place reads as filler; buyers notice the mismatch even if they can't name it.",
          soWhat: [
            {
              symptom: "A page has great testimonials but demo requests stay flat",
              action: "Check whether each testimonial sits under the pain it actually solves",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-process-and-cta",
          concept: "Writing a process block that reduces risk aversion",
          lessonAnchor: "step-3-show-the-process",
          theoryRecap:
            "Step 3 frames a 'how it works' section as the antidote to risk aversion, the dominant emotion in B2B buying; each step needs a concrete deliverable.",
          question:
            "Sales says the biggest objection at this stage is 'this will take weeks of our IT team's time to set up.' Write a 3-step process block that answers that objection directly.",
          toolName: "Google Docs",
          where: "Add a numbered process block beneath the proof block, then close with one CTA.",
          procedure: [
            "List every setup task the vendor's own team handles, versus what the buyer's team must do",
            "Write 3 numbered steps, each with a day count and a concrete deliverable",
            "Write one CTA that asks for time, not budget or a signature",
          ],
          outputSample:
            "1. Kickoff call (Day 1): We import your existing device inventory in 30 minutes.\n2. Configuration (Days 2-3): Our team maps devices to employees. No IT engineering hours required.\n3. Go live (Day 4): Your team sees the device-visibility dashboard live.\n\nCTA: See a 15-minute demo",
          healthy:
            "Each step has a day count, a named owner, and a deliverable; the CTA asks for a short block of time, not a purchase.",
          unhealthy:
            "The process block lists internal engineering milestones instead of buyer-facing deliverables, or the CTA says 'Start your trial' to a first-time visitor.",
          interpret:
            "A process block that never mentions who does the work leaves the 'weeks of IT time' objection unanswered.",
          soWhat: [
            {
              symptom: "Prospects stall right after reading the 'how it works' section",
              action: "Check whether every step names who does the work and how long it takes",
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
            role: "Draft and iterate the page copy",
            why: "Free, easy to share with sales for objection-handling review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete Pain-Proof-Process page section: one pain headline, one matched proof block with named source, a 3-step process block, and one low-risk CTA.",
      sampleOutput:
        "Wise, IT helpdesk add-on solution page (excerpt)\n\nPAIN\n\"Your finance team re-approves the same 8 international payments every week because your payment platform can't flag duplicate vendor IDs.\"\n\nPROOF\n\"Duplicate-approval requests dropped from 8 a week to 1 within three weeks of enabling vendor ID matching.\"\n— Tomas Berg, Finance Operations Manager\n\nPROCESS\n1. Kickoff call (Day 1): We import your vendor list in 20 minutes.\n2. Matching setup (Days 2-3): Our team configures ID matching. No engineering hours required on your side.\n3. Go live (Day 4): Duplicate flags appear in your existing approval queue.\n\nCTA: See a 15-minute demo",
      successCriteria: [
        "Pain headline is specific, quantified, and pulled from the buyer's own words, not paraphrased",
        "Proof block sits directly under the pain it answers and includes a named source with a before/after number",
        "Process block names who does the work and how long each step takes",
        "CTA asks for a low-commitment next step (time), not a purchase",
      ],
      portfolioReady: true,
      stretch:
        "Write a second mini Pain-Proof-Process loop for a different stakeholder on the buying committee (e.g. the IT security reviewer) addressing a compliance-specific pain.",
    },
    {
      id: "b2b-copy-committee-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Committee Test: Auditing a B2B Page for Every Stakeholder",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real B2B solution page draft, identify which buying-committee stakeholders are addressed, which are ignored, and which sections violate the lesson's 5 common mistakes.",
      companyId: "snowflake",
      scenario:
        "You're reviewing a solution page draft for a Snowflake data-governance add-on before it ships. Sales flagged that security and IT reviewers keep stalling deals at the final stage.",
      brief:
        "Read the page section by section, tag each section by which stakeholder it serves (economic buyer, technical buyer, end user, security/compliance reviewer), and flag any of the lesson's 5 common mistakes.",
      mode: "diagnostic",
      conceptsCovered: [
        "Writing to the whole buying committee, not one persona",
        "Spotting the 5 common B2B copy mistakes",
      ],
      steps: [
        {
          stepId: "step-1-stakeholder-map",
          concept: "Writing to the whole buying committee, not one persona",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 4 says copy that only speaks to the end user gives the CFO, IT lead, and legal reviewer nothing to hold onto; every key stakeholder needs at least one proof or process point.",
          question:
            "The draft page has 5 sections: hero, 'why teams love it', pricing, a security FAQ, and a CTA. Which stakeholder does each section actually serve, and which stakeholder has zero sections?",
          toolName: "Google Sheets",
          where: "Build a 2-column tracker: section name, stakeholder served.",
          procedure: [
            "List all 5 sections from the draft page down one column",
            "Tag each section with the stakeholder it primarily serves",
            "Circle any stakeholder from the committee (economic buyer, technical buyer, end user, security/compliance) with zero tagged sections",
          ],
          outputSample:
            "Hero -> end user\n\"Why teams love it\" -> end user\nPricing -> economic buyer\nSecurity FAQ -> security/compliance reviewer\nCTA -> none (generic)\n\nMISSING: technical buyer (no section addresses integration or data architecture)",
          healthy:
            "The tracker surfaces at least one gap; catching it before launch is the entire point of the audit.",
          unhealthy:
            "Every section gets tagged 'end user' because the page was written from one persona's point of view throughout.",
          interpret:
            "A stakeholder with zero sections is a stakeholder who will stall the deal, exactly the pattern behind the 89% stalled-deal statistic in the lesson.",
          soWhat: [
            {
              symptom: "Deals stall after the technical review call",
              action: "Add a section addressing the technical buyer's integration questions directly",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-mistake-flags",
          concept: "Spotting the 5 common B2B copy mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson lists 5 recurring B2B copy mistakes: company-centric opens, generic pain, proof without specifics, ignoring the committee, and high-friction CTAs on cold traffic.",
          question:
            "The draft's hero opens with 'Founded in 2012, Snowflake is a leading data cloud provider.' Which mistake is this, and what should replace it?",
          toolName: "Google Sheets",
          where: "Add a third column to the tracker: mistake flagged (if any).",
          procedure: [
            "Re-read each section against the lesson's 5 mistakes",
            "Flag the hero as Mistake 1 (leading with the company, not the buyer's problem)",
            "Flag the CTA ('Start your enterprise trial') as Mistake 5 (high-friction CTA on cold traffic)",
            "Write one replacement line for each flagged section",
          ],
          outputSample:
            "Hero: MISTAKE 1 (company-centric open) -> replace with a named data-governance pain\nCTA: MISTAKE 5 (high-friction, cold traffic) -> replace \"Start enterprise trial\" with \"See a 15-minute demo\"",
          healthy:
            "Every flagged mistake has a specific, one-line replacement, not just a note that something is wrong.",
          unhealthy:
            "The audit stops at 'this section feels off' without naming which of the 5 mistakes applies or how to fix it.",
          interpret:
            "Naming the exact mistake is what makes the audit actionable for whoever rewrites the page next.",
          soWhat: [
            {
              symptom: "A page opens with company history instead of the buyer's problem",
              action: "Rewrite the first sentence to name the buyer's pain instead of the founding date",
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
            role: "Track stakeholder coverage and flagged mistakes",
            why: "Free, easy to hand off to the copywriter doing the rewrite",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A stakeholder-coverage tracker flagging every uncovered committee member and every one of the lesson's 5 common mistakes found on the page, with a one-line fix for each.",
      sampleOutput:
        "Adyen, payments-API solution page audit (excerpt)\n\nGAP: no section addresses the technical buyer's integration timeline\nMISTAKE 3 (proof without specifics): testimonial reads \"Great platform, highly recommend\" — needs a name, title, and a number\nFIX: replace with \"Settlement reconciliation time dropped from 3 days to same-day.\" — Elena Kovacs, Finance Director",
      successCriteria: [
        "All 4 buying-committee stakeholder types are checked against the page, with any gap explicitly named",
        "Every flagged section is tied to one of the lesson's 5 named mistakes, not a vague note",
        "Each flag includes a concrete one-line replacement",
      ],
      portfolioReady: true,
    },
  ],
  "copy-for-ai-search": [
    {
      id: "ai-search-answer-first-rewrite",
      tier: "mini",
      archetype: "rebuild",
      title: "Rebuild a Buried-Answer Intro Into AI-Citable Copy",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a 300-word blog introduction that buries its answer in paragraph 4, rewrite it using the lesson's 5 principles so the answer, the data, and the definition all appear in the first 100 words.",
      companyId: "freshworks",
      scenario:
        "You're a content strategist at Freshworks. Your 'What is a Service Level Agreement (SLA)?' blog post ranks on Google but never appears in ChatGPT Search or AI Overviews for the same query.",
      brief:
        "Rewrite the intro so the direct answer, one specific stat with a source and year, and a precise inline definition all land in the first 100 words.",
      mode: "build",
      conceptsCovered: [
        "Answer-first writing: leading with the answer, not the setup",
        "Including specific data with a year and a named source",
        "Defining terms precisely, inline, at first use",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-buried-answer",
          concept: "Answer-first writing: leading with the answer, not the setup",
          lessonAnchor: "answer-first-writing-the-core-principle",
          theoryRecap:
            "The lesson's core principle: lead with the answer, not the setup. An AI model scanning dozens of sources pulls the source that answers immediately with specificity.",
          question:
            "The current intro spends 3 sentences on 'many businesses struggle with SLAs' before defining the term in sentence 4. Where does the actual definition need to move?",
          toolName: "Google Docs",
          where: "Paste the existing intro into a doc and mark where the real answer currently sits.",
          procedure: [
            "Highlight the sentence that actually defines the term",
            "Count how many words come before it",
            "Cut every sentence before the definition that doesn't add new information",
            "Move the definition to the first sentence",
          ],
          outputSample:
            "BEFORE (buried at word 61): \"...But what exactly is a service level agreement, and why does it matter? An SLA is a contract that defines...\"\nAFTER (word 1): \"A service level agreement (SLA) is a contract that defines the minimum level of service a vendor guarantees, including response time and uptime commitments.\"",
          healthy:
            "The definition now sits in the first sentence, with zero throat-clearing before it.",
          unhealthy:
            "The rewrite keeps a scene-setting opening sentence ('In today's competitive business landscape...') before the definition.",
          interpret:
            "Every word before the answer is a word an AI model has to scan past; some skip the source entirely once a scan limit is hit.",
          soWhat: [
            {
              symptom: "A page ranks on Google but never appears in ChatGPT Search citations",
              action: "Move the direct definition or answer to the literal first sentence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-add-specific-data",
          concept: "Including specific data with a year and a named source",
          lessonAnchor: "2-include-specific-data-with-year-and-source",
          theoryRecap:
            "Vague claims don't get cited; specific data does. Include the year, the organization, and the metric so AI models can weigh source credibility.",
          question:
            "The draft currently says 'SLA breaches are common and costly.' What has to be added for this to survive Principle 2?",
          toolName: "Google Docs",
          where: "Replace the vague claim with a sourced, dated statistic in the same sentence.",
          procedure: [
            "Search for one specific, dated statistic about SLA breach costs or frequency",
            "Add the organization name and year directly into the sentence",
            "Add the exact metric, not a rounded generality",
          ],
          outputSample:
            "BEFORE: \"SLA breaches are common and costly.\"\nAFTER: \"According to a 2025 Uptrends survey, 62% of IT teams reported at least one vendor SLA breach in the past 12 months, with an average resolution delay of 4.5 hours beyond the guaranteed window.\"",
          healthy:
            "The sentence names a source, a year, and an exact number, giving an AI model a citable, attributable fact.",
          unhealthy:
            "The rewrite adds a number with no source ('62% of teams report breaches'), which reads as unverifiable and is less likely to be extracted.",
          interpret:
            "A number without a named source and year is barely more citable than no number at all.",
          soWhat: [
            {
              symptom: "A stat exists in the draft but AI tools still don't cite the page",
              action: "Check whether the stat names its source and year in the same sentence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-precise-definition",
          concept: "Defining terms precisely, inline, at first use",
          lessonAnchor: "3-define-terms-precisely-not-casually",
          theoryRecap:
            "Every niche term should be defined inline immediately after first use; AI models extract definitions to populate answer summaries, so a vague definition never gets extracted.",
          question:
            "The rewritten intro uses the term 'uptime commitment' without defining it. Does this term need its own inline definition, and if so, where?",
          toolName: "Google Docs",
          where: "Scan the rewritten intro for any term used before it's defined.",
          procedure: [
            "List every specialized term in the first 150 words",
            "Check each one against the SLA definition already written",
            "Add a one-sentence inline definition for any term not yet covered",
          ],
          outputSample:
            "ADDED: \"An uptime commitment, the percentage of time a service must remain operational, is typically the single most negotiated line item in an SLA (e.g. 99.9% uptime allows roughly 8.7 hours of downtime per year).\"",
          healthy:
            "Every specialized term used before this point in the article now has an inline, one-sentence definition next to it.",
          unhealthy:
            "The term 'uptime commitment' is used three times in the article before ever being defined, forcing a reader (or an AI model) to infer its meaning.",
          interpret:
            "A precise, inline definition is exactly what an AI model extracts to answer 'what does uptime commitment mean' as a follow-up query.",
          soWhat: [
            {
              symptom: "A related term keeps appearing undefined across multiple posts",
              action: "Add a one-sentence inline definition the first time the term appears in each post",
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
            role: "Draft and restructure the rewritten intro",
            why: "Free, simple side-by-side before/after editing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A rewritten 100-150 word intro with the answer in sentence 1, one sourced and dated statistic, and every specialized term defined inline at first use.",
      sampleOutput:
        "Wise, \"What is an FX conversion spread?\" intro rewrite (excerpt)\n\nAn FX conversion spread is the difference between the real mid-market exchange rate and the rate a bank or provider actually charges you. According to a 2025 Wise research report, average bank FX spreads run 3-5%, compared to under 0.5% for providers using the real mid-market rate. A hidden spread, a markup built into the exchange rate rather than shown as a separate fee, is the main reason two providers can advertise \"no transfer fees\" yet cost very differently.",
      successCriteria: [
        "The direct answer/definition appears in the first sentence, with no scene-setting before it",
        "At least one statistic includes a named source and a year in the same sentence",
        "Every specialized term used is defined inline at first mention",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-search-citability-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Citability Audit: Scoring a Live Page Against the 5 Principles",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a live blog post, score it against the lesson's 5 principles of AI-citable copy and flag which of the 3 common mistakes are present.",
      companyId: "adyen",
      scenario:
        "You're auditing an Adyen blog post about payment authorization rates before a content refresh, using the lesson's framework instead of guessing why it never appears in AI Overviews.",
      brief:
        "Score the page 0-5 against the 5 principles, one point each, and separately flag any of the lesson's 3 named mistakes present in the copy.",
      mode: "diagnostic",
      conceptsCovered: [
        "Using clear structural formatting AI models can parse",
        "Building entity authority across the web on one topic",
        "Spotting keyword stuffing, thin content, and buried answers",
      ],
      steps: [
        {
          stepId: "step-1-structure-check",
          concept: "Using clear structural formatting AI models can parse",
          lessonAnchor: "4-use-clear-structural-formatting",
          theoryRecap:
            "Headers, bullet lists, numbered steps, and tables are machine-readable signals to AI models about what information matters; a 500-word paragraph is less likely to be cited than the same data structured as a list.",
          question:
            "The Adyen post has one 480-word paragraph explaining factors that affect authorization rates. Does this pass Principle 4?",
          toolName: "Google Sheets",
          where: "Build a 5-row scoring tracker, one row per principle, with a 0/1 score and a note.",
          procedure: [
            "Read the section covering authorization-rate factors",
            "Check whether the factors are presented as a structured list or buried in prose",
            "Score 0 if the data is prose-only, 1 if structured as a list or table",
          ],
          outputSample:
            "Principle 4 (structure): 0/1\nNote: 480-word paragraph mixes 6 different factors (BIN routing, retry logic, 3DS, card type, issuer bank, currency) with no list or table breaking them apart.",
          healthy:
            "The audit produces a specific fix, not just a low score: convert the paragraph into a labeled list.",
          unhealthy:
            "The audit notes 'this section is dense' without identifying that it should become a structured list.",
          interpret:
            "A prose paragraph mixing 6 factors is exactly the shape an AI model skips past when it needs one specific, parseable fact.",
          soWhat: [
            {
              symptom: "A page has good data but never gets cited for specific stats",
              action: "Convert the densest data paragraph into a labeled bullet list or table",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-authority-and-mistakes",
          concept: "Building entity authority across the web on one topic",
          lessonAnchor: "5-entity-authority-across-the-web",
          theoryRecap:
            "Content is cited more when the brand is consistently associated with the topic across multiple sources; AI models check whether the author or brand is repeatedly connected to the topic across the web, not just on the domain.",
          question:
            "A search for 'Adyen authorization rate' turns up only the company's own blog post, no podcast mentions, guest articles, or forum discussions. Does this pass Principle 5, and what's the highest-priority mistake to flag separately?",
          toolName: "Google Sheets",
          where: "Add rows for Principle 5 and the 3 named mistakes to the same tracker.",
          procedure: [
            "Search the topic name plus the brand name across the web, not just the domain",
            "Score Principle 5 based on whether authority signals exist off-domain",
            "Check the post's intro against the lesson's 'burying the answer' mistake",
            "Check the post's keyword density against the 'keyword stuffing' mistake",
          ],
          outputSample:
            "Principle 5 (entity authority): 0/1 — no off-domain mentions found\nMistake flagged: buried answer — the definition of 'authorization rate' appears in paragraph 3, not paragraph 1\nMistake not present: keyword stuffing — term usage reads naturally\n\nTOTAL SCORE: 2/5",
          healthy:
            "The audit separates the 5-point structural score from the named-mistake flags, so the content team gets two distinct, actionable lists.",
          unhealthy:
            "The audit conflates a low score with 'bad content' instead of pointing to the specific missing principle or present mistake.",
          interpret:
            "A page can score well on structure and still fail on entity authority; the two problems need different fixes (rewriting the page vs. placing the topic elsewhere on the web).",
          soWhat: [
            {
              symptom: "A well-structured page still isn't cited by AI search tools",
              action: "Check whether the brand is discussed on this exact topic anywhere off its own domain",
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
            role: "Score the page against the 5 principles and log flagged mistakes",
            why: "Free, easy to hand to a content team as a prioritized fix list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-point citability scorecard for the audited page, plus a separate list of any of the lesson's 3 named mistakes present, each with a one-line fix.",
      sampleOutput:
        "Snowflake, \"Data warehouse vs. data lake\" post audit (excerpt)\n\nPrinciple 1 (answer-first): 1/1\nPrinciple 2 (specific data): 0/1 — no dated source cited\nPrinciple 3 (precise definitions): 1/1\nPrinciple 4 (structure): 1/1 — comparison table already present\nPrinciple 5 (entity authority): 0/1 — no off-domain mentions found\nTOTAL: 3/5\n\nMistake flagged: none of the 3 named mistakes present",
      successCriteria: [
        "All 5 principles are scored individually with a specific note, not a single overall impression",
        "Structural and off-domain-authority problems are diagnosed as separate issues with separate fixes",
        "Each of the 3 named mistakes is explicitly checked and reported present or absent",
      ],
      portfolioReady: true,
    },
  ],

  "ogilvy-halbert-sugarman": [
    {
      id: "ogilvy-rolls-royce-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineering Ogilvy's Rolls-Royce Ad",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given the real text of Ogilvy's 1959 Rolls-Royce ad, tag each sentence as Hook, Build, or Close, and identify the single specific fact carrying the headline's persuasive weight.",
      companyId: "policybazaar",
      scenario:
        "You're a junior copywriter at PolicyBazaar about to write your first long-form insurance product page. Your manager hands you Ogilvy's Rolls-Royce ad and says: study this before you write a word.",
      brief:
        "Map the ad's structure sentence by sentence, then name the one fact doing the headline's persuasive work.",
      mode: "diagnostic",
      conceptsCovered: ["Mapping copy against the Hook-Build-Close structure"],
      steps: [
        {
          stepId: "step-1-map-the-structure",
          concept: "Mapping copy against the Hook-Build-Close structure",
          lessonAnchor: "how-it-works-the-canon-playbook",
          theoryRecap:
            "The lesson's Canon Playbook breaks persuasive copy into Hook (earns the next sentence), Build (stacks proof in logical order), and Close (removes risk, gives one action).",
          question:
            "Given the headline 'At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock' and the body facts below, which sentence is the Hook, which are Build, and why does the headline contain zero adjectives?",
          toolName: "Google Docs",
          where: "Paste the ad text into a Google Doc, use comments to tag each sentence.",
          procedure: [
            "Paste the headline and three body facts into a Google Doc: the electric clock line, 'every engine run seven hours at full throttle before installation', 'three mufflers tune out sound frequencies, acoustically'",
            "Highlight the headline and label it Hook",
            "Highlight the two engineering facts and label them Build",
            "Note that Ogilvy spent three weeks reading engineering reports before writing this ad, and write one sentence on why that research step made the headline possible",
          ],
          outputSample:
            "HOOK\n'At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock.'\n\nBUILD\n'Every Rolls-Royce engine is run for seven hours at full throttle before installation.'\n'Three mufflers tune out sound frequencies, acoustically.'",
          healthy:
            "The tagged Hook contains zero adjectives, zero superlatives, and one verifiable fact found in an engineering report.",
          unhealthy:
            "Assuming the headline is pure 'creative flair' and trying to write a similarly punchy line without doing the underlying research first.",
          interpret:
            "The headline's power comes entirely from research (Stage 1), not wordsmithing; specificity beats adjectives.",
          soWhat: [
            {
              symptom: "Draft headline uses words like 'luxurious' or 'premium' instead of a specific fact",
              action: "Go back to source material (spec sheets, user interviews) and pull one verifiable fact instead",
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
            role: "Tag and annotate the ad text",
            why: "Free, comments make the tagging visible and shareable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated copy of the Rolls-Royce ad with every sentence tagged Hook/Build/Close, plus a one-line explanation of why the headline works.",
      sampleOutput:
        "Applying the same tagging method to Robinhood's early landing page copy (excerpt)\n\nHOOK\n'Investing without commission fees.'\n\nBUILD\n'Buy and sell stocks and ETFs with zero commission.'\n'No account minimums.'\n\nCLOSE\n'Get your first stock free.'\n[Sign up]",
      successCriteria: [
        "Correctly tags the headline as Hook and both engineering facts as Build",
        "States the specific fact (not an adjective) that carries the headline's persuasion",
      ],
      portfolioReady: false,
    },
    {
      id: "halbert-sugarman-build-landing-page",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Direct-Response Landing Page Section Using the Canon",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real product brief, write a Hook headline and a Close section for a landing page that apply Halbert's specificity principle and Sugarman's guarantee-then-one-action close.",
      companyId: "coinbase",
      scenario:
        "You're a lifecycle copywriter at Coinbase launching a new recurring-buy feature. Marketing wants landing page copy that converts skeptical, crypto-cautious readers, not just crypto enthusiasts.",
      brief:
        "Apply the Hook-Close structure: a specific, curiosity-driven headline instead of a category claim, and a close with a real guarantee sentence paired with exactly one call to action.",
      mode: "build",
      conceptsCovered: [
        "Writing a specific, curiosity-driven hook instead of a vague headline",
        "Closing with a guarantee and a single call to action",
      ],
      steps: [
        {
          stepId: "step-1-write-the-specific-hook",
          concept: "Writing a specific, curiosity-driven hook instead of a vague headline",
          lessonAnchor: "stage-2-hook",
          theoryRecap:
            "The lesson's Stage 2 says the hook's only job is to earn the next sentence, using a surprising fact, a specific promise, or a curiosity gap. Ogilvy wrote at least 100 headline variations before picking one.",
          question:
            "Given the brief ('recurring weekly crypto buys, set once, no manual trading'), which headline actually earns the next sentence: 'Investing made easy' or 'Buy $25 of Bitcoin every Friday without opening the app'?",
          toolName: "Google Docs",
          where: "Draft in a Google Doc, write at least 8 headline variations before picking one.",
          procedure: [
            "Write down the one specific fact about the feature you'd tell a friend (e.g. 'set once, runs every Friday')",
            "Draft at least 8 headline variations built around that one fact, not the product category",
            "Cut every headline that could describe a competitor's product just as well",
            "Select the headline with the most specific, verifiable detail",
          ],
          outputSample:
            "8 headline drafts (excerpt)\n1. Investing made easy [cut, vague]\n2. Buy $25 of Bitcoin every Friday without opening the app [kept]\n3. Set it once. Never think about it again. [kept as subhead]\n4. Crypto investing, simplified [cut, vague]",
          healthy:
            "The winning headline names the exact mechanic (weekly, $25, no manual trading) instead of a category claim.",
          unhealthy:
            "Shipping 'Investing made easy' because it 'sounds like a headline' even though it says nothing a competitor couldn't also claim.",
          interpret:
            "A headline that could sit on any competitor's page unchanged is not doing its job; specificity is what makes it yours.",
          soWhat: [
            {
              symptom: "Draft headline reads like generic fintech marketing copy",
              action: "Rewrite around the single most specific fact about the feature",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-close-with-guarantee-and-one-cta",
          concept: "Closing with a guarantee and a single call to action",
          lessonAnchor: "stage-4-close",
          theoryRecap:
            "The lesson's Stage 4 states all three masters agreed: remove risk with a guarantee, then give exactly one specific action. Two calls to action and the reader takes neither.",
          question:
            "The draft page currently has two buttons, 'Learn More' and 'Get Started', and no guarantee language. What's the fix?",
          toolName: "Google Docs",
          where: "Same Google Doc, close section at the bottom of the page draft.",
          procedure: [
            "Write one specific, real guarantee tied to the feature (e.g. 'Cancel your recurring buy anytime, no fee')",
            "Delete every button except one",
            "Replace 'Learn More' with a specific action verb phrase, e.g. 'Set my first buy'",
            "Read the close out loud, confirm it removes risk before it asks for action",
          ],
          outputSample:
            "Close (before)\n[Learn More]  [Get Started]\n\nClose (after)\nCancel anytime, no fee, no lock-in.\n[Set my first buy]",
          healthy: "One guarantee sentence followed by exactly one button with a specific action verb.",
          unhealthy:
            "Two buttons competing for the same click, or a guarantee buried in a footer terms link instead of next to the CTA.",
          interpret: "Risk removal has to sit right next to the single action, not somewhere else on the page.",
          soWhat: [
            {
              symptom: "Landing page has more than one primary CTA button",
              action: "Cut all but one CTA and move the guarantee sentence directly above it",
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
            role: "Draft and iterate the headline and close copy",
            why: "Free, comment and version history built in",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A landing page Hook + Close section (headline, subhead, guarantee line, single CTA) ready to hand to design, plus the 8 rejected headline variants showing the elimination work.",
      sampleOutput:
        "Robinhood recurring-buy landing page (excerpt)\n\nHOOK\nBuy $10 of any stock every payday, automatically.\nSet it once. Never think about it again.\n\nCLOSE\nPause or cancel anytime, no fees, no minimums.\n[Set my first buy]",
      successCriteria: [
        "Headline names one specific, verifiable mechanic instead of a category benefit",
        "Close pairs a real guarantee sentence directly above exactly one CTA button",
      ],
      portfolioReady: true,
      stretch:
        "Run the two headline finalists as an actual A/B test if you have access to a live page, and report which one wins.",
    },
  ],

  "ad-copy": [
    {
      id: "ad-copy-channel-mindset-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Ad Copy Audit: Spot the Channel-Mindset Mismatch",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 4 draft ad copy specimens across search, social, and display, identify which violate the lesson's channel-mindset rules, cite the specific rule broken, and recognize the one specimen that actually passes review.",
      companyId: "grab",
      scenario:
        "You're a freelance PPC copywriter reviewing Grab's newly drafted ad set before it goes live across Google Search, an Instagram feed placement, and a partner display network.",
      brief:
        "Read each specimen, flag genuine defects versus plausible-but-fine copy, and cite which channel rule each defect breaks. Do not flag copy that is actually correct just because it looks unusual.",
      mode: "teardown",
      conceptsCovered: ["Step 2: Write to the Mindset", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "item-1-search-superlative",
          specimen:
            "Search ad (Grab):\nH1: \"Grab: World's Best Ride App\"\nH2: \"Download Now\"\nH3: \"Grab Rides\"\nDescription: \"Experience the best ride-hailing service in Southeast Asia. Highly rated and trusted by millions.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "This search ad ran for two weeks at a 3.1% CTR, well under the 6.66% cross-industry average. Identify the defects.",
          answerKey: [
            {
              defect: "H1 leans on an unproven superlative ('World's Best') instead of a proof point.",
              severity: "critical",
              whyItMatters:
                "Superlatives with no proof are invisible to readers; the lesson's fix is replacing a claim like 'Highly Rated' with a specific number such as '4.9 stars from 12,000 reviews.'",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect: "H1 does not mirror a likely search query (e.g. 'ride near me' or 'book a cab now').",
              severity: "moderate",
              whyItMatters:
                "Query mirroring matches searcher intent and drives outsized CTR lifts; a generic brand claim wastes the highest-visibility headline slot.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
            {
              defect:
                "The description repeats the same unproven-superlative pattern ('best ride-hailing service... trusted by millions') with no real number.",
              severity: "moderate",
              whyItMatters:
                "Search descriptions should be specific: 'Save 30% on annual plans' beats 'Great value' every time.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
          ],
          distractors: [
            "H3 uses the brand name instead of a CTA — that's actually a valid H3 pattern per the lesson's Step 2 rules, not a defect.",
            "The ad only has 3 headlines — that's the correct minimum for a responsive search ad, not a defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-social-product-led",
          specimen:
            "Instagram feed ad (GrabMart):\nBody: \"GrabMart offers same-day grocery delivery with a wide selection of fresh produce, household items, and personal care products at competitive prices.\"\nCTA button: \"Learn More\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "This social ad ran at a 0.3% CTR, below the platform's 0.5%-1.6% range. Identify the defects.",
          answerKey: [
            {
              defect:
                "The first line describes the product category ('GrabMart offers...') instead of the audience's problem or outcome.",
              severity: "critical",
              whyItMatters:
                "On social, the first line is everything — it must stop the scroll. Leading with category instead of outcome is the exact mistake fixed in the lesson's outcome-first copy example.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
            {
              defect: "The CTA button 'Learn More' doesn't complete a sentence started by the body copy.",
              severity: "moderate",
              whyItMatters:
                "The lesson's CTA rule pairs a body-copy hook with a matching action, e.g. 'Ready to fix this?' + 'Start Free Trial' — a generic button leaves that connection unmade.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
            {
              defect: "Body copy runs well past 150 characters on mobile with no strong hook to justify the length.",
              severity: "cosmetic",
              whyItMatters: "Long body copy without a strong hook loses mobile scrollers before they reach the CTA.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "either",
            },
          ],
          distractors: [
            "The ad uses a static image instead of video — that's a creative/targeting choice, not a copy defect.",
            "The brand name 'GrabMart' appears in the body copy — mentioning the brand isn't itself a mistake.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-display-stacked-benefits",
          specimen: "Display banner (300x250, Grab):\nHeadline: \"Save Time and Money on Every Ride, Plus Earn Rewards\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "This banner underperforms at a 0.03% CTR, below the 0.05%-0.1% global display average. Identify the defects.",
          answerKey: [
            {
              defect: "The headline stacks three benefits (time, money, rewards) instead of one.",
              severity: "critical",
              whyItMatters:
                "Display rule: one benefit only — 'Cut your energy bill' beats 'Save energy and money and the environment.'",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
            {
              defect: "The headline buries its verb mid-clause instead of opening with an active verb.",
              severity: "moderate",
              whyItMatters: "Display copy should open with an active verb: Get, Cut, Stop, Save, Try.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "you",
            },
          ],
          distractors: [
            "The headline is 10 words long — length alone isn't flagged; the issue is benefit count, not word count.",
            "There's no CTA button copy shown — that's normal for a display banner, where the whole unit is clickable.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-display-tone-mismatch",
          specimen:
            "Display banner (Grab, creative brief): Headline \"Skip the Wait, Ride in Seconds!\" paired with a visual of an empty street corner at dusk, no cars or people in frame.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This banner has decent production value but still underperforms. Identify the defect.",
          answerKey: [
            {
              defect:
                "The headline's urgent, exciting tone ('in Seconds!') doesn't match the visual's calm, empty, passive scene.",
              severity: "moderate",
              whyItMatters:
                "Display rule: match headline tone to the visual — a mismatch creates confusion and kills clicks even when the copy itself is well-written.",
              lessonRef: "Step 2: Write to the Mindset",
              owner: "either",
            },
          ],
          distractors: [
            "The headline opens with 'Skip,' which is an active verb — that part is actually correct per the lesson's rules.",
            "The banner has no description text — display banners are expected to stand alone with just a headline.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Read each specimen and log defects with severity and rule reference",
            why: "Free, no account friction, easy to comment inline next to each specimen",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log covering all 4 specimens: which are genuinely flawed, which rule each defect breaks, and which specimen actually passes review.",
      sampleOutput:
        "Wise ad audit (excerpt)\n\nSearch H1: \"Wise: The World's Best Money Transfer\" -> CRITICAL, unproven superlative, replace with a query-mirroring headline like \"Send Money Abroad, Real Exchange Rate\"\n\nSocial body: \"Wise offers international transfers with low fees and fast delivery.\" -> CRITICAL, leads with product category, rewrite to open with the outcome (\"Stop losing money to bad exchange rates\")\n\nDisplay headline: \"Fast, Cheap, and Simple International Transfers\" -> CRITICAL, three benefits stacked, cut to one (\"Cut your transfer fees\")",
      successCriteria: [
        "Correctly flags all genuine defects across the 4 specimens with the right severity",
        "Cites the specific rule each defect breaks, not just 'this feels off'",
        "Does not flag the display tone-mismatch item for the wrong reason (verb choice is correct; tone is the issue)",
        "Recognizes which parts of each specimen are actually fine rather than over-flagging",
      ],
      portfolioReady: true,
    },
    {
      id: "ad-copy-variant-sprint-wise",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Variant Sprint: Draft Channel-Specific Ad Copy for One Offer",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Write 3 channel-specific ad copy drafts (search, social, display) for the same Wise product launch, applying the lesson's channel-mindset rules and CTA-first drafting order.",
      companyId: "wise",
      scenario:
        "You're a growth marketing contractor for Wise, launching a new multi-currency account feature aimed at freelancers who invoice international clients.",
      brief:
        "Draft one search ad, one social ad, and one display headline for the same offer. Write the CTA first for each, then work backwards through the body copy and headline, and write each one from scratch instead of reusing lines across channels.",
      mode: "build",
      conceptsCovered: ["Step 2: Write to the Mindset", "Common Mistakes"],
      steps: [
        {
          stepId: "step-1-search-and-social-mindset",
          concept: "Step 2: Write to the Mindset",
          lessonAnchor: "step-2-write-to-the-mindset",
          theoryRecap:
            "Search users typed a specific query and are in buying or research mode; social users were scrolling and your ad arrived uninvited. Search copy should mirror the query and lead with a differentiator; social copy should lead with the audience's problem or outcome, not the product category.",
          question:
            "The offer is: 'Multi-currency account for freelancers, no monthly fee, real exchange rate.' What search headline mirrors a likely query, what goes in H2 as the differentiator, and what social hook leads with the outcome instead of the feature list?",
          toolName: "Google Docs",
          where: "Draft in a shared doc with three labeled sections: Search, Social, Display.",
          procedure: [
            "Write a likely search query a freelancer would type (e.g. 'multi currency account for freelancers') and turn it into H1",
            "Pick the single strongest differentiator (no monthly fee, or real exchange rate) for H2, not both",
            "Write H3 as either a CTA or the brand name, per the lesson's rule",
            "For the social version, write the first line as the freelancer's problem or outcome, not a feature list of the account",
          ],
          outputSample:
            "SEARCH\nH1: Multi-Currency Account for Freelancers\nH2: No Monthly Fee, Real Exchange Rate\nH3: Open a Wise Account\nDesc: Invoice clients abroad and get paid in their currency. No monthly fee, no markup on the mid-market rate.\n\nSOCIAL\nHook: \"Tired of losing 3-5% to bad exchange rates on every client payment?\"",
          healthy:
            "The search H1 mirrors an actual query, H2 carries one differentiator, and the social hook names the freelancer's specific financial pain before mentioning the product.",
          unhealthy:
            "H1 is a brand slogan with no query relevance, H2 crams in two differentiators, and the social hook opens with 'Wise offers multi-currency accounts...' (a feature list).",
          interpret:
            "Search copy earns clicks by matching intent already in the searcher's head; social copy earns attention by naming a pain the scroller didn't expect to see addressed.",
          soWhat: [
            {
              symptom: "Search H1 reads like a slogan instead of a query match",
              action: "Rewrite H1 using the exact phrasing a freelancer would type into Google",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cta-first-and-display",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Most copywriters write the CTA last, as an afterthought. The lesson's fix is to write the CTA first, then build every word before it to make that CTA feel like the obvious next step. Display copy gets one benefit and an active opening verb.",
          question:
            "For the same Wise offer, what CTA should anchor the social ad, and what single-benefit, active-verb display headline would you write backwards from it?",
          toolName: "Google Docs",
          where: "Continue in the same shared doc, Display section.",
          procedure: [
            "Write the CTA for the social ad first (e.g. 'Open a Free Account'), before finalizing the hook above it",
            "Confirm the hook line leads naturally into that CTA, revise the hook if it doesn't",
            "Write the display headline starting with an active verb and exactly one benefit",
            "Check the display headline makes sense with zero supporting description text, per the lesson's rule",
          ],
          outputSample:
            "SOCIAL CTA: \"Open a Free Account\"\n\nDISPLAY\nHeadline: \"Cut Your Transfer Fees\"",
          healthy:
            "The CTA was chosen before the surrounding copy was finalized, and the display headline stands alone with one clear benefit and an active verb.",
          unhealthy:
            "The CTA is a generic 'Learn More' bolted on after the copy was already written, and the display headline lists multiple benefits or opens with a noun instead of a verb.",
          interpret:
            "Writing the CTA first forces every other line to justify its place; writing it last produces a CTA that doesn't match what came before it.",
          soWhat: [
            {
              symptom: "The CTA feels disconnected from the hook above it",
              action: "Rewrite the CTA first, then adjust the hook to lead into it",
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
            role: "Draft and organize the three channel-specific copy variants",
            why: "Free, easy to structure into labeled sections per channel",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "Three channel-specific ad copy drafts (a search RSA with 3 headlines and a description, a social hook plus CTA, and a display headline) for the same Wise offer, each written CTA-first.",
      sampleOutput:
        "Grab ride-hailing launch, channel drafts (excerpt)\n\nSEARCH\nH1: Book a Ride in Minutes\nH2: Rides From ₹49, No Surge\nH3: Download the App\n\nSOCIAL\nHook: \"Still waiting 15 minutes for a cab that never shows?\"\nCTA: \"Book Your First Ride\"\n\nDISPLAY\nHeadline: \"Skip the Wait\"",
      successCriteria: [
        "Search, social, and display copy are each written from scratch, not adapted from one another",
        "The social CTA was drafted before the hook was finalized, and the hook leads naturally into it",
        "The display headline carries exactly one benefit and opens with an active verb",
        "The search H1 plausibly mirrors a real query a freelancer would type",
      ],
      portfolioReady: true,
    },
  ],
};
