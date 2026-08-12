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
      portfolioReady: true
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
      portfolioReady: true
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
    },
  ],
};
