import type { Project } from "@/lib/projects/types";

export const EVENTS_EXPERIENTIAL_PROJECTS: Record<string, Project[]> = {
  "events-marketing-101": [
    {
      id: "event-portfolio-goal-audit",
      tier: "core",
      archetype: "audit",
      title: "The Portfolio Audit: Does Freshworks' Event Mix Match Its Goals",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given Freshworks' stated Q3 goals and its current event budget split across the four formats, apply the goal-to-format framework to find which allocations are misaligned and what should be funded instead.",
      companyId: "freshworks",
      scenario:
        "You're a growth marketing analyst at Freshworks, the Chennai-founded, Nasdaq-listed B2B SaaS company (FRSH). The events team has drafted next quarter's $400K budget split and needs your sign-off before it goes to the CMO.",
      brief:
        "Compare the stated top goal against the actual budget split, flag the misaligned allocation, and recommend where the freed-up budget should move.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching event format to the stated marketing goal",
        "Reading cost-per-lead as a stage-of-funnel signal, not a pure efficiency score",
      ],
      steps: [
        {
          stepId: "step-1-goal-format-match",
          concept: "Matching event format to the stated marketing goal",
          lessonAnchor: "choosing-the-right-format-for-your-goal",
          theoryRecap:
            "The lesson maps four needs to four formats: pipeline volume fast to trade shows, retaining and expanding existing accounts to owned events, breaking into named accounts to field events, and brand awareness to experiential.",
          question:
            "Freshworks' stated top goal this quarter is 'retain and expand our top 50 enterprise accounts,' but 68% of the $400K budget ($272K) is allocated to trade-show sponsorships and only 12% ($48K) to the owned customer event. Which allocation is misaligned, and what should the freed-up budget fund instead?",
          toolName: "Google Sheets",
          where: "Import the budget-goals table and add a 'goal-fit' column next to each line item.",
          procedure: [
            "Import the budget table: format, dollar amount, % of total",
            "Next to each row, write the one goal the lesson says that format is built for",
            "Compare each format's built-for goal against the stated Q3 goal ('retain and expand top 50 accounts')",
            "Flag any row whose built-for goal does not match the stated goal, and note the dollar amount at stake",
          ],
          outputSample:
            "Format            Budget    % of total   Built for (lesson)         Fits stated goal?\nTrade show        $272,000   68%         Pipeline volume, broad reach   NO\nOwned event        $48,000    12%         Retain/expand existing         YES (underfunded)\nField events        $56,000    14%         Named-account ABM               PARTIAL\nExperiential         $24,000    6%          Brand memory                    NO",
          healthy:
            "The largest line item funds the format built for this quarter's actual goal, retention and expansion.",
          unhealthy:
            "68% of the budget sits in the format built for broad new-pipeline reach while the format built for account retention is the smallest line item.",
          interpret:
            "A trade show can still support account expansion at the margins, but it is not the primary lever the lesson assigns to retention. The $272K is doing the wrong job for the goal it is supposed to serve.",
          soWhat: [
            {
              symptom: "Owned-event budget is the smallest line item despite being the goal-matched format",
              action: "Recommend shifting at least $100K from trade-show sponsorships to expand the owned customer event",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cpl-context",
          concept: "Reading cost-per-lead as a stage-of-funnel signal, not a pure efficiency score",
          lessonAnchor: "the-four-event-types",
          theoryRecap:
            "The lesson notes trade shows return roughly $20.98 per $1 spent at $112 cost per lead, but also that owned events trade reach for depth, and experiential trades lead volume for brand memory.",
          question:
            "The CMO points out that trade-show cost-per-lead ($112) beats the owned event's cost-per-attendee ($850) by a wide margin, and asks why that alone doesn't settle the allocation debate. What's the answer?",
          toolName: "Google Sheets",
          where: "Add a 'what this number actually measures' column next to the CPL comparison.",
          procedure: [
            "List the two costs side by side: trade-show CPL ($112) and owned-event cost-per-attendee ($850)",
            "Write what each number is actually optimizing for (new-lead volume vs. depth with an existing account)",
            "State why comparing them directly is an apples-to-oranges error for this quarter's goal",
          ],
          outputSample:
            "Metric                     Value    Optimizes for\nTrade-show CPL             $112     New leads at volume\nOwned-event cost/attendee   $850     Depth with an existing account\n\nVerdict: not comparable for a retention goal, one measures new-lead efficiency, the other measures relationship depth.",
          healthy:
            "The team picks the metric that matches the goal (retention lift, expansion revenue) before comparing costs across formats.",
          unhealthy:
            "A lower cost-per-lead number is used to justify cutting the owned event, even though the owned event isn't trying to generate leads.",
          interpret:
            "Cost-per-lead is a trade-show-native metric. Applying it to an owned event judges a retention tool by an acquisition yardstick.",
          soWhat: [
            {
              symptom: "Leadership compares CPL across formats with different jobs",
              action: "Bring a goal-appropriate metric (expansion revenue per attendee) to the next budget review instead of CPL",
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
            role: "Build the goal-fit comparison table and flag the misaligned budget line",
            why: "Free, no account friction, sufficient for a budget-and-goal comparison table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page budget review flagging the misaligned allocation, the dollar amount at stake, and a specific reallocation recommendation.",
      sampleOutput:
        "Zendesk Q3 Event Budget Review (excerpt)\n\n" +
        "STATED GOAL: Expand top 40 enterprise accounts\n\n" +
        "MISALIGNED: Experiential activations, $85,000 (22% of budget)\n" +
        "  Built for: brand memory / awareness, not account expansion\n" +
        "  Recommendation: cut to $20,000, redirect $65,000 to field/regional dinners\n\n" +
        "UNDERFUNDED: Field/regional events, $40,000 (10% of budget)\n" +
        "  Built for: named-account, high-intent conversations, exact goal match\n" +
        "  Recommendation: raise to $105,000 using the redirected experiential budget",
      successCriteria: [
        "Correctly identifies the trade-show line item as misaligned with a retention-focused goal",
        "Explains why comparing CPL across formats with different jobs is a metric error",
        "Recommends a specific dollar reallocation, not just a general direction",
      ],
      portfolioReady: true,
    },
    {
      id: "quarterly-event-portfolio-plan-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Asset: A One-Page Event Portfolio Plan for Zendesk",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Produce a one-page event portfolio plan that allocates a fixed budget across the four event formats against three named business goals, with one success metric defined per format before any event is booked.",
      companyId: "zendesk",
      scenario:
        "You're a junior events marketer at Zendesk, the customer-engagement SaaS company. Leadership gave you a $500K quarterly budget and three goals, no format list, and asked for a one-page plan before they'll approve spend.",
      brief:
        "Turn three business goals and a fixed budget into a portfolio plan: which formats, how much each, and the one metric that proves each line item worked.",
      mode: "build",
      conceptsCovered: [
        "Building a goal-to-format budget allocation",
        "Writing the one-metric-per-event success framework",
      ],
      steps: [
        {
          stepId: "step-1-allocate-by-goal",
          concept: "Building a goal-to-format budget allocation",
          lessonAnchor: "choosing-the-right-format-for-your-goal",
          theoryRecap:
            "The lesson's four questions, need pipeline volume fast, need to retain and expand, need to break into named accounts, need brand awareness, each point to one format: trade show, owned event, field event, or experiential.",
          question:
            "Zendesk's three stated goals this quarter are: (1) generate new pipeline in the mid-market segment, (2) retain and expand its top 30 enterprise accounts, (3) break into 8 named target accounts in a new vertical. With $500K, how much goes to each format and why?",
          toolName: "Google Sheets",
          where: "Build a 4-row table (one row per format) with a budget column and a 'goal it serves' column.",
          procedure: [
            "List the three goals in one column",
            "Match each goal to its lesson-assigned format (pipeline volume → trade show, retain/expand → owned, named accounts → field)",
            "Assign a defensible dollar amount to each matched format, leaving a small experiential line for brand awareness as the fourth goal-adjacent bet",
            "Total the allocation and confirm it sums to $500K",
          ],
          outputSample:
            "Goal                                  Format        Budget\nNew mid-market pipeline               Trade show     $220,000\nRetain/expand top 30 accounts         Owned event     $180,000\nBreak into 8 named target accounts    Field events    $75,000\nBrand awareness in new vertical        Experiential    $25,000\nTOTAL                                                  $500,000",
          healthy: "Every dollar traces back to a specific stated goal and its lesson-matched format.",
          unhealthy: "A budget split by round numbers or last year's spend, with no goal named next to any line item.",
          interpret:
            "A portfolio plan is not four unrelated bets, it's three goals each getting the format built for them, plus a small deliberate brand-awareness line.",
          soWhat: [
            {
              symptom: "Leadership can't tell which line item serves which goal",
              action: "Add the goal column to the budget table before presenting it",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-define-success-metric",
          concept: "Writing the one-metric-per-event success framework",
          lessonAnchor: "choosing-the-right-format-for-your-goal",
          theoryRecap:
            "The lesson's Callout instructs writing down the one metric that would make an event a win, pipeline, retention, or brand lift, before booking anything.",
          question:
            "For each of the four budget lines above, what single metric proves that line item worked, and what number counts as a win?",
          toolName: "Google Sheets",
          where: "Add a 'success metric' and 'target number' column to the same table.",
          procedure: [
            "For the trade-show line, define a pipeline-dollar target tied to the mid-market goal",
            "For the owned-event line, define a retention or expansion-revenue target tied to the top-30 accounts",
            "For the field-events line, define a named-account meetings-booked target",
            "For the experiential line, define a brand-lift or impressions target, explicitly not a lead-volume target",
          ],
          outputSample:
            "Format        Success metric                  Target\nTrade show    New mid-market pipeline $        $1.1M sourced\nOwned event    Expansion revenue from top 30    $400K upsell\nField events    Named-account meetings booked    6 of 8 accounts\nExperiential    Branded social impressions       2M impressions",
          healthy: "Every line item has exactly one metric and one number defined before the event is booked.",
          unhealthy: "The experiential line is graded on leads generated, the same metric as the trade show.",
          interpret:
            "Grading every format on the same metric erases the reason the portfolio has four formats in the first place.",
          soWhat: [
            {
              symptom: "Post-event reporting compares all four formats on lead count",
              action: "Report each line item against its own pre-defined metric, not a shared lead-count scoreboard",
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
            role: "Build the budget-and-metric one-pager",
            why: "Free, sufficient for a single table leadership can review in one sitting",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot Marketing Hub",
            role: "Track actual pipeline/revenue against each line item's target once events run",
            why: "Attaches real campaign performance data to each budget line for the post-quarter review",
            required: false,
            fallback: "Google Sheets with manual entry from each event's registration and CRM exports",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path (Sheets) is complete for planning and approval. A paid CRM/marketing platform only helps once events are running and you need automated actual-vs-target tracking.",
      },
      deliverable:
        "A one-page event portfolio plan: four budget lines, each tied to a named goal and a single pre-defined success metric with a target number.",
      sampleOutput:
        "Chewy, Q4 Event Portfolio Plan (excerpt)\n\n" +
        "GOAL: Grow subscription reorders among lapsed pet-supply customers\n" +
        "  Format: Field/regional pop-up sampling events, $60,000\n" +
        "  Success metric: reorder rate among sampled customers within 30 days\n" +
        "  Target: 18%\n\n" +
        "GOAL: Retain top pet-hospital B2B partners\n" +
        "  Format: Owned partner summit, $90,000\n" +
        "  Success metric: partner contract renewal rate\n" +
        "  Target: 90%",
      successCriteria: [
        "Every budget line is tied to exactly one of the three stated goals",
        "Every budget line has exactly one success metric and one numeric target",
        "The total allocation sums to the full $500K budget",
      ],
      portfolioReady: true,
    },
  ],
  "trade-show-strategy": [
    {
      id: "trade-show-booth-script-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: A HelloFresh Booth Banner and Opening Line",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a draft booth banner and a staff opening line written the night before a trade show, find the defects against the lesson's walk-by and qualifying-question standards.",
      companyId: "hellofresh",
      scenario:
        "You're reviewing HelloFresh's draft booth materials for an upcoming food-industry trade show, the night before print deadline, before they go to the sign vendor.",
      brief: "Find the defects in the banner headline and the staff opening line, and separate them from plausible-but-wrong complaints.",
      mode: "teardown",
      conceptsCovered: [
        "Booth Design That Actually Pulls Foot Traffic",
        "Staffing: Qualifiers, Not Greeters",
      ],
      teardownItems: [
        {
          itemId: "item-1-banner-headline",
          specimen:
            'Draft banner headline (24-foot booth, back wall): "Reimagining Mealtime Through Chef-Curated Culinary Innovation and Farm-to-Table Excellence." Floor plan: an 8-foot reception desk spans the entire booth opening, with product displays behind it.',
          specimenSource: "synthetic-realistic",
          prompt:
            "This banner and floor plan are scheduled to print tomorrow. List the defects against the lesson's booth-design standard, and note which of the listed complaints below are real defects versus plausible-sounding distractions.",
          answerKey: [
            {
              defect:
                "Headline is 10 words of abstract marketing language ('reimagining,' 'culinary innovation,' 'excellence') with no readable answer to 'what do you do' from 20 feet",
              severity: "critical",
              whyItMatters:
                "The lesson defines the booth's job as a three-second headline readable from 20 feet; this headline requires close reading and industry context to parse.",
              lessonRef: "booth-design-that-actually-pulls-foot-traffic",
              owner: "you",
            },
            {
              defect: "An 8-foot reception desk blocks the entire booth opening",
              severity: "critical",
              whyItMatters:
                "The lesson states open, uncluttered floor plans outperform enclosed ones because a visitor needs to see a reason to step in before committing; a full-width desk is a wall by another name.",
              lessonRef: "booth-design-that-actually-pulls-foot-traffic",
              owner: "you",
            },
          ],
          distractors: [
            "The booth is 24 feet wide instead of a round number like 20 or 30",
            "The product displays use the company's brand colors",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-opening-line",
          specimen:
            'Draft staff training script, opening line: "Hi, welcome to HelloFresh! Let me tell you about our meal kits featuring fresh, chef-curated recipes delivered weekly nationwide across all 50 states."',
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the scripted first line every booth staffer is being trained to say. List the defects against the lesson's staffing standard, and note which listed complaint below is a real defect versus a plausible-sounding distraction.",
          answerKey: [
            {
              defect: "Opens with the pitch instead of the visitor's problem",
              severity: "critical",
              whyItMatters:
                "The lesson's staffing rule is 'never open with your pitch, open with their problem'; this script violates it in the very first sentence.",
              lessonRef: "staffing-qualifiers-not-greeters",
              owner: "you",
            },
            {
              defect: "Contains no qualifying question about role, timeline, or fit",
              severity: "moderate",
              whyItMatters:
                "Without a qualifying question, staff cannot tell a browsing visitor from a buyer, which the lesson identifies as the most expensive staffing mistake at a trade show.",
              lessonRef: "staffing-qualifiers-not-greeters",
              owner: "you",
            },
          ],
          distractors: [
            "The greeting says 'Hi' instead of 'Hello'",
            "The script mentions the company name in the first sentence",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Canva",
            role: "Sketch a corrected banner headline and layout based on the teardown findings",
            why: "Free tier covers a single banner mockup with no paid template required",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect list for both specimens, with a corrected banner headline and a corrected staff opening line rewritten against the lesson's standards.",
      sampleOutput:
        "Warby Parker booth teardown (excerpt)\n\n" +
        "ORIGINAL HEADLINE: \"Elevating Eyewear Through Design-Forward Innovation\"\n" +
        "DEFECT: Abstract, not readable from 20 feet, no answer to 'what do you do'\n" +
        "CORRECTED: \"Glasses in 30 Seconds. Try Them On Right Here.\"\n\n" +
        "ORIGINAL OPENING LINE: \"Welcome! Let me tell you about our frames.\"\n" +
        "DEFECT: Opens with pitch, no qualifying question\n" +
        "CORRECTED: \"What brought you to this part of the floor today?\"",
      successCriteria: [
        "Identifies both critical defects in the banner specimen without flagging either distractor",
        "Identifies both defects in the opening-line specimen without flagging either distractor",
        "Rewrites both specimens to correct the identified defects",
      ],
      portfolioReady: true,
    },
    {
      id: "trade-show-live-day-simulation",
      tier: "core",
      archetype: "simulation",
      title: "Simulation: Running Warby Parker's Vision Expo Booth in Real Time",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Make three real-time decisions across a single trade show day, morning traffic, midday staffing, and end-of-day follow-up, and see how each choice compounds into the next stage's outcome.",
      companyId: "warby-parker",
      scenario:
        "You're the on-site marketing lead for Warby Parker's booth at Vision Expo, the optical industry's largest trade show. You have a fixed booth budget and one day on the floor.",
      brief: "Decide how to handle slow morning traffic, midday staff behavior, and end-of-day lead follow-up, and live with each decision's consequence.",
      mode: "simulation",
      conceptsCovered: [
        "Interactive elements pulling foot traffic vs static displays",
        "Qualifying visitors instead of just greeting them",
        "Real-time CRM sync vs the fishbowl trap",
      ],
      stages: [
        {
          stageId: "stage-1-morning-traffic",
          label: "9:00 AM, Slow Morning Traffic",
          elapsed: "0 hours",
          concept: "Interactive elements pulling foot traffic vs static displays",
          lessonAnchor: "booth-design-that-actually-pulls-foot-traffic",
          situation:
            "Doors opened an hour ago. Foot traffic on the floor is steady, but almost nobody is stopping at your booth. The static frame display and standard signage aren't earning a second glance.",
          dashboard: "Visitors passing booth: ~40/hour. Visitors stopping: 2/hour. Budget remaining: $18,000 of $20,000 (day-of contingency fund).",
          spendToDate: "$2,000",
          budgetRemaining: "$18,000",
          decision: {
            prompt: "What do you do about the slow morning traffic?",
            options: [
              {
                id: "add-interactive-tryOn",
                label: "Set up the virtual try-on AR display, already packed as a backup, at the booth's front edge",
                verdict: "optimal",
                outcome:
                  "Visitor stops jump to roughly 9/hour within 30 minutes as passersby stop to try the AR feature before deciding whether to talk to staff.",
                why:
                  "Matches the lesson's documented pattern: interactive elements like AR try-on gave booths a 45% lift in lead capture over static displays.",
                lessonRef: "booth-design-that-actually-pulls-foot-traffic",
                nextStageId: "stage-2-midday-staffing",
              },
              {
                id: "candy-fishbowl",
                label: "Put out a bowl of business cards for a raffle drawing to draw a crowd",
                verdict: "costly",
                outcome:
                  "Stops increase to 15/hour, but almost none of the visitors talk to staff about the product, they drop a card and walk on. The lead list balloons with zero context.",
                why:
                  "This is the exact fishbowl trap the lesson warns produces the worst leads in the industry, zero context, zero consent for follow-up, zero signal on intent.",
                lessonRef: "lead-capture-without-the-fishbowl",
                nextStageId: "stage-2-midday-staffing",
              },
              {
                id: "do-nothing",
                label: "Wait it out, mornings are usually slow at every trade show",
                verdict: "acceptable",
                outcome:
                  "Traffic stays flat through late morning. Nothing is lost, but three hours of floor time produced almost no visitor engagement.",
                why:
                  "Not a mistake exactly, but it wastes a fixable window when a low-cost fix (the AR display) was already available.",
                lessonRef: "booth-design-that-actually-pulls-foot-traffic",
                nextStageId: "stage-2-midday-staffing",
              },
            ],
          },
        },
        {
          stageId: "stage-2-midday-staffing",
          label: "12:30 PM, Peak Traffic, Unqualified Conversations",
          elapsed: "3.5 hours",
          concept: "Qualifying visitors instead of just greeting them",
          lessonAnchor: "staffing-qualifiers-not-greeters",
          situation:
            "The booth is busy now. You notice your newest staffer has been mid-conversation with the same visitor for 12 minutes, walking through the full product pitch, while three other visitors wait unattended nearby.",
          dashboard: "Visitors waiting: 3. Conversations in progress: 1 (12 min, no qualifying question asked yet).",
          spendToDate: "$4,000",
          budgetRemaining: "$16,000",
          decision: {
            prompt: "What do you do about the staffer stuck in a long, unqualified conversation?",
            options: [
              {
                id: "coach-qualifying-question",
                label: "Step in, ask the visitor 'What brought you to this part of the floor?', and redirect the staffer to the waiting visitors",
                verdict: "optimal",
                outcome:
                  "The question reveals the visitor is a student doing research, not a buyer. The conversation wraps in two minutes and the staffer moves to the three waiting visitors.",
                why:
                  "Matches the lesson's staffing rule: open with the visitor's problem, not your pitch, a single qualifying question tells you more in five seconds than a scripted intro tells you in five minutes.",
                lessonRef: "staffing-qualifiers-not-greeters",
                nextStageId: "stage-3-end-of-day-followup",
              },
              {
                id: "let-it-continue",
                label: "Let the conversation run, the staffer seems engaged and it might turn into a sale",
                verdict: "costly",
                outcome:
                  "The conversation runs another 15 minutes. Two of the three waiting visitors leave without talking to anyone. The original visitor never becomes a qualified lead.",
                why:
                  "The lesson identifies exactly this pattern as the most expensive part of a trade show, the wrong person getting 90 seconds with a qualified buyer and getting nothing out of it, here inverted: a qualified staffer wasted on an unqualified visitor while real prospects walk.",
                lessonRef: "staffing-qualifiers-not-greeters",
                nextStageId: "stage-3-end-of-day-followup",
              },
              {
                id: "pull-staffer-immediately",
                label: "Pull the staffer away mid-sentence without addressing the visitor",
                verdict: "acceptable",
                outcome:
                  "The waiting visitors get attention faster, but the abandoned visitor leaves visibly annoyed, a minor but avoidable brand impression cost.",
                why:
                  "Solves the immediate traffic problem but skips the qualifying-question fix, so the same pattern will likely repeat with the next long conversation.",
                lessonRef: "staffing-qualifiers-not-greeters",
                nextStageId: "stage-3-end-of-day-followup",
              },
            ],
          },
        },
        {
          stageId: "stage-3-end-of-day-followup",
          label: "5:30 PM, Floor Closing, Lead Follow-Up Decision",
          elapsed: "8.5 hours",
          concept: "Real-time CRM sync vs the fishbowl trap",
          lessonAnchor: "lead-capture-without-the-fishbowl",
          situation:
            "The floor is closing. You have 140 captured leads, some from badge scans with qualifying notes, some from the earlier fishbowl if you chose it in stage 1. Sales is asking when they'll get the list.",
          dashboard: "Leads captured: 140. Leads with qualifying notes: varies by earlier choices. Convention Wi-Fi has been intermittent all day.",
          spendToDate: "$6,500",
          budgetRemaining: "$13,500",
          decision: {
            prompt: "How do you get the leads to sales?",
            options: [
              {
                id: "realtime-sync-confirmed-offline",
                label: "Confirm the lead-capture app already synced to CRM in real time throughout the day, including its offline queue during the Wi-Fi drops",
                verdict: "optimal",
                outcome:
                  "Sales has all 140 leads, with qualifying notes attached, already in the CRM before the booth is even packed up. Follow-up calls start within hours, not days.",
                why:
                  "Matches the lesson's point that real-time CRM sync matters more than it sounds, a lead logged and followed up within 48 hours converts meaningfully higher than one sitting in a spreadsheet, and that confirming offline capability matters because convention Wi-Fi fails constantly.",
                lessonRef: "lead-capture-without-the-fishbowl",
                nextStageId: "end",
              },
              {
                id: "export-back-at-office",
                label: "Export the leads to a spreadsheet and email it to sales once you're back at the office tomorrow",
                verdict: "costly",
                outcome:
                  "Sales doesn't get the list until 36 hours after the show closes. By the first call, several prospects don't remember which booth they visited.",
                why:
                  "Directly contradicts the lesson's warning that a lead logged and followed up within 48 hours converts at a meaningfully higher rate than one sitting in a spreadsheet until the team is back in the office.",
                lessonRef: "lead-capture-without-the-fishbowl",
                nextStageId: "end",
              },
              {
                id: "partial-manual-export",
                label: "Manually export just the badge-scanned leads now, plan to reconcile the fishbowl cards later",
                verdict: "acceptable",
                outcome:
                  "Sales gets the higher-quality badge-scan leads same-day, but the fishbowl cards (if collected earlier) sit untouched for over a week and mostly go cold.",
                why:
                  "Better than a full delay, but still lets a batch of leads, exactly the ones the lesson warns have zero context, age past the point they're worth calling.",
                lessonRef: "lead-capture-without-the-fishbowl",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track spend-to-date and budget-remaining across the simulated day",
            why: "Free, sufficient to log a running budget total during the exercise",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "HubSpot CRM",
            role: "Model the free tier's lead-capture-to-CRM sync pattern referenced in stage 3",
            why: "Free tier supports real-time lead logging with notes, enough to practice the decision without a paid badge-scan integration",
            required: false,
            fallback: "Google Sheets with a manually logged 'time captured' vs 'time synced' column",
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Salesforce Marketing Cloud",
            role: "Run the real badge-scan-to-CRM integration at an actual trade show",
            why: "Production-grade real-time sync with offline queuing for venues with unreliable Wi-Fi",
            required: false,
            fallback: "HubSpot CRM free tier plus manual badge-scan export",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path is complete for practicing the decision logic in this simulation. A paid CRM/badge-scan integration only matters once you're running a real booth with a physical scanner.",
      },
      deliverable:
        "A three-stage decision log recording each choice made, its verdict, and the outcome, plus a one-paragraph end-of-day summary of total leads captured and their follow-up readiness.",
      sampleOutput:
        "Nubank, Vision Expo simulation run (excerpt)\n\n" +
        "STAGE 1 (Morning): Chose AR try-on display. Verdict: optimal. Visitor stops rose from 2/hour to 9/hour.\n" +
        "STAGE 2 (Midday): Chose to coach the qualifying question. Verdict: optimal. Freed staffer to reach 3 waiting visitors in 4 minutes.\n" +
        "STAGE 3 (End of day): Confirmed real-time CRM sync with offline queue. Verdict: optimal. All 118 leads reached sales same-day with qualifying notes attached.\n\n" +
        "SUMMARY: 118 leads captured, 100% with qualifying context, 100% synced to CRM before booth teardown.",
      successCriteria: [
        "Makes a decision at all three stages, not just the first",
        "Can explain, using the lesson, why the costly option at each stage was worse than the optimal one",
        "Final summary reflects the actual compounding outcome of the choices made, not a generic wrap-up",
      ],
      portfolioReady: true,
    },
  ],

  "conference-sponsorship-roi": [
    {
      id: "sponsorship-tier-pricing-audit",
      tier: "mini",
      archetype: "audit",
      title: "Pricing the Package: A Three-Tier Sponsorship Audit",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real three-tier sponsorship deck, classify every line item as reach, access, data, or exclusivity, price the data line items at zero when the organizer can't back them up, and calculate cost-per-qualified-meeting to recommend which tier is worth buying.",
      companyId: "freshworks",
      scenario:
        "You're a growth marketer at Freshworks evaluating a sponsorship deck for a mid-size B2B SaaS operations conference. The organizer sent three tiers and a lot of language about 'brand visibility.' Your VP wants a one-page recommendation with numbers, not adjectives.",
      brief:
        "Classify each tier's line items, challenge any data claim the organizer can't support with real numbers, then calculate cost-per-qualified-meeting for all three tiers to make an apples-to-apples recommendation.",
      mode: "diagnostic",
      conceptsCovered: [
        "Breaking a sponsorship price down to reach, access, data, and exclusivity",
        "Calculating cost-per-qualified-meeting to compare packages on equal footing",
      ],
      steps: [
        {
          stepId: "step-1-classify-line-items",
          concept: "Breaking a sponsorship price down to reach, access, data, and exclusivity",
          lessonAnchor: "what-a-package-price-actually-buys",
          theoryRecap:
            "The lesson splits every sponsorship line item into four buckets: reach (foot traffic, logo placement), access (a captive audience, a speaking slot), data (verified attendee information), and exclusivity. Data is only worth its listed price if the organizer can actually deliver registration numbers, job titles, and opt-in rates.",
          question:
            "Below are the three tiers as quoted. Classify every line item into reach, access, data, or exclusivity, then flag which line items the organizer could not support with real numbers when you asked.",
          toolName: "Google Sheets",
          where: "A new sheet with columns: Tier, Line Item, Price, Classification, Organizer Could Verify? (Y/N)",
          procedure: [
            "Enter the three tiers as quoted: Bronze Booth ($15,000: 10x10 booth, logo on event app, 2 conference passes, 'full attendee list'); Silver Speaking Slot ($60,000: 20-minute breakout session, booth, logo on main stage screen, 'full attendee list', branded lanyards); Gold Keynote ($120,000: 30-minute keynote, exclusive category lock-out, booth, 'full attendee list with opt-in rates', post-event webinar co-host slot)",
            "Classify every line item as reach, access, data, or exclusivity",
            "Email the organizer (or, for this exercise, note what they told you) asking for registration numbers, job titles, and opt-in rates behind each 'full attendee list' claim",
            "Bronze and Silver's organizer could only confirm total registration count, no job titles or opt-in rates. Gold's organizer provided a sample of last year's title breakdown and a 61% opt-in rate.",
            "Re-price Bronze and Silver's 'full attendee list' line item at $0 in your sheet; leave Gold's at face value since it was verified",
          ],
          outputSample:
            "Tier          Line Item                          Price     Class        Verified?\nBronze        10x10 booth                        --        Reach        --\nBronze        Logo on event app                  --        Reach        --\nBronze        'Full attendee list'                --        Data         NO -> repriced $0\nSilver        20-min breakout session             --        Access       --\nSilver        Booth + main-stage logo             --        Reach        --\nSilver        'Full attendee list'                --        Data         NO -> repriced $0\nSilver        Branded lanyards                    --        Reach        --\nGold          30-min keynote                      --        Access       --\nGold          Category lock-out                   --        Exclusivity  --\nGold          Attendee list w/ titles + opt-in     --        Data         YES, verified\nGold          Post-event webinar co-host slot      --        Access       --",
          healthy:
            "Every 'data' line item is backed by a number the organizer can actually produce; anything unverified gets priced at zero before you compare tiers.",
          unhealthy:
            "Treating 'full attendee list' as equally valuable across all three tiers just because it appears on every rate card.",
          interpret:
            "Bronze and Silver are effectively reach-only packages once you strip the unverifiable data claim, no matter what the deck implies. Gold is the only tier where the data line item holds up, which changes its real value relative to price.",
          soWhat: [
            {
              symptom: "A tier's price includes a 'full attendee list' the organizer can't describe in detail",
              action: "Reprice that line item to $0 in your comparison sheet before ranking tiers",
              effort: "5 min",
            },
            {
              symptom: "Two tiers look similar in price after reclassification",
              action: "Rank them by which one has a verified data line item, not by sticker price",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cost-per-qualified-meeting",
          concept: "Calculating cost-per-qualified-meeting to compare packages on equal footing",
          lessonAnchor: "the-roi-framework-cost-per-qualified-meeting",
          theoryRecap:
            "Cost-per-qualified-meeting is total sponsorship spend divided by meetings booked with people who match your ideal customer profile. It lets you compare a cheap booth against an expensive keynote on the same scale instead of arguing about cost-per-lead or impressions.",
          question:
            "Using the organizer's attendance estimates below, calculate cost-per-qualified-meeting for all three tiers and recommend one.",
          toolName: "Google Sheets",
          where: "Same sheet, new section: Tier, Price, Est. Total Attendees, Est. ICP-Match %, Est. Qualified Meetings, Cost per Qualified Meeting",
          procedure: [
            "Bronze: $15,000, 800 total attendees, organizer estimates 8% match your ICP, you estimate you can book meetings with 15% of ICP-matched attendees who pass your booth",
            "Silver: $60,000, 800 total attendees, same 8% ICP match, but a captive 20-minute audience converts closer to 35% of ICP-matched attendees into a booked meeting",
            "Gold: $120,000, 800 total attendees, same 8% ICP match, keynote + verified opt-in data lets you pre-book meetings with 55% of ICP-matched attendees before the event even starts",
            "Calculate: total attendees x ICP-match % = ICP-matched attendees; ICP-matched attendees x conversion % = qualified meetings; price / qualified meetings = cost per qualified meeting",
            "Rank all three tiers by cost per qualified meeting, lowest to highest",
          ],
          outputSample:
            "Tier     Price      Attendees  ICP-Match  ICP-Matched  Conv%   Qual. Mtgs   Cost/Qual.Mtg\nBronze   $15,000    800        8%         64           15%     9.6 -> 9   $1,667\nSilver   $60,000    800        8%         64           35%     22.4 -> 22  $2,727\nGold     $120,000   800        8%         64           55%     35.2 -> 35  $3,429\n\nRanked by cost per qualified meeting: Bronze ($1,667) < Silver ($2,727) < Gold ($3,429)\nRanked by absolute qualified meeting volume: Gold (35) > Silver (22) > Bronze (9)",
          healthy:
            "Bronze wins on cost-per-qualified-meeting, but Gold delivers nearly 4x the qualified meeting volume, a real tradeoff worth putting in front of the VP instead of picking on one number alone.",
          unhealthy:
            "Recommending Bronze purely because it has the lowest sticker price, ignoring that qualified meeting volume matters when there's a pipeline target to hit.",
          interpret:
            "Cost-per-qualified-meeting tells you efficiency, not capacity. A team with a hard qualified-meeting target for the quarter may rationally pay more per meeting to get more meetings.",
          soWhat: [
            {
              symptom: "Cost-per-qualified-meeting favors the cheapest tier every time",
              action: "Also report total qualified meeting volume per tier so budget-vs-target tradeoffs are visible",
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
            role: "Build the tier classification and cost-per-qualified-meeting comparison",
            why: "No cost, handles the full comparison with formulas",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page tier evaluation memo with a line-item classification table, repriced data claims, and a cost-per-qualified-meeting ranking, ending in a single recommended tier.",
      sampleOutput:
        "Zendesk Q3 Sponsorship Recommendation (excerpt)\n\n" +
        "RECOMMENDATION: Gold Keynote ($120,000)\n\n" +
        "Rationale: Bronze and Silver's 'full attendee list' claims could not be verified by the organizer and were repriced to $0, leaving both as reach-only packages once the fluff is stripped out. Gold's data line item was independently confirmed (title breakdown + 61% opt-in rate), which is what allows pre-event meeting booking.\n\n" +
        "Cost per qualified meeting: Bronze $1,667 | Silver $2,727 | Gold $3,429\n" +
        "Qualified meeting volume: Bronze 9 | Silver 22 | Gold 35\n\n" +
        "This quarter's pipeline target requires 30+ qualified meetings from this event category. Only Gold clears that bar, so the higher cost-per-meeting is the right tradeoff.",
      successCriteria: [
        "Correctly classifies every line item as reach, access, data, or exclusivity",
        "Reprices any unverified data claim to $0 before comparing tiers",
        "Calculates cost-per-qualified-meeting correctly for all three tiers",
        "Recommendation weighs both cost-per-meeting and total qualified meeting volume, not cost alone",
      ],
      portfolioReady: true,
    },
    {
      id: "sponsorship-180-day-verdict-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 180-Day Sponsorship Verdict: Negotiate, Wait, Decide",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Play out a full sponsorship lifecycle, negotiating the deal, deciding whether to report ROI at the (misleading) 30-day mark, and making a renew/renegotiate/walk call at day 180, learning where each shortcut actually costs pipeline and budget credibility.",
      companyId: "zendesk",
      scenario:
        "You're on the field and events team at Zendesk, deciding how to negotiate a $60,000 speaking-slot package for a customer-support industry conference, then living through the 180 days after signing.",
      brief:
        "Every decision routes to a consequence grounded in the lesson's negotiation levers and measurement timeline. A costly choice at day 0 makes day 30 and day 180 measurably worse, not just narratively worse.",
      mode: "simulation",
      conceptsCovered: [
        "Negotiation levers: pilot tiers, data-timing clauses, and multi-event bundles",
        "Measuring ROI on the deal's actual 60-180 day timeline, not the 30-day mark",
        "Comparing sponsorship options and deciding renew, renegotiate, or walk",
      ],
      stages: [
        {
          stageId: "negotiate",
          label: "Negotiating the Deal",
          elapsed: "Day 0",
          concept: "Negotiation levers: pilot tiers, data-timing clauses, and multi-event bundles",
          lessonAnchor: "where-your-negotiation-leverage-actually-lives",
          situation:
            "The organizer quoted a standard $60,000 speaking-slot package with a post-event attendee list 'delivered within 6 weeks.' Budget is tight this quarter and last year's sponsorship at a different conference underperformed.",
          dashboard: "Quoted price: $60,000 | Organizer has unsold speaking inventory | Data delivery: 6 weeks post-event, unspecified format",
          spendToDate: "$0",
          budgetRemaining: "$60,000 approved for this line item",
          decision: {
            prompt: "How do you approach the negotiation?",
            options: [
              {
                id: "pilot-tier",
                label: "Ask for a pilot tier: a smaller commitment with an upgrade option if qualified meetings clear a threshold",
                verdict: "optimal",
                outcome:
                  "The organizer, sitting on unsold speaking inventory, agrees to a $25,000 pilot slot with upgrade rights to the full keynote next year if you clear 15 qualified meetings. You also lock a 2-week data delivery window instead of 6.",
                why: "Organizers with unsold inventory will take a smaller committed sponsor over an empty slot, which is exactly the leverage the lesson identifies.",
                lessonRef:
                  "\"Organizers with unsold inventory will take this over an empty booth\" and \"negotiate data delivery timing, not just data access.\"",
                nextStageId: "day30",
              },
              {
                id: "full-price",
                label: "Sign the full $60,000 package as quoted, no changes",
                verdict: "costly",
                outcome:
                  "You pay full price with no upgrade flexibility, no improved data timing, and no fallback if the audience underperforms.",
                why: "Most sponsors never push back, so organizers pad early-tier packages expecting exactly this.",
                lessonRef: "\"Organizers pad early-tier packages because most sponsors never push back.\"",
                nextStageId: "day30-overpaid",
              },
              {
                id: "exclusivity-only",
                label: "Negotiate only for category exclusivity, skip the pilot and data-timing asks",
                verdict: "acceptable",
                outcome:
                  "You get a competitor lock-out for your category, but the 6-week data delivery lag and full $60,000 commitment both remain unchanged.",
                why: "Exclusivity has real value, but it's only one of three effective levers, leaving two on the table is a partial win.",
                lessonRef: "\"Three levers consistently work\" (pilot tier, data timing, multi-event bundle).",
                nextStageId: "day30",
              },
            ],
          },
        },
        {
          stageId: "day30",
          label: "The 30-Day Report",
          elapsed: "Day 30",
          concept: "Measuring ROI on the deal's actual 60-180 day timeline, not the 30-day mark",
          lessonAnchor: "the-roi-framework-cost-per-qualified-meeting",
          situation:
            "Finance wants a sponsorship ROI number for the monthly close. The CRM dashboard shows only 3 qualified meetings booked so far and zero closed-won revenue attributed.",
          dashboard: "Qualified meetings booked: 3 | Opportunities created: 1 | Closed-won revenue: $0",
          spendToDate: "$25,000 (pilot) or $60,000 (full price)",
          budgetRemaining: "Pilot: $35,000 uncommitted this quarter | Full price: $0 uncommitted this quarter",
          decision: {
            prompt: "How do you report this to Finance?",
            options: [
              {
                id: "wait-for-window",
                label: "Report that ROI won't be reliable until the 60-180 day window, per how B2B deal cycles actually move",
                verdict: "optimal",
                outcome:
                  "Finance agrees to hold judgment. Over the following weeks, 2 more qualified meetings convert to opportunities as sales continues working the pipeline quietly in the background.",
                why: "A 30-day snapshot makes every sponsorship look like a failure because the in-person-to-closed-won gap averages 60-180 days.",
                lessonRef:
                  "\"Never report sponsorship ROI at the 30-day mark and call it final. The gap between an in-person conversation and a closed-won deal averages 60 to 180 days for B2B.\"",
                nextStageId: "day180",
              },
              {
                id: "declare-failure",
                label: "Report the sponsorship as underperforming based on the day-30 numbers",
                verdict: "costly",
                outcome:
                  "Finance flags the line item for cancellation next year before the pipeline that was already in motion has a chance to close. Two deals that eventually would have closed get written off as 'unattributed.'",
                why: "A 30-day snapshot is a lagging-indicator trap for a channel whose whole value shows up 2-6 months later.",
                lessonRef:
                  "\"A 30-day snapshot will make every sponsorship look like it failed.\"",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day30-overpaid",
          label: "The 30-Day Report, No Leverage",
          elapsed: "Day 30",
          concept: "Measuring ROI on the deal's actual 60-180 day timeline, not the 30-day mark",
          lessonAnchor: "the-roi-framework-cost-per-qualified-meeting",
          situation:
            "You paid the full $60,000 upfront with no pilot upgrade path. The dashboard shows the same 3 qualified meetings, but the entire budget is already spent with zero flexibility left this quarter.",
          dashboard: "Qualified meetings booked: 3 | Opportunities created: 1 | Closed-won revenue: $0",
          spendToDate: "$60,000",
          budgetRemaining: "$0 uncommitted this quarter",
          decision: {
            prompt: "How do you report this to Finance, given there's no budget cushion left?",
            options: [
              {
                id: "wait-anyway",
                label: "Still report that ROI needs the 60-180 day window, even without pilot flexibility to fall back on",
                verdict: "acceptable",
                outcome:
                  "Finance reluctantly agrees to wait, but flags the full-price, no-upgrade structure as a concern for next year's renewal conversation.",
                why: "The measurement timeline argument still holds regardless of how the deal was structured, but overpaying upfront removes your negotiating room for the follow-up conversation.",
                lessonRef: "\"Never report sponsorship ROI at the 30-day mark and call it final.\"",
                nextStageId: "day180",
              },
              {
                id: "cut-losses",
                label: "Recommend cutting the program now to preserve remaining quarterly budget",
                verdict: "costly",
                outcome:
                  "The 3 qualified meetings already booked get abandoned mid-cycle. Sales confirms two of them were close to scheduling a second call when the account team pulled back.",
                why: "Cutting a channel before its deal cycle completes throws away pipeline that was already paid for.",
                lessonRef: "\"The gap between an in-person conversation and a closed-won deal averages 60 to 180 days for B2B.\"",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day180",
          label: "The 180-Day Verdict",
          elapsed: "Day 180",
          concept: "Comparing sponsorship options and deciding renew, renegotiate, or walk",
          lessonAnchor: "comparing-multiple-sponsorship-options",
          situation:
            "Final numbers are in. Depending on the negotiation path, the pilot deal shows 15 qualified meetings, 6 opportunities, and 2 closed-won deals worth $180,000 in new ARR against $25,000 spent. The full-price path shows the same meeting count against $60,000 spent.",
          dashboard: "Qualified meetings: 15 | Opportunities: 6 | Closed-won: 2 deals, $180,000 ARR",
          spendToDate: "$25,000 (pilot path) or $60,000 (full-price path)",
          budgetRemaining: "$0, quarter closed",
          decision: {
            prompt: "What's the renewal decision?",
            options: [
              {
                id: "renew-upgrade",
                label: "Exercise the pilot's upgrade option to the full keynote slot next year",
                verdict: "optimal",
                outcome:
                  "$180,000 ARR against $25,000 spent is a 7.2x return. You upgrade to the keynote with the improved data-timing clause already locked in from the original negotiation.",
                why: "The pilot cleared its qualified-meeting threshold, which is exactly the signal the pilot structure was designed to test for before committing more budget.",
                lessonRef: "\"a smaller commitment with an option to upgrade if your qualified-meeting number clears a threshold.\"",
                nextStageId: "end",
              },
              {
                id: "renew-flat",
                label: "Renew at the same tier without renegotiating anything",
                verdict: "acceptable",
                outcome:
                  "Results stay solid, but you leave the same negotiation levers (data timing, multi-event bundling) unused for another full year.",
                why: "A strong result doesn't mean the deal terms were optimal, it means the audience match was good despite unused leverage.",
                lessonRef: "\"Three levers consistently work.\"",
                nextStageId: "end",
              },
              {
                id: "walk-away",
                label: "Walk away from this conference and reallocate the budget elsewhere",
                verdict: "costly",
                outcome:
                  "You walk away from a channel that just returned 7.2x on spend, based on a rule of thumb rather than this deal's actual numbers.",
                why: "The comparison framework exists specifically so decisions are made on cost-per-qualified-meeting and results, not on a generic instinct to diversify.",
                lessonRef: "\"Rank by cost-per-qualified-meeting first, exclusivity second.\"",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track spend, qualified meetings, and ROI ratio at each checkpoint",
            why: "No cost, sufficient for a single sponsorship's tracking needs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Attribute qualified meetings and opportunities to the sponsorship source automatically",
            why: "Removes manual tagging once a team runs more than one or two sponsorships a quarter",
            required: false,
            fallback: "Google Sheets with a manual UTM/source tag per meeting",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A stage-by-stage decision log showing the negotiation choice, the 30-day reporting call, and the 180-day renewal verdict, with the ROI ratio calculated at each checkpoint.",
      sampleOutput:
        "Slack Sponsorship Decision Log (excerpt)\n\n" +
        "Day 0: Negotiated a $25,000 pilot tier with upgrade rights at 15 qualified meetings, 2-week data delivery.\n" +
        "Day 30: 3 qualified meetings booked, $0 closed. Held the report until day 180 per the deal-cycle timeline.\n" +
        "Day 180: 15 qualified meetings, 6 opportunities, 2 closed-won deals worth $210,000 ARR against $25,000 spent = 8.4x ROI.\n" +
        "Verdict: Exercised the upgrade option to the full keynote slot for next year.",
      successCriteria: [
        "Chooses the pilot-tier negotiation path or correctly identifies the tradeoff of not doing so",
        "Does not declare ROI failure or success based on day-30 numbers alone",
        "Calculates the final ROI ratio correctly at day 180",
        "Renewal decision is grounded in the day-180 numbers, not a generic rule of thumb",
      ],
      portfolioReady: true,
    },
  ],
  "field-marketing": [
    {
      id: "roadshow-spray-and-pray-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Copy-Paste Roadshow Audit",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a three-city roadshow plan with declining attendance, diagnose which elements were wrongly centralized (guest list, invite framing) versus correctly centralized (venue booking, follow-up template), and identify who actually owns each event.",
      companyId: "wise",
      scenario:
        "You're the regional marketing lead at Wise reviewing a struggling three-city executive dinner roadshow. Attendance dropped each city: Austin 22 RSVPs of 40 invited, Chicago 14 of 40, Denver 8 of 40. Sales is asking why the program is fizzling.",
      brief:
        "Classify each part of the roadshow plan as correctly standardized or wrongly centralized, and check who owns each event, then explain the attendance decline using the lesson's framework.",
      mode: "diagnostic",
      conceptsCovered: [
        "Standardizing logistics centrally while leaving guest lists and framing to regional owners",
        "Field marketing vs. centralized events: proximity to sales as the differentiator",
      ],
      steps: [
        {
          stepId: "step-1-standardize-vs-local",
          concept: "Standardizing logistics centrally while leaving guest lists and framing to regional owners",
          lessonAnchor: "scaling-a-regional-program-without-losing-quality",
          theoryRecap:
            "The right split is a shared skeleton with local muscle: standardize venue-booking process, invite templates, budget approval, and follow-up sequence centrally. Leave guest list curation, the specific pain point framed in the invite, and which sales rep hosts the table to the regional owner who knows their market.",
          question:
            "Below is how the Austin, Chicago, and Denver dinners were actually planned. Classify each element as correctly centralized or wrongly centralized, given the framework.",
          toolName: "Google Sheets",
          where: "A sheet with columns: Element, Who Decided, Should Be Central or Local?, Verdict",
          procedure: [
            "List the 5 planning elements as executed: venue booking (central events team, same steakhouse chain in all 3 cities), invite copy (central events team, identical email in all 3 cities: 'Join us for an exclusive dinner discussing digital banking trends'), guest list (central events team, pulled from one national contact list with no city-specific filtering), which sales rep hosts (central events team assigned whoever was 'available' that week, not the account owner), follow-up email template (central events team, same template for all 3 cities, sent within 48 hours)",
            "Mark each element as 'should be central' or 'should be local' per the lesson's framework",
            "Compare to what actually happened",
            "For each mismatch, note the likely consequence visible in the attendance data",
          ],
          outputSample:
            "Element              Who Decided (Actual)    Should Be         Verdict\nVenue booking         Central                  Central           Correct\nInvite copy           Central, identical        Local             WRONG, generic pain point framing\nGuest list             Central, national list    Local             WRONG, no city-specific ICP match\nWho hosts              Central, 'whoever's free' Local             WRONG, not the account owner\nFollow-up template     Central                   Central           Correct\n\nAttendance trend: Austin 55% -> Chicago 35% -> Denver 20%. Each city's guest list and invite copy got progressively less relevant as the 'template' aged, and no local account owner hosted to make it personal.",
          healthy:
            "Venue booking and the follow-up template stay identical across cities with no attendance cost, because logistics genuinely don't need local judgment.",
          unhealthy:
            "Guest list, invite framing, and event host all being decided centrally with no city-specific input, which is the exact 'spray and pray' failure mode the lesson names.",
          interpret:
            "The declining attendance isn't random fatigue, it's 3 out of 5 planning elements being wrongly centralized, compounding city over city as the generic list and copy age further from anyone's real market.",
          soWhat: [
            {
              symptom: "Attendance drops city over city on a multi-city roadshow using the same materials",
              action: "Hand guest list curation and invite framing to a regional owner before the next stop, keep logistics central",
              effort: "half day",
            },
            {
              symptom: "The event host wasn't the account owner for that city's guest list",
              action: "Reassign hosting to the sales rep who actually owns the top accounts being invited",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ownership-check",
          concept: "Field marketing vs. centralized events: proximity to sales as the differentiator",
          lessonAnchor: "field-marketing-vs-centralized-corporate-events",
          theoryRecap:
            "Field events report to, or sit shoulder-to-shoulder with, the regional sales team, because a field marketer in weekly pipeline reviews knows which accounts are stalled and which region needs a push. Corporate events optimize for reach and brand lift instead.",
          question:
            "Given the roadshow was run entirely by the central events team with no regional sales involvement, is this program actually field marketing, or a mini corporate event wearing a field-marketing label? What changes?",
          toolName: "Google Sheets",
          where: "Same sheet, new row: 'Program classification'",
          procedure: [
            "Check who owns the program: the central brand/demand-gen events team, with no named regional sales counterpart",
            "Check who curated each guest list: the same central team, pulling from a generic CRM export, not a rep's account list",
            "Compare to the field marketing definition: relevance to a specific region and proximity to sales pipeline reviews",
            "Classify the program and recommend the structural fix",
          ],
          outputSample:
            "Classification: This is a corporate event with a regional label, not field marketing.\nEvidence: No named regional sales owner per city; guest lists pulled from a generic CRM export, not an account owner's target list; nobody in the loop attends weekly pipeline reviews for Austin, Chicago, or Denver.\nFix: Assign a named regional owner per city who sits with that region's sales team, curates the guest list from their own stalled/target accounts, and hosts the dinner personally.",
          healthy:
            "A program labeled 'field marketing' has a named regional owner per market who is close enough to sales pipeline reviews to know which 15 accounts actually belong on the guest list.",
          unhealthy:
            "A program labeled 'field marketing' is run entirely by a central team with no regional sales counterpart, which makes it a corporate event in disguise.",
          interpret:
            "The label on the calendar invite doesn't determine whether something is field marketing, ownership structure does. Fixing the roadshow means assigning real regional owners, not just renaming the initiative.",
          soWhat: [
            {
              symptom: "A 'field marketing' program has no named regional sales owner per city",
              action: "Assign one before the next roadshow stop and have them curate that city's guest list personally",
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
            role: "Classify planning elements and diagnose the attendance decline",
            why: "No cost, sufficient for a single-program audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo classifying each roadshow planning element as correctly or wrongly centralized, with a program-ownership diagnosis and a specific fix for the next stop.",
      sampleOutput:
        "HelloFresh Regional Dinner Program Audit (excerpt)\n\n" +
        "FINDING: 3 of 5 planning elements were wrongly centralized (invite copy, guest list, event host), correlating with a 55% -> 20% attendance decline across 3 cities.\n\n" +
        "CLASSIFICATION: Program has no named regional sales owner per market, making it a corporate event with a field-marketing label rather than true field marketing.\n\n" +
        "FIX FOR NEXT STOP: Assign a named regional owner in the next city who sits with that region's sales team, curates the guest list from their own top 20 accounts, and hosts personally. Keep venue booking and follow-up template centralized.",
      successCriteria: [
        "Correctly identifies which of the 5 elements should be centralized vs. local",
        "Connects the wrongly-centralized elements to the attendance decline",
        "Correctly diagnoses the program as lacking a real regional-sales ownership structure",
      ],
      portfolioReady: true,
    },
    {
      id: "field-program-build-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The Field Program Build: From Side Project to Core Motion",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Play out building a regional field marketing program from a single pilot city through a multi-city expansion, deciding at each checkpoint whether to hire dedicated regional owners, when to expand, and how to report pipeline contribution so the program survives its next budget review.",
      companyId: "airbnb",
      scenario:
        "You're launching Airbnb's first dedicated field marketing motion: 6 regional dinners approved for the year, no dedicated regional owner hired yet, and a sales team asking you to just 'wing it' centrally to save time.",
      brief:
        "Every choice routes to a consequence grounded in the lesson's core-motion-vs-side-project distinction and its 90/180-day measurement framework. A shortcut at launch measurably weakens the numbers you'll need to defend the program's budget.",
      mode: "simulation",
      conceptsCovered: [
        "Programs run as a core motion with a dedicated owner beat side-project programs",
        "Standardizing logistics while leaving guest lists and framing to regional owners",
        "Confirming pipeline attribution with sales before reporting it",
      ],
      stages: [
        {
          stageId: "launch-decision",
          label: "Launching the Program",
          elapsed: "Quarter 1, Day 0",
          concept: "Programs run as a core motion with a dedicated owner beat side-project programs",
          lessonAnchor: "field-marketing-vs-centralized-corporate-events",
          situation:
            "Budget for 6 regional dinners is approved for the year. No dedicated regional owner is hired yet. Sales wants dinners running now and suggests the central events team just handle all 6 cities directly.",
          dashboard: "Budget: 6 dinners approved | Regional owners hired: 0 | Cities queued: Austin, Chicago, Denver, Seattle, Boston, Miami",
          spendToDate: "$0",
          budgetRemaining: "Full annual field marketing budget",
          decision: {
            prompt: "How do you launch the program?",
            options: [
              {
                id: "dedicated-owner",
                label: "Hire or assign a dedicated regional owner for Austin, run a pilot there before touching the other 5 cities",
                verdict: "optimal",
                outcome:
                  "The Austin owner, who sits in weekly pipeline reviews with the Austin sales pod, curates a guest list from 20 real stalled accounts. The dinner books 14 qualified meetings from 18 attendees.",
                why: "Programs run as a core motion with a dedicated owner consistently outperform side-project programs run by whoever's available centrally.",
                lessonRef:
                  "\"Programs that treat field marketing as a side project (4-8 events a year, no dedicated owner) consistently underperform programs that treat it as a core motion (15+ events, dedicated owner, repeatable playbook).\"",
                nextStageId: "day90",
              },
              {
                id: "central-generalist",
                label: "Have the central events team run all 6 dinners now with one shared generic invite list, to move fast",
                verdict: "costly",
                outcome:
                  "All 6 dinners run on schedule, but with a generic national guest list and identical invite copy. Combined attendance across all 6 cities totals only 3 qualified meetings.",
                why: "This is the exact 'spray and pray' failure the lesson names: the same generic dinner copy-pasted everywhere with no local adaptation.",
                lessonRef:
                  "\"The failure mode at scale is the spray and pray roadshow: the same generic dinner copy-pasted across 10 cities with no local adaptation. Attendance drops and the events stop generating pipeline.\"",
                nextStageId: "day90-weak",
              },
              {
                id: "one-pilot-city",
                label: "Run only Austin this quarter as a pilot, using a dedicated owner, and hold the other 5 cities' budget",
                verdict: "acceptable",
                outcome:
                  "Slower start, only 1 of 6 planned dinners executed this quarter, but Austin's playbook (guest list process, invite framing, host assignment) becomes a documented template for the rest.",
                why: "This gets the core-motion structure right but moves conservatively on pace, a real cost against the annual target even if quality is protected.",
                lessonRef: "\"a repeatable playbook\" implies documenting the pattern before scaling it, though the lesson favors moving at a real cadence once the pattern is proven.",
                nextStageId: "day90",
              },
            ],
          },
        },
        {
          stageId: "day90",
          label: "The Expansion Decision",
          elapsed: "Quarter 2, Day 90",
          concept: "Standardizing logistics while leaving guest lists and framing to regional owners",
          lessonAnchor: "scaling-a-regional-program-without-losing-quality",
          situation:
            "Austin's pilot delivered 14 qualified meetings and 6 opportunities. Sales wants the remaining 5 cities running immediately to hit the annual event count.",
          dashboard: "Qualified meetings to date: 14 | Opportunities: 6 | Cities executed: 1 of 6",
          spendToDate: "~1/6 of annual budget",
          budgetRemaining: "~5/6 of annual budget, 5 cities to launch",
          decision: {
            prompt: "How do you expand to the remaining 5 cities?",
            options: [
              {
                id: "expand-with-playbook",
                label: "Expand to Chicago and Denver next, using Austin's documented skeleton, and hire a regional owner for each new city",
                verdict: "optimal",
                outcome:
                  "Chicago and Denver's owners replicate Austin's pattern (central logistics and follow-up template, local guest list and framing). Combined qualified meetings across all 3 cities reach 34 by the next checkpoint.",
                why: "Standardizing the parts that don't need local judgment while keeping guest-list curation local is exactly the scaling pattern the lesson describes.",
                lessonRef:
                  "\"Standardize the parts that do not need local judgment... Leave local judgment on the parts that do... A regional owner who knows the top 20 accounts in their market will always out-perform a centrally-generated invite list.\"",
                nextStageId: "day180",
              },
              {
                id: "expand-without-owners",
                label: "Launch all 5 remaining cities at once without hiring owners, to hit the annual event count on schedule",
                verdict: "costly",
                outcome:
                  "The new cities repeat the same generic-list failure Austin avoided. Average qualified meetings per new-city event drop to roughly 3, less than a quarter of Austin's rate.",
                why: "Roadshow-style programs only pencil out when each stop is staffed by someone with real regional account knowledge.",
                lessonRef:
                  "\"which only pencils out if each stop is staffed by someone with real regional account knowledge, not a rotating generalist.\"",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day90-weak",
          label: "The Recovery Decision",
          elapsed: "Quarter 2, Day 90",
          concept: "Standardizing logistics while leaving guest lists and framing to regional owners",
          lessonAnchor: "scaling-a-regional-program-without-losing-quality",
          situation:
            "All 6 generic dinners ran, but produced only 3 qualified meetings total. Sales leadership is questioning whether the field marketing budget should exist at all.",
          dashboard: "Qualified meetings to date: 3 across 6 cities | Opportunities: 1 | Cities executed: 6 of 6",
          spendToDate: "Full annual budget already spent",
          budgetRemaining: "$0",
          decision: {
            prompt: "How do you respond before the budget review?",
            options: [
              {
                id: "course-correct",
                label: "Pause new spend, propose a smaller re-run in one city next quarter with a dedicated owner, present it as a corrected pilot",
                verdict: "acceptable",
                outcome:
                  "Leadership grants a smaller trial budget for one properly-owned city dinner. Credibility is partially recovered, but a full year's field marketing budget was already spent to relearn a lesson the framework predicted.",
                why: "The fix is still the right one, hiring dedicated regional ownership, but arriving at it this late costs a wasted year.",
                lessonRef: "\"A regional owner who knows the top 20 accounts in their market will always out-perform a centrally-generated invite list.\"",
                nextStageId: "end",
              },
              {
                id: "keep-going",
                label: "Propose repeating the same generic format next year to hit a '15+ events' target and appear more 'core motion'",
                verdict: "costly",
                outcome:
                  "Leadership reads the 3-qualified-meeting result as proof the entire channel doesn't work, not as proof the execution was wrong. The program gets cut before a corrected version is ever tried.",
                why: "Event count alone was never the core-motion signal, dedicated ownership and a repeatable playbook were, and this path doubles down on the wrong variable.",
                lessonRef:
                  "\"Field marketing gets killed in budget reviews when its only reported metric is '12 dinners hosted.' Sales leaders do not fund activity, they fund pipeline.\"",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "day180",
          label: "The Attribution Report",
          elapsed: "Quarter 3, Day 180",
          concept: "Confirming pipeline attribution with sales before reporting it",
          lessonAnchor: "measuring-field-marketings-contribution-to-pipeline",
          situation:
            "Across Austin, Chicago, and Denver, the CRM's automated attribution model flags $2.1M in 'event-influenced' pipeline. You need to report a number to secure next year's budget for the remaining 3 cities.",
          dashboard: "Automated attribution: $2.1M influenced pipeline | Opportunities created: 14 | Closed-won so far: 3 deals",
          spendToDate: "~1/2 of annual budget across 3 cities",
          budgetRemaining: "~1/2 of annual budget, 3 cities remaining",
          decision: {
            prompt: "How do you report the pipeline contribution?",
            options: [
              {
                id: "confirm-with-reps",
                label: "Have each account's sales rep confirm whether the field dinner genuinely moved that specific deal before reporting a number",
                verdict: "optimal",
                outcome:
                  "Reps confirm $1.3M of the $2.1M as genuinely event-driven; several other flagged deals turn out to be coincidental touches with no real influence. The confirmed number, though lower, holds up under scrutiny and the remaining 3 cities get funded.",
                why: "A sales rep confirming real influence carries more weight in a budget review than an automated attribution model that can't distinguish a real touch from a coincidence.",
                lessonRef:
                  "\"A sales rep who says 'that dinner is why this deal moved' is worth more evidence than a dozen automated attribution reports guessing at influence.\"",
                nextStageId: "end",
              },
              {
                id: "self-report-pixel",
                label: "Report the full $2.1M automated attribution number without sales confirmation, to make the strongest possible case",
                verdict: "costly",
                outcome:
                  "Finance spot-checks a sample of the flagged deals with the sales team and finds several had no real connection to the events. The program's entire reported number gets discounted, and trust in future field marketing reports takes a lasting hit.",
                why: "Unconfirmed automated attribution is exactly the kind of number that collapses under scrutiny in a budget review.",
                lessonRef:
                  "\"That confirmation step matters more than any tracking pixel.\"",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track per-city qualified meetings, opportunities, and confirmed vs. automated attribution",
            why: "No cost, sufficient for tracking a program across a handful of cities",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Tag event attendees at RSVP and run automated influence attribution as a starting point for sales to confirm",
            why: "Removes manual RSVP tagging once a program spans several cities and dozens of attendees per quarter",
            required: false,
            fallback: "Google Sheets with a manual RSVP tag per attendee, cross-checked with sales in a recurring call",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A quarter-by-quarter build log showing the launch decision, the expansion decision, and the day-180 attribution report, with qualified meetings and confirmed (not automated) pipeline contribution at each checkpoint.",
      sampleOutput:
        "Chewy Field Marketing Program Build Log (excerpt)\n\n" +
        "Q1: Hired a dedicated Austin regional owner before launching. Pilot dinner: 14 qualified meetings, 6 opportunities from 18 attendees.\n" +
        "Q2: Expanded to Chicago and Denver using Austin's documented playbook (central logistics, local guest lists). Combined qualified meetings: 34 across 3 cities.\n" +
        "Q3, Day 180: Automated attribution flagged $2.1M in influenced pipeline. Sales rep confirmation reduced this to a verified $1.3M, which held up in the budget review and funded the remaining 3 cities.",
      successCriteria: [
        "Chooses to hire a dedicated regional owner before or during the first expansion wave",
        "Recognizes that standardizing logistics/follow-up while localizing guest lists is what let the expansion scale without quality loss",
        "Chooses to confirm automated attribution with sales reps before reporting a pipeline number",
      ],
      portfolioReady: true,
    },
  ],

  "experiential-activations": [
    {
      id: "experiential-activations-premise-audit",
      tier: "mini",
      archetype: "audit",
      title: "The One-Sentence Test: Auditing a Real Activation Brief",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a supplied activation brief for a mid-size DTC brand, apply the lesson's 'sentence, not the space' framework to score whether the premise is shareable, identify the single artifact that would travel on social, and flag which elements are attendance thinking rather than story thinking.",
      companyId: "warby-parker",
      scenario:
        "You're a marketing coordinator at Warby Parker, the DTC eyewear company that built its retail growth on pop-up experiments before opening permanent stores. Your events lead has drafted a brief for a weekend pop-up and wants a sanity check before it goes to budget approval.",
      brief:
        "Score the brief's premise, spot the shareable artifact (or its absence), and rewrite the weakest section using the lesson's framework.",
      mode: "diagnostic",
      conceptsCovered: [
        "Writing the one-sentence premise before booking anything",
        "Designing the artifact, not the event",
      ],
      steps: [
        {
          stepId: "step-1-premise-sentence",
          concept: "Writing the one-sentence premise before booking anything",
          lessonAnchor: "what-separates-memorable-from-forgettable",
          theoryRecap:
            "The lesson argues memorable activations optimize for the story a stranger tells, not for headcount, and that the test is whether you can explain the premise in one sentence before booking anything.",
          question:
            "The brief opens with: 'A weekend pop-up featuring a photo backdrop, branded tote bags, and a DJ, to build local brand awareness.' Does this pass the one-sentence premise test?",
          toolName: "Google Docs",
          where: "Read the supplied brief.txt top section describing the pop-up concept.",
          procedure: [
            "Try to write the premise as a single sentence a stranger would use to explain it to a friend",
            "Check whether that sentence names an action or just a location ('a pop-up with a backdrop' is a location, not a story)",
            "List every element in the brief and mark each as 'story thinking' or 'attendance thinking'",
            "Flag the backdrop, totes, and DJ against the attendance-thinking pattern the lesson names directly",
          ],
          outputSample:
            "PREMISE TEST\nBrief as written: 'A weekend pop-up with photo backdrop, totes, DJ'\nOne-sentence test: FAIL, no action or story, just a checklist of amenities\n\nELEMENT AUDIT\n  Photo backdrop        -> attendance thinking (the lesson's own example of what NOT to do)\n  Branded tote giveaway  -> attendance thinking (a gift, not a story)\n  DJ                     -> attendance thinking (ambiance, not premise)\n  [no artifact identified] -> the brief has no single shareable unit",
          healthy:
            "The team pauses the brief and rewrites it around one concrete, describable action before spending on vendors.",
          unhealthy:
            "The team books the backdrop and DJ anyway because 'people always take photos at pop-ups,' repeating the exact mistake the lesson opens with.",
          interpret:
            "A brief with no one-sentence premise is a brief with no idea yet, regardless of how much production it lists.",
          soWhat: [
            {
              symptom: "Every element in the brief is an amenity, not an action",
              action: "Send the brief back with the one-sentence test before any vendor gets booked",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-artifact-rewrite",
          concept: "Designing the artifact, not the event",
          lessonAnchor: "what-separates-memorable-from-forgettable",
          theoryRecap:
            "Every standout activation has a single shareable unit that exists independently of attending, the artifact that travels on social after the event ends.",
          question:
            "Rewrite the pop-up's core idea around one shareable artifact instead of the current three disconnected amenities. What artifact would you propose?",
          toolName: "Google Docs",
          where: "Draft the replacement concept directly under the flagged element audit.",
          procedure: [
            "Pick one physical or digital artifact that could exist independently of attending (an object, a generated output, a photo op with a twist)",
            "Write the one-sentence premise for that artifact",
            "Cut the backdrop, totes, and DJ unless one of them directly serves the new artifact",
            "Note what a stranger seeing the artifact online, not at the event, would understand about the brand",
          ],
          outputSample:
            "REWRITE\nNew premise: 'Get your face 3D-scanned into a custom frame recommendation, printed as a takeaway card in 90 seconds'\nArtifact: the printed personalized card, shareable without attending\nCut: generic photo backdrop, branded totes\nKept: DJ, repositioned as ambiance only, not the story",
          healthy:
            "The rewritten concept can be explained in one sentence and produces something a non-attendee would recognize on social.",
          unhealthy:
            "The 'rewrite' just adds a hashtag sign to the existing backdrop instead of designing a real artifact.",
          interpret:
            "Fixing a weak brief means replacing amenities with one designed artifact, not decorating the same amenities.",
          soWhat: [
            {
              symptom: "The brief still leans on a backdrop as the main visual",
              action: "Replace it with one artifact tied directly to the product experience",
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
            role: "Score each brief element as story vs. attendance thinking",
            why: "Free, fast to structure a short audit table",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit scoring the original brief against the one-sentence premise test, plus a rewritten concept built around a single shareable artifact.",
      sampleOutput:
        "Chewy, Weekend Pop-Up Brief Audit (excerpt)\n\n" +
        "ORIGINAL PREMISE: 'A pop-up with a treat bar and photo wall for pet owners' — FAILS one-sentence test, no action\n\n" +
        "REWRITE: 'Bring your dog, get a free custom illustrated portrait mailed to you in a week'\n" +
        "ARTIFACT: the illustrated portrait, exists independently of attending\n" +
        "CUT: generic photo wall\n" +
        "KEPT: treat bar, repositioned as a wait-time activity, not the story",
      successCriteria: [
        "Correctly identifies the original brief fails the one-sentence premise test",
        "Proposes a rewritten concept built around a single named artifact",
      ],
      portfolioReady: true,
    },
    {
      id: "experiential-activations-budget-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The $15K Decision: Running an Activation on a Real Budget",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Play out a 4-week activation planning window for a $15,000 regional budget, making the seeding, artifact, and measurement calls the lesson frames as the difference between a 3:1 and a sub-1:1 return.",
      companyId: "chewy",
      scenario:
        "You're running experiential marketing for Chewy at a regional pet-adoption partner event. You have a $15,000 budget, four weeks of lead time, and a mandate to beat the brand's historical 2:1 earned-media-to-production ratio.",
      brief:
        "Make four sequential calls (artifact spend, seeding budget, participation format, measurement plan) and see how each choice compounds into the final earned-media ratio.",
      mode: "simulation",
      conceptsCovered: [
        "Designing the artifact, not the event",
        "Seeding the first wave with micro-creators",
        "Tracking earned media value against production cost",
      ],
      stages: [
        {
          stageId: "stage-1-artifact-spend",
          label: "Week 1: Artifact Budget Split",
          elapsed: "Week 1 of 4",
          concept: "Designing the artifact, not the event",
          lessonAnchor: "a-framework-for-realistic-budgets",
          situation:
            "You have $15,000 total. The vendor pitch offers a $9,000 elaborate photo-op stage build, or a $4,000 interactive artifact (a scan-and-print pet portrait booth) leaving $11,000 for seeding and staff.",
          dashboard: "Total budget: $15,000 | Spent so far: $0 | Weeks remaining: 4",
          spendToDate: "$0",
          budgetRemaining: "$15,000",
          decision: {
            prompt: "Which artifact do you fund?",
            options: [
              {
                id: "elaborate-stage",
                label: "Fund the $9,000 photo-op stage build",
                verdict: "costly",
                outcome:
                  "The stage looks impressive but is attendance thinking, a static backdrop, not a designed artifact people can't get elsewhere. Only $6,000 remains for seeding and measurement.",
                why:
                  "The lesson is explicit that a photo backdrop is attendance thinking; the interactive scan-and-print booth is the closer match to 'artifact, not event.'",
                lessonRef: "A Framework for Realistic Budgets: 'Design the artifact, not the event'",
                nextStageId: "stage-2-seeding-underfunded",
              },
              {
                id: "interactive-booth",
                label: "Fund the $4,000 scan-and-print portrait booth",
                verdict: "optimal",
                outcome:
                  "The booth produces a personalized takeaway artifact per visitor, and $11,000 remains for seeding, staffing, and measurement.",
                why:
                  "This matches the lesson's own regional case study, a $12,000 vending-machine artifact outperformed an $80,000 flagship because the artifact was the whole idea.",
                lessonRef: "Callout example: the $12,000 pop-up vending machine",
                nextStageId: "stage-2-seeding-funded",
              },
            ],
          },
        },
        {
          stageId: "stage-2-seeding-underfunded",
          label: "Week 2: Seeding on a Tight Remainder",
          elapsed: "Week 2 of 4",
          concept: "Seeding the first wave with micro-creators",
          lessonAnchor: "a-framework-for-realistic-budgets",
          situation:
            "With $6,000 left after the stage build, you can afford to brief only 4 micro-creators, well under the lesson's 10-20 range, or skip seeding and hope for organic discovery.",
          dashboard: "Total budget: $15,000 | Spent so far: $9,000 | Weeks remaining: 3",
          spendToDate: "$9,000",
          budgetRemaining: "$6,000",
          decision: {
            prompt: "How do you allocate the remaining $6,000?",
            options: [
              {
                id: "skip-seeding",
                label: "Skip seeding, save the budget for day-of staff",
                verdict: "costly",
                outcome:
                  "With no first wave, the static stage generates a handful of organic posts and finishes near a 1:1 earned-media ratio, well under the 3:1 target.",
                why:
                  "The lesson's own callout warns an unseeded activation with a strong artifact can die quietly; this is a weak artifact with no seeding at all.",
                lessonRef: "Callout tip: 'An unseeded activation with a great artifact can still die quietly'",
                nextStageId: "end",
              },
              {
                id: "underfund-seeding",
                label: "Brief 4 micro-creators with the remaining budget",
                verdict: "acceptable",
                outcome:
                  "4 creators produce a modest first wave, better than nothing, but well below the 10-20 range the lesson recommends, and the ratio lands around 2:1.",
                why:
                  "Partial seeding beats none, but the stage-build overspend already capped the ceiling on this run.",
                lessonRef: "A Framework for Realistic Budgets: 'Brief 10-20 micro-creators or loyal customers'",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-2-seeding-funded",
          label: "Week 2: Full Seeding Wave",
          elapsed: "Week 2 of 4",
          concept: "Seeding the first wave with micro-creators",
          lessonAnchor: "a-framework-for-realistic-budgets",
          situation:
            "With $11,000 remaining, you can brief 15 micro-creators at $500 each ($7,500) with $3,500 left for measurement tools and staff, or spend it all on one paid macro-influencer instead.",
          dashboard: "Total budget: $15,000 | Spent so far: $4,000 | Weeks remaining: 3",
          spendToDate: "$4,000",
          budgetRemaining: "$11,000",
          decision: {
            prompt: "How do you seed the first wave?",
            options: [
              {
                id: "one-macro-influencer",
                label: "Spend it all on one macro-influencer post",
                verdict: "costly",
                outcome:
                  "One post generates a spike, but there's no crowd reacting in real time and no budget left for measurement, so leadership can't verify the ratio at all.",
                why:
                  "The lesson's framework is about a seeded first wave of many small creators reacting together, not a single paid post.",
                lessonRef: "A Framework for Realistic Budgets: 'Brief 10-20 micro-creators or loyal customers'",
                nextStageId: "end",
              },
              {
                id: "fifteen-micro-creators",
                label: "Brief 15 micro-creators within the recommended range",
                verdict: "optimal",
                outcome:
                  "15 creators post within the first hour, giving the algorithm and the crowd something to react to, and $3,500 remains for measurement.",
                why:
                  "This lands inside the lesson's specified 10-20 creator range, funded from the budget freed by the cheaper artifact choice.",
                lessonRef: "A Framework for Realistic Budgets: 'Seed the first wave yourself'",
                nextStageId: "stage-3-measurement",
              },
            ],
          },
        },
        {
          stageId: "stage-3-measurement",
          label: "Week 4: Measurement Plan",
          elapsed: "Week 4 of 4",
          concept: "Tracking earned media value against production cost",
          lessonAnchor: "measuring-what-actually-happened",
          situation:
            "The event ran. You have $3,500 left and must decide what to report to leadership: foot traffic and dwell time, or earned media value against production cost.",
          dashboard: "Total budget: $15,000 | Spent so far: $11,500 | Weeks remaining: 0",
          spendToDate: "$11,500",
          budgetRemaining: "$3,500",
          decision: {
            prompt: "What's the primary metric in your report?",
            options: [
              {
                id: "foot-traffic-report",
                label: "Report foot traffic and dwell time as the headline win",
                verdict: "acceptable",
                outcome:
                  "Leadership is pleased on the surface, but the report doesn't answer whether the activation was worth the spend, and next quarter's budget conversation starts from zero again.",
                why:
                  "The lesson calls foot traffic and dwell time table stakes, not the win condition.",
                lessonRef: "Measuring What Actually Happened: 'Foot traffic and dwell time are table stakes, not the win condition'",
                nextStageId: "end",
              },
              {
                id: "earned-media-ratio-report",
                label: "Report earned media value against production cost as the primary ratio",
                verdict: "optimal",
                outcome:
                  "The activation closes at roughly 3.4:1, above the lesson's 3:1 minimum, and the number becomes the case for next quarter's budget.",
                why:
                  "Tracking this ratio directly is what the lesson names as the primary win condition, and the cheaper artifact plus full seeding is what got the ratio there.",
                lessonRef: "Measuring What Actually Happened: 'Track earned media value against production cost as your primary ratio'",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Track budget allocation and earned media value ratio across the four weeks",
            why: "Free, sufficient for a single-event budget tracker",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva",
            role: "Design the artifact's printed or shareable output template",
            why: "Faster templated design than a from-scratch tool for a small production run",
            required: false,
            fallback: "Google Slides for a simpler printable template",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A four-week budget allocation log ending in a reported earned-media-to-production ratio, with the reasoning for each spend decision.",
      sampleOutput:
        "HelloFresh Regional Pop-Up, Budget Log (excerpt)\n\n" +
        "Week 1: Artifact — $4,200 on a build-your-own-spice-box interactive station\n" +
        "Week 2: Seeding — $7,300 across 14 micro-creators, briefed to post within the first hour\n" +
        "Week 4: Measurement — earned media value $58,000 vs. $15,000 production cost = 3.9:1\n" +
        "Headline metric reported to leadership: 3.9:1 earned-media ratio, not foot traffic",
      successCriteria: [
        "Chooses the interactive artifact over the static backdrop in stage 1",
        "Funds seeding within the lesson's 10-20 creator range in stage 2 or 3",
        "Reports earned media value against production cost, not foot traffic, as the final metric",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation starting from the underfunded-seeding branch and calculate how much lower the final ratio lands, to build a one-page case for why artifact cost discipline matters more than production polish.",
    },
  ],
  "virtual-hybrid-events": [
    {
      id: "virtual-hybrid-session-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Attention Cliff: Diagnosing a Failing Virtual Session Agenda",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-shaped virtual session agenda, find the design defects that cause the 25-30 minute disengagement cliff the lesson names, and separate them from plausible-but-fine agenda choices.",
      companyId: "zendesk",
      scenario:
        "You're a virtual events coordinator at Zendesk, reviewing a draft agenda for an upcoming customer webinar before it goes live to registrants.",
      brief:
        "Read the draft session agenda, flag every defect against the lesson's attention-decay framework, and separate real defects from acceptable choices.",
      mode: "teardown",
      conceptsCovered: ["What Holds Attention vs. What Causes Drop-off"],
      teardownItems: [
        {
          itemId: "session-agenda-draft",
          specimen:
            "DRAFT AGENDA: 'Customer Success Deep Dive' (60 minutes)\n\n" +
            "0:00-0:05  Welcome and sponsor thank-yous\n" +
            "0:05-0:50  Panel discussion: three customer success leaders discuss retention strategy (no audience prompts scheduled)\n" +
            "0:50-0:55  Q&A (moderator reads 2 pre-submitted questions)\n" +
            "0:55-1:00  Closing and registration link for next event\n\n" +
            "Registration confirmation email says: 'Save your seat, 500+ signed up already!'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Identify every defect in this agenda that the lesson's data predicts will cause drop-off, and note which elements are actually fine.",
          answerKey: [
            {
              defect: "45-minute unbroken panel discussion with no scheduled interaction cue",
              severity: "critical",
              whyItMatters:
                "The lesson names passive, one-way delivery for 30+ minutes with no interaction cue as 'the single most common virtual-attendance killer,' and the average viewer disengages at 25-30 minutes regardless.",
              lessonRef: "What Holds Attention vs. What Causes Drop-off",
              owner: "you",
            },
            {
              defect: "No interaction point scheduled before the 20-minute mark",
              severity: "critical",
              whyItMatters:
                "The lesson specifically recommends a built-in interaction point before the 20-minute mark, not just somewhere in the session.",
              lessonRef: "What Holds Attention vs. What Causes Drop-off: 'a built-in interaction point before the 20-minute mark'",
              owner: "you",
            },
            {
              defect: "Q&A uses only 2 pre-submitted questions instead of live audience prompts",
              severity: "moderate",
              whyItMatters:
                "Pre-submitted questions read passively rather than resetting the attention clock the way live Q&A, polls, or chat prompts do.",
              lessonRef: "What Holds Attention vs. What Causes Drop-off",
              owner: "you",
            },
            {
              defect: "Registration email conflates sign-ups with attendance ('500+ signed up already')",
              severity: "moderate",
              whyItMatters:
                "The lesson's own warning callout says roughly half of registrants never watch, so celebrating sign-up counts sets a misleading success expectation before the session even runs.",
              lessonRef: "Callout warning: 'Do not report registration counts to leadership as attendance'",
              owner: "you",
            },
          ],
          distractors: [
            "The session includes sponsor thank-yous at the open",
            "The session is exactly 60 minutes long",
            "The closing segment promotes a future event",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "List each agenda segment and mark defects against the framework",
            why: "Free and sufficient for a short teardown checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A marked-up agenda with each defect labeled by severity and lesson reference, plus a corrected version with interaction points inserted before minute 20.",
      sampleOutput:
        "Nubank Webinar Teardown (excerpt)\n\n" +
        "DEFECT (critical): 40-minute unbroken product demo, no poll or chat prompt scheduled\n" +
        "  Fix: insert a 2-question poll at minute 15 and a live chat prompt at minute 30\n" +
        "DEFECT (moderate): registration email says '800 registered' with no attendance framing\n" +
        "  Fix: track and report watch-time completion rate instead",
      successCriteria: [
        "Correctly flags the 45-minute unbroken panel as the critical defect",
        "Correctly identifies the sign-up vs. attendance conflation as a defect",
        "Does not flag genuinely acceptable elements (sponsor thank-yous, session length, closing CTA) as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "virtual-hybrid-track-design-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Two Tracks, One Event: Building a Parallel Hybrid Session Plan",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Design a parallel in-person and virtual track plan for one hybrid session, giving the virtual audience content it does not just inherit from a camera on the stage, per the lesson's design framework.",
      companyId: "slack",
      scenario:
        "You're planning content for a Slack customer conference breakout session. Leadership's first draft simply says 'stream the in-person breakout,' and you've been asked to redesign it as a real hybrid session.",
      brief:
        "Build a two-track session plan naming a dedicated virtual moderator, a virtual-exclusive segment, and interaction points that reset the 25-30 minute attention clock.",
      mode: "build",
      conceptsCovered: [
        "Designing both experiences in parallel from the brief stage",
        "Giving the virtual audience something the room does not get",
      ],
      steps: [
        {
          stepId: "step-1-parallel-tracks",
          concept: "Designing both experiences in parallel from the brief stage",
          lessonAnchor: "designing-hybrid-so-neither-audience-is-an-afterthought",
          theoryRecap:
            "The lesson's most common hybrid mistake is building the in-person event first and bolting a camera on afterward; the fix is designing both tracks in parallel with separate moderators and separate interaction cadences.",
          question:
            "Draft the in-person track and virtual track side by side for a 45-minute breakout on 'Automating Customer Onboarding.' What does each track own?",
          toolName: "Google Docs",
          where: "Build a two-column table, in-person track vs. virtual track.",
          procedure: [
            "List what the in-person track gets: networking, hallway conversations, physical product demo",
            "List what the virtual track gets: its own moderator, its own interaction cadence, content edited specifically for a screen",
            "Name a dedicated virtual producer separate from the in-person stage manager",
            "Confirm no single person is assigned to run both tracks at once",
          ],
          outputSample:
            "IN-PERSON TRACK\n  Owner: Stage manager\n  Content: live product demo, post-session networking table\n\nVIRTUAL TRACK\n  Owner: Dedicated virtual producer (separate person)\n  Content: screen-recorded demo cut for remote viewing, live chat-based Q&A relay",
          healthy:
            "Two named owners exist, one per track, and the virtual content list is different from the in-person list rather than a subset of it.",
          unhealthy:
            "The same stage manager is listed as owning both tracks, or the virtual track's content is just 'watch the stream.'",
          interpret:
            "Parallel design means two different content plans and two different owners, not one plan streamed twice.",
          soWhat: [
            {
              symptom: "The plan lists only one owner for both tracks",
              action: "Assign a dedicated virtual producer before the session is built further",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-exclusive-segment",
          concept: "Giving the virtual audience something the room does not get",
          lessonAnchor: "designing-hybrid-so-neither-audience-is-an-afterthought",
          theoryRecap:
            "The lesson recommends a dedicated Q&A moderator relaying questions live, exclusive digital-only breakout content, or downloadable resources timed to each segment, plus a 5-minute virtual-only segment at the top of every session.",
          question:
            "Design the 5-minute virtual-only opener and one exclusive digital-only element for this session. What goes in each?",
          toolName: "Google Docs",
          where: "Add a third section to the plan for virtual-exclusive elements.",
          procedure: [
            "Write the 5-minute virtual-only opener script, hosted by the dedicated virtual producer",
            "Design one exclusive element: a downloadable resource, a digital-only breakout, or a live relay Q&A role",
            "Add an interaction point before the 20-minute mark of the main session, a poll or chat prompt",
            "Check the plan gives virtual attendees at least one thing the in-person room does not get",
          ],
          outputSample:
            "VIRTUAL-ONLY OPENER (5 min)\n  Host: dedicated virtual producer\n  Content: preview of the downloadable onboarding checklist, quick poll on attendees' current onboarding pain point\n\nEXCLUSIVE ELEMENT\n  Downloadable automation template, released only in the virtual chat during the session\n\nINTERACTION POINT\n  Minute 15: live poll relayed into both rooms by the virtual moderator",
          healthy:
            "The plan names at least one virtual-exclusive element and one interaction point before minute 20.",
          unhealthy:
            "The 'virtual-exclusive' element is just an early login link with no unique content.",
          interpret:
            "An exclusive element closes the second-class-attendee feeling the lesson warns kills return registration; a login link does not count as exclusive content.",
          soWhat: [
            {
              symptom: "Virtual attendees get nothing the room doesn't also get",
              action: "Add one real exclusive element, a resource, a role, or a segment they don't share with the room",
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
            role: "Build the two-track content plan as a shared table",
            why: "Free and easy to share with the in-person and virtual leads",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Zoom",
            role: "Host the virtual track's dedicated stream and chat-based interaction",
            why: "Free tier supports polls and chat for a single-session breakout",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot Marketing Hub",
            role: "Send segmented pre-session and follow-up content to virtual vs. in-person registrants",
            why: "Lets the two tracks receive genuinely different email content, reinforcing the parallel-design principle",
            required: false,
            fallback: "Google Forms plus manual email segmentation for a single small session",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A two-track session plan naming separate owners, a 5-minute virtual-only opener, one virtual-exclusive element, and a scheduled interaction point before minute 20.",
      sampleOutput:
        "Freshworks Customer Day, Breakout Plan (excerpt)\n\n" +
        "IN-PERSON TRACK (owner: stage manager)\n  Live demo, post-session vendor booth walk\n\n" +
        "VIRTUAL TRACK (owner: virtual producer, separate person)\n  5-min opener: preview of the exclusive integration checklist\n  Minute 15: live poll on current integration blockers\n  Exclusive: downloadable checklist released only in virtual chat",
      successCriteria: [
        "Names two separate owners, one per track",
        "Includes a real virtual-exclusive element, not just early access to the stream",
        "Places an interaction point before the 20-minute mark",
      ],
      portfolioReady: true,
    },
  ],

  "event-lead-follow-up": [
    {
      id: "trade-show-lead-scoring-audit",
      tier: "mini",
      archetype: "audit",
      title: "Hot, Warm, or Cold: Scoring a Real Badge-Scan Sheet Before It Goes Stale",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given an 18-row badge-scan export with booth notes, title, and time spent, apply the lesson's hot/warm/cold scoring criteria to correctly tier every row and flag which ones need a same-day sales call.",
      companyId: "freshworks",
      scenario:
        "You're the field marketing coordinator at Freshworks, the Chennai-founded, Nasdaq-listed B2B SaaS company (FRSH). Your booth at a regional SaaS conference just closed, and you have a spreadsheet of 18 badge scans with the notes reps typed in during conversations.",
      brief:
        "Score every row hot, warm, or cold using the signals actually written in the notes, then hand sales a same-day call list instead of a 300-row dump nobody opens.",
      mode: "diagnostic",
      conceptsCovered: [
        "Scoring leads hot, warm, or cold at the moment of conversation",
        "Building a follow-up SLA queue from the tiered list",
      ],
      steps: [
        {
          stepId: "step-1-score-the-scans",
          concept: "Scoring leads hot, warm, or cold at the moment of conversation",
          lessonAnchor: "scoring-leads-at-the-booth-hot-warm-cold",
          theoryRecap:
            "The lesson defines hot as a pricing/timeline/integration question or a decision-maker title staying 5+ minutes, warm as genuine interest with no urgency signal, and cold as a swag grab or no-fit visitor.",
          question:
            "Given these 18 rows of raw booth notes, which ones are hot (sales call today), which are warm (personal email in 24h), and which are cold (nurture only)?",
          toolName: "Google Sheets",
          where: "Import the badge-scan export, add a Tier column, and filter by the notes and title field.",
          procedure: [
            "Import the 18-row export and freeze the header row",
            "Read each row's notes field for a pricing, timeline, or integration question",
            "Check the title field for a decision-maker title (VP, Director, Head of, Founder)",
            "Tag each row Hot, Warm, or Cold in a new Tier column based on those two signals",
          ],
          outputSample:
            "Row  Title                    Notes (verbatim)                                  Tier\n" +
            "3    VP Marketing             Asked about API pricing tiers, stayed 8 min       HOT\n" +
            "7    Marketing Coordinator     Liked the demo, no questions on cost              WARM\n" +
            "11   Student                   Grabbed a t-shirt, walked off                     COLD\n" +
            "14   Director of Ops           Asked if it integrates with their current CRM      HOT\n" +
            "16   Marketing Manager         Good questions on features, no urgency signal      WARM\n" +
            "...13 more rows",
          healthy: "Every Hot row has either a buying-stage question or a decision-maker title backing the tag, not a gut feeling.",
          unhealthy: "Tagging a row Hot because the rep 'had a good vibe' about the conversation with no pricing, timeline, or title signal in the notes.",
          interpret: "The tier is only as reliable as the two signals it's built from. A tag with no textual evidence behind it is a guess wearing a label.",
          soWhat: [
            { symptom: "Half the Hot tags have no pricing/timeline/title evidence in the notes column", action: "Re-score using only the two documented signals, downgrade anything without evidence to Warm", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-same-day-sla",
          concept: "Building a follow-up SLA queue from the tiered list",
          lessonAnchor: "the-follow-up-window-data-on-response-decay",
          theoryRecap:
            "The lesson's decay data shows a 5-minute response converts 21x better than a 30-minute one, and connection odds fall 10x after 48 hours, so the SLA has to be attached to the tier immediately, not decided later.",
          question:
            "Using your Hot/Warm/Cold tiers from step 1, what SLA (call today, email in 24h, nurture in 48h) does each tier get, and which 3 rows are you personally calling before lunch?",
          toolName: "Google Sheets",
          where: "Add an SLA column and a Due-By timestamp next to the Tier column from step 1.",
          procedure: [
            "Add an SLA column: Hot = 'Call today', Warm = 'Email in 24h', Cold = 'Nurture in 48h'",
            "Add a Due-By column with a real timestamp, not just 'today'",
            "Sort the sheet by SLA so all 3 Hot rows sit at the top",
            "Copy the 3 Hot rows into a separate 'Call Now' tab for sales",
          ],
          outputSample:
            "Row  Tier  SLA              Due-By\n" +
            "3    HOT   Call today       Today, 4:00 PM\n" +
            "14   HOT   Call today       Today, 4:00 PM\n" +
            "9    HOT   Call today       Today, 4:00 PM\n" +
            "7    WARM  Email in 24h     Tomorrow, 11:00 AM\n" +
            "16   WARM  Email in 24h     Tomorrow, 11:00 AM\n" +
            "11   COLD  Nurture in 48h   +2 days, auto-enroll",
          healthy: "The 3 Hot rows are called before the sales team leaves the show floor, not emailed to them for 'whenever.'",
          unhealthy: "The whole 18-row sheet gets forwarded to sales as one flat list with no SLA column, and they work top to bottom by row number.",
          interpret: "A tier without an attached deadline is just a label. The SLA column is what actually protects the 21x response-speed advantage.",
          soWhat: [
            { symptom: "Hot leads sit in the same queue as Cold leads with no visible deadline", action: "Split Hot rows into their own 'Call Now' tab the moment scoring is done", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Score and tier the badge-scan export, build the SLA queue", why: "Free, no account friction, works from a booth laptop", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "HubSpot CRM", role: "Auto-route Hot rows to a rep's call queue the moment they're tagged", why: "Removes the manual copy-paste step from Sheets into a rep's task list", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A tiered, SLA-stamped badge-scan queue ready to hand to sales before the team leaves the show floor.",
      sampleOutput:
        "Zendesk, Regional CX Summit badge-scan queue (excerpt)\n\n" +
        "CALL NOW (3 rows)\n" +
        "  Row 2   VP Customer Experience   Asked about SSO and pricing tiers   Call today, 3:30 PM\n" +
        "  Row 9   Director of Support      Wants a 2-seat pilot next month     Call today, 3:30 PM\n\n" +
        "EMAIL WITHIN 24H (6 rows)\n" +
        "  Row 5   Support Ops Manager      Liked the AI ticket routing demo    Email tomorrow, 10 AM\n\n" +
        "NURTURE (9 rows)\n" +
        "  Row 12  Student                  Grabbed swag, no fit                Auto-enroll, +2 days",
      successCriteria: [
        "All 18 rows are tagged Hot, Warm, or Cold with a documented signal, not a guess",
        "Every Hot row has an SLA and a real Due-By timestamp attached",
        "The 3 Hot rows are isolated into a separate call-now list for sales",
      ],
      portfolioReady: true,
    },
    {
      id: "post-show-follow-up-cadence-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the 3-Tier Follow-Up Cadence Pack: Call Script, Email, and Nurture Opener",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Produce a complete, ready-to-use follow-up cadence pack, a same-day hot-lead call script, a 24-hour warm-lead email template, and a 48-hour cold-lead nurture opener, each referencing the specific booth conversation instead of a generic template.",
      companyId: "zendesk",
      scenario:
        "You're on the field marketing team at Zendesk, the customer-engagement SaaS company, the morning after a trade show. Sales has the tiered lead list from the booth; now they need the actual words to say and send, written before the scramble starts.",
      brief:
        "Write all three cadence pieces now, before the show ends, so no rep is staring at a blank email at 9pm trying to remember what a lead said.",
      mode: "build",
      conceptsCovered: [
        "Same-day call script for hot leads",
        "24-hour personalized email for warm leads",
        "48-hour nurture-sequence opener for cold leads",
      ],
      steps: [
        {
          stepId: "step-1-hot-call-script",
          concept: "Same-day call script for hot leads",
          lessonAnchor: "scoring-leads-at-the-booth-hot-warm-cold",
          theoryRecap:
            "Hot leads asked about pricing, timeline, or a specific integration, or a decision-maker stayed 5+ minutes. The lesson says these go to sales same-day, full stop.",
          question:
            "A Hot lead asked specifically about SSO setup and a 2-seat pilot. Write the opening 3 lines of the same-day call script a rep would actually read from.",
          toolName: "Google Sheets",
          where: "Draft the script in a shared 'Cadence Pack' tab so every rep pulls from the same source.",
          procedure: [
            "Open with the specific thing the lead asked about at the booth, not 'hi, following up from the show'",
            "State the one next step you're proposing (a 15-minute pilot-scoping call)",
            "Write a fallback line for voicemail that still references the specific conversation",
            "Save the script in the shared tab labeled 'Hot: Call Script'",
          ],
          outputSample:
            "HOT CALL SCRIPT\n" +
            "'Hi [Name], this is [Rep] from Zendesk, we spoke yesterday at [Show] about SSO setup for your support team.'\n" +
            "'You mentioned wanting to pilot with 2 seats, I'd like to set up a 15-minute call this week to scope that out.'\n" +
            "Voicemail fallback: 'I'll follow up by email today with the SSO documentation you asked about, and a couple of times that could work for a quick call.'",
          healthy: "The first line names the specific thing the lead asked about, so they remember the conversation instead of wondering who's calling.",
          unhealthy: "A script that opens with 'I wanted to follow up from the conference' and could apply to any of the 140 leads captured.",
          interpret: "Specificity is what makes a same-day call feel like a continuation of a real conversation instead of a cold call with extra steps.",
          soWhat: [
            { symptom: "The call script is generic enough to use on any lead", action: "Add a mandatory [specific ask/topic] field to the script template", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-warm-email-template",
          concept: "24-hour personalized email for warm leads",
          lessonAnchor: "the-follow-up-window-data-on-response-decay",
          theoryRecap:
            "Warm leads showed genuine interest with no urgency signal. The lesson's cadence puts these on a personal email inside 24 hours, referencing the specific booth conversation.",
          question:
            "A Warm lead liked the demo but asked no pricing questions. Write the subject line and first two sentences of the 24-hour warm-lead email.",
          toolName: "Google Sheets",
          where: "Draft alongside the call script in the same 'Cadence Pack' tab, labeled 'Warm: Email Template.'",
          procedure: [
            "Write a subject line that references the show and the specific thing demoed, not 'Great meeting you'",
            "Open the email by naming the exact feature or workflow the lead responded to in the demo",
            "Offer one low-friction next step (a recorded walkthrough, not a sales call) since there's no urgency signal yet",
            "Save the template in the shared tab",
          ],
          outputSample:
            "WARM EMAIL TEMPLATE\n" +
            "Subject: The AI ticket-routing demo from [Show], plus the workflow you asked about\n" +
            "'Hi [Name], great talking with you at [Show], you had good questions about how the AI routing handles priority tickets.'\n" +
            "'I put together a 4-minute walkthrough of that exact workflow, no meeting required, take a look when you have a minute.'",
          healthy: "The email references the specific feature discussed and offers a low-friction next step matching 'interested but no urgency.'",
          unhealthy: "Sending the Warm lead the same 'let's schedule a demo' CTA meant for Hot leads, mismatching the ask to the actual buying signal.",
          interpret: "Warm leads need proof and ease, not a sales push. Matching the CTA to the tier is what keeps the 24-hour email from feeling pushy.",
          soWhat: [
            { symptom: "Warm-lead emails ask for a sales call with no lower-friction option offered first", action: "Swap the CTA to a recorded walkthrough or one-pager, not a meeting request", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cold-nurture-opener",
          concept: "48-hour nurture-sequence opener for cold leads",
          lessonAnchor: "the-conference-bag-of-business-cards-problem",
          theoryRecap:
            "The lesson's whole premise is that unscored, unsorted contacts overwhelm whoever inherits them and simply expire. Cold leads need an automated opener, not a rep's attention, or they become next year's bag of business cards.",
          question:
            "A Cold lead grabbed swag with no real fit signal. Write the opening line of the 48-hour nurture email that keeps them in the pipeline without wasting a rep's time.",
          toolName: "Google Sheets",
          where: "Draft as the third and final entry in the shared 'Cadence Pack' tab, labeled 'Cold: Nurture Opener.'",
          procedure: [
            "Write an opener that's honest about the low-touch context: a resource, not a pitch",
            "Point to one piece of educational content, not a demo request",
            "Set the entry trigger explicitly (auto-enrolled 48 hours after the show, not manually sent)",
            "Save the opener in the shared tab so this list never sits unsorted in a spreadsheet again",
          ],
          outputSample:
            "COLD NURTURE OPENER (auto-enrolled +48h)\n" +
            "Subject: The guide we handed out at [Show], in case the line was too long to grab one\n" +
            "'Hi [Name], thanks for stopping by our booth at [Show]. Here's the same customer-support benchmarks guide we were handing out, no strings attached.'\n" +
            "CTA: a link to the guide only, no meeting request.",
          healthy: "Cold leads get automatically enrolled in a low-touch sequence within 48 hours instead of sitting in a spreadsheet until the next show.",
          unhealthy: "Cold leads are exported to a CSV and never touched again, which is exactly the 80%-never-followed-up failure the lesson opens with.",
          interpret: "The Cold tier isn't a discard pile, it's the tier most likely to be abandoned entirely, which is why it needs its own pre-written, automated opener.",
          soWhat: [
            { symptom: "Cold-tier rows have no follow-up plan at all", action: "Auto-enroll every Cold row into the nurture opener the moment scoring is done", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Draft and store all three cadence pieces in one shared tab", why: "Free, easy for reps to copy from during the scramble after a show", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "HubSpot Marketing Hub", role: "Turn the warm-email and cold-nurture drafts into an automated sequence", why: "Automates the 24h and 48h send timing instead of relying on a rep to remember", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A complete 3-tier follow-up cadence pack (hot call script, warm email template, cold nurture opener), ready to copy into a CRM's sequence tool.",
      sampleOutput:
        "Slack, DevConf follow-up cadence pack (excerpt)\n\n" +
        "HOT CALL SCRIPT\n" +
        "'Hi [Name], this is [Rep] from Slack, you asked about Enterprise Grid rollout timelines at DevConf yesterday.'\n\n" +
        "WARM EMAIL, Subject: The workflow builder demo from DevConf\n" +
        "'You had good questions about the approval-chain automation, here's a 3-minute walkthrough of exactly that.'\n\n" +
        "COLD NURTURE, Subject: The team-collaboration checklist from our DevConf booth\n" +
        "'Thanks for stopping by, here's the same checklist, no meeting required.'",
      successCriteria: [
        "All three cadence pieces reference a specific, concrete detail rather than generic show language",
        "The CTA in each piece matches its tier's urgency level (call, low-friction email, resource-only nurture)",
        "The cold nurture piece is written to auto-enroll, not to depend on a rep remembering to send it",
      ],
      portfolioReady: true,
    },
  ],
  "event-budgeting-roi": [
    {
      id: "trade-show-budget-completeness-calibration",
      tier: "mini",
      archetype: "forecast",
      title: "The $15K Booth Fee Trap: Calibrating What a Trade Show Really Costs",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given only the booth-space fee and a partial vendor quote, forecast the realistic total event cost using the lesson's 3x multiplier and line-item checklist, then check the forecast against a real itemized answer key.",
      companyId: "chewy",
      scenario:
        "You're the field marketing analyst at Chewy, the pet ecommerce company known for its splashy pop-up and experiential activations. Finance approved a $15,000 booth-space fee for a regional pet-industry trade show and wants your realistic total-cost estimate before anyone signs the contract.",
      brief:
        "Forecast the true total cost before finance gets surprised in the reconciliation meeting, then calibrate your estimate against the real line-item numbers.",
      mode: "calibration",
      conceptsCovered: [
        "Total event cost runs roughly 3x the floor-space fee",
        "Line-item checklist: space, logistics, staffing, materials, follow-up tooling",
      ],
      steps: [
        {
          stepId: "step-1-forecast-total-cost",
          concept: "Total event cost runs roughly 3x the floor-space fee",
          lessonAnchor: "building-a-budget-that-doesnt-blow-up-mid-show",
          theoryRecap:
            "The lesson cites industry data showing total show cost runs roughly 3x the floor-space fee alone once exhibit build, staffing travel, and promo are added, and recommends a 10-15% contingency on top.",
          question:
            "Booth fee is $15,000. Before seeing the real numbers, what's your estimate for total event cost, and which 3 line items do you expect to be the biggest surprises?",
          toolName: "Google Sheets",
          where: "Build a blank forecast worksheet with one row per line-item category before looking at any real numbers.",
          procedure: [
            "List the 5 categories from the lesson's checklist: space, logistics, staffing, materials, follow-up tooling",
            "Write your own dollar guess next to each category using only the booth fee as your anchor",
            "Sum your guesses and compare the total to the lesson's 3x rule of thumb ($15,000 x 3 = $45,000)",
            "Flag which 3 categories you're least confident about",
          ],
          outputSample:
            "YOUR FORECAST (before reveal)\n" +
            "  Space/exhibit build:   $______\n" +
            "  Logistics (drayage):   $______\n" +
            "  Staffing/travel:       $______\n" +
            "  Materials/swag:        $______\n" +
            "  Follow-up tooling:     $______\n" +
            "  Your total:            $______  (lesson's 3x benchmark: $45,000)",
          healthy: "The forecast total lands within a reasonable range of the 3x benchmark before any real numbers are revealed.",
          unhealthy: "Forecasting only the booth fee plus a vague 'extra costs' lump sum instead of pricing out each of the 5 categories separately.",
          interpret: "A forecast built category by category catches the specific line items that blindside first-time exhibitors; a lump-sum guess doesn't.",
          soWhat: [
            { symptom: "The forecast total is far below the 3x benchmark", action: "Re-check drayage and staffing travel specifically, the two categories that most often get underestimated", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-calibrate-against-key",
          concept: "Line-item checklist: space, logistics, staffing, materials, follow-up tooling",
          lessonAnchor: "the-real-line-item-checklist",
          theoryRecap:
            "The lesson's line-item checklist covers space and exhibit build, logistics, staffing, materials, and follow-up tooling, and notes that cost per qualified lead ($150-$500) is the only number worth comparing across channels.",
          question:
            "Compare your forecast to the real answer key below. Which categories did you undercount, and does the revised total put you inside the $150-$500 cost-per-qualified-lead range for an expected 120 qualified leads?",
          toolName: "Google Sheets",
          where: "Add an 'Actual' column next to your forecast column and compute the delta per row.",
          procedure: [
            "Enter the real answer-key numbers into an Actual column",
            "Compute the delta (Actual minus Forecast) for each category",
            "Sum the Actual column, add a 10% contingency, and get the true total",
            "Divide the true total by 120 expected qualified leads to get cost per qualified lead",
          ],
          outputSample:
            "ANSWER KEY (Actual)\n" +
            "  Space/exhibit build:   $8,500\n" +
            "  Logistics (drayage):   $3,200\n" +
            "  Staffing/travel:       $9,600\n" +
            "  Materials/swag:        $2,400\n" +
            "  Follow-up tooling:     $600\n" +
            "  Booth fee:             $15,000\n" +
            "  Subtotal:              $39,300\n" +
            "  10% contingency:       $3,930\n" +
            "  TRUE TOTAL:            $43,230\n" +
            "  Cost per qualified lead (120 expected): $360.25  (inside the $150-$500 range)",
          healthy: "The true total lands close to the 3x benchmark, and cost per qualified lead falls inside the $150-$500 range the lesson calls comparable.",
          unhealthy: "Reporting the $15,000 booth fee to finance as 'the event cost' and only discovering the other $28,000 in the reconciliation meeting.",
          interpret: "Calibrating your own estimate against a real answer key is what catches undercounted categories before the contract gets signed, not after.",
          soWhat: [
            { symptom: "Cost per qualified lead comes out above $500", action: "Renegotiate the swag or drayage line, or push for a smaller booth footprint, before signing", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the forecast worksheet and the calibration comparison", why: "Free, fast to set up before a contract deadline", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A calibrated, itemized event budget forecast with a verified cost-per-qualified-lead figure.",
      sampleOutput:
        "HelloFresh, regional food-industry trade show budget forecast (excerpt)\n\n" +
        "  Booth fee:             $12,000\n" +
        "  Space/exhibit build:   $6,800\n" +
        "  Logistics (drayage):   $2,600\n" +
        "  Staffing/travel:       $7,400\n" +
        "  Materials/swag (sampling kits): $3,100\n" +
        "  Follow-up tooling:     $500\n" +
        "  10% contingency:       $3,240\n" +
        "  TRUE TOTAL:            $35,640  (2.97x booth fee)\n" +
        "  Cost per qualified lead (95 expected): $375.16",
      successCriteria: [
        "Forecast is built category by category, not as a single lump-sum guess",
        "The true total is compared to the lesson's 3x benchmark and a 10% contingency is included",
        "Cost per qualified lead is calculated and checked against the $150-$500 comparable range",
      ],
      portfolioReady: true,
    },
    {
      id: "event-pipeline-roi-audit",
      tier: "core",
      archetype: "audit",
      title: "Leads Captured Isn't the Number: Auditing an Event's Real Pipeline ROI",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given an event's total cost, leads captured, qualified-lead split, close rate, and average deal size, calculate pipeline value and ROI using the lesson's formula, and identify why a one-month report would have understated the real result.",
      companyId: "wise",
      scenario:
        "You're a marketing analyst at Wise, the cross-border payments company, six months after exhibiting at a fintech conference. Leadership wants to know if the event was worth the budget, not how many badges got scanned.",
      brief:
        "Calculate pipeline value instead of reporting a lead count, and flag why the one-month report leadership already saw was misleading.",
      mode: "diagnostic",
      conceptsCovered: [
        "Pipeline value = leads captured x close rate x average deal size",
        "6-month attribution window vs premature one-month reporting",
      ],
      steps: [
        {
          stepId: "step-1-pipeline-value",
          concept: "Pipeline value = leads captured x close rate x average deal size",
          lessonAnchor: "roi-measurement-pipeline-not-leads-captured",
          theoryRecap:
            "The lesson replaces lead-count reporting with pipeline value = leads captured x close rate x average deal size, the one number that's comparable across channels.",
          question:
            "Total event cost was $52,000. Of 140 leads captured, only 38 were qualified (hot+warm tiers). Close rate on qualified event leads runs 22%, average deal size is $18,000. What's the pipeline value and the ROI, and why can't you use all 140 leads in the formula?",
          toolName: "Google Sheets",
          where: "Build a single-row calculation: qualified leads, close rate, deal size, pipeline value, ROI.",
          procedure: [
            "Filter the 140 leads down to the 38 qualified (hot+warm) rows, discard the rest from this formula",
            "Multiply 38 x 0.22 (close rate) x $18,000 (average deal size)",
            "Divide the result by the $52,000 total event cost to get ROI",
            "Write one sentence explaining why the 102 unqualified leads are excluded from the calculation",
          ],
          outputSample:
            "PIPELINE VALUE CALCULATION\n" +
            "  Qualified leads:        38\n" +
            "  Close rate:             22%\n" +
            "  Avg deal size:          $18,000\n" +
            "  Pipeline value:         38 x 0.22 x $18,000 = $150,480\n" +
            "  Total event cost:       $52,000\n" +
            "  ROI:                    $150,480 / $52,000 = 2.89x (289%)",
          healthy: "Only the 38 qualified leads feed the close-rate math, since unqualified leads have no realistic path to a closed deal.",
          unhealthy: "Running the formula on all 140 leads captured, which inflates pipeline value with contacts that were never going to convert.",
          interpret: "Pipeline value is only honest when close rate is applied to leads that were actually qualified, not to raw booth traffic.",
          soWhat: [
            { symptom: "The ROI report uses total leads captured instead of qualified leads", action: "Re-run the formula on the qualified subset only and correct the reported ROI", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-attribution-window-check",
          concept: "6-month attribution window vs premature one-month reporting",
          lessonAnchor: "roi-measurement-pipeline-not-leads-captured",
          theoryRecap:
            "The lesson notes B2B SaaS companies should expect 60-70% of event-generated pipeline to convert within 6 months, so judging an event one month out will always understate its real value.",
          question:
            "One month after the show, only 15 of the 38 qualified leads have advanced to a real opportunity. Should you report the event as underperforming? What does the 6-month attribution window tell you to do instead?",
          toolName: "Google Sheets",
          where: "Add a status column tagged with the event name and date, filtered by time-since-event.",
          procedure: [
            "Tag every one of the 38 qualified leads with the event name and date at the moment of import",
            "Check the current status of each lead: closed, active opportunity, or still nurturing",
            "Compare the 1-month conversion rate (15/38 = 39%) against the lesson's 60-70% six-month expectation",
            "Recommend holding the final ROI report until the 6-month mark instead of reporting at 1 month",
          ],
          outputSample:
            "ATTRIBUTION WINDOW CHECK\n" +
            "  Leads advanced at 1 month:   15 / 38 (39%)\n" +
            "  Lesson's 6-month expectation: 60-70% of qualified leads typically advance\n" +
            "  Recommendation: hold the final ROI report until month 6, report interim progress only,\n" +
            "  since 39% at month 1 is consistent with, not behind, a 60-70% six-month trajectory.",
          healthy: "Leadership sees a 1-month progress update labeled as interim, with the real ROI verdict scheduled for the 6-month mark.",
          unhealthy: "Declaring the event a failure at the 1-month mark because only 39% of qualified leads have closed, before the attribution window has run.",
          interpret: "A one-month snapshot measures speed, not outcome. The lesson's 6-month window is what actually validates or kills an event's ROI verdict.",
          soWhat: [
            { symptom: "Leadership already saw a 1-month report calling the event underperforming", action: "Send a correction noting the 6-month attribution window and the interim-vs-final distinction", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Calculate pipeline value, ROI, and the attribution-window comparison", why: "Free, sufficient for a single-event ROI calculation", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "HubSpot CRM", role: "Tag leads with event name/date at import and pull a filtered 6-month pipeline report automatically", why: "CRM-integrated attribution produces roughly 2-3x more accurate conversion tracking than a manual spreadsheet", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A pipeline-value ROI calculation with a recommended reporting timeline, ready to present to leadership.",
      sampleOutput:
        "Nubank, fintech conference ROI audit (excerpt)\n\n" +
        "  Total event cost:       $38,000\n" +
        "  Qualified leads:        29\n" +
        "  Close rate:             19%\n" +
        "  Avg deal size:          $14,500\n" +
        "  Pipeline value:         29 x 0.19 x $14,500 = $79,895\n" +
        "  ROI:                    $79,895 / $38,000 = 2.10x (210%)\n" +
        "  1-month conversion:     9 / 29 (31%), within the expected 6-month trajectory\n" +
        "  Recommendation: report interim only, final ROI verdict at the 6-month mark.",
      successCriteria: [
        "Pipeline value is calculated from qualified leads only, not total leads captured",
        "ROI is expressed as a ratio against total event cost, not as a raw lead count",
        "The report distinguishes an interim 1-month update from the final 6-month attribution verdict",
      ],
      portfolioReady: true,
    },
  ],
};
