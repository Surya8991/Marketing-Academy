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
};
