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
};
