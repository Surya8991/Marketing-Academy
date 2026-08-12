/**
 * Practice projects for the `email` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * `email-marketing-101` gets two "diagnostic"-mode projects built directly
 * off the real 10-campaign export in `public/project-data/email-campaign-export.csv`
 * (sums, rates, and revenue-per-1,000-sent figures below are computed from
 * that file, not invented — verify: sum revenue across all 10 rows =
 * $39,679.92; Welcome Series - Email 1 revenue $10,743.78 = 27.07% of that
 * total from 8,420 of 204,690 total sends = 4.11% of volume; Re-engagement -
 * 30 Day Inactive has an 11.91% open rate against 6,180 sent and 53
 * unsubscribes = 0.87% of delivered, both well outside the lesson's own
 * benchmark table).
 *
 * `welcome-series` gets a "build"-mode project (draft a real 3-email
 * sequence) and a "teardown"-mode project (a synthetic-but-realistic 3-email
 * specimen with real, lesson-mapped defects plus distractors).
 */

import type { Project } from "@/lib/projects/types";

export const EMAIL_PROJECTS: Record<string, Project[]> = {
  "email-marketing-101": [
    {
      id: "email-marketing-101-ten-campaign-audit",
      tier: "core",
      archetype: "audit",
      title: "Ten Campaigns, One Real Problem: Auditing a Live Email Export",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a real 10-campaign email export, read the actual open/click/unsubscribe numbers against the lesson's own benchmark table, and separate the one campaign with a genuine problem from two others that only look risky.",
      companyId: "freshworks",
      scenario:
        "Freshworks is demand-testing a browser-based project-management add-on for remote teams (the same beta the paid-search team is running search ads for) before committing engineering budget. The email list, built from the product's waitlist and existing free-tier users, has sent 10 campaigns over the last month: a welcome automation, five weekly product digests, a feature launch, a customer case study, a re-engagement send, and a pricing announcement. You've been handed the raw export and one question: which of these 10 sends is actually working, and which one is quietly costing the list?",
      brief:
        "You're not grading each campaign against a single number. You're cross-checking two or three numbers at once against the lesson's own benchmark table, the way a real audit works, and writing down what to do about each one you flag.",
      mode: "diagnostic",
      conceptsCovered: [
        "Key Metrics to Track",
        "Segmentation and Automation: Where the Money Is",
        "Writing Emails That Get Opened and Clicked",
      ],
      steps: [
        {
          concept: "Key Metrics to Track",
          lessonAnchor: "key-metrics-to-track",
          theoryRecap:
            "The lesson's benchmark table sets Open Rate at 30-42%, CTR at 2-3%, CTOR at 10-15%, and Unsubscribe Rate under 0.2%. It also warns: 'A high open rate but low CTR means your subject line is great but your body copy or CTA needs work.'",
          question:
            "Scan all 10 rows for open rate AND unsubscribe rate together, not open rate alone. Which single campaign fails the lesson's benchmark on more than one metric at once?",
          toolName: "Google Sheets",
          where:
            "email-campaign-export.csv opened in a spreadsheet, with a computed unsub_rate column (unsubscribes / delivered), sorted descending",
          procedure: [
            "Open email-campaign-export.csv and add a column: unsub_rate = unsubscribes / delivered * 100.",
            "Sort the sheet by unsub_rate, highest first.",
            "For each of the top 3 rows, check open_rate against the lesson's 30-42% band.",
            "Flag any row that breaks BOTH the unsub ceiling and the open-rate floor at the same time, that combination is the real signal, not either number alone.",
          ],
          outputSample:
            "Sorted by unsub_rate (desc)                    sent      open%    unsub#   unsub%\n" +
            "1  Re-engagement - 30 Day Inactive             6,180     11.91%      53     0.87%\n" +
            "2  Pricing Update Announcement                25,100    41.77%     134     0.54%\n" +
            "3  Weekly Product Digest - W20                24,480    32.32%      47     0.19%\n" +
            "4  Weekly Product Digest - W22                24,790    34.94%      44     0.18%\n" +
            "5  Case Study - Agency Team                   19,750    29.64%      35     0.18%\n" +
            "6  Feature Launch - Kanban Boards              22,890   34.02%      28     0.12%\n" +
            "7  Weekly Product Digest - W19                24,310    31.21%      26     0.11%\n" +
            "8  Weekly Product Digest - W18                24,150    33.29%      24     0.10%\n" +
            "9  Weekly Product Digest - W21                24,620    34.51%      24     0.10%\n" +
            "10 Welcome Series - Email 1                    8,420    66.07%       6     0.07%\n\n" +
            "Benchmark: open rate 30-42%, unsub rate under 0.2%",
          healthy:
            "Open rate lands inside the lesson's 30-42% band AND unsubscribe rate stays under the 0.2% ceiling, together, not just one of the two.",
          unhealthy:
            "Either metric alone breaching its benchmark, especially unsubscribe rate above 0.2%, the one metric on this table with effectively zero acceptable slack at scale.",
          interpret:
            "Row 1, Re-engagement - 30 Day Inactive, fails BOTH ceilings at once: 11.91% open rate sits 18 points under the lesson's 30% floor, and its 0.87% unsub rate is more than 4x the 0.2% ceiling. That combination, not either number alone, is what marks it as the one campaign with a real problem. Rows 2-5 each break only the unsub ceiling, worth a second look, not a rewrite.",
          soWhat: [
            {
              symptom: "Unsubscribe rate above 0.2% on any single send",
              action: "Pull that segment out of the next scheduled send and diagnose before resending to it again",
              effort: "30 min",
            },
            {
              symptom: "Open rate under the lesson's 30% floor on a re-engagement segment specifically",
              action:
                "Treat it as a list-hygiene job, not a copywriting job: apply the lesson's 3-6 month inactive-subscriber removal rule instead of rewriting the email",
              effort: "half day",
            },
          ],
          owner: "you",
          stepId: "step-1-scan-the-export",
        },
        {
          concept: "Segmentation and Automation: Where the Money Is",
          lessonAnchor: "segmentation-and-automation-where-the-money-is",
          theoryRecap:
            "The lesson's list-hygiene guidance: 'Remove inactive subscribers every 3-6 months. A smaller engaged list has better deliverability than a large disengaged one.' It separately notes segmented campaigns generate 760% more revenue than non-segmented sends.",
          question:
            "The re-engagement send only reached 723 openers out of 6,180 sent, but of the people who DID open, 22.68% still clicked, above the lesson's 10-15% CTOR benchmark and above this export's own 9-campaign average. What does that split tell you about whether the content or the audience is the actual problem?",
          toolName: "Google Sheets",
          where: "email-campaign-export.csv, a computed CTOR column (clicks / opens) for row 5 vs. the other 9 rows",
          procedure: [
            "Add a CTOR column: clicks / opens * 100.",
            "Calculate Re-engagement's CTOR: 164 / 723 = 22.68%.",
            "Calculate the average CTOR of the other 9 campaigns and compare.",
            "Decide: is the low reach (open rate) or the content (CTOR) the actual failing part?",
          ],
          outputSample:
            "Re-engagement - 30 Day Inactive\n" +
            "  Sent 6,180 | Delivered 6,078 | Opens 723 (11.91%) | Clicks 164 (2.70% of sent)\n" +
            "  CTOR (clicks / opens) = 164 / 723 = 22.68%\n\n" +
            "Average CTOR of the other 9 campaigns = 21.72%\n" +
            "  (Welcome 38.86%, W18 13.16%, Feature Launch 30.89%, W19 24.01%, W20 21.93%,\n" +
            "   Case Study 15.00%, W21 20.92%, Pricing 16.91%, W22 13.84%)",
          healthy:
            "CTOR at or above the library's own average (~21.7%) signals the content itself still resonates with whoever actually opens it.",
          unhealthy:
            "CTOR far below the library average alongside a low open rate would mean both reach AND content are broken, a much bigger fix than list hygiene alone.",
          interpret:
            "Re-engagement's 22.68% CTOR beats the other 9 campaigns' 21.72% average. The small number of people who do open still click at a healthy, above-average rate, the email itself works. The problem is entirely upstream: this segment has decayed past the point where sending to it is worth the unsubscribe cost, exactly the 'remove inactive subscribers every 3-6 months' rule the lesson gives.",
          soWhat: [
            {
              symptom: "CTOR at or above average despite a broken open rate",
              action:
                "Don't touch the email copy. File a list-hygiene ticket: tag anyone who hasn't opened in 90+ days and route them to a one-time win-back send before suppression.",
              effort: "half day",
            },
            {
              symptom: "A decayed segment repeatedly receiving standard sends",
              action: "Add a 90-day inactivity filter to the automation trigger so this segment stops receiving routine sends automatically",
              effort: "dev ticket",
            },
          ],
          owner: "either",
          stepId: "step-2-diagnose-reach-vs-content",
        },
        {
          concept: "Writing Emails That Get Opened and Clicked",
          lessonAnchor: "writing-emails-that-get-opened-and-clicked",
          theoryRecap:
            "The lesson's segmentation warning: 'sending every email to your entire list... tanks your engagement rates... Segment your list from day one: buyers vs. non-buyers, active vs. inactive... Segmented campaigns generate 14.31% higher open rates (Mailchimp).'",
          question:
            "Pricing Update Announcement has the second-highest open rate in the whole export (41.77%) and an above-benchmark CTOR (16.91%), yet its unsubscribe rate (0.54%) is over 2.5x the lesson's 0.2% ceiling, second only to the campaign you already flagged. If the content is clearly landing with a lot of people, what does the elevated unsub rate actually point to?",
          toolName: "Google Sheets",
          where: "email-campaign-export.csv, row 9 (Pricing Update Announcement) vs. a routine digest send to the same list",
          procedure: [
            "Pull the full row for Pricing Update Announcement: sent 25,100, opens 41.77%, CTOR 16.91%, unsub 0.54%.",
            "Compare its `sent` count to a routine Weekly Product Digest send, both went to essentially the whole list.",
            "Ask who a pricing-change announcement is actually relevant to versus who received it.",
          ],
          outputSample:
            "Pricing Update Announcement\n" +
            "  Sent 25,100 | Delivered 24,933 | Opens 10,414 (41.77%) | Clicks 1,761 (7.06% of sent)\n" +
            "  CTOR = 1,761 / 10,414 = 16.91% (above the lesson's 10-15% benchmark)\n" +
            "  Unsubscribes = 134 (0.54% of delivered, 2.7x the lesson's 0.2% ceiling)\n\n" +
            "Weekly Product Digest - W22 (same list, routine send, for comparison)\n" +
            "  Sent 24,790 | Open rate 34.94% | Unsub rate 0.18%",
          healthy: "Unsubscribe rate stays under 0.2% even on a high-open, high-CTOR send.",
          unhealthy:
            "Unsubscribe rate rising sharply on a specific one-off announcement compared to routine campaigns sent to the same list, even while open/click numbers look fine.",
          interpret:
            "This wasn't sent to a broken list, it was sent to the WHOLE list, roughly the same reach as a routine digest. A pricing-change announcement is only relevant to current paying customers; non-customers, who have no reason to care, are the likely source of the extra unsubscribes. This is the 'buyers vs. non-buyers' segment split the lesson names, applied to a single send instead of the whole program.",
          soWhat: [
            {
              symptom: "Unsub rate spikes on a specific announcement relative to routine campaigns to the same list",
              action: "Before the next pricing/policy announcement, filter the send to the customers segment only and skip prospects entirely",
              effort: "30 min",
            },
            {
              symptom: "No buyer vs. non-buyer segment exists in the ESP yet",
              action: "Create a persistent 'customer' tag so future account-specific announcements don't need to be rebuilt each time",
              effort: "dev ticket",
            },
          ],
          owner: "either",
          stepId: "step-3-high-open-doesnt-mean-safe",
        },
        {
          concept: "Key Metrics to Track",
          lessonAnchor: "key-metrics-to-track",
          theoryRecap:
            "The lesson's own diagnostic rule: 'A high open rate but low CTR means your subject line is great but your body copy or CTA needs work. A high CTR but low conversion means your landing page is the problem.'",
          question:
            "Weekly Product Digest sends click at a perfectly respectable average CTOR (18.77% across all 5), not far below Feature Launch - Kanban Boards' 30.89%, yet Digest generates far less revenue per 1,000 sent. Per the lesson's own rule, where does that gap actually live?",
          toolName: "Google Sheets",
          where: "email-campaign-export.csv, Feature Launch row vs. the 5-send Weekly Product Digest average",
          procedure: [
            "Compute revenue per 1,000 sent for Feature Launch: 9,440.13 / 22,890 * 1,000 = $412.42.",
            "Compute the same for the 5-digest average: $13,979.73 total revenue / 122,350 total sent * 1,000 = $114.27.",
            "Compute what Digest's revenue-per-1,000-sent WOULD be if it scaled proportionally with its own CTOR (using Feature Launch's revenue-per-CTOR-point as the baseline): 18.77 * (412.42 / 30.89) = $250.60.",
            "Compare that predicted number to Digest's actual $114.27.",
          ],
          outputSample:
            "Feature Launch - Kanban Boards\n" +
            "  Sent 22,890 | CTOR 30.89% | Revenue $9,440.13 | Revenue per 1,000 sent = $412.42\n\n" +
            "Weekly Product Digest (5-send average, W18-W22)\n" +
            "  Avg sent 24,470 | Avg CTOR 18.77% | Avg revenue per 1,000 sent = $114.27\n\n" +
            "If revenue scaled with CTOR the way Feature Launch's does:\n" +
            "  predicted Digest revenue/1,000 sent = $250.60\n" +
            "  actual Digest revenue/1,000 sent    = $114.27  (46% of predicted)",
          healthy: "Revenue-per-1,000-sent roughly proportional to CTOR across campaign types within the same program.",
          unhealthy:
            "Revenue-per-1,000-sent far below what CTOR alone would predict, a post-click (landing page/offer) problem, not an email problem.",
          interpret:
            "Digest generates only 46% of the revenue-per-1,000-sent that its own click quality would predict, compared to Feature Launch's ratio. The clicks are landing at a reasonable rate, the shortfall shows up after the click. Per the lesson's own rule, that's a landing-page or offer problem, not something a better subject line fixes.",
          soWhat: [
            {
              symptom: "Revenue per subscriber persistently low across a recurring campaign type despite normal click behavior",
              action: "Audit the destination page/offer these digest links point to, not the email copy",
              effort: "half day",
            },
            {
              symptom: "No per-campaign-type revenue tracking exists yet",
              action: "Add a revenue-per-1,000-sent column to the standing reporting template so this pattern surfaces automatically each month",
              effort: "30 min",
            },
          ],
          owner: "developer",
          stepId: "step-4-ctor-fine-revenue-isnt",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Open, sort, and add computed columns to the CSV export",
            why: "Free, and every step in this project is doable with basic sort/filter/formula columns, no paid analytics tool required.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "Klaviyo",
            role: "Where a real version of this export would live",
            why: "Free tier shows exactly this kind of per-campaign report (opens, clicks, unsubscribes, revenue) natively, no CSV export needed once you're inside a real account.",
            required: false,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Google Analytics 4",
            role: "Confirms a landing-page/offer diagnosis for real (Step 4)",
            why: "Free tier shows post-click engagement time and conversion by landing URL, the actual evidence behind a 'clicks are fine, the page after isn't' call.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Databox",
            role: "Automates this exact audit every month instead of manually re-running Steps 1-4 on a fresh export",
            why: "Pulls ESP data into a live dashboard with alert thresholds, useful once this becomes a recurring monthly job rather than a one-off exercise.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Sheets + a free Klaviyo account) is complete for every step above. Databox only earns its keep once you're running this audit monthly and want it automated.",
      },
      datasetUrl: "/project-data/email-campaign-export.csv",
      deliverable:
        "A ranked list of all 10 campaigns from most to least healthy, with the specific benchmark(s) each failing campaign broke and a one-line fix recommendation for each, distinguishing 'rewrite the email' fixes from 'fix the segment/list/landing page' fixes.",
      sampleOutput:
        "Running the same audit against Klaviyo's own outbound program: 'Product Update - Q3 Roadmap' had an 11% open rate and a 0.9% unsub rate, both breaking the benchmark together, but its CTOR (23%) matched the library average, so the fix was pruning 90-day-inactive subscribers before the next send, not rewriting the copy. 'Annual Plan Price Change' opened above 40% with a healthy CTOR, but its 0.6% unsub rate traced back to hitting the full list instead of the paying-customer segment. The Q3 feature-launch email beat every other campaign on revenue per 1,000 sent, proof the program converts fine when it's actually targeted.",
      successCriteria: [
        "Correctly identifies 'Re-engagement - 30 Day Inactive' as the campaign failing both the open-rate floor and the unsubscribe ceiling at once",
        "Flags 'Pricing Update Announcement' as a second, different kind of risk (high engagement, still elevated unsubscribes) rather than lumping it in with the re-engagement problem",
        "Diagnosis for the re-engagement campaign is list hygiene/segmentation, not a copy rewrite, and cites the CTOR-among-openers number as evidence",
        "Diagnosis for Weekly Product Digest's low revenue-per-subscriber points to the landing page/offer, not email copy, citing the CTOR-vs-revenue gap",
        "Names Welcome Series - Email 1 and Feature Launch - Kanban Boards as the two clearly healthy campaigns, with a reason for each",
      ],
      portfolioReady: false,
      stretch:
        "Pull your own last 10 sends from whatever ESP you actually use (even a free Mailchimp or Brevo account) and run this exact same sort-by-unsubscribe-rate-first audit against real numbers instead of this export.",
    },
    {
      id: "email-marketing-101-trigger-vs-batch-headtohead",
      tier: "mini",
      archetype: "head-to-head",
      title: "Triggered Send vs. Scheduled Batch: A Head-to-Head from the Same Export",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Compare the one automated/triggered campaign in the export against the five scheduled weekly-batch campaigns on the metrics that matter, then write two literal subject lines that apply the lesson's own subject-line research to the strategy the data proves worth investing in first.",
      companyId: "mailchimp",
      scenario:
        "You're advising Mailchimp's own internal lifecycle team, yes, the email company emails its own users too, on where to spend next quarter's email-program hours: more triggered/automated sends, or a more polished weekly newsletter calendar. They've handed you the same 10-campaign export and asked you to make the case with numbers, not opinion.",
      brief:
        "This isn't a coin-flip comparison, the export already contains a real triggered send and five real batch sends. Read what actually happened before drafting anything new.",
      mode: "diagnostic",
      conceptsCovered: ["Automation", "Subject lines", "Key Metrics to Track"],
      steps: [
        {
          concept: "Automation",
          lessonAnchor: "automation",
          theoryRecap:
            "The lesson: 'Despite being only 2% of total email volume, automated emails drove 37% of all email-attributed revenue in 2024 (Omnisend).'",
          question:
            "This export has exactly one automated/triggered send (Welcome Series - Email 1) out of ten campaigns. What share of the export's total revenue did it produce, and how does that compare to the lesson's cited industry split?",
          toolName: "Google Sheets",
          where: "email-campaign-export.csv, sum revenue grouped by triggered (1 row) vs. scheduled/manual (9 rows)",
          procedure: [
            "Sum the revenue column across all 10 rows: $39,679.92.",
            "Sum Welcome Series - Email 1's revenue alone: $10,743.78.",
            "Divide: 10,743.78 / 39,679.92 = 27.07% of total revenue.",
            "Sum total sends (204,690) and Welcome's sends (8,420): 8,420 / 204,690 = 4.11% of total volume.",
            "Compute revenue per 1,000 sent for Welcome vs. the other 9 combined.",
          ],
          outputSample:
            "Welcome Series - Email 1 (triggered)\n" +
            "  Sent 8,420 (4.11% of 204,690 total) | Revenue $10,743.78 (27.07% of $39,679.92 total)\n" +
            "  Revenue per 1,000 sent = $1,276.10\n\n" +
            "Other 9 campaigns combined (scheduled/manual)\n" +
            "  Sent 196,270 (95.89% of total) | Revenue $28,936.14 (72.93% of total)\n" +
            "  Revenue per 1,000 sent = $147.43\n\n" +
            "Gap: 8.7x more revenue per 1,000 sent from the triggered send",
          healthy:
            "An automated/triggered send outperforming scheduled batch sends on revenue-per-1,000-sent is the expected, healthy pattern the lesson's own automation stat predicts.",
          unhealthy:
            "A triggered send underperforming batch sends would suggest the automation itself is broken (wrong trigger timing, weak incentive), since triggered sends should structurally outperform.",
          interpret:
            "Welcome Series - Email 1 produced 27.07% of all revenue in the export from just 4.11% of total send volume, this dataset's own (less extreme, but same-direction) version of the lesson's '2% of volume, 37% of revenue' stat. Revenue per 1,000 sent is 8.7x higher than the rest of the program combined.",
          soWhat: [
            {
              symptom: "An automated welcome/trigger send already dramatically outperforming the batch calendar",
              action:
                "Prioritize building 1-2 more triggered automations (abandoned cart, post-purchase, per the lesson's 5 essential types) before adding another manual newsletter to the calendar",
              effort: "half day",
            },
            {
              symptom: "Only one automation exists in a 10-campaign sample",
              action: "Audit which of the lesson's 'key automations to build first' (abandoned cart, post-purchase, re-engagement) are still missing",
              effort: "30 min",
            },
          ],
          owner: "you",
          stepId: "step-1-revenue-share-by-send-type",
        },
        {
          concept: "Subject lines",
          lessonAnchor: "subject-lines",
          theoryRecap:
            "The lesson: optimal subject-line length is 30-35 characters; personalized subject lines are 50% more likely to be opened (Litmus, 2023); curiosity, specificity, personalization, and real urgency all work; ALL CAPS and spam trigger words kill open rates.",
          question:
            "The export gives you internal campaign labels, not the literal subject lines that were sent, a normal limitation of a real ESP export (campaign_name is an internal tag, never what the subscriber saw in-inbox). Using the lesson's research, write ONE literal candidate subject line for the automated Welcome send and ONE for a Weekly Product Digest send.",
          toolName: "Google Sheets",
          where: "a notes column next to your Step 1 sheet, or a blank doc",
          procedure: [
            "Re-read the lesson's Subject Lines section: 30-35 character optimal length, personalization lifts opens 50%, curiosity/specificity/real-urgency patterns work.",
            "Draft a Welcome Email 1 subject line under 35 characters that personalizes and states the incentive plainly, this campaign already converts at 66% open, so the goal is a line that wouldn't break what's already working.",
            "Draft a Weekly Product Digest subject line that borrows ONE winning lever, curiosity or specificity, since 'Weekly Product Digest - W22' as an actual subject line is exactly the generic label the lesson warns against.",
            "Check both drafts against the character-count guidance and the spam-trigger-word list before finalizing.",
          ],
          outputSample:
            'Draft A (Welcome, triggered): "Sam, here\'s your 15% code" (26 characters, personalized, states the incentive, no urgency needed since intent is already highest at signup)\n\n' +
            'Draft B (Weekly Digest): "3 features shipped this week" (29 characters, specific instead of generic, replaces the un-specific internal label "Weekly Product Digest - W22")',
          healthy: "Candidate stays at or under ~35 characters and uses at least one of curiosity, specificity, or real personalization.",
          unhealthy:
            "Candidate reuses the internal campaign_name verbatim as the subject line (generic, un-specific, exactly what the lesson warns against), exceeds ~35 characters, or leans on fake urgency.",
          interpret:
            "Neither draft needs urgency: the welcome send already converts because intent is high at signup, and a weekly digest is a recurring relationship email, not a sales push. The fix in both cases is specificity, plain personalization for the trigger, a real preview of what's inside for the recurring one, not manufactured pressure.",
          soWhat: [
            {
              symptom: "A recurring campaign's subject line is literally its internal batch label ('Digest - W22')",
              action: "Replace generic date/number labels with one concrete detail from that week's actual content before every send",
              effort: "5 min",
            },
            {
              symptom: "No personalization token in a trigger-based subject line",
              action: "Add first-name or acquisition-source personalization to the trigger template once; it then applies to every future send automatically",
              effort: "30 min",
            },
          ],
          owner: "you",
          stepId: "step-2-write-real-subject-lines",
        },
        {
          concept: "Key Metrics to Track",
          lessonAnchor: "key-metrics-to-track",
          theoryRecap:
            "The lesson: 'Brands sending 9-16 emails per month achieve the highest average ROI of 4,600%, higher than both lower and higher frequency brackets.'",
          question:
            "Count the sends by date: 10 campaigns from May 2 to June 1, 2026, roughly 30 days. Per the lesson's frequency benchmark, is send frequency the lever worth pulling here, or is it something else?",
          toolName: "Google Sheets",
          where: "email-campaign-export.csv, send_date column",
          procedure: [
            "List all 10 send_date values and confirm they span roughly one calendar month (May 2 - June 1, 2026).",
            "Compare the count (10 sends/month) to the lesson's 9-16 sends/month highest-ROI band.",
            "Decide whether the Steps 1-2 recommendation should be 'send more,' 'send less,' or 'change the mix.'",
          ],
          outputSample:
            "Send dates: May 2, 4, 9, 11, 14, 18, 21, 25, 28, Jun 1\n" +
            "10 sends across 30 days = inside the lesson's 9-16 sends/month band",
          healthy: "9-16 sends/month, inside the lesson's cited highest-ROI band.",
          unhealthy: "Under 9 or over 16 sends/month, which the lesson says underperforms in both directions.",
          interpret:
            "10 sends across 30 days sits comfortably inside the lesson's 9-16/month 'highest average ROI' band, so frequency isn't the problem or the opportunity here. The verdict from Steps 1-2 holds: the lever is send-type mix (more triggered, better-written recurring subject lines), not sending more or less often.",
          soWhat: [
            {
              symptom: "A program already inside the healthy frequency band but with an unbalanced send-type mix",
              action: "Keep monthly send count roughly where it is; reallocate 1-2 manual digest slots to a new triggered automation instead of adding volume",
              effort: "half day",
            },
            {
              symptom: "No written record of the recommended send-type mix exists yet",
              action: "Document the recommendation (e.g. a target triggered-to-batch ratio) so next quarter's calendar planning starts from evidence, not habit",
              effort: "30 min",
            },
          ],
          owner: "you",
          stepId: "step-3-frequency-isnt-the-lever",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Compute revenue share, per-1,000-sent rates, and send cadence",
            why: "Free, and the entire head-to-head comparison is arithmetic on columns that already exist in the export.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://sheets.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "Mailchimp",
            role: "Where you'd actually build and A/B test the two subject-line drafts",
            why: "Free tier supports subject-line A/B testing on real sends, the natural next step after drafting the two candidates.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Predictive send-time optimization and deeper revenue attribution by send type once volume grows",
            why: "Useful once you're managing more than a handful of automations and want the platform to suggest trigger timing rather than eyeballing it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Sheets + a free Mailchimp account) fully completes this comparison and both subject-line drafts. Klaviyo only matters once the triggered-automation count grows past 1-2.",
      },
      datasetUrl: "/project-data/email-campaign-export.csv",
      deliverable:
        "A one-page verdict: the revenue-share and revenue-per-1,000-sent numbers for triggered vs. batch, two literal subject-line drafts with the lesson-backed lever each uses, and a one-line recommendation for next quarter's send-type mix.",
      sampleOutput:
        "Ran the same split at Chewy: their 'Autoship Reminder' triggered send (their one automation in the sample) generated 24% of total email revenue from about 5% of total volume, the same lopsided pattern, just less extreme than the Mailchimp numbers above. Subject line rewrite for their weekly 'New Arrivals' digest: swapped the generic label for 'Your dog's new favorite toy just landed' (38 characters, slightly over the guideline but earns it with specificity). Verdict: same as above, add a second automation (post-purchase review request) before adding another manual send.",
      successCriteria: [
        "Calculates the automated campaign's share of total revenue vs. its share of total volume and states both percentages",
        "Both subject-line drafts stay close to the lesson's ~30-35 character guidance and name which lever (personalization, specificity, or curiosity) each one uses",
        "Correctly rules out send frequency as the problem by checking the actual send cadence against the lesson's 9-16/month benchmark",
        "Final recommendation is about send-type MIX, not send volume",
      ],
      portfolioReady: false,
      stretch:
        "Build both subject-line drafts as an actual A/B test in a free Mailchimp account against your own list, even a list of 50 people, and let the real open rate decide instead of the lesson's benchmark.",
    },
  ],

  "welcome-series": [
    {
      id: "welcome-series-draft-three-email-sequence",
      tier: "core",
      archetype: "build-the-asset",
      title: "Draft a Real 3-Email Welcome Series",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Write a complete, sendable 3-email welcome sequence, subject lines and body briefs, that follows the lesson's own Email 1/2/3 structure and timing, for a real case company's actual product.",
      companyId: "chewy",
      scenario:
        "Chewy just launched a new Autoship landing page and wants a welcome series for new newsletter subscribers who haven't ordered yet, separate from their existing customer flows. You're handed the brief: turn a curious new pet owner into a first Autoship order within a week, using nothing but the three-email structure this lesson teaches.",
      brief:
        "Write the actual emails, not a plan for emails. Each one needs a real subject line and a one-paragraph body brief specific enough that someone else could write the final copy from it without asking you questions.",
      mode: "build",
      conceptsCovered: [
        "How the Series Works",
        "Subject Line Strategy",
        "Common Mistakes to Avoid",
        "The Timing That Matters Most",
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft and structure the 3 emails before building them in an ESP",
            why: "Free, and every deliverable in this project is text: a subject line and a body brief per email.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://docs.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "Klaviyo",
            role: "Where this series would actually be built as a live automation with the conditional split the lesson calls out",
            why: "Free tier supports the exact 'has this person purchased?' conditional split described in the lesson, no paid plan required to build it.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "ActiveCampaign",
            role: "More advanced conditional-split branching once subscriber volume or logic outgrows a free ESP tier",
            why: "Useful once you need more branches than 'has purchased / hasn't purchased,' e.g. splitting by which lead magnet someone signed up for.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (a Google Docs draft plus a free Klaviyo account) is a complete, sendable series on its own. ActiveCampaign only matters once branching logic gets more complex than a single purchase check.",
      },
      deliverable:
        "Three complete emails: subject line and one-paragraph body brief for each, plus one sentence naming the conditional split you'd add (per the lesson's 'buyer skips the discount' pattern) and when each email sends relative to signup.",
      sampleOutput:
        "Rent the Runway draft:\n\n" +
        'Email 1 (send: within 5 min of signup) — Subject: "You\'re in, here\'s your first look" — Body brief: Confirm the subscription, thank them for joining, and hand over the promised 20%-off-first-rental code in the first sentence. One CTA: "Browse this week\'s new arrivals." No brand story yet, no urgency, just a warm confirmation.\n\n' +
        'Email 2 (send: day 2-3) — Subject: "Why we started renting, not selling" — Body brief: Tell the founding story in 2-3 sentences (the closet-in-the-cloud idea), then back it with one specific proof point: "over 2.5 million customers served." One CTA: a soft text link to a styling guide, no discount mentioned.\n\n' +
        'Email 3 (send: day 5-7) — Subject: "Your code expires Friday" — Body brief: Restate the 20% code as single-use and tied to this subscriber\'s email address, state the real expiration date, and CTA to start a rental. Add one line acknowledging it\'s their last reminder.\n\n' +
        "Conditional split: if the subscriber has already placed a rental before Email 3 sends, route them to a post-first-rental care-tips email instead of the discount code.",
      successCriteria: [
        "Exactly 3 emails, no more, no fewer, matching the lesson's core structure",
        "Email 1 is framed to send within 5 minutes of signup and delivers the promised incentive in the first sentence",
        "Email 2 includes at least one specific, named piece of social proof (a real-sounding review count, press mention, or customer number), not a vague 'loved by thousands'",
        "Email 3 restates the offer, adds real urgency (a stated deadline), and specifies a single-use per-subscriber code, never a shared code (per Mistake 4)",
        "All 3 subject lines stay close to the lesson's ~7-word guidance",
        "The discount does not appear in Email 1 alone with no follow-up (avoids Mistake 2)",
      ],
      portfolioReady: true,
      stretch:
        "Build the actual automation in a free Klaviyo account, including the conditional split that routes existing buyers away from the discount email, and screenshot the finished flow chart.",
    },
    {
      id: "welcome-series-teardown-specimen",
      tier: "core",
      archetype: "teardown",
      title: "Teardown: A Welcome Series That's Losing Money",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a synthetic-but-realistic 3-email welcome series with real, lesson-mapped defects mixed in with deliberately correct choices, find the actual problems, and don't flag the decoys.",
      companyId: "bonobos",
      scenario:
        "A junior teammate at Bonobos built a welcome series for new newsletter signups last sprint. Open rates are fine, but revenue from the flow is flat, and the unsubscribe rate is creeping up. You're asked to review the three emails before more subscribers go through it.",
      brief:
        "Some of what's below looks wrong but is actually a correct, deliberate call per the lesson. Flag the real problems, cite the lesson rule each one breaks, and leave the correct choices alone.",
      mode: "teardown",
      conceptsCovered: [
        "How the Series Works",
        "Common Mistakes to Avoid",
        "Conditional Splits: The Feature Most Brands Ignore",
        "Subject Line Strategy",
        "The Timing That Matters Most",
      ],
      teardownItems: [
        {
          itemId: "bonobos-welcome-series-v1",
          specimenSource: "synthetic-realistic",
          specimen:
            "EMAIL 1 — sent: immediately upon signup (0 days)\n" +
            "Subject: FLASH SALE: 20% OFF ENDS IN 24 HOURS!!!\n" +
            "Body: Welcome to Bonobos! As a new subscriber, use code WELCOME20 for 20% off ANYTHING on the site. This deal disappears in 24 hours, so shop now before it's gone. [Shop the Sale ->]\n\n" +
            "EMAIL 2 — sent: same day, 4 hours after Email 1\n" +
            "Subject: Learn All About Why Bonobos Started And What Makes Us Different From Other Menswear Brands\n" +
            "Body: Bonobos was founded in 2007 to fix a simple problem: menswear that actually fits. Over 500,000 guys have visited a Guideshop to get properly fitted, and we've been featured in GQ, Esquire, and the New York Times. Curious what proper fit feels like? [See how Guideshops work]\n\n" +
            "EMAIL 3 — sent: same day, 8 hours after Email 1\n" +
            "Subject: Your 20% off code WELCOME20 expires in 24 hours\n" +
            "Body: Don't forget, code WELCOME20 is still live for 20% off anything on Bonobos.com. It expires in 24 hours, so don't wait. [Shop Now ->]\n\n" +
            "Context: a subscriber who places an order 2 hours after Email 1 still receives Email 3 with the same discount code.",
          prompt:
            "Review this 3-email welcome series. List every real defect you find, cite the specific lesson rule it breaks, and rate its severity. Do not flag anything that's actually a correct choice per the lesson.",
          answerKey: [
            {
              defect: "Email 1 and Email 3 both use the same code, WELCOME20, a shared code rather than a single-use one",
              severity: "critical",
              whyItMatters:
                "A shared code posted once ends up on coupon-aggregator sites within days; every future welcome-series subscriber gets the discount without ever opening an email, and there's no way to track which subscriber actually used it.",
              lessonRef: "Common Mistakes to Avoid, Mistake 4: using a shared discount code instead of a single-use code generated per subscriber",
              owner: "developer",
            },
            {
              defect: "All 3 emails send within an 8-hour window on day 0 instead of over 5-7 days",
              severity: "critical",
              whyItMatters:
                "Collapsing three emails into one afternoon turns a relationship-building sequence into a single loud blast. The lesson's own stat, three emails outperform one by 90% more orders, assumes each email lands during a separate moment of attention, not the same few hours.",
              lessonRef: "How the Series Works / The Timing That Matters Most: Email 2 at 2-3 days, Email 3 at 5-7 days after signup",
              owner: "developer",
            },
            {
              defect: "Email 1 leads with hard-sell, fake-urgency language ('FLASH SALE... ENDS IN 24 HOURS!!!') instead of a simple welcome",
              severity: "moderate",
              whyItMatters:
                "The lesson is explicit that Email 1's job is reassurance, not conversion. Leading with a countdown before the subscriber has any reason to trust the brand reads as spam pressure at the exact moment open rates are naturally highest and easiest to protect.",
              lessonRef: "How the Series Works, Email 1: 'This is not the email to sell. It is the email to say you are in the right place.'",
              owner: "you",
            },
            {
              defect: "No conditional split exists to skip Email 3's discount for a subscriber who already purchased",
              severity: "moderate",
              whyItMatters:
                "Without a purchase-check branch, someone who buys within hours of signing up still receives a 20%-off code for something they already paid full price for, the exact awkward experience the lesson names.",
              lessonRef:
                "Conditional Splits: The Feature Most Brands Ignore: 'Has the subscriber purchased already? If yes, skip the discount email.'",
              owner: "developer",
            },
            {
              defect: "Email 2's subject line runs 14 words, far past the lesson's guidance",
              severity: "cosmetic",
              whyItMatters:
                "At 14 words the subject gets truncated in most inbox previews before it says anything useful, and it reads like an essay title instead of an invitation to open.",
              lessonRef: "Subject Line Strategy: 'Keep subject lines to around 7 words.'",
              owner: "you",
            },
          ],
          distractors: [
            "Email 2 contains no discount code or hard offer, just brand story and social proof, this is correct, the lesson reserves the offer for Email 3, not Email 2.",
            "Email 2's only call-to-action is a soft text link, not a big button, this is correct, the lesson's Email 2 job is trust-building, not conversion.",
            "Email 3 states a real 24-hour deadline for the code, this is correct, the lesson explicitly tells Email 3 to 'add urgency.'",
            "Email 1 is noticeably shorter than Email 2 and Email 3, this is correct, the lesson says to 'keep it short' for Email 1 specifically.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Write up the findings and lesson citations",
            why: "Free, and the entire deliverable is a written answer key, no specialized tool needed to complete the teardown itself.",
            required: true,
            lastVerified: "2026-08-12",
            inlineUrl: "https://docs.google.com",
            inlinePricing: "Free",
          },
          {
            toolName: "Klaviyo",
            role: "Where you'd actually inspect real welcome-series timing and conditional-split settings",
            why: "Free tier lets you see how send-delay and conditional-split settings are actually configured in a live flow, useful context for spotting the timing defect.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "ActiveCampaign",
            role: "Testing more complex conditional-split logic beyond a simple purchase check",
            why: "Only relevant if you want to go further than this teardown and rebuild the flow with richer branching than the free tier supports.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (Google Docs plus a free Klaviyo account to see real settings) is complete for finding and writing up every defect. ActiveCampaign only matters if you go on to rebuild the flow with more branches.",
      },
      deliverable:
        "A written answer key: every real defect found, its severity, the specific lesson line or Mistake number it breaks, and a one-line fix, with confirmation of which flagged-looking elements you correctly left alone.",
      sampleOutput:
        "Running the same checklist against a Warby Parker specimen surfaces a different critical defect: a shared code isn't the issue there, all three subject lines are personalized and under 7 words. Instead, Email 3 never states an actual deadline, 'act now' with no date attached is urgency in name only. The fix pattern is the same either way: name the specific line, quote the lesson rule it breaks, and don't touch the parts that were already correct, like Warby's Email 2, which correctly skips any offer and sticks to brand story.",
      successCriteria: [
        "Flags the reused WELCOME20 code across Email 1 and Email 3 as a critical defect, citing Mistake 4",
        "Flags the same-day send timing (no 2-3 day, no 5-7 day gaps) as a critical defect, citing the lesson's stated Email 2/Email 3 timing",
        "Does NOT flag Email 2's lack of a discount code as a defect, correctly recognizing the offer belongs in Email 3",
        "Does NOT flag Email 3's stated 24-hour deadline language as fake urgency, correctly recognizing the lesson tells Email 3 to add urgency",
        "Identifies at least 4 of the 5 real defects with the correct lesson citation for each",
      ],
      portfolioReady: false,
      stretch:
        "Rewrite the specimen into a corrected 3-email sequence fixing every flagged defect, then compare it against your own Project 1 draft for a different company.",
    },
  ],
};
