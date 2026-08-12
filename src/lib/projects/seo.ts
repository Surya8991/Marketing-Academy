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
      steps: [
        {
          stepId: "step-1-head-vs-cluster",
          concept: "Comparing a head term against a long-tail cluster using the lesson's own realistic-target framework",
          lessonAnchor: "stage-4-evaluate-and-prioritize",
          theoryRecap:
            "The lesson's worked example contrasts 'best coffee maker' (33,100 vol, KD 62, unrealistic) against 'best mini coffee maker' (1,300 vol, KD 17, realistic), and the site-wide callout notes long-tail keywords collectively drive 70% of all search traffic despite each one being small on its own.",
          question:
            "Strategy A targets 'term insurance' alone. Strategy B targets a cluster of six long-tail phrases. Which does the lesson's framework favor for a page with no existing authority in this vertical?",
          toolName: "Manual comparison sheet",
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
          toolName: "Written justification",
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
      steps: [
        {
          stepId: "step-1-title-length",
          concept: "Title tag length and keyword position",
          lessonAnchor: "1-title-tag",
          theoryRecap:
            "The lesson's Title Tag rules: include the primary keyword in the first 3-4 words, keep it under 60 characters, and give a reason to click. Titles over 60 characters are 57% more likely to be rewritten by Google (Ahrefs, 2021).",
          question:
            "Pulled from a manual crawl of three pages in this export, which titles are Google-rewrite risks, and does that correlate with their current rank?",
          toolName: "Manual page crawl",
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
          toolName: "Manual page crawl",
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
          toolName: "Manual page crawl",
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
          toolName: "Manual calculation",
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
      steps: [
        {
          stepId: "step-1-rebuild-title",
          concept: "Rebuilding the title tag",
          lessonAnchor: "1-title-tag",
          theoryRecap:
            "The lesson's Title Tag rules: include the primary keyword in the first 3-4 words, keep it under 60 characters, and give a reason to click, written for a human first.",
          question:
            "The current title is just \"Babysitters\", 12 characters, matching nothing close to what a 'near me' searcher typed. Rewrite it under 60 characters with the keyword up front and a trust signal.",
          toolName: "Manual rewrite",
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
          toolName: "Manual rewrite",
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
          toolName: "Manual rewrite",
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
          toolName: "Manual rewrite",
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
          toolName: "Manual edit",
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
    },
  ],
};
