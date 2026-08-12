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
};
