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

  "blog-seo-content": [
    {
      id: "blog-seo-content-glossybox-serp-checklist-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Pre-Publish Check: Auditing a Glossybox Draft Against the SERP",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real target keyword, a scan of what Google's actual top-10 results look like for it, and Glossybox's draft blog post, run the lesson's Step 1 checklist and reach a pass or fail verdict backed by evidence, not a vibe.",
      companyId: "glossybox",
      scenario:
        "You're a freelance SEO editor on retainer for Glossybox's content team ahead of a launch push. Editors keep asking 'is this ready to publish?' with no consistent way to answer it, that consistency is now your job on every draft before it goes live.",
      brief:
        "Scan the live SERP for the draft's target keyword, identify the dominant format among the top 10, then compare that format against the actual draft structure below. Reach PASS or FAIL with a one-line, evidence-based reason.",
      mode: "diagnostic",
      conceptsCovered: ["Matching content format to what the live SERP already shows"],
      steps: [
        {
          stepId: "step-1-serp-format-audit",
          concept: "Matching content format to what the live SERP already shows",
          lessonAnchor: "step-1-start-with-the-serp-not-the-keyword",
          theoryRecap:
            "The lesson's Step 1 says to scan the actual top-10 SERP for your target keyword before writing a word, and match whatever format already dominates, listicle, guide, comparison, or essay, rather than fighting Google's own expressed preference.",
          question:
            "7 of the top 10 results for this keyword are comparison listicles with testing notes. Glossybox's draft is a 1,400-word narrative essay on the history and science of the product category. Does the draft pass the format-match check?",
          toolName: "Google Sheets",
          where: "A blank sheet with columns: Checklist Item, SERP Evidence, Pass/Fail, Reason",
          procedure: [
            "Search the exact target keyword in an incognito browser tab and record the format of each of the top 10 organic results (guide, listicle, comparison, review, essay).",
            "Tally how many of the 10 share one dominant format.",
            "Compare that dominant format against the draft's actual structure, not against a generic 'good content' standard.",
            "Mark PASS if the draft's format matches the dominant SERP format, FAIL if it does not, and name the specific mismatch.",
          ],
          outputSample:
            "Target keyword: 'best drugstore setting spray for oily skin'\n\n" +
            "SERP scan (incognito, top 10):\n" +
            "  7 of 10 = comparison listicles, numbered, with tester notes and a comparison table\n" +
            "  2 of 10 = single-product review pages\n" +
            "  1 of 10 = ingredient explainer (informational)\n\n" +
            "Dominant format: comparison listicle (7/10)\n\n" +
            "Glossybox draft: 1,400-word narrative essay, 'The History and Science of Setting Sprays.' No numbered list, no product comparison, no testing notes.\n\n" +
            "Verdict: FAIL, format mismatch.",
          healthy:
            "The draft's format matches the SERP's dominant format, for example a numbered comparison listicle when 7 of 10 results are comparison listicles.",
          unhealthy:
            "The draft is written as a different format entirely, a narrative essay when the SERP is dominated by numbered comparison listicles, or a bare listicle when the SERP is dominated by in-depth single-product guides.",
          interpret:
            "Glossybox's history-and-science essay is fighting the exact format Google has already rewarded 7 out of 10 times for this keyword. No amount of line-editing fixes a format mismatch, the draft needs restructuring into a tested comparison listicle before it goes anywhere near publish.",
          soWhat: [
            {
              symptom: "Draft format doesn't match the SERP's dominant format",
              action:
                "Restructure into the dominant format, here a numbered comparison listicle with a comparison table and testing notes, before the final line edit, not after",
              effort: "half day",
            },
            {
              symptom: "No SERP scan happens before a draft gets assigned to a writer",
              action: "Add a 'SERP scan' line to the brief template so format mismatches get caught at outline stage, not at pre-publish review",
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
            role: "Log the SERP scan and score the pass/fail checklist verdict",
            why: "Free, no signup friction, holds a simple checklist table just as well as a paid audit tool for one draft at a time",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Surfer SEO",
            role: "Automates the SERP-format and content-structure comparison instead of a manual scan",
            why: "Worth it once you're auditing dozens of drafts a week and manual SERP scanning stops scaling",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "A manual SERP scan plus a Google Sheet is a complete audit path for one draft at a time. Surfer SEO only pays for itself once this checklist is running across real publishing volume.",
      },
      deliverable:
        "A completed pre-publish checklist (Sheet) with a pass/fail verdict and evidence for the SERP-format-match item on Glossybox's draft.",
      sampleOutput:
        "Target keyword audit: 'best anti-frizz hair serum for humid weather' (a different brand's haircare blog draft)\n\n" +
        "SERP scan: 8 of 10 top results are comparison listicles with tester photos and a ranked table.\n" +
        "Draft: a numbered 'Top 7' comparison listicle with tester notes already included.\n\n" +
        "Verdict: PASS, format matches the dominant SERP pattern, no restructuring needed before publish.",
      successCriteria: [
        "Correctly identifies the dominant SERP format for the target keyword from the scan data given",
        "Compares that dominant format specifically against the actual draft structure, not against a generic quality standard",
        "Reaches a PASS or FAIL verdict with a one-line, evidence-based reason, not a vague judgment",
        "Names the specific restructuring action needed when the verdict is FAIL",
      ],
      portfolioReady: true,
    },
    {
      id: "blog-seo-content-framebridge-draft-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Defects: Tearing Down a Framebridge Blog Draft Before It Publishes",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given one realistic Framebridge blog draft, find every SEO defect the lesson's playbook would flag, buried answers, missing human signal, missing internal links, without flagging things that only look like defects.",
      companyId: "framebridge",
      scenario:
        "You're the freelance content editor for Framebridge's blog. A draft on framing a college diploma just landed in your queue an hour before its scheduled publish slot, and you're the last check before it goes live.",
      brief:
        "Read the specimen once. List every real defect you find, citing the specific lesson step it violates. If something looks off but isn't actually a defect per the lesson's own rules, don't flag it.",
      mode: "teardown",
      conceptsCovered: [
        "Step 4: Lead with the answer in the first 100 words",
        "Step 5: Add unmistakable human signal",
        "Step 6: Internal link to commercial pages deliberately",
      ],
      teardownItems: [
        {
          itemId: "item-1-diploma-frame-draft",
          specimenSource: "synthetic-realistic",
          specimen:
            "How to Frame a College Diploma: A Complete Guide\n\n" +
            "Graduating college is one of life's biggest milestones, a moment that deserves to be celebrated and remembered for years to come. Diplomas come in many shapes, sizes, and paper types depending on the institution, and choosing the right way to preserve yours is an important decision that many graduates and their families think carefully about. There are many factors to consider when framing important documents, including the material of the frame, the type of glass or acrylic used, matting choices, and how the piece will ultimately be displayed in a home or office. This guide will walk you through everything you need to know about the diploma-framing process from start to finish.\n\n" +
            "First, measure your diploma carefully. Most diplomas are either 8.5x11 or 11x14 inches, but some universities use custom sizes, so measure before doing anything else.\n\n" +
            "Next, think about matting. A mat can add visual breathing room around the document and is a popular choice among people who frame important papers.\n\n" +
            "Finally, choose a frame style that matches the room where it will hang. Wood frames tend to look traditional, while metal frames look more modern.\n\n" +
            "Properly preserving your diploma helps protect it from sun damage, humidity, and general wear over time, ensuring it remains a lasting keepsake for years to come.",
          prompt:
            "Find every SEO defect in this draft per the lesson's playbook. Name the specific defect and which lesson step it violates.",
          answerKey: [
            {
              defect:
                "The direct answer (how to actually frame the diploma) doesn't start until the fourth paragraph, roughly 160 words in, after a full paragraph of generic graduation sentiment and a second paragraph of unstructured background on framing factors.",
              severity: "critical",
              whyItMatters:
                "Step 4 says the direct how-to answer needs to land before the end of the first two paragraphs for featured-snippet and AI Overview eligibility; this draft buries it under throat-clearing that answers nothing.",
              lessonRef: "Step 4: Lead with the answer in the first 100 words",
              owner: "you",
            },
            {
              defect:
                "Zero internal links anywhere in the piece, including no link to Framebridge's own diploma-frame product page, despite this being a clearly commercial-adjacent informational post.",
              severity: "moderate",
              whyItMatters:
                "Step 6 requires at least one deliberate internal link from an informational post toward a commercial page; without it, a reader who's convinced has nowhere to click to actually buy a frame.",
              lessonRef: "Step 6: Internal link to commercial pages deliberately",
              owner: "you",
            },
            {
              defect:
                "No first-person testing signal, specific product names, sizes tested, or dated detail anywhere, every sentence reads as generic advice that could describe any framing site's blog.",
              severity: "moderate",
              whyItMatters:
                "Step 5's human-signal checklist (first-person notes, specific dates, named specifics) is the exact signal Google's E-E-A-T evaluation looks for; a draft with none of it reads as templated output even if a human wrote it.",
              lessonRef: "Step 5: Add unmistakable human signal",
              owner: "you",
            },
          ],
          distractors: [
            "It's written in second person ('measure your diploma'), that's a normal, reader-friendly voice for a how-to guide, not a defect on its own.",
            "It's under 300 words, length by itself isn't the defect, Step 1 says match the SERP's format and depth, a short post can still fail entirely on burying the answer, which is the real issue here.",
            "It uses a loose sequence (first, next, finally), sequencing steps is fine, the defect is where the direct answer starts, not whether the steps are numbered.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up the draft inline with defect comments before it goes back to the writer",
            why: "Free, and comments anchor directly to the exact sentence each defect lives in",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Optional defect-tracking log across many drafts, one row per defect found",
            why: "Free fallback if you'd rather track defects in a running list than inline comments",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Clearscope",
            role: "Automated content grading against top-ranking competitor structure and terms",
            why: "Catches some structural gaps faster than a manual read once you're grading drafts by the dozen",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "A manual read with inline comments catches all three defects here for free. Clearscope becomes worth it once you're grading drafts by the dozen, not the one.",
      },
      deliverable:
        "A defect list for the diploma-framing draft, each defect naming the specific lesson step it violates, delivered as inline Google Docs comments or a defect log.",
      sampleOutput:
        "Defect 1 (buried answer): the 'how to word a wedding invitation' answer doesn't appear until paragraph 5, after two paragraphs of etiquette history. Violates Step 4.\n" +
        "Defect 2 (no internal link): zero links to the invitation-template product page despite clear commercial intent. Violates Step 6.\n" +
        "Defect 3 (no human signal): no first-person notes on which templates were actually tested, reads as generic AI output. Violates Step 5.\n" +
        "Not flagged: the post uses a friendly second-person voice and loosely numbered steps, neither is a defect.",
      successCriteria: [
        "Flags the buried-answer defect and correctly ties it to Step 4",
        "Flags the missing internal link and correctly ties it to Step 6",
        "Flags the missing human-signal defect and correctly ties it to Step 5",
        "Does not flag second-person voice, short length, or loose step sequencing as defects on their own",
      ],
      portfolioReady: true,
    },
  ],

  "original-research-content": [
    {
      id: "original-research-survey-bias-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Survey Methodology Teardown: Catching Bias and Flawed Data Before Publication",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate three research survey instruments and methodology notes against the lesson's credibility criteria (neutral question framing, minimum viable sample sizes, explicit screening criteria, and margin-of-error transparency) to identify why two specimens fail editorial standards and why one produces citable data.",
      companyId: "freshworks",
      scenario:
        "You're the lead content strategist at Freshworks preparing to commission an annual customer-support industry benchmark. Before sending survey briefs to external research partners or approving internal draft questionnaires, you must audit three survey proposals to ensure the resulting data will withstand journalistic fact-checking.",
      brief:
        "Review three survey draft specimens. For each specimen, identify all critical and moderate methodology defects—such as leading question bias, undersized panels, and missing screening notes—or confirm if the specimen meets publication standards.",
      mode: "teardown",
      conceptsCovered: [
        "Designing a Survey That Produces Citable Stats",
        "Why Original Research Wins",
      ],
      teardownItems: [
        {
          itemId: "item-1-leading-questions-vendor-bias",
          specimenSource: "synthetic-realistic",
          specimen:
            "Proposal A: 2026 State of Omnichannel Support Survey\n\n" +
            "Target Audience: General Customer Service Workers\n" +
            "Sample Goal: n=120 respondents recruited via LinkedIn personal network\n\n" +
            "Key Survey Questions:\n" +
            "Q1: Do you agree that legacy, disconnected helpdesks cause burnout among support agents? (Options: Strongly Agree, Agree, Neutral)\n" +
            "Q2: How much time does your team waste every day toggling between different support tools? (Options: 1-2 hours, 2-4 hours, 4+ hours)\n" +
            "Q3: Wouldn't an AI-first unified workspace significantly improve your team's first-contact resolution rate? (Options: Yes, Absolutely, Maybe)\n\n" +
            "Planned Methodology Note: 'Data based on an independent study of customer service professionals conducted in Q1 2026.'",
          prompt:
            "Evaluate Proposal A's survey questions and methodology. Name every defect that would prevent a credible journalist or industry analyst from citing these statistics.",
          answerKey: [
            {
              defect:
                "Every question uses leading, biased framing with unbalanced response options (e.g. Q1 and Q3 omit disagreement options; Q2 assumes wasted time with no 'zero hours' option).",
              severity: "critical",
              whyItMatters:
                "As taught in the lesson, neutral question framing is non-negotiable. Biased questions prime the respondent and generate untrustworthy statistics that journalists will immediately discard.",
              lessonRef: "Designing a Survey That Produces Citable Stats",
              owner: "you",
            },
            {
              defect:
                "Sample size target (n=120) falls far below the lesson's minimum viable sample threshold of n=300 for B2B research.",
              severity: "critical",
              whyItMatters:
                "Journalists fact-check sample sizes. A B2B study with n=120 carries an unacceptable margin of error (>8.9%) and lacks statistical significance for industry-wide claims.",
              lessonRef: "Designing a Survey That Produces Citable Stats",
              owner: "you",
            },
            {
              defect:
                "Methodology description is opaque, omitting recruitment criteria, panel screening, collection dates, and margin of error.",
              severity: "moderate",
              whyItMatters:
                "Transparency is a trust signal; vague methodology statements signal promotional vendor content rather than legitimate research.",
              lessonRef: "Designing a Survey That Produces Citable Stats",
              owner: "you",
            },
          ],
          distractors: [
            "The survey has only three questions; research studies must have at least 25 questions to be considered valid.",
            "The survey targets customer service workers instead of C-level executives.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-skewed-averages-unscreened-panel",
          specimenSource: "synthetic-realistic",
          specimen:
            "Proposal B: SaaS Support Budget & Tooling Benchmark\n\n" +
            "Sample Collected: n=450 responses via an open Twitter/X poll and website popup widget\n\n" +
            "Summary Stat Drafts for Press Release:\n" +
            "- 'The average B2B support department spends $84,200 annually on customer messaging software.'\n" +
            "- 'Support teams resolve an average of 420 tickets per rep per day.'\n\n" +
            "Methodology Draft:\n" +
            "'Survey conducted online between Jan 10 and Jan 25, 2026. Data reflects arithmetic mean across all 450 submissions with no data exclusion.'",
          prompt:
            "Identify the statistical reporting and panel qualification defects in Proposal B.",
          answerKey: [
            {
              defect:
                "Open-web sampling (Twitter poll and popup widget) lacks role and company-size screening, allowing unqualified respondents and duplicate entries to distort results.",
              severity: "critical",
              whyItMatters:
                "Without verified panel screening criteria and IP/email deduplication, raw open polls are vulnerable to spam, bots, and self-selection bias.",
              lessonRef: "Designing a Survey That Produces Citable Stats",
              owner: "you",
            },
            {
              defect:
                "Reporting simple arithmetic means on skewed metric distributions without cleaning extreme outliers or reporting medians.",
              severity: "moderate",
              whyItMatters:
                "Support metrics (e.g. 420 tickets/rep/day) are heavily right-skewed by enterprise outliers or bad data inputs; reporting uncleaned means produces implausible stats that undermine report credibility.",
              lessonRef: "The Tool Stack",
              owner: "you",
            },
          ],
          distractors: [
            "The sample size of n=450 is insufficient for a B2B survey.",
            "The survey was conducted in January when response rates are seasonally low.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-compliant-benchmark-specimen",
          specimenSource: "synthetic-realistic",
          specimen:
            "Proposal C: 2026 Customer Experience Tech Stack & AI Benchmark\n\n" +
            "Target Panel: Verified CX Directors and VPs at B2B companies with 50–5,000 employees\n" +
            "Sample Size: n=520 qualified completes (screened from 780 initial responses; 260 disqualified for non-CX roles or company size)\n" +
            "Fielding Dates: November 12 – December 5, 2025\n" +
            "Margin of Error: ±4.2% at a 95% confidence interval\n\n" +
            "Question Specimen:\n" +
            "'Which of the following best describes your organization's primary customer support channel by resolution volume in 2025?'\n" +
            "[ ] Email / Shared Inbox\n" +
            "[ ] Live Chat / In-App Messaging\n" +
            "[ ] Phone / Voice Support\n" +
            "[ ] Self-Service Knowledge Base\n" +
            "[ ] Social Media / Community Forums\n" +
            "[ ] Other (Please specify)\n\n" +
            "Deliverable: Published data table and methodology appendix with downloadable anonymized CSV.",
          prompt:
            "Evaluate Proposal C. Name any defects found, or verify that the specimen adheres to publication and citation standards.",
          answerKey: [],
          distractors: [
            "The screening disqualified 260 respondents, indicating flawed survey design.",
            "The question uses multiple-choice options with a single selection instead of a Likert rating scale.",
            "The survey was fielded in Q4 rather than Q1.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Audit survey question phrasing, sample size math, and methodology validation checklist",
            why: "Zero-cost structured audit sheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A methodology audit report assessing three survey proposals against B2B sample size minimums (n>=300), neutral question construction, panel screening protocols, and margin-of-error reporting standards.",
      sampleOutput:
        "Audit Summary: CX Industry Research Specimen Review (Client: Zendesk)\n\n" +
        "Specimen 1 (Agent Burnout Survey Draft): REJECTED\n" +
        "- Critical Defect: Leading question framing ('How much time do you waste...').\n" +
        "- Critical Defect: Sample size n=85 is below n=300 B2B threshold (Margin of error: ±10.6%).\n" +
        "- Action: Rewrite with neutral multi-select categorical choices and expand panel to n=350.\n\n" +
        "Specimen 2 (Global Response Time Poll): REJECTED\n" +
        "- Critical Defect: Unscreened open-web poll; extreme outliers (e.g. 5,000 hr FRT) skewing arithmetic mean.\n" +
        "- Action: Enforce job-title screening filter and report median response times with interquartile range.\n\n" +
        "Specimen 3 (Enterprise Helpdesk Benchmark): APPROVED FOR FIELDING\n" +
        "- Validated: n=620 verified IT leaders, neutral single-select question framing, explicit ±3.9% margin of error, full methodology disclosure.",
      successCriteria: [
        "Identifies all leading and unbalanced question framing in Proposal A",
        "Flags the sample size violation below n=300 B2B threshold",
        "Recognizes uncleaned outliers and open-poll sampling bias in Proposal B",
        "Correctly validates Proposal C as compliant with publication methodology standards",
      ],
      portfolioReady: true,
    },
    {
      id: "original-research-link-magnet-blueprint",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Link Magnet Blueprint: Designing an Annual Benchmark Study & 4-Week Distribution Engine",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Design a complete original research campaign blueprint for an industry benchmark report—including research format selection, a 10-question neutral survey instrument, a data cleaning and AI analysis workflow, and a 4-week multi-channel distribution plan engineered to earn high-authority editorial backlinks.",
      companyId: "freshworks",
      scenario:
        "You are the Senior Content Marketing Manager at Freshworks (Nasdaq: FRSH). To break through AI-generated content clutter and establish category authority against legacy competitors like Salesforce and Zendesk, your leadership has funded the '2026 State of Customer Service & AI Adoption Report.' You need to deliver an execution-ready blueprint that guides the research from survey design to press distribution.",
      brief:
        "Create the complete research campaign blueprint across four structured stages: (1) Format & hook selection, (2) 10-question neutral survey instrument, (3) Data cleaning & AI clustering protocol, and (4) 4-week multi-channel distribution roadmap with press angles and repurposing assets.",
      mode: "build",
      conceptsCovered: [
        "4 Research Formats Worth Building",
        "Designing a Survey That Produces Citable Stats",
        "The Tool Stack",
        "Distribution Playbook",
      ],
      steps: [
        {
          stepId: "step-1-format-and-hook-selection",
          concept: "4 Research Formats Worth Building",
          lessonAnchor: "4-research-formats-worth-building",
          theoryRecap:
            "The lesson outlines four high-impact research formats: Annual Survey Reports, Proprietary Data Studies, Benchmark Reports, and Trend/Prediction Reports. Combining an annual cadence with category benchmarks provides compounding year-over-year link equity and creates a recurring hook for journalists.",
          question:
            "Which research format and primary hook should you select to position your brand as the authoritative industry benchmark while providing fresh seasonal pickup for press?",
          toolName: "Google Docs",
          where:
            "In your research brief document, define the report title, core research format, target audience, and primary newsworthy angle.",
          procedure: [
            "Select the primary research format: an Annual Benchmark Report focused on AI adoption, response times, and team headcount in customer support.",
            "Establish the target audience criteria: B2B Support Managers, CX Directors, and Helpdesk Admins at companies with 20–2,000 employees.",
            "Define the minimum viable sample size: n=400 qualified completes to ensure statistical validity (exceeding the n=300 B2B threshold).",
            "Formulate the lead newsworthy hypothesis: 'Are support teams using generative AI seeing measurable ticket deflation or are they redeploying saved hours into complex omnichannel escalations?'",
          ],
          outputSample:
            "REPORT CHARTER: 2026 State of B2B Customer Support & AI Maturity\n" +
            "Format: Annual Benchmark Report (Year 1 Baseline for longitudinal tracking)\n" +
            "Target Panel: n=450 B2B CX Directors, Support Team Leads, and VP Operations\n" +
            "Target Margin of Error: ±4.5% at 95% confidence level\n" +
            "Core Narrative Hook: Moving beyond AI hype—quantifying real resolution times, cost-per-ticket shifts, and agent retention.",
          healthy:
            "Report format combines evergreen category benchmarks with a timely, controversial news hook that journalists actively seek data on.",
          unhealthy:
            "Choosing an ad-hoc opinion survey with no annual repeatability and a narrow, product-centric pitch that media outlets will ignore.",
          interpret:
            "An annual benchmark creates compounding link authority because journalists will return to update their cited statistics year after year.",
          soWhat: [
            {
              symptom: "Report scope is too broad and tries to cover every aspect of business operations",
              action: "Narrow the scope to 3 core thematic pillars: tech stack adoption, operational efficiency benchmarks, and future headcount plans",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-survey-instrument-architecture",
          concept: "Designing a Survey That Produces Citable Stats",
          lessonAnchor: "designing-a-survey-that-produces-citable-stats",
          theoryRecap:
            "Survey questions must use neutral phrasing and balanced options to prevent priming respondents. Explicit screening questions and structured demographic buckets ensure the data is representative and citable.",
          question:
            "How do you structure a 10-question survey instrument in Typeform or Google Forms that maximizes completion rates while eliminating question bias?",
          toolName: "Typeform",
          where:
            "In Typeform or Google Forms, construct the 10-question survey instrument with logic branching and required screening gates.",
          procedure: [
            "Add two initial screening questions: (1) Primary job function (CX/Support leadership), (2) Company employee count (20–2,000). Disqualify non-target respondents automatically.",
            "Draft 3 quantitative operational benchmark questions (e.g. median first-response time, monthly ticket volume per agent, average cost per ticket).",
            "Draft 3 categorical strategy questions using neutral single-select or multi-select options (e.g. AI tools deployed, primary support channels, top operational challenge).",
            "Add 1 qualitative open-text question: 'What is the single biggest bottleneck preventing your team from adopting AI automation this year?'",
            "Add 1 optional compensation/budget bracket question to enable industry salary and tool-spend benchmarking.",
          ],
          outputSample:
            "QUESTIONNAIRE OUTLINE (Sample Excerpt):\n" +
            "Q1 [Screening]: Which best describes your primary role? [Director/VP of CX | Support Manager | Frontline Agent (Exit) | Other (Exit)]\n" +
            "Q2 [Benchmark]: What was your team's median First Response Time (FRT) for email tickets in Q4? [<15 min | 15-60 min | 1-4 hrs | 4-24 hrs | >24 hrs]\n" +
            "Q3 [Strategy - Neutral Phrasing]: How has your team's total support headcount changed over the past 12 months? [Increased by >20% | Increased by 5-20% | Remained flat | Decreased by 5-20% | Decreased by >20%]\n" +
            "Q4 [Open Text]: What unexpected operational challenge arose after deploying your first customer-facing AI agent?",
          healthy:
            "Questions are neutrally framed with mutually exclusive response brackets and explicit screening criteria that filter out unverified respondents.",
          unhealthy:
            "Using leading phrasing like 'Do you agree AI tools are essential?' with binary Yes/No options that prime the respondent.",
          interpret:
            "Unbiased categorical and quantitative brackets yield clear percentage stats (e.g. '62% of B2B support teams maintain FRT under 1 hour') that slide directly into press releases.",
          soWhat: [
            {
              symptom: "Survey drop-off rate exceeds 40% on test fielding",
              action: "Reduce open-ended text fields from 3 to 1 and implement Typeform logic jumps to bypass irrelevant tool questions",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-data-cleaning-and-ai-clustering",
          concept: "The Tool Stack",
          lessonAnchor: "the-tool-stack",
          theoryRecap:
            "Raw survey responses must be exported to Google Sheets for cleaning: deduplicating by IP/email, trimming extreme statistical outliers, and calculating medians. Cleaned response subsets are then analyzed using AI prompts to cluster qualitative open-text themes.",
          question:
            "What data cleaning protocol and AI analysis workflow should be applied to transform 450 raw responses into verified, high-impact research findings?",
          toolName: "Google Sheets",
          where:
            "In Google Sheets, import the raw CSV export, freeze header rows, run outlier formulas, and prepare structured text batches for AI synthesis.",
          procedure: [
            "Export raw survey data from Typeform/Google Forms into Google Sheets.",
            "Run deduplication across respondent emails, IP addresses, and completion timestamps (flag responses completed in under 90 seconds as speeders).",
            "Calculate interquartile ranges (IQR) on numeric columns to filter extreme outliers (e.g., ticket volumes exceeding 50,000/rep/month).",
            "Generate summary pivot tables displaying distributions, medians, and percentages for each quantitative question.",
            "Export the open-text response column (e.g. 350 qualitative entries) as a text file and prompt an LLM: 'Cluster these 350 responses into 5 distinct thematic barriers with count frequencies and verbatim quotes.'",
          ],
          outputSample:
            "DATA CLEANING & SYNTHESIS LOG:\n" +
            "Total Submissions: 512 | Disqualified/Incomplete: 62 | Cleaned Sample: n=450\n\n" +
            "Top Finding 1 [Operational]: 58.2% of support teams with <500 employees maintain median FRT under 45 minutes; teams with >1,000 employees average 3.2 hours.\n" +
            "Top Finding 2 [AI Impact]: Teams deploying AI agents reported a 28% drop in tier-1 ticket volume, but a 41% increase in average handle time (AHT) for escalated tier-2 tickets.\n" +
            "AI Qualitative Clusters: #1 Hallucination liability concerns (34% of open-text mentions), #2 Legacy knowledge base fragmentation (28%), #3 Lack of developer bandwidth (19%).",
          healthy:
            "Data cleaning removes bad entries and separates findings into clear quantitative benchmarks and clustered qualitative themes.",
          unhealthy:
            "Publishing raw averages without checking for bot entries, speeders, or extreme statistical outliers that distort the findings.",
          interpret:
            "Combining robust quantitative percentages with clustered qualitative sentiment provides journalists both the headline number and the human context.",
          soWhat: [
            {
              symptom: "A single respondent reports a $10M tool budget in an SMB cohort, skewing the group average",
              action: "Report median budget instead of mean, and note the interquartile range in the methodology appendix",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-press-distribution-and-repurposing-engine",
          concept: "Distribution Playbook",
          lessonAnchor: "distribution-playbook",
          theoryRecap:
            "Publishing the research report is just the starting line. A successful campaign executes a multi-week distribution playbook: Week 1 pitching front-loaded stats to targeted journalists, Week 2 releasing visual data snippets on LinkedIn, Week 3 distributing through industry communities, and ongoing gating for lead generation.",
          question:
            "How do you structure the 4-week multi-channel distribution campaign and repurposing roadmap to maximize both editorial backlinks and qualified leads?",
          toolName: "Canva",
          where:
            "In Canva and your campaign management doc, build embeddable chart assets, the press pitch email template, and the 12-month repurposing schedule.",
          procedure: [
            "Design 5 high-contrast 1200x675px chart graphics in Canva / Datawrapper ready for media downloads and LinkedIn post carousels.",
            "Draft a targeted media pitch email leading with the top 3 counter-intuitive findings, offering journalists exclusive access under embargo 48 hours prior to launch.",
            "Build the ungated HTML report landing page with clean anchor links per finding, plus a gated PDF version offering extended methodology and benchmark calculator tools.",
            "Map a 12-month repurposing schedule: 4 in-depth blog posts expanding on individual stats, a webinar walking through benchmarks, and a slide deck for the sales team.",
          ],
          outputSample:
            "DISTRIBUTION CAMPAIGN BLUEPRINT:\n\n" +
            "1. PRESS PITCH TEMPLATE (Excerpt):\n" +
            "Subject: New Data: 58% of B2B support teams cut tier-1 tickets with AI, but complex escalation times jump 41%\n" +
            "Hi [Journalist Name],\n" +
            "We surveyed 450 verified B2B customer support directors to benchmark real-world AI deployment in 2026. Three key findings your readers at [Publication] might find timely:\n" +
            "1. AI ticket deflation is real (28% drop in tier-1 volume), but average handle time on escalations rose 41%.\n" +
            "2. 64% of teams still struggle with knowledge base fragmentation as the #1 blocker.\n" +
            "3. Only 18% of support teams reduced headcount; 72% redeployed saved hours to proactive outreach.\n" +
            "Full interactive data and high-res chart embeds available here: [Report URL]\n\n" +
            "2. 4-WEEK ROLLOUT SCHEDULE:\n" +
            "- Week 1: Embargoed journalist outreach + HTML report launch with downloadable press kit.\n" +
            "- Week 2: Executive LinkedIn carousel series breaking down one chart per day.\n" +
            "- Week 3: Niche community seeding (Support Driven Slack, CX Reddit, Hacker News) sharing raw data tables.\n" +
            "- Week 4: Gated 32-page executive PDF and benchmark webinar registration launch.",
          healthy:
            "Pitch leads with the newsworthy story and verified stats rather than promoting the brand or the PDF download.",
          unhealthy:
            "Sending generic mass press releases asking journalists to 'download our new whitepaper' with no front-loaded data.",
          interpret:
            "Journalists write stories around surprising data points. Giving them the angle, the number, and the embeddable chart makes their job easy and guarantees high-authority editorial citations.",
          soWhat: [
            {
              symptom: "Journalists copy the statistics but forget to link back to the source URL",
              action: "Send a polite follow-up thanking them for the coverage and providing the exact interactive benchmark chart link for reader reference",
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
            role: "Draft the research charter, survey questions, and press pitch copy",
            why: "Free collaborative workspace",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Clean raw response data, remove outliers, and run descriptive statistics",
            why: "No-cost data analysis and pivot tables",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Forms",
            role: "Free survey collection platform with Google Sheets live sync",
            why: "Zero-cost survey fielding alternative",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Datawrapper",
            role: "Create embeddable interactive data charts and press kit assets",
            why: "Generous free tier with newsroom-ready SVG/PNG chart exports",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Design visual report covers, social media carousels, and infographic banners",
            why: "Free design templates for research presentation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Typeform",
            role: "Survey builder with logic branching and interactive UX",
            why: "Increases survey completion rates and filters out unqualified respondents",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "SurveyMonkey",
            role: "Enterprise panel recruitment and sentiment analysis",
            why: "Access to pre-profiled B2B decision-maker panels when owned list is small",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete 4-part research campaign blueprint containing the report charter and newsworthy hook, a 10-question unbiased survey instrument, data cleaning and AI synthesis protocols in Google Sheets, and a 4-week multi-channel press distribution and repurposing roadmap.",
      sampleOutput:
        "CAMPAIGN BLUEPRINT: The 2026 State of Ecommerce Email Deliverability (Client: Klaviyo)\n\n" +
        "1. RESEARCH CHARTER:\n" +
        "- Format: Annual Industry Benchmark Report (n=500 Ecommerce Marketing Directors, $1M–$50M GMV)\n" +
        "- Margin of Error: ±4.3% at 95% confidence level\n" +
        "- Core Hook: Inbox placement rates following 2024–2025 Gmail/Yahoo authentication rule changes.\n\n" +
        "2. SURVEY INSTRUMENT (10-Question Architecture):\n" +
        "- Screening: Q1 Role verification (Ecommerce Marketing Lead), Q2 Annual GMV bracket.\n" +
        "- Operational Benchmarks: Q3 Average spam complaint rate, Q4 Domain authentication status (DMARC policy level), Q5 List scrubbing frequency.\n" +
        "- Performance Metrics: Q6 Primary promotion-tab placement rate, Q7 Revenue per recipient shift YoY.\n" +
        "- Qualitative: Q8 Biggest obstacle in maintaining sender reputation across high-volume holiday peaks.\n" +
        "- Demographics: Q9 ESP provider, Q10 Monthly email send volume.\n\n" +
        "3. DATA CLEANING & AI WORKFLOW:\n" +
        "- Sheet Cleaning: Removed 48 speeder/duplicate responses; filtered spam complaint rates >10% as outlier misentries.\n" +
        "- Core Stat Extracted: 43% of mid-market ecommerce brands still lack a DMARC 'reject' policy, suffering a 19% lower inbox placement rate.\n" +
        "- AI Theme Clustering: 320 open-text comments clustered into 4 themes: Shared IP volatility (38%), aggressive discount email fatigue (31%), unengaged subscriber pruning hesitation (21%), automated spam bot signups (10%).\n\n" +
        "4. DISTRIBUTION ROADMAP:\n" +
        "- Week 1 (Press): Exclusive pitch to Retail Dive and Marketing Brew leading with the 43% DMARC gap stat; 18 media placements earned.\n" +
        "- Week 2 (Social): 5-slide visual carousel breaking down inbox placement rates by industry sector.\n" +
        "- Week 3 (Community): AMA hosted in Ecommerce Fuel and DTC Twitter Spaces sharing raw benchmark distributions.\n" +
        "- Week 4 (Gating): 24-page PDF benchmark guide launched with interactive deliverability ROI calculator.",
      successCriteria: [
        "Defines a clear research format, target panel criteria (n>=300), and newsworthy angle",
        "Constructs a 10-question survey instrument with neutral phrasing and screening filters",
        "Outlines a structured data cleaning and AI qualitative clustering protocol in Google Sheets",
        "Builds a 4-week multi-channel distribution roadmap with press templates and repurposing channels",
      ],
      portfolioReady: true,
    },
  ],

  // ---------------------------------------------------------------------
  // case-studies
  // ---------------------------------------------------------------------
  "case-studies": [
    {
      id: "case-studies-snapshot-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The 3-Second Test: Deconstructing Flawed B2B Case Study Snapshots",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate two candidate B2B case study snapshot summaries against the lesson's three buyer requirements (problem mirroring, specific metrics, and time-to-value speed), identifying structural defects that cause prospective buyers to bounce.",
      companyId: "slack",
      scenario:
        "You are reviewing case study drafts for Slack's enterprise customer marketing team. Two draft case study snapshot boxes were submitted by freelance writers, but both violate core buyer requirements. Your task is to diagnose the defects before they go to executive review.",
      brief:
        "Examine each specimen snapshot box below. Identify missing time-to-value indicators, vague non-quantified claims, vendor-centric framing, and lack of customer ICP context. Name the exact defects and distinguish them from acceptable formatting variations.",
      mode: "teardown",
      conceptsCovered: [
        "Build the Snapshot Box",
        "What Buyers Actually Want to Read",
        "Five Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-vague-outcomes-snapshot",
          specimenSource: "synthetic-realistic",
          specimen:
            "CUSTOMER SUCCESS SNAPSHOT\n" +
            "Customer: Global Logistics Inc. | Industry: Transportation\n" +
            "Challenge: Inefficient communication systems causing delays across operations teams.\n" +
            "Solution: Deployed Slack Enterprise Grid across all corporate and field units.\n" +
            "Result: Dramatically improved workflow efficiency, enhanced team alignment, and transformed operational productivity.",
          prompt:
            "Diagnose the structural and content defects in this case study snapshot box. What makes it ineffective for a B2B buyer?",
          answerKey: [
            {
              defect:
                "Contains zero quantified metrics in the Result section ('dramatically improved workflow efficiency', 'enhanced alignment') — vague claims are ignored by B2B buyers.",
              severity: "critical",
              whyItMatters:
                "The lesson states that buyers want specific numbers (e.g. 'reduced onboarding from 14 days to 3 days') because vague adjectives convey zero credibility to CFOs and buying committees.",
              lessonRef: "What Buyers Actually Want to Read",
              owner: "you",
            },
            {
              defect:
                "Missing the Time-to-Value metric entirely, failing to state how quickly the customer saw their first measurable operational result.",
              severity: "critical",
              whyItMatters:
                "Time-to-Value is the king KPI in modern B2B buying decisions: buyers need to know speed to first value (e.g. 'first results in 3 weeks'), not just hypothetical end-state outcomes.",
              lessonRef: "Build the Snapshot Box",
              owner: "you",
            },
            {
              defect:
                "Missing customer size firmographics (employee count / revenue tier) and a specific, mirrored challenge description.",
              severity: "moderate",
              whyItMatters:
                "A buyer must immediately identify whether the customer's scale and operational reality match their own before committing to read the full narrative.",
              lessonRef: "Build the Snapshot Box",
              owner: "you",
            },
          ],
          distractors: [
            "It includes a 'Solution' line in the snapshot box — while Step 3 focuses on Customer, Industry, Size, Challenge, Result, and Time-to-Value, having an extra line is a minor layout variation, not the root credibility defect.",
            "It names a transportation company rather than a software company — industry selection is fine as long as the story targets that specific vertical ICP.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-vendor-centric-snapshot",
          specimenSource: "synthetic-realistic",
          specimen:
            "CUSTOMER SPOTLIGHT\n" +
            "Customer: FinTech Core (450 employees, Series C)\n" +
            "Why They Love Us: FinTech Core chose our platform for our AI-powered canvas workflows, SOC2 compliance, 99.99% uptime SLA, and native Salesforce integrations.\n" +
            "Result: 34% reduction in weekly status meetings and 40% faster cross-functional project delivery.\n" +
            "Timeline: Final enterprise security review completed in 90 days.",
          prompt:
            "Identify the buyer-friction and framing defects in this second snapshot specimen.",
          answerKey: [
            {
              defect:
                "Vendor-centric framing in place of a customer problem ('Why They Love Us' listing product features instead of the customer's urgent operational friction).",
              severity: "critical",
              whyItMatters:
                "The lesson emphasizes that writing for the vendor rather than the buyer is the root cause of case study failure. Buyers seek a problem that mirrors their own pain, not vendor self-praise.",
              lessonRef: "Five Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The Timeline field reports internal vendor procurement milestones ('security review completed in 90 days') rather than Time-to-Value for the customer.",
              severity: "moderate",
              whyItMatters:
                "Procurement timeframes highlight vendor friction rather than customer achievement. Time-to-Value should quantify how fast the customer achieved adoption or realized initial savings.",
              lessonRef: "What Buyers Actually Want to Read",
              owner: "you",
            },
          ],
          distractors: [
            "The Result section has two specific percentages (34% and 40%) — these metrics are actually healthy proof points; the defect is in the surrounding problem context.",
            "Listing company size as '450 employees, Series C' is too specific — firmographic precision is actually a best practice for ICP matching.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Review and annotate case study drafts",
            why: "Collaborative editing and annotation for marketing teams",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A structured teardown scorecard diagnosing defect severity across two case study snapshot boxes with actionable rewrite guidelines.",
      sampleOutput:
        "Freshworks Snapshot Box Quality Teardown (Sample Evaluation)\n\n" +
        "Specimen Evaluated: 'How PayFlow Modernized Support With Freshdesk'\n\n" +
        "1. Defect Audit:\n" +
        "   - [Critical] Missing Time-to-Value: Result states '200 hours saved monthly' but provides zero timeframe for deployment speed or initial ROI milestone.\n" +
        "   - [Moderate] Vague ICP Description: Lists size as 'Mid-market fintech' without specifying employee count (e.g. 350 seats) or ticket volume.\n" +
        "   - [Cosmetic] Challenge line exceeds two sentences, burying the core operational trigger.\n\n" +
        "2. Recommended Snapshot Revision:\n" +
        "   Customer: PayFlow | Industry: Fintech Payments | Size: 350 employees\n" +
        "   Challenge: Support queues overloaded with 1,200 daily manual routing requests\n" +
        "   Result: First-response time dropped 72% (from 4h to 18m); CSAT increased to 94%\n" +
        "   Time-to-Value: Deployment live in 48 hours; first 500 tickets automated by Day 5",
      successCriteria: [
        "Correctly identifies missing or misframed Time-to-Value metrics across both specimens",
        "Separates unquantified claims from verified numerical proof points",
        "Distinguishes vendor-centric feature lists from customer-problem framing",
      ],
      portfolioReady: false,
    },
    {
      id: "case-studies-interview-to-snapshot-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "From 30-Minute Interview to High-Converting Snapshot Box",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Transform a raw customer interview transcript into a structured B2B case study asset featuring an above-the-fold Snapshot Box, a 3-act narrative outline, and verified proof quotes.",
      companyId: "zendesk",
      scenario:
        "You just completed a 30-minute customer interview with the VP of Customer Experience at PayNova (a 450-person fintech startup using Zendesk). Sales reps are demanding a 1-page case study asset they can attach to mid-market enterprise proposals this week.",
      brief:
        "Extract the customer profile, quantify the baseline problem and turnaround metrics, extract the critical Time-to-Value milestone, and format the exact Snapshot Box and narrative arc following the lesson's Seven-Step Playbook.",
      mode: "build",
      conceptsCovered: [
        "Build the Snapshot Box",
        "Write the Narrative Arc",
      ],
      steps: [
        {
          stepId: "step-1-extract-snapshot-box",
          concept: "Build the Snapshot Box",
          lessonAnchor: "step-3----build-the-snapshot-box",
          theoryRecap:
            "Step 3 establishes the Snapshot Box as the above-the-fold anchor containing: Customer name/size, Industry, Challenge (1 sentence), Result (1-3 numbers), and Time-to-Value (speed to first outcome).",
          question:
            "Given raw interview notes ('We were drowning in 800 daily tickets and took 4 hours to reply... we got the new routing live in 10 days and first response time dropped to 18 minutes by week 3'), how do you structure the above-the-fold Snapshot Box?",
          toolName: "Google Docs",
          where: "Create a 2-column callout table at the top of your Google Doc titled Customer Snapshot Box.",
          procedure: [
            "Create a structured 2-column callout box at the top of the case study document",
            "Populate Customer, Industry, and Company Size firmographics in the header row",
            "Condense the customer's pre-purchase pain into a single declarative Challenge sentence",
            "Extract 2-3 specific quantified outcome metrics (e.g. percentage response drop, CSAT score)",
            "Isolate the exact Time-to-Value milestone (days to deployment and days to first measurable result)",
          ],
          outputSample:
            "CUSTOMER SNAPSHOT BOX\n" +
            "--------------------------------------------------\n" +
            "Customer: PayNova | Industry: Fintech SaaS | Size: 450 employees\n" +
            "Challenge: Siloed support queues causing 4-hour response times and 18% customer churn\n" +
            "Result: First response time reduced by 92% (18 min avg); CSAT increased from 74% to 96%\n" +
            "Time-to-Value: Routing engine deployed in 10 days; first response time drop recorded by Day 21",
          healthy:
            "Snapshot box leads with verified numbers and states Time-to-Value explicitly within the top 4 lines.",
          unhealthy:
            "Vague claims like 'drastically improved support speed' without stating baseline vs current numbers or deployment duration.",
          interpret:
            "If the snapshot box cannot be understood and verified in 3 seconds, a CFO or VP reviewing the proposal will skip the case study entirely.",
          soWhat: [
            {
              symptom:
                "Sales reps say prospects skim past case studies without reading",
              action:
                "Move the Snapshot Box to the very top of page 1 above all intro paragraphs",
              effort: "5 min",
            },
            {
              symptom:
                "Case study reads like a generic product tutorial",
              action:
                "Rewrite the Challenge line using the customer's direct interview words",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-draft-narrative-arc",
          concept: "Write the Narrative Arc",
          lessonAnchor: "step-4----write-the-narrative-arc",
          theoryRecap:
            "Step 4 defines the three-act structure: Act 1 (Problem in customer's words), Act 2 (The Turning Point and implementation friction/candour), and Act 3 (The Result leading with Time-to-Value).",
          question:
            "How do you structure the three-act narrative arc and embed authentic customer quotes to maximize peer credibility?",
          toolName: "Google Docs",
          where: "Format three distinct H2 sections directly below the Snapshot Box in Google Docs.",
          procedure: [
            "Draft Act 1 (The Problem) using customer vocabulary from interview Question 1 and 2",
            "Draft Act 2 (The Turning Point) detailing why alternatives failed and how implementation was rolled out",
            "Draft Act 3 (The Result) starting with the Time-to-Value metric followed by long-term business impact",
            "Embed one verified customer quotation with full speaker name and title",
          ],
          outputSample:
            "ACT 1 — THE PROBLEM: 'We were losing high-tier enterprise clients because support tickets fell through the cracks.'\n" +
            "ACT 2 — THE TURNING POINT: Evaluated 3 legacy ticketing tools; selected Zendesk for omnichannel routing; completed sandbox testing in 7 business days.\n" +
            "ACT 3 — THE RESULT: Within 3 weeks of rollout, first-touch resolution rose 34%, eliminating over 200 hours of monthly manual triage.\n" +
            "PROOF QUOTE: 'Our reps went from fighting backlog fires to proactively solving tickets in under 20 minutes. The ROI was clear within month one.' — Sarah Lin, Head of Support, PayNova",
          healthy:
            "Act 2 candidly describes implementation timeline; Act 3 begins with speed to value before listing total volume metrics.",
          unhealthy:
            "Act 1 sounds like marketing copy; Act 2 skips implementation details; quote feels fabricated by copywriters.",
          interpret:
            "B2B buyers evaluate Act 2 to assess implementation risk and Act 3 to defend the purchase budget to internal stakeholders.",
          soWhat: [
            {
              symptom:
                "Prospects express fear that software setup will take 6+ months",
              action:
                "Highlight Act 2's step-by-step rollout timeline with exact day counts",
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
            role: "Draft Snapshot Box and narrative structure",
            why: "Standard word processing and team collaboration",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete 1-page B2B case study brief with above-the-fold Snapshot Box, 3-act narrative summary, and attributed customer quote.",
      sampleOutput:
        "Snowflake Enterprise Customer Case Study (One-Page Brief)\n\n" +
        "SNAPSHOT BOX\n" +
        "Customer: HealthMetrics | Industry: Healthcare Analytics | Size: 1,800 employees\n" +
        "Challenge: Legacy on-premise data warehouse queries took 14 hours, delaying clinical compliance reporting\n" +
        "Result: Query processing time reduced by 94% (from 14 hours to 48 minutes); compute costs decreased 32%\n" +
        "Time-to-Value: Data pipeline migrated in 18 days; first automated report delivered on Day 24\n\n" +
        "NARRATIVE OVERVIEW\n" +
        "Act 1 (Problem): Nightly ETL jobs routinely failed, forcing 6 data engineers into emergency weekend maintenance.\n" +
        "Act 2 (Turning Point): Evaluated Snowflake vs legacy SQL appliances; deployed multi-cluster warehouse architecture in under 3 weeks.\n" +
        "Act 3 (Result): 14-hour query jobs now run in 48 minutes with zero maintenance downtime.\n" +
        "Quote: 'Snowflake gave our data science team 20 hours back every single week.' — Marcus Vance, VP Data Engineering",
      successCriteria: [
        "Snapshot Box contains all 6 required fields including Time-to-Value",
        "Narrative follows strict 3-act progression without vendor jargon",
        "Proof elements include attributed spokesperson name and title",
      ],
      portfolioReady: true,
    },
  ],

  // ---------------------------------------------------------------------
  // webinars
  // ---------------------------------------------------------------------
  "webinars": [
    {
      id: "webinars-funnel-conversion-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 5-Phase Webinar Funnel Audit: Diagnosing Registration, Attendance, and Pipeline Drop-Off",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit a B2B webinar program against industry benchmarks (33% attendance rate, 20-40% opportunity conversion, 45% on-demand consumption) to isolate where registrants and pipeline are leaking.",
      companyId: "snowflake",
      scenario:
        "You are auditing the quarterly webinar performance for Snowflake's developer marketing program. Over the last quarter, three webinars attracted 1,200 total registrants, but only 8 sales opportunities were created. You need to diagnose whether the leak is topic fit, reminder cadence, live session engagement, or post-event follow-up.",
      brief:
        "Analyze funnel telemetry across registration, reminder show-up rates, attendee duration, and 24-hour follow-up response. Identify the underperforming phases and specify precise corrective actions for the next event.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Reminder Sequence",
        "Follow-Up and Repurposing",
      ],
      steps: [
        {
          stepId: "step-1-attendance-leak-diagnosis",
          concept: "The Reminder Sequence",
          lessonAnchor: "phase-3-the-reminder-sequence",
          theoryRecap:
            "Phase 3 details the 3-touch reminder sequence (1 week out, 1 day out, 1 hour before) with value-add teasers to lift the average 33% attendance benchmark by 10-15 percentage points.",
          question:
            "Your webinar had 600 registrants but only 108 showed up live (18% attendance rate, far below the 33% benchmark). The reminder log shows only 1 generic calendar invite was sent 2 hours before. How do you diagnose and fix the reminder workflow?",
          toolName: "Google Sheets",
          where: "In Google Sheets, calculate registrant drop-off by reminder touchpoint and compare with the 33% benchmark.",
          procedure: [
            "Log total registrants, confirmation emails sent, and reminder delivery times",
            "Calculate the baseline attendance rate (live attendees / total registrants * 100)",
            "Audit reminder email copy: flag generic 'webinar starting soon' messages lacking content teasers or speaker sneak peeks",
            "Build a 3-touch reminder sequence scheduled for T-7 days, T-24 hours, and T-1 hour with slide previews and question prompts",
          ],
          outputSample:
            "WEBINAR ATTENDANCE AUDIT\n" +
            "Metric                 Actual    Benchmark    Variance    Status\n" +
            "Total Registrants      600       —            —           —\n" +
            "Live Attendees         108       198 (33%)    -90 (-45%)  CRITICAL DEFICIT\n" +
            "Reminder Cadence       1 touch   3 touches    -2 touches  ROOT CAUSE\n" +
            "Reminder Open Rate     24.1%     42.0%        -17.9%      Subject line too generic",
          healthy:
            "Attendance rate reaches 30-38% supported by a 3-touch reminder sequence with >40% open rates.",
          unhealthy:
            "Attendance drops below 20% due to single-touch reminder or missing calendar invites.",
          interpret:
            "A drop-off in live attendance is rarely caused by content disinterest; it is almost always caused by friction in reminder timing and generic messaging that fails to build anticipation.",
          soWhat: [
            {
              symptom: "Attendance rate is stuck below 22%",
              action:
                "Implement 3-touch reminder sequence with teaser slides and calendar attachments",
              effort: "30 min",
            },
            {
              symptom: "Registrants drop out in first 10 minutes",
              action:
                "Cut introductory housekeeping and jump straight into core data within 3 minutes",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-followup-pipeline-segmentation",
          concept: "Follow-Up and Repurposing",
          lessonAnchor: "phase-5-follow-up-and-repurposing",
          theoryRecap:
            "Phase 5 emphasizes that 20-40% of attendees convert into pipeline when segmented follow-ups occur within 24 hours: high-engagement (attended >80%, asked question) get direct sales outreach; medium (40-80%) get case studies; no-shows get recording links.",
          question:
            "Post-event reporting shows 108 attendees and 492 no-shows received the identical generic 'Thanks for registering, here is the recording' email. How do you segment this list into 3 tiered follow-up streams?",
          toolName: "Google Sheets",
          where: "Filter webinar attendee CSV by duration (minutes viewed) and Q&A participation flag.",
          procedure: [
            "Export attendee engagement log with columns: Name, Email, Minutes Attended, Poll Responses, Q&A Asked",
            "Segment 1 (High Intent): Filter attendees with >35 mins watched OR who submitted a Q&A question; route directly to sales SDRs within 4 hours",
            "Segment 2 (Medium Intent): Filter attendees with 15-35 mins watched; queue a 3-part case study nurture sequence",
            "Segment 3 (On-Demand / No-Shows): Filter 0 mins watched; send recording link with punchy key-takeaways summary within 24 hours",
          ],
          outputSample:
            "FOLLOW-UP ROUTING TABLE\n" +
            "Segment          Count  Criteria                     Follow-up Action                     Owner\n" +
            "Tier 1 (Hot)     26     >35 min + asked Q&A          Personalized SDR demo outreach (4h)  Sales\n" +
            "Tier 2 (Warm)    82     15-35 min attended           Relevant customer case study (24h)   Marketing\n" +
            "Tier 3 (No-Show) 492    0 min attended (registrant)  Full recording + 3 key takeaways     Automation",
          healthy:
            "Tier 1 leads routed to sales within 4-24 hours; on-demand viewers directed into an active nurture sequence.",
          unhealthy:
            "Single unsegmented blast email sent 4 days after the event with zero SDR engagement.",
          interpret:
            "Webinar pipeline is created in the 24-48 hours after the live event. Delaying outreach or sending generic emails wastes 80% of the intent generated during the session.",
          soWhat: [
            {
              symptom: "Zero sales meetings booked post-webinar",
              action:
                "Set up automated webhook to push Tier 1 attendees directly into SDR CRM task queues",
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
            role: "Analyze attendance metrics and segment follow-up lists",
            why: "Fast data filtering and tabular calculations",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete 2-part Webinar Funnel Audit diagnostic report containing attendance leakage analysis and a 3-tier post-event routing matrix.",
      sampleOutput:
        "Freshworks Q2 Webinar Telemetry & Lead Routing Audit\n\n" +
        "1. Funnel Performance Metrics:\n" +
        "   - Total Registrants: 840\n" +
        "   - Live Attendees: 294 (35.0% show-up rate — healthy vs 33% benchmark)\n" +
        "   - Average View Time: 38.4 minutes (out of 45-minute broadcast)\n" +
        "   - Live Q&A Questions Asked: 41 questions\n\n" +
        "2. Post-Event Routing Breakdown:\n" +
        "   - Tier 1 High Intent (74 leads): Assigned to BDRs within 2 hours; 18 discovery calls booked (24.3% conversion rate)\n" +
        "   - Tier 2 Nurture (220 leads): Received IT Service Management case study; 12% click-through rate to product tour\n" +
        "   - Tier 3 On-Demand (546 no-shows): 186 watched recording within 7 days (34.0% on-demand conversion)",
      successCriteria: [
        "Accurately diagnoses attendance gap against the 33% industry benchmark",
        "Builds a 3-tier post-event segmentation strategy with distinct lead actions",
        "Establishes a rapid 24-hour response SLA for high-intent attendees",
      ],
      portfolioReady: false,
    },
    {
      id: "webinars-repurposing-playbook-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The 1-to-10 Webinar Repurposing Engine: From 45-Minute Recording to Multi-Channel Campaign",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Build a post-webinar content repurposing plan that turns a single 45-minute master recording into 10 high-leverage marketing assets (video clips, LinkedIn posts, email nurtures, and a blog recap).",
      companyId: "freshworks",
      scenario:
        "Freshworks just hosted a high-performing 45-minute webinar titled 'How Enterprise IT Teams Cut Ticket Resolution by 50%'. As the content lead, you must build the repurposing playbook to ensure the recording continues generating inbound pipeline over the next 6 months.",
      brief:
        "Extract timestamped highlight moments, draft 3 short-form video clip scripts with hooks, write a 200-word LinkedIn recap post, and outline a 3-part mid-funnel email nurture sequence.",
      mode: "build",
      conceptsCovered: [
        "Follow-Up and Repurposing",
        "Topic Selection",
      ],
      steps: [
        {
          stepId: "step-1-timestamp-clip-extraction",
          concept: "Follow-Up and Repurposing",
          lessonAnchor: "phase-5-follow-up-and-repurposing",
          theoryRecap:
            "Phase 5 notes that repurposing multiplies webinar ROI: turning master recordings into short video clips, email series, and social snippets captures the 45% of audience consumption that happens asynchronously on-demand.",
          question:
            "How do you review a 45-minute webinar recording to identify 3 high-impact, standalone 60-second video clips that hook social audiences?",
          toolName: "Loom",
          where: "Review the recording timeline in Loom or your video editor, logging start/end timestamps and hook concepts.",
          procedure: [
            "Review the 5-35 minute core content section and identify counter-intuitive insights or strong data claims",
            "Clip 1 (The Data Hook): Isolate a 45-60s segment citing a surprising benchmark or KPI shift",
            "Clip 2 (The Tactical How-To): Isolate a 60s segment explaining a step-by-step workflow",
            "Clip 3 (The Live Q&A Golden Nugget): Isolate a spontaneous speaker answer to a tough buyer objection",
            "Draft a compelling 1-line on-screen headline hook for each video asset",
          ],
          outputSample:
            "VIDEO CLIP REPURPOSING MATRIX\n" +
            "Clip ID  Timestamp      Headline Hook                                      Core Takeaway\n" +
            "Clip 1   12:15 - 13:10  'Why 70% of IT helpdesk tickets are pure waste'    Automating tier-1 password resets frees up 15h/week\n" +
            "Clip 2   24:40 - 25:35  'The 3-step routing rule that slashed SLA breaches' Dynamic skill-based ticket assignment\n" +
            "Clip 3   38:10 - 39:05  'What to do when legacy systems resist API sync'   Webhooks + middleware workaround",
          healthy:
            "Clips are strictly under 60-90 seconds, start with zero fluff or intro, and deliver a complete standalone lesson.",
          unhealthy:
            "Clips start with 'so as I was saying earlier' or require viewing the rest of the webinar to make sense.",
          interpret:
            "Short-form video clips act as the top-of-funnel discovery vehicle that drives prospects back to the full on-demand webinar landing page.",
          soWhat: [
            {
              symptom: "Social video clips get views but zero click-throughs",
              action:
                "Add pinned comment with direct link to gated full recording and transcript",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-email-social-repurposing",
          concept: "Topic Selection",
          lessonAnchor: "phase-1-topic-selection",
          theoryRecap:
            "Phase 1 and Phase 5 emphasize that specific, problem-centered topics provide the exact language needed for high-converting social posts and mid-funnel nurture emails.",
          question:
            "How do you convert the core thesis of the webinar into a 200-word LinkedIn thought leadership post and a 3-part email nurture sequence for attendees?",
          toolName: "Google Docs",
          where: "Open Google Docs, draft the LinkedIn post copy and 3 nurture email outlines with clear CTAs.",
          procedure: [
            "Draft a 200-word organic LinkedIn post highlighting the single biggest data point from the webinar with a link to the on-demand recording",
            "Draft Email 1 (Day 1): Key takeaway summary + link to on-demand recording and slide deck",
            "Draft Email 2 (Day 4): Deep-dive on Clip 2's workflow + relevant customer case study",
            "Draft Email 3 (Day 8): Direct invitation for a customized 15-minute product demonstration or technical audit",
          ],
          outputSample:
            "LINKEDIN POST DRAFT:\n" +
            "Most IT teams spend 40% of their day resetting passwords and routing tickets manually.\n\n" +
            "During our live session yesterday with 300+ IT leaders, we broke down how modern service desks cut resolution time by 50% in under 30 days.\n\n" +
            "The 3 biggest levers:\n" +
            "1. Skill-based auto-routing on ingest\n" +
            "2. Pre-approved self-service catalog workflows\n" +
            "3. Live slack/teams integration for ticket creation\n\n" +
            "Missed the live broadcast? Catch the full 45-minute breakdown + workflow template here: [On-Demand Link]\n\n" +
            "EMAIL NURTURE CADENCE:\n" +
            "Email 1 (Day +1): 'Here is your recording + IT automation checklist'\n" +
            "Email 2 (Day +4): 'How Hamleys cut support tickets by 50% (Case Study)'\n" +
            "Email 3 (Day +8): 'See how your service desk scores: Free 15-min workflow audit'",
          healthy:
            "Every email provides standalone educational value while progressively increasing commercial intent toward the demo CTA.",
          unhealthy:
            "Emails merely repeat 'book a demo now' without reinforcing the webinar's teaching.",
          interpret:
            "A structured repurposing sequence turns an ephemeral 45-minute event into an evergreen demand generation asset.",
          soWhat: [
            {
              symptom: "Nurture sequence unsubscribe rate exceeds 1%",
              action:
                "Increase educational value in Email 2 and soften the sales ask",
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
            role: "Draft email sequences and social copy",
            why: "Collaborative drafting and formatting",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Loom",
            role: "Review and clip recording highlights",
            why: "Screen recording and quick video segmentation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete 10-asset Webinar Repurposing Playbook including 3 timestamped video clip scripts, 1 LinkedIn authority post, and a 3-part mid-funnel nurture sequence.",
      sampleOutput:
        "Slack Enterprise Webinar Repurposing Suite (Sample Output)\n\n" +
        "Master Session: 'Eliminating Internal Email: How High-Growth Teams Scale on Slack'\n\n" +
        "1. Video Clip Breakdown:\n" +
        "   - Clip A (08:20-09:15): 'The 4-hour daily email tax' (Hook: 'Why your best engineers hate email')\n" +
        "   - Clip B (19:45-20:30): 'Setting up channel naming conventions in 10 minutes'\n" +
        "   - Clip C (34:10-35:00): 'How Sandwich Video eliminated 90% of internal email'\n\n" +
        "2. Social Repurposing:\n" +
        "   - 1x LinkedIn carousel post summarising the 5-step Channel Architecture framework (12 slides)\n" +
        "   - 3x video snippet posts with on-screen burned-in captions\n\n" +
        "3. Nurture Flow:\n" +
        "   - Email 1 (T+24h): Full on-demand recording + Channel Setup PDF Guide\n" +
        "   - Email 2 (T+72h): Sandwich Video Customer Case Study breakdown\n" +
        "   - Email 3 (T+7d): 'Ready to optimize your team's workspace? Connect with a Slack solutions specialist'",
      successCriteria: [
        "Identifies 3 standalone video clips with specific timestamps and hooks",
        "Drafts high-engagement LinkedIn post summarizing core data",
        "Builds a 3-touch post-webinar email nurture sequence with progressive CTAs",
      ],
      portfolioReady: true,
    },
  ],

  "repurposing": [
    {
      id: "repurposing-pillar-to-atoms-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "One Post, Four Channels: Build a Repurposing Plan",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real published long-form post, extract tagged atoms and write platform-native (not copy-pasted) versions for two different channels.",
      companyId: "glossybox",
      scenario:
        "You're the content marketer at Glossybox. Marketing just published a 2,400-word blog post, 'The Ultimate K-Beauty Layering Routine,' and you have one week before it drops off the homepage forever.",
      brief:
        "Extract 5-8 atoms from the post, tag each with format and platform, then write two fully transformed (not copy-pasted) atoms for different channels.",
      mode: "build",
      conceptsCovered: [
        "Atom extraction from a pillar asset",
        "Platform-specific transformation, not copy-paste",
      ],
      steps: [
        {
          stepId: "step-1-extract-atoms",
          concept: "Atom extraction from a pillar asset",
          lessonAnchor: "step-2-extract-the-atoms",
          theoryRecap:
            "The lesson's Step 2 says a 2,500-word post typically yields 12-18 distinct atoms, each tagged with format fit, target platform, and urgency.",
          question:
            "Read the K-Beauty layering post. List 5-8 discrete ideas, stats, or steps worth extracting, and tag each with a format, a platform, and an urgency (evergreen or time-bound).",
          toolName: "Google Sheets",
          where:
            "Build a 4-column tracker: Idea | Format | Platform | Urgency.",
          procedure: [
            "Read the pillar post once for structure, once for standalone facts or steps",
            "Log every discrete idea, stat, or process step as its own row",
            "Tag each row with a format fit (quote card, carousel slide, thread point, email tip)",
            "Tag each row with the platform where that format performs best",
            "Mark each row evergreen or time-bound so the drip schedule can sequence it",
          ],
          outputSample:
            "Idea: 'Never skip the essence step, it's what makes the rest absorb'\nFormat: quote card + carousel slide 1\nPlatform: Instagram\nUrgency: evergreen\n\nIdea: '7-step order: cleanser, toner, essence, serum, sheet mask, moisturizer, SPF'\nFormat: carousel (7 slides) + email checklist\nPlatform: Instagram, email\nUrgency: evergreen",
          healthy:
            "5-8 rows, each with a specific idea, a named format, and a named platform, atoms cover different angles of the post.",
          unhealthy:
            "A single row that says 'summarize the whole post for social,' no format or platform picked, everything vague.",
          interpret:
            "If an idea can't get its own row with a specific format and platform, it isn't an atom yet, it's still pillar-level thinking.",
          soWhat: [
            {
              symptom: "Every atom row says 'social media' as the platform",
              action: "Force a single named platform per row before moving to Step 2",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-platform-transform",
          concept: "Platform-specific transformation, not copy-paste",
          lessonAnchor: "step-3-transform-do-not-copy-paste",
          theoryRecap:
            "The lesson's Step 3 warns that a verbatim excerpt reads as lazy, every atom needs a native opening hook and a platform-appropriate close.",
          question:
            "Pick one atom from your tracker. Write a full LinkedIn version and a full Instagram carousel-slide version. Do the hook, structure, and close actually differ, or is one a trimmed copy of the other?",
          toolName: "Canva",
          where:
            "Draft both copy versions in your tracker first, then design the Instagram slide in a free Canva template.",
          procedure: [
            "Write the LinkedIn version: hook line, 2-3 short paragraphs, a closing question",
            "Write the Instagram carousel version: one bold headline per slide, minimal supporting text",
            "Check both against the pillar sentence, neither should be a trimmed copy-paste of it",
            "Design the Instagram slide in Canva using a free carousel template",
            "Note in your tracker which UTM tag each atom will carry when scheduled",
          ],
          outputSample:
            "LinkedIn: 'Most people do a 10-step Korean skincare routine wrong, they skip the one step that makes everything else work. Here's the order that actually absorbs into skin, and why sequence matters more than product count. [3 short paragraphs] What's the one skincare step you always skip?'\n\nInstagram Slide 1: 'YOU'RE SKIPPING THE STEP THAT MAKES THE OTHER 6 WORK' (bold headline, minimal text, product-swatch visual)",
          healthy:
            "The LinkedIn post reads as a professional insight with a discussion hook, the Instagram slide reads as a punchy visual headline, someone could tell them apart with the platform names hidden.",
          unhealthy:
            "Both versions are the same three sentences with the paragraph breaks removed for Instagram.",
          interpret:
            "If you can swap the two atoms between platforms and nothing feels wrong, the transformation step didn't happen.",
          soWhat: [
            {
              symptom: "The Instagram slide has the same sentence length as the LinkedIn post",
              action: "Cut the Instagram text to one headline per slide before designing it",
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
            role: "Build the atom-extraction tracker",
            why: "Free, no account friction, easy to share with a content calendar owner",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Canva",
            role: "Design the Instagram carousel slide from the transformed copy",
            why: "Free templates cover carousel and quote-card formats out of the box",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Canva Pro adds brand-kit locked fonts/colors and batch resizing across formats, useful once you're repurposing weekly, not required for this project.",
      },
      deliverable:
        "An atom-extraction tracker (5-8 tagged rows) plus two fully transformed atoms, one LinkedIn post and one designed Instagram carousel slide, from the same source idea.",
      sampleOutput:
        "Zendesk repurposing tracker (excerpt)\n\nIdea: 'First response time is the #1 driver of CSAT, not resolution time'\nFormat: LinkedIn post + email section\nPlatform: LinkedIn, newsletter\nUrgency: evergreen\n\nLinkedIn: 'Everyone optimizes for resolution time. The data says first response time matters more to customers...' \nEmail: '3 support metrics worth watching this quarter, #1: first response time...'",
      successCriteria: [
        "Extracts 5-8 distinct, specifically tagged atoms from the source post",
        "LinkedIn and Instagram versions of the same idea have genuinely different hooks and structure, not a trimmed copy-paste",
        "Each atom is tagged with a platform and an urgency, ready to slot into a drip schedule",
      ],
      portfolioReady: true,
      stretch:
        "Add a third atom transformed for email newsletter and a fourth for a Twitter/X thread, then sequence all four onto a 4-week drip calendar.",
    },
  ],
};
