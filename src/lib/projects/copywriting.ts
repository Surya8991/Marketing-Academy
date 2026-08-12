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
  headlines: [
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
  ],
};
