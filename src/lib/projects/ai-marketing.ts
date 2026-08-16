/**
 * Practice projects for the `ai-marketing` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 */

import type { Project } from "@/lib/projects/types";

export const AI_MARKETING_PROJECTS: Record<string, Project[]> = {

  "ai-search-ranking": [
    {
      id: "ai-search-ranking-citation-trigger-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Would an AI Actually Cite This? Three Paragraphs, One Test",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate paragraphs written for the same factual claim, apply the lesson's citation-trigger scoring (quotations, sourced statistics, primary citations, defined terms, structure) to correctly separate the version an AI assistant is likely to cite from versions that read fine to a human but carry zero citation signal.",
      companyId: "ola-electric",
      scenario:
        "You're reviewing draft paragraphs for Ola Electric's blog before publish, specifically the EV range and battery-life claims that show up whenever someone asks ChatGPT or Perplexity about electric scooter range in India.",
      brief:
        "Read all three specimens. For each, decide if it would score well on the lesson's five citation triggers, and name exactly which triggers are present or missing.",
      mode: "teardown",
      conceptsCovered: ["Step 2: Write With Citation Triggers", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "item-1-generic-range-claim",
          specimenSource: "synthetic-realistic",
          specimen:
            "The Ola S1 Pro electric scooter offers an impressive range that easily handles your daily commute. With fast charging and a spacious boot, it's designed for the modern Indian rider who wants performance and convenience in one package. Riders love how far it can go on a single charge.",
          prompt: "Would an AI assistant cite this paragraph when answering a range question? Name every defect you find.",
          answerKey: [
            {
              defect:
                "No numeric range or charge time appears anywhere, 'impressive range' and 'easily handles' are unquantified claims with nothing an AI model can extract as a citable fact.",
              severity: "critical",
              whyItMatters:
                "Citation requires an extractable fact, a number, a named source, a direct answer. This paragraph has none of the five citation triggers the lesson scores.",
              lessonRef: "Step 2: Write With Citation Triggers",
              owner: "you",
            },
            {
              defect:
                "'Riders love how far it can go' is an unattributed opinion with no named source, survey, or reviewer behind it.",
              severity: "moderate",
              whyItMatters:
                "Quotations from named experts or customers scored +27.2 points in the underlying study; an anonymous 'riders love' claim earns none of that lift.",
              lessonRef: "Step 2: Write With Citation Triggers",
              owner: "you",
            },
          ],
          distractors: [
            "It's from a brand's own blog, brand-authored content isn't automatically a defect, HubSpot and Notion both get cited from their own blogs elsewhere in this lesson.",
            "It mentions a specific product name (S1 Pro), naming the product is fine, the issue is the missing numbers and sourcing around it, not the naming.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-sourced-range-claim",
          specimenSource: "synthetic-realistic",
          specimen:
            "The Ola S1 Pro delivers a certified range of 195 km on a single charge under IDC (Indian Driving Cycle) test conditions, according to Ola Electric's official spec sheet published in 2024. A 0-80% fast charge takes 91 minutes on Ola's Hypercharger network. For context, the Bureau of Energy Efficiency's 2023 report on electric two-wheelers found the average certified range across BEE-rated scooters sold in India was 111 km, making the S1 Pro's certified figure roughly 76% above category average.",
          prompt: "Would an AI assistant cite this paragraph when answering a range question? Name every defect you find, or state clearly that there are none.",
          answerKey: [],
          distractors: [
            "It cites Ola Electric's own spec sheet, a brand citing its own certified test data isn't a defect since IDC is an independently verifiable government test standard, not an unverifiable internal claim.",
            "It's long and detailed, length isn't the test, whether every number has a name and a source behind it is.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-unsourced-numbers",
          specimenSource: "synthetic-realistic",
          specimen:
            "Electric scooters in the Ola lineup can travel over 190 km on a single charge, more than double what most petrol scooters can do on a full tank in city traffic. Charging is fast too, getting most of the way full in under 100 minutes. This makes the S1 Pro one of the longest-range electric scooters available in India today.",
          prompt: "Would an AI assistant cite this paragraph when answering a range question? Name every defect you find.",
          answerKey: [
            {
              defect:
                "The '190 km' and 'under 100 minutes' numbers appear with no named source (no spec sheet, no test standard, no report cited), so an AI model has no way to verify or attribute the claim before citing it.",
              severity: "critical",
              whyItMatters:
                "Statistics with sources scored +25.4 points in the underlying study; the same number without a named source behind it captures little of that lift.",
              lessonRef: "Step 2: Write With Citation Triggers",
              owner: "you",
            },
            {
              defect:
                "'one of the longest-range electric scooters available in India today' is a superlative ranking claim with no comparison data or named competitor set behind it.",
              severity: "moderate",
              whyItMatters:
                "Unsupported superlatives read as marketing opinion, not the specific, verifiable answer citation algorithms reward.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "It includes two numbers (190 km, under 100 minutes), including numbers isn't automatically enough, Item 1 has zero numbers and this has two, but neither number here is attributed to a source, which is the actual defect.",
            "It compares against petrol scooters, a comparison itself is fine content, the issue is that neither side of the comparison cites where its number comes from.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Test whether a rewritten paragraph gets referenced when you ask the underlying question directly",
            why: "Free tier is sufficient to spot-check citation-worthy phrasing",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Score each paragraph against the five citation triggers in a checklist",
            why: "Free, no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored checklist for all three paragraphs (which of the 5 citation triggers each one hits) and a rewritten version of the two flawed paragraphs.",
      sampleOutput:
        "Citation-trigger scorecard, Awfis Space Solutions blog draft\n\n" +
        "Draft: 'Awfis coworking desks are comfortable and affordable for any team.'\n" +
        "Quotations: no | Sourced stats: no | Primary citation: no | Defined terms: no | Structured steps: no\n" +
        "Score: 0/5 triggers present, high risk of zero AI citations\n\n" +
        "Rewrite: 'Awfis lists hot-desk pricing starting at Rs 6,999/seat/month across its 200+ centres (Awfis 2024 pricing page), compared to a 2024 industry average of Rs 8,200/seat/month for tier-1-city coworking, per Awfis's IPO prospectus filed with SEBI.'\n" +
        "Quotations: no | Sourced stats: yes | Primary citation: yes | Defined terms: no | Structured steps: no\n" +
        "Score: 2/5 triggers present, meaningfully higher citation odds",
      successCriteria: [
        "Correctly identifies item 2 as the clean specimen with zero defects",
        "Names the specific missing trigger (sourced statistic or named attribution) in items 1 and 3, not just 'needs more detail'",
        "Does not flag brand self-citation or product naming as defects",
      ],
      portfolioReady: true,
      stretch:
        "Run the rewritten paragraph as a two-line answer through ChatGPT/Perplexity by asking 'what is the range of the Ola S1 Pro' and see whether your rewrite phrasing gets echoed back.",
    },
    {
      id: "ai-search-ranking-citation-gap-audit",
      tier: "core",
      archetype: "audit",
      title: "The Citation Gap Audit: Why the Top Google Result Isn't the AI's Answer",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a realistic dataset of AI citation results for 10 category queries plotted against Google top-10 rankings, freshness dates, and citation-trigger scores, apply the lesson's full framework to decide which pages need a content refresh, which need new sourced statistics, and which are structurally fine but simply outranked in AI citation share.",
      companyId: "beyond-meat",
      scenario:
        "You're the content lead validating why Beyond Meat's own product pages barely show up when people ask ChatGPT, Perplexity, or Gemini plant-based-meat questions, even though several of those pages rank on page one of Google.",
      brief:
        "Four passes over the same 10-query dataset: measure the SEO/AI-citation overlap, score each page's citation triggers, check freshness, then build a prioritized refresh list leadership can actually fund this quarter.",
      mode: "diagnostic",
      conceptsCovered: [
        "Why AI Citation Differs From SEO Rankings",
        "Write With Citation Triggers",
        "Update Content Within 30 Days of Major Events",
        "Monitor Citation Share and Iterate",
      ],
      steps: [
        {
          stepId: "step-1-overlap-check",
          concept: "Why AI Citation Differs From SEO Rankings",
          lessonAnchor: "why-ai-citation-differs-from-seo-rankings",
          theoryRecap:
            "The lesson's Leapd AI analysis found only 12% of AI-cited URLs rank in Google's top 10 for the same query, and a 2026 Semrush study found organic traffic predicts AI category ownership only 48.4% of the time. Ranking well on Google is not a proxy for getting cited by an AI assistant.",
          question:
            "Of these 10 category queries, Beyond Meat ranks Google top-10 for 7 of them but gets cited by at least one AI assistant for only 2. What does that 5-query gap tell you about where to focus first?",
          toolName: "Google Sheets",
          where: "Import the 10-row citation-tracking sheet, columns: query, google_rank, chatgpt_cited, perplexity_cited, gemini_cited.",
          procedure: [
            "Import the 10-row query tracking sheet",
            "Flag rows where google_rank is 10 or better AND all three AI columns read 'no'",
            "Count that overlap gap as a percentage of ranked queries",
            "Set the flagged rows aside as the priority list, they already have Google authority but zero AI citation",
          ],
          outputSample:
            "Beyond Meat, 10-query citation tracker\n\n" +
            "query                                  google_rank  chatgpt  perplexity  gemini\n" +
            "is beyond meat healthy                 4            no       no          no\n" +
            "beyond meat vs impossible foods         2            no       yes         no\n" +
            "beyond meat nutrition facts             6            no       no          no\n" +
            "beyond meat ingredients list            3            no       no          no\n" +
            "plant based meat protein content        —            yes      yes         yes\n" +
            "...5 more rows\n\n" +
            "GAP: 5 of 7 top-10-ranked queries (71%) have zero AI citation despite Google authority",
          healthy: "Treating the 5 zero-citation-despite-ranking rows as the priority backlog, since Google authority alone isn't earning citation.",
          unhealthy: "Assuming pages that already rank #2-#6 on Google don't need any work, because 'we're already winning that keyword.'",
          interpret:
            "A page can be SEO-healthy and GEO-invisible at the same time, they are different scoreboards. The 71% gap is the size of the opportunity, not a sign the pages are broken for search overall.",
          soWhat: [
            {
              symptom: "Leadership assumes AI citation will follow naturally once Google rankings are solid",
              action: "Show them this gap table as proof the two are decoupled, then get sign-off on a separate GEO backlog",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-trigger-scoring",
          concept: "Write With Citation Triggers",
          lessonAnchor: "step-2-write-with-citation-triggers",
          theoryRecap:
            "The study behind this lesson scored citation triggers: quotations from named experts +27.2, sourced statistics +25.4, primary research citations +25.0, defined technical terms +18.7, structured steps +15.3.",
          question:
            "Two of the 5 priority pages score 0/5 on citation triggers and three score 2/5. Which page gets rewritten first if you can only brief one writer this sprint?",
          toolName: "Google Sheets",
          where: "Same sheet, new columns: has_quote, has_sourced_stat, has_primary_citation, has_defined_terms, has_structure.",
          procedure: [
            "Score each of the 5 priority pages 0-5 against the trigger checklist",
            "Sort ascending by score",
            "Cross-reference monthly search volume against each 0-2 scoring page",
            "Brief the highest-volume, lowest-scoring page first",
          ],
          outputSample:
            "Priority pages, trigger score + volume\n\n" +
            "is beyond meat healthy            score 0/5   8,100 vol/mo\n" +
            "beyond meat nutrition facts       score 2/5   3,600 vol/mo (has sourced stat, has structure)\n" +
            "beyond meat ingredients list      score 0/5   2,900 vol/mo\n\n" +
            "Brief first: 'is beyond meat healthy', highest volume AND lowest trigger score",
          healthy: "Briefing the highest-volume, lowest-scoring page first since it has the most citation upside per hour of writer time.",
          unhealthy:
            "Rewriting 'beyond meat nutrition facts' first because it's a familiar, easy topic, even though it already scores 2/5 and has less room to improve than the 0/5 page.",
          interpret:
            "Trigger score times search volume is a rough proxy for citation upside per page, a 0/5 page with high volume is the biggest single lever available.",
          soWhat: [
            {
              symptom: "The content team has one open sprint slot and three candidate pages",
              action: "Rank candidates by (5 minus trigger score) times monthly volume, brief the top result",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-freshness-check",
          concept: "Update Content Within 30 Days of Major Events",
          lessonAnchor: "step-3-update-content-within-30-days-of-major-events",
          theoryRecap:
            "The Whitehat SEO freshness analysis found an 82% citation rate for pages updated within 30 days versus 37% for pages older than 6 months.",
          question:
            "The 'is beyond meat healthy' page was last updated 14 months ago. Given the 82% vs 37% freshness gap, what's the fastest lever available before a full rewrite ships?",
          toolName: "Google Sheets",
          where: "Same sheet, new column: last_updated_months_ago.",
          procedure: [
            "Add a last-updated column pulled from the CMS",
            "Flag any priority page older than 6 months",
            "For the flagged page, list what changed in the category since last update",
            "Schedule a same-week freshness pass (date-stamp update, add one new stat) ahead of the full rewrite",
          ],
          outputSample:
            "is beyond meat healthy: last updated 14 months ago\n" +
            "Category changes since then: 2 new independent nutrition studies published, one FDA labeling update on plant-based protein claims\n" +
            "Fastest lever: add both citations + a visible 'Updated August 2026' date stamp this week, full rewrite scheduled for next sprint",
          healthy: "Shipping a same-week freshness patch (new stat + visible update date) while the full rewrite is queued, capturing some of the 82% freshness lift immediately.",
          unhealthy: "Waiting for the full rewrite sprint before touching the page at all, leaving a 14-month-stale page uncited for another 2-3 weeks.",
          interpret: "Freshness and depth are separable levers, a same-week date-stamp-plus-one-stat patch captures real upside without waiting for the full rewrite.",
          soWhat: [
            {
              symptom: "A high-priority page is stuck in a rewrite queue for weeks",
              action: "Ship a lightweight freshness patch immediately, full rewrite later",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-monitor-share",
          concept: "Monitor Citation Share and Iterate",
          lessonAnchor: "step-6-monitor-citation-share-and-iterate",
          theoryRecap:
            "The lesson recommends tracking citation share weekly by querying AI assistants directly and logging competitor citations alongside your own, treating it as a KPI next to organic traffic.",
          question:
            "Four weeks after the rewrite ships, 'is beyond meat healthy' gets cited by Perplexity but still not ChatGPT or Gemini, while Impossible Foods gets cited by all three. What does a partial win like this tell you to check next?",
          toolName: "Perplexity",
          where: "Manually query all three assistants weekly with the same 10 questions, log results back into the same sheet.",
          procedure: [
            "Re-run the same 10 queries weekly across ChatGPT, Perplexity, and Gemini",
            "Log which assistant cites which URL each week",
            "Compare Beyond Meat's citing pattern against Impossible Foods' on the same query",
            "If one assistant cites and two don't, check whether the missing platforms lean on a source type you haven't built yet (Reddit/Quora presence)",
          ],
          outputSample:
            "Week 4 citation log, 'is beyond meat healthy'\n\n" +
            "ChatGPT:     Impossible Foods cited (Healthline), Beyond Meat not cited\n" +
            "Perplexity:  Beyond Meat cited (own page), Impossible Foods also cited\n" +
            "Gemini:      Impossible Foods cited (Mayo Clinic), Beyond Meat not cited\n\n" +
            "Pattern: Beyond Meat wins on Perplexity (favors primary-source pages) but loses on ChatGPT/Gemini (favor third-party health authorities)",
          healthy: "Reading the partial win as platform-specific and starting a push to get cited by a third-party nutrition source, since ChatGPT and Gemini favor outside authorities here.",
          unhealthy: "Declaring the rewrite a failure because it 'still doesn't work' on 2 of 3 platforms, without noticing the platform-specific pattern.",
          interpret: "A single rewrite rarely wins all platforms simultaneously, the citation log tells you which lever, your own content vs. third-party presence, still needs work per platform.",
          soWhat: [
            {
              symptom: "One platform cites the rewritten page and two still don't, four weeks after publishing",
              action: "Pitch a nutrition-focused Reddit/Quora answer or pursue a third-party health-site citation, rather than rewriting the same page again",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Run the weekly citation-tracking queries",
            why: "Free tier covers manual weekly spot-checks",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Perplexity",
            role: "Cross-check citation patterns against a second assistant with different citation behavior",
            why: "Free tier available",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build and maintain the citation-tracking dataset across all 4 steps",
            why: "Free, no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Automate AI Overview citation tracking at scale instead of manual weekly queries",
            why: "Purpose-built AI-visibility tracking replaces the manual query-and-log process once the backlog grows past a handful of pages",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "The manual free-tool path works for 10-20 tracked queries; past that, a dedicated tracker like SEMrush's AI Overviews tool saves the weekly manual-query time.",
      },
      deliverable: "A prioritized GEO refresh backlog (5 pages, ranked by volume x trigger-score gap) plus a 4-week citation log template.",
      sampleOutput:
        "Slack, GEO refresh backlog (excerpt)\n\n" +
        "PRIORITY 1: 'how to reduce Slack notification overload'   0/5 triggers   9,400 vol/mo   14 months stale\n" +
        "PRIORITY 2: 'Slack vs Microsoft Teams pricing'             2/5 triggers   6,100 vol/mo   6 months stale\n\n" +
        "Week 1 citation log: 0/10 tracked queries cite Slack on any platform\n" +
        "Week 4 citation log (post-rewrite): 3/10 tracked queries cite Slack on at least one platform",
      successCriteria: [
        "Correctly separates SEO-ranking pages from AI-cited pages using the overlap check",
        "Prioritizes the rewrite queue by volume x trigger-gap, not by page familiarity or ease",
        "Recognizes a platform-specific partial win as a signal to act on, not a failure",
      ],
      portfolioReady: true,
      stretch: "Extend the tracker to a direct competitor (Impossible Foods) and build a side-by-side citation-share chart across all three platforms over 8 weeks.",
    },
  ],

  "rag-for-marketers": [
    {
      id: "rag-for-marketers-knowledge-base-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Would You Feed This to Your RAG System? Three Documents, One Decision",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three candidate documents proposed for a RAG knowledge base, correctly decide which to include, which to exclude, and which needs a fix before inclusion, applying the lesson's 'What NOT to Include' checklist without over-flagging documents that are actually fine.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're setting up Awfis Space Solutions' first RAG-powered content assistant, meant to draft location pages and pricing emails from a shared knowledge base before a national sales push.",
      brief:
        "Review all three candidate documents. For each, decide: include as-is, exclude entirely, or fix-then-include. Name the specific defect if you flag one.",
      mode: "teardown",
      conceptsCovered: ["What NOT to Include", "Common Mistakes"],
      teardownItems: [
        {
          itemId: "item-1-undated-pricing-sheet",
          specimenSource: "synthetic-realistic",
          specimen:
            "Awfis Coworking Plans\nHot Desk: Rs 6,500/seat/month\nDedicated Desk: Rs 9,800/seat/month\nPrivate Cabin (4-seat): Rs 42,000/month\nAll plans include high-speed WiFi, unlimited coffee, and access to meeting rooms (2 hours/month included).\n[filename: 'pricing_final_v2.docx', no date field anywhere in the document]",
          prompt: "Include as-is, exclude, or fix-then-include? Name every defect you find.",
          answerKey: [
            {
              defect:
                "The document has no date stamp or version label anywhere, only a filename ('pricing_final_v2') that gives no indication of when these prices were current.",
              severity: "critical",
              whyItMatters:
                "The lesson's What NOT to Include list flags exactly this: outdated documents without clear version labels get treated as current facts by the AI, which will confidently quote a stale price to a prospect.",
              lessonRef: "What NOT to Include",
              owner: "you",
            },
            {
              defect:
                "'_final_v2' in the filename suggests at least one prior version existed, but there's no way to confirm this is the newest one without a real timestamp.",
              severity: "moderate",
              whyItMatters: "Filename conventions are not a substitute for an explicit date stamp and review cadence.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "It lists specific numeric prices, having exact numbers isn't the defect, item 2 below also has exact numbers and is fine, the issue is the total absence of a date.",
            "It's a Word document instead of a structured format, file format alone doesn't disqualify a document for RAG ingestion.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-dated-brand-voice-guide",
          specimenSource: "synthetic-realistic",
          specimen:
            "Awfis Brand Voice Guide, v4, last reviewed March 2026\nTone: Direct, practical, never corporate-jargon-heavy. We write like an ops manager, not a marketer.\nAlways say: 'centres' (not 'locations'), 'members' (not 'clients' or 'tenants').\nNever claim 'largest in India' without citing the specific metric (for example, 'largest by number of centres, per FY24 filings').",
          prompt: "Include as-is, exclude, or fix-then-include? Name every defect you find, or state clearly that there are none.",
          answerKey: [],
          distractors: [
            "It's a style/voice document rather than a fact sheet, tone guidance is the highest-priority document type the lesson recommends feeding a RAG system first, not a lesser one.",
            "It includes an instruction not to make an unqualified superlative claim, that's a genuinely useful guardrail, not a defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-unreviewed-slack-thread",
          specimenSource: "synthetic-realistic",
          specimen:
            "Internal Slack thread export, #product-ideas channel, March 2026\n'What if we offered a Rs 3,999 hot-desk plan for students and freelancers? Could undercut everyone in the market. Sales team thinks it could work if we cut the coffee/meeting-room perks.'\n[No approval, no follow-up, thread has 4 replies, none from leadership]",
          prompt: "Include as-is, exclude, or fix-then-include? Name every defect you find.",
          answerKey: [
            {
              defect:
                "This is an unreviewed internal brainstorm, not an approved plan, price, or policy, it has no sign-off and the discussed price doesn't exist as a real offering.",
              severity: "critical",
              whyItMatters:
                "The lesson explicitly lists 'unreviewed drafts or internal speculation documents' as something to exclude; feeding this in risks the AI confidently quoting a Rs 3,999 plan that was never approved or launched.",
              lessonRef: "What NOT to Include",
              owner: "you",
            },
          ],
          distractors: [
            "It's from Slack rather than a formal document, the source format isn't the issue, an approved decision recorded in Slack would be fine, this is specifically an unapproved brainstorm.",
            "It mentions real numbers (Rs 3,999), the presence of a number doesn't make a document authoritative, this number was never approved as an actual price.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each candidate document with an include/exclude/fix decision and the reason",
            why: "Free, sufficient for a document intake checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A document-intake decision log (include / exclude / fix-then-include) with the specific defect named for every excluded or flagged document.",
      sampleOutput:
        "Slack RAG knowledge base intake log (excerpt)\n\n" +
        "Doc: 'Enterprise Plan Pricing Q2 2025.pdf'         Decision: EXCLUDE   Reason: no date stamp, superseded by Q3 2026 pricing already in CRM\n" +
        "Doc: 'Slack Brand Voice & Terminology Guide v6'    Decision: INCLUDE   Reason: dated March 2026, reviewed, no defects found\n" +
        "Doc: '#pricing-ideas Slack export, unreviewed'      Decision: EXCLUDE   Reason: internal speculation, no approval, no real product",
      successCriteria: [
        "Correctly identifies item 2 as clean with no defects",
        "Names the specific missing element (date/version label, or approval status) rather than a vague 'looks off' judgment",
        "Does not flag exact numeric pricing or document source (Slack vs formal doc) as defects on their own",
      ],
      portfolioReady: true,
      stretch: "Build a one-page 'RAG intake checklist' template (date stamp present? approved? contradicts another doc?) you could hand to any team setting up their first knowledge base.",
    },
    {
      id: "rag-for-marketers-retrieval-audit",
      tier: "core",
      archetype: "audit",
      title: "The Retrieval Audit: Catching a Stale Knowledge Base Before a Customer Does",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a RAG knowledge base's document list and a log of what the system actually retrieved for 10 real queries, run the lesson's monthly retrieval audit to find where stale or duplicate documents get surfaced ahead of current ones, and decide the fix for each failure.",
      companyId: "slack",
      scenario:
        "You're the content ops lead running Slack's monthly retrieval audit on the RAG assistant that drafts sales-enablement one-pagers and support macros from Slack's own pricing, feature, and policy documents.",
      brief:
        "Four passes: trim the document set to a curated core, run the retrieval audit against 10 real queries, diagnose the versioning failures you find, and check whether document structure is causing imprecise chunk retrieval.",
      mode: "diagnostic",
      conceptsCovered: [
        "Document quality beats document quantity (Mistake 1)",
        "Skipping retrieval audits (Mistake 3)",
        "No document versioning or review cadence (Mistake 2)",
        "Ignoring chunk size and document structure (Mistake 5)",
      ],
      steps: [
        {
          stepId: "step-1-document-dump-check",
          concept: "Document quality beats document quantity (Mistake 1)",
          lessonAnchor: "document-types-to-prioritize",
          theoryRecap:
            "The lesson's Document Types to Prioritize list ranks brand voice, current product/pricing, approved claims, top-performing content, personas, and compliance rules, and Mistake 1 warns that dumping every file you can find causes the AI to retrieve the wrong chunk, an outdated pricing sheet over the current one.",
          question:
            "The current knowledge base has 34 uploaded documents. Cross-referencing against the 6-item priority list, only 11 clearly map to a priority category, and 6 are exact or near-duplicate versions of the same pricing page. What do you do with the other 23?",
          toolName: "Google Sheets",
          where: "Export the document list from the RAG admin panel, tag each against the 6 priority categories.",
          procedure: [
            "Export all 34 document titles and upload dates",
            "Tag each against the 6 priority categories from the lesson",
            "Flag exact or near-duplicate documents (same topic, different dates)",
            "Remove all documents that don't map to a priority category, keep only the newest version of any duplicate",
          ],
          outputSample:
            "Slack RAG knowledge base audit, 34 documents\n\n" +
            "Maps to priority category: 11 docs (brand voice x1, current pricing x1, approved claims x3, top content x4, compliance x2)\n" +
            "Duplicate pricing docs: 6 (dated Q1 2025 through Q3 2026, only Q3 2026 is current)\n" +
            "No clear category / stale / unrelated: 17 docs\n\n" +
            "Action: keep 11 mapped docs + newest pricing doc = 12 curated documents, remove the other 22",
          healthy: "Cutting to a curated 12-document set and verifying retrieval quality before adding anything back.",
          unhealthy: "Leaving all 34 documents in place because 'more context can't hurt,' despite 6 of them contradicting each other on price.",
          interpret:
            "A RAG system doesn't average conflicting documents, it retrieves whichever chunk scores closest to the query, so 5 stale pricing docs sitting next to 1 current one is a live risk, not harmless clutter.",
          soWhat: [
            {
              symptom: "The knowledge base has grown to 30+ documents with no removal process",
              action: "Run this priority-category tagging pass and cut anything that doesn't map or is a superseded duplicate",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-retrieval-audit",
          concept: "Skipping retrieval audits (Mistake 3)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 3 defines a retrieval audit: take 10-15 real queries, check exactly what chunks the system retrieves, and verify the output matches current facts, done monthly.",
          question:
            "Running this month's 10-query retrieval audit, query 4 ('what's included in the Slack Business+ plan') retrieved a chunk from a pricing doc dated January 2025, even though the curated set now only contains the Q3 2026 doc. What does that tell you the audit just caught?",
          toolName: "ChatGPT",
          where: "Run each of the 10 audit queries directly against the RAG-powered assistant interface, log the source document and date for each retrieved chunk.",
          procedure: [
            "Run all 10 audit queries through the assistant",
            "For each answer, open the citation/source trace and note which document and date it pulled from",
            "Flag any answer sourced from a document dated more than 90 days before today",
            "For each flag, check whether that document is still in the active knowledge base or the retrieval index simply wasn't rebuilt after removal",
          ],
          outputSample:
            "Retrieval audit, 10 queries, this month\n\n" +
            "Q1: 'Slack Enterprise Grid pricing tiers'      sourced from Q3 2026 doc   CURRENT\n" +
            "Q4: 'Business+ plan inclusions'               sourced from Jan 2025 doc  STALE, doc removed from KB but index not rebuilt\n" +
            "Q7: 'Slack Connect eligibility'               sourced from Mar 2026 doc  CURRENT\n" +
            "...7 more rows\n\n" +
            "1 of 10 answers (10%) sourced a document that was already removed from the active set",
          healthy: "Catching the stale index and immediately triggering a full re-index of the vector database, then re-running query 4 to confirm it now pulls Q3 2026.",
          unhealthy: "Assuming removing a document from the admin panel automatically and instantly updates every retrieval, without re-testing the specific query that used to pull from it.",
          interpret: "Deleting a source document doesn't guarantee the vector index is rebuilt immediately; the retrieval audit is the only way to catch a stale index before a customer-facing answer does.",
          soWhat: [
            {
              symptom: "A removed document's content still shows up in an answer weeks later",
              action: "Trigger a manual re-index and re-run the specific query that surfaced the stale chunk",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-owner-cadence",
          concept: "No document versioning or review cadence (Mistake 2)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 2 requires date-stamping every document and a mandatory quarterly review, and assigning a single knowledge base owner responsible for keeping the set current.",
          question:
            "The stale January 2025 pricing doc that showed up in query 4 had no assigned owner and no scheduled review date. Who should own fixing this, and what's the actual process fix, not just the one-time patch?",
          toolName: "Google Sheets",
          where: "Same tracking sheet, add owner and next_review_date columns to every curated document.",
          procedure: [
            "Assign one named owner to the 12-document curated set",
            "Add a next_review_date to every document, no more than 90 days out",
            "Set a recurring calendar reminder tied to the earliest next_review_date",
            "Document the removal-triggers-reindex step so it isn't a manual afterthought next time",
          ],
          outputSample:
            "Ownership log, Slack RAG knowledge base\n\n" +
            "Document                          Owner              Next review\n" +
            "Pricing (Q3 2026)                 Priya (PMM)        2026-11-15\n" +
            "Brand voice guide v4               Priya (PMM)        2027-02-01\n" +
            "Compliance: data residency          Legal (Raj)        2026-10-01\n\n" +
            "Process fix logged: any document removal now triggers an automatic re-index job, not a manual ticket",
          healthy: "Assigning a named owner and a hard review date to every document, including a written process for what happens on removal.",
          unhealthy: "Fixing today's specific stale-pricing incident by hand and moving on, with no owner or review date attached to prevent the same failure next quarter.",
          interpret: "A one-time fix addresses this month's symptom; an owner plus a review date plus a documented removal process addresses the actual cause.",
          soWhat: [
            {
              symptom: "The same type of stale-document incident recurs every few months",
              action: "Assign an explicit owner and review cadence to every document in the knowledge base, not just the one that just failed",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-4-chunk-structure",
          concept: "Ignoring chunk size and document structure (Mistake 5)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 5 warns that unstructured walls of text produce large, imprecise retrieved chunks, while clear headers, short paragraphs, and structured formats produce more precise retrievals.",
          question:
            "Query 4's Business+ pricing answer came back vague and generic even after the re-index fixed the staleness, because the Q3 2026 pricing doc is a single unstructured paragraph covering all four plan tiers at once. What's the actual structural fix?",
          toolName: "Google Sheets",
          where: "Open the Q3 2026 pricing document, compare its current wall-of-text format against a headed, bulleted format.",
          procedure: [
            "Open the current pricing doc and check whether tiers are broken into separate sections/headers or one continuous paragraph",
            "Reformat into one clearly headed section per plan tier, each with its own bullet list of inclusions",
            "Re-run query 4 after reformatting and compare the retrieved chunk's precision",
            "Apply the same headers-and-bullets structure to the next 2 highest-traffic documents",
          ],
          outputSample:
            "Before: single 400-word paragraph covering Pro, Business+, and Enterprise Grid pricing together\n" +
            "After: 3 separate headed sections (Business+, Pro, Enterprise Grid), each 60-80 words with a bulleted inclusions list\n\n" +
            "Query 4 retrieval, before: pulled a 400-word chunk covering all 3 tiers, answer had to guess which parts applied to Business+\n" +
            "Query 4 retrieval, after: pulled only the 70-word Business+ section, answer became specific and accurate",
          healthy: "Reformatting the pricing document into per-tier sections so retrieval can pull exactly the relevant chunk instead of the whole document.",
          unhealthy: "Concluding the RAG system itself is broken or 'not smart enough' when the actual issue is an unstructured source document forcing an imprecise chunk.",
          interpret: "Retrieval precision is bounded by source document structure, no amount of re-indexing fixes a chunk that's too broad because the underlying document was never split into sections.",
          soWhat: [
            {
              symptom: "An answer is technically sourced from the current document but still reads vague or over-broad",
              action: "Check the source document's structure before assuming a model or indexing problem, split it into clearly headed sections",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Run the live retrieval-audit queries against the deployed assistant interface and inspect source citations",
            why: "Stands in for whichever RAG-powered assistant interface a team has built, free tier covers manual monthly audits",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Track document tagging, ownership, review dates, and audit results across all 4 steps",
            why: "Free, sufficient for a document and audit log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A cleaned 12-document knowledge base list with owners and review dates, plus a completed 10-query retrieval audit log with pass/fail per query.",
      sampleOutput:
        "Awfis RAG retrieval audit (excerpt)\n\n" +
        "Query: 'What's included in the Awfis Fully Serviced Office plan?'\n" +
        "Retrieved from: Awfis Enterprise Solutions Sheet, dated July 2026   PASS\n\n" +
        "Query: 'Awfis hot desk price in Bengaluru'\n" +
        "Retrieved from: pricing_final_v2.docx, no date    FAIL, flagged for owner review\n\n" +
        "Audit result: 9/10 PASS, 1/10 FAIL (undated legacy document still in index)",
      successCriteria: [
        "Correctly cuts the document set to only priority-mapped, non-duplicate documents",
        "Identifies the stale-index failure in the retrieval audit rather than assuming the model is wrong",
        "Assigns both an owner and a review date, not just a one-time fix",
        "Diagnoses the vague-answer symptom as a document-structure problem, not a retrieval-engine problem",
      ],
      portfolioReady: true,
      stretch:
        "Turn the 10-query audit into a recurring monthly checklist template with a pass/fail column, and calculate what percentage of your own team's most-asked questions the current knowledge base can already answer correctly.",
    },
  ],

  "ai-marketing-101": [
    {
      id: "ai-marketing-101-workflow-audit",
      tier: "core",
      archetype: "audit",
      title: "The AI Workflow & Risk Matrix: Auditing 5 Marketing Operations",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Evaluate 5 core B2B SaaS marketing workflows across task boundedness, hallucination exposure, brand voice fragility, and compliance risk to determine which operations can be automated, which require human-in-the-loop validation, and which must remain strictly human-led.",
      companyId: "freshworks",
      scenario:
        "You are a Senior Marketing Operations Lead at Freshworks (Nasdaq: FRSH). Following executive interest in generative AI adoption across product marketing, customer success, and demand generation, you have been tasked with auditing five active team workflows. With the team aiming to recover 6+ hours per week per marketer while safeguarding against costly brand hallucinations ($67.4B global business loss risk in 2024) and regulatory exposure, you need to establish clear deployment guardrails.",
      brief:
        "Audit five distinct marketing workflows against the lesson's 6-step playbook and failure modes. Classify each workflow's risk tier, identify specific hallucination triggers, define mandatory human checkpoints, and build an operational triage matrix in Google Sheets.",
      mode: "diagnostic",
      conceptsCovered: [
        "Task Boundedness & Scope Definition",
        "Hallucination Risk & Factual Verification",
        "Brand Voice Alignment & Ruthless Editing",
        "Human-in-the-Loop Governance & Measurement",
      ],
      steps: [
        {
          stepId: "step-1-task-boundedness",
          concept: "Task Boundedness & Scope Definition",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Step 1 of the lesson's playbook dictates starting with narrow, bounded tasks (e.g. ad headline variants, meta descriptions, subject lines) rather than open-ended strategic mandates like 'run our content strategy'.",
          question:
            "Across the five candidate workflows (SEO meta descriptions, customer case study writing, ad copy variants, refund/pricing policy bot, competitor teardowns), which workflows have cleanly bounded input/output contracts vs open-ended strategic dependencies?",
          toolName: "Google Sheets",
          where:
            "Open a new spreadsheet, create columns: Workflow Name, Input Scope, Output Bounds, Boundedness Score (1-5), and Automation Suitability.",
          procedure: [
            "List all 5 marketing workflows in Column A",
            "Define the exact input prompt assets required for each task in Column B",
            "Specify the exact deliverable boundaries (length, structure, schema) in Column C",
            "Score boundedness from 1 (unbounded strategic ambiguity) to 5 (strictly constrained micro-deliverable)",
            "Flag workflows scoring under 3 as unsuitable for direct autonomous execution",
          ],
          outputSample:
            "WORKFLOW BOUNDEDNESS AUDIT (Freshworks):\n1. Ad Headline & Primary Text Generation -> Bounded (5/5) | Strict character limits (30/90 chars), clear keyword inputs\n2. SEO Meta Description Batching -> Bounded (5/5) | Fixed 150-160 char output, clear target page title/H1 inputs\n3. Competitor Product Comparison Blog Posts -> Semi-Bounded (3/5) | Multi-section structure, but high factual drift risk\n4. Customer Cancellation & Pricing Exception Bot -> High Danger (2/5) | Legal liability exposure if policy is hallucinated\n5. Product Positioning & ICP Strategy Drafting -> Unbounded (1/5) | Strategic synthesis requiring direct customer interviews",
          healthy:
            "Tasks chosen for AI acceleration have strict schema, explicit length boundaries, and unambiguous evaluation criteria.",
          unhealthy:
            "Assigning high-level strategic reasoning or autonomous policy negotiation to an LLM without bounding its task perimeter.",
          interpret:
            "AI excels at high-volume tactical variants within strict constraints. Open-ended strategic questions cause models to produce generic, bland averages of internet text.",
          soWhat: [
            {
              symptom: "Marketers spend hours correcting off-topic, wandering AI drafts",
              action: "Constrain the prompt to a single deliverable format with strict length and section requirements",
              effort: "5 min",
            },
            {
              symptom: "Strategic decks generated by AI lack differentiated company insight",
              action: "Remove strategy synthesis from AI workflows; restrict AI to drafting variations of human-defined strategies",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-hallucination-exposure",
          concept: "Hallucination Risk & Factual Verification",
          lessonAnchor: "where-ai-reliably-fails",
          theoryRecap:
            "The lesson highlights that AI reliably fails at accurate statistics, citations, quotes, and pricing policies, with hallucinations costing global businesses $67.4B in 2024 and leading models hallucinating on 15% to 27% of complex prompts.",
          question:
            "Which of the candidate workflows carry direct legal, financial, or reputation risks if the model hallucinates a statistic, citation, or commercial commitment?",
          toolName: "Google Sheets",
          where:
            "In your audit spreadsheet, add columns: Factual Dependency Type, Hallucination Probability, Business Impact Severity, and Fact-Checking Protocol.",
          procedure: [
            "Audit each workflow for dependency on specific numbers, dates, client names, legal commitments, and URLs",
            "Classify the financial/legal fallout if an output contains a fabricated claim (Critical / Moderate / Low)",
            "Identify workflows where hallucinated commitments create binding legal liabilities (referencing the Air Canada bereavement ruling)",
            "Establish mandatory source-lookup protocols for any workflow touching numbers or policy rules",
          ],
          outputSample:
            "HALLUCINATION RISK MATRIX:\n- Pricing/Refund Bot: CRITICAL RISK | Liability: Binding contract claims | Fact-Check: 100% hardcoded deterministic rules\n- Competitor Comparison Post: HIGH RISK | Liability: False advertising/defamation | Fact-Check: Manual verification of every feature claim against live competitor docs\n- Ad Copy Generation: LOW RISK | Liability: Disapproved ad | Fact-Check: Fast human scan against approved claim sheet\n- Case Study First Draft: MODERATE RISK | Liability: Client misquote | Fact-Check: Mandatory client approval and transcript cross-reference",
          healthy:
            "Workflows with factual claims require a human reviewer to open every primary source and verify numbers against internal source-of-truth documents.",
          unhealthy:
            "Publishing AI-generated case studies, competitor benchmarks, or pricing statements without verifying primary sources.",
          interpret:
            "Never let an LLM invent data or negotiate commercial terms. Models generate statistically plausible numbers, not verified facts.",
          soWhat: [
            {
              symptom: "AI generates a persuasive statistic with a non-existent academic citation",
              action: "Implement a zero-trust citation policy: remove any statistic that cannot be verified via primary search in 60 seconds",
              effort: "5 min",
            },
            {
              symptom: "Customer service bot quotes an unapproved discount or SLA",
              action: "Migrate policy queries to a deterministic lookup table or strict RAG system with human escalation",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-3-brand-voice-pass",
          concept: "Brand Voice Alignment & Ruthless Editing",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 4 and Step 4 of the playbook emphasize that generic AI output averages across the internet, producing recognizable filler phrases ('In today's fast-paced digital world...'). Ruthless editing must strip filler and enforce explicit brand voice constraints.",
          question:
            "How do the raw AI outputs for our marketing copy score against Freshworks' brand voice criteria (direct, punchy, conversational, jargon-free)?",
          toolName: "ChatGPT",
          where:
            "Paste candidate marketing prompts into ChatGPT with and without negative brand voice constraints, then compare the raw output against an editing checklist.",
          procedure: [
            "Prompt ChatGPT to draft a product announcement for Freshservice asset management with a basic prompt",
            "Run the raw draft through a 'Banned AI Clichés' checklist (e.g. 'game-changer', 'seamless', 'delve', 'testament', 'in today's fast-paced world')",
            "Re-prompt using an explicit brand voice block: tone attributes, short sentence constraints, and negative phrase lists",
            "Measure the reduction in edit time between unconstrained vs voice-constrained drafts",
          ],
          outputSample:
            "RAW AI DRAFT:\n'In today's fast-paced digital landscape, IT teams struggle to seamlessly manage assets. Freshservice is a game-changer that revolutionizes your workflow...'\nBanned Clichés Detected: 4 ('fast-paced landscape', 'seamlessly', 'game-changer', 'revolutionizes')\n\nVOICE-CONSTRAINED DRAFT:\n'Tracking 5,000 laptops across three offices shouldn't take four spreadsheets and a prayer. Freshservice auto-discovers every device on your network in 15 minutes.'\nBanned Clichés Detected: 0 | Edit Time Saved: 85%",
          healthy:
            "Prompts include explicit negative constraints and tone anchors, cutting human editing time from 20 minutes to under 3 minutes.",
          unhealthy:
            "Shipping raw AI drafts that broadcast generic AI cadence and corporate filler phrases to prospective customers.",
          interpret:
            "Brand voice is defined as much by what you NEVER say as what you do say. Negative constraints prevent the model from drifting into bland clichés.",
          soWhat: [
            {
              symptom: "Content reads like generic SaaS marketing copy with no distinct perspective",
              action: "Create a shared 'Negative Voice Guide' listing 25 banned corporate buzzwords to inject into all team prompts",
              effort: "30 min",
            },
            {
              symptom: "Writers take 45 minutes rewriting poor AI drafts from scratch",
              action: "Refine the initial prompt brief with 2 positive tone examples before generating variants",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-governance-measurement",
          concept: "Human-in-the-Loop Governance & Measurement",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Step 6 of the playbook mandates A/B testing AI-generated variants against human baselines and establishing an explicit human-in-the-loop review step before publishing.",
          question:
            "What SLA and approval workflow must be implemented to ensure every AI-assisted asset is tested and verified prior to distribution?",
          toolName: "Google Sheets",
          where:
            "Add a 'Governance & Governance Tier' tab to your audit sheet, defining approval roles, review checklists, and A/B test tracking.",
          procedure: [
            "Assign an approval owner (Copywriter, Product Marketing Manager, Legal) for each audited asset type",
            "Define the 3-point pre-publish checklist: (1) Voice Pass, (2) Fact Verification, (3) Compliance Sign-Off",
            "Establish an A/B testing protocol comparing AI-drafted variants against human-only benchmarks for CTR and conversion rate",
            "Set up an experimentation log to track weekly hours recovered vs performance lift across the marketing org",
          ],
          outputSample:
            "GOVERNANCE & EXPERIMENTATION LOG (Freshworks):\n- Ad Headlines: Reviewer: Growth Marketer | SLA: 2 mins | Gate: Claim sheet verification | Test: 5 AI vs 5 Human variants on Google Ads\n- Blog Posts: Reviewer: Managing Editor | SLA: 15 mins | Gate: Live URL check on all 8 cited stats | Test: Organic rank & dwell time\n- Email Sequences: Reviewer: Lifecycle Lead | SLA: 5 mins | Gate: Tone & CTA clarity | Test: 50/50 split on 20,000 recipient campaign\nWeekly Org Metrics: 32.5 hours recovered across 5 writers | AI headline variant winning 3 of 4 live ad tests (avg CTR +18%)",
          healthy:
            "Every AI workflow has a designated human reviewer, documented fact-checking rules, and rigorous A/B performance tracking against human baselines.",
          unhealthy:
            "Deploying automated publishing pipelines directly from LLM output to live production without human review.",
          interpret:
            "AI leverage compounds when teams use time saved to run more experiments and perform deeper editorial polishing, rather than cutting quality checks.",
          soWhat: [
            {
              symptom: "AI variants consistently underperform human baseline copy in A/B tests",
              action: "Audit the prompt brief: clarify customer pain points and value proposition before generating new variants",
              effort: "30 min",
            },
            {
              symptom: "Review bottlenecks slow down content velocity despite fast AI drafting",
              action: "Standardize pre-publish checklists to focus strictly on factual accuracy, banned words, and formatting",
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
            role: "Audit matrix and governance framework builder",
            why: "Free, structured table formatting without setup friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Drafting, cliché detection, and prompt constraint testing",
            why: "Free tier model for prompt experimentation and variant generation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Claude",
            role: "Long-form reasoning and brand-voice adherence testing",
            why: "Exceptional nuance in tone and negative constraint handling",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete 5-workflow AI Marketing Audit Matrix in Google Sheets with risk scoring, brand voice guardrails, fact-checking protocols, and pre-publish governance rules.",
      sampleOutput:
        "Klaviyo — Marketing Operations AI Readiness Audit (Excerpt)\n\n" +
        "WORKFLOW 1: Abandoned Cart Email Subject Lines (Tier: GREEN - Safe to Scale)\n" +
        "  Boundedness: 5/5 (Fixed length, 45-60 chars, clear intent)\n" +
        "  Hallucination Risk: Low (No dynamic claims, references cart item only)\n" +
        "  Brand Voice Guardrail: Banned words ('urgent', 'don't miss out', 'shocking'). Inject casual, helpful tone.\n" +
        "  Governance: 100% human-approved batch of 10 variants; A/B tested on 5,000-user holdout.\n\n" +
        "WORKFLOW 2: E-commerce Benchmark Report Drafting (Tier: AMBER - Strict Review Required)\n" +
        "  Boundedness: 3/5 (Structured sections, but heavy statistical dependency)\n" +
        "  Hallucination Risk: Critical (High risk of invented industry conversion averages)\n" +
        "  Brand Voice Guardrail: Remove fluff openers; enforce data-first paragraph structure.\n" +
        "  Governance: Data analyst must verify every single number against internal warehouse before editorial review.\n\n" +
        "WORKFLOW 3: Autonomous Support Refund Processing (Tier: RED - Banned from Generative AI)\n" +
        "  Boundedness: 2/5 (Policy interpretation)\n" +
        "  Hallucination Risk: Critical (Air Canada legal liability risk for fabricated refund commitments)\n" +
        "  Governance: Replaced with deterministic rule-based logic; zero LLM generation on financial commitments.",
      successCriteria: [
        "Audits all 5 marketing workflows across boundedness, hallucination risk, and brand voice fragility",
        "Establishes a concrete pre-publish governance checklist with clear reviewer ownership",
        "Defines an A/B testing framework comparing AI variants against human baselines",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-marketing-101-hallucination-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Spot the Hallucination: Teardown of 4 AI-Generated Marketing Drafts",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given 4 realistic AI-generated marketing specimens (a competitor comparison blog post, a customer case study, an email policy response, and a localized social ad), perform a line-by-line factual and voice teardown to uncover hallucinated statistics, fake citations, unauthorized policy commitments, and generic AI cadence before publication.",
      companyId: "ola-electric",
      scenario:
        "You are the Lead Content Editor at Ola Electric reviewing raw drafts produced by an experimental automated AI content workflow. Before any material is approved for the website, email, or advertising channels, you must audit each specimen against the lesson's fact-checking rules, legal liability precedents (like Air Canada's chatbot ruling), and brand voice standards.",
      brief:
        "Analyze all four draft specimens. Identify every critical defect (hallucinated data, fake citations, legal exposure), moderate defect (unsupported superlatives, bland AI clichés), and distinguish them from legitimate marketing copy.",
      mode: "teardown",
      conceptsCovered: [
        "Hallucination Detection & Citation Fact-Checking",
        "Legal Liability & Policy Guardrails",
        "Banned AI Cadence & Fluff Elimination",
        "Brand Voice & Competitive Truthfulness",
      ],
      teardownItems: [
        {
          itemId: "item-1-competitor-comparison",
          specimenSource: "synthetic-realistic",
          specimen:
            "In today's fast-paced urban landscape, modern commuters are embracing sustainable mobility like never before. The Ola S1 Pro stands as an undisputed game-changer, boasting an industry-crushing 240 km real-world range that leaves Ather 450X and TVS iQube in the dust. According to a landmark 2025 study by the International Green Mobility Institute (IGMI), 94.8% of Indian EV riders prefer Ola's revolutionary Hypercharger ecosystem over any legacy charging network. Experience seamless power that transforms your daily journey into a thrilling testament to green innovation.",
          prompt:
            "Audit this draft comparison paragraph intended for Ola Electric's blog. Identify all factual hallucinations, unsupported claims, legal risks, and brand voice defects.",
          answerKey: [
            {
              defect:
                "Fabricated organization and statistic: 'International Green Mobility Institute (IGMI)' and the '94.8%' preference figure are completely hallucinated by the model with zero verifiable existence.",
              severity: "critical",
              whyItMatters:
                "Publishing hallucinated research organizations permanently destroys brand credibility and exposes the company to regulatory fines under advertising truthfulness laws.",
              lessonRef: "where-ai-reliably-fails",
              owner: "you",
            },
            {
              defect:
                "Inaccurate product specification: Claiming '240 km real-world range' when certified IDC range is 195 km and true eco-mode range is ~170 km creates false advertising liability.",
              severity: "critical",
              whyItMatters:
                "Exaggerating EV range specs leads directly to consumer protection complaints and product return disputes.",
              lessonRef: "why-it-matters-with-data",
              owner: "you",
            },
            {
              defect:
                "Heavy AI cliché and filler cadence: Opening with 'In today's fast-paced urban landscape' and stuffing adjectives ('undisputed game-changer', 'seamless', 'thrilling testament').",
              severity: "moderate",
              whyItMatters:
                "Readers and search engines immediately recognize repetitive AI filler, diminishing perceived brand quality.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect:
                "Unprofessional competitor disparagement ('leaves Ather 450X in the dust') without supporting technical comparison data.",
              severity: "moderate",
              whyItMatters:
                "Comparative advertising requires objective, verifiable feature tables rather than unsubstantiated slurs.",
              lessonRef: "how-it-works-the-playbook",
              owner: "you",
            },
          ],
          distractors: [
            "Mentioning named competitors Ather 450X and TVS iQube is inherently illegal; naming competitors in factual comparative marketing is legally standard when claims are substantiated.",
            "The paragraph is under 150 words which violates SEO word count minimums; section length depends on intent, not arbitrary word counts.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-support-policy-email",
          specimenSource: "synthetic-realistic",
          specimen:
            "Dear Valued Customer, Thank you for reaching out regarding your battery warranty claim. At Ola Electric, we stand behind our vehicles 100%. Under our comprehensive Lifetime Battery Promise, if your battery health drops below 85% within the first 5 years, our mobile service van will replace your battery pack completely free of charge at your doorstep within 24 hours of filing a claim, with no diagnostics fee or inspection waiting period required. Best regards, Ola AI Support Assistant.",
          prompt:
            "Audit this automated customer email generated by an experimental support bot. Identify all policy hallucination and legal liability defects.",
          answerKey: [
            {
              defect:
                "Hallucinated warranty policy ('Lifetime Battery Promise' replacing battery below 85% in 24h at doorstep with no inspection fee).",
              severity: "critical",
              whyItMatters:
                "Under the Air Canada precedent (Moffatt v. Air Canada), companies are legally liable for promises and policies invented by their customer-facing AI systems.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect:
                "Unrestricted autonomous commitment without technician diagnostic verification.",
              severity: "critical",
              whyItMatters:
                "Committing to immediate free hardware replacements without standard diagnostic protocols creates massive unbudgeted warranty liabilities.",
              lessonRef: "where-ai-reliably-fails",
              owner: "you",
            },
            {
              defect:
                "Generic corporate salutation ('Dear Valued Customer') instead of personalized customer name integration.",
              severity: "cosmetic",
              whyItMatters:
                "Signals impersonal automated handling when customer is experiencing an urgent service issue.",
              lessonRef: "how-it-works-the-playbook",
              owner: "you",
            },
          ],
          distractors: [
            "Signing the email as 'Ola AI Support Assistant' violates transparency laws; disclosing AI identity is actually recommended best practice, the defect is the hallucinated policy.",
            "Offering mobile doorstep service is impossible for EV companies; Ola operates an active mobile service van fleet in major Indian cities.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-social-ad-copy",
          specimenSource: "synthetic-realistic",
          specimen:
            "Headline: Cut Your Fuel Bill to Zero Today | Ola S1\nPrimary Text: Commuting shouldn't cost ₹6,000 a month in petrol. The Ola S1 costs just ₹0.15 per km to run—saving the average Bengaluru rider ₹4,800 every month. Test ride at your nearest Experience Centre today.\nCTA: Book Free Test Ride",
          prompt:
            "Audit this AI-generated social ad draft for compliance, brand voice, and factual accuracy. Identify any defects or state if the specimen is production-ready.",
          answerKey: [],
          distractors: [
            "The running cost figure of ₹0.15 per km is a hallucination; this is Ola's verified official per-km operating cost based on standard domestic electricity tariffs in India.",
            "The primary text does not include a disclaimer about electricity price fluctuations; standard digital ads include necessary terms on the destination landing page rather than cluttering 125-char ad text.",
            "The headline does not use emotional adjectives like 'revolutionary' or 'game-changing'; clean, benefit-driven headlines outperform adjectival hype.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-fleet-case-study",
          specimenSource: "synthetic-realistic",
          specimen:
            "How Zomato Delivery Partner Rajesh Kumar Tripled His Net Daily Earnings with Ola Gig Scooter\n\nRajesh Kumar, a full-time food delivery partner in South Delhi, was spending ₹450 every single day fueling his 110cc petrol scooter. After switching to the Ola Gig electric scooter on a flexible subscription, his daily energy cost plummeted to just ₹42. 'My daily take-home earnings jumped from ₹650 to over ₹1,050 immediately,' Rajesh reports. According to Dr. Arvind Swaminathan, Chief Transport Economist at Delhi Urban Mobility Council, 'Commercial two-wheeler electrification is delivering a verified 44% increase in gig-worker disposable income across Tier-1 Indian corridors in 2025.'",
          prompt:
            "Audit this AI-drafted customer success spotlight. Identify all verification defects, quote risks, and source-checking requirements.",
          answerKey: [
            {
              defect:
                "Hallucinated expert quote and institution: 'Dr. Arvind Swaminathan' and 'Delhi Urban Mobility Council' are fabricated authority sources generated by the LLM to sound persuasive.",
              severity: "critical",
              whyItMatters:
                "Inventing expert quotes and academic titles in corporate case studies constitutes deliberate fraud and violates advertising standards.",
              lessonRef: "where-ai-reliably-fails",
              owner: "you",
            },
            {
              defect:
                "Unverified individual customer quote ('My daily take-home earnings jumped...'): AI has drafted direct speech without an actual customer interview transcript.",
              severity: "critical",
              whyItMatters:
                "Attributing fabricated quotes to real or synthetic customer names without signed consent creates severe legal and PR liability.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect:
                "Precise numerical claims (₹450 fuel vs ₹42 energy) stated as factual case evidence without audit documentation or rider log verification.",
              severity: "moderate",
              whyItMatters:
                "Case studies must rely on audited customer billing data rather than unanchored LLM extrapolations.",
              lessonRef: "how-it-works-the-playbook",
              owner: "you",
            },
          ],
          distractors: [
            "The case study focuses on gig economy riders instead of retail consumers; Ola Electric has a dedicated Ola Gig commercial B2B line specifically for delivery fleets.",
            "The headline is too long for a blog post; 12-16 word descriptive case study titles are standard editorial practice for B2B/commercial stories.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Editorial review markup and defect tracking",
            why: "Clean collaborative interface for line editing and fact-checking",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Perplexity",
            role: "Real-time source verification and citation lookup",
            why: "Instantly checks whether cited institutes and authors exist in primary web records",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 4-specimen editorial teardown log classifying critical factual defects, policy hallucination risks, and brand voice errors with corrected redline drafts.",
      sampleOutput:
        "Ather Energy — AI Content Teardown Audit (Specimen Redline Excerpt)\n\n" +
        "SPECIMEN AUDIT: 450 Apex Launch Feature Post\n" +
        "  Original Line: 'According to the National Electric Vehicle Safety Board, Ather's Warp+ mode is 300% safer than conventional IC engines.'\n" +
        "  Defect: CRITICAL HALLUCINATION | The 'National Electric Vehicle Safety Board' does not exist; safety comparison metric is ungrounded.\n" +
        "  Action: Delete sentence entirely. Replace with verified AIS-156 battery safety certification standard.\n\n" +
        "  Original Line: 'In today's fast-paced world, speed meets sustainable perfection.'\n" +
        "  Defect: MODERATE AI CLICHÉ | Generic fluff opener carrying zero informational value.\n" +
        "  Action: Replace with direct technical spec: '0 to 40 km/h in 2.9 seconds with instantaneous 26 Nm torque delivery.'",
      successCriteria: [
        "Correctly identifies hallucinated research institutions and fabricated expert citations",
        "Flags critical customer policy hallucination risks under the Air Canada precedent",
        "Distinguishes between genuine marketing copy defects and valid factual product specifications",
      ],
      portfolioReady: true,
    },
  ],

  "prompt-engineering-marketers": [
    {
      id: "prompt-engineering-marketers-rctf-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The RCTF Prompt Architecture: Building a Production-Ready Email Prompt",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Construct a modular, reusable prompt template using the RCTF framework (Role, Context, Task, Format) with negative voice constraints and few-shot examples to generate high-converting SaaS onboarding emails on demand.",
      companyId: "slack",
      scenario:
        "You are the Lifecycle Marketing Specialist at Slack. You need to build a standardized AI prompt template that any junior copywriter or product marketer can use to generate on-brand, technical-yet-accessible onboarding emails for newly registered developer workspaces and team admins.",
      brief:
        "Build a complete production-ready prompt using the RCTF framework. Define a specific developer-marketer persona, bake in Slack's brand voice and negative constraints, require structured JSON/markdown output, and provide 2 few-shot exemplars.",
      mode: "build",
      conceptsCovered: [
        "The Persona Prompt & Identity Anchoring",
        "The Constraint Prompt & Negative Rules",
        "The Few-Shot Prompt & Example Grounding",
        "The RCTF Framework (Role, Context, Task, Format)",
      ],
      steps: [
        {
          stepId: "step-1-role-persona",
          concept: "The Persona Prompt & Identity Anchoring",
          lessonAnchor: "1-the-persona-prompt",
          theoryRecap:
            "The lesson explains that assigning a specific expert identity ('You are a developer relations copywriter with 8 years of experience...') produces significantly tighter, more nuanced copy than generic instructions like 'write an email'.",
          question:
            "How do we define an expert persona that balances technical credibility with engaging lifecycle conversion copy?",
          toolName: "Google Docs",
          where:
            "Create a new prompt template document in Google Docs titled 'Slack Lifecycle Onboarding Prompt Template v1.0'.",
          procedure: [
            "Write the [ROLE] block defining the AI's professional identity, years of domain experience, and technical depth",
            "Specify the exact target audience: engineering team leads and workspace admins who value concise, workflow-focused messaging",
            "Instruct the model on its conversational posture: pragmatic, peer-to-peer, developer-friendly, and concise",
          ],
          outputSample:
            "[ROLE]\nYou are a Senior Product Lifecycle Copywriter at Slack with 8 years of experience writing onboarding communications for software engineering teams, workspace admins, and IT managers.\nYour writing is respected because you avoid generic marketing fluff, focus strictly on daily workflow speed, and explain product features in terms of developer time saved.",
          healthy:
            "The persona defines specific domain expertise, target developer audience, and communication posture.",
          unhealthy:
            "Using vague, generic role statements like 'You are an email writer' or 'Act as a marketer'.",
          interpret:
            "A precise persona calibrates the model's vocabulary and prevents generic consumer marketing jargon from polluting technical copy.",
          soWhat: [
            {
              symptom: "AI outputs sound like generic sales pitches rather than technical product walkthroughs",
              action: "Ground the persona in developer relations experience and specify audience seniority",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-context-constraints",
          concept: "The Constraint Prompt & Negative Rules",
          lessonAnchor: "3-the-constraint-prompt",
          theoryRecap:
            "Pattern 3 teaches that restrictions and negative constraints force the model away from generic phrasing and improve output quality by up to 76% (MIT Sloan 2024).",
          question:
            "What brand background, product differentiators, and explicit negative constraints must be included in the Context block?",
          toolName: "Google Docs",
          where:
            "In your prompt document, write the [CONTEXT] block containing brand background and the [CONSTRAINTS & NEGATIVE RULES] list.",
          procedure: [
            "Define the core product context: Slack Canvas, Workflow Builder, and GitHub app integrations",
            "State the exact user milestone: workspace admin signed up 3 days ago, created 2 channels, but has not installed any app integrations",
            "Add a strict negative constraint list: ban exclamation points, buzzwords ('revolutionary', 'seamless', 'game-changer', 'elevate'), and generic openings ('We hope this email finds you well')",
          ],
          outputSample:
            "[CONTEXT]\nProduct: Slack Workspace (Workflow Builder & GitHub Integration).\nUser Milestone: Day 3 admin who created channels but has not installed a developer app integration yet.\nGoal: Guide admin to connect GitHub or set up a daily standup workflow in under 3 minutes.\n\n[CONSTRAINTS & NEGATIVE RULES]\n1. Maximum word count: 120 words for body copy.\n2. Zero exclamation points allowed.\n3. Banned words: 'seamless', 'game-changer', 'supercharge', 'revolutionary', 'in today's world', 'thrilled', 'delve'.\n4. Opening rule: Open directly with the team coordination problem; never greet with 'Hope you are well' or 'Welcome to the Slack family'.",
          healthy:
            "Negative constraints explicitly eliminate repetitive AI clichés and define strict word count ceilings.",
          unhealthy:
            "Leaving brand tone open-ended, allowing the model to default to cheerful corporate enthusiasm.",
          interpret:
            "Constraints give the model guardrails. Removing cliché tokens forces the attention mechanism to pick higher-information words.",
          soWhat: [
            {
              symptom: "AI repeatedly inserts 'supercharge your workflow' in every draft",
              action: "Add 'supercharge' to the explicit banned words list inside the prompt template",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-task-few-shot",
          concept: "The Few-Shot Prompt & Example Grounding",
          lessonAnchor: "4-the-few-shot-prompt",
          theoryRecap:
            "Stanford NLP research (2024) shows that few-shot prompting (providing 2-3 concrete exemplars) improves output quality by 30-50% compared to zero-shot instructions.",
          question:
            "What exact task instructions and few-shot examples will demonstrate the target structure and tone?",
          toolName: "ChatGPT",
          where:
            "Add the [TASK] and [FEW-SHOT EXAMPLES] sections to your Google Doc prompt template, then test in ChatGPT or Claude.",
          procedure: [
            "Define the task: Generate 3 distinct subject line options (under 45 characters) and 1 focused 100-word body copy draft with a single CTA",
            "Write 2 high-performing past onboarding emails as few-shot exemplars",
            "Annotate each exemplar showing why it works (direct subject line, clear workflow benefit, zero fluff)",
          ],
          outputSample:
            "[TASK]\nDraft 3 subject line options (under 45 characters) and 1 body copy draft (under 100 words) guiding the admin to connect GitHub alerts to a dedicated channel.\n\n[FEW-SHOT EXAMPLES]\nExample 1 (Tone Anchor):\nSubject: Stop checking GitHub tabs for PR reviews\nBody: Context switching between Slack and pull request reviews kills coding momentum. Connect the GitHub app to your team's review channel, and Slack will ping assignees automatically when PRs need attention. Merged PRs notify the channel instantly—no manual follow-up required.\nCTA: Connect GitHub to Slack",
          healthy:
            "Providing 2 high-quality examples eliminates tone ambiguity and establishes exact structural cadence.",
          unhealthy:
            "Relying on abstract descriptions like 'make it sound cool' without providing real reference copy.",
          interpret:
            "Few-shot exemplars are the single highest-leverage technique for aligning an LLM to your exact stylistic standard.",
          soWhat: [
            {
              symptom: "Drafts wander in length and structure across repeated prompt runs",
              action: "Paste 2 ideal past emails into the prompt template as permanent few-shot anchors",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-format-specification",
          concept: "The RCTF Framework (Role, Context, Task, Format)",
          lessonAnchor: "how-it-works-the-rctf-framework",
          theoryRecap:
            "Format specifies the exact output structure (JSON, markdown table, tagged fields). Skipping format results in chaotic formatting that breaks downstream publishing and automation.",
          question:
            "How should we structure the output schema so it can be pasted directly into our marketing automation platform or reviewed in a clean table?",
          toolName: "ChatGPT",
          where:
            "Add the [FORMAT] block to your prompt template and execute a live test run in ChatGPT or Claude.",
          procedure: [
            "Define the exact output schema using structured markdown or JSON fields",
            "Require fields for: subject_lines, preview_text, body_markdown, and cta_button",
            "Run the complete assembled prompt in ChatGPT to verify zero schema breakage",
          ],
          outputSample:
            "[FORMAT]\nReturn output in valid JSON matching this schema:\n{\n  \"subject_lines\": [\"string\", \"string\", \"string\"],\n  \"preview_text\": \"string (max 60 chars)\",\n  \"body_markdown\": \"string (max 100 words, markdown formatting)\",\n  \"cta_button\": {\n    \"label\": \"string (max 25 chars)\",\n    \"url\": \"https://slack.com/apps/github\"\n  }\n}",
          healthy:
            "The model outputs clean, predictable JSON that drops straight into customer lifecycle tooling without reformatting.",
          unhealthy:
            "Receiving unstructured chat prose requiring manual copy-pasting and reformatting across 5 different fields.",
          interpret:
            "Structured format constraints turn an LLM from a conversational toy into a dependable API and production tool.",
          soWhat: [
            {
              symptom: "Model includes conversational chatter ('Sure! Here is your email:') before the copy",
              action: "Add format rule: 'Output ONLY raw JSON. No conversational filler or markdown backticks outside the JSON object.'",
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
            role: "Prompt template library storage and version control",
            why: "Collaborative, free storage for team-wide prompt templates",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Prompt execution, iteration, and output validation",
            why: "Accessible free environment for testing RCTF templates",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A production-ready, reusable RCTF Prompt Template in Google Docs with complete Role, Context, Negative Constraints, Few-Shot Examples, and JSON Schema specifications.",
      sampleOutput:
        "Notion — Lifecycle Onboarding Prompt Template Output\n\n" +
        "{\n" +
        "  \"subject_lines\": [\n" +
        "    \"Your team wiki is 3 clicks away\",\n" +
        "    \"Stop losing docs in Slack threads\",\n" +
        "    \"Set up your Notion engineering hub\"\n" +
        "  ],\n" +
        "  \"preview_text\": \"Turn scattered Google Docs into a clean, searchable team wiki.\",\n" +
        "  \"body_markdown\": \"Searching through 14 Google Docs and six Slack bookmarks to find your API spec is a waste of engineering time.\\n\\nWith Notion's Team Wiki template, your architecture diagrams, meeting notes, and deploy checklists live in one shared workspace. Connect your GitHub repos and keep every developer aligned.\",\n" +
        "  \"cta_button\": {\n" +
        "    \"label\": \"Deploy Team Wiki Template\",\n" +
        "    \"url\": \"https://notion.so/templates/engineering-wiki\"\n" +
        "  }\n" +
        "}",
      successCriteria: [
        "Constructs all 4 components of the RCTF framework (Role, Context, Task, Format)",
        "Includes a rigorous negative constraints list eliminating AI marketing clichés",
        "Provides at least 1 grounded few-shot exemplar and specifies a clean JSON output schema",
      ],
      portfolioReady: true,
    },
    {
      id: "prompt-engineering-marketers-flawed-prompt-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Prompt Teardown: Diagnosing 3 Broken Marketing Prompts",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given 3 flawed marketing prompts that reliably produce hallucinated, generic, or unusable marketing copy, apply the RCTF framework, constraint rules, and few-shot principles to diagnose every missing component and rewrite them into high-performing production briefs.",
      companyId: "duolingo",
      scenario:
        "You are the Senior Growth Marketing Manager at Duolingo reviewing prompt templates submitted by regional marketing teams for push notifications, reactivation emails, and paid ad creative. Many prompts are yielding generic, cliché-ridden copy that sounds like a corporate bank rather than Duolingo's iconic, cheeky, slightly unhinged owl persona. You need to teardown and fix these prompts.",
      brief:
        "Analyze 3 defective prompts. Identify all missing RCTF components, absent brand constraints, ungrounded zero-shot risks, and provide actionable fixes.",
      mode: "teardown",
      conceptsCovered: [
        "The RCTF Framework (Role, Context, Task, Format)",
        "The Persona Prompt & Identity Anchoring",
        "The Constraint Prompt & Negative Rules",
        "Common Mistakes Marketers Make",
      ],
      teardownItems: [
        {
          itemId: "item-1-vague-push-prompt",
          specimenSource: "synthetic-realistic",
          specimen:
            "Write 5 push notifications to get people to practice French on Duolingo today. Make them catchy, fun, and urgent so users click. Include emojis.",
          prompt:
            "Teardown this push notification prompt. Identify why it fails to produce on-brand Duolingo copy and name every missing structural component.",
          answerKey: [
            {
              defect:
                "Missing Role and Persona: Does not define Duolingo's specific brand identity (cheeky, persistent, guilt-tripping Duo the Owl persona), resulting in bland generic push copy.",
              severity: "critical",
              whyItMatters:
                "Without a persona anchor, the model defaults to corporate cheerfulness ('Bonjour! Time to learn French today!') rather than Duolingo's high-converting unhinged tone.",
              lessonRef: "1-the-persona-prompt",
              owner: "you",
            },
            {
              defect:
                "Zero Constraints: 'Catchy, fun, and urgent' are subjective buzzwords rather than hard constraints (character limit, banned words, CTA rules).",
              severity: "critical",
              whyItMatters:
                "Push notifications must fit mobile OS lock screens (under 60 characters). Unconstrained prompts generate 20-word sentences that get truncated on iOS/Android.",
              lessonRef: "3-the-constraint-prompt",
              owner: "you",
            },
            {
              defect:
                "Missing Context: No user state specified (e.g. 5-day streak at risk, inactive for 30 days, or missed lesson at 9 PM).",
              severity: "moderate",
              whyItMatters:
                "High-performing notifications trigger on specific behavioral context (streak loss anxiety), not generic encouragement.",
              lessonRef: "how-it-works-the-rctf-framework",
              owner: "you",
            },
          ],
          distractors: [
            "Asking for 5 notifications at once overburdens the model; requesting 5-10 tactical variants in a single prompt is standard recommended practice.",
            "Requesting emojis causes model hallucination; LLMs handle standard UTF-8 emojis natively with high reliability.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-kitchen-sink-campaign-prompt",
          specimenSource: "synthetic-realistic",
          specimen:
            "You are a world-class marketing genius. Write our entire Q3 back-to-school marketing campaign for Duolingo for Schools. We need a landing page headline and subheadline, a 5-part email nurture sequence for high school Spanish teachers, 10 Google Ads headlines with descriptions, 3 TikTok script concepts with viral hooks, and a press release announcing our new gamified teacher dashboard. Make it viral, professional, and conversion-optimized.",
          prompt:
            "Teardown this comprehensive campaign prompt. Identify all structural flaws and failure modes.",
          answerKey: [
            {
              defect:
                "Severe Over-Prompting (Mistake 6): Bundles 5 disparate deliverables (landing page, 5 emails, 10 ads, 3 video scripts, press release) across conflicting audiences (teachers, students, journalists) into a single prompt.",
              severity: "critical",
              whyItMatters:
                "Over-prompting exhausts model attention context, resulting in shallow, mediocre, half-finished output across every single asset.",
              lessonRef: "common-mistakes-marketers-make",
              owner: "you",
            },
            {
              defect:
                "Conflicting Tone Requirements: Demands copy be simultaneously 'viral', 'professional', and 'genius' without defining the specific voice for distinct channels.",
              severity: "moderate",
              whyItMatters:
                "Press releases require AP journalistic style while TikTok scripts require fast casual pacing; combining them produces tonal confusion.",
              lessonRef: "how-it-works-the-rctf-framework",
              owner: "you",
            },
            {
              defect:
                "Zero Format or Deliverable Constraints: No character limits, email lengths, script structures, or schema definitions provided.",
              severity: "moderate",
              whyItMatters:
                "The model will output brief, superficial summaries rather than usable production-ready assets.",
              lessonRef: "how-it-works-the-rctf-framework",
              owner: "you",
            },
          ],
          distractors: [
            "The persona 'world-class marketing genius' is too humble; hyper-inflated role labels ('world-class genius') add zero domain signal compared to concrete job titles with years of experience.",
            "Targeting Spanish teachers on TikTok is impossible; teacher communities on TikTok (#TeacherTok) represent massive, active professional audiences.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-adhoc-analysis-prompt",
          specimenSource: "synthetic-realistic",
          specimen:
            "Compare Duolingo vs Babbel vs Rosetta Stone for adult language learners. Which app is the best and why? Write 3 paragraphs explaining their pricing and features.",
          prompt:
            "Teardown this market research prompt. Identify why this prompt produces hallucinated citations and subjective fluff instead of structured competitive intelligence.",
          answerKey: [
            {
              defect:
                "Treating AI as an authoritative search engine / factual researcher (Mistake 1 & Lesson Failure Mode): Asks the model to invent factual comparative claims and current pricing without providing grounded source documents.",
              severity: "critical",
              whyItMatters:
                "LLMs do not have live pricing databases; asking 'which is best and why' produces hallucinated subscription prices and outdated feature lists.",
              lessonRef: "common-mistakes-marketers-make",
              owner: "you",
            },
            {
              defect:
                "Absence of Chain-of-Thought reasoning or structured comparison dimensions (Pattern 2).",
              severity: "moderate",
              whyItMatters:
                "Without prompting the model to reason through specific evaluation criteria (retention, pedagogy, price-per-month, speaking practice), it generates shallow promotional generalities.",
              lessonRef: "2-the-chain-of-thought-prompt",
              owner: "you",
            },
            {
              defect:
                "Subjective superlative query ('Which app is the best?'): Prompts the model to express ungrounded subjective opinions rather than objective feature matrices.",
              severity: "moderate",
              whyItMatters:
                "Marketing intelligence requires structured feature-by-feature evaluation tables, not subjective AI declarations of a 'winner'.",
              lessonRef: "how-it-works-the-rctf-framework",
              owner: "you",
            },
          ],
          distractors: [
            "Comparing three brands in one prompt exceeds model capacity; comparing 3-5 competitors is standard provided structured evaluation criteria are given.",
            "Requesting 3 paragraphs is forbidden in competitive analysis; paragraph counts are fine, the defect is the lack of structured criteria and grounded source data.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Prompt defect scoring and rewrite worksheet",
            why: "Simple collaborative template for redlining prompt briefs",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Testing flawed vs repaired prompt outputs",
            why: "Direct side-by-side output comparison in free chat interface",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 3-prompt teardown score sheet detailing missing RCTF components, constraint violations, and complete rewritten production prompt templates.",
      sampleOutput:
        "Babbel — Prompt Teardown & Repair Matrix (Excerpt)\n\n" +
        "DEFECTIVE PROMPT:\n" +
        "  'Write a Facebook ad for Babbel German course targeting travelers. Make it good.'\n" +
        "DIAGNOSIS:\n" +
        "  Missing Role: No expert copywriter persona defined.\n" +
        "  Missing Context: Fails to specify traveler use-case (ordering food, airport navigation, conversational confidence in 3 weeks).\n" +
        "  Missing Constraints: No 125-char primary text limit; zero negative word exclusions.\n" +
        "REPAIRED RCTF PROMPT:\n" +
        "  [ROLE] You are a direct-response paid social copywriter specializing in adult language learning apps.\n" +
        "  [CONTEXT] Audience: English speakers traveling to Germany/Austria in 30 days. Value prop: 15-minute conversational lessons focused on real-world travel dialogues.\n" +
        "  [TASK] Write 3 primary text options (under 125 characters) and 3 headline options (under 27 characters).\n" +
        "  [CONSTRAINTS] No exclamation marks. Do not use 'fluent' or 'master'. Focus on ordering food and asking for directions.\n" +
        "  [FORMAT] Output in a 2-column Markdown table with columns: Asset Type, Copy Text.",
      successCriteria: [
        "Correctly identifies all missing RCTF components across the 3 flawed specimens",
        "Diagnoses over-prompting and explains the attention context breakdown mechanism",
        "Provides actionable, grounded prompt repairs following negative constraint and few-shot rules",
      ],
      portfolioReady: true,
    },
  ],

  "ai-content-writing": [
    {
      id: "ai-content-writing-prompt-structure-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Prompt Engineering Teardown: Three AI Prompts, One Clear Winner",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate AI writing prompts for the same marketing deliverable, evaluate each against the lesson's 4-part framework (Role, Task, Context, Constraints) to identify structural flaws, missing constraints, and hallucination risks before running them in production.",
      companyId: "swiggy",
      scenario:
        "You're the content lead at Swiggy reviewing draft ChatGPT prompts created by junior marketers for Swiggy Instamart's monsoon flash-sale push notification and email campaign.",
      brief:
        "Analyze all three prompt specimens. For each prompt, identify missing framework components, vague instructions, or missing negative constraints (banned words) against the answer key.",
      mode: "teardown",
      conceptsCovered: [
        "Use the 4-Part Prompt Structure",
        "Build a Banned-Words List",
        "Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-vague-oneshot-prompt",
          specimenSource: "synthetic-realistic",
          specimen:
            "Write a promotional email and 3 push notifications for Swiggy Instamart's monsoon campaign offering 20% off hot snacks and tea. Make it catchy, engaging, and exciting for foodies.",
          prompt:
            "Evaluate this prompt against the 4-part structure (Role, Task, Context, Constraints). Name every defect you find.",
          answerKey: [
            {
              defect:
                "Missing Role: The prompt gives the AI model no persona, expertise level, or industry perspective (e.g., 'You are a direct-response lifecycle copywriter for an on-demand delivery app').",
              severity: "moderate",
              whyItMatters:
                "Without a defined role, LLMs default to generic corporate or promotional voices rather than brand-appropriate direct-response copy.",
              lessonRef: "Step 2: Use the 4-Part Prompt Structure",
              owner: "you",
            },
            {
              defect:
                "Missing Context and Examples: No audience demographics, order history segment, delivery timeframes, or past high-performing copy samples are included in the prompt.",
              severity: "critical",
              whyItMatters:
                "The lesson highlights that LLMs optimize for average prose unless grounded with 2-3 real copy examples and explicit audience context.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "Missing Constraints and Banned Words: No character counts, paragraph limits, CTA rules, or negative constraints (e.g., 'do not use unlock, seamless, or game-changer') are specified.",
              severity: "critical",
              whyItMatters:
                "Without negative constraints, models default to overused AI clichés ('delve into', 'unlock the flavors', 'in today's rainy landscape') that erode consumer trust.",
              lessonRef: "Step 4: Build a Banned-Words List",
              owner: "you",
            },
          ],
          distractors: [
            "It asks for both an email and push notifications in one prompt; asking for multiple related deliverables in a single task is fine as long as specific formats and constraints are provided for each.",
            "It specifies a 20% discount offer, which is a concrete promotional detail, not a defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-flawless-4part-prompt",
          specimenSource: "synthetic-realistic",
          specimen:
            "You are a mobile direct-response copywriter for Swiggy Instamart in India.\n\nTask: Write 3 push notification variants (max 60 characters title, max 90 characters body) and one 80-word promotional email announcing 10-minute delivery of chai and pakoras during monsoon rains.\n\nContext: Target audience is urban working professionals ordering evening snacks between 4 PM and 7 PM. Tone: witty, relatable, conversational Indian-English. Past winning push example: 'Rain outside, steaming samosas at your door in 10 mins. 🌧️☕'.\n\nConstraints: Strictly observe character limits. Include exactly one clear CTA. Do NOT use: 'unlock', 'delve', 'seamless', 'game-changer', 'elevate your rainy day', or 'in today's fast-paced world'. Do not invent fake voucher codes.",
          prompt:
            "Evaluate this prompt against the 4-part structure. Name every defect you find, or state clearly that there are none.",
          answerKey: [],
          distractors: [
            "It includes Indian-English slang references, which is an intentional brand-voice context parameter, not a prompt defect.",
            "It lists 6 banned words in the constraints block; explicit negative lists are a required best practice from the lesson, not excessive overhead.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-missing-negative-constraints",
          specimenSource: "synthetic-realistic",
          specimen:
            "You are an experienced copywriter for quick-commerce delivery apps. Write a 1,200-word comprehensive blog post about monsoon comfort food recipes and how Swiggy delivers ingredients in 10 minutes. Audience: home cooks and busy parents. Tone: warm and inspiring.",
          prompt:
            "Evaluate this prompt against the 4-part structure and production best practices. Name every defect you find.",
          answerKey: [
            {
              defect:
                "Single-Shot Long-Form Prompting: Attempting to generate a 1,200-word article in a single prompt rather than using the 3-pass method (outline, section drafts, edit).",
              severity: "critical",
              whyItMatters:
                "The lesson states single-shotting long content produces a generic 5-paragraph essay structure where the model optimizes for a plausible average rather than depth.",
              lessonRef: "Step 3: Run Content in Passes, Not One-Shot",
              owner: "you",
            },
            {
              defect:
                "No Banned-Words List or Style Constraints: Missing negative constraints to prune AI tells, repetitive transitional phrases, and cliché openers.",
              severity: "moderate",
              whyItMatters:
                "Without a negative constraint list, long-form AI drafts reliably introduce filler phrases like 'it's worth noting' and 'delve into'.",
              lessonRef: "Step 4: Build a Banned-Words List",
              owner: "you",
            },
          ],
          distractors: [
            "It defines the audience as home cooks and busy parents; defining target audience segments is a standard Context component, not a defect.",
            "It specifies 1,200 words; word count guidance is helpful, the defect is generating the entire article in one shot instead of multiple passes.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Run and compare prompt outputs across flawed vs. structured prompt specimens",
            why: "Free tier is sufficient for testing prompt engineering variations",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log prompt teardown scores across Role, Task, Context, and Constraints criteria",
            why: "Free, structured rubric scoring",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A prompt scorecard evaluating all 3 specimens against the 4-part framework and a fully rewritten prompt for the flawed variants.",
      sampleOutput:
        "Prompt Scorecard, Freshworks Customer Support Campaign\n\n" +
        "Specimen 1: 'Write a welcome email for Freshdesk users.'\n" +
        "Role: No | Task: Vague | Context: No | Constraints: No\n" +
        "Score: 0/4 pillars present — High risk of generic 5-paragraph AI fluff\n\n" +
        "Specimen 2 (Clean Rewrite):\n" +
        "Role: You are a senior lifecycle copywriter at Freshworks.\n" +
        "Task: Write a 120-word welcome email for newly registered IT managers starting a 14-day Freshservice trial.\n" +
        "Context: Audience values fast ticket resolution and SLA compliance. Match tone: direct, helpful, peer-to-peer.\n" +
        "Constraints: Max 120 words. Include 1 primary CTA. Do not use: unlock, seamless, leverage, delve into, or game-changer.\n" +
        "Score: 4/4 pillars present — Production ready",
      successCriteria: [
        "Correctly identifies Specimen 2 as the clean 4-part prompt with zero defects",
        "Names specific missing prompt pillars (Role, Context examples, negative constraints) in Specimens 1 and 3",
        "Flags single-shot 1,200-word generation as an anti-pattern requiring the 3-pass method",
      ],
      portfolioReady: true,
      stretch:
        "Run both Specimen 1 and Specimen 2 in ChatGPT and compare the outputs side-by-side on sentence length, AI buzzwords, and brand voice adherence.",
    },
    {
      id: "ai-content-writing-multi-pass-production-system",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Multi-Pass AI Content Engine: From Brief to Publish-Ready Asset",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Execute the lesson's 3-pass AI writing framework (outline generation, section drafting with voice calibration, and editorial polish with banned-words pruning) to produce a publish-ready 1,200-word educational guide that passes brand voice and fact-checking standards.",
      companyId: "freshworks",
      scenario:
        "You are the senior content marketer at Freshworks producing a comprehensive guide on 'Customer Service SLA Management' for the Freshdesk blog. Rather than single-shotting an essay, you will orchestrate a 3-pass workflow across Claude and ChatGPT.",
      brief:
        "Step through the complete production pipeline: choose the right model profile, construct a 4-part outline prompt, generate section drafts anchored on real case examples, and run a dedicated editorial cleaning pass to eliminate AI-tells.",
      mode: "diagnostic",
      conceptsCovered: [
        "Choose the Right Model",
        "Use the 4-Part Prompt Structure",
        "Run Content in Passes, Not One-Shot",
        "Build a Banned-Words List",
      ],
      steps: [
        {
          stepId: "step-1-model-selection",
          concept: "Choose the Right Model",
          lessonAnchor: "step-1-choose-the-right-model",
          theoryRecap:
            "The lesson details that matching model strengths (Claude for nuanced long-form tone and prose flow, ChatGPT for structured schemas and bulk variants, Gemini for Workspace integration) prevents voice degradation and reduces rewrite cycles.",
          question:
            "For a 1,200-word strategic B2B support guide requiring natural editorial voice and nuanced tone, which primary drafting model and secondary editing tool should you configure?",
          toolName: "Google Sheets",
          where: "Create a model routing table in Google Sheets with columns: Content Type, Primary Model, Editing Model, Justification.",
          procedure: [
            "Review the content deliverable: 1,200-word strategic guide with nuanced B2B advice",
            "Select Claude (Sonnet/Opus) as the primary drafting model for superior natural prose and long-form voice",
            "Select ChatGPT as the structured editing and constraint-checking model",
            "Document the handoff protocol between drafting and editing environments",
          ],
          outputSample:
            "Freshworks Model Routing Matrix\n\n" +
            "Deliverable: 1,200-word B2B Guide ('Customer Support SLA Management')\n" +
            "Drafting Engine: Claude 3.5 Sonnet (excels at nuanced, natural long-form voice without five-paragraph stiffness)\n" +
            "Editing Engine: ChatGPT-4o (excels at rigid rule adherence for banned-words pruning and formatting audits)\n" +
            "Verification Layer: Human Editor (verifies SLA calculation benchmarks and citations)",
          healthy:
            "Routing long-form voice tasks to Claude and rule-based editorial checks to ChatGPT based on distinct model strengths.",
          unhealthy:
            "Defaulting to a single tool for all workflows without considering output prose quality or structural bias.",
          interpret:
            "Matching model specializations cuts human editing time by ensuring first drafts start with strong sentence variety and natural cadence.",
          soWhat: [
            {
              symptom: "Drafts consistently feel rigid and sound like high school five-paragraph essays",
              action: "Switch the drafting engine from default GPT models to Claude and enforce the 3-pass workflow",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pass-1-outline",
          concept: "Use the 4-Part Prompt Structure",
          lessonAnchor: "step-2-use-the-4-part-prompt-structure",
          theoryRecap:
            "Pass 1 generates the architectural outline. Using the 4-part structure (Role, Task, Context, Constraints), you prompt the model to deliver a detailed H2/H3 hierarchy with bulleted talking points before writing prose.",
          question:
            "What structured prompt ensures the model produces an actionable 4-section outline with specific subheadings rather than high-level generic advice?",
          toolName: "Claude",
          where: "Input the 4-part outline prompt into Claude, review generated H2/H3 headings, and refine the structure.",
          procedure: [
            "Draft the Role: 'You are a veteran B2B SaaS customer success strategist writing for Freshworks'",
            "Draft the Task: 'Create a detailed outline with 4 H2 sections and 2-3 H3 subsections per topic for a guide on Customer Service SLAs'",
            "Draft the Context: 'Audience is support team leads managing 10-50 agents. Focus on first-response time vs. resolution time tradeoffs'",
            "Draft the Constraints: 'Return only headings and 2 bulleted subpoints per heading. Do not write the full draft yet'",
            "Inspect the outline and adjust section order before proceeding to drafting",
          ],
          outputSample:
            "Generated Freshworks Outline (Pass 1):\n\n" +
            "H1: The Modern Customer Service SLA Playbook\n" +
            "## 1. Defining SLAs That Protect Revenue Without Burning Out Agents\n" +
            "  - First-response time (FRT) vs Mean Time to Resolution (MTTR)\n" +
            "  - Tiered SLAs based on customer ARR and ticket severity\n" +
            "## 2. Setting Realistic Baseline Metrics (With Industry Benchmarks)\n" +
            "  - Analyzing historical ticket volume spikes in Freshdesk\n" +
            "  - Building SLA buffer thresholds for omnichannel queues\n" +
            "## 3. Automation and Escalation Workflows\n" +
            "  - Automated routing rules before breach warnings trigger\n" +
            "  - Multi-tier escalation trees for VIP accounts\n" +
            "## 4. SLA Breach Post-Mortems: Turning Misses into Process Fixes\n" +
            "  - Root-cause tagging in ticketing analytics\n" +
            "  - Team-wide SLA review meetings that focus on systems over blame",
          healthy:
            "Locking in a granular, approved outline with specific operational topics before generating a single paragraph of prose.",
          unhealthy:
            "Skipping the outline stage and asking the model to write the complete 1,200-word draft in one prompt.",
          interpret:
            "The outline is your editorial blueprint; adjusting hierarchy and angles at the outline stage takes 2 minutes versus 30 minutes of rewriting prose.",
          soWhat: [
            {
              symptom: "AI-generated content drifts off-topic and misses key technical nuances",
              action: "Require outline sign-off in Pass 1 before permitting section drafting",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-pass-2-section-drafts",
          concept: "Run Content in Passes, Not One-Shot",
          lessonAnchor: "step-3-run-content-in-passes-not-one-shot",
          theoryRecap:
            "Pass 2 drafts each section individually. By pasting the approved outline section and 2-3 paragraphs of past high-performing company copy as in-context style examples, the model maintains authentic brand voice and depth.",
          question:
            "How do you feed the outline and context examples into the model section-by-section to generate 300-word deep-dive segments?",
          toolName: "Claude",
          where: "In the same Claude conversation, submit section-by-section drafting prompts with in-context voice samples.",
          procedure: [
            "Take Section 1 from the approved outline",
            "Paste 2 past high-performing Freshdesk blog paragraphs to set tone, sentence length, and pacing",
            "Prompt Claude to write Section 1 (300 words) using direct, practical language with zero introductory fluff",
            "Repeat for Sections 2, 3, and 4, ensuring each section concludes with a clear transition line",
            "Compile the 4 drafted sections into a unified Google Docs draft",
          ],
          outputSample:
            "Freshdesk Guide — Section 1 Draft Sample (Pass 2):\n\n" +
            "When support leaders set service level agreements, they often fall into a predictable trap: treating first-response time as the only metric that matters. An automated auto-responder can hit a 60-second first-response target every time, but it resolves zero customer frustrations.\n\n" +
            "A resilient SLA structure splits commitments into two tiers: Initial Response (acknowledging and triaging the issue) and Next-Action Resolution (providing a meaningful fix or status update). High-performing support teams configure separate targets based on ticket priority:\n\n" +
            "- Critical / P1 (System Down): 15-minute response, 2-hour resolution target\n" +
            "- High / P2 (Major Feature Broken): 1-hour response, 8-hour resolution target\n" +
            "- Standard / P3 (General Inquiries): 4-hour response, 24-hour resolution target",
          healthy:
            "Drafting section-by-section with pasted tone examples, keeping each section focused on concrete tactical frameworks.",
          unhealthy:
            "Generating all sections at once without voice examples, resulting in repetitive introductory summaries in every section.",
          interpret:
            "In-context voice examples constrain the model's token distribution, yielding authentic company tone without requiring fine-tuned models.",
          soWhat: [
            {
              symptom: "AI drafts sound disconnected from the company's brand voice",
              action: "Paste 2-3 paragraphs of published, high-performing brand copy into the prompt context",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-pass-3-editorial-scrub",
          concept: "Build a Banned-Words List",
          lessonAnchor: "step-4-build-a-banned-words-list",
          theoryRecap:
            "Pass 3 executes a strict editorial scrub. The draft is audited against a shared banned-words list, paragraphs are tightened to a 2-3 sentence maximum, and statistical claims are flagged for mandatory human fact-checking.",
          question:
            "What automated cleaning prompt and verification checklist guarantees the draft contains zero AI tells and only verified data before publishing?",
          toolName: "ChatGPT",
          where: "Input the full compiled draft into ChatGPT with the negative constraint cleaning prompt, then log fact-check citations in Google Sheets.",
          procedure: [
            "Feed the full draft into ChatGPT with the editorial cleaning prompt",
            "Instruct the model: 'Review this draft. Remove every instance of: delve, unlock, leverage, seamless, game-changer, robust, in today's fast-paced world, it's worth noting. Split any paragraph longer than 3 sentences'",
            "Highlight all numerical statistics and verify each against primary research in Google Sheets",
            "Finalize the draft in Google Docs for staging in the CMS",
          ],
          outputSample:
            "Editorial Audit Log, Freshworks Content Ops\n\n" +
            "Draft: 'Customer Service SLA Management Guide' (1,240 words)\n" +
            "AI-Tells Scrubbed:\n" +
            "- 'delve into SLA metrics' -> replaced with 'audit your SLA metrics'\n" +
            "- 'seamlessly integrates' -> replaced with 'connects directly'\n" +
            "- 'unlock the true potential of your support team' -> replaced with 'reduce agent burnout'\n" +
            "- 'in today's rapidly evolving SaaS landscape' -> removed entirely\n\n" +
            "Fact-Check Status:\n" +
            "- HDI 2024 Support Benchmarks citation: VERIFIED (Source: HDI Global Report, 2024)\n" +
            "- Zendesk Benchmark Average FRT (12.4h): VERIFIED (Source: Zendesk CX Trends, 2024)\n" +
            "Final Status: Clean, publish-ready in CMS",
          healthy:
            "Running a systematic negative-words audit and verifying 100% of cited numbers before publication.",
          unhealthy:
            "Publishing AI output directly without scrubbing banned phrases or verifying hallucinated statistics.",
          interpret:
            "The third pass is the safety net that transforms raw AI output into authoritative, trust-building enterprise content.",
          soWhat: [
            {
              symptom: "Published articles contain obvious AI clichés that damage executive credibility",
              action: "Enforce Pass 3 automated cleaning as a mandatory pre-publish gate in your CMS workflow",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Claude",
            role: "Generate nuanced outline and section-by-section draft prose with in-context voice examples",
            why: "Free tier provides access to Claude 3.5 Sonnet for long-form drafting",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Run the Pass 3 editorial scrub and banned-words elimination pass",
            why: "Free tier provides fast constraint enforcement and formatting checks",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Maintain model routing matrix and fact-checking verification log",
            why: "Free, collaborative spreadsheet",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Assemble compiled section drafts and finalize CMS-ready asset",
            why: "Free word processor with revision history",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "Enterprise brand voice governance and automated campaign workflow orchestration",
            why: "Scales company-wide style guide enforcement across multi-author teams",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free multi-model workflow (Claude + ChatGPT) achieves full production quality; paid enterprise tools like Jasper automate shared style guides for large writing teams.",
      },
      deliverable:
        "A complete 4-part AI production workbook including model routing table, approved outline, compiled section drafts, and an editorial scrub log with zero banned AI terms.",
      sampleOutput:
        "Klaviyo Content Ops: 3-Pass AI Production Output\n\n" +
        "Asset: 'E-commerce Abandoned Cart Recovery Strategy' (1,180 words)\n\n" +
        "Pass 1 (Outline Prompt via Claude 3.5 Sonnet):\n" +
        "- H2: Anatomy of a High-Converting 3-Part Cart Recovery Sequence\n" +
        "  - H3: Timing the 1-hour transactional reminder\n" +
        "  - H3: Introducing dynamic discount incentives at 24 hours\n" +
        "- H2: Calculating True Recovery ROI vs Margin Erosion\n\n" +
        "Pass 2 (Section Draft with Context Injections):\n" +
        "Drafted 350-word Section 1 citing Klaviyo 2024 benchmark data (3.4% average SMS recovery rate).\n\n" +
        "Pass 3 (Editorial Scrub via ChatGPT):\n" +
        "- Removed: 'In today's rapidly evolving e-commerce landscape' -> Replaced with: 'In 2026, cart abandonment rates average 70.19% across Shopify stores.'\n" +
        "- Removed: 'unlock hidden revenue', 'seamlessly integrate', 'delve into'\n" +
        "- Formatted paragraphs to 2 sentences max.\n" +
        "- Status: 100% verified, zero banned terms.",
      successCriteria: [
        "Executes all 3 passes sequentially without attempting a single-shot draft",
        "Applies negative constraints that eliminate 100% of banned AI terms ('delve', 'unlock', 'seamless', 'game-changer')",
        "Verifies all statistical claims with dated third-party sources in a fact-checking log",
      ],
      portfolioReady: true,
      stretch:
        "Add a 4th pass for automated social repurposing: prompt ChatGPT to extract 5 LinkedIn post hooks and a 6-part email newsletter summary directly from your finalized long-form draft.",
    },
  ],

  "ai-seo": [
    {
      id: "ai-seo-keyword-clustering-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "SERP Overlap vs Semantic Similarity: Teardown of Three Keyword Clusters",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate keyword clusters generated by different AI methodologies, apply the lesson's SERP-overlap validation framework to identify keyword cannibalization, mismatched search intents, and improper pillar-to-supporting page mappings.",
      companyId: "zomato",
      scenario:
        "You're reviewing automated keyword clustering outputs for Zomato's restaurant dining and Gold membership landing pages before handing content briefs to the writing team.",
      brief:
        "Examine three clustering specimens. Detect which clusters group keywords by surface meaning rather than true SERP intent overlap, and flag any instances where informational queries are mixed with transactional landing page targets.",
      mode: "teardown",
      conceptsCovered: [
        "Cluster Keywords by SERP Overlap",
        "Generate Content Briefs Per Cluster",
        "Common Mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-surface-semantic-mismatch",
          specimenSource: "synthetic-realistic",
          specimen:
            "Cluster Name: 'Bangalore Dining & Restaurants'\nTarget Page: Single new landing page (/dining/bangalore-guide)\nKeywords in Cluster:\n1. best restaurants in bangalore (vol: 49,500)\n2. top 10 places to eat in indiranagar (vol: 14,800)\n3. how to register a restaurant on zomato bangalore (vol: 6,600)\n4. fine dining bangalore reviews (vol: 8,100)\n5. restaurant license requirements karnataka (vol: 2,400)",
          prompt:
            "Evaluate this keyword cluster against SERP overlap and search intent principles. Name every defect you find.",
          answerKey: [
            {
              defect:
                "Informational B2B queries ('how to register a restaurant', 'restaurant license requirements') are lumped into a consumer dining listicle cluster.",
              severity: "critical",
              whyItMatters:
                "The lesson warns against clustering on semantic similarity alone while ignoring search intent and SERP overlap; B2B restaurant partners and hungry consumer diners need completely separate pages.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "Overly broad geographic scope: Combining city-wide dining ('best restaurants in bangalore') with micro-neighborhood queries ('places to eat in indiranagar') on a single page causes both to underperform against dedicated neighborhood hubs.",
              severity: "moderate",
              whyItMatters:
                "Google SERPs for neighborhood queries co-rank neighborhood-specific landing pages, not broad city-level guides.",
              lessonRef: "Stage 1: Cluster Keywords by SERP Overlap",
              owner: "you",
            },
          ],
          distractors: [
            "The cluster contains keywords with different search volumes; volume variation within a cluster is normal as long as all keywords share the same SERP intent.",
            "It targets both luxury and casual dining; pricing tier variance alone is not an issue if the overarching SERP intent is a curated dining guide.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-clean-serp-overlap-cluster",
          specimenSource: "synthetic-realistic",
          specimen:
            "Cluster Name: 'Buffet Deals & Dining Out Offers'\nTarget Page: Transactional category page (/dining/buffet-deals)\nKeywords in Cluster (80%+ SERP Overlap):\n1. buffet offers near me (vol: 22,000, intent: Transactional)\n2. best buffet dinner deals (vol: 12,100, intent: Transactional)\n3. 5 star hotel buffet discounts (vol: 8,900, intent: Transactional)\n4. luxury buffet booking offers (vol: 4,400, intent: Transactional)\nSERP Analysis: Top 5 ranking URLs across all 4 queries are identical discount booking pages.",
          prompt:
            "Evaluate this keyword cluster against SERP overlap and search intent principles. Name every defect you find, or state clearly that there are none.",
          answerKey: [],
          distractors: [
            "It groups terms with different modifier words ('luxury', '5 star', 'dinner'); different modifiers are correctly clustered together when SERPs show the same URLs ranking for all of them.",
            "It is a transactional commercial page rather than an informational blog post; matching the intent to a transactional page is the correct decision here.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-keyword-cannibalization-split",
          specimenSource: "synthetic-realistic",
          specimen:
            "Proposed Content Plan:\nArticle A: 'Zomato Gold Membership Discounts & Promo Codes' (/blog/zomato-gold-discounts)\nArticle B: 'How to Get Zomato Gold Offers and Coupons' (/blog/zomato-gold-coupons)\nExisting Page: Main Zomato Gold landing page (/gold)\nStrategy: Create both blog articles to target the two keyword variations separately.",
          prompt:
            "Evaluate this clustering and content plan. Name every defect you find.",
          answerKey: [
            {
              defect:
                "Keyword Cannibalization: Splitting 'gold discounts' and 'gold coupons' into two separate articles creates competing pages targeting the exact same SERP intent.",
              severity: "critical",
              whyItMatters:
                "Two URLs competing for identical intent split ranking equity, confusing Googlebot and preventing either page from securing top-3 rankings.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "Ignoring Existing Authority: Building blog posts for high-intent brand queries rather than consolidating offer details directly onto the authoritative /gold pillar landing page.",
              severity: "moderate",
              whyItMatters:
                "Commercial brand queries rank best on primary product pages with structured data, not secondary blog articles.",
              lessonRef: "Stage 1: Cluster Keywords by SERP Overlap",
              owner: "you",
            },
          ],
          distractors: [
            "The URLs use different slug names; having distinct URL slugs does not fix the underlying keyword cannibalization defect.",
            "Both keywords have commercial intent; having commercial intent is appropriate, the error is splitting identical intent across duplicate pages.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Audit keyword lists against SERP overlap percentages and intent classification",
            why: "Free, collaborative matrix analysis",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Run intent classification prompts and detect cannibalization risks",
            why: "Free tier handles semantic analysis of keyword groupings",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Surfer SEO",
            role: "Automated SERP overlap auditing and content brief generation",
            why: "Extracts live top-10 SERP competitor entities and keyword clusters",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Manual SERP checking via Google Search and Google Sheets is 100% free; Surfer SEO or Keyword Insights automates overlap calculations for thousands of queries at once.",
      },
      deliverable:
        "A keyword cluster diagnosis report identifying cannibalization and intent mismatches across the specimens, with a corrected topic cluster mapping.",
      sampleOutput:
        "Swiggy Instamart Keyword Cluster Diagnosis Report\n\n" +
        "Cluster A Specimen: 'Quick Grocery Delivery'\n" +
        "Keywords: 'instant grocery delivery', 'grocery delivery app', 'history of grocery stores in India'\n" +
        "Defect Found:\n" +
        "- Severity: Critical\n" +
        "- Issue: 'history of grocery stores in India' is purely informational/academic intent, while 'instant grocery delivery' is transactional.\n" +
        "- Action: Remove historical query to an educational blog post; keep transactional terms on the /instamart category page.\n\n" +
        "Cluster B Specimen: 'Late Night Snack Delivery'\n" +
        "Keywords: 'late night food delivery 2am', 'midnight snacks delivery', 'order food late night'\n" +
        "Analysis: Clean cluster (85% SERP co-ranking overlap, shared late-night transactional intent). Map to single landing page.",
      successCriteria: [
        "Correctly identifies Specimen 2 as the clean SERP-overlap cluster",
        "Flags B2B vs. consumer intent mixing in Specimen 1 as a critical defect",
        "Identifies keyword cannibalization in Specimen 3 where duplicate pages target the same intent",
      ],
      portfolioReady: true,
      stretch:
        "Take 20 related search queries in your own niche, search each in Google, record the top 5 ranking URLs in Google Sheets, and calculate the exact mathematical SERP overlap percentage between query pairs.",
    },
    {
      id: "ai-seo-internal-linking-embeddings-audit",
      tier: "mini",
      archetype: "audit",
      title: "Semantic Internal Linking Audit: Finding the Lost Equity in Deep Content",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Audit a 10-URL content cluster using semantic similarity scores to identify orphaned articles, eliminate over-concentration of links to the top 5 'money pages', and construct context-rich anchor text recommendations using LLM prompting.",
      companyId: "squarespace",
      scenario:
        "You are the SEO specialist at Squarespace auditing the internal link graph across 10 website design and e-commerce guide pages to ensure Googlebot and AI Overviews can discover and index deep topical clusters.",
      brief:
        "Analyze a dataset of 10 pages with cosine similarity scores and current inbound internal links. Flag orphaned pages (<2 internal links), calculate link distribution equity, and generate 3 semantic anchor-text recommendations.",
      mode: "diagnostic",
      conceptsCovered: [
        "Map Internal Links with Embeddings",
        "Optimize for AI Overviews and Entities",
        "Common Mistakes",
      ],
      steps: [
        {
          stepId: "step-1-semantic-link-matrix",
          concept: "Map Internal Links with Embeddings",
          lessonAnchor: "stage-3-map-internal-links-with-embeddings",
          theoryRecap:
            "The lesson highlights that embeddings-based internal linking maps semantic relationships using vector similarity. RVshare achieved a 47% traffic lift and 237% more Googlebot crawls by using AI to distribute internal links to semantically relevant supporting pages.",
          question:
            "In this 10-page Squarespace cluster, which high-similarity page pairs (>0.80 cosine similarity) currently have zero internal links connecting them?",
          toolName: "Google Sheets",
          where: "Import the 10-URL similarity matrix sheet, filter pairs by Cosine Similarity >= 0.80 and Existing Links = 0.",
          procedure: [
            "Open the 10-URL content cluster similarity matrix in Google Sheets",
            "Identify pages with fewer than 2 inbound internal links (orphaned/isolated deep content)",
            "Cross-reference cosine similarity scores between high-authority pillar guides and isolated supporting articles",
            "Flag top 3 high-affinity page pairs as priority internal link insertion candidates",
          ],
          outputSample:
            "Squarespace Semantic Link Matrix (10 Pages Sample)\n\n" +
            "Source Pillar: /blog/how-to-build-an-online-store (Authority: High, Inbound Links: 54)\n" +
            "Candidate 1: /blog/ecommerce-shipping-rates-guide (Similarity: 0.89, Current Links: 1) -> PRIORITY LINK GAP\n" +
            "Candidate 2: /blog/collecting-sales-tax-online (Similarity: 0.84, Current Links: 0) -> PRIORITY LINK GAP\n" +
            "Candidate 3: /blog/photography-portfolio-tips (Similarity: 0.32, Current Links: 12) -> IRRELEVANT (Prune Link)",
          healthy:
            "Using vector similarity thresholds (0.80+) to connect relevant supporting articles to authoritative pillar pages.",
          unhealthy:
            "Linking every new article exclusively to the homepage or the same single sales landing page regardless of topical relevance.",
          interpret:
            "A high cosine score between an authoritative pillar and an orphaned guide represents immediate, low-effort ranking equity transfer.",
          soWhat: [
            {
              symptom: "Deep educational articles receive near-zero Googlebot crawl frequency and zero search traffic",
              action: "Add 2-3 contextual links from high-similarity pillar pages with >=0.80 cosine scores",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ai-anchor-generation",
          concept: "Optimize for AI Overviews and Entities",
          lessonAnchor: "stage-4-optimize-for-ai-overviews-and-entities",
          theoryRecap:
            "Stage 4 explains that AI search engines and AI Overviews evaluate entity relationships and context-rich anchor text. Descriptive, semantic anchor text clarifies topic authority far better than generic 'click here' or exact-match keyword stuffing.",
          question:
            "Given the source paragraph from the pillar guide and the target shipping guide URL, what prompt generates natural, entity-rich anchor text that fits surrounding prose?",
          toolName: "ChatGPT",
          where: "Prompt ChatGPT with both the source paragraph and destination article premise to generate 3 contextual anchor text options.",
          procedure: [
            "Extract the target paragraph from the source pillar page (/blog/how-to-build-an-online-store)",
            "Prompt ChatGPT: 'You are an SEO editor. Here is a source paragraph [paste] and destination article [paste]. Suggest 3 natural, intent-rich anchor text phrases (3-5 words) that connect the source concept to the destination without using generic click-here text.'",
            "Evaluate suggestions for grammatical flow, entity clarity, and natural reading rhythm",
            "Select the top anchor variant and insert the hyperlink into the source draft",
          ],
          outputSample:
            "AI Anchor Generation Output (ChatGPT-4o):\n\n" +
            "Source Paragraph: '...once your product catalog is live, configuring carrier calculation rules ensures customers are not surprised by unexpected fees during checkout.'\n" +
            "Destination: /blog/ecommerce-shipping-rates-guide\n\n" +
            "Generated Options:\n" +
            "Option 1 (Optimal): 'configuring real-time carrier shipping rates'\n" +
            "Option 2 (Acceptable): 'calculating e-commerce shipping rules'\n" +
            "Option 3 (Generic / Reject): 'click here for shipping guide'\n\n" +
            "Selected: Option 1 — seamless contextual insertion with strong entity signaling ('carrier shipping rates')",
          healthy:
            "Inserting descriptive 3-5 word entity phrases that describe the destination page's specific topic within sentence flow.",
          unhealthy:
            "Using generic anchors ('read more', 'click here') or repetitive exact-match keyword stuffing across all links.",
          interpret:
            "Intent-rich anchor text helps both Googlebot and LLM answer engines understand the precise topical relationship between connected URLs.",
          soWhat: [
            {
              symptom: "Site has hundreds of internal links but AI Overviews rarely cite or reference deep pages",
              action: "Audit anchor text across top 20 pages and upgrade generic anchors to entity-specific descriptive phrases",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-link-equity-rebalance",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 3 warns against internal-linking every new article to the same 5 'money pages'. Over-concentrating links on a handful of top URLs starves long-tail content of link equity and signals a flat, artificial architecture to search engines.",
          question:
            "How does redistributing 15 internal links across 5 under-linked supporting articles improve the cluster's overall crawl depth and equity balance?",
          toolName: "Google Sheets",
          where: "In Google Sheets, calculate the link distribution ratio across the 10-page cluster before and after rebalancing.",
          procedure: [
            "Calculate existing link concentration: sum of links to top 2 pages vs. bottom 8 pages",
            "Identify 5 over-linked anchor placements where the linked phrase is only tangentially related to the money page",
            "Re-route those 5 links to high-similarity supporting articles that currently have <= 1 inbound link",
            "Recalculate cluster link distribution to confirm no page has 0 internal links",
          ],
          outputSample:
            "Link Equity Rebalancing Summary\n\n" +
            "Before Rebalancing:\n" +
            "- Top 2 Pages: 78 inbound links (82% of all internal cluster links)\n" +
            "- Bottom 8 Pages: 17 inbound links (18% of total, 3 pages completely orphaned)\n\n" +
            "After Rebalancing (15 links re-routed via semantic embeddings match):\n" +
            "- Top 2 Pages: 63 inbound links (66% of total)\n" +
            "- Bottom 8 Pages: 32 inbound links (34% of total, 0 orphaned pages)\n" +
            "Result: Every supporting guide now has at least 3 contextual inbound links from relevant cluster siblings.",
          healthy:
            "Distributing internal links across the entire topic cluster so long-tail pages receive crawl priority and topical equity.",
          unhealthy:
            "Funneling every single internal link into the main sales landing page, leaving 80% of cluster articles without inbound paths.",
          interpret:
            "Topical authority requires a cohesive web of interconnected cluster nodes, not a one-way funnel where supporting pages never link to each other.",
          soWhat: [
            {
              symptom: "A website has 100 blog posts but 80% of organic traffic goes to just 3 URLs",
              action: "Rebalance internal links from top pages into deep supporting clusters using semantic similarity matching",
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
            role: "Model the 10-URL semantic similarity matrix and calculate link equity distribution",
            why: "Free, built-in formulas for link distribution analysis",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Generate context-rich, entity-aligned anchor text variations for mapped page pairs",
            why: "Free tier provides fast natural-language anchor generation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Clearscope",
            role: "Content entity optimization and keyword semantic relationship mapping",
            why: "Identifies missing entities across connected cluster articles",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The manual matrix and ChatGPT prompt workflow provides a complete free path; Clearscope or Quattr provides automated enterprise entity and link graph monitoring.",
      },
      deliverable:
        "A semantic internal linking matrix for 10 pages with cosine similarity scores, orphaned page remediations, and 3 AI-generated anchor text insertions.",
      sampleOutput:
        "Mailchimp Internal Linking Audit: Email Automation Cluster\n\n" +
        "Cluster Analysis: 10 URLs in 'Lifecycle Marketing' topic\n" +
        "Orphaned Pages Detected: 2 (/resources/abandoned-browse-triggers, /resources/sms-opt-in-rules)\n\n" +
        "Remediation Link 1:\n" +
        "- Source URL: /resources/email-marketing-automation-guide (High Authority Pillar)\n" +
        "- Source Text: '...re-engaging visitors who view products without adding them to a cart requires specialized trigger workflows.'\n" +
        "- Target URL: /resources/abandoned-browse-triggers (Cosine Similarity: 0.88)\n" +
        "- Recommended Anchor: 'configuring browse abandonment automation triggers'\n\n" +
        "Remediation Link 2:\n" +
        "- Source URL: /resources/sms-marketing-strategy (Cosine Similarity: 0.84)\n" +
        "- Target URL: /resources/sms-opt-in-rules\n" +
        "- Recommended Anchor: 'TCPA and GDPR compliance rules for SMS capture'\n\n" +
        "Equity Balance: Orphaned URLs reduced from 2 to 0. All 10 cluster pages now hold >=3 inbound contextual links.",
      successCriteria: [
        "Identifies orphaned articles (<2 inbound links) using cosine similarity thresholds",
        "Generates entity-rich contextual anchor text rather than generic click-here phrasing",
        "Rebalances link equity across deep cluster content without starving pillar pages",
      ],
      portfolioReady: true,
      stretch:
        "Export your site's full internal link report from Google Search Console, plot inbound link counts per URL in Google Sheets, and calculate the Gini coefficient or top-5 concentration percentage for your site's link graph.",
    },
  ],

  "ai-email-marketing": [
    {
      id: "ai-email-marketing-copy-defect-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "AI Email Generation Teardown: Catching Hallucinated Urgency, Broken Merge Tokens, and Spam Triggers",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three candidate AI-generated email specimens (subject lines, preview headers, dynamic body blocks), apply the lesson's quality checklist to catch artificial urgency triggers, ungrounded promotional hallucinations, broken merge syntax, and deliverability red flags before sending to 50,000+ subscribers.",
      companyId: "mailchimp",
      scenario:
        "You're reviewing automated campaign drafts generated by Mailchimp's AI Content Assistant for an upcoming seasonal flash sale. You need to identify which variants violate deliverability and relevance standards before the emails are queued.",
      brief:
        "Read all three email specimens. For each specimen, determine whether it meets production standards or contains critical deliverability risks, hallucinated discount codes, or broken personalization syntax.",
      mode: "teardown",
      conceptsCovered: [
        "Subject line generation",
        "Dynamic content personalization",
        "Deliverability hygiene",
        "Common email marketing mistakes",
      ],
      teardownItems: [
        {
          itemId: "item-1-spammy-urgency-subject",
          specimenSource: "synthetic-realistic",
          specimen:
            "SUBJECT: 🔥🔥 ACT NOW!!! FINAL HOURS TO CLAIM 80% OFF EVERYTHING (DON'T MISS OUT) 🔥🔥\nPREHEADER: Open immediately to reveal your exclusive secret VIP discount code before midnight!\n\nBODY COPY:\nDear Valued Customer,\n\nWe noticed you haven't shopped in a while! For the next 3 hours ONLY, take advantage of our biggest blowout sale of the decade. Click the link below right now to unlock your mystery markdown:\n\n[CLAIM 80% DISCOUNT NOW]\n\nP.S. This email was automatically generated for you based on your browsing history.",
          prompt:
            "Would you approve this AI-generated promotional email draft for broadcast? Identify all deliverability defects, spam triggers, and tone violations.",
          answerKey: [
            {
              defect:
                "Excessive capitalization, multiple emoji, repeated exclamation marks ('🔥🔥 ACT NOW!!!'), and deceptive urgency ('biggest blowout sale of the decade') severely trigger inbox spam filters.",
              severity: "critical",
              whyItMatters:
                "Aggressive spam trigger words and excessive punctuation in subject lines degrade domain reputation and cause mailbox providers (Gmail, Yahoo) to route campaigns directly to the spam folder.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "Hallucinated discount depth ('80% OFF EVERYTHING') conflicts with standard merchant margins and creates brand-trust friction when ungrounded in catalog inventory rules.",
              severity: "critical",
              whyItMatters:
                "Unconstrained AI copy generation often invents hyperbole or unapproved discount figures if the generation prompt is not strictly bounded by real promotion parameters.",
              lessonRef: "Stage 3: Content Generation and Personalization",
              owner: "you",
            },
            {
              defect:
                "Meta-disclosure in P.S. ('This email was automatically generated...') exposes backend pipeline mechanics unnecessarily, reducing message perceived value.",
              severity: "cosmetic",
              whyItMatters:
                "Personalization should feel natural and concierge-like, not robotic or overtly automated.",
              lessonRef: "What It Actually Is",
              owner: "you",
            },
          ],
          distractors: [
            "It includes an urgent call-to-action button, CTAs are standard; the defect is the misleading copy and spam signals surrounding it.",
            "It addresses the recipient as 'Dear Valued Customer', generic salutations are suboptimal but not a critical deliverability defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-clean-behavioral-reorder",
          specimenSource: "synthetic-realistic",
          specimen:
            "SUBJECT: Time for a refill? Your Matte Clay is running low\nPREHEADER: Reorder in two clicks and get free standard delivery on orders over $35.\n\nBODY COPY:\nHi Alex,\n\nBased on your order from March 14, you're likely nearing the bottom of your Matte Styling Clay jar.\n\nWe reserved a fresh jar for your routine so you don't run out mid-week:\n\n• Product: Matte Styling Clay (3.4 oz)\n• Expected refill date: April 18\n• Price: $18.00 (Subscriber price: $15.30)\n\n[Reorder Matte Clay Now]\n\nPrefer to explore something new? Reply directly to this email or check out our light-hold cream paste.",
          prompt:
            "Evaluate this automated replenishment email draft. Identify any defects, or state clearly if it meets production standards.",
          answerKey: [],
          distractors: [
            "It mentions the specific purchase date (March 14), behavioral context that clarifies why the email was sent increases relevance and trust.",
            "It includes alternative product suggestions, providing a secondary low-friction option prevents churn if the customer's needs changed.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-broken-token-dynamic-mismatch",
          specimenSource: "synthetic-realistic",
          specimen:
            "SUBJECT: %FIRSTNAME|default:Friend%, your curated picks are waiting\nPREHEADER: Items handpicked for your %CITY% studio.\n\nBODY COPY:\nHello %FIRSTNAME|default:Friend%,\n\nWe saw you looking at our Leather Briefcase collection yesterday in our %CITY% catalog.\n\nHere are items frequently bought together with what you viewed:\n• Item 1: *|RECOMMENDED_PRODUCT_TITLE_1|*\n• Price: *|RECOMMENDED_PRODUCT_PRICE_1|*\n• Item 2: *|RECOMMENDED_PRODUCT_TITLE_2|*\n• Price: *|RECOMMENDED_PRODUCT_PRICE_2|*\n\nUse promo code AI_SAVINGS_2026 at checkout for 15% off.\n\n[Shop Your Curated Collection]",
          prompt:
            "Identify all syntax errors, unhandled merge tags, and template logic defects in this AI-generated personalization block.",
          answerKey: [
            {
              defect:
                "Unrendered merge tag syntax (*|RECOMMENDED_PRODUCT_TITLE_1|*, *|RECOMMENDED_PRODUCT_PRICE_1|*) indicates broken dynamic block integration with the product catalog feed.",
              severity: "critical",
              whyItMatters:
                "Sending raw variable tags directly to subscribers looks unprofessional, breaks layout readability, and produces immediate customer distrust.",
              lessonRef: "Stage 3: Content Generation and Personalization",
              owner: "either",
            },
            {
              defect:
                "Malformed ESP syntax in subject line and preheader (%FIRSTNAME% vs standard ESP delimiter) risks printing literal percent tokens if the template engine uses Jinja or liquid markup.",
              severity: "critical",
              whyItMatters:
                "Inconsistent merge token syntax across ESP platforms fails silently and displays broken placeholders in the subscriber's inbox view.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "Hardcoded generic promo code ('AI_SAVINGS_2026') is disconnected from dynamic user cart validation rules.",
              severity: "moderate",
              whyItMatters:
                "Static coupon codes leak to coupon scrapers, whereas personalized dynamic coupons prevent margin erosion.",
              lessonRef: "Stage 1: Subscriber Data Collection",
              owner: "you",
            },
          ],
          distractors: [
            "It suggests items frequently bought together, collaborative filtering recommendations are a proven ecommerce best practice.",
            "It offers a 15% discount, the discount itself is standard; the defect is the unvalidated static coupon code and broken merge tokens.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Mailchimp",
            role: "Email campaign editor and AI assistant preview",
            why: "Free tier access for testing subject line variants and reviewing template merge tags",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Defect scoring rubric and QA checklist",
            why: "Track and score copy and deliverability defects against quality rubrics",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Enterprise ecommerce ESP",
            why: "Advanced predictive segment modeling, dynamic product recommendation blocks, and smart send time",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Klaviyo enables native predictive CLV and churn risk segmentation with dynamic product feeds.",
      },
      deliverable:
        "A completed 3-specimen email defect audit matrix classifying critical, moderate, and cosmetic flaws with root-cause explanations.",
      sampleOutput:
        "Specimen Audit Summary for Nykaa E-Commerce Customer Lifecycle Campaign:\n\n1. Specimen 1 (Flash Sale Blast): Rejected. Contains 2 Critical defects (all-caps spam keywords 'ACT NOW', ungrounded 80% discount claim) and 1 Cosmetic defect (unnecessary AI meta-disclosure).\n2. Specimen 2 (Automated Replenishment Flow): Approved. Clean personalized replenishment trigger with zero defects, accurate dates, and relevant cross-sell options.\n3. Specimen 3 (Dynamic Catalog Recommendations): Rejected. 2 Critical defects (unrendered dynamic merge tags *|RECOMMENDED_PRODUCT_TITLE_1|*, broken delimiter formatting) and 1 Moderate defect (hardcoded public coupon).",
      successCriteria: [
        "Identify all deliverability red flags (spam words, excessive punctuation) in specimen 1",
        "Confirm specimen 2 passes all quality standards without false-positive defect claims",
        "Catch the unhandled fallback token and unrendered merge tags in specimen 3",
        "Classify defect severity correctly between critical deliverability threats and moderate copy edits",
      ],
      portfolioReady: false,
      skills: ["Email QA", "Deliverability", "AI Copywriting Audit"],
      prerequisites: ["Basic understanding of email subject lines and ESP merge tags"],
      keyQuestion: "How do you systematically detect deliverability and copy hallucinations in AI-generated email campaigns before they hit the subscriber inbox?",
      keyTakeaway: "AI email tools drastically accelerate drafting, but unverified outputs frequently introduce spam-trigger urgency, broken variable syntax, and hallucinated promotional depth that degrade sender reputation.",
    },
    {
      id: "ai-email-marketing-sto-churn-audit",
      tier: "core",
      archetype: "audit",
      title: "Ecommerce Lifecycle AI Audit: Send-Time Optimization & Churn-Risk Calibration",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Audit a 4-part ecommerce email lifecycle export covering 60,000 subscribers, evaluating Send-Time Optimization (STO) hourly open distributions, predictive churn-risk scoring tiers, dynamic product recommendation conversion rates, and list fatigue thresholds to build an AI-driven optimization plan.",
      companyId: "klaviyo",
      scenario:
        "You are the growth marketing lead at Klaviyo auditing a multi-brand D2C apparel merchant's email account. The merchant has 60,000 subscribers but has suffered a 14% open rate plateau and rising unsubscribes from batch-and-blast sending.",
      brief:
        "Walk through the four diagnostic steps: inspect STO hourly open variance, audit the predictive churn-risk segment boundaries, analyze dynamic vs static recommendation revenue per recipient, and calculate list fatigue indicators.",
      mode: "diagnostic",
      conceptsCovered: [
        "Send-time optimization",
        "Predictive segmentation",
        "Dynamic content personalization",
        "The 5-step implementation playbook",
      ],
      steps: [
        {
          stepId: "step-1-sto-hourly-distribution",
          concept: "Send-time optimization",
          lessonAnchor: "stage-4-send-time-optimization-and-feedback-loop",
          theoryRecap:
            "Send-Time Optimization (STO) algorithms replace single fixed-time broadcasts by analyzing each recipient's historical open windows over 90+ days and delivering messages when open probability peaks.",
          question:
            "Across 60,000 subscribers, how much does open rate vary across the 24-hour delivery window, and what percentage of your list opens outside the traditional 10:00 AM blast window?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'STO Hourly Open Distribution'",
          procedure: [
            "Group subscriber opens into 24 one-hour time buckets based on recipient local time.",
            "Calculate open rate per hourly window: (Total Opens in Window / Total Delivered in Window) * 100.",
            "Compare the peak 3-hour cluster (e.g., 7:00 PM - 10:00 PM local) against the legacy 10:00 AM batch send baseline.",
            "Identify the percentage of audience whose predicted optimal open time is more than 4 hours away from the 10:00 AM baseline.",
          ],
          outputSample:
            "| Send Window (Local) | Delivered | Opens | Open Rate | Deviation from 10 AM |\n|---|---|---|---|---|\n| 06:00 - 09:00 (Morning) | 12,400 | 2,108 | 17.0% | +3.0% |\n| 09:00 - 12:00 (Legacy Batch) | 15,200 | 2,128 | 14.0% | Baseline (0.0%) |\n| 12:00 - 15:00 (Midday) | 8,600 | 1,032 | 12.0% | -2.0% |\n| 15:00 - 18:00 (Late Afternoon)| 9,800 | 1,568 | 16.0% | +2.0% |\n| 18:00 - 21:00 (Evening Peak) | 14,000 | 3,920 | 28.0% | +14.0% |\n| Total / Blended Average | 60,000 | 10,756 | 17.9% | +3.9% lift via STO |",
          healthy:
            "STO delivers a 20%+ relative lift in overall open rate, with clear engagement clustering reflecting diverse subscriber lifestyles (e.g. evening mobile browsing).",
          unhealthy:
            "All emails sent at a flat 10:00 AM batch with low open rates (<15%) and high immediate archive/deletion rates.",
          interpret:
            "Over 38% of this list opens primarily in the evening (6:00 PM - 9:00 PM), meaning morning batch blasts were buried beneath dozens of competitor emails by the time recipients checked their inboxes.",
          soWhat: [
            {
              symptom: "Flat open rate below 15% on general newsletter broadcasts",
              action: "Enable rolling 24-hour STO delivery window in Klaviyo or Mailchimp",
              effort: "5 min",
            },
            {
              symptom: "High unsubscribe rate on morning broadcasts",
              action: "Suppress early morning delivery for subscribers whose historical engagement occurs after 6 PM",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-predictive-churn-risk",
          concept: "Predictive segmentation",
          lessonAnchor: "stage-2-model-training-and-segmentation",
          theoryRecap:
            "Predictive ML models analyze purchase frequency, average order intervals, and email engagement decay to categorize subscribers into High, Medium, and Low Churn Risk tiers before they permanently lapse.",
          question:
            "What percentage of subscribers fall into the High Churn Risk tier, and what is the expected revenue loss if no automated re-engagement flow is triggered?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'Predictive Churn Scoring'",
          procedure: [
            "Extract customer recency, purchase count, and expected date of next order (EDNO).",
            "Segment contacts into 3 tiers: Low Risk (Churn Score < 0.3), Medium Risk (0.3 - 0.7), and High Risk (> 0.7).",
            "Calculate average historical CLV and lapse velocity for the High Risk cohort (14,200 contacts).",
            "Model potential revenue recovery assuming a 4% conversion rate on a targeted VIP win-back flow.",
          ],
          outputSample:
            "| Churn Risk Tier | Subscriber Count | Avg Historical Spend | Predicted Churn % | At-Risk Revenue | Win-back Recovery (4% Conv) |\n|---|---|---|---|---|---|\n| Low Risk (<0.3) | 28,500 | $145.00 | 12% | $495,900 | N/A (Retained) |\n| Medium Risk (0.3-0.7) | 17,300 | $92.00 | 48% | $764,000 | $63,664 |\n| High Risk (>0.7) | 14,200 | $78.00 | 85% | $941,460 | $44,304 |\n| Total At-Risk Opportunity | 31,500 | -- | -- | $1,705,460 | $107,968 |",
          healthy:
            "Automated winback sequences trigger precisely when a subscriber enters the Medium/High risk window (e.g. 15 days past their personal EDNO), recovering 3-6% of lapsing customers.",
          unhealthy:
            "Treating churned customers as a single 'Inactive 90 days' bucket, blasting them with generic discounts after intent has completely died.",
          interpret:
            "14,200 subscribers are in high churn danger with over $940,000 in past revenue at stake. Triggering personalized winbacks before day 90 can recover over $44,000 in immediate sales.",
          soWhat: [
            {
              symptom: "Lapsed customer winback conversion under 1%",
              action: "Switch winback trigger from static '90 days since purchase' to dynamic 'Expected Date of Next Order + 14 days'",
              effort: "30 min",
            },
            {
              symptom: "High-value customers churning unnoticed",
              action: "Create automated Slack alert and concierge email sequence for VIPs with CLV > $300 who cross into High Churn Risk",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-dynamic-recommendation-revenue",
          concept: "Dynamic content personalization",
          lessonAnchor: "stage-3-content-generation-and-personalization",
          theoryRecap:
            "AI dynamic content blocks replace static product displays by generating personalized product grids tailored to individual browse categories, past purchase affinities, and local inventory availability.",
          question:
            "What is the revenue-per-recipient (RPR) difference between static hero promotions and AI-driven dynamic recommendation grids across promotional campaigns?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'Dynamic vs Static RPR Comparison'",
          procedure: [
            "Pull campaign split-test data comparing Version A (Static Featured Products) vs Version B (AI Dynamic Recommended For You).",
            "Calculate Click-Through Rate (CTR), Conversion Rate (CVR), Total Revenue, and Revenue Per Recipient (RPR = Total Revenue / Delivered).",
            "Calculate incremental revenue generated per 10,000 recipients using AI dynamic blocks.",
          ],
          outputSample:
            "| Campaign Variant | Delivered | Clicks | CTR | Orders | CVR | Total Revenue | Revenue Per Recipient (RPR) |\n|---|---|---|---|---|---|---|---|\n| Variant A (Static Hero Grid) | 30,000 | 1,050 | 3.50% | 74 | 7.05% | $5,180 | $0.173 |\n| Variant B (AI Dynamic Grid) | 30,000 | 2,160 | 7.20% | 185 | 8.56% | $14,245 | $0.475 |\n| Incremental Lift | -- | +1,110 | +105.7% | +111 | +21.4% | +$9,065 | +$0.302 (+174.6%) |",
          healthy:
            "AI dynamic recommendation blocks generate at least 25-50% higher RPR than static promotional grids by presenting items aligned with subscriber browse history.",
          unhealthy:
            "Every recipient receives identical static product banners regardless of past purchase gender, category preference, or brand history.",
          interpret:
            "Dynamic personalization more than doubled click-through rates (3.5% to 7.2%) and yielded a 174.6% increase in Revenue Per Recipient ($0.173 to $0.475), creating $9,065 in extra revenue from a single 30,000-subscriber split send.",
          soWhat: [
            {
              symptom: "Click-through rate on promotional emails stagnant under 3%",
              action: "Replace static bottom product grid with AI collaborative-filtering recommendation block",
              effort: "30 min",
            },
            {
              symptom: "High click rate on product recommendations but zero checkout conversion",
              action: "Filter dynamic recommendations to exclude out-of-stock sizes and discontinued colorways",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-frequency-fatigue-hygiene",
          concept: "The 5-step implementation playbook",
          lessonAnchor: "the-5-step-implementation-playbook",
          theoryRecap:
            "The lesson's implementation playbook warns against using AI copy speed to inflate send volume. Frequency without relevance drives list fatigue, spam complaints, and rapid deliverability degradation.",
          question:
            "How does weekly send frequency correlate with unsubscribe rates and spam complaint rates across low vs high engagement subscriber tiers?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'List Fatigue & Send Cadence Matrix'",
          procedure: [
            "Analyze engagement metrics across 3 weekly send frequency cohorts: 2 sends/week, 4 sends/week, and 6 sends/week.",
            "Segment results by recipient engagement tier: Active (Opened in last 30d) vs Passive (No open in 60d+).",
            "Calculate the unsubscribe rate, spam complaint rate, and net list growth per frequency tier.",
            "Establish smart frequency capping rules based on subscriber engagement scores.",
          ],
          outputSample:
            "| Weekly Frequency | Segment | Total Sends | Unsubscribe Rate | Spam Complaint Rate | Revenue / Month | Net List Growth |\n|---|---|---|---|---|---|---|\n| 2 sends/week | Passive (60d+) | 36,000 | 0.22% | 0.01% | $3,800 | +1.8% |\n| 4 sends/week | Passive (60d+) | 72,000 | 0.85% | 0.08% | $4,400 | -0.4% |\n| 6 sends/week | Passive (60d+) | 108,000 | 2.10% | 0.24% (Dangerous)| $4,600 | -2.6% |\n| 4 sends/week | Active (30d) | 96,000 | 0.15% | 0.01% | $28,400 | +3.2% |",
          healthy:
            "High frequency (3-5x/week) reserved strictly for highly engaged active subscribers, with passive subscribers capped at 1-2 relevant sends/week to keep spam complaints under 0.05%.",
          unhealthy:
            "Blasting the entire database 5-6 times per week, driving passive subscriber spam complaint rates above the 0.10% Gmail/Yahoo blacklist threshold.",
          interpret:
            "Increasing send frequency on passive subscribers from 2 to 6 sends/week generated only $800 in extra monthly revenue while increasing spam complaints 24x to 0.24% (exceeding Gmail's strict 0.10% penalty threshold).",
          soWhat: [
            {
              symptom: "Spam complaint rate rising above 0.08%",
              action: "Immediately cap send frequency to 1 email every 14 days for contacts who have not opened in 60+ days",
              effort: "30 min",
            },
            {
              symptom: "List shrinking due to high unsubscribes on frequent promotions",
              action: "Implement preference center allowing subscribers to choose weekly digest vs daily deal frequency",
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
            role: "Spreadsheet calculation and analysis workbook",
            why: "Run hourly open variance, predictive churn modeling, and revenue-per-recipient calculations",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Mailchimp",
            role: "Email marketing platform baseline",
            why: "Review standard campaign open rate benchmarks and list segmentation features",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Ecommerce AI and predictive analytics engine",
            why: "Native Smart Send Time testing, customer lifetime value forecasting, and dynamic product recommendations",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Klaviyo provides turnkey ML predictive analytics for churn scoring and automated Smart Send Time scheduling.",
      },
      deliverable:
        "A 4-part AI Email Lifecycle Audit Report containing STO delivery schedules, churn-risk cohort boundaries, dynamic RPR benchmarks, and frequency capping rules.",
      sampleOutput:
        "AI Email Lifecycle Audit for Zomato Restaurant Partner Loyalty Database:\n\n1. STO Analysis: Shifted delivery from 10:00 AM batch to rolling STO. Discovered 42% of restaurant managers engage between 3:00 PM and 5:00 PM (post-lunch lull), driving overall open rates from 16.2% to 23.8%.\n2. Predictive Churn Scoring: Isolated 8,400 partner accounts in High Churn Risk (EDNO + 18 days). Modeled automated win-back flow projecting 5.2% re-engagement and $38,000 in saved recurring order volume.\n3. Dynamic Content Optimization: Replaced static promotional banners with personalized 'Top trending menu items in your neighborhood' blocks, boosting Revenue Per Recipient from $0.22 to $0.58 (+163%).\n4. Frequency Capping: Capped passive partners to 1 weekly digest, reducing monthly spam complaints from 0.14% to 0.02% while preserving list health.",
      successCriteria: [
        "Calculate the hourly open rate spread to identify the peak subscriber engagement window",
        "Segment the subscriber list into high-risk, medium-risk, and healthy cohorts based on purchase cadence",
        "Compare revenue-per-recipient (RPR) between AI dynamic recommendation blocks and static promotions",
        "Formulate clear frequency capping rules to prevent list fatigue among unengaged subscribers",
      ],
      portfolioReady: true,
      skills: ["Send-Time Optimization", "Predictive Churn Scoring", "Email Analytics", "Lifecycle Marketing"],
      prerequisites: ["Familiarity with email marketing metrics (OR, CTR, RPR, unsubscribes) and spreadsheet modeling"],
      keyQuestion: "How can ecommerce brands use AI send-time optimization and predictive churn scoring to maximize revenue per recipient while protecting inbox deliverability?",
      keyTakeaway: "AI transforms email marketing from guesswork into a precision discipline: individualizing send times captures high-intent open windows, predictive churn scoring rescues revenue before subscribers lapse, and dynamic product blocks double RPR without list fatigue.",
    },
  ],

  "ai-analytics": [
    {
      id: "ai-analytics-semantic-layer-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Semantic Layer Audit: Grounding Natural Language Queries in Real Metric Schemas",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit a marketing data dictionary and semantic schema mapping across GA4 web sessions, CRM pipeline values, and ad platform spend tables to ensure natural language query (NLQ) tools produce mathematically accurate queries without hallucinated column joins or ambiguous metric definitions.",
      companyId: "snowflake",
      scenario:
        "You are the analytics lead setting up an AI query interface over Snowflake data tables for a multi-channel growth marketing team. Before enabling self-serve NLQ access for non-technical marketers, you must audit the semantic layer to eliminate ambiguous metric definitions.",
      brief:
        "Evaluate 3 critical metric mappings (MQL vs Raw Contact, Blended CAC vs Paid CAC, Booked MRR vs Recognized Revenue) in the semantic dictionary, establish explicit SQL join rules, and document validation queries.",
      mode: "diagnostic",
      conceptsCovered: [
        "Defining a semantic layer",
        "Mapping questions to data schema",
        "Sanity-checking AI calculations",
      ],
      steps: [
        {
          stepId: "step-1-lead-metric-disambiguation",
          concept: "Defining a semantic layer",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Stage 2 of the AI analytics playbook emphasizes that without a governed semantic layer, NLQ engines guess metric meanings—often conflating top-of-funnel form fills with verified Marketing Qualified Leads (MQLs).",
          question:
            "When a user asks 'How many leads did we generate in Q1?', how does the semantic layer ensure the AI queries `crm_contacts.is_mql = true` rather than raw form submissions in `ga4_events`?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'Semantic Layer Data Dictionary'",
          procedure: [
            "Audit the field synonyms in the semantic dictionary for 'Lead', 'MQL', 'Prospect', and 'Sign-up'.",
            "Define explicit entity mappings: 'Lead' -> `crm_contacts` table where `status NOT IN ('junk', 'spam')`.",
            "Define 'Marketing Qualified Lead' (MQL) -> `crm_contacts` table where `is_mql = true AND mql_date >= '2026-01-01'`.",
            "Specify the default fallback behavior when a prompt uses ambiguous terminology.",
          ],
          outputSample:
            "| Business Term | User Prompt Synonym | Underlying Table | SQL Filter Condition | Common AI Trap |\n|---|---|---|---|---|\n| Raw Contact | 'Sign-ups', 'Submissions' | `raw_form_submissions` | `created_at IS NOT NULL` | Overcounts spam bot fills |\n| Valid Lead | 'Leads', 'New contacts' | `crm_contacts` | `is_valid_email = true AND status != 'spam'` | Standard pipeline count |\n| Marketing Qualified Lead | 'MQLs', 'Qualified leads' | `crm_contacts` | `is_mql = true AND mql_score >= 50` | Conflating raw leads with MQLs (inflates ROI 3.4x) |",
          healthy:
            "Every business metric has an unambiguous entity definition with explicit SQL filtering criteria documented in the semantic model.",
          unhealthy:
            "The AI guesses which table to query, counting every newsletter sign-up as a sales-qualified lead and generating inflated conversion reports.",
          interpret:
            "A query for 'Leads' that pulls from `raw_form_submissions` reports 14,200 leads, whereas filtering for verified MQLs in `crm_contacts` yields 3,850 leads. Without semantic governance, the AI over-reports qualified acquisition by 268%.",
          soWhat: [
            {
              symptom: "AI analytics tool reporting 3x more leads than sales CRM shows",
              action: "Add strict synonym mappings in the semantic layer pointing 'Leads' to `crm_contacts.is_mql = true`",
              effort: "30 min",
            },
            {
              symptom: "Marketers confused by conflicting lead counts between dashboards",
              action: "Configure the NLQ tool to prompt for clarification: 'Did you mean Raw Contacts (14.2k) or Qualified MQLs (3.8k)?'",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-revenue-attribution-join-rules",
          concept: "Mapping questions to data schema",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "LLMs generate database queries by joining tables based on naming conventions. If multiple revenue columns exist across billing, CRM, and ad platforms, unguided models create incorrect table joins that distort ROI calculations.",
          question:
            "How do you configure table join rules between `ad_spend`, `web_sessions`, and `stripe_invoices` so that natural language CAC calculations divide actual paid ad spend by verified closed customer count?",
          toolName: "Google Sheets",
          where: "Spreadsheet tab: 'Schema Join Relationship Map'",
          procedure: [
            "Map primary and foreign key relationships between `google_ads_spend`, `meta_ads_spend`, `ga4_sessions`, and `stripe_charges`.",
            "Write the standardized Blended CAC calculation formula: `SUM(all_ad_spend.cost) / COUNT(DISTINCT stripe_charges.customer_id)`.",
            "Write the Paid-Only CAC formula: `SUM(paid_campaign_spend.cost) / COUNT(DISTINCT paid_attributed_customers)`.",
            "Test the schema map with a prompt: 'What was our Paid CAC by channel last month?'",
          ],
          outputSample:
            "| Metric | Required Formula | Primary Table | Joined Tables | Join Key | Failure Mode if Ungoverned |\n|---|---|---|---|---|---|\n| Blended CAC | `SUM(spend) / COUNT(DISTINCT new_customers)` | `marketing_spend_daily` | `stripe_customers` | `date = charge_date` | Dividing spend by organic sign-ups |\n| Paid CAC | `SUM(ad_cost) / COUNT(DISTINCT first_paid_order)` | `ad_channel_spend` | `attributed_orders` | `campaign_id = utm_campaign` | Multi-touch double counting across channels |\n| Gross Margin ARR | `SUM(mrr_amount * (1 - cogs_pct))` | `subscription_mrr` | `product_cogs` | `product_id` | AI summing top-line revenue without COGS |",
          healthy:
            "Calculated metrics use pre-defined business formulas rather than letting the LLM construct ad-hoc mathematical expressions on raw column sums.",
          unhealthy:
            "AI performs an inner join between ad impressions and invoices, creating a cross-product multiplication that reports millions in fictitious revenue.",
          interpret:
            "Standardizing metric definitions prevents the AI from mixing Blended CAC ($42) with Paid Channel CAC ($118), ensuring leadership receives accurate unit economics.",
          soWhat: [
            {
              symptom: "AI report showing negative CAC or implausibly high ROAS",
              action: "Lock calculated metrics into database views so NLQ queries pre-computed metrics instead of raw table joins",
              effort: "half day",
            },
            {
              symptom: "Discrepancy between Google Ads reported conversions and Stripe actual paying customers",
              action: "Define 'Conversion' in the semantic catalog to strictly mean confirmed payment settled in Stripe",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-nlq-sanity-check-protocol",
          concept: "Sanity-checking AI calculations",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Mistake 1 in the lesson warns that AI analytics tools return wrong answers with complete visual confidence. A sanity-check protocol compares AI query outputs against one trusted baseline before publishing.",
          question:
            "What step-by-step verification checklist should every marketing team member execute before presenting an AI-generated chart in an executive review?",
          toolName: "ChatGPT",
          where: "ChatGPT data analysis session or BI query interface",
          procedure: [
            "Request the underlying SQL query generated by the AI tool alongside the visual chart.",
            "Verify the `WHERE` date clause matches the requested reporting timeframe (check for time zone offset errors).",
            "Cross-check the total row count or aggregate sum against a known static report (e.g. GA4 dashboard total monthly sessions).",
            "Check for `DISTINCT` operators on customer/order IDs to confirm no fan-out multiplication occurred.",
          ],
          outputSample:
            "Sanity-Check Validation Card:\n• Prompt: 'Show monthly recurring revenue by plan for Q1 2026'\n• AI Generated SQL: `SELECT plan_name, SUM(amount) FROM subscriptions WHERE start_date >= '2026-01-01' GROUP BY plan_name;`\n• Defect Spotted: AI summed all historical transactions for plans starting in Q1 rather than active MRR snapshots on the last day of each month.\n• Sanity Check Result: FAILED (AI reported $480k MRR vs actual $160k MRR).\n• Corrected Prompt: 'Show active subscription MRR as of March 31, 2026 grouped by plan tier.'\n• Corrected SQL: Uses `status = 'active' AND billing_cycle = 'monthly'`.\n• Re-check Result: PASSED ($160,450 matches Stripe billing dashboard).",
          healthy:
            "All AI-generated metrics are verified against at least one trusted source dashboard before sharing with stakeholders.",
          unhealthy:
            "Marketers copy-pasting confident-looking AI graphs directly into executive slide decks without checking the SQL logic.",
          interpret:
            "The initial prompt caused the AI to sum all cumulative invoice line items across the entire quarter instead of computing active monthly recurring revenue, tripling the true MRR figure.",
          soWhat: [
            {
              symptom: "AI metric looks 2x-3x higher than expected",
              action: "Ask the AI: 'Show the SQL query used to calculate this number' and inspect the GROUP BY and SUM logic",
              effort: "5 min",
            },
            {
              symptom: "AI query omitting recent weekend or month-end transactions",
              action: "Specify explicit UTC timestamp ranges in prompt instead of relative phrases like 'last month'",
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
            role: "Semantic dictionary and schema mapping catalog",
            why: "Document business definitions, table relationships, and SQL validation rules",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Natural language query translation and SQL verification assistant",
            why: "Test natural language prompts against table schemas and inspect generated SQL queries",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Google Analytics 4",
            role: "Web analytics baseline",
            why: "Source table for event schemas, session counts, and conversion benchmarks",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Google Analytics 4 with BigQuery export provides the raw event-level data warehouse schema.",
      },
      deliverable:
        "A verified Semantic Layer Data Dictionary with business metric definitions, required SQL join criteria, and a 4-step sanity-check verification protocol.",
      sampleOutput:
        "Semantic Layer Configuration for Freshworks Marketing Data Hub:\n\n1. Disambiguated 'Trial Sign-ups' (`auth_users` table, 18,200 events) from 'Product Qualified Leads' (`product_usage` table where `seat_count >= 3 AND active_days >= 5`, 2,840 PQLs).\n2. Defined Paid CAC formula in warehouse semantic catalog: `SUM(google_ads.spend + linkedin_ads.spend) / COUNT(DISTINCT stripe_customers.new_paid_account)`. Fixed previous hallucinated join that was counting free trial accounts as paying customers.\n3. Deployed 4-step sanity-check protocol for the marketing team, catching a time zone date-drift bug that previously misattributed $42,000 in month-end renewals.",
      successCriteria: [
        "Identify and resolve ambiguity between raw contact creations and verified MQLs",
        "Define precise calculation formulas for Blended vs Paid CAC to prevent AI overcounting",
        "Establish baseline tolerance thresholds for comparing NLQ output against trusted reporting dashboards",
      ],
      portfolioReady: true,
      skills: ["Semantic Layer Modeling", "Natural Language Querying (NLQ)", "Data Governance", "SQL Sanity Checking"],
      prerequisites: ["Understanding of marketing funnels (leads, MQLs, CAC) and basic database table relationships"],
      keyQuestion: "How do you build a semantic layer that prevents AI natural language query tools from hallucinating metric definitions and generating false marketing reports?",
      keyTakeaway: "AI analytics tools are only as accurate as their semantic layer: without strict definitions for metrics like MQL and CAC, models guess column joins and generate confident but dangerously wrong numbers.",
    },
    {
      id: "ai-analytics-hallucination-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "AI Analytics Output Teardown: Spotting Hallucinated Aggregations, Date Drift, and False Joins",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given three realistic specimens of AI-generated analytics reports and charts produced by natural language queries, identify mathematical and logical defects—including unweighted average traps, time zone date drift, and fan-out join multiplication—before presenting insights to leadership.",
      companyId: "freshworks",
      scenario:
        "You are the marketing operations specialist at Freshworks reviewing weekly KPI summary slides generated by an AI analytics assistant. You need to inspect each chart and narrative summary for calculation errors before the executive review.",
      brief:
        "Analyze three AI-generated analytics specimens. For each specimen, determine whether the visual summary accurately reflects the underlying data or suffers from aggregation hallucinations, date filtering mismatch, or duplicate counting.",
      mode: "teardown",
      conceptsCovered: [
        "Sanity-checking AI calculations",
        "Defining a semantic layer",
        "Common mistakes in AI analytics",
      ],
      teardownItems: [
        {
          itemId: "item-1-unweighted-average-trap",
          specimenSource: "synthetic-realistic",
          specimen:
            "AI QUERY PROMPT: 'What was our average landing page conversion rate across all paid campaigns last month?'\n\nAI GENERATED SUMMARY:\n'Last month, your paid marketing campaigns achieved an outstanding average landing page conversion rate of 12.4% across your 4 active landing pages.'\n\nUNDERLYING DATA TABLE:\n• Page A (Brand Search): 10,000 visitors, 300 conversions (Conversion Rate: 3.0%)\n• Page B (Generic Search): 15,000 visitors, 375 conversions (Conversion Rate: 2.5%)\n• Page C (Retargeting): 8,000 visitors, 320 conversions (Conversion Rate: 4.0%)\n• Page D (Niche Influencer Test): 100 visitors, 30 conversions (Conversion Rate: 30.0%)\n\nAI CALCULATION: (3.0% + 2.5% + 4.0% + 30.0%) / 4 = 12.375% -> Rounded to 12.4%",
          prompt:
            "Evaluate this AI-generated conversion rate calculation. Identify all mathematical flaws, aggregation defects, and false conclusions.",
          answerKey: [
            {
              defect:
                "The AI calculated an unweighted average of percentages (average of averages), treating a 100-visitor test page with equal weight as a 15,000-visitor campaign.",
              severity: "critical",
              whyItMatters:
                "Calculating an unweighted average of rates produces a mathematically false metric (12.4% vs true weighted 3.06%), misleading marketing leadership on true channel performance.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The narrative claims 'outstanding conversion performance of 12.4%', creating a false sense of campaign efficiency based on an outlier sample of just 30 conversions.",
              severity: "critical",
              whyItMatters:
                "Unchecked AI summaries present statistically insignificant micro-tests as general account health indicators.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The calculation included 4 landing pages, analyzing all active pages is correct; the error is in the unweighted mathematical aggregation.",
            "Page D converted at 30%, high conversion on small targeted traffic is possible; the defect is giving it 25% weight in the total account average.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-accurate-cohort-retention",
          specimenSource: "synthetic-realistic",
          specimen:
            "AI QUERY PROMPT: 'Calculate 30-day user retention for users who signed up in January 2026.'\n\nAI GENERATED SUMMARY:\n'For the January 2026 signup cohort (total 4,200 new users), 1,512 users logged into the platform between day 28 and day 30 post-signup, representing a 30-day active retention rate of 36.0%.'\n\nUNDERLYING SQL QUERY:\n```sql\nWITH cohort AS (\n  SELECT user_id, DATE_TRUNC('month', created_at) AS signup_month\n  FROM users\n  WHERE created_at >= '2026-01-01' AND created_at < '2026-02-01'\n),\nretained AS (\n  SELECT DISTINCT c.user_id\n  FROM cohort c\n  JOIN events e ON c.user_id = e.user_id\n  WHERE e.event_time >= c.created_at + INTERVAL '28 days'\n    AND e.event_time <= c.created_at + INTERVAL '30 days'\n)\nSELECT \n  COUNT(DISTINCT c.user_id) AS total_users,\n  COUNT(DISTINCT r.user_id) AS retained_users,\n  ROUND(COUNT(DISTINCT r.user_id) * 100.0 / COUNT(DISTINCT c.user_id), 2) AS retention_pct\nFROM cohort c\nLEFT JOIN retained r ON c.user_id = r.user_id;\n```",
          prompt:
            "Review this cohort retention report and underlying SQL query. Identify any defects, or verify if the query logic is sound.",
          answerKey: [],
          distractors: [
            "It uses a 28-30 day window instead of exactly day 30, a 3-day bracket is a standard industry practice to smooth day-of-week usage variations.",
            "It uses LEFT JOIN, a LEFT JOIN is required to retain the full denominator of cohort users who did not return.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-table-join-fanout-multiplication",
          specimenSource: "synthetic-realistic",
          specimen:
            "AI QUERY PROMPT: 'What was our total ecommerce sales revenue from email campaigns in February 2026?'\n\nAI GENERATED SUMMARY:\n'In February 2026, email marketing generated $320,000 in total sales revenue across 800 customer transactions (Average Order Value: $400).'\n\nUNDERLYING SQL QUERY GENERATED BY AI:\n```sql\nSELECT \n  COUNT(o.order_id) AS transaction_count,\n  SUM(o.order_total_usd) AS total_revenue\nFROM orders o\nJOIN order_items oi ON o.order_id = oi.order_id\nWHERE o.utm_source = 'email'\n  AND o.order_date >= '2026-02-01' AND o.order_date < '2026-03-01';\n```\n\nACTUAL STORE REALITY:\n• Total unique email orders: 800\n• Average items per order: 2.5 items\n• True total revenue in payment gateway: $128,000\n• Actual Average Order Value: $160",
          prompt:
            "Inspect the SQL query and the reported output. Identify why the AI revenue calculation is distorted and state the root-cause defect.",
          answerKey: [
            {
              defect:
                "Table join fan-out: Joining `orders` to `order_items` on a 1-to-many relationship caused each order's `order_total_usd` to be summed multiple times (once per line item in the order).",
              severity: "critical",
              whyItMatters:
                "Because orders had an average of 2.5 line items, summing the order total on the joined table multiplied reported revenue by 2.5x ($128,000 true revenue inflated to $320,000).",
              lessonRef: "Common Mistakes",
              owner: "either",
            },
            {
              defect:
                "The query used `COUNT(o.order_id)` without `DISTINCT`, counting order item rows rather than unique customer orders if any order had multiple products.",
              severity: "moderate",
              whyItMatters:
                "Failing to use `COUNT(DISTINCT order_id)` distorts conversion volume and average transaction sizing.",
              lessonRef: "How It Works: The Playbook",
              owner: "either",
            },
          ],
          distractors: [
            "The date filter uses exclusive upper bound '< 2026-03-01', standard datetime range convention avoids double-counting midnight on the 1st.",
            "The query filters by `utm_source = 'email'`, source parameter filtering is standard practice for channel attribution.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Manual aggregation and weighted average calculation sheet",
            why: "Compute true weighted conversion rates and check deduplicated transaction totals",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "SQL logic inspection and diagnostic assistant",
            why: "Deconstruct generated SQL queries to spot join fan-out and unweighted percentage aggregation bugs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Product analytics event validator",
            why: "Validate retention cohorts and event funnel calculations against raw user streams",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Mixpanel provides native event-stream deduplication and cohort retention visualizations.",
      },
      deliverable:
        "A completed 3-specimen teardown audit matrix identifying specific calculation traps (unweighted averages, table join fan-out) and corrected SQL queries.",
      sampleOutput:
        "AI Analytics Output Teardown for Snowflake Marketing Performance Dashboard:\n\n1. Specimen 1 (Landing Page Conversion): Rejected. AI calculated unweighted average of rates (12.4%), ignoring traffic weighting. True weighted conversion rate is 3.06% across 33,100 visitors.\n2. Specimen 2 (January Cohort Retention): Approved. SQL correctly defines cohort baseline and computes 36.0% 30-day retention with appropriate DISTINCT counts and LEFT JOIN logic.\n3. Specimen 3 (Email Revenue Attribution): Rejected. Critical join fan-out defect: joining `orders` with `order_items` duplicated `order_total_usd` across line items, inflating revenue from $128,000 to $320,000 (2.5x error). Fixed by querying `orders` table directly without joining `order_items`.",
      successCriteria: [
        "Spot the unweighted average error and calculate the true weighted blended conversion rate",
        "Confirm the cohort retention curve specimen is mathematically sound without false defects",
        "Identify table join fan-out causing duplicated transaction revenue",
        "Document the corrective prompt phrasing to fix each AI query generation failure",
      ],
      portfolioReady: false,
      skills: ["SQL Logic Audit", "Metric Sanity Checking", "Data Governance", "NLQ Verification"],
      prerequisites: ["Basic understanding of SQL joins, aggregation functions (SUM, COUNT DISTINCT), and weighted averages"],
      keyQuestion: "How do you detect subtle mathematical and table join hallucinations in AI-generated analytics reports before they reach executive decision-makers?",
      keyTakeaway: "AI analytics tools generate visually polished charts with complete confidence, but common SQL traps like unweighted percentage averages and 1-to-many table join fan-outs can inflate key metrics by 2x-3x without throwing a single database error.",
    },
  ],

  "ai-agents-marketing": [
    {
      id: "ai-agents-marketing-workflow-architecture",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Autonomous Campaign Engine: Architecting a Multi-Step Marketing Agent with Guardrails",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Design and document an end-to-end multi-step autonomous marketing agent workflow—from competitor intelligence to draft copy generation and review-gated staging—incorporating tool permission sandboxes, structured memory layers, and human-in-the-loop validation checkpoints.",
      companyId: "zendesk",
      scenario:
        "You are the growth marketing operations lead at Zendesk (acquired for $10.2B), tasked with automating competitor feature monitoring and sales-enablement battle card updates across Zendesk's core customer support product lines without giving AI autonomous publish permissions.",
      brief:
        "Define the complete agent runbook: configure the 4-layer architecture (LLM brain, tool connectors, vector memory, orchestration loop), establish tool permission boundaries, define the perceive-plan-act-observe cycle, and build the shadow-mode evaluation rubric to prevent confident hallucination before any live deployment.",
      mode: "build",
      conceptsCovered: [
        "The four components every marketing agent needs",
        "Perceive-Plan-Act-Observe Agent Loop",
        "Setting up your first marketing agent: step-by-step",
        "Preventing Confident Wrongness with Human Checkpoints",
      ],
      steps: [
        {
          stepId: "step-1-component-architecture",
          concept: "The four components every marketing agent needs",
          lessonAnchor: "the-four-components-every-marketing-agent-needs",
          theoryRecap:
            "The lesson outlines the 4 foundational layers of any marketing agent: (1) LLM reasoning brain (Claude, GPT-4o), (2) Tool execution layer (APIs, search, spreadsheets), (3) Short/Long-term Memory (vector DB, brand voice docs), and (4) Orchestration loop (LangGraph, Make, CrewAI).",
          question:
            "Which components must be strictly isolated with read-only permissions versus write-enabled staging to prevent uncontrolled modifications to Zendesk's CRM or ad platforms?",
          toolName: "Make",
          where: "Make scenario blueprint canvas, module configuration settings and API credential scope panel.",
          procedure: [
            "Map the LLM reasoning node (Claude 3.5 Sonnet / GPT-4o) as the central decision orchestrator",
            "Define read-only API connectors for competitor monitoring sources (web search, public ad libraries)",
            "Configure memory storage in a dedicated Google Sheet / vector store for historical campaign learnings and brand voice guidelines",
            "Attach write permissions exclusively to a draft/staging table, strictly barring direct production publishing without human sign-off",
          ],
          outputSample:
            "ZENDESK AGENT COMPONENT MAP:\n" +
            "- Reasoning Engine: Claude 3.5 Sonnet (Temp: 0.2 for structured data extraction)\n" +
            "- Tool Access: Web Search API (Read-only), Google Sheets Competitor DB (Read/Write to Staging tab only)\n" +
            "- Memory Layer: Brand Voice Guidelines Doc (Static Context) + Last 90-day Battle Card Changelog\n" +
            "- Orchestrator: Make Webhook Pipeline with Error Retry Cap (Max 3 iterations per task loop)",
          healthy:
            "All tool connectors enforce least-privilege access; ad platforms and production CRMs have no autonomous write/publish scopes.",
          unhealthy:
            "Granting the agent full administrative API keys with direct email send or ad publishing permissions on day one.",
          interpret:
            "An agent is only as safe as its tool sandboxing. Isolating write actions to staging tables lets you harness autonomous reasoning while eliminating live blast radius.",
          soWhat: [
            {
              symptom: "Engineering or security flags the marketing agent as a compliance and security risk",
              action: "Provide a scoped API credential audit demonstrating read-only data ingest and staged-only write outputs",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-perceive-plan-act-loop",
          concept: "Perceive-Plan-Act-Observe Agent Loop",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The marketing agent playbook executes an iterative loop: perceive environment (read data/tools), plan next action, act (execute tool call), observe outcome, and evaluate whether the goal is complete before producing the final output.",
          question:
            "How does the agent evaluate whether sufficient competitor intelligence has been gathered, and what loop-termination condition prevents infinite API polling?",
          toolName: "Google Sheets",
          where: "Agent execution log spreadsheet, columns: run_id, loop_count, action_taken, observation, goal_status.",
          procedure: [
            "Structure the perceive stage: ingest competitor release notes and pricing pages via web fetch",
            "Structure the plan stage: compare extracted features against Zendesk's existing capability matrix",
            "Structure the act stage: draft updated objection handling bullets for sales battle cards",
            "Structure the observe & terminate stage: set a maximum loop depth of 4 iterations and verify all 3 target competitor domains were checked",
          ],
          outputSample:
            "EXECUTION LOOP LOG (Run #4082):\n" +
            "[Loop 1 - Perceive] Fetched 3 competitor changelog URLs -> Found 2 new AI ticketing feature launches\n" +
            "[Loop 1 - Plan] Compare against Zendesk Suite AI ticketing features -> Identified 1 pricing difference ($19/mo add-on)\n" +
            "[Loop 1 - Act] Drafted 2 competitive counter-positioning bullets\n" +
            "[Loop 1 - Observe] Verified output against brand tone guidelines -> Pass\n" +
            "[Loop 1 - Terminate] Goal criteria met (all 3 competitor domains processed, 0 errors) -> Sent draft to Slack review channel",
          healthy:
            "Agent checks termination criteria at every step and halts cleanly when the objective is met or max iterations are reached.",
          unhealthy:
            "Unbounded loops where an agent re-queries tools repeatedly on unexpected responses, burning API credits without progress.",
          interpret:
            "A deterministic stopping condition and explicit validation check prevent runaway loops and ensure repeatable output quality.",
          soWhat: [
            {
              symptom: "Agent scenario times out or consumes excessive API tokens on ambiguous queries",
              action: "Add a hard counter (max 3 loops) and fallback route to alert human operator if goal criteria aren't met",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-shadow-mode-setup",
          concept: "Setting up your first marketing agent: step-by-step",
          lessonAnchor: "setting-up-your-first-marketing-agent-step-by-step",
          theoryRecap:
            "The lesson specifies a 6-step deployment playbook: pick one high-frequency task, define the goal clearly, connect minimal tools, run in shadow mode for 2-4 weeks with human review ratings, log error patterns, and expand scope only after proven reliability.",
          question:
            "What scoring criteria and error taxonomy should the marketing team use during the 2-week shadow mode to measure whether the agent is ready for production?",
          toolName: "Claude",
          where: "Claude prompt engineering workbench & shadow mode evaluation rubric sheet.",
          procedure: [
            "Define a 3-point evaluation rubric: Factual Accuracy (1-5), Brand Alignment (1-5), and Hallucination Absence (Pass/Fail)",
            "Run the agent parallel to manual competitor analysis workflows for 14 consecutive business days",
            "Log any factual discrepancies (e.g., misquoted competitor pricing tiers or incorrect API limits)",
            "Refine system prompts and few-shot examples with logged failure modes before promoting to active status",
          ],
          outputSample:
            "SHADOW MODE EVALUATION REPORT (14-Day Pilot):\n" +
            "- Total Tasks Run: 28 competitor monitoring digests\n" +
            "- Human Review Pass Rate: 26/28 (92.8%)\n" +
            "- Error Taxonomy:\n" +
            "  * 1 Hallucinated pricing tier (Competitor discontinued free tier 3 months ago, agent used stale cached page)\n" +
            "  * 1 Tone violation (Used aggressive comparative claims violating brand safety standards)\n" +
            "- Prompt Fix: Added strict constraint 'Verify current pricing against live checkout page only; reject cached snippets'",
          healthy:
            "Maintaining a 90%+ human approval rate over 2+ weeks before granting autonomous notification triggers.",
          unhealthy:
            "Skipping shadow mode and pushing AI agent outputs directly into sales team Slack channels or customer communications.",
          interpret:
            "Shadow mode builds an empirical track record and surfaces edge cases in prompt constraints without risking live brand reputation.",
          soWhat: [
            {
              symptom: "Stakeholders are skeptical of adopting agentic workflows due to hallucination fears",
              action: "Present the 14-day shadow mode audit log showing exact error rates and prompt guardrail fixes",
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
            role: "Staging database, memory logging, and shadow-mode evaluation tracking",
            why: "Free, structured table formatting without setup cost",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Claude",
            role: "LLM reasoning engine and system prompt testing",
            why: "Strong structured reasoning and nuance for prompt development",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Make",
            role: "Visual workflow orchestrator and tool connector",
            why: "Visual no-code automation canvas with free tier",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Zapier",
            role: "Enterprise workflow automation and multi-app orchestration",
            why: "Broadest ecosystem of native SaaS connectors for automated triggers",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete Marketing AI Agent Architecture Runbook containing component diagrams, tool permission matrices, execution loop schemas, and a 14-day shadow-mode evaluation rubric.",
      sampleOutput:
        "Freshworks Marketing Intelligence Agent Runbook (Excerpt)\n\n" +
        "AGENT SPECIFICATION:\n" +
        "- Mission: Monitor ITSM & CRM competitor product changelogs weekly, extract key feature updates, and draft internal sales battle-card updates.\n" +
        "- Reasoning Engine: Claude 3.5 Sonnet (Temp: 0.1)\n" +
        "- Tool Permissions: Web Scraper (Read-Only), Staging DB (Write-Only to 'Drafts'), Slack Webhook (Notify Reviewers Only)\n\n" +
        "PERCEIVE-PLAN-ACT EXECUTION LOOP:\n" +
        "1. Perceive: Poll 4 competitor RSS/Changelog feeds every Monday at 06:00 UTC.\n" +
        "2. Plan: Filter updates for keywords: ['AI agent', 'copilot', 'pricing', 'ticketing']. Discard general bug fixes.\n" +
        "3. Act: Generate 3-bullet competitive differentiation summary against Freshservice capabilities.\n" +
        "4. Observe: Verify output contains 0 unsupported claims and includes source URL.\n" +
        "5. Review Gate: Post draft card to #product-marketing-review with [Approve / Reject] buttons.\n\n" +
        "SHADOW MODE THRESHOLDS:\n" +
        "- 14-day minimum duration | >=95% accuracy on extracted competitor pricing | Zero unauthorized live publishes.",
      successCriteria: [
        "Defines all 4 foundational agent components with explicit tool permission boundaries",
        "Structures a closed perceive-plan-act-observe loop with finite termination conditions",
        "Includes a complete 14-day shadow-mode evaluation rubric with error logging",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-agents-marketing-failure-mode-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Confident Hallucination Audit: Tearing Down 3 Broken Marketing Agent Workflows",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Analyze three realistic marketing agent execution transcripts exhibiting critical failure modes—unverified data ingestion, unchecked tool execution, and vague prompt goal definitions—and identify the architectural flaws, missing guardrails, and operational fixes required before deployment.",
      companyId: "freshworks",
      scenario:
        "You are the marketing operations auditor at Freshworks (Nasdaq: FRSH), investigating three automated AI agent pilots that failed in production: an autonomous ad headline generator, a lead enrichment and outreach bot, and an automated weekly analytics reporting agent.",
      brief:
        "Examine each agent run transcript, detect all critical and moderate failure modes, pinpoint the missing safeguard or rule violation from the lesson, and distinguish real defects from harmless execution characteristics.",
      mode: "teardown",
      conceptsCovered: [
        "Why agents fail: bad data in, confident garbage out",
        "Unchecked Tool Access Risks",
        "Setting specific agent goals and evaluation criteria",
        "Shadow mode and human review checkpoints",
      ],
      teardownItems: [
        {
          itemId: "item-1-unchecked-publish-ad-agent",
          specimenSource: "synthetic-realistic",
          specimen:
            "AGENT EXECUTION LOG: AdCopyAutomator-v1\n" +
            "Goal: 'Optimize underperforming Google Ads search copy for CRM campaigns.'\n" +
            "Timestamp: 2025-10-14 03:15:00 UTC\n" +
            "[03:15:01] Read Google Ads API: Found Ad Group 'Competitor Alternative' with CTR 1.2% (below 2.5% benchmark).\n" +
            "[03:15:04] LLM Reasoning: 'Generate aggressive high-CTR headlines highlighting free enterprise migration and unlimited seats.'\n" +
            "[03:15:07] Drafted Headline 1: 'Switch Today: 100% Free Migration & Unlimited Agent Seats!'\n" +
            "[03:15:09] Action: Called Google Ads API -> UpdateAdHeadline() -> Status: 200 OK (LIVE IN PRODUCTION).\n" +
            "[03:15:10] Task Complete. 0 human approvals requested.\n" +
            "Incident Note: Freshworks does not offer 'unlimited agent seats' on any plan; sales received 45 angry enterprise inbound inquiries demanding unadvertised terms.",
          prompt: "Analyze this agent execution trace. Identify all defects that caused this live production incident.",
          answerKey: [
            {
              defect:
                "The agent was given direct write/publish API access to live Google Ads campaigns without a human review checkpoint.",
              severity: "critical",
              whyItMatters:
                "The lesson's Mistake 1 explicitly warns against giving agents live publish access before building a verified track record. Agents act with confident wrongness; unverified ad copy goes live immediately.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The agent hallucinated product pricing terms ('unlimited agent seats') because it lacked a grounded memory/product catalog source to verify claims against.",
              severity: "critical",
              whyItMatters:
                "The lesson emphasizes that agents reason only from accessible context. Without grounding in official product specs, the LLM optimizes for CTR at the expense of factual truth.",
              lessonRef: "The four components every marketing agent needs",
              owner: "you",
            },
            {
              defect:
                "The goal 'Optimize underperforming Google Ads search copy' was vague and lacked boundary constraints on permissible claims.",
              severity: "moderate",
              whyItMatters:
                "Mistake 2 states that vague goals produce vague or dangerous outputs. Clear goals must define acceptable promotional bounds and prohibited claims.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The agent queried the Google Ads API at 03:15 UTC; scheduled nighttime cron runs are standard for batch optimization and not a defect.",
            "The agent targeted an ad group with 1.2% CTR; selecting low-CTR ad groups for optimization is standard marketing practice.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-lead-enrichment-hallucination",
          specimenSource: "synthetic-realistic",
          specimen:
            "AGENT EXECUTION LOG: LeadEnrichmentAgent-v2\n" +
            "Goal: 'Research inbound B2B enterprise leads on the web, enrich company profile in HubSpot CRM, and trigger personalized cold outreach sequence.'\n" +
            "Timestamp: 2025-11-02 11:20:10 UTC\n" +
            "[11:20:11] Ingested Lead: name='David Miller', email='david@apexsolutions.io', company='Apex Solutions'\n" +
            "[11:20:14] Web Search: 'Apex Solutions revenue employee count CEO'\n" +
            "[11:20:18] Search Result: Found 'Apex Global Solutions Inc.' (5,000 employees, Healthcare IT, Dallas, TX)\n" +
            "[11:20:21] Observation: Agent failed to verify domain match (searched generic name, picked large unrelated corp instead of apexsolutions.io, a 12-person UK design studio)\n" +
            "[11:20:25] HubSpot CRM Update: Set Annual_Revenue = '$250M', Industry = 'Healthcare', Tier = 'Tier 1 Enterprise'\n" +
            "[11:20:28] Action: Triggered automated Enterprise VP email: 'Hi David, as an enterprise leader managing 5,000 healthcare staff across Texas, our HIPAA-compliant platform...'\n" +
            "[11:20:30] Lead Status: Prospect replied 'Wrong company, unsubscribed' and marked email as spam.",
          prompt:
            "Analyze this lead enrichment execution log. Identify the root causes of the enrichment failure and improper outreach.",
          answerKey: [
            {
              defect:
                "The agent matched an entity by ambiguous company name rather than strict domain verification (apexsolutions.io), poisoning CRM data with dirty records.",
              severity: "critical",
              whyItMatters:
                "The lesson Callout warns that bad data in produces confident garbage out at scale. Agents do not verify entity resolution unless explicitly constrained to validate domains.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The agent triggered live personalized outreach automatically without a staging or confidence score threshold.",
              severity: "critical",
              whyItMatters:
                "Connecting CRM write access and email delivery simultaneously creates multi-system error propagation. Low-confidence matches must be flagged for human review.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "The agent used HubSpot CRM; HubSpot is a standard CRM platform highlighted in the lesson.",
            "The prospect had an @apexsolutions.io email address; custom domain emails are standard B2B inbound leads.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-runaway-reporting-agent",
          specimenSource: "synthetic-realistic",
          specimen:
            "AGENT EXECUTION LOG: WeeklyReportingAgent-v1\n" +
            "Goal: 'Compile weekly marketing analytics report and email executive team every Monday at 08:00.'\n" +
            "Timestamp: 2025-11-10 08:00:00 UTC\n" +
            "[08:00:02] Query GA4 API: Total Conversions = 412 (Prior Week = 850, -51.5% drop)\n" +
            "[08:00:06] LLM Reasoning: 'Conversion tracking dropped by 51.5%. Reason from historical logs: Likely GA4 tracking tag broken or major paid campaign paused.'\n" +
            "[08:00:09] Action: Did not check whether GA4 data processing was still lagging (GA4 48-hour processing window meant Sunday data was incomplete).\n" +
            "[08:00:12] Generated Report Header: 'CRITICAL ALERT: Marketing Conversion Funnel Collapsed by 51.5% in Week 45.'\n" +
            "[08:00:15] Action: Dispatched emergency alert to CEO, CMO, and VP Growth.\n" +
            "Post-Mortem: Sunday data settled 24 hours later; actual conversions were 865 (+1.7% growth). The agent reported an emergency based on unfinalized 24h data.",
          prompt:
            "Analyze this reporting agent execution log. Identify the defects in the agent's reasoning and data validation.",
          answerKey: [
            {
              defect:
                "The agent failed to account for GA4's standard 24-48 hour data processing lag before calculating week-over-week trends.",
              severity: "critical",
              whyItMatters:
                "The lesson emphasizes auditing underlying data sources before relying on agent reasoning. Reasoning over incomplete or immature data produces confident false alarms.",
              lessonRef: "Common Mistakes",
              owner: "you",
            },
            {
              defect:
                "The agent escalated an unverified anomaly directly to the executive leadership team without an intermediate verification check or data-maturity guardrail.",
              severity: "moderate",
              whyItMatters:
                "Autonomous alerting agents must establish verification rules (e.g., verifying mature date ranges or notifying an analyst before emailing C-suite executives).",
              lessonRef: "Setting up your first marketing agent: step-by-step",
              owner: "you",
            },
          ],
          distractors: [
            "The agent queried GA4 on a Monday morning; Monday morning reporting is standard business cadence.",
            "The agent formatted its output as an executive email; report summarization is a primary use case for marketing agents.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log failure audit matrix, defect classification, and guardrail tracking",
            why: "Structured table format for error taxonomy review",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Drafting and testing system prompt guardrails and constraint rules",
            why: "Free prompt debugging and constraint testing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed Agent Failure Mode Teardown Matrix classifying defects across all 3 agent logs, with root cause analyses and specific prompt/architectural guardrails to prevent recurrence.",
      sampleOutput:
        "Slack Marketing Agent Defect Audit (Excerpt)\n\n" +
        "SPECIMEN AUDIT: Slack Social Lead Nurture Bot (Run #1094)\n" +
        "- Primary Defect: Entity resolution failure on domain matching -> Agent attributed a boutique London consulting firm's lead to a Fortune 500 bank with similar brand name.\n" +
        "- Root Cause: Missing domain matching validation rule in LLM prompt; agent accepted partial name match from Google search snippet.\n" +
        "- Severity: Critical (Poisoned CRM tiering, triggered mismatched enterprise sales sequence).\n" +
        "- Required Architectural Guardrail: Mandatory apex domain regex match (lead_email_domain === verified_company_domain) before CRM write permissions execute.\n" +
        "- Review Gate: Route all enrichment confidence scores < 0.95 to manual SDR queue.",
      successCriteria: [
        "Accurately identifies all critical failure modes across ad publishing, lead enrichment, and analytics reporting",
        "Distinguishes real architectural defects from benign operational distractors",
        "Proposes specific guardrails and constraint rules grounded in the lesson playbook",
      ],
      portfolioReady: true,
    },
  ],
};
