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

  "automation-flows": [
    {
      id: "automation-flows-lifecycle-architecture-audit",
      tier: "mini",
      archetype: "audit",
      title: "Lifecycle Flow Architecture: Trigger and Exit Condition Audit",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given an ecommerce merchant's multi-flow lifecycle setup, audit triggers, segment filters, and exit rules to eliminate conflicting sends and protect sender reputation.",
      companyId: "klaviyo",
      scenario:
        "You are a lifecycle marketing specialist at Klaviyo reviewing an ecommerce merchant's automated flow configuration. The merchant is running all five core flows, but customer support reports that buyers who completed checkout are still receiving 'You left items in your cart' reminders, while 90-day inactive subscribers are being hit with standard promotional blasts.",
      brief:
        "Audit the merchant's flow trigger definitions, segment filters, and exit rules across their core flows. Identify where missing exit conditions cause overlapping sends and configure the correct flow filters.",
      mode: "diagnostic",
      conceptsCovered: [
        "Building a Flow: The Four-Part Structure",
        "Flow 4: Re-engagement (Win-back)",
      ],
      steps: [
        {
          stepId: "step-1-exit-condition-check",
          concept: "Building a Flow: The Four-Part Structure",
          lessonAnchor: "building-a-flow-the-four-part-structure",
          theoryRecap:
            "Every automation flow requires four structural elements: Trigger, Segment Filter, Email Sequence, and Exit Conditions. Missing exit conditions mean customers who convert or churn remain trapped in conflicting sequences.",
          question:
            "Review the cart abandonment configuration: Trigger is 'Started Checkout', Delay is 1 hour / 24 hours / 48 hours. Exit condition is currently empty. What happens when a shopper buys within 3 hours?",
          toolName: "Klaviyo",
          where: "Flow builder canvas, Flow Filters & Exit Rules settings panel",
          procedure: [
            "Open the flow builder canvas for the 3-part Cart Abandonment sequence.",
            "Inspect the Flow Triggers and Additional Filters configuration.",
            "Add a flow filter: 'Placed Order zero times since starting this flow'.",
            "Verify that placed orders trigger an immediate exit across all downstream delays.",
          ],
          outputSample:
            "FLOW: Abandoned Cart (3-part sequence)\nTRIGGER: Started Checkout (Shopify metric)\nFLOW FILTER: Has Placed Order 0 times since starting this flow [MISSING -> ADDED]\nEMAIL 1 (T+1h) -> EMAIL 2 (T+24h) -> EMAIL 3 (T+48h)\nEXIT STATUS: Active buyers suppressed immediately upon order confirmation",
          healthy:
            "Flow filters evaluate in real-time before each scheduled message; buyers who complete checkout exit immediately without receiving post-purchase cart reminders.",
          unhealthy:
            "Static timer-only triggers without exit conditions, resulting in paying customers receiving discounted cart abandonment prompts for items they already purchased.",
          interpret:
            "Triggering on an event without an exit filter creates catastrophic customer experience bugs. Real-time event filters ensure message relevance.",
          soWhat: [
            {
              symptom:
                "Customers complaining about cart reminder emails after ordering",
              action:
                "Add 'Placed Order 0 times since starting flow' as a mandatory flow filter",
              effort: "5 min",
            },
            {
              symptom:
                "Discount code leakage to buyers who were already going to purchase",
              action:
                "Restrict discount codes to Email 3 only with a 24-hour expiration window",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-winback-suppression",
          concept: "Flow 4: Re-engagement (Win-back)",
          lessonAnchor: "flow-4-re-engagement-win-back",
          theoryRecap:
            "The lesson specifies a 3-part re-engagement flow triggered at 90 days of inactivity: compelling return incentive, specific bonus, and final breakup email before suppressing non-responders to protect domain sender reputation.",
          question:
            "The merchant's win-back flow sends 3 emails over 14 days to contacts with 0 opens/clicks in 90 days. If a subscriber fails to engage with all 3 emails, what action must occur?",
          toolName: "Google Sheets",
          where: "Subscriber list suppression settings and automated segment rules",
          procedure: [
            "Define the win-back segment: Last Opened Email > 90 days AND Last Clicked Email > 90 days AND Placed Order > 90 days.",
            "Configure the 3-email sequence (Day 1: We miss you, Day 5: 15% VIP credit, Day 12: Final notice).",
            "Add an automated webhook or profile property update after Email 3: 'Set Status = Suppressed' if unengaged.",
            "Exclude suppressed profiles from all weekly campaign broadcasts.",
          ],
          outputSample:
            "SEGMENT: 90-Day Inactive Subscribers (12,450 profiles)\nFLOW: Win-Back Sequence (3 emails / 14 days)\nENGAGEMENT RESULTS:\n  - Re-engaged (Opened/Clicked): 3,735 profiles (30.0%) -> Moved to Engaged 30-Day Segment\n  - Non-responsive: 8,715 profiles (70.0%) -> Auto-suppressed from marketing sends\nDELIVERABILITY IMPACT: Spam complaint rate dropped from 0.18% to 0.03%",
          healthy:
            "Unresponsive subscribers are automatically suppressed after the win-back sequence, keeping the active broadcast list clean and inbox deliverability high.",
          unhealthy:
            "Keeping inactive subscribers on broadcast lists indefinitely, causing open rates to drop below 20% and triggering ISP spam filters.",
          interpret:
            "Re-engagement flows recover ~30% of inactive users; the remaining 70% must be suppressed, not repeatedly emailed.",
          soWhat: [
            {
              symptom:
                "Campaign open rates declining month-over-month across full list",
              action:
                "Run win-back automation and suppress all profiles that fail to respond after 14 days",
              effort: "30 min",
            },
            {
              symptom:
                "High bounce and spam complaint rates on holiday sale broadcasts",
              action:
                "Create a strict 'Engaged 90 Days' master segment for all promotional sends",
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
            role: "Map flow triggers, filters, and exit condition matrices",
            why: "Free and accessible for journey mapping",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Visual flow canvas builder and behavioral trigger engine",
            why: "Industry-standard ecommerce automation platform",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete flow logic specification document detailing triggers, segment filters, message timings, and exit conditions for abandoned cart and win-back automations.",
      sampleOutput:
        "Chewy — Lifecycle Automation Specification (Excerpt)\n\n" +
        "FLOW 1: Abandoned Cart Recovery\n" +
        "  Trigger: Added to Cart (No checkout within 60 min)\n" +
        "  Flow Filter: Placed Order zero times since starting flow AND Started Autoship zero times\n" +
        "  Email 1 (T+1 hour): 'Your pet's favorites are waiting' + direct cart link (No discount)\n" +
        "  Email 2 (T+24 hours): Customer reviews + low stock alert for saved item\n" +
        "  Email 3 (T+48 hours): '$5 off your first order over $35' + 24-hr countdown timer\n" +
        "  Exit Rule: Immediate suppression upon 'Placed Order' event at any step\n\n" +
        "FLOW 2: 90-Day Inactive Win-Back\n" +
        "  Trigger: Zero opens, clicks, or orders in 90 days\n" +
        "  Email 1 (Day 1): 'Is your pet still loving their food? Top health tips inside'\n" +
        "  Email 2 (Day 6): 'Enjoy free 1-2 day shipping on your next restock'\n" +
        "  Email 3 (Day 12): 'Last call: We are pausing your emails to keep your inbox clean'\n" +
        "  Exit Action: Auto-tag as 'Inactive-Suppressed' if zero clicks after Day 14",
      successCriteria: [
        "Defines explicit exit conditions for the cart abandonment flow that prevent post-purchase sends",
        "Specifies automated suppression logic for unengaged contacts following the 3-email win-back flow",
        "Correctly maps triggers and segment filters using behavioral events rather than time-only timers",
      ],
      portfolioReady: true,
    },
    {
      id: "automation-flows-teardown-flawed-sequences",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Lifecycle Logic Bugs: Flawed Flow Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate two lifecycle automation blueprints (a B2B SaaS trial onboarding flow and an ecommerce post-purchase sequence) to identify missing exit conditions, premature review requests, and static timing errors.",
      companyId: "freshworks",
      scenario:
        "You are auditing marketing automation configurations at Freshworks. A junior email specialist built two automated flow blueprints in the CRM: a B2B product-trial onboarding flow and an ecommerce post-purchase sequence for an affiliated merchandise shop. Both blueprints contain critical architectural flaws that risk subscriber churn and deliverability penalties.",
      brief:
        "Inspect the two flow configuration specimens. Spot every logic defect (missing exit conditions, static time drips, discounting too early, sending broadcasts to suppressed segments), categorize severity, and explain the conversion breakdown.",
      mode: "teardown",
      conceptsCovered: [
        "Common Mistakes",
        "Flow 3: Post-Purchase Onboarding",
        "Flow 1: Welcome Series",
      ],
      teardownItems: [
        {
          itemId: "b2b-trial-onboarding-blueprint",
          specimenSource: "synthetic-realistic",
          specimen:
            "FLOW SPECIFICATION: 14-Day Free Trial SaaS Onboarding\n" +
            "TRIGGER: Free Trial Sign-up Created\n" +
            "FILTERS: None\n" +
            "SEQUENCE:\n" +
            "  - Email 1 (Immediate): 'Welcome to Freshworks + Schedule Enterprise Demo'\n" +
            "  - Delay: 3 Days\n" +
            "  - Email 2: 'Feature Highlight: Advanced Kanban Board Setup'\n" +
            "  - Delay: 3 Days\n" +
            "  - Email 3: 'Special Offer: 30% off Annual Plan if you upgrade today'\n" +
            "  - Delay: 3 Days\n" +
            "  - Email 4: 'Did you invite your team yet?'\n" +
            "EXIT RULES: None (All subscribers receive all 4 emails)",
          prompt:
            "Review this B2B trial onboarding automation flow specification. Identify all logic defects, rate their severity, and link them to the lesson's automation rules.",
          answerKey: [
            {
              defect:
                "Zero exit conditions: Paid conversions and activated enterprise accounts remain in the trial onboarding sequence, receiving aggressive 30% discount prompts after already paying.",
              severity: "critical",
              whyItMatters:
                "Customers who already upgraded feel buyers' remorse seeing subsequent discount offers, while receiving irrelevant setup nudges degrades product trust.",
              lessonRef: "Common Mistakes: Mistake 2, No exit conditions between flows",
              owner: "you",
            },
            {
              defect:
                "Email 1 pushes an enterprise demo CTA before the user has experienced core product value or activated their workspace.",
              severity: "moderate",
              whyItMatters:
                "Welcome emails should deliver immediate utility (activation instructions) rather than high-friction sales calls before value realization.",
              lessonRef: "The Five Core Flows: Flow 1: Welcome Series",
              owner: "you",
            },
            {
              defect:
                "Static time-based delays without behavioral branching: Email 4 asks 'Did you invite your team?' on Day 9 regardless of whether the user already invited 10 team members on Day 1.",
              severity: "moderate",
              whyItMatters:
                "Sending onboarding prompts that ignore user actions frustrates active power users and fails to intervene with stuck users who need help.",
              lessonRef: "Common Mistakes: Mistake 1, Triggering on time alone, not behaviour",
              owner: "you",
            },
          ],
          distractors: [
            "The flow uses a 14-day total duration for a 14-day trial",
            "Email 2 introduces Kanban boards as a core product feature",
            "The sequence contains 4 total emails",
          ],
          partialCredit: true,
        },
        {
          itemId: "ecommerce-post-purchase-blueprint",
          specimenSource: "synthetic-realistic",
          specimen:
            "FLOW SPECIFICATION: Post-Purchase Customer Journey\n" +
            "TRIGGER: Order Placed (Online Store)\n" +
            "FILTERS: Send to all buyers\n" +
            "SEQUENCE:\n" +
            "  - Email 1 (Immediate): Order Confirmation + Receipt\n" +
            "  - Delay: 24 Hours\n" +
            "  - Email 2: 'Review your purchase! Tell us what you think on Trustpilot'\n" +
            "  - Delay: 3 Days\n" +
            "  - Email 3: 'Buy again: 20% off your next order (Expires in 48h)'\n" +
            "EXIT RULES: If user unsubscribes",
          prompt:
            "Analyze this ecommerce post-purchase flow blueprint. Identify the timing and sequencing defects that harm customer satisfaction and review ratings.",
          answerKey: [
            {
              defect:
                "Review request sent 24 hours after order placement, days before physical product delivery.",
              severity: "critical",
              whyItMatters:
                "Asking for product reviews before delivery confuses customers, generates 1-star complaints ('I haven't even received it yet!'), and wastes the review opportunity.",
              lessonRef: "The Five Core Flows: Flow 3: Post-Purchase Onboarding",
              owner: "you",
            },
            {
              defect:
                "Missing shipping confirmation and usage onboarding steps between receipt and cross-sell.",
              severity: "moderate",
              whyItMatters:
                "Post-purchase flows must reduce buyer's remorse and provide care/usage instructions before pivoting to repeat monetization.",
              lessonRef: "The Five Core Flows: Flow 3: Post-Purchase Onboarding",
              owner: "you",
            },
          ],
          distractors: [
            "Email 1 delivers the transactional order receipt immediately",
            "Email 3 offers a time-limited 20% discount coupon",
            "The flow includes an unsubscribe exit condition",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Document flow defects, severity scores, and corrected logic branches",
            why: "Universal spreadsheet tool for audit matrices",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A structured flow teardown scorecard grading both specimens with prioritized remediation steps for flow triggers, filters, and delays.",
      sampleOutput:
        "Glossybox — Flow Teardown Audit (Specimen Review)\n\n" +
        "SPECIMEN AUDIT: Welcome & Onboarding Sequence\n" +
        "  Defect 1 [CRITICAL]: Review request fired at T+48h before beauty box dispatch.\n" +
        "    Fix: Tie review trigger to carrier delivery webhook + 7-day usage delay.\n" +
        "  Defect 2 [CRITICAL]: No exit condition when subscriber upgrades from monthly to annual.\n" +
        "    Fix: Add filter 'Subscription Type != Annual' to prevent duplicate upsell emails.\n" +
        "  Defect 3 [MODERATE]: Email 2 sent 2 hours after Email 1, flooding inbox.\n" +
        "    Fix: Extend delay between Welcome 1 and Content 2 to 48 hours.",
      successCriteria: [
        "Identifies the premature review request flaw in the post-purchase sequence",
        "Catches the absence of paid-upgrade exit conditions in the SaaS onboarding blueprint",
        "Distinguishes real architectural errors from valid baseline parameters (distractors)",
      ],
      portfolioReady: true,
    },
  ],
  "cold-email": [
    {
      id: "cold-email-infrastructure-deliverability-audit",
      tier: "mini",
      archetype: "audit",
      title: "Outbound Infrastructure & Deliverability Health Check",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit a B2B outbound email setup to isolate primary domains, establish secondary domain warmup protocols, enforce daily inbox quotas, and verify list deliverability below a 2% bounce threshold.",
      companyId: "freshworks",
      scenario:
        "You are an outbound sales strategist at Freshworks preparing a new SDR team for cold outreach to IT directors. The team wants to send 500 emails a day immediately from the primary company domain. You must audit their technical setup, domain warm-up status, daily volume caps, and list verification hygiene before any campaign goes live.",
      brief:
        "Audit the technical infrastructure against the lesson's four-stage outbound model: separate sending domains, mailbox warmup protocols, bounce rate thresholds, and daily inbox send limits.",
      mode: "diagnostic",
      conceptsCovered: [
        "How It Works",
        "Common Mistakes",
      ],
      steps: [
        {
          stepId: "step-1-domain-isolation-check",
          concept: "How It Works",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson specifies using secondary sending domains (e.g., getacme.com instead of acme.com), warming them over 4-6 weeks, and keeping daily send volume under 30-50 emails per inbox to prevent domain blacklisting.",
          question:
            "The SDR team proposes sending 250 cold emails per day directly from sdr@freshworks.com on day one. What risk does this create, and what is the required infrastructure fix?",
          toolName: "Google Sheets",
          where: "Outbound domain configuration and DNS record registry (SPF, DKIM, DMARC)",
          procedure: [
            "Audit sending domain: verify that outreach originates from dedicated secondary domains (e.g., tryfreshworks.com).",
            "Check authentication records: ensure SPF, DKIM, and DMARC policies are configured and passing.",
            "Verify warmup schedule: confirm 4-6 weeks of peer-to-peer mailbox warmup with gradual ramp-up.",
            "Set hard inbox throttling: cap daily volume at 30-40 cold emails per mailbox.",
          ],
          outputSample:
            "INFRASTRUCTURE AUDIT REPORT\nPrimary Domain: freshworks.com (PROTECTED - Zero outbound cold email allowed)\nOutbound Domains Configured:\n  1. tryfreshworks.com (Inboxes: 3 | SPF: PASS | DKIM: PASS | DMARC: PASS | Warmup: Week 5 (98% health score))\n  2. getfreshdesk.io (Inboxes: 3 | SPF: PASS | DKIM: PASS | DMARC: PASS | Warmup: Week 6 (99% health score))\nDaily Capacity: 6 inboxes x 35 emails/day = 210 emails/day total\nRisk Status: GREEN (Primary domain fully isolated)",
          healthy:
            "Secondary domain usage with SPF/DKIM/DMARC authenticated, 4+ weeks warmup completed, and daily sends capped at ≤40 per inbox.",
          unhealthy:
            "Blasting cold emails from primary corporate domain without warmup or exceeding 50 sends per inbox daily.",
          interpret:
            "Primary domains carry business-critical transactional and client communications; risking primary domain reputation with cold email can blackball company-wide email operations.",
          soWhat: [
            {
              symptom: "SDR proposes sending from primary corporate domain",
              action:
                "Block sending and provision secondary domains with automated warmup before launching",
              effort: "30 min",
            },
            {
              symptom: "Deliverability drop or emails landing in spam",
              action:
                "Pause sending, check DMARC/DKIM records, and reduce volume to 20 emails/day during re-warmup",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-list-verification-bounce-audit",
          concept: "Common Mistakes",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Hard bounces must stay strictly below 2% per campaign. Unverified lists with stale or invalid addresses rapidly trigger spam flags from Google and Microsoft.",
          question:
            "An export of 1,200 prospect emails from an online directory shows 140 unverified addresses and 60 invalid syntax errors. What must you do before importing this list to the sending tool?",
          toolName: "Google Sheets",
          where: "List cleaning spreadsheet and email verification API results",
          procedure: [
            "Import the prospect export into Google Sheets and check for syntax anomalies.",
            "Run the list through an email verification tool (e.g. MX record validation, SMTP handshake).",
            "Filter out all 'invalid', 'catch-all', and 'unverified' rows.",
            "Calculate estimated bounce rate: must be under 2.0% of delivered contacts.",
          ],
          outputSample:
            "LIST HYGIENE AUDIT: Q3 IT Director Prospect List\nTotal Raw Contacts: 1,200\nVerification Results:\n  - Valid (Deliverable): 984 (82.0%)\n  - Catch-All / Risky: 156 (13.0% - QUARANTINED)\n  - Invalid / Hard Bounce: 60 (5.0% - PURGED)\nApproved Outbound Batch: 984 verified contacts\nProjected Bounce Rate: < 0.8% (Target: < 2.0%)",
          healthy:
            "List verification performed prior to upload; bounce rate stays below 1.5% and spam complaints remain under 0.05%.",
          unhealthy:
            "Importing unverified raw lead lists with >3% bounce rate, leading to ISP rate-limiting and domain reputation degradation.",
          interpret:
            "Verification protects domain health. Discarding 15% risky emails preserves the deliverability of the remaining 85%.",
          soWhat: [
            {
              symptom: "Campaign bounce rate exceeds 2%",
              action:
                "Immediately pause campaign, purge remaining unverified contacts, and re-verify list",
              effort: "30 min",
            },
            {
              symptom: "Spam complaint rate approaches 0.1%",
              action:
                "Tighten ICP criteria and remove scraped directories with poor data accuracy",
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
            role: "Verify lead exports, calculate bounce rates, and map mailbox send capacities",
            why: "Zero cost spreadsheet for hygiene verification",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Customer.io",
            role: "B2B messaging and sequence orchestrator",
            why: "Enterprise-grade message delivery and tracking",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete Outbound Infrastructure & Deliverability Checklist verifying domain authentication, warmup status, inbox quotas, and list verification metrics.",
      sampleOutput:
        "Zendesk — Outbound Infrastructure Audit (Pre-Flight)\n\n" +
        "DOMAIN STATUS:\n" +
        "  Primary: zendesk.com (Protected - No cold outreach)\n" +
        "  Secondary 1: try-zendesk.com (SPF: Valid, DKIM: Valid, DMARC: p=quarantine, Warmup: 32 days, Health: 99%)\n" +
        "  Secondary 2: get-zendesk.com (SPF: Valid, DKIM: Valid, DMARC: p=quarantine, Warmup: 28 days, Health: 97%)\n\n" +
        "SENDING PROTOCOL:\n" +
        "  Max per inbox: 35 emails/day\n" +
        "  Sending window: Mon-Thu, 8:30 AM - 11:30 AM recipient local time\n" +
        "  List Verification: 100% verified via SMTP check, bounce threshold set to auto-kill at 2.0%",
      successCriteria: [
        "Ensures complete domain isolation separating primary business domain from outreach domains",
        "Enforces daily sending limits of under 50 emails per inbox with 4+ weeks warmup",
        "Establishes pre-send verification ensuring bounce rates remain strictly below 2%",
      ],
      portfolioReady: true,
    },
    {
      id: "cold-email-copy-sequence-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Spam Triggers: Cold Email Copy & Sequence Teardown",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Teardown two flawed outbound cold email specimens to identify selfish company-centric pitches, high-friction CTAs, spam-trigger attachments, and rapid-fire follow-up cadences.",
      companyId: "zendesk",
      scenario:
        "You are reviewing outbound sales enablement collateral at Zendesk. Two SDRs drafted 3-touch cold email sequences targeting VP of Customer Support prospects. Both sequences are experiencing 0.5% reply rates and high spam complaint flags. You must teardown each specimen against the lesson's cold email copywriting rules (under 100 words, pain-first, low-friction CTA, personalized opening, spaced follow-ups).",
      brief:
        "Audit the two cold email sequence specimens. Spot every copywriting and sequencing defect (feature dumping, selfish framing, high-friction CTAs, excessive length, spam trigger words), rate severity, and explain why the prospect ignores or flags the email.",
      mode: "teardown",
      conceptsCovered: [
        "Common Mistakes",
        "What It Is",
        "How It Works",
      ],
      teardownItems: [
        {
          itemId: "enterprise-support-cold-email-pitch",
          specimenSource: "synthetic-realistic",
          specimen:
            "SUBJECT: Introducing our award-winning AI customer service platform for enterprise companies!\n\n" +
            "Dear Sir/Madam,\n\n" +
            "I hope this email finds you well. My name is Alex and I am an Enterprise Account Executive at Zendesk. We are an industry-leading provider of omnichannel customer service software with over 100,000 customers worldwide. Our platform offers 500+ integrations, AI ticketing, sentiment analysis, workforce management, and SLA tracking.\n\n" +
            "I would love to set up a 45-minute demo next Tuesday at 2 PM to walk you through our product deck and explore how we can completely overhaul your support department.\n\n" +
            "Are you the right person to speak with regarding customer service software procurement?\n\n" +
            "Best regards,\n" +
            "Alex\n" +
            "[Attached: Product_Brochure_2026.pdf (14MB)]",
          prompt:
            "Teardown this cold email specimen against the lesson's copy and deliverability guidelines. Spot all defects that kill reply rates and trigger spam filters.",
          answerKey: [
            {
              defect:
                "Heavy company-centric pitch ('We are an industry-leading provider...') instead of leading with the recipient's specific pain point.",
              severity: "critical",
              whyItMatters:
                "Prospects delete emails that talk about the seller's features rather than solving their urgent problem.",
              lessonRef:
                "Common Mistakes: A close second: writing emails that are too long and too focused on you",
              owner: "you",
            },
            {
              defect:
                "High-friction CTA asking for a 45-minute demo and complex procurement question instead of a low-friction conversation starter.",
              severity: "critical",
              whyItMatters:
                "Cold email goals are to start a conversation, not close a deal or demand a 45-minute calendar block on the first touch.",
              lessonRef:
                "What It Is: The goal is not to close a deal in one message. It is to earn a reply",
              owner: "you",
            },
            {
              defect:
                "Generic opening ('Dear Sir/Madam', 'I hope this email finds you well') with zero personalization or ICP relevance.",
              severity: "moderate",
              whyItMatters:
                "Generic greetings signal mass automated spam, driving immediate deletes without reading.",
              lessonRef:
                "How It Works: Copy follows a simple structure: one personalized opening line",
              owner: "you",
            },
            {
              defect:
                "14MB PDF attachment on a cold outbound email to a new contact.",
              severity: "critical",
              whyItMatters:
                "Large attachments from unknown senders trigger spam filters and security quarantines in enterprise email gateways.",
              lessonRef: "How It Works: Infrastructure and deliverability",
              owner: "you",
            },
          ],
          distractors: [
            "The email mentions the sender's job title in the signature",
            "The subject line mentions AI and customer service",
            "The message ends with a professional sign-off",
          ],
          partialCredit: true,
        },
        {
          itemId: "follow-up-sequence-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "TOUCH 2 (Sent 4 hours after Touch 1):\n" +
            "SUBJECT: Did you see my email earlier today?\n\n" +
            "Just bubbling this to the top of your inbox since I haven't heard back from you yet. Let me know when we can jump on a 30-min call.\n\n" +
            "---\n" +
            "TOUCH 3 (Sent 24 hours after Touch 2):\n" +
            "SUBJECT: Following up again...\n\n" +
            "I know you are busy, but I really think you are missing out if you don't look at our AI tool. Can you connect me with your boss if you aren't the decision maker?",
          prompt:
            "Evaluate this 2-touch follow-up sequence for cadence, tone, and value delivery.",
          answerKey: [
            {
              defect:
                "Aggressive, rapid-fire follow-up cadence (4 hours and 24 hours apart) instead of proper 2-4 business day spacing.",
              severity: "critical",
              whyItMatters:
                "Rapid follow-ups annoy busy executives and lead directly to manual 'Mark as Spam' clicks that harm domain sender reputation.",
              lessonRef:
                "How It Works: Sequences are follow-up emails sent 2-4 days apart",
              owner: "you",
            },
            {
              defect:
                "Zero incremental value in follow-ups: empty 'bumping this' and passive-aggressive guilt ('missing out', 'connect me with your boss').",
              severity: "critical",
              whyItMatters:
                "Effective follow-ups provide a new angle, case study, or micro-insight; passive-aggressive nagging destroys credibility.",
              lessonRef: "How It Works: Sequence management",
              owner: "you",
            },
          ],
          distractors: [
            "Touch 2 keeps the message under 50 words",
            "The emails thread into the same conversation topic",
            "Touch 3 mentions AI as a tool capability",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log copy defects, measure word counts, and calculate spam risk scores",
            why: "Standard audit framework tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A comprehensive Cold Outreach Teardown Scorecard evaluating copy length, personalization quality, CTA friction, and follow-up spacing.",
      sampleOutput:
        "Slack — Outbound Copy Teardown Scorecard\n\n" +
        "SPECIMEN 1: Engineering Lead Cold Pitch\n" +
        "  Word Count: 68 words (PASS - Target: < 100 words)\n" +
        "  Personalization: Cites recipient's GitHub open-source repo (PASS)\n" +
        "  Pain Focus: Highlights context-switching costs in distributed sprints (PASS)\n" +
        "  CTA: 'Worth a 2-line reply if this is top of mind?' (PASS - Low friction)\n\n" +
        "SPECIMEN 2: Defective Follow-up Draft\n" +
        "  Defect: 'Bumping this' after 6 hours with no new value. Rated CRITICAL.\n" +
        "  Remediation: Space follow-up by 3 business days and share relevant engineering latency benchmark.",
      successCriteria: [
        "Identifies selfish/product-centric framing and high-friction demo CTAs",
        "Catches aggressive follow-up cadences that violate the 2-4 day spacing rule",
        "Flags technical deliverability hazards like large attachments on cold outreach",
      ],
      portfolioReady: true,
    },
  ],

  "list-building": [
    {
      id: "list-building-optin-form-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Opt-In Autopsy: Auditing a Lead Magnet Landing Page",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real opt-in landing page description with copy, form fields, and CTA text, apply the lesson's conversion principles to find what's costing signups.",
      companyId: "lenskart",
      scenario:
        "You're a growth marketer at Lenskart evaluating why a new eyewear style-guide opt-in page converts below 2%, well under the 10-40% benchmark for a specific lead magnet.",
      brief:
        "Read the supplied landing page copy and form spec, flag every deviation from the lesson's high-converting patterns, and rank fixes by expected impact.",
      mode: "diagnostic",
      conceptsCovered: [
        "Specific lead magnets convert better than vague ones",
        "Form field count reduces conversion",
      ],
      steps: [
        {
          stepId: "step-1-lead-magnet-specificity",
          concept: "Specific lead magnets convert better than vague ones",
          lessonAnchor: "step-1-build-a-specific-lead-magnet",
          theoryRecap:
            "The lesson shows generic 'subscribe to our newsletter' CTAs convert below 1%, while a specific promise routinely hits 10-40%.",
          question:
            "The landing page CTA reads 'Sign up for our newsletter' above a form with 5 fields (name, email, phone, city, birthday). What's the single highest-impact fix?",
          toolName: "Google Sheets",
          where:
            "Open the landing-page-copy spec, log every form field and CTA line into a tracking sheet.",
          procedure: [
            "Paste the landing page CTA and all 5 form fields into a sheet",
            "Mark each field as 'required for delivery' or 'nice-to-have'",
            "Rewrite the CTA to name the specific lead magnet and its outcome",
          ],
          outputSample:
            "BEFORE\n  CTA: 'Sign up for our newsletter'\n  Fields: name, email, phone, city, birthday (5 fields)\n\nAFTER\n  CTA: 'Get the Lenskart Face-Shape Guide: find your frame in 60 seconds'\n  Fields: email only (1 field)",
          healthy:
            "CTA names the specific deliverable and the form asks for email only, matching the lesson's data that each extra field cuts conversion roughly 13%.",
          unhealthy:
            "CTA stays generic and the form keeps 5 fields, most of which have nothing to do with delivering the guide.",
          interpret: "Every field beyond email is a conversion tax with no delivery benefit.",
          soWhat: [
            {
              symptom: "Opt-in rate stuck below 2% despite good traffic",
              action: "Cut the form to email-only and rename the CTA around the specific guide",
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
            role: "Log defects and rewrite the CTA and form spec",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked audit memo listing every landing-page conversion defect with the specific fix and expected impact.",
      sampleOutput:
        "Nykaa Style Quiz opt-in audit (excerpt)\n\nDEFECT: CTA reads 'Join our list' -> RENAME to 'Get your 5-minute skin-type quiz results'\nDEFECT: 4 required fields -> CUT to email only\nEXPECTED LIFT: from 1.8% to an estimated 12-15% based on lesson benchmarks",
      successCriteria: [
        "Identifies the vague CTA as the top defect",
        "Flags excess form fields with the roughly 13%-per-field conversion cost",
        "Proposes a specific rewritten CTA",
      ],
      portfolioReady: true,
    },
    {
      id: "list-building-double-optin-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Deliverability Trap: Tearing Down a Broken Opt-In Flow",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 3 synthetic opt-in and welcome-sequence specimens, identify which ones violate the lesson's permission and deliverability rules.",
      companyId: "warby-parker",
      scenario:
        "You're auditing Warby Parker's regional email vendor's opt-in setup after a spike in spam complaints.",
      brief:
        "Review 3 short specimens describing opt-in flows and flag the real defects versus the plausible-but-fine choices.",
      mode: "teardown",
      conceptsCovered: [
        "Double opt-in filters bad addresses",
        "Never buy or scrape email lists",
        "Send the welcome email immediately",
      ],
      teardownItems: [
        {
          itemId: "item-1-single-optin-paid-ads",
          specimen:
            "Paid Instagram ad -> single opt-in form (no confirmation email) -> straight into the main promotional list, no tag applied.",
          specimenSource: "synthetic-realistic",
          prompt: "Is this opt-in flow safe to run at scale?",
          answerKey: [
            {
              defect: "Single opt-in on cold paid traffic",
              severity: "critical",
              whyItMatters:
                "Cold traffic fills the list with bots and mistyped addresses; the lesson names single opt-in on paid ads as where deliverability problems start.",
              lessonRef: "Step 2: Use Double Opt-In",
              owner: "either",
            },
          ],
          distractors: [
            "No tag applied at signup (a real gap, but a segmentation issue, not a deliverability defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-purchased-list",
          specimen:
            "Marketing team buys a 20,000-address 'eyewear shoppers' list from a data broker and merges it into the main send.",
          specimenSource: "synthetic-realistic",
          prompt: "Flag the defect.",
          answerKey: [
            {
              defect: "Purchased or scraped list merged into sends",
              severity: "critical",
              whyItMatters:
                "ESPs suspend accounts for this, and sending to people who never asked to hear from you tanks sender reputation for the whole list, per the lesson's warning.",
              lessonRef: "Callout: Never buy or scrape email lists",
              owner: "either",
            },
          ],
          distractors: [
            "List size grew by 20,000 overnight (a vanity metric, not itself the defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-delayed-welcome",
          specimen:
            "New confirmed subscriber gets their welcome email 48 hours later, batched with the weekly newsletter send.",
          specimenSource: "synthetic-realistic",
          prompt: "Flag the defect.",
          answerKey: [
            {
              defect: "Welcome email delayed instead of sent immediately",
              severity: "moderate",
              whyItMatters:
                "The moment of confirmation is the subscriber's highest-attention moment; delay cuts open rates significantly per the lesson.",
              lessonRef: "Step 4: Send a Welcome Email Immediately",
              owner: "developer",
            },
          ],
          distractors: [
            "Welcome email batched with the newsletter (a real annoyance, but sounds plausible since the guide still gets delivered)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log defects, severity, and fixes for each specimen",
            why: "Free, no signup friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "ActiveCampaign",
            role: "Cross-check how double opt-in and welcome automations are actually configured",
            why: "A real ESP shows the exact settings each specimen is describing",
            required: false,
            fallback: "Google Sheets alone is enough to complete the exercise",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A defect log across all 3 specimens with severity and lesson-referenced fixes.",
      sampleOutput:
        "Lenskart welcome-flow teardown (excerpt)\n\nSPECIMEN 2: purchased list merge\nDEFECT: critical, list purchased from broker\nFIX: delete the purchased addresses, rebuild via opt-in only",
      successCriteria: [
        "Correctly identifies all 3 real defects",
        "Does not flag the distractors as defects",
        "Assigns lesson-referenced severity to each defect",
      ],
      portfolioReady: true,
    },
  ],
  "segmentation": [
    {
      id: "segmentation-engagement-scheme-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the First Three Segments: An Engagement-Tier Scheme",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 12-row subscriber engagement export, build the lesson's three-segment engagement scheme (active/cold/lapsed) with real cutoffs and a send action for each.",
      companyId: "nykaa",
      scenario:
        "You're the CRM analyst at Nykaa and the list has never been segmented; leadership wants the fastest-to-ship segmentation win before the next campaign.",
      brief:
        "Apply the lesson's engagement-tier framework to a real subscriber export and produce a segment assignment sheet plus the send action for each tier.",
      mode: "build",
      conceptsCovered: [
        "Engagement segmentation: active, cold, lapsed",
        "RFM scoring for VIP identification",
      ],
      steps: [
        {
          stepId: "step-1-engagement-tiers",
          concept: "Engagement segmentation: active, cold, lapsed",
          lessonAnchor: "the-fastest-way-to-start-engagement-segmentation",
          theoryRecap:
            "The lesson defines three engagement tiers by days-since-last-open: active (0-90), cold (90-180), lapsed (180+), each with a distinct send action.",
          question:
            "Given a 12-subscriber export with last-open dates, which subscribers fall into each of the three tiers, and what does each tier receive?",
          toolName: "Google Sheets",
          where:
            "Import the subscriber export, add a 'days since last open' column, then a 'segment' column.",
          procedure: [
            "Calculate days-since-last-open for all 12 rows against today's date",
            "Bucket each row into active (0-90), cold (90-180), or lapsed (180+)",
            "Assign the send action per tier: full calendar, re-engagement sequence, or win-back then suppression",
          ],
          outputSample:
            "SEGMENT ASSIGNMENT (12 subscribers)\nACTIVE (5): opened within 90 days -> full promotional calendar\nCOLD (4): 90-180 days -> 3-email re-engagement sequence\nLAPSED (3): 180+ days -> win-back campaign, then suppress if no response",
          healthy:
            "All 12 rows land in exactly one tier with a matching send action, no subscriber left unassigned.",
          unhealthy:
            "Subscribers get bucketed by list join date instead of last-open date, or the tier boundaries don't match the 90/180-day cutoffs.",
          interpret:
            "The scheme is only useful if the cutoffs are behavioral (last open), not static (join date).",
          soWhat: [
            {
              symptom: "Every subscriber gets the same weekly promotional email regardless of engagement",
              action: "Ship the three-tier segment split before the next campaign send",
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
            role: "Calculate days-since-last-open and assign tiers",
            why: "Free, no account friction, works from a plain CSV export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Build the same three tiers as live, auto-updating segments",
            why: "Automates the day-count so subscribers move between tiers without manual re-export",
            required: false,
            fallback: "Google Sheets recalculated on a recurring schedule covers the exercise",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A segment-assignment sheet mapping all 12 subscribers to active/cold/lapsed with the correct send action per tier.",
      sampleOutput:
        "Casper Sleep engagement segments (excerpt)\n\nACTIVE (opened 40 days ago): full calendar\nCOLD (opened 142 days ago): re-engagement sequence\nLAPSED (opened 210 days ago): win-back, then suppress",
      successCriteria: [
        "Correctly buckets all 12 rows using days-since-last-open, not join date",
        "Assigns the correct send action to each tier",
        "Flags at least one lapsed subscriber for suppression",
      ],
      portfolioReady: true,
    },
    {
      id: "segmentation-plan-audit",
      tier: "mini",
      archetype: "audit",
      title: "Find the Flaw: Auditing a Proposed Segmentation Plan",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a written 14-segment plan for a company's next quarter, apply the lesson's segment-quality tests to find which segments should be killed, merged, or fixed.",
      companyId: "casper-sleep",
      scenario:
        "You're a lifecycle marketer at Casper Sleep reviewing a proposed 14-segment plan before it ships to the whole list.",
      brief:
        "Score each proposed segment against the lesson's tests for size, stability, and actionability, and recommend which to kill, merge, or keep.",
      mode: "diagnostic",
      conceptsCovered: [
        "Good segments are large, stable, and actionable",
        "Over-segmenting into tiny lists",
        "Building static segments instead of behavior-based rules",
      ],
      steps: [
        {
          stepId: "step-1-segment-quality-test",
          concept: "Good segments are large, stable, and actionable",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson requires every segment to be large enough for meaningful data (a few hundred-plus subscribers), stable across multiple campaigns, and actionable with genuinely different copy.",
          question:
            "The plan includes a segment of 40 subscribers ('bought a pillow AND a topper AND left a 5-star review') alongside a static 'joined before 2023' segment. What's wrong with each?",
          toolName: "Google Sheets",
          where:
            "List all 14 proposed segments in a sheet with columns for size, stability, and actionability.",
          procedure: [
            "List each of the 14 segments with its subscriber count",
            "Mark segments under a few hundred subscribers as 'too small, merge or kill'",
            "Mark any segment defined by a fixed join date instead of ongoing behavior as 'static, needs a behavioral rule'",
          ],
          outputSample:
            "SEGMENT AUDIT (14 proposed, excerpt)\n\nKILL: 'pillow + topper + 5-star review' (40 subscribers, too small for meaningful data)\nFIX: 'joined before 2023' (static date, replace with 'no purchase in 18 months')\nKEEP: 'active in past 90 days' (2,400 subscribers, behavioral, actionable)",
          healthy:
            "Each surviving segment clears a few hundred subscribers, uses a rule that updates automatically, and has a genuinely different message planned.",
          unhealthy:
            "Segments stay in the plan purely because they sound precise, even at 40 subscribers or a frozen join date.",
          interpret:
            "Precision-sounding segments that fail the size or stability test cost more in campaign overhead than they return in relevance.",
          soWhat: [
            {
              symptom: "14 micro-segments planned for one send cycle",
              action: "Cut to the 3-5 segments that pass all three quality tests before building any campaigns",
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
            role: "Score each proposed segment against the size/stability/actionability tests",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mailchimp",
            role: "Check real segment sizes and whether each rule auto-updates on behavior",
            why: "Confirms which proposed segments are actually static tags versus live behavioral rules",
            required: false,
            fallback: "Google Sheets scoring alone is enough to complete the exercise",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "An audit table scoring all 14 proposed segments as kill/merge/fix/keep with the reason.",
      sampleOutput:
        "Lenskart Q3 segment audit (excerpt)\n\nKILL: 'bought blue-light glasses in March' (85 subscribers)\nFIX: 'newsletter subscriber since 2022' -> replace with 'no click in 6 months'\nKEEP: 'cart abandoners, past 30 days' (610 subscribers, behavioral)",
      successCriteria: [
        "Flags the 40-subscriber segment as too small",
        "Flags the static join-date segment as needing a behavioral rule",
        "Recommends a final segment count in the 3-5 range consistent with the lesson",
      ],
      portfolioReady: true,
    },
  ],

  "abandon-cart": [
    {
      id: "abandon-cart-sequence-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Find the Leaks: Teardown of a Broken Cart-Recovery Sequence",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 3-email cart-recovery sequence for Chewy, find every defect that violates the lesson's timing, discount, and personalization rules, and separate real defects from plausible-looking non-issues.",
      companyId: "chewy",
      scenario:
        "You're a contractor auditing Chewy's Autoship cart-recovery flow before a subscription push. The existing sequence was built two years ago and nobody has touched it since.",
      brief:
        "Read all three emails in the specimen sequence, flag every rule violation against the lesson's timing and discount-sequencing framework, and don't flag the two lines that are actually correct.",
      mode: "teardown",
      conceptsCovered: [
        "No discount in Email 1 or Email 2",
        "Email 1 sent within 30-60 minutes",
        "Dynamic product blocks with live cart contents",
        "Real scarcity only, never fabricated",
      ],
      teardownItems: [
        {
          itemId: "chewy-cart-sequence-v1",
          specimen:
            "EMAIL 1 (sent 5 days after cart abandonment)\nSubject: \"Don't miss out!!!\"\nBody: \"Hi there! We noticed you left something behind. Use code SAVE15 for 15% off your order today only!\"\n[No product image, no item name, no price shown]\n\nEMAIL 2 (sent 6 days after abandonment, 24 hrs after Email 1)\nSubject: \"Still deciding?\"\nBody: \"Thousands of pet parents trust us. Check out our 4.8-star reviews! Free shipping on orders over $49.\"\n[Includes a photo carousel of 3 customer review screenshots]\n\nEMAIL 3 (sent 9 days after abandonment)\nSubject: \"ONLY 2 LEFT IN STOCK, ACT NOW!!!\"\nBody: \"This item is almost gone. Grab it before it's too late. Extra 10% off with code LASTCHANCE, expires in 24 hours.\"\n[Inventory system shows 340 units in stock for this SKU]",
          specimenSource: "synthetic-realistic",
          prompt:
            "List every defect in this sequence against the lesson's rules on timing, discount sequencing, product data, and scarcity claims. Rate each by severity and note what a healthy version would do instead.",
          answerKey: [
            {
              defect: "Email 1 sends 5 days after abandonment, not 30-60 minutes",
              severity: "critical",
              whyItMatters:
                "The lesson's own flow states every hour of delay costs conversions; 5 days is well past the window when a reminder still works because the shopper was 'genuinely distracted.'",
              lessonRef: "Email 1: The Reminder (30-60 minutes after abandonment)",
              owner: "developer",
            },
            {
              defect: "Email 1 offers a 15% discount immediately",
              severity: "critical",
              whyItMatters:
                "The lesson warns that leading with a discount trains shoppers to abandon carts on purpose to collect coupons, and recovers about the same volume at 10-15% lower margin.",
              lessonRef: "Do not offer a discount in Email 1 or Email 2",
              owner: "you",
            },
            {
              defect: "Email 1 shows no product image, item name, or price",
              severity: "critical",
              whyItMatters:
                "A static email without the cart contents converts far worse; dynamic product blocks pulling live catalog data are required.",
              lessonRef: "Dynamic product blocks",
              owner: "developer",
            },
            {
              defect: "Email 3 claims 'Only 2 left' while inventory shows 340 units",
              severity: "critical",
              whyItMatters:
                "Fabricated scarcity is explicitly called out as a rule violation, only claim low stock if it is true; getting caught erodes trust in every future urgency message.",
              lessonRef: "Create real scarcity, only say this if it is true",
              owner: "you",
            },
          ],
          distractors: [
            "Email 2 includes customer review screenshots and a free shipping mention",
            "Email 2 is sent 24 hours after Email 1",
            "Email 3 includes a time-limited 10% discount code",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Klaviyo",
            role: "Read the live flow structure and timing rules to compare against the specimen",
            why: "Free tier includes the flow builder view needed to check send-delay logic",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each defect, its severity, and its fix",
            why: "Free, no account friction, easy to share as a deliverable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Rebuild the corrected sequence with live send-delay and suppression logic",
            why: "Paid plans unlock multi-branch flow logic beyond the free tier's basic triggers",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A defect log (spreadsheet) listing each flaw found, its severity, the lesson rule it violates, and the one-line fix, plus a note on which two flagged items were actually correct.",
      sampleOutput:
        "Rent the Runway cart sequence audit (excerpt)\n\nCRITICAL: Email 1 sent 4 days late -> move to 45-min trigger\nCRITICAL: Email 1 leads with 20% off -> remove discount, add product image\nMODERATE: Email 3 scarcity claim unverified -> pull live inventory count before sending\nCORRECT (not a defect): Email 2 review carousel + free shipping mention",
      successCriteria: [
        "Flags all 4 critical defects with the correct lesson reference",
        "Does not flag either of the 2 correct (non-defect) sequence elements",
        "Assigns a severity to each defect found",
      ],
      portfolioReady: false,
    },
    {
      id: "abandon-cart-3-email-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build ThredUp's 3-Email Cart-Recovery Sequence From Scratch",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Write a complete, correctly-timed 3-email cart-recovery sequence for a ThredUp secondhand-apparel cart abandonment, applying the lesson's discount-sequencing and objection-handling rules to each email.",
      companyId: "thredup",
      scenario:
        "ThredUp's cart abandonment flow is being rebuilt for a new resale-apparel category. You've been asked to write the copy and timing for all three emails before it goes to the dev team for ESP setup.",
      brief:
        "A shopper abandoned a cart containing one $38 secondhand designer handbag. Write Email 1, 2, and 3 with correct timing, correct discount sequencing, and product-specific objection handling.",
      mode: "build",
      conceptsCovered: [
        "Email 1: The Reminder (30-60 minutes after abandonment)",
        "Email 2: Social Proof and Objection Handling (22-24 hours later)",
        "Email 3: Urgency or Incentive (48-72 hours later)",
      ],
      steps: [
        {
          stepId: "step-1-email-1-reminder",
          concept: "Email 1: The Reminder (30-60 minutes after abandonment)",
          lessonAnchor: "email-1-the-reminder-30-60-minutes-after-abandonment",
          theoryRecap:
            "Email 1 fires 30-60 minutes after abandonment, shows the exact item with image, name, and price, keeps copy to 2-3 sentences, and never includes a discount.",
          question:
            "The shopper abandoned a $38 secondhand designer handbag 45 minutes ago. Write the subject line and body for Email 1.",
          toolName: "Klaviyo",
          where: "Klaviyo email builder, cart-abandonment flow, first email block",
          procedure: [
            "Pull the exact abandoned item (name, image, price) into a dynamic product block",
            "Write a subject line under 6 words with no discount language",
            "Keep the body to 2-3 sentences with a single 'Return to cart' CTA",
          ],
          outputSample:
            "Subject: \"Still thinking it over?\"\nBody: \"Your [Designer Bag Name], $38, is still in your cart. It won't be there forever, resale pieces move fast.\"\n[Return to cart button]",
          healthy:
            "A short, specific reminder naming the exact item and price with zero discount pressure.",
          unhealthy:
            "A generic 'you forgot something' email with no product data, or one that opens with a coupon code.",
          interpret:
            "First-time abandoners are usually just distracted, a plain reminder recovers this group without giving away margin.",
          soWhat: [
            {
              symptom: "Email 1 has no product image or price",
              action: "Add a dynamic product block pulling live cart data",
              effort: "dev ticket",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-email-2-objection-handling",
          concept: "Email 2: Social Proof and Objection Handling (22-24 hours later)",
          lessonAnchor: "email-2-social-proof-and-objection-handling-22-24-hours-later",
          theoryRecap:
            "Email 2 arrives 22-24 hours later, reinforces the decision with reviews or ratings, and addresses the top objection for the product category. Still no percentage discount.",
          question:
            "Secondhand apparel buyers' top objection is item condition and authenticity. Write Email 2 addressing that objection with social proof.",
          toolName: "Klaviyo",
          where: "Klaviyo email builder, second flow email, 24-hour delay",
          procedure: [
            "Add a star-rating or review snippet specific to the item or category",
            "Address the condition/authenticity objection directly in one sentence",
            "Offer free shipping only if operationally possible, no percentage discount",
          ],
          outputSample:
            "Subject: \"4.7 stars from resale shoppers like you\"\nBody: \"Every piece is inspected and authenticated before it ships. Here's what buyers say about condition: '[review snippet]'. Free shipping if you check out today.\"",
          healthy:
            "Reviews plus a direct answer to the category's real objection, no coupon code.",
          unhealthy:
            "A generic 'thousands trust us' line with no product-specific objection handling.",
          interpret:
            "Knowing why shoppers abandon (Baymard's top-5 list) tells you exactly what objection to address here.",
          soWhat: [
            {
              symptom: "Email 2 has no category-specific objection handling",
              action: "Add one sentence naming the top objection (condition/authenticity) and answering it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-email-3-urgency",
          concept: "Email 3: Urgency or Incentive (48-72 hours later)",
          lessonAnchor: "email-3-urgency-or-incentive-48-72-hours-later",
          theoryRecap:
            "Email 3 is the final attempt, 48-72 hours later, with real scarcity or a one-time, explicitly time-limited incentive of 10-15% off or free expedited shipping.",
          question:
            "This is the final recovery attempt. Write Email 3 with a genuine, time-limited incentive.",
          toolName: "Klaviyo",
          where: "Klaviyo email builder, third flow email, 72-hour delay",
          procedure: [
            "Check live inventory before making any scarcity claim",
            "Offer one-time 10-15% off or free expedited shipping, expiring in 24 hours",
            "State the expiration explicitly in both subject and body",
          ],
          outputSample:
            "Subject: \"Last call: your bag, 15% off for 24 hours\"\nBody: \"This is the final reminder for your [Designer Bag Name]. Use code LAST15 in the next 24 hours, after that we can't hold the price.\"",
          healthy: "A single, explicit, time-boxed incentive with a real deadline.",
          unhealthy: "Vague 'act now' urgency with no real deadline or an unverified low-stock claim.",
          interpret:
            "This is the only email in the sequence allowed to carry a discount, holding it until here protects margin on the first two attempts.",
          soWhat: [
            {
              symptom: "Email 3's discount has no stated expiration",
              action: "Add an explicit 24-hour deadline to both subject line and body copy",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Klaviyo",
            role: "Build and time all three emails inside a cart-abandonment flow",
            why: "Free tier supports up to 3-email flows with delay logic",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Draft and version the copy before loading it into the ESP",
            why: "Free, easy to share with a reviewer before build",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Add suppression logic so the sequence cancels the moment the shopper purchases",
            why: "Advanced suppression and branching logic requires a paid Klaviyo plan",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote: "Free tier can time-delay emails but branching suppression logic needs a paid plan.",
      },
      deliverable:
        "A complete 3-email sequence script (subject lines, body copy, and send-delay timing) ready to hand to a developer for ESP flow setup.",
      sampleOutput:
        "Chewy cart-recovery sequence (excerpt)\n\nEmail 1 (45 min): \"Your cart's getting lonely\" - dog bed + price, no discount\nEmail 2 (24 hrs): \"Why pet parents choose us\" - reviews + free shipping over $49\nEmail 3 (72 hrs): \"10% off, gone in 24 hours\" - explicit deadline, real stock count",
      successCriteria: [
        "Email 1 has zero discount language and shows the exact item",
        "Email 2 addresses a category-specific objection with social proof",
        "Email 3's incentive has an explicit, stated deadline",
      ],
      portfolioReady: true,
      stretch:
        "Add a fourth email for the browse-abandonment version of this same product, adjusting the tone to be lower-pressure per the lesson's browse abandonment section.",
    },
  ],
  "subject-lines": [
    {
      id: "subject-line-teardown-six-formulas",
      tier: "mini",
      archetype: "teardown",
      title: "Which of These 5 Subject Lines Would Get Reported as Spam?",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 5 candidate subject lines drafted for a Rent the Runway sale campaign, identify which violate the lesson's rules on capitalization, fake urgency, and stacked spam-trigger words, without flagging the ones that are actually fine.",
      companyId: "rent-the-runway",
      scenario:
        "You're reviewing a batch of subject lines a junior copywriter drafted for Rent the Runway's end-of-season sale before they go into an A/B test.",
      brief:
        "Score each candidate against the lesson's 6 formulas and the capitalization/urgency/spam-trigger rules. Two of the five are fine as written.",
      mode: "teardown",
      conceptsCovered: [
        "Never fake urgency",
        "ALL CAPS lowers open rates",
        "Spam trigger words stacked together",
        "The Question formula",
      ],
      teardownItems: [
        {
          itemId: "rtr-subject-line-batch",
          specimen:
            "A. \"LAST CHANCE!!! FREE GUARANTEED GIFT, ACT NOW!!!\"\nB. \"Still deciding on the dress?\"\nC. \"Sale ends tonight, again\" (same sale email sent 4 nights in a row with this exact subject)\nD. \"5 rental picks for your next event\"\nE. \"Your rental, 20% off for 24 hours\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Flag every subject line that violates a rule from the lesson. For each flagged line, name the rule it breaks. Leave the correct ones unflagged.",
          answerKey: [
            {
              defect:
                "A stacks ALL CAPS with multiple spam-trigger words (FREE, GUARANTEED, ACT NOW) and three exclamation points",
              severity: "critical",
              whyItMatters:
                "ALL CAPS triggered the lowest open rates (30%) in the 2024 Belkins study, and stacking multiple spam-trigger words raises the probability of a spam filter flag.",
              lessonRef: "Length, Emoji, and Capitalization / Mistake 2",
              owner: "you",
            },
            {
              defect: "C repeats 'ends tonight' across 4 consecutive nights for the same sale",
              severity: "critical",
              whyItMatters:
                "This is exactly the fake-urgency pattern the lesson warns against, subscribers exposed to false scarcity show lower open rates on future sends from the same brand.",
              lessonRef: "Never fake urgency",
              owner: "you",
            },
          ],
          distractors: [
            "B is a Question-formula line",
            "D leads with a number",
            "E states a specific, real 24-hour deadline",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each subject line against the rule checklist",
            why: "Free, simple table for tracking which rule each line passes or fails",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored table of all 5 subject lines, flagging the 2 real violations with the specific rule broken, and confirming the 3 that pass.",
      sampleOutput:
        "Allbirds subject line review (excerpt)\n\nFLAGGED: \"BUY NOW, LIMITED TIME, ACT FAST!!!\" -> ALL CAPS + stacked triggers\nPASS: \"Your Wool Runners are back in stock\" -> direct benefit, sentence case",
      successCriteria: [
        "Correctly flags both A and C with the specific rule each breaks",
        "Does not flag B, D, or E",
      ],
      portfolioReady: false,
    },
    {
      id: "subject-line-ab-test-data-audit",
      tier: "mini",
      archetype: "audit",
      title: "Read the Test Results: Picking Allbirds' Next Subject Line Hypothesis",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given real-shaped A/B test results from two completed subject line tests, apply the lesson's one-variable-at-a-time rule to declare a winner and design the next hypothesis correctly.",
      companyId: "allbirds",
      scenario:
        "You're the email marketer at Allbirds reviewing last month's subject line tests before planning next month's test calendar.",
      brief:
        "Two tests ran last month. Decide which one is trustworthy, declare the winner where valid, and write the next hypothesis to test.",
      mode: "diagnostic",
      conceptsCovered: [
        "Test one variable at a time",
        "A/B testing rhythm and sample split",
      ],
      steps: [
        {
          stepId: "step-1-read-test-results",
          concept: "Test one variable at a time",
          lessonAnchor: "how-to-ab-test-subject-lines",
          theoryRecap:
            "A valid A/B test changes exactly one variable between version A and B. Changing wording and length together makes the result impossible to attribute.",
          question:
            "Test 1: A = 'Your shoes are back in stock' (35% open) vs B = 'Restocked: the shoe everyone's been asking about, get yours today' (38% open). Test 2: A = 'New arrivals' (29% open) vs B = 'What's new?' (41% open). Which test result can you actually trust, and why?",
          toolName: "Mailchimp",
          where: "Mailchimp campaign reports, A/B test results tab",
          procedure: [
            "Check whether each test changed exactly one variable",
            "Note that Test 1 changed both wording and length at once, its result cannot be attributed to either change alone",
            "Confirm Test 2 changed only the format (statement vs. question) with matching length, making its winner trustworthy",
          ],
          outputSample:
            "Test 1: INVALID (confounded: wording + length both changed)\nTest 2: VALID (single variable: statement vs. question) -> Question wins, 41% vs 29%",
          healthy: "A test where only one variable changed between A and B.",
          unhealthy: "Declaring a winner from a test that changed wording and length simultaneously.",
          interpret:
            "Test 1's 3-point lift could be from the extra detail, the length, or both, there is no way to know which.",
          soWhat: [
            {
              symptom: "A test changed two variables at once",
              action: "Discard the result and rerun with only one variable different",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-design-next-hypothesis",
          concept: "A/B testing rhythm and sample split",
          lessonAnchor: "how-to-ab-test-subject-lines",
          theoryRecap:
            "A simple testing rhythm: pick one hypothesis, write A and B identical except for that one variable, split 45/45/10, wait 4 hours, send the winner to the held-back 10%.",
          question:
            "Using Test 2's confirmed result (questions beat statements), write the next single-variable hypothesis and test pair to run.",
          toolName: "Mailchimp",
          where: "Mailchimp campaign builder, new A/B test setup",
          procedure: [
            "Write a hypothesis that builds on the confirmed finding without introducing a second variable",
            "Draft version A and B identical except for that one new variable",
            "Set the split to 45% A / 45% B / 10% held back for the winner send",
          ],
          outputSample:
            "Hypothesis: \"Personalized questions outperform generic questions.\"\nA: \"What's new?\"\nB: \"Surya, what's new for you?\"\nSplit: 45/45/10, check at 4 hours",
          healthy: "A hypothesis that changes exactly one new variable from the last confirmed win.",
          unhealthy: "A hypothesis that also changes length or adds an emoji at the same time.",
          interpret:
            "Building tests sequentially on confirmed single-variable wins is how a real swipe file of audience-specific patterns gets built over 10+ tests.",
          soWhat: [
            {
              symptom: "The next test changes personalization and adds an emoji together",
              action: "Split into two separate sequential tests",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Mailchimp",
            role: "Read A/B test reports and set up the next test's split",
            why: "Free tier includes built-in A/B testing for subject lines",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each test's hypothesis, variable, and winner as a swipe file",
            why: "Free, matches the lesson's recommended tracking spreadsheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written verdict on both tests (trustworthy or confounded) plus a properly single-variable hypothesis and A/B pair for the next test.",
      sampleOutput:
        "ThredUp test log (excerpt)\n\nTest 4: A 'Free shipping today' vs B 'Free shipping, today only' -> CONFOUNDED (added urgency + changed length)\nTest 5: A 'New drops' vs B 'New drops just for you' -> VALID (personalization only), B wins 44% vs 33%",
      successCriteria: [
        "Correctly identifies Test 1 as confounded and Test 2 as valid",
        "Next hypothesis changes exactly one variable from the confirmed win",
        "Split proposed matches the lesson's 45/45/10 rhythm",
      ],
      portfolioReady: true,
    },
  ],

  "email-copywriting": [
    {
      id: "email-copywriting-four-defects-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Four Defects, One Draft: Tearing Down a Broken Promo Email",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given four separate pieces of a synthetic-but-realistic promotional email (subject line, preview text, opening line, and body/CTA block), find the specific copywriting defect in each one using the lesson's own rules, not a general impression that 'this feels off.'",
      companyId: "zendesk",
      scenario:
        "You're the newest hire on Zendesk's lifecycle email team. Your manager hands you a draft of a promotional email for a new support-ticket automation feature, already scheduled to send tomorrow, and asks you to red-pen it before it goes out.",
      brief:
        "Each piece below has exactly one primary defect the lesson already named. Diagnose it, then say what the fixed version should do instead.",
      mode: "teardown",
      conceptsCovered: [
        "Subject Line Specificity and Spam Triggers",
        "Preview Text as a Second Subject Line",
        "Opening Line Relevance",
        "Single CTA and Decision Paralysis",
      ],
      teardownItems: [
        {
          itemId: "item-1-subject-line",
          specimen: 'Subject line: "You NEED to see this NOW!!! Don\'t miss out"',
          specimenSource: "synthetic-realistic",
          prompt:
            "This subject line is scheduled to send to 40,000 support-team subscribers. What's wrong with it, and what would the lesson's rules have you write instead?",
          answerKey: [
            {
              defect:
                "Vague, clickbait phrasing ('you NEED to see this') with no indication of what the email is actually about",
              severity: "critical",
              whyItMatters:
                "The lesson's rule is specificity beats cleverness: 'Google updated its ranking algorithm 8 times' outperforms 'You need to see this.' A reader can't decide to open something they can't picture.",
              lessonRef: "layer-1-the-subject-line",
              owner: "you",
            },
            {
              defect: "ALL-CAPS words and multiple exclamation points",
              severity: "critical",
              whyItMatters:
                "The lesson's spam-trigger warning flags excessive punctuation and all-caps as behavior that trains Gmail/Outlook spam filters to route the email to junk, on top of reading as shouting to human readers.",
              lessonRef: "layer-1-the-subject-line",
              owner: "you",
            },
          ],
          distractors: [
            "The subject line is too short to be effective",
            "The subject line doesn't include the recipient's first name",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-preview-text",
          specimen: 'Preview text field: left blank (auto-fills as "View this email in your browser")',
          specimenSource: "synthetic-realistic",
          prompt:
            "The preview text field was left empty. What defect does that create, and what should go there instead?",
          answerKey: [
            {
              defect:
                "An empty preview field lets the email client auto-fill boilerplate text instead of a second hook",
              severity: "moderate",
              whyItMatters:
                "The lesson treats preview text as a second subject line that extends the hook before a single word of body copy is read. A wasted preview line is a wasted second chance to earn the open.",
              lessonRef: "layer-2-preview-text",
              owner: "you",
            },
          ],
          distractors: [
            "The preview text is too long and will get cut off on mobile",
            "The preview text repeats the subject line word for word",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-opening-line",
          specimen:
            'Opening line: "Hi there, we hope this email finds you well. We wanted to reach out to share some exciting news about our latest platform update."',
          specimenSource: "synthetic-realistic",
          prompt: "What's wrong with this opening line specifically?",
          answerKey: [
            {
              defect:
                "Generic filler ('I hope this finds you well') and company-centered framing ('we wanted to reach out') instead of confirming relevance to the reader immediately",
              severity: "moderate",
              whyItMatters:
                "The lesson's Layer 3 rule is that the opening line has one job: confirm opening the email was the right decision. Its own weak/strong comparison shows exactly this filler losing to a value-first opener.",
              lessonRef: "layer-4-body-copy",
              owner: "you",
            },
          ],
          distractors: [
            "The opening line is grammatically incorrect",
            "The opening line is too short",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-4-body-and-cta",
          specimen:
            "Body: a single 6-sentence paragraph describing the feature, followed by two buttons: \"Learn More\" and \"Get Started Today\"",
          specimenSource: "synthetic-realistic",
          prompt: "Name both defects in this block, they're different problems.",
          answerKey: [
            {
              defect: "A dense 6-sentence paragraph instead of short paragraphs or bullet points",
              severity: "moderate",
              whyItMatters:
                "The lesson's body-copy rule caps paragraphs at 2-3 sentences because readers scan rather than read; dense blocks signal effort and get skipped.",
              lessonRef: "layer-4-body-copy",
              owner: "you",
            },
            {
              defect: "Two competing CTA buttons instead of one",
              severity: "critical",
              whyItMatters:
                "The lesson calls this decision paralysis: every extra button reduces the chance readers click any of them. One email, one action.",
              lessonRef: "the-call-to-action",
              owner: "you",
            },
          ],
          distractors: [
            "The CTA button text uses an action verb, which the lesson says is wrong",
            "The email doesn't mention the company name enough times",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect found against its lesson rule as you work through the four specimens",
            why: "Free, no account friction, easy to hand back to a manager as a review doc",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A four-row defect log (one row per specimen) naming the defect, its severity, and the one-sentence fix.",
      sampleOutput:
        "Mailchimp internal review log (excerpt)\n\nSUBJECT LINE - critical\n  Defect: clickbait + spam-trigger punctuation\n  Fix: 'Automate your first 10 support tickets in 5 minutes'\n\nBODY/CTA - critical\n  Defect: two competing buttons\n  Fix: keep 'Start my free trial', cut 'Learn More' entirely",
      successCriteria: [
        "Correctly names the primary defect in all four specimens",
        "Does not select a distractor as a real defect",
        "Ties each defect back to the specific lesson rule it violates",
      ],
      portfolioReady: false,
    },
    {
      id: "email-copywriting-lapsed-buyer-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Write the Whole Email: A Re-Engagement Send From Scratch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a real segment scenario, write a complete promotional email, subject line, preview text, AIDA-structured body, and single CTA, applying every rule from the lesson in sequence rather than in isolation.",
      companyId: "bonobos",
      scenario:
        "Bonobos is running a summer re-engagement campaign targeting customers who bought once 90+ days ago and haven't opened an email since. You've been given the offer (20% off, this weekend only) and the segment. You write the email.",
      brief:
        "Build the email layer by layer: subject, preview, then AIDA body, then one CTA. Each layer has to earn the next one.",
      mode: "build",
      conceptsCovered: [
        "Specificity and Personalization in Subject Lines",
        "Preview Text as a Hook Extension",
        "AIDA Body Structure",
        "Single, Personalized CTA",
      ],
      steps: [
        {
          stepId: "step-1-subject-line",
          concept: "Specificity and Personalization in Subject Lines",
          lessonAnchor: "layer-1-the-subject-line",
          theoryRecap:
            "The lesson's Layer 1 rules: specificity beats cleverness, personalization lifts opens and clicks, and 61-70 characters (under 32 on mobile) gets the best open rates.",
          question:
            "This subscriber hasn't bought since a single order 94 days ago. Write a subject line that's specific to the offer and would survive a 32-character mobile cutoff.",
          toolName: "Mailchimp",
          where: "Mailchimp's subject line field, with the mobile-preview character counter turned on",
          procedure: [
            "Name the concrete offer (20% off) in the subject line itself, not a vague teaser",
            "Keep the first 32 characters meaningful on their own, since that's where iPhone cuts off",
            "Avoid ALL-CAPS and exclamation-heavy punctuation that trips spam filters",
          ],
          outputSample:
            "Draft: \"20% off, this weekend only\" (27 characters, survives mobile cutoff intact)",
          healthy: "A subject line under 70 characters that states the specific offer plainly",
          unhealthy: "A vague teaser like \"We miss you!\" that gives no reason to open",
          interpret:
            "A specific, short subject line lets the mobile-cut version still make sense on its own.",
          soWhat: [
            {
              symptom: "Draft subject line reads as generic (\"Come back!\")",
              action: "Rewrite to name the concrete offer and the time window",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-preview-text",
          concept: "Preview Text as a Hook Extension",
          lessonAnchor: "layer-2-preview-text",
          theoryRecap:
            "The lesson treats preview text as a second subject line, 85-100 characters, that extends the hook before the body loads.",
          question:
            "Write preview text that adds new information the subject line didn't already say.",
          toolName: "Mailchimp",
          where: "Mailchimp's preview text field, character count visible",
          procedure: [
            "Do not repeat the subject line",
            "Add the piece of information that makes the offer feel real (e.g. the exact discount code or the expiry)",
            "Keep it under 100 characters",
          ],
          outputSample:
            "Draft: \"Use code WEEKEND20 at checkout, ends Sunday at midnight.\" (58 characters)",
          healthy: "Preview text that adds a new detail (code, deadline) not already in the subject",
          unhealthy: "Preview text that just repeats the subject line in different words",
          interpret: "Subject and preview should read as two lines of the same pitch, not duplicates.",
          soWhat: [
            {
              symptom: "Preview text restates the subject line",
              action: "Replace it with a concrete detail: the code, the deadline, or the exact saving",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-aida-body",
          concept: "AIDA Body Structure",
          lessonAnchor: "layer-4-body-copy",
          theoryRecap:
            "The lesson's body-copy rule: Attention (subject/opener), Interest (a problem the reader recognizes), Desire (proof it works), Action (one CTA). Paragraphs stay 2-3 sentences.",
          question:
            "Write the body in four short beats: a relevant opener, the interest hook (why now), the desire proof (a stat or reason to trust the offer), and a lead-in to the CTA.",
          toolName: "Mailchimp",
          where: "Mailchimp's email body editor, plain-text-first draft",
          procedure: [
            "Open with something specific to a lapsed 90-day buyer, not \"we hope this finds you well\"",
            "State the interest hook: the weekend-only window creates urgency",
            "Add one proof point (e.g. a bestseller detail) instead of a generic claim",
            "Keep each paragraph to 2-3 sentences",
          ],
          outputSample:
            "\"It's been a minute. Your last order (the Riviera shirt) is still one of our best-rated pieces this year.\\n\\nThis weekend only, take 20% off anything in the shop with code WEEKEND20.\"",
          healthy: "Two short paragraphs, each doing one AIDA job, reader-focused language throughout",
          unhealthy: "One long paragraph mixing company announcements with the offer",
          interpret: "Short, sequenced paragraphs let a scanning reader absorb the whole pitch in seconds.",
          soWhat: [
            {
              symptom: "Draft body runs past 3 sentences per paragraph",
              action: "Split into AIDA beats: interest, then desire, each as its own short paragraph",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-single-cta",
          concept: "Single, Personalized CTA",
          lessonAnchor: "the-call-to-action",
          theoryRecap:
            "The lesson's CTA rules: one action per email, action verbs, first person converts better (\"Start my trial\" over \"Start your trial\"), personalized CTAs convert 202% better than generic ones.",
          question: "Write one CTA button, first person, tied to this specific offer.",
          toolName: "Mailchimp",
          where: "Mailchimp's button block, one button only",
          procedure: [
            "Delete any second button or link you were tempted to add",
            "Use an action verb specific to the offer, not \"Learn More\"",
            "Write it in first person",
          ],
          outputSample: "Button text: \"Get my 20% off\"",
          healthy: "One button, first person, names the specific benefit",
          unhealthy: "Two buttons (\"Shop Now\" and \"Learn More\") splitting attention",
          interpret: "A single, specific, first-person CTA is the only ask the email makes.",
          soWhat: [
            {
              symptom: "Draft has a second \"just in case\" link in the footer",
              action: "Remove it; if there's a second message, send it as a separate email",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Mailchimp",
            role: "Draft the subject line, preview text, body, and CTA button in one email builder",
            why: "Free plan supports full email drafting and a mobile preview panel",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Draft the same email with ecommerce-specific merge tags (last purchase, days since order)",
            why: "Useful once the segment logic needs real purchase-history personalization",
            required: false,
            fallback: "Mailchimp's merge tags cover first-name personalization on the free plan",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete email draft: subject line, preview text, two-paragraph AIDA body, and one CTA button, all written for the 90-day lapsed-buyer segment.",
      sampleOutput:
        "Zendesk internal re-engagement template (reference structure)\n\nSubject: \"20% off, this weekend only\"\nPreview: \"Use code WEEKEND20 at checkout, ends Sunday at midnight.\"\nBody: \"It's been a minute...\" / \"This weekend only...\"\nCTA: \"Get my 20% off\"",
      successCriteria: [
        "Subject line names the specific offer and survives a 32-character mobile cutoff",
        "Preview text adds new information rather than repeating the subject line",
        "Body follows the AIDA sequence with paragraphs under 4 sentences",
        "Exactly one CTA, written in first person with an action verb",
      ],
      portfolioReady: true,
      stretch:
        "Write a second version of the subject line and preview text for an A/B test, applying the ab-testing-email lesson's one-variable-at-a-time rule.",
    },
  ],
  "ab-testing-email": [
    {
      id: "ab-testing-email-results-table-diagnostic",
      tier: "mini",
      archetype: "audit",
      title: "Call the Winner: Reading a Real Subject Line Test",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a real subject-line A/B test results table, apply the lesson's sample-size and confidence rules to decide whether the result is trustworthy enough to act on.",
      companyId: "zendesk",
      scenario:
        "You run lifecycle email at Zendesk. A subject-line test on last week's product-update send just finished, and your manager wants a one-line verdict before the next campaign, not a guess.",
      brief:
        "Apply the lesson's practical minimums, not intuition, and say whether this result clears the bar to act on.",
      mode: "diagnostic",
      conceptsCovered: ["Sample Size and Statistical Significance"],
      steps: [
        {
          stepId: "step-1-sample-size-check",
          concept: "Sample Size and Statistical Significance",
          lessonAnchor: "sample-size-the-rule-that-kills-most-tests",
          theoryRecap:
            "The lesson's practical minimums: at least 1,000 subscribers per variant with 200-300 opens per variant to be a minimum viable test, 10,000+ per variant for a reliable, high-confidence test. Wait a minimum of 48-72 hours before declaring a winner (Litmus recommendation cited in the lesson).",
          question:
            "Version A: 5,200 sent, 1,340 opens (25.8%). Version B: 5,150 sent, 1,410 opens (27.4%), test ran for 30 hours. Does this clear the bar to declare a winner today?",
          toolName: "Mailchimp",
          where: "Mailchimp's A/B test results dashboard, showing sends, opens, and open rate per variant",
          procedure: [
            "Check opens per variant against the 200-300 minimum: both variants have well over 1,300 opens each",
            "Check subscribers per variant against the 1,000 minimum-viable and 10,000 reliable-test thresholds",
            "Check elapsed time against the lesson's 48-72 hour minimum wait",
          ],
          outputSample:
            "Version A: 5,200 sent / 1,340 opens (25.8%)\nVersion B: 5,150 sent / 1,410 opens (27.4%)\nElapsed: 30 hours",
          healthy:
            "Opens per variant clear the 200-300 minimum by a wide margin, and per-variant volume clears the 1,000-subscriber minimum-viable threshold",
          unhealthy:
            "Elapsed time (30 hours) falls short of the lesson's 48-72 hour minimum wait before declaring a winner",
          interpret:
            "The opens and volume are large enough to trust the numbers, but the test hasn't run long enough yet, delayed openers over the next 18-40+ hours could still close or widen the gap.",
          soWhat: [
            {
              symptom: "Manager wants a winner declared at the 30-hour mark",
              action:
                "Hold the decision until the 48-hour minimum passes, then re-check the same numbers before sending to the held-back group",
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
            role: "Record the sent/opens/open-rate numbers and the elapsed-time check in one row",
            why: "Free, fast enough to hand the one-line verdict back the same day",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-line verdict: act now, wait, or re-test, with the specific number that drove the call.",
      sampleOutput:
        "Bonobos test-verdict note (reference)\n\n\"Opens (1,340 / 1,410) clear the minimum, but elapsed time (30h) is under the 48h floor. Hold the call until tomorrow's 48h mark, re-check before sending to the held-back 10%.\"",
      successCriteria: [
        "Correctly identifies that both variants clear the opens and volume minimums",
        "Correctly flags the elapsed-time shortfall as the actual blocker",
        "Does not declare a winner before the lesson's minimum wait window",
      ],
      portfolioReady: false,
    },
    {
      id: "ab-testing-email-test-log-calibration",
      tier: "mini",
      archetype: "forecast",
      title: "Trust It or Toss It: Calibrating Three Past Test Calls",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three past decisions pulled from a real test log, predict whether each one was actually statistically sound before checking the numbers, then compare your call against the lesson's rules.",
      companyId: "klaviyo",
      scenario:
        "Klaviyo's client, a mid-size ecommerce brand, wants its test log audited before its next quarterly planning session. Three decisions in the log look confident. Your job is to predict which ones actually held up before you check the underlying numbers.",
      brief:
        "Predict first (sound / not sound), then check your prediction against the numbers and the lesson's rule that applies.",
      mode: "calibration",
      conceptsCovered: ["Sample Size Minimums", "Matching Metric to Element"],
      steps: [
        {
          stepId: "step-1-sample-size-minimum",
          concept: "Sample Size Minimums",
          lessonAnchor: "sample-size-the-rule-that-kills-most-tests",
          theoryRecap:
            "The lesson's minimum viable test needs 200-300 opens per variant; below that, a 20% difference between variants could easily be random chance.",
          question:
            "Log row 1: \"Sender name test, Version A: 180 opens, Version B: 224 opens. Winner: B, applied to all future sends.\" Predict: was this decision sound, before you check the math?",
          toolName: "Google Sheets",
          where: "The brand's shared test log spreadsheet, one row per past test",
          procedure: [
            "State your prediction (sound / not sound) before doing the check",
            "Compare both variants' opens against the lesson's 200-300 minimum",
            "Reveal: Version A's 180 opens falls under the minimum, so the 224 vs. 180 gap is not reliable evidence",
          ],
          outputSample: "Version A: 180 opens. Version B: 224 opens. Both under or barely at the 200-300 floor.",
          healthy: "A test log entry with both variants clearing 200-300 opens before a winner is applied everywhere",
          unhealthy: "A winner locked in from a variant that never reached the opens minimum",
          interpret:
            "180 opens is below the lesson's own floor, this decision was not statistically sound no matter which variant technically had more opens.",
          soWhat: [
            {
              symptom: "A past winner was applied list-wide from an under-powered test",
              action: "Re-run the sender-name test with both variants held open until each clears 200-300 opens",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-metric-mismatch",
          concept: "Matching Metric to Element",
          lessonAnchor: "what-metric-to-optimize-for",
          theoryRecap:
            "The lesson's rule: match the metric to the element tested. A CTA test should be measured on click-through rate, not open rate, optimizing for the wrong metric can make a test 'win' while revenue doesn't move.",
          question:
            "Log row 2: \"CTA button text test, measured by open rate. Version A ('Start my trial') had a 2% higher open rate, declared winner.\" Predict: was this decision sound?",
          toolName: "Google Sheets",
          where: "The same shared test log spreadsheet",
          procedure: [
            "State your prediction before checking",
            "Identify which element was actually tested (the CTA button)",
            "Identify which metric was used to judge it (open rate) and whether that's the right pairing",
          ],
          outputSample: "Element tested: CTA button text. Metric used to declare a winner: open rate.",
          healthy: "A CTA test judged on click-through rate, the metric the CTA can actually move",
          unhealthy: "A CTA test judged on open rate, a metric the CTA button can't influence since it isn't seen until after the email is already open",
          interpret:
            "Open rate is set by the subject line and sender name, not the CTA button; this decision measured the wrong thing and the '2% higher open rate' is very likely unrelated to which CTA text won.",
          soWhat: [
            {
              symptom: "A CTA test was declared using open-rate data",
              action: "Re-pull the same test's click-through-rate numbers per variant before trusting the winner",
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
            role: "Hold the test log and record each prediction next to the revealed answer",
            why: "Free, matches how the brand's real test log is already kept",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "ActiveCampaign",
            role: "Pull the underlying per-variant click-through-rate numbers for the misjudged CTA test",
            why: "Its multivariate reporting breaks out CTR by variant directly, useful once you need to re-check a mismeasured test",
            required: false,
            fallback: "Export the raw per-variant click data from whatever platform ran the original test",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A two-row calibration note: your prediction, the revealed answer, and the one lesson rule each log entry actually broke.",
      sampleOutput:
        "Mailchimp test-log audit note (reference)\n\nRow 1 (sender name): predicted sound, actual: NOT sound, 180 opens under the 200-300 floor.\nRow 2 (CTA test): predicted sound, actual: NOT sound, wrong metric (open rate) used to judge a CTA change.",
      successCriteria: [
        "States a prediction before checking either row",
        "Correctly identifies the sample-size floor violation in row 1",
        "Correctly identifies the metric-mismatch violation in row 2",
      ],
      portfolioReady: false,
    },
  ],

  "deliverability": [
    {
      id: "deliverability-auth-report-diagnostic",
      tier: "core",
      archetype: "audit",
      title: "The Bounce Investigation: Diagnosing a Failing Sender Reputation Report",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a supplied sender-reputation and authentication-status report (SPF/DKIM/DMARC pass rates, complaint rate, bounce rate, Google Postmaster domain reputation), diagnose which specific factor is tanking inbox placement and sequence the fix in the correct order.",
      companyId: "zendesk",
      scenario:
        "You're the lifecycle marketing analyst at Zendesk. Marketing ops just forwarded a Google Postmaster Tools export and a DMARC aggregate report summary after three straight weeks of declining open rates on the product newsletter, and asked you to find the cause before the next send.",
      brief:
        "Read the authentication and reputation report line by line, separate a hard blocker (would cause outright rejection) from a soft signal (would cause filtering), and decide which to fix first.",
      mode: "diagnostic",
      conceptsCovered: [
        "SPF envelope-sender authorization",
        "DKIM signature and body-tamper validation",
        "DMARC alignment between From address and SPF/DKIM domain",
        "Spam complaint rate as a hard reputation threshold",
        "Google Postmaster domain reputation as a leading indicator",
      ],
      steps: [
        {
          stepId: "step-1-read-auth-pass-rates",
          concept: "SPF envelope-sender authorization",
          lessonAnchor: "spf-sender-policy-framework",
          theoryRecap:
            "SPF checks whether the sending IP is on the domain's approved list; a spoofer or a forgotten ESP integration missing from that list fails SPF outright.",
          question:
            "The report shows SPF passing at 61% and DKIM passing at 98%. Every failing row traces back to one sending IP block. What does that gap most likely mean?",
          toolName: "Google Sheets",
          where: "Import the DMARC aggregate report summary CSV and filter rows where spf_result = fail.",
          procedure: [
            "Import the DMARC report summary and filter to spf_result = fail",
            "Group the failing rows by source_ip to find the common IP block",
            "Cross-reference that IP block against the current SPF TXT record's include: list",
          ],
          outputSample:
            "spf_result breakdown (10,400 rows)\n  pass: 6,344 (61.0%)\n  fail: 4,056 (39.0%), all from source IP block 198.51.100.0/24\n\nCurrent SPF record: v=spf1 include:mailchimp.com include:sendgrid.net ~all\n198.51.100.0/24 does not appear in either included range.",
          healthy:
            "SPF pass rate above 95%, with the rare failures scattered across unrelated one-off IPs rather than concentrated in one block.",
          unhealthy:
            "39% of mail failing SPF, all traced to a single IP block, meaning one entire sending source was never added to the SPF record.",
          interpret:
            "A concentrated SPF failure on one IP block is almost never spoofing, it's an onboarding gap: a transactional tool or a new ESP send domain that was never added to the include list.",
          soWhat: [
            {
              symptom: "SPF fails cluster on one IP block, not scattered",
              action: "Identify the sending service behind that IP block and add its include: statement to the SPF record",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-complaint-rate-threshold",
          concept: "Spam complaint rate as a hard reputation threshold",
          lessonAnchor: "sender-reputation",
          theoryRecap:
            "Complaint rate above roughly 0.1% is treated as a hard reputation threshold by mailbox providers, crossing it triggers filtering that persists even after the underlying cause is fixed.",
          question:
            "The complaint rate this month is 0.34%, more than 3x the 0.1% threshold. Is fixing SPF enough to recover inbox placement on its own?",
          toolName: "Google Sheets",
          where: "The same report's weekly complaint-rate tab.",
          procedure: [
            "Chart complaint rate by week for the last 8 weeks",
            "Identify the week the rate crossed 0.1% and cross-reference it against send calendar changes",
            "Flag the finding as a second, independent blocker from the SPF gap",
          ],
          outputSample:
            "Week 1: 0.06%   Week 2: 0.07%   Week 3: 0.09%\nWeek 4: 0.21%   Week 5: 0.29%   Week 6: 0.34%  <- current\n\nSend calendar: Week 4 added a re-engagement blast to the full unfiltered list, including 90+ day inactive addresses.",
          healthy: "Complaint rate holding steady under 0.1%, tracked weekly, with any spike investigated within days.",
          unhealthy: "Complaint rate has tripled over 3 weeks and coincides with a send to an unfiltered inactive list.",
          interpret:
            "SPF and complaint rate are two separate failures that happened at the same time. Fixing SPF alone will not undo reputation damage already caused by the complaint spike.",
          soWhat: [
            {
              symptom: "Complaint rate above 0.1% and rising",
              action: "Suppress the 90+ day inactive segment immediately and route it through a re-engagement flow before any further bulk sends",
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
            role: "Import and filter the DMARC aggregate report and Postmaster export",
            why: "No account cost, handles pivoting and filtering a few thousand rows without issue",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Mailchimp",
            role: "ESP-side domain authentication setup and ongoing complaint-rate monitoring",
            why: "Automates DKIM key rotation and surfaces complaint rate per campaign without a manual export",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page diagnosis memo naming both root causes (the SPF onboarding gap and the complaint-rate spike), in the order they should be fixed, with the specific action for each.",
      sampleOutput:
        "Chewy, deliverability diagnosis memo (excerpt)\n\nROOT CAUSE 1 (fix first): Complaint rate at 0.34%, tripled since Week 4's unfiltered re-engagement blast. Action: suppress 90+ day inactive segment now.\n\nROOT CAUSE 2: SPF failing on 39% of mail, all from one unregistered IP block. Action: add the missing include: statement.\n\nDo not re-launch bulk sends until both are resolved; fixing only one leaves the other actively suppressing inbox placement.",
      successCriteria: [
        "Correctly separates the SPF gap from the complaint-rate spike as two independent causes",
        "Sequences the complaint-rate fix first since it is the harder, slower-to-recover reputation signal",
        "Names a specific, concrete action for each cause rather than a general recommendation",
      ],
      portfolioReady: true,
      stretch:
        "Estimate how many weeks of clean sending it will likely take for the complaint-rate-driven reputation damage to recover, using the lesson's domain warm-up timeline as a reference point.",
    },
    {
      id: "deliverability-dmarc-rollout-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The DMARC Rollout: Deciding When to Tighten Enforcement",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a series of weekly DMARC aggregate report snapshots during a p=none to p=reject rollout, decide at each stage whether to hold, ramp up, or roll back enforcement.",
      companyId: "squarespace",
      scenario:
        "You're managing the DMARC rollout for Squarespace's customer email domain. You started at p=none four weeks ago and must decide, week by week, whether the data supports moving to enforcement.",
      brief:
        "At each weekly checkpoint, read the alignment pass rate and unresolved sender list, then choose the correct next action instead of following a fixed calendar.",
      mode: "diagnostic",
      conceptsCovered: [
        "DMARC policy staging (p=none to p=quarantine to p=reject)",
        "Reading DMARC aggregate reports to find unresolved senders",
        "Percentage-based enforcement ramp (pct=)",
      ],
      steps: [
        {
          stepId: "step-1-unresolved-sender-check",
          concept: "Reading DMARC aggregate reports to find unresolved senders",
          lessonAnchor: "dmarc-domain-based-message-authentication-reporting-and-conformance",
          theoryRecap:
            "A DMARC rollout only moves from p=none toward enforcement once every legitimate sending source on the domain passes SPF or DKIM alignment; an aggregate report's alignment percentage can look high while a single unresolved sender still risks losing real mail.",
          question:
            "Week 1's aggregate report shows 71% alignment with 3 unresolved senders (a billing tool, calendar invites, and an old CRM). Do you hold at p=none or start ramping enforcement?",
          toolName: "Google Sheets",
          where: "Weekly DMARC aggregate report export, logged into a rollout tracking sheet.",
          procedure: [
            "Log the week's overall alignment pass rate and the full unresolved sender list",
            "Identify each unresolved sender by name, not just count",
            "Hold enforcement at p=none if any unresolved sender remains, regardless of the overall percentage",
          ],
          outputSample:
            "Week 1 (p=none)\n  Alignment pass rate: 71%\n  Unresolved senders: billing tool, calendar invites, old CRM\n  Decision: HOLD, fix senders before considering enforcement",
          healthy:
            "The decision holds at p=none because 3 senders are still unresolved, even though 71% looks like a reasonable-sounding number in isolation.",
          unhealthy:
            "Treating 71% alignment as 'good enough' and moving to p=quarantine while 3 real senders would start losing mail.",
          interpret:
            "The unresolved sender list, not the percentage, is what gates the next enforcement stage.",
          soWhat: [
            {
              symptom: "Alignment percentage looks acceptable but some legitimate mail keeps getting flagged",
              action: "Check the unresolved sender list by name before touching the DMARC policy",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-enforcement-ramp-decision",
          concept: "Percentage-based enforcement ramp (pct=)",
          lessonAnchor: "dmarc-domain-based-message-authentication-reporting-and-conformance",
          theoryRecap:
            "DMARC's pct= tag lets a domain apply a stricter policy to only a percentage of mail at first, so a domain moving into p=quarantine or p=reject ramps pct= gradually (e.g. 10, then 25, then 100) rather than flipping to full enforcement in one step.",
          question:
            "By Week 4, alignment has reached 99.2% with zero unresolved senders for a full week. What's the correct next move?",
          toolName: "Google Sheets",
          where: "Same weekly rollout tracking sheet, now at the 4-week mark.",
          procedure: [
            "Confirm alignment has held above roughly 98% for a full week, not just a single snapshot",
            "Confirm zero unresolved senders remain on the current week's report",
            "Move to p=quarantine at a low pct= value (e.g. pct=10), not straight to full p=reject",
          ],
          outputSample:
            "Week 4 (p=none)\n  Alignment pass rate: 99.2%\n  Unresolved senders: none\n  Decision: move to p=quarantine at pct=10",
          healthy:
            "The rollout advances to p=quarantine at a small starting percentage, giving one more real-traffic checkpoint before scaling up.",
          unhealthy:
            "Jumping straight to p=reject at pct=100 the moment alignment crosses 99%, with no staged ramp to catch a sender that only sends mail occasionally.",
          interpret:
            "A staged pct= ramp is the safety margin between 'the data looks clean' and 'enforcement is safe at full volume.'",
          soWhat: [
            {
              symptom: "Alignment has been clean for a full week and the team wants to move to full enforcement immediately",
              action: "Start the ramp at pct=10 and hold another week before increasing it",
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
            role: "Track weekly alignment pass rate and unresolved sender list across the rollout",
            why: "Sufficient for logging a handful of weekly snapshots without a dedicated DMARC platform",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Confirm which campaign sends originate from the ESP side of the domain during the rollout",
            why: "Cross-checking the ESP's own send logs against DMARC report source IPs speeds up identifying unresolved senders",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed 4-week rollout log showing the decision made at each checkpoint and the alignment pass rate that justified it.",
      sampleOutput:
        "Mailchimp, DMARC rollout log (excerpt)\n\nWeek 1 (p=none): alignment 71%, 3 unresolved senders (billing tool, calendar invites, old CRM). Decision: hold, fix senders.\nWeek 3 (p=none): alignment 94%, 1 unresolved sender remaining (old CRM, being decommissioned). Decision: hold one more week.\nWeek 4 (p=none): alignment 99.2%, 0 unresolved senders. Decision: move to p=quarantine at pct=10.",
      successCriteria: [
        "Holds at p=none whenever any unresolved sender remains, regardless of how high the overall alignment percentage looks",
        "Only recommends ramping enforcement once alignment is consistently above roughly 98% for a full week",
        "Recognizes a rollback signal (a new unresolved sender appearing) as a reason to pause the ramp, not push through it",
      ],
      portfolioReady: true,
      stretch:
        "Extend the log two more stages, from p=quarantine at pct=10 through to p=reject at pct=100, deciding the pct increase at each step.",
    },
  ],
  "rfm": [
    {
      id: "rfm-transaction-table-scoring-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Score the List: Building an RFM Segmentation Table from Raw Transactions",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a supplied customer transaction table (customer_id, order_date, order_value), calculate Recency, Frequency, and Monetary scores per customer and map each to a named segment.",
      companyId: "chewy",
      scenario:
        "You're the retention marketing analyst at Chewy. You've been handed a 12-month transaction export for the Autoship customer base and asked to build the first RFM segmentation pass before flows can be built.",
      brief:
        "Calculate the three derived fields per customer, score each on quintiles, and map the resulting profile to one of the lesson's named segments.",
      mode: "build",
      conceptsCovered: [
        "Deriving Recency, Frequency, and Monetary from a raw transaction table",
        "Quintile-based scoring per dimension",
        "Mapping RFM profiles to named segments",
      ],
      steps: [
        {
          stepId: "step-1-derive-rfm-fields",
          concept: "Deriving Recency, Frequency, and Monetary from a raw transaction table",
          lessonAnchor: "step-1-pull-your-data",
          theoryRecap:
            "Recency, Frequency, and Monetary are each calculated per customer from a rolling 12-to-24-month window of order_date and order_value rows, capped at 24 months.",
          question:
            "The export has one row per order, not one row per customer. Before any scoring can happen, what three fields need to exist per customer_id?",
          toolName: "Google Sheets",
          where: "Pivot the raw transaction export by customer_id.",
          procedure: [
            "Build a pivot table grouped by customer_id",
            "Add days since most recent order_date as Recency",
            "Add count of orders as Frequency, and sum of order_value as Monetary",
          ],
          outputSample:
            "customer_id  Recency(days)  Frequency  Monetary\nC-1042       6              11         $1,340\nC-2231       178            2          $95\nC-3087       21             6          $612",
          healthy:
            "Every customer_id has exactly one row with all three fields populated, no duplicate rows and no blank Monetary values.",
          unhealthy:
            "Multiple rows per customer_id because the pivot wasn't grouped correctly, which will silently corrupt every quintile calculated on top of it.",
          interpret:
            "RFM scoring is only as reliable as this derivation step. A pivoting mistake here produces plausible-looking but wrong scores downstream, with no error to flag it.",
          soWhat: [
            {
              symptom: "Row count after pivoting doesn't match the count of unique customer_ids",
              action: "Re-check the pivot table's grouping field before moving to scoring",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-quintile-score-and-map",
          concept: "Quintile-based scoring per dimension",
          lessonAnchor: "step-2-score-each-dimension-on-quintiles",
          theoryRecap:
            "Each dimension is scored independently on quintiles, 1 to 5, with lower Recency-days mapping to a higher score and higher Frequency or Monetary mapping to a higher score.",
          question:
            "C-1042 has Recency 6 days, Frequency 11, Monetary $1,340. Against this dataset's quintile boundaries, what score and segment does that customer land in?",
          toolName: "Google Sheets",
          where: "Add a scoring column per dimension using the sheet's quintile function.",
          procedure: [
            "Use RANK or a quintile formula to score each dimension 1-5",
            "Concatenate the three scores into an RFM profile per customer",
            "Map each profile against the lesson's segment table",
          ],
          outputSample: "C-1042: R5 F5 M5  ->  Champions\nC-2231: R1 F1 M1  ->  Lapsed\nC-3087: R4 F3 M3  ->  Potential Loyalist",
          healthy: "Roughly 20% of the list lands in each quintile per dimension, confirming the scoring is relative to this dataset, not a fixed cutoff.",
          unhealthy:
            "Using a fixed cutoff (e.g. 'Frequency 10+ = score 5') copied from a different dataset instead of recalculating quintiles on this list.",
          interpret:
            "Quintile boundaries are dataset-specific and must be recalculated on each new export, they are not portable numbers.",
          soWhat: [
            {
              symptom: "A segment distribution wildly skewed to one end (e.g. 60% scored as 5)",
              action: "Recompute quintile boundaries on the current dataset instead of reusing a prior month's cutoffs",
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
            role: "Pivot the transaction export and calculate quintile scores",
            why: "Handles pivoting, ranking, and lookup formulas needed for RFM without any paid platform",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Automate RFM scoring and segment membership on a recurring monthly refresh",
            why: "Built-in RFM analysis report removes the need to manually re-pivot every month",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored customer table with Recency, Frequency, Monetary values, quintile scores, RFM profile, and mapped segment name for every customer in the export.",
      sampleOutput:
        "Mailchimp, Autoship RFM table (excerpt)\n\ncustomer_id  R  F  M  Profile  Segment\nM-501        5  5  4  5-5-4    Champions\nM-502        2  4  4  2-4-4    At Risk\nM-503        5  1  2  5-1-2    New Customer",
      successCriteria: [
        "Every customer has a complete R, F, M profile with no blank fields",
        "Quintile boundaries are recalculated on this dataset, not copied from elsewhere",
        "Every profile is correctly mapped to a named segment per the lesson's table",
      ],
      portfolioReady: true,
      stretch:
        "Add a weighted composite score using the lesson's Recency 50% / Frequency 30% / Monetary 20% weighting and compare which customers rank differently than under equal weighting.",
    },
    {
      id: "rfm-segment-strategy-drill",
      tier: "mini",
      archetype: "audit",
      title: "Match the Offer: Segment-to-Strategy Drill",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given 8 customer RFM profiles, correctly assign the segment name and the appropriate email strategy for each, avoiding the equal-weighting and over-discounting mistakes the lesson warns against.",
      companyId: "mailchimp",
      scenario:
        "You're prepping a segment-strategy brief for Mailchimp's own customer marketing team ahead of next month's send calendar.",
      brief:
        "Sort 8 supplied RFM profiles into named segments and assign the correct strategy, catching any profile a naive equal-weighting approach would misclassify.",
      mode: "drill",
      conceptsCovered: [
        "Mapping RFM profiles to named segments",
        "Weighting Recency, Frequency, and Monetary unequally",
        "Decoupling send eligibility from offer depth",
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "List the 8 profiles and assign segment plus strategy in adjacent columns",
            why: "A drill this size needs no more than a simple table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "An 8-row table pairing each RFM profile with its segment name and recommended email strategy.",
      sampleOutput:
        "Squarespace, segment-strategy drill (excerpt)\n\nProfile     Segment           Strategy\nR5-F5-M2    Potential Loyalist  Cross-sell nudge, not a discount, this customer is new and highly engaged\nR1-F5-M5    Can't Lose Them     High-touch win-back, high historical value despite recent lapse\nR2-F1-M1    About to Sleep      Light reactivation content, not a coupon",
      successCriteria: [
        "Correctly flags a high-Monetary, low-Recency profile as 'Can't Lose Them' rather than 'Lapsed', avoiding the equal-weighting trap",
        "Assigns discount depth based on Monetary score, not blanket offers across all 8 profiles",
        "Recommends suppression or a last-chance email only for genuinely low-R, low-F, low-M profiles",
      ],
      portfolioReady: false,
    },
  ],

  "winback": [
    {
      id: "winback-sequence-build-duolingo",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the 4-Email Sequence: Duolingo's Streak-Breakers",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a dormant learner segment, draft the 4-email win-back sequence, value, incentive, preference center, sunset, in the correct order with correct day spacing and no early discount.",
      companyId: "duolingo",
      scenario:
        "You're a lifecycle marketer at Duolingo assigned a segment of 40,000 learners who broke a 30+ day streak and haven't opened the app in 95 days.",
      brief:
        "Write the subject line and one-paragraph body direction for each of the 4 emails in the sequence, then justify why each email sits where it does in the order.",
      mode: "build",
      conceptsCovered: [
        "Sequencing escalation without leading with a discount",
        "The sunset email requires an explicit removal statement",
      ],
      steps: [
        {
          stepId: "step-1-value-first-sequencing",
          concept: "Sequencing escalation without leading with a discount",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Step 3 gives each of the 4 emails a specific job, and email 1 leads with value, never an offer, because leading with a discount trains subscribers to ignore regular sends to extract a deal.",
          question:
            "Email 1 goes out Day 0 to learners who broke a streak. Do you open with '20% off Super Duolingo' or with what they've missed?",
          toolName: "Google Sheets",
          where: "A draft tab listing the 4 emails as rows, columns for day, subject line, and body direction.",
          procedure: [
            "List the 4 emails as rows: Day 0, Day 7, Day 14, Day 21",
            "Write Email 1 (Day 0) as a value reminder only, no offer, e.g. new course content or a streak-repair nudge",
            "Write Email 2 (Day 7) as the first incentive, a streak freeze or bonus XP, only after Email 1 got no response",
          ],
          outputSample:
            "Day 0: 'Your Spanish streak is waiting.' Body: highlight 2 new stories added since they left, no offer.\nDay 7: 'Come back, we saved your spot (+ a free streak freeze).' Body: first incentive, tied to their actual lapse reason.",
          healthy:
            "Email 1 has zero discount language; the first incentive appears no earlier than Email 2, after the value-led touch already ran.",
          unhealthy:
            "Email 1 opens with '50% off Plus', training the learner to wait out every regular send for a coupon.",
          interpret:
            "Order is not cosmetic, it is the mechanism, a value-first open protects the discount's power for the emails that actually need it.",
          soWhat: [
            {
              symptom: "Email 1 draft already has a percentage-off headline",
              action: "Rewrite Email 1 around a value reminder, move any offer to Email 2's draft",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sunset-email-removal-statement",
          concept: "The sunset email requires an explicit removal statement",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Step 3, Email 4 (Day 21) is the sunset email: it must explicitly state the subscriber is being removed unless they click to stay, sent from a real person's name, not the brand.",
          question:
            "Email 4 goes out Day 21. Does the copy say 'we miss you' again, or does it say what actually happens if they don't click?",
          toolName: "Google Sheets",
          where: "Same draft tab, the Day 21 row.",
          procedure: [
            "Write Email 4's subject as a real person, not the brand, e.g. 'Priya from Duolingo'",
            "State plainly in the first line that inactive learners are being moved off marketing sends",
            "Add a single one-click 'Keep me subscribed' button as the only CTA",
          ],
          outputSample:
            "From: Priya at Duolingo\nSubject: We're removing you from these emails\nBody: 'You haven't opened an email from us in a while, so unless you click below, this is the last one you'll get.' [Keep me subscribed]",
          healthy: "The email states the removal explicitly and uses a personal sender name.",
          unhealthy: "Email 4 repeats 'we miss you, come back!' with no statement that non-response means removal.",
          interpret: "The sunset framing works because it's specific and real, not because it's polite.",
          soWhat: [
            {
              symptom: "Email 4 draft reads like Email 1 with a new subject line",
              action: "Add the explicit removal statement and switch the sender name to a real person",
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
            role: "Draft and sequence the 4 emails before building them in an ESP",
            why: "Free, no account friction, easy to review day-spacing at a glance",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Build the drafted sequence as a live triggered automation with day-delay branching",
            why: "Handles the multi-day delays and the 'engaged at any point' branch logic the lesson's flowchart describes",
            required: false,
            fallback: "Keep the sequence in Google Sheets and send manually to a small segment",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 4-row sequence draft (Day 0/7/14/21) with subject line and body direction per email, correctly ordered value-first to sunset.",
      sampleOutput:
        "Zomato, dormant-user win-back draft (excerpt)\n\nDay 0: 'Your favorite biryani spot added 3 new dishes.' No offer.\nDay 7: 'Free delivery on your next order, just for you.' First incentive.\nDay 14: 'Want fewer emails instead? Tell us here.' Preference center.\nDay 21: From 'Ankit at Zomato', 'We're removing you unless you click below.' Sunset.",
      successCriteria: [
        "Email 1 contains no discount or incentive language",
        "Email 4 explicitly states removal and uses a personal sender name",
        "Day spacing matches 0/7/14/21",
      ],
      portfolioReady: true,
    },
    {
      id: "winback-dormancy-segment-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Sunset Call: Auditing FirstCry's Dormant Subscriber Export",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a 30-contact dormant subscriber export with last-open, last-click, and last-purchase dates, apply the lesson's multi-signal dormancy definition to segment by depth of inactivity and flag who is suppression-ready.",
      companyId: "firstcry-brainbees",
      scenario:
        "You're the CRM analyst at FirstCry (Brainbees Solutions) validating which dormant contacts deserve the win-back sequence versus immediate suppression, ahead of a Diwali sale send.",
      brief:
        "Apply 'no click AND no purchase AND no site visit in X days' rather than opens alone, then split the export into recently-lapsed, deep-sleepers, and suppression-ready buckets.",
      mode: "diagnostic",
      conceptsCovered: [
        "Defining dormancy with multiple signals, not just opens",
        "Segmenting by depth of inactivity before sending",
      ],
      steps: [
        {
          stepId: "step-1-multi-signal-dormancy",
          concept: "Defining dormancy with multiple signals, not just opens",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Step 1 warns that Apple Mail Privacy Protection inflates opens for roughly half of iOS users, so a clean dormancy trigger needs 'no click AND no purchase AND no site visit', not opens alone.",
          question:
            "12 of the 30 rows show 0 opens in 120 days but 3 site visits and 1 click. Are they dormant?",
          toolName: "Google Sheets",
          where: "Import dormant-export.csv, add a computed 'true dormancy' column.",
          procedure: [
            "Import dormant-export.csv and freeze the header row",
            "Add a formula column: TRUE dormant only if clicks=0 AND purchases=0 AND site visits=0 in the window",
            "Flag the 12 opens-only-zero rows as active, not dormant, since they clicked or visited",
          ],
          outputSample:
            "FALSE POSITIVE (opens=0, but active)\n  row 14: 0 opens / 3 site visits / 1 click, 118 days   -> NOT dormant\nTRUE DORMANT\n  row 22: 0 opens / 0 clicks / 0 visits, 140 days   -> dormant",
          healthy: "The dormant segment excludes anyone with a click or site visit, even at zero opens.",
          unhealthy: "Filtering on 'opens = 0' alone and sending sunset emails to people who are actually still browsing.",
          interpret: "Opens are the least reliable signal in the export; clicks and visits are ground truth.",
          soWhat: [
            {
              symptom: "The dormant filter uses only the opens column",
              action: "Add clicks and site-visit columns to the dormancy formula before segmenting",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-depth-segmentation",
          concept: "Segmenting by depth of inactivity before sending",
          lessonAnchor: "how-it-works",
          theoryRecap:
            "The lesson's Step 2 says a subscriber silent for 95 days gets a lighter touch than one silent for 14 months, and cites a Litmus study where targeting only the top decile of lapsed engagers outperformed blasting the full dormant cohort.",
          question:
            "Of the true-dormant rows, 9 lapsed 90-120 days ago and 5 lapsed 300+ days ago. Do both get the same sequence, at the same time?",
          toolName: "Google Sheets",
          where: "Same sheet, sort the true-dormant rows by days-since-last-activity.",
          procedure: [
            "Sort true-dormant rows by days-since-last-activity, ascending",
            "Bucket into 'recently-lapsed' (90-150 days) and 'deep-sleepers' (150+ days)",
            "Flag any row past 365 days with a prior failed win-back attempt as suppression-ready, not resend-ready",
          ],
          outputSample:
            "RECENTLY-LAPSED (9 rows): send Week 1\nDEEP-SLEEPERS (5 rows, 300+ days): send Week 2, lighter frequency\nSUPPRESSION-READY (3 rows): already completed one sequence with zero engagement, skip resend",
          healthy: "Recently-lapsed contacts get the sequence first; deep-sleepers wait and get fewer touches; repeat non-responders are suppressed, not resent.",
          unhealthy: "Blasting the full 14-row dormant list in one send regardless of how long each has been silent.",
          interpret: "Depth of dormancy changes both timing and volume, not just messaging.",
          soWhat: [
            {
              symptom: "The send plan treats 95-day and 300-day silence identically",
              action: "Split the send into two waves by dormancy depth, deep-sleepers get Week 2",
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
            role: "Filter, formula-check, and bucket the dormant export",
            why: "Free, handles formula-based multi-signal filtering without a platform login",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Build the recently-lapsed / deep-sleeper segments as live, auto-updating lists",
            why: "Segments recompute automatically as contacts' activity changes, instead of a static one-time export",
            required: false,
            fallback: "Re-export and re-run the Sheets formulas weekly",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A segmented version of the export with three tagged buckets, recently-lapsed, deep-sleepers, and suppression-ready, plus a one-line send-order recommendation.",
      sampleOutput:
        "Instacart, dormant list audit (excerpt)\n\nRECENTLY-LAPSED (Week 1 send): 14 contacts, 90-140 days silent, no click/visit/purchase\nDEEP-SLEEPERS (Week 2, lighter touch): 6 contacts, 150-280 days silent\nSUPPRESSION-READY (skip): 4 contacts, already completed one sequence with zero engagement",
      successCriteria: [
        "Correctly excludes opens-only-zero rows that had a click or site visit",
        "Splits true-dormant rows into recently-lapsed and deep-sleeper buckets",
        "Flags repeat non-responders as suppression-ready rather than resend targets",
      ],
      portfolioReady: true,
    },
  ],
  "sms-marketing": [
    {
      id: "sms-compliant-welcome-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Compliant Welcome Text: Instacart's SMS Opt-In",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Draft a compliant SMS welcome message and a 4-message monthly cadence plan that includes every required TCPA disclosure and stays inside the frequency cap.",
      companyId: "instacart",
      scenario:
        "You're the retention marketer at Instacart launching a new SMS program and need to ship a welcome text that passes legal review on the first pass.",
      brief:
        "Write the welcome message with frequency disclosure, rates disclosure, and STOP/HELP instruction, then plan 4 monthly sends that respect the 10am-8pm local-time window and lead with the brand name.",
      mode: "build",
      conceptsCovered: [
        "Capturing consent with required disclosures",
        "Writing for the lock screen",
      ],
      steps: [
        {
          stepId: "step-1-required-disclosures",
          concept: "Capturing consent with required disclosures",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 1 requires the welcome message to include rate/frequency ('up to 4 msgs/month'), 'msg and data rates may apply', and a STOP/HELP instruction, on top of a double opt-in with stored timestamp, IP, and disclosure text.",
          question:
            "Your draft welcome text says 'Thanks for joining Instacart texts! Reply STOP to opt out.' What's missing before this can ship?",
          toolName: "Google Sheets",
          where: "A single-cell draft with a checklist column next to it.",
          procedure: [
            "Draft the welcome message text under 160 characters",
            "Check off each required element: brand name, frequency disclosure, rates disclosure, STOP/HELP",
            "Rewrite until all four checklist items are present in the same message",
          ],
          outputSample:
            "DRAFT (fails checklist): 'Thanks for joining Instacart texts! Reply STOP to opt out.'\nFIXED: 'Instacart: You're in! Up to 4 msgs/month. Msg & data rates may apply. Reply STOP to cancel, HELP for help.'",
          healthy: "The welcome message contains brand name, frequency, rates disclosure, and STOP/HELP, all four, in one text.",
          unhealthy: "Shipping a welcome text with only a STOP instruction and no frequency or rates disclosure.",
          interpret: "Missing even one disclosure element is a documented TCPA compliance gap, not a style choice.",
          soWhat: [
            {
              symptom: "Welcome draft only has a STOP line",
              action: "Add frequency and 'msg and data rates may apply' before the message ships",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-lock-screen-copy",
          concept: "Writing for the lock screen",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 4 says lock-screen copy needs the brand name first, one link, one CTA, conversational tone, and a hard cap of 160 characters or fewer.",
          question:
            "Your promo draft is 210 characters with two links. What has to go?",
          toolName: "Google Sheets",
          where: "Same sheet, a character-count formula column.",
          procedure: [
            "Add a LEN() formula next to each draft to check character count",
            "Cut to one link and one CTA per message",
            "Move the brand name to the first word of the message",
          ],
          outputSample:
            "DRAFT (210 chars, 2 links): 'Hey there! Big news from our team, check out our new arrivals here [link1] and also don't miss our sale page [link2]...'\nFIXED (98 chars, 1 link): 'Instacart: New arrivals are live. Shop before they're gone: [link]'",
          healthy: "The final message is under 160 characters, leads with the brand name, and has exactly one link.",
          unhealthy: "A 200+ character message with two links and the brand name buried in the middle.",
          interpret: "SMS has no preview pane to rescue a buried CTA, the first 20 characters decide whether it gets read.",
          soWhat: [
            {
              symptom: "A draft runs over 160 characters",
              action: "Cut to one CTA and move the brand name to the front before sending",
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
            role: "Draft messages with character-count and disclosure checklists",
            why: "Free, and a LEN() formula catches the 160-character limit before anything ships",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo",
            role: "Send the compliant welcome text and log consent timestamp/IP automatically",
            why: "Handles the double opt-in confirmation reply and stores the consent record the lesson requires",
            required: false,
            fallback: "Log consent manually in a spreadsheet with timestamp and IP columns",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A compliant welcome message text (under 160 characters, all 4 disclosure elements present) plus a 4-message monthly send calendar.",
      sampleOutput:
        "Zomato, SMS welcome draft (excerpt)\n\nWelcome: 'Zomato: You're in! Up to 4 msgs/month. Msg & data rates may apply. Reply STOP to cancel, HELP for help.' (97 chars)\nMonth plan: Week 1 welcome, Week 2 order-triggered only, Week 3 one promo (1 link), Week 4 one promo (1 link)",
      successCriteria: [
        "Welcome message includes all 4 required disclosure elements",
        "Every draft message is under 160 characters with exactly one link",
        "Monthly plan stays at or under 4 sends",
      ],
      portfolioReady: true,
    },
    {
      id: "sms-frequency-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Forecast the Trade-off: Zomato's SMS Frequency Cap vs Revenue",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a table of messages-per-month, revenue-per-message, and cumulative opt-out rate, forecast the send frequency that maximizes net revenue without breaching the lesson's 3.5% industry-average opt-out benchmark.",
      companyId: "zomato",
      scenario:
        "You're the CRM lead at Zomato modeling how many SMS sends per month the loyalty segment can absorb before opt-outs erode the list faster than incremental sends generate revenue.",
      brief:
        "Given send-frequency test data for 2, 4, 6, and 8 messages/month, calculate net revenue at each level (gross revenue minus projected list-value lost to opt-outs) and recommend a cap with the automated-flow-first reasoning the lesson argues for.",
      mode: "diagnostic",
      conceptsCovered: [
        "Capping frequency against opt-out risk",
        "Automated flows beat broadcasts on revenue per recipient",
      ],
      steps: [
        {
          stepId: "step-1-frequency-vs-optout",
          concept: "Capping frequency against opt-out risk",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Step 3 caps most ecommerce SMS programs at 4-6 messages/month, warning that beyond that ceiling opt-outs spike and reach degrades, citing a 3.5% industry-average opt-out benchmark from the lesson's Bushbalm example.",
          question:
            "The test data shows opt-out rate holds near 1.2% through 4 sends/month, then jumps to 4.8% at 8 sends/month. Where does the curve break?",
          toolName: "Google Sheets",
          where: "Import frequency-test.csv, plot opt-out rate against sends/month.",
          procedure: [
            "Import frequency-test.csv with columns: sends/month, opt-out rate, revenue/message",
            "Plot opt-out rate against sends/month and locate where the curve bends upward sharply",
            "Mark any frequency level above the 3.5% opt-out benchmark as over the safe cap",
          ],
          outputSample:
            "2 sends/mo: 0.6% opt-out\n4 sends/mo: 1.2% opt-out\n6 sends/mo: 2.9% opt-out\n8 sends/mo: 4.8% opt-out  <- exceeds 3.5% benchmark",
          healthy: "The recommended frequency sits at or below the point where opt-out rate crosses the 3.5% benchmark.",
          unhealthy: "Recommending 8 sends/month because gross revenue is highest there, ignoring that opt-out rate has already broken the safe threshold.",
          interpret: "Gross revenue per send is the wrong optimization target once opt-out rate compounds against future list value.",
          soWhat: [
            {
              symptom: "The frequency recommendation is based on gross revenue alone",
              action: "Cross-check the recommended frequency against the 3.5% opt-out benchmark before finalizing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-automated-vs-broadcast-revenue",
          concept: "Automated flows beat broadcasts on revenue per recipient",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson states automated flows (cart, browse, post-purchase) beat broadcast sends by 3 to 10x on revenue per recipient, so a frequency cap should be spent on automation first, broadcasts second.",
          question:
            "Of your 4 allowed monthly sends, the current plan is 4 broadcasts and 0 automated flows. Does that match where the revenue actually comes from?",
          toolName: "Google Sheets",
          where: "Same sheet, add a revenue-per-recipient column split by send type.",
          procedure: [
            "Tag each historical send as 'broadcast' or 'automated flow'",
            "Compare average revenue/recipient for each tag",
            "Reallocate the monthly send budget to prioritize automated triggers before adding broadcast sends",
          ],
          outputSample:
            "Broadcast avg: ₹8/recipient\nAutomated flow avg (cart/browse/post-purchase): ₹41/recipient (5.1x higher)\nRecommendation: keep 2-3 automated triggers always-on, cap broadcasts at 1-2/month",
          healthy: "The monthly send budget is weighted toward automated triggers, with broadcasts filling the remaining cap.",
          unhealthy: "Spending the full frequency cap on broadcasts and treating automated flows as optional extras.",
          interpret: "The cap isn't a budget to fill with broadcasts, it's a ceiling that automation should claim first.",
          soWhat: [
            {
              symptom: "The send plan is 100% broadcast with no automated triggers",
              action: "Move cart, browse, and post-purchase triggers into the plan before adding any broadcast",
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
            role: "Model net revenue and opt-out curves across frequency levels",
            why: "Free, chart-building and formula-driven scenario comparison need nothing more",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Run the actual automated cart/browse/post-purchase SMS triggers at scale",
            why: "Automated triggers, the highest-revenue-per-recipient sends in this forecast, require flow automation to run reliably",
            required: false,
            fallback: "Send automated triggers manually to small test segments and log results in Sheets",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A frequency-vs-revenue model recommending a monthly send cap, with the send budget split between automated triggers and broadcasts, and a written justification citing the opt-out benchmark.",
      sampleOutput:
        "Instacart, SMS frequency model (excerpt)\n\nRecommended cap: 4 sends/month (1.2% opt-out, under the 3.5% benchmark)\nBudget split: 3 automated triggers (cart, browse, post-purchase) + 1 broadcast/month\nProjected net revenue: ₹1.94/recipient higher than the current 6-broadcast plan after accounting for opt-out list erosion",
      successCriteria: [
        "Frequency recommendation stays at or under the 3.5% opt-out benchmark",
        "Model compares net revenue, not just gross revenue, across frequency levels",
        "Send budget prioritizes automated triggers over broadcasts",
      ],
      portfolioReady: true,
    },
  ],

  "zero-party-data": [
    {
      id: "zero-party-data-preference-center-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Zero-Party Preference Center From Scratch",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Design and draft the actual field structure, copy, and value exchange for a preference center that a subscriber would willingly complete.",
      companyId: "nubank",
      scenario:
        "You're the lifecycle marketer at Nubank building the first preference center for the credit card waitlist list. Right now the only option subscribers have is 'unsubscribe.'",
      brief:
        "Draft a preference center form (fields, copy, value exchange) that captures zero-party data instead of just letting people leave.",
      mode: "build",
      conceptsCovered: ["Preference Centers", "Progressive Profiling"],
      steps: [
        {
          stepId: "step-1-field-selection",
          concept: "Preference Centers",
          lessonAnchor: "2-preference-centers",
          theoryRecap:
            "A preference center replaces the blunt unsubscribe link with granular choices: frequency and topic, so a subscriber who is mildly annoyed can self-correct instead of leaving entirely.",
          question:
            "Nubank's waitlist list currently has one button: unsubscribe. Which fields turn that into a preference center a subscriber would actually use?",
          toolName: "Google Forms",
          where: "Build the form fields in Google Forms, then note how each field maps to an ESP custom property.",
          procedure: [
            "List every distinct email type Nubank currently sends (waitlist updates, product education, promotions, referral nudges)",
            "Turn that list into a topic-interest multi-select field, not a single dropdown",
            "Add a frequency field with three real options: weekly, monthly, only major updates",
            "Add one open value-exchange line above the form explaining what changes for the subscriber immediately after they submit",
          ],
          outputSample:
            "PREFERENCE CENTER DRAFT\nTopics (multi-select): [ ] Card launch updates [ ] Money tips [ ] Referral rewards\nFrequency (single-select): Weekly / Monthly / Major updates only\nValue-exchange line: 'Tell us what matters and we'll cut everything else.'",
          healthy:
            "Every field maps directly to a segment or send-frequency rule the ESP can act on the same day.",
          unhealthy:
            "A generic 'update your preferences' field with no options, which collects nothing usable and still reads as a stalling tactic before unsubscribe.",
          interpret:
            "A preference center only earns its place if every field it collects changes what the subscriber receives next.",
          soWhat: [
            {
              symptom: "Unsubscribe rate rising faster than list growth",
              action: "Ship the preference center as a link inside the unsubscribe confirmation page, not just the footer",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-progressive-follow-up",
          concept: "Progressive Profiling",
          lessonAnchor: "3-progressive-profiling",
          theoryRecap:
            "Progressive profiling spreads data collection across multiple touchpoints instead of asking everything at signup, one question in the welcome series, another after a first action.",
          question:
            "The preference center only captured topic and frequency. What's the next single question to ask, and where does it go?",
          toolName: "Klaviyo",
          where: "Add a one-question follow-up as a Klaviyo flow email triggered by 'preference center submitted.'",
          procedure: [
            "Pick the single highest-value unanswered question (e.g. 'What are you saving for?')",
            "Schedule it 5-7 days after the preference center submission, not immediately",
            "Map the answer to a Klaviyo custom property that a segment can filter on",
          ],
          outputSample:
            "FLOW: Preference Center Submitted -> wait 5 days -> Email: 'One quick thing' -> single reply-to-answer question -> tags contact with savings_goal property",
          healthy:
            "The follow-up question arrives after trust is already established and answers a gap the first form left open.",
          unhealthy:
            "Sending the follow-up question the same day, which reads as more friction stacked onto friction the subscriber just tried to reduce.",
          interpret:
            "Progressive profiling works because it's paced, not because it asks fewer questions overall.",
          soWhat: [
            {
              symptom: "Preference center completion is high but profile data stays thin",
              action: "Add one progressive-profiling touchpoint per lifecycle stage instead of expanding the original form",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Forms", role: "Draft and test the preference center field structure", why: "Free, no account setup, fast to iterate on copy", required: true, lastVerified: "2026-08" },
          { toolName: "Klaviyo", role: "Turn preference answers into flow triggers and segments", why: "Free tier supports flows and custom properties up to 250 contacts", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A drafted preference center form plus a one-question progressive-profiling follow-up flow, both mapped to ESP properties.",
      sampleOutput:
        "Wise, Preference Center Draft (excerpt)\n\nTopics: [ ] Transfer rate alerts [ ] New country launches [ ] Multi-currency account tips\nFrequency: Weekly / Monthly / Major updates only\nValue-exchange line: 'Pick your topics, we'll skip the rest.'\n\nFollow-up flow (Day 5): 'Which currency do you send most often?' -> tags contact with primary_currency property",
      successCriteria: [
        "Every preference field maps to a real segment or send rule, not a cosmetic dropdown",
        "The follow-up question is scheduled after the initial form, not bundled into it",
        "A clear value-exchange line appears before the fields, not after",
      ],
      portfolioReady: true,
    },
    {
      id: "zero-party-data-collection-form-audit",
      tier: "core",
      archetype: "audit",
      title: "The Value-Exchange Audit: Fixing a Zero-Party Data Form That Isn't Converting",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a supplied onboarding quiz draft, apply the lesson's collection-workflow framework to diagnose why completion is low and rewrite the weak points.",
      companyId: "policybazaar",
      scenario:
        "You're the CRM analyst at PolicyBazaar reviewing a nine-question insurance-recommendation quiz. Completion sits at 22%, well below the lesson's 61% benchmark.",
      brief:
        "Audit the supplied quiz draft against the value-exchange and friction-budget rules, then rewrite the sections that are failing.",
      mode: "diagnostic",
      conceptsCovered: ["Interactive Onboarding Quizzes", "Value Exchange", "Common Mistakes"],
      steps: [
        {
          stepId: "step-1-friction-audit",
          concept: "Interactive Onboarding Quizzes",
          lessonAnchor: "1-interactive-onboarding-quizzes",
          theoryRecap:
            "Quizzes should run five to seven questions; the lesson notes every additional step past that cuts completion by roughly 10%.",
          question:
            "The supplied quiz has 9 questions before a recommendation appears. Which two are safe to cut or move to progressive profiling instead?",
          toolName: "Typeform",
          where: "Open the quiz build in Typeform, review the question list and drop-off report per question.",
          procedure: [
            "List all 9 questions in the order they appear",
            "Flag any question whose answer doesn't change which policy gets recommended",
            "Cut or defer flagged questions to a post-quiz follow-up instead of the main flow",
          ],
          outputSample:
            "QUIZ AUDIT (9 questions)\nQ4 'What's your annual income bracket?' -> does not change recommendation -> DEFER\nQ7 'How did you hear about us?' -> marketing-only, not personalization -> CUT\nRemaining: 7 questions, all affect the recommended plan",
          healthy: "Every remaining question directly changes the output the subscriber sees at the end.",
          unhealthy: "Questions that exist for internal reporting sit inside the main flow, adding friction without adding personalization.",
          interpret: "A question earns its place in the main flow only if the answer changes what the user gets back.",
          soWhat: [
            { symptom: "Completion rate under 30%", action: "Cut every question that doesn't change the recommendation, move it to a later touchpoint", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-value-exchange-audit",
          concept: "Value Exchange",
          lessonAnchor: "defining-the-data-spectrum",
          theoryRecap:
            "A value exchange means the subscriber gets something immediate and tangible in return, a recommendation, a discount, a custom guide, not just a 'thank you.'",
          question:
            "The quiz ends with 'Thanks, our team will contact you.' Does that satisfy the value-exchange requirement?",
          toolName: "Typeform",
          where: "Review the quiz's final results screen and the confirmation email it triggers.",
          procedure: [
            "Check whether the results screen shows a specific recommendation or a generic thank-you",
            "If generic, rewrite the results screen to show the actual recommended plan and premium range immediately",
            "Confirm the confirmation email repeats the same specific recommendation, not a form-received notice",
          ],
          outputSample:
            "BEFORE: 'Thanks! Our team will contact you within 24 hours.'\nAFTER: 'Based on your answers, a family floater plan covering 4 members fits your profile. Estimated premium: ₹9,200/year.'",
          healthy: "The subscriber sees a specific, personalized output within seconds of finishing, not a promise of future contact.",
          unhealthy: "A generic thank-you screen, which breaks the value-exchange contract the quiz implicitly made.",
          interpret: "No immediate, specific value at the end means the quiz collected data without paying for it.",
          soWhat: [
            { symptom: "High quiz starts but low completion on the final screen", action: "Replace the generic thank-you with the actual computed recommendation", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Typeform", role: "Review and rebuild the quiz flow and results screen", why: "Free tier supports up to 10 questions and logic branching", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A revised quiz question list (7 or fewer core questions) and a rewritten results screen showing a specific, immediate recommendation.",
      sampleOutput:
        "Adyen, Merchant Onboarding Quiz Audit (excerpt)\n\nCUT: 'What's your company size?' (internal reporting only, no output impact)\nKEPT: 'What's your primary sales channel?' (changes the recommended payment method mix)\nResults screen rewrite: 'Based on your answers, a card-present + online hybrid setup fits your business. Estimated integration time: 3 weeks.'",
      successCriteria: [
        "Core quiz questions reduced to 7 or fewer, each justified by its effect on the output",
        "Results screen shows a specific recommendation, not a generic acknowledgment",
        "Deferred questions are moved to a documented progressive-profiling follow-up, not deleted outright",
      ],
      portfolioReady: true,
    },
  ],
  "gdpr-can-spam": [
    {
      id: "gdpr-can-spam-footer-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Spot the Violations in This Email Footer",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic but realistic commercial email footer and opt-in flow, identify every CAN-SPAM and GDPR compliance defect using the lesson's checklists.",
      companyId: "adyen",
      scenario:
        "You're reviewing a draft promotional email for Adyen's merchant newsletter before it goes to a list that includes both US and EU subscribers.",
      brief: "Find every compliance defect in the supplied footer and sign-up flow, and rank them by legal severity.",
      mode: "teardown",
      conceptsCovered: ["How CAN-SPAM Works", "How GDPR Works"],
      teardownItems: [
        {
          itemId: "item-1-footer",
          specimen:
            "EMAIL FOOTER (as sent):\n\nAdyen Merchant Updates\n\nYou're receiving this because you're an Adyen customer.\n\n[Unsubscribe] (link goes to a 'confirm your email' page requiring login)\n\n--\nAdyen B.V.",
          specimenSource: "synthetic-realistic",
          prompt: "List every defect in this footer against the CAN-SPAM and GDPR requirements from the lesson, then rank by severity.",
          answerKey: [
            {
              defect: "No physical postal address in the footer",
              severity: "critical",
              whyItMatters: "CAN-SPAM requires a street address, P.O. Box, or registered agent address in every commercial email; this is one of the most commonly skipped requirements and carries the same per-email fine exposure as a missing unsubscribe link.",
              lessonRef: "How CAN-SPAM Works",
              owner: "either",
            },
            {
              defect: "Unsubscribe link requires login to confirm",
              severity: "critical",
              whyItMatters: "CAN-SPAM requires opt-out to take no more effort than a reply email or a single web page visit; requiring login adds a barrier that makes the mechanism non-compliant.",
              lessonRef: "How CAN-SPAM Works",
              owner: "developer",
            },
            {
              defect: "No mention of consent basis or ability to withdraw consent for EU subscribers",
              severity: "critical",
              whyItMatters: "GDPR requires subscribers be able to withdraw consent at any time, easily; a footer that only offers a login-gated unsubscribe doesn't meet that bar for EU recipients on the same list.",
              lessonRef: "How GDPR Works",
              owner: "either",
            },
          ],
          distractors: [
            "The From name says 'Adyen Merchant Updates' instead of a person's name (not a violation, CAN-SPAM only requires the sender be accurately identified, not that it be a named individual)",
            "The email doesn't include a company logo (branding choice, not a legal requirement under either law)",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-signup-flow",
          specimen:
            "SIGN-UP FORM (as built):\n\n[Checkout page]\nEmail: ____________\n[X] By completing checkout, you agree to our Terms of Service and to receive marketing emails.\n(checkbox is pre-ticked, bundled into the required Terms of Service agreement)",
          specimenSource: "synthetic-realistic",
          prompt: "This checkout form is the only place EU merchants provide their email. List the GDPR consent defects.",
          answerKey: [
            {
              defect: "Checkbox is pre-ticked by default",
              severity: "critical",
              whyItMatters: "GDPR requires unambiguous consent through positive action; pre-ticked boxes are explicitly invalid and regulators treat them as no consent at all.",
              lessonRef: "How GDPR Works",
              owner: "developer",
            },
            {
              defect: "Marketing consent is bundled with Terms of Service agreement",
              severity: "critical",
              whyItMatters: "Consent must be freely given and specific, not bundled into a condition required to complete a purchase.",
              lessonRef: "How GDPR Works",
              owner: "either",
            },
            {
              defect: "No consent timestamp, IP address, or form version is logged",
              severity: "moderate",
              whyItMatters: "Proving consent is the marketer's burden; without a logged record, there's no defense if a regulator asks for proof.",
              lessonRef: "How GDPR Works",
              owner: "developer",
            },
          ],
          distractors: [
            "The email field doesn't have placeholder text (a UX nicety, not a compliance requirement)",
            "The form uses a single-column layout (styling choice, unrelated to consent validity)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each defect, its severity, and its lesson reference in a shared tracker", why: "Free, easy to hand off to legal or dev for prioritization", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A severity-ranked list of every compliance defect found in the footer and sign-up flow, with a fix owner assigned to each.",
      sampleOutput:
        "Nubank, Compliance Teardown Log (excerpt)\n\nCRITICAL: Pre-ticked marketing checkbox bundled with ToS -> owner: developer -> fix: separate unticked checkbox with specific wording\nCRITICAL: No physical address in footer -> owner: either -> fix: add registered agent address\nMODERATE: No consent log -> owner: developer -> fix: capture timestamp + IP on submit",
      successCriteria: [
        "Identifies all 3 critical defects in the footer and all 3 in the sign-up flow",
        "Correctly rejects both distractors as non-violations",
        "Assigns a plausible fix owner (you/developer/either) to each real defect",
      ],
      portfolioReady: true,
    },
    {
      id: "gdpr-can-spam-list-segmentation-audit",
      tier: "core",
      archetype: "audit",
      title: "The Global List Audit: Which Subscribers Need GDPR Consent You Don't Have",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a supplied subscriber list with country and consent-source data, apply the lesson's opt-out-vs-opt-in framework to flag every subscriber sitting on an invalid legal basis.",
      companyId: "wise",
      scenario:
        "You're auditing Wise's combined US/EU newsletter list before a compliance review. The list was built from a single global opt-out signup form.",
      brief: "Segment the supplied subscriber sample by country and consent source, then flag every row that violates GDPR's opt-in requirement.",
      mode: "diagnostic",
      conceptsCovered: ["The Key Difference: Opt-Out vs. Opt-In", "Common Mistakes That Get Marketers Fined"],
      steps: [
        {
          stepId: "step-1-geo-segment",
          concept: "The Key Difference: Opt-Out vs. Opt-In",
          lessonAnchor: "the-key-difference-opt-out-vs-opt-in",
          theoryRecap:
            "CAN-SPAM lets you email first and requires an opt-out; GDPR requires opt-in consent before the first send. Where the subscriber lives, not where the company is registered, determines which law applies.",
          question:
            "The supplied sample has 40 rows from a single global opt-out list. How many rows are EU/UK subscribers who never gave opt-in consent?",
          toolName: "Google Sheets",
          where: "Import the subscriber sample, filter by country column, then cross-check consent_source against 'opt-out-implied'.",
          procedure: [
            "Filter the list by country: US, EU/UK, other",
            "For every EU/UK row, check the consent_source field for an explicit opt-in event",
            "Flag any EU/UK row with consent_source = 'added via opt-out signup' as non-compliant",
          ],
          outputSample:
            "SEGMENT RESULTS (40 rows)\nUS: 22 rows, opt-out compliant if unsubscribe link present\nEU/UK: 14 rows, consent_source = 'opt-out signup' for all 14 -> FLAGGED\nOther: 4 rows, CASL applies, check implied-consent expiry",
          healthy: "Every EU/UK row traces back to a logged, specific, unticked opt-in event.",
          unhealthy: "EU/UK subscribers added through the same opt-out form as US subscribers, with no separate consent record.",
          interpret: "Running one global opt-out list is the most common compliance mistake for US-based email marketers; it silently puts every EU subscriber on an invalid basis.",
          soWhat: [
            { symptom: "EU/UK subscribers show no opt-in consent record", action: "Suppress those rows from sending immediately and route them through a re-consent campaign", effort: "half day" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-remediation-plan",
          concept: "Common Mistakes That Get Marketers Fined",
          lessonAnchor: "common-mistakes-that-get-marketers-fined",
          theoryRecap:
            "Not logging consent is a common, expensive mistake because proving consent is the marketer's burden, not the regulator's.",
          question:
            "For the 14 flagged EU/UK rows, what's the compliant remediation path, delete them or re-consent them?",
          toolName: "Klaviyo",
          where: "Build a suppression segment for the flagged rows, then draft a re-consent email as a separate Klaviyo flow.",
          procedure: [
            "Suppress the 14 flagged rows from all marketing sends immediately",
            "Draft a re-consent email with a specific, unticked, single-action opt-in link",
            "Log the timestamp, IP, and form wording for anyone who re-consents; delete anyone who doesn't respond within a set window",
          ],
          outputSample:
            "REMEDIATION PLAN\nStep 1: Suppress 14 rows (immediate)\nStep 2: Send re-consent email, single 'Yes, keep me subscribed' link, unticked\nStep 3: Log consent_timestamp + ip_address for responders; delete non-responders after 30 days",
          healthy: "Flagged subscribers either give fresh, logged opt-in consent or are removed from the list entirely.",
          unhealthy: "Leaving flagged subscribers on the list because deleting them 'hurts the numbers.'",
          interpret: "A list that shows growth built on unlawful consent isn't an asset; it's fine exposure waiting for an audit.",
          soWhat: [
            { symptom: "Compliance review finds ungated EU subscribers", action: "Run the suppress-then-re-consent flow before the next scheduled send, not after", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Segment the subscriber sample by country and consent source", why: "Free, fast filtering for a compliance audit of this size", required: true, lastVerified: "2026-08" },
          { toolName: "Klaviyo", role: "Build the suppression segment and the re-consent flow", why: "Free tier supports segments and flows up to 250 contacts", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A segmented audit of the subscriber sample flagging every non-compliant EU/UK row, plus a suppress-then-re-consent remediation plan.",
      sampleOutput:
        "PolicyBazaar, List Audit (excerpt)\n\nEU/UK flagged rows: 9 of 35\nRemediation: suppressed immediately, re-consent email scheduled for 2026-08-20, non-responders deleted 2026-09-19",
      successCriteria: [
        "Correctly identifies every EU/UK row lacking a logged opt-in event",
        "Proposes suppression before re-consent, not re-consent while still sending",
        "Remediation plan includes a specific non-responder deletion window",
      ],
      portfolioReady: true,
    },
  ],

  "reengagement": [
    {
      id: "reengagement-sequence-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Draft the 4-Email Sequence: From Value Reminder to Sunset",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Draft the subject line, angle, and CTA for each of the 4 emails in a re-engagement sequence, in the correct order, with no discount on email 1.",
      companyId: "robinhood",
      scenario:
        "You're the lifecycle marketer at Robinhood building the re-engagement flow for traders who haven't logged in or placed a trade in 90 days.",
      brief:
        "Follow the lesson's Day 0/7/14/21 escalation exactly: value first, incentive second, preference third, sunset last.",
      mode: "build",
      conceptsCovered: [
        "Escalating a re-engagement sequence from value to incentive to preference to sunset",
      ],
      steps: [
        {
          stepId: "step-1-sequence-draft",
          concept:
            "Escalating a re-engagement sequence from value to incentive to preference to sunset",
          lessonAnchor: "how-the-sequence-works",
          theoryRecap:
            "The lesson's 4-email escalation gives each email a single job: value reminder (Day 0), soft incentive (Day 7), preference center (Day 14), sunset stay-or-leave (Day 21), and a discount can never lead email 1.",
          question:
            "For a 90-day-dormant Robinhood trader segment, what should each of the 4 emails say, in what order, so email 1 never opens with a discount?",
          toolName: "Google Sheets",
          where: "A blank Google Sheet with 4 rows, one per email.",
          procedure: [
            "Create 4 rows labeled Email 1 through Email 4 with a Day column (0, 7, 14, 21)",
            "Write email 1 as a pure value reminder referencing what the trader missed, no offer, no discount",
            "Write email 2 as a single time-limited incentive with one CTA button",
            "Write email 3 as a preference-center offer (fewer emails, digest, category-only)",
            "Write email 4 as a sunset stay-or-leave message sent from a real person's name",
          ],
          outputSample:
            "Day 0: \"Here's what moved in your watchlist while you were away\" -- no offer\nDay 7: \"10% off your next options contract fee, ends Friday\" -- single CTA\nDay 14: \"Too many market alerts? Pick your frequency\" -- preference link\nDay 21: \"This is goodbye, unless you tap to stay\" -- from \"Jordan at Robinhood\"",
          healthy:
            "Email 1 has zero discount language and email 4 uses a real first name in the From field.",
          unhealthy:
            "Email 1 opens with '20% off options fees, come back now', which trains dormant traders to wait for a discount before ever opening a regular email again.",
          interpret:
            "The order is not arbitrary, leading with an incentive teaches the exact behavior the sequence is trying to break.",
          soWhat: [
            {
              symptom: "Draft email 1 currently includes a discount code",
              action: "Move the discount to email 2 and rewrite email 1 as a pure value recap",
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
            role: "Draft and sequence the 4 emails",
            why: "No account needed, fast to iterate on copy angles",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Automate the 4-email sequence to fire on the 90-day inactivity trigger",
            why: "Turns the draft into a live behavior-triggered flow instead of a manual batch send",
            required: false,
            fallback: "Google Sheets draft handed to whoever owns the ESP",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Klaviyo Flows is only needed once you're ready to automate the trigger; the draft itself only needs a spreadsheet.",
      },
      deliverable:
        "A 4-row sequence draft (Day 0/7/14/21) with subject line, angle, and CTA for each email, ready to hand to whoever builds the automation.",
      sampleOutput:
        "Grab, dormant-rider re-engagement draft (excerpt)\n\nDay 0: \"Your favorite drivers missed you\" -- no offer, 3 nearby promos shown\nDay 7: \"Free delivery on your next 3 orders, ends Sunday\" -- single CTA\nDay 14: \"Fewer notifications? Choose your ride alerts\" -- preference link\nDay 21: \"We're removing you from ride offers unless you tap stay\" -- from \"Mei at Grab\"",
      successCriteria: [
        "Email 1 contains no discount or incentive language",
        "Email 4 uses a real person's name in the From field, not a brand name",
        "All 4 emails are in the correct Day 0/7/14/21 order",
      ],
      portfolioReady: true,
      stretch:
        "Add a 5th SMS touch on Day 10 for subscribers who haven't clicked email 2, matching the lesson's multi-channel section.",
    },
    {
      id: "reengagement-tier-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Tiering Call: Auditing a Dormant Rider Segment Before Sending",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a dormant-rider export with last-active dates, correctly bucket contacts into recently-lapsed, mid-dormant, and deep-sleeper tiers and pick the right entry point for each.",
      companyId: "grab",
      scenario:
        "You're the CRM analyst at Grab auditing a dormant-rider export before launching the quarterly re-engagement sequence.",
      brief:
        "Apply the lesson's 3-tier segmentation, not everyone gets the same entry point into the sequence.",
      mode: "diagnostic",
      conceptsCovered: ["Segmenting dormant contacts by lapse depth before sending"],
      steps: [
        {
          stepId: "step-1-tier-audit",
          concept: "Segmenting dormant contacts by lapse depth before sending",
          lessonAnchor: "segmenting-before-you-send",
          theoryRecap:
            "The lesson splits dormant contacts into recently lapsed (60-90 days), mid-dormant (90-180 days), and deep sleepers (180+ days), each needing a different entry point and incentive strength.",
          question:
            "Given last-active dates for 20 dormant riders, which tier does each fall into, and which ones should skip straight to a re-permission email instead of the full 4-email sequence?",
          toolName: "Google Sheets",
          where: "The dormant-rider export imported into Google Sheets with a Last Active column.",
          procedure: [
            "Import the export and add a Days Since Active column using TODAY() minus Last Active",
            "Bucket each row into recently lapsed, mid-dormant, or deep sleeper using the lesson's day thresholds",
            "Flag deep sleepers (180+ days) for a single re-permission email instead of the full sequence",
            "Confirm mid-dormant riders are scheduled to see their strongest incentive by email 2, not email 3",
          ],
          outputSample:
            "RECENTLY LAPSED (7 riders, 60-90 days)\n  Priya, 72 days -- full 4-email sequence, value-led\nMID-DORMANT (9 riders, 90-180 days)\n  Farid, 134 days -- full sequence, incentive moved to email 2\nDEEP SLEEPER (4 riders, 210+ days)\n  Amara, 244 days -- single re-permission email only, not the full sequence",
          healthy:
            "Deep sleepers are routed to a single re-permission email, not the full 4-email sequence, which the lesson flags as a low-pull-rate waste of sends.",
          unhealthy:
            "Every dormant rider, regardless of how long they've been gone, gets the exact same 4-email sequence starting at the exact same offer strength.",
          interpret:
            "Lapse depth changes both the entry point and the incentive timing, not just the subject line.",
          soWhat: [
            {
              symptom: "Deep sleepers are queued into the standard 4-email sequence",
              action: "Reroute anyone past 180 days to a single re-permission send instead",
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
            role: "Bucket riders into tiers and flag re-permission-only contacts",
            why: "Handles date math and filtering without any paid tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Klaviyo Flows",
            role: "Route each tier automatically into its correct sequence entry point",
            why: "Removes the manual re-tagging step every time a rider crosses a threshold",
            required: false,
            fallback: "Rebucket manually in Google Sheets on a weekly cadence",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Klaviyo Flows automates the routing once the tiers are validated; the audit itself only needs a spreadsheet.",
      },
      deliverable:
        "A tiered dormant-rider list (recently lapsed / mid-dormant / deep sleeper) with each rider's correct sequence entry point flagged.",
      sampleOutput:
        "Snowflake, dormant free-trial user tiering (excerpt)\n\nRECENTLY LAPSED (65 users, 60-90 days)\n  full onboarding-nudge sequence, value-led\nDEEP SLEEPER (12 users, 190+ days)\n  single re-permission email only -- \"still want product updates from Snowflake?\"",
      successCriteria: [
        "All riders correctly bucketed by the lesson's day thresholds",
        "Deep sleepers routed to a re-permission email, not the full sequence",
        "Mid-dormant riders have their incentive moved to email 2",
      ],
      portfolioReady: true,
    },
  ],
};
