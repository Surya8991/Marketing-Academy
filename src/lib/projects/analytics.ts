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

  "dark-social": [
    {
      id: "dark-social-freshworks-traffic-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Dark Social Traffic Audit: Unmasking Direct Traffic in GA4",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Audit a B2B SaaS company's GA4 direct traffic by landing page depth, UTM tagging completeness, and mobile app referrer loss to calculate what percentage of direct visits is actually dark social.",
      companyId: "freshworks",
      scenario:
        "You have been brought in to evaluate the inbound acquisition reporting for Freshworks' customer service and CRM product line. The quarterly dashboard shows 42% of inbound demo requests originating from 'Direct / (none)' traffic, leading leadership to believe prospects are spontaneously typing freshworks.com into their browsers. Your audit will isolate deep-URL landing traffic, evaluate campaign link tagging, and calculate the true dark social share.",
      brief:
        "Run three systematic diagnostics using Google Analytics 4 and spreadsheet reconciliation. You will classify landing page depths for direct sessions, audit UTM parameter integrity across email and shareable resources, and reconcile software attribution against self-reported survey responses.",
      mode: "diagnostic",
      conceptsCovered: [
        "Direct Traffic Segmentation",
        "UTM Parameter Hygiene",
        "Self-Reported Attribution Reconciliation",
      ],
      steps: [
        {
          concept: "Direct Traffic Segmentation",
          lessonAnchor: "method-5-look-at-your-direct-traffic-differently",
          theoryRecap:
            "Homepage visits with no referrer are often genuinely direct (bookmarks, typing the URL). In contrast, direct visits landing deep on product feature pages, pricing calculators, or specific blog guides are almost exclusively dark social: links pasted into WhatsApp, Slack, Teams, or email.",
          question:
            "What percentage of 'direct/none' sessions are landing on deep content URLs (>2 directory levels deep) versus the root homepage, and how much traffic does this reclassify as dark social?",
          toolName: "Google Analytics 4",
          where:
            "GA4 > Reports > Engagement > Landing page (filtered by Session default channel group = 'Direct')",
          procedure: [
            "Navigate to GA4 > Reports > Engagement > Landing page",
            "Add a filter for Session default channel group exactly matches 'Direct'",
            "Add a secondary dimension: Page path and screen class",
            "Export the top 50 landing pages to Google Sheets and categorize each into Root (/ or /login) vs Deep Content (/blog/*, /features/*, /resources/*)",
            "Calculate the ratio of deep landing page sessions to total direct sessions to estimate dark social volume",
          ],
          outputSample:
            "GA4 Direct Landing Page Breakdown (Sample 30-Day Window):\n" +
            "--------------------------------------------------------------------------------\n" +
            "Landing Page Path                    | Sessions | % of Direct | Classification\n" +
            "--------------------------------------------------------------------------------\n" +
            "/                                   |   14,200 |       35.5% | Genuine Direct\n" +
            "/login                              |    4,800 |       12.0% | Returning User\n" +
            "/blog/customer-service-benchmarks-24|    6,400 |       16.0% | Dark Social (Deep)\n" +
            "/crm/pricing-calculator             |    4,100 |       10.3% | Dark Social (Deep)\n" +
            "/compare/freshdesk-vs-zendesk       |    3,900 |        9.8% | Dark Social (Deep)\n" +
            "/resources/cx-roi-framework-pdf     |    3,200 |        8.0% | Dark Social (Deep)\n" +
            "/product/omnichannel-suite          |    3,400 |        8.5% | Dark Social (Deep)\n" +
            "--------------------------------------------------------------------------------\n" +
            "Total Direct Sessions: 40,000 | Deep URL Dark Social Volume: 21,000 (52.5%)",
          healthy:
            "Direct traffic is segmented into intentional direct (homepage/app login, 30-40%) and dark social discovery (deep URLs, 60-70%), with reporting acknowledging dark social attribution.",
          unhealthy:
            "100% of direct traffic is treated as returning brand-aware users, ignoring that thousands of first-time visitors arrive via private link shares.",
          interpret:
            "Over 52% of Freshworks' direct traffic arrives on deep URLs (like competitive comparisons and pricing tools) that no user types by hand. This represents 21,000 monthly sessions of unmeasured peer-to-peer sharing.",
          soWhat: [
            {
              symptom: "Leadership treats direct traffic as organic brand equity instead of earned peer sharing",
              action:
                "Create a custom GA4 Exploration segmenting 'True Direct' (homepage/login) from 'Dark Social Direct' (deep URLs) for all executive reporting",
              effort: "30 min",
            },
            {
              symptom: "Deep comparison pages receive high direct traffic with low conversion due to generic landing CTAs",
              action:
                "Add context-specific 'Share with your team' and tailored onboarding CTAs to high-volume deep landing pages",
              effort: "half day",
            },
          ],
          owner: "you",
          stepId: "dark-social-audit-step-1",
        },
        {
          concept: "UTM Parameter Hygiene",
          lessonAnchor: "method-1-utm-parameters-on-every-shareable-link",
          theoryRecap:
            "Clean URLs pasted into private channels lose their referrer header. Pre-tagging outbound newsletter links, social share buttons, and in-app share dialogs with UTM parameters forces GA4 to record the campaign and medium even when opened in a native messaging app.",
          question:
            "Are outbound email newsletters, in-app share links, and downloadable PDF assets tagged with consistent UTM campaign parameters, or are untagged links leaking into direct traffic?",
          toolName: "Google Analytics 4",
          where:
            "GA4 > Reports > Acquisition > Traffic acquisition (filtered by Session source / medium containing 'email' or 'share')",
          procedure: [
            "Inspect inbound traffic sources under Traffic Acquisition for missing campaign parameters (`(not set)` or `(direct)`) on campaign dates",
            "Audit 5 recent email campaigns and product share buttons to verify all destination URLs carry `utm_source`, `utm_medium`, and `utm_campaign`",
            "Check for parameter casing inconsistency (e.g. `utm_source=Newsletter` vs `utm_source=newsletter`) that fragments reporting in GA4",
          ],
          outputSample:
            "UTM Parameter Audit Matrix (Recent Outbound Assets):\n" +
            "-----------------------------------------------------------------------------------------\n" +
            "Asset / Channel            | Destination URL Sample                | Status   | Issue\n" +
            "-----------------------------------------------------------------------------------------\n" +
            "Weekly Product Digest Email| freshworks.com/crm/new-features       | Leaking  | No UTMs attached\n" +
            "G2 Review Promo Newsletter | freshworks.com/g2?utm_source=Email    | Warning  | Uppercase 'Email'\n" +
            "CX Benchmark Report PDF    | freshworks.com/cx-report-2025         | Leaking  | Raw PDF link\n" +
            "In-App 'Share Report' CTA  | freshworks.com/s/cx25?utm_source=app  | Healthy  | Trackable link\n" +
            "Partner Webinar Invite     | freshworks.com/webinar?utm_medium=cpc | Broken   | Medium set as cpc\n" +
            "-----------------------------------------------------------------------------------------",
          healthy:
            "All owned distribution channels (email, PDF whitepapers, share widgets) use lowercase, standardized UTM parameters, capturing at least 80% of traceable private shares.",
          unhealthy:
            "Links are shared raw with no UTM tags or with inconsistent casing, causing 40%+ of email and referral traffic to collapse into (direct)/(none).",
          interpret:
            "Outbound emails and PDF downloads are distributing raw, untagged URLs. When subscribers forward these assets via Slack or WhatsApp, 100% of subsequent click traffic is stripped of referrer headers and misattributed as Direct.",
          soWhat: [
            {
              symptom: "Untagged newsletter and PDF links creating artificial spikes in Direct traffic on send days",
              action:
                "Enforce a mandatory URL builder template in marketing operations for all email, downloadable asset, and PR links",
              effort: "30 min",
            },
            {
              symptom: "Inconsistent parameter casing fragmenting attribution across multiple rows in GA4",
              action:
                "Standardize all UTM values to lowercase in marketing documentation and configure GA4 lowercasing filters",
              effort: "5 min",
            },
          ],
          owner: "you",
          stepId: "dark-social-audit-step-2",
        },
        {
          concept: "Self-Reported Attribution Reconciliation",
          lessonAnchor: "method-4-surveys-and-self-reported-attribution",
          theoryRecap:
            "Digital analytics only captures click paths, while dark social decisions happen in conversations. Pairing GA4 channel data with open-text 'How did you hear about us?' survey responses reveals which untracked channels (podcasts, Slack groups, peer chats) are actually generating high-intent leads.",
          question:
            "When demo requests and signups are cross-referenced between GA4 first-touch channel and open-text survey responses, what proportion of software-attributed 'Direct' or 'Organic Search' leads cite dark social word-of-mouth?",
          toolName: "Google Sheets",
          where: "Google Sheets (merging CRM lead export with GA4 UTM acquisition data)",
          procedure: [
            "Export 100 recent demo form submissions containing both GA4 source/medium and open-text 'How did you hear about us?' responses",
            "Flag all records where GA4 recorded '(direct) / (none)' or 'google / organic' as the source",
            "Categorize the open-text responses for those records into: Peer Recommendation, Slack/Discord Community, Podcast/Event, or Unspecified",
            "Calculate the Dark Social Discovery Rate: (Dark Social Responses / Total Direct+Organic Leads) * 100",
          ],
          outputSample:
            "Attribution Reconciliation Summary (100 Sample Demo Requests):\n" +
            "-----------------------------------------------------------------------------------------\n" +
            "GA4 Source / Medium     | Form Survey Response ('How did you hear?')       | Real Driver\n" +
            "-----------------------------------------------------------------------------------------\n" +
            "(direct) / (none)       | 'Recommended in the SaaSboomi founder Slack'     | Dark Social (Slack)\n" +
            "(direct) / (none)       | 'Colleague sent me the link on WhatsApp'         | Dark Social (WhatsApp)\n" +
            "google / organic        | 'Heard Chris Walker talk about CX on a podcast'  | Dark Social (Podcast)\n" +
            "google / organic        | 'Saw someone post about your pricing on Reddit'  | Dark Social (Forum)\n" +
            "(direct) / (none)       | 'Bookmark / already use Freshdesk'               | True Direct\n" +
            "-----------------------------------------------------------------------------------------\n" +
            "Reconciliation Metric: 64% of Direct/Organic leads cited an untracked dark social source.",
          healthy:
            "Marketing evaluates acquisition using a hybrid model: GA4 tracks capture mechanics, while self-reported attribution informs demand creation budget.",
          unhealthy:
            "Budget is allocated solely on last-click GA4 data, starving top-of-funnel dark social channels because they show 0 direct conversions in analytics.",
          interpret:
            "64% of leads logged by GA4 as 'Direct' or 'Organic Search' actually originated from word-of-mouth in private Slack groups, podcasts, and peer messaging. Software attribution alone was blind to nearly two-thirds of pipeline creation.",
          soWhat: [
            {
              symptom: "Leadership considering cutting podcast sponsorship or community budget due to zero GA4 conversions",
              action:
                "Present the hybrid attribution model showing that 64% of high-intent enterprise pipeline cites those exact community channels",
              effort: "30 min",
            },
            {
              symptom: "Demo request forms use rigid dropdown menus that hide dark social channels",
              action:
                "Replace dropdown 'Lead Source' fields with an open-text 'How did you first hear about us?' input",
              effort: "30 min",
            },
          ],
          owner: "you",
          stepId: "dark-social-audit-step-3",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Traffic segmentation and channel attribution",
            why: "Isolates Direct/none traffic and inspects landing page depth and UTM parameter consistency.",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Attribution reconciliation and percentage calculation",
            why: "Calculates the ratio of deep vs root direct sessions and blends self-reported survey answers.",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "SparkToro",
            role: "Audience dark social footprint analysis",
            why: "Identifies top podcasts, private communities, and niche accounts where target buyers share links.",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "GA4 and Google Sheets provide 100% of the analytical workflow. SparkToro adds audience-level discovery to identify the specific podcasts and forums generating dark social mentions.",
      },
      deliverable:
        "A 1-page Dark Social Audit Report containing direct traffic classification breakdown, UTM tagging error log, and a hybrid attribution estimate.",
      sampleOutput:
        "DARK SOCIAL AUDIT & ATTRIBUTION REPORT: ZENDESK CUSTOMER SERVICE SUITE\n\n" +
        "1. Direct Traffic Decomposition:\n" +
        "- Total Direct Sessions (Last 30 Days): 82,400\n" +
        "- Root Homepage & Portal Logins: 31,300 sessions (38.0% - Verified Direct / Brand Recall)\n" +
        "- Deep URL Landings (/blog, /benchmarks, /pricing): 51,100 sessions (62.0% - Reclassified Dark Social)\n\n" +
        "2. Outbound Link Audit:\n" +
        "- 4 of 12 active email nurturing sequences lacked UTM tracking on secondary resource CTAs.\n" +
        "- All downloadable benchmark PDFs used bare canonical links, stripping referrer on PDF viewer clicks.\n\n" +
        "3. Hybrid Attribution Reconciliation:\n" +
        "- 140 demo requests analyzed: 58 logged as Direct, 52 as Organic Search, 30 as Paid.\n" +
        "- Open-text survey analysis revealed 71 of the 110 Direct+Organic leads (64.5%) originated from private Slack groups (Support Driven, CX Community) and peer recommendations.\n\n" +
        "Strategic Recommendation: Maintain community sponsorship budget despite 0 last-touch GA4 conversions, and deploy standardized UTM shortlinks across all PDF assets.",
      successCriteria: [
        "Direct traffic is segmented by URL path depth (>1 subfolder) to distinguish brand-recall visits from dark social shares",
        "Outbound marketing links are audited for valid, lowercase UTM parameters across source, medium, and campaign",
        "A dark social adjustment factor is calculated to re-attribute misclassified direct conversions to word-of-mouth channels",
      ],
      portfolioReady: true,
      stretch:
        "Build an automated Looker Studio dashboard that segments GA4 direct traffic into 'Root vs Deep URL' charts with a calculated Dark Social Index score.",
      skills: ["Google Analytics 4", "Dark Social Attribution", "UTM Tracking", "Hybrid Attribution"],
      prerequisites: [
        "Access to a GA4 property with at least 1,000 monthly sessions",
        "Basic familiarity with GA4 Landing Page reports and UTM parameters",
      ],
      terminology: [
        {
          term: "Dark Social",
          definition: "Website traffic arriving from private channels (messaging apps, email, Slack) where referral headers are stripped, causing visits to appear as 'direct'.",
        },
        {
          term: "Deep Landing Page",
          definition: "A specific URL path beyond the root domain (e.g. /blog/post-title or /compare/product-a) indicating a shared link rather than a typed domain name.",
        },
      ],
      keyQuestion:
        "How much of our reported 'direct' traffic is actually unmeasured word-of-mouth, and where is our tracking leaking?",
      whatToLookFor: [
        {
          label: "Deep URL Direct Spikes",
          detail: "Sudden surges of direct traffic landing on specific blog posts or tool pages indicate a viral share in a private Slack or WhatsApp group.",
        },
        {
          label: "Missing or Inconsistent UTMs",
          detail: "Outbound newsletters or PDF downloads lacking UTM tags directly dump interested prospects into the direct traffic bucket.",
        },
      ],
      decision: {
        prompt:
          "Your audit reveals that 60% of direct demo requests land on a deep comparison guide, and 70% of those buyers cite a private Slack community on their form. How should you adjust your marketing reporting?",
        options: [
          {
            id: "opt-1",
            label: "Credit the conversions to Organic Search since the landing page is indexable.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Adopt a hybrid attribution model that credits the community channel for demand creation while using GA4 for conversion tracking.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Ignore the survey data because only quantitative analytics data is statistically valid.",
            correct: false,
          },
        ],
        explanation:
          "Dark social channels create demand in private spaces that software tracking cannot see. A hybrid model combines quantitative click data with qualitative buyer feedback to allocate budget accurately.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Segment GA4 direct traffic by landing page depth in all executive dashboards and deploy standardized UTM tracking on all PDF and email assets. Reallocate 20% of underperforming paid ad spend into community-driven content programs that fuel dark social word-of-mouth.",
      },
      commonMistakes: [
        {
          mistake: "Assuming all direct traffic represents brand-loyal users who typed the URL.",
          explanation:
            "Over 50-70% of direct traffic to deep pages is actually private link sharing where referrer headers were stripped by the sender's app.",
        },
        {
          mistake: "Relying solely on last-click software attribution to justify community and podcast marketing.",
          explanation:
            "Dark social touchpoints rarely generate direct clicks, but they drive high-intent buyers to search or visit directly later.",
        },
      ],
      keyTakeaway:
        "You cannot force private channels to send referrer data, but you can unmask dark social by segmenting deep landing pages, maintaining strict UTM hygiene, and asking buyers directly how they discovered you.",
    },
    {
      id: "dark-social-slack-shareability-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Dark Social Shareability Teardown: Why B2B Assets Fail to Travel Privately",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Tear down 3 real-world B2B sharing specimens—a gated research PDF, an in-app invite widget, and an interactive ROI calculator—to identify tracking defects and distribution friction that kill dark social reach.",
      companyId: "slack",
      scenario:
        "Slack's viral land-and-expand growth relied heavily on peer-to-peer sharing in private channels, but many B2B assets fail to circulate because of gating walls, missing link parameters, or uncopyable summary snippets. You are auditing 3 candidate marketing assets to uncover why peer sharing is stalling and how attribution is being lost.",
      brief:
        "Analyze 3 distinct B2B marketing specimens. For each specimen, identify the critical tracking and friction defects that prevent private peer forwarding (in WhatsApp, Slack DMs, or email) and cause the resulting traffic to collapse into unmeasurable direct visits.",
      mode: "teardown",
      conceptsCovered: [
        "Private Shareability Friction",
        "In-App Referral Link Stripping",
        "Interactive Asset Attribution",
      ],
      teardownItems: [
        {
          itemId: "dark-social-item-1",
          specimen:
            "Specimen A: Gated B2B Industry Benchmark Report\n" +
            "--------------------------------------------------------------------------------\n" +
            "Asset URL: https://b2bbrand.com/resources/state-of-remote-work-2025.pdf\n" +
            "Landing Page: https://b2bbrand.com/state-of-remote-work-report\n" +
            "Access Model: Full 8-field form required (Work Email, Phone, Company Size, Title, Budget)\n" +
            "Post-Download Delivery: Direct download link to raw PDF file in browser tab\n" +
            "PDF Embedded Links: 14 footnotes linking back to 'b2bbrand.com/demo' with no UTM parameters\n" +
            "Share Affordances: None (no 1-click summary, no social share buttons, no copyable link snippet)\n" +
            "Social Graph Tags: Missing og:image, og:description is generic homepage tagline",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review Specimen A (the gated industry report distribution package). Identify the 3 critical defects that prevent private peer sharing and cause referral attribution loss.",
          answerKey: [
            {
              defect: "Heavy 8-field form gate blocks viral peer-to-peer forwarding in Slack and WhatsApp",
              severity: "critical",
              whyItMatters:
                "When a practitioner discovers a great stat and wants to share it with their team, an 8-field form forces their colleague to repeat the friction. The colleague abandons the page or asks for a screenshot instead.",
              lessonRef: "the-strategic-response-build-for-dark-social",
              owner: "you",
            },
            {
              defect: "Embedded PDF links link directly to raw URLs without UTM campaign tracking",
              severity: "critical",
              whyItMatters:
                "PDF readers do not pass HTTP referrer headers. When readers click footnotes in the downloaded PDF, 100% of resulting traffic lands in GA4 as unmeasurable 'Direct' traffic.",
              lessonRef: "method-1-utm-parameters-on-every-shareable-link",
              owner: "you",
            },
            {
              defect: "Missing Open Graph preview metadata (og:image and summary) creates a blank link preview in messaging apps",
              severity: "moderate",
              whyItMatters:
                "When pasted into Slack, WhatsApp, or iMessage, the link renders as an uninviting raw URL instead of an eye-catching card with key statistics.",
              lessonRef: "the-strategic-response-build-for-dark-social",
              owner: "developer",
            },
          ],
          distractors: [
            "The PDF is 35 pages long, which is too lengthy for enterprise executive audiences",
            "The report is published in 2025 instead of being a rolling quarterly release",
            "The report uses vector charts instead of interactive HTML5 visualizations",
          ],
          partialCredit: true,
        },
        {
          itemId: "dark-social-item-2",
          specimen:
            "Specimen B: In-App 'Invite Colleague' & Team Sharing Modal\n" +
            "--------------------------------------------------------------------------------\n" +
            "Trigger: User completes a project dashboard in the SaaS web application\n" +
            "Modal UI: 'Share this dashboard with your team'\n" +
            "Copy Link Button: Copies 'https://app.worksuite.io/dashboards/share/d9817f'\n" +
            "Redirect Logic: Link redirects to 'https://worksuite.io/signup' if recipient is not logged in\n" +
            "Referral Token Handling: URL redirect strips query parameters and session token on redirect\n" +
            "Default Share Message: 'Check out this dashboard on WorkSuite!' (generic, no key data preview)\n" +
            "Attribution Header: Strip-referrer meta tag enabled on application subdomain",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review Specimen B (the in-app team sharing widget). Identify the 3 defects that strip referral tracking and reduce recipient click-through rates.",
          answerKey: [
            {
              defect: "Authentication redirect strips query parameters and share tokens before landing on signup",
              severity: "critical",
              whyItMatters:
                "When a non-user clicks the shared link in Slack and is redirected to /signup, the server drops the referral token, converting what should be a trackable team referral into an unattributed Direct visit.",
              lessonRef: "why-it-happens-the-technical-reason",
              owner: "developer",
            },
            {
              defect: "Application subdomain enforces a global Referrer-Policy that strips referrers on outbound links",
              severity: "critical",
              whyItMatters:
                "A 'no-referrer' policy prevents the marketing site analytics from recognizing that the visitor arrived from an existing active user's workspace.",
              lessonRef: "why-it-happens-the-technical-reason",
              owner: "developer",
            },
            {
              defect: "Generic default share message provides zero context or value to the recipient in Slack",
              severity: "moderate",
              whyItMatters:
                "Recipients ignore generic software invitations. A message that highlights the specific dashboard metric (e.g. 'Q3 Campaign Performance: +28% Pipeline') increases click-throughs.",
              lessonRef: "the-strategic-response-build-for-dark-social",
              owner: "you",
            },
          ],
          distractors: [
            "The share link uses a 6-character hexadecimal token instead of the user's email address",
            "The modal is triggered immediately after saving a dashboard rather than on user logout",
            "The share button is placed on the top-right of the dashboard interface",
          ],
          partialCredit: true,
        },
        {
          itemId: "dark-social-item-3",
          specimen:
            "Specimen C: Interactive Marketing ROI Calculator & Export Summary\n" +
            "--------------------------------------------------------------------------------\n" +
            "Asset URL: https://b2btools.co/calculator/demand-gen-roi\n" +
            "User Action: User inputs budget, conversion rates, and deal size to generate custom ROI report\n" +
            "Results Screen: Displays interactive graphs and a 'Your Estimated 3-Year ROI: $420,000' banner\n" +
            "Share Results Mechanism: 'Copy URL to share results'\n" +
            "Generated URL: https://b2btools.co/calculator/demand-gen-roi (clean static URL, no state preserved)\n" +
            "Export Option: 'Download PNG Screenshot' (image file named 'screenshot.png' with no logo or URL watermark)\n" +
            "Attribution Capture: None (no unique link ID, no UTM parameters, no survey)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Review Specimen C (the interactive ROI calculator). Identify the 3 defects that prevent calculated results from circulating effectively in executive dark social channels.",
          answerKey: [
            {
              defect: "Share URL does not serialize or save user calculation state, displaying a blank form to the recipient",
              severity: "critical",
              whyItMatters:
                "When a marketing manager shares the link in a leadership Slack channel, the executive opens an empty calculator rather than the customized $420k ROI justification, killing executive buy-in.",
              lessonRef: "the-strategic-response-build-for-dark-social",
              owner: "developer",
            },
            {
              defect: "Exported PNG screenshot lacks brand watermark, source URL, or trackable short link",
              severity: "moderate",
              whyItMatters:
                "Screenshots are the number-one dark social currency in B2B Slack groups. Without a watermark or short link, viewers cannot find or visit the tool.",
              lessonRef: "method-2-branded-short-links",
              owner: "you",
            },
            {
              defect: "No unique short link or referral code generated for custom calculation shares",
              severity: "moderate",
              whyItMatters:
                "Analytics cannot distinguish between a user finding the calculator via organic search and an executive arriving from a peer's customized share link.",
              lessonRef: "method-2-branded-short-links",
              owner: "you",
            },
          ],
          distractors: [
            "The calculator only calculates a 3-year timeframe instead of 5-year enterprise depreciation",
            "The calculator uses JavaScript client-side computation instead of a server-side API",
            "The results banner uses green typography instead of the company's primary brand color",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Defect logging and scoring matrix",
            why: "Records severity ratings, attribution leakages, and remediation action items across audited assets.",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Shareability remediation brief",
            why: "Documents copyable snippets, UTM share builders, and ungated snippet recommendations.",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot Marketing Hub",
            role: "Tracking code and smart CTA generator",
            why: "Automates unique referral tokens and trackable short links for lead assets.",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Manual analysis in Google Sheets and Docs provides the complete diagnostic path. HubSpot Marketing Hub provides automated link shortener integration and smart form switching.",
      },
      deliverable:
        "A completed 3-asset Teardown Matrix with severity-ranked defect logs and redesigned frictionless sharing flows.",
      sampleOutput:
        "DARK SOCIAL SHAREABILITY TEARDOWN MATRIX: LOOM FOR ENTERPRISE ASSETS\n\n" +
        "1. Executive Video Sharing Widget:\n" +
        "- Defect: Video embed links shared in Slack DMs stripped workspace attribution due to query param stripping on SSO login.\n" +
        "- Severity: Critical. Fix: Pass encoded `ref_user_id` through SSO redirect state.\n\n" +
        "2. State of Asynchronous Work Report:\n" +
        "- Defect: Full 28-page PDF was gated behind a 7-field form with no ungated executive summary 1-pager.\n" +
        "- Severity: Critical. Fix: Ungate the key findings infographic and add 1-click 'Share Chart to Slack' with pre-populated UTMs (`utm_source=slack_share&utm_medium=dark_social`).\n\n" +
        "3. Video ROI Calculator:\n" +
        "- Defect: Downloaded summary slides lacked branded short URL watermark (`loom.com/calc/roi`).\n" +
        "- Severity: Moderate. Fix: Stamp branded shortlink and dynamic QR code on all generated PDF/PNG summary exports.\n\n" +
        "Outcome: Redesigned sharing mechanics increase private Slack forwarding by an estimated 3x while preserving end-to-end attribution.",
      successCriteria: [
        "Identifies gating walls and copy friction that prevent assets from being shared in private Slack/WhatsApp channels",
        "Spots missing UTM parameters and clean-URL redirect overwrites that destroy attribution headers",
        "Provides actionable fixes including 1-click copyable snippets, branded short links, and ungated executive summaries",
      ],
      portfolioReady: true,
      stretch:
        "Design a dark-social-optimized distribution kit for one B2B asset, including 3 modular Slack/WhatsApp share snippets, an auto-tagging short link rule, and an ungated executive 1-pager.",
      skills: ["Dark Social Optimization", "Content Teardown", "Attribution Engineering", "Viral Loop Design"],
      prerequisites: [
        "Understanding of how HTTP referrer headers behave across web and native apps",
        "Familiarity with B2B lead generation friction points (form gates, Open Graph tags)",
      ],
      terminology: [
        {
          term: "Shareability Friction",
          definition: "Barriers such as long forms, mandatory logins, or clunky copy that stop users from forwarding helpful content to peers.",
        },
        {
          term: "Referrer Stripping",
          definition: "The automatic removal of HTTP referrer headers by native mobile apps, private messaging clients, or browser privacy policies.",
        },
      ],
      keyQuestion:
        "Why do high-value marketing assets fail to get shared privately, and what technical flaws cause their attribution to disappear?",
      whatToLookFor: [
        {
          label: "Gating Friction on Sharable Content",
          detail: "Forcing a recipient to fill out a form to view an asset their colleague recommended stops dark social distribution in its tracks.",
        },
        {
          label: "Stateless Dynamic Assets",
          detail: "Interactive calculators that don't save the user's specific inputs in the shared URL render as frustrating empty forms to the recipient.",
        },
      ],
      decision: {
        prompt:
          "You are publishing an original research report with groundbreaking industry data. What is the optimal distribution strategy to maximize dark social reach without losing lead capture?",
        options: [
          {
            id: "opt-1",
            label: "Put the entire report behind a strict 8-field form to capture maximum lead data.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Ungate the core insights, key charts, and 1-click Slack summary snippets, offering an optional deep dataset download for lead capture.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Only distribute the report via direct sales emails to prevent public indexing.",
            correct: false,
          },
        ],
        explanation:
          "Ungating high-value charts and providing friction-free summary snippets enables the asset to travel through private Slack channels and group chats. Serious buyers will self-select for deep downloads.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Remove heavy form gates from top-of-funnel benchmark reports. Provide 1-click 'Share to Slack' widgets with embedded UTM tags, and ensure all downloaded PDFs and calculator exports carry branded, trackable shortlinks and watermarks.",
      },
      commonMistakes: [
        {
          mistake: "Gating every valuable piece of content behind a contact form.",
          explanation:
            "When content is locked, practitioners do not share it with peers. Ungating summary insights turns your audience into active distribution channels.",
        },
        {
          mistake: "Exporting untagged, raw PDFs from web campaigns.",
          explanation:
            "PDF viewers strip all referrer data. Always embed trackable UTM links and short URLs inside downloadable collateral.",
        },
      ],
      keyTakeaway:
        "B2B buyers share content that makes them look smart to their team. Make your assets easy to quote, ungate the best insights, and embed clean tracking mechanisms to capture the resulting word-of-mouth.",
    },
  ],

  "attribution": [
    {
      id: "attribution-walled-garden-reconciliation-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Multi-Platform Overlap Teardown: Resolving Attribution Double-Counting",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Tear down 3 multi-channel B2B campaign reporting specimens across Google Ads, Meta Ads, LinkedIn Ads, and CRM data to identify double-counting, post-view attribution inflation, and lookback window mismatch defects.",
      companyId: "freshworks",
      scenario:
        "Freshworks scaled digital acquisition across Google Search, LinkedIn Ads, Meta Ads, and email marketing. In Q2, ad platform dashboards reported 1,420 total demo conversions across channels, but CRM ground truth recorded only 820 unique new pipeline opportunities—a 600-conversion (73.2%) discrepancy. You are auditing 3 campaign tracking setups to diagnose the attribution and tagging defects creating this massive double-counting gap.",
      brief:
        "Analyze 3 distinct campaign tracking specimens. Identify the specific technical defects—such as 1-day post-view attribution inflation, un-deduplicated pixel firing, and truncated lookback windows—that cause ad networks to claim credit for conversions they did not drive.",
      mode: "teardown",
      conceptsCovered: [
        "Walled Garden Double-Counting",
        "View-Through Attribution Inflation",
        "Lookback Window Truncation",
      ],
      teardownItems: [
        {
          itemId: "attribution-teardown-specimen-1",
          specimenSource: "synthetic-realistic",
          specimen:
            "SPECIMEN A: Cross-Channel Paid Demand Gen Dashboard (Q2 Performance Review)\n" +
            "--------------------------------------------------------------------------------\n" +
            "Target Action: Book a Product Demo (/demo-booked confirmation page)\n" +
            "Total Actual CRM Demo Opportunities Created: 820\n\n" +
            "Platform Reported Conversions:\n" +
            "1. Google Search Ads: 450 conversions reported (Google Ads Conversion Tag, Last-Click, 30-day window)\n" +
            "2. LinkedIn Sponsored Content: 380 conversions reported (Insight Tag, 30-day click / 7-day view)\n" +
            "3. Meta Ads (B2B Retargeting): 340 conversions reported (Meta Pixel + CAPI, 7-day click / 1-day view)\n" +
            "4. Lifecycle Email (Nurture): 250 conversions reported (ESP Link Tracking, Last-Click)\n" +
            "Total Platform Claims: 1,420 conversions (Over-reporting error: +600 / +73.2% vs. CRM actuals)\n\n" +
            "Tracking Configuration Notes:\n" +
            "- Google Ads and Meta Ads both track conversions using native client-side pixels.\n" +
            "- Meta Ads campaign setting: Optimization for Conversions with 7-day click / 1-day view attribution window active.\n" +
            "- LinkedIn campaign setting: 30-day click and 7-day view attribution active.\n" +
            "- Email links use ESP auto-tagging, but redirect through a vanity tracking domain before landing on the demo page without consistent UTM parameters.\n" +
            "- No unified server-side identity or centralized multi-touch deduplication layer is active.",
          prompt:
            "Review Specimen A (Cross-Channel Paid Demand Gen Dashboard). Identify the 3 critical attribution defects causing the 73.2% double-counting discrepancy between platform claims and CRM actuals.",
          answerKey: [
            {
              defect:
                "Walled garden ad networks (Google, LinkedIn, Meta) operate in silos and each claim 100% credit for overlapping multi-touch paths",
              severity: "critical",
              whyItMatters:
                "When a prospect views a LinkedIn post, clicks a Meta retargeting ad, and finally converts via a Google Search ad, all three ad platforms record a full conversion, creating 300% inflation for that single user journey.",
              lessonRef: "the-modern-problem-walled-gardens",
              owner: "you",
            },
            {
              defect:
                "Active view-through attribution (1-day on Meta, 7-day on LinkedIn) credits ads that users merely scrolled past without clicking",
              severity: "critical",
              whyItMatters:
                "View-through attribution claims pipeline that was actually driven by organic search or high-intent direct visits, artificially inflating social ROAS and misleading budget allocation.",
              lessonRef: "the-modern-problem-walled-gardens",
              owner: "you",
            },
            {
              defect:
                "Email links redirect through an ESP domain without standardized UTM parameters, causing email touches to be overwritten by active ad tracking cookies",
              severity: "moderate",
              whyItMatters:
                "When email clicks lack clean UTM campaign headers, the final conversion gets claimed by whichever ad platform has an active click-through cookie in the prospect's browser.",
              lessonRef: "1-last-click-attribution",
              owner: "developer",
            },
          ],
          distractors: [
            "The demo booking page has 4 form fields instead of a single work email input",
            "LinkedIn Sponsored Content used single image ads instead of carousel video creative",
            "The overall conversion rate on the demo landing page was 3.2% instead of the B2B average of 4.5%",
          ],
          partialCredit: true,
        },
        {
          itemId: "attribution-teardown-specimen-2",
          specimenSource: "synthetic-realistic",
          specimen:
            "SPECIMEN B: Enterprise Deal Attribution & Lookback Window Configuration\n" +
            "--------------------------------------------------------------------------------\n" +
            "Deal Size: $84,000 Annual Contract Value (ACV)\n" +
            "Sales Cycle Duration: 114 days from initial anonymous website visit to contract signature\n\n" +
            "Observed Journey Milestones (Extracted from Server Logs & CRM):\n" +
            "- Day 1: Chief Technology Officer reads ungated 'Microservices Architecture Guide' via Organic Search.\n" +
            "- Day 18: VP of Engineering attends live technical webinar via LinkedIn Sponsored Content registration.\n" +
            "- Day 42: Senior Architect downloads 'Enterprise Security Whitepaper' via Google Non-Branded Search ad.\n" +
            "- Day 88: Inbound demo request submitted via direct visit.\n" +
            "- Day 114: Procurement team clicks a Google Branded Search ad ('Freshworks login') to access the contract portal and execute the DocuSign agreement.\n\n" +
            "Current Analytics Property Configuration:\n" +
            "- GA4 Property Reporting Model: Last-Click Attribution\n" +
            "- Key Event Lookback Window: 30 days for acquisition events, 30 days for all other key events\n" +
            "- Attribution Report Result: Google Branded Search awarded 100% of the $84,000 ACV deal credit ($84,000 / 1.0 conversion). Organic Search, LinkedIn webinar, and Non-Branded Search awarded $0.",
          prompt:
            "Review Specimen B (Enterprise Deal Attribution & Lookback Configuration). Identify the 2 critical measurement defects that erase top-of-funnel marketing contributions.",
          answerKey: [
            {
              defect:
                "A 30-day lookback window truncates a 114-day B2B sales cycle, erasing discovery and evaluation touchpoints that occurred before Day 84",
              severity: "critical",
              whyItMatters:
                "GA4's default 30-day window is built for short transactional ecommerce. In enterprise B2B with 3-6 month sales cycles, it makes early-stage webinars and technical guides look like total failures.",
              lessonRef: "common-mistakes-to-avoid",
              owner: "you",
            },
            {
              defect:
                "Last-click attribution model awards 100% credit to a transactional branded search navigational touch at the moment of closing",
              severity: "critical",
              whyItMatters:
                "The prospect was already purchasing; clicking a branded search ad on Day 114 was just a convenient navigation shortcut to the sign-in page. Last-click steals credit from the 3 previous months of marketing.",
              lessonRef: "1-last-click-attribution",
              owner: "you",
            },
          ],
          distractors: [
            "The webinar on Day 18 was hosted on Zoom instead of ON24",
            "The CTO read the architecture guide on mobile instead of desktop",
            "The whitepaper was formatted as a PDF instead of an interactive web page",
          ],
          partialCredit: true,
        },
        {
          itemId: "attribution-teardown-specimen-3",
          specimenSource: "synthetic-realistic",
          specimen:
            "SPECIMEN C: Confirmation Page Pixel & Tag Architecture\n" +
            "--------------------------------------------------------------------------------\n" +
            "Page URL: https://freshworks.com/demo-confirmation\n" +
            "Trigger: User completes the 3-step demo scheduling workflow\n\n" +
            "Frontend Implementation (Page Header Code):\n" +
            "<script>\n" +
            "  // Google tag (gtag.js) key event\n" +
            "  gtag('event', 'generate_lead', { 'value': 250, 'currency': 'USD' });\n" +
            "  \n" +
            "  // Meta Pixel conversion\n" +
            "  fbq('track', 'Lead', { value: 250, currency: 'USD' });\n" +
            "  \n" +
            "  // LinkedIn Insight Tag conversion\n" +
            "  window.lintrk('track', { conversion_id: 1289401 });\n" +
            "</script>\n\n" +
            "Observed User Behavior & Log Patterns:\n" +
            "- When a user bookmarks the confirmation page and opens the browser tab next morning, all three tags re-execute.\n" +
            "- When a user clicks 'Back' in browser and returns to the confirmation page, all three tags re-execute.\n" +
            "- Meta Conversions API (CAPI) sends a server-side 'Lead' event on CRM form submission with event_id: 'lead_94821'.\n" +
            "- Frontend fbq('track', 'Lead') sends payload WITHOUT event_id parameter.",
          prompt:
            "Review Specimen C (Confirmation Page Pixel & Tag Architecture). Identify the 2 technical implementation defects causing duplicate conversion reporting.",
          answerKey: [
            {
              defect:
                "Conversion tags fire unconditionally on every page load without unique transaction ID or local session deduplication guards",
              severity: "critical",
              whyItMatters:
                "Page refreshes, tab restores, and back-button navigation refire conversion pixels into Google, Meta, and LinkedIn, falsely inflating conversion counts by 15-25%.",
              lessonRef: "the-modern-problem-walled-gardens",
              owner: "developer",
            },
            {
              defect:
                "Frontend Meta pixel payload lacks the matching event_id sent by server-side CAPI, preventing Meta from deduplicating client and server events",
              severity: "moderate",
              whyItMatters:
                "Without matching event_id keys, Meta treats the browser pixel ping and the server CAPI payload as two separate leads, doubling the reported conversion count.",
              lessonRef: "the-modern-problem-walled-gardens",
              owner: "developer",
            },
          ],
          distractors: [
            "The currency code is set to USD instead of INR for Indian visitors",
            "The script uses inline JavaScript rather than loading via Google Tag Manager",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Reconciliation analysis and defect logging",
            why: "Zero-cost spreadsheet reconciliation for cross-platform conversion deduplication",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Google Analytics 4",
            role: "Cross-channel attribution reporting",
            why: "Evaluate multi-channel paths against platform-reported totals",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete Walled Garden Attribution Teardown Log classifying 7 defects across 3 specimens with severity ratings, root cause mechanisms, and deduplication fixes.",
      sampleOutput:
        "ROCKERBOX / SEGMENT ATTRIBUTION TEARDOWN REFERENCE REPORT\n\n" +
        "1. Cross-Platform Double-Counting Audit (E-Commerce Multi-Channel Blitz):\n" +
        "   - CRM Actual Orders: 1,200 | Total Ad Platform Claims: 2,140 (+78.3% inflation)\n" +
        "   - Primary Cause: Facebook 1-day view-through claims 420 orders that also converted via Google Brand Search.\n" +
        "   - Remediation: Turn off view-through attribution in ad managers for automated bidding; reconcile against first-party order IDs in warehouse.\n\n" +
        "2. Lookback Window Calibration:\n" +
        "   - B2B Sales Cycle: 90 days. Old GA4 Window: 30 days.\n" +
        "   - Finding: 64% of high-ACV closed deals had first touch on Organic or LinkedIn Ads >45 days before conversion.\n" +
        "   - Remediation: Extend GA4 reporting lookback to maximum 90 days and implement multi-touch first-party tracking via Segment.\n\n" +
        "3. Pixel Deduplication Architecture:\n" +
        "   - Added unique order_id to dataLayer and mapped to both browser pixel and server CAPI.\n" +
        "   - Implemented cookie-based deduplication flag on /thank-you page to suppress duplicate fires on page reloads.",
      successCriteria: [
        "Correctly identifies walled garden double-counting and view-through attribution inflation across self-attributing networks",
        "Explains the mathematical impact of 30-day lookback window truncation in 90+ day B2B sales cycles",
        "Identifies missing transaction IDs and event_id mismatch defects causing conversion pixel duplication",
      ],
      portfolioReady: true,
      skills: ["Attribution Auditing", "Walled Gardens", "Pixel Deduplication", "Conversion Tracking"],
      prerequisites: [
        "Understanding of single-touch vs. multi-touch attribution",
        "Familiarity with ad platform conversion tags (Google Ads, Meta Pixel, LinkedIn Insight Tag)",
        "Basic knowledge of URL tracking parameters (UTMs)",
      ],
      terminology: [
        {
          term: "Walled Garden",
          definition:
            "A closed platform (like Google, Meta, or LinkedIn) that controls its own user data and advertising measurement, unable to see interactions occurring on rival networks.",
        },
        {
          term: "View-Through Attribution",
          definition:
            "Assigning conversion credit to an ad impression that a user saw but did not click, provided the user converts within a set window (e.g., 1 or 7 days).",
        },
        {
          term: "Lookback Window",
          definition:
            "The time period prior to a conversion during which previous ad impressions or clicks are eligible to receive attribution credit.",
        },
      ],
      keyQuestion:
        "Why do ad platform dashboards report 70%+ more conversions than your CRM actually received, and how do you fix the underlying tracking defects?",
      whatToLookFor: [
        {
          label: "View-Through Settings",
          detail: "Check whether ad networks are counting passive 1-day or 7-day impressions as conversions.",
        },
        {
          label: "Lookback Mismatch",
          detail: "Ensure the tracking window matches your true sales cycle length rather than default 30-day settings.",
        },
        {
          label: "Tag Deduplication",
          detail: "Verify unique transaction/event IDs across client pixels and server APIs to prevent reload duplication.",
        },
      ],
      decision: {
        prompt:
          "Your Meta Ads campaign reports 340 demo conversions with a $110 CPA, but CRM data shows that 210 of those leads also clicked a Google Search ad or email link on the same day. How should you adjust your reporting and bidding setup?",
        options: [
          {
            id: "keep-view-through",
            label: "Keep 7-day click / 1-day view attribution active because Meta's algorithm needs maximum volume to optimize bidding.",
            correct: false,
          },
          {
            id: "switch-to-first-party",
            label: "Switch bidding and executive reporting to deduplicated first-party CRM conversions and turn off view-through window credit for performance reporting.",
            correct: true,
          },
          {
            id: "pause-google",
            label: "Pause Google Search ads to let Meta Ads capture all conversions cleanly without cross-channel overlap.",
            correct: false,
          },
        ],
        explanation:
          "Relying on platform-reported view-through numbers masks channel cannibalization. Switching reporting to deduplicated CRM conversions reveals true incremental performance, while removing view-through inflation prevents over-allocating budget to passive impressions.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Never trust self-attributing ad network totals as financial ground truth. Always reconcile platform conversions against first-party CRM opportunity IDs, disable view-through attribution for budget decisions, and enforce strict server-side event deduplication.",
      },
      commonMistakes: [
        {
          mistake: "Summing conversion counts across Google, LinkedIn, and Meta dashboards.",
          explanation:
            "Because each network claims 100% credit for multi-touch journeys, summing platform totals creates massive double-counting and grossly exaggerates marketing ROI.",
        },
        {
          mistake: "Leaving GA4 on the default 30-day lookback window for 90-day B2B sales cycles.",
          explanation:
            "Truncating long sales cycles erases early awareness touchpoints (webinars, organic content) and falsely credits 100% of pipeline to final branded searches.",
        },
      ],
      keyTakeaway:
        "Walled gardens are designed to claim maximum credit for every conversion. True marketing efficiency requires independent cross-channel deduplication, lookback windows calibrated to your real sales cycle, and strict first-party reconciliation against your CRM.",
    },
    {
      id: "attribution-multi-touch-budget-reallocation-audit",
      tier: "core",
      archetype: "audit",
      title: "The 7-Model Multi-Touch Attribution Audit: Reallocating B2B Marketing Spend",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Audit a multi-touch B2B marketing pipeline dataset across 7 attribution models (Last-Click, First-Click, Linear, Time-Decay, U-Shaped, W-Shaped, and Data-Driven) in Google Sheets and GA4 to uncover channel cannibalization and reallocate a quarterly media budget.",
      companyId: "trade-desk",
      scenario:
        "You are the growth analytics lead at The Trade Desk (TTD), auditing acquisition efficiency across five core channels: Paid Search (Branded & Non-Branded), LinkedIn Sponsored Content, Industry Podcasts/PR, SEO/Content Hub, and Lifecycle Email. Leadership currently allocates budget using last-click reporting, which suggests cutting podcast and top-of-funnel content spend. Your job is to run a full 7-model comparative audit to demonstrate the true pipeline contribution of every touchpoint.",
      brief:
        "Analyze a dataset of 120 multi-touch customer journeys leading to $1,800,000 in closed-won enterprise ACV. Run 4 diagnostic steps: (1) Last-Click vs. First-Click Channel Bias Diagnostic, (2) Multi-Touch Model Credit Distribution (Linear vs. Time-Decay vs. U-Shaped vs. W-Shaped), (3) W-Shaped B2B Milestone Attribution, and (4) Data-Driven Attribution & Incrementality Budget Reallocation Plan.",
      mode: "diagnostic",
      conceptsCovered: [
        "Last-Click vs. First-Click Channel Bias",
        "Multi-Touch Model Credit Distribution",
        "W-Shaped Attribution for B2B Milestones",
        "Data-Driven Attribution & Incrementality Reconciliation",
      ],
      steps: [
        {
          stepId: "attribution-audit-step-1",
          concept: "Last-Click vs. First-Click Channel Bias",
          lessonAnchor: "1-last-click-attribution",
          theoryRecap:
            "Last-click gives 100% credit to the final touchpoint (heavily biasing toward branded search and email), while first-click gives 100% to discovery channels (YouTube, PR, organic search). Comparing both reveals which channels create demand vs. which simply harvest it.",
          question:
            "What percentage of total pipeline revenue is captured by Branded Search under Last-Click compared to First-Click, and what does this reveal about its true demand-generation role?",
          toolName: "Google Sheets",
          where:
            "Open multi-touch-export.csv in Google Sheets, create pivot tables for 'First Touch Channel' vs 'Last Touch Channel' weighted by Deal Value.",
          procedure: [
            "Import the 120-journey multi-touch dataset into Google Sheets.",
            "Calculate total pipeline attributed to each channel under 100% First-Touch vs. 100% Last-Touch.",
            "Compute the Ratio of Last-Touch to First-Touch attribution for Branded Search, Non-Branded Search, Paid Social, Content/SEO, and Email.",
            "Isolate channels with a Ratio > 3.0 (Demand Harvesters) and Ratio < 0.5 (Demand Creators).",
          ],
          outputSample:
            "ATTRIBUTION BIAS ANALYSIS ($1,800,000 Total ACV Pipeline):\n\n" +
            "Channel              First-Click ACV    Last-Click ACV    L/F Ratio    Classification\n" +
            "Branded Search       $90,000 (5%)       $720,000 (40%)    8.0x         Demand Harvester\n" +
            "Lifecycle Email      $54,000 (3%)       $450,000 (25%)    8.3x         Demand Harvester\n" +
            "LinkedIn Ads / PR    $630,000 (35%)     $180,000 (10%)    0.28x        Demand Creator\n" +
            "SEO / Content Hub    $756,000 (42%)     $270,000 (15%)    0.35x        Demand Creator\n" +
            "Non-Branded Search   $270,000 (15%)     $180,000 (10%)    0.66x        Hybrid Discovery",
          healthy:
            "First-click and last-click models are compared side-by-side to expose demand creation vs. demand harvesting roles across channels.",
          unhealthy:
            "Allocating top-of-funnel budgets exclusively based on last-click numbers, causing demand generation channels to be starved and shrinking overall pipeline.",
          interpret:
            "Branded Search claims 40% of revenue under last-click but initiates only 5% of deals. Cutting LinkedIn Ads or Content because of low last-click ROI would dismantle the top-of-funnel engine that feeds branded searches 60 days later.",
          soWhat: [
            {
              symptom:
                "Executive leadership proposes reducing content and paid social budgets based on low last-click conversion rates",
              action:
                "Present the First-Click vs. Last-Click comparison matrix proving that 77% of all won revenue originated from content and social discovery",
              effort: "30 min",
            },
            {
              symptom: "Branded search budget uncapped while top-of-funnel spend is constrained",
              action:
                "Cap branded search spend to match incremental demand and reallocate surplus to high-first-touch channels",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "attribution-audit-step-2",
          concept: "Multi-Touch Model Credit Distribution",
          lessonAnchor: "3-linear-attribution",
          theoryRecap:
            "Multi-touch models distribute credit across the entire path. Linear splits credit equally, while Time-Decay weights recent interactions. Position-based models (U-shaped) give 40% to first and last touches with 20% in the middle.",
          question:
            "How does shifting from Linear to Time-Decay attribution alter the valuation of mid-funnel content downloads and product webinars relative to late-stage sales demo requests?",
          toolName: "Google Sheets",
          where:
            "Apply weighted formula columns in Google Sheets for Linear (1/N), Time-Decay (half-life 7 days), and U-Shaped (40/20/40) credit rules.",
          procedure: [
            "Assign fractional credit to each of the 450 total touchpoints across the 120 customer journeys.",
            "Calculate total attributed revenue per channel under Linear, Time-Decay, and U-Shaped models.",
            "Quantify the credit shift between 30+ day old awareness touches and 7-day conversion touches.",
          ],
          outputSample:
            "MULTI-TOUCH ATTRIBUTION COMPARISON ($1,800,000 Pipeline):\n\n" +
            "Channel              Linear (Equal)    Time-Decay (7d)   U-Shaped (40/20/40)\n" +
            "LinkedIn Ads / PR    $432,000 (24%)    $252,000 (14%)    $468,000 (26%)\n" +
            "SEO / Content Hub    $504,000 (28%)    $324,000 (18%)    $486,000 (27%)\n" +
            "Non-Branded Search   $324,000 (18%)    $288,000 (16%)    $288,000 (16%)\n" +
            "Lifecycle Email      $270,000 (15%)    $414,000 (23%)    $270,000 (15%)\n" +
            "Branded Search       $270,000 (15%)    $522,000 (29%)    $288,000 (16%)",
          healthy:
            "Model choice reflects the specific sales cycle duration: U-shaped properly credits both discovery and final action in multi-stakeholder B2B deals.",
          unhealthy:
            "Using Time-Decay for a 6-month enterprise sales cycle, which artificially mimics last-click bias by devaluing long-term nurturing.",
          interpret:
            "Linear and U-shaped models recognize that content and social drive over 50% of value, while Time-Decay heavily concentrates credit into the final 7 days.",
          soWhat: [
            {
              symptom: "Time-decay model shows low ROI on quarterly industry research reports",
              action:
                "Switch B2B executive reporting to U-shaped or W-shaped models that reward top-of-funnel lead creation",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "attribution-audit-step-3",
          concept: "W-Shaped Attribution for B2B Milestones",
          lessonAnchor: "6-w-shaped-attribution",
          theoryRecap:
            "W-shaped attribution allocates 30% to First Touch (awareness), 30% to Lead Creation (form fill), 30% to Opportunity Creation (sales stage validation), and 10% to intermediate nurturing touches.",
          question:
            "Which channels emerge as the primary drivers of the Opportunity Creation milestone (the second 30% W-anchor) compared to First Touch and Opportunity Close?",
          toolName: "Google Analytics 4",
          where:
            "GA4 Explore > Path Exploration & Custom Funnel / Segment integration mapping CRM lifecycle milestones to web touchpoints.",
          procedure: [
            "Map each touchpoint in the journey to its closest CRM milestone: First Touch, Lead Creation, Opportunity Creation, Opportunity Close.",
            "Apply 30/30/30/10 weighting to calculate channel revenue shares across the 4 key milestones.",
            "Identify the top channel for each of the three major 30% anchors.",
          ],
          outputSample:
            "W-SHAPED MILESTONE ATTRIBUTION BREAKDOWN:\n\n" +
            "Milestone Anchor            Top Contributing Channel        Attributed Revenue\n" +
            "1. First Touch (30%)        SEO / Content Hub (52%)         $280,800\n" +
            "2. Lead Creation (30%)      LinkedIn Sponsored Content (44%)$237,600\n" +
            "3. Opp Creation (30%)       Product Webinars & Case Studies $259,200\n" +
            "4. Middle Nurturing (10%)  Email Sequences & Retargeting   $180,000\n\n" +
            "W-Shaped Channel Totals: Content/SEO: $486,000 (27%) | LinkedIn/PR: $450,000 (25%) | Non-Branded: $306,000 (17%) | Email: $270,000 (15%) | Branded: $288,000 (16%)",
          healthy:
            "W-shaped modeling reflects the distinct operational roles of discovery content (first touch), targeted lead-gen (lead creation), and deep product proof (opp creation).",
          unhealthy:
            "Treating all middle touches as homogeneous instead of isolating the specific asset that converted an MQL into a validated sales opportunity.",
          interpret:
            "Content and SEO dominate top-of-funnel discovery, LinkedIn dominates lead capture, and webinar/case-study content drives pipeline qualification. Every channel plays a clear, complementary role.",
          soWhat: [
            {
              symptom:
                "Sales team complains that MQLs from social ads fail to convert into qualified pipeline",
              action:
                "Invest in mid-funnel case study content and product webinars to strengthen the Opportunity Creation milestone",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "attribution-audit-step-4",
          concept: "Data-Driven Attribution & Incrementality Reconciliation",
          lessonAnchor: "the-three-layer-measurement-framework",
          theoryRecap:
            "Attribution models show observed paths, but incrementality testing and MMM prove causality. Combining attribution with holdout tests prevents over-investing in channels with zero incremental lift.",
          question:
            "When reconciling W-shaped attribution against a 4-week geo-holdout test on Branded Search and LinkedIn Ads, what is the true incremental ROI of each channel?",
          toolName: "Google Sheets",
          where:
            "Google Sheets Incrementality Model tab, comparing test vs. control market conversion lift against model-attributed revenue.",
          procedure: [
            "Review 4-week geo-holdout results (15% control market with ads paused vs. 85% test market).",
            "Calculate Incremental Lift Factor for Branded Search (12% lift when ads ON) vs. LinkedIn Ads (84% lift when ads ON).",
            "Adjust W-shaped attribution revenue by channel incrementality factors to compute True Incremental Revenue.",
            "Formulate the finalized Q3 budget reallocation recommendation.",
          ],
          outputSample:
            "INCREMENTALITY RECONCILIATION & BUDGET REALLOCATION:\n\n" +
            "Channel            W-Shaped ACV    Incrementality Factor   True Incremental ACV   Old Budget   Recommended Q3\n" +
            "Content / SEO      $486,000        95% (Organic Baseline)  $461,700               $40,000      $65,000 (+63%)\n" +
            "LinkedIn Ads / PR  $450,000        84% (High Causality)    $378,000               $50,000      $75,000 (+50%)\n" +
            "Non-Branded Search $306,000        72% (Moderate Lift)     $220,320               $45,000      $40,000 (-11%)\n" +
            "Lifecycle Email    $270,000        65% (Customer Nurture)  $175,500               $15,000      $20,000 (+33%)\n" +
            "Branded Search     $288,000        12% (High Cannibalism)  $34,560                $50,000      $20,000 (-60%)\n" +
            "TOTALS             $1,800,000      --                      $1,270,080             $200,000     $220,000",
          healthy:
            "Attribution models are audited against real incrementality testing before reallocating major budget lines.",
          unhealthy:
            "Treating 100% of attributed branded search revenue as net-new growth when 88% of users would have navigated organically anyway.",
          interpret:
            "Branded search has high attributed revenue but low incremental lift (12%). Reallocating $30,000 from Branded Search to Content/SEO and LinkedIn Ads increases overall incremental pipeline by an estimated 28% without increasing total marketing budget.",
          soWhat: [
            {
              symptom: "Branded search consuming 25% of total paid media budget with diminishing returns",
              action:
                "Reduce branded search target impression share from 99% to 80% and divert freed budget to LinkedIn awareness and SEO",
              effort: "30 min",
            },
            {
              symptom: "Lack of incrementality data causing ongoing debates between performance and brand teams",
              action:
                "Establish a quarterly geo-holdout testing cadence on the largest paid channels",
              effort: "dev ticket",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Attribution model formulas and budget reallocation modeling",
            why: "Transparent multi-touch credit calculation and incrementality reconciliation",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Touchpoint extraction and path exploration",
            why: "Pull multi-channel funnels and user pathing data",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Segment",
            role: "Cross-platform identity resolution and event stream routing",
            why: "Unify anonymous web touchpoints with CRM sales pipeline milestones",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A comprehensive 7-Model Attribution Audit & Budget Reallocation Plan containing channel bias ratios, multi-touch credit comparison tables, W-shaped milestone allocations, and an incrementality-adjusted quarterly budget model.",
      sampleOutput:
        "KLAVIYO / SEGMENT ATTRIBUTION AUDIT REFERENCE REPORT\n\n" +
        "1. Touchpoint Bias Analysis ($2.4M E-Commerce Revenue):\n" +
        "   - Email Last-Click Revenue: $1,200,000 (50%) | First-Click Revenue: $120,000 (5%)\n" +
        "   - Meta Ads Last-Click: $360,000 (15%) | First-Click: $1,080,000 (45%)\n" +
        "   - Insight: Meta creates 45% of customer discovery; Email captures 50% of conversions.\n\n" +
        "2. W-Shaped Milestone Modeling:\n" +
        "   - Discovery Anchor (30%): Meta Ads & Influencer PR (62% share)\n" +
        "   - Lead Capture Anchor (30%): Welcome Quiz & Popups via Segment (48% share)\n" +
        "   - Purchase Anchor (30%): Abandoned Cart Flows & SMS (58% share)\n\n" +
        "3. Incrementality Reconciliation & Spend Adjustment:\n" +
        "   - Branded Search Holdout Test: 8% incremental lift -> Cut spend from $40k/mo to $15k/mo.\n" +
        "   - Meta Prospecting Holdout Test: 78% incremental lift -> Scale spend from $60k/mo to $85k/mo.\n" +
        "   - Net Outcome: +22% incremental revenue with flat total ad spend.",
      successCriteria: [
        "Quantifies demand creation vs. demand harvesting across channels using first vs. last-click ratios",
        "Calculates multi-touch revenue attribution across Linear, Time-Decay, U-Shaped, and W-Shaped models",
        "Maps channel contributions to specific B2B buying milestones using W-shaped attribution",
        "Reconciles attribution models with incrementality holdout tests to formulate a waste-free quarterly budget reallocation plan",
      ],
      portfolioReady: true,
      skills: ["Multi-Touch Attribution", "W-Shaped Modeling", "Incrementality Testing", "Media Budget Allocation"],
      prerequisites: [
        "Knowledge of the 7 major attribution models and their mathematical weighting",
        "Experience building pivot tables and weighted formulas in Google Sheets",
        "Understanding of B2B CRM sales stages (Lead, MQL, SQL, Opportunity, Closed Won)",
      ],
      terminology: [
        {
          term: "Demand Creation vs. Harvesting",
          definition:
            "Demand creation introduces new prospects to your brand (social, PR, content), while demand harvesting captures high-intent prospects who are already actively searching to buy (branded search, retargeting).",
        },
        {
          term: "W-Shaped Attribution",
          definition:
            "A position-based multi-touch model that allocates 30% to First Touch, 30% to Lead Creation, 30% to Opportunity Creation, and 10% evenly across remaining touches.",
        },
        {
          term: "Incrementality Testing",
          definition:
            "Controlled experimentation (such as geo-holdout tests) that measures the true net-new conversion lift caused by an advertising channel compared to a baseline where ads are paused.",
        },
      ],
      keyQuestion:
        "How do you mathematically evaluate channel performance across multi-touch B2B journeys to prevent last-click attribution from defunding your most effective top-of-funnel channels?",
      whatToLookFor: [
        {
          label: "Last/First Ratio",
          detail: "Identify channels with L/F > 3.0 (harvesters) vs L/F < 0.5 (creators) to understand true channel roles.",
        },
        {
          label: "Milestone Anchors",
          detail: "Verify which specific channels drive First Touch, Lead Creation, and Opportunity Qualification in W-shaped models.",
        },
        {
          label: "Holdout Lift",
          detail: "Reconcile attributed revenue against experimental holdout data before shifting budget.",
        },
      ],
      decision: {
        prompt:
          "Your CFO notices that Branded Search generated $720,000 in last-click revenue with a 14x ROAS, while Top-of-Funnel Content generated only $180,000 with a 2.5x ROAS. She proposes shifting 50% of the content budget into Branded Search. How do you respond?",
        options: [
          {
            id: "agree-with-cfo",
            label: "Agree and move 50% of content budget to Branded Search to maximize the immediate reported 14x ROAS.",
            correct: false,
          },
          {
            id: "present-w-shaped-audit",
            label: "Present the W-shaped attribution and incrementality audit proving that 88% of branded search conversions are non-incremental navigation clicks originating from content discovery.",
            correct: true,
          },
          {
            id: "cut-branded-search-entirely",
            label: "Immediately shut off Branded Search entirely to force all traffic through organic search links.",
            correct: false,
          },
        ],
        explanation:
          "Branded search is a demand harvesting channel with low incrementality (often only 10-15% net-new lift). Starving top-of-funnel content to fund branded search creates a short-term ROAS illusion while permanently shrinking future inbound search volume.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Adopt W-shaped attribution for B2B pipeline reporting and calibrate all channel allocations against quarterly incrementality holdout tests. Cap branded search spend to capture legitimate competitive conquesting, and reinvest the surplus into high-first-touch content and targeted social channels.",
      },
      commonMistakes: [
        {
          mistake: "Treating branded search as a standalone growth driver rather than a navigational touchpoint.",
          explanation:
            "Branded search has high last-click conversion rates because buyers already decided to visit; crediting it with 100% of deal value leads to over-bidding on existing brand equity.",
        },
        {
          mistake: "Using Linear attribution without separating milestone touches from routine page views.",
          explanation:
            "Equal weighting overvalues inconsequential middle page views while undervaluing the critical content assets that generated the lead or qualified the opportunity.",
        },
      ],
      keyTakeaway:
        "Attribution models explain the journey, but incrementality proves causality. By pairing W-shaped milestone attribution with holdout testing, growth teams can protect vital awareness channels, eliminate wasted spend on non-incremental clicks, and maximize true pipeline growth.",
    },
  ],

  "ga4-setup": [
    {
      id: "ga4-setup-config-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Pre-Launch Audit: Catching GA4 Setup Mistakes Before They Cost You a Quarter",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real GA4 property settings export, apply the lesson's setup playbook to spot the specific misconfigurations that will silently break next quarter's reporting.",
      companyId: "warby-parker",
      scenario:
        "You're the marketing analyst at Warby Parker's DTC team reviewing a GA4 property that engineering set up eight weeks ago, before anyone asked you to check it.",
      brief:
        "Read the settings export line by line and flag every deviation from the lesson's 8-step playbook, in order of how much it will cost the business.",
      mode: "diagnostic",
      conceptsCovered: ["Data retention window", "Internal traffic filtering", "Reserved event names"],
      steps: [
        {
          stepId: "step-1-retention-check",
          concept: "Data retention window",
          lessonAnchor: "step-4-bump-data-retention-to-14-months",
          theoryRecap:
            "The lesson's Step 4 flags GA4's default 2-month retention as the single most damaging setting most teams never touch.",
          question:
            "The export shows 'Event data retention: 2 months (default)'. What happens the first time someone asks for a year-over-year comparison?",
          toolName: "Google Sheets",
          where: "Open ga4-property-settings-export.csv, scroll to the Data Settings section",
          procedure: [
            "Open the export and locate the 'Data Settings' block",
            "Read the 'Event data retention' row",
            "Compare it against the lesson's 14-month recommendation",
          ],
          outputSample:
            "DATA SETTINGS\n  Event data retention: 2 months (default)\n  Reset user data on new activity: Off",
          healthy: "Retention set to 14 months, reset-on-activity toggled on.",
          unhealthy:
            "Retention left at the 2-month default, meaning any Exploration or Funnel older than 60 days is already gone and unrecoverable.",
          interpret:
            "This setting doesn't retroactively fix past data. The moment you spot 'default', the loss is already happening, every day you wait costs another day of history.",
          soWhat: [
            {
              symptom: "Retention still shows '2 months (default)'",
              action: "Change to 14 months in Admin > Data Settings > Data Retention today, not after the audit report is filed",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-internal-traffic-check",
          concept: "Internal traffic filtering",
          lessonAnchor: "step-5-filter-internal-traffic",
          theoryRecap:
            "Step 5 warns that unfiltered internal traffic inflates engagement and conversion metrics with your own team's clicks.",
          question:
            "The Data Filters panel shows one internal traffic rule in 'Testing' status. What does that mean for this quarter's engagement rate?",
          toolName: "Google Analytics 4",
          where: "Admin > Data Settings > Data Filters",
          procedure: [
            "Open Data Filters",
            "Check the filter's status column",
            "Cross-reference against the office/VPN IP list in the export",
          ],
          outputSample:
            "DATA FILTERS\n  Internal Traffic Filter: Testing\n  Excluded IPs: 1 of 2 listed (VPN range missing)",
          healthy: "Filter status is Active and every office/VPN IP range is listed.",
          unhealthy:
            "Filter sits in 'Testing' with a missing VPN range, so it's silently excluding nothing from the live reports.",
          interpret:
            "A filter in Testing mode changes nothing in your actual reports; it's the GA4 equivalent of writing a rule down but never enforcing it.",
          soWhat: [
            {
              symptom: "Filter status reads 'Testing' for more than a few days",
              action: "Add the missing VPN range, then flip the filter to Active under Data Settings",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-event-naming-check",
          concept: "Reserved event names",
          lessonAnchor: "event-naming-use-the-standard-names",
          theoryRecap:
            "The lesson's reserved-names table shows GA4 recognizes specific event names for its built-in reports and Google Ads import.",
          question: "The events list shows 'eyewear_purchased' firing on every checkout instead of 'purchase'. What breaks?",
          toolName: "Google Analytics 4",
          where: "Admin > Events, then DebugView",
          procedure: [
            "Open the Events list and find the checkout event",
            "Compare its name against the reserved-names table",
            "Check whether it's marked as a key event",
          ],
          outputSample:
            "EVENTS (last 7 days)\n  eyewear_purchased   4,102 occurrences   Not marked as key event\n  purchase             0 occurrences",
          healthy: "Checkout fires as 'purchase', appears in Monetization reports, and imports cleanly to Google Ads.",
          unhealthy:
            "Checkout fires as a custom 'eyewear_purchased' event; Monetization reports stay empty and Google Ads conversion import has nothing to read.",
          interpret:
            "GA4 doesn't guess. A non-reserved name for a standard action means every built-in report and integration built around 'purchase' simply has no data to show.",
          soWhat: [
            {
              symptom: "A core action uses a custom name instead of a reserved one",
              action: "Rename the event to the reserved name in GTM, then re-verify in DebugView before redeploying",
              effort: "half day",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Verify filter status and event names live",
            why: "Free, the source of truth for the actual live configuration",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Read the settings export line by line",
            why: "Free, no account needed to review a CSV export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A ranked list of the property's setup defects with the fix owner (you vs. developer) and estimated effort for each.",
      sampleOutput:
        "Allbirds GA4 audit findings (excerpt)\n\n1. Retention at 2-month default -> change today, 5 min, owner: you\n2. Internal traffic filter in Testing, VPN range missing -> 5 min, owner: you\n3. Checkout fires as 'shoe_purchased' instead of 'purchase' -> half day, owner: developer",
      successCriteria: [
        "Correctly flags the retention default as the highest-cost issue",
        "Identifies the Testing-status internal traffic filter as inactive",
        "Catches the non-reserved event name and assigns it to a developer",
      ],
      portfolioReady: true,
      stretch: "Draft the Slack message you'd send engineering prioritizing these three fixes in order.",
    },
    {
      id: "ga4-setup-launch-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Launch Spec: Writing a GA4 Setup Plan a Developer Can Implement Without Guessing",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Write a complete GA4 setup spec, covering event names, key events, and custom dimensions, that a developer could implement without asking you a single clarifying question.",
      companyId: "klaviyo",
      scenario:
        "Klaviyo's marketing team is launching a new interactive pricing page next sprint, and you own the analytics requirements doc before a single line of tracking code gets written.",
      brief:
        "Turn the lesson's 8-step playbook into a concrete, page-specific setup spec: which key events, which custom dimensions, which event names.",
      mode: "build",
      conceptsCovered: ["Standard event names", "Key events selection", "Custom dimension registration"],
      steps: [
        {
          stepId: "step-1-event-names-spec",
          concept: "Standard event names",
          lessonAnchor: "event-naming-use-the-standard-names",
          theoryRecap:
            "The lesson's reserved-names table lists the exact event names GA4's reports and Google Ads integration expect.",
          question:
            "The pricing page has a 'Start free trial' button and a 'Talk to sales' button. Which reserved names apply, and which need a custom name?",
          toolName: "Google Sheets",
          where: "New tab in the tracking spec titled 'Event Names'",
          procedure: [
            "List every trackable action on the page",
            "Match each to a reserved name from the lesson's table where one exists",
            "Flag anything with no reserved match for a custom name",
          ],
          outputSample:
            "EVENT NAMES\n  Start free trial click -> sign_up (reserved)\n  Talk to sales click -> generate_lead (reserved)\n  Pricing toggle (monthly/annual) -> pricing_toggle (custom, no reserved match)",
          healthy: "Every action with a reserved-name match uses it; only genuinely novel actions get custom names.",
          unhealthy: "A developer invents 'trial_started' for a signup because nobody told them 'sign_up' already exists and does more.",
          interpret: "The spec is the only thing standing between a developer's best guess and GA4's actual reserved vocabulary.",
          soWhat: [
            {
              symptom: "The spec doc has no 'Event Names' section",
              action: "Add one before handoff; it's the single highest-leverage page in the doc",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-key-events-spec",
          concept: "Key events selection",
          lessonAnchor: "step-6-define-key-events",
          theoryRecap:
            "Step 6 says key events are the specific actions marked as mattering to the business, not just every event that fires.",
          question: "Of 'sign_up', 'generate_lead', and 'pricing_toggle', which actually deserve key-event status?",
          toolName: "Google Sheets",
          where: "Same spec doc, 'Key Events' tab",
          procedure: [
            "Review the full event list from Step 1",
            "Mark only the actions that represent real business value as key events",
            "Leave interaction-only events (like a toggle) unmarked",
          ],
          outputSample:
            "KEY EVENTS\n  sign_up -> YES, mark as key event\n  generate_lead -> YES, mark as key event\n  pricing_toggle -> NO, engagement signal only",
          healthy: "Two key events marked; toggle interaction stays a regular event that doesn't inflate the key-event count.",
          unhealthy:
            "All three get marked as key events, and 'pricing_toggle' firing on every hover makes the conversion rate look inflated and meaningless.",
          interpret:
            "Marking too many events as 'key' is functionally the same mistake as marking none: it stops the metric from meaning anything specific.",
          soWhat: [
            {
              symptom: "More than 2-3 key events on a single page",
              action: "Re-review the list and demote anything that isn't a direct business outcome",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-custom-dimensions-spec",
          concept: "Custom dimension registration",
          lessonAnchor: "step-7-register-custom-dimensions",
          theoryRecap: "Step 7 warns that any custom parameter is invisible in reports until it's registered as a Custom Dimension.",
          question: "The 'pricing_toggle' event needs a 'plan_type' parameter (monthly vs annual). What has to happen before that shows up in a report?",
          toolName: "Google Analytics 4",
          where: "Admin > Custom Definitions > Custom Dimensions",
          procedure: [
            "Add 'plan_type' to the spec as an event parameter",
            "Note it in the spec as requiring Custom Dimension registration post-launch",
            "List the exact registration step for the developer/analyst",
          ],
          outputSample: "CUSTOM DIMENSIONS TO REGISTER POST-LAUNCH\n  Parameter: plan_type   Scope: Event   Registers under: Admin > Custom Definitions",
          healthy: "The spec explicitly calls out registration as a required post-launch step, so it doesn't get forgotten.",
          unhealthy: "plan_type gets sent correctly in the event, but nobody registers it, and it shows '(not set)' in every report for weeks.",
          interpret: "Sending a parameter and registering it as a reportable dimension are two separate steps. Skipping the second one wastes the first.",
          soWhat: [
            {
              symptom: "A custom parameter shows '(not set)' in reports",
              action: "Register it in Admin > Custom Definitions; it will only backfill going forward, not retroactively",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Confirm the Custom Definitions registration flow",
            why: "Free, the exact screen a developer will need to use post-launch",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Draft the tracking spec's three tabs",
            why: "Free, easy to hand off and comment on with a developer",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page GA4 tracking spec (event names, key events, custom dimensions to register) ready to hand to a developer.",
      sampleOutput:
        "Squarespace pricing-page tracking spec (excerpt)\n\nEVENT NAMES\n  Start free trial -> sign_up\n  Compare plans click -> select_content\n\nKEY EVENTS\n  sign_up (marked)\n\nCUSTOM DIMENSIONS TO REGISTER\n  plan_tier (Event scope)",
      successCriteria: [
        "Maps every trackable action to a reserved name where one exists",
        "Marks only genuine business-outcome events as key events",
        "Explicitly calls out every custom parameter that needs Custom Dimension registration",
      ],
      portfolioReady: true,
    },
  ],
  "utm-tagging": [
    {
      id: "utm-tagging-broken-links-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Pre-Send Teardown: Finding What's Broken in Five Campaign Links",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective: "Given five real-shaped UTM-tagged URLs pulled from a campaign brief, find every tagging defect before the links go live.",
      companyId: "nykaa",
      scenario:
        "You're the campaigns coordinator at Nykaa reviewing the batch of tracking links a junior teammate built for next week's festive sale push, across email, paid social, and influencer posts.",
      brief: "Read all five URLs against the lesson's five-step checklist and flag every defect, not just the first one you notice.",
      mode: "teardown",
      conceptsCovered: ["The Five-Step Pre-Launch Checklist", "Common Mistakes to Avoid"],
      teardownItems: [
        {
          itemId: "link-1-capitalization",
          specimen: "https://nykaa.com/festive-sale?utm_source=Instagram&utm_medium=social&utm_campaign=festive-sale-2026",
          specimenSource: "synthetic-realistic",
          prompt: "This link is going into the Instagram bio next week. What's wrong with it?",
          answerKey: [
            {
              defect: "utm_source is capitalized ('Instagram' instead of 'instagram')",
              severity: "moderate",
              whyItMatters:
                "GA4 is case-sensitive; 'Instagram' and 'instagram' will show up as two separate rows in every acquisition report, splitting one channel's data in half.",
              lessonRef: "Step 1: Lowercase everything.",
              owner: "you",
            },
          ],
          distractors: [
            "utm_campaign uses hyphens instead of spaces (this is correct, not a defect)",
            "The URL uses https (this is correct, not a defect)",
          ],
          partialCredit: true,
        },
        {
          itemId: "link-2-medium-missing",
          specimen: "https://nykaa.com/festive-sale?utm_source=mailchimp&utm_campaign=festive-sale-2026",
          specimenSource: "synthetic-realistic",
          prompt: "This is the newsletter send link. Will GA4 report this traffic correctly?",
          answerKey: [
            {
              defect: "utm_medium is missing entirely",
              severity: "critical",
              whyItMatters:
                "GA4 requires source, medium, and campaign together; missing even one sends the whole visit to 'Unassigned', not just a degraded version of 'email'.",
              lessonRef: "Parameters 1, 2, and 3 (source, medium, campaign) are the core three.",
              owner: "you",
            },
          ],
          distractors: ["utm_source is lowercase (this is correct, not a defect)"],
          partialCredit: true,
        },
        {
          itemId: "link-3-source-medium-swap",
          specimen: "https://nykaa.com/festive-sale?utm_source=email&utm_medium=mailchimp&utm_campaign=festive-sale-2026",
          specimenSource: "synthetic-realistic",
          prompt: "Another version of the newsletter link, from a different draft. What's off here?",
          answerKey: [
            {
              defect:
                "utm_source and utm_medium are swapped, 'email' should be the medium (category) and 'mailchimp' should be the source (platform)",
              severity: "critical",
              whyItMatters:
                "Swapping source and medium is the most common tagging error and corrupts every channel-level report; email campaigns from different platforms will no longer group together correctly.",
              lessonRef: "Step 3: Keep source and medium distinct.",
              owner: "you",
            },
          ],
          distractors: ["utm_campaign matches the other newsletter link exactly (this is correct, not a defect)"],
          partialCredit: true,
        },
        {
          itemId: "link-4-spaces-and-year-missing",
          specimen: "https://nykaa.com/festive sale?utm_source=facebook&utm_medium=paid-social&utm_campaign=festive sale",
          specimenSource: "synthetic-realistic",
          prompt: "This is the Meta ad link. Two separate teammates flagged it as 'probably fine'. Are they right?",
          answerKey: [
            {
              defect: "Spaces in the URL path and utm_campaign value instead of hyphens",
              severity: "moderate",
              whyItMatters: "Spaces get encoded as %20 or + in the live URL, making it fragile and hard to read in reports.",
              lessonRef: "Step 2: Use hyphens between words, not spaces.",
              owner: "you",
            },
            {
              defect: "utm_campaign has no year or version ('festive sale' instead of 'festive-sale-2026')",
              severity: "moderate",
              whyItMatters:
                "Reusing the same campaign name every year makes year-over-year comparison impossible; next year's festive sale will merge into this one.",
              lessonRef: "Using the same campaign name across years.",
              owner: "you",
            },
          ],
          distractors: ["utm_medium is 'paid-social' instead of just 'social' (this is an acceptable, specific medium value, not a defect)"],
          partialCredit: true,
        },
        {
          itemId: "link-5-internal-link-trap",
          specimen: "https://nykaa.com/pricing?utm_source=nav&utm_medium=internal&utm_campaign=site-nav",
          specimenSource: "synthetic-realistic",
          prompt: "This link is used on the 'Shop Now' button in the site's own top navigation bar. Should it be tagged?",
          answerKey: [
            {
              defect: "UTM tags added to an internal, same-site navigation link",
              severity: "critical",
              whyItMatters:
                "When a visitor arrives from Google and then clicks this nav link, GA4 starts a new session and credits it to the internal tag, erasing the original campaign attribution entirely.",
              lessonRef: "The internal link trap.",
              owner: "you",
            },
          ],
          distractors: ["utm_source value 'nav' is lowercase (this is correct, not a defect)"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each link's defects and the corrected version",
            why: "Free, easy to hand back to the teammate who built the links",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Check how a swapped source/medium actually renders in reports",
            why: "Free, shows the real reporting consequence of each defect",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A defect log for all 5 links: what's wrong, why it matters, and the corrected URL.",
      sampleOutput:
        "Zomato campaign link teardown (excerpt)\n\nLink 3 (WhatsApp share): utm_source=WhatsApp -> should be lowercase 'whatsapp'\nLink 4 (nav bar CTA): tagged with utm_source=nav -> remove all UTM tags, internal links only",
      successCriteria: [
        "Finds all defects across all 5 links, not just the most obvious one",
        "Correctly explains why source/medium swap corrupts reporting",
        "Flags the internal-link tag as the most severe issue",
      ],
      portfolioReady: true,
    },
    {
      id: "utm-tagging-naming-convention-template",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Governance Doc: Building a UTM Naming Convention Your Whole Team Will Actually Follow",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Build a complete UTM naming convention spreadsheet, approved source/medium values, campaign naming pattern, and auto-tagging setup notes, that a 5-person marketing team can follow without a single ad-hoc decision.",
      companyId: "lenskart",
      scenario:
        "Lenskart is running its first coordinated multi-channel campaign across Google Ads, Meta, email, and influencer partners, and three different people will be building tracking links this quarter.",
      brief: "Produce the governance artifact: an approved-values table, a campaign naming pattern, and instructions for Google Ads auto-tagging so nobody hand-writes those links.",
      mode: "build",
      conceptsCovered: ["Approved source and medium values", "Campaign naming pattern with date/version", "Auto-tagging with dynamic tokens"],
      steps: [
        {
          stepId: "step-1-approved-values",
          concept: "Approved source and medium values",
          lessonAnchor: "the-five-step-pre-launch-checklist",
          theoryRecap:
            "Step 4 of the checklist says a shared spreadsheet of approved source and medium values, with new values requiring team approval, is what prevents drift like 'email' vs 'e-mail' vs 'Email'.",
          question:
            "Three people are about to tag links for Google Ads, Meta, and an email send. What approved values do they need before anyone builds a single link?",
          toolName: "Google Sheets",
          where: "New 'Approved Values' tab in the shared UTM doc",
          procedure: [
            "List every channel the campaign will run on",
            "Assign one approved utm_source per channel",
            "Assign one approved utm_medium category per channel type",
          ],
          outputSample:
            "APPROVED VALUES\n  Channel: Google Ads     source=google      medium=cpc\n  Channel: Meta Ads       source=facebook    medium=paid-social\n  Channel: Email          source=mailchimp   medium=email",
          healthy: "Every channel maps to exactly one source and one medium value, documented once.",
          unhealthy: "Three people each independently decide, and Meta ends up tagged as 'facebook', 'meta', and 'fb-ads' across three different links.",
          interpret:
            "The table isn't documentation for its own sake, it's the thing that makes three people's tagging decisions produce one row per channel instead of three.",
          soWhat: [
            {
              symptom: "The same channel appears under two different utm_source spellings in a report",
              action: "Add the channel to the Approved Values tab and correct existing live links",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-campaign-naming-pattern",
          concept: "Campaign naming pattern with date/version",
          lessonAnchor: "common-mistakes-to-avoid",
          theoryRecap:
            "The lesson warns that reusing a campaign name across years breaks year-over-year comparison; always date or version it.",
          question: "What utm_campaign value should this quarter's launch use so it's still distinguishable from next year's version of the same campaign?",
          toolName: "Google Sheets",
          where: "Same doc, 'Campaign Naming Pattern' tab",
          procedure: [
            "Define a pattern: [initiative]-[period]-[year]",
            "Apply it to this campaign",
            "Note the pattern so future campaigns follow it without asking",
          ],
          outputSample: "CAMPAIGN NAMING PATTERN\n  Pattern: [initiative]-[period]-[year]\n  This campaign: multichannel-launch-q3-2026",
          healthy: "Campaign name bakes in the year, so 2027's version won't merge into this one in reports.",
          unhealthy: "utm_campaign=multichannel-launch, reused unchanged next year, silently combining two years of totally different creative into one row.",
          interpret: "A campaign name without a date isn't wrong today, it becomes wrong the day someone reuses it.",
          soWhat: [
            {
              symptom: "A campaign name has no year or version in it",
              action: "Append the period before the link goes live, not after someone asks why two years of data are combined",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-auto-tagging-setup",
          concept: "Auto-tagging with dynamic tokens",
          lessonAnchor: "auto-tagging-for-paid-ads",
          theoryRecap:
            "The lesson explains that Google Ads, LinkedIn, and Meta support dynamic tokens that auto-fill utm_content and utm_term at click time, so nobody hand-writes them per ad.",
          question: "The Google Ads account has 40 ads across 6 campaigns. Should someone hand-tag all 40 final URLs?",
          toolName: "Google Analytics 4",
          where: "Google Ads account settings, Final URL suffix field (documented in this doc for the ad ops teammate)",
          procedure: [
            "Write the final-URL-suffix template using {campaignid} and {keyword} tokens",
            "Note it applies at the account level, once",
            "Confirm every new ad inherits it automatically going forward",
          ],
          outputSample:
            "GOOGLE ADS AUTO-TAGGING\n  Final URL suffix: utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}\n  Set once at: Account level, Settings > Final URL suffix",
          healthy: "One suffix, set once, and all 40 ads and every future ad inherit correct tagging automatically.",
          unhealthy: "Someone hand-tags all 40 final URLs individually, and 3 of them get the wrong utm_medium because it was typed by hand.",
          interpret: "Dynamic tokens exist specifically so a person never has to hand-type the same tagging logic 40 times.",
          soWhat: [
            {
              symptom: "Ad ops is manually editing UTM values on individual Google Ads final URLs",
              action: "Move the tagging logic to the account-level Final URL suffix field once",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the approved-values table and naming pattern",
            why: "Free, shareable, and the whole team can comment on proposed values",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Confirm auto-tagged Google Ads traffic reports correctly",
            why: "Free, the destination that validates the auto-tagging setup actually worked",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A UTM governance doc: approved values table, campaign naming pattern, and Google Ads auto-tagging setup, ready for a 3-person team to follow.",
      sampleOutput:
        "Nykaa UTM governance doc (excerpt)\n\nAPPROVED VALUES\n  Channel: Influencer    source=[handle]   medium=affiliate\n\nCAMPAIGN NAMING PATTERN\n  beauty-drop-oct-2026\n\nGOOGLE ADS AUTO-TAGGING\n  Final URL suffix set at account level",
      successCriteria: [
        "Produces one approved source/medium pair per channel with no ambiguity",
        "Campaign naming pattern includes a period marker to prevent year-over-year collisions",
        "Documents Google Ads auto-tagging so no one hand-tags 40 individual ad URLs",
      ],
      portfolioReady: true,
      stretch: "Add a fourth tab mapping LinkedIn's and Meta's own dynamic token syntax alongside Google's.",
    },
  ],

  "conversion-tracking": [
    {
      id: "conversion-tracking-event-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Duplicate Fire: Auditing Zendesk's Conversion Event Export",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 15-row conversion event export from Zendesk's GA4 property, decide which events deserve a 'key event' flag and which browser/server pairs are double-firing without a shared event_id.",
      companyId: "zendesk",
      scenario:
        "You're the growth analyst at Zendesk auditing the measurement plan before Marketing turns on Smart Bidding for a trial-to-paid campaign. Sales is convinced signups have been undercounted for a month.",
      brief:
        "Sort the export into real conversions vs upstream signals, then find the purchase-style event that's firing twice.",
      mode: "diagnostic",
      conceptsCovered: [
        "Marking only the real ones as key events",
        "Deduplicating browser and server events with a shared event_id",
      ],
      steps: [
        {
          stepId: "step-1-key-event-triage",
          concept: "Marking only the real ones as key events",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook says to flag only bottom-of-funnel events as GA4 key events. Upstream signals stay as regular events so smart bidding doesn't optimize toward the cheapest, least valuable action.",
          question:
            "The export shows 15 events flagged as key events, including newsletter_signup, pricing_page_view, trial_started, and demo_requested. Which of these should actually keep the key-event flag?",
          toolName: "Google Sheets",
          where: "Import ga4-events-export.csv, freeze the header row, filter the event_name and is_key_event columns.",
          procedure: [
            "Import ga4-events-export.csv and freeze row 1",
            "Filter to is_key_event = TRUE and read all 15 rows",
            "Flag any event that is not a paid-plan action (page views, newsletter signups, content downloads) as a misclassification",
            "Cross-check the remaining rows against Zendesk's actual revenue events: trial_started, plan_upgraded",
          ],
          outputSample:
            "KEY EVENTS FLAGGED (15 total)\n  newsletter_signup        412/day   NOT a conversion\n  pricing_page_view        890/day   NOT a conversion\n  demo_requested            34/day   borderline, unqualified leads mixed in\n  trial_started             61/day   real conversion\n  plan_upgraded             19/day   real conversion",
          healthy:
            "Only trial_started and plan_upgraded stay flagged as key events; demo_requested moves to a regular event until lead-qualification data is joined in.",
          unhealthy:
            "Smart Bidding optimizes toward newsletter_signup because it fires 412 times a day versus 19 for plan_upgraded, and spend drifts toward audiences that read blog posts, not audiences that pay.",
          interpret:
            "A key event is a business decision about what counts as revenue-adjacent, not whichever event has the most rows.",
          soWhat: [
            {
              symptom: "Cost-per-acquisition looks artificially cheap because it's averaged across 15 event types",
              action: "Strip the key-event flag down to trial_started and plan_upgraded only, re-baseline CPA",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-dedup-audit",
          concept: "Deduplicating browser and server events with a shared event_id",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes list warns that firing the same conversion from both the browser pixel and the server container without a shared event_id inflates the count, sometimes by up to 2x.",
          question:
            "plan_upgraded shows 19 rows/day in the key-event report, but the export's raw event log shows 34 rows for the same day. What does the timestamp/event_id pattern tell you?",
          toolName: "Google Analytics 4",
          where: "GA4 DebugView and the raw Events report, filtered to plan_upgraded for a single day.",
          procedure: [
            "Open the Events report, filter to plan_upgraded, and export the raw row-level log for one day",
            "Sort by timestamp and look for pairs of rows within 2 seconds of each other with the same user_pseudo_id",
            "Check whether each row's event_id field is populated, and whether paired rows share the same value",
            "Count how many of the 34 raw rows are true duplicates versus real distinct upgrades",
          ],
          outputSample:
            "plan_upgraded, raw log excerpt (2 rows, same upgrade)\n  10:14:02   user_884   event_id: (empty)   source: browser tag\n  10:14:03   user_884   event_id: (empty)   source: server container\n\n34 raw rows -> 15 duplicate pairs -> 19 real upgrades",
          healthy:
            "Both the browser tag and server container send the same event_id for the same upgrade, GA4 collapses the pair into one, and the key-event count matches reality (19).",
          unhealthy:
            "Neither source sends an event_id, GA4 counts both, and every revenue report built on plan_upgraded is inflated by roughly 79% for that day alone.",
          interpret:
            "A raw count nearly double the key-event count, with empty event_id fields on matching timestamps, is the signature of an undeduplicated double-fire, not real growth.",
          soWhat: [
            {
              symptom: "Revenue reports and CPA calculations built on plan_upgraded run high every week",
              action: "File a dev ticket to pass a shared event_id from both the browser tag and server container",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Analytics 4",
            role: "Pull the raw event log and confirm the duplicate pattern in DebugView",
            why: "Free, and it's the same property the export came from",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Sort and filter the 15-row key-event export",
            why: "No account friction, works from a CSV export",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page conversion-event audit memo: which key-event flags to remove, and a dev ticket describing the event_id fix for the duplicate-firing event.",
      sampleOutput:
        "Instacart, conversion event audit (excerpt)\n\nKEY EVENTS TO KEEP\n  order_placed        real conversion, no dedup issue found\n\nKEY EVENTS TO DEMOTE\n  app_opened          412/day, not a conversion, demote to regular event\n\nDUPLICATE FOUND\n  order_placed shows 1,140 raw rows vs 640 key-event rows for the same day, missing event_id on the server-side tag",
      successCriteria: [
        "Correctly separates real key events from upstream signals",
        "Identifies plan_upgraded's raw-vs-key-event count gap as a deduplication failure, not real growth",
      ],
      portfolioReady: true,
    },
    {
      id: "conversion-tracking-inventory-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Ship It Before Tag Manager: Building Chewy's Conversion Inventory",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Write a complete conversion inventory, plain-English event list, GA4-recommended names, and key-event flags, for Chewy's Autoship subscription funnel before any tag fires.",
      companyId: "chewy",
      scenario:
        "You're the analytics lead at Chewy about to launch Autoship subscription tracking. The dev team wants a written event spec before they touch Google Tag Manager, not a verbal description in a Slack thread.",
      brief:
        "List every real conversion in plain English first, then map each one to a GA4-recommended event name.",
      mode: "build",
      conceptsCovered: [
        "Writing a conversion inventory before opening a tag manager",
        "Using GA4's recommended event names",
      ],
      steps: [
        {
          stepId: "step-1-plain-english-inventory",
          concept: "Writing a conversion inventory before opening a tag manager",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook step 1 says to list every event that matters, in plain English, before touching a tag manager, and assign each a monetary value even if estimated.",
          question:
            "Chewy's Autoship funnel has these real moments: a pet-food subscription signup, a first-box ship, a subscription pause, and a subscription cancel. Which get a monetary value, and which are just tracking signals?",
          toolName: "Google Sheets",
          where: "A new blank sheet, one row per real user action, columns for plain-English name, value, and priority.",
          procedure: [
            "List every distinct action a subscriber takes, in plain English, no tool-specific jargon",
            "Assign an estimated monetary value to signup and first-box-ship using average order value",
            "Mark pause and cancel as tracking signals with no positive value, useful for churn analysis, not for bidding",
            "Rank the list by which action the dev team should build first",
          ],
          outputSample:
            "CONVERSION INVENTORY (plain English)\n1. Subscriber completes Autoship signup      value: $42 (avg first order)\n2. First Autoship box ships                  value: $0, confirms signup wasn't fraudulent\n3. Subscriber pauses Autoship                 value: $0, churn signal, not a conversion\n4. Subscriber cancels Autoship                value: $0, churn signal, not a conversion",
          healthy:
            "The dev team builds signup and first-box-ship first because they carry real value; pause and cancel get built later as churn signals, never as key events.",
          unhealthy:
            "The team starts tagging whatever GA4's UI suggests first, ships a cancel event as a 'conversion,' and Smart Bidding has no idea it should optimize away from that.",
          interpret:
            "The inventory is the business decision, deciding what has value; the tag manager work that follows is just execution.",
          soWhat: [
            {
              symptom: "Dev team keeps asking 'is this a conversion?' mid-sprint",
              action: "Hand them the ranked plain-English inventory before the sprint starts, not during it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ga4-name-mapping",
          concept: "Using GA4's recommended event names",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook step 2 says to stick to GA4's recommended event names in snake_case wherever they fit, because Google's automated reports and Ads integrations only light up for those names.",
          question:
            "GA4 has a recommended event called sign_up. Chewy's plain-English item is 'Subscriber completes Autoship signup.' Do you use sign_up, or invent a custom name like autoship_signup_complete?",
          toolName: "Google Sheets",
          where: "The same inventory sheet, add a column for the mapped GA4 event name.",
          procedure: [
            "Check GA4's recommended events list for a name that fits each inventory row",
            "Map 'Subscriber completes Autoship signup' to sign_up, GA4's standard name",
            "Map 'First Autoship box ships' to a custom name (no GA4 standard fits a fulfillment event), autoship_first_ship",
            "Leave pause and cancel unmapped for now, since they aren't going into GA4 as key events",
          ],
          outputSample:
            "EVENT NAME MAPPING\n  Subscriber completes Autoship signup  -> sign_up (GA4 standard)\n  First Autoship box ships              -> autoship_first_ship (custom, no standard fits)",
          healthy:
            "sign_up uses the GA4 standard name, so it automatically populates GA4's built-in acquisition and Ads integration reports without extra configuration.",
          unhealthy:
            "The team names it autoship_signup_v2 out of habit, and GA4's automated sign-up reports and Google Ads conversion import both stay empty because the name doesn't match.",
          interpret:
            "A custom name isn't wrong when nothing standard fits, but skipping a standard name that does fit throws away free reporting.",
          soWhat: [
            {
              symptom: "GA4's built-in acquisition reports show zero sign-ups despite real signups happening",
              action: "Rename the custom event to the matching GA4-recommended name and re-verify in DebugView",
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
            role: "Build and rank the plain-English conversion inventory",
            why: "No account friction, hand-off ready for a dev ticket",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Check the recommended-events list and verify final names in DebugView",
            why: "Free, and it's the destination platform",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked conversion inventory spreadsheet with plain-English names, estimated values, and GA4-recommended event-name mappings, ready to hand to a developer.",
      sampleOutput:
        "FirstCry, conversion inventory (excerpt)\n\n1. Customer completes first order      -> purchase (GA4 standard)   value: avg order value\n2. Customer joins loyalty program      -> join_group (GA4 standard)  value: $0, engagement signal\n3. Customer downloads size guide PDF   -> file_download (GA4 standard) value: $0, not a key event",
      successCriteria: [
        "Every real conversion has a plain-English description and an estimated value before any GA4 name is assigned",
        "Uses GA4 recommended names wherever one genuinely fits, and only invents a custom name when none does",
      ],
      portfolioReady: true,
    },
  ],
  "funnel-analysis": [
    {
      id: "funnel-drop-off-audit-rtr",
      tier: "mini",
      archetype: "audit",
      title: "Where Rent the Runway Loses the Sale: Auditing a Real Funnel Report",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 5-stage funnel report (browse, item page, add to bag, checkout start, order complete) with per-stage, per-device user counts, calculate drop-off rates and name the single leakiest stage.",
      companyId: "rent-the-runway",
      scenario:
        "You're the growth analyst at Rent the Runway reviewing the rental checkout funnel after a seasonal traffic spike. Leadership wants to know exactly where the extra visitors are being lost.",
      brief:
        "Calculate drop-off rate at every stage, then segment the worst stage by device before recommending a fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating drop-off rate at each funnel stage",
        "Segmenting a funnel by device to find masked problems",
      ],
      steps: [
        {
          stepId: "step-1-dropoff-calc",
          concept: "Calculating drop-off rate at each funnel stage",
          lessonAnchor: "step-3-calculate-drop-off-rates",
          theoryRecap:
            "The lesson defines drop-off rate as (users who entered, minus users who completed) divided by users who entered, times 100. The stage with the biggest drop-off is the biggest opportunity.",
          question:
            "The 5-stage report shows: browse 10,000, item page 6,200, add to bag 2,800, checkout start 2,050, order complete 1,240. Which single stage has the worst drop-off rate?",
          toolName: "Google Sheets",
          where: "Import funnel-report.csv, add a drop-off-rate formula column.",
          procedure: [
            "Import funnel-report.csv with the 5 stage counts",
            "Calculate drop-off rate for each stage transition using (entered - completed) / entered x 100",
            "Rank the 4 transitions from worst to best drop-off rate",
            "Flag the single worst transition as the priority stage",
          ],
          outputSample:
            "DROP-OFF RATES BY STAGE\n  browse -> item page:        38% drop-off\n  item page -> add to bag:    55% drop-off  <- worst\n  add to bag -> checkout:     27% drop-off\n  checkout -> order complete: 40% drop-off",
          healthy:
            "The team prioritizes fixing item page -> add to bag, the 55% drop, before touching the checkout flow that has a smaller but louder problem.",
          unhealthy:
            "The team redesigns checkout first because it's the closest stage to revenue, while the biggest leak (item page to add to bag) keeps losing over half of engaged visitors.",
          interpret:
            "The biggest number, not the closest-to-revenue stage, is where the fix has the most leverage.",
          soWhat: [
            {
              symptom: "Checkout redesign shipped but overall order volume barely moved",
              action: "Re-run drop-off rates on the item-page stage before the next roadmap cycle",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-device-segment",
          concept: "Segmenting a funnel by device to find masked problems",
          lessonAnchor: "funnel-segmentation-the-most-underused-technique",
          theoryRecap:
            "The lesson warns that an aggregate funnel number can mask a device-specific problem, splitting by device type is one of the most underused diagnostic techniques.",
          question:
            "The item page -> add to bag stage shows 55% drop-off overall. Split by device, desktop drops 31% and mobile drops 68%. What does that tell you about where to focus the fix?",
          toolName: "Google Analytics 4",
          where: "GA4 Funnel Exploration, segmented by device category.",
          procedure: [
            "Open the same funnel in GA4's Funnel Exploration report",
            "Add a device-category segment breakdown to the item-page -> add-to-bag transition",
            "Compare desktop drop-off against mobile drop-off",
            "Check whether mobile traffic volume is large enough to explain most of the aggregate 55% figure",
          ],
          outputSample:
            "ITEM PAGE -> ADD TO BAG, by device\n  Desktop: 31% drop-off  (2,400 of 3,900 users)\n  Mobile:  68% drop-off  (2,100 of 6,100 users)\n  Aggregate: 55% drop-off (masks the mobile-specific problem)",
          healthy:
            "The fix scope narrows to the mobile add-to-bag flow specifically, likely a tap-target or size-selector issue, instead of a generic 'improve the item page' project.",
          unhealthy:
            "The team ships a desktop-only redesign because that's where the design system is easiest to update, and the real 68% mobile leak goes untouched.",
          interpret:
            "A 37-point gap between desktop and mobile at the same stage means the aggregate number was hiding a mobile-specific defect, not a general page problem.",
          soWhat: [
            {
              symptom: "Item page 'improvements' shipped but mobile add-to-bag rate didn't move",
              action: "Pull session recordings filtered to mobile only at the item-page stage",
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
            role: "Calculate drop-off rate across the 5 stages from the CSV export",
            why: "Free, works directly from the exported report",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Segment the worst stage by device category",
            why: "Free, and Funnel Exploration supports device segmentation natively",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page funnel diagnosis memo naming the single leakiest stage, the device segment driving it, and a recommended fix scope.",
      sampleOutput:
        "Casper Sleep, funnel diagnosis memo (excerpt)\n\nWORST STAGE: product page -> add to cart, 61% drop-off aggregate\nDEVICE SPLIT: mobile 74% drop-off vs desktop 38% drop-off\nRECOMMENDATION: scope the fix to the mobile product page, not a full-site redesign",
      successCriteria: [
        "Correctly identifies item page -> add to bag as the worst-performing transition",
        "Uses the device split to narrow the fix to mobile, not the whole item page",
      ],
      portfolioReady: true,
    },
    {
      id: "funnel-fix-revenue-forecast-thredup",
      tier: "core",
      archetype: "forecast",
      title: "The Business Case: Forecasting the Revenue Impact of Fixing ThredUp's Leakiest Stage",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given ThredUp's current stage conversion rates, traffic volume, and average order value, forecast the revenue impact of closing the gap between the worst-performing stage and a realistic industry benchmark, and build the business case for prioritizing that fix.",
      companyId: "thredup",
      scenario:
        "You're a growth analyst at ThredUp building the Q3 roadmap pitch. Three teams each want dev resources for a different funnel fix, and you have to make the revenue case for the one that matters most.",
      brief:
        "Calculate the overall funnel conversion rate, compare the worst stage to a realistic benchmark, then translate the gap into a dollar forecast.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating overall funnel conversion rate",
        "Comparing a stage conversion rate against a realistic benchmark",
        "Translating a conversion-rate fix into a revenue forecast",
      ],
      steps: [
        {
          stepId: "step-1-overall-rate",
          concept: "Calculating overall funnel conversion rate",
          lessonAnchor: "key-metrics-in-funnel-analysis",
          theoryRecap:
            "The lesson defines overall funnel conversion rate as the percentage of users at the top of the funnel who complete the final goal, noting the 2025 industry average was 3.1%, with top performers reaching 9.2%.",
          question:
            "ThredUp's funnel shows 500,000 monthly visitors and 9,500 completed orders. What's the overall funnel conversion rate, and how does it compare to the 3.1% industry average?",
          toolName: "Google Sheets",
          where: "A funnel-summary sheet with visitor count, order count, and a conversion-rate formula.",
          procedure: [
            "Divide 9,500 completed orders by 500,000 visitors, multiply by 100",
            "Compare the result against the 3.1% industry average and 9.2% top-performer benchmark cited in the lesson",
            "Note whether ThredUp is below, at, or above the industry average",
          ],
          outputSample: "Overall funnel conversion rate: 9,500 / 500,000 x 100 = 1.9%\nIndustry average: 3.1%   Top 10%: 9.2%\nThredUp is below the industry average",
          healthy:
            "The 1.9% figure becomes the baseline for the forecast, anchored against a real published benchmark instead of an arbitrary target.",
          unhealthy:
            "The team picks an aspirational target like 'let's hit 5%' with no benchmark backing it, and the forecast has no credible anchor when finance pushes back.",
          interpret:
            "1.9% against a 3.1% published average means there's a real, sourceable gap, not just an internal opinion that the funnel 'feels slow.'",
          soWhat: [
            {
              symptom: "Roadmap pitches get rejected for lacking a credible target number",
              action: "Anchor every funnel-fix pitch to a published industry benchmark, not an internal guess",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-benchmark-compare",
          concept: "Comparing a stage conversion rate against a realistic benchmark",
          lessonAnchor: "key-metrics-in-funnel-analysis",
          theoryRecap:
            "The lesson notes a healthy e-commerce cart-to-checkout rate is typically 40-60%, and that B2C funnels often reach 5-15% overall, giving a realistic comparison point instead of a generic global average.",
          question:
            "ThredUp's cart-to-checkout stage converts at 22%. The lesson's healthy range for this exact stage is 40-60%. Is this the stage worth fixing first, or is 1.9% overall too low to pin on one stage?",
          toolName: "Google Sheets",
          where: "The same funnel-summary sheet, add each stage's rate next to its benchmark range.",
          procedure: [
            "List every stage's actual conversion rate next to the lesson's cited benchmark range",
            "Identify which stage has the largest gap below its benchmark, not just the lowest raw number",
            "Confirm cart-to-checkout at 22% (versus a 40-60% healthy range) is the largest gap in the funnel",
          ],
          outputSample:
            "STAGE vs BENCHMARK\n  browse -> product page: 58% (no strong published benchmark)\n  add to cart -> checkout: 22% vs 40-60% healthy   <- largest gap\n  checkout -> order: 71% vs no major benchmark concern",
          healthy:
            "Cart-to-checkout gets prioritized because it's the stage furthest below its own benchmark, not just the stage with the smallest raw number.",
          unhealthy:
            "The team fixes the top-of-funnel browse stage because its raw traffic loss looks biggest in absolute terms, while the benchmark-relative gap at cart-to-checkout goes unaddressed.",
          interpret:
            "A stage-specific benchmark, not a top-of-funnel volume number, is what tells you which gap is actually abnormal.",
          soWhat: [
            {
              symptom: "Roadmap debates stall over which stage 'feels' most broken",
              action: "Replace the debate with a benchmark-gap table ranked by percentage points below range",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-revenue-forecast",
          concept: "Translating a conversion-rate fix into a revenue forecast",
          lessonAnchor: "the-one-line-takeaway",
          theoryRecap:
            "The lesson's one-line takeaway is to find the single step where most people leave, fix that one thing first. The revenue case is what makes that priority visible to non-analytics stakeholders.",
          question:
            "If cart-to-checkout moves from 22% to the low end of the healthy range (40%), and average order value is $65, how much additional monthly revenue does that represent, using the same top-of-funnel traffic?",
          toolName: "Google Sheets",
          where: "The same sheet, model the forecast with a before/after column.",
          procedure: [
            "Hold add-to-cart volume constant and apply the current 22% and target 40% checkout rates",
            "Multiply the difference in checkout completions by average order value ($65)",
            "Present the forecast as a monthly revenue range, not a single overstated point estimate",
          ],
          outputSample:
            "Add to cart volume: 28,000/month\nCurrent checkout completions (22%): 6,160  x  $65 = $400,400\nTarget checkout completions (40%): 11,200  x  $65 = $728,000\nForecasted monthly lift: ~$327,600",
          healthy:
            "The forecast ships as a range with the calculation shown, so finance can sanity-check the assumption instead of taking the number on faith.",
          unhealthy:
            "The team presents a single flashy number ($327,600/month!) with no visible math, and it gets torn apart in the first roadmap review.",
          interpret:
            "A forecast is only as credible as the assumptions a stakeholder can see and challenge.",
          soWhat: [
            {
              symptom: "Previous funnel-fix pitches got cut from the roadmap for lacking a dollar figure",
              action: "Attach a shown-math revenue forecast to every future funnel-fix proposal",
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
            role: "Build the benchmark comparison and revenue forecast model",
            why: "Free, transparent formulas a stakeholder can audit line by line",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull the current stage-by-stage conversion rates and traffic volume",
            why: "Free, source of the funnel data being forecast against",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Looker Studio",
            role: "Turn the before/after forecast into a shareable roadmap-review dashboard",
            why: "Cleaner stakeholder presentation than a raw spreadsheet, though not required to complete the forecast",
            required: false,
            fallback: "Google Sheets charts cover the same before/after visual",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page revenue forecast memo with a before/after funnel model, a shown-math dollar estimate, and a prioritization recommendation for the Q3 roadmap.",
      sampleOutput:
        "Instacart, revenue forecast memo (excerpt)\n\nTARGET STAGE: browse -> item page, 41% vs a realistic 55-60% benchmark\nFORECAST: closing the gap at current traffic volume adds an estimated $184,000-$210,000 in monthly order value\nRECOMMENDATION: prioritize this over the checkout-page redesign, which has a smaller benchmark gap",
      successCriteria: [
        "Correctly calculates overall funnel conversion rate and compares it to the cited industry benchmark",
        "Identifies the stage with the largest benchmark-relative gap, not just the largest raw drop",
        "Produces a shown-math revenue forecast, not an unexplained point estimate",
      ],
      portfolioReady: true,
    },
  ],

  "mmm": [
    {
      id: "mmm-saturation-adstock-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Reallocation Call: Auditing Grab's MMM Output",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a supplied 5-channel MMM output table for Grab's ride-hailing and food delivery ad mix (contribution %, saturation status, adstock decay), apply the lesson's interpretation framework to flag the over-invested and under-invested channels.",
      companyId: "grab",
      scenario:
        "You're the media analyst at Grab preparing the quarterly budget memo. Finance wants a reallocation recommendation, not a wall of regression output.",
      brief:
        "Read the response-curve and adstock outputs already fitted by the data science team, and translate them into a plain-English reallocation call.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reading saturation curves to spot over-invested channels",
        "Distinguishing carryover (adstock) from immediate response",
      ],
      steps: [
        {
          stepId: "step-1-saturation-read",
          concept: "Reading saturation curves to spot over-invested channels",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook step 6 says: fit the response curves, then solve for the spend mix that maximizes revenue at the current budget. A channel past its saturation point returns less per dollar than one still climbing its curve.",
          question:
            "Grab's MMM output shows Google Search Ads contributing 9% marginal revenue per additional ₹1L/week up to ₹40L/week with no flattening, while Meta's marginal contribution drops from 8% to 2% once weekly spend crosses ₹18L. Grab is currently spending ₹22L/week on Meta and ₹15L/week on Search. What's the call?",
          toolName: "Google Sheets",
          where: "Import mmm-output-grab.csv, plot marginal contribution vs weekly spend for each channel.",
          procedure: [
            "Import mmm-output-grab.csv and freeze the header row",
            "Sort channels by 'marginal contribution at current spend' ascending",
            "Flag any channel whose current spend sits past its saturation point",
          ],
          outputSample:
            "Channel        CurrentSpend  SaturationPoint  MarginalContribAtCurrentSpend\nMeta           22L/wk        18L/wk           2%\nGoogle Search  15L/wk        40L/wk+          9%\nYouTube        9L/wk         12L/wk           6%\nTV             6L/wk         20L/wk           7%\nPodcasts       2L/wk         5L/wk            8%",
          healthy:
            "Search, TV, and Podcasts are all still climbing their curves, moving spend there returns more per rupee than Meta does today.",
          unhealthy:
            "Leaving Meta at ₹22L/week because 'it's always been the biggest channel' while it returns a quarter of what Search returns at the margin.",
          interpret:
            "Saturation isn't a warning to cut a channel to zero, it's a signal that the NEXT rupee is better spent elsewhere.",
          soWhat: [
            {
              symptom: "A channel's marginal contribution is below 3% while others sit above 7%",
              action: "Shift the next budget increment to the under-saturated channel, don't cut the saturated one to zero",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-adstock-read",
          concept: "Distinguishing carryover (adstock) from immediate response",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's worked example notes podcasts can carry a 6-week decay, a channel can look 'dead' in the week it's cut and still be driving sales for over a month after.",
          question:
            "Grab paused podcast spend in week 40 for a cost review. Weekly revenue attributable to podcasts (per the model) was 4,200 in week 40, 3,100 in week 42, and 1,800 in week 46. Is this evidence podcasts don't work, or something else?",
          toolName: "Google Sheets",
          where: "Chart the podcast contribution column across weeks 38-48 against the spend column.",
          procedure: [
            "Plot podcast weekly spend and modeled contribution on the same chart",
            "Note the week spend drops to zero",
            "Measure how many weeks the contribution line takes to reach zero after that",
          ],
          outputSample:
            "Week  Spend  ModeledContribution\n38    2000   4500\n40    0      4200\n42    0      3100\n44    0      2600\n46    0      1800\n48    0      900",
          healthy:
            "Contribution decays gradually over ~6 weeks after spend stops, this is adstock carryover working as expected, not a sign the channel failed.",
          unhealthy:
            "Reading week-40's still-high contribution as 'podcasts don't move fast enough to matter' and cutting the channel permanently after one pause.",
          interpret: "A channel's decay curve length tells you how long to wait before judging a pause, not whether the channel is broken.",
          soWhat: [
            {
              symptom: "A paused channel still shows contribution 2+ weeks later",
              action: "Wait out the full adstock decay window before concluding the channel has no effect",
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
            role: "Sort, filter, and chart the MMM output table",
            why: "Free, no account friction, handles a 5-channel weekly table easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page reallocation memo: which channels are past saturation, which still have room, and the adstock decay window for any channel under review.",
      sampleOutput:
        "Zomato Q3 MMM reallocation memo (excerpt)\n\nOVER-SATURATED: Google Display (spend 14L/wk, saturation point 8L/wk, marginal contribution 1%)\nSTILL CLIMBING: YouTube (spend 5L/wk, saturation point 15L/wk, marginal contribution 8%)\n\nRecommendation: shift 4L/wk from Display to YouTube next quarter.",
      successCriteria: [
        "Correctly flags every channel spending past its saturation point",
        "Does not misread adstock decay as channel failure",
      ],
      portfolioReady: true,
      stretch: "Re-run the audit assuming a 15% overall budget cut, which channels absorb it first?",
    },
    {
      id: "mmm-geo-lift-calibration-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Calibrate or Guess: Correcting Wise's MMM Priors With a Geo-Lift Result",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Wise's uncalibrated MMM output (which credits paid search with 31% of incremental revenue) and a separate geo-lift test result for the same channel, recalibrate the model's contribution estimate and forecast the corrected quarterly budget split.",
      companyId: "wise",
      scenario:
        "You're the analytics lead at Wise. The uncalibrated MMM just landed, and it credits paid search with an implausibly large share of growth. A geo-lift test on the same channel just wrapped.",
      brief:
        "Apply the lesson's Step 5 (calibrate against experiments) to replace the model's prior with a measured lift, then forecast what the corrected allocation should be.",
      mode: "calibration",
      conceptsCovered: [
        "Calibrating MMM against experimental ground truth (the step amateurs skip)",
        "Reporting a credible interval instead of a point estimate",
        "Stress-testing a reallocation at plus/minus 20% budget",
      ],
      steps: [
        {
          stepId: "step-1-calibrate-prior",
          concept: "Calibrating MMM against experimental ground truth (the step amateurs skip)",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Step 5 of the lesson's playbook: run geo-lift or conversion-lift tests on your two biggest channels and use the measured lifts as priors. Uncalibrated MMM is astrology.",
          question:
            "Wise's uncalibrated model credits paid search with 31% of incremental revenue. A geo-lift test run the same quarter measured paid search's true incremental lift at 14% of revenue in the test regions. Which number goes into the board deck?",
          toolName: "Google Sheets",
          where: "Add a 'calibrated' column next to the model's raw output, overwrite paid search's row with the geo-lift figure.",
          procedure: [
            "List the model's raw per-channel contribution %",
            "Insert the geo-lift measured lift for paid search next to it",
            "Replace the model's paid search row with the measured figure, leave uncalibrated channels as-is",
          ],
          outputSample:
            "Channel       ModelRaw%   GeoLiftMeasured%   Calibrated%\nPaid Search   31%         14%                 14%\nMeta          22%         n/a (not tested)    22%\nTV            18%         n/a (not tested)    18%",
          healthy: "The board deck reports 14% for paid search, the measured figure, not the model's uncorrected 31%.",
          unhealthy: "Presenting the raw 31% because 'that's what the model said' when a direct measurement of the same channel exists.",
          interpret: "A measured lift always overrides the model's unconstrained estimate for that channel; that's the entire point of calibration.",
          soWhat: [
            {
              symptom: "The model's estimate for a channel diverges from a measured lift by more than 5 points",
              action: "Overwrite the model's estimate with the measured figure before it reaches finance",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-credible-interval",
          concept: "Reporting a credible interval instead of a point estimate",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section: Bayesian MMM gives posterior distributions for a reason, report the 80% credible interval, not the point estimate, to finance.",
          question:
            "The calibrated model now reports TV's contribution as a posterior with an 80% credible interval of 11%-25% (point estimate 18%). Finance asks for 'the number'. What do you send?",
          toolName: "Google Sheets",
          where: "Add a range column, not just a single-number column, to the calibrated output table.",
          procedure: [
            "Pull the 80% credible interval bounds for each channel from the model output",
            "Present the range alongside, not instead of, the point estimate",
            "Flag any channel whose interval crosses zero as statistically unreliable",
          ],
          outputSample: "Channel   PointEstimate   80% Credible Interval\nTV        18%             11% - 25%\nYouTube   9%              -2% - 19%   <- crosses zero",
          healthy:
            "TV's range (11-25%) is reported alongside its point estimate; YouTube's crossing-zero interval is flagged as unreliable, not treated as a confident 9%.",
          unhealthy: "Sending finance a single number for every channel with no range, which reads as far more certain than the model actually is.",
          interpret: "A wide or zero-crossing interval means 'we don't know yet', not 'the effect is real but small'.",
          soWhat: [
            {
              symptom: "A channel's credible interval crosses zero",
              action: "Flag it as unreliable and recommend a dedicated lift test before reallocating its budget",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-stress-test",
          concept: "Stress-testing a reallocation at plus/minus 20% budget",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "Step 6: use the fitted response curves to solve for the spend mix that maximizes revenue at the current budget, then stress-test at plus/minus 20% budget.",
          question:
            "The calibrated model recommends shifting 10L/week from paid search to TV. Before that goes into next quarter's plan, what's the one check the lesson says not to skip?",
          toolName: "Google Sheets",
          where: "Re-run the optimizer's output at 80% and 120% of the current total budget, not just the current budget.",
          procedure: [
            "Take the calibrated response curves",
            "Re-solve the optimal mix at -20% and +20% of total budget",
            "Confirm the recommended shift toward TV holds at both budget levels, not just the current one",
          ],
          outputSample: "Budget scenario     Recommended TV share\n-20% total budget    24%\nCurrent budget       28%\n+20% total budget    27%",
          healthy: "TV's recommended share stays in the 24-28% range across all three budget scenarios, the reallocation is robust to a budget change.",
          unhealthy: "Locking in a reallocation that only makes sense at exactly today's budget, then having to redo it the moment finance moves the number.",
          interpret: "A stress-tested recommendation survives the actual budget conversation; an un-stress-tested one has to be redone in the room.",
          soWhat: [
            {
              symptom: "A reallocation recommendation was only solved at one budget level",
              action: "Re-solve at plus/minus 20% before presenting, and report the range that holds",
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
            role: "Build the calibration table and stress-test the reallocation across budget scenarios",
            why: "Free, handles a small multi-channel comparison table without any modeling software",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A calibrated MMM summary table (model raw vs geo-lift-corrected vs credible interval) plus a stress-tested budget reallocation that holds at plus/minus 20% of total spend.",
      sampleOutput:
        "Adyen Q2 calibration memo (excerpt)\n\nChannel     ModelRaw%  Calibrated%  80% CI\nPaid Search 27%        15%          9%-21%\nTV          16%        16%          10%-24%\n\nStress test: reallocation to TV holds at -20%/+20% budget (range 22%-29% share).",
      successCriteria: [
        "Replaces every calibrated channel's raw model estimate with its measured geo-lift figure",
        "Reports credible intervals, not point estimates, for uncalibrated channels",
        "Confirms the reallocation recommendation holds at both -20% and +20% total budget",
      ],
      portfolioReady: true,
      stretch: "Recompute the calibration if the geo-lift test itself only reached 70% statistical power, how much do you discount the correction?",
    },
  ],
  "incrementality": [
    {
      id: "incrementality-geo-holdout-readout-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Holdout Readout: Auditing Zomato's Geo-Lift Numbers",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a supplied 8-city-pair geo holdout dataset for Zomato's food delivery ads (test spend, test conversions, control conversions), calculate iROAS per pair and flag any pair that looks contaminated or underpowered.",
      companyId: "zomato",
      scenario:
        "You're the growth analyst at Zomato reviewing a just-completed 5-week geo holdout test across 8 matched city pairs before the quarterly channel review.",
      brief: "Apply the lesson's iROAS formula and contamination checks to the raw city-pair numbers, don't just average the headline lift.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating iROAS from a test/control conversion gap",
        "Spotting spillover contamination between matched geo pairs",
      ],
      steps: [
        {
          stepId: "step-1-pair-iroas",
          concept: "Calculating iROAS from a test/control conversion gap",
          lessonAnchor: "how-to-calculate-iroas-a-worked-example",
          theoryRecap:
            "iROAS = (Revenue in test group minus Revenue in control group) / Ad spend in test group. Platform ROAS is attribution; iROAS is causation.",
          question:
            "Pair 3 (Pune test / Nashik control): test group had 620 conversions at ₹450 AOV and ₹95,000 spend, control had 540 conversions. What's the iROAS?",
          toolName: "Google Sheets",
          where: "Build a column per city pair: test conversions, control conversions, AOV, spend, then formula out iROAS.",
          procedure: [
            "Enter test and control conversions and spend for each of the 8 pairs",
            "Compute incremental conversions = test conversions minus control conversions",
            "Compute iROAS = (incremental conversions x AOV) / spend for each pair",
          ],
          outputSample:
            "Pair            TestConv  ControlConv  IncrConv  AOV   Spend   iROAS\nPune/Nashik     620       540          80        450   95000   0.38x\nSurat/Vadodara  710       410          300       450   88000   1.53x",
          healthy: "Pairs like Surat/Vadodara (1.53x) clear the bar to keep or scale; Pune/Nashik (0.38x) does not.",
          unhealthy: "Averaging all 8 pairs into one iROAS number and missing that one pair is dragging the average down for a fixable reason.",
          interpret: "A per-pair iROAS calculation surfaces which specific markets are working, a single blended number hides it.",
          soWhat: [
            {
              symptom: "One city pair's iROAS is far below the others",
              action: "Check that pair for spillover or a demand mismatch before pooling it into the headline number",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-spillover-check",
          concept: "Spotting spillover contamination between matched geo pairs",
          lessonAnchor: "common-mistakes-that-kill-tests",
          theoryRecap:
            "The lesson's Common Mistakes: if a paused market shares a media market with its test counterpart, the control is contaminated.",
          question:
            "Pune and Nashik are 210km apart with separate media markets, but pair 3's control-region conversions rose 18% mid-test with no local promotion. What do you check first?",
          toolName: "Google Sheets",
          where: "Chart control-region conversions week by week across the test window, look for a mid-test jump.",
          procedure: [
            "Plot weekly control-region conversions for the flagged pair",
            "Cross-check for any city-wide event, competitor promo, or shared ad exposure mid-test",
            "Mark the pair as contaminated if no local explanation exists and note it separately from the clean pairs",
          ],
          outputSample: "Week  Pune(test)conv  Nashik(control)conv\n1     140             95\n2     155             98\n3     150             142   <- jump, no known cause\n4     175             138",
          healthy: "The contaminated pair is excluded from the headline iROAS and reported separately with a note, not silently blended in.",
          unhealthy: "Averaging the contaminated pair's low iROAS into the topline number and concluding the channel underperforms.",
          interpret: "An unexplained control-region jump means the control isn't clean, don't treat its iROAS as a real read on the channel.",
          soWhat: [
            {
              symptom: "A control region's conversions move without a known local cause mid-test",
              action: "Exclude that pair from the headline calculation and investigate separately",
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
            role: "Compute per-pair iROAS and chart control-region conversions for contamination checks",
            why: "Free, handles an 8-row city-pair table and simple line charts without any statistics software",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A per-city-pair iROAS table with contaminated pairs flagged and excluded from the headline number.",
      sampleOutput:
        "Grab food delivery geo test, city-pair iROAS (excerpt)\n\nPair             iROAS   Status\nCebu/Davao       2.1x    Clean, scale\nManila/QC        0.6x    Clean, hold\nIloilo/Bacolod   n/a     Contaminated, excluded (shared media market)",
      successCriteria: [
        "Computes iROAS correctly per city pair using the test/control gap formula",
        "Correctly identifies and excludes the contaminated pair from the headline number",
      ],
      portfolioReady: true,
      stretch: "Re-run the topline iROAS with and without the contaminated pair included, how much does it move?",
    },
    {
      id: "incrementality-channel-benchmark-head-to-head",
      tier: "core",
      archetype: "head-to-head",
      title: "Scale, Hold, or Cut: A Channel iROAS Head-to-Head for Sea Limited",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a supplied 6-channel iROAS readout for Sea Limited's Shopee marketing mix, decide which channels to scale, hold, or cut, correctly separating branded search's low incrementality from its high platform-reported ROAS.",
      companyId: "sea-limited",
      scenario:
        "You're the paid media lead at Sea Limited reviewing a completed multi-channel geo-lift program across Shopee's Southeast Asia markets.",
      brief: "Head-to-head every channel's platform ROAS against its measured iROAS, then make a scale/hold/cut call per channel.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing platform ROAS from incremental ROAS (iROAS)",
        "Recognizing why branded search often shows near-zero incrementality",
        "Deciding scale, hold, or cut from a channel iROAS table",
      ],
      steps: [
        {
          stepId: "step-1-roas-vs-iroas",
          concept: "Distinguishing platform ROAS from incremental ROAS (iROAS)",
          lessonAnchor: "what-incrementality-actually-means",
          theoryRecap: "Attribution asks which channel touched the conversion, incrementality asks which channel caused it. Only iROAS tells you where to put budget.",
          question:
            "Shopee's dashboard reports CTV at 1.8x ROAS and branded search at 6.2x ROAS. The geo-lift test measures CTV's iROAS at 3.3x and branded search's at 0.7x. Which platform number was more misleading?",
          toolName: "Google Sheets",
          where: "Build a two-column comparison: platform-reported ROAS vs measured iROAS, per channel.",
          procedure: [
            "List each channel's platform-reported ROAS",
            "List each channel's measured iROAS next to it",
            "Sort by the size of the gap between the two, largest gap first",
          ],
          outputSample: "Channel          PlatformROAS   iROAS   Gap\nBranded Search   6.2x           0.7x    -5.5x\nCTV              1.8x           3.3x    +1.5x",
          healthy: "Branded search's platform number is recognized as the misleading one, despite looking like the best channel on the dashboard.",
          unhealthy: "Reading CTV as the underperformer because 1.8x looks worse than branded search's 6.2x on the dashboard.",
          interpret: "The channel with the biggest gap between platform ROAS and iROAS is the one your dashboard is lying about hardest.",
          soWhat: [
            {
              symptom: "A channel's platform ROAS is far higher than its measured iROAS",
              action: "Treat the platform number as attribution noise, budget off the iROAS figure instead",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-branded-search-pattern",
          concept: "Recognizing why branded search often shows near-zero incrementality",
          lessonAnchor: "channel-iroas-benchmarks-2025-data",
          theoryRecap:
            "The lesson's benchmark table shows branded search scoring lowest (0.70x) industry-wide, people already searching for your brand by name were going to click the organic result anyway.",
          question:
            "Branded search's iROAS came back at 0.7x for Sea Limited. Marketing wants to double the branded search budget because it 'converts so well'. What's the response?",
          toolName: "Google Sheets",
          where: "Cross-reference branded search's iROAS against the lesson's industry benchmark row for the same category.",
          procedure: [
            "Compare Sea Limited's branded search iROAS (0.7x) to the lesson's industry median for branded search (0.70x)",
            "Confirm the pattern matches, not an anomaly specific to this test",
            "Recommend a spend cut, not an increase, for branded search",
          ],
          outputSample: "Category               SeaLimited iROAS   Industry median\nBranded search         0.7x               0.70x  <- matches, not an anomaly\nNon-branded search     1.6x               1.46x",
          healthy: "Branded search spend gets cut, not doubled, once the near-zero iROAS is confirmed against the industry pattern.",
          unhealthy: "Doubling branded search budget because its platform ROAS and conversion rate both look strong.",
          interpret: "A high-converting channel and a high-incrementality channel are not the same thing; branded search is the textbook example of the gap.",
          soWhat: [
            {
              symptom: "Branded search shows a high platform ROAS but sub-1x iROAS",
              action: "Cut branded search spend toward defensive-minimum levels, redirect the saved budget to non-branded or CTV",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-scale-hold-cut",
          concept: "Deciding scale, hold, or cut from a channel iROAS table",
          lessonAnchor: "the-one-line-takeaway",
          theoryRecap:
            "The lesson's closing line: your ad platform's ROAS measures what happened near your ads, incrementality measures what your ads actually caused.",
          question: "Given the full 6-channel iROAS table, which channels get a scale, hold, and cut recommendation for next quarter?",
          toolName: "Google Sheets",
          where: "Add a decision column next to the iROAS table using simple thresholds (above 2x scale, 1-2x hold, below 1x cut).",
          procedure: [
            "Apply a scale/hold/cut threshold to each channel's iROAS",
            "Write one line justifying each call using the iROAS number, not the platform ROAS",
            "Total the current spend on 'cut' channels to size the reallocation pool",
          ],
          outputSample: "Channel          iROAS   Call\nCTV              3.3x    Scale\nNon-branded SEM  1.6x    Hold\nBranded Search   0.7x    Cut\nTikTok           0.9x    Cut",
          healthy: "The scale/hold/cut calls are justified entirely by iROAS thresholds, with no channel's call flipped by its platform ROAS.",
          unhealthy: "Hedging on the branded search cut because the platform dashboard still shows a strong ROAS number.",
          interpret: "A clean threshold rule applied consistently beats a case-by-case argument with whoever owns the highest-platform-ROAS channel.",
          soWhat: [
            {
              symptom: "A scale/hold/cut call keeps getting re-litigated by channel owners",
              action: "Publish the threshold rule and the iROAS table together, so the call is mechanical, not political",
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
            role: "Build the platform-ROAS-vs-iROAS comparison and apply scale/hold/cut thresholds",
            why: "Free, handles a 6-channel comparison table and simple threshold rules without any specialist software",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A 6-channel scale/hold/cut table with the platform-ROAS-vs-iROAS gap and a one-line justification per channel.",
      sampleOutput:
        "Nubank paid channel review (excerpt)\n\nChannel     PlatformROAS   iROAS   Call\nMeta        4.1x           2.6x    Scale\nBranded SEM 7.0x           0.6x    Cut\nCTV         2.0x           3.1x    Scale",
      successCriteria: [
        "Correctly separates platform ROAS from iROAS for every channel",
        "Recommends cutting, not scaling, branded search despite its high platform ROAS",
        "Justifies every scale/hold/cut call using the iROAS threshold rule, not the platform number",
      ],
      portfolioReady: true,
      stretch: "Recompute the calls assuming CTV's iROAS confidence interval is wide enough to include 1.5x, does the call change?",
    },
  ],

  "dashboards": [
    {
      id: "dashboard-vanity-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Vanity Wall: Tearing Down a Cluttered Executive Scorecard",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a mocked-up 14-tile executive dashboard, identify which tiles are vanity metrics, which lack a decision, and which are genuinely decision-driving, using the lesson's 'write the decision first' test.",
      companyId: "slack",
      scenario:
        "You're the marketing analyst at Slack. The VP of Marketing just forwarded you the team's 'Marketing Overview' dashboard and asked why nobody opens it before Monday meetings.",
      brief:
        "Apply the lesson's decision-sentence test to every tile, flag genuine vanity metrics, and note which tiles survive.",
      mode: "teardown",
      conceptsCovered: ["Tile sprawl", "Vanity metrics at the top", "No comparison anchor", "Step 1: Write the Decision First"],
      teardownItems: [
        {
          itemId: "teardown-1-marketing-overview",
          specimen:
            "Slack 'Marketing Overview' dashboard, 14 tiles on one page:\n1. Total Impressions (all channels, all-time)\n2. Total Page Views (30 days)\n3. Instagram Followers (all-time count)\n4. Email List Size\n5. Blended CAC (no comparison, no target shown)\n6. ROAS by channel (no time range labeled)\n7. Twitter/X Mentions\n8. App Store Downloads\n9. Pipeline Created This Month (no target shown)\n10. Total Ad Spend\n11. Website Sessions\n12. Average Session Duration\n13. NPS Score (last refreshed quarterly, no 'last updated' label)\n14. Brand Search Volume (no trendline)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Using the lesson's decision-sentence test ('If [metric] goes [above/below] [threshold], we will [specific action]') and the Common Mistakes list, mark each tile Cut, Fix, or Keep, and explain why.",
          answerKey: [
            {
              defect: "Tile 1 (Total Impressions, all-time) is a pure vanity metric with no decision attached",
              severity: "critical",
              whyItMatters:
                "Nobody can finish 'if impressions go above X we will do Y' — it never triggers action, so it trains the exec to stop reading the dashboard.",
              lessonRef: "Common Mistakes That Kill Dashboards",
              owner: "you",
            },
            {
              defect: "Tile 3 (Instagram Followers) and Tile 7 (Twitter/X Mentions) are vanity metrics sitting at the top instead of below the fold",
              severity: "moderate",
              whyItMatters: "Vanity metrics crowding the top pushes CAC, ROAS, and pipeline further down, exactly the failure mode the lesson warns against.",
              lessonRef: "Vanity metrics at the top",
              owner: "you",
            },
            {
              defect: "Tile 5 (Blended CAC) and Tile 9 (Pipeline Created) show a raw number with no comparison to last period or target",
              severity: "critical",
              whyItMatters: "A number without a comparison anchor is meaningless. $67 CAC could be great or terrible with zero context.",
              lessonRef: "No comparison anchor / Add Context to Every Number",
              owner: "you",
            },
            {
              defect: "Tile 13 (NPS Score) refreshes quarterly with no 'last updated' timestamp shown",
              severity: "moderate",
              whyItMatters: "Stale data displayed without a warning destroys credibility; 67% of marketers lose confidence in analytics when this happens.",
              lessonRef: "Step 3: Connect Your Data Sources",
              owner: "developer",
            },
            {
              defect: "14 tiles on one page exceeds the 12-tile sprawl limit, with no linked detail page for secondary metrics",
              severity: "moderate",
              whyItMatters: "More than 12 charts on one page means nobody scans the whole thing.",
              lessonRef: "Tile sprawl",
              owner: "you",
            },
          ],
          distractors: [
            "Tile 6 (ROAS by channel) missing a labeled time range looks like a staleness problem, but it's a labeling gap, not a data-freshness defect.",
            "Tile 11 (Website Sessions) looks like a vanity metric, but it's legitimate supporting context for the funnel, not necessarily a tile to cut outright.",
            "Tile 8 (App Store Downloads) can look irrelevant for a B2B SaaS like Slack, but Slack does track self-serve app installs as a real acquisition-adjacent number depending on the quarter's goal.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "List and score every tile against the decision-sentence test",
            why: "Free, fast way to triage a dashboard before rebuilding it",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Reference the actual dashboard structure being torn down",
            why: "Free dashboard builder most marketers already use, matches the lesson's primary tool",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored teardown table of all 14 tiles marked Cut / Fix / Keep, with a written decision sentence for every tile that survives.",
      sampleOutput:
        "Duolingo, dashboard teardown (excerpt)\n\nCUT — Total App Store Reviews (all-time): no decision sentence possible\nFIX — Weekly Active Learners: add comparison vs. last week before keeping\nKEEP — Day-30 Retention Rate: 'If retention drops below 40%, we pause paid UA and prioritize the retention team's backlog.'",
      successCriteria: [
        "Correctly flags at least 4 of the 5 planted defects",
        "Distinguishes real defects from the 3 distractors",
        "Writes a valid decision sentence for at least 2 surviving tiles",
      ],
      portfolioReady: true,
      stretch: "Rebuild the surviving tiles into a proper 5-7 tile Executive Scorecard using Step 4's layout hierarchy.",
    },
    {
      id: "dashboard-two-tier-spec-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Two-Dashboard Split: Executive Scorecard and Operator Deep Dive Spec",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given Zendesk's list of 12 candidate metrics, sort each into the Executive Scorecard or Operator Deep Dive, then write the decision sentence for the 5-7 that make the cut.",
      companyId: "zendesk",
      scenario:
        "You're the growth marketer at Zendesk. Leadership wants one exec-level dashboard and the paid media team wants a separate operator dashboard, and right now everything lives in one 20-tile mess.",
      brief:
        "Split 12 candidate metrics into the two dashboards the lesson defines, cut anything without a decision sentence, and spec the final layout.",
      mode: "build",
      conceptsCovered: ["The Two Types of Dashboards You Need", "Step 1: Write the Decision First", "Step 4: Design for 5 Seconds"],
      steps: [
        {
          stepId: "step-1-sort-by-audience",
          concept: "The Two Types of Dashboards You Need",
          lessonAnchor: "the-two-types-of-dashboards-you-need",
          theoryRecap:
            "The lesson splits every marketing dashboard into two audiences: an Executive Scorecard (CMO/VP, daily, no filters) and an Operator Deep Dive (campaign managers, filterable, hourly for paid).",
          question:
            "Given Zendesk's 12 candidate metrics (blended CAC, ROAS by channel, CPL vs. target, pipeline created, top/bottom 10 creatives, spend pacing by campaign, budget spent vs. allocated, conversion rate by funnel stage, brand search volume, NPS, support-ticket-sourced signups, MQL-to-SQL rate), which 5 belong on the Executive Scorecard?",
          toolName: "Google Sheets",
          where: "A two-column sheet, one column per dashboard, one row per metric.",
          procedure: [
            "List all 12 metrics in column A",
            "Mark each as Exec, Operator, or Both",
            "Move any metric with no clear owner to a 'cut' list",
          ],
          outputSample:
            "EXEC (5): Blended CAC, ROAS by channel, Pipeline created vs. target, Budget spent vs. allocated, MQL-to-SQL rate\nOPERATOR (6): CPL vs. target, Top/bottom 10 creatives, Spend pacing by campaign, Conversion rate by funnel stage, ROAS by channel (filtered), Support-ticket-sourced signups\nCUT (1): Brand search volume (no clear decision owner this quarter)",
          healthy: "Exec dashboard stays under 7 tiles with no filters needed; Operator dashboard is fully filterable by channel, date, and creative.",
          unhealthy: "The same 12-tile mess gets duplicated onto two pages instead of actually being split by audience and decision.",
          interpret:
            "A metric belongs on exactly one dashboard by default; the same number appearing on both (like ROAS) is fine only when both audiences act on it differently.",
          soWhat: [
            { symptom: "A metric doesn't clearly belong to either audience", action: "Cut it or find its owner before adding it to either dashboard", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-decision-sentence",
          concept: "Step 1: Write the Decision First",
          lessonAnchor: "step-1-write-the-decision-first",
          theoryRecap:
            "Every chart needs a finished sentence: 'If [metric] goes [above/below] [threshold], we will [specific action].' If you can't finish it, cut the chart.",
          question: "Write the decision sentence for the 5 Exec Scorecard metrics from Step 1. Which one can't you finish?",
          toolName: "Google Sheets",
          where: "Add a 'Decision Sentence' column next to the Exec metric list.",
          procedure: [
            "Write one decision sentence per Exec metric",
            "Flag any metric where the sentence trails off into 'we will look into it'",
            "Cut or rewrite that metric before finalizing the spec",
          ],
          outputSample:
            "Blended CAC: 'If CAC exceeds $110, we pause broad-audience campaigns and shift budget to retargeting.'\nMQL-to-SQL rate: 'If MQL-to-SQL drops below 20%, marketing and sales run a joint lead-quality review.'\nPipeline created vs. target: (no finished sentence, cut from v1, revisit after Q1)",
          healthy: "Every surviving metric has a specific, finishable action attached, not a vague 'we'll investigate.'",
          unhealthy: "A metric ships on the final dashboard with a decision sentence that just says 'we will look into it.'",
          interpret: "A metric that can't finish the sentence isn't ready for the dashboard yet, even if it's directionally useful.",
          soWhat: [
            { symptom: "A KPI can't get a finished decision sentence", action: "Cut it from v1 and revisit once there's a real threshold to act on", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Sort metrics and draft decision sentences",
            why: "Free, fast for a spec document",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Reference the layout hierarchy when finalizing the spec",
            why: "Free tool the lesson recommends for actually building the dashboard next",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A two-dashboard spec: Exec Scorecard and Operator Deep Dive metric lists, each with a written decision sentence, ready to hand to whoever builds the actual Looker Studio report.",
      sampleOutput:
        "MapmyIndia, dashboard spec (excerpt)\n\nEXEC SCORECARD\n  Blended CAC — 'If CAC exceeds ₹1,800, pause low-intent display campaigns.'\n  Enterprise pipeline created — 'If pipeline falls 15% behind target, reallocate budget to the enterprise SDR-supported channel.'\n\nOPERATOR DEEP DIVE\n  CPL by campaign — filterable by state and product line",
      successCriteria: [
        "Sorts all 12 metrics into Exec, Operator, or Cut with a stated reason",
        "Writes a complete decision sentence for at least 4 of 5 Exec metrics",
        "Final Exec list stays within the lesson's 5-7 metric limit",
      ],
      portfolioReady: true,
      stretch: "Mock up the actual tile layout using Step 4's hierarchy (scorecards, trendlines, breakdowns, tables).",
    },
  ],
  "kpis-for-marketers": [
    {
      id: "kpi-vanity-audit",
      tier: "mini",
      archetype: "audit",
      title: "Vanity or KPI? Auditing MapmyIndia's Metrics List",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style 12-metric list MapmyIndia's marketing team tracks, apply the lesson's vanity-metric test to sort each into KPI or vanity metric, and name the KPI it should be replaced with.",
      companyId: "mapmyindia",
      scenario:
        "You're a marketing analyst at MapmyIndia. The quarterly report lists 12 numbers and your VP asks which ones actually predict revenue.",
      brief: "Apply the '10x' vanity test to each metric, and use the lesson's vanity-to-KPI replacement logic where it applies.",
      mode: "diagnostic",
      conceptsCovered: ["What Is a KPI?", "The Vanity Metric Trap"],
      steps: [
        {
          stepId: "step-1-metric-vs-kpi",
          concept: "What Is a KPI?",
          lessonAnchor: "what-is-a-kpi",
          theoryRecap:
            "A metric answers 'what happened?' A KPI answers 'are we on track to hit our goal?' Not every number on a report is automatically a KPI.",
          question:
            "MapmyIndia's Q3 report lists: app downloads, total map views, enterprise API calls, navigation sessions, ad impressions, brand search volume, enterprise contract value closed, churn rate, NPS, page views, social followers, and CAC. Which of these directly ties to a stated business goal?",
          toolName: "Google Sheets",
          where: "A 3-column sheet: metric, tied business goal (or 'none stated'), KPI or metric.",
          procedure: [
            "List all 12 metrics",
            "For each, write the specific business goal it ties to, or 'none stated'",
            "Mark 'KPI' only if a real goal is written down",
          ],
          outputSample:
            "Enterprise contract value closed -> Goal: hit ₹40Cr enterprise ARR this year -> KPI\nApp downloads -> Goal: none stated -> Metric\nCAC -> Goal: keep blended CAC under ₹1,800 -> KPI\nSocial followers -> Goal: none stated -> Metric",
          healthy: "Every KPI on the final list traces to one written business goal.",
          unhealthy: "A number gets called a KPI just because it's easy to pull from a dashboard.",
          interpret: "If you can't write the goal a number ties to, it isn't a KPI yet, no matter how important it feels.",
          soWhat: [
            { symptom: "A metric has no stated goal next to it", action: "Either write the goal it should tie to, or move it out of the KPI list", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-vanity-test",
          concept: "The Vanity Metric Trap",
          lessonAnchor: "the-vanity-metric-trap",
          theoryRecap:
            "Test: 'If this number went up 10x tomorrow, would it guarantee the business grew?' If the answer is 'not necessarily,' it's a vanity metric, replace it with the metric one step closer to revenue.",
          question:
            "Apply the 10x test to app downloads, total map views, ad impressions, page views, and social followers. Which replacement KPI should sit next to each on the final report?",
          toolName: "Google Sheets",
          where: "Add a 'Replacement KPI' column for anything that fails the 10x test.",
          procedure: [
            "Run the 10x test on each vanity candidate",
            "For each fail, name the metric one step closer to revenue",
            "Cross-check against the lesson's vanity-to-KPI table",
          ],
          outputSample:
            "App downloads (10x -> not necessarily) -> Replace with: Day-30 retention rate\nAd impressions (10x -> not necessarily) -> Replace with: ROAS or CPA\nTotal map views (10x -> not necessarily) -> Replace with: Enterprise API calls converted to paid contracts",
          healthy: "Every vanity metric on the report gets paired with the KPI it should be replaced by, not just deleted with nothing in its place.",
          unhealthy: "Vanity metrics stay on the report because 'the VP likes seeing that number.'",
          interpret: "A vanity metric isn't wrong to look at, it's wrong to report as if it proves growth.",
          soWhat: [
            { symptom: "A metric fails the 10x test", action: "Pair it with its revenue-adjacent replacement before the report goes out", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score every metric against the KPI and vanity tests",
            why: "Free, sufficient for a 12-row audit",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Pull the real numbers behind each metric if verification is needed",
            why: "Free source of truth for most of the web-side metrics on the list",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A scored 12-metric audit table marking each KPI vs. vanity metric, with a named replacement KPI for every vanity metric.",
      sampleOutput:
        "Slack, KPI audit (excerpt)\n\nKPI: Paid seat conversion rate -> Goal: grow paid seats 20% QoQ\nVANITY -> REPLACE: Total workspace signups -> Day-30 active-workspace rate",
      successCriteria: [
        "Correctly separates all 12 metrics into KPI vs. vanity",
        "Names a valid replacement KPI for each vanity metric",
        "Ties every KPI to a specific stated goal",
      ],
      portfolioReady: true,
      stretch: "Narrow the final KPI list down to 3-5 per the lesson's 'How Many KPIs Should You Track' framework.",
    },
    {
      id: "kpi-tree-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a KPI Tree From a Single Business Goal",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Snowflake's stated Q3 business goal, build a full KPI tree: one North Star KPI, 2-3 leading indicators, and one health metric, each tagged to its funnel stage and SMART-tested.",
      companyId: "snowflake",
      scenario:
        "You're a growth marketer at Snowflake. Leadership just set a Q3 goal: 'reduce CAC for the self-serve data-cloud tier from $340 to $250.' You need a KPI tree the whole team can work from.",
      brief:
        "Use the lesson's North Star / Leading Indicators / Health Metric framework and funnel-stage categories to build a complete, SMART-tested KPI tree.",
      mode: "build",
      conceptsCovered: ["How Many KPIs Should You Track?", "The Four KPI Categories Marketers Use", "How to Set a Good KPI"],
      steps: [
        {
          stepId: "step-1-north-star",
          concept: "How Many KPIs Should You Track?",
          lessonAnchor: "how-many-kpis-should-you-track",
          theoryRecap:
            "A KPI tree has 1 North Star KPI (defines success), 2-3 Leading Indicators (predict the North Star early), and 1 Health Metric (a guardrail).",
          question:
            "Given Snowflake's goal (cut self-serve CAC from $340 to $250), what's the single North Star KPI, and what 2-3 leading indicators would move first if CAC is about to drop?",
          toolName: "Google Sheets",
          where: "A tree diagram or indented list: North Star at top, leading indicators below it, health metric off to the side.",
          procedure: [
            "Write the North Star KPI and its numeric target",
            "List 2-3 leading indicators that would move before CAC does",
            "Add 1 health metric that guards against a bad optimization",
          ],
          outputSample:
            "NORTH STAR: Self-serve CAC ($340 -> $250 by Sept 30)\nLEADING INDICATORS: Organic conversion rate (trial-to-paid), Free-tier-to-paid upgrade rate, Cost per qualified trial signup\nHEALTH METRIC: 30-day churn rate on new self-serve accounts (guards against buying cheap, low-quality signups)",
          healthy:
            "Every leading indicator has a believable causal path to the North Star; the health metric would catch a CAC 'win' that's actually just acquiring worse customers.",
          unhealthy: "The tree lists 6 leading indicators with no clear priority, or has no health metric at all.",
          interpret: "A KPI tree with no health metric can hit its North Star by quietly damaging something else, like customer quality.",
          soWhat: [
            { symptom: "CAC is improving but nobody is watching a guardrail metric", action: "Add a health metric before reporting the CAC win as a success", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-funnel-tagging",
          concept: "The Four KPI Categories Marketers Use",
          lessonAnchor: "the-four-kpi-categories-marketers-use",
          theoryRecap:
            "Every KPI maps to a funnel stage: awareness, consideration, conversion, or retention. Knowing the stage tells you which lever to pull.",
          question: "Tag each KPI in your tree from Step 1 with its funnel stage. Does the tree cover more than one stage, or is it all bunched in conversion?",
          toolName: "Google Sheets",
          where: "Add a 'Funnel Stage' column next to each KPI from Step 1.",
          procedure: [
            "Tag each KPI with its funnel stage",
            "Check whether awareness or consideration stages are missing entirely",
            "Note which stage has no KPI, since that's a blind spot",
          ],
          outputSample:
            "Self-serve CAC -> Conversion\nOrganic conversion rate -> Conversion\nFree-tier-to-paid upgrade rate -> Conversion\nCost per qualified trial signup -> Consideration\n30-day churn rate -> Retention\nBLIND SPOT: No Awareness-stage KPI in this tree",
          healthy: "The tree at least acknowledges which funnel stages it does and doesn't cover, even if this quarter's goal is conversion-focused.",
          unhealthy: "Nobody notices the tree only covers 1 of 4 funnel stages, so an upstream awareness problem goes undiagnosed for months.",
          interpret: "A KPI tree built entirely around one funnel stage will hit a ceiling it can't explain once the upstream stage becomes the real constraint.",
          soWhat: [
            { symptom: "A funnel stage has zero KPIs on the tree", action: "Flag it as a known blind spot in the KPI doc, even if you don't build a chart for it yet", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-smart-check",
          concept: "How to Set a Good KPI",
          lessonAnchor: "how-to-set-a-good-kpi",
          theoryRecap:
            "A KPI must be Specific, Measurable, Achievable, Relevant, and Time-bound (SMART). A KPI that fails any of the five tests is a wish, not a KPI.",
          question: "Run the SMART test on your North Star KPI and each leading indicator from Step 1. Which one fails, and what's missing?",
          toolName: "Google Sheets",
          where: "Add 5 checkbox columns (S/M/A/R/T) next to each KPI.",
          procedure: [
            "Check each KPI against all 5 SMART letters",
            "Flag any KPI missing a deadline or a number",
            "Rewrite the failing KPI so it passes all 5",
          ],
          outputSample:
            "Cost per qualified trial signup: S-yes M-yes A-yes R-yes T-NO (no deadline) -> Rewrite: 'Cut cost per qualified trial signup to $40 by Sept 30.'",
          healthy: "Every KPI on the final tree has a number and a deadline attached, not just a direction ('improve X').",
          unhealthy: "A KPI ships as 'increase qualified trials' with no number or date, so nobody can say whether it succeeded.",
          interpret: "The Time-bound and Measurable letters are the two most commonly skipped, and skipping either turns a KPI back into a wish.",
          soWhat: [
            { symptom: "A KPI has no deadline", action: "Add the specific date before the tree goes to leadership", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build and score the KPI tree",
            why: "Free, sufficient for a tree of 6-8 KPIs",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Turn the finished tree into a live-tracked dashboard afterward",
            why: "Free tool for the next step once the KPI tree is defined",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete KPI tree (1 North Star, 2-3 leading indicators, 1 health metric) with every KPI tagged by funnel stage and SMART-tested.",
      sampleOutput:
        "Zendesk, KPI tree (excerpt)\n\nNORTH STAR: Support-to-upsell conversion rate (8% -> 12% by Q4)\nLEADING INDICATORS: CSAT on upsell-eligible tickets, Time-to-first-response on enterprise tier\nHEALTH METRIC: Ticket reopen rate (guards against rushing tickets to hit response-time targets)",
      successCriteria: [
        "Tree has exactly 1 North Star, 2-3 leading indicators, and 1 health metric",
        "Every KPI is tagged with a funnel stage",
        "Every KPI passes all 5 SMART checks after revision",
      ],
      portfolioReady: true,
      stretch: "Turn the finished KPI tree into an actual Looker Studio dashboard spec using the Dashboards lesson's Step 3/Step 4 patterns.",
    },
  ],

  "server-side-tracking": [
    {
      id: "server-side-tracking-client-vs-server-audit",
      tier: "core",
      archetype: "audit",
      title: "The Missing 18%: Auditing a Client vs Server Event Gap",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a one-week export comparing GA4 (client-side) purchase counts to Google Ads-reported conversions, segmented by browser, diagnose where the tracking gap is coming from and which fix to prioritize.",
      companyId: "chewy",
      scenario:
        "You're the analytics lead at Chewy. The paid-search team flags that Google Ads reports 18% more purchases this week than GA4 shows, and wants to know if their campaigns are actually working or if the algorithm is optimizing on bad data.",
      brief:
        "Segment the gap by browser before you touch anything, and connect the pattern to a specific cause the lesson names (ITP, ad blockers, or both), not a vague 'tracking is broken.'",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing a client-side tracking gap by browser segment",
        "Event deduplication with a shared event_id",
      ],
      steps: [
        {
          stepId: "step-1-diagnose-gap",
          concept: "Diagnosing a client-side tracking gap by browser segment",
          lessonAnchor: "why-it-matters-the-data-problem",
          theoryRecap:
            "The lesson names three forces killing browser-side tracking: Safari's ITP caps JS-set cookies at 7 days, ad blockers strip tracking scripts outright, and iOS ATT suppresses in-app signals. Each leaves a different fingerprint in a browser breakdown.",
          question:
            "The export shows Safari accounts for 61% of the missing purchases despite being only 19% of sessions. Chrome and Firefox are roughly in line with their session share. What's actually happening here?",
          toolName: "Google Sheets",
          where: "Import weekly-event-export.csv, pivot purchases by browser against Google Ads-reported conversions for the same browser.",
          procedure: [
            "Import weekly-event-export.csv and freeze the header row",
            "Build a pivot table: browser (rows) vs. GA4 purchases and Ads-reported purchases (columns)",
            "Add a 'gap %' column: (Ads reported - GA4) / Ads reported",
            "Sort by gap % descending to find the worst-offending browser segment",
          ],
          outputSample:
            "Browser    Sessions%   GA4 Purchases   Ads-Reported   Gap %\nSafari     19%         142              365            61%\nChrome     58%         890              945             6%\nFirefox    12%         210              228             8%\nEdge       11%         180              190             5%",
          healthy:
            "The gap concentrates almost entirely in Safari, a clean signature of ITP cookie expiry, and the fix is a first-party subdomain, not a full sGTM rebuild for every platform at once.",
          unhealthy:
            "The gap is spread evenly across all browsers, which points to a missing or misconfigured base tag, not a privacy-rule problem, and no amount of server-side migration fixes a broken pixel.",
          interpret:
            "A gap concentrated in one browser tells you which mechanism is responsible; a gap spread evenly tells you the problem is upstream of privacy rules entirely.",
          soWhat: [
            {
              symptom: "Safari carries 3x its session share of the missing purchases",
              action: "Prioritize the first-party subdomain + server-set cookies fix before adding server tags for every ad platform",
              effort: "dev ticket",
            },
            {
              symptom: "The gap is evenly spread across all browsers",
              action: "Audit the base GA4 tag firing conditions before assuming a privacy-rule cause",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-dedup-check",
          concept: "Event deduplication with a shared event_id",
          lessonAnchor: "the-setup-step-by-step",
          theoryRecap:
            "The lesson calls event_id deduplication the step most teams get wrong: send a matching event_id from both the browser pixel and the server tag, or every purchase gets counted twice.",
          question:
            "A second export shows Meta Ads Manager reporting 512 purchases while Shopify's order log shows 260 real orders for the same week. What single missing field explains a number almost exactly double?",
          toolName: "Google Sheets",
          where: "Compare the event_id column across the browser-pixel export and the server-tag export.",
          procedure: [
            "Filter the browser-pixel export for event_id values",
            "Filter the server-tag export for event_id values on the same date range",
            "Check whether any event_id appears in only one of the two exports (a shared ID means dedup is working)",
            "Count events with no event_id at all, these can never be deduplicated",
          ],
          outputSample:
            "event_id present in BOTH exports: 0 of 260\nevent_id present in browser export only: 260\nevent_id present in server export only: 252\nTotal reported to Meta: 512 (260 + 252)\nActual Shopify orders: 260",
          healthy:
            "Every real purchase has one shared event_id appearing in both the browser and server payload, so Meta discards the duplicate and reports 260, matching Shopify.",
          unhealthy:
            "Zero event_ids match between browser and server payloads, meaning Meta treats every purchase as two separate events, exactly the 2x inflation the lesson warns about.",
          interpret:
            "A reported number that's almost exactly double the real order count is the signature of missing deduplication, not fraud or a tracking gain.",
          soWhat: [
            {
              symptom: "Ad-platform reported conversions run ~2x actual order volume",
              action: "Add a shared event_id (e.g. order ID) to both the browser pixel and server tag payloads for the same event",
              effort: "dev ticket",
            },
          ],
          owner: "developer",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Pivot the browser-segmented export and calculate gap percentages",
            why: "Free, no account friction, sufficient for a one-week diagnostic pivot",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Segment",
            role: "Centralize event collection with built-in deduplication once volume outgrows manual event_id checks",
            why: "Handles event_id matching and multi-destination forwarding at scale",
            required: false,
            fallback: "Manual event_id spot-checks in Google Sheets, as done in this project",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page diagnostic memo naming which browser segment drives the majority of the gap, whether deduplication is working, and the single highest-priority fix.",
      sampleOutput:
        "Robinhood, Paid Search Tracking Diagnostic (excerpt)\n\nFINDING 1: Safari carries 58% of the missing conversions on 19% of sessions, ITP cookie expiry.\nFINDING 2: event_id is present in both browser and server payloads for 100% of sampled purchases, deduplication is healthy.\nRECOMMENDATION: Ship the first-party subdomain fix this sprint; no action needed on deduplication.",
      successCriteria: [
        "Correctly isolates which browser segment carries the disproportionate share of the gap",
        "Distinguishes an ITP/ad-blocker signature from a broken-base-tag signature",
        "Correctly diagnoses whether a 2x reported-vs-actual pattern is a deduplication failure",
      ],
      portfolioReady: true,
    },
    {
      id: "server-side-tracking-sgtm-migration-plan",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Blueprint Before Build: Planning a Server-Side GTM Migration",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Nubank's current client-side-only GTM setup and a list of ad platforms in use, produce a one-page migration blueprint (subdomain, tag priority order, deduplication scheme) before any engineering work starts.",
      companyId: "nubank",
      scenario:
        "Nubank's growth team wants to move to server-side tracking after Google Ads reported 25% more sign-ups than GA4 last quarter. Engineering has one sprint allocated and needs a spec, not a vague request to 'set up server-side tracking.'",
      brief:
        "Sequence the plan the way the lesson does: subdomain first, then server tags in priority order, then the deduplication scheme, since building tags before the subdomain exists wastes the sprint.",
      mode: "build",
      conceptsCovered: [
        "First-party subdomain setup",
        "Sequencing server tags by ad-spend priority",
      ],
      steps: [
        {
          stepId: "step-1-subdomain-choice",
          concept: "First-party subdomain setup",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson is explicit: a tagging server must live on a first-party subdomain like metrics.yourbrand.com. A vendor domain like gtm.stape.io is still third-party to the browser and still gets blocked.",
          question:
            "Nubank's DevOps team proposes hosting the server at nubank-tags.stape.io to save setup time. Does this achieve the goal?",
          toolName: "Google Sheets",
          where: "Draft the migration spec document, one row per decision.",
          procedure: [
            "Open a new sheet titled 'sGTM Migration Blueprint'",
            "Row 1: propose the subdomain (e.g. metrics.nubank.com.br) and the CNAME target",
            "Row 2: note explicitly why a vendor-hosted domain (e.g. stape.io) fails the first-party requirement",
          ],
          outputSample:
            "Decision: Subdomain\nProposed: metrics.nubank.com.br -> CNAME -> [sGTM host]\nRejected option: nubank-tags.stape.io\nReason for rejection: still resolves as third-party to the browser, ad blockers and ITP treat it identically to the current setup",
          healthy:
            "The blueprint names a first-party subdomain on Nubank's own domain and explicitly rules out the vendor-domain shortcut with a reason.",
          unhealthy:
            "The blueprint accepts the vendor-hosted subdomain to save a week of DNS work, which ships a migration that doesn't actually bypass ad blockers.",
          interpret:
            "The subdomain choice is not a convenience decision, it is the one step that determines whether the whole migration achieves anything.",
          soWhat: [
            {
              symptom: "A vendor-hosted domain is proposed to save setup time",
              action: "Reject it in the spec and require a CNAME onto the company's own domain before engineering starts",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-tag-priority",
          concept: "Sequencing server tags by ad-spend priority",
          lessonAnchor: "the-setup-step-by-step",
          theoryRecap:
            "The lesson's Step 4 says to add server tags for every destination, but a one-sprint migration can't build all of them simultaneously; the setup work is real engineering time per platform.",
          question:
            "Nubank runs Google Ads (54% of paid budget), Meta (31%), and LinkedIn (15%). Engineering has time to build and validate 2 of the 3 server tags this sprint. Which 2 go first?",
          toolName: "Google Sheets",
          where: "Add a 'Tag Priority' row to the same blueprint sheet.",
          procedure: [
            "List each ad platform with its share of paid budget",
            "Sort descending by budget share",
            "Mark the top 2 as 'Sprint 1' and the remainder as 'Sprint 2'",
          ],
          outputSample:
            "Platform      Budget Share   Sprint\nGoogle Ads    54%            1\nMeta CAPI     31%            1\nLinkedIn CAPI 15%            2",
          healthy:
            "The two highest-budget platforms ship first, so the sprint's ROI is front-loaded onto the campaigns where the data gap costs the most money.",
          unhealthy:
            "Tags are built in whatever order engineering finds easiest, which might ship LinkedIn CAPI first while 85% of the budget still runs on unfixed tracking.",
          interpret:
            "When you can't build everything in one sprint, sequence by where the money is, not by implementation difficulty.",
          soWhat: [
            {
              symptom: "Engineering has capacity for 2 of 3 platform integrations this sprint",
              action: "Build server tags for the top 2 platforms by budget share first",
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
            role: "Draft and share the migration blueprint with engineering",
            why: "Free, fast, and every engineer can comment directly on the spec",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page sGTM migration blueprint: proposed subdomain and CNAME target, sprint-1 vs sprint-2 tag priority by budget share, and the event_id field to use for deduplication.",
      sampleOutput:
        "Coinbase, sGTM Migration Blueprint (excerpt)\n\nSubdomain: metrics.coinbase.com -> CNAME -> sGTM host\nSprint 1 tags: Google Ads (62% of budget), Meta CAPI (28% of budget)\nSprint 2 tags: TikTok CAPI (10% of budget)\nDeduplication field: transaction_id, shared between browser pixel and server tag",
      successCriteria: [
        "Rejects any vendor-hosted subdomain shortcut with a stated reason",
        "Sequences tag-building priority by ad-spend share, not by build convenience",
        "Names a concrete deduplication field for the chosen conversion event",
      ],
      portfolioReady: true,
    },
  ],
  "predictive-analytics": [
    {
      id: "predictive-analytics-churn-score-diagnostic",
      tier: "core",
      archetype: "forecast",
      title: "Trust But Verify: Validating a Churn Model Against Real Outcomes",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a 25-customer export with model-predicted churn-risk scores and their actual 30-day outcomes, calculate precision and recall to decide whether the model is trustworthy enough to trigger retention campaigns.",
      companyId: "klaviyo",
      scenario:
        "You support a Klaviyo customer, a mid-size DTC brand, that just deployed a churn-risk model. Before it's allowed to trigger automated retention offers, you have to confirm it's actually right, not just confident.",
      brief:
        "Don't just eyeball the scores, calculate precision and recall the way the lesson defines them, and make a go/no-go call on live deployment.",
      mode: "diagnostic",
      conceptsCovered: [
        "Validating predictions against real outcomes (precision and recall)",
        "Interpreting a propensity score threshold",
      ],
      steps: [
        {
          stepId: "step-1-precision-recall",
          concept: "Validating predictions against real outcomes (precision and recall)",
          lessonAnchor: "key-metrics-to-track",
          theoryRecap:
            "The lesson defines precision as: of everyone flagged high-risk, how many actually churned. Recall is: of everyone who actually churned, how many did the model catch in advance.",
          question:
            "The model flagged 12 of 25 customers as 'high churn risk.' Of those 12, 9 actually churned within 30 days. Of the 13 customers NOT flagged, 2 also churned. What are precision and recall?",
          toolName: "Google Sheets",
          where: "Import churn-model-export.csv and build a 2x2 confusion matrix.",
          procedure: [
            "Import churn-model-export.csv with columns: customer_id, predicted_risk, actual_outcome",
            "Build a 2x2 table: flagged/not-flagged vs. churned/retained",
            "Calculate precision = true positives / (true positives + false positives)",
            "Calculate recall = true positives / (true positives + false negatives)",
          ],
          outputSample:
            "                Actually Churned   Actually Retained\nFlagged High-Risk       9                    3\nNot Flagged             2                   11\n\nPrecision = 9/12 = 75%\nRecall = 9/11 = 82%",
          healthy:
            "Both precision and recall land above 70%, meaning most flagged customers really are at risk, and the model catches most real churners before they leave.",
          unhealthy:
            "Precision is high but recall is low (e.g. 90% precision, 30% recall), meaning the model is overly cautious and misses most customers who actually churn, wasting the campaign's real opportunity.",
          interpret:
            "A model can look accurate on paper while still failing the business goal; precision and recall catch that in a way a single 'accuracy' number hides.",
          soWhat: [
            {
              symptom: "Recall is below 50% even though precision looks strong",
              action: "Lower the risk-score threshold that triggers a 'high-risk' flag so more real churners get caught, then re-check precision",
              effort: "30 min",
            },
            {
              symptom: "Both precision and recall exceed 70%",
              action: "Approve the model for live retention-campaign triggers",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-threshold-tuning",
          concept: "Interpreting a propensity score threshold",
          lessonAnchor: "5-propensity-models",
          theoryRecap:
            "The lesson describes propensity models as scoring each customer 0-100 on likelihood of an action. The threshold you pick to call something 'high risk' is a business decision, not a fixed rule.",
          question:
            "The model outputs a 0-100 churn score for every customer, not just a flag. At what score cutoff should 'high risk' start, and what changes if you move it from 70 to 50?",
          toolName: "Google Sheets",
          where: "Sort the export by raw churn score (0-100) rather than the pre-set flag.",
          procedure: [
            "Sort all 25 customers by raw churn score, descending",
            "Test a threshold of 70: count how many actual churners fall above it",
            "Test a threshold of 50: count how many actual churners fall above it",
            "Compare how many total customers get flagged (and get a retention offer) at each threshold",
          ],
          outputSample:
            "Threshold 70: 8 customers flagged, 7 actual churners caught (recall 64%)\nThreshold 50: 15 customers flagged, 10 actual churners caught (recall 91%)\nRetention offer cost is fixed per customer flagged.",
          healthy:
            "The team picks the threshold deliberately, weighing the cost of more retention offers (lower threshold) against the cost of missed churners (higher threshold).",
          unhealthy:
            "The team keeps whatever default threshold the tool shipped with, without checking whether it fits the actual cost of a retention offer versus the cost of a lost customer.",
          interpret:
            "There is no universally 'correct' threshold, only the one that matches what a false negative costs you versus what a retention offer costs you.",
          soWhat: [
            {
              symptom: "Retention budget is limited but recall at the default threshold is low",
              action: "Raise the threshold to flag fewer, higher-confidence customers rather than spreading budget thin",
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
            role: "Build the confusion matrix and test threshold scenarios",
            why: "Free, transparent formulas that a non-technical stakeholder can audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Amplitude",
            role: "Track cohort-level retention outcomes automatically once the model is live",
            why: "Removes the need to manually export and match outcomes every cycle",
            required: false,
            fallback: "Manual 30-day outcome export in Google Sheets, as done in this project",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A validation memo stating the model's precision and recall at its current threshold, a recommended threshold change if warranted, and a go/no-go call on live deployment.",
      sampleOutput:
        "Robinhood, Churn Model Validation Memo (excerpt)\n\nCurrent threshold (70): Precision 78%, Recall 61%\nTested threshold (55): Precision 68%, Recall 85%\nRECOMMENDATION: Lower threshold to 55. Retention budget covers the extra flagged volume, and the 24-point recall gain catches significantly more real churners.",
      successCriteria: [
        "Correctly calculates precision and recall from the confusion matrix",
        "Tests at least one alternate threshold and compares the tradeoff",
        "States a clear go/no-go recommendation grounded in the numbers, not intuition",
      ],
      portfolioReady: true,
    },
    {
      id: "predictive-analytics-rule-based-vs-ga4-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Spreadsheet Rule vs. GA4 Model: A Churn-Scoring Head-to-Head",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given the same 20-customer behavior export, score churn risk two ways, a simple rule-based spreadsheet model and GA4's built-in churn probability logic, and decide which one a lean team should operate now.",
      companyId: "coinbase",
      scenario:
        "Coinbase's retention team won't get a data-science hire for two quarters. You have to decide whether a rule-based spreadsheet score is good enough to run retention campaigns on until GA4's predictive audiences fully activate.",
      brief:
        "Score both models against the same customers, compare both to actual outcomes, and make the call on which one ships this week.",
      mode: "diagnostic",
      conceptsCovered: [
        "Building a rule-based churn score without a data science team",
        "Using GA4's built-in predictive metrics as a free starting point",
      ],
      steps: [
        {
          stepId: "step-1-rule-based-score",
          concept: "Building a rule-based churn score without a data science team",
          lessonAnchor: "step-3-add-a-simple-churn-score-in-your-crm",
          theoryRecap:
            "The lesson's Step 3 describes a rule-based propensity model: take past churned customers, write down what they had in common (days since last purchase, low email opens, no logins), and build a simple scoring rule from those signals.",
          question:
            "Past churned Coinbase users share 3 traits: no login in 45+ days, 2+ failed payment attempts, and a support ticket in the last 30 days. How do you turn that into a score for the current 20-customer list?",
          toolName: "Google Sheets",
          where: "Import customer-behavior-export.csv and add a points column per rule.",
          procedure: [
            "Import customer-behavior-export.csv",
            "Add 1 point per matched trait: no login 45+ days, 2+ failed payments, recent support ticket",
            "Sum points per customer into a rule_score column (0-3)",
            "Flag anyone with rule_score >= 2 as high risk",
          ],
          outputSample:
            "customer_id  no_login_45d  failed_pay  support_ticket  rule_score  flag\nC-1042       1             1           0               2           HIGH\nC-1058       0             0           1               1           low\nC-1071       1             1           1               3           HIGH",
          healthy:
            "The rule-based score correctly separates most of the 20 customers into sensible risk tiers using only data already sitting in the CRM, no model training required.",
          unhealthy:
            "The rule flags almost everyone or almost no one as high risk, meaning the point thresholds need recalibrating against real churned-customer traits, not guessed.",
          interpret:
            "A rule-based score is a legitimate propensity model, it's just hand-built instead of machine-learned, and it works when the underlying traits are genuinely predictive.",
          soWhat: [
            {
              symptom: "The rule-based flag matches almost no one to 'high risk'",
              action: "Re-derive the point thresholds from a fresh sample of the last 50 actually-churned customers",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ga4-comparison",
          concept: "Using GA4's built-in predictive metrics as a free starting point",
          lessonAnchor: "step-1-use-what-you-already-have",
          theoryRecap:
            "The lesson notes GA4 activates free predictive metrics, including churn probability, automatically once a property has at least 1,000 returning users who triggered the conversion event in the past 28 days.",
          question:
            "GA4's churn-probability export for the same 20 customers flags 7 as high risk. The rule-based score flags 9. Comparing both to actual 30-day outcomes, which one should the team operate on this week?",
          toolName: "Google Sheets",
          where: "Add a ga4_flag column next to rule_score, then compare both against actual_churned.",
          procedure: [
            "Add GA4's churn-probability flag as a new column",
            "Add the actual 30-day outcome column",
            "Calculate how many true positives each method produces",
            "Compare against the effort each method requires to maintain",
          ],
          outputSample:
            "Method            Flagged   True Positives   Setup Effort\nRule-based score  9         6                Built today, in Sheets\nGA4 churn model   7         6                Already running, free, updates automatically",
          healthy:
            "Both methods catch a similar number of true churners, so the team picks GA4's version since it updates automatically with zero manual maintenance.",
          unhealthy:
            "The team keeps maintaining the rule-based spreadsheet manually every week even though GA4's free model performs equally well with no upkeep.",
          interpret:
            "When two methods perform comparably, the tiebreaker is which one keeps working without someone manually re-running it every week.",
          soWhat: [
            {
              symptom: "Both methods catch a similar share of real churners",
              action: "Retire the manual rule-based sheet and route retention triggers off GA4's predictive audience instead",
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
            role: "Build the rule-based score and compare both methods side by side",
            why: "Free, and the scoring logic stays visible and auditable to a non-technical retention team",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Source the free built-in churn-probability metric to compare against the rule-based score",
            why: "No cost, no setup beyond an active GA4 property with sufficient conversion volume",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A head-to-head scorecard comparing the rule-based score and GA4's churn probability against actual outcomes, with a recommendation on which to operate this quarter.",
      sampleOutput:
        "Chewy, Churn-Scoring Head-to-Head (excerpt)\n\nRule-based score: 8 flagged, 6 true positives, manual weekly upkeep\nGA4 churn model: 6 flagged, 6 true positives, automatic\nRECOMMENDATION: Adopt GA4's model. Equal accuracy, zero manual maintenance.",
      successCriteria: [
        "Builds a working rule-based score from named customer traits",
        "Correctly compares both methods' true-positive counts against actual outcomes",
        "Recommendation weighs maintenance effort, not just raw accuracy",
      ],
      portfolioReady: true,
    },
  ],

  "cohort-analysis": [
    {
      id: "cohort-analysis-retention-table-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Leaky Bucket or the Loyal Core? Auditing a Cohort Retention Table",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 4-cohort retention table (monthly signups, weeks 0-12), diagnose whether retention is improving, flat, or decaying, and catch the seasonality trap before calling it a win.",
      companyId: "nykaa",
      scenario:
        "You're the growth analyst at Nykaa reviewing Q1 cohort retention after a redesigned onboarding flow shipped in February.",
      brief:
        "Read the curve shape across four monthly cohorts, decide whether the February onboarding change actually worked, and flag any cohort whose result looks inflated by seasonality.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reading the curve shape, not just the number",
        "Comparing cohorts vertically",
        "Ignoring seasonality",
      ],
      steps: [
        {
          stepId: "step-1-curve-shape",
          concept: "Reading the curve shape, not just the number",
          lessonAnchor: "how-to-run-a-cohort-analysis-step-by-step",
          theoryRecap:
            "The lesson's Step 4 says a healthy retention curve drops steeply in the first few periods, then flattens. The flat tail is the loyal core; a curve that never stops falling is a leaky bucket.",
          question:
            "Four monthly cohorts are given below. Which one shows a genuine flat tail by week 12, and which is still falling with no sign of leveling off?",
          toolName: "Google Sheets",
          where: "Import retention-cohorts.csv, freeze the header row, and chart each cohort row as a line.",
          procedure: [
            "Import retention-cohorts.csv (4 rows: Nov, Dec, Jan, Feb cohorts; columns Week 0/1/4/8/12)",
            "Plot each row as a line series on one chart",
            "Compute the week 8-to-week 12 drop for each cohort (should shrink if the curve is flattening)",
            "Rank the four cohorts from most flattened to still-falling",
          ],
          outputSample:
            "Cohort   W0    W1    W4    W8    W12   W8→W12 drop\nNov      100%  44%   26%   19%   14%   -5.0 pts\nDec      100%  47%   29%   22%   18%   -4.0 pts\nJan      100%  50%   33%   28%   25%   -3.0 pts\nFeb      100%  56%   39%   34%   32%   -2.0 pts",
          healthy:
            "The Feb cohort's week 8-to-12 drop (-2.0 pts) is the smallest of the four, and shrinking with each newer cohort, that is a flattening curve.",
          unhealthy:
            "The Nov cohort is still losing 5 points between week 8 and 12, with no sign the drop is slowing, that is a leaky bucket, not a loyal core.",
          interpret:
            "A cohort's story is in its slope near the end of the table, not its raw week-12 number.",
          soWhat: [
            {
              symptom: "A cohort's week 8-to-12 drop is roughly the same size as its week 4-to-8 drop",
              action: "Treat that cohort as still decaying; wait for more weeks before calling it flat",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-vertical-compare-seasonality",
          concept: "Comparing cohorts vertically",
          lessonAnchor: "how-to-run-a-cohort-analysis-step-by-step",
          theoryRecap:
            "The lesson's Step 6 says the entire point of a cohort table is the vertical comparison: if a later cohort beats an earlier one at the same week number, the change that shipped between them worked.",
          question:
            "Onboarding changed in February. Comparing the Jan and Feb rows at week 4 (33% vs 39%), is that a real onboarding win, or could November-to-January's dip actually be a seasonality artifact worth checking first?",
          toolName: "Google Sheets",
          where: "Same retention-cohorts.csv, compare the Jan and Feb rows column by column.",
          procedure: [
            "Isolate the Jan and Feb rows",
            "Compare week 1, week 4, and week 8 values side by side",
            "Note that the Nov cohort overlaps India's festive shopping season, then flag it as a possible outlier rather than a baseline",
          ],
          outputSample:
            "Week 4 comparison\n  Jan (pre-onboarding): 33%\n  Feb (post-onboarding): 39%   (+6 pts)\n\nNote: Nov cohort signed up during Diwali sale traffic, its W1 (44%) may be inflated by one-time deal-seekers, not representative of a normal month.",
          healthy:
            "Feb beats Jan by 6 points at week 4, and Nov is flagged separately instead of being averaged into the baseline.",
          unhealthy:
            "Blending the Nov festive-season cohort into an 'average pre-onboarding retention' number and comparing Feb against that blend.",
          interpret:
            "Vertical, same-week comparisons are the whole point of the table; seasonality is the one confound that can fake a vertical win.",
          soWhat: [
            {
              symptom: "One cohort's signup window overlaps a major sale or holiday period",
              action: "Footnote that cohort as non-baseline instead of folding it into a trend line",
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
            role: "Chart and compare the four cohort rows",
            why: "Free, handles a 4x5 table and line charts with no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-paragraph verdict memo: is post-onboarding retention improving, which cohort proves it, and which cohort should be excluded as a seasonality outlier.",
      sampleOutput:
        "Lenskart, Q1 cohort verdict (excerpt)\n\nVERDICT: IMPROVING.\nFeb cohort (post-onboarding) beats Jan at every checkpoint (W4: +6pts, W8: +6pts). The Nov cohort is excluded from the baseline trend, its W1 spike coincides with the festive sale and does not reflect normal-month behavior.",
      successCriteria: [
        "Correctly identifies which cohort has the flattest tail using the W8-to-W12 drop, not the raw W12 number",
        "Makes a same-week vertical comparison between Jan and Feb",
        "Flags the Nov cohort's seasonality risk instead of folding it into the trend",
      ],
      portfolioReady: true,
    },
    {
      id: "cohort-analysis-flattening-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Will This Curve Flatten? Forecasting a Cohort's Long-Tail Retention",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given only weeks 0-4 of a new cohort's retention curve, forecast whether it will flatten by week 12 and give a numeric range, then check that forecast against the real outcome.",
      companyId: "allbirds",
      scenario:
        "You're the retention analyst at Allbirds forecasting whether a newly launched reorder-reminder cohort will settle into a healthy repeat-purchase pattern before the quarter closes.",
      brief:
        "Use the early-week decay rate to forecast a week-12 range, state it as a number, then compare it to the real result once it arrives.",
      mode: "diagnostic",
      conceptsCovered: [
        "The flat tail is the sign of product-market fit",
        "6-month survival curve",
      ],
      steps: [
        {
          stepId: "step-1-forecast-flattening",
          concept: "The flat tail is the sign of product-market fit",
          lessonAnchor: "quick-summary",
          theoryRecap:
            "The lesson's Quick Summary says the goal is a curve that drops fast early then flattens; that flat tail is the signal of product-market fit, not the raw retention number itself.",
          question:
            "Week 0 is 100%, week 1 is 52%, week 4 is 33%. The drop is decelerating (48pts, then 19pts over 3 weeks). Forecast a week-12 range using that deceleration pattern.",
          toolName: "Google Sheets",
          where: "Enter the three known points, compute period-over-period drop, and extrapolate the decay rate forward.",
          procedure: [
            "Enter W0=100%, W1=52%, W4=33% in a sheet",
            "Compute the drop rate per week for W0-W1 (48 pts/wk) and W1-W4 (6.3 pts/wk average)",
            "Extrapolate a decelerating drop rate out to week 12, producing a forecast range rather than a single number",
          ],
          outputSample:
            "Drop rate: W0-1 = 48 pts/wk, W1-4 = 6.3 pts/wk avg (decelerating)\nForecast W12 range: 22%-27%, assuming the deceleration trend continues",
          healthy:
            "The forecast is stated as a range (22-27%), not a false-precision single number, because only 2 data points inform the slope.",
          unhealthy: "Linearly extrapolating the W0-W1 drop rate (48 pts/wk) forward, which would predict negative retention by week 3.",
          interpret: "A forecast from an early, steep decay period must use the decelerating segment, not the initial cliff, or it wildly overstates future churn.",
          soWhat: [
            {
              symptom: "Only 2-3 weeks of cohort data exist and a stakeholder wants a week-12 number now",
              action: "Give a range built from the decelerating segment, state the assumption, and commit to revisiting at week 8",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-verify-survival",
          concept: "6-month survival curve",
          lessonAnchor: "metrics-worth-tracking-in-your-cohort-table",
          theoryRecap:
            "The lesson lists the 6-month survival curve as the clearest single metric for product-market fit: the cohort percentage still active well after the initial drop-off.",
          question:
            "Week 12 has now arrived and the real value is 24%, inside your forecast range. Does this cohort's shape support a stronger or weaker product-market-fit read than last quarter's cohort, which flattened at 19%?",
          toolName: "Google Sheets",
          where: "Add the real W12 value to the sheet and compare against the prior quarter's flattened value.",
          procedure: [
            "Log the real W12 outcome (24%) next to the forecast range (22-27%)",
            "Compare 24% against last quarter's flattened W12 value (19%)",
            "Conclude whether the reorder-reminder cohort shows a stronger long-tail than the prior baseline",
          ],
          outputSample: "Forecast range: 22-27%   Actual W12: 24%  (within range)\nPrior quarter flattened at: 19%\nDelta: +5 pts vs prior baseline",
          healthy: "The actual result lands inside the forecast range, and it beats the prior quarter's flattened value by 5 points.",
          unhealthy: "Treating the 24% figure as meaningful without a prior-quarter baseline to compare it against.",
          interpret: "A single survival number means nothing alone; it only means something next to a forecast and a prior cohort.",
          soWhat: [
            {
              symptom: "A new cohort's flattened value has no baseline to compare against",
              action: "Pull the equivalent flattened value from the prior comparable cohort before presenting the number",
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
            role: "Compute decay rate and extrapolate the forecast",
            why: "Free, sufficient for a 5-point time series and simple extrapolation",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A forecast memo stating the week-12 range with its assumption, plus a post-hoc accuracy check once the real value lands.",
      sampleOutput:
        "Casper Sleep, W12 forecast vs actual (excerpt)\n\nForecast (from W0-W4 deceleration): 18-23%\nActual W12: 21%  (within range)\nRead: reorder-cohort curve confirms early product-market fit; carry this decay model into next quarter's forecast.",
      successCriteria: [
        "States the forecast as a range built from the decelerating segment, not a linear extrapolation of the steepest early drop",
        "Compares the actual week-12 outcome against both the forecast range and a prior baseline cohort",
      ],
      portfolioReady: true,
    },
  ],
  "attribution-models": [
    {
      id: "attribution-models-channel-scale-or-kill-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Scale or Kill? Running Last-Click Against Linear on the Same Channel Table",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real 6-channel conversion-credit table computed two ways (last-click and linear), apply the lesson's 25%-delta rule to decide which channels are discovery engines versus closers.",
      companyId: "warby-parker",
      scenario:
        "You're the paid media analyst at Warby Parker deciding Q3 budget across six channels using last quarter's multi-model attribution export.",
      brief:
        "Compare last-click and linear credit per channel, flag any channel with more than a 25-point delta between the two, and recommend scale, hold, or kill for each.",
      mode: "diagnostic",
      conceptsCovered: [
        "Run two models in parallel and look at the delta",
        "Last-touch (last-click)",
        "Linear",
      ],
      steps: [
        {
          stepId: "step-1-delta-check",
          concept: "Run two models in parallel and look at the delta",
          lessonAnchor: "how-it-works-the-five-models-and-what-each-lies-about",
          theoryRecap:
            "The lesson's playbook says: run two models in parallel and look at the delta. If linear and last-click disagree by more than 25 percent on a channel, that channel is either a discovery engine or a closer, treat it differently.",
          question:
            "Six channels are listed below with their last-click and linear credit share. Which channels cross the 25-point delta threshold, and in which direction?",
          toolName: "Google Sheets",
          where: "Import channel-attribution-export.csv, add a delta column (last-click minus linear).",
          procedure: [
            "Import channel-attribution-export.csv (6 rows: channel, last-click %, linear %)",
            "Add a delta column = last-click % minus linear %",
            "Sort by absolute delta, descending",
            "Flag any row where |delta| > 25 points",
          ],
          outputSample:
            "Channel          Last-click  Linear  Delta\nRetargeting          34%       9%    +25 pts (flag)\nBranded Search        22%      11%    +11 pts\nDisplay (prospecting)  4%      18%    -14 pts\nOrganic Social         8%      16%     -8 pts\nEmail                 19%      14%     +5 pts\nAffiliate             13%      32%    -19 pts",
          healthy:
            "Retargeting is correctly flagged: it closes deals at 34% last-click but only creates 9% of linear-weighted demand, that is a closer, not a discovery channel.",
          unhealthy:
            "Reading Retargeting's 34% last-click share as proof it should get more prospecting budget, when the linear number shows it is intercepting demand created elsewhere.",
          interpret:
            "A channel that scores high on last-click and low on linear is a closer; scale it in the final-touch position, not as a top-of-funnel driver.",
          soWhat: [
            {
              symptom: "A channel's last-click share is used alone to justify a prospecting budget increase",
              action: "Check its linear share first; a wide positive delta means it is closing, not creating, demand",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-linear-check",
          concept: "Linear",
          lessonAnchor: "how-it-works-the-five-models-and-what-each-lies-about",
          theoryRecap:
            "The lesson says linear gives equal credit to every touch, and lies about importance, a throwaway display impression gets the same weight as a 20-minute webinar, honest only when touches really are interchangeable.",
          question:
            "Affiliate scores 32% under linear but only 13% under last-click. Before recommending Affiliate get more budget, what does the lesson say to check about whether its touches are actually interchangeable with the others?",
          toolName: "Google Sheets",
          where: "Same channel-attribution-export.csv, cross-reference Affiliate's touch count per path.",
          procedure: [
            "Isolate the Affiliate row and its raw touch count across conversion paths",
            "Check whether Affiliate touches cluster near the start of paths (discovery) or are spread evenly",
            "Note that linear alone cannot distinguish 'many small assist touches' from 'one genuinely important touch counted many times'",
          ],
          outputSample:
            "Affiliate: 32% linear credit, appears in 61% of converting paths, average position: touch 1 of 4 (early)\nInterpretation: high touch frequency early in the path, likely real discovery value, not an artifact",
          healthy:
            "Affiliate's high linear score is corroborated by it appearing early and frequently across paths, a genuine discovery signal worth the budget recommendation.",
          unhealthy:
            "Accepting Affiliate's 32% linear number at face value without checking path position, when linear treats every touch as equally important by construction.",
          interpret:
            "Linear's number is only trustworthy once you've confirmed the touches it's crediting are actually similar in importance to each other.",
          soWhat: [
            {
              symptom: "A channel scores unexpectedly high under linear attribution",
              action: "Check its typical path position before trusting the number for a budget call",
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
            role: "Compute the delta column and sort the channel table",
            why: "Free, handles a 6-row comparison with no setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page budget recommendation memo: scale, hold, or kill per channel, with each call justified by its delta and path position.",
      sampleOutput:
        "Lenskart, Q3 channel call (excerpt)\n\nRetargeting: HOLD as closer, do not fund as a prospecting channel (delta +25pts)\nAffiliate: SCALE, confirmed early-path discovery role (32% linear, touch 1 of 4 avg)\nDisplay: SCALE cautiously, low last-click but real linear assist role (delta -14pts)",
      successCriteria: [
        "Correctly flags every channel with a delta greater than 25 points",
        "Distinguishes a closer (high last-click, low linear) from a discovery channel (low last-click, high linear)",
        "Checks Affiliate's path position before trusting its linear score",
      ],
      portfolioReady: true,
    },
    {
      id: "attribution-models-crm-closed-won-audit",
      tier: "core",
      archetype: "audit",
      title: "Auditing a Funnel Report That Never Touched the CRM",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a marketing-sourced pipeline report built entirely from ad-platform last-click data with no CRM closed-won join, audit it against the lesson's common-mistakes checklist and rebuild a corrected top-line number.",
      companyId: "casper-sleep",
      scenario:
        "You're the marketing ops analyst at Casper Sleep reviewing a channel performance report the paid team is about to present to the CFO, built entirely from platform-reported last-click conversions.",
      brief:
        "Find where the report violates the lesson's mistakes checklist, then rebuild the top-line revenue-by-channel number using the CRM export.",
      mode: "diagnostic",
      conceptsCovered: [
        "Ignoring view-through and offline touches",
        "Treating DDA as ground truth",
        "Pair attribution with incrementality",
      ],
      steps: [
        {
          stepId: "step-1-crm-join-gap",
          concept: "Ignoring view-through and offline touches",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson warns: if you do not feed CRM closed-won data back into the model, B2B attribution is fiction. Offline and phone-closed deals never show up in platform-reported conversions.",
          question:
            "The paid team's report claims $2.1M in pipeline from Paid Social using platform-reported conversions. The CRM closed-won export shows a different number by source. Where's the gap?",
          toolName: "Google Sheets",
          where: "Cross-reference platform-export.csv (ad-platform-reported conversions) against crm-closed-won.csv (actual closed deals tagged by first-touch source).",
          procedure: [
            "Pull revenue-by-source from platform-export.csv ($2.1M Paid Social)",
            "Pull revenue-by-source from crm-closed-won.csv for the same period ($1.4M Paid Social, plus $410K tagged 'phone inquiry, source unknown')",
            "Identify the $700K gap and the unattributed phone-inquiry bucket as the two problems",
          ],
          outputSample:
            "Platform-reported Paid Social pipeline: $2.1M\nCRM closed-won, Paid Social first-touch: $1.4M\nCRM closed-won, 'phone inquiry / unknown source': $410K\nGap: $700K platform-reported revenue with no matching CRM record",
          healthy:
            "The report is corrected to the CRM-verified $1.4M, with the $410K phone-inquiry bucket called out separately as an attribution blind spot to fix, not folded into Paid Social.",
          unhealthy:
            "Presenting the $2.1M platform number to the CFO unchanged, because it came straight out of the ad dashboard.",
          interpret:
            "A platform's own conversion count is not the same as a closed-won deal; without the CRM join, the report is measuring clicks, not revenue.",
          soWhat: [
            {
              symptom: "A channel report is built entirely from ad-platform conversion counts",
              action: "Join against CRM closed-won data before presenting any revenue-by-channel number",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-dda-volume-sanity-check",
          concept: "Treating DDA as ground truth",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson warns that DDA is a model trained on your leaky tracking data, not a measurement of reality, and needs volume (historically around 600 conversions and 400 non-converting paths in 30 days per property) to be reliable.",
          question:
            "GA4's DDA report shows Email getting 22% credit this month, but the property only logged 140 total conversions in the last 30 days. Should that number be trusted for a budget decision?",
          toolName: "Google Analytics 4",
          where: "GA4 Advertising > Attribution > Model comparison, check the conversion volume note for the property.",
          procedure: [
            "Open the DDA model comparison report and note Email's 22% credit",
            "Check the property's total 30-day conversion volume (140)",
            "Compare against the ~600 conversion / ~400 non-converting-path volume DDA historically needs to be stable",
            "Flag the 22% figure as low-confidence rather than a decision input",
          ],
          outputSample:
            "DDA credit, Email: 22%\nProperty 30-day conversions: 140 (below the ~600 volume DDA needs for stability)\nVerdict: directionally interesting, not a budget-reallocation trigger on its own",
          healthy:
            "The 22% figure is reported alongside its low conversion volume, with a recommendation to revisit once volume grows or to corroborate with linear/last-click instead.",
          unhealthy:
            "Reallocating budget away from Email based on a DDA percentage from a property that hasn't logged enough conversions for the model to be stable.",
          interpret:
            "DDA's output is only as trustworthy as its input volume; a black-box percentage from a low-volume property is a guess wearing a precise-looking number.",
          soWhat: [
            {
              symptom: "A DDA credit percentage is being used to justify a budget cut on a low-conversion-volume property",
              action: "Check the property's 30-day conversion volume against DDA's stability threshold before acting on the number",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-incrementality-recommendation",
          concept: "Pair attribution with incrementality",
          lessonAnchor: "how-it-works-the-five-models-and-what-each-lies-about",
          theoryRecap:
            "The lesson's playbook says to pair attribution with incrementality: geo holdouts, ghost bids, and PSA tests tell you what would have happened anyway, attribution alone cannot.",
          question:
            "After correcting the CRM gap and flagging the low-volume DDA number, what test should the memo recommend before Casper cuts the Email budget the report originally suggested?",
          toolName: "Google Sheets",
          where: "Draft the test recommendation in the same memo used for the CRM and DDA findings.",
          procedure: [
            "Identify Email as the channel with the most attribution uncertainty from steps 1 and 2",
            "Propose a geo holdout test: pause Email sends to a matched subset of regions for 4 weeks",
            "Compare CRM closed-won revenue in the holdout region against the control region to measure Email's true incremental effect",
          ],
          outputSample:
            "Recommendation: 4-week geo holdout on Email in 3 matched low-volume regions, compare closed-won revenue vs 3 control regions before any budget cut.",
          healthy:
            "The memo recommends a holdout test instead of a budget decision based on the uncertain attribution numbers alone.",
          unhealthy: "Cutting Email budget immediately based on the corrected-but-still-model-based numbers, with no incrementality check.",
          interpret:
            "Attribution tells you where credit was assigned; only a holdout or similar test tells you what would have happened without the channel.",
          soWhat: [
            {
              symptom: "A budget cut is being proposed based on attribution model output alone",
              action: "Recommend a geo holdout or similar incrementality test before the cut, not instead of ever testing it",
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
            role: "Cross-reference the platform export against the CRM export and draft the memo",
            why: "Free, sufficient for joining two small CSV exports",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Check DDA credit shares and the property's 30-day conversion volume",
            why: "Free tier includes the Attribution model comparison report",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A corrected one-page pipeline memo showing platform-reported vs CRM-verified revenue by channel, the DDA volume caveat, and one incrementality test recommendation.",
      sampleOutput:
        "Allbirds, corrected channel view (excerpt)\n\nPaid Social: platform-reported $1.8M -> CRM-verified $1.3M (-$500K gap, mostly assisted-not-closing traffic)\nEmail: DDA shows 19% credit on 155 monthly conversions, below stability threshold, flagged not actioned\nRecommendation: 4-week geo holdout on Email before any budget change",
      successCriteria: [
        "Identifies the specific dollar gap between platform-reported and CRM-verified revenue",
        "Flags the DDA percentage as low-confidence given the property's conversion volume, instead of accepting it at face value",
        "Recommends an incrementality test rather than a budget decision based on attribution output alone",
      ],
      portfolioReady: true,
    },
  ],

  "privacy-sandbox": [
    {
      id: "privacy-sandbox-readiness-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Post-October Audit: Is This Tracking Stack Still Viable?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a stale 2024 'cookieless readiness' inventory of a tracking stack, apply the lesson's post-October-2025 framework to classify each line item as retired, still shipping, or never real, and flag the one action that matters most this quarter.",
      companyId: "zomato",
      scenario:
        "You're the analytics lead at Zomato. A 2024 'Privacy Sandbox readiness' doc is about to get copy-pasted into next quarter's roadmap by a well-meaning PM who hasn't seen the October 2025 retirement announcement.",
      brief:
        "Sort each stack component into retired, still shipping, or never was real, then flag the single line item that deserves next sprint's budget.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing retired Privacy Sandbox APIs from surviving privacy-web standards",
        "Prioritizing first-party data and server-side tagging over dead APIs",
      ],
      steps: [
        {
          stepId: "step-1-classify-apis",
          concept: "Distinguishing retired Privacy Sandbox APIs from surviving privacy-web standards",
          lessonAnchor: "key-takeaways",
          theoryRecap:
            "On October 17, 2025, Google retired Topics, Protected Audience, and Attribution Reporting on Chrome and Android. CHIPS, FedCM, Private State Tokens, and the W3C interoperable attribution work are the parts of the roadmap that are actually shipping.",
          question:
            "The doc lists six 2024-era line items. Which ones are dead, which are alive, and which were never a real product commitment to begin with?",
          toolName: "Google Sheets",
          where: "Paste the six-row stack inventory into a new sheet and add a 'Status' column.",
          procedure: [
            "Paste the inventory: Topics API interest-group pipeline, Protected Audience remarketing auction, Attribution Reporting API conversion pings, CHIPS-partitioned session cookies, FedCM sign-in, server-side GTM container",
            "Tag each row RETIRED, SURVIVING, or NEVER SHIPPED using the lesson's Key Takeaways list as the source of truth",
            "Highlight any row still marked 'in progress' in the original doc that is actually a retired API",
          ],
          outputSample:
            "Row                                   2024 doc status   Audited status\nTopics API interest-group pipeline    In progress        RETIRED (Oct 17, 2025)\nProtected Audience remarketing        Planned Q1 2026    RETIRED (Oct 17, 2025)\nAttribution Reporting API pings       Live pilot         RETIRED (Oct 17, 2025)\nCHIPS-partitioned session cookies     Not started        SURVIVING, ship this\nFedCM sign-in                         Not started        SURVIVING\nServer-side GTM container             Live               SURVIVING (keep, expand)",
          healthy:
            "Three of six rows get relabeled RETIRED in under ten minutes and removed from the roadmap before anyone estimates dev time against them.",
          unhealthy:
            "A sprint gets scoped to 'finish the Protected Audience pilot' because nobody checked the doc's status against the October 2025 announcement.",
          interpret:
            "A stack inventory is only as good as its last audit date; treat any pre-October-2025 Privacy Sandbox doc as unverified until checked line by line.",
          soWhat: [
            {
              symptom: "Roadmap still lists Protected Audience or Topics work as upcoming",
              action: "Strike the row and redirect the estimated hours to CHIPS or server-side tagging work",
              effort: "5 min",
            },
            {
              symptom: "Nobody has re-audited the tracking doc since before October 2025",
              action: "Schedule a one-time line-by-line review against the lesson's Key Takeaways",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-prioritize-next-action",
          concept: "Prioritizing first-party data and server-side tagging over dead APIs",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook ranks server-side tagging, first-party identifiers, and consent-mode modeling above piloting any surviving Privacy Sandbox API, because those are the pieces that carry measurement whether or not Chrome ever changes cookie behavior.",
          question:
            "With three dead rows struck and two limited-scope survivors (CHIPS, FedCM) left, which single remaining action should get next sprint?",
          toolName: "Google Sheets",
          where: "Add an 'Impact if skipped' column next to the Status column from step 1.",
          procedure: [
            "For each SURVIVING row, write one sentence on what breaks if it's skipped this quarter",
            "Rank the three surviving rows (CHIPS, FedCM, server-side GTM) by that impact sentence",
            "Circle the top-ranked row as the sprint recommendation",
          ],
          outputSample:
            "SURVIVING row              Impact if skipped this quarter\nServer-side GTM expansion  First-party conversion data keeps degrading as ad blockers spread\nCHIPS partitioning         Embedded widget tracking silently breaks in Safari/Firefox first\nFedCM sign-in              Login friction stays high, but nothing measurement-critical breaks\n\nRecommendation: expand server-side GTM coverage first.",
          healthy:
            "The recommendation names one row, not three, and the reasoning is 'what breaks,' not 'what's newest.'",
          unhealthy:
            "The memo recommends piloting FedCM first because it's the least-understood API, not because it's the highest-impact gap.",
          interpret:
            "When every dead API is stripped out, the real prioritization question is which surviving, boring plumbing work protects the most measurement if skipped.",
          soWhat: [
            {
              symptom: "Team has bandwidth for exactly one privacy-web project this quarter",
              action: "Default to expanding server-side tagging coverage before piloting CHIPS or FedCM",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Classify and rank the tracking-stack inventory",
            why: "Free, no account friction, sortable columns are enough for a six-row audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page audit memo: each 2024 line item relabeled RETIRED/SURVIVING/NEVER SHIPPED, plus one named recommendation for next sprint.",
      sampleOutput:
        "Squarespace tracking-stack audit (excerpt)\n\nRETIRED (strike from roadmap):\n  - Topics API interest-group sync — retired Oct 17, 2025\n  - Attribution Reporting API pilot — retired Oct 17, 2025\n\nSURVIVING (keep):\n  - CHIPS partitioned cookies for embedded template previews\n  - Server-side GTM for checkout conversion events\n\nRecommendation: expand server-side GTM to cover the trial-signup funnel before piloting CHIPS further; checkout data loss is the bigger revenue risk.",
      successCriteria: [
        "Every 2024-era line item is correctly relabeled against the lesson's October 2025 Key Takeaways",
        "The final recommendation names exactly one surviving action, justified by what breaks if skipped",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the audit against your own company's or a real client's actual tracking documentation instead of the supplied inventory.",
    },
    {
      id: "consent-mode-recovery-forecast",
      tier: "core",
      archetype: "forecast",
      title: "Forecasting the Conversion Recovery a Consent-Mode Rollout Should Deliver",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a site's current consent-accept rate and monthly conversion volume, forecast a defensible range for post-modeling conversion recovery, then check that estimate against the lesson's real published benchmarks before it goes to a VP.",
      companyId: "squarespace",
      scenario:
        "You're the marketing analytics manager at Squarespace. EU consent-accept rates just dropped to 54%, and a VP wants a number, in writing, for how many 'missing' conversions Consent Mode v2 modeling will realistically recover before they approve the engineering ticket.",
      brief:
        "Build a forecast range grounded in real benchmark data, not a single guessed number, and separate plumbing fixes from consent modeling in the writeup.",
      mode: "calibration",
      conceptsCovered: [
        "Consent Mode v2 and modeled conversions",
        "Server-side tagging is plumbing, not a consent fix",
      ],
      steps: [
        {
          stepId: "step-1-benchmark-forecast",
          concept: "Consent Mode v2 and modeled conversions",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook item 3 says Google Ads and GA4 lean on consent mode v2 plus modeling for unconsented traffic, enforced in the EU since March 2024. The lesson's example callout cites real 2024 field data: Protected Audience added latency and reduced relevance versus cookies, and Attribution Reporting delivered noisy, delayed counts, with Criteo reporting roughly 40 percent lower ARA-measured conversions than their cookie baseline.",
          question:
            "Squarespace's EU traffic sees 8,400 conversions/month at a 54% consent-accept rate. Without modeling, the other 46% of conversions are invisible to Google Ads bidding. What recovery range should the forecast state, and why not a single point number?",
          toolName: "Google Sheets",
          where: "Build a small forecast table: current visible conversions, modeled-recovery low/mid/high scenarios.",
          procedure: [
            "Calculate current visible conversions: 8,400 x 0.54 = 4,536/month",
            "Apply a conservative recovery band using real published ranges, not an invented single number: modeling typically recovers a median ~17% lift in reported conversions, with vertical-dependent ranges from roughly 15-25%, and B2B-style setups seeing 30-50% recovery of previously lost attribution",
            "Present low (15%), mid (17%, the published median), and high (25%) scenarios as separate rows, not one blended average",
          ],
          outputSample:
            "Scenario         Assumption            Forecast recovered/month\nLow              15% lift              +680 conversions\nMedian (Google)  17% lift              +771 conversions\nHigh (vertical)  25% lift              +1,134 conversions\n\nCurrent visible: 4,536/month. Range communicated to VP: +680 to +1,134/month, median case +771.",
          healthy:
            "The VP gets a three-scenario range anchored to Google's own published median, with the mid-case clearly labeled as the number to plan budget around.",
          unhealthy:
            "The forecast reports a single invented number like '+2,000 conversions' with no scenario range and no citation for where the percentage came from.",
          interpret:
            "A modeling forecast is a range built from published benchmarks, not a point estimate, because consent-accept rate, vertical, and implementation quality all shift the real outcome.",
          soWhat: [
            {
              symptom: "Stakeholder asks for 'the number' Consent Mode will recover",
              action: "Deliver a low/median/high range citing Google's published modeling benchmarks, not a single guess",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-separate-plumbing-from-modeling",
          concept: "Server-side tagging is plumbing, not a consent fix",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section warns against treating server-side GTM as a privacy fix: it is plumbing, not consent, and a lawful basis plus consent mode is still required regardless of how the tags are routed.",
          question:
            "The engineering ticket bundles 'migrate to server-side GTM' and 'enable Consent Mode v2 modeling' as one line item. Should the forecast treat them as one recovery number or two?",
          toolName: "Looker Studio",
          where: "Build a two-row comparison in a scratch Looker Studio report: plumbing-only vs. plumbing-plus-modeling.",
          procedure: [
            "Label row 1 'Server-side GTM only': improves data completeness and ad-blocker resilience, but does not create modeled conversions for consent-declined visitors",
            "Label row 2 'Server-side GTM + Consent Mode v2 modeling': adds the +680 to +1,134/month forecast from step 1 on top of row 1's plumbing gains",
            "Flag in the writeup that shipping row 1 alone will not produce the conversion-recovery number the VP is expecting",
          ],
          outputSample:
            "Improvement                          Recovers consent-declined conversions?\nServer-side GTM migration only       No, improves delivery reliability only\n+ Consent Mode v2 modeling            Yes, +680 to +1,134/month forecast",
          healthy:
            "The engineering ticket gets split into two line items so the plumbing work isn't quietly credited with a recovery number it can't deliver on its own.",
          unhealthy:
            "The VP is told 'the server-side migration will recover ~800 conversions/month,' when that number actually depends on the separate Consent Mode modeling work shipping too.",
          interpret:
            "Plumbing and consent modeling solve different problems; bundling their forecasts into one number sets up a broken promise when only one half ships on schedule.",
          soWhat: [
            {
              symptom: "One engineering ticket bundles server-side migration and consent modeling",
              action: "Split into two tickets with separate, correctly-attributed forecast numbers",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the low/median/high recovery forecast table",
            why: "Free, fast enough for a scenario table stakeholders can review live",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Looker Studio",
            role: "Compare plumbing-only vs. plumbing-plus-modeling recovery",
            why: "Free, makes the two-scenario split visual for a non-technical VP",
            required: false,
            fallback: "A second Google Sheets tab works if a dashboard tool isn't needed",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page forecast memo with a three-scenario (low/median/high) conversion-recovery range, and an explicit split between plumbing work and consent-modeling work.",
      sampleOutput:
        "Adyen EU merchant-dashboard conversions, forecast memo (excerpt)\n\nCurrent visible conversions: 11,200/month at 61% consent-accept rate\nForecast recovery range: +1,300 (low, 15%) to +2,100 (high, 25%) monthly, median case +1,660 (17%)\n\nNote: this range assumes Consent Mode v2 modeling ships alongside the server-side GTM migration. The migration alone does not produce this recovery.",
      successCriteria: [
        "Forecast presents a low/median/high range grounded in the lesson's real published benchmarks, not a single invented number",
        "Memo explicitly separates what server-side tagging plumbing delivers from what consent-mode modeling delivers",
      ],
      portfolioReady: true,
      stretch:
        "Rebuild the forecast using your own site's or a real client's actual consent-accept rate and monthly conversion volume.",
    },
  ],
};
