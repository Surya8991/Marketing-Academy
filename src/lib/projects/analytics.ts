/**
 * Practice projects for the `analytics` category.
 *
 * Keyed by lesson slug (a category module can hold multiple lessons' worth
 * of projects, PROJECTS_PLAN.md 5.1 / AGENTS.md Rule 37: per-category
 * modules, dynamically imported, never one giant file like quizzes.ts).
 *
 * `analytics-101` is the single most centrality-heavy lesson in the
 * curriculum (6 track references, the "Beginner x Hub" cell PROJECTS_PLAN.md
 * calls load-bearing), so its audit project runs the full five-part runbook
 * depth across all five of the lesson's core terms rather than a subset.
 *
 * Numbers cited from public/project-data/funnel-data.csv are the actual
 * sums/rates in that file (verify: sum "visit" stage visitors across all
 * rows = 51,426; per-channel visit->purchase = purchase visitors / visit
 * visitors, e.g. paid_social = 160/6,849 = 2.34%, organic = 435/22,119 =
 * 1.97%, paid_search = 276/14,976 = 1.84%, email = 147/7,482 = 1.96%).
 */

import type { Project } from "@/lib/projects/types";

export const ANALYTICS_PROJECTS: Record<string, Project[]> = {
  "analytics-101": [
    {
      id: "analytics-101-instacart-tracking-audit",
      tier: "big",
      archetype: "audit",
      title: "The Full GA4 Tracking Audit: Instacart's Marketing Funnel",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Run a genuine five-part audit of a grocery-delivery marketplace's marketing funnel export, the way an analyst actually validates a GA4 setup before trusting a single number in it: session logic, engagement quality, active-user definition, key-event configuration, and vanity-vs-actionable channel reporting.",
      companyId: "instacart",
      scenario:
        "You've been brought in to audit the marketing analytics setup for a grocery-delivery marketplace built on the Instacart model, two-sided, retailer-partnership-driven growth with an in-house funnel from first visit to repeat order. The marketing team trusts their dashboard completely. Your job before the next budget review: find out if that trust is earned.",
      brief:
        "Five real questions, five real answers, using the actual 30-day funnel export below. Each one maps to one of the five core vocabulary terms from the lesson: event, session, engaged session, active user, and key event. By the end you'll have a verdict on whether this dashboard is measuring what the team thinks it's measuring.",
      mode: "diagnostic",
      conceptsCovered: [
        "Session",
        "Engaged Session",
        "User (vs. Active User)",
        "Key Event",
        "Actionable vs. Vanity Metrics",
      ],
      steps: [
        {
          concept: "Session",
          lessonAnchor: "2-session",
          theoryRecap:
            "A session groups events from one user in one visit and ends after 30 minutes of inactivity. Critically, GA4 does NOT start a new session just because a user clicks a new campaign link mid-visit, unlike the older Universal Analytics.",
          question:
            "Is this property's session-timeout setting actually the GA4 default (30 min), or has someone silently changed it, and does the funnel export's day-level session count make sense given the setting?",
          toolName: "Google Analytics 4",
          where:
            "Admin > Data Streams > [stream] > Configure Tag Settings > Session timeout, cross-checked against public/project-data/funnel-data.csv 'visit' counts by day",
          procedure: [
            "Open Admin > Data Streams > the web stream > Configure Tag Settings > Adjust session timeout, confirm it reads 30 minutes, not a custom value set during a past 'fix'",
            "Pull the daily 'visit' totals from the funnel export for June 1-30",
            "Sanity-check: does the day-to-day visit volume look plausible for the channel mix (organic/paid_search/paid_social/email), or are there suspicious single-day spikes suggesting a session-timeout misconfiguration inflating or fragmenting counts",
          ],
          outputSample:
            "GA4 Admin > Data Streams > Web > Configure Tag Settings > Session timeout: 30 minutes (default, unchanged)\n\n" +
            "Daily 'visit' totals, sample week (Jun 1-7): 1,782 / 1,809 / 1,617 / 1,717 / 2,204 / 1,253 / 1,509\n" +
            "30-day total visits: 51,426 across 4 channels (organic 22,119 / paid_search 14,976 / paid_social 6,849 / email 7,482)",
          healthy:
            "Session timeout reads the GA4 default of 30 minutes (or a deliberately documented custom value), and daily visit counts move smoothly with channel mix, no unexplained single-day 3x spikes.",
          unhealthy:
            "Session timeout has been changed to something short (e.g. 5 minutes) without documentation, which artificially inflates session counts by chopping up single visits, or something very long, which artificially deflates them by merging separate visits.",
          interpret:
            "The 30-day total of 51,426 visits across four channels, with organic carrying the largest share (22,119, about 43%), is consistent with a marketing-led acquisition mix and no red flags in the daily pattern. The session-timeout setting checks out at the default.",
          soWhat: [
            {
              symptom: "Session timeout set to a non-default value with no change-log entry explaining why",
              action:
                "Revert to the 30-minute default unless there's a documented product reason, then re-baseline the last 30 days of reporting so it isn't compared against pre-change numbers",
              effort: "30 min",
            },
            {
              symptom: "Unexplained single-day visit spikes not matching any known campaign launch",
              action: "Check for bot traffic or a tagging duplication bug before trusting that day's number in any report",
              effort: "half day",
            },
          ],
          owner: "developer",
          stepId: "analytics-audit-step-1",
        },
        {
          concept: "Engaged Session",
          lessonAnchor: "3-engaged-session",
          theoryRecap:
            "An engaged session must meet at least one of three bars: lasted longer than 10 seconds, fired at least one key event, or had 2+ page views. Mistake 4: a jump in sessions paired with a drop in engagement rate usually means bot traffic or broken tracking, not real growth.",
          question:
            "Does this property's engagement rate hold steady as visit volume moves, or is there a channel where sessions are rising while engagement quietly falls, the exact pattern the lesson flags as a red flag?",
          toolName: "Google Analytics 4",
          where:
            "Reports > Engagement > Overview, engagement rate by channel, cross-referenced against the visit-to-signup conversion rate per channel in the funnel export",
          procedure: [
            "Pull visit-to-signup conversion rate per channel from the 30-day funnel export as a proxy for engagement quality (a visit that never converts to even a signup click sits at the low-engagement end)",
            "Compare the four channels against each other: organic, paid_search, paid_social, email",
            "Flag any channel whose visit volume is large but whose downstream conversion is disproportionately weak, a possible engagement or bot-traffic issue worth a deeper GA4 engagement-rate pull",
          ],
          outputSample:
            "Channel        Total visits   visit->signup %\n" +
            "organic          22,119           10.57%\n" +
            "paid_search      14,976           10.29%\n" +
            "paid_social       6,849           10.79%\n" +
            "email             7,482           10.59%",
          healthy:
            "visit-to-signup conversion is roughly consistent across channels (within a couple of points of each other, as seen here: 10.29%-10.79%), meaning no channel is disproportionately dumping low-quality, low-engagement traffic into the top of the funnel.",
          unhealthy:
            "One channel shows visit volume comparable to the others but a visit-to-signup rate several points lower, a classic bot-traffic or broken-attribution signature.",
          interpret:
            "All four channels land within half a point of each other (10.29% to 10.79%), there's no channel here showing the sessions-up/engagement-down pattern the lesson flags. This audit's engagement quality checks out; it's not where this dashboard's problem is.",
          soWhat: [
            {
              symptom: "A channel's visit-to-signup rate sitting 3+ points below the others",
              action:
                "Pull that channel's GA4 engagement rate directly (Reports > Engagement > Overview, filtered by channel) and check for a bot-traffic or duplicate-tag signature before trusting its top-of-funnel volume",
              effort: "half day",
            },
          ],
          owner: "you",
          stepId: "analytics-audit-step-2",
        },
        {
          concept: "User (vs. Active User)",
          lessonAnchor: "4-user-vs-active-user",
          theoryRecap:
            "GA4's default 'Users' card actually shows Active Users, people with at least one engaged session, not the older Universal Analytics definition that counted anyone who landed, even instant bouncers. Mistake 1: comparing GA4 numbers to old UA numbers as if they measure the same thing.",
          question:
            "Is the marketing team's monthly report quoting GA4's Active Users number, or has someone quietly swapped in a raw visit count and relabeled it 'users,' inflating the reported reach?",
          toolName: "Google Analytics 4",
          where: "Reports snapshot > Active Users card, cross-checked against the number printed in last month's marketing deck",
          procedure: [
            "Open the GA4 Reports snapshot and note the Active Users figure for the reporting period",
            "Pull the number the marketing team's monthly deck actually labeled 'users' or 'reach'",
            "Compare the two, if the deck's number is meaningfully higher than GA4's Active Users, trace where the bigger number came from",
          ],
          outputSample:
            "GA4 Active Users (last 30 days, users with >=1 engaged session): closest real proxy is the signup-stage total in the funnel export, 5,410 users who signed up out of 51,426 total visits\n" +
            "Marketing deck's 'Total Users Reached' figure: 51,426 (this is total visits, not users, and not filtered to engaged sessions at all)",
          healthy:
            "The number labeled 'users' anywhere in a report traces cleanly back to GA4's Active Users definition, and readers understand it means people who had a meaningful visit, not every raw pageview.",
          unhealthy:
            "A raw visit or session count gets relabeled 'users' in a deck, inflating reported reach by counting the same person multiple times across sessions, or counting bounced, non-engaged visits as if they were real audience.",
          interpret:
            "The marketing deck's 51,426 'Total Users Reached' figure is actually the raw visit count, not Active Users, and it isn't even deduplicated by person. The real Active User signal is much closer to engaged, signed-up traffic. This is the Mistake 1 pattern in the wild, an old habit of quoting the biggest available number under the 'users' label.",
          soWhat: [
            {
              symptom: "A report's 'users' figure is actually an undeduplicated visit or session count",
              action: "Relabel it accurately (Total Visits) and pull the real GA4 Active Users number separately, don't let the two share a label",
              effort: "5 min",
            },
            {
              symptom: "Historical decks all carry the same mislabeling",
              action: "Add a one-time footnote to the next report explaining the relabeling so trend lines aren't misread as a sudden 'user' drop",
              effort: "30 min",
            },
          ],
          owner: "either",
          stepId: "analytics-audit-step-3",
        },
        {
          concept: "Key Event",
          lessonAnchor: "5-key-event",
          theoryRecap:
            "A key event (formerly 'conversion') is any event flagged as a meaningful business outcome. Mistake 2: marking every event as a key event makes the conversion rate meaningless, pick 1-3 outcomes per funnel stage.",
          question:
            "How many events are currently flagged as key events on this property, and does the count suggest disciplined outcome-tracking or 'mark everything, hope something's useful' sprawl?",
          toolName: "Google Analytics 4",
          where: "Admin > Events > Mark as key event toggle list",
          procedure: [
            "Open Admin > Events and list every event currently toggled on as a key event",
            "Compare that list against the funnel export's actual meaningful stages: signup, activation, purchase, retained",
            "Flag any key event that isn't tied to one of those real outcome stages",
          ],
          outputSample:
            "Events currently flagged as key events (8 total):\n" +
            "  sign_up, begin_checkout, purchase, add_to_cart, scroll_75, video_start, newsletter_click, app_download_click\n\n" +
            "Funnel stages that actually represent business outcomes (per the export): signup, activation (first order behavior), purchase, retained",
          healthy: "1-3 key events per meaningful funnel stage, each one tied to a real outcome (sign_up, purchase), not passive engagement signals.",
          unhealthy:
            "8 events flagged as 'key,' several of which (scroll_75, video_start) are engagement signals, not outcomes, the Mistake 2 pattern in the wild: if everything is a key event, nothing is.",
          interpret:
            "5 of the 8 flagged key events (add_to_cart, scroll_75, video_start, newsletter_click, app_download_click) are engagement or intent signals, not completed outcomes. Any 'key event conversion rate' pulled from this property right now is averaging real purchases together with people who merely scrolled 75% down a page, the number is close to meaningless as reported.",
          soWhat: [
            {
              symptom: "8+ events flagged as key events on one property",
              action:
                "Un-flag everything except sign_up, begin_checkout, and purchase (the three that map to real funnel stages), keep the rest as regular events, still analyzable, just not polluting the conversion rate",
              effort: "30 min",
            },
            {
              symptom: "Team resistance to un-flagging 'scroll_75' because 'we like watching that number'",
              action: "It can still be tracked and reported as a regular engagement event, key-event status is what's being removed, not the tracking itself",
              effort: "5 min",
            },
          ],
          owner: "developer",
          stepId: "analytics-audit-step-4",
        },
        {
          concept: "Actionable vs. Vanity Metrics",
          lessonAnchor: "actionable-vs-vanity-metrics",
          theoryRecap:
            "Vanity metrics look good but don't connect to revenue or decisions (total pageviews, follower counts). Actionable metrics connect directly to outcomes and tell you what to do next (conversion rate, CAC, revenue per session).",
          question: "Looking at the channel breakdown, which channel does the vanity metric (total visits) say is winning, and does the actionable metric (visit-to-purchase rate) agree?",
          toolName: "Looker Studio",
          where: "Full-funnel channel breakdown, visits (vanity, top of funnel) vs. visit-to-purchase (actionable, full funnel)",
          procedure: [
            "Pull total visits by channel (the vanity-adjacent, top-line number most reports lead with)",
            "Compute visit-to-purchase rate by channel (chain visit-to-signup by signup-to-activation by activation-to-purchase from the earlier steps)",
            "Rank channels by each metric separately and see if the rankings agree",
          ],
          outputSample:
            "Channel        Total visits (rank)   visit->purchase % (rank)\n" +
            "organic         22,119 (#1)           1.97% (#2)\n" +
            "paid_search     14,976 (#2)           1.84% (#4)\n" +
            "paid_social      6,849 (#4)           2.34% (#1)\n" +
            "email             7,482 (#3)           1.96% (#3)",
          healthy: "The channel that ranks #1 on the vanity metric (visits) is also the channel a budget decision should favor, the two rankings roughly agree.",
          unhealthy:
            "The visits ranking and the actionable visit-to-purchase ranking disagree, meaning a budget decision made off the vanity number alone would favor the wrong channel.",
          interpret:
            "paid_social ranks 4th by raw visits but 1st by visit-to-purchase rate (2.34%, meaningfully ahead of organic's 1.97%). A budget review that only looked at 'which channel drives the most traffic' would keep underfunding the channel that's actually converting best. This is the audit's real finding: the dashboard's default sort order (by visits) is quietly steering decisions toward the wrong channel.",
          soWhat: [
            {
              symptom: "Budget decisions being made from a channel report sorted by visits/sessions by default",
              action: "Re-sort or add a visit-to-purchase (or visit-to-key-event) column as the default view before the next budget review",
              effort: "5 min",
            },
            {
              symptom: "paid_social's small volume (6,849 visits) makes it easy to dismiss despite its strong conversion rate",
              action: "Recommend a modest test-budget increase for paid_social and re-measure visit-to-purchase at the new volume before committing a large shift",
              effort: "dev ticket",
            },
          ],
          owner: "you",
          stepId: "analytics-audit-step-5",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "The source of truth for every setting audited in Steps 1-4",
            why: "Free at any traffic volume this project's scenario involves, the entire audit runs on the free tier.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Looker Studio",
            role: "Building the Step 5 channel comparison table",
            why: "Free, connects directly to GA4 or a raw CSV export for the pivot used in Step 5.",
            required: true,
            fallback: "Any spreadsheet tool (Google Sheets, Excel) works identically for this pivot.",
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Event-level cohort analysis beyond GA4's default reports",
            why: "A useful upgrade once a property passes this basic audit and the team wants deeper behavioral cohorting, never a requirement to run the audit itself.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The entire audit above uses GA4's free tier and a spreadsheet-level channel comparison. A Mixpanel or Amplitude paid tier is an upgrade for teams that outgrow GA4's reporting depth, never a requirement to run this audit.",
      },
      datasetUrl: "/project-data/funnel-data.csv",
      deliverable:
        "A five-finding audit memo (one finding per step above) with a specific fix and owner for each, plus the re-sorted channel table from Step 5 as the one chart to bring to the next budget review.",
      sampleOutput:
        "Findings: (1) session timeout at the GA4 default, no issue; (2) engagement consistent across channels, no bot-traffic signature found; (3) the marketing deck's 'Total Users Reached' (51,426) is actually raw visits, not GA4 Active Users, mislabeled; (4) 8 events flagged as key events, 5 of them are engagement signals, not outcomes, over-tagged the way a marketplace with dozens of on-page micro-interactions, like Care.com's, would need to watch for; (5) paid_social ranks last by raw visits (6,849) but first by visit-to-purchase rate (2.34%), the channel report's default sort is quietly hiding the best-converting channel. Two findings need a developer ticket (session/event config), three are same-day fixes.",
      successCriteria: [
        "Correctly distinguishes the 30-minute session default from a possible misconfiguration using real evidence, not assumption",
        "Identifies the specific mislabeling of 'visits' as 'users' in Step 3, citing the actual GA4 Active User definition",
        "Flags the correct 5 over-tagged key events in Step 4 (the engagement-signal ones, not the 3 legitimate outcome events)",
        "Reaches the Step 5 finding that paid_social outconverts organic despite lower volume, and recommends re-sorting the channel report rather than just noting the discrepancy",
      ],
      portfolioReady: true,
      stretch:
        "Run this same five-step audit on a GA4 property you actually have admin access to (yours, a client's, or a volunteer nonprofit's). The session-timeout and key-event-count checks alone catch a surprising share of real-world misconfigurations.",
    },
    {
      id: "analytics-101-chewy-broken-tracking-rebuild",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild Chewy's Broken Analytics Setup from a Handoff Doc",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a real-looking handoff document from a departed analyst at a pet-ecommerce company modeled on Chewy, find every gap against the lesson's five core terms and specify the exact fix for each, then produce a corrected tracking plan a developer could implement without guessing.",
      companyId: "chewy",
      scenario:
        "The analyst who set up tracking for a pet-products ecommerce site (Chewy's playbook: recurring subscription orders, customer-service-driven retention) left last month with no documentation beyond a two-paragraph handoff email. Numbers in the dashboard don't match what the customer-service team hears from shoppers, and nobody can say why.",
      brief:
        "Below is the entire handoff doc you were given. Using the lesson's five-term vocabulary as your checklist, find what's missing or wrong, and write the corrected tracking plan a developer could implement without another meeting.\n\n" +
        "---\n" +
        "Hey! Sorry for the short notice. Quick summary of what's set up:\n" +
        "- GA4 is installed on the main site and checkout flow.\n" +
        "- Session timeout is set to 5 minutes, I shortened it early on to 'get more session data' for a stakeholder report.\n" +
        "- Key events: purchase, add_to_cart, product_view, scroll, newsletter_signup, size_guide_click, all six are flagged as key events.\n" +
        "- No custom events for 'subscription reorder' or 'chat_with_support' yet, I know those matter but didn't get to it.\n" +
        "- Event naming has gotten messy: button_click_pdp_addtocart_v2_mobile, button_click_pdp_addtocart_v3_desktop, and add-to-cart-click are all live at once for basically the same action.\n" +
        "Good luck!\n" +
        "---",
      mode: "build",
      conceptsCovered: ["Event", "Session", "Key Event", "Actionable vs. Vanity Metrics"],
      steps: [
        {
          concept: "Session",
          lessonAnchor: "2-session",
          theoryRecap:
            "A session groups events from one user in one visit and ends after 30 minutes of inactivity, GA4's default. A shortened timeout chops single visits into multiple sessions.",
          question: "What's wrong with the 5-minute session timeout, and what should it be changed to?",
          toolName: "Google Analytics 4",
          where: "Admin > Data Streams > Configure Tag Settings > Session timeout",
          procedure: [
            "Read the handoff line: session timeout was manually shortened to 5 minutes 'to get more session data'",
            "Understand the mechanism: a shorter timeout chops single continuous visits into multiple 'sessions' whenever a shopper pauses more than 5 minutes (comparing subscription plans, reading reviews)",
            "Specify the fix: revert to the 30-minute GA4 default, and flag that all historical session-count reporting since the change is artificially inflated and should be footnoted or excluded from trend comparisons",
          ],
          outputSample:
            "Current setting: Session timeout = 5 minutes (non-default, undocumented change)\n" +
            "Effect: any shopper who pauses 5-30 minutes mid-visit now generates 2+ 'sessions' instead of 1\n" +
            "Fix: revert to 30-minute GA4 default; annotate the reporting dashboard at the date of the original change so nobody compares pre/post session counts as if they mean the same thing",
          healthy: "Session timeout at the 30-minute default (or a documented, deliberate exception).",
          unhealthy: "A shortened timeout inflating session counts, especially dangerous because it makes 'sessions' look like it's growing when it's really the same visits counted multiple times.",
          interpret:
            "This single misconfiguration alone explains at least part of why the dashboard numbers 'don't match what customer service hears,' session count here isn't a real growth signal, it's an artifact of the 5-minute setting.",
          soWhat: [
            {
              symptom: "Session count trending up with no matching increase in orders or revenue",
              action: "Check the session-timeout setting before investigating anything else, this exact pattern is what a too-short timeout produces",
              effort: "5 min",
            },
          ],
          owner: "developer",
          stepId: "rebuild-step-1",
        },
        {
          concept: "Key Event",
          lessonAnchor: "5-key-event",
          theoryRecap: "Mistake 2: marking every event as a key event makes the conversion rate meaningless, pick 1-3 outcomes per funnel stage.",
          question:
            "Of the six events flagged as key events, which ones should actually keep that status, and which two custom events are missing entirely?",
          toolName: "Google Analytics 4",
          where: "Admin > Events",
          procedure: [
            "List the six currently-flagged key events: purchase, add_to_cart, product_view, scroll, newsletter_signup, size_guide_click",
            "Sort into real outcomes (tied to revenue or lifecycle) vs. engagement signals",
            "Specify the two missing custom events the handoff admits were never built: subscription_reorder and chat_with_support, and explain why a subscription-retention business needs both flagged as key events",
          ],
          outputSample:
            "Keep as key event: purchase (revenue outcome)\n" +
            "Un-flag (engagement signals, not outcomes): add_to_cart, product_view, scroll, newsletter_signup, size_guide_click\n" +
            "Missing entirely, needs to be built: subscription_reorder (custom event, fires when a recurring order renews), chat_with_support (custom event, fires when a shopper opens a support chat)",
          healthy: "Key events map to real revenue/lifecycle outcomes; a subscription-driven retention business tracks its reorder event as a key event, not just its first purchase.",
          unhealthy: "Engagement signals (scroll, product_view) diluting the key-event conversion rate, while the business's actual retention mechanism (reorders) isn't tracked as an event at all.",
          interpret:
            "The current setup over-counts weak signals as key events while missing the two events (subscription_reorder, chat_with_support) that would actually explain the gap between the dashboard and what customer service hears, support conversations are invisible to analytics entirely right now.",
          soWhat: [
            {
              symptom: "Customer-service team reporting patterns the dashboard doesn't show",
              action: "Build the chat_with_support custom event first, it's the direct link between what CS hears and what analytics can see",
              effort: "dev ticket",
            },
            {
              symptom: "Reorder/retention behavior invisible in the current event set",
              action: "Build subscription_reorder as a custom key event, the actual outcome-tracking metric for a subscription-retention business",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
          stepId: "rebuild-step-2",
        },
        {
          concept: "Event",
          lessonAnchor: "1-event",
          theoryRecap:
            "Every interaction is an event; each can carry up to 25 parameters. Mistake 3: stuffing context into event names instead of using parameters, e.g. button_click_pricing_page_hero_v2_mobile is a reporting nightmare, use event: click with parameters location/page/device instead.",
          question: "The handoff lists three different event names for what should be one action, 'add to cart.' What's the fix?",
          toolName: "Google Analytics 4",
          where: "Admin > Events, and the site's tagging implementation (GTM or hardcoded gtag calls)",
          procedure: [
            "List the three live event names for the same action: button_click_pdp_addtocart_v2_mobile, button_click_pdp_addtocart_v3_desktop, add-to-cart-click",
            "Recognize the pattern from Mistake 3: context (page, version, device) got stuffed into the event name instead of being passed as parameters",
            "Specify the fix: consolidate to one event name (add_to_cart) with parameters for page and device, and retire the old fragmented names going forward (historical data stays as-is, don't retroactively rewrite it)",
          ],
          outputSample:
            "Before (3 fragmented events): button_click_pdp_addtocart_v2_mobile, button_click_pdp_addtocart_v3_desktop, add-to-cart-click\n" +
            "After (1 event, parameterized): event: add_to_cart, parameters: page = 'pdp', device = 'mobile' | 'desktop'",
          healthy: "One event name per real action, with page/device/version details passed as filterable parameters instead of baked into the name.",
          unhealthy: "Multiple near-duplicate event names for the same action, splitting what should be one metric into three, so 'add to cart rate' is undercounted unless someone remembers to sum all three every time.",
          interpret:
            "Anyone building an add-to-cart report today has to know to sum three differently-named events, and anyone who forgets will silently undercount by two-thirds of the real number. This is the exact reporting nightmare Mistake 3 describes.",
          soWhat: [
            {
              symptom: "The same user action tracked under multiple event names",
              action: "Consolidate to one event with parameters going forward; document the change so future reports don't need the pre-fix history to be accurate",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
          stepId: "rebuild-step-3",
        },
        {
          concept: "Actionable vs. Vanity Metrics",
          lessonAnchor: "actionable-vs-vanity-metrics",
          theoryRecap: "Vanity metrics look good but don't connect to revenue or decisions. Actionable metrics connect directly to outcomes and tell you what to do next.",
          question: "Once the fixes above ship, what's the one actionable metric this business should report weekly that the current setup can't produce at all today?",
          toolName: "Looker Studio",
          where: "The corrected tracking plan's summary section",
          procedure: [
            "Name the metric that becomes possible only after subscription_reorder exists as a key event: reorder rate (subscribers who reorder divided by active subscribers)",
            "Explain why this is the actionable metric (ties directly to retention revenue) vs. the vanity metrics the old setup was over-reporting (scroll, product_view counts)",
            "Write the one-line summary for the corrected tracking plan's cover page",
          ],
          outputSample:
            "New reportable metric (post-fix): Weekly reorder rate = subscription_reorder events / active subscriber count\n" +
            "Old vanity numbers retired from the weekly report: scroll count, product_view count (still tracked as regular events, no longer reported as headline numbers)",
          healthy: "The corrected tracking plan's headline weekly metric is something tied to revenue/retention, not a raw engagement count.",
          unhealthy: "The corrected plan still leads with scroll or product_view counts out of habit, missing the point of the whole rebuild.",
          interpret:
            "The entire audit was worth it specifically because it makes weekly reorder rate reportable for the first time, the number that actually explains subscription-business health, and it didn't exist anywhere in the original setup.",
          soWhat: [
            {
              symptom: "New tracking plan approved but the weekly report template not updated",
              action: "Update the report template to lead with reorder rate before the next reporting cycle, otherwise the fix ships but the habit doesn't change",
              effort: "30 min",
            },
          ],
          owner: "either",
          stepId: "rebuild-step-4",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Where every setting in the handoff doc lives and gets fixed",
            why: "Free at any traffic volume, the entire rebuild runs on the free tier.",
            required: true,
            lastVerified: "2026-08-12",
          },
          {
            toolName: "Looker Studio",
            role: "The corrected tracking plan's summary reporting view",
            why: "Free, sets up the new weekly reorder-rate report referenced in Step 4.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paid: [
          {
            toolName: "Mixpanel",
            role: "Cohort-level reorder analysis once the subscription_reorder event exists",
            why: "An upgrade once the fixed event is live and the team wants deeper cohort behavior on it, never required to write the fix plan.",
            required: false,
            lastVerified: "2026-08-12",
          },
        ],
        paidUpgradeNote:
          "The free path (GA4 for the fixes, Looker Studio for the new report) is complete on its own. Mixpanel is only worth paying for once the new subscription_reorder event has enough volume to analyze at a cohort level.",
      },
      deliverable:
        "A corrected tracking plan: session-timeout fix, key-event list (kept, dropped, new), the consolidated event-naming scheme, and the one new actionable weekly metric it unlocks.",
      sampleOutput:
        "Fixes: (1) session timeout reverted to the 30-min default, historical session counts since the 5-min change flagged as non-comparable; (2) key events trimmed to purchase only, plus two new custom events built (subscription_reorder, chat_with_support); (3) three fragmented add-to-cart event names consolidated into one parameterized event; (4) new weekly headline metric, reorder rate, replaces scroll and product_view counts in the report template. This mirrors the same discipline Instacart's own funnel relies on: track the actual repeat-purchase behavior a two-sided marketplace depends on, not the loudest available engagement number.",
      successCriteria: [
        "Identifies the 5-minute session timeout as the root cause of inflated/fragmented session counts",
        "Correctly separates the one legitimate key event (purchase) from the five that should be un-flagged, and names both missing custom events",
        "Specifies the event-naming consolidation (one event, parameters) rather than just noting the names are 'messy'",
        "Names reorder rate as the new actionable weekly metric the fix unlocks, tied to the business's actual retention model",
      ],
      portfolioReady: true,
      stretch:
        "Find a real handoff doc, README, or tracking-plan spreadsheet from a past job or side project and run the same five-term checklist against it. Most self-grown tracking setups accumulate at least two of these four exact problems.",
    },
  ],
};
