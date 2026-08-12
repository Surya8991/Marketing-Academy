/**
 * Practice projects for the `content` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file).
 *
 * Covers two lessons from src/content/content/:
 *
 * - "what-is-content-marketing": teardown (spot the disguised ad) +
 *   build-the-asset (write a one-page brief).
 * - "content-strategy": build-the-asset (the pilot's chosen "build" example
 *   per PROJECTS_PLAN.md 11.8) + audit (diagnose a channel mix against real
 *   traffic data).
 *
 * Numbers in the "content-strategy" audit project are not invented. They are
 * the actual aggregated totals from `public/project-data/utm-traffic-export.csv`
 * (verify: summing sessions/conversions/revenue by normalized source+medium
 * across all 30 rows gives google/organic 1,567 sessions / 39 conversions,
 * google/cpc 3,416 / 85, bing/cpc 323 / 5, twitter/social 420 / 4,
 * facebook/paid_social 359 / 7, newsletter/email 640 / 24) and
 * `public/project-data/gsc-indexing-export.csv` (Indexed 3,891, "Crawled,
 * currently not indexed" 690, "Blocked by robots.txt" 412, "Duplicate, no
 * user-selected canonical" 182, "Not found (404)" 94, "Server error (5xx)"
 * 11, total 5,280 rows, indexed share 3891/5280 = 73.7%).
 *
 * `lessonAnchor` values on the diagnostic project's steps are real rehype-slug
 * ids computed from the actual `###`/`##` headings in
 * src/content/content/content-strategy.mdx (github-slugger: lowercase, strip
 * punctuation, spaces to hyphens), matching how `ProjectStep.tsx` renders
 * `href={\`#${step.lessonAnchor}\`}`. `conceptsCovered` entries and
 * `TeardownItem.answerKey[].lessonRef` values elsewhere in this file are
 * plain descriptive references (rendered as text, not links, per
 * SimulationDebrief.tsx's `lessonRef` handling) and use the literal heading
 * text for traceability.
 */

import type { Project } from "@/lib/projects/types";

