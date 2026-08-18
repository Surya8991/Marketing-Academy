import type { Project } from "@/lib/projects/types";

/**
 * Practice projects for the `social` category (Session 85).
 * First projects in this category — created for the Freelancer & Agency
 * track rollout (PROJECTS_PLAN.md Stage 8.3a priority #12).
 */
export const SOCIAL_PROJECTS: Record<string, Project[]> = {
  "instagram": [
    {
      id: "instagram-content-plan-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Format Fail: Teardown an Instagram Content Plan Before It Ships",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given three draft Instagram posts from a real-looking content plan, identify the format-specific defects the lesson's playbook flags before the plan ships.",
      companyId: "allbirds",
      scenario: "You're a freelance social media consultant. Allbirds' in-house team sent over next month's draft Instagram content plan for a sanity check before it goes live.",
      brief: "Read each specimen post, decide whether it follows the format-specific playbook for Reels, carousels, and static images, and flag what needs to change before publish.",
      mode: "teardown",
      conceptsCovered: [
        "Reels: Format for Reach",
        "Carousels: Format for Trust and Saves",
        "Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-reel-draft",
          specimen: "REEL DRAFT — Post 1 (scheduled Monday)\nVisual: Shoe unboxing, slow pan, no on-screen text\nCaption: \"New drop. Link in bio to shop the collection! Follow us for more.\"\nAudio: trending sound, unrelated to product\nLength: 45 seconds",
          specimenSource: "synthetic-realistic",
          prompt: "This Reel is drafted to reach people who don't follow the account yet. What is wrong with it against the lesson's Reels playbook?",
          answerKey: [
            {
              defect: "No on-screen captions on a Reel meant for reach",
              severity: "critical",
              whyItMatters: "Most Instagram video is watched on mute. Without captions, watch time and retention drop, and retention is the input to the algorithm's distribution decision.",
              lessonRef: "Reels: Format for Reach",
              owner: "you",
            },
            {
              defect: "Ends with a follow request instead of a send prompt",
              severity: "moderate",
              whyItMatters: "\"Follow for more\" optimizes for the weakest reach signal. A \"send this to someone\" prompt generates the send signal that actually unlocks non-follower distribution.",
              lessonRef: "Reels: Format for Reach",
              owner: "you",
            },
            {
              defect: "Trending audio unrelated to the product",
              severity: "cosmetic",
              whyItMatters: "The lesson is explicit that the algorithm rewards watch time, not audio popularity, so an unrelated trending sound is a minor miss, not a reach killer.",
              lessonRef: "Reels: Format for Reach",
              owner: "you",
            },
          ],
          distractors: [
            "The Reel runs 45 seconds, under the 90-second guideline, so length is not a defect.",
            "It's scheduled for a Monday, which isn't a flagged issue anywhere in the playbook.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-carousel-cover",
          specimen: "CAROUSEL DRAFT — Post 2 (scheduled Wednesday)\nCover slide text: \"You won't believe what happened when we tried this material.\"\nSlide count: 9\nFinal slide: brand logo only, no recap",
          specimenSource: "synthetic-realistic",
          prompt: "This carousel is meant to convert Reel viewers into follows and saves. What is wrong with it against the lesson's carousel playbook?",
          answerKey: [
            {
              defect: "Cryptic, curiosity-bait cover slide instead of a plain promise",
              severity: "critical",
              whyItMatters: "The lesson is explicit that clarity beats curiosity in a crowded feed; a plain promise like a numbered list outperforms a teaser line.",
              lessonRef: "Carousels: Format for Trust and Saves",
              owner: "you",
            },
            {
              defect: "No recap slide at the end",
              severity: "moderate",
              whyItMatters: "A standalone summary slide is what gets saved as a reference card. Saves are a strong ranking signal that compounds over time; a logo-only close slide earns none.",
              lessonRef: "Carousels: Format for Trust and Saves",
              owner: "you",
            },
          ],
          distractors: [
            "9 slides is within the 6-10 sweet spot the lesson recommends, so slide count is not a defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-static-image",
          specimen: "STATIC IMAGE DRAFT — Post 3 (scheduled Friday)\nVisual: single product photo, plain background\nCaption: \"Comfort you can feel. Double tap if you agree!\"",
          specimenSource: "synthetic-realistic",
          prompt: "This is the third static image post this week, and it asks for likes. What is wrong against the lesson's data and playbook?",
          answerKey: [
            {
              defect: "Leans on static images as a content backbone despite the 17% year-over-year engagement decline",
              severity: "critical",
              whyItMatters: "Static image engagement fell 17% in 2025 per Social Insider. A plan that still leans on single images as a backbone is fighting the direction of every benchmark in the lesson.",
              lessonRef: "Why It Matters (with data)",
              owner: "you",
            },
            {
              defect: "Call to action optimizes for likes, not sends or saves",
              severity: "moderate",
              whyItMatters: "The lesson names \"double tap if you agree\" directly as the mistake of optimizing for the weaker signal; likes only help with the existing follower audience.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Plain background product photography is a normal, acceptable visual choice and isn't itself a defect.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Canva for Social",
            role: "Annotate each specimen post and draft your defect notes alongside the visuals",
            why: "Free plan supports side-by-side commenting on draft social posts without needing the brand's actual scheduling tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Later",
            role: "Preview how the flagged posts would sit in an actual content calendar once fixed",
            why: "A paid calendar view makes it easier to see format mix across the week at a glance",
            required: false,
            fallback: "A spreadsheet with one row per scheduled post works for this teardown without any paid tool.",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "None of the flags in this teardown require a paid tool; Later just makes the weekly format-mix view faster to build.",
      },
      deliverable: "A defect log covering all three specimen posts: each flagged issue, its severity, and the one-line fix, ready to hand back to the in-house team before the plan ships.",
      sampleOutput: "Nykaa content-plan teardown (excerpt)\n\nPOST — Reel, no on-screen captions\n  Severity: critical\n  Fix: Add burned-in captions before scheduling; most video is watched on mute.\n\nPOST — Carousel, cover slide reads \"Wait until you see slide 5\"\n  Severity: critical\n  Fix: Replace with a plain promise, e.g. \"5 skincare swaps for humid weather.\"",
      successCriteria: [
        "Flags the missing captions on the Reel as a critical defect, not a cosmetic one",
        "Identifies the cryptic carousel cover slide and explains why clarity beats curiosity",
        "Catches the likes-focused CTA on the static post and connects it to the 2025 engagement decline data",
        "Does not flag any of the three distractors as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "instagram-format-calendar-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a 2-Week, Three-Format Instagram Calendar",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective: "Build a 2-week Instagram content calendar for a real campaign scenario that assigns each post to the correct format based on its job: reach, trust, or existing-audience depth.",
      companyId: "nykaa",
      scenario: "Nykaa is launching a back-to-college skincare kit and asked you, their freelance social strategist, for a 2-week Instagram calendar that actually uses each format for its job instead of posting whatever is easiest.",
      brief: "Assign Reels, carousels, and Stories across 2 weeks so each format does the job the lesson's playbook says it should do, and justify each placement.",
      mode: "build",
      conceptsCovered: [
        "How It Works: The Three-Format Playbook",
        "Reels: Format for Reach",
        "Carousels: Format for Trust and Saves",
        "Stories: Format for the Existing Audience",
      ],
      steps: [
        {
          stepId: "step-1-assign-reels-for-reach",
          concept: "Reels: Format for Reach",
          lessonAnchor: "reels-format-for-reach",
          theoryRecap: "Reels exist to reach people who don't follow the account yet. Every Reel should be built around a fast hook, captions, and a send prompt, not a follow request.",
          question: "Launch week needs at least one Reel aimed purely at people who have never heard of the skincare kit. What is the hook, and what closes the Reel?",
          toolName: "Canva for Social",
          where: "Draft the Reel's shot list and on-screen caption plan directly in a Canva for Social video template.",
          procedure: [
            "Write the first-3-seconds hook as the payoff, not a teaser (e.g. show the finished routine before explaining it)",
            "Plan captions for every line of dialogue, since most viewers watch on mute",
            "Write the closing line as a send prompt (\"send this to your roommate\"), not a follow request",
            "Place this Reel on Day 1 of the calendar so it can build watch-time signal before the rest of the campaign posts",
          ],
          outputSample: "Day 1, Reel\nHook (0-3s): Finished 5-step night routine laid out on a desk\nCaptions: burned-in for every line\nClose: \"Send this to your roommate before the first campus cold snap.\"",
          healthy: "The Reel's closing line explicitly asks the viewer to send it to a specific kind of person, generating the send signal.",
          unhealthy: "The Reel closes with \"follow for more skincare tips,\" which optimizes for the weaker follow signal instead of reach.",
          interpret: "A Reel's script should be written backward from the CTA the lesson recommends, not the CTA bolted on at the end.",
          soWhat: [
            {
              symptom: "The draft Reel script ends with a generic follow request",
              action: "Rewrite the last line as a send prompt naming who the content is for",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-assign-carousel-for-trust",
          concept: "Carousels: Format for Trust and Saves",
          lessonAnchor: "carousels-format-for-trust-and-saves",
          theoryRecap: "Carousels serve the audience that saw the Reel and is now deciding whether to follow. The cover slide needs a plain promise, and the last slide should be a standalone recap worth saving.",
          question: "Week 1's carousel needs to convert Reel viewers into follows and saves. What goes on the cover slide, and what closes the sequence?",
          toolName: "Canva for Social",
          where: "Build the carousel as an 8-slide Canva for Social carousel template, one slide per skincare-kit component.",
          procedure: [
            "Write a plain-promise cover slide naming the outcome, e.g. \"5 dorm-room skincare swaps for humid weather\"",
            "Keep the slide count between 6 and 10, per the lesson's sweet spot",
            "Design the last slide as a standalone recap card that works even if someone only sees that slide later",
            "Schedule this carousel for Day 3-4, right after the launch Reel, so it catches viewers while the Reel is still fresh",
          ],
          outputSample: "Slides 1-8: cover promise, then one swap per slide\nSlide 8 (recap): \"Save this: your 5-step humid-weather routine\"",
          healthy: "The cover slide states a specific, countable outcome and the final slide stands alone as a reference card worth saving.",
          unhealthy: "The cover slide teases mystery (\"you won't believe slide 5\") and the carousel ends on a plain logo with no recap.",
          interpret: "Clarity on slide 1 and a standalone recap on the last slide are what convert a passing scroll into a save.",
          soWhat: [
            {
              symptom: "The carousel ends on a logo slide with nothing to save",
              action: "Replace the closing slide with a text recap of all prior slides",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Canva for Social",
            role: "Draft the Reel shot list, the carousel slides, and lay out the 2-week calendar grid",
            why: "Free plan covers video and carousel templates plus a content calendar view without needing a paid scheduler",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Later",
            role: "Visualize the 2-week posting cadence across formats",
            why: "Later's free tier includes a visual content calendar for a single Instagram account",
            required: false,
            fallback: "A spreadsheet grid with a row per day and a column for format works just as well for this exercise.",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Buffer",
            role: "Schedule and auto-publish the finished calendar",
            why: "Useful once the calendar moves from draft to live posting, not required to build it",
            required: false,
            fallback: "Manual posting from the draft calendar works fine for this exercise.",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Buffer is only needed if the calendar goes live; building and justifying the format assignments needs only the free tools.",
      },
      deliverable: "A 2-week, day-by-day Instagram calendar naming the format for each post (Reel, carousel, or Story), with a one-line justification for why that format was chosen for that day.",
      sampleOutput: "Duolingo-style 2-week calendar (excerpt)\n\nDay 1: Reel — launch hook, send-prompt close (reach)\nDay 3: Carousel — plain-promise cover, recap slide (trust/saves)\nDay 5: Story — poll sticker asking which routine step followers skip (existing-audience depth)\nDay 8: Reel — UGC repost with captions (reach)",
      successCriteria: [
        "Every post in the calendar is assigned to a format that matches its stated job: reach, trust, or existing-audience depth",
        "The Reel's script closes with a send prompt rather than a follow request",
        "The carousel's cover slide states a specific, plain promise and the final slide is a standalone recap",
        "The calendar includes at least one Story with a sticker to spike completion rate on existing followers",
      ],
      portfolioReady: true,
    },
  ],
};
