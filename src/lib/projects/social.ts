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

  "social-strategy-basics": [
    {
      id: "social-strategy-basics-platform-fit-audit",
      tier: "core",
      archetype: "audit",
      title: "The Platform-Fit Audit: Stress-Testing a Client's Channel Mix",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real 6-platform posting log with follower counts, posting frequency, and audience skew, apply the lesson's audience-first framework to flag platform-fit mistakes and recommend a 2-platform focus.",
      companyId: "freshworks",
      scenario:
        "You're a marketing contractor auditing Freshworks' regional social presence before a Q4 budget review. The team is active on 6 platforms with a flat content calendar, no stated goal per channel, and the same post copy pasted across every one.",
      brief:
        "Score each platform against the stated target audience (28-45 year old IT/ops decision-makers at mid-size companies), flag the mismatched channels, and recommend which 2 platforms deserve the budget.",
      mode: "diagnostic",
      conceptsCovered: [
        "Filtering platforms by audience match, not raw reach",
        "Assigning one goal per channel",
        "Confusing reach with relevance",
      ],
      steps: [
        {
          stepId: "step-1-audience-match",
          concept: "Filtering platforms by audience match, not raw reach",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson's data section shows Facebook has 3.07 billion monthly users, but that number is irrelevant if your specific buyer's account is dormant. Audience match beats raw reach every time.",
          question:
            "The posting log shows Facebook has the highest follower count (18,400) but Reddit has the highest share of users matching the 28-45 IT/ops profile. Which platform should the recommendation actually favor?",
          toolName: "Google Sheets",
          where:
            "Import platform-audit-log.csv, one row per platform with follower count, posting frequency, and audience age/role skew.",
          procedure: [
            "Import platform-audit-log.csv and freeze the header row",
            "Add a column scoring each platform's audience skew against the 28-45 IT/ops target (high/medium/low match)",
            "Sort by audience-match score, not by follower count",
          ],
          outputSample:
            "PLATFORM AUDIT LOG (6 rows)\n  Facebook    18,400 followers   3x/week   audience match: LOW (skews 45-65, consumer)\n  Instagram    9,200 followers   5x/week   audience match: LOW (skews under-30, visual)\n  LinkedIn     6,100 followers   1x/week   audience match: HIGH (B2B, IT/ops titles)\n  Reddit       2,300 followers   0x/week   audience match: HIGH (r/sysadmin, r/ITManagers active)\n  TikTok       4,700 followers   2x/week   audience match: LOW (skews under-25)\n  Pinterest      800 followers   1x/week   audience match: LOW (visual consumer products)",
          healthy:
            "LinkedIn and Reddit get flagged as the highest-audience-match platforms despite lower follower counts than Facebook or Instagram.",
          unhealthy:
            "Recommending Facebook and Instagram be kept because they have the most followers, ignoring that neither matches the target buyer.",
          interpret:
            "Follower count measures past effort, not future fit. A 2,300-follower Reddit presence in the right subreddits outperforms an 18,400-follower Facebook page with the wrong audience.",
          soWhat: [
            {
              symptom: "Budget review is about to fund the two biggest-follower platforms",
              action: "Re-rank the platform list by audience-match score before the budget conversation",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-one-goal-per-channel",
          concept: "Assigning one goal per channel",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 4 says each channel gets exactly one job, awareness, traffic, leads, or direct sales. Mixing goals produces content that does none of them well.",
          question:
            "The LinkedIn page's last 10 posts mix product announcements, job postings, and direct 'book a demo' CTAs. What single goal should this channel be reassigned?",
          toolName: "Google Sheets",
          where: "Same platform-audit-log.csv, review the 'last 10 post types' column for each high-match platform.",
          procedure: [
            "Filter the log to the 2 audience-matched platforms (LinkedIn, Reddit)",
            "Categorize each platform's last 10 posts by apparent goal (awareness, traffic, leads, sales)",
            "Assign one dominant goal per platform based on what the audience-match data supports",
          ],
          outputSample:
            "LinkedIn, last 10 posts: 4 product announcements, 3 job postings, 3 demo CTAs (no consistent goal)\nReddit: 0 posts logged (channel unused despite high audience match)",
          healthy:
            "LinkedIn gets reassigned a single goal (e.g. leads via thought-leadership content), Reddit gets a documented plan to start posting inside the two active subreddits.",
          unhealthy:
            "Leaving LinkedIn's mixed goals as-is because 'it's already doing okay', without noticing the channel has no measurable job.",
          interpret:
            "A channel with no single assigned goal cannot be measured, and a channel that scores high on audience match but has zero posts is a bigger miss than a slightly underperforming one.",
          soWhat: [
            {
              symptom: "LinkedIn posts alternate between 3 different objectives with no pattern",
              action: "Assign LinkedIn a single goal (leads) and Reddit a single goal (awareness) before the next planning cycle",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-reach-vs-relevance",
          concept: "Confusing reach with relevance",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section warns that Facebook's 3.07 billion users is meaningless if your buyer's account is dormant. Always filter raw platform size through actual audience behavior.",
          question:
            "The current budget draft allocates 60% of spend to Facebook because it has the most followers. Using the audit log, what's the one-line correction to put in the memo?",
          toolName: "Google Sheets",
          where: "Same platform-audit-log.csv, cross-reference follower count against audience-match score.",
          procedure: [
            "Pull the follower count and audience-match score side by side for all 6 platforms",
            "Write a one-line finding: which platform has the biggest reach-vs-relevance gap",
          ],
          outputSample:
            "Facebook: 18,400 followers, audience match LOW\nReddit: 2,300 followers, audience match HIGH\nGap: Facebook has 8x the followers but the wrong audience.",
          healthy:
            "The memo explicitly states Facebook's follower count should not drive budget allocation given its low audience match.",
          unhealthy:
            "The memo repeats the follower counts without connecting them to the audience-match column, leaving the reader to draw the wrong conclusion.",
          interpret:
            "Every audit needs one sentence that directly contradicts the 'biggest number wins' instinct, or the reader defaults back to it.",
          soWhat: [
            {
              symptom: "Draft budget still favors the highest-follower platform",
              action: "Add a one-line reach-vs-relevance callout to the top of the memo before it goes to the budget owner",
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
            role: "Import and score the platform audit log",
            why: "Free, no account friction, handles sorting and scoring columns without a paid analytics tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page platform audit memo recommending a 2-platform focus (with rationale), one goal per recommended channel, and a reach-vs-relevance callout.",
      sampleOutput:
        "Lenskart social channel audit (excerpt)\n\nRECOMMEND: Instagram (audience match HIGH, goal: traffic to try-on landing page)\nRECOMMEND: YouTube (audience match HIGH, goal: awareness via try-on demo videos)\nCUT: Facebook (audience match LOW despite 22,000 followers, no clear goal in last 10 posts)\n\nReach-vs-relevance note: Facebook's follower count is 2.4x Instagram's, but under-30 eyewear buyers are not active there. Budget should follow audience match, not follower count.",
      successCriteria: [
        "Correctly identifies the platform(s) with the biggest reach-vs-relevance gap",
        "Assigns exactly one goal to each recommended channel",
        "Recommendation is based on audience-match score, not follower count",
      ],
      portfolioReady: true,
    },
    {
      id: "social-strategy-basics-new-market-strategy-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Ship a One-Page Social Strategy for a New Market Entry",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Using the lesson's 5-step framework, write a complete one-page social strategy document for a company launching a new audience-facing sub-brand.",
      companyId: "lenskart",
      scenario:
        "Lenskart is piloting a youth-focused eyewear sub-brand aimed at 18-24 year old college students, and no content has been made yet. You've been asked for the strategy doc before anyone opens a design tool.",
      brief:
        "Write the one-sentence audience definition, map it to 1-2 platforms using the demographic table, assign one goal per channel, and set a 12-week posting cadence with one success metric.",
      mode: "build",
      conceptsCovered: [
        "Defining one specific audience",
        "Mapping audience to platform demographics",
        "Setting a sustainable posting cadence",
      ],
      steps: [
        {
          stepId: "step-1-define-audience",
          concept: "Defining one specific audience",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 1 requires a single written sentence: who exactly you're talking to. If you can't write that sentence, you're not ready to pick a platform.",
          question:
            "The brief says 'young people who like fashion.' Rewrite this into the one-sentence audience definition the framework requires.",
          toolName: "Google Sheets",
          where: "A new tab in your strategy doc titled 'Audience Definition'.",
          procedure: [
            "Write one sentence naming age range, life stage, and one specific interest or behavior",
            "Test the sentence: could you use it to rule a platform in or out?",
          ],
          outputSample:
            "Weak: \"Young people who like fashion.\"\nStrong: \"College students aged 18-24 who follow campus fashion trends and buy eyewear as a style accessory, not just a vision correction need.\"",
          healthy:
            "The sentence is specific enough to immediately rule out platforms like LinkedIn or Facebook Groups.",
          unhealthy:
            "The sentence stays broad ('young people'), which fits almost every platform equally and provides no filter.",
          interpret:
            "A vague audience sentence produces a vague platform choice. Specificity is the whole point of Step 1.",
          soWhat: [
            {
              symptom: "Audience sentence could apply to any platform",
              action: "Add a specific behavior or interest clause until at least one platform can be ruled out",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-map-to-platform",
          concept: "Mapping audience to platform demographics",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 2 demographic table maps under-25 lifestyle audiences to TikTok, Instagram Reels, and YouTube Shorts, and visual products to Instagram and Pinterest.",
          question:
            "Given the audience sentence (18-24, campus fashion, eyewear as style accessory), which 1-2 platforms does the demographic table point to?",
          toolName: "Google Sheets",
          where: "The same strategy doc, add a 'Platform Pick' section.",
          procedure: [
            "Cross-reference the audience sentence against the lesson's demographic table",
            "Pick exactly 1-2 platforms with a stated reason each",
          ],
          outputSample:
            "Platform pick: Instagram Reels (under-25 + visual product) and TikTok (under-25 + lifestyle/entertainment)\nReason: both platforms match age and the visual-product nature of eyewear-as-fashion.",
          healthy: "Exactly 1-2 platforms are chosen, each with a one-line reason tied to the audience sentence.",
          unhealthy:
            "Five platforms are listed 'just in case' with no reasoning tied back to the audience definition.",
          interpret:
            "The lesson is explicit: two platforms done well beats five done inconsistently. The platform pick section should read like a decision, not a wishlist.",
          soWhat: [
            {
              symptom: "Platform pick section lists more than 2 platforms",
              action: "Cut to the 2 platforms with the clearest audience-sentence match and note the rest as 'not now'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cadence-and-metric",
          concept: "Setting a sustainable posting cadence",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 5 recommends 3 quality posts per week for 12 weeks over a burst of posts followed by silence, and Step 4 requires one goal and one metric per channel.",
          question:
            "Write the final section: a 12-week cadence and the single metric that will decide whether this strategy worked.",
          toolName: "Canva for Social",
          where: "A content calendar template, planning 3 posts/week for 12 weeks across the 2 chosen platforms.",
          procedure: [
            "Set a cadence of 3 posts/week per platform for 12 weeks",
            "Pick one measurable metric per platform (e.g. follower growth rate, Reel completion rate)",
            "Write a one-sentence 90-day success definition",
          ],
          outputSample:
            "Cadence: 3 Reels/week on Instagram, 3 posts/week on TikTok, for 12 weeks\nMetric: Instagram Reel completion rate; TikTok follower growth rate\nSuccess definition: 15% follower growth on TikTok and a 40%+ average Reel completion rate on Instagram by week 12.",
          healthy: "The cadence is specific (posts/week, per platform) and the metric is stated before any content is made.",
          unhealthy:
            "The doc says 'post consistently' with no number, and no metric is named until after the campaign starts.",
          interpret:
            "A cadence and a metric written before content exists is what separates a strategy from a content calendar.",
          soWhat: [
            {
              symptom: "No metric defined before launch",
              action: "Add one metric per platform to the strategy doc before the first post goes live",
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
            role: "Draft the written audience, platform-pick, and cadence sections",
            why: "Free, fast for structured text sections that need to be shared with a team",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva for Social",
            role: "Build the 12-week content calendar view",
            why: "Free tier includes a content calendar template suited to planning posts/week per platform",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page written social strategy: audience sentence, platform pick with reasons, one goal per channel, 12-week cadence, and one success metric per platform.",
      sampleOutput:
        "Duolingo sub-brand strategy doc (excerpt)\n\nAudience: \"Gen Z language learners aged 16-22 who use short-form video daily and respond to absurdist humor.\"\nPlatform pick: TikTok (under-25 + entertainment match)\nGoal: awareness via mascot-led comedic content\nCadence: 4 posts/week for 12 weeks\nMetric: follower growth rate, target +20% by week 12",
      successCriteria: [
        "Audience definition is one sentence and specific enough to rule a platform in or out",
        "Exactly 1-2 platforms chosen with a reason tied to the audience sentence",
        "Cadence and one metric per platform are both stated before content is made",
      ],
      portfolioReady: true,
    },
  ],
  "linkedin": [
    {
      id: "linkedin-post-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: Diagnose Why 5 LinkedIn Posts Underperformed",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given 5 realistic LinkedIn posts with their actual reach numbers, apply the lesson's algorithm rules to identify the specific defect suppressing each post's distribution, and tell it apart from a plausible-looking non-defect.",
      companyId: "freshworks",
      scenario:
        "You're reviewing Freshworks' last month of LinkedIn posts before the team plans next quarter's content calendar. Reach has been flat despite steady posting.",
      brief:
        "Read each post's text and reach number, diagnose the exact rule it broke against the lesson's 4-stage algorithm and formatting rules, and don't flag a distractor as the real defect.",
      mode: "teardown",
      conceptsCovered: [
        "External links in the post body cut reach",
        "Engagement velocity in the first 60 minutes",
        "Hashtag spam suppresses reach",
        "Asking for shares triggers engagement-bait suppression",
      ],
      teardownItems: [
        {
          itemId: "post-1-link-in-body",
          specimen:
            "\"Excited to share our new integration guide! Read the full breakdown here: https://freshworks.com/blog/integration-guide-2026 Let us know what you think.\"\nReach: 340 impressions (company page average: 2,100)",
          specimenSource: "synthetic-realistic",
          prompt: "This post reached 340 impressions against a 2,100 average. What's the defect?",
          answerKey: [
            {
              defect: "External link placed directly in the post body",
              severity: "critical",
              whyItMatters:
                "The lesson states external links in the post body cut reach by roughly 40%, and LinkedIn's algorithm treats the link as a reason to keep users on-platform less, so it suppresses distribution.",
              lessonRef: "linkedin-ads-for-b2b",
              owner: "you",
            },
          ],
          distractors: [
            "The post is too short (this is not a defect, short posts are a valid format)",
            "The post lacks hashtags (the lesson does not require hashtags, only limits them to 3-5)",
          ],
          partialCredit: true,
        },
        {
          itemId: "post-2-hashtag-spam",
          specimen:
            "\"3 tips for better customer support this quarter. #CustomerSupport #SaaS #B2B #CX #HelpDesk #Support #TechTips #Marketing #GrowthHacking #Leadership\"\nReach: 190 impressions",
          specimenSource: "synthetic-realistic",
          prompt: "This post used 10 hashtags and got the lowest reach of the batch. What's the defect?",
          answerKey: [
            {
              defect: "10 hashtags used, well past the 3-5 best-practice ceiling",
              severity: "critical",
              whyItMatters:
                "The lesson states 3-5 relevant hashtags is current best practice and more than 5 begins to trigger spam filters, directly suppressing reach.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The post has no image (many high-performing text-only posts have no image)",
            "The post was posted on a Friday (the lesson does not specify a penalized posting day)",
          ],
          partialCredit: true,
        },
        {
          itemId: "post-3-weak-hook",
          specimen:
            "\"I've been thinking about customer retention lately and wanted to share some thoughts on what's been working for our team this quarter.\"\nReach: 410 impressions, 2 comments in first 60 minutes",
          specimenSource: "synthetic-realistic",
          prompt: "This post's opening two lines are shown above. What's the defect?",
          answerKey: [
            {
              defect: "Weak hook in the first two lines, no gap or reason to click \"See more\"",
              severity: "moderate",
              whyItMatters:
                "The lesson states only the first two lines show before See More, and scene-setting openers underperform questions, bold claims, or pattern interrupts.",
              lessonRef: "the-posting-workflow-that-converts",
              owner: "you",
            },
          ],
          distractors: [
            "The topic (customer retention) is not relevant to a B2B audience (it is directly relevant)",
            "The post is missing a company logo (personal profile posts do not need one)",
          ],
          partialCredit: true,
        },
        {
          itemId: "post-4-share-bait",
          specimen:
            "\"This framework changed how we do outbound. If you found this useful, please share it with your network!\"\nReach: 280 impressions, reach declined after the first hour",
          specimenSource: "synthetic-realistic",
          prompt: "This post explicitly asked for shares and reach dropped after the first hour. What's the defect?",
          answerKey: [
            {
              defect: "Explicitly asked followers to share/repost",
              severity: "moderate",
              whyItMatters:
                "The lesson states explicitly asking for shares is now flagged as engagement bait and suppresses reach; asking for comments or opinions is still acceptable.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The post is about outbound sales, a saturated topic (topic saturation is not a cited algorithm factor)",
            "The post has no data point (many strong posts lead with a framework, not a stat)",
          ],
          partialCredit: true,
        },
        {
          itemId: "post-5-healthy-comparison",
          specimen:
            "\"We closed $83,000 in pipeline from 3 LinkedIn posts last quarter. Here's the exact framework, no paid ads, no DM spam.\n\n[short paragraphs, numbered steps, ends with a question]\"\nReach: 12,400 impressions, 9 comments within 60 minutes",
          specimenSource: "synthetic-realistic",
          prompt:
            "This post is the strongest performer in the batch. Confirm there is no defect, and name the one factor most responsible for the 3.5x-style distribution boost.",
          answerKey: [
            {
              defect: "No defect present; included as a calibration control",
              severity: "cosmetic",
              whyItMatters:
                "The post has a strong hook, no link in the body, short paragraphs, and hit 9 comments within 60 minutes, which the lesson identifies as the strongest signal for the algorithm's distribution boost (3+ commenters in 60 minutes).",
              lessonRef: "how-the-algorithm-works-in-2025",
              owner: "you",
            },
          ],
          distractors: [
            "The dollar figure is too specific to be believable (specificity is the stated differentiator, not a red flag)",
            "The post has no hashtags (hashtags are optional, not required)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each post's text, reach number, and diagnosed defect for the final memo",
            why: "Free, sufficient for a 5-row diagnostic log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-row diagnostic log naming the specific defect (or confirming none) for each post, with the lesson rule cited for each.",
      sampleOutput:
        "Duolingo LinkedIn post teardown (excerpt)\n\nPost: \"Check out our new course! Link: duolingo.com/courses\"\nReach: 210 (avg: 1,800)\nDefect: link in post body, ~40% reach penalty\n\nPost: \"We hit 500M downloads. Here's what surprised us most.\"\nReach: 8,900\nDefect: none, strong hook + no link + comments within 60 min",
      successCriteria: [
        "Correctly diagnoses the specific defect for all 4 flawed posts",
        "Correctly identifies post 5 as defect-free rather than flagging a distractor",
        "Cites the specific lesson rule for each diagnosis",
      ],
      portfolioReady: true,
    },
    {
      id: "linkedin-lead-post-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Lead-Generating LinkedIn Post Using the Posting Workflow",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Using the lesson's 6-step posting workflow, write a complete LinkedIn post (hook, body, no-link structure, and a first-comment plan) for a real product launch scenario.",
      companyId: "duolingo",
      scenario:
        "Duolingo's B2B team is launching a new corporate language-training tier and wants a founder-voice LinkedIn post to seed the first wave of leads, not a company-page announcement.",
      brief:
        "Apply the problem-proof-prompt topic framework, write a hook that survives the See More cut, structure the body correctly, and plan the first-comment link placement and 60-minute engagement seeding.",
      mode: "build",
      conceptsCovered: [
        "Topic selection using the problem-proof-prompt framework",
        "Writing a hook that earns the See more click",
        "Posting without links in the body",
        "Seeding engagement in the first 60 minutes",
      ],
      steps: [
        {
          stepId: "step-1-topic-selection",
          concept: "Topic selection using the problem-proof-prompt framework",
          lessonAnchor: "the-posting-workflow-that-converts",
          theoryRecap:
            "The lesson's Step 1 framework: pick a problem your buyer has, share a counterintuitive or data-backed insight (the proof), end with a question or observation that invites a comment (the prompt).",
          question:
            "The buyer is an HR/L&D lead evaluating corporate language training. What's the problem, proof, and prompt for this launch post?",
          toolName: "Google Sheets",
          where: "A planning doc, one row per element (problem, proof, prompt).",
          procedure: [
            "Write the specific problem the HR/L&D buyer has (e.g. low completion rates on existing language training)",
            "Find or state one counterintuitive data point as the proof",
            "Write a closing question that's easy to answer in one sentence",
          ],
          outputSample:
            "Problem: Corporate language programs have a 60%+ dropout rate\nProof: Duolingo's gamified format sees 3x higher weekly completion vs traditional e-learning\nPrompt: \"What's actually killing completion rates on your team's training, time or boredom?\"",
          healthy: "All three elements are written before any post copy is drafted.",
          unhealthy: "Jumping straight to writing the post without first defining the problem, proof, and prompt separately.",
          interpret:
            "Skipping straight to copywriting is how posts end up as generic announcements instead of the problem-proof-prompt structure that actually invites comments.",
          soWhat: [
            {
              symptom: "Draft post reads like a press release",
              action: "Rewrite starting from the problem sentence, not the product feature list",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-hook",
          concept: "Writing a hook that earns the See more click",
          lessonAnchor: "the-posting-workflow-that-converts",
          theoryRecap:
            "The lesson's Step 2 says only the first two lines show before 'See more,' and these lines need a gap, a reason to click, questions and bold claims outperform scene-setting.",
          question:
            "Write two opening lines for the launch post using the problem/proof from Step 1. Does it create a gap, or does it scene-set?",
          toolName: "Google Sheets",
          where: "Same planning doc, a 'Hook draft' row.",
          procedure: [
            "Draft a scene-setting version first (what to avoid)",
            "Rewrite it as a bold claim or question using the proof stat",
            "Check it against the lesson's weak vs strong hook example",
          ],
          outputSample:
            "Weak: \"We've been working on something exciting for HR teams and wanted to share it today.\"\nStrong: \"60% of employees drop out of corporate language training. Ours has 3x the completion rate. Here's why.\"",
          healthy: "The final hook is a bold claim or question tied directly to the proof stat.",
          unhealthy: "The hook stays as scene-setting ('excited to share...') because it felt safer to write.",
          interpret: "A scene-setting hook gets cut off by See More with nothing to pull the reader forward.",
          soWhat: [
            {
              symptom: "Hook opens with 'excited to share' or 'thrilled to announce'",
              action: "Replace with the proof stat as a bold claim in line one",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-no-link-body",
          concept: "Posting without links in the body",
          lessonAnchor: "the-posting-workflow-that-converts",
          theoryRecap:
            "The lesson's Step 4 states posts with no external URL in the body avoid the roughly 40% reach penalty; the link goes in the first comment instead.",
          question:
            "The launch needs a link to the sign-up page. Where does it go, and what goes in its place in the post body?",
          toolName: "Google Sheets",
          where: "Same planning doc, finalize the post body and a separate 'first comment' field.",
          procedure: [
            "Write the full post body with zero external URLs",
            "Draft the first comment containing the sign-up link and a one-line CTA",
            "Plan to publish the first comment within 1-2 minutes of the post going live",
          ],
          outputSample:
            "Post body: ends with the prompt question, no link.\nFirst comment (posted immediately after): \"Sign up your team here → [link] — first 100 teams get early access.\"",
          healthy: "The post body has zero URLs; the link and CTA live entirely in the first comment.",
          unhealthy: "A 'learn more' link gets added to the post body at the last minute because it 'felt incomplete' without one.",
          interpret: "Every link in the body is a ~40% reach tax; the first-comment workaround captures clicks without paying it.",
          soWhat: [
            {
              symptom: "Post body still has a URL in the final draft",
              action: "Move the URL to a first-comment draft before scheduling the post",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-engagement-seeding",
          concept: "Seeding engagement in the first 60 minutes",
          lessonAnchor: "how-the-algorithm-works-in-2025",
          theoryRecap:
            "The lesson's algorithm stages show posts with 3+ commenters in the first 60 minutes get a 3.5x distribution boost; comments from distinct users are the strongest signal, stronger than reactions or shares.",
          question:
            "Name 3 specific people (by role, not by name) who should be notified to comment within the first hour, and what you'll ask each one.",
          toolName: "LinkedIn Campaign Manager",
          where: "Not the ad platform itself, use it only to confirm the launch audience's job titles for the notify list; the actual outreach is manual DMs.",
          procedure: [
            "List 3 people whose comment would be genuinely relevant to an HR/L&D buyer (e.g. a customer, an internal L&D partner, a warm connection in HR)",
            "Draft a one-line DM to each, sent the moment the post goes live, asking a specific question they can answer in a sentence",
            "Set a reminder to reply to every comment within the first 60 minutes",
          ],
          outputSample:
            "Notify list: (1) existing enterprise customer's L&D lead, (2) internal HR partner, (3) a warm 2nd-degree HR connection\nDM: \"Just published this on completion rates in corporate training, curious what you're seeing on your end?\"",
          healthy: "3 specific, relevant people are notified within minutes of publishing, and every resulting comment gets a reply.",
          unhealthy: "The post is published and left alone, hoping the algorithm finds an audience on its own.",
          interpret:
            "3+ distinct commenters in 60 minutes is the strongest single signal in the algorithm's Stage 3, and it does not happen by accident.",
          soWhat: [
            {
              symptom: "No plan for who comments in the first hour",
              action: "Draft the 3 notify DMs before the post is scheduled, not after it publishes",
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
            role: "Plan the problem-proof-prompt, hook drafts, post body, and first-comment link",
            why: "Free, keeps every element of the workflow in one structured doc before publishing",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "LinkedIn Campaign Manager",
            role: "Confirm the target buyer's job titles for the engagement-seeding notify list",
            why: "Free to browse audience sizes by job title without spending on an ad",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete, ready-to-publish LinkedIn post: hook, body with no links, a separate first-comment draft with the link, and a 3-person engagement-seeding plan for the first 60 minutes.",
      sampleOutput:
        "Freshworks launch post (excerpt)\n\nHook: \"73% of support tickets never need a human. Here's what we changed to prove it.\"\nBody: [short paragraphs, one stat per paragraph, closes with] \"What's the one ticket type you wish resolved itself?\"\nFirst comment: \"See the full breakdown → [link]\"\nNotify list: 1 existing customer, 1 support lead, 1 warm connection",
      successCriteria: [
        "Hook is a bold claim or question, not a scene-setting opener",
        "Post body contains zero external links",
        "First-comment draft includes the link and a clear CTA",
        "Names 3 specific people to seed engagement within the first 60 minutes",
      ],
      portfolioReady: true,
    },
  ],

  "tiktok": [
    {
      id: "tiktok-content-calendar-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Reasons This Content Calendar Won't Get Distribution",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style draft TikTok content calendar (script + posting notes) for a mattress brand launch, find the specific platform-fit mistakes that will suppress FYP distribution before a single video is filmed.",
      companyId: "casper-sleep",
      scenario:
        "You're the social lead at Casper Sleep reviewing a freelancer's draft TikTok plan before the team commits budget to filming.",
      brief:
        "Read each planned video's script and posting notes against the playbook's native-content and search-first rules, flag what will tank distribution before it's shot.",
      mode: "teardown",
      conceptsCovered: [
        "Shoot Native, Not 'TV-on-Phone'",
        "Write for Search (TikTok SEO)",
        "Ride Sounds Inside the Rising Window",
        "Post 3-5 Times Per Week, Not Daily",
        "Optimize the First 15 Minutes After Posting",
      ],
      teardownItems: [
        {
          itemId: "video-1-repurposed-ad",
          specimen:
            "VIDEO 1 — \"The Casper Difference\"\n0:00-0:03: Casper logo animation, upbeat brand jingle\n0:03-0:15: Studio-shot 16:9 footage of the mattress (cropped to vertical with black bars), voiceover by hired VO talent: \"Introducing the all-new Casper mattress.\"\n0:15-0:28: Product shots, professional lighting, no on-screen captions\nCaption: \"New mattress, who dis? 🛏️\"\nHashtags: #ad #mattress\nSound: original brand jingle (0 uses)",
          specimenSource: "synthetic-realistic",
          prompt: "Which of this script's choices will suppress FYP distribution, and why?",
          answerKey: [
            {
              defect: "Brand logo and jingle open the video (seconds 0-3)",
              severity: "critical",
              whyItMatters:
                "Front-loading the logo in seconds 0-3 is a retention killer; viewers trained by the FYP skip anything that reads as an ad in the first moment.",
              lessonRef: "step-2-shoot-native-not-tv-on-phone",
              owner: "you",
            },
            {
              defect: "16:9 footage cropped to vertical with black bars",
              severity: "critical",
              whyItMatters:
                "Letterboxed horizontal video signals \"repurposed ad\" to both the algorithm and the audience; completion collapses because the format mismatch is visible in the first frame.",
              lessonRef: "step-2-shoot-native-not-tv-on-phone",
              owner: "you",
            },
            {
              defect: "Hired VO talent instead of creator voiceover, no on-screen captions",
              severity: "moderate",
              whyItMatters:
                "Professional VO and missing native-style captions read as broadcast content, not native TikTok texture; native-looking content outperforms polished ads by 47%.",
              lessonRef: "step-2-shoot-native-not-tv-on-phone",
              owner: "you",
            },
            {
              defect: "Caption and hashtags carry no target keyword, only #ad #mattress",
              severity: "moderate",
              whyItMatters:
                "Over 40% of U.S. users search TikTok before Google; a caption with no spoken or on-screen keyword gets zero search-index weight.",
              lessonRef: "step-4-write-for-search-tiktok-seo",
              owner: "you",
            },
          ],
          distractors: [
            "Using an original brand jingle instead of a licensed pop song",
            "Keeping the video under 30 seconds",
            "Posting on a weekday instead of a weekend",
          ],
          partialCredit: true,
        },
        {
          itemId: "posting-plan-cadence",
          specimen:
            "POSTING PLAN, WEEK 1\nMon: Video A (sound: trending, 3.4M uses)\nTue: Video B\nWed: Video C\nThu: Video D\nFri: Video E\nSat: Video F\nSun: Video G\nNote: \"Post daily so the algorithm knows we're active. Reply to comments once a week on Fridays.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Two decisions in this posting plan work against the lesson's distribution rules. Which two, and why?",
          answerKey: [
            {
              defect: "Posting daily (7x/week) instead of 3-5x/week",
              severity: "moderate",
              whyItMatters:
                "Posting too often with mixed-quality videos confuses the algorithm's topic clustering and dilutes niche authority; optimal frequency is 3-5x/week, quality of retention signals beats volume.",
              lessonRef: "step-6-post-3-5-times-per-week-not-daily",
              owner: "you",
            },
            {
              defect: "Chosen sound already has 3.4M uses",
              severity: "critical",
              whyItMatters:
                "Above 1 million uses a sound's trend is decaying and carries no novelty signal; the rising window is roughly 5,000-100,000 uses.",
              lessonRef: "step-3-ride-sounds-inside-the-rising-window",
              owner: "you",
            },
            {
              defect: "Replying to comments only once a week",
              severity: "moderate",
              whyItMatters:
                "The first hour of comments is a live ranking signal; replying fast increases comment velocity, which the algorithm reads as engagement momentum.",
              lessonRef: "step-5-optimize-the-first-15-minutes-after-posting",
              owner: "you",
            },
          ],
          distractors: [
            "Scheduling posts in the morning instead of the evening",
            "Using the same caption template across all 7 videos",
            "Not tagging a specific city location on each video",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "TikTok Ads",
            role: "Check a sound's current use count in Creative Center before scheduling it",
            why: "Free to use (you only pay if you run paid ads); Creative Center inside it shows real-time rising/peaked sound data",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each script against the playbook checklist",
            why: "Free, easy to share with the team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect list for both draft videos, each tagged critical/moderate/cosmetic, with the fix needed before filming starts.",
      sampleOutput:
        "Chewy, TikTok script review (excerpt)\n\nVIDEO 2 — \"Autoship Unboxing\"\nCRITICAL: opens on Chewy logo sting (0:00-0:04) — cut, open on the dog reacting to the box instead\nMODERATE: caption has no keyword — add \"dog food autoship\" spoken in first 5 seconds\nOK: native vertical footage, creator voiceover, sound at 42K uses (inside rising window)",
      successCriteria: [
        "Correctly flags both critical native-vs-ad mistakes in Video 1",
        "Identifies the stale sound and posting-cadence issues in the posting plan",
        "Does not flag either distractor as a real defect",
      ],
      portfolioReady: true,
    },
    {
      id: "tiktok-launch-content-plan-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a 2-Week TikTok Launch Plan for a Real Product Drop",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Produce a real 6-video, 2-week TikTok content plan for a subscription pet-products launch, applying hook patterns, native shooting rules, sound timing, and search captions from the playbook.",
      companyId: "chewy",
      scenario:
        "Chewy is launching a new Autoship flavor line and wants an organic TikTok plan before any paid spend; you're the freelance social strategist pitching the plan.",
      brief:
        "Plan 6 videos across 2 weeks (3/week), each with a hook pattern, native shooting note, a sound inside the rising window, and a search-optimized caption.",
      mode: "build",
      conceptsCovered: [
        "Engineer the First 3 Seconds",
        "Write for Search (TikTok SEO)",
        "Post 3-5 Times Per Week, Not Daily",
      ],
      steps: [
        {
          stepId: "step-1-hook-patterns",
          concept: "Engineer the First 3 Seconds",
          lessonAnchor: "step-1-engineer-the-first-3-seconds",
          theoryRecap:
            "The lesson's Step 1 gives four hook patterns, pattern interrupt, contrarian claim, visual reveal, question loop, because if retention dips before second 5 the FYP buries the video immediately.",
          question:
            "For a video about the new Autoship flavor line, which hook pattern fits video 1 of 6, and what's the exact opening line?",
          toolName: "Google Sheets",
          where: "Build the 6-video grid: column for hook pattern, opening line, format note.",
          procedure: [
            "List all 6 planned videos in rows",
            "Assign one of the 4 hook patterns per video, no pattern repeated twice in a row",
            "Write the literal first line of dialogue for each hook",
            "Flag any video whose hook takes longer than 3 seconds to land",
          ],
          outputSample:
            "VIDEO 1 (contrarian claim): \"Stop buying the same dog food flavor every month.\"\nVIDEO 2 (visual reveal): opens mid-unboxing, box already torn open, dog already sniffing",
          healthy:
            "Every video's hook lands a claim, question, or visual before the 3-second mark, no logo, no brand name yet.",
          unhealthy: "A hook that spends the first 3 seconds on a brand intro or slow establishing shot.",
          interpret: "The hook is the only gate that matters before the algorithm even starts testing retention.",
          soWhat: [
            {
              symptom: "Two videos in the plan use the same hook pattern back to back",
              action: "Reassign one to a different pattern before filming",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-search-captions",
          concept: "Write for Search (TikTok SEO)",
          lessonAnchor: "step-4-write-for-search-tiktok-seo",
          theoryRecap:
            "TikTok indexes spoken words, on-screen text, captions and descriptions; the target keyword should be said aloud in the first 5 seconds and placed in the caption.",
          question:
            "What is the one search keyword each of the 6 videos should say aloud and caption, and does it match something a dog owner would actually type into TikTok search?",
          toolName: "TikTok Ads",
          where: "TikTok Ads' Creative Center keyword/insights view, filtered to the pet category.",
          procedure: [
            "Pull 3-5 pet-category search terms from Creative Center",
            "Assign one keyword per video, no duplicates across the 6",
            "Write the exact spoken sentence containing the keyword for the first 5 seconds",
            "Add the same keyword into the caption plus 1-2 related hashtags",
          ],
          outputSample:
            "VIDEO 3 keyword: \"dog food subscription\" — spoken line: \"This is the easiest dog food subscription I've tried.\" Caption: \"The easiest dog food subscription, no more forgetting to reorder #dogfoodsubscription #chewy\"",
          healthy:
            "Every video's spoken keyword also appears in the caption, and the 6 keywords cover different search intents (not 6 videos chasing the same term).",
          unhealthy: "A caption with only hashtags and no spoken or written keyword the algorithm can index.",
          interpret:
            "A hook earns the first 3 seconds; the keyword earns the search index. Both are required, neither substitutes for the other.",
          soWhat: [
            {
              symptom: "A video's caption has hashtags but no keyword said aloud",
              action: "Rewrite the first line of dialogue to include the keyword naturally",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cadence-sounds",
          concept: "Post 3-5 Times Per Week, Not Daily",
          lessonAnchor: "step-6-post-3-5-times-per-week-not-daily",
          theoryRecap:
            "Optimal posting frequency is 3-5 times per week; posting more with mixed quality dilutes the algorithm's topic clustering, so each of the 6 videos also needs a sound inside the 5,000-100,000-use rising window.",
          question:
            "Spread across 2 weeks, which 3 days per week get a video, and which currently-rising sound (checked in Creative Center) pairs with each?",
          toolName: "TikTok Ads",
          where: "TikTok Ads' Creative Center trending sounds tab, filtered to 'rising' and the pet/lifestyle category.",
          procedure: [
            "Pick 3 posting days per week, spaced out, not three in a row",
            "Filter Creative Center sounds to 'rising' with use counts between roughly 5,000 and 100,000",
            "Assign one sound per video, checking the use count the day before filming, not the day the plan was written",
            "Note a backup sound for any video whose assigned sound crosses 100,000 uses before filming",
          ],
          outputSample:
            "Week 1: Mon/Wed/Fri. Video 1 sound: 34,200 uses (rising). Video 2 sound: 61,800 uses (rising). Video 3 sound: 12,100 uses (rising, backup ready).",
          healthy:
            "6 videos land on 6 non-consecutive days across 2 weeks, each paired to a sound still under 100,000 uses at filming time.",
          unhealthy:
            "A sound picked 2 weeks in advance that has since crossed 1 million uses and gone stale by the time it's filmed.",
          interpret:
            "Cadence and sound freshness are both time-sensitive constraints, the plan has to be checked again right before filming, not just written once.",
          soWhat: [
            {
              symptom: "A previously-rising sound has crossed 1M uses since the plan was written",
              action: "Swap in the backup sound noted for that video",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "TikTok Ads",
            role: "Find rising sounds and category keywords in Creative Center",
            why: "Free, official first-party data on sound age and keyword search",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build and share the 6-video grid",
            why: "Free, standard planning format",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva for Social",
            role: "Draft on-screen caption/text overlay mockups before filming",
            why: "Faster to preview caption placement than sketching by hand",
            required: false,
            fallback: "Sketch caption placement directly on the Sheets grid",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 6-video, 2-week TikTok content grid with hook pattern, opening line, target keyword, assigned sound, and posting day for each video.",
      sampleOutput:
        "Casper Sleep, TikTok launch grid (excerpt)\n\nVIDEO 1 (Mon, contrarian claim): \"Stop breaking in a new mattress for 90 days.\" Keyword: \"mattress trial period\", sound at 28K uses.",
      successCriteria: [
        "6 videos assigned across 3 non-consecutive days per week for 2 weeks",
        "No hook pattern repeated on consecutive videos",
        "Every video's caption contains the spoken keyword",
        "Every assigned sound is under 100,000 uses",
      ],
      portfolioReady: true,
      stretch:
        "Add a 7th 'reactive' video slot held open for whatever sound breaks into the rising window mid-campaign.",
    },
  ],
  "youtube": [
    {
      id: "youtube-video-test-window-audit",
      tier: "mini",
      archetype: "audit",
      title: "Audit Why a Video Failed Its 24-48 Hour Algorithm Test",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real-style YouTube Studio analytics export for one underperforming video, diagnose which packaging or retention factor caused it to fail the test window and stay limited to Search-only reach.",
      companyId: "glossybox",
      scenario:
        "You manage GLOSSYBOX's YouTube channel. A new unboxing tutorial got almost no Suggested/Home traffic after 48 hours, only Search.",
      brief:
        "Read the analytics export against the playbook's test-window logic and packaging rules, diagnose the cause, recommend the fix.",
      mode: "diagnostic",
      conceptsCovered: ["Engineer the first 30 seconds", "Frontload keywords in your title"],
      steps: [
        {
          stepId: "step-1-retention-open",
          concept: "Engineer the first 30 seconds",
          lessonAnchor: "phase-2-production-what-to-build",
          theoryRecap:
            "Audience retention in the first 15-20 seconds is the single strongest predictor of algorithm reach; opening with a logo sting or 'welcome back' instead of the payoff kills that signal before the test window even starts.",
          question:
            "The retention graph shows a 38% drop-off in the first 15 seconds. What's in the first 15 seconds of this video, and does it match the payoff-first rule?",
          toolName: "YouTube",
          where: "YouTube Studio, Analytics tab, Audience retention graph for the specific video.",
          procedure: [
            "Open Audience retention for the video in YouTube Studio",
            "Note the timestamp of the steepest drop-off",
            "Compare that timestamp against the video's actual opening (intro length, logo, welcome line)",
            "Decide whether the opening delivers the payoff or delays it",
          ],
          outputSample:
            "Audience retention: 100% at 0:00, drops to 62% by 0:15\nVideo opening: 0:00-0:12 channel intro animation + \"Hey guys, welcome back to the channel\", payoff starts at 0:13",
          healthy:
            "Retention holds above 70% through the first 15-20 seconds because the payoff or stakes are stated immediately.",
          unhealthy:
            "A steep drop-off exactly at the point the intro animation or greeting ends and content finally starts.",
          interpret: "The intro animation is costing roughly 25 percentage points of retention before the actual content begins.",
          soWhat: [
            {
              symptom: "Retention graph shows a cliff in the first 15 seconds",
              action: "Cut the intro animation and greeting, open on the payoff instead",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-title-keyword",
          concept: "Frontload keywords in your title",
          lessonAnchor: "phase-3-packaging-title-thumbnail-description",
          theoryRecap:
            "YouTube's search index prioritizes the first 60 characters of a title; the core query needs to come first, curiosity or specificity after.",
          question:
            "The video's title is \"A Chill Sunday Get Ready With Me + Beauty Chat ✨\" — where is the actual searchable query, and is it inside the first 60 characters?",
          toolName: "YouTube",
          where: "YouTube Studio, video details panel, character count under the title field.",
          procedure: [
            "Count characters to find what falls inside the first 60",
            "Identify whether a real search query (e.g. 'GLOSSYBOX unboxing') sits inside that window",
            "Check the video's actual CTR against the channel's average CTR for the same period",
            "Rewrite the title with the query frontloaded if it's currently missing",
          ],
          outputSample:
            "Current title, first 60 chars: \"A Chill Sunday Get Ready With Me + Beauty Chat ✨\" (49 chars, no product/brand keyword)\nChannel average CTR: 6.1%. This video's CTR: 2.4%.",
          healthy: "The core searchable query sits inside the first 60 characters, and CTR is at or above the channel average.",
          unhealthy:
            "The title reads as a vlog diary entry with no product or category keyword, and CTR is under half the channel average.",
          interpret:
            "Without a query in the title, the video has no search seed, the test window fails because the algorithm has no signal for who to show it to.",
          soWhat: [
            {
              symptom: "Title has no keyword in the first 60 characters and CTR is well below channel average",
              action: "Retitle with the core query first, e.g. 'GLOSSYBOX August Unboxing + Get Ready With Me'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "YouTube",
            role: "Read Studio analytics (retention, CTR) for the video",
            why: "Free, first-party data, the only source with real retention graphs",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the diagnosis and the recommended title rewrite",
            why: "Free, easy to share with the content team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page diagnosis naming the retention and title defects, with a rewritten opening and title.",
      sampleOutput:
        "Casper Sleep, video diagnosis (excerpt)\n\nRetention drop at 0:18 matches an 18-second product-history preamble before the actual sleep tip. Fix: cut to the tip at 0:03, move history to a card/description link.\nTitle 'Sleep Better Tonight (Trust Us!)' has no keyword in first 60 chars, CTR 1.9% vs channel avg 5.4%. Rewrite: 'How To Fall Asleep Faster - 3 Tips That Actually Work'.",
      successCriteria: [
        "Correctly ties the retention drop-off timestamp to the specific opening-seconds mistake",
        "Identifies the missing keyword in the title's first 60 characters",
        "Recommends a specific rewritten title and opening, not a vague note",
      ],
      portfolioReady: true,
    },
    {
      id: "youtube-packaging-rebuild",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild a Video's Full Search Package: Title, Thumbnail Brief, and Description",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a real-style underperforming video (topic, current title, current description, retention notes), rebuild its complete packaging, a keyword-first title, a thumbnail concept brief, and a landing-page-style description, so it can be republished at the 90-day mark.",
      companyId: "casper-sleep",
      scenario:
        "Casper Sleep has a 14-month-old 'how to fall asleep' video getting almost no Suggested traffic. You're doing the 90-day repackaging pass the playbook calls for.",
      brief:
        "Research the actual search demand, then rebuild title, thumbnail brief, and description as a complete package, not isolated tweaks.",
      mode: "build",
      conceptsCovered: [
        "Lead with search demand",
        "Frontload keywords in your title",
        "Treat thumbnail like a paid ad creative",
        "Write descriptions like landing pages",
      ],
      steps: [
        {
          stepId: "step-1-search-demand",
          concept: "Lead with search demand",
          lessonAnchor: "phase-1-topic-selection-before-you-record",
          theoryRecap:
            "Topic selection starts with search demand, not intuition, use a keyword tool to find queries with consistent monthly volume and weak existing results; formats like 'how to' and 'best X for Y' compound hardest.",
          question:
            "The video currently targets 'sleep better tonight' loosely. What's the actual highest-volume, weak-competition query this content should be re-targeted at?",
          toolName: "YouTube",
          where: "YouTube's own search-suggest autocomplete plus Google Trends, both free.",
          procedure: [
            "Type the rough topic into YouTube search, note autocomplete suggestions",
            "Check Google Trends for relative volume across the top 3 candidate queries",
            "Open the current top-ranking video for the winning query and note its production quality/age",
            "Pick the query with real volume and a genuine competition gap",
          ],
          outputSample:
            "Autocomplete candidates: 'how to fall asleep fast', 'how to fall asleep faster naturally', 'sleep better tonight tips'\nTop result for 'how to fall asleep fast': 6 years old, no captions, 240p thumbnail — competition gap confirmed",
          healthy: "The retargeted query has visible search demand and the current top result is old, low-production, or thin.",
          unhealthy:
            "Retargeting to a query where the top 3 results are all recent, high-production channels with 500K+ subscribers.",
          interpret:
            "A competition gap this clear means the existing video's problem was never the topic, it was the packaging around it.",
          soWhat: [
            {
              symptom: "Original title used a vague phrase with no real search volume behind it",
              action: "Retarget the whole package to the validated higher-volume query",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-title-rebuild",
          concept: "Frontload keywords in your title",
          lessonAnchor: "phase-3-packaging-title-thumbnail-description",
          theoryRecap:
            "YouTube's search index prioritizes the first 60 characters of a title, put the core query first, then add curiosity or specificity.",
          question: "Write the new title with the validated query in the first 60 characters.",
          toolName: "Google Sheets",
          where: "A packaging worksheet, one row per candidate title, with a running character count.",
          procedure: [
            "Draft 3 title variants, each starting with the exact validated query",
            "Count characters to confirm the query lands inside the first 60",
            "Add one specificity or curiosity element after the query, not before it",
            "Pick the variant that reads naturally, not like keyword stuffing",
          ],
          outputSample:
            "Variant chosen: 'How To Fall Asleep Fast - 3 Tips That Worked For Me' (54 chars to the dash, query is the first 4 words)",
          healthy:
            "The core query is the literal first words of the title, and the full title still reads like something a person would click.",
          unhealthy: "A title that buries the query after a hook phrase, pushing it past character 60.",
          interpret: "Search indexing rewards the query's position, human curiosity is layered on after, not instead of it.",
          soWhat: [
            {
              symptom: "Query sits after character 60 in a draft title",
              action: "Move the query to the front, trim the hook phrase instead",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-thumbnail-brief",
          concept: "Treat thumbnail like a paid ad creative",
          lessonAnchor: "phase-3-packaging-title-thumbnail-description",
          theoryRecap:
            "Top creators routinely double views by swapping thumbnails alone; test two thumbnail variants using YouTube's native A/B tool after publishing, treating the thumbnail like paid ad creative, not an afterthought.",
          question: "Write a thumbnail concept brief, not the pixels, for 2 variants to A/B test.",
          toolName: "Canva for Social",
          where: "A Canva for Social thumbnail template, 1280x720.",
          procedure: [
            "Write a one-line concept for variant A (e.g. face + bold text overlay)",
            "Write a one-line concept for variant B testing a different emotional angle",
            "Confirm both variants are legible at the small mobile thumbnail size",
            "Queue both into YouTube's native A/B thumbnail test after publishing",
          ],
          outputSample:
            "Variant A: close-up tired face + text \"CAN'T SLEEP?\" in high-contrast yellow\nVariant B: clock showing 3am + text \"3 TIPS THAT WORKED\"",
          healthy:
            "Both variants are legible at thumbnail size and test genuinely different angles (emotion vs. proof), not two versions of the same idea.",
          unhealthy: "Two thumbnail variants that differ only in background color, testing nothing meaningful.",
          interpret: "A real A/B test needs two different hypotheses about what makes someone click, not two cosmetic tweaks.",
          soWhat: [
            {
              symptom: "Both draft thumbnails use the same layout and message",
              action: "Rewrite variant B around a different emotional angle entirely",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-description-rebuild",
          concept: "Write descriptions like landing pages",
          lessonAnchor: "phase-3-packaging-title-thumbnail-description",
          theoryRecap:
            "The first two lines of a description appear in search results, use them to restate the query and promise the outcome, then add timestamps, links, and keyword-rich detail below.",
          question: "Rewrite the description's first two lines to restate the query and the promised outcome.",
          toolName: "Google Sheets",
          where: "The packaging worksheet, description column.",
          procedure: [
            "Write line 1 restating the exact query",
            "Write line 2 promising the specific outcome the video delivers",
            "Add timestamps for each retention-milestone section below the fold",
            "Add 1-2 related keyword phrases naturally in the paragraph below the timestamps",
          ],
          outputSample:
            "Line 1: \"How to fall asleep fast, even on nights your brain won't shut off.\"\nLine 2: \"3 tips backed by sleep research, no supplements, no gadgets required.\"\n0:00 The problem with counting sheep\n1:20 Tip 1: temperature\n3:05 Tip 2: the 4-7-8 method",
          healthy: "The first two lines alone answer 'is this the video I searched for' without needing to click through.",
          unhealthy: "A description that opens with a generic channel intro or a subscribe request before saying what the video covers.",
          interpret:
            "The description's first two lines are doing the same search-results job as a landing page's above-the-fold copy.",
          soWhat: [
            {
              symptom: "Description opens with 'Hey guys welcome back' instead of restating the query",
              action: "Move the query restatement to line 1",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "YouTube",
            role: "Check autocomplete demand and competing videos",
            why: "Free, first-party search signal",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the packaging worksheet, title variants, description draft",
            why: "Free, shareable with the team",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva for Social",
            role: "Draft the two thumbnail concept briefs at 1280x720",
            why: "Free tier covers standard thumbnail sizing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete repackaging brief: rebuilt title, 2 thumbnail concept briefs ready for A/B test, and a rebuilt description with timestamps.",
      sampleOutput:
        "GLOSSYBOX, 90-day repackaging brief (excerpt)\n\nOld title: 'Our Favorite Beauty Products This Month'\nNew title: 'Best Drugstore Beauty Products 2026 - GLOSSYBOX Picks'\nThumbnail A: 5 products fanned out + 'OUR TOP 5' text\nDescription line 1: 'The best drugstore beauty products worth buying in 2026.'",
      successCriteria: [
        "New title places the validated query in the first 60 characters",
        "Two thumbnail concepts test genuinely different angles",
        "Description's first two lines restate query and outcome without a channel-intro preamble",
        "Timestamps added for at least 3 sections",
      ],
      portfolioReady: true,
      stretch:
        "After 14 days live with the repackaged version, pull the new retention graph and compare the first-15-second drop-off against the original.",
    },
  ],

  "community-building": [
    {
      id: "community-power-member-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 14/70 Power-Member Audit",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 60-row member activity log, apply the 14/70 rule to find the power members who deserve a visible role before your top contributors churn unnoticed.",
      companyId: "zomato",
      scenario:
        "You're the community manager for Zomato's new Foodie Circle community, six weeks post-launch. Leadership wants to know who is actually driving the discussion before the community team decides who gets ambassador badges.",
      brief:
        "Rank members by contribution, identify the 14% carrying 70% of meaningful discussion, and flag which of them show early churn risk.",
      mode: "diagnostic",
      conceptsCovered: ["Identifying power members using the 14/70 rule"],
      steps: [
        {
          stepId: "step-1-rank-by-contribution",
          concept: "Identifying power members using the 14/70 rule",
          lessonAnchor: "step-7-identify-and-elevate-power-members",
          theoryRecap:
            "The lesson's 14/70 rule holds across platforms: roughly 14% of members generate 70% of all meaningful discussion, and finding them early is the highest-leverage move a community manager can make.",
          question:
            "Sorted by comments-started plus unprompted answers to other members, 8 of 60 members account for 71% of all discussion activity. Two of those 8 haven't posted in 9 days. What do you do first?",
          toolName: "Google Sheets",
          where:
            "Import member-activity-log.csv, add a 'contribution score' column (threads started x2 + unprompted replies x1), sort descending.",
          procedure: [
            "Import member-activity-log.csv and freeze the header row",
            "Compute contribution score per member and sort descending",
            "Mark the cutoff row where cumulative contribution crosses 70% of total activity",
            "Cross-reference that top group against 'last active' to flag churn risk",
          ],
          outputSample:
            "Contribution ranking (top of 60)\n  1. rider_priya_k    score 94   last active 2 days ago\n  2. foodie_arjun_r    score 81   last active 9 days ago  <- CHURN RISK\n  3. spice_reviews_n   score 77   last active 1 day ago\n  ...\n  Top 8 members = 71% of all threads + replies",
          healthy:
            "The two flagged churn-risk power members get a personal outreach DM within 48 hours, before losing them quietly.",
          unhealthy:
            "Waiting for a monthly report to notice two of your top 8 contributors went silent for over a week.",
          interpret:
            "A power-member list is only useful if it's checked for churn risk, not just contribution volume.",
          soWhat: [
            {
              symptom: "A top-8 power member hasn't posted in over a week",
              action: "Send a personal check-in DM and offer a visible role within 48 hours",
              effort: "5 min",
            },
            {
              symptom: "No member crosses a clear contribution threshold",
              action: "The community is too young to have power members yet; revisit in 30 days",
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
            role: "Rank members and compute the 14/70 cutoff",
            why: "Free, no account friction, handles a 60-row export easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked power-member list with the 14/70 cutoff marked, plus a churn-risk flag and a one-line outreach plan for each flagged member.",
      sampleOutput:
        "Swiggy Foodie Table community, Week 6 power-member audit (excerpt)\n\nTOP 14% (5 of 34 active members)\n  1. tiffin_reviews_k   score 88   ACTIVE\n  2. hyd_biryani_fan     score 79   CHURN RISK, last post 11 days ago -> outreach DM sent\n  3. plateful_priya      score 74   ACTIVE\n\nAction: 1 personal outreach DM sent, 1 ambassador badge offered",
      successCriteria: [
        "Correctly computes a contribution score and ranks all members",
        "Identifies the group crossing the 70% cumulative-contribution threshold",
        "Flags any top-tier member showing churn risk with a specific next action",
      ],
      portfolioReady: true,
    },
    {
      id: "community-90-day-launch-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a 90-Day Community Launch Plan",
      timeEstimate: "1 hour",
      timeMinutes: 60,
      objective:
        "Design a complete pre-launch-to-90-day plan for a new branded community: platform choice, founding member recruitment, launch event, and a repeating content calendar.",
      companyId: "squarespace",
      scenario:
        "Squarespace wants to launch a private community for its Website Designers plan subscribers. You've been asked to produce the full 90-day plan before a single invite goes out.",
      brief:
        "Choose a platform that fits the audience, design a founding-member recruitment list, script the launch event, and build a 4-week repeating content calendar.",
      mode: "build",
      conceptsCovered: [
        "Choosing a platform based on audience fit, not trend",
        "Recruiting founding members before opening to the public",
        "Designing a high-energy launch event",
        "Building a repeating content calendar",
      ],
      steps: [
        {
          stepId: "step-1-platform-choice",
          concept: "Choosing a platform based on audience fit, not trend",
          lessonAnchor: "step-2-choose-the-right-platform",
          theoryRecap:
            "The lesson's platform comparison shows private communities outperform public ones by 57% on engagement, and the right platform depends on audience behavior, not what's trending.",
          question:
            "Website Designers plan subscribers are professional freelancers who work async, in different time zones, and want to show off finished sites. Which platform fits: Discord, Circle, or a branded forum?",
          toolName: "Google Sheets",
          where: "Build a simple 3-column comparison: platform, audience fit, engagement style.",
          procedure: [
            "List the audience's real behavior: async, professional, portfolio-driven",
            "Score each platform option against that behavior, not against follower trends",
            "Pick the platform and write one sentence justifying it against the audience, not the hype",
          ],
          outputSample:
            "Platform scorecard\n  Discord: real-time chat, mismatched with async freelancers  -> 2/5\n  Circle: async posts, portfolio showcase, events           -> 5/5\n  Branded forum: SEO value, but slower to build community    -> 3/5\n  Decision: Circle",
          healthy: "The platform choice traces directly back to a documented audience behavior.",
          unhealthy: "Picking Discord because it's the platform every other brand community uses.",
          interpret: "Platform fit is an audience-behavior decision, not a trend-following one.",
          soWhat: [
            {
              symptom: "The chosen platform doesn't match how the audience already works",
              action: "Re-score against documented audience behavior before committing budget",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-founding-members",
          concept: "Recruiting founding members before opening to the public",
          lessonAnchor: "step-3-seed-your-founding-members",
          theoryRecap:
            "The first 50 to 100 members set the culture permanently, so the lesson recommends personal outreach to vocal customers, subject matter experts, and internal team members before any public launch.",
          question:
            "You have a list of 400 Website Designers subscribers. Which 50 do you personally invite first, and what do you offer them?",
          toolName: "Google Sheets",
          where: "Filter the subscriber list by support-ticket engagement and review activity.",
          procedure: [
            "Pull the top 30 most active support-ticket repliers and reviewers from the subscriber list",
            "Add 10 internal Squarespace design team members who will model good behavior",
            "Add 10 micro-influencer freelance designers who already talk about Squarespace publicly",
            "Draft a personal (not mass) outreach message offering a founding-member badge and early access",
          ],
          outputSample:
            "Founding member list (50)\n  30 top-engagement subscribers (from support + review data)\n  10 internal team members\n  10 external freelance-designer micro-influencers\n  Outreach: personal email, founding badge offer, early access to a new template library",
          healthy: "All 50 invites are personal messages referencing something specific about that person.",
          unhealthy: "A single mass email sent to 400 people labeled 'You're invited to our new community.'",
          interpret: "Founding members respond to being personally needed, not broadcast to.",
          soWhat: [
            {
              symptom: "Fewer than half of founding invites accept within a week",
              action: "Switch to a warmer channel (a call or DM) instead of email for the remaining invites",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-launch-event",
          concept: "Designing a high-energy launch event",
          lessonAnchor: "step-5-launch-with-a-high-energy-event",
          theoryRecap:
            "AMA sessions boost weekly engagement by 42% in the weeks that follow, and the lesson recommends planting 10 to 20 questions and responses so the space doesn't feel empty at launch.",
          question:
            "Your launch is a founder AMA. What do you prepare before a single real member has posted?",
          toolName: "Google Sheets",
          where: "Draft a planted-question sheet and a launch-day run-of-show.",
          procedure: [
            "Write 15 realistic questions a Website Designer subscriber would actually ask",
            "Draft founder-voice answers for each, ready to post at defined intervals on launch day",
            "Schedule the AMA for a specific 90-minute live window with founding members pre-briefed to show up",
          ],
          outputSample:
            "Launch AMA plan\n  Format: 90-min live AMA, founder + 3 founding members seeded in first 10 min\n  15 planted Q&A pairs drafted, staggered every 4-5 minutes\n  Goal: no dead air in the first 30 minutes",
          healthy: "The space has visible activity within the first 5 minutes of going live.",
          unhealthy: "A launch post sits with zero replies for the first hour because nothing was planted.",
          interpret: "A quiet launch produces a quiet community; planted activity sets the social-proof baseline.",
          soWhat: [
            {
              symptom: "The launch thread has no replies after 15 minutes",
              action: "Post a planted question/answer pair immediately to break the silence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-content-calendar",
          concept: "Building a repeating content calendar",
          lessonAnchor: "step-6-build-a-content-calendar",
          theoryRecap:
            "Most communities die because content becomes inconsistent after the launch high, and the lesson notes polls generate 3.8x more interactions than standard posts.",
          question:
            "Design a 4-week repeating weekly cadence that won't run out of ideas by week 5.",
          toolName: "Canva for Social",
          where: "Design a simple visual weekly template: Monday prompt, Wednesday resource, Friday spotlight.",
          procedure: [
            "Set Monday as a weekly discussion prompt or poll (lowest-effort, highest-interaction format)",
            "Set Wednesday as an educational post or behind-the-scenes template share",
            "Set Friday as a member spotlight or mini-AMA",
            "Design a lightweight branded template in Canva so each post looks consistent without new design work each week",
          ],
          outputSample:
            "4-week content calendar (repeating)\n  Mon: Poll ('Which template style gets the most client pushback?')\n  Wed: Behind-the-scenes design breakdown\n  Fri: Member spotlight + shoutout\n  Canva template: 1 reusable spotlight card, 1 reusable poll card",
          healthy: "The calendar can run unattended for a full month without anyone inventing new formats daily.",
          unhealthy: "Content is planned only through week 2, forcing daily scrambling by week 3.",
          interpret: "A repeating structure protects against the post-launch content cliff.",
          soWhat: [
            {
              symptom: "Engagement drops sharply in week 3 or 4",
              action: "Check whether the calendar's repeating format was actually followed, not abandoned",
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
            role: "Platform scorecard, founding-member list, and launch run-of-show",
            why: "Free, fast to share across a small internal launch team",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva for Social",
            role: "Design the repeating weekly content calendar templates",
            why: "Free tier covers reusable social templates without a designer",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hootsuite",
            role: "Schedule the 4-week content calendar across channels once the community launches",
            why: "Saves manual posting once the cadence is locked in",
            required: false,
            fallback: "Post manually from the calendar sheet for the first month",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Manual posting from a shared calendar sheet is completely viable for the first 90 days; only add a scheduler once the cadence is proven.",
      },
      deliverable:
        "A complete 90-day community launch plan: platform decision with justification, a 50-person founding-member list with outreach approach, a launch-day AMA run-of-show, and a repeating 4-week content calendar with Canva templates.",
      sampleOutput:
        "Zomato Foodie Circle, 90-Day Launch Plan (excerpt)\n\nPlatform: Circle (async, portfolio-friendly, matches restaurant-partner behavior)\nFounding members: 45 top reviewers + 5 internal team\nLaunch: Founder AMA, 12 planted Q&A pairs, 90-min live window\nContent calendar: Mon poll / Wed recipe feature / Fri partner spotlight",
      successCriteria: [
        "Platform choice is justified against documented audience behavior, not popularity",
        "Founding-member list totals roughly 50 people with a personal (not mass) outreach approach",
        "Launch plan includes planted questions to avoid a dead first hour",
        "Content calendar repeats indefinitely without requiring new formats each week",
      ],
      portfolioReady: true,
      stretch:
        "Add a 48-hour onboarding automation (welcome DM or prompt) and project its impact using the lesson's stat that unengaged-in-48-hours members are 3x more likely to churn.",
    },
  ],
  "influencer-marketing": [
    {
      id: "influencer-fit-vetting-audit",
      tier: "mini",
      archetype: "audit",
      title: "Vetting a Creator Shortlist for Brand Fit",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real 10-creator shortlist with follower counts, engagement rates, and audience data, apply the lesson's four fit signals to decide who actually deserves outreach.",
      companyId: "zomato",
      scenario:
        "You're the creator marketing lead for Zomato launching a premium subscription push. Your agency sent a 10-creator shortlist sorted by follower count, and you have budget for 4 partnerships.",
      brief:
        "Re-rank the shortlist using audience overlap, rolling engagement, comment quality, and brand safety, not raw follower count.",
      mode: "diagnostic",
      conceptsCovered: ["Vetting creators by fit signals instead of follower count"],
      steps: [
        {
          stepId: "step-1-fit-signal-audit",
          concept: "Vetting creators by fit signals instead of follower count",
          lessonAnchor: "step-2-vet-creators-by-fit-signals-not-follower-count",
          theoryRecap:
            "The lesson names four signals that predict campaign success: audience overlap with your ICP, rolling 30-day engagement (not lifetime average), comment quality, and a 90-day brand safety review.",
          question:
            "Creator #3 on the agency list has 480k followers and a 2.9% lifetime engagement rate. Creator #7 has 62k followers and a 6.1% rolling-30-day engagement rate with buying-intent comments. Which one gets outreach first, and why?",
          toolName: "Google Sheets",
          where: "Import creator-shortlist.csv, add columns for rolling engagement, audience-overlap %, and a brand-safety flag.",
          procedure: [
            "Import creator-shortlist.csv and re-sort by rolling 30-day engagement, not follower count",
            "Cross-check each finalist's stated audience demo against Zomato's ICP (urban, 22-38, food delivery users)",
            "Scan the last 10 posts of each finalist for comment quality: buying questions vs. emoji-only reactions",
            "Flag any creator with a competitor mention or controversy in the trailing 90 days",
          ],
          outputSample:
            "Re-ranked shortlist (top 4 of 10)\n  1. foodie_reels_kavya   62k followers  6.1% rolling engagement  ICP overlap 78%  comments: buying questions  SAFE\n  2. citybites_dev        41k followers  5.4% rolling engagement  ICP overlap 71%  SAFE\n  3. megafoodblogger_x    480k followers 2.9% lifetime engagement ICP overlap 44%  FLAGGED: competitor mention (Swiggy) in last 60 days\n  4. tiffin_talks_priya   58k followers  5.8% rolling engagement  ICP overlap 69%  SAFE",
          healthy:
            "The final 4 picks are the highest rolling-engagement, highest-ICP-overlap creators, and the flagged competitor-mention creator is dropped regardless of reach.",
          unhealthy:
            "Picking the 480k-follower creator anyway because the reach number looks better in a slide deck.",
          interpret: "Reach without fit is just an expensive impression; the four signals filter for actual conversion likelihood.",
          soWhat: [
            {
              symptom: "A high-follower creator has a competitor mention in the last 90 days",
              action: "Drop them from the shortlist regardless of reach or price",
              effort: "5 min",
            },
            {
              symptom: "A creator's engagement rate is quoted as a lifetime average",
              action: "Request or calculate the rolling 30-day rate before trusting the number",
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
            role: "Re-rank the shortlist against the four fit signals",
            why: "Free, handles a 10-row creator comparison without new software",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A re-ranked 10-creator shortlist with rolling engagement, ICP overlap, comment-quality notes, and brand-safety flags, plus a final 4-creator outreach list.",
      sampleOutput:
        "Swiggy Instamart, Q3 creator shortlist audit (excerpt)\n\nOUTREACH (4 picks)\n  1. quickgrocery_tanvi   54k followers  5.9% rolling engagement  SAFE\n\nDROPPED\n  megamart_reviews_x     390k followers 2.4% lifetime engagement  FLAGGED: competitor mention",
      successCriteria: [
        "Re-ranks creators by rolling engagement, not follower count or lifetime average",
        "Checks audience overlap against a stated ICP",
        "Flags at least one creator for a brand-safety or competitor-mention issue",
      ],
      portfolioReady: true,
    },
    {
      id: "influencer-tier-budget-and-contract-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Tiered Creator Budget and Whitelisting Contract Checklist",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a fixed campaign budget, build a tiered creator allocation (60/30/10) and a contract checklist that secures whitelisting rights, the single highest-ROI clause in creator marketing.",
      companyId: "swiggy",
      scenario:
        "Swiggy Instamart has a $60,000 budget for a quarterly creator campaign and no existing tiering framework. You've been asked to produce the allocation plan and the contract checklist before any creator is contacted.",
      brief:
        "Split the budget 60/30/10 across micro, mid-tier, and one hero partnership, then build a contract checklist that locks in usage rights and FTC compliance.",
      mode: "build",
      conceptsCovered: [
        "Allocating budget across creator tiers before outreach",
        "Structuring a contract that protects ROI",
        "Whitelisting top-performing posts",
      ],
      steps: [
        {
          stepId: "step-1-tier-allocation",
          concept: "Allocating budget across creator tiers before outreach",
          lessonAnchor: "step-1-define-your-creator-portfolio-before-outreach",
          theoryRecap:
            "The lesson's benchmark allocation is 60% to micro-creators (10k-100k), 30% to mid-tier (100k-500k), and 10% to one hero partnership, decided before a single creator is contacted.",
          question:
            "With $60,000 total, how many micro-creators can you realistically fund at the lesson's $500-$5,000 per-creator range while staying inside the 60% micro allocation?",
          toolName: "Google Sheets",
          where: "Build a 3-row budget split with a creator-count estimate per tier.",
          procedure: [
            "Allocate $36,000 (60%) to micro-creators at an average $3,000 per creator, targeting 12 partners",
            "Allocate $18,000 (30%) to mid-tier creators at an average $9,000 per creator, targeting 2 partners",
            "Allocate $6,000 (10%) to one hero partnership for launch-moment reach",
          ],
          outputSample:
            "Tier allocation ($60,000 total)\n  Micro (60%):    $36,000  ->  12 creators @ ~$3,000 avg\n  Mid-tier (30%): $18,000  ->  2 creators @ ~$9,000 avg\n  Hero (10%):     $6,000   ->  1 creator (gifted + small fee)",
          healthy: "The micro tier gets the largest creator count and the largest dollar share, matching the lesson's benchmark.",
          unhealthy: "Spending the entire budget on one 500k-follower creator because it feels like the 'safe' choice.",
          interpret: "Tier allocation set in advance prevents outreach from drifting toward whoever responds first.",
          soWhat: [
            {
              symptom: "The budget has drifted toward one large creator mid-campaign",
              action: "Re-check the allocation sheet before signing any new contract",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-contract-checklist",
          concept: "Structuring a contract that protects ROI",
          lessonAnchor: "step-3-structure-the-deal-to-protect-your-roi",
          theoryRecap:
            "A defensible creator contract needs a deliverables spec, an exclusivity window, a usage-rights clause, FTC disclosure language, and a performance kicker tied to a measurable result.",
          question:
            "Which single clause, if missing, turns a $3,000 micro-creator post into organic-reach-only spend with no way to scale it later?",
          toolName: "Google Sheets",
          where: "Build a 5-row contract checklist, one row per required clause.",
          procedure: [
            "Write the deliverables spec: 1 Reel, 2 Stories, exact hashtag and mention rules, 1 approval round",
            "Set a 60-day category exclusivity window for the quick-commerce grocery category",
            "Write the usage-rights clause explicitly: paid whitelisting and dark-post rights included in the fee",
            "Add FTC disclosure language requiring #ad in the first line of caption or first 3 seconds of video",
            "Add a performance kicker: a bonus tied to promo-code redemptions above a set threshold",
          ],
          outputSample:
            "Contract checklist (5 required clauses)\n  [x] Deliverables: 1 Reel + 2 Stories, 1 approval round\n  [x] Exclusivity: 60 days, quick-commerce grocery category\n  [x] Usage rights: whitelisting + dark-post included in base fee\n  [x] FTC disclosure: #ad in first line/first 3 seconds\n  [x] Performance kicker: bonus at 200+ code redemptions",
          healthy: "Usage rights are written into every contract before signing, not negotiated after a post performs well.",
          unhealthy: "Signing a contract with no usage-rights clause, then discovering the top post can't be whitelisted.",
          interpret: "Usage rights are the one clause with no retroactive fix; it has to be in the original contract.",
          soWhat: [
            {
              symptom: "A contract is missing the usage-rights clause",
              action: "Do not sign; renegotiate before the campaign starts, not after a post goes viral",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-whitelist-plan",
          concept: "Whitelisting top-performing posts",
          lessonAnchor: "step-4-whitelist-every-top-performing-post",
          theoryRecap:
            "Whitelisted creator ads outperform brand-handle ads by 20-50% on CPA, and brands running ongoing programs identify the top 10-20% of posts by organic engagement in the first 48 hours to shift paid budget behind them.",
          question:
            "Given the usage-rights clause is now secured for all 15 creators, what's the actual trigger rule for deciding which posts get whitelisted?",
          toolName: "Google Sheets",
          where: "Add a whitelisting-trigger rule to the campaign tracker.",
          procedure: [
            "Set a 48-hour organic engagement check window after each post goes live",
            "Rank all live posts by organic engagement rate at the 48-hour mark",
            "Move paid budget behind the top 10-20% of posts by that ranking",
          ],
          outputSample:
            "Whitelisting trigger rule\n  Check window: 48 hours post-live\n  Threshold: top 10-20% of posts by organic engagement rate\n  Action: shift paid budget behind flagged posts within 24 hours of threshold check",
          healthy: "Whitelisting decisions happen on a fixed 48-hour schedule, not ad hoc when someone remembers.",
          unhealthy: "Waiting until the campaign wrap-up report to notice which posts should have been whitelisted weeks earlier.",
          interpret: "A scheduled trigger rule turns whitelisting from a one-off tactic into a repeatable program mechanic.",
          soWhat: [
            {
              symptom: "A high-performing post is discovered late, after its organic reach has already peaked",
              action: "Whitelist it immediately anyway; some paid lift is better than none",
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
            role: "Build the tier-allocation budget and the contract checklist",
            why: "Free, sufficient for a 15-creator campaign tracker",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Buffer",
            role: "Track scheduled creator content and flag posts crossing the 48-hour engagement threshold",
            why: "Centralizes post performance instead of checking each platform manually",
            required: false,
            fallback: "Check each creator's post manually at the 48-hour mark and log it in the sheet",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "A manual 48-hour check in Sheets is completely workable for a 15-creator campaign; add scheduling software once the program scales past 30+ active creators.",
      },
      deliverable:
        "A tiered budget allocation (60/30/10) with a specific creator count per tier, a 5-clause contract checklist, and a whitelisting trigger rule with a defined 48-hour check window.",
      sampleOutput:
        "Zomato Gold, Q3 creator budget build (excerpt)\n\nBudget: $45,000 total\n  Micro (60%): $27,000 -> 9 creators\n  Mid-tier (30%): $13,500 -> 2 creators\n  Hero (10%): $4,500 -> 1 creator\nContract checklist: 5/5 clauses complete\nWhitelisting rule: 48-hour check, top 15% of posts by engagement",
      successCriteria: [
        "Budget splits roughly 60/30/10 across micro, mid-tier, and hero creators",
        "Contract checklist includes all 5 required clauses, especially usage rights",
        "Whitelisting trigger rule specifies both a check window and a selection threshold",
      ],
      portfolioReady: true,
      stretch:
        "Model the CPA impact of whitelisting using the lesson's 20-50% CPA improvement range against your own campaign's target CPA.",
    },
  ],

  "social-listening": [
    {
      id: "social-listening-mentions-export-audit",
      tier: "mini",
      archetype: "audit",
      title: "Enrich or Ignore: Auditing a Raw Mentions Export",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a raw 30-row mentions export with no sentiment or topic tags, apply the lesson's enrichment and routing layers to decide which mentions need action today versus which are noise.",
      companyId: "robinhood",
      scenario:
        "You're the community insights analyst at Robinhood. Support just forwarded a raw export of 30 mentions pulled from a brand-keyword search, unsorted, untagged, and dumped in a spreadsheet an hour before your weekly sync.",
      brief:
        "Tag sentiment and topic on every row, then decide which rows need a named owner today and which can wait for the weekly digest.",
      mode: "diagnostic",
      conceptsCovered: ["Sentiment and topic enrichment", "Routing insights to a named owner"],
      steps: [
        {
          stepId: "step-1-enrichment-pass",
          concept: "Sentiment and topic enrichment",
          lessonAnchor: "layer-3-enrichment",
          theoryRecap:
            "The lesson's Layer 3 says raw mentions are not insights until they carry sentiment, topic, and journey-stage tags.",
          question:
            "The export has 30 rows of raw mention text with no columns beyond handle and platform. Which 3 columns do you add before anything else is usable?",
          toolName: "Google Sheets",
          where: "Paste the export into a new sheet, freeze the header row, add columns to the right of the raw text.",
          procedure: [
            "Paste all 30 rows into column A, freeze row 1",
            "Add columns: Sentiment (positive/negative/neutral), Topic (app crash, fees, onboarding, praise, other), Journey Stage (awareness, consideration, post-purchase)",
            "Tag each row by reading the raw text, not by keyword-matching alone",
            "Flag any row containing 'lawsuit', 'fraud', 'locked me out', or 'can't withdraw' in a 4th column, Crisis Flag",
          ],
          outputSample:
            "Row 14: '@user2291: locked out of my account for 3 days, no response, moving my money elsewhere'\n  Sentiment: Negative | Topic: Onboarding/Access | Journey: Post-purchase | Crisis Flag: YES\n\nRow 22: '@user8830: just did my first options trade, so easy'\n  Sentiment: Positive | Topic: Praise | Journey: Post-purchase | Crisis Flag: NO",
          healthy:
            "3 rows carry a Crisis Flag and get pulled into a separate list before the sync even starts.",
          unhealthy:
            "All 30 rows are read once, summarized as 'mostly positive, some access complaints,' and nobody notices the 3 rows describing locked accounts.",
          interpret:
            "Enrichment isn't a nice-to-have formatting step, it's the filter that separates a row worth escalating from a row worth ignoring.",
          soWhat: [
            {
              symptom: "A crisis-shaped complaint sits unflagged in row 14 of an unsorted export",
              action: "Add a Crisis Flag column and scan for account-access, legal, and financial-harm language before any other tagging",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-routing-decision",
          concept: "Routing insights to a named owner",
          lessonAnchor: "layer-4-routing",
          theoryRecap:
            "The lesson's Layer 4 argues an insight that sits in a dashboard nobody opens is the same as no insight; every tagged mention type needs a predetermined owner.",
          question:
            "You now have 3 crisis-flagged rows, 8 negative access/fee complaints, and 19 neutral-to-positive rows. Who gets each bucket, and how fast?",
          toolName: "Google Sheets",
          where: "Add an Owner column next to your enrichment tags, using the routing rules from Layer 4.",
          procedure: [
            "Route the 3 crisis-flagged rows to comms on-call with a same-hour SLA",
            "Route the 8 negative access/fee rows to the support lead's queue with a same-day SLA",
            "Bundle the 19 neutral/positive rows into the weekly digest, no individual owner needed",
          ],
          outputSample:
            "ROUTING SUMMARY\n  Crisis (3 rows) -> Comms on-call, SLA: 1 hour\n  Negative/access (8 rows) -> Support lead queue, SLA: same day\n  Neutral/positive (19 rows) -> Weekly digest, no individual action",
          healthy:
            "Every row has an owner and an SLA before the sync starts, so the meeting is a status check, not a triage session.",
          unhealthy:
            "The meeting opens with 'so what do we do with these,' spending 20 minutes re-doing the triage live for the third week running.",
          interpret:
            "Routing decisions belong in the spreadsheet before the meeting, not in the meeting itself.",
          soWhat: [
            {
              symptom: "Every weekly sync starts with 15-20 minutes of live triage",
              action: "Pre-assign an owner and SLA column to every enriched row before the meeting is scheduled",
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
            role: "Tag sentiment/topic and assign owners on the raw export",
            why: "No account setup, works with a pasted CSV, sufficient for a 30-row manual audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hootsuite",
            role: "Automate enrichment and routing at a volume beyond what a manual sheet can handle",
            why: "Built-in sentiment tagging and team-assignment workflows replace the manual columns once mention volume exceeds a few hundred rows a week",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "An enriched, routed version of the mentions export with an Owner and SLA assigned to every row.",
      sampleOutput:
        "PolicyBazaar mentions triage, week of Mar 3\n\nCRISIS (2 rows)\n  1. @user4410: 'PolicyBazaar approved my claim then reversed it with no explanation' -> Comms on-call, 1hr SLA\n\nNEGATIVE/ACCESS (6 rows)\n  1. @user1102: 'app keeps logging me out mid-renewal' -> Support lead, same-day SLA\n\nDIGEST (22 rows): mostly praise for claim-settlement speed, no action needed",
      successCriteria: [
        "Every row is tagged with sentiment, topic, and journey stage",
        "Crisis-shaped complaints are correctly flagged and separated from routine negative feedback",
        "Every row carries a named owner and an SLA before the meeting starts",
      ],
      portfolioReady: true,
    },
    {
      id: "social-listening-query-routing-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Listening Program: Query Set, Routing Matrix, Review Cadence",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Build the three foundational documents a real social listening program needs before any tool is purchased: a Boolean query set by use case, a routing matrix with named owners, and a review cadence.",
      companyId: "policybazaar",
      scenario:
        "You're setting up PolicyBazaar's first structured social listening program. Leadership approved budget for a mid-market tool, but nobody has defined what to track or who acts on what, and a tool without that groundwork is just a cost center.",
      brief:
        "Design query sets by use case, a routing matrix with named owners and SLAs, and a review cadence, before recommending which tool to buy.",
      mode: "build",
      conceptsCovered: [
        "Boolean query design by use case",
        "Routing matrix with named owners",
        "Review cadence with a required decision",
      ],
      steps: [
        {
          stepId: "step-1-query-design",
          concept: "Boolean query design by use case",
          lessonAnchor: "layer-1-query-design",
          theoryRecap:
            "The lesson's Layer 1 says build separate Boolean query sets per use case, brand health, product feedback, category, and crisis triggers, because combining them into one query creates noise.",
          question:
            "PolicyBazaar sells insurance and loan comparison. What does a crisis-trigger query set look like versus a category query set for the same brand?",
          toolName: "Google Sheets",
          where: "One tab per use case, listing include terms, exclude terms, and example matched posts.",
          procedure: [
            "Brand health tab: 'PolicyBazaar', common misspellings, 'PolicyBazaar vs [competitor]'",
            "Category tab: 'best term insurance India', 'cheapest car insurance comparison', 'claim rejected' without the brand name",
            "Crisis tab: 'PolicyBazaar' AND ('claim denied' OR 'fraud' OR 'lawsuit' OR 'data leak')",
            "Exclusions tab across all sets: official PolicyBazaar handles, employee accounts, press-release syndication domains",
          ],
          outputSample:
            "CRISIS QUERY SET\n  Include: 'PolicyBazaar' AND ('claim denied' OR 'fraud' OR 'data leak' OR 'lawsuit')\n  Exclude: site:policybazaar.com, @PolicyBazaarSupport, @PolicyBazaarIndia\n  Sample match: 'PolicyBazaar denied my claim after 6 months, this is fraud' (Twitter/X, 340 likes)",
          healthy:
            "Four separate query tabs exist, each tuned to catch a different signal type without drowning it in the others.",
          unhealthy:
            "One combined query for 'PolicyBazaar' returns 4,000 mentions a week, 90% of them praise and support replies, burying the 2 crisis-shaped posts inside the noise.",
          interpret:
            "A single combined query optimizes for volume, not for signal; separate use-case queries optimize for the decision each one is supposed to trigger.",
          soWhat: [
            {
              symptom: "The listening dashboard shows thousands of mentions a week and nobody can find the ones that matter",
              action: "Split the single combined query into 4 use-case-specific query sets with their own exclusion lists",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-routing-matrix",
          concept: "Routing matrix with named owners",
          lessonAnchor: "layer-4-routing",
          theoryRecap:
            "The lesson's Layer 4 requires every categorized mention type to have a predetermined owner and channel before the tool is even configured.",
          question:
            "You have 4 query sets from Step 1. Who receives output from each one, and on what SLA?",
          toolName: "Google Sheets",
          where: "A single matrix tab: Signal Type | Owner | Channel | SLA.",
          procedure: [
            "Product feedback (from category queries) -> PM team, tagged into Jira, weekly triage",
            "Sentiment trend shift (from brand health queries) -> Brand team Slack channel, weekly threshold alert",
            "Volume anomaly, 3x baseline in 60 minutes -> Comms on-call, paged immediately",
            "Competitor mentions (from brand health comparisons) -> Sales intelligence, weekly digest",
          ],
          outputSample:
            "ROUTING MATRIX\n  Product feedback -> PM team -> Jira board -> Weekly\n  Sentiment shift -> Brand team -> Slack #brand-health -> Weekly threshold alert\n  Volume anomaly (3x/60min) -> Comms on-call -> Phone page -> Immediate\n  Competitor mention -> Sales intelligence -> Weekly digest email -> Weekly",
          healthy:
            "Every signal type has exactly one owner and a stated SLA before the tool is purchased.",
          unhealthy:
            "The tool goes live, mentions accumulate in a dashboard, and 6 weeks later leadership asks why nobody acted on the sentiment dip flagged in week 2.",
          interpret:
            "The routing matrix, not the tool's feature list, is what determines whether the program produces decisions or just reports.",
          soWhat: [
            {
              symptom: "A listening tool is live but nobody can say who owns a given alert type",
              action: "Build the routing matrix before finalizing the tool purchase, and confirm each named owner has accepted the SLA",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-review-cadence",
          concept: "Review cadence with a required decision",
          lessonAnchor: "layer-5-action-review-cadence",
          theoryRecap:
            "The lesson's Layer 5 says every review should produce a decision, a feature change, a message adjustment, a pivot, not just a slide deck summarizing what people said.",
          question:
            "You have daily, weekly, and monthly review touchpoints defined. What decision does each one have to produce to count as complete?",
          toolName: "Google Sheets",
          where: "A cadence tab: Frequency | Attendees | Required Output.",
          procedure: [
            "Daily (automated): anomaly alerts only, no meeting, comms on-call reviews and pages if needed",
            "Weekly: PM + brand team review product feedback and sentiment trends, must produce one prioritization decision or message adjustment",
            "Monthly: leadership review of brand sentiment and share-of-voice, must produce one resourcing or strategy decision",
          ],
          outputSample:
            "REVIEW CADENCE\n  Daily: Comms on-call, anomaly alerts, decision = page or dismiss\n  Weekly: PM + Brand, product feedback synthesis, decision = 1 backlog item added or message adjusted\n  Monthly: Leadership, sentiment + share-of-voice, decision = 1 resourcing or strategy call",
          healthy:
            "Every weekly review ends with one named decision written into the matrix, even if the decision is 'no action needed, monitor.'",
          unhealthy:
            "The weekly review is a 30-minute readout of what people said last week, with no decision attached, that repeats every week with nothing changing.",
          interpret:
            "A review without a required decision output degrades into a status meeting; naming the required output in advance forces the discipline.",
          soWhat: [
            {
              symptom: "Weekly listening reviews run 30 minutes and produce a summary slide, not a decision",
              action: "Add a 'Required Output' column to the cadence tab and refuse to close a review without filling it in",
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
            role: "Draft the query sets, routing matrix, and review cadence before any tool purchase",
            why: "Free, sharable with stakeholders for sign-off before committing budget to a paid listening tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hootsuite",
            role: "Run the finalized query sets at scale with built-in routing and alerting once the matrix is signed off",
            why: "Purpose-built for exactly the query-set and alert-routing structure this project designs manually",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Build all three documents free first. Buy the tool only after the routing matrix has named, accepted owners, a tool cannot fix an undefined routing plan.",
      },
      deliverable:
        "Three linked documents: a 4-set Boolean query design, a routing matrix with named owners and SLAs, and a review cadence with required decision outputs.",
      sampleOutput:
        "Robinhood listening program setup (excerpt)\n\nQUERY SETS: Brand health, Category ('best trading app for beginners'), Crisis ('Robinhood' + 'lawsuit'/'outage'/'frozen account'), Exclusions\n\nROUTING MATRIX\n  Volume anomaly -> Comms on-call -> Immediate page\n  Product feedback -> PM -> Jira -> Weekly\n\nCADENCE: Weekly PM review must close with 1 backlog decision; monthly leadership review must close with 1 resourcing call",
      successCriteria: [
        "4 distinct query sets exist with include, exclude, and example-match rows",
        "Every signal type in the routing matrix has exactly one named owner and a stated SLA",
        "Each cadence tier states a required decision output, not just an attendee list",
      ],
      portfolioReady: true,
      stretch:
        "Add a 5-10 scenario crisis-response playbook mapped to the crisis query set, so the comms on-call owner has a pre-approved template ready before the first real spike.",
    },
  ],
  "content-calendar": [
    {
      id: "content-calendar-70-20-10-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a 4-Week Calendar Shell: Pillars, Then the 70/20/10 Split",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Define 3-5 content pillars and apply the 70/20/10 split to build a 4-week calendar shell with slots labeled, not filled, before a single post is drafted.",
      companyId: "klaviyo",
      scenario:
        "You're the sole social marketer at a Klaviyo-style ecommerce-tools startup. Leadership wants '3 posts a week starting Monday' with no pillars and no plan, and you know an unstructured calendar collapses by week 3.",
      brief:
        "Define pillars, apply the 70/20/10 split, and produce a 4-week slot shell before any content gets written.",
      mode: "build",
      conceptsCovered: ["Content pillars", "70/20/10 content split"],
      steps: [
        {
          stepId: "step-1-pillars",
          concept: "Content pillars",
          lessonAnchor: "step-2-define-3-5-content-pillars",
          theoryRecap:
            "The lesson says every post must map to exactly one of 3-5 pillars; if a post can't be assigned a pillar, it doesn't belong in the calendar yet.",
          question:
            "For a B2B ecommerce marketing tool, what 4 pillars cover the range of things worth posting without overlapping each other?",
          toolName: "Google Sheets",
          where: "A single Pillars tab listing each pillar name and one sentence on what it's for.",
          procedure: [
            "List candidate pillars: customer wins, product education, founder POV, industry data",
            "Write one sentence per pillar describing what it accomplishes (awareness, trust, or conversion)",
            "Check for overlap, if two pillars could both claim the same post idea, merge them",
          ],
          outputSample:
            "PILLARS\n  1. Customer wins - trust, real logos and numbers\n  2. Product education - conversion, feature explainers\n  3. Founder POV - awareness, opinion and industry takes\n  4. Industry data - awareness, benchmark stats worth sharing",
          healthy:
            "Every pillar has a clear job (awareness, trust, or conversion) and no two pillars would claim the same post idea.",
          unhealthy:
            "Pillars are named 'general updates' and 'misc,' which means every post can be filed under either one and neither pillar means anything.",
          interpret:
            "A pillar without a stated job is just a label; the job is what lets you check whether the calendar is balanced.",
          soWhat: [
            {
              symptom: "Two pillars keep claiming the same post ideas during planning",
              action: "Merge the overlapping pillars into one and rewrite its job statement to be more specific",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-split",
          concept: "70/20/10 content split",
          lessonAnchor: "step-3-set-the-702010-content-split",
          theoryRecap:
            "The lesson's 70/20/10 framework reserves 70% of slots for planned evergreen content, 20% for reactive content left empty until the week arrives, and 10% for experimental formats.",
          question:
            "At 3 posts/week for 4 weeks, that's 12 slots total. How many go to each bucket, and which slots stay empty on purpose?",
          toolName: "Google Sheets",
          where: "A Calendar Shell tab: Week | Slot # | Bucket | Pillar (blank for reactive).",
          procedure: [
            "12 total slots: 70% = 8-9 evergreen, 20% = 2-3 reactive (left blank), 10% = 1 experimental",
            "Assign a pillar to each of the 8-9 evergreen slots now",
            "Leave the 2-3 reactive slots' Pillar column empty, they fill in the week they're used, not now",
            "Mark 1 experimental slot for a format never tried before, e.g. a poll or a behind-the-scenes video",
          ],
          outputSample:
            "WEEK 1\n  Slot 1 (Mon): Evergreen, Customer wins\n  Slot 2 (Wed): Evergreen, Product education\n  Slot 3 (Fri): Reactive, [empty, fill this week]\n\nWEEK 4\n  Slot 12 (Fri): Experimental, [format TBD - first poll]",
          healthy:
            "9 slots are pre-filled with pillar assignments, 2 slots are deliberately blank, and 1 is flagged experimental, all decided before week 1 starts.",
          unhealthy:
            "All 12 slots get evergreen content assigned in advance because 'reactive' felt too vague to plan for, leaving zero room for a real trend or customer story.",
          interpret:
            "The reactive slots are supposed to stay empty, an empty cell in the shell is the plan working, not a gap to fill in.",
          soWhat: [
            {
              symptom: "Every slot in the 4-week shell already has content assigned before week 1",
              action: "Clear 2-3 slots per week back to empty and label them Reactive, resist filling them until the week arrives",
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
            role: "Build the pillar list and the 4-week slot shell",
            why: "Free, shareable, sufficient for planning before any scheduling tool is needed",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva for Social",
            role: "Design the visual asset for each evergreen slot once the shell is approved",
            why: "Templates speed up batch production once the pillars and slots are locked",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A 4-week, 12-slot calendar shell with pillars assigned to evergreen slots and reactive/experimental slots deliberately left open.",
      sampleOutput:
        "Robinhood 4-week shell (excerpt)\n\nPILLARS: Investing basics, market moments, product features, community stories\n\nWEEK 1\n  Mon: Evergreen, Investing basics\n  Wed: Evergreen, Product features\n  Fri: Reactive, [empty]",
      successCriteria: [
        "3-5 pillars are defined, each with a stated job (awareness, trust, or conversion)",
        "70% of the 12 slots are pre-assigned to a pillar, 20% are deliberately left blank, 10% is flagged experimental",
        "No pillar overlaps with another pillar's stated job",
      ],
      portfolioReady: true,
    },
    {
      id: "content-calendar-execution-audit",
      tier: "mini",
      archetype: "audit",
      title: "Why the Calendar Keeps Failing: Auditing a Team's Real Spreadsheet",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a team's actual 3-week content calendar spreadsheet, diagnose which of the lesson's common execution failures are present and rank them by how much engagement they're costing.",
      companyId: "robinhood",
      scenario:
        "You're auditing a fintech app's social team calendar after 3 flat months of engagement. The spreadsheet looks organized at a glance, every slot is filled, but something in the execution is broken.",
      brief:
        "Read the filled 3-week calendar and flag every violation of the lesson's execution rules, not just the ones that are visually obvious.",
      mode: "diagnostic",
      conceptsCovered: ["Scheduling versus manual posting", "Reserved reactive slots", "Replying to comments after posting"],
      steps: [
        {
          stepId: "step-1-manual-posting-check",
          concept: "Scheduling versus manual posting",
          lessonAnchor: "step-6-schedule-never-post-manually",
          theoryRecap:
            "The lesson identifies manual, same-day posting as the most common reason content calendars fail in execution, not a lack of planning.",
          question:
            "The spreadsheet has a 'Posted?' column with a mix of TRUE and blank across the 3 weeks, and no scheduling tool is named anywhere in the sheet. What does that tell you?",
          toolName: "Google Sheets",
          where: "Scan the Posted? and Notes columns across all 21 planned slots.",
          procedure: [
            "Count how many of the 21 slots show 'Posted?' = blank or FALSE",
            "Check the Notes column for phrases like 'forgot,' 'posted late,' or 'missed the window'",
            "Flag the pattern: no scheduling tool named anywhere means every post depends on someone remembering",
          ],
          outputSample:
            "AUDIT FINDING\n  6 of 21 slots (29%) show 'Posted? = blank'\n  Notes column: 'forgot Tuesday', 'posted 4hrs late Wed', 'missed, traveling'\n  No scheduling tool referenced in the sheet or tab names",
          healthy:
            "Every slot references a scheduling tool and the Posted? column is 100% TRUE because the post went live on its own.",
          unhealthy:
            "29% of slots are unposted or late, and the pattern traces back to same-day manual posting with no scheduler in the workflow.",
          interpret:
            "A well-organized planning spreadsheet with no scheduling tool behind it is still a manual-posting failure waiting to happen.",
          soWhat: [
            {
              symptom: "29% of planned slots go unposted or post late over 3 weeks",
              action: "Introduce a scheduling tool and require every slot to be queued at least 48 hours in advance",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-reactive-slot-check",
          concept: "Reserved reactive slots",
          lessonAnchor: "step-3-set-the-702010-content-split",
          theoryRecap:
            "The lesson requires the 20% reactive bucket to stay genuinely empty until the week arrives; locking 100% of slots to planned evergreen content removes the ability to respond to anything.",
          question:
            "All 21 slots in this 3-week calendar were filled with evergreen pillar content the month before, none left blank. What happens when something worth reacting to comes up?",
          toolName: "Google Sheets",
          where: "Check the Bucket column, if one exists, or infer it from how far in advance each slot was filled.",
          procedure: [
            "Check whether a Bucket column (Evergreen/Reactive/Experimental) exists at all",
            "If it doesn't exist, check the Date Filled column against the Post Date, a gap of 3+ weeks for every slot signals no reactive room",
            "Confirm: 0 of 21 slots were filled within the week they posted",
          ],
          outputSample:
            "AUDIT FINDING\n  No Bucket column present\n  All 21 slots filled 3-4 weeks in advance, 0 filled within posting week\n  No trending or timely content appears anywhere in the 3-week sample",
          healthy:
            "2-4 slots per week are visibly filled in the days just before they post, carrying timely or trend-responsive content.",
          unhealthy:
            "Every single slot was locked a month out, so a relevant industry news moment in week 2 had nowhere to go.",
          interpret:
            "A 100%-locked calendar isn't more organized, it's structurally unable to respond to anything that happens after planning day.",
          soWhat: [
            {
              symptom: "Zero slots in 3 weeks contain timely or reactive content",
              action: "Add a Bucket column and reserve 20% of next month's slots as blank until the week they post",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-reply-budget-check",
          concept: "Replying to comments after posting",
          lessonAnchor: "step-7-reply-to-comments-within-the-first-60-minutes",
          theoryRecap:
            "The lesson cites a documented engagement lift, up to 42% on Threads and 30% on LinkedIn, from replying to comments within the first 60 minutes after a post goes live, and says the calendar must budget time for this.",
          question:
            "Nowhere in this spreadsheet is there a task, block, or column for post-publish replies. What's the calendar missing?",
          toolName: "Google Sheets",
          where: "Scan for any column, note, or calendar block referencing comment replies or community management.",
          procedure: [
            "Search the sheet for any mention of 'reply,' 'comments,' or 'community' in column headers or notes",
            "Check whether the team's shared calendar has a recurring block after each post time",
            "Confirm the gap: 0 of 21 slots have a reply-window task attached",
          ],
          outputSample:
            "AUDIT FINDING\n  No 'reply' or 'community management' column exists\n  0 of 21 slots have a follow-up task or calendar block\n  Team reports replies happen 'whenever someone notices'",
          healthy:
            "Each post time has a 15-minute reply block scheduled immediately after it, assigned to a specific person.",
          unhealthy:
            "Replies happen ad hoc, hours or days after a post goes live, well past the window where the lesson's data shows the engagement lift applies.",
          interpret:
            "A calendar that only tracks publishing time is only half the system; the reply window is the other half and it needs its own scheduled block.",
          soWhat: [
            {
              symptom: "No task or time block exists for replying to comments after a post goes live",
              action: "Add a 15-minute reply block immediately after every scheduled post time, assigned to a named owner",
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
            role: "Audit the existing calendar spreadsheet's columns and fill-date patterns",
            why: "The audit works directly on whatever spreadsheet the team already uses, no new tool required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Buffer",
            role: "Replace manual posting with scheduled posting and add reply-window reminders",
            why: "Directly fixes the two structural gaps this audit finds, unscheduled posting and no reply-window tracking",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A ranked list of the 3 execution failures found in the audited calendar, each with a quantified gap and a fix.",
      sampleOutput:
        "Klaviyo calendar audit (excerpt)\n\n1. Manual posting: 4 of 18 slots (22%) posted late or missed entirely, no scheduler used\n2. No reactive slots: 100% of slots locked 3+ weeks out, 0 room for timely content\n3. No reply budget: 0 of 18 slots have a post-publish reply block",
      successCriteria: [
        "Correctly identifies whether manual posting is occurring from the Posted?/Notes columns",
        "Correctly identifies whether any slots were genuinely left open for reactive content",
        "Correctly identifies the absence of a scheduled reply-window task",
      ],
      portfolioReady: true,
    },
  ],

  "organic-vs-paid": [
    {
      id: "organic-vs-paid-reach-economics-headtohead",
      tier: "mini",
      archetype: "head-to-head",
      title: "Organic vs. Paid: Reading the Same Week Two Ways",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given one week of organic and paid social metrics for the same brand, decide which channel is actually working by applying each channel's own KPI set, not a shared one.",
      companyId: "flipkart",
      scenario: "You're a social media analyst at Flipkart, the Bengaluru-founded horizontal ecommerce marketplace, reviewing last week's Instagram performance before the quarterly budget review.",
      brief: "You have organic post metrics (reach, saves, shares, comments) and paid campaign metrics (CPM, CPC, CPA, ROAS) from the same week and same platform. Leadership wants a one-line verdict: is social 'working'? Apply the lesson's rule that organic and paid are judged on different KPIs, never compared on the same number.",
      mode: "diagnostic",
      conceptsCovered: ["Assigning organic and paid different jobs and KPIs"],
      steps: [
        {
          stepId: "step-1-assign-channel-kpis",
          concept: "Assigning organic and paid different jobs and KPIs",
          lessonAnchor: "step-3-assign-each-channel-a-job-and-measure-accordingly",
          theoryRecap: "The lesson's Step 3 splits measurement by channel: organic on saves, shares, DMs, and profile visits; paid on CPC, CPA, and ROAS. Judging organic by reach or paid by likes hides the real signal.",
          question: "Organic reach fell 9% week-over-week but saves rose 22%. Paid CPA rose 15% but ROAS held at 3.2x. Is this a bad week for social?",
          toolName: "Google Sheets",
          where: "Two tabs, one exported from Instagram Insights (organic), one exported from Meta Ads Manager (paid), same date range.",
          procedure: [
            "Import both exports into separate sheet tabs, keep the date range identical",
            "On the organic tab, ignore the reach column entirely and rank posts by saves-to-reach ratio",
            "On the paid tab, ignore CPM and rank campaigns by ROAS against the 3x profitability floor",
            "Write one verdict per channel, never a single combined verdict",
          ],
          outputSample: "ORGANIC\n  Reach: -9% WoW (not the metric that matters)\n  Saves: +22% WoW <- real signal, creative is resonating\n  Verdict: working, keep testing this format\n\nPAID\n  CPA: +15% WoW (creative fatigue, watch closely)\n  ROAS: 3.2x (above 3x floor)\n  Verdict: working, but flag CPA trend for next week",
          healthy: "Two separate verdicts, each grounded in that channel's own KPI set.",
          unhealthy: "One combined 'social is up/down' number that averages reach and ROAS together.",
          interpret: "A reach dip with a saves increase is a healthy sign, not a red flag; a rising CPA with ROAS still above floor is a watch item, not a crisis.",
          soWhat: [
            { symptom: "Leadership asks for one social media score", action: "Present organic and paid verdicts side by side instead of blending them", effort: "5 min" },
            { symptom: "CPA keeps climbing while ROAS is still above floor", action: "Flag it now and refresh the ad creative before ROAS actually drops", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Import and compare organic and paid exports side by side", why: "Free, no account friction, handles two small weekly exports easily", required: true, lastVerified: "2026-08" },
          { toolName: "Meta Ads Manager", role: "Source of the paid campaign export (CPM, CPC, CPA, ROAS)", why: "Native reporting for the paid side of the same week", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page channel scorecard with two independent verdicts (organic, paid) and the specific metric that drove each verdict.",
      sampleOutput: "HelloFresh, Instagram week-of-8/11 scorecard\n\nORGANIC\n  Reach: 1.1% of followers (expected, not a red flag)\n  Saves: +18% WoW on the new recipe-hack Reel format\n  Verdict: Working. Scale the recipe-hack format next week.\n\nPAID\n  ROAS: 2.7x (below 3x floor)\n  CPA: $34, up from $29\n  Verdict: Not working. Pause the underperforming ad set before adding budget.",
      successCriteria: [
        "Produces two separate verdicts, one per channel, never a blended score",
        "Correctly identifies that a reach drop with rising saves is not a failure signal",
        "Flags the paid campaign by ROAS against the 3x floor, not by CPM or impressions",
      ],
      portfolioReady: true,
    },
    {
      id: "organic-vs-paid-platform-focus-audit",
      tier: "mini",
      archetype: "audit",
      title: "The One-Platform Call: Auditing Where to Concentrate Budget",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given follower counts, engagement rate, and buyer type across four platforms, audit which single platform the brand should concentrate on this quarter, using the lesson's buyer-mapping framework instead of picking the platform with the most followers.",
      companyId: "hellofresh",
      scenario: "You're a social media analyst at HelloFresh, the Berlin-founded meal-kit subscription company, ahead of a quarter where the team can only fully resource one platform.",
      brief: "The brand is currently spread thin across Instagram, TikTok, Facebook, and LinkedIn with mediocre results everywhere. Audit the current spread against the lesson's buyer-to-platform mapping and recommend the one platform to double down on.",
      mode: "diagnostic",
      conceptsCovered: ["Picking one platform based on where the specific buyer scrolls"],
      steps: [
        {
          stepId: "step-1-audit-platform-fit",
          concept: "Picking one platform based on where the specific buyer scrolls",
          lessonAnchor: "step-4-pick-one-platform-and-dominate-it",
          theoryRecap: "The lesson's Step 4 maps buyer type to platform: B2B SaaS to LinkedIn, ecommerce/CPG to Instagram and TikTok, local services to Facebook, developer tools to X. Beginners who spread across five platforms lose on all of them.",
          question: "A CPG meal-kit brand is currently posting daily on Instagram, TikTok, Facebook, and LinkedIn, with a two-person content team. Which platform does the framework say to concentrate on, and which two get cut first?",
          toolName: "Google Sheets",
          where: "A tracking sheet with follower count, weekly posting frequency, and engagement rate per platform, filled in from each platform's native analytics.",
          procedure: [
            "List all four platforms with follower count and engagement rate",
            "Flag each platform's audience type: is this actually where a home cook browses recipe content, or is it dead weight",
            "Apply the lesson's mapping: CPG/ecommerce belongs on Instagram and TikTok, not Facebook or LinkedIn",
            "Recommend cutting the two platforms outside the mapped category, even if they have followers",
          ],
          outputSample: "PLATFORM AUDIT (2-person content team, meal-kit CPG brand)\n  Instagram: 340K followers, 2.1% engagement -> KEEP, primary\n  TikTok: 190K followers, 4.8% engagement -> KEEP, secondary\n  Facebook: 210K followers, 0.4% engagement -> CUT, wrong buyer fit\n  LinkedIn: 12K followers, 1.1% engagement -> CUT, wrong buyer fit for a CPG brand\n\nRecommendation: Reallocate the Facebook/LinkedIn posting time into daily TikTok content.",
          healthy: "The recommended platform matches the lesson's buyer-type mapping, not just the highest follower count.",
          unhealthy: "Keeping Facebook because it has more followers than TikTok, despite CPG buyers not being the audience there.",
          interpret: "Follower count without buyer-fit is vanity data; engagement rate on the right platform for the buyer type is the real signal.",
          soWhat: [
            { symptom: "Content team is stretched across 4 platforms with mediocre output everywhere", action: "Cut the two platforms outside the buyer-type mapping and reinvest that time in the top platform", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the platform-by-platform comparison table", why: "Free, sufficient for a 4-row comparison", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page platform audit recommending exactly one primary platform and naming the two to cut, with the buyer-fit reasoning for each.",
      sampleOutput: "Flipkart, platform focus audit (excerpt)\n\nRecommendation: Instagram + YouTube Shorts primary, cut standalone X posting.\n\nReasoning: Ecommerce buyers browsing product discovery content are concentrated on Instagram and short-form video, not X. Current X account has 8K followers and 0.2% engagement, dead weight relative to team time spent.",
      successCriteria: [
        "Recommends exactly one primary platform, not a spread",
        "Reasoning is grounded in buyer type, not follower count alone",
        "Explicitly names which platforms to cut and why",
      ],
      portfolioReady: true,
    },
  ],
  "social-commerce": [
    {
      id: "social-commerce-shoppable-setup-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Empty Shelf: Teardown of a Broken Shoppable Setup",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a synthetic but realistic TikTok Shop and Instagram Shop setup for a meal-kit brand, identify the defects that will keep the shop from generating sales despite a fully uploaded catalog.",
      companyId: "hellofresh",
      scenario: "You're auditing a newly-launched social storefront for a HelloFresh-style meal-kit spinoff brand before the team spends any ad budget promoting it.",
      brief: "The catalog is live and tags are added, but the team suspects the setup itself has gaps. Find the defects using the lesson's setup checklist and 'affiliate before paid' guidance.",
      mode: "teardown",
      conceptsCovered: ["Auditing a shoppable setup against the lesson's checklist", "Sequencing affiliate before paid creator collaborations"],
      teardownItems: [
        {
          itemId: "item-1-storefront-setup",
          specimen: "SOCIAL STOREFRONT SETUP NOTES, meal-kit spinoff brand\n\nTikTok Shop: seller.tiktok.com account verified 3 weeks ago. Full 40-SKU catalog uploaded and live. Affiliate marketplace listing: not yet created, team was 'still deciding on commission rate.' Commission rate field: blank. Product videos posted to the brand's own TikTok account in the last 30 days: 0. Shop Ads: none running yet, 'waiting until we have some organic traction first.'\n\nInstagram Shop: catalog connected via Meta Commerce Manager, synced with TikTok Shop's product list. Checkout status for the account's home market: not yet enabled, region eligibility was never checked before launch. Product tags added to 6 static feed posts over the past month, 0 Reels tagged.\n\nGeneral: the team's internal launch doc says 'we've done the hard part, the catalog is live, sales should start coming in.'",
          specimenSource: "synthetic-realistic",
          prompt: "Read the setup notes. List every defect that will prevent this storefront from generating sales, using the lesson's setup and creator-partnership guidance, and rank them by severity.",
          answerKey: [
            { defect: "No affiliate marketplace listing and no commission rate set, despite the lesson's explicit guidance to start with the affiliate program before paid collabs", severity: "critical", whyItMatters: "Without a marketplace listing, no creator can discover or request the product, so the cheapest, zero-upfront-cost distribution channel is completely unused.", lessonRef: "Creator Partnerships: Three Models", owner: "you" },
            { defect: "Zero product videos posted in 30 days despite a fully live catalog and product tags", severity: "critical", whyItMatters: "The lesson states directly that a shop without content is a shelf in an empty mall; product tags with no video driving traffic to them will not convert.", lessonRef: "Setting Up Your Shop", owner: "you" },
            { defect: "Instagram Checkout region eligibility was never verified before launch", severity: "moderate", whyItMatters: "If checkout isn't enabled for the home market, tagged products may show pricing but block the actual purchase step, silently capping conversion regardless of traffic.", lessonRef: "Setting Up Your Shop", owner: "developer" },
            { defect: "All 6 Instagram product tags are on static feed posts, none on Reels", severity: "moderate", whyItMatters: "Impulse buying is triggered by video; static posts skip the format that actually drives social commerce conversion.", lessonRef: "Why Social Commerce Converts", owner: "you" },
          ],
          distractors: [
            "The catalog has 40 SKUs instead of a rounder number like 50",
            "The brand's TikTok Shop account was verified 3 weeks ago instead of on launch day",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "TikTok Shop for Business", role: "Reference the affiliate marketplace and commission-rate setup this specimen is missing", why: "Free seller center, shows exactly what a completed listing requires", required: true, lastVerified: "2026-08" },
          { toolName: "Meta Commerce Manager", role: "Check checkout region eligibility and catalog sync status", why: "Free, the actual tool the specimen's Instagram Shop was set up through", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A ranked defect list (critical/moderate/cosmetic) with the specific fix and lesson section backing each one.",
      sampleOutput: "Flipkart storefront teardown (excerpt)\n\nCRITICAL: No creators listed in the affiliate marketplace 6 weeks post-launch. Fix: publish a listing with a 12% commission rate this week.\nCRITICAL: Product catalog synced but zero Reels tagged. Fix: tag the 3 existing top-performing organic Reels today, no new content needed.\nMODERATE: Checkout unverified for two of five target markets. Fix: confirm eligibility in Commerce Manager before running any paid traffic to those markets.",
      successCriteria: [
        "Identifies the missing affiliate marketplace listing as the top defect, not a secondary one",
        "Correctly flags the zero-video-content problem separately from the catalog-upload step",
        "Does not flag either distractor as a real defect",
      ],
      portfolioReady: true,
    },
    {
      id: "social-commerce-affiliate-brief-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Affiliate Creator Brief for a New Product Launch",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Build a one-page affiliate creator brief and commission structure for a new product category launch, following the lesson's 'start with affiliate' sequencing before any paid collaboration budget is spent.",
      companyId: "flipkart",
      scenario: "You're the marketing analyst at Flipkart launching a new private-label home goods line and need creators live on the affiliate marketplace before the category's launch week.",
      brief: "Using the lesson's three creator-partnership models, build the brief and commission structure for the affiliate stage only, the model that gets creators onboarded with zero upfront cost.",
      mode: "build",
      conceptsCovered: ["Starting with the affiliate model before paid collaborations"],
      steps: [
        {
          stepId: "step-1-build-affiliate-brief",
          concept: "Starting with the affiliate model before paid collaborations",
          lessonAnchor: "creator-partnerships-three-models",
          theoryRecap: "The lesson's Creator Partnerships section recommends starting with affiliate (commission-based, zero upfront cost) to let performance decide who to invest in further, then graduating top performers to paid collaborations.",
          question: "What does a complete affiliate brief need to contain so a creator can say yes and start posting the same day, without a back-and-forth on commission or product access?",
          toolName: "Google Sheets",
          where: "A single-tab brief template listing product details, commission rate, sample-request process, and content guidelines.",
          procedure: [
            "State the commission rate as a specific number within the 10-20% standard range, never 'negotiable'",
            "List exactly what the creator receives: free sample, product specs, 2-3 approved talking points",
            "Set a clear performance bar for graduating to a paid collaboration, e.g. 3+ tracked sales in 30 days",
            "Specify what NOT to say, matching brand positioning guidelines, without scripting the whole video",
          ],
          outputSample: "AFFILIATE BRIEF, Home Goods Launch\n\nCommission: 15% per tracked sale, first 90 days\nWhat you get: 1 free sample unit, product spec sheet, unique tracking link\nContent freedom: your format, your voice; do show the product in actual use\nDo not: claim it as 'India's #1' (unverified), do not compare directly to named competitors\nGraduation bar: 3+ tracked sales in 30 days moves you to a paid collab offer",
          healthy: "A creator can read the brief once and start posting the same day with no follow-up questions about pay or product access.",
          unhealthy: "A brief that says 'commission negotiable' or omits the sample-request process, creating friction before the creator ever posts.",
          interpret: "Specificity is what makes the zero-upfront-cost affiliate model actually low-friction; vague briefs recreate the cost of a paid collab in negotiation time.",
          soWhat: [
            { symptom: "Creators are ghosting the brief instead of posting", action: "Replace any negotiable field (commission, sample process) with a fixed number or process", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Draft and format the affiliate brief template", why: "Free, easy to turn into a shareable one-pager", required: true, lastVerified: "2026-08" },
          { toolName: "TikTok Shop for Business", role: "Publish the resulting brief and commission rate to the live affiliate marketplace", why: "The actual destination the brief needs to match once creators start requesting samples", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page affiliate creator brief with a fixed commission rate, sample-request process, content guidelines, and a graduation bar to paid collaboration.",
      sampleOutput: "HelloFresh, affiliate brief excerpt for a new recipe-box tier\n\nCommission: 18% per tracked sale, first 60 days\nWhat you get: 1 free box, ingredient sourcing one-pager, unique promo code\nGraduation bar: 5+ tracked codes redeemed in 30 days moves you to a paid collab",
      successCriteria: [
        "Commission rate is a fixed number within the 10-20% standard range, not left open",
        "Includes a specific graduation bar for moving a creator from affiliate to paid collaboration",
        "Brief is short enough a creator can act on it without follow-up questions",
      ],
      portfolioReady: true,
    },
  ],

  "instagram-algorithm-2026": [
    {
      id: "instagram-algorithm-2026-format-performance-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Budget Call: Auditing an Instagram Format-Performance Export",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 20-post Instagram export mixing single images, carousels, and Reels with reach, saves, sends, and engagement rate, classify posts by format and recommend where next quarter's content budget should go.",
      companyId: "instacart",
      scenario:
        "You're the social media analyst at Instacart, the on-demand grocery delivery marketplace. You've pulled a 20-post export covering the last quarter and have one quarter's content production budget to allocate across formats.",
      brief:
        "Sort by format, compute engagement rate per post, and flag which format is the losing bet before a single new post gets briefed.",
      mode: "diagnostic",
      conceptsCovered: ["Classifying posts by format performance signals before allocating content budget"],
      steps: [
        {
          stepId: "step-1-format-performance-classification",
          concept: "Classifying posts by format performance signals before allocating content budget",
          lessonAnchor: "format-performance-why-single-images-are-dying",
          theoryRecap:
            "The lesson's format-performance data shows single images down double digits year-over-year on reach, interactions, and engagement rate, while carousels and Reels have split the format landscape between them.",
          question:
            "13 carousel rows, 5 Reel rows, 2 single-image rows in the export. Reach, saves, and sends-per-reach all trail on the single-image rows. Where does next quarter's budget go?",
          toolName: "Google Sheets",
          where: "Import the export, freeze the header row, add a computed `engagement_rate` column.",
          procedure: [
            "Import and freeze row 1",
            "Add a formula column: engagement_rate = (likes + comments + saves + shares) / reach",
            "Sort descending by engagement_rate, then group by the `format` column",
            "Compute the median engagement_rate per format group",
            "Flag any single-image row scoring below the carousel median",
          ],
          outputSample:
            "FORMAT MEDIANS (20 posts)\n  Carousel (13 rows): 0.51% engagement, 9.2 avg saves\n  Reel (5 rows): 0.47% engagement, 3.1 avg saves\n  Single image (2 rows): 0.31% engagement, 1.0 avg saves\n\nFLAGGED\n  Post #14 (single image, produce recipe card): 0.22% engagement, below every carousel row",
          healthy: "Budget shifts toward carousels and Reels; single-image posts get reserved only for time-sensitive announcements.",
          unhealthy: "Continuing to brief single-image posts at the same rate as carousels because 'that's what we've always made'.",
          interpret:
            "Format is the first filter, not caption quality; a well-written caption cannot fix a format the algorithm structurally under-serves.",
          soWhat: [
            {
              symptom: "Content calendar still has single images as the default weekly post",
              action: "Convert the weekly single-image slot to a 4-6 slide carousel using the same source asset",
              effort: "30 min",
            },
            {
              symptom: "No one has checked whether Reels or carousels lead on saves this quarter",
              action: "Add the engagement_rate formula column to the standing weekly reporting sheet",
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
            role: "Import the export, compute engagement rate, and group by format",
            why: "No account friction, handles a 20-row export without any paid analytics tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A format-performance scorecard ranking single image, carousel, and Reel by median engagement rate and saves, with a budget-shift recommendation for next quarter.",
      sampleOutput:
        "Adyen, Q3 Instagram format scorecard (excerpt)\n\nCAROUSEL, 13 posts\n  Median engagement: 0.51% | Median saves: 9.2\n  Recommendation: increase to 3x/week\n\nREEL, 5 posts\n  Median engagement: 0.47% | Median saves: 3.1\n  Recommendation: hold at 2x/week, strongest on reach\n\nSINGLE IMAGE, 2 posts\n  Median engagement: 0.31% | Median saves: 1.0\n  Recommendation: reserve for same-day announcements only",
      successCriteria: [
        "Correctly groups all 20 rows by format and computes a median engagement rate per group",
        "Flags the underperforming single-image row(s) by name, not just by format average",
        "Recommendation ties a specific budget shift to the data, not a generic 'do more video' statement",
      ],
      portfolioReady: true,
    },
    {
      id: "instagram-algorithm-2026-send-test-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Send Test: Teardown of Three Instagram Captions",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three synthetic-realistic Instagram post specimens (a Reel script, a carousel caption, and a hashtag-heavy caption), identify the structural defects that would sink sends-per-reach, hashtag relevance, and caption front-loading, and separate them from plausible-looking non-defects.",
      companyId: "coinbase",
      scenario:
        "You're reviewing draft Instagram content for Coinbase's consumer app team before it gets scheduled. Three drafts got flagged in standup as 'feels off' but nobody could say exactly why.",
      brief:
        "Score each specimen against the lesson's sends, hashtag, and caption rules. Distinguish a real defect from a stylistic choice that just looks unusual.",
      mode: "teardown",
      conceptsCovered: [
        "Designing for Sends, Not Comments",
        "Hashtags: A Hard Cap, Not a Guideline",
        "Reels: The 8.5-Second Reality",
      ],
      teardownItems: [
        {
          itemId: "specimen-1-comment-bait-reel",
          specimen:
            "Reel caption: 'What would YOU check first when auditing a website? Comment below and let's discuss! 👇 #digitalmarketing #seo #marketing #socialmediamarketing #contentcreator #smallbusiness #entrepreneur #marketingtips #growthhacking #onlinemarketing #digitalstrategy #brandbuilding #marketingagency #contentstrategy #socialmediatips'",
          specimenSource: "synthetic-realistic",
          prompt: "Score this Reel caption against the lesson's sends and hashtag rules. List every defect you find, ranked by severity.",
          answerKey: [
            {
              defect: "CTA is a comment-bait question ported directly from a comment-optimized platform, with no forwardable claim anywhere in the caption",
              severity: "critical",
              whyItMatters: "Instagram ranks on sends-per-reach and watch time, not comments; this caption is optimized for the wrong signal entirely",
              lessonRef: "Designing for Sends, Not Comments",
              owner: "you",
            },
            {
              defect: "15 hashtags, three times the platform's 5-hashtag cap",
              severity: "moderate",
              whyItMatters: "The cap is a hard product constraint, not a guideline; posts this far over it read as an outdated 2020-era strategy",
              lessonRef: "Hashtags: A Hard Cap, Not a Guideline",
              owner: "you",
            },
            {
              defect: "None of the hashtags are topically specific; all are broad category tags",
              severity: "cosmetic",
              whyItMatters: "Broad hashtag use correlates with smaller, lower-quality accounts and does nothing for search relevance",
              lessonRef: "Hashtags: A Hard Cap, Not a Guideline",
              owner: "you",
            },
          ],
          distractors: [
            "Caption uses an emoji (👇) — not a defect, emojis don't affect ranking signals",
            "Caption is written in first person — not a defect, tone is a stylistic choice",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-carousel-continuation-slide",
          specimen:
            "Carousel, slide 1: 'Our biggest audit finding this month.' Slide 2: '...and it's about crawl budget, which we mentioned yesterday.' Slides 3-5: three data points, one per slide. Slide 6: caption ends with no closing line.",
          specimenSource: "synthetic-realistic",
          prompt: "This carousel has a structural design flaw independent of its content quality. Find it, and note anything else worth flagging.",
          answerKey: [
            {
              defect: "Slide 2 reads as a continuation of slide 1 ('...and it's about') and references content outside the carousel ('mentioned yesterday'), so it fails as a standalone second cover",
              severity: "critical",
              whyItMatters:
                "The platform re-serves unswiped carousels as new content later; for many viewers slide 2 is the first slide they ever see, and this one is meaningless without slide 1",
              lessonRef: "Carousels: The Save-Optimized Format",
              owner: "you",
            },
            {
              defect: "Final slide has no save-or-share prompt",
              severity: "moderate",
              whyItMatters: "Carousels are strongest specifically at saves and shares; ending without a prompt leaves that signal on the table",
              lessonRef: "Carousels: The Save-Optimized Format",
              owner: "you",
            },
          ],
          distractors: [
            "Carousel has exactly 6 slides — not a defect, slide count itself isn't a ranking factor",
            "Data points are one per slide — this is correct structure, not a flaw",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-multi-topic-reel-script",
          specimen:
            "Reel script: 0:00-0:04 'Hey guys, welcome back to the channel, today we're covering something big.' 0:04-0:12 topic A (budget). 0:12-0:20 topic B (bidding). 0:20-0:28 topic C (creative). Caption includes a raw link: 'Full guide here: https://example.com/guide'",
          specimenSource: "synthetic-realistic",
          prompt: "Average watch time on Reels is under 10 seconds. Evaluate whether this script's structure fits that reality.",
          answerKey: [
            {
              defect: "First 4 seconds are generic scene-setting ('welcome back to the channel') instead of a concrete hook stated on screen and spoken simultaneously",
              severity: "critical",
              whyItMatters: "With average watch time under 10 seconds, the hook has to land in the first 1-3 seconds; this script burns nearly half the available window on nothing",
              lessonRef: "Reels: The 8.5-Second Reality",
              owner: "you",
            },
            {
              defect: "Three separate topics (budget, bidding, creative) crammed into one Reel instead of one idea",
              severity: "moderate",
              whyItMatters: "A reliable Reel structure delivers substance in 2-3 beats maximum on a single idea, not a multi-topic dump",
              lessonRef: "Reels: The 8.5-Second Reality",
              owner: "you",
            },
            {
              defect: "Caption links out to an external URL as the primary CTA",
              severity: "cosmetic",
              whyItMatters: "Links aren't clickable in most native caption placements; a save-or-share CTA is the correct final beat instead",
              lessonRef: "Reels: The 8.5-Second Reality",
              owner: "you",
            },
          ],
          distractors: [
            "Script has three timestamped sections — timestamping itself isn't a defect, only what's crammed inside them is",
            "Caption is under 30 words — this is correct per the caption-length guidance, not a flaw",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each specimen's defects, severity, and a one-line fix",
            why: "No account friction, sufficient for a 3-row teardown log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored teardown log covering all three specimens, each defect tagged by severity, plus one rewritten line per specimen that fixes its critical defect.",
      sampleOutput:
        "Snowflake teardown log (excerpt)\n\nSPECIMEN 1, Reel caption\n  CRITICAL: comment-bait CTA, no forwardable line\n  FIX: 'The one crawl-budget check most audits skip, save this before your next one.'\n  MODERATE: 15 hashtags (cap is 5)\n\nSPECIMEN 3, Reel script\n  CRITICAL: 4-second generic intro before the hook\n  FIX: open on-screen at 0:00 with 'Your crawl budget is being wasted on pages Google will never rank.'",
      successCriteria: [
        "Identifies the critical defect in all three specimens without prompting",
        "Correctly separates at least 4 of the 6 distractors from real defects",
        "Each proposed fix ties directly to the lesson's sends, hashtag, or Reel-structure rule it violates",
      ],
      portfolioReady: true,
    },
  ],
  "linkedin-algorithm-2026": [
    {
      id: "linkedin-algorithm-2026-length-band-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Length Call: Auditing a LinkedIn Post-Performance Export",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 20-post LinkedIn export with character count, impressions, and engagement rate, classify posts into character-length bands and recommend a target band for next quarter's posting.",
      companyId: "wise",
      scenario:
        "You're the content lead at Wise, the cross-border money transfer company, reviewing last quarter's LinkedIn company-page posts before setting next quarter's length guidance for the team.",
      brief:
        "Bucket every post by character-length band, compute median impressions per band, and settle the 'how long should our posts be' debate with the export instead of an opinion.",
      mode: "diagnostic",
      conceptsCovered: ["Classifying posts by character-length band before judging performance"],
      steps: [
        {
          stepId: "step-1-length-band-classification",
          concept: "Classifying posts by character-length band before judging performance",
          lessonAnchor: "length-the-rule-actually-changed",
          theoryRecap:
            "Three independent 2026 studies agree engagement rises with length up to roughly 2,500 characters, well past the old 800-1,000 character guidance.",
          question:
            "The export has posts ranging from 180 to 2,700 characters. Which length band should the team standardize on next quarter?",
          toolName: "Google Sheets",
          where: "Import the export, freeze the header row, add a computed `length_band` column.",
          procedure: [
            "Import and freeze row 1",
            "Add a formula column: length_band = IF(char_count<400,'under 400', IF(char_count<=1300,'400-1300', IF(char_count<=2500,'1301-2500','over 2500')))",
            "Sort by length_band, then compute median impressions per band",
            "Cross-check whether the top band also carries the top median engagement rate, not just impressions",
          ],
          outputSample:
            "LENGTH BAND MEDIANS (20 posts)\n  Under 400 chars (6 rows): 2,100 median impressions\n  400-1,300 chars (8 rows): 3,400 median impressions\n  1,301-2,500 chars (5 rows): 4,950 median impressions\n  Over 2,500 chars (1 row): 3,600 median impressions",
          healthy: "The 1,301-2,500 band leads on both impressions and engagement rate, so next quarter's guidance targets that band.",
          unhealthy: "Standardizing on 'keep it short' because that's the inherited house style, with no export ever checked.",
          interpret:
            "Length is a distribution lever with real ceiling data behind it now, not a stylistic preference to default to the shortest option.",
          soWhat: [
            {
              symptom: "Team keeps posts under 400 characters out of habit",
              action: "Set 1,300-1,900 characters as the target band in the posting brief template",
              effort: "30 min",
            },
            {
              symptom: "No one tracks length band against impressions in the standing report",
              action: "Add the length_band formula column to the recurring weekly export",
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
            role: "Bucket posts by length band and compute median impressions per band",
            why: "No account friction, handles a 20-row export without a paid analytics tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A length-band scorecard showing median impressions and engagement rate per band, with a recommended target band for next quarter's posting brief.",
      sampleOutput:
        "Coinbase, Q3 LinkedIn length-band scorecard (excerpt)\n\n1,301-2,500 CHARACTERS, 5 posts\n  Median impressions: 4,950 | Median engagement: 2.6%\n  Recommendation: standardize flagship posts in this band\n\nUNDER 400 CHARACTERS, 6 posts\n  Median impressions: 2,100 | Median engagement: 1.4%\n  Recommendation: reserve for quick announcements only",
      successCriteria: [
        "Correctly buckets all 20 rows into the four length bands",
        "Computes median impressions per band, not just an average across all posts",
        "Recommendation names a specific target band tied to the data",
      ],
      portfolioReady: true,
    },
    {
      id: "linkedin-algorithm-2026-reach-killer-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Reach Killer: Teardown of Three LinkedIn Posts",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given three synthetic-realistic LinkedIn post specimens, identify the structural defects that would cost reach under the platform's link-card, hashtag, and hook-truncation rules, and separate them from plausible-looking non-defects.",
      companyId: "snowflake",
      scenario:
        "You're reviewing three draft LinkedIn posts for Snowflake's marketing team before they get scheduled. Impressions have been sliding and nobody has isolated why.",
      brief:
        "Score each specimen against the lesson's link, hashtag, and hook rules. Distinguish a real reach-killing defect from a stylistic choice that just reads unusually.",
      mode: "teardown",
      conceptsCovered: [
        "Links: The Preview Card Is the Penalty, Not the Link",
        "Hashtags Stopped Mattering, and That's Not an Accident",
        "The Hook: 140 Characters Is the Real Constraint",
      ],
      teardownItems: [
        {
          itemId: "specimen-1-attached-preview-card",
          specimen:
            "Post body: 'New research on data warehouse migration costs, full report linked below.' Pasted directly into the compose box: https://example.com/report, which auto-generated a large image preview card that LinkedIn attached to the post before publishing.",
          specimenSource: "synthetic-realistic",
          prompt: "This post pastes a link the ordinary way. Identify the reach cost this creates and how to avoid it.",
          answerKey: [
            {
              defect: "The pasted link auto-generated an attached preview card, which was never removed before publishing",
              severity: "critical",
              whyItMatters:
                "A 566,957-post analysis found attached preview cards cut median impressions by roughly 47% versus a plain URL in the body, which shows no measurable penalty",
              lessonRef: "Links: The Preview Card Is the Penalty, Not the Link",
              owner: "you",
            },
          ],
          distractors: [
            "The post includes a link at all — not the defect; a plain URL in the body carries no penalty",
            "The link points to an external domain — not the defect; external vs. internal doesn't drive the penalty, the card does",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-2-hashtag-stuffed-post",
          specimen:
            "Post ends with: '#data #cloud #saas #enterprise #b2b #analytics #tech #innovation #digitaltransformation #cloudcomputing #datawarehouse #bigdata'",
          specimenSource: "synthetic-realistic",
          prompt: "Twelve hashtags, placed correctly at the end after a line break. Is that enough to call this clean?",
          answerKey: [
            {
              defect: "12 hashtags, four times the current 2-3 recommendation and approaching the 10+ spam threshold",
              severity: "moderate",
              whyItMatters:
                "LinkedIn removed hashtag following and profile display; the feed now ranks on semantic meaning, so hashtag volume this high reads as spam to the platform's own systems rather than helping reach",
              lessonRef: "Hashtags Stopped Mattering, and That's Not an Accident",
              owner: "you",
            },
          ],
          distractors: [
            "Hashtags are placed at the end after a line break — this is correct placement, not the defect",
            "Hashtags are all topically related to the post — relevance doesn't offset the volume problem here",
          ],
          partialCredit: true,
        },
        {
          itemId: "specimen-3-buried-hook",
          specimen:
            "Post opens: 'Today I wanted to take a moment to share some thoughts on something that's been on my mind lately as we think about how our industry continues to evolve in interesting ways, particularly around...' (the actual claim doesn't appear until character 260)",
          specimenSource: "synthetic-realistic",
          prompt: "LinkedIn truncates at roughly 140 characters on mobile. Evaluate whether this opening survives that truncation.",
          answerKey: [
            {
              defect: "The concrete claim doesn't appear until character 260, well past the ~140-character mobile truncation point, so the visible preview shows only throat-clearing",
              severity: "critical",
              whyItMatters:
                "The entire 'will they click to expand' decision happens inside that first 140-character window; a hook that names no stake there gets scrolled past regardless of what follows",
              lessonRef: "The Hook: 140 Characters Is the Real Constraint",
              owner: "you",
            },
          ],
          distractors: [
            "The post is written in first person ('I wanted to share') — not the defect; first person is a stylistic choice",
            "The sentence is long — length alone isn't the defect, the absence of a concrete stake inside the truncation window is",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each specimen's defects, severity, and a one-line fix",
            why: "No account friction, sufficient for a 3-row teardown log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored teardown log covering all three specimens, each defect tagged by severity, plus one rewritten opening line or hashtag set that fixes its critical defect.",
      sampleOutput:
        "Adyen teardown log (excerpt)\n\nSPECIMEN 1, link post\n  CRITICAL: attached preview card, ~47% reach cost\n  FIX: remove the card, keep the plain URL in the body\n\nSPECIMEN 3, buried hook\n  CRITICAL: stake doesn't appear until character 260\n  FIX: open with 'Migrating a warehouse costs more in query rewrites than in compute, here's the breakdown.'",
      successCriteria: [
        "Identifies the critical defect in all three specimens without prompting",
        "Correctly separates at least 4 of the 6 distractors from real defects",
        "Each proposed fix ties directly to the lesson's link, hashtag, or hook-truncation rule it violates",
      ],
      portfolioReady: true,
    },
  ],

  "linkedin-post-anatomy": [
    {
      id: "linkedin-post-anatomy-draft-post-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Anatomy Check: Diagnosing Three Draft LinkedIn Posts",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three synthetic draft LinkedIn posts, apply the seven-part anatomy framework to name the single biggest structural defect in each, and defend the fix using the framework's own logic rather than a style preference.",
      companyId: "thredup",
      scenario:
        "You're a contract social ghostwriter for ThredUp, the online secondhand and resale apparel marketplace, reviewing three drafts a category manager wrote before they go out this week.",
      brief:
        "Score each draft against the seven-part anatomy. Flag the one structural defect per post that would most hurt performance, not every stylistic nitpick you notice.",
      mode: "teardown",
      conceptsCovered: [
        "Part 1: The Hook (Up to ~140 Characters)",
        "Part 7: The Close (Call to Comment)",
        "Part 5: The Analogy (Mandatory Device)",
      ],
      teardownItems: [
        {
          itemId: "draft-1-listicle-hook",
          specimenSource: "synthetic-realistic",
          specimen:
            "Here are 3 things every resale brand gets wrong about product photography.\n\n1. Bad lighting kills perceived quality\n2. Inconsistent backgrounds break trust\n3. No size reference confuses buyers\n\nWe fixed all three at our last shoot and cut return requests noticeably.\n\nWhat's your biggest photo mistake?",
          prompt:
            "This draft has one dominant structural defect. Which single part of the anatomy is broken, and what's the fastest fix that doesn't require rewriting the whole post?",
          answerKey: [
            {
              defect:
                "The hook is a table of contents ('3 things...'), not a stake. It promises information but names no consequence, so there's no reason to click 'see more.'",
              severity: "critical",
              whyItMatters:
                "The lesson's Part 1 is explicit: a hook that already tells the reader what's coming removes the only reason to expand the post.",
              lessonRef: "Part 1: The Hook (Up to ~140 Characters)",
              owner: "you",
            },
            {
              defect:
                "The closing question ('What's your biggest photo mistake?') is generic and doesn't pass the stranger-usefulness test, it invites a shallow one-word answer.",
              severity: "moderate",
              whyItMatters:
                "Part 7 requires a question a competent stranger has a specific, comparable answer to; this one just prompts confession, not information exchange.",
              lessonRef: "Part 7: The Close (Call to Comment)",
              owner: "you",
            },
          ],
          distractors: [
            "The post uses a numbered list for the body, that's a legitimate framework-body format, not a defect.",
            "The post is under 100 words, brevity alone isn't a structural problem here.",
          ],
          partialCredit: true,
        },
        {
          itemId: "draft-2-payoff-in-hook",
          specimenSource: "synthetic-realistic",
          specimen:
            "The real reason resale listings underperform: sellers describe condition, not desirability.\n\nI've reviewed hundreds of underperforming listings, and the pattern is always the same, a factual condition line where a desirability line should be.\n\nFix it by leading with what the piece lets someone become, not what state it's in.\n\nDo you write for condition or for desire?",
          prompt:
            "This draft names a real insight early. Where exactly does the anatomy break, and why does that specific placement matter more than it would elsewhere in the post?",
          answerKey: [
            {
              defect:
                "The hook already contains the payoff ('sellers describe condition, not desirability'), so the fix is answered before the framework body even starts. There's no reason left to read on.",
              severity: "critical",
              whyItMatters:
                "The lesson's own warning callout under Part 1 is direct: if the hook already answers the question, there's no reason to expand the post, the hook's job is to sell the click, not deliver the value.",
              lessonRef: "Part 1: The Hook (Up to ~140 Characters)",
              owner: "you",
            },
            {
              defect:
                "There is no analogy or reframe anywhere in the post, both mandatory devices are simply absent.",
              severity: "moderate",
              whyItMatters:
                "Part 5 and Part 6 are the two devices most likely to make a post memorable and screenshot-able; skipping both means the insight has nothing to make it stick.",
              lessonRef: "Part 5: The Analogy (Mandatory Device)",
              owner: "you",
            },
          ],
          distractors: [
            "The credibility line references reviewing 'hundreds of listings' without naming a specific tool, that's a real weak point but not the dominant defect here.",
            "The post ends on a question, closing on a question is correct structure, not a defect on its own.",
          ],
          partialCredit: true,
        },
        {
          itemId: "draft-3-missing-reframe",
          specimenSource: "synthetic-realistic",
          specimen:
            "Most sellers spend their listing time perfecting the title.\n\nI used to do the same, until a batch of near-identical titles returned wildly different sell-through rates.\n\nSo I started tracking one variable at a time: photo count, price anchor, description length, category tags.\n\nPhoto count moved sell-through more than any other single change, from 3 photos to 7 photos lifted it by roughly a third.\n\nAdd photos before you touch your title copy again.",
          prompt:
            "The hook, re-hook, and evidence here are all genuinely strong. What's still missing, and why does its absence cap how memorable this post can be even though nothing in it is factually wrong?",
          answerKey: [
            {
              defect:
                "No analogy and no reframe. The post delivers a real finding but never compresses it into a physical image or swaps the reader's underlying question, so it reads as a data point rather than a point of view.",
              severity: "moderate",
              whyItMatters:
                "Parts 5 and 6 are what turn 'here's a fact I found' into 'here's how I now think about this problem', the difference between information and insight the lesson calls out directly.",
              lessonRef: "Part 6: The Reframe (Mandatory Device)",
              owner: "you",
            },
            {
              defect:
                "The close is a command ('Add photos before you touch your title copy again'), not a question, so it forfeits the comment-driving mechanism entirely.",
              severity: "moderate",
              whyItMatters:
                "Part 7 exists specifically to invite a specific, comparable answer; a command closes the conversation instead of opening it.",
              lessonRef: "Part 7: The Close (Call to Comment)",
              owner: "you",
            },
          ],
          distractors: [
            "The post names a specific numeric result (roughly a third), that's a strength per the credibility guidance, not a defect.",
            "The re-hook describes a personal, lived failure, that's exactly what Part 2 asks for, not a problem.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Read and annotate each draft inline before scoring it",
            why: "Free, comment threads make defect-flagging visible and easy to review with a client",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Score each draft's seven parts present/missing/broken in a simple grid",
            why: "Free, turns a subjective read into a comparable scorecard across all three drafts",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed scorecard for all three drafts (seven parts x present/missing/broken) plus, for each draft, the one defect that most hurts performance and a one-line fix.",
      sampleOutput:
        "Rent the Runway draft, teardown notes (excerpt)\n\nDraft: 'Here are 4 reasons your closet needs a refresh this season.'\nDominant defect: Hook is a table of contents, names no stake.\nFix: 'The closet mistake that makes every outfit look five years old, even the new pieces.'\n\nDraft: 'The dress that changed how we think about occasion-wear rental: comfort, not just the photo.'\nDominant defect: Payoff is already in the hook, nothing left to click for.\nFix: Hold the insight, open instead with the specific member complaint that led to it.",
      successCriteria: [
        "Correctly identifies the dominant defect in all three drafts, not just a plausible-sounding one",
        "Distinguishes a real structural defect from a stylistic nitpick using the distractors as a check",
        "Proposes a fix grounded in the specific anatomy part that's broken, not a generic rewrite",
      ],
      portfolioReady: true,
    },
    {
      id: "linkedin-post-anatomy-full-post-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Ship It: Building One Post With the Full Seven-Part Anatomy",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real product fact pattern for a DTC eyewear brand, draft one complete LinkedIn post that uses all seven anatomy parts in the correct order, and be able to explain why the reframe changes the question rather than just restating the framework.",
      companyId: "warby-parker",
      scenario:
        "You're the freelance LinkedIn ghostwriter for Warby Parker's VP of Retail, who wants one post about why in-store try-on still matters in an online-first eyewear market.",
      brief:
        "Build the post part by part, in order. The analogy and reframe are mandatory, not optional flourishes, skipping either one is a failed deliverable.",
      mode: "build",
      conceptsCovered: [
        "The hook must name a stake, not a topic, in roughly 140 characters",
        "The analogy and reframe are mandatory devices, never optional",
      ],
      steps: [
        {
          stepId: "step-1-hook-rehook-credibility",
          concept: "The hook must name a stake, not a topic, in roughly 140 characters",
          lessonAnchor: "part-1-the-hook-up-to-140-characters",
          theoryRecap:
            "The lesson's Part 1 requires the hook to state what the reader loses or gets wrong if they scroll past, standalone, with no prior context assumed. Parts 2 and 3 then make that claim concrete and credible before the framework starts.",
          question:
            "Given the fact pattern (in-store try-on customers return 40% fewer pairs than online-only buyers), what's a hook that names the stake without giving away the fix?",
          toolName: "Google Docs",
          where: "A blank Google Doc, drafted as three separate labeled lines before combining them",
          procedure: [
            "Write the hook as a single sentence naming the cost of ignoring in-store try-on, not the topic of try-on itself",
            "Write a re-hook line naming one specific, lived failure (a real return-reason pattern) that makes the hook's stake concrete",
            "Write a credibility line naming the actual data source used (a specific returns dataset, not just 'our data')",
            "Read all three back to back and confirm the hook alone, with zero context, still makes sense to a stranger",
          ],
          outputSample:
            "HOOK: The pair you never touch before buying is the pair most likely to come back.\nRE-HOOK: We pulled a year of returns and the pattern was blunt, online-only buyers returned pairs at nearly double the rate of anyone who'd tried a frame on first.\nCREDIBILITY: That's from a 12-month return-reason dataset across every frame we sell, not a guess.",
          healthy: "The hook states a consequence a stranger can grasp with zero prior context, and the credibility line names a real data source.",
          unhealthy: "A hook like 'Let's talk about why try-on matters' names a topic, not a stake, and gives a reader no reason to keep reading.",
          interpret:
            "A topic-shaped hook and a stake-shaped hook can describe the exact same post, only one earns the click, because only one implies a cost to skipping it.",
          soWhat: [
            {
              symptom: "Hook reads like a headline for a blog post, not a LinkedIn hook",
              action: "Rewrite it as a consequence sentence: 'X costs you Y' or 'X determines whether Y'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-body-analogy-reframe-close",
          concept: "The analogy and reframe are mandatory devices, never optional",
          lessonAnchor: "part-6-the-reframe-mandatory-device",
          theoryRecap:
            "Part 4 needs a short framework body with one question per section. Part 5's analogy and Part 6's reframe are both mandatory, the analogy makes the structure memorable, the reframe swaps the reader's underlying question for a better one. Part 7 closes with a genuinely answerable question.",
          question:
            "Using the returns data from Step 1, what physical analogy makes 'try before you buy reduces returns' memorable, and what's a reframe that changes the question a reader thought they were asking?",
          toolName: "Google Docs",
          where: "Same Google Doc, continuing directly below the Step 1 draft",
          procedure: [
            "Write a 2-3 section framework body, one question per section (e.g. 'Why does fit matter more than style online?')",
            "Write one physical analogy that compresses the whole idea into a concrete image",
            "Write a reframe that swaps 'how do we sell more online?' for a sharper underlying question",
            "Close with one specific question a competent stranger would have a real answer to, never a generic 'agree?'",
          ],
          outputSample:
            "BODY: Fit isn't a preference, it's a prediction. A frame that sits right on your face predicts a keeper; a frame you're guessing on predicts a return.\n\nANALOGY: Think of it like shoe sizing, nobody buys running shoes sight unseen and expects to keep them. Eyewear works the same way, we just built an internet that pretends otherwise.\n\nREFRAME: I stopped asking 'how do we get more people to buy online?' I started asking 'how do we get more people to try on before they decide?'\n\nCLOSE: If you sell anything that touches the face, what's your actual return rate on items nobody tried on first?",
          healthy: "The analogy is a single, concrete physical image, and the reframe genuinely swaps the question rather than restating the framework in different words.",
          unhealthy: "A 'reframe' that just repeats the framework body's conclusion in slightly different phrasing isn't a reframe, it's a summary.",
          interpret:
            "A summary agrees with what the reader already believed; a reframe changes what question they think they're answering, that's the entire difference between the two.",
          soWhat: [
            {
              symptom: "Reframe sentence just restates the hook's claim",
              action: "Write out the 'obvious question' explicitly first, then write a genuinely different, sharper question next to it",
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
            role: "Draft all seven parts of the post in order before publishing",
            why: "Free, comment/suggestion mode lets a manager review the draft against the anatomy before it ships",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva for Social",
            role: "Turn the same post into a document-carousel version for higher dwell time",
            why: "Templates built specifically for LinkedIn carousel dimensions save layout time versus a generic design tool",
            required: false,
            fallback: "Publish as a plain text post first; a carousel version is an upgrade, not a requirement",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path (Google Docs, published as plain text) is a complete, publishable post on its own. Canva for Social only matters once you're repurposing the same anatomy into a carousel format.",
      },
      deliverable:
        "One complete LinkedIn post using all seven anatomy parts in order (hook, re-hook, credibility line, framework body, analogy, reframe, close), plus a one-line note on which underlying question the reframe swaps in.",
      sampleOutput:
        "Rent the Runway, sample post (excerpt)\n\nThe size you guess online is not the size you'd pick in a fitting room.\n\nWe compared exchange rates on rentals booked with a style-profile fit-check versus without one, the gap ran nearly two-to-one.\n\nThat's from a season of exchange-reason tags across every category we rent, not a hunch.\n\n...\n\nThink of it like a tailor doing one measurement before cutting fabric, skip it and you're guessing at every step after.\n\nI stopped asking 'how do we get people to commit to a size?' I started asking 'how do we get people confident enough to skip the exchange?'\n\nIf you sell sizes without a fitting room, what's your actual exchange rate look like?",
      successCriteria: [
        "All seven anatomy parts are present and in the correct order",
        "The analogy is a genuine physical image, not an abstract restatement",
        "The reframe swaps the underlying question rather than summarizing the framework body",
        "The close is a specific, answerable question, not a generic prompt",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite the same fact pattern as a Pillar 3 (Opinion) post instead, using the steelman template, and compare which structure would actually perform better for this specific audience.",
    },
  ],
  "x-twitter": [
    {
      id: "x-twitter-cadence-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Cadence Audit: Scoring a Week of Posts Against the 70/20/10 Rule",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real week's posting log for a B2B SaaS X account, classify every post by format, calculate the actual content mix against the 70/20/10 rule, and flag every post that breaks the no-link-in-the-main-post rule.",
      companyId: "mailchimp",
      scenario:
        "You're auditing the X account for a secondary product line at Mailchimp before next week's content calendar gets locked in.",
      brief:
        "Classify each of the 12 posts by format (text-only, multimedia, quote/reply), calculate the real mix, and find the fastest single fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "The 70/20/10 content mix",
        "Links in the main post suppress reach",
      ],
      steps: [
        {
          stepId: "step-1-classify-and-calculate-mix",
          concept: "The 70/20/10 content mix",
          lessonAnchor: "step-2-content-mix-the-702010-rule-for-x",
          theoryRecap:
            "The lesson's Step 2 sets a target mix of 70% text-only posts, 20% multimedia (short video, charts, screenshots), and 10% quote-posts or replies as original content.",
          question:
            "Of 12 posts logged this week (7 text-only, 1 short video, 1 screenshot, 2 link posts, 1 quote-post), what's the actual mix in percentages, and which category is furthest off target?",
          toolName: "Google Sheets",
          where: "Import the 12-row posting log, add a 'format' column",
          procedure: [
            "Tag each row: text-only, multimedia, or quote/reply-as-content",
            "Note that the 2 link posts don't fit any of the three categories at all, since link posts aren't part of the 70/20/10 mix",
            "Calculate the percentage for each of the three legitimate categories out of the 10 posts that do fit the framework",
            "Compare against the 70/20/10 target and flag the largest gap",
          ],
          outputSample:
            "10 posts fit the framework (2 link posts excluded, see Step 2):\nText-only: 7/10 = 70% (on target)\nMultimedia: 2/10 = 20% (on target)\nQuote/reply-as-content: 1/10 = 10% (on target)\n\nThe format mix is actually healthy. The real problem is the 2 posts that don't belong in any category.",
          healthy: "The three legitimate categories land close to 70/20/10, and any posts outside the framework get flagged separately rather than folded into the mix.",
          unhealthy: "Counting link posts as 'text-only' because they contain some text hides the real problem, that those posts shouldn't exist in this format at all.",
          interpret:
            "A healthy-looking content mix can still hide a structural problem if the wrong posts get folded into the wrong bucket during counting.",
          soWhat: [
            {
              symptom: "Content mix percentages look fine but engagement is still flat",
              action: "Check whether posts outside the three legitimate formats are being miscounted into the mix instead of flagged separately",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-flag-link-posts",
          concept: "Links in the main post suppress reach",
          lessonAnchor: "step-5-timing-and-cadence",
          theoryRecap:
            "The lesson's Step 5 and Common Mistakes sections both name the same rule: never post a link in the main tweet, since external links suppress reach. The fix is to post the hook alone, then add the link in the first reply.",
          question:
            "The 2 link posts both put the URL directly in the main post. What's the single fastest fix, and does it require rewriting the post copy at all?",
          toolName: "Google Sheets",
          where: "Same sheet, filter to the 2 flagged link posts",
          procedure: [
            "Confirm both flagged posts have a URL inside the main post body, not in a reply",
            "Note the fix requires no new copy, only moving the existing URL out of the main post and into a pinned first reply",
            "Estimate the impression lift using the lesson's own framing (this one change alone can double impressions on the same content)",
          ],
          outputSample:
            "Post 4 (product update): URL in main post -> move to first reply, pin it, no copy change needed.\nPost 9 (blog link): URL in main post -> same fix.\nEstimated fix effort: under 5 minutes per post, zero new writing required.",
          healthy: "Every post with a URL keeps the URL out of the main post entirely, in a pinned first reply instead.",
          unhealthy: "A post reads fine and gets engagement, but its reach is quietly capped because the algorithm suppresses any post carrying an external link.",
          interpret:
            "This is the single highest-leverage fix in the whole audit: it costs no new writing time and the lesson itself calls out that it can double impressions on unchanged content.",
          soWhat: [
            {
              symptom: "Product-update posts consistently underperform text-only posts of similar quality",
              action: "Check whether the underperforming posts carry a URL in the main post instead of the first reply",
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
            role: "Import the posting log, tag formats, and calculate the real content mix",
            why: "Free, filtering and percentage formulas are all this audit needs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed content-mix scorecard (percentages against the 70/20/10 target) plus a list of every post that breaks the no-link-in-main-post rule and its one-line fix.",
      sampleOutput:
        "MVMT posting log audit (excerpt)\n\nContent mix: 6/9 text-only (67%), 2/9 multimedia (22%), 1/9 quote-post (11%) -- close to target.\n\nFlagged: 3 posts carry a URL in the main post body.\nFix: move each URL to a pinned first reply, no copy rewrite needed, estimated to roughly double impressions on those 3 posts.",
      successCriteria: [
        "Correctly separates link posts from the three legitimate 70/20/10 categories instead of folding them in",
        "Calculates accurate percentages against the target mix",
        "Identifies the link-in-main-post issue as the fastest, lowest-effort fix",
      ],
      portfolioReady: true,
    },
    {
      id: "x-twitter-hook-body-payoff-thread-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Draft the Thread: Hook, Body, Payoff Across Four Posts",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a content brief for a DTC watch brand's new product angle, write a complete 4-post X thread using the hook/body/payoff structure per post, staying inside the text-only sweet spot and obeying the link-in-first-reply rule.",
      companyId: "mvmt-watches",
      scenario:
        "You're the freelance X ghostwriter for MVMT, briefed to launch a thread about why the brand skips traditional watch marketing entirely.",
      brief:
        "Write 4 posts, each with its own hook/body/payoff, that also work as a connected thread. Keep the main posts text-only, no images or links, and put any URL in the first reply.",
      mode: "build",
      conceptsCovered: [
        "Posting Structure: hook, body, payoff",
        "Lock In Your Niche and POV",
      ],
      steps: [
        {
          stepId: "step-1-lock-niche-and-opening-post",
          concept: "Lock In Your Niche and POV",
          lessonAnchor: "step-1-lock-in-your-niche-and-pov",
          theoryRecap:
            "The lesson's Step 1 argues a specific, contrarian angle beats a broad topic, 'marketing tips' loses, a precise stance wins, because the For You algorithm improves targeting only with a consistent topical signal.",
          question:
            "Given the brief (MVMT skips celebrity ambassadors and traditional watch-industry marketing entirely), what's a specific, contrarian angle for post 1's hook, one sentence, no more than 280 characters?",
          toolName: "Google Docs",
          where: "A blank Google Doc, four posts drafted as separate numbered blocks",
          procedure: [
            "State the contrarian angle in one sentence: what MVMT does differently, not a generic brand statement",
            "Write post 1's hook as a pattern-interrupt or bold claim, under 280 characters, no link, no image",
            "Add 2-4 lines of body evidence directly under the hook",
            "Close post 1 with a payoff, a question, contrarian conclusion, or 'save this' prompt, never a link",
          ],
          outputSample:
            "POST 1:\nHook: We've never paid a celebrity to wear our watches. Not once, in over a decade.\nBody: Every competitor's margin math includes an ambassador fee. Ours includes better materials instead. That's the entire pricing story in one sentence.\nPayoff: What's a marketing line item your industry treats as mandatory that you think is actually optional?",
          healthy: "The hook is a specific, contrarian claim, not a generic brand statement, and the whole post stays text-only with the payoff driving a reply, not a link click.",
          unhealthy: "A hook like 'We believe in quality watches for everyone' names no stance and invites no reaction, it's marketing copy, not an X post.",
          interpret:
            "A niche-specific contrarian claim gives the algorithm a clear topical signal and gives a stranger a real reason to reply; a generic brand statement gives it neither.",
          soWhat: [
            {
              symptom: "Thread opener reads like an About Us page",
              action: "Rewrite the hook as a specific claim someone could disagree with",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-remaining-posts-and-first-reply",
          concept: "Posting Structure: hook, body, payoff",
          lessonAnchor: "step-4-posting-structure",
          theoryRecap:
            "The lesson's Step 4 requires every post in a thread to carry its own hook, body, and payoff, not just the first one. Any link belongs in the first reply of the thread, never the main posts.",
          question:
            "Write posts 2 through 4, each with its own complete hook/body/payoff, continuing the angle from post 1, then draft the first-reply link post separately.",
          toolName: "Google Docs",
          where: "Same doc, continuing the numbered blocks below post 1",
          procedure: [
            "Write post 2's hook as a follow-on claim, not a recap of post 1",
            "Write post 3 as the evidence post, one concrete number or comparison",
            "Write post 4 as the closing payoff post, the strongest single takeaway",
            "Draft a separate first-reply post containing the product link, pinned to the thread",
          ],
          outputSample:
            "POST 2:\nHook: The math is simple once you see it laid out.\nBody: A typical ambassador deal runs 8-15% of a watch brand's marketing budget. We put that into the movement and the strap hardware instead.\nPayoff: Would you rather pay for a name on a billboard or a part inside the watch?\n\nPOST 4:\nHook: Here's the actual tradeoff, stated plainly.\nBody: You're not getting a famous wrist in an ad. You're getting a better watch for the same price.\nPayoff: Save this thread if you're deciding between a hyped brand and a better-built one.\n\nFIRST REPLY: Full lineup here -> [link]",
          healthy: "Every main post is self-contained with its own hook/body/payoff and zero links; the link lives only in the first reply.",
          unhealthy: "Post 3 or 4 drops a link directly into the main post 'just this once' because it felt natural, which suppresses reach on the whole thread.",
          interpret:
            "One link inside any main post in the thread caps the reach of that post specifically, threads don't get a pass on the no-link rule just because they're already multi-post.",
          soWhat: [
            {
              symptom: "Thread's later posts get noticeably less reach than the opener",
              action: "Check every post in the thread individually for an embedded link, not just the first one",
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
            role: "Draft all four posts plus the first-reply link post before publishing",
            why: "Free, easy to keep each post's character count visible and reviewable before it goes live",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Buffer",
            role: "Schedule the full thread to post in immediate sequence and queue the first reply",
            why: "Ensures the thread posts back-to-back without manual timing, which matters since reply velocity in the first 30-60 minutes drives reach",
            required: false,
            fallback: "Post manually in sequence, then immediately add the link as the first reply and pin it",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path (drafting in Google Docs, posting and replying manually) works fine for one thread. Buffer's free tier caps scheduled posts; a paid tier only matters once you're threading multiple times a week.",
      },
      deliverable:
        "A complete 4-post thread, each post with its own hook/body/payoff, plus a separate first-reply post carrying the product link.",
      sampleOutput:
        "ThredUp thread, sample (excerpt)\n\nPOST 1:\nHook: We list secondhand condition grades that most resale apps don't bother to define.\nBody: 'Good' means something different on every resale app. Ours means the same thing every single time, because we wrote the actual rubric down.\nPayoff: What's a term your industry uses constantly but never actually defines?\n\nFIRST REPLY: Full condition-grade rubric here -> [link]",
      successCriteria: [
        "All 4 posts have a distinct hook, body, and payoff, not a recap of the previous post",
        "No main post contains a link, the link appears only in the first reply",
        "The angle from post 1 stays consistent through post 4 rather than drifting topic",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite post 3 (the evidence post) as a short vertical video script instead of text, per the 20% multimedia slice of the content mix, and note what changes about the hook when it has to work as a video opener instead of a text line.",
    },
  ],

  "pinterest": [
    {
      id: "pinterest-board-and-pin-content-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Keyword-First Pinterest Board and Pin Plan",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given Framebridge's product categories, build a keyword-first board architecture and draft a fully SEO-optimized first pin (title, description, alt text) for each board, following the lesson's board naming rules and five-keyword-field pin anatomy.",
      companyId: "framebridge",
      scenario:
        "You're the new marketing coordinator at Framebridge, the custom picture-framing company acquired by Graham Holdings in 2021. Leadership wants a Pinterest presence built the right way from day one, not a rushed batch of random pins.",
      brief:
        "Framebridge sells custom picture frames, gallery-wall design, and art and photo preservation. Turn those categories into descriptive, search-matching board names, then draft one SEO-complete pin per board.",
      mode: "build",
      conceptsCovered: ["Board naming as keyword architecture"],
      steps: [
        {
          stepId: "pinterest-board-plan-step-1",
          concept: "Board naming as keyword architecture",
          lessonAnchor: "board-strategy",
          theoryRecap:
            "The lesson's Board Strategy section treats boards as both navigation and keyword architecture: use plain descriptive phrases that match how users search (not clever brand names), target 20-30 boards, and keep board covers visually consistent.",
          question:
            "Framebridge sells custom picture frames, gallery-wall design, and art/photo preservation kits. What five board names would a Pinterest searcher actually type, and what does the first SEO-complete pin on each board look like?",
          toolName: "Google Sheets",
          where:
            "A blank Google Sheet with columns: Board Name, Board Description, Pin 1 Title, Pin 1 Description, Pin 1 Alt Text, Destination URL.",
          procedure: [
            "List Framebridge's real product categories: custom frames, gallery walls, diploma/art preservation, kids' art framing, photo gifts.",
            "For each category, write a plain descriptive board name a searcher would type, e.g. 'Gallery Wall Layout Ideas', not 'Framebridge Faves'.",
            "Write a 2-3 sentence board description for each, front-loading the primary keyword the way the lesson's Pin Creation section describes.",
            "Draft one full pin per board: a 100-character title, a 500-character description with 3-5 related keywords, and alt text carrying a secondary keyword.",
            "Assign each pin a specific destination URL (a product or blog page), never the homepage.",
          ],
          outputSample:
            "Board Plan (excerpt)\n\nBOARD: Gallery Wall Layout Ideas\nDescription: Custom gallery wall layouts and frame arrangements for living rooms, hallways, and staircases. Frame sizes, spacing guides, and matting ideas for building a wall that looks curated, not cluttered.\nPIN 1 Title: Gallery Wall Layout Guide: Spacing and Frame Sizes That Work\nPIN 1 Description: Planning a gallery wall? This layout guide covers frame spacing, size mixing, and matting choices for a wall that reads as intentional. Custom framing options for photos, art, and prints. Shop gallery wall sets.\nAlt text: Gallery wall layout with five custom picture frames of varying sizes arranged over a sofa\nDestination: /gallery-wall-sets\n\n...4 more boards follow the same structure.",
          healthy:
            "Five boards, each with a keyword-matching name, a written description, and one complete pin with all five fields filled.",
          unhealthy:
            "Boards named after internal product SKUs or brand taglines, with pins linking straight to the homepage.",
          interpret:
            "Board names and descriptions are ranking signals, not labels. A board named the way customers search gets indexed for that search from day one.",
          soWhat: [
            {
              symptom: "Board is named after a brand campaign, not a search term",
              action: "Rename it to a plain descriptive phrase a customer would type",
              effort: "5 min",
            },
            {
              symptom: "Pin links to the homepage instead of a specific page",
              action: "Swap the destination URL to the exact product or blog page the pin illustrates",
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
            role: "Draft and organize the board and pin plan before publishing",
            why: "Free, no account friction, easy to share with a content team for review",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva for Social",
            role: "Design the vertical 2:3 pin images once the plan is approved",
            why: "Free tier includes Pinterest-sized templates and built-in text-overlay controls",
            required: false,
            fallback: "Any image editor that can export at 1000x1500px",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-board Pinterest architecture with descriptive, keyword-matching names and descriptions, plus one fully SEO-complete pin (title, description, alt text, destination URL) drafted for each board.",
      sampleOutput:
        "Drunk Elephant Pinterest Board Plan (excerpt)\n\nBOARD: Clean Skincare Routines for Sensitive Skin\nDescription: Gentle, fragrance-free skincare routines for reactive and sensitive skin types. Layering order, ingredient notes, and AM/PM routine breakdowns.\nPIN 1 Title: Sensitive Skin AM Routine: 4 Steps in the Right Order\nPIN 1 Description: The correct layering order for a sensitive-skin morning routine, from cleanser to SPF. Fragrance-free, silicone-free product picks and why order matters for absorption. Shop the full routine.\nAlt text: Four skincare bottles arranged in the order they should be applied for sensitive skin\nDestination: /routines/sensitive-skin-am\n\n...4 more boards follow the same structure.",
      successCriteria: [
        "All five board names are plain, descriptive, and match real search phrasing",
        "Every board has a written, keyword-carrying description",
        "Each pin fills all five keyword fields (title, description, alt text, board, destination)",
        "No pin links to the homepage",
      ],
      portfolioReady: true,
    },
    {
      id: "pinterest-pin-seo-audit",
      tier: "core",
      archetype: "audit",
      title: "The SEO Audit: Fixing a Pinterest Board's Missing Keyword Fields",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real 20-pin export from a Pinterest account with keyword fields filled in inconsistently, apply the lesson's five-keyword-field framework and Common Mistakes checklist to score every pin, flag missing board descriptions, and rewrite the three worst offenders.",
      companyId: "drunk-elephant",
      scenario:
        "You're a freelance Pinterest strategist brought in to audit Drunk Elephant's account ahead of a Q4 push. The brand has been pinning inconsistently for a year and impressions have plateaued.",
      brief:
        "Score all 20 pins against the five-keyword-field framework, flag every board missing a description, and rewrite the three lowest-scoring pins.",
      mode: "diagnostic",
      conceptsCovered: [
        "Five keyword fields per pin",
        "Board descriptions as indexed keyword real estate",
      ],
      steps: [
        {
          stepId: "pinterest-pin-audit-step-1",
          concept: "Five keyword fields per pin",
          lessonAnchor: "pin-creation-the-seo-first-approach",
          theoryRecap:
            "The lesson's Pin Creation section names five keyword fields on every pin: title, description, alt text, board name, and board description. All five need deliberate keyword placement, not just the title.",
          question:
            "Of 20 exported pins, how many have all five fields filled with a real, relevant keyword rather than left blank or generic ('Pin #14', no alt text)?",
          toolName: "Google Sheets",
          where:
            "Import the 20-pin export, add a 'score' column (0-5, one point per keyword field present and relevant).",
          procedure: [
            "Import the export with columns: pin title, description, alt text, board name, board description, destination URL.",
            "Score each pin 0-5, one point per field that is both present and carries a real, relevant keyword.",
            "Sort ascending by score to surface the worst offenders first.",
            "Flag any pin scoring 2 or below for a full rewrite.",
          ],
          outputSample:
            "Pin Audit (excerpt, sorted worst-first)\n\nPin: 'Pin #14' | Board: 'Faves' | Alt text: none | Score: 1/5\nPin: 'Vitamin C Serum' | Board: 'Skincare' | Alt text: 'product photo' | Score: 2/5\nPin: 'How to Layer Vitamin C and Retinol Without Irritation' | Board: 'Anti-Aging Skincare Tips' | Alt text: 'Vitamin C serum bottle next to retinol cream on a bathroom shelf' | Score: 5/5\n\n...17 more rows.",
          healthy: "Most pins score 4-5/5, with clear worst-scorers flagged for rewrite.",
          unhealthy: "A batch of pins named 'Pin #' with generic board names and no alt text.",
          interpret:
            "A low average score means the account is invisible to Pinterest search regardless of image quality, since ranking runs on the metadata fields, not the pixels.",
          soWhat: [
            {
              symptom: "Multiple pins titled 'Pin #' with no keyword",
              action: "Rewrite titles to front-load the primary keyword for that pin's topic",
              effort: "30 min",
            },
            {
              symptom: "Alt text is generic ('product photo') on every low-scoring pin",
              action: "Rewrite alt text to describe the image and carry a secondary keyword",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "pinterest-pin-audit-step-2",
          concept: "Board descriptions as indexed keyword real estate",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Common Mistake #2 in the lesson: board descriptions are indexed by Pinterest's search algorithm, so a board with no description throws away keyword real estate the account already owns.",
          question: "Of the account's boards represented in this export, how many have a written description at all?",
          toolName: "Google Sheets",
          where: "The same sheet, filtered to unique board names and their description column.",
          procedure: [
            "List each unique board name once alongside its current description (or blank).",
            "Mark every board with a blank or one-word description as a priority fix.",
            "Draft a 2-3 sentence, keyword-carrying description for each flagged board.",
          ],
          outputSample:
            "Board Description Audit\n\nBoard: 'Anti-Aging Skincare Tips' | Description: present, 3 sentences | OK\nBoard: 'Faves' | Description: blank | FLAG\nBoard: 'Skincare' | Description: 'our products' | FLAG\n\n2 of 6 boards need a rewritten description.",
          healthy: "Every board has a written, keyword-relevant description.",
          unhealthy: "Boards with blank descriptions or a single generic phrase.",
          interpret:
            "Every blank board description is a missed ranking opportunity the account already has traffic potential for, since the board itself is already indexed.",
          soWhat: [
            {
              symptom: "Two of six boards have no description",
              action: "Write a 2-3 sentence description with 2-3 relevant keywords for each",
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
            role: "Import the pin export, score every pin, and track the rewrite backlog",
            why: "Free, sortable, and easy to share the scored audit with a content team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored 20-pin audit sheet, a flagged list of boards missing descriptions, and full rewrites for the three lowest-scoring pins.",
      sampleOutput:
        "Framebridge Pin Audit (excerpt)\n\nPin: 'IMG_2041' | Board: 'Stuff' | Alt text: none | Score: 1/5\nRewrite -> Title: 'Custom Frame Sizes for Diploma and Certificate Display' | Board: 'Diploma and Certificate Framing Ideas' | Alt text: 'Black custom frame displaying a university diploma with gold mat border'\n\n...2 more rewrites follow.",
      successCriteria: [
        "All 20 pins scored 0-5 against the five-field framework",
        "Every board in the export checked for a written description",
        "Three lowest-scoring pins fully rewritten across all five fields",
      ],
      portfolioReady: true,
    },
  ],
  "threads": [
    {
      id: "threads-launch-content-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a 7-Day Threads Launch Content Plan",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given Halo Top's brand voice, draft a 7-day founder-led Threads launch plan where every post is designed to generate replies, not likes, following the lesson's ranking-signal order and personal-voice tactic.",
      companyId: "halo-top",
      scenario:
        "You're the social lead at Halo Top, the low-calorie ice cream brand, launching the company's first real Threads presence after years of running Instagram only.",
      brief:
        "Draft 7 days of posts, each ending in a specific answerable question, planned to run mostly from the founder's personal account rather than the brand handle.",
      mode: "build",
      conceptsCovered: ["Designing posts for reply depth, not likes"],
      steps: [
        {
          stepId: "threads-launch-plan-step-1",
          concept: "Designing posts for reply depth, not likes",
          lessonAnchor: "the-core-tactics",
          theoryRecap:
            "The Core Tactics section ranks Threads signals as reply depth, time spent, follows generated, likes, then reposts. Every post should end with a specific, answerable question, and personal founder accounts pull 10-15x the reach of a corporate handle.",
          question:
            "For a 7-day Halo Top launch sprint, what does each day's post look like if it is designed to generate replies from a personal, founder-voiced account instead of a brand broadcast?",
          toolName: "Google Sheets",
          where: "A content calendar sheet with columns: Day, Account, Post Text, Reply Question, Format.",
          procedure: [
            "List 7 days across the launch week.",
            "For each day, assign the post to the founder's personal account, not @HaloTop.",
            "Write post copy under 500 characters with a strong hook in the first 80 characters.",
            "End every post with a specific, answerable question, not a generic 'thoughts?'.",
            "Note which 3 posts will get an image (native-looking, not a produced ad asset) per the lesson's format guidance.",
          ],
          outputSample:
            "Day 1 | Founder account | 'Started this company because every low-cal ice cream on the market tasted like frozen chalk. What's the worst 'diet' food you've ever forced yourself to finish?' | Format: text only\nDay 2 | Founder account | 'We just recalculated our per-pint sugar count for the fifth time this year. What ingredient do you always check first on a nutrition label?' | Format: image, native product shot\n\n...5 more days follow the same structure.",
          healthy: "All 7 posts end in a specific question and run mostly from the personal account.",
          unhealthy: "Posts written as product announcements from @HaloTop with no question.",
          interpret:
            "A launch week built for replies establishes the account's baseline reach before the algorithm has any history to judge it on.",
          soWhat: [
            {
              symptom: "3 of 7 draft posts are announcements with no question",
              action: "Rewrite the close of each post into a specific, answerable question",
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
            role: "Build and share the 7-day content calendar",
            why: "Free, simple to hand off to the founder for approval before posting",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Produce the 3 native-looking image posts",
            why: "Free tier covers simple, personal-feeling graphics rather than polished campaign assets",
            required: false,
            fallback: "A phone camera shot works fine; the lesson explicitly penalizes overly produced images",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 7-day Threads content calendar, mostly posted from the founder's personal account, with every post ending in a specific reply-generating question.",
      sampleOutput:
        "Blue Apron Founder Launch Week (excerpt)\n\nDay 1 | Founder account | 'Ten years in, our biggest customer complaint is still portion sizes. What meal-kit gripe have you never been able to shake?' | Format: text only\nDay 2 | Founder account | 'We tested 40 box designs before landing on the one you get today. What's a piece of packaging that actually changed how you used a product?' | Format: image, native photo\n\n...5 more days follow the same structure.",
      successCriteria: [
        "All 7 posts end with a specific, answerable question",
        "Majority of posts assigned to the founder's personal account, not the brand handle",
        "Hooks land within the first 80 characters",
      ],
      portfolioReady: true,
    },
    {
      id: "threads-posting-cadence-audit",
      tier: "core",
      archetype: "audit",
      title: "The Cadence Audit: Diagnosing a Throttled Threads Account",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a 30-day Threads post log with flat reach, apply the lesson's ranking-signal order and Common Mistakes checklist to diagnose why the account is throttled and rebuild the next 30 days' cadence.",
      companyId: "winc-club-w",
      scenario:
        "You're auditing Winc's Threads account after three months of flat impressions. The brand has been posting daily but growth has stalled since week two.",
      brief:
        "Categorize 30 days of posts by account type and format, diagnose which of the lesson's Common Mistakes are present, and rebuild the next 30 days.",
      mode: "diagnostic",
      conceptsCovered: [
        "Ranking signal order: reply depth, time spent, follows, likes, reposts",
        "Corporate account throttling versus personal accounts",
      ],
      steps: [
        {
          stepId: "threads-cadence-audit-step-1",
          concept: "Ranking signal order: reply depth, time spent, follows, likes, reposts",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's ranking model weights reply depth, time spent reading the post, follows generated, likes, then reposts, with recency only as a tiebreaker. A post's first 30 minutes of reply activity determines whether the algorithm boosts it into the For You feed at all.",
          question:
            "Of Winc's 30 logged posts, how many end in a question versus how many are one-way product announcements with no reply prompt?",
          toolName: "Google Sheets",
          where: "Import the 30-day post log with columns: date, account, post text, ends in question (Y/N), replies, likes.",
          procedure: [
            "Import the log and add an 'ends in question' column, marked Y or N for each post.",
            "Cross-tab reply count against the Y/N column to see whether question-ending posts actually pulled more replies.",
            "Flag every post published from the brand handle versus a personal account.",
            "Note whether any self-replies happened within 30 minutes of the original post.",
          ],
          outputSample:
            "Cadence Audit (excerpt)\n\n24 of 30 posts: brand handle, no question, avg 3 replies\n6 of 30 posts: personal account (founder), ends in question, avg 22 replies\n0 of 30 posts: any self-reply within 30 minutes of posting",
          healthy: "Question-ending, personal-account posts show a clear reply advantage over brand broadcasts.",
          unhealthy: "24 of 30 posts are one-way brand announcements with zero self-replies.",
          interpret:
            "The account isn't underperforming randomly, it's structurally mismatched to every signal the algorithm actually weights.",
          soWhat: [
            {
              symptom: "80% of posts are brand-handle announcements with no question",
              action: "Shift the majority of posting volume to a personal, founder-voiced account with question-ending copy",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "threads-cadence-audit-step-2",
          concept: "Corporate account throttling versus personal accounts",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Common Mistake in the lesson: running only the brand account caps the ceiling before content quality even matters, since corporate accounts are demonstrably throttled relative to personal accounts.",
          question: "What would the next 30 days look like if posting volume shifted from the brand handle to 2-3 personal accounts in the wine niche?",
          toolName: "Google Sheets",
          where: "A rebuild tab in the same sheet.",
          procedure: [
            "List 2-3 team members who could post personally in the wine/lifestyle niche.",
            "Reassign 20 of the next 30 planned posts from the brand handle to these personal accounts.",
            "Keep the brand handle for resharing and replying to those personal posts, per the lesson's guidance.",
            "Add a same-day self-reply step to every post's plan.",
          ],
          outputSample:
            "Rebuilt 30-Day Plan (excerpt)\n\n20 of 30 posts: personal accounts (2 team members), question-ending\n10 of 30 posts: brand handle, reshare + reply only\n30 of 30 posts: self-reply scheduled within 30 minutes",
          healthy: "Majority of posting volume moved to personal accounts, brand handle repositioned to amplify.",
          unhealthy: "No change to account mix; brand handle still carries the majority of posts.",
          interpret:
            "Restructuring who posts, not just what gets posted, is the actual fix for a throttled account.",
          soWhat: [
            {
              symptom: "Brand handle still posting daily announcements",
              action: "Repurpose the brand handle to reshare and reply to personal-account posts instead",
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
            role: "Import the post log, cross-tab performance, and rebuild the next 30 days",
            why: "Free, sortable, and easy to share the audit with the wider social team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A categorized 30-day post audit showing the brand-vs-personal and question-vs-announcement split, plus a rebuilt 30-day cadence shifting volume to personal accounts.",
      sampleOutput:
        "Halo Top Cadence Audit (excerpt)\n\n26 of 30 posts: brand handle, no question, avg 4 replies\n4 of 30 posts: personal account, ends in question, avg 31 replies\nRebuild: 18 of next 30 posts moved to 2 personal accounts, all ending in a question, self-reply scheduled within 30 minutes of each.",
      successCriteria: [
        "All 30 logged posts categorized by account type and question-ending status",
        "Reply-count comparison drawn between personal and brand-handle posts",
        "Rebuilt 30-day plan shifts majority posting volume to personal accounts",
      ],
      portfolioReady: true,
    },
  ],

  "substack-notes": [
    {
      id: "substack-notes-90-day-cadence-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The 90-Day Cadence Plan: Building a Daily Notes Content Calendar",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Build a 7-day rotating Notes content calendar using the lesson's four proven formats, sized to a realistic 1-to-3-Notes-per-day cadence, so a newsletter never faces a blank page.",
      companyId: "ustraa",
      scenario: "You run growth for Ustraa, the Gurugram-founded men's grooming D2C brand VLCC Health Care acquired in 2023 for roughly ₹61 crore. Leadership wants a Substack newsletter for grooming education content, and you have to prove daily Notes posting is sustainable before committing budget to it.",
      brief: "Build a 7-day rotating calendar mapping each day to one of the four Notes formats (contrarian take, vulnerable confession, generosity Note, behind-the-scenes), so posting never depends on daily inspiration.",
      mode: "build",
      conceptsCovered: ["Posting cadence as the entry ticket for algorithmic distribution", "Rotating through the four proven Notes formats"],
      steps: [
        {
          stepId: "step-1-cadence-calendar",
          concept: "Posting cadence as the entry ticket for algorithmic distribution",
          lessonAnchor: "the-daily-operational-playbook",
          theoryRecap: "The lesson's Step 1 states creators who post weekly stall while daily posters compound, because each Note trains the algorithm on what the audience looks like. Step 2 gives four repeatable formats so daily output doesn't mean daily invention.",
          question: "You have one week and four formats. How do you distribute them across 7 days at 1 to 3 Notes per day without repeating a format twice in a row?",
          toolName: "Google Sheets",
          where: "Open a new sheet with columns Day, Time Slot, Format, Draft Hook, Restack Target.",
          procedure: [
            "List all 7 days down column A",
            "Assign each day one primary format, rotating contrarian take, vulnerable confession, generosity Note, behind-the-scenes so no format repeats on consecutive days",
            "For days with 2 to 3 Notes, add a second lighter-weight format (a restack-with-comment counts as one of the 3)",
            "Write a one-line draft hook for each planned Note in the Draft Hook column",
            "Add a Restack Target column, name 2 accounts in the grooming or men's lifestyle niche to restack that day",
          ],
          outputSample: "Mon: Contrarian take, 'Everyone says beard oil needs 10 ingredients. Here's why 3 is enough.', Restack: @groomingscience\nTue: Behind-the-scenes, screenshot of a failed 2019 product batch, Restack: @menshealthindia\nWed: Generosity Note, recommend 6 grooming/skincare writers, Restack: (n/a, this IS the generosity Note)\nThu: Vulnerable confession, 'Our first Notes month got 40 subscribers, here's the mistake', Restack: @d2cindia\nFri: Data-backed industry insight, one stat from the newsletter's last issue, Restack: @beautyops\nSat: Contrarian take, restack-with-comment only (lighter day), Restack: @groomingscience\nSun: Behind-the-scenes, weekly analytics screenshot, Restack: @menshealthindia",
          healthy: "Every day has an assigned format before the week starts, and no two consecutive days share a format.",
          unhealthy: "A blank calendar with only 'post something' as the plan, which is how creators stall after week one.",
          interpret: "A pre-built rotation removes the daily decision of what to post, the single biggest reason creators quit before day 30 per the lesson's Common Mistakes section.",
          soWhat: [
            { symptom: "Team keeps missing days because no one knows what to post", action: "Pre-fill the 7-day rotation one week ahead every Sunday", effort: "30 min" },
            { symptom: "Same format posted 3 days running, engagement flattening", action: "Enforce the no-repeat-adjacent-day rule in the calendar", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build and maintain the 7-day rotating Notes calendar", why: "Free, shareable, and enough structure for a weekly content rotation without extra software", required: true, lastVerified: "2026-08" },
          { toolName: "Substack", role: "Publish the actual Notes and the newsletter issues", why: "Free to publish, Notes is a built-in feed inside the platform", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A 7-day rotating Notes calendar with format, draft hook, and restack target assigned to every day.",
      sampleOutput: "YETI Coolers, Notes 7-day plan (excerpt)\n\nMon: Contrarian take, 'A $400 cooler doesn't need dry ice for a weekend trip. Here's the actual math.', Restack: @outdoorgearreview\nWed: Generosity Note, recommend 8 outdoor and camping writers by handle\nFri: Data-backed insight, ice-retention test result from this week's issue, Restack: @campingscience",
      successCriteria: [
        "All 7 days have an assigned format with no adjacent-day repeats",
        "At least one generosity Note and one data-backed insight appear in the week",
        "Every day names a specific restack target account",
      ],
      portfolioReady: true,
    },
    {
      id: "substack-notes-subscriber-vs-follower-audit",
      tier: "core",
      archetype: "audit",
      title: "Subscribers, Not Followers: Auditing a Month of Notes Performance",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Given a month of synthetic Notes performance data (likes, restacks, and subscriber conversions per Note), apply the lesson's core distinction between vanity engagement and subscriber-converting engagement to decide which Notes to repeat and which to stop making.",
      companyId: "stitch-fix",
      scenario: "You run content for Stitch Fix's editorial newsletter arm on Substack, the San Francisco personalized-styling company that went public via NASDAQ IPO in 2017. Marketing wants to know which of last month's 12 Notes actually grew the subscriber base versus just farming likes.",
      brief: "Rank 12 Notes by subscribers-per-Note rather than likes, flag the one high-like, low-subscriber Note as a false positive, and recommend which 3 formats to repeat next month.",
      mode: "diagnostic",
      conceptsCovered: ["Subscriber-conversion rate per impression as the real success metric", "Distinguishing vanity engagement from funnel-converting engagement"],
      steps: [
        {
          stepId: "step-1-subscriber-ranking",
          concept: "Subscriber-conversion rate per impression as the real success metric",
          lessonAnchor: "the-core-signals-the-algorithm-rewards",
          theoryRecap: "The lesson's algorithm-signals section states Notes that drive subscribe clicks get more distribution than Notes that just collect likes, and the Key Takeaways section warns a 500-like Note that drives 5 subscribers loses to a 50-like Note that drives 30.",
          question: "Note #7 has 940 likes but only 6 new subscribers. Note #3 has 180 likes and 61 new subscribers. Which one gets repeated next month?",
          toolName: "Google Sheets",
          where: "Import the 12-row Notes export, add a calculated Subscribers-per-100-Likes column.",
          procedure: [
            "Import the 12 rows with columns Note, Format, Likes, Restacks, New Subscribers",
            "Add a calculated column: (New Subscribers / Likes) * 100",
            "Sort descending by that calculated column, not by raw Likes",
            "Flag any Note in the top 3 by Likes that falls outside the top 3 by the calculated column as a false positive",
            "Cross-reference the top 3 by conversion rate against their Format column to find the repeatable pattern",
          ],
          outputSample: "Note #7 (Poll, meme format): 940 likes, 55 restacks, 6 subscribers -> 0.6 per 100 likes. FALSE POSITIVE, high likes, low conversion.\nNote #3 (Generosity Note): 180 likes, 41 restacks, 61 subscribers -> 33.9 per 100 likes. TOP PERFORMER.\nNote #9 (Vulnerable confession): 210 likes, 18 restacks, 44 subscribers -> 20.9 per 100 likes.\nNote #1 (Contrarian take): 305 likes, 29 restacks, 38 subscribers -> 12.5 per 100 likes.\n... 8 more rows, sorted by conversion rate",
          healthy: "The repeat list is built from the conversion-rate ranking, generosity Notes and vulnerable confessions dominate the top 3.",
          unhealthy: "The repeat list is built from raw like counts, which would put the poll-meme Note back in rotation next month.",
          interpret: "Likes measure attention, subscribers-per-100-likes measures whether that attention converts to the platform's actual currency, an owned email address.",
          soWhat: [
            { symptom: "Team keeps making poll and meme Notes because they get the most likes", action: "Switch the monthly reporting metric from total likes to subscribers-per-100-likes", effort: "5 min" },
            { symptom: "No one can tell which format to double down on", action: "Sort the export by conversion rate before every monthly content review", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Rank Notes by subscriber-conversion rate instead of raw likes", why: "Free, and a calculated column is all this analysis needs", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A ranked table of 12 Notes by subscribers-per-100-likes, with the false-positive Note flagged and a 3-format repeat recommendation.",
      sampleOutput: "Peloton Interactive, Notes performance review, October\n\nREPEAT NEXT MONTH\n  1. Generosity Note (33.9 subs/100 likes)\n  2. Vulnerable confession (20.9 subs/100 likes)\n  3. Contrarian take (12.5 subs/100 likes)\n\nFLAGGED FALSE POSITIVE\n  Poll/meme Note: 940 likes but only 0.6 subs/100 likes, high engagement, near-zero funnel value\n\nDO NOT REPEAT\n  Behind-the-scenes screenshot with no CTA framing: 4.1 subs/100 likes",
      successCriteria: [
        "Correctly identifies the high-like, low-conversion Note as a false positive",
        "Ranks all 12 Notes by the calculated subscribers-per-100-likes metric",
        "Recommends exactly 3 formats to repeat, matching the top 3 by conversion rate",
      ],
      portfolioReady: true,
    },
  ],
  "linkedin-thought-leadership": [
    {
      id: "linkedin-thought-leadership-draft-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Reach Killer or Reach Winner: Tearing Down 5 Draft LinkedIn Posts",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given 5 synthetic draft LinkedIn posts, apply the lesson's algorithm rules (link placement, dwell time, comment-baiting) to identify which drafts will be throttled and which are ready to publish.",
      companyId: "yeti",
      scenario: "You're the B2B marketing lead at YETI Holdings preparing 5 draft LinkedIn posts for a founder-style account promoting YETI's commercial and corporate-gifting line, ahead of the NYSE IPO anniversary content push.",
      brief: "Score each of 5 drafts against the lesson's algorithm rules, flag the specific line that breaks each rule, and rewrite the worst offender.",
      mode: "teardown",
      conceptsCovered: ["Native content outweighs posts with external links", "Comments outweigh reactions as an algorithmic signal", "Dwell time as the dominant ranking signal"],
      teardownItems: [
        {
          itemId: "teardown-1-five-drafts",
          specimen: "DRAFT 1: 'Excited to share our new commercial cooler lineup! Check it out here: yeti.com/commercial [link]'\n\nDRAFT 2: 'A client asked us why a $500 cooler is worth it over a $60 one. I didn't have a clean answer for 3 years. Then I ran the actual ice-retention math myself. Here's what changed my mind.'\n\nDRAFT 3: 'Like and comment if you agree outdoor gear pricing is broken!! 🔥🔥🔥'\n\nDRAFT 4: '73% of our corporate-gifting clients reorder within 12 months. Here is the exact onboarding sequence we built to get there, and why most brands get step 2 wrong.'\n\nDRAFT 5: 'Proud to announce YETI was named a top outdoor brand. Link to the article in comments.'",
          specimenSource: "synthetic-realistic",
          prompt: "Score each of the 5 drafts as PUBLISH or REWRITE against the lesson's algorithm rules, and name the specific rule each REWRITE draft breaks.",
          answerKey: [
            { defect: "Draft 1 places the external link directly in the post body", severity: "critical", whyItMatters: "The lesson states LinkedIn deliberately throttles posts that push users off-platform, and native content outweighs linked posts by roughly 60% reach.", lessonRef: "Never add links in the post body", owner: "you" },
            { defect: "Draft 3 uses a direct engagement-bait request ('like and comment if you agree')", severity: "critical", whyItMatters: "Engagement-bait phrasing is a known low-quality signal LinkedIn's algorithm suppresses; it earns cheap reactions but not the comment velocity or dwell time that actually drives distribution.", lessonRef: "Comments outweigh reactions", owner: "you" },
            { defect: "Draft 3 has no substantive hook or story, it opens with the ask instead of content", severity: "moderate", whyItMatters: "Posts with weak first lines lose the reader before any dwell time accumulates, and dwell time is one of the two dominant ranking signals.", lessonRef: "Two signals dominate: dwell time and early engagement velocity", owner: "you" },
          ],
          distractors: [
            "Draft 2 is too personal for a B2B account (it is not a defect, personal stories are one of the 4 rewarded content types)",
            "Draft 4's statistic needs a hyperlinked source citation inline (citing a source verbally is fine, the rule against links is about outbound URLs)",
            "Draft 5 is too short (length is not the issue, the link's placement in comments instead of the body is actually correct per the lesson)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft and mark up the 5 posts with rule violations before publishing", why: "Free, simple commenting for a small team review pass", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A scored table of all 5 drafts (PUBLISH/REWRITE) with the specific rule violation named for each REWRITE, plus a rewritten version of the worst offender.",
      sampleOutput: "MapmyIndia, LinkedIn draft review\n\nDRAFT: 'Our Mappls Maps API just crossed 2 billion location queries a month. Here's the infrastructure decision that made that possible, and the one we got wrong at 500 million.' -> PUBLISH, personal/technical story with a stat, no outbound link, strong hook.\n\nDRAFT: 'Big announcement coming Monday, stay tuned! Link in bio.' -> REWRITE, no substance, 'link in bio' phrasing signals off-platform intent even without a literal URL.",
      successCriteria: [
        "Correctly flags both Draft 1 (link in body) and Draft 3 (engagement bait) as REWRITE",
        "Correctly leaves Draft 2 and Draft 4 as PUBLISH",
        "Names the specific lesson rule each flagged draft violates, not just 'this is bad'",
      ],
      portfolioReady: true,
    },
    {
      id: "linkedin-thought-leadership-content-pillar-system",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Content Pillar System: Building a 6-Month Posting Engine",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Build a complete content-pillar system, 3 to 5 recurring themes, a weekly posting rotation, and a repurposing map from one long-form source, matching the lesson's minimum viable stack for scaling thought leadership without daily inspiration.",
      companyId: "mapmyindia",
      scenario: "You're building the LinkedIn thought-leadership system for a senior leader at MapmyIndia (CE Info Systems), the New Delhi-founded geospatial technology company that listed on the Indian stock exchanges in December 2021 at a 53% premium. Leadership wants a repeatable system, not one-off viral posts.",
      brief: "Define 4 content pillars from the company's actual work, build a Monday/Wednesday/Friday rotation across them, and map one long-form source (a keynote deck) into 5 individual posts.",
      mode: "build",
      conceptsCovered: ["Content pillars as recurring themes that define expertise", "Repurposing long-form content into multiple posts", "Batch writing to decouple creation from publishing"],
      steps: [
        {
          stepId: "step-1-pillar-rotation-and-repurposing",
          concept: "Content pillars as recurring themes that define expertise",
          lessonAnchor: "building-a-posting-system-that-scales",
          theoryRecap: "The lesson defines content pillars as 3 to 5 recurring themes that every post maps to, batch writing as producing 2 to 3 weeks of posts in one session, and repurposing as turning one long-form asset into 5 posts.",
          question: "Given MapmyIndia's actual business (geospatial APIs, autonomous vehicle mapping, government infrastructure contracts, a Dec 2021 IPO), what 4 pillars would a senior leader's account rotate through, and how does a single keynote deck on 'India's EV mapping infrastructure' turn into 5 posts?",
          toolName: "Google Docs",
          where: "Create a system doc with sections for Pillars, Weekly Rotation, and Repurposing Map.",
          procedure: [
            "Name exactly 4 pillars grounded in the company's real work, not generic B2B themes",
            "Assign each pillar a day: Monday = personal story pillar, Wednesday = industry insight or data pillar, Friday = contrarian or technical pillar",
            "Take one long-form source (the keynote deck) and extract 5 distinct post angles from it, one per slide section or claim",
            "Note which of the 5 posts uses which pillar, confirming the rotation and the repurposing map reference the same 4 pillars",
            "Add a batch-writing note, all 5 posts get drafted in one sitting the week before publishing",
          ],
          outputSample: "PILLARS\n  1. Geospatial infrastructure lessons (technical, industry insight)\n  2. Building deep tech in India (personal story, founder journey)\n  3. What autonomous vehicles actually need from maps (contrarian/technical)\n  4. Public-sector data partnerships (data-backed take)\n\nWEEKLY ROTATION\n  Mon: Pillar 2 (personal story) | Wed: Pillar 1 or 4 (data/insight) | Fri: Pillar 3 (contrarian)\n\nREPURPOSING MAP, source: 'India's EV Mapping Infrastructure' keynote deck\n  Post 1 (Pillar 1): The lane-level accuracy problem no one talks about\n  Post 2 (Pillar 3): Why generic GPS maps fail autonomous vehicles in Indian traffic\n  Post 3 (Pillar 4): What a state government mapping partnership actually requires\n  Post 4 (Pillar 2): The infrastructure decision we got wrong at 500M queries\n  Post 5 (Pillar 1): One stat from the keynote, reframed as a standalone data post",
          healthy: "All 5 repurposed posts map back to one of the 4 defined pillars, and the rotation has no day left unassigned.",
          unhealthy: "Posts are generated ad hoc with no pillar reference, forcing a new topic search every publishing day.",
          interpret: "A pillar system converts one research effort (the keynote) into a month of on-brand content instead of five unrelated one-off posts.",
          soWhat: [
            { symptom: "Team runs out of post ideas after 2 weeks", action: "Re-mine the last long-form asset (deck, case study, podcast) for 5 more angles against the same 4 pillars", effort: "30 min" },
            { symptom: "Posts feel scattered across unrelated topics", action: "Reject any draft that doesn't map to one of the 4 named pillars", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Maintain the pillar definitions, rotation schedule, and repurposing map as one living system doc", why: "Free and shareable with whoever is ghost-writing for the executive", required: true, lastVerified: "2026-08" },
          { toolName: "Buffer", role: "Schedule the batch-written posts across the Monday/Wednesday/Friday rotation", why: "Free tier covers 3 channels, enough for a single executive's LinkedIn queue", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "LinkedIn Campaign Manager", role: "Not for the organic posts themselves, used to boost the single highest-performing pillar post per month as a paid amplification test", why: "Confirms which pillar deserves more organic investment before committing more writing time to it", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A content-pillar system doc with 4 named pillars, a Mon/Wed/Fri rotation, and a 5-post repurposing map from one long-form source.",
      sampleOutput: "Stitch Fix, executive LinkedIn pillar system (excerpt)\n\nPILLARS\n  1. Personalization at scale (technical/data)\n  2. What retail gets wrong about styling (contrarian)\n  3. Building a public company as a solo founder-turned-CEO (personal story)\n  4. Data science in fashion (industry insight)\n\nREPURPOSING MAP, source: Q3 investor letter\n  Post 1 (Pillar 4): The stylist-matching stat investors keep asking about\n  Post 2 (Pillar 1): Why personalization breaks at 1M+ customers, and what fixed it",
      successCriteria: [
        "Exactly 4 pillars are named and grounded in the company's real business",
        "Every day in the Mon/Wed/Fri rotation is assigned to a named pillar",
        "All 5 repurposed posts trace back to one of the 4 pillars, none are orphaned",
      ],
      portfolioReady: true,
    },
  ],

  "ugc": [
    {
      id: "ugc-ad-candidate-rights-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Rights Check: Teardown of Five UGC Ad Candidates",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given five customer-submitted UGC assets shortlisted for a paid ad rotation, apply the lesson's rights-status ladder and authenticity-preservation rule to catch what cannot legally or credibly run before media spend locks in.",
      companyId: "grab",
      scenario:
        "You're the junior marketing associate on GrabFood's paid social team. Your manager has shortlisted five customer-submitted photos and captions tagged #GrabFoodMoments for next month's Instagram ad rotation, and wants your rights-and-quality sign-off before the media buy locks the schedule.",
      brief:
        "Review each candidate against the rights-status ladder (pending / cleared-organic / cleared-paid) and the authenticity-preservation rule, then flag anything that cannot run as paid creative.",
      mode: "teardown",
      conceptsCovered: [
        "Capture and Rights-Clear",
        "Preserving the authenticity signal",
        "Distribute Across Channels",
      ],
      teardownItems: [
        {
          itemId: "candidate-1-reposted-no-permission",
          specimen:
            "Candidate #1: A customer's Instagram Story showing a GrabFood delivery bag on their doorstep, caption 'best chicken rice ever'. Tagged @GrabSG. Status field in the tracker: blank. No record of any outreach to the customer.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Can this asset run in the paid Instagram rotation next week? What has to happen first, if anything?",
          answerKey: [
            {
              defect: "No rights clearance on file, a Story tag is not a license",
              severity: "critical",
              whyItMatters:
                "A Like, repost, or tag is not permission. Running this in paid media exposes the brand to a DMCA takedown or a creator dispute over unauthorized commercial use.",
              lessonRef: "Stage 2: Capture and Rights-Clear",
              owner: "you",
            },
          ],
          distractors: [
            "The photo is vertical instead of square",
            "The caption doesn't mention the product name",
          ],
          partialCredit: true,
        },
        {
          itemId: "candidate-2-overedited",
          specimen:
            "Candidate #2: A 12-second customer video, color-corrected to match GrabFood's green brand palette, with the Grab logo watermark burned into the bottom-right corner and the original handheld shake stabilized in post.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This candidate is fully rights-cleared, the customer signed a release. Is it still a strong UGC ad candidate as-is?",
          answerKey: [
            {
              defect: "Over-produced: color grading, stabilization, and a logo overlay erase the authenticity signal",
              severity: "moderate",
              whyItMatters:
                "The production-quality gap between brand content and UGC is the trust signal itself. Polishing it to studio quality makes it read as an ad again, undoing the reason it outperforms branded creative.",
              lessonRef: "Common Mistakes: Re-editing customer content to match brand guidelines",
              owner: "you",
            },
          ],
          distractors: [
            "The video is only 12 seconds long",
            "The customer's face isn't visible in the clip",
          ],
          partialCredit: true,
        },
        {
          itemId: "candidate-3-paid-creator-mislabeled",
          specimen:
            "Candidate #3: A polished, lo-fi-styled unboxing video submitted through the brand's paid creator agency, but logged in the tracker under 'organic UGC' with no disclosure tag and no compensation note.",
          specimenSource: "synthetic-realistic",
          prompt:
            "The tracker calls this 'organic UGC.' Does that classification hold up?",
          answerKey: [
            {
              defect: "This is paid 'UGC-style' creator content mislabeled as unpaid organic UGC",
              severity: "critical",
              whyItMatters:
                "Paid creator content cosplaying as unpaid UGC is a different lever with different disclosure obligations. Running it without a paid-partnership label risks a deceptive-endorsement issue, on top of misleading internal reporting on what's actually converting.",
              lessonRef: "What It Actually Is: UGC-style creator content vs. real UGC",
              owner: "you",
            },
          ],
          distractors: [
            "The video's aspect ratio doesn't match the placement",
            "The creator used a trending audio track",
          ],
          partialCredit: true,
        },
        {
          itemId: "candidate-4-clean-comment-workflow",
          specimen:
            "Candidate #4: A customer's tagged photo, followed by a brand comment reading 'Reply #yesGrab to give us permission to feature this in our ads,' the customer replied #yesGrab, and the reply is screenshotted and stored in the tracker with today's date.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this candidate ready to run as paid creative?",
          answerKey: [
            {
              defect: "Rights are cleared and documented, but the DAM entry is missing creator ID and platform metadata",
              severity: "cosmetic",
              whyItMatters:
                "The permission itself is valid, this is not a legal blocker. But an incomplete DAM tag means the team can't later attribute revenue back to this creator or credit them, which is the retention mechanism for future submissions.",
              lessonRef: "Stage 4: Measure and Feed Back",
              owner: "you",
            },
          ],
          distractors: [
            "The comment-reply approval hashtag is brand-specific instead of generic",
            "The photo was taken with a phone, not a professional camera",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track rights status, DAM metadata, and sign-off decisions per candidate",
            why: "Free, no account friction, and matches the three-state rights tag the lesson recommends",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "TINT",
            role: "Automate permission requests and store signed approvals at scale",
            why: "Removes manual comment-reply tracking once the UGC volume outgrows a spreadsheet",
            required: false,
            fallback: "Google Sheets with a manual comment-reply workflow",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A five-row sign-off log stating, for each candidate, its rights status, whether it can run paid, and the single fix required if it can't.",
      sampleOutput:
        "Care.com UGC sign-off log (excerpt)\n\nCandidate: Nanny testimonial video, tagged @caredotcom\nRights status: cleared-organic only\nPaid-ready: NO\nFix required: send creator-portal consent form, no signed release on file for commercial use\n\nCandidate: In-app review screenshot, no creator attached\nRights status: n/a, not a personal creative work\nPaid-ready: YES, reviews are not subject to creator rights clearance\nFix required: none",
      successCriteria: [
        "Correctly flags all uncleared or mislabeled candidates as not paid-ready",
        "Identifies the over-produced candidate as an authenticity risk, not a rights risk",
        "Distinguishes a cosmetic DAM gap from a legal blocker",
      ],
      portfolioReady: true,
    },
    {
      id: "ugc-trigger-rights-system-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a UGC Trigger-and-Rights-Clearance System",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Design a two-part UGC capture system: the trigger mechanism that gets customers posting, and the rights-clearance workflow that makes their content safe to run as a paid ad, sized to a real 90-day pilot.",
      companyId: "zillow",
      scenario:
        "You're the lifecycle marketing lead at Zillow, tasked with launching a 'Sold With Zillow' UGC program that captures real seller and buyer video testimonials after closing, then safely reuses the best ones in paid social.",
      brief:
        "Design a post-close trigger sequence and a three-state rights-clearance workflow, then write the one-page SOP a community manager could run without you.",
      mode: "build",
      conceptsCovered: [
        "Trigger creation timed to the post-transaction moment",
        "Rights-status tagging before paid use",
      ],
      steps: [
        {
          stepId: "step-1-post-close-trigger",
          concept: "Trigger creation timed to the post-transaction moment",
          lessonAnchor: "stage-1-trigger-creation",
          theoryRecap:
            "The lesson's Stage 1 shows that timing beats a bare hashtag: a post-purchase ask at day 7 outperforms day 1 (too soon) and day 30 (forgotten), and a tangible incentive beats an aspirational one.",
          question:
            "A home sale closes on a Friday. When do you send the video-testimonial ask, and what makes someone actually record one instead of ignoring it?",
          toolName: "Google Docs",
          where: "Draft the trigger sequence as a simple timeline doc before it goes to email/CRM.",
          procedure: [
            "Set the ask for day 5-7 post-close, when the moving stress has faded but the relief is still fresh",
            "Write a single-tap CTA: 'Record a 30-second video about your move' with a phone-friendly upload link",
            "Attach a tangible incentive: a $50 home-services credit for an approved, usable submission",
            "Add one specific prompt line so submissions aren't generic: 'Show us your new front door' beats 'tell us about your experience'",
          ],
          outputSample:
            "Day 5 email, subject: 'Show us your new front door 🏡'\nBody: You closed on [Address] this week, congrats. Record a 30-second video of your first walk-in and get a $50 home-services credit when we feature it.\nCTA: Record now (upload link)",
          healthy: "A specific, scene-based prompt tied to a tangible incentive, sent in the day 5-7 window.",
          unhealthy: "A generic 'share your experience!' hashtag ask sent the day of closing.",
          interpret:
            "Specific prompts produce specific footage. A vague ask produces either silence or rehearsed, ad-sounding testimonials.",
          soWhat: [
            {
              symptom: "Submission rate under 2% of closings",
              action: "Replace the generic ask with a scene-based prompt and a same-week send window",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-three-state-rights-tag",
          concept: "Rights-status tagging before paid use",
          lessonAnchor: "stage-2-capture-and-rights-clear",
          theoryRecap:
            "The lesson's Stage 2 requires a rights-status tag in the CRM, pending, cleared-organic, or cleared-paid, and only cleared-paid assets go into ads. A Like or a tag is never a license.",
          question:
            "A seller uploads a testimonial through the portal. What has to happen between upload and that clip appearing in a paid Instagram ad?",
          toolName: "Google Sheets",
          where: "Build the rights tracker as a Sheet with one row per submission, synced from the upload portal.",
          procedure: [
            "Log every submission as 'pending' the moment it's uploaded",
            "Route each to a consent-form step at submission (the cleanest legal path per the lesson) rather than a post-hoc DM",
            "Move to 'cleared-organic' once the consent form is signed, permits owned-channel use",
            "Move to 'cleared-paid' only when the form's paid-use checkbox is explicitly checked",
            "Filter the tracker to 'cleared-paid' before handing any asset to the media-buying team",
          ],
          outputSample:
            "Row 14 | seller_testimonial_042.mp4 | Uploaded 2026-06-03 | Consent form signed 2026-06-03 | Paid-use box: checked | Status: cleared-paid",
          healthy: "Media buying only ever pulls from a filtered 'cleared-paid' view.",
          unhealthy: "Media buying pulls directly from the raw upload folder because 'the customer seemed fine with it'.",
          interpret:
            "The tag, not a gut feeling about the customer's intent, is what makes an asset legally usable in paid media.",
          soWhat: [
            {
              symptom: "A paid ad gets pulled after a creator complaint",
              action: "Audit whether the asset ever had a 'cleared-paid' tag; if not, fix the intake form before resuming",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the trigger-sequence SOP a community manager can run independently",
            why: "No cost, easy to hand off, version history built in",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Track submission-to-clearance status with the three-state rights tag",
            why: "Matches the exact CRM tagging structure the lesson recommends, no new tool to learn",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Bazaarvoice",
            role: "Automate consent capture and syndicate cleared assets to ad platforms directly",
            why: "Removes manual status-updating once submission volume passes what one spreadsheet owner can track",
            required: false,
            fallback: "Google Sheets with a manual weekly status review",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page SOP covering the trigger email sequence, the incentive structure, and the three-state rights-clearance workflow, ready for a community manager to operate without further guidance.",
      sampleOutput:
        "Yelp Elite Reviewer Video Program, SOP excerpt\n\nTRIGGER: Day 6 after a reviewer hits 50 reviews, send 'Show us your favorite local find' video ask, $25 Yelp Ads credit for approved submissions.\n\nRIGHTS TAG:\npending -> upload received, no consent form yet\ncleared-organic -> consent form signed, owned channels only\ncleared-paid -> paid-use checkbox signed, cleared for Yelp Ads creative\n\nRULE: Media buying pulls only from the cleared-paid filtered view, never the raw upload folder.",
      successCriteria: [
        "Trigger timing is justified against the lesson's day 7 window, not arbitrary",
        "Incentive is tangible, not aspirational",
        "Rights workflow has all three states and specifies exactly when an asset becomes paid-eligible",
      ],
      portfolioReady: true,
      stretch:
        "Add a fourth tracker column estimating revenue attributed to each cleared-paid asset via UTM, and identify which trigger prompt produced the highest-converting submissions.",
    },
  ],
  "creator-economy-strategy": [
    {
      id: "creator-economy-roster-tier-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Roster Audit: Tier Fit and Authenticity Red Flags",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a six-creator export with follower counts, engagement rates, and brand-safety flags, apply the lesson's tier benchmarks and vetting checklist to decide which creators are safe to sign, at what partnership model.",
      companyId: "care-com",
      scenario:
        "You're building Care.com's first always-on creator roster, focused on parenting and caregiving content. Your team pulled a six-creator shortlist from an outreach campaign and needs a go/no-go call before contracts go out.",
      brief:
        "Compare each creator's engagement rate to their tier's benchmark, flag authenticity red flags, and recommend a partnership model for each creator that survives the audit.",
      mode: "diagnostic",
      conceptsCovered: [
        "Auditing creator tier fit against engagement benchmarks",
        "Spotting bot-inflated and brand-unsafe accounts before signing",
      ],
      steps: [
        {
          stepId: "step-1-tier-and-authenticity-audit",
          concept: "Auditing creator tier fit against engagement benchmarks",
          lessonAnchor: "finding-and-vetting-creators",
          theoryRecap:
            "The lesson sets tier benchmarks (nano ~18% TikTok engagement, micro ~12%, macro ~8%) and warns that a creator with 200K followers and 1% engagement, or a sudden follower spike, is a bot-inflation red flag worth a fake-follower scan before signing.",
          question:
            "Of the six creators in the export, which pass their tier's engagement benchmark, which show inflation red flags, and which need a 90-day brand-safety check before any offer goes out?",
          toolName: "Google Sheets",
          where: "Import the export, add an 'expected engagement' column keyed to each creator's tier, and flag anything below benchmark.",
          procedure: [
            "Tag each creator's tier by follower count: nano under 10K, micro 10K-100K, macro 100K-1M+",
            "Compare their actual engagement rate to the tier benchmark from the lesson",
            "Flag any account with a recent follower spike that doesn't match a viral post, a bot-inflation signal",
            "Cross-check the flagged accounts' last 90 days for controversy or competitor mentions",
            "Recommend a partnership model only for creators that clear both the engagement and safety checks",
          ],
          outputSample:
            "Creator: @carewithkayla, 42K followers (micro), 11.5% engagement -> passes benchmark, no flags -> recommend affiliate + base fee\nCreator: @nannylifeofficial, 180K followers (macro), 0.9% engagement, +30K followers in 9 days with no viral post -> FLAG: bot-inflation, do not sign until re-audited",
          healthy: "Two of six creators cleared for an offer, four flagged for either benchmark failure or safety review.",
          unhealthy: "Signing all six because follower count alone looked impressive.",
          interpret:
            "Size is not the metric that matters, trust is, and engagement rate against the tier benchmark is the fastest proxy for it.",
          soWhat: [
            {
              symptom: "A creator's engagement rate sits well below their tier benchmark",
              action: "Run a fake-follower scan before any offer, don't rely on the raw follower count",
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
            role: "Score each creator against tier benchmarks and log the go/no-go decision",
            why: "No cost, and tier benchmarks are a simple lookup, no specialized software needed for the first pass",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HypeAuditor",
            role: "Run automated fake-follower and audience-quality scans at roster scale",
            why: "Manual spot-checking a spike doesn't confirm bot inflation the way an audience-quality tool does",
            required: false,
            fallback: "Manually cross-check flagged accounts' follower-growth charts on a free tool like Social Blade",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A six-row audit table with tier, benchmark comparison, red-flag status, and a go/no-go recommendation per creator.",
      sampleOutput:
        "Zillow home-content creator audit (excerpt)\n\nCreator: @firsttimehomebuyerdiaries, 28K followers (micro), 13.2% engagement, clean 90-day history\nVerdict: SIGN, recommend affiliate/commission tied to mortgage-partner referral link\n\nCreator: @luxurylistings_official, 310K followers (macro), 1.1% engagement, no recent controversy but engagement well below the 8% macro benchmark\nVerdict: HOLD, request platform-level reach data before any offer",
      successCriteria: [
        "Correctly benchmarks each creator's engagement against their tier",
        "Flags the follower-spike account as a bot-inflation risk, not just a low performer",
        "Only recommends a partnership model for creators that clear both checks",
      ],
      portfolioReady: true,
    },
    {
      id: "creator-economy-whitelisting-brief-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Loose Brief with Whitelisting Rights Locked In",
      timeEstimate: "60 minutes",
      timeMinutes: 60,
      objective:
        "Write a creator brief that specifies only the message, disclosures, and no-list, then negotiate whitelisting rights upfront, following the lesson's rule that retroactive permission requests are slow and often refused.",
      companyId: "grab",
      scenario:
        "You're launching GrabFood's first always-on micro-creator program in Singapore, 15 creators under contract, and you need a brief template plus a whitelisting clause before the first campaign goes live.",
      brief:
        "Draft a loose creator brief (message, disclosures, no-list only) and a whitelisting agreement clause that locks in paid-ads permission before signing, not after.",
      mode: "build",
      conceptsCovered: [
        "Briefing for outcomes, not scripted outputs",
        "Negotiating whitelisting rights before the deal closes",
      ],
      steps: [
        {
          stepId: "step-1-loose-brief",
          concept: "Briefing for outcomes, not scripted outputs",
          lessonAnchor: "briefing-creators-loose-wins",
          theoryRecap:
            "The lesson's loose-brief rule covers exactly three things: the one core message, mandatory disclosures, and a hard no-list. Everything else belongs to the creator, over-directing produces corporate content that flops on the creator's own channel.",
          question:
            "A creator is filming a GrabFood order-and-eat video. What goes in the brief, and what do you deliberately leave out?",
          toolName: "Google Docs",
          where: "Write the brief as a one-page doc, not a script, shared before any content is filmed.",
          procedure: [
            "State the one core message: 'GrabFood delivers your order fast enough that it's still hot'",
            "List mandatory disclosures: #ad or #GrabPartner per local ad-standards rules",
            "List the hard no-list: no competitor delivery apps shown, no unverified delivery-time claims",
            "Explicitly note what's left to the creator: tone, location, food choice, editing style",
          ],
          outputSample:
            "BRIEF: GrabFood x @creatorhandle\nCore message: your order arrives fast enough to still be hot\nDisclosures: #GrabPartner required, first line of caption\nNo-list: no other delivery app shown on screen, no exact-minute delivery claims\nEverything else (location, food, editing) is yours",
          healthy: "A one-page brief the creator can read in two minutes and still bring their own voice to.",
          unhealthy: "A five-page script with dialogue lines and shot-by-shot directions.",
          interpret:
            "A brief that specifies outputs kills the exact authenticity the partnership was paying for.",
          soWhat: [
            {
              symptom: "Creator content underperforms their own channel average",
              action: "Check whether the brief specified dialogue or shots instead of just message and constraints",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-whitelisting-clause",
          concept: "Negotiating whitelisting rights before the deal closes",
          lessonAnchor: "whitelisting-your-paid-ads-secret-weapon",
          theoryRecap:
            "The lesson shows whitelisted creator ads deliver 1.5-2x higher ROAS than standard brand creative, but activating it requires explicit written permission and account access agreed in the partnership agreement, negotiated upfront, since it is far harder to add after a deal closes.",
          question:
            "The contract is being drafted. What has to be in it now so the paid-media team can whitelist this creator's content in six weeks without going back to renegotiate?",
          toolName: "Google Docs",
          where: "Add a whitelisting clause to the standard creator contract template before any signature.",
          procedure: [
            "Add a clause granting written permission to run the creator's content as paid ads from the brand's own ad account",
            "Specify the access mechanism: Meta Partnership Ads tool or TikTok Spark Ads code, whichever platform applies",
            "Define the paid-usage window explicitly, e.g. 90 days from post date",
            "Confirm the clause is signed before any content is filmed, not requested after it performs well organically",
          ],
          outputSample:
            "WHITELISTING CLAUSE (v1)\nCreator grants GrabFood the right to run the delivered content as paid social advertising via Meta Partnership Ads / TikTok Spark Ads for 90 days from first publish date, using the creator's handle as the ad's origin.",
          healthy: "Every new creator contract includes the clause by default, before filming starts.",
          unhealthy: "Asking a creator for whitelisting rights after their organic post already outperformed expectations.",
          interpret:
            "Whitelisting is a contract term, not a favor you ask for once you've seen the numbers.",
          soWhat: [
            {
              symptom: "A high-performing organic post can't be whitelisted",
              action: "Check the contract for a whitelisting clause before assuming a renegotiation will work",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the brief template and the whitelisting clause for the standard creator contract",
            why: "No cost, easy for legal or a manager to comment on before it becomes the standard template",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Grin",
            role: "Manage the signed contract, deliverables, and whitelisting status across 15+ creators at once",
            why: "A spreadsheet works for the template stage, but tracking signed status across a real roster needs a dedicated system once volume grows",
            required: false,
            fallback: "Google Sheets tracking contract-signed and whitelisting-clause-included status per creator",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A reusable one-page brief template plus a standalone whitelisting clause ready to insert into every new creator contract.",
      sampleOutput:
        "Care.com Creator Brief + Whitelisting Clause, template excerpt\n\nCore message: Care.com's vetting standards mean you can actually relax while someone else is with your kid\nDisclosures: #CarePartner, first line of caption, per FTC guidance\nNo-list: no competing care-marketplace apps shown, no specific caregiver-cost claims\n\nWhitelisting clause: Creator grants Care.com the right to run delivered content as paid social via Meta Partnership Ads for 90 days from publish date.",
      successCriteria: [
        "Brief specifies only message, disclosures, and no-list, nothing else",
        "Whitelisting clause specifies the access mechanism and a defined usage window",
        "Clause is positioned as a pre-signature contract term, not a post-performance ask",
      ],
      portfolioReady: true,
      stretch:
        "Add a tiered whitelisting rate card: a higher one-time fee for creators who grant a 12-month usage window instead of 90 days.",
    },
  ],

  "algorithm-basics": [
    {
      id: "algorithm-basics-signal-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Weak-Signal Audit: Diagnosing Why a Post Underperformed",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 5-post Instagram Reels export with completion rate, saves, shares, comments, and likes, apply the lesson's signal-weighting table to identify the algorithmically weakest post and prescribe the fix, instead of ranking posts by raw engagement.",
      companyId: "go-digit-insurance",
      scenario:
        "You're the social media analyst at Go Digit General Insurance, the Bengaluru-headquartered, BSE/NSE-listed general insurer (543527), reviewing last month's Instagram Reels before the next content sprint.",
      brief:
        "Score each post against the lesson's signal-weighting table (saves highest on Instagram, likes weakest everywhere), find the post with strong likes but weak saves/completion, and recommend the specific fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "Completion rate, saves, and shares outrank likes as ranking signals",
      ],
      steps: [
        {
          stepId: "step-1-signal-weighting",
          concept: "Completion rate, saves, and shares outrank likes as ranking signals",
          lessonAnchor: "content-signals-to-optimize",
          theoryRecap:
            "The lesson's Content Signals table shows likes as the weakest signal on every platform, while saves are Instagram's strongest and completion rate is Instagram's second-strongest.",
          question:
            "Post 3 has the most likes (2,400) of the 5 posts but the lowest completion rate (18%) and almost no saves (12). Is it the strongest post?",
          toolName: "Google Sheets",
          where: "Import the 5-post export, freeze the header row, add a computed 'algorithmic strength' column.",
          procedure: [
            "Import the export: post_id, likes, comments, shares, saves, completion_rate",
            "Rank posts by likes alone first, note the order",
            "Re-rank posts weighting saves and completion rate highest, likes lowest, per the lesson's table",
            "Compare the two rankings; flag any post where the rankings diverge sharply",
          ],
          outputSample:
            "POST PERFORMANCE, RAW LIKES RANK\n  1. Post 3 -- 2,400 likes, 18% completion, 12 saves\n  2. Post 1 -- 1,900 likes, 61% completion, 340 saves\n\nRE-RANKED BY ALGORITHMIC SIGNAL WEIGHT\n  1. Post 1 -- 340 saves, 61% completion (STRONG)\n  2. Post 3 -- 12 saves, 18% completion (WEAK, despite likes)",
          healthy: "A post with high saves and completion rate, even with modest likes, gets flagged as the strongest performer.",
          unhealthy: "The content calendar keeps repeating Post 3's format because its like count looks impressive on a screenshot.",
          interpret:
            "Likes are a vanity signal the algorithm barely weighs; saves and completion predict future distribution far better.",
          soWhat: [
            {
              symptom: "A high-like, low-save post gets scheduled for a repeat next month",
              action: "Re-score the content calendar using saves and completion rate before reusing any format",
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
            role: "Import, score, and re-rank the post export",
            why: "Free, no account friction, sufficient for a 5-row comparison",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page signal diagnosis memo ranking all 5 posts by algorithmic strength (not raw engagement), with a specific fix recommended for the weakest post.",
      sampleOutput:
        "Acko General Insurance, Reels signal audit (excerpt)\n\nSTRONGEST: 'Claim in 3 taps' demo -- 410 saves, 58% completion, 890 likes\n  Why: viewers wanted to reference it later; hook lands in first 2 seconds.\n\nWEAKEST: 'Meet our new mascot' -- 2,100 likes, 9% completion, 6 saves\n  Fix: the mascot reveal has no reason to save or rewatch; rebuild around a problem the viewer can solve, not a brand moment.",
      successCriteria: [
        "Correctly re-ranks all 5 posts by save rate and completion rate, not likes",
        "Identifies the specific post where the like-based and signal-based rankings diverge",
        "Recommends a concrete content fix, not a generic 'post more' suggestion",
      ],
      portfolioReady: true,
    },
    {
      id: "algorithm-basics-consistency-forecast",
      tier: "core",
      archetype: "forecast",
      title: "The Consistency Bet: Forecasting 90-Day Reach Under Three Posting Strategies",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Using the lesson's consistency-builds-predictable-history mechanic, LinkedIn's -34% YoY organic reach decline, and its 15x comment-weighting, forecast 90-day cumulative reach for a B2B company page under three posting strategies (pre-event burst, sparse, steady 3x/week) and recommend one with numbers.",
      companyId: "jyoti-cnc-automation",
      scenario:
        "You run organic social for Jyoti CNC Automation, the Rajkot-founded, NSE-listed CNC and precision-engineering manufacturer (JYOTICNC), ahead of a decision on next quarter's LinkedIn posting cadence.",
      brief:
        "Model reach under 3 strategies using the lesson's first-60-minutes velocity mechanic and consistency-beats-volume principle, then recommend one with a projected number, not a vibe.",
      mode: "diagnostic",
      conceptsCovered: [
        "Consistency beats volume for distribution",
        "Early engagement velocity determines whether a post's initial test distribution expands",
      ],
      steps: [
        {
          stepId: "step-1-consistency-model",
          concept: "Consistency beats volume for distribution",
          lessonAnchor: "posting-consistency",
          theoryRecap:
            "The lesson explains that predictable posting histories make the algorithm's engagement-probability estimates more accurate, so it distributes more willingly. Three posts/week every week beats seven one week and none the next.",
          question:
            "Strategy A posts 12x in the 2 weeks before a trade show then goes silent for 10 weeks. Strategy B posts 3x/week for all 12 weeks. Both total roughly the same post count. Which builds more reach?",
          toolName: "Google Sheets",
          where: "Build a 12-week grid with columns for posts/week and a 'history predictability' multiplier.",
          procedure: [
            "List all 3 strategies across 12 weeks: burst, sparse (1x every 2 weeks), steady (3x/week)",
            "Apply a 1.0x baseline reach-per-post multiplier to steady, 0.6x to burst (post-history reset after the silent gap), 0.75x to sparse",
            "Sum total projected reach per strategy across 12 weeks using LinkedIn's current 5-7% organic reach-per-follower baseline",
            "Flag which strategy the lesson's mechanic favors even before adding real numbers",
          ],
          outputSample:
            "12-WEEK REACH FORECAST (10,000 follower base)\n  Burst (12 posts, 2 weeks): 12 x 500 x 0.6 = 3,600 total reach\n  Sparse (6 posts, spread): 6 x 500 x 0.75 = 2,250 total reach\n  Steady (36 posts, 3x/week): 36 x 500 x 1.0 = 18,000 total reach",
          healthy: "Steady posting projects the highest cumulative reach despite the lowest per-post ceiling.",
          unhealthy: "Leadership approves a 12-post pre-show burst expecting it to outperform a quieter, steady cadence.",
          interpret:
            "Total post count matters less than the shape of the posting history the algorithm has learned to predict.",
          soWhat: [
            {
              symptom: "Marketing wants to save posts for a pre-trade-show burst",
              action: "Redistribute the same post budget into a steady 3x/week cadence instead",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-velocity-check",
          concept: "Early engagement velocity determines whether a post's initial test distribution expands",
          lessonAnchor: "the-first-60-minutes",
          theoryRecap:
            "LinkedIn's initial test distribution is small; if engagement in the first 60 minutes is flat, the post rarely recovers. Comments carry 15x the weight of likes.",
          question:
            "A steady-cadence post gets 40 likes and 0 comments in the first hour. A less-liked post gets 8 likes and 6 comments. Which one is more likely to expand past the test audience?",
          toolName: "Google Sheets",
          where: "Add a weighted-engagement column: comments x 15 + likes x 1.",
          procedure: [
            "Compute weighted engagement score for both posts using the 15x comment multiplier",
            "Compare against a same-account historical median weighted score",
            "Flag which post clears the expansion threshold",
          ],
          outputSample:
            "Post A: (0 comments x 15) + (40 likes x 1) = 40\nPost B: (6 comments x 15) + (8 likes x 1) = 98\n\nPost B clears the account's median weighted score (75); Post A does not.",
          healthy: "The team seeds a question in the first comment on every steady post to manufacture early comment velocity.",
          unhealthy: "The team judges the first-hour success of a post by like count alone and stops promoting a comment-rich but like-poor post.",
          interpret: "A quieter-looking post with real comment threads is outperforming algorithmically, even if it looks weaker on a dashboard sorted by likes.",
          soWhat: [
            {
              symptom: "Weekly reporting sorts posts by like count",
              action: "Re-sort the reporting view by the weighted comment-first score before making cadence decisions",
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
            role: "Build the 12-week reach model and weighted engagement score",
            why: "Free, sufficient for a spreadsheet-based forecast with no live API needed",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 90-day (12-week) reach forecast comparing burst, sparse, and steady posting strategies, plus a first-60-minutes weighted-engagement scoring method, ending in a single cadence recommendation.",
      sampleOutput:
        "TBO Tek, LinkedIn Q3 cadence recommendation (excerpt)\n\nRECOMMENDATION: Steady 3x/week cadence\nProjected 12-week reach: 18,400 vs. 3,900 for a pre-conference burst\n\nFIRST-HOUR RULE: seed a question in comment #1 on every post; team replies to every comment within 60 minutes.",
      successCriteria: [
        "Correctly applies a higher multiplier to steady posting than burst posting, tied to the lesson's mechanic",
        "Computes a weighted engagement score using the 15x comment multiplier, not raw likes",
        "Delivers one clear cadence recommendation backed by the forecast numbers",
      ],
      portfolioReady: true,
      stretch: "Re-run the forecast assuming LinkedIn's organic reach declines another 15% next year, and see if the recommendation changes.",
    },
  ],
  "reddit-marketing": [
    {
      id: "reddit-marketing-subreddit-fit-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Subreddit Fit Audit: Choosing Communities Before You Post",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a shortlist of 6 candidate subreddits with subscriber counts, post frequency, and self-promotion rules, apply the lesson's Phase 1 framework to select the 3-5 right communities and flag which ones would get a brand banned.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're building the Reddit presence for RateGain Travel Technologies, the Noida-founded, NSE-listed travel and hospitality SaaS company (RATEGAIN), to build trust with hoteliers and OTA revenue managers who research tools on Reddit.",
      brief:
        "Score each candidate subreddit on engagement quality (not raw size) and rule strictness, then pick 3-5 and flag any that ban self-promotion outright.",
      mode: "diagnostic",
      conceptsCovered: [
        "A subreddit with fewer, engaged members beats one with more passive lurkers",
      ],
      steps: [
        {
          stepId: "step-1-subreddit-scoring",
          concept: "A subreddit with fewer, engaged members beats one with more passive lurkers",
          lessonAnchor: "phase-1-foundation-weeks-1-4",
          theoryRecap:
            "The lesson's Phase 1 says a subreddit with 50,000 engaged members beats one with 500,000 passive lurkers, and that most large subreddits ban self-promotion outright via AutoModerator.",
          question:
            "r/TravelTechnology (8,000 members, 40 posts/day, no self-promo ban) vs r/travel (13M members, 400 posts/day, strict no-brand-accounts rule). Which is the better first community?",
          toolName: "Reddit",
          where: "Browse each subreddit's sidebar, pinned rules post, and recent post frequency directly on Reddit; log scores in Google Sheets.",
          procedure: [
            "For each of the 6 candidate subreddits, record subscriber count, visible daily post volume, and the self-promotion rule verbatim",
            "Score engagement quality as (average comments per post) / (subscriber count in thousands)",
            "Flag any subreddit whose rules explicitly ban brand accounts or links",
            "Select the top 3-5 by engagement quality that do not carry an outright ban",
          ],
          outputSample:
            "SUBREDDIT SCORECARD\n  r/TravelTechnology -- 8K members, 40 posts/day, no ban, engagement score 6.2 -- SELECT\n  r/revenuemanagement -- 22K members, 15 posts/day, no ban, engagement score 4.8 -- SELECT\n  r/travel -- 13M members, 400 posts/day, brand accounts banned -- EXCLUDE\n  r/hotels -- 900K members, 60 posts/day, self-promo banned outright -- EXCLUDE",
          healthy: "The final list favors smaller, rule-permissive, high-engagement-score communities over the largest subreddit by subscriber count.",
          unhealthy: "The team picks r/travel first because 13 million members looks like the biggest opportunity, then gets the account shadowbanned within a week.",
          interpret: "Subscriber count is a vanity metric here; engagement density and rule permissiveness predict whether participation is even possible.",
          soWhat: [
            {
              symptom: "The subreddit shortlist is sorted by subscriber count",
              action: "Re-sort by engagement score and cross-check self-promotion rules before posting anything",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Reddit",
            role: "Read each subreddit's sidebar, pinned rules, and recent post activity directly",
            why: "The rules and engagement patterns that matter are only visible on the platform itself",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Score and rank the 6 candidate subreddits",
            why: "Free, sufficient for a 6-row comparison table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored shortlist of 3-5 subreddits selected for participation, with the 1-2 excluded subreddits flagged and the specific rule that disqualified them.",
      sampleOutput:
        "Concord Biotech, subreddit shortlist (excerpt)\n\nSELECTED: r/biotech (48K members, engagement score 5.9, no brand-account ban)\nEXCLUDED: r/Pharmacy (1.1M members) -- rules explicitly state 'no company representatives, ever'",
      successCriteria: [
        "Scores subreddits by an engagement-density metric, not raw subscriber count",
        "Correctly identifies and excludes any subreddit with an outright self-promotion ban",
        "Final selection lands in the lesson's recommended 3-5 subreddit range",
      ],
      portfolioReady: true,
    },
    {
      id: "reddit-marketing-nonpromo-participation-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "The 9:1 Plan: Building a 90-Day Non-Promotional Participation Calendar",
      timeEstimate: "1 hour",
      timeMinutes: 60,
      objective:
        "Build a 90-day, week-by-week Reddit participation plan for 3 target subreddits that satisfies the lesson's 9:1 helpful-to-brand-mention ratio, respects the 90-day/1,000-karma gate, and avoids every mistake in the lesson's Common Mistakes list.",
      companyId: "concord-biotech",
      scenario:
        "You're planning the Reddit presence for Concord Biotech, the Ahmedabad-founded, NSE/BSE-listed pharmaceutical API manufacturer (CONCORDBIO), which wants credibility in biotech and pharma communities without getting banned for self-promotion.",
      brief:
        "Build the calendar as personal-account participation first, apply the 9:1 rule explicitly per week, and only introduce a single, clearly-disclosed brand mention once karma and account-age gates are met.",
      mode: "build",
      conceptsCovered: [
        "The 9:1 helpful-to-brand-mention ratio",
        "Using a brand-named account in general subreddits gets you removed and can blacklist your domain",
      ],
      steps: [
        {
          stepId: "step-1-nine-to-one-calendar",
          concept: "The 9:1 helpful-to-brand-mention ratio",
          lessonAnchor: "phase-2-community-participation-months-1-6",
          theoryRecap:
            "The lesson's Phase 2 requires 9 genuinely useful comments for every 1 that references your work, and even that one should only appear when directly asked or obviously relevant.",
          question:
            "Over a 12-week plan with roughly 2 comments/week, when should the single allowed brand-reference comment land, and what has to be true before it does?",
          toolName: "Google Sheets",
          where: "Build a 12-week grid tracking comment count, running helpful:brand ratio, and account karma/age.",
          procedure: [
            "Plan roughly 2 helpful comments/week across 3 target subreddits, answering real recurring questions (API sourcing, formulation stability, etc.)",
            "Track a running counter: helpful comments vs. brand-referencing comments",
            "Only schedule a brand-referencing comment once the counter shows 9+ helpful comments AND the account has cleared 90 days / 1,000 karma",
            "Require the brand reference to be a direct answer to someone's specific question, not a standalone post",
          ],
          outputSample:
            "WEEK-BY-WEEK TRACKER (excerpt)\n  Week 1-9: 18 helpful comments, 0 brand mentions, karma 40 -> 620\n  Week 10: karma crosses 1,000, account now 94 days old\n  Week 11: 1st brand-referencing comment, answering a direct question about API stability testing (ratio now 18:1)",
          healthy: "The brand-referencing comment appears only after the karma/age gate clears and only as a direct answer to a specific question.",
          unhealthy: "A brand mention gets scheduled in week 3 because a product launch date is approaching, ignoring both the ratio and the karma gate.",
          interpret: "The calendar's pacing is dictated by community trust signals, not the marketing team's launch calendar.",
          soWhat: [
            {
              symptom: "A brand mention is scheduled before the karma/age gate clears",
              action: "Push the brand mention to the next week where a real, directly-relevant question appears",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-mistake-proofing",
          concept: "Using a brand-named account in general subreddits gets you removed and can blacklist your domain",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes list warns that brand-named accounts get removed within minutes, bought upvotes trigger permanent domain bans, and skipping the SEO layer on thread titles wastes Reddit's biggest compounding asset.",
          question:
            "The draft calendar uses the account name 'ConcordBiotech_Official' and schedules a thread titled 'Why Concord Biotech Leads API Manufacturing.' What has to change before this ships?",
          toolName: "Reddit",
          where: "Review the draft calendar against each Common Mistakes item before finalizing.",
          procedure: [
            "Rename the participation account to a personal, non-brand username",
            "Rewrite any planned thread title as a genuine search-style question, e.g. 'How do you evaluate API manufacturing partners for stability data?'",
            "Confirm no engagement pods, bought upvotes, or vote-timing coordination appear anywhere in the plan",
            "Add a mod-outreach step at least 1 week before any AMA or coordinated activity",
          ],
          outputSample:
            "MISTAKE-PROOFING CHECKLIST\n  [FIXED] Account renamed from 'ConcordBiotech_Official' to a personal handle\n  [FIXED] Thread title rewritten as a genuine question, not a brand claim\n  [PASS] No bought engagement anywhere in the plan\n  [ADDED] Mod outreach scheduled for week 10, 1 week before the planned AMA",
          healthy: "Every brand-named account reference and promotional thread title is caught and rewritten before the plan ships.",
          unhealthy: "The plan ships with a brand-named account, and the account gets removed and the domain flagged within the first week.",
          interpret: "A participation plan is only as good as its worst-case mistake; one brand-named account can undo months of karma-building.",
          soWhat: [
            {
              symptom: "A draft plan still references a brand-named account or a promotional thread title",
              action: "Run the full plan against the Common Mistakes checklist before the first post goes live",
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
            role: "Track the 12-week comment cadence, running 9:1 ratio, and karma/age gate",
            why: "Free, sufficient for a week-by-week tracker with no live API needed",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Reddit",
            role: "Verify account naming, thread title phrasing, and subreddit rules directly before scheduling",
            why: "The actual rule text and account-safety checks only exist on the platform",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 12-week, non-promotional Reddit participation calendar for 3 subreddits, with the running 9:1 ratio tracked weekly and a mistake-proofing checklist applied before launch.",
      sampleOutput:
        "Go Digit General Insurance, Reddit participation calendar (excerpt)\n\nWeek 4: r/PersonalFinanceIndia -- answered a question on claim settlement ratios (helpful #7)\nWeek 11: 1st brand-referencing comment -- answered a direct question about digital-first claim processing (ratio 19:1)\nMod outreach: scheduled week 10, ahead of a planned AMA in week 13",
      successCriteria: [
        "The calendar never schedules a brand-referencing comment before the 9:1 ratio and 90-day/1,000-karma gate are both satisfied",
        "No planned account name or thread title violates the lesson's Common Mistakes list",
        "Includes a mod-outreach step at least 1 week ahead of any coordinated activity",
      ],
      portfolioReady: true,
      stretch: "Extend the calendar to a 4th subreddit and show how the 9:1 ratio resets independently per community.",
    },
  ],

  "bluesky": [
    {
      id: "bluesky-identity-and-feed-brief",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building Awfis's Bluesky Identity and Feed-Mapping Brief",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Awfis Space Solutions' current unverified Bluesky handle and an upcoming coworking-membership launch, build a one-page launch brief that fixes the identity layer and ranks five candidate custom feeds worth targeting before a single post goes out.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the social lead at Awfis Space Solutions, India's largest flexible workspace operator (NSE: AWFIS), piloting Bluesky ahead of a new coworking-membership push aimed at freelancers, startups, and remote-first teams.",
      brief:
        "The account currently posts as @awfis.bsky.social with no domain verification and no feed strategy. Fix the identity layer first, then map the five custom feeds most likely to include Awfis content, before writing a single post.",
      mode: "build",
      conceptsCovered: ["Domain-verified identity as the foundation for feed discovery"],
      steps: [
        {
          stepId: "step-1-identity-and-feed-brief",
          concept: "Domain-verified identity as the foundation for feed discovery",
          lessonAnchor: "step-1-establish-your-identity-layer",
          theoryRecap:
            "A `@yourbrand.com` handle via DNS TXT record is free, takes under 10 minutes, and functions as instant verification. Unverified `@username.bsky.social` handles get flagged as potential impersonation by community labelers, and curators are less likely to include an unverified account in a niche feed.",
          question:
            "Awfis posts as @awfis.bsky.social today and wants to launch a coworking-membership campaign next quarter. What has to happen before the first campaign post, and which five custom feeds should the brief target?",
          toolName: "Google Sheets",
          where: "A shared launch-brief tab, one row per action item and one row per candidate feed.",
          procedure: [
            "Row 1: flag the handle switch to a DNS-verified @awfis.com, owner marked as 'developer' (needs DNS access), effort 5 minutes of actual TXT-record work plus propagation wait.",
            "List five candidate custom feed categories relevant to a coworking brand: 'Startup India', 'Remote Work / WFH', 'SaaS Founders', 'Freelancer Life', a regional feed like 'Bangalore Tech'.",
            "For each candidate feed, note whether it uses keyword-matching or human curation (visible in the feed's own description on the app), since promotional posts rarely survive human-curated feeds.",
            "Rank the five feeds by estimated subscriber relevance to Awfis's target buyer (startup founders and remote teams), not by raw subscriber count alone.",
          ],
          outputSample:
            "AWFIS BLUESKY LAUNCH BRIEF (excerpt)\n\nIDENTITY\n  Current: @awfis.bsky.social (unverified) -> flagged risk\n  Target: @awfis.com via DNS TXT record, owner: developer, effort: 5 min config + propagation\n\nFEED TARGETS (ranked)\n  1. Startup India (keyword-matched, high founder overlap)\n  2. Remote Work / WFH (human-curated, strong topical fit)\n  3. SaaS Founders (keyword-matched, adjacent audience)\n  4. Freelancer Life (human-curated, direct buyer overlap)\n  5. Bangalore Tech (keyword-matched, regional relevance)",
          healthy: "A ranked five-feed list plus a scheduled DNS verification task, both dated before the first campaign post.",
          unhealthy: "Posting campaign content from an unverified handle into no mapped feed, hoping the general timeline surfaces it.",
          interpret:
            "Identity and feed mapping are prerequisites, not parallel workstreams. An unverified handle undermines trust in curated feeds even when the content itself would otherwise qualify.",
          soWhat: [
            {
              symptom: "Campaign launch date is set but the handle is still unverified",
              action: "File the DNS TXT record change with the developer at least one week before launch",
              effort: "5 min",
            },
            {
              symptom: "No ranked feed list exists before the first post",
              action: "Build the five-feed brief using this procedure before writing any campaign copy",
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
            role: "Build and rank the identity-and-feed launch brief",
            why: "Free, no account friction, easy to share with the developer handling DNS verification",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page Bluesky launch brief: a domain-verification action item plus five candidate custom feeds ranked by relevance to the campaign audience.",
      sampleOutput:
        "SULA VINEYARDS BLUESKY LAUNCH BRIEF (excerpt)\n\nIDENTITY\n  Current: @sulavineyards.bsky.social (unverified)\n  Target: @sulavineyards.com via DNS TXT record, owner: developer, effort: 5 min\n\nFEED TARGETS (ranked)\n  1. Wine & Spirits India (human-curated, direct category fit)\n  2. Slow Travel India (keyword-matched, tasting-room tourism overlap)\n  3. Maharashtra Tourism (regional, human-curated)\n  4. Food & Beverage Founders (keyword-matched, trade audience)\n  5. Weekend Getaways (keyword-matched, broad consumer reach)",
      successCriteria: [
        "Flags the unverified handle as a blocking issue before any campaign content ships",
        "Ranks exactly five candidate feeds with a stated reason for each",
      ],
      portfolioReady: true,
    },
    {
      id: "bluesky-feed-fit-and-reply-audit",
      tier: "core",
      archetype: "audit",
      title: "The Curation Call: Auditing Yatra's Feed Fit and Reply Engagement",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a slate of draft posts and a week of reply-engagement numbers, decide which posts would survive human-curated feed inclusion and whether the account's reply investment is healthy or a vanity-metrics trap.",
      companyId: "yatra-online",
      scenario:
        "You're the social strategist at Yatra Online, the Nasdaq-listed Indian online travel agency (NASDAQ: YTRA), auditing the first month of a Bluesky pilot aimed at budget and mid-market travelers.",
      brief:
        "Yatra has five draft posts queued for a 'Slow Travel India' human-curated feed and one week of engagement data. Decide which posts would actually survive curation, and whether the reply numbers show healthy community engagement or a vanity-metrics problem.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching content to a feed's explicit curation rules",
        "Reading reply-to-like ratio as the real amplification signal",
      ],
      steps: [
        {
          stepId: "step-1-feed-curation-fit",
          concept: "Matching content to a feed's explicit curation rules",
          lessonAnchor: "step-3-post-content-that-earns-feed-inclusion",
          theoryRecap:
            "Each custom feed has curation rules, keyword matching, human curation, or engagement signals. Promotional content rarely survives human curation; educational, opinionated, or data-driven posts do.",
          question:
            "Given five draft posts queued for the human-curated 'Slow Travel India' feed, which ones would a human curator actually include?",
          toolName: "Google Sheets",
          where: "A five-row content queue with a 'promotional vs. educational' column and a curator-fit verdict column.",
          procedure: [
            "List the five drafts: (1) '20% off Goa packages this week', (2) 'How railway sleeper class actually works for first-timers', (3) 'We just launched a new app feature', (4) 'The 6 most underrated hill stations within a night train of Delhi', (5) 'Book now, prices rising Friday'.",
            "Tag each as promotional or educational/data-driven based on the lesson's Step 3 framing.",
            "Mark a curator-fit verdict: survives curation, or gets filtered out as promotional noise.",
            "Rewrite the two flagged promotional posts into an educational frame before requeuing them.",
          ],
          outputSample:
            "FEED FIT AUDIT: Slow Travel India (human-curated)\n\nSURVIVES CURATION\n  2. How railway sleeper class works for first-timers (educational)\n  4. 6 underrated hill stations within a night train of Delhi (data-driven)\n\nFILTERED OUT\n  1. 20% off Goa packages this week (promotional)\n  3. We just launched a new app feature (promotional, product news)\n  5. Book now, prices rising Friday (promotional, urgency bait)",
          healthy: "3 of 5 drafts rewritten or held back before queueing, only genuinely educational posts sent to a human-curated feed.",
          unhealthy: "All five drafts queued as written, with promotional posts silently filtered out by curators and never explained to the team.",
          interpret:
            "A human-curated feed is not a paid placement, it is earned inclusion. Posts that read as ads get filtered regardless of how well-targeted the audience is.",
          soWhat: [
            {
              symptom: "Promotional drafts keep getting silently excluded from curated feeds",
              action: "Run every draft through a promotional-vs-educational tag before queueing, not after",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-reply-engagement-health",
          concept: "Reading reply-to-like ratio as the real amplification signal",
          lessonAnchor: "step-6-invest-30-minutes-of-reply-time-per-post",
          theoryRecap:
            "A post with 50 replies and 10 likes signals more community health than a post with 200 likes and 2 replies, because the default Following feed surfaces conversation threads. Reply time is not optional, it is the primary amplification mechanism.",
          question:
            "Yatra's top post this week has 340 likes and 4 replies. A smaller post has 28 likes and 31 replies. Which one is the actual distribution win, and what should next week's reply-time budget look like?",
          toolName: "Google Sheets",
          where: "A weekly post-performance tab with likes, replies, and reply-time-invested columns.",
          procedure: [
            "Log both posts' like and reply counts side by side.",
            "Compute reply-to-like ratio for each: 4/340 = 0.01 vs. 31/28 = 1.1.",
            "Cross-check reply-time-invested: the high-like post got 0 minutes of team reply engagement, the high-reply post got 35 minutes.",
            "Decide the following week's reply-time allocation based on which pattern actually built thread surfacing, not raw like count.",
          ],
          outputSample:
            "REPLY ENGAGEMENT AUDIT, week 3\n\nPost A: 340 likes, 4 replies, 0 min team reply time -> ratio 0.01\nPost B: 28 likes, 31 replies, 35 min team reply time -> ratio 1.1\n\nVERDICT: Post B is the real amplification win despite fewer likes.\nNEXT WEEK: budget 30 min reply time per post, prioritize threads already showing early replies within the first hour.",
          healthy: "Reply-time budget scales with early reply signals, not with which post already has the most likes.",
          unhealthy: "Team spends reply time on the highest-like post regardless of whether it's generating conversation.",
          interpret:
            "Likes are a passive signal Bluesky's algorithm barely rewards. Replies are the mechanism that surfaces content to a repliers' entire follower graph.",
          soWhat: [
            {
              symptom: "High-like posts get all the team's attention while high-reply posts are ignored",
              action: "Reallocate the 30-minute reply budget to whichever post shows early reply momentum, not highest likes",
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
            role: "Log post drafts, curation verdicts, and weekly reply-to-like ratios",
            why: "Free, sufficient for weekly manual tracking on a pilot account",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A feed-fit audit table for five draft posts plus a reply-engagement health readout with next week's reply-time budget recommendation.",
      sampleOutput:
        "AWFIS SPACE SOLUTIONS, WEEK 2 FEED + REPLY AUDIT (excerpt)\n\nFEED FIT\n  Survives curation: 'How hot-desking actually changes your commute math' (educational)\n  Filtered out: 'Sign up this week for a free day pass' (promotional)\n\nREPLY HEALTH\n  Post A: 210 likes, 3 replies -> ratio 0.01, low priority next week\n  Post B: 19 likes, 22 replies -> ratio 1.16, reply-time budget reallocated here",
      successCriteria: [
        "Correctly separates promotional from educational drafts using the lesson's curation framework",
        "Identifies the higher reply-to-like ratio post as the real amplification win, not the higher-like post",
      ],
      portfolioReady: true,
    },
  ],
  "short-form-video-algorithms": [
    {
      id: "short-form-video-retention-export-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Iterate-or-Kill Call: Auditing Sula's Video Performance Export",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a five-video TikTok performance export with 3-second retention, completion rate, shares, and saves, decide which videos the algorithm is rewarding, which are dying at the hook, and what to do about each.",
      companyId: "sula-vineyards",
      scenario:
        "You're the content lead at Sula Vineyards, India's largest listed wine producer (NSE: SULA), reviewing the first five TikTok videos from a new tasting-room content series.",
      brief:
        "Five videos, one export: views, 3-second retention %, completion %, shares, and saves. Decide which videos earned wider distribution and which never made it past the algorithm's initial test batch.",
      mode: "diagnostic",
      conceptsCovered: ["Reading 3-second retention and completion rate as the algorithm's real ranking signals"],
      steps: [
        {
          stepId: "step-1-retention-completion-audit",
          concept: "Reading 3-second retention and completion rate as the algorithm's real ranking signals",
          lessonAnchor: "hook-writing-and-the-three-second-rule",
          theoryRecap:
            "The algorithm distributes a new video to a small test audience first. If that group watches to completion and engages, distribution widens; if they scroll away in the first three seconds, distribution halts. Watch time and completion rate outrank likes and comments as ranking signals.",
          question:
            "Which of these five tasting-room videos got wider distribution because of what happens in the first three seconds, and which ones stalled?",
          toolName: "Google Sheets",
          where: "A five-row export: video ID, views, 3-sec retention %, completion %, shares, saves.",
          procedure: [
            "Import the export: V1 (12,400 views, 71% 3-sec retention, 48% completion), V2 (890 views, 31% 3-sec retention, 9% completion), V3 (34,200 views, 68% 3-sec retention, 52% completion), V4 (1,100 views, 29% 3-sec retention, 11% completion), V5 (8,600 views, 66% 3-sec retention, 44% completion).",
            "Sort by 3-second retention, the strongest predictor of whether the video escaped the initial test batch.",
            "Flag any video under 40% 3-sec retention as a hook failure, regardless of its production quality.",
            "Cross-check completion rate against views to confirm the retention pattern matches the distribution outcome.",
          ],
          outputSample:
            "SULA TIKTOK PERFORMANCE AUDIT (5 videos)\n\nESCAPED TEST BATCH (3-sec retention > 60%)\n  V3: 34,200 views, 68% retention, 52% completion\n  V1: 12,400 views, 71% retention, 48% completion\n  V5: 8,600 views, 66% retention, 44% completion\n\nSTALLED AT HOOK (3-sec retention < 40%)\n  V2: 890 views, 31% retention, 9% completion\n  V4: 1,100 views, 29% retention, 11% completion",
          healthy: "Videos with 60%+ 3-second retention correlate with 8-30x the view count of videos under 40% retention.",
          unhealthy: "Treating a low-view video's problem as a distribution-luck issue instead of a hook-quality issue visible in the first three seconds.",
          interpret:
            "Views are a downstream effect, not the diagnostic signal. The 3-second retention number tells you whether the hook itself is the problem before the algorithm ever gets to test completion.",
          soWhat: [
            {
              symptom: "Two of five videos stall under 1,200 views with sub-40% 3-sec retention",
              action: "Re-cut V2 and V4 to remove any brand intro or slow setup before the first 3 seconds, then re-post as new videos",
              effort: "half day",
            },
            {
              symptom: "High-performing videos aren't being analyzed for what worked",
              action: "Document the opening 3 seconds of V1, V3, and V5 as a hook template for the next batch",
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
            role: "Sort and audit the video performance export",
            why: "Free, sufficient for a five-to-twenty video weekly audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A retention audit splitting the video slate into 'escaped test batch' and 'stalled at hook', with a re-cut recommendation for each stalled video.",
      sampleOutput:
        "UTKARSH SMALL FINANCE BANK TIKTOK AUDIT (excerpt)\n\nESCAPED TEST BATCH\n  V2: 21,000 views, 64% 3-sec retention, 41% completion\n\nSTALLED AT HOOK\n  V5: 640 views, 22% 3-sec retention, 6% completion\n  Cause: opens with a 4-second branded logo animation before any content",
      successCriteria: [
        "Correctly separates videos by 3-second retention threshold rather than raw view count",
        "Ties each stalled video to a specific hook-level fix, not a vague 'needs more views' note",
      ],
      portfolioReady: true,
    },
    {
      id: "short-form-video-script-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Defects: Tearing Down a Utkarsh Small Finance Bank Video Script",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic-but-realistic 45-second TikTok video script and shot list, identify which elements actively suppress algorithmic distribution versus which are simply stylistic choices.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're reviewing a draft TikTok script from Utkarsh Small Finance Bank, an RBI-licensed small finance bank listed on the NSE and BSE (UTKARSHBNK), before it goes into production for a savings-account awareness series.",
      brief:
        "One 45-second script and shot list, written by an agency team new to short-form video. Find the defects that will hurt distribution, not just the ones that look unpolished.",
      mode: "teardown",
      conceptsCovered: ["Spotting distribution-suppressing defects versus stylistic non-issues in a video script"],
      teardownItems: [
        {
          itemId: "utkarsh-savings-script-v1",
          specimen:
            "SHOT LIST, 'Why Your Savings Account Should Work Harder' (45 sec)\n\n0:00-0:04 — Utkarsh Small Finance Bank logo animation, tagline voiceover: 'Welcome back to our channel.'\n0:04-0:10 — Branch manager on camera: 'Hi everyone, today we're going to talk about interest rates.'\n0:10-0:28 — Manager explains compounding interest using a whiteboard, camera static, no on-screen captions, background music with no relevance to the topic.\n0:28-0:38 — Manager reads out three account features from a printed brochure held up to camera.\n0:38-0:45 — End card: 'Visit your nearest branch to learn more.' No caption, no on-screen text, hashtags in caption: #bank #finance #money #savings #interest #investment #wealth #india #2026 #trending #viral #fyp",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read the shot list and caption. Which choices are actual distribution-suppressing defects the lesson would flag, and which are simply unpolished style that doesn't hurt reach?",
          answerKey: [
            {
              defect: "4-second logo animation and 'welcome back' greeting before any content starts",
              severity: "critical",
              whyItMatters:
                "The first three seconds decide whether the algorithm's test audience keeps watching. A logo intro burns the entire hook window before the value proposition even appears.",
              lessonRef: "hook-writing-and-the-three-second-rule",
              owner: "you",
            },
            {
              defect: "No on-screen captions during the compounding-interest explanation",
              severity: "critical",
              whyItMatters:
                "Most short-form video is watched muted. Relying on the audio track alone to carry the core explanation loses viewers who never hear it, directly hurting completion rate.",
              lessonRef: "hook-writing-and-the-three-second-rule",
              owner: "you",
            },
            {
              defect: "Static camera with no jump cuts across a 45-second video",
              severity: "moderate",
              whyItMatters:
                "Slow pacing without jump cuts to remove dead air reduces watch-time-to-length ratio, one of the two primary ranking signals alongside completion.",
              lessonRef: "optimizing-for-watch-time-and-completion",
              owner: "either",
            },
            {
              defect: "11 generic hashtags including #viral, #trending, #fyp with no topic-specific keywords spoken or captioned",
              severity: "moderate",
              whyItMatters:
                "Generic hashtags do nothing for the platform's search-indexing behavior. The script never says or captions terms like 'savings account interest rate' that Gen-Z users actually search for.",
              lessonRef: "search-engine-optimization-for-social-apps",
              owner: "you",
            },
          ],
          distractors: [
            "The branch manager appears on camera instead of using a professional voiceover artist",
            "The video runs 45 seconds instead of 15 seconds",
            "The background music has no specific licensed artist attached",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect against severity and the lesson concept it maps to",
            why: "Free, sufficient for a single-script teardown exercise",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Mock up a revised opening 3-second frame with captions added",
            why: "Free tier supports quick caption-overlay mockups for the revised shot list",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect list scored by severity, distinguishing distribution-suppressing problems from stylistic non-issues, plus a one-line fix for each critical defect.",
      sampleOutput:
        "SULA VINEYARDS SCRIPT TEARDOWN (excerpt)\n\nCRITICAL: 3-second branded intro before any content -> fix: cut straight to the tasting-room hook\nCRITICAL: no captions during the pairing explanation -> fix: add burned-in captions for the full voiceover\nMODERATE: static single-angle shot for 40 seconds -> fix: add 3-4 jump cuts to reset pacing\nNOT A DEFECT: on-camera talent is a winemaker, not a trained host",
      successCriteria: [
        "Correctly flags the branded intro and missing captions as critical, not cosmetic, defects",
        "Does not flag a genuine non-issue (an on-camera speaker, video length, unlicensed music) as a distribution defect",
      ],
      portfolioReady: true,
    },
  ],

  "dark-social-strategy": [
    {
      id: "dark-social-strategy-utm-share-kit-mini",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building a Trackable Dark-Social Share Kit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Build a consistent UTM naming convention for every channel a piece of content will be shared through, and flag the one link type that will always leak into 'direct' traffic no matter what.",
      companyId: "blue-bottle-coffee",
      scenario:
        "You're the content marketer at Blue Bottle Coffee. Your new home-brewing guide is getting forwarded constantly, WhatsApp, Slack, email, but every one of those visits shows up in your analytics as anonymous direct traffic.",
      brief:
        "Design a UTM tagging convention covering every place the guide's link will go out this week, then identify the single link readers can copy-paste that no tagging convention will ever catch.",
      mode: "build",
      conceptsCovered: ["Consistent UTM tagging for every shareable link"],
      steps: [
        {
          stepId: "step-1-utm-convention",
          concept: "Consistent UTM tagging for every shareable link",
          lessonAnchor: "measuring-dark-social-the-toolkit",
          theoryRecap:
            "The lesson's toolkit section says any link without a UTM parameter shows up as direct traffic, so every distributed link needs consistent source/medium/campaign tagging before it goes out.",
          question:
            "This week the brewing guide goes out three ways: an Instagram bio link, a WhatsApp broadcast to your newsletter list, and a plain link sitting in the blog post's footer for readers to copy and paste themselves. Which of these can actually be UTM-tagged before it ships?",
          toolName: "Google Sheets",
          where: "A shared UTM-builder spreadsheet with columns for source, medium, campaign, and the final tagged URL.",
          procedure: [
            "List every planned distribution point for the guide this week: Instagram bio, WhatsApp broadcast, blog footer copy-link",
            "Assign source=instagram/whatsapp/direct-copy, medium=bio/broadcast/organic, campaign=brewing-guide-launch to each row",
            "Build the tagged URL for the Instagram and WhatsApp rows using a formula, not by hand, so the convention stays consistent",
            "Mark the blog-footer copy-link row as untaggable, since a reader who copies it manually will strip or ignore any parameter you add",
          ],
          outputSample:
            "UTM Tracking Sheet, Brewing Guide Launch\n\nRow 1: source=instagram, medium=bio, campaign=brewing-guide-launch\n  URL: .../brewing-guide?utm_source=instagram&utm_medium=bio&utm_campaign=brewing-guide-launch\nRow 2: source=whatsapp, medium=broadcast, campaign=brewing-guide-launch\n  URL: .../brewing-guide?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=brewing-guide-launch\nRow 3: source=UNTAGGABLE, medium=blog-footer-copy-link\n  Note: flagged for the survey/share-button fix, not a UTM fix",
          healthy:
            "Every link you control (bio, broadcast) is tagged; the one link you don't control (footer copy-paste) is explicitly flagged, not silently ignored.",
          unhealthy:
            "Only the Instagram bio link gets tagged because it was the easiest one to remember; WhatsApp and the footer link both stay bare and vanish into 'direct'.",
          interpret:
            "An untagged link doesn't just fail to track dark social, it actively hides it inside your direct-traffic number, making the whole channel invisible instead of just unmeasured.",
          soWhat: [
            {
              symptom: "Direct traffic silently contains several unrelated channels mixed together",
              action: "Tag every link you distribute yourself before it ships, and separately flag links you don't control",
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
            role: "Build and store the UTM naming convention for every distribution channel",
            why: "Free, no account friction, and a formula-driven sheet keeps the tagging convention consistent across the whole team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A UTM naming-convention spreadsheet covering every planned share channel for the guide, with the one untrackable link explicitly flagged rather than ignored.",
      sampleOutput:
        "Peet's Coffee, Cold Brew Guide UTM Sheet (excerpt)\n\nsource=instagram, medium=bio, campaign=cold-brew-guide\nsource=email, medium=newsletter, campaign=cold-brew-guide\nsource=UNTAGGABLE, medium=blog-footer-copy-link, note='route through survey question instead'",
      successCriteria: [
        "Every self-controlled distribution link gets a distinct, consistent UTM tag",
        "The untaggable copy-paste link is explicitly identified rather than silently left out",
      ],
      portfolioReady: true,
    },
    {
      id: "dark-social-strategy-attribution-audit-core",
      tier: "core",
      archetype: "audit",
      title: "The Vanishing Traffic Audit: Finding Dark Social in a Real Analytics Export",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a week of session data by source and day for a new pricing guide, separate a genuine dark-social wave from an ordinary paid-social spike, then recommend which two pages deserve tracking investment first.",
      companyId: "stoneco",
      scenario:
        "You're the growth analyst at StoneCo, the Brazilian merchant-payments fintech, reviewing last week's traffic to a new small-business pricing guide after 'direct' sessions spiked.",
      brief:
        "Read the daily session export, tell dark social apart from a paid-social spike using the shape of the curve, then rank three landing pages by how urgently each needs share tracking.",
      mode: "diagnostic",
      conceptsCovered: [
        "Spotting dark social from the shape of a direct-traffic spike",
        "Prioritizing which pages get share tracking first",
      ],
      steps: [
        {
          stepId: "step-1-wave-pattern",
          concept: "Spotting dark social from the shape of a direct-traffic spike",
          lessonAnchor: "identifying-dark-social-in-your-analytics",
          theoryRecap:
            "The lesson says dark social arrives in waves, fastest in the first few hours then tapering as it circulates slower networks, while a paid-social spike peaks fast and drops sharply once the campaign budget or feed placement ends.",
          question:
            "Direct sessions to /guia-de-precos-pme: 420 on day 1, then 310, 240, 190, 150 over the next four days. Paid-social sessions to the same page: 380 on day 1, then 90, 40, 20, 15. Which curve is the dark-social pattern, and which is the paid campaign winding down?",
          toolName: "Google Sheets",
          where: "The exported session-by-day-by-source table, pivoted into a line chart per source.",
          procedure: [
            "Import the export and build a pivot table of sessions by day, split by source",
            "Chart the direct-traffic line and the paid-social line side by side",
            "Compare decay rates: a slow multi-day taper points to dark social, a sharp one- or two-day drop points to a paid or referral spike ending",
            "Confirm by checking whether the paid campaign's scheduled end date lines up with the sharp drop",
          ],
          outputSample:
            "Day 1  2  3  4  5\nDirect:  420 310 240 190 150  (slow taper, ~25%/day)\nPaid:    380  90  40  20  15  (sharp drop, campaign ended day 1 evening)",
          healthy:
            "Correctly reads the 420->150 direct-traffic taper as dark social continuing to circulate, and the 380->15 paid line as a campaign that simply ended.",
          unhealthy:
            "Treats both curves as 'the campaign working,' or dismisses the direct-traffic taper as unexplained noise instead of a trackable pattern.",
          interpret:
            "A slow taper in direct traffic is not noise, it is dark social sharing decaying naturally as the guide moves through progressively smaller private networks.",
          soWhat: [
            {
              symptom: "Direct traffic spikes and slowly decays after every content launch, unexplained",
              action: "Log the decay shape each time and treat any multi-day taper as a dark-social signal worth instrumenting",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-prioritize-tracking",
          concept: "Prioritizing which pages get share tracking first",
          lessonAnchor: "measuring-dark-social-the-toolkit",
          theoryRecap:
            "The lesson's toolkit section frames branded links, share buttons, and copyable stat callouts as an investment, best spent on the content already generating the most untracked traffic.",
          question:
            "Three pages have untracked-direct-session totals this month: the pricing guide (1,310), the careers page (90), and the product changelog (40). With budget for one round of share-tracking instrumentation, where do you start?",
          toolName: "Google Sheets",
          where: "The same session export, now grouped by landing page instead of by day.",
          procedure: [
            "Group untracked direct sessions by landing page for the full month",
            "Rank pages by untracked-session volume",
            "Recommend branded short links and a share survey for the top page only, not all three",
            "Note the other two pages as 'monitor, revisit next quarter' rather than instrumenting them now",
          ],
          outputSample:
            "Untracked direct sessions by page (30 days)\n1. /guia-de-precos-pme: 1,310\n2. /carreiras: 90\n3. /changelog: 40\n\nRecommendation: instrument the pricing guide first; the other two don't yet justify the setup cost.",
          healthy: "Instrumentation budget goes to the pricing guide, the page carrying 93% of the untracked volume.",
          unhealthy: "Spreads tracking evenly across all three pages, spending equal effort on a page with 40 untracked sessions and one with 1,310.",
          interpret:
            "Share-tracking setup has a fixed cost per page, so it only pays off on pages where the untracked volume is large enough to justify it.",
          soWhat: [
            {
              symptom: "Tracking effort spread thin across many low-traffic pages",
              action: "Rank pages by untracked-session volume and instrument only the top one or two",
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
            role: "Pivot and chart the analytics export by day and by page",
            why: "Free, and pivot tables are enough to reveal both the wave pattern and the page ranking without a specialized tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page attribution memo identifying which spike is dark social and which two pages should get share tracking first, ranked by untracked-session volume.",
      sampleOutput:
        "Nubank, Traffic Attribution Memo (excerpt)\n\nFinding: the /guia-taxas direct-traffic spike (610 -> 480 -> 350 -> 260 over 4 days) is a dark-social wave, not noise; paid social on the same page ended day 1 and dropped to near-zero by day 2.\n\nRecommendation: instrument /guia-taxas with a branded share link and a one-question intake survey before the next content push.",
      successCriteria: [
        "Correctly separates the dark-social taper from the paid-social drop using decay shape",
        "Ranks landing pages by untracked-session volume and recommends instrumenting only the top page",
      ],
      portfolioReady: true,
    },
  ],
  "social-listening-advanced": [
    {
      id: "social-listening-advanced-sov-audit-mini",
      tier: "mini",
      archetype: "audit",
      title: "Reading a Share-of-Voice Report Before You Trust It",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a weekly Share of Voice export across a 5-brand competitive set broken out by audience segment, find where the brand is actually strong even though the blended overall number looks flat.",
      companyId: "tac-security",
      scenario:
        "You're the marketing analyst at TAC Security, benchmarking Share of Voice against four competitors after a product launch, and the headline number hasn't moved.",
      brief:
        "Don't stop at the blended SOV number. Segment it by audience to find where the launch actually changed the conversation.",
      mode: "diagnostic",
      conceptsCovered: ["Segmenting Share of Voice by audience instead of trusting one blended number"],
      steps: [
        {
          stepId: "step-1-sov-segment",
          concept: "Segmenting Share of Voice by audience instead of trusting one blended number",
          lessonAnchor: "share-of-voice-measure-and-own-it",
          theoryRecap:
            "The lesson says to benchmark SOV by audience segment, because a brand can be strong in one segment's conversation and invisible in another while the blended total looks unchanged.",
          question:
            "Overall SOV moved from 11% to 12% this month, barely worth reporting. Segmented by audience, SOV in enterprise-security discussions moved from 9% to 21%, while SOV in SMB-security discussions dropped from 13% to 8%. What does the blended number hide?",
          toolName: "Google Alerts",
          where: "A weekly mention log, tagged by audience segment and tallied in a spreadsheet.",
          procedure: [
            "Pull the week's mentions for your brand and the 4-competitor set",
            "Tag each mention's audience segment (enterprise vs. SMB) based on the source and discussion context",
            "Calculate SOV separately within each segment, not just overall",
            "Compare segment-level trends to the blended trend to see what's actually driving or masking the overall number",
          ],
          outputSample:
            "SOV by segment, this month vs. last\n\nOverall: 11% -> 12% (looks flat)\nEnterprise-security: 9% -> 21% (real launch win)\nSMB-security: 13% -> 8% (quietly losing ground)",
          healthy: "Reports both segment trends, flags the SMB decline as something to act on even though overall SOV rose.",
          unhealthy: "Reports only the blended 11%->12% figure and calls the launch a modest success.",
          interpret:
            "A blended SOV number can hide a real win and a real loss happening at the same time, canceling each other out in the topline metric.",
          soWhat: [
            {
              symptom: "SOV trend looks flat month over month despite a major launch",
              action: "Re-run SOV segmented by audience before concluding the launch had no effect",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Alerts",
            role: "Catch new mentions of your brand and each competitor as they're indexed",
            why: "Free and requires no setup beyond a query per brand",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Tag each mention by audience segment and calculate SOV by segment",
            why: "Free, and a simple pivot is enough to split a 5-brand mention set by segment",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brandwatch",
            role: "Automate mention collection and segment tagging at a scale Google Alerts can't match",
            why: "Enterprise-grade query syntax and larger source coverage once mention volume outgrows manual tagging",
            required: false,
            fallback: "Google Alerts plus manual tagging in Google Sheets covers the same workflow at lower mention volume",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A segmented SOV table showing where the brand actually gained or lost ground, alongside the blended figure.",
      sampleOutput:
        "Freshworks, SOV by Segment (excerpt)\n\nOverall SOV: 14% -> 15%\nDeveloper-tools segment: 6% -> 17%\nIT-ops segment: 19% -> 14%\n\nTakeaway: the launch resonated with developers but lost ground in IT-ops; the blended number hid both.",
      successCriteria: [
        "Calculates SOV separately for at least two audience segments, not just the blended total",
        "Identifies a segment-level trend the blended number obscures",
      ],
      portfolioReady: true,
    },
    {
      id: "social-listening-advanced-crisis-signal-teardown-core",
      tier: "core",
      archetype: "teardown",
      title: "Crisis or Noise? Triaging Five Mention Spikes Before They Become a War Room",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given five synthetic mention-spike specimens, correctly separate real crisis signals from ordinary volume noise using the velocity, spread, and amplification framework, without over-reacting to raw volume alone.",
      companyId: "trade-desk",
      scenario:
        "You're the comms lead at The Trade Desk, the programmatic advertising DSP, monitoring mentions during a platform incident. Five spikes hit your dashboard within an hour and you have to triage before deciding which one gets escalated.",
      brief:
        "Score each spike against velocity, spread, and amplification, not against volume alone, and decide which ones actually need a response.",
      mode: "teardown",
      conceptsCovered: ["Detecting Crisis Signals"],
      teardownItems: [
        {
          itemId: "spike-1-real-outage",
          specimen:
            "Complaint volume: 40 mentions -> 380 mentions in 24 hours. Started on X, picked up on a Reddit programmatic-advertising subreddit within 6 hours, then covered by an ad-tech trade publication by hour 20. An ad-tech journalist with 45K followers posted about it at hour 18.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a crisis? Score it against velocity, spread, and amplification and decide whether to escalate.",
          answerKey: [
            {
              defect: "All three signals present: 9.5x volume climb in 24h, spread from X to Reddit to a trade publication, and amplification from a 45K-follower journalist",
              severity: "critical",
              whyItMatters: "The lesson's framework treats velocity, spread, and amplification together, not individually, as the trigger for escalation; this spike has all three.",
              lessonRef: "Detecting Crisis Signals",
              owner: "either",
            },
          ],
          distractors: [
            "The volume number alone (380 mentions) looks small compared to the brand's usual daily mention count, so it might seem safe to ignore on volume alone",
          ],
          partialCredit: true,
        },
        {
          itemId: "spike-2-chronic-pricing-friction",
          specimen:
            "Complaint volume: steady 60-70 mentions per day about pricing complexity, unchanged for 3 weeks. All mentions are confined to a single subreddit. No account over 500 followers has posted about it.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a crisis? Score it against velocity, spread, and amplification and decide whether to escalate.",
          answerKey: [
            {
              defect: "No velocity (flat for 3 weeks), no spread (single subreddit), no amplification (no notable accounts): known chronic friction, not an emerging crisis",
              severity: "cosmetic",
              whyItMatters: "Treating every negative mention as a crisis burns response capacity that should be reserved for genuinely accelerating signals.",
              lessonRef: "Detecting Crisis Signals",
              owner: "either",
            },
          ],
          distractors: [
            "The negative sentiment and consistent daily volume can look alarming on a raw mentions dashboard even though none of the three trigger conditions are met",
          ],
          partialCredit: true,
        },
        {
          itemId: "spike-3-viral-but-harmless",
          specimen:
            "A meme account with 2M followers posts an unrelated joke that happens to mention the brand's name. 900 mentions in 6 hours, spread across X, Instagram comments, and TikTok. Sentiment is neutral to positive; zero product complaints in the set.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a crisis? Score it against velocity, spread, and amplification and decide whether to escalate.",
          answerKey: [
            {
              defect: "Velocity, spread, and amplification are numerically all present, but there is no underlying complaint or defect being amplified, so it is not a crisis",
              severity: "cosmetic",
              whyItMatters: "The framework flags attention, not sentiment; a spike must carry a genuine negative signal to warrant escalation, not just reach.",
              lessonRef: "Detecting Crisis Signals",
              owner: "either",
            },
          ],
          distractors: [
            "The spike technically satisfies all three named conditions (velocity, spread, amplification) by the numbers alone, which makes it look like the textbook crisis case",
          ],
          partialCredit: true,
        },
        {
          itemId: "spike-4-enterprise-billing-outage",
          specimen:
            "One enterprise customer's public post about a billing-data outage climbs from 25 to 300 mentions in 24 hours. It moves from LinkedIn to a tech newsletter with 80,000 subscribers by hour 30.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a crisis? Score it against velocity, spread, and amplification and decide whether to escalate.",
          answerKey: [
            {
              defect: "12x volume climb, spread from LinkedIn into an 80K-subscriber newsletter, and amplification via a single high-reach source: escalate despite starting from one customer",
              severity: "critical",
              whyItMatters: "A crisis can start from a single credible account; velocity and spread matter more than how many people initially complained.",
              lessonRef: "Detecting Crisis Signals",
              owner: "either",
            },
          ],
          distractors: [
            "Because it started with just one customer's post, it can look like an isolated complaint rather than an emerging crisis",
          ],
          partialCredit: true,
        },
        {
          itemId: "spike-5-bot-noise",
          specimen:
            "200 mentions appear in 2 hours, all from accounts created in the last week with zero followers, reposting identical scraped text with no real engagement (likes, replies) on any post.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this a crisis? Score it against velocity, spread, and amplification and decide whether to escalate.",
          answerKey: [
            {
              defect: "Velocity is present numerically, but amplification is absent, zero-follower bot accounts have no real reach, so this is spam noise, not a crisis",
              severity: "cosmetic",
              whyItMatters: "A raw mention-count spike without real audience reach will trigger volume-only alerts and waste response time if not filtered for bot activity first.",
              lessonRef: "Detecting Crisis Signals",
              owner: "either",
            },
          ],
          distractors: [
            "A 5x mention spike in 2 hours is the fastest velocity of all five specimens, which makes it the most alarming one to look at on a raw dashboard",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Alerts",
            role: "Baseline mention monitoring to notice a spike is happening at all",
            why: "Free, and sufficient for a small team to spot volume changes before investing in a dedicated platform",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each spike's volume-over-time, channel spread, and top-account reach for scoring",
            why: "Free, and a simple log is enough to apply the velocity/spread/amplification framework by hand",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brand24",
            role: "Real-time spike alerts and reach estimates without manual logging",
            why: "Automates the volume-over-time and reach tracking that this exercise does manually in a spreadsheet",
            required: false,
            fallback: "Google Alerts plus a manually logged spreadsheet covers the same triage workflow at lower volume",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A triage memo classifying each of the 5 mention spikes as escalate/monitor/ignore, with the velocity-spread-amplification reasoning for each call.",
      sampleOutput:
        "Twilio, Incident Mention Triage (excerpt)\n\nSpike A (API status-page complaint): ESCALATE. 15->210 mentions in 18h, spread from X to Hacker News, amplified by a developer with 30K followers.\nSpike B (recurring pricing gripe, flat 3 weeks, one subreddit): MONITOR, no action this week.\nSpike C (bot repost cluster, zero-follower accounts): IGNORE, filtered as spam.",
      successCriteria: [
        "Correctly identifies both real-crisis specimens (spike-1, spike-4) using all three framework signals",
        "Correctly rules out both noise specimens (spike-2, spike-5) and the viral-but-harmless distractor (spike-3) without escalating on volume alone",
      ],
      portfolioReady: true,
    },
  ],

  "discord-for-brand-communities": [
    {
      id: "discord-for-brand-communities-launch-server-blueprint",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Launch-Week Blueprint: Designing a Lean Discord Server",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a coworking brand that wants to replace fragmented city-level WhatsApp groups with a single Discord server, design a lean 6-10 channel launch structure with role gating and a 3-bot plan, matching the lesson's starter architecture.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the community lead at Awfis Space Solutions, the Nasdaq-adjacent Indian coworking chain (200+ centres, 135,000+ seats) that IPO'd in 2024. Every city runs its own informal WhatsApp group; leadership wants one official Discord server before the next city launch.",
      brief:
        "Design the launch-week category and channel structure, define the role ladder, and name the three bots the server needs before day one, staying inside a 6-10 channel lean-launch limit.",
      mode: "build",
      conceptsCovered: ["Server Structure, Roles, and Bots"],
      steps: [
        {
          stepId: "step-1-server-skeleton",
          concept: "Server Structure, Roles, and Bots",
          lessonAnchor: "server-structure-roles-and-bots",
          theoryRecap:
            "The lesson's starter structure uses three categories (Start Here, Brand Core, Community), 6-10 channels total, a role ladder that unlocks access as members engage, and three non-negotiable bots: verification, role-assignment, and moderation.",
          question:
            "Awfis has 200+ centres, dozens of enterprise accounts, and members who want city-specific chat plus company-wide announcements. Design a launch structure that stays lean without losing the city-level use case.",
          toolName: "Google Sheets",
          where: "A new sheet with columns: category, channel, purpose, role gate, and owning bot.",
          procedure: [
            "List the three starter categories: Start Here, Brand Core, Community",
            "Under Start Here, add #welcome, #rules, #get-roles (public, no gate)",
            "Under Brand Core, add #announcements, #product-updates (company-wide, @Member gate)",
            "Under Community, add #general-chat, #introductions, plus one #city-{name} channel per active city, capped so total channels stay at or under 10",
            "Assign the verification bot to gate #general-chat behind a rules-agreement click",
            "Assign the role-assignment bot to let members self-select their city via reaction menu",
            "Assign the moderation bot to auto-flag spam links and banned words across all channels",
          ],
          outputSample:
            "AWFIS COMMUNITY SERVER, launch structure (9 channels)\n\nSTART HERE\n  #welcome (public)\n  #rules (public)\n  #get-roles (public, role-assignment bot menu)\n\nBRAND CORE (@Member gate, verification bot)\n  #announcements\n  #product-updates\n\nCOMMUNITY (@Member gate)\n  #general-chat\n  #introductions\n  #city-bengaluru\n  #city-delhi-ncr\n\nBOTS: Carl-bot (verification + moderation), a reaction-role bot (city + interest self-select)",
          healthy:
            "9 channels covering onboarding, company updates, and city chat, every channel gated by a bot, not a human moderator manually approving joins.",
          unhealthy:
            "One #city-{name} channel per every one of Awfis's 200+ centres created on day one, most sitting empty before any member exists there.",
          interpret:
            "Lean at launch means only the cities with enough members to sustain a conversation get their own channel; the rest share #general-chat until usage justifies a split.",
          soWhat: [
            {
              symptom: "Leadership wants a channel for every city immediately",
              action: "Launch with 2-3 highest-membership cities only, add more once each hits a real weekly-active threshold",
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
            role: "Draft and review the channel/role/bot structure before building it in Discord",
            why: "Free, shareable, and lets non-technical stakeholders sign off before any channel is created",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A launch-week Discord server blueprint for Awfis (2-3 categories, at most 10 channels, a role ladder, and a named 3-bot plan) ready to build directly in Discord.",
      sampleOutput:
        "Chewy, pet-parent community server (excerpt)\n\nSTART HERE\n  #welcome\n  #rules\n  #get-roles\n\nBRAND CORE\n  #announcements\n  #new-arrivals\n\nCOMMUNITY\n  #general-chat\n  #pet-photos\n  #vet-questions\n\nBOTS: verification bot gates #general-chat; role bot sorts members by pet type (dog/cat/other); moderation bot flags spam links.",
      successCriteria: [
        "Total channel count is between 6 and 10 at launch",
        "Every channel has an explicit role gate or is marked public",
        "All three required bot roles (verification, role-assignment, moderation) are named and assigned",
      ],
      portfolioReady: true,
    },
    {
      id: "discord-for-brand-communities-ghost-town-audit",
      tier: "core",
      archetype: "teardown",
      title: "The Ghost-Town Audit: Diagnosing a Dying Brand Server",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a snapshot of an underperforming brand Discord server, identify the structural and measurement defects that explain why a large server has gone quiet, and separate real defects from cosmetic non-issues.",
      companyId: "bansal-wire-industries",
      scenario:
        "You're auditing the distributor-and-dealer Discord server for Bansal Wire Industries, the Ghaziabad-headquartered steel wire manufacturer that IPO'd in 2024. The server has grown for a year but the sales team says nobody actually uses it.",
      brief:
        "Review three snapshots from the server's current state, flag every defect that explains the silence, and don't flag cosmetic details that only look wrong.",
      mode: "teardown",
      conceptsCovered: ["What Actually Drives Engagement Here"],
      teardownItems: [
        {
          itemId: "item-1-channel-sprawl",
          specimen:
            "Bansal Wire Distributor Hub, channel list (38 channels)\nCategories: Welcome (3), Product Lines (14, one per wire gauge/coating spec), Regional (18, one per sales region), General (3)\nActivity report: 31 of 38 channels have zero messages in the last 30 days. #general-chat has 4 messages this month, all from the same admin account posting price sheets.",
          specimenSource: "synthetic-realistic",
          prompt:
            "The server has 38 channels and steady member growth, but the sales team calls it dead. What's actually wrong here, and what would you cut or add first?",
          answerKey: [
            {
              defect: "Channel sprawl, 38 channels launched at once instead of the lean 6-10 channel start the lesson recommends",
              severity: "critical",
              whyItMatters:
                "One channel per wire gauge and per region fragments the small pool of active members so thin that no single channel ever has enough traffic to feel alive, which trains members to stop checking any of them.",
              lessonRef: "Server Structure, Roles, and Bots",
              owner: "you",
            },
            {
              defect: "No verification, role-assignment, or moderation bot in use; a human admin manually posts price sheets instead of automation handling routine updates",
              severity: "moderate",
              whyItMatters:
                "Without bots, onboarding and content posting depend entirely on one person's bandwidth, which is exactly the failure mode the lesson's three-bot trio exists to prevent.",
              lessonRef: "Server Structure, Roles, and Bots",
              owner: "developer",
            },
          ],
          distractors: [
            "Channel names use lowercase-with-hyphens formatting",
            "The welcome category has exactly 3 channels",
            "Members receive a default @Member role automatically on join",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-wrong-metric",
          specimen:
            "Bansal Wire Distributor Hub, monthly leadership report (excerpt)\n'Total server members: 6,140, up from 5,800 last month. Server growth remains strong and on track.'\nNo mention of weekly active members, message volume, or returning-participant rate anywhere in the report.",
          specimenSource: "synthetic-realistic",
          prompt: "Leadership sees this report and concludes the server is healthy. Are they right?",
          answerKey: [
            {
              defect: "Reporting total member count instead of weekly active members or returning-participant rate",
              severity: "critical",
              whyItMatters:
                "A server can grow in total members every month while going almost completely silent; total joins tell leadership nothing about whether the community is actually alive, and this report is actively hiding the ghost-town problem the sales team is reporting.",
              lessonRef: "What Actually Drives Engagement Here",
              owner: "you",
            },
          ],
          distractors: [
            "The report is dated the first of the month",
            "The percentage growth figure is calculated to one decimal place",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-no-live-touchpoint",
          specimen:
            "Bansal Wire Distributor Hub, events calendar: empty for the past two quarters. The only pinned content across all channels is a static PDF price catalog updated quarterly. No AMAs, demos, or scheduled calls have ever been hosted in the server.",
          specimenSource: "synthetic-realistic",
          prompt: "What single addition would most directly address the silence described by the sales team?",
          answerKey: [
            {
              defect: "No recurring live, scheduled touchpoint (a quarterly product-update AMA, a live demo of a new wire spec) to give members a reason to show up at a shared time",
              severity: "moderate",
              whyItMatters:
                "The lesson is explicit that scheduled, synchronous moments beat evergreen content on Discord; a static price PDF is exactly the kind of content a feed platform already does better, giving members no reason to prefer this server over email.",
              lessonRef: "What Actually Drives Engagement Here",
              owner: "you",
            },
          ],
          distractors: [
            "The price catalog is stored as a PDF instead of a Google Sheet",
            "The events calendar uses UTC instead of local time",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log every defect found across the three snapshots with severity and recommended fix",
            why: "Free, sortable, easy to hand to the sales team as an action list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log for the Bansal Wire distributor server (channel count, bot coverage, reported metric, and live-event cadence), each defect scored by severity with a one-line fix.",
      sampleOutput:
        "Zomato, delivery-partner Discord audit (excerpt)\n\nDEFECT: 22 city channels launched at once, 18 silent\nSEVERITY: critical\nFIX: Consolidate into 4 regional channels; split further only once a region passes 50 weekly-active members\n\nDEFECT: Report tracks total joins only\nSEVERITY: critical\nFIX: Add weekly-active and returning-participant columns to the monthly dashboard",
      successCriteria: [
        "Flags channel sprawl as the primary structural defect, not a secondary detail",
        "Identifies total-member count as the wrong health metric",
        "Correctly separates real defects from cosmetic distractors in all three items",
      ],
      portfolioReady: true,
    },
  ],
  "ai-influencers-virtual-creators": [
    {
      id: "ai-influencers-virtual-creators-category-fit-gutcheck",
      tier: "mini",
      archetype: "ai-critique",
      title: "The Category Fit Gut-Check",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a pitch to launch an AI virtual ambassador for a trust-dependent healthcare brand, apply the lesson's category-fit framework and full-disclosure gut check to reach a defensible go/no-go recommendation.",
      companyId: "yatharth-hospital",
      scenario:
        "You're on the marketing team at Yatharth Hospital & Trauma Care Services, the NCR hospital chain that IPO'd in 2023 and drives ~40% of revenue through government health-scheme empanelment (ESIS/ECHS/CGHS). An agency has pitched a '24/7 AI wellness ambassador' persona to promote scheme awareness across its Tier-2 hospitals.",
      brief:
        "Score the pitch against the lesson's works-vs-backfires framework, run the full-disclosure gut check, and write a one-paragraph go/no-go recommendation.",
      mode: "diagnostic",
      conceptsCovered: ["When It Makes Sense vs When It Backfires"],
      steps: [
        {
          stepId: "step-1-category-fit-score",
          concept: "When It Makes Sense vs When It Backfires",
          lessonAnchor: "when-it-makes-sense-vs-when-it-backfires",
          theoryRecap:
            "The lesson's rule: virtual personas tend to work in categories that already accept stylization (beauty, gaming, fashion) with disclosure built in from post one, and tend to backfire wherever the sale depends on 'a real person tried this,' like healthcare or finance. The final gut check: would the campaign survive a fully-disclosed version, on every single post?",
          question:
            "A hospital chain that earns patient trust through government-scheme empanelment is pitched a synthetic wellness ambassador. Does this pass or fail the category-fit and disclosure gut checks?",
          toolName: "Google Sheets",
          where: "A single-row scorecard: category trust-dependence, disclosure plan, gut-check verdict.",
          procedure: [
            "Score the category: healthcare is explicitly listed as a category where 'have you personally used this' is the implicit claim being sold",
            "Check the disclosure plan the agency proposed: none was specified beyond a bio mention",
            "Run the gut check: would a version disclosing 'this is an AI-generated persona' on every single post still work for scheme-awareness messaging",
            "Write the go/no-go recommendation with the specific lesson rule cited as the reason",
          ],
          outputSample:
            "YATHARTH HOSPITAL, AI ambassador pitch scorecard\n\nCategory trust-dependence: HIGH (healthcare, government-scheme trust)\nDisclosure plan: Bio-only, not per-post\nGut check (survives full disclosure?): NO, a synthetic persona recommending which health scheme to trust undermines the exact credibility the campaign needs\nVERDICT: NO-GO. Redirect budget to real patient testimonials with disclosed consent.",
          healthy:
            "A written no-go memo citing the specific category-fit rule, with a redirected budget recommendation.",
          unhealthy:
            "Approving the pitch because 'the agency says it tested well with a beauty client,' ignoring that beauty and healthcare sit on opposite ends of the trust-dependence spectrum.",
          interpret:
            "The lesson's framework isn't about whether the technology works, it's about whether the category rewards control (beauty, gaming) or punishes it (anything selling trust).",
          soWhat: [
            {
              symptom: "A vendor pitches an AI persona regardless of category",
              action: "Run the trust-dependence score before evaluating production quality or cost",
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
            role: "Build the one-row category-fit and disclosure scorecard",
            why: "Free, fast, and enough structure for a go/no-go decision memo",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-paragraph go/no-go recommendation memo for Yatharth Hospital's AI ambassador pitch, citing the specific category-fit rule that drove the decision.",
      sampleOutput:
        "Nykaa, AI beauty ambassador pitch scorecard\n\nCategory trust-dependence: LOW (beauty already accepts stylization, ~80-90% category adoption)\nDisclosure plan: Per-post AI label from launch\nGut check (survives full disclosure?): YES, an AI-generated makeup-look demo is expected content in this category\nVERDICT: GO. Proceed with disclosed persona for seasonal look drops.",
      successCriteria: [
        "Correctly identifies healthcare as a trust-dependent, backfire-prone category",
        "Applies the full-disclosure gut check explicitly, not just a general risk statement",
        "Recommendation cites the specific lesson rule, not a generic 'AI is risky' justification",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-influencers-virtual-creators-disclosure-compliance-audit",
      tier: "core",
      archetype: "audit",
      title: "The Disclosure Compliance Audit",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given three draft social posts from a proposed virtual-persona awareness campaign, identify every FTC Section 5 and state-law disclosure defect, and distinguish real violations from cosmetic non-issues.",
      companyId: "concord-biotech",
      scenario:
        "You're reviewing draft posts for Concord Biotech's patient-awareness division, the Ahmedabad-headquartered fermentation-based API manufacturer that IPO'd in 2023. Its agency has drafted a virtual persona, 'Dr. Aria,' to post general health-awareness content ahead of legal sign-off.",
      brief:
        "Audit three draft posts against the FTC's per-post disclosure requirement for synthetic personas and New York's AI Transparency in Advertising Act, flag every defect, and don't flag stylistic choices that aren't actually violations.",
      mode: "teardown",
      conceptsCovered: ["The Disclosure and Trust Risk"],
      teardownItems: [
        {
          itemId: "item-1-no-disclosure",
          specimen:
            "Draft post 1, Dr. Aria's account:\n'Did you know most people don't realize how their medication is actually made? I dove into the science behind API manufacturing this week and it's honestly fascinating. Follow for more!'\nNo disclosure of any kind, no mention that Dr. Aria is an AI-generated persona, no sponsorship label.",
          specimenSource: "synthetic-realistic",
          prompt: "Legal asks you to flag any disclosure problems with this draft before it's approved. What's wrong?",
          answerKey: [
            {
              defect: "Zero disclosure that Dr. Aria is a synthetic, non-human persona with a material connection to Concord Biotech",
              severity: "critical",
              whyItMatters:
                "The FTC's Endorsement Guides apply the same disclosure requirement to a virtual endorser as a human one; presenting a synthetic persona as a real person without disclosure is a Section 5 deceptive-practice violation, and civil penalties run over $53,000 per individual post, not per campaign.",
              lessonRef: "The Disclosure and Trust Risk",
              owner: "you",
            },
          ],
          distractors: [
            "The post ends with 'Follow for more!'",
            "The post is written in first person",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-hashtag-only",
          specimen:
            "Draft post 2, Dr. Aria's account:\n'API manufacturing quality standards explained in 60 seconds. #ad'\nA single small hashtag reading '#ad' appears at the end of the caption; nothing else in the post or the persona's bio mentions AI, synthetic, or virtual.",
          specimenSource: "synthetic-realistic",
          prompt: "This draft has a sponsorship tag already. Is that enough?",
          answerKey: [
            {
              defect: "'#ad' discloses a paid relationship but says nothing about the persona being AI-generated, which is a separate, required disclosure",
              severity: "critical",
              whyItMatters:
                "The lesson is explicit that the required disclosure covers two things: the material connection to the brand AND that the persona is not human. A sponsorship tag alone leaves the audience believing a real doctor made this claim.",
              lessonRef: "The Disclosure and Trust Risk",
              owner: "you",
            },
          ],
          distractors: [
            "The hashtag is placed at the end instead of the beginning",
            "The video is 60 seconds long",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-bio-only-disclosure",
          specimen:
            "Draft post 3, Dr. Aria's account:\nBio: 'AI-generated educational persona, sponsored by Concord Biotech.'\nCaption of the post itself: 'Three things nobody tells you about API purity testing.' No disclosure text appears in the post caption or the video itself.",
          specimenSource: "synthetic-realistic",
          prompt: "The bio already discloses the AI persona and sponsorship. Does that cover every post?",
          answerKey: [
            {
              defect: "Disclosure lives only in the account bio, not on this individual post",
              severity: "critical",
              whyItMatters:
                "Per the lesson, every non-compliant post counts as a separate FTC violation, not the campaign or the profile as a whole; a bio disclosure a scrolling viewer never sees does not satisfy the 'clear and conspicuous' standard for this specific post.",
              lessonRef: "The Disclosure and Trust Risk",
              owner: "you",
            },
          ],
          distractors: [
            "The bio disclosure uses the phrase 'AI-generated' instead of 'synthetic'",
            "The post does not include a hashtag",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each draft post, its defect, severity, and the specific rule violated",
            why: "Free and gives legal a sortable record before sign-off",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Maintain the running disclosure-compliance checklist the agency must clear before any future Dr. Aria post ships",
            why: "Free tier supports a shared, linkable checklist the agency and legal can both edit",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A disclosure compliance audit memo flagging all three draft posts, each defect mapped to the specific FTC Section 5 or state-law requirement it violates, plus a per-post disclosure template the agency must use going forward.",
      sampleOutput:
        "Duolingo, mascot-persona disclosure audit (excerpt)\n\nPOST 1: 'Duo here, obsessed with this new streak feature.'\nDEFECT: none found, caption includes '#DuolingoPartner AI-generated persona' per post\nVERDICT: compliant\n\nPOST 2: Story reshare with sponsorship tag only\nDEFECT: missing synthetic-persona disclosure, sponsorship tag alone is insufficient\nVERDICT: revise before publishing",
      successCriteria: [
        "Flags all three drafts as non-compliant with a specific rule cited for each",
        "Correctly explains why a sponsorship-only tag or a bio-only disclosure fails the per-post standard",
        "Does not flag stylistic choices (hashtag placement, phrasing) as compliance defects",
      ],
      portfolioReady: true,
    },
  ],

  "employee-advocacy-programs": [
    {
      id: "employee-advocacy-programs-launch-memo-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Mandate Trap: Auditing a Program Launch Memo",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a draft internal launch memo for a new employee advocacy program, identify which specific lines will trigger the mandate/forced-participation failure mode the lesson describes, and rewrite them as opt-in framing.",
      companyId: "zillow",
      scenario:
        "You're the social media manager at Zillow, the online real estate marketplace, reviewing a draft memo your VP of Comms wrote announcing a new employee advocacy program to the whole company before it goes out.",
      brief:
        "Read the memo line by line, flag every phrase that reads as a mandate rather than an invitation, and rewrite the memo's tone without cutting its actual ask.",
      mode: "diagnostic",
      conceptsCovered: ["Opt-in design vs. mandated participation"],
      steps: [
        {
          stepId: "step-1-mandate-audit",
          concept: "Opt-in design vs. mandated participation",
          lessonAnchor: "program-design-that-does-not-feel-forced",
          theoryRecap:
            "The lesson's failure mode: mandate participation and watch it collapse, because forced posts read as forced and signal fake enthusiasm to everyone watching.",
          question:
            "Which lines in this draft memo will make employees feel this is mandatory, not invited, and how would you rewrite each one?",
          toolName: "Google Sheets",
          where:
            "Paste the memo text into a two-column sheet: Original line | Verdict (mandate / neutral / opt-in) | Rewrite.",
          procedure: [
            "Paste the 6-paragraph draft memo into column A, one sentence per row",
            "Mark each row Mandate, Neutral, or Opt-in based on its actual wording",
            "For every Mandate row, write a rewrite that keeps the ask but removes the compulsion",
            "Count Mandate rows before and after your rewrite pass",
          ],
          outputSample:
            'DRAFT MEMO AUDIT, Zillow Advocacy Launch\n\nRow 3: "All agents are expected to share at least 2 posts per week."\n  Verdict: MANDATE\n  Rewrite: "Agents who want to build their own audience can pull from a weekly curated post, no requirement to post."\n\nRow 5: "Sharing activity will be reviewed in quarterly performance conversations."\n  Verdict: MANDATE (the most damaging line, ties advocacy to review, guarantees resentment)\n  Rewrite: cut entirely, replace with a public leaderboard shoutout for top voluntary sharers\n\nRow 7: "Here\'s a rotating queue of posts you\'re welcome to edit or skip."\n  Verdict: OPT-IN, keep as written\n\n...3 more rows',
          healthy:
            "Zero rows tie participation to performance review or set a required posting cadence.",
          unhealthy:
            "Any row that makes non-participation carry a visible or implied cost.",
          interpret:
            "The performance-review line is the single most damaging sentence in almost every real draft like this, it converts a voluntary channel into an obligation instantly.",
          soWhat: [
            {
              symptom: "Memo ties sharing to performance reviews",
              action:
                "Delete the line entirely before it reaches employees, replace with a public but voluntary leaderboard",
              effort: "5 min",
            },
            {
              symptom: "Memo sets a required weekly posting count",
              action:
                "Rewrite as a curated queue employees may use, with zero required minimum",
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
            role: "Line-by-line memo audit and rewrite tracking",
            why: "No account friction, easy to share the before/after with the VP of Comms for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated version of the launch memo with every mandate-coded line flagged and rewritten as opt-in framing, plus a one-line summary for the VP of Comms explaining why each rewrite matters.",
      sampleOutput:
        "Yelp Advocacy Program, memo audit summary\n\n3 of 9 lines flagged as mandate-coded, including a line tying sharing to quarterly reviews. All 3 rewritten to remove the compulsion; the review-tie line was cut outright and replaced with a voluntary monthly shoutout for top sharers. Net effect: the ask stays the same, the pressure is gone.",
      successCriteria: [
        "Correctly flags every mandate-coded line in the memo, not just the obvious one",
        "The review-tied line specifically gets flagged as highest severity",
        "Rewrites preserve the actual business ask while removing compulsion language",
      ],
      portfolioReady: true,
    },
    {
      id: "employee-advocacy-programs-curation-queue-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Curated Content Queue and Recognition Scorecard",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Design and build a rotating curated-post queue plus a lightweight recognition scorecard that rewards click-throughs and comments over raw share counts, the two structural pieces the lesson identifies as what separates a program that lasts past month one from one that doesn't.",
      companyId: "care-com",
      scenario:
        "You're building the first advocacy toolkit at Care.com, the online marketplace for family, child, senior, and pet care services, for a 12-person opt-in pilot group ahead of a company-wide rollout.",
      brief:
        "Build two connected assets: a 2-week rotating post queue employees can edit or skip, and a scorecard that ranks participants by engagement quality, not share volume.",
      mode: "build",
      conceptsCovered: [
        "Curation reduces the friction that kills sharing intent",
        "Tracking outcomes instead of activity",
      ],
      steps: [
        {
          stepId: "step-1-curation-queue",
          concept: "Curation reduces the friction that kills sharing intent",
          lessonAnchor: "tooling-and-curation-the-practical-layer",
          theoryRecap:
            "The bottleneck in most advocacy programs isn't willingness, it's friction, hunting for a post and writing a caption kills the impulse before it happens.",
          question:
            "What does a genuinely low-friction weekly content queue look like, one an employee can act on in under 30 seconds?",
          toolName: "Notion",
          where:
            "Build a Notion database with columns: Post date, Source link, Suggested caption (editable), Category, Status.",
          procedure: [
            "Create a Notion database with 10 rows, 2 weeks of content at ~1 post every weekday",
            "For each row, fill Source link, a suggested caption employees can edit or skip, and a Category (company news / industry commentary / employee-spotlight)",
            "Mix categories so no more than 4 of 10 rows are pure company news",
            "Add a Status column employees update to Shared / Skipped, so you can see uptake without chasing anyone",
          ],
          outputSample:
            "CARE.COM ADVOCACY QUEUE, Week 1\n\nMon: [Industry commentary] \"New CDC guidance on childcare ratios, here's what it means for families\" — draft caption editable, Status: Shared (4/12)\nTue: [Company news] Product launch post — draft caption, Status: Skipped (2/12)\nWed: [Employee spotlight] Caregiver story — draft caption, Status: Shared (7/12)\n...7 more rows",
          healthy:
            "No single category dominates the week, and skip rate stays under 40% per post.",
          unhealthy:
            "A queue that's 8 of 10 rows pure company news, or a skip rate above 60% on any post.",
          interpret:
            "A queue that's mostly product news reads as being asked to advertise, not share something you found interesting, skip rate is the early warning sign.",
          soWhat: [
            {
              symptom: "Skip rate above 60% on a post",
              action:
                "Swap that post's category next cycle toward industry commentary or employee spotlight",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-recognition-scorecard",
          concept: "Tracking outcomes instead of activity",
          lessonAnchor: "tooling-and-curation-the-practical-layer",
          theoryRecap:
            "Share counts tell you who's participating, click-throughs and comments tell you whether the program is working, a program with fewer, higher-quality shares often outperforms one optimizing for raw volume.",
          question:
            "Two employees each shared 5 posts this month. One got 200 clicks total, the other got 12. Does your scorecard treat them the same?",
          toolName: "Google Sheets",
          where:
            "Build a scorecard with columns: Employee, Shares, Total clicks, Total comments, Clicks-per-share.",
          procedure: [
            "List all 12 pilot participants as rows",
            "Log Shares, Total clicks (from UTM-tagged links), and Total comments for the month",
            "Compute Clicks-per-share as the ranking metric, not raw Shares",
            "Rank top 3 by clicks-per-share for the monthly shoutout, not top 3 by share count",
          ],
          outputSample:
            "CARE.COM ADVOCACY SCORECARD, Month 1\n\nEmployee A: 5 shares, 200 clicks, 18 comments, 40.0 clicks/share -> #1\nEmployee B: 5 shares, 12 clicks, 1 comment, 2.4 clicks/share -> #9\nEmployee C: 2 shares, 60 clicks, 9 comments, 30.0 clicks/share -> #2\n...9 more rows",
          healthy:
            "Monthly shoutout goes to high clicks-per-share employees, even at low share counts.",
          unhealthy:
            "Ranking by raw share count alone, which rewards volume over resonance and quietly re-creates the pressure-to-post problem.",
          interpret:
            "Employee C shared only twice but drove more real engagement than Employee B's five shares, ranking by volume would have sent the wrong signal about what good participation looks like.",
          soWhat: [
            {
              symptom:
                "Leaderboard ranked by share count keeps surfacing low-engagement posters",
              action:
                "Switch the ranking formula to clicks-per-share before the next monthly shoutout",
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
            role: "Host the rotating curated post queue employees pull from",
            why: "Free workspace tier handles a 12-person pilot easily, no advocacy software subscription needed to start",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Recognition scorecard ranking by clicks-per-share",
            why: "Free, and UTM click data exports cleanly into it",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A live 2-week Notion content queue plus a Google Sheets recognition scorecard ranking pilot participants by clicks-per-share, ready to hand to the 12-person pilot group.",
      sampleOutput:
        "Zillow Advocacy Pilot, Month 1 recap\n\nQueue uptake: 68% of posts shared by at least one participant, skip rate held under 35% across all 10 posts.\nTop performer by clicks-per-share: an agent with 3 shares and 96 total clicks, spotlighted in the team newsletter instead of the person with the most raw shares.",
      successCriteria: [
        "Queue mixes at least 3 content categories with no category exceeding 40% of posts",
        "Scorecard ranks by clicks-per-share, not raw share count",
        "Output identifies at least one specific below-median performer to watch",
      ],
      portfolioReady: true,
      stretch:
        "Extend the scorecard with a rolling 90-day trend line to catch a pilot member's engagement quietly declining before they drop out of the program.",
    },
  ],
  "social-media-crisis-management": [
    {
      id: "social-media-crisis-management-signal-check-audit",
      tier: "mini",
      archetype: "audit",
      title: "Crisis or Noise: Auditing a Live Mentions Dashboard",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a snapshot of a real-time mentions dashboard, apply the velocity/spread/amplification framework to decide whether a spike qualifies for the full crisis protocol or just a monitoring note.",
      companyId: "yelp",
      scenario:
        "You're the social listening analyst at Yelp, the local business reviews and discovery platform, watching mentions spike on a Saturday afternoon with nobody senior reachable for 40 minutes.",
      brief:
        "Score three separate mention spikes against the velocity/spread/amplification framework and decide which one, if any, triggers the full crisis protocol.",
      mode: "diagnostic",
      conceptsCovered: [
        "Velocity, spread, and amplification together define a real crisis",
      ],
      steps: [
        {
          stepId: "step-1-signal-scoring",
          concept:
            "Velocity, spread, and amplification together define a real crisis",
          lessonAnchor: "escalation-triggers-crisis-or-noise",
          theoryRecap:
            "One signal alone rarely justifies a crisis protocol; two of three signals trigger a manager review, all three trigger the full response.",
          question:
            "Three mention spikes are on your dashboard right now. Which one, if any, has all three signals?",
          toolName: "Brandwatch",
          where:
            "A mentions dashboard export listing volume-over-time, platform breakdown, and top accounts driving each spike.",
          procedure: [
            "For each of the 3 spikes, check volume trend over the last 2 hours (Velocity)",
            "Check whether mentions are confined to one platform or appearing on 2+ (Spread)",
            "Check whether any account over 50k followers has shared it (Amplification)",
            "Score each spike 0-3 and apply the 2-of-3 rule",
          ],
          outputSample:
            'YELP MENTIONS DASHBOARD, Saturday 2pm snapshot\n\nSpike 1, "slow refund" complaint thread: Velocity flat (11 mentions/hr steady) | Spread: X only | Amplification: none -> Score 0/3, log and monitor\nSpike 2, review-bombing on a single listing: Velocity climbing (8 to 95 mentions/hr) | Spread: X + Reddit | Amplification: a 40k-follower local news account shared it -> Score 2/3, manager review\nSpike 3, data-privacy claim: Velocity climbing (12 to 340 mentions/hr) | Spread: X, TikTok, Reddit | Amplification: a verified tech journalist (210k followers) quote-tweeted it -> Score 3/3, full protocol',
          healthy:
            "Only Spike 3 triggers the full protocol, the score matches the evidence, not gut instinct about which one 'feels' worse.",
          unhealthy:
            "Escalating Spike 1 because the language is aggressive, while missing that Spike 3's velocity is climbing 28x faster.",
          interpret:
            "Score 2/3 spikes still need a human manager decision, they don't auto-escalate and they don't get ignored either.",
          soWhat: [
            {
              symptom: "A loud but flat-velocity thread is being treated as urgent",
              action: "Check the 2-hour trend line before reacting to tone alone",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Alerts",
            role:
              "Baseline mention monitoring outside business hours when a paid dashboard seat isn't staffed",
            why: "Free and requires no login to set up a keyword watch",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brandwatch",
            role:
              "Real-time mentions dashboard with volume, platform, and account-reach breakdown",
            why: "The velocity/spread/amplification signals in this exercise require a real-time cross-platform view a free tool alone can't match",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored table of all 3 spikes against the velocity/spread/amplification framework, with an escalation decision and one-line justification for each.",
      sampleOutput:
        "Care.com weekend mentions triage\n\nSpike A (background-check turnaround complaint): 1/3 signals, flat velocity, single platform, no amplification -> log and monitor.\nSpike B (a safety-incident allegation shared by a parenting influencer with 85k followers): 3/3 signals -> full protocol, manager paged immediately.",
      successCriteria: [
        "All 3 spikes scored using all 3 signals, not just the loudest one",
        "Correctly applies the 2-of-3 escalation rule",
        "Justification cites specific numbers from the dashboard, not vague language",
      ],
      portfolioReady: true,
    },
    {
      id: "social-media-crisis-management-first-hour-sim",
      tier: "core",
      archetype: "simulation",
      title: "The First Sixty Minutes: A Live Crisis Response Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Navigate a branching, real-time crisis unfolding over the first two hours after detection, making the same pause/post/platform/DM-routing decisions the lesson's playbook describes, and see the consequence of each choice play out.",
      companyId: "zillow",
      scenario:
        "You're the on-call social media manager at Zillow when a home-value estimate error on a high-traffic listing starts trending on X on a Friday night.",
      brief:
        "Work through 3 live decision points, from detection to the 2-4 hour narrative window, choosing the optimal response at each stage.",
      mode: "simulation",
      conceptsCovered: [
        "Pause and staff up before responding",
        "Publishing a holding statement inside the golden window",
        "Never arguing facts in the public replies",
      ],
      stages: [
        {
          stageId: "minute-10-detection",
          label: "Minute 10, detection",
          elapsed: "10 minutes after first spike",
          concept: "Pause and staff up before responding",
          lessonAnchor: "the-first-hour-response-playbook",
          situation:
            "A user posts a screenshot claiming Zillow's Zestimate valued their home $400,000 below its actual sale price, and it's picked up 300 replies in 10 minutes. Your scheduled weekend promo post is queued to go live in 20 minutes.",
          dashboard:
            "X mentions: 300 replies in 10 min, climbing | Scheduled posts queued: 1 (promo, 2 platforms) | On-call staff reachable: you only, manager off-grid until tomorrow AM",
          spendToDate: "N/A",
          budgetRemaining: "N/A",
          decision: {
            prompt: "What's your first move?",
            options: [
              {
                id: "pause-first",
                label:
                  "Pause the scheduled promo post across every platform immediately, then start drafting a holding statement",
                verdict: "optimal",
                outcome:
                  "The promo never goes live next to the complaint thread, and you have a clear head to draft the next step.",
                why: "A cheerful promo posting next to a live crisis thread reads as tone-deaf and gets screenshotted on its own, this is the first, reversible move the lesson's playbook calls for.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "minute-25-holding-statement",
              },
              {
                id: "reply-immediately",
                label:
                  "Reply directly to the original post right now with a detailed technical explanation of how Zestimates are calculated",
                verdict: "costly",
                outcome:
                  "Your reply gets quote-tweeted as 'Zillow's defensive non-apology,' and the promo post goes live 10 minutes later next to it, compounding the tone-deaf read.",
                why: "Detailed technical defenses this early read as dismissive before anyone has acknowledged the person's frustration, and skipping the pause step means the scheduled promo still fires.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "minute-25-holding-statement",
              },
              {
                id: "wait-for-manager",
                label:
                  "Wait until your manager is reachable tomorrow morning before doing anything",
                verdict: "costly",
                outcome:
                  "By morning the thread has 4,000 replies and a real-estate news account has picked it up.",
                why: "Silence in the first hour causes a measurable spike in negative sentiment, and the lesson is explicit that every step in this window is reversible except silence.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "minute-25-holding-statement",
              },
            ],
          },
        },
        {
          stageId: "minute-25-holding-statement",
          label: "Minute 25, first public statement",
          elapsed: "25 minutes after first spike",
          concept: "Publishing a holding statement inside the golden window",
          lessonAnchor: "the-first-hour-response-playbook",
          situation:
            "You have 5 minutes before the 30-minute window closes. You don't yet know if the Zestimate figure was a data error or a stale comp, engineering hasn't confirmed either way.",
          dashboard:
            "X mentions: 850 replies, 40 min elapsed since first spike | Spread: still X only | A local news reporter has liked (not shared) the thread",
          spendToDate: "N/A",
          budgetRemaining: "N/A",
          decision: {
            prompt: "You still don't have full facts. What do you post?",
            options: [
              {
                id: "honest-incomplete",
                label:
                  "Post a short line acknowledging the report and confirming the team is actively investigating, no cause claimed yet",
                verdict: "optimal",
                outcome:
                  "The holding statement lands at minute 27, inside the window, and buys time without overpromising.",
                why: "This is not the full explanation, it's a short human line that says you've seen it and are looking into it, waiting for a perfect statement costs more than posting an honest incomplete one.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "hour-3-narrative-window",
              },
              {
                id: "wait-for-engineering",
                label:
                  "Wait for engineering's full root-cause confirmation before posting anything",
                verdict: "costly",
                outcome:
                  "Engineering doesn't confirm the cause for another 3 hours, well past the window, and the thread crosses onto Reddit in the meantime.",
                why: "The public narrative typically hardens within 2-4 hours, waiting for perfect facts is the exact trap the golden-window rule exists to prevent.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "hour-3-narrative-window",
              },
              {
                id: "guess-cause",
                label:
                  "Post a confident explanation guessing it was a one-off data glitch, to sound authoritative",
                verdict: "costly",
                outcome:
                  "Engineering later confirms it was actually a stale comparable, not a glitch, and now you've posted something you have to publicly walk back.",
                why: "An honest incomplete statement beats a confident but wrong one, guessing a cause you can't yet confirm creates a second correction to manage later.",
                lessonRef: "The First-Hour Response Playbook",
                nextStageId: "hour-3-narrative-window",
              },
            ],
          },
        },
        {
          stageId: "hour-3-narrative-window",
          label: "Hour 3, replies keep coming",
          elapsed: "3 hours after first spike",
          concept: "Never arguing facts in the public replies",
          lessonAnchor: "what-to-say-publicly-vs-what-to-take-offline",
          situation:
            "Engineering confirms the cause: a stale comparable sale skewed the estimate, now fixed. Dozens of people are replying with their own valuation numbers, some factually wrong about how Zestimates work at all.",
          dashboard:
            "X mentions: 1,900 replies total | Several individual homeowners now asking for account-specific reviews of their own Zestimate in the replies | 2 replies contain factually incorrect claims about the methodology, gaining their own smaller reply chains",
          spendToDate: "N/A",
          budgetRemaining: "N/A",
          decision: {
            prompt: "How do you close this out in the replies?",
            options: [
              {
                id: "public-summary-private-route",
                label:
                  "Post one substantive update explaining the fix, correct the 2 factual errors once each with a source, and route every individual homeowner's request to a support DM",
                verdict: "optimal",
                outcome:
                  "The thread gets a clear, sourced close-out, individual cases move to a channel where account details are safe, and the factual corrections don't spiral into back-and-forth.",
                why: "Public posts build trust fast, but specifics and negotiation belong in DMs, and correcting facts once calmly with a source, then stopping, avoids reading as defensive.",
                lessonRef: "What to Say Publicly vs. What to Take Offline",
                nextStageId: "end",
              },
              {
                id: "argue-each-reply",
                label:
                  "Reply individually to every factually wrong comment to correct the record",
                verdict: "costly",
                outcome:
                  "The repeated back-and-forth reads as defensive even though you're right, and it keeps the thread active instead of letting it close.",
                why: "The lesson is explicit: correct a factual error once, calmly, with a source, then stop, repeated public arguing signals defensiveness regardless of who's correct.",
                lessonRef: "What to Say Publicly vs. What to Take Offline",
                nextStageId: "end",
              },
              {
                id: "handle-each-homeowner-publicly",
                label:
                  "Respond to each homeowner's individual valuation question directly in the public replies with their specific numbers",
                verdict: "costly",
                outcome:
                  "Account-specific numbers end up publicly attached to individual usernames, and the thread turns into an ad hoc public support queue.",
                why: "Account details and case-specific numbers are exactly what belongs in DMs or a support ticket, not in the reply thread, regardless of how reasonable each individual question is.",
                lessonRef: "What to Say Publicly vs. What to Take Offline",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Alerts",
            role: "Baseline monitoring for the story spreading beyond the original platform",
            why: "Free, catches the moment the thread jumps to news or blog coverage",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brand24",
            role: "Cross-platform mention volume and spread tracking during the live incident",
            why: "Confirms in real time whether the thread has jumped from X onto Reddit or elsewhere, the spread signal the playbook depends on",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed run through all 3 decision points with the optimal choice at each stage, plus a one-paragraph after-action note on what would have gone wrong at each 'costly' branch.",
      sampleOutput:
        "Care.com after-action note, listing-verification incident\n\nPaused the scheduled newsletter send within 8 minutes of detection. Posted a holding acknowledgement at minute 22, before the 30-minute window closed, without naming a root cause. Closed the thread at hour 2 with one substantive update, corrected a single factual error with a source, and routed 14 individual account questions to the support DM queue instead of answering them in the replies.",
      successCriteria: [
        "Selects the optimal option at all 3 stages",
        "Can explain in one sentence why each costly branch would have made the outcome worse",
        "Final close-out separates the public correction from the private, account-specific responses",
      ],
      portfolioReady: true,
    },
  ],
};
