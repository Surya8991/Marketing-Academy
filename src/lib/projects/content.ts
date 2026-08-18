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

  "topic-clusters": [
    {
      id: "topic-clusters-link-gap-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Reciprocal Link Check: Auditing a Pillar's Cluster Map",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 12-page list (1 pillar plus 11 cluster candidates) with URL, page type, title, and whether it links back to the pillar, decide which pages are genuine cluster pages, which are missing the reciprocal link, and whether the pillar itself is scoped correctly.",
      companyId: "lenskart",
      scenario:
        "You're the content strategist at Lenskart auditing the 'Eyeglasses Buying Guide' cluster before a Q4 content push. Someone published 11 articles under this pillar over the last year with no consistent linking discipline.",
      brief:
        "Sort the 12-page export by whether each cluster page links back to the pillar, flag every gap, and verdict whether the pillar topic itself is broad enough to justify 15-20 subtopics or is secretly a cluster page wearing a pillar's title.",
      mode: "diagnostic",
      conceptsCovered: [
        "Auditing reciprocal pillar-to-cluster linking",
        "Checking whether a pillar topic is broad enough to be a pillar",
      ],
      steps: [
        {
          stepId: "step-1-link-gap-audit",
          concept: "Auditing reciprocal pillar-to-cluster linking",
          lessonAnchor: "mistake-2-no-internal-links-on-publication",
          theoryRecap:
            "The lesson's Mistake 2 says a cluster page without a reciprocal link to the pillar breaks the cluster structure, and Mistake 1 says a pillar page that's actually narrow enough to be a cluster page defeats the whole architecture before linking even matters.",
          question:
            "Of the 11 'cluster' pages under Lenskart's eyeglasses pillar, 4 don't link back to the pillar at all, and the pillar page itself is titled 'Best Eyeglasses for Round Faces Under 2000'. What's broken here, and in what order do you fix it?",
          toolName: "Google Sheets",
          where: "Import the 12-row page export, freeze the header row, and add a 'Verdict' column.",
          procedure: [
            "Import the export: URL, page type, title, word count, links-to-pillar (Y/N)",
            "Filter links-to-pillar = N and list every gap with its page title",
            "Read the pillar page's own title and scope; check whether it names one narrow attribute (face shape, price band) instead of the whole topic",
            "Mark the pillar page's verdict separately from the individual link gaps, since fixing links can't fix a mis-scoped pillar",
          ],
          outputSample:
            "PILLAR: 'Best Eyeglasses for Round Faces Under 2000' -> VERDICT: too narrow, this is a cluster topic wearing a pillar title\n\nMISSING RECIPROCAL LINK (4 of 11):\n  /blue-light-glasses-guide\n  /progressive-lens-guide\n  /kids-eyeglasses-guide\n  /eyeglasses-frame-material-guide",
          healthy:
            "The pillar covers the full topic (eyeglasses buying, broadly) and all 11 cluster pages link back to it; the 4 gaps get fixed before anything new is published.",
          unhealthy:
            "Treating the 4 missing links as the only problem and leaving the pillar's narrow scope untouched, so the 'fixed' cluster still can't hold topical authority for the broader keyword.",
          interpret:
            "A cluster with perfect linking but a mis-scoped pillar is still broken; the pillar's breadth has to be right before link hygiene can do its job.",
          soWhat: [
            {
              symptom: "4 of 11 cluster pages don't link back to the pillar",
              action: "Add the reciprocal link to each of the 4 pages this week; block any new cluster page from publishing without it",
              effort: "30 min",
            },
            {
              symptom: "The pillar page title names one narrow attribute instead of the whole topic",
              action: "Rewrite the pillar as a broad 'Eyeglasses Buying Guide' and demote the narrow version to a cluster page under it",
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
            role: "Sort, filter, and flag the page export",
            why: "Free, already open in every browser tab, no import friction for a one-time audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A link-gap audit sheet flagging every cluster page missing a reciprocal pillar link, plus a written verdict on whether the pillar itself is scoped correctly.",
      sampleOutput:
        "Warby Parker, 'Blue Light Glasses' cluster audit (excerpt)\n\nPILLAR: 'Blue Light Glasses: The Complete Guide' -> VERDICT: correctly scoped, 18 realistic subtopics\n\nMISSING RECIPROCAL LINK (2 of 9):\n  /blue-light-glasses-for-gaming\n  /blue-light-glasses-prescription-vs-non\n\nACTION: add 2 links this week, no pillar rewrite needed",
      successCriteria: [
        "Correctly identifies all pages missing a reciprocal link to the pillar",
        "Correctly flags the pillar page as too narrow, citing the 15-25 subtopic breadth test",
        "Separates the link-gap fix from the pillar-rescope fix as two different actions with two different effort levels",
      ],
      portfolioReady: true,
    },
    {
      id: "topic-clusters-pillar-plan-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Cluster: A Pillar and 15-Subtopic Plan for Warby Parker",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Following the lesson's seven-step playbook, choose a correctly-scoped pillar topic, map 15 cluster subtopics tagged by funnel stage, and produce the interlink map that connects every page to the pillar and to at least one sibling cluster page.",
      companyId: "warby-parker",
      scenario:
        "You're planning Q1 content for Warby Parker's eyewear blog. Leadership wants a defensible content architecture, not a random list of blog post ideas, before the team writes a single word.",
      brief:
        "Pick one pillar topic broad enough for 15-25 subtopics, map 15 cluster pages across Awareness, Consideration, and Decision stages, and build the link map showing pillar-to-cluster and cluster-to-cluster connections.",
      mode: "build",
      conceptsCovered: [
        "Choosing a pillar topic broad enough for 15-25 subtopics",
        "Segmenting cluster topics by funnel stage",
      ],
      steps: [
        {
          stepId: "step-1-pillar-scoping",
          concept: "Choosing a pillar topic broad enough for 15-25 subtopics",
          lessonAnchor: "step-1-choose-your-core-topics",
          theoryRecap:
            "Step 1 of the playbook says a good pillar topic is broad enough to spawn 15-25 subtopics but narrow enough that one site can realistically cover everything; 'marketing' is too broad, 'email marketing' is a pillar, 'email subject lines' is a cluster.",
          question:
            "Warby Parker sells prescription glasses, sunglasses, blue light glasses, and contacts. Is 'Eyewear' a workable pillar topic, or does it need to be split, and into what?",
          toolName: "Google Docs",
          where: "A shared doc: candidate pillar topics with a breadth gut-check for each.",
          procedure: [
            "List 3 candidate pillar topics: 'Eyewear' (too broad), 'Prescription Glasses Buying Guide' (right size), 'Blue Light Glasses' (right size)",
            "For each candidate, sketch 5 example subtopics to gut-check whether it can plausibly reach 15-25",
            "Pick the pillar topic for this plan and write a one-sentence scope statement defining what it does and does not cover",
          ],
          outputSample:
            "CANDIDATE: 'Eyewear' -> REJECTED, too broad, would force competing sub-pillars\nCANDIDATE: 'Prescription Glasses Buying Guide' -> SELECTED\nScope: covers lens types, frame fit, prescriptions, insurance, and online ordering; excludes sunglasses and contacts (separate future pillars)",
          healthy:
            "The chosen pillar has a written scope boundary and can plausibly generate 15-25 distinct, non-overlapping subtopics.",
          unhealthy:
            "Picking 'Eyewear' as the pillar because it sounds impressive, then discovering halfway through subtopic mapping that sunglasses and contacts content don't fit under one page.",
          interpret:
            "A pillar's breadth test happens before any subtopic gets written, not after content already exists and needs to be forced into a structure.",
          soWhat: [
            {
              symptom: "The pillar candidate is a whole product category, not a topic",
              action: "Split it into 2-3 narrower pillars with non-overlapping scope statements",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-funnel-mapping",
          concept: "Segmenting cluster topics by funnel stage",
          lessonAnchor: "step-3-segment-by-funnel-stage",
          theoryRecap:
            "Step 3 says every cluster topic gets tagged Awareness, Consideration, or Decision, and a healthy cluster has content at all three stages; an Awareness-only cluster gets traffic but not conversions.",
          question:
            "You've brainstormed 15 subtopics for the Prescription Glasses pillar. 11 are Awareness ('what is a PD measurement'), 2 are Consideration, 2 are Decision. What does this distribution tell you before you write a single article?",
          toolName: "Google Sheets",
          where: "A tab with columns: Subtopic, Funnel Stage, Target Keyword.",
          procedure: [
            "List all 15 subtopics in rows and tag each with Awareness, Consideration, or Decision",
            "Count the distribution per stage",
            "Add or reassign subtopics until Consideration and Decision each have at least 3-4 entries, since 11 Awareness pages plus 2-2 leaves the bottom of the funnel starved",
          ],
          outputSample:
            "Awareness: 8 (was 11, moved 3 to Consideration)\nConsideration: 4 (comparison + how-to: 'Progressive vs bifocal lenses', 'How to read your prescription')\nDecision: 3 ('Best prescription glasses for astigmatism', 'Warby Parker vs Zenni', 'Home try-on kit review')",
          healthy:
            "All three funnel stages have at least 3-4 subtopics each, so the cluster can both attract traffic and convert it.",
          unhealthy:
            "Shipping 11 Awareness posts and 4 Consideration/Decision posts, then wondering why the cluster drives traffic but not orders.",
          interpret:
            "Funnel-stage counting is a planning checkpoint, not a labeling exercise done after writing.",
          soWhat: [
            {
              symptom: "Consideration and Decision subtopics combined are fewer than a third of the cluster",
              action: "Reassign or add subtopics until each stage has a minimum viable count before publishing begins",
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
            role: "Draft the pillar scope statement and interlink map narrative",
            why: "Free, easy to share with stakeholders for sign-off before writing begins",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Tag all 15 subtopics by funnel stage and track link targets",
            why: "Free, sortable, the standard tool for this kind of tagging exercise",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A pillar scope statement plus a 15-row cluster plan (subtopic, funnel stage, target keyword, which sibling cluster pages it links to) ready to hand to writers.",
      sampleOutput:
        "Lenskart, 'Sunglasses Buying Guide' pillar plan (excerpt)\n\nPillar scope: sunglasses only, excludes prescription eyeglasses (separate pillar)\n\n1. What is UV400 protection? — Awareness — links to #7\n2. Polarized vs non-polarized lenses — Awareness — links to #9\n7. Best sunglasses for driving — Consideration — links to #1, #9\n9. Ray-Ban vs Lenskart sunglasses — Decision — links to #7",
      successCriteria: [
        "Pillar topic has a written scope statement and can plausibly reach 15-25 subtopics",
        "All 15 subtopics are tagged by funnel stage with at least 3-4 per stage",
        "Each subtopic lists at least one sibling cluster page it should link to, not just the pillar",
      ],
      portfolioReady: true,
      stretch:
        "Draft the pillar page's H2 outline using the 15 subtopics as section headers, then check that no single H2 goes deep enough to compete with its own cluster page.",
    },
  ],
  "editorial-calendar": [
    {
      id: "editorial-calendar-mistake-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Monday Review: Auditing a Stale Editorial Calendar",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 20-row calendar export, identify which rows are missing a named owner, which have gone stale (no status change in 2+ weeks), and which were planned by channel instead of by story.",
      companyId: "duolingo",
      scenario:
        "You've just joined Duolingo's content team and inherited a 20-row calendar nobody has reviewed in three weeks. Your manager wants a status report before Monday's planning meeting.",
      brief:
        "Audit the export against the lesson's five required columns and flag every row with a missing owner, a stale status, or a channel-only entry with no story or theme attached.",
      mode: "diagnostic",
      conceptsCovered: [
        "Checking calendar rows for the five required columns",
        "Detecting a stale calendar before it becomes a historical artifact",
      ],
      steps: [
        {
          stepId: "step-1-stale-row-audit",
          concept: "Checking calendar rows for the five required columns",
          lessonAnchor: "component-1-the-five-required-columns",
          theoryRecap:
            "Component 1 says every row needs a publish date, title, channel, owner, and status; 'the team' is not an owner, and a calendar untouched for over two weeks stops being a source of truth (per the Common Mistakes section).",
          question:
            "Of the 20 rows, 5 list 'Content Team' instead of a person's name, and 6 haven't had a status change since the last sprint, 18 days ago. Which of these 11 rows are the real risk going into Monday's meeting?",
          toolName: "Google Sheets",
          where: "Import the 20-row export, freeze row 1, add a 'Risk' column.",
          procedure: [
            "Filter Owner = 'Content Team' or blank; list all matches",
            "Filter last-status-change date > 14 days ago; list all matches",
            "Cross-reference the two lists: rows appearing in both are the highest risk, since no one is accountable AND nothing has moved",
          ],
          outputSample:
            "NO NAMED OWNER (5 rows):\n  Nov 3, Blog, 'Q4 email audit'\n  Nov 10, LinkedIn, 'Streak feature launch'\n\nSTALE 14+ DAYS (6 rows):\n  Oct 20, Blog, 'Duolingo Max update' — stuck at Draft since Oct 22\n\nHIGH RISK (both): 2 rows",
          healthy:
            "Every row has a named owner, and no row has gone more than 14 days without a status update.",
          unhealthy:
            "Reporting '11 rows have an issue' as one flat list, without separating the 2 that are both unowned AND stale from the 9 with only one problem.",
          interpret:
            "An unowned row and a stale row are different failure modes; a row with both is the one that will actually miss its publish date.",
          soWhat: [
            {
              symptom: "5 rows list 'Content Team' instead of a person",
              action: "Assign a named owner to each in the Monday meeting before discussing anything else",
              effort: "5 min",
            },
            {
              symptom: "2 rows are both unowned and stale 14+ days",
              action: "Escalate these 2 specifically as at-risk for their publish date, not just 'needs an owner'",
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
            role: "Filter and cross-reference the calendar export",
            why: "Free, standard tool for a one-time audit of a spreadsheet export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A risk-flagged version of the 20-row calendar, separating unowned rows, stale rows, and rows that are both, ready to drive Monday's 30-minute review.",
      sampleOutput:
        "Allbirds, calendar audit (excerpt)\n\nNO NAMED OWNER (3 of 18 rows):\n  Dec 1, Email, 'Holiday restock notice'\n\nSTALE 14+ DAYS (2 of 18 rows):\n  Nov 15, Blog, 'Wool runner sustainability update' — stuck at Review since Nov 18\n\nHIGH RISK (both): 1 row -> escalate first",
      successCriteria: [
        "Correctly identifies every row missing a named individual owner",
        "Correctly identifies every row with no status change in 14+ days",
        "Separates the overlap (both unowned and stale) as the highest-priority group",
      ],
      portfolioReady: true,
    },
    {
      id: "editorial-calendar-12-week-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build It: A 12-Week Calendar with Reactive Buffer",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Following the lesson's setup sequence, build a 12-week editorial calendar for one campaign theme per month, with the first 4 weeks fully detailed, weeks 5-12 at the theme level, and 20-30% of slots left as reactive buffer.",
      companyId: "allbirds",
      scenario:
        "Allbirds' content lead wants a Q1 calendar that won't collapse by week three the way the last 'five posts a week' plan did.",
      brief:
        "Build a 12-week calendar: 3 monthly campaign themes, weeks 1-4 fully detailed with owner and status, weeks 5-12 at theme level only, and a visible reactive buffer of 20-30% of total slots.",
      mode: "build",
      conceptsCovered: [
        "Structuring a calendar in 12-week blocks with a detail/theme split",
        "Reserving reactive buffer slots instead of pre-committing every slot",
      ],
      steps: [
        {
          stepId: "step-1-buffer-cadence-build",
          concept: "Reserving reactive buffer slots instead of pre-committing every slot",
          lessonAnchor: "component-3-a-sustainable-cadence",
          theoryRecap:
            "Component 3 says to set a cadence sustainable on your worst week, plan in 12-week blocks rather than 12-month plans, and reserve 20-30% of slots as reactive buffer for things like a trending topic or competitor announcement.",
          question:
            "At one long-form piece per week plus 2 social posts, a 12-week plan has 36 total slots. How many of those 36 do you leave open as reactive buffer, and which weeks get full detail versus theme-only, per the setup sequence?",
          toolName: "Google Sheets",
          where: "A 12-week grid: Week, Theme, Slot 1-3, Status, Buffer (Y/N).",
          procedure: [
            "Calculate the buffer: 36 slots x 20-30% = 7-11 slots reserved as 'Buffer - TBD'",
            "Assign one campaign theme per month (3 themes across 12 weeks)",
            "Fill weeks 1-4 with specific titles, owners, and draft-due dates per the setup sequence",
            "Leave weeks 5-12 at the theme label only, per the setup sequence's Week 3 instruction",
          ],
          outputSample:
            "Week 1: Theme 'Sustainable Materials 101' — Blog: 'What is regenerative wool?' (Owner: Priya, due Jan 8) + 2 social slots\nWeek 5: Theme 'Behind the Factory' (theme only, no titles yet)\nBuffer slots reserved: 8 of 36 (22%), unlabeled 'TBD - reactive'",
          healthy:
            "36 total slots, 8 marked as open buffer, weeks 1-4 fully detailed, weeks 5-12 showing only a theme label, not empty rows.",
          unhealthy:
            "Filling all 36 slots with specific titles for all 12 weeks upfront, leaving no room to respond to a real-world event in week 6.",
          interpret:
            "A calendar that is 100% pre-committed is not more organized, it's more brittle; buffer slots are a deliberate structural choice, not a gap in planning.",
          soWhat: [
            {
              symptom: "All 36 slots already have specific titles assigned",
              action: "Convert 7-11 of the weeks 5-12 slots to labeled 'Buffer - TBD' before the quarter starts",
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
            role: "Build the 12-week grid with theme, detail, and buffer columns",
            why: "Free, shareable, the format most teams already have open daily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 12-week calendar grid: 3 campaign themes, weeks 1-4 fully detailed with owner and draft-due date, weeks 5-12 at theme level, and 20-30% of slots visibly reserved as reactive buffer.",
      sampleOutput:
        "Duolingo, Q1 calendar (excerpt)\n\nWeek 1: Theme 'Streaks and Habit Science' — Blog: 'Why streaks work, the psychology' (Owner: Marco, due Jan 6)\nWeek 6: Theme 'New Language Launches' (theme only)\nBuffer: 9 of 36 slots (25%) reserved as 'TBD - reactive'",
      successCriteria: [
        "Buffer slots total 20-30% of all planned slots and are visibly labeled, not just empty",
        "Weeks 1-4 have specific titles, owners, and draft-due dates; weeks 5-12 have theme labels only",
        "Exactly one campaign theme is assigned per month",
      ],
      portfolioReady: true,
    },
  ],

  "content-moats": [
    {
      id: "content-moat-viability-audit",
      tier: "mini",
      archetype: "audit",
      title: "Moat or Commodity? Auditing Squarespace's Q3 Content Backlog",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given six proposed content pieces, classify each as one of the four moat types or as commodity content using the lesson's framework, then decide which ones deserve budget.",
      companyId: "squarespace",
      scenario:
        "You're a content strategist at Squarespace reviewing a proposed Q3 content calendar. The team pitched six ideas and you have budget to fund three.",
      brief:
        "Sort the six pitches by moat type, flag any that are commodity content wearing a research costume, and rank the three fundable ones.",
      mode: "diagnostic",
      conceptsCovered: ["The four moat types"],
      steps: [
        {
          stepId: "step-1-classify-moat-type",
          concept: "The four moat types",
          lessonAnchor: "the-four-moat-types",
          theoryRecap:
            "The lesson splits moat-grade content into four inputs: product telemetry, original surveys, manual datasets, and operator expertise. Anything that isn't built on one of these is commodity content, no matter how well it's written.",
          question:
            "Given six pitch one-liners, which are real moats and which are commodity content mislabeled as research?",
          toolName: "Google Sheets",
          where: "Import the six pitch descriptions into a sheet with a 'moat type' column.",
          procedure: [
            "List the six pitches with their proposed data source",
            "Tag each with one of: telemetry, survey, manual dataset, operator expertise, or 'none'",
            "Flag any pitch tagged 'none' as commodity content regardless of topic quality",
          ],
          outputSample:
            "1. 'State of Website Builder Speed' - aggregated Core Web Vitals data from Squarespace sites -> TELEMETRY\n2. '10 Website Design Trends for 2026' -> NONE (opinion roundup, no proprietary input)\n3. 'Survey: 600 small business owners on website costs' -> SURVEY\n4. 'How We Rebuilt Our Checkout Flow' (founder engineering post) -> OPERATOR EXPERTISE\n5. 'Best Website Builders Compared' -> NONE (comparison, no original data)\n6. 'Manual audit of 200 competitor pricing pages' -> MANUAL DATASET",
          healthy:
            "Three moat-type pitches get funded; the two 'NONE' pitches get reassigned to a lighter content track or killed.",
          unhealthy:
            "Funding 'Best Website Builders Compared' at the same budget tier as the telemetry report because it has a punchier headline.",
          interpret:
            "A moat type sorts a backlog into fundable versus not, independent of how interesting the topic sounds.",
          soWhat: [
            {
              symptom: "Two of six approved pitches have no proprietary data source",
              action: "Reassign them to the standard blog track instead of the quarterly flagship budget",
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
            role: "Tag and sort the six pitches by moat type",
            why: "Free, fast enough for a 6-row classification pass",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tagged content calendar showing which pitches are real moats, which are commodity content, and a ranked top-3 for Q3 budget.",
      sampleOutput:
        "Zomato Q3 backlog audit (excerpt)\n\nFUND\n  1. 'Delivery Time Index: 40 Indian Cities' - telemetry, own logistics data\n  2. 'Survey: 800 restaurant owners on discovery habits' - survey\n\nDO NOT FUND (commodity)\n  3. '15 Food Delivery Trends for 2026' - opinion roundup, no data source",
      successCriteria: [
        "Correctly tags all six pitches by moat type or 'none'",
        "Ranks the three fundable pitches ahead of the three commodity ones",
      ],
      portfolioReady: true,
    },
    {
      id: "nykaa-branded-index-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Nykaa Beauty Discovery Index: From Raw Survey Data to Distribution Kit",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Turn a raw 520-respondent survey export into a named, quotable branded index with a moat-grade analysis section and a methodology paragraph, following the lesson's publishing loop.",
      companyId: "nykaa",
      scenario:
        "You're the content lead at Nykaa. Research just handed you a clean export from a 520-respondent survey of Indian beauty shoppers. Nobody has named it, written the analysis, or planned distribution yet.",
      brief:
        "Name the index, extract the one quotable stat, write the counter-intuitive analysis, and draft the methodology paragraph.",
      mode: "build",
      conceptsCovered: [
        "Naming a branded institution and a quotable metric",
        "What makes the analysis moat-grade",
      ],
      steps: [
        {
          stepId: "step-1-name-and-quote",
          concept: "Naming a branded institution and a quotable metric",
          lessonAnchor: "the-publishing-loop",
          theoryRecap:
            "The lesson's Publishing Loop says to name a metric only you can measure and assign a brand name to the dataset before publishing edition one; 'the Acme SaaS Spend Index' beats 'Our Q2 Data Report.'",
          question:
            "The survey found 61% of respondents now research a beauty product on social video before buying it, even in-store. What do you name the index, and what's the single quotable sentence?",
          toolName: "Google Docs",
          where: "Draft the index name and the pitch-ready quote at the top of a new doc.",
          procedure: [
            "Pull the single most surprising, specific stat from the export (61% pre-purchase video research)",
            "Name the index: 'The Nykaa Beauty Discovery Index', not 'Nykaa Survey Report'",
            "Write one quotable sentence a journalist could paste directly into an article",
            "State the cadence: published every six months, starting now",
          ],
          outputSample:
            "INDEX NAME: The Nykaa Beauty Discovery Index, Edition 1\nQUOTABLE STAT: '61% of Indian beauty shoppers now watch a video before buying, even when they purchase in-store.'\nCADENCE: Published every six months, next edition Q1 2027.",
          healthy:
            "A named, quotable index with a stated cadence that a journalist can cite as an ongoing source, not a one-off report.",
          unhealthy:
            "'Nykaa Q3 Beauty Survey Results' with no name, no cadence line, and three paragraphs before the actual number appears.",
          interpret:
            "The name and the single stat are what get quoted; a generic report title gets skimmed once and forgotten.",
          soWhat: [
            {
              symptom: "The report draft opens with methodology instead of the number",
              action: "Move the single quotable stat to the first sentence of the summary",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-moat-grade-analysis",
          concept: "What makes the analysis moat-grade",
          lessonAnchor: "what-makes-the-analysis-moat-grade",
          theoryRecap:
            "Moat-grade analysis needs a named trend with a number attached, a counter-intuitive finding, a practitioner quote, and a methodology note so journalists can verify the sample.",
          question:
            "The same export shows in-store shoppers now watch more pre-purchase video than online-only shoppers do. What's the counter-intuitive takeaway, and what does the methodology note need to say?",
          toolName: "Google Docs",
          where: "Add a 'Key Finding' and a 'Methodology' section below the quotable stat.",
          procedure: [
            "State the counter-intuitive finding: in-store shoppers, not online shoppers, are the heavier video researchers",
            "Add one practitioner quote interpreting why (a category lead or founder, not the AI)",
            "Write a methodology note: sample size 520, collection window, how respondents were recruited, any exclusions",
          ],
          outputSample:
            "KEY FINDING: In-store shoppers watch 1.4x more pre-purchase videos than online-only shoppers, the opposite of what most retailers assume.\nMETHODOLOGY: 520 respondents, Indian metro beauty shoppers, surveyed June-July 2026 via Nykaa's owned panel, excludes respondents who had not purchased beauty products in 90 days.",
          healthy:
            "A finding a general-purpose AI could not have written without the dataset, backed by a verifiable methodology note.",
          unhealthy:
            "A takeaway that just restates the topline stat ('video matters for beauty shoppers') with no methodology section at all.",
          interpret:
            "The counter-intuitive angle plus a checkable methodology is what makes journalists trust and cite the number.",
          soWhat: [
            {
              symptom: "The analysis section restates the stat instead of interpreting it",
              action: "Add one sentence naming who is surprised by the finding and why",
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
            role: "Hold and filter the raw 520-row survey export",
            why: "Free, sufficient for cross-tabbing a single survey wave",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the index name, quotable stat, analysis, and methodology paragraph",
            why: "Free, shareable with editors and PR for the distribution kit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page branded index draft: name, quotable stat, counter-intuitive finding, and a verifiable methodology paragraph, ready to hand to a PR team.",
      sampleOutput:
        "Casper Sleep Recovery Index, Edition 1 (excerpt)\n\nQUOTABLE STAT: 'Side sleepers who switched mattress firmness reported 22% fewer overnight wake-ups.'\nMETHODOLOGY: 540 respondents, US mattress owners, surveyed via Casper's post-purchase panel, March 2026.",
      successCriteria: [
        "Index has a distinct brand name, not a generic report title",
        "The quotable stat appears in the first sentence of the summary",
        "The analysis section states a counter-intuitive finding, not a restatement of the topline number",
        "A methodology paragraph states sample size, collection window, and recruitment method",
      ],
      portfolioReady: true,
      stretch:
        "Draft the three-to-five pre-written quote paragraphs journalists could adapt directly, per the lesson's distribution-kit guidance.",
    },
  ],
  "ai-contentops-workflows": [
    {
      id: "zomato-editorial-workflow-audit",
      tier: "mini",
      archetype: "audit",
      title: "Find the Missing Guardrail: Auditing Zomato's AI Content Pipeline",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a described 3-stage AI content pipeline, identify which of the lesson's five required stages is missing and explain the risk that gap creates.",
      companyId: "zomato",
      scenario:
        "You're auditing Zomato's new AI-assisted blog workflow before it scales to restaurant guides and delivery-time claims. The team describes their pipeline as: 'AI writes a draft, brand editor polishes it, we publish.'",
      brief:
        "Map the described pipeline against the lesson's five-stage editorial workflow and flag the missing stage.",
      mode: "diagnostic",
      conceptsCovered: ["Designing the editorial workflow"],
      steps: [
        {
          stepId: "step-1-find-the-gap",
          concept: "Designing the editorial workflow",
          lessonAnchor: "designing-the-editorial-workflow",
          theoryRecap:
            "The lesson's pipeline runs: AI draft, automated guardrail check, subject matter expert (SME) fact review, brand editor tone polish, then a compliance gate before publish. Skipping the SME step means no one verifies the AI's factual claims.",
          question:
            "Zomato's described workflow is 'AI writes a draft, brand editor polishes it, we publish.' Which stage is missing, and what kind of error does that let through?",
          toolName: "Google Docs",
          where: "List the described pipeline stages in a doc next to the lesson's five required stages.",
          procedure: [
            "Write out Zomato's three described stages in order",
            "Write out the lesson's five required stages in order",
            "Mark which required stages have no equivalent in Zomato's pipeline",
            "Name one factual-claim risk that gap creates for a food-delivery content team",
          ],
          outputSample:
            "ZOMATO PIPELINE: AI draft -> Brand editor -> Publish\nREQUIRED: AI draft -> Guardrail check -> SME fact review -> Brand editor -> Compliance gate -> Publish\nMISSING: Guardrail check AND SME fact review\nRISK: A blog post claiming '30-minute average delivery in Mumbai' ships with no one verifying that number against real ops data.",
          healthy:
            "The gap is named specifically (SME fact review) and tied to a concrete claim type the AI could hallucinate.",
          unhealthy:
            "A vague answer like 'they should double-check things more' with no named stage and no specific claim-type risk.",
          interpret:
            "A brand editor polishes tone; only an SME can catch a wrong delivery-time number or an outdated restaurant policy.",
          soWhat: [
            {
              symptom: "AI-drafted posts publish with unverified operational numbers",
              action: "Insert an SME fact-review step before the brand editor stage, not after",
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
            role: "Map the described pipeline against the lesson's five required stages",
            why: "Free, quick side-by-side list for a single workflow audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page gap analysis naming the missing pipeline stage(s) and the specific factual-claim risk they create.",
      sampleOutput:
        "Casper Sleep pipeline audit (excerpt)\n\nDESCRIBED: AI draft -> Publish\nMISSING: Guardrail check, SME fact review, brand editor, compliance gate\nRISK: A sleep-health claim ships with no medical fact-check, a compliance exposure for a health-adjacent product.",
      successCriteria: [
        "Correctly names every missing stage from the required five",
        "Ties the gap to a specific, plausible factual-claim risk for the company's industry",
      ],
      portfolioReady: true,
    },
    {
      id: "casper-guardrail-style-guide-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build Casper's AI Prompt Guardrail Doc",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given Casper's brand voice notes, build a short guardrail document listing banned AI-tell words and two prompt rules that keep AI drafts on-brand and legally safe.",
      companyId: "casper-sleep",
      scenario:
        "Casper's content team just approved using AI for first drafts of blog posts. Nobody has written the guardrail doc that goes into every prompt yet.",
      brief:
        "Write a banned-words list and two guardrail rules the AI must follow, grounded in Casper's brand voice and health-product compliance needs.",
      mode: "build",
      conceptsCovered: ["Guardrails and brand safety"],
      steps: [
        {
          stepId: "step-1-build-guardrail-doc",
          concept: "Guardrails and brand safety",
          lessonAnchor: "guardrails-and-brand-safety",
          theoryRecap:
            "The lesson recommends a digital style guide fed into every prompt, including a banned-words list for common AI-tell phrases like 'leverage,' 'game-changer,' and 'delve,' plus rules a gateway can enforce automatically.",
          question:
            "Casper sells a health-adjacent product (sleep). What banned words and what two guardrail rules go into the prompt style guide before any draft ships?",
          toolName: "Google Docs",
          where: "Create a 'Casper AI Prompt Guardrails' doc with a banned-words section and a rules section.",
          procedure: [
            "List five AI-tell words to ban outright ('leverage,' 'game-changer,' 'tapestry,' 'delve,' 'unlock')",
            "Write Rule 1: no sleep-health claim ships without a cited study or an internal SME sign-off",
            "Write Rule 2: no customer testimonial or statistic may be invented; only pull from an approved source doc",
          ],
          outputSample:
            "BANNED WORDS: leverage, game-changer, tapestry, delve, unlock\n\nRULE 1: Any claim about sleep quality, health, or medical benefit requires a cited study or SME sign-off before publish.\nRULE 2: Never generate a customer quote, statistic, or testimonial. Pull only from the approved source doc provided in the prompt.",
          healthy:
            "A short, specific doc an editor can paste into every prompt, with rules a compliance reviewer could actually check against.",
          unhealthy:
            "A vague instruction like 'sound like Casper and don't lie,' which gives the AI and the editor nothing checkable.",
          interpret:
            "Specific, checkable rules are what a compliance gate or an automated guardrail can actually enforce; vague tone notes cannot.",
          soWhat: [
            {
              symptom: "Editors keep finding invented statistics in AI drafts",
              action: "Add Rule 2 to the prompt template so the AI is told explicitly not to generate stats",
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
            role: "Draft and store the reusable prompt guardrail document",
            why: "Free, easy to paste into every future AI prompt as a shared reference",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A reusable 'AI Prompt Guardrails' doc with a banned-words list and two checkable brand/compliance rules.",
      sampleOutput:
        "Zomato AI Prompt Guardrails (excerpt)\n\nBANNED WORDS: leverage, revolutionize, delve, tapestry\nRULE 1: No delivery-time or pricing claim ships without a cited internal ops number.\nRULE 2: Never generate a restaurant rating or review quote; pull only from the verified reviews database.",
      successCriteria: [
        "Banned-words list has at least five real AI-tell words",
        "Both rules are specific and checkable, not vague tone guidance",
      ],
      portfolioReady: true,
    },
  ],

  "content-velocity-with-ai": [
    {
      id: "ai-content-quality-gate-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Gate Check: Auditing PolicyBazaar's AI Content Pipeline for Missing Quality Gates",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real AI-assisted blog production log, identify which of the lesson's four quality gates are missing and what breaks without them.",
      companyId: "policybazaar",
      scenario:
        "You're a content ops analyst on PolicyBazaar's insurance blog team. Leadership just doubled the AI drafting quota with no new hires, and one article got flagged for citing a lapsed premium cap.",
      brief:
        "Walk a 10-article production log and flag which quality gate would have caught each problem before publish.",
      mode: "diagnostic",
      conceptsCovered: ["Fact verification before publish"],
      steps: [
        {
          stepId: "step-1-fact-verification-gate",
          concept: "Fact verification before publish",
          lessonAnchor: "quality-gates-what-gets-checked-before-publish",
          theoryRecap:
            "Gate 2 in the lesson requires every stat, date, and named example to have a source before a draft can move forward; an invented or outdated number gets cut, no exceptions.",
          question:
            "Given this production log of 10 AI-drafted articles, 3 shipped with stats that were never checked against a source. Which gate was skipped, and what's the fix?",
          toolName: "Google Sheets",
          where: "Import production-log.csv, add a 'Source Verified Y/N' column",
          procedure: [
            "Import the 10-row production log into Google Sheets",
            "Add a 'Source Verified' column and mark each row Y/N based on whether a source URL is logged",
            "Isolate the 3 rows marked N, these are the fact-verification gate failures",
          ],
          outputSample:
            "Row 4: 'health insurance claim settlement ratio hit 99.9% in 2025' — Source Verified: N\nRow 7: 'premium up to Rs 5 lakh is tax-free under Section 80D' — Source Verified: N (cap is outdated, changed in the last budget)\nRow 9: 'more than 60% of Indians are now insured' — Source Verified: N",
          healthy:
            "Every published stat has a logged source URL and a check date before the article leaves the drafting stage.",
          unhealthy:
            "Three of ten articles publish with unverified or outdated numbers because no one owns the fact-check step.",
          interpret:
            "This isn't a writing-quality problem, it's a missing gate. The brief and voice checks passed; nobody was assigned to verify facts.",
          soWhat: [
            {
              symptom: "AI drafts contain a specific stat with no source",
              action: "Add a mandatory 'Source Verified' column to the production tracker and block publish until it's filled",
              effort: "30 min",
            },
            {
              symptom: "A regulatory or pricing number appears in a draft",
              action: "Route the article to a subject-matter reviewer before the editor pass, not after",
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
            role: "Track and flag verification status per article",
            why: "Free, no setup, easy to filter and sort a production log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A gate-failure report flagging which of the 3 problem articles lacked fact verification, with a proposed tracker column to prevent recurrence.",
      sampleOutput:
        "Snowflake DevRel blog, Q2 gate audit (excerpt)\n\nGATE 2 FAILURE (1 of 8 articles)\n  'Data warehousing costs dropped 40% industry-wide in 2025' — no source logged, flagged before publish, corrected to a cited Snowflake benchmark stat",
      successCriteria: [
        "Correctly identifies all 3 gate-2 failures in the log",
        "Proposes a concrete tracker fix, not just 'be more careful'",
      ],
      portfolioReady: true,
    },
    {
      id: "content-repurposing-pipeline-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "One Interview, Eight Assets: Building Adyen's Repurposing Pipeline",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given one 40-minute executive interview transcript, build a repurposing plan that maps it into the lesson's 8-piece output model.",
      companyId: "adyen",
      scenario:
        "Adyen's content team just recorded a 40-minute interview with a payments exec on embedded finance trends. You have one repurposing cycle to turn it into a distribution plan before the team drafts anything.",
      brief:
        "Map the transcript's 5 quotable moments into the formats the lesson's pipeline defines, and assign an owner and AI-vs-human split to each.",
      mode: "build",
      conceptsCovered: ["Content repurposing pipeline design"],
      steps: [
        {
          stepId: "step-1-repurposing-map",
          concept: "Content repurposing pipeline design",
          lessonAnchor: "content-repurposing-pipelines",
          theoryRecap:
            "The lesson's pipeline turns one 40-minute interview into a blog post, a newsletter excerpt, three LinkedIn posts, five video clips, and a thread, eight pieces from one source conversation.",
          question:
            "Given this 5-quote transcript excerpt, which quote becomes the blog post's core argument, and which become standalone LinkedIn posts?",
          toolName: "Google Docs",
          where: "Paste the transcript excerpt, tag each quote with a target format",
          procedure: [
            "Paste the 5-quote transcript excerpt into a Google Doc",
            "Tag each quote with its target format (blog, newsletter, LinkedIn x3, clip, thread)",
            "Note who drafts each piece, AI first-pass or human first-pass, per the lesson's three-pass model",
          ],
          outputSample:
            "QUOTE 2 (the strongest, most specific claim) -> Blog post core argument, human-drafted intro, AI-structured body\nQUOTE 4 (a sharp one-liner on fraud rates) -> Standalone LinkedIn post, AI first-draft, human edit pass\nQUOTE 5 (a customer anecdote) -> Newsletter excerpt, human-written, no AI pass",
          healthy: "Each piece has an explicit AI-vs-human assignment and a target format before drafting starts.",
          unhealthy:
            "The team drafts all pieces from scratch instead of tagging and repurposing from the one source interview.",
          interpret:
            "Repurposing planning happens before drafting, not after. Skipping this step is why teams create more content without extracting more value from what they already have.",
          soWhat: [
            {
              symptom: "The team is drafting each content piece from a blank page",
              action: "Tag every quote in the source transcript with its target format before anyone opens a doc to draft",
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
            role: "Tag transcript quotes and assign owners and formats",
            why: "Free, collaborative, easy to comment and tag inline",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A repurposing map assigning all 5 transcript quotes to their target format, owner, and AI-vs-human drafting split.",
      sampleOutput:
        "PolicyBazaar exec interview, repurposing map (excerpt)\n\nQUOTE 1 -> Blog core argument, human-drafted\nQUOTE 3 -> LinkedIn post #1, AI first-draft + human edit\nQUOTE 5 -> 45-second video clip, no AI pass, editor cuts directly from footage",
      successCriteria: [
        "Maps all 5 quotes to a specific format",
        "Assigns a clear AI-vs-human split per piece, not a blanket 'AI does everything'",
      ],
      portfolioReady: true,
    },
  ],
  "thought-leadership": [
    {
      id: "thought-leadership-pov-plan-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The One Sentence Test: Building a Thought-Leadership POV Plan for a Snowflake Exec",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real executive's background and three draft POV statements, apply the lesson's falsifiability test to pick and sharpen the one worth publishing.",
      companyId: "snowflake",
      scenario:
        "You're supporting a VP of Data Strategy at Snowflake who wants to start publishing thought leadership. She's drafted three possible POVs and needs one sharpened into a real, publishable position.",
      brief:
        "Score all three draft POVs against the lesson's falsifiability test and rewrite the winner into a one-sentence, defensible claim.",
      mode: "build",
      conceptsCovered: ["Pick one defensible POV"],
      steps: [
        {
          stepId: "step-1-pov-falsifiability-test",
          concept: "Pick one defensible POV",
          lessonAnchor: "step-1-pick-one-defensible-pov",
          theoryRecap:
            "A real POV is falsifiable, someone could disagree with it and make a case. 'AI is changing marketing' is a topic; a specific, arguable claim about what changes and by how much is a POV.",
          question:
            "Given these 3 draft POVs, which one is a topic wearing a POV's clothes, and which one could a named competitor actually argue against?",
          toolName: "Google Docs",
          where: "List the 3 drafts side by side, score each against the falsifiability test",
          procedure: [
            "List the 3 draft POVs in a Google Doc",
            "For each, write one sentence a competitor could use to disagree",
            "If no disagreeing sentence is possible, mark that POV as a topic, not a POV, and cut it",
          ],
          outputSample:
            "DRAFT 1: 'Data governance matters more than ever' -> no one can disagree with this, CUT (topic, not POV)\nDRAFT 2: 'Most enterprise data teams over-invest in real-time pipelines they don't need' -> falsifiable, a competitor could argue real-time is essential, KEEP\nDRAFT 3: 'AI will replace data analysts' -> too vague on timeframe and scope, needs a number before it's usable",
          healthy: "One POV survives the test with a clear, specific, arguable claim a named person could push back on.",
          unhealthy: "All three drafts are safe enough that nobody would ever publicly disagree with them.",
          interpret:
            "If a competitor could republish the sentence with their logo on it, it isn't a POV yet, keep sharpening until it is.",
          soWhat: [
            {
              symptom: "A draft POV reads as universally agreeable",
              action: "Add a specific number, timeframe, or named counter-position until someone could argue against it",
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
            role: "Draft and score candidate POV statements",
            why: "Free, easy to compare drafts side by side with comments",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "One sharpened, falsifiable POV statement selected from the three drafts, with the two rejected drafts and why they failed the test.",
      sampleOutput:
        "Adyen VP of Payments, POV selection (excerpt)\n\nSELECTED: 'Most mid-market merchants are paying for fraud tooling built for a scale of transaction volume they'll never reach.'\nREJECTED: 'Payments security is critical' (not falsifiable, a topic)",
      successCriteria: [
        "Correctly identifies which draft(s) fail the falsifiability test and why",
        "Produces one final POV that a named competitor could actually argue against",
      ],
      portfolioReady: true,
    },
    {
      id: "thought-leadership-ai-critique",
      tier: "core",
      archetype: "ai-critique",
      title: "Ghostwritten or Ghost-Sounding? Critiquing an AI-Drafted Thought-Leadership Piece for Adyen",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given an AI-drafted thought-leadership article for an Adyen exec, apply the lesson's common-mistakes checklist to find where it reads as generic brand content instead of a real POV.",
      companyId: "adyen",
      scenario:
        "Adyen's comms team ghostwrote a thought-leadership draft with an AI tool for a payments exec's byline. Before it publishes, you need to catch every place it reads like a press release instead of a person.",
      brief: "Score the draft against the lesson's common mistakes and rewrite the two worst-offending paragraphs.",
      mode: "diagnostic",
      conceptsCovered: ["Hedging every claim", "Ghostwriting that sounds like a press release"],
      steps: [
        {
          stepId: "step-1-hedging-audit",
          concept: "Hedging every claim",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "A take qualified with 'it depends,' 'it varies,' and 'there are many factors' is not a take. A wrong but specific POV generates more useful conversation than a correct but vague one.",
          question:
            "Given this 4-paragraph AI draft, which sentences hedge instead of commit, and how would you rewrite the worst offender?",
          toolName: "Google Docs",
          where: "Highlight every hedging phrase in the draft, comment a specific rewrite",
          procedure: [
            "Read the 4-paragraph draft and highlight every hedge phrase ('it depends', 'in many cases', 'can vary')",
            "Count hedges per paragraph",
            "Rewrite the paragraph with the most hedges into one committed, specific claim",
          ],
          outputSample:
            "Paragraph 2 (3 hedges): 'Fraud rates can vary significantly depending on many factors, and it often depends on the merchant's specific risk profile.'\nREWRITE: 'Mid-market merchants with under $2M in monthly volume are overpaying for enterprise-grade fraud tooling they don't need.'",
          healthy: "The final draft has zero hedge phrases in its core argument paragraphs.",
          unhealthy: "Every claim is qualified enough that no reader could quote it back as a position.",
          interpret:
            "AI drafts hedge by default because hedging reads as statistically 'safe' language. A human editing pass exists specifically to remove it.",
          soWhat: [
            {
              symptom: "A draft paragraph contains 2+ hedge phrases",
              action: "Rewrite it as one specific, falsifiable sentence before it goes to the named author for review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-press-release-voice-check",
          concept: "Ghostwriting that sounds like a press release",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "If the named author would never say a phrase like 'in today's dynamic landscape' in a meeting, it doesn't belong in their byline. Readers detect inauthenticity faster than any algorithm.",
          question:
            "Given the exec's real speaking style (short sentences, no jargon, one specific example per point), which sentences in the draft don't sound like her?",
          toolName: "Google Docs",
          where: "Compare the draft against 3 real quotes from the exec's past interviews",
          procedure: [
            "Read 3 real quotes from the exec's past interviews or talks",
            "Flag every sentence in the AI draft that uses corporate phrasing she wouldn't say out loud",
            "Rewrite flagged sentences in her documented voice",
          ],
          outputSample:
            "FLAGGED: 'In today's rapidly evolving payments landscape, merchants must leverage cutting-edge solutions.'\nREWRITE (matches her real voice): 'Most merchants are still buying fraud tools built for a problem they don't have.'",
          healthy: "Every sentence in the final draft could plausibly be something the named exec would say in a meeting.",
          unhealthy: "The draft is fluent and error-free but reads like it was written by the comms department, because it was.",
          interpret:
            "Voice-matching is a fact-check, not a style preference. A mismatched voice is the fastest way readers spot ghostwritten content.",
          soWhat: [
            {
              symptom: "A sentence uses phrases like 'dynamic landscape' or 'leverage cutting-edge'",
              action: "Cut the phrase and replace it with a sentence pulled from or modeled on the exec's real quotes",
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
            role: "Highlight, comment, and rewrite flagged sentences",
            why: "Free, built-in commenting for collaborative editing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A marked-up draft with every hedge phrase and press-release-voice sentence flagged, plus rewritten versions of the two worst paragraphs.",
      sampleOutput:
        "Snowflake VP thought-leadership draft, critique notes (excerpt)\n\nFLAGGED (hedge): 'Data strategy success can vary depending on many organizational factors.'\nREWRITE: 'Most data teams fail not because of tooling, but because no one owns the decision to kill a dead pipeline.'",
      successCriteria: [
        "Flags all hedge phrases and press-release phrasing in the sample draft",
        "Produces two rewritten paragraphs that pass both checks",
      ],
      portfolioReady: true,
      stretch:
        "Run the same critique on a real LinkedIn thought-leadership post from your own company and count how many of the 6 lesson mistakes it makes.",
    },
  ],

  "long-form-vs-short-form-strategy": [
    {
      id: "format-decision-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Long-Form or Short-Form: Four Briefs, One Framework",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given four real content briefs with different goals and channels, apply the lesson's three-question decision framework to call long-form or short-form for each, and justify the call.",
      companyId: "mailchimp",
      scenario:
        "You're a content strategist at Mailchimp. Four briefs landed in your queue this week, each pitched as 'urgent,' with no format specified.",
      brief:
        "Run each brief through the goal, channel, and buyer-stage questions before assigning a format, don't default to whatever the requester assumed.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching format to goal and channel before word count",
        "The three-question decision framework (goal, channel, buyer stage)",
      ],
      steps: [
        {
          stepId: "step-1-run-the-framework",
          concept: "The three-question decision framework (goal, channel, buyer stage)",
          lessonAnchor: "a-practical-decision-framework",
          theoryRecap:
            "The lesson's framework asks three questions before any format gets chosen: what is the goal, what does the channel reward natively, and what stage is the buyer in.",
          question:
            "Brief 3 asks for content on 'email deliverability best practices,' targeted at readers actively comparing ESPs, meant to rank in search and get cited by AI answer engines. What format and why?",
          toolName: "Google Sheets",
          where: "A shared brief-triage sheet with columns for goal, channel, buyer stage, and format call.",
          procedure: [
            "List all four briefs in rows: topic, stated goal, target channel, buyer stage",
            "For each row, answer the three framework questions before touching the format column",
            "Assign long-form or short-form only after all three answers are filled in",
            "Flag any brief where the requester's assumed format contradicts your framework answer",
          ],
          outputSample:
            "Brief 3: Email deliverability best practices\n  Goal: rank + AI citation -> long-form signal\n  Channel: blog/owned -> rewards depth\n  Buyer stage: warm, actively comparing ESPs -> will read 2,000+ words\n  CALL: Long-form, 2,500-3,000 words, structured with H2 direct-answers and a comparison table",
          healthy:
            "The format call matches all three answers, a warm, research-stage buyer on an owned channel researching a comparison topic gets a long, structured guide.",
          unhealthy:
            "Defaulting to short-form because 'that's what performs on social' when the actual channel is the owned blog and the buyer is deep in research, not scrolling a feed.",
          interpret:
            "A format call that ignores channel or buyer stage optimizes for the wrong metric, reach instead of conversion, or vice versa.",
          soWhat: [
            {
              symptom: "A requester's brief already specifies a format before answering the three questions",
              action: "Push back and re-derive the format from goal, channel, and buyer stage first",
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
            role: "Triage the four briefs against the framework columns",
            why: "Free, no setup, easy to share the format decisions with the requesting team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed brief-triage sheet with all four briefs assigned a format, each with a one-line justification citing the goal/channel/buyer-stage answers.",
      sampleOutput:
        "Chewy content brief-triage sheet (excerpt)\n\nBrief: 'Is grain-free dog food actually better?'\n  Goal: rank + AI citation | Channel: blog | Buyer stage: warm, researching\n  CALL: Long-form, 2,200 words, direct answer in first 200 words, FAQ block\n\nBrief: 'New puppy checklist' teaser for Instagram Reels\n  Goal: reach, awareness | Channel: Instagram Reels | Buyer stage: cold, scrolling\n  CALL: Short-form, 30-second Reel, single idea, hook in 3 seconds",
      successCriteria: [
        "All four briefs are assigned a format only after the three framework questions are answered",
        "At least one format call contradicts the original requester's assumption, with a written justification",
      ],
      portfolioReady: true,
    },
    {
      id: "content-mix-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Will This Content Calendar Hit Its Goal? Forecasting the Mix",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a company's planned quarterly content calendar and its stated goal, forecast whether the long-form/short-form split will actually deliver that goal, using the lesson's 60/30/10 benchmark mix and real GA4 traffic-by-format data.",
      companyId: "zendesk",
      scenario:
        "You're advising Zendesk's content team. Next quarter's calendar is already drafted, and leadership wants to know before it ships whether the mix will move the needle on their stated goal, more organic search traffic and AI citations.",
      brief:
        "Compare the drafted mix against the lesson's benchmark ratio, then forecast the likely outcome using GA4 data on how existing long-form and short-form pieces have actually performed.",
      mode: "diagnostic",
      conceptsCovered: [
        "The 2026 default content mix ratio (60% short-form, 30% long-form, 10% experimental)",
        "Repurposing one long-form asset into many short-form distribution pieces",
      ],
      steps: [
        {
          stepId: "step-1-compare-mix-to-benchmark",
          concept: "The 2026 default content mix ratio (60% short-form, 30% long-form, 10% experimental)",
          lessonAnchor: "the-repurposing-bridge-one-deep-asset-many-short-ones",
          theoryRecap:
            "The lesson's benchmark mix runs roughly 60% short-form for reach, 30% long-form for authority, 10% experimental, sequenced as a short-to-long funnel rather than picked in isolation.",
          question:
            "The drafted quarterly calendar is 8 long-form guides and 4 short-form social posts, no experimental slots. Against the 60/30/10 benchmark, and against a stated goal of 'more organic search traffic,' what does this forecast to produce?",
          toolName: "Google Analytics 4",
          where: "GA4 Reports > Engagement > Pages and screens, filtered by content format (via a UTM or content-type dimension) for the last two quarters.",
          procedure: [
            "Pull organic sessions and average engagement time for existing long-form vs short-form pages in GA4",
            "Calculate the current calendar's actual long-form-to-short-form ratio (8:4 = 67% long-form, 33% short-form here)",
            "Compare against the lesson's 60/30/10 benchmark and note the gap",
            "Forecast the likely outcome: heavy long-form with no short-form discovery layer means fewer new visitors finding the guides at all",
          ],
          outputSample:
            "Drafted calendar: 8 long-form (67%) / 4 short-form (33%) / 0 experimental\nBenchmark: 60% short-form / 30% long-form / 10% experimental\nGA4 last 2 quarters: short-form posts drove 3.1x the new-user sessions per piece vs long-form guides, long-form drove 2.4x the average engagement time per session\nFORECAST: the drafted mix over-indexes on long-form authority content with almost no short-form discovery layer to surface it, organic traffic growth will likely undershoot goal because fewer people ever find the guides",
          healthy:
            "The forecast flags the ratio mismatch before the quarter ships and recommends adding short-form distribution pieces per long-form guide.",
          unhealthy:
            "Approving the calendar as-is because every individual piece looks fine in isolation, missing that the mix itself won't hit the stated traffic goal.",
          interpret:
            "A content calendar can be full of good individual pieces and still forecast to miss its goal if the mix ratio is wrong for what the goal requires.",
          soWhat: [
            {
              symptom: "A quarterly calendar is heavy on one format with no repurposing plan",
              action: "Add short-form distribution assets per long-form piece to close the gap to the 60/30/10 benchmark",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Pull actual organic sessions and engagement time by content format",
            why: "Free, already installed on most sites, gives real performance data instead of guessing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page forecast memo stating whether the drafted calendar's format mix will hit the stated traffic goal, with the ratio gap and a recommended fix.",
      sampleOutput:
        "Mailchimp Q3 content mix forecast (excerpt)\n\nDrafted: 70% long-form / 30% short-form / 0% experimental\nBenchmark: 60% short-form / 30% long-form / 10% experimental\nFORECAST: undershoots the awareness goal; recommend converting 3 of the 8 planned guides into 1 pillar guide plus 6 short-form repurposed pieces to close the reach gap",
      successCriteria: [
        "Compares the drafted calendar's actual ratio against the 60/30/10 benchmark",
        "Forecast is grounded in real GA4 format-performance data, not assumption",
        "Recommendation specifies a concrete fix, not just 'add more short-form'",
      ],
      portfolioReady: true,
    },
  ],
};