export const CONTENT_PROJECTS: Record<string, Project[]> = {
  // ---------------------------------------------------------------------
  // what-is-content-marketing
  // ---------------------------------------------------------------------
  "what-is-content-marketing": [
    {
      id: "what-is-content-marketing-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Content Marketing or Disguised Ad? Three Specimens, One Test",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three short marketing pieces, apply the lesson's own 'useful without the logo' test to correctly separate genuine content marketing from advertising wearing content marketing's clothes, without falling for the obvious pattern-match traps (brand mention, listicle format, case-study label).",
      companyId: "mailchimp",
      scenario:
        "You're freelancing for Mailchimp's content team. Before any freelance pitch gets assigned to a writer, someone has to QA three candidate pieces the intake form flagged as 'maybe too promotional.' You're that someone today.",
      brief:
        "Read all three specimens below. For each one, decide: genuine content marketing, or a disguised ad? If you find defects, name them specifically. If a specimen is actually clean, say so, don't invent a defect just because it mentions the brand.",
      mode: "teardown",
      conceptsCovered: ["What It Actually Is", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "item-1-feature-listicle",
          specimenSource: "synthetic-realistic",
          specimen:
            "5 Reasons ContactFlow CRM Is the #1 Choice for Fast-Growing Sales Teams in 2026\n\n" +
            "Choosing the right CRM can make or break your sales team's quarter. Here's why ContactFlow stands above the rest:\n\n" +
            "1. Blazing-Fast Setup — ContactFlow's onboarding wizard gets your team live in under 10 minutes, no consultants required.\n" +
            "2. AI-Powered Lead Scoring — Our proprietary AI engine ranks every lead so your reps always call the hottest prospect first.\n" +
            "3. Unlimited Pipelines — Unlike competitors who cap you at 3 pipelines, ContactFlow gives you unlimited custom pipelines on every plan.\n" +
            "4. Native WhatsApp Integration — Message leads directly from ContactFlow's dashboard, no plugins needed.\n" +
            "5. 24/7 Human Support — Real humans, not bots, answer every ticket in under 2 minutes.\n\n" +
            "Ready to see the difference? Start your free 14-day trial today, no credit card required.",
          prompt: "Genuine content marketing, or a disguised ad? Name every defect you find.",
          answerKey: [
            {
              defect:
                "Every one of the five numbered points describes a ContactFlow feature, not a reader problem or a transferable skill, strip the brand name and there is nothing left for a reader to use.",
              severity: "critical",
              whyItMatters:
                "This is the exact test the lesson gives: would this be worth reading without the logo? Here, removing 'ContactFlow' from each bullet leaves an empty sentence fragment, not a useful one.",
              lessonRef: "What It Actually Is",
              owner: "you",
            },
            {
              defect:
                "The entire piece exists to move the reader to the free-trial CTA, there is no standalone value independent of the purchase decision.",
              severity: "moderate",
              whyItMatters:
                "A blog post that is a feature list with a CTA at the end is advertising dressed as content even when it lives on your own domain, which is the lesson's own definition of the failure mode.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "It's formatted as a numbered '5 reasons' list, that format alone is not the defect, Item 2 below uses the same shape and is genuine content marketing. The defect is what fills each numbered point, not the numbering.",
            "It mentions a competitor ('unlike competitors who cap you at 3 pipelines'), a comparison claim by itself isn't disqualifying, the issue is that every point sells rather than teaches.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-deliverability-checklist",
          specimenSource: "synthetic-realistic",
          specimen:
            "5 Warning Signs Your Sender Reputation Is About to Tank (Check These Before Your Next Send)\n\n" +
            "Your open rates dropped 15% this month and you don't know why. Before you blame your subject lines, check your sender reputation, it works the same way no matter which email tool you use.\n\n" +
            "1. Bounce rate above 2% — anything over that signals your list has stale or fake addresses; ISPs start throttling you fast.\n" +
            "2. Complaint rate above 0.1% — that's roughly 1 complaint per 1,000 sends; cross it and Gmail starts routing you to Promotions or Spam.\n" +
            "3. Sudden volume spikes — doubling your send volume overnight without warming up looks like spam behavior to every major ISP.\n" +
            "4. No authentication records — if you haven't set up SPF, DKIM, and DMARC, you're an easy target for spoofing filters.\n" +
            "5. Rising spam-trap hits — old, purchased, or scraped addresses often turn into spam traps; even a handful can tank your whole domain's reputation.\n\n" +
            "Run a free check with your provider's deliverability dashboard, or any third-party tool, this works whether you're on Mailchimp or something else entirely. We built ours directly into every Mailchimp plan, but the five checks above matter no matter what you're using.",
          prompt: "Genuine content marketing, or a disguised ad? Name every defect you find, or state clearly that there are none.",
          answerKey: [],
          distractors: [
            "It's published on Mailchimp's own blog under the Mailchimp name, being brand-owned doesn't disqualify a piece, only whether it needs the brand to make sense does.",
            "It mentions Mailchimp's own deliverability monitoring feature in the last sentence, one non-pushy mention after delivering real standalone value isn't a disguised ad, contrast Item 1, where every point exists only to sell.",
            "It's structured as a '5 warning signs' listicle, the same shape as Item 1, format is not the tell; what each point teaches is.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-case-study-trap",
          specimenSource: "synthetic-realistic",
          specimen:
            "How BrightPath Furniture Grew Email Revenue 40% With Mailchimp\n\n" +
            "BrightPath Furniture, a mid-size home goods retailer, was struggling to turn browsers into buyers. After switching to Mailchimp:\n\n" +
            "• Email-attributed revenue up 40% in 90 days\n" +
            "• Cart abandonment recovery rate up 22%\n" +
            "• Open rates increased from 18% to 31%\n\n" +
            "\"Mailchimp completely transformed our email program,\" says BrightPath's Marketing Director. \"We couldn't be happier with the results.\"\n\n" +
            "Want results like BrightPath? Book a personalized demo with our team today and see what Mailchimp can do for your business.",
          prompt: "Genuine content marketing, or a disguised ad? Name every defect you find.",
          answerKey: [
            {
              defect:
                "Every bullet is an outcome number (+40% revenue, +22% recovery) with zero methodology, a reader learns nothing they could apply to their own program; strip the brand name and there is no teachable content left, only proof-of-product bullets.",
              severity: "critical",
              whyItMatters:
                "The lesson's own test is whether a reader would value the piece without the brand attached. Outcome-only case studies fail this test even when the numbers are real.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The entire structure funnels toward 'Book a personalized demo,' it answers no question the reader brought with them; it exists purely to move them toward a sales conversation.",
              severity: "moderate",
              whyItMatters:
                "This matches the lesson's warning about no connection to a reader's actual job-to-be-done, the piece serves the seller's funnel, not the reader's problem.",
              lessonRef: "What It Actually Is",
              owner: "you",
            },
          ],
          distractors: [
            "It features a real, named customer with specific numbers, using a genuine case is fine; the defect is that no process or methodology is shared, only the result.",
            "It's labeled a 'case study,' case studies can be genuine content marketing when they teach the reader's own replicable steps, the way HubSpot's format does; the label alone isn't the defect.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where you write your verdict and defect list for each specimen",
            why: "Free workspace is enough to log a 3-item teardown, no paid plan required",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This exercise needs nothing beyond a place to write your verdicts, the free path is already complete.",
      },
      deliverable:
        "A verdict (genuine content marketing or disguised ad) plus a full defect list for all three specimens, written up in a doc.",
      sampleOutput:
        "Item 1 (ContactFlow): DISGUISED AD. Every one of the 5 points sells a feature, not a skill, flagged both defects, didn't get distracted by the listicle format. Item 2 (sender reputation): GENUINE CONTENT MARKETING, no defects, the bounce-rate and complaint-rate thresholds work on any ESP and the one Mailchimp mention at the end is a single non-pushy aside. This reads the same way Chewy's own 'When to Call the Vet vs. When to Wait' guide does, useful whether or not you buy from Chewy, with one soft mention of their Autoship program right at the end. Item 3 (BrightPath case study): DISGUISED AD, all outcome, no method, exists to book a demo.",
      successCriteria: [
        "Correctly classifies Item 1 (ContactFlow) as a disguised ad and names at least one real defect",
        "Correctly classifies Item 2 (sender reputation) as genuine content marketing with no defects flagged",
        "Correctly classifies Item 3 (BrightPath case study) as a disguised ad and names the 'outcomes only, no method' defect",
        "Does not flag brand mention, listicle format, or the 'case study' label as a defect on its own in any item",
      ],
      portfolioReady: false,
    },
    {
      id: "what-is-content-marketing-brief-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Write a One-Page Brief That Passes the Logo Test",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Produce a single-piece content brief for Chewy's blog that proves, in writing, the piece would hold up if Chewy's name were stripped off it, before a single word of the actual piece gets written.",
      companyId: "chewy",
      scenario:
        "You're freelancing for Chewy's content team. Before any writer gets assigned, every pitch needs a one-page brief that survives the team's own gut-check: would a pet owner get real value from this even if it ran on a stranger's blog with no Chewy logo anywhere on the page?",
      brief:
        "Pick one real pet-owner problem, name the one audience segment who has it, and build the brief around the lesson's own layers: audience and job-to-be-done, the logo test itself, one channel, and a concrete distribution plan, not just a topic idea.",
      mode: "build",
      conceptsCovered: ["What It Actually Is", "How It Works / The Playbook"],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where the one-page brief gets written",
            why: "Free workspace, no paid plan needed for a single one-page doc",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "ChatGPT",
            role: "Brainstorm partner for surfacing the real pet-owner job-to-be-done",
            why: "Free tier is enough to rubber-duck 5-10 candidate audience pains before picking the one the brief is built around",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "CoSchedule",
            role: "Optional formal brief/intake template",
            why: "Not required, a blank doc with four headers works exactly as well for a single one-page brief",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a doc plus a brainstorm partner) is complete on its own. CoSchedule only matters once you're running an intake pipeline for many briefs at once.",
      },
      deliverable:
        "A one-page content brief (under 300 words) for one Chewy blog piece, organized under four headers: Audience & Job-to-Be-Done, The Logo Test, Channel & Distribution Plan, Success Metric.",
      sampleOutput:
        "AUDIENCE & JOB-TO-BE-DONE\nFirst-time secondhand-clothing sellers who want to declutter their closet before a move but don't know if their clothes are even worth listing, they need a fast way to check before spending an hour packing bags nobody will pay for.\n\n" +
        "THE LOGO TEST\nTeaches 5 concrete checks (brand tier, fabric type, condition grading, current resale demand, seasonal timing) a reader can run on any clothing item, on any resale platform, ThredUp or not. Strip the logo and a reader still walks away knowing exactly what to keep, donate, or trash.\n\n" +
        "CHANNEL & DISTRIBUTION PLAN\nPrimary channel: SEO / organic search (an 'is my [brand] worth reselling' query has real, durable search volume).\nDistribution: (1) email the piece to the existing newsletter list, (2) cut it into a 5-slide Instagram carousel using the same 5 checks, (3) add internal links from ThredUp's 3 highest-traffic clothing-care posts.\n\n" +
        "SUCCESS METRIC\n90-day organic sessions to the URL plus newsletter click-through rate on the first send, not social likes, since the channel choice is SEO plus email, not social.",
      successCriteria: [
        "Names exactly one audience segment with a specific job-to-be-done sentence (a real task and a real pressure), not a vague goal",
        "Includes a written 'Logo Test' paragraph stating specifically what the piece teaches that holds up with the brand name removed",
        "Names exactly one primary channel from the lesson's five options (SEO, LinkedIn, YouTube, email newsletter, podcast)",
        "Lists at least 3 concrete distribution actions beyond 'hit publish,' matching the lesson's one-hour-distributing-per-hour-writing rule",
        "States one measurable success signal tied to that one channel, not a vague 'more engagement'",
      ],
      portfolioReady: true,
    },
  ],

  // ---------------------------------------------------------------------
  // content-strategy
  // ---------------------------------------------------------------------
  "content-strategy": [
    {
      id: "content-strategy-pillar-doc-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build Freshworks' Two-Page Content Strategy Document",
      timeEstimate: "75 minutes",
      timeMinutes: 75,
      objective:
        "Produce the actual two-page content strategy document the lesson describes, following its 7-step playbook in order, for a real Freshworks buyer segment, graded against countable structural criteria, not vague quality language.",
      companyId: "freshworks",
      scenario:
        "You've just joined Freshworks' content team. The team has been publishing without a written strategy for a year, guessing at what to cover next based on whatever trended that week. Your first deliverable is the document itself, not a brand guide, not a calendar, the decision document the lesson describes.",
      brief:
        "Follow the lesson's own 7-step playbook in order. Pick ONE audience (the lesson's own worked example is a B2B SaaS team targeting finance directors, pick a real Freshworks buyer instead, for example IT admins at small companies evaluating helpdesk software before a renewal deadline). Every section must be filled in specifically, not aspirationally.",
      mode: "build",
      conceptsCovered: [
        "Step 1: Pick one primary audience",
        "Step 2: Map their journey to three stages",
        "Step 3: Choose two channels, maximum",
        "Step 4: Define what \"worked\" looks like per format",
        "Step 5: Commit to a cadence you can sustain for 12 months",
        "Step 6: Write the \"will not publish\" list",
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Where the two-page strategy document gets written",
            why: "Free workspace holds a two-page doc with no paid plan required",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Mine real queries for the audience's journey-stage questions",
            why: "Free and directly matches the lesson's own advice to combine search console data with sales objections when building the journey map",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Deeper keyword and competitor research for the audience's evaluating-stage questions",
            why: "Only useful once Search Console's own query data feels too thin, not required to complete the brief",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Search Console's free query data is enough to write every section of this document. SEMrush is a depth upgrade for a real production team, not a requirement here.",
      },
      deliverable:
        "A two-page content strategy document for Freshworks covering all 7 steps from the lesson's playbook, saved as a shareable doc.",
      sampleOutput:
        "AUDIENCE\nDesign-conscious first-time glasses buyers, aged 25-40, who need new prescription glasses within 30 days and are nervous about ordering eyewear online without trying it on first.\n\n" +
        "PILLARS (3)\n1. 'Home Try-On, Explained' — Unaware stage. Repurpose: pillar guide -> 4 Instagram Reel scripts, 1 welcome-series email.\n" +
        "2. 'Frame Shape for Face Shape' — Evaluating stage. Repurpose: pillar guide -> 1 interactive quiz landing page, 3 Pinterest pins.\n" +
        "3. 'What Happens If They Don't Fit' — Ready to Buy stage. Repurpose: pillar guide -> 1 FAQ page section, 1 retargeting email.\n\n" +
        "CHANNELS (2 max)\nSEO / organic search + email newsletter. No paid social, no podcast, no third channel.\n\n" +
        "CADENCE\n1 pillar post every 2 weeks, sustainable for 12 months without burning out a 2-person content team.\n\n" +
        "WILL NOT PUBLISH\n- Frame trend roundups with no styling guidance attached\n- Founder-story content with no reader-facing utility\n- Any post whose only purpose is a coupon code\n\n" +
        "SUCCESS METRICS PER FORMAT\n- Pillar guides: organic sessions + home try-on starts at 90 days\n- Retargeting email: click-through rate at 7 days, not opens",
      successCriteria: [
        "Names exactly one primary audience segment with a specific job-to-be-done sentence (a real title, company size range, and a stated pain), not a list of personas",
        "Includes at least 3 named content pillars, each stating which of the 3 journey stages (Unaware / Evaluating / Ready to Buy) it serves",
        "Each of the 3+ pillars has an explicit repurposing plan written as 'Format A -> Format B, Format C' (e.g. 'Pillar SEO post -> 3 LinkedIn posts, 1 email send')",
        "No more than 2 channels are named for the whole strategy, matching the lesson's two-channel-max rule",
        "States a cadence as a specific number of pieces per specific time unit (e.g. '1 post per week'), not a vague word like 'regularly'",
        "The 'will not publish' list names at least 3 specific exclusions, not one generic line",
        "At least 2 different content formats each have their own distinct, named success metric, not one blanket KPI applied to everything",
      ],
      portfolioReady: true,
    },
    {
      id: "content-strategy-channel-audit",
      tier: "core",
      archetype: "audit",
      title: "Audit PolicyBazaar's Content Channel Mix Against the Two-Channel Rule",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Read PolicyBazaar's actual traffic export and Search Console indexation report, and decide where the content strategy is quietly breaking its own rules, using the lesson's playbook as the diagnostic checklist rather than gut feel.",
      companyId: "policybazaar",
      scenario:
        "PolicyBazaar's content team has been publishing steadily for a year across search, email, and social, but nobody has checked the actual export against the strategy doc's own rules in months. You've been handed the raw UTM export and the latest Search Console indexation report and asked for a diagnosis, not a guess.",
      brief:
        "Work through three real signals in the data below: channel concentration, per-format measurement discipline, and indexation waste. Each one traces back to a specific step in the lesson's playbook.",
      mode: "diagnostic",
      conceptsCovered: [
        "Checking whether content investment is actually running through 2 channels or quietly spread across more",
        "Checking whether each channel is judged on its own metric or lumped into one blanket KPI",
        "Checking how much published content never gets indexed, a sign the 'will not publish' list isn't being enforced",
      ],
      steps: [
        {
          stepId: "channel-concentration",
          concept: "Checking whether content investment is actually running through 2 channels or quietly spread across more",
          lessonAnchor: "step-3-choose-two-channels-maximum",
          theoryRecap:
            "The lesson's Step 3 says pick two channels where your audience already is and execute with discipline, since five channels done badly loses to two done well.",
          question:
            "How many distinct owned channels is PolicyBazaar's content actually running through this month, and does that match a two-channels-max strategy?",
          toolName: "Google Analytics 4",
          where: "Acquisition > Traffic acquisition > Session source / medium, date range set to the export period",
          procedure: [
            "Export session source/medium for the period, exactly like the raw UTM log below.",
            "Group rows by source+medium, normalizing case (Google/google/GOOGLE are the same channel).",
            "Sum sessions and conversions per group and rank from highest to lowest.",
            "Count how many groups are content/owned channels (organic search, newsletter, organic social) versus paid channels.",
          ],
          outputSample:
            "PolicyBazaar blog · UTM export, 20-day window\n\n" +
            "  Channel                    Sessions   Conversions    CVR\n" +
            "  google / organic             1,567          39      2.49%\n" +
            "  google / cpc                 3,416          85      2.49%\n" +
            "  bing / cpc                     323           5      1.55%\n" +
            "  twitter / social                420           4      0.95%\n" +
            "  facebook / paid_social          359           7      1.95%\n" +
            "  newsletter / email              640          24      3.75%\n\n" +
            "  Owned content channels running in parallel: google/organic, twitter/social, newsletter/email = 3",
          healthy:
            "Content-owned channels (organic search, email, organic social) concentrated in exactly 2, each with enough volume to judge, matching the lesson's own discipline of going deep on fewer channels.",
          unhealthy:
            "Content is running through 3 or more owned channels at once, here: organic search + newsletter + Twitter, thinning attention across all of them instead of going deep on 2.",
          interpret:
            "PolicyBazaar's content is running through 3 owned channels: organic search, newsletter, and Twitter. That's the two-channels-max rule already broken, and the numbers show why it matters, Twitter converts at 0.95%, the worst of the six rows, while newsletter converts at 3.75%, the best.",
          soWhat: [
            {
              symptom: "3 owned channels running simultaneously, one clearly underperforming",
              action: "Cut Twitter as an owned content channel, redirect that team time into organic search and newsletter, the two channels already proven",
              effort: "half day",
            },
            {
              symptom: "No documented decision for why 3 channels are running instead of 2",
              action: "Write the channel decision into the strategy doc so it doesn't silently drift back to 3 next quarter",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "per-format-measurement",
          concept: "Checking whether each channel is judged on its own metric or lumped into one blanket KPI",
          lessonAnchor: "step-4-define-what-worked-looks-like-per-format",
          theoryRecap:
            "The lesson's Step 4 says different formats have different time horizons and success signals, mixing them guarantees someone always looks like they're failing.",
          question:
            "Is PolicyBazaar judging Twitter, a top-of-funnel awareness channel, by the same yardstick as newsletter, a bottom-funnel, high-intent channel?",
          toolName: "Google Analytics 4",
          where: "Same Acquisition report as the previous step, this time reading conversions and revenue per row, not just sessions",
          procedure: [
            "Pull conversions and revenue per channel from the same export.",
            "Note which channels are top-of-funnel content (organic social, awareness SEO posts) versus bottom-funnel or high-intent (email to an existing list).",
            "Check whether the team's monthly report applies one blanket conversions target to every channel, or a different metric per format.",
          ],
          outputSample:
            "PolicyBazaar monthly content report (as currently written):\n\n" +
            "  ALL CHANNELS TARGET: 50+ conversions / month, no per-channel breakdown\n\n" +
            "  Actual: google/organic 39, twitter/social 4, newsletter/email 24\n" +
            "  -> Twitter flagged 'underperforming' in the monthly report\n" +
            "  -> Newsletter and organic search not mentioned at all",
          healthy:
            "Each format has its own defined success signal, for example Twitter judged on saves/replies at 7 days (its actual job, top-of-funnel awareness), newsletter judged on conversions at send-time (its actual job, bottom-funnel).",
          unhealthy:
            "One blanket conversions target applied to every channel regardless of what journey stage that channel actually serves, exactly the lesson's 'setting the same KPI for every content format' mistake.",
          interpret:
            "Twitter is being graded on conversions, a bottom-funnel metric, when its actual job in this mix is awareness. That isn't evidence the Twitter content is bad, it's evidence the report is asking it the wrong question, on top of the volume problem already flagged in the previous step.",
          soWhat: [
            {
              symptom: "Every channel judged against one shared conversions target",
              action: "Split the monthly report into per-format metrics: awareness channels tracked on saves/shares/replies, newsletter tracked on conversions and revenue",
              effort: "30 min",
            },
            {
              symptom: "Report currently can't tell you if Twitter content itself is weak or just mismeasured",
              action: "Re-run this diagnosis after one reporting cycle with the new per-format metrics before deciding whether to cut Twitter entirely",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "indexation-waste",
          concept: "Checking how much published content never gets indexed, a sign the 'will not publish' list isn't being enforced",
          lessonAnchor: "step-6-write-the-will-not-publish-list",
          theoryRecap:
            "The lesson's Step 6 says name what you will refuse to publish regardless of trend pressure, since every team that burns out from over-publishing skipped this guardrail.",
          question:
            "How much of what PolicyBazaar has published is Google actually choosing not to index, and what does that say about the will-not-publish list?",
          toolName: "Google Search Console",
          where: "Search Console > Pages > see why pages aren't indexed",
          procedure: [
            "Open the Pages report and read the full breakdown of indexed versus non-indexed reasons.",
            "Add up every non-indexed reason as a share of total pages.",
            "Flag which non-indexed reasons point to a publishing-discipline problem versus a purely technical one.",
          ],
          outputSample:
            "PolicyBazaar Search Console · Pages report\n\n" +
            "  Indexed                                 3,891    (73.7%)\n" +
            "  Crawled, currently not indexed             690    (13.1%)\n" +
            "  Blocked by robots.txt                      412     (7.8%)\n" +
            "  Duplicate, no user-selected canonical       182     (3.4%)\n" +
            "  Not found (404)                              94     (1.8%)\n" +
            "  Server error (5xx)                            11     (0.2%)\n" +
            "  Total                                     5,280",
          healthy:
            "Indexed share above roughly 90%, with 'crawled, not indexed' and 'duplicate, no canonical' kept low, both signal Google is choosing to skip pages the team itself should have filtered before publishing.",
          unhealthy:
            "'Crawled, currently not indexed' running in the hundreds (690 here, 13.1% of all pages) means Google looked at that many pages and judged them not worth indexing, exactly the kind of thin, low-value content a will-not-publish list exists to stop before it ships.",
          interpret:
            "690 pages Google crawled and rejected, plus 182 duplicates with no canonical set, add up to 872 pages, 16.5% of everything published, that never should have gone out under the strategy's own rules. That is not a technical SEO bug, it's the will-not-publish list not existing yet.",
          soWhat: [
            {
              symptom: "690 pages crawled but not indexed",
              action: "Audit the lowest-traffic 100 of those pages, most will match a pattern (thin, AI-generated, no original data) that belongs on the will-not-publish list going forward",
              effort: "half day",
            },
            {
              symptom: "182 duplicate pages with no canonical set",
              action: "Add explicit canonical tags across the near-duplicate pages, a one-time technical fix, not a strategy fix",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Read the UTM export for channel concentration and per-format measurement",
            why: "Free tier reads session source/medium and conversions, everything the first two steps need",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Read the indexation breakdown for the third step",
            why: "Free and is the exact source of the Pages report used in the indexation-waste step",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Deeper crawl diagnostics and historical indexation trend",
            why: "Only useful for a running production audit over time, not required to complete this one-time diagnosis",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Google Analytics 4 and Search Console are both free and are the actual tools this diagnosis runs on. Ahrefs is a depth upgrade for ongoing monitoring, never a requirement here.",
      },
      datasetUrl: "/project-data/utm-traffic-export.csv",
      deliverable:
        "A 3-part written diagnosis (channel concentration, per-format measurement, indexation waste) with one recommended action per finding.",
      sampleOutput:
        "Applying the same 3 checks to Zillow's own listing-guide blog last quarter: found 4 owned channels running (organic search, YouTube, Pinterest, email) against a 2-channel strategy doc, cut Pinterest and YouTube back to a quarterly cadence instead of weekly. Per-format measurement: home-buying guides were being judged on 30-day conversions, a bottom-funnel metric, when their actual job was 90-day organic ranking, moved them to a 90-day organic-sessions target instead. Indexation: 81% indexed rate, healthier than PolicyBazaar's 73.7%, but 'crawled, not indexed' still made up 9% of pages, traced to old market-report pages with no updated data, added a 12-month freshness rule to the will-not-publish list.",
      successCriteria: [
        "Correctly counts 3 owned content channels currently running (organic search, newsletter, Twitter) against the lesson's 2-channel-max rule",
        "Identifies Twitter as the channel to cut or fix first, citing its 0.95% conversion rate, the lowest of the six channels in the export",
        "Explains why judging Twitter on a shared conversions target misdiagnoses it, tying the fix to Step 4's per-format metric guidance",
        "States the indexed-page share (73.7%) and identifies 'crawled, not indexed' plus 'duplicate, no canonical' as the two reasons tied to a missing will-not-publish list, not a technical bug alone",
      ],
      portfolioReady: false,
    },
  ],
};
