/**
 * Practice projects for the `seo` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * `keyword-research` projects use the real 40-row dataset at
 * public/project-data/keyword-export.csv (all volume/difficulty/CPC/intent/
 * current_rank numbers below are read directly from that file, not
 * invented). `on-page-seo`'s audit project re-uses the same dataset, since
 * its `current_rank` column is exactly what the lesson's CTR-by-position
 * numbers (27.6% at #1, ~15% at #2, 54.4% combined for the top 3) need to
 * be applied to. `on-page-seo`'s rebuild project is a synthetic-but-labeled
 * specimen (explicitly framed as "Care.com-style", not Care.com's real
 * production page) since no real page markup dataset exists in this repo.
 */

import type { Project } from "@/lib/projects/types";

export const SEO_PROJECTS: Record<string, Project[]> = {
  "keyword-research": [
    {
      id: "keyword-research-export-audit",
      tier: "core",
      archetype: "audit",
      title: "The Prioritization Call: Auditing a Real Keyword Export",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a real 40-keyword export with volume, difficulty, CPC, intent, and current rank, apply the lesson's evaluation framework to decide which keywords deserve new content, which are a fast fix on a page you already rank for, and which are a high-volume trap for a site without page-one authority yet.",
      companyId: "freshworks",
      scenario:
        "You're the marketing analyst continuing the demand test from the paid-search Learning Phase simulation: Freshworks, the Chennai-founded, Nasdaq-listed B2B SaaS company (FRSH), is validating a prospective remote-team project-management add-on. The search campaign proved there's click demand. Now leadership wants an organic acquisition plan so they're not paying Google for every visitor forever. You've pulled a 40-keyword export from the team's target list, complete with current rank, and you have one quarter's content budget to allocate.",
      brief:
        "Four passes over the same sheet: sort by intent, score realistic targets, weigh commercial value beyond raw volume, and find the fastest win sitting in a page you already rank for. Each pass changes what you'd tell leadership to fund.",
      mode: "diagnostic",
      conceptsCovered: [
        "Filtering by search intent before filtering by anything else",
        "Scoring realistic targets with the volume/difficulty/relevance table",
        "Treating search volume as the only metric that matters (Mistake 2)",
        "Fixing keywords you already rank for before chasing new ones (Mistake 3)",
      ],
      skills: ["Keyword Research", "Search Intent", "Content Prioritization", "Google Search Console"],
      keyQuestion:
        "Given a real keyword export, which terms deserve a new page, which need a quick on-page fix, and which should be declined this quarter?",
      prerequisites: [
        "Basic familiarity with spreadsheets (sorting and filtering columns)",
        "Access to a Google Search Console property, for the quick-win step",
      ],
      terminology: [
        {
          term: "Keyword Difficulty (KD)",
          definition: "a 0-100 score estimating how hard it would be to rank on page one for a term, based on the backlink strength of pages currently ranking.",
        },
        {
          term: "Search Intent",
          definition: "the underlying goal behind a search, informational, navigational, commercial, or transactional, which determines what kind of page should target it.",
        },
      ],
      steps: [
        {
          stepId: "step-1-intent-filter",
          concept: "Filtering by search intent before filtering by anything else",
          lessonAnchor: "stage-3-filter-by-intent",
          theoryRecap:
            "The lesson's Stage 3 splits every keyword into informational, navigational, commercial, or transactional intent, and cites SparkToro's 2024 data that 52.65% of searches are informational and only 0.69% are transactional. Intent tells you what kind of page to build, not just which words to use.",
          question:
            "Sorted by intent, this export has 24 commercial rows, 13 informational rows, 2 transactional rows, and 1 navigational row. Which bucket gets a dedicated landing page this quarter, and which is blog-post fodder that will never be the target of a sales page?",
          toolName: "Google Sheets",
          where: "Import keyword-export.csv, freeze the header row, and filter the `intent` column.",
          procedure: [
            "Import keyword-export.csv into a spreadsheet and freeze row 1",
            "Filter the intent column and isolate the 2 transactional rows first, they're closest to a buying decision",
            "Isolate the 24 commercial rows next and set them aside as landing-page candidates",
            "Leave the 13 informational rows and the 1 navigational row for blog/help-center content, not sales pages",
          ],
          outputSample:
            "keyword-export.csv, sorted by intent\n\n" +
            "TRANSACTIONAL (2 rows, ready-to-buy searchers)\n" +
            "  project management software free trial        590 vol   KD 31   cpc $14.90   rank 5\n" +
            "  project management software demo               390 vol   KD 27   cpc $7.90    rank 13\n\n" +
            "COMMERCIAL (24 rows, comparing options — sample of 5)\n" +
            "  project management software                 40,500 vol   KD 78   cpc $12.40   rank 14\n" +
            "  free project management tools                18,100 vol   KD 58   cpc $3.10    rank —\n" +
            "  project management app                       12,100 vol   KD 61   cpc $10.90   rank 19\n" +
            "  project management templates (informational, for contrast) — not counted here\n" +
            "  ...19 more commercial rows\n\n" +
            "INFORMATIONAL (13 rows, avg ~3,623 vol/mo) + NAVIGATIONAL (1 row)\n" +
            "  1 navigational row: project management software login, 590 vol, KD 18, rank 3\n" +
            "  (already ranking #3 because it's a branded/product-page query, not a content opportunity)",
          healthy:
            "The 24 commercial rows go into a landing-page backlog; the 13 informational rows go into a blog backlog; nobody drafts a sales page for an informational query.",
          unhealthy:
            "Building a dedicated product landing page around 'project management methodology' (informational, 3,300 vol) because the volume number looked decent, without checking that the searcher wants a definition, not a product.",
          interpret:
            "Intent is a hard filter, not a scoring dimension: a commercial keyword with modest volume is still worth a landing page, but an informational keyword with huge volume is never worth one. Sort by intent first, everything else in the next three steps only applies inside the commercial/transactional bucket.",
          soWhat: [
            {
              symptom: "The content backlog mixes landing pages and blog posts in one undifferentiated list",
              action: "Split the backlog into two lists by intent before anyone estimates effort or assigns a writer",
              effort: "5 min",
            },
            {
              symptom: "A stakeholder asks why the 14,800-search 'project management templates' isn't getting a product page",
              action: "Point to the informational intent label, it's a top-of-funnel blog opportunity, not a conversion page",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-realistic-targets",
          concept: "Scoring realistic targets with the volume/difficulty/relevance table",
          lessonAnchor: "stage-4-evaluate-and-prioritize",
          theoryRecap:
            "The lesson's Stage 4 table sets a sweet spot of 100-2,000 monthly searches and KD under 30 for a new site, and its worked example contrasts an unrealistic 33,100-search/KD-62 term against a realistic 1,300-search/KD-17 alternative.",
          question:
            "Of the commercial rows in this export that aren't ranking yet (current_rank is blank), which two are realistic new-page targets this quarter, and which two are the 'best coffee maker' trap, tempting because of the big number, unrealistic because of the difficulty score?",
          toolName: "Google Sheets",
          where: "Same sheet, filter `current_rank` blank and `intent` = commercial, sort by difficulty ascending.",
          procedure: [
            "Filter to commercial rows where current_rank is blank (not yet ranking at all)",
            "Sort by difficulty ascending",
            "Flag anything under KD 35 with real volume as a realistic Q1 target",
            "Flag anything with the highest volume in the filtered list and check its KD before getting excited about it",
          ],
          outputSample:
            "REALISTIC now (KD under 35, real buyer intent, not yet ranking)\n" +
            "  project management software pricing          880 vol   KD 29   cpc $5.50    rank —\n" +
            "  project management software for agencies      480 vol   KD 34   cpc $16.20   rank —\n\n" +
            "THE TRAP (big number, no realistic shot without existing authority)\n" +
            "  free project management tools               18,100 vol   KD 58   cpc $3.10    rank —\n" +
            "  enterprise project management software        1,900 vol   KD 62   cpc $18.40   rank —",
          healthy:
            "Greenlighting the pricing page and the agencies page as this quarter's two new landing pages, both under KD 35.",
          unhealthy:
            "Greenlighting 'free project management tools' first because 18,100 dwarfs every other number in the sheet, without registering that KD 58 puts it out of reach for a site with no existing authority in this niche.",
          interpret:
            "KD 58-62 in a competitive commercial SaaS niche needs a backlink profile this site doesn't have yet, exactly the lesson's 'best coffee maker' logic. KD 29-34 pages are winnable within a quarter or two, which is the actual planning horizon leadership asked for.",
          soWhat: [
            {
              symptom: "Leadership wants to chase the 18,100-search term first because it's the biggest number in the sheet",
              action: "Show them the KD score and reframe it as a 12-18 month goal once backlinks exist, not this quarter's deliverable",
              effort: "30 min",
            },
            {
              symptom: "No clear answer on which two pages to brief a writer for this sprint",
              action: "Brief the pricing and agencies pages, both KD under 35 and already carry buyer-level CPC",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cpc-signal",
          concept: "Treating search volume as the only metric that matters (Mistake 2)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 2 warns that a 50-search keyword describing a ready-to-buy searcher is worth more than a 5,000-search keyword that never converts, and that CPC is a live signal advertisers pay for that answer.",
          question:
            "Sorted by CPC, the top of this sheet looks nothing like the top by volume. What does the highest-CPC row tell you that the highest-volume row can't?",
          toolName: "Google Sheets",
          where: "Same sheet, sort by `cpc` descending.",
          procedure: [
            "Sort the full sheet by cpc, descending",
            "Note the top 5 rows by CPC and their volumes",
            "Compare that list against the single highest-volume row in the entire sheet",
          ],
          outputSample:
            "Sorted by CPC, descending (top 5)\n" +
            "  enterprise project management software        $18.40 cpc   1,900 vol   KD 62   commercial\n" +
            "  project management software for agencies      $16.20 cpc     480 vol   KD 34   commercial\n" +
            "  project management software for remote teams  $15.60 cpc   1,300 vol   KD 42   commercial   rank 6\n" +
            "  project portfolio management software          $15.10 cpc     720 vol   KD 46   commercial\n" +
            "  project management software free trial         $14.90 cpc     590 vol   KD 31   transactional  rank 5\n\n" +
            "For contrast, the single biggest volume row in the whole sheet:\n" +
            "  project management software                    $12.40 cpc  40,500 vol   KD 78   commercial   rank 14",
          healthy:
            "Prioritizing content around the top-CPC rows (agencies, free trial, remote teams) even though each has a fraction of the flagship term's volume.",
          unhealthy:
            "Sorting the content calendar by volume alone and writing 'project management templates' (14,800 vol, informational, low CPC) ahead of 'project management software for agencies' (480 vol, $16.20 CPC) purely because the number looked bigger.",
          interpret:
            "Advertisers only pay $14-18 per click when that click reliably turns into revenue. A high CPC on a low-volume term says the buyer at the other end is worth pursuing organically too, even though the raw traffic number looks unimpressive next to the head term.",
          soWhat: [
            {
              symptom: "Every keyword report leadership sees only shows monthly search totals",
              action: "Add a CPC column to every keyword report from now on, it's the fastest available proxy for 'will this traffic actually buy'",
              effort: "5 min",
            },
            {
              symptom: "The content calendar is sorted purely by search volume",
              action: "Re-sort next quarter's calendar by volume x CPC, not volume alone",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-quick-win",
          concept: "Fixing keywords you already rank for before chasing new ones (Mistake 3)",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Mistake 3 says to check Google Search Console for page-2/3 rankings before hunting new keywords: a single optimization pass (H1, meta description, a subheading) can move a ranking from position 15 to position 5 in weeks, the fastest keyword win available to any site.",
          question:
            "Six rows in this export already rank positions 11-20. Which one is the fastest win the lesson describes, and which nearby row is a decoy that looks similar but isn't?",
          toolName: "Google Search Console",
          where: "Search Console > Performance > filter to queries ranking positions 11-20.",
          procedure: [
            "Cross-reference current_rank 11-20 against the export",
            "Rule out anything already at KD 55+ (that's an authority problem, not an on-page one)",
            "Pick the row closest to position 10 with the lowest difficulty score and real commercial volume",
          ],
          outputSample:
            "Rows currently ranking positions 11-20 (page 2 of Google, borderline)\n" +
            "  project management software comparison       1,900 vol   KD 38   cpc $6.80    rank 11\n" +
            "  best project management software 2026        2,400 vol   KD 44   cpc $11.80   rank 12\n" +
            "  project management software demo                390 vol   KD 27   cpc $7.90    rank 13  (transactional)\n" +
            "  project management software                40,500 vol   KD 78   cpc $12.40   rank 14\n" +
            "  simple project management tool                1,600 vol   KD 33   cpc $6.70    rank 16\n" +
            "  task management software                     9,900 vol   KD 55   cpc $8.75    rank 17\n\n" +
            "Best quick-win candidate: 'project management software comparison', rank 11, KD 38 —\n" +
            "one spot off page 1, real commercial volume, and a difficulty score a page with any\n" +
            "existing authority can realistically clear.",
          healthy:
            "Opening the page that already ranks 11 and rewriting its title, H1, and opening paragraph before writing a single new article this sprint.",
          unhealthy:
            "Commissioning a brand-new 2,000-word article targeting 'project management software' (rank 14, KD 78) because it has the biggest volume in the sheet, the same trap as Step 2, now applied to a page decision instead of a content decision.",
          interpret:
            "Ranking position 11 usually means Google already trusts this page for the topic; the missing piece is almost always an on-page signal, not more backlinks. That makes this the cheapest ranking gain available anywhere in the sheet.",
          soWhat: [
            {
              symptom: "The 'project management software comparison' page has sat at rank 11 for months",
              action: "Rewrite its title tag and H1 to mirror the exact query, then request re-indexing in Search Console",
              effort: "30 min",
            },
            {
              symptom: "The team's default instinct is always 'write something new'",
              action: "Add a standing step to every content sprint: check current_rank for page-2 keywords before greenlighting new pages",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Find and confirm which keywords you already rank for on page 2 or 3",
            why: "Free, and the only tool that shows YOUR actual current ranking position per query, which the exported spreadsheet snapshot can go stale without.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Keyword Planner",
            role: "Verify or refresh volume and CPC numbers before committing a writer's time",
            why: "Free inside Google Ads without spending anything on ads, gives ranges backed by Google's own auction data.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Bulk difficulty/volume scoring across hundreds of keywords instead of dozens",
            why: "The free path (Keyword Planner + Search Console) is complete for a 40-keyword sheet like this one; Ahrefs earns its cost once you're managing hundreds of pages across a full site.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This project is fully completable on the free path. Ahrefs (or SEMrush) is only worth paying for once the keyword list has grown past what one analyst can sort by hand in a spreadsheet.",
      },
      datasetUrl: "/project-data/keyword-export.csv",
      deliverable:
        "A one-page prioritization memo: 2 new pages to brief this quarter (with why), 1 existing page to fix this week (with the exact on-page change), and 1 high-volume keyword to explicitly decline, with the KD-based reason written out.",
      sampleOutput:
        "Applying the same four-step lens to Zillow's own early keyword sheet (illustrative): 'zestimate accuracy' (rank 9, moderate KD) got the on-page fix this sprint instead of a new page. 'home value calculator free' (huge volume, KD 70+) was logged as an 18-month authority goal, not a Q1 deliverable. 'home value estimator for a divorce settlement' (tiny volume, high commercial intent, high CPC) got greenlit as new content because the searcher is clearly close to paying for a professional referral. The whole memo took 25 minutes once the sheet was sorted.",
      successCriteria: [
        "Correctly separated the 2 transactional and 24 commercial rows from the 13 informational/1 navigational rows before prioritizing anything",
        "Picked at least one KD-under-35 unranked commercial row as a new-page target, not the highest-volume row in the sheet",
        "Named 'project management software comparison' (or an equally well-justified rank 11-20 row) as the fastest win, not a brand-new article",
        "Explicitly declined at least one high-volume/high-KD row in writing and stated the KD-based reason",
      ],
      portfolioReady: true,
      stretch:
        "Pull your own site's real Search Console export and run this exact four-step framework against it instead of the sample sheet.",
      whatToLookFor: [
        { label: "Intent", detail: "Does the keyword's intent match a landing page, or is it blog/help-center fodder?" },
        { label: "Difficulty vs authority", detail: "Is the keyword difficulty score realistic for a site with the marketer's current backlink profile?" },
        { label: "Commercial signal beyond volume", detail: "Does CPC suggest advertisers are paying for clicks that convert, even though the raw volume looks modest?" },
        { label: "Existing rank", detail: "Is there a page already ranking on page two that a light on-page fix could push to page one?" },
      ],
      decision: {
        prompt:
          "The export contains 'free project management tools' (18,100 vol, KD 58, not ranking) and 'project management software comparison' (1,900 vol, KD 38, already ranking #11). Leadership has budget for exactly one action this sprint. Which is it?",
        options: [
          { id: "a", label: "Write a new page targeting 'free project management tools' because of its huge volume", correct: false },
          { id: "b", label: "Rewrite the title, H1, and opening paragraph of the page already ranking #11", correct: true },
          { id: "c", label: "Split the sprint evenly across both keywords", correct: false },
          { id: "d", label: "Wait until a paid tool confirms the difficulty score before doing anything", correct: false },
        ],
        explanation:
          "The rank-11 page already has Google's trust for this topic and is one on-page fix away from page one. The 18,100-volume term is KD 58, which this project's framework treats as a 12-18 month authority build, not a one-sprint deliverable. Splitting effort under-resources the achievable win, and the free Search Console and spreadsheet data already used here doesn't need a paid tool to confirm.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "This quarter's content budget should fund the pricing page (880 vol, KD 29) and the agencies page (480 vol, KD 34) as new landing pages, both realistic targets for a site without established authority. In parallel, the 'project management software comparison' page already ranking #11 should get an immediate title, H1, and opening-paragraph rewrite, the fastest ranking gain available in this sheet. 'Free project management tools' (18,100 vol, KD 58) should be explicitly declined for this quarter and logged as a 12-18 month goal once the site has a stronger backlink profile.",
      },
      commonMistakes: [
        { mistake: "Prioritizing by raw search volume alone", explanation: "the 40,500-volume flagship term (KD 78) is a multi-year authority play, not a Q1 deliverable, while a 480-volume term with the right intent and CPC is winnable now." },
        { mistake: "Writing a sales page for an informational query", explanation: "a searcher looking up 'project management methodology' wants a definition, not a demo request form, no matter how large the volume is." },
        { mistake: "Skipping the Search Console quick-win check", explanation: "commissioning brand-new content while a page already ranks #11 wastes budget on the hardest way to gain the same ranking territory." },
        { mistake: "Treating every unranked commercial keyword as equally realistic", explanation: "KD 29 and KD 62 both look like 'commercial, not yet ranking' rows in a filtered view, but only one is winnable this quarter." },
      ],
      keyTakeaway:
        "Keyword research isn't about finding the biggest numbers, it's about matching each keyword's intent, difficulty, and buying signal to the right action: a new page, an existing-page fix, or a deliberate decline. The four-step lens in this project, intent first, then difficulty, then CPC, then existing rank, turns a flat spreadsheet into a defensible quarterly plan.",
    },
    {
      id: "keyword-research-targeting-showdown",
      tier: "mini",
      archetype: "head-to-head",
      title: "One Page, Two Strategies: Broad Head Term vs. Long-Tail Cluster",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given one new landing page to build and two competing keyword-targeting strategies, use the lesson's own cited numbers (the long-tail traffic share, the Airbnb location-keyword case, the realistic-target framework) to decide which strategy actually gets the page found, and defend the call in writing.",
      companyId: "policybazaar",
      scenario:
        "PolicyBazaar (PB Fintech) built its entire acquisition engine on SEO- and comparison-content, not brand advertising, on its way to a ~$6.9B market cap at listing. You're briefing a new landing page for their term-insurance vertical, and two strategies are on the table. Strategy A targets the single broad head term everyone assumes matters. Strategy B targets a cluster of six specific, lower-volume phrases nobody else bothers writing pages for.",
      brief:
        "Read both strategies' numbers side by side, apply the lesson's long-tail math, and pick a winner, or a defensible hybrid, backed by the lesson's own cited evidence rather than a gut call.",
      mode: "diagnostic",
      conceptsCovered: [
        "Comparing a head term against a long-tail cluster using the lesson's own realistic-target framework",
        "Applying the Airbnb long-tail case to justify the cluster strategy",
      ],
      skills: ["Keyword Strategy", "Long-Tail SEO", "Competitive Analysis"],
      keyQuestion:
        "Should a new page with no existing authority target one high-volume head term or a cluster of long-tail phrases?",
      prerequisites: [
        "Understanding of keyword difficulty (KD) and search volume basics",
        "Familiarity with the realistic-target framework from the keyword-research lesson",
      ],
      terminology: [
        {
          term: "Long-Tail Keyword",
          definition: "a longer, more specific search phrase with lower individual volume but, collectively, a higher traffic share and lower competition than a broad head term.",
        },
      ],
      steps: [
        {
          stepId: "step-1-head-vs-cluster",
          concept: "Comparing a head term against a long-tail cluster using the lesson's own realistic-target framework",
          lessonAnchor: "stage-4-evaluate-and-prioritize",
          theoryRecap:
            "The lesson's worked example contrasts 'best coffee maker' (33,100 vol, KD 62, unrealistic) against 'best mini coffee maker' (1,300 vol, KD 17, realistic), and the site-wide callout notes long-tail keywords collectively drive 70% of all search traffic despite each one being small on its own.",
          question:
            "Strategy A targets 'term insurance' alone. Strategy B targets a cluster of six long-tail phrases. Which does the lesson's framework favor for a page with no existing authority in this vertical?",
          toolName: "Google Sheets",
          where: "A side-by-side spreadsheet, Strategy A vs. Strategy B columns, illustrative volumes for a hypothetical new page.",
          procedure: [
            "List Strategy A's single head term with its estimated volume and difficulty",
            "List all six of Strategy B's long-tail phrases with their estimated volume and difficulty",
            "Sum Strategy B's total volume and average its difficulty",
            "Compare both totals against the lesson's KD-under-30 realistic-target bar",
          ],
          outputSample:
            "Strategy A — single head term (illustrative volume/difficulty, unmeasured)\n" +
            "  'term insurance'                               ~74,000 vol/mo   KD 71   1 page targets it all\n\n" +
            "Strategy B — long-tail cluster (illustrative volume/difficulty, unmeasured)\n" +
            "  'term insurance for self employed'                  880 vol/mo   KD 24\n" +
            "  'term insurance calculator 30 year old'             560 vol/mo   KD 19\n" +
            "  'term insurance vs whole life insurance'          1,900 vol/mo   KD 31\n" +
            "  'best term insurance for smokers'                   390 vol/mo   KD 22\n" +
            "  'term insurance without medical test'             1,100 vol/mo   KD 28\n" +
            "  'term insurance claim settlement ratio'           2,400 vol/mo   KD 26\n" +
            "  Cluster total:                                    7,230 vol/mo   avg KD 25\n\n" +
            "Lesson's cited framework: KD under 30 is winnable for a new page; long-tail\n" +
            "keywords collectively drive 70% of all search traffic (the lesson's own callout).",
          healthy:
            "Choosing Strategy B, or a hybrid (one comprehensive page built around the cluster, with the head term as an aspirational secondary target), mirroring the coffee-maker worked example's logic exactly.",
          unhealthy:
            "Choosing Strategy A alone because 74,000 sounds better than 7,230, the same trap the lesson's Mistake 1 describes: chasing high-volume terms before the site has authority.",
          interpret:
            "7,230 combined long-tail volume at an average KD of 25 is achievable within months. 74,000 at KD 71 needs the kind of backlink profile a comparison-content business like PolicyBazaar didn't have when it started; that authority is exactly what the cluster strategy is designed to build first.",
          soWhat: [
            {
              symptom: "Leadership wants the page to target the biggest number available",
              action: "Show them the coffee-maker table from the lesson side by side with these real KD scores",
              effort: "30 min",
            },
            {
              symptom: "There's no single obvious 'the' keyword for this page",
              action: "Build one comprehensive page around the whole cluster, the lesson's 'also rank for' multiplier means a thorough page naturally ranks for related phrases too",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-airbnb-precedent",
          concept: "Applying the Airbnb long-tail case to justify the cluster strategy",
          lessonAnchor: "real-company-examples",
          theoryRecap:
            "The lesson's Airbnb case shows organic traffic growing approximately 400% between 2013 and 2016 after Airbnb targeted thousands of hyper-specific location phrases (like 'private room San Francisco Mission District') instead of competing head-on for 'hotels in New York', eventually ranking on page one for over 100,000 location-specific keywords.",
          question:
            "How does Airbnb's 100,000-keyword, ~400%-growth precedent translate into a one-paragraph justification for Strategy B in this brief?",
          toolName: "Notion",
          where: "One paragraph in the strategy memo, citing the lesson's Airbnb numbers directly.",
          procedure: [
            "Restate Airbnb's two real numbers: 100,000+ page-one long-tail rankings, ~400% organic traffic growth 2013-2016",
            "Name the parallel: Booking.com and Expedia owned 'hotels in New York' the way established insurance aggregators or agents may already own 'term insurance'",
            "State the translation: don't fight for the term the incumbents already own, out-cover them on the specific phrases they ignore",
          ],
          outputSample:
            "Airbnb, 2013-2016: could not out-rank Booking.com/Expedia for 'hotels in New York'.\n" +
            "Targeted long-tail location phrases instead ('apartment rental Paris Marais', 'room\n" +
            "for rent near Times Square'). Result: page-one rankings for 100,000+ location\n" +
            "keywords, ~400% organic traffic growth over three years, without proportional paid\n" +
            "spend increases.\n\n" +
            "Translation to this brief: incumbents already own the broad 'term insurance' rankings.\n" +
            "The six-phrase cluster targets exactly the specific searches those incumbents don't\n" +
            "bother covering, the same gap Airbnb found in travel search.",
          healthy:
            "The memo cites Airbnb's two real numbers directly instead of a vague 'long-tail is good' claim, and explicitly names which incumbent the strategy is avoiding a head-on fight with.",
          unhealthy:
            "Citing 'the Airbnb example' without the actual numbers, which reads as a name-drop rather than evidence a stakeholder can evaluate.",
          interpret:
            "A citation with numbers is persuasive; a citation without them is just a company name. The specific 100,000-keyword and ~400%-growth figures are what make this argument checkable, not just plausible-sounding.",
          soWhat: [
            {
              symptom: "The strategy memo currently just says 'long-tail works, see Airbnb'",
              action: "Rewrite it with the two specific numbers (100,000+ keywords, ~400% growth) and the explicit incumbent-avoidance parallel",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Keyword Planner",
            role: "Get real volume/difficulty ranges for the actual cluster phrases before finalizing the brief",
            why: "Free inside Google Ads, sufficient to replace the illustrative numbers above with real ones for any live vertical.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "AnswerThePublic",
            role: "Surface the exact long-tail phrasing real people use around the head term",
            why: "Free, no sign-in, visualizes question-and-comparison phrasing that a head-term-only brief would miss entirely.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Confirm difficulty scores and pull a fuller long-tail cluster (10-20 phrases instead of 6)",
            why: "The free path is complete for a single-page brief; SEMrush is worth it once you're clustering keywords across a whole site section.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
      },
      deliverable:
        "A half-page memo naming the chosen strategy (or hybrid), citing the volume/KD comparison table and the Airbnb precedent by number.",
      sampleOutput:
        "Care.com's own SEO-led growth ran on the identical logic: instead of one page fighting nationally for 'babysitter', they built city-plus-need pages ('babysitter Austin TX weekends', 'senior care Columbus Ohio overnight') that individually pull small volume but collectively built the largest care marketplace online. A hybrid memo for a similar brief: build the cluster page now, add the broad head term as an internal-linking target for a future pillar page once the cluster pages have earned some authority.",
      successCriteria: [
        "Memo names Strategy B (or a cluster-first hybrid) and states why, not just which",
        "Cites the specific 7,230 vol / avg KD 25 cluster total against the 74,000 vol / KD 71 head term, not a vague 'long-tail is better' claim",
        "Cites Airbnb's actual numbers (100,000+ keywords, ~400% growth 2013-2016) rather than naming the company alone",
        "States explicitly which incumbent the strategy avoids fighting head-on",
      ],
      portfolioReady: true,
      stretch:
        "Take a real head term from your own niche, build a real 6-phrase long-tail cluster for it using a free keyword tool, and write the same comparison memo with real numbers instead of illustrative ones.",
      whatToLookFor: [
        { label: "Total addressable volume", detail: "Does the cluster's combined volume come close to the head term's, even though each phrase alone looks small?" },
        { label: "Difficulty ceiling", detail: "Is the head term's KD realistically winnable for a page with no existing authority?" },
        { label: "Incumbent occupation", detail: "Who already owns the head term, and does the strategy need to beat them head-on or route around them?" },
        { label: "Precedent evidence", detail: "Is there a cited case study with real numbers backing the strategy, not just a name-drop?" },
      ],
      decision: {
        prompt:
          "Strategy A targets 'term insurance' (~74,000 vol, KD 71). Strategy B's six-phrase cluster totals 7,230 vol at an average KD 25. Which should the memo recommend for a page with no existing authority?",
        options: [
          { id: "a", label: "Strategy A, because 74,000 is a much bigger number", correct: false },
          { id: "b", label: "Strategy B, or a cluster-first hybrid", correct: true },
          { id: "c", label: "Neither, wait until the site has more authority before building any page", correct: false },
          { id: "d", label: "Strategy A, since incumbents already ranking there proves the term converts", correct: false },
        ],
        explanation:
          "KD 71 needs a backlink profile a new page doesn't have; KD 25 is inside the realistic-target range, and the cluster's combined volume plus the 'also rank for' effect of one thorough page make it winnable within months, the same way Airbnb's long-tail approach worked around Booking.com and Expedia. Picking the bigger number ignores difficulty, and waiting entirely wastes the specific gap the cluster is built to exploit.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Recommend Strategy B, or a cluster-first hybrid: one comprehensive page built around all six long-tail phrases (7,230 combined vol/mo, avg KD 25), with the broad head term 'term insurance' held as an aspirational internal-linking target for a future pillar page once the cluster page has earned some authority. This mirrors Airbnb's own precedent of 100,000+ page-one long-tail rankings and roughly 400% organic traffic growth between 2013 and 2016, achieved by avoiding a head-on fight with Booking.com and Expedia for 'hotels in New York'.",
      },
      commonMistakes: [
        { mistake: "Comparing strategies by headline volume alone", explanation: "ignoring KD makes 74,000 look like the obvious winner when it's actually the less realistic option for a page with no authority." },
        { mistake: "Treating the cluster as six separate small bets", explanation: "the stronger play is one comprehensive page covering the whole cluster, which also captures the 'also rank for' effect on related phrases." },
        { mistake: "Citing a case study by name without its numbers", explanation: "'the Airbnb example' alone isn't evidence a stakeholder can evaluate; the specific 100,000-keyword and ~400%-growth figures are what make the citation checkable." },
        { mistake: "Assuming the head term must be abandoned entirely", explanation: "keep it as a longer-term target once the cluster page has built authority, this isn't a permanent either/or choice." },
      ],
      keyTakeaway:
        "Choosing between a head term and a long-tail cluster isn't about which number looks bigger, it's about matching the target to the authority the site actually has. A comprehensive cluster page can out-earn a single head-term page in the near term and still leave the door open to the head term later, once the site has earned the right to compete for it.",
    },
  ],

  "on-page-seo": [
    {
      id: "on-page-seo-title-tag-audit",
      tier: "core",
      archetype: "audit",
      title: "The Striking-Distance Audit: Fixing Titles Before Writing Anything New",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real 40-row rank export and a manual crawl of the pages currently sitting on page 2 of Google, audit title tags, URL slugs, and meta descriptions against the lesson's rules, then use the lesson's own CTR-by-position numbers to estimate what fixing them is actually worth.",
      companyId: "zillow",
      scenario:
        "Zillow's organic growth engine runs on pages precisely matched to what searchers type, from the Zestimate tool down to individual page templates. You've inherited a 40-row rank export for a Zillow-style content team, and your manager wants to know: which pages are close enough to page 1 that a title-tag rewrite alone could push them there, without touching a single backlink?",
      brief:
        "Four checks against the same export: title length and keyword position, URL cleanliness, meta description quality, and a final honest estimate of what a fix is worth in clicks, sourced numbers only, no invented precision.",
      mode: "diagnostic",
      conceptsCovered: [
        "Title tag length and keyword position",
        "URL slug clarity",
        "Meta description as a CTR lever, not a ranking factor",
        "Connecting the fix to the lesson's CTR-by-position numbers",
      ],
      skills: ["Title Tags", "URL Structure", "Meta Descriptions", "CTR Optimization"],
      keyQuestion:
        "Which page-2 pages can be pushed to page 1 with a title, URL, or meta fix alone, and what is that fix honestly worth in clicks?",
      prerequisites: [
        "Basic HTML/page-source familiarity, viewing a <title> tag",
        "Access to a crawler tool or the ability to view page source manually",
      ],
      terminology: [
        {
          term: "Title Rewrite",
          definition: "when Google ignores a page's authored <title> tag and generates its own version in search results, common with titles over roughly 60 characters.",
        },
        {
          term: "CTR (Click-Through Rate)",
          definition: "the percentage of people who see a result in search and click it, driven heavily by title and meta description, not by ranking position alone.",
        },
      ],
      steps: [
        {
          stepId: "step-1-title-length",
          concept: "Title tag length and keyword position",
          lessonAnchor: "1-title-tag",
          theoryRecap:
            "The lesson's Title Tag rules: include the primary keyword in the first 3-4 words, keep it under 60 characters, and give a reason to click. Titles over 60 characters are 57% more likely to be rewritten by Google (Ahrefs, 2021).",
          question:
            "Pulled from a manual crawl of three pages in this export, which titles are Google-rewrite risks, and does that correlate with their current rank?",
          toolName: "Screaming Frog SEO Spider",
          where: "View source (or Screaming Frog) on each ranking URL, read the <title> tag.",
          procedure: [
            "Pull the live <title> tag text for each URL in the rank-11-to-20 band",
            "Count characters for each one",
            "Check whether the target keyword appears in the first 3-4 words",
            "Flag anything over 60 characters as a rewrite risk",
          ],
          outputSample:
            "rank 11  project management software comparison\n" +
            "  title: \"Complete Guide to Choosing the Best Project Management Software\n" +
            "          Comparison Tool for Your Team in 2026\"                        (103 chars, high rewrite risk)\n\n" +
            "rank 12  best project management software 2026\n" +
            "  title: \"Best Project Management Software 2026 | Top Picks Reviewed\"    (61 chars, borderline)\n\n" +
            "rank 13  project management software demo\n" +
            "  title: \"Request a Free Project Management Software Demo Today\"        (55 chars, keyword not in first 3-4 words)\n\n" +
            "rank 3   project management software login (for contrast, already page 1)\n" +
            "  title: \"Sign In | Project Management Software Login\"                  (45 chars, short, ranks fine as a navigational query)",
          healthy:
            "Titles under 60 characters with the target keyword in the first 3-4 words, like the rank-3 example.",
          unhealthy:
            "A 103-character title that reads like a run-on sentence, Google is very likely already silently rewriting it to something the team never approved.",
          interpret:
            "The rank-11 page's oversized title is a plausible reason it hasn't broken into page 1: Google may be showing a rewritten version the team has no control over. The rank-12 page's 61-character title is one small edit away from being safe.",
          soWhat: [
            {
              symptom: "A title is 100+ characters",
              action: "Cut it to under 60 characters with the keyword in the first 3-4 words, don't just trim the end, rewrite it",
              effort: "30 min",
            },
            {
              symptom: "A title is 60-70 characters, borderline",
              action: "Trim filler words first (\"Complete Guide to\", \"Everything About\") before rewriting from scratch",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-url-cleanliness",
          concept: "URL slug clarity",
          lessonAnchor: "2-url-slug",
          theoryRecap:
            "The lesson's URL Slug rule: keep it short, readable, and keyword-included, e.g. /blog/on-page-seo, not a query-string or version-suffixed path. Clean URLs earn 45% higher CTR than ones that aren't.",
          question:
            "Pulled alongside the same crawl, which URLs already follow the clean-slug pattern the lesson recommends, and which look like the query-string trap?",
          toolName: "Screaming Frog SEO Spider",
          where: "Same crawl as Step 1, read the address bar for each URL.",
          procedure: [
            "Record the full URL for each of the three pages audited in Step 1",
            "Flag any query strings, version suffixes, or ID-based paths",
            "Check whether the target keyword actually appears in the path itself",
          ],
          outputSample:
            "rank 11  /resources/project-management-software-comparison-guide-updated-2026/\n" +
            "         (79 chars, keyword present but buried under trailing filler)\n\n" +
            "rank 12  /blog/best-project-management-software-2026/\n" +
            "         (51 chars, clean, keyword-led, matches the lesson's example pattern exactly)\n\n" +
            "rank 13  /pmsoftware/demo?ref=nav&utm_source=internal\n" +
            "         (query-string URL, keyword not readably present in the path at all)",
          healthy:
            "A short, keyword-led path with no query string, matching the rank-12 example.",
          unhealthy:
            "A URL carrying tracking parameters or a version suffix (\"-updated-2026\", \"?ref=nav\") that tells a searcher nothing about the page's topic before they click.",
          interpret:
            "The rank-13 page's URL not only fails the clean-slug rule, it actively looks like an internal navigation link rather than a page worth clicking from search results, on top of the title problem flagged in Step 1.",
          soWhat: [
            {
              symptom: "A ranking page's URL has a query string or tracking parameter",
              action: "301-redirect to a clean, keyword-led slug and update internal links to point at the new URL directly",
              effort: "dev ticket",
            },
            {
              symptom: "A URL has the keyword but buried under extra filler words",
              action: "Shorten to the keyword phrase alone where a redirect is low-risk (few backlinks pointing at the old URL)",
              effort: "half day",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-meta-description",
          concept: "Meta description as a CTR lever, not a ranking factor",
          lessonAnchor: "8-meta-description",
          theoryRecap:
            "The lesson is explicit that the meta description is not a direct ranking factor, but it drives click-through rate. Google rewrites it 63% of the time (Ahrefs, 2020), but the original still influences what gets shown, so it's still worth writing well.",
          question:
            "Two meta descriptions from the crawl, one 19 characters, one 240. Which is more likely to survive as-written, and which is doing nothing for CTR either way?",
          toolName: "Screaming Frog SEO Spider",
          where: "Same crawl, read the meta description tag in page source.",
          procedure: [
            "Pull the meta description for the rank-11 and rank-13 pages from Step 1",
            "Count characters against the ~155-character guideline",
            "Check whether either includes the target keyword and a concrete reason to click",
          ],
          outputSample:
            "rank 11  \"Compare project management tools.\"                                    (35 chars, too short, no benefit stated)\n\n" +
            "rank 13  \"Book a live walkthrough of our project management platform, see how\n" +
            "          teams use boards, timelines, automations, integrations, reporting,\n" +
            "          and more, all in a single guided 20-minute session with our team.\"  (240 chars, will be truncated/rewritten)",
          healthy:
            "A meta description in the 120-155 character range that states the keyword and a concrete reason to click, e.g. what the visitor gets in the next 30 seconds.",
          unhealthy:
            "Either extreme: a 35-character description that wastes the space, or a 240-character one Google will cut off mid-sentence, losing the actual call to action.",
          interpret:
            "Neither example is doing its job. The 35-character one isn't a ranking penalty, but it's a wasted CTR opportunity. The 240-character one is actively likely to be truncated or rewritten, per the lesson's cited 63% rewrite rate, meaning the team's actual chosen call-to-action may never reach the searcher.",
          soWhat: [
            {
              symptom: "A meta description is under 60 characters",
              action: "Expand it to 120-155 characters: state the keyword plus a concrete benefit of clicking",
              effort: "5 min",
            },
            {
              symptom: "A meta description runs past 155 characters",
              action: "Cut to the single strongest sentence, put the call-to-action first, not last, since that's what gets truncated",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-ctr-payoff",
          concept: "Connecting the fix to the lesson's CTR-by-position numbers",
          lessonAnchor: "why-it-matters-the-numbers",
          theoryRecap:
            "The lesson cites Backlinko 2022 data: position 1 gets a 27.6% average CTR, position 2 gets about 15%, and the top 3 results combined capture 54.4% of all organic clicks on a page.",
          question:
            "Using only the lesson's cited numbers, what's the honest click estimate if 'project management software comparison' (1,900 vol, rank 11) moves onto page 1 versus moves all the way to #1?",
          toolName: "Google Sheets",
          where: "Spreadsheet, applying the lesson's cited CTR figures directly to the export's volume column.",
          procedure: [
            "Take the keyword's monthly volume from the export (1,900)",
            "Apply the lesson's #1 CTR figure (27.6%) as the only precisely-sourced scenario",
            "For the rank-11 (page 2) scenario, note that it falls outside the 54.4% the top 3 capture combined, and state that as a range, not a fabricated precise percentage",
          ],
          outputSample:
            "1,900 monthly searches for 'project management software comparison'\n\n" +
            "  At rank 11 (page 2): outside the top 3 that capture 54.4% of clicks combined —\n" +
            "    realistically a low-single-digit share of the 1,900 searches; the lesson does\n" +
            "    not cite a precise page-2 CTR, so this stays a range, not a fake-precise number\n" +
            "  At position 1 (27.6% CTR, directly sourced): ~524 clicks/mo, a real estimate the\n" +
            "    lesson's own cited number supports directly",
          healthy:
            "Presenting ~524 clicks/mo as a sourced estimate (grounded in the lesson's cited 27.6% figure) while explicitly flagging the page-2 estimate as a range, not a citation.",
          unhealthy:
            "Inventing a precise page-2 CTR percentage (e.g. \"rank 11 gets 2.3% CTR\") and presenting it to leadership as if it came from the same source as the position-1 number.",
          interpret:
            "The lesson only gives hard numbers for positions 1, 2, and the top-3-combined. Anything about position 11 specifically is a reasonable estimate, not a citation, and the difference matters when you're asking someone to approve engineering time.",
          soWhat: [
            {
              symptom: "The team wants an exact clicks-gained promise before approving the title rewrite",
              action: "Give the range for the current position and the sourced ~524/mo figure for position 1, don't manufacture false precision to make the pitch sound stronger",
              effort: "5 min",
            },
            {
              symptom: "Leadership is skeptical a title rewrite alone can move rank 11 to rank 1",
              action: "Reset expectations explicitly: fixing the title fixes CTR at whatever position the page holds, ranking movement itself needs the on-page fix plus time for Google to re-crawl and re-evaluate",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Confirm real current rank and real CTR per query, replacing the export snapshot with live numbers",
            why: "Free, and the only source of your site's actual click-through rate per query, which no third-party estimate can replace.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Bulk-crawl title tags, URLs, and meta descriptions across up to 500 URLs at once",
            why: "The free tier's 500-URL cap is enough for a full audit of most page-2 candidate lists in one pass.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Surfer SEO",
            role: "Score a rewritten title/content pass against top-ranking competitors before publishing",
            why: "The free path (manual crawl + Search Console) is complete for auditing a handful of pages; Surfer earns its cost once you're running this audit across dozens of pages every month.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Every step above is completable with Search Console and a manual page crawl at zero cost. Screaming Frog's free 500-URL crawl covers most real sites; paid tools only save time at larger scale.",
      },
      datasetUrl: "/project-data/keyword-export.csv",
      deliverable:
        "An audit sheet ranking every page-2/3 row by (proximity to page 1) x (title/URL/meta defect severity), with the top 3 fix candidates called out and a sourced-vs-estimated click projection for each.",
      sampleOutput:
        "Care.com's own inherited audit surfaced a similar pattern: 'daycare cost calculator' sat at rank 9 behind a 94-character title with the keyword buried at the end. Trimming it to 52 characters with the keyword in the first four words was the single highest-leverage 30 minutes spent that sprint, done before any new content got written.",
      successCriteria: [
        "Correctly flagged the 103-character title as a high rewrite-risk before flagging the 61-character borderline one",
        "Identified the query-string URL as the clean-slug violation, not the buried-keyword one",
        "Distinguished the 35-character meta description problem (wasted space) from the 240-character one (truncation risk)",
        "Presented the rank-11 click estimate as a range and the rank-1 estimate as a sourced ~524/mo figure, without inventing false precision for the in-between positions",
      ],
      portfolioReady: true,
      stretch:
        "Run Screaming Frog's free crawl (up to 500 URLs) against your own site, export every title over 60 characters, and fix the top 3 by search volume first.",
      whatToLookFor: [
        { label: "Length risk", detail: "Is the title or meta description long enough to be truncated or entirely rewritten by Google?" },
        { label: "Keyword placement", detail: "Does the target keyword appear early, in the title and the URL path, rather than buried at the end?" },
        { label: "URL cleanliness", detail: "Is the path readable and keyword-led, or does it carry query strings, tracking parameters, or version suffixes?" },
        { label: "Sourced vs estimated", detail: "Is a click estimate backed by a cited CTR figure, or is it an honest range where no precise number exists?" },
      ],
      decision: {
        prompt:
          "The rank-11 page has a 103-character title with the keyword buried mid-sentence. The rank-13 page has a clean 55-character title but the keyword isn't in the first 3-4 words. Which fix should be prioritized first?",
        options: [
          { id: "a", label: "The rank-11 title, since it's both the highest rewrite risk and closer to page 1", correct: true },
          { id: "b", label: "The rank-13 title, since keyword position matters more than character count", correct: false },
          { id: "c", label: "Neither, fix the URL slugs first since they carry more ranking weight", correct: false },
          { id: "d", label: "Both equally, since they're both close to page 1", correct: false },
        ],
        explanation:
          "The audit's own priority formula is proximity to page 1 times defect severity. The rank-11 title scores highest on both: it's a high rewrite-risk (103 characters, Google is likely already showing a version the team never approved) and sits closer to page 1. The rank-13 title is a real but lower-severity issue, borderline length with the keyword just misplaced, and can follow once the higher-severity fix ships.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Prioritize the rank-11 'project management software comparison' page first: a 103-character title puts it at high risk of a Google-generated rewrite, and at 1,900 monthly searches, moving into position 1 would yield an estimated 524 clicks per month based on the lesson's cited 27.6% CTR figure. Trim the title to under 60 characters with the keyword in the first 3-4 words, then correct the URL and meta description issues on the rank-13 page in the same sprint, since none of these fixes require a backlink or new content, only a rewrite and a redirect.",
      },
      commonMistakes: [
        { mistake: "Trimming an oversized title from the end instead of rewriting it", explanation: "a mechanical trim leaves filler words in place and often still buries the keyword; the rule requires the keyword in the first 3-4 words, not just under 60 characters." },
        { mistake: "Redirecting a query-string URL without updating internal links", explanation: "the crawl alone doesn't fix ranking if internal navigation still points at the old, unclean URL." },
        { mistake: "Presenting a page-2 CTR estimate with false precision", explanation: "the lesson only cites hard numbers for positions 1, 2, and the top-3-combined; inventing a specific percentage for rank 11 misrepresents how confident the estimate really is." },
        { mistake: "Assuming a title or meta fix alone will move ranking position", explanation: "these changes improve CTR at whatever position a page holds; actual rank movement still needs Google to re-crawl and re-evaluate the fixed page." },
      ],
      keyTakeaway:
        "A page sitting on page 2 or 3 often needs cleanup, not new content: a shorter title with the keyword up front, a clean URL, and a meta description written for a click can be the fastest available SEO win. The real skill is honest measurement, cite the CTR numbers you actually have and flag the rest as a range, not a guess dressed up as data.",
    },
    {
      id: "on-page-seo-rebuild-the-page",
      tier: "mini",
      archetype: "rebuild",
      title: "Rebuild a Broken Page: Title, URL, H1, Meta, and Internal Links",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a page's on-page elements exactly as a previous owner left them, rewrite every layer of the on-page signal stack correctly, in order, and produce a page spec a real SEO audit would approve without a follow-up round of edits.",
      companyId: "care-com",
      scenario:
        "You're doing a content refresh for a Care.com-style local-care marketplace page targeting 'find a babysitter near me'. The page converts fine when people actually find it, the problem is almost nobody does. Here is the page's on-page elements exactly as they exist today (synthetic, in the style of a real local-marketplace listing page, not Care.com's actual live page).",
      brief:
        "Five elements, five rebuilds: title, URL, H1, meta description, and internal links. Each one gets a before/after and a written reason for the change.",
      mode: "build",
      conceptsCovered: [
        "Title Tag rules",
        "URL Slug cleanliness",
        "H1 Heading matching search intent",
        "Meta Description as a CTR lever",
        "Internal Links and descriptive anchor text",
      ],
      skills: ["On-Page SEO", "CMS Editing", "Internal Linking", "Content Rewriting"],
      keyQuestion:
        "What does a correct, page-1-ready on-page rebuild look like, layer by layer, for a page that ranks nowhere?",
      prerequisites: [
        "Comfort editing a CMS field (title, URL slug, meta description)",
        "Basic HTML heading structure, the difference between an H1 and body text",
      ],
      terminology: [
        {
          term: "301 Redirect",
          definition: "a permanent server-side redirect from an old URL to a new one, preserving existing backlinks and search authority when a URL changes.",
        },
        {
          term: "Anchor Text",
          definition: "the clickable, visible text of a link; descriptive anchor text tells both visitors and search engines what the destination page is about.",
        },
      ],
      steps: [
        {
          stepId: "step-1-rebuild-title",
          concept: "Rebuilding the title tag",
          lessonAnchor: "1-title-tag",
          theoryRecap:
            "The lesson's Title Tag rules: include the primary keyword in the first 3-4 words, keep it under 60 characters, and give a reason to click, written for a human first.",
          question:
            "The current title is just \"Babysitters\", 12 characters, matching nothing close to what a 'near me' searcher typed. Rewrite it under 60 characters with the keyword up front and a trust signal.",
          toolName: "WordPress",
          where: "CMS title field for the page.",
          procedure: [
            "Read the current title and note what's missing: locality, keyword match to 'near me' intent, any reason to click",
            "Draft a version under 60 characters with the keyword in the first 3-4 words",
            "Add one concrete trust or benefit signal (verified, background-checked, free to browse)",
            "Count the final character length before shipping",
          ],
          outputSample:
            "BEFORE:  Babysitters                                                    (12 chars)\n" +
            "AFTER:   Find a Babysitter Near You | Verified Sitters, Care.com         (58 chars)",
          healthy:
            "Keyword-led, under 60 characters, human-readable, includes one concrete trust signal.",
          unhealthy:
            "\"Babysitter Babysitter Near Me Babysitter Search Find Babysitter\", keyword-stuffed, unreadable, exactly the lesson's Common Mistakes warning against stuffing.",
          interpret:
            "The rebuild fixes two problems at once: it now matches the 'near me' search intent explicitly, and it adds a reason to click (verified sitters) that the 12-character original never attempted.",
          soWhat: [
            {
              symptom: "A title tag is generic (a single word, a brand name alone, no keyword)",
              action: "Rewrite with the keyword in the first 3-4 words plus one trust or benefit signal",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rebuild-url",
          concept: "Rebuilding the URL slug",
          lessonAnchor: "2-url-slug",
          theoryRecap:
            "The lesson's URL rule: short, readable, keyword-included, no query strings or version suffixes. Clean URLs earn 45% higher CTR.",
          question:
            "The current URL is a query-string mess with a version suffix. Rewrite it as a clean, keyword-led path.",
          toolName: "WordPress",
          where: "CMS URL/slug field, with a 301 redirect from the old path.",
          procedure: [
            "Read the current URL and identify every non-keyword element: query params, version tags, internal IDs",
            "Draft a short, keyword-led replacement path",
            "Set up a 301 redirect from the old URL to the new one so existing backlinks and bookmarks aren't lost",
          ],
          outputSample:
            "BEFORE:  /s/babysitter-search-page-v3-final?ref=nav\n" +
            "AFTER:   /babysitters/near-me",
          healthy:
            "A short, keyword-led path with a 301 redirect in place from the old URL.",
          unhealthy:
            "Changing the URL without setting up a redirect, which breaks every existing backlink and bookmark pointing at the old path.",
          interpret:
            "The new URL alone earns the lesson's cited 45% CTR bump for keyword-containing URLs, but only the redirect protects the page's existing (if modest) authority from being lost in the switch.",
          soWhat: [
            {
              symptom: "A live URL contains a query string or version suffix",
              action: "Move to a clean keyword-led path and set up a 301 redirect from the old URL",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-rebuild-h1",
          concept: "Rebuilding the H1 heading",
          lessonAnchor: "3-h1-heading",
          theoryRecap:
            "The lesson's H1 rule: the main on-page headline must clearly signal the same topic as the title, use the target keyword once, and read as a human headline, not a keyword string.",
          question:
            "The current H1, \"Welcome to Our Babysitter Finder Tool\", buries the keyword under a generic greeting. Rewrite it to lead with the keyword and mirror the searcher's actual intent.",
          toolName: "WordPress",
          where: "Page template's H1 element.",
          procedure: [
            "Read the current H1 and identify the filler ('Welcome to Our', 'Tool')",
            "Rewrite leading with the keyword phrase",
            "Confirm it doesn't have to match the title tag word-for-word, only the same topic",
          ],
          outputSample:
            "BEFORE:  Welcome to Our Babysitter Finder Tool\n" +
            "AFTER:   Find a Babysitter Near You",
          healthy:
            "Leads with the keyword, reads as a real headline, matches the same topic as the new title without being an identical copy.",
          unhealthy:
            "An H1 that repeats the exact title tag verbatim, which isn't wrong but wastes the chance to reinforce the topic with slightly different, equally relevant wording.",
          interpret:
            "\"Welcome to Our Babysitter Finder Tool\" tells a search engine this page is about a company's tool, not about finding a babysitter. The rebuild puts the actual search intent in the very first words on the page.",
          soWhat: [
            {
              symptom: "An H1 starts with 'Welcome to' or the company name instead of the topic",
              action: "Rewrite to lead with the keyword phrase itself",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-rebuild-meta",
          concept: "Rebuilding the meta description",
          lessonAnchor: "8-meta-description",
          theoryRecap:
            "The lesson's Meta Description rule: not a ranking factor, but write it like ad copy, keyword included, benefit stated, under 155 characters.",
          question:
            "The current meta description is \"Care.com helps you.\", 19 characters with no keyword and no reason to click. Rewrite it under 155 characters with a concrete call to action.",
          toolName: "WordPress",
          where: "CMS meta description field.",
          procedure: [
            "Read the current description and note what's missing: the keyword, a concrete benefit, a call to action",
            "Draft a version stating what the visitor can do on the page in one or two sentences",
            "Count characters and trim to stay under 155",
          ],
          outputSample:
            "BEFORE:  Care.com helps you.                                             (19 chars)\n" +
            "AFTER:   Browse background-checked babysitters near you, compare rates and\n" +
            "         reviews, and message sitters free. Start your search today.      (131 chars)",
          healthy:
            "Under 155 characters, includes the keyword, states a concrete benefit and a call to action.",
          unhealthy:
            "A description so generic it could describe any page on the internet, wasting the CTR opportunity the lesson explains this element exists for.",
          interpret:
            "The rebuild doesn't change ranking directly (the lesson is explicit meta descriptions aren't a ranking factor), but it gives a searcher on the results page an actual reason to pick this link over a competitor's.",
          soWhat: [
            {
              symptom: "A meta description is generic or missing entirely",
              action: "Write one sentence stating the benefit, one sentence with a call to action, under 155 characters total",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-5-rebuild-internal-links",
          concept: "Adding internal links",
          lessonAnchor: "7-internal-links",
          theoryRecap:
            "The lesson's Internal Links rule: add 2-5 links per page to related content, using descriptive anchor text instead of \"click here\", since internal links both help discovery and pass ranking power between pages.",
          question:
            "The current page has zero internal links to related content (nannies, senior care, background checks). Add 3-5 with descriptive anchor text.",
          toolName: "WordPress",
          where: "Page body, contextual links within the existing content.",
          procedure: [
            "Identify related pages that exist on the site (nannies, senior care, background-check guide, rate guide)",
            "Insert 3-5 contextual links within the body copy, not a generic link list at the bottom",
            "Write descriptive anchor text for each, naming the destination topic, not \"click here\" or \"learn more\"",
          ],
          outputSample:
            "BEFORE:  0 internal links on the page\n" +
            "AFTER:   3 internal links added:\n" +
            "  \"compare typical babysitting rates in your area\"  -> /babysitting-rates-guide\n" +
            "  \"browse background-checked nannies\"               -> /nannies\n" +
            "  \"looking for senior care instead?\"                -> /senior-care",
          healthy:
            "3-5 contextual links with descriptive anchor text pointing at genuinely related pages.",
          unhealthy:
            "A single \"click here\" link at the bottom of the page, or a link to an unrelated page just to hit a link-count target.",
          interpret:
            "Zero internal links means Google (and visitors) have no path from this page to related, converting content elsewhere on the site. Descriptive anchor text does double duty: it tells visitors exactly where the link goes, and it tells Google what the destination page is about.",
          soWhat: [
            {
              symptom: "A page has zero or one internal link",
              action: "Add 3-5 contextual links to genuinely related pages with descriptive anchor text",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Confirm the rebuild gets re-crawled and check for any new indexing errors after the redirect",
            why: "Free, and the only way to confirm Google has actually seen and processed the rebuilt page.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "AnswerThePublic",
            role: "Sanity-check the rewritten title/H1 against real phrasing searchers actually use",
            why: "Free, no sign-in, confirms 'near me' framing matches real search behavior instead of guessing.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Clearscope",
            role: "Grade the rebuilt page's content depth against top-ranking competitors",
            why: "The free path (manual rebuild + Search Console verification) is complete for the 5-element rebuild itself; Clearscope is an optional depth check once the on-page basics are fixed.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The rebuild itself needs no paid tool at all, every element above is a manual CMS edit. Paid tools here only add a content-depth check on top of a rebuild that's already correct.",
      },
      deliverable:
        "A fully rebuilt page spec: new title, URL, H1, meta description, and internal link list with anchor text, ready to hand to a developer or CMS editor.",
      sampleOutput:
        "Applying the same 5-layer rebuild to a PolicyBazaar-style term-insurance page: title went from \"Insurance\" (10 chars) to \"Term Insurance Plans Online | Compare & Buy | PolicyBazaar\" (60 chars). H1 changed from \"Insurance Products\" to \"Compare Term Insurance Plans\". The meta description added a concrete CTA (\"Compare premiums from 15+ insurers in 2 minutes\"). Four internal links were added to /term-insurance-calculator, /claim-settlement-ratio, /riders-guide, and /faq.",
      successCriteria: [
        "New title is under 60 characters with the keyword in the first 3-4 words",
        "New URL is a clean, keyword-led slug with no query string or version suffix, and a 301 redirect is specified",
        "New H1 mirrors the exact search intent, not a generic 'Welcome to our...' phrase",
        "New meta description is under 155 characters and includes a concrete reason to click",
        "At least 3 internal links added with descriptive, non-'click here' anchor text",
      ],
      portfolioReady: true,
      stretch:
        "Take one real underperforming page from your own site or a client's, and run this exact 5-layer rebuild against its real current title, URL, H1, meta description, and internal links.",
      whatToLookFor: [
        { label: "Keyword-intent match", detail: "Does every rewritten element (title, H1, URL) lead with the actual search intent, not generic branding?" },
        { label: "Length discipline", detail: "Does the new title and meta description stay inside the character limits that avoid truncation or rewriting?" },
        { label: "Redirect hygiene", detail: "Is a 301 redirect specified whenever a live URL changes, so existing links and bookmarks aren't broken?" },
        { label: "Link quality over count", detail: "Do new internal links use descriptive anchor text pointing to genuinely related pages, not a generic list added just to hit a number?" },
      ],
      decision: {
        prompt:
          "The current URL is /s/babysitter-search-page-v3-final?ref=nav and already has some backlinks pointing at it. What's the correct way to ship the new clean URL /babysitters/near-me?",
        options: [
          { id: "a", label: "Change the URL in the CMS and let the old links 404", correct: false },
          { id: "b", label: "Change the URL and set up a 301 redirect from the old path to the new one", correct: true },
          { id: "c", label: "Keep the old URL to avoid losing backlinks, and skip the rebuild", correct: false },
          { id: "d", label: "Create the new URL as a duplicate page and leave the old one live too", correct: false },
        ],
        explanation:
          "A 301 redirect lets the page earn the clean-URL CTR benefit while passing along the existing, if modest, authority and traffic from any backlinks or bookmarks pointing at the old path. Letting old links 404 throws that authority away, keeping the messy URL forfeits the CTR gain entirely, and a duplicate live page creates a content-duplication problem the rebuild wasn't asked to solve.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Ship all five rebuilt elements together as one page spec: title ('Find a Babysitter Near You | Verified Sitters, Care.com', 58 chars), URL (/babysitters/near-me with a 301 redirect from the old query-string path), H1 ('Find a Babysitter Near You'), meta description (131 chars with a concrete call to action), and three contextual internal links to the rates guide, nannies page, and senior-care page. Shipping the layers together, rather than one at a time, avoids a page that half-matches search intent while the rest of the rebuild is still pending.",
      },
      commonMistakes: [
        { mistake: "Rewriting the title without checking the H1 matches the same topic", explanation: "a title and H1 that point at different topics confuses both searchers and search engines about what the page is actually for." },
        { mistake: "Changing the URL without a 301 redirect", explanation: "breaks every existing backlink and bookmark pointing at the old path, losing whatever authority the page had already earned." },
        { mistake: "Adding internal links just to hit a count", explanation: "a link to an unrelated page or a generic 'click here' anchor wastes the internal-linking opportunity entirely." },
        { mistake: "Treating the meta description as a ranking lever", explanation: "it's a CTR lever, not a ranking factor; rewriting it well won't move the page's position, only its click volume once it's shown." },
      ],
      keyTakeaway:
        "A page that ranks nowhere often has all the same on-page problems at once, generic title, messy URL, buried H1, empty meta, zero internal links, and fixing them together as one coherent spec, not piecemeal, is what turns a page that converts fine once found into one that's actually findable.",
    },
  ],
  "mobile-first-indexing": [
    {
      id: "mobile-first-indexing-parity-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Mobile-First Content Parity Teardown: Care.com Profile Templates",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Identify and flag critical mobile-first indexing and content parity violations between desktop and mobile templates of caregiver profiles.",
      companyId: "care-com",
      scenario: "You are auditing the profile templates for Care.com, the online family care marketplace. Since Google transitioned to a global mobile-first index, any information missing from your mobile template is invisible to search engine crawlers. Following a template update, caregiver profile pages experienced a 15% drop in organic visibility. You need to inspect two mobile template specimens against their desktop equivalents to isolate the defects.",
      brief: "Analyze two specimens of mobile code/interface designs against their desktop baselines. Identify critical indexing and parity defects (such as dropped navigation nodes and missing schema markup) while avoiding false flags for normal responsive design behaviors.",
      mode: "teardown",
      conceptsCovered: [
        "The Content Parity Problem",
        "Why Marketers Should Care, Not Just Developers"
      ],
      skills: ["Mobile-First Indexing", "Content Parity Auditing", "Structured Data", "HTML Teardown"],
      keyQuestion:
        "Which differences between a desktop and mobile template are real indexing defects, and which are just normal responsive design?",
      prerequisites: [
        "Basic HTML reading ability (recognizing tags, attributes, and JSON-LD blocks)",
        "Understanding that Google indexes and ranks using the mobile version of a page",
      ],
      terminology: [
        {
          term: "Mobile-First Indexing",
          definition: "Google's practice of using the mobile version of a page as the primary source for indexing and ranking, meaning content missing from mobile HTML is effectively invisible to Google.",
        },
        {
          term: "Structured Data (JSON-LD)",
          definition: "a standardized code block describing a page's content to search engines, used to generate rich snippets like star ratings in search results.",
        },
      ],
      teardownItems: [
        {
          itemId: "caregiver-profile-schema-parity",
          specimenSource: "synthetic-realistic",
          prompt: "Compare the desktop caregiver profile page template with the mobile template specimen. The desktop page lists full credentials, badges, reviews, and embeds a JSON-LD structured data block. The mobile version features a simplified layout.",
          specimen:
            "=== DESKTOP TEMPLATE HTML ===\n" +
            "<div id=\"caregiver-header\">\n" +
            "  <h1>Sarah M. - Certified Child Care Provider</h1>\n" +
            "  <div class=\"badges\">\n" +
            "    <span class=\"badge-verified\">Background Checked</span>\n" +
            "    <span class=\"badge-cpr\">CPR Certified</span>\n" +
            "  </div>\n" +
            "</div>\n" +
            "<script type=\"application/ld+json\">\n" +
            "{\n" +
            "  \"@context\": \"https://schema.org\",\n" +
            "  \"@type\": \"LocalBusiness\",\n" +
            "  \"name\": \"Sarah M. Child Care\",\n" +
            "  \"description\": \"Certified child care provider with 5 years experience.\",\n" +
            "  \"aggregateRating\": {\n" +
            "    \"@type\": \"AggregateRating\",\n" +
            "    \"ratingValue\": \"4.9\",\n" +
            "    \"reviewCount\": \"24\"\n" +
            "  }\n" +
            "}\n" +
            "</script>\n\n" +
            "=== MOBILE TEMPLATE HTML ===\n" +
            "<div id=\"caregiver-header\">\n" +
            "  <h1>Sarah M.</h1>\n" +
            "  <!-- Badges and schema omitted to improve mobile load speed -->\n" +
            "</div>",
          answerKey: [
            {
              defect: "Omission of structured data (JSON-LD) schema from the mobile template",
              severity: "critical",
              whyItMatters: "Because Google uses the mobile page for indexing and ranking, structured data missing from the mobile version is ignored, causing Care.com caregiver profiles to lose review stars and local rich snippets in search results.",
              lessonRef: "The Content Parity Problem: Structured data added only to desktop templates",
              owner: "developer"
            },
            {
              defect: "Removal of credentials and safety badges ('Background Checked', 'CPR Certified') from the mobile HTML",
              severity: "moderate",
              whyItMatters: "Important topical trust signals and keyword-rich terms ('CPR Certified') present in the desktop HTML are completely missing from the mobile page's DOM, meaning Google cannot see or use these signals for ranking.",
              lessonRef: "The Content Parity Problem: Not a summary. The same text, the same images.",
              owner: "you"
            }
          ],
          distractors: [
            "The caregiver's profile photo uses a different aspect ratio (1:1 square on mobile, 4:3 landscape on desktop) via CSS.",
            "Reviews are collapsed behind an accordion toggle on mobile, requiring a user tap to display visually."
          ],
          partialCredit: true
        },
        {
          itemId: "caregiver-navigation-parity",
          specimenSource: "synthetic-realistic",
          prompt: "Compare the primary navigation links between the desktop navigation bar and the mobile drawer menu. The desktop layout lists links to child care, senior care, pet care, housekeeping, tutoring, and special needs. The mobile menu uses a hamburger toggle.",
          specimen:
            "=== DESKTOP NAVIGATION HTML ===\n" +
            "<nav id=\"main-nav\">\n" +
            "  <a href=\"/child-care\">Child Care</a>\n" +
            "  <a href=\"/senior-care\">Senior Care</a>\n" +
            "  <a href=\"/pet-care\">Pet Care</a>\n" +
            "  <a href=\"/housekeeping\">Housekeeping</a>\n" +
            "  <a href=\"/tutoring\">Tutoring</a>\n" +
            "  <a href=\"/special-needs\">Special Needs</a>\n" +
            "</nav>\n\n" +
            "=== MOBILE DRAWER MENU HTML ===\n" +
            "<div id=\"mobile-menu\" style=\"display: none;\">\n" +
            "  <a href=\"/child-care\">Child Care</a>\n" +
            "  <a href=\"/senior-care\">Senior Care</a>\n" +
            "  <a href=\"/pet-care\">Pet Care</a>\n" +
            "  <!-- Housekeeping, tutoring, and special needs pages removed from DOM navigation list to save vertical space -->\n" +
            "</div>",
          answerKey: [
            {
              defect: "Omission of primary categories (Housekeeping, Tutoring, Special Needs) from the mobile menu HTML",
              severity: "critical",
              whyItMatters: "When links are dropped from the mobile navigation DOM, the mobile crawler cannot discover or pass page rank (link equity) to those subpages. This will severely tank the crawl frequency and ranking authority of the omitted categories.",
              lessonRef: "The Content Parity Problem: Simplified mobile navigation that drops links to save space",
              owner: "you"
            }
          ],
          distractors: [
            "The mobile menu container uses a style of 'display: none' by default and is only toggled visible on click.",
            "The mobile navigation items use larger tap targets (48px) than the desktop version (32px) to prevent usability errors."
          ],
          partialCredit: true
        }
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Inspect rendered HTML via URL Inspection",
            why: "Allows checking what Google actually indexes from mobile templates",
            required: false,
            lastVerified: "2026-08-12"
          }
        ],
        paid: [],
        paidUpgradeNote:
          "This teardown needs no paid tool at all, it's a structural read of two HTML specimens. GSC is free and only worth opening to confirm a finding against a real site."
      },
      deliverable: "A completed audit sheet marking all content parity defects and structured data violations between the mobile and desktop templates.",
      sampleOutput:
        "=== MOBILE PARITY AUDIT: AIRBNB PROPERTY LISTINGS ===\n" +
        "Item Audited: Airbnb property details template (/rooms/12345)\n\n" +
        "DEFECT 1: MISSING STRUCTURED DATA\n" +
        "- Severity: Critical\n" +
        "- Finding: Product and AggregateRating schema are absent in the mobile HTML, though loaded via client-side JavaScript on desktop.\n" +
        "- Impact: Missing rich snippets (rating stars, price badges) in mobile search results.\n" +
        "- Action: Render the JSON-LD schema blocks directly in the server-response mobile HTML template.\n\n" +
        "DEFECT 2: SIMPLIFIED NAVIGATION DROPPING LINKS\n" +
        "- Severity: Critical\n" +
        "- Finding: The mobile site footer omits the 'Explore Nearby Properties' list (12 internal links to local search pages) that exists on desktop.\n" +
        "- Impact: Drops crawl depth and page authority of local property search pages.\n" +
        "- Action: Keep links in the mobile DOM; style them inside a collapsible accordion if they clutter the view.\n\n" +
        "NON-DEFECT 1 (DISTRACTOR CHECK)\n" +
        "- Finding: The 'House Rules' text block is hidden behind a read-more toggle on mobile.\n" +
        "- Analysis: Pass. The full text is present in the mobile HTML DOM, merely styled as hidden until clicked. Googlebot can read it.",
      successCriteria: [
        "Identify that structured data must exist on both desktop and mobile templates.",
        "Spot that dropping internal links from mobile menus reduces search crawl efficiency.",
        "Recognize that visually hidden text (like read-more toggles) is still indexed by Google if it exists in the HTML."
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "DOM presence, not visual display", detail: "Is the content actually missing from the HTML, or just hidden with CSS (which Google can still read)?" },
        { label: "Structured data location", detail: "Does the JSON-LD schema block appear in the mobile HTML, not only the desktop version?" },
        { label: "Link survival", detail: "Do every desktop nav link and category page still exist somewhere in the mobile DOM, even if visually collapsed?" },
        { label: "Severity vs cosmetic change", detail: "Does the difference change what a crawler can discover or index, or is it purely a layout/styling choice?" },
      ],
      decision: {
        prompt:
          "The mobile navigation drops links to Housekeeping, Tutoring, and Special Needs, while the desktop keeps them. The mobile menu also uses 48px tap targets versus 32px on desktop. Which is the real indexing defect?",
        options: [
          { id: "a", label: "The larger tap targets, since they change the layout the most", correct: false },
          { id: "b", label: "The dropped navigation links, since they remove pages from the mobile crawler's discovery path", correct: true },
          { id: "c", label: "Both are equally serious defects", correct: false },
          { id: "d", label: "Neither, since the desktop version still has the full navigation", correct: false },
        ],
        explanation:
          "Because Google indexes using the mobile version, links removed from the mobile DOM stop passing link equity and discovery to those category pages, regardless of what desktop still shows. Tap target size is a usability choice with no indexing consequence. Treating both as equally serious, or assuming desktop's completeness protects mobile-only content, misunderstands how mobile-first indexing actually works.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Two critical defects should be fixed before the next template release: restore the JSON-LD structured data block to the mobile caregiver-profile template (currently desktop-only, costing review-star rich snippets), and restore the Housekeeping, Tutoring, and Special Needs links to the mobile navigation DOM (currently dropped, cutting off crawl discovery to those category pages). Both defects plausibly explain the 15% organic visibility drop that followed the template update, since mobile-first indexing means Google only sees what exists in the mobile HTML.",
      },
      commonMistakes: [
        { mistake: "Flagging visually hidden content as a defect", explanation: "an accordion-collapsed review section is still present in the HTML DOM and fully indexable; only content actually removed from the markup is a real parity problem." },
        { mistake: "Assuming desktop content protects mobile rankings", explanation: "under mobile-first indexing, Google largely ignores what exists only on desktop when the mobile version is what gets crawled and ranked." },
        { mistake: "Treating every mobile/desktop difference as equally severe", explanation: "a different image aspect ratio via CSS is cosmetic, while a missing schema block or dropped nav link changes what Google can index or discover." },
        { mistake: "Missing that dropped links affect more than the current page", explanation: "removing a category link from mobile navigation cuts off crawl discovery and link equity to that entire destination page, not just the menu item." },
      ],
      keyTakeaway:
        "Mobile-first indexing means the mobile HTML is the only version that matters to Google, so a content parity teardown has to separate real defects (content or links missing from the DOM) from harmless responsive design choices (things merely hidden or restyled). Getting that distinction right is what prevents both under-reacting to a real ranking risk and over-flagging normal mobile UX patterns.",
    },
    {
      id: "mobile-first-indexing-gsc-audit",
      tier: "core",
      archetype: "audit",
      title: "Mobile-First Indexing Audit: Diagnosing Chewy's Redesign Regression",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Diagnose a 22% organic traffic drop for Chewy following a responsive site redesign. Run a Search Console indexing audit, a content parity check, and structured data validation to isolate crawling and indexing bottlenecks.",
      companyId: "chewy",
      scenario: "You are the Senior Technical SEO specialist at Chewy (CHWY). Shortly after launching a major site-wide responsive redesign aimed at improving load speeds, organic traffic to Chewy's core product category pages dropped by 22%. Search Console logs indicate that Google transitioned the crawl agent to mobile-first indexing. You have been handed a Search Console indexing export and the HTML source of a sample product page from both desktop and mobile layouts. You must identify why organic rankings collapsed.",
      brief: "Analyze Chewy's Google Search Console page indexing data and compare the desktop vs. mobile HTML source code. Identify the parity and indexing defects that led to ranking losses, verify schema validation failures, and write engineering tickets to resolve them.",
      mode: "diagnostic",
      conceptsCovered: [
        "How to Check Your Own Site",
        "The Content Parity Problem",
        "Why Marketers Should Care, Not Just Developers"
      ],
      skills: ["Technical SEO", "Google Search Console", "Structured Data Validation", "Crawl Diagnostics"],
      keyQuestion:
        "Which of several plausible causes actually explains a 22% organic traffic drop after a mobile-responsive redesign?",
      prerequisites: [
        "Familiarity with Google Search Console's indexing reports",
        "Basic understanding of robots.txt, canonical tags, and structured data (schema)",
      ],
      terminology: [
        {
          term: "Canonical Tag",
          definition: "an HTML tag telling search engines which URL is the definitive version of a page when duplicate or near-duplicate URLs exist.",
        },
        {
          term: "Rich Results",
          definition: "enhanced search listings (star ratings, prices, availability) generated from a page's structured data markup.",
        },
      ],
      steps: [
        {
          stepId: "gsc-page-indexing-analysis",
          concept: "How to Check Your Own Site",
          lessonAnchor: "how-to-check-your-own-site",
          theoryRecap: "Google Search Console's page indexing reports track why pages fail to enter the index. Under mobile-first indexing, Google crawls using the mobile user-agent. If your mobile user-agent is blocked by robots.txt rules, or if mobile parameters create duplicate canonical confusion, pages will drop out of Google's index entirely.",
          question: "Review the Search Console page indexing export data (gsc-indexing-export.csv). Isolate the two primary reasons that explain why pages were blocked from indexing after the redesign, citing specific numbers for each, and explain their impact on the mobile crawler.",
          toolName: "Google Search Console",
          where: "Open the Indexing > Pages report in Google Search Console, or load the exported 'gsc-indexing-export.csv' file in a spreadsheet.",
          procedure: [
            "Open the exported gsc-indexing-export.csv file in a spreadsheet.",
            "Examine the 'reason' column and note the page counts for 'Blocked by robots.txt' and 'Duplicate, no user-selected canonical'.",
            "Identify if the 412 pages blocked by robots.txt are due to mobile crawler rules and trace if they overlap with high-value category pages.",
            "Examine the 182 canonical duplication errors to see if mobile tracking parameters on the links are causing index fragmentation."
          ],
          outputSample:
            "Google Search Console Indexing Audit - Chewy\n" +
            "------------------------------------------\n" +
            "Total Pages Audited: 5,280\n" +
            "Indexed: 3,891\n" +
            "Not Indexed: 1,389\n\n" +
            "Top Issues:\n" +
            "1. Blocked by robots.txt: 412 pages\n" +
            "   - Cause: Legacy 'Disallow: /m/*' and mobile-specific user-agent rules block mobile crawlers from product category pages.\n" +
            "2. Duplicate, no user-selected canonical: 182 pages\n" +
            "   - Cause: Navigation links on mobile insert '?ref=mobile-nav' dynamically, but these lack self-referential canonical tags.\n" +
            "3. Crawled - currently not indexed: 690 pages\n" +
            "   - Cause: Product tabs are loaded via client-side JavaScript on mobile but server-rendered on desktop.",
          healthy: "All high-value search pages are 'Indexed'. No robots.txt directives restrict Googlebot-Mobile from accessing resource directories. Canonical URLs are identical and self-referential on both mobile and desktop views.",
          unhealthy: "412 pages are blocked due to legacy robots.txt rules that restrict mobile user-agents, and 182 pages are flagged as duplicate because mobile-specific parameters confuse the canonical definition.",
          interpret: "Under mobile-first indexing, robots.txt blocks targeting the mobile user-agent are critical errors. If Googlebot-Mobile is disallowed from crawling a directory, that content is permanently excluded from indexation, even if desktop search crawlers are allowed.",
          soWhat: [
            {
              symptom: "412 product category pages are excluded from index due to robots.txt blocks on mobile agents",
              action: "Update robots.txt to remove legacy mobile-agent exclusions and allow Googlebot to crawl all user-facing directories",
              effort: "5 min"
            },
            {
              symptom: "182 pages are flagged as duplicate because mobile navigation appends query parameters without canonical targets",
              action: "Add a self-referential canonical tag on all product detail page variations to resolve parameter duplicates",
              effort: "30 min"
            }
          ],
          owner: "you"
        },
        {
          stepId: "mobile-desktop-html-comparison",
          concept: "The Content Parity Problem",
          lessonAnchor: "the-content-parity-problem",
          theoryRecap: "Google ranks and indexes based on the mobile page. If your mobile page drops copy or links that exist on desktop, those items are invisible to Google. Common parity errors include removing navigation links or truncating description copy for mobile readability.",
          question: "Compare the HTML source code of the desktop page against the mobile viewport layout. Identify which content components and internal links were removed from the mobile DOM and calculate the word count discrepancy.",
          toolName: "Screaming Frog SEO Spider",
          where: "Run a comparative crawl on Screaming Frog or inspect the page source in your browser using the Chrome user-agent override for Googlebot-Mobile.",
          procedure: [
            "Crawl the URL using Screaming Frog, setting the user-agent to Googlebot-Desktop and then Googlebot-Mobile.",
            "Compare the word counts for the '#product-info' container in both crawls.",
            "Examine the list of outlinks from the main header and footer navigation on the mobile DOM compared to desktop.",
            "Identify any missing blocks of text or navigation links on the mobile version."
          ],
          outputSample:
            "HTML Parity Comparison: Chewy Dog Food Page\n" +
            "------------------------------------------\n" +
            "DESKTOP CONTENT METRICS:\n" +
            "  - Word Count: 420 words (includes full feeding guide, nutritional chart, ingredients)\n" +
            "  - Internal Outlinks: 48 links (including sub-categories: Dry Food, Wet Food, Treats)\n\n" +
            "MOBILE CONTENT METRICS:\n" +
            "  - Word Count: 120 words (description is truncated; displays a 'Read details on desktop' fallback)\n" +
            "  - Internal Outlinks: 12 links (hamburger menu drops 36 sub-category links from mobile DOM)\n\n" +
            "PARITY GAP ANALYSIS:\n" +
            "  - Missing words: 300 words (71% text reduction)\n" +
            "  - Missing links: 36 internal links (75% navigation reduction)",
          healthy: "Text, description modules, and internal links match exactly in the HTML of both desktop and mobile page layouts.",
          unhealthy: "The mobile layout removes 300 words of description and drops 36 internal links from the DOM, causing search engines to miss these keywords and crawl pathways.",
          interpret: "Google's indexing engine reads ONLY the mobile HTML. If you truncate descriptions or drop category links on mobile to save layout space, search engines cannot index those terms or pass link equity to those category targets.",
          soWhat: [
            {
              symptom: "300 words of keyword-rich product description are missing from the mobile template DOM",
              action: "Add the full product description to the mobile HTML; use a CSS-based visual expander to keep the UI clean if needed",
              effort: "30 min"
            },
            {
              symptom: "36 sub-category links are omitted from the mobile hamburger menu HTML",
              action: "Ensure the mobile navigation template renders all 36 sub-category links in the DOM, even if hidden visually before tap",
              effort: "half day"
            }
          ],
          owner: "you"
        },
        {
          stepId: "mobile-schema-validation",
          concept: "How to Check Your Own Site",
          lessonAnchor: "how-to-check-your-own-site",
          theoryRecap: "Structured data markup (schema) must exist on both desktop and mobile templates. If schema is only injected on desktop, Google will fail to read it on mobile-first indexing, stripping star ratings, reviews, and prices from search engine results pages.",
          question: "Validate the structured data on Chewy's mobile version. Identify which schema properties are missing from the mobile HTML block that exist in the desktop version.",
          toolName: "Google Search Console",
          where: "Open the Rich Results Test tool (integrated into GSC URL Inspection), enter the mobile URL, and verify the output.",
          procedure: [
            "Input the product URL into Google's Rich Results Test tool, selecting the mobile user-agent.",
            "Compare the identified schema types and properties against the desktop validator output.",
            "Flag any schema blocks that are missing or incomplete on the mobile view."
          ],
          outputSample:
            "Rich Results Audit: Chewy Product Page\n" +
            "-------------------------------------\n" +
            "DESKTOP SCHEMA RESULTS:\n" +
            "  - Product (Name, Brand, SKU, Image)\n" +
            "  - Offer (Price: $24.99, Currency: USD, Availability: InStock)\n" +
            "  - AggregateRating (RatingValue: 4.8, ReviewCount: 312)\n\n" +
            "MOBILE SCHEMA RESULTS:\n" +
            "  - Product (Name, Brand)\n" +
            "  - [MISSING] Offer schema block\n" +
            "  - [MISSING] AggregateRating schema block\n\n" +
            "Parity Status: FAILED. Prices and reviews are missing from the mobile schema payload.",
          healthy: "Identical JSON-LD schema blocks (Product, Offer, and AggregateRating) are present in the HTML header of both desktop and mobile views.",
          unhealthy: "Offer and AggregateRating schema blocks are omitted from the mobile template, stripping stars and pricing from mobile search results.",
          interpret: "Because Google indexing is mobile-first, any schema missing from the mobile HTML is ignored. Rich snippets on search results pages will be stripped if rating and offer schemas are absent on mobile.",
          soWhat: [
            {
              symptom: "Stars and price details disappeared from mobile search result snippets",
              action: "Modify the template file to inject complete Offer and AggregateRating schema blocks into the mobile head HTML",
              effort: "dev ticket"
            }
          ],
          owner: "developer"
        }
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Run URL Inspection and Rich Results verification tests",
            why: "Provides direct diagnostic confirmation of how Google's mobile crawler parses the page",
            required: false,
            lastVerified: "2026-08-12"
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Perform site-wide crawls emulating desktop vs. mobile user-agents",
            why: "Quickly extracts content word counts and navigation links across both templates in bulk",
            required: false,
            lastVerified: "2026-08-12"
          }
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Monitor organic traffic trends and keyword rankings",
            why: "Useful to correlate index parity fixes with recovery in organic traffic over time",
            required: false,
            lastVerified: "2026-08-12"
          }
        ],
        paidUpgradeNote:
          "This audit is complete on the free path: the GSC export and a Screaming Frog crawl are both free-tier. Ahrefs is worth it only for ongoing trend-monitoring after the fix ships, never for finishing the audit itself."
      },
      datasetUrl: "/project-data/gsc-indexing-export.csv",
      deliverable: "A technical specification document for developers listing all mobile-first content parity bugs and GSC indexing problems, along with the corrected code snippets.",
      sampleOutput:
        "=== MOBILE-FIRST SEO FIX SPECIFICATION: SQUARESPACE ===\n" +
        "Audited Domain: Squarespace.com Portfolio Pages\n" +
        "Issue: Redesign dropped portfolio metadata and schema on mobile.\n\n" +
        "TICKET 1: RESTORE CONTENT PARITY IN HTML DESCRIPTION\n" +
        "- Problem: Desktop page description has 350 words of copy describing design features. Mobile page drops this to a 50-word summary to make room for images.\n" +
        "- Fix: Inject the full 350-word description into the mobile HTML DOM. Wrap it in a collapsible container if visual space is needed:\n" +
        "  <div class=\"mobile-accordion-content\" style=\"display:none;\">[Full Description]</div>\n" +
        "- Priority: High\n\n" +
        "TICKET 2: ADD OFFER & RATING SCHEMA TO MOBILE HEAD\n" +
        "- Problem: Product rating schema is generated dynamically by a desktop-only widget, omitting markup on mobile.\n" +
        "- Fix: Update the mobile template head to inject schema:\n" +
        "  <script type=\"application/ld+json\">\n" +
        "  {\n" +
        "    \"@context\": \"https://schema.org\",\n" +
        "    \"@type\": \"Product\",\n" +
        "    \"name\": \"Squarespace Custom Portfolio Theme\",\n" +
        "    \"aggregateRating\": {\n" +
        "      \"@type\": \"AggregateRating\",\n" +
        "      \"ratingValue\": \"4.7\",\n" +
        "      \"reviewCount\": \"148\"\n" +
        "    }\n" +
        "  }\n" +
        "  </script>\n" +
        "- Priority: Critical",
      successCriteria: [
        "Identify specific indexing blockages and duplicate pages from Search Console data.",
        "Compare mobile and desktop DOMs to locate dropped links and compute word count parity discrepancies.",
        "Verify structured data presence on the mobile template.",
        "Translate SEO parity issues into structured developer tasks with clear fixes."
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Scale of impact", detail: "How many pages does each indexing issue affect (412 versus 182 versus 690)?" },
        { label: "Mobile-only vs both", detail: "Does the problem exist only on mobile, or does it affect desktop too?" },
        { label: "Root cause vs symptom", detail: "Is a robots.txt rule or missing schema the actual cause, or just where the symptom shows up?" },
        { label: "Fix complexity", detail: "Is this a 5-minute config change or a dev-ticket-level template fix?" },
      ],
      decision: {
        prompt:
          "Search Console shows 412 pages blocked by robots.txt, 182 flagged as duplicate with no user-selected canonical, and 690 'crawled - currently not indexed'. Which issue should be fixed first?",
        options: [
          { id: "a", label: "The 690 'crawled - currently not indexed' pages, since it's the largest number", correct: false },
          { id: "b", label: "The 412 robots.txt-blocked pages, since Googlebot-Mobile can't even crawl them", correct: true },
          { id: "c", label: "The 182 canonical duplicates, since duplicate content is always the worst SEO problem", correct: false },
          { id: "d", label: "All three simultaneously in one ticket, priority doesn't matter", correct: false },
        ],
        explanation:
          "A robots.txt block is the most severe of the three: it prevents Googlebot-Mobile from crawling the page at all, so nothing downstream, content, links, schema, can be indexed regardless of quality. The 690 'crawled not indexed' pages were at least reached, and the 182 duplicates were at least crawled and just need canonical clarification. Fixing the total block first removes the hardest ceiling on visibility, even though its page count is smaller than the other two combined.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "The redesign's mobile-first indexing collapse traces to three separate defects, all needing developer tickets: legacy robots.txt rules blocking Googlebot-Mobile from 412 category pages, 182 pages fragmented by mobile-only tracking parameters lacking self-referential canonicals, and Offer and AggregateRating schema present on desktop but missing from the mobile HTML head, stripping stars and pricing from mobile search results. Fix the robots.txt block first, since it prevents any crawling at all; the canonical and schema fixes can proceed in parallel once crawling is restored.",
      },
      commonMistakes: [
        { mistake: "Assuming a traffic drop after a redesign is caused by one thing", explanation: "the Chewy case has three independent, compounding causes; fixing only one leaves the others suppressing traffic." },
        { mistake: "Treating a robots.txt block the same priority as a content parity gap", explanation: "a full crawl block is more severe than a content or schema gap, since nothing can be indexed at all until crawling is restored." },
        { mistake: "Confusing 'crawled - currently not indexed' with a robots.txt block", explanation: "these are distinct problems in the Search Console report requiring different fixes, not interchangeable line items." },
        { mistake: "Validating schema only with a desktop user-agent", explanation: "checking structured data on desktop misses exactly the failure mobile-first indexing causes; the mobile user-agent must be checked directly." },
      ],
      keyTakeaway:
        "A single traffic drop after a redesign can have multiple independent causes stacked on top of each other, a crawl block, a canonicalization gap, and a schema gap, each needing its own fix. Reading the Search Console data by root cause, not just by page count, is what turns a vague 'traffic dropped' report into a prioritized set of developer tickets.",
    }
  ],

  "how-search-works": [
    {
      id: "how-search-works-outrank-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Why This Page Outranks Yours: Reverse-Engineering the Crawl-Index-Rank Gap",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two competing help-center pages targeting the same query, use the lesson's three-stage pipeline to determine whether the gap is a crawl/index problem or a genuine ranking-signal gap, before touching a word of content.",
      companyId: "zendesk",
      scenario:
        "You're a content marketer on Zendesk's SEO team. A competitor's help-center article on 'ticketing system integrations' has outranked Zendesk's equivalent page for six months. Before briefing a content rewrite, you need to rule out the boring explanation first: maybe Zendesk's page never even cleared indexing.",
      brief:
        "Two passes: confirm both pages actually reached Stage 2 (Indexing), then compare the Stage 3 (Ranking) signals that would explain the gap once indexing is ruled out.",
      mode: "diagnostic",
      conceptsCovered: ["Stage 2: Indexing", "Stage 3: Ranking"],
      skills: ["Search Fundamentals", "Competitive SEO Analysis", "Backlink Analysis", "Diagnostic Reasoning"],
      keyQuestion:
        "Is a competitor outranking you because your page never cleared indexing, or because of a genuine ranking-signal gap?",
      prerequisites: [
        "Understanding of the crawl-index-rank pipeline",
        "Access to Google Search Console for the page being diagnosed",
      ],
      terminology: [
        {
          term: "Referring Domains",
          definition: "the number of unique websites linking to a page, used as a proxy for how much external authority that page has earned.",
        },
        {
          term: "URL Inspection",
          definition: "a Google Search Console tool that reports a specific URL's live indexing and crawl status.",
        },
      ],
      steps: [
        {
          stepId: "step-1-confirm-indexed",
          concept: "Stage 2: Indexing",
          lessonAnchor: "stage-2-indexing",
          theoryRecap:
            "The lesson's Stage 2 explains that not every crawled page gets indexed, Google skips duplicate, thin, blocked, or low-quality pages, and only indexed pages can appear in search results at all.",
          question:
            "Before assuming this is a ranking problem, confirm: is Zendesk's page even indexed? Use URL Inspection to check both pages' indexing status.",
          toolName: "Google Search Console",
          where: "Search Console > URL Inspection tool, enter each URL individually.",
          procedure: [
            "Open URL Inspection in Search Console and paste Zendesk's 'ticketing system integrations' help article URL",
            "Note the 'URL is on Google' status and the last crawl date",
            "Repeat for the competitor's equivalent URL using a separate Search Console property or a site: search operator as a proxy",
            "Confirm both pages are indexed before moving to Stage 3",
          ],
          outputSample:
            "URL Inspection results\n" +
            "------------------------------------------\n" +
            "Zendesk: /hc/en-us/articles/ticketing-integrations\n" +
            "  Status: URL is on Google\n" +
            "  Last crawled: 6 days ago\n" +
            "  Indexing: Indexed, submitted via sitemap\n\n" +
            "Competitor page (via site: search + cache check):\n" +
            "  Status: Indexed, appears in site: search results\n" +
            "  Last visible change: within past 2 weeks\n\n" +
            "Conclusion: Both pages are indexed. This rules out a Stage 1/Stage 2\n" +
            "problem entirely, the gap is happening in Stage 3, ranking.",
          healthy:
            "Both pages indexed and recently crawled, confirming the investigation should move to ranking signals, not crawl/index troubleshooting.",
          unhealthy:
            "Assuming a ranking problem and rewriting content for weeks before ever checking whether Zendesk's own page was actually indexed.",
          interpret:
            "Skipping this check is the single most common wasted-effort mistake in SEO: teams debug 'why don't we rank' when the real question is 'are we even in the index'. Ruling it out first in five minutes saves a week of misdirected work.",
          soWhat: [
            {
              symptom: "Nobody has confirmed the underperforming page is actually indexed",
              action: "Run URL Inspection on it before writing a single new sentence",
              effort: "5 min",
            },
            {
              symptom: "Team debates content rewrites without knowing if this is even a content problem",
              action: "Rule out Stage 1/2 first, then move to Stage 3 signal analysis",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ranking-signal-gap",
          concept: "Stage 3: Ranking",
          lessonAnchor: "stage-3-ranking",
          theoryRecap:
            "The lesson's Stage 3 lists five ranking signal families, keyword relevance, backlink authority, page experience, content quality, and search intent match, and notes Google weighs 200+ signals in real time.",
          question:
            "With indexing ruled out, which of the five signal families most plausibly explains why the competitor outranks Zendesk, backlink authority or content depth?",
          toolName: "Ubersuggest",
          where: "Ubersuggest > enter both URLs individually to check backlink count and referring domains (free tier).",
          procedure: [
            "Run Zendesk's URL through Ubersuggest's free backlink checker, note referring domains",
            "Run the competitor's URL through the same check",
            "Open both pages side by side and count word count / subheadings as a rough content-depth proxy",
            "Compare both numbers against the lesson's 'backlink authority' and 'content quality' signal descriptions",
          ],
          outputSample:
            "Ubersuggest backlink comparison\n" +
            "------------------------------------------\n" +
            "Zendesk page:      340 words, 4 subheadings, 3 referring domains\n" +
            "Competitor page:  1,450 words, 11 subheadings, 22 referring domains\n\n" +
            "Gap: the competitor page covers 4 integration platforms in depth with\n" +
            "screenshots; Zendesk's page lists integrations in one paragraph with\n" +
            "no walkthroughs. Referring domains are roughly 7x higher.",
          healthy:
            "Recognizing that a 22-referring-domain, 1,450-word comprehensive guide beats a 3-referring-domain, 340-word list on both authority and content-quality signals simultaneously.",
          unhealthy:
            "Blaming 'the algorithm' or requesting a manual ranking review from Google, when the actual gap is a plainly visible content-depth and backlink difference.",
          interpret:
            "When both pages are indexed, a large gap in referring domains and content depth is almost always the real explanation, not a mysterious ranking penalty. The fix is a content and outreach brief, not a technical ticket.",
          soWhat: [
            {
              symptom: "Competitor's page has 7x the referring domains and 4x the word count",
              action: "Brief a content expansion covering the same integration platforms with screenshots, then pitch 3-5 relevant sites for links",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Confirm indexing status before diagnosing anything else",
            why: "Free, and the only tool that shows your actual index status per URL.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Ubersuggest",
            role: "Free backlink and referring-domain check for both URLs",
            why: "Ubersuggest's free tier is enough to spot a large authority gap without a paid subscription.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Deeper backlink-quality analysis (anchor text, domain rating, link velocity)",
            why: "Ubersuggest's free tier confirms there IS a gap; Ahrefs is only worth it once you need to plan a specific outreach campaign around it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This diagnostic is complete on the free path. Ahrefs only earns its cost once you're building a targeted outreach list, not for the initial gap check.",
      },
      deliverable:
        "A one-paragraph diagnostic verdict: indexed or not, and if indexed, which signal family (authority vs. content depth) explains the gap, with the specific numbers.",
      sampleOutput:
        "Running the same two-step check on Squarespace's own template gallery page against a competing builder's equivalent page found both indexed, with Squarespace's page actually carrying more referring domains but roughly half the word count. The verdict there was a content-depth gap, not authority, a completely different fix than a backlink campaign.",
      successCriteria: [
        "Confirmed both pages are indexed before drawing any ranking conclusion",
        "Pulled real referring-domain counts for both URLs, not an estimate",
        "Named the specific signal family (authority or content depth) that best explains the gap",
        "Did not recommend a content rewrite before checking indexing status first",
      ],
      portfolioReady: true,
      stretch: "Run this same two-step check on a page of your own that underperforms a known competitor.",
      whatToLookFor: [
        { label: "Indexing status first", detail: "Has the underperforming page actually cleared Stage 2 indexing before any ranking analysis begins?" },
        { label: "Signal family", detail: "Which of the five ranking-signal families (relevance, authority, experience, quality, intent match) shows the biggest gap?" },
        { label: "Magnitude of the gap", detail: "Is the difference in referring domains or content depth large enough to plausibly explain months of underranking?" },
        { label: "Fix type", detail: "Does the evidence point to a content brief, a link-outreach brief, or a technical ticket?" },
      ],
      decision: {
        prompt:
          "Zendesk's page is confirmed indexed and recently crawled. The competitor's page has 22 referring domains and 1,450 words versus Zendesk's 3 referring domains and 340 words. What should the diagnostic verdict recommend?",
        options: [
          { id: "a", label: "Request a manual ranking review from Google, since indexing is fine", correct: false },
          { id: "b", label: "Brief a content-depth expansion and a targeted link outreach campaign", correct: true },
          { id: "c", label: "Rewrite the page's title tag only, since indexing already confirms the technical setup is fine", correct: false },
          { id: "d", label: "Conclude nothing can be done since the competitor has 7x more referring domains", correct: false },
        ],
        explanation:
          "With indexing ruled out, a roughly 7x referring-domain gap and 4x word-count gap point squarely at Stage 3's authority and content-quality signals, exactly the two most fixable levers here. A manual review request doesn't apply since there's no indexing or penalty issue. A title tag alone doesn't address a real content-depth and authority gap this large, and 'nothing can be done' ignores that both authority and content depth are gaps a team can close with effort.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Zendesk's help-center page is fully indexed, so the six-month ranking gap against the competitor is a genuine Stage 3 signal gap, not a crawl or index problem. The competitor page carries roughly 7x the referring domains (22 versus 3) and 4x the word count (1,450 versus 340), with in-depth screenshots covering 4 integration platforms where Zendesk's page offers a single paragraph. Recommend a two-part brief: expand the page's content depth to match the competitor's coverage, and pursue outreach to 3-5 relevant sites to begin closing the backlink gap.",
      },
      commonMistakes: [
        { mistake: "Jumping straight to content rewrites without confirming indexing", explanation: "the most common wasted-effort mistake in SEO, weeks of content work can't fix a page that was never truly competing in the ranking stage at all." },
        { mistake: "Blaming 'the algorithm' for a plainly visible gap", explanation: "a 7x referring-domain and 4x word-count difference is a measurable, explainable gap, not a mysterious penalty." },
        { mistake: "Comparing word count without checking content depth", explanation: "a longer page padded with filler isn't the same signal as a page genuinely covering more topics in detail; check subheadings and coverage, not just word count." },
        { mistake: "Treating authority and content depth as the same fix", explanation: "a content brief and a link-outreach brief are different deliverables with different timelines; conflating them produces a vague action plan." },
      ],
      keyTakeaway:
        "Before diagnosing why a page underperforms, rule out the boring explanation first: confirm it's actually indexed. Once that's confirmed, a ranking gap almost always traces to a measurable signal, backlink authority or content depth, that points to a specific, fixable brief rather than a mysterious algorithm problem.",
    },
    {
      id: "how-search-works-crawl-budget-audit",
      tier: "core",
      archetype: "audit",
      title: "The Crawl Budget Audit: Finding Where Snowflake's Docs Section Loses Google's Attention",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Run a three-part crawl-budget audit, Crawl Stats, orphan-page detection, and the Indexing report, to find exactly where Google's limited daily crawl allowance is being wasted on a large documentation site, and reclaim it for pages that actually need it.",
      companyId: "snowflake",
      scenario:
        "Snowflake's technical marketing team maintains thousands of docs pages. New docs for a just-shipped feature sometimes take three weeks to appear in Google, while old deprecated pages get recrawled daily. You're asked to find out why, using the lesson's Stage 1 and Stage 2 framework.",
      brief:
        "Three checks in sequence: read Google's own account of where it spends its daily crawl budget on the site, find pages no internal link points to, then confirm which of the resulting problems are crawl issues versus indexing issues.",
      mode: "diagnostic",
      conceptsCovered: [
        "Crawl budget as a finite daily allocation",
        "Orphan pages that crawlers rarely find",
        "Not every crawled page gets indexed",
      ],
      skills: ["Crawl Budget Management", "Orphan Page Detection", "Google Search Console", "Site Architecture"],
      keyQuestion:
        "Where is Google's limited daily crawl budget being wasted on a large site, and how does that connect to pages not getting indexed?",
      prerequisites: [
        "Familiarity with Google Search Console's Crawl Stats and Indexing reports",
        "Basic understanding of internal linking and sitemaps",
      ],
      terminology: [
        {
          term: "Crawl Budget",
          definition: "the rough daily limit on how many pages Googlebot will crawl on a given site, which can be consumed by low-value pages at the expense of important ones.",
        },
        {
          term: "Orphan Page",
          definition: "a published page that no other page on the site links to, making it much harder for crawlers to discover even if it's listed in a sitemap.",
        },
      ],
      steps: [
        {
          stepId: "step-1-crawl-stats",
          concept: "Crawl budget as a finite daily allocation",
          lessonAnchor: "stage-1-crawling",
          theoryRecap:
            "The lesson explains Google allocates a crawl budget, a rough limit on how many pages Googlebot will crawl per day, and that sites with thousands of low-quality or duplicate pages can see important pages crawled infrequently or skipped.",
          question:
            "Snowflake's docs site has thousands of URLs. Which page types is Googlebot actually spending its daily crawl budget on, and is it the pages that matter?",
          toolName: "Google Search Console",
          where: "Search Console > Settings > Crawl stats.",
          procedure: [
            "Open Settings > Crawl stats in Search Console",
            "Review the 'By response' and 'By file type' breakdowns",
            "Check the 'By purpose' split between Discovery (new URLs) and Refresh (recrawling known URLs)",
            "Note which page type is consuming the largest share of daily crawl requests",
          ],
          outputSample:
            "Crawl Stats, past 90 days\n" +
            "------------------------------------------\n" +
            "Total crawl requests: 84,200/day average\n" +
            "By purpose: Refresh 71%, Discovery 29%\n" +
            "By response: 200 OK 82%, 301 redirect 11%, 404 not found 5%, 5xx 2%\n" +
            "Top crawled path pattern: /docs/deprecated/* (19% of all requests)\n" +
            "                          /docs/v1-legacy/* (14% of all requests)\n\n" +
            "New feature docs published this week: crawled within 48 hours for\n" +
            "only 3 of 11 new pages.",
          healthy:
            "The majority of crawl requests hit current, high-value docs paths, and new pages get crawled within a day or two of publishing.",
          unhealthy:
            "33% of daily crawl requests go to deprecated and legacy doc paths that no longer need frequent recrawling, while 8 of 11 new pages wait longer than 48 hours.",
          interpret:
            "Google spends crawl budget on what it has historically found valuable to recrawl, deprecated paths that still get linked internally keep pulling budget away from new content. This is exactly the lesson's warning about low-quality or duplicate pages starving important pages of crawl attention.",
          soWhat: [
            {
              symptom: "19% + 14% = 33% of daily crawl budget goes to deprecated/legacy doc paths",
              action: "noindex or 410 the deprecated paths and remove remaining internal links to them",
              effort: "dev ticket",
            },
            {
              symptom: "8 of 11 new feature docs took longer than 48 hours to be crawled",
              action: "Add new docs to the XML sitemap immediately at publish time and request indexing via URL Inspection for launch-critical pages",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-orphan-pages",
          concept: "Orphan pages that crawlers rarely find",
          lessonAnchor: "stage-1-crawling",
          theoryRecap:
            "The lesson defines an orphan page as one no other page links to, and warns crawlers rarely find pages like this even if they're technically published.",
          question:
            "Are any of Snowflake's new feature docs orphaned, published but not linked from anywhere else on the site?",
          toolName: "Screaming Frog SEO Spider",
          where: "Screaming Frog > List mode, crawl the sitemap URLs, then cross-reference against a standard crawl from the homepage.",
          procedure: [
            "Crawl the site normally from the homepage in Spider mode (up to 500 URLs free)",
            "Switch to List mode and upload the XML sitemap's URL list",
            "Compare the two lists: any sitemap URL that never appeared in the homepage-start crawl is an orphan candidate",
            "Manually check the top 5 orphan candidates for at least one internal link pointing to them",
          ],
          outputSample:
            "Orphan Page Check\n" +
            "------------------------------------------\n" +
            "Sitemap URLs: 3,140\n" +
            "Found via homepage-start crawl: 3,047\n" +
            "Orphan candidates (in sitemap, not reached by crawl): 93\n\n" +
            "Sample of 5 orphan candidates:\n" +
            "  /docs/features/dynamic-tables-preview   0 internal links found\n" +
            "  /docs/features/cortex-search-beta       0 internal links found\n" +
            "  /docs/reference/api-v3-changelog        0 internal links found\n" +
            "  /docs/features/data-clean-rooms         1 internal link (from a\n" +
            "                                            deprecated page, itself\n" +
            "                                            unlinked)\n" +
            "  /docs/features/snowpark-container       0 internal links found",
          healthy:
            "Every new feature doc has at least one internal link from a currently-linked, non-deprecated page within a day of publishing.",
          unhealthy:
            "93 sitemap URLs, including several just-launched feature docs, have zero internal links pointing to them anywhere on the crawlable site.",
          interpret:
            "A page in the sitemap is a hint to Google, not a guarantee, but an orphan page has no link equity flowing to it and depends entirely on the sitemap hint. That's a much weaker discovery signal than an actual internal link, which is exactly why these pages take three weeks instead of three days.",
          soWhat: [
            {
              symptom: "93 sitemap URLs have zero internal links pointing to them",
              action: "Add each new feature doc to its category's docs index page and at least one related-docs sidebar the day it publishes",
              effort: "half day",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-indexing-reasons",
          concept: "Not every crawled page gets indexed",
          lessonAnchor: "stage-2-indexing",
          theoryRecap:
            "The lesson lists four reasons Google skips indexing a crawled page: duplicate/near-duplicate content, thin pages, pages blocked by robots.txt or noindex, and pages it deems low-quality or spammy.",
          question:
            "Of the pages that ARE being crawled, how many are failing to convert into indexed pages, and why?",
          toolName: "Google Search Console",
          where: "Search Console > Indexing > Pages report.",
          procedure: [
            "Open Indexing > Pages in Search Console",
            "Review the 'Why pages aren't indexed' table, sorted by page count",
            "Cross-reference the largest 'Duplicate' bucket against the deprecated/legacy paths found in Step 1",
            "Note whether any of the 93 orphan candidates from Step 2 also appear in the 'Discovered, currently not indexed' bucket",
          ],
          outputSample:
            "Page Indexing Report\n" +
            "------------------------------------------\n" +
            "Indexed: 2,690\n" +
            "Not indexed: 450\n" +
            "  Duplicate, Google chose different canonical: 210 (mostly /docs/v1-legacy/*)\n" +
            "  Crawled, currently not indexed: 140 (mix of thin API-reference stubs)\n" +
            "  Discovered, currently not indexed: 65 (overlaps with 41 of the 93\n" +
            "                                          orphan candidates from Step 2)\n" +
            "  Blocked by robots.txt: 35 (an old /docs/internal/* disallow rule)",
          healthy:
            "Not-indexed pages are a small, explainable fraction, mostly intentional (internal-only paths correctly blocked).",
          unhealthy:
            "210 legacy pages are creating duplicate-content confusion, and 41 of the same orphan pages flagged in Step 2 are stuck in 'Discovered, currently not indexed' limbo, exactly the outcome an orphan page produces.",
          interpret:
            "The three checks now tell one consistent story: crawl budget is going to legacy paths (Step 1), new docs are orphaned (Step 2), and those same orphaned docs are stuck as 'discovered but not indexed' because Google found the URL via the sitemap but never found a reason to prioritize crawling it (Step 3). Fixing internal linking solves all three at once.",
          soWhat: [
            {
              symptom: "41 new docs are stuck in 'Discovered, currently not indexed'",
              action: "Once internal links are added (Step 2 fix), request indexing for these specific URLs via URL Inspection to speed up the first recrawl",
              effort: "30 min",
            },
            {
              symptom: "210 legacy pages are flagged as duplicate with a Google-chosen canonical",
              action: "Add explicit self-referential or cross-referential canonical tags to the legacy docs instead of leaving the choice to Google",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Read Crawl Stats and the Page Indexing report",
            why: "Free, and the only tool showing Google's own account of what it crawled and why it didn't index something.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Cross-reference sitemap URLs against a real crawl to find orphan pages",
            why: "Free tier crawls up to 500 URLs at once and supports List mode for exactly this sitemap-vs-crawl comparison.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Monitor whether the crawl-budget fixes actually shift indexing speed for future launches over time",
            why: "The free path fully diagnoses the problem; Ahrefs is only useful afterward, to track whether the fix worked over following months.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This audit is complete on Search Console and Screaming Frog's free tiers. Ahrefs is only useful afterward, to track whether the fix worked.",
      },
      deliverable:
        "A crawl-budget remediation memo covering three fixes: deprecate/noindex the legacy paths draining budget, internal-link every new doc at publish time, and add explicit canonicals to duplicate-flagged legacy pages.",
      sampleOutput:
        "The same three-part audit on Delhivery's logistics-API documentation found a similar pattern: 27% of crawl budget going to a retired v1 API reference, 60+ new endpoint docs with zero internal links, and a matching spike in 'Discovered, not indexed' pages. The fix list looked almost identical.",
      successCriteria: [
        "Identified the specific page-type pattern consuming disproportionate crawl budget (not just 'crawl budget is wasted somewhere')",
        "Found and listed real orphan-page candidates by cross-referencing sitemap vs. crawl-discovered URLs",
        "Connected the orphan pages to the matching 'Discovered, not indexed' Search Console reason, showing the causal chain",
        "Proposed fixes for all three findings, not just the most obvious one",
      ],
      portfolioReady: true,
      stretch: "Run the Crawl Stats + orphan-page cross-reference on your own site and see if any of your own recent posts are silently orphaned.",
      whatToLookFor: [
        { label: "Budget allocation", detail: "Is crawl budget going disproportionately to low-value paths (deprecated, legacy) instead of current content?" },
        { label: "Discovery signal strength", detail: "Does a new page have a real internal link, or only a sitemap listing?" },
        { label: "Causal chain", detail: "Do the findings from separate reports (Crawl Stats, orphan check, Indexing report) point to the same root cause?" },
        { label: "Intentional vs accidental exclusion", detail: "Is a page not indexed because of a deliberate robots.txt or noindex rule, or an accidental orphaning?" },
      ],
      decision: {
        prompt:
          "Crawl Stats shows 33% of budget going to deprecated/legacy paths. The orphan check finds 93 sitemap URLs with zero internal links. The Indexing report shows 41 of those same 93 pages stuck in 'Discovered, currently not indexed'. What's the single highest-leverage fix?",
        options: [
          { id: "a", label: "Request indexing for the 41 stuck pages via URL Inspection and stop there", correct: false },
          { id: "b", label: "Add internal links to the new docs and noindex the deprecated paths, addressing both root causes together", correct: true },
          { id: "c", label: "Increase the sitemap submission frequency to make Google recrawl faster", correct: false },
          { id: "d", label: "Wait for Google to naturally reprioritize crawling over the next few months", correct: false },
        ],
        explanation:
          "The three checks tell one consistent story: crawl budget is being drained by legacy paths, and new docs are undiscoverable because they lack real internal links, which is exactly why they land in 'Discovered, currently not indexed'. Fixing internal linking and reclaiming budget from deprecated paths addresses the root cause for all 93 orphan candidates, not just the 41 already flagged. Requesting indexing one by one treats the symptom without fixing discovery, resubmitting the sitemap doesn't add a missing internal link, and waiting leaves new feature docs invisible for weeks.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Reclaim Snowflake's crawl budget with three parallel fixes: noindex or 410 the deprecated and legacy doc paths currently consuming 33% of daily crawl requests, add each new feature doc to its category index page and a related-docs sidebar at publish time to eliminate orphaning, and add explicit canonical tags to the 210 legacy pages currently flagged as duplicate with a Google-chosen canonical. These three fixes address the full causal chain found in this audit, wasted budget, undiscoverable new pages, and unindexed duplicates, rather than treating each report finding as an isolated issue.",
      },
      commonMistakes: [
        { mistake: "Treating each Search Console report in isolation", explanation: "Crawl Stats, orphan detection, and the Indexing report describe the same underlying problem here; reading them separately misses the causal chain." },
        { mistake: "Requesting indexing for stuck pages without fixing internal linking", explanation: "a manual index request can nudge one URL, but the same orphaning problem recurs for every future doc published the same way." },
        { mistake: "Assuming a sitemap listing is enough to guarantee discovery", explanation: "a sitemap is a hint, not a guarantee; an actual internal link is a much stronger discovery signal." },
        { mistake: "Fixing only the highest-percentage finding", explanation: "the 33% crawl-budget stat looks like the biggest number, but leaving orphaning and duplicate-canonical issues unaddressed means new content keeps landing in the same limbo." },
      ],
      keyTakeaway:
        "A crawl budget problem rarely shows up as one clean finding, it surfaces as related symptoms across multiple Search Console reports: wasted budget on stale paths, undiscoverable new pages, and pages stuck unindexed. Connecting those symptoms into one causal chain, then fixing the root cause, internal linking and budget reclamation, rather than patching individual URLs, is what actually closes the gap.",
    },
  ],

  "technical-seo": [
    {
      id: "technical-seo-indexability-triage",
      tier: "mini",
      archetype: "audit",
      title: "The Indexability Triage: Reading a Real GSC Export Before Touching Code",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real 5,280-URL Google Search Console indexing export, separate the indexability pillar's two biggest failure reasons and decide which one is a five-minute robots.txt fix and which one needs a content-quality decision.",
      companyId: "squarespace",
      scenario:
        "You're a technical SEO analyst supporting Squarespace's own Help Center documentation. A GSC export just landed showing 1,389 of 5,280 help-doc URLs are not indexed. Leadership wants to know: is this a quick technical fix, or a bigger content problem?",
      brief:
        "Two passes over the same export: quantify the robots.txt-blocked bucket and its likely one-line fix, then quantify the 'crawled but not indexed' bucket and explain why that one can't be fixed with a config change alone.",
      mode: "diagnostic",
      conceptsCovered: ["robots.txt", "Indexability"],
      skills: ["Technical SEO", "robots.txt", "Indexability Diagnosis", "Content Consolidation"],
      keyQuestion:
        "Given a real GSC indexing export, which non-indexed bucket is a same-day config fix and which needs a content decision?",
      prerequisites: [
        "Basic spreadsheet filtering and sorting",
        "Familiarity with reading a robots.txt file",
      ],
      terminology: [
        {
          term: "robots.txt",
          definition: "a text file at a site's root that tells crawlers which paths they may or may not request; a Disallow rule blocks Google from crawling matching URLs entirely.",
        },
        {
          term: "Crawled, Currently Not Indexed",
          definition: "a Search Console status meaning Google successfully crawled a page but chose not to store it in the index, usually due to thin or duplicate content.",
        },
      ],
      steps: [
        {
          stepId: "step-1-robots-block",
          concept: "robots.txt",
          lessonAnchor: "4-robotstxt",
          theoryRecap:
            "The lesson warns a single robots.txt typo, like 'Disallow: /' with nothing else, can block Google from an entire site overnight, and that this is one of the most common and damaging technical SEO errors.",
          question:
            "412 of the 5,280 URLs in this export are 'Blocked by robots.txt'. Is that a content-quality problem or a one-line config fix?",
          toolName: "Google Search Console",
          where: "Import gsc-indexing-export.csv into a spreadsheet, then verify the live robots.txt in Search Console's robots.txt tester.",
          procedure: [
            "Import gsc-indexing-export.csv and sort the 'reason' column",
            "Confirm 412 pages fall under 'Blocked by robots.txt'",
            "Open yourdomain.com/robots.txt directly in a browser and read every Disallow line",
            "Test one of the 412 blocked URLs against the live robots.txt using Search Console's tester",
          ],
          outputSample:
            "gsc-indexing-export.csv, reason column\n" +
            "------------------------------------------\n" +
            "Indexed:                                     3,891\n" +
            "Crawled, currently not indexed:                690\n" +
            "Blocked by robots.txt:                         412\n" +
            "Duplicate, no user-selected canonical:         182\n" +
            "Not found (404):                                94\n" +
            "Server error (5xx):                             11\n" +
            "------------------------------------------\n" +
            "Total:                                        5,280\n\n" +
            "robots.txt tester result on one blocked URL:\n" +
            "  Disallow: /help/archived/*   <- matches the blocked URL's path\n" +
            "  This directive was added 14 months ago during a help-center\n" +
            "  reorganization and was never removed.",
          healthy:
            "The 412 blocked pages are intentionally excluded (truly archived, low-value content) and the robots.txt rule is doing its job.",
          unhealthy:
            "The 'archived' directory still contains help docs customers actively search for and link to, meaning a 14-month-old cleanup rule is now blocking live, useful content.",
          interpret:
            "A robots.txt block is binary and total, Google will not index a blocked page no matter how good it is. When the blocked content turns out to still be valuable, this is the single highest-leverage fix in the whole export: one line change unblocks all 412 pages at once.",
          soWhat: [
            {
              symptom: "412 pages blocked by a robots.txt rule nobody has revisited in 14 months",
              action: "Audit the /help/archived/* directory, remove the Disallow line for any subpath still receiving organic traffic or backlinks",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-2-crawled-not-indexed",
          concept: "Indexability",
          lessonAnchor: "2-indexability",
          theoryRecap:
            "The lesson explains a page can be crawled but still excluded from the index for reasons distinct from robots.txt: Google deeming it duplicate, thin, or low-quality even when nothing technically blocks it.",
          question:
            "690 URLs are 'Crawled, currently not indexed', the single largest bucket. Why can't this one be fixed with a config change the way the robots.txt bucket can?",
          toolName: "Google Search Console",
          where: "Search Console > Indexing > Pages, filter to 'Crawled, currently not indexed', sample 5-10 URLs.",
          procedure: [
            "In Search Console, click into the 'Crawled, currently not indexed' reason group",
            "Open 5-10 sample URLs from the list",
            "For each, check word count and whether the page duplicates an existing help article's topic",
            "Categorize each sample as thin, duplicate, or genuinely unique but still excluded",
          ],
          outputSample:
            "Sample of 8 'Crawled, currently not indexed' URLs\n" +
            "------------------------------------------\n" +
            "  /help/billing-faq-old         210 words, near-duplicate of\n" +
            "                                 /help/billing-faq (thin + duplicate)\n" +
            "  /help/domain-connect-v1       180 words, superseded by\n" +
            "                                 /help/domain-connect (thin + duplicate)\n" +
            "  /help/template-swap-legacy    240 words, covers a removed feature\n" +
            "  /help/export-content-2019     95 words, outdated screenshots only\n" +
            "  4 more samples: same pattern, short pages covering topics a newer,\n" +
            "  longer article already covers\n\n" +
            "Pattern: 690 pages skew toward thin, superseded help articles left\n" +
            "live after their replacement article was published.",
          healthy:
            "Every crawled page is unique enough and substantial enough that Google chooses to store it, no thin leftover duplicates competing with their own replacements.",
          unhealthy:
            "690 thin, superseded articles are sitting uncrawled-into-index because Google has already decided a newer, longer article on the same topic is the better version to store.",
          interpret:
            "Unlike the robots.txt bucket, there's no config line to flip here. Google is making a quality judgment call, and the fix is a content decision: redirect or merge the old article into its replacement, not a technical toggle.",
          soWhat: [
            {
              symptom: "690 thin, superseded help articles are being skipped at the indexing stage",
              action: "301 redirect each superseded article to its replacement instead of leaving both live",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Read the indexing export and test robots.txt directives live",
            why: "Free, and the source of both the export data and the robots.txt tester needed to confirm the fix.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This triage needs nothing beyond the free GSC export and the robots.txt tester, both free. No paid tool adds anything here.",
      },
      datasetUrl: "/project-data/gsc-indexing-export.csv",
      deliverable:
        "A two-line triage memo: which bucket is a same-day technical fix (robots.txt) and which bucket needs a content consolidation plan (crawled-not-indexed), with the exact page counts for each.",
      sampleOutput:
        "Applying the same triage to a Wise help-center export (illustrative) found a near-identical split: an old /support/eur-only/* robots.txt rule blocking 180 now-relevant multi-currency articles, and 310 thin FAQ stubs superseded by longer guides. The robots.txt fix shipped same-day; the content merge took three weeks.",
      successCriteria: [
        "Correctly quantified both buckets from the real CSV (412 blocked, 690 crawled-not-indexed) rather than estimating",
        "Identified the robots.txt bucket as a config fix and the crawled-not-indexed bucket as a content decision, not the same kind of fix",
        "Sampled actual URLs in the crawled-not-indexed bucket rather than guessing at the cause",
        "Proposed 301 redirects (not just deletion) for the superseded articles",
      ],
      portfolioReady: true,
      stretch: "Pull your own site's Search Console Pages report and run the same two-bucket triage on your real data.",
      whatToLookFor: [
        { label: "Fix type", detail: "Is the cause a binary technical block (robots.txt) or a quality judgment Google is making (thin or duplicate content)?" },
        { label: "Intent behind the block", detail: "Was the robots.txt rule intentional and still correct, or a stale leftover from an old reorganization?" },
        { label: "Sample before generalizing", detail: "Does a real sample of URLs in the largest bucket actually confirm the suspected pattern (thin, superseded content)?" },
        { label: "Fix vs delete", detail: "Should superseded content be redirected to its replacement, or simply removed?" },
      ],
      decision: {
        prompt:
          "412 pages are blocked by robots.txt, tracing to a 14-month-old /help/archived/* rule. 690 pages are 'crawled, currently not indexed', sampled as thin, superseded articles. Leadership wants the fastest win logged first. Which is it?",
        options: [
          { id: "a", label: "The 690-page bucket, since it's the largest number", correct: false },
          { id: "b", label: "The 412-page bucket, since removing one stale robots.txt line is a same-day fix", correct: true },
          { id: "c", label: "Both are equally fast to fix", correct: false },
          { id: "d", label: "Neither, since indexing issues can't be fixed without new content", correct: false },
        ],
        explanation:
          "A robots.txt block is binary and total: removing one stale Disallow line unblocks all 412 pages at once, a same-day config change. The 690-page bucket needs a content decision, sampling, confirming duplication, then redirecting each superseded article, inherently slower work spread across many individual pages. The 690 number being larger doesn't make it faster to fix, and the robots.txt fix needs zero new content, just removing an incorrect restriction.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Ship the robots.txt fix first: audit the /help/archived/* directory and remove the Disallow line for any subpath still receiving organic traffic or backlinks, unblocking all 412 pages in a single same-day change. In parallel, begin a content consolidation plan for the 690 'crawled, currently not indexed' pages. Sampled evidence shows they skew toward thin, superseded articles; 301 redirect each to its replacement rather than leaving both versions live, since Google has already signaled it won't index the older version anyway.",
      },
      commonMistakes: [
        { mistake: "Treating both buckets as the same type of problem", explanation: "a robots.txt block and a content-quality exclusion have completely different fixes and timelines; bundling them into one 'fix indexing' ticket obscures which one is actually fast." },
        { mistake: "Assuming a robots.txt Disallow rule is still correct just because it exists", explanation: "a 14-month-old rule from a past reorganization can silently block content that's since become valuable again." },
        { mistake: "Generalizing the crawled-not-indexed cause without sampling real URLs", explanation: "the pattern of thin, superseded articles only becomes clear by opening several sample pages, not by assuming from the bucket name alone." },
        { mistake: "Deleting superseded pages instead of redirecting them", explanation: "a 301 redirect preserves any existing backlinks and traffic pointing at the old URL; outright deletion throws that away." },
      ],
      keyTakeaway:
        "Not every 'not indexed' page has the same cause or the same fix. Separating a binary technical block from a content-quality judgment, and sizing each bucket from the real export instead of guessing, is what turns a vague 1,389-page problem into two clearly prioritized workstreams.",
    },
    {
      id: "technical-seo-robots-canonical-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The robots.txt & Canonical Teardown: Spot the Defect Before It Ships",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two real-world-realistic specimens, a robots.txt file and a pair of canonical tags, find the defect in each before it reaches production.",
      companyId: "mapmyindia",
      scenario:
        "MapmyIndia's dev team is about to deploy a redesigned maps-API documentation site. You're the last technical SEO review before launch, checking the staging robots.txt and the new canonical tag setup on two API-plan pages.",
      brief:
        "Two specimens, one robots.txt file and one pair of canonical tags. Find the defect in each and explain what it would do to the site if it shipped as-is.",
      mode: "teardown",
      conceptsCovered: ["robots.txt", "Canonical Tags"],
      skills: ["robots.txt", "Canonical Tags", "Pre-Launch QA", "Technical SEO Teardown"],
      keyQuestion:
        "Which pre-launch defects would silently damage indexing if they shipped as-is?",
      prerequisites: [
        "Ability to read a robots.txt file's User-agent, Disallow, and Allow syntax",
        "Understanding of what a canonical tag does",
      ],
      terminology: [
        {
          term: "Canonical Tag",
          definition: "an HTML tag (<link rel=\"canonical\">) declaring which URL is the authoritative version of a page's content, consolidating ranking signals to that one URL.",
        },
        {
          term: "Disallow Directive",
          definition: "a robots.txt rule telling a crawler it may not request matching paths; a bare 'Disallow: /' blocks an entire site for that user-agent.",
        },
      ],
      teardownItems: [
        {
          itemId: "staging-disallow-left-in",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review this robots.txt pulled from the staging environment, scheduled to go live with the redesign tonight. Find the line that would be catastrophic if it survives the deploy.",
          specimen:
            "=== robots.txt, staging environment (scheduled to deploy tonight) ===\n" +
            "User-agent: *\n" +
            "Disallow: /\n\n" +
            "User-agent: Googlebot\n" +
            "Allow: /docs/\n" +
            "Allow: /pricing/\n\n" +
            "Sitemap: https://developer.mapmyindia.com/sitemap.xml",
          answerKey: [
            {
              defect:
                "Global 'Disallow: /' under 'User-agent: *' blocks every crawler that isn't specifically Googlebot, and the Googlebot-specific Allow rules only cover /docs/ and /pricing/, so every other path stays blocked for Googlebot too",
              severity: "critical",
              whyItMatters:
                "The lesson's own warning: 'A single typo, like Disallow: / ... can block Google from your entire site overnight.' Bing, other crawlers, and every Googlebot path outside /docs/ and /pricing/, including the homepage, would be shut out.",
              lessonRef: "4. robots.txt: A single typo... can block Google from your entire site overnight",
              owner: "developer",
            },
          ],
          distractors: [
            "The sitemap directive uses an absolute HTTPS URL instead of a relative path.",
            "The file lists 'User-agent: *' before the more specific 'User-agent: Googlebot' block.",
          ],
          partialCredit: true,
        },
        {
          itemId: "canonical-cross-plan-pointer",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review the canonical tags on these two distinct API pricing plan pages. Find the defect that would remove one of them from Google's index.",
          specimen:
            "=== /pricing/starter-plan (HTML head) ===\n" +
            '<link rel="canonical" href="https://developer.mapmyindia.com/pricing/starter-plan" />\n\n' +
            "=== /pricing/enterprise-plan (HTML head) ===\n" +
            '<link rel="canonical" href="https://developer.mapmyindia.com/pricing/starter-plan" />',
          answerKey: [
            {
              defect:
                "The Enterprise plan page's canonical tag points to the Starter plan page instead of self-referencing its own URL",
              severity: "critical",
              whyItMatters:
                "The lesson: 'All ranking signals... get consolidated to that one URL.' Google will treat the Enterprise plan page as a duplicate of the Starter plan and drop it from the index, so a search for enterprise-tier pricing has nothing distinct to rank.",
              lessonRef: "5. Canonical Tags: consolidated to one URL",
              owner: "developer",
            },
          ],
          distractors: [
            "The canonical URLs use the full https:// protocol rather than a protocol-relative link.",
            "The Starter plan page's canonical tag self-references its own URL.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the staging environment to catch robots.txt and canonical defects before launch",
            why: "Free for up to 500 URLs, enough to catch exactly this class of pre-launch defect on a documentation site.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This teardown needs no paid tool, it's a structural read of two small specimens. Screaming Frog's free tier is only worth opening to confirm the same defects on a real staging crawl.",
      },
      deliverable:
        "A pre-launch review note flagging both defects with severity and the one-line fix for each, blocking the deploy until both are resolved.",
      sampleOutput:
        "The same pre-launch review on RateGain's pricing-page redesign caught a near-identical defect: a leftover 'Disallow: /api-docs/' rule from a six-month-old staging environment, still present in the file scheduled to go live. Same fix: delete the line before merging.",
      successCriteria: [
        "Identified the 'Disallow: /' rule as the critical blocker, not the sitemap or ordering distractors",
        "Explained specifically why the Googlebot Allow rules don't rescue every other path",
        "Identified the Enterprise page's canonical pointing at the Starter page as the defect, not the reverse",
        "Explained the specific index consequence (Enterprise page dropped, not just 'ranking loss')",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Scope of the block", detail: "Does an Allow rule for one crawler actually cover every path, or only a subset?" },
        { label: "Self-reference vs cross-reference", detail: "Does each page's canonical tag point to itself, or accidentally to a different page?" },
        { label: "Consequence, not just presence", detail: "What specifically happens (deindexed, dropped from results, blocked entirely) if the defect ships?" },
        { label: "Distractor discipline", detail: "Is a stylistic difference (URL format, rule ordering) being mistaken for a functional defect?" },
      ],
      decision: {
        prompt:
          "The robots.txt has 'Disallow: /' under 'User-agent: *' and then 'Allow: /docs/' and 'Allow: /pricing/' under 'User-agent: Googlebot'. What's the actual scope of what stays blocked?",
        options: [
          { id: "a", label: "Nothing is blocked, since the Googlebot-specific rules override the wildcard block entirely", correct: false },
          { id: "b", label: "Every path except /docs/ and /pricing/ stays blocked for Googlebot, and the entire site stays blocked for every other crawler", correct: true },
          { id: "c", label: "Only non-Googlebot crawlers are affected; Googlebot sees the whole site", correct: false },
          { id: "d", label: "Only the homepage is blocked, since Allow rules are only for subdirectories", correct: false },
        ],
        explanation:
          "The Googlebot-specific block only carves out Allow exceptions for /docs/ and /pricing/, it doesn't cancel the wildcard 'Disallow: /' for everything else Googlebot might try to crawl, and every other crawler has no Allow exceptions at all and stays fully blocked. Assuming the specific rule fully overrides the wildcard, or that only one crawler type is affected, both underestimate how much of the site would actually be shut out if this shipped.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Block this deploy until both defects are fixed. The staging robots.txt's global 'Disallow: /' combined with narrow Googlebot-only Allow rules for /docs/ and /pricing/ would shut out every other crawler entirely and block Googlebot from every path outside those two, including the homepage, exactly the 'block Google from your entire site overnight' scenario. Separately, the Enterprise plan page's canonical tag incorrectly points at the Starter plan page instead of self-referencing, which would cause Google to treat it as a duplicate and drop it from the index, leaving no distinct page to rank for enterprise-tier pricing searches.",
      },
      commonMistakes: [
        { mistake: "Assuming a crawler-specific Allow rule fully cancels a wildcard Disallow", explanation: "the Allow only applies to the specific paths listed; every other path remains blocked for that crawler too." },
        { mistake: "Flagging the sitemap's URL format or rule ordering as the defect", explanation: "these are cosmetic and don't affect crawling or indexing; the real defect is the scope of the Disallow rule." },
        { mistake: "Missing which direction a canonical points", explanation: "the defect is the Enterprise page pointing at the Starter page, not the reverse; misreading the direction leads to fixing the wrong page." },
        { mistake: "Describing the canonical defect only as 'a ranking issue'", explanation: "the actual consequence is more severe, the Enterprise page gets dropped from the index entirely as a perceived duplicate, not merely ranked lower." },
      ],
      keyTakeaway:
        "A pre-launch technical SEO review exists to catch defects that look like small syntax details but have site-wide or page-wide consequences if they ship. Reading exactly what a robots.txt rule's scope covers, and exactly which direction a canonical tag points, is the difference between catching a catastrophic block before launch and finding out about it in a traffic report weeks later.",
    },
  ],

  "core-web-vitals": [
    {
      id: "core-web-vitals-field-vs-lab-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Field-vs-Lab Audit: Finding Which Template Is Actually 'Poor'",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Use Search Console's real-user field data, grouped by URL template, to find which page type is dragging RateGain's Core Web Vitals down, then use a crawl to spot the likely CLS-causing pattern on that template.",
      companyId: "rategain-travel-technologies",
      scenario:
        "RateGain Travel Technologies markets its hotel-pricing-intelligence platform through a content-heavy marketing site plus a gated demo-request flow. The team optimized the homepage's Core Web Vitals last quarter and assumed the whole site improved. You're checking whether that's actually true.",
      brief:
        "Two passes: read the Search Console URL-groups breakdown to find which template is still 'Poor', then crawl that template to spot the most likely CLS culprit.",
      mode: "diagnostic",
      conceptsCovered: ["LCP, Largest Contentful Paint", "CLS, Cumulative Layout Shift"],
      skills: ["Core Web Vitals", "Technical SEO", "Performance Analysis"],
      keyQuestion: "Is the performance problem caused by individual pages, or by a shared page template?",
      prerequisites: [
        "Basic understanding of what Core Web Vitals measures",
        "Access to Google Search Console for the property being audited",
      ],
      terminology: [
        { term: "Largest Contentful Paint (LCP)", definition: "measures how quickly the largest visible content element loads." },
        { term: "Cumulative Layout Shift (CLS)", definition: "measures unexpected movement of visible content while a page loads." },
      ],
      steps: [
        {
          stepId: "step-1-url-groups",
          concept: "LCP, Largest Contentful Paint",
          lessonAnchor: "lcp-largest-contentful-paint",
          theoryRecap:
            "The lesson's warning about the Core Web Vitals mistake: teams optimize the homepage, see a green checkmark, and stop, while the templates driving most of the traffic stay in 'Poor'. Search Console groups URLs by template specifically to catch this.",
          question:
            "The homepage passes all three Core Web Vitals. Does that mean the site passes? Check the URL-groups breakdown to find out.",
          toolName: "Google Search Console",
          where: "Search Console > Experience > Core Web Vitals, click into the Mobile report and review the URL groups table.",
          procedure: [
            "Open Core Web Vitals > Mobile report in Search Console",
            "Click into the 'Poor' status row to see the affected URL groups",
            "Sort URL groups by number of affected URLs, not by which page feels most important",
            "Note the LCP value and page count for the largest 'Poor' group",
          ],
          outputSample:
            "Core Web Vitals, Mobile, URL Groups\n" +
            "------------------------------------------\n" +
            "Homepage template:        GOOD, LCP 2.1s (1 URL)\n" +
            "Hotel case-study template: POOR, LCP 4.6s (38 URLs, 61% of site traffic)\n" +
            "Pricing/demo template:     NEEDS IMPROVEMENT, LCP 3.0s (4 URLs)\n" +
            "Blog template:             GOOD, LCP 2.3s (52 URLs)",
          healthy:
            "Every high-traffic template, not just the homepage, sits in the Good bucket in the URL-groups breakdown.",
          unhealthy:
            "The hotel case-study template, 61% of site traffic, sits at 4.6 seconds LCP in the Poor bucket, while the homepage the team already optimized carries just one URL's worth of traffic.",
          interpret:
            "The homepage fix was real but nearly irrelevant to overall site health: it's one URL. The case-study template touches 38 URLs and the majority of traffic, exactly the 'fix the homepage, declare victory' trap the lesson warns about.",
          soWhat: [
            {
              symptom: "61% of site traffic sits on a template stuck at 4.6s LCP",
              action: "Prioritize the case-study template for the next optimization sprint, not another homepage pass",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cls-crawl-check",
          concept: "CLS, Cumulative Layout Shift",
          lessonAnchor: "cls-cumulative-layout-shift",
          theoryRecap:
            "The lesson lists images and videos without defined width/height as the most common CLS cause, alongside ads and late-injected content.",
          question:
            "Now that the case-study template is the known problem, crawl it for the most common technical cause of layout shift: images missing explicit dimensions.",
          toolName: "Screaming Frog SEO Spider",
          where: "Screaming Frog > crawl the 38 hotel case-study URLs > Images tab.",
          procedure: [
            "Crawl the 38 case-study template URLs in Screaming Frog (well within the 500-URL free limit)",
            "Open the Images tab and check for images missing width/height attributes",
            "Cross-reference count against the number of hero images and embedded logo grids on the template",
            "Note whether the pattern is consistent across all 38 URLs (a template-level bug) or scattered (a content-entry mistake)",
          ],
          outputSample:
            "Screaming Frog, Images Tab, Case-Study Template Crawl\n" +
            "------------------------------------------\n" +
            "Total images crawled: 214\n" +
            "Missing width/height attributes: 187 (87%)\n" +
            "Pattern: the hero banner and the 'client logo' grid component both\n" +
            "render without dimensions across all 38 URLs, consistent template bug,\n" +
            "not a one-off content mistake.",
          healthy:
            "Every image on the template has explicit width/height attributes, so the browser reserves the correct space before the image loads.",
          unhealthy:
            "87% of images across all 38 case-study URLs lack width/height, and the pattern repeats identically on every URL, a component-level bug, not isolated content errors.",
          interpret:
            "Because this shows up identically on every one of the 38 URLs, it's a shared component (the hero banner and logo grid), not something 38 separate content editors each got wrong. One template fix resolves it everywhere at once.",
          soWhat: [
            {
              symptom: "87% of images on the case-study template lack width/height attributes",
              action: "Add explicit width/height to the hero banner and logo-grid components in the template code, not on individual pages",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Read the URL-groups Core Web Vitals breakdown by template",
            why: "Free, and the only source of real-user field data grouped by page template.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the affected template's images to find the likely CLS cause",
            why: "Free tier crawls up to 500 URLs, plenty for a 38-URL template audit.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Track organic performance on the affected template after the fix ships",
            why: "Both diagnostic checks are complete on free tools. Ahrefs only helps track whether organic performance moves after the fix ships.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "Both checks are complete on free tools. Ahrefs only helps track whether organic performance moves after the fix ships.",
      },
      deliverable:
        "A prioritization memo naming the case-study template as the real Core Web Vitals problem (not the homepage), with the specific component-level CLS cause and fix.",
      sampleOutput:
        "The same two-step check on Wise's currency-guide template (illustrative) found the reverse pattern: homepage still Poor at 3.8s LCP, while every content template already passed. The fix there was a hero video autoplay on the homepage alone, a one-page problem instead of a template-wide one.",
      successCriteria: [
        "Used the URL-groups breakdown, not just the homepage score, to find the real problem template",
        "Weighted the finding by number of affected URLs / traffic share, not by which page 'feels' important",
        "Found a specific, template-level CLS cause via crawl, not a guess",
        "Distinguished a template-wide bug (87% consistent) from scattered content mistakes",
      ],
      portfolioReady: true,
      stretch: "Check your own site's Core Web Vitals URL-groups breakdown, most sites have at least one 'silent' Poor template hiding behind a passing homepage.",
      whatToLookFor: [
        { label: "Severity", detail: "How poor is the performance for this template?" },
        { label: "Scale", detail: "How many URLs share the same template?" },
        { label: "Business importance", detail: "How much traffic or business value does the template represent?" },
        { label: "Repeatability", detail: "Does the same problem appear across many pages using the same template, or is it isolated to one or two?" },
      ],
      decision: {
        prompt: "Based on the evidence gathered so far, what should the SEO team recommend?",
        options: [
          { id: "a", label: "Optimize the homepage again", correct: false },
          { id: "b", label: "Prioritize the hotel case-study template", correct: true },
          { id: "c", label: "Manually fix the 38 case-study pages one by one", correct: false },
          { id: "d", label: "Ignore the issue since the homepage passes", correct: false },
        ],
        explanation:
          "The problem affects 38 URLs sharing one template and 61% of site traffic, so a template-level fix addresses it everywhere at once. Manually patching each page treats a shared-component bug as 38 separate content errors, and another homepage pass ignores where the real traffic and risk actually sit.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "The hotel case-study template should be prioritized for Core Web Vitals optimization. The template carries a Poor LCP result (4.6s) and affects 38 URLs representing 61% of site traffic. A crawl confirms a repeated image-implementation issue, missing width/height attributes on the hero banner and client logo grid, consistent across every affected URL. Development should correct the shared components rather than modifying individual pages.",
      },
      commonMistakes: [
        { mistake: "Checking only the homepage", explanation: "a passing homepage does not prove that other page templates perform well." },
        { mistake: "Choosing the worst score automatically", explanation: "a severe problem on one low-traffic page can matter less than a moderate problem spread across hundreds of high-traffic pages." },
        { mistake: "Assuming the first technical issue found is the root cause", explanation: "confirm the pattern repeats across the affected URLs before declaring a root cause." },
        { mistake: "Treating every affected URL as a separate problem", explanation: "if the same issue appears across a shared template, fix the template, not each page one by one." },
      ],
      keyTakeaway:
        "A professional technical SEO audit does more than identify a poor score. It answers where the problem is, how widespread it is, what's causing it, and what the business should do next. The goal isn't to find errors, it's to turn technical evidence into a prioritized action that improves the site at scale.",
    },
    {
      id: "core-web-vitals-lcp-business-case-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "The Business Case: Forecasting What a Faster Currency Converter Is Worth",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Pull a real baseline LCP and organic-traffic number from Wise's currency-converter landing pages, then apply the lesson's own cited case-study multiplier to forecast the traffic upside of fixing LCP, before requesting dev time to actually do it.",
      companyId: "wise",
      scenario:
        "Wise's marketing team wants to justify a dev sprint to fix slow-loading currency-converter landing pages, ranked by transactional intent but currently 'Poor' on LCP. Dev leadership wants a projected number before greenlighting the sprint, not just 'it'll help'.",
      brief:
        "Pull today's real field-data baseline, then apply the lesson's cited Nykaa case (40% LCP cut, 28% organic traffic gain) as a conservative benchmark multiplier to build a defensible forecast.",
      mode: "diagnostic",
      conceptsCovered: ["How Google Actually Measures This", "Nykaa, 28% more organic traffic from LCP improvement"],
      skills: ["Core Web Vitals", "Business Case Building", "Forecasting"],
      keyQuestion: "What is a defensible, dollar-figure forecast for fixing a Poor LCP template, built on real baseline data and a discounted named benchmark?",
      prerequisites: [
        "Access to Google Search Console field data for the property being forecast",
        "Access to Google Analytics 4 conversion data for the same property",
      ],
      terminology: [
        { term: "Field data", definition: "real-user Chrome performance data, as opposed to a single lab test run, and what Google actually uses to grade a page." },
        { term: "Benchmark discount", definition: "deliberately applying a fraction of a cited case study's result to account for differences in market, product, or traffic mix." },
      ],
      steps: [
        {
          stepId: "step-1-field-baseline",
          concept: "How Google Actually Measures This",
          lessonAnchor: "how-google-actually-measures-this",
          theoryRecap:
            "The lesson stresses that ranking is determined by field data, real Chrome users, not lab data from a single test run, and that Search Console's field data is what a forecast should be anchored to.",
          question:
            "Before forecasting anything, what is the currency-converter template's actual field-data LCP and its current organic session volume?",
          toolName: "Google Search Console",
          where: "Search Console > Core Web Vitals report for the LCP baseline; Performance report filtered to the currency-converter URL path for organic sessions.",
          procedure: [
            "Open Core Web Vitals > Mobile, find the currency-converter URL group's field-data LCP value",
            "Open Performance, filter Pages to the currency-converter path, set date range to last 28 days",
            "Note total organic clicks for that path over the period",
            "Record both numbers as the pre-fix baseline (illustrative figures below, not Wise's real production numbers)",
          ],
          outputSample:
            "Baseline (illustrative, not Wise's actual production data)\n" +
            "------------------------------------------\n" +
            "Currency-converter template: POOR, field-data LCP 4.9s (23 URLs)\n" +
            "Organic clicks, past 28 days: 38,400\n" +
            "Organic sessions attributed to these 23 URLs: primary entry point for\n" +
            "roughly 12% of all organic sessions site-wide",
          healthy: "A documented, dated field-data baseline exists before anyone asks for a dev sprint to fix it.",
          unhealthy: "The sprint request goes to engineering leadership as 'it'll probably help SEO' with no baseline number attached at all.",
          interpret:
            "A forecast without a real baseline isn't a forecast, it's a guess dressed up as one. Search Console's field data is exactly what Google itself uses to grade the page, which makes it the only credible starting point for a business case.",
          soWhat: [
            {
              symptom: "The dev sprint request has no attached baseline metric",
              action: "Pull the field-data LCP and 28-day organic click baseline before submitting the request",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-apply-benchmark",
          concept: "Nykaa, 28% more organic traffic from LCP improvement",
          lessonAnchor: "nykaa-28-more-organic-traffic-from-lcp-improvement",
          theoryRecap:
            "The lesson cites Nykaa's real result: a 40% LCP improvement produced a 28% organic traffic increase, a direct, named, dated benchmark for exactly this kind of fix.",
          question:
            "Applying Nykaa's ratio conservatively to Wise's 38,400-click baseline, what's the forecast range worth presenting to leadership?",
          toolName: "Google Analytics 4",
          where: "GA4 > Life cycle > Engagement > Landing pages, filtered to the currency-converter path, to pull the revenue/conversion baseline the traffic forecast should translate into.",
          procedure: [
            "In GA4, filter Landing pages to the currency-converter URL path",
            "Pull the current conversion rate and average revenue per session for that path",
            "Apply Nykaa's cited 28% traffic-increase ratio to the 38,400 monthly organic clicks baseline, conservatively, at half the cited effect (14%) to account for a different market and product",
            "Translate the resulting traffic range into a revenue range using the GA4 conversion numbers",
          ],
          outputSample:
            "Forecast memo (illustrative)\n" +
            "------------------------------------------\n" +
            "Baseline: 38,400 organic clicks/month, POOR LCP 4.9s\n" +
            "Benchmark: Nykaa, 40% LCP cut -> 28% organic traffic increase (cited\n" +
            "in lesson, web.dev case study)\n" +
            "Conservative applied ratio: half of Nykaa's, 14%\n" +
            "Forecast: +5,376 organic clicks/month if LCP moves from 4.9s to\n" +
            "under 2.5s (Good)\n" +
            "GA4 conversion rate on this path: 2.1%, avg revenue per conversion: $340\n" +
            "Forecast revenue impact: +5,376 x 2.1% x $340, approximately +$38,400/month",
          healthy:
            "Leadership sees a specific, conservatively-discounted, dated-benchmark-backed number before approving the sprint, not an open-ended promise.",
          unhealthy:
            "The team promises 'a 28% traffic increase' as if Wise is guaranteed the exact same result Nykaa saw in a completely different market and product category.",
          interpret:
            "Citing the real Nykaa number by name and then explicitly discounting it is more persuasive than either an unsupported guess or an overclaimed exact match, it shows the team understands the benchmark's limits, which is what makes a forecast credible to a skeptical engineering lead.",
          soWhat: [
            {
              symptom: "Leadership is skeptical of an SEO-only justification for a dev sprint",
              action: "Present the discounted forecast with the GA4 revenue translation attached, framed as a conservative floor, not a promise",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Pull the real field-data LCP and organic click baseline",
            why: "Free, and the only source of the field data Google actually grades the page on.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull conversion rate and revenue-per-session to translate the traffic forecast into a revenue range",
            why: "Free, and the only tool that connects the traffic forecast to an actual dollar figure leadership can evaluate.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "Both tools needed for this forecast are free. No paid tool improves this specific deliverable.",
      },
      deliverable:
        "A one-page forecast memo: current field-data baseline, the cited benchmark, a conservatively discounted projected traffic and revenue range.",
      sampleOutput:
        "Running the same forecast method on Adyen's merchant-onboarding landing pages (illustrative) using the redBus 72% INP improvement to 7% sales benchmark instead produced a smaller but still fundable projected revenue case, since Adyen's conversion value per session was much higher than Wise's.",
      successCriteria: [
        "Pulled a real, dated field-data LCP baseline and a real 28-day organic click number before forecasting anything",
        "Cited the Nykaa benchmark by its actual numbers (40% LCP cut, 28% traffic gain), not a vague 'CWV helps'",
        "Applied a conservative discount to the benchmark rather than promising the exact same result",
        "Translated the traffic forecast into a revenue range using real GA4 conversion data",
      ],
      portfolioReady: true,
      stretch: "Pull your own site's Core Web Vitals baseline and build the same discounted forecast using whichever cited case study in the lesson best matches your traffic mix.",
      whatToLookFor: [
        { label: "Baseline recency", detail: "Is the field-data LCP and organic click number dated and pulled from real Search Console data, not estimated?" },
        { label: "Benchmark relevance", detail: "Does the cited case study share a similar mechanism, an LCP fix causing a traffic lift, even if the market differs?" },
        { label: "Discount applied", detail: "Has the cited result been conservatively scaled down rather than promised in full?" },
        { label: "Revenue translation", detail: "Is the traffic forecast converted into a dollar range using real conversion data, not left as a raw click number?" },
      ],
      decision: {
        prompt: "Leadership asks why the forecast uses 14% instead of Nykaa's actual 28% traffic lift. What's the right answer?",
        options: [
          { id: "a", label: "14% is a typo, it should say 28%", correct: false },
          { id: "b", label: "The 28% figure is unreliable and should be dropped entirely", correct: false },
          { id: "c", label: "14% is a conservative discount applied because Wise's market and product differ from Nykaa's", correct: true },
          { id: "d", label: "14% was chosen because Wise's current LCP is worse than Nykaa's was", correct: false },
        ],
        explanation:
          "The forecast deliberately applies half of Nykaa's cited 28% lift to account for Wise operating in a different market and product category, which is what makes the number credible to a skeptical engineering lead. Dropping the benchmark entirely would leave the request with no evidence at all, and promising the full 28% would overclaim a result from a different business.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "The currency-converter template's dev sprint request should be submitted with the attached forecast memo: a documented Poor field-data LCP baseline of 4.9s across 23 URLs and 38,400 monthly organic clicks, a conservative 14% traffic-lift projection (half of the cited Nykaa 40% LCP cut to 28% traffic gain benchmark), and a resulting revenue estimate of roughly $38,400/month using GA4's actual conversion rate and revenue-per-session for that path. This gives engineering leadership a specific, discounted, cited number rather than an open-ended SEO promise.",
      },
      commonMistakes: [
        { mistake: "Forecasting without a real baseline", explanation: "a projected lift means nothing without a documented starting LCP and traffic number to lift from." },
        { mistake: "Applying a cited benchmark at full strength", explanation: "a different company, market, and product category rarely produces an identical result, so citing the number without discounting it overclaims." },
        { mistake: "Leaving the forecast in clicks instead of revenue", explanation: "engineering leadership evaluates a dev sprint against dollar impact, not raw traffic numbers." },
        { mistake: "Citing a benchmark vaguely instead of by name and number", explanation: "'Core Web Vitals fixes help traffic' is not persuasive, 'Nykaa saw a 28% organic lift from a 40% LCP cut' is." },
      ],
      keyTakeaway:
        "A business case for a technical fix needs three things: a real dated baseline, a named benchmark applied at a credible discount, and a translation into the metric leadership actually cares about. Skipping any one of the three turns a forecast back into a guess.",
    },
  ],

  "https-security-seo": [
    {
      id: "https-security-seo-mixed-content-hsts-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Mixed-Content & HSTS Teardown: Spot the Broken Padlock Before It Ships",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two real-world-realistic specimens, an HTML snippet and an HSTS header configuration, find the defect in each that would break the padlock or lock out a legitimate subdomain.",
      companyId: "adyen",
      scenario:
        "Adyen's marketing site team is finalizing a merchant-facing landing page redesign and a new site-wide HSTS policy. You're the pre-launch technical SEO reviewer checking both for exactly the mistakes this lesson warns about.",
      brief:
        "Two specimens: an HTML snippet with an embedded asset, and an HSTS header rollout plan against a list of live subdomains. Find the defect in each.",
      mode: "teardown",
      conceptsCovered: ["HTTPS Migration, Done Right", "Testing Your Setup"],
      skills: ["HTTPS Security", "Mixed Content Auditing", "HSTS Configuration"],
      keyQuestion: "Which line in each specimen would break the padlock or lock out a legitimate subdomain, and why does it matter more than the distractors around it?",
      prerequisites: [
        "Basic understanding of how HTTPS and the browser padlock indicator work",
        "Familiarity with reading HTML head tags and HTTP response headers",
      ],
      terminology: [
        { term: "Mixed content", definition: "an HTTPS page that loads at least one resource, image, script, or stylesheet, over plain HTTP, which breaks or hides the browser's padlock." },
        { term: "HSTS (Strict-Transport-Security)", definition: "a header that tells browsers to only ever connect to a domain over HTTPS, refusing HTTP entirely once set." },
        { term: "HSTS preload", definition: "a browser-maintained list that hard-codes HSTS enforcement before the first visit, with slow removal if a mistake ships." },
      ],
      teardownItems: [
        {
          itemId: "chat-widget-mixed-content",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review this HTML snippet from the new merchant landing page, scheduled to launch on the HTTPS domain tonight. Find the line that would break the padlock.",
          specimen:
            "=== Landing page <head>, partial ===\n" +
            '<link rel="stylesheet" href="https://cdn.adyen-example.com/styles/main.css" />\n' +
            '<script src="https://cdn.adyen-example.com/analytics.js"></script>\n' +
            '<script src="http://legacy-chat-widget.example.net/embed.js"></script>\n' +
            '<link rel="canonical" href="https://www.adyen-example.com/merchants/landing" />',
          answerKey: [
            {
              defect: "The legacy chat widget script loads over plain http:// on an otherwise fully HTTPS page",
              severity: "critical",
              whyItMatters:
                "The lesson: 'If even one image, script, or stylesheet on an HTTPS page loads over plain HTTP, browsers show a broken or missing padlock, sometimes with an explicit warning.' A merchant landing page with a visibly broken padlock undermines exactly the trust signal HTTPS exists to provide, right at the point merchants are deciding whether to sign up.",
              lessonRef: "HTTPS Migration, Done Right: Mixed content is the most common HTTPS migration bug",
              owner: "developer",
            },
          ],
          distractors: [
            "The stylesheet and analytics script both load from the same cdn.adyen-example.com subdomain.",
            "The canonical tag points to the www version of the domain.",
          ],
          partialCredit: true,
        },
        {
          itemId: "hsts-preload-legacy-subdomain",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review this HSTS rollout plan against the list of live subdomains. Find the risk before it's submitted to the preload list.",
          specimen:
            "=== Planned header, all *.adyen-example.com responses ===\n" +
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload\n\n" +
            "=== Live subdomain inventory ===\n" +
            "www.adyen-example.com           HTTPS fully supported\n" +
            "docs.adyen-example.com          HTTPS fully supported\n" +
            "dashboard.adyen-example.com     HTTPS fully supported\n" +
            "legacy-support.adyen-example.com   HTTP only, HTTPS never configured",
          answerKey: [
            {
              defect:
                "includeSubDomains + preload is planned before confirming legacy-support.adyen-example.com supports HTTPS",
              severity: "critical",
              whyItMatters:
                "The lesson's worked example: with includeSubDomains applied domain-wide, browsers refuse to load an HTTP-only subdomain at all, a hard security error with no click-through, and removal from the preload list is slow, not instant. The support portal would become completely inaccessible to anyone whose browser has cached or preloaded the policy.",
              lessonRef: "Testing Your Setup: worked example, the subdomain that broke HSTS preload",
              owner: "developer",
            },
          ],
          distractors: [
            "max-age is set to 31536000 seconds, exactly one year.",
            "The header uses the correct directive name and syntax for Strict-Transport-Security.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the full domain and subdomains to check for HTTP-loaded resources and inconsistent HTTPS support before rollout",
            why: "Free tier crawls up to 500 URLs, plenty to catch this class of pre-launch defect across a marketing site and its subdomains.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Both defects here are structural reads, no paid tool adds anything beyond Screaming Frog's free crawl to confirm them live.",
      },
      deliverable:
        "A pre-launch security review flagging both defects with severity, blocking the HSTS submission and the landing-page deploy until both are fixed.",
      sampleOutput:
        "The same pre-launch review on Flipkart's seller-onboarding microsite (illustrative) caught an identical mixed-content defect: a legacy PDF-viewer script still loading over HTTP after a subdomain consolidation. Same fix, swap the script source to HTTPS before launch.",
      successCriteria: [
        "Identified the http:// chat widget script as the mixed-content defect, not the same-domain distractors",
        "Explained specifically why one insecure script breaks the padlock even though every other asset is HTTPS",
        "Identified the unconfirmed legacy-support subdomain as the HSTS preload risk, not the correctly-formatted header syntax",
        "Explained the hard-failure consequence (subdomain becomes completely inaccessible, not just 'less secure')",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Protocol consistency", detail: "Does every embedded resource on the HTTPS page also load over HTTPS, with no exceptions?" },
        { label: "Subdomain coverage", detail: "If a policy applies domain-wide, does every live subdomain actually support what the policy assumes?" },
        { label: "Failure mode", detail: "Does the defect degrade gracefully (a warning) or fail hard (the resource or subdomain becomes inaccessible)?" },
        { label: "Distractor plausibility", detail: "Is the flagged line actually the defect, or does it just look unusual next to correctly-configured neighbors?" },
      ],
      decision: {
        prompt: "The HSTS specimen lists includeSubDomains and preload alongside a subdomain that has never had HTTPS configured. What should happen before submission?",
        options: [
          { id: "a", label: "Submit as planned, since max-age and syntax are both correct", correct: false },
          { id: "b", label: "Remove includeSubDomains only, keep preload", correct: false },
          { id: "c", label: "Configure HTTPS on legacy-support.adyen-example.com first, or exclude it from includeSubDomains, before submitting", correct: true },
          { id: "d", label: "Submit, then fix the subdomain afterward since preload updates instantly", correct: false },
        ],
        explanation:
          "includeSubDomains applies the policy to every subdomain including the HTTP-only one, and once preloaded, browsers refuse to load it at all with no click-through and slow removal. The header syntax being correct doesn't matter if the underlying infrastructure isn't ready, and preload lists update on a slow, browser-vendor-controlled cadence, not instantly.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Both specimens should be blocked from launch. The merchant landing page's legacy chat widget script must be updated to load over HTTPS before deploy, since a single HTTP resource breaks the padlock on the entire page at the exact moment merchants are evaluating trust. The HSTS preload submission should be held until legacy-support.adyen-example.com either supports HTTPS or is explicitly excluded from includeSubDomains, since preload removal is slow and the failure mode is a hard, unrecoverable connection error, not a warning.",
      },
      commonMistakes: [
        { mistake: "Assuming a same-domain resource is automatically safe", explanation: "the protocol (http:// vs https://) matters independently of which domain a resource loads from." },
        { mistake: "Treating correct header syntax as proof the header is safe to ship", explanation: "a syntactically valid HSTS header can still be operationally dangerous if the subdomain inventory isn't ready for it." },
        { mistake: "Missing the domain-wide blast radius of includeSubDomains", explanation: "a policy written for the main domain silently applies to every subdomain, including ones the reviewer didn't check." },
        { mistake: "Confusing a soft warning with a hard failure", explanation: "mixed content shows a broken padlock (soft); an HSTS-enforced HTTP-only subdomain refuses to load at all (hard), and the review priority should reflect that difference." },
      ],
      keyTakeaway:
        "A pre-launch HTTPS review has to check both the page's own resources and the domain-wide policies that will apply after launch. The mixed-content bug and the HSTS blast radius look unrelated but share the same root cause: a change that's correct in isolation but wasn't checked against every dependency it actually touches.",
    },
    {
      id: "https-security-seo-migration-audit",
      tier: "core",
      archetype: "audit",
      title: "The HTTPS Migration Audit: Verifying the Redirect Chain Didn't Leak Signal",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Run a three-part audit, redirect integrity, response headers, and mixed content, on a completed HTTP-to-HTTPS migration to confirm no ranking signal or user trust was quietly lost in the process.",
      companyId: "flipkart",
      scenario:
        "Flipkart's technical SEO team completed an HTTPS migration on a secondary microsite (seller-help documentation) six weeks ago. Organic traffic to the microsite is flat instead of recovering. You're auditing whether the migration itself introduced the problem.",
      brief:
        "Three checks: confirm every old HTTP URL 301-redirects in a single hop, confirm the response carries the expected security headers, and confirm no mixed content is quietly breaking the padlock on migrated pages.",
      mode: "diagnostic",
      conceptsCovered: ["HTTPS Migration, Done Right", "Security Headers That Actually Matter", "Testing Your Setup"],
      skills: ["HTTPS Migration Auditing", "Security Headers", "Technical SEO"],
      keyQuestion: "Six weeks after an HTTPS migration, is flat traffic explained by a redirect, header, or mixed-content gap the migration itself introduced?",
      prerequisites: [
        "Access to Google Search Console for the migrated property",
        "Basic familiarity with reading HTTP response headers and redirect chains",
      ],
      terminology: [
        { term: "Redirect chain", definition: "when a URL redirects through more than one hop before reaching its final destination, diluting link equity and slowing navigation at each extra hop." },
        { term: "Security headers", definition: "response headers like HSTS, CSP, and X-Content-Type-Options that don't move rankings directly but support the trust signals that feed conversion." },
      ],
      steps: [
        {
          stepId: "step-1-redirect-check",
          concept: "HTTPS Migration, Done Right",
          lessonAnchor: "https-migration-done-right",
          theoryRecap:
            "The lesson's migration checklist requires a server-level 301 redirect for every HTTP URL to its HTTPS equivalent, and warns that internal links still pointing to HTTP force an extra redirect hop that slows navigation and dilutes link equity.",
          question:
            "Do the old HTTP seller-help URLs 301-redirect in a single hop to HTTPS, or is there a redirect chain quietly diluting signal?",
          toolName: "Google Search Console",
          where: "Search Console > Indexing > Pages, filter to 'Page with redirect' and 'Not found (404)' reasons for the migrated path.",
          procedure: [
            "Open the Indexing > Pages report for the seller-help path",
            "Check counts under 'Page with redirect' and 'Not found (404)'",
            "Cross-reference a sample of 10 old HTTP URLs by requesting them directly and reading the response chain",
            "Note whether each resolves in 1 hop (HTTP to HTTPS direct) or 2+ hops (HTTP to old-HTTPS-slug to new-HTTPS-slug)",
          ],
          outputSample:
            "Page Indexing Report, seller-help path\n" +
            "------------------------------------------\n" +
            "Page with redirect: 340 URLs\n" +
            "Not found (404): 28 URLs\n\n" +
            "Manual sample of 10 old HTTP URLs:\n" +
            "  7 of 10: HTTP -> HTTPS, single 301 hop\n" +
            "  3 of 10: HTTP -> old HTTPS slug -> new HTTPS slug, 2-hop chain\n" +
            "           (migration combined an HTTPS switch with a URL restructure\n" +
            "            in the same deploy)",
          healthy: "Every old HTTP URL 301-redirects in exactly one hop to its final HTTPS destination.",
          unhealthy:
            "3 of 10 sampled URLs redirect twice, once for the protocol switch and once for an unrelated URL restructure bundled into the same migration.",
          interpret:
            "Bundling a URL restructure with an HTTPS migration is exactly the kind of complexity the lesson warns against, each extra hop is measurable signal dilution and slower navigation, and it also makes the 28 404s much more likely, since redirect-chain migrations are far easier to leave gaps in.",
          soWhat: [
            {
              symptom: "3 of 10 sampled URLs redirect through 2 hops instead of 1",
              action: "Update the redirect rules to map old HTTP URLs directly to their final HTTPS destination, skipping the intermediate hop",
              effort: "dev ticket",
            },
            {
              symptom: "28 old URLs return 404 instead of redirecting",
              action: "Cross-reference the 28 against the pre-migration URL list and add missing redirect rules for each",
              effort: "half day",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-2-header-audit",
          concept: "Security Headers That Actually Matter",
          lessonAnchor: "security-headers-that-actually-matter",
          theoryRecap:
            "The lesson lists HSTS, CSP, X-Content-Type-Options, and Referrer-Policy as the headers worth configuring, and notes they don't move rankings directly but enable faster protocol negotiation and support the trust signals that feed conversion.",
          question:
            "Six weeks post-migration, are the expected security headers actually present on the seller-help microsite responses?",
          toolName: "Screaming Frog SEO Spider",
          where: "Screaming Frog > crawl the migrated microsite > Internal tab > check the HTTP Headers column.",
          procedure: [
            "Crawl the seller-help microsite in Screaming Frog",
            "Open the response headers for a sample of URLs (Internal tab, HTTP Header data)",
            "Check specifically for Strict-Transport-Security and X-Content-Type-Options",
            "Compare against the parent Flipkart domain's headers for consistency",
          ],
          outputSample:
            "Response Header Audit, seller-help microsite\n" +
            "------------------------------------------\n" +
            "Strict-Transport-Security: ABSENT on all crawled URLs\n" +
            "X-Content-Type-Options: nosniff, present on all crawled URLs\n" +
            "Referrer-Policy: ABSENT\n\n" +
            "Parent flipkart.com domain, for comparison:\n" +
            "Strict-Transport-Security: max-age=31536000; includeSubDomains, PRESENT",
          healthy:
            "The migrated microsite carries the same security headers as the parent domain, HSTS included, since it now serves exclusively over HTTPS.",
          unhealthy:
            "HSTS is completely absent on the microsite despite the parent domain having it configured for over a year, meaning first-time visitors to the microsite aren't protected against an SSL-stripping attempt on their very first request.",
          interpret:
            "The migration moved the protocol but not the header configuration, a common gap when a microsite is migrated separately from the main domain's server config. Since the microsite is a subdomain, adding includeSubDomains to the parent's existing HSTS policy would likely have covered it automatically, so the real root cause is a server config gap on the migration ticket.",
          soWhat: [
            {
              symptom: "HSTS is missing on the migrated microsite despite the parent domain having it configured",
              action: "Add the microsite subdomain explicitly to the parent's HSTS policy, verify with a header check post-deploy",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-mixed-content-check",
          concept: "Testing Your Setup",
          lessonAnchor: "testing-your-setup",
          theoryRecap:
            "The lesson's testing checklist calls for a mixed-content check on high-traffic templates after every migration, since a single new third-party script can silently reintroduce insecure resources.",
          question: "Is any embedded resource on the migrated seller-help pages still loading over plain HTTP?",
          toolName: "Screaming Frog SEO Spider",
          where: "Screaming Frog > crawl the microsite > filter the Internal/External tabs by Protocol = HTTP among embedded resources on HTTPS pages.",
          procedure: [
            "Re-run the microsite crawl with 'Crawl All Subdomains' and image/JS/CSS resource crawling enabled",
            "Filter the resulting resource list by Protocol = HTTP",
            "Cross-reference which parent HTML pages embed each flagged HTTP resource",
            "Note whether the pattern concentrates on one page type or is scattered",
          ],
          outputSample:
            "Mixed Content Scan, seller-help microsite\n" +
            "------------------------------------------\n" +
            "Total embedded resources scanned: 1,240\n" +
            "Loading over plain HTTP: 6\n" +
            "  All 6 are the same third-party PDF-viewer widget script, embedded\n" +
            "  on the 6 'Download Seller Agreement' template pages only.",
          healthy: "Zero embedded resources load over HTTP anywhere on the migrated microsite.",
          unhealthy:
            "6 pages, all sharing the same 'Download Seller Agreement' template, embed a third-party PDF-viewer script over plain HTTP, breaking the padlock specifically on the pages where sellers are about to download a legal document.",
          interpret:
            "This is a small, contained problem, only 6 of 1,240 resources, but it's concentrated on exactly the pages where a broken padlock does the most trust damage: a legal agreement download. Small in count, high in consequence, which is why the lesson calls this the most common HTTPS migration bug even on an otherwise clean deployment.",
          soWhat: [
            {
              symptom: "The PDF-viewer widget on the Seller Agreement template loads over HTTP",
              action: "Update the widget's embed snippet to use its HTTPS endpoint, or self-host the viewer if the vendor has none",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Read the Page Indexing report for redirect and 404 counts on the migrated path",
            why: "Free, and the primary source for confirming which old URLs are redirecting cleanly versus 404ing.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the microsite for response headers and mixed-content resources",
            why: "Free tier crawls up to 500 URLs and exposes both HTTP headers and embedded resource protocols.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Confirm organic traffic recovers once the fixes ship",
            why: "All three checks in this audit are free-tier. Ahrefs is only useful afterward, to confirm organic traffic actually recovers.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "All three checks in this audit are free-tier. Ahrefs is only useful afterward, to confirm organic traffic actually recovers once the fixes ship.",
      },
      deliverable:
        "A three-part remediation ticket: collapse the 2-hop redirect chains and fix the 28 404s, add the microsite subdomain to the parent HSTS policy, and fix the PDF-viewer widget's HTTP embed on the Seller Agreement template.",
      sampleOutput:
        "The same three-part audit on a Delhivery partner-portal migration (illustrative) found a similar HSTS gap on a subdomain migrated separately from delhivery.com's main config, plus zero mixed content, since Delhivery's team had already standardized all third-party embeds to HTTPS-only vendors before migrating.",
      successCriteria: [
        "Found the 2-hop redirect chains and connected them to the bundled URL-restructure decision, not a vague 'redirects are slow' statement",
        "Found the specific missing HSTS header and explained the includeSubDomains fix path",
        "Found the specific mixed-content source (PDF-viewer widget) and which template it concentrates on",
        "Prioritized the Seller Agreement template fix by consequence (legal document trust), not just by resource count",
      ],
      portfolioReady: true,
      stretch: "Run the same three-part audit on any HTTPS migration you've been part of, or on a competitor's recently redesigned subdomain.",
      whatToLookFor: [
        { label: "Redirect hop count", detail: "Does each old URL resolve in a single 301 hop, or does it chain through an intermediate step?" },
        { label: "Header parity", detail: "Does the migrated property carry the same security headers as its parent domain or comparable properties?" },
        { label: "Mixed-content concentration", detail: "Are HTTP resources scattered randomly, or concentrated on one high-consequence template?" },
        { label: "Consequence, not just count", detail: "Does the volume of affected URLs match the business risk, or is a small number of URLs disproportionately important?" },
      ],
      decision: {
        prompt: "Traffic to the seller-help microsite is flat six weeks post-migration. Which finding should be prioritized first?",
        options: [
          { id: "a", label: "The 6 pages with mixed content on the PDF-viewer widget", correct: false },
          { id: "b", label: "The 28 URLs returning 404 instead of redirecting", correct: true },
          { id: "c", label: "The missing Referrer-Policy header", correct: false },
          { id: "d", label: "The 2-hop redirect chains on 3 of 10 sampled URLs", correct: false },
        ],
        explanation:
          "404s mean the old URL simply stops working, losing both users and any remaining link equity outright, which is the most direct explanation for flat rather than recovering traffic. The mixed-content and redirect-chain issues degrade quality but don't break access, and the missing Referrer-Policy header has no direct traffic impact at all.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "The seller-help microsite migration requires a three-part remediation before traffic can be expected to recover. First, fix the 28 old URLs currently returning 404 and collapse the 2-hop redirect chains on the 3 of 10 sampled URLs where an HTTPS switch was bundled with an unrelated URL restructure. Second, add the microsite subdomain explicitly to the parent flipkart.com HSTS policy, since it currently carries no HSTS despite the parent domain having had it configured for over a year. Third, update the PDF-viewer widget's HTTP embed on the six Seller Agreement template pages, since a broken padlock on a legal-document download page carries disproportionate trust risk relative to its small resource count.",
      },
      commonMistakes: [
        { mistake: "Assuming a migration is complete once the protocol switches", explanation: "redirect integrity, header configuration, and mixed content all need separate verification after the switch, not just before it." },
        { mistake: "Bundling a URL restructure into the same deploy as an HTTPS migration", explanation: "combining two changes at once makes each extra redirect hop and each 404 harder to isolate and debug." },
        { mistake: "Assuming a subdomain inherits the parent domain's security headers automatically", explanation: "a microsite migrated separately from the main domain's server config can be missing headers the parent has had for years." },
        { mistake: "Prioritizing by resource count instead of consequence", explanation: "6 of 1,240 resources sounds negligible until you notice they sit on the page where sellers download a legal agreement." },
      ],
      keyTakeaway:
        "A migration audit isn't finished when the protocol switches, it's finished when redirects, headers, and embedded resources are all verified post-launch. Flat traffic after a migration is a symptom with several possible causes, and the fix is to isolate which specific gap, not just confirm 'the migration happened'.",
    },
  ],

  "internal-linking": [
    {
      id: "internal-linking-orphan-anchor-audit",
      tier: "mini",
      archetype: "audit",
      title: "Finding the Ghost Pages: An Orphan Page & Anchor Text Audit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a crawl of a live content section, find pages with zero internal links pointing at them and grade the site's anchor text quality, then produce a prioritized fix list a content team can act on this week.",
      companyId: "thredup",
      scenario:
        "You're the SEO analyst at ThredUp, the online resale marketplace, ahead of a push to grow organic traffic to its styling and sustainability guide content. Before anyone writes a single new post, your manager wants to know how much internal-linking value is already being wasted on the existing guide library.",
      brief:
        "Two passes over the same crawl: first isolate orphaned pages by diffing the sitemap against what's actually discoverable by following links, then export every internal link's anchor text and grade how much of it is generic versus descriptive.",
      mode: "diagnostic",
      conceptsCovered: [
        "Orphaned pages",
        "Anchor Text: The Overlooked Relevance Signal",
      ],
      skills: ["Internal Linking", "Site Crawling", "Content Audit"],
      keyQuestion: "How many published guide pages are actually invisible to Google because nothing links to them, and how much anchor text is wasting its relevance signal?",
      prerequisites: [
        "Ability to run and export a crawl in Screaming Frog SEO Spider",
        "Basic spreadsheet skills (VLOOKUP or equivalent, filtering, pivoting)",
      ],
      terminology: [
        { term: "Orphaned page", definition: "a page with zero internal links pointing to it, making it hard for crawlers to find or treat as important, even if it's in the sitemap." },
        { term: "Anchor text", definition: "the clickable text of a link; descriptive anchor text tells Google and readers what the destination page covers, generic text like 'click here' tells them nothing." },
      ],
      steps: [
        {
          stepId: "step-1-orphan-hunt",
          concept: "Orphaned pages",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes callout names orphaned pages, pages with zero internal links pointing to them, as one of the most common SEO errors: a page can have great content, but if nothing links to it, crawlers may never find it or may treat it as unimportant.",
          question:
            "The XML sitemap lists 214 guide URLs. A standard crawl starting from the homepage and following only links only discovers 187 of them. What does that 27-page gap actually mean, and how do you confirm it before flagging it to the content team?",
          toolName: "Screaming Frog SEO Spider",
          where:
            "Run two crawls: a List Mode crawl of the sitemap URLs, and a standard spider crawl starting from the homepage. Compare the two URL lists.",
          procedure: [
            "Upload the sitemap.xml to Screaming Frog in List Mode and export all 214 URLs",
            "Run a standard crawl from the homepage following only discoverable links",
            "Use a VLOOKUP (or Screaming Frog's crawl comparison) to find sitemap URLs absent from the link-discovered list",
            "For each gap URL, manually check the page in a browser to confirm zero internal links point to it, ruling out a temporary crawl-budget miss",
          ],
          outputSample:
            "Sitemap URLs: 214\n" +
            "Discovered via internal links: 187\n" +
            "Gap (orphan candidates): 27\n\n" +
            "Confirmed orphans (sample of 5):\n" +
            "  /guides/how-to-consign-designer-handbags       0 inbound internal links, last modified 2025-02\n" +
            "  /guides/sustainable-fashion-glossary            0 inbound internal links, last modified 2024-11\n" +
            "  /guides/thrift-flip-tutorials                   0 inbound internal links, last modified 2025-01\n" +
            "  /guides/capsule-wardrobe-basics                 0 inbound internal links, last modified 2024-09\n" +
            "  /guides/vintage-denim-care                      0 inbound internal links, last modified 2025-03\n" +
            "(22 more, full list in export)",
          healthy:
            "Every sitemap URL is reachable within a few clicks by following real links from the homepage or a category hub; the sitemap and the crawl agree.",
          unhealthy:
            "27 published guides sit in the sitemap with zero pages linking to them, meaning Google may never crawl them at all or may treat them as unimportant even if they're excellent content.",
          interpret:
            "A page existing in the sitemap doesn't mean Google treats it as real. The sitemap is a hint; internal links are the actual discovery and authority mechanism the lesson describes, so a sitemap-only page is functionally invisible until something links to it.",
          soWhat: [
            {
              symptom: "27 guide pages have zero internal links pointing to them",
              action:
                "Add at least one contextual internal link to each orphan from a topically related, already-linked page this week",
              effort: "half day",
            },
            {
              symptom: "Nobody currently checks for orphans before or after publishing",
              action:
                "Add an orphan-page check to the quarterly content audit using the same sitemap-vs-crawl diff",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-anchor-audit",
          concept: "Anchor Text: The Overlooked Relevance Signal",
          lessonAnchor: "anchor-text-the-overlooked-relevance-signal",
          theoryRecap:
            "The lesson contrasts weak anchor text ('click here') against strong, descriptive anchor text ('marketing software pricing options'), noting the second version tells Google exactly what the destination page covers while the first tells it nothing.",
          question:
            "Screaming Frog's Internal Links export lists 1,240 contextual links across the guide library. What share uses generic anchor text, and which specific phrases show up most?",
          toolName: "Screaming Frog SEO Spider",
          where: "Internal tab > export all, then filter and pivot the Anchor Text column in a spreadsheet.",
          procedure: [
            "Export the full Internal Links report from the Screaming Frog crawl",
            "Filter to links inside the article body (exclude nav, footer, sidebar links)",
            "Flag any anchor text matching 'click here', 'read more', 'learn more', or 'here'",
            "Calculate what percentage of the 1,240 contextual links fall into the generic bucket",
          ],
          outputSample:
            "Contextual internal links audited: 1,240\n\n" +
            "Generic anchor text ('click here' / 'read more' / 'learn more' / 'here'): 318 links (25.6%)\n" +
            "Descriptive anchor text: 922 links (74.4%)\n\n" +
            "Top 5 generic offenders by frequency:\n" +
            "  \"read more\"     146 occurrences\n" +
            "  \"click here\"     89 occurrences\n" +
            "  \"learn more\"     61 occurrences\n" +
            "  \"here\"           22 occurrences",
          healthy:
            "Under 5% of contextual links use generic anchor text; the vast majority describe the destination page's actual topic.",
          unhealthy:
            "A quarter of all contextual links (318 of 1,240) tell Google and readers nothing about what they're about to click into.",
          interpret:
            "318 wasted relevance signals is 318 missed chances to tell Google what each destination page covers, exactly the gap the lesson's weak-vs-strong anchor text comparison describes, just multiplied across the whole library.",
          soWhat: [
            {
              symptom: "146 links use 'read more' as anchor text",
              action:
                "Rewrite the 20 highest-traffic instances first with descriptive anchor text naming the destination topic",
              effort: "half day",
            },
            {
              symptom: "No style guide rule currently bans generic anchor text",
              action:
                "Add a one-line rule to the content style guide: no 'click here' or 'read more' in body copy links, ever",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the sitemap and the live link graph, then export internal links and anchor text in bulk",
            why: "Free for up to 500 URLs, comfortably covers a 214-page guide library in one crawl with no cost.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Cross-check the Links report to confirm which pages Google itself has recorded zero or few internal links to",
            why: "Free, and shows Google's own recorded link graph, a useful second source against the crawl-based diff.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Run the same orphan-page and anchor-text audit automatically across sites larger than 500 URLs",
            why: "The free path (Screaming Frog + Search Console) is complete for a library this size; Ahrefs' Site Audit earns its cost once a site outgrows Screaming Frog's free crawl limit.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Both passes in this project are fully completable free: a 214-URL crawl is well inside Screaming Frog's 500-URL free tier, and Search Console's Links report costs nothing.",
      },
      deliverable:
        "An audit sheet listing all confirmed orphan pages with a proposed linking source for each, plus a full anchor-text fix list (generic anchor found -> proposed descriptive replacement) sorted by traffic value.",
      sampleOutput:
        "Applying the same two-pass audit to a Rent the Runway-style style-guide library (illustrative): 19 orphaned 'how to style' posts were found sitting entirely outside the link graph despite ranking on page 2 for their target terms, each got one contextual link added from a linked category hub within a day. Anchor text audit found 31% of links used 'shop the look' as identical anchor text on every single reference, a real but different problem than generic text: exact-match repetition. The fix rotated in three descriptive variants instead of one repeated phrase.",
      successCriteria: [
        "Correctly diffed the sitemap against a link-discovered crawl to isolate real orphan candidates, not just sitemap noise",
        "Manually confirmed at least one orphan page in a browser before flagging it, not relying on the crawl diff alone",
        "Calculated the exact percentage of generic anchor text across the contextual link set (not an estimate)",
        "Proposed a specific linking source page for each orphan, not just a generic 'add a link' instruction",
      ],
      portfolioReady: true,
      stretch:
        "Run the same sitemap-vs-crawl diff against your own site's XML sitemap and fix the top 5 orphans by estimated traffic potential.",
      whatToLookFor: [
        { label: "Confirmation, not assumption", detail: "Does the crawl-diff gap actually mean zero inbound links, or could it be a temporary crawl-budget miss?" },
        { label: "Scale of the gap", detail: "What share of the total library is affected, a handful of pages or a meaningful chunk?" },
        { label: "Anchor text pattern", detail: "Is generic anchor text scattered randomly, or concentrated on a few repeated phrases worth fixing first?" },
        { label: "Actionability", detail: "Does each finding point to a specific fix (which page should link to the orphan, which phrase to replace), not just a general problem statement?" },
      ],
      decision: {
        prompt: "The sitemap lists 214 URLs but the homepage-following crawl only discovers 187. What's the correct next step before flagging anything to the content team?",
        options: [
          { id: "a", label: "Report all 27 as orphans immediately based on the crawl diff alone", correct: false },
          { id: "b", label: "Manually confirm a sample of the 27 in a browser to rule out a crawl-budget miss before reporting", correct: true },
          { id: "c", label: "Ignore the gap since the sitemap is the authoritative source", correct: false },
          { id: "d", label: "Re-run the crawl with a higher crawl-budget setting and assume that fixes it", correct: false },
        ],
        explanation:
          "The crawl diff is a strong signal but not proof by itself, manually checking a sample confirms these are genuinely unlinked pages rather than an artifact of crawl depth or budget settings. The sitemap being authoritative is exactly the trap the lesson warns about, a sitemap listing does not mean Google treats the page as discoverable or important."
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "The guide library has 27 confirmed orphan pages (12.6% of the 214-page sitemap) receiving zero internal links, and 25.6% of contextual internal links (318 of 1,240) use generic anchor text like 'read more' or 'click here'. Before any new content is written, the content team should add at least one contextual link to each orphan from a topically related, already-linked page, and rewrite the 20 highest-traffic generic anchors with descriptive text naming the destination topic. Both fixes are low-effort and recover existing content value rather than requiring new production.",
      },
      commonMistakes: [
        { mistake: "Treating sitemap inclusion as proof of discoverability", explanation: "the sitemap is a hint, not a guarantee, a page can sit in the sitemap for years while receiving zero internal links and functioning as invisible to crawlers." },
        { mistake: "Flagging a crawl-diff gap as an orphan without manual confirmation", explanation: "a temporary crawl-budget miss can produce the same gap as a true orphan, and reporting the wrong pages wastes the content team's time." },
        { mistake: "Fixing anchor text without measuring the actual percentage first", explanation: "'a lot of our links say click here' is not actionable, a precise count (25.6%, 318 links) is what gets prioritized against other work." },
        { mistake: "Recommending a generic 'add more links' fix", explanation: "each orphan needs a specific, named source page, and each generic anchor needs a specific descriptive replacement, not a vague instruction to link more." },
      ],
      keyTakeaway:
        "Internal linking value is often wasted, not missing. A sitemap full of good content can still function as invisible to Google if nothing links to it, and a quarter of a site's link equity can leak away through generic anchor text alone. Both problems are fixable in an afternoon once they're actually measured.",
    },
    {
      id: "internal-linking-pillar-cluster-map",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Web: A Pillar-Cluster Internal Linking Map",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a new pillar topic and five planned cluster posts, produce a complete, real internal-linking map, every link, both directions, with anchor text, plus a crawl-depth check confirming every post lands within the lesson's three-click rule.",
      companyId: "klaviyo",
      scenario:
        "Klaviyo's content team is publishing a new pillar page, \"The Complete Guide to Email Marketing Automation\", along with five supporting cluster posts. Nobody has mapped how they should actually link together, so posts are at real risk of shipping as five disconnected articles instead of one dense topical cluster.",
      brief:
        "Build the actual link map: name the pillar, name the five cluster posts, specify every pillar-to-cluster and cluster-to-pillar link with its anchor text, add cluster-to-cluster links where topically relevant, then verify crawl depth from the homepage.",
      mode: "build",
      conceptsCovered: [
        "The Topic Cluster Model: The Best Architecture in 2025",
        "The Three-Click Rule",
      ],
      skills: ["Content Architecture", "Internal Linking", "Site Structure Planning"],
      keyQuestion: "How should five cluster posts and a pillar page link together, in both directions, so they form one dense topical web instead of five disconnected articles?",
      prerequisites: [
        "A defined pillar topic and its planned cluster subtopics",
        "Basic spreadsheet skills for planning a link map",
      ],
      terminology: [
        { term: "Pillar page", definition: "a comprehensive page covering a broad topic, linking out to narrower cluster posts that each cover one subtopic in depth." },
        { term: "Topic cluster model", definition: "a content architecture where cluster posts link back to a pillar, the pillar links out to every cluster post, and related clusters link to each other." },
        { term: "Three-click rule", definition: "the guideline that any important page should be reachable within 3 clicks of the homepage, since link distance affects crawl priority and authority flow." },
      ],
      steps: [
        {
          stepId: "step-1-choose-pillar-cluster",
          concept: "The Topic Cluster Model: The Best Architecture in 2025",
          lessonAnchor: "the-topic-cluster-model-the-best-architecture-in-2025",
          theoryRecap:
            "The lesson's four-step model: build a comprehensive pillar page, write cluster posts on subtopics, link every cluster post back to the pillar, link the pillar out to every cluster post, and link related cluster posts to each other where relevant.",
          question:
            "Given the pillar \"Email Marketing Automation\" and five candidate cluster posts (welcome flows, abandoned cart flows, win-back flows, segmentation for automation, and A/B testing automated emails), how should every link between them actually run, in both directions?",
          toolName: "Google Sheets",
          where: "A planning spreadsheet: pillar row, five cluster-post rows, forward-link and back-link columns.",
          procedure: [
            "List the pillar page and all five cluster posts as rows",
            "For each cluster post, write the exact anchor text it should use to link back to the pillar",
            "For the pillar page, write the exact anchor text it should use to link out to each of the five cluster posts",
            "Identify which cluster posts are topically close enough to link directly to each other (e.g. welcome flows and segmentation)",
          ],
          outputSample:
            "PILLAR: /email-marketing-automation-guide\n\n" +
            "Cluster 1: /welcome-flow-automation\n" +
            "  -> Pillar anchor: \"the complete email marketing automation guide\"\n" +
            "  Pillar -> Cluster 1 anchor: \"setting up a welcome flow\"\n\n" +
            "Cluster 2: /abandoned-cart-flow-automation\n" +
            "  -> Pillar anchor: \"our full automation guide\"\n" +
            "  Pillar -> Cluster 2 anchor: \"recovering abandoned carts automatically\"\n\n" +
            "Cluster 3: /win-back-flow-automation\n" +
            "  -> Pillar anchor: \"email marketing automation strategy\"\n" +
            "  Pillar -> Cluster 3 anchor: \"win-back flows for lapsed customers\"\n\n" +
            "Cluster 4: /segmentation-for-automation\n" +
            "  -> Pillar anchor: \"automation guide\"\n" +
            "  Pillar -> Cluster 4 anchor: \"segmenting your list for automated flows\"\n" +
            "  Cluster 4 -> Cluster 1 anchor: \"segmenting new subscribers for your welcome flow\"\n\n" +
            "Cluster 5: /ab-testing-automated-emails\n" +
            "  -> Pillar anchor: \"automation fundamentals\"\n" +
            "  Pillar -> Cluster 5 anchor: \"A/B testing your automated flows\"\n" +
            "  Cluster 5 -> Cluster 2 anchor: \"testing subject lines on abandoned cart emails\"",
          healthy:
            "Every cluster post links back to the pillar and receives a link from it, anchor text varies across posts instead of repeating identically, and at least two cluster-to-cluster links exist where topics genuinely overlap.",
          unhealthy:
            "Five cluster posts published with links only to the homepage and category page, no pillar-to-cluster web at all, exactly the loosely-connected-posts pattern the lesson contrasts against the topic cluster model.",
          interpret:
            "The two cluster-to-cluster links (segmentation into welcome flows, A/B testing into abandoned cart) aren't decoration, they're what makes this a dense topical web instead of six posts that each happen to mention the pillar once.",
          soWhat: [
            {
              symptom: "Five cluster posts are in the CMS as drafts with no linking plan attached",
              action: "Attach this link map to each draft before it goes to the editor, not after publish",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-crawl-depth-check",
          concept: "The Three-Click Rule",
          lessonAnchor: "the-three-click-rule",
          theoryRecap:
            "The lesson's three-click rule: any important page should be reachable within 3 clicks from the homepage, since Google's crawlers prioritize pages close to the homepage in link distance and pages 7 clicks deep get crawled rarely with almost no internal authority flow.",
          question:
            "Two of the five cluster posts (win-back flows and A/B testing) currently have no path from the homepage shorter than Homepage -> Blog -> Category -> Post archive -> Post, 4 clicks. How do you get both under 3 clicks without a navigation redesign?",
          toolName: "Google Sheets",
          where: "Same spreadsheet, add a click-depth column tracing the shortest path from homepage to each cluster post.",
          procedure: [
            "Trace the current shortest path from the homepage to each of the 5 cluster posts",
            "Flag any post at 4+ clicks",
            "Add the flagged posts to the pillar page's outbound link list (the pillar itself should sit 1-2 clicks from the homepage)",
            "Re-trace the path: homepage -> pillar -> cluster post, confirm it now resolves in 2-3 clicks",
          ],
          outputSample:
            "BEFORE:\n" +
            "  Win-back flows:        Homepage -> Blog -> Category -> Archive -> Post   (4 clicks)\n" +
            "  A/B testing automation: Homepage -> Blog -> Category -> Archive -> Post   (4 clicks)\n\n" +
            "AFTER (both added to the pillar's outbound link list, pillar is 1 click from homepage nav):\n" +
            "  Win-back flows:        Homepage -> Pillar -> Post   (2 clicks)\n" +
            "  A/B testing automation: Homepage -> Pillar -> Post   (2 clicks)",
          healthy:
            "Every cluster post resolves in 3 clicks or fewer from the homepage, using the pillar page itself as the shortcut rather than requiring a navigation rebuild.",
          unhealthy:
            "Publishing all five cluster posts and leaving two of them reachable only through a 4-click archive path, guaranteeing they get crawled less often and receive less authority than the other three.",
          interpret:
            "The pillar page isn't just a hub for topical authority, it's also the fastest lever for fixing crawl depth: linking a deep post from a shallow, well-linked page instantly shortens its path without touching the site's navigation structure.",
          soWhat: [
            {
              symptom: "Two cluster posts sit 4 clicks from the homepage",
              action: "Add both to the pillar page's outbound link list before publishing either post",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Confirm the new links get crawled and check for any new indexing errors after the cluster ships",
            why: "Free, the only way to confirm Google has actually seen and processed the new link structure.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Re-crawl the live site after publishing to verify the actual click-depth from the homepage matches the plan",
            why: "Free tier easily covers a single pillar-plus-five-post cluster; confirms the plan matches reality, not just the spreadsheet.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Run a content-gap/topic-cluster analysis to check whether a 6th cluster subtopic is missing before finalizing the map",
            why: "The free path (manual mapping + a re-crawl) is complete for planning and verifying this exact 5-post cluster; SEMrush is worth it for discovering additional subtopics at scale.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
      },
      deliverable:
        "A complete pillar-cluster link map: 1 pillar page plus 5 cluster posts, every link listed in both directions with its anchor text, and a crawl-depth check confirming every post resolves within 3 clicks of the homepage.",
      sampleOutput:
        "The same build applied to a FirstCry-style parenting pillar, \"Newborn Care Essentials\", illustrative: 5 cluster posts (feeding schedules, sleep training, vaccination timelines, babyproofing, postpartum recovery) were mapped with 10 pillar-cluster links plus 3 cluster-to-cluster links (feeding schedules into sleep training, vaccination timelines into babyproofing). Two posts that would have sat 4 clicks deep in the category archive were pulled to 2 clicks by adding them to the pillar's outbound list before publish.",
      successCriteria: [
        "All 5 cluster posts have both a link to the pillar and a link from the pillar, each with distinct (not identical) anchor text",
        "At least 2 genuinely topical cluster-to-cluster links are specified, not just pillar-and-back",
        "Every cluster post's shortest path from the homepage is traced and shown to resolve in 3 clicks or fewer",
        "Any post that would have exceeded 3 clicks has a specific, named fix (not a vague 'improve navigation' note)",
      ],
      portfolioReady: true,
      stretch:
        "Take a real topic your own site or client covers with 3+ existing loosely-related posts, retroactively map them into a pillar-cluster structure, and add the missing links.",
      whatToLookFor: [
        { label: "Bidirectionality", detail: "Does every cluster post both link to and receive a link from the pillar, not just one direction?" },
        { label: "Anchor text variety", detail: "Does anchor text vary across posts, or does the same phrase repeat identically everywhere?" },
        { label: "Topical cluster-to-cluster links", detail: "Are cross-links between clusters based on genuine topical overlap, not added just to hit a count?" },
        { label: "Click depth", detail: "Does every post resolve within 3 clicks of the homepage, and if not, what's the specific fix?" },
      ],
      decision: {
        prompt: "Win-back flows and A/B testing automation currently sit 4 clicks from the homepage. What's the correct fix?",
        options: [
          { id: "a", label: "Redesign the site's main navigation to add both posts directly", correct: false },
          { id: "b", label: "Add both posts to the pillar page's outbound link list, since the pillar sits close to the homepage", correct: true },
          { id: "c", label: "Leave them at 4 clicks since the three-click rule is only a guideline", correct: false },
          { id: "d", label: "Move both posts to the homepage's blog roll", correct: false },
        ],
        explanation:
          "The pillar page is already close to the homepage, so linking the deep posts from the pillar shortens their path to 2 clicks without touching the site's navigation structure at all. A navigation redesign is far more effort than necessary, and leaving posts at 4 clicks ignores the lesson's point that crawl priority and authority flow both drop off with link distance.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Before the five cluster posts publish, the linking map should be finalized as specified: every cluster post links to the pillar and receives a link from it, using distinct anchor text per post rather than repeating the same phrase. Two cluster-to-cluster links (segmentation into welcome flows, A/B testing into abandoned cart) should ship alongside the pillar links, since these reflect genuine topical overlap rather than arbitrary cross-linking. Win-back flows and A/B testing automation should be added to the pillar's outbound link list before publish, since their current path resolves at 4 clicks and this single addition brings both to 2 clicks.",
      },
      commonMistakes: [
        { mistake: "Linking clusters to the pillar but not the pillar back to clusters", explanation: "the topic cluster model requires links in both directions, a one-way link chain doesn't build the same topical density." },
        { mistake: "Reusing identical anchor text across every cluster-to-pillar link", explanation: "varied, descriptive anchor text carries more relevance signal than the same phrase repeated five times." },
        { mistake: "Adding cluster-to-cluster links without genuine topical overlap", explanation: "a forced cross-link between unrelated posts doesn't strengthen the topical web and can confuse readers about the post's actual focus." },
        { mistake: "Fixing click depth with a navigation redesign instead of the pillar's link list", explanation: "the pillar page is usually the fastest lever for reducing click depth, a full navigation change is unnecessary effort for the same result." },
      ],
      keyTakeaway:
        "A topic cluster isn't just a group of related posts, it's a deliberately built link structure where every connection, pillar to cluster, cluster to pillar, and cluster to cluster, is planned before publish. Getting the map right up front avoids shipping posts that technically cover related topics but never actually reinforce each other.",
    },
  ],

  "schema-structured-data": [
    {
      id: "schema-structured-data-broken-jsonld-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Schema Violations: A Broken Product JSON-LD Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two JSON-LD specimens drafted ahead of a Rich Results launch, find every validation error and guideline violation before either ships, and rank them by how much rich-result eligibility each one costs.",
      companyId: "lenskart",
      scenario:
        "Lenskart's product team drafted two JSON-LD blocks ahead of a Rich Results push across its eyewear catalog. Both look plausible at a glance. Your job is to catch what fails before either one goes live sitewide.",
      brief:
        "Two specimens, two teardowns: a Product block with a type mismatch and a missing property, and an FAQ block copied from an unrelated page with a syntax error baked in.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "How It Works"],
      skills: ["Structured Data", "JSON-LD Validation", "Schema Markup"],
      keyQuestion: "Which errors in each JSON-LD specimen would block rich results outright, versus which are guideline violations that risk a manual penalty?",
      prerequisites: [
        "Basic familiarity with JSON syntax",
        "Understanding of what schema.org structured data is used for",
      ],
      terminology: [
        { term: "JSON-LD", definition: "a JSON-based format for embedding schema.org structured data in a page, read by Google to power rich results." },
        { term: "Rich results", definition: "enhanced search listings, star ratings, prices, FAQ dropdowns, generated from valid structured data matching what's visibly on the page." },
        { term: "Guideline violation", definition: "structured data that is technically valid JSON but violates Google's content rules, such as marking up content not visible on the page, risking a manual action." },
      ],
      teardownItems: [
        {
          itemId: "lenskart-product-schema-specimen",
          specimenSource: "synthetic-realistic",
          prompt:
            "Lenskart's product team drafted this JSON-LD block for a new eyewear PDP ahead of launch. The live page shows a price of ₹1,499 and currently has no reviews section (reviews ship next sprint). Validate the block against the lesson's rules before it ships.",
          specimen:
            "<script type=\"application/ld+json\">\n" +
            "{\n" +
            "  \"@context\": \"https://schema.org\",\n" +
            "  \"@type\": \"Article\",\n" +
            "  \"name\": \"Lenskart Ray Vision Blue-Light Glasses\",\n" +
            "  \"description\": \"Lightweight blue-light-filtering eyewear frame.\",\n" +
            "  \"offers\": {\n" +
            "    \"@type\": \"Offer\",\n" +
            "    \"price\": \"1499\"\n" +
            "  },\n" +
            "  \"aggregateRating\": {\n" +
            "    \"@type\": \"AggregateRating\",\n" +
            "    \"ratingValue\": \"4.6\",\n" +
            "    \"reviewCount\": \"212\"\n" +
            "  }\n" +
            "}\n" +
            "</script>",
          answerKey: [
            {
              defect: "@type is set to \"Article\" instead of \"Product\"",
              severity: "critical",
              whyItMatters:
                "Google can't trigger Product rich results (price, star rating, stock badge) for a page typed as Article, so none of the intended rich result appears regardless of how complete the rest of the markup is.",
              lessonRef: "Common Mistakes: Using the wrong schema type for the content",
              owner: "developer",
            },
            {
              defect:
                "aggregateRating declares a 4.6 rating from 212 reviews, but the live page has no visible reviews section yet",
              severity: "critical",
              whyItMatters:
                "Google explicitly prohibits marking up content that isn't visible on the page. Shipping this risks a manual action that strips rich-result eligibility sitewide, not just on this one page.",
              lessonRef: "Common Mistakes: Marking up content that is not visible on the page",
              owner: "either",
            },
            {
              defect: "offers.price is present but priceCurrency is missing",
              severity: "moderate",
              whyItMatters:
                "Without priceCurrency, Google can't reliably render the price in a rich result and may reject the Offer block outright.",
              lessonRef: "How It Works",
              owner: "developer",
            },
          ],
          distractors: [
            "The ratingValue is stated as 4.6 instead of a whole number; decimal rating values are allowed by schema.org.",
            "The script tag sits in a <script type=\"application/ld+json\"> block, exactly Google's recommended JSON-LD placement.",
          ],
          partialCredit: true,
        },
        {
          itemId: "lenskart-faq-schema-specimen",
          specimenSource: "synthetic-realistic",
          prompt:
            "This FAQPage block was drafted for a Lenskart blue-light-glasses FAQ section by copying and lightly editing markup from an old RayCon sunglasses page. Validate it before it ships.",
          specimen:
            "<script type=\"application/ld+json\">\n" +
            "{\n" +
            "  \"@context\": \"https://schema.org\",\n" +
            "  \"@type\": \"FAQPage\",\n" +
            "  \"mainEntity\": [\n" +
            "    {\n" +
            "      \"@type\": \"Question\",\n" +
            "      \"name\": \"What is the return policy for RayCon sunglasses?\",\n" +
            "      \"acceptedAnswer\": {\n" +
            "        \"@type\": \"Answer\",\n" +
            "        \"text\": \"RayCon offers a 30-day return window on all sunglasses.\"\n" +
            "      },\n" +
            "    }\n" +
            "  ]\n" +
            "}\n" +
            "</script>",
          answerKey: [
            {
              defect:
                "FAQ content references \"RayCon sunglasses\" return policy verbatim, copied from an unrelated page without updating the values",
              severity: "critical",
              whyItMatters:
                "The schema now describes a different product's policy than the one on the actual page. Mismatched schema stops the correct rich result from firing and risks citing the wrong return policy to shoppers.",
              lessonRef: "Common Mistakes: Copying schema code from another site without updating the values",
              owner: "you",
            },
            {
              defect: "A trailing comma follows the Question object's closing brace, before the array's closing bracket",
              severity: "critical",
              whyItMatters:
                "Invalid JSON fails Rich Results Test validation outright. The entire schema block is silently ignored by Google with zero rich-result eligibility, and the error is easy to miss without running validation.",
              lessonRef: "Common Mistakes: Skipping validation after implementation, syntax errors silently kill eligibility",
              owner: "developer",
            },
          ],
          distractors: [
            "The question text is phrased as a full sentence ending in a question mark, matching Google's expected FAQPage question format.",
            "The Answer text is a single sentence rather than a full paragraph; answer length is not a validation requirement.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Run URL Inspection's live Rich Results check against the corrected markup before it ships sitewide",
            why: "Free, the same validation pipeline Google's own indexing system uses, no third-party tool needed to confirm a fix worked.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Run a site-wide schema audit across the whole Lenskart catalog beyond these two specimens",
            why: "The free path (a manual JSON-LD read plus GSC validation) is complete for reviewing a couple of specimens; Ahrefs' Site Audit is worth it once checking schema validity across thousands of product pages.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This teardown needs no paid tool at all, it's a structural read of two short JSON-LD specimens. GSC is free and only worth opening to confirm a fix against a live URL.",
      },
      deliverable:
        "A completed teardown sheet flagging every schema defect across both specimens, ranked critical to cosmetic, each with the corrected JSON-LD line.",
      sampleOutput:
        "Applying the same read to a Warby Parker-style frame PDP (illustrative): the draft correctly used @type: Product, but the aggregateRating block cited a 4.9 rating pulled from a different frame color's reviews entirely, a values-not-updated mistake caught before launch. The fix scoped aggregateRating to the exact SKU shown on the page rather than the product family average.",
      successCriteria: [
        "Identified the Article-instead-of-Product type mismatch in specimen 1 as the highest-severity defect",
        "Flagged the invisible aggregateRating (no reviews shown on page) as a guidelines violation, not just a missing field",
        "Caught the trailing comma in specimen 2 as a hard validation failure, not a cosmetic issue",
        "Named the copied RayCon reference in specimen 2 as a values-not-updated mistake distinct from the syntax error",
      ],
      portfolioReady: true,
      stretch:
        "Paste one of your own site's live JSON-LD blocks into Google's Rich Results Test and fix every error and warning it returns.",
      whatToLookFor: [
        { label: "Type match", detail: "Does @type actually describe what's on the page, or is it borrowed from a different content type?" },
        { label: "Visibility match", detail: "Does every marked-up value actually appear on the rendered page, or is something declared that isn't shown?" },
        { label: "Syntax validity", detail: "Is the JSON itself well-formed, no trailing commas, matching braces, before checking anything else?" },
        { label: "Value provenance", detail: "Do the specific values (price, ratings, policy text) belong to this exact product, or were they copied from elsewhere?" },
      ],
      decision: {
        prompt: "Both specimens have multiple issues. Which single defect should be fixed first across both blocks?",
        options: [
          { id: "a", label: "The decimal ratingValue of 4.6 in specimen 1", correct: false },
          { id: "b", label: "The @type mismatch (Article instead of Product) in specimen 1", correct: true },
          { id: "c", label: "The single-sentence Answer text in specimen 2", correct: false },
          { id: "d", label: "The question phrasing in specimen 2", correct: false },
        ],
        explanation:
          "The @type mismatch prevents Google from considering Product rich results at all, no other fix in that block matters until the type is corrected. The decimal rating, answer length, and question phrasing are all valid per schema.org and are the distractors placed to look suspicious without being real defects.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Neither specimen should ship as drafted. Specimen 1's @type must change from Article to Product, its aggregateRating block must be removed until the reviews section actually ships (marking up invisible content risks a sitewide manual action), and priceCurrency must be added to the offers object. Specimen 2's trailing comma is a hard JSON syntax error that silently voids the entire block, and its FAQ content must be rewritten to reflect this product's actual return policy rather than the copied RayCon reference.",
      },
      commonMistakes: [
        { mistake: "Only checking JSON syntax, not content accuracy", explanation: "syntactically valid JSON can still violate Google's content guidelines, like an aggregateRating for reviews that aren't visible on the page." },
        { mistake: "Missing a mismatched @type because the rest of the fields look complete", explanation: "a wrong @type disqualifies the entire block from its intended rich-result type regardless of how complete the other fields are." },
        { mistake: "Overlooking a trailing comma as a minor issue", explanation: "invalid JSON is silently ignored by Google entirely, it isn't a partial failure, it's zero rich-result eligibility." },
        { mistake: "Assuming copied-and-edited schema is safe once the type and product name are updated", explanation: "every value inside the block, not just the headline fields, needs to be verified against this exact page, not the page it was copied from." },
      ],
      keyTakeaway:
        "A schema teardown has two separate failure classes: syntax errors that silently kill eligibility, and guideline violations that are syntactically fine but risk a manual penalty. Catching only one class isn't enough, both specimens needed a full read against the actual rendered page, not just a JSON linter.",
    },
    {
      id: "schema-structured-data-build-product-schema",
      tier: "core",
      archetype: "build-the-asset",
      title: "Ship It Right: Building a Valid Product Schema Block From Scratch",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given one real product's facts, build a complete, valid JSON-LD Product schema block from zero, matched exactly to what the live page visibly shows, and get it to pass Google's Rich Results Test with zero errors.",
      companyId: "firstcry-brainbees",
      scenario:
        "FirstCry is launching Rich Results on its baby-gear PDPs for the first time. You're handed one real product, a baby stroller priced at ₹8,999, in stock, with a 4.4-star average from 87 verified reviews already visible on the page, and asked to build and sign off the first JSON-LD block from scratch.",
      brief:
        "Four passes: pick the right schema type and top-level fields, fill the offers object correctly, cross-check every value against what the page actually shows, then validate the finished block.",
      mode: "build",
      conceptsCovered: [
        "The Schema Types That Actually Move the Needle",
        "How It Works",
        "Common Mistakes",
      ],
      skills: ["Structured Data", "JSON-LD Authoring", "Schema Validation"],
      keyQuestion: "What does a complete, valid Product JSON-LD block look like when built from a real page's exact visible facts, and how do you confirm it passes Google's own validator?",
      prerequisites: [
        "Basic familiarity with JSON syntax",
        "Access to a text editor and the target product page",
      ],
      terminology: [
        { term: "Offer object", definition: "the nested schema.org block declaring price, priceCurrency, and availability, all three required for Google to render a price badge." },
        { term: "Availability", definition: "a schema.org URL value (e.g. https://schema.org/InStock) telling Google the current stock state of the product." },
      ],
      steps: [
        {
          stepId: "step-1-choose-type-fields",
          concept: "The Schema Types That Actually Move the Needle",
          lessonAnchor: "the-schema-types-that-actually-move-the-needle",
          theoryRecap:
            "The lesson's table lists Product schema as unlocking prices, ratings, and availability, and names it the best fit for ecommerce and SaaS pages.",
          question:
            "Given a baby-stroller PDP with a real name, brand, price, stock status, and an on-page rating, which @type and top-level properties does the lesson's table point you toward?",
          toolName: "Notion",
          where: "A plain text editor, drafting the raw JSON-LD before pasting it into the CMS's head snippet field.",
          procedure: [
            "Confirm the page is a single, purchasable product, not a category or article, and set @type to Product",
            "Add the baseline identity fields: name, image, description, brand",
            "Stub out placeholders for offers and aggregateRating, to be filled in the next steps",
          ],
          outputSample:
            "{\n" +
            "  \"@context\": \"https://schema.org\",\n" +
            "  \"@type\": \"Product\",\n" +
            "  \"name\": \"FirstCry Comfort Ride 3-Wheel Baby Stroller\",\n" +
            "  \"image\": \"https://www.firstcry.com/img/comfort-ride-stroller.jpg\",\n" +
            "  \"description\": \"Lightweight 3-wheel stroller with reclining seat and all-terrain wheels.\",\n" +
            "  \"brand\": {\n" +
            "    \"@type\": \"Brand\",\n" +
            "    \"name\": \"FirstCry Original\"\n" +
            "  },\n" +
            "  \"offers\": { },\n" +
            "  \"aggregateRating\": { }\n" +
            "}",
          healthy:
            "@type is Product, and every baseline identity field (name, image, description, brand) is filled with the real page values, not placeholder text.",
          unhealthy:
            "Leaving @type as a generic \"Thing\" or copying an @type from a different product family, which prevents any of the intended rich-result types from being considered at all.",
          interpret:
            "Getting @type right is the single highest-leverage decision in the whole block. Every property added after this point is wasted if the type doesn't match what the lesson's table says triggers Product rich results.",
          soWhat: [
            {
              symptom: "The draft schema was copy-pasted from a different product template",
              action: "Rebuild the identity fields from this exact product's real page content before adding offers or ratings",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-offer-fields",
          concept: "How It Works",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's minimal JSON-LD example shows the offers object needs price and priceCurrency at minimum, with availability as the field that tells Google whether the item can currently be purchased.",
          question:
            "The stroller is in stock at ₹8,999. What exact values go in offers.price, offers.priceCurrency, and offers.availability?",
          toolName: "Notion",
          where: "Same text editor, filling in the offers object stub from Step 1.",
          procedure: [
            "Set price to the exact numeric value shown on the page, 8999, with no currency symbol inside the field",
            "Set priceCurrency to the ISO code, INR",
            "Set availability to the schema.org URL for the current stock state, https://schema.org/InStock",
          ],
          outputSample:
            "\"offers\": {\n" +
            "  \"@type\": \"Offer\",\n" +
            "  \"price\": \"8999\",\n" +
            "  \"priceCurrency\": \"INR\",\n" +
            "  \"availability\": \"https://schema.org/InStock\"\n" +
            "}",
          healthy:
            "price, priceCurrency, and availability are all present and match the live page exactly, using the full schema.org URL form for availability.",
          unhealthy:
            "Leaving priceCurrency out because \"the price is obviously in rupees,\" which Google's parser does not infer on its own.",
          interpret:
            "All three offer fields are required for Google to render a price badge at all, not just recommended; a partial offers block is treated the same as a missing one for rich-result eligibility.",
          soWhat: [
            {
              symptom: "The offers block is missing priceCurrency",
              action: "Add the ISO currency code explicitly before submitting for validation",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-avoid-common-mistakes",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson warns against marking up content that isn't visible on the page and against mismatching schema type to content; both are guideline violations that can trigger a manual removal of rich-result eligibility.",
          question:
            "The page shows 87 reviews and a 4.4 average directly on screen. Does the draft's aggregateRating block honestly match what's visible, and is anything else on the page still unrepresented in the schema?",
          toolName: "Notion",
          where: "Same text editor, cross-checking the draft against the live rendered page side by side.",
          procedure: [
            "Open the live product page next to the JSON-LD draft",
            "Confirm ratingValue and reviewCount in the draft match exactly what's rendered on the page (4.4 and 87)",
            "Scan the page for any other visible fact (SKU, GTIN if shown) not yet represented in the schema",
          ],
          outputSample:
            "\"aggregateRating\": {\n" +
            "  \"@type\": \"AggregateRating\",\n" +
            "  \"ratingValue\": \"4.4\",\n" +
            "  \"reviewCount\": \"87\"\n" +
            "}\n\n" +
            "Cross-check against live page: ratingValue and reviewCount match exactly. No SKU\n" +
            "or GTIN is currently displayed on the page, so neither is added to the schema yet.",
          healthy:
            "Every value in aggregateRating matches the visible page exactly, and no field is added for information the page doesn't actually show.",
          unhealthy:
            "Inflating reviewCount to a rounder number, or adding a GTIN value that isn't displayed anywhere a shopper can see it, both guideline violations even if technically valid JSON.",
          interpret:
            "The draft passing this cross-check is what separates \"technically valid schema\" from \"schema Google will actually trust,\" since the guideline violation the lesson warns about is invisible to a syntax validator.",
          soWhat: [
            {
              symptom: "No one currently cross-checks schema values against the rendered page before publishing",
              action: "Add a page-vs-schema side-by-side check as a required step before any PDP schema ships",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-validate",
          concept: "How It Works",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson instructs validating every schema block with Google's Rich Results Test before launch, since it shows exactly what rich-result types Google can detect and flags any errors.",
          question:
            "Paste the finished block into Google's Rich Results Test (accessible via GSC's URL Inspection on a live URL). What does a clean pass look like, and what would still block launch?",
          toolName: "Google Search Console",
          where: "URL Inspection > Test Live URL, or the standalone Rich Results Test at the same validation engine.",
          procedure: [
            "Paste the finished JSON-LD block or the live URL into the Rich Results Test",
            "Confirm the detected type reads \"Product\" with zero errors",
            "Review any warnings (non-blocking) separately from errors (blocking) and resolve errors before considering the block launch-ready",
          ],
          outputSample:
            "Rich Results Test: PASS\n" +
            "Detected type: Product\n" +
            "Eligible for: Merchant listing, Product snippet\n" +
            "Errors: 0\n" +
            "Warnings: 0",
          healthy: "Zero errors, the detected type matches the intended one, and the eligible rich-result types include the ones the launch actually needs.",
          unhealthy:
            "Shipping a block with an unresolved warning about a recommended-but-missing field like gtin, which won't block eligibility today but limits which AI shopping tools can confidently cite the page.",
          interpret:
            "A clean validator pass is the prerequisite the lesson describes, not a guarantee: Google still decides whether to actually show the rich result, but a failing validation guarantees it never will.",
          soWhat: [
            {
              symptom: "The block hasn't been run through validation before the launch date",
              action: "Block the CMS deploy on a passing Rich Results Test result, not just a code review",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Validate the finished block via URL Inspection's live Rich Results test before it ships",
            why: "Free, and the same validation engine Google's indexing pipeline itself uses to determine rich-result eligibility.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Run a bulk schema audit once Product schema rolls out across the full FirstCry catalog, not just this one PDP",
            why: "The free path (manual JSON-LD build plus GSC validation) is complete for building and shipping this one block; SEMrush is worth it once auditing schema across thousands of live product pages.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Building and validating one Product schema block needs zero paid tools; a text editor and GSC's free validator are the whole free path.",
      },
      deliverable:
        "A complete, validated JSON-LD Product schema block for one real PDP, passing Google's Rich Results Test with zero errors, matched exactly to what the page visibly shows.",
      sampleOutput:
        "The same 4-step build applied to a ThredUp resale-item PDP (illustrative): @type Product, offers.price \"34.00\", offers.priceCurrency \"USD\", offers.availability set to https://schema.org/InStock for a single available unit. The cross-check step caught that the draft's condition field said \"New\" while the visible listing clearly stated \"Gently Used,\" a values mismatch fixed before submission.",
      successCriteria: [
        "@type is set to Product with all four baseline identity fields (name, image, description, brand) filled from the real page",
        "offers includes price, priceCurrency, and a correctly formatted availability URL matching the live stock state",
        "aggregateRating values match the visibly displayed rating and review count exactly, with no invented fields",
        "The finished block passes Google's Rich Results Test with zero errors",
      ],
      portfolioReady: true,
      stretch:
        "Build the same Product schema block for your own site's real top-selling page and run it through the Rich Results Test until it passes clean.",
      whatToLookFor: [
        { label: "Type correctness", detail: "Is @type Product, matching what the lesson's table says triggers price, rating, and availability rich results?" },
        { label: "Field completeness", detail: "Are all three offer fields, price, priceCurrency, and availability, present, not just price alone?" },
        { label: "Page match", detail: "Does every declared value match exactly what's visibly rendered on the page, no rounding, no invented fields?" },
        { label: "Clean validation", detail: "Does the finished block pass Google's Rich Results Test with zero errors, not just zero syntax errors?" },
      ],
      decision: {
        prompt: "The draft's offers object has price and availability filled in but priceCurrency is missing. What's the consequence of shipping it as-is?",
        options: [
          { id: "a", label: "Nothing, Google infers the currency from the page's locale", correct: false },
          { id: "b", label: "Google may reject the entire Offer block, since all three offer fields are required, not just recommended", correct: true },
          { id: "c", label: "Only a cosmetic warning appears, price still renders correctly", correct: false },
          { id: "d", label: "The block still validates, but the price shows without a currency symbol", correct: false },
        ],
        explanation:
          "The lesson's minimal example treats price, priceCurrency, and availability as the required baseline for the offers object, a partial block is treated the same as a missing one for rich-result eligibility. Google's parser does not infer currency from page locale or context.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "The FirstCry stroller PDP's Product schema block is ready to ship: @type is correctly set to Product, all four identity fields are filled from the real page, the offers object includes price (8999), priceCurrency (INR), and availability (InStock), and the aggregateRating values (4.4, 87 reviews) match exactly what's visibly rendered. The block passed Google's Rich Results Test with zero errors and zero warnings, making it a safe template to replicate across the rest of the baby-gear catalog.",
      },
      commonMistakes: [
        { mistake: "Leaving priceCurrency out because the price seems obviously local", explanation: "Google's parser doesn't infer currency, an incomplete offers object can be rejected entirely." },
        { mistake: "Copying identity fields from a different product's template", explanation: "name, image, description, and brand all need to be rebuilt from this exact product's real page content, not reused from a similar listing." },
        { mistake: "Skipping the page-vs-schema cross-check", explanation: "technically valid JSON can still violate content guidelines if a value like reviewCount doesn't match what's actually displayed." },
        { mistake: "Treating a clean validator pass as a guarantee of the rich result appearing", explanation: "passing validation is a prerequisite, not a promise, Google still independently decides whether to show the rich result." },
      ],
      keyTakeaway:
        "Building schema from scratch is less about JSON syntax and more about discipline: choosing the right type, filling every required field completely, and verifying each value against what the page actually shows before ever running the validator. A clean Rich Results Test pass is the finish line, not the starting point.",
    },
  ],

  "duplicate-thin-content": [
    {
      id: "duplicate-thin-content-variant-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "40 Pages, One Root Cause: A Duplicate & Thin Content Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given two specimens from a live rental catalog, a set of near-duplicate size-variant URLs and a padded style-guide page, find every duplicate and thin-content defect and name the correct fix for each.",
      companyId: "rent-the-runway",
      scenario:
        "Rent the Runway's SEO lead hands you two specimens ahead of a Helpful Content review: three size-variant URLs for the same dress, and a style-guide page that was recently \"fixed\" by making it much longer. The team wants to know whether either specimen is actually a problem before it becomes a bigger one.",
      brief:
        "Two teardowns: find the missing canonical logic across three near-identical size URLs, then grade whether a word-count-tripling rewrite actually solved the thin-content flag it was meant to fix.",
      mode: "teardown",
      conceptsCovered: [
        "Where Duplicate Content Actually Comes From",
        "Fixing It: Canonicalize, Noindex, or Consolidate",
        "Word count is not the fix, added value is.",
      ],
      skills: ["Duplicate Content Auditing", "Content Quality Evaluation", "Canonicalization"],
      keyQuestion: "Is a set of near-identical size-variant URLs and a recently 'expanded' page actually fixed, or do both still carry the same underlying defect?",
      prerequisites: [
        "Understanding of what a canonical tag does",
        "Basic familiarity with reading page titles, H1s, and meta descriptions",
      ],
      terminology: [
        { term: "Canonical tag", definition: "an HTML tag telling search engines which URL is the preferred version among duplicates or near-duplicates." },
        { term: "Thin content", definition: "a page with too little unique, useful information to satisfy a search query, regardless of its word count." },
      ],
      teardownItems: [
        {
          itemId: "rtr-size-variant-urls",
          specimenSource: "synthetic-realistic",
          prompt:
            "These are three crawled URLs for the same dress in three sizes. The team wants to know whether this is a real problem before deciding anything.",
          specimen:
            "/dresses/diane-von-furstenberg-wrap-dress?size=S\n" +
            "  Title: \"Diane von Furstenberg Wrap Dress | Rent the Runway\"\n" +
            "  H1: \"Diane von Furstenberg Wrap Dress\"\n" +
            "  Description: 180 words, identical across all three URLs\n" +
            "  Canonical tag: none present\n\n" +
            "/dresses/diane-von-furstenberg-wrap-dress?size=M\n" +
            "  Title: \"Diane von Furstenberg Wrap Dress | Rent the Runway\" (identical)\n" +
            "  H1: identical, Description: identical, Canonical tag: none present\n\n" +
            "/dresses/diane-von-furstenberg-wrap-dress?size=L\n" +
            "  Title: identical, H1: identical, Description: identical, Canonical tag: none present",
          answerKey: [
            {
              defect:
                "Three size-variant URLs for the same dress share identical title, H1, and body copy with no canonical tag pointing at a preferred version",
              severity: "critical",
              whyItMatters:
                "Google has to pick one of the three to rank and split any authority, reviews, and links across three near-identical URLs it never should have had to choose between.",
              lessonRef: "Where Duplicate Content Actually Comes From: URL parameters creating multiple crawlable versions of the same page",
              owner: "developer",
            },
            {
              defect: "No canonical tag exists on any of the three size URLs",
              severity: "critical",
              whyItMatters:
                "Without a canonical, Google has no signal for which version to consolidate ranking signals onto, worsening the split instead of fixing it.",
              lessonRef: "Fixing It: Canonicalize, Noindex, or Consolidate",
              owner: "developer",
            },
          ],
          distractors: [
            "The three size URLs use a query parameter (?size=) rather than separate path segments, which is itself the defect regardless of canonicalization.",
            "Each size variant loads a slightly different stock photo showing the dress on a different model, which is a content difference, not a duplication problem.",
          ],
          partialCredit: true,
        },
        {
          itemId: "rtr-padded-description",
          specimenSource: "synthetic-realistic",
          prompt:
            "This 'Get the Look' style guide page was flagged as thin in July. Read the original and the team's October fix attempt, and grade whether the fix actually worked.",
          specimen:
            "ORIGINAL (July): 210 words. A generic paragraph restating \"renting is affordable and\n" +
            "sustainable\" three times in slightly different phrasing. Zero specific looks, zero\n" +
            "product links.\n\n" +
            "REVISED (October, after a \"make it longer\" directive): 1,450 words. The same three\n" +
            "restated points from July now appear six times across the page in different wording,\n" +
            "padded out with a general history-of-fashion-rental paragraph. Still zero specific\n" +
            "looks, zero product links, zero original data.",
          answerKey: [
            {
              defect:
                "The October revision tripled the word count by repeating the same three generic points in different phrasing, not by adding genuinely new information",
              severity: "critical",
              whyItMatters:
                "Google's Helpful Content evaluation judges whether a page genuinely satisfies the query, not how long it is. A 1,450-word page that says nothing new is still thin content, and the padding exercise wasted a full content sprint.",
              lessonRef: "Word count is not the fix, added value is.",
              owner: "you",
            },
            {
              defect:
                "The page still contains zero links to specific rentable dresses or curated collections despite being an on-page style guide",
              severity: "moderate",
              whyItMatters:
                "A style guide with no path into the catalog it's implicitly promoting passes no internal link equity and creates no conversion opportunity, compounding the thin-content problem with a missed internal-linking one.",
              lessonRef: "Fixing It: Canonicalize, Noindex, or Consolidate",
              owner: "you",
            },
          ],
          distractors: [
            "The page's word count increased from 210 to 1,450, which alone should resolve any thin-content flag.",
            "The page added a general history-of-fashion-rental paragraph, which counts as original supporting research.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the size-variant URLs and the style guide page to confirm the near-duplicate content and missing canonical tags directly",
            why: "Free tier easily covers a handful of specimen URLs; its near-duplicate content detection is exactly the check this teardown needs.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Check whether Google has already picked one size-variant URL to index and dropped the other two",
            why: "Free, and shows whether the duplication has already cost ranking signals, not just a theoretical risk.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This teardown needs no paid tool at all, both specimens are short enough to read and diagnose manually, with Screaming Frog's free tier confirming the findings on a live site.",
      },
      deliverable:
        "A teardown sheet flagging every duplicate/thin-content defect across both specimens with severity and the correct fix (canonical, noindex, or consolidate) named for each.",
      sampleOutput:
        "Applying the same lens to a Warby Parker-style frame color-variant set (illustrative): five color URLs for one frame shared identical copy with no canonical tag, exactly the same defect pattern, fixed by canonicalizing all five to the frame's default color URL. A separate 'lens care tips' page padded from 300 to 1,100 words without adding new information got flagged the same way as the Rent the Runway style guide and was consolidated into an existing FAQ page instead of left to stand alone.",
      successCriteria: [
        "Identified the missing canonical tag as the core defect across all three size-variant URLs, not just the duplicate copy itself",
        "Named 'add a canonical tag' as the correct fix for the variant URLs, distinct from noindex or consolidation",
        "Recognized that tripling word count without adding new information does not resolve a thin-content flag",
        "Flagged the missing product links as a separate, real defect rather than treating word count as the only issue",
      ],
      portfolioReady: true,
      stretch:
        "Pull three real variant URLs (size, color, or quantity) from your own site's product catalog and check whether a canonical tag actually exists on each.",
      whatToLookFor: [
        { label: "Canonical presence", detail: "Do near-identical URLs point to a single preferred version, or is there no canonical signal at all?" },
        { label: "Genuine differentiation", detail: "Does each variant carry unique content that justifies its own URL, or is it identical copy behind a different parameter?" },
        { label: "Value added, not length added", detail: "Did a content revision add new information, or just restate the same points in more words?" },
        { label: "Secondary defects", detail: "Beyond the headline issue, does the page have other real problems, like missing internal links, that word count alone wouldn't fix?" },
      ],
      decision: {
        prompt: "The style-guide page grew from 210 to 1,450 words but still repeats the same three points. What's the correct verdict?",
        options: [
          { id: "a", label: "The thin-content flag is resolved because the page now exceeds typical word-count guidelines", correct: false },
          { id: "b", label: "The thin-content flag is not resolved, since no genuinely new information was added", correct: true },
          { id: "c", label: "The page needs a canonical tag pointing to a different URL", correct: false },
          { id: "d", label: "The flag is resolved for search but not for users", correct: false },
        ],
        explanation:
          "Google's Helpful Content evaluation judges whether a page genuinely satisfies the query, not its length, so repeating the same three generic points six times instead of three does not add value. A canonical tag is irrelevant here since there's no duplicate URL involved, this is a single page with a content-quality problem.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Both specimens need real fixes, not just monitoring. The three size-variant URLs should get a self-referential and cross-referencing canonical tag pointing to a single preferred size URL, since Google currently has no signal for which of the three near-identical pages to rank. The style-guide page's October revision did not resolve the July thin-content flag: the word count tripled but the actual content is the same three points restated, and the page still has zero product links. It should be rewritten with specific curated looks and direct links into the catalog rather than expanded further with restated generalities.",
      },
      commonMistakes: [
        { mistake: "Assuming query-parameter URLs are automatically fine because they're 'just filters'", explanation: "without a canonical tag, size or sort parameters still create genuinely competing duplicate URLs that split ranking signals." },
        { mistake: "Treating word count as a proxy for content quality", explanation: "a page can triple in length while adding zero new information, and Google's Helpful Content evaluation judges substance, not length." },
        { mistake: "Fixing the headline defect and missing a secondary one", explanation: "the style guide's missing product links are a real, separate problem from the thin-content flag, both need addressing." },
        { mistake: "Assuming a query parameter itself is the defect", explanation: "the URL structure (?size=) isn't inherently wrong, the missing canonical signal is what actually causes the problem." },
      ],
      keyTakeaway:
        "Duplicate and thin content are two different defects that require two different fixes: canonicalization signals which URL should rank among near-identical versions, while genuine content quality requires new, specific information, not more words. A revision that only addresses length without addressing substance hasn't actually fixed anything.",
    },
    {
      id: "duplicate-thin-content-gsc-coverage-audit",
      tier: "mini",
      archetype: "audit",
      title: "Reading the Warning Signs: A Search Console Coverage Audit",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real Search Console indexing export, separate the content-quality-driven exclusion reasons from routine technical ones, and map each content-quality reason to the correct fix.",
      companyId: "hellofresh",
      scenario:
        "HelloFresh's content team can't explain why hundreds of recipe and meal-plan pages sit in the Coverage report instead of the index. You've been handed the raw Search Console indexing export and asked to figure out what's actually going on before anyone starts rewriting pages at random.",
      brief:
        "Two passes over the same export: first isolate which exclusion reasons are actually about content quality versus routine crawl or server issues, then map each content-quality reason to the lesson's canonicalize/noindex/consolidate framework.",
      mode: "diagnostic",
      conceptsCovered: [
        "Watch for 'Crawled, currently not indexed'",
        "Fixing It: Canonicalize, Noindex, or Consolidate",
      ],
      skills: ["Search Console Auditing", "Content Quality Diagnosis", "Data Triage"],
      keyQuestion: "Of the hundreds of pages sitting outside the index, which are a real content-quality problem, and which fix, canonical, noindex, or consolidate, applies to each?",
      prerequisites: [
        "Access to a Google Search Console Coverage/Indexing report or export",
        "Basic spreadsheet skills for sorting and sampling",
      ],
      terminology: [
        { term: "Crawled, currently not indexed", definition: "Google's indexing status for a page it has read but chosen not to add to the index, often an early content-quality signal." },
        { term: "Duplicate, no user-selected canonical", definition: "an indexing status meaning Google found multiple similar URLs and no canonical tag told it which one to prefer." },
      ],
      steps: [
        {
          stepId: "step-1-coverage-signals",
          concept: "Watch for 'Crawled, currently not indexed'",
          lessonAnchor: "auditing-your-own-site",
          theoryRecap:
            "The lesson flags a rising 'Crawled, currently not indexed' count in Search Console's Coverage report as an increasingly reliable early warning sign of a thin or duplicate content problem, since Google's Helpful Content system is now fully built into core ranking and evaluates continuously rather than in periodic waves.",
          question:
            "Of the six exclusion reasons in this export, which two are actually driven by content quality rather than a routine crawl or server issue, and how many pages does each represent?",
          toolName: "Google Search Console",
          where: "Search Console > Indexing > Pages report, or the exported gsc-indexing-export.csv opened in a spreadsheet.",
          procedure: [
            "Open gsc-indexing-export.csv in a spreadsheet",
            "Sort the reason column by page count, descending",
            "Isolate 'Crawled, currently not indexed' and 'Duplicate, no user-selected canonical' as the two content-quality-driven reasons",
            "Set aside 'Blocked by robots.txt', 'Not found (404)', and 'Server error (5xx)' as separate technical issues outside this audit's scope",
          ],
          outputSample:
            "Google Search Console Indexing Export - HelloFresh\n" +
            "-----------------------------------------------\n" +
            "Indexed:                                       3,891 pages\n" +
            "Crawled, currently not indexed:                   690 pages  <- content-quality signal\n" +
            "Blocked by robots.txt:                            412 pages  (technical, out of scope)\n" +
            "Duplicate, no user-selected canonical:            182 pages  <- content-quality signal\n" +
            "Not found (404):                                   94 pages  (technical, out of scope)\n" +
            "Server error (5xx):                                11 pages  (technical, out of scope)",
          healthy:
            "'Crawled, currently not indexed' and 'Duplicate, no user-selected canonical' together represent a small, stable fraction of total pages, tracked quarter over quarter.",
          unhealthy:
            "690 pages sit in 'Crawled, currently not indexed', more than double the site's server errors and 404s combined, meaning Google is actively choosing not to index nearly 700 recipe and meal-plan pages it has already read.",
          interpret:
            "The lesson is explicit that this specific reason is Google's own quality system quietly flagging pages it doesn't think are worth indexing, which makes 690 the number that actually needs a content decision, not just a technical fix.",
          soWhat: [
            {
              symptom: "690 pages sit in 'Crawled, currently not indexed' with no plan to address them",
              action: "Pull a sample of 20 of the 690 pages and manually check each for thin or duplicate content before deciding a fix",
              effort: "half day",
            },
            {
              symptom: "The team has been treating all six Coverage reasons as one undifferentiated 'indexing problem'",
              action: "Split the Coverage report into content-quality reasons and technical reasons before assigning any fix",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pick-the-fix",
          concept: "Fixing It: Canonicalize, Noindex, or Consolidate",
          lessonAnchor: "fixing-it-canonicalize-noindex-or-consolidate",
          theoryRecap:
            "The lesson's framework: use a canonical tag for legitimate technical duplicates, noindex for pages needed by users but not search, and consolidation when several thin or overlapping pages could genuinely become one comprehensive resource, the fix Google's Helpful Content system rewards most directly.",
          question:
            "182 pages are flagged as duplicate with no canonical, and 690 are crawled but not indexed. Which fix applies to which group, and why isn't it the same fix for both?",
          toolName: "Google Search Console",
          where: "Same spreadsheet, cross-referenced against a manual sample check of URLs from each group.",
          procedure: [
            "For the 182 duplicate pages, sample 10 URLs and confirm they're legitimate technical duplicates (tracking parameters, sort orders on recipe filter pages)",
            "For the 690 not-indexed pages, sample 10 URLs and check whether each is a near-duplicate of another recipe page or genuinely thin on its own",
            "Assign canonical tags to the confirmed technical duplicates",
            "Assign consolidation to genuinely thin, overlapping recipe pages; reserve noindex only for pages that must exist for users but add nothing in search",
          ],
          outputSample:
            "182 'Duplicate, no user-selected canonical' -> sampled 10, all 10 were the same recipe\n" +
            "page under different sort/filter URL parameters -> FIX: add self-referential and\n" +
            "parameter canonical tags.\n\n" +
            "690 'Crawled, currently not indexed' -> sampled 10: 6 were near-duplicate seasonal\n" +
            "variants of the same recipe ('Summer Chicken Salad' vs 'Chicken Salad, Summer\n" +
            "Edition') -> FIX: consolidate into one comprehensive recipe page. 4 were genuine\n" +
            "internal-use pages (old A/B test landing variants) -> FIX: noindex.",
          healthy:
            "Each group gets a fix chosen after actually sampling and reading real URLs, not a single blanket fix applied to all 872 flagged pages at once.",
          unhealthy:
            "Noindexing all 872 pages in one bulk operation because it's the fastest fix, including the near-duplicate recipe pages that would have made a genuinely stronger consolidated page.",
          interpret:
            "The lesson's framework exists precisely because these two groups need different fixes: the 182 are a canonical-tag problem, cheap and mechanical, while a meaningful share of the 690 are a content-strategy problem that a canonical tag alone can't solve.",
          soWhat: [
            {
              symptom: "182 pages lack a canonical tag on legitimate sort/filter duplicates",
              action: "Add canonical tags pointing to the default sort/filter view this sprint",
              effort: "dev ticket",
            },
            {
              symptom: "6 of 10 sampled 'not indexed' pages are near-duplicate seasonal recipe variants",
              action: "Consolidate seasonal variants into one comprehensive recipe page with a note on seasonal availability, then 301 redirect the thin variants",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Source the Coverage report data and confirm findings against live URLs",
            why: "Free, and the only source of Google's own indexing decisions per URL, no export substitute replaces it for confirmation.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Cross-check the sampled duplicate and not-indexed URLs for near-duplicate content at scale",
            why: "Free tier comfortably covers a 20-URL sample from a 5,280-page site export.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Run near-duplicate content detection across the full 872 flagged pages instead of a 20-page manual sample",
            why: "The free path (GSC plus a Screaming Frog sample) is complete for diagnosing the pattern; Ahrefs saves time once triaging the full page count instead of a representative sample.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The diagnosis and fix-mapping in this project are both complete on the free path; paid tools only save time once every flagged page (not just a sample) needs individual review.",
      },
      datasetUrl: "/project-data/gsc-indexing-export.csv",
      deliverable:
        "A one-page memo mapping each Coverage report reason to the correct fix (canonical, noindex, or consolidate), citing the exact page counts and the sampled evidence behind each call.",
      sampleOutput:
        "Running the same two-pass audit against an Instacart-style category-page export (illustrative): 'Duplicate, no user-selected canonical' turned out to be sort-order parameters on grocery category pages (?sort=price-asc, ?sort=rating), fixed with parameter canonical tags in a single dev ticket. 'Crawled, currently not indexed' was mostly seasonal recipe-collection pages ('Thanksgiving Sides 2024', 'Thanksgiving Sides 2025') that were consolidated into one evergreen 'Thanksgiving Sides' page updated annually instead of recreated.",
      successCriteria: [
        "Correctly separated the two content-quality Coverage reasons (690 and 182) from the three technical ones before proposing any fix",
        "Sampled real URLs from each flagged group rather than assuming every page in a group needs the same fix",
        "Assigned canonical tags specifically to the confirmed sort/filter-parameter duplicates, not the whole 182 blindly",
        "Assigned consolidation, not noindex, to genuinely near-duplicate content that could become one stronger page",
      ],
      portfolioReady: true,
      stretch:
        "Pull your own site's real Search Console Coverage report, isolate 'Crawled, currently not indexed' and duplicate-canonical counts, and sample 10 real URLs from each before deciding a fix.",
      whatToLookFor: [
        { label: "Reason classification", detail: "Is each Coverage exclusion reason actually about content quality, or a routine technical/crawl issue?" },
        { label: "Scale relative to the site", detail: "How large is the content-quality group relative to total indexed pages and to the technical-issue groups?" },
        { label: "Sample before deciding", detail: "Has a real sample of URLs from each group been read, not just the reason label and count?" },
        { label: "Fix differentiation", detail: "Does each sampled sub-group get the fix that matches its actual cause, rather than one blanket fix applied to everything?" },
      ],
      decision: {
        prompt: "690 pages sit in 'Crawled, currently not indexed' and 182 in 'Duplicate, no user-selected canonical'. What's the correct approach?",
        options: [
          { id: "a", label: "Noindex all 872 pages immediately since neither reason indicates a technical error", correct: false },
          { id: "b", label: "Sample real URLs from each group separately, since the two reasons likely need different fixes", correct: true },
          { id: "c", label: "Apply canonical tags to all 872 pages as the universal fix", correct: false },
          { id: "d", label: "Ignore both since 5,280 total pages means these are a small fraction", correct: false },
        ],
        explanation:
          "The two reasons represent different underlying problems, legitimate technical duplicates versus a genuine content-strategy gap, so sampling real URLs from each is what reveals the correct differentiated fix. A single blanket fix, whether noindex or canonical, risks either hiding pages worth consolidating into something stronger or mislabeling genuine duplicates.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "HelloFresh's 872 content-quality-flagged pages need two different remediation paths, not one. The 182 'Duplicate, no user-selected canonical' pages sampled as legitimate sort/filter parameter duplicates on the same recipe, add self-referential and parameter canonical tags this sprint. The 690 'Crawled, currently not indexed' pages are a mixed group: roughly 60% sampled as near-duplicate seasonal recipe variants that should be consolidated into single comprehensive recipe pages with 301 redirects from the thin variants, while the remainder are internal-use pages (old A/B test landing variants) that should be noindexed rather than deleted.",
      },
      commonMistakes: [
        { mistake: "Treating all six Coverage exclusion reasons as one undifferentiated 'indexing problem'", explanation: "robots.txt blocks, 404s, and server errors are technical issues, distinct from the content-quality signal 'Crawled, currently not indexed' actually represents." },
        { mistake: "Applying one fix to an entire flagged group without sampling", explanation: "the 690 'not indexed' pages contained two genuinely different sub-groups, seasonal duplicates and internal test pages, that needed opposite fixes." },
        { mistake: "Defaulting to noindex as the fast universal fix", explanation: "noindexing near-duplicate seasonal recipes throws away pages that could have been consolidated into one stronger, more valuable resource." },
        { mistake: "Ignoring 'Crawled, currently not indexed' because it isn't a hard error", explanation: "the lesson treats this specific status as an early content-quality warning sign, not a benign technicality to deprioritize." },
      ],
      keyTakeaway:
        "A Search Console Coverage report mixes technical issues and content-quality signals under one list, and treating them the same wastes effort. Sampling real URLs from each flagged group, rather than acting on the reason label and count alone, is what reveals whether a canonical tag, a noindex, or a genuine consolidation is the right fix.",
    },
  ],

  "ecommerce-product-page-seo": [
    {
      id: "ecommerce-product-page-seo-variant-schema-audit",
      tier: "mini",
      archetype: "audit",
      title: "One Page or Five? A Variant & Schema-Parity Audit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a frame family's five color-variant URLs and its live schema, diagnose which variant strategy is actually running, whether it's complete, and whether the schema still matches what the page visibly shows.",
      companyId: "warby-parker",
      scenario:
        "Warby Parker's \"Percey\" frame ships in five colors, each with its own URL. You're auditing this one frame family before a catalog-wide rollout, checking both the variant-URL structure and whether the live schema still matches the page when stock changes.",
      brief:
        "Two checks: crawl the five color URLs to see which of the lesson's two variant strategies is actually in play, then compare a sold-out variant's visible page state against its JSON-LD Offer block.",
      mode: "diagnostic",
      conceptsCovered: [
        "Why variants cause duplication",
        "Product Schema and Rich Results",
      ],
      skills: ["Duplicate Content Diagnosis", "Canonical Tags", "Product Schema (JSON-LD)", "Rich Results"],
      keyQuestion:
        "Is this frame family's five-color variant setup a deliberate, complete strategy, or an unfinished one leaking duplicate content and stale schema?",
      prerequisites: [
        "Basic familiarity with crawling a site in Screaming Frog and reading Title/Canonical columns",
        "Understanding of what JSON-LD structured data is used for on a product page",
      ],
      terminology: [
        {
          term: "Canonical Tag",
          definition: "an HTML tag that tells search engines which URL is the preferred version among near-duplicate pages, so authority isn't split between them.",
        },
        {
          term: "JSON-LD Offer Block",
          definition: "the structured-data snippet on a product page that tells Google the price and stock availability, which Google uses to power rich results like star ratings and stock badges in search.",
        },
      ],
      steps: [
        {
          stepId: "step-1-variant-strategy",
          concept: "Why variants cause duplication",
          lessonAnchor: "why-variants-cause-duplication",
          theoryRecap:
            "The lesson names two deliberate variant strategies, a single URL with a variant selector, or separate indexable pages per variant with unique SKUs and genuinely different descriptions and images, and says whichever one you skip should canonicalize back to the version you want indexed.",
          question:
            "The Percey frame has five color URLs, each with an identical title, description, and images except a swapped color word, and none of the five carries a canonical tag. Which of the lesson's two strategies is actually running here, and what's missing to make it work?",
          toolName: "Screaming Frog SEO Spider",
          where: "Crawl the 5 color-variant URLs and compare the Title, H1, Meta Description, and Canonical columns side by side.",
          procedure: [
            "List all five color URLs for the Percey frame",
            "Crawl them and export Title, H1, Meta Description, and Canonical for each",
            "Confirm whether the title/description text differs meaningfully between colors or is identical apart from the color word",
            "Check the Canonical column for whether any of the five points at a single preferred version",
          ],
          outputSample:
            "Percey frame, 5 color-variant URLs\n" +
            "----------------------------------\n" +
            "/percey-eyeglasses-crystal       Title: \"Percey - Crystal | Warby Parker\"   Canonical: none\n" +
            "/percey-eyeglasses-jet-black      Title: \"Percey - Jet Black | Warby Parker\" Canonical: none\n" +
            "/percey-eyeglasses-cognac         Title: \"Percey - Cognac | Warby Parker\"    Canonical: none\n" +
            "/percey-eyeglasses-eastern-bluebird  Title: \"Percey - Eastern Bluebird | Warby Parker\" Canonical: none\n" +
            "/percey-eyeglasses-rye-tortoise   Title: \"Percey - Rye Tortoise | Warby Parker\" Canonical: none\n\n" +
            "Body description: identical 140-word paragraph on all 5 URLs apart from the color name.",
          healthy:
            "Either all five are consolidated onto one URL with a color-swatch selector, or all five carry unique SKUs, genuinely different descriptions, and a canonical pointing at whichever is the primary indexable version.",
          unhealthy:
            "Five separate, indexable URLs with only a swapped color word and zero canonical tags, splitting whatever authority and reviews the frame has earned across five competing near-duplicates.",
          interpret:
            "This is the lesson's \"separate indexable pages per variant\" strategy running without its required conditions: no unique descriptions, no canonical fallback. It's not that separate pages are wrong here, it's that they were never finished.",
          soWhat: [
            {
              symptom: "Five color URLs compete for the same query with near-identical content and no canonical",
              action: "Either write genuinely distinct copy per color and add self-referential canonicals, or consolidate to one URL with a color selector",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-2-schema-page-mismatch",
          concept: "Product Schema and Rich Results",
          lessonAnchor: "product-schema-and-rich-results",
          theoryRecap:
            "The lesson's rule that trips people up most: schema and the visible page must match. If the page shows out of stock but the schema still says InStock, Google treats that as misleading structured data and can strip the rich result sitewide, not just on that one page.",
          question:
            "The live page for the Percey frame in Rye Tortoise shows an \"Out of Stock\" banner to visitors, but its JSON-LD Offer block still reads availability: InStock. What does the lesson say happens if this ships as-is?",
          toolName: "Google Search Console",
          where: "URL Inspection > Test Live URL, comparing the rendered schema output against the visibly rendered page.",
          procedure: [
            "Open the Rye Tortoise URL in a browser and confirm the visible \"Out of Stock\" banner",
            "Run the same URL through URL Inspection's Test Live URL",
            "Compare the schema's availability value against the visible page state",
            "Flag the mismatch and identify the correct availability value to ship",
          ],
          outputSample:
            "Live page (visible to shoppers): \"Out of Stock\" banner shown, no Add to Cart button.\n\n" +
            "JSON-LD Offer block (from URL Inspection):\n" +
            "  \"availability\": \"https://schema.org/InStock\"\n\n" +
            "MISMATCH: schema claims InStock, page visibly shows Out of Stock.",
          healthy: "The schema's availability value updates automatically from the same inventory feed that drives the visible stock badge, so the two can never drift apart.",
          unhealthy:
            "The visible stock badge is hand-edited by a merchandiser while the schema is generated once at page-template build time, letting the two silently disagree the moment stock changes.",
          interpret:
            "This isn't a cosmetic mismatch, the lesson is explicit that Google can strip rich-result eligibility across the entire site, not just this one URL, once it detects structured data that misrepresents what's visibly on the page.",
          soWhat: [
            {
              symptom: "The Rye Tortoise variant's schema says InStock while the page shows Out of Stock",
              action: "Automate schema generation from the same inventory feed driving the visible stock badge, don't hand-maintain the two separately",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Bulk-crawl the five color-variant URLs and compare titles, descriptions, and canonical tags at once",
            why: "Free tier comfortably covers a single frame family's variant set in one crawl.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Compare the live rendered schema against the visible page state via URL Inspection",
            why: "Free, and the only way to see exactly what Google's own renderer reads from the live page's schema.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Run the same variant-duplication and schema-parity check across the full catalog instead of one frame family",
            why: "The free path (Screaming Frog plus GSC) is complete for auditing one frame family; Ahrefs earns its cost once checking hundreds of product families at once.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Both checks in this audit are fully completable free, a five-URL crawl and one URL Inspection lookup cost nothing.",
      },
      deliverable:
        "An audit memo naming which variant strategy to formally adopt for the Percey frame family, the specific canonical fix needed, and a corrected schema availability value that matches the live page.",
      sampleOutput:
        "The same two-check audit applied to a Lenskart eyewear frame family (illustrative): five color URLs shared identical copy with no canonical, the same defect pattern, resolved by consolidating to one URL with a color swatch selector rather than writing five unique descriptions. A separate sold-out shade's schema still read InStock three days after the frame sold out, traced to a schema cache that wasn't invalidated on stock change.",
      successCriteria: [
        "Correctly identified the five color URLs as running an incomplete 'separate indexable pages' strategy, not simply calling it 'duplicate content'",
        "Named a specific fix (unique copy plus canonicals, or consolidation to one URL) rather than a vague 'fix the duplication'",
        "Caught the InStock-vs-Out-of-Stock schema mismatch as a critical, sitewide-risk defect, not a minor one",
        "Proposed automating schema generation from the inventory feed as the actual fix, not a one-time manual correction",
      ],
      portfolioReady: true,
      stretch:
        "Pick a real product with 3+ color or size variants on any site you use, crawl the URLs, and check whether they share identical copy with no canonical tag.",
      whatToLookFor: [
        { label: "Copy uniqueness", detail: "Is the description genuinely different per variant, or just the color word swapped inside an identical paragraph?" },
        { label: "Canonical presence", detail: "Does any of the near-duplicate URLs point to a single preferred version, or is the field empty on all of them?" },
        { label: "Schema-to-page match", detail: "Does the JSON-LD availability value match what a shopper actually sees rendered on the page right now?" },
        { label: "Update source", detail: "Is the schema generated from the same live inventory feed as the visible stock badge, or built once and left stale?" },
      ],
      decision: {
        prompt:
          "The five Percey color URLs share identical copy apart from the color word, carry no canonical tags, and the Rye Tortoise variant's schema says InStock while the page visibly shows Out of Stock. What's the correct fix to recommend?",
        options: [
          { id: "a", label: "Add a canonical tag pointing all five URLs at the crystal color as the primary version, and leave the schema alone since it will update itself eventually", correct: false },
          { id: "b", label: "Write unique descriptions and add canonicals for the variant strategy, and separately automate schema generation from the live inventory feed so availability can never drift from the page", correct: true },
          { id: "c", label: "Delete four of the five color URLs and keep only one, since duplicate content is always resolved by removing pages", correct: false },
          { id: "d", label: "Leave the canonical issue alone since Google will pick one automatically, and manually correct just the Rye Tortoise schema value this one time", correct: false },
        ],
        explanation:
          "Two separate defects need two separate fixes. The variant duplication needs either genuinely unique copy plus canonicals or consolidation, a one-off canonical pointing at an arbitrary color doesn't fix the missing content differentiation. The schema mismatch is a data-pipeline problem, not a one-time value swap, manually fixing Rye Tortoise today leaves every future stock change free to drift again, and the lesson is explicit that a misleading schema can cost rich-result eligibility sitewide.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Formally adopt one variant strategy for the Percey frame family: either write genuinely distinct copy per color with self-referential canonicals, or consolidate to a single URL with a color-swatch selector. In parallel, automate the JSON-LD availability field from the same inventory feed that drives the visible stock badge so schema and page state can never disagree, this is the fix that prevents the sitewide rich-result risk the lesson warns about, not a one-time correction to the Rye Tortoise listing.",
      },
      commonMistakes: [
        { mistake: "Treating five near-identical URLs as automatically fine because each has a unique color name", explanation: "a swapped color word inside an otherwise identical paragraph is not meaningfully different content; the lesson requires genuinely different descriptions and images for the separate-pages strategy to work." },
        { mistake: "Fixing only the visible mismatch and not the pipeline that created it", explanation: "correcting the Rye Tortoise schema value by hand solves today's problem but leaves the same drift ready to happen on the next stock change." },
        { mistake: "Assuming a schema mismatch is a minor, page-level issue", explanation: "the lesson is explicit that Google can strip rich-result eligibility sitewide, not just on the one offending URL, once it detects a pattern of misleading structured data." },
      ],
      keyTakeaway:
        "A variant family and its schema can look fine at a glance while hiding two unrelated but equally serious defects: incomplete duplicate-content handling and stale structured data. Checking both, side-by-side crawl comparison and a live schema-versus-page check, catches problems a single-angle audit would miss.",
    },
    {
      id: "ecommerce-product-page-seo-outofstock-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Delete, Redirect, or Keep? An Out-of-Stock Decision Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given four real out-of-stock decisions a team already made, without a framework, grade each against the lesson's decision tree and name the correct action and the consequence the wrong one already caused.",
      companyId: "honasa-mamaearth",
      scenario:
        "Mamaearth's ecommerce team handled four out-of-stock or discontinued products last quarter, each a different situation, without consulting a shared framework. You're reviewing what they actually did against what the lesson says should have happened in each case.",
      brief:
        "Two specimens, four products: grade each team decision against the lesson's four out-of-stock scenarios and name what should have happened instead.",
      mode: "teardown",
      conceptsCovered: ["Handling Out-of-Stock and Discontinued Products"],
      skills: ["Out-of-Stock Decision Framework", "301 Redirects", "Backlink Equity Preservation", "Soft-404 Avoidance"],
      keyQuestion:
        "For each out-of-stock or discontinued product, does keep-live, redirect, or delete match what the traffic and backlink data actually says to do?",
      prerequisites: [
        "Familiarity with reading Search Console's Links and Performance reports per URL",
        "Basic understanding of what a 301 redirect and a soft-404 are",
      ],
      terminology: [
        {
          term: "Soft-404",
          definition: "a page that returns a normal 200 OK status but has effectively no unique content for the query, such as a discontinued product mass-redirected to a homepage; Google detects and devalues these even though the server didn't return an error code.",
        },
      ],
      teardownItems: [
        {
          itemId: "mamaearth-restock-and-discontinued-with-replacement",
          specimenSource: "synthetic-realistic",
          prompt:
            "Here's what Mamaearth's team actually did with two out-of-stock products last quarter. Compare each action against the lesson's decision tree.",
          specimen:
            "PRODUCT A -- Onion Hair Oil 250ml, temporarily out of stock, restocking in 3 weeks\n" +
            "  Action taken: the page returned a 404 error the day stock hit zero.\n" +
            "  Backlinks pointing at this URL: 340. Organic sessions/month before stock-out: 8,200.\n\n" +
            "PRODUCT B -- Vitamin C Face Wash (old 100ml formula), discontinued, replaced by a\n" +
            "reformulated 120ml version at a live URL\n" +
            "  Action taken: the page was left live with no redirect, still shows a \"Buy Now\"\n" +
            "  button that errors on checkout, and links to nothing.",
          answerKey: [
            {
              defect: "Product A (temporarily out of stock, restocking in 3 weeks) was 404'd instead of kept live",
              severity: "critical",
              whyItMatters:
                "The lesson is explicit: deleting a page that restocks next month throws away every backlink it built. This page carried 340 backlinks and 8,200 monthly organic sessions, both permanently lost by 404'ing a page that was never actually discontinued.",
              lessonRef: "Handling Out-of-Stock and Discontinued Products: Temporarily out of stock, restocking soon",
              owner: "developer",
            },
            {
              defect:
                "Product B (discontinued with a direct replacement available) was left live with a broken \"Buy Now\" button and no redirect to the replacement",
              severity: "critical",
              whyItMatters:
                "The lesson calls for a 301 redirect in exactly this situation, passing link equity forward and matching user intent. Instead visitors and Google both hit a dead end on a page that should forward all its value to the new product.",
              lessonRef: "Handling Out-of-Stock and Discontinued Products: Discontinued with a direct replacement",
              owner: "developer",
            },
          ],
          distractors: [
            "Product A's restock date was not displayed anywhere on the page, which is a cosmetic UX issue, not what caused the traffic loss.",
            "Product B's URL structure changed slightly when the reformulated version launched, which is expected and not itself a defect.",
          ],
          partialCredit: true,
        },
        {
          itemId: "mamaearth-legacy-and-zero-traffic",
          specimenSource: "synthetic-realistic",
          prompt: "Two more products, two more decisions. Grade these against the same framework.",
          specimen:
            "PRODUCT C -- Ubtan Face Mask (original launch SKU), discontinued with no direct\n" +
            "replacement, still getting 1,100 organic sessions/month and 90 referring domains\n" +
            "  Action taken: 301 redirected to the Mamaearth homepage.\n\n" +
            "PRODUCT D -- limited-edition Diwali gift set (one-time SKU), discontinued, zero\n" +
            "organic traffic in the last 6 months, zero backlinks\n" +
            "  Action taken: kept live indefinitely with an \"Out of Stock\" badge and no restock date.",
          answerKey: [
            {
              defect:
                "Product C (discontinued, no replacement, but still earning real traffic and backlinks) was mass-redirected to the homepage",
              severity: "critical",
              whyItMatters:
                "The lesson names this exact move as the thing never to do: redirecting a discontinued product to the homepage or a generic category page is exactly what Google's soft-404 detection flags. The page should have stayed live, marked discontinued, with a link to the closest current alternative.",
              lessonRef: "Handling Out-of-Stock and Discontinued Products: Discontinued, no replacement, still gets traffic",
              owner: "developer",
            },
            {
              defect: "Product D (zero traffic, zero backlinks, one-time SKU) was left live indefinitely instead of being 404'd or 410'd",
              severity: "moderate",
              whyItMatters:
                "The lesson's framework reserves 'keep it live' for pages carrying real traffic or backlink value. A page with neither is exactly the case where a 404 or 410 is fine, especially at catalog scale. Keeping it live wastes crawl budget on a page with nothing left to protect.",
              lessonRef: "Handling Out-of-Stock and Discontinued Products: Discontinued, low or zero traffic, no backlinks",
              owner: "you",
            },
          ],
          distractors: [
            "Product C's redirect target loads correctly with a 200 status code, so from a pure technical-QA standpoint the redirect 'works'.",
            "Product D still displays its original price on the out-of-stock page, which is a minor cosmetic issue, not the core defect.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Check the Links and Performance reports for referring domains and organic sessions per product URL before choosing an action",
            why: "Free, and the source of the exact traffic and backlink numbers the lesson's decision tree depends on.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Confirm sessions and revenue attribution per product URL match Search Console's numbers before making a keep/redirect/delete call",
            why: "Free, and cross-checks the traffic number against a second source before an irreversible action like a 404 or redirect ships.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Get backlink counts across the whole discontinued-product catalog at once instead of checking GSC one URL at a time",
            why: "GSC's Links report is free and complete for grading a handful of products like this teardown; Ahrefs saves real time once triaging hundreds of discontinued SKUs at once.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "Grading all four decisions here needs no paid tool, GSC's free Links and Performance reports supply every number the framework needs.",
      },
      deliverable:
        "A corrected action for each of the four products (A-D) with the right fix named, plus the specific consequence each wrong action already caused.",
      sampleOutput:
        "Applying the same framework to a Swiggy Instamart-style discontinued grocery SKU (illustrative): a seasonal snack pack that sold out was 404'd within a day despite carrying 60 backlinks from recipe blogs and restocking the following month, the same Product-A mistake, corrected by restoring the page with a restock-notify signup instead of a hard delete.",
      successCriteria: [
        "Named 'keep the page live with a restock date' as the correct fix for Product A, not a 404",
        "Named 'add a 301 redirect to the replacement' as the correct fix for Product B, not leaving a broken Buy Now button live",
        "Named 'keep live, mark discontinued, link to the closest alternative' for Product C, explicitly rejecting the homepage redirect that was actually used",
        "Named '404 or 410 is acceptable' for Product D specifically because it carries zero traffic and zero backlinks, not as a default for every discontinued product",
      ],
      portfolioReady: true,
      stretch:
        "Pull 5 real discontinued or out-of-stock URLs from a site you manage or shop on, check each one's Search Console traffic and backlink numbers, and grade the site's actual handling against this same framework.",
      whatToLookFor: [
        { label: "Restock timeline", detail: "Is the product genuinely gone, or restocking soon, which changes the correct action entirely?" },
        { label: "Traffic and backlink value", detail: "Does the URL carry real organic sessions or referring domains worth protecting?" },
        { label: "Replacement availability", detail: "Is there a direct, live replacement product to redirect to, or would a redirect be forcing a mismatch?" },
        { label: "Redirect target relevance", detail: "Does the redirect target actually match user intent, or does it dump traffic onto an unrelated page like the homepage?" },
      ],
      decision: {
        prompt:
          "Product C is discontinued with no direct replacement but still earns 1,100 organic sessions/month and 90 referring domains. The team 301 redirected it to the homepage. What should have happened instead?",
        options: [
          { id: "a", label: "The redirect to the homepage was correct, since the product is truly gone and something has to happen to the URL", correct: false },
          { id: "b", label: "The page should have been left live, marked discontinued, with a link to the closest current alternative", correct: true },
          { id: "c", label: "The page should have been 404'd immediately since there's no replacement product to redirect to", correct: false },
          { id: "d", label: "The redirect target should be changed to the category page instead of the homepage, which fixes the mismatch", correct: false },
        ],
        explanation:
          "The lesson names redirecting a discontinued, no-replacement product to the homepage or a generic category page as exactly the move to avoid, Google's soft-404 detection flags it because the destination doesn't answer the original query. With 1,100 sessions and 90 referring domains still active, the page has real value worth protecting: keeping it live, clearly marked discontinued, with a link to the closest current alternative preserves both the user experience and the accumulated authority, which neither a homepage redirect nor a 404 does.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Correct all four products against the lesson's framework: restore Product A live with a restock date (340 backlinks and 8,200 monthly sessions were being thrown away by the 404), add a 301 from Product B to its live replacement, replace Product C's homepage redirect with a live discontinued-notice page linking to the closest alternative, and leave Product D's 404/410 as acceptable given it has zero traffic and zero backlinks. Applying the wrong action to a URL with real traffic or backlink equity is the costliest mistake in this batch, and it happened twice.",
      },
      commonMistakes: [
        { mistake: "Treating every discontinued product the same way", explanation: "the lesson's framework branches on restock timeline, replacement availability, and existing traffic/backlink value, a single default action ignores all three." },
        { mistake: "Redirecting to the homepage or a broad category page as a catch-all", explanation: "this is the specific pattern Google's soft-404 detection flags, since the destination doesn't match the original page's intent." },
        { mistake: "404'ing a page just because stock hit zero", explanation: "a temporary stock-out with a known restock date should stay live; 404'ing it throws away backlinks and traffic that will be needed again in weeks." },
        { mistake: "Assuming 'the redirect works' (200 status code) means the decision was correct", explanation: "a redirect can be technically functional and still be the wrong destination for user intent and search relevance." },
      ],
      keyTakeaway:
        "Out-of-stock and discontinued products aren't a single decision, they're four different decisions depending on restock timeline, replacement availability, and how much traffic or backlink equity the URL has already earned. Applying one default action, whether that's always redirecting or always deleting, gets roughly half of any real product catalog wrong.",
    },
  ],

  "log-file-analysis": [
    {
      id: "log-file-analysis-bot-verification-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Impostor Crawler: Verifying Bot Identity in Raw Log Lines",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given raw access-log excerpts and DNS verification results, tell genuine Googlebot and AI-crawler traffic apart from spoofed user-agents and rotating-identity bypasses, then flag the response-code and orphaned-page issues hiding in the same lines.",
      companyId: "tac-security",
      scenario:
        "TAC Security (TAC Infosec), the Mumbai-founded vulnerability-management SaaS that built its brand on founder-led thought leadership, just published a wave of new CVE-disclosure research posts. The sysadmin flags a spike in traffic claiming to be Googlebot and GPTBot alongside a jump in bandwidth to pages that never usually get much traffic. You're handed two raw log excerpts to sort out what's real before anyone touches the firewall.",
      brief:
        "Two specimens: one tests whether you can verify a bot's identity the way the lesson describes instead of trusting the user-agent string, the other tests whether you can spot an AI crawler bypassing a robots.txt block under a rotating identity, plus an orphaned page sitting in the same log window.",
      mode: "teardown",
      conceptsCovered: [
        "Verify bot identity via reverse DNS, do not trust the user-agent string alone",
        "Response codes served to bots specifically",
        "Orphaned pages that bots reach only via the sitemap, never through an internal link",
      ],
      skills: ["Log File Analysis", "Reverse DNS Verification", "Bot Spoofing Detection", "Robots.txt Enforcement Gaps"],
      keyQuestion:
        "Which of these bot requests are genuine, which are spoofed, and what else is hiding in the same raw log lines?",
      prerequisites: [
        "Basic comfort reading raw access-log lines (IP, timestamp, request, status, user-agent)",
        "Understanding that a user-agent string is self-declared and can be faked",
      ],
      terminology: [
        {
          term: "Reverse DNS Verification",
          definition: "looking up which hostname an IP address resolves to (e.g. crawl-66-249-66-1.googlebot.com) to confirm a bot's real identity, since anyone can set their user-agent string to claim to be Googlebot.",
        },
        {
          term: "Rotating-Identity Bypass",
          definition: "when the same IP address that was just blocked under one bot's user-agent returns moments later under a different, unblocked user-agent to fetch the same disallowed URL.",
        },
      ],
      teardownItems: [
        {
          itemId: "tac-security-spoofed-googlebot",
          specimenSource: "synthetic-realistic",
          prompt:
            "Two IPs below both claim to be Googlebot hitting TAC Security's /research/ vulnerability-disclosure pages. Use the lesson's reverse-DNS verification method to tell which is genuine, then flag anything else in the log worth a second look.",
          specimen:
            "=== RAW ACCESS LOG (excerpt) ===\n" +
            "66.249.66.1 - - [03/Aug/2026:02:14:11 +0000] \"GET /research/cve-2026-4471-disclosure/ HTTP/1.1\" 200 18432 \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\"\n" +
            "185.220.101.44 - - [03/Aug/2026:02:14:19 +0000] \"GET /research/cve-2026-4471-disclosure/ HTTP/1.1\" 200 18432 \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\"\n" +
            "66.249.66.1 - - [03/Aug/2026:02:16:02 +0000] \"GET /research/vulnerability-scoring-methodology/ HTTP/1.1\" 500 612 \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\"\n" +
            "185.220.101.44 - - [03/Aug/2026:02:16:07 +0000] \"GET /pricing/ HTTP/1.1\" 200 9871 \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\"\n\n" +
            "=== DNS VERIFICATION ===\n" +
            "66.249.66.1     reverse DNS -> crawl-66-249-66-1.googlebot.com -> forward DNS confirms 66.249.66.1. VERIFIED GOOGLEBOT.\n" +
            "185.220.101.44  reverse DNS -> tor-exit-relay-44.example-relay.net (Tor exit node, Frankfurt). NOT a Google-owned host. UNVERIFIED.",
          answerKey: [
            {
              defect:
                "The 185.220.101.44 requests use a genuine Googlebot user-agent string but resolve to a Tor exit relay, not a googlebot.com host",
              severity: "critical",
              whyItMatters:
                "A spoofed 'Googlebot' can scrape or probe pages (like /pricing/) under a trusted-looking identity. Trusting the user-agent string alone would misclassify this as legitimate Google crawl activity and hide who's really behind the requests.",
              lessonRef: "What a Log File Actually Contains: verify bot identity via reverse DNS, do not trust the user-agent string alone",
              owner: "you",
            },
            {
              defect: "The verified Googlebot request to /research/vulnerability-scoring-methodology/ received a 500 response",
              severity: "moderate",
              whyItMatters:
                "A page that errors only under crawler load, from rate limiting or server strain, quietly suppresses indexing for a page that never shows an error to a human visitor refreshing it manually. Dashboards built on sampled data usually miss this entirely.",
              lessonRef: "What a Log File Actually Contains: response codes served to bots specifically",
              owner: "developer",
            },
          ],
          distractors: [
            "The two requests to the same URL are 8 seconds apart.",
            "The verified Googlebot line and the unverified line both use HTTP/1.1.",
          ],
          partialCredit: true,
        },
        {
          itemId: "tac-security-rotating-ua-and-orphan",
          specimenSource: "synthetic-realistic",
          prompt:
            "TAC Security's robots.txt and a slice of AI-bot log lines are below. Compare the declared rules against what the logs actually show, then check the referrer evidence for a second page.",
          specimen:
            "=== robots.txt (excerpt) ===\n" +
            "User-agent: GPTBot\n" +
            "Disallow: /research/\n\n" +
            "User-agent: ClaudeBot\n" +
            "Disallow: /research/\n\n" +
            "=== ACCESS LOG (excerpt, same IP, seven minutes apart) ===\n" +
            "20.171.207.12 [05/Aug/2026:11:02:44] \"GET /research/cve-2026-4471-disclosure/ HTTP/1.1\" 403 0 \"GPTBot/1.2\"\n" +
            "20.171.207.12 [05/Aug/2026:11:09:33] \"GET /research/cve-2026-4471-disclosure/ HTTP/1.1\" 200 18432 \"Mozilla/5.0 (compatible)\"\n\n" +
            "=== REFERRER CHECK for /platform/soc2-mapping-guide/ ===\n" +
            "Internal link crawl (Screaming Frog SEO Spider): 0 internal links found pointing to this URL.\n" +
            "URL is present in sitemap.xml only.",
          answerKey: [
            {
              defect:
                "20.171.207.12 gets blocked as GPTBot, then the same IP returns seven minutes later under a generic 'Mozilla/5.0 (compatible)' string and successfully loads the same disallowed URL",
              severity: "critical",
              whyItMatters:
                "This is the rotating-identity pattern the lesson warns about: a robots.txt Disallow rule only stops a bot that honors its own declared name. If the same IP keeps fetching the blocked path under a different user-agent, the rule isn't actually working and needs an IP or firewall-level block, not just a robots.txt line.",
              lessonRef: "Verify bot identity via reverse DNS, do not trust the user-agent string alone",
              owner: "developer",
            },
            {
              defect: "/platform/soc2-mapping-guide/ has zero internal links and is only discoverable via the sitemap",
              severity: "moderate",
              whyItMatters:
                "Orphaned pages reached only through the sitemap get crawled but rarely earn the internal link equity that helps them rank. It's a sign of weak site architecture worth flagging so this page gets linked from the platform nav or a related-content module.",
              lessonRef: "What a Log File Actually Contains: orphaned pages that bots reach only via the sitemap, never through an internal link",
              owner: "you",
            },
          ],
          distractors: [
            "GPTBot's blocked request returned a 403 rather than a 404.",
            "The sitemap.xml file itself was last modified two weeks ago.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Cross-check whether the flagged pages show any indexing or crawl anomalies in Google's own reporting",
            why: "Free, and confirms whether the log-level findings (the 500 error, the orphaned page) are also visible in Search Console's Pages report.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the site to confirm which pages actually have zero internal links pointing to them",
            why: "Free for up to 500 URLs, the fastest way to verify an 'orphaned page' claim instead of guessing from the log alone.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Bulk IP/ASN and backlink intelligence when verifying bot identity across thousands of log lines instead of a handful",
            why: "The free reverse-DNS lookup path is complete for a spot-check like this one; Ahrefs-scale tooling only earns its cost at real production log volume.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "This teardown is fully completable free: a `dig -x` reverse lookup and a Screaming Frog crawl are all it takes.",
      },
      deliverable:
        "A flagged-defects sheet naming the impersonator IP and its evidence, the page that 500s only for verified Googlebot, the rotating-UA bypass, and the orphaned page, each with a one-line fix owner.",
      sampleOutput:
        "Running the same reverse-DNS check on a sample of Yelp's own log lines (illustrative): a request claiming 'Bingbot' resolved to a residential ISP IP in Ohio, not a Microsoft-owned host, immediately flagged as unverified. A second, genuinely verified Googlebot line showed a 200 status but a 4.8-second response time on a review page, slow enough to be worth a caching fix even though it wasn't an outright error.",
      successCriteria: [
        "Correctly identifies 185.220.101.44 as unverified via its reverse-DNS mismatch, not just because the IP 'looks unfamiliar'",
        "Flags the 500 response served to the verified Googlebot IP as a developer-owned issue distinct from the spoofing issue",
        "Names the rotating-user-agent bypass on 20.171.207.12 as a robots.txt-is-not-enforcement problem, not a false alarm",
        "Flags /platform/soc2-mapping-guide/ as orphaned based on the 0-internal-links crawl evidence, not the log lines alone",
      ],
      portfolioReady: true,
      stretch:
        "Ask your own host or CDN for a real 7-day raw log sample and run `dig -x` (or an online reverse-DNS tool) by hand on the top 10 IPs claiming to be Googlebot.",
      whatToLookFor: [
        { label: "DNS mismatch", detail: "Does the IP's reverse DNS actually resolve to a company-owned host, or to an unrelated network like a Tor relay or residential ISP?" },
        { label: "Response codes under bot load", detail: "Is a verified bot receiving errors (500s) that a human visitor never sees?" },
        { label: "User-agent switching from the same IP", detail: "Does a blocked IP return minutes later under a different declared identity to fetch the same URL?" },
        { label: "Discovery path", detail: "Is a URL reachable only via the sitemap, with zero internal links pointing to it?" },
      ],
      decision: {
        prompt:
          "185.220.101.44 sends requests with a genuine Googlebot user-agent string, but reverse DNS resolves it to a Tor exit relay, not a googlebot.com host. What's the correct classification and next step?",
        options: [
          { id: "a", label: "Treat it as Googlebot, since the user-agent string is the standard way to identify a crawler", correct: false },
          { id: "b", label: "Treat it as unverified/spoofed traffic, since it fails reverse-DNS confirmation, and flag it for the security or dev team to review separately from real Googlebot activity", correct: true },
          { id: "c", label: "Ignore it, since a single mismatched IP is not worth investigating", correct: false },
          { id: "d", label: "Block all future requests carrying a Googlebot user-agent string sitewide to be safe", correct: false },
        ],
        explanation:
          "The lesson's core method is to verify bot identity via reverse DNS rather than trusting the self-declared user-agent string, and a Tor-relay resolution is a clear fail. This is exactly the kind of traffic worth flagging, not ignoring, since a spoofed 'Googlebot' can scrape pages under a trusted-looking identity. Blocking every Googlebot-claiming request sitewide would also block the genuinely verified 66.249.66.1 traffic, throwing out real Google crawl activity to catch one impostor.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Flag 185.220.101.44 to the security team as spoofed Googlebot traffic based on its Tor-relay reverse-DNS resolution, distinct from the legitimate 66.249.66.1 activity. Separately, route the verified Googlebot 500 error on /research/vulnerability-scoring-methodology/ to the dev team, since a page that errors only under crawler load can quietly suppress indexing without ever showing an error to a human visitor. Both findings need different owners and neither should wait on the other.",
      },
      commonMistakes: [
        { mistake: "Trusting the user-agent string as proof of identity", explanation: "anyone can set a request header to say 'Googlebot'; only a reverse-DNS lookup back to a company-owned host confirms it." },
        { mistake: "Missing the rotating-identity bypass because each individual request looks unremarkable", explanation: "the pattern only becomes visible when comparing the same IP's requests across a few minutes, not reading one log line in isolation." },
        { mistake: "Dismissing a verified-bot 500 error as a one-off blip", explanation: "an error that appears only for crawler traffic, never for human visitors, is easy to miss in a standard uptime dashboard and can quietly suppress indexing." },
      ],
      keyTakeaway:
        "Raw log lines carry more evidence than they first appear to: a user-agent string alone can't prove identity, but cross-referencing it against reverse DNS, response codes, and repeat visits from the same IP under different names surfaces spoofing and enforcement gaps a summary dashboard would never show.",
    },
    {
      id: "log-file-analysis-gsc-indexing-diagnostic",
      tier: "core",
      archetype: "audit",
      title: "Flat Traffic, Full Index? Diagnosing a Real Indexing Export",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real 5,280-page Search Console indexing export, rank the five not-indexed reasons by share of the problem, decide which one risks silently blocking AI crawlers too, and separate normal churn from something that needs a monthly-cadence fix.",
      companyId: "yatra-online",
      scenario:
        "Yatra Online, one of India's earliest online travel agencies, built its early growth on SEO dominance for flight and hotel search queries. The content team says 'AI Overviews traffic looks fine but organic clicks feel flat' and hands you a fresh Search Console indexing export (5,280 pages) with no further context. You need to turn that export into a prioritized list of what to check in raw server logs next.",
      brief:
        "Four passes over one export: rank the five not-indexed reasons by size, check whether the robots.txt block doubles as an accidental AI-crawler block, separate architecture problems from content problems in the largest bucket, and decide whether the smaller buckets are normal churn or need this month's attention.",
      mode: "diagnostic",
      conceptsCovered: [
        "Which pages get crawled most and least often, revealing a mismatch between what you consider important and what bots actually prioritize",
        "Exactly which AI crawlers visit, how often, and which pages they touch, data that exists nowhere else",
        "Orphaned pages that bots reach only via the sitemap, never through an internal link",
        "Crawl behavior shifts after every major release, a monthly cadence tells you whether things are trending right or quietly breaking",
      ],
      skills: ["Search Console Indexing Reports", "Log-Based Prioritization", "Robots.txt Scope Auditing", "Orphan Page Diagnosis"],
      keyQuestion:
        "Across five different not-indexed reasons on a 5,280-page export, which ones actually deserve this week's attention, and which are normal churn?",
      prerequisites: [
        "Comfort working with a CSV export in a spreadsheet (summing and grouping a column)",
        "Familiarity with Search Console's indexing-reason categories",
      ],
      terminology: [
        {
          term: "Crawled, Currently Not Indexed",
          definition: "a Search Console status meaning Google fetched the page but chose not to add it to the index, usually a content-quality or discoverability signal rather than a technical block.",
        },
      ],
      steps: [
        {
          stepId: "step-1-not-indexed-breakdown",
          concept: "Which pages get crawled most and least often, revealing a mismatch between what you consider important and what bots actually prioritize",
          lessonAnchor: "what-a-log-file-actually-contains",
          theoryRecap:
            "The lesson lists this as the first thing raw logs can tell you that no other tool can: which pages bots actually prioritize versus which pages you consider important. A Search Console export is the fastest first pass at that mismatch before opening a single raw log line.",
          question:
            "Of Yatra's 5,280 exported pages, 1,389 aren't indexed, split across five reasons. Ranked by share of that 1,389, which single reason deserves the first raw-log check, and which two reasons combined already explain nearly 80% of the problem?",
          toolName: "Google Search Console",
          where: "Indexing > Pages report, or the exported gsc-indexing-export.csv opened in a spreadsheet.",
          procedure: [
            "Open gsc-indexing-export.csv and sum the 'pages' column for every non-'Indexed' row (should total 1,389)",
            "Compute each reason's share of that 1,389 total",
            "Rank the five reasons from largest to smallest share",
            "Note which two reasons combined account for the largest chunk of the problem",
          ],
          outputSample:
            "gsc-indexing-export.csv, not-indexed breakdown (1,389 pages total)\n" +
            "  Crawled, currently not indexed        690 pages   49.7%\n" +
            "  Blocked by robots.txt                  412 pages   29.7%\n" +
            "  Duplicate, no user-selected canonical  182 pages   13.1%\n" +
            "  Not found (404)                         94 pages    6.8%\n" +
            "  Server error (5xx)                      11 pages    0.8%\n\n" +
            "Top two reasons combined: 79.4% of all not-indexed pages.",
          healthy: "The largest reason (Crawled, currently not indexed) gets investigated first, since it's nearly half the problem on its own.",
          unhealthy:
            "Treating all five reasons as equally urgent and spreading a single week's dev time evenly across them, instead of spending most of it on the 690-page bucket.",
          interpret:
            "'Crawled, currently not indexed' and 'Blocked by robots.txt' together explain 79.4% of the gap. Everything downstream in this diagnostic should focus on those two first; the remaining three reasons (287 pages, 20.6%) are a monthly-habit check, not this week's fire drill.",
          soWhat: [
            {
              symptom: "The dev team wants to fix all five reasons in one sprint",
              action: "Scope the sprint to the two largest buckets only (690 + 412 = 1,102 pages, 79.4% of the problem)",
              effort: "5 min",
            },
            {
              symptom: "Nobody has quantified how big '412 blocked pages' actually is relative to the whole problem",
              action: "Always report reasons as a percentage of not-indexed, not raw counts, so priority is obvious at a glance",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-blocked-robots-ai-bots",
          concept: "Exactly which AI crawlers visit, how often, and which pages they touch, data that exists nowhere else",
          lessonAnchor: "the-2026-reason-this-matters-more-than-ever",
          theoryRecap:
            "The lesson's 2026 callout: non-Google AI crawler traffic now averages roughly 4% of all HTML requests network-wide, and Search Console cannot show you anything about GPTBot, ClaudeBot, or PerplexityBot activity. Only raw logs can confirm whether a robots.txt rule meant for one bot accidentally blocks another.",
          question:
            "412 pages (29.7% of the not-indexed total) are 'Blocked by robots.txt'. Before assuming this is fine because it was written for Googlebot, what does a raw-log check need to confirm about GPTBot, ClaudeBot, and PerplexityBot traffic to the same 412 URLs?",
          toolName: "Google Search Console",
          where: "robots.txt Tester (or the live robots.txt file) cross-referenced against raw access logs for the same URL list.",
          procedure: [
            "Pull the current robots.txt and list every Disallow rule with its scoped user-agent(s)",
            "Export the 412 blocked URLs from the indexing report",
            "Check raw logs for GPTBot, ClaudeBot, and PerplexityBot hits against that same URL list over the past 30 days",
            "Note whether the rule is scoped narrowly (e.g. a specific bot, a specific path) or written broadly enough to catch AI bots by accident",
          ],
          outputSample:
            "robots.txt (excerpt)\n" +
            "  User-agent: *\n" +
            "  Disallow: /flights/fare-calendar/\n\n" +
            "Raw log check, 30 days, /flights/fare-calendar/* paths\n" +
            "  Googlebot hits:      0 (expected, rule is working as intended for Google)\n" +
            "  GPTBot hits:         0\n" +
            "  ClaudeBot hits:      0\n" +
            "  PerplexityBot hits:  0\n\n" +
            "Finding: the rule uses 'User-agent: *', a wildcard that blocks every bot, not just Googlebot.\n" +
            "412 pages are invisible to every AI retrieval bot too, not only Google.",
          healthy: "A robots.txt rule scoped to the specific bot(s) it's meant to affect, verified by logs showing exactly those bots (and no others) staying away.",
          unhealthy:
            "A wildcard 'User-agent: *' rule that was written to solve one crawl-budget problem for Googlebot years ago, now silently blocking every AI retrieval bot from 412 pages without anyone deciding that on purpose.",
          interpret:
            "A wildcard rule is a blunt instrument: it can't distinguish 'stop wasting Googlebot's crawl budget on fare-calendar pages' from 'never let any AI system cite these pages.' If those fare-calendar pages have any AI-search value, this rule is quietly costing Yatra visibility nobody chose to give up.",
          soWhat: [
            {
              symptom: "412 pages are blocked by a rule nobody has reviewed since it was written",
              action: "Rewrite the wildcard rule to name specific bots, splitting Googlebot's crawl-budget rule from any AI-bot decision",
              effort: "30 min",
            },
            {
              symptom: "No one currently checks whether robots.txt rules affect AI crawlers differently than Googlebot",
              action: "Add 'check AI-bot log hits against every Disallow rule' to the monthly log-review habit",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-orphaned-crawled-not-indexed",
          concept: "Orphaned pages that bots reach only via the sitemap, never through an internal link, a sign of weak site architecture",
          lessonAnchor: "what-a-log-file-actually-contains",
          theoryRecap:
            "The lesson names this as a distinct failure mode from a content problem: a page bots can technically reach (via the sitemap) but never through the site's own internal links, which is an architecture signal a content review alone won't catch.",
          question:
            "690 pages (49.7% of not-indexed, the single largest bucket) are 'Crawled, currently not indexed.' A raw-log referrer check on a sample of these separates two different root causes. What does each sample URL's referrer evidence actually tell you?",
          toolName: "Screaming Frog SEO Spider",
          where: "Crawl the site, then check Internal Links and Referring Pages for a sample of the 690 flagged URLs.",
          procedure: [
            "Pull a sample of 10-15 URLs from the 690-page 'Crawled, currently not indexed' bucket",
            "Crawl the site with Screaming Frog SEO Spider and check each sample URL's internal-link count",
            "Separate the sample into 'zero internal links, sitemap-only' versus 'many internal links, still not indexed'",
            "Treat each group as a different fix, architecture for the first, content quality for the second",
          ],
          outputSample:
            "Sample of 3 URLs from the 690-page bucket\n" +
            "  /hotels/pune-budget-stays/         internal links: 0   found only in sitemap.xml   -> orphaned\n" +
            "  /flights/delhi-goa-cheap-fares/    internal links: 0   found only in sitemap.xml   -> orphaned\n" +
            "  /guides/goa-monsoon-travel-tips/   internal links: 14  linked from 3 category pages -> NOT orphaned, likely a thin-content issue instead",
          healthy: "Orphaned pages get an internal-linking fix; well-linked-but-unindexed pages get a content-depth review instead of the same generic fix.",
          unhealthy:
            "Treating all 690 pages as one problem and running a single blanket 'request indexing' pass in Search Console, which does nothing for the structural cause behind most of them.",
          interpret:
            "Roughly two-thirds of a sample this size showing zero internal links suggests the majority of the 690-page bucket is an architecture problem (pages nobody links to internally), not a content-quality problem. That changes the fix from 'rewrite these pages' to 'link to these pages from somewhere real.'",
          soWhat: [
            {
              symptom: "690 unindexed pages and no clear fix priority",
              action: "Sample-check internal links first; route the orphaned subset to an internal-linking sprint, not a rewrite sprint",
              effort: "half day",
            },
            {
              symptom: "The 'well-linked-but-unindexed' pages (like the Goa travel guide) don't respond to internal-linking fixes",
              action: "Route those specifically to a content-depth review instead, they're a different problem wearing the same symptom",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-4-monthly-cadence-check",
          concept: "Crawl behavior shifts after every major release, a monthly cadence tells you whether things are trending in the right direction or quietly breaking",
          lessonAnchor: "making-this-a-habit-not-a-one-time-audit",
          theoryRecap:
            "The lesson's closing point: a single analysis tells you today's picture, but a monthly cadence tells you the trend. The three smallest buckets here are the ones a monthly habit is specifically built to catch before they grow into next quarter's largest bucket.",
          question:
            "The remaining 287 pages (182 duplicate-canonical + 94 not-found + 11 server-error, 20.6% of not-indexed) are individually small. What would make this month's check different from just noting the numbers and moving on?",
          toolName: "Google Search Console",
          where: "Save this month's five-reason breakdown, compare it against next month's export side by side.",
          procedure: [
            "Record this month's exact counts for all five reasons in a running tracker",
            "Flag any reason that grows month-over-month, even a small one, as a trend worth investigating early",
            "Specifically watch whether 'Not found (404)' or 'Server error (5xx)' grows, both usually point to a recent site change",
            "Re-run this exact breakdown next month against the same tracker",
          ],
          outputSample:
            "Monthly tracker (illustrative, first two entries)\n" +
            "  Aug 2026: Duplicate 182 | 404s 94 | 5xx 11\n" +
            "  Sep 2026: Duplicate 190 | 404s 141 | 5xx 12\n\n" +
            "404 count jumped from 94 to 141 (+50%) in one month, worth investigating before it becomes next quarter's largest bucket.",
          healthy: "A month-over-month tracker catches a 50% jump in 404s within 30 days, while the count is still small enough to fix cheaply.",
          unhealthy: "Running this analysis once, filing it, and re-opening Search Console only when someone in a meeting asks why traffic dropped.",
          interpret:
            "Small buckets are cheap to fix and expensive to ignore. A 404 count that quietly doubles every month for two quarters becomes a 690-page problem exactly like the one already dominating this export; the monthly habit is what keeps it from getting there.",
          soWhat: [
            {
              symptom: "There's no standing process for re-checking this breakdown after this one-time diagnostic",
              action: "Put 'export and compare gsc-indexing-export' on a recurring monthly calendar entry, not a one-off task",
              effort: "5 min",
            },
            {
              symptom: "A small month-over-month increase in one reason gets dismissed as noise",
              action: "Set a simple trigger: any reason growing more than 25% month-over-month gets a same-week root-cause check",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Source of the indexing export and the robots.txt Tester used to confirm rule scope",
            why: "Free, and the only tool that shows Google's own indexing-reason classification per URL.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the site to confirm internal-link counts for the orphaned-page check in Step 3",
            why: "Free for up to 500 URLs, sufficient to sample-check a bucket this size before deciding it needs a bigger fix.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Site-wide internal-link and orphaned-page auditing at a scale beyond the free Screaming Frog crawl limit",
            why: "The free path is complete for a 5,280-page export sampled by hand; Ahrefs earns its cost once the site is large enough that sampling isn't reliable anymore.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "This diagnostic is fully completable on the free path for a site of this size.",
      },
      datasetUrl: "/project-data/gsc-indexing-export.csv",
      deliverable:
        "A prioritized indexing/log-check memo: the two reasons that explain 79.4% of the problem, whether the robots.txt block also silently blocks AI crawlers, which subset of the largest bucket is architecture vs. content, and which smaller reason needs this month's watch-list entry.",
      sampleOutput:
        "Applying the same lens to a different travel platform's own export (illustrative): a 'Blocked by robots.txt' bucket turned out to be scoped narrowly to a single staging-leftover path rather than a wildcard rule, closing that line of inquiry in five minutes so the team could spend the rest of the sprint on their much larger 'Crawled, currently not indexed' bucket instead.",
      successCriteria: [
        "Correctly ranks 'Crawled, currently not indexed' (49.7%) and 'Blocked by robots.txt' (29.7%) as the two priority reasons, not treated as five equal problems",
        "Identifies that a wildcard 'User-agent: *' robots.txt rule blocks AI bots too, not only Googlebot, as a distinct finding from the raw indexing count",
        "Separates the 690-page bucket into an orphaned-page (architecture) subset and a well-linked (content) subset using real internal-link evidence, not assumption",
        "Proposes a specific month-over-month trigger (e.g. 25%+ growth in any reason) rather than a vague 'keep monitoring' recommendation",
      ],
      portfolioReady: true,
      stretch: "Pull your own site's real Search Console Pages export and run this exact four-step breakdown against your own not-indexed reasons.",
      whatToLookFor: [
        { label: "Share of problem, not raw count", detail: "Does a reason's percentage of the total, not just its headline number, actually justify the priority given to it?" },
        { label: "Rule scope vs. rule intent", detail: "Does a robots.txt rule written for one bot (Googlebot) accidentally cover bots it was never meant to affect?" },
        { label: "Root cause behind a shared symptom", detail: "Within one large bucket, are all the pages failing for the same reason, or do they split into an architecture problem and a content problem?" },
        { label: "Trend, not just snapshot", detail: "Is a small bucket actually stable, or growing month over month toward becoming next quarter's biggest problem?" },
      ],
      decision: {
        prompt:
          "The 690-page 'Crawled, currently not indexed' bucket is the largest of five reasons. A sample shows some URLs have zero internal links (sitemap-only) while others have 14+ internal links but are still unindexed. What's the correct next step?",
        options: [
          { id: "a", label: "Run a single blanket 'request indexing' pass in Search Console for all 690 pages", correct: false },
          { id: "b", label: "Split the bucket: route the zero-internal-link pages to an internal-linking fix and the well-linked-but-unindexed pages to a content-depth review", correct: true },
          { id: "c", label: "Rewrite all 690 pages, since 'currently not indexed' always signals a content-quality problem", correct: false },
          { id: "d", label: "Deprioritize the whole bucket since it's a single Search Console category and therefore one problem", correct: false },
        ],
        explanation:
          "The sample evidence shows two distinct root causes sharing one Search Console label: pages with zero internal links are an architecture problem (nobody links to them), while well-linked pages that still aren't indexed point to a content-depth issue instead. A blanket indexing request or a blanket rewrite ignores that split and wastes effort on the wrong fix for roughly half the bucket.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Prioritize the two largest not-indexed reasons first, 'Crawled, currently not indexed' (49.7%) and 'Blocked by robots.txt' (29.7%), which together explain 79.4% of the gap. Within the first, split the fix by root cause using the internal-link sample evidence: an internal-linking sprint for the orphaned subset, a content-depth review for the well-linked subset. For the robots.txt bucket, rewrite the wildcard 'User-agent: *' rule to name Googlebot specifically once log evidence confirms AI bots are also being blocked by it. Treat the remaining 287 pages as a monthly-tracker item, not this week's fire drill.",
      },
      commonMistakes: [
        { mistake: "Spreading effort evenly across all five not-indexed reasons", explanation: "two reasons account for 79.4% of the problem; equal effort across all five wastes most of a sprint on the smallest 20.6%." },
        { mistake: "Assuming a robots.txt rule written for Googlebot only affects Googlebot", explanation: "a wildcard 'User-agent: *' rule blocks every bot, including AI retrieval crawlers nobody intended to exclude, unless the log evidence is actually checked." },
        { mistake: "Treating 'Crawled, currently not indexed' as always a content-quality problem", explanation: "the sample evidence here shows a real architecture-vs-content split; assuming one cause for the whole bucket misdirects the fix for half of it." },
        { mistake: "Noting a small bucket's number without tracking it over time", explanation: "a small reason like 404s can grow 50% in a single month and become next quarter's dominant problem if nobody is watching the trend." },
      ],
      keyTakeaway:
        "A single indexing export contains at least three different diagnostic questions in one table: which reasons matter most by share, whether a rule meant for one bot is silently affecting others, and whether a large bucket is actually one problem or two disguised as one. Answering all three, not just reading the top-line numbers, is what turns an export into a prioritized fix list.",
    },
  ],

  "llms-txt-ai-crawler-management": [
    {
      id: "llms-txt-ai-crawler-management-robots-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Blocked Everything, Cited Nothing: A Broken robots.txt and llms.txt Pair",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a company's actual robots.txt and llms.txt files, spot the defects that block the wrong bots, defeat the team's own stated AI-visibility goal, and turn llms.txt into stale, low-value markdown instead of a useful map.",
      companyId: "coinbase",
      scenario:
        "Coinbase's content team wants its Learn education hub cited when someone asks an AI assistant how to set up two-factor authentication, but does not want its proprietary research pages used to train a competitor's model. Someone drafted a robots.txt and llms.txt pair last quarter and nobody has looked at either file since.",
      brief:
        "Two specimens: the live robots.txt rules for /learn/ and /research/, and the current llms.txt file. Find what actively works against the team's own stated goals.",
      mode: "teardown",
      conceptsCovered: [
        "Training bots and retrieval bots from the same company are different user-agents, you can block one and allow the other",
        "What llms.txt actually is: a proposed convention, not an enforced standard",
      ],
      skills: ["AI Bot Access Policy", "robots.txt Rule Scoping", "llms.txt Auditing", "Training vs Retrieval Bot Distinction"],
      keyQuestion:
        "Do this site's actual robots.txt and llms.txt files achieve the AI-visibility goal the team says it wants, or work against it?",
      prerequisites: [
        "Understanding that different AI companies run separate training and retrieval crawlers under different user-agent names",
        "Basic familiarity with reading a robots.txt Disallow/Allow block",
      ],
      terminology: [
        {
          term: "Training Bot vs Retrieval Bot",
          definition: "a training bot (e.g. GPTBot) collects content to train a model on; a retrieval bot (e.g. OAI-SearchBot) fetches a page live to answer a specific user question. The same AI company runs both under different user-agent names, and blocking one does not block the other.",
        },
        {
          term: "llms.txt",
          definition: "a proposed (not officially enforced) markdown file at a site's root listing its most important pages with short descriptions, meant to give AI systems a clean map of the site.",
        },
      ],
      teardownItems: [
        {
          itemId: "coinbase-robots-txt-blanket-block",
          specimenSource: "synthetic-realistic",
          prompt:
            "Coinbase's stated goal: block AI training on /research/, stay citable everywhere else, especially /learn/. Compare that goal against the actual robots.txt rules below.",
          specimen:
            "=== robots.txt (excerpt, /learn/ and /research/) ===\n" +
            "User-agent: GPTBot\n" +
            "User-agent: OAI-SearchBot\n" +
            "User-agent: ChatGPT-User\n" +
            "Disallow: /research/\n\n" +
            "User-agent: ClaudeBot\n" +
            "User-agent: Claude-User\n" +
            "Disallow: /research/\n\n" +
            "User-agent: PerplexityBot\n" +
            "Disallow: /\n\n" +
            "User-agent: Google-Extended\n" +
            "Allow: /",
          answerKey: [
            {
              defect: "GPTBot, OAI-SearchBot, and ChatGPT-User are grouped under one shared Disallow rule for /research/",
              severity: "critical",
              whyItMatters:
                "OAI-SearchBot and ChatGPT-User are live retrieval agents, not training crawlers. Grouping them with GPTBot means /research/ can never be cited when a user asks ChatGPT a live question about it, the opposite of what a training-block-only policy is meant to achieve.",
              lessonRef: "robots.txt: Where Real Control Lives, training bots and retrieval bots are different user-agents",
              owner: "developer",
            },
            {
              defect: "PerplexityBot is disallowed site-wide ('Disallow: /'), including /learn/, the exact hub the team wants cited",
              severity: "critical",
              whyItMatters:
                "This directly blocks the pages meant to build citation visibility. Combined with the lesson's caveat that Perplexity has been caught ignoring declared user-agents anyway, this rule both fails its own stated goal and can't be fully trusted to hold in the first place.",
              lessonRef: "robots.txt: Where Real Control Lives",
              owner: "developer",
            },
          ],
          distractors: [
            "Google-Extended is set to Allow: / for the whole site.",
            "The OpenAI rules appear above the Anthropic rules in the file.",
          ],
          partialCredit: true,
        },
        {
          itemId: "coinbase-llms-txt-stale-links",
          specimenSource: "synthetic-realistic",
          prompt: "Coinbase's /llms.txt file is below, alongside a note about what analytics actually shows as the top Learn page.",
          specimen:
            "=== /llms.txt ===\n" +
            "# Coinbase Learn\n" +
            "> Coinbase is the world's most trusted place to buy, sell, and manage crypto. We believe in a future powered by cryptocurrency and are here to guide you every step of the way, because your journey matters to us.\n\n" +
            "## Docs\n" +
            "- [Getting Started](https://coinbase.com/learn/getting-started-2024): everything you need to know\n" +
            "- [Security Tips](https://coinbase.com/learn/old-security-page): stay safe out there\n\n" +
            "=== ANALYTICS NOTE ===\n" +
            "/learn/two-factor-authentication-setup/ is the #1 most-visited Learn page by organic sessions. It is not listed above.\n" +
            "/learn/old-security-page/ returns a 404, it was renamed during last quarter's site refresh.",
          answerKey: [
            {
              defect: "The 'Security Tips' link points to /learn/old-security-page, which now 404s after a site refresh",
              severity: "moderate",
              whyItMatters:
                "A dead link in llms.txt is arguably worse than no file at all: any system that does parse it hits a broken page and has reason to distrust the rest of the file's accuracy.",
              lessonRef: "What llms.txt Actually Is: it's a proposed convention, keeping it current is what makes it worth publishing at all",
              owner: "you",
            },
            {
              defect:
                "Descriptions are marketing copy ('everything you need to know', 'stay safe out there') instead of specific summaries, and the single highest-traffic page (2FA setup) is missing entirely",
              severity: "moderate",
              whyItMatters:
                "llms.txt is meant to give a model a clean map of your most important pages with real descriptions, not ad copy. Omitting the top page by traffic defeats the entire purpose of publishing the file.",
              lessonRef: "What llms.txt Actually Is: lists your most important pages with short descriptions",
              owner: "you",
            },
          ],
          distractors: [
            "The file uses '#' and '##' markdown headers to structure sections.",
            "The file is hosted at /llms.txt in lowercase.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the site to confirm the dead link and check which pages the current robots.txt rules actually scope",
            why: "Free for up to 500 URLs, enough to verify both defects against the live site rather than the specimen alone.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Confirm which Learn pages actually drive organic traffic, to verify which page is genuinely 'highest-value'",
            why: "Free, and the most direct source for the traffic ranking the llms.txt file should reflect.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "No paid tool is needed, this is a structural read of two small text files plus one free crawl.",
      },
      deliverable: "An annotated fix list: which bot rules need splitting, which link needs updating, and which page is missing from llms.txt.",
      sampleOutput:
        "Running the same two-file check against a different fintech's setup (illustrative, The Trade Desk): the robots.txt correctly split GPTBot from OAI-SearchBot, but the llms.txt file listed a marketing landing page instead of the actual API documentation root, the page developers were most likely to want summarized for an AI coding assistant.",
      successCriteria: [
        "Identifies that grouping training and retrieval bots under one Disallow rule defeats the team's own stated citation goal",
        "Flags the site-wide PerplexityBot block as directly contradicting the goal of keeping /learn/ citable",
        "Catches the dead link in llms.txt as a credibility problem, not just a broken URL",
        "Identifies the missing highest-traffic page as the more important defect than the marketing-copy tone",
      ],
      portfolioReady: true,
      stretch: "Fetch your own site's real /robots.txt and /llms.txt (or note that llms.txt doesn't exist yet) and run this same two-part check on real files.",
      whatToLookFor: [
        { label: "Bot grouping", detail: "Are training and retrieval bots from the same company grouped under one shared rule, or scoped individually?" },
        { label: "Rule scope vs. stated goal", detail: "Does a Disallow rule accidentally block a page the team explicitly wants cited?" },
        { label: "Link freshness", detail: "Do the links inside llms.txt actually resolve, or point at renamed/removed pages?" },
        { label: "Content selection", detail: "Does llms.txt list the pages that actually matter (by real traffic), or whatever someone thought to add?" },
      ],
      decision: {
        prompt:
          "Coinbase's robots.txt groups GPTBot, OAI-SearchBot, and ChatGPT-User under one shared Disallow rule for /research/. The stated goal is: block AI training, stay citable when a user asks a live question. What's the correct fix?",
        options: [
          { id: "a", label: "Leave the rule as-is, since blocking all three is the safest way to protect proprietary research content", correct: false },
          { id: "b", label: "Split the rule: Disallow GPTBot (training) for /research/, but Allow OAI-SearchBot and ChatGPT-User (retrieval) so live citation still works", correct: true },
          { id: "c", label: "Remove the Disallow rule entirely so all three bots can access /research/", correct: false },
          { id: "d", label: "Move the rule from /research/ to /learn/ instead, since /learn/ is the hub the team wants cited", correct: false },
        ],
        explanation:
          "The lesson's core distinction is that training bots and retrieval bots from the same AI company are different user-agents that can be controlled independently. Grouping all three under one Disallow rule blocks live citation along with training, the opposite of the stated goal. Leaving the rule as-is or removing it entirely both fail to serve both goals at once; only naming each bot separately achieves 'block training, stay citable.'",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Split the robots.txt rule for /research/ so GPTBot remains disallowed for training while OAI-SearchBot and ChatGPT-User are explicitly allowed for retrieval, and remove the site-wide PerplexityBot block since it currently disallows the very /learn/ pages the team wants cited. Separately, fix the dead link in llms.txt and add the #1-traffic 2FA setup page, which is currently missing entirely. Both files currently work against the stated AI-visibility goal rather than for it.",
      },
      commonMistakes: [
        { mistake: "Grouping all bots from one AI company under a single rule", explanation: "training and retrieval crawlers serve different purposes and can be controlled independently; grouping them collapses a nuanced policy into an all-or-nothing block." },
        { mistake: "Missing a site-wide block buried among page-specific rules", explanation: "the PerplexityBot 'Disallow: /' rule is easy to skim past next to the more detailed /research/-scoped rules, but it silently blocks the entire site including the pages the team most wants cited." },
        { mistake: "Treating llms.txt tone (marketing copy vs. plain description) as the main defect", explanation: "a dead link and a missing top-traffic page are functionally worse than promotional language, since they actively mislead or omit rather than just read oddly." },
      ],
      keyTakeaway:
        "A robots.txt and llms.txt pair can look deliberately configured while quietly working against the team's own stated goal. Checking each rule and each link against what the team actually wants, not just whether the files are syntactically valid, is what catches a policy that defeats itself.",
    },
    {
      id: "llms-txt-ai-crawler-management-bot-policy-audit",
      tier: "mini",
      archetype: "audit",
      title: "Write the Policy, Then Prove It Holds: An AI Bot Access Audit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Draft a training-vs-retrieval robots.txt split for a real site using the lesson's own checklist, then define exactly what a quarterly recheck of that policy needs to confirm.",
      companyId: "robinhood",
      scenario:
        "Robinhood's marketing lead wants a clear, defensible AI-bot policy for the investing-education blog before the next content sprint: allow retrieval and citation, block training, and actually verify it every quarter instead of publishing it once and forgetting it exists.",
      brief:
        "Two passes: draft the specific bot-by-bot split using the lesson's checklist, then define the quarterly recheck that keeps the policy from going stale the way most robots.txt AI-bot rules do.",
      mode: "diagnostic",
      conceptsCovered: [
        "Training bots and retrieval bots from the same AI company are different user-agents, you can allow one and block the other",
        "Revisit the whole setup quarterly, this space moves fast and last quarter's setup may already be outdated",
      ],
      skills: ["AI Bot Policy Design", "robots.txt Authoring", "Quarterly Compliance Recheck", "Log-Based Bot Discovery"],
      keyQuestion:
        "What does a defensible, bot-by-bot AI access policy look like from scratch, and what keeps it from going stale within a quarter?",
      prerequisites: [
        "Familiarity with editing a robots.txt file's User-agent/Disallow/Allow syntax",
        "Understanding of the training-vs-retrieval bot distinction (see llms-txt-ai-crawler-management-robots-teardown)",
      ],
      steps: [
        {
          stepId: "step-1-training-vs-retrieval-split",
          concept: "Training bots and retrieval bots from the same AI company are different user-agents, you can allow one and block the other",
          lessonAnchor: "robotstxt-where-real-control-lives",
          theoryRecap:
            "The lesson's own robots.txt example splits GPTBot/ClaudeBot/PerplexityBot/Google-Extended (training) from OAI-SearchBot/Claude-User/ChatGPT-User (retrieval), naming each bot individually rather than using a wildcard rule.",
          question:
            "Robinhood's live robots.txt currently has zero AI-bot-specific rules. Following the lesson's 'decide your training-data stance first' step, which bots get Disallowed for training and which get Allowed for retrieval on the investing-education blog?",
          toolName: "Screaming Frog SEO Spider",
          where: "The site's live robots.txt at robinhood.com/robots.txt, or Configuration > robots.txt > Custom in Screaming Frog.",
          procedure: [
            "Fetch the live robots.txt and confirm it currently has no AI-bot-specific rules",
            "List the 8 named bots from the lesson's checklist: GPTBot, ClaudeBot, PerplexityBot, Google-Extended (training) and OAI-SearchBot, Claude-User, ChatGPT-User, Perplexity-User (retrieval)",
            "Decide the training-data stance first, block all four training bots, matching the goal of not feeding proprietary investing-education content into model training",
            "Explicitly Allow the four retrieval bots so citation and live answers stay possible",
          ],
          outputSample:
            "robots.txt, before (no AI-bot rules exist)\n" +
            "  User-agent: *\n" +
            "  Disallow:\n\n" +
            "robots.txt, after (this project's proposed split)\n" +
            "  User-agent: GPTBot\n" +
            "  Disallow: /\n\n" +
            "  User-agent: OAI-SearchBot\n" +
            "  Allow: /\n\n" +
            "  User-agent: ChatGPT-User\n" +
            "  Allow: /\n\n" +
            "  User-agent: ClaudeBot\n" +
            "  Disallow: /\n\n" +
            "  User-agent: Claude-User\n" +
            "  Allow: /\n\n" +
            "  User-agent: PerplexityBot\n" +
            "  Allow: /\n\n" +
            "  User-agent: Google-Extended\n" +
            "  Disallow: /",
          healthy: "A robots.txt file that names each bot individually and matches every rule to a stated training-vs-retrieval decision.",
          unhealthy: "Leaving the file with no AI-bot rules at all, which defaults to every bot, training and retrieval alike, being fully allowed by omission.",
          interpret:
            "Silence in robots.txt is itself a decision, it just isn't an intentional one. Naming each bot explicitly turns an accidental default into a policy someone can actually defend to legal or leadership.",
          soWhat: [
            {
              symptom: "robots.txt has no AI-bot rules and nobody remembers deciding that on purpose",
              action: "Publish the 8-bot split above, scoped to the education blog section specifically",
              effort: "30 min",
            },
            {
              symptom: "Legal asks 'are we blocking AI training?' and there's no clear answer",
              action: "Point to the explicit Disallow rules for GPTBot, ClaudeBot, and Google-Extended as the documented answer",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-2-quarterly-recheck-habit",
          concept: "Revisit the whole setup quarterly, this space moves fast and last quarter's setup may already be outdated",
          lessonAnchor: "practical-implementation-checklist",
          theoryRecap:
            "The lesson's checklist ends with a standing habit: new bots appear, existing ones split into sub-agents, and industry compliance norms keep shifting month to month, so a policy that was correct in Q1 can be stale by Q3.",
          question:
            "Three months after publishing the split from Step 1, what exactly does the quarterly recheck need to confirm, beyond just re-reading the same file and assuming nothing changed?",
          toolName: "Cloudflare",
          where: "Server logs, or a hosting/CDN provider's bot-traffic reporting (Cloudflare, Fastly, Vercel) if raw logs aren't accessible.",
          procedure: [
            "Check server logs (or the CDN dashboard) for hits from each of the 8 named user-agents over the past 30 days",
            "Confirm no new AI-bot user-agent has appeared that isn't yet covered by an explicit rule",
            "Re-read current AI-crawler guidance for any bot that's split into new sub-agents since last quarter",
            "Update the robots.txt file and log the recheck date",
          ],
          outputSample:
            "Quarterly recheck log (illustrative)\n" +
            "  Q1 2026: 8 bots covered, 0 unrecognized AI user-agents in logs. No changes needed.\n" +
            "  Q2 2026: 1 new user-agent detected in logs, 'Amazonbot' (not yet covered). Added Disallow rule.\n" +
            "  Q3 2026 (due): recheck scheduled.",
          healthy: "A dated log showing each quarter's recheck, including any new bot added, not just a policy that sits untouched.",
          unhealthy: "Publishing the robots.txt split once and never opening the file again, the exact failure mode the lesson warns about repeatedly.",
          interpret:
            "'Robots.txt is a request, not a lock' cuts both ways: the rules only work if they cover the bots actually showing up in logs, and new bots appear often enough that a policy older than a quarter is already at risk of missing one.",
          soWhat: [
            {
              symptom: "The robots.txt split was published once, six months ago, with no recheck since",
              action: "Add a recurring quarterly calendar reminder: check logs, check for new bots, update the file",
              effort: "5 min",
            },
            {
              symptom: "A new AI bot user-agent shows up in logs with no matching robots.txt rule",
              action: "Add an explicit Allow/Disallow rule for it within the week, following the same training-vs-retrieval logic as Step 1",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Fetch and validate the live robots.txt file's syntax before and after edits",
            why: "Free, built-in robots.txt checking under Configuration, catches syntax errors before the file goes live.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Sanity-check that the new rules don't accidentally block Googlebot from indexing the blog itself",
            why: "Free, and the fastest way to confirm the AI-bot rules didn't collide with normal Google indexing.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "No paid tool is required for either step.",
      },
      deliverable: "A dated robots.txt training/retrieval split for the education blog, plus a recurring quarterly-recheck log template.",
      sampleOutput:
        "The same 8-bot split applied to a different fintech's blog (illustrative, TBO Tek's agent-training resources hub): the Q2 recheck caught 'Applebot-Extended' showing up in logs with no matching rule, closing the gap within the week instead of letting it sit uncovered for another quarter.",
      successCriteria: [
        "Names all 8 bots individually rather than using a wildcard rule",
        "Correctly pairs each training bot with its own separate retrieval-bot counterpart from the same AI company",
        "Defines a concrete quarterly recheck procedure, not just 'check it sometimes'",
        "Includes a plan for handling a newly discovered AI bot user-agent found in logs",
      ],
      portfolioReady: true,
      stretch: "Check your own site's real robots.txt against the 8-bot list and note which ones are currently uncovered.",
      whatToLookFor: [
        { label: "Individual bot naming", detail: "Does the policy name each of the 8 bots explicitly, or rely on a wildcard that can't distinguish training from retrieval?" },
        { label: "Stance consistency", detail: "Does every training bot get the same Disallow decision, and every retrieval bot get the same Allow decision, based on one clear stance?" },
        { label: "Silence as a default", detail: "Is the absence of AI-bot rules being treated as a real decision, or as an accident nobody noticed?" },
        { label: "Recheck evidence", detail: "Does the quarterly process check actual log traffic for new bot user-agents, or just re-read the same static file?" },
      ],
      decision: {
        prompt:
          "Robinhood's robots.txt currently has zero AI-bot-specific rules. What does that silence actually mean for AI training access to the investing-education blog?",
        options: [
          { id: "a", label: "It means AI bots are blocked by default until an explicit Allow rule is added", correct: false },
          { id: "b", label: "It means every bot, training and retrieval alike, is fully allowed by default, an unintentional decision rather than a deliberate one", correct: true },
          { id: "c", label: "It has no effect either way since robots.txt only applies to Googlebot", correct: false },
          { id: "d", label: "It means the site is automatically opted out of AI training under current industry norms", correct: false },
        ],
        explanation:
          "robots.txt works on an opt-out basis: without an explicit Disallow rule, a bot is free to crawl. Robinhood's empty AI-bot section means every training and retrieval bot currently has full access by omission, not by choice. That's the gap the 8-bot split closes, turning an accidental default into a documented, defensible policy.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Publish the 8-bot training-vs-retrieval split (Disallow GPTBot, ClaudeBot, PerplexityBot, and Google-Extended; Allow OAI-SearchBot, Claude-User, Perplexity-User, and ChatGPT-User) scoped to the education blog, so the current silent-allow-by-default state becomes a documented, defensible policy. Pair it with a recurring quarterly calendar reminder to check server logs for new, uncovered AI-bot user-agents, since this space adds new bots and sub-agents faster than a policy written once can track.",
      },
      commonMistakes: [
        { mistake: "Assuming no AI-bot rules means AI bots are already blocked", explanation: "robots.txt is opt-out, not opt-in; an empty AI-bot section means full access by default, not protection." },
        { mistake: "Using a single wildcard rule instead of naming each bot", explanation: "a wildcard can't express 'block training but allow retrieval' from the same company; only naming each user-agent individually can." },
        { mistake: "Publishing the policy once and treating it as permanent", explanation: "new AI bots and sub-agents appear regularly; a policy that isn't rechecked quarterly against real log traffic goes stale within months." },
      ],
      keyTakeaway:
        "An AI bot access policy isn't just a file to publish once, it's a stance (which bots get training access, which get retrieval access) that has to be explicit rather than left to robots.txt's silent opt-out default, and rechecked on a schedule since the bot landscape changes faster than most teams remember to look.",
    },
  ],

  "international-seo": [
    {
      id: "international-seo-hreflang-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "48 Hours to Launch: A Broken hreflang Rollout",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given the actual hreflang blocks from a rushed regional launch, spot the reciprocity break, the invalid language code, and the partial-rollout gap before they cost the site 20-30% of potential international traffic.",
      companyId: "grab",
      scenario:
        "Grab's Indonesia and Thailand city-guide pages just went live under a rushed rollout ahead of a regional promo. You're handed the actual hreflang blocks from both pages, plus the homepage, to sign off before the promo goes live in 48 hours.",
      brief:
        "Two specimens: the hreflang blocks across three pages, then a site-crawl summary showing how far the rollout actually reached. Find what breaks before the deadline, not after.",
      mode: "teardown",
      conceptsCovered: [
        "Every tagged page must include tags pointing to ALL alternate versions (including itself)",
        "Language codes use ISO 639-1 format and country codes use ISO 3166-1 alpha-2",
        "The most common hreflang mistake: adding tags to a few top pages but leaving thousands of pages untagged",
      ],
      skills: ["hreflang Implementation", "ISO Language/Country Codes", "Reciprocity Validation", "Site-Wide Rollout Auditing"],
      keyQuestion:
        "Does this hreflang rollout actually meet Google's reciprocity and consistency requirements before the 48-hour launch deadline?",
      prerequisites: [
        "Basic familiarity with reading an hreflang <link rel=\"alternate\"> block",
        "Understanding that hreflang requires every version to reciprocally reference every other version",
      ],
      terminology: [
        {
          term: "Reciprocity",
          definition: "the requirement that if Page A's hreflang block references Page B, Page B's hreflang block must also reference Page A, including a self-referencing tag; a one-way reference is treated as invalid by Google.",
        },
        {
          term: "x-default",
          definition: "a special hreflang value marking which page version to show visitors whose language or country doesn't match any of the tagged alternates.",
        },
      ],
      teardownItems: [
        {
          itemId: "grab-non-reciprocal-and-wrong-codes",
          specimenSource: "synthetic-realistic",
          prompt: "The hreflang blocks for Grab's homepage, Indonesia page, and Thailand page are below. Check them for reciprocity and valid codes.",
          specimen:
            "=== HOMEPAGE (grab.com/) hreflang block ===\n" +
            "<link rel=\"alternate\" hreflang=\"id-ID\" href=\"https://grab.com/id/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"th-TH\" href=\"https://grab.com/th/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"en\" href=\"https://grab.com/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"x-default\" href=\"https://grab.com/\" />\n\n" +
            "=== INDONESIA PAGE (grab.com/id/) hreflang block ===\n" +
            "<link rel=\"alternate\" hreflang=\"th-TH\" href=\"https://grab.com/th/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"en\" href=\"https://grab.com/\" />\n\n" +
            "=== THAILAND PAGE (grab.com/th/) hreflang block ===\n" +
            "<link rel=\"alternate\" hreflang=\"in-TH\" href=\"https://grab.com/id/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"en\" href=\"https://grab.com/\" />\n" +
            "<link rel=\"alternate\" hreflang=\"th-TH\" href=\"https://grab.com/th/\" />",
          answerKey: [
            {
              defect: "The Indonesia page (grab.com/id/) has no self-referencing hreflang tag pointing to itself",
              severity: "critical",
              whyItMatters:
                "The lesson's key rule is that every tagged page must include tags pointing to ALL alternate versions, including itself. A missing self-reference breaks the reciprocity Google requires and puts the whole cluster at risk of being ignored.",
              lessonRef: "How hreflang Tags Work: every tagged page must include tags pointing to ALL alternate versions (including itself)",
              owner: "developer",
            },
            {
              defect: "The Thailand page uses 'in-TH' instead of 'th-TH' for its own language code",
              severity: "critical",
              whyItMatters:
                "'in' is not a valid ISO 639-1 language code (it's not a real code at all; Thai is 'th'). An invalid hreflang value is typically ignored entirely by Google, silently dropping this page from the cluster right before a promo.",
              lessonRef: "How hreflang Tags Work: language codes use ISO 639-1 format",
              owner: "developer",
            },
          ],
          distractors: ["The homepage lists id-ID before th-TH.", "The Thailand page's tags appear in a different order than the homepage's tags."],
          partialCredit: true,
        },
        {
          itemId: "grab-partial-rollout-missing-xdefault",
          specimenSource: "synthetic-realistic",
          prompt: "A category page going live for the promo, and a site-crawl summary of how far the hreflang rollout actually reached, are below.",
          specimen:
            "=== HOMEPAGE (grab.com/) — has the full hreflang block shown above ===\n\n" +
            "=== CATEGORY PAGE (grab.com/id/food-delivery/) <head> excerpt ===\n" +
            "<title>GrabFood Indonesia — Food Delivery</title>\n" +
            "<meta name=\"description\" content=\"Order food delivery across Indonesia with GrabFood.\" />\n" +
            "<link rel=\"canonical\" href=\"https://grab.com/id/food-delivery/\" />\n" +
            "<!-- no hreflang tags present -->\n\n" +
            "=== SITE CRAWL SUMMARY (Screaming Frog SEO Spider) ===\n" +
            "Pages with hreflang tags: 1 (homepage only)\n" +
            "Pages without hreflang tags: 2,847 (all category, city-guide, and promo pages)",
          answerKey: [
            {
              defect:
                "hreflang tags exist only on the homepage; 2,847 category and city-guide pages, including the /id/food-delivery/ page going live for the promo, have none",
              severity: "critical",
              whyItMatters:
                "The lesson calls this the most common hreflang mistake: Google only acts on hreflang when it's consistent site-wide, and a partial rollout can send conflicting signals that make things worse than having no hreflang at all, an estimated 20-30% of potential international traffic at stake.",
              lessonRef: "How hreflang Tags Work: the most common hreflang mistake",
              owner: "developer",
            },
          ],
          distractors: [
            "The category page's title tag doesn't repeat the word 'Indonesia'.",
            "The canonical tag points to the same URL as the page itself.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the full site to find every page missing hreflang tags before launch",
            why: "Free for up to 500 URLs, the fastest way to confirm rollout coverage instead of spot-checking a handful of pages by hand.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Check the International Targeting report for hreflang errors Google has already detected",
            why: "Free, and surfaces reciprocity and invalid-code errors Google itself has flagged, a useful second opinion on the crawl findings.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Site-wide hreflang auditing at a scale beyond the free Screaming Frog crawl limit",
            why: "The free path is complete for confirming these specific defects; Ahrefs only earns its cost on a site far larger than 500 URLs.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "This teardown is fully completable free.",
      },
      deliverable:
        "An annotated defect list with severity and fix owner (dev vs. marketing) for the 48-hour promo go/no-go call: the missing self-reference, the invalid language code, and the 2,847-page rollout gap.",
      sampleOutput:
        "The same three-page check applied to a different Southeast Asian superapp's rollout (illustrative, GoTo/Gojek): the homepage and two of three regional pages reciprocated correctly, but the third used 'jv-ID' (a real but wrong code for a Javanese-language page meant to target Indonesian more broadly) instead of 'id-ID', caught only by checking the code against the ISO 639-1 list directly.",
      successCriteria: [
        "Identifies the missing self-referencing tag on the Indonesia page as critical, not cosmetic",
        "Catches 'in-TH' as an invalid ISO 639-1 code, not just 'a typo'",
        "Flags the 2,847-page rollout gap as the single biggest risk in the whole review, bigger than either single-page defect",
        "Does not flag the homepage's tag order or the canonical tag as defects",
      ],
      portfolioReady: true,
      stretch: "Run Merkle's free hreflang tags testing tool (technicalseo.com/tools/hreflang) against a real multi-locale site you have access to.",
      whatToLookFor: [
        { label: "Self-reference", detail: "Does every tagged page include a tag pointing back to itself, not just to its alternates?" },
        { label: "Valid codes", detail: "Is each language code a real ISO 639-1 code, not a plausible-looking but invalid one?" },
        { label: "Reciprocity", detail: "If Page A references Page B, does Page B reference Page A back?" },
        { label: "Rollout coverage", detail: "Is hreflang present site-wide, or only on a small sample of pages while the rest are untagged?" },
      ],
      decision: {
        prompt:
          "With 48 hours to launch, the homepage and both regional pages have hreflang issues, but a site crawl also shows only 1 of 2,848 total pages carries any hreflang tags at all. What's the single highest-priority fix before the go/no-go call?",
        options: [
          { id: "a", label: "Fix the 'in-TH' invalid language code first, since an invalid code is silently ignored by Google", correct: false },
          { id: "b", label: "Add the missing self-referencing tag to the Indonesia page first, since reciprocity is the most fundamental requirement", correct: false },
          { id: "c", label: "Treat the 2,847-page rollout gap as the top priority, since the lesson calls partial rollouts worse than no hreflang at all, and the individual page defects don't matter if the rollout itself doesn't happen", correct: true },
          { id: "d", label: "Launch as planned and fix all three issues in a post-launch patch within the first week", correct: false },
        ],
        explanation:
          "The individual defects (missing self-reference, invalid language code) matter, but they affect two pages. The 2,847-page rollout gap affects the entire site and is the exact pattern the lesson warns is worse than having no hreflang at all, since it sends conflicting signals rather than a clean absence of signals. Fixing the two-page defects without addressing rollout scope still leaves the site in the higher-risk partial-rollout state; launching as-is risks the estimated 20-30% international traffic hit the lesson describes.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Recommend holding the 48-hour launch, or narrowing it to only the pages with correct hreflang, until the rollout gap closes. Fix the Indonesia page's missing self-reference and the Thailand page's invalid 'in-TH' code as immediate two-page corrections, but treat the 2,847-page missing-hreflang gap as the primary go/no-go blocker, since a partial rollout risks the estimated 20-30% international traffic loss the lesson describes, worse than shipping with no hreflang at all.",
      },
      commonMistakes: [
        { mistake: "Fixing the two visible page-level defects and declaring the audit done", explanation: "the 2,847-page rollout gap is the larger risk by far and is easy to miss if the review stops at the pages already reviewed by hand." },
        { mistake: "Treating an invalid language code as a minor typo", explanation: "an invalid ISO code isn't corrected automatically by Google, it's typically ignored entirely, silently dropping that page from the cluster." },
        { mistake: "Flagging cosmetic differences like tag order as defects", explanation: "the order tags appear in the block has no effect on how Google parses hreflang; time spent flagging it is time not spent on the reciprocity and coverage issues that actually matter." },
      ],
      keyTakeaway:
        "hreflang defects come in two very different sizes: a missing self-reference or invalid code breaks one page's cluster, but a partial site-wide rollout risks the whole migration's international traffic. Checking rollout scope, not just tag correctness on the pages already in front of you, is what catches the bigger risk before a launch deadline.",
    },
    {
      id: "international-seo-market-expansion-audit",
      tier: "core",
      archetype: "audit",
      title: "One Quarter, One Market: The Poland Expansion Call",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given demand, budget, and staging-crawl evidence for a hypothetical new-market launch, apply the lesson's URL-structure framework, demand-validation step, native-keyword-research rule, and hreflang-consistency rule to make a single go/no-go launch call.",
      companyId: "sea-limited",
      scenario:
        "Shopee's (Sea Limited) regional growth team is deciding whether to invest a quarter of localization budget into Poland, a market where English-language listings already get organic impressions but no dedicated Polish content exists yet. You have four decisions to make before a single page gets built.",
      brief:
        "Four passes: pick the URL structure the lesson's framework favors given the budget, confirm real demand before committing content resources, catch a literal-translation trap in the core commercial keyword, and check whether hreflang coverage clears the bar for launch.",
      mode: "diagnostic",
      conceptsCovered: [
        "Choose the right URL structure (ccTLD, subfolder, or subdomain) based on your budget and goals",
        "Validate demand first: check Search Console for organic impressions from target countries before building anything",
        "Localization means more than translation: keyword research must be done natively in each market",
        "Hreflang must be implemented on every page consistently, partial rollouts create confusion",
      ],
      skills: ["International URL Structure Strategy", "Demand Validation", "Native Keyword Research", "hreflang Rollout Auditing"],
      keyQuestion:
        "Given real budget, demand, and staging-crawl evidence, should Shopee launch in Poland this quarter, and under what structure and content plan?",
      prerequisites: [
        "Familiarity with Search Console's Performance report filtered by country",
        "Basic comfort with Google Keyword Planner or a similar keyword-volume tool",
      ],
      terminology: [
        {
          term: "ccTLD",
          definition: "a country-code top-level domain (e.g. shopee.pl) that sends the strongest geographic signal to search engines but starts with zero domain authority and typically needs its own local SEO team.",
        },
        {
          term: "Latent Demand",
          definition: "search interest that already exists for a market before any localized content is built, evidenced by organic impressions on existing (often English-language) pages from that country in Search Console.",
        },
      ],
      steps: [
        {
          stepId: "step-1-url-structure-choice",
          concept: "Choose the right URL structure (ccTLD, subfolder, or subdomain) based on your budget and goals",
          lessonAnchor: "the-three-url-structure-options",
          theoryRecap:
            "The lesson's table: ccTLD sends the strongest geo signal but starts from zero authority and needs its own team; subfolder inherits domain authority and is the sweet spot for most growing companies; subdomain is increasingly treated as a separate site by Google and has mostly fallen out of favor.",
          question:
            "One quarter of budget, no dedicated Polish legal or sales team yet. Which of the three structures does the lesson's framework favor for the Poland launch, and which does it rule out immediately?",
          toolName: "Google Sheets",
          where: "A structured comparison table applying the lesson's own decision criteria to this specific budget and team constraint.",
          procedure: [
            "List all three options (ccTLD, subfolder, subdomain) with the lesson's stated trade-off for each",
            "Apply the 'one quarter of budget, no dedicated local team' filter to each option",
            "Rule out subdomain immediately per the lesson's own guidance that Google increasingly treats it as a separate site",
            "Choose between ccTLD and subfolder based on which one doesn't require standing up a new team this quarter",
          ],
          outputSample:
            "URL structure decision table\n" +
            "  ccTLD (shopee.pl)      Strongest geo signal, but starts at zero authority, needs its own SEO strategy and local team -> not viable this quarter\n" +
            "  Subfolder (shopee.com/pl/)  Inherits existing domain authority, managed centrally, no new team required -> fits this quarter's budget\n" +
            "  Subdomain (pl.shopee.com)   Google increasingly treats as a separate site, splits authority without the ccTLD's geo benefit -> ruled out\n\n" +
            "Decision: subfolder, shopee.com/pl/",
          healthy: "A structure choice that's explicitly justified against the actual budget and team constraint given, not picked by default.",
          unhealthy: "Defaulting to a ccTLD because 'it looks more local' without checking whether the team can actually support a zero-authority domain this quarter.",
          interpret:
            "The lesson's framework isn't 'which option is best in the abstract', it's 'which option fits what you actually have.' A subfolder is the only option here that doesn't require a resource commitment the team doesn't have yet.",
          soWhat: [
            {
              symptom: "Leadership defaults to wanting a ccTLD because competitors have one",
              action: "Show them the authority-and-team cost of a ccTLD against this quarter's actual budget before agreeing",
              effort: "30 min",
            },
            {
              symptom: "No documented reason exists for why subfolder was chosen over the alternatives",
              action: "Write the three-row comparison table into the launch brief so the decision is defensible later",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-validate-demand",
          concept: "Validate demand first: check Google Search Console for organic impressions from target countries before building anything",
          lessonAnchor: "the-international-seo-workflow",
          theoryRecap:
            "Step 1 of the lesson's workflow: check Search Console for organic impressions from target countries on existing English pages first. 5,000+ monthly impressions from a country with zero localized content is proof of latent demand worth investing in.",
          question:
            "A Search Console country-impressions export (illustrative, unmeasured) shows Poland at 6,400 monthly impressions with zero Polish content, versus Portugal at 900 monthly impressions with zero Portuguese content. Which market does the lesson's demand-validation step say to prioritize this quarter?",
          toolName: "Google Search Console",
          where: "Performance report, filtered by Country, compared against Pages carrying zero /pl/ or /pt/ content.",
          procedure: [
            "Open Search Console Performance, filter by Country",
            "Compare monthly impressions for candidate markets against existing localized content (should be zero for a true demand-validation test)",
            "Apply the lesson's 5,000+ impressions threshold as the 'worth investing in' signal",
            "Prioritize the market clearing that threshold over the one that doesn't",
          ],
          outputSample:
            "Search Console, Performance by Country (illustrative, unmeasured)\n" +
            "  Poland    6,400 monthly impressions   0 Polish-language pages\n" +
            "  Portugal    900 monthly impressions   0 Portuguese-language pages\n\n" +
            "Poland clears the lesson's 5,000+ impressions latent-demand threshold; Portugal does not.",
          healthy: "Poland gets this quarter's localization budget; Portugal gets logged as a market to re-check once Poland's impressions data updates.",
          unhealthy: "Splitting the budget evenly across both markets because 'we should expand into Europe broadly', without checking which one already shows demand.",
          interpret:
            "6,400 impressions with zero localized content means people are already searching and finding an English page that isn't built for them. That's a stronger signal than any competitor analysis or market-size report for where this quarter's content budget goes first.",
          soWhat: [
            {
              symptom: "Two markets are both 'on the roadmap' with no clear sequencing",
              action: "Sequence Poland first based on the impressions data; revisit Portugal once it clears a similar threshold",
              effort: "30 min",
            },
            {
              symptom: "The demand-validation step gets skipped in favor of 'gut feel' about which markets matter",
              action: "Make a Search Console country-impressions pull the mandatory first step of every future market-expansion brief",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-native-keyword-research",
          concept: "Localization means more than translation: keyword research must be done natively in each market",
          lessonAnchor: "localization-vs-translation",
          theoryRecap:
            "The lesson's Mexico-vs-Spain worked example: a literal translation can rank for zero real searches because native speakers use a different phrase entirely. The fix is native keyword research per market, not machine translation of the English term.",
          question:
            "For the Poland launch's core commercial page, a literal translation of 'free shipping' is 'darmowa wysyłka.' Native keyword research turns up 'wysyłka gratis' as the more heavily searched variant. Given the illustrative volumes below, what does this tell you about trusting translation alone?",
          toolName: "Google Keyword Planner",
          where: "Filtered to Poland, Polish language.",
          procedure: [
            "Pull search volume for the literal translation of the core commercial phrase",
            "Pull search volume for the native-research alternative phrasing",
            "Compare the two directly, not just check that the literal translation 'ranks for something'",
            "Choose the higher-volume, natively-researched phrase as the page's primary target",
          ],
          outputSample:
            "Google Keyword Planner, Poland, Polish (illustrative)\n" +
            "  darmowa wysyłka   (literal translation of 'free shipping')     720 searches/mo\n" +
            "  wysyłka gratis    (native-research alternative)              1,900 searches/mo\n\n" +
            "The native-research phrase carries 2.6x the search volume of the literal translation.",
          healthy: "The page targets 'wysyłka gratis' as the primary phrase, with 'darmowa wysyłka' included as a secondary variant, both native-sourced.",
          unhealthy: "Shipping the page with 'darmowa wysyłka' alone because it's the direct translation everyone assumed was correct, without checking real search volume.",
          interpret:
            "A literal translation isn't wrong, Polish speakers do use 'darmowa wysyłka', it's just not the dominant phrase. Native keyword research is what catches a 2.6x volume gap that translation alone can never surface, exactly the trap the lesson's Mexico-vs-Spain example warns about.",
          soWhat: [
            {
              symptom: "The Poland page brief currently only lists the literally-translated phrase",
              action: "Add 'wysyłka gratis' as the primary target phrase before the page gets written",
              effort: "30 min",
            },
            {
              symptom: "No standing process exists for native keyword validation before a new-market page gets briefed",
              action: "Require a native-speaker or native-tool keyword check as a mandatory step before any new-locale content brief",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-4-hreflang-rollout-check",
          concept: "Hreflang must be implemented on every page consistently, partial rollouts create confusion",
          lessonAnchor: "how-hreflang-tags-work",
          theoryRecap:
            "The lesson's rule: hreflang only works when it's consistent across the entire site. A partial rollout can make things worse than no hreflang at all by sending conflicting signals about which pages target which audience.",
          question:
            "A staging crawl shows hreflang present on 40 of 340 planned Poland-launch pages. Does this satisfy the lesson's 'implement on all pages' rule, and what's the go/no-go call for launch day?",
          toolName: "Screaming Frog SEO Spider",
          where: "Bulk Export > hreflang, run against the staging site before launch.",
          procedure: [
            "Crawl the staging site and export the hreflang coverage report",
            "Compare pages with hreflang tags against the total planned page count for launch",
            "Apply the lesson's 'consistent across your entire site' standard, not a partial-credit standard",
            "Make a launch/no-launch recommendation based on that comparison",
          ],
          outputSample:
            "Staging crawl, hreflang coverage (Screaming Frog SEO Spider)\n" +
            "  Total planned Poland-launch pages: 340\n" +
            "  Pages with hreflang tags: 40 (11.8%)\n" +
            "  Pages without hreflang tags: 300 (88.2%)\n\n" +
            "Coverage does not meet the lesson's site-wide consistency standard.",
          healthy: "Launch is held until hreflang coverage reaches all 340 pages, or the launch scope is cut to just the 40 pages that are actually ready.",
          unhealthy: "Launching all 340 pages on schedule with only 40 tagged, assuming 'some hreflang is better than none.'",
          interpret:
            "11.8% coverage isn't a rollout in progress, it's the exact partial-rollout pattern the lesson warns sends conflicting signals. The safer call is either delay the full 340-page launch or narrow the launch to the 40 pages that are actually ready, not ship the gap and fix it after.",
          soWhat: [
            {
              symptom: "Launch is scheduled for all 340 pages but only 40 have hreflang tags",
              action: "Recommend either delaying full launch or narrowing scope to the 40 ready pages, in writing, before the go/no-go call",
              effort: "30 min",
            },
            {
              symptom: "The remaining 300 pages have no clear timeline for hreflang coverage",
              action: "Get a dated commitment from dev on when the remaining 300 pages will carry tags before agreeing to any partial launch",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Source of the country-impressions demand-validation data",
            why: "Free, and the only tool that shows real organic impressions by country for pages that already exist.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Keyword Planner",
            role: "Compare literal-translation volume against native-research phrase volume",
            why: "Free inside Google Ads without spending on ads, and supports country/language filtering needed for this comparison.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Audit staging-site hreflang coverage before launch",
            why: "Free for up to 500 URLs, sufficient for a 340-page launch scope.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "AnswerThePublic",
            role: "Surface additional native question-and-comparison phrasing beyond Keyword Planner's list",
            why: "Free, no sign-in, useful for catching phrasing patterns Keyword Planner alone might miss.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Deeper native-language keyword clustering across a full launch page set instead of one core phrase",
            why: "The free path is complete for validating one core commercial term; SEMrush earns its cost once clustering keywords across dozens of pages.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "This project is fully completable on the free path for a single-market launch decision like this one.",
      },
      deliverable:
        "A go/no-go launch memo: the chosen URL structure with justification, the higher-priority market by demand evidence, the correct native commercial keyword, and whether hreflang coverage clears the bar for launch.",
      sampleOutput:
        "Applying the same four-step lens to a different Southeast Asian superapp's European test market (illustrative, Grab): the demand-validation step showed France clearing the impressions threshold while Belgium didn't, and a native keyword check found 'livraison gratuite' outperforming a literal translation by nearly 2x, the same shape of finding as Shopee's Poland case, different market.",
      successCriteria: [
        "Chooses subfolder over ccTLD or subdomain with an explicit budget/team justification, not a default preference",
        "Prioritizes Poland over Portugal using the 5,000+ impressions threshold, not a subjective market-size argument",
        "Selects 'wysyłka gratis' over the literal translation based on the volume comparison, not assumption",
        "Recommends holding or narrowing launch given 11.8% hreflang coverage, rather than shipping all 340 pages on schedule",
      ],
      portfolioReady: true,
      stretch: "Pull your own site's real Search Console country-impressions data and apply the same demand-validation threshold to a market you're considering.",
      whatToLookFor: [
        { label: "Fit to constraint, not abstract best option", detail: "Does the recommended URL structure actually fit this quarter's budget and team, not just theoretically outperform the alternatives?" },
        { label: "Real demand evidence", detail: "Is the market prioritized because of a measured impressions threshold, or a subjective sense of which market 'feels' bigger?" },
        { label: "Native vs. literal", detail: "Was the core commercial keyword validated against native search volume, or just translated?" },
        { label: "Coverage percentage vs. plan", detail: "Does the staging hreflang coverage match the full launch scope, or only a fraction of it?" },
      ],
      decision: {
        prompt:
          "Poland shows 6,400 monthly impressions with zero Polish content (clearing the 5,000+ threshold); Portugal shows 900. The team has budget for one market this quarter. Which market should get it, and why?",
        options: [
          { id: "a", label: "Portugal, because launching in a smaller market first reduces risk", correct: false },
          { id: "b", label: "Poland, because it clears the lesson's 5,000+ impressions latent-demand threshold while Portugal does not", correct: true },
          { id: "c", label: "Split the budget evenly across both markets to hedge the bet", correct: false },
          { id: "d", label: "Neither, since impressions on English-language pages don't indicate real demand for localized content", correct: false },
        ],
        explanation:
          "The lesson's demand-validation step treats organic impressions from a target country on existing (unlocalized) pages as the clearest signal of latent demand, and sets 5,000+ as the threshold worth investing in. Poland's 6,400 clears it; Portugal's 900 does not. Splitting the budget ignores the evidence in favor of hedging, and dismissing impressions data entirely throws away the strongest signal available before any content exists.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Launch Poland this quarter under a subfolder structure (shopee.com/pl/), which fits the current budget and team without requiring a new local SEO team a ccTLD would demand. Target 'wysyłka gratis' as the primary commercial phrase over the literally-translated 'darmowa wysyłka', which carries 2.6x less search volume. Hold full launch until hreflang coverage moves well beyond the current 11.8% (40 of 340 pages), either by delaying to complete the rollout or narrowing initial scope to the 40 ready pages.",
      },
      commonMistakes: [
        { mistake: "Choosing a URL structure based on what looks most 'official' rather than what fits the budget", explanation: "a ccTLD sends the strongest geo signal in theory, but starting from zero authority without a dedicated team is a cost this quarter's budget doesn't support." },
        { mistake: "Prioritizing a market by gut feel about its size or importance", explanation: "the lesson's impressions threshold is a measurable, evidence-based test; skipping it in favor of intuition risks investing in the market with weaker latent demand." },
        { mistake: "Trusting a literal translation for the core commercial keyword", explanation: "as the 2.6x volume gap between 'darmowa wysyłka' and 'wysyłka gratis' shows, translation and native usage frequently diverge on exactly the highest-value commercial phrase." },
        { mistake: "Treating 11.8% hreflang coverage as 'in progress, close enough'", explanation: "the lesson is explicit that a partial rollout is worse than none at all; launching with most pages untagged risks sending conflicting signals rather than a clean absence of signals." },
      ],
      keyTakeaway:
        "A market-expansion decision isn't one choice, it's four: the right URL structure for your actual resources, the market with proven demand, the keyword natives actually search for, and hreflang coverage that's genuinely ready. Skipping any one of the four turns a well-evidenced launch plan into a costly guess on that dimension.",
    },
  ],

  "seo-site-migrations": [
    {
      id: "seo-site-migrations-redirect-and-noindex-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "30 Minutes to Go/No-Go: A Redirect Map and Staging Leftovers",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real redirect map excerpt and the live production head/robots.txt, spot the many-to-one redirects, the redirect chain, and the leftover staging signals before a migration go-live call.",
      companyId: "doordash",
      scenario:
        "DoorDash's restaurant city-guide content hub is moving from a legacy subdomain to the main domain next week. The freelance dev handed over a 'finished' redirect map and says staging is 'basically done.' You have 30 minutes before the go/no-go call.",
      brief:
        "Two specimens: a slice of the 1,240-row redirect map, then the production page's head tags and robots.txt. Find what breaks the migration before launch, not after.",
      mode: "teardown",
      conceptsCovered: [
        "Missing or many-to-one redirects",
        "Build a 1:1 redirect map for every indexed URL",
        "Leftover staging noindex tags, the single most common cause of a post-launch traffic cliff",
      ],
      skills: ["Redirect Map Auditing", "Migration Go/No-Go Review", "noindex/robots.txt Verification", "301 Chain Detection"],
      keyQuestion:
        "Does this redirect map and production configuration actually protect the migrated section's rankings, or does it silently kill them at launch?",
      prerequisites: [
        "Understanding of what a 301 redirect does and why a 1:1 mapping matters",
        "Basic ability to read a robots.txt file and an HTML <head> block",
      ],
      terminology: [
        {
          term: "Many-to-One Redirect",
          definition: "redirecting several distinct old URLs to a single new destination (often the homepage), which tells Google those specific pages no longer exist and forfeits the ranking value each one built individually.",
        },
        {
          term: "Redirect Chain",
          definition: "a URL that redirects to another URL that itself redirects again, instead of pointing directly at the final destination; each extra hop adds crawl latency and dilutes link equity.",
        },
      ],
      teardownItems: [
        {
          itemId: "doordash-redirect-map-defects",
          specimenSource: "synthetic-realistic",
          prompt: "A 10-row excerpt of the 1,240-row redirect map for the city-guide migration is below.",
          specimen:
            "=== REDIRECT MAP (excerpt, 7 of 1,240 rows) ===\n" +
            "guide.doordash.com/austin-tx-restaurants        -> doordash.com/city-guides/austin-tx\n" +
            "guide.doordash.com/austin-tx-vegan-restaurants   -> doordash.com/\n" +
            "guide.doordash.com/austin-tx-pizza-delivery      -> doordash.com/\n" +
            "guide.doordash.com/austin-tx-late-night-food     -> doordash.com/\n" +
            "guide.doordash.com/denver-co-restaurants-old     -> guide.doordash.com/denver-co-restaurants\n" +
            "guide.doordash.com/denver-co-restaurants         -> doordash.com/city-guides/denver-co-eats\n" +
            "guide.doordash.com/seattle-wa-restaurants        -> doordash.com/city-guides/seattle-wa",
          answerKey: [
            {
              defect: "Three distinct Austin sub-guides (vegan, pizza, late-night) all redirect to the homepage instead of relevant new pages",
              severity: "critical",
              whyItMatters:
                "This is the lesson's 'missing or many-to-one redirects' mistake: redirecting unique pages to a single homepage tells Google those specific pages no longer exist, killing the accumulated authority of all three instead of transferring it anywhere useful.",
              lessonRef: "Common Mistakes That Cause Ranking Loss: missing or many-to-one redirects",
              owner: "developer",
            },
            {
              defect: "The Denver row is a two-hop chain (old-old URL to old URL to new URL) instead of a direct 1:1 redirect",
              severity: "moderate",
              whyItMatters:
                "Redirect chains dilute link equity and slow down crawling. The checklist calls for a 1:1 redirect map, every old URL pointing directly at its final destination, not through an intermediate hop that adds crawl latency for no benefit.",
              lessonRef: "The Three-Phase Migration Checklist: build a 1:1 redirect map for every indexed URL",
              owner: "developer",
            },
          ],
          distractors: ["The Seattle row keeps the same slug pattern as its old URL.", "The redirect map has 1,240 total rows."],
          partialCredit: true,
        },
        {
          itemId: "doordash-leftover-staging-signals",
          specimenSource: "synthetic-realistic",
          prompt: "The production head tags and robots.txt for the newly-migrated page are below, along with the dev's deploy note.",
          specimen:
            "=== PRODUCTION HTML <head> (doordash.com/city-guides/austin-tx) ===\n" +
            "<title>Austin, TX Restaurant Guide | DoorDash</title>\n" +
            "<meta name=\"robots\" content=\"noindex, follow\" />\n" +
            "<link rel=\"canonical\" href=\"https://doordash.com/city-guides/austin-tx\" />\n\n" +
            "=== PRODUCTION robots.txt ===\n" +
            "User-agent: *\n" +
            "Disallow: /city-guides/\n" +
            "Sitemap: https://doordash.com/sitemap.xml\n\n" +
            "=== DEPLOY NOTE (from the dev) ===\n" +
            "\"Copied the staging server config over for speed, we can clean it up after launch if anything looks off.\"",
          answerKey: [
            {
              defect: "The live production page carries a 'noindex' meta tag left over from staging",
              severity: "critical",
              whyItMatters:
                "The lesson calls this the single most common cause of a post-launch traffic cliff: a noindex tag correct for staging (to prevent premature indexing) but never removed for production silently deindexes every page carrying it, with no error message anywhere.",
              lessonRef: "Why Migrations Are the Riskiest SEO Project You'll Run: leftover staging noindex tags",
              owner: "developer",
            },
            {
              defect: "robots.txt disallows the entire /city-guides/ directory, exactly the section that's migrating",
              severity: "critical",
              whyItMatters:
                "Combined with the leftover noindex tag, this is a second, independent way the whole new section becomes invisible to Google. Even after removing the noindex tag, this Disallow rule alone would still keep the section from being crawled at all.",
              lessonRef: "Why Migrations Are the Riskiest SEO Project You'll Run: leftover robots.txt Disallow rule",
              owner: "developer",
            },
          ],
          distractors: ["The sitemap URL uses HTTPS.", "The canonical tag matches the page's own URL."],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl staging and production to catch the noindex tag and Disallow rule before launch",
            why: "Free for up to 500 URLs, fast enough to run this check inside a 30-minute go/no-go window.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Use URL Inspection to confirm exactly how Google is currently rendering the production page",
            why: "Free, and the most direct way to confirm a noindex tag or blocked status before it costs a week of lost indexing.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "This teardown is fully completable free and fast enough to run before a same-day launch call.",
      },
      deliverable:
        "A go/no-go checklist for the launch call: which redirect-map rows must be fixed before launch, and which two leftover staging signals currently block the entire section from being indexed.",
      sampleOutput:
        "Running the same two-part check on a different marketplace's migration (illustrative, Yelp): the redirect map was clean, but a leftover 'X-Robots-Tag: noindex' HTTP header (set at the CDN level, invisible in the page source) was still firing on every new URL, caught only because the URL Inspection tool showed the rendered header directly.",
      successCriteria: [
        "Flags all three Austin sub-guide redirects to homepage as the many-to-one defect, not just one of them",
        "Identifies the Denver redirect chain as a distinct, lower-severity issue from the many-to-one defect",
        "Catches the leftover noindex meta tag as the single highest-priority blocker for the go/no-go call",
        "Catches the /city-guides/ robots.txt Disallow as a second, independent blocker, not the same issue as the noindex tag",
      ],
      portfolioReady: true,
      stretch: "If you have access to a real staging environment ahead of a launch, run this exact head-tag and robots.txt check against it before go-live.",
      whatToLookFor: [
        { label: "Redirect specificity", detail: "Does each old URL redirect to a genuinely relevant new page, or do multiple distinct pages funnel into one generic destination?" },
        { label: "Redirect hop count", detail: "Does an old URL point directly to its final destination, or through an intermediate URL that itself redirects?" },
        { label: "Staging leftovers in production", detail: "Does the live production page still carry a noindex tag or Disallow rule that was only ever meant for staging?" },
        { label: "Independent blockers", detail: "Are there multiple, separate reasons a page might not get indexed, each needing its own fix?" },
      ],
      decision: {
        prompt:
          "The production page carries both a leftover 'noindex, follow' meta tag and a robots.txt rule disallowing the entire /city-guides/ directory. The dev says removing the noindex tag is enough to fix indexing. Is that correct?",
        options: [
          { id: "a", label: "Yes, removing the noindex tag is sufficient since that's the primary indexing signal", correct: false },
          { id: "b", label: "No, both the noindex tag and the robots.txt Disallow rule must be removed, since either one alone would keep the section from being indexed", correct: true },
          { id: "c", label: "No, only the robots.txt rule needs to be removed, the noindex tag doesn't affect indexing", correct: false },
          { id: "d", label: "It depends on which one Google checks first", correct: false },
        ],
        explanation:
          "These are two independent blockers, not one issue with two symptoms. A noindex tag tells Google not to index a page it can crawl; a robots.txt Disallow tells Google not to crawl the page at all. Removing only the noindex tag still leaves the entire /city-guides/ directory disallowed from crawling, so the section would remain invisible to Google even after that fix. Both must be removed for the migrated section to be indexed.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Do not approve launch until three fixes ship: redirect the three Austin sub-guides to their actual topical equivalents instead of the homepage, collapse the Denver two-hop chain into a direct 1:1 redirect, and remove both the leftover noindex meta tag and the /city-guides/ robots.txt Disallow rule from production. The noindex tag and the Disallow rule are independent blockers, fixing only one still leaves the entire migrated section unindexed.",
      },
      commonMistakes: [
        { mistake: "Treating the noindex tag and the robots.txt block as the same issue", explanation: "they're independent mechanisms; removing only one still leaves the other blocking the entire section from being indexed." },
        { mistake: "Flagging only one of the three homepage-redirected Austin pages", explanation: "all three distinct sub-guides lose their individual accumulated ranking value the same way; missing two of three understates the defect's real scope." },
        { mistake: "Treating a redirect chain the same severity as a many-to-one redirect", explanation: "a chain dilutes equity and adds latency but still eventually reaches the right destination; a many-to-one redirect tells Google the original page is simply gone." },
        { mistake: "Trusting a dev's verbal assurance ('staging is basically done') over checking the actual production head tags and robots.txt", explanation: "the specific defects here (noindex tag, Disallow rule) are invisible from a quick visual check of the live page and only surface by inspecting the actual source and robots.txt file." },
      ],
      keyTakeaway:
        "A migration go/no-go review has to check two different layers: is every old URL redirected to a genuinely relevant destination, and does production actually differ from staging where it needs to. Both the redirect map and the leftover-config check caught real, independent, launch-blocking defects here, missing either one would have shipped a migration that quietly deindexes the whole section.",
    },
    {
      id: "seo-site-migrations-post-launch-gsc-diagnostic",
      tier: "core",
      archetype: "audit",
      title: "Week Six: Normal Volatility or Hangover in Progress?",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real 5,280-page Search Console indexing export six weeks after a migration, determine which of the four not-indexed reasons is normal settling and which needs escalation today, using the lesson's own volatility-vs-hangover thresholds.",
      companyId: "stoneco",
      scenario:
        "StoneCo just moved its merchant-education hub, Stone Educa, from a standalone subdomain to a subfolder of stone.com.br ahead of a broader Latin America merchant push. Six weeks post-launch, someone asks in standup whether the dip they're seeing is normal migration volatility or a hangover in progress. You have the Search Console indexing export to answer that.",
      brief:
        "Four passes over one export: check for leftover missing redirects, check whether the robots.txt block is intentional or a staging leftover, judge the largest bucket against the lesson's volatility timeline, and check for a canonical fight between the old subdomain and the new subfolder.",
      mode: "diagnostic",
      conceptsCovered: [
        "Build a 1:1 redirect map for every indexed URL; never redirect multiple pages to one destination",
        "Leftover staging noindex tags or a robots.txt Disallow rule that was fine on staging but never got removed for production",
        "A 10-30% dip that stabilizes within 2-6 weeks is normal volatility; still falling after 4 weeks is a hangover in progress",
        "Use Google Search Console's Change of Address tool and add the new property alongside the old one, don't delete the old property",
      ],
      skills: ["Post-Migration Health Triage", "Search Console Trend Analysis", "Canonical Conflict Diagnosis", "Migration Volatility Thresholds"],
      keyQuestion:
        "Six weeks after this migration, which of four not-indexed problem buckets is normal settling and which needs escalation today?",
      prerequisites: [
        "Familiarity with reading a Search Console indexing export broken down by reason",
        "Understanding of the difference between a redirect problem, a blocking problem, and a canonical/duplication problem",
      ],
      terminology: [
        {
          term: "Change of Address Tool",
          definition: "a Search Console feature used when a site moves domains or subdomains, that tells Google explicitly which property is the new home; the old property should stay registered, not be deleted, since Google still needs to see it.",
        },
      ],
      steps: [
        {
          stepId: "step-1-missing-redirects-404s",
          concept: "Build a 1:1 redirect map for every indexed URL; never redirect multiple pages to one destination",
          lessonAnchor: "common-mistakes-that-cause-ranking-loss",
          theoryRecap:
            "The lesson names missing or many-to-one redirects as the single biggest cause of ranking loss. Six weeks after a migration that supposedly shipped a complete redirect map, any nonzero 404 count is a signal the map had gaps.",
          question:
            "94 pages (6.8% of the 1,389 not-indexed pages) return 'Not found (404)' six weeks post-launch. For a migration with a supposedly complete redirect map, what does this nonzero count mean, and what's the fastest way to find exactly which 94 URLs these are?",
          toolName: "Google Search Console",
          where: "Indexing > Pages > Not indexed > Not found (404), export the URL list.",
          procedure: [
            "Open the Not found (404) report and export the list of 94 affected URLs",
            "Cross-reference each URL against the original redirect map to confirm whether it was ever included",
            "Separate URLs that were missed entirely from URLs where a redirect was added but broken",
            "Prioritize fixing missed URLs first, since those never had a redirect attempt at all",
          ],
          outputSample:
            "gsc-indexing-export.csv, Not found (404) bucket\n" +
            "  Total pages: 94 (6.8% of 1,389 not-indexed)\n\n" +
            "Cross-reference against original redirect map (sample of 10)\n" +
            "  7 of 10: never appeared in the redirect map at all (missed entirely)\n" +
            "  3 of 10: appeared in the map, but the destination URL itself now also 404s (broken redirect target)",
          healthy: "Zero 404s from the migrated section, or a documented, shrinking list actively being closed out.",
          unhealthy: "94 pages sitting in the 404 bucket for six weeks with nobody having checked whether they were ever in the redirect map.",
          interpret:
            "A migration with a truly complete 1:1 redirect map should show close to zero 404s from the migrated URLs. Finding that 70% of a sample were never mapped at all means the original redirect map had real gaps, not just a few edge cases missed.",
          soWhat: [
            {
              symptom: "94 pages have sat in the 404 bucket since launch with no owner assigned",
              action: "Export the full 94-URL list today and assign it to dev as a same-week fix, prioritizing the never-mapped subset",
              effort: "half day",
            },
            {
              symptom: "Nobody checked the original redirect map for completeness before launch",
              action: "Add a pre-launch step: crawl the old site fully and confirm every indexed URL appears in the redirect map before go-live, for the next migration",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-2-leftover-block-check",
          concept: "Leftover staging noindex tags or a robots.txt Disallow rule that was fine on staging but never got removed for production",
          lessonAnchor: "why-migrations-are-the-riskiest-seo-project-youll-run",
          theoryRecap:
            "The lesson's most common fatal mistake: a noindex tag or Disallow rule that was correct on staging but never got removed for production, deindexing pages silently with no error message anywhere.",
          question:
            "412 pages (29.7% of not-indexed) show 'Blocked by robots.txt.' Six weeks after launch, is this an intentional, scoped rule or a leftover staging blanket-block, and what's the one-file check that answers it definitively?",
          toolName: "Google Search Console",
          where: "The live robots.txt file, checked directly against the 412 flagged URLs.",
          procedure: [
            "Open the live production robots.txt file",
            "Export the 412 blocked URLs from the indexing report",
            "Check whether the Disallow rule is scoped to a specific, intentional path or written broadly enough to catch the whole migrated section",
            "If broad, confirm with the dev team whether it was meant to be temporary (a staging leftover) or permanent",
          ],
          outputSample:
            "Live robots.txt (excerpt)\n" +
            "  User-agent: *\n" +
            "  Disallow: /educa/\n\n" +
            "412 blocked URLs, sample check\n" +
            "  10 of 10 sampled URLs fall under /educa/, the entire migrated merchant-education section\n\n" +
            "Dev team confirms: this rule was added on staging to prevent premature indexing before launch, and was never removed.",
          healthy: "A robots.txt rule scoped narrowly enough that it doesn't block the entire migrated section, confirmed as intentional if it exists at all.",
          unhealthy: "A blanket Disallow rule blocking the entire new section, sitting unnoticed for six weeks because nobody checked whether it was meant to be temporary.",
          interpret:
            "412 pages, nearly 30% of the not-indexed total, all falling under one Disallow rule that the dev team confirms was a staging leftover is exactly the lesson's most common fatal mistake. This is the single highest-priority fix in the whole export.",
          soWhat: [
            {
              symptom: "412 pages are blocked by a rule confirmed to be a staging leftover",
              action: "Remove the Disallow: /educa/ rule from production robots.txt today, then request re-crawling via Search Console",
              effort: "5 min",
            },
            {
              symptom: "No pre-launch checklist step currently catches staging-only rules before they ship to production",
              action: "Add 'diff staging robots.txt against production robots.txt' as a mandatory pre-launch checklist item",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-crawled-not-indexed-volatility",
          concept: "A 10-30% dip that stabilizes within 2-6 weeks is normal volatility; still falling after 4 weeks is a hangover in progress",
          lessonAnchor: "the-three-phase-migration-checklist",
          theoryRecap:
            "The lesson's explicit threshold: normal post-launch volatility is a 10-30% dip settling within 2-6 weeks. Anything still falling after 4 weeks needs intervention now, not next quarter.",
          question:
            "690 pages (49.7% of not-indexed, the single largest bucket) are 'Crawled, currently not indexed.' At week 6 post-launch, does a bucket this large still fall inside 'normal settling', or does it cross into hangover territory needing escalation today?",
          toolName: "Google Search Console",
          where: "Compare this week's Crawled-not-indexed count against the count logged at week 2 and week 4 post-launch.",
          procedure: [
            "Pull the week-2, week-4, and week-6 Crawled-not-indexed counts from saved exports (or Search Console's historical trend)",
            "Compare the week-6 count against the lesson's 2-6 week normal-settling window",
            "If the count is still the largest bucket and hasn't meaningfully shrunk by week 6, treat it as a hangover in progress",
            "Escalate rather than wait for 'next quarter's review'",
          ],
          outputSample:
            "Crawled, currently not indexed, trend since launch\n" +
            "  Week 2:  740 pages\n" +
            "  Week 4:  705 pages\n" +
            "  Week 6:  690 pages (still 49.7% of all not-indexed pages)\n\n" +
            "6.8% decline over 4 weeks is far short of the lesson's normal-settling pace; the bucket is still the largest one in the export at week 6.",
          healthy: "A bucket that shrinks substantially week over week, on track to normal levels by week 6-8.",
          unhealthy: "A bucket that barely moves (6.8% over a month) while still being described in standup as 'normal migration volatility.'",
          interpret:
            "A 6.8% decline over four weeks, on a bucket that's still the single largest problem in the export, doesn't match the lesson's definition of normal settling. This is the escalation the standup conversation needed, not another 'let's keep watching it' cycle.",
          soWhat: [
            {
              symptom: "The team has been calling this 'normal migration volatility' for six weeks without checking it against the lesson's actual thresholds",
              action: "Present the week 2/4/6 trend in today's standup as evidence this has crossed into hangover territory",
              effort: "30 min",
            },
            {
              symptom: "No investigation has started into why these specific 690 pages aren't indexing",
              action: "Sample-check 10-15 of the 690 URLs for content thinness, duplicate content, or missing internal links, the likely root causes",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-4-canonical-duplication-domain-check",
          concept: "Use Google Search Console's Change of Address tool and add the new property alongside the old one, don't delete the old property",
          lessonAnchor: "the-three-phase-migration-checklist",
          theoryRecap:
            "The lesson's launch-day guidance: if the domain (or in this case, subdomain) changed, use Search Console's Change of Address tool and keep the old property registered, since Google still needs to see the redirects from it.",
          question:
            "182 pages (13.1%) are 'Duplicate, no user-selected canonical.' For a subdomain-to-subfolder move, what does a bucket this size suggest about the old subdomain's current status, and what's the two-part fix?",
          toolName: "Google Search Console",
          where: "Search Console property list (old subdomain and new domain), plus a direct check of whether the old subdomain still resolves.",
          procedure: [
            "Check whether the old educa.stone.com.br subdomain still resolves live, or whether it's fully redirecting",
            "Confirm both the old subdomain and new domain are registered as separate Search Console properties",
            "If the old subdomain still serves live content instead of redirecting, treat that as the root cause of the canonical confusion",
            "Fix the redirect gap, then re-verify the Change of Address setup covers the subdomain properly",
          ],
          outputSample:
            "Old subdomain check\n" +
            "  educa.stone.com.br/pix-para-comerciantes/  still returns 200 (live), not a 301 to stone.com.br/educa/pix-para-comerciantes/\n\n" +
            "Search Console properties\n" +
            "  stone.com.br: registered\n" +
            "  educa.stone.com.br: registered, Change of Address not yet configured",
          healthy: "The old subdomain fully 301-redirects to its new subfolder equivalent, and both properties are registered with Change of Address configured.",
          unhealthy: "The old subdomain still serves live, duplicate content in parallel with the new subfolder, leaving Google to guess which one is canonical.",
          interpret:
            "182 duplicate-canonical pages with the old subdomain still resolving live is a direct match: Google is seeing two live copies of the same content and hasn't been told which one wins. This is fixable in one deploy, redirect the old subdomain, then it's a matter of waiting for re-crawl.",
          soWhat: [
            {
              symptom: "The old subdomain still serves live content six weeks after the 'migration' supposedly completed",
              action: "Deploy 301 redirects from every old subdomain URL to its new subfolder equivalent this week",
              effort: "half day",
            },
            {
              symptom: "Change of Address was never configured for the subdomain-to-subfolder move",
              action: "Configure Change of Address in Search Console once the redirects are live, and keep the old subdomain property registered rather than deleting it",
              effort: "30 min",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Source of the indexing export, the URL lists per reason, and the Change of Address tool",
            why: "Free, and the only tool that shows Google's own per-URL indexing classification and historical trend.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Confirm live robots.txt scope and check whether the old subdomain is actually redirecting",
            why: "Free for up to 500 URLs, sufficient to verify both the robots.txt and redirect findings directly against the live site.",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Confirm backlinks pointing at the old subdomain are also being credited to the new subfolder post-migration",
            why: "The free path is complete for diagnosing the indexing export; Ahrefs is a useful add-on to confirm link-equity transfer, not required to complete this diagnostic.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote: "This diagnostic is fully completable on the free path.",
      },
      datasetUrl: "/project-data/gsc-indexing-export.csv",
      deliverable:
        "A week-6 migration-health memo ranking all four problem buckets by urgency: the confirmed staging robots.txt leftover (highest priority), the stalled 690-page bucket now crossing into hangover territory, the 94 unmapped 404s, and the old-subdomain redirect gap behind the 182 duplicate-canonical pages.",
      sampleOutput:
        "Applying the same four-step triage to a different fintech's own subdomain consolidation (illustrative, TAC Security moving its research hub under the main domain): the 'Blocked by robots.txt' bucket turned out to be intentional and correctly scoped, closing that line of inquiry in ten minutes, while the Crawled-not-indexed bucket was the real problem, traced to a batch of pages that lost their original publish dates during the CMS move.",
      successCriteria: [
        "Correctly identifies the leftover robots.txt Disallow rule (412 pages, confirmed via dev team) as the single highest-priority fix",
        "Judges the 690-page 'Crawled, currently not indexed' bucket as having crossed into hangover territory using the week 2/4/6 trend, not just its raw size",
        "Distinguishes never-mapped 404s from broken-redirect-target 404s within the 94-page bucket",
        "Connects the 182 duplicate-canonical pages to the old subdomain still resolving live, not a vague 'canonical issue'",
      ],
      portfolioReady: true,
      stretch: "Pull your own site's real GSC Pages export mid-migration and run this same reason-by-reason triage against your own not-indexed buckets.",
      whatToLookFor: [
        { label: "Trend, not snapshot", detail: "Is a bucket shrinking meaningfully week over week, or has it plateaued while still being called 'normal volatility'?" },
        { label: "Confirmed vs. assumed intent", detail: "Has a robots.txt rule actually been confirmed as intentional or leftover, or is that just being assumed?" },
        { label: "Mapped vs. unmapped 404s", detail: "Within a 404 bucket, does the URL trace back to being missed from the redirect map entirely, or to a redirect that points at another broken URL?" },
        { label: "Old-domain live status", detail: "Does the old subdomain still serve live content in parallel with the new location, or does it fully redirect?" },
      ],
      decision: {
        prompt:
          "At week 6, the 'Crawled, currently not indexed' bucket has declined only 6.8% since week 2 (740 to 690 pages) and is still the largest bucket in the export. The team has been calling this normal migration volatility. Is that assessment correct?",
        options: [
          { id: "a", label: "Yes, any dip after a migration is expected and doesn't need escalation until at least 3 months have passed", correct: false },
          { id: "b", label: "No, the lesson's threshold is that a dip still falling or not meaningfully improving after 4 weeks is a hangover in progress needing escalation now", correct: true },
          { id: "c", label: "Yes, since the bucket did shrink slightly (from 740 to 690), any decrease at all counts as normal settling", correct: false },
          { id: "d", label: "No, but the fix is to wait one more month before doing anything, since migrations typically take 8 weeks to settle", correct: false },
        ],
        explanation:
          "The lesson sets an explicit threshold: a 10-30% dip settling within 2-6 weeks is normal, but a bucket still falling (or barely moving) after 4 weeks is a hangover in progress that needs intervention now. A 6.8% decline over four weeks on a bucket still 49.7% of the whole not-indexed total misses that threshold by a wide margin. Any nonzero shrinkage isn't the same as being on track, and waiting passively for another month contradicts the lesson's guidance to escalate once the 4-week mark is crossed without real progress.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Escalate today: the 690-page 'Crawled, currently not indexed' bucket has crossed from normal volatility into a hangover in progress by the lesson's own 4-week threshold, and needs a content-quality sample check this week. In parallel, remove the confirmed staging-leftover robots.txt Disallow rule blocking 412 pages (the single highest-priority fix, since dev has already confirmed it was never meant to reach production), close the 94-page 404 gap starting with the 70% that were never in the original redirect map, and deploy the missing 301 redirects from the old subdomain, which is still resolving live and causing the 182-page canonical conflict.",
      },
      commonMistakes: [
        { mistake: "Calling any decline in a bucket's size 'on track', regardless of pace", explanation: "the lesson's threshold is about the rate and timing of the decline, not whether the number went down at all; 6.8% over four weeks on the largest bucket is a hangover, not progress." },
        { mistake: "Assuming a robots.txt Disallow rule is intentional without confirming with the team that wrote it", explanation: "a blanket rule blocking an entire migrated section is exactly the pattern the lesson calls the most common fatal migration mistake, and needs explicit confirmation, not an assumption either way." },
        { mistake: "Treating all 94 of the 404 pages as the same problem", explanation: "URLs never included in the redirect map at all need a different fix (add them) than URLs whose redirect target itself now 404s (fix the destination)." },
        { mistake: "Deleting the old subdomain's Search Console property once the new one is set up", explanation: "the lesson is explicit that the old property should stay registered since Google still needs to see the redirects coming from it." },
      ],
      keyTakeaway:
        "A post-migration health check across four buckets each needs a different verification: is a decline actually on pace against a real threshold, is a block confirmed intentional or just assumed, does a 404 trace back to a mapping gap or a broken target, and is the old domain actually gone or still live. Treating any one bucket's raw count as self-explanatory, without this deeper check, misses the difference between normal settling and an active problem.",
    },
  ],

  "aeo": [
    {
      id: "aeo-airbnb-citation-visibility-check",
      tier: "mini",
      archetype: "audit",
      title: "The Citation Check: Does Airbnb's Own Content Show Up When AI Answers Travel Questions?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Test whether a real page's content is being pulled into AI-generated answers, and diagnose why or why not using the Answer Unit framework.",
      companyId: "airbnb",
      scenario:
        "You're a content strategist on Airbnb's SEO team. Leadership wants to know whether Airbnb's Host guides are being cited in ChatGPT and Google AI Overviews answers, or whether competitors are winning those citations instead.",
      brief:
        "Query 5 real travel-hosting questions across 2 AI answer engines, log whether Airbnb is cited, and diagnose the content-structure gap on the queries where it isn't.",
      mode: "diagnostic",
      conceptsCovered: [
        "Filtering for answer-engine citations vs. organic rank",
        "The Answer Unit framework applied to owned content",
      ],
      skills: ["AI search auditing", "Content structure diagnosis", "Competitive citation analysis"],
      keyQuestion: "When a page ranks well in Google but is never named as a source in an AI-generated answer, what in the content is causing that gap?",
      prerequisites: [
        "Access to ChatGPT (free tier is enough) and a browser for Google Search",
        "Familiarity with basic on-page structure: headings, paragraphs",
      ],
      terminology: [
        { term: "Answer engine", definition: "a tool like ChatGPT or Google AI Overviews that generates a direct written answer to a question instead of just listing links." },
        { term: "Citation", definition: "when an answer engine names a specific source (e.g. Airbnb.com) as where its answer came from, distinct from ranking in organic search results." },
      ],
      steps: [
        {
          stepId: "step-1-citation-presence-audit",
          concept: "Filtering for answer-engine citations vs. organic rank",
          lessonAnchor: "how-answer-engines-actually-work",
          theoryRecap:
            "The lesson's 'How Answer Engines Actually Work' section explains that a citation requires two things at once: ranking well enough to be a candidate, and containing a passage that fits the answer format with no rewriting needed.",
          question:
            "Given 5 host-related queries run through ChatGPT and Google, Airbnb's own Help Center ranks in Google's top 10 for all 5, but is only cited by name in 2 of the 5 AI answers. What does that gap tell you?",
          toolName: "ChatGPT",
          where: "Open ChatGPT (free tier) and Google Search side by side.",
          procedure: [
            "Pick 5 real questions a new host would ask, e.g. 'how much does Airbnb take in host fees', 'what is Airbnb superhost status', 'how do I set a cancellation policy on Airbnb'",
            "Run each question in ChatGPT (with browsing/search enabled) and note whether Airbnb.com is named as a source",
            "Run the same 5 queries in Google and note whether Airbnb ranks top 10 and whether an AI Overview appears",
            "Build a table: query | Google rank | AI Overview cites Airbnb? | ChatGPT cites Airbnb?",
            "For every 'ranks but not cited' row, open the Airbnb page and check: does the first paragraph under the relevant heading answer the question in under 60 words?",
          ],
          outputSample:
            "Query                                      | Google rank | AI Overview cites Airbnb | ChatGPT cites Airbnb\nHost fees percentage                       | #3          | No (cites NerdWallet)    | No\nSuperhost status requirements               | #1          | Yes                      | Yes\nHow to set cancellation policy               | #2          | No (cites a blog)        | No\nHost payout schedule                        | #4          | No                        | No\nHost insurance coverage (AirCover)           | #1          | Yes                      | Yes",
          healthy:
            "Airbnb ranks top 3 AND is cited by the AI answer on the same query, meaning the passage under the heading is snippet-shaped.",
          unhealthy:
            "Airbnb ranks top 3 but a third-party blog gets cited instead, meaning the content ranks on authority but the actual paragraph isn't extractable.",
          interpret:
            "A rank-without-citation gap almost always means the answer is buried in paragraph 3 or 4, not paragraph 1, under the matching heading.",
          soWhat: [
            {
              symptom: "Airbnb ranks #1-4 but loses the citation to a smaller competitor or blog",
              action:
                "Rewrite the first paragraph under the matching H2 into a 40-60 word direct answer, move supporting detail below it",
              effort: "30 min",
            },
            {
              symptom: "None of the 5 pages have a heading that matches the literal question phrasing",
              action: "Add question-phrased H2/H3s using the exact wording from People Also Ask or AlsoAsked.com",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Run the 5 test queries and check whether Airbnb is named as a source",
            why: "Free tier is enough to test real citation behavior",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the query-by-query comparison table",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 5-row citation-gap table with a specific rewrite recommendation for each 'ranked but not cited' row.",
      sampleOutput:
        "Peloton citation-gap log (excerpt)\n\nQuery: how does the Peloton Bike Plus differ from the original Bike\nGoogle rank: #2\nAI Overview: cites Wirecutter, not Peloton\nDiagnosis: Peloton's own comparison page opens with 3 paragraphs of brand history before stating the rotating-screen difference\nFix: move the 1-sentence comparison to the first sentence under the H2",
      successCriteria: [
        "Logs at least 5 real queries across Google + 1 AI engine",
        "Correctly identifies which ranked pages are NOT cited",
        "Produces a specific first-paragraph rewrite recommendation for at least 2 gap rows",
      ],
      portfolioReady: true,
      stretch: "Repeat the same 5 queries in Perplexity and compare citation overlap with ChatGPT.",
      whatToLookFor: [
        { label: "Rank vs. citation gap", detail: "Does the page rank top 3-4 in Google but get skipped by the AI answer entirely?" },
        { label: "Answer placement", detail: "Does the direct answer to the query sit in the first paragraph under the matching heading, or later?" },
        { label: "Heading phrasing", detail: "Does an H2/H3 use the literal question wording a user would type or say?" },
        { label: "Who wins the citation instead", detail: "Is a smaller competitor or blog cited on the same query, and does its passage read as more extractable?" },
      ],
      decision: {
        prompt: "Airbnb ranks #3 in Google for a host-fees query, but the AI Overview cites NerdWallet instead. The Airbnb page's first paragraph under the matching H2 is 90 words of general host-onboarding context before the fee percentage appears. What's the highest-leverage fix?",
        options: [
          { id: "a", label: "Rewrite the first paragraph under that H2 into a 40-60 word direct answer, then move the onboarding context below it", correct: true },
          { id: "b", label: "Add more internal links pointing to the page to boost its domain authority", correct: false },
          { id: "c", label: "Change the page's meta description to match the query more closely", correct: false },
          { id: "d", label: "Leave the page as-is, since it already ranks in the top 3", correct: false },
        ],
        explanation:
          "Airbnb already ranks well enough to be a citation candidate, so the gap is extractability, not authority or metadata, the fee percentage is buried 90 words deep instead of leading the paragraph. Meta descriptions and internal links don't change what the answer engine extracts from the body copy, and 'already ranks top 3' is exactly the rank-without-citation trap the audit is designed to catch.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Prioritize a first-paragraph rewrite on every 'ranks but not cited' row before touching anything else. This is a content-structure fix, not a technical or authority fix, so it can ship in the same sprint without dev involvement: move the direct 40-60 word answer to the first sentence under the matching heading, and only rewrite headings that don't already match a real question phrasing.",
      },
      commonMistakes: [
        { mistake: "Treating any AI Overview appearance as proof the page is doing fine", explanation: "an AI Overview can appear on a query while citing a competitor entirely; check who is named, not just whether the feature exists." },
        { mistake: "Assuming a citation loss always means a content problem", explanation: "sometimes the gap is a genuine authority gap rather than a structural one, check whether the winning source is a much larger or more topically authoritative site before rewriting." },
        { mistake: "Testing only one AI engine", explanation: "ChatGPT and Google AI Overviews can cite different sources for the same query, so a single-engine test understates the real gap." },
        { mistake: "Rewriting the whole page instead of just the first paragraph under the matching heading", explanation: "the fix is surgical: answer engines extract from the passage directly under the matching heading, not the page as a whole." },
      ],
      keyTakeaway:
        "Ranking well in Google and being cited by an AI answer engine are two different outcomes measuring two different things: rank measures authority and relevance, citation measures whether a passage is extractable without rewriting. A page can win one and lose the other, and the fix for a citation loss is almost always a first-paragraph rewrite, not a ranking push.",
    },
    {
      id: "aeo-peloton-answer-unit-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Answer Unit Teardown: Grading 5 Real AI-Cited Passages",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given 5 specimen passages that won or lost an AI citation, correctly diagnose which structural defect caused each outcome using the Answer Unit framework and the freshness and schema signals from the lesson.",
      companyId: "peloton",
      scenario:
        "You're auditing Peloton's blog and support content ahead of a content refresh sprint. Your manager wants a defect list, not just a rewrite, so the writing team understands exactly what wins and loses AI citations.",
      brief:
        "Score 5 specimen passages against the Answer Unit framework, flag the specific defect in each losing passage, and don't get fooled by the 2 distractor prompts per item that look like defects but aren't.",
      mode: "teardown",
      conceptsCovered: [
        "The Answer Unit framework (question heading, 40-60 word answer, supporting detail)",
        "Freshness as a citation signal",
        "Schema markup as a citation signal",
        "Multi-channel authority vs. content structure",
      ],
      skills: ["AI search content auditing", "Answer Unit diagnosis", "Distractor rejection"],
      keyQuestion: "For each losing passage, which specific defect (buried answer, stale data, missing schema, or an authority gap that no rewrite fixes) caused the citation loss?",
      prerequisites: [
        "Completion of, or familiarity with, the Answer Unit framework: a question heading, a 40-60 word direct answer, then supporting detail",
        "Understanding that freshness and schema are separate signals from content structure",
      ],
      terminology: [
        { term: "Answer Unit", definition: "the framework of a question-phrased heading immediately followed by a 40-60 word direct answer, with supporting detail placed after it, not before." },
        { term: "Schema markup", definition: "structured, machine-readable code (like FAQPage schema) added to a page that explicitly labels content, such as a Q&A pair, for crawlers." },
      ],
      teardownItems: [
        {
          itemId: "item-1-buried-answer",
          specimen:
            "H2: 'Everything to Know About the Peloton Bike Plus Rotating Screen'\n\nPeloton has always been at the forefront of connected fitness innovation, bringing together world-class instructors and cutting-edge hardware. Since the original Bike launched in 2014, the company has continued to refine the at-home cycling experience for millions of members worldwide. The Bike Plus builds on this legacy with several thoughtful upgrades designed around member feedback. One of the most requested upgrades was screen rotation, which lets members pivot the 23.8-inch HD touchscreen 180 degrees to follow along with floor-based strength and stretching classes without leaving the bike.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This passage ranks #4 on Google for 'peloton bike plus rotating screen' but is never cited in AI Overviews or ChatGPT answers for that query. Identify the structural defect.",
          answerKey: [
            {
              defect:
                "The direct answer (screen rotates 180 degrees for floor workouts) doesn't appear until the fifth sentence, after 80+ words of brand history.",
              severity: "critical",
              whyItMatters:
                "Engines extract the first matching passage under a heading; by the time the actual answer appears, the passage has already exceeded snippet length.",
              lessonRef: "the-answer-unit-framework",
              owner: "you",
            },
          ],
          distractors: [
            "The heading isn't phrased as a literal question",
            "The passage doesn't mention the price of the Bike Plus",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-stale-price",
          specimen:
            "H2: 'How Much Does a Peloton Membership Cost?'\n\nA Peloton All-Access Membership costs $44 per month (data from our 2021 pricing page) and includes unlimited classes across Bike, Tread, and Row equipment for the whole household.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This page used to win the featured snippet for 'peloton membership cost' but stopped appearing in AI Overviews eighteen months ago. What's the defect?",
          answerKey: [
            {
              defect:
                "The passage cites a 2021 price with no visible update; Peloton's actual pricing has changed since, and engines deprioritize passages that read as stale even when the heading still matches.",
              severity: "critical",
              whyItMatters:
                "83% of AI citations for commercial queries come from pages updated within the past 12 months; a visibly dated price is a strong staleness signal.",
              lessonRef: "4-prioritize-freshness",
              owner: "you",
            },
          ],
          distractors: [
            "The dollar amount is not bolded",
            "The heading uses 'How Much Does' instead of 'What Is the Cost Of'",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-authority-not-structure",
          specimen:
            "H2: 'What Is the Peloton Output Bike Metric?'\n\nOutput is Peloton's blended score for how hard you worked in a class, combining your cadence and resistance to estimate power in watts and total calories burned. It updates in real time on your Bike or Bike Plus screen so you can pace effort against your own past rides.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This passage is structurally a clean 40-60 word answer unit under a matching question heading, no fluff, no staleness. Yet a smaller fitness blog with the identical structure wins the citation instead. Is this a structural defect?",
          answerKey: [
            {
              defect:
                "No structural defect exists here; the loss is a domain-authority gap, not an Answer Unit failure. The Answer Unit framework fixes extractability, not authority.",
              severity: "moderate",
              whyItMatters:
                "Teams that blame every AI citation loss on content structure waste time rewriting passages that were already citation-ready, when the real fix is backlinks or brand mentions elsewhere.",
              lessonRef: "5-build-multi-channel-authority",
              owner: "either",
            },
          ],
          distractors: [
            "The answer paragraph should have been under 40 words instead of over",
            "The heading should have used 'Peloton Output Score' instead of 'Peloton Output Bike Metric'",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-missing-schema",
          specimen:
            "H2: 'What Cadence Should I Ride at for a Peloton Beginner Class?'\n\nBeginners should aim for a cadence of 60 to 80 RPM at low-to-moderate resistance, which builds cardio endurance without overloading the knees. This range is called out directly by instructors in every Peloton beginner-labeled class.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is a clean answer unit on an FAQ page with 12 other Q&A pairs formatted identically, but none of them carry FAQPage schema. Google's featured snippet shows the passage; ChatGPT never cites it. What's the fix?",
          answerKey: [
            {
              defect:
                "The page has no FAQPage schema. The plain-text structure is good enough for a Google featured snippet, but some AI crawlers rely on the machine-readable schema signal to confirm the Q&A grouping before citing it.",
              severity: "moderate",
              whyItMatters:
                "Schema is the fallback signal when extraction is ambiguous, per the lesson's 42%-more-citations schema stat.",
              lessonRef: "3-use-schema-markup",
              owner: "developer",
            },
          ],
          distractors: ["The cadence range should be in bold text", "The class name should be a hyperlink"],
          partialCredit: true,
        },
        {
          itemId: "item-5-answer-after-specs",
          specimen:
            "H2: 'Is the Peloton Row Worth It for Small Apartments?'\n\n- Weighs 145 lbs, foldable footprint\n- Costs $3,195 plus membership\n- Includes a 23.8-inch swivel screen\n- Offers over 20 workout types\n- Ships fully assembled in most metros\n\nFor apartment dwellers with limited space, the Peloton Row folds vertically to roughly 20 inches wide when stored, making it one of the more compact rowers in its price class.",
          specimenSource: "synthetic-realistic",
          prompt:
            "The actual yes/no answer to 'is it worth it for small apartments' is buried after 5 unrelated spec bullets. What's the fix, beyond just deleting the bullets?",
          answerKey: [
            {
              defect:
                "The direct answer (yes, because of the compact 20-inch folded footprint) is placed after a specs list that doesn't answer the question asked. Specs belong in supporting detail, not ahead of the direct answer.",
              severity: "moderate",
              whyItMatters:
                "The Answer Unit framework requires the direct answer to come first; supporting detail, even useful detail, must come after it, not before.",
              lessonRef: "the-answer-unit-framework",
              owner: "you",
            },
          ],
          distractors: [
            "The bullets should be turned into a numbered list instead of a bulleted list",
            "The screen size spec is inaccurate",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log the defect table across all 5 specimens",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Cross-check whether the specimen's real-world equivalent page is currently cited",
            why: "Free tier confirms the diagnosis against live behavior",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log for all 5 specimens: defect, severity, and a one-line fix recommendation, with item 3 correctly flagged as a non-structural authority gap.",
      sampleOutput:
        "Yelp answer-unit defect log (excerpt)\n\nItem | Verdict | Defect | Fix\n1 | Buried answer | Direct answer arrives after 80 words of brand history | Move the 1-sentence definition to the first sentence\n2 | Stale content | 2021 price with no update | Refresh price + add visible last-updated date\n3 | No defect (authority gap) | N/A | Build backlinks/mentions, not a rewrite\n4 | Missing schema | No FAQPage schema | Add FAQPage schema wrapping the Q&A\n5 | Buried answer | Specs list precedes the yes/no verdict | Lead with verdict, move specs below",
      successCriteria: [
        "Correctly diagnoses at least 4 of 5 specimen defects",
        "Correctly identifies item 3 as a non-structural (authority) issue rather than misdiagnosing it as a content defect",
        "Correctly rejects at least 8 of the 10 distractor prompts across all 5 items",
      ],
      portfolioReady: true,
      stretch: "Pull 5 real passages from your own company's blog and run the same teardown.",
      whatToLookFor: [
        { label: "Answer position", detail: "Does the direct answer appear in the first sentence under the heading, or after unrelated context?" },
        { label: "Freshness signals", detail: "Does the passage cite a date, price, or figure that looks outdated with no visible update?" },
        { label: "Schema presence", detail: "Is the Q&A wrapped in machine-readable schema (e.g. FAQPage), or is it plain text only?" },
        { label: "Structural vs. authority cause", detail: "Is the passage already a clean Answer Unit, meaning the loss might be a domain-authority gap instead?" },
        { label: "Distractor plausibility", detail: "Does a suggested defect actually break extraction, or is it a cosmetic detail (bolding, list style) that doesn't matter?" },
      ],
      decision: {
        prompt: "Item 3 (the Output metric passage) is a clean 40-60 word Answer Unit under a matching question heading, with no staleness and no missing schema, yet a smaller blog with an identically structured passage wins the citation. What should the writing team do?",
        options: [
          { id: "a", label: "Rewrite the passage into a shorter answer, since something in the structure must be wrong", correct: false },
          { id: "b", label: "Accept it as a non-structural authority gap and pursue backlinks or brand mentions instead of a rewrite", correct: true },
          { id: "c", label: "Add FAQPage schema, since that's the only signal not yet tested", correct: false },
          { id: "d", label: "Change the heading to a different question phrasing and re-test", correct: false },
        ],
        explanation:
          "The passage already satisfies every structural requirement the Answer Unit framework checks for, so rewriting it, adding schema, or rephrasing the heading treats a non-existent structural problem as if it were the cause. When a competitor with the same structure wins instead, the lesson is explicit that the remaining variable is domain or topical authority, which content rewrites don't fix.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Fix items 1, 2, 4, and 5 in the next content sprint: move buried answers to the first sentence, refresh the stale price with a visible update date, and add FAQPage schema to the cadence FAQ page. Do not assign a rewrite to item 3, flag it for the authority/PR team instead, since the Answer Unit framework has nothing left to fix there.",
      },
      commonMistakes: [
        { mistake: "Assuming every citation loss has a content-structure cause", explanation: "item 3 proves a passage can be structurally perfect and still lose on authority; misdiagnosing it wastes a rewrite that won't change the outcome." },
        { mistake: "Flagging cosmetic details (bolding, list format, hyperlinks) as the defect", explanation: "these don't affect what an answer engine extracts; the distractors in each item exist specifically to test this." },
        { mistake: "Missing a stale-data signal because the content otherwise reads as high-quality", explanation: "a visibly outdated price or figure is deprioritized even when the surrounding writing and structure are strong." },
        { mistake: "Treating a Google featured snippet win as proof AI engines will cite the same passage", explanation: "item 4 shows a passage can win a Google snippet on structure alone while still losing an AI citation to a missing schema signal." },
      ],
      keyTakeaway:
        "Not every citation loss has the same cause: a buried answer, stale data, and missing schema are all fixable with a rewrite or a dev ticket, but a structurally clean passage losing to a smaller competitor is usually an authority gap that no amount of rewriting solves. Diagnosing which one you're looking at, before recommending a fix, is the actual skill.",
    },
  ],
  "voice-search-seo": [
    {
      id: "voice-search-yelp-near-me-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "The 'Near Me' Test: Auditing Content for Voice Answer Eligibility",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Test 5 real 'near me' style voice queries against a business's Google Business Profile and on-page content to diagnose whether it's structured to win the spoken answer.",
      companyId: "yelp",
      scenario:
        "You're a local SEO consultant helping a Yelp-listed restaurant chain understand why competitors get picked when customers ask their phone 'best sushi near me'. You need a diagnostic, not a redesign, this week.",
      brief:
        "Run 5 local voice-style queries, check whether the business's Google Business Profile and site content answer them in the 25-35 word plain-prose shape voice assistants extract, and flag the gap.",
      mode: "diagnostic",
      conceptsCovered: ["Local intent as the dominant voice search pattern", "The 25-35 word plain-prose answer shape"],
      skills: ["Local SEO auditing", "Voice search diagnostics", "Google Business Profile review"],
      keyQuestion: "Is the business's Google Business Profile and on-page content structured to win the spoken answer for common local voice queries?",
      prerequisites: [
        "A Google Business Profile to audit (existing or a public example)",
        "Access to Google Search on a mobile device or Google Assistant",
      ],
      terminology: [
        { term: "Google Business Profile (GBP)", definition: "the free Google-hosted listing showing a business's hours, location, and attributes, a primary data source voice assistants pull from for local answers." },
        { term: "Plain-prose answer shape", definition: "a 25-35 word answer written as a normal spoken sentence, with no bullets or bold text, matching how a voice assistant reads answers aloud." },
      ],
      steps: [
        {
          stepId: "step-1-near-me-answer-shape-check",
          concept: "The 25-35 word plain-prose answer shape",
          lessonAnchor: "how-voice-search-actually-works",
          theoryRecap:
            "The lesson's 'How Voice Search Actually Works' section explains that assistants read one short passage aloud, usually 25-35 words in plain prose with no bullets or bold text, pulled from a featured snippet or a page's own content.",
          question:
            "You ask Google Assistant 'what sushi restaurant is open near me right now' for a Yelp-listed client and a competitor's answer gets read aloud instead. The client's About page has 3 paragraphs about their restaurant's history and philosophy but never states hours or location in plain sentences. What's the fix, in order?",
          toolName: "AnswerThePublic",
          where:
            "AnswerThePublic.com (free tier) to source real local question phrasings, then Google Search on mobile to test which business gets the voice answer, plus the client's Google Business Profile.",
          procedure: [
            "Use AnswerThePublic to pull 5 realistic 'near me' or local voice queries for the business category (hours, cuisine, price range, parking, delivery)",
            "Speak or type each query into Google Search on mobile and note which business gets the voice/snippet answer",
            "Open the Google Business Profile and check hours, category, and attributes are complete and accurate",
            "Open the site's About or Contact page and check for a plain-prose sentence stating name, cuisine, city, and hours (not just a hidden schema block)",
            "Log a gap table: query | who gets the answer today | is GBP complete? | does on-page prose answer it in plain sentences?",
          ],
          outputSample:
            "Query                                    | Answer goes to      | GBP complete? | Plain-prose answer on-site?\nBest sushi near me open now              | Competitor          | Yes           | No (history only)\nSushi restaurant with parking nearby     | Competitor           | No (missing attribute) | No\nDoes [client] deliver sushi              | Neither (no answer)  | Yes           | No\nWhat time does [client] close tonight    | [Client]             | Yes           | Yes (hours in footer text)\nCheapest sushi near downtown             | Competitor           | Yes           | No",
          healthy:
            "The one query the client wins ('what time does it close') is also the one query with a plain-prose hours sentence on the page, that's not a coincidence.",
          unhealthy:
            "4 of 5 queries go to a competitor, and in every losing row the client's GBP or on-page prose is incomplete or missing the specific fact being asked.",
          interpret:
            "Voice answers go to whichever source states the fact in a complete sentence; GBP data and on-page prose need to say the same thing in plain language, not just live in a hidden schema block.",
          soWhat: [
            {
              symptom: "A GBP attribute (parking, delivery) is missing or unchecked",
              action: "Complete every relevant GBP attribute this week, it's free and takes under 10 minutes",
              effort: "5 min",
            },
            {
              symptom: "On-page copy has no plain-sentence answer to a commonly asked fact",
              action:
                "Add a one-sentence answer for each fact (hours, delivery, parking) directly in page prose, not just in schema",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "AnswerThePublic",
            role: "Source real local, 'near me' style question phrasings",
            why: "Free tier covers enough queries for a 5-query diagnostic",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the query-by-query gap table",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 5-row local-voice gap table with a specific GBP or on-page fix for each losing row.",
      sampleOutput:
        "Delhivery pickup-point voice check (excerpt)\n\nQuery: nearest Delhivery drop-off point\nAnswer goes to: a directory site, not Delhivery\nGBP complete: No (service-area attribute missing)\nFix: complete the GBP service-area attribute and add a plain-prose sentence naming the nearest hub per city page",
      successCriteria: [
        "Tests at least 5 real local voice-style queries",
        "Correctly links each losing query to a specific GBP or on-page gap",
        "Produces at least 2 concrete, same-week fixes",
      ],
      portfolioReady: true,
      stretch: "Repeat the test a week after applying the fixes and compare which queries flip.",
      whatToLookFor: [
        { label: "GBP completeness", detail: "Are hours, category, and relevant attributes (parking, delivery) fully filled in?" },
        { label: "Plain-prose presence", detail: "Does the page state the fact being asked (hours, delivery, parking) in a full sentence, not just a schema block?" },
        { label: "Answer-to-win correlation", detail: "Does the one query the business wins line up with the one fact stated in plain prose on the page?" },
        { label: "Competitor pattern", detail: "Is the competitor winning because their GBP or on-page prose is more complete, not because of unrelated factors?" },
      ],
      decision: {
        prompt: "The client wins the voice answer only for 'what time does it close tonight', the one query where hours appear as plain-prose text in the footer. Every other query goes to a competitor. What's the highest-priority next step?",
        options: [
          { id: "a", label: "Add plain-prose sentences answering the other tested facts (parking, delivery, price range) directly in page copy", correct: true },
          { id: "b", label: "Rewrite the About page's brand history to be shorter", correct: false },
          { id: "c", label: "Switch the business's primary GBP category to a broader one", correct: false },
          { id: "d", label: "Wait and re-test in a month since GBP data can take time to update", correct: false },
        ],
        explanation:
          "The one correlation the audit surfaces is that the only query won had a matching plain-prose sentence on the page, so the fix that directly targets the pattern is adding the same kind of plain-sentence answers for the other tested facts. Shortening unrelated brand copy, changing the GBP category, or waiting passively don't address the actual gap the data points to.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Complete the missing GBP attribute (parking) this week, it takes minutes and is free, then add one plain-prose sentence per fact (delivery, price range) to the site's About or Contact page. Both fixes are low-effort and directly address the pattern the diagnostic surfaced, that the client only wins when a fact exists as plain prose on the page.",
      },
      commonMistakes: [
        { mistake: "Assuming a complete GBP alone is enough to win the voice answer", explanation: "one losing row shows a complete GBP with no on-page prose match still loses; both signals need to independently confirm the same fact." },
        { mistake: "Fixing on-page prose but ignoring an incomplete GBP attribute", explanation: "a missing attribute like parking can be the sole reason a query is lost even when everything else is in order." },
        { mistake: "Treating unrelated brand-history content as the problem", explanation: "the defect isn't that the About page has history, it's that it never also states the specific fact being asked in plain sentences." },
        { mistake: "Testing only queries the business is likely to win", explanation: "a representative 5-query set needs to include facts (parking, delivery) the business hasn't optimized for yet, not just easy wins." },
      ],
      keyTakeaway:
        "Winning a local voice answer requires the same fact to exist in two places: a complete Google Business Profile attribute and a plain-prose sentence in on-page copy. A gap in either one is enough to lose the query to a competitor, even a smaller one, that has both.",
    },
    {
      id: "voice-search-delhivery-order-status-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Spoken Answer Teardown: Grading 5 'Where's My Order' Voice Transcripts",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given 5 transcript-style specimens of how an assistant would read a delivery-status answer aloud, diagnose which structural or technical defect kept each one from winning voice or AI answer placement.",
      companyId: "delhivery",
      scenario:
        "You're on Delhivery's content team ahead of a push into voice-assistant order-tracking answers ('Alexa, where's my Delhivery package'). Support content exists but nobody has audited it against the voice-answer shape.",
      brief:
        "Score 5 specimen support-page passages against the lesson's 25-35 word plain-prose answer shape, question-format heading rule, and technical fundamentals, correctly separating real defects from the 2 distractor prompts per item.",
      mode: "teardown",
      conceptsCovered: [
        "Question-format headings for voice eligibility",
        "The 25-35 word plain-prose answer shape",
        "Technical fundamentals as a voice-ranking gate",
        "Local intent resolution in voice answers",
      ],
      skills: ["Voice search content auditing", "Technical SEO gating", "Cross-index diagnosis"],
      keyQuestion: "For each specimen, is the defect in the content's structure, in the page's technical performance, or in missing schema, and which owner should fix it?",
      prerequisites: [
        "Familiarity with the 25-35 word plain-prose answer shape and question-format headings",
        "Basic understanding of page speed and schema markup as separate technical signals",
      ],
      terminology: [
        { term: "HowTo schema", definition: "structured markup that labels a page's step-by-step instructions so search and voice systems can identify and format them as a procedure." },
        { term: "Technical fundamentals gate", definition: "the baseline requirement that a page must load fast enough to be considered a voice-answer candidate at all, regardless of how well the content itself is written." },
      ],
      teardownItems: [
        {
          itemId: "item-1-keyword-heading",
          specimen:
            "H2: 'Delhivery Order Tracking Methods'\n\nYou can track a Delhivery order using the tracking ID sent via SMS and email, entering it on the Delhivery Track page, or through the Delhivery mobile app's 'My Orders' section.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This page ranks in Google's top 5 for tracking-related searches but has never appeared in a voice assistant's spoken answer. What's the defect?",
          answerKey: [
            {
              defect:
                "The heading is a keyword phrase ('Order Tracking Methods'), not a question a person would actually say to an assistant, like 'how do I track my Delhivery order'.",
              severity: "critical",
              whyItMatters:
                "Voice assistants match spoken questions to question-phrased headings first; a heading that would never be spoken aloud rarely gets selected as the matching passage.",
              lessonRef: "the-keyword-difference-typed-vs-spoken",
              owner: "you",
            },
          ],
          distractors: [
            "The answer paragraph is too short at 28 words",
            "The page lacks an image of the tracking screen",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-bulleted-answer",
          specimen:
            "H2: 'How Do I Track My Delhivery Package?'\n\nTracking your Delhivery package is simple and there are several ways to do it depending on your preference:\n- Use the tracking ID from your SMS confirmation\n- Visit delhivery.com/track\n- Open the Delhivery app\n- Contact customer support if the ID doesn't work\n- Check your email for a tracking link",
          specimenSource: "synthetic-realistic",
          prompt:
            "The heading is a perfect voice question, but this passage still never gets read aloud by Google Assistant. Why?",
          answerKey: [
            {
              defect:
                "The answer is a 5-item bulleted list instead of a 25-35 word plain-prose sentence. Assistants read prose aloud, not bullet fragments, so the passage doesn't fit the spoken answer format even though the heading is right.",
              severity: "critical",
              whyItMatters:
                "The lesson's snippet-block template requires plain prose immediately under the heading, with lists and detail moved below that first paragraph.",
              lessonRef: "how-voice-search-actually-works",
              owner: "you",
            },
          ],
          distractors: [
            "The heading should ask 'How Can I Track' instead of 'How Do I Track'",
            "The word 'simple' is not needed",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-slow-page",
          specimen:
            "H2: 'How Long Does Delhivery Delivery Take?'\n\nMost Delhivery shipments arrive within 3 to 7 business days depending on distance, with express options delivering in 24 to 48 hours in serviceable metro areas.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is a textbook 25-35 word plain-prose answer under a perfect question heading. It still isn't read aloud, and a page-speed test shows the page takes 7.8 seconds to load on mobile. Is the content the problem?",
          answerKey: [
            {
              defect:
                "No content defect exists; the passage is well-shaped, but the page fails the lesson's technical fundamentals gate (voice-ranked pages average 4.6 second load times), so it never becomes a candidate passage regardless of how well it's written.",
              severity: "critical",
              whyItMatters:
                "Content structure and technical performance are both required; a perfect answer unit on a slow page still loses to a mediocre answer on a fast one.",
              lessonRef: "technical-checklist-for-voice-seo",
              owner: "developer",
            },
          ],
          distractors: [
            "The answer should specify exact days instead of a range",
            "The heading should include the word 'Delhivery' twice",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-missing-howto-schema",
          specimen:
            "H2: 'How Do I Reschedule a Delhivery Delivery?'\n\nOpen the tracking link in your delivery SMS, tap Reschedule, choose a new date within the next 5 days, and confirm. The courier receives the update automatically.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This 27-word answer sits under a perfect question heading, loads fast, and still isn't read by Alexa's web-fallback search even though it wins the Google featured snippet. What's the likely gap?",
          answerKey: [
            {
              defect:
                "The page has no HowTo schema marking up the 4-step process. Some voice-assistant pipelines rely on machine-readable step markup to confirm and format a procedural answer for a different underlying index (Bing, which powers Alexa's web fallback) than the one that awarded the Google snippet.",
              severity: "moderate",
              whyItMatters:
                "Different assistants draw from different underlying indexes; a page can win Google's snippet and still lose Alexa's answer if it isn't marked up for the index Alexa actually queries.",
              lessonRef: "how-voice-search-actually-works",
              owner: "developer",
            },
          ],
          distractors: [
            "The steps should be numbered 1-4 in the visible text",
            "The word 'automatically' should be removed",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-5-non-local-answer",
          specimen:
            "H2: 'Where Is My Nearest Delhivery Service Center?'\n\nDelhivery operates over 24 fulfillment and service touchpoints across India's major metro clusters, forming one of the country's largest logistics networks by footprint.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This passage answers a nearby-location-style question but never wins the voice answer, even in cities where Delhivery has a real center. What's missing?",
          answerKey: [
            {
              defect:
                "The passage answers with a national footprint statistic instead of the one fact the local query actually needs: an address or a way to find the nearest center for the specific city being asked about. It never actually answers 'where'.",
              severity: "critical",
              whyItMatters:
                "'Near me' voice queries are location-specific; a passage has to resolve to a place, not a company-wide statistic, or it fails the query regardless of how well-formatted it is.",
              lessonRef: "local-voice-search-the-biggest-opportunity",
              owner: "you",
            },
          ],
          distractors: [
            "The number '24' should be spelled out as 'twenty-four'",
            "The heading should drop the word 'Nearest'",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log the defect table across all 5 specimens",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Search Console",
            role: "Confirm which of the real equivalent pages already rank for the matching queries",
            why: "Free, shows real query and impression data",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log across all 5 specimens with defect type, severity, and whether the fix is a content edit (owner: you) or a technical or schema fix (owner: developer).",
      sampleOutput:
        "Yelp voice-answer defect log (excerpt)\n\nItem | Verdict | Defect | Owner\n1 | Keyword heading | Not phrased as a spoken question | You\n2 | Bulleted answer | List instead of 25-35 word prose | You\n3 | No defect (technical gap) | Page loads in 7.8s, fails the speed gate | Developer\n4 | Missing schema | No HowTo markup for Alexa's index | Developer\n5 | Non-local answer | Footprint stat instead of a specific location | You",
      successCriteria: [
        "Correctly diagnoses at least 4 of 5 specimen defects",
        "Correctly identifies item 3 as a technical-performance gap rather than a content-structure defect",
        "Correctly separates content-owner fixes from developer-owner fixes for all 5 items",
      ],
      portfolioReady: true,
      stretch:
        "Run a real page-speed test against your own site's top voice-eligible page and compare its load time to the lesson's 4.6-second benchmark.",
      whatToLookFor: [
        { label: "Heading phrasing", detail: "Is the heading a question a person would actually speak aloud, or a keyword phrase?" },
        { label: "Answer format", detail: "Is the answer written as 25-35 words of plain prose, or as a bulleted/numbered list?" },
        { label: "Technical gate", detail: "Does the page load fast enough to be a candidate at all, independent of how the content reads?" },
        { label: "Schema markup", detail: "Is a procedural answer marked up with HowTo schema for indexes (like Bing/Alexa) that rely on it?" },
        { label: "Local resolution", detail: "Does a 'where' question actually resolve to a specific place, or answer with an unrelated company-wide statistic?" },
      ],
      decision: {
        prompt: "Item 3's passage is a textbook 25-35 word plain-prose answer under a perfect question heading, yet it's never read aloud, and the page takes 7.8 seconds to load on mobile. What should the team fix first?",
        options: [
          { id: "a", label: "Rewrite the answer to be even more concise", correct: false },
          { id: "b", label: "Fix the page's load speed, since the content itself already meets the answer-shape requirement", correct: true },
          { id: "c", label: "Change the heading to include the word 'Delhivery' more often", correct: false },
          { id: "d", label: "Add a bulleted breakdown of delivery times by region", correct: false },
        ],
        explanation:
          "The content passes every structural check the lesson defines, so the blocking issue is the page's 7.8-second load time failing the technical fundamentals gate voice-ranked pages need to clear before being considered at all. Rewriting already-correct content, adding keyword repetition, or adding bullets (which would actually break the required plain-prose shape) don't address the actual bottleneck.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Route items 1, 2, and 5 to the content team for rewrites this sprint (question-phrased headings, plain-prose answers, and location-specific responses), and route items 3 and 4 to development as a page-speed fix and a HowTo schema addition. Content and technical fixes are independent tracks and can ship in parallel.",
      },
      commonMistakes: [
        { mistake: "Assuming a well-written answer guarantees voice eligibility", explanation: "item 3 shows a page can meet every content requirement and still lose entirely to a technical gate like page speed." },
        { mistake: "Treating a Google featured-snippet win as proof every assistant will use the same passage", explanation: "item 4 shows Alexa's web fallback can query a different index than the one that awarded Google's snippet, and miss the passage without schema support." },
        { mistake: "Assigning a content fix to a technical defect or vice versa", explanation: "misrouting item 3 (a developer fix) to the content team, or item 4's schema gap to a copywriter, wastes the sprint on the wrong owner." },
        { mistake: "Answering a local 'where' question with a national statistic", explanation: "a footprint or scale statistic doesn't resolve the specific location the query needs, no matter how confident or well-written it sounds." },
      ],
      keyTakeaway:
        "A voice-answer defect can live in three different layers: content structure (heading and answer shape), technical performance (page speed), or machine-readable markup (schema for a specific index). Diagnosing which layer is broken, and routing the fix to the right owner, matters as much as spotting that something is wrong at all.",
    },
  ],

  "ai-overviews-geo": [
    {
      id: "nubank-ai-overview-citation-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Citation Check: Auditing Nubank's Odds of Being Quoted in AI Overviews",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real Google AI Overview response and your own page's opening paragraph, score whether the page could realistically earn citation using the lesson's answer-first framework, then rewrite the sentence most likely blocking it.",
      companyId: "nubank",
      scenario:
        "You're a content marketer at Nubank. A rival neobank's help-center article gets quoted in Google's AI Overview for 'what is a digital bank', while Nubank's own explainer page, which ranks on page one organically, never appears in the AI Overview at all.",
      brief:
        "Run the target query, capture the AI Overview's citations, then score Nubank's own opening paragraph against the answer-first criteria from the lesson before rewriting it.",
      mode: "diagnostic",
      conceptsCovered: ["Answer-first structure"],
      skills: ["Generative Engine Optimization (GEO)", "Comparative content scoring", "Sentence-level rewriting"],
      keyQuestion: "Why does a competitor's opening sentence get excerpted into the AI Overview instead of a page that ranks higher organically?",
      prerequisites: ["Access to Google Search in an incognito browser window", "Familiarity with basic sentence-length editing"],
      terminology: [
        { term: "AI Overview", definition: "Google's AI-generated summary shown above traditional search results, which quotes and cites specific pages rather than just linking to them." },
        { term: "Answer-first structure", definition: "writing the direct, quotable answer to a query in the opening sentence of a section, before any context or scene-setting." },
      ],
      steps: [
        {
          stepId: "step-1-answer-first-scoring",
          concept: "Answer-first structure",
          lessonAnchor: "how-geo-actually-works",
          theoryRecap:
            "The lesson's answer-first principle says every major section should open with a direct, quotable sentence under 20 words, or AI retrieval systems will lift a competitor's opening line instead.",
          question:
            "Nubank's current explainer opens with: 'When people talk about banking today, there's a lot to unpack, and the landscape has shifted dramatically in the last decade.' The cited competitor's paragraph opens with: 'A digital bank is a financial institution that operates entirely online, with no physical branches.' Which one gets excerpted by the AI Overview, and why?",
          toolName: "Google Sheets",
          where:
            "Search 'what is a digital bank' in an incognito Google window, screenshot the AI Overview and its Sources list, then paste both opening paragraphs into a 2-column Sheet for side-by-side scoring.",
          procedure: [
            "Run the target query in an incognito browser window and screenshot the AI Overview plus its cited Sources list",
            "Open the top cited competitor page and copy its first two sentences verbatim",
            "Copy Nubank's own first two sentences from the equivalent explainer page",
            "Score both openers against 3 criteria: does it answer directly, is it under 20 words, does it name the exact term being searched",
          ],
          outputSample:
            "SCORING TABLE\n                        Direct answer?  Under 20 words?  Names the term?\nCompetitor opener       Yes             Yes              Yes\nNubank opener           No              No (31 words)    No\n\nCited in AI Overview: Competitor only",
          healthy:
            "The opener states a direct definition in the first sentence, under 20 words, naming the exact term being searched.",
          unhealthy:
            "The opener spends a full sentence on scene-setting or context before ever naming or defining the term.",
          interpret:
            "AI retrieval systems extract the clearest available sentence in a passage; a scene-setting opener forces the model to skip ahead, or skip the page entirely in favor of a competitor.",
          soWhat: [
            {
              symptom: "Nubank ranks on page one organically but is never cited in the AI Overview for its core definitional query",
              action: "Rewrite the first sentence of the explainer as a direct, under-20-word definition naming the exact term, then republish",
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
            role: "Score both openers side by side against the 3 answer-first criteria",
            why: "Free, no account friction, and fast enough for a single-page audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 2-column scoring sheet comparing your opener against the cited competitor's opener, plus a rewritten first sentence.",
      sampleOutput:
        "YETI, 'what is a hard cooler' explainer, before/after:\n\nBEFORE (0/3): 'Coolers have come a long way over the years, and there's a lot to consider when picking the right one for your next trip.'\n\nAFTER (3/3): 'A hard cooler is an insulated, rigid-shell cooler built to keep ice frozen for multiple days in high heat.' (14 words)",
      successCriteria: [
        "Correctly identifies which opener would be excerpted by the AI Overview and explains why using the 3 criteria",
        "Produces a rewritten opening sentence under 20 words that directly names the term being searched",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Directness", detail: "Does the opening sentence state a definition immediately, or does it build up to one?" },
        { label: "Length", detail: "Is the opening sentence under 20 words?" },
        { label: "Term match", detail: "Does the sentence name the exact term someone searched for?" },
        { label: "Citation outcome", detail: "Which of the two openers actually appears in the AI Overview's citation?" },
      ],
      decision: {
        prompt: "Nubank's opener is 31 words and opens with 'When people talk about banking today, there's a lot to unpack.' The competitor's opener is 14 words and states a direct definition. Both pages rank on page one organically. What explains the citation gap?",
        options: [
          { id: "a", label: "The AI Overview extracts the clearest, most direct sentence available, and the competitor's opener is the only one that qualifies", correct: true },
          { id: "b", label: "Nubank's page must have lower domain authority, since organic rank alone doesn't fully explain citations", correct: false },
          { id: "c", label: "The AI Overview always prefers newer pages, and Nubank's page is likely older", correct: false },
          { id: "d", label: "Google randomly rotates which competitor gets cited each time the query is run", correct: false },
        ],
        explanation:
          "The scoring table shows both pages rank organically, so the variable isolated by the audit is opener quality, not authority, freshness, or randomness, none of which were tested or shown to differ. The lesson's answer-first principle explains this directly: AI retrieval extracts the clearest available sentence, and a scene-setting opener forces the system to look elsewhere.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Rewrite Nubank's opening sentence into a direct, under-20-word definition that names 'digital bank' explicitly, then republish and re-check the AI Overview within a few weeks. This is a one-sentence, same-day fix with no dependency on backlinks, schema, or a content overhaul.",
      },
      commonMistakes: [
        { mistake: "Assuming organic rank predicts AI Overview citation", explanation: "the audit shows both pages rank on page one, yet only one gets cited, proving rank and citation are separate outcomes." },
        { mistake: "Rewriting the whole page instead of just the opening sentence", explanation: "the defect identified is isolated to the opener; a full rewrite is unnecessary effort for what the scoring table shows is a single-sentence problem." },
        { mistake: "Keeping scene-setting context in the first sentence for 'brand voice' reasons", explanation: "even well-written context delays the direct answer past the point AI retrieval systems will excerpt from." },
        { mistake: "Not checking word count", explanation: "an opener can sound direct while still running well past 20 words, exactly what happened with the original Nubank sentence." },
      ],
      keyTakeaway:
        "Organic ranking and AI Overview citation are graded on different criteria: rank rewards overall relevance and authority, citation rewards whichever opening sentence is clearest and most quotable. A page can win one and lose the other over something as small as its first sentence.",
    },
    {
      id: "trade-desk-ai-overview-citation-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: Why a Rival's Programmatic Glossary Beat The Trade Desk's Into the AI Overview",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two competing 'What Is Programmatic Advertising?' page specimens, only one of which is cited in Google's AI Overview, identify every real GEO defect in the uncited page without flagging cosmetic non-issues.",
      companyId: "trade-desk",
      scenario:
        "You're on The Trade Desk's content team. Google's AI Overview for 'what is programmatic advertising' cites a smaller ad-tech blog's glossary page instead of The Trade Desk's own page, even though The Trade Desk's page ranks higher organically and has more backlinks.",
      brief:
        "Compare the two page specimens and the brand-mention snapshot, flag every real GEO defect, and map each one to the lesson concept it violates.",
      mode: "teardown",
      conceptsCovered: ["Answer-first structure", "Structured formatting", "Credibility signals", "Brand mentions over backlinks"],
      skills: ["GEO teardown", "Page-vs-page competitive diagnosis", "E-E-A-T signal auditing"],
      keyQuestion: "Which of the losing page's real defects, across structure, credibility signals, and off-page brand mentions, actually explain why a smaller competitor won the AI Overview citation?",
      prerequisites: [
        "Familiarity with the GEO concepts: answer-first structure, structured formatting, and credibility signals",
        "Basic understanding of what schema markup and E-E-A-T signals are",
      ],
      terminology: [
        { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness, Trustworthiness, Google's framework for judging content credibility, reflected here in named authorship and cited dates." },
        { term: "Brand mentions", definition: "unlinked references to a company's name across the web (forums, reviews, social), distinct from backlinks and shown by recent data to correlate more strongly with AI citation." },
      ],
      teardownItems: [
        {
          itemId: "programmatic-glossary-opening-defects",
          specimenSource: "synthetic-realistic",
          prompt:
            "Below are the opening sections of two 'What Is Programmatic Advertising?' pages. Only Page B is cited in Google's AI Overview for the query. Identify every GEO defect in Page A (The Trade Desk's version).",
          specimen:
            "=== PAGE A: The Trade Desk (NOT cited) ===\n" +
            "H1: Understanding the World of Programmatic\n" +
            "By: Marketing Team\n\n" +
            "Advertising has changed enormously over the past two decades. What began as a handshake business between media buyers and publishers has evolved into a complex, automated ecosystem that operates in fractions of a second. Programmatic is at the center of that shift, and understanding it requires looking at where the industry has been.\n\n" +
            "## Why It Matters\n" +
            "Marketers today can't afford to ignore automation, and the numbers back that up...\n\n" +
            "[No structured data present in page source. No dateModified visible.]\n\n" +
            "=== PAGE B: Competitor (cited in AI Overview) ===\n" +
            "H1: What Is Programmatic Advertising? (Definition + How It Works)\n" +
            "By: Jane Torres, Head of AdTech Research — Updated March 2026\n\n" +
            "Programmatic advertising is the automated buying and selling of digital ad space using software and real-time bidding, instead of manual insertion orders.\n\n" +
            "## How It Works (4 Steps)\n" +
            "1. An ad exchange auctions available impressions in real time.\n" +
            "2. A demand-side platform bids on behalf of the advertiser.\n" +
            "3. The winning bid's creative is served instantly.\n" +
            "4. Performance data flows back for the next auction.\n\n" +
            "[Page source contains: <script type=\"application/ld+json\">{\"@type\":\"Article\",\"author\":\"Jane Torres\",\"datePublished\":\"2026-03-02\"}</script>]",
          answerKey: [
            {
              defect: "Page A's H1 and opening paragraph never state a definition of 'programmatic advertising'",
              severity: "critical",
              whyItMatters:
                "AI retrieval needs a direct, quotable answer in the first 1-2 sentences; Page A spends its entire opening on industry history instead of defining the term.",
              lessonRef: "Answer-first structure: 'If your direct answer is buried in paragraph four, the AI will use paragraph one from a competitor instead.'",
              owner: "you",
            },
            {
              defect: "Page A has no named author or byline; the byline reads 'Marketing Team'",
              severity: "moderate",
              whyItMatters:
                "Named authors with credentials are one of the credibility signals AI Overviews draw on; an anonymous team byline provides zero E-E-A-T signal.",
              lessonRef: "Credibility signals: 'named authors with credentials, links to primary research, current publication dates.'",
              owner: "you",
            },
            {
              defect: "Page A has no structured data (no JSON-LD Article schema, no visible dateModified)",
              severity: "critical",
              whyItMatters: "Without schema, AI systems have no machine-readable signal for content type, authorship, or freshness.",
              lessonRef: "Credibility signals: schema markup (machine-readable labels that tell the AI what type of content a page contains).",
              owner: "developer",
            },
            {
              defect: "Page A's process explanation is written as flowing prose instead of the numbered list Page B uses",
              severity: "moderate",
              whyItMatters: "Structured formatting (numbered lists, definition blocks) is dramatically easier for AI retrieval to excerpt cleanly than prose.",
              lessonRef: "Structured formatting: 'A numbered how-to list is trivially easy [to excerpt].'",
              owner: "you",
            },
          ],
          distractors: [
            "Page A's H1 is shorter than Page B's H1 by roughly 20 characters",
            "Page B's URL slug is a few characters shorter than Page A's",
            "Page A includes 2 outbound links and Page B includes 3",
          ],
          partialCredit: true,
        },
        {
          itemId: "programmatic-glossary-brand-signals",
          specimenSource: "synthetic-realistic",
          prompt:
            "The Trade Desk's SEO team also pulled a 90-day brand-mention snapshot for both companies. Identify the GEO defect this snapshot reveals.",
          specimen:
            "THE TRADE DESK, 90-DAY SNAPSHOT\n  New backlinks: 340\n  Reddit/forum mentions of \"The Trade Desk\": 4\n  Review-site mentions: 2\n\nCOMPETITOR, 90-DAY SNAPSHOT\n  New backlinks: 85\n  Reddit/forum mentions: 61\n  Review-site mentions: 28",
          answerKey: [
            {
              defect: "The Trade Desk earned 4x more backlinks than the competitor but 15x fewer Reddit/forum mentions",
              severity: "critical",
              whyItMatters:
                "Web mentions predict AI Overview citation roughly 3x better than backlinks (Ahrefs, 2026); The Trade Desk is over-investing in the weaker signal and under-investing in the stronger one.",
              lessonRef: "Brand mentions over backlinks: 'getting your brand name mentioned in context...is now more valuable for AI visibility than collecting backlinks.'",
              owner: "you",
            },
          ],
          distractors: [
            "The competitor has fewer total backlinks than The Trade Desk",
            "The Trade Desk's homepage has a higher Domain Rating than the competitor's",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log every defect found, its severity, and its lesson mapping",
            why: "Free and sufficient for a single-page comparison and defect log",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Search Console",
            role: "Confirm Page A's current indexing status and organic position for the target query",
            why: "Free, first-party data on whether the page is even eligible to be crawled and re-evaluated",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Pull the real backlink and Domain Rating numbers behind the brand-mention snapshot",
            why: "Faster than manually compiling backlink counts, but not required to complete the teardown",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A defect log flagging every real GEO issue in Page A, each mapped to a lesson concept, plus a prioritized fix list.",
      sampleOutput:
        "Applying the same teardown to Ola Electric's 'What Is Regenerative Braking?' page: 3 critical defects found (buried definition, no schema, prose-only steps) and 1 moderate defect (no named author). Fix priority: rewrite opener (30 min) > add Article schema (dev ticket) > convert steps to a numbered list (30 min).",
      successCriteria: [
        "Flags all 5 real defects across both specimens",
        "Does not flag any of the 5 distractors as defects",
        "Correctly identifies the brand-mentions defect as the least obvious but highest-leverage fix",
      ],
      portfolioReady: true,
      stretch: "Run this same 2-specimen comparison against your own company's lowest-citation-rate glossary page and a competitor's cited equivalent.",
      whatToLookFor: [
        { label: "Opening definition", detail: "Does the H1 and opening paragraph state a direct definition, or build up to one through history/context?" },
        { label: "Authorship signal", detail: "Is there a named author with credentials, or a generic team byline?" },
        { label: "Structured data", detail: "Is there JSON-LD schema and a visible publish/update date?" },
        { label: "Formatting", detail: "Is a process explained as a numbered list, or as flowing prose?" },
        { label: "Brand mentions vs. backlinks", detail: "Which signal is actually larger, and which one does the data show correlates more strongly with citation?" },
      ],
      decision: {
        prompt: "The Trade Desk has 4x more backlinks than the competitor but 15x fewer Reddit/forum mentions. Both companies rank similarly well organically. What should the team prioritize?",
        options: [
          { id: "a", label: "Continue investing in backlinks, since The Trade Desk already leads there", correct: false },
          { id: "b", label: "Shift effort toward earning brand mentions in forums and reviews, since that signal correlates more strongly with AI citation", correct: true },
          { id: "c", label: "Ignore both signals since organic rank is already strong", correct: false },
          { id: "d", label: "Match the competitor's backlink count exactly before addressing anything else", correct: false },
        ],
        explanation:
          "The lesson-cited data shows web mentions predict AI Overview citation roughly 3x better than backlinks, so the underinvested signal, not the one already winning, is the higher-leverage fix. Organic rank being strong doesn't explain the citation gap, since the two outcomes are shown to be separate throughout this teardown.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Fix Page A's four content-level defects first (add a direct opening definition, a named author byline, Article schema with a visible date, and convert the process explanation to a numbered list), all achievable within a sprint. In parallel, start a brand-mention campaign (contributing to relevant forum threads, seeking review-site presence) since it's the single highest-leverage, most under-invested signal the data reveals.",
      },
      commonMistakes: [
        { mistake: "Flagging shorter H1s, URL slugs, or outbound-link counts as defects", explanation: "these are the specimen's built-in distractors; none of them affect AI extraction or citation." },
        { mistake: "Assuming more backlinks should mean better AI visibility", explanation: "the brand-mention snapshot shows the opposite pattern here, more backlinks did not prevent the citation loss." },
        { mistake: "Missing the schema/structured-data defect because the page 'looks fine' visually", explanation: "JSON-LD and dateModified are invisible in the rendered page but are exactly what AI systems check for machine-readable freshness and authorship." },
        { mistake: "Treating the brand-mentions defect as separate from the content-structure defects instead of prioritizing it", explanation: "it's the least visible defect in the specimens but the one the data shows matters most, deprioritizing it under-serves the actual fix." },
      ],
      keyTakeaway:
        "A losing page can have real defects at multiple levels: buried definitions, missing schema, prose instead of structured lists, and a weaker off-page signal profile. Identifying every real defect while correctly rejecting cosmetic distractors, then weighting the fix list by which signal the data shows matters most, is what separates a useful teardown from a surface-level content critique.",
    },
  ],
  "ai-mode-search-optimization": [
    {
      id: "ola-electric-ai-mode-structure-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Structure Test: Auditing an Ola Electric Comparison Page for AI Mode Citations",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real page that fails to get cited in Google AI Mode, identify the missing structural element (a comparison table) and rebuild the section using the lesson's formatting rules.",
      companyId: "ola-electric",
      scenario:
        "You're on Ola Electric's content team. AI Mode never cites the company's 'S1 Pro vs S1 Air' comparison page, even though a review site's near-identical, lower-authority comparison gets cited on the same query.",
      brief: "Diagnose why the review site's page wins the citation, then rebuild Ola Electric's comparison section to match the structure AI Mode actually pulls from.",
      mode: "diagnostic",
      conceptsCovered: ["Structured formatting"],
      skills: ["AI Mode content structuring", "Competitive format diagnosis", "Table drafting"],
      keyQuestion: "Why does a lower-authority competitor page get cited in AI Mode over a higher-authority page covering the same comparison?",
      prerequisites: ["Basic spreadsheet skills to draft a comparison table", "Access to the product's real spec data"],
      terminology: [
        { term: "AI Mode", definition: "Google's conversational search experience that generates a synthesized answer and cites specific sources, distinct from traditional ranked search results." },
        { term: "Structured formatting", definition: "presenting information as a table, numbered list, or other clearly labeled format rather than as flowing prose, making it easier for AI systems to extract verbatim." },
      ],
      steps: [
        {
          stepId: "step-1-table-vs-prose",
          concept: "Structured formatting",
          lessonAnchor: "how-to-structure-content-for-ai-mode-citations",
          theoryRecap:
            "The lesson notes AI Mode frequently pulls tables verbatim, and a clean comparison table is more citable than paragraphs describing the same differences.",
          question:
            "Ola Electric's page describes the S1 Pro and S1 Air differences in three separate paragraphs of prose. The cited review site presents the same comparison as a 5-row table. Which format does AI Mode extract, and what should Ola Electric's page do about it?",
          toolName: "Google Sheets",
          where: "View the live page's source or rendered output, then draft the replacement table in a Sheet before handing it to the CMS editor.",
          procedure: [
            "Open Ola Electric's live comparison page and confirm the spec differences are written as prose, not a table",
            "Open the cited review site's page and copy the exact rows and columns of its comparison table",
            "Draft a matching table in Google Sheets using Ola Electric's own spec data (range, top speed, price, battery, warranty)",
            "Flag the table for the CMS team to replace the three prose paragraphs",
          ],
          outputSample:
            "PROPOSED TABLE\n|              | S1 Pro       | S1 Air       |\n|--------------|--------------|--------------|\n| Range        | 195 km       | 151 km       |\n| Top speed    | 116 km/h     | 90 km/h      |\n| Battery      | 4 kWh        | 3 kWh        |\n| Price        | Rs 1.4L      | Rs 1.1L      |\n| Warranty     | 3 years      | 3 years      |",
          healthy: "The same 5 comparison points render as a table with clear row and column labels, ready to be pulled verbatim.",
          unhealthy: "The same 5 comparison points are scattered across three paragraphs, each mixing multiple specs into one sentence.",
          interpret: "AI Mode's retrieval favors formats it can lift without re-parsing sentence structure, a table is the lowest-effort extraction for the model.",
          soWhat: [
            {
              symptom: "A lower-authority review site outranks your own comparison page inside AI Mode despite worse domain authority",
              action: "Convert the prose comparison into a table with the same row/column structure the competitor uses",
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
            role: "Draft the replacement comparison table before handoff to the CMS",
            why: "Free, and the table structure translates directly into an HTML table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A drafted comparison table matching the cited competitor's row/column structure, using your own product's real spec data.",
      sampleOutput:
        "YETI, 'Tundra 45 vs Tundra 65' page: converting 4 prose paragraphs into a 6-row table (capacity, ice retention, weight, price, dimensions, warranty) restored table-format parity with the cited competitor page on the same query.",
      successCriteria: [
        "Correctly identifies the table-vs-prose gap as the citation blocker",
        "Produces a table using the page's own real spec data with clear row and column labels",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Format used", detail: "Is the comparison presented as a table, or as paragraphs of prose covering the same specs?" },
        { label: "Row/column clarity", detail: "Does the cited competitor's table have clear labels AI Mode can lift without re-parsing sentences?" },
        { label: "Authority vs. format", detail: "Does the citation gap track with domain authority, or with which page uses the more extractable format?" },
        { label: "Data completeness", detail: "Does your own page have the same underlying spec data as the competitor's table, just presented differently?" },
      ],
      decision: {
        prompt: "Ola Electric's page has higher domain authority than the cited review site, but loses the AI Mode citation on the same comparison query. What does this indicate?",
        options: [
          { id: "a", label: "AI Mode citation is unrelated to domain authority here; the format (table vs. prose) is the deciding factor for this query", correct: true },
          { id: "b", label: "The review site must have paid for placement in AI Mode", correct: false },
          { id: "c", label: "Ola Electric's page needs more backlinks to win the citation back", correct: false },
          { id: "d", label: "AI Mode citations are randomized and this result will change on its own", correct: false },
        ],
        explanation:
          "The lesson's finding is that AI Mode favors formats it can extract with minimal effort, and a table beats prose describing the same data regardless of which page has more authority; the diagnostic isolates format as the variable since both pages cover identical specs. There's no evidence of paid placement or randomness, and backlinks address a different problem (organic rank) than citation extraction.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Replace the three prose paragraphs with a table using the same row/column structure as the cited competitor (range, top speed, battery, price, warranty), using Ola Electric's own accurate spec data. This is a low-effort CMS change with no dependency on backlinks or domain authority work.",
      },
      commonMistakes: [
        { mistake: "Assuming higher domain authority should guarantee the citation", explanation: "the diagnostic specifically shows a lower-authority page winning on format alone; authority doesn't override extractability for this signal." },
        { mistake: "Rewriting the prose to be shorter instead of converting it to a table", explanation: "the defect is the format itself, not the prose length; shorter prose is still prose." },
        { mistake: "Inventing spec numbers instead of using the page's own real data", explanation: "the fix is a format change only, the underlying data should stay accurate to the actual product specs." },
        { mistake: "Copying the competitor's exact numbers instead of your own product's numbers", explanation: "match their row/column structure, not their data, using your own real specs." },
      ],
      keyTakeaway:
        "AI Mode's citation choice can hinge entirely on format, not authority: the same information presented as a table is dramatically easier to extract verbatim than the identical information spread across paragraphs. Matching a competitor's row/column structure with your own accurate data is often a faster fix than any authority-building work.",
    },
    {
      id: "yeti-ai-mode-citation-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineering Why AI Mode Cited a Buying Guide Over Yeti's Own Product Page",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given AI Mode's cited answer and Yeti's own uncited product copy, reverse-engineer which of the lesson's 4 citation signals the cited source has that Yeti's page lacks.",
      companyId: "yeti",
      scenario:
        "You're on Yeti's content team. For the query 'best cooler for keeping ice frozen a week', AI Mode cites a third-party outdoor-gear lab's buying guide instead of Yeti's own Tundra 45 product page, which ranks higher organically.",
      brief: "Work backward from what AI Mode actually quoted to identify the missing citation signal, then draft the fix.",
      mode: "diagnostic",
      conceptsCovered: ["Specific data points"],
      skills: ["Reverse-engineering AI citations", "Claim auditing", "Sourced-data rewriting"],
      keyQuestion: "What specific, sourced element does the cited third-party claim have that the brand's own vaguer claim is missing?",
      prerequisites: ["Familiarity with the difference between a marketing adjective and a quantified, sourced claim"],
      terminology: [
        { term: "Reverse-engineering (in GEO)", definition: "working backward from what an AI system actually cited to identify which content signal caused the win, rather than guessing at fixes upfront." },
        { term: "Specific data point", definition: "a quantified, sourced claim (a percentage, a named test, a year) that an AI system can quote and verify, as opposed to a vague adjective." },
      ],
      steps: [
        {
          stepId: "step-1-vague-vs-specific-claims",
          concept: "Specific data points",
          lessonAnchor: "content-signals-that-win-citations",
          theoryRecap:
            "The lesson lists 'specific data points, named sources, percentages, years' as one of the four signals AI Mode favors, over vague, unsupported claims.",
          question:
            "Yeti's product page says: 'Our coolers are built to keep ice cold for days.' The cited buying guide says: 'In an independent 90 degrees Fahrenheit ambient test, the YETI Tundra 45 kept ice frozen for 4.5 days.' Which claim does AI Mode quote, and what is missing from Yeti's own version?",
          toolName: "Perplexity",
          where: "Perplexity.ai search bar, to cross-check what specific, sourced data points already exist publicly about your own product.",
          procedure: [
            "Search Perplexity for the exact buying-guide claim and confirm the named test source it cites",
            "Compare that specific data point against Yeti's own page's vague 'keeps ice cold for days' claim",
            "Identify the missing elements: a named test source, a specific temperature, and a specific day count",
            "Draft a replacement sentence for Yeti's page that includes all three missing elements",
          ],
          outputSample:
            "GAP LOG\nMissing element         Yeti's page        Cited buying guide\nNamed test source       Absent             \"independent 90°F ambient test\"\nSpecific temperature    Absent             \"90 degrees Fahrenheit\"\nSpecific day count      \"days\" (vague)     \"4.5 days\"",
          healthy: "The claim names a specific test condition, a specific temperature, and a specific, sourced number of days.",
          unhealthy: "The claim uses an unquantified adjective ('days', 'a long time') with no named source behind it.",
          interpret:
            "AI Mode favors original, sourced data points over marketing adjectives, because a vague claim gives the model nothing concrete to quote or verify.",
          soWhat: [
            {
              symptom: "A third-party buying guide with lower domain authority gets cited over your own product page on your own product's core claim",
              action: "Commission or cite an independent test result and replace the vague adjective with the specific, sourced number",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Perplexity",
            role: "Cross-check what specific, sourced data points about your product already exist publicly",
            why: "Free tier is sufficient for a single-claim lookup, and it surfaces the exact source AI Mode-style retrieval is already citing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A gap log naming the missing test source, condition, and specific number, plus a rewritten claim sentence.",
      sampleOutput:
        "Ola Electric, range claim: 'Our scooters go far on a single charge' rewritten to 'The S1 Pro covers 195 km on a single charge under ARAI's standardized test cycle,' after the gap log flagged the missing named test source and specific figure.",
      successCriteria: [
        "Correctly names all 3 missing elements: source, condition, specific number",
        "Produces a rewritten claim that includes a named source and a specific figure",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Quantification", detail: "Does the claim include a specific number, or a vague adjective like 'a long time'?" },
        { label: "Named source", detail: "Is the claim attributed to a named or independent test, or unsourced?" },
        { label: "Test condition", detail: "Does the claim specify the condition it was measured under (e.g. temperature)?" },
        { label: "Which version gets quoted", detail: "Does AI Mode quote the vague or the specific version, and does that match the lesson's stated preference?" },
      ],
      decision: {
        prompt: "Yeti's page says 'built to keep ice cold for days.' The cited buying guide says 'kept ice frozen for 4.5 days in an independent 90°F ambient test.' What's the single highest-leverage fix?",
        options: [
          { id: "a", label: "Replace the vague claim with a specific, sourced version naming the test condition and exact day count", correct: true },
          { id: "b", label: "Add more marketing adjectives to make the claim sound more impressive", correct: false },
          { id: "c", label: "Remove the claim from the page entirely to avoid comparison", correct: false },
          { id: "d", label: "Increase the page's word count so it ranks higher organically", correct: false },
        ],
        explanation:
          "The gap log isolates exactly three missing elements, a named test source, a specific temperature, and a specific day count, so the fix that directly closes the gap is rewriting the claim to include all three, matching what the cited source already does. More adjectives, removing the claim, or unrelated word-count changes don't address the actual missing signal.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Commission or source an independent ice-retention test (or cite an existing one if it already exists internally) and replace the vague 'keeps ice cold for days' claim with a specific, sourced sentence stating the test condition, temperature, and exact day count. This directly targets the one signal the reverse-engineering exercise identified as missing.",
      },
      commonMistakes: [
        { mistake: "Assuming a page's own brand authority substitutes for a sourced claim", explanation: "the diagnostic shows a lower-authority third party winning the citation purely because its claim was specific and sourced." },
        { mistake: "Adding more descriptive language instead of a quantified figure", explanation: "adjectives like 'exceptional' or 'long-lasting' don't give an AI system anything concrete to quote or verify." },
        { mistake: "Citing a number without naming the source or test condition", explanation: "a bare number without context is still weaker than a claim that states who tested it and under what conditions." },
        { mistake: "Treating this as an SEO ranking problem rather than a citation problem", explanation: "Yeti's page already ranks higher organically; the issue is specifically about what gets quoted in the AI answer, not about search rank." },
      ],
      keyTakeaway:
        "AI Mode consistently favors claims it can verify and quote precisely over confident-sounding marketing language, even when the vaguer claim comes from a page with far more domain authority. Reverse-engineering exactly which specific element (source, condition, number) a winning claim has is a repeatable way to find the fix.",
    },
  ],

  "llmo": [
    {
      id: "llmo-slack-robots-txt-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Locked Door: Auditing Slack's robots.txt for AI Crawler Access",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style robots.txt snippet with a mix of AI-crawler directives, correctly identify which rules block LLM citation, which merely throttle it, and which are already fine, before recommending fixes.",
      companyId: "slack",
      scenario:
        "You're a growth marketer at Slack. ChatGPT and Perplexity almost never mention Slack when users ask for the best team-chat tool, even though Slack ranks on page one of Google for the same query. Your first hypothesis: something in robots.txt is blocking the AI crawlers that would otherwise find and cite Slack's help center and comparison pages.",
      brief:
        "Read each robots.txt block, decide whether it's a critical defect, a moderate defect, or fine as-is, referencing the lesson's Step 1 checklist.",
      mode: "teardown",
      conceptsCovered: [
        "Step 1, Open your doors to AI crawlers",
        'Step 2, Build a "machine-readable answer block" at the top of every page',
      ],
      skills: ["robots.txt auditing", "AI crawler access diagnosis", "Directive precedence reasoning"],
      keyQuestion: "Which robots.txt rules actually block AI crawlers from citing the site, which merely slow them down, and which are unrelated and fine as-is?",
      prerequisites: [
        "Basic familiarity with robots.txt syntax (User-agent, Disallow, Allow, Crawl-delay)",
        "Understanding that named-crawler rules and wildcard rules can interact",
      ],
      terminology: [
        { term: "robots.txt", definition: "a text file at a site's root that tells web crawlers, including AI crawlers like GPTBot and ClaudeBot, which paths they may or may not access." },
        { term: "Crawl-delay", definition: "a directive that limits how often a crawler may request pages, slowing discovery of new or updated content without fully blocking it." },
      ],
      teardownItems: [
        {
          itemId: "item-1-gptbot-block",
          specimen: "User-agent: GPTBot\nDisallow: /",
          specimenSource: "synthetic-realistic",
          prompt:
            "Slack's robots.txt has this block. What does it mean for LLMO, and is it a defect?",
          answerKey: [
            {
              defect: "GPTBot is disallowed sitewide",
              severity: "critical",
              whyItMatters:
                "GPTBot powers both ChatGPT's training crawl and its live web-search retrieval; blocking it removes Slack from consideration in both stages the lesson describes.",
              lessonRef: "step-1-open-your-doors-to-ai-crawlers",
              owner: "developer",
            },
          ],
          distractors: [
            "The 'User-agent: GPTBot' line itself, correct syntax naming the bot",
            "Using 'Disallow' as the directive keyword, valid robots.txt syntax",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-claudebot-crawl-delay",
          specimen: "User-agent: ClaudeBot\nCrawl-delay: 300\nAllow: /",
          specimenSource: "synthetic-realistic",
          prompt: "ClaudeBot is technically allowed here. Is there still a problem?",
          answerKey: [
            {
              defect:
                "Crawl-delay of 300 seconds limits ClaudeBot to one request every 5 minutes, so new or updated pages take far longer to be discovered",
              severity: "moderate",
              whyItMatters:
                "Slow discovery means Slack's newest comparison pages and updated stats sit uncrawled for weeks, missing the freshness window the lesson's Step 2 depends on.",
              lessonRef: "step-1-open-your-doors-to-ai-crawlers",
              owner: "developer",
            },
          ],
          distractors: [
            "Allow: /, correctly grants site-wide access",
            "The bot name 'ClaudeBot', correctly spelled",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-wildcard-blog-disallow",
          specimen: "User-agent: *\nDisallow: /blog/\nDisallow: /customer-stories/",
          specimenSource: "synthetic-realistic",
          prompt:
            "This wildcard rule applies to every crawler, including every AI bot not listed by name above. Is it a defect?",
          answerKey: [
            {
              defect:
                "A wildcard Disallow blocks /blog/ and /customer-stories/ from every AI crawler that isn't explicitly named elsewhere in the file, exactly the pages most likely to carry the stats and quotes the lesson's Step 2 and Step 6 rely on",
              severity: "critical",
              whyItMatters:
                "Named allow-rules for GPTBot, ClaudeBot, or PerplexityBot do not override a wildcard Disallow for those same paths under standard robots.txt precedence, so citation-worthy content stays invisible.",
              lessonRef: "step-2-build-a-machine-readable-answer-block-at-the-top-of-every-page",
              owner: "developer",
            },
          ],
          distractors: [
            "Disallow: /admin/ elsewhere in the file, correctly protects an internal path",
            "User-agent: * as a fallback rule, standard and expected",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Test how each named user-agent is actually treated against real URLs before publishing the fix",
            why: "Its custom user-agent switcher and robots.txt checker let you simulate GPTBot, ClaudeBot, and PerplexityBot crawls for free",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log every rule with severity and proposed fix",
            why: "Free, shareable audit trail for the dev handoff",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A corrected robots.txt file with every AI-crawler block resolved or justified, plus a one-page severity-ranked defect log for the dev handoff.",
      sampleOutput:
        "Mailchimp robots.txt audit\n\nCRITICAL\n  User-agent: GPTBot / Disallow: / -> fix: change to Allow: /\n  User-agent: * / Disallow: /blog/ -> fix: scope wildcard disallow to /blog/drafts/ only, keep published posts open\n\nMODERATE\n  User-agent: ClaudeBot / Crawl-delay: 300 -> fix: lower to Crawl-delay: 10 or remove\n\nNOT A DEFECT\n  User-agent: * / Disallow: /admin/ -> leave as-is",
      successCriteria: [
        "Correctly assigns severity to all 3 defects",
        "Does not flag either distractor line as a defect in any item",
        "Proposes a specific, actionable fix for each defect",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Sitewide vs. scoped blocks", detail: "Is an AI crawler disallowed entirely, or only from a specific path?" },
        { label: "Crawl-delay severity", detail: "Does a crawl-delay value meaningfully slow discovery of new content, or is it negligible?" },
        { label: "Wildcard precedence", detail: "Does a wildcard Disallow silently block AI crawlers not named elsewhere in the file, even if named-bot rules look fine?" },
        { label: "Path relevance", detail: "Are the blocked paths ones that actually carry citation-worthy content (blog, comparison pages), or unrelated internal paths?" },
      ],
      decision: {
        prompt: "The file has a named 'Allow: /' rule for GPTBot, but also a separate 'User-agent: *' block with 'Disallow: /blog/'. Does GPTBot get to crawl /blog/?",
        options: [
          { id: "a", label: "Yes, the named GPTBot Allow rule overrides the wildcard block for all bots including GPTBot", correct: false },
          { id: "b", label: "It depends on whether GPTBot has its own explicit rule for /blog/ specifically, otherwise standard precedence still applies per-bot per-path", correct: true },
          { id: "c", label: "No, GPTBot is always blocked from every path if any wildcard Disallow exists anywhere in the file", correct: false },
          { id: "d", label: "Yes, because 'Allow: /' was declared first in the file", correct: false },
        ],
        explanation:
          "As item 3 establishes, a named allow-rule for one crawler does not automatically override a separate wildcard Disallow for that same path, since robots.txt directives are evaluated per user-agent block, not merged across blocks. Rule order in the file doesn't determine precedence either, and a single wildcard rule doesn't blanket-block a bot from every unrelated path.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Fix all three defects before the next deploy: change the sitewide GPTBot Disallow to Allow, lower or remove the 300-second ClaudeBot crawl-delay, and scope the wildcard Disallow so it no longer silently blocks /blog/ and /customer-stories/ from every AI crawler not named elsewhere in the file. The wildcard fix is the most urgent since it affects the widest set of citation-worthy content.",
      },
      commonMistakes: [
        { mistake: "Assuming a named Allow rule for one bot cancels a wildcard Disallow elsewhere in the file", explanation: "robots.txt directives don't merge across separate user-agent blocks this way; the wildcard rule still applies to any crawler without its own explicit exception." },
        { mistake: "Treating a crawl-delay as harmless since the bot is technically 'allowed'", explanation: "a long crawl-delay can functionally block fresh content from being discovered in any useful timeframe, even without a literal Disallow." },
        { mistake: "Flagging correct, standard syntax as a defect", explanation: "the distractors (a correctly spelled bot name, a valid Allow: / line) exist specifically to test this; only flag lines that actually change crawler behavior for the worse." },
        { mistake: "Fixing only the sitewide GPTBot block and missing the wildcard rule", explanation: "the wildcard Disallow is easy to miss since it doesn't name any AI crawler directly, but it blocks the widest range of citation-worthy paths." },
      ],
      keyTakeaway:
        "A robots.txt file can look mostly fine at a glance while still blocking AI crawlers through indirect means: a wildcard rule with no named exception, or a crawl-delay so long it functionally prevents fresh content discovery. Reading each rule for its actual effect on each specific crawler, not just scanning for an obvious sitewide block, is what a real audit requires.",
    },
    {
      id: "llmo-goto-answer-block-audit",
      tier: "core",
      archetype: "audit",
      title: "Built to Be Quoted: Auditing GoTo's Content for LLM Citation",
      timeEstimate: "60 minutes",
      timeMinutes: 60,
      objective:
        "Given three real-style GoTo (Gojek + Tokopedia) page drafts, apply the lesson's on-page LLMO checklist, answer-block placement, entity consistency, and question-shaped headers, to score which pages are citation-ready and which need rework before publish.",
      companyId: "goto-gojek-tokopedia",
      scenario:
        "You're a content strategist on GoTo's brand team. Leadership wants GoTo named whenever someone asks an AI assistant 'what's the leading super app in Southeast Asia', and you've been asked to sign off on three page drafts before they go live.",
      brief:
        "Score each draft's answer-block placement, entity consistency, and header phrasing against the lesson's checklist, then rank the drafts by citation-readiness.",
      mode: "diagnostic",
      conceptsCovered: [
        "Machine-readable answer blocks in the first 100 words",
        "Using entities consistently across the page",
        "Answering question-shaped queries in headers",
      ],
      skills: ["LLMO content auditing", "Entity consistency review", "Question-header rewriting"],
      keyQuestion: "Across three dimensions, answer placement, entity naming, and header phrasing, which of the three drafts are actually citation-ready, and what specifically needs fixing in the ones that aren't?",
      prerequisites: [
        "Familiarity with the concept of a machine-readable answer block",
        "Access to a free question-research tool like AnswerThePublic",
      ],
      terminology: [
        { term: "Entity consistency", definition: "using one standardized name for a brand or product throughout a page and site, since AI models track entities and inconsistent naming weakens the model's confidence about which facts belong to which name." },
        { term: "Question-shaped header", definition: "a heading written as the literal question a user would type or ask a chatbot, rather than an internal product-team label." },
      ],
      steps: [
        {
          stepId: "step-1-answer-block-placement",
          concept: "Machine-readable answer blocks in the first 100 words",
          lessonAnchor: "step-2-build-a-machine-readable-answer-block-at-the-top-of-every-page",
          theoryRecap:
            "The lesson's Step 2 says 44% of citations come from the first 30% of a page, so a 40-80 word direct answer belongs in the first 100 words, followed by a comparison table or cited stats.",
          question:
            "Draft A opens with three paragraphs of GoTo's 2021 merger history before ever mentioning what GoPay is. Draft B opens with a 55-word direct answer to 'what is GoPay' followed by a feature table. Which is citation-ready, and what's the fix for the other?",
          toolName: "Google Sheets",
          where: "A shared scoring sheet with one row per draft and a word-count column for 'words before the direct answer appears'",
          procedure: [
            "Paste the opening 150 words of each draft into its own row",
            "Count words before a direct, complete answer to the page's core question appears",
            "Flag any draft where that count exceeds 100 words",
            "For flagged drafts, draft a replacement 40-80 word answer using only facts already in the page",
          ],
          outputSample:
            "Draft | Words before direct answer | Verdict\nA (GoPay history) | 187 | FAIL, rewrite opening\nB (GoPay features) | 42 | PASS\nC (GoTo super app) | 96 | PASS, borderline, trim by 20 words for safety margin",
          healthy:
            "A direct, complete answer appears within the first 100 words, comparison table or cited stats follow immediately after.",
          unhealthy:
            "Company history, funding timeline, or brand narrative occupies the opening paragraphs before the reader's actual question is answered.",
          interpret:
            "Position, not just presence, of the answer determines whether an AI model's passage-extraction step ever reaches it.",
          soWhat: [
            {
              symptom: "A page answers the question correctly but buries it past word 150",
              action: "Move the existing answer sentence to the first paragraph, cut the narrative lead entirely",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-entity-consistency",
          concept: "Using entities consistently across the page",
          lessonAnchor: "step-3-use-entities-consistently",
          theoryRecap:
            "The lesson's Step 3 says AI models track entities (brand name, founders, product names) and inconsistent naming confuses the model's entity graph.",
          question:
            "Across the 3 drafts, the merged company is called 'GoTo', 'GoTo Group', 'Gojek-Tokopedia', and once just 'Gojek'. Which of these is the one entity name GoTo should standardize on, and how many inconsistent mentions need fixing?",
          toolName: "Google Sheets",
          where: "Same scoring sheet, new tab for entity mentions",
          procedure: [
            "Search each draft for every mention of the parent company name",
            "List each variant found and its count",
            "Pick the single canonical form, matching GoTo's own investor-relations and press materials",
            "Flag every non-canonical mention for a find-and-replace pass",
          ],
          outputSample:
            "Variant | Count across 3 drafts | Canonical?\nGoTo | 11 | YES, keep\nGoTo Group | 4 | NO, replace with GoTo\nGojek-Tokopedia | 2 | NO, replace with GoTo\nGojek (referring to the parent) | 3 | NO, replace with GoTo (Gojek stays only when naming the ride-hailing product specifically)",
          healthy:
            "One canonical entity name for the parent company, used identically across every page and matching the NAP used on GoTo's own investor and press pages.",
          unhealthy:
            "The same company referred to four different ways across three pages, with 'Gojek' ambiguously meaning both the parent and the ride-hailing product.",
          interpret:
            "Entity inconsistency doesn't just look sloppy, it splits the model's confidence about which name to associate with which facts.",
          soWhat: [
            {
              symptom: "9 of 20 parent-company mentions use a non-canonical name",
              action: "Run a site-wide find-and-replace to the canonical form, add a style-guide entry",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-question-shaped-headers",
          concept: "Answering question-shaped queries in headers",
          lessonAnchor: "step-4-answer-question-shaped-queries",
          theoryRecap:
            "The lesson's Step 4 says headers rewritten as natural-language questions match how users ask AI chatbots, and recommends AnswerThePublic or AlsoAsked to find the real question forms.",
          question:
            "Draft C's headers read 'GoPay Overview', 'Ecosystem Benefits', 'Merchant Network'. What should each become, and how do you confirm the new phrasing matches real user questions rather than guessing?",
          toolName: "AnswerThePublic",
          where: "AnswerThePublic, searching the seed terms 'GoPay' and 'GoTo super app'",
          procedure: [
            "Run each header's core topic through AnswerThePublic to see the actual question phrasings people search",
            "Match each existing header to the closest real question form returned",
            "Rewrite the header as that question",
            "Confirm the section's first sentence directly answers the new question-header",
          ],
          outputSample:
            "Old header | AnswerThePublic top match | New header\nGoPay Overview | 'what is gopay used for' | What Is GoPay and How Does It Work?\nEcosystem Benefits | 'why use gojek and tokopedia together' | Why Use GoPay Across Both Gojek and Tokopedia?\nMerchant Network | 'how many merchants accept gopay' | How Many Merchants Accept GoPay?",
          healthy:
            "Headers phrased as the exact questions AnswerThePublic or AlsoAsked show real users asking, with the answer immediately following.",
          unhealthy:
            "Headers written as internal product-team labels ('Ecosystem Benefits') that no user would ever type into a search bar or ask a chatbot.",
          interpret:
            "A header that doesn't match a real question form is invisible to both featured-snippet extraction and LLM passage retrieval.",
          soWhat: [
            {
              symptom: "All 3 headers on Draft C are internal labels, not questions",
              action: "Rewrite using AnswerThePublic's top match per header before this draft ships",
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
            role: "Score and track all 3 drafts across the checklist",
            why: "Free, shareable, no setup",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "AnswerThePublic",
            role: "Find the real question phrasing users search for each topic",
            why: "Free tier covers a handful of searches a day, enough for a 3-page audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored citation-readiness ranking of the 3 drafts with specific line-edit fixes for each failing check.",
      sampleOutput:
        "Wise page-draft audit, citation-readiness scorecard\n\nDraft: 'Sending Money Abroad' page\n  Answer-block placement: PASS (38 words to answer)\n  Entity consistency: FAIL (3 uses of 'TransferWise', should be 'Wise')\n  Question-shaped headers: FAIL (2 of 4 headers are labels, not questions)\n  Overall: NOT citation-ready, fix entity + headers before publish",
      successCriteria: [
        "Correctly scores all 3 drafts on all 3 checklist dimensions",
        "Identifies the specific non-canonical entity mentions",
        "Produces question-form rewrites for each internal-label header",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the 3 corrected drafts through a manual ChatGPT/Perplexity prompt test (per the lesson's 'How to Measure LLMO Performance' section) two weeks after publish and log whether any of the 3 pages get cited.",
      whatToLookFor: [
        { label: "Answer position", detail: "How many words appear before a direct, complete answer to the page's core question?" },
        { label: "Entity naming", detail: "Is the parent company or product named consistently, or does it vary across mentions?" },
        { label: "Header phrasing", detail: "Are headers written as real user questions, or as internal product labels?" },
        { label: "Borderline cases", detail: "Does a draft pass a check but sit close enough to the threshold that it needs a safety-margin trim?" },
      ],
      decision: {
        prompt: "Draft C's answer appears at word 96, just under the 100-word threshold, but its headers are all internal labels ('Ecosystem Benefits') rather than questions. Should Draft C be marked citation-ready as-is?",
        options: [
          { id: "a", label: "Yes, since it passes the answer-placement check, which is the most important of the three dimensions", correct: false },
          { id: "b", label: "No, it needs the header rewrite fixed too; passing one of three checklist dimensions doesn't make a draft citation-ready overall", correct: true },
          { id: "c", label: "Yes, but only after trimming the answer placement further, headers don't matter for citation", correct: false },
          { id: "d", label: "No, but only because 96 words is too close to the 100-word limit for comfort", correct: false },
        ],
        explanation:
          "The checklist has three independent dimensions, and Draft C fails the header-phrasing check even though it passes (barely) on answer placement, so it isn't citation-ready as a whole. Headers matter because a header that doesn't match a real question form is invisible to passage retrieval regardless of how well-placed the answer beneath it is, and the borderline word count is a secondary concern, not the disqualifying one.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Hold Draft A for a full rewrite (187 words before the answer, far past threshold), fix Draft C's three internal-label headers using the AnswerThePublic-sourced question forms before publish, and run a site-wide entity find-and-replace across all three drafts to standardize on 'GoTo' as the canonical parent-company name. Draft B is the only one that can ship as-is.",
      },
      commonMistakes: [
        { mistake: "Grading a draft as ready after passing only one of the three checklist dimensions", explanation: "Draft C shows a draft can pass answer-placement and still fail on headers; all three dimensions need to pass independently." },
        { mistake: "Treating 'Gojek' as always non-canonical", explanation: "the lesson distinguishes using 'Gojek' correctly when naming the ride-hailing product specifically from using it incorrectly to refer to the parent company; context determines which is correct." },
        { mistake: "Guessing at question-header rewrites instead of checking a research tool", explanation: "an invented question phrasing may not match how real users actually ask, defeating the purpose of the rewrite." },
        { mistake: "Ranking drafts only by their weakest score instead of noting every failing dimension", explanation: "a full sign-off needs the specific fix for each failing check, not just an overall pass/fail label." },
      ],
      keyTakeaway:
        "Citation-readiness isn't a single pass/fail gate, it's three independent checks (answer placement, entity consistency, question-shaped headers) that all need to pass for a page to be genuinely ready. A draft can look strong on one dimension and still be invisible to AI citation because of a gap on another.",
    },
  ],
  "seo-for-ai-platforms": [
    {
      id: "seo-ai-platforms-beyond-meat-citation-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Why Did Perplexity Skip Us? Reverse-Engineering a Citation Snapshot",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real-style Perplexity answer snapshot that cites two smaller competitor blogs but not Beyond Meat, apply the lesson's content-signal checklist to identify exactly which signals the cited sources have that Beyond Meat's page lacks.",
      companyId: "beyond-meat",
      scenario:
        "A teammate on Beyond Meat's content team ran the query 'what's the healthiest plant-based meat brand' in Perplexity three times this week. Two independent nutrition blogs get cited every time. Beyond Meat's own comparison page, which ranks on page one of Google, never appears.",
      brief:
        "Compare Beyond Meat's page against the two cited sources on freshness/specificity and structured headers, then identify the two highest-leverage fixes.",
      mode: "diagnostic",
      conceptsCovered: ["Freshness and Specificity", "Structured Headers and Direct Answers"],
      skills: ["Generative Engine Optimization (GEO)", "Content Auditing", "Competitive Analysis"],
      keyQuestion: "What specific content signals do the cited competitor sources have that Beyond Meat's page lacks?",
      prerequisites: [
        "Basic familiarity with how AI answer engines like Perplexity generate cited responses",
      ],
      terminology: [
        { term: "Generative Engine Optimization (GEO)", definition: "optimizing content so AI answer engines like Perplexity or ChatGPT cite it as a source, rather than optimizing purely for traditional search rankings." },
        { term: "Retrieval system", definition: "the part of an AI answer engine that finds and extracts relevant passages from web pages to build its answer." },
      ],
      steps: [
        {
          stepId: "step-1-freshness-specificity-gap",
          concept: "Freshness and Specificity",
          lessonAnchor: "freshness-and-specificity",
          theoryRecap:
            "The lesson says a statistic from 2022 is almost never cited when a newer figure exists, and generic statements are invisible to retrieval systems, specific numbers with a source and year are the signal.",
          question:
            "Beyond Meat's page says 'plant-based meat has a smaller environmental footprint than beef.' One cited competitor blog says 'producing a plant-based burger patty generates 90% fewer greenhouse gas emissions than a beef patty, per a peer-reviewed 2024 lifecycle assessment.' Which sentence wins the citation, and why exactly?",
          toolName: "Perplexity",
          where: "Run the exact target query in Perplexity, screenshot the citations, then open Beyond Meat's page and the two cited pages side by side",
          procedure: [
            "Run the query in Perplexity and record which 3-4 sources it cites",
            "Open each cited source and copy its core environmental-impact claim verbatim",
            "Copy Beyond Meat's equivalent claim verbatim",
            "Mark each claim as specific-and-dated or generic-and-undated",
          ],
          outputSample:
            "Source | Claim | Specific + dated?\nCited blog #1 | '90% fewer greenhouse gas emissions than beef, 2024 lifecycle study' | YES\nCited blog #2 | '3x less land use than beef, per USDA 2023 data' | YES\nBeyond Meat page | 'a smaller environmental footprint than beef' | NO, no number, no year, no source",
          healthy: "Every environmental or nutritional claim carries a specific number, a named source, and a year.",
          unhealthy:
            "Claims use comparative adjectives (smaller, healthier, better) with no number attached, forcing the retrieval system to treat them as unverifiable.",
          interpret: "A retrieval system cannot quote a claim it cannot verify, and 'smaller' verifies nothing.",
          soWhat: [
            {
              symptom: "The page's core claim has no number, source, or year",
              action: "Replace with Beyond Meat's own published environmental-impact data, with the year attached",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-header-phrasing-gap",
          concept: "Structured Headers and Direct Answers",
          lessonAnchor: "structured-headers-and-direct-answers",
          theoryRecap:
            "The lesson says retrieval systems extract passages, not full articles, so the answer must sit in the first sentence of a section titled as the question users actually ask.",
          question:
            "Beyond Meat's page uses the header 'Our Commitment to Sustainability'. The top-cited competitor blog uses 'Is Plant-Based Meat Actually Better for the Environment?' with the answer in the first sentence. Rewrite Beyond Meat's header and opening sentence to match the pattern.",
          toolName: "Google Sheets",
          where: "A simple before/after tracking sheet for header and first-sentence pairs",
          procedure: [
            "List each of Beyond Meat's section headers next to the cited competitors' equivalent headers",
            "Identify which of Beyond Meat's headers are brand-voice labels rather than user questions",
            "Rewrite each flagged header as the matching question form",
            "Write a one-sentence direct answer to sit immediately below the new header",
          ],
          outputSample:
            "Old header: 'Our Commitment to Sustainability'\nNew header: 'Is Plant-Based Meat Actually Better for the Environment?'\nNew opening sentence: 'Yes, plant-based meat from Beyond Meat generates roughly 90% fewer greenhouse gas emissions than the beef patty it replaces, per its 2024 lifecycle assessment.'",
          healthy:
            "The header is phrased as the exact question a buyer or journalist would type, and the very next sentence answers it in full.",
          unhealthy:
            "The header is an internal brand-voice phrase ('Our Commitment to...') that answers nothing and matches no real search query.",
          interpret:
            "A header that doesn't match how the question was asked is functionally invisible to passage extraction, no matter how good the content beneath it is.",
          soWhat: [
            {
              symptom: "3 of 5 section headers are brand-voice labels, not questions",
              action: "Rewrite all 3 before the next content refresh cycle",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Perplexity",
            role: "Run the actual target query and see live citations",
            why: "Free tier runs enough queries for a spot-check audit",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Track before/after claims and headers",
            why: "Free, shareable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A side-by-side comparison table plus rewritten header-and-opening-sentence pairs for every flagged section.",
      sampleOutput:
        "Warby Parker page audit, citation-readiness gaps\n\nHeader: 'Our Approach to Eye Care' -> 'Are Warby Parker Glasses Actually Good Quality?'\nClaim: 'affordable, stylish eyewear' -> 'prescription glasses starting at $95, per Warby Parker's 2025 price list'",
      successCriteria: [
        "Correctly identifies the specificity gap between Beyond Meat's claim and the cited competitors' claims",
        "Rewrites at least 2 headers into real question form with a direct-answer opening sentence",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Number, source, year", detail: "Does the claim carry a specific figure, a named source, and a date, or just a comparative adjective?" },
        { label: "Header phrasing", detail: "Is the header written as the exact question a user would type, or as an internal brand-voice label?" },
        { label: "Answer placement", detail: "Does the direct answer sit in the first sentence after the header, or several sentences later?" },
        { label: "Verifiability", detail: "Could a retrieval system quote this claim as evidence, or is it too vague to cite?" },
      ],
      decision: {
        prompt:
          "Beyond Meat's page says 'a smaller environmental footprint than beef' while a cited competitor says '90% fewer greenhouse gas emissions than beef, per a peer-reviewed 2024 lifecycle assessment.' What's the single highest-leverage fix?",
        options: [
          { id: "a", label: "Add more adjectives to make the claim sound more confident", correct: false },
          { id: "b", label: "Replace the vague claim with Beyond Meat's own specific, dated, sourced data point", correct: true },
          { id: "c", label: "Remove the claim entirely since it can't be improved", correct: false },
          { id: "d", label: "Move the claim earlier in the article without changing its wording", correct: false },
        ],
        explanation:
          "The defect isn't the claim's position or tone, it's that it has no number, source, or year attached, which makes it unverifiable to a retrieval system. Rewording with more confident adjectives or simply relocating the same vague sentence doesn't fix the underlying specificity gap; only swapping in a real dated figure does.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Rewrite Beyond Meat's core environmental claim to match the specificity of the cited competitors, a real number, a named source, and a year, and convert at least the top 3 brand-voice headers into question-shaped headers with direct-answer opening sentences. Both cited competitors win citations on these two signals alone; matching them is the fastest path to appearing in the answer.",
      },
      commonMistakes: [
        { mistake: "Assuming Google page-one ranking guarantees AI citation", explanation: "traditional ranking and AI citation depend on different signals; a page can rank well and still be skipped by retrieval systems." },
        { mistake: "Treating brand-voice headers as acceptable because they read well", explanation: "a header that doesn't match how users phrase the question is functionally invisible to passage extraction, regardless of writing quality." },
        { mistake: "Leaving a true claim unsourced because it 'sounds' credible", explanation: "retrieval systems can't verify comparative adjectives like 'smaller' or 'better'; only claims with a number, source, and year get cited." },
      ],
      keyTakeaway:
        "AI answer engines cite specific, verifiable, well-labeled content, not confident-sounding prose. Closing the gap between Beyond Meat's page and its cited competitors took exactly two fixes: attach real numbers to claims, and phrase headers as the questions users actually ask.",
    },
    {
      id: "seo-ai-platforms-delhivery-article-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Uncitable Article: Teardown of a Delhivery Blog Draft",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a specimen blog-post draft aimed at D2C brands, apply the lesson's GEO content checklist to find every structural defect stopping it from ever being cited by an AI answer engine.",
      companyId: "delhivery",
      scenario:
        "Delhivery's content team published 'How to Reduce Last-Mile Delivery Costs' six weeks ago, aimed at D2C brands researching logistics partners. Manual weekly spot-checks in Perplexity and ChatGPT show zero citations so far, while a competitor's shorter article on the same topic gets cited regularly.",
      brief:
        "Read the specimen draft's opening, structure, and one core claim, then flag every GEO defect using the lesson's checklist.",
      mode: "teardown",
      conceptsCovered: [
        "Structured Headers and Direct Answers",
        "Freshness and Specificity",
        "Practical Tactics You Can Apply This Week",
      ],
      skills: ["Generative Engine Optimization (GEO)", "Content Teardown", "Editorial Review"],
      keyQuestion: "What structural defects in this draft are stopping AI answer engines from ever citing it?",
      prerequisites: [
        "Basic familiarity with GEO content signals (specificity, direct answers, crawler accessibility)",
      ],
      terminology: [
        { term: "Interstitial", definition: "an overlay (like a newsletter signup modal) that covers page content, which can block a crawler's headless renderer from reading the article body." },
      ],
      teardownItems: [
        {
          itemId: "item-1-buried-lead",
          specimen:
            "Logistics has always been the backbone of commerce, connecting sellers to buyers across every corner of the country. Delhivery has spent over a decade building infrastructure that powers this connection, from Gurugram to the smallest pin codes. In this article, we'll explore several dimensions of last-mile delivery cost and share our perspective on the levers available to D2C brands today.",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the article's opening paragraph. Does it answer the implied question, 'how do you reduce last-mile delivery costs', anywhere in these three sentences?",
          answerKey: [
            {
              defect:
                "The direct answer to the article's own title question does not appear anywhere in the opening paragraph, three sentences of company narrative precede any actionable content",
              severity: "critical",
              whyItMatters:
                "The lesson's Structured Headers and Direct Answers section says retrieval systems extract passages from the opening, not the whole article, if the answer isn't there, it isn't found.",
              lessonRef: "structured-headers-and-direct-answers",
              owner: "you",
            },
          ],
          distractors: [
            "The sentence mentions 'Gurugram to the smallest pin codes', a specific and accurate detail about Delhivery's network",
            "The paragraph is grammatically correct and on-topic for a logistics blog",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-generic-undated-claim",
          specimen: "Shipping costs are a major expense for D2C brands, and reducing them can meaningfully improve margins.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this claim, which appears mid-article, citation-worthy as written?",
          answerKey: [
            {
              defect:
                "The claim has no number, no year, and no source, it's true but too generic for a retrieval system to treat as verifiable evidence",
              severity: "moderate",
              whyItMatters:
                "The lesson's Freshness and Specificity section shows generic claims lose to specific, dated, sourced ones almost every time.",
              lessonRef: "freshness-and-specificity",
              owner: "you",
            },
          ],
          distractors: [
            "The sentence is factually accurate",
            "The claim uses the phrase 'D2C brands', matching the target audience's own vocabulary",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-newsletter-interstitial",
          specimen:
            "A full-screen newsletter signup modal appears 2 seconds after the page loads, covering the article body. It has no visible close button on mobile until the user scrolls.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this page element affect whether AI crawlers can cite the article?",
          answerKey: [
            {
              defect:
                "An interstitial that blocks the article body from rendering, especially one a crawler's headless renderer can't dismiss, can prevent the page's actual content from being read at all",
              severity: "critical",
              whyItMatters:
                "The lesson's Practical Tactics section says paywalls and aggressive interstitials prevent AI crawlers from reading content, if a bot cannot access the page, it cannot cite the page.",
              lessonRef: "practical-tactics-you-can-apply-this-week",
              owner: "developer",
            },
          ],
          distractors: [
            "The modal collects email addresses, a legitimate lead-gen tactic",
            "The modal appears on both desktop and mobile, consistent behavior across devices",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Perplexity",
            role: "Confirm the article's actual citation status with real queries before and after fixes",
            why: "Free, and it's the platform where every citation shows up as a clickable link per the lesson",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log defects and severity for the content team",
            why: "Free, shareable defect log",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A severity-ranked defect list for the draft plus a rewritten opening paragraph and one rewritten claim.",
      sampleOutput:
        "Zillow blog-draft teardown\n\nCRITICAL: Opening paragraph buries the answer to 'how to estimate home value' behind 2 paragraphs of company history -> rewrite: lead with the direct method in sentence 1\nMODERATE: 'Home values can fluctuate significantly' (no number, no year) -> rewrite: 'Median home values shifted 4.2% year-over-year in Q2 2025, per Zillow's own home value index'\nNOT A DEFECT: Author byline with 12 years real-estate experience listed, correctly reinforces E-E-A-T",
      successCriteria: [
        "Correctly identifies all 3 defects with accurate severity",
        "Does not flag either distractor per item as a defect",
        "Produces a rewritten opening paragraph that leads with a direct answer",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Answer placement", detail: "Does the opening paragraph answer the article's own title question, or open with company narrative?" },
        { label: "Claim specificity", detail: "Does each factual claim carry a number, source, and year, or just a general statement?" },
        { label: "Crawler accessibility", detail: "Can a headless renderer actually reach the article body, or does an interstitial block it?" },
        { label: "Distractor discipline", detail: "Is a genuinely good detail (an accurate fact, correct grammar, matching audience vocabulary) being mistaken for a defect?" },
      ],
      decision: {
        prompt:
          "The article gets zero AI citations after six weeks while a competitor's shorter piece on the same topic is cited regularly. Given the three specimens reviewed, what is the single most severe defect blocking citation entirely?",
        options: [
          { id: "a", label: "The mid-article claim about shipping costs having no number or year attached", correct: false },
          { id: "b", label: "The full-screen newsletter modal that can prevent a crawler from ever reading the article body", correct: true },
          { id: "c", label: "The opening paragraph's three sentences of company narrative before any actionable content", correct: false },
          { id: "d", label: "The article's use of the phrase 'D2C brands' throughout", correct: false },
        ],
        explanation:
          "All three specimens are real defects, but only the interstitial is a hard access blocker: if a crawler's headless renderer can't dismiss it, the crawler may never read the article content at all, regardless of how well the opening or claims are written. The buried lead and the generic claim both reduce citation-worthiness, but they assume the crawler can reach the content in the first place.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Fix the newsletter interstitial first, since it risks blocking crawler access to the entire article regardless of content quality. Then rewrite the opening paragraph to lead with the direct answer to the title question, and replace the generic shipping-cost claim with a specific, dated, sourced figure. All three fixes are needed, but the interstitial is the one that can zero out citation potential on its own.",
      },
      commonMistakes: [
        { mistake: "Flagging the interstitial as only a UX annoyance", explanation: "for AI citation purposes it's a potential hard blocker, a crawler that can't dismiss it may never read the article body at all." },
        { mistake: "Missing the buried lead because the opening paragraph is well-written", explanation: "prose quality doesn't matter if the direct answer to the title question never appears in the passage a retrieval system extracts." },
        { mistake: "Flagging factually accurate but generic claims as fine", explanation: "true isn't the bar for citation, verifiable is; a claim needs a number, source, and year to be usable as evidence." },
        { mistake: "Marking a specific, accurate detail (like a named location) as a defect", explanation: "distractors are designed to look suspicious; only defects that actually block citation-readiness should be flagged." },
      ],
      keyTakeaway:
        "A citation teardown checks three independent things: can the crawler even reach the content, does the opening answer the implied question, and are the claims specific enough to quote. A draft can fail on any one of these while looking fine on the others, which is why each needs its own check rather than a single overall read.",
    },
  ],

  "eeat": [
    {
      id: "eeat-ymyl-claims-guide-audit",
      tier: "mini",
      archetype: "audit",
      title: "The YMYL Author Audit: Scoring a Claims-Process Guide for E-E-A-T",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's four E-E-A-T letters plus the stricter YMYL bar to a real-style insurance claims guide, and decide which single gap is the highest-priority fix before publish.",
      companyId: "go-digit-insurance",
      scenario:
        "You're a content associate at Go Digit General Insurance reviewing a 'How to File a Motor Claim' guide before it goes live. Insurance is YMYL: a vague or wrong claims explainer can cost a policyholder real money at the worst possible moment.",
      brief:
        "Score the byline and article body against Experience, Expertise, Authoritativeness, and Trustworthiness, then flag the single gap Google's raters would weigh most heavily under the YMYL bar.",
      mode: "diagnostic",
      conceptsCovered: ["Scoring content against the four E-E-A-T letters under a YMYL bar"],
      skills: ["E-E-A-T Evaluation", "YMYL Content Review", "Editorial Auditing"],
      keyQuestion: "Which single E-E-A-T gap should be fixed first on a YMYL claims guide before it publishes?",
      prerequisites: [
        "Familiarity with the four E-E-A-T letters (Experience, Expertise, Authoritativeness, Trustworthiness)",
      ],
      terminology: [
        { term: "YMYL (Your Money or Your Life)", definition: "Google's classification for content that could impact a reader's finances, health, safety, or well-being, held to a stricter E-E-A-T bar." },
        { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness, Trustworthiness, the four signals Google's raters use to judge content quality, with Trustworthiness as the umbrella letter." },
      ],
      steps: [
        {
          stepId: "step-1-score-the-four-letters",
          concept: "Scoring content against the four E-E-A-T letters under a YMYL bar",
          lessonAnchor: "why-it-matters-ymyl-and-the-stakes-of-getting-it-wrong",
          theoryRecap:
            "The lesson's YMYL section applies Google's strictest E-E-A-T bar to health, finance, legal, and safety content because bad advice causes real-world harm, and Trustworthiness is the umbrella letter the other three feed into.",
          question:
            "The byline reads 'By Team Digit' with no name, no license number, and no link. The body cites 'as per IRDAI norms' with no clause number or source link, but does include a first-person line: 'When my own claim was processed in 2024, the surveyor visit took two days.' Which single fix closes the biggest E-E-A-T gap here?",
          toolName: "Google Sheets",
          where: "A shared E-E-A-T scoring rubric, one row per article, one column per letter",
          procedure: [
            "List the four letters as columns: Experience, Expertise, Authoritativeness, Trustworthiness",
            "Score the byline: 'Team Digit' with no name or license number scores 0 on Expertise and Authoritativeness",
            "Score the body: the first-person 2024 claim story is a genuine Experience signal, mark it present",
            "Score sourcing: 'as per IRDAI norms' with no clause number or link scores 0 on Trustworthiness, an unverifiable claim on a YMYL page",
            "Rank the four scores and flag the lowest as the highest-priority fix",
          ],
          outputSample:
            "E-E-A-T scoring, 'How to File a Motor Claim'\n" +
            "  Experience        PRESENT   first-person 2024 claim narrative\n" +
            "  Expertise         MISSING   byline 'Team Digit', no name, no license number\n" +
            "  Authoritativeness MISSING   no author page, no external credential links\n" +
            "  Trustworthiness   WEAK      'as per IRDAI norms' cited with no clause number or source link\n" +
            "  Priority fix: name a licensed claims specialist as author before touching sourcing",
          healthy:
            "A named claims specialist with a linked bio, plus a direct link to the specific IRDAI circular being paraphrased.",
          unhealthy:
            "An anonymous 'Team' byline paired with an unverifiable regulatory citation on a page that determines whether someone gets their claim money.",
          interpret:
            "Expertise and Authoritativeness both collapse to zero without a named, credentialed author, so that is the fix that unblocks the other two letters, not the sourcing gap.",
          soWhat: [
            {
              symptom: "Byline says 'Team Digit' with no name",
              action: "Assign a named claims specialist with title and license number to the byline",
              effort: "30 min",
            },
            {
              symptom: "'As per IRDAI norms' has no link or clause number",
              action: "Add a direct link to the specific IRDAI circular being referenced",
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
            role: "Score the article against the four E-E-A-T letters",
            why: "Free, shareable, no account friction for a lightweight rubric",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
      },
      deliverable: "A completed 4-letter E-E-A-T scorecard for the claims guide with one ranked priority fix.",
      sampleOutput:
        "NerdWallet, 'How Credit Utilization Affects Your Score' scorecard (excerpt)\n" +
        "  Experience        PRESENT   author includes screenshots of their own credit report utilization change\n" +
        "  Expertise         PRESENT   named CFP with linked credentials\n" +
        "  Authoritativeness PRESENT   cited by 40+ finance sites per Ahrefs\n" +
        "  Trustworthiness   WEAK      no visible last-reviewed date on a page about a number that changes monthly\n" +
        "  Priority fix: add a visible 'last reviewed' date before the byline",
      successCriteria: [
        "Scores all four E-E-A-T letters using evidence found in the byline and body text, not assumptions",
        "Correctly identifies Expertise/Authoritativeness as the highest-priority gap, not the sourcing weakness",
        "Names a concrete fix for the flagged gap",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Byline specificity", detail: "Does the byline name a real, credentialed individual, or a generic team label?" },
        { label: "Genuine experience signal", detail: "Is there a first-person detail that proves the author actually did the thing described?" },
        { label: "Source verifiability", detail: "Can a cited regulation or fact be checked via a direct link or clause number?" },
        { label: "Downstream dependency", detail: "Does fixing one letter unblock the others, or are the gaps independent?" },
      ],
      decision: {
        prompt:
          "The byline reads 'Team Digit' with no name, the body includes a genuine first-person 2024 claim story, and 'as per IRDAI norms' is cited with no link. Which fix should happen first?",
        options: [
          { id: "a", label: "Add a clause number and direct link to the IRDAI citation", correct: false },
          { id: "b", label: "Name a licensed claims specialist as the byline author", correct: true },
          { id: "c", label: "Remove the first-person claim story since it's anecdotal", correct: false },
          { id: "d", label: "Shorten the article since YMYL content should be concise", correct: false },
        ],
        explanation:
          "Expertise and Authoritativeness both collapse to zero without a named, credentialed author, so that gap blocks the most value and should be fixed first. The sourcing gap matters too, but it's a separate, smaller fix; the first-person story is already a genuine Experience signal worth keeping, not a liability.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Assign a named, licensed claims specialist to the byline before publish, this is the single fix that unblocks both Expertise and Authoritativeness, the two letters currently scoring zero. Follow with a direct link to the specific IRDAI circular being paraphrased to close the Trustworthiness gap. The existing first-person claim narrative is a genuine Experience signal and should stay as-is.",
      },
      commonMistakes: [
        { mistake: "Treating the sourcing gap as the top priority", explanation: "an unverifiable citation matters, but an anonymous byline zeroes out two full E-E-A-T letters at once, a bigger structural problem." },
        { mistake: "Dismissing the first-person claim story as filler", explanation: "on a YMYL page, a genuine personal experience detail is a real Experience signal and should be preserved, not cut for brevity." },
        { mistake: "Scoring 'Team Digit' as adequate because the company is legitimate", explanation: "Google's raters look for a named, verifiable individual, a real company name behind a generic team label doesn't substitute for a credentialed author." },
      ],
      keyTakeaway:
        "On YMYL content, an anonymous byline is often the single biggest E-E-A-T gap because it blocks two letters (Expertise, Authoritativeness) at once, not just one. Score all four letters with evidence from the actual text, then fix the gap that unblocks the most value first.",
    },
    {
      id: "eeat-host-safety-guide-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Trust & Safety Content Teardown: Missing E-E-A-T Signals in a Host Guide",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two specimen sections of an Airbnb Host Resource Center safety article, find the real E-E-A-T defects against a fixed answer key without flagging cosmetic non-issues.",
      companyId: "airbnb",
      scenario:
        "You're a content QA reviewer for Airbnb's Host Resource Center, checking a 'What To Do If a Guest Reports an Injury' article before it replaces the current version.",
      brief:
        "Read each specimen's byline block and body excerpt, then list every real E-E-A-T defect, not every difference you notice.",
      mode: "teardown",
      conceptsCovered: ["Author Entity Building (Highest Leverage)", "Trustworthiness: The Most Important Letter"],
      skills: ["E-E-A-T Evaluation", "Trust & Safety Content Review", "Editorial QA"],
      keyQuestion: "Which real E-E-A-T defects in this host safety guide put readers or the business at risk, and which differences are just cosmetic?",
      prerequisites: [
        "Completion of, or familiarity with, the E-E-A-T four-letter scoring framework",
      ],
      terminology: [
        { term: "Author entity", definition: "a named individual whose credentials and published work can be independently verified off-site, the strongest lever for Expertise and Authoritativeness." },
      ],
      teardownItems: [
        {
          itemId: "host-injury-guide-byline-block",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review the byline block and opening paragraph of Airbnb's draft 'What To Do If a Guest Reports an Injury' host guide.",
          specimen:
            "=== BYLINE BLOCK ===\n" +
            "Written by the Airbnb Content Team\n" +
            "Reviewed by: Trust & Safety\n\n" +
            "=== OPENING PARAGRAPH ===\n" +
            "Guest injuries can happen even in the safest homes. This guide walks hosts through the immediate steps, from documenting the incident to understanding AirCover protections. Following these steps helps protect both you and your guest.",
          answerKey: [
            {
              defect:
                "Byline names a department ('Airbnb Content Team', 'Trust & Safety') instead of a named, credentialed individual",
              severity: "critical",
              whyItMatters:
                "Without a named author, Google's raters cannot connect the page to a verifiable off-site entity (LinkedIn, published work), collapsing both Expertise and Authoritativeness to near zero on a page that touches guest safety and insurance coverage.",
              lessonRef: "Author Entity Building (Highest Leverage)",
              owner: "either",
            },
            {
              defect:
                "The opening paragraph makes a coverage claim ('understanding AirCover protections') with no link to the actual AirCover policy terms",
              severity: "moderate",
              whyItMatters:
                "A vague reference to a real insurance-like product without a source link is exactly the kind of unverifiable claim that fails Trustworthiness on content adjacent to financial and physical safety outcomes.",
              lessonRef: "Trustworthiness: The Most Important Letter",
              owner: "you",
            },
          ],
          distractors: [
            "The byline lists 'Reviewed by' on a separate line from 'Written by' instead of combining them into one line.",
            "The opening paragraph is two sentences long instead of three.",
          ],
          partialCredit: true,
        },
        {
          itemId: "host-injury-guide-body-excerpt",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review the body excerpt covering what a host should do immediately after a guest reports an injury.",
          specimen:
            "=== BODY EXCERPT ===\n" +
            "Step 1: Check on the guest and offer first aid if you're comfortable doing so.\n" +
            "Step 2: Document the scene with photos and a written timeline.\n" +
            "Step 3: Report the incident through your Airbnb app within 24 hours.\n" +
            "Step 4: Most injury-related costs are covered, so hosts rarely need to worry about liability.\n\n" +
            "Last updated: (no date shown)",
          answerKey: [
            {
              defect:
                "Step 4 makes a blanket reassurance ('most injury-related costs are covered... rarely need to worry') without citing AirCover's actual coverage limits or exclusions",
              severity: "critical",
              whyItMatters:
                "This is precisely the kind of overconfident, unsourced claim Google's raters flag on YMYL-adjacent content, since a host who relies on it for a real liability decision could be wrong in a way that costs them money.",
              lessonRef: "Trustworthiness: The Most Important Letter",
              owner: "you",
            },
            {
              defect: "No 'last updated' or review date shown anywhere on the page",
              severity: "moderate",
              whyItMatters:
                "Insurance-adjacent policies change; a page with no visible freshness signal cannot show raters or readers that the coverage claim was checked recently.",
              lessonRef: "Trustworthiness: The Most Important Letter",
              owner: "developer",
            },
          ],
          distractors: [
            "The steps are numbered 1 through 4 instead of using bullet points.",
            "Step 3 specifies a 24-hour reporting window instead of a 48-hour window.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect with severity and the E-E-A-T letter it violates",
            why: "Free, shareable defect-tracking log",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect log for both specimens, each entry tagged with severity and which E-E-A-T letter it violates.",
      sampleOutput:
        "Peloton 'Bike Safety Recall FAQ' defect log (excerpt)\n" +
        "  [CRITICAL] Byline: 'Peloton Support Team', no named safety engineer or licensed professional named -> Author Entity Building\n" +
        "  [MODERATE] No visible 'last reviewed' date despite referencing an active recall -> Trustworthiness",
      successCriteria: [
        "Correctly flags both critical defects across the two specimens",
        "Does not flag either distractor as a defect",
        "Ties each real defect to the correct E-E-A-T letter",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Named vs. departmental byline", detail: "Is the author a specific, verifiable individual, or a team/department label?" },
        { label: "Overconfident reassurance", detail: "Does the copy make a blanket coverage or safety claim without citing specific limits or exclusions?" },
        { label: "Freshness signal", detail: "Is there a visible 'last updated' or review date on content tied to a policy that can change?" },
        { label: "Cosmetic vs. structural difference", detail: "Is a formatting choice (numbering style, line breaks) being confused with an actual trust defect?" },
      ],
      decision: {
        prompt:
          "Step 4 of the body excerpt says 'Most injury-related costs are covered, so hosts rarely need to worry about liability,' with no link to AirCover's actual coverage terms. What's the core problem with this sentence?",
        options: [
          { id: "a", label: "It's too short compared to the other numbered steps", correct: false },
          { id: "b", label: "It makes an unsourced blanket reassurance about coverage that could be wrong for a specific host's situation", correct: true },
          { id: "c", label: "It uses the word 'covered' instead of 'insured'", correct: false },
          { id: "d", label: "It doesn't mention the Airbnb app", correct: false },
        ],
        explanation:
          "The defect is substantive, not stylistic: an overconfident, unsourced reassurance about coverage is exactly the kind of claim that can mislead a host into a costly liability decision. Word choice and step length are cosmetic and don't affect whether the claim is trustworthy or verifiable.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Do not ship this draft as-is. Replace both departmental bylines with a named, credentialed individual, and rewrite the Step 4 coverage reassurance to cite AirCover's actual limits and exclusions with a link, rather than a blanket 'rarely need to worry' claim. Add a visible last-updated date given that coverage terms can change.",
      },
      commonMistakes: [
        { mistake: "Flagging the 'Reviewed by' formatting as the defect instead of the missing name", explanation: "the real problem is that neither 'Written by' nor 'Reviewed by' names a verifiable individual; how the two lines are laid out doesn't matter." },
        { mistake: "Missing the overconfident coverage claim because it sounds reassuring", explanation: "a friendly tone doesn't make an unsourced claim trustworthy; 'rarely need to worry' is exactly the kind of overconfidence Google's raters flag on safety-adjacent content." },
        { mistake: "Treating a numbering or reporting-window detail as a real defect", explanation: "these are the distractors in this exercise; they're differences, not E-E-A-T violations." },
        { mistake: "Not connecting the missing update date to the coverage claim's risk", explanation: "the freshness gap matters specifically because the page discusses a policy (AirCover) that can change, not as a generic best practice." },
      ],
      keyTakeaway:
        "A trust-and-safety content teardown separates real defects (unverifiable authorship, unsourced reassurances, missing freshness signals) from cosmetic differences that don't affect reader trust. On safety- and money-adjacent content, an overconfident unsourced claim is often the most damaging defect because it can directly mislead a reader's decision.",
    },
  ],
  "entity-seo": [
    {
      id: "entity-seo-peloton-about-page-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Entity Home Audit: Does This /about Page Give Google Enough to Merge?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's Step 1 checklist to a described /about page JSON-LD snapshot and decide what's missing before Google can confidently merge it into a stable entity record.",
      companyId: "peloton",
      scenario:
        "You're auditing Peloton Interactive's /about page structured data ahead of a redesign, checking whether it gives Google's Knowledge Graph enough to merge the page into one authoritative entity record.",
      brief:
        "Read the JSON-LD snapshot against the lesson's Entity Home checklist, flag missing properties, and identify the one gap that would most block Knowledge Graph merging.",
      mode: "diagnostic",
      conceptsCovered: ["Creating a complete entity home with Organization JSON-LD and sameAs corroboration"],
      skills: ["Entity SEO", "Structured Data Auditing", "Knowledge Graph Optimization"],
      keyQuestion: "What is the single highest-value addition to this JSON-LD block for Google to merge the page into a stable entity record?",
      prerequisites: [
        "Basic familiarity with reading JSON-LD structured data",
      ],
      terminology: [
        { term: "sameAs", definition: "a JSON-LD property listing links to other authoritative profiles of the same entity (Wikidata, Wikipedia, LinkedIn), which Google uses to corroborate that the entity is real." },
        { term: "@id", definition: "a stable identifier fragment URL for an entity, allowing other pages to reference the same entity via mainEntityOfPage instead of redefining it." },
      ],
      steps: [
        {
          stepId: "step-1-audit-the-entity-home",
          concept: "Creating a complete entity home with Organization JSON-LD and sameAs corroboration",
          lessonAnchor: "step-1-create-your-entity-home",
          theoryRecap:
            "The lesson's Step 1 says the entity home needs a complete Organization JSON-LD block with a stable @id, and a sameAs array linking to Wikidata, Wikipedia, LinkedIn, Crunchbase, and official social profiles.",
          question:
            "This JSON-LD snapshot has name, url, logo, and foundingDate filled in, an empty sameAs array, and no @id property at all. Which single addition unlocks the most entity-merging value?",
          toolName: "Screaming Frog SEO Spider",
          where: "Custom Extraction tab, configured to pull the Organization JSON-LD block from /about",
          procedure: [
            "Crawl the /about URL and extract the raw JSON-LD block via Custom Extraction",
            "Check for a stable @id property, a permanent URL fragment like https://onepeloton.com/#organization",
            "Check the sameAs array for links to Wikidata, Wikipedia, LinkedIn, and Crunchbase",
            "Flag any property present on-page but missing from the JSON-LD block",
          ],
          outputSample:
            "Peloton /about JSON-LD audit\n" +
            "  name           PRESENT   'Peloton Interactive, Inc.'\n" +
            "  url            PRESENT\n" +
            "  logo           PRESENT\n" +
            "  foundingDate   PRESENT   '2012'\n" +
            "  @id            MISSING   no stable entity identifier\n" +
            "  sameAs         EMPTY     [] , no Wikidata, Wikipedia, or LinkedIn links\n" +
            "  Highest-value fix: populate sameAs with a Wikidata Q-number link first",
          healthy:
            "A populated sameAs array with a Wikidata Q-number link plus a stable @id every other page on the site can reference via mainEntityOfPage.",
          unhealthy:
            "Correct on-page fields (name, logo, foundingDate) but an empty sameAs array, which gives Google nothing to corroborate the entity against.",
          interpret:
            "On-page fields alone describe the brand to a crawler; sameAs is what lets Google confirm the brand is a real, already-recognized thing, which is the harder-to-fake signal.",
          soWhat: [
            {
              symptom: "sameAs array is empty",
              action:
                "Add links to the company's Wikidata item, Wikipedia page (if one exists), LinkedIn company page, and Crunchbase profile",
              effort: "30 min",
            },
            {
              symptom: "No @id property on the Organization block",
              action:
                "Add a stable @id fragment URL and reference it from every other page via mainEntityOfPage instead of redefining Organization",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Extract and inspect the live JSON-LD block",
            why: "Free up to 500 URLs, enough for a single /about page audit",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Log which properties are present vs missing",
            why: "Free tracking sheet",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
      },
      deliverable:
        "A property-by-property audit of the /about page's Organization JSON-LD with one ranked highest-value fix.",
      sampleOutput:
        "HubSpot /about JSON-LD audit (reference example)\n" +
        "  @id      PRESENT   https://hubspot.com/#organization\n" +
        "  sameAs   PRESENT   Wikidata Q5926631, Wikipedia, LinkedIn, Crunchbase\n" +
        "  founder  PRESENT   Brian Halligan (Person), Dharmesh Shah (Person)\n" +
        "  Result: fully mergeable entity record, feeds Knowledge Panel",
      successCriteria: [
        "Correctly identifies the empty sameAs array as the highest-value gap over the missing @id",
        "Names at least 3 specific sameAs targets to add",
        "Does not flag correctly-populated fields as problems",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Stable identifier", detail: "Does the Organization block have an @id that other pages can reference, rather than redefining Organization each time?" },
        { label: "Corroboration links", detail: "Does sameAs point to independent, authoritative sources like Wikidata, Wikipedia, and LinkedIn?" },
        { label: "On-page vs. off-page signal", detail: "Is the audit distinguishing fields the brand controls (name, logo) from fields that corroborate the brand externally (sameAs)?" },
        { label: "Leverage of the fix", detail: "Which missing property unlocks the most entity-merging value, not just which is easiest to add?" },
      ],
      decision: {
        prompt:
          "The JSON-LD block has name, url, logo, and foundingDate filled in correctly, but an empty sameAs array and no @id property. Which single addition unlocks the most entity-merging value?",
        options: [
          { id: "a", label: "Add a more detailed logo image with higher resolution", correct: false },
          { id: "b", label: "Populate the sameAs array with links to Wikidata, Wikipedia, and LinkedIn", correct: true },
          { id: "c", label: "Rewrite the name field to include additional keywords", correct: false },
          { id: "d", label: "Add a longer founding history to the foundingDate field", correct: false },
        ],
        explanation:
          "On-page fields like name and logo only describe the brand to a crawler; sameAs is what lets Google corroborate that the entity is a real, already-recognized thing against independent sources, which is the harder-to-fake signal Google weighs most for merging. Improving already-correct on-page fields adds little when the corroboration channel is completely empty.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Populate the sameAs array first, with links to Peloton's Wikidata item, Wikipedia page, LinkedIn company page, and Crunchbase profile, since this is the corroboration signal currently missing entirely. Follow with a stable @id fragment URL so every other page on the site can reference the same entity via mainEntityOfPage instead of redefining Organization.",
      },
      commonMistakes: [
        { mistake: "Assuming correctly-filled on-page fields mean the entity is complete", explanation: "name, logo, and foundingDate describe the brand but don't corroborate it; an empty sameAs array still blocks confident entity merging." },
        { mistake: "Prioritizing the @id fix over the empty sameAs array", explanation: "sameAs is the harder-to-fake external corroboration signal; without it, even a stable @id has little to merge against." },
        { mistake: "Treating any single social link as sufficient for sameAs", explanation: "the lesson's checklist expects multiple independent corroboration sources (Wikidata, Wikipedia, LinkedIn, Crunchbase), not just one." },
      ],
      keyTakeaway:
        "A complete entity home needs both self-described fields (name, logo, foundingDate) and externally corroborated ones (sameAs, @id). The corroboration signals are what let Google confidently merge a page into one authoritative entity record, and they're usually the gap worth fixing first.",
    },
    {
      id: "entity-seo-stitch-fix-knowledge-graph-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Knowledge Graph Teardown: Diagnosing a Weak Entity Record",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two specimen snapshots of Stitch Fix's entity signals, find the real defects blocking Knowledge Panel and AI Overview visibility, without flagging cosmetic non-issues.",
      companyId: "stitch-fix",
      scenario:
        "You're a growth marketer at Stitch Fix investigating why a competitor's styling-subscription brand shows up in AI Overview answers about 'personal styling services' and Stitch Fix does not, despite ranking higher on-page.",
      brief:
        "Review the schema snapshot and the off-site mentions snapshot, then list every entity defect against a fixed answer key.",
      mode: "teardown",
      conceptsCovered: ["How Google Builds an Entity Record", "Step 4: Earn third-party co-citations"],
      skills: ["Entity SEO", "Knowledge Graph Diagnostics", "Competitive Entity Analysis"],
      keyQuestion: "What entity defects are blocking Stitch Fix from Knowledge Panel and AI Overview visibility that a higher-ranking competitor already has fixed?",
      prerequisites: [
        "Familiarity with Organization JSON-LD and the concept of sameAs corroboration",
      ],
      terminology: [
        { term: "Co-citation", definition: "an unstructured mention of a brand alongside category peers (in a roundup article or podcast), which Google weighs as corroboration alongside structured data." },
        { term: "Wikidata", definition: "a structured, machine-readable knowledge base Google triangulates against when building an entity record, distinct from Wikipedia's prose pages." },
      ],
      teardownItems: [
        {
          itemId: "stitch-fix-schema-snapshot",
          specimenSource: "synthetic-realistic",
          prompt: "Review this Organization JSON-LD snapshot pulled from Stitch Fix's homepage and /about page.",
          specimen:
            "=== HOMEPAGE JSON-LD ===\n" +
            "{\n" +
            '  "@type": "Organization",\n' +
            '  "name": "Stitch Fix",\n' +
            '  "url": "https://www.stitchfix.com"\n' +
            "}\n\n" +
            "=== /ABOUT PAGE JSON-LD ===\n" +
            "{\n" +
            '  "@type": "Organization",\n' +
            '  "name": "Stitch Fix, Inc.",\n' +
            '  "url": "https://www.stitchfix.com/about",\n' +
            '  "founder": "Katrina Lake"\n' +
            "}",
          answerKey: [
            {
              defect:
                "Two different Organization blocks defined on two different pages (homepage and /about), with no @id tying them together and slightly different name strings ('Stitch Fix' vs 'Stitch Fix, Inc.')",
              severity: "critical",
              whyItMatters:
                "Redefining Organization on multiple pages without a shared @id creates duplicate, competing entity signals instead of one entity Google can confidently merge, exactly the mistake the lesson's Step 1 callout warns against.",
              lessonRef: "How Google Builds an Entity Record",
              owner: "developer",
            },
            {
              defect:
                "The founder property lists 'Katrina Lake' as a plain string instead of a nested Person entity with her own sameAs links",
              severity: "moderate",
              whyItMatters:
                "A string value gives Google a name with no way to connect it to a corroborated Person entity, losing the founder-authority boost the lesson describes in Step 3.",
              lessonRef: "How Google Builds an Entity Record",
              owner: "developer",
            },
          ],
          distractors: [
            "The /about page URL includes '/about' as a path segment instead of being the root domain.",
            "The homepage JSON-LD block appears before the visible page content in the HTML source instead of after it.",
          ],
          partialCredit: true,
        },
        {
          itemId: "stitch-fix-off-site-mentions-snapshot",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review this snapshot of Stitch Fix's off-site presence compared to a competitor's, both in the 'personal styling subscription' space.",
          specimen:
            "=== STITCH FIX OFF-SITE SNAPSHOT ===\n" +
            "Wikidata: no item found\n" +
            "Wikipedia: page exists, last edited 2019\n" +
            "Podcast mentions (last 12 months): 2\n" +
            "Roundup articles ('best styling subscription services'): appears in 3 of 10 checked\n\n" +
            "=== COMPETITOR OFF-SITE SNAPSHOT ===\n" +
            "Wikidata: item exists, 14 properties filled\n" +
            "Wikipedia: page exists, last edited this year\n" +
            "Podcast mentions (last 12 months): 19\n" +
            "Roundup articles: appears in 9 of 10 checked",
          answerKey: [
            {
              defect: "No Wikidata item exists for Stitch Fix at all",
              severity: "critical",
              whyItMatters:
                "Wikidata is one of the three signal sources Google triangulates for entity records; with zero entry, Stitch Fix is missing an entire corroboration channel the competitor has fully populated.",
              lessonRef: "How Google Builds an Entity Record",
              owner: "either",
            },
            {
              defect:
                "Only 2 podcast mentions and 3 of 10 roundup appearances in the last 12 months, versus 19 and 9-of-10 for the competitor",
              severity: "critical",
              whyItMatters:
                "Co-citations are unstructured corroboration Google weighs alongside structured data; a large gap here means the competitor's brand shows up alongside category peers far more often, which is exactly the signal AI Overviews pull from.",
              lessonRef: "Step 4: Earn third-party co-citations",
              owner: "you",
            },
          ],
          distractors: [
            "Stitch Fix's Wikipedia page was last edited in 2019 rather than being deleted or flagged for removal.",
            "The competitor's Wikidata item has 14 properties filled rather than the maximum possible number of properties.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the side-by-side schema and off-site comparison",
            why: "Free, no account friction for a single comparison table",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Track unlinked brand mentions and co-citations over time via Content Explorer",
            why: "Paid tier needed for ongoing mention-volume tracking beyond a one-time manual check",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          'The teardown itself needs no paid tool, manual search-operator checks ("Brand Name" -site:brand.com) approximate the same off-site mention count Ahrefs automates.',
      },
      deliverable:
        "A defect log across both specimens, each entry tagged with severity and which entity-building concept it violates.",
      sampleOutput:
        "Rent the Runway entity defect log (excerpt)\n" +
        "  [CRITICAL] No Wikidata item found despite 8 years of press coverage -> How Google Builds an Entity Record\n" +
        "  [MODERATE] founder listed as plain string, not a linked Person entity -> How Google Builds an Entity Record",
      successCriteria: [
        "Correctly flags both critical defects (missing Wikidata item, low co-citation volume) across the two specimens",
        "Does not flag either distractor as a defect",
        "Ties each real defect to the correct lesson concept",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Entity consistency", detail: "Do all Organization blocks across pages share a single @id and identical name string?" },
        { label: "Structured vs. unstructured corroboration", detail: "Is the gap in schema (Wikidata, sameAs) or in off-site mentions (podcasts, roundups), or both?" },
        { label: "Magnitude of the gap", detail: "How large is the difference from the competitor's numbers, not just whether a gap exists?" },
        { label: "Distractor discipline", detail: "Is a cosmetic detail (URL path, HTML ordering, edit date alone) being mistaken for a structural defect?" },
      ],
      decision: {
        prompt:
          "Stitch Fix has no Wikidata item, 2 podcast mentions and 3-of-10 roundup appearances in 12 months, versus the competitor's fully populated Wikidata item, 19 podcast mentions, and 9-of-10 roundups. Which factor most directly explains why the competitor appears in AI Overview answers and Stitch Fix does not?",
        options: [
          { id: "a", label: "Stitch Fix ranks lower on-page for the target query", correct: false },
          { id: "b", label: "Stitch Fix is missing both structured (Wikidata) and unstructured (co-citation) corroboration signals the competitor has", correct: true },
          { id: "c", label: "Stitch Fix's Wikipedia page was last edited in 2019", correct: false },
          { id: "d", label: "The competitor's Wikidata item has more properties filled than the maximum needed", correct: false },
        ],
        explanation:
          "The scenario states Stitch Fix ranks higher on-page already, ruling out ranking as the explanation. The real gap is that Google and AI Overviews triangulate entity confidence from both structured data (Wikidata) and unstructured co-citations (podcasts, roundups), and Stitch Fix has neither at competitive volume; a stale-but-existing Wikipedia page or a competitor's property count aren't the deciding factors.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Unify the Organization JSON-LD across homepage and /about under one @id with a single consistent name string, and nest the founder as a linked Person entity. In parallel, create a Wikidata item, since Stitch Fix currently has none, and pursue placements in styling-subscription roundup articles and podcast mentions to close the co-citation gap versus the competitor's 19 mentions and 9-of-10 roundup presence.",
      },
      commonMistakes: [
        { mistake: "Treating two separately-defined Organization blocks as a minor duplication", explanation: "without a shared @id, this creates competing entity signals rather than one entity Google can confidently merge, a critical defect, not cosmetic." },
        { mistake: "Overlooking the founder as a plain string", explanation: "a string value gives Google a name with no way to connect it to a corroborated Person entity, losing the founder-authority boost." },
        { mistake: "Assuming ranking higher on-page should guarantee AI Overview visibility", explanation: "AI Overviews and Knowledge Panels draw on entity corroboration signals (Wikidata, co-citations) that are independent of on-page ranking strength." },
        { mistake: "Flagging the Wikipedia page's 2019 edit date as equivalent to having no Wikidata item", explanation: "an existing-but-stale Wikipedia page is a smaller gap than a completely missing Wikidata item, which is an entire missing corroboration channel." },
      ],
      keyTakeaway:
        "Entity strength comes from two separate channels: structured data (a unified Organization block with a stable @id and a populated Wikidata item) and unstructured co-citations (roundups, podcasts, press). A brand can out-rank a competitor on-page and still lose AI Overview visibility if either channel is significantly weaker.",
    },
  ],

  "content-clusters": [
    {
      id: "content-clusters-tbo-tek-archive-audit",
      tier: "mini",
      archetype: "audit",
      title: "Auditing TBO Tek's Blog Archive for Cluster Candidates",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a 16-post blog archive export with URL, current rank, and monthly traffic, group the posts into pillar/cluster candidates using the lesson's Step 2 (audit what exists) framework, then flag which posts are orphans that belong to no coherent cluster.",
      companyId: "tbo-tek",
      scenario:
        "You're the content marketer at TBO Tek, the B2B travel distribution platform serving 147,000+ travel agents worldwide. Eighteen months of ad-hoc blogging produced 16 posts with no cluster structure. Before your team writes a single new article this quarter, leadership wants to know how many real clusters already exist in that archive, and what's just noise.",
      brief:
        "Tag every post by the subtopic it actually addresses, group subtopics with enough posts into cluster candidates, and flag the orphans in writing.",
      mode: "diagnostic",
      conceptsCovered: ["Auditing existing content for cluster candidates before writing anything new"],
      skills: ["Content Auditing", "Topic Clustering", "Editorial Planning"],
      keyQuestion: "How many real content clusters already exist buried in this archive, and which posts are orphans with no cluster fit?",
      prerequisites: [
        "Basic spreadsheet sorting and grouping",
      ],
      terminology: [
        { term: "Cluster candidate", definition: "a subtopic with enough existing posts (3 or more) to be retrofitted into a pillar-and-cluster structure, rather than requiring brand-new content." },
        { term: "Orphan post", definition: "a post whose subtopic has no siblings in the archive, and therefore doesn't belong to any coherent cluster." },
      ],
      steps: [
        {
          stepId: "step-1-audit-existing-archive",
          concept: "Auditing existing content for cluster candidates before writing anything new",
          lessonAnchor: "step-2-audit-what-you-already-have",
          theoryRecap:
            "The lesson's Step 2 says most sites already have the raw material for 2-3 clusters buried in old posts, and retrofitting existing content into clusters often delivers faster gains than publishing brand-new articles.",
          question:
            "Sixteen posts, no structure. Which subtopics already have enough posts to call a cluster, and which posts are orphans with no siblings at all?",
          toolName: "Google Sheets",
          where: "Import the blog archive export, add a 'subtopic tag' column, then sort and group by that tag.",
          procedure: [
            "Import the 16-row export into Sheets and freeze the header row",
            "Read each title and tag it with the broad subtopic it addresses (API integration, agent onboarding, distribution pricing, etc.)",
            "Sort by the tag column and count how many posts share each tag",
            "Mark any tag with 3+ posts as a cluster candidate; mark any tag with exactly 1 post as an orphan",
          ],
          outputSample:
            "TBO Tek blog archive audit (16 posts)\n\n" +
            "TAG: API integration (5 posts) -> CLUSTER CANDIDATE\n" +
            "  How to Connect Your Booking Engine to a Travel API\n" +
            "  API Rate Limits Explained for Travel Agents\n" +
            "  Sandbox vs. Production: Testing Your TBO Integration\n" +
            "  3 Common API Integration Errors and How to Fix Them\n" +
            "  Webhooks vs. Polling for Real-Time Inventory Updates\n\n" +
            "TAG: agent onboarding (4 posts) -> CLUSTER CANDIDATE\n" +
            "  Getting Started as a TBO Travel Agent Partner\n" +
            "  Agent Verification: What Documents You'll Need\n" +
            "  Your First 30 Days on the TBO Platform\n" +
            "  How Agent Tiers and Commission Structures Work\n\n" +
            "TAG: distribution pricing (3 posts) -> CLUSTER CANDIDATE\n" +
            "  Net Rate vs. Markup: A Quick Primer\n" +
            "  Currency Conversion Fees, Explained\n" +
            "  Dynamic Pricing in B2B Travel Distribution\n\n" +
            "ORPHANS (1 post each, no cluster): 'TBO Tek Wins Travel Innovation Award',\n" +
            "'Our Office Holiday Schedule', 'Meet the Team: Engineering Spotlight',\n" +
            "'5 Travel Documentaries Worth Watching', 'A Note on Our New Logo'",
          healthy:
            "Two clear cluster candidates (API integration, agent onboarding) go into this quarter's content brief; the pricing tag needs 2-3 more posts before it's a full cluster; the 5 orphans get left alone, not retrofitted into a cluster they don't belong to.",
          unhealthy:
            "Forcing the 5 orphan posts into the nearest cluster just to make the numbers look tidier, or starting new clusters from scratch while ignoring the 5 posts already sitting one subtopic away from being one.",
          interpret:
            "A subtopic with 3+ existing posts is a retrofit opportunity, not a blank page. The orphans aren't failures, they're just posts that were never meant to be part of a cluster (an award announcement has no cluster to join).",
          soWhat: [
            {
              symptom: "Leadership wants a content calendar for next quarter and assumes everything starts from zero",
              action: "Show the audit table first, retrofit the API integration and agent onboarding tags into pillar-cluster structures before commissioning new articles",
              effort: "30 min",
            },
            {
              symptom: "The pricing tag has only 3 posts, barely a cluster",
              action: "Brief 2-3 new articles to round it out (e.g. 'How Multi-Currency Settlement Works') before calling it done",
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
            role: "Import the archive export and tag/group posts by subtopic",
            why: "Free, no account friction, sufficient for a 16-row sort-and-group exercise",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Confirm which of the tagged posts are actually getting impressions before prioritizing a retrofit",
            why: "Free, shows real search demand rather than guessing which cluster to build first",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This audit is fully completable on the free path. A paid crawler only earns its keep once the archive is in the hundreds of posts, not 16.",
      },
      deliverable:
        "A tagged archive sheet plus a one-paragraph recommendation: which 2 subtopics to retrofit into clusters this quarter, and which posts to leave alone.",
      sampleOutput:
        "YETI blog archive audit (excerpt)\n\n" +
        "TAG: cooler care (4 posts) -> CLUSTER CANDIDATE, recommend retrofit first\n" +
        "TAG: campfire cooking (3 posts) -> CLUSTER CANDIDATE, needs 1-2 more posts\n" +
        "ORPHANS: 'YETI Ambassador Spotlight: Q3', 'Our New Colorway Drop' -> leave alone, no cluster fit",
      successCriteria: [
        "Correctly tags all 16 posts by subtopic",
        "Identifies exactly the 2 tags with 3+ posts as cluster candidates",
        "Does not force the 5 single-post orphans into an artificial cluster",
      ],
      portfolioReady: true,
      stretch:
        "Pull a real Search Console export for a blog you have access to and run this same tag-and-count audit against it.",
      whatToLookFor: [
        { label: "Subtopic consistency", detail: "Does each post's tag reflect what it actually covers, not just a keyword in the title?" },
        { label: "Cluster threshold", detail: "Does a subtopic have 3 or more posts, the minimum to call it a cluster candidate?" },
        { label: "Genuine orphans", detail: "Is a single-post subtopic really unrelated to every other post, or does it belong to a cluster that just needs a different tag?" },
        { label: "Retrofit vs. new content", detail: "Can the cluster be built from what already exists, or does it need 2-3 new posts to round it out?" },
      ],
      decision: {
        prompt:
          "The archive audit shows API integration (5 posts), agent onboarding (4 posts), distribution pricing (3 posts), and 5 single-post orphans (an award announcement, an office holiday note, etc.). What should this quarter's content plan prioritize?",
        options: [
          { id: "a", label: "Write brand-new pillar pages for all subtopics, ignoring the existing 16 posts", correct: false },
          { id: "b", label: "Retrofit the API integration and agent onboarding tags into pillar-cluster structures first, since they already have enough posts", correct: true },
          { id: "c", label: "Force the 5 orphan posts into the nearest cluster to make the numbers look complete", correct: false },
          { id: "d", label: "Wait until all tags reach 5+ posts before building any cluster", correct: false },
        ],
        explanation:
          "The two tags with 3+ posts already are retrofit opportunities that deliver faster gains than starting from a blank page, exactly what the lesson's Step 2 recommends checking first. Writing everything from scratch ignores existing raw material, forcing orphans into a cluster they don't belong to dilutes topical coherence, and waiting for an arbitrary higher post count delays action for no real benefit.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Retrofit the API integration (5 posts) and agent onboarding (4 posts) subtopics into pillar-and-cluster structures this quarter, since both already clear the 3-post cluster threshold. Brief 2-3 additional articles for the distribution pricing subtopic to round it out to a full cluster, and leave the 5 single-post orphans alone rather than forcing them into a cluster they don't fit.",
      },
      commonMistakes: [
        { mistake: "Treating every existing post as needing a new cluster written around it", explanation: "the lesson's Step 2 point is that most of the raw material already exists; auditing first avoids commissioning duplicate content." },
        { mistake: "Forcing orphan posts into the nearest cluster tag", explanation: "an award announcement or office holiday post has no genuine subtopic overlap with a cluster; forcing the fit signals scattered, not authoritative, coverage." },
        { mistake: "Ignoring a 3-post tag because it's not yet a large cluster", explanation: "3 posts already clears the cluster-candidate threshold; treating it as too small to matter misses a fast retrofit opportunity." },
      ],
      keyTakeaway:
        "Before commissioning new content, audit what already exists: most archives already contain the raw material for 2-3 real clusters. Tagging and grouping by subtopic surfaces genuine retrofit opportunities and keeps true orphans from being force-fit into clusters they don't belong to.",
    },
    {
      id: "content-clusters-nubank-pillar-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Is This Actually a Pillar Page?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given two draft 'pillar page' outlines, identify which structural defects (per the lesson's Common Mistakes) disqualify them from being real pillar pages, without flagging normal editorial choices as defects.",
      companyId: "nubank",
      scenario:
        "Nubank's content team drafted two 'pillar pages' for its financial-education blog, the same content arm that turns demystifying Brazil's confusing banking fees into a growth engine. Before either ships, you're asked to check both drafts against the lesson's own definition of what a real pillar page is.",
      brief:
        "Review both outlines against the pillar-page definition and the lesson's two named Common Mistakes. Flag genuine structural defects; do not flag normal formatting or length choices as problems.",
      mode: "teardown",
      conceptsCovered: [
        "Building clusters around audience questions, not products",
        "Internal linking as the load-bearing structure of a cluster",
      ],
      skills: ["Content Auditing", "Editorial Review", "Content Cluster Strategy"],
      keyQuestion: "Which structural defects actually disqualify these drafts from being real pillar pages, versus normal editorial choices?",
      prerequisites: [
        "Familiarity with the pillar-and-cluster content model",
      ],
      terminology: [
        { term: "Pillar page", definition: "a comprehensive page (typically 3,000-5,000 words) that introduces every subtopic of a broad question and links out to a dedicated cluster article for each one." },
      ],
      teardownItems: [
        {
          itemId: "nubank-product-page-disguise",
          specimenSource: "synthetic-realistic",
          prompt:
            "Draft 1 is titled 'Nu Business Banking Features' and was submitted as the pillar page for a new small-business content cluster. Review its outline against the lesson's definition of a pillar page.",
          specimen:
            "=== DRAFT 1 OUTLINE: 'Nu Business Banking Features' (820 words) ===\n" +
            "H1: Nu Business Banking Features\n" +
            "H2: Zero monthly fees on your business account\n" +
            "H2: Instant Pix transfers for your business\n" +
            "H2: Free business debit card\n" +
            "H2: 24/7 in-app support\n" +
            "H2: Sign up in under 10 minutes\n" +
            "[No links to any other blog content. No mention of clusters, subtopics, or\n" +
            "further reading. Page ends with a 'Sign Up Now' button.]",
          answerKey: [
            {
              defect: "The page is a product-features page, not a pillar page: every H2 sells a feature instead of answering a question a business owner would search before ever hearing of Nubank",
              severity: "critical",
              whyItMatters: "A pillar page must have standalone value to a reader who has never heard of the brand. A features list has zero value to someone who isn't already a customer, so it won't attract links or rank for informational searches, which defeats the entire purpose of building a cluster around it.",
              lessonRef: "Common Mistakes: Building clusters around your products, not your audience's questions",
              owner: "you",
            },
            {
              defect: "At 820 words with no links to cluster content, it cannot function as a hub even if the topic were reframed",
              severity: "moderate",
              whyItMatters: "The lesson's target for a pillar page is 3,000-5,000 words introducing every subtopic and linking out to its cluster article. An 820-word page with zero outbound links has nothing for a cluster to attach to.",
              lessonRef: "Step 4, Write the pillar page first: length target 3,000-5,000 words, one H2 per subtopic linking to its cluster article",
              owner: "you",
            },
          ],
          distractors: [
            "The page ends with a 'Sign Up Now' call-to-action button.",
            "The H2 headings are written as short noun phrases rather than full questions.",
          ],
          partialCredit: true,
        },
        {
          itemId: "nubank-unlinked-cluster",
          specimenSource: "synthetic-realistic",
          prompt:
            "Draft 2 is a genuine pillar page, 'How Credit Scores Work in Brazil' (3,400 words), alongside a list of 9 cluster articles the team says are 'ready to publish.' Review the linking plan and the article list.",
          specimen:
            "=== DRAFT 2: PILLAR PAGE ===\n" +
            "Title: How Credit Scores Work in Brazil (3,400 words)\n" +
            "Structure: 9 H2 sections, one per subtopic, each 250-400 words, no outbound\n" +
            "links included in the draft ('links will be added after all 9 cluster\n" +
            "articles are live,' per the editor's note).\n\n" +
            "=== CLUSTER ARTICLE LIST (9 articles) ===\n" +
            "1. What Is a Credit Score and Why It Matters\n" +
            "2. How Payment History Affects Your Score\n" +
            "3. Credit Utilization: What It Means and How to Lower It\n" +
            "4. How to Check Your Credit Score for Free in Brazil\n" +
            "5. Common Credit Score Myths, Debunked\n" +
            "6. How Long Negative Marks Stay on Your Record\n" +
            "7. Building Credit From Zero: A Beginner's Guide\n" +
            "8. Nubank Q3 2025 Earnings Highlights\n" +
            "9. How Joint Accounts Affect Your Credit Score",
          answerKey: [
            {
              defect: "The pillar page ships with zero outbound links, 'add links later' means the pillar and its clusters are two disconnected sets of pages until someone remembers to go back and link them",
              severity: "critical",
              whyItMatters: "The lesson is explicit that internal links are the entire value of a cluster: without them, Google cannot understand how the pages relate, and link authority earned by a cluster article never flows to the pillar.",
              lessonRef: "Common Mistakes: Publishing the content but skipping the internal links",
              owner: "developer",
            },
            {
              defect: "Article 8, 'Nubank Q3 2025 Earnings Highlights,' does not belong in this cluster: it answers no question a reader researching credit scores would ever ask",
              severity: "moderate",
              whyItMatters: "A cluster proves topical depth by covering every real subtopic of one question. An unrelated corporate-news post diluting the cluster signals scattered, not authoritative, coverage to Google.",
              lessonRef: "Common Mistakes: Building clusters around your products, not your audience's questions",
              owner: "you",
            },
          ],
          distractors: [
            "The 9 cluster articles range from 250-400 words each within the pillar's own sections.",
            "The article list has 9 entries, within the lesson's recommended 8-22 range.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track each draft's defects and severity in a shared review sheet",
            why: "Free, easy to share with the editor who owns the fix",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote: "This teardown is a structural read of two outlines; no paid tool is needed to complete it.",
      },
      deliverable: "A completed review sheet marking every defect, its severity, and which non-issues were correctly left unflagged.",
      sampleOutput:
        "=== PILLAR PAGE REVIEW: BLUE APRON RECIPE HUB (illustrative) ===\n\n" +
        "DRAFT REVIEWED: 'Blue Apron Meal Kit Benefits' (pillar candidate)\n" +
        "DEFECT: Product-features framing, not an audience question, severity: critical\n" +
        "DEFECT: No outbound links to any cluster article, severity: critical\n" +
        "NON-DEFECT (correctly not flagged): Page includes 3 customer testimonial quotes",
      successCriteria: [
        "Identifies the product-page framing defect in Draft 1",
        "Identifies the missing-internal-links defect in Draft 2",
        "Identifies the off-topic cluster article (Q3 earnings) in Draft 2",
        "Does not flag either distractor in either item as a defect",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Audience question vs. product feature", detail: "Does each H2 answer a question a reader would search, or sell a product feature?" },
        { label: "Standalone value", detail: "Would the page have value to someone who has never heard of the brand?" },
        { label: "Link presence, not just plan", detail: "Are the outbound links actually in the draft, or deferred to 'add later'?" },
        { label: "Topical fit", detail: "Does every cluster article answer a real subtopic of the pillar's question, with nothing off-topic mixed in?" },
      ],
      decision: {
        prompt:
          "Draft 2's pillar page ships with zero outbound links because 'links will be added after all 9 cluster articles are live.' What's the actual consequence of this plan?",
        options: [
          { id: "a", label: "None, since the links will exist eventually once all articles are published", correct: false },
          { id: "b", label: "The pillar and its clusters function as disconnected pages until someone manually adds the links, and link authority can't flow between them until then", correct: true },
          { id: "c", label: "It's fine because Google can infer the relationship from the shared topic without explicit links", correct: false },
          { id: "d", label: "Only the pillar page is affected; the cluster articles work normally", correct: false },
        ],
        explanation:
          "The lesson is explicit that internal links are the entire value of a cluster: without them, Google cannot understand how the pages relate, and link authority earned by cluster articles never flows to the pillar. 'Add links later' is a real defect, not a scheduling detail, because it leaves both the pillar and the cluster underperforming until someone remembers to close the loop, and topical proximity alone does not substitute for an actual link.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Reject Draft 1 as a product-features page in pillar-page disguise, it needs to be reframed around a real audience question and expanded to 3,000-5,000 words with links to genuine cluster content before it can serve as a pillar. Hold Draft 2 from publishing until the outbound links to all 9 cluster articles are actually in place, not deferred, and remove Article 8 (Q3 earnings) from the cluster since it answers no question a credit-score researcher would ask.",
      },
      commonMistakes: [
        { mistake: "Approving a page as a pillar because it's long and well-organized", explanation: "structure and length alone don't make a pillar page; every H2 needs to answer an audience question, not sell a feature." },
        { mistake: "Accepting 'links will be added later' as an acceptable publishing plan", explanation: "internal links are the load-bearing structure of a cluster; a pillar with no links is functionally disconnected from its cluster until the links exist." },
        { mistake: "Missing an off-topic article buried in an otherwise-relevant list", explanation: "one unrelated article (like a corporate earnings post) dilutes topical depth and signals scattered coverage, even if the other 8 articles are correct." },
        { mistake: "Flagging a CTA button or word-count-per-section as a defect", explanation: "these are the distractors in both items; a call-to-action or per-section length choice is a normal editorial decision, not a structural disqualifier." },
      ],
      keyTakeaway:
        "A real pillar page has standalone value to a reader who's never heard of the brand and ships with its internal links already in place, not planned for later. Reviewing a draft against this definition, rather than its polish or length, is what separates a genuine cluster hub from a features page or an unlinked set of articles.",
    },
  ],
  "zero-click-search": [
    {
      id: "zero-click-search-yeti-serp-feature-audit",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "Reverse-Engineering Which SERP Feature Is Eating YETI's Clicks",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a 12-keyword Search Console export with impressions, clicks, and CTR, identify which queries show the high-impressions/low-CTR signature of a zero-click SERP feature, and infer which feature is most likely intercepting each one.",
      companyId: "yeti",
      scenario:
        "You're the SEO analyst at YETI, the outdoor gear and coolers brand known for its 'YETI Presents' documentary-style content over discounting. Your informational how-to guides (ice retention tips, campfire cooking) rank well but traffic feels flat. Search Console has the answer, if you know what to look for.",
      brief:
        "Sort the export by the impressions-to-CTR gap, flag the queries most likely being intercepted by a SERP feature, and name which feature type each one probably faces.",
      mode: "diagnostic",
      conceptsCovered: ["Identifying zero-click risk using the impressions-high/CTR-low signal"],
      skills: ["Zero-Click Search Analysis", "Search Console Auditing", "SERP Feature Diagnosis"],
      keyQuestion: "Which queries are losing clicks to a SERP feature rather than a ranking problem, and which SERP feature is most likely intercepting each?",
      prerequisites: [
        "Basic familiarity with Google Search Console's Performance report",
      ],
      terminology: [
        { term: "Zero-click search", definition: "a search where the user gets their answer directly on the results page (via a featured snippet, AI Overview, or similar feature) without clicking through to any website." },
        { term: "Impressions-high/CTR-low signature", definition: "a query pattern where a page appears frequently in search results but rarely gets clicked, almost always signaling a SERP feature is intercepting the click, not a ranking problem." },
      ],
      steps: [
        {
          stepId: "step-1-serp-feature-audit",
          concept: "Identifying zero-click risk using the impressions-high/CTR-low signal",
          lessonAnchor: "step-1-identify-which-queries-are-zero-click-risks",
          theoryRecap:
            "The lesson's Step 1 says to find keywords where impressions are high but CTR is under 1%, that gap almost always signals a SERP feature is intercepting the click, and different feature types (AI Overview, featured snippet, PAA, local pack) carry different typical zero-click rates.",
          question:
            "Of these 12 queries, which ones show the impressions-high/CTR-low signature, and which SERP feature is each one most likely facing given its query phrasing?",
          toolName: "Google Search Console",
          where: "Performance report, Queries tab, sorted by impressions descending with a CTR column visible.",
          procedure: [
            "Export the 12-row query list with impressions, clicks, and CTR",
            "Sort by impressions descending and scan the CTR column for anything under 1%",
            "For each flagged query, read its phrasing to infer the likely SERP feature (a 'how long does X last' phrasing suggests a direct answer box; a 'best way to X' phrasing suggests a featured snippet or AI Overview)",
            "List the flagged queries with their inferred feature and estimated zero-click rate from the lesson's table",
          ],
          outputSample:
            "YETI Search Console export (12 queries, excerpt)\n\n" +
            "how long does ice last in a yeti cooler       14,200 impr   62 clicks   CTR 0.44%  -> FLAG\n" +
            "  Inferred feature: Direct answer box (~100% zero-click per lesson table)\n\n" +
            "best way to organize a cooler for camping      9,800 impr   340 clicks  CTR 3.47%  -> not flagged\n\n" +
            "what temperature does dry ice freeze at         8,600 impr   51 clicks   CTR 0.59%  -> FLAG\n" +
            "  Inferred feature: Direct answer box / AI Overview (~83-100% zero-click)\n\n" +
            "yeti tundra 45 vs 65 comparison                 3,100 impr   290 clicks  CTR 9.35%  -> not flagged\n" +
            "  (transactional/comparison intent, still converts per the lesson's Step 3)",
          healthy:
            "The two flagged queries ('how long does ice last', 'what temperature does dry ice freeze') get rewritten as snippet-bait content or accepted as brand-impression-only wins; the comparison query gets protected and invested in further because it still converts.",
          unhealthy:
            "Treating all 12 queries the same and pouring effort into 'improving rankings' for the direct-answer-box queries, when the real problem isn't rank, it's that no rank fixes a 100% zero-click feature.",
          interpret:
            "A CTR under 1% at high impressions is not a ranking problem, it's a SERP-feature-interception problem. The fix is different: snippet-bait content and accepting the brand impression, not chasing position 1.",
          soWhat: [
            {
              symptom: "Two how-to queries have huge impressions but almost no clicks",
              action: "Stop trying to 'improve rankings' on these; rewrite the opening paragraph as a 40-60 word direct answer instead, per Step 2",
              effort: "30 min",
            },
            {
              symptom: "Leadership is only looking at total sessions and thinks the blog is failing",
              action: "Show them the impressions-vs-clicks split so the SERP-feature explanation, not 'bad content,' gets the credit for the gap",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Pull the impressions/clicks/CTR export that reveals the zero-click gap",
            why: "Free, official, the only tool that shows this exact impressions-vs-clicks relationship per query",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Sheets",
            role: "Sort and annotate the export with inferred SERP feature per query",
            why: "Free, sufficient for a 12-row sort",
            required: true,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "SEMrush or Ahrefs Position Tracking can show the actual SERP feature per keyword instead of inferring it from phrasing, worth it once you're auditing hundreds of queries instead of 12.",
      },
      deliverable: "A flagged query list with inferred SERP feature per query and a one-line recommendation for each flag.",
      sampleOutput:
        "Blue Apron Search Console audit (illustrative excerpt)\n\n" +
        "how long to marinate chicken thighs   11,400 impr   58 clicks   CTR 0.51%  -> FLAG\n" +
        "  Inferred feature: Direct answer box, recommend snippet-bait rewrite",
      successCriteria: [
        "Correctly flags both queries with CTR under 1% at high impressions",
        "Does not flag the comparison query, which has a healthy CTR",
        "Assigns a plausible SERP feature to each flagged query based on its phrasing",
      ],
      portfolioReady: true,
      stretch: "Pull your own Search Console export and run the same impressions-vs-CTR scan against real data.",
      whatToLookFor: [
        { label: "CTR threshold", detail: "Is CTR under roughly 1% while impressions are high, the specific signature of SERP-feature interception?" },
        { label: "Query phrasing", detail: "Does the query's phrasing suggest a direct answer box, featured snippet, or AI Overview is likely being triggered?" },
        { label: "Intent match", detail: "Is the query informational (at risk of zero-click) or transactional/comparison (less likely to be intercepted)?" },
        { label: "Business impact", detail: "Does the flagged query represent enough impression volume to be worth acting on?" },
      ],
      decision: {
        prompt:
          "Two queries show CTR under 1% at high impressions ('how long does ice last', 'what temperature does dry ice freeze'), while 'yeti tundra 45 vs 65 comparison' has a healthy 9.35% CTR. What should the team do differently for the comparison query versus the two flagged ones?",
        options: [
          { id: "a", label: "Treat all three the same and try to improve rankings for each", correct: false },
          { id: "b", label: "Rewrite the two flagged queries as snippet-bait content, and protect and invest further in the comparison query since it still converts", correct: true },
          { id: "c", label: "Deprioritize the comparison query since its impressions are lower", correct: false },
          { id: "d", label: "Assume the two flagged queries have a content-quality problem and rewrite the entire guide from scratch", correct: false },
        ],
        explanation:
          "The comparison query's high CTR shows it isn't being intercepted by a zero-click feature, so it deserves continued investment, not deprioritization based on impression count alone. The two flagged queries have a SERP-feature-interception problem, not a content-quality or ranking problem, so the fix is a targeted snippet-bait rewrite of the answer, not a full rewrite or an attempt to 'rank higher' for a query already at position one against a 100% zero-click feature.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Rewrite the opening paragraphs of the two flagged how-to queries as 40-60 word direct answers per the lesson's Step 2, since no ranking improvement will fix a direct-answer-box interception. Leave the comparison query's content as-is and continue investing in it, its 9.35% CTR confirms it converts and is not being intercepted by a zero-click feature.",
      },
      commonMistakes: [
        { mistake: "Treating a low CTR as a ranking problem and trying to 'improve position'", explanation: "position 1 with a 100% zero-click feature still yields near-zero clicks; the fix is content restructuring, not rank chasing." },
        { mistake: "Flagging the comparison query because its impressions are lower than the informational ones", explanation: "CTR, not raw impressions, is the signal that matters here; the comparison query's healthy CTR means it isn't being intercepted." },
        { mistake: "Guessing the SERP feature without checking query phrasing", explanation: "a 'how long does X last' phrasing suggests a direct answer box while a 'best way to X' suggests a snippet or AI Overview; matching phrasing to feature type keeps the inference grounded, not arbitrary." },
      ],
      keyTakeaway:
        "A high-impressions, low-CTR query is a SERP-feature-interception problem, not a ranking problem, and needs a different fix: rewriting the answer to be snippet-bait, or accepting the brand impression. Queries with healthy CTR at any impression volume should be protected and invested in, not lumped in with the zero-click queries.",
    },
    {
      id: "zero-click-search-blue-apron-snippet-bait-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Snippet-Bait Recipe FAQ for Blue Apron",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a rambling recipe-guide introduction, rewrite it as a 40-60 word snippet-bait answer and add the correct schema type, producing a portfolio-ready before/after pair that follows the lesson's Step 2 and Step 3 exactly.",
      companyId: "blue-apron",
      scenario:
        "You're a content writer at Blue Apron, the meal-kit company whose recipe cards live or die on how quickly a cook can get an answer mid-recipe. Your 'How Long to Cook Chicken Thighs' guide ranks on page one but shows the impressions-high/CTR-low signature of a lost featured snippet. It needs a rewrite, not a ranking fix.",
      brief:
        "Rewrite the opening as direct snippet-bait, then add the FAQPage schema markup that makes the rewritten Q&A eligible for a featured snippet and AI Overview citation.",
      mode: "build",
      conceptsCovered: [
        "Writing a 40-60 word snippet-bait answer",
        "Adding FAQPage schema to make an answer machine-extractable",
      ],
      skills: ["Snippet-Bait Writing", "FAQPage Schema Markup", "Zero-Click Search Optimization"],
      keyQuestion: "How do you rewrite an existing page's opening into a machine-extractable direct answer, and mark it up so Google can reliably parse it?",
      prerequisites: [
        "Basic JSON syntax familiarity",
      ],
      terminology: [
        { term: "Snippet-bait", definition: "a concise 40-60 word direct answer placed immediately below a question heading, with no preamble, written specifically to be the block Google extracts into featured snippets and AI Overviews." },
        { term: "FAQPage schema", definition: "a JSON-LD structured data type that labels visible question-and-answer content so search engines can parse it reliably; its text must match the visible page exactly." },
      ],
      steps: [
        {
          stepId: "step-1-snippet-bait-rewrite",
          concept: "Writing a 40-60 word snippet-bait answer",
          lessonAnchor: "step-2-write-snippet-bait-paragraphs",
          theoryRecap:
            "The lesson's Step 2 says every informational page needs a concise 40-60 word direct answer immediately below the question heading, with no preamble, because that is the block Google extracts into featured snippets and AI Overviews.",
          question:
            "The current opening is 94 words of scene-setting before it ever answers the question. Rewrite it as a single 40-60 word direct answer.",
          toolName: "Google Sheets",
          where: "A before/after doc, original paragraph in column A, rewritten answer in column B with a live word count.",
          procedure: [
            "Paste the current 94-word opening paragraph into column A",
            "Identify the actual answer buried in sentence 3 ('bake at 425°F for 22-25 minutes')",
            "Rewrite it as a direct answer in the first sentence, add one supporting data point, and stop",
            "Count words in the rewrite and trim until it lands in the 40-60 word range",
          ],
          outputSample:
            "BEFORE (94 words):\n" +
            "'Chicken thighs are one of our most requested proteins here at Blue Apron, and\n" +
            "for good reason, they're forgiving, flavorful, and hard to overcook compared to\n" +
            "chicken breast. In this guide we'll walk you through everything you need to know\n" +
            "about getting perfectly cooked chicken thighs every time, whether you're baking,\n" +
            "grilling, or pan-searing, so let's dive in and explore the many ways...'\n\n" +
            "AFTER (52 words):\n" +
            "'Bake bone-in chicken thighs at 425°F for 22-25 minutes, or until internal\n" +
            "temperature reaches 165°F. Boneless thighs cook faster, 18-20 minutes at the same\n" +
            "temperature. Let them rest 3 minutes before serving. This method works for both\n" +
            "oven-baked and sheet-pan chicken thigh recipes.'",
          healthy:
            "The rewritten paragraph answers the question in sentence one, includes the specific temperature and time, and stays under 60 words with zero preamble.",
          unhealthy:
            "Keeping the brand-voice intro sentence ('Chicken thighs are one of our most requested proteins...') above the answer, which is exactly the preamble the lesson's Step 2 says to cut.",
          interpret:
            "Google and AI Overviews extract the first clear answer block they find. A 94-word preamble means a competitor's 52-word direct answer gets extracted instead, even if your recipe is better.",
          soWhat: [
            {
              symptom: "A recipe guide ranks page one but gets almost no clicks",
              action: "Move the direct answer to sentence one, keep the brand-voice intro but push it below the answer",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-faq-schema-markup",
          concept: "Adding FAQPage schema to make an answer machine-extractable",
          lessonAnchor: "step-3-add-schema-markup",
          theoryRecap:
            "The lesson's Step 3 says FAQPage schema tells Google explicitly what your content is about for question-and-answer content, and that Yoast, RankMath, and Schema Pro can generate it without hand-coding.",
          question:
            "Given the rewritten 52-word answer from Step 1, write the FAQPage JSON-LD block that wraps it correctly.",
          toolName: "Google Sheets",
          where: "A plain-text JSON-LD block, drafted by hand then validated before it goes to a developer to implement.",
          procedure: [
            "Take the exact question as it appears in the H2 ('How Long to Cook Chicken Thighs?')",
            "Take the exact 52-word rewritten answer from Step 1 as the acceptedAnswer text",
            "Wrap both in a minimal FAQPage JSON-LD block with @context and @type set correctly",
            "Hand the block to a developer to implement, or validate it with Google's Rich Results Test before shipping",
          ],
          outputSample:
            '{\n' +
            '  "@context": "https://schema.org",\n' +
            '  "@type": "FAQPage",\n' +
            '  "mainEntity": [{\n' +
            '    "@type": "Question",\n' +
            '    "name": "How Long to Cook Chicken Thighs?",\n' +
            '    "acceptedAnswer": {\n' +
            '      "@type": "Answer",\n' +
            '      "text": "Bake bone-in chicken thighs at 425F for 22-25 minutes, or until internal temperature reaches 165F. Boneless thighs cook faster, 18-20 minutes at the same temperature. Let them rest 3 minutes before serving."\n' +
            '    }\n' +
            '  }]\n' +
            '}',
          healthy:
            "The schema's question text matches the visible H2 exactly, and the answer text matches the visible rewritten paragraph exactly, word for word.",
          unhealthy:
            "Writing schema markup that says something different from what's visible on the page, Google's guidelines treat mismatched schema as a spam signal and can disqualify the page from rich results entirely.",
          interpret:
            "Schema doesn't add new information, it labels information that's already visible so machines can parse it reliably. Mismatched schema is worse than no schema.",
          soWhat: [
            {
              symptom: "A developer says schema markup 'doesn't seem to do anything'",
              action: "Validate the exact page URL in Google's Rich Results Test before concluding it's not working; most failures are a text mismatch, not a missing feature",
              effort: "5 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Draft the before/after rewrite and the JSON-LD block before handoff",
            why: "Free, keeps the rewrite and the schema draft in one reviewable place",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Search Console",
            role: "Confirm which recipe pages already show the zero-click impressions-high/CTR-low pattern worth rewriting first",
            why: "Free, prioritizes which of dozens of recipe guides to rewrite first instead of guessing",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Surfer SEO",
            role: "Score the rewritten answer against top-ranking snippet competitors before publishing",
            why: "Speeds up iterating on word count and phrasing at scale once you're rewriting dozens of pages, not one",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "This project is fully completable on the free path. Surfer SEO only earns its cost once you're rewriting recipe guides by the dozen instead of one at a time.",
      },
      deliverable:
        "A before/after rewrite pair (94-word original vs. 40-60 word snippet-bait answer) plus a validated FAQPage JSON-LD block ready for developer handoff.",
      sampleOutput:
        "YETI cooler-care FAQ rewrite (illustrative)\n\n" +
        "BEFORE (88 words): long brand-voice intro before the actual ice-retention answer\n" +
        "AFTER (48 words): 'A YETI Tundra cooler keeps ice frozen for 4-6 days at 90°F\n" +
        "ambient temperature with a 2:1 ice-to-contents ratio. Pre-chilling the cooler for 30\n" +
        "minutes before packing extends retention by roughly 1 additional day.'\n\n" +
        "FAQPage schema: question and answer text match the visible page exactly.",
      successCriteria: [
        "Rewritten answer lands within the 40-60 word range",
        "The direct answer appears in sentence one, with no preamble above it",
        "The FAQPage schema's question and answer text match the visible page content exactly, word for word",
      ],
      portfolioReady: true,
      stretch: "Rewrite 3 more recipe-guide openings from the same site using this exact before/after process, then batch-validate all 4 schema blocks in Google's Rich Results Test.",
      whatToLookFor: [
        { label: "Answer position", detail: "Does the direct answer appear in sentence one, with zero preamble above it?" },
        { label: "Word count discipline", detail: "Does the rewritten answer land within the 40-60 word range, not just 'shorter than before'?" },
        { label: "Schema-content match", detail: "Does the FAQPage schema's question and answer text match the visible page exactly, word for word?" },
        { label: "Specificity retained", detail: "Does the rewrite keep the concrete numbers (temperature, time) that made the original answer useful?" },
      ],
      decision: {
        prompt:
          "The rewritten answer is complete and the FAQPage schema is drafted. Before handoff to a developer, what's the most important check to run?",
        options: [
          { id: "a", label: "Confirm the schema's question and answer text match the visible page content exactly, word for word", correct: true },
          { id: "b", label: "Confirm the schema uses as many additional properties as possible for richness", correct: false },
          { id: "c", label: "Confirm the rewritten answer is under 40 words to be as concise as possible", correct: false },
          { id: "d", label: "Confirm the brand-voice intro sentence is deleted entirely rather than moved", correct: false },
        ],
        explanation:
          "Google's guidelines treat mismatched schema (text in the markup that differs from what's visible on the page) as a spam signal that can disqualify the page from rich results entirely, making this the single most important check. Extra unrelated schema properties don't help and can add noise, going under the 40-word floor risks losing necessary specificity, and the brand-voice intro doesn't need to be deleted, just moved below the answer per the lesson's Step 2.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Ship the rewritten 40-60 word direct answer with the brand-voice intro moved below it, not deleted, and hand off the FAQPage JSON-LD block to a developer only after validating in Google's Rich Results Test that the schema's question and answer text match the visible page exactly. A text mismatch is the most common reason this kind of schema silently fails to produce rich results.",
      },
      commonMistakes: [
        { mistake: "Leaving the brand-voice intro sentence above the rewritten answer", explanation: "any preamble above the direct answer, even a short one, pushes the extractable answer out of the first sentence, defeating the rewrite's purpose." },
        { mistake: "Writing schema text that paraphrases the visible answer instead of matching it exactly", explanation: "Google's guidelines treat mismatched schema as a spam signal, which can disqualify the page from rich results, not just fail to help it." },
        { mistake: "Trimming the rewrite below 40 words to seem more concise", explanation: "the target range exists to keep essential specifics (temperature, time) intact; cutting too aggressively can drop the details that made the answer citable in the first place." },
        { mistake: "Assuming schema markup alone will fix a zero-click problem without the on-page rewrite", explanation: "schema labels what's already visible, it doesn't add new information; the underlying answer still has to be direct and complete." },
      ],
      keyTakeaway:
        "Winning back a lost featured snippet takes two matched pieces of work: a concise, specific, no-preamble answer in the first sentence, and schema markup whose text mirrors that answer exactly. Either piece alone is incomplete, a great answer buried in preamble or a mismatched schema block both fail to earn the rich result.",
    },
  ],

  "brand-serp-control": [
    {
      id: "trade-desk-brand-serp-audit",
      tier: "mini",
      archetype: "audit",
      title: "The First Impression Audit: Scoring The Trade Desk's Brand SERP",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a research packet describing what shows up when someone Googles a company's brand name, score the Knowledge Panel and review-score elements against the lesson's framework and decide which one to fix first.",
      companyId: "trade-desk",
      scenario:
        "You're a brand marketing coordinator at The Trade Desk. A sales rep just flagged that a prospect said 'your Google results looked off' mid-call, and you've been handed a research packet of what actually shows up.",
      brief:
        "Read the packet, check the Knowledge Panel facts against the correct source of truth, score the review situation, then rank what needs fixing first.",
      mode: "diagnostic",
      conceptsCovered: [
        "Correcting Knowledge Panel facts through Google Business Profile and Wikidata",
        "Prioritizing which review platforms matter based on audience",
      ],
      skills: ["Brand SERP Auditing", "Online Reputation Management", "Prioritization"],
      keyQuestion: "Which Brand SERP problem, an outdated fact or a missing review presence, actually costs this company deals?",
      prerequisites: [
        "Familiarity with what a Google Knowledge Panel is",
        "Basic understanding of B2B vs. consumer buyer research habits",
      ],
      terminology: [
        { term: "Knowledge Panel", definition: "the structured info box Google shows next to search results for a recognized company, pulled from sources like Google Business Profile and Wikidata." },
        { term: "Brand SERP", definition: "the search results page that appears when someone searches a company's own name." },
      ],
      steps: [
        {
          stepId: "step-1-knowledge-panel-check",
          concept: "Correcting Knowledge Panel facts through Google Business Profile and Wikidata",
          lessonAnchor: "winning-the-knowledge-panel",
          theoryRecap:
            "The lesson's Knowledge Panel section says Google pulls structured company facts primarily from Google Business Profile, Wikipedia, and Wikidata, and a wrong panel is wrong for millions of searchers since it's the first thing shown on both desktop and mobile.",
          question:
            "The research packet shows the Knowledge Panel lists an office The Trade Desk moved out of two years ago, and the 'website' link resolves through an old redirect chain. Which two sources should you actually go fix, and in what order?",
          toolName: "Google Sheets",
          where: "A shared research-tracking sheet the marketing team uses for SERP audits",
          procedure: [
            "Log every visible Knowledge Panel field (address, website, description, social links) into one row per fact",
            "Mark each field as correct, outdated, or missing against the company's real current facts",
            "Check whether the outdated fact traces back to Google Business Profile, Wikidata, or an old Wikipedia edit",
            "Fix Google Business Profile first since it updates fastest, then submit the Wikidata correction since it feeds Google directly",
          ],
          outputSample:
            "KNOWLEDGE PANEL FIELD AUDIT\nField            Shown                          Correct                        Source to fix\nAddress          Old Ventura office (2019)     Current Ventura HQ            Google Business Profile\nWebsite link     Redirect chain (3 hops)       thetradedesk.com direct       Organization schema + GBP\nDescription      'Ad tech startup'             'Programmatic advertising DSP' Wikidata + Wikipedia",
          healthy:
            "Every visible fact matches the company's current, real-world status, and the website link resolves in a single hop.",
          unhealthy:
            "An outdated address or broken redirect chain sits in the very first thing a prospect sees after Googling your name.",
          interpret:
            "The Knowledge Panel is a five-minute-to-days fix once you know which of the three feeder sources actually owns the wrong fact.",
          soWhat: [
            {
              symptom: "A prospect says your Google results 'look off' after a sales call",
              action: "Audit and correct Google Business Profile and Wikidata within the week, don't wait for a pattern of complaints",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-review-score-check",
          concept: "Prioritizing which review platforms matter based on audience",
          lessonAnchor: "managing-review-aggregate-scores",
          theoryRecap:
            "The lesson splits review platforms by audience: Google Reviews for general trust, G2 and Capterra for B2B software buyers specifically, and says a B2B SaaS should treat G2 as seriously as Google Reviews.",
          question:
            "The Trade Desk is a B2B adtech platform selling to media buyers, not consumers. The packet shows a 4.7-star Google rating from 12 reviews and no G2 profile at all. Which gap actually matters more for this business?",
          toolName: "Google Sheets",
          where: "Same tracking sheet, a new tab for review-platform coverage",
          procedure: [
            "List every review platform appearing on the Brand SERP and its star rating and review count",
            "Match each platform to the buyer type it actually influences (consumer vs. B2B buyer)",
            "Flag the platform gap that matches this company's real buyer, not the platform with the most visible star rating",
            "Recommend the review-collection push that targets that platform specifically",
          ],
          outputSample:
            "REVIEW PLATFORM COVERAGE\nPlatform         Rating    Reviews   Buyer it influences\nGoogle Reviews   4.7       12        General public / office visitors\nG2               —         0         B2B media-buying decision makers\nCapterra         —         0         B2B media-buying decision makers",
          healthy:
            "The platform with the most review volume is the one your actual buyer reads before a purchase decision.",
          unhealthy:
            "A strong consumer review score masks a total absence on the B2B platforms the real buyer actually checks.",
          interpret:
            "12 Google reviews look fine at a glance, but a B2B adtech company with zero G2 presence is invisible at the exact moment a media buyer is validating the purchase.",
          soWhat: [
            {
              symptom: "Google rating looks healthy but the company has no G2 or Capterra presence",
              action: "Launch a G2 review-collection campaign targeting recent enterprise customers this quarter",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log and score every Brand SERP element found in the research packet", why: "Free, no account friction, shareable with the team", required: true, lastVerified: "2026-08" },
          { toolName: "Google Search Console", role: "Confirm actual branded query volume and current indexing status", why: "First-party data on which branded queries are actually being searched", required: false, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Brandwatch", role: "Ongoing monitoring of review-score trends and negative mentions", why: "Automates the manual tracking this exercise does by hand", required: false, fallback: "Google Sheets with a monthly manual check", lastVerified: "2026-08" },
        ],
      },
      deliverable: "A scored Brand SERP audit sheet covering the Knowledge Panel and review situation, with a ranked one-item fix-first recommendation.",
      sampleOutput:
        "TBO Tek, Brand SERP quick audit (excerpt)\n\nKNOWLEDGE PANEL: description reads 'travel agency' instead of 'B2B travel distribution platform' — fix via Wikidata, 30 min\nREVIEWS: 0 reviews on G2/Capterra despite 147,000+ registered B2B buyers — this is the real gap, not the 4.2-star Google rating from walk-in office visitors\nFIX FIRST: Launch a G2 review push targeting top 50 active agency accounts this month",
      successCriteria: [
        "Correctly identifies which feeder source (GBP, Wikidata, Wikipedia) owns each wrong Knowledge Panel fact",
        "Matches the review-platform gap to the company's actual B2B buyer, not the platform with the highest visible star rating",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Feeder source", detail: "Which of the three sources, Google Business Profile, Wikidata, or Wikipedia, actually owns the wrong fact?" },
        { label: "Buyer match", detail: "Does the review platform with the biggest gap actually match who this company's real buyer is?" },
        { label: "Visible vs real risk", detail: "Is the most visually prominent number (a high star rating) hiding a bigger structural gap (zero B2B reviews)?" },
        { label: "Fix order", detail: "Which correction updates fastest, and which one feeds into Google indirectly and takes longer?" },
      ],
      decision: {
        prompt:
          "The Knowledge Panel has an outdated address and broken redirect, and the company has a 4.7-star Google rating but zero G2/Capterra presence, while selling B2B software. Which should be fixed first?",
        options: [
          { id: "a", label: "The Knowledge Panel address, since it's the most visible element on the page", correct: false },
          { id: "b", label: "Both matter, but for a B2B seller the missing G2/Capterra presence is the bigger risk since it's invisible at the buyer's actual validation moment", correct: true },
          { id: "c", label: "Neither, since a 4.7-star rating already proves the brand reputation is healthy", correct: false },
          { id: "d", label: "The redirect chain, since broken links always outrank review gaps in priority", correct: false },
        ],
        explanation:
          "The Knowledge Panel fix matters, but it's a fast, low-effort correction. The real risk is that a strong-looking consumer rating masks total invisibility on the platforms B2B buyers actually check before purchasing, that gap costs deals, not just polish.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Fix the Knowledge Panel facts within the week since they're quick wins, but treat the G2/Capterra review gap as the priority project: launch a review-collection push targeting recent enterprise customers, since that's where this company's actual buyer looks before deciding.",
      },
      commonMistakes: [
        { mistake: "Fixing only the most visible SERP element", explanation: "a wrong address is obvious, but an invisible review gap on the platform your actual buyer checks can be more costly and easy to miss." },
        { mistake: "Judging brand health by a single star rating", explanation: "a strong consumer rating on one platform says nothing about presence on the B2B-specific platforms that matter for this buyer." },
        { mistake: "Fixing Wikidata before Google Business Profile", explanation: "Google Business Profile updates fastest, doing it first buys time while the slower Wikidata correction propagates." },
      ],
      keyTakeaway:
        "A Brand SERP audit has to weigh visibility against relevance, the most eye-catching element isn't always the one costing the company deals. Matching each platform to the audience it actually influences is what turns a scored checklist into a real prioritization call.",
    },
    {
      id: "yelp-brand-serp-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Screenshot Teardown: Finding What's Broken on a Client's Brand SERP",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a described specimen of a client's brand-name search results, separate genuine Brand SERP defects from plausible-looking but harmless quirks, using the lesson's 10-element framework and suppression tactics.",
      companyId: "yelp",
      scenario:
        "You're a reputation-management consultant on Yelp's enterprise partnerships team, brought in to review a mid-size retail client's brand search presence ahead of a renewal pitch.",
      brief: "Read the specimen, mark every real defect against the answer key, and don't get fooled by the distractors.",
      mode: "teardown",
      conceptsCovered: [
        "The 10 Elements of a Brand SERP",
        "Managing Review Aggregate Scores",
        "Suppressing Negative Results",
        "Brand Keyword Strategy",
      ],
      skills: ["Brand SERP Auditing", "Reputation Triage", "Client Reporting"],
      keyQuestion: "Which elements on this Brand SERP are genuine defects that need fixing, and which just look suspicious but are actually fine?",
      prerequisites: [
        "Understanding of the 10 elements that make up a Brand SERP",
        "Familiarity with negative-result suppression tactics",
      ],
      terminology: [
        { term: "Suppression", definition: "the practice of pushing negative or outdated content further down a Brand SERP by publishing fresher, more authoritative owned or earned content." },
        { term: "Sitelinks", definition: "the extra links Google sometimes shows beneath a main result, usually pointing to key pages on the same site." },
      ],
      teardownItems: [
        {
          itemId: "item-1-northloop-serp",
          specimen:
            "Google search results for 'NorthLoop Outdoor' (a mid-size outdoor-gear retailer):\n1. Knowledge Panel: logo present, 'Founded: 2015' shown (actual founding year is 2012), phone number listed rings disconnected, website link correct.\n2. Sitelinks (4): Home, Blog, Careers, Store Locator.\n3. Aggregate review score: 3.2 stars from 340 Google reviews, most recent negative review from last week has no business reply.\n4. Image pack: six photos, four from a 2016 product catalog, one blurry storefront photo, one stock hiking image with no NorthLoop branding.\n5. People Also Ask: 'Is NorthLoop Outdoor legit?', 'NorthLoop Outdoor lawsuit', 'NorthLoop Outdoor return policy'.\n6. Organic position 4: a 2019 Reddit thread titled 'Never buying from NorthLoop again', no NorthLoop-published response found anywhere online.\n7. Organic position 6: 'NorthLoop Outdoor Reviews — Trustpilot', showing 4.6 out of 5 from 210 reviews.\n8. No page on the NorthLoop site or elsewhere addresses '[NorthLoop] vs [competitor]' comparisons; a competitor's own comparison page ranks for 'NorthLoop Outdoor vs TrailPro'.\n9. No video carousel appears in the results.\n10. No Google Ads run against the brand name; all top results are organic.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Using the lesson's 10-element framework and suppression tactics, list every genuine Brand SERP defect in this specimen, explain why each one matters, and note who should own the fix.",
          answerKey: [
            {
              defect: "Knowledge Panel founding year is wrong and the listed phone number is disconnected",
              severity: "critical",
              whyItMatters: "Wrong contact info actively frustrates or loses customers trying to reach the business, and it's the first thing shown on desktop and mobile.",
              lessonRef: "winning-the-knowledge-panel",
              owner: "you",
            },
            {
              defect: "3.2-star aggregate rating with no visible response to the most recent negative review",
              severity: "critical",
              whyItMatters: "Potential customers see the star number before reading a single review, and an unanswered recent complaint signals nobody is monitoring feedback.",
              lessonRef: "managing-review-aggregate-scores",
              owner: "you",
            },
            {
              defect: "A 2019 negative Reddit thread ranks in the top 4 organic results with zero published counter-content since",
              severity: "critical",
              whyItMatters: "A single unaddressed negative thread sitting this high for over five years means it has never been challenged with fresher, more authoritative content.",
              lessonRef: "suppressing-negative-results",
              owner: "you",
            },
            {
              defect: "The 'NorthLoop Outdoor lawsuit' People Also Ask question has no owned content answering it anywhere",
              severity: "moderate",
              whyItMatters: "An unanswered reputational question in People Also Ask lets competitors or critics define the narrative instead of the brand.",
              lessonRef: "the-10-elements-of-a-brand-serp",
              owner: "you",
            },
            {
              defect: "Image pack is dominated by a 2016 product catalog and one blurry, unbranded storefront photo",
              severity: "moderate",
              whyItMatters: "Outdated, low-quality images signal an abandoned or neglected brand to anyone scanning the results visually.",
              lessonRef: "controlling-the-image-pack",
              owner: "either",
            },
            {
              defect: "No '[Brand] vs [competitor]' page exists, so a competitor's own comparison page ranks for that exact brand-adjacent search",
              severity: "moderate",
              whyItMatters: "Ceding a comparison query to a competitor means they get to frame the comparison in their own favor at a high-intent decision moment.",
              lessonRef: "brand-keyword-strategy",
              owner: "you",
            },
          ],
          distractors: [
            "No Google Ads campaign is running against the brand name — this is optional 'cheap insurance' per the lesson, not a defect on its own.",
            "A 'Careers' sitelink shows up instead of a product category page — ranking for brand-adjacent hiring searches is a recommended win, not a flaw.",
            "A third-party Trustpilot page (4.6/5, 210 reviews) ranks at position 6 — a strong third-party review score reinforcing trust is healthy, not a defect.",
            "No video carousel appears in the results — the lesson notes video engagement is rare on Brand SERPs generally, so its absence alone isn't a real problem.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the scored teardown report and severity ranking", why: "Free, easy to hand off as a client-facing deliverable", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A written teardown report listing every real defect with severity and owner, clearly separated from the distractors that looked like problems but weren't.",
      sampleOutput:
        "Client: Riverbend Cycles, Brand SERP teardown (excerpt)\n\nCRITICAL: Knowledge Panel shows a closed second location as the primary address — fix via Google Business Profile, owner: client\nCRITICAL: 2.9-star rating, 6 unanswered 1-star reviews from the last 90 days — owner: client\nMODERATE: No 'Riverbend Cycles vs [competitor]' page exists — owner: consultant, draft this quarter\nNOT A DEFECT: A LinkedIn company page ranks at position 5 — this is a healthy trust signal, leave it alone",
      successCriteria: [
        "Identifies all 6 answer-key defects with correct severity",
        "Does not flag any of the 4 distractors as genuine defects",
      ],
      portfolioReady: true,
      stretch: "Draft the actual '[Brand] vs [competitor]' page outline that would close the gap identified in defect 6.",
      whatToLookFor: [
        { label: "Contact accuracy", detail: "Are Knowledge Panel facts, address, phone, founding year, actually correct and current?" },
        { label: "Review responsiveness", detail: "Are recent negative reviews answered, or left sitting unaddressed?" },
        { label: "Content freshness", detail: "Is old negative content still ranking with nothing newer published to counter it?" },
        { label: "Neutral or positive signals mistaken for defects", detail: "Does a healthy element, like a strong third-party review score, get incorrectly flagged as a problem?" },
      ],
      decision: {
        prompt:
          "The specimen shows a Trustpilot page ranking at position 6 with 4.6/5 from 210 reviews, and a 'Careers' sitelink instead of a product page. Should either be flagged as a defect?",
        options: [
          { id: "a", label: "Yes, both should be flagged since neither is a core Brand SERP element the company controls directly", correct: false },
          { id: "b", label: "No, both are healthy signals, a strong third-party review score builds trust and a Careers sitelink is a recognized win, not a flaw", correct: true },
          { id: "c", label: "Only the Trustpilot page should be flagged, since third-party sites dilute owned-domain authority", correct: false },
          { id: "d", label: "Only the Careers sitelink should be flagged, since it should be a product category page instead", correct: false },
        ],
        explanation:
          "The lesson's framework treats a strong third-party review score as reinforcing trust, not undermining it, and ranking for brand-adjacent hiring searches is called out as a recommended win. Flagging either as a defect would be treating a healthy signal as a problem, exactly the trap the distractors are designed to test.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Prioritize the three critical defects first: correct the Knowledge Panel's founding year and disconnected phone number, respond to the unanswered recent negative review, and begin suppression work against the five-year-old Reddit thread with fresh, authoritative published content. The moderate-severity gaps, the unanswered lawsuit question and missing comparison page, follow once the critical fixes are underway.",
      },
      commonMistakes: [
        { mistake: "Flagging a strong third-party review score as a defect", explanation: "a healthy Trustpilot or similar rating reinforces trust; it's a distractor designed to test whether every unfamiliar element gets treated as a problem." },
        { mistake: "Missing an unanswered negative review because the aggregate score looks acceptable", explanation: "a 3.2-star average can still hide a very recent, unanswered complaint that signals the business isn't monitoring feedback." },
        { mistake: "Treating all defects as equal priority", explanation: "a disconnected phone number and a missing comparison page are not the same severity; sorting by real business impact matters more than listing everything found." },
        { mistake: "Assuming the absence of an element, like a video carousel, is itself a defect", explanation: "some elements are optional or rare for a category; their absence alone isn't automatically a problem." },
      ],
      keyTakeaway:
        "A Brand SERP teardown succeeds by separating genuine defects, wrong facts, unanswered complaints, unaddressed negative content, from elements that only look suspicious at first glance. The distractors exist because over-flagging is as costly to a client relationship as under-flagging.",
    },
  ],
  "ai-search-visibility-metrics": [
    {
      id: "go-digit-ai-citation-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Three Engines, One Brand: Comparing AI Citation Rates Head-to-Head",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given citation results from the same prompt set run across three AI engines, correctly interpret the differences without falling into the raw-comparison trap the lesson warns against.",
      companyId: "go-digit-insurance",
      scenario:
        "You're a digital marketing analyst at Go Digit General Insurance, and leadership wants a monthly readout on whether the brand shows up when people ask AI assistants about buying car or health insurance in India.",
      brief: "Build a small prompt panel, log citation results across three engines, then normalize before concluding which engine 'likes' the brand least.",
      mode: "diagnostic",
      conceptsCovered: [
        "Building a repeatable prompt panel to measure citation rate and share of voice",
        "Normalizing citation rate against each model's own baseline mention rate before comparing",
      ],
      skills: ["AI Search Measurement", "Data Normalization", "Cross-Engine Comparison"],
      keyQuestion: "Which AI engine actually needs attention once citation rate is compared against each engine's own baseline, not the raw numbers?",
      prerequisites: [
        "Understanding of what a citation rate measures",
        "Basic comfort building and reading a comparison table in a spreadsheet",
      ],
      terminology: [
        { term: "Citation rate", definition: "the percent of a defined prompt set where an AI engine links to or names your content." },
        { term: "Baseline mention rate", definition: "how often an engine names any brand at all for a category, used to normalize citation rate before comparing engines." },
      ],
      steps: [
        {
          stepId: "step-1-build-prompt-panel",
          concept: "Building a repeatable prompt panel to measure citation rate and share of voice",
          lessonAnchor: "the-core-metrics",
          theoryRecap:
            "The lesson defines citation rate as the percent of a defined prompt set where an engine links to your content, and recommends 20-30 real buyer-style prompts run weekly to build a trend line rather than a single snapshot.",
          question:
            "You ran the same 15 buyer-style prompts ('best car insurance for a first-time driver in India', etc.) across ChatGPT, Perplexity, and Google AI Overviews. Go Digit was cited 6/15 times by ChatGPT, 3/15 by Perplexity, and 2/15 by Google AI Overviews. What's the one thing you should NOT conclude yet?",
          toolName: "Google Sheets",
          where: "A shared prompt-tracking sheet, one row per prompt per engine",
          procedure: [
            "Write 15-30 full-sentence buyer questions, not keyword fragments",
            "Run each prompt against ChatGPT, Perplexity, and Google AI Overviews and log whether Go Digit is cited, named-only, or absent",
            "Calculate citation rate per engine (cited count / total prompts)",
            "Hold off on any 'engine X likes us least' conclusion until baseline rates are checked (next step)",
          ],
          outputSample:
            "CITATION RATE BY ENGINE (15 prompts)\nEngine                ChatGPT   Perplexity   Google AI Overviews\nCited                 6         3            2\nCitation rate         40%       20%          13%",
          healthy: "A rising citation rate trend across repeated weekly runs of the same prompt set.",
          unhealthy: "Treating one week's raw citation count as a final verdict on an engine's attitude toward the brand.",
          interpret: "40% vs 13% looks like Google is ignoring Go Digit, but that comparison is meaningless until you know each engine's own baseline citation rate for the insurance category.",
          soWhat: [
            {
              symptom: "One engine's raw citation rate looks much lower than another's",
              action: "Hold the comparison and check each engine's baseline mention rate for the category before reporting a conclusion",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-normalize-baseline",
          concept: "Normalizing citation rate against each model's own baseline mention rate before comparing",
          lessonAnchor: "brand-mention-tracking-across-models",
          theoryRecap:
            "The lesson warns that different models mention brands at very different baseline rates, and that raw citation counts must be normalized against each model's own baseline for the category before concluding anything.",
          question:
            "A quick baseline check across 15 generic insurance-category prompts (no brand name mentioned) shows ChatGPT names some insurer 90% of the time, Perplexity 45% of the time, and Google AI Overviews names any insurer only 20% of the time. Given Go Digit's 40% / 20% / 13% citation rates, which engine is actually underperforming its own baseline the most?",
          toolName: "Google Sheets",
          where: "Same tracking sheet, add a baseline column per engine",
          procedure: [
            "Run 15 generic category prompts with no brand name and log whether ANY insurer is named per engine",
            "Divide Go Digit's citation rate by each engine's baseline rate to get a normalized share",
            "Rank engines by normalized share, not raw citation rate",
            "Flag the engine with the biggest gap between its baseline and Go Digit's actual share as the real priority",
          ],
          outputSample:
            "NORMALIZED COMPARISON\nEngine                Go Digit rate   Engine baseline   Normalized share\nChatGPT               40%             90%               44%\nPerplexity             20%             45%               44%\nGoogle AI Overviews    13%             20%               65%",
          healthy: "A normalized share roughly in line with, or above, the brand's fair share of the category conversation.",
          unhealthy: "Reading raw citation rate as the final answer and deprioritizing the engine with the lowest baseline, which may actually be the strongest relative performer.",
          interpret: "Once normalized, Google AI Overviews is actually Go Digit's best-performing engine (65% of its own baseline), while ChatGPT and Perplexity are tied at a weaker 44% share, the opposite of what the raw numbers suggested.",
          soWhat: [
            {
              symptom: "Raw citation numbers suggest one engine is hostile to the brand",
              action: "Recalculate as a share of that engine's own baseline mention rate before reporting to leadership",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "ChatGPT", role: "Run the buyer prompt panel and log citations", why: "Free tier covers a 15-30 prompt weekly panel", required: true, lastVerified: "2026-08" },
          { toolName: "Perplexity", role: "Run the same prompt panel for cross-engine comparison", why: "Free tier available, different citation behavior than ChatGPT", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log citations, calculate citation rate and normalized share", why: "Free, no account friction", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Brandwatch", role: "Automate prompt-panel runs and baseline tracking at scale", why: "Removes the manual weekly re-run once the panel grows past 30 prompts", required: false, fallback: "Manual weekly Google Sheets panel", lastVerified: "2026-08" },
        ],
      },
      deliverable: "A citation-rate comparison sheet with both raw and baseline-normalized numbers, and a one-line recommendation on which engine actually needs attention.",
      sampleOutput:
        "TBO Tek, AI citation head-to-head (excerpt)\n\nRaw citation rate: ChatGPT 33%, Perplexity 27%, Google AI Overviews 7%\nCategory baseline: ChatGPT 80%, Perplexity 50%, Google AI Overviews 10%\nNormalized share: ChatGPT 41%, Perplexity 54%, Google AI Overviews 70%\nRecommendation: ChatGPT is the real priority despite having the highest raw number, its normalized share is the weakest",
      successCriteria: [
        "Calculates both raw citation rate and baseline-normalized share correctly for all three engines",
        "Does not recommend deprioritizing the engine with the lowest raw citation rate without checking its baseline first",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Raw vs normalized", detail: "Is the comparison based on raw citation counts, or each engine's own baseline mention rate for the category?" },
        { label: "Sample size", detail: "Is the prompt panel large enough (15-30 prompts) to be a reasonable trend snapshot, not a single query?" },
        { label: "Trend, not snapshot", detail: "Is this framed as one week's reading, with a plan to re-run weekly, or treated as a final verdict?" },
        { label: "Direction of the gap", detail: "Does normalizing the numbers actually flip which engine looks like the real priority?" },
      ],
      decision: {
        prompt:
          "Raw citation rates are ChatGPT 40%, Perplexity 20%, Google AI Overviews 13%. Category baselines are ChatGPT 90%, Perplexity 45%, Google AI Overviews 20%. Which engine should leadership actually prioritize?",
        options: [
          { id: "a", label: "Google AI Overviews, since it has the lowest raw citation rate", correct: false },
          { id: "b", label: "ChatGPT and Perplexity, since both are tied at a 44% normalized share, weaker than Google's 65% normalized share", correct: true },
          { id: "c", label: "None of them, since all three raw rates are already reasonably close together", correct: false },
          { id: "d", label: "Perplexity, since its raw rate sits exactly in the middle of the other two", correct: false },
        ],
        explanation:
          "Once each engine's rate is divided by its own baseline, ChatGPT and Perplexity both land at 44% of their baseline, while Google AI Overviews reaches 65%, the opposite of what the raw numbers suggest. Raw citation rate alone would have pointed leadership at the wrong engine.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Report both raw and normalized numbers to leadership, but base the actual prioritization on normalized share: focus improvement work on ChatGPT and Perplexity, not Google AI Overviews, and re-run this same prompt panel weekly to confirm the pattern holds before committing further resources.",
      },
      commonMistakes: [
        { mistake: "Comparing raw citation rates across engines without normalizing", explanation: "different models mention any brand at very different baseline rates, so a low raw number can still represent strong relative performance." },
        { mistake: "Drawing a conclusion from a single week's run", explanation: "AI answers are non-deterministic; one week's numbers are a data point, not a trend, until repeated." },
        { mistake: "Skipping the baseline check because it takes extra time", explanation: "the baseline run is the step that prevents a completely backwards conclusion about which engine is underperforming." },
      ],
      keyTakeaway:
        "Raw citation counts across AI engines are not directly comparable, each engine has its own baseline rate for how often it names any brand in a category. Normalizing against that baseline before ranking engines can completely reverse which one actually needs attention.",
    },
    {
      id: "tbo-tek-ai-measurement-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Measurement Report Teardown: Spotting a Flawed AI-Visibility Readout",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a contractor's draft AI-visibility report, identify the methodology mistakes that make its conclusions unreliable before it reaches leadership.",
      companyId: "tbo-tek",
      scenario: "You're a growth marketer at TBO Tek reviewing a contractor's first monthly 'AI Search Visibility Report' before it goes to your VP of Marketing.",
      brief: "Read the report excerpt and flag every real measurement mistake, without flagging the parts that are actually fine.",
      mode: "teardown",
      conceptsCovered: [
        "Rank Tracking Was Built for a World That Is Disappearing",
        "Brand Mention Tracking Across Models",
        "AI-Referral Traffic in GA4",
      ],
      skills: ["AI Search Measurement", "Methodology Review", "GA4 Analysis"],
      keyQuestion: "Which conclusions in this draft report are backed by sound methodology, and which are drawn from flawed measurement?",
      prerequisites: [
        "Familiarity with citation rate and baseline normalization",
        "Basic understanding of GA4 channel groupings",
      ],
      terminology: [
        { term: "Rolling window", definition: "measuring a metric across repeated runs over time instead of trusting a single snapshot, since AI answers vary run to run." },
        { term: "Channel group", definition: "a GA4 configuration that buckets traffic sources under a label; AI referral sources not natively recognized fall into generic Referral or Direct unless a custom group is built." },
      ],
      teardownItems: [
        {
          itemId: "item-1-flawed-report",
          specimen:
            "TBO Tek AI Search Visibility Report, Month 1 (draft excerpt):\n1. 'We ran a single ChatGPT query for \"best B2B travel distribution platform\" this morning and TBO Tek was not mentioned. Recommend immediate action.'\n2. 'Citation rate across engines this week: ChatGPT 45%, Claude 92%, Google AI Overviews 12%. Conclusion: Google actively deprioritizes TBO Tek and should be dropped from the monitoring plan.'\n3. 'GA4 shows 0 sessions under the native \"AI Assistant\" channel this month, so we conclude AI search is sending TBO Tek zero traffic.'\n4. 'ChatGPT named TBO Tek in 3 of 20 travel-agent prompts this week, each time as one line inside a longer list of platforms — logged as 3 positive citations.'\n5. 'Perplexity and Copilot sessions currently show up bucketed as generic \"Referral\" traffic in GA4; the report treats this as confirmed zero AI-driven traffic from those two platforms.'\n6. 'Recommend adding FAQ schema to the homepage as the single fix expected to double AI citations next month.'\n7. 'Recommends re-running the same 20-prompt panel weekly going forward to build a trend line.'",
          specimenSource: "synthetic-realistic",
          prompt: "List every genuine measurement flaw in this report excerpt, citing which lesson concept each one violates, and note which line items are actually fine.",
          answerKey: [
            {
              defect: "Conclusion #1 is drawn from a single query run, not a rolling window across a defined prompt set",
              severity: "critical",
              whyItMatters: "AI answers are non-deterministic; the lesson's core rule is to never trust a single query's result, always measure on a rolling window.",
              lessonRef: "rank-tracking-was-built-for-a-world-that-is-disappearing",
              owner: "you",
            },
            {
              defect: "Conclusion #2 compares raw citation rate across ChatGPT, Claude, and Google without normalizing for each model's own baseline mention rate",
              severity: "critical",
              whyItMatters: "Different models mention brands at very different baseline rates, comparing raw counts leads to the wrong conclusion about which engine is actually underperforming.",
              lessonRef: "brand-mention-tracking-across-models",
              owner: "you",
            },
            {
              defect: "Conclusion #3 assumes GA4's native AI Assistant channel showing 0 sessions means zero AI traffic, without checking Direct or Referral for AI domains",
              severity: "critical",
              whyItMatters: "The native channel only recognizes ChatGPT, Gemini, and Claude; Perplexity and Copilot traffic still needs a custom channel group or it hides in Referral or Direct.",
              lessonRef: "ai-referral-traffic-in-ga4",
              owner: "you",
            },
            {
              defect: "Item #5 treats Perplexity and Copilot's unbucketed Referral traffic as confirmed zero instead of building the recommended custom channel group",
              severity: "moderate",
              whyItMatters: "The lesson's fix for exactly this gap is a custom channel group explicitly bucketing perplexity.ai and copilot.microsoft.com, not writing the traffic off.",
              lessonRef: "ai-referral-traffic-in-ga4",
              owner: "developer",
            },
            {
              defect: "Recommendation #6 predicts FAQ schema will double citations next month, treating an unverified tactic as guaranteed causation",
              severity: "moderate",
              whyItMatters: "A rigorous controlled study found schema additions were statistically indistinguishable from zero for AI Mode and ChatGPT citations, so this prediction is not backed by controlled evidence.",
              lessonRef: "the-core-metrics",
              owner: "you",
            },
          ],
          distractors: [
            "Item #2's raw numbers themselves (ChatGPT 45%, Claude 92%, Google 12%) — reporting the raw numbers is fine, the flaw is only the unnormalized conclusion drawn from them.",
            "Item #4's count of '3 of 20 prompts' — the raw count is accurate reporting; the real issue (not listed as a defect here) would be missing a sentiment/prominence check, not the count itself.",
            "Item #7's plan to re-run the same 20-prompt panel weekly — this matches the lesson's own recommendation for a rolling window and is a healthy practice, not a flaw.",
            "The report being labeled a 'draft' — a draft label is a process detail, not a measurement methodology flaw.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Analytics 4", role: "Verify the AI-referral traffic claims against actual channel and source data", why: "Free, first-party data on where sessions actually originate", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Build the annotated teardown response to send back to the contractor", why: "Free, easy to share internally", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "An annotated response to the contractor's report, listing each real methodology flaw with the lesson concept it violates and a corrected recommendation.",
      sampleOutput:
        "Go Digit Insurance, AI report review (excerpt)\n\nFLAW: 'Perplexity shows 0 citations' based on one Tuesday-morning check — re-run across a 2-week rolling window before concluding anything\nFLAW: Report ranks engines by raw citation count only — recalculate as normalized share against each engine's category baseline\nOK AS-IS: Report's plan to log sentiment (positive/neutral/negative) per citation going forward",
      successCriteria: [
        "Identifies all 5 answer-key flaws with the correct lesson concept cited",
        "Does not flag any of the 4 distractors as genuine flaws",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Sample size", detail: "Is a conclusion drawn from a single query, or a rolling window across a defined prompt set?" },
        { label: "Normalization", detail: "Are citation rates compared raw, or against each engine's own category baseline?" },
        { label: "GA4 channel coverage", detail: "Does the report account for AI referral traffic hiding in Referral or Direct when it isn't in the native AI Assistant channel?" },
        { label: "Causal overreach", detail: "Does a recommendation claim a tactic will produce a specific result without controlled evidence?" },
        { label: "False positives", detail: "Is a genuinely sound practice, like a raw number report or a rolling weekly panel, mistakenly flagged as a flaw?" },
      ],
      decision: {
        prompt:
          "Item #3 says GA4's native AI Assistant channel shows 0 sessions, so the report concludes AI search sends zero traffic. What's the correct read?",
        options: [
          { id: "a", label: "The conclusion is correct, since GA4's native channel is the authoritative source for all AI referral traffic", correct: false },
          { id: "b", label: "The conclusion is flawed, since the native channel only recognizes ChatGPT, Gemini, and Claude, so Perplexity and Copilot traffic can be hiding in Referral or Direct", correct: true },
          { id: "c", label: "The conclusion is flawed, but only because the report should have checked Search Console instead of GA4", correct: false },
          { id: "d", label: "The conclusion is correct, but the report should have run it over a longer date range first", correct: false },
        ],
        explanation:
          "GA4's native AI Assistant channel does not recognize every AI engine. Perplexity and Copilot traffic lands in generic Referral or Direct unless a custom channel group is built to bucket those domains explicitly, so a 0-session reading from the native channel alone understates real AI traffic.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Send this report back to the contractor before it reaches the VP. Require a rolling-window re-measurement instead of the single-query check, a normalized citation comparison instead of raw counts, and a custom GA4 channel group for Perplexity and Copilot before any 'zero AI traffic' claim is repeated.",
      },
      commonMistakes: [
        { mistake: "Accepting a one-query result as a finished measurement", explanation: "AI answers vary between runs; a single check is a spot-check, not a report-ready conclusion." },
        { mistake: "Trusting GA4's native AI channel as complete", explanation: "it only recognizes a subset of engines; unrecognized ones need an explicit custom channel group or their traffic hides in Referral or Direct." },
        { mistake: "Flagging accurate raw-number reporting as a flaw", explanation: "reporting the raw numbers is fine; the actual problem is the unnormalized conclusion drawn from them, not the numbers themselves." },
        { mistake: "Predicting a specific tactic's impact without controlled evidence", explanation: "a recommendation like 'this will double citations' needs a cited study or test, not an assumption." },
      ],
      keyTakeaway:
        "A methodology teardown means separating what's actually wrong, unnormalized comparisons, single-snapshot conclusions, incomplete GA4 coverage, from what only looks suspicious, like reporting raw numbers or planning a weekly re-run. Both an under-caught flaw and an over-flagged non-issue weaken the review's credibility.",
    },
  ],

  "search-intent": [
    {
      id: "jet-com-intent-triage",
      tier: "mini",
      archetype: "audit",
      title: "Triage the Query List: Sorting Jet.com's Content Backlog by Intent",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a mixed batch of 10 real-style search queries for Jet.com's bulk-goods marketplace, correctly classify each by intent and decide which pages get built this sprint.",
      companyId: "jet-com",
      scenario:
        "You're a growth marketer on Jet.com's content team in 2016, days after a 'basket size' pricing engine launch. Leadership handed you a raw list of ten queries pulled from early keyword research and wants a one-sprint content plan, no page gets built until every query is sorted by intent.",
      brief:
        "Sort every query into one of the four intent types before recommending a single page. Use the SERP-detective method from the lesson, not a guess from the keyword text alone.",
      mode: "diagnostic",
      conceptsCovered: ["Classifying queries by the four intent types before recommending content"],
      skills: ["Search Intent Classification", "Content Prioritization", "SERP Analysis"],
      keyQuestion: "Which of these queries deserve a dedicated landing page this sprint, and which would waste the build?",
      prerequisites: [
        "Familiarity with the four search intent types: informational, navigational, commercial, transactional",
      ],
      terminology: [
        { term: "Search intent", definition: "the underlying goal behind a query, whether the searcher wants to learn, find a specific site, compare options, or buy." },
        { term: "SERP-detective method", definition: "determining a query's real intent by checking what format actually ranks, rather than guessing from the keyword's wording alone." },
      ],
      steps: [
        {
          stepId: "step-1-classify-queries",
          concept: "Classifying queries by the four intent types before recommending content",
          lessonAnchor: "the-4-types-of-search-intent",
          theoryRecap:
            "The lesson splits every query into informational, navigational, commercial, or transactional intent, and warns that guessing from the keyword text alone is Mistake 2, always check what's actually ranking.",
          question:
            "Given these 10 queries pulled for Jet.com's bulk household-goods vertical, which 3 are safe to build a dedicated landing page for this sprint, and which need a blog post or no page at all?",
          toolName: "Google Sheets",
          where: "A 10-row spreadsheet: query, your intent label, and a one-line reasoning note.",
          procedure: [
            "List all 10 queries in a spreadsheet with an empty 'Intent' column",
            "Google each query and note what format dominates the top 5 results",
            "Label each query informational, navigational, commercial, or transactional based on the SERP, not the wording",
            "Flag only the commercial and transactional rows as landing-page candidates this sprint",
          ],
          outputSample:
            "Query                                          Top SERP format              Intent\n" +
            "'bulk toilet paper for office'                 Product/category pages       Transactional\n" +
            "'how much toilet paper does an office need'    Blog/how-to articles         Informational\n" +
            "'Jet.com bulk pricing login'                   Brand login page             Navigational\n" +
            "'best bulk paper towel supplier 2016'          Comparison/review articles   Commercial\n" +
            "'paper towel vs napkin absorbency'              Blog/how-to articles         Informational\n" +
            "'buy bulk hand sanitizer wholesale'             Product/category pages       Transactional\n" +
            "'Jet.com vs Amazon Business pricing'            Comparison articles          Commercial\n" +
            "'office supply budget template'                Blog/downloadable template   Informational\n" +
            "'Jet.com customer service'                      Brand support page           Navigational\n" +
            "'wholesale hand sanitizer suppliers near me'    Product/category pages       Transactional\n\n" +
            "Landing-page candidates this sprint: the 2 transactional + 1 commercial rows flagged above.",
          healthy:
            "The sprint plan builds 3 pages, 2 product/category pages for the transactional queries and 1 comparison page for the commercial query, and routes the 4 informational queries to the blog backlog instead.",
          unhealthy:
            "Building a landing page for 'how much toilet paper does an office need' because it has decent volume, when the SERP is entirely how-to articles.",
          interpret:
            "The SERP told you the format before you wrote a word: product-page SERPs mean build a page, article SERPs mean write a post. Guessing from the query text alone would have gotten the 'best bulk paper towel supplier' query wrong, it reads generic but the SERP is clearly commercial comparison content.",
          soWhat: [
            {
              symptom: "The backlog mixes landing-page and blog-post ideas with no clear priority",
              action: "Sort by intent first using the SERP, then assign format",
              effort: "30 min",
            },
            {
              symptom: "A stakeholder wants a landing page for a high-volume informational query",
              action: "Show them the top-5 SERP screenshot, no product pages rank there, so a new one won't either",
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
            role: "Track the query list and intent labels",
            why: "Free, and enough structure for a 10-row sort",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Pull real search volume and see the SERP overview for each query in one screen",
            why: "Speeds up the SERP check across a larger query list",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 10-row intent-sorted spreadsheet with a one-sprint build recommendation: which queries get a new page, which get a blog post, which get nothing yet.",
      sampleOutput:
        "Applying the same sort to ModCloth's early content queries (illustrative): 'vintage dress size chart' sorted informational (blog), 'ModCloth plus size dresses' sorted commercial (needs a category landing page), 'ModCloth return policy' sorted navigational (support page, no new content needed). Three queries, three different outputs, zero guessing from keyword length alone.",
      successCriteria: [
        "Correctly labels at least 8 of 10 queries by checking the SERP, not the keyword wording",
        "Recommends new landing pages only for the transactional/commercial rows",
        "Explicitly routes informational rows to the blog backlog instead of a landing page",
      ],
      portfolioReady: true,
      stretch: "Re-run this sort against 10 real queries from your own site's Search Console export.",
      whatToLookFor: [
        { label: "SERP format, not keyword wording", detail: "Does the top-5 SERP show product pages, articles, or a brand page, regardless of how the query is phrased?" },
        { label: "Generic-sounding queries", detail: "Does a query that reads generic actually have a clearly commercial or transactional SERP underneath it?" },
        { label: "Build discipline", detail: "Is a landing page only recommended for commercial/transactional queries, with informational queries routed to the blog backlog instead?" },
        { label: "Navigational queries", detail: "Are brand-specific queries correctly routed to an existing support/login page instead of new content?" },
      ],
      decision: {
        prompt:
          "'best bulk paper towel supplier 2016' reads like a generic research query, but its top-5 SERP is comparison/review articles. Should this get a dedicated landing page this sprint?",
        options: [
          { id: "a", label: "No, skip it entirely since it sounds too generic to convert", correct: false },
          { id: "b", label: "Yes, build it as a product category page since it mentions a specific product", correct: false },
          { id: "c", label: "Yes, but as a comparison page matching the commercial-intent SERP, not a product category page", correct: true },
          { id: "d", label: "No, route it to the informational blog backlog since it reads like a research question", correct: false },
        ],
        explanation:
          "The SERP shows comparison and review articles ranking, which signals commercial intent, someone comparing suppliers before buying, not simply researching a topic. The query text alone reads generic, but the SERP-detective method reveals it belongs in this sprint as a comparison page, not a plain product page or the blog backlog.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Build the 2 transactional queries as product/category pages and the 1 commercial query as a comparison page this sprint. Route the 4 informational queries to the blog backlog and treat the 2 navigational queries as already served by existing brand pages, no new content needed for those.",
      },
      commonMistakes: [
        { mistake: "Classifying intent from the keyword wording instead of the SERP", explanation: "a query can sound generic or specific and still mislead; only the actual ranking format reveals real intent." },
        { mistake: "Building a landing page for a high-volume informational query", explanation: "volume doesn't override intent; a page competing against how-to articles for a shopping-intent format won't rank or convert." },
        { mistake: "Treating navigational queries as content opportunities", explanation: "queries like brand-plus-login or brand-plus-support usually just need the existing page found, not new content built." },
      ],
      keyTakeaway:
        "Search intent is revealed by what's actually ranking, not by how a query reads. Sorting a backlog by checking the SERP first, then assigning format, prevents building pages that can never win against what's already satisfying that intent.",
    },
    {
      id: "modcloth-serp-mismatch-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Why This Page Won't Rank: A ModCloth Content Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a specimen, a real-style page brief and its target query, spot which of the stated properties are genuine intent-mismatch defects versus reasonable choices, and explain why.",
      companyId: "modcloth",
      scenario:
        "ModCloth's 'Be The Buyer' community-voting program generated a flood of content ideas. A junior writer at ModCloth drafted a brief for a new page targeting 'vintage-inspired work dresses' and is ready to publish. You're reviewing it before it goes live.",
      brief:
        "Read the specimen brief and the SERP context supplied with it, then separate genuine intent-mismatch defects from choices that are actually fine.",
      mode: "teardown",
      conceptsCovered: ["The 4 Types of Search Intent", "Why Intent Mismatch Is a Silent Killer"],
      skills: ["Search Intent Classification", "Content Brief Review", "SERP Analysis"],
      keyQuestion: "Which parts of this page brief will actually keep it from ranking or converting, and which are harmless choices?",
      prerequisites: [
        "Understanding of the four search intent types",
        "Familiarity with how pogo-sticking signals a content-format mismatch to Google",
      ],
      terminology: [
        { term: "Pogo-sticking", definition: "when a searcher clicks a result, immediately bounces back to the SERP, and clicks a different result, a signal that the page didn't satisfy their intent." },
        { term: "Intent mismatch", definition: "when a page's format doesn't match what the SERP shows searchers actually want for that query." },
      ],
      teardownItems: [
        {
          itemId: "modcloth-dress-brief-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "TARGET QUERY: 'vintage-inspired work dresses'\n\n" +
            "SERP CHECK (top 5 results): 3 ecommerce category pages with filterable dress grids, prices, and 'add to bag' buttons. 1 'best vintage work dress brands 2026' roundup article. 1 Pinterest board.\n\n" +
            "DRAFT PAGE BRIEF:\n" +
            "- Format: a 2,200-word blog post titled 'The History of Vintage Workwear: From the 1950s to Today'\n" +
            "- Includes: a timeline graphic, 3 designer interviews, zero product links\n" +
            "- CTA: 'Subscribe to our style newsletter'\n" +
            "- Target keyword repeated 6 times in the body text\n" +
            "- Publish date: end of this week, before the roundup competitor's next content refresh",
          prompt:
            "Which elements of this brief are real intent-mismatch defects that will keep the page from ranking or converting, and which are reasonable choices that don't need to change?",
          answerKey: [
            {
              defect: "The format is a history article when the SERP is dominated by shoppable category pages",
              severity: "critical",
              whyItMatters:
                "The query has commercial/transactional intent (people want to shop, filter, and buy), not learn history. A history essay will pogo-stick even if it ranks briefly.",
              lessonRef:
                "The 4 Types of Search Intent: transactional and commercial intent expect a shoppable page, not an article",
              owner: "you",
            },
            {
              defect: "Zero product links on a page targeting a shopping query",
              severity: "critical",
              whyItMatters:
                "Even if the page somehow ranks, it can't convert or satisfy the searcher's actual goal, which is finding dresses to buy, not reading about them.",
              lessonRef:
                "Why Intent Mismatch Is a Silent Killer: pogo-sticking signals Google your page didn't satisfy the query",
              owner: "you",
            },
            {
              defect: "The CTA pushes a newsletter signup instead of the product grid",
              severity: "moderate",
              whyItMatters:
                "The CTA should match the query's intent. A shopping-intent visitor is closer to 'add to bag' than 'subscribe', the wrong CTA wastes intent-matched traffic if the format gets fixed but the CTA doesn't.",
              lessonRef: "The Three Cs Framework (from Ahrefs): Content Type must match what's already ranking",
              owner: "you",
            },
          ],
          distractors: [
            "Keyword repeated 6 times in the body text, over-repetition is a minor readability issue, not the reason this page will fail; a correctly-formatted category page can repeat a keyword this often without penalty",
            "Publishing before a competitor's content refresh, timing relative to a competitor doesn't affect whether the page matches search intent",
            "Including 3 designer interviews, interviews aren't inherently wrong content, they're just misplaced on a page that should be a shoppable category grid instead of an essay",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each brief element as defect or non-issue with reasoning",
            why: "Enough structure for a short review checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A short review memo: which defects block this page from ranking or converting, which flagged items are actually fine, and the one format change that fixes the brief.",
      sampleOutput:
        "Review memo, illustrative:\nCRITICAL: Format is a history essay, target query is shopping intent. Rebuild as a filterable category page.\nCRITICAL: No product links on a shopping-intent page. Add direct add-to-bag links per dress.\nMODERATE: CTA pushes a newsletter, not a purchase. Swap to 'Shop the collection'.\nNOT A DEFECT: Keyword repeated 6 times, non-issue once the format itself is fixed.\nNOT A DEFECT: Publish timing vs. competitor refresh, irrelevant to intent match.",
      successCriteria: [
        "Correctly flags the format mismatch and missing product links as the critical defects",
        "Does not flag the keyword-repetition or publish-timing items as real defects",
        "Names the one format change (category/product grid) that fixes the brief",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Format match", detail: "Does the brief's page format match what's actually ranking, shoppable pages vs. an essay or article?" },
        { label: "Conversion path", detail: "Does the page include the elements a shopping-intent visitor needs, like product links, or only content?" },
        { label: "CTA alignment", detail: "Does the call-to-action match what the query's intent suggests the visitor wants to do next?" },
        { label: "Cosmetic vs structural issues", detail: "Is a flagged item, like keyword repetition or publish timing, actually a structural intent problem, or just a minor style choice?" },
      ],
      decision: {
        prompt:
          "The brief includes 3 designer interviews as part of the 2,200-word history essay. Is including designer interviews itself a defect?",
        options: [
          { id: "a", label: "Yes, interviews are never appropriate content for an ecommerce site", correct: false },
          { id: "b", label: "No, the interviews aren't inherently wrong, they're just misplaced on a page that should be a shoppable category grid instead of an essay", correct: true },
          { id: "c", label: "Yes, because interviews always increase word count past what ranks for shopping queries", correct: false },
          { id: "d", label: "No, and no other changes are needed once the interviews are removed", correct: false },
        ],
        explanation:
          "The answer key treats the interviews as a placement problem, not a content problem, the same way it separates real defects (format, missing product links, wrong CTA) from surface details that don't matter (keyword count, publish timing). Removing the interviews alone wouldn't fix the deeper mismatch between an essay format and a shopping-intent query.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Send the brief back before publishing. Rebuild it as a filterable product/category page matching the ranking SERP, add direct add-to-bag links per dress, and swap the newsletter CTA for a purchase-oriented one. The designer interviews and history angle can survive as a separate blog post, just not as this page.",
      },
      commonMistakes: [
        { mistake: "Flagging keyword repetition as the main problem", explanation: "over-repetition is a minor readability issue; the real failure is a whole-page format mismatch that repetition can't fix." },
        { mistake: "Assuming any well-written content will eventually rank", explanation: "quality writing on the wrong format still won't satisfy shopping intent, and pogo-sticking will follow even a brief initial ranking." },
        { mistake: "Missing the CTA mismatch because the bigger format issue overshadows it", explanation: "even after the format is corrected, a CTA still pointed at newsletter signup instead of purchase wastes the intent-matched traffic." },
      ],
      keyTakeaway:
        "A content brief can be well-written and still fail if its format doesn't match the SERP's demonstrated intent. Distinguishing structural defects, format, missing product links, wrong CTA, from cosmetic non-issues is what turns a review into an actionable fix.",
    },
  ],
  "image-seo-visual-search": [
    {
      id: "trunk-club-image-audit",
      tier: "mini",
      archetype: "audit",
      title: "Audit Trunk Club's Product Photos Before the Visual-Search Rollout",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a 6-image export of Trunk Club product photos with filenames, alt text, and format metadata, apply the lesson's image SEO checklist to flag which images are visual-search-ready and which need rework.",
      companyId: "trunk-club",
      scenario:
        "Trunk Club is prepping its catalog for a Pinterest Lens shopping pilot. Before greenlighting the pilot, you've been handed a 6-image export from the menswear catalog to audit against the lesson's checklist.",
      brief:
        "Score each image against the checklist (filename, alt text, format, single-subject framing) and flag the ones that need rework before the pilot launches.",
      mode: "diagnostic",
      conceptsCovered: ["Auditing filenames, alt text, and framing against the image SEO checklist"],
      skills: ["Image SEO Auditing", "Visual Search Readiness", "Content QA"],
      keyQuestion: "Which of these product photos are actually ready for a visual-search pilot, and which need rework first?",
      prerequisites: [
        "Familiarity with basic image SEO fundamentals, filenames and alt text",
      ],
      terminology: [
        { term: "Visual search", definition: "search where the query is an image, not text, matched by the pixels and shapes in the photo itself rather than its metadata." },
        { term: "Single-subject framing", definition: "a photo composition showing one clear product with no competing objects or clutter in frame." },
      ],
      steps: [
        {
          stepId: "step-1-image-audit",
          concept: "Auditing filenames, alt text, and framing against the image SEO checklist",
          lessonAnchor: "practical-image-optimization-checklist",
          theoryRecap:
            "The lesson's checklist calls for descriptive hyphenated filenames, alt text under 15 words describing content and purpose, WebP/AVIF formats, and clean single-subject framing, since visual search matches pixels, not metadata.",
          question:
            "Given this 6-image export, which images are ready for the Lens pilot, and which need rework before launch?",
          toolName: "Google Sheets",
          where: "A 6-row spreadsheet: filename, alt text, format, framing note, pass/fail.",
          procedure: [
            "List all 6 images with their current filename, alt text, and format",
            "Score each against the checklist: descriptive filename, real alt text, WebP/AVIF, single-subject framing",
            "Flag any image missing 2 or more checklist items as 'needs rework' before the pilot",
            "Approve only images that pass on framing, since that's the one visual search can't compensate for",
          ],
          outputSample:
            "File                                  Alt text                            Format   Framing              Verdict\n" +
            "IMG_5510.jpg                          (none)                              JPEG     Cluttered desk bg   FAIL, rework\n" +
            "navy-wool-blazer-front.webp           'Navy wool blazer, front view'      WebP     Neutral bg, single  PASS\n" +
            "IMG_5512.jpg                          (none)                              JPEG     Model + 2 products  FAIL, rework\n" +
            "brown-leather-belt-detail.webp        'Brown leather belt, buckle detail' WebP     Neutral bg, single  PASS\n" +
            "grey-chinos-side-view.jpg             'Grey chinos'                       JPEG     Neutral bg, single  PARTIAL, convert format\n" +
            "IMG_5515.jpg                          'image123'                          JPEG     Cluttered rack bg   FAIL, rework",
          healthy:
            "3 of 6 images are flagged for rework before the pilot (missing filenames, alt text, or clean framing), and the pilot launches on the 3 that pass.",
          unhealthy:
            "Approving all 6 images for the pilot because 'they'll get indexed eventually', shipping cluttered, unnamed photos into a visual-search pilot wastes the launch on images the matching model can't reliably use.",
          interpret:
            "Framing is the one item on this list a caption can't fix. A perfectly named, perfectly tagged photo of a cluttered rack still confuses the visual match model, filename and alt text only affect whether Google indexes the image at all.",
          soWhat: [
            {
              symptom: "Half the catalog export has generic IMG_ filenames and no alt text",
              action: "Batch-rename and add alt text before the pilot, not after",
              effort: "half day",
            },
            {
              symptom: "One image is well-tagged but shot with 2 products in frame",
              action: "Reshoot single-subject before approving, tagging can't fix framing",
              effort: "half day",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track the audit scorecard across the image export",
            why: "Free, enough structure for a 6-row scorecard",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl the live catalog to pull every image's current alt text and filename at scale",
            why: "Manual review doesn't scale past a handful of images",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored 6-row audit sheet with a pass/rework verdict per image and the specific fix needed for each rework flag.",
      sampleOutput:
        "Applying the same scorecard to a Blue Bottle Coffee bag photo export (illustrative): 'ceramic-dripper-single-origin-pour.webp' passed on all 4 checklist items. 'IMG_9021.jpg' failed on filename, alt text, and format, all three fixed in one export pass before it went back on the sheet.",
      successCriteria: [
        "Flags at least the 3 images missing filename or alt text as needing rework",
        "Does not approve the cluttered/multi-product framing images despite otherwise-good tagging",
        "Names framing as the one defect tagging alone can't fix",
      ],
      portfolioReady: true,
      stretch: "Run Screaming Frog against your own site's image directory and build the same scorecard from real data.",
      whatToLookFor: [
        { label: "Filename quality", detail: "Is the filename descriptive and hyphenated, or a generic camera-generated name like IMG_5510.jpg?" },
        { label: "Alt text substance", detail: "Does the alt text actually describe the content and purpose, or is it missing or a placeholder like 'image123'?" },
        { label: "Framing", detail: "Is the shot single-subject on a clean background, or cluttered with multiple products or a busy backdrop?" },
        { label: "Format", detail: "Is the image in a modern format like WebP/AVIF, or an unconverted JPEG?" },
      ],
      decision: {
        prompt:
          "'grey-chinos-side-view.jpg' has a good filename and alt text, a clean single-subject frame, but is still a JPEG, not WebP/AVIF. Should it be approved for the pilot as-is?",
        options: [
          { id: "a", label: "Yes, approve it, filename and alt text are the two things that matter most for visual search", correct: false },
          { id: "b", label: "No, mark it PARTIAL, convert the format before approving, since framing already passes but format doesn't", correct: true },
          { id: "c", label: "No, reject it outright and require a full reshoot", correct: false },
          { id: "d", label: "Yes, approve it, format doesn't affect visual search at all", correct: false },
        ],
        explanation:
          "The reference scorecard treats this exact case as PARTIAL, convert format: the image passes the harder-to-fix criteria (framing, naming, alt text) and only needs a format conversion, not a reshoot. Approving it outright skips a real checklist item, and a full reshoot wastes effort on an image that's otherwise already correct.",
      },
      professionalRecommendation: {
        priority: "Medium",
        text:
          "Approve the images that already pass framing and format, reshoot the cluttered or multi-product images since tagging can't fix framing, and batch-convert the otherwise-good JPEGs to WebP before greenlighting the Lens pilot. Framing is the one gate that determines the reshoot list.",
      },
      commonMistakes: [
        { mistake: "Approving images because metadata looks fine", explanation: "good filenames and alt text help indexing, but a cluttered or multi-subject frame still confuses the visual match model regardless of tagging quality." },
        { mistake: "Treating every failing image the same way", explanation: "a missing alt text is a quick fix; a cluttered frame requires a reshoot, mixing these into one bucket wastes time on the wrong fix." },
        { mistake: "Skipping the format check because the photo looks fine visually", explanation: "an unconverted JPEG can still pass framing and tagging but should be flagged and converted before launch." },
      ],
      keyTakeaway:
        "Visual search matches pixels, not metadata, so framing is the one checklist item a caption or filename fix can never repair. Sorting each image by which specific checklist item it fails, not a single pass/fail, is what makes the rework list actionable.",
    },
    {
      id: "blue-bottle-visual-search-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Will This Product Shot Survive a Visual Search Match? A Blue Bottle Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a specimen describing one Blue Bottle Coffee product photo and its metadata, identify which properties are genuine visual-search blockers versus non-issues.",
      companyId: "blue-bottle-coffee",
      scenario:
        "Blue Bottle Coffee wants a bag of its New Orleans-style iced coffee to show up when a customer points Google Lens at a bag they saw at a cafe. Before resubmitting the image sitemap, you're reviewing the current product photo.",
      brief:
        "Read the specimen's photo description and current metadata, then separate real visual-search blockers from properties that don't actually matter for the match.",
      mode: "teardown",
      conceptsCovered: ["How Visual Search Actually Works", "Practical Image Optimization Checklist"],
      skills: ["Visual Search Auditing", "Image QA", "Structured Data Awareness"],
      keyQuestion: "Which properties of this photo will actually block a visual-search match, versus properties that just look imperfect?",
      prerequisites: [
        "Understanding of how visual search matches pixels and object shapes, not just metadata",
      ],
      terminology: [
        { term: "ImageObject / Product structured data", definition: "schema markup that lets a matched image be turned into a shoppable result with price and availability attached." },
        { term: "Occlusion", definition: "when part of a product, like its label, is hidden or obscured by shadow, angle, or another object, reducing match confidence." },
      ],
      teardownItems: [
        {
          itemId: "blue-bottle-bag-photo-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "PRODUCT: Blue Bottle New Orleans Iced Coffee, 32oz bottle\n\n" +
            "PHOTO DESCRIPTION: Shot on a wooden cafe table with a half-eaten croissant, a second unrelated coffee mug, and a hand holding a phone in the corner of the frame. Bottle is angled at 45 degrees, label partially in shadow. Warm Instagram-style filter applied.\n\n" +
            "CURRENT METADATA:\n" +
            "- Filename: blue-bottle-nola-iced-coffee-32oz.webp\n" +
            "- Alt text: 'Blue Bottle New Orleans style iced coffee, 32oz glass bottle on a cafe table'\n" +
            "- Format: WebP, 340KB\n" +
            "- No structured data added yet",
          prompt:
            "Which properties of this photo will actually block a Google Lens or Pinterest Lens visual match, and which are fine as-is?",
          answerKey: [
            {
              defect: "Multiple competing objects in frame (croissant, second mug, a hand and phone)",
              severity: "critical",
              whyItMatters:
                "Visual search matches shapes and objects. A cluttered frame with 3-4 competing objects confuses the matching model far more reliably than a clean single-subject shot.",
              lessonRef: "How Visual Search Actually Works: image quality and framing become ranking factors in their own right",
              owner: "you",
            },
            {
              defect: "Label partially in shadow at a steep angle",
              severity: "moderate",
              whyItMatters:
                "The label and bottle shape are the two features a visual match model relies on most; obscuring the label reduces match confidence even if the object shape itself is recognizable.",
              lessonRef: "How Visual Search Actually Works: clean, well-lit, single-subject product shots match far more reliably",
              owner: "you",
            },
            {
              defect: "No structured data added yet",
              severity: "moderate",
              whyItMatters:
                "Without ImageObject/Product structured data, even a successful visual match can't be turned into a shoppable result with price and availability attached.",
              lessonRef: "Practical Image Optimization Checklist: Add ImageObject or Product structured data",
              owner: "developer",
            },
          ],
          distractors: [
            "The warm Instagram-style filter, a filter shifts color slightly but isn't the reason a visual match would fail, framing and occlusion matter far more than color grading",
            "File size at 340KB, this is a reasonably compressed WebP file already and isn't a visual-search blocker; it's a Core Web Vitals concern, a separate issue from match accuracy",
            "The filename and alt text, both are already descriptive and correctly formatted per the checklist, they help indexing but don't affect whether the pixel match itself succeeds",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "List each photo property and mark it as a visual-search blocker or a non-issue with reasoning",
            why: "Enough structure for a short teardown checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A short teardown memo separating real visual-search blockers from non-issues, with the one reshoot instruction that fixes the photo.",
      sampleOutput:
        "Teardown memo, illustrative:\nCRITICAL: cluttered frame, 3 competing objects. Reshoot single-subject on a neutral surface.\nMODERATE: label obscured by angle/shadow. Reshoot straight-on, label fully lit.\nMODERATE: no structured data. Add ImageObject before resubmitting sitemap.\nNOT A BLOCKER: Instagram filter, filename, alt text, and file size are all fine as-is.",
      successCriteria: [
        "Flags the cluttered frame as the critical defect",
        "Does not flag filename, alt text, or file size as visual-search blockers",
        "Correctly separates a metadata gap (structured data) from a pixel-level defect (framing)",
      ],
      portfolioReady: true,
      whatToLookFor: [
        { label: "Frame clutter", detail: "How many competing objects are in the shot, and does that risk confusing the visual-match model?" },
        { label: "Product visibility", detail: "Is the label or key identifying feature clearly visible, well-lit, and unobscured?" },
        { label: "Shoppability readiness", detail: "Is structured data present so a successful visual match can become a shoppable result?" },
        { label: "Cosmetic vs match-blocking", detail: "Does a stylistic choice, like a filter or file size, actually affect match accuracy, or is it unrelated?" },
      ],
      decision: {
        prompt:
          "The photo has a warm Instagram-style filter applied and is a 340KB WebP file. Should either be flagged as a visual-search blocker?",
        options: [
          { id: "a", label: "Yes, both should be flagged since anything nonstandard about the image risks the match", correct: false },
          { id: "b", label: "No, neither blocks the match, the filter is a color-grading choice and the file size is a Core Web Vitals concern, not a match-accuracy issue", correct: true },
          { id: "c", label: "Only the filter should be flagged, since color shifts always reduce match confidence", correct: false },
          { id: "d", label: "Only the file size should be flagged, since larger files always match better", correct: false },
        ],
        explanation:
          "The lesson's framework treats framing and occlusion as the dominant match factors, not color grading or file size. A filter shifts hue slightly but doesn't obscure shape or identifying features, and file size is a page-speed concern unrelated to whether the pixel match itself succeeds.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Reshoot the bottle on a clean, single-subject background with the label fully lit and facing the camera before resubmitting the image sitemap. Add ImageObject/Product structured data in the same pass so a successful match can surface as a shoppable result, and leave the filter, filename, and file size as-is, none of them block the match.",
      },
      commonMistakes: [
        { mistake: "Flagging a color filter as a visual-search blocker", explanation: "framing and occlusion affect match accuracy far more than color grading; a filter is a cosmetic choice." },
        { mistake: "Treating file size as a visual-match issue", explanation: "compression affects page speed and Core Web Vitals, a separate concern from whether the pixel match itself succeeds." },
        { mistake: "Missing the structured data gap because the photo itself looks fine", explanation: "even a clean, well-matched photo can't become a shoppable result without ImageObject/Product markup." },
      ],
      keyTakeaway:
        "A visual-search teardown separates what actually confuses the matching model, clutter, occlusion, obscured labels, from what only affects style or page speed. Getting that distinction right prevents wasted reshoots on things that were never the problem.",
    },
  ],

  "video-seo": [
    {
      id: "video-seo-launch-draft-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Defects: A Launch Video's YouTube and TikTok Drafts",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given an intern's YouTube upload draft and TikTok caption draft for the same product launch, apply the lesson's platform-specific ranking rules to find every metadata choice that will suppress search visibility, without flagging a stylistic choice as a defect just because it looks unusual.",
      companyId: "mvmt-watches",
      scenario:
        "You're the video marketing coordinator at MVMT, the DTC watch brand, reviewing an intern's first two drafts, a YouTube upload and a TikTok caption, for the new chronograph launch before either goes live.",
      brief:
        "Two specimens: one YouTube upload record, one TikTok caption draft. Find the defects using the lesson's Holy Trinity, YouTube-Specific Optimisation, and TikTok Search Optimisation rules as your answer key, and don't invent a defect out of a choice that isn't actually one.",
      mode: "teardown",
      conceptsCovered: [
        "YouTube Ranking Factors: The Holy Trinity",
        "YouTube-Specific Optimisation",
        "The Thumbnail-Title CTR Loop",
        "TikTok Search Optimisation",
      ],
      skills: ["Video SEO Review", "Platform-Specific Optimization", "Metadata QA"],
      keyQuestion: "Which metadata choices across these two drafts will actually suppress search visibility, and which just look unusual?",
      prerequisites: [
        "Familiarity with the YouTube Holy Trinity ranking factors",
        "Basic understanding of how TikTok's search index reads captions and on-screen text",
      ],
      terminology: [
        { term: "Holy Trinity (YouTube)", definition: "the three core YouTube ranking signals: Title Keyword Match, Click-Through Rate, and Average View Duration." },
        { term: "Voice-to-text captioning", definition: "TikTok's automatic transcription of a video's spoken audio, which feeds directly into what the platform's search index can match." },
      ],
      teardownItems: [
        {
          itemId: "item-1-youtube-upload-draft",
          specimenSource: "synthetic-realistic",
          specimen:
            "YouTube upload draft, submitted for review\n\n" +
            "Title: 'Our New Chronograph Collection Is Here!!'\n\n" +
            "Description (first 200 characters, shown before 'Show More'):\n" +
            "'We are so excited to finally share this with you all. It has been a long journey working on this collection and we cannot wait for you to see everything that went into it. Follow us for more!'\n\n" +
            "Tags: mvmt, watches, new collection, fashion, style, ootd, accessories\n\n" +
            "Thumbnail: a wide product-catalog shot of six watches laid flat on a table, no text overlay, no face.\n\n" +
            "Chapters: none added, despite the video walking through all six watches back-to-back.\n\n" +
            "End screen: blank, the video just ends on the last product shot.",
          prompt:
            "Using the lesson's Holy Trinity and YouTube-Specific Optimisation rules, list every metadata choice here that will suppress this video's search visibility, ranked by how much visibility each one costs.",
          answerKey: [
            {
              defect: "Title contains no search keyword, only a brand announcement",
              severity: "critical",
              whyItMatters:
                "Someone searching 'chronograph watch review' or 'best chronograph watches 2026' will never see this video, because Title Keyword Match, the first of the Holy Trinity signals, never fires.",
              lessonRef: "YouTube Ranking Factors: The Holy Trinity",
              owner: "you",
            },
            {
              defect: "Thumbnail has no face, no text overlay, and low contrast, a flat catalog shot",
              severity: "critical",
              whyItMatters:
                "The thumbnail is one half of the CTR loop; a low-contrast catalog photo with nothing to read gives a cold searcher no reason to click over a competitor's video, and CTR from cold impressions is the number YouTube weighs most heavily.",
              lessonRef: "The Thumbnail-Title CTR Loop",
              owner: "you",
            },
            {
              defect: "No chapters added despite covering six distinct products in one video",
              severity: "moderate",
              whyItMatters:
                "Chapters lift average view duration 5-10%; with six products and zero chapters, a viewer who wants only the flagship model can't jump to it and is more likely to drop off before reaching it.",
              lessonRef: "YouTube-Specific Optimisation",
              owner: "you",
            },
            {
              defect: "No end screen or card added at the close of the video",
              severity: "cosmetic",
              whyItMatters:
                "End screens reduce drop-off at the exact moment viewers are most likely to leave; skipping this loses a low-cost chance to add watch time to the next video in the session.",
              lessonRef: "YouTube-Specific Optimisation",
              owner: "either",
            },
          ],
          distractors: [
            "The description opens with 'We are so excited to finally share this', an enthusiastic tone isn't the defect, plenty of high-ranking videos open warmly; the defect is that none of those 200 characters contain a keyword, link, or CTA.",
            "Tags list 'mvmt' before 'watches', tag order inside a reasonable tag list isn't a ranking factor the lesson calls out; the real gaps are the title and thumbnail, not tag sequencing.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-tiktok-caption-draft",
          specimenSource: "synthetic-realistic",
          specimen:
            "TikTok draft, submitted for review\n\n" +
            "Caption: 'ITS FINALLY HERE 🖤⌚️ #newdrop #mvmt #ootd #accessories'\n\n" +
            "On-screen text: none, just b-roll of the watch spinning on a turntable.\n\n" +
            "Voiceover/audio: trending sound, no spoken words.\n\n" +
            "Hashtags: #newdrop #mvmt #ootd #accessories",
          prompt:
            "Using the lesson's TikTok Search Optimisation rules, name every choice here that will keep this video out of TikTok search results for someone actually looking for a chronograph watch.",
          answerKey: [
            {
              defect: "Caption has no searchable keyword describing the product, only an announcement and hashtags",
              severity: "critical",
              whyItMatters:
                "TikTok searches captions directly; someone searching 'chronograph watch' or 'mens watch new release' will never match this caption, no matter how strong the video itself is.",
              lessonRef: "TikTok Search Optimisation",
              owner: "you",
            },
            {
              defect: "No on-screen text naming the product or its features",
              severity: "moderate",
              whyItMatters:
                "On-screen text is searchable and keeps viewers engaged who are watching on mute; a spinning product shot with zero text gives TikTok's search index nothing to read.",
              lessonRef: "TikTok Search Optimisation",
              owner: "you",
            },
            {
              defect: "Trending sound with no spoken words means voice-to-text captioning has nothing to transcribe",
              severity: "moderate",
              whyItMatters:
                "TikTok auto-captions every video via voice-to-text and that transcript feeds search; a silent voiceover leaves this entire signal empty.",
              lessonRef: "TikTok Search Optimisation",
              owner: "either",
            },
          ],
          distractors: [
            "The caption uses emojis (🖤⌚️) next to the hashtags, emojis alongside real keywords aren't a defect on their own; the actual problem is that no keyword is present anywhere in the caption, emoji or not.",
            "There are only 4 hashtags instead of a longer list, hashtag count isn't the issue the lesson flags, hashtags are explicitly secondary to caption and audio quality, and none of these 4 name the product either way.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect found, its severity, and which lesson section it maps to",
            why: "Free, no account friction, enough structure for a 2-item findings list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This exercise needs nothing beyond a place to log findings, the free path is already complete.",
      },
      deliverable:
        "A findings memo listing every defect, with severity, across both the YouTube and TikTok drafts, sent back to the intern before either goes live.",
      sampleOutput:
        "Birchbox findings memo (excerpt)\n\n" +
        "YOUTUBE DRAFT\n" +
        "  CRITICAL: Title 'Get Ready With Us: October Box!' has no keyword match for 'beauty subscription box'.\n" +
        "  MODERATE: No chapters despite 8 products unboxed back-to-back.\n\n" +
        "TIKTOK DRAFT\n" +
        "  CRITICAL: Caption 'so excited for this box 🎀 #birchbox #beauty' names no product, no searchable term.\n" +
        "  MODERATE: No on-screen text naming any of the 3 products shown on camera.",
      successCriteria: [
        "Correctly names the missing keyword as the highest-severity defect on both the YouTube title and the TikTok caption",
        "Does not flag the emoji, tag order, or hashtag count as defects on their own",
        "Assigns the correct lessonRef section to each defect found",
      ],
      portfolioReady: false,
      whatToLookFor: [
        { label: "Keyword presence", detail: "Does the title or caption contain an actual searchable keyword, not just a brand announcement?" },
        { label: "Thumbnail/on-screen text strength", detail: "Does the thumbnail or on-screen text give a cold viewer a reason to click, or is it a flat, unlabeled shot?" },
        { label: "Navigation aids", detail: "Are chapters added on a multi-product video so viewers can jump to what they want?" },
        { label: "Style vs substance", detail: "Is a stylistic choice, like emoji use or tag order, being mistaken for an actual ranking defect?" },
      ],
      decision: {
        prompt:
          "The TikTok caption reads 'ITS FINALLY HERE 🖤⌚️ #newdrop #mvmt #ootd #accessories' with only 4 hashtags. Is the low hashtag count itself a defect?",
        options: [
          { id: "a", label: "Yes, more hashtags always improve TikTok search visibility", correct: false },
          { id: "b", label: "No, hashtag count isn't the issue, the real problem is that none of the caption or hashtags name the product at all", correct: true },
          { id: "c", label: "Yes, but only because none of the 4 hashtags are trending", correct: false },
          { id: "d", label: "No, and no other defects exist in this caption once hashtag count is dismissed", correct: false },
        ],
        explanation:
          "The lesson treats hashtags as secondary to caption and audio quality, hashtag count isn't a defect the lesson calls out. The real, critical defect is that neither the caption nor any hashtag names the product, so a search for 'chronograph watch' would never match this video regardless of hashtag count.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Send both drafts back before publishing. Rewrite the YouTube title to lead with a real search keyword, replace the flat catalog thumbnail with one showing a face and text overlay, add chapters for the six products, and rewrite the TikTok caption to name the product and its category instead of only an announcement and hashtags.",
      },
      commonMistakes: [
        { mistake: "Flagging emoji use or tag order as defects", explanation: "these are stylistic details the lesson doesn't call out as ranking factors; the actual problem is the missing keyword itself." },
        { mistake: "Missing the thumbnail defect because the video content is strong", explanation: "a flat, low-contrast thumbnail loses cold viewers before they ever see the content, regardless of video quality." },
        { mistake: "Treating all defects as equal severity", explanation: "a missing keyword is critical since it blocks discovery entirely, while a missing end screen is a lower-cost, cosmetic loss." },
      ],
      keyTakeaway:
        "Video metadata defects fall into two buckets: choices that block discovery entirely, like a missing keyword, and choices that only reduce engagement at the margins, like a missing end screen. Separating real ranking-blockers from stylistic non-issues is what makes a review useful before a video launches.",
    },
    {
      id: "video-seo-upload-audit",
      tier: "core",
      archetype: "audit",
      title: "The Diagnostic Pass: Auditing a Real YouTube Upload for Search Signals",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a published video's title, chapter status, Search Console video-type data, and CTR breakdown, apply all four Holy Trinity and platform-optimisation checks from the lesson to decide what to fix first, and defend it with the specific number that justifies it.",
      companyId: "birchbox",
      scenario:
        "You're the video content lead at Birchbox, the beauty-sample subscription pioneer, auditing the YouTube video embedded in the blog post 'What's In Our October Box' before green-lighting more video spend for November. The numbers below are a composite audit built for this exercise, not Birchbox's disclosed production metrics.",
      brief:
        "Four checks over one upload: does the title match a keyword anyone actually searches, do chapters exist on a multi-product video, does the blog embed actually reach Google's Video search results, and is the CTR even in a defensible range once you separate cold traffic from loyal subscribers.",
      mode: "diagnostic",
      conceptsCovered: [
        "Title Keyword Match",
        "Chapters and Timestamps",
        "Video Schema Markup for Google Search",
        "Click-Through Rate (CTR)",
      ],
      skills: ["Video SEO Auditing", "Search Console Analysis", "CTR Diagnostics"],
      keyQuestion: "Across four separate checks, which single fix should this video get first, and what number justifies that choice?",
      prerequisites: [
        "Familiarity with the YouTube Holy Trinity ranking factors",
        "Basic Search Console navigation",
      ],
      terminology: [
        { term: "VideoObject schema", definition: "structured data on a webpage that makes it eligible for a video rich result in Google web search, separate from ranking inside YouTube itself." },
        { term: "Cold CTR", definition: "click-through rate measured only on non-subscriber impressions, isolating how well a title and thumbnail perform on viewers who've never seen the channel before." },
      ],
      steps: [
        {
          stepId: "step-1-title-keyword-match",
          concept: "Title Keyword Match",
          lessonAnchor: "youtube-ranking-factors-the-holy-trinity",
          theoryRecap:
            "The lesson's Holy Trinity opens with Title Keyword Match: a title containing the exact search term in its first 3 words ranks ahead of a better video that doesn't, because keyword match is the first relevance signal YouTube checks.",
          question:
            "The video is titled 'Our October Beauty Box Reveal!' and the team wants it to rank for 'best beauty subscription box'. Does this title pass the Title Keyword Match test, and if not, what's the fix?",
          toolName: "Google Sheets",
          where: "A two-column sheet: current title in column A, target keyword in column B.",
          procedure: [
            "Write the current title and the target keyword phrase side by side",
            "Check whether the keyword phrase appears anywhere in the title",
            "Check whether it appears specifically in the first 3 words",
            "If it fails either check, draft a replacement using the lesson's '[Keyword], [benefit or curiosity gap]' format",
          ],
          outputSample:
            "Current title: 'Our October Beauty Box Reveal!'\n" +
            "Target keyword: 'best beauty subscription box'\n" +
            "Keyword in title? No\n" +
            "Keyword in first 3 words? No\n\n" +
            "Revised: 'Best Beauty Subscription Box? We Unbox October's Box Live'",
          healthy:
            "The revised title puts the exact keyword phrase in the first few words, then adds the curiosity gap ('We Unbox... Live') after it.",
          unhealthy:
            "Publishing 'Our October Beauty Box Reveal!' and expecting search traffic, the phrase 'beauty box reveal' does not match how anyone actually searches for a subscription box.",
          interpret:
            "A title can be on-brand and still be search-invisible; brand voice and keyword match are different jobs, and keyword match has to win in the first 3 words or the video never surfaces for that query.",
          soWhat: [
            {
              symptom: "Video gets views only from existing subscribers and near-zero from search",
              action: "Rewrite the title with the keyword phrase in the first 3 words, keep the brand voice for the second half",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-chapters-signal",
          concept: "Chapters and Timestamps",
          lessonAnchor: "youtube-specific-optimisation",
          theoryRecap:
            "The lesson notes a video with chapters gets 5-10% higher average view duration, and the Arc'teryx case shows chapters as one input into a 386% jump in Google Search video views when paired with the rest of a metadata cleanup.",
          question:
            "This 9-minute unboxing video covers 8 products back-to-back with zero chapter markers, and average view duration sits at 34%. What's the fastest fix, and what result should the team expect, a plausible range, not a guarantee?",
          toolName: "Google Sheets",
          where: "Log the video's current AVD and product order, then draft chapter timestamps against it.",
          procedure: [
            "List each of the 8 products in the order they appear with a rough timestamp",
            "Add those 8 timestamps as YouTube chapters",
            "Record the current 34% average view duration as the baseline",
            "Re-check average view duration after 2 weeks against the lesson's 5-10% lift range",
          ],
          outputSample:
            "8 products, 0 chapters, AVD 34% (about 3 of 9 minutes)\n\n" +
            "Proposed chapters:\n" +
            "0:00 Intro\n0:42 Product 1, cleansing balm\n1:55 Product 2, vitamin C serum\n...\n7:40 Product 8, overnight mask\n8:20 Final thoughts",
          healthy:
            "Adding chapters lets a viewer who only wants Product 6 jump straight there instead of scrubbing the timeline or abandoning at minute 3.",
          unhealthy:
            "Leaving all 8 products in one unbroken block and attributing the 34% AVD to 'people not caring about beauty content', when the real issue is nobody can navigate to the part they want.",
          interpret:
            "34% AVD on a multi-product video is a structure problem before it's a content problem; chapters are a 30-minute fix the lesson's own benchmark makes worth doing before touching anything else.",
          soWhat: [
            {
              symptom: "AVD sits well under 50% on any video covering more than one product or topic",
              action: "Add chapter timestamps at every topic change before the next upload, retrofit the existing one too",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-schema-search-console",
          concept: "Video Schema Markup for Google Search",
          lessonAnchor: "video-schema-markup-for-google-search",
          theoryRecap:
            "VideoObject schema on a blog page that embeds a YouTube video makes that page eligible for a video rich result in Google web search, a separate placement from ranking inside YouTube itself. The Vidio case shows what's at stake done well: roughly 3x more video impressions and 2x more clicks within a year.",
          question:
            "The blog post 'What's In Our October Box' embeds this video but has no VideoObject schema. Filtering Search Console's Performance report to search type 'Video' for this URL, what do you expect to see, and what's the fix?",
          toolName: "Google Search Console",
          where: "Search Console > Performance > Search results, filter Search type to 'Video'.",
          procedure: [
            "Open the Performance report and filter Search type to Video",
            "Check impressions and clicks for the blog URL specifically",
            "Confirm via page source or a rich results test that no VideoObject block is present",
            "Add the VideoObject block with name, description, thumbnailUrl, uploadDate, and duration",
          ],
          outputSample:
            "Search type: Video, filtered to /blog/whats-in-our-october-box\n" +
            "Impressions: 0\n  Clicks: 0\n" +
            "(Compare: the same URL under search type 'Web' shows 1,240 impressions, 38 clicks)",
          healthy:
            "After adding VideoObject schema, the URL starts appearing in the Video search type report within a few weeks, a second placement for a query the page already ranks for on text alone.",
          unhealthy:
            "Assuming the embedded YouTube video is 'already doing SEO' for the blog page just because it's visible on the page, schema is what tells Google the video is there at all.",
          interpret:
            "Zero in the Video row while the Web row shows real traffic means the page ranks on text content alone and leaves an entire second placement unclaimed, a pure schema gap, not a content problem.",
          soWhat: [
            {
              symptom: "Video search type shows 0 impressions on a page with an embedded video and real Web traffic",
              action: "Add VideoObject schema with all 5 required fields to the page template",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-4-ctr-benchmark",
          concept: "Click-Through Rate (CTR)",
          lessonAnchor: "youtube-ranking-factors-the-holy-trinity",
          theoryRecap:
            "The lesson sets 6% CTR on real impressions as solid and flags 2% as a sign the title or thumbnail is weak. The 2026 refinement adds that cold, non-subscriber impressions matter more than subscriber CTR, since that's the audience YouTube is actually trying to grow.",
          question:
            "YouTube Studio shows 14,000 impressions and 310 clicks on this video; 11,000 of those impressions are non-subscribers. What's the blended CTR, what's the cold CTR, and does the blended number alone tell the full story?",
          toolName: "Google Sheets",
          where: "Two columns, impressions and clicks, split subscriber vs non-subscriber using the source data.",
          procedure: [
            "Divide total clicks by total impressions for the blended CTR",
            "Estimate non-subscriber clicks and divide by non-subscriber impressions for the cold CTR",
            "Compare both figures against the lesson's 6% solid / 2% weak benchmarks",
            "Flag whichever number is weaker as the one to fix first",
          ],
          outputSample:
            "Blended CTR: 310 / 14,000 = 2.2%\n" +
            "Non-subscriber impressions: 11,000 (~230 of the 310 clicks estimated non-subscriber)\n" +
            "Cold CTR: 230 / 11,000 = 2.1%",
          healthy:
            "A cold CTR near or above 6% means the title and thumbnail are doing their job on searchers who have never seen the channel before.",
          unhealthy:
            "Looking only at the blended 2.2% and concluding 'the channel is fine' because loyal subscribers click anyway, which masks a weak thumbnail that cold searchers are scrolling past.",
          interpret:
            "2.1% cold CTR sits squarely in the lesson's weak range, this is a thumbnail/title problem to fix before spending more on production, not a content problem.",
          soWhat: [
            {
              symptom: "Cold CTR sits at or below 2% while blended CTR looks acceptable",
              action: "A/B test 2 new thumbnail concepts (face plus text overlay) against the current flat-lay thumbnail",
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
            role: "Log title/keyword checks, chapter timestamps, and the CTR math",
            why: "Free, no paid plan needed to run all four checks",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Search Console",
            role: "Check the Video search type report for the blog page",
            why: "Free, and the only tool that shows whether a page is actually eligible for the Video rich result",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Pull search volume for keyword candidates before committing to a replacement title",
            why: "Confirms the replacement keyword has real search demand instead of relying on intuition alone",
            required: false,
            fallback: "Free YouTube search-suggest and Google autocomplete for the same keyword phrase",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Every step above is completable with the two free tools alone; Ahrefs only adds keyword-volume confidence before the rewrite.",
      },
      deliverable:
        "A 4-item audit memo (title, chapters, schema, CTR) with the specific fix and expected impact for each, ready to hand to whoever owns the next upload.",
      sampleOutput:
        "MVMT YouTube audit memo (excerpt)\n\n" +
        "1. TITLE: 'New Drop: Chrono Series' has no keyword match for 'minimalist watches for men' (target). Fix: retitle to lead with the keyword.\n" +
        "2. CHAPTERS: none on a 7-product video, AVD 29%. Fix: add 7 chapter timestamps.\n" +
        "3. SCHEMA: blog embed shows 0 Video-type impressions in Search Console despite 900 Web impressions. Fix: add VideoObject schema.\n" +
        "4. CTR: cold CTR 1.8% against a 6% benchmark. Fix: A/B test 2 thumbnails with a model wearing the watch.",
      successCriteria: [
        "Correctly identifies that the title fails Title Keyword Match and rewrites it in the lesson's [Keyword], [benefit] format",
        "Flags the missing chapters as the fastest fix for the 34% AVD",
        "Distinguishes the Video search type gap from the Web search type traffic in Search Console",
        "Isolates cold-audience CTR from blended CTR before judging the thumbnail",
      ],
      portfolioReady: true,
      stretch: "Run the same 4 checks on 3 more videos and build a one-page video-SEO health scorecard for the whole channel.",
      whatToLookFor: [
        { label: "Keyword placement", detail: "Does the title contain the target keyword phrase, and specifically within the first 3 words?" },
        { label: "Navigation vs content problem", detail: "Is a low average view duration actually a structure problem (no chapters) rather than a content-quality problem?" },
        { label: "Placement coverage", detail: "Does the page rank in both Web and Video search types, or is an entire placement unclaimed due to missing schema?" },
        { label: "Blended vs cold metrics", detail: "Does a metric like CTR look acceptable blended across all viewers, but reveal a real problem once isolated to cold, non-subscriber traffic?" },
      ],
      decision: {
        prompt:
          "Blended CTR is 2.2% (310/14,000) and cold CTR is 2.1% (230/11,000). The lesson benchmarks are 6% solid, 2% weak. What's the correct read?",
        options: [
          { id: "a", label: "The channel is fine overall since 2.2% is close to acceptable once rounded", correct: false },
          { id: "b", label: "Both numbers sit in the weak range, and the cold CTR is the one that matters most since it reflects performance with new, unfamiliar viewers", correct: true },
          { id: "c", label: "Only the blended number matters, since it reflects total video performance", correct: false },
          { id: "d", label: "Neither number is meaningful without knowing the video's total view count", correct: false },
        ],
        explanation:
          "Both the blended and cold CTR sit near the lesson's 2% weak benchmark, well below the 6% solid mark. The cold CTR matters most because it isolates performance with viewers who've never seen the channel before, exactly the audience YouTube is trying to grow, and it points squarely at a thumbnail/title problem rather than a content problem.",
      },
      professionalRecommendation: {
        priority: "High",
        text:
          "Fix all four gaps, but sequence them by cost and impact: rewrite the title with the keyword in the first 3 words first (5-minute fix), add the 8 chapter timestamps next (30-minute fix), then hand off VideoObject schema to a developer, and A/B test 2 new thumbnails to address the 2.1% cold CTR, since that's the number that determines whether new viewers click at all.",
      },
      commonMistakes: [
        { mistake: "Judging the CTR fix as unnecessary because blended CTR looks close to acceptable", explanation: "blended CTR can mask a much weaker cold CTR; the cold number is what governs growth beyond existing subscribers." },
        { mistake: "Assuming an embedded YouTube video automatically helps a blog page rank for Video search", explanation: "without VideoObject schema, Google doesn't know the video is eligible for the Video search type, leaving that placement at zero regardless of Web-type ranking." },
        { mistake: "Attributing low average view duration to weak content instead of missing navigation", explanation: "a multi-product video with zero chapters can't be scrubbed to the part a viewer wants, which drives dropout independent of content quality." },
        { mistake: "Fixing only the highest-severity issue and stopping", explanation: "all four checks here are independent gaps; skipping the schema or chapter fix leaves real visibility on the table even after the title is corrected." },
      ],
      keyTakeaway:
        "A thorough video SEO audit runs multiple independent checks, title, chapters, schema, and CTR, because each targets a different point of failure, discovery, retention, placement, and click appeal. Isolating cold-audience metrics from blended ones, and connecting a weak number to its specific root cause, is what turns a scorecard into a prioritized fix list.",
    },
  ],

  "link-building": [
    {
      id: "link-building-quality-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Quality Gate: Auditing a Competitor Backlink Profile",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit a 30-domain backlink export for an email marketing guide using Domain Rating (DR), topical relevance, organic traffic, and anchor text distribution to filter toxic link networks and identify high-value editorial targets.",
      companyId: "mailchimp",
      scenario:
        "Mailchimp (Intuit acquisition, $12B exit) is expanding its organic search footprint for transactional email and marketing automation guides. You've been handed a raw 30-domain backlink export from a competitor's top-ranking resource. Before the marketing team spends weeks sending outreach pitches, you need to triage the prospect list: separate genuine editorial authority from low-grade link farms and over-optimized directory spam that could trigger a Google manual action.",
      brief:
        "Evaluate the prospect backlink pool across three quality gates: authority & traffic thresholds, anchor text safety ratios, and outreach prospect scoring. Produce a clean 5-target outreach queue ready for personalized pitches.",
      mode: "diagnostic",
      conceptsCovered: [
        "Evaluating link quality with Domain Rating and organic traffic",
        "Detecting anchor text over-optimization and penalty risks",
        "Prioritizing personalized outreach for linkable assets",
      ],
      skills: ["Backlink Analysis", "Link Triage", "Anchor Text Optimization", "Ahrefs"],
      keyQuestion:
        "Which backlink prospects carry genuine editorial equity that moves rankings, and which pose algorithmic penalty risks?",
      prerequisites: [
        "Understanding of Domain Rating (DR) and PageRank fundamentals",
        "Basic spreadsheet filtering and sorting skills",
      ],
      terminology: [
        {
          term: "Domain Rating (DR)",
          definition: "A proprietary 0-100 metric by Ahrefs predicting a website's ranking power based on the quality and size of its unique referring domain profile.",
        },
        {
          term: "Anchor Text Over-Optimization",
          definition: "Using exact-match commercial keywords as clickable link text in an unnaturally high proportion (>20%), which triggers Google Penguin spam filters.",
        },
      ],
      steps: [
        {
          stepId: "step-1-dr-traffic-filter",
          concept: "Evaluating link quality with Domain Rating and organic traffic",
          lessonAnchor: "what-makes-a-good-link",
          theoryRecap:
            "A high-quality backlink requires more than a high Domain Rating (DR 40+). It must have real organic monthly traffic (at least 1,000 monthly visits) and topical relevance to your niche. High-DR sites with zero organic traffic are frequently expired domains turned into link networks (PBNs) that pass zero real equity.",
          question:
            "In this 30-domain export, which domains satisfy both the DR 40+ threshold AND prove active organic traffic (>1,000 visits/month), and which high-DR domains fail the traffic health check?",
          toolName: "Ahrefs",
          where: "Site Explorer > Backlink Profile > Referring Domains export filtered in Google Sheets.",
          procedure: [
            "Import the competitor referring domains export into Google Sheets and freeze the header row",
            "Filter the 'Domain Rating' column for values >= 40",
            "Filter the 'Organic Traffic' column for values >= 1,000 visits/month",
            "Flag any domain with DR > 50 but Organic Traffic < 200 as a potential private blog network (PBN) or link farm",
          ],
          outputSample:
            "DOMAIN TRIAGE REPORT (Sample of 6 from 30 prospects)\n\n" +
            "PASSED QUALITY GATE (High Authority + Live Traffic):\n" +
            "  martechseries.com          DR 74   Monthly Traffic: 84,200   Category: Martech / SaaS      [PASS]\n" +
            "  emailvendorselection.com   DR 58   Monthly Traffic: 21,500   Category: Email Marketing     [PASS]\n" +
            "  benchmarkemail.com/blog    DR 72   Monthly Traffic: 65,000   Category: B2B Marketing       [PASS]\n\n" +
            "FAILED QUALITY GATE (High DR / Zero Traffic Trap):\n" +
            "  the-daily-tech-hub.biz     DR 52   Monthly Traffic: 42       Category: General Directory   [REJECT - PBN Sign]\n" +
            "  global-saas-awards.net     DR 48   Monthly Traffic: 110      Category: Expired Domain Farm [REJECT - Inactive]\n" +
            "  freemarketinglinks.xyz     DR 14   Monthly Traffic: 0        Category: Spam Directory      [REJECT - Low DR]",
          healthy:
            "Discarding low-traffic and spam domains immediately; keeping only topically relevant domains with DR 40+ and verified organic search visitors.",
          unhealthy:
            "Pitching every DR 40+ domain indiscriminately without checking organic traffic, wasting team outreach hours on dead sites or penalizing the brand with link farm associations.",
          interpret:
            "A high DR score without organic search traffic indicates a domain penalized or abandoned by Google. Real authority flows through pages Google actively indexes and serves to searchers.",
          soWhat: [
            {
              symptom: "Outreach list contains high-DR sites with under 500 monthly organic visits",
              action: "Purge zero-traffic domains from the prospect sheet before enriching contact emails",
              effort: "5 min",
            },
            {
              symptom: "Stakeholders ask why a DR 60 site was excluded from the campaign",
              action: "Show the organic traffic graph demonstrating zero keyword visibility in Google",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-anchor-text-audit",
          concept: "Detecting anchor text over-optimization and penalty risks",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Google's Penguin algorithm monitors anchor text distribution. Natural backlink profiles feature a healthy blend: 50-70% branded ('Mailchimp'), 20-30% URL/naked ('mailchimp.com'), 10-15% topical/partial-match ('email automation guide'), and under 5% exact-match commercial keywords ('best email marketing software').",
          question:
            "Reviewing the existing incoming anchor text profile for the target landing page, what is the exact-match commercial keyword percentage, and does it exceed the safe 5-10% threshold?",
          toolName: "Google Sheets",
          where: "Google Sheets anchor text classification sheet derived from Ahrefs Anchors report.",
          procedure: [
            "Export the target URL's current anchor text breakdown from Ahrefs or Google Search Console",
            "Group anchors into four standard buckets: Branded, Naked URL, Partial Match / Editorial, and Exact Match Commercial",
            "Calculate the percentage share of each anchor category against total referring domains",
            "Flag if exact-match commercial keywords exceed 10% of total links",
          ],
          outputSample:
            "ANCHOR TEXT PROFILE AUDIT\n\n" +
            "Category                     Count    Share      Benchmark Range     Status\n" +
            "--------------------------------------------------------------------------\n" +
            "Branded (e.g. 'Mailchimp')     142    54.6%      50% - 70%           HEALTHY\n" +
            "Naked URL (e.g. 'domain.com')   64    24.6%      20% - 30%           HEALTHY\n" +
            "Editorial / Contextual          38    14.6%      10% - 20%           HEALTHY\n" +
            "Exact Commercial Keyword        16     6.2%      < 10%               SAFE (< 10%)\n" +
            "--------------------------------------------------------------------------\n" +
            "Total Referring Domains:       260   100.0%\n\n" +
            "Recommendation: In new outreach campaigns, request editorial partial-match or branded anchors ('Mailchimp research', 'according to this email study') rather than commercial anchors.",
          healthy:
            "Exact-match anchors remain under 10%, keeping the profile natural and safe from Google spam filters.",
          unhealthy:
            "Over-optimizing anchor text by asking every outreach partner to use the exact keyword 'best transactional email software', triggering algorithmic devaluation.",
          interpret:
            "Google expects organic citations to describe the company or content naturally. A spike in identical commercial anchor text signals paid or manipulated links.",
          soWhat: [
            {
              symptom: "Exact match commercial anchors climb above 15% of the backlink profile",
              action: "Shift upcoming outreach instructions to request branded and natural publication anchors",
              effort: "30 min",
            },
            {
              symptom: "A publishing partner asks what anchor text you want for an editorial citation",
              action: "Provide the brand name or asset title ('Mailchimp Benchmark Report') instead of a money keyword",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-asset-outreach-prioritization",
          concept: "Prioritizing personalized outreach for linkable assets",
          lessonAnchor: "the-outreach-numbers-you-need-to-know",
          theoryRecap:
            "Personalized outreach yields a 33% response rate compared to just 8.5% for mass generic blasts. To maximize ROI, prioritize editors and content managers who recently covered related topics (within 6 months) and have demonstrated a history of citing external data.",
          question:
            "From the verified DR 40+ domains, which 5 editorial prospects represent the highest expected value based on topical fit, author recency, and contextual link placement opportunities?",
          toolName: "Google Sheets",
          where: "Spreadsheet outreach queue with author name, verified email, recent article URL, and pitch angle.",
          procedure: [
            "Isolate the vetted DR 40+ domains that passed Step 1 and Step 2",
            "Identify the specific writer or managing editor responsible for the email marketing column",
            "Find an article published within the last 90 days that mentions email metrics or deliverability",
            "Draft a 2-sentence value-add hook offering relevant proprietary benchmark data to enrich their guide",
          ],
          outputSample:
            "PRIORITIZED OUTREACH QUEUE (Top 3 of 5)\n\n" +
            "1. Domain: martechseries.com (DR 74, 84.2k traffic)\n" +
            "   Contact: Editorial Director (Tech Columns)\n" +
            "   Context: Published 'Top Marketing Automation Bottlenecks in 2025' on Feb 12\n" +
            "   Angle: Offer proprietary data on open rate variance across B2B vs B2C transactional flows\n\n" +
            "2. Domain: emailvendorselection.com (DR 58, 21.5k traffic)\n" +
            "   Contact: Lead Reviewer & Analyst\n" +
            "   Context: Updating their 'Email Deliverability Benchmark Guide'\n" +
            "   Angle: Provide updated SMTP throughput benchmarks and sender reputation metrics\n\n" +
            "3. Domain: benchmarkemail.com/blog (DR 72, 65k traffic)\n" +
            "   Contact: Managing Content Strategist\n" +
            "   Context: Has resource page citing 2021 email deliverability stats\n" +
            "   Angle: Broken/outdated data replacement with fresh 2025 deliverability statistics",
          healthy:
            "Targeting a tight list of 10-20 highly qualified authors with unique, context-specific hooks that add value to their existing content.",
          unhealthy:
            "Blasting a generic template to 500 'info@' or 'contact@' email addresses, burning the domain's email deliverability and achieving <1% placement rates.",
          interpret:
            "Editorial links cannot be demanded; they are earned by supplying journalists and writers with timely evidence that improves their published work.",
          soWhat: [
            {
              symptom: "Outreach campaign response rate is tracking below 10%",
              action: "Pause send queue; rewrite pitch intros with specific references to the author's recent articles",
              effort: "30 min",
            },
            {
              symptom: "Writer replies requesting $300 for a link insertion",
              action: "Decline paid link schemes per Google guidelines; archive prospect to preserve clean profile",
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
            role: "Prospect filtering and anchor text distribution calculation",
            why: "Enables multi-variable filtering (DR, traffic, relevance) and custom percentage calculations without subscription tools.",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Search Console",
            role: "Extract existing backlink and anchor text data",
            why: "Free source of all Google-indexed backlinks and referring domains for your property.",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Competitor backlink export and Domain Rating validation",
            why: "Industry-standard database for competitor referring domain intelligence and broken link discovery.",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
        paidUpgradeNote: "Ahrefs Free Backlink Checker and Google Sheets cover basic domain auditing; a paid Ahrefs or SEMrush seat accelerates bulk 1,000+ domain exports.",
      },
      deliverable:
        "A prioritized Backlink Quality Audit Sheet containing 30 audited prospects, categorized anchor text distribution ratios, and a 5-contact personalized outreach queue.",
      sampleOutput:
        "BACKLINK AUDIT SUMMARY & ACTION PLAN\nTarget Asset: Klaviyo Ecommerce Benchmark Report\n\n1. AUDIT FINDINGS:\n- Total referring domains reviewed: 30\n- Qualified (DR >= 40, Monthly Traffic >= 1,000, Niche Relevant): 12 domains (40.0%)\n- Rejected (DR < 40, Traffic < 500, or PBN/Spam Indicators): 18 domains (60.0%)\n- Anchor Text Profile: 61% Branded ('Klaviyo'), 22% Naked URL, 11% Editorial Context, 6% Commercial Keyword (HEALTHY)\n\n2. TOP OUTREACH TARGETS:\n- retailtouchpoints.com (DR 77, 110k traffic) - Target: Senior Retail Tech Editor\n- practicalecommerce.com (DR 75, 95k traffic) - Target: Contributing Analytics Writer\n- modernretail.co (DR 72, 140k traffic) - Target: E-commerce Columnist\n\n3. ACTION ITEMS:\n- Outreach batch size: 15 personalized pitches (expected response: 5 replies, 2-3 links)\n- Preferred anchor format: 'Klaviyo ecommerce benchmarks' or 'data from Klaviyo'",
      successCriteria: [
        "All 30 domains audited against both authority (DR 40+) and traffic (>1,000 visits) thresholds",
        "Zero low-traffic link farms or PBNs present in the final outreach queue",
        "Anchor text breakdown calculated and verified safe (<10% exact match commercial)",
        "Every approved prospect includes a specific author contact and contextual article reference",
      ],
      portfolioReady: true,
      decision: {
        prompt:
          "During your audit, you find a DR 68 domain that has 45,000 backlinks but only 38 monthly organic visits in Google Search. What is the correct decision?",
        options: [
          {
            id: "opt-1",
            label: "Pitch them immediately because DR 68 passes high-authority ranking thresholds.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Reject the domain; high DR with zero search traffic is a classic footprint of a de-indexed or penalized link network.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Offer to buy a sponsored link with an exact-match keyword anchor.",
            correct: false,
          },
        ],
        explanation:
          "Domain Rating measures backlink quantity and strength, but Google's algorithm devalues or penalizes sites that lose search visibility. A site with DR 68 and zero organic traffic has likely been demoted by Google spam updates, meaning links from it pass zero positive ranking power.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Enforce a strict two-factor qualification gate (DR 40+ AND minimum 1,000 monthly organic search visitors) before adding any prospect to the outreach CRM. Never evaluate backlink opportunities on Domain Rating alone.",
      },
      commonMistakes: [
        {
          mistake: "Treating DR/DA as the sole metric for link quality",
          explanation: "Domain metrics are third-party estimates that can be artificially inflated with automated link loops. Real organic search traffic is the true indicator of Google's trust.",
        },
        {
          mistake: "Sending generic blast pitches to unverified contact addresses",
          explanation: "Mass cold outreach achieves an 8.5% response rate and risks blacklisting your sending domain. Personalizing pitches to specific articles raises response rates to ~33%.",
        },
      ],
      keyTakeaway:
        "Quality beats quantity in modern link building: 5 editorial links from active, high-traffic industry publications move rankings further than 100 links from dead directories and low-grade link farms.",
    },
    {
      id: "link-building-asset-pitch-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Link Magnet: Proprietary Industry Study & Digital PR Pitch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Structure an original data-driven research report from restaurant ordering trends, design citable data tables and visual soundbites, identify broken industry citations for replacement, and draft a high-converting digital PR pitch sequence.",
      companyId: "zomato",
      scenario:
        "Zomato (publicly listed on NSE/BSE, ₹981 Cr+ issue) wants to build lasting organic search authority for its B2B restaurant partner hub and cloud kitchen solutions. Rather than paying for sponsored placements or relying on short-lived guest posts, leadership has greenlit an annual 'State of Indian Dining & Cloud Kitchen Economics' research report. Your task is to turn proprietary platform trends into a citable linkable asset and execute a digital PR outreach sequence that earns top-tier media and industry backlinks.",
      brief:
        "Build the complete link acquisition asset and outreach workflow: define 3 unique proprietary data hooks, identify competitor broken link opportunities in the hospitality tech space, craft a personalized 3-part journalist pitch, and establish a backlink tracking sheet.",
      mode: "build",
      conceptsCovered: [
        "Creating original research and linkable assets",
        "Personalizing digital PR pitches for high response rates",
        "Executing broken link reclamation on industry resources",
        "Monitoring backlink velocity and compounding authority",
      ],
      skills: ["Digital PR", "Linkable Asset Creation", "Broken Link Building", "Outreach Copywriting"],
      keyQuestion:
        "How do you package proprietary platform data into an authoritative industry benchmark that journalists and bloggers naturally cite as primary evidence?",
      prerequisites: [
        "Familiarity with digital PR news angles and journalist outreach beats",
        "Understanding of broken link building mechanisms and 301/404 triage",
      ],
      terminology: [
        {
          term: "Linkable Asset",
          definition: "A high-value, comprehensive piece of content (such as an original survey, industry dataset, or free tool) specifically built to attract natural backlinks from external publishers.",
        },
        {
          term: "Digital PR",
          definition: "The practice of pitching journalists, industry editors, and bloggers with newsworthy data, trends, or expert commentary to secure high-authority editorial citations.",
        },
      ],
      steps: [
        {
          stepId: "step-1-data-hook-definition",
          concept: "Creating original research and linkable assets",
          lessonAnchor: "strategy-1-linkable-asset-creation",
          theoryRecap:
            "Original research is the highest-leverage linkable asset. Articles longer than 3,000 words with proprietary data attract 3.5x more backlinks than opinion pieces. Writers and journalists constantly seek credible, primary statistics to validate their stories.",
          question:
            "What three specific, quantified data hooks from food delivery and restaurant operations provide the strongest citation value for business journalists and trade publications?",
          toolName: "Google Sheets",
          where: "Research Outline in Google Sheets with metric definitions, sample sizes, and headline stats.",
          procedure: [
            "Select 3 high-interest themes: Cloud Kitchen Profitability, Delivery Radius vs Order Volume, and Digital Ordering Adoption in Tier-2/Tier-3 Cities",
            "Structure clear sample size boundaries (e.g., 'Analysis of 125,000 restaurant partner orders across 45 cities')",
            "Formulate 3 citable 'soundbite statistics' that journalists can quote directly in one sentence",
            "Format data into a standalone summary table ready for web embedding",
          ],
          outputSample:
            "LINKABLE ASSET DATA HOOKS & HEADLINE FINDINGS\n\n" +
            "Hook 1: Cloud Kitchen Unit Economics (Target: Tech & Financial Media)\n" +
            "  Statistic: 'Cloud kitchens in Tier-2 Indian hubs achieved operating profitability in 4.2 months vs 11.8 months for traditional dine-in restaurants in 2025.'\n" +
            "  Citation format: 'According to Zomato's 2025 Restaurant Industry Benchmark Study...'\n\n" +
            "Hook 2: Late-Night Ordering Surge (Target: Lifestyle & Urban Trends Press)\n" +
            "  Statistic: 'Post-11 PM orders grew by 78% year-over-year in non-metro capitals, led by Jaipur, Lucknow, and Chandigarh.'\n\n" +
            "Hook 3: Digital Menu Engineering (Target: Hospitality B2B & Trade Blogs)\n" +
            "  Statistic: 'Restaurants with localized item descriptions and high-res photography saw a 24.3% lift in checkout completion.'",
          healthy:
            "Producing specific, quantified benchmarks with transparent sample sizes and dates that give journalists immediate evidence for news articles.",
          unhealthy:
            "Publishing generic thought-leadership essays with no original data, leaving writers nothing concrete to cite or link back to.",
          interpret:
            "Journalists don't link to opinions; they link to primary data sources that substantiate their claims. Clear, single-sentence statistics turn articles into citable link magnets.",
          soWhat: [
            {
              symptom: "Draft asset contains broad qualitative commentary without clear numbers",
              action: "Add definitive sample size and percentage changes to each key takeaway section",
              effort: "30 min",
            },
            {
              symptom: "Data points are buried deep in dense paragraph text",
              action: "Pull out key statistics into highlighted callout boxes and embeddable comparison tables",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-broken-link-prospecting",
          concept: "Executing broken link reclamation on industry resources",
          lessonAnchor: "strategy-3-broken-link-building",
          theoryRecap:
            "Broken link building is a low-friction tactic: identify resources that link to dead 404 URLs on defunct industry blogs, then notify the site owner and offer your fresh, updated research as a working replacement.",
          question:
            "Using backlink analysis tools, how do you locate broken resource links pointing to defunct restaurant industry reports and map them to sections of your new benchmark report?",
          toolName: "Ahrefs",
          where: "Ahrefs Site Explorer > Best by Links > Filter 404 Not Found > Export Referring Domains.",
          procedure: [
            "Enter URLs of defunct foodtech blogs or outdated 2019-2021 restaurant research reports into Ahrefs",
            "Filter the 'Best by Links' report for HTTP response code 404",
            "Export referring domains linking to those dead pages (filtered for DR 40+)",
            "Map each broken link's original topic to the corresponding chapter in your new 2025 benchmark study",
          ],
          outputSample:
            "BROKEN LINK RECLAMATION MAP\n\n" +
            "Dead URL: https://eateryinsights-defunct-blog.com/2021-cloud-kitchen-margins (404)\n" +
            "Target Referring Domains:\n" +
            "  1. restauranttimes.in/operations (DR 54) -> Links to dead margin study via anchor 'kitchen profit margins'\n" +
            "     Replacement target: /insights/2025-cloud-kitchen-economics#margins\n" +
            "  2. foodserviceindia.com/trends (DR 46) -> Links to dead 2021 delivery data\n" +
            "     Replacement target: /insights/2025-cloud-kitchen-economics#delivery-radius\n" +
            "  3. hospitalitytechweekly.org (DR 62) -> Links to 404 survey on kitchen tech\n" +
            "     Replacement target: /insights/2025-cloud-kitchen-economics#tech-adoption",
          healthy:
            "Offering a 1-to-1 topical replacement for a verified dead link, framing the outreach as a helpful notification to fix broken user experience.",
          unhealthy:
            "Pitching an unrelated generic home page to replace a specific dead research study, resulting in instant spam deletion.",
          interpret:
            "Site owners appreciate broken link notifications because broken links harm SEO and user trust. Providing an exact, updated replacement solves their problem instantly.",
          soWhat: [
            {
              symptom: "Outreach email suggests replacing a dead calculator with a broad text article",
              action: "Ensure your suggested replacement content directly matches the format and topic of the dead link",
              effort: "30 min",
            },
            {
              symptom: "Webmaster replies saying they removed the link instead of replacing it",
              action: "Acknowledge politely; log the domain for future digital PR pitches",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-personalized-pitch-crafting",
          concept: "Personalizing digital PR pitches for high response rates",
          lessonAnchor: "strategy-2-digital-pr",
          theoryRecap:
            "Effective digital PR pitches are brief (under 150 words), personalized to the journalist's recent coverage beat, and lead directly with the newsworthy insight rather than promotional company fluff.",
          question:
            "How do you draft a 3-paragraph personalized pitch for a hospitality business journalist that achieves the benchmark 33% response rate?",
          toolName: "Google Docs",
          where: "Google Docs digital PR outreach template document.",
          procedure: [
            "Paragraph 1 (Hook): Reference a specific piece the journalist published within the last 30 days",
            "Paragraph 2 (Data): Present 2 bulleted headline findings from the study directly relevant to their beat",
            "Paragraph 3 (Offer & Link): Provide a clean link to the full study, offer an exclusive executive quote, and propose a low-friction call-to-action",
            "Verify the email length is between 100 and 150 words with no marketing buzzwords",
          ],
          outputSample:
            "DIGITAL PR OUTREACH PITCH SPECIMEN\n\n" +
            "Subject: Data: Tier-2 cloud kitchen margins growing 2.8x faster than dine-in (2025)\n\n" +
            "Hi [First Name],\n\n" +
            "Loved your recent piece in Livemint on restaurant margin pressures across NCR.\n\n" +
            "We just analyzed data across 125,000 restaurant partner orders for our 2025 State of Dining report, and two numbers stood out for your retail coverage:\n\n" +
            "• Cloud kitchens in non-metro hubs (Jaipur, Lucknow) reached operating break-even in 4.2 months vs. 11.8 months for traditional dine-in.\n" +
            "• Late-night delivery orders (post-11 PM) surged 78% YoY in Tier-2 markets, driving 35% of total cloud kitchen profitability.\n\n" +
            "The full benchmark dataset and interactive city charts are live here: [Link to Study].\n\n" +
            "Happy to share raw city-level breakdown data or connect you with our lead analyst if you're exploring this trend for an upcoming column.\n\n" +
            "Best,\n" +
            "[Your Name]\n" +
            "Marketing Insights Team",
          healthy:
            "Concise, highly relevant pitch leading with unique data and referencing genuine recent reporting by the target writer.",
          unhealthy:
            "A 500-word corporate press release full of marketing jargon sent as a blind mass email to 200 journalists simultaneously.",
          interpret:
            "Journalists face tight daily deadlines. When you hand them a pre-packaged, verified data insight that matches their beat, you make their job easier and earn editorial links naturally.",
          soWhat: [
            {
              symptom: "Pitch draft exceeds 200 words or starts with company history",
              action: "Cut the first two paragraphs; start immediately with the journalist's article reference and the primary data point",
              effort: "5 min",
            },
            {
              symptom: "Journalist opens email but does not reply within 4 business days",
              action: "Send a polite 1-sentence follow-up with one additional data angle, then close the thread",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-link-tracking-and-velocity",
          concept: "Monitoring backlink velocity and compounding authority",
          lessonAnchor: "real-company-results",
          theoryRecap:
            "Link building authority compounds over time: industry data shows it takes an average of 3.1 months to see substantial ranking improvements from new backlinks. Tracking monthly link velocity and referring domain acquisition ensures campaigns stay on track.",
          question:
            "How do you structure a backlink monitoring sheet to track earned links, referral traffic, and keyword ranking movement over the 90-day post-launch window?",
          toolName: "SEMrush",
          where: "SEMrush Backlink Audit / Link Building Tracker synced to a master campaign sheet in Google Sheets.",
          procedure: [
            "Set up weekly tracking for new referring domains acquired by the research asset URL",
            "Log the source domain, DR score, anchor text used, and link placement type (editorial body vs footer)",
            "Track target commercial keyword rankings (e.g. 'cloud kitchen business model', 'restaurant POS system') at 30, 60, and 90-day marks",
            "Calculate cost per acquired referring domain and overall link velocity (new domains per month)",
          ],
          outputSample:
            "CAMPAIGN VELOCITY & OUTCOME DASHBOARD (90-Day Post Launch)\n\n" +
            "Metric                          Month 1     Month 2     Month 3     Total\n" +
            "--------------------------------------------------------------------------\n" +
            "Outreach Pitches Sent                45          30          15        90\n" +
            "Responses Received                   16          11           4        31 (34.4%)\n" +
            "Earned Referring Domains             11           8           6        25\n" +
            "Average Domain Rating (DR)           64          59          68        63.6 avg\n" +
            "Top Tier Placements:            Livemint, YourStory, Inc42, BW Hotelier\n" +
            "--------------------------------------------------------------------------\n" +
            "Target Keyword Ranking Movement:\n" +
            "- 'cloud kitchen economics'           #18         #7          #2       (+16 pos)\n" +
            "- 'restaurant industry benchmarks'    #24         #11         #3       (+21 pos)\n" +
            "- 'food delivery trends India'        #14         #5          #1       (+13 pos)\n" +
            "Total Organic Traffic Lift to B2B Hub: +214% (from 4,200 to 13,200/mo)",
          healthy:
            "Consistent acquisition of 5-10 high-quality referring domains per month leading to compounded keyword ranking gains across 90 days.",
          unhealthy:
            "Expecting overnight ranking jumps within 7 days and abandoning outreach after 3 weeks before authority can compound.",
          interpret:
            "Link equity takes approximately 12-14 weeks to fully propagate through Google's index. Measuring month-over-month referring domain velocity confirms whether authority is accumulating.",
          soWhat: [
            {
              symptom: "No ranking change after 4 weeks despite earning 8 new DR 60+ backlinks",
              action: "Maintain strategy; explain the 3-month propagation cycle to stakeholders without altering URLs",
              effort: "5 min",
            },
            {
              symptom: "Earned links are clustering on the research URL but target product pages aren't moving",
              action: "Add contextual internal links from the research asset to the commercial product pages",
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
            role: "Research data structuring, outreach tracking, and campaign dashboard",
            why: "Centralizes dataset hooks, journalist contact lists, and week-by-week link velocity tracking.",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Docs",
            role: "Digital PR pitch writing and editorial template refinement",
            why: "Collaborative drafting of personalized outreach emails and press commentary.",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Broken link prospecting and referring domain discovery",
            why: "Identifies 404 broken links on competitor research pages with historical authority.",
            required: false,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "SEMrush",
            role: "Backlink audit and keyword rank tracking",
            why: "Monitors organic search ranking progress and link velocity over 90 days.",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
        paidUpgradeNote: "Ahrefs and SEMrush automate bulk broken link discovery and daily rank tracking; manual Google search operators and Google Search Console provide a complete free alternative.",
      },
      deliverable:
        "A complete Linkable Research Asset package: 3 proprietary data hooks, a broken link reclamation map, a personalized digital PR pitch email template, and a 90-day campaign tracking dashboard.",
      sampleOutput:
        "DIGITAL PR CAMPAIGN SPECIFICATION\nAsset: DoorDash Restaurant Industry Economic Pulse (2025)\n\n1. PRIMARY DATA ASSET:\n- Sample: 85,000 independent restaurant partner order records across 30 US metro markets\n- Core Finding: Delivery radius expansion of 2 miles increased off-peak order volume by 38.4% with zero cannibalization of dine-in revenue.\n\n2. DIGITAL PR OUTREACH PLAN:\n- Target Publications: Nation's Restaurant News, QSR Magazine, Restaurant Business Online, TechCrunch\n- Pitch Lead: 'Data: How suburban restaurants are unlocking $4k/mo in off-peak delivery revenue'\n\n3. BROKEN LINK CAMPAIGN:\n- Defunct 2020 delivery report URLs identified: 4\n- Qualified replacement targets (DR 50+): 14 domains\n\n4. PROJECTED OUTCOMES:\n- Target links: 20-30 editorial referring domains across 90 days\n- Target ranking impact: Top 3 for 'restaurant delivery analytics' and 'food delivery benchmarks'",
      successCriteria: [
        "Three distinct, quantified data hooks formulated with sample sizes and citable soundbites",
        "Broken link table mapping at least 3 dead competitor assets to exact replacement sections",
        "Personalized digital PR pitch drafted within the 100-150 word limit with no generic marketing fluff",
        "90-day tracking dashboard established with weekly link velocity and keyword ranking indicators",
      ],
      portfolioReady: true,
      decision: {
        prompt:
          "You publish your research asset and want to maximize its ranking boost on commercial product pages. How should you structure internal links?",
        options: [
          {
            id: "opt-1",
            label: "Keep the research page isolated so all external backlink juice stays on the research URL.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Add prominent, contextual in-content links from the high-authority research asset to your related commercial service and product pages.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Add 50 exact-match anchor links in the footer to every page on your website.",
            correct: false,
          },
        ],
        explanation:
          "Linkable assets naturally attract external authority. By placing contextual internal links within the research body pointing to commercial landing pages, you pass PageRank and topical authority throughout your site structure.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Invest in one high-depth proprietary research study per year rather than monthly low-grade guest posts. Original data provides an evergreen link magnet that earns continuous passive citations and high-DR media coverage.",
      },
      commonMistakes: [
        {
          mistake: "Publishing data studies without single-sentence, citable summary statistics",
          explanation: "If a busy journalist has to read 4,000 words to find the main takeaway, they will cite a competitor with a clear summary bullet instead.",
        },
        {
          mistake: "Giving up on link building campaigns after 4 weeks",
          explanation: "Backlinks require an average of 3.1 months for search engines to crawl, index, and recalculate ranking weights across target queries.",
        },
      ],
      keyTakeaway:
        "Building things genuinely worth citing—backed by proprietary numbers and pitched to relevant journalists—creates a compounding backlink moat that competitors cannot easily duplicate.",
    },
  ],
  "local-seo": [
    {
      id: "local-seo-nap-citation-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Multi-Location NAP & Citation Diagnostic",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit physical cafe location records across Google Business Profile, Apple Maps, Yelp, and Bing Places to find Name-Address-Phone (NAP) formatting conflicts, suite mismatches, and category errors suppressing Local 3-Pack rankings.",
      companyId: "blue-bottle-coffee",
      scenario:
        "Blue Bottle Coffee (Nestle acquisition, $700M+ valuation) operates specialty cafes across major urban centers. Following several retail relocations and brand acquisitions, store managers report that key locations have slipped out of the Google Maps '3-Pack' for queries like 'specialty coffee near me' and 'cold brew cafe downtown'. You must perform a multi-channel NAP citation audit to locate identity splits and formatting discrepancies that confuse Google's local ranking algorithms.",
      brief:
        "Examine 3 location records across 4 major directories, catalog character-by-character NAP inconsistencies, audit Google Business Profile completeness, and establish an automated review response workflow.",
      mode: "diagnostic",
      conceptsCovered: [
        "Enforcing exact Name Address Phone consistency across directories",
        "Optimizing Google Business Profile primary categories and features",
        "Auditing review velocity and algorithmic response rates",
      ],
      skills: ["Local SEO", "NAP Consistency", "Google Business Profile", "Citation Audit"],
      keyQuestion:
        "Where are inconsistent addresses, mismatched categories, and duplicate listings eroding search engines' confidence in your physical store locations?",
      prerequisites: [
        "Understanding of the Google Local Pack (3-pack) vs organic search results",
        "Basic familiarity with online directories (Yelp, Apple Maps, Google Maps)",
      ],
      terminology: [
        {
          term: "NAP Consistency",
          definition: "Character-for-character uniformity across a business's Name, Address, and Phone number on every public directory and map listing across the web.",
        },
        {
          term: "Local 3-Pack",
          definition: "The prominent map display featuring three local business listings that appears at the top of Google search results for local intent queries, capturing over 40% of all clicks.",
        },
      ],
      steps: [
        {
          stepId: "step-1-nap-consistency-check",
          concept: "Enforcing exact Name Address Phone consistency across directories",
          lessonAnchor: "pillar-2-nap-consistency",
          theoryRecap:
            "Google cross-references dozens of web sources to verify a local business's physical identity. Discrepancies as minor as 'Suite 200' vs '#200' or differing local phone numbers create algorithmic uncertainty, reducing local pack visibility.",
          question:
            "Comparing directory listings for the flagship cafe across Google, Yelp, Apple Maps, and Bing, what specific character-level NAP discrepancies and duplicate listings are present?",
          toolName: "Google Sheets",
          where: "Master NAP Comparison Sheet in Google Sheets.",
          procedure: [
            "Establish the canonical Master NAP record based on business registration and official storefront signage",
            "Record the Name, Address, and Phone listed on Google Business Profile, Apple Maps, Yelp, and Bing Places",
            "Flag discrepancies in street abbreviations (e.g. 'St' vs 'Street'), suite formatting, and tracking vs local numbers",
            "Check for rogue duplicate listings created by past customers or automatic directory scrapers",
          ],
          outputSample:
            "MULTI-DIRECTORY NAP AUDIT (Flagship Location: San Francisco - Mint Plaza)\n\n" +
            "CANONICAL MASTER RECORD:\n" +
            "  Name: Blue Bottle Coffee\n" +
            "  Address: 66 Mint St, San Francisco, CA 94103\n" +
            "  Phone: (510) 653-3394\n\n" +
            "DIRECTORY DISCREPANCY MATRIX:\n" +
            "Platform      Listed Name                 Listed Address                      Phone           Status\n" +
            "----------------------------------------------------------------------------------------------------------\n" +
            "Google GBP    Blue Bottle Coffee          66 Mint St, San Francisco, CA 94103 (510) 653-3394   [CANONICAL]\n" +
            "Apple Maps    Blue Bottle Coffee - Mint   66 Mint Street, Ste 1, SF, CA 94103 (510) 653-3394   [MISMATCH - Name/Ste]\n" +
            "Yelp          Blue Bottle Coffee Company  66 Mint St, San Francisco, CA 94103 (415) 555-0199   [MISMATCH - Name/Phone]\n" +
            "Bing Places   Blue Bottle Cafe            66 Mint St, Suite 100, SF, CA 94103 (510) 653-3394   [MISMATCH - Name/Ste]\n" +
            "Rogue Yelp    Blue Bottle Kiosk (Mint)    Mint Plaza, San Francisco, CA 94103 None             [DUPLICATE - Delete]",
          healthy:
            "100% character-for-character alignment across all directory platforms matching the canonical Master NAP record.",
          unhealthy:
            "Allowing multiple name variations ('Blue Bottle Cafe', 'Blue Bottle Coffee Company') and differing suite numbers across platforms, splitting ranking authority.",
          interpret:
            "When directories present conflicting information, Google cannot confidently verify the exact storefront location, resulting in lower proximity and prominence scoring in the Local 3-Pack.",
          soWhat: [
            {
              symptom: "Directory lists a modified brand name like 'Brand Name - Best Coffee'",
              action: "Update name to exact storefront branding; keyword-stuffed names risk Google suspension",
              effort: "5 min",
            },
            {
              symptom: "Rogue duplicate listing exists on Yelp or Google Maps",
              action: "Submit a merge/claim request to remove duplicate and consolidate existing reviews",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-gbp-completeness-audit",
          concept: "Optimizing Google Business Profile primary categories and features",
          lessonAnchor: "pillar-1-google-business-profile-gbp",
          theoryRecap:
            "Your Google Business Profile is the primary data source for Google Maps. Profiles with complete attributes, 15+ verified photos, and specific primary categories ('Coffee Shop' instead of general 'Restaurant') receive 70% more location visits and 42% more direction requests.",
          question:
            "Auditing the current Google Business Profile, what missing primary/secondary categories, photo attributes, and business hour gaps need immediate remediation?",
          toolName: "Google Business Profile",
          where: "Google Business Profile Manager dashboard under 'Edit Profile'.",
          procedure: [
            "Verify primary category specificity ('Coffee Shop' vs generic 'Food & Beverage')",
            "Audit secondary categories (e.g. 'Coffee Roasters', 'Cafe', 'Espresso Bar')",
            "Check photo count across Exterior, Interior, Product, and Team categories (minimum 15 required)",
            "Confirm operating hours, holiday schedules, and direct messaging functionality are enabled",
          ],
          outputSample:
            "GOOGLE BUSINESS PROFILE HEALTH AUDIT\n\n" +
            "Field                   Current Setting            Recommended Action              Priority\n" +
            "--------------------------------------------------------------------------------------------\n" +
            "Primary Category        Restaurant                 Change to 'Coffee Shop'         CRITICAL\n" +
            "Secondary Categories    None                       Add: 'Coffee Roasters', 'Cafe'  HIGH\n" +
            "Photo Count             4 photos (uploaded 2021)   Upload 15+ fresh photos         HIGH\n" +
            "Menu Link               Missing                    Link to canonical /menu URL     MEDIUM\n" +
            "Special Hours           Unconfigured (Holidays)    Add upcoming holiday hours      HIGH\n" +
            "Q&A Section             0 answered                 Pre-populate 5 core FAQs        MEDIUM\n" +
            "Attributes              Wi-Fi, Outdoor Seating     Add 'Wheelchair accessible'     LOW",
          healthy:
            "Hyper-specific primary category with full secondary categories, regular photo uploads, and zero unpopulated core fields.",
          unhealthy:
            "Using a generic top-level category and neglecting holiday hours, causing customers to see 'Hours may differ' warnings that drive them to competitors.",
          interpret:
            "Google tests category relevance first. A business categorised as 'Restaurant' loses relevance for 'specialty coffee' searches against a competitor explicitly set as 'Coffee Shop'.",
          soWhat: [
            {
              symptom: "Primary category is set too broadly (e.g. 'Retail Store' instead of 'Coffee Shop')",
              action: "Switch primary category to the most precise descriptive category in GBP dashboard",
              effort: "5 min",
            },
            {
              symptom: "Profile has under 10 photos or photos are older than 12 months",
              action: "Schedule monthly photo uploads showing seasonal drinks, storefront entrance, and cafe interior",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-review-velocity-and-response",
          concept: "Auditing review velocity and algorithmic response rates",
          lessonAnchor: "pillar-3-reviews",
          theoryRecap:
            "Reviews drive 15-17% of local ranking weight. Google evaluates volume, average star rating (minimum 4.3 benchmark), recency (steady weekly velocity), and owner response rate. Responding to at least 32% of reviews correlates with an 80% higher local conversion rate.",
          question:
            "Analyzing the location's review metrics over the last 90 days, what is the current response rate to negative reviews, and how does review velocity compare to top local 3-pack competitors?",
          toolName: "Google Business Profile",
          where: "Google Business Profile > Reviews tab & Performance Insights.",
          procedure: [
            "Calculate total review count and 90-day review acquisition velocity (reviews per month)",
            "Measure average star rating and compare against the 4.3 consumer threshold",
            "Calculate business owner response rate across all 1-star, 2-star, and 3-star reviews",
            "Draft standardized response guidelines that de-escalate negative feedback and offer offline resolution",
          ],
          outputSample:
            "REVIEW SIGNAL & RESPONSE AUDIT (Last 90 Days)\n\n" +
            "Metric                          Current Store      Top 3-Pack Competitor    Status\n" +
            "--------------------------------------------------------------------------------------\n" +
            "Average Star Rating             4.4 Stars          4.6 Stars                HEALTHY (>4.3)\n" +
            "Total Reviews                   312 Reviews        540 Reviews              MODERATE\n" +
            "90-Day Review Velocity          3 reviews/mo       18 reviews/mo            LAGGING (Need 10+/mo)\n" +
            "Owner Response Rate (Overall)   18.2%              92.0%                    CRITICAL GAP\n" +
            "1-Star Review Response Rate     0.0% (0 of 6)      100.0%                   CRITICAL GAP\n" +
            "Average Review Recency          41 days ago        2 days ago               UNHEALTHY\n\n" +
            "Action Plan: Respond to all 6 unaddressed 1-star reviews within 48 hours; implement in-store QR code review prompts on receipts.",
          healthy:
            "Consistent weekly stream of new reviews with a 100% response rate on critical reviews and >80% overall response rate.",
          unhealthy:
            "Ignoring negative reviews publicly and allowing review velocity to stall for months, signaling to Google that the business may be inactive.",
          interpret:
            "A competitor with 50 recent reviews from the last two months will outrank a business with 300 stale reviews from three years ago. Google prioritizes recency and active owner engagement.",
          soWhat: [
            {
              symptom: "1-star or 2-star review sits unanswered on the profile for over 7 days",
              action: "Post a calm, professional response acknowledging the issue and providing a direct email to resolve offline",
              effort: "5 min",
            },
            {
              symptom: "Review velocity has dropped below 2 new reviews per month",
              action: "Deploy automated SMS or digital receipt prompts inviting recent customers to share feedback",
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
            role: "Multi-directory NAP discrepancy matrix and citation tracker",
            why: "Enables character-by-character comparison across Google, Apple Maps, Yelp, and Bing Places.",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Business Profile",
            role: "Direct profile management, category selection, and review response monitoring",
            why: "Free primary platform to control local map listings, attributes, and customer engagement.",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "Automated listing management and multi-directory citation synchronization",
            why: "Distributes and locks NAP data across 50+ secondary directories automatically.",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
        paidUpgradeNote: "Google Business Profile and manual directory claiming are 100% free; automated aggregators like Moz Local or BrightLocal save time for brands with 50+ locations.",
      },
      deliverable:
        "A Multi-Location NAP Audit Matrix with identified discrepancies, an optimized Google Business Profile configuration checklist, and a standardized Review Response Protocol.",
      sampleOutput:
        "LOCAL SEO AUDIT & CITATION CLEANUP REPORT\nBrand: Third Wave Coffee (Koramangala, Bangalore Location)\n\n1. NAP CONSISTENCY SUMMARY:\n- Master Record: Third Wave Coffee, 12th Main Rd, 4th Block, Koramangala, Bengaluru 560034\n- Google Maps: Matches canonical record [OK]\n- Zomato: Listed as 'Third Wave Coffee Roasters' with missing pincode [CORRECTED]\n- Apple Maps: Listed with old phone number [CORRECTED]\n\n2. GOOGLE BUSINESS PROFILE ACTIONS:\n- Changed primary category from 'Cafe' to 'Coffee Shop'\n- Added secondary categories: 'Coffee Roasters', 'Dessert Restaurant'\n- Uploaded 20 high-res photos of indoor seating, coffee menu, and workspace amenities\n\n3. REVIEW MANAGEMENT:\n- Current Rating: 4.5 Stars (480 reviews)\n- 30-Day Review Velocity: 24 new reviews\n- Response rate improved from 25% to 95% across all customer feedback",
      successCriteria: [
        "Canonical Master NAP defined and verified against legal business identity",
        "Directory comparison matrix completed across at least 4 major map/directory platforms",
        "All name variations, suite discrepancies, and duplicate listings documented with resolution steps",
        "Google Business Profile categories and review response protocols audited with specific action items",
      ],
      portfolioReady: true,
      decision: {
        prompt:
          "To rank higher for 'best coffee downtown', a store manager suggests changing the GBP business name from 'Blue Bottle Coffee' to 'Blue Bottle Coffee - Best Espresso & Pour Over Cafe Downtown'. What should you do?",
        options: [
          {
            id: "opt-1",
            label: "Approve the change because adding keywords directly to the business name boosts local relevance.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Reject the change; keyword stuffing the GBP business name violates Google guidelines and risks immediate listing suspension.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Add the keywords to the street address field instead.",
            correct: false,
          },
        ],
        explanation:
          "Google strictly prohibits adding keywords or promotional phrases to business names on Google Business Profile. The name must match your real-world signage. Keyword stuffing is one of the most common causes of profile suspensions.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Fix character-level NAP discrepancies across the top four primary platforms (Google, Apple Maps, Yelp, Bing) before investing in secondary citation aggregators. Maintain 100% exact-match consistency with physical storefront branding.",
      },
      commonMistakes: [
        {
          mistake: "Keyword stuffing the business name in Google Business Profile",
          explanation: "Adding keywords like 'Best Plumber' or 'Top Cafe' to your official name violates Google terms and leads to hard profile suspensions.",
        },
        {
          mistake: "Ignoring negative customer reviews or responding defensively",
          explanation: "Public review responses are seen by all prospective customers. A polite, solution-oriented response restores customer trust, while defensive replies repel new visitors.",
        },
      ],
      keyTakeaway:
        "Local SEO success is built on clear, uncorrupted trust signals: exact NAP consistency across the web, a meticulously maintained Google Business Profile, and steady, responded-to customer reviews.",
    },
    {
      id: "local-seo-landing-page-schema-rebuild",
      tier: "core",
      archetype: "rebuild",
      title: "The Hyperlocal Hub: City Landing Page & LocalBusiness Schema Rebuild",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Rebuild an underperforming multi-location coworking landing page by architecting neighborhood-specific keyword headings, embedding structured LocalBusiness JSON-LD markup, crafting conversational voice-search FAQ copy, and establishing an automated review capture flow.",
      companyId: "awfis-space-solutions",
      scenario:
        "Awfis Space Solutions (IPO on NSE/BSE, ₹2,928 Cr listing) operates over 200 flexible workspace centres across 18 Indian cities. To win competitive search queries like 'coworking space in Indiranagar Bangalore' and 'private office near me' against WeWork and local competitors, Awfis needs high-performing city and centre landing pages. Currently, their location pages use generic corporate text and lack structured schema, missing out on rich snippets and local 3-pack prominence.",
      brief:
        "Rebuild the complete on-page local architecture for a flagship centre: draft localized H1/H2 and meta copy, construct a valid LocalBusiness JSON-LD schema payload, write natural voice-search conversational FAQ copy, and design a post-tour review capture workflow.",
      mode: "build",
      conceptsCovered: [
        "Structuring on-page local keyword and neighborhood signals",
        "Implementing LocalBusiness JSON-LD structured data markup",
        "Optimizing landing copy for voice search and near me queries",
        "Designing an automated post-visit review acquisition system",
      ],
      skills: ["Local Landing Pages", "LocalBusiness Schema", "JSON-LD", "Voice Search SEO"],
      keyQuestion:
        "How do you build a local landing page that delivers both machine-readable structured data to search bots and frictionless conversion paths to nearby mobile searchers?",
      prerequisites: [
        "Basic understanding of HTML and JSON-LD syntax",
        "Knowledge of local search intent and neighborhood geographic landmarks",
      ],
      terminology: [
        {
          term: "LocalBusiness Schema",
          definition: "A structured data vocabulary (Schema.org) formatted in JSON-LD that provides search engines with explicit data about a business's address, geo-coordinates, opening hours, and price range.",
        },
        {
          term: "Hyperlocal Content",
          definition: "Web copy that references specific neighborhoods, nearby transit hubs, landmarks, and street intersections to signal deep geographical relevance to local search algorithms.",
        },
      ],
      steps: [
        {
          stepId: "step-1-local-keyword-and-h1-architecture",
          concept: "Structuring on-page local keyword and neighborhood signals",
          lessonAnchor: "pillar-4-on-page-local-signals-and-citations",
          theoryRecap:
            "Dedicated location pages need explicit geographical signals in the Title Tag, H1, H2, and body copy. Mentioning specific neighborhoods, nearby metro stations, and driving landmarks proves to Google that the page is genuinely localized, not thin programmatic spam.",
          question:
            "How do you structure the title tag, meta description, H1, and neighborhood context for the Indiranagar, Bangalore coworking location to maximize local relevance?",
          toolName: "Google Sheets",
          where: "On-Page Local SEO Wireframe in Google Sheets.",
          procedure: [
            "Draft the Title Tag following the pattern: [Primary Service] in [Neighborhood, City] | [Brand]",
            "Draft Meta Description under 155 characters with clear CTA, address reference, and local amenities",
            "Structure H1 with explicit neighborhood naming ('Coworking Space in Indiranagar, Bangalore')",
            "Add an H2 section detailing proximity to local landmarks (e.g. '200m from 100 Feet Road & Indiranagar Metro Station')",
          ],
          outputSample:
            "LOCAL LANDING PAGE ON-PAGE ARCHITECTURE\n\n" +
            "Title Tag (56 chars):\n" +
            "  Coworking Space in Indiranagar, Bangalore | Awfis\n\n" +
            "Meta Description (148 chars):\n" +
            "  Flexible shared desks & private offices in Indiranagar, Bangalore. 200m from 100 Feet Road. High-speed Wi-Fi, meeting rooms & day passes. Book a tour!\n\n" +
            "Heading Structure:\n" +
            "  H1: Coworking Space in Indiranagar, Bangalore\n" +
            "  H2: Premium Shared Desks & Private Cabins on 100 Feet Road\n" +
            "  H2: Location & Commute: Steps from Indiranagar Metro Station\n" +
            "  H2: Centre Amenities & Enterprise Meeting Facilities\n" +
            "  H2: Frequently Asked Questions about Awfis Indiranagar\n\n" +
            "Hyperlocal Context Copy:\n" +
            "  'Located in the heart of East Bangalore's primary business hub, Awfis Indiranagar sits just off 100 Feet Road, a 3-minute walk from Indiranagar Metro Station (Purple Line). Surrounded by top cafes, banks, and tech startups, our centre provides seamless accessibility for teams from Koramangala, Domlur, and Whitefield.'",
          healthy:
            "Clear, natural inclusion of city, neighborhood, nearby transit, and local landmarks without artificial keyword repetition.",
          unhealthy:
            "Keyword-stuffed copy repeating 'cheap coworking space Bangalore coworking near me best coworking' with no real local transit or neighborhood information.",
          interpret:
            "Google's algorithms reward landing pages that provide genuine local utility. Referencing transit hubs and neighborhood landmarks validates physical proximity to local searchers.",
          soWhat: [
            {
              symptom: "Location page ranks for branded terms but fails to appear for neighborhood queries",
              action: "Add explicit neighborhood, metro station, and landmark references to H1, H2, and body copy",
              effort: "30 min",
            },
            {
              symptom: "Meta description exceeds 160 characters and truncates on mobile SERPs",
              action: "Trim copy to 145-150 characters, ensuring the neighborhood and CTA remain front-loaded",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-localbusiness-schema-construction",
          concept: "Implementing LocalBusiness JSON-LD structured data markup",
          lessonAnchor: "pillar-4-on-page-local-signals-and-citations",
          theoryRecap:
            "LocalBusiness schema provides search engine crawlers with an unambiguous, machine-readable declaration of your business name, street address, geographic coordinates (latitude/longitude), telephone number, operating hours, and price range.",
          question:
            "Construct a validated JSON-LD LocalBusiness (CoworkingSpace) schema payload for the location containing full address, geo-coordinates, hours, and aggregate rating.",
          toolName: "Google Search Console",
          where: "Google Rich Results Test / Schema Markup Validator.",
          procedure: [
            "Set '@type' to specific LocalBusiness subtype 'CoworkingSpace' (or 'LocalBusiness' / 'OfficeEquipmentStore')",
            "Populate 'name', 'url', 'telephone', and canonical 'image' URLs",
            "Structure 'address' using PostalAddress format (streetAddress, addressLocality, addressRegion, postalCode, addressCountry)",
            "Add exact 'geo' coordinates (latitude and longitude) matching the physical storefront entrance",
            "Validate code using the Schema.org validator to ensure zero syntax or missing-field warnings",
          ],
          outputSample:
            "LOCALBUSINESS JSON-LD SCHEMA PAYLOAD\n\n" +
            "{\n" +
            "  \"@context\": \"https://schema.org\",\n" +
            "  \"@type\": \"LocalBusiness\",\n" +
            "  \"name\": \"Awfis Space Solutions - Indiranagar\",\n" +
            "  \"image\": \"https://www.awfis.com/assets/images/indiranagar-exterior.jpg\",\n" +
            "  \"@id\": \"https://www.awfis.com/location/bangalore/indiranagar\",\n" +
            "  \"url\": \"https://www.awfis.com/location/bangalore/indiranagar\",\n" +
            "  \"telephone\": \"+91-80-6900-1234\",\n" +
            "  \"priceRange\": \"₹₹\",\n" +
            "  \"address\": {\n" +
            "    \"@type\": \"PostalAddress\",\n" +
            "    \"streetAddress\": \"777, 100 Feet Road, HAL 2nd Stage, Indiranagar\",\n" +
            "    \"addressLocality\": \"Bengaluru\",\n" +
            "    \"addressRegion\": \"Karnataka\",\n" +
            "    \"postalCode\": \"560038\",\n" +
            "    \"addressCountry\": \"IN\"\n" +
            "  },\n" +
            "  \"geo\": {\n" +
            "    \"@type\": \"GeoCoordinates\",\n" +
            "    \"latitude\": 12.9784,\n" +
            "    \"longitude\": 77.6408\n" +
            "  },\n" +
            "  \"openingHoursSpecification\": [\n" +
            "    {\n" +
            "      \"@type\": \"OpeningHoursSpecification\",\n" +
            "      \"dayOfWeek\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n" +
            "      \"opens\": \"08:00\",\n" +
            "      \"closes\": \"20:00\"\n" +
            "    }\n" +
            "  ]\n" +
            "}",
          healthy:
            "Clean, fully validated JSON-LD schema with zero errors in Google Rich Results Test, declaring exact geo-coordinates and address formatting.",
          unhealthy:
            "Deploying broken schema with missing postalCode or mismatched phone numbers that contradict on-page text.",
          interpret:
            "Structured data gives Google 100% confidence in your entity data. Matching geo-coordinates and NAP in schema directly reinforces Local Pack positioning.",
          soWhat: [
            {
              symptom: "Schema validator returns an error on missing 'address' or 'telephone' fields",
              action: "Add the required PostalAddress properties and re-test in the Rich Results Test tool",
              effort: "5 min",
            },
            {
              symptom: "Geo-coordinates point to general city center rather than actual building entrance",
              action: "Extract precise latitude/longitude from Google Maps pinpoint and update schema payload",
              effort: "5 min",
            },
          ],
          owner: "developer",
        },
        {
          stepId: "step-3-conversational-voice-faq-rebuild",
          concept: "Optimizing landing copy for voice search and near me queries",
          lessonAnchor: "voice-search-and-near-me-queries",
          theoryRecap:
            "Over 58% of consumers use voice queries weekly to find local businesses. Voice searches use complete conversational questions ('What is the nearest coworking space with parking open now?') rather than shorthand keywords. FAQ sections optimized with natural phrasing capture voice assistants and AI summary snippets.",
          question:
            "Draft a 4-question conversational FAQ section answering real voice and mobile search queries regarding parking, day passes, nearest metro access, and operating hours.",
          toolName: "Google Docs",
          where: "Google Docs FAQ Copy Draft.",
          procedure: [
            "Identify the top 4 operational questions asked by prospective visitors during site visits",
            "Write question headings in natural, conversational spoken English",
            "Provide direct, concise answers in the first sentence (under 35 words for voice assistant snippets)",
            "Elaborate with practical details in secondary sentences",
          ],
          outputSample:
            "CONVERSATIONAL VOICE & NEAR-ME FAQ SECTION\n\n" +
            "Q1: Is parking available at Awfis Indiranagar on 100 Feet Road?\n" +
            "A1: Yes, dedicated two-wheeler and four-wheeler basement parking is available on-site for members and day pass visitors. Additional paid parking is located 100 meters away along 100 Feet Road.\n\n" +
            "Q2: How do I get to Awfis Indiranagar by Bangalore Metro?\n" +
            "A2: Awfis Indiranagar is a 3-minute walk (250 meters) from Indiranagar Metro Station on the Purple Line. Take Exit A towards 100 Feet Road.\n\n" +
            "Q3: Can I book a single day coworking pass in Indiranagar without a monthly contract?\n" +
            "A3: Yes, flexible day passes can be booked instantly online or on arrival at reception, starting at ₹499/day including high-speed Wi-Fi and complimentary beverages.\n\n" +
            "Q4: What are the opening hours for Awfis Indiranagar?\n" +
            "A4: Awfis Indiranagar is open Monday through Saturday from 8:00 AM to 8:00 PM for regular members, with 24/7 keycard access available for dedicated enterprise cabin clients.",
          healthy:
            "Direct, concise answers that immediately answer spoken queries within the first 30 words, formatted with FAQPage structured data markup.",
          unhealthy:
            "Long, evasive answers requiring users to 'contact our sales team' to learn basic hours or parking availability.",
          interpret:
            "Voice assistants (Google Assistant, Siri) extract short, authoritative sentences as spoken answers. Front-loading direct facts secures featured snippets and voice results.",
          soWhat: [
            {
              symptom: "FAQ answers are vague and fail to provide exact numbers or pricing",
              action: "Rewrite first sentence of each FAQ answer with specific figures, meters, and hours",
              effort: "30 min",
            },
            {
              symptom: "Competitor captures the Google AI Overview snippet for 'coworking with parking Indiranagar'",
              action: "Refine FAQ question heading to match the exact phrasing and add FAQ schema markup",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-post-service-review-engine",
          concept: "Designing an automated post-visit review acquisition system",
          lessonAnchor: "pillar-3-reviews",
          theoryRecap:
            "Review volume and recency are decisive local ranking signals. Designing an automated post-visit follow-up sequence via WhatsApp or SMS delivers a steady flow of verified customer reviews, keeping profile velocity ahead of local competitors.",
          question:
            "How do you configure a 2-step post-tour review capture sequence that sends a direct Google review link within 2 hours of a completed workspace visit?",
          toolName: "Google Sheets",
          where: "Review Automation Workflow in Google Sheets.",
          procedure: [
            "Generate a direct Google Review shortlink from the GBP dashboard ('Ask for reviews')",
            "Trigger an automated follow-up message 2 hours after a visitor completes a centre tour or day-pass checkout",
            "Draft a 2-sentence frictionless message thanking them and providing the 1-click review link",
            "Set up internal alerting to notify the community manager whenever a new review is posted",
          ],
          outputSample:
            "POST-VISIT REVIEW AUTOMATION SEQUENCE\n\n" +
            "Trigger: Day Pass Checkout OR Tour Completed in CRM\n" +
            "Delay: +2 Hours Post-Visit\n" +
            "Channel: WhatsApp / SMS\n\n" +
            "Message Specimen:\n" +
            "\"Hi [First Name], thanks for working with us today at Awfis Indiranagar! If you enjoyed the workspace and coffee, could you take 30 seconds to share your experience on Google? It helps other local founders find us: [g.page/r/direct-review-link] - Team Awfis\"\n\n" +
            "Conversion Metrics (30-Day Pilot):\n" +
            "- Messages Sent: 140\n" +
            "- Link Clicks: 58 (41.4% CTR)\n" +
            "- New Reviews Logged: 32 (22.8% Conversion Rate)\n" +
            "- Average Star Rating: 4.8 Stars\n" +
            "- Community Manager Response Time: < 4 Hours across all reviews",
          healthy:
            "Automated, timed requests sent while the positive experience is fresh, yielding a continuous stream of authentic 5-star reviews.",
          unhealthy:
            "Relying on staff to remember to ask in person, resulting in sporadic review bursts followed by months of zero review activity.",
          interpret:
            "A predictable review engine protects rankings from natural decay and consistently signals to Google that the location is active, popular, and trusted by the community.",
          soWhat: [
            {
              symptom: "Review conversion rate drops below 10%",
              action: "Shorten message text and test sending via WhatsApp rather than email",
              effort: "30 min",
            },
            {
              symptom: "Customer leaves a 3-star review citing Wi-Fi speed during peak hours",
              action: "Community manager responds within 2 hours and upgrades bandwidth in that specific zone",
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
            role: "On-page content wireframe and review automation workflow design",
            why: "Organizes heading hierarchy, metadata limits, and CRM trigger timing in one shared sheet.",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Search Console",
            role: "Structured data validation and mobile usability testing",
            why: "Free testing tool to verify LocalBusiness JSON-LD markup and indexation status.",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Docs",
            role: "Drafting conversational voice-search FAQ copy",
            why: "Enables precise word count tracking and collaborative review of customer-facing copy.",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Crawl inspection and schema syntax validation across 200+ location pages",
            why: "Automates bulk extraction of JSON-LD data and missing heading tags across multi-location websites.",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
        paidUpgradeNote: "Google's Rich Results Test and manual page inspection provide full free validation; Screaming Frog or Sitebulb is recommended for scaling audits across 50+ store locations.",
      },
      deliverable:
        "A complete Local Landing Page Rebuild Blueprint: localized heading & meta architecture, validated LocalBusiness JSON-LD schema payload, voice-search conversational FAQ copy, and an automated review capture workflow.",
      sampleOutput:
        "HYPERLOCAL LANDING PAGE BLUEPRINT\nLocation: WeWork Galaxy, Residency Road, Bangalore\n\n1. ON-PAGE TARGETING:\n- Title: Coworking Space on Residency Road, Bangalore | WeWork Galaxy\n- H1: Shared Office Space & Coworking on Residency Road, Bangalore\n- Landmark Reference: 400m from MG Road Metro, opposite Mayo Hall\n\n2. STRUCTURED DATA PAYLOAD:\n- Schema Type: LocalBusiness (CoworkingSpace)\n- GeoCoordinates: lat 12.9719, long 77.6070\n- Opening Hours: Mon-Sat 08:00 - 20:00\n- Status: Validated with 0 errors in Google Rich Results Test\n\n3. CONVERSATIONAL VOICE FAQ:\n- Covers: Valet parking, Metro Purple Line exit, Day pass instant booking, Meeting room credits\n\n4. REVIEW VELOCITY SYSTEM:\n- Automated SMS/WhatsApp trigger 3 hours post-tour\n- Expected monthly review run-rate: 20-25 verified local reviews",
      successCriteria: [
        "Localized Title, Meta, and H1/H2 architecture with explicit neighborhood and transit references",
        "Valid LocalBusiness JSON-LD schema payload with exact geo-coordinates and PostalAddress fields",
        "Four conversational voice-search FAQ pairs with concise direct-answer lead sentences",
        "Automated post-visit review acquisition sequence designed with specific timing and copy",
      ],
      portfolioReady: true,
      decision: {
        prompt:
          "You manage 20 coworking locations across 5 cities. Should you use a single shared template with swapped city names, or customize each page with distinct neighborhood and transit content?",
        options: [
          {
            id: "opt-1",
            label: "Use identical copy across all 20 pages, only replacing the city name in the H1 to save time.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Customize each page with unique neighborhood landmarks, nearby transit stations, specific photos, and localized FAQ answers.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Create no location pages and redirect all local queries to the homepage.",
            correct: false,
          },
        ],
        explanation:
          "Google's helpful content systems penalize thin programmatic 'doorway pages' that swap only city names. Truly localized pages with unique transit directions, neighborhood context, and real location photography rank significantly higher in local search.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Embed valid LocalBusiness JSON-LD schema on every physical location landing page and link it directly to your verified Google Business Profile. Treat each city centre as an autonomous local search entity.",
      },
      commonMistakes: [
        {
          mistake: "Creating duplicate doorway pages with only the city name changed",
          explanation: "Search engines detect template spam and demote all location pages. Every location page must feature unique transit guidance, neighborhood context, and real photos.",
        },
        {
          mistake: "Omitting geo-coordinates from LocalBusiness schema",
          explanation: "Latitude and longitude coordinates provide unambiguous mathematical confirmation of your storefront location to Google Maps algorithms.",
        },
      ],
      keyTakeaway:
        "Winning local organic search requires bridging human and machine signals: rich, neighborhood-specific on-page copy for searchers, paired with validated JSON-LD schema and consistent citations for search engines.",
    },
  ],

  "reddit-forum-seo": [
    {
      id: "reddit-forum-seo-serp-audit",
      tier: "mini",
      archetype: "audit",
      title: "High-Intent Forum SERP Opportunity Audit: Uncovering Community Search Footprints",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit 10 high-intent commercial and comparison search queries in your SaaS category, map which Reddit threads and community forums rank on Google page one, evaluate competitor visibility within those discussions, and prioritize actionable, value-first response targets under the 9:1 community rule.",
      companyId: "slack",
      scenario:
        "You are an SEO and Community Growth Strategist at Slack (Salesforce). Following Google's Helpful Content Updates and multi-million dollar AI licensing deals with Reddit, leadership noticed that traditional product landing pages are being outranked on Google page one by Reddit threads for queries like 'Slack vs Microsoft Teams for startups', 'best async communication tools', and 'Slack pricing worth it'. You have been assigned to audit these high-impact SERPs, assess where competitors are mentioned, and prioritize high-leverage community participation targets.",
      brief:
        "Conduct a 3-step diagnostic audit in Google Sheets: isolate search queries with community intent modifiers, audit the top-ranking Reddit/forum threads for competitor presence and engagement health, and build a moderation-safe 9:1 engagement response plan.",
      mode: "diagnostic",
      conceptsCovered: [
        "Which Queries Surface Reddit Results",
        "Getting Your Brand Mentioned in High-Ranking Threads",
        "Building Presence Without Getting Banned",
      ],
      steps: [
        {
          stepId: "step-1-query-intent-discovery",
          concept: "Which Queries Surface Reddit Results",
          lessonAnchor: "which-queries-surface-reddit-results",
          theoryRecap:
            "The lesson highlights that Reddit dominates SERPs for intent signals of lived experience: 'best X for Y', 'X vs Y', 'is X worth it', 'X experiences', and 'X review', where Google prioritizes first-person human consensus over corporate product landing pages.",
          question:
            "Which 10 high-intent search queries in your SaaS category trigger page-one Reddit or community forum results, and what proportion of page-one real estate do community threads occupy vs traditional landing pages?",
          toolName: "Google Sheets",
          where:
            "Open a spreadsheet and create columns: Target Keyword, Query Intent Modifier, Page 1 Forum Presence (Yes/No), Forum URL Ranking Position, and Forum Domain (Reddit / Quora / HN).",
          procedure: [
            "List 10 commercial, comparison, and review keywords relevant to your product category in Column A",
            "Run Google searches in an incognito window for each keyword and check for Reddit/forum discussions in top 10 results",
            "Run 'site:reddit.com [keyword]' queries to verify if dedicated high-karma threads exist for terms that don't yet rank on page one",
            "Record the exact ranking position (1-10) and URL of every forum result appearing on page one",
          ],
          outputSample:
            "NOTION COMMUNITY SERP AUDIT (Sample Rows):\n" +
            "1. 'Notion vs Obsidian for project management' -> Page 1 Pos #2 | r/Notion & Pos #4 | r/ObsidianMD\n" +
            "2. 'Is Notion worth it for small teams' -> Page 1 Pos #1 | r/productivity\n" +
            "3. 'Best workspace software for engineering' -> Page 1 Pos #3 | r/softwarearchitecture\n" +
            "4. 'Notion alternatives open source' -> Page 1 Pos #2 | r/selfhosted\n" +
            "5. 'Notion pricing team review' -> Page 1 Pos #5 | r/startups",
          healthy:
            "Identifying 3–5 high-ranking forum threads occupying top-5 SERP positions where organic user discussions determine product evaluation.",
          unhealthy:
            "Assuming corporate landing pages can outrank community threads for 'best X for Y' or 'X vs Y' queries without checking live SERP composition.",
          interpret:
            "When Google ranks 2-3 forum threads on page one for a commercial term, the search algorithm has determined that users demand unfiltered peer opinions. Participating in ranking threads captures searchers that landing pages cannot reach.",
          soWhat: [
            {
              symptom:
                "Competitor mentions dominate the top 3 Google results because their users actively participate in ranking Reddit threads",
              action:
                "Prioritize contributing objective, in-depth comparison insights to existing ranking threads rather than building another unranked blog post",
              effort: "30 min",
            },
            {
              symptom:
                "Paid search CPCs are rising ($12-$18/click) for comparison keywords while organic forum threads capture 40%+ of clicks",
              action:
                "Reallocate 15% of demand gen time from paid ad tweaks to organic community presence in ranking subreddits",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-thread-footprint-analysis",
          concept: "Getting Your Brand Mentioned in High-Ranking Threads",
          lessonAnchor: "getting-your-brand-mentioned-in-high-ranking-threads",
          theoryRecap:
            "The lesson teaches that an unprompted, positive mention in an existing thread already ranking on Google page one delivers higher ROI and durability than creating a new standalone promotional post that struggles to rank.",
          question:
            "Across the ranking threads identified, which competitors are currently recommended, what is the sentiment toward your brand, and which threads represent high-leverage opportunities for value-add contributions?",
          toolName: "Reddit",
          where:
            "Inspect each ranking thread directly on Reddit, analyzing comment volume, upvote distributions, brand sentiment, and moderator activity.",
          procedure: [
            "Open each ranking thread and record Total Upvotes, Comment Count, and Age of the thread (months active)",
            "Catalog which competitor brands are explicitly named in the top 3 parent comments",
            "Assess current brand sentiment (Positive / Neutral / Negative / Absent) in the discussion",
            "Flag high-leverage threads: threads with 50+ upvotes, active within the last 12 months, where your brand is unrepresented or misrepresented",
          ],
          outputSample:
            "THREAD FOOTPRINT ANALYSIS (Sample):\n" +
            "- Thread: 'Best tool to replace Jira + Confluence for a 20-person startup?' (r/startups)\n" +
            "  * Rank: Google #2 | Upvotes: 142 | Comments: 68 | Age: 9 months\n" +
            "  * Competitors Mentioned: Linear (Top comment, 89 upvotes), ClickUp (Mentioned, mixed sentiment)\n" +
            "  * Brand Status: Notion mentioned briefly for documentation, but missing for task sprint workflows\n" +
            "  * Opportunity Tier: Tier 1 High Leverage — clear gap to explain hybrid wiki/sprint database setup without hard-selling.",
          healthy:
            "Focusing effort on threads with verified page-one rankings, high search stability, and open opportunities to provide structured technical clarity.",
          unhealthy:
            "Creating 20 new promotional Reddit threads from a brand account that get 0 upvotes and get purged by automoderators within minutes.",
          interpret:
            "Google and AI models treat top-voted Reddit comments as definitive consensus. Influencing the narrative in 3 existing ranking threads yields greater search and AI citation visibility than writing 10 new blog posts.",
          soWhat: [
            {
              symptom:
                "A negative or inaccurate comment about your product's pricing or feature set has 40+ upvotes in a page-one ranking thread",
              action:
                "Post a polite, transparent clarification addressing the specific technical limitation or recent product update with zero sales spin",
              effort: "30 min",
            },
            {
              symptom:
                "Competitor is universally praised in a top thread while your solution is omitted entirely",
              action:
                "Provide a balanced breakdown detailing specific use cases where each tool excels, positioning your strengths objectively",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-moderation-safety-protocol",
          concept: "Building Presence Without Getting Banned",
          lessonAnchor: "building-presence-without-getting-banned",
          theoryRecap:
            "The lesson establishes the 9:1 community rule: contribute nine genuine, non-promotional answers for every one mention of your product. Moderators and community members spot low-effort astroturfing instantly, leading to permanent bans and domain blacklisting.",
          question:
            "How do you structure your community profile, karma-building cadence, and response framework so that contributions survive moderation, gain upvotes, and protect domain reputation?",
          toolName: "Reddit",
          where:
            "Review target subreddit rules (sidebar/wiki) and establish a 14-day contribution queue in Google Sheets before any brand mention.",
          procedure: [
            "Check the sidebar rules of each target subreddit (e.g. r/sysadmin, r/devops, r/productivity) for self-promotion policies and karma requirements",
            "Establish a 14-day 'listening & answering' calendar with 9 non-branded, purely helpful technical answers in target communities",
            "Draft a response framework for your 1-in-10 brand mention: disclose affiliation transparently, state 'I work on X / we built X to solve Y', and provide a complete standalone answer that requires no link click",
            "Verify that zero affiliate parameters, tracking UTMs, or URL shorteners are included in forum comments",
          ],
          outputSample:
            "9:1 VALUE-FIRST RESPONSE BRIEF (Sample):\n" +
            "- Subreddit: r/productivity (Rule 4: No unsolicited affiliate or promotional links)\n" +
            "- Pre-Engagement: 9 helpful troubleshooting comments on database relations and markdown shortcuts completed\n" +
            "- Target Thread: 'How do you organize client deliverables alongside internal notes?'\n" +
            "- Response Draft: Transparent affiliation ('I work on Notion templates for agencies'), 4-bullet step-by-step setup guide explaining database rollups directly in Markdown text, 0 external links attached.\n" +
            "- Compliance Check: 100% compliant with Subreddit Rule 4, transparent, zero link spam.",
          healthy:
            "Every response provides complete, standalone value within the Reddit interface without forcing users to leave the platform.",
          unhealthy:
            "Dropping tracked marketing links or copy-pasting canned corporate press releases into technical community threads.",
          interpret:
            "Community members upvote detailed, authentic explanations from practitioners. Transparent self-disclosure combined with generous problem-solving creates lasting brand advocates and protects domain trust.",
          soWhat: [
            {
              symptom:
                "A junior marketer plans to drop UTM-tagged links in 15 Reddit threads to track referral clicks in Google Analytics",
              action:
                "Enforce clean text responses with zero tracking parameters; track forum SEO impact via branded search lift and Brand Radar mentions instead",
              effort: "5 min",
            },
            {
              symptom:
                "Moderators remove a comment for perceived promotional intent",
              action:
                "Send a respectful modmail acknowledging the policy, ask for feedback, and pivot that account to 100% non-promotional support for 30 days",
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
            role: "Audit spreadsheet to track query intent modifiers, ranking forum URLs, competitor presence, and response prioritization",
            why: "Provides structured tracking for SERP forum audits",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Reddit",
            role: "Direct subreddit inspection to evaluate community size, rules, active discussions, and moderation guidelines",
            why: "Primary platform for reviewing live community discussions and subreddit policies",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "GummySearch",
            role: "Automated subreddit keyword discovery, conversation tracking, and audience pain point clustering",
            why: "Accelerates identification of high-intent discussions across multiple subreddits",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "Brand24",
            role: "Real-time forum and social listening to track brand and competitor mentions across Reddit and Quora",
            why: "Alerts when brand or competitors are mentioned in newly ranking threads",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed 3-stage Google Sheet auditing 10 target queries, ranking forum URLs, competitor mention status, subreddit health metrics, and prioritized 9:1 response briefs.",
      sampleOutput:
        "COMMUNITY SERP AUDIT & RESPONSE MATRIX (Notion Diagnostic Summary):\n\n" +
        "1. SERP DISCOVERY (10 Queries Audited):\n" +
        "   - 'Notion vs Obsidian for knowledge base' -> Google #1: r/Notion (240 upvotes) | Google #3: r/ObsidianMD (180 upvotes)\n" +
        "   - 'Best project management tool for small agencies' -> Google #2: r/agency (95 upvotes, Asana dominant)\n" +
        "   - 'Is Notion slow with large databases' -> Google #1: r/Notion (310 upvotes, critical sentiment)\n" +
        "   - 'Notion vs Monday for sprint tracking' -> Google #2: r/projectmanagement (115 upvotes, mixed)\n" +
        "   - 'Best note taking app 2026' -> Google #3: r/productivity (520 upvotes, top 5 recommendations)\n\n" +
        "2. COMPETITOR FOOTPRINT & SENTIMENT:\n" +
        "   - Linear: Praised for speed in developer subreddits (r/webdev, r/reactjs)\n" +
        "   - ClickUp: Criticized for feature bloat and UI lag in r/startups\n" +
        "   - Notion: Loved for flexible documentation, criticized for database load latency on mobile\n\n" +
        "3. 9:1 PARTICIPATION QUEUE:\n" +
        "   - 9 value-first comments answering Markdown nesting, database relation syntax, and formula debugging\n" +
        "   - 1 transparent response addressing database speed optimization techniques with zero product pitch links\n" +
        "   - Result: 48 net upvotes, 0 moderation flags, comment indexed in Google AI Overviews snippet within 14 days.",
      successCriteria: [
        "10 high-intent search queries audited with exact Google SERP ranking positions for Reddit and forum threads",
        "Competitor mention footprint, thread engagement metrics, and sentiment categorized across all ranking threads",
        "9:1 value-first community participation plan drafted with strict adherence to subreddit moderation guidelines and zero tracking links",
      ],
      portfolioReady: true,
    },
    {
      id: "reddit-forum-seo-community-teardown",
      tier: "core",
      archetype: "teardown",
      title: "The Community Outreach Teardown: Astroturfing Traps vs. Authentic Authority",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Evaluate 3 realistic forum outreach specimens (a comparison comment draft, a standalone community announcement, and an AMA pitch) across community guidelines, intent matching, moderation risk, and AI citation durability, isolating genuine defects from harmless stylistic choices.",
      companyId: "freshworks",
      scenario:
        "You are the Head of Organic Growth and Community SEO at Freshworks (FRSH). An external agency has drafted three community outreach assets intended to improve Freshworks and Freshdesk visibility across Reddit, Hacker News, and Quora for high-volume customer support queries. Before any content is deployed, you must audit each specimen for astroturfing triggers, self-promotion rule violations, link spam, and intent mismatch that could trigger permanent subreddit bans or negative brand sentiment.",
      brief:
        "Teardown 3 outreach specimens: analyze a comparison response comment in r/msp, a standalone product post in r/sysadmin, and a cross-forum syndication proposal. Grade each defect by severity (critical, moderate, cosmetic), explain the exact algorithmic and community consequences, and identify distractors.",
      mode: "teardown",
      conceptsCovered: [
        "Building Presence Without Getting Banned",
        "Getting Your Brand Mentioned in High-Ranking Threads",
        "The AI Search Multiplier",
        "Beyond Reddit: Which Forums Actually Move the Needle",
      ],
      teardownItems: [
        {
          itemId: "freshworks-reddit-comparison-comment-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "TARGET THREAD: 'Zendesk price increase is forcing us to switch. What helpdesk software is actually good in 2026?' (r/msp — 184 upvotes, Google Rank #1 for 'Zendesk alternatives reddit')\n\n" +
            "PROPOSED COMMENT DRAFT (from agency account 'IT_Pro_Guru99', account created 3 days ago, 4 total karma):\n" +
            "'Hey everyone! We had the exact same issue with Zendesk charging insane per-agent prices. We switched our 40-person team to Freshdesk and saved 60% immediately. The AI ticketing and omnichannel inbox are lightyears ahead of Zendesk. Check out their special migration discount here: https://freshdesk.com/switch-from-zendesk?utm_source=reddit&utm_medium=community&utm_campaign=q1_promo. You can get 20% off with promo code REDDIT20! Let me know if anyone wants a demo link.'",
          prompt:
            "Which elements of this comment are critical community and SEO defects that will cause moderation deletion, account banning, or negative brand backlash, and which are non-defects?",
          answerKey: [
            {
              defect:
                "Fake third-party persona ('IT_Pro_Guru99' with 4 karma) astroturfing as an impartial customer without transparent brand disclosure",
              severity: "critical",
              whyItMatters:
                "Astroturfing violates Reddit's sitewide User Agreement and r/msp community rules. Moderators quickly detect fresh low-karma accounts posting glowing testimonials, resulting in an instant permaban, thread comment removal, and potential blacklisting of the freshdesk.com domain.",
              lessonRef:
                "Building Presence Without Getting Banned: astroturfing risk vastly outweighs short-term gain and damages brand reputation permanently",
              owner: "you",
            },
            {
              defect:
                "Inclusion of commercial promo codes and UTM tracking parameters in the URL",
              severity: "critical",
              whyItMatters:
                "UTM parameters and discount codes are definitive signals of paid marketing and affiliate spam. Automoderator bots strip comments containing promotional query strings, preventing the comment from indexing in search or reaching AI models.",
              lessonRef:
                "Building Presence Without Getting Banned: communities spot low-effort self-promotion and bans follow",
              owner: "you",
            },
            {
              defect:
                "Offering a sales demo link in a technical peer discussion thread",
              severity: "moderate",
              whyItMatters:
                "Community members seek technical migration advice, feature comparisons, and honest trade-offs, not a sales call CTA. A pitch CTA triggers downvotes, pushing the comment below the fold and signaling low helpfulness to AI scraping bots.",
              lessonRef:
                "Getting Your Brand Mentioned in High-Ranking Threads: contribute thorough, helpful answers rather than sales recommendations",
              owner: "you",
            },
          ],
          distractors: [
            "Mentioning a specific 60% cost savings estimate, citing real numbers and cost comparisons is encouraged in B2B forum discussions if backed by legitimate tier comparisons",
            "Comparing Freshdesk directly against Zendesk, directly comparing features is standard and expected in a thread specifically titled 'Zendesk alternatives'",
            "Commenting on an older thread ranking #1 on Google, contributing value to existing ranking threads is the highest-leverage tactic in forum SEO",
          ],
          partialCredit: true,
        },
        {
          itemId: "freshworks-reddit-standalone-post-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "TARGET SUBREDDIT: r/sysadmin (920k members, strict Rule 4: No vendor self-promotion outside official vendor threads)\n\n" +
            "PROPOSED STANDALONE POST DRAFT:\n" +
            "- Title: 'Why Legacy ITSM Tools Are Dying and How Modern AI Service Desks Are Taking Over'\n" +
            "- Post Body: A 600-word essay detailing IT ticket fatigue, mentioning Freshservice 7 times as the premier modern ITSM solution, contrasting it with ServiceNow, and concluding with a link to Freshworks' 2026 State of IT Service Management Whitepaper (gated PDF requiring business email).\n" +
            "- Author: Official 'Freshworks_Team' verified corporate account.\n" +
            "- Timing: Posted at 9 AM EST on Tuesday morning.",
          prompt:
            "Identify the core structural and strategic defects in this standalone subreddit post proposal.",
          answerKey: [
            {
              defect:
                "Publishing a standalone promotional blog post in a subreddit with strict no-vendor-content rules (r/sysadmin Rule 4)",
              severity: "critical",
              whyItMatters:
                "r/sysadmin strictly prohibits uninvited vendor content and thought leadership essays. The post will be deleted by moderators within 15 minutes, the corporate account flagged, and brand goodwill among 900k IT decision-makers burned.",
              lessonRef:
                "Building Presence Without Getting Banned: small communities have low traffic and dead subreddits rank poorly, but strict communities strictly enforce anti-promo rules",
              owner: "you",
            },
            {
              defect:
                "Linking to a gated lead-generation whitepaper requiring a corporate email",
              severity: "critical",
              whyItMatters:
                "Reddit communities despise gated lead magnets. Posts requiring email signups are considered spam by Reddit users and moderators alike, earning 0% upvotes and zero organic search longevity.",
              lessonRef:
                "Why Reddit Ate the SERPs: real human discourse with no affiliate links or lead-gen barriers is what Google rewards",
              owner: "you",
            },
            {
              defect:
                "Creating a standalone new thread instead of answering questions in ranking threads or hosting an official sanctioned AMA",
              severity: "moderate",
              whyItMatters:
                "Standalone brand posts rarely earn organic upvotes to reach Google's first page on their own. Participating in established, high-ranking threads or coordinating an official AMA with moderators achieves 10x higher organic visibility.",
              lessonRef:
                "Getting Your Brand Mentioned in High-Ranking Threads: an unprompted mention in a thread already ranking on page one is worth more than a new thread you create yourself",
              owner: "you",
            },
          ],
          distractors: [
            "Posting at 9 AM EST on a Tuesday, Tuesday morning is a peak engagement time for B2B tech communities",
            "Contrasting modern ITSM solutions with ServiceNow, comparing enterprise tools is a relevant topic for IT professionals when executed objectively",
            "Using a verified corporate account, brand transparency is required by Reddit guidelines; the defect is the promotional format and rule violation, not the account transparency",
          ],
          partialCredit: true,
        },
        {
          itemId: "freshworks-cross-forum-syndication-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "CROSS-FORUM SYNDICATION PROPOSAL:\n" +
            "- Plan: Take the same 300-word response text about 'How to automate tier-1 customer support tickets' and copy-paste it across Quora, Hacker News (Ask HN), and Reddit (r/CustomerSuccess) within the same 24-hour period.\n" +
            "- Content: Includes 2 paragraph explanation of webhook automation, 1 mention of Freshdesk's Freddy AI with a link to the product documentation, and a footer: 'Written by Freshworks Product Marketing'.\n" +
            "- Target Queries: 'automate customer support tickets', 'best AI helpdesk bot 2026'.",
          prompt:
            "What platform-mismatch and forum SEO defects exist in this cross-forum syndication strategy?",
          answerKey: [
            {
              defect:
                "Copy-pasting identical response text across fundamentally different forum platforms (Hacker News vs Quora vs Reddit)",
              severity: "critical",
              whyItMatters:
                "Each platform has distinct community norms and query intents (Quora rewards educational how-tos; HN requires deep technical engineering nuances; Reddit demands informal peer candor). Identical cross-posting triggers spam filters and algorithmic duplicate penalties across search engines.",
              lessonRef:
                "Beyond Reddit: Which Forums Actually Move the Needle: prioritize the platform where your buyers have discussions; a presence spread thin or copy-pasted is weak",
              owner: "you",
            },
            {
              defect:
                "Posting product marketing copy to Hacker News (Ask HN) without deep code or architectural substance",
              severity: "critical",
              whyItMatters:
                "Hacker News readers are senior engineers and founders who immediately flag and 'dead' (shadow-ban) marketing-led answers. HN posts only succeed with open-source examples, architecture teardowns, or technical implementation details.",
              lessonRef:
                "Beyond Reddit: Which Forums Actually Move the Needle: Hacker News surfaces for technical and developer-adjacent searches with high domain authority",
              owner: "you",
            },
            {
              defect:
                "Adding corporate boilerplate signature ('Written by Product Marketing') to forum comments",
              severity: "moderate",
              whyItMatters:
                "Corporate email signatures and department tags feel robotic and out of place in community forums. It signals automated marketing distribution rather than an authentic practitioner sharing domain experience.",
              lessonRef:
                "The AI Search Multiplier: forum mentions tell AI systems who you are; authenticity is what survives moderation and creates training signal",
              owner: "you",
            },
          ],
          distractors: [
            "Linking to technical product documentation instead of a landing page, linking to un-gated technical docs that directly answer a user's question is accepted in developer/IT communities",
            "Targeting 'automate customer support tickets' query intent, targeting how-to and automation queries on Quora aligns with search intent",
            "Disclosing brand affiliation, transparent affiliation disclosure is required; the defect is the corporate signature format and identical copy-pasting",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Scorecard to evaluate outreach specimens against subreddit rules, intent matching, and astroturfing flags",
            why: "Standard format for community moderation review",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Reddit",
            role: "Reference platform rules and subreddit-specific wiki/sidebar policies",
            why: "Enables verification against live community standards",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brand24",
            role: "Monitor sentiment and brand safety across forum mentions",
            why: "Tracks community perception post-engagement",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A categorized teardown assessment scoring each outreach specimen across community guidelines compliance, trust signals, moderation safety, and AI citation durability.",
      sampleOutput:
        "COMMUNITY OUTREACH TEARDOWN SCORECARD (Zapier Sample Review):\n\n" +
        "1. SPECIMEN 1 (r/automation Comparison Comment):\n" +
        "   - Status: REJECTED (Critical Astroturfing Defect)\n" +
        "   - Findings: Unattributed agency account posting affiliate link disguised as personal recommendation.\n" +
        "   - Remediation: Replace with verified Zapier Community Champion account sharing exact multi-step webhook architecture without tracking links.\n\n" +
        "2. SPECIMEN 2 (r/nocode Standalone Announcement Post):\n" +
        "   - Status: REJECTED (Rule Violation)\n" +
        "   - Findings: Gated PDF whitepaper link violates community Rule 2 ('No lead magnets').\n" +
        "   - Remediation: Publish the entire 5-step automation tutorial in native Markdown with embedded code snippets directly in the post body.\n\n" +
        "3. SPECIMEN 3 (Cross-Platform Hacker News Syndication):\n" +
        "   - Status: REJECTED (Platform Mismatch)\n" +
        "   - Findings: Marketing copy flagged by HN spam filters; lacked API payload examples.\n" +
        "   - Remediation: Author dedicated engineering teardown explaining retry-logic architecture for webhooks on Hacker News.",
      successCriteria: [
        "Identified all critical astroturfing, promotional link, and platform mismatch defects across 3 forum outreach specimens",
        "Accurately distinguished real community and SEO violations from non-defects and allowable practices",
        "Mapped each defect to its specific consequence on search ranking, moderation action, and AI citation eligibility",
      ],
      portfolioReady: true,
    },
  ],

  "content-decay-refresh": [
    {
      id: "content-decay-search-console-triage",
      tier: "mini",
      archetype: "audit",
      title: "The Triage Call: Auditing a Search Console Decay Report",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 20-page Search Console export comparing the last six months to the prior six, classify each page's decay pattern and decide which pages get a quick refresh, a full rewrite, or a lower-priority hold.",
      companyId: "policybazaar",
      scenario:
        "You're the SEO analyst on PolicyBazaar's content team. Organic clicks to the insurance-guides section are down 18% year over year, and leadership wants a prioritized fix list before the next content sprint, not a vague 'traffic is down' summary.",
      brief:
        "Sort the export by clicks lost, classify each page's decay pattern, then flag which pages are quick wins versus pages that need a full rewrite.",
      mode: "diagnostic",
      conceptsCovered: [
        "Classifying decay patterns from Search Console deltas",
        "Prioritizing by traffic value, decay severity, and competitive gap size",
      ],
      steps: [
        {
          stepId: "step-1-classify-decay-pattern",
          concept: "Classifying decay patterns from Search Console deltas",
          lessonAnchor: "how-to-systematically-find-decaying-pages",
          theoryRecap:
            "The lesson splits decay into three patterns from a six-month-vs-prior-six-month Search Console comparison: cliff decay (a sudden 40-60% drop after 18+ stable months), slow bleed (5-10% fewer clicks every month for six months), and position drift (rank falls while impressions hold, so users stop clicking).",
          question:
            "Row 3, 'car-insurance-renewal-guide', held steady at ~9,200 clicks/month for 14 months, then dropped to 3,600 clicks in the most recent quarter with impressions falling the same amount. Row 11, 'two-wheeler-claim-process', still gets the same impressions but clicks fell from 4,100 to 2,050 as average position slid from 3.8 to 7.9. Which pattern is each row?",
          toolName: "Google Sheets",
          where: "Import search-console-decay-export.csv, freeze the header row, add a 'pattern' column.",
          procedure: [
            "Import search-console-decay-export.csv and freeze row 1",
            "For each row, compare the impressions trend against the clicks trend across the two six-month windows",
            "Tag rows where both impressions and clicks fell together after a long stable run as 'cliff decay'",
            "Tag rows where impressions held but average position and clicks both fell as 'position drift'",
            "Tag the remaining steady, small monthly declines as 'slow bleed'",
          ],
          outputSample:
            "PATTERN CLASSIFICATION (excerpt)\ncar-insurance-renewal-guide      clicks 9,200->3,600   impr 41,000->16,200   pattern: cliff decay\ntwo-wheeler-claim-process        clicks 4,100->2,050   impr 38,500->38,100   pos 3.8->7.9   pattern: position drift\nhealth-insurance-tax-benefits    clicks 6,800->6,100->5,500 (monthly)      pattern: slow bleed",
          healthy:
            "Every row in the export gets one of the three pattern tags before any prioritization happens, so the fix matches the actual cause instead of a generic 'refresh everything' response.",
          unhealthy:
            "Sorting only by percentage lost and missing that 'car-insurance-renewal-guide' lost more raw clicks (5,600) than three slow-bleed rows combined, because percentage loss hides the highest-value page in the list.",
          interpret:
            "Cliff decay usually points to a SERP feature change or algorithm update and needs investigation before rewriting; position drift with flat impressions means Google still shows the page but users don't click it, which is a freshness or snippet problem, not a ranking problem.",
          soWhat: [
            {
              symptom: "A page shows cliff decay after 18+ stable months",
              action: "Check for a named algorithm update or new SERP feature on that query before rewriting a single word",
              effort: "30 min",
            },
            {
              symptom: "A page shows position drift with flat impressions",
              action: "Rewrite the title tag and meta description first, since Google is still showing the page but nobody clicks it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-prioritize-by-value-and-gap",
          concept: "Prioritizing by traffic value, decay severity, and competitive gap size",
          lessonAnchor: "how-to-systematically-find-decaying-pages",
          theoryRecap:
            "The lesson prioritizes by three factors together, current traffic value, decay severity, and the size of the competitive content gap: a page bleeding 20% with a small gap is a quick win, while a page down 60% against a much deeper competitor article needs a full rewrite, not a patch.",
          question:
            "You have 6 sprint slots. 'car-insurance-renewal-guide' lost 5,600 clicks/month (cliff decay, competitor gap: 3 missing subsections) and 'bike-insurance-online-guide' lost 900 clicks/month (slow bleed, competitor gap: outdated pricing table only). Which gets a slot first, and what kind of fix does each get?",
          toolName: "Google Sheets",
          where: "Add 'clicks lost' and 'gap size' columns, then sort by clicks lost descending.",
          procedure: [
            "Add a 'clicks lost (raw)' column, not percentage, and sort the sheet by it descending",
            "Add a 'competitor gap size' column, tagging each row 'small' or 'large' based on missing subtopics",
            "Cross the two: high clicks lost + large gap = full rewrite this sprint; high clicks lost + small gap = quick win this sprint",
            "Push low clicks-lost + small-gap rows to next quarter's backlog",
          ],
          outputSample:
            "SPRINT PRIORITY (6 slots)\n1. car-insurance-renewal-guide     -5,600 clicks   large gap    FULL REWRITE\n2. two-wheeler-claim-process       -2,050 clicks   small gap    QUICK WIN (title/meta + intro)\n3. bike-insurance-online-guide       -900 clicks   small gap    QUICK WIN (pricing table update)\n...\nBACKLOG (next quarter): 14 rows under 500 clicks lost",
          healthy:
            "The 6 sprint slots go to the highest raw-clicks-lost rows first, with rewrite-vs-quick-win split by gap size, so the sprint recovers the most traffic possible with the time available.",
          unhealthy:
            "Spending a full sprint slot rewriting 'bike-insurance-online-guide' (900 clicks lost, small gap) while 'car-insurance-renewal-guide' (5,600 clicks lost) sits in the backlog because its percentage loss looked smaller.",
          interpret:
            "Raw clicks lost, not percentage, determines business impact; gap size determines whether the fix is a quick win or a full rewrite. Confusing the two produces a sprint plan that feels busy but recovers little traffic.",
          soWhat: [
            {
              symptom: "The backlog has more pages than sprint slots",
              action: "Sort by raw clicks lost first, then split each row into quick win or full rewrite by gap size",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Source of the six-month-vs-prior-six-month clicks, impressions, and position data",
            why: "Free, first-party, and the only tool that shows Google's actual view of each page's performance trend",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Classify decay patterns and sort the prioritization list",
            why: "Free, no account friction, sorts and filters the export in minutes",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 20-row prioritized sprint list with each page tagged by decay pattern (cliff decay, slow bleed, position drift) and fix type (full rewrite, quick win, backlog), sorted by raw clicks lost.",
      sampleOutput:
        "Chewy, pet-care content decay triage (excerpt)\n\nSPRINT PRIORITY\n1. dog-food-allergy-guide         -4,900 clicks   large gap    FULL REWRITE\n2. cat-litter-comparison-2024     -1,800 clicks   small gap    QUICK WIN (title/meta + stats)\n3. puppy-vaccination-schedule       -700 clicks   small gap    QUICK WIN (pricing update)\n\nBACKLOG (next quarter): 12 rows under 400 clicks lost",
      successCriteria: [
        "Every row in the export is tagged with one of the three decay patterns",
        "Sprint slots go to the highest raw-clicks-lost pages first, not the highest percentage",
        "Each prioritized page is tagged full rewrite or quick win based on competitive gap size, not guessed",
      ],
      portfolioReady: true,
    },
    {
      id: "content-decay-refresh-brief-rewrite",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Real Refresh: Rewriting a Decayed Page's Intro and Closing Its Gaps",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a decayed page's old intro, its stale stats, and a list of subtopics competitors now cover that it doesn't, produce a refresh brief and rewritten intro that would actually recover rankings, not just change the publish date.",
      companyId: "zendesk",
      scenario:
        "You're a content strategist at Zendesk. 'customer-support-ticketing-best-practices' ranked #4 for two years, has slid to position 11, and the fastest fix on your desk was a marketer suggesting you 'just bump the date.' You have the old page and a competitor gap analysis.",
      brief:
        "Diagnose the decay pattern, then rewrite the intro and outline the fix for every stale stat and content gap, not just the timestamp.",
      mode: "build",
      conceptsCovered: [
        "Diagnosing the decay pattern before choosing a fix",
        "Rewriting the intro to answer the query directly, in plain language",
        "Replacing stale stats and closing competitor content gaps",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-before-fixing",
          concept: "Diagnosing the decay pattern before choosing a fix",
          lessonAnchor: "how-to-systematically-find-decaying-pages",
          theoryRecap:
            "Cliff decay, slow bleed, and position drift each point to a different root cause, and treating all three the same way wastes the fix.",
          question:
            "The page held position 4 for two years, dropped steadily to position 11 over 5 months, and impressions barely moved. Which decay pattern is this, and does that change whether a full rewrite is even the right first move?",
          toolName: "Google Search Console",
          where: "Performance report, filtered to this URL, comparing the last six months to the prior six.",
          procedure: [
            "Pull the URL's six-month clicks, impressions, and average position trend from Search Console",
            "Confirm impressions stayed flat while position and clicks fell, matching position drift, not cliff decay",
            "Note that position drift usually means the page is still relevant to Google but reads as thinner or staler than competitors now, which justifies content rewrite over a technical fix",
          ],
          outputSample:
            "customer-support-ticketing-best-practices\nImpressions: 22,400 -> 21,900 (flat)\nPosition: 4.1 -> 11.3\nClicks: 3,100 -> 890\nPattern: position drift -> content freshness/depth problem, not a technical or SERP-feature problem",
          healthy:
            "Confirming position drift before rewriting means the fix targets content depth and freshness, the actual cause, instead of chasing a technical issue that isn't there.",
          unhealthy:
            "Assuming this is cliff decay and spending the sprint auditing for a manual penalty or crawl error when impressions never dropped.",
          interpret:
            "Flat impressions with falling position and clicks is Google's way of saying 'I still think this page is relevant, but I'm not confident it's the best answer anymore.' That is a content problem, not a technical one.",
          soWhat: [
            {
              symptom: "Position falls steadily while impressions hold",
              action: "Skip the technical audit and go straight to a content depth and freshness review",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rewrite-the-intro",
          concept: "Rewriting the intro to answer the query directly, in plain language",
          lessonAnchor: "what-a-real-refresh-looks-like-and-what-doesnt-count",
          theoryRecap:
            "A real refresh starts with the first 100-150 words, rewritten to answer the query directly and in plain language, because that section is what AI Overviews and answer engines lift first.",
          question:
            "The old intro opens with 'In today's fast-paced customer service landscape, ticketing systems have become an essential tool for businesses of all sizes.' It doesn't answer the query for 3 more sentences. Rewrite it to answer 'what are customer support ticketing best practices' in the first sentence.",
          toolName: "Google Docs",
          where: "Refresh brief doc, 'New Intro' section.",
          procedure: [
            "Delete the throat-clearing opening sentence entirely",
            "Write a first sentence that states the direct answer: the core best practices, named",
            "Keep the full rewritten intro under 150 words and in plain, direct language",
          ],
          outputSample:
            "OLD (deleted): 'In today's fast-paced customer service landscape, ticketing systems have become an essential tool...'\n\nNEW: 'The best customer support ticketing practices in 2026 are: route by urgency and skill match, not first-in-first-out; set a first-response SLA under 1 hour; and close the loop with a resolution summary the customer can search later. Here's how each one works and why it moves your CSAT score.'",
          healthy:
            "A reader or an AI Overview can lift the answer from the first sentence alone, without reading the rest of the page.",
          unhealthy:
            "Keeping the throat-clearing opening and only swapping the 'last updated' date, which is the fake refresh the lesson calls out directly.",
          interpret:
            "The first 100-150 words carry the most weight for both human skimmers and AI answer extraction, so that's where refresh effort pays off fastest per minute spent.",
          soWhat: [
            {
              symptom: "The intro takes 2+ sentences to state the actual answer",
              action: "Rewrite the first sentence to state the direct answer before anything else",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-replace-stats-close-gaps",
          concept: "Replacing stale stats and closing competitor content gaps",
          lessonAnchor: "what-a-real-refresh-looks-like-and-what-doesnt-count",
          theoryRecap:
            "A real refresh replaces every dated statistic with a current one and fills the thin sections where competitors now cover a subtopic the page skipped, fixing what's wrong in place rather than padding the bottom with new words.",
          question:
            "The page cites a 2022 stat ('62% of customers expect a reply within 10 minutes') and is missing a section on AI-assisted ticket routing that all 3 top competitors now include. What two fixes go in the brief, and where do they go, not at the bottom?",
          toolName: "Google Docs",
          where: "Refresh brief doc, 'Stat Replacements' and 'Gap Fills' sections.",
          procedure: [
            "Find a current, sourced replacement stat for the 2022 figure and note the exact paragraph it replaces",
            "Write a one-paragraph outline for the missing AI-assisted ticket routing section, placed after the section it logically follows, not appended at the end",
            "List every other dated claim in the old page (a discontinued tool mention, a deprecated best practice) as a third fix category",
          ],
          outputSample:
            "STAT REPLACEMENTS\n- Para 2: swap 2022 stat for 2026 figure, cite source, same location in the page\n\nGAP FILLS (mid-page, not appended)\n- New section after 'Routing Rules': 'AI-Assisted Ticket Routing' (competitors: Zendesk's own guide competitors cover this, we don't)\n\nOUTDATED CLAIMS TO FIX\n- Para 6 recommends a tool that was discontinued in 2025, replace with current alternative",
          healthy:
            "Every fix is placed exactly where the outdated or missing content lives in the page structure, so the page reads as coherently updated, not patched at the end.",
          unhealthy:
            "Adding a new 'AI-Assisted Ticket Routing' section at the very bottom of the page after the conclusion, which the lesson explicitly calls out as not counting as a real refresh.",
          interpret:
            "Placement matters as much as content: a gap-fill section appended at the end reads to both readers and Google as padding, while the same content placed where it logically belongs reads as genuine depth.",
          soWhat: [
            {
              symptom: "A competitor gap analysis lists a missing subtopic",
              action: "Write the new section and insert it at its logical place in the existing structure, never appended at the end",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Confirm the decay pattern before deciding the fix",
            why: "Free, first-party performance data for the exact URL",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the refresh brief and the rewritten intro",
            why: "Free, easy to share with an editor or developer for review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Pull the competitor content gap analysis (subtopics competitors cover that this page doesn't)",
            why: "Content Gap tool surfaces ranking subtopics across competitor URLs faster than manual review",
            required: false,
            fallback: "Manually read the top 3 ranking competitor pages and list subtopics they cover that this page doesn't",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path (manual competitor read-through) takes longer but produces the same gap list; Ahrefs just speeds up finding it.",
      },
      deliverable:
        "A refresh brief with the confirmed decay pattern, a rewritten 150-word intro, a stat-replacement list with exact paragraph locations, and a gap-fill outline placed within the existing page structure.",
      sampleOutput:
        "Wise, 'international-wire-transfer-fees-guide' refresh brief (excerpt)\n\nDECAY PATTERN: position drift (4.5 -> 9.2, impressions flat)\n\nNEW INTRO: 'International wire transfer fees in 2026 range from $0-$50 depending on your bank and destination currency. Here's the current fee breakdown for the 8 most-used providers, and how to avoid the hidden markup most guides don't mention.'\n\nSTAT REPLACEMENTS: Para 3, swap 2023 average-fee figure for current 2026 figure\nGAP FILL: New section after 'Bank Wire Fees' on 'Hidden FX Markup', competitors cover this, we don't",
      successCriteria: [
        "Decay pattern is confirmed from Search Console data before any content decision is made",
        "The rewritten intro states the direct answer in the first sentence and stays under 150 words",
        "Every stat replacement and gap fill is placed at its logical location in the page, none appended at the bottom",
      ],
      portfolioReady: true,
      stretch:
        "Track this page's position and clicks for 60 days after the real refresh ships, and compare recovery against the lesson's 40-60% benchmark.",
    },
  ],
};
